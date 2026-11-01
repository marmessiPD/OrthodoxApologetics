import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'id-keine-wissenschaft',
  title: `„Intelligent Design ist keine Wissenschaft, sondern verkappter Kreationismus (Dover 2005)."`,
  proponents: [
    { name: 'John E. Jones III', role: 'Bundesrichter, Middle District of Pennsylvania', work: 'Urteil Kitzmiller v. Dover Area School District, 400 F. Supp. 2d 707 (M.D. Pa. 2005)' },
    { name: 'Barbara Forrest', role: 'Philosophin, Southeastern Louisiana University; Sachverständige in Dover', work: 'Forrest & Gross, Creationism\'s Trojan Horse: The Wedge of Intelligent Design (2004)' },
    { name: 'Robert T. Pennock', role: 'Wissenschaftsphilosoph, Michigan State University; Sachverständiger in Dover', work: 'Tower of Babel: The Evidence against the New Creationism (1999)' },
    { name: 'Kenneth R. Miller', role: 'Zellbiologe, Brown University; Hauptsachverständiger der Kläger in Dover', work: 'Only a Theory (2008)' },
    { name: 'Nicholas J. Matzke', role: 'damals National Center for Science Education, Berater der Kläger', work: 'Beiträge auf The Panda\'s Thumb' },
  ],
  steelman: `Intelligent Design ist politisch und religiös motiviert und wurde als Strategie entwickelt, um Kreationismus nach dem Verbot durch den Obersten Gerichtshof (Edwards v. Aguillard, 1987) in die Schulen zu bringen. Das belegen die Entwürfe des ID-Schulbuchs „Of Pandas and People", in denen „Kreationisten" nach 1987 schlicht durch „Design-Befürworter" ersetzt wurden – samt des verräterischen Druckfehlers „cdesign proponentsists". Das „Wedge-Dokument" des Discovery Institute formuliert offen das Ziel, den Materialismus durch ein theistisches Verständnis zu ersetzen. ID stellt keine prüfbaren Hypothesen auf, betreibt keine nennenswerte Laborforschung, veröffentlicht kaum in Fachzeitschriften und beruft sich auf eine übernatürliche Ursache, die die Wissenschaft per Definition nicht untersuchen kann. Nach sechs Wochen Beweisaufnahme mit Experten beider Seiten urteilte ein konservativer, von George W. Bush ernannter Richter: ID ist keine Wissenschaft.`,
  biblical: {
    summary: `Die Schrift lehrt, dass Gottes Werk in der Schöpfung erkennbar ist (Ps 19,2; Röm 1,20; Weish 13,5). Daraus folgt nicht, dass Intelligent Design eine biblische Lehre wäre – ID ist ein wissenschaftlich-philosophisches Argument, kein Glaubensartikel. Christen sollten ehrlich sein: Viele ID-Vertreter sind gläubig, und ihre Motive sind nicht neutral. Aber Paulus fordert, alles zu prüfen und das Gute zu behalten (1 Thess 5,21) – Argumente sind nach ihrer Stichhaltigkeit zu beurteilen, nicht nach der Herkunft ihrer Vertreter.`,
    sources: [
      { kind: 'bibel', work: 'Psalmen', ref: '19,2', translation: 'Luther 1912', status: 'verbatim', quote: `Die Himmel erzählen die Ehre Gottes, und die Feste verkündigt seiner Hände Werk.` },
      { kind: 'bibel', work: 'Römer', ref: '1,20', translation: 'Luther 1912', status: 'verbatim', quote: `Denn sein unsichtbares Wesen, das ist seine ewige Kraft und Gottheit, wird ersehen, so man des wahrnimmt, an den Werken, nämlich an der Schöpfung der Welt; also daß sie keine Entschuldigung haben.` },
      { kind: 'bibel', work: '1. Thessalonicher', ref: '5,21', translation: 'Luther 1912', status: 'verbatim', quote: `Prüfet aber alles, und das Gute behaltet.` },
    ],
  },
  church: {
    summary: `Die koptische Kirche vertritt kein bestimmtes wissenschaftliches Modell – weder ID noch theistische Evolution – als Lehre. Sie bekennt mit den Vätern, dass die Schöpfung auf ihren Schöpfer verweist: Athanasius beschreibt die geordnete Welt als ein Buch, in dem man den Urheber erkennt. Ob man diese Erkennbarkeit in konkreten biologischen Strukturen (ID) oder in der Ordnung der Naturgesetze als Ganzer sieht, bleibt eine offene Frage, in der Christen verschiedener Meinung sein dürfen.`,
    sources: [
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Gegen die Heiden (Contra Gentes)', ref: '34–35', status: 'paraphrase', quote: `Gott hat die Schöpfung so geordnet, dass der Mensch, wenn er schon nicht auf seine Seele blickt, aus den Werken der Schöpfung ihren Schöpfer erkennen kann.` },
      { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'Über den Wortlaut der Genesis (De Genesi ad litteram)', ref: 'I,19,39', status: 'paraphrase', quote: `Es ist schändlich, wenn ein Christ über naturkundliche Dinge Unsinn redet und sich auf die Schrift beruft; Ungläubige verlachen dann auch das, was die Schrift wirklich lehrt.`, note: 'Wichtige Mahnung zur wissenschaftlichen Sorgfalt – gerade auch für ID-Befürworter.' },
    ],
  },
  opposingView: {
    summary: `Die großen Wissenschaftsorganisationen (u. a. die US National Academy of Sciences) lehnen ID als unwissenschaftlich ab; in der Biologie ist ID eine kleine Minderheitenposition. Das Dover-Urteil stellte fest, dass die Schulbehörde mit religiöser Absicht handelte und ID nicht als Wissenschaft gelten könne. Die Herkunft des Schulbuchs aus kreationistischen Entwürfen und das Wedge-Dokument sind belegt. Wissenschaftsphilosophisch ist die Lage komplizierter: Ein allgemein anerkanntes Abgrenzungskriterium zwischen Wissenschaft und Nicht-Wissenschaft gibt es nicht (Laudan 1983), und auch nicht-religiöse Philosophen wie Thomas Nagel und Bradley Monton haben die pauschale Ausgrenzung von ID kritisiert – ohne ID für wahr zu halten.`,
    detail: `- **Juristisch:** Das Urteil betrifft die Verfassungsfrage der Trennung von Staat und Religion in öffentlichen Schulen der USA. Die religiösen Motive einzelner Mitglieder der Schulbehörde waren gut dokumentiert.
- **Philosophisch:** Larry Laudan kritisierte bereits das ähnliche Urteil McLean v. Arkansas (1982) scharf, weil es mit veralteten Abgrenzungskriterien arbeitete – obwohl er den Kreationismus selbst für falsch hielt. Sein Punkt: Eine Theorie ist nicht unwissenschaftlich, nur weil sie falsch ist; man muss sie mit Argumenten widerlegen.
- **Prüfbarkeit:** ID hat prüfbare Behauptungen aufgestellt (Funktion „nichtkodierender" DNA, Grenzen von Mutation und Selektion, Seltenheit funktionaler Proteine). Kritiker halten diese für widerlegt – was voraussetzt, dass sie prüfbar sind.`,
    sources: [
      { kind: 'gegner', author: 'John E. Jones III (US District Court, M.D. Pennsylvania)', work: 'Kitzmiller v. Dover Area School District, 400 F. Supp. 2d 707', year: '2005', status: 'paraphrase', quote: `ID sei keine Wissenschaft; die Schulbehörde habe mit religiöser Absicht gehandelt und gegen die Establishment-Klausel verstoßen.` },
      { kind: 'fachliteratur', author: 'Larry Laudan', work: '„The Demise of the Demarcation Problem", in: R. S. Cohen, L. Laudan (Hg.), Physics, Philosophy and Psychoanalysis', ref: 'S. 111–127', year: '1983', status: 'paraphrase', quote: `Es gibt kein allgemein akzeptiertes Kriterium, das Wissenschaft von Nicht-Wissenschaft scharf abgrenzt; Begriffe wie „Pseudowissenschaft" sind eher rhetorische Waffen.`, note: 'Laudan war kein Kreationist oder ID-Befürworter.' },
      { kind: 'fachliteratur', author: 'Larry Laudan', work: '„Commentary: Science at the Bar – Causes for Concern", Science, Technology, & Human Values 7 (41)', ref: 'S. 16–19', year: '1982', status: 'paraphrase', quote: `Kritik am McLean-Urteil: Das Gericht habe den Kreationismus mit untauglichen Kriterien für unwissenschaftlich erklärt, statt festzustellen, dass er empirisch scheitert.` },
      { kind: 'fachliteratur', author: 'Thomas Nagel', work: '„Public Education and Intelligent Design", Philosophy & Public Affairs 36 (2)', ref: 'S. 187–205', year: '2008', status: 'paraphrase', quote: `Die Behauptung, ID sei grundsätzlich unwissenschaftlich, weil es eine nicht-natürliche Ursache annimmt, sei nicht haltbar.`, note: 'Nagel ist Atheist.' },
      { kind: 'fachliteratur', author: 'Bradley Monton', work: 'Seeking God in Science: An Atheist Defends Intelligent Design', year: '2009', status: 'paraphrase', note: 'Monton hält ID für falsch, aber für eine legitime wissenschaftliche Hypothese.' },
    ],
  },
  quickAnswer: `Das Dover-Urteil war eine juristische Entscheidung über religiöse Motive einer Schulbehörde, kein wissenschaftliches Ergebnis. Ein Richter kann die Frage „Was ist Wissenschaft?" nicht für die Philosophie entscheiden – und Wissenschaftsphilosophen wie Larry Laudan haben gezeigt, dass es kein allgemein anerkanntes Abgrenzungskriterium gibt. Wenn Kritiker sagen, ID sei widerlegt, geben sie zu, dass es prüfbar ist. Die Motive seiner Vertreter entscheiden nicht über die Stichhaltigkeit der Argumente.`,
  keyPoints: [
    `**Gerichte entscheiden Rechtsfragen:** Kitzmiller betraf die Trennung von Staat und Religion an US-Schulen. Die religiöse Motivation der Schulbehörde war real – über die Wahrheit von ID sagt das nichts.`,
    `**Das Abgrenzungsproblem ist ungelöst** (Laudan 1983); Nagel und Monton – beide Atheisten – kritisieren die pauschale Ausgrenzung.`,
    `**ID ist prüfbar:** Vorhersagen zur Funktion „nichtkodierender" DNA (Dembski 1998), zur Mindestzahl koordinierter Mutationen (Behe 2007, Summers et al. 2014) und zur Seltenheit funktionaler Proteine (Axe 2004).`,
    `**Genetischer Fehlschluss:** Die Herkunft einer Idee oder die Motive ihrer Vertreter entscheiden nicht über ihre Wahrheit. Auch der Urknall wurde anfangs als „zu theologisch" beargwöhnt – sein Begründer Lemaître war Priester.`,
    `**Methodologischer Naturalismus ist eine Konvention,** keine Entdeckung (Plantinga). Archäologie, Forensik und SETI erkennen Intelligenz als Ursache.`,
    `**Ehrlichkeit:** ID ist eine Minderheitenposition, viele Christen (Collins, Venema, Swamidass) lehnen sie ab; die koptische Kirche macht sie nicht zur Lehre.`,
  ],
  argument: {
    name: 'Warum „keine Wissenschaft" kein Gegenargument ist',
    premises: [
      { text: `P1: Es gibt kein allgemein anerkanntes Kriterium, das Wissenschaft von Nicht-Wissenschaft scharf trennt.`, support: `Laudan 1983; die Falsifizierbarkeit (Popper) schließt viele anerkannte Theorien aus und lässt manche fragwürdigen zu.` },
      { text: `P2: Die zentralen Behauptungen von ID sind empirisch prüfbar und wurden geprüft.`, support: `Behe vs. Summers et al. (Chloroquin), Junk-DNA-Vorhersage, Axe vs. Keefe & Szostak.` },
      { text: `P3: Herkunft und Motive einer Hypothese entscheiden nicht über ihre Wahrheit (genetischer Fehlschluss).`, support: `Gilt für theistische und atheistische Motive gleichermaßen; auch Dawkins oder Lewontin haben ausdrückliche weltanschauliche Motive.` },
      { text: `P4: Gerichte entscheiden Verfassungsfragen, nicht wissenschaftstheoretische Grundsatzfragen.`, support: `Das Kitzmiller-Urteil wurde wegen seiner wissenschaftsphilosophischen Passagen auch von Philosophen kritisiert, die ID ablehnen.` },
    ],
    conclusion: `Das Etikett „keine Wissenschaft" ersetzt nicht die Auseinandersetzung mit den Argumenten. Ob ID wahr ist, muss an den Daten entschieden werden.`,
  },
  voices: [
    {
      person: 'stephen-meyer',
      role: 'als Wissenschaftsphilosoph (Promotion in Cambridge über die Methodik der historischen Wissenschaften)',
      text: `Meyer argumentiert, ID verwende dieselbe Methode wie die Evolutionsbiologie selbst: den Schluss auf die beste Erklärung für vergangene Ereignisse anhand von Ursachen, die wir heute als wirksam kennen – Darwin übernahm diese Methode von Lyell. Wenn man fragt, welche Ursache bekanntermaßen große Mengen neuer funktionaler Information hervorbringt, lautet die Antwort aus unserer gesamten Erfahrung: Intelligenz. Ein solcher Schluss sei methodisch genauso wissenschaftlich wie der Schluss auf gemeinsame Abstammung – ob er zutrifft, müsse man an den Daten prüfen.`,
      sources: [
        { kind: 'fachliteratur', author: 'Stephen C. Meyer', work: 'Signature in the Cell', ref: 'Kap. 7–8, 18–19', year: '2009', status: 'paraphrase' },
        { kind: 'wissenschaft', author: 'Stephen C. Meyer', work: '„The origin of biological information and the higher taxonomic categories", Proceedings of the Biological Society of Washington 117 (2)', ref: 'S. 213–239', year: '2004', status: 'paraphrase', note: 'Der Herausgeber Richard Sternberg geriet nach der Veröffentlichung unter erheblichen Druck; die Gesellschaft distanzierte sich später von dem Artikel. Die Vorgänge sind umstritten; ein Bericht eines Ausschusses des US-Repräsentantenhauses (2006) kritisierte den Umgang mit Sternberg.' },
      ],
    },
    {
      person: 'dembski',
      role: 'als Mathematiker',
      text: `Dembski formuliert ein Kriterium, das in vielen anerkannten Disziplinen implizit verwendet wird: Wenn ein Ereignis zugleich sehr unwahrscheinlich und unabhängig spezifiziert ist, schließen wir auf Absicht – in der Kryptografie, der Betrugserkennung, der Forensik und bei der Suche nach außerirdischer Intelligenz. 1998 leitete er daraus eine Vorhersage ab: Aus Design-Sicht sei zu erwarten, dass das Genom weitgehend funktional ist, während die Vorstellung vom Genom als Flickwerk viel nutzlose DNA erwarten lasse. Damit gab ID sich selbst eine prüfbare Vorhersage.`,
      sources: [
        { kind: 'fachliteratur', author: 'William A. Dembski', work: '„Science and Design", First Things 86', year: '1998', status: 'paraphrase', quote: `Wenn Organismen entworfen sind, sollte die DNA so weit wie möglich Funktion zeigen; aus evolutionärer Sicht erwarte man dagegen viel nutzlose DNA.`, note: 'Sinngemäß; den genauen englischen Wortlaut vor wörtlicher Verwendung im Original prüfen.' },
        { kind: 'fachliteratur', author: 'William A. Dembski, Winston Ewert', work: 'The Design Inference (2. Aufl.)', year: '2023', status: 'paraphrase' },
      ],
    },
    {
      person: 'plantinga',
      role: 'als Wissenschaftsphilosoph',
      text: `Plantinga hält den methodologischen Naturalismus – die Regel, in der Wissenschaft nur natürliche Ursachen zuzulassen – für eine nützliche Konvention in vielen Bereichen, aber nicht für eine zwingende Definition von Wissenschaft. Wenn die Wahrheit lautet, dass Leben entworfen wurde, dann verbietet eine Wissenschaft, die diese Möglichkeit grundsätzlich ausschließt, sich selbst, die Wahrheit zu finden. Für einen Christen gebe es keinen Grund, sich an eine solche Selbstbeschränkung zu binden, wenn es um die Frage nach dem Ursprung geht.`,
      sources: [
        { kind: 'fachliteratur', author: 'Alvin Plantinga', work: '„Methodological Naturalism?", Perspectives on Science and Christian Faith 49 (3)', year: '1997', status: 'paraphrase' },
      ],
    },
    {
      person: 'newton',
      role: 'als Begründer der klassischen Physik',
      text: `Newton sah keinen Widerspruch darin, im Rahmen seiner Naturphilosophie auf einen intelligenten Urheber zu schließen. Im „Allgemeinen Scholium" der Principia schreibt er, das wunderschöne System von Sonne, Planeten und Kometen könne nur aus dem Ratschluss und der Herrschaft eines intelligenten und mächtigen Wesens hervorgehen. Seine Stimme zeigt: Der Schluss auf Design gehört zur Geschichte der Naturwissenschaft und ist keine Erfindung amerikanischer Kreationisten.`,
      sources: [
        { kind: 'wissenschaft', author: 'Isaac Newton', work: 'Philosophiae Naturalis Principia Mathematica (2. Aufl.), Scholium Generale', year: '1713', status: 'verbatim', quote: `Dieses wunderschöne System der Sonne, der Planeten und Kometen konnte nur aus dem Ratschluss und der Herrschaft eines intelligenten und mächtigen Wesens hervorgehen.`, original: `This most beautiful System of the Sun, Planets and Comets, could only proceed from the counsel and dominion of an intelligent and powerful being.`, translation: 'eigene Übersetzung nach der englischen Übersetzung von Andrew Motte (1729)' },
      ],
    },
    {
      person: 'lennox',
      role: 'als Mathematiker und Debattierer',
      text: `Lennox betont, dass Gott nicht als Konkurrent zu wissenschaftlichen Erklärungen verstanden werden darf: Ein Ford-Motor wird sowohl durch die Gesetze der Verbrennung als auch durch Henry Ford erklärt – das sind zwei Ebenen, keine Alternativen. Zugleich hält er es für legitim, auf Intelligenz als Ursache zu schließen, wo wir es mit sprachartiger Information wie in der DNA zu tun haben. Wer das von vornherein verbietet, betreibt nach Lennox nicht Wissenschaft, sondern setzt Naturalismus als Weltanschauung voraus.`,
      sources: [
        { kind: 'fachliteratur', author: 'John C. Lennox', work: "God's Undertaker: Has Science Buried God?", year: '2009', status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'dover-urteil',
      objection: `Ein Bundesgericht hat 2005 nach sechs Wochen Beweisaufnahme festgestellt: ID ist keine Wissenschaft, sondern Kreationismus. Der Richter war konservativ und von George W. Bush ernannt. Das Thema ist erledigt.`,
      objectionBy: 'Kenneth Miller',
      answer: `Das Gericht hatte eine Verfassungsfrage zu entscheiden: Hat die Schulbehörde von Dover mit religiöser Absicht gehandelt? Das war bei einigen Mitgliedern gut belegt, und insofern ist das Urteil nachvollziehbar. Ob ID als wissenschaftliche Hypothese wahr oder falsch ist, kann aber kein Gericht entscheiden. Der Wissenschaftsphilosoph Larry Laudan – kein Kreationist – hat schon das ähnliche Urteil von 1982 dafür kritisiert, dass es Philosophie per Richterspruch betrieb.`,
      followUps: [
        {
          id: 'pandas-entwuerfe',
          objection: `Die Entwürfe von „Of Pandas and People" zeigen, dass nach dem Urteil von 1987 „Kreationisten" einfach durch „Design-Befürworter" ersetzt wurden – samt dem Tippfehler „cdesign proponentsists". Das ist der Beweis.`,
          objectionBy: 'Barbara Forrest',
          answer: `Das ist ein belegter und für die ID-Bewegung peinlicher Befund, und ich bestreite ihn nicht. Er zeigt, dass ein bestimmtes Schulbuch aus kreationistischen Entwürfen hervorging. Er zeigt nicht, dass Behes Daten zur Malaria, Axe' Messungen oder Meyers Informationsargument falsch sind. Ideen werden an ihren Argumenten gemessen, nicht an ihrer Entstehungsgeschichte – sonst müssten wir auch den Urknall verwerfen, weil sein Begründer ein katholischer Priester war.`,
          followUps: [
            {
              id: 'wedge-dokument',
              objection: `Und das Wedge-Dokument des Discovery Institute erklärt offen, man wolle den Materialismus stürzen und eine theistische Kultur fördern. Das ist eine religiös-politische Agenda.`,
              objectionBy: 'Barbara Forrest',
              answer: `Das Dokument existiert, und seine Ziele sind weltanschaulich – das sollte man offen sagen. Aber auch auf der anderen Seite gibt es erklärte weltanschauliche Ziele: Richard Lewontin schrieb, er und viele Kollegen hätten eine „vorgängige Verpflichtung auf den Materialismus" und könnten „keinen göttlichen Fuß in die Tür lassen". Motive gibt es auf beiden Seiten. Entscheidend ist, ob die Argumente tragen.`,
              sources: [
                { kind: 'gegner', author: 'Richard C. Lewontin', work: '„Billions and Billions of Demons", The New York Review of Books', year: '1997', status: 'verbatim', quote: `… wir haben eine vorgängige Verpflichtung, eine Verpflichtung auf den Materialismus. … Wir können keinen göttlichen Fuß in die Tür lassen.`, original: `… we have a prior commitment, a commitment to materialism. … we cannot allow a Divine Foot in the door.`, translation: 'eigene Übersetzung' },
              ],
            },
          ],
        },
        {
          id: 'methodologischer-naturalismus',
          objection: `Wissenschaft ist per Definition methodologischer Naturalismus. Übernatürliche Ursachen sind ausgeschlossen, weil man sie nicht testen kann.`,
          objectionBy: 'Robert Pennock',
          answer: `Das ist eine Konvention, keine Entdeckung – und wenn die Wahrheit lautet, dass das Leben entworfen wurde, würde diese Konvention die Wissenschaft daran hindern, die Wahrheit zu erkennen (Plantinga). Außerdem schließt ID zunächst nur auf Intelligenz als Ursache, nicht auf das Übernatürliche. Archäologen, Forensiker und SETI-Forscher erkennen Intelligenz, ohne sie physikalisch zu „erklären".`,
          followUps: [
            {
              id: 'designer-ist-gott',
              objection: `Komm schon. Wer soll der Designer sein, wenn nicht Gott? Ihr meint doch alle Gott.`,
              objectionBy: 'Jerry Coyne',
              answer: `Ehrlich gesagt: Die meisten ID-Vertreter sind Christen und glauben persönlich, dass der Designer Gott ist – ich auch. Aber das ist ein zweiter, philosophisch-theologischer Schritt. Der wissenschaftliche Schluss reicht nur bis zu „Intelligenz". Auch wer die Feinabstimmung des Universums oder den Urknall theistisch deutet, unterscheidet zwischen dem Befund und seiner Deutung.`,
              followUps: [
                {
                  id: 'hume-hat-paley-widerlegt',
                  objection: `Dann ist ID nur Paleys Uhrmacher-Argument im Laborkittel – und das haben Hume und Darwin längst erledigt. Analogien zwischen Maschinen und Organismen tragen nicht.`,
                  objectionBy: 'Jerry Coyne',
                  answer: `Hume kritisierte einen **Analogieschluss**: Organismen ähneln Uhren, also haben sie einen Uhrmacher. Das Design-Argument heute ist ein **Schluss auf die beste Erklärung** – dieselbe Methode, die Darwin selbst nach Lyell verwendete: Man erklärt vergangene Ereignisse durch Ursachen, deren Wirkkraft wir heute kennen. Wir kennen genau eine Ursache, die codierte, funktionale Information und vielteilige Maschinen hervorbringt: Intelligenz. Gegen diese Schlussform greift Humes Kritik nicht – und Darwin hat Paley nicht widerlegt, sondern eine alternative Ursache vorgeschlagen, deren Reichweite gerade umstritten ist.`,
                  voices: [
                    {
                      person: 'stephen-meyer',
                      role: 'als Wissenschaftsphilosoph',
                      text: `Meyer, der über die Methodik der historischen Wissenschaften promoviert hat, rekonstruiert Darwins Vorgehen als Schluss auf die beste Erklärung nach dem Prinzip der „vera causa": Eine historische Erklärung muss eine Ursache anführen, die nachweislich fähig ist, die fragliche Wirkung hervorzubringen. Genau diesen Maßstab wendet er auf die Herkunft biologischer Information an.`,
                      sources: [
                        { kind: 'fachliteratur', author: 'Stephen C. Meyer', work: 'Signature in the Cell', ref: 'Kap. 7 und 15', year: '2009', status: 'paraphrase' },
                      ],
                    },
                    {
                      person: 'paley',
                      role: 'als Naturtheologe',
                      text: `Paley selbst stellte schon klar, dass sein Schluss nicht davon abhängt, dass die Uhr perfekt ist oder dass man den Uhrmacher kennt: Entscheidend ist die Zusammenordnung der Teile zu einem Zweck. Dieser Kern – Funktion aus aufeinander abgestimmten Teilen – ist das, was moderne Design-Argumente mit biochemischen Daten neu prüfen.`,
                      sources: [
                        { kind: 'fachliteratur', author: 'William Paley', work: 'Natural Theology', ref: 'Kap. 1', year: '1802', status: 'paraphrase' },
                      ],
                    },
                  ],
                  questionsBack: [
                    `Welche andere Ursache außer Intelligenz kennst du aus Erfahrung, die einen Code samt Übersetzungsapparat hervorbringt?`,
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'keine-vorhersagen',
      objection: `ID macht keine überprüfbaren Vorhersagen und betreibt keine Forschung. Es gibt kein Laborprogramm, keine Ergebnisse, nichts.`,
      objectionBy: 'Jerry Coyne',
      answer: `ID hat prüfbare Vorhersagen gemacht: Dembski erwartete 1998, dass sich große Teile der „Junk-DNA" als funktional erweisen; Behe sagte 2007 voraus, dass Chloroquinresistenz mindestens zwei koordinierte Mutationen braucht (bestätigt durch Summers et al. 2014); Axe veröffentlichte seine Messungen im Journal of Molecular Biology. Und wenn du sagst, ID sei widerlegt, gibst du zu, dass es prüfbar ist.`,
      followUps: [
        {
          id: 'junk-vorhersage-falsch',
          objection: `Die Junk-DNA-Vorhersage ist doch falsch: Der größte Teil des Genoms ist Müll – Graur, Moran und die Mutationslast zeigen das.`,
          objectionBy: 'Larry Moran',
          answer: `Das ist eine echte, offene wissenschaftliche Kontroverse – und genau das zeigt, dass die Vorhersage prüfbar ist. Seit ENCODE 2012 hat sich der Kenntnisstand über Funktionen nichtkodierender DNA erheblich erweitert, auch wenn die 80-%-Zahl von ENCODE übertrieben war. Wie es ausgeht, entscheiden die Daten der nächsten Jahre; siehe den Claim zur Junk-DNA.`,
          followUps: [
            {
              id: 'wenn-90-prozent-muell',
              objection: `Und wenn sich herausstellt, dass 90 % Müll sind – gibst du ID dann auf?`,
              objectionBy: 'Dennis Venema',
              answer: `Dann wäre eine wichtige ID-Vorhersage geschwächt, und das würde ich ehrlich zugeben. ID hängt aber nicht allein daran: Die Informationsfrage beim Ursprung des Lebens und neuer Proteine bliebe bestehen. Und aus christlicher Sicht ist Verfall nach dem Fall zu erwarten – „Design" heißt nicht „alles ist perfekt erhalten".`,
            },
          ],
        },
        {
          id: 'hausjournal',
          objection: `Eure Studien erscheinen meist in BIO-Complexity, einem hauseigenen Journal. Das zählt nicht als echte Fachliteratur.`,
          objectionBy: 'Nathan Lents',
          answer: `Das ist zum Teil berechtigt – BIO-Complexity wird von ID-nahen Forschern herausgegeben, das sollte man offen sagen. Aber es gibt auch Arbeiten in etablierten Fachzeitschriften: Axe im Journal of Molecular Biology (2004), Behe in der Quarterly Review of Biology (2010). Und dass ID-nahe Forscher über Hindernisse bei Veröffentlichungen berichten – etwa im Fall Sternberg 2004 –, ist zumindest ein Grund, die Begutachtungspraxis nicht als neutral vorauszusetzen.`,
        },
      ],
    },
    {
      id: 'gott-der-luecken',
      objection: `ID ist ein Lückenbüßer-Argument: Wo die Wissenschaft noch nichts weiß, setzt ihr einen Designer ein.`,
      objectionBy: 'Richard Dawkins',
      answer: `ID schließt nicht aus dem, was wir nicht wissen, sondern aus dem, was wir wissen: Funktionale, codierte Information entsteht in unserer gesamten Erfahrung nur durch Intelligenz. Das ist ein Schluss auf die beste Erklärung, wie Darwin ihn selbst verwendete. Und das christliche Gottesbild ist kein Lückenbüßer: Gott ist Schöpfer und Erhalter auch dessen, was wir vollständig verstehen.`,
      followUps: [
        {
          id: 'kein-mechanismus-wann-wie',
          objection: `Aber ihr sagt nie, wie, wann und wo der Designer eingegriffen hat. Das ist keine Erklärung.`,
          objectionBy: 'Nick Matzke',
          answer: `Eine Ursache zu erkennen und ihren genauen Ablauf zu kennen, sind zwei verschiedene Schritte. Ein Archäologe erkennt eine Inschrift als Werk eines Menschen, auch wenn er nicht weiß, wann genau und mit welchem Werkzeug sie gemeißelt wurde. Die Fragen nach dem Wie und Wann sind legitime Forschungsfragen – sie sind nicht die Voraussetzung dafür, Design überhaupt zu erkennen.`,
        },
      ],
    },
    {
      id: 'christen-lehnen-id-ab',
      objection: `Auch viele Christen lehnen ID ab – Francis Collins, Dennis Venema, Joshua Swamidass, die BioLogos-Bewegung. ID schadet der Glaubwürdigkeit der Kirche.`,
      objectionBy: 'Dennis Venema',
      answer: `Das stimmt, und ich respektiere diese Christen. Für die koptische Kirche ist ID keine Glaubenslehre; sie verlangt den Glauben an Gott als Schöpfer, an die geistige Seele und an Adam und Eva, nicht an ein bestimmtes biologisches Modell. ID ist ein wissenschaftliches Argument, das auf seinen eigenen Füßen stehen oder fallen muss. Unsere Gemeinsamkeit ist größer als der Unterschied: Wir alle lehnen den ungelenkten Materialismus ab.`,
      followUps: [
        {
          id: 'id-bindet-glauben-an-luecken',
          objection: `Gerade deshalb ist ID gefährlich: Es bindet den Glauben an wissenschaftliche Lücken. Wenn eine Lücke sich schließt, verlieren junge Christen ihren Glauben.`,
          objectionBy: 'Joshua Swamidass',
          answer: `Das ist eine ernstzunehmende pastorale Sorge. Deshalb sollte man nie sagen: „Wenn ID falsch ist, ist das Christentum falsch." Der Glaube ruht auf der Auferstehung Christi und auf Gottes Offenbarung; die natürliche Theologie – Kosmologie, Vernunft, Moral – ist eine Ergänzung. Ein Argument muss man aber nach seiner Stichhaltigkeit beurteilen, nicht nach seinen möglichen pastoralen Folgen.`,
        },
      ],
    },
    {
      id: 'schlechte-wissenschaft-statt-keine',
      objection: `Ich gebe zu: Die Abgrenzungsfrage ist philosophisch ungelöst, das Etikett „unwissenschaftlich" ist eher ein Totschlagargument. Aber das hilft dir nicht. ID ist dann eben keine Nicht-Wissenschaft, sondern schlechte, widerlegte Wissenschaft.`,
      objectionBy: 'Joshua Swamidass',
      answer: `Danke – das ist ein ehrlicher und viel besserer Ausgangspunkt. Der Philosoph Larry Laudan hat schon 1983 gezeigt, dass es kein allgemein anerkanntes Abgrenzungskriterium gibt, und selbst Atheisten wie Thomas Nagel und Bradley Monton haben bestritten, dass ID per Definition unwissenschaftlich sei. Wenn wir uns einig sind, dass ID eine empirische Behauptung ist, dann reden wir endlich über Daten: Proteinfaltungen, Wartezeiten, Ursprung der Information. Genau dieses Gespräch will ich führen.`,
      voices: [
        {
          person: 'plantinga',
          role: 'als Philosoph',
          text: `Plantinga argumentiert, dass es keine neutrale Definition von Wissenschaft gibt, die Design-Hypothesen von vornherein ausschließt, ohne dabei auch anerkannte Forschung auszuschließen. Ob eine Hypothese wahr ist, müsse an den Daten entschieden werden, nicht an einer Etikettierung.`,
          sources: [
            { kind: 'fachliteratur', author: 'Alvin Plantinga', work: 'Where the Conflict Really Lies: Science, Religion, and Naturalism', year: '2011', status: 'paraphrase' },
          ],
        },
      ],
      sources: [
        { kind: 'fachliteratur', author: 'Larry Laudan', work: '„The demise of the demarcation problem", in: R. S. Cohen, L. Laudan (Hg.), Physics, Philosophy and Psychoanalysis', year: '1983', status: 'paraphrase', quote: `Es gibt kein tragfähiges, allgemein anerkanntes Kriterium, das Wissenschaft von Nicht-Wissenschaft trennt.` },
        { kind: 'gegner', author: 'Thomas Nagel', work: '„Public education and intelligent design", Philosophy & Public Affairs 36 (2)', year: '2008', status: 'paraphrase', note: 'Nagel ist Atheist; er hält ID nicht für überzeugend, bestreitet aber, dass es per Definition unwissenschaftlich sei.' },
        { kind: 'gegner', author: 'Bradley Monton', work: 'Seeking God in Science: An Atheist Defends Intelligent Design', year: '2009', status: 'paraphrase' },
      ],
      followUps: [
        {
          id: 'id-vorhersagen-gescheitert',
          objection: `Gut, dann reden wir über Daten: Behes Vorhersagen sind gescheitert. Thornton hat die Entstehung voneinander abhängiger Systeme gezeigt, die Junk-DNA ist real, und neue Gene entstehen ständig. Als empirisches Programm ist ID gescheitert.`,
          objectionBy: 'Larry Moran',
          answer: `Dann sortieren wir ehrlich: **Bestätigt** wurde Behes Vorhersage, dass Chloroquinresistenz mindestens zwei gleichzeitige Mutationen braucht (Summers u. a. 2014). **Umstritten** ist der funktionale Anteil des Genoms – die Debatte ist offen, nicht entschieden. **Gezeigt** wurde bei Thorntons V-ATPase, dass Abhängigkeit durch den Verlust von Bindungsflächen entstehen kann – nicht, wie die Maschine selbst entstand. Und neue Gene sind bisher kurze, einfache Proteine. Das ist kein Scheitern, sondern ein normaler Forschungsstand mit Treffern, offenen Fragen und Korrekturen – wie bei jedem Programm.`,
          questionsBack: [
            `Welche konkrete, quantitative Vorhersage des Neodarwinismus über die Entstehung einer neuen Proteinfaltung wurde experimentell bestätigt?`,
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Welches Abgrenzungskriterium verwendest du, und schließt es nicht auch anerkannte Theorien aus?`,
    `Wenn ID widerlegt ist – wodurch genau? Dann muss es doch prüfbar gewesen sein.`,
    `Würdest du die Urknalltheorie verwerfen, weil ihr Begründer ein Priester war?`,
    `Sind Lewontins weltanschauliche Motive ein Grund, den Materialismus für unwissenschaftlich zu halten?`,
    `Kann ein Richter für die Wissenschaftsphilosophie entscheiden, was Wissenschaft ist?`,
  ],
  avoid: [
    `Das Dover-Urteil als „Fehlurteil eines voreingenommenen Richters" abtun. Die religiösen Motive der Schulbehörde waren real.`,
    `Die Pandas-Entwürfe oder das Wedge-Dokument leugnen. Sie existieren.`,
    `Behaupten, ID werde „von der Wissenschaft unterdrückt", ohne konkrete, belegbare Fälle. Das klingt nach Verschwörungstheorie.`,
    `ID mit dem christlichen Glauben gleichsetzen. Für die Kirche ist es keine Lehre.`,
  ],
  concessions: [
    `ID ist in der Biologie eine kleine Minderheitenposition; die großen Fachorganisationen lehnen es ab.`,
    `Das Schulbuch „Of Pandas and People" ging nachweislich aus kreationistischen Entwürfen hervor, und das Wedge-Dokument formuliert weltanschauliche Ziele.`,
    `Viele ID-Publikationen erscheinen in einem ID-nahen Journal; das Forschungsprogramm ist klein.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Stephen C. Meyer', work: 'Signature in the Cell', year: '2009', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Bradley Monton', work: 'Seeking God in Science: An Atheist Defends Intelligent Design', year: '2009', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Larry Laudan', work: '„The Demise of the Demarcation Problem"', year: '1983', status: 'paraphrase' },
    { kind: 'gegner', author: 'Barbara Forrest, Paul R. Gross', work: "Creationism's Trojan Horse", year: '2004', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Intelligent Design', 'Dover', 'Wissenschaftstheorie', 'Abgrenzungsproblem', 'Methodologischer Naturalismus'],
  related: [
    'evolution/evolution-ist-tatsache',
    'genetik/junk-dna',
    'erkenntnistheorie/nur-wissenschaft-liefert-wissen',
    'naturalismus/lueckenbuesser-gott',
    'kirchengeschichte-mythen/galilei',
  ],
};

export default claim;
