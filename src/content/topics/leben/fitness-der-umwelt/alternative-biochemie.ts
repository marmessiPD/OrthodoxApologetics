import type { Claim, Source } from '../../../schema.ts';

const sagan1973: Source = {
  kind: 'gegner',
  author: 'Carl Sagan',
  work: 'The Cosmic Connection: An Extraterrestrial Perspective',
  year: '1973',
  quote: `Sagan warnt vor „Kohlenstoff-Chauvinismus": Wir sollten nicht voraussetzen, dass Leben anderswo auf derselben Chemie beruhen muss wie auf der Erde.`,
  status: 'paraphrase',
};

const bains2004: Source = {
  kind: 'wissenschaft',
  author: 'William Bains',
  work: '„Many Chemistries Could Be Used to Build Living Systems", Astrobiology 4 (2), S. 137–167',
  year: '2004',
  quote: `Bains argumentiert, dass in nichtwässrigen, sehr kalten Lösungsmitteln (z. B. flüssigem Stickstoff) auch siliziumhaltige Moleküle stabil genug für eine Biochemie sein könnten; Wasser sei nicht das einzig denkbare Lösungsmittel.`,
  status: 'paraphrase',
};

const petkowski2020: Source = {
  kind: 'wissenschaft',
  author: 'Janusz Jurand Petkowski, William Bains, Sara Seager',
  work: '„On the Potential of Silicon as a Building Block for Life", Life 10 (6), 84',
  year: '2020',
  quote: `Die Autoren – darunter Bains selbst – kommen nach einer breiten Durchsicht der Siliziumchemie zu dem Schluss, dass Silizium als Hauptgerüst einer Biochemie stark eingeschränkt ist; allenfalls in sehr speziellen Umgebungen ohne Wasser käme es in Frage.`,
  status: 'paraphrase',
  note: 'Bemerkenswert: Einer der prominentesten Befürworter alternativer Biochemien schätzt Silizium nach genauerer Prüfung zurückhaltend ein.',
};

const kan2016: Source = {
  kind: 'wissenschaft',
  author: 'S. B. Jennifer Kan, Russell D. Lewis, Kai Chen, Frances H. Arnold',
  work: '„Directed evolution of cytochrome c for carbon–silicon bond formation: Bringing silicon to life", Science 354, S. 1048–1051',
  year: '2016',
  quote: `Durch gerichtete Evolution im Labor wurde ein bakterielles Enzym so verändert, dass es Kohlenstoff-Silizium-Bindungen knüpft – eine Reaktion, die in der Natur nicht bekannt ist.`,
  status: 'paraphrase',
};

const nrc2007: Source = {
  kind: 'wissenschaft',
  author: 'National Research Council (USA)',
  work: 'The Limits of Organic Life in Planetary Systems',
  year: '2007',
  quote: `Der Bericht hält alternative Lösungsmittel und Biochemien für nicht ausgeschlossen und empfiehlt, bei der Suche nach Leben offen zu bleiben; zugleich beschreibt er die besonderen Vorzüge von Wasser und Kohlenstoff.`,
  status: 'paraphrase',
};

const stevenson2015: Source = {
  kind: 'wissenschaft',
  author: 'James Stevenson, Jonathan Lunine, Paulette Clancy',
  work: '„Membrane alternatives in worlds without oxygen: Creation of an azotosome", Science Advances 1, e1400067',
  year: '2015',
  quote: `Simulationen schlugen eine membranartige Struktur aus Acrylnitril („Azotosom") vor, die in flüssigem Methan auf Titan stabil sein könnte.`,
  status: 'paraphrase',
};

const sandstroem2020: Source = {
  kind: 'wissenschaft',
  author: 'Hilda Sandström, Martin Rahm',
  work: '„Can polarity-inverted membranes self-assemble on Titan?", Science Advances 6, eaax0272',
  year: '2020',
  quote: `Quantenchemische Rechnungen legen nahe, dass sich Azotosomen unter Titan-Bedingungen nicht spontan bilden würden; Acrylnitril kristallisiert eher in seine Molekülkristall-Form.`,
  status: 'paraphrase',
};

const reaves2012: Source = {
  kind: 'wissenschaft',
  author: 'Marshall Louis Reaves u. a.; Tobias J. Erb u. a.',
  work: '„Absence of Detectable Arsenate in DNA from Arsenate-Grown GFAJ-1 Cells", Science 337, S. 470–473; „GFAJ-1 Is an Arsenate-Resistant, Phosphate-Dependent Organism", Science 337, S. 467–470',
  year: '2012',
  quote: `Zwei unabhängige Gruppen zeigten, dass das 2010 als „Arsen-Leben" vorgestellte Bakterium GFAJ-1 kein Arsen in seine DNA einbaut und weiterhin Phosphat benötigt.`,
  status: 'paraphrase',
};

