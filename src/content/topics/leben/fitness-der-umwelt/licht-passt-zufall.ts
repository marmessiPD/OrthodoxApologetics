import type { Claim, Source } from '../../../schema.ts';

const denton2018: Source = {
  kind: 'fachliteratur',
  author: 'Michael Denton',
  work: 'Children of Light: The Astonishing Properties of Sunlight that Make Life Possible',
  year: '2018',
  quote: `Denton argumentiert, dass mehrere voneinander unabhängige physikalische „Fenster" zusammenfallen: Die Sonne strahlt den Großteil ihrer Energie im sichtbaren und nahen Infrarot ab; die Atmosphäre ist gerade in diesem Bereich durchlässig; flüssiges Wasser ist im sichtbaren Bereich durchsichtig, während es benachbarte Wellenlängen sehr stark absorbiert; und die Photonenenergie dieses Bereichs passt zu den Energien chemischer Bindungen – genug für Photochemie, aber nicht zerstörerisch.`,
  status: 'paraphrase',
  note: 'Denton ist Agnostiker; er spricht von einer teleologischen Ordnung der Natur.',
};

const pressLightman1983: Source = {
  kind: 'wissenschaft',
  author: 'William H. Press, Alan P. Lightman',
  work: '„Dependence of macrophysical phenomena on the values of the fundamental constants", Philosophical Transactions of the Royal Society A 310, S. 323–336',
  year: '1983',
  quote: `Die Autoren leiten grundlegende makroskopische Größen (u. a. typische Sterntemperaturen und chemische Bindungsenergien) aus den Naturkonstanten ab und diskutieren, dass die Photonenenergie an der Oberfläche typischer Sterne in der Größenordnung chemischer Bindungsenergien liegt – ein Zusammentreffen, das an einer Beziehung zwischen Naturkonstanten hängt.`,
  status: 'paraphrase',
  note: 'Genaue Formulierung der Konstantenbeziehung vor Detailzitierung im Original prüfen.',
};

const chen2010: Source = {
  kind: 'wissenschaft',
  author: 'Min Chen u. a.',
  work: '„A Red-Shifted Chlorophyll", Science 329, S. 1318–1319',
  year: '2010',
  quote: `Chlorophyll f absorbiert langwelliger als die bekannten Chlorophylle (im fernen Rot, um etwa 700–750 nm) und erweitert den nutzbaren Bereich der sauerstoffbildenden Photosynthese.`,
  status: 'paraphrase',
};

const kiang2007: Source = {
  kind: 'wissenschaft',
  author: 'Nancy Y. Kiang u. a.',
  work: '„Spectral Signatures of Photosynthesis. II. Coevolution with Other Stars and the Atmosphere on Extrasolar Worlds", Astrobiology 7 (1), S. 252–274',
  year: '2007',
  quote: `Die Autoren modellieren, welche Wellenlängen Photosynthese auf Planeten anderer Sterntypen nutzen könnte; bei roten Zwergsternen käme vermehrt nahes Infrarot in Frage, möglicherweise mit Mehr-Photonen-Mechanismen.`,
  status: 'paraphrase',
};

const watsonLovelock1983: Source = {
  kind: 'wissenschaft',
  author: 'Andrew J. Watson, James E. Lovelock',
  work: '„Biological homeostasis of the global environment: the parable of Daisyworld", Tellus B 35, S. 284–289',
  year: '1983',
  quote: `Ein einfaches Modell mit hellen und dunklen Gänseblümchen, die bei einer optimalen Temperatur am besten wachsen, zeigt, wie Lebewesen die Planetentemperatur über einen großen Bereich stabilisieren könnten.`,
  status: 'paraphrase',
};

