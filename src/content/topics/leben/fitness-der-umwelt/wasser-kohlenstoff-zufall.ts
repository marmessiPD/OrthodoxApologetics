import type { Claim, Source } from '../../../schema.ts';

const henderson1913: Source = {
  kind: 'wissenschaft',
  author: 'Lawrence J. Henderson',
  work: 'The Fitness of the Environment: An Inquiry into the Biological Significance of the Properties of Matter',
  year: '1913',
  quote: `Henderson, Physiologe und Chemiker in Harvard, zeigt, dass Wasser, Kohlendioxid und die Chemie von Kohlenstoff, Wasserstoff und Sauerstoff eine einzigartige, aufeinander abgestimmte „Tauglichkeit" für Leben besitzen. Diese Tauglichkeit der Umwelt sei ebenso real wie die Anpassung der Organismen – aber sie sei nicht durch Darwins Selektion entstanden, da sie in den Eigenschaften der Materie selbst liege. Er schließt, der Biologe dürfe das Universum „in seinem innersten Wesen als biozentrisch" betrachten.`,
  status: 'paraphrase',
  note: 'Häufig zitierter Schlusssatz (engl. „…may now rightly regard the universe in its very essence as biocentric"); Wortlaut vor wörtlicher Verwendung prüfen. Henderson war kein Theist; er sprach von Teleologie, nicht von einem Designer.',
};

const denton2017: Source = {
  kind: 'fachliteratur',
  author: 'Michael Denton',
  work: 'The Wonder of Water: Water\'s Profound Fitness for Life on Earth and Mankind',
  year: '2017',
  quote: `Denton beschreibt, wie dieselben Eigenschaften des Wassers auf vielen Ebenen zugleich lebensförderlich sind: im Klima und Wasserkreislauf, in der Verwitterung und Bodenbildung, im Kreislauf und in der Temperaturregulation großer Lebewesen, in der Faltung von Proteinen und der Bildung von Membranen.`,
  status: 'paraphrase',
  note: 'Denton ist Biochemiker und Agnostiker; er argumentiert für eine „Teleologie" der Naturgesetze, ohne sich auf einen christlichen Gott festzulegen.',
};

const denton1998: Source = {
  kind: 'fachliteratur',
  author: 'Michael Denton',
  work: 'Nature\'s Destiny: How the Laws of Biology Reveal Purpose in the Universe',
  year: '1998',
  quote: `Denton führt Hendersons Programm fort: Die physikalischen und chemischen Eigenschaften von Wasser, Kohlenstoff, Sauerstoff, Licht und Metallen bilden ein Ensemble, das für kohlenstoffbasiertes Leben – bis hin zum Menschen – auffallend passend ist.`,
  status: 'paraphrase',
};

const benner2004: Source = {
  kind: 'wissenschaft',
  author: 'Steven A. Benner, Alonso Ricardo, Matthew A. Carrigan',
  work: '„Is there a common chemical model for life in the universe?", Current Opinion in Chemical Biology 8, S. 672–689',
  year: '2004',
  quote: `Die Autoren prüfen alternative Lösungsmittel und Biochemien und weisen darauf hin, dass Wasser für bestimmte Bausteine (z. B. RNA) auch Nachteile hat, weil es Bindungen hydrolysiert.`,
  status: 'paraphrase',
};

const barnesLewis2016: Source = {
  kind: 'fachliteratur',
  author: 'Geraint F. Lewis, Luke A. Barnes',
  work: 'A Fortunate Universe: Life in a Finely Tuned Cosmos',
  year: '2016',
  quote: `Die Autoren zeigen, wie die Stärke der Grundkräfte und die Massen von Elektron und Quarks die Chemie bestimmen: Schon moderate Änderungen würden stabile Atome, Moleküle oder die Bildung von Kohlenstoff und Sauerstoff in Sternen verhindern.`,
  status: 'paraphrase',
  note: 'Lewis ist Agnostiker, Barnes Christ – ein bewusst gemeinsam geschriebenes Buch.',
};

const epelbaum2013: Source = {
  kind: 'wissenschaft',
  author: 'Evgeny Epelbaum, Hermann Krebs, Timo A. Lähde, Dean Lee, Ulf-G. Meißner',
  work: '„Viability of Carbon-Based Life as a Function of the Light Quark Mass", Physical Review Letters 110, 112502',
  year: '2013',
  quote: `Gitterberechnungen zeigen, dass die Erzeugung von Kohlenstoff und Sauerstoff in Sternen Änderungen der leichten Quarkmassen nur in einem engen Bereich von wenigen Prozent übersteht.`,
  status: 'paraphrase',
};

const adamsPuddle: Source = {
  kind: 'gegner',
  author: 'Douglas Adams',
  work: 'The Salmon of Doubt (posthum), Rede „Is there an Artificial God?" (1998)',
  year: '2002',
  quote: `Eine Pfütze wacht auf und staunt, wie genau das Loch, in dem sie liegt, zu ihr passt – es müsse eigens für sie gemacht sein. In Wahrheit hat sich das Wasser dem Loch angepasst.`,
  status: 'paraphrase',
};

