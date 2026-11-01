import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'galilei',
  title: `„Der Fall Galilei beweist die Wissenschaftsfeindlichkeit der Kirche."`,
  proponents: [
    { name: 'John William Draper', role: 'Chemiker und Historiker (†1882)', work: 'History of the Conflict between Religion and Science (1874)' },
    { name: 'Andrew Dickson White', role: 'Historiker, Gründungspräsident der Cornell University (†1918)', work: 'A History of the Warfare of Science with Theology in Christendom (1896)' },
    { name: 'Neil deGrasse Tyson', role: 'Astrophysiker, Moderator von „Cosmos" (2014)', work: 'Cosmos: A Spacetime Odyssey' },
    { name: 'Richard Dawkins', role: 'Evolutionsbiologe', work: 'The God Delusion (2006)' },
  ],
  steelman: `Galileo Galilei sah durch sein Fernrohr, was die Kirche nicht sehen wollte: Monde um Jupiter, Phasen der Venus – Belege, dass sich nicht alles um die Erde dreht. 1616 erklärte die Indexkongregation die kopernikanische Lehre für schriftwidrig, Kardinal Bellarmin ermahnte Galilei. 1633 wurde der fast siebzigjährige Gelehrte von der Inquisition vor Gericht gestellt, unter Androhung der Folter zum Abschwören gezwungen und lebenslang unter Hausarrest gestellt; sein „Dialog" kam auf den Index. Erst 1992 gestand Papst Johannes Paul II. das Unrecht ein – 359 Jahre später. Der Fall zeigt das Grundmuster: Wenn Wissenschaft und Bibel kollidieren, unterdrückt die Kirche die Wissenschaft.`,
  biblical: {
    summary: `Die Bibel spricht über die Natur in der Sprache der Erscheinung – „die Sonne geht auf und geht unter" (Pred 1,5), wie wir es bis heute tun – und will keine Astronomie lehren. Stellen wie Jos 10,12–13, Ps 93,1 oder Ps 104,5 wurden im 17. Jahrhundert gegen Kopernikus angeführt. Galilei selbst argumentierte in seinem Brief an die Großherzogin Christina (1615) mit Augustinus, dass die Schrift lehren wolle, „wie man in den Himmel kommt, nicht wie der Himmel geht" – ein Wort, das er Kardinal Baronius zuschrieb.`,
    sources: [
      { kind: 'bibel', work: 'Prediger', ref: '1,5', quote: `Die Sonne geht auf und geht unter und läuft an ihren Ort, daß sie wieder daselbst aufgehe.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Psalm', ref: '104,5', quote: `der du das Erdreich gegründet hast auf seinen Boden, daß es bleibt immer und ewiglich.`, translation: 'Luther 1912', status: 'verbatim', note: 'Poetische Aussage über die Verlässlichkeit der Schöpfung, keine Bewegungslehre.' },
      { kind: 'sonstiges', author: 'Galileo Galilei', work: 'Brief an die Großherzogin Christina von Lothringen', year: '1615', quote: `Die Absicht des Heiligen Geistes sei, uns zu lehren, wie man in den Himmel kommt, und nicht, wie der Himmel geht.`, original: `l'intenzione dello Spirito Santo essere d'insegnarci come si vadia al cielo, e non come vadia il cielo`, translation: 'eigene Übersetzung', status: 'verbatim', note: 'Galilei schreibt das Wort einem Geistlichen hohen Ranges zu, gemeint ist Kardinal Cesare Baronius.' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche war am Galilei-Prozess nicht beteiligt – es war ein Verfahren der römischen Inquisition. Für die Apologetik ist dennoch wichtig: Die ganze Christenheit muss ehrlich anerkennen, dass hier eine kirchliche Autorität eine naturwissenschaftliche Frage mit Lehrautorität entschied und einem Gelehrten Unrecht tat. Die orthodoxe Tradition kennt kein Dogma über den Aufbau des Kosmos; schon die alexandrinische Schriftauslegung (Origenes) und Augustinus warnten davor, die Schrift als Lehrbuch der Naturkunde zu missbrauchen.`,
    sources: [
      { kind: 'kirchenvater', author: 'Augustinus', work: 'Über den Wortlaut der Genesis (De Genesi ad litteram)', ref: 'I,19,39', year: 'ca. 401–415', quote: `Es ist schändlich und gefährlich, wenn ein Ungläubiger einen Christen, der sich auf die Schrift beruft, über Erde, Himmel und Gestirne Unsinn reden hört; so werden die Schriften bei Außenstehenden lächerlich gemacht.`, status: 'paraphrase' },
      { kind: 'sonstiges', author: 'Johannes Paul II.', work: 'Ansprache an die Päpstliche Akademie der Wissenschaften', year: '31. Oktober 1992', quote: `Abschluss der Untersuchung des Galilei-Falles; das Urteil gegen Galilei beruhte auf einem Irrtum der Theologen, die Schriftauslegung und Naturerkenntnis nicht recht unterschieden – eine „tragische gegenseitige Verständnislosigkeit".`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Wissenschaftshistoriker (Maurice Finocchiaro, Ronald Numbers, Peter Harrison, Thony Christie, Tim O'Neill) sind sich weitgehend einig: Der Fall Galilei war ein Unrecht, aber kein Beleg für einen grundsätzlichen Krieg zwischen Wissenschaft und Religion. Die „Konfliktthese" geht auf Draper (1874) und White (1896) zurück und gilt in der Fachwissenschaft als überholt. 1633 war die Bewegung der Erde nicht bewiesen: Die Sternparallaxe wurde erst 1838 von Friedrich Wilhelm Bessel gemessen; das Tychonische Modell (die Planeten kreisen um die Sonne, die Sonne um die Erde) erklärte Galileis Fernrohrbeobachtungen ebenso gut; Galileis Hauptargument, die Gezeiten, war falsch, und Keplers Ellipsen beachtete er nicht.`,
    detail: `**Chronologie:**
- **1543:** Kopernikus' „De revolutionibus", Papst Paul III. gewidmet.
- **1610:** Galileis „Sidereus Nuncius" (Jupitermonde); bald darauf Venusphasen. Die Jesuitenastronomen des Collegio Romano bestätigen 1611 seine Beobachtungen.
- **1615:** Bellarmins Brief an Foscarini; Galileis Brief an Christina.
- **1616:** Indexdekret: Kopernikus' Werk „suspendiert, bis es verbessert ist" (donec corrigatur); Bellarmin ermahnt Galilei.
- **1632:** „Dialog über die beiden hauptsächlichen Weltsysteme". Das Argument des Papstes erscheint am Ende im Mund der Figur Simplicio.
- **1633:** Prozess, Urteil „der Häresie dringend verdächtig", Abschwörung, Hausarrest (zuletzt in seiner Villa in Arcetri bis zum Tod 1642). Keine Folter; eine formelle Androhung ist umstritten.
- **1638:** Galilei veröffentlicht unter Hausarrest seine „Discorsi" (Grundlagen der Mechanik).
- **1729/1838/1851:** Aberration des Sternlichts (Bradley), Sternparallaxe (Bessel), Foucaultsches Pendel – direkte Belege der Erdbewegung.
- **1758/1822/1835:** Allgemeines Verbot heliozentrischer Bücher aufgehoben; Druckerlaubnis für heliozentrische Werke; Galileis Dialog vom Index gestrichen.
- **1992:** Abschluss der päpstlichen Kommission (1979–1992).`,
    sources: [
      { kind: 'fachliteratur', author: 'Maurice A. Finocchiaro', work: 'The Galileo Affair. A Documentary History', year: '1989', quote: `Quellensammlung zum Prozess; zeigt die Verflechtung wissenschaftlicher, theologischer, persönlicher und politischer Faktoren.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Ronald L. Numbers (Hg.)', work: 'Galileo Goes to Jail and Other Myths about Science and Religion', year: '2009', quote: `Sammelband von Wissenschaftshistorikern unterschiedlicher Weltanschauung; u. a. widerlegt Finocchiaro die Mythen von Kerker und Folter Galileis.`, status: 'paraphrase', note: 'Numbers ist Agnostiker.' },
      { kind: 'fachliteratur', author: 'Christopher M. Graney', work: 'Setting Aside All Authority. Giovanni Battista Riccioli and the Science against Copernicus in the Age of Galileo', year: '2015', quote: `Die Gegner des Kopernikanismus hatten ernsthafte wissenschaftliche Argumente, besonders das Problem der scheinbaren Sterngrößen.`, status: 'paraphrase' },
      { kind: 'gegner', author: 'John William Draper', work: 'History of the Conflict between Religion and Science', year: '1874', quote: `Die Geschichte der Wissenschaft sei die Geschichte eines Konflikts zwischen der expansiven Kraft des menschlichen Geistes und dem Druck des überlieferten Glaubens.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Galilei wurde Unrecht getan – das gebe ich offen zu, und die katholische Kirche hat es 1992 selbst eingeräumt. Aber der Fall ist kein Beweis für Wissenschaftsfeindlichkeit. 1633 war die Erdbewegung noch nicht bewiesen; die Sternparallaxe wurde erst 1838 gemessen, und viele Astronomen bevorzugten mit guten Gründen Tycho Brahes Modell. Galileis Hauptbeweis, die Gezeiten, war falsch. Es ging um Wissenschaft, Autorität, Politik und verletzte Eitelkeit. Und: Kopernikus war Domherr, Galilei gläubiger Katholik, Kepler Lutheraner – die Pioniere der Astronomie waren Christen.`,
  keyPoints: [
    `**Zugeständnis zuerst:** Eine kirchliche Behörde entschied eine naturwissenschaftliche Frage mit Lehrautorität und tat einem Gelehrten Unrecht.`,
    `**Wissenschaftsstand 1633:** Erdbewegung unbewiesen (Parallaxe erst 1838, Aberration 1729); das Tychonische Modell passte zu allen Fernrohrbeobachtungen; die Gezeitentheorie Galileis war falsch.`,
    `**Mythen korrigieren:** keine Folter, kein Kerker; Hausarrest in einer Villa; „Und sie bewegt sich doch" ist eine Legende des 18. Jahrhunderts.`,
    `**Politik und Persönliches:** Urban VIII., früher Galileis Bewunderer, fühlte sich durch die Simplicio-Figur verspottet – mitten im Dreißigjährigen Krieg.`,
    `**Die Ausnahme beweist nicht die Regel:** Kopernikus, Galilei, Kepler waren Christen; die Kirche förderte die Astronomie über Jahrhunderte (Heilbron).`,
    `**Die Konfliktthese ist überholt:** Sie stammt von Draper (1874) und White (1896); heutige Wissenschaftshistoriker – auch nichtgläubige – lehnen sie ab.`,
  ],
  argument: {
    name: 'Warum der Fall Galilei die Konfliktthese nicht trägt',
    premises: [
      { text: `P1: Wenn das Christentum grundsätzlich wissenschaftsfeindlich wäre, müsste sich das in einem dauerhaften Muster zeigen, nicht in einem Einzelfall.`, support: `Eine allgemeine These braucht eine breite Datenbasis.` },
      { text: `P2: Die Gründer der modernen Astronomie und Physik (Kopernikus, Kepler, Galilei, Newton) waren gläubige Christen, und die Kirche förderte die Astronomie über Jahrhunderte.`, support: `Kopernikus' Widmung an Paul III., Jesuitenastronomie, Kathedralen als Sonnenobservatorien (Heilbron 1999).` },
      { text: `P3: Der Fall Galilei erklärt sich aus einer besonderen Verbindung von unbewiesener Hypothese, Gegenreformation, persönlichem Konflikt und Politik.`, support: `Finocchiaro, Numbers, Harrison.` },
    ],
    conclusion: `Der Fall Galilei ist ein reales Unrecht, aber kein Beleg für eine grundsätzliche Wissenschaftsfeindlichkeit des Christentums.`,
  },
  voices: [
    {
      person: 'galilei',
      role: 'als gläubiger Naturforscher',
      text: `Galilei selbst verstand sich nie als Gegner der Kirche. In seinem Brief an die Großherzogin Christina entwickelt er eine Hermeneutik, die er von Augustinus übernimmt: Gott hat zwei Bücher geschrieben, die Schrift und die Natur; beide können sich nicht widersprechen, weil sie denselben Urheber haben. Wo eine Naturerkenntnis sicher bewiesen ist, muss man die Schrift so auslegen, dass sie damit übereinstimmt – denn die Schrift spricht in der Sprache des Volkes und will zum Heil führen, nicht Astronomie lehren. Galilei blieb bis zu seinem Tod gläubiger Katholik; seine Tochter, die Nonne Maria Celeste, war ihm eine enge Vertraute.`,
      sources: [
        { kind: 'sonstiges', author: 'Galileo Galilei', work: 'Brief an die Großherzogin Christina', year: '1615', quote: `Schrift und Natur stammen beide vom göttlichen Wort und können einander nicht widersprechen.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'kopernikus',
      role: 'als Domherr und Astronom',
      text: `Kopernikus war Domherr im ermländischen Frauenburg. Sein Hauptwerk widmete er 1543 Papst Paul III.; der Kardinal Nikolaus von Schönberg hatte ihn zur Veröffentlichung ermutigt. Über 70 Jahre lang wurde das Werk ohne kirchliche Verurteilung gelesen und gelehrt. Die Kalenderreform von 1582 profitierte von astronomischer Arbeit, die auch auf kopernikanischen Tafeln aufbaute. Der „Fall" entstand erst im Klima der Gegenreformation – nicht aus dem Christentum als solchem.`,
      sources: [
        { kind: 'sonstiges', author: 'Nikolaus Kopernikus', work: 'De revolutionibus orbium coelestium, Widmungsvorrede an Papst Paul III.', year: '1543', quote: `Widmung des Werkes an den Papst; Hinweis auf die Ermutigung durch Kardinal Schönberg und Bischof Tiedemann Giese.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'stanley-jaki',
      role: 'als Physiker und Wissenschaftshistoriker',
      text: `Jaki betont, dass die moderne Naturwissenschaft nicht trotz, sondern wegen des christlichen Schöpfungsglaubens in Europa entstand: Die Überzeugung, dass ein vernünftiger Schöpfer eine geordnete, aber nicht notwendige Welt geschaffen hat, machte es sinnvoll, ihre Gesetze empirisch zu erforschen. Im Fall Galilei sieht er einen tragischen Fehltritt kirchlicher Behörden, der aber gerade deshalb so berühmt wurde, weil er im Gesamtbild der Beziehung zwischen Kirche und Wissenschaft eine Ausnahme ist.`,
      sources: [
        { kind: 'fachliteratur', author: 'Stanley L. Jaki', work: 'The Savior of Science', year: '1988', quote: `Der christliche Schöpfungsglaube als Voraussetzung der neuzeitlichen Naturwissenschaft.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'peter-harrison',
      role: 'als Wissenschaftshistoriker',
      text: `Harrison zeigt, dass die Kategorien „Wissenschaft" und „Religion" als getrennte, konkurrierende Bereiche ein Produkt des 19. Jahrhunderts sind. Im 17. Jahrhundert waren Naturphilosophie und Theologie ineinander verwoben; die Akteure des Galilei-Falles stritten innerhalb einer gemeinsamen christlichen Weltsicht über Autorität, Methode und Schriftauslegung. Wer den Fall als „Wissenschaft gegen Religion" erzählt, trägt eine moderne Schablone in die Vergangenheit.`,
      sources: [
        { kind: 'fachliteratur', author: 'Peter Harrison', work: 'The Territories of Science and Religion', year: '2015', quote: `„Wissenschaft" und „Religion" als getrennte Größen sind eine moderne Konstruktion; die Konfliktthese projiziert sie zurück.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'augustinus',
      role: 'als Lehrer der Schriftauslegung',
      text: `Augustinus formulierte schon um 400 das Prinzip, auf das sich Galilei berief: Christen sollen sich nicht durch naturkundlich unhaltbare Behauptungen lächerlich machen, die sie fälschlich der Schrift zuschreiben. Was über die Natur durch sichere Gründe erkannt ist, darf nicht unter Berufung auf einen missverstandenen Bibelvers bestritten werden – sonst verlieren Ungläubige das Vertrauen in die Schrift auch dort, wo sie vom Heil spricht.`,
      sources: [
        { kind: 'kirchenvater', author: 'Augustinus', work: 'De Genesi ad litteram', ref: 'I,19,39', year: 'ca. 401–415', quote: `Warnung an Christen, nicht unter Berufung auf die Schrift Unsinn über Naturdinge zu verbreiten.`, status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'verurteilt-fuer-wahrheit',
      objection: `Galilei hatte recht – die Erde bewegt sich. Die Kirche hat ihn trotzdem verurteilt, weil die Wahrheit der Bibel widersprach. Deutlicher kann man Wissenschaftsfeindlichkeit nicht zeigen.`,
      objectionBy: 'Neil deGrasse Tyson',
      answer: `Galilei hatte in der Sache recht, und das Urteil war ein Unrecht – das gestehe ich zu. Aber 1633 war die Erdbewegung nicht bewiesen: Die Sternparallaxe wurde erst 1838 gemessen. Galileis Fernrohrbeobachtungen widerlegten Ptolemäus, aber nicht Tycho Brahes Modell, das viele Astronomen – auch Jesuiten – deshalb übernahmen. Und Galileis Lieblingsbeweis, die Gezeiten, war falsch. Es war ein Streit um eine offene Frage, entschieden mit der falschen Autorität.`,
      followUps: [
        {
          id: 'bellarmin-dogmatisch',
          objection: `Bellarmin hat den Heliozentrismus für schriftwidrig erklärt. Die Theologie stand über der Wissenschaft – das ist der Kern des Problems.`,
          objectionBy: 'Maurice Finocchiaro',
          answer: `Bellarmin schrieb 1615 an Foscarini: Gäbe es einen wahren Beweis, dass die Erde um die Sonne kreist, müsse man die Schrift sorgfältig neu auslegen und eher sagen, man verstehe sie nicht, als einen Beweis für falsch zu erklären – er glaube nur nicht, dass es einen solchen Beweis gebe. Das Prinzip war also richtig. Der Fehler war, eine noch unbewiesene, aber offene Frage zur Glaubensfrage zu machen.`,
          sources: [
            { kind: 'sonstiges', author: 'Robert Bellarmin', work: 'Brief an Paolo Antonio Foscarini', year: '12. April 1615', quote: `Ich sage: Wenn es einen wahren Beweis gäbe, dass die Sonne im Mittelpunkt der Welt steht … und die Erde die Sonne umkreist, dann müsste man mit großer Sorgfalt vorgehen, die Schriftstellen auszulegen, die dem zu widersprechen scheinen, und eher sagen, dass wir sie nicht verstehen, als dass das Bewiesene falsch sei. Aber ich werde nicht glauben, dass es einen solchen Beweis gibt, solange er mir nicht gezeigt wird.`, translation: 'nach der engl. Übersetzung von M. A. Finocchiaro, dt. eigene Übersetzung', status: 'verbatim' },
          ],
          followUps: [
            {
              id: 'beweislast-unfair',
              objection: `Das ist ein Doppelstandard: Von Galilei verlangte man Beweise, aber der Geozentrismus war auch nicht bewiesen.`,
              objectionBy: 'Maurice Finocchiaro',
              answer: `Das ist ein berechtigter Punkt, den ich zugestehe: Die Behörden privilegierten die überlieferte Sicht. Aber die Gegner hatten auch echte physikalische Argumente: Man spürt keine Bewegung der Erde, es gab keine messbare Parallaxe, und wenn die Sterne so weit entfernt wären, müssten sie nach damaliger Optik riesig sein. Diese Probleme lösten erst Newtons Physik und spätere Optik. Der Skandal ist der Einsatz kirchlicher Lehrautorität – nicht das wissenschaftliche Zögern.`,
              followUps: [
                {
                  id: 'sternengroesse-apologetik',
                  objection: `Das Sterngrößen-Argument ist nachträgliche Apologetik. Niemand hat damals ernsthaft so argumentiert.`,
                  objectionBy: 'Tim O\'Neill',
                  answer: `Doch – es steht in den Quellen: Tycho Brahe brachte es vor, und Giovanni Battista Riccioli führte es 1651 in seinem „Almagestum Novum" unter 126 Argumenten an. Der Wissenschaftshistoriker Christopher Graney hat das 2015 ausführlich dokumentiert. Gelöst wurde das Problem erst, als man verstand, dass die scheinbare Scheibe eines Sterns im Fernrohr ein Beugungseffekt ist – im 19. Jahrhundert.`,
                  sources: [
                    { kind: 'fachliteratur', author: 'Christopher M. Graney', work: 'Setting Aside All Authority', year: '2015', quote: `Rekonstruktion des wissenschaftlichen Sterngrößen-Arguments gegen Kopernikus bei Tycho und Riccioli.`, status: 'paraphrase' },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'folter-kerker',
          objection: `Galilei wurde gefoltert und in den Kerker geworfen. Und doch sagte er trotzig: „Und sie bewegt sich doch!"`,
          objectionBy: 'Populäre Darstellung',
          answer: `Das ist Legende. Galilei wurde nicht gefoltert; er wohnte während des Prozesses in Räumen des Heiligen Offiziums bzw. in der toskanischen Botschaft und danach unter Hausarrest in seiner Villa in Arcetri, wo er weiterarbeitete und 1638 seine „Discorsi" veröffentlichte. „Eppur si muove" taucht erst 1757 im Druck auf. Was bleibt, ist schlimm genug: erzwungene Abschwörung, lebenslanger Hausarrest, verbotenes Buch.`,
          followUps: [
            {
              id: 'hausarrest-reicht',
              objection: `Ein alter Mann wird gezwungen abzuschwören und bis zum Tod unter Arrest gestellt. Das ist Verfolgung, ob mit oder ohne Kerker.`,
              objectionBy: 'Richard Dawkins',
              answer: `Ja, da stimme ich ohne Einschränkung zu – es war Unrecht. Die Frage ist nur, ob dieser Fall beweist, dass das Christentum wissenschaftsfeindlich ist. Dafür ist er ungeeignet: Er ist gerade deshalb so berühmt, weil er eine Ausnahme ist. Man nennt immer wieder Galilei – und kaum einen zweiten Fall.`,
              followUps: [
                {
                  id: 'johannes-paul-zu-spaet',
                  objection: `Die Kirche brauchte 359 Jahre, um sich zu entschuldigen! Das sagt alles.`,
                  objectionBy: 'Neil deGrasse Tyson',
                  answer: `Die Kirche hat den Heliozentrismus lange vorher akzeptiert: 1758 fiel das allgemeine Verbot heliozentrischer Bücher, 1822 gab es die Druckerlaubnis, 1835 wurde der Dialog vom Index gestrichen. 1992 wurde eine Kommission abgeschlossen, die den Fall historisch aufarbeitete. Schnell war das nicht – aber es zeigt, dass die Kirche ihre Position korrigiert hat, und katholische Priester wie Angelo Secchi oder Georges Lemaître standen später an der Spitze der Astronomie.`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'kirche-generell-feindlich',
      objection: `Galilei ist nur die Spitze des Eisbergs. Die Kirche hat die Wissenschaft immer behindert, wo sie konnte.`,
      objectionBy: 'John William Draper',
      answer: `Die Daten sprechen dagegen: Kopernikus war Domherr und widmete sein Werk dem Papst; die Jesuiten des Collegio Romano bestätigten 1611 Galileis Entdeckungen; Kepler war Lutheraner; Kathedralen in Bologna und Rom dienten als Sonnenobservatorien. Der Wissenschaftshistoriker John Heilbron schreibt, die katholische Kirche habe die Astronomie über sechs Jahrhunderte mehr unterstützt als wohl jede andere Institution. Drapers Konfliktthese gilt unter Wissenschaftshistorikern als überholt.`,
      sources: [
        { kind: 'fachliteratur', author: 'John L. Heilbron', work: 'The Sun in the Church. Cathedrals as Solar Observatories', year: '1999', quote: `Die katholische Kirche habe die Astronomie über sechs Jahrhunderte hinweg finanziell und gesellschaftlich stärker unterstützt als jede andere, wahrscheinlich als alle anderen Institutionen.`, status: 'paraphrase', note: 'Heilbron war kein Apologet, sondern ein führender säkularer Wissenschaftshistoriker (Berkeley).' },
      ],
      followUps: [
        {
          id: 'jesuiten-feinde',
          objection: `Die Jesuiten waren Galileis erbittertste Feinde – Scheiner, Grassi.`,
          objectionBy: 'Neil deGrasse Tyson',
          answer: `Mit beiden hatte Galilei persönliche Fehden: mit Scheiner um die Priorität bei den Sonnenflecken, mit Grassi um die Kometen – wobei Grassi recht hatte, dass Kometen jenseits des Mondes stehen, und Galilei irrte. Galilei war ein brillanter, aber beißender Polemiker, der sich Feinde machte. Das zeigt: Persönliche Konflikte spielten eine große Rolle, nicht ein Gegensatz von Glaube und Forschung.`,
          followUps: [
            {
              id: 'urban-simplicio',
              objection: `Am Ende hat der Papst persönlich Galilei vernichtet.`,
              objectionBy: 'Richard Dawkins',
              answer: `Urban VIII. war früher Galileis Bewunderer und hatte ihm sogar ein Gedicht gewidmet. Er erlaubte den Dialog unter der Bedingung, Kopernikus nur als Hypothese darzustellen und sein eigenes Argument aufzunehmen. Galilei legte dieses Argument am Ende der Figur „Simplicio" in den Mund – der Papst fühlte sich verspottet, und das mitten im Dreißigjährigen Krieg, als man ihm Schwäche vorwarf. Das entschuldigt nichts, erklärt aber viel: verletzter Stolz und Politik.`,
            },
          ],
        },
        {
          id: 'kopernikus-verboten',
          objection: `Aber 1616 wurde Kopernikus' Buch verboten!`,
          objectionBy: 'Andrew Dickson White',
          answer: `Es wurde „suspendiert, bis es verbessert ist" (donec corrigatur); 1620 legte man einige wenige Korrekturen fest, die Stellen als Hypothese formulierten, und danach durfte das Buch wieder gelesen werden. Das war eine falsche Entscheidung, aber kein Verbot der Astronomie – kopernikanische Tafeln wurden weiter benutzt.`,
        },
      ],
    },
    {
      id: 'bibel-geozentrisch',
      objection: `Die Bibel selbst ist geozentrisch: Josua lässt die Sonne stillstehen, und die Psalmen sagen, die Erde wanke nicht. Der Konflikt ist in den Text eingebaut.`,
      objectionBy: 'Carl Sagan',
      answer: `Die Bibel spricht in der Sprache der Erscheinung – wie wir heute noch „Sonnenaufgang" sagen, ohne Geozentriker zu sein. Josua beschreibt, was die Menschen sahen; Psalm 93 und 104 preisen die Verlässlichkeit der Schöpfung. Galilei selbst hat mit Augustinus genau so argumentiert: Die Schrift lehrt, wie man in den Himmel kommt, nicht wie der Himmel geht.`,
      followUps: [
        {
          id: 'vaeter-lasen-woertlich',
          objection: `Aber die Kirchenväter lasen diese Stellen wörtlich. Galileis Auslegung war eine Neuerung.`,
          objectionBy: 'Maurice Finocchiaro',
          answer: `Die Väter teilten das Weltbild ihrer Zeit, aber sie machten daraus kein Dogma; Basilius ließ in seinem Hexaemeron astronomische Fragen ausdrücklich offen, Augustinus warnte davor, Naturkunde aus der Schrift abzuleiten, und die alexandrinische Tradition las die Schrift nie nur buchstäblich. Galilei zitiert in seinem Brief an Christina vor allem Augustinus – er berief sich auf die Tradition, nicht gegen sie.`,
        },
      ],
    },
    {
      id: 'heute-genauso',
      objection: `Heute ist es dasselbe: Die Kirche bekämpft die Evolution und die Klimawissenschaft, wie sie damals Galilei bekämpfte.`,
      objectionBy: 'Neil deGrasse Tyson',
      answer: `Das ist eine Verallgemeinerung. Die orthodoxe Kirche hat kein Dogma über biologische Mechanismen oder das Erdalter; Christen diskutieren diese Fragen unterschiedlich. Und der Begründer der Urknalltheorie war ein katholischer Priester, Georges Lemaître. Wer Galilei als Schablone für jede heutige Debatte benutzt, ersetzt Argumente durch eine Erzählung.`,
      followUps: [
        {
          id: 'lemaitre-ausnahme',
          objection: `Lemaître ist eine Ausnahme – und Papst Pius XII. hat den Urknall prompt als Beweis der Schöpfung vereinnahmt.`,
          objectionBy: 'Neil deGrasse Tyson',
          answer: `Interessanterweise war es Lemaître selbst, der sich gegen diese Vereinnahmung wandte: Er hielt Kosmologie und Theologie methodisch auseinander und war mit der Ansprache Pius' XII. von 1951 unzufrieden. Ein Priester, der die Autonomie der Physik gegenüber seinem eigenen Papst verteidigt – das ist das Gegenteil der Konfliktthese.`,
          voices: [
            {
              person: 'lemaitre',
              role: 'als Kosmologe und Priester',
              text: `Lemaître, Begründer der Theorie vom „Uratom" (heute Urknall), betonte, dass seine Kosmologie weder Gottes Existenz beweise noch widerlege; sie bleibe „ganz außerhalb jeder metaphysischen oder religiösen Frage". Der Glaube gebe dem Forscher keinen Vorteil in der Physik, aber auch keinen Nachteil – er befreie ihn eher, die Welt unbefangen zu untersuchen. Lemaître ist damit ein lebendiges Gegenbeispiel zur Behauptung, Glaube und Forschung müssten kollidieren.`,
              sources: [
                { kind: 'wissenschaft', author: 'Georges Lemaître', work: 'The Primeval Atom Hypothesis and the Problem of the Clusters of Galaxies (Solvay-Konferenz)', year: '1958', quote: `Die Uratom-Hypothese bleibe ganz außerhalb jeder metaphysischen oder religiösen Frage.`, status: 'paraphrase' },
              ],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wann wurde die Bewegung der Erde zum ersten Mal direkt nachgewiesen?`,
    `Welche Fernrohrbeobachtung Galileis widerlegte das Tychonische Modell?`,
    `Kennst du einen zweiten Fall dieser Art – oder nennt man immer nur Galilei?`,
    `Wusstest du, dass Kopernikus sein Werk dem Papst gewidmet hat und Jesuiten Galileis Entdeckungen bestätigten?`,
    `Was sagen heutige Wissenschaftshistoriker – auch nichtgläubige – zur Konfliktthese von Draper und White?`,
  ],
  avoid: [
    `Das Urteil gegen Galilei rechtfertigen oder kleinreden – es war Unrecht.`,
    `Behaupten, Galilei habe „eigentlich unrecht" gehabt – er hatte in der Sache recht, nur seine Beweise reichten nicht.`,
    `Den Fall auf „Galilei war arrogant" reduzieren – das ist ein Teil der Geschichte, nicht ihre Entschuldigung.`,
  ],
  concessions: [
    `Die römische Kirche hat eine naturwissenschaftliche Frage mit Lehrautorität entschieden und Galilei Unrecht getan.`,
    `Die Behörden legten an die neue Theorie einen strengeren Maßstab an als an die alte.`,
    `Die vollständige Aufarbeitung (1992) kam sehr spät.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Ronald L. Numbers (Hg.)', work: 'Galileo Goes to Jail and Other Myths about Science and Religion', year: '2009', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Maurice A. Finocchiaro', work: 'Retrying Galileo, 1633–1992', year: '2005', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Christopher M. Graney', work: 'Setting Aside All Authority', year: '2015', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'John L. Heilbron', work: 'Galileo', year: '2010', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Galilei', 'Kopernikus', 'Konfliktthese', 'Inquisition', 'Astronomie'],
  related: ['kirchengeschichte-mythen/giordano-bruno', 'kirchengeschichte-mythen/finsteres-mittelalter-flache-erde', 'christentum-gesellschaft/christentum-ohne-nutzen', 'kosmologie/genesis-vs-urknall'],
};

export default claim;