const claim: Claim = {
  id: 'licht-passt-zufall',
  title: `„Dass das Sonnenlicht genau für Photosynthese und Sehen passt, ist Zufall."`,
  proponents: [
    { name: 'Richard Dawkins', role: 'Evolutionsbiologe, Oxford', work: 'Climbing Mount Improbable (1996), Kapitel über die Evolution des Auges' },
    { name: 'Victor J. Stenger', role: 'Physiker (1935–2014)', work: 'The Fallacy of Fine-Tuning (2011)' },
    { name: 'Sean Carroll', role: 'Physiker, Johns Hopkins University', work: 'The Big Picture (2016)' },
    { name: 'Nancy Y. Kiang', role: 'Biometeorologin, NASA Goddard Institute for Space Studies', work: 'Kiang u. a., Astrobiology 7 (2007)' },
    { name: 'James Lovelock', role: 'Umweltwissenschaftler (1919–2022)', work: 'Gaia: A New Look at Life on Earth (1979)' },
  ],
  steelman: `Natürlich passt unser Sehen zum Sonnenlicht – die Augen haben sich über Hunderte Millionen Jahre genau an das Licht angepasst, das da war. Wäre die Sonne ein roter Zwerg, sähen Lebewesen im Infrarot, und Pflanzen wären schwarz statt grün; schon heute nutzen Bakterien Licht jenseits von 1000 Nanometern. Die Atmosphäre ist zum großen Teil selbst ein Produkt des Lebens: Den Sauerstoff und die Ozonschicht haben Cyanobakterien erzeugt. Und die oft zitierte Zahl, das sichtbare Licht mache nur „einen Teil in 10 hoch 25" des elektromagnetischen Spektrums aus, ist ein Taschenspielertrick: Das Spektrum hat keine natürliche Skala, und logarithmisch betrachtet ist das sichtbare Fenster gar nicht klein. Kurz: Leben nutzt, was verfügbar ist. Von „Passung" zu reden, verwechselt Ursache und Wirkung.`,
  biblical: {
    summary: `„Gott sprach: Es werde Licht! und es ward Licht" (Gen 1,3) – das erste Schöpfungswort gilt dem Licht. Die Sonne wird in Gen 1,14–18 bewusst nicht beim Namen genannt, sondern als „großes Licht" eingeführt, das Gott an die Feste setzt: Sie ist Geschöpf, nicht Gottheit – im Land des Sonnengottes Re eine revolutionäre Aussage. Ps 19 lässt die Himmel „die Ehre Gottes erzählen", Ps 104,2 nennt Licht Gottes „Kleid". Christus ist „das Licht der Welt" (Joh 8,12) – die geistliche Bedeutung baut auf der leiblichen auf.`,
    detail: `- **Gen 1,3 und 1,14–18:** Licht am ersten Tag, Sonne am vierten – das haben schon Origenes und Basilius bemerkt. Die Reihenfolge ist theologisch: Licht ist Gottes erste Gabe; die Sonne ist sein Werkzeug, nicht seine Quelle.
- **Mal 3,20** (Luther: 4,2): die „Sonne der Gerechtigkeit" – die Kirche bezieht das auf Christus; koptische Kirchen sind nach Osten ausgerichtet, zum Sonnenaufgang als Bild des kommenden Herrn.`,
    sources: [
      { kind: 'bibel', work: '1. Mose', ref: '1,3', quote: `Und Gott sprach: Es werde Licht! und es ward Licht.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Psalmen', ref: '19,2', quote: `Die Himmel erzählen die Ehre Gottes, und die Feste verkündigt seiner Hände Werk.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Psalmen', ref: '104,2', quote: `Licht ist dein Kleid, das du anhast.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '8,12', quote: `Ich bin das Licht der Welt. Wer mir nachfolgt, der wird nicht wandeln in der Finsternis, sondern wird das Licht des Lebens haben.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Das Nizänische Glaubensbekenntnis nennt den Sohn „Licht vom Licht" – Licht ist in der Kirche ein zentrales Bild für Gott. Basilius unterscheidet im *Hexaemeron* das am ersten Tag geschaffene Licht von der Sonne als seinem späteren „Träger"; Augustinus deutet das Licht des ersten Tages auch geistlich als Erleuchtung der vernünftigen Schöpfung. Für die koptische Tradition ist die Sonne ein Geschöpf und Gleichnis: Gebete der Agpeya zur ersten Stunde preisen Christus als das wahre Licht, das jeden Menschen erleuchtet.`,
    sources: [
      { kind: 'konzil', work: 'Glaubensbekenntnis von Nizäa-Konstantinopel', year: '325/381', quote: `… Gott von Gott, Licht vom Licht, wahrer Gott vom wahren Gott …`, status: 'verbatim' },
      { kind: 'kirchenvater', author: 'Basilius der Große', work: 'Hexaemeron', ref: 'Homilie 6,2–3', quote: `Das Licht wurde am ersten Tag geschaffen; die Sonne ist gleichsam das Gefäß, das dieses Licht trägt.`, status: 'paraphrase' },
      { kind: 'liturgie', work: 'Agpeya, Gebet der ersten Stunde', quote: `Die Morgengebete preisen Christus als das wahre Licht, das jeden Menschen erleuchtet, der in die Welt kommt (vgl. Joh 1,9).`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Die physikalischen Fakten sind unstrittig: Die Sonne (Oberflächentemperatur rund 5.800 K) strahlt etwa 40–45 % ihrer Energie im sichtbaren Bereich ab, den Großteil des Restes im nahen Infrarot. Die Atmosphäre ist im sichtbaren Bereich weitgehend durchlässig (das „optische Fenster"), während Ozon das harte UV und Wasserdampf und Kohlendioxid große Teile des Infrarots absorbieren. Flüssiges Wasser hat sein Absorptionsminimum im blau-grünen Bereich und absorbiert UV und Infrarot um viele Größenordnungen stärker. Photonen sichtbaren Lichts (etwa 1,6–3,2 eV) liegen im Bereich chemischer Bindungsenergien. Umstritten ist die Deutung: Denton (2018) sieht darin eine teleologische Koinzidenz, die an den Naturkonstanten hängt (vgl. Press & Lightman 1983); Kritiker betonen die Anpassungsfähigkeit des Lebens (Infrarot-Photosynthese bei Bakterien; mögliche Photosynthese bei roten Zwergen, Kiang u. a. 2007).`,
    detail: `- **Was die Kritiker richtig sehen:** Augen und Photosynthese sind an das verfügbare Licht angepasst. Anoxygene Bakterien nutzen nahes Infrarot bis über 1000 nm. Die Zahl „1 zu 10 hoch 25" hängt von der gewählten Skala ab und sollte nicht verwendet werden.
- **Was sie übersehen:** Das Argument betrifft nicht die Augen, sondern das Zusammenfallen von vier unabhängigen physikalischen Gegebenheiten: Sternspektrum, atmosphärisches Fenster, Wasserfenster und photochemischer Energiebereich. Diese Fenster entstehen nicht durch Anpassung.
- **Sauerstoffbildende Photosynthese** – Grundlage für Sauerstoffatmosphäre und damit für energiereiches, großes Leben – ist bisher nur bis etwa 750 nm bekannt (Chlorophyll d und f).`,
    sources: [denton2018, pressLightman1983, chen2010, kiang2007],
  },
  quickAnswer: `Augen passen sich dem Licht an – aber Licht, Luft und Wasser passen sich niemandem an. Erstaunlich ist, dass vier unabhängige physikalische Tatsachen zusammenfallen: Die Sonne strahlt am stärksten im sichtbaren Bereich, die Atmosphäre ist genau dort durchlässig, Wasser ist genau dort durchsichtig, und die Energie dieses Lichts reicht genau für Photochemie, ohne Moleküle zu zerstören. Ultraviolett zerstört, Infrarot wärmt nur. Dass sich diese Fenster überlappen, hängt an den Naturkonstanten – und ohne diese Überlappung gäbe es weder Photosynthese noch Sauerstoff noch Sehen.`,
  keyPoints: [
    `**Vier Fenster, ein Ort:** Sonnenspektrum, atmosphärisches Fenster, Wasserfenster und photochemischer Energiebereich überlappen sich im sichtbaren Licht.`,
    `**Anpassung erklärt die Augen, nicht die Fenster:** Selektion kann Augen an Licht anpassen, aber nicht bestimmen, welches Licht durch Luft und Wasser dringt.`,
    `**Energie muss passen:** Photonen um 2 eV regen Moleküle an, ohne sie zu zerbrechen; UV- und Röntgenstrahlung zerstören, Infrarot und Radiowellen wärmen nur.`,
    `**Sauerstoff braucht genug Energie:** Sauerstoffbildende Photosynthese ist nur bis etwa 750 nm bekannt; ohne sie keine Sauerstoffatmosphäre und kaum großes, aktives Leben.`,
    `**Ehrlich bleiben:** Die Zahl „1 zu 10 hoch 25" nicht verwenden; Infrarot-Photosynthese bei Bakterien anerkennen; das Argument beruht auf der Überlappung, nicht auf einer Prozentzahl.`,
    `**Die Bibel entgöttert die Sonne:** Gen 1 nennt sie nur „großes Licht" – im Land des Sonnengottes Re eine Befreiung, die die Natur der Erforschung öffnet.`,
  ],
  argument: {
    name: 'Die Konvergenz der Lichtfenster',
    summary: 'Ein Argument aus dem Zusammentreffen unabhängiger physikalischer Gegebenheiten.',
    premises: [
      {
        text: `P1: Sonnenspektrum, Durchlässigkeit der Atmosphäre, Durchsichtigkeit des Wassers und die Energie, die Photochemie ermöglicht, sind physikalisch voneinander unabhängige Größen.`,
        support: `Sie hängen an verschiedenen Mechanismen: Sterntemperatur, Molekülspektren von Gasen, elektronische und Schwingungsanregungen des Wassers, Bindungsenergien.`,
        sources: [denton2018],
      },
      {
        text: `P2: Diese vier Bereiche überlappen sich im schmalen Band des sichtbaren und nahen Infrarot-Lichts.`,
        support: `Lehrbuchphysik der Strahlung und Absorptionsspektren; Denton fasst sie zusammen.`,
        sources: [denton2018],
      },
      {
        text: `P3: Diese Überlappung ist keine Folge biologischer Anpassung, sondern hängt an Beziehungen zwischen Naturkonstanten.`,
        support: `Press & Lightman (1983): Die Photonenenergie typischer Sternoberflächen liegt in der Größenordnung chemischer Bindungsenergien – abhängig von den Konstanten.`,
        sources: [pressLightman1983],
      },
    ],
    conclusion: `Die Passung von Licht und Leben ist keine bloße Anpassung des Lebens an Zufälliges, sondern Teil einer Ordnung der Naturgesetze, die auf Leben hin angelegt erscheint – was ein vernünftiger Schöpfer erwarten lässt.`,
  },
  voices: [
    {
      person: 'guillermo-gonzalez',
      role: 'als Astronom',
      text: `Gonzalez betont, dass sonnenähnliche Sterne für komplexes Leben besonders günstig sind: Rote Zwerge leuchten schwächer und vorwiegend im Infrarot; ihre bewohnbare Zone liegt so nah, dass Planeten durch Gezeitenkräfte meist gebunden sind (eine Seite ewig Tag); zudem sind viele rote Zwerge in ihrer Jugend von heftigen Strahlungsausbrüchen geprägt. Heißere Sterne sind kurzlebig und strahlen viel zerstörerisches UV. Die Sonne liegt in einem günstigen Bereich – und ihr Licht ist zugleich ideal, um das Universum zu beobachten.`,
      sources: [{ kind: 'fachliteratur', author: 'Guillermo Gonzalez, Jay W. Richards', work: 'The Privileged Planet', year: '2004', status: 'paraphrase' }],
    },
    {
      person: 'robin-collins',
      role: 'als Philosoph der Feinabstimmung',
      text: `Collins gehört zu den gründlichsten Vertretern des Feinabstimmungsarguments. Er unterscheidet die Feinabstimmung für Leben von einer „Feinabstimmung für Entdeckbarkeit": Die Naturgesetze scheinen nicht nur Leben zu erlauben, sondern auch, dass dieses Leben die Welt erforschen kann. Das sichtbare Licht ist dafür ein Paradebeispiel: Es ermöglicht hochauflösendes Sehen mit kleinen Augen, Astronomie durch eine durchsichtige Atmosphäre und Photochemie, die Leben antreibt.`,
      sources: [{ kind: 'fachliteratur', author: 'Robin Collins', work: '„The Teleological Argument: An Exploration of the Fine-Tuning of the Universe", in: W. L. Craig, J. P. Moreland (Hg.), The Blackwell Companion to Natural Theology', year: '2009', status: 'paraphrase' }],
    },
    {
      person: 'basilius',
      role: 'als Ausleger des Sechstagewerks',
      text: `Basilius bemerkte schon im 4. Jahrhundert, dass Gen 1 das Licht am ersten Tag und die Sonne erst am vierten Tag nennt. Er deutete das so, dass Licht als solches nicht mit der Sonne identisch ist; die Sonne ist gleichsam das Gefäß, das Gott dem Licht gibt. Wichtiger als diese Naturphilosophie ist sein Anliegen: Die Sonne ist ein Geschöpf, kein Gott – und gerade so ein Zeichen für die Weisheit dessen, der sie gemacht hat.`,
      sources: [{ kind: 'kirchenvater', author: 'Basilius der Große', work: 'Hexaemeron', ref: 'Homilie 6', status: 'paraphrase' }],
    },
    {
      person: 'augustinus',
      role: 'als Ausleger von Gen 1',
      text: `Augustinus fragte, wie es Tage ohne Sonne geben könne, und schlug neben anderen Deutungen vor, das Licht des ersten Tages auch als geistiges Licht zu verstehen – die Erleuchtung der vernünftigen Geschöpfe, die Gottes Werk erkennen. Er mahnte zugleich, Christen sollten die Schrift nicht gegen gesichertes Naturwissen ausspielen, um sich nicht vor Nichtchristen lächerlich zu machen.`,
      sources: [{ kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'De Genesi ad litteram', ref: 'I,19,39 (Mahnung); IV (Schöpfungstage)', status: 'paraphrase' }],
    },
    {
      person: 'stanley-jaki',
      role: 'als Wissenschaftshistoriker',
      text: `Jaki argumentierte, dass die moderne Naturwissenschaft dort entstand, wo die Natur als rationale Schöpfung eines persönlichen Gottes verstanden wurde: nicht göttlich und daher erforschbar, nicht willkürlich und daher gesetzmäßig. Die biblische Entgötterung von Sonne, Mond und Sternen sei eine Voraussetzung dafür gewesen, Himmelskörper zu messen statt sie anzubeten.`,
      sources: [{ kind: 'fachliteratur', author: 'Stanley L. Jaki', work: 'The Road of Science and the Ways to God', year: '1978', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'augen-angepasst',
      objection: `Natürlich passt unser Sehen zum Sonnenlicht. Augen haben sich an das verfügbare Licht angepasst – nicht umgekehrt.`,
      objectionBy: 'Richard Dawkins',
      targetsPremise: 3,
      answer: `Völlig richtig, die Augen haben sich angepasst. Aber das Argument handelt nicht von den Augen, sondern von vier Fenstern, die sich nicht anpassen: Die Sonne strahlt am stärksten im sichtbaren Bereich, die Atmosphäre lässt genau diesen durch, Wasser ist genau dort durchsichtig, und genau dort reicht die Energie für Photochemie, ohne Moleküle zu zerstören. Augen können sich nur an Licht anpassen, das ankommt und brauchbar ist – und dass es das gibt, ist das Erstaunliche.`,
      sources: [denton2018],
      questionsBack: [`Welcher Anpassungsprozess hat das Absorptionsspektrum des Wassers festgelegt?`],
      followUps: [
        {
          id: 'sterntemperatur-zufall',
          objection: `Das Sonnenspektrum ist eben das eines 5.800-Kelvin-Sterns. Rote Zwerge leuchten anders – unsere Sonne ist nur ein Zufall.`,
          objectionBy: 'Victor Stenger',
          targetsPremise: 3,
          answer: `Dass typische Sterne überhaupt Licht im Energiebereich chemischer Bindungen ausstrahlen, ist kein Zufall unserer Sonne, sondern hängt an Beziehungen zwischen den Naturkonstanten – das haben Press und Lightman 1983 gezeigt. Und rote Zwerge sind für komplexes Leben aus anderen Gründen schwierig: Ihre Planeten sind meist gezeitengebunden, und viele dieser Sterne schleudern in ihrer Jugend heftige Strahlungsausbrüche aus.`,
          sources: [pressLightman1983],
          followUps: [
            {
              id: 'infrarot-photosynthese',
              objection: `Auf Planeten roter Zwerge könnte Photosynthese im Infrarot funktionieren. Schon heute nutzen Bakterien Licht jenseits von 1000 Nanometern.`,
              objectionBy: 'Nancy Kiang',
              targetsPremise: 2,
              answer: `Das stimmt, und es ist faszinierend. Aber diese Bakterien betreiben eine Photosynthese, die keinen Sauerstoff erzeugt – sie spalten kein Wasser. Die sauerstoffbildende Photosynthese, auf der unsere Sauerstoffatmosphäre beruht, ist bisher nur bis etwa 750 nm bekannt, weil die Spaltung von Wasser energiereiche Photonen braucht. Ob Mehr-Photonen-Mechanismen bei roten Zwergen funktionieren, ist offen; das Fenster bleibt jedenfalls schmal.`,
              sources: [chen2010, kiang2007],
              followUps: [
                {
                  id: 'leben-ohne-sauerstoff',
                  objection: `Dann gibt es dort eben Leben ohne Sauerstoff. Mikroben kommen gut ohne aus.`,
                  objectionBy: 'Nancy Kiang',
                  targetsPremise: 2,
                  answer: `Für Mikroben: ja. Aber großes, aktives, denkendes Leben braucht einen energiereichen Stoffwechsel. Die Atmung mit Sauerstoff liefert aus einem Zuckermolekül etwa 30 ATP, die Gärung nur 2. Und ohne Sauerstoff gibt es kein Feuer – also keine Metallurgie, keine Technik, keine Teleskope. Michael Denton hat das in *Fire-Maker* (2016) ausführlich dargelegt.`,
                  sources: [{ kind: 'fachliteratur', author: 'Michael Denton', work: 'Fire-Maker: How Humans Were Designed to Harness Fire and Transform Our Planet', year: '2016', status: 'paraphrase' }],
                  followUps: [
                    {
                      id: 'anthropozentrisch-definiert',
                      objection: `Du definierst „Leben" einfach so, dass es aussieht wie wir. Das ist anthropozentrisch.`,
                      objectionBy: 'Sean Carroll',
                      answer: `Ich behaupte nicht, dass es nirgends fremdartiges mikrobielles Leben geben kann – das ist eine offene Frage. Ich sage: Die Bedingungen für komplexe, denkende, technikfähige Beobachter sind eng, und sie sind hier alle zugleich erfüllt. Gerade die Lebewesen, die nach dem Sinn des Universums fragen können, sind auf diese Überlappung angewiesen. Das ist keine Definition, sondern eine Beobachtung.`,
                      questionsBack: [`Kennst du einen Weg zu Technik und Astronomie ohne Sauerstoff und Feuer?`],
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
      id: 'spektrum-trick',
      objection: `Die Behauptung, sichtbares Licht sei nur ein Teil in 10 hoch 25 des Spektrums, ist ein Taschenspielertrick. Das Spektrum hat keine natürliche Skala.`,
      objectionBy: 'Victor Stenger',
      targetsPremise: 2,
      answer: `Da gebe ich dir recht – diese Zahl hängt von der gewählten Skala ab, und ich verwende sie nicht. Mein Argument ist ein anderes: Es kommt nicht auf einen Prozentsatz einer abstrakten Achse an, sondern darauf, dass vier physikalisch unabhängige Bereiche zusammenfallen. Das gilt unabhängig davon, ob du linear oder logarithmisch misst.`,
      followUps: [
        {
          id: 'wasserfenster-molekuelphysik',
          objection: `Die Durchsichtigkeit des Wassers ist schlicht Molekülphysik: Elektronenanregungen im UV, Schwingungen im Infrarot, dazwischen eine Lücke. Daran ist nichts Geheimnisvolles.`,
          objectionBy: 'Victor Stenger',
          targetsPremise: 1,
          answer: `Genau – und gerade weil es Physik ist, entsteht es nicht durch Anpassung. Die Frage ist, warum diese Lücke ausgerechnet dort liegt, wo die Sonne am stärksten strahlt und wo Photonen gerade die richtige Energie für Chemie haben. Drei verschiedene Mechanismen treffen sich am selben Ort. Dass man jeden einzeln erklären kann, erklärt nicht ihr Zusammentreffen.`,
          followUps: [
            {
              id: 'augen-im-wasser',
              objection: `Augen sind im Wasser entstanden. Natürlich nutzen sie das Wasserfenster.`,
              objectionBy: 'Jerry Coyne',
              targetsPremise: 3,
              answer: `Das erklärt, warum Augen das Wasserfenster nutzen – nicht, warum das Wasserfenster mit dem Sonnenmaximum und dem Bereich photochemischer Energien zusammenfällt. Ohne diese Überlappung gäbe es im Wasser kein brauchbares Licht für Augen und Photosynthese. Anpassung setzt die Fenster voraus, sie erzeugt sie nicht.`,
              followUps: [
                {
                  id: 'stichprobe-eins',
                  objection: `Du hast eine Stichprobe von einem Planeten. Daraus kannst du keine Wahrscheinlichkeiten ableiten.`,
                  objectionBy: 'Sean Carroll',
                  answer: `Ich mache keine Statistik über Planeten. Die Fenster sind Eigenschaften der Naturgesetze – das Absorptionsspektrum des Wassers ist im ganzen Universum dasselbe, ebenso der Zusammenhang zwischen Sterntemperatur und Bindungsenergien. Eine einzige gründliche Untersuchung der Gesetze genügt, um diese Eigenschaft zu erkennen – so wie man nicht viele Wassermoleküle braucht, um zu wissen, wie eines gebaut ist.`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'atmosphaere-vom-leben',
      objection: `Die Atmosphäre ist großenteils ein Produkt des Lebens: Sauerstoff und Ozonschicht haben Cyanobakterien erzeugt. Kein Wunder, dass sie passt.`,
      objectionBy: 'James Lovelock',
      targetsPremise: 1,
      answer: `Teilweise richtig – und eindrucksvoll: Leben hat Sauerstoff erzeugt, aus dem sich die Ozonschicht bildet, die dann das Leben vor hartem UV schützt. Aber dass Stickstoff, Sauerstoff und Wasserdampf sichtbares Licht durchlassen, und dass Ozon gerade das zerstörerische UV abfängt, sind Eigenschaften der Moleküle, nicht Leistungen der Bakterien. Das Leben hat die Bausteine angeordnet – ihre Physik hat es vorgefunden.`,
      followUps: [
        {
          id: 'gaia-ohne-gott',
          objection: `Gaia zeigt Selbstregulation ohne Designer – reine Rückkopplung, Kybernetik.`,
          objectionBy: 'James Lovelock',
          answer: `Rückkopplungen sind wunderbar – sie sind genau die Art Ordnung, die ein Schöpfer in die Natur legen kann. Interessant ist aber: Darwinisten wie Dawkins und Doolittle kritisierten Gaia gerade als teleologisch, weil Planeten sich nicht fortpflanzen und es keine Selektion zwischen ihnen gibt. Eine planetare Selbstregulation passt schlecht in ein rein darwinsches Schema.`,
          sources: [{ kind: 'gegner', author: 'Richard Dawkins', work: 'The Extended Phenotype', year: '1982', status: 'paraphrase', quote: `Dawkins kritisiert die Gaia-Hypothese: Für die Evolution einer planetaren Regulation fehle eine Selektion zwischen Planeten.` }],
          followUps: [
            {
              id: 'daisyworld',
              objection: `Das Daisyworld-Modell von Watson und Lovelock zeigt, wie Regulation ganz ohne Selektion zwischen Planeten entsteht.`,
              objectionBy: 'Timothy Lenton',
              answer: `Daisyworld ist elegant. Aber es setzt Lebewesen voraus, deren Wachstum ein Temperaturoptimum hat und deren Farbe das Klima beeinflusst – und es funktioniert nur in bestimmten Parameterbereichen. Die Ordnungsfrage verschiebt sich damit auf die Eigenschaften und Parameter, nicht weg von ihnen. Regulation ohne Planer zu beschreiben heißt nicht, die Ordnung zu erklären, die sie möglich macht.`,
              sources: [watsonLovelock1983],
              followUps: [
                {
                  id: 'immer-design',
                  objection: `Du siehst überall Design – ob Regulation oder Zufall, alles bestätigt dich. Deine Position ist nicht widerlegbar.`,
                  objectionBy: 'Sean Carroll',
                  answer: `Doch, sie ist es. Läge das Sonnenmaximum dort, wo Wasser undurchsichtig ist, oder hätte sichtbares Licht so viel Energie wie Röntgenstrahlen, wäre das Argument erledigt. Die Physik hätte anders ausfallen können – sie ist so ausgefallen, wie ein Schöpfer, der Leben und Erkenntnis will, es erwarten lässt. Das ist eine riskante Erwartung, die die Daten hätten enttäuschen können.`,
                  questionsBack: [`Welche Beobachtung würde dich umgekehrt davon überzeugen, dass die Naturgesetze auf Leben hin geordnet sind?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'licht-vor-sonne',
      objection: `Die Bibel lässt das Licht am ersten Tag entstehen und die Sonne erst am vierten. Das zeigt, wie unwissenschaftlich sie über Licht redet.`,
      objectionBy: 'Richard Dawkins',
      answer: `Das haben die Väter selbst bemerkt – Origenes, Basilius und Augustinus diskutierten es lange vor der modernen Physik. Die Reihenfolge ist theologisch gewollt: Licht ist Gottes erste Gabe, die Sonne nur sein Werkzeug. Im Land des Sonnengottes Re nennt Gen 1 die Sonne nicht einmal beim Namen, sondern „das große Licht", das Gott an den Himmel setzt. Das ist eine Entgötterung der Natur – und eine Voraussetzung für Wissenschaft.`,
      followUps: [
        {
          id: 'basilius-vorwissenschaftlich',
          objection: `Basilius' Idee, Licht könne ohne Sonne existieren, ist vorwissenschaftlich.`,
          objectionBy: 'Jerry Coyne',
          answer: `Seine Physik war vorwissenschaftlich, das ist klar. Aber die Grundunterscheidung ist nicht absurd: Licht ist nicht dasselbe wie die Sonne, und es gab im Universum Licht, lange bevor die Sonne entstand. Ich behaupte damit nicht, Genesis habe moderne Kosmologie vorweggenommen – ich zeige nur, dass der Vorwurf der Absurdität nicht trägt.`,
          followUps: [
            {
              id: 'konkordismus',
              objection: `Jetzt betreibst du Konkordismus – du biegst den Text so lange, bis er zur Physik passt.`,
              objectionBy: 'Jerry Coyne',
              answer: `Nein. Die alexandrinische Tradition liest den wörtlichen und den geistlichen Sinn, und der Hauptzweck von Gen 1 ist theologisch: Gott ist Schöpfer des Lichts, die Gestirne sind Geschöpfe. Ich lese keine Hintergrundstrahlung in den Text hinein. Augustinus mahnte schon, die Schrift nicht gegen gesichertes Wissen auszuspielen – und ebenso wenig, sie in jede neue Theorie hineinzuzwängen.`,
              sources: [{ kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'De Genesi ad litteram', ref: 'I,19,39', status: 'paraphrase', quote: `Es ist schändlich, wenn ein Christ über Naturdinge Unsinn redet und sich dabei auf die Schrift beruft; Ungläubige lachen darüber, und die Schrift wird verachtet.` }],
              followUps: [
                {
                  id: 'entgoetterung-relevant',
                  objection: `Warum sollte eine alte Polemik gegen Sonnenkulte heute noch relevant sein?`,
                  objectionBy: 'Sean Carroll',
                  answer: `Weil sie die Haltung begründet, mit der wir Wissenschaft treiben: Eine Sonne, die Geschöpf und kein Gott ist, darf man vermessen, ihr Spektrum zerlegen, ihre Physik erforschen. Wissenschaftshistoriker wie Stanley Jaki sahen in dieser Entgötterung eine Wurzel der modernen Naturwissenschaft. Und für Christen bleibt die Sonne ein Gleichnis: Koptische Kirchen sind nach Osten gebaut, zum Aufgang der „Sonne der Gerechtigkeit" – Christus.`,
                  sources: [{ kind: 'fachliteratur', author: 'Stanley L. Jaki', work: 'The Road of Science and the Ways to God', year: '1978', status: 'paraphrase' }],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Welcher Anpassungsprozess hat bestimmt, welches Licht durch Luft und Wasser dringt?`,
    `Warum fallen Sonnenmaximum, atmosphärisches Fenster, Wasserfenster und photochemischer Energiebereich zusammen?`,
    `Kennst du sauerstoffbildende Photosynthese jenseits von etwa 750 nm?`,
    `Wie sollte Technik ohne Sauerstoff und Feuer entstehen?`,
    `Welche Beobachtung würde dich überzeugen, dass die Naturgesetze auf Leben hin geordnet sind?`,
  ],
  avoid: [
    `Die Zahl „sichtbares Licht = 1 Teil in 10 hoch 25 des Spektrums" verwenden – sie hängt von der gewählten Skala ab und ist leicht angreifbar.`,
    `Behaupten, Leben sei außerhalb des sichtbaren Lichts unmöglich – Bakterien nutzen nahes Infrarot.`,
    `Gen 1,3 als Vorhersage der kosmischen Hintergrundstrahlung oder des Urknalls verkaufen – das ist Konkordismus.`,
  ],
  concessions: [
    `Augen und Photosynthese sind an das verfügbare Licht angepasst – das ist unstrittig.`,
    `Ob auf Planeten roter Zwerge komplexes Leben möglich ist, ist eine offene Forschungsfrage.`,
    `Eine exakte Wahrscheinlichkeit für die Überlappung der Fenster kann niemand angeben.`,
  ],
  furtherReading: [
    denton2018,
    { kind: 'fachliteratur', author: 'Guillermo Gonzalez, Jay W. Richards', work: 'The Privileged Planet', year: '2004', status: 'paraphrase' },
    pressLightman1983,
    { kind: 'fachliteratur', author: 'Michael Denton', work: 'Fire-Maker', year: '2016', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Sonnenlicht', 'Photosynthese', 'Sehen', 'Atmosphärisches Fenster', 'Denton', 'Feinabstimmung', 'Gen 1'],
  related: ['fitness-der-umwelt/wasser-kohlenstoff-zufall', 'fitness-der-umwelt/alternative-biochemie', 'feinabstimmung/feinabstimmung-illusion', 'astrobiologie/erde-durchschnittlich', 'genesis/genesis-1-und-2-widerspruch', 'kosmologie/genesis-vs-urknall'],
};

export default claim;