const claim: Claim = {
  id: 'wasser-kohlenstoff-zufall',
  title: `„Die einzigartigen Eigenschaften von Wasser und Kohlenstoff sind Zufall."`,
  proponents: [
    { name: 'Sean Carroll', role: 'Physiker, Johns Hopkins University', work: 'The Big Picture (2016)' },
    { name: 'Victor J. Stenger', role: 'Physiker (1935–2014)', work: 'The Fallacy of Fine-Tuning (2011)' },
    { name: 'Douglas Adams', role: 'Schriftsteller (1952–2001)', work: '„Pfützen-Gleichnis", The Salmon of Doubt (2002)' },
    { name: 'Peter Atkins', role: 'Physikochemiker, Oxford', work: 'On Being (2011); Conjuring the Universe (2018)' },
    { name: 'Philip Ball', role: 'Wissenschaftsautor, früher Redakteur bei Nature', work: 'H2O: A Biography of Water (1999)' },
  ],
  steelman: `Natürlich passt Wasser perfekt zum Leben – das Leben ist ja im Wasser entstanden und hat sich über Milliarden Jahre an genau dessen Eigenschaften angepasst. Das ist Douglas Adams' Pfütze, die staunt, wie exakt ihr Loch zu ihr passt. Die angeblichen „Anomalien" des Wassers folgen schlicht aus der Quantenmechanik eines kleinen, gewinkelten, polaren Moleküls mit Wasserstoffbrücken; sie konnten gar nicht anders sein. Kohlenstoff ist das vierthäufigste Element im Universum – dass Leben ihn verwendet, ist so überraschend wie, dass Häuser aus Ziegeln gebaut werden, wo es Lehm gibt. Und Wasser ist keineswegs ideal: Es zersetzt RNA und Proteine, weshalb Forscher wie Steven Benner sogar andere Lösungsmittel für den Ursprung des Lebens erwägen. Hinzu kommt der Beobachtungseffekt: Wo die Chemie nicht passt, gibt es niemanden, der staunt. „Feinabstimmung" der Chemie ist ein Zirkelschluss.`,
  biblical: {
    summary: `Die Schrift stellt das Wasser an den Anfang der Schöpfung: „Der Geist Gottes schwebte auf dem Wasser" (Gen 1,2). Gott „hat alles geordnet mit Maß, Zahl und Gewicht" (Weish 11,20) und die Erde nicht „leer" geschaffen, sondern „dass man darauf wohnen solle" (Jes 45,18). Die Bibel ist kein Chemiebuch, aber sie erwartet eine Schöpfung, deren Ordnung auf Leben hin angelegt ist – und Röm 1,20 sagt, Gottes „ewige Kraft und Gottheit" werde „an den Werken" erkannt.`,
    detail: `- **Hiob 38,29–30** fragt in poetischer Sprache, wer das Eis gezeugt hat, sodass „die Tiefe oben gefriert" – das Bild einer zugefrorenen Wasseroberfläche über flüssiger Tiefe, gerade die Eigenschaft, die Seen und Meere vor dem völligen Durchfrieren bewahrt. (Keine „wissenschaftliche Vorhersage", aber ein schönes Bild für das Staunen.)
- **Weish 11,20** (im koptischen Kanon): Maß, Zahl und Gewicht – die Väter lasen darin, dass die Schöpfung rational geordnet und darum erforschbar ist.
- **Joh 4,14; Offb 22,1:** Wasser wird zum Bild des Lebens, das Gott schenkt – die geistliche Bedeutung baut auf der leiblichen auf.`,
    sources: [
      { kind: 'bibel', work: '1. Mose', ref: '1,2', quote: `Und die Erde war wüst und leer, und es war finster auf der Tiefe; und der Geist Gottes schwebte auf dem Wasser.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Weisheit', ref: '11,20 (Luther: 11,21)', quote: `Aber du hast alles geordnet mit Maß, Zahl und Gewicht.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Jesaja', ref: '45,18', quote: `… der Gott, der die Erde bereitet hat und hat sie gemacht und zugerichtet, und sie nicht gemacht hat, daß sie leer soll sein, sondern sie bereitet hat, daß man darauf wohnen solle.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Hiob', ref: '38,29–30', quote: `Wer hat das Eis gezeugt, sodass das Wasser wie unter Steinen verborgen wird und die Tiefe oben gefriert?`, status: 'paraphrase' },
    ],
  },
  church: {
    summary: `Die Väter sahen in der Harmonie der Elemente einen Hinweis auf den einen Schöpfer. Athanasius argumentiert in *Contra Gentes* (35–37), dass Gegensätze wie warm und kalt, feucht und trocken, die sich ihrer Natur nach bekämpfen müssten, in der Schöpfung zu einer lebensförderlichen Ordnung verbunden sind – das verweise auf einen Logos, der sie zusammenhält. Basilius widmet im *Hexaemeron* den Wassern ganze Predigten und staunt über ihre Rolle für Klima und Leben. Die koptische Liturgie dankt Gott für „die Wasser des Flusses" (Nil) – Wasser als Gabe, nicht als Zufall.`,
    sources: [
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Gegen die Heiden (Contra Gentes)', ref: '36–37', quote: `Wer sieht, wie Elemente, die von Natur einander entgegengesetzt sind – Warmes und Kaltes, Trockenes und Feuchtes –, sich nicht bekämpfen, sondern zu einer Harmonie verbunden sind, muss erkennen, dass einer sie geordnet hat.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Basilius der Große', work: 'Hexaemeron', ref: 'Homilien 3–4', quote: `Basilius bespricht das Sammeln der Wasser, ihren Kreislauf und ihren Nutzen für Erde und Lebewesen als Werk der Weisheit Gottes.`, status: 'paraphrase' },
      { kind: 'liturgie', work: 'Koptische Liturgie (Fürbitte für die Wasser des Flusses)', quote: `Die Kirche bittet, dass Gott die Wasser des Flusses nach ihrem Maß steigen lasse und die Erde segne.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Dass Wasser physikalisch und chemisch ungewöhnlich ist, ist unstrittig: Dichtemaximum bei etwa 4 °C (Eis schwimmt), sehr hohe Wärmekapazität und Verdampfungswärme, hohe Oberflächenspannung, ausgezeichnetes Lösungsvermögen für Ionen und polare Stoffe, zugleich der „hydrophobe Effekt", der Membranen und Proteinfaltung antreibt. Der Chemiker Martin Chaplin listet über 70 Anomalien. Umstritten ist die Deutung: Henderson (1913) sah eine einzigartige „Tauglichkeit der Umwelt", Denton (1998, 2017) eine teleologische Ordnung; Kritiker wie Philip Ball halten manche Anomalien für biologisch belanglos und warnen vor Übertreibung; Astrobiologen erwägen andere Lösungsmittel. Kohlenstoff ist kosmisch häufig, seine Bildung in Sternen hängt aber von feinen nuklearen Bedingungen ab (Hoyle-Resonanz; Epelbaum u. a. 2013).`,
    detail: `- **Konsens:** Kein anderes bekanntes Lösungsmittel vereint so viele lebensförderliche Eigenschaften im selben Temperaturbereich; keine andere Chemie ist so vielfältig wie die des Kohlenstoffs.
- **Offene Fragen:** Wie „notwendig" sind diese Eigenschaften (sind die Naturkonstanten kontingent?), und wie fremdartig könnte Leben sein?
- **Wichtig für die Debatte:** Das Argument behauptet nicht, Leben könne sich nicht anpassen. Es behauptet, dass die *Chemie selbst* – die vor jedem Leben besteht – auf Leben hin passend ist. Das kann Selektion nicht erklären, da sie Naturgesetze nicht verändert.`,
    sources: [henderson1913, denton2017, benner2004, epelbaum2013,
      { kind: 'wissenschaft', author: 'Martin Chaplin', work: 'Anomalous properties of water (Website „Water Structure and Science", London South Bank University)', status: 'paraphrase', quote: `Chaplin führt über 70 Eigenschaften auf, in denen Wasser von vergleichbaren Flüssigkeiten abweicht.` },
    ],
  },
  quickAnswer: `Die Pfütze passt sich dem Loch an – aber die Chemie passt sich niemandem an. Evolution kann Lebewesen an Wasser anpassen, nicht die Eigenschaften des Wassers an das Leben. Und diese Eigenschaften passen auf vielen Ebenen zugleich: Eis schwimmt und schützt Seen vor dem Durchfrieren, die hohe Wärmekapazität stabilisiert Klima und Körpertemperatur, Verdunstung kühlt, der hydrophobe Effekt baut Zellmembranen. Kohlenstoff ist das einzige Element, das stabile und zugleich umbaubare Molekülketten bildet. Der Harvard-Chemiker Henderson schloss schon 1913 – ohne religiöses Motiv –, das Universum sei „biozentrisch".`,
  keyPoints: [
    `**Die Pfütze verwechselt die Richtung:** Selektion passt Organismen an die Chemie an, aber sie erschafft oder verändert keine Naturgesetze. Die „Tauglichkeit der Umwelt" liegt vor jedem Leben.`,
    `**Ein Molekül, viele Ebenen:** Dieselben Eigenschaften des Wassers sind gleichzeitig für Klima, Geologie, Kreislauf, Kühlung, Membranen und Proteinfaltung förderlich (Denton).`,
    `**Kohlenstoff ist chemisch einzigartig:** vier Bindungen, Ketten, Ringe, Doppelbindungen, ähnlich starke Bindungen zu H, O, N – stabil und doch umbaubar. Die Erdkruste enthält weit mehr Silizium als Kohlenstoff, und doch nutzt das Leben Kohlenstoff.`,
    `**Unabhängige Zeugen:** Henderson (kein Theist) und Denton (Agnostiker) kamen ohne religiöses Motiv zu teleologischen Schlüssen.`,
    `**Selektionseffekt erklärt nicht alles:** Dass wir nur in einer lebensfreundlichen Welt existieren können, erklärt nicht, warum die Naturgesetze eine solche Welt überhaupt erlauben.`,
    `**Das Argument hat Grenzen:** Es zeigt eine Ordnung auf Leben hin, nicht unmittelbar den dreieinigen Gott – das ist ehrlich zu sagen.`,
  ],
  argument: {
    name: 'Die Tauglichkeit der Umwelt (Henderson–Denton)',
    summary: 'Ein abduktives Argument: Welche Erklärung macht das Ensemble passender Eigenschaften am wenigsten überraschend?',
    premises: [
      {
        text: `P1: Wasser und Kohlenstoff besitzen ein Ensemble von Eigenschaften, das auf vielen voneinander unabhängigen Ebenen (Klima, Geologie, Physiologie, Molekularbiologie) lebensförderlich ist.`,
        support: `Henderson (1913), Denton (1998, 2017), Chaplin; die Eigenschaften selbst sind Lehrbuchwissen.`,
        sources: [henderson1913, denton2017],
      },
      {
        text: `P2: Diese Eigenschaften sind nicht durch biologische Anpassung entstanden, sondern folgen aus Naturgesetzen und Konstanten, die vor jedem Leben bestehen.`,
        support: `Selektion wirkt auf Organismen, nicht auf die Physik des Wassers. Die Pfützen-Analogie verwechselt die Richtung der Anpassung.`,
        sources: [adamsPuddle],
      },
      {
        text: `P3: Die Naturkonstanten, aus denen diese Chemie folgt, erscheinen nicht logisch notwendig; moderate Änderungen würden die lebensförderliche Chemie zerstören.`,
        support: `Lewis & Barnes (2016); Epelbaum u. a. (2013) zur Kohlenstoff- und Sauerstoffbildung.`,
        sources: [barnesLewis2016, epelbaum2013],
      },
    ],
    inferences: [`Zufall erklärt ein so vielschichtiges Passen schlecht; Notwendigkeit ist unbelegt; ein Selektionseffekt erklärt nur, warum wir es beobachten, nicht warum es möglich ist.`],
    conclusion: `Die beste Erklärung ist eine Ordnung der Natur auf Leben hin – was ein vernünftiger Schöpfer erwarten lässt. Das Argument begründet einen schöpferischen Geist; dass er der dreieinige Gott ist, zeigt die Offenbarung.`,
  },
  voices: [
    {
      person: 'guillermo-gonzalez',
      role: 'als Astronom (Bewohnbarkeit)',
      text: `Gonzalez hat in *The Privileged Planet* (mit Jay Richards) gezeigt, wie viele Bedingungen zusammenkommen müssen, damit ein Planet flüssiges Wasser über Milliarden Jahre halten kann: die richtige Sternmasse, Bahn, Plattentektonik, Magnetfeld, ein großer Mond. Wasser ist im All häufig, flüssiges Wasser an einer Planetenoberfläche über lange Zeit dagegen selten. Zudem beobachtet er eine auffällige Korrelation: Gerade die Orte, die Leben ermöglichen, sind auch die besten Orte, um das Universum zu erforschen.`,
      sources: [{ kind: 'fachliteratur', author: 'Guillermo Gonzalez, Jay W. Richards', work: 'The Privileged Planet: How Our Place in the Cosmos Is Designed for Discovery', year: '2004', status: 'paraphrase' }],
    },
    {
      person: 'luke-barnes',
      role: 'als Astrophysiker (Feinabstimmung der Chemie)',
      text: `Barnes betont, dass die Chemie des Lebens nicht in der Luft hängt, sondern aus wenigen Grundgrößen folgt: der Stärke der elektromagnetischen Kraft, den Massen von Elektron und Quarks, der Stärke der Kernkräfte. Ändert man sie, ändern sich Bindungsenergien, Moleküle und die Elemente, die Sterne erbrüten. Die „Einzigartigkeit" des Wassers und des Kohlenstoffs ist daher ein Teil der allgemeinen Feinabstimmung der Naturgesetze – und kein Zufall im Sinne eines bedeutungslosen Ereignisses.`,
      sources: [barnesLewis2016],
    },
    {
      person: 'athanasius',
      role: 'als Philosoph der kosmischen Harmonie',
      text: `Athanasius argumentiert gegen den Polytheismus: Wären die Elemente das Werk vieler Götter oder des Zufalls, würden sie einander bekämpfen – das Warme das Kalte, das Feuchte das Trockene. Stattdessen sind sie zu einer lebenstragenden Harmonie verbunden. Das sei nur verständlich, wenn ein einziger Logos sie ordnet. Was Athanasius in der Sprache der antiken Elementenlehre sagt, beschreibt Henderson in der Sprache der modernen Chemie: ein Zusammenspiel von Eigenschaften, das auf Leben hin passt.`,
      sources: [{ kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Contra Gentes', ref: '35–38', status: 'paraphrase' }],
    },
    {
      person: 'basilius',
      role: 'als Prediger über die Wasser',
      text: `In seinen Predigten über das Sechstagewerk widmet Basilius den Wassern viel Raum: Ihr Sammeln in Meeren, ihr Verdunsten und Niederfallen, ihre Bedeutung für Pflanzen, Tiere und Klima. Er lädt seine Zuhörer ein, im Alltäglichen – im Regen, im Fluss, im Meer – die Weisheit des Schöpfers zu sehen. Basilius verbindet genaue Beobachtung mit Lobpreis: Wer die Natur studiert, lernt den Künstler kennen.`,
      sources: [{ kind: 'kirchenvater', author: 'Basilius der Große', work: 'Hexaemeron', ref: 'Homilien 3–4', status: 'paraphrase' }],
    },
    {
      person: 'paley',
      role: 'als Naturtheologe (die Elemente)',
      text: `William Paley widmet in seiner *Natural Theology* (1802) ein Kapitel den Elementen: Luft, Wasser, Feuer und Licht. Er beschreibt, wie Wasser verdunstet, sich in Wolken sammelt und als Regen wieder verteilt wird, und wie sein Verhalten beim Gefrieren und Schmelzen dem Leben dient. Paleys Biologie ist in vielem überholt, aber seine Beobachtung zur Physik der Elemente hat Henderson ein Jahrhundert später mit moderner Chemie vertieft.`,
      sources: [{ kind: 'fachliteratur', author: 'William Paley', work: 'Natural Theology', ref: 'Kap. 21 („Of the Elements")', year: '1802', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'pfuetzen-gleichnis',
      objection: `Douglas Adams hat es auf den Punkt gebracht: Die Pfütze staunt, wie perfekt ihr Loch zu ihr passt. Leben hat sich an Wasser angepasst – nicht umgekehrt.`,
      objectionBy: 'Sean Carroll',
      targetsPremise: 2,
      answer: `Die Pfütze verwechselt die Richtung. Evolution kann Lebewesen an Wasser anpassen – aber sie kann nicht die Eigenschaften des Wassers an das Leben anpassen. Dass Eis schwimmt, Wasser enorm viel Wärme speichert und Membranen durch den hydrophoben Effekt entstehen, liegt in den Naturgesetzen, die vor jedem Leben bestehen. Genau das war Hendersons Punkt 1913: Die Tauglichkeit der Umwelt ist nicht durch Selektion entstanden.`,
      sources: [adamsPuddle, henderson1913],
      questionsBack: [`Welcher Selektionsprozess hat die Dichteanomalie des Wassers hervorgebracht?`],
      followUps: [
        {
          id: 'selektionseffekt',
          objection: `Dann ist es ein Beobachtungsselektionseffekt: Wo die Chemie nicht passt, gibt es keine Beobachter, die staunen.`,
          objectionBy: 'Sean Carroll',
          targetsPremise: 3,
          answer: `Der Selektionseffekt erklärt, warum wir – *wenn* wir existieren – eine lebensfreundliche Chemie beobachten. Er erklärt nicht, warum die Naturgesetze eine solche Chemie überhaupt zulassen. Der Philosoph John Leslie vergleicht das mit einem Hinrichtungskommando, bei dem alle Schützen danebenschießen: Dass du überlebt hast, ist Voraussetzung für dein Staunen – aber es erklärt nicht, warum alle danebengeschossen haben.`,
          sources: [{ kind: 'fachliteratur', author: 'John Leslie', work: 'Universes', year: '1989', status: 'paraphrase', quote: `Leslies „Erschießungskommando"-Gleichnis: Das eigene Überleben ist Bedingung der Beobachtung, aber keine Erklärung des unwahrscheinlichen Ereignisses.` }],
          followUps: [
            {
              id: 'quantenmechanik-notwendig',
              objection: `Die Eigenschaften des Wassers folgen notwendig aus der Quantenmechanik eines kleinen polaren Moleküls. Sie konnten nicht anders sein.`,
              objectionBy: 'Victor Stenger',
              targetsPremise: 3,
              answer: `Bei gegebenen Naturkonstanten: ja. Aber die Konstanten selbst – Elektronenmasse, Stärke der elektromagnetischen Kraft, Masse der Quarks – erscheinen nicht logisch notwendig, und schon moderate Änderungen verändern Bindungen und Moleküle grundlegend. Und selbst wenn sie notwendig wären: Ein Gefüge von Gesetzen, das *notwendig* lebensfreundlich ist, wäre nicht weniger erstaunlich, sondern noch mehr erklärungsbedürftig.`,
              sources: [barnesLewis2016],
              followUps: [
                {
                  id: 'multiversum-chemie',
                  objection: `Im Multiversum gibt es alle möglichen Chemien. Wir leben zwangsläufig in einem Universum, das passt.`,
                  objectionBy: 'Sean Carroll',
                  targetsPremise: 3,
                  answer: `Das ist eine echte Option – aber sieh, was sie kostet: unzählige unbeobachtbare Universen, ein Mechanismus, der sie erzeugt und selbst feinabgestimmt sein muss, und das Problem, dass in einem solchen Ensemble vereinzelte Beobachter („Boltzmann-Gehirne") häufiger sein sollten als geordnete Welten wie unsere. Dass führende Physiker zu diesem Preis greifen, zeigt, wie ernst sie die Feinabstimmung nehmen.`,
                  followUps: [
                    {
                      id: 'gott-erklaert-nichts',
                      objection: `„Gott wollte es so" erklärt nichts, weil es alles erklären würde. Das ist keine Erklärung, sondern eine Ausrede.`,
                      objectionBy: 'Sean Carroll',
                      answer: `Nein – ein vernünftiger Schöpfer, der verkörperte, denkende Geschöpfe will, lässt etwas ganz Bestimmtes erwarten: stabile Gesetze, eine Chemie, die komplexe Moleküle erlaubt, ein Lösungsmittel, das sie trägt, und eine Welt, die man erforschen kann. Genau das finden wir. Der Naturalismus sagt das nicht voraus; er nimmt es als rohe Tatsache hin. Eine Hypothese, die das Beobachtete erwarten lässt, erklärt mehr als eine, für die es reiner Glücksfall ist.`,
                      questionsBack: [`Was würde der Naturalismus vorhersagen, wenn du die Naturkonstanten nicht kennen würdest?`],
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
      id: 'anomalien-uebertrieben',
      objection: `Die „Anomalien" des Wassers werden übertrieben. Viele davon sind für Leben völlig irrelevant, und für Biomoleküle ist Wasser sogar schädlich – es spaltet sie.`,
      objectionBy: 'Philip Ball',
      targetsPremise: 1,
      answer: `Einverstanden: Nicht jede der über 70 Anomalien ist biologisch wichtig. Aber die zentralen sind es: Eis schwimmt und isoliert Gewässer, statt sie von unten durchfrieren zu lassen; die hohe Wärmekapazität puffert Klima und Körpertemperatur; die hohe Verdampfungswärme macht Schwitzen wirksam; der hydrophobe Effekt baut Membranen und faltet Proteine; die niedrige Viskosität ermöglicht Blutkreislauf und Saftstrom. Und dass Wasser Bindungen spaltet, ist zugleich der Grund, warum Stoffwechsel umkehrbar und regulierbar ist.`,
      sources: [denton2017],
      followUps: [
        {
          id: 'benner-wasser-feind',
          objection: `Für den Ursprung des Lebens ist Wasser ein Feind – es hydrolysiert RNA. Steven Benner erwägt deshalb andere Lösungsmittel wie Formamid.`,
          objectionBy: 'Steven Benner',
          targetsPremise: 1,
          answer: `Das ist ein wichtiger Punkt – aber er spricht gegen die *ungelenkte Entstehung* des Lebens, nicht gegen die Tauglichkeit des Wassers für bestehendes Leben. In der Zelle kontrollieren Enzyme, wann Bindungen gespalten werden; gerade das macht den Stoffwechsel steuerbar. Dieselbe Eigenschaft, die Leben regulierbar macht, macht seine zufällige Entstehung schwer. Das passt eher zu Planung als zu Zufall.`,
          sources: [benner2004],
          followUps: [
            {
              id: 'eis-schwimmt-auch-anderswo',
              objection: `Auch Silizium, Gallium oder Bismut dehnen sich beim Erstarren aus. Die Dichteanomalie ist nichts Einzigartiges.`,
              objectionBy: 'Victor Stenger',
              targetsPremise: 1,
              answer: `Richtig, diese Elemente zeigen ebenfalls eine solche Anomalie – aber bei Hunderten oder über tausend Grad, nicht als Lösungsmittel des Lebens. Das Erstaunliche ist nicht eine einzelne Eigenschaft, sondern ihr Zusammentreffen: Dasselbe Molekül ist im selben Temperaturbereich flüssig, in dem Kohlenstoffchemie stabil und doch umbaubar ist, löst Ionen, treibt den hydrophoben Effekt an, speichert Wärme und schwimmt als Eis.`,
              followUps: [
                {
                  id: 'texas-scharfschuetze',
                  objection: `Du suchst dir im Nachhinein die passenden Eigenschaften heraus und malst die Zielscheibe um die Einschüsse – der Trugschluss des texanischen Scharfschützen.`,
                  objectionBy: 'Victor Stenger',
                  targetsPremise: 1,
                  answer: `Der Einwand wäre berechtigt, wenn die Kriterien willkürlich wären. Aber sie sind unabhängig festlegbar: Ein großes Lebewesen braucht Temperaturpufferung, Kühlung, einen Kreislauf mit niedriger Viskosität, ein Lösungsmittel für Ionen und eine Kraft, die Membranen bildet. Henderson leitete diese Anforderungen aus der Physiologie ab, nicht aus einer Liste der Wassereigenschaften. Die Zielscheibe stand also, bevor man nachsah, wo die Pfeile stecken.`,
                  sources: [henderson1913],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'kohlenstoff-haeufig',
      objection: `Kohlenstoff ist eines der häufigsten Elemente im Universum. Dass Leben ihn nutzt, ist so überraschend, wie dass man Häuser aus Ziegeln baut, wo es Lehm gibt.`,
      objectionBy: 'Peter Atkins',
      targetsPremise: 1,
      answer: `Auf der Erde stimmt das Bild gerade nicht: Die Erdkruste enthält etwa tausendmal mehr Silizium als Kohlenstoff – und trotzdem baut das Leben auf Kohlenstoff. Nicht die Häufigkeit entscheidet, sondern die Chemie: Nur Kohlenstoff bildet stabile Ketten, Ringe und Doppelbindungen und verbindet sich ähnlich stark mit Wasserstoff, Sauerstoff und Stickstoff – stabil genug für Information, umbaubar genug für Stoffwechsel. Und dass Kohlenstoff überhaupt häufig ist, hängt selbst an feinen nuklearen Bedingungen.`,
      sources: [epelbaum2013],
      followUps: [
        {
          id: 'hoyle-mythos',
          objection: `Hoyles „Vorhersage" der Kohlenstoff-Resonanz ist ein Mythos – der Wissenschaftshistoriker Helge Kragh hat gezeigt, dass sie damals gar nicht anthropisch begründet war.`,
          objectionBy: 'Helge Kragh',
          targetsPremise: 3,
          answer: `Kraghs historische Kritik nehme ich ernst: Wie Hoyle seine Vorhersage motivierte, ist eine Frage der Geschichtsschreibung. Die Physik bleibt davon unberührt: Neuere Gitterberechnungen zeigen, dass die Bildung von Kohlenstoff und Sauerstoff Änderungen der Quarkmassen nur um wenige Prozent übersteht. Und mein Hauptargument ist ohnehin nicht Hoyle, sondern die einzigartige Chemie des Kohlenstoffs selbst.`,
          sources: [epelbaum2013, { kind: 'gegner', author: 'Helge Kragh', work: '„When is a prediction anthropic? Fred Hoyle and the 7.65 MeV carbon resonance", Archive for History of Exact Sciences 64', year: '2010', status: 'paraphrase' }],
          followUps: [
            {
              id: 'passend-werturteil',
              objection: `Kohlenstoffchemie ist eben, wie sie ist. „Passend" ist ein Werturteil, kein physikalischer Befund.`,
              objectionBy: 'Peter Atkins',
              targetsPremise: 1,
              answer: `„Passend" lässt sich präzisieren: Informationstragende Moleküle brauchen Bindungen, die bei der Temperatur flüssigen Wassers stabil sind, aber von Enzymen gezielt umgebaut werden können. Kohlenstoffbindungen erfüllen genau das – und das im selben Temperaturfenster, in dem Wasser flüssig ist und Sauerstoff reaktiv, aber nicht zerstörerisch. Dass Bindungsenergien, Lösungsmittel und Temperaturbereich zusammenfallen, ist ein Befund über die Physik, kein Geschmacksurteil.`,
              followUps: [
                {
                  id: 'koinzidenzen-ueberall',
                  objection: `Koinzidenzen findest du überall, wenn du lange genug suchst. Aus vielen Zahlen lassen sich immer passende herauslesen.`,
                  objectionBy: 'Victor Stenger',
                  answer: `Einzelne Zufälle beweisen nichts, das gebe ich zu. Aber hier treffen viele unabhängige Eigenschaften zusammen, die alle auf dasselbe Ergebnis zielen – ein Leben aus Kohlenstoff in flüssigem Wasser. Eine genaue Wahrscheinlichkeit kann niemand berechnen, und ich behaupte keine. Ich frage nur: Welche Erklärung macht dieses Zusammentreffen am wenigsten überraschend – ein blindes Zusammenspiel oder ein Geist, der Leben wollte?`,
                  questionsBack: [`Wie viele unabhängige Koinzidenzen bräuchtest du, bevor du eine Erklärung jenseits des Zufalls in Betracht ziehst?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'henderson-kein-theist',
      objection: `Henderson war kein Theist und Denton ist Agnostiker. Ihr vereinnahmt Forscher für eure Religion.`,
      objectionBy: 'Jerry Coyne',
      answer: `Das stimmt – und genau deshalb wiegt ihr Urteil schwer. Wir behaupten nicht, sie seien Christen gewesen. Henderson schloss als nüchterner Physiologe, das Universum sei „biozentrisch"; Denton spricht von einer Teleologie der Naturgesetze, ohne sich auf einen Gott festzulegen. Wer ohne religiöses Motiv zu solchen Schlüssen kommt, zeigt, dass der Befund nicht aus frommem Wunschdenken stammt.`,
      sources: [henderson1913, denton1998],
      followUps: [
        {
          id: 'teleologie-ohne-gott',
          objection: `Man kann Teleologie ohne Gott denken – Thomas Nagel schlägt in „Mind and Cosmos" eine natürliche Zielgerichtetheit vor.`,
          objectionBy: 'Thomas Nagel',
          answer: `Nagels Ehrlichkeit respektiere ich sehr – er hat den Mut, den Materialismus in Frage zu stellen. Aber ein Ziel ohne Geist ist schwer verständlich: Ein Ziel ist etwas, auf das hin etwas ausgerichtet ist, bevor es erreicht ist. Thomas von Aquin argumentierte in seinem fünften Weg, dass Dinge ohne Erkenntnis nur dann regelmäßig auf ein Ziel hinwirken, wenn ein erkennendes Wesen sie ausrichtet – wie der Pfeil durch den Schützen.`,
          sources: [
            { kind: 'gegner', author: 'Thomas Nagel', work: 'Mind and Cosmos: Why the Materialist Neo-Darwinian Conception of Nature Is Almost Certainly False', year: '2012', status: 'paraphrase' },
            { kind: 'fachliteratur', author: 'Thomas von Aquin', work: 'Summa theologiae', ref: 'I, q. 2, a. 3 (fünfter Weg)', status: 'paraphrase', quote: `Was keine Erkenntnis hat, strebt nur dann auf ein Ziel hin, wenn es von einem Erkennenden gelenkt wird, wie der Pfeil vom Schützen.` },
          ],
          followUps: [
            {
              id: 'fuenfter-weg-darwin',
              objection: `Thomas' fünfter Weg wurde durch Darwin widerlegt. Zielgerichtetheit ist ein Effekt der Selektion.`,
              objectionBy: 'Jerry Coyne',
              answer: `Darwin hat – nach eigener Theorie – erklärt, wie Organismen an ihre Umwelt angepasst werden. Thomas aber spricht von der Regelmäßigkeit natürlicher Ursachen überhaupt: dass Wasser verlässlich Wasser ist, dass chemische Reaktionen auf bestimmte Produkte hinführen. Diese Ordnung liegt jeder Selektion voraus. Gerade die Tauglichkeit der Chemie, um die es hier geht, kann Selektion nicht erklären.`,
              voices: [
                {
                  person: 'feser',
                  role: 'als Philosoph (Thomismus)',
                  text: `Feser betont, dass der fünfte Weg nicht in erster Linie von der Anpassung der Lebewesen handelt, sondern von der Zielgerichtetheit jeder Wirkursache: Eine Ursache bringt verlässlich eine bestimmte Wirkung hervor und „weist" so auf sie hin. Darwins Theorie setzt diese Gesetzmäßigkeit voraus, statt sie zu erklären.`,
                  sources: [{ kind: 'fachliteratur', author: 'Edward Feser', work: 'Five Proofs of the Existence of God', year: '2017', status: 'paraphrase' }],
                },
              ],
              followUps: [
                {
                  id: 'hoechstens-deismus',
                  objection: `Bestenfalls beweist das einen Deismus – irgendeinen Geist hinter den Gesetzen, aber nicht deinen christlichen Gott.`,
                  objectionBy: 'Jerry Coyne',
                  answer: `Da hast du recht, und ich sage es offen: Die Tauglichkeit der Umwelt zeigt einen schöpferischen Geist, der Leben wollte – nicht die Dreieinigkeit. Auch Paulus sagt nur, dass man an der Schöpfung Gottes „ewige Kraft und Gottheit" erkennt (Röm 1,20). Wer dieser Gott ist, zeigt er selbst: in Jesus Christus, seiner Lehre und seiner Auferstehung. Das ist der nächste Schritt im Gespräch – aber er setzt voraus, dass wir den ersten nicht überspringen.`,
                  sources: [{ kind: 'bibel', work: 'Römer', ref: '1,20', quote: `Damit daß Gottes unsichtbares Wesen, das ist seine ewige Kraft und Gottheit, wird ersehen, so man des wahrnimmt, an den Werken, nämlich an der Schöpfung der Welt.`, translation: 'Luther 1912', status: 'verbatim' }],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Welcher Selektionsprozess hat die Eigenschaften des Wassers selbst hervorgebracht?`,
    `Warum baut das Leben auf Kohlenstoff, obwohl die Erdkruste viel mehr Silizium enthält?`,
    `Erklärt der Beobachtungseffekt, warum die Naturgesetze Leben überhaupt erlauben – oder nur, warum wir es sehen?`,
    `Wenn Henderson und Denton ohne religiöses Motiv zu teleologischen Schlüssen kamen – woher stammt dann dieser Eindruck?`,
    `Was würde der Naturalismus über die Chemie unseres Universums vorhersagen, wenn wir sie nicht schon kennten?`,
  ],
  avoid: [
    `„Wasser ist das einzige Molekül mit Anomalien" – andere Stoffe zeigen einzelne Anomalien; das Argument liegt im Ensemble.`,
    `Zahlen erfinden („die Wahrscheinlichkeit für Wasser ist 1 zu 10 hoch 100") – es gibt keine seriöse Rechnung dieser Art.`,
    `Henderson oder Denton als Christen oder Kreationisten ausgeben – Henderson war kein Theist, Denton ist Agnostiker.`,
    `Hiob 38 als „wissenschaftliche Vorhersage" der Dichteanomalie verkaufen – es ist ein poetisches Bild.`,
  ],
  concessions: [
    `Nicht alle Anomalien des Wassers sind biologisch bedeutsam; manche Darstellungen übertreiben.`,
    `Wir kennen nur eine Form von Leben; wie fremdartig Leben sein könnte, ist eine offene Frage der Astrobiologie.`,
    `Das Argument führt zu einem schöpferischen Geist, nicht unmittelbar zum dreieinigen Gott.`,
  ],
  furtherReading: [
    henderson1913,
    denton2017,
    denton1998,
    barnesLewis2016,
    { kind: 'fachliteratur', author: 'John D. Barrow, Frank J. Tipler', work: 'The Anthropic Cosmological Principle', ref: 'Kap. 8 (Biochemie)', year: '1986', status: 'paraphrase', note: 'Ausführliche Diskussion von Hendersons Argument aus säkularer Perspektive.' },
  ],
  difficulty: 2,
  tags: ['Wasser', 'Kohlenstoff', 'Henderson', 'Denton', 'Feinabstimmung', 'Anthropisches Prinzip', 'Teleologie'],
  related: ['feinabstimmung/feinabstimmung-illusion', 'feinabstimmung/anthropisches-prinzip', 'feinabstimmung/multiversum', 'feinabstimmung/leben-haette-sich-angepasst', 'fitness-der-umwelt/alternative-biochemie', 'fitness-der-umwelt/licht-passt-zufall', 'gottesbeweise/hoechstens-deismus'],
};

export default claim;
