import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'projektion-feuerbach',
  title: `„Gott ist nur eine Projektion menschlicher Wünsche (Feuerbach)."`,
  proponents: [
    {
      name: 'Ludwig Feuerbach',
      role: 'Philosoph, Linkshegelianer (1804–1872)',
      work: 'Das Wesen des Christentums (1841); Vorlesungen über das Wesen der Religion (1851)',
    },
    {
      name: 'Xenophanes von Kolophon',
      role: 'Vorsokratischer Philosoph (ca. 570–475 v. Chr.)',
      work: 'Fragmente DK 21 B15–16 (Götter nach dem Bild der Menschen)',
    },
    {
      name: 'Karl Marx',
      role: 'Philosoph und Ökonom (1818–1883)',
      work: 'Thesen über Feuerbach (1845) – übernahm und radikalisierte Feuerbachs Projektionsthese',
    },
  ],
  steelman: `Alles, was der Mensch von Gott sagt, sagt er in Wahrheit von sich selbst. Liebe, Weisheit, Gerechtigkeit, Macht – das sind menschliche Eigenschaften, ins Unendliche gesteigert und an den Himmel projiziert. Feuerbach bringt es auf die Formel: „Das Bewußtsein Gottes ist das Selbstbewußtsein des Menschen, die Erkenntnis Gottes die Selbsterkenntnis des Menschen." Theologie ist in Wahrheit Anthropologie. Schon Xenophanes bemerkte, dass die Äthiopier ihre Götter schwarz und stumpfnasig, die Thraker blauäugig und rothaarig darstellen – und dass Rinder, wenn sie malen könnten, Götter in Rindergestalt malen würden. Die Folge ist fatal: Der Mensch entäußert sein Bestes an ein jenseitiges Wesen und bleibt selbst arm, sündig, klein zurück. Der Atheismus ist deshalb kein Verlust, sondern die Heimholung des menschlichen Wesens: Der Mensch soll erkennen, dass er selbst das ist, was er in Gott verehrt hat – *homo homini deus*, der Mensch ist dem Menschen Gott.`,
  biblical: {
    summary: `Die Bibel kennt die Projektionskritik – und übt sie selbst, schärfer als Feuerbach, an den **Götzen**. Jesaja beschreibt, wie ein Mann aus demselben Holz, mit dem er sich wärmt und sein Brot bäckt, einen Gott schnitzt und vor ihm niederfällt (Jes 44,15–17). Der Psalmist sagt über die Götzenmacher: „Die solche machen, sind ihnen gleich" (Ps 115,8). Paulus erklärt den Athenern, die Gottheit sei nicht „durch menschliche Gedanken gemacht" (Apg 17,29). Der Gott Israels unterscheidet sich gerade dadurch: Er verbietet, sich ein Bild von ihm zu machen (Ex 20,4), und sagt: „Ich bin Gott und nicht ein Mensch" (Hos 11,9). Er offenbart sich – er wird nicht erdacht.`,
    detail: `- **Jes 44,9–20** ist die älteste Projektionskritik der Literatur: Der Götze ist Produkt menschlicher Arbeit und menschlicher Wünsche. Die Bibel teilt Feuerbachs Diagnose für selbstgemachte Götter.
- **Ebenbild statt Projektion:** Die Ähnlichkeit zwischen Gott und Mensch erklärt die Bibel umgekehrt: Der Mensch ist nach Gottes Bild geschaffen (Gen 1,27). Ähnlichkeit allein entscheidet also nicht, wer wessen Abbild ist.
- **Ein Gott, den niemand erfinden würde:** Der dreieinige Gott, der Mensch wird und am Kreuz stirbt, ist „den Juden ein Ärgernis und den Griechen eine Torheit" (1 Kor 1,23) – kein Spiegelbild menschlicher Wünsche.
- **Gottes Gedanken sind nicht unsere Gedanken** (Jes 55,8–9): Die Schrift betont immer wieder, dass Gott menschliche Erwartungen durchkreuzt.`,
    sources: [
      { kind: 'bibel', work: 'Jesaja', ref: '44,15–17', quote: `Das gibt dem Menschen Feuerwerk, davon er nimmt und sich wärmt; er zündet es an und bäckt Brot davon; daselbst macht er einen Gott und betet's an; er macht einen Götzen daraus und kniet davor. … Aber das übrige macht er zum Gott, daß es sein Götze sei, davor er kniet und niederfällt und betet und spricht: Errette mich; denn du bist mein Gott!`, translation: 'Luther 1912', status: 'paraphrase', note: 'Wortlaut leicht gekürzt; Inhalt sicher.' },
      { kind: 'bibel', work: 'Psalm', ref: '115,4.8', quote: `Ihre Götzen aber sind Silber und Gold, von Menschenhänden gemacht. … Die solche machen, sind ihnen gleich, und alle, die auf sie hoffen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '17,29', quote: `So wir denn göttlichen Geschlechts sind, sollen wir nicht meinen, die Gottheit sei gleich den goldenen, silbernen und steinernen Bildern, durch menschliche Gedanken gemacht.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Hosea', ref: '11,9', quote: `… denn ich bin Gott und nicht ein Mensch und bin der Heilige unter dir …`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Korinther', ref: '1,23', quote: `wir aber predigen den gekreuzigten Christus, den Juden ein Ärgernis und den Griechen eine Torheit.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die alexandrinischen Väter haben die heidnischen Götter genau so kritisiert wie Feuerbach: als Vergöttlichung menschlicher Leidenschaften. **Clemens von Alexandrien** zeigt in seiner Mahnrede an die Griechen, dass die Götter Homers die Laster ihrer Verehrer tragen. **Athanasius** erklärt in *Contra Gentes*, wie die Seele, die sich vom wahren Gott abwandte, ihre eigenen Begierden zu Göttern machte. Der christliche Gott dagegen ist kein Produkt menschlichen Denkens, sondern hat sich selbst offenbart – im Logos, der Fleisch wurde. Die orthodoxe Tradition kennt zudem die **apophatische Theologie**: Gott übersteigt jeden menschlichen Begriff. Gregor von Nyssa warnt, dass jede Vorstellung, die der Verstand von Gott fasst, zum Götzenbild werden kann. Das ist der stärkste innerchristliche Schutz gegen Projektion.`,
    sources: [
      { kind: 'kirchenvater', author: 'Clemens von Alexandrien', work: 'Mahnrede an die Griechen (Protrepticus)', ref: '2–4', year: 'um 195', quote: `Die Götter der Griechen tragen die Leidenschaften und Laster der Menschen; sie sind Werke menschlicher Hände und menschlicher Begierden.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Contra Gentes', ref: '8–11', year: 'ca. 335', quote: `Die Menschen, die sich von Gott abwandten, machten ihre eigenen Begierden und die Geschöpfe zu Göttern.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Gregor von Nyssa', work: 'Das Leben des Mose (De vita Moysis)', ref: 'II,165', year: 'um 390', quote: `Jeder Begriff, den der Verstand nach einem fassbaren Bild von Gott bildet, wird zu einem Götzenbild Gottes und verkündet ihn nicht.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Feuerbachs Projektionsthese war enorm einflussreich – Marx, Engels, Nietzsche und Freud bauten auf ihr auf. Selbst der bedeutendste protestantische Theologe des 20. Jahrhunderts, **Karl Barth**, nahm sie ernst: Er gab Feuerbach recht, soweit es um menschengemachte „Religion" geht, bestritt aber, dass sie Gottes Selbstoffenbarung trifft. In der heutigen Religionsphilosophie gilt die Projektionsthese nicht als Widerlegung des Theismus, weil sie die Nichtexistenz Gottes voraussetzt, statt sie zu begründen. Ihre empirische Nachfolgerin ist die kognitive Religionswissenschaft (eigener Themenblock), die erklärt, *wie* religiöse Vorstellungen entstehen – ohne über ihre Wahrheit zu entscheiden.`,
    sources: [
      { kind: 'gegner', author: 'Ludwig Feuerbach', work: 'Das Wesen des Christentums', ref: 'Einleitung, Kap. 2', year: '1841', quote: `Das Bewußtsein Gottes ist das Selbstbewußtsein des Menschen, die Erkenntnis Gottes die Selbsterkenntnis des Menschen.`, status: 'verbatim' },
      { kind: 'gegner', author: 'Ludwig Feuerbach', work: 'Das Wesen des Christentums', ref: 'Schlussteil', year: '1841', quote: `Der Mensch ist dem Menschen Gott – das ist der oberste praktische Grundsatz.`, original: `Homo homini Deus est.`, status: 'paraphrase' },
      { kind: 'gegner', author: 'Xenophanes', work: 'Fragmente', ref: 'DK 21 B15–16', year: '6./5. Jh. v. Chr.', quote: `Die Äthiopier stellen ihre Götter schwarz und stumpfnasig dar, die Thraker blauäugig und rothaarig; hätten Rinder und Pferde Hände, sie malten Götter in Rinder- und Pferdegestalt.`, status: 'paraphrase', note: 'Xenophanes war kein Atheist, sondern kritisierte den Polytheismus zugunsten eines einen, nicht menschengestaltigen Gottes.' },
      { kind: 'fachliteratur', author: 'Karl Barth', work: 'Kirchliche Dogmatik I/2, § 17 („Gottes Offenbarung als Aufhebung der Religion")', year: '1938', quote: `Religion als menschliches Unternehmen ist Unglaube; Gottes Offenbarung aber ist nicht menschliche Projektion, sondern ihr Gericht.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Projektion erklärt vielleicht, *warum* jemand glaubt – sie sagt nichts darüber, *ob* es Gott gibt. Ein Verdurstender projiziert Wasser in die Wüste, und trotzdem gibt es Wasser. Feuerbach setzt voraus, dass Gott nicht existiert, und erklärt dann den Glauben – das ist kein Beweis. Und die Bibel selbst kritisiert selbstgemachte Götter schärfer als Feuerbach. Der christliche Gott – dreieinig, heilig, gekreuzigt – ist gerade nicht das, was Menschen sich wünschen würden.`,
  keyPoints: [
    `**Herkunft entscheidet nicht über Wahrheit:** Selbst wenn der Glaube einem Wunsch entspricht, folgt daraus nicht, dass er falsch ist (genetischer Fehlschluss).`,
    `**Feuerbach setzt voraus, was er beweisen will:** Erst wenn Gott nicht existiert, muss man den Glauben als Projektion erklären.`,
    `**Ähnlichkeit hat zwei mögliche Richtungen:** Ist Gott nach dem Bild des Menschen gemacht – oder der Mensch nach dem Bild Gottes (Gen 1,27)? Ähnlichkeit allein entscheidet das nicht.`,
    `**Die Bibel kennt die Projektionskritik:** Jes 44 und Ps 115 entlarven Götzen als Menschenwerk – lange vor Feuerbach.`,
    `**Projektion funktioniert in beide Richtungen:** Auch der Wunsch, dass es keinen Gott gibt, ist ein starkes Motiv (Thomas Nagel).`,
    `**Der christliche Gott passt nicht zum Wunschbild:** Ein gekreuzigter Messias, Gericht, Selbstverleugnung, Dreieinigkeit – „eine Religion, die man nicht hätte erraten können" (C. S. Lewis).`,
  ],
  voices: [
    {
      person: 'clemens-alexandrien',
      role: 'als alexandrinischer Kritiker der Göttermythen',
      text: `Clemens von Alexandrien, Lehrer der Katechetenschule um 200, hat in seiner *Mahnrede an die Griechen* die griechischen Götter mit beißender Klarheit als Abbilder menschlicher Leidenschaften entlarvt: ehebrecherisch, eifersüchtig, rachsüchtig – wie ihre Verehrer. Er nimmt damit Xenophanes' und Feuerbachs Kritik auf. Aber er zieht den umgekehrten Schluss: Gerade weil der Mensch sich Götter nach seinem Bild macht, braucht er den wahren Logos, der sich selbst offenbart und den Menschen zum Bild Gottes erneuert. Die Projektionskritik ist für Clemens Vorstufe zum Evangelium, nicht sein Ende.`,
    },
    {
      person: 'athanasius',
      role: 'als Theologe der Offenbarung',
      text: `Athanasius schildert in *Contra Gentes*, wie die Seele, die sich vom Schöpfer abwendet, Schritt für Schritt das Geschaffene – Sonne, Tiere, Menschen, schließlich die eigenen Begierden – vergöttlicht. Das ist eine theologische Projektionstheorie. Doch in *De Incarnatione* zeigt er den Ausweg: Weil die Menschen Gott nicht mehr aus der Schöpfung erkennen wollten, kam der Logos selbst in einem Leib, damit sie ihn dort sehen, wo sie hinschauen – in einem menschlichen Leben. Die Inkarnation ist das Gegenteil der Projektion: nicht der Mensch macht sich einen Gott, sondern Gott macht sich zum Menschen.`,
      sources: [
        { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'De Incarnatione', ref: '14–16', year: 'ca. 318–335', quote: `Weil die Menschen ihren Blick auf das Sinnliche gerichtet hatten, nahm der Logos einen Leib an, damit sie ihn in seinen Werken im Leib erkennen.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'cs-lewis',
      role: 'als Apologet gegen den „Bulverismus"',
      text: `C. S. Lewis hat der Projektionskritik zwei Antworten gegeben. Erstens den „Bulverismus" (Essay von 1941): Die moderne Methode bestehe darin, ohne Diskussion anzunehmen, dass jemand im Unrecht ist, und dann eifrig zu erklären, wie er so dumm werden konnte. Man muss aber erst zeigen, *dass* jemand irrt, bevor man erklärt, *warum*. Zweitens beobachtet Lewis, dass das Christentum gerade nicht wie eine Erfindung aussieht: Die Wirklichkeit ist gewöhnlich etwas, das man nicht hätte erraten können – und genau das sei einer der Gründe, warum er dem Christentum glaube. Es ist eine Religion, die man nicht hätte erraten können.`,
      sources: [
        { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Bulverism (in: God in the Dock)', year: '1941', quote: `Man muss zuerst zeigen, dass jemand im Unrecht ist, bevor man erklärt, warum er im Unrecht ist; die moderne Methode nimmt den Irrtum ohne Diskussion an und erklärt dann eifrig seine Entstehung.`, status: 'paraphrase' },
        { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Mere Christianity', ref: 'Buch II, Kap. 2', year: '1952', quote: `Es ist eine Religion, die man nicht hätte erraten können.`, original: `It is a religion you could not have guessed.`, translation: 'eigene Übersetzung', status: 'verbatim' },
      ],
    },
    {
      person: 'mcgrath',
      role: 'als Wissenschaftstheoretiker und Historiker des Atheismus',
      text: `Alister McGrath – promovierter Molekularbiophysiker, früher selbst Atheist – zeigt in *The Twilight of Atheism* (2004), dass Feuerbachs Argument logisch nicht trägt: Aus der Tatsache, dass Menschen sich etwas wünschen, folgt weder, dass es existiert, noch, dass es nicht existiert. Feuerbachs These ist eine Hypothese, die nur unter der Voraussetzung des Atheismus plausibel wird. McGrath weist außerdem darauf hin, dass dasselbe Argument sich ebenso gegen den Atheismus wenden lässt: Auch der Wunsch nach Autonomie und nach einem Universum ohne moralischen Richter kann eine Überzeugung prägen.`,
      sources: [
        { kind: 'fachliteratur', author: 'Alister E. McGrath', work: 'The Twilight of Atheism: The Rise and Fall of Disbelief in the Modern World', year: '2004', quote: `Feuerbachs Projektionsthese setzt die Nichtexistenz Gottes voraus; sie erklärt den Glauben, widerlegt ihn aber nicht – und lässt sich ebenso gegen den Unglauben wenden.`, status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'goettliche-eigenschaften-menschlich',
      objection: `Liebe, Weisheit, Gerechtigkeit, Güte – alles, was ihr Gott zuschreibt, sind menschliche Eigenschaften, ins Unendliche gesteigert. Euer Gott ist das idealisierte menschliche Wesen, an den Himmel projiziert.`,
      objectionBy: 'Ludwig Feuerbach',
      answer: `Dass Gott und Mensch Eigenschaften teilen, erwarten beide Hypothesen: Wenn der Mensch Gott erfunden hat, sieht Gott aus wie der Mensch – und wenn Gott den Menschen nach seinem Bild geschaffen hat (Gen 1,27), sieht der Mensch aus wie Gott. Die Ähnlichkeit allein sagt nicht, wer das Original ist. Dafür braucht es andere Gründe – und die setzt Feuerbach voraus, statt sie zu liefern.`,
      detail: `Feuerbachs Methode ist eine Umdeutung: Er nimmt den christlichen Glauben und liest jede Aussage über Gott als verschlüsselte Aussage über den Menschen. Das ist interpretativ möglich, aber es beweist nichts – man könnte jede Aussage über einen realen Menschen auch als „Projektion" deuten. Interessant ist: Feuerbach behauptet, das menschliche Wesen sei „unendlich". Aber jeder konkrete Mensch ist endlich, fehlbar, sterblich. Woher kommt dann die Idee des Unendlichen und Vollkommenen, die wir in Gott verehren? Descartes und Anselm sahen darin eher einen Hinweis auf Gott als auf den Menschen.`,
      questionsBack: [
        `Wenn wir nach Gottes Bild geschaffen wären – wie würde die Welt dann anders aussehen, als sie es tut?`,
        `Woher hat ein endlicher, sterblicher Mensch die Idee des unendlich Vollkommenen?`,
      ],
      followUps: [
        {
          id: 'xenophanes-kulturell',
          objection: `Schon Xenophanes hat es gesehen: Die Äthiopier malen ihre Götter schwarz, die Thraker blauäugig. Jede Kultur macht sich Götter nach ihrem Bild. Das ist Projektion in Reinform.`,
          objectionBy: 'Xenophanes (Rezeption)',
          answer: `Für die heidnischen Götter stimmt das – und die Bibel sagt dasselbe (Jes 44; Ps 115). Übrigens war Xenophanes kein Atheist: Er kritisierte die menschengestaltigen Götter zugunsten eines einen Gottes, der den Menschen weder an Gestalt noch an Gedanken gleicht. Genau das ist der biblische Gott: Er verbietet Bilder von sich, er sagt „Ich bin Gott und nicht ein Mensch" (Hos 11,9), und er offenbart sich als gekreuzigter Jude – kein Volk hätte sich so einen Gott gemalt.`,
          detail: `Die Bibel und Xenophanes stehen in diesem Punkt auf derselben Seite gegen den Polytheismus. Feuerbach wendet Xenophanes' Argument fälschlich auf den biblischen Gott an, der gerade nicht nach Volk, Hautfarbe oder Kultur geformt ist – das Christentum ist bis heute die kulturell vielfältigste Religion der Welt, von Äthiopien bis Korea.`,
          followUps: [
            {
              id: 'christlicher-gott-vaterbild',
              objection: `Auch euer Gott ist ein Wunschbild: der ideale Vater, liebend, beschützend, allmächtig. Genau das, was sich ein verängstigtes Kind wünscht.`,
              objectionBy: 'Ludwig Feuerbach / Sigmund Freud',
              answer: `Der christliche Gott ist auch der Heilige, der alles sieht und richtet; der Selbstverleugnung verlangt („nehme sein Kreuz auf sich"); der Leid zulässt; der seinen eigenen Sohn nicht verschont. „Schrecklich ist's, in die Hände des lebendigen Gottes zu fallen" (Hebr 10,31). Wer sich einen bequemen Gott wünschte, hätte sich einen anderen ausgedacht – eine kosmische Großmutter, die nichts verlangt. Lewis hat recht: Das Christentum ist eine Religion, die man nicht erraten hätte.`,
              detail: `Ausführlich im Claim zu Freud. Wichtig: Die Vaterschaft Gottes ist im Neuen Testament keine natürliche Selbstverständlichkeit, sondern ein Geschenk: Der Geist lässt uns „Abba, lieber Vater" rufen (Röm 8,15) – durch Adoption in Christus, nicht durch Projektion.`,
              sources: [
                { kind: 'bibel', work: 'Hebräer', ref: '10,31', quote: `Schrecklich ist's, in die Hände des lebendigen Gottes zu fallen.`, translation: 'Luther 1912', status: 'verbatim' },
                { kind: 'bibel', work: 'Matthäus', ref: '16,24', quote: `Will mir jemand nachfolgen, der verleugne sich selbst und nehme sein Kreuz auf sich und folge mir.`, translation: 'Luther 1912', status: 'verbatim' },
              ],
              followUps: [
                {
                  id: 'leidender-gott-auch-projektion',
                  objection: `Dann ist eben auch der leidende, gekreuzigte Gott eine Projektion: der leidende Mensch wünscht sich einen Gott, der mit ihm leidet.`,
                  objectionBy: 'Feuerbach-Schüler',
                  answer: `Jetzt erklärt die Projektionsthese alles: den liebenden Gott und den richtenden, den mächtigen und den leidenden, den nahen und den fernen. Eine Theorie, die jedes denkbare Gottesbild erklärt, erklärt in Wahrheit nichts – sie lässt sich durch nichts widerlegen. Dann ist sie keine wissenschaftliche Hypothese mehr, sondern eine Weltanschauung, die sich gegen jede Gegenevidenz immunisiert hat.`,
                  detail: `Karl Popper hat genau diesen Fehler an Marxismus und Psychoanalyse kritisiert: Sie konnten jedes Ereignis „bestätigen" und waren gerade deshalb unwissenschaftlich. Wer sagt „Wie Gott auch beschaffen ist, es ist eine Projektion", hat aufgehört zu prüfen. Zurück zur eigentlichen Frage: Gibt es Gründe für die Existenz Gottes und für die Auferstehung Jesu?`,
                  sources: [
                    { kind: 'fachliteratur', author: 'Karl R. Popper', work: 'Conjectures and Refutations (Vermutungen und Widerlegungen)', year: '1963', quote: `Eine Theorie, die durch kein denkbares Ereignis widerlegt werden kann, ist nicht wissenschaftlich; Unwiderlegbarkeit ist keine Stärke, sondern eine Schwäche.`, status: 'paraphrase', note: 'Popper nannte Marxismus und Psychoanalyse als Beispiele.' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'erklaerung-genuegt',
      objection: `Ich muss Gott nicht widerlegen. Wenn ich zeigen kann, woher der Glaube psychologisch kommt, ist er erklärt – und damit erledigt. Wer weiß, wie ein Zaubertrick funktioniert, glaubt nicht mehr an Zauberei.`,
      objectionBy: 'Ludwig Feuerbach / moderne Religionskritiker',
      answer: `Ein Zaubertrick ist erst dann entlarvt, wenn man gezeigt hat, dass *keine* Zauberei im Spiel war. Wer nur zeigt, *wie* ein Glaube entstehen *könnte*, hat noch nicht gezeigt, dass er falsch ist. Das ist der genetische Fehlschluss: Auch mein Glaube an die Mathematik hat psychologische Ursachen – trotzdem ist zwei plus zwei vier. Erst muss man zeigen, *dass* jemand irrt; dann kann man erklären, *warum*.`,
      detail: `C. S. Lewis nannte das Gegenteil „Bulverismus": Man nimmt an, dass der andere unrecht hat, und erklärt dann seine psychologischen Motive. Das ist bequem, weil man die eigentliche Debatte überspringt. In der Religionsphilosophie gilt deshalb weitgehend: Die Projektionsthese ist erst dann relevant, wenn die Gottesfrage auf anderem Weg negativ entschieden ist.`,
      followUps: [
        {
          id: 'atheismus-braucht-keine-erklaerung',
          objection: `Atheismus braucht keine psychologische Erklärung. Er ist einfach das Fehlen eines Glaubens – der natürliche Ausgangszustand. Erklären muss man nur den positiven Glauben.`,
          objectionBy: 'Moderner Religionskritiker',
          answer: `Auch Unglaube hat Motive. Der atheistische Philosoph Thomas Nagel schreibt offen: „Ich will, dass der Atheismus wahr ist … Ich hoffe, dass es keinen Gott gibt." Aldous Huxley gestand, dass die „Philosophie der Sinnlosigkeit" für ihn und seine Freunde ein Instrument der Befreiung war – auch von einer Moral, die ihre sexuelle Freiheit einschränkte. Wenn Wünsche einen Glauben verdächtig machen, gilt das für beide Seiten.`,
          detail: `Nagels Bekenntnis steht in *The Last Word* (1997, S. 130–131), im Essay „Evolutionary Naturalism and the Fear of Religion"; er spricht dort von einem „kosmischen Autoritätsproblem". Huxleys Bekenntnis steht in *Ends and Means* (1937). Wichtig für den Ton: Diese Zitate zeigen nicht, dass Atheisten unehrlich sind, sondern dass Psychologisierung in beide Richtungen funktioniert – und deshalb die Wahrheitsfrage nicht entscheidet.`,
          sources: [
            { kind: 'gegner', author: 'Thomas Nagel', work: 'The Last Word', ref: 'S. 130–131 (Essay „Evolutionary Naturalism and the Fear of Religion")', year: '1997', quote: `Ich will, dass der Atheismus wahr ist … Ich hoffe, dass es keinen Gott gibt! Ich will nicht, dass es einen Gott gibt; ich will nicht, dass das Universum so ist.`, original: `I want atheism to be true … I hope there is no God! I don't want there to be a God; I don't want the universe to be like that.`, translation: 'eigene Übersetzung', status: 'verbatim', note: 'Nagel ist Atheist; er beschreibt dies als seine eigene „Angst vor der Religion".' },
            { kind: 'gegner', author: 'Aldous Huxley', work: 'Ends and Means', ref: 'Kap. „Beliefs“ (Erstausgabe Chatto & Windus, S. 252–302; die Stelle oft mit S. 273 zitiert)', year: '1937', quote: `Für mich wie zweifellos für die meisten meiner Zeitgenossen war die Philosophie der Sinnlosigkeit im Wesentlichen ein Instrument der Befreiung … Wir lehnten die Moral ab, weil sie unsere sexuelle Freiheit beeinträchtigte.`, original: `For myself, as, no doubt, for most of my contemporaries, the philosophy of meaninglessness was essentially an instrument of liberation. … We objected to the morality because it interfered with our sexual freedom.`, translation: 'eigene Übersetzung', status: 'verbatim', note: 'Kapitel geprüft („Beliefs“). In der Literatur kursiert auch „friends“ statt „contemporaries“; Seitenzahl je nach Ausgabe verschieden. Zwischen den beiden Sätzen steht im Original ein Satz über politische und moralische Befreiung (Auslassung markiert).' },
          ],
          followUps: [
            {
              id: 'einzelfaelle-nagel',
              objection: `Nagel und Huxley sind Einzelfälle. Daraus kannst du nicht ableiten, dass Atheismus allgemein ein Wunschdenken ist.`,
              objectionBy: 'Moderner Religionskritiker',
              answer: `Völlig richtig – und genau das ist mein Punkt. Aus Einzelfällen von Wunschdenken folgt weder, dass Atheismus falsch ist, noch, dass Glaube falsch ist. Wenn wir die Psychologie beider Seiten beiseitelassen, bleibt die eigentliche Frage: Welche Gründe gibt es für oder gegen Gott? Darüber spreche ich gern.`,
              detail: `Das ist der strategische Kern dieses ganzen Themenblocks: Psychologisierung neutralisiert sich selbst. Wer sie einsetzt, muss sie auch gegen sich gelten lassen. Danach kann das Gespräch zu den Argumenten zurückkehren – Kosmologie, Feinabstimmung, Moral, Bewusstsein, Auferstehung.`,
              followUps: [
                {
                  id: 'vitz-ebenso-spekulativ',
                  objection: `Und Paul Vitz' „Vaterhypothese" – Atheisten hätten oft abwesende oder schwache Väter – ist genauso spekulativ wie Freud. Mit Hume, Nietzsche, Freud und Sartre ein paar Biografien zusammenzusuchen, ist keine Wissenschaft.`,
                  objectionBy: 'Atheistischer Kritiker',
                  answer: `Einverstanden – und Vitz selbst sagt das im Wesentlichen auch. Er legt seine Hypothese nicht als Beweis gegen den Atheismus vor, sondern als Spiegel: Wenn man Freuds Methode ernst nimmt, lässt sie sich mindestens ebenso plausibel auf den Unglauben anwenden. Das Ergebnis ist ein Patt, und genau dieses Patt ist die Pointe. Psychologie entscheidet die Gottesfrage in keine Richtung.`,
                  detail: `Vitz (*Faith of the Fatherless: The Psychology of Atheism*, 1999) untersucht Biografien prominenter Atheisten (u. a. Nietzsche, Hume, Russell, Sartre, Camus, Freud) und findet häufig den frühen Verlust oder das Versagen des Vaters; als Kontrast nennt er gläubige Zeitgenossen wie Pascal, Kierkegaard oder Chesterton. Er bezeichnet seine These ausdrücklich als Gegenstück zu Freud, nicht als allgemeines Gesetz. Für das Gespräch heißt das: Diese These nie als persönlichen Angriff verwenden, sondern nur, um zu zeigen, dass Psychologisierung in beide Richtungen schneidet.`,
                  voices: [
                    {
                      person: 'vitz',
                      role: 'als Psychologe (New York University)',
                      text: `Vitz, selbst als junger Mann Atheist, stellt fest, dass sein eigener Unglaube weniger aus Argumenten als aus sozialen und persönlichen Motiven kam. Er schlägt vor, Freuds Projektionsthese umzudrehen: Wenn der Glaube ein Wunsch nach einem Vater sein kann, kann der Unglaube ein Wunsch nach der Abwesenheit eines enttäuschenden Vaters sein. Beides zeigt nur, dass Psychologie die Wahrheitsfrage nicht entscheidet.`,
                      sources: [
                        { kind: 'fachliteratur', author: 'Paul C. Vitz', work: 'Faith of the Fatherless: The Psychology of Atheism', year: '1999', quote: `Die Theorie des „defekten Vaters" wendet Freuds Methode auf den Atheismus an; sie ist als Gegenstück gedacht, nicht als Beweis.`, status: 'paraphrase' },
                      ],
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
      id: 'religion-entfremdet',
      objection: `Religion entfremdet den Menschen von sich selbst. Alles Gute schreibt er Gott zu, sich selbst nur Sünde und Schwäche. Der Atheismus gibt dem Menschen seine Würde zurück: Homo homini deus – der Mensch ist dem Menschen Gott.`,
      objectionBy: 'Ludwig Feuerbach',
      answer: `Keine Weltanschauung stellt den Menschen höher als das Christentum: Er ist Gottes Ebenbild, Gott selbst wird Mensch, und das Ziel des Menschen ist die Vergöttlichung durch Gnade (Athanasius). Das ist mehr Würde, als Feuerbach je versprochen hat. Und die Geschichte hat Feuerbachs Formel grausam beantwortet: Im 20. Jahrhundert wurde aus „der Mensch ist dem Menschen Gott" allzu oft „der Mensch ist dem Menschen ein Wolf".`,
      detail: `Feuerbachs Vorwurf trifft eine verzerrte Frömmigkeit, die den Menschen kleinmacht. Die orthodoxe Tradition kennt die Sünde, aber als Krankheit, die geheilt werden soll – nicht als Wesen des Menschen. Der Mensch ist nicht „nichts" vor Gott, sondern berufen, „teilhaftig der göttlichen Natur" zu werden (2 Petr 1,4). Die Würde des Menschen kommt nicht aus seiner Selbstvergottung, sondern aus Gottes Liebe zu ihm.`,
      followUps: [
        {
          id: 'kirche-hat-klein-gemacht',
          objection: `In der Praxis hat die Kirche die Menschen klein gehalten – mit Sündenangst, Höllendrohung, Schuldgefühlen. Das ist keine Theorie, sondern Erfahrung vieler Menschen.`,
          objectionBy: 'Kirchenkritiker',
          answer: `Das muss man ernst nehmen: Es gab und gibt religiöse Erziehung, die Menschen mit Angst kleinmacht – das ist Missbrauch des Evangeliums, und es tut mir leid für jeden, der das erlebt hat. Aber die orthodoxe Tradition versteht die Kirche als Krankenhaus, nicht als Gerichtssaal: Sünde ist eine Wunde, Buße ist Heilung, der Beichtvater ist Arzt. Das Ziel ist nicht Schuldgefühl, sondern Freiheit.`,
          detail: `Das Bild der Kirche als Krankenhaus findet sich bei Johannes Chrysostomus und ist in der orthodoxen Seelsorge zentral. Siehe auch den Claim „Religion erzeugt krankhafte Schuldgefühle" (Themenblock Psychologie). Zugeständnis und Unterscheidung zugleich sind hier die stärkste Antwort.`,
          sources: [
            { kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Homilien über die Buße (De paenitentia, CPG 4333)', year: '386–387', quote: `Die Kirche ist ein Krankenhaus für die Seelen, kein Gerichtssaal; hier wird die Sünde geheilt, nicht nur verurteilt.`, status: 'paraphrase', note: 'Werk geprüft: Der Gegensatz „Krankenhaus, nicht Gerichtshof“ steht in den Bußhomilien (engl. G. G. Christo, On Repentance and Almsgiving, FOC 96, 1998). Homilie-Nummer und genauer Wortlaut nicht gesichert – sinngemäß zitieren.' },
          ],
          followUps: [
            {
              id: 'nietzsche-sklavenmoral',
              objection: `Das ist kein Missbrauch, das ist das Programm. Das Christentum ist Sklavenmoral: Es hat Demut, Mitleid und Schwäche zu Tugenden erklärt, damit die Schwachen die Starken klein halten können. Es ist der Aufstand des Ressentiments gegen alles Vornehme und Lebensbejahende.`,
              objectionBy: 'Friedrich Nietzsche (Zur Genealogie der Moral; Der Antichrist)',
              answer: `Nietzsche hat richtig gesehen, dass das Christentum die Werte der Antike umgestürzt hat – das bestätigen heute auch säkulare Historiker. Aber christliche Demut ist nicht Selbstverachtung, sondern die Freiheit, sich nicht mehr selbst beweisen zu müssen. Christus wurde nicht aus Schwäche Diener, sondern aus Stärke: Er, der „in göttlicher Gestalt war", entäußerte sich selbst (Phil 2,6–7). Und die Frage ist, welche Welt wir wollen: eine, in der die Schwachen geschützt werden, oder eine, in der die Starken herrschen. Nietzsche war ehrlich genug, das Zweite zu wählen.`,
              detail: `In *Zur Genealogie der Moral* (1887) beschreibt Nietzsche den „Sklavenaufstand in der Moral", der mit den Juden und Christen begonnen habe; im *Antichrist* (1888) nennt er das Christentum die Religion des Mitleidens, die das Schwache erhält. Der Historiker Tom Holland (*Dominion*, 2019) bestätigt Nietzsches Diagnose der Umwertung – und zieht den umgekehrten Schluss: Unsere Empörung über Unterdrückung ist selbst ein christliches Erbe.

Die orthodoxe Tradition kennt die Demut als Weg zur Freiheit: Die Wüstenväter waren keine Duckmäuser, sondern widerstanden Kaisern und Patriarchen (Antonius schrieb an Kaiser Konstantin; Athanasius ging fünfmal ins Exil). Siehe den Claim „Gott ist tot" im Themenblock Sinn und Existenz.`,
              sources: [
                { kind: 'gegner', author: 'Friedrich Nietzsche', work: 'Zur Genealogie der Moral', ref: 'Erste Abhandlung, Abschnitte 7 und 10', year: '1887', quote: `Nietzsche beschreibt den „Sklavenaufstand in der Moral", in dem das Ressentiment selbst schöpferisch wird und die Werte der Vornehmen umwertet.`, status: 'paraphrase' },
                { kind: 'bibel', work: 'Philipper', ref: '2,6–7', quote: `… welcher, ob er wohl in göttlicher Gestalt war, hielt er's nicht für einen Raub, Gott gleich sein, sondern entäußerte sich selbst und nahm Knechtsgestalt an …`, translation: 'Luther 1912', status: 'verbatim' },
              ],
              questionsBack: [
                `Wenn Mitleid mit den Schwachen Sklavenmoral ist – möchtest du in einer Welt leben, die diese Moral abgeschafft hat?`,
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'agentendetektor',
      objection: `Die moderne Kognitionswissenschaft hat Feuerbach bestätigt: Unser Gehirn hat einen überempfindlichen „Agentendetektor". Lieber zehnmal einen Löwen im Gebüsch vermuten, wo keiner ist, als einmal den echten übersehen. Götter sind das Nebenprodukt dieses Mechanismus – wir sehen Absicht, wo nur Zufall ist.`,
      objectionBy: 'Daniel Dennett (Breaking the Spell, 2006) / Pascal Boyer',
      answer: `Das ist die modernste Form der Projektionsthese, und sie ist interessanter als Feuerbach. Aber sie hat dasselbe Problem: Sie erklärt, *wie* Menschen zum Glauben kommen könnten, nicht *ob* er falsch ist. Justin Barrett, einer der Begründer dieser Forschung und selbst Christ, betont, dass die kognitive Religionswissenschaft die Wahrheitsfrage gar nicht entscheiden kann. Und der „Agentendetektor" reagiert auf raschelnde Büsche – nicht auf die Frage, warum es überhaupt ein Universum mit Naturgesetzen gibt. Die klassischen Gottesargumente sind keine Reflexe, sondern Schlussfolgerungen.`,
      detail: `Die kognitive Religionswissenschaft (Boyer, *Religion Explained*, 2001; Barrett, *Why Would Anyone Believe in God?*, 2004) zeigt, dass Kinder spontan zu einem Glauben an absichtsvolle Gestaltung neigen. Barrett zieht daraus den Schluss, dass Glaube „natürlich" ist – was nichts über seine Wahrheit sagt, in beide Richtungen. Wäre der christliche Gott real und hätte den Menschen auf Gemeinschaft mit sich hin geschaffen, wäre genau eine solche natürliche Offenheit zu erwarten (Röm 1,19–20; Augustinus: „Unruhig ist unser Herz, bis es ruht in dir"). Siehe den Claim „Religion ist ein evolutionäres Nebenprodukt" (Themenblock Kognitive Religionswissenschaft).`,
      voices: [
        {
          person: 'justin-barrett',
          role: 'als Kognitionswissenschaftler',
          text: `Barrett gehört zu den Pionieren der kognitiven Religionswissenschaft und hat den Begriff des „hyperaktiven Agentendetektors" geprägt. Er betont, dass die Erklärung der kognitiven Grundlagen des Glaubens dessen Wahrheit weder beweist noch widerlegt: Auch unser Glaube an andere Personen oder an die Außenwelt beruht auf natürlichen kognitiven Mechanismen, ohne dadurch falsch zu werden.`,
          sources: [
            { kind: 'fachliteratur', author: 'Justin L. Barrett', work: 'Why Would Anyone Believe in God?', year: '2004', quote: `Dass religiöser Glaube aus natürlichen kognitiven Mechanismen hervorgeht, sagt nichts darüber aus, ob er wahr ist.`, status: 'paraphrase' },
          ],
        },
      ],
      sources: [
        { kind: 'gegner', author: 'Daniel C. Dennett', work: 'Breaking the Spell: Religion as a Natural Phenomenon', year: '2006', quote: `Dennett deutet Religion als natürliches Phänomen, das u. a. aus einer überaktiven Neigung entsteht, hinter Ereignissen handelnde Wesen zu vermuten.`, status: 'paraphrase' },
      ],
      questionsBack: [
        `Welcher Mechanismus des Agentendetektors führt zu dem Schluss, dass ein Universum mit einem Anfang eine Ursache braucht?`,
        `Wenn ein natürlicher Ursprung eine Überzeugung entwertet – was ist dann mit deinem Vertrauen in die Logik?`,
      ],
      followUps: [
        {
          id: 'evolutionaere-entlarvung',
          objection: `Doch, es entlarvt ihn: Wenn eine Überzeugung durch einen Prozess entstanden ist, der auf Überleben und nicht auf Wahrheit ausgerichtet war, haben wir keinen Grund, ihr zu trauen. Das ist ein evolutionäres Entlarvungsargument.`,
          objectionBy: 'Daniel Dennett / Guy Kahane',
          answer: `Dann pass auf, dass das Messer nicht dich selbst schneidet. Wenn Evolution auf Überleben statt auf Wahrheit ausgerichtet ist, gilt das für *alle* unsere Denkvermögen – auch für die, mit denen du Naturwissenschaft und Philosophie betreibst und den Naturalismus begründest. Alvin Plantinga hat genau das gezeigt: Wer Naturalismus und ungelenkte Evolution zusammen annimmt, untergräbt das Vertrauen in die eigene Vernunft. Der Theist hat dieses Problem nicht: Wenn Gott uns zur Erkenntnis geschaffen hat, ist zu erwarten, dass unser Verstand die Wahrheit erfassen kann.`,
          detail: `Plantinga entwickelt das „Evolutionary Argument against Naturalism" in *Warrant and Proper Function* (1993, Kap. 12) und *Where the Conflict Really Lies* (2011): Die Wahrscheinlichkeit, dass unsere kognitiven Fähigkeiten zuverlässig sind, ist unter Naturalismus plus Evolution niedrig oder unbestimmbar; wer das sieht, hat einen Grund, an allen seinen Überzeugungen zu zweifeln – auch am Naturalismus selbst.

Darwin selbst äußerte in einem Brief an William Graham (3. Juli 1881) den „schrecklichen Zweifel", ob die Überzeugungen eines aus niederen Tieren entwickelten Geistes überhaupt Vertrauen verdienen.`,
          voices: [
            {
              person: 'plantinga',
              role: 'als Erkenntnistheoretiker',
              text: `Plantinga argumentiert, dass die natürliche Selektion Verhalten belohnt, nicht wahre Überzeugungen als solche. Unter der Annahme, dass kein Gott die Evolution lenkt, gibt es daher keinen guten Grund, die Zuverlässigkeit unseres Denkens für hoch zu halten. Der Konflikt besteht deshalb nicht zwischen Wissenschaft und Glauben, sondern zwischen Wissenschaft und Naturalismus.`,
              sources: [
                { kind: 'fachliteratur', author: 'Alvin Plantinga', work: 'Where the Conflict Really Lies: Science, Religion, and Naturalism', year: '2011', quote: `Wer Naturalismus und Evolution zugleich annimmt, hat einen Grund, an der Zuverlässigkeit seiner eigenen kognitiven Fähigkeiten zu zweifeln – und damit auch am Naturalismus.`, status: 'paraphrase' },
              ],
            },
          ],
          followUps: [
            {
              id: 'wahrheit-hilft-ueberleben',
              objection: `Unsinn. Wahre Überzeugungen helfen beim Überleben: Wer glaubt, dass der Abgrund tief ist, fällt nicht hinein. Also selektiert die Evolution sehr wohl auf Wahrheit.`,
              objectionBy: 'Naturalistischer Philosoph',
              answer: `Für Überzeugungen über Abgründe und Löwen – vielleicht. Aber nicht für abstrakte Fragen wie Metaphysik, Kosmologie oder die Gottesfrage, die für das Überleben in der Steinzeit keine Rolle spielten. Und selbst naturalistische Neurowissenschaftler sind vorsichtig: Patricia Churchland schreibt, die Hauptaufgabe des Nervensystems sei, den Körper so zu bewegen, dass er überlebt – „die Wahrheit, was immer sie ist, kommt dabei zuletzt". Wenn das stimmt, ist dein Vertrauen in deine philosophischen Schlüsse ebenso entlarvt wie mein Glaube.`,
              detail: `Churchlands Satz steht in „Epistemology in the Age of Neuroscience" (*Journal of Philosophy* 84, 1987, S. 548). Auch der Kognitionswissenschaftler Donald Hoffman (*The Case Against Reality*, 2019) argumentiert, dass Evolution Wahrnehmungen begünstigt, die nützlich, nicht wahr sind. Das Problem ist also nicht christliche Erfindung, sondern wird innerhalb des Naturalismus diskutiert.`,
              sources: [
                { kind: 'wissenschaft', author: 'Patricia S. Churchland', work: 'Epistemology in the Age of Neuroscience', ref: 'Journal of Philosophy 84 (1987), S. 548', year: '1987', quote: `Die Hauptaufgabe des Nervensystems ist es, die Körperteile dorthin zu bringen, wo sie sein sollen, damit der Organismus überlebt … Die Wahrheit, was immer sie ist, kommt dabei entschieden zuletzt.`, original: `Truth, whatever that is, definitely takes the hindmost.`, translation: 'eigene Übersetzung', status: 'paraphrase' },
              ],
              followUps: [
                {
                  id: 'theismus-zirkulaer',
                  objection: `Und du bist zirkulär: Du benutzt deinen Verstand, um zu beweisen, dass Gott deinem Verstand Zuverlässigkeit garantiert. Das ist ein Kreis.`,
                  objectionBy: 'Daniel Dennett (sinngemäß)',
                  answer: `Jeder Standpunkt beginnt damit, seinen Verstand zu benutzen – auch deiner. Es gibt keinen Ort außerhalb der Vernunft, von dem aus man sie neutral prüfen könnte. William Alston hat gezeigt, dass diese „erkenntnistheoretische Zirkularität" bei allen grundlegenden Erkenntnisquellen unvermeidlich ist – bei Wahrnehmung, Gedächtnis und Logik. Die Frage ist daher nicht, wer einen Kreis vermeidet, sondern welches Weltbild das Vertrauen in die Vernunft *stimmig* macht. Im Theismus passt es ins Bild; im Naturalismus steht es unter Verdacht.`,
                  detail: `Alston (*The Reliability of Sense Perception*, 1993) argumentiert, dass man die Zuverlässigkeit der Sinneswahrnehmung nicht begründen kann, ohne irgendwo auf Wahrnehmung zurückzugreifen. Das macht Wahrnehmung nicht wertlos, sondern zeigt, dass jedes Denken mit einem Grundvertrauen beginnt. Die christliche Tradition kennt dieses Vertrauen als Teil der Schöpfung: Der Mensch ist nach dem Bild des Logos geschaffen (Athanasius, *De Incarnatione* 3), also zur Vernunft und zur Erkenntnis der Wahrheit bestimmt.`,
                  voices: [
                    {
                      person: 'william-alston',
                      role: 'als Erkenntnistheoretiker',
                      text: `Alston zeigt, dass jede grundlegende Erkenntnisquelle nur mithilfe ihrer selbst als zuverlässig erwiesen werden kann. Wer dem Theisten Zirkularität vorwirft, muss denselben Vorwurf gegen das eigene Vertrauen in Wahrnehmung und Vernunft gelten lassen. Rational ist es daher, den grundlegenden Erkenntnisquellen zu trauen, solange keine starken Gründe dagegen sprechen.`,
                      sources: [
                        { kind: 'fachliteratur', author: 'William P. Alston', work: 'The Reliability of Sense Perception', year: '1993', quote: `Die Zuverlässigkeit grundlegender Erkenntnisquellen lässt sich nicht ohne erkenntnistheoretische Zirkularität begründen; das gilt für alle, nicht nur für den Theisten.`, status: 'paraphrase' },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wenn Gott existiert und uns nach seinem Bild geschaffen hat – wie würde sich das von einer Projektion unterscheiden lassen?`,
    `Hast du gezeigt, *dass* Gott nicht existiert – oder nur, *wie* der Glaube entstehen könnte, falls er nicht existiert?`,
    `Gilt deine Projektionsthese auch für den Wunsch, dass es keinen Gott gibt?`,
    `Welches Gottesbild würde deine These widerlegen? Wenn keines – ist sie dann noch prüfbar?`,
  ],
  avoid: [
    `„Feuerbach war doch selbst nur verbittert." – Das ist genau der Bulverismus, den wir kritisieren.`,
    `Bestreiten, dass Menschen sich Götter nach ihrem Bild machen – die Bibel sagt selbst, dass sie es tun.`,
    `„Alle Atheisten wollen nur sündigen." – Nagel und Huxley sind Zeugnisse für Einzelne, keine Pauschalurteile.`,
  ],
  concessions: [
    `Menschen projizieren tatsächlich ihre Wünsche auf Gott; auch Christen machen sich manchmal ein bequemes Gottesbild. Die Bibel und die Väter warnen selbst davor.`,
    `Feuerbachs Kritik an einer Frömmigkeit, die den Menschen kleinmacht, hat einen berechtigten Kern.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Alister E. McGrath', work: 'The Twilight of Atheism', year: '2004', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Bulverism (in: God in the Dock)', year: '1941', status: 'paraphrase' },
    { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Contra Gentes – De Incarnatione', year: 'ca. 335', status: 'paraphrase' },
    { kind: 'gegner', author: 'Ludwig Feuerbach', work: 'Das Wesen des Christentums', year: '1841', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Feuerbach', 'Projektion', 'Religionskritik', 'Genetischer Fehlschluss', 'Bulverismus', 'Götzenkritik'],
  related: [
    'religionskritik/freud-wunscherfuellung',
    'religionskritik/opium-des-volkes',
    'kognitive-religionswissenschaft/religion-nebenprodukt',
    'atheismus/keine-beweise-fuer-gott',
    'psychologie/schuldgefuehle-schaedlich',
  ],
};

export default claim;
