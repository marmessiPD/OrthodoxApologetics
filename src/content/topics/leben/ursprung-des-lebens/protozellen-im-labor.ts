import type { Claim, Source } from '../../../schema.ts';

const gibson2010: Source = {
  kind: 'wissenschaft',
  author: 'Daniel G. Gibson u. a. (J. Craig Venter Institute)',
  work: '„Creation of a Bacterial Cell Controlled by a Chemically Synthesized Genome", Science 329, S. 52–56',
  year: '2010',
  quote: `Ein chemisch synthetisiertes Genom (Kopie des Genoms von Mycoplasma mycoides, mit Markierungen) wurde in Hefe zusammengesetzt und in eine lebende Zelle einer verwandten Art (M. capricolum) transplantiert, die es übernahm.`,
  status: 'paraphrase',
};

const hutchison2016: Source = {
  kind: 'wissenschaft',
  author: 'Clyde A. Hutchison III u. a.',
  work: '„Design and synthesis of a minimal bacterial genome", Science 351, aad6253',
  year: '2016',
  quote: `Die Minimalzelle JCVI-syn3.0 kommt mit 473 Genen aus; bei 149 davon war die Funktion zum Zeitpunkt der Veröffentlichung unbekannt.`,
  status: 'paraphrase',
};

const adamala2013: Source = {
  kind: 'wissenschaft',
  author: 'Katarzyna Adamala, Jack W. Szostak',
  work: '„Nonenzymatic Template-Directed RNA Synthesis Inside Model Protocells", Science 342, S. 1098–1100',
  year: '2013',
  quote: `Durch Zugabe von Citrat als Chelator für Magnesium gelang nichtenzymatisches Kopieren kurzer RNA-Abschnitte in Fettsäurevesikeln, ohne dass die Vesikel zerfielen.`,
  status: 'paraphrase',
};

const zhuSzostak2009: Source = {
  kind: 'wissenschaft',
  author: 'Ting F. Zhu, Jack W. Szostak',
  work: '„Coupled Growth and Division of Model Protocell Membranes", Journal of the American Chemical Society 131, S. 5705–5713',
  year: '2009',
  quote: `Fettsäurevesikel wachsen durch Aufnahme von Mizellen zu fadenförmigen Strukturen und teilen sich unter milden Scherkräften.`,
  status: 'paraphrase',
};

const retraction2017: Source = {
  kind: 'wissenschaft',
  author: 'Tony Z. Jia, Albert C. Fahrenbach, Neha P. Kamat, Katarzyna P. Adamala, Jack W. Szostak',
  work: 'Rückzug von „Oligoarginine peptides slow strand annealing and assist non-enzymatic RNA replication", Nature Chemistry 9, S. 1286',
  year: '2017',
  status: 'paraphrase',
  quote: `Rückzug einer Arbeit aus Szostaks Labor wegen nicht reproduzierbarer Ergebnisse.`,
  url: 'https://retractionwatch.com/2017/12/05/definitely-embarrassing-nobel-laureate-retracts-non-reproducible-paper-nature-journal/',
};

const assembly2023: Source = {
  kind: 'gegner',
  author: 'Abhishek Sharma, Dániel Czégel, Michael Lachmann, Christopher P. Kempes, Sara I. Walker, Leroy Cronin',
  work: '„Assembly theory explains and quantifies selection and evolution", Nature 622, S. 321–328',
  year: '2023',
  status: 'paraphrase',
  quote: `Die Assembly Theory definiert einen „Assembly-Index" (minimale Zahl von Bauschritten) und deutet häufige Moleküle mit hohem Index als Ergebnis von Selektion.`,
};

const jaeger2024: Source = {
  kind: 'wissenschaft',
  author: 'Johannes Jaeger',
  work: '„Assembly Theory: What It Does and What It Does Not Do", Journal of Molecular Evolution',
  year: '2024',
  status: 'paraphrase',
  quote: `Die Theorie sei bedenkenswert, aber weit weniger neu als behauptet; sie erkläre nicht Darwinsche Evolution durch natürliche Selektion, sondern verwende „Selektion" in einem eigenen, weiten Sinn.`,
  url: 'https://link.springer.com/article/10.1007/s00239-024-10163-2',
};

