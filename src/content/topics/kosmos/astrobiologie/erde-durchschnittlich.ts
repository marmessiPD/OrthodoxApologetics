import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'erde-durchschnittlich',
  title: `„Die Erde ist ein durchschnittlicher Planet (Kopernikanisches Prinzip)."`,
  proponents: [
    { name: 'Carl Sagan (†1996)', role: 'Astronom, Cornell University', work: 'Cosmos (1980); Pale Blue Dot (1994)' },
    { name: 'Stephen Hawking (†2018)', role: 'Theoretischer Physiker', work: 'Fernsehinterview „Reality on the Rocks" (1995): die Menschheit als „chemischer Abschaum" auf einem mittelgroßen Planeten' },
    { name: 'Frank Drake (†2022)', role: 'Radioastronom, Begründer von SETI', work: 'Drake-Gleichung (1961)' },
    { name: 'Neil deGrasse Tyson', role: 'Astrophysiker', work: 'Cosmos: A Spacetime Odyssey (2014)' },
  ],
  steelman: `Die Geschichte der Astronomie ist eine Geschichte der Entthronung. Kopernikus nahm der Erde den Platz im Zentrum, Shapley zeigte, dass die Sonne am Rand der Milchstraße liegt, Hubble, dass die Milchstraße eine von unzähligen Galaxien ist. Das „kopernikanische Prinzip" – wir befinden uns an keinem bevorzugten Ort – hat sich immer wieder bewährt. Die Kepler-Mission hat gezeigt, dass Planeten die Regel sind; Auswertungen zufolge hat ein beträchtlicher Teil sonnenähnlicher Sterne erdgroße Planeten in der habitablen Zone. Bei Hunderten Milliarden Sternen allein in unserer Galaxie ist die Erde statistisch gesehen ein Durchschnittsplanet. Jede Behauptung einer Sonderstellung ist ein Rückfall in vorkopernikanischen Anthropozentrismus.`,
  biblical: {
    summary: `Die Bibel lehrt keine bestimmte Himmelsmechanik und keinen geometrischen „Mittelpunkt". Sie lehrt, dass Gott die Erde „bereitet hat, dass man darauf wohnen solle" (Jes 45,18), und dass er „die Erde den Menschenkindern gegeben" hat (Ps 115,16). Die Gestirne sind „zu Zeichen, Zeiten, Tagen und Jahren" gesetzt (Gen 1,14) – also auch als Uhren und Orientierungsmittel für den Menschen. Die Sonderstellung der Erde ist eine der **Bestimmung**, nicht der Geometrie.`,
    detail: `- **Jes 45,18:** Die Bewohnbarkeit der Erde ist gewollt.
- **Ps 115,16:** Der Himmel ist des Herrn, die Erde hat er den Menschen gegeben.
- **Gen 1,14–18:** Sonne, Mond und Sterne als Zeitmesser und Zeichen – bemerkenswert im Licht der These, dass unser Ort auffallend gut zur Beobachtung des Kosmos geeignet ist.
- **Vorsicht:** Verse wie Hiob 26,7 („hängt die Erde an nichts") sind poetisch; sie als „wissenschaftliche Vorhersagen" zu verkaufen, wäre derselbe Fehler wie bei angeblichen Koran-Wissenschaftswundern.`,
    sources: [
      { kind: 'bibel', work: 'Jesaja', ref: '45,18', quote: `… der die Erde bereitet hat und hat sie gemacht und zugerichtet, und sie nicht gemacht hat, daß sie leer soll sein, sondern sie bereitet hat, daß man darauf wohnen solle …`, translation: 'Luther 1912', status: 'paraphrase' },
      { kind: 'bibel', work: 'Psalm', ref: '115,16', quote: `Der Himmel allenthalben ist des HERRN; aber die Erde hat er den Menschenkindern gegeben.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Mose', ref: '1,14', quote: `Und Gott sprach: Es werden Lichter an der Feste des Himmels, die da scheiden Tag und Nacht und geben Zeichen, Zeiten, Tage und Jahre.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptische Kirche hat keine Lehre über die Stellung der Erde im Raum. Historisch wichtig ist eine oft übersehene Tatsache: Im antiken und mittelalterlichen Weltbild war das Zentrum nicht der Ehrenplatz, sondern der **unterste**, gröbste Ort des Kosmos – das Himmlische war oben. Die Rede von der „Entthronung" des Menschen durch Kopernikus ist deshalb, wie der Wissenschaftshistoriker Dennis Danielson gezeigt hat, ein modernes Klischee. Kopernikus selbst war Domherr und lobte im Vorwort seines Hauptwerks den „besten und ordnungsliebendsten Werkmeister".`,
    detail: `In Dantes *Göttlicher Komödie* liegt die Hölle im Erdmittelpunkt; das Paradies ist außen. Die Väter betonen die Würde des Menschen nicht wegen eines räumlichen Ortes, sondern weil er nach Gottes Bild geschaffen ist und Gott selbst Mensch wurde (Athanasius, *De Incarnatione*).`,
    sources: [
      { kind: 'fachliteratur', author: 'Dennis R. Danielson', work: '„The Great Copernican Cliché", American Journal of Physics 69 (10), 1029–1035', year: '2001', quote: `Im vorkopernikanischen Weltbild war das Zentrum der niedrigste, nicht der würdigste Ort; die Erzählung von der Entthronung des Menschen ist ein späteres Klischee.`, status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'Nikolaus Kopernikus', work: 'De revolutionibus orbium coelestium, Widmung an Papst Paul III.', year: '1543', quote: `Das Weltgebäude wurde für uns von dem besten und ordnungsliebendsten Werkmeister von allen geschaffen.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Fair dargestellt: Planeten sind häufig, und erdgroße Planeten in der habitablen Zone (wo flüssiges Wasser theoretisch möglich ist) sind nach Kepler-Daten nicht selten – Petigura, Howard und Marcy schätzten 2013 etwa 22 Prozent bei sonnenähnlichen Sternen; spätere Schätzungen streuen stark. Ob solche Planeten tatsächlich bewohnbar sind, hängt aber von vielen weiteren Faktoren ab: Plattentektonik, Magnetfeld, Wassermenge, Atmosphäre, stabile Achsneigung, Aktivität des Sterns, Lage in der Galaxie. Hier ist die Forschung kontrovers. Ward und Brownlee (*Rare Earth*, 2000), beide keine Theisten, argumentieren, dass einfaches Leben häufig, komplexes Leben aber sehr selten sein könnte.`,
    detail: `- **Habitable Zone ist nicht bewohnbar:** Venus liegt am Innenrand, Mars am Außenrand der habitablen Zone der Sonne – beide sind nach heutigem Wissen lebensfeindlich.
- **Sonne:** Die meisten Sterne sind Rote Zwerge mit starken Flares und gebundener Rotation ihrer Planeten. Die Sonne ist massereicher als die große Mehrheit der Sterne und im Vergleich zu ähnlichen Sternen auffallend ruhig (Reinhold u. a., *Science* 368, 2020).
- **Mond:** Laskar, Joutel und Robutel (*Nature* 361, 1993) fanden, dass der Mond die Achsneigung der Erde stabilisiert; ohne Mond wäre sie chaotisch. Spätere Simulationen (Lissauer, Barnes & Chambers, *Icarus*, 2012) ergaben für eine mondlose Erde geringere Schwankungen als befürchtet – eine ehrliche Einschränkung.
- **Jupiter:** Die These vom „Jupiter-Schutzschild" ist umstritten; Simulationen (Horner & Jones, 2008) zeigen ein gemischtes Bild.
- **Galaktische habitable Zone** (Gonzalez, Brownlee & Ward, *Icarus* 152, 2001): Nur ein Teil der Milchstraße bietet genügend schwere Elemente bei geringen Gefahren.
- **Fermi-Paradox:** „Wo sind sie alle?" – trotz Jahrzehnten der Suche (SETI seit 1960) kein Signal.`,
    sources: [
      { kind: 'wissenschaft', author: 'Peter D. Ward & Donald Brownlee', work: 'Rare Earth: Why Complex Life Is Uncommon in the Universe', year: '2000', quote: `Mikrobielles Leben mag im Universum verbreitet sein, komplexes tierisches Leben dagegen ist vermutlich äußerst selten.`, status: 'paraphrase', note: 'Beide Autoren sind keine Theisten und keine Vertreter von Intelligent Design.' },
      { kind: 'wissenschaft', author: 'Erik A. Petigura, Andrew W. Howard & Geoffrey W. Marcy', work: '„Prevalence of Earth-size planets orbiting Sun-like stars", Proceedings of the National Academy of Sciences 110', year: '2013', quote: `Etwa 22 Prozent der sonnenähnlichen Sterne besitzen erdgroße Planeten in der habitablen Zone (Schätzung mit großen Unsicherheiten).`, status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'Jacques Laskar, Frédéric Joutel & Philippe Robutel', work: '„Stabilization of the Earth’s obliquity by the Moon", Nature 361, 615–617', year: '1993', quote: `Ohne den Mond läge die Achsneigung der Erde in einer großen chaotischen Zone; der Mond wirkt als möglicher Klimaregulator.`, status: 'paraphrase', url: 'https://doi.org/10.1038/361615a0' },
      { kind: 'wissenschaft', author: 'Jack J. Lissauer, Jason W. Barnes & John E. Chambers', work: '„Obliquity variations of a moonless Earth", Icarus 217', year: '2012', quote: `Die Achsneigung einer mondlosen Erde schwankt über lange Zeiträume deutlich weniger stark, als frühere Studien nahelegten.`, status: 'paraphrase', note: 'Relativiert das Mond-Argument; ehrlich mitteilen.' },
      { kind: 'wissenschaft', author: 'Timo Reinhold u. a.', work: '„The Sun is less active than other solar-like stars", Science 368, 518–521', year: '2020', quote: `Im Vergleich zu vielen ähnlichen Sternen zeigt die Sonne deutlich geringere Helligkeitsschwankungen.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Das „kopernikanische Prinzip" war eine nützliche Arbeitshypothese – aber die Daten zeigen zunehmend: Die Erde ist in vielem besonders, was komplexes Leben braucht. Ein ruhiger, stabiler Stern; der richtige Abstand; die richtige Größe mit Plattentektonik und Magnetfeld; ein großer Mond; eine Lage in der galaktischen habitablen Zone. Das sagen Ward und Brownlee – keine Theisten. Und im Mittelalter war das Zentrum der unterste Ort, nicht der Ehrenplatz; die „Entthronung" ist ein Mythos.`,
  keyPoints: [
    `**Mythos Entthronung:** Im alten Weltbild war das Zentrum der niedrigste Ort (Danielson 2001). Kopernikus war Domherr und lobte den Schöpfer.`,
    `**Habitable Zone ≠ bewohnbar:** Venus und Mars liegen am Rand der habitablen Zone der Sonne – und sind lebensfeindlich.`,
    `**Viele Faktoren zugleich:** ruhiger Stern, Plattentektonik, Magnetfeld, passende Wassermenge, Atmosphäre, stabile Achse, galaktische Lage.`,
    `**Seltene Erde aus säkularer Feder:** Ward und Brownlee halten komplexes Leben für sehr selten.`,
    `**Bewohnbarkeit und Beobachtbarkeit:** Unser Ort eignet sich auffallend gut zur Erforschung des Kosmos (Gonzalez & Richards).`,
    `**Ehrlich bleiben:** Einige Einzelargumente (Jupiter-Schutzschild, Mond-Stabilisierung) sind umstritten oder relativiert.`,
  ],
  voices: [
    {
      person: 'guillermo-gonzalez',
      role: 'als Astronom',
      text: `Gonzalez hat mit Brownlee und Ward das Konzept der galaktischen habitablen Zone entwickelt: Zu nah am Zentrum der Milchstraße sind Supernovae, Gammastrahlung und Sternbegegnungen zu häufig, zu weit draußen fehlen die schweren Elemente für erdähnliche Planeten. Die Sonne liegt in diesem schmalen Ring – und zugleich zwischen zwei Spiralarmen, wo der Blick ins All relativ frei ist. Für Gonzalez zeigt das: Die Erde ist nicht durchschnittlich, sondern hat eine Kombination von Eigenschaften, die selten zusammentrifft.`,
      sources: [{ kind: 'wissenschaft', author: 'Guillermo Gonzalez, Donald Brownlee & Peter Ward', work: '„The Galactic Habitable Zone: Galactic Chemical Evolution", Icarus 152, 185–200', year: '2001', quote: `Die galaktische habitable Zone ist ein ringförmiger Bereich, der ausreichende Metallizität mit geringen Gefahren verbindet.`, status: 'paraphrase' }],
    },
    {
      person: 'jay-richards',
      role: 'als Wissenschaftsphilosoph',
      text: `Richards hat mit Gonzalez in *The Privileged Planet* (2004) eine prüfbare These formuliert: Die Orte im Universum, die Leben ermöglichen, sind zugleich die Orte, die die besten Bedingungen für wissenschaftliche Entdeckungen bieten. Beispiele sind die durchsichtige Atmosphäre, die Lage in der Galaxie mit freiem Blick ins All und die Tatsache, dass Mond und Sonne am Himmel fast gleich groß erscheinen – was totale Sonnenfinsternisse ermöglicht, mit denen 1919 Einsteins Allgemeine Relativitätstheorie bestätigt wurde. Diese Korrelation ist unter der Annahme eines Zufalls nicht zu erwarten, unter der Annahme eines Schöpfers, der entdeckbare Geschöpfe will, sehr wohl.`,
      sources: [{ kind: 'fachliteratur', author: 'Guillermo Gonzalez & Jay W. Richards', work: 'The Privileged Planet: How Our Place in the Cosmos Is Designed for Discovery', year: '2004', quote: `Die Bedingungen für Bewohnbarkeit und für Messbarkeit fallen im Universum auffällig zusammen.`, status: 'paraphrase' }],
    },
    {
      person: 'kopernikus',
      role: 'als Astronom und Domherr',
      text: `Kopernikus, dessen Name heute für die „Entthronung" des Menschen steht, verstand seine Arbeit als Ehrfurcht vor dem Schöpfer. In der Widmung an Papst Paul III. spricht er davon, dass das Weltgebäude von einem höchst guten und ordnungsliebenden Werkmeister für uns geschaffen sei; die Mathematik solle diese Ordnung sichtbar machen. Die Verlagerung der Sonne ins Zentrum war für ihn kein Verlust an Würde für den Menschen, sondern ein Gewinn an Schönheit und Einfachheit des göttlichen Bauplans.`,
      sources: [{ kind: 'wissenschaft', author: 'Nikolaus Kopernikus', work: 'De revolutionibus orbium coelestium', year: '1543', quote: `Das Weltgebäude, das für uns vom besten und ordnungsliebendsten Werkmeister geschaffen wurde …`, status: 'paraphrase' }],
    },
    {
      person: 'hugh-ross',
      role: 'als Astrophysiker',
      text: `Ross hat in *Improbable Planet* (2016) die Faktoren zusammengestellt, die die Erde für fortgeschrittenes Leben geeignet machen – von der Entstehungsgeschichte des Sonnensystems über die Mondbildung bis zur Plattentektonik und zum langfristig stabilen Klima. Seine Grundthese: Viele dieser Faktoren sind nicht nur zufällig gleichzeitig erfüllt, sondern greifen zeitlich so ineinander, dass die Erde gerade in der Epoche bewohnbar ist, in der der Mensch lebt. Man muss nicht jede seiner Zahlen übernehmen, um die Grundbeobachtung ernst zu nehmen.`,
      sources: [{ kind: 'fachliteratur', author: 'Hugh Ross', work: 'Improbable Planet: How Earth Became Humanity’s Home', year: '2016', quote: `Die Bewohnbarkeit der Erde für fortgeschrittenes Leben beruht auf einer langen Kette fein abgestimmter Ereignisse und Bedingungen.`, status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'kopernikus-entthronung',
      objection: `Kopernikus hat uns aus dem Zentrum gestoßen. Seitdem lernen wir immer wieder: Wir sind nichts Besonderes.`,
      objectionBy: 'Carl Sagan',
      answer: `Im mittelalterlichen Weltbild war das Zentrum nicht der Ehrenplatz, sondern der unterste Ort – bei Dante liegt dort die Hölle. Die Geschichte von der „Entthronung" ist ein modernes Klischee (Danielson 2001). Und „nicht im Zentrum" heißt nicht „nicht besonders": Ein Diamant ist nicht wertlos, weil er nicht in der Mitte des Tresors liegt.`,
      sources: [{ kind: 'fachliteratur', author: 'Dennis R. Danielson', work: '„The Great Copernican Cliché", American Journal of Physics 69', year: '2001', quote: `Die Vorstellung, die Mittelstellung der Erde habe im vorkopernikanischen Denken Würde bedeutet, ist historisch falsch.`, status: 'paraphrase' }],
      followUps: [
        {
          id: 'planet-unter-milliarden',
          objection: `Egal was das Mittelalter dachte: Empirisch ist die Erde ein Planet unter Milliarden.`,
          objectionBy: 'Neil deGrasse Tyson',
          answer: `Die Zahl der Planeten sagt nichts darüber, wie viele *alle* Bedingungen für komplexes Leben erfüllen. Es gibt Milliarden Lose, aber das heißt nicht, dass viele den Hauptgewinn haben. Ward und Brownlee, keine Theisten, halten komplexes Leben für extrem selten.`,
          followUps: [
            {
              id: 'kepler-22-prozent',
              objection: `Die Kepler-Daten zeigen: Vielleicht jeder fünfte sonnenähnliche Stern hat einen erdgroßen Planeten in der habitablen Zone.`,
              objectionBy: 'Exoplanetenforschung (Petigura u. a. 2013)',
              answer: `„Habitable Zone" bedeutet nur, dass flüssiges Wasser theoretisch möglich wäre. Venus und Mars liegen am Rand der habitablen Zone unserer Sonne – und sind lebensfeindlich. Dazu kommen Plattentektonik, Magnetfeld, Wassermenge, Atmosphäre, Sternaktivität und galaktische Lage. Die Schätzungen streuen stark, und „erdgroß" ist nicht „erdähnlich".`,
              followUps: [
                {
                  id: 'rare-earth-lueckenargument',
                  objection: `Das ist ein Lückenargument: Sobald wir irgendwo Leben finden, ist eure These erledigt.`,
                  objectionBy: 'Gesprächspartner',
                  answer: `Mein Glaube hängt nicht an der Einzigartigkeit der Erde. Wenn wir anderswo Leben finden, zeigt das, dass Gott großzügig geschaffen hat. Mein Argument lautet nicht „Wir sind allein, also Gott", sondern: Wo immer Leben existiert, braucht es eine seltene, fein abgestimmte Kombination von Bedingungen – und das passt zu einem Schöpfer.`,
                  detail: `Siehe den Claim „Außerirdisches Leben würde die Bibel widerlegen".`,
                  followUps: [
                    {
                      id: 'mit-allem-vereinbar-astro',
                      objection: `Siehst du? Sind wir allein, ist das Design. Gibt es Leben überall, ist Gott eben großzügig. Euer Glaube ist mit jedem Befund vereinbar – und damit sagt er über die Welt nichts.`,
                      objectionBy: 'Neil deGrasse Tyson',
                      answer: `Du musst zwei Ebenen unterscheiden. Der christliche Glaube ist keine Hypothese über die Zahl bewohnter Planeten – er gründet auf Gottes Offenbarung in Christus und kann an der Auferstehung historisch geprüft werden. Einzelne Argumente dagegen sind sehr wohl riskant: Die These von Gonzalez und Richards sagt eine Korrelation von Bewohnbarkeit und Messbarkeit voraus, die an Daten scheitern könnte. Und übrigens: Auch der Naturalismus ist mit beiden Befunden vereinbar – Leben selten oder häufig. Dann taugt die Frage für keine Seite als Entscheidung.`,
                      detail: `Ein häufiger Fehler in Gesprächen ist, den Glauben insgesamt an eine einzelne empirische Frage zu binden („Wenn es Außerirdische gibt, ist die Bibel falsch") – das tun manche Christen, und es ist unklug. Besser: Den Glauben an seinem Fundament verteidigen und einzelne Argumente als das behandeln, was sie sind – mehr oder weniger starke Indizien, deren Gewicht von den Daten abhängt.`,
                      questionsBack: [`Welcher Befund über außerirdisches Leben würde den Naturalismus widerlegen? Wenn keiner – warum verlangst du das dann vom Christentum?`],
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
      id: 'ward-brownlee-keine-kreationisten',
      objection: `Ward und Brownlee sind keine Kreationisten. „Rare Earth" handelt von komplexem Leben, nicht von Design. Du missbrauchst sie.`,
      objectionBy: 'Gesprächspartner',
      answer: `Richtig – ich zitiere sie nicht als Verbündete beim Design-Schluss, sondern als Zeugen für die Fakten. Gerade weil sie keine Theisten sind, hat ihr Befund Gewicht. Die Deutung, dass eine seltene Kombination von Bedingungen auf Absicht hinweist, ist mein Schluss, nicht ihrer.`,
      followUps: [
        {
          id: 'jupiter-schild-widerlegt',
          objection: `Und der „Jupiter-Schutzschild" ist widerlegt – Simulationen zeigen, dass Jupiter in manchen Szenarien sogar mehr Einschläge verursacht.`,
          objectionBy: 'Planetenforschung (Horner & Jones 2008)',
          answer: `Das ist ein fairer Punkt; das Bild ist gemischt, und ich verzichte gern auf dieses Argument. Ebenso wurde die Mond-Stabilisierung durch neuere Simulationen relativiert. Die Gesamtthese hängt nicht an einem einzelnen Faktor, sondern an der Kombination vieler.`,
          followUps: [
            {
              id: 'faktoren-geraten',
              objection: `Die ganze „Rare Earth"-Rechnung ist Zahlenmystik: Man multipliziert Dutzende geschätzte Wahrscheinlichkeiten und bekommt eine winzige Zahl heraus. Mit anderen Schätzungen kommt man auf Millionen bewohnter Welten. Das ist keine Wissenschaft, das ist Wahl der Eingangswerte.`,
              objectionBy: 'Sean Carroll',
              answer: `Das gestehe ich zu: Viele Faktoren sind unsicher, und deshalb nenne ich keine Zahl. Aber dasselbe gilt für die Drake-Gleichung in die andere Richtung – die optimistischen Schätzungen sind genauso geraten. Mein Punkt ist bescheidener und robuster: Je mehr wir über Planeten lernen, desto mehr Bedingungen für langfristig stabiles, komplexes Leben entdecken wir. Die Liste wird länger, nicht kürzer. Und das stärkere Argument ist ohnehin nicht die Seltenheit, sondern die Korrelation von Bewohnbarkeit und Erforschbarkeit.`,
              detail: `Ehrlich: Die Astrobiologie kennt bislang genau einen bewohnten Planeten. Ob komplexes Leben selten oder häufig ist, ist offen, und Christen sollten hier keine Gewissheit vortäuschen. Was sich aber sagen lässt: Die frühe Erwartung, erdähnliche Welten seien überall, ist durch die Exoplanetenforschung differenzierter geworden – die meisten gefundenen Systeme sehen ganz anders aus als unseres (heiße Jupiter, eng gepackte Systeme um Rote Zwerge, exzentrische Bahnen).`,
              questionsBack: [`Sind die optimistischen Eingangswerte der Drake-Gleichung besser begründet als die pessimistischen?`],
              followUps: [
                {
                  id: 'rote-zwerge-trappist',
                  objection: `Rote Zwerge machen rund drei Viertel aller Sterne aus, und viele haben erdgroße Planeten in der habitablen Zone – Proxima Centauri b, die sieben Planeten von TRAPPIST-1. Da gibt es Milliarden Kandidaten allein in unserer Galaxie.`,
                  objectionBy: 'Exoplanetenforschung (populäre Darstellung)',
                  answer: `Das sind spannende Kandidaten – aber sie haben bekannte Probleme. Die habitable Zone liegt bei Roten Zwergen so nah am Stern, dass die Planeten meist gebunden rotieren: eine Seite ewiger Tag, die andere ewige Nacht. Vor allem sind junge Rote Zwerge sehr aktiv; heftige Strahlungsausbrüche können Atmosphären abtragen. Das James-Webb-Teleskop hat bei TRAPPIST-1 b und c keine dichten Atmosphären gefunden. Ob die äußeren Planeten eine haben, ist offen – ich warte gespannt auf die Daten.`,
                  detail: `Messungen der Wärmeabstrahlung mit dem JWST (2023) sprechen dafür, dass TRAPPIST-1 b keine nennenswerte Atmosphäre besitzt und TRAPPIST-1 c keine dichte, kohlendioxidreiche. Das widerlegt nicht die Möglichkeit von Leben um Rote Zwerge, zeigt aber: „In der habitablen Zone" heißt noch lange nicht „bewohnbar". Für das Gespräch gilt: Bleib bei den aktuellen Daten, behaupte keine Gewissheit, und lass offen, was offen ist.`,
                  sources: [
                    { kind: 'wissenschaft', author: 'Thomas P. Greene u. a.', work: '„Thermal emission from the Earth-sized exoplanet TRAPPIST-1 b using JWST", Nature 618', year: '2023', quote: `Die gemessene Tagseitentemperatur passt zu einem Planeten ohne nennenswerte Atmosphäre.`, status: 'paraphrase' },
                    { kind: 'wissenschaft', author: 'Sebastian Zieba u. a.', work: '„No thick carbon dioxide atmosphere on the rocky exoplanet TRAPPIST-1 c", Nature 620', year: '2023', quote: `Eine dichte, kohlendioxidreiche Atmosphäre ist für TRAPPIST-1 c ausgeschlossen.`, status: 'paraphrase' },
                  ],
                  questionsBack: [`Was zeigen die JWST-Messungen bisher über die Atmosphären der TRAPPIST-1-Planeten?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'privileged-planet-propaganda',
      objection: `„The Privileged Planet" ist Propaganda des Discovery Institute für Intelligent Design.`,
      objectionBy: 'Kritiker',
      answer: `Wer ein Argument nach seiner Herkunft beurteilt statt nach seinem Inhalt, begeht einen genetischen Fehlschluss. Die These von Gonzalez und Richards ist prüfbar: Wenn man bewohnbare Orte fände, die deutlich schlechtere Beobachtungsbedingungen haben, oder unbewohnbare Orte mit deutlich besseren, wäre sie geschwächt.`,
      followUps: [
        {
          id: 'finsternis-zufall',
          objection: `Dass Mond und Sonne gleich groß erscheinen, ist reiner Zufall – und nur vorübergehend, weil sich der Mond entfernt.`,
          objectionBy: 'Astronom',
          answer: `Richtig, der Mond entfernt sich jedes Jahr um einige Zentimeter. Aber gerade deshalb ist bemerkenswert, dass die Epoche perfekter Sonnenfinsternisse mit der Epoche zusammenfällt, in der es Beobachter gibt. Lawrence Krauss hat zudem selbst gezeigt, dass wir in einer privilegierten kosmischen Epoche leben: In ferner Zukunft könnten Beobachter den Urknall gar nicht mehr nachweisen (Krauss & Scherrer 2007).`,
          sources: [{ kind: 'wissenschaft', author: 'Lawrence M. Krauss & Robert J. Scherrer', work: '„The Return of a Static Universe and the End of Cosmology", General Relativity and Gravitation 39', year: '2007', quote: `In ferner Zukunft werden Beobachter wegen der beschleunigten Expansion keine Belege mehr für den Urknall finden können; wir leben in einer besonderen Epoche.`, status: 'paraphrase', note: 'Krauss ist Atheist; sein Befund stützt dennoch die These einer privilegierten Beobachtungsepoche.' }],
          followUps: [
            {
              id: 'texas-scharfschuetze',
              objection: `Das ist der Trugschluss des texanischen Scharfschützen: Erst schießen, dann die Zielscheibe um die Einschüsse malen. Bewohner jedes Planeten fänden irgendwelche „besonderen" Zufälle, wenn sie lange genug suchen.`,
              objectionBy: 'Victor Stenger',
              answer: `Der Einwand träfe, wenn man sich einzelne Kuriositäten nachträglich herauspickt. Die These ist aber vorher als allgemeine Regel formuliert: Bewohnbarkeit und Messbarkeit fallen zusammen. Und sie wird an vielen unabhängigen Feldern geprüft – Durchsichtigkeit der Atmosphäre gerade im Bereich des Sonnenlichts, Lage in der Galaxie zwischen den Spiralarmen mit freiem Blick, Stabilität der Sonne, Sonnenfinsternisse, geologische Archive des Klimas. Ein Scharfschütze, der seine Zielscheibe vorher an die Wand hängt und dann in vielen Disziplinen trifft, ist kein Glückspilz.`,
              detail: `Gonzalez und Richards nennen in *The Privileged Planet* ausdrücklich Befunde, die ihre These schwächen würden: bewohnbare Orte mit deutlich schlechteren Beobachtungsbedingungen oder unbewohnbare mit deutlich besseren. Das ist die Form einer prüfbaren Hypothese. Manche ihrer Einzelbeispiele sind diskutabel (etwa wie viel die Finsternisse wirklich zur Wissenschaftsgeschichte beitrugen); entscheidend ist die Konvergenz über viele Bereiche.`,
              voices: [
                { person: 'jay-richards', role: 'als Philosoph und Mitautor von „The Privileged Planet"', text: `Richards betont, dass die Korrelation nicht aus einem Auswahleffekt folgt: Damit es Beobachter gibt, muss ihr Ort bewohnbar sein – aber er muss nicht zugleich optimale Bedingungen für Kosmologie, Geologie und Astronomie bieten. Perfekte Sonnenfinsternisse etwa sind für das Leben nicht nötig, für die Wissenschaft aber außerordentlich wertvoll gewesen.` },
              ],
              questionsBack: [`Welche der genannten Beobachtungsbedingungen ist für das Leben selbst notwendig – zum Beispiel perfekte Sonnenfinsternisse?`],
            },
          ],
        },
      ],
    },
    {
      id: 'mittelmaessigkeitsprinzip',
      objection: `Das Mittelmäßigkeitsprinzip ist ein bewährtes statistisches Werkzeug: Solange du keine gegenteiligen Informationen hast, solltest du annehmen, dass du ein typischer Beobachter an einem typischen Ort bist. Mit dieser Annahme hat die Kosmologie große Erfolge gefeiert – vom Kopernikanischen Prinzip bis zur Homogenität des Kosmos.`,
      objectionBy: 'Sean Carroll / Alexander Vilenkin',
      answer: `Als Ausgangsannahme ist das vernünftig – aber eben nur „solange keine gegenteiligen Informationen vorliegen". Die haben wir inzwischen. Die Sonne ist massereicher als die große Mehrheit der Sterne (etwa drei Viertel sind Rote Zwerge), ungewöhnlich reich an schweren Elementen und auffallend ruhig: Eine Untersuchung von 2020 fand, dass ihre Helligkeit weniger schwankt als bei den meisten vergleichbaren Sternen. Sie umkreist das Zentrum der Milchstraße auf einer fast kreisförmigen Bahn in einer ruhigen Zone. Das Prinzip ist ein Startpunkt, kein Ergebnis.`,
      detail: `Das Kopernikanische Prinzip im großen Maßstab – kein Ort im Universum ist ausgezeichnet, der Kosmos ist im Großen homogen – ist gut bestätigt und für die Kosmologie unverzichtbar. Das ist aber etwas anderes als die These, die Erde sei als Lebensort durchschnittlich. Gegen Letztere sprechen die Eigenschaften unserer Umgebung. Ehrlich bleibt: Ob die Sonne über sehr lange Zeiträume immer so ruhig ist, wird diskutiert; vielleicht durchläuft sie auch aktivere Phasen.`,
      sources: [{ kind: 'wissenschaft', author: 'Timo Reinhold u. a.', work: '„The Sun is less active than other solar-like stars", Science 368', year: '2020', quote: `Die Helligkeitsschwankungen der Sonne seien deutlich geringer als bei den meisten Sternen mit ähnlicher Temperatur und Rotationsperiode.`, status: 'paraphrase', note: 'Die Autoren lassen offen, ob die Sonne nur gerade eine ruhige Phase durchläuft.' }],
      questionsBack: [`Gilt das Mittelmäßigkeitsprinzip auch dann noch, wenn wir messen können, dass unser Stern untypisch ist?`],
      followUps: [
        {
          id: 'typische-beobachter-auswahleffekt',
          objection: `Du verwechselst typische Sterne mit typischen Beobachtern. Natürlich sitzen Beobachter an ungewöhnlichen Orten – nur dort können sie entstehen. Das ist ein Auswahleffekt, keine Bedeutung.`,
          objectionBy: 'Sean Carroll',
          answer: `Richtig, und das gestehe ich gern zu: Dass wir an einem bewohnbaren Ort leben, erklärt der Auswahleffekt vollständig. Aber er erklärt zwei Dinge nicht. Erstens, warum es solche Orte überhaupt gibt – das führt zur Feinabstimmung der Naturgesetze. Zweitens, warum der bewohnbare Ort zugleich ein so guter Beobachtungsposten ist. Damit es Beobachter gibt, muss der Ort Leben erlauben – er muss nicht auch noch ideale Bedingungen für Astronomie und Kosmologie bieten.`,
          detail: `Hier liegt der Kern der These von Gonzalez und Richards: Ein reiner Auswahleffekt sagt Bewohnbarkeit voraus, aber nicht Messbarkeit. Wenn beides zusammenfällt, ist das unter der Hypothese eines Schöpfers, der erkennende Geschöpfe will, erwartbarer als unter der Annahme, dass die Bedingungen für Leben und für Wissenschaft voneinander unabhängig sind.`,
          questionsBack: [`Erklärt der Auswahleffekt, warum wir Sonnenfinsternisse beobachten können, mit denen Einsteins Theorie bestätigt wurde?`],
          followUps: [
            {
              id: 'messbarkeit-auch-auswahl',
              objection: `Auch die Messbarkeit ist ein Auswahleffekt: Wissenschaftliche Zivilisationen entstehen nur dort, wo man den Himmel gut sieht. Wo die Atmosphäre undurchsichtig ist, entsteht keine Astronomie – also fragt dort auch niemand.`,
              objectionBy: 'Sean Carroll',
              answer: `Das reicht nicht. Ein Auswahleffekt erklärt nur, was nötig ist, damit es *uns* gibt. Für fragende Wesen ist ein durchsichtiger Himmel vielleicht hilfreich – aber perfekte Sonnenfinsternisse, eine Galaxienlage mit freiem Blick auf das ferne Universum, die Hintergrundstrahlung oder Gesteinsarchive, die Milliarden Jahre Erdgeschichte speichern, sind dafür nicht notwendig. Eine Zivilisation könnte entstehen, ohne je den Urknall entdecken zu können. Dass wir es können, ist ein Geschenk, das kein Auswahleffekt verlangt.`,
              detail: `Man kann es so testen: Für jede Beobachtungsbedingung fragen, ob sie für die Existenz intelligenter Wesen *notwendig* ist. Wo das nicht der Fall ist, kann der Auswahleffekt die Korrelation nicht erklären. Gerade die besten „Fenster" zur Geschichte des Universums sind für das Überleben einer Zivilisation weitgehend überflüssig.`,
              questionsBack: [`Brauchen intelligente Wesen perfekte Sonnenfinsternisse, um zu entstehen – oder nur, um Einstein zu bestätigen?`],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wie viele bekannte Exoplaneten erfüllen *alle* Bedingungen für komplexes Leben – nicht nur die Lage in der habitablen Zone?`,
    `Warum liegen Venus und Mars am Rand der habitablen Zone und sind trotzdem lebensfeindlich?`,
    `Welche Quelle belegt, dass das Zentrum im mittelalterlichen Weltbild ein Ehrenplatz war?`,
    `Ist es Zufall, dass die besten Orte für Leben auch die besten Orte für Wissenschaft sind?`,
  ],
  avoid: [
    `„Die Bibel lehrt, dass die Erde im Zentrum des Universums steht." – Das tut sie nicht; damit lieferst du ein Eigentor.`,
    `Veraltete oder überzogene Wahrscheinlichkeitszahlen („1 zu 10^100 für einen Planeten wie die Erde") ohne Quelle.`,
    `Hiob 26,7 oder Jes 40,22 als „wissenschaftliche Wunder" ausgeben.`,
  ],
  concessions: [
    `Planeten sind häufig, und erdgroße Planeten in habitablen Zonen sind nicht selten.`,
    `Einige „Rare-Earth"-Faktoren sind umstritten oder relativiert (Jupiter-Schutzschild, Mond-Stabilisierung).`,
    `Ob es anderswo Leben gibt, wissen wir nicht – die Frage ist offen.`,
  ],
  furtherReading: [
    { kind: 'wissenschaft', author: 'Peter D. Ward & Donald Brownlee', work: 'Rare Earth', year: '2000', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Guillermo Gonzalez & Jay W. Richards', work: 'The Privileged Planet', year: '2004', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Dennis R. Danielson', work: '„The Great Copernican Cliché", American Journal of Physics 69', year: '2001', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Hugh Ross', work: 'Improbable Planet', year: '2016', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Kopernikanisches Prinzip', 'Rare Earth', 'habitable Zone', 'Privileged Planet', 'Exoplaneten'],
  related: [
    'astrobiologie/ausserirdische-widerlegen-bibel',
    'astrobiologie/mensch-unbedeutend',
    'feinabstimmung/universum-lebensfeindlich',
    'kirchengeschichte-mythen/galilei',
    'kirchengeschichte-mythen/finsteres-mittelalter-flache-erde',
  ],
};

export default claim;
