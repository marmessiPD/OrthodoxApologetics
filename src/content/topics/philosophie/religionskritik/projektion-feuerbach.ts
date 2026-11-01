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
