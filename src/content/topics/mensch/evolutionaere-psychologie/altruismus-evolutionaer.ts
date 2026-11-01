import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'altruismus-evolutionaer',
  title: `„Altruismus und Liebe sind evolutionär vollständig erklärt."`,
  proponents: [
    { name: 'Richard Dawkins', role: 'Evolutionsbiologe, Oxford', work: 'The Selfish Gene (1976; dt. Das egoistische Gen)' },
    { name: 'Frans de Waal', role: 'Primatologe, Emory University (gest. 2024)', work: 'Primates and Philosophers (2006); The Bonobo and the Atheist (2013)' },
    { name: 'Michael Shermer', role: 'Herausgeber des „Skeptic"', work: 'The Science of Good and Evil (2004)' },
    { name: 'Steven Pinker', role: 'Kognitionspsychologe, Harvard University', work: 'The Better Angels of Our Nature (2011)' },
    { name: 'Robert Sapolsky', role: 'Neuroendokrinologe, Stanford University', work: 'Behave (2017)' },
  ],
  steelman: `Lange galt Altruismus als Rätsel für Darwin: Warum sollte ein Lebewesen anderen helfen, wenn das die eigene Fortpflanzung mindert? Heute ist das Rätsel gelöst. W. D. Hamilton zeigte 1964 mathematisch, dass Hilfe für Verwandte sich lohnt, weil sie die eigenen Gene trägt (Hamiltons Regel r·B > C). Robert Trivers erklärte 1971 die Hilfe für Nicht-Verwandte durch Gegenseitigkeit: Ich helfe dir, du hilfst mir. Indirekte Gegenseitigkeit belohnt großzügige Menschen mit gutem Ruf; kostspielige Signale zeigen Partnern die eigene Qualität; Gruppen mit vielen Kooperierenden setzen sich gegen egoistische Gruppen durch. Primaten zeigen Empathie, Trost und Fairness (de Waal); Oxytocin stärkt Vertrauen und Bindung. Elternliebe, Freundschaft, romantische Liebe, Großzügigkeit – alles hat eine klare evolutionäre Funktion und eine bekannte Neurochemie. Für einen Gott als Quelle der Liebe bleibt nichts zu erklären.`,
  biblical: {
    summary: `Die Bibel bestreitet nicht, dass Menschen von Natur aus ihre Familie lieben und denen Gutes tun, die ihnen Gutes tun – Jesus selbst sagt das, und er sagt zugleich, dass das nicht genügt: „Denn so ihr liebet, die euch lieben, was werdet ihr für Lohn haben? Tun nicht dasselbe auch die Zöllner?" (Mt 5,46). Er fordert eine Liebe, die über Verwandtschaft und Gegenseitigkeit hinausgeht: „Liebet eure Feinde; segnet, die euch fluchen" (Mt 5,44), „leihet, dass ihr nichts dafür hoffet" (Lk 6,35), und gebt Almosen im Verborgenen, nicht für den Ruf (Mt 6,3–4). Die Quelle dieser Liebe ist Gott: „Lasset uns ihn lieben; denn er hat uns erst geliebt" (1 Joh 4,19) – sichtbar am Kreuz, wo Christus für Feinde starb (Röm 5,8–10).`,
    detail: `- **Jesus „kennt" Trivers:** In Mt 5,46–47 und Lk 6,32–34 benennt er Gegenseitigkeit und Verwandtenliebe ausdrücklich als das Normale, das auch „Sünder" tun.
- **Gegen den Ruf-Mechanismus:** Mt 6,1–4 verlangt Wohltätigkeit im Verborgenen – genau dort, wo indirekte Gegenseitigkeit (Reputation) keinen Gewinn bringt.
- **Der barmherzige Samariter** (Lk 10,30–37) hilft einem Fremden aus einer verfeindeten Volksgruppe unter eigenem Risiko und ohne Aussicht auf Gegenleistung.
- **Natürliche Liebe ist gut:** Die Schrift tadelt die Lieblosigkeit gegenüber den Eigenen (Röm 1,31; 1 Tim 5,8). Gnade zerstört die Natur nicht, sie vollendet und übersteigt sie.`,
    sources: [
      { kind: 'bibel', work: 'Matthäus', ref: '5,44–46', quote: `Ich aber sage euch: Liebet eure Feinde; segnet, die euch fluchen; tut wohl denen, die euch hassen; bittet für die, so euch beleidigen und verfolgen … Denn so ihr liebet, die euch lieben, was werdet ihr für Lohn haben? Tun nicht dasselbe auch die Zöllner?`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Lukas', ref: '6,35', status: 'paraphrase', quote: `Liebt eure Feinde, tut Gutes und leiht, ohne etwas dafür zu erhoffen.` },
      { kind: 'bibel', work: 'Römer', ref: '5,8', quote: `Darum preiset Gott seine Liebe gegen uns, daß Christus für uns gestorben ist, da wir noch Sünder waren.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Johannes', ref: '4,19', quote: `Lasset uns ihn lieben; denn er hat uns erst geliebt.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '15,13', quote: `Niemand hat größere Liebe denn die, daß er sein Leben läßt für seine Freunde.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Für die koptisch-orthodoxe Kirche ist Gott selbst Liebe (1 Joh 4,8) – die ewige Gemeinschaft von Vater, Sohn und Heiligem Geist. Der Mensch ist nach seinem Bild geschaffen und darum zur Liebe fähig; durch die Sünde ist diese Liebe verkrümmt und auf das Eigene beschränkt, durch Christus und den Heiligen Geist wird sie zur Agape geheilt, die auch den Feind umfasst. Die koptische Kirche, eine Kirche der Märtyrer, kennt diese Feindesliebe nicht nur als Lehre: Als 2015 einundzwanzig Christen (zwanzig Kopten und ein Ghanaer) in Libyen ermordet wurden, sprachen Angehörige öffentlich Vergebung aus und beteten für die Mörder.`,
    detail: `- **Vater Matta el-Meskeen** beschreibt in „Die Gemeinschaft der Liebe" die christliche Liebe als Teilhabe an der Liebe Gottes selbst, nicht als bloße menschliche Tugend.
- **Die Märtyrer von Libyen (2015)** wurden von der koptischen Kirche in das Synaxarium aufgenommen. Ein Bruder zweier Ermordeter dankte in einem Fernsehinterview öffentlich dafür, dass die Glaubensbekenntnisse der Opfer nicht herausgeschnitten wurden, und betete für die Täter.`,
    sources: [
      { kind: 'bibel', work: '1. Johannes', ref: '4,7–8', status: 'paraphrase', quote: `Ihr Lieben, lasst uns einander lieben; denn die Liebe ist von Gott … denn Gott ist die Liebe.` },
      { kind: 'koptisch', author: 'Matta el-Meskeen', work: 'Die Gemeinschaft der Liebe (The Communion of Love)', status: 'paraphrase' },
      { kind: 'sonstiges', work: 'Interview mit Beshir Kamel, Bruder zweier der in Libyen ermordeten Kopten (SAT-7, Februar 2015)', year: '2015', status: 'paraphrase', note: 'Vielfach berichtet; Wortlaut und Sender vor wörtlicher Verwendung prüfen.' },
    ],
  },
  opposingView: {
    summary: `Die Evolutionstheorie der Kooperation ist ein gut etabliertes Forschungsfeld: Verwandtenselektion (Hamilton 1964), direkte Gegenseitigkeit (Trivers 1971; Axelrod & Hamilton 1981), indirekte Gegenseitigkeit über Reputation, Netzwerkeffekte und Gruppen- bzw. Mehrebenenselektion erklären viele Formen von Kooperation. Martin Nowak fasste 2006 „fünf Regeln" der Evolution der Kooperation zusammen. Großräumige Kooperation unter Fremden wird zusätzlich durch kulturelle Evolution, Normen und Institutionen erklärt – auch durch Religion selbst. Wichtig: Evolutionäre Erklärungen betreffen die **letzten Ursachen** (warum eine Anlage entstand), nicht die **Motive** im Einzelfall; ein Mensch kann echt selbstlos handeln, auch wenn seine Anlage evolutionär entstanden ist (Sober & Wilson). Ob die Biologie auch die moralische Verpflichtung und die radikale Feindesliebe erklärt, ist keine biologische, sondern eine philosophische Frage.`,
    detail: `- **Hamilton (1964):** Verwandtenselektion, Hamiltons Regel.
- **Trivers (1971):** reziproker Altruismus.
- **Nowak (Science 2006):** fünf Mechanismen – Verwandtenselektion, direkte, indirekte und Netzwerk-Reziprozität, Gruppenselektion.
- **Choi & Bowles (Science 2007):** Modelle der Koevolution von „parochialem Altruismus" (Hilfsbereitschaft nach innen) und Feindseligkeit gegenüber Außengruppen.
- **Oxytocin:** Die frühe Studie von Kosfeld u. a. (Nature 2005) zu Vertrauen ließ sich nur eingeschränkt replizieren (Nave, Camerer & McCullough 2015); De Dreu u. a. (PNAS 2011) fanden, dass Oxytocin die Bevorzugung der eigenen Gruppe verstärken kann.
- **Ehrliche Stimmen der Gegenseite:** Michael Ruse und E. O. Wilson schrieben 1986, die Moral als objektiv verbindlich sei eine Illusion, die uns unsere Gene vorspielen; Philosophen wie Sharon Street und Richard Joyce zeigen, dass evolutionäre Erklärungen der Moral den moralischen Realismus unter Druck setzen.`,
    sources: [
      { kind: 'wissenschaft', author: 'W. D. Hamilton', work: 'The genetical evolution of social behaviour I & II', ref: 'Journal of Theoretical Biology 7 (1964), 1–16; 17–52', year: '1964', status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'Robert L. Trivers', work: 'The evolution of reciprocal altruism', ref: 'Quarterly Review of Biology 46 (1971), 35–57', year: '1971', status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'Martin A. Nowak', work: 'Five rules for the evolution of cooperation', ref: 'Science 314 (2006), 1560–1563', year: '2006', status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'J.-K. Choi, S. Bowles', work: 'The coevolution of parochial altruism and war', ref: 'Science 318 (2007), 636–640', year: '2007', status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'G. Nave, C. Camerer, M. McCullough', work: 'Does oxytocin increase trust in humans? A critical review of research', ref: 'Perspectives on Psychological Science 10 (2015), 772–789', year: '2015', status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'C. K. W. De Dreu, L. L. Greer, G. A. Van Kleef u. a.', work: 'Oxytocin promotes human ethnocentrism', ref: 'PNAS 108 (2011), 1262–1266', year: '2011', status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Elliott Sober, David Sloan Wilson', work: 'Unto Others: The Evolution and Psychology of Unselfish Behavior', year: '1998', status: 'paraphrase' },
      { kind: 'gegner', author: 'Michael Ruse, Edward O. Wilson', work: 'Moral philosophy as applied science', ref: 'Philosophy 61 (1986), 173–192', year: '1986', status: 'paraphrase' },
    ],
  },
  quickAnswer: `Die Evolution erklärt gut, warum wir unseren Verwandten helfen und denen, die uns zurückhelfen – Jesus selbst sagte, das täten „auch die Zöllner" (Mt 5,46). Aber Feindesliebe, Vergebung für die Mörder der eigenen Brüder, anonyme Hilfe für Fremde unter Lebensgefahr – das kostet Fitness und ist gerade das, was die bekannten Mechanismen nicht belohnen. Richard Dawkins selbst schrieb: „Lasst uns versuchen, Großzügigkeit und Altruismus zu lehren, denn wir sind egoistisch geboren." Und selbst wenn die Biologie erklärt, woher unsere Gefühle kommen, erklärt sie nicht, warum wir moralisch verpflichtet sind, ihnen zu folgen.`,
  keyPoints: [
    `**Zugeständnis:** Verwandtenselektion und Gegenseitigkeit erklären viel natürliche Zuneigung und Kooperation – das bestreitet die Bibel nicht.`,
    `**Jesus geht weiter:** Er benennt Verwandtenliebe und Gegenseitigkeit als „normal" (Mt 5,46) und fordert Feindesliebe, anonymes Geben und Hilfe für Fremde.`,
    `**Gruppenselektion erklärt Liebe nach innen, nicht zum Feind:** Modelle des „parochialen Altruismus" koppeln Hilfsbereitschaft nach innen an Feindseligkeit nach außen – Feindesliebe ist das Gegenteil.`,
    `**Ursache ≠ Motiv ≠ Pflicht:** Eine evolutionäre Herkunft erklärt, warum eine Anlage entstand – nicht, ob ein Mensch selbstlos handelt, und nicht, warum er so handeln *soll*.`,
    `**Dawkins' eigene Worte:** „… weil wir egoistisch geboren sind" und „Wir allein auf Erden können uns gegen die Tyrannei der egoistischen Replikatoren auflehnen" – im Namen welchen Maßstabs?`,
    `**Konsequente Naturalisten beißen in den sauren Apfel:** Ruse und Wilson nennen objektive Moral eine genetisch erzeugte Illusion. Wer das nicht glauben kann, braucht eine Quelle der Moral jenseits der Gene.`,
  ],
  voices: [
    {
      person: 'francis-collins',
      role: 'als Genetiker',
      text: `Francis Collins nennt in „The Language of God" das „Moralgesetz" – das universale Wissen um Richtig und Falsch – eines der wichtigsten Argumente, die ihn vom Atheismus zum Glauben führten. Er bestreitet nicht die evolutionären Erklärungen für Verwandtenhilfe und Gegenseitigkeit. Aber die *Agape*, die selbstlose Liebe, die auch Fremden und Feinden gilt und keine Gegenleistung erwartet, stellt nach Collins eine besondere Herausforderung für rein evolutionäre Erklärungen dar: Evolutionäre Modelle würden eher erwarten, dass Hilfe für Fremde und Feinde selektiv benachteiligt wird. Collins sieht in dieser Liebe einen Hinweis auf einen Gott, der selbst Liebe ist.`,
      sources: [
        { kind: 'fachliteratur', author: 'Francis S. Collins', work: 'The Language of God: A Scientist Presents Evidence for Belief', ref: 'Kap. 1', year: '2006', status: 'paraphrase' },
      ],
    },
    {
      person: 'martin-nowak',
      role: 'als mathematischer Biologe der Kooperation (Harvard)',
      text: `Martin Nowak gehört zu den führenden Forschern der Evolution der Kooperation; seine „fünf Regeln" sind ein Standardtext des Fachs. Als katholischer Christ betont er, dass die Mathematik der Kooperation zeigt, wie tief Zusammenarbeit in die Struktur des Lebens eingeschrieben ist – Kooperation sei neben Mutation und Selektion ein grundlegendes Prinzip der Evolution. Gemeinsam mit der Theologin Sarah Coakley gab er einen Band heraus, der fragt, was das für die Theologie bedeutet. Für Nowak schließen naturwissenschaftliche Erklärung und Glaube einander nicht aus: Die Mechanismen der Kooperation beschreiben, *wie* Zusammenarbeit entsteht; sie beantworten nicht, *warum* es eine Welt gibt, in der Liebe möglich ist.`,
      sources: [
        { kind: 'wissenschaft', author: 'Martin A. Nowak', work: 'Five rules for the evolution of cooperation', ref: 'Science 314 (2006), 1560–1563', year: '2006', status: 'paraphrase' },
        { kind: 'fachliteratur', author: 'Martin A. Nowak, Sarah Coakley (Hg.)', work: 'Evolution, Games, and God: The Principle of Cooperation', year: '2013', status: 'paraphrase' },
        { kind: 'fachliteratur', author: 'Martin A. Nowak, Roger Highfield', work: 'SuperCooperators', year: '2011', status: 'paraphrase' },
      ],
    },
    {
      person: 'cs-lewis',
      role: 'als Denker über das Moralgesetz',
      text: `C. S. Lewis unterscheidet in „Mere Christianity" zwischen unseren Instinkten und dem Moralgesetz. Wenn ich einen Menschen in Gefahr sehe, spüre ich zwei Impulse: zu helfen (Herdeninstinkt) und mich in Sicherheit zu bringen (Selbsterhaltung). Das Moralgesetz ist aber ein Drittes, das mir sagt, welchem Impuls ich folgen *soll* – oft dem schwächeren. Lewis vergleicht es mit einem Notenblatt: Die Instinkte sind die Tasten des Klaviers, das Moralgesetz sagt, welche Melodie zu spielen ist. Eine Theorie, die nur die Tasten erklärt, erklärt nicht die Noten.`,
      sources: [
        { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Mere Christianity (Pardon, ich bin Christ)', ref: 'Buch I, Kap. 2', year: '1952', status: 'paraphrase' },
      ],
    },
    {
      person: 'paulus',
      role: 'als Apostel der Agape',
      text: `Paulus beschreibt die Liebe in 1 Kor 13 als etwas, das „nicht das Ihre sucht", nicht Böses nachträgt und „alles erträgt". Im Römerbrief begründet er sie mit dem Kreuz: Kaum jemand stirbt für einen Gerechten, aber Christus starb für uns, als wir noch Feinde waren (Röm 5,7–10). Und er fordert: „Hungert deinen Feind, so speise ihn" (Röm 12,20). Für Paulus ist diese Liebe keine natürliche Ausstattung, sondern Frucht des Geistes (Gal 5,22) – Gottes Liebe, „ausgegossen in unser Herz durch den Heiligen Geist" (Röm 5,5).`,
      sources: [
        { kind: 'bibel', work: '1. Korinther', ref: '13,4–7', status: 'paraphrase' },
        { kind: 'bibel', work: 'Römer', ref: '5,5–10; 12,20', status: 'paraphrase' },
      ],
    },
    {
      person: 'matta-el-meskeen',
      role: 'als koptischer Lehrer der Liebe',
      text: `Vater Matta el-Meskeen schreibt, dass christliche Liebe nicht die Steigerung menschlicher Sympathie ist, sondern Teilhabe an der Liebe, mit der der Vater den Sohn liebt. Deshalb kann sie auch den Feind umfassen, der keine Sympathie weckt. Diese Liebe wird nicht durch Willensanstrengung erzeugt, sondern im Gebet und in der Eucharistie empfangen. Für die koptische Spiritualität ist darum die Feindesliebe der Märtyrer kein moralisches Kunststück, sondern ein Zeichen, dass Christus in ihnen lebt.`,
      sources: [
        { kind: 'koptisch', author: 'Matta el-Meskeen', work: 'Die Gemeinschaft der Liebe (The Communion of Love)', status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'verwandtenselektion',
      objection: `Hamilton hat es mathematisch gezeigt: Helfen lohnt sich, wenn r·B > C. Elternliebe, Geschwisterliebe – das ist alles Genkalkül.`,
      objectionBy: 'Richard Dawkins',
      answer: `Ich gebe zu: Verwandtenselektion erklärt gut, warum Eltern ihre Kinder lieben und Geschwister zusammenhalten – und die Bibel lobt diese natürliche Liebe. Aber zu erklären, warum eine Anlage entstanden ist, heißt nicht, dass Liebe im Einzelfall „nur Kalkül" ist; eine Mutter rechnet nicht mit Verwandtschaftskoeffizienten. Und vor allem erklärt Verwandtenselektion nicht die Liebe, um die es im Evangelium geht: die zu Fremden und Feinden.`,
      questionsBack: [`Wenn Liebe „nur Genkalkül" ist – ist deine Liebe zu deinen Kindern dann weniger echt?`],
      followUps: [
        {
          id: 'reziprozitaet-reputation',
          objection: `Für Nicht-Verwandte haben wir Gegenseitigkeit und Ruf: Wer großzügig ist, gewinnt Ansehen und Partner. Indirekte Reziprozität erklärt auch Großzügigkeit gegenüber Fremden.`,
          objectionBy: 'Michael Shermer',
          answer: `Ruf erklärt öffentliche Großzügigkeit. Jesus aber verlangt ausdrücklich das Gegenteil: „Wenn du Almosen gibst, so lass deine linke Hand nicht wissen, was die rechte tut" (Mt 6,3) – genau dort, wo Ruf keinen Gewinn bringt. Und er nennt Gegenseitigkeit beim Namen: „Wenn ihr liebt, die euch lieben – tun das nicht auch die Zöllner?" Jesus kennt also die Mechanismen, die du beschreibst, und fordert etwas, das über sie hinausgeht.`,
          followUps: [
            {
              id: 'fehlgeleitete-adaptation',
              objection: `Dann ist Hilfe für Fremde eben eine fehlgeleitete Anpassung: Unsere Hilfsbereitschaft entstand in kleinen Verwandtengruppen und „feuert" heute auch bei Fremden – wie unser Hunger nach Süßem in einer Welt voller Zucker.`,
              objectionBy: 'Steven Pinker',
              answer: `Dann sind die höchsten moralischen Taten der Menschheit Fehlfunktionen: Maximilian Kolbe, der in Auschwitz für einen fremden Familienvater in den Hungerbunker ging, wäre ein „Fehler" wie Karies. Außerdem fordert Jesus etwas, das gegen den Instinkt geht – der Instinkt rät zur Vergeltung, nicht zur Feindesliebe. Und wenn das moralische „Sollen" nur ein Fehlfeuern ist, dann gibt es keine objektive Pflicht zu helfen. Das geben konsequente Naturalisten wie Michael Ruse offen zu.`,
              followUps: [
                {
                  id: 'ruse-saurer-apfel',
                  objection: `Genau – objektive Moral ist eine Illusion, die uns unsere Gene vorspielen, damit wir kooperieren. Ich beiße in diesen sauren Apfel.`,
                  objectionBy: 'Michael Ruse',
                  answer: `Das ist ehrlich und konsequent – und ich respektiere die Konsequenz. Aber dann ist der Satz „Es ist falsch, ein Kind zum Vergnügen zu quälen" nicht wirklich wahr, sondern nur ein nützliches Gefühl. Die allermeisten Menschen, auch Atheisten, wissen mit größerer Sicherheit, dass dieser Satz wahr ist, als sie irgendeiner Theorie über seine Herkunft trauen. C. S. Lewis nannte das Moralgesetz einen Hinweis auf den Sinn des Universums – wer es ernst nimmt, braucht eine Quelle der Moral jenseits der Gene.`,
                  detail: `Ausführlich: A10, ‚moral-und-gott/moral-durch-evolution' und ‚moral-und-gott/gut-ohne-gott'.`,
                  sources: [
                    { kind: 'gegner', author: 'Michael Ruse, Edward O. Wilson', work: 'Moral philosophy as applied science', ref: 'Philosophy 61 (1986), 173–192', year: '1986', status: 'paraphrase', quote: `Ethik, verstanden als rational begründbares System von Aussagen über etwas Objektives, ist illusorisch – eine Anpassung, die uns zur Kooperation bringt.` },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'gruppenselektion',
      objection: `Feindesliebe und Opferbereitschaft lassen sich durch Gruppenselektion erklären: Gruppen mit vielen Altruisten setzen sich gegen egoistische Gruppen durch. Auch das Christentum verbreitete sich so – Rodney Stark hat gezeigt, wie die Fürsorge der Christen in Seuchenzeiten ihr Wachstum förderte.`,
      objectionBy: 'David Sloan Wilson',
      answer: `Gruppenselektion erklärt Hilfsbereitschaft *innerhalb* der eigenen Gruppe – Modelle von Choi und Bowles zeigen, dass sie sich typischerweise zusammen mit Feindseligkeit gegenüber Außengruppen entwickelt. Feindesliebe ist das genaue Gegenteil. Und dass die Christen in Seuchen auch Heiden pflegten, war gerade kein Gruppeninstinkt, sondern das Ergebnis einer Überzeugung – der Lehre Jesu und des Glaubens an die Auferstehung, der ihnen die Todesangst nahm.`,
      sources: [
        { kind: 'wissenschaft', author: 'J.-K. Choi, S. Bowles', work: 'The coevolution of parochial altruism and war', ref: 'Science 318 (2007), 636–640', year: '2007', status: 'paraphrase' },
        { kind: 'fachliteratur', author: 'Rodney Stark', work: 'The Rise of Christianity', year: '1996', status: 'paraphrase' },
      ],
      followUps: [
        {
          id: 'kulturelle-evolution',
          objection: `Dann erklärt eben die kulturelle Evolution den Erfolg des Christentums: Es war ein überlegenes Gruppenprogramm.`,
          objectionBy: 'David Sloan Wilson',
          answer: `Dass eine Lehre kulturell erfolgreich war, sagt nichts darüber, ob sie wahr ist – das wäre ein genetischer Fehlschluss. Und die Frage bleibt: Warum entstand ausgerechnet bei den Anhängern eines gekreuzigten Wanderpredigers eine Ethik der Feindesliebe, die allen Gruppeninstinkten widerspricht? Die Christen selbst nannten den Grund: Jesu Lehre und seine Auferstehung.`,
          followUps: [
            {
              id: 'juedische-ethik',
              objection: `Du verschiebst nur das Problem. Jesu Lehre kam aus der jüdischen Ethik – also aus Kultur, nicht von Gott.`,
              objectionBy: 'David Sloan Wilson',
              answer: `Jesus knüpft bewusst an die Tora an: „Du sollst deinen Nächsten lieben wie dich selbst" (Lev 19,18), und Lev 19,34 schließt den Fremdling ein. Er radikalisiert dieses Gebot bis zur Feindesliebe (Mt 5,43–44). Christen sehen darin keine Konkurrenz: Gott hat sich in der Geschichte Israels offenbart, und Christus vollendet diese Offenbarung. Kulturelle Vermittlung und göttlicher Ursprung schließen sich nicht aus.`,
            },
          ],
        },
      ],
    },
    {
      id: 'oxytocin',
      objection: `Liebe ist Oxytocin und Dopamin. Gib Menschen Oxytocin-Spray, und sie vertrauen Fremden mehr (Kosfeld 2005). Liebe ist Chemie.`,
      objectionBy: 'Robert Sapolsky',
      answer: `Die berühmte Oxytocin-Vertrauensstudie ließ sich nur eingeschränkt replizieren (Nave, Camerer & McCullough 2015). Und andere Studien fanden, dass Oxytocin die Bevorzugung der *eigenen* Gruppe verstärken kann (De Dreu u. a. 2011) – das „Kuschelhormon" macht also eher parteiisch als universal liebevoll. Dass Liebe neurochemische Korrelate hat, bestreite ich nicht: Der Mensch liebt mit Leib und Seele. Aber Chemie erklärt nicht, warum ich meinen Feind lieben *soll*.`,
      sources: [
        { kind: 'wissenschaft', author: 'G. Nave, C. Camerer, M. McCullough', work: 'Does oxytocin increase trust in humans? A critical review of research', ref: 'Perspectives on Psychological Science 10 (2015), 772–789', year: '2015', status: 'paraphrase' },
      ],
      followUps: [
        {
          id: 'ohne-chemie-keine-liebe',
          objection: `Und trotzdem: Ohne diese Chemie gäbe es keine Liebe.`,
          objectionBy: 'Robert Sapolsky',
          answer: `Ohne Augen gäbe es kein Sehen – und doch ist das Gesehene nicht eingebildet. Dass Liebe ein körperliches Instrument hat, beweist nicht, dass sie nichts weiter ist als dieses Instrument. Das ist dieselbe Verwechslung von Abhängigkeit und Identität, die man auch beim Verhältnis von Geist und Gehirn findet.`,
          detail: `Siehe ‚neurowissenschaften/geist-gleich-gehirn'.`,
        },
      ],
    },
    {
      id: 'dawkins-falsch-zitiert',
      objection: `Du zitierst mich falsch: „Das egoistische Gen" heißt nicht, dass Menschen egoistisch sein müssen. Ich habe ausdrücklich geschrieben, dass wir uns dagegen auflehnen können.`,
      objectionBy: 'Richard Dawkins',
      answer: `Genau darauf beziehe ich mich. Du schreibst, wir sollten Großzügigkeit und Altruismus lehren, „weil wir egoistisch geboren sind", und am Ende eines Kapitels: „Wir allein auf Erden können uns gegen die Tyrannei der egoistischen Replikatoren auflehnen." Meine Frage ist: In wessen Namen lehnen wir uns auf? Der Maßstab, an dem wir die Gene als „Tyrannen" messen, kann nicht selbst aus den Genen stammen.`,
      sources: [
        { kind: 'gegner', author: 'Richard Dawkins', work: 'The Selfish Gene', ref: 'Kap. 1', year: '1976', status: 'verbatim', quote: `Lasst uns versuchen, Großzügigkeit und Altruismus zu lehren, denn wir sind egoistisch geboren.`, original: `Let us try to teach generosity and altruism, because we are born selfish.`, translation: 'eigene Übersetzung' },
        { kind: 'gegner', author: 'Richard Dawkins', work: 'The Selfish Gene', ref: 'Kap. 11 (Schlusssatz)', year: '1976', status: 'verbatim', quote: `Wir allein auf Erden können uns gegen die Tyrannei der egoistischen Replikatoren auflehnen.`, original: `We, alone on earth, can rebel against the tyranny of the selfish replicators.`, translation: 'eigene Übersetzung' },
      ],
      followUps: [
        {
          id: 'verstand-mitgefuehl',
          objection: `Wir lehnen uns auf im Namen unseres Verstandes und unseres Mitgefühls – beides sind ebenfalls Produkte der Evolution.`,
          objectionBy: 'Richard Dawkins',
          answer: `Dann stehen zwei Evolutionsprodukte gegeneinander: Egoismus und Mitgefühl. Warum *soll* ich dem einen folgen und nicht dem anderen? Die Evolution selbst gibt darauf keine Antwort – sie hat beides hervorgebracht. Um das Mitgefühl vorzuziehen, brauchst du einen Maßstab, der über beiden steht: ein Moralgesetz, das nicht aus der Biologie folgt.`,
          followUps: [
            {
              id: 'wohlergehen-ziel',
              objection: `Weil Mitgefühl das Wohlergehen fördert – und Wohlergehen ist ein vernünftiges Ziel, dazu braucht man keinen Gott.`,
              objectionBy: 'Richard Dawkins',
              answer: `Dass das Wohlergehen *anderer* – auch Fremder und Feinde – objektiv zählt und mich verpflichtet, ist genau die moralische Voraussetzung, nach deren Begründung ich frage. Aus der Biologie folgt sie nicht; die Evolution „interessiert" sich nur für Fortpflanzungserfolg. Wenn du sie trotzdem für objektiv gültig hältst, stimmst du mir zu, dass es eine Moral jenseits der Gene gibt – und dann ist die Frage nach ihrer Quelle offen.`,
              detail: `Siehe A10, ‚moral-und-gott/wissenschaft-begruendet-moral'.`,
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wenn Liebe „nur" Genkalkül ist – ist deine Liebe zu deinen Kindern dann weniger echt?`,
    `Welcher evolutionäre Mechanismus belohnt anonyme Hilfe für einen Feind unter Lebensgefahr?`,
    `Wenn wir uns gegen die „Tyrannei der Gene" auflehnen sollen – woher stammt der Maßstab dafür?`,
    `Ist der Satz „Es ist falsch, ein Kind zum Vergnügen zu quälen" wirklich wahr – oder nur ein nützliches Gefühl?`,
  ],
  avoid: [
    `Bestreiten, dass Evolution irgendetwas zur Erklärung von Kooperation beiträgt – die Forschung ist solide.`,
    `„Tiere kennen keine Empathie." – Primatenforschung (de Waal) zeigt Vorformen von Empathie und Fairness.`,
    `Dawkins verzerrt wiedergeben („Er sagt, alle Menschen sind egoistisch") – er sagt das Gegenteil; zitiere ihn genau.`,
  ],
  concessions: [
    `Verwandtenselektion, Gegenseitigkeit und Reputation erklären viele Formen menschlicher Hilfsbereitschaft und Zuneigung.`,
    `Auch Tiere zeigen Vorformen von Empathie, Trost und Fairness.`,
    `Liebe hat neurochemische Korrelate.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Francis S. Collins', work: 'The Language of God', year: '2006', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Martin A. Nowak, Sarah Coakley (Hg.)', work: 'Evolution, Games, and God: The Principle of Cooperation', year: '2013', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Mere Christianity', ref: 'Buch I', year: '1952', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Altruismus', 'Evolution', 'Kooperation', 'Feindesliebe', 'Hamilton', 'Trivers', 'Dawkins'],
  related: [
    'moral-und-gott/moral-durch-evolution',
    'moral-und-gott/gut-ohne-gott',
    'moral-und-gott/wissenschaft-begruendet-moral',
    'evolutionaere-psychologie/mensch-nur-tier',
    'neurowissenschaften/geist-gleich-gehirn',
  ],
};

export default claim;
