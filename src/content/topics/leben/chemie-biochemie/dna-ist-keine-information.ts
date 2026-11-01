import type { Claim, Source } from '../../../schema.ts';

const shannon1948: Source = {
  kind: 'wissenschaft',
  author: 'Claude E. Shannon',
  work: '„A Mathematical Theory of Communication", Bell System Technical Journal 27, S. 379–423 und 623–656',
  year: '1948',
  quote: `Diese semantischen Aspekte der Kommunikation sind für das technische Problem irrelevant.`,
  original: 'These semantic aspects of communication are irrelevant to the engineering problem.',
  translation: 'eigene Übersetzung',
  status: 'verbatim',
  note: 'Shannon schloss Bedeutung ausdrücklich aus seinem Maß aus – ein wichtiger Punkt für die Debatte.',
};

const szostak2003: Source = {
  kind: 'wissenschaft',
  author: 'Jack W. Szostak',
  work: '„Functional information: Molecular messages", Nature 423, S. 689',
  year: '2003',
  quote: `Szostak schlägt vor, die Information eines Biomoleküls nicht über Shannon, sondern über seine Funktion zu messen: als Seltenheit derjenigen Sequenzen, die eine bestimmte Funktion mindestens in einem bestimmten Grad erfüllen.`,
  status: 'paraphrase',
};

const hazen2007: Source = {
  kind: 'wissenschaft',
  author: 'Robert M. Hazen, Patrick L. Griffin, James M. Carothers, Jack W. Szostak',
  work: '„Functional information and the emergence of biocomplexity", PNAS 104 (Suppl. 1), S. 8574–8581',
  year: '2007',
  quote: `Formalisierung: Die funktionale Information I(Ex) = −log2 F(Ex), wobei F(Ex) der Anteil aller möglichen Konfigurationen ist, die eine Funktion mindestens im Grad Ex erfüllen.`,
  status: 'paraphrase',
  url: 'https://doi.org/10.1073/pnas.0701744104',
};

const maynardSmith2000: Source = {
  kind: 'gegner',
  author: 'John Maynard Smith',
  work: '„The Concept of Information in Biology", Philosophy of Science 67, S. 177–194',
  year: '2000',
  quote: `Der Evolutionsbiologe verteidigt den wörtlichen (semantischen) Gebrauch des Informationsbegriffs in der Biologie: Der genetische Code sei symbolisch, weil die Zuordnung chemisch willkürlich ist; die Bedeutung erklärt er durch natürliche Selektion.`,
  status: 'paraphrase',
  note: 'Ein Evolutionsbiologe als Zeuge dafür, dass „Information" keine bloße Metapher ist.',
};

const griffiths2001: Source = {
  kind: 'gegner',
  author: 'Paul E. Griffiths',
  work: '„Genetic Information: A Metaphor in Search of a Theory", Philosophy of Science 68, S. 394–412',
  year: '2001',
  quote: `Griffiths hält den Informationsbegriff in der Genetik für eine Metapher ohne tragfähige Theorie und vertritt eine „Paritätsthese": Auch nicht-genetische Faktoren seien in gleichem Sinn informativ.`,
  status: 'paraphrase',
};

const flewHabermas2004: Source = {
  kind: 'fachliteratur',
  author: 'Antony Flew, Gary R. Habermas',
  work: '„My Pilgrimage from Atheism to Theism: An Exclusive Interview with Former British Atheist Professor Antony Flew", Philosophia Christi 6 (2), S. 197–211',
  year: '2004',
  quote: `Flew erklärt, die Befunde von mehr als fünfzig Jahren DNA-Forschung hätten Material für ein neues und enorm starkes Design-Argument geliefert.`,
  status: 'paraphrase',
  note: 'Dieses Interview stammt aus der Zeit vor dem umstrittenen Buch „There Is a God" (2007) und ist daher die sicherere Quelle.',
};