const claim: Claim = {
  id: 'alternative-biochemie',
  title: `„Leben könnte genauso gut auf Silizium oder Ammoniak beruhen."`,
  proponents: [
    { name: 'Carl Sagan', role: 'Astronom (1934–1996)', work: 'The Cosmic Connection (1973) – „Kohlenstoff-Chauvinismus"' },
    { name: 'William Bains', role: 'Biochemiker und Astrobiologe, MIT/Cardiff', work: '„Many Chemistries Could Be Used to Build Living Systems", Astrobiology (2004)' },
    { name: 'Peter D. Ward', role: 'Paläontologe und Astrobiologe, University of Washington', work: 'Life as We Do Not Know It (2005)' },
    { name: 'Lee Cronin', role: 'Chemiker, University of Glasgow', work: 'Anorganische Protozellen („iCHELLs"); Assembly Theory' },
    { name: 'Paul Davies', role: 'Physiker und Astrobiologe, Arizona State University', work: 'The Eerie Silence (2010); „Schattenbiosphäre"' },
  ],
  steelman: `Wir kennen genau eine Biochemie – die der Erde – und alle irdischen Lebewesen stammen von einem gemeinsamen Vorfahren ab. Daraus auf die Einzigartigkeit von Kohlenstoff und Wasser zu schließen, ist, als würde man aus einem einzigen Buch schließen, dass nur eine Sprache möglich ist. Silizium steht im Periodensystem direkt unter Kohlenstoff und bildet ebenfalls vier Bindungen; Frances Arnolds Labor hat 2016 Enzyme dazu gebracht, Kohlenstoff-Silizium-Bindungen zu knüpfen. Ammoniak ist wie Wasser ein polares, wasserstoffbrückenbildendes Lösungsmittel, und auf dem Saturnmond Titan gibt es Seen aus flüssigem Methan, für die Forscher bereits Membranmodelle simuliert haben. Synthetische Biologen bauen alternative Erbmoleküle (XNA) und genetische Alphabete mit acht Buchstaben. Die US-Akademie der Wissenschaften hat „seltsames Leben" ausdrücklich für möglich gehalten. Kurz: Die angebliche Feinabstimmung der Chemie ist ein Mangel an Phantasie.`,
  biblical: {
    summary: `Die Bibel lehrt nicht, dass Leben nur auf Kohlenstoff beruhen könne; sie sagt, dass alles Leben von Gott kommt (Ps 36,10; Apg 17,25) und dass er alles „geordnet mit Maß, Zahl und Gewicht" hat (Weish 11,20). Ob es anderswo Leben gibt und worauf es beruhen könnte, ist eine naturwissenschaftliche Frage. Für Christen ist die Antwort in keiner Richtung bedrohlich: Gott ist der Schöpfer „des Sichtbaren und Unsichtbaren" (Glaubensbekenntnis).`,
    detail: `Gen 2,7 beschreibt den Menschen als aus „Erdenstaub" gebildet – eine Aussage über unsere Verwandtschaft mit der Materie der Erde, keine Chemievorlesung. Interessant ist dennoch: Die Bibel betont die Kontinuität zwischen dem Menschen und dem Stoff der Erde – genau das bestätigt die Chemie, die zeigt, dass wir aus den häufigen leichten Elementen bestehen, die Sterne erbrüten.`,
    sources: [
      { kind: 'bibel', work: 'Psalmen', ref: '36,10', quote: `Denn bei dir ist die lebendige Quelle, und in deinem Lichte sehen wir das Licht.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '17,25', quote: `… so er selber jedermann Leben und Odem allenthalben gibt.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Mose', ref: '2,7', quote: `Und Gott der HERR machte den Menschen aus einem Erdenkloß, und er blies ihm ein den lebendigen Odem in seine Nase. Und also ward der Mensch eine lebendige Seele.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptische Kirche hat zu Fragen der Astrobiologie kein Dogma. Sie bekennt Gott als Schöpfer „aller Dinge, sichtbarer und unsichtbarer". Die Väter lehrten, dass jedes Element seine Natur von Gott empfangen hat: Basilius spricht im *Hexaemeron* davon, dass Gottes Wort jedem Geschöpf seine Eigenart und sein Gesetz gegeben hat. Wenn die Chemie zeigt, dass manche Elemente sich für Leben eignen und andere nicht, entdeckt sie diese gottgegebenen Naturen.`,
    sources: [
      { kind: 'konzil', work: 'Glaubensbekenntnis von Nizäa-Konstantinopel', year: '325/381', quote: `Wir glauben an den einen Gott, den Vater, den Allmächtigen, den Schöpfer des Himmels und der Erde, aller sichtbaren und unsichtbaren Dinge.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Basilius der Große', work: 'Hexaemeron', ref: 'Homilie 5,1; 9,2', quote: `Gottes Befehl gab jedem Geschöpf seine eigene Natur und das Gesetz, nach dem es wirkt.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Die Astrobiologie hält alternative Biochemien für nicht ausgeschlossen (NRC 2007) und sucht bewusst offen. Die chemischen Befunde sind aber eindeutig: Silizium bildet schwächere Si–Si-Bindungen (rund 220 kJ/mol gegenüber rund 350 kJ/mol bei C–C), aber sehr starke Si–O-Bindungen (rund 450 kJ/mol); in Gegenwart von Sauerstoff oder Wasser endet Siliziumchemie daher in Silikaten und Quarz – das Oxidationsprodukt SiO₂ ist ein Feststoff, während CO₂ ein Gas ist, das sich in Wasser löst. Silane entzünden sich an Luft und werden von Wasser zersetzt; stabile Si=Si-Doppelbindungen sind selten. Selbst Bains, ein Pionier alternativer Biochemien, schätzt Silizium nach breiter Prüfung als stark eingeschränkt ein (Petkowski, Bains & Seager 2020). Ammoniak ist bei Normaldruck nur zwischen etwa −78 °C und −33 °C flüssig, hat geringere Verdampfungswärme und Wärmekapazität, und festes Ammoniak sinkt. Für Methan-Membranen auf Titan (Azotosomen) zeigen neuere Rechnungen, dass sie sich wohl nicht bilden.`,
    detail: `- **Was ehrlich offenbleibt:** Wir kennen nur eine Biochemie; exotische Chemie unter extremen Bedingungen ist nicht prinzipiell ausgeschlossen.
- **Was klar ist:** Für ein Leben, das in einem breiten Temperaturbereich, mit reichlich Energie und großer molekularer Vielfalt funktioniert, ist keine Alternative zu Kohlenstoff in Wasser bekannt, die auch nur annähernd vergleichbar wäre.
- **Laborerfolge** (Kohlenstoff-Silizium-Enzyme, XNA, Hachimoji-DNA) zeigen, was Chemiker im Rahmen der Kohlenstoff-Wasser-Chemie gezielt konstruieren können – nicht, dass ungelenkt eine andere Biochemie entstehen kann.
- **Mahnendes Beispiel:** Das 2010 angekündigte „Arsen-Leben" (GFAJ-1) hielt der Überprüfung nicht stand (Science 2012).`,
    sources: [nrc2007, bains2004, petkowski2020, sandstroem2020, reaves2012],
  },
  quickAnswer: `„Genauso gut" ist chemisch nicht haltbar. Silizium verbindet sich so stark mit Sauerstoff, dass es in Wasser und Luft zu Gestein wird – sein „Ausatemprodukt" wäre Quarz, kein Gas wie CO₂. Seine Ketten sind schwach, seine Wasserstoffverbindungen entzünden sich an der Luft. Selbst führende Befürworter alternativer Biochemien halten Silizium heute für sehr eingeschränkt. Ammoniak ist nur in einem schmalen, eiskalten Bereich flüssig, und sein Eis sinkt. Die Erdkruste enthält mehr als tausendmal mehr Silizium als Kohlenstoff – und doch baut das Leben auf Kohlenstoff. Möglich ist vieles; gleich gut ist nichts.`,
  keyPoints: [
    `**Silizium wird zu Stein:** Die Si–O-Bindung ist so stark, dass Siliziumchemie in Gegenwart von Sauerstoff und Wasser in Silikaten endet; SiO₂ ist fest, CO₂ ist ein lösliches Gas.`,
    `**Schwache Ketten, wenig Vielfalt:** Si–Si-Bindungen sind deutlich schwächer als C–C-Bindungen; Silane sind reaktiv und zerfallen in Wasser; stabile Doppelbindungen sind selten.`,
    `**Ammoniak und Methan sind schwächere Lösungsmittel:** schmaler, kalter Flüssigkeitsbereich, weniger Wärmepufferung, festes Ammoniak sinkt; bei rund −180 °C laufen Reaktionen extrem langsam.`,
    `**Selbst Befürworter sind vorsichtig geworden:** Petkowski, Bains und Seager (2020) halten Silizium als Lebensgerüst für stark eingeschränkt; Azotosomen auf Titan bilden sich nach neuen Rechnungen wohl nicht.`,
    `**Laborerfolge sind Design-Erfolge:** Arnolds Silizium-Enzyme, XNA und Hachimoji-DNA wurden gezielt konstruiert – in Kohlenstoff-Wasser-Chemie.`,
    `**Selbst wenn:** Gäbe es alternative Biochemien, wären die Naturgesetze immer noch feinabgestimmt für Chemie überhaupt. Theismus hängt nicht an der Einzigartigkeit des Kohlenstoffs.`,
  ],
  argument: {
    name: 'Die chemische Sonderstellung von Kohlenstoff und Wasser',
    summary: 'Ein Vergleichsargument auf Grundlage bekannter Bindungsenergien und Stoffeigenschaften.',
    premises: [
      {
        text: `P1: Eine Biochemie braucht ein Gerüstelement, das stabile, vielfältige und zugleich gezielt umbaubare Moleküle bildet, und ein Lösungsmittel, das diese Chemie über einen breiten Temperaturbereich trägt.`,
        support: `Allgemeine Anforderung an jedes informations- und stoffwechseltragende System (vgl. NRC 2007; Benner 2004).`,
        sources: [nrc2007],
      },
      {
        text: `P2: Silizium erfüllt die Gerüstanforderung in Gegenwart von Sauerstoff oder Wasser nicht; Ammoniak und Methan sind als Lösungsmittel in wichtigen Punkten unterlegen.`,
        support: `Bindungsenergien, Reaktivität der Silane, Oxidation zu festem SiO₂; schmaler Flüssigkeitsbereich und geringere Verdampfungswärme von Ammoniak; unpolares Methan; Petkowski u. a. (2020); Sandström & Rahm (2020).`,
        sources: [petkowski2020, sandstroem2020],
      },
      {
        text: `P3: Kohlenstoff in Wasser erfüllt alle Anforderungen zugleich, und zwar auf einem Planeten, auf dem Silizium viel häufiger ist.`,
        support: `Erdkruste: rund 28 % Silizium, Kohlenstoff nur im Promille- bis Zehntelpromillebereich – dennoch beruht alles Leben auf Kohlenstoff.`,
      },
    ],
    conclusion: `Die Behauptung „genauso gut" ist unbelegt. Alternative Biochemien sind allenfalls in engen, extremen Nischen denkbar und deutlich weniger leistungsfähig. Die Sonderstellung von Kohlenstoff und Wasser bleibt ein Befund, der zur Tauglichkeit der Umwelt für Leben gehört.`,
  },
  voices: [
    {
      person: 'marcos-eberlin',
      role: 'als Chemiker',
      text: `Eberlin, international ausgezeichneter Massenspektrometriker, argumentiert in *Foresight* (2019), dass die Chemie des Lebens an vielen Stellen „Voraussicht" verrät: Moleküle und Reaktionen sind so beschaffen, dass sie erst im Zusammenspiel eines fertigen Systems ihren Sinn entfalten. Für die Frage alternativer Biochemien heißt das: Es genügt nicht, dass ein Element vier Bindungen eingehen kann; es braucht ein ganzes Ensemble passender Eigenschaften – Bindungsstärken, Löslichkeit, Reaktionsgeschwindigkeiten, Energiequellen –, das bei Kohlenstoff in Wasser zusammenkommt.`,
      sources: [{ kind: 'fachliteratur', author: 'Marcos Eberlin', work: 'Foresight: How the Chemistry of Life Reveals Planning and Purpose', year: '2019', status: 'paraphrase' }],
    },
    {
      person: 'conway-morris',
      role: 'als Paläontologe und Evolutionsbiologe',
      text: `Conway Morris vertritt in *Life's Solution*, dass die Evolution in einem Raum stark eingeschränkter Möglichkeiten verläuft – bis hinunter zur Chemie. Er ist skeptisch gegenüber exotischen Biochemien: Wenn es anderswo Leben gibt, erwartet er es auf Kohlenstoffbasis in Wasser, mit ähnlichen Lösungen wie auf der Erde. Für ihn ist das kein Zufall, sondern Ausdruck einer tiefen Ordnung der Natur.

*Hinweis:* Conway Morris akzeptiert die Evolutionstheorie; er lehnt eine rein zufallsbasierte Deutung ab.`,
      sources: [{ kind: 'wissenschaft', author: 'Simon Conway Morris', work: 'Life\'s Solution: Inevitable Humans in a Lonely Universe', year: '2003', status: 'paraphrase' }],
    },
    {
      person: 'guillermo-gonzalez',
      role: 'als Astronom und Astrobiologe',
      text: `Gonzalez erinnert daran, dass Bewohnbarkeit eine Vielzahl von Bedingungen voraussetzt: nicht nur die richtige Chemie, sondern auch Energiequellen, stabile Umgebungen über Milliarden Jahre und Kreisläufe, die Stoffe erneuern. In extrem kalten Methan- oder Stickstoffwelten sind Reaktionen um viele Größenordnungen langsamer, und es fehlen reichlich verfügbare Energiequellen. Exotisches Leben ist dort nicht logisch unmöglich, aber physikalisch stark benachteiligt.`,
      sources: [{ kind: 'fachliteratur', author: 'Guillermo Gonzalez, Jay W. Richards', work: 'The Privileged Planet', year: '2004', status: 'paraphrase' }],
    },
    {
      person: 'fazale-rana',
      role: 'als Biochemiker',
      text: `Rana deutet die Erfolge der synthetischen Biologie als zweischneidig für den Naturalismus: Wenn Forscher alternative Erbmoleküle, erweiterte genetische Alphabete oder neue Enzymreaktionen herstellen, geschieht das durch gezielte Planung, sorgfältige Auswahl und Laborevolution. Was diese Experimente empirisch zeigen, ist die Fähigkeit von Intelligenz, den chemischen Möglichkeitsraum zu erkunden – nicht die Fähigkeit ungelenkter Prozesse, eine andere Biochemie hervorzubringen.`,
      sources: [{ kind: 'fachliteratur', author: 'Fazale Rana', work: 'Creating Life in the Lab', year: '2011', status: 'paraphrase' }],
    },
    {
      person: 'basilius',
      role: 'als Ausleger der Schöpfung',
      text: `Basilius lehrt, dass Gottes Schöpfungswort jedem Element und jedem Geschöpf eine bestimmte Natur gegeben hat, nach der es wirkt. Die Natur ist für ihn eine Ordnung von Eigenarten, nicht ein beliebiger Stoff. Wenn die Chemie heute zeigt, dass Kohlenstoff und Silizium trotz ähnlicher Stellung im Periodensystem völlig verschiedene Möglichkeiten haben, entdeckt sie gerade diese verschiedenen Naturen.`,
      sources: [{ kind: 'kirchenvater', author: 'Basilius der Große', work: 'Hexaemeron', ref: 'Homilien 5 und 9', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'kohlenstoff-chauvinismus',
      objection: `Das ist Kohlenstoff-Chauvinismus, wie Carl Sagan sagte. Silizium steht direkt unter Kohlenstoff und bildet auch vier Bindungen. Leben könnte genauso gut darauf beruhen.`,
      objectionBy: 'Carl Sagan',
      targetsPremise: 2,
      answer: `Vier Bindungen allein machen noch keine Biochemie. Silizium-Silizium-Ketten sind deutlich schwächer als Kohlenstoffketten, Silizium-Sauerstoff-Bindungen dagegen extrem stark. Deshalb wird Siliziumchemie in Gegenwart von Sauerstoff oder Wasser zu Gestein – die Erdkruste besteht zu über einem Viertel aus Silikaten. Das Oxidationsprodukt von Kohlenstoff ist das lösliche Gas CO₂; das von Silizium ist Quarz. Ein Siliziumwesen müsste Sand ausatmen.`,
      sources: [sagan1973],
      questionsBack: [`Warum baut das Leben auf der siliziumreichen Erde ausgerechnet auf den seltenen Kohlenstoff?`],
      followUps: [
        {
          id: 'nicht-waessrige-loesungsmittel',
          objection: `In sehr kalten, nichtwässrigen Lösungsmitteln wie flüssigem Stickstoff wären siliziumhaltige Moleküle stabil. William Bains hat das gezeigt.`,
          objectionBy: 'William Bains',
          targetsPremise: 2,
          answer: `Bains hat das 2004 vorgeschlagen, das ist richtig. Bemerkenswert ist, dass er selbst mit Petkowski und Seager 2020 nach breiter Durchsicht der Siliziumchemie zu einem deutlich vorsichtigeren Urteil kam: Silizium als Hauptgerüst sei stark eingeschränkt. Und bei rund −200 °C laufen chemische Reaktionen um viele Größenordnungen langsamer – für einen Stoffwechsel ein gewaltiges Problem.`,
          sources: [bains2004, petkowski2020],
          followUps: [
            {
              id: 'arnold-silizium',
              objection: `Frances Arnolds Labor hat 2016 Enzyme dazu gebracht, Kohlenstoff-Silizium-Bindungen zu knüpfen. „Bringing silicon to life" – so hieß der Titel!`,
              objectionBy: 'Frances Arnold',
              targetsPremise: 2,
              answer: `Eine brillante Arbeit, für die Arnold zu Recht berühmt ist. Aber sieh genau hin: Ein Enzym aus Kohlenstoff, in Wasser, in einer Kohlenstoffzelle, knüpft eine Bindung an ein kohlenstoffhaltiges Molekül. Das zeigt, dass Silizium in die Kohlenstoffchemie eingebaut werden kann – nicht, dass Leben auf Silizium beruhen könnte. Und es geschah durch gerichtete Evolution, also durch gezielte Auswahl im Labor.`,
              sources: [kan2016],
              followUps: [
                {
                  id: 'mangel-phantasie',
                  objection: `Du argumentierst aus mangelnder Phantasie. Wir kennen nur eine Biochemie. Lee Cronin baut schon heute anorganische „Zellen" aus Metalloxid-Clustern.`,
                  objectionBy: 'Lee Cronin',
                  targetsPremise: 3,
                  answer: `Ich argumentiere nicht aus Phantasie, sondern aus Bindungsenergien und Reaktivität – das ist bekannte Physik, nicht Ahnungslosigkeit. Cronins anorganische Bläschen sind kreativ, aber sie sind keine sich selbst vermehrenden, informationstragenden Systeme. Und ich bestreite nicht, dass Exotisches denkbar ist; ich bestreite das „genauso gut".`,
                  sources: [{ kind: 'wissenschaft', author: 'Geoffrey J. T. Cooper u. a. (Gruppe Leroy Cronin)', work: '„Modular Redox-Active Inorganic Chemical Cells: iCHELLs", Angewandte Chemie International Edition 50', year: '2011', status: 'paraphrase' }],
                  followUps: [
                    {
                      id: 'fitness-argument-bricht',
                      objection: `Wenn Leben mit vielen Chemien möglich wäre, bricht euer Feinabstimmungsargument zusammen.`,
                      objectionBy: 'Sean Carroll',
                      targetsPremise: 3,
                      answer: `Es würde die These von der *Einzigartigkeit* des Kohlenstoffs schwächen – das gebe ich zu. Aber jede Chemie braucht stabile Atome, Sterne, die Elemente erbrüten, und Naturgesetze, die komplexe Moleküle überhaupt erlauben. Diese Feinabstimmung bliebe. Und ein Universum, in dem Leben auf vielen Wegen möglich ist, wäre noch lebensfreundlicher – das würde einen Schöpfer eher bestätigen als widerlegen. Mein Glaube hängt nicht am Kohlenstoff.`,
                      questionsBack: [`Kennst du ein Universum mit anderen Naturkonstanten, in dem *irgendeine* Chemie möglich wäre?`],
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
      id: 'ammoniak-methan',
      objection: `Ammoniak ist wie Wasser polar und bildet Wasserstoffbrücken. Und auf Titan gibt es Seen aus flüssigem Methan – Forscher haben dort schon Membranen simuliert.`,
      objectionBy: 'Peter Ward',
      targetsPremise: 2,
      answer: `Ammoniak ist bei Normaldruck nur zwischen etwa −78 °C und −33 °C flüssig – ein schmales, eiskaltes Fenster. Es puffert Wärme schlechter, verdampft leichter, und festes Ammoniak sinkt, sodass Ozeane von unten zufrieren würden. Methan ist unpolar und löst keine Ionen. Und für die Titan-Membranen (Azotosomen) zeigen neuere Rechnungen, dass sie sich unter den dortigen Bedingungen wohl gar nicht bilden.`,
      sources: [stevenson2015, sandstroem2020],
      followUps: [
        {
          id: 'hoher-druck',
          objection: `Unter hohem Druck ist Ammoniak in einem viel größeren Temperaturbereich flüssig. Auf großen Planeten wäre das kein Problem.`,
          objectionBy: 'William Bains',
          targetsPremise: 2,
          answer: `Richtig, Druck erweitert den Flüssigkeitsbereich. Aber er ändert nichts an den schwächeren Wasserstoffbrücken, dem schwächeren hydrophoben Effekt, der geringeren Wärmepufferung und dem sinkenden Eis. Und solche Hochdruck-Ammoniakwelten sind bislang reine Spekulation. Man kann sich Szenarien ausdenken – aber jedes braucht zusätzliche Sonderbedingungen, die Wasser nicht braucht.`,
          followUps: [
            {
              id: 'nrc-weird-life',
              objection: `Die US-Akademie der Wissenschaften hat 2007 erklärt, dass „seltsames Leben" möglich ist. Du widersprichst der Fachwelt.`,
              objectionBy: 'Peter Ward',
              answer: `Der Bericht sagt, dass alternative Biochemien nicht ausgeschlossen sind und dass man offen suchen soll – dem stimme ich zu. Er sagt nicht, dass sie gleichwertig sind oder existieren, und er beschreibt selbst die Vorzüge von Wasser und Kohlenstoff. Offenheit in der Forschung ist kein Beleg. Ich suche gern mit – ein Fund wäre faszinierend.`,
              sources: [nrc2007],
              followUps: [
                {
                  id: 'fund-widerlegt-bibel',
                  objection: `Wenn wir fremdartiges Leben fänden, wäre die Bibel widerlegt – sie kennt nur die Erde.`,
                  objectionBy: 'Neil deGrasse Tyson',
                  answer: `Warum? Die Bibel lehrt, dass Gott Schöpfer „aller sichtbaren und unsichtbaren Dinge" ist – nicht, dass er nur auf der Erde Leben geschaffen hat. Sie schweigt über andere Welten, und Schweigen ist kein Widerspruch. Ein Fund würde unser Staunen über Gottes Schöpfung vergrößern. Die Frage, was er für die Menschwerdung bedeutet, behandelt der Themenblock zur Astrobiologie.`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'arsen-leben',
      objection: `Die NASA hat 2010 Bakterien vorgestellt, die Arsen statt Phosphor in ihre DNA einbauen. Leben ist viel flexibler, als du denkst.`,
      objectionBy: 'Felisa Wolfe-Simon',
      targetsPremise: 3,
      answer: `Diese Behauptung hielt der Überprüfung nicht stand: 2012 zeigten zwei unabhängige Gruppen in Science, dass das Bakterium GFAJ-1 kein Arsen in seine DNA einbaut und weiterhin Phosphat braucht – es ist nur arsentolerant. Das ist eine wichtige Lehre: Spektakuläre Ankündigungen alternativer Biochemie müssen besonders sorgfältig geprüft werden.`,
      sources: [reaves2012],
      followUps: [
        {
          id: 'xna',
          objection: `Philipp Holligers Gruppe hat XNAs gebaut – synthetische Erbmoleküle mit anderem Rückgrat, die Information speichern und evolvieren können. DNA ist also nicht alternativlos.`,
          objectionBy: 'Philipp Holliger',
          targetsPremise: 3,
          answer: `Eine großartige Leistung. Aber auch XNAs sind Kohlenstoffmoleküle in Wasser, und ihre Vervielfältigung gelingt nur mit eigens umgebauten Polymerasen. Das zeigt: Intelligente Chemiker können den Möglichkeitsraum der Kohlenstoffchemie erkunden. Es zeigt nicht, dass eine andere Biochemie ungelenkt entstehen kann.`,
          sources: [{ kind: 'wissenschaft', author: 'Vitor B. Pinheiro u. a.', work: '„Synthetic Genetic Polymers Capable of Heredity and Evolution", Science 336, S. 341–344', year: '2012', status: 'paraphrase' }],
          followUps: [
            {
              id: 'hachimoji',
              objection: `Steven Benners Hachimoji-DNA mit acht statt vier Buchstaben zeigt: Auch der genetische Code ist nicht einzigartig.`,
              objectionBy: 'Steven Benner',
              targetsPremise: 3,
              answer: `Ein weiterer Triumph der Chemie – geplant, synthetisiert und getestet von einem der kreativsten Chemiker unserer Zeit. Er zeigt, dass es innerhalb der Kohlenstoff-Wasser-Chemie mehr Möglichkeiten gibt, als die Natur nutzt. Das stützt eher die Tauglichkeit von Kohlenstoff in Wasser, als dass es sie widerlegt.`,
              sources: [{ kind: 'wissenschaft', author: 'Shuichi Hoshika u. a. (Gruppe Steven Benner)', work: '„Hachimoji DNA and RNA: A genetic system with eight building blocks", Science 363, S. 884–887', year: '2019', status: 'paraphrase' }],
              followUps: [
                {
                  id: 'design-zirkel',
                  objection: `Du deutest jedes Laborexperiment als Beweis für Design. Das ist zirkulär.`,
                  objectionBy: 'Jerry Coyne',
                  answer: `Ich nenne es keinen Beweis, sondern eine Beobachtung: Diese Systeme wurden von Chemikern geplant und gebaut. Das ist schlicht der Befund. Wer behauptet, eine vergleichbare Biochemie könne ohne Planung entstehen, trägt die Beweislast – und die Laborexperimente liefern dafür kein Beispiel, sondern ein Gegenbeispiel.`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'gleiche-chemie-gemeinsame-abstammung',
      objection: `Dass alles irdische Leben dieselbe Biochemie hat, zeigt nur gemeinsame Abstammung – nicht chemische Notwendigkeit. Aus einer Stichprobe kannst du nichts schließen.`,
      objectionBy: 'Peter Ward',
      answer: `Gemeinsame Abstammung erklärt die Einheitlichkeit auf der Erde – einverstanden. Aber mein Argument stützt sich nicht auf die Statistik irdischen Lebens, sondern auf die Chemie selbst: Bindungsenergien, Löslichkeit, Reaktivität, Flüssigkeitsbereiche. Diese Eigenschaften gelten im ganzen Universum. Man muss nicht viele Biosphären kennen, um zu wissen, dass Quarz kein Gas ist.`,
      followUps: [
        {
          id: 'schattenbiosphaere',
          objection: `Vielleicht gibt es auf der Erde eine „Schattenbiosphäre" mit anderer Biochemie, die wir einfach übersehen.`,
          objectionBy: 'Paul Davies',
          answer: `Eine spannende Hypothese, die Davies und Kollegen ernsthaft vorgeschlagen haben. Bisher gibt es dafür keinen Beleg – obwohl die moderne Mikrobiologie mit Genomsequenzierung und Isotopenanalysen in nahezu jede Nische der Erde vorgedrungen ist. Solange nichts gefunden ist, bleibt sie Spekulation.`,
          sources: [{ kind: 'wissenschaft', author: 'Paul C. W. Davies u. a.', work: '„Signatures of a Shadow Biosphere", Astrobiology 9 (2), S. 241–249', year: '2009', status: 'paraphrase' }],
          followUps: [
            {
              id: 'abwesenheit-beweis',
              objection: `Abwesenheit von Belegen ist kein Beleg für Abwesenheit.`,
              objectionBy: 'Paul Davies',
              answer: `Richtig – deshalb behaupte ich auch nicht, alternatives Leben sei unmöglich. Ich bestreite nur das „genauso gut". Die ehrliche Formulierung lautet: Im Prinzip denkbar, chemisch deutlich ungünstiger, bisher kein einziges Beispiel bekannt. Wer „genauso gut" sagt, behauptet mehr, als er weiß.`,
              followUps: [
                {
                  id: 'gott-der-luecken',
                  objection: `Du stopfst wieder eine Lücke: Heute kennen wir keine Alternative, morgen vielleicht doch. Das ist ein Lückenbüßer-Gott.`,
                  objectionBy: 'Sean Carroll',
                  answer: `Ein Lückenbüßer-Argument beruht auf dem, was wir *nicht* wissen. Mein Argument beruht auf dem, was wir *wissen*: Bindungsenergien und Stoffeigenschaften, die gut gemessen sind. Und sollte man morgen Siliziumleben finden, müsste ich das Argument der Einzigartigkeit anpassen – aber nicht meinen Glauben. Dass das Universum überhaupt Leben erlaubt, bliebe erklärungsbedürftig, und Gott wäre der Schöpfer auch dieses Lebens.`,
                  questionsBack: [`Ist ein Argument aus gemessenen Bindungsenergien wirklich ein Argument aus Unwissenheit?`],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Was wäre das Oxidationsprodukt eines Siliziumwesens – und wie würde es es loswerden?`,
    `Warum baut das Leben auf der siliziumreichen Erde auf Kohlenstoff?`,
    `Kennst du ein Beispiel einer Biochemie, die nicht auf Kohlenstoff in Wasser beruht – außerhalb von Spekulation?`,
    `Warum ist das 2010 angekündigte „Arsen-Leben" wohl gescheitert?`,
    `Bedeutet „im Prinzip denkbar" dasselbe wie „genauso gut"?`,
  ],
  avoid: [
    `„Siliziumleben ist absolut unmöglich" – das kann niemand beweisen; es ist sehr ungünstig, nicht logisch ausgeschlossen.`,
    `Außerirdisches Leben als Bedrohung des Glaubens darstellen – das ist es nicht.`,
    `Mit erfundenen Wahrscheinlichkeiten operieren.`,
  ],
  concessions: [
    `Wir kennen nur eine Biochemie; exotische Chemie unter extremen Bedingungen ist nicht prinzipiell ausgeschlossen.`,
    `Die Einheitlichkeit des irdischen Lebens erklärt sich auch durch gemeinsame Abstammung.`,
    `Die Laborerfolge der synthetischen Biologie zeigen, dass der chemische Möglichkeitsraum größer ist, als die Natur nutzt.`,
  ],
  furtherReading: [
    petkowski2020,
    nrc2007,
    { kind: 'fachliteratur', author: 'Michael Denton', work: 'Nature\'s Destiny', year: '1998', status: 'paraphrase' },
    { kind: 'gegner', author: 'Peter D. Ward', work: 'Life as We Do Not Know It: The NASA Search for (and Synthesis of) Alien Life', year: '2005', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Silizium', 'Ammoniak', 'Titan', 'Astrobiologie', 'Alternative Biochemie', 'Kohlenstoff', 'Synthetische Biologie'],
  related: ['fitness-der-umwelt/wasser-kohlenstoff-zufall', 'fitness-der-umwelt/licht-passt-zufall', 'feinabstimmung/leben-haette-sich-angepasst', 'astrobiologie/ausserirdische-widerlegen-bibel', 'naturalismus/lueckenbuesser-gott', 'ursprung-des-lebens/protozellen-im-labor'],
};

export default claim;
