import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'wartezeitproblem',
  title: `„Es gibt genug Zeit für die nötigen Mutationen."`,
  proponents: [
    { name: 'Larry Moran', role: 'Biochemiker, University of Toronto; Vertreter der Neutralen Theorie', work: 'What\'s in Your Genome? (2023); Blog „Sandwalk"' },
    { name: 'Nathan H. Lents', role: 'Biologe, CUNY', work: 'Human Errors (2018); Science-Rezension (2019)' },
    { name: 'S. Joshua Swamidass', role: 'Computerbiologe, Washington University in St. Louis', work: 'Debattenbeiträge auf Peaceful Science' },
    { name: 'Dan Stern Cardinale', role: 'Evolutionsbiologe und Wissenschaftskommunikator', work: 'Videokritiken zu Behe und Sanford' },
    { name: 'Richard Dawkins', role: 'Evolutionsbiologe, Oxford', work: 'Climbing Mount Improbable (1996)' },
  ],
  steelman: `Jeder Mensch trägt rund 60–70 neue Mutationen, die seine Eltern nicht hatten; in einer Population von Tausenden bis Milliarden entstehen so in jeder Generation praktisch alle möglichen Einzelbasen-Mutationen. Über sechs Millionen Jahre fixieren sich nach der Neutralen Theorie genau so viele Unterschiede, wie wir zwischen Mensch und Schimpanse beobachten – die Zahlen passen hervorragend. Kurze regulatorische Bindungsstellen von sechs bis zehn Basen entstehen ständig zufällig neu (Stone & Wray 2001). Und Evolution sucht nicht nach einem bestimmten Ziel: Es gibt unzählige Wege, ein Merkmal zu verbessern, und Selektion nimmt jeden, der sich bietet. Wer eine bestimmte Kombination von Mutationen vorab festlegt und dann die Wartezeit ausrechnet, begeht den Fehler des „texanischen Scharfschützen", der erst schießt und dann die Zielscheibe um das Einschussloch malt. Durrett und Schmidt – die von ID-Vertretern so gern zitiert werden – haben Behes Schlussfolgerungen selbst ausdrücklich widersprochen.`,
  biblical: {
    summary: `Für Gott sind „tausend Jahre wie ein Tag" (Ps 90,4; 2 Petr 3,8) – die Schrift macht Gottes Wirken nicht von Zeiträumen abhängig. Die Frage des Wartezeitproblems ist daher keine theologische, sondern eine mathematische: Reichen die verfügbaren Generationen für das, was ungelenkten Prozessen zugeschrieben wird? Ein Christ kann diese Frage gelassen und ergebnisoffen prüfen.`,
    sources: [
      { kind: 'bibel', work: 'Psalmen', ref: '90,4', translation: 'Luther 1912', status: 'verbatim', quote: `Denn tausend Jahre sind vor dir wie der Tag, der gestern vergangen ist, und wie eine Nachtwache.` },
      { kind: 'bibel', work: '2. Petrus', ref: '3,8', translation: 'Luther 1912', status: 'verbatim', quote: `daß ein Tag vor dem HERRN ist wie tausend Jahre, und tausend Jahre wie ein Tag.` },
    ],
  },
  church: {
    summary: `Die koptische Kirche hat über das Erdalter kein Dogma. Augustinus lehrte, dass die Zeit selbst mit der Schöpfung entstand und Gott nicht „in der Zeit" handelt wie ein Geschöpf. Daraus folgt: Lange Zeiträume sind für den Glauben kein Problem. Problematisch ist erst die Vorstellung, Zeit sei eine schöpferische Kraft, die aus sich heraus Ordnung hervorbringt („mit genug Zeit ist alles möglich").`,
    sources: [
      { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'Bekenntnisse (Confessiones)', ref: 'XI,13', status: 'paraphrase', quote: `Es gab keine Zeit, bevor Gott die Zeit schuf; er selbst ist allen Zeiten voraus in der Erhabenheit seiner ewigen Gegenwart.` },
    ],
  },
  opposingView: {
    summary: `Für **neutrale** Unterschiede sind die Zahlen unproblematisch: Die Substitutionsrate entspricht nach der Neutralen Theorie der Mutationsrate, und die beobachteten rund 35 Millionen Einzelbasen-Unterschiede zwischen Mensch und Schimpanse passen gut zu bekannten Raten und Zeiträumen. Das Wartezeitproblem betrifft etwas anderes: **bestimmte, koordinierte, funktionale** Veränderungen. Durrett & Schmidt (Genetics 2008) berechneten, dass ein Paar koordinierter Mutationen, deren erste allein keinen Vorteil bringt, in der menschlichen Linie rund 216 Millionen Jahre bräuchte – sie betonten aber, dass einzelne neue Bindungsstellen rasch entstehen und dass Behe die Zahl der möglichen Ziele unterschätze. Sanford et al. (2015) kamen mit Simulationen auf noch längere Wartezeiten; ihre Modelle sind umstritten. Offen ist vor allem, **wie viele** koordinierte Änderungen menschliche Neuerungen tatsächlich erfordern und **wie viele** alternative Wege es gibt.`,
    sources: [
      { kind: 'wissenschaft', author: 'Rick Durrett, Deena Schmidt', work: '„Waiting for two mutations: with applications to regulatory sequence evolution and the limits of Darwinian evolution", Genetics 180', ref: 'S. 1501–1509', year: '2008', status: 'paraphrase', quote: `Für ein Paar koordinierter Mutationen in der menschlichen Linie, bei dem die erste allein neutral ist, ergibt sich eine Wartezeit von etwa 216 Millionen Jahren.`, note: 'Die Autoren widersprechen ausdrücklich Behes Folgerungen; Behe antwortete in einem Leserbrief in Genetics (2009).' },
      { kind: 'wissenschaft', author: 'Jonathan R. Stone, Gregory A. Wray', work: '„Rapid evolution of cis-regulatory sequences via local point mutations", Molecular Biology and Evolution 18 (9)', ref: 'S. 1764–1770', year: '2001', status: 'paraphrase', quote: `Kurze Transkriptionsfaktor-Bindungsstellen können durch Punktmutationen in relativ kurzer Zeit neu entstehen.` },
      { kind: 'wissenschaft', author: 'John Sanford, Wesley Brewer, Franzine Smith, John Baumgardner', work: '„The waiting time problem in a model hominin population", Theoretical Biology and Medical Modelling 12', ref: 'Art. 18', year: '2015', status: 'paraphrase', quote: `Numerische Simulationen ergeben, dass schon die Etablierung einer bestimmten kurzen Nukleotidfolge in einer Homininen-Population sehr lange Wartezeiten erfordert.`, note: 'Die genauen Zahlenwerte vor Verwendung im Original prüfen; Sanford vertritt eine Junge-Erde-Position, die Modelle sind umstritten.' },
    ],
  },
  quickAnswer: `Für zufällige, neutrale Unterschiede reicht die Zeit – das gestehe ich zu. Aber neue Funktionen brauchen oft mehrere bestimmte, aufeinander abgestimmte Änderungen. Für nur zwei koordinierte Mutationen in der menschlichen Linie errechneten die Populationsgenetiker Durrett und Schmidt rund 216 Millionen Jahre – länger als es Säugetiere gibt. Seit der Trennung von Mensch und Schimpanse vergingen nur etwa 250.000 bis 300.000 Generationen. Die Frage ist also nicht „Gibt es genug Mutationen?", sondern „Gibt es genug Zeit für die richtigen?"`,
  keyPoints: [
    `**Neutrale Zahlen passen** – das ist zuzugestehen. Das Problem liegt bei koordinierten, funktionalen Änderungen.`,
    `**Kleine Populationen, lange Generationen:** Homininen hatten eine effektive Populationsgröße von grob 10.000 und Generationszeiten von 20–25 Jahren; sechs Millionen Jahre sind nur rund 250.000–300.000 Generationen.`,
    `**Zwei koordinierte Mutationen:** ca. 216 Millionen Jahre in der menschlichen Linie (Durrett & Schmidt 2008).`,
    `**Der Mensch braucht vieles gleichzeitig:** aufrechter Gang (Becken, Wirbelsäule, Fuß, Innenohr), Gehirn, Kehlkopf und Sprache – die genetische Grundlage ist weitgehend unbekannt.`,
    `**Die Gegenseite hat einen Punkt:** Es gibt viele mögliche Ziele. Wie viele, und wie dicht sie liegen, ist die eigentliche offene Frage.`,
    `**Abrupte Übergänge verschärfen das Problem:** z. B. der Übergang zu vollständig im Wasser lebenden Walen in grob zehn Millionen Jahren.`,
  ],
  voices: [
    {
      person: 'michael-behe',
      role: 'als Biochemiker',
      text: `Behe verbindet die Malariadaten mit der Populationsgenetik: Was bei Mikroben mit 10^20 Zellen gerade noch geschieht – zwei koordinierte Mutationen –, ist bei Säugetieren mit kleinen Populationen und langen Generationen praktisch unerreichbar. Die Arbeit von Durrett & Schmidt bestätige seiner Ansicht nach die Größenordnung des Problems; ihren Einwand, es gebe viele mögliche Ziele, hält er für eine Verschiebung der Frage, solange nicht gezeigt wird, dass funktionale Ziele so dicht liegen.`,
      sources: [
        { kind: 'fachliteratur', author: 'Michael J. Behe', work: 'The Edge of Evolution', year: '2007', status: 'paraphrase' },
        { kind: 'wissenschaft', author: 'Michael J. Behe', work: '„Waiting longer for two mutations", Genetics 181 (Leserbrief)', year: '2009', status: 'paraphrase', note: 'Antwort auf Durrett & Schmidt 2008; die Autoren erwiderten in derselben Ausgabe.' },
      ],
    },
    {
      person: 'john-sanford',
      role: 'als Pflanzengenetiker',
      text: `Sanford und Kollegen simulierten mit einem numerischen Modell, wie lange es in einer Homininen-Population dauert, bis eine bestimmte kurze Nukleotidfolge an einer passenden Stelle entsteht und sich durchsetzt. Ihr Ergebnis: Schon für kurze Folgen ergeben sich Wartezeiten, die die verfügbare Zeit weit übersteigen. Sanford folgert, dass die menschliche Evolution durch ungelenkte Prozesse populationsgenetisch nicht plausibel ist.`,
      sources: [
        { kind: 'wissenschaft', author: 'John Sanford u. a.', work: 'Theoretical Biology and Medical Modelling 12, Art. 18', year: '2015', status: 'paraphrase', note: 'Sanford vertritt eine Junge-Erde-Position, die keine verbindliche Lehre der koptischen Kirche ist.' },
      ],
    },
    {
      person: 'bechly',
      role: 'als Paläontologe',
      text: `Bechly verbindet das Wartezeitproblem mit dem Fossilbericht: Viele große Übergänge erscheinen im Fossilbericht abrupt, in geologisch kurzen Zeitfenstern – die kambrische Explosion, die Entstehung der Blütenpflanzen, der Übergang zu vollständig im Wasser lebenden Walen. Je kürzer das Zeitfenster und je größer der Umbau, desto schärfer stellt sich die Frage, ob die Populationsgenetik genug Zeit für die nötigen koordinierten Änderungen lässt.`,
      sources: [
        { kind: 'fachliteratur', author: 'Günter Bechly', work: 'Beiträge zum „Wartezeitproblem" und zu abrupten Übergängen im Fossilbericht (evolutionnews.org; Vorträge)', status: 'unverified', note: 'Konkrete Fundstellen vor Zitierung heraussuchen.' },
      ],
    },
    {
      person: 'ann-gauger',
      role: 'als Biologin',
      text: `Gauger betont, dass für den Menschen nicht ein einzelnes Merkmal, sondern ein ganzes Bündel von Veränderungen nötig war: Für den aufrechten Gang etwa mussten Becken, Wirbelsäule, Beine, Füße und das Gleichgewichtsorgan gemeinsam umgebaut werden. Solange nicht bekannt ist, welche genetischen Änderungen dafür nötig waren, kann niemand behaupten, die Zeit habe gereicht – die Beweislast liegt bei dieser Behauptung.`,
      sources: [
        { kind: 'fachliteratur', author: 'Ann Gauger, Douglas Axe, Casey Luskin', work: 'Science and Human Origins', year: '2012', status: 'paraphrase' },
      ],
    },
    {
      person: 'augustinus',
      role: 'als Philosoph der Zeit',
      text: `Augustinus erinnert daran, dass Zeit kein Wesen mit eigenen Kräften ist, sondern selbst geschaffen. Der Satz „mit genug Zeit ist alles möglich" behandelt Zeit wie eine schöpferische Macht. Zeit gibt Gelegenheiten, aber sie erzeugt keine Ordnung; ob in einer bestimmten Zeit etwas geschehen kann, hängt von den Wahrscheinlichkeiten der Prozesse ab, die in ihr wirken.`,
      sources: [
        { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'Bekenntnisse (Confessiones)', ref: 'XI,13–14', status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'neutrale-rate-passt',
      objection: `Die rund 35 Millionen Unterschiede zwischen Mensch und Schimpanse passen exakt zu dem, was die Neutrale Theorie bei bekannter Mutationsrate in sechs Millionen Jahren vorhersagt. Wo ist das Problem?`,
      objectionBy: 'Larry Moran',
      answer: `Für neutrale Unterschiede gibt es kein Problem – das gestehe ich zu. Die Frage ist eine andere: Wie lange dauert es, bis bestimmte, aufeinander abgestimmte Änderungen entstehen, die eine neue Funktion hervorbringen? Für nur zwei koordinierte Mutationen errechneten Durrett & Schmidt in der menschlichen Linie rund 216 Millionen Jahre.`,
      followUps: [
        {
          id: 'welche-koordinierten-aenderungen',
          objection: `Welche „koordinierten Änderungen" meinst du denn? Du kannst keine einzige konkret benennen.`,
          objectionBy: 'Nathan Lents',
          answer: `Richtig ist: Für die meisten menschlichen Merkmale kennen wir die genetische Grundlage nicht. Aber das spricht nicht für dich, sondern zeigt, dass die Behauptung „die Zeit reichte" unbelegt ist. Der aufrechte Gang erforderte Umbauten an Becken, Wirbelsäule, Beinen, Füßen und Innenohr, die zusammenpassen müssen. Wer sagt, das sei in rund 300.000 Generationen geschehen, muss zeigen, dass es populationsgenetisch möglich ist.`,
          followUps: [
            {
              id: 'polygen-graduell',
              objection: `Solche Merkmale sind polygen: Viele Gene mit kleinen Effekten verschieben sie schrittweise – wie bei der Körpergröße. Da muss nichts koordiniert werden.`,
              objectionBy: 'Dan Stern Cardinale',
              answer: `Für quantitative Merkmale wie Körpergröße stimmt das, und das gestehe ich zu. Aber neue Strukturen oder Funktionen, die präzise Wechselwirkungen mehrerer Bausteine erfordern – etwa eine neue Proteinbindung oder ein neues Regulationsnetz –, sind etwas anderes. Beides kommt vor. Die Frage ist, welcher Typ für die großen Neuerungen bestimmend war.`,
            },
          ],
        },
      ],
    },
    {
      id: 'durrett-widerspricht-behe',
      objection: `Durrett & Schmidt haben ausdrücklich gegen Behe geschrieben. Ihr missbraucht ihre Arbeit.`,
      objectionBy: 'Joshua Swamidass',
      answer: `Das stimmt, und ich sage es offen: Sie halten Behes Folgerungen für falsch. Ich zitiere nicht ihre Meinung über Behe, sondern ihr Rechenergebnis: Ein koordiniertes Mutationspaar dauert in der menschlichen Linie extrem lange. Ihr Haupteinwand ist, dass es viele mögliche Ziele gibt. Das ist ein berechtigter Punkt – aber er muss empirisch belegt werden.`,
      followUps: [
        {
          id: 'texanischer-scharfschuetze',
          objection: `Behe malt die Zielscheibe um das Einschussloch: Er legt ein bestimmtes Ziel fest. In der Natur gibt es unzählige mögliche Verbesserungen.`,
          objectionBy: 'Nathan Lents',
          answer: `Der Einwand ist fair für einfache Anpassungen. Aber für komplexe Funktionen gilt: Wie viele Wege gibt es, und wie dicht liegen sie? Axe' Messungen zur Seltenheit funktionaler Proteinfaltungen deuten darauf hin, dass funktionale Ziele im Sequenzraum sehr dünn gesät sind. Mehr Ziele helfen nur, wenn sie zahlreich und erreichbar sind – genau das ist zu zeigen.`,
          followUps: [
            {
              id: 'rekombination-grosse-populationen',
              objection: `Und Rekombination? Und frühe Homininen-Populationen, die vielleicht größer waren?`,
              objectionBy: 'Joshua Swamidass',
              answer: `Rekombination hilft, getrennt entstandene Varianten zusammenzuführen, wenn beide schon in der Population vorhanden sind – sie ändert aber wenig daran, wie lange es dauert, bis eine allein nutzlose Mutation überhaupt in ausreichender Häufigkeit vorliegt. Und die effektive Populationsgröße der Homininen wird meist auf grob 10.000 geschätzt; selbst eine zehnmal größere Population verkürzt die Wartezeit nicht um Größenordnungen.`,
            },
          ],
        },
      ],
    },
    {
      id: 'millionen-jahre-unvorstellbar',
      objection: `Laien unterschätzen einfach, was in Millionen Jahren möglich ist. Unsere Intuition ist für solche Zeiträume nicht gemacht.`,
      objectionBy: 'Richard Dawkins',
      answer: `Gerade deshalb sollten wir nicht mit Intuition, sondern mit Rechnung arbeiten. Und die Rechnung zählt Generationen, nicht Jahre: Sechs Millionen Jahre sind beim Menschen nur rund 250.000–300.000 Generationen. Bei Bakterien wären das wenige Jahrzehnte. Das Lenski-Experiment hat in einer vergleichbaren Zahl von Generationen eine einzige regulatorische Umschaltung hervorgebracht.`,
      followUps: [
        {
          id: 'wale-hatten-zeit',
          objection: `Nimm die Wale: Von Pakicetus bis zu vollständig im Wasser lebenden Walen vergingen rund zehn Millionen Jahre. Das ist reichlich Zeit.`,
          objectionBy: 'Donald Prothero',
          answer: `Für Wale mit Generationszeiten von mehreren Jahren und kleinen Populationen sind zehn Millionen Jahre vielleicht eine bis zwei Millionen Generationen – für einen Umbau von Atmung, Fortpflanzung, Hören, Fortbewegung, Nierenfunktion und Skelett. Ich behaupte nicht, dass das unmöglich ist; ich sage, dass niemand ein populationsgenetisches Modell vorgelegt hat, das zeigt, dass es möglich ist. Siehe den Claim zu Übergangsformen.`,
          followUps: [
            {
              id: 'beweislast-umgekehrt',
              objection: `Du verlangst Unmögliches. Die Evolution ist bewiesen; wir müssen nicht jede Mutation modellieren.`,
              objectionBy: 'Jerry Coyne',
              answer: `Ich verlange nicht jede Mutation, sondern eine plausible Größenordnung. Wenn die Behauptung lautet, ein ungelenkter Prozess habe dies in dieser Zeit bewirkt, dann ist die Frage nach der Zeit eine legitime wissenschaftliche Prüfung. Eine Theorie, die sich dieser Prüfung entzieht, gewinnt nicht an Stärke.`,
            },
          ],
        },
      ],
    },
    {
      id: 'sanford-kreationistenprogramm',
      objection: `Sanfords Simulationen stammen von einem Junge-Erde-Kreationisten mit eingebauten Annahmen. Das ist keine seriöse Wissenschaft.`,
      objectionBy: 'Dan Stern Cardinale',
      answer: `Sanfords Junge-Erde-Position teile ich nicht, und seine Modelle sind umstritten – deshalb stütze ich mich vorrangig auf Durrett & Schmidt, ausgewiesene Populationsgenetiker ohne ID-Hintergrund. Aber ein Argument wird nicht dadurch falsch, dass sein Urheber eine andere Meinung zum Erdalter hat. Man muss die Annahmen prüfen.`,
      followUps: [
        {
          id: 'genetische-entropie-widerlegt',
          objection: `Und Sanfords „genetische Entropie" ist widerlegt – sonst wären Mikroben mit kurzen Generationszeiten längst ausgestorben.`,
          objectionBy: 'Larry Moran',
          answer: `Die These der genetischen Entropie ist in der Fachwelt stark umstritten, und ich brauche sie für mein Argument nicht. Das Wartezeitproblem hängt nicht davon ab, ob Genome langfristig zerfallen, sondern davon, wie lange koordinierte Neuerungen brauchen. Diese Frage bleibt auch ohne Sanford bestehen.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wie viele Generationen hatte die menschliche Linie seit der Trennung vom Schimpansen – und wie viele koordinierte Änderungen waren nötig?`,
    `Gibt es ein publiziertes populationsgenetisches Modell, das z. B. den aufrechten Gang in dieser Zeit plausibel macht?`,
    `Wie dicht liegen funktionale Ziele im Sequenzraum – und woher weißt du das?`,
    `Wenn ein Paar koordinierter Mutationen 216 Millionen Jahre braucht – wie viele alternative Ziele bräuchte es, damit es in einigen Hunderttausend Jahren geschieht?`,
  ],
  avoid: [
    `„Es gibt nicht genug Mutationen." – Falsch; es gibt sehr viele. Präzisiere: koordinierte, funktionale Mutationen.`,
    `Sanfords Zahlen als unumstritten darstellen.`,
    `Die Zeitfrage mit einem Junge-Erde-Argument verbinden – das ist hier nicht nötig und keine Lehre der Kirche.`,
  ],
  concessions: [
    `Für neutrale Unterschiede reichen Mutationsrate und Zeit aus.`,
    `Durrett & Schmidt widersprechen Behes Schlussfolgerungen; der Einwand der vielen möglichen Ziele ist berechtigt.`,
    `Die genetische Grundlage der meisten menschlichen Merkmale ist unbekannt – das gilt für beide Seiten.`,
  ],
  furtherReading: [
    { kind: 'wissenschaft', author: 'Rick Durrett, Deena Schmidt', work: 'Genetics 180, 1501–1509', year: '2008', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Michael J. Behe', work: 'The Edge of Evolution', year: '2007', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Ann Gauger, Douglas Axe, Casey Luskin', work: 'Science and Human Origins', year: '2012', status: 'paraphrase' },
  ],
  difficulty: 3,
  tags: ['Wartezeitproblem', 'Populationsgenetik', 'Durrett & Schmidt', 'Menschliche Evolution', 'Wale'],
  related: [
    'evolution/mutation-selektion-erklaeren-alles',
    'evolution/evolution-in-aktion',
    'palaeontologie/uebergangsformen',
    'palaeontologie/kambrische-explosion-kein-problem',
    'ursprung-des-lebens/genug-zeit',
  ],
};

export default claim;
