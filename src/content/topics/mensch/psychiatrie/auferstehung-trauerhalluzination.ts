import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'auferstehung-trauerhalluzination',
  title: `„Die Auferstehungserscheinungen waren Trauerhalluzinationen."`,
  proponents: [
    { name: 'Gerd Lüdemann', role: 'Neutestamentler, Universität Göttingen (gest. 2021)', work: 'Die Auferstehung Jesu: Historie, Erfahrung, Theologie (1994)' },
    { name: 'Michael Goulder', role: 'Neutestamentler, University of Birmingham (gest. 2010)', work: '„The Baseless Fabric of a Vision", in: G. D\'Costa (Hg.), Resurrection Reconsidered (1996)' },
    { name: 'Bart D. Ehrman', role: 'Neutestamentler, University of North Carolina', work: 'How Jesus Became God (2014), Kap. 4–5' },
    { name: 'Kris Komarnitsky', role: 'Autor', work: 'Doubting Jesus\' Resurrection: What Happened in the Black Box? (2. Aufl. 2014)' },
  ],
  steelman: `Trauerhalluzinationen sind keine Randerscheinung, sondern häufig und normal. Der walisische Arzt Dewi Rees fand 1971, dass fast die Hälfte von 293 Verwitweten ihren verstorbenen Partner gespürt, gesehen, gehört oder sogar gefühlt hatten – oft über Jahre, meist ohne darüber zu sprechen. Neuere Übersichten nennen 30 bis 60 %. Die Jünger hatten ihren Meister grausam verloren; Petrus hatte ihn dreimal verleugnet und war von Schuld zerfressen – ideale Voraussetzungen für eine Erscheinung, die Vergebung brachte (Lüdemann). In der aufgewühlten Gruppe verbreitete sich die Erfahrung durch emotionale Ansteckung. Paulus, innerlich zerrissen zwischen Eifer und heimlicher Faszination für die Christen, erlebte eine Bekehrungsvision. Die kognitive Dissonanz des Kreuzestodes wurde durch die Deutung „Er ist auferstanden" aufgelöst, wie Festinger es bei Gruppen mit gescheiterten Prophezeiungen beobachtete. Die Geschichten vom leeren Grab und vom Essen mit dem Auferstandenen kamen erst Jahrzehnte später hinzu. Eine natürliche, psychologisch gut belegte Erklärung – ohne Wunder.`,
  biblical: {
    summary: `Das älteste Zeugnis ist die Bekenntnisformel 1 Kor 15,3–8, die Paulus nach eigener Aussage „empfangen" hat und die von vielen Forschern auf wenige Jahre nach dem Tod Jesu datiert wird: begraben, am dritten Tag auferweckt, erschienen dem Kephas, den Zwölf, mehr als 500 Brüdern auf einmal (von denen die meisten noch leben), Jakobus, allen Aposteln, zuletzt Paulus. Die Evangelien berichten, dass die Jünger zunächst **nicht** glaubten (Lk 24,11; Mt 28,17), meinten, einen Geist zu sehen (Lk 24,37), und vom Auferstandenen zum Berühren aufgefordert wurden (Lk 24,39). Jakobus, der Bruder Jesu, glaubte zu dessen Lebzeiten nicht an ihn (Joh 7,5; vgl. Mk 3,21); Paulus verfolgte die Gemeinde (Gal 1,13).`,
    detail: `- **„Erschienen" (ōphthē):** Das griechische Wort wird in der Septuaginta auch für Gotteserscheinungen gebraucht, bezeichnet aber ebenso gewöhnliches Sehen; aus dem Wort allein lässt sich nicht auf eine bloße Vision schließen.
- **Jüdischer Kontext:** Auferstehung bedeutete im Judentum der Zeit die leibliche Auferweckung aller Gerechten am Ende der Zeit (Dan 12,2). Wer einen Verstorbenen „sah", sprach von seinem Geist oder Engel (vgl. Apg 12,15), nicht von Auferstehung.
- **Das Grab:** Die Formel „begraben … auferweckt" setzt ein leeres Grab voraus; die jüdische Gegenerklärung, die Jünger hätten den Leichnam gestohlen (Mt 28,11–15), ebenfalls.`,
    sources: [
      { kind: 'bibel', work: '1. Korinther', ref: '15,3–8', quote: `Denn ich habe euch zuvörderst gegeben, was ich empfangen habe: daß Christus gestorben sei für unsre Sünden nach der Schrift, und daß er begraben sei, und daß er auferstanden sei am dritten Tage nach der Schrift, und daß er gesehen worden ist von Kephas, darnach von den Zwölfen. Darnach ist er gesehen worden von mehr denn fünfhundert Brüdern auf einmal, deren noch viele leben, etliche aber sind entschlafen. Darnach ist er gesehen worden von Jakobus, darnach von allen Aposteln. Am letzten nach allen ist er auch von mir, einer unzeitigen Geburt, gesehen worden.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Lukas', ref: '24,11', quote: `Und es deuchten sie ihre Worte eben, als wären's Märlein, und sie glaubten ihnen nicht.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Lukas', ref: '24,37–39', quote: `Sie erschraken aber und fürchteten sich, meinten, sie sähen einen Geist. … Sehet meine Hände und meine Füße: ich bin's selber. Fühlet mich und sehet; denn ein Geist hat nicht Fleisch und Bein, wie ihr sehet, daß ich habe.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '7,5', quote: `Denn auch seine Brüder glaubten nicht an ihn.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Matthäus', ref: '28,17', quote: `Und da sie ihn sahen, fielen sie vor ihm nieder; etliche aber zweifelten.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Daniel', ref: '12,2', status: 'paraphrase', quote: `Viele, die unter der Erde schlafen liegen, werden aufwachen, etliche zum ewigen Leben, etliche zu ewiger Schmach und Schande.` },
    ],
  },
  church: {
    summary: `Die Auferstehung Christi ist für die koptisch-orthodoxe Kirche das Herz des Glaubens: In jeder Liturgie wird sie bekannt, und das Osterfest ist der Höhepunkt des Kirchenjahres nach der langen Fastenzeit. Die Kirche bekennt eine **leibliche** Auferstehung: Derselbe Leib, der gekreuzigt wurde, ist verwandelt und verherrlicht auferstanden – Erstling der allgemeinen Auferstehung (1 Kor 15,20). Athanasius führte als einen Beweis die verwandelnde Kraft des Auferstandenen an: Ein Toter wirkt nichts, Christus aber verwandelt bis heute Menschen und nimmt ihnen die Furcht vor dem Tod.`,
    detail: `- **Athanasius, De Incarnatione 27–30:** Dass selbst Kinder und Frauen den Tod um Christi willen nicht mehr fürchten, zeigt, dass der Tod besiegt ist; und dass Christus täglich Menschen zum Glauben und zu einem neuen Leben bewegt, zeigt, dass er lebt – denn „ein Toter kann nichts wirken".
- **Glaubensbekenntnis:** „… gekreuzigt unter Pontius Pilatus, hat gelitten und ist begraben worden, ist auferstanden am dritten Tag gemäß den Schriften."`,
    sources: [
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Menschwerdung des Logos (De Incarnatione)', ref: '27–30', status: 'paraphrase', quote: `Wenn ein Toter nichts mehr wirken kann, der Heiland aber täglich so Großes wirkt – die Menschen zur Frömmigkeit bewegt, zur Tugend überredet, den Tod verachten lehrt –, wer kann dann noch zweifeln, dass er lebt?` },
      { kind: 'konzil', work: 'Nizäno-Konstantinopolitanisches Glaubensbekenntnis', year: '381', status: 'paraphrase', quote: `… ist auferstanden am dritten Tage gemäß der Schrift.` },
    ],
  },
  opposingView: {
    summary: `Trauerbezogene Wahrnehmungen Verstorbener sind gut belegt und gelten als **nicht krankhaft**: Rees (1971) fand sie bei fast der Hälfte von 293 Verwitweten; neuere Übersichten nennen 30–60 %. Meist handelt es sich um ein Gefühl der Gegenwart; visuelle, auditive oder taktile Erlebnisse sind seltener, kurz und individuell. Unter Historikern ist breit anerkannt, auch bei Skeptikern, dass die Jünger nach Jesu Tod Erfahrungen hatten, die sie als Erscheinungen des Auferstandenen deuteten. Strittig ist deren Natur. Kollektive Erscheinungen Verstorbener sind in der klinischen Literatur nicht als gleiche, gemeinsame Halluzinationen belegt; es gibt aber anekdotische Berichte aus der parapsychologischen Literatur und Massenphänomene wie bei Marienerscheinungen, die Kritiker anführen.`,
    detail: `- **Rees (BMJ 1971):** 293 Verwitwete in Wales; 46,7 % berichteten Erfahrungen mit dem verstorbenen Partner; am häufigsten das Gefühl seiner Gegenwart, deutlich seltener Sehen oder Hören; viele hatten niemandem davon erzählt; die Erfahrungen wurden überwiegend als hilfreich erlebt.
- **Castelnovo u. a. (2015):** Übersicht über Bevölkerungs- und klinische Studien; Häufigkeit post-bereavement hallucinatory experiences je nach Studie etwa 30–60 %.
- **Historischer Konsens zu den Erfahrungen:** Lüdemann hält es für historisch gewiss, dass Petrus und die Jünger nach Jesu Tod Erfahrungen hatten, in denen Jesus ihnen als der Auferstandene erschien; E. P. Sanders nennt die Auferstehungserfahrungen der Jünger eine Tatsache, deren Ursache er offenlässt.
- **Kollektive Erscheinungen:** Dale Allison (selbst Christ) hat Berichte über kollektive Erscheinungen Verstorbener gesammelt und mahnt Christen zur Vorsicht mit der Behauptung, so etwas komme nie vor. Diese Berichte sind überwiegend anekdotisch und nicht klinisch geprüft.
- **Festinger u. a. (1956):** Eine UFO-Gruppe verstärkte nach einer gescheiterten Weltuntergangsprophezeiung ihre Mission – Grundlage der Theorie der kognitiven Dissonanz.`,
    sources: [
      { kind: 'wissenschaft', author: 'W. Dewi Rees', work: 'The hallucinations of widowhood', ref: 'British Medical Journal 4 (1971), 37–41', year: '1971', status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'A. Castelnovo, S. Cavallotti, O. Gambini, A. D\'Agostino', work: 'Post-bereavement hallucinatory experiences: A critical overview of population and clinical studies', ref: 'Journal of Affective Disorders 186 (2015), 266–274', year: '2015', status: 'paraphrase' },
      { kind: 'gegner', author: 'Gerd Lüdemann', work: 'What Really Happened to Jesus: A Historical Approach to the Resurrection', year: '1995', status: 'paraphrase', quote: `Es darf als historisch gewiss gelten, dass Petrus und die Jünger nach dem Tod Jesu Erfahrungen hatten, in denen Jesus ihnen als der auferstandene Christus erschien.`, note: 'Lüdemann ist Skeptiker; er deutet diese Erfahrungen als Visionen. Gerade deshalb wiegt das Zugeständnis.' },
      { kind: 'fachliteratur', author: 'E. P. Sanders', work: 'The Historical Figure of Jesus', year: '1993', status: 'paraphrase', quote: `Dass die Anhänger Jesu (und später Paulus) Auferstehungserfahrungen hatten, ist nach meinem Urteil eine Tatsache; was die Wirklichkeit war, die diese Erfahrungen hervorrief, weiß ich nicht.` },
      { kind: 'fachliteratur', author: 'Dale C. Allison Jr.', work: 'The Resurrected Jesus: Contemporary Doubts and Beliefs', year: '2021', status: 'paraphrase', note: 'Allison hält an der Auferstehung fest, dokumentiert aber ehrlich Parallelen aus Berichten über Erscheinungen Verstorbener.' },
      { kind: 'wissenschaft', author: 'Leon Festinger, Henry W. Riecken, Stanley Schachter', work: 'When Prophecy Fails', year: '1956', status: 'paraphrase' },
    ],
  },
  quickAnswer: `Trauerhalluzinationen sind real, häufig und nicht krankhaft – fast die Hälfte der Verwitweten erlebt so etwas (Rees 1971). Aber sie erklären die Ostererfahrungen nicht: Sie kommen **einzeln**, nicht bei Gruppen von zwölf oder fünfhundert; sie trafen nicht nur Trauernde, sondern auch den Verfolger Paulus und den skeptischen Bruder Jesu, Jakobus; sie erklären nicht das leere Grab; und kein trauernder Jude hätte aus einer Erscheinung geschlossen, der Verstorbene sei leiblich auferstanden – man hätte von einem Geist oder Engel gesprochen. Halluzinationen erklären bestenfalls einen Teil der Daten, die Auferstehung erklärt alle.`,
  keyPoints: [
    `**Zugeständnis zuerst:** Trauerbezogene Wahrnehmungen Verstorbener sind häufig und normal; die Jünger als „verrückt" zu bezeichnen, ist unnötig und falsch.`,
    `**Gruppen statt Einzelner:** Halluzinationen sind private Hirnereignisse; 1 Kor 15 nennt Erscheinungen vor den Zwölf, vor über 500 „auf einmal" und vor „allen Aposteln".`,
    `**Gegner und Skeptiker:** Paulus (Verfolger) und Jakobus (ungläubiger Bruder) waren keine trauernden Anhänger.`,
    `**Das leere Grab bleibt unerklärt:** Halluzinationen erklären keinen verschwundenen Leichnam; man bräuchte eine zweite, unabhängige Erklärung.`,
    `**Falsche Kategorie:** Trauernde sehen Verstorbene, schließen aber nie auf deren leibliche Auferstehung. Im jüdischen Denken hätte eine Erscheinung „Geist" oder „Engel" bedeutet, nicht „auferstanden" (Wright).`,
    `**Keine Erwartung:** Die Texte betonen Unglauben, Furcht und Zweifel der Jünger – das Gegenteil erwartungsgesteuerter Wahrnehmung.`,
  ],
  argument: {
    name: 'Das Argument aus der Erklärungsreichweite',
    summary: 'Die Trauerhalluzinations-Hypothese erklärt nur einen Teil der gesicherten Daten.',
    premises: [
      {
        text: `P1: Eine gute historische Erklärung muss die gesicherten Daten erklären: (a) Erscheinungen vor Einzelnen und Gruppen, (b) die Bekehrung von Gegnern und Skeptikern (Paulus, Jakobus), (c) das leere Grab, (d) die Deutung als leibliche Auferstehung in einem jüdischen Umfeld, das diese Kategorie für einen Einzelnen vor dem Weltende nicht kannte.`,
        support: `(a) und (b) sind durch 1 Kor 15,3–8 und Gal 1 belegt, die auch kritische Forscher als frühe, echte Paulus-Zeugnisse anerkennen. (c) ist umstrittener, wird aber von einer Mehrheit der Fachleute als wahrscheinlich historisch beurteilt. (d) ergibt sich aus der jüdischen Literatur der Zeit (Wright).`,
        sources: [
          { kind: 'fachliteratur', author: 'N. T. Wright', work: 'The Resurrection of the Son of God', year: '2003', status: 'paraphrase' },
        ],
      },
      {
        text: `P2: Die Trauerhalluzinations-Hypothese erklärt (a) nur teilweise – für Einzelne, nicht für gemeinsame Erscheinungen – und (b), (c), (d) nur mit zusätzlichen, unabhängigen Hilfsannahmen.`,
        support: `Klinisch beschriebene Trauerwahrnehmungen sind individuell, überwiegend ein Gefühl der Gegenwart, und führen nicht zu dem Schluss, der Verstorbene sei leiblich auferweckt. Paulus und Jakobus trauerten nicht um Jesus. Das Grab muss eigens erklärt werden (Diebstahl, Verwechslung, Legende).`,
        sources: [
          { kind: 'wissenschaft', author: 'W. Dewi Rees', work: 'The hallucinations of widowhood', ref: 'BMJ 4 (1971), 37–41', year: '1971', status: 'paraphrase' },
        ],
      },
      {
        text: `P3: Die Auferstehungshypothese erklärt (a)–(d) ohne Zusatzannahmen – sofern man Gottes Handeln nicht von vornherein ausschließt.`,
        support: `Wenn Jesus wirklich leiblich auferstanden ist, sind Gruppenerscheinungen, die Bekehrung von Gegnern, das leere Grab und die neue Deutung „auferstanden" genau das zu Erwartende. Der Einwand verlagert sich damit auf die philosophische Frage, ob Wunder möglich sind.`,
      },
    ],
    inferences: [
      `Die Halluzinationshypothese muss mehrere unabhängige natürliche Erklärungen kombinieren; jede zusätzliche Hilfsannahme senkt ihre Wahrscheinlichkeit.`,
    ],
    conclusion: `Die Trauerhalluzination ist die schwächere Erklärung. Wer sie dennoch vorzieht, tut es in der Regel nicht wegen der Daten, sondern weil er Wunder grundsätzlich ausschließt.`,
  },
  voices: [
    {
      person: 'paulus',
      role: 'als Zeuge der Erscheinungen und ehemaliger Verfolger',
      text: `Paulus ist der einzige Autor im NT, der aus erster Hand von einer Erscheinung des Auferstandenen schreibt. Er war kein trauernder Jünger, sondern ein Gegner, der die Gemeinde „über die Maßen" verfolgte (Gal 1,13). In 1 Kor 15 stellt er seine eigene Erfahrung bewusst ans Ende einer langen Liste von Zeugen und verweist darauf, dass die meisten der über 500 noch leben – eine Einladung zur Überprüfung. Er versteht Auferstehung leiblich, wenn auch verwandelt: Es wird ein „geistlicher Leib" auferstehen (1 Kor 15,44), also ein vom Geist Gottes ganz durchdrungener Leib, kein körperloser Geist. Und er erklärt: Wenn Christus nicht auferstanden ist, ist der Glaube vergeblich (1 Kor 15,14–17) – er setzt alles auf ein Ereignis, nicht auf ein Gefühl.`,
      sources: [
        { kind: 'bibel', work: '1. Korinther', ref: '15,3–20.42–44', status: 'paraphrase' },
        { kind: 'bibel', work: 'Galater', ref: '1,13–19', status: 'paraphrase' },
      ],
    },
    {
      person: 'habermas',
      role: 'als Historiker der Auferstehungsforschung',
      text: `Gary Habermas hat die Fachliteratur zur Auferstehung seit den 1970er-Jahren in großem Umfang ausgewertet und daraus die „Methode der minimalen Fakten" entwickelt: Er argumentiert nur mit Tatsachen, die gut belegt sind und von der großen Mehrheit der Forscher, auch der skeptischen, anerkannt werden – Jesu Tod durch Kreuzigung, die Erscheinungserfahrungen der Jünger, die Bekehrung des Paulus und des Jakobus, die frühe Verkündigung. In seiner Auseinandersetzung mit Halluzinationstheorien betont er, dass Halluzinationen individuelle Ereignisse sind und dass die Vielzahl, die Vielfalt der Umstände (drinnen und draußen, Einzelne und Gruppen, Freunde und Gegner) und die Wirkung auf Skeptiker gegen diese Erklärung sprechen.`,
      sources: [
        { kind: 'fachliteratur', author: 'Gary R. Habermas, Michael R. Licona', work: 'The Case for the Resurrection of Jesus', year: '2004', status: 'paraphrase' },
        { kind: 'fachliteratur', author: 'Gary R. Habermas', work: 'Explaining Away Jesus\' Resurrection: The Recent Revival of Hallucination Theories', ref: 'Christian Research Journal 23 (2001)', year: '2001', status: 'paraphrase' },
      ],
    },
    {
      person: 'nt-wright',
      role: 'als Neutestamentler und Kenner des antiken Judentums',
      text: `N. T. Wright zeigt in seinem Standardwerk, dass „Auferstehung" im Judentum des 1. Jahrhunderts eine feste Bedeutung hatte: die leibliche Auferweckung aller Gerechten am Ende der Geschichte. Niemand erwartete die Auferstehung eines Einzelnen mitten in der Geschichte, schon gar nicht eines gekreuzigten Messias. Erscheinungen Verstorbener waren in der Antike bekannt – aber gerade deshalb hätten die Jünger, wenn sie nur Visionen gehabt hätten, gesagt, Jesu Geist oder Engel sei ihnen erschienen, oder er sei zu Gott erhöht worden. Dass sie das Wort „auferstanden" wählten und damit ihr ganzes Weltbild umbauten, erklärt sich nach Wright nur, wenn sie ein leeres Grab und leibliche Begegnungen zusammen erlebten.`,
      sources: [
        { kind: 'fachliteratur', author: 'N. T. Wright', work: 'The Resurrection of the Son of God', year: '2003', status: 'paraphrase' },
      ],
    },
    {
      person: 'athanasius',
      role: 'als koptischer Kirchenvater',
      text: `Athanasius argumentiert in seiner Schrift über die Menschwerdung nicht nur mit den Berichten, sondern auch mit den Folgen: Die Jünger, die vor der Kreuzigung flohen, wurden danach zu furchtlosen Zeugen, und nach ihnen gingen Tausende – Männer, Frauen, Kinder – um Christi willen in den Tod, ohne ihn zu fürchten. Für Athanasius ist das ein Zeichen, dass der Tod tatsächlich besiegt ist: Trauernde, die eine tröstliche Erscheinung hatten, verwandeln nicht die Welt. Christus aber wirke bis heute, und ein Toter könne nichts wirken.`,
      sources: [
        { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Menschwerdung des Logos (De Incarnatione)', ref: '27–30', status: 'paraphrase' },
      ],
    },
    {
      person: 'licona',
      role: 'als Historiker und Methodiker',
      text: `Michael Licona prüft in seiner historiografischen Studie die Halluzinationshypothese nach klassischen Kriterien historischer Erklärungen: Erklärungsreichweite, Erklärungskraft, Plausibilität, möglichst wenige Ad-hoc-Annahmen. Er kommt zu dem Ergebnis, dass psychologische Hypothesen zwar die Erfahrungen Einzelner erklären könnten, aber bei den Gruppenerscheinungen, der Bekehrung des Paulus und dem leeren Grab auf zusätzliche, unbelegte Annahmen angewiesen sind. Die Auferstehungshypothese schneide besser ab – vorausgesetzt, man schließt Gottes Handeln nicht methodisch aus.`,
      sources: [
        { kind: 'fachliteratur', author: 'Michael R. Licona', work: 'The Resurrection of Jesus: A New Historiographical Approach', year: '2010', status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'rees-haeufig',
      objection: `Fast die Hälfte aller Verwitweten sieht, hört oder spürt ihre Verstorbenen – das hat Rees 1971 im British Medical Journal gezeigt. Die Jünger waren in tiefster Trauer. Das ist die natürlichste Erklärung der Welt.`,
      objectionBy: 'Bart Ehrman',
      targetsPremise: 2,
      answer: `Ich gebe dir recht, dass solche Erfahrungen häufig und normal sind – ich halte die Jünger nicht für krank. Aber schau auf die Merkmale: Bei Rees war die häufigste Form ein bloßes Gefühl der Gegenwart; Sehen war deutlich seltener; die Erfahrungen waren individuell, kurz und wurden meist verschwiegen. Und kein einziger Verwitweter schloss daraus, sein Partner sei leiblich auferstanden und das Grab leer. Die Jünger dagegen berichten Begegnungen in Gruppen, Gespräche und gemeinsames Essen – und gründeten darauf eine Bewegung, die ihr Leben kostete.`,
      sources: [
        { kind: 'wissenschaft', author: 'W. Dewi Rees', work: 'The hallucinations of widowhood', ref: 'British Medical Journal 4 (1971), 37–41', year: '1971', status: 'paraphrase' },
      ],
      questionsBack: [
        `Kennst du einen Fall, in dem Trauernde aus einer Erscheinung schlossen, der Verstorbene sei leiblich auferstanden?`,
        `Wie erklärt eine Trauerhalluzination die Bekehrung von Menschen, die gar nicht trauerten?`,
      ],
      followUps: [
        {
          id: 'kollektive-erscheinungen',
          objection: `Es gibt Berichte über kollektive Erscheinungen Verstorbener – selbst der Christ Dale Allison hat solche Fälle gesammelt. Und Massenphänomene wie bei Marienerscheinungen zeigen, dass Gruppen gemeinsam etwas „sehen".`,
          objectionBy: 'Kris Komarnitsky',
          answer: `Das ist ein fairer Punkt, und ich behaupte deshalb nicht, so etwas sei „unmöglich". Aber die Berichte bei Allison sind Anekdoten aus der parapsychologischen Literatur, nicht klinisch geprüfte Fälle; in der Psychiatrie gelten Halluzinationen als private Ereignisse eines einzelnen Gehirns. Bei Massenphänomenen sehen die Beteiligten meist Lichterscheinungen und beschreiben sie unterschiedlich. Die Ostererzählungen berichten etwas anderes: wiederholte Begegnungen über Wochen, an verschiedenen Orten, mit Gesprächen, Belehrung und Berührung.`,
          detail: `Ehrliche Formulierung für den Laien: „Kollektive Halluzinationen mit gleichem, komplexem Inhalt sind in der klinischen Fachliteratur nicht belegt; es gibt anekdotische Berichte." Nicht: „Gruppenhalluzinationen gibt es nicht." Habermas zitiert in diesem Zusammenhang einen klinischen Psychologen, der in der Fachliteratur keinen dokumentierten Fall einer Gruppenhalluzination gefunden habe – diese Angabe sollte man vor Verwendung im Original prüfen.`,
          sources: [
            { kind: 'fachliteratur', author: 'Dale C. Allison Jr.', work: 'The Resurrected Jesus: Contemporary Doubts and Beliefs', year: '2021', status: 'paraphrase' },
            { kind: 'fachliteratur', author: 'Gary R. Habermas, Michael R. Licona', work: 'The Case for the Resurrection of Jesus', year: '2004', status: 'unverified', note: 'Hinweis auf die Einschätzung eines klinischen Psychologen (Gary Sibcy) zur fehlenden Dokumentation von Gruppenhalluzinationen; genauen Wortlaut und Fundstelle prüfen.' },
          ],
          followUps: [
            {
              id: 'koerperliche-details-spaet',
              objection: `Die körperlichen Details – Essen, Berühren der Wunden – sind späte apologetische Zusätze von Lukas und Johannes gegen Leute, die Jesu Leiblichkeit bestritten.`,
              objectionBy: 'Michael Goulder',
              answer: `Selbst wenn man die Evangelien beiseitelässt: Die Liste in 1 Kor 15 ist das älteste Zeugnis, von vielen Forschern auf wenige Jahre nach Jesu Tod datiert, und sie nennt ausdrücklich Gruppen – die Zwölf, über 500 auf einmal, alle Apostel. Paulus fügt hinzu, dass die meisten noch leben, man könne sie also fragen. Und „begraben … auferweckt" ist im jüdischen Denken eine leibliche Aussage.`,
              followUps: [
                {
                  id: 'ophthe-vision',
                  objection: `„Erschienen" – ōphthē – wird in der Septuaginta auch für Visionen gebraucht. Paulus' eigene Erfahrung war eine Vision, und er stellt alle anderen auf eine Stufe mit seiner.`,
                  objectionBy: 'Kris Komarnitsky',
                  answer: `Das Wort wird für Visionen *und* für gewöhnliches Sehen benutzt; es entscheidet die Frage nicht. Paulus unterscheidet seine Erfahrung sogar als ungewöhnlich – er war die „unzeitige Geburt", der Letzte nach allen. Und seine Erfahrung hatte äußere Begleitumstände, die andere wahrnahmen. Entscheidend ist, was er unter Auferstehung versteht: einen verwandelten Leib, einen „geistlichen Leib" (1 Kor 15,44), also einen vom Geist Gottes belebten Leib – nicht einen körperlosen Geist. N. T. Wright hat gezeigt, dass *sōma pneumatikon* gerade kein immaterielles Wesen bezeichnet.`,
                  voices: [
                    {
                      person: 'nt-wright',
                      role: 'als Exeget von 1 Kor 15',
                      text: `Wright weist darauf hin, dass Adjektive auf „-ikos" im Griechischen in der Regel nicht angeben, woraus etwas besteht, sondern wovon es belebt oder bestimmt wird. Ein „psychischer Leib" (1 Kor 15,44) ist kein Leib aus Seele, sondern ein von der natürlichen Lebenskraft belebter; entsprechend ist der „geistliche Leib" ein vom Geist Gottes belebter, verwandelter, aber wirklicher Leib.`,
                      sources: [
                        { kind: 'fachliteratur', author: 'N. T. Wright', work: 'The Resurrection of the Son of God', ref: 'Kap. 7', year: '2003', status: 'paraphrase' },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'emotionale-ansteckung',
          objection: `In emotional aufgeladenen Gruppen verstärken sich Wahrnehmungen gegenseitig: Einer „sieht" etwas, die anderen ziehen nach. Soziale Ansteckung und Erwartung.`,
          objectionBy: 'Michael Shermer',
          answer: `Für Ansteckung durch Erwartung fehlt gerade die Erwartung: Die Evangelien betonen auffällig, dass die Jünger den Frauen nicht glaubten und deren Bericht für „Märlein" hielten (Lk 24,11), dass sie meinten, einen Geist zu sehen (Lk 24,37), dass Thomas Beweise verlangte (Joh 20,25) und dass „etliche zweifelten" (Mt 28,17). Solche peinlichen Details erfindet man nicht, um eine Bewegung zu stärken.`,
          followUps: [
            {
              id: 'ankuendigungen-gehoert',
              objection: `Die Jünger hatten Jesu Ankündigungen seiner Auferstehung gehört – natürlich erwarteten sie etwas.`,
              objectionBy: 'Bart Ehrman',
              answer: `Die Evangelien sagen ausdrücklich, dass sie diese Worte nicht verstanden (Mk 9,32; Joh 20,9). Und das ist historisch plausibel: Im jüdischen Denken war ein gekreuzigter Messias ein gescheiterter Messias – „ein Gehenkter ist verflucht bei Gott" (Dtn 21,23; vgl. Gal 3,13). Auferstehung erwartete man für alle Gerechten am Ende der Zeit, nicht für einen Einzelnen nach drei Tagen. Die natürliche Reaktion wäre gewesen: Jesus war ein Märtyrer-Prophet, den Gott am Ende rechtfertigen wird.`,
            },
          ],
        },
      ],
    },
    {
      id: 'paulus-jakobus-psychologie',
      objection: `Paulus hatte einen inneren Konflikt – eine unbewusste Faszination für die Christen, die er verfolgte, einen „Christus-Komplex". Und Jakobus wurde schlicht von der Begeisterung der Gruppe mitgerissen.`,
      objectionBy: 'Gerd Lüdemann',
      targetsPremise: 1,
      answer: `Das ist Psychoanalyse an einem Menschen, der vor 2000 Jahren lebte, ohne jede Datengrundlage. Paulus selbst beschreibt sich vor seiner Bekehrung nicht als zerrissen, sondern als „nach der Gerechtigkeit im Gesetz untadelig" (Phil 3,6) – der Neutestamentler Krister Stendahl sprach von einem „robusten Gewissen" des Paulus, nicht von Schuldqualen. Und über Jakobus wissen wir: Er glaubte zu Jesu Lebzeiten nicht, erlebte eine eigene Erscheinung (1 Kor 15,7), wurde Leiter der Jerusalemer Gemeinde und starb laut Josephus als Märtyrer.`,
      sources: [
        { kind: 'fachliteratur', author: 'Krister Stendahl', work: 'The Apostle Paul and the Introspective Conscience of the West', ref: 'Harvard Theological Review 56 (1963), 199–215', year: '1963', status: 'paraphrase' },
        { kind: 'sonstiges', author: 'Flavius Josephus', work: 'Jüdische Altertümer (Antiquitates Judaicae)', ref: '20,200', year: 'ca. 93/94 n. Chr.', status: 'paraphrase', quote: `Der Hohepriester Ananus ließ Jakobus, den Bruder Jesu, „der Christus genannt wird", und einige andere vor Gericht stellen und steinigen.` },
      ],
      followUps: [
        {
          id: 'fanatiker-kippen',
          objection: `Stendahl hin oder her: Gerade Fanatiker kippen oft ins Gegenteil. Die Konversionspsychologie kennt solche plötzlichen Kehrtwenden.`,
          objectionBy: 'Gerd Lüdemann',
          answer: `Dass Menschen plötzlich die Seite wechseln, kommt vor. Aber diese Erklärung ist beliebig: Sie könnte jede Bekehrung in jede Richtung „erklären" und lässt sich nicht prüfen. Sie müsste zudem erklären, warum Paulus' Kehrtwende genau den Inhalt „Jesus ist auferstanden und mir erschienen" hatte – und warum er sich dabei auf eine Liste vieler anderer Zeugen berief, die unabhängig von ihm dasselbe erlebt hatten.`,
          followUps: [
            {
              id: 'wunder-unfalsifizierbar',
              objection: `Deine Auferstehungshypothese ist noch weniger prüfbar – sie setzt ein Wunder voraus.`,
              objectionBy: 'Gerd Lüdemann',
              targetsPremise: 3,
              answer: `Das ist der eigentliche Punkt, und ich danke dir für die Offenheit: Die Entscheidung fällt nicht an den Daten, sondern an der Vorentscheidung, ob Gott handeln kann. Wenn Gottes Existenz offen ist, kann man eine Wunderhypothese wie jede andere an ihrer Erklärungskraft messen. Wenn man Wunder von vornherein ausschließt, gewinnt natürlich jede natürliche Erklärung – aber dann ist das Ergebnis vorher festgelegt.`,
              followUps: [
                {
                  id: 'historiker-keine-wunder',
                  objection: `Historiker können per Definition kein Wunder als wahrscheinlichste Erklärung akzeptieren. Das ist keine Vorentscheidung, sondern Methode.`,
                  objectionBy: 'Bart Ehrman',
                  answer: `Dann ist es eine methodische Selbstbeschränkung – und die sagt nichts darüber, was tatsächlich geschehen ist. Ein Historiker kann dann allenfalls sagen: „Mit meinen Mitteln kann ich die Ursache nicht benennen." Er kann nicht sagen: „Es waren Halluzinationen." Genau diese Selbstbeschränkung kritisieren Historiker wie N. T. Wright und Michael Licona. Ausführlich behandelt das der Themenblock zur Auferstehung.`,
                  detail: `Siehe A16, ‚auferstehung/wunder-historisch-unmoeglich' und ‚auferstehung/halluzinationen'.`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'leeres-grab-legende',
      objection: `Das leere Grab ist eine späte Legende. Paulus erwähnt es nicht, und Markus endet damit, dass die Frauen niemandem etwas sagten.`,
      objectionBy: 'Gerd Lüdemann',
      targetsPremise: 2,
      answer: `Paulus' Formel „begraben – am dritten Tag auferweckt" setzt im jüdischen Denken voraus, dass das Grab leer war. Die Verkündigung begann in Jerusalem, wenige Minuten von dem Grab entfernt – ein besetztes Grab hätte sie sofort beendet. Und die früheste jüdische Gegenerklärung lautete nicht „das Grab ist voll", sondern „die Jünger haben den Leichnam gestohlen" (Mt 28,13–15). Psychologisch heißt das: Selbst wenn alle Erscheinungen Halluzinationen gewesen wären, bräuchtest du für das Grab eine zweite, unabhängige Erklärung.`,
      detail: `Die historische Debatte ums Grab behandelt A16 ausführlich (‚auferstehung/leichnam-gestohlen-falsches-grab'). Hier genügt der Hinweis: Halluzination + leeres Grab = zwei voneinander unabhängige Zufälle.`,
      followUps: [
        {
          id: 'massengrab',
          objection: `Vielleicht wurde Jesus gar nicht in einem eigenen Grab bestattet, sondern wie viele Gekreuzigte verscharrt oder den Tieren überlassen. Dann gab es kein Grab, das man prüfen konnte.`,
          objectionBy: 'Bart Ehrman',
          answer: `Josephus berichtet, dass die Juden sogar Gekreuzigte vor Sonnenuntergang bestatteten, um das Gebot aus Dtn 21,23 zu erfüllen. Mit dem Gebeinkasten des Jehohanan, eines Gekreuzigten aus dem 1. Jahrhundert, wurde 1968 in Jerusalem ein archäologischer Beleg für die ordentliche Bestattung eines Gekreuzigten gefunden. Und die Überlieferung, ein Mitglied des Hohen Rates – Josef von Arimathäa – habe Jesus bestattet (Mk 15,43), ist kaum eine christliche Erfindung.`,
          sources: [
            { kind: 'sonstiges', author: 'Flavius Josephus', work: 'Jüdischer Krieg (Bellum Judaicum)', ref: '4,317', status: 'paraphrase', quote: `Die Juden tragen so große Sorge um die Bestattung, dass sie selbst die zum Kreuzestod Verurteilten vor Sonnenuntergang abnehmen und begraben.` },
          ],
          followUps: [
            {
              id: 'jehohanan-einzelfund',
              objection: `Ein einzelner Fund wie Jehohanan beweist nicht, dass Pilatus ausgerechnet Jesus ein Begräbnis gewährte.`,
              objectionBy: 'Bart Ehrman',
              answer: `Einverstanden – ein Fund beweist es nicht, er zeigt nur, dass es möglich und vorgekommen ist. Zusammen mit Josephus, der jüdischen Praxis vor dem Passafest und der kaum erfindbaren Gestalt des Josef von Arimathäa ergibt sich ein plausibles Bild. Die Mehrheit der Fachleute hält die Grabbestattung Jesu für historisch wahrscheinlich.`,
            },
          ],
        },
      ],
    },
    {
      id: 'kognitive-dissonanz',
      objection: `Festinger hat gezeigt: Wenn eine Prophezeiung scheitert, missionieren die Gläubigen erst recht. Die Jünger lösten die Dissonanz des Kreuzes durch den Glauben „Er ist auferstanden".`,
      objectionBy: 'Kris Komarnitsky',
      answer: `Festingers Gruppe deutete ihr Scheitern um, behauptete aber kein neues, überprüfbares Ereignis – und sie zerfiel bald. Die Jünger dagegen behaupteten konkrete Begegnungen und ein leeres Grab in der Stadt der Hinrichtung. Vor allem hätten ihnen jüdische Deutungen zur Verfügung gestanden, die keine Dissonanz erzeugten: Jesus als Märtyrer, dessen Seele bei Gott ist, wie bei den Makkabäern. „Auferstanden" war die unwahrscheinlichste, nicht die naheliegendste Deutung.`,
      sources: [
        { kind: 'wissenschaft', author: 'Leon Festinger, Henry W. Riecken, Stanley Schachter', work: 'When Prophecy Fails', year: '1956', status: 'paraphrase' },
      ],
      followUps: [
        {
          id: 'kreativste-loesung',
          objection: `„Er ist auferstanden" war eben die kreativste Lösung – und Kreativität setzt sich durch.`,
          objectionBy: 'Kris Komarnitsky',
          answer: `Dissonanz erklärt vielleicht ein Motiv, aber nicht die Daten: Warum hatten auch Skeptiker wie Jakobus und Gegner wie Paulus Erscheinungen? Warum erschien Jesus Gruppen? Warum war das Grab leer? Eine Motivation zum Umdeuten erzeugt keine Erfahrungen bei Menschen, die gar nicht umdeuten wollten.`,
        },
      ],
    },
    {
      id: 'nicht-verrueckt',
      objection: `Du stellst es so dar, als hielte ich die Jünger für verrückt. Das tue ich nicht – auch gesunde Menschen halluzinieren. Ich sage nur: Halluzinationen sind natürlicher als Auferstehungen.`,
      objectionBy: 'Michael Shermer',
      answer: `Danke, da sind wir einig: Trauerwahrnehmungen sind normal, und mein Argument hängt nicht daran, dass die Jünger krank gewesen wären. Es hängt an den **Merkmalen**: Klinische Trauerwahrnehmungen sind individuell, meist ein Gefühl der Gegenwart, trösten, führen nicht zum Glauben an eine leibliche Auferstehung und betreffen nur Trauernde. Die Ostererfahrungen waren gemeinsam, vielfältig, verwandelnd, führten zur Deutung „auferstanden" und betrafen auch Gegner. Die Profile passen nicht zusammen.`,
      followUps: [
        {
          id: 'kombinationshypothese',
          objection: `Dann kombiniere ich eben: Petrus halluziniert aus Schuld, die anderen schließen sich an, Paulus hat eine Konversionsvision, das leere Grab ist später erfunden. Jede Komponente ist natürlich.`,
          objectionBy: 'Michael Shermer',
          answer: `Jede zusätzliche Komponente braucht eine eigene Begründung, und ihre Wahrscheinlichkeiten multiplizieren sich – die Gesamterklärung wird immer unwahrscheinlicher. Und auch die Kombination erklärt die Erscheinungen vor Gruppen nicht. Eine Hypothese, die für jedes Datum eine eigene Ausnahme braucht, ist schwächer als eine, die alle Daten auf einmal erklärt.`,
          followUps: [
            {
              id: 'alles-besser-als-wunder',
              objection: `Mehrere unwahrscheinliche natürliche Ereignisse sind immer noch wahrscheinlicher als ein Wunder.`,
              objectionBy: 'Michael Shermer',
              answer: `Das gilt nur, wenn man vorher festgelegt hat, dass ein Wunder praktisch unmöglich ist. Wenn es einen Gott gibt – und dafür gibt es eigene Argumente –, dann ist die Auferstehung eines Menschen, der beanspruchte, Gottes Sohn zu sein, nicht absurd, sondern im Zusammenhang sinnvoll. Die Frage nach Gott ist also vorgelagert; die psychologischen Daten entscheiden sie nicht.`,
              detail: `Siehe A8, ‚atheismus/aussergewoehnliche-belege'.`,
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Kennst du einen dokumentierten Fall, in dem Trauernde aus einer Erscheinung schlossen, der Verstorbene sei leiblich auferstanden?`,
    `Wie erklärt eine Trauerhalluzination die Erscheinung vor Paulus, der Jesus nicht betrauerte, sondern seine Anhänger verfolgte?`,
    `Wenn alles Halluzination war – warum war das Grab leer, und warum sagten die Gegner, der Leichnam sei gestohlen?`,
    `Welche jüdische Deutung hätte trauernden Jüngern näher gelegen als „auferstanden"?`,
    `Würdest du deine Erklärung aufgeben, wenn es einen Gott gäbe – oder ist sie unabhängig davon die beste?`,
  ],
  avoid: [
    `„Gruppenhalluzinationen gibt es nicht." – Zu absolut; es gibt anekdotische Berichte und Massenphänomene. Besser: „In der klinischen Fachliteratur sind gemeinsame Halluzinationen mit gleichem, komplexem Inhalt nicht belegt."`,
    `Trauerhalluzinationen als krankhaft oder lächerlich darstellen – sie sind normal und für viele Trauernde tröstlich.`,
    `Mit späten Legenden (z. B. Märtyrerakten aller Apostel) argumentieren, deren historische Zuverlässigkeit umstritten ist.`,
    `Die Evangelien als einzige Quelle verwenden, wenn das Gegenüber sie als spät ablehnt – mit 1 Kor 15 und Gal 1 beginnen.`,
  ],
  concessions: [
    `Trauerbezogene Wahrnehmungen Verstorbener sind häufig, normal und können visuell, auditiv und sogar taktil sein.`,
    `Es gibt anekdotische Berichte über kollektive Erscheinungen Verstorbener; christliche Apologeten sollten nicht behaupten, so etwas sei schlechthin unmöglich.`,
    `Die Entscheidung zwischen natürlicher und übernatürlicher Erklärung hängt letztlich auch von der Vorfrage ab, ob man Gottes Existenz für möglich hält.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'N. T. Wright', work: 'The Resurrection of the Son of God', year: '2003', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Gary R. Habermas, Michael R. Licona', work: 'The Case for the Resurrection of Jesus', year: '2004', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Dale C. Allison Jr.', work: 'The Resurrected Jesus: Contemporary Doubts and Beliefs', year: '2021', status: 'paraphrase', note: 'Ehrlichste Auseinandersetzung eines gläubigen Forschers mit den psychologischen Parallelen.' },
    { kind: 'gegner', author: 'Gerd Lüdemann', work: 'Die Auferstehung Jesu: Historie, Erfahrung, Theologie', year: '1994', status: 'paraphrase' },
  ],
  difficulty: 3,
  tags: ['Auferstehung', 'Halluzination', 'Trauer', 'Rees', 'Lüdemann', 'kognitive Dissonanz', '1 Kor 15'],
  related: [
    'auferstehung/halluzinationen',
    'auferstehung/leichnam-gestohlen-falsches-grab',
    'auferstehung/wunder-historisch-unmoeglich',
    'auferstehung/legende-entwickelte-sich',
    'psychiatrie/propheten-psychisch-krank',
    'atheismus/aussergewoehnliche-belege',
  ],
};

export default claim;
