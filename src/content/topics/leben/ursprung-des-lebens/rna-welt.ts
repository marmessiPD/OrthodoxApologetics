import type { Claim, Source } from '../../../schema.ts';

const gilbert1986: Source = {
  kind: 'gegner',
  author: 'Walter Gilbert',
  work: '„Origin of life: The RNA world", Nature 319, S. 618',
  year: '1986',
  quote: `Gilbert prägte den Begriff „RNA-Welt": Am Anfang hätten RNA-Moleküle sowohl Information gespeichert als auch Reaktionen katalysiert.`,
  status: 'paraphrase',
};

const powner2009: Source = {
  kind: 'wissenschaft',
  author: 'Matthew W. Powner, Béatrice Gerland, John D. Sutherland',
  work: '„Synthesis of activated pyrimidine ribonucleotides in prebiotically plausible conditions", Nature 459, S. 239–242',
  year: '2009',
  quote: `Aktivierte Pyrimidin-Ribonukleotide (Cytidin, Uridin) wurden über einen Weg erhalten, der freie Ribose und freie Nukleobasen umgeht.`,
  status: 'paraphrase',
};

const lincolnJoyce2009: Source = {
  kind: 'wissenschaft',
  author: 'Tracey A. Lincoln, Gerald F. Joyce',
  work: '„Self-Sustained Replication of an RNA Enzyme", Science 323, S. 1229–1232',
  year: '2009',
  quote: `Zwei kreuzkatalytische RNA-Ligasen verknüpfen jeweils zwei vorgefertigte Oligonukleotid-Bausteine zur jeweils anderen Ligase; das System wächst exponentiell, solange die Bausteine zugeführt werden.`,
  status: 'paraphrase',
};

const bennerAsphalt: Source = {
  kind: 'wissenschaft',
  author: 'Steven A. Benner, Hyo-Joong Kim, Matthew A. Carrigan',
  work: '„Asphalt, Water, and the Prebiotic Synthesis of Ribose, Ribonucleosides, and RNA", Accounts of Chemical Research 45',
  year: '2012',
  quote: `Organische Gemische, denen Energie zugeführt wird, neigen dazu, zu komplexen, teerartigen Gemischen („Asphalt") zu werden; zudem zersetzt Wasser viele Bindungen der RNA („Wasserproblem").`,
  status: 'paraphrase',
  note: 'Benner ist selbst führender OOL-Forscher und Befürworter einer RNA-Welt – die Problembeschreibung stammt also von der Gegenseite.',
};

const koonin2007: Source = {
  kind: 'gegner',
  author: 'Eugene V. Koonin',
  work: '„The cosmological model of eternal inflation and the transition from chance to biological evolution in the history of life", Biology Direct 2:15',
  year: '2007',
  quote: `Koonin hält die zufällige Entstehung eines gekoppelten Replikations-Translations-Systems in unserem beobachtbaren Universum für extrem unwahrscheinlich und argumentiert, sie werde erst in einem unendlichen Multiversum (ewige Inflation) unvermeidlich.`,
  status: 'paraphrase',
  note: 'Die in der Sekundärliteratur oft genannte Zahl (Wahrscheinlichkeit kleiner als 10^-1018) vor Verwendung im Original prüfen.',
};

const larralde1995: Source = {
  kind: 'wissenschaft',
  author: 'Rosa Larralde, Michael P. Robertson, Stanley L. Miller',
  work: '„Rates of decomposition of ribose and other sugars: implications for chemical evolution", PNAS 92, S. 8158–8160',
  year: '1995',
  quote: `Ribose zerfällt bei neutralem pH rasch: Halbwertszeit etwa 73 Minuten bei 100 °C und einige Jahrzehnte bei 0 °C.`,
  status: 'paraphrase',
  note: 'Die genauen Zahlen vor Zitierung im Original prüfen; die Größenordnung (sehr instabil) ist unstrittig.',
};

const retraction2017: Source = {
  kind: 'wissenschaft',
  author: 'Tony Z. Jia, Albert C. Fahrenbach, Neha P. Kamat, Katarzyna P. Adamala, Jack W. Szostak',
  work: 'Rückzug von „Oligoarginine peptides slow strand annealing and assist non-enzymatic RNA replication" (Nature Chemistry 8, 2016), Nature Chemistry 9, S. 1286',
  year: '2017',
  quote: `Die Autoren zogen die Arbeit zurück, nachdem eine Labormitarbeiterin die Ergebnisse nicht reproduzieren konnte; falsch positive Resultate waren als Kopiervorgang fehlgedeutet worden. Szostak: Man sei „völlig geblendet von unserem Glauben" an die Ergebnisse gewesen.`,
  original: 'totally blinded by our belief',
  status: 'verbatim',
  url: 'https://retractionwatch.com/2017/12/05/definitely-embarrassing-nobel-laureate-retracts-non-reproducible-paper-nature-journal/',
  note: 'Szostaks Zitat nach Retraction Watch (5.12.2017). Szostaks Ehrlichkeit verdient Respekt – nicht als Waffe gegen ihn verwenden.',
};

