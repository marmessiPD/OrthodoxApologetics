import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'leben-haette-sich-angepasst',
  title: `„Leben hätte sich auch an andere Bedingungen angepasst."`,
  proponents: [
    { name: 'Victor J. Stenger (†2014)', role: 'Teilchenphysiker', work: 'The Fallacy of Fine-Tuning (2011) – Kritik am „Leben, wie wir es kennen"' },
    { name: 'Roni Harnik, Graham Kribs & Gilad Perez', role: 'Teilchenphysiker', work: '„A Universe Without Weak Interactions", Physical Review D 74 (2006)' },
    { name: 'Carl Sagan (†1996)', role: 'Astronom, Cornell', work: 'The Cosmic Connection (1973) – Begriff „Kohlenstoff-Chauvinismus"' },
    { name: 'Sean Carroll', role: 'Theoretischer Physiker', work: 'Debatte mit W. L. Craig (2014)' },
  ],
  steelman: `Feinabstimmungs-Argumente leiden an mangelnder Fantasie. Wir kennen nur eine Form von Leben – kohlenstoffbasiert, wasserabhängig – und erklären sie zum Maßstab. Doch schon auf der Erde leben Extremophile in kochenden Quellen, in Säure und unter tonnenschwerem Druck. Die Evolution ist ein ungeheuer flexibler Optimierer: In einem Universum mit anderen Konstanten hätte sie andere Lösungen gefunden – vielleicht Leben auf Siliziumbasis, in Plasmen oder auf Neutronensternen. Physiker haben sogar ein Universum ganz ohne schwache Kernkraft konstruiert, das trotzdem Sterne und Chemie hat. Zu sagen, ohne genau unsere Konstanten gäbe es kein Leben, ist „Kohlenstoff-Chauvinismus", wie Carl Sagan es nannte.`,
  biblical: {
    summary: `Die Bibel staunt über die Vielfalt des Lebens und schreibt der Schöpfung selbst eine von Gott verliehene Fruchtbarkeit zu: „Die Erde bringe hervor …" (Gen 1,11.24). Leben ist bei Gott nicht auf eine einzige Form festgelegt. Aber die Schrift verankert diese Fruchtbarkeit in Gottes Wort und Ordnung – nicht in einem Zufall, der unter beliebigen Bedingungen gelingt. Die Frage der Feinabstimmung betrifft nicht die *Formen* des Lebens, sondern die *Voraussetzungen* jeder Form.`,
    detail: `- **Gen 1,11.20.24:** Gott gibt Erde und Wasser den Auftrag, Leben hervorzubringen – die Schöpfung wird zur Mitwirkenden.
- **Ps 104,24:** „HERR, wie sind deine Werke so groß und viel! Du hast sie alle weislich geordnet."
- **Hiob 38–39:** Gottes Rede über die Vielfalt der Tiere – Leben in Wüste, Gebirge und Meer.`,
    sources: [
      { kind: 'bibel', work: '1. Mose', ref: '1,11', quote: `Und Gott sprach: Es lasse die Erde aufgehen Gras und Kraut, das sich besame, und fruchtbare Bäume …`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Psalm', ref: '104,24', quote: `HERR, wie sind deine Werke so groß und viel! Du hast sie alle weislich geordnet, und die Erde ist voll deiner Güter.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Der hl. Basilius deutet das Wort „Die Erde bringe hervor" (Gen 1,24) als bleibendes Gesetz: Der kurze Befehl Gottes wurde zu einem großen Naturgesetz, das bis heute wirkt. Leben entsteht in der Ordnung, die Gottes Wort gesetzt hat – nicht trotz ihrer und nicht unabhängig von ihr.`,
    detail: `Basilius vergleicht Gottes Schöpferwort mit einem Kreisel, der, einmal angestoßen, seine Bewegung fortsetzt: Die Natur erhielt mit dem Befehl die Kraft, sich fortzupflanzen (Hexaemeron 5,10; 9,2). Das ist ein frühes Bild für Naturgesetze, die Gott gibt und erhält.`,
    sources: [
      { kind: 'kirchenvater', author: 'Basilius der Große', work: 'Hexaemeron', ref: 'Homilie 5,10', year: 'ca. 370', quote: `Dieser kurze Befehl wurde sogleich zu einem großen Naturgesetz, das der Erde für alle kommenden Zeiten die Kraft zum Hervorbringen gab.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Die Fachliteratur unterscheidet zwischen Anpassung *an Umweltbedingungen* (die Evolution leistet das beeindruckend) und den *physikalischen Voraussetzungen* jeder Form komplexer Organisation. In den meisten untersuchten alternativen Parameterbereichen entstehen keine stabilen Atome, keine schweren Elemente, keine langlebigen Sterne oder keine Strukturen – oder das Universum kollabiert bzw. zerstreut sich zu schnell. Gleichzeitig gibt es ernsthafte Arbeiten, die einzelne Feinabstimmungsbehauptungen relativieren (Harnik u. a. 2006; Adams 2019).`,
    detail: `- **Extremophile:** Alle bekannten Extremophile nutzen dieselbe Biochemie wie wir: Kohlenstoff, Wasser, DNA/RNA, Proteine. Sie belegen Anpassung an Umwelten, nicht an andere Naturgesetze.
- **Universum ohne schwache Kraft** (Harnik, Kribs & Perez, *Phys. Rev. D* 74, 035006, 2006): Ein kreatives Gedankenexperiment; es erfordert die Nachjustierung anderer Größen (etwa des Baryon-Photon-Verhältnisses), sodass die Feinabstimmung nicht verschwindet, sondern sich verlagert. Kritiker wie Clavelli & White (2006) haben zudem Probleme bei der Sternentwicklung in einem solchen Universum benannt.
- **Barnes:** Für „Leben, wie wir es nicht kennen" braucht es mindestens Informationsspeicherung, Energiefluss und Zeit. In vielen alternativen Universen fehlt eine dieser Voraussetzungen grundsätzlich.`,
    sources: [
      { kind: 'wissenschaft', author: 'Roni Harnik, Graham D. Kribs & Gilad Perez', work: '„A Universe Without Weak Interactions", Physical Review D 74, 035006', year: '2006', quote: `Konstruktion eines Universums ohne schwache Wechselwirkung, in dem bei angepassten anderen Parametern Urknall-Nukleosynthese, Sternentstehung und Chemie möglich sind.`, status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'Luke A. Barnes', work: '„The Fine-Tuning of the Universe for Intelligent Life", PASA 29', year: '2012', quote: `Die Frage ist nicht „Leben, wie wir es kennen", sondern ob überhaupt komplexe, informationsverarbeitende Strukturen möglich sind; in den meisten alternativen Universen nicht.`, status: 'paraphrase' },
      { kind: 'gegner', author: 'Carl Sagan', work: 'The Cosmic Connection', year: '1973', quote: `„Kohlenstoff-Chauvinismus": die Annahme, Leben müsse überall auf Kohlenstoff beruhen.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Die Evolution passt Leben an Umweltbedingungen an – aber nur innerhalb der Naturgesetze. An das Fehlen von Chemie kann sich nichts anpassen. In den meisten alternativen Universen gäbe es keine stabilen Atome, keine Sterne oder keine Zeit, damit irgendetwas entsteht: nur Wasserstoffgas, nur Schwarze Löcher oder ein Universum, das nach Sekundenbruchteilen wieder kollabiert. Ohne Bausteine gibt es kein Leben irgendeiner Art – nicht nur keines „wie wir es kennen".`,
  keyPoints: [
    `**Anpassung braucht einen Rahmen:** Evolution wirkt innerhalb von Physik und Chemie. Wo es keine Chemie gibt, gibt es nichts, was sich anpassen könnte.`,
    `**Es geht um Bausteine, nicht um Formen:** Feinabstimmung betrifft stabile Atome, schwere Elemente, Sterne, Strukturen und Zeit – die Voraussetzung jeder denkbaren Lebensform.`,
    `**Extremophile bestätigen das:** Sie nutzen alle dieselbe Kohlenstoff-Wasser-Biochemie.`,
    `**Silizium hilft nicht:** Auch Silizium wird in Sternen erbrütet und braucht dieselbe Feinabstimmung; seine Chemie ist zudem viel ärmer.`,
    `**Ehrlich:** Einzelne Gegenbeispiele (Universum ohne schwache Kraft) sind ernst zu nehmen – sie verlagern die Feinabstimmung aber meist auf andere Parameter.`,
  ],
  voices: [
    {
      person: 'luke-barnes',
      role: 'als Astrophysiker',
      text: `Barnes hat dem Vorwurf des „Kohlenstoff-Chauvinismus" ausdrücklich geantwortet: Die meisten Feinabstimmungsbefunde beziehen sich gar nicht auf Kohlenstoff oder Wasser, sondern auf viel grundlegendere Dinge – ob es überhaupt stabile Atome, Chemie, Sterne oder gebundene Strukturen gibt. Ein Universum, das nur aus Wasserstoff besteht oder das sich nach Sekundenbruchteilen wieder zusammenzieht, ist nicht für „andere" Lebensformen geeignet, sondern für gar keine. Leben irgendeiner Art braucht mindestens die Fähigkeit, Information zu speichern, Energie umzusetzen und über lange Zeiträume zu bestehen.`,
      sources: [{ kind: 'wissenschaft', author: 'Luke A. Barnes & Geraint F. Lewis', work: 'A Fortunate Universe', year: '2016', quote: `In den meisten alternativen Universen gibt es kein Leben irgendeiner Art, weil die physikalischen Voraussetzungen für komplexe Strukturen fehlen.`, status: 'paraphrase' }],
    },
    {
      person: 'james-tour',
      role: 'als synthetischer Chemiker',
      text: `Tour weist aus der Laborpraxis darauf hin, wie anspruchsvoll schon unsere eigene Chemie des Lebens ist: Selbst unter idealen Bedingungen und mit gezielter Steuerung gelingt es nicht, die Bausteine des Lebens ungelenkt zu funktionierenden Systemen zusammenzusetzen. Wer behauptet, Leben würde unter beliebigen anderen physikalischen Bedingungen „schon irgendwie" entstehen, unterschätzt, wie präzise die chemischen Voraussetzungen sein müssen – und überschätzt, was ungesteuerte Prozesse leisten.`,
      sources: [{ kind: 'wissenschaft', author: 'James M. Tour', work: '„Time Out", Inference: International Review of Science 4 (4)', year: '2019', quote: `Die Synthese der Bausteine des Lebens und ihre Organisation zu Funktionssystemen ist chemisch extrem anspruchsvoll und ohne Steuerung bisher nicht gelungen.`, status: 'paraphrase' }],
    },
    {
      person: 'polkinghorne',
      role: 'als Physiker',
      text: `Polkinghorne beschreibt das Universum als von Anfang an mit einer erstaunlichen Fruchtbarkeit ausgestattet: Die Gesetze der Physik sind so beschaffen, dass aus einem einfachen Anfangszustand über Milliarden Jahre Sterne, schwere Elemente, Planeten und schließlich Leben hervorgehen können. Diese Fruchtbarkeit ist nicht selbstverständlich; sie hängt an Gesetzen von ganz besonderer Art. Leben passt sich den Bedingungen an – aber dass es überhaupt Bedingungen gibt, unter denen es entstehen kann, ist der eigentliche Befund.`,
      sources: [{ kind: 'fachliteratur', author: 'John Polkinghorne', work: 'Belief in God in an Age of Science', year: '1998', quote: `Die Fruchtbarkeit des Universums hängt an feinabgestimmten Gesetzen; sie ist ein Hinweis auf einen Schöpfer, der der Welt die Fähigkeit gibt, sich selbst zu entfalten.`, status: 'paraphrase' }],
    },
    {
      person: 'basilius',
      role: 'als Ausleger von „Die Erde bringe hervor"',
      text: `Für Basilius ist die Fähigkeit der Erde, Leben hervorzubringen, keine Eigenmacht der Materie, sondern ein Geschenk des Schöpferworts, das als Naturgesetz fortwirkt. Die Vielfalt des Lebens ist groß, aber sie entfaltet sich in der Ordnung, die Gott gesetzt hat. Der moderne Einwand verwechselt diese von Gott verliehene Fruchtbarkeit mit einer Allmacht des Zufalls, die unter beliebigen Bedingungen gelänge.`,
      sources: [{ kind: 'kirchenvater', author: 'Basilius der Große', work: 'Hexaemeron', ref: 'Homilie 5,10; 9,2', year: 'ca. 370', quote: `Das Wort „Die Erde bringe hervor" ist ein bleibendes Gesetz, das der Natur ihre Fruchtbarkeit verleiht.`, status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'extremophile',
      objection: `Extremophile leben in kochendem Wasser, in Säure und im ewigen Eis. Leben ist unglaublich anpassungsfähig – es hätte auch andere Bedingungen gemeistert.`,
      objectionBy: 'Neil deGrasse Tyson (populäre Fassung)',
      answer: `Extremophile sind faszinierend – aber sie alle verwenden dieselbe Biochemie wie wir: Kohlenstoff, Wasser, DNA, Proteine. Sie zeigen Anpassung an verschiedene Umwelten *innerhalb* unserer Naturgesetze. Die Feinabstimmung betrifft die Gesetze selbst. Ohne stabile Atome gibt es keine Extremophile.`,
      followUps: [
        {
          id: 'genug-zeit-evolution',
          objection: `In Milliarden Jahren hätte die Evolution in jedem Universum irgendetwas Lebendiges hervorgebracht.`,
          objectionBy: 'Gesprächspartner',
          answer: `Evolution braucht Replikatoren, also Moleküle, die Information speichern und kopieren – und dafür Chemie. Und sie braucht Zeit: In vielen alternativen Universen kollabiert alles nach Sekundenbruchteilen oder fliegt auseinander, bevor sich auch nur ein Atom bildet. Evolution kann nicht beginnen, wo es nichts zu entwickeln gibt.`,
          followUps: [
            {
              id: 'plasma-neutronenstern-leben',
              objection: `Vielleicht gibt es Leben aus Plasma oder auf der Oberfläche von Neutronensternen, wie es Science-Fiction-Autoren beschreiben.`,
              objectionBy: 'Spekulative Astrobiologie',
              answer: `Das ist Science-Fiction, keine Wissenschaft. Und selbst diese Szenarien brauchen unsere Physik: Neutronensterne gibt es nur, weil Kernphysik, Gravitation und Sternentwicklung so funktionieren, wie sie funktionieren. Wer Leben in exotischen Umgebungen annimmt, setzt die feinabgestimmten Gesetze schon voraus.`,
              followUps: [
                {
                  id: 'mangel-an-fantasie',
                  objection: `Das ist ein Argument aus Mangel an Fantasie. Vor hundert Jahren hätte niemand Leben an heißen Tiefseeschloten oder kilometertief im Gestein für möglich gehalten. Die Natur ist erfinderischer als unsere Vorstellungskraft.`,
                  objectionBy: 'Neil deGrasse Tyson',
                  answer: `Die Tiefseeschlote haben uns überrascht, *wo* Leben unter unseren Gesetzen existieren kann. Die Feinabstimmung betrifft aber, *ob* unter anderen Gesetzen überhaupt komplexe Strukturen möglich sind – und das wird nicht erraten, sondern berechnet. Ein Universum, in dem es außer Wasserstoff keine stabilen Atomkerne gibt, hat keine Chemie. Ein Universum, das nach Sekundenbruchteilen wieder kollabiert oder so schnell auseinanderfliegt, dass sich nie eine Galaxie bildet, hat keine Sterne. Keine Fantasie macht aus einem dünnen Wasserstoffgas einen Informationsträger.`,
                  detail: `Die Überraschung der Extremophilen-Forschung war biologisch, nicht physikalisch: Sie zeigte die Robustheit der irdischen Biochemie, nicht die Möglichkeit von Leben ohne Chemie. Die Feinabstimmungsliteratur (Barnes 2012; Lewis & Barnes 2016) stellt in den meisten alternativen Fällen keine Feinheiten der Biologie fest, sondern grobe Katastrophen: keine Atome, keine Sterne, keine Strukturen. Gegen „Vielleicht geht es trotzdem irgendwie" hilft die Rückfrage, welche konkrete Struktur in einem solchen Universum Information speichern und verarbeiten soll.`,
                  questionsBack: [`Welche konkrete Struktur soll in einem Universum aus reinem Wasserstoffgas oder ohne jede Galaxie Information speichern?`],
                  followUps: [
                    {
                      id: 'game-of-life-komplexitaet',
                      objection: `Conways „Game of Life" zeigt, dass aus extrem einfachen Regeln enorme Komplexität entsteht – sogar universelle Rechenmaschinen. Also könnte praktisch jede Physik irgendeine Form von Komplexität und damit Leben hervorbringen.`,
                      objectionBy: 'Max Tegmark / Sean Carroll',
                      answer: `Das Game of Life ist ein schönes Beispiel – aber eher für meine Seite. Unter den möglichen Regeln dieses Typs erzeugen die allermeisten entweder Stillstand oder Chaos; nur ein kleiner Teil bringt dauerhaft interessante Strukturen hervor. Und Conway hat seine Regeln nicht zufällig gezogen: Er hat lange experimentiert und gezielt Regeln *ausgewählt*, bei denen weder alles ausstirbt noch alles explodiert. Das Game of Life ist also ein Beispiel für feinabgestimmte Regeln – gewählt von einem Geist.`,
                      detail: `Martin Gardner stellte Conways Spiel 1970 in seiner Kolumne im *Scientific American* vor und berichtete, dass Conway nach Regeln suchte, deren Verhalten nicht vorhersagbar sein sollte, ohne in grenzenloses Wachstum oder schnelles Aussterben zu kippen. Das ist genau die Struktur des Feinabstimmungsarguments: Komplexität entsteht nicht aus beliebigen Regeln, sondern aus einer schmalen Klasse. Wer das Game of Life anführt, sollte zudem bedenken, dass es auf Computern läuft – also auf Hardware, die auf unserer feinabgestimmten Physik beruht.`,
                      sources: [{ kind: 'wissenschaft', author: 'Martin Gardner', work: '„Mathematical Games: The Fantastic Combinations of John Conway’s New Solitaire Game ‚Life‘", Scientific American 223', year: 'Oktober 1970', quote: `Conway habe seine Regeln nach langem Experimentieren so gewählt, dass die Muster weder rasch aussterben noch unbegrenzt wachsen, sondern unvorhersagbares Verhalten zeigen.`, status: 'paraphrase' }],
                      questionsBack: [`Hat Conway seine Regeln zufällig gezogen – oder gezielt unter vielen ausgewählt, damit etwas Interessantes entsteht?`],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'methan-statt-wasser',
          objection: `Wasser ist auch nicht heilig. Auf dem Saturnmond Titan gibt es Seen aus flüssigem Methan; Astrobiologen spekulieren über Leben, das Methan als Lösungsmittel nutzt. Leben braucht nicht unsere Bedingungen.`,
          objectionBy: 'Sean Carroll',
          answer: `Das ist eine interessante, offene Forschungsfrage – aber sie liegt vollständig *innerhalb* unserer Physik. Methan, Titan und seine Seen gibt es nur, weil Kernphysik, Sternentwicklung und Chemie so funktionieren, wie sie funktionieren. Auch „Titan-Leben" wäre Kohlenstoffchemie mit unseren Naturkonstanten. Die Feinabstimmung fragt nicht, ob Leben auf Titan möglich ist, sondern ob es Titan, Methan und Kohlenstoff überhaupt gäbe, wenn die Konstanten anders wären.`,
          detail: `Für hypothetisches Leben in flüssigem Methan wurden Membranmodelle vorgeschlagen (z. B. „Azotosomen", 2015); spätere Rechnungen haben deren Stabilität infrage gestellt. Die Debatte ist offen und spannend. Für unser Thema ist sie aber nicht entscheidend: Sie betrifft die Vielfalt möglicher Umgebungen in einem Universum mit unseren Gesetzen – nicht die Frage nach den Gesetzen selbst.`,
          questionsBack: [`Gäbe es Methan, Titan und Kohlenstoff, wenn die starke Kernkraft oder die Feinstrukturkonstante deutlich anders wären?`],
        },
      ],
    },
    {
      id: 'universum-ohne-schwache-kraft',
      objection: `Harnik, Kribs und Perez haben ein Universum ganz ohne schwache Kernkraft konstruiert, das trotzdem Sterne und Chemie hat. Leben ist robuster, als ihr behauptet.`,
      objectionBy: 'Roni Harnik u. a.',
      answer: `Ein kluges Gedankenexperiment, das man ernst nehmen sollte. Aber um es lebensfreundlich zu machen, mussten die Autoren andere Parameter gezielt nachjustieren. Die Feinabstimmung verschwindet also nicht, sie wandert. Und es gibt Kritik, etwa an der Sternentwicklung in einem solchen Universum. Ein einzelnes Gegenbeispiel bei einem Parameter ändert nichts an den robusten Fällen.`,
      followUps: [
        {
          id: 'immer-ausweichwege',
          objection: `Also: Wer sucht, findet immer Ausweichwege. Feinabstimmung ist kein festes Faktum.`,
          objectionBy: 'Victor Stenger',
          answer: `Einzelne Inseln im Parameterraum zu finden heißt nicht, dass der Parameterraum lebensfreundlich ist – die Inseln bleiben winzig. Und die stärksten Fälle, kosmologische Konstante und Anfangsentropie, betreffen alle denkbaren Lebensformen gleichermaßen.`,
        },
        {
          id: 'andere-dimensionen',
          objection: `Warum überhaupt drei Raumdimensionen? Universen mit zwei oder fünf Dimensionen hätten ihre eigene Physik und vielleicht ihre eigene Art von Leben. Du denkst nur in den Kategorien unserer Welt.`,
          objectionBy: 'Max Tegmark / Brian Greene',
          answer: `Ausgerechnet Tegmark hat das untersucht – und kam zu dem Ergebnis, dass nur drei Raum- und eine Zeitdimension komplexe Beobachter erlauben. Bei mehr als drei Raumdimensionen gibt es keine stabilen Planetenbahnen und keine stabilen Atome; bei weniger als drei können sich Nervenbahnen oder Leitungen nicht kreuzen, und die Gravitation verhält sich ganz anders. Bei mehr als einer Zeitdimension wird die Physik unvorhersagbar. Auch die Zahl der Dimensionen gehört also zu den lebensermöglichenden Bedingungen.`,
          detail: `Schon Paul Ehrenfest zeigte 1917, dass stabile Bahnen nach dem Gravitationsgesetz nur in drei Raumdimensionen möglich sind. Tegmark hat das 1997 in einer vielzitierten Arbeit erweitert und mit einem Diagramm verdeutlicht, in dem nur die Kombination „3+1" als bewohnbar markiert ist. Tegmark deutet diesen Befund mit einem Multiversum – aber er bestätigt den Befund selbst: Das Leben passt sich nicht beliebigen Welten an; die Welt muss zum Leben passen.`,
          sources: [{ kind: 'wissenschaft', author: 'Max Tegmark', work: '„On the Dimensionality of Spacetime", Classical and Quantum Gravity 14', year: '1997', quote: `Nur bei drei Raum- und einer Zeitdimension seien zugleich stabile Atome und Bahnen, Vorhersagbarkeit und hinreichend komplexe Strukturen für Beobachter möglich.`, status: 'paraphrase', note: 'Tegmark ist kein Theist; er deutet den Befund anthropisch im Rahmen eines Multiversums.' }],
          questionsBack: [`Wenn selbst die Zahl der Dimensionen genau stimmen muss – passt sich dann das Leben der Welt an, oder muss die Welt zum Leben passen?`],
        },
      ],
    },
    {
      id: 'kohlenstoff-chauvinismus',
      objection: `Du begehst Kohlenstoff-Chauvinismus. Leben auf Siliziumbasis wäre auch denkbar.`,
      objectionBy: 'Carl Sagan',
      answer: `Silizium ist chemisch viel ärmer: Silizium-Silizium-Bindungen sind schwach, und Siliziumdioxid ist ein Feststoff (Sand), kein Gas wie Kohlendioxid. Vor allem aber wird auch Silizium in Sternen erbrütet – es braucht dieselbe Feinabstimmung. In einem Universum ohne schwere Elemente gibt es auch kein Silizium.`,
      followUps: [
        {
          id: 'information-in-dunkler-materie',
          objection: `Vielleicht kann Information auch in ganz anderen Substraten gespeichert werden – etwa in Strukturen aus Dunkler Materie.`,
          objectionBy: 'Spekulative Kosmologie',
          answer: `Dunkle Materie wechselwirkt nach allem, was wir wissen, kaum mit sich selbst und kann Energie nicht abstrahlen; sie bildet deshalb keine kompakten, komplexen Strukturen wie Atome und Moleküle. Wer daraus Leben postuliert, stellt eine reine Möglichkeit gegen gut belegte Physik. Die Beweislast liegt beim Behauptenden.`,
          followUps: [
            {
              id: 'atomare-dunkle-materie',
              objection: `Es gibt durchaus Modelle „atomarer Dunkler Materie" mit dunklen Photonen und dunklen Atomen. Dann könnte es im dunklen Sektor eine eigene Chemie geben – Leben ganz ohne unsere Atome.`,
              objectionBy: 'Spekulative Kosmologie',
              answer: `Solche Modelle gibt es, sie sind aber spekulativ, und Beobachtungen begrenzen solche dissipativen Anteile auf einen kleinen Bruchteil der Dunklen Materie. Vor allem aber: Ein dunkler Sektor mit eigener Chemie bräuchte seinerseits passende Massen und Kopplungsstärken, damit stabile dunkle Atome und komplexe Verbindungen entstehen. Du hättest dann nicht die Feinabstimmung umgangen, sondern sie verdoppelt – eine zweite Physik, die ebenfalls genau stimmen muss.`,
              detail: `„Atomare Dunkle Materie" (u. a. Kaplan und Kollegen, 2010) ist ein legitimes Forschungsfeld. Für das Argument ist entscheidend, dass jede Form von Chemie – hell oder dunkel – an dieselben strukturellen Bedingungen gebunden ist: ein geeignetes Verhältnis von Massen, eine passende Kopplungsstärke für Bindungen, Stabilität über lange Zeiträume. Das Feinabstimmungsproblem ist kein Problem der Kohlenstoffbiologie, sondern der Physik komplexer Strukturen überhaupt.`,
              questionsBack: [`Welche Massen und Kopplungen müsste eine „dunkle Chemie" haben, damit stabile komplexe Moleküle entstehen – und wäre das nicht wieder eine Feinabstimmung?`],
            },
          ],
        },
      ],
    },
    {
      id: 'nur-ein-datenpunkt',
      objection: `Wir kennen nur einen einzigen Datenpunkt für Leben. Wir können gar nicht wissen, was Leben grundsätzlich braucht.`,
      objectionBy: 'Sean Carroll',
      answer: `Wir wissen aus Physik und Informationstheorie sehr wohl, was *jede* Form von Leben mindestens braucht: stabile, komplexe Strukturen, die Information speichern; einen Energiefluss, der Ordnung aufrechterhält; und genügend Zeit. Diese Mindestbedingungen fehlen in den meisten alternativen Universen – unabhängig davon, wie fantasievoll wir uns Leben vorstellen.`,
      followUps: [
        {
          id: 'leben-ist-berechnung',
          objection: `Leben ist im Kern Informationsverarbeitung, und die ist substratunabhängig. Jede Physik, die Berechnung erlaubt, erlaubt auch Leben. Deine Liste von Mindestanforderungen ist viel zu sehr an unserer Biochemie orientiert.`,
          objectionBy: 'Max Tegmark',
          answer: `Einverstanden: Leben ist Informationsverarbeitung. Aber Substratunabhängigkeit heißt nicht Substratlosigkeit. Rechnen braucht einen Speicher, der stabil bleibt, Fehlerkorrektur, einen Energiefluss und sehr lange Zeiträume. Genau das fehlt in den meisten alternativen Universen: keine stabilen Bausteine, keine Energiequellen wie Sterne, keine Zeit. Tegmark selbst hat mit Aguirre, Rees und Wilczek die Bedingungen für Beobachter untersucht – und deutet sie mit einem Multiversum, gerade weil sie eng sind.`,
          detail: `Schrödinger beschrieb Leben in *Was ist Leben?* (1944) als System, das sich durch Aufnahme von „negativer Entropie" in einem geordneten Zustand hält. Das ist eine physikalische, nicht biologische Definition – und sie verlangt Energiegradienten und stabile Strukturen. In *Life 3.0* (2017) beschreibt Tegmark Leben ebenfalls als informationsverarbeitendes System. Beides bestätigt den Punkt: Was auch immer „Leben" konkret ist, es braucht eine Physik, die stabile, komplexe Informationsträger und lange Zeiträume erlaubt.`,
          sources: [{ kind: 'wissenschaft', author: 'Max Tegmark, Anthony Aguirre, Martin Rees & Frank Wilczek', work: '„Dimensionless Constants, Cosmology and Other Dark Matters", Physical Review D 73', year: '2006', quote: `Die Autoren untersuchen, welche Werte dimensionsloser Konstanten Beobachter zulassen, und deuten die Einschränkungen im Rahmen eines Multiversums.`, status: 'paraphrase' }],
          questionsBack: [`Welche Art von Speicher, Energiequelle und Zeitskala soll in einem Universum rechnen, das nach Sekundenbruchteilen kollabiert?`],
          followUps: [
            {
              id: 'dann-eben-multiversum',
              objection: `Gut, die Bedingungen sind eng. Aber das ist kein Problem, wenn es unzählige Universen mit verschiedenen Konstanten gibt. Dann sind wir eben in einem der wenigen, die funktionieren.`,
              objectionBy: 'Max Tegmark',
              answer: `Damit hast du das Thema gewechselt – und mir den wichtigsten Punkt zugestanden: Das Leben hätte sich *nicht* einfach an andere Bedingungen angepasst; die Bedingungen müssen stimmen. Ob ein Multiversum das erklärt, ist eine eigene Frage. Es ist unbeobachtbar, braucht selbst einen fein eingestellten Universen-Generator und führt zum Problem der Boltzmann-Gehirne. Dazu gibt es einen eigenen Abschnitt.`,
              detail: `Das ist ein typischer Gesprächsverlauf, den du kennen solltest: Wer den Einwand „Leben hätte sich angepasst" nicht halten kann, weicht auf das Multiversum aus. Halte dann fest, was gerade zugestanden wurde – und wechsle zum Claim „Das Multiversum erklärt die Feinabstimmung".`,
              questionsBack: [`Stimmst du also zu, dass die Feinabstimmung real ist und nur noch ihre Erklärung strittig ist?`],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Woran soll sich Leben anpassen, wenn es keine stabilen Atome gibt?`,
    `Welche Extremophilen nutzen eine andere Grundchemie als Kohlenstoff und Wasser?`,
    `Wie entsteht Silizium in einem Universum ohne Sterne?`,
    `Welche Mindestbedingungen braucht *jede* Form von Leben – und gibt es sie in einem Universum, das nach einer Sekunde kollabiert?`,
  ],
  avoid: [
    `„Leben kann nur auf Kohlenstoff beruhen." – Das ist zu stark. Sag: Jede Form von Leben braucht komplexe Chemie, Energiefluss und Zeit.`,
    `Extremophile oder exotische Lebensformen lächerlich machen. Die Astrobiologie ist ein ernsthaftes Forschungsfeld.`,
  ],
  concessions: [
    `Wir kennen tatsächlich nur eine Form von Leben; unsere Vorstellung möglicher Lebensformen ist begrenzt.`,
    `Einzelne Gegenbeispiele (z. B. ein Universum ohne schwache Kraft) zeigen, dass manche Feinabstimmungsbehauptungen schwächer sind als früher angenommen.`,
  ],
  furtherReading: [
    { kind: 'wissenschaft', author: 'Luke A. Barnes & Geraint F. Lewis', work: 'A Fortunate Universe', year: '2016', status: 'paraphrase' },
    { kind: 'wissenschaft', author: 'Roni Harnik, Graham D. Kribs & Gilad Perez', work: '„A Universe Without Weak Interactions", Physical Review D 74', year: '2006', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'John Polkinghorne', work: 'Belief in God in an Age of Science', year: '1998', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Feinabstimmung', 'Extremophile', 'Silizium', 'Kohlenstoff-Chauvinismus', 'Evolution'],
  related: [
    'feinabstimmung/feinabstimmung-illusion',
    'feinabstimmung/anthropisches-prinzip',
    'ursprung-des-lebens/genug-zeit',
    'ursprung-des-lebens/ool-nur-wissensluecke',
    'astrobiologie/ausserirdische-widerlegen-bibel',
  ],
};

export default claim;