const tourFarina2023: Source = {
  kind: 'sonstiges',
  work: 'Debatte James Tour vs. Dave Farina: „Are We Clueless About the Origin of Life?", Rice University (Moderation: Wayne Guida)',
  year: 'Mai 2023',
  status: 'paraphrase',
  quote: `Tour hielt Farina vor, dass OOL-Forscher, auf die sich Farina beruft, wiederholt angekündigt hätten, Leben im Labor zu erzeugen, ohne dies einzulösen; Farina hielt Tour vor, als organischer Chemiker nie selbst OOL-Forschung betrieben zu haben.`,
  url: 'https://ricethresher.org/article/2023/05/rices-james-tour-and-youtuber-professor-dave-debate-the-origins-of-life',
};

const claim: Claim = {
  id: 'protozellen-im-labor',
  title: `„Forscher stehen kurz davor, Leben im Labor zu erzeugen (Szostak, Sutherland, Cronin)."`,
  proponents: [
    { name: 'Lee Cronin', role: 'Regius Professor of Chemistry, University of Glasgow', work: 'Assembly Theory (Nature 2023); „Chemputer"; Debatten mit James Tour (u. a. Harvard, November 2023)' },
    { name: 'Jack W. Szostak', role: 'Nobelpreisträger 2009, Protozellen-Forschung', work: 'Zhu & Szostak (2009); Adamala & Szostak (2013)' },
    { name: 'J. Craig Venter', role: 'Genomforscher, J. Craig Venter Institute', work: 'Synthetisches Genom (Science 2010), Minimalzelle (Science 2016)' },
    { name: 'Dave Farina', role: 'Wissenschafts-YouTuber („Professor Dave Explains")', work: 'Debatte mit Tour, Rice University (Mai 2023)' },
  ],
  steelman: `Die Fortschritte sind atemberaubend. Venters Team hat 2010 ein komplettes Bakteriengenom chemisch synthetisiert und eine Zelle damit „gebootet"; 2016 folgte eine Minimalzelle mit nur 473 Genen. Szostak baut Protozellen aus Fettsäuren, die wachsen, sich teilen und in ihrem Inneren RNA kopieren. Sutherland hat aus Blausäure, Schwefelwasserstoff und UV-Licht ein ganzes Netzwerk von Vorstufen für RNA, Aminosäuren und Lipide erzeugt. Zellfreie Systeme können Proteine aus DNA herstellen, internationale Konsortien arbeiten an der Konstruktion einer künstlichen Zelle von Grund auf. Lee Cronin hat mit dem „Chemputer" Roboter, die chemische Räume systematisch durchsuchen, und mit der Assembly Theory ein Maß, das zeigt, wann Chemie in Biologie übergeht. Alle Bausteine liegen auf dem Tisch; es ist eine Frage von Jahren oder wenigen Jahrzehnten, bis eine Protozelle sich selbst erhält und evolviert. Dann ist die letzte Bastion des Schöpfungsglaubens gefallen.`,
  biblical: {
    summary: `Der Mensch ist nach Gottes Bild geschaffen und beauftragt, die Schöpfung zu erforschen und zu gestalten (Gen 1,27–28). „Es ist Gottes Ehre, eine Sache verbergen; aber der Könige Ehre ist es, eine Sache erforschen" (Spr 25,2). Würde der Mensch eines Tages eine lebende Zelle synthetisieren, wäre das kein Gegenbeweis gegen Gott, sondern ein Zeugnis für die schöpferische Intelligenz, die Gott dem Menschen gab – und für die Intelligenz, die Leben offenbar erfordert. Leben „aus dem Labor" wäre Leben aus Planung.`,
    sources: [
      { kind: 'bibel', work: 'Genesis', ref: '1,27', quote: `Und Gott schuf den Menschen ihm zum Bilde, zum Bilde Gottes schuf er ihn; und schuf sie einen Mann und ein Weib.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Sprüche', ref: '25,2', quote: `Es ist Gottes Ehre, eine Sache verbergen; aber der Könige Ehre ist es, eine Sache erforschen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Psalmen', ref: '139,14', quote: `Ich danke dir darüber, daß ich wunderbar gemacht bin; wunderbar sind deine Werke, und das erkennt meine Seele wohl.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Gregor von Nyssa beschreibt den Menschen als königliches Geschöpf, das durch Vernunft und Erfindungsgabe die Welt gestaltet – Ausdruck seiner Gottebenbildlichkeit. Die orthodoxe Tradition sieht daher in wissenschaftlicher Forschung, auch in der synthetischen Biologie, grundsätzlich eine Entfaltung menschlicher Würde, die allerdings ethischen Grenzen untersteht.`,
    sources: [
      { kind: 'kirchenvater', author: 'Gregor von Nyssa', work: 'Über die Erschaffung des Menschen (De opificio hominis)', ref: '4–5', quote: `Der Mensch ist als königliches Wesen geschaffen; seine Vernunft und Erfindungsgabe spiegeln die Würde des Bildes Gottes.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Ehrlicher Stand: Niemand hat bisher eine lebende Zelle aus unbelebter Chemie hergestellt. Venters Zelle verwendete ein kopiertes Genom und eine bereits lebende Empfängerzelle mit ihrer gesamten Maschinerie. Die Minimalzelle zeigt vor allem, wie komplex schon das Minimum ist (473 Gene, viele mit damals unbekannter Funktion). Szostaks Protozellen sind Fettsäurevesikel, in denen kurze RNA-Abschnitte teilweise kopiert werden – ohne vererbbare Funktion, ohne Stoffwechsel; eine Arbeit wurde 2017 zurückgezogen. Sutherland erzeugt Vorstufen, keine Zellen. Die Assembly Theory ist ein Komplexitätsmaß, dessen Anspruch, Selektion zu „erklären", von Fachkollegen bestritten wird. Fortschritt ja – „kurz davor" nein.`,
    detail: `**Was die Experimente wirklich zeigen:**
- *Venter 2010:* Software-Austausch in einer bestehenden Hardware. Das Genom wurde von einem existierenden Organismus abgeschrieben, chemisch synthetisiert, in Hefe zusammengesetzt und in eine lebende Zelle verpflanzt.
- *JCVI-syn3.0 (2016):* 473 Gene, rund 531.000 Basenpaare; ein Laborstamm, der von reichhaltigem Nährmedium abhängt.
- *Szostak:* Vesikel wachsen und teilen sich physikalisch (durch Scherkräfte); RNA-Kopieren gelingt nur mit chemisch aktivierten Bausteinen und über kurze Strecken. Das Magnesium-Problem (Mg2+ zerstört Fettsäuremembranen, wird aber fürs Kopieren gebraucht) wurde durch Zugabe von Citrat umgangen – eine Entscheidung der Forscher.
- *Sutherland 2015:* Vorstufen von Nukleotiden, Aminosäuren und Lipiden aus einem gemeinsamen chemischen Netzwerk – Schritt für Schritt unter gewählten Bedingungen.
- *Cronin:* Assembly Theory (Nature 2023) und robotergestützte Chemie; bislang kein lebendes System.`,
    sources: [gibson2010, hutchison2016, zhuSzostak2009, adamala2013, assembly2023, jaeger2024],
  },
  quickAnswer: `Niemand hat Leben aus unbelebter Chemie erzeugt. Venter hat ein abgeschriebenes Genom in eine lebende Zelle verpflanzt – das ist, als würde man die Festplatte eines funktionierenden Computers austauschen. Protozellen sind Fettbläschen mit kurzen RNA-Stücken. Und selbst wenn es eines Tages gelingt: Dann haben die besten Chemiker der Welt mit gereinigten Stoffen und jahrzehntelanger Planung gezeigt, dass Leben Intelligenz braucht.`,
  keyPoints: [
    `**Kein Leben aus Unbelebtem:** Bis heute existiert kein Laborversuch, der aus unbelebter Chemie eine lebende Zelle hervorbrachte.`,
    `**Venter = Transplantation:** Kopiertes Genom, bestehende lebende Empfängerzelle – keine Neuschöpfung der Zellmaschinerie.`,
    `**Minimal ist nicht einfach:** 473 Gene in der Minimalzelle, viele davon mit unbekannter Funktion; abhängig von reichem Nährmedium.`,
    `**Protozellen sind Modelle:** Wachsende Seifenblasen mit kurzem, teilweisem RNA-Kopieren – ohne Erbinformation, ohne Stoffwechsel.`,
    `**Tours Zusammenbau-Argument:** Selbst mit *allen* Molekülen einer toten Zelle kann niemand sie wieder lebendig zusammensetzen.`,
    `**Das Labor-Dilemma:** Scheitern ist kein Beleg für ungelenkte Entstehung; Erfolg unter Laborregie belegt die Rolle von Intelligenz.`,
  ],
  argument: {
    name: 'Das Dilemma des Laborerfolgs',
    summary: 'Was würde ein künstlich erzeugtes Leben eigentlich beweisen?',
    premises: [
      {
        text: `P1: Entweder gelingt es Forschern (noch) nicht, Leben aus unbelebter Chemie herzustellen, oder es gelingt ihnen.`,
        support: `Vollständige Disjunktion.`,
      },
      {
        text: `P2: Gelingt es nicht, so liefert die Laborforschung keinen Beleg dafür, dass Leben ohne Lenkung entstehen kann.`,
        support: `Ein ausstehendes Ergebnis ist kein Ergebnis.`,
      },
      {
        text: `P3: Gelingt es unter Laborregie (Auswahl, Reinigung, Reihenfolge, Zusatzstoffe), so zeigt der Erfolg, dass intelligente Steuerung die Hürden überwinden kann – nicht, dass ungelenkte Prozesse es können.`,
        support: `Thaxton, Bradley und Olsen nannten dies schon 1984 „investigator interference": Der Experimentator bringt Information ein, die in der ungelenkten Natur fehlt. Nur ein Experiment, das von realistisch präbiotischen Ausgangsbedingungen ohne weitere Eingriffe zu einem sich selbst erhaltenden, evolvierenden System führt, wäre ein echter Beleg für die naturalistische These.`,
        sources: [{ kind: 'fachliteratur', author: 'Charles B. Thaxton, Walter L. Bradley, Roger L. Olsen', work: 'The Mystery of Life\'s Origin: Reassessing Current Theories', ref: 'Kap. 6', year: '1984', status: 'paraphrase', quote: `Die Autoren unterscheiden legitime Simulation präbiotischer Bedingungen von unzulässiger Einflussnahme des Experimentators („investigator interference").` }],
      },
    ],
    conclusion: `Laborversuche können die Rolle von Intelligenz bestätigen, aber die ungelenkte Entstehung nur durch einen „Hands-off"-Versuch unter realistischen Bedingungen belegen – den es nicht gibt.`,
    horns: [
      { label: 'Horn A – Misserfolg', text: `Bisher der Fall: Dann gibt es keinen experimentellen Beleg für die Behauptung „Leben entsteht von selbst".` },
      { label: 'Horn B – Erfolg unter Regie', text: `Dann haben hochintelligente Akteure mit Planung, Reinigung und Steuerung Leben erzeugt – ein Indiz für Design.` },
      { label: 'Ausweg – Hands-off-Erfolg', text: `Ein System, das aus realistisch präbiotischem Gemisch ohne Eingriffe zu Vermehrung und Evolution findet. Das wäre ein starkes Argument – und ein Christ darf zusagen, es ernst zu nehmen.` },
    ],
  },
  voices: [
    {
      person: 'james-tour',
      role: 'als synthetischer Chemiker und Nanotechnologe',
      text: `Tours stärkstes Argument betrifft den **Zusammenbau**: Man nehme eine lebende Zelle und steche ein Loch in ihre Membran. Sie stirbt – obwohl alle Moleküle noch da sind, in richtiger Händigkeit, richtiger Sequenz, richtiger Menge. Kein Labor der Welt kann diese Moleküle wieder zu einer lebenden Zelle zusammensetzen. Wenn das schon mit allen fertigen Teilen unmöglich ist, wie sollte es präbiotisch mit Teer und Racematen gelingen?

Tour verweist zudem auf die Komplexität der Membran: Hunderte verschiedener Lipidarten, asymmetrisch auf beide Seiten verteilt, mit eingebetteten Proteinen und einer äußeren Zuckerschicht (Glykokalyx), deren Zucker in Kombinatorik und Verzweigung jede DNA-Information übertreffen. Fettsäurevesikel sind dagegen „Seifenblasen". Tours Hauptkritik richtet sich an die Kommunikation: Pressemitteilungen verkünden Durchbrüche, die die Fachartikel selbst nicht behaupten – und Studierende wie Öffentlichkeit glauben, das Problem sei fast gelöst.`,
      sources: [
        { kind: 'wissenschaft', author: 'James M. Tour', work: 'Vortragsreihe „Abiogenesis: The Origin of Life" (YouTube)', year: '2023', status: 'paraphrase', quote: `Tour bespricht Lipide, Membranaufbau, Glykane und den Zusammenbau einer Zelle und zeigt, wie weit Protozell-Modelle davon entfernt sind.` },
        { kind: 'wissenschaft', author: 'James M. Tour', work: '„Time Out", Inference: International Review of Science 4/4', year: '2019', status: 'paraphrase', quote: `Aufruf, innezuhalten und ehrlich zu bilanzieren, was erreicht ist und was nicht.`, url: 'https://inference-review.com' },
        tourFarina2023,
      ],
    },
    {
      person: 'fazale-rana',
      role: 'als Biochemiker',
      text: `Rana argumentiert in *Creating Life in the Lab*, dass die synthetische Biologie unfreiwillig ein Argument für den Schöpfer liefert: Jedes erfolgreiche Projekt – vom synthetischen Genom bis zur Minimalzelle – erfordert enorme Planung, Wissen, technische Infrastruktur und Eingriffe. Wenn schon die Nachbildung des Lebens so viel Intelligenz verlangt, ist es vernünftig anzunehmen, dass auch seine ursprüngliche Entstehung Intelligenz erforderte.`,
      sources: [{ kind: 'fachliteratur', author: 'Fazale Rana', work: 'Creating Life in the Lab', year: '2011', status: 'paraphrase' }],
    },
    {
      person: 'change-laura-tan',
      role: 'als Biochemikerin',
      text: `Tan und ihr Koautor Rob Stadler beschreiben den Weg von einfachen Molekülen zur ersten Zelle als „Treppe" mit vielen Stufen – Bausteine, Händigkeit, Polymere, Sequenzen, Membranen, Energiegewinnung, Vermehrung, Regulation. Für jede Stufe prüfen sie, was experimentell wirklich gezeigt ist und wie stark der Experimentator eingreifen musste. Ihr Befund: Mehrere Stufen sind nur mit massiver Laborsteuerung erreicht, andere gar nicht. „Kurz davor" sei eine Fehleinschätzung, die die Zahl der fehlenden Stufen unterschlage.`,
      sources: [{ kind: 'fachliteratur', author: 'Change Laura Tan, Rob Stadler', work: 'The Stairway to Life: An Origin-of-Life Reality Check', year: '2020', status: 'paraphrase' }],
    },
    {
      person: 'stephen-meyer',
      role: 'als Wissenschaftsphilosoph',
      text: `Meyer weist darauf hin, dass gerade die erfolgreichsten Experimente der präbiotischen Chemie und synthetischen Biologie die Wirksamkeit intelligenter Ursachen illustrieren: Forscher wählen Ausgangsstoffe, steuern Bedingungen, selektieren Produkte. Das ist kein Vorwurf an die Forscher, sondern eine Beobachtung über die Art der Ursache, die Information und funktionale Organisation hervorbringt.`,
      sources: [{ kind: 'fachliteratur', author: 'Stephen C. Meyer', work: 'Signature in the Cell', year: '2009', status: 'paraphrase' }],
    },
    {
      person: 'lennox',
      role: 'als Mathematiker und Wissenschaftsphilosoph',
      text: `Lennox betont in Debatten, dass ein künstlich im Labor erzeugtes Leben den Glauben an einen Schöpfer nicht widerlegen würde: Es wäre das Ergebnis großer Intelligenz, nicht ihres Fehlens. Zudem unterscheidet er zwischen Mechanismus und Urheber: Wer erklärt, wie ein Automotor funktioniert, hat Henry Ford nicht überflüssig gemacht. Selbst eine vollständige Beschreibung des Wie beantwortet nicht die Frage nach dem Wer und Warum.`,
      sources: [{ kind: 'fachliteratur', author: 'John C. Lennox', work: 'God\'s Undertaker: Has Science Buried God?', year: '2009', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'venter-synthetische-zelle',
      objection: `Venter hat 2010 eine synthetische Zelle erschaffen. Leben aus dem Labor gibt es schon.`,
      objectionBy: 'Dave Farina',
      answer: `Venters Team hat ein Genom chemisch nachgebaut – abgeschrieben von einem existierenden Bakterium – und in eine bereits lebende Zelle verpflanzt, deren gesamte Maschinerie es dann ablas. Das ist eine großartige Leistung, aber keine Erzeugung von Leben aus Unbelebtem. Man hat die Festplatte eines laufenden Computers getauscht, nicht den Computer gebaut.`,
      sources: [gibson2010],
      questionsBack: [`Welcher Teil der Empfängerzelle – Membran, Ribosomen, Enzyme – wurde im Labor neu synthetisiert?`],
      followUps: [
        {
          id: 'genom-ist-software',
          objection: `Das Genom ist die Software, der Rest ist nur Chemie. Die eigentliche Information wurde synthetisiert.`,
          objectionBy: 'Dave Farina',
          answer: `Die „Hardware" – Ribosomen, Membranen, Hunderte Proteine, Zucker – ist genau das, was niemand bauen kann. Und die Software wurde kopiert, nicht neu geschrieben. Wer einen Roman abtippt, hat ihn nicht verfasst.`,
          followUps: [
            {
              id: 'minimalzelle-473',
              objection: `Die Minimalzelle JCVI-syn3.0 zeigt: Leben braucht nur 473 Gene. Die Hürde ist kleiner als gedacht.`,
              objectionBy: 'J. Craig Venter',
              answer: `473 Gene mit über einer halben Million Basenpaaren – und bei 149 davon war die Funktion zunächst unbekannt. Die Zelle lebt nur in reichhaltigem Nährmedium. Das Experiment zeigt, wie hoch die Untergrenze liegt, nicht wie niedrig.`,
              sources: [hutchison2016],
              followUps: [
                {
                  id: 'erste-zelle-einfacher',
                  objection: `Die erste Zelle war viel einfacher als heutige Minimalzellen.`,
                  objectionBy: 'Jack Szostak',
                  answer: `Möglich – aber das ist eine Annahme, für die es kein einziges beobachtetes oder gebautes Beispiel gibt. Die Frage ist, wie viel einfacher ein System sein kann und trotzdem Vermehrung, Stoffwechsel und Abgrenzung leistet. Solange niemand ein solches System zeigt, bleibt „viel einfacher" ein Versprechen.`,
                  followUps: [
                    {
                      id: 'protozellen-sind-einfachere-stufe',
                      objection: `Genau diese einfachere Stufe zeigen Szostaks Protozellen.`,
                      objectionBy: 'Jack Szostak',
                      answer: `Sie zeigen Teilaspekte: Bläschen, die wachsen und sich teilen, und teilweises Kopieren kurzer RNA mit Bausteinen, die Chemiker aktiviert haben. Es fehlt alles, was Leben ausmacht: ein Genom, das seine eigene Vermehrung codiert, Stoffwechsel, Regulation. Szostak selbst würde nicht behaupten, Leben erzeugt zu haben.`,
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
      id: 'szostak-fast-leben',
      objection: `Szostaks Protozellen wachsen, teilen sich und kopieren RNA. Das ist fast Leben.`,
      objectionBy: 'Jack Szostak',
      answer: `Die Vesikel wachsen und teilen sich physikalisch – wie Seifenblasen unter Scherkräften. Das RNA-Kopieren im Inneren gelingt nur kurz, mit chemisch aktivierten Bausteinen, die Forscher zuführen. Es gibt keine vererbte Funktion. Und eine Arbeit aus diesem Forschungsprogramm musste 2017 zurückgezogen werden.`,
      sources: [zhuSzostak2009, retraction2017],
      followUps: [
        {
          id: 'fettsaeuren-plausibel',
          objection: `Fettsäuren sind präbiotisch plausibel – man findet sie sogar im Murchison-Meteoriten.`,
          objectionBy: 'David Deamer',
          answer: `Kurze Fettsäuren ja. Stabile Vesikel brauchen aber längere Ketten in hoher Konzentration, einen engen pH-Bereich und wenig Salz. Gerade Magnesium, das man zum RNA-Kopieren braucht, zerstört solche Membranen. Das Milieu für Membranen und das Milieu für RNA widersprechen sich.`,
          followUps: [
            {
              id: 'citrat-loesung',
              objection: `Szostak hat das Magnesium-Problem mit Citrat gelöst. Fortschritt!`,
              objectionBy: 'Jack Szostak',
              answer: `Clever, und ich erkenne es an. Aber Citrat wurde von den Forschern gezielt ausgewählt und in passender Menge zugegeben. Genau das ist Tours Punkt: An jeder Hürde löst Intelligenz das Problem. Wer hat auf der Urerde das Citrat dosiert?`,
              sources: [adamala2013],
              followUps: [
                {
                  id: 'experimentator-normal',
                  objection: `Jedes Experiment braucht einen Experimentator. Das ist kein Argument, sondern Wissenschaft.`,
                  objectionBy: 'Dave Farina',
                  answer: `Natürlich. Die Frage ist, *was* der Experimentator tut: Stellt er Bedingungen her, die es so auf der Urerde gegeben haben dürfte – das ist legitim. Oder bringt er Auswahl, Reinigung, Reihenfolge und Zusatzstoffe ein, die die Natur nicht liefert – dann trägt er Information bei. Diese Unterscheidung („investigator interference") ist seit 1984 in der Literatur bekannt.`,
                  questionsBack: [`Welche Schritte deines Lieblingsexperiments würden ohne Eingreifen eines Menschen in derselben Reihenfolge und Reinheit ablaufen?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'cronin-chemputer',
      objection: `Cronins Chemputer und die Assembly Theory werden bald zeigen, wie Leben aus Chemie entsteht.`,
      objectionBy: 'Lee Cronin',
      answer: `Die Assembly Theory ist ein Maß für molekulare Komplexität, das anzeigen soll, wann ein Molekül nur durch einen „gedächtnisbehafteten" Prozess entstehen konnte. Sie sagt, *dass* Selektion stattfand, nicht *wie* der erste solche Prozess entstand. Und der Chemputer ist ein Roboter, der von Chemikern programmierte Rezepte ausführt – verkörperte Intelligenz.`,
      sources: [assembly2023],
      followUps: [
        {
          id: 'assembly-erklaert-selektion',
          objection: `In Nature steht es klar: Die Assembly Theory erklärt und quantifiziert Selektion und Evolution.`,
          objectionBy: 'Sara Walker',
          answer: `So lautet der Titel. Fachkollegen wie der Biologe und Philosoph Johannes Jaeger halten diesen Anspruch für überzogen: „Selektion" werde in einem Sinn verwendet, den Biologen nicht wiedererkennen. Ein hoher Assembly-Index zeigt nur, dass ein „informierter" Prozess beteiligt war – ob Leben, Technik oder Intelligenz, unterscheidet die Theorie nicht.`,
          sources: [jaeger2024],
          followUps: [
            {
              id: 'missbrauch-assembly',
              objection: `Du missbrauchst die Assembly Theory für Intelligent Design.`,
              objectionBy: 'Lee Cronin',
              answer: `Nein. Ich stelle nur fest, was die Autoren selbst sagen: Komplexe Moleküle in großer Zahl sind eine Biosignatur – oder eine Technosignatur. Wie der *erste* Prozess mit Gedächtnis aus unbelebter Chemie entstand, beantwortet die Theorie nicht; das ist auch nicht ihr Anspruch im engeren Sinn.`,
            },
          ],
        },
      ],
    },
    {
      id: 'tour-kein-ool-forscher',
      objection: `Tour ist kein Origin-of-Life-Forscher. Er hat nie präbiotische Chemie publiziert.`,
      objectionBy: 'Dave Farina',
      answer: `Richtig, Tour ist kein OOL-Forscher – er ist synthetischer Chemiker mit Hunderten Publikationen. Die Behauptungen der präbiotischen Chemie sind aber Synthese-Behauptungen: „Unter diesen Bedingungen entsteht jenes Molekül." Genau das zu beurteilen ist sein Fach. Und ein Argument steht oder fällt mit seinem Inhalt, nicht mit dem Lebenslauf.`,
      sources: [tourFarina2023],
      followUps: [
        {
          id: 'tour-verdreht',
          objection: `Er verdreht die Aussagen der Forscher und macht sich lustig über sie.`,
          objectionBy: 'Dave Farina',
          answer: `Tours Ton ist manchmal scharf – das gebe ich zu, und ich übernehme ihn nicht. In der Sache zitiert er aber aus den Originalarbeiten und zeigt die Reaktionsbedingungen. Die Frage bleibt: Welche Arbeit zeigt einen Weg zur Zelle ohne steuernde Eingriffe?`,
          followUps: [
            {
              id: 'unerfuellbare-forderung',
              objection: `Er stellt unerfüllbare Forderungen: „Zeigt mir eine Zelle!" So kann man jede Forschung lächerlich machen.`,
              objectionBy: 'Lee Cronin',
              answer: `Die Forderung ergibt sich aus der Behauptung: Wer sagt „Wir sind kurz davor", muss zeigen, wie nah. Tour fordert vor allem Ehrlichkeit – in „Time Out" schlug er vor, innezuhalten und offen zu benennen, was ungeklärt ist. Das ist keine Verhöhnung, sondern gute Wissenschaft.`,
            },
          ],
        },
      ],
    },
    {
      id: 'gott-ueberfluessig-labor',
      objection: `Sobald wir Leben im Labor erzeugen, ist Gott endgültig überflüssig.`,
      objectionBy: 'Bill Nye',
      answer: `Denk es zu Ende: Wenn es gelingt, dann weil die klügsten Chemiker der Welt mit gereinigten Stoffen, Robotern und jahrzehntelanger Planung es erzwungen haben. Das zeigt, dass Leben Intelligenz braucht. Nur ein Versuch ohne Eingriffe, von realistischen Ausgangsbedingungen bis zu einem sich selbst vermehrenden System, würde die ungelenkte Entstehung belegen.`,
      followUps: [
        {
          id: 'unfalsifizierbar',
          objection: `Dann ist deine Position unfalsifizierbar – egal was passiert, du siehst Gott.`,
          answer: `Nein, ich habe dir gerade gesagt, was mich beeindrucken würde: ein „Hands-off"-Experiment, das aus einem realistisch präbiotischen Gemisch ohne Eingriffe zu Vermehrung und Evolution führt. Das wäre ein starkes Argument gegen den Designschluss beim Lebensursprung – und ich würde es ernst nehmen.`,
          followUps: [
            {
              id: 'glauben-aufgeben',
              objection: `Und würdest du dann deinen Glauben aufgeben?`,
              answer: `Nein, und das ist ehrlich: Mein Glaube ruht auf Christus und seiner Auferstehung, nicht auf einer Lücke in der Chemie. Die Väter sahen sogar in der Fruchtbarkeit der Natur ein Werk Gottes („Die Erde bringe hervor"). Ich streite hier über eine wissenschaftliche Behauptung – und die lautet derzeit: Niemand ist „kurz davor".`,
              sources: [{ kind: 'bibel', work: '1. Korinther', ref: '15,14', quote: `Ist aber Christus nicht auferstanden, so ist unsre Predigt vergeblich, so ist auch euer Glaube vergeblich.`, translation: 'Luther 1912', status: 'verbatim' }],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Welches Experiment hat aus unbelebter Chemie eine lebende Zelle erzeugt?`,
    `Welche Teile der Venter-Zelle wurden nicht kopiert, sondern neu entworfen?`,
    `Wenn man alle Moleküle einer toten Zelle hat – warum kann sie niemand wieder lebendig zusammensetzen?`,
    `Was genau würde ein Erfolg unter Laborregie über die ungelenkte Entstehung beweisen?`,
    `Seit wann heißt es „in wenigen Jahren" – und warum ist es noch nicht geschehen?`,
  ],
  avoid: [
    `„Wissenschaftler können niemals Leben erzeugen" – eine Prophezeiung, die du nicht belegen kannst; sag lieber, was ein Erfolg bedeuten würde.`,
    `Venters Arbeit kleinreden oder verspotten – sie ist eine Spitzenleistung; ordne sie korrekt ein.`,
    `Behaupten, bestimmte Forscher hätten konkrete Termine („in zwei Jahren") versprochen, ohne die Quelle zu haben.`,
  ],
  concessions: [
    `Die synthetische Biologie macht enorme Fortschritte, und es ist nicht ausgeschlossen, dass eines Tages im Labor eine Art künstliche Zelle entsteht.`,
    `Tours Ton gegenüber Kollegen ist manchmal polemisch; seine Argumente sind davon zu trennen.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Change Laura Tan, Rob Stadler', work: 'The Stairway to Life: An Origin-of-Life Reality Check', year: '2020', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Fazale Rana', work: 'Creating Life in the Lab', year: '2011', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Charles B. Thaxton, Walter L. Bradley, Roger L. Olsen u. a.', work: 'The Mystery of Life\'s Origin: The Continuing Controversy', year: '2020', status: 'paraphrase' },
    jaeger2024,
  ],
  difficulty: 2,
  tags: ['Protozellen', 'Synthetische Biologie', 'Venter', 'Szostak', 'Lee Cronin', 'Assembly Theory'],
  related: ['ursprung-des-lebens/rna-welt', 'ursprung-des-lebens/ool-nur-wissensluecke', 'ursprung-des-lebens/miller-urey', 'chemie-biochemie/dna-ist-keine-information', 'evolution/id-keine-wissenschaft'],
};

export default claim;