const claim: Claim = {
  id: 'dna-ist-keine-information',
  title: `„DNA ist nur Chemie – keine echte Information."`,
  proponents: [
    { name: 'Paul E. Griffiths', role: 'Wissenschaftsphilosoph, University of Sydney', work: '„Genetic Information: A Metaphor in Search of a Theory" (2001)' },
    { name: 'Jeffrey Shallit', role: 'Informatiker, University of Waterloo', work: `Elsberry & Shallit, „Information theory, evolutionary computation, and Dembski's ‚complex specified information'", Synthese 178 (2011)` },
    { name: 'Dave Farina', role: 'Wissenschafts-YouTuber („Professor Dave Explains")' },
    { name: 'S. Joshua Swamidass', role: 'Computerbiologe (Washington University in St. Louis), christlicher Kritiker des ID-Informationsarguments', work: 'Peaceful Science' },
  ],
  steelman: `DNA ist ein Molekül, das den Gesetzen der Chemie folgt – nicht mehr. Wörter wie „Code", „Botschaft" oder „Bauplan" sind nützliche Metaphern, mehr nicht. Die einzige präzise Informationstheorie, die von Claude Shannon, misst nur die Unwahrscheinlichkeit einer Zeichenfolge und sagt ausdrücklich nichts über Bedeutung. Nach Shannon hat eine zufällige Sequenz sogar die meiste Information – und Mutationen erhöhen die Shannon-Information ständig, etwa durch Genverdopplung mit anschließender Veränderung. Evolutionäre Algorithmen erzeugen Information ohne Designer. Auch Schneeflocken und Kristalle zeigen komplexe Muster aus reiner Physik. Die Rede von „spezifizierter" oder „funktionaler" Information ist ein subjektiver Begriff, den ID-Vertreter so lange dehnen, bis er nur noch auf das passt, was sie Gott zuschreiben wollen. Das Argument „DNA ist Information, Information braucht einen Geist" beruht auf einem Wortspiel zwischen Shannon-Information und Alltagsbedeutung.`,
  biblical: {
    summary: `Die Bibel beschreibt Schöpfung als Sprechakt: „Gott sprach … und es geschah" (Gen 1), „Der Himmel ist durchs Wort des HERRN gemacht" (Ps 33,6), „Im Anfang war das Wort (Logos)" (Joh 1,1), „daß die Welt durch Gottes Wort fertig ist" (Hebr 11,3). Man sollte keine moderne Informationstheorie in diese Texte hineinlesen. Aber die Grundaussage – die Wirklichkeit ist aus Wort, Vernunft und Sinn hervorgegangen – passt bemerkenswert zum Befund, dass das Leben auf einem echten Code beruht.`,
    sources: [
      { kind: 'bibel', work: 'Psalmen', ref: '33,6', quote: `Der Himmel ist durchs Wort des HERRN gemacht und all sein Heer durch den Geist seines Mundes.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '1,1–3', quote: `Im Anfang war das Wort, und das Wort war bei Gott, und Gott war das Wort. Dasselbe war im Anfang bei Gott. Alle Dinge sind durch dasselbe gemacht, und ohne dasselbe ist nichts gemacht, was gemacht ist.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Hebräer', ref: '11,3', quote: `Durch den Glauben merken wir, daß die Welt durch Gottes Wort fertig ist, daß alles, was man sieht, aus nichts geworden ist.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Athanasius vergleicht den Logos mit einem Musiker, der die Saiten einer Lyra zur Harmonie stimmt, und mit einem König, der eine Stadt ordnet. Die Schöpfung ist für die alexandrinische Theologie von Vernunft (logos) durchdrungen, weil sie vom Logos stammt. Dass die Lebensvorgänge auf geordneten, „lesbaren" Strukturen beruhen, ist in dieser Sicht zu erwarten.`,
    sources: [
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Contra Gentes', ref: '42–43', quote: `Wie ein Musiker die Lyra stimmt und ein König die Stadt ordnet, so ordnet und erhält der Logos das All.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `In der Philosophie der Biologie gibt es eine echte Debatte: Manche (Griffiths, Sarkar) halten genetische „Information" für eine Metapher; andere – darunter der Evolutionsbiologe John Maynard Smith – verteidigen einen wörtlichen, semantischen Informationsbegriff, weil der genetische Code chemisch willkürlich und damit symbolisch ist. Unstrittig ist: Shannon-Information misst nicht Funktion oder Bedeutung (das sagen auch ID-Vertreter). Gerade deshalb haben Szostak und Hazen „funktionale Information" als quantitatives Maß eingeführt. Mutationen können Shannon-Information erhöhen; strittig ist, ob ungelenkte Prozesse große Mengen *neuer funktionaler* Information erzeugen können – und für den Ursprung des Lebens, vor jeder Replikation, gibt es dafür keinen gezeigten Mechanismus.`,
    sources: [maynardSmith2000, griffiths2001, szostak2003, hazen2007, shannon1948],
  },
  quickAnswer: `Natürlich ist DNA Chemie – so wie Tinte auf Papier Chemie ist. Aber die Reihenfolge der Buchstaben wird nicht von der Chemie der Tinte bestimmt, und die Reihenfolge der Basen nicht von chemischen Bindungskräften. Diese Reihenfolge legt über einen Code fest, welche Proteine gebaut werden – genau das nannte Crick Information. Shannons Maß erfasst das nicht; deshalb hat der Nobelpreisträger Jack Szostak „funktionale Information" definiert.`,
  keyPoints: [
    `**Chemie und Information schließen sich nicht aus:** Jedes Informationsmedium ist physisch (Tinte, Magnetfeld, Schallwelle); entscheidend ist die Anordnung, die das Medium nicht selbst festlegt.`,
    `**Sequenz chemisch frei:** Die Basen hängen am Zucker-Phosphat-Rückgrat ohne bevorzugte Reihenfolge – nur deshalb kann DNA beliebige Botschaften speichern (Polanyi).`,
    `**Shannon zugeben:** Shannon schloss Bedeutung ausdrücklich aus. Das Argument stützt sich auf funktionale Information (Szostak 2003; Hazen et al. 2007).`,
    `**Wörtlicher Sprachgebrauch:** Code, Transkription, Translation, Korrekturlesen – Molekularbiologen meinen das technisch; selbst Maynard Smith verteidigt den wörtlichen Informationsbegriff.`,
    `**Zeugen aus dem anderen Lager:** Dawkins spricht von „digitaler Information", Bill Gates verglich DNA mit einem weit fortgeschrittenen Computerprogramm; Antony Flew nannte die DNA-Forschung einen Grund für seine Abkehr vom Atheismus.`,
    `**Simulationen enthalten Vorgaben:** Evolutionäre Algorithmen erzeugen Information nur mit von Programmierern eingebauter Zielinformation (Marks, Dembski, Ewert).`,
  ],
  argument: {
    name: 'DNA trägt funktionale Information',
    summary: 'Ein deduktives Argument, das den Streit um den Begriff klärt – Voraussetzung für das Designargument.',
    premises: [
      {
        text: `P1: Die Basenfolge entlang eines DNA-Strangs ist nicht durch chemische Gesetze oder Bindungsaffinitäten festgelegt.`,
        support: `Die vier Basen sind über das Zucker-Phosphat-Rückgrat verknüpft, das für jede Reihenfolge gleich ist; festgelegt ist nur die Paarung zwischen den Strängen (A–T, G–C), nicht die Folge entlang eines Strangs.`,
        sources: [{ kind: 'wissenschaft', author: 'Michael Polanyi', work: '„Life\'s Irreducible Structure", Science 160, S. 1308–1312', year: '1968', status: 'paraphrase' }],
      },
      {
        text: `P2: Diese Folge spezifiziert über eine chemisch willkürliche Zuordnung (den genetischen Code, umgesetzt durch tRNAs und Synthetasen) die Struktur und Funktion von Proteinen und RNAs.`,
        support: `Lehrbuchwissen seit Cricks Sequenzhypothese (1958) und der Entschlüsselung des Codes (Nirenberg, Khorana; Nobelpreis 1968).`,
      },
      {
        text: `P3: Ein Medium, dessen Anordnung physikalisch unbestimmt, aber über eine konventionelle Zuordnung funktional festgelegt ist, trägt Information im vollen – funktionalen bzw. semantischen – Sinn.`,
        support: `So definieren wir Information in Sprache und Technik; Maynard Smith wendet genau dieses Kriterium (Willkürlichkeit der Zuordnung) auf die Biologie an; Szostak und Hazen quantifizieren die funktionale Seite.`,
        sources: [maynardSmith2000, hazen2007],
      },
    ],
    conclusion: `DNA trägt echte funktionale Information – keine bloße Metapher. Woher diese Information stammt, ist die Frage, die das abduktive Designargument (siehe „Gott der Lücken") beantwortet.`,
  },
  voices: [
    {
      person: 'stephen-meyer',
      role: 'als Wissenschaftsphilosoph',
      text: `Meyer unterscheidet drei Begriffe: Shannon-Information (Unwahrscheinlichkeit einer Zeichenfolge), spezifizierte bzw. funktionale Information (eine unwahrscheinliche Folge, die eine unabhängige Funktion erfüllt) und Bedeutung im Alltagssinn. DNA besitzt nicht nur Shannon-Information, sondern funktionale Information: Ihre Sequenz ist sowohl unwahrscheinlich als auch für eine Funktion spezifiziert. Meyer verweist auf Cricks Sequenzhypothese von 1958, in der Information ausdrücklich als genaue Festlegung der Sequenz definiert wurde. Seine zentrale These: In jedem Fall, in dem wir die Entstehung funktionaler Information beobachten, steht ein Geist am Anfang.`,
      sources: [
        { kind: 'fachliteratur', author: 'Stephen C. Meyer', work: 'Signature in the Cell', ref: 'Kap. 4–5', year: '2009', status: 'paraphrase' },
        { kind: 'fachliteratur', author: 'Stephen C. Meyer', work: '„The Origin of Biological Information and the Higher Taxonomic Categories", Proceedings of the Biological Society of Washington 117, S. 213–239', year: '2004', status: 'paraphrase' },
      ],
    },
    {
      person: 'dembski',
      role: 'als Mathematiker',
      text: `Dembski unterscheidet Komplexität (Unwahrscheinlichkeit) von Spezifikation (Übereinstimmung mit einem unabhängig gegebenen Muster). Ein zufälliger Buchstabensalat ist komplex, aber nicht spezifiziert; „ABABAB" ist spezifiziert, aber nicht komplex; ein Sonett ist beides. Biologische Funktion liefert ein solches unabhängiges Muster. Erst die Kombination – spezifizierte Komplexität – erlaubt den Schluss auf Design, wie in Kryptografie und Forensik.`,
      sources: [{ kind: 'fachliteratur', author: 'William A. Dembski', work: 'The Design Inference (2. Aufl. mit Winston Ewert)', year: '2023', status: 'paraphrase' }],
    },
    {
      person: 'robert-marks',
      role: 'als Informatiker (evolutionäre Algorithmen)',
      text: `Marks hat mit Dembski und Ewert evolutionäre Computersimulationen analysiert. Ihr Ergebnis: Diese Programme finden ihre Ziele nur, weil die Programmierer „aktive Information" einbauen – über Fitnessfunktionen, Suchräume und Belohnungen, die das Ziel bereits enthalten. Ohne solche Vorgaben ist die Suche nicht besser als blinder Zufall. Simulationen zeigen also, was Information leisten kann, nicht wie sie ohne Information entsteht.`,
      sources: [{ kind: 'fachliteratur', author: 'Robert J. Marks II, William A. Dembski, Winston Ewert', work: 'Introduction to Evolutionary Informatics', year: '2017', status: 'paraphrase' }],
    },
    {
      person: 'flew',
      role: 'als Philosoph (ehemals führender Atheist)',
      text: `Antony Flew war jahrzehntelang einer der einflussreichsten atheistischen Philosophen. Im Interview mit Gary Habermas (2004) nannte er die Befunde der DNA-Forschung einen wesentlichen Grund dafür, dass er seine Meinung änderte: Sie lieferten Material für ein neues, starkes Design-Argument. Flew wurde Deist, nicht Christ – sein Zeugnis zeigt aber, dass der Schluss von der Information der DNA auf einen Geist kein frommes Wunschdenken ist, sondern einen erfahrenen Atheisten überzeugte.`,
      sources: [flewHabermas2004],
    },
    {
      person: 'athanasius',
      role: 'als Theologe des Logos',
      text: `Für Athanasius ist die Schöpfung vom Logos geordnet wie Musik vom Musiker. Er konnte nichts von DNA wissen; aber seine Grundeinsicht – dass Ordnung und Sinn in der Welt auf eine Vernunft zurückgehen, die nicht selbst Teil der Materie ist – ist genau die Frage, die der Befund eines Codes heute neu stellt.`,
      sources: [{ kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Contra Gentes', ref: '42', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'information-metapher',
      objection: `„Information" ist nur eine Metapher. DNA ist ein Molekül wie jedes andere.`,
      objectionBy: 'Paul Griffiths',
      targetsPremise: 3,
      answer: `Ein Molekül – ja. Aber die Molekularbiologie spricht ganz technisch von Code, Transkription, Translation, Korrekturlesen. Crick definierte Information 1958 als genaue Festlegung der Sequenz. Und selbst der Evolutionsbiologe John Maynard Smith verteidigte den wörtlichen Informationsbegriff, weil die Zuordnung im Code chemisch willkürlich ist – wie in einer Sprache.`,
      sources: [maynardSmith2000, griffiths2001],
      questionsBack: [`Wenn „Code" nur eine Metapher ist: Wofür erhielten Nirenberg und Khorana 1968 den Nobelpreis?`],
      followUps: [
        {
          id: 'maynard-smith-selektion',
          objection: `Maynard Smith begründet die Information aber gerade mit natürlicher Selektion, nicht mit Design.`,
          answer: `Richtig, und ich zitiere ihn fair: Wir stimmen in der Diagnose überein – Information im wörtlichen Sinn –, und streiten über die Ursache. Für den Ursprung des Lebens steht natürliche Selektion aber nicht zur Verfügung, denn sie setzt Vermehrung mit Vererbung voraus – also bereits Information.`,
          followUps: [
            {
              id: 'einfache-replikation',
              objection: `Vor der ersten Zelle gab es eben eine einfache Replikation mit wenig Information.`,
              objectionBy: 'Jack Szostak',
              answer: `Möglich – aber auch ein einfacher Replikator braucht eine funktionale Sequenz, etwa ein Ribozym von rund 200 Nukleotiden, und eine Kopiergenauigkeit oberhalb der Fehlerschwelle. Die Frage ist, wie selten solche Sequenzen sind. Siehe den Claim zur RNA-Welt.`,
              followUps: [
                {
                  id: 'funktionsdichte-hoch',
                  objection: `Funktion ist viel häufiger, als ID-Vertreter sagen: Keefe und Szostak fanden ATP-bindende Proteine mit einer Häufigkeit von etwa 1 zu 10^11.`,
                  objectionBy: 'Joshua Swamidass',
                  answer: `Ein wichtiger Befund, den ich anerkenne. Aber schwaches Binden von ATP ist noch keine Enzymaktivität; für echte katalytische Faltungen kam Douglas Axe auf weit kleinere Anteile. Die Zahlen sind umstritten – doch eine Zelle braucht viele verschiedene Funktionen zugleich, und die Seltenheiten multiplizieren sich.`,
                  sources: [
                    { kind: 'gegner', author: 'Anthony D. Keefe, Jack W. Szostak', work: '„Functional proteins from a random-sequence library", Nature 410, S. 715–718', year: '2001', status: 'paraphrase' },
                    { kind: 'wissenschaft', author: 'Douglas D. Axe', work: '„Estimating the Prevalence of Protein Sequences Adopting Functional Enzyme Folds", Journal of Molecular Biology 341, S. 1295–1315', year: '2004', status: 'paraphrase' },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'paritaetsthese',
          objection: `Auch Umweltfaktoren „informieren" die Entwicklung. Die DNA ist nicht privilegiert – das ist die Paritätsthese.`,
          objectionBy: 'Paul Griffiths',
          answer: `Die Paritätsthese betrifft Entwicklungsursachen allgemein. Aber nur die DNA legt über einen willkürlichen Code die Aminosäurefolge von Proteinen fest. Temperatur oder Nährstoffe beeinflussen die Entwicklung, aber sie schreiben keine 300 Buchstaben lange Proteinsequenz vor.`,
          followUps: [
            {
              id: 'haarspalterei',
              objection: `Das ist philosophische Haarspalterei.`,
              answer: `Nein, das ist der Kern: Ein Code erlaubt unbegrenzt viele verschiedene Botschaften mit denselben Zeichen. Genau diese Eigenschaft hat kein Umweltfaktor – und genau sie macht Leben in seiner Vielfalt möglich.`,
            },
          ],
        },
      ],
    },
    {
      id: 'shannon-zufall',
      objection: `Shannon-Information misst nur Unwahrscheinlichkeit. Zufallssequenzen haben die meiste Information, und Mutationen erhöhen sie ständig.`,
      objectionBy: 'Jeffrey Shallit',
      targetsPremise: 3,
      answer: `Völlig richtig – das gebe ich zu. Shannon hat Bedeutung ausdrücklich ausgeschlossen. Deshalb argumentiere ich nicht mit Shannon, sondern mit funktionaler Information: Eine Zufallsfolge hat viel Shannon-Information, aber keine Funktion. Jack Szostak hat genau dafür ein eigenes Maß vorgeschlagen.`,
      sources: [shannon1948, szostak2003],
      followUps: [
        {
          id: 'funktional-willkuerlich',
          objection: `Dann definiere „funktionale Information" – das ist doch Willkür.`,
          objectionBy: 'Jeffrey Shallit',
          answer: `Hazen, Szostak und Kollegen haben sie 2007 in PNAS formal definiert: Funktionale Information ist der negative Logarithmus des Anteils aller möglichen Sequenzen, die eine bestimmte Funktion mindestens in einem bestimmten Grad erfüllen. Das ist ein Maß aus der etablierten Forschung, keine ID-Erfindung.`,
          sources: [hazen2007],
          followUps: [
            {
              id: 'evolution-erhoeht-fi',
              objection: `Evolution erhöht auch funktionale Information – das zeigen Simulationen.`,
              objectionBy: 'Robert Hazen',
              answer: `Simulationen zeigen, was Selektion mit einem gegebenen Rahmen leisten kann. Robert Marks und Kollegen haben solche Programme analysiert: Sie funktionieren nur, weil Programmierer Zielinformation über Fitnessfunktionen und Belohnungen einbauen. Für den präbiotischen Fall, ohne Replikation, modellieren sie ohnehin nichts.`,
              followUps: [
                {
                  id: 'avida',
                  objection: `Im Avida-Experiment (Lenski u. a., Nature 2003) entstanden komplexe Funktionen ohne Vorgabe.`,
                  objectionBy: 'Jeffrey Shallit',
                  answer: `In Avida wurden die Zwischenschritte zur komplexen Funktion gezielt belohnt. Die Autoren berichten selbst, dass die komplexe Funktion nicht entstand, als die Belohnungen für die einfacheren Funktionen entfernt wurden. Das ist ein Musterbeispiel für „aktive Information" im Programm-Design.`,
                  sources: [
                    { kind: 'gegner', author: 'Richard E. Lenski, Charles Ofria, Robert T. Pennock, Christoph Adami', work: '„The evolutionary origin of complex features", Nature 423, S. 139–144', year: '2003', status: 'paraphrase' },
                    { kind: 'fachliteratur', author: 'Robert J. Marks II, William A. Dembski, Winston Ewert', work: 'Introduction to Evolutionary Informatics', year: '2017', status: 'paraphrase' },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'duplikation-mutation',
          objection: `Genduplikation plus Mutation ergibt neue Information. Fertig.`,
          objectionBy: 'Dave Farina',
          answer: `Duplikation kopiert vorhandene Information; die Frage ist, wie oft Mutationen daraus eine wirklich neue Funktion machen – darüber wird in der Evolutionsbiologie intensiv gestritten. Für den Ursprung des Lebens hilft das ohnehin nicht: Vor dem ersten Gen gibt es nichts zu duplizieren.`,
        },
      ],
    },
    {
      id: 'schneeflocken',
      objection: `Auch Schneeflocken und Kristalle zeigen komplexe Muster durch reine Physik. Keine Intelligenz nötig.`,
      objectionBy: 'Dave Farina',
      targetsPremise: 1,
      answer: `Kristalle sind Ordnung durch Wiederholung – ihr Muster folgt aus Naturgesetzen und Randbedingungen und enthält wenig Information. DNA ist das Gegenteil: eine aperiodische, nicht durch Gesetze festgelegte Folge, die eine Funktion codiert. Schrödinger sprach schon 1944 vom „aperiodischen Kristall" als Träger der Erbinformation.`,
      sources: [{ kind: 'wissenschaft', author: 'Erwin Schrödinger', work: 'What Is Life? (Was ist Leben?)', year: '1944', status: 'paraphrase', quote: `Schrödinger vermutete, der Träger der Erbinformation sei ein „aperiodischer Kristall".` }],
      followUps: [
        {
          id: 'chemische-praeferenzen',
          objection: `Aber die Chemie hat Präferenzen – manche Basenkombinationen sind stabiler. Sequenzen sind nicht völlig beliebig.`,
          targetsPremise: 1,
          answer: `Festgelegt ist die Paarung *zwischen* den Strängen (A mit T, G mit C). Entlang eines Strangs gibt es keine chemische Vorgabe, welche Base auf welche folgt. Wäre es anders, könnte DNA keine vielfältigen Botschaften speichern – das hat Polanyi 1968 in Science klargestellt.`,
          followUps: [
            {
              id: 'selbstorganisation-sequenz',
              objection: `Vielleicht bevorzugt Selbstorganisation trotzdem bestimmte Sequenzen.`,
              objectionBy: 'Stuart Kauffman',
              answer: `Dann würde der Informationsgehalt sinken, nicht steigen: Je stärker Gesetze eine Folge festlegen, desto weniger kann sie aussagen. Siehe den Claim zur Selbstorganisation.`,
            },
          ],
        },
      ],
    },
    {
      id: 'gates-dawkins-rhetorik',
      objection: `Die Vergleiche mit Computern bei Gates oder Dawkins sind Rhetorik. Eine Zelle ist kein Computer.`,
      answer: `Analogien sind nie perfekt. Aber es geht um abstrakte Eigenschaften, die tatsächlich zutreffen: digitale Zeichen, sequenzspezifische Codierung, Code-Tabelle, Fehlerkorrektur. Dawkins spricht ausdrücklich von „digitaler Information" – das meint er nicht als Bild.`,
      sources: [
        { kind: 'gegner', author: 'Richard Dawkins', work: 'River Out of Eden (Und es entsprang ein Fluss in Eden)', ref: 'Kap. 1', year: '1995', quote: `Dawkins beschreibt Gene als lange Ketten reiner digitaler Information und den Maschinencode der Gene als verblüffend computerähnlich; Leben sei „nur Bytes und Bytes und Bytes digitaler Information".`, original: 'Life is just bytes and bytes and bytes of digital information.', status: 'paraphrase', note: 'Der Satz „Life is just bytes and bytes and bytes of digital information" ist in Leserexzerpten aus Kap. 1 belegt; „uncannily computer-like" findet sich so in Rezensionen (u. a. Publishers Weekly) – Seitenzahlen je nach Ausgabe verschieden, daher sinngemäß.' },
        { kind: 'sonstiges', author: 'Bill Gates', work: 'The Road Ahead (New York: Viking/Penguin)', ref: 'S. 188 (Erstausgabe)', year: '1995 (überarb. 1996)', quote: `Die menschliche DNA sei wie ein Computerprogramm, aber weit, weit fortgeschrittener als jede je geschaffene Software.`, original: 'Human DNA is like a computer program but far, far more advanced than any software ever created.', status: 'paraphrase', note: 'Seitenangabe S. 188 nach Sekundärliteratur (u. a. creation.com/Answers in Genesis), nicht am Buch geprüft; der Wortlaut wird leicht unterschiedlich wiedergegeben (mit/ohne „Human", teils „we\'ve ever created"). Darum sinngemäß zitieren; die Aussage selbst ist unstrittig Gates zugeschrieben.' },
      ],
      followUps: [
        {
          id: 'kein-designer-folgt',
          objection: `Selbst wenn DNA Information ist – daraus folgt noch kein Designer.`,
          answer: `Richtig: Dafür braucht es einen weiteren Schritt, den Schluss auf die beste Erklärung – Intelligenz als einzige bekannte Ursache großer Mengen funktionaler Information. Diesen Schritt zog übrigens auch Antony Flew, der langjährige Atheist, wenn auch nur bis zum Deismus.`,
          sources: [flewHabermas2004],
          followUps: [
            {
              id: 'flew-manipuliert',
              objection: `Flew war alt und wurde von christlichen Autoren manipuliert.`,
              answer: `Über das Buch von 2007 gibt es berechtigte Fragen, wie viel davon Flew selbst formulierte. Deshalb stütze ich mich auf das frühere Interview mit Habermas (2004), in dem Flew selbst sagte, die DNA-Forschung habe ein starkes Design-Argument geliefert. Und das Argument steht ohnehin für sich – unabhängig von Flew.`,
              sources: [flewHabermas2004],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Bestimmt die Chemie der Tinte den Inhalt eines Briefes? Und die Chemie der Basen die Sequenz der DNA?`,
    `Wenn „Code" nur Metapher ist – wie nennst du eine Zuordnungstabelle zwischen Tripletts und Aminosäuren?`,
    `Kennst du ein Beispiel, in dem neue funktionale Information ohne Intelligenz entstand – und ohne bereits vorhandene Replikation?`,
    `Warum hat Jack Szostak ein eigenes Maß für funktionale Information vorgeschlagen, wenn Shannon genügt?`,
  ],
  avoid: [
    `Shannon-Information und Bedeutung vermischen („Die DNA hat so viel Shannon-Information, also Design") – genau das werfen Kritiker zu Recht vor.`,
    `„Information ist immateriell, also beweist DNA Gott" – zu schnell; argumentiere über Ursachen, nicht über Metaphysik.`,
    `Flew als Christ darstellen – er wurde Deist.`,
  ],
  concessions: [
    `Shannon-Information misst keine Bedeutung, und Mutationen können sie erhöhen.`,
    `In der Wissenschaftsphilosophie ist umstritten, wie genau der biologische Informationsbegriff zu fassen ist.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Stephen C. Meyer', work: 'Signature in the Cell', year: '2009', status: 'paraphrase' },
    hazen2007,
    maynardSmith2000,
    { kind: 'fachliteratur', author: 'Robert J. Marks II, William A. Dembski, Winston Ewert', work: 'Introduction to Evolutionary Informatics', year: '2017', status: 'paraphrase' },
  ],
  difficulty: 3,
  tags: ['Information', 'DNA', 'Shannon', 'Funktionale Information', 'Stephen Meyer', 'Antony Flew'],
  related: ['ursprung-des-lebens/ool-nur-wissensluecke', 'chemie-biochemie/genetischer-code-zufall', 'chemie-biochemie/selbstorganisation', 'ursprung-des-lebens/rna-welt', 'evolution/neue-proteine-leicht'],
};

export default claim;