const claim: Claim = {
  id: 'rna-welt',
  title: `„Die RNA-Welt erklärt den Ursprung des Lebens."`,
  proponents: [
    { name: 'Walter Gilbert', role: 'Molekularbiologe, Nobelpreis 1980', work: '„The RNA world", Nature 319 (1986)' },
    { name: 'Jack W. Szostak', role: 'Nobelpreisträger 2009, Protozellen und nichtenzymatische RNA-Replikation (Harvard, heute University of Chicago)' },
    { name: 'Gerald F. Joyce', role: 'Biochemiker, Salk Institute', work: 'Lincoln & Joyce, Science 323 (2009)' },
    { name: 'John D. Sutherland', role: 'Chemiker, MRC Laboratory of Molecular Biology, Cambridge', work: 'Powner, Gerland & Sutherland, Nature 459 (2009)' },
    { name: 'Dave Farina', role: 'Wissenschafts-YouTuber („Professor Dave Explains")', work: 'Debatte mit James Tour, Rice University (Mai 2023)' },
  ],
  steelman: `Das Henne-Ei-Problem des Lebens – DNA braucht Proteine zur Vermehrung, Proteine brauchen DNA als Bauplan – hat eine elegante Lösung: RNA kann beides. Sie speichert Information wie DNA und katalysiert Reaktionen wie Proteine (Ribozyme, Nobelpreis 1989 für Cech und Altman). Das Herz des Ribosoms, das alle Proteine herstellt, ist selbst RNA – ein molekulares Fossil der RNA-Welt. Die Chemie macht Fortschritte: Sutherland hat 2009 aktivierte Nukleotide unter präbiotisch plausiblen Bedingungen hergestellt, später Wege zu Vorstufen von RNA, Aminosäuren und Lipiden aus einem gemeinsamen Netzwerk gezeigt. Joyce hat sich selbst erhaltende RNA-Replikation mit exponentiellem Wachstum demonstriert, Holliger Polymerase-Ribozyme, die lange RNA-Stränge kopieren, Szostak nichtenzymatisches Kopieren in Protozellen. Jedes Teilproblem ist im Prinzip lösbar, und es gibt kein bekanntes chemisches Gesetz, das eine RNA-Welt verbietet. Gott ist in diesem Bild schlicht überflüssig.`,
  biblical: {
    summary: `Die Schrift sagt nicht, über welche molekularen Stufen Gott Leben hervorbrachte; sie sagt, *dass* alles Leben von ihm kommt: „In ihm war das Leben" (Joh 1,4), er „gibt jedermann Leben und Odem" (Apg 17,25). Ein christlicher Laie muss also keine bestimmte Chemie verteidigen oder bekämpfen. Die Frage ist allein, ob die RNA-Welt das Leben ohne Lenkung *erklärt* – und das ist eine Frage der Chemie, nicht der Exegese.`,
    detail: `Die Bibel verwendet für Gottes Schöpfungshandeln sowohl unmittelbares Schaffen (bara') als auch das Hervorbringen durch die Natur auf Gottes Befehl („Die Erde bringe hervor", Gen 1,24). Deshalb gilt: Selbst ein vollständig verstandener chemischer Weg würde Gottes Urheberschaft nicht widerlegen. Umgekehrt darf man aus der Bibel keine Unmöglichkeit chemischer Schritte ableiten. Die Debatte wird in der Sache geführt.`,
    sources: [
      { kind: 'bibel', work: 'Johannes', ref: '1,3–4', quote: `Alle Dinge sind durch dasselbe gemacht, und ohne dasselbe ist nichts gemacht, was gemacht ist. In ihm war das Leben, und das Leben war das Licht der Menschen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '17,24–25', quote: `Gott, der die Welt gemacht hat und alles, was darinnen ist, … so er selber jedermann Leben und Odem allenthalben gibt.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Psalmen', ref: '36,10', quote: `Denn bei dir ist die lebendige Quelle, und in deinem Lichte sehen wir das Licht.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Für Athanasius ist der Logos nicht nur Ursprung, sondern auch fortwährender Ordner der Schöpfung: Er hält alles zusammen wie ein Musiker die Saiten einer Lyra in Harmonie stimmt. Die Kirche erwartet daher Ordnung und Gesetzmäßigkeit in der Natur – und sie hat keinen Grund, die Leistungen der Chemie kleinzureden.`,
    sources: [
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Gegen die Heiden (Contra Gentes)', ref: '42', quote: `Der Logos ordnet und verbindet die Schöpfung wie ein Musiker, der die Lyra stimmt und die Töne zu einer Harmonie zusammenfügt.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Die RNA-Welt ist die führende Hypothese der OOL-Forschung – aber eine Hypothese mit schweren, von ihren Vertretern selbst benannten Problemen: Die präbiotische Synthese der Ribose mündet in Teer („Asphaltproblem", Benner); Ribose und Cytosin sind instabil; RNA-Ketten zerfallen in Wasser; Polymerisation verlangt chemisch aktivierte Nukleotide, die im Labor hergestellt werden; die Händigkeit muss rein sein; ein sich selbst kopierendes Ribozym wurde nie präbiotisch gefunden, sondern nur durch gezielte Laborevolution aus vorgefertigten Bausteinen gewonnen. Deshalb gibt es auch konkurrierende Ansätze (Stoffwechsel zuerst, RNA-Peptid-Koevolution). Eugene Koonin hielt die zufällige Entstehung eines Replikations-Translations-Systems für so unwahrscheinlich, dass er auf ein unendliches Multiversum auswich.`,
    detail: `**Was gelungen ist (fair anerkennen):**
- Ribozyme existieren; die Peptidyltransferase des Ribosoms ist RNA.
- Sutherlands Gruppe synthetisierte 2009 aktivierte Pyrimidin-Nukleotide auf einem Weg, der freie Ribose umgeht; 2015 folgte ein „cyanosulfidisches" Netzwerk zu Vorstufen von RNA, Aminosäuren und Lipiden (Patel et al., Nature Chemistry 7).
- Carells Gruppe (LMU München) beschrieb 2019 einen gemeinsamen Weg zu Purin- und Pyrimidin-Nukleosiden (Becker et al., Science 366).
- Lincoln & Joyce (2009): exponentielle Replikation zweier Ligase-Ribozyme aus vorgefertigten Oligonukleotiden.
- Polymerase-Ribozyme (Holliger u. a.) kopieren lange Stränge unter speziellen Bedingungen.

**Was ungelöst ist:**
- Synthesen bestehen aus getrennten Schritten mit gewählten, oft gereinigten Reagenzien in bestimmter Reihenfolge – auf einer realen Urerde müssten sie nacheinander und ohne Störung ablaufen.
- Kein Ribozym, das sich selbst aus Einzelnukleotiden vollständig kopiert, ist präbiotisch erreichbar gezeigt.
- Fehlerschwelle: Eine Replikation mit zu hoher Fehlerrate zerstört Information.
- Übergang zu Proteinen und genetischem Code.`,
    sources: [gilbert1986, powner2009, lincolnJoyce2009, bennerAsphalt, koonin2007,
      { kind: 'wissenschaft', author: 'Bhavesh H. Patel, Claudia Percivalle, Dougal J. Ritson, Colm D. Duffy, John D. Sutherland', work: '„Common origins of RNA, protein and lipid precursors in a cyanosulfidic protometabolism", Nature Chemistry 7, S. 301–307', year: '2015', status: 'paraphrase' },
    ],
  },
  quickAnswer: `Die RNA-Welt ist eine Hypothese, keine Erklärung. Ihre eigenen Vertreter nennen die Probleme: Zucker werden zu Teer, RNA zerfällt in Wasser, die Bausteine müssen chemisch aktiviert und einhändig sein, und ein sich selbst kopierendes RNA-Molekül wurde nur durch geplante Laborexperimente mit vorgefertigten Teilen gewonnen. Jeder Erfolg im Labor zeigt eher, wie viel Planung nötig ist.`,
  keyPoints: [
    `**Ehrlich anerkennen:** RNA kann Information speichern und katalysieren; das macht die Hypothese attraktiv.`,
    `**Synthese mit Regie:** Sutherlands Nukleotid-Synthese (2009) ist brillant, aber eine Abfolge getrennter Schritte mit gewählten Reagenzien, Reinigung und Reihenfolge – Tour: Der Chemiker ist der „Deus ex machina".`,
    `**Zeit und Wasser arbeiten gegen RNA:** Ribose und Cytosin zerfallen schnell; Phosphodiesterbindungen hydrolysieren; Polymerisation ist in Wasser thermodynamisch bergauf.`,
    `**Selbstreplikation nur mit vorgefertigten Teilen:** Lincoln & Joyce verknüpfen zwei maßgeschneiderte Oligonukleotide – keine Kopie aus Einzelbausteinen, keine neue Information.`,
    `**Information bleibt das Kernproblem:** Ein funktionierendes Ribozym ist eine spezifische Sequenz; woher kommt sie, bevor Selektion möglich ist?`,
    `**Koonins Eingeständnis:** Ein führender Evolutionsbiologe hielt die Entstehung von Replikation und Translation in unserem Universum für so unwahrscheinlich, dass er ein Multiversum bemühte.`,
  ],
  argument: {
    name: 'Die Stufenkette der RNA-Welt',
    summary: 'Eine Hypothese erklärt erst, wenn ihre notwendigen Stufen unter realistischen Bedingungen zusammen funktionieren.',
    premises: [
      {
        text: `P1: Eine RNA-Welt setzt mindestens voraus: (a) Synthese der Nukleotide, (b) einheitliche Händigkeit, (c) Verknüpfung zu Ketten in Wasser, (d) eine sich selbst kopierende, funktionale Sequenz, (e) Kompartiment und Fortbestand.`,
        support: `Das ist die Standard-Darstellung der Vertreter selbst (Gilbert, Joyce, Szostak); keine Stufe ist verzichtbar.`,
        sources: [gilbert1986],
      },
      {
        text: `P2: Für jede Stufe gibt es bisher nur Teilerfolge unter vom Experimentator gewählten, getrennten Bedingungen (gereinigte Reagenzien, Reihenfolge, Aktivierung, Konzentration).`,
        support: `Powner et al. 2009, Ferris 1996, Lincoln & Joyce 2009, Szostaks Arbeiten – jeweils mit sorgfältig vorbereiteten Ausgangsstoffen. Benner beschreibt die Asphalt- und Wasserprobleme.`,
        sources: [powner2009, lincolnJoyce2009, bennerAsphalt],
      },
      {
        text: `P3: Auf der präbiotischen Erde hätten alle Stufen ohne Lenkung nacheinander und im selben Milieu stattfinden müssen, ohne dass Nebenreaktionen und Zersetzung die Produkte zerstören.`,
        support: `Tours „Massentransfer"-Argument: Produkte eines Schritts müssen in ausreichender Menge und Reinheit zum nächsten Schritt gelangen; Zersetzung (Ribose, Cytosin) läuft parallel.`,
        sources: [larralde1995],
      },
    ],
    inferences: [
      `Die Wahrscheinlichkeiten der Stufen multiplizieren sich; Teilerfolge unter Laborregie addieren sich nicht zu einem ungelenkten Gesamtweg.`,
    ],
    conclusion: `Die RNA-Welt ist ein Forschungsprogramm, keine Erklärung des Lebensursprungs. Wer behauptet, sie „erkläre" ihn, überzieht den Befund.`,
  },
  voices: [
    {
      person: 'james-tour',
      role: 'als synthetischer Chemiker',
      text: `Tour analysiert die Nukleotid-Synthesen Schritt für Schritt: Jeder Schritt beginnt mit einer gezielt gewählten, meist gereinigten Verbindung in definierter Konzentration; Zwischenprodukte werden isoliert; pH, Temperatur und Zugabereihenfolge sind festgelegt; Nebenprodukte, die den nächsten Schritt verderben würden, werden entfernt. Auf einer Urerde müsste ein geologisches Szenario all das leisten. Tour spricht vom „Massentransfer-Problem": Wie gelangen ausreichende Mengen des richtigen Produkts aus Schritt 1 ohne Verunreinigungen zu Schritt 2?

Hinzu kommt das **Kohlenhydratproblem**: Die Formose-Reaktion, die klassische präbiotische Zuckersynthese, liefert ein Gemisch aus Dutzenden Zuckern und braunem Teer, in dem Ribose nur einen kleinen Anteil hat – und Ribose zerfällt rasch. Für RNA braucht man aber D-Ribose in der Furanose-Form, β-glykosidisch an die richtige Base gebunden, 3'-5'-verknüpft. Tour betont: Zeit ist hier nicht Freund, sondern Feind – je länger ein Gemisch reagiert, desto mehr zerfällt es zu thermodynamisch stabilem Teer. Polymerisation gelingt im Labor nur mit chemisch aktivierten Nukleotiden (z. B. Imidazoliden), die der Chemiker herstellt.`,
      sources: [
        { kind: 'wissenschaft', author: 'James M. Tour', work: 'Vortragsreihe „Abiogenesis: The Origin of Life" (YouTube)', year: '2023', quote: `Tour bespricht die Fachliteratur zur präbiotischen Synthese von Aminosäuren, Zuckern, Nukleotiden und Lipiden und zeigt an den Originalarbeiten, an welchen Stellen der Experimentator eingreift.`, status: 'paraphrase' },
        { kind: 'wissenschaft', author: 'James M. Tour', work: '„Time Out", Inference: International Review of Science 4/4', year: '2019', quote: `Tour schlägt eine „Auszeit" vor: Die OOL-Forschung solle innehalten und bilanzieren, was erreicht ist und was überhaupt erreichbar ist – und offen benennen, was ungeklärt ist (u. a. der Massentransfer der Ausgangsstoffe, der Ursprung des Codes, die kombinatorische Komplexität).`, status: 'paraphrase', url: 'https://inference-review.com' },
      ],
    },
    {
      person: 'stephen-meyer',
      role: 'als Wissenschaftsphilosoph (Information)',
      text: `Meyer widmet der RNA-Welt in *Signature in the Cell* ein eigenes Kapitel. Sein Hauptpunkt: Selbst wenn alle chemischen Hürden genommen wären, bliebe das Informationsproblem. Ein Ribozym funktioniert nur mit einer spezifischen Sequenz; je anspruchsvoller die Funktion (z. B. Kopieren von RNA), desto länger und seltener die passende Sequenz. Die RNA-Welt verschiebt die Frage nach dem Ursprung der Information also von der DNA auf die RNA, ohne sie zu beantworten. Meyer verweist zudem darauf, dass die erfolgreichsten Ribozyme durch intelligent gesteuerte Laborselektion gewonnen wurden – was eher die Rolle von Intelligenz illustriert.`,
      sources: [{ kind: 'fachliteratur', author: 'Stephen C. Meyer', work: 'Signature in the Cell', ref: 'Kap. 14 („The RNA World")', year: '2009', status: 'paraphrase' }],
    },
    {
      person: 'brian-miller',
      role: 'als Physiker (Thermodynamik)',
      text: `Brian Miller argumentiert thermodynamisch: Die Verknüpfung von Nukleotiden oder Aminosäuren in Wasser ist bergauf (die freie Enthalpie steigt), die Spaltung bergab. Spontan laufen Systeme zum Gleichgewicht – zu Monomeren und Zerfallsprodukten. Leben hält sich fern vom Gleichgewicht, indem es Energie über spezialisierte Maschinen gezielt an bestimmte Reaktionen koppelt. Bloße Energiezufuhr (Hitze, UV, Blitze) ohne solche Kopplung zerstört eher, als sie aufbaut. Eine RNA-Welt braucht also nicht nur Bausteine, sondern von Anfang an eine geordnete Energiekopplung.`,
      sources: [{ kind: 'fachliteratur', author: 'Brian Miller', work: 'Beitrag zur Thermodynamik des Lebensursprungs in: Thaxton/Bradley/Olsen u. a., The Mystery of Life\'s Origin: The Continuing Controversy', year: '2020', status: 'paraphrase' }],
    },
    {
      person: 'fazale-rana',
      role: 'als Biochemiker',
      text: `Rana deutet die Laborerfolge der präbiotischen Chemie gegen den Strich: Je erfolgreicher ein Experiment, desto stärker ist es von Forschern geplant – in Auswahl der Ausgangsstoffe, Reihenfolge, Reinigung und Selektion. Was die Experimente faktisch zeigen, ist, dass intelligente Steuerung die Hürden überwinden kann. Das sei ein empirisches Indiz dafür, dass auch der historische Ursprung des Lebens Intelligenz erforderte.`,
      sources: [{ kind: 'fachliteratur', author: 'Fazale Rana', work: 'Creating Life in the Lab: How New Discoveries in Synthetic Biology Make a Case for the Creator', year: '2011', status: 'paraphrase' }],
    },
    {
      person: 'athanasius',
      role: 'als Theologe des Logos',
      text: `Athanasius sieht im Logos die Quelle des Lebens und der Ordnung. Wenn heute die Chemie zeigt, wie voraussetzungsreich die Ordnung der Lebensmoleküle ist, bestätigt das sein Grundanliegen: Ordnung ist kein Selbstläufer. Zugleich warnt seine Theologie davor, Gott nur dort zu suchen, wo Wissen fehlt – der Logos ist auch in jeder gelungenen Reaktion am Werk, die ein Chemiker beobachtet.`,
      sources: [{ kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Contra Gentes', ref: '40–42', status: 'paraphrase', quote: `Der Logos durchwaltet und ordnet die ganze Schöpfung und schenkt ihr Bestand und Harmonie.` }],
    },
  ],
  dialog: [
    {
      id: 'sutherland-nukleotide',
      objection: `Sutherland hat 2009 gezeigt, dass Nukleotide unter präbiotisch plausiblen Bedingungen entstehen. Das Bausteinproblem der RNA-Welt ist gelöst.`,
      objectionBy: 'John Sutherland',
      targetsPremise: 2,
      answer: `Die Arbeit ist brillante Chemie – das erkenne ich an. Aber sie besteht aus mehreren getrennten Schritten: Jeder beginnt mit ausgewählten, meist gereinigten Stoffen in bestimmter Konzentration, in festgelegter Reihenfolge, mit Isolierung von Zwischenprodukten. Und sie liefert nur zwei der vier Basen. Die Frage ist: Wer war auf der Urerde der Chemiker?`,
      detail: `Tours Analyse betrifft nicht die Qualität der Chemie, sondern ihre Übertragbarkeit: Unter realen Bedingungen wären alle Zwischenprodukte gleichzeitig mit Hunderten anderer Moleküle vorhanden; Nebenreaktionen würden den nächsten Schritt verderben. Präbiotisch „plausibel" heißt in der Fachliteratur meist: Jeder einzelne Schritt verwendet Stoffe, die es irgendwo gegeben haben könnte – nicht, dass die ganze Sequenz ohne Lenkung abläuft.`,
      sources: [powner2009],
      questionsBack: [
        `Welche geologische Situation führt die Schritte in genau dieser Reihenfolge und mit diesen Reinigungen aus?`,
        `Was geschieht in deinem Szenario mit den Nebenprodukten jedes Schritts?`,
      ],
      followUps: [
        {
          id: 'systemchemie-geologie',
          objection: `Sutherland spricht von Systemchemie: Bäche, UV-Licht, Verdunstung und Wiederauflösung erledigen die Reihenfolge ganz natürlich.`,
          objectionBy: 'John Sutherland',
          targetsPremise: 3,
          answer: `Jedes dieser Ereignisse ist für sich plausibel. Aber ihre richtige Abfolge mit den richtigen Mengen an den richtigen Orten ist ein Drehbuch. Die Entscheidungen des Chemikers werden in eine geologische Geschichte übersetzt – die Unwahrscheinlichkeit verschwindet dadurch nicht, sie wird nur unsichtbar.`,
          followUps: [
            {
              id: 'milliarden-tuempel',
              objection: `In Millionen Jahren und Milliarden Tümpeln passiert auch eine unwahrscheinliche Abfolge irgendwo.`,
              objectionBy: 'Dave Farina',
              targetsPremise: 3,
              answer: `Mehr Zeit und mehr Tümpel vervielfachen auch die Zerstörung: Ribose zerfällt bei Hitze in Minuten bis Stunden, Cytosin desaminiert, RNA hydrolysiert. Die Produkte müssten zudem unverdünnt von Tümpel zu Tümpel gelangen. Tour sagt deshalb: Zeit ist in der Chemie nicht der Held, sondern der Feind.`,
              sources: [larralde1995],
              followUps: [
                {
                  id: 'unserioese-wahrscheinlichkeit',
                  objection: `Du rechnest mit Wahrscheinlichkeiten, ohne die Mechanismen zu kennen. Das ist unseriös.`,
                  objectionBy: 'Dave Farina',
                  answer: `Ich nenne keine erfundene Zahl. Ich sage nur: Wer behauptet, die RNA-Welt *erkläre* den Ursprung, muss einen Weg zeigen. Und es war ein führender Evolutionsbiologe – Eugene Koonin –, der die Zufallsentstehung von Replikation und Translation in unserem Universum für so unwahrscheinlich hielt, dass er ein unendliches Multiversum bemühte. Die Beweislast liegt bei der Behauptung.`,
                  sources: [koonin2007],
                },
              ],
            },
          ],
        },
        {
          id: 'purine-carell',
          objection: `Und die Purine? Carells Gruppe hat 2019 einen gemeinsamen Weg zu Purin- und Pyrimidin-Nukleosiden gezeigt.`,
          objectionBy: 'Thomas Carell',
          answer: `Ein weiterer kluger Laborweg – wieder mit definierten Ausgangsstoffen und Nass-Trocken-Zyklen unter Kontrolle. Danach bleiben: die richtige Händigkeit, die richtige Verknüpfung (3'-5' statt 2'-5'), die Aktivierung, die Polymerisation in Wasser und vor allem die Sequenz. Nukleoside sind nicht RNA, und RNA ist nicht Leben.`,
          sources: [{ kind: 'wissenschaft', author: 'Sidney Becker u. a. (Gruppe Thomas Carell)', work: '„Unified prebiotically plausible synthesis of pyrimidine and purine RNA ribonucleotides", Science 366, S. 76–82', year: '2019', status: 'paraphrase' }],
        },
      ],
    },
    {
      id: 'ton-polymerisation',
      objection: `RNA-Ketten bilden sich auf Tonmineralen. Ferris hat auf Montmorillonit Ketten von rund 50 Nukleotiden erzeugt.`,
      objectionBy: 'Dave Farina',
      targetsPremise: 2,
      answer: `Ferris verwendete chemisch aktivierte Nukleotide (Phosphorimidazolide), die im Labor hergestellt wurden, und fütterte sie wiederholt nach. Die Ketten waren zufällig, teilweise falsch verknüpft und ohne Funktion. Das zeigt: Mit aktivierten Bausteinen und einem Experimentator entstehen zufällige Ketten – nicht, wie ein funktionales Ribozym entsteht.`,
      sources: [{ kind: 'wissenschaft', author: 'James P. Ferris, Aubrey R. Hill, Rihe Liu, Leslie E. Orgel', work: '„Synthesis of long prebiotic oligomers on mineral surfaces", Nature 381, S. 59–61', year: '1996', status: 'paraphrase' }],
      followUps: [
        {
          id: 'szostak-kopieren',
          objection: `Szostak zeigt nichtenzymatisches Kopieren von RNA-Vorlagen mit 2-Aminoimidazol-aktivierten Nukleotiden. Das ist Replikation ohne Enzyme.`,
          objectionBy: 'Jack Szostak',
          answer: `Echte Fortschritte, die ich anerkenne. Aber die aktivierten Bausteine stellt der Chemiker her, das Kopieren gelingt über kurze Strecken, am besten für G und C, mit hoher Fehlerrate – und die Trennung der Doppelstränge für die nächste Runde ist ein ungelöstes Problem. Wie schwierig das Feld ist, zeigt auch, dass eine Arbeit aus Szostaks Labor 2017 zurückgezogen werden musste.`,
          sources: [retraction2017],
          followUps: [
            {
              id: 'retraktion-selbstkorrektur',
              objection: `Die Retraktion zeigt, dass Wissenschaft sich selbst korrigiert. Das spricht für uns, nicht gegen uns.`,
              objectionBy: 'Dave Farina',
              answer: `Einverstanden – und Szostak verdient Respekt für seine Ehrlichkeit. Mein Punkt ist ein anderer: Selbst ein Nobelpreisträger sagte, sein Team sei „völlig geblendet von unserem Glauben" an das Ergebnis gewesen. Das zeigt, wie stark die Erwartung die Deutung in diesem Feld prägt. Genau davor warnt Tour.`,
              sources: [retraction2017],
              followUps: [
                {
                  id: 'tour-unterstellt',
                  objection: `Tour unterstellt den Forschern Unehrlichkeit und verhöhnt sie.`,
                  objectionBy: 'Dave Farina',
                  answer: `Tour ist im Ton manchmal scharf – das gebe ich zu. Aber sein Vorwurf richtet sich nicht gegen die Fachartikel, die meist vorsichtig formuliert sind, sondern gegen die Übertreibung in Pressemitteilungen und Medien: „Forscher lösen das Rätsel des Lebens". Die Frage bleibt in der Sache: Welche Arbeit zeigt einen ungelenkten Weg zu einem sich selbst replizierenden System?`,
                },
              ],
            },
          ],
        },
        {
          id: 'nass-trocken-zyklen',
          objection: `Die Thermodynamik ist kein Problem: Nass-Trocken-Zyklen in heißen Quellen treiben die Polymerisation an.`,
          objectionBy: 'David Deamer',
          answer: `Trocknung begünstigt tatsächlich die Verknüpfung – das ist ein gutes Argument. Aber beim Wiederbefeuchten setzt die Hydrolyse ein, und in einem realen Gemisch reagieren alle anwesenden Stoffe mit: Es entstehen zufällige Ketten mit gemischten Verknüpfungen, eingebettet in Nebenprodukte. Nichts in einem Trocknungszyklus wählt eine bestimmte Sequenz aus.`,
          followUps: [
            {
              id: 'stabilitaetsselektion',
              objection: `Gefaltete, stabile RNAs überdauern länger. Diese Stabilitätsselektion treibt die Komplexität nach oben.`,
              objectionBy: 'David Deamer',
              answer: `Stabilität ist nicht Funktion und nicht Vererbung. Und wo Selektion nur Geschwindigkeit belohnt, geht Information sogar verloren: In Spiegelmans berühmten Experimenten schrumpfte replizierende RNA über Generationen auf einen Bruchteil ihrer Länge – sie warf alles ab, was nicht für die schnelle Kopie nötig war.`,
              sources: [{ kind: 'wissenschaft', author: 'Donald R. Mills, Roy L. Peterson, Sol Spiegelman', work: '„An extracellular Darwinian experiment with a self-duplicating nucleic acid molecule", PNAS 58, S. 217–224', year: '1967', status: 'paraphrase', quote: `Unter Selektion auf schnelle Replikation durch eine Replikase verkürzte sich die RNA über viele Transfers drastisch.` }],
            },
          ],
        },
      ],
    },
    {
      id: 'joyce-selbstreplikation',
      objection: `Lincoln und Joyce haben 2009 selbstreplizierende RNA mit exponentiellem Wachstum gezeigt. Der entscheidende Schritt ist geschafft.`,
      objectionBy: 'Gerald Joyce',
      targetsPremise: 2,
      answer: `Ein eindrucksvolles Experiment. Aber das System verknüpft jeweils zwei vorgefertigte, eigens entworfene RNA-Stücke, die die Forscher zuführen – es baut nichts aus Einzelnukleotiden auf. Die Ligasen selbst stammen aus gezielter Laborevolution. Es zeigt, was gut entworfene Moleküle unter idealen Bedingungen können, nicht wie sie ohne Entwurf entstehen.`,
      sources: [lincolnJoyce2009],
      followUps: [
        {
          id: 'holliger-polymerase',
          objection: `Holligers Polymerase-Ribozyme kopieren RNA-Stränge von über 200 Nukleotiden – fast ihre eigene Länge.`,
          objectionBy: 'Philipp Holliger',
          answer: `Auch hier: gewonnen durch Laborselektion aus Bibliotheken, die Forscher angelegt haben, und lauffähig unter speziellen Bedingungen (z. B. in Eis-Eutektika). Ein solches Ribozym ist selbst eine lange, sehr spezifische Sequenz. Die Frage ist gerade, wie es ohne Bibliothek und Selektionsdesign in einem präbiotischen Gemisch auftauchen sollte.`,
          sources: [{ kind: 'wissenschaft', author: 'Aniela Wochner, James Attwater, Alan Coulson, Philipp Holliger', work: '„Ribozyme-Catalyzed Transcription of an Active Ribozyme", Science 332, S. 209–212', year: '2011', status: 'paraphrase' }],
          followUps: [
            {
              id: 'funktion-nicht-selten',
              objection: `Funktionale RNAs sind gar nicht so selten. Bartel und Szostak haben 1993 neue Ribozyme aus zufälligen Sequenzbibliotheken gewonnen.`,
              objectionBy: 'Jack Szostak',
              answer: `Diese Bibliotheken enthielten Billiarden reiner, einhändiger, korrekt verknüpfter RNA-Moleküle, die Chemiker hergestellt und dann über viele Runden gezielt selektiert haben. Gefunden wurden zunächst schwache Ligasen. Eine Replikase ist ungleich anspruchsvoller. Das Experiment setzt die präbiotische Welt voraus, die erst erklärt werden müsste.`,
              sources: [{ kind: 'wissenschaft', author: 'David P. Bartel, Jack W. Szostak', work: '„Isolation of new ribozymes from a large pool of random sequences", Science 261, S. 1411–1418', year: '1993', status: 'paraphrase' }],
              followUps: [
                {
                  id: 'ein-replikator-genuegt',
                  objection: `Es braucht nur ein einziges Molekül, das sich kopiert – danach übernimmt Darwin.`,
                  objectionBy: 'Richard Dawkins',
                  answer: `Ein einzelnes Molekül genügt nicht: Es braucht eine ständige Zufuhr aktivierter, einhändiger Bausteine, eine Kopiergenauigkeit oberhalb der Fehlerschwelle – sonst zerfällt die Information in wenigen Generationen – und Schutz vor „Parasiten", die sich schneller kopieren. Darwin übernimmt erst, wenn all das bereits vorhanden ist.`,
                  detail: `Manfred Eigen zeigte, dass die maximal erhaltbare Informationsmenge durch die Fehlerrate begrenzt ist (Fehlerschwelle). Ohne präzise Replikation kann keine lange, funktionale Sequenz bestehen – ohne lange, funktionale Sequenz keine präzise Replikation. Das ist das „Eigen-Paradox".`,
                  followUps: [
                    {
                      id: 'koonin-multiversum-legitim',
                      objection: `Koonins Multiversum ist ein legitimes physikalisches Modell. Und er war ehrlich genug, das Problem zu benennen.`,
                      objectionBy: 'Sean Carroll',
                      answer: `Seine Ehrlichkeit schätze ich. Aber sieh, was daraus folgt: Wenn man ein unendliches Multiversum braucht, damit Leben irgendwo per Zufall entsteht, dann erklärt das alles und nichts. Jede noch so unwahrscheinliche Struktur wäre damit „erklärt". Das ist kein Mechanismus, sondern das Eingeständnis, dass in unserem Universum keiner bekannt ist.`,
                      sources: [koonin2007],
                      questionsBack: [`Würdest du einen unerklärten Text auf deinem Schreibtisch mit „In einem unendlichen Multiversum musste er irgendwo entstehen" erklären?`],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'ribosom-fossil',
      objection: `Das katalytische Zentrum des Ribosoms ist RNA. Das ist der molekulare Fossilbeweis für die RNA-Welt.`,
      objectionBy: 'Eugene Koonin',
      answer: `Dass im Ribosom RNA katalysiert, ist eine Tatsache über heutige Zellen. Man kann sie als Überbleibsel deuten – oder als geniale Konstruktion. Sie zeigt nicht, dass RNA ohne Lenkung entstand. Zudem funktioniert ribosomale RNA in der Zelle nur zusammen mit Dutzenden ribosomaler Proteine.`,
      sources: [{ kind: 'wissenschaft', author: 'Poul Nissen, Jeffrey Hansen, Nenad Ban, Peter B. Moore, Thomas A. Steitz', work: '„The Structural Basis of Ribosome Activity in Peptide Bond Synthesis", Science 289, S. 920–930', year: '2000', status: 'paraphrase' }],
      followUps: [
        {
          id: 'keine-alternative',
          objection: `Du hast keine bessere Alternative. Also bleibt die RNA-Welt das beste Modell.`,
          objectionBy: 'Dave Farina',
          answer: `„Beste der naturalistischen Hypothesen" ist nicht dasselbe wie „erklärt". Und eine faire Abwägung der besten Erklärung müsste alle bekannten Ursachen einbeziehen – auch Intelligenz, die einzige Ursache, die wir beim Entstehen von Information beobachten. „Wir wissen es noch nicht" ist ebenfalls eine ehrliche Antwort.`,
          followUps: [
            {
              id: 'intelligenz-keine-erklaerung',
              objection: `Intelligenz ist keine wissenschaftliche Erklärung.`,
              objectionBy: 'Dave Farina',
              answer: `Archäologie, Forensik, Kryptografie und SETI schließen ständig auf Intelligenz – aus Mustern, die Zufall und Naturgesetz nicht erzeugen. Warum sollte derselbe Schluss bei der Zelle verboten sein? Das ausführliche Argument findest du im Claim zum „Gott der Lücken".`,
            },
          ],
        },
      ],
    },
    {
      id: 'homochiralitaet-magnetit',
      objection: `Auch die Händigkeit ist gelöst: Ozturk, Sasselov und Sutherland zeigten 2023, wie ein RNA-Vorläufer auf Magnetit einhändig kristallisiert.`,
      objectionBy: 'Dimitar Sasselov',
      targetsPremise: 1,
      answer: `Eine der interessantesten neuen Ideen – ich nehme sie ernst. Sie setzt aber einen speziellen Vorläufer voraus, der zuvor über Sutherlands gelenkte Chemie entstehen muss, eine besondere Mineralsituation und weitere Schritte, die die Händigkeit erhalten. Details dazu im Claim zur Homochiralität.`,
      followUps: [
        {
          id: 'du-forderst-immer-mehr',
          objection: `Du verschiebst ständig die Torpfosten.`,
          answer: `Nein – ich halte nur an der ursprünglichen Behauptung fest: Die RNA-Welt *erkläre* den Ursprung des Lebens. Jede gelöste Teilfrage ist willkommen. Aber eine Erklärung liegt erst vor, wenn die Teile unter realistischen Bedingungen zusammen funktionieren. Das ist kein bewegter Torpfosten, sondern der Torpfosten.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Welche Arbeit zeigt eine RNA, die sich aus Einzelnukleotiden vollständig selbst kopiert – ohne vorgefertigte Bausteine?`,
    `Woher kamen auf der Urerde die chemisch aktivierten, einhändigen Nukleotide in ausreichender Konzentration?`,
    `Wie wurde die Sequenz des ersten Replikators ausgewählt, bevor es Replikation gab?`,
    `Warum hielt Eugene Koonin ein Multiversum für nötig, wenn die RNA-Welt das Problem löst?`,
    `Was geschieht in deinem Szenario mit den Nebenprodukten jedes Syntheseschritts?`,
  ],
  avoid: [
    `„RNA kann gar nichts katalysieren" – falsch; Ribozyme sind gut belegt (Nobelpreis 1989).`,
    `Unbelegte Riesenzahlen („1 zu 10 hoch 40.000") ohne Quelle und Rechenweg in den Raum werfen.`,
    `Forscher wie Szostak, Sutherland oder Joyce als unehrlich hinstellen – ihre Arbeiten sind seriös; kritisiere die Übertragung auf die Urerde und die Übertreibung in Medien.`,
  ],
  concessions: [
    `Die RNA-Welt ist die am besten ausgearbeitete naturalistische Hypothese, und ihre Teilerfolge sind echte wissenschaftliche Leistungen.`,
    `Niemand kann beweisen, dass eine RNA-Welt unmöglich ist; das Argument lautet: Sie ist nicht gezeigt und hat schwere ungelöste Probleme.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Stephen C. Meyer', work: 'Signature in the Cell', ref: 'Kap. 14', year: '2009', status: 'paraphrase' },
    bennerAsphalt,
    { kind: 'gegner', author: 'Robert Shapiro', work: '„A Simpler Origin for Life", Scientific American 296 (6)', year: '2007', status: 'paraphrase', note: 'Scharfe Kritik an der RNA-Welt aus naturalistischer Sicht (Shapiro bevorzugte „Stoffwechsel zuerst").' },
    koonin2007,
  ],
  difficulty: 3,
  tags: ['RNA-Welt', 'Ribozyme', 'Präbiotische Chemie', 'James Tour', 'Selbstreplikation'],
  related: ['ursprung-des-lebens/miller-urey', 'ursprung-des-lebens/genug-zeit', 'ursprung-des-lebens/protozellen-im-labor', 'ursprung-des-lebens/ool-nur-wissensluecke', 'chemie-biochemie/homochiralitaet-erklaert', 'chemie-biochemie/dna-ist-keine-information', 'feinabstimmung/multiversum'],
};

export default claim;
