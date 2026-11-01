import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'at-gott-monster',
  title: `„Der Gott des Alten Testaments ist ein eifersüchtiges, rachsüchtiges Monster (Dawkins)."`,
  proponents: [
    { name: 'Richard Dawkins', role: 'Evolutionsbiologe, Oxford', work: 'The God Delusion (2006), Kap. 2, erster Satz' },
    { name: 'Christopher Hitchens', role: 'Publizist und Religionskritiker', work: 'God Is Not Great (2007)' },
    { name: 'Bart Ehrman', role: 'Neutestamentler, UNC Chapel Hill', work: 'God\'s Problem (2008)' },
    { name: 'Steve Wells', role: 'Religionskritischer Autor', work: 'Drunk with Blood: God\'s Killings in the Bible (2010)' },
  ],
  steelman: `Dawkins' berühmte Liste ist nicht bloß Polemik, sondern lässt sich Punkt für Punkt mit Bibelstellen belegen: Gott nennt sich selbst „Eifersüchtig" (Ex 34,14), er ertränkt die gesamte Menschheit bis auf eine Familie (Gen 6–8), lässt Sodom samt Kindern verbrennen, tötet Ussa, weil er die Lade stützen wollte (2 Sam 6,7), schickt Bären, die 42 Jugendliche zerreißen, weil sie einen Propheten „Kahlkopf" nannten (2 Kön 2,23–24), schlägt die Erstgeborenen Ägyptens und sucht die Schuld der Väter an Kindern bis ins vierte Glied heim (Ex 20,5). Ein Mensch mit diesem Charakterprofil wäre ein Diktator. Die Behauptung, derselbe Gott sei „die Liebe", ist ein Etikettenschwindel: Christen haben sich einen sanften Jesus aus dem Neuen Testament herausgesucht und schauen beim Gott Israels weg. Konsequent wäre es, mit Markion zuzugeben, dass das Alte Testament einen anderen, grausamen Gott zeigt.`,
  biblical: {
    summary: `Die zentrale **Selbstoffenbarung** Gottes im Alten Testament lautet: „HERR, HERR, GOTT, barmherzig und gnädig und geduldig und von großer Gnade und Treue" (Ex 34,6–7). Diese Formel kehrt durch das ganze AT wieder (Num 14,18; Ps 86,15; 103,8; Joel 2,13; Jona 4,2). Gottes „Eifersucht" ist die leidenschaftliche Treue eines Ehemanns zu seiner Braut (Hos 2; Jer 2), nicht kleinliche Missgunst. Sein Gericht kommt nach langer Geduld (Gen 15,16; 2 Petr 3,9), und er sagt: „Ich habe keinen Gefallen am Tod des Gottlosen" (Ez 18,23). Der Prophet Jona ärgert sich sogar darüber, dass Gott *zu* barmherzig ist (Jona 4,2). Das Bild eines launischen Tyrannen lässt sich nur gewinnen, wenn man diese Linie ausblendet.`,
    detail: `**Eifersucht (*qannāʾ*).** In der Bibel ist Gottes Eifersucht immer auf den Bund bezogen: Israel ist seine Braut, Götzendienst ist Ehebruch (Hos 1–3; Ez 16). Ein Ehemann, dem es gleichgültig ist, ob seine Frau ihn betrügt, liebt nicht – er ist gleichgültig. Gottes Eifersucht ist der Ausdruck dafür, dass er sein Volk nicht an Mächte verlieren will, die es zerstören.

**„Bis ins dritte und vierte Glied" (Ex 20,5; 34,7).** Der Satz steht im Kontrast zu „Gnade in tausend Glieder" – das Gewicht liegt auf der Barmherzigkeit. Ex 20,5 spricht von denen, „die mich hassen", also von Generationen, die die Sünde der Väter fortsetzen. Dtn 24,16 und Ez 18,20 stellen klar: Jeder wird für seine eigene Sünde gerichtet. Dass die Folgen der Sünde Familien über Generationen belasten (Gewalt, Sucht), ist zudem eine beobachtbare Wirklichkeit.

**Hosea 11,8–9** zeigt das Herz Gottes im Ringen mit seinem untreuen Volk: „Mein Herz ist andern Sinnes, meine Barmherzigkeit ist zu brünstig … denn ich bin Gott und nicht ein Mensch."

**Jona 4,11** endet das Buch mit einer Frage Gottes über die feindliche Großstadt Ninive: „Und mich sollte nicht jammern Ninive …, in welcher sind mehr denn hundertundzwanzigtausend Menschen, die nicht wissen Unterschied, was rechts oder links ist, dazu auch viele Tiere?"`,
    sources: [
      { kind: 'bibel', work: 'Exodus', ref: '34,6–7', quote: `HERR, HERR, GOTT, barmherzig und gnädig und geduldig und von großer Gnade und Treue, der da bewahrt Gnade in tausend Glieder und vergibt Missetat, Übertretung und Sünde.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Jona', ref: '4,2', quote: `Denn ich weiß, daß du gnädig, barmherzig, langmütig und von großer Güte bist und lässest dich des Übels reuen.`, translation: 'Luther 1912', status: 'verbatim', note: 'Jona beklagt sich darüber, dass Gott seinen Feinden vergibt.' },
      { kind: 'bibel', work: 'Jona', ref: '4,11', quote: `Und mich sollte nicht jammern Ninive, solcher großen Stadt, in welcher sind mehr denn hundertundzwanzigtausend Menschen, die nicht wissen Unterschied, was rechts oder links ist, dazu auch viele Tiere?`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Hosea', ref: '11,8–9', quote: `Mein Herz ist andern Sinnes, meine Barmherzigkeit ist zu brünstig, daß ich nicht tun will nach meinem grimmigen Zorn … Denn ich bin Gott und nicht ein Mensch.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Hesekiel', ref: '18,23', quote: `Meinst du, daß ich Gefallen habe am Tode des Gottlosen, spricht der Herr HERR, und nicht vielmehr, daß er sich bekehre von seinem Wesen und lebe?`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Psalmen', ref: '103,8.13', quote: `Barmherzig und gnädig ist der HERR, geduldig und von großer Güte. … Wie sich ein Vater über Kinder erbarmt, so erbarmt sich der HERR über die, so ihn fürchten.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die Kirche hat Markion, der im 2. Jahrhundert den „gerechten" Gott des AT vom „guten" Vater Jesu trennen wollte, als Häretiker verworfen (Irenäus, Tertullian). Es gibt einen Gott, der in beiden Testamenten spricht. Zugleich lehrt die Tradition, dass Gott leidenschaftslos (*apathēs*) ist: Sein „Zorn" ist keine unkontrollierte Emotion, sondern die menschliche Bezeichnung für seine unwandelbare Gerechtigkeit, wie der Sünder sie erfährt. Origenes erklärt gegen Kelsos, dass die Schrift von Gottes Zorn spricht, nicht weil Gott einer Leidenschaft unterläge, sondern um den Menschen zu bessern. Die alexandrinische Auslegung liest das ganze AT auf Christus hin, in dem Gottes Gerechtigkeit und Liebe am Kreuz zusammenkommen.`,
    sources: [
      { kind: 'kirchenvater', author: 'Origenes', work: 'Contra Celsum', ref: 'IV,72', year: 'um 248', quote: `Wenn die Schrift vom Zorn Gottes spricht, meint sie keine Leidenschaft in Gott, sondern ein Mittel, durch das er die Menschen zurechtbringt.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Tertullian', work: 'Adversus Marcionem', ref: 'I–II', year: 'um 207', quote: `Güte und Gerechtigkeit gehören zum einen Gott; ein Gott, der nur gut, aber nicht gerecht wäre, wäre nicht gut.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Adversus Haereses', ref: 'III,25,2–3', year: 'um 180', quote: `Gegen Markion: Derselbe Gott ist gut und gerecht; wer ihm die Gerechtigkeit nimmt, nimmt ihm auch die Güte.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Dawkins zitiert die harten Stellen, aber nicht die Selbstbeschreibung Gottes, die das ganze AT durchzieht: „barmherzig und gnädig, geduldig und von großer Güte" (Ex 34,6). Der Prophet Jona beschwert sich sogar, dass Gott seinen Feinden zu schnell vergibt. Gottes „Eifersucht" ist die Treue eines Ehemanns, sein „Zorn" ist die Reaktion der Liebe auf das Böse – ein Gott, den Kindesmissbrauch kaltließe, wäre nicht liebevoll, sondern gleichgültig. Und es ist derselbe Gott, der in Jesus selbst ans Kreuz geht.`,
  keyPoints: [
    `**Gottes Selbstbeschreibung:** „barmherzig und gnädig, geduldig und von großer Gnade" (Ex 34,6) – die meistzitierte Gottesformel des AT.`,
    `**Eifersucht = Bundestreue:** Gott liebt sein Volk wie ein Ehemann; Gleichgültigkeit gegenüber Untreue wäre keine Liebe.`,
    `**Zorn = Liebe gegen das Böse:** Wer angesichts von Völkermord und Missbrauch nicht zürnt, liebt die Opfer nicht (Miroslav Volf).`,
    `**Geduld vor dem Gericht:** 400 Jahre für die Amoriter (Gen 15,16), Abrahams Fürbitte für Sodom (Gen 18), die Verschonung Ninives (Jona).`,
    `**Ein Gott in beiden Testamenten:** Jesus spricht vom Gericht, das AT von zärtlicher Liebe (Hos 11); die Kirche hat Markions Trennung verworfen.`,
    `**Das Kreuz:** Gott richtet das Böse nicht, indem er andere opfert, sondern indem er es selbst trägt.`,
  ],
  voices: [
    {
      person: 'paul-copan',
      role: 'als direkter Antwortgeber auf Dawkins',
      text: `Copans *Is God a Moral Monster?* (2011) ist eine direkte Antwort auf die Neuen Atheisten. Er geht Dawkins' Liste Stück für Stück durch und zeigt, dass viele Vorwürfe auf isolierten Versen beruhen, die man ohne ihren literarischen und historischen Kontext liest. Gottes Eifersucht sei Bundesliebe; seine Gerichte kämen nach langer Geduld; das mosaische Gesetz sei im Vergleich mit dem Umfeld ein moralischer Fortschritt, wenn auch nicht das letzte Wort. Copan fügt hinzu, dass Dawkins' moralische Empörung selbst objektive Werte voraussetzt, die er in seinem Weltbild nicht begründen kann.`,
      sources: [{ kind: 'fachliteratur', author: 'Paul Copan', work: 'Is God a Moral Monster? Making Sense of the Old Testament God', year: '2011', status: 'paraphrase' }],
    },
    {
      person: 'miroslav-volf',
      role: 'als Theologe aus einem Kriegsgebiet',
      text: `Der kroatische Theologe Miroslav Volf schrieb *Exclusion and Embrace* (1996) unter dem Eindruck der Kriege im ehemaligen Jugoslawien. Er gesteht, dass er früher einen zornigen Gott für unvereinbar mit Liebe hielt – bis er die Gräuel in seiner Heimat sah. Er lädt westliche Theologen ein, sich vorzustellen, sie hielten einen Vortrag über einen Gott, der niemals zürnt, vor Menschen, deren Städte zerstört, deren Töchter vergewaltigt und deren Väter ermordet wurden. Die These, Gott richte nicht, entstehe in der Ruhe eines Vorstadthauses.

Für Volf ist Gottes Zorn gerade die Voraussetzung dafür, dass Menschen auf eigene Rache verzichten können: Weil Gott das Böse richten wird, müssen wir es nicht selbst tun.`,
      sources: [{ kind: 'fachliteratur', author: 'Miroslav Volf', work: 'Exclusion and Embrace', year: '1996', status: 'paraphrase' }],
    },
    {
      person: 'tim-keller',
      role: 'als Seelsorger säkularer Großstädter',
      text: `Keller greift Volfs Gedanken in *The Reason for God* (2008) auf: Wenn ich jemanden liebe und sehe, wie er sich selbst oder andere zerstört, werde ich zornig – nicht trotz, sondern wegen meiner Liebe. Zorn ist nicht das Gegenteil von Liebe; das Gegenteil von Liebe ist Gleichgültigkeit. Ein Gott, der über Völkermord, Menschenhandel und Missbrauch nicht zornig wäre, wäre kein Gott der Liebe, sondern ein unbeteiligter Zuschauer.`,
      sources: [{ kind: 'fachliteratur', author: 'Timothy Keller', work: 'The Reason for God', ref: 'Kap. 5', year: '2008', status: 'paraphrase' }],
    },
    {
      person: 'origenes',
      role: 'als Apologet gegen Kelsos und Markion',
      text: `Origenes kannte den Einwand bereits aus zwei Richtungen: vom heidnischen Philosophen Kelsos, der die anthropomorphen Gottesbilder der Bibel verspottete, und von den Markioniten, die den Gott des AT für grausam hielten. Seine Antwort: Die Schrift redet über Gott in menschlichen Bildern, so wie man mit Kindern spricht. Wenn sie von Gottes Zorn, Reue oder Eifersucht spricht, will sie den Hörer zur Umkehr bewegen – Gott selbst ist nicht wechselnden Leidenschaften unterworfen. Der gerechte und der gute Gott sind ein und derselbe.`,
      sources: [
        { kind: 'kirchenvater', author: 'Origenes', work: 'Contra Celsum', ref: 'IV,71–72', status: 'paraphrase' },
        { kind: 'kirchenvater', author: 'Origenes', work: 'De principiis (Peri Archon)', ref: 'II,4–5', status: 'paraphrase' },
      ],
    },
    {
      person: 'cs-lewis',
      role: 'als Literaturwissenschaftler und Apologet',
      text: `Auf den Vorwurf, Gott verlange wie ein eitler Herrscher ständig Lob, antwortet Lewis in *Reflections on the Psalms* (1958): Er habe selbst mit diesem Gedanken gekämpft, bis ihm auffiel, dass Menschen ganz natürlich preisen, was sie lieben – eine Landschaft, ein Buch, einen geliebten Menschen. Das Lob drückt die Freude nicht nur aus, es vollendet sie. Wenn Gott das höchste Gut ist, dann ist die Einladung zum Lob keine Eitelkeit, sondern die Einladung zur vollkommenen Freude.`,
      sources: [{ kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Reflections on the Psalms', ref: 'Kap. 9 („A Word about Praising")', year: '1958', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'dawkins-liste',
      objection: `„Der Gott des Alten Testaments ist wohl die unangenehmste Figur der gesamten Literatur: eifersüchtig und stolz darauf; ein kleinlicher, ungerechter, nachtragender Kontrollfreak; ein rachsüchtiger, blutrünstiger ethnischer Säuberer …" Jede dieser Eigenschaften lässt sich mit Bibelstellen belegen.`,
      objectionBy: 'Richard Dawkins',
      answer: `Jede Eigenschaft lässt sich mit *einzelnen* Versen belegen, wenn man den Rest weglässt – so könnte man auch aus jeder Biografie ein Monster machen. Die Bibel selbst nennt als Gottes Wesen: „barmherzig und gnädig, geduldig und von großer Gnade und Treue" (Ex 34,6), und diese Formel kehrt im AT immer wieder. Jona ist wütend, weil Gott seinen Feinden zu leicht vergibt. Lass uns die einzelnen Punkte gern durchgehen – aber im Kontext.`,
      sources: [
        { kind: 'gegner', author: 'Richard Dawkins', work: 'The God Delusion', ref: 'Kap. 2 („The God Hypothesis"), erster Satz', year: '2006', quote: `Der Gott des Alten Testaments ist wohl die unangenehmste Figur der gesamten Literatur: eifersüchtig und stolz darauf; ein kleinlicher, ungerechter, nachtragender Kontrollfreak; ein rachsüchtiger, blutrünstiger ethnischer Säuberer; ein frauenfeindlicher, homophober, rassistischer, kinder- und völkermordender, filizidaler, pestbringender, größenwahnsinniger, sadomasochistischer, launisch-boshafter Tyrann.`, original: 'The God of the Old Testament is arguably the most unpleasant character in all fiction: jealous and proud of it; a petty, unjust, unforgiving control-freak; a vindictive, bloodthirsty ethnic cleanser; a misogynistic, homophobic, racist, infanticidal, genocidal, filicidal, pestilential, megalomaniacal, sadomasochistic, capriciously malevolent bully.', translation: 'eigene Übersetzung', status: 'verbatim' },
      ],
      questionsBack: [
        `Hast du Ex 34,6–7, Hos 11 oder Jona 4 in deiner Liste berücksichtigt?`,
        `Welchen objektiven Maßstab benutzt du, wenn du Gott „ungerecht" nennst – in einem Universum, das du selbst als „blinde, erbarmungslose Gleichgültigkeit" beschreibst?`,
      ],
      followUps: [
        {
          id: 'eifersuechtig',
          objection: `Gott sagt selbst: „Der HERR heißt ein Eiferer" (Ex 34,14). Eifersucht ist ein Laster, keine Tugend. Ein vollkommenes Wesen ist nicht eifersüchtig.`,
          objectionBy: 'Christopher Hitchens',
          answer: `Es gibt zwei Arten von Eifersucht: die neidische, die dem anderen etwas missgönnt, und die liebende, die eine exklusive Beziehung schützt. Ein Ehemann, dem es egal ist, ob seine Frau ihn betrügt, ist nicht tugendhaft, sondern lieblos. Die Bibel beschreibt Israel als Gottes Braut und Götzendienst als Ehebruch (Hos 1–3). Gottes Eifersucht heißt: Er will sein Volk nicht an Mächte verlieren, die es zerstören – darunter Götter, denen man Kinder opferte.`,
          followUps: [
            {
              id: 'vaeter-kinder',
              objection: `Und Ex 20,5? Er sucht die Schuld der Väter heim an den Kindern bis ins dritte und vierte Glied. Kinder für die Sünden der Eltern zu bestrafen ist der Inbegriff von Ungerechtigkeit.`,
              objectionBy: 'Richard Dawkins',
              answer: `Lies den Satz zu Ende: „…an denen, die mich hassen" – also Generationen, die die Sünde der Väter fortsetzen. Und lies den nächsten Vers: Gott „tut Barmherzigkeit an vielen Tausenden". Das Gewicht liegt auf der Gnade. Die Tora selbst verbietet, Kinder für die Schuld der Väter zu strafen (Dtn 24,16), und Ezechiel sagt: „Der Sohn soll nicht tragen die Missetat des Vaters" (Ez 18,20).`,
              detail: `Ex 20,5 beschreibt, wie Schuld in Familien weiterwirkt – Gewalt, Sucht und Götzendienst prägen Kinder und Enkel, die sie oft fortsetzen. Das ist eine Beobachtung, keine Willkür. Das juristische Prinzip der persönlichen Verantwortung (Dtn 24,16; Ez 18) steht daneben.`,
              followUps: [
                {
                  id: 'widerspruch-ex-ez',
                  objection: `Dann widerspricht sich die Bibel eben: Ex 20 sagt, Kinder werden bestraft, Ez 18 sagt, sie werden es nicht.`,
                  objectionBy: 'Bart Ehrman',
                  answer: `Kein Widerspruch, sondern zwei Ebenen. Ezechiel wendet sich gegen einen Fatalismus seiner Zeitgenossen, die sagten: „Die Väter haben saure Trauben gegessen, und den Kindern sind die Zähne stumpf geworden" (Ez 18,2) – also: Wir können nichts dafür. Gott antwortet: Jeder kann umkehren und leben. Ex 20 beschreibt die geschichtliche Wirkung der Sünde über Generationen, Ez 18 die persönliche Verantwortung vor Gott. Beides gilt.`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'launische-toetungen',
      objection: `Sintflut, Sodom, Ussa, der die Lade stützen wollte, und die Bären, die 42 Kinder zerreißen, weil sie einen Propheten „Glatzkopf" nannten (2 Kön 2,23–24). Das ist launische Bosheit.`,
      objectionBy: 'Richard Dawkins',
      answer: `Launisch ist gerade das Gegenteil dessen, was diese Texte zeigen: Vor Sodom verhandelt Abraham mit Gott, und Gott würde die Stadt um zehn Gerechter willen verschonen (Gen 18,32). Vor der Flut nennt der NT Noah einen „Prediger der Gerechtigkeit" (2 Petr 2,5). Bei Elisa steht im Hebräischen *neʿārîm qeṭannîm* – junge Männer, eine Bande von mindestens 42, die einen Propheten bedroht. Ich gebe zu: Einige dieser Texte, wie Ussa oder die Bären, bleiben schwer. Aber sie sind Ausnahmen in einer Geschichte langer Geduld.`,
      detail: `*Naʿar* kann einen Säugling, aber auch einen Soldaten (1 Sam 17,33 – David) oder einen Diener im Erwachsenenalter bezeichnen. Der Vorfall geschieht bei Bet-El, dem Zentrum des staatlichen Stierkults Nordisraels; „Komm herauf, Kahlkopf" spielt vermutlich spöttisch auf Elias Himmelfahrt an („Fahr doch auch auf!"). Das macht den Text nicht angenehm, aber es ist keine Szene mit Kleinkindern, die einen alten Mann necken.

Ussa (2 Sam 6): Die Lade sollte nach Num 4,15 von Leviten an Stangen getragen und nie berührt werden; David hatte diese Anweisung ignoriert und sie auf einen Wagen gesetzt, wie die Philister. Der Text unterstreicht die Heiligkeit Gottes – ein unbequemes Thema, aber keine Laune.`,
      followUps: [
        {
          id: 'gott-toetet-millionen',
          objection: `Gott tötet in der Bibel Millionen Menschen, Satan nur eine Handvoll – Hiobs Kinder. Wer ist hier eigentlich der Böse?`,
          objectionBy: 'Steve Wells',
          answer: `Der Vergleich übersieht den Unterschied zwischen einem Mörder und einem Richter: Wer ein Urteil vollstreckt, tut etwas anderes als jemand, der aus Bosheit tötet. Gott ist Geber und Herr allen Lebens; jeder Mensch stirbt irgendwann, und das liegt in seiner Hand. Satan dagegen ist in der Bibel der Verkläger und Zerstörer, der den Menschen von Gott wegreißen will. Die hohen Zahlen solcher Zählungen beruhen übrigens weitgehend auf Hochrechnungen, etwa für die Sintflut.`,
          followUps: [
            {
              id: 'richter-rechtfertigt-nicht-alles',
              objection: `„Er ist der Richter" rechtfertigt nicht alles. Auch ein Richter kann ungerecht sein.`,
              objectionBy: 'Bart Ehrman',
              answer: `Richtig – ein menschlicher Richter kann irren, weil er die Herzen nicht kennt. Der christliche Glaube behauptet, dass Gott die Herzen kennt und vollkommen gerecht ist. Ob das stimmt, hängt an der Frage, ob es diesen Gott gibt – und dort hat das Christentum seine stärkste Antwort: Am Kreuz richtet Gott das Böse nicht, indem er andere opfert, sondern indem er selbst das Gericht trägt. Ein Gott, der so handelt, ist kein launischer Tyrann.`,
              followUps: [
                {
                  id: 'herzenskenntnis-unfalsifizierbar',
                  objection: `„Gott kennt die Herzen" ist eine unfalsifizierbare Ausrede. Damit kann man jede Gräueltat rechtfertigen: Gott wusste halt mehr. Genau so argumentieren Terroristen.`,
                  objectionBy: 'Bart Ehrman',
                  answer: `Der Unterschied ist entscheidend: Ein Terrorist beansprucht göttliches Wissen für **sich selbst** und handelt danach. Ich sage das Gegenteil: Weil nur Gott die Herzen kennt, darf **kein Mensch** in seinem Namen töten – Jesus hat seinen Jüngern genau das verwehrt. Und ich messe Gott nicht an nichts: Die Bibel selbst hält ihn an seinem Maßstab fest – Abraham fragt: „Sollte der Richter aller Welt nicht recht richten?" (Gen 18,25). Und in Christus zeigt Gott, wie sein Herz wirklich aussieht.`,
                  detail: `Die Logik ist also nicht „alles ist erlaubt, wenn Gott es tut", sondern: (1) Gott hat Rechte über Leben und Tod, die kein Mensch hat; (2) er hat sein Wesen endgültig in Christus offenbart, der lieber stirbt als tötet; (3) darum ist jede menschliche Berufung auf Gott zur Rechtfertigung von Gewalt am Kreuz zu prüfen – und scheitert dort. Das ist kein Freibrief, sondern eine Schranke.`,
                  sources: [
                    { kind: 'bibel', work: 'Genesis', ref: '18,25', quote: `Sollte der Richter aller Welt nicht recht richten?`, translation: 'Luther 1912', status: 'verbatim' },
                  ],
                  questionsBack: [
                    `Wenn ein allwissender Gott existierte – wäre es dann nicht vernünftig, dass er Dinge weiß, die wir nicht wissen?`,
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'nt-gott-anders',
      objection: `Der Gott des Neuen Testaments ist ein anderer: Jesus predigt Feindesliebe, der Gott des AT befiehlt Kriege. Christen haben sich den sanften Jesus herausgesucht.`,
      objectionBy: 'Christopher Hitchens',
      answer: `Jesus selbst sah keinen Unterschied: Er nannte den Gott Abrahams seinen Vater und zitierte das AT als Gottes Wort. Das Gebot der Nächstenliebe stammt aus Lev 19,18, und die Feindesliebe hat Vorläufer in Spr 25,21. Umgekehrt spricht niemand im NT so oft vom Gericht wie Jesus (Mt 25,41), und die Offenbarung zeigt den Zorn des Lammes. Es ist ein Gott – heilig und barmherzig – in beiden Testamenten.`,
      sources: [
        { kind: 'bibel', work: 'Levitikus', ref: '19,18', quote: `Du sollst deinen Nächsten lieben wie dich selbst; denn ich bin der HERR.`, translation: 'Luther 1912', status: 'verbatim' },
        { kind: 'bibel', work: 'Sprüche', ref: '25,21', quote: `Hungert deinen Feind, so speise ihn mit Brot; dürstet ihn, so tränke ihn mit Wasser.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'liebe-ohne-zorn',
          objection: `Ein wirklich liebender Gott hätte überhaupt keinen Zorn. Zorn ist eine primitive Emotion.`,
          objectionBy: 'Bart Ehrman',
          answer: `Stell dir vor, du siehst, wie jemand ein Kind misshandelt, und bleibst völlig ruhig – wäre das Liebe? Zorn ist die Antwort der Liebe auf das, was das Geliebte zerstört. Das Gegenteil von Liebe ist nicht Zorn, sondern Gleichgültigkeit. Der kroatische Theologe Miroslav Volf, der den Balkankrieg erlebte, schreibt: Die Vorstellung eines Gottes, der niemals richtet, entsteht in der Ruhe eines Vorstadthauses, nicht in einem Kriegsgebiet.`,
          followUps: [
            {
              id: 'gott-launisch-emotional',
              objection: `Dann ist dein Gott eben ein emotional instabiler Herrscher, der mal zornig, mal gnädig ist – wie ein Psychopath mit Stimmungsschwankungen.`,
              objectionBy: 'Richard Dawkins',
              answer: `Die Kirche lehrt das Gegenteil: Gott ist nicht wechselnden Leidenschaften unterworfen. Wenn die Bibel von Zorn oder Reue spricht, redet sie in menschlichen Bildern. Gemeint ist Gottes unwandelbare Gerechtigkeit, die der Sünder als Zorn und der Umkehrende als Gnade erfährt – wie dieselbe Sonne Wachs schmilzt und Ton härtet. Origenes erklärte schon gegen Kelsos, dass Gottes „Zorn" keine Leidenschaft ist, sondern ein Mittel, Menschen zurechtzubringen.`,
              followUps: [
                {
                  id: 'propheten-gewalt-ehe-metapher',
                  objection: `Noch schlimmer sind die Propheten: Bei Hosea und Hesekiel 16 und 23 ist Gott der betrogene Ehemann, der seine untreue Frau öffentlich entblößt und demütigen lässt. Das ist die Sprache häuslicher Gewalt – und sie hat Generationen von Männern ein göttliches Vorbild geliefert.`,
                  objectionBy: 'Renita J. Weems',
                  answer: `Diese Kritik feministischer Exegetinnen verdient eine ernste Antwort: Die Bilder sind schockierend, und kein Mann darf daraus je ein Recht ableiten, seine Frau zu demütigen. Aber die Texte sind Gerichtsrhetorik an ein ganzes Volk, nicht eine Eheordnung: Das Entblößen beschreibt, was die „Liebhaber" – die Großmächte, mit denen Israel paktierte – ihm antun werden. Und das Ende ist nicht Gewalt, sondern Werbung: „Ich will sie locken und in die Wüste führen und freundlich mit ihr reden" (Hos 2,16), „ich will mich mit dir verloben in Ewigkeit" (Hos 2,21).`,
                  detail: `Die Metapher funktioniert durch Schock: Die Propheten wollten zeigen, wie tief der Treuebruch gegen Gott ist, der Israel aus dem Elend aufgelesen hatte (Ez 16,4–14). Dass diese Bildsprache in einer patriarchalen Kultur formuliert ist, darf man zugeben. Die Schrift selbst korrigiert jedoch jedes Missverständnis über Ehe: Das Neue Testament verlangt vom Mann, seine Frau zu lieben, „gleichwie Christus die Gemeinde geliebt hat und hat sich selbst für sie gegeben" (Eph 5,25) – Selbsthingabe, nicht Herrschaft. Die Kirche muss klar sagen: Wer häusliche Gewalt mit der Bibel rechtfertigt, versündigt sich doppelt.`,
                  sources: [
                    { kind: 'gegner', author: 'Renita J. Weems', work: 'Battered Love: Marriage, Sex, and Violence in the Hebrew Prophets', year: '1995', quote: `Die prophetische Ehe-Metapher verknüpfe göttliche Liebe mit männlicher Gewalt und könne so Gewalt gegen Frauen normalisieren.`, status: 'paraphrase' },
                    { kind: 'bibel', work: 'Hosea', ref: '2,16.21', quote: `Ich will sie locken und will sie in eine Wüste führen und freundlich mit ihr reden. … Ich will mich mit dir verloben in Ewigkeit.`, status: 'paraphrase' },
                    { kind: 'bibel', work: 'Epheser', ref: '5,25', quote: `Ihr Männer, liebet eure Weiber, gleichwie Christus geliebt hat die Gemeinde und hat sich selbst für sie gegeben.`, translation: 'Luther 1912', status: 'verbatim' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'megaloman-anbetung',
      objection: `Und dann verlangt dieser Gott ständig Anbetung und Lob. Das ist der Charakter eines größenwahnsinnigen Narzissten.`,
      objectionBy: 'Richard Dawkins',
      answer: `C. S. Lewis hatte genau diesen Einwand, bis er bemerkte: Wir loben spontan, was wir lieben – einen Sonnenuntergang, ein Buch, einen Menschen –, und das Lob vollendet unsere Freude erst. Wenn Gott das höchste Gut ist, dann ist es nicht Eitelkeit, wenn er uns zum Lob einlädt, sondern Großzügigkeit: Er lädt uns ein zu der Freude, für die wir geschaffen sind. Gott braucht unser Lob nicht – wir brauchen es.`,
      followUps: [
        {
          id: 'himmlisches-nordkorea',
          objection: `Euer Himmel ist ein himmlisches Nordkorea: ewiges Lobsingen für einen Herrscher, den man lieben **muss**, unter totaler Überwachung, die nicht einmal nach dem Tod endet. Wenigstens kann man aus Nordkorea durch den Tod entkommen.`,
          objectionBy: 'Christopher Hitchens',
          answer: `Der Vergleich kippt an einer Stelle: Ein Diktator erzwingt Lob für etwas, das nicht wahr ist, und zu seinem eigenen Nutzen. Gott braucht unser Lob nicht – er hat es nicht nötig, so wie die Sonne unser Staunen nicht braucht. Anbetung ist die Freude eines Geschöpfs, das endlich sieht, was wirklich schön und gut ist. Und gezwungen wird niemand: Wer Gott nicht will, dem wird er nicht aufgedrängt.`,
          detail: `Die christliche Vorstellung vom Himmel ist nicht ein ewiger Pflichtgottesdienst, sondern die Vollendung dessen, wonach der Mensch sich zutiefst sehnt: „Unruhig ist unser Herz, bis es ruht in dir" (Augustinus, *Bekenntnisse* I,1). Die Väter sprechen von *theōsis*, der Teilhabe an Gottes Leben – nicht von Unterwerfung, sondern von Verwandlung in Liebe.

C. S. Lewis hat das Gegenbild in *Die große Scheidung* gezeichnet: Am Ende gibt es nur zwei Arten von Menschen – die, die zu Gott sagen „Dein Wille geschehe", und die, zu denen Gott sagt „Dein Wille geschehe". Das ist das Gegenteil von Totalitarismus: Gott respektiert sogar das Nein.`,
          voices: [
            { person: 'cs-lewis', role: 'als Apologet der Freude', text: `Lewis beschreibt in *Gedanken zu den Psalmen*, dass Lob die Vollendung der Freude ist: Wir loben, was wir genießen, weil die Freude erst im Ausdruck vollständig wird. Wenn Gott uns zum Lob ruft, lädt er uns ein, ihn zu genießen – und darin liegt unser Glück, nicht seins.` },
            { person: 'athanasius', role: 'als Lehrer der Vergöttlichung', text: `Für Athanasius ist das Ziel der Menschwerdung, dass der Mensch an Gottes Leben teilhat: „Er wurde Mensch, damit wir vergöttlicht würden" (*De Incarnatione* 54). Das Ziel ist nicht Unterwerfung unter einen fernen Herrscher, sondern Gemeinschaft mit dem, der sich selbst hingegeben hat.` },
          ],
          sources: [
            { kind: 'gegner', author: 'Christopher Hitchens', work: 'God Is Not Great', year: '2007', quote: `Der Himmel sei eine Art „himmlisches Nordkorea", eine Diktatur, die man nicht einmal durch den Tod verlassen könne.`, status: 'paraphrase', note: 'Hitchens benutzte das Bild vielfach in Debatten (u. a. gegen Craig und Wilson).' },
            { kind: 'kirchenvater', author: 'Augustinus', work: 'Bekenntnisse (Confessiones)', ref: 'I,1', year: 'um 397', quote: `Du hast uns zu dir hin geschaffen, und unruhig ist unser Herz, bis es ruht in dir.`, status: 'verbatim' },
            { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Die große Scheidung (The Great Divorce)', ref: 'Kap. 9', year: '1945', quote: `Am Ende gebe es nur zwei Arten von Menschen: die zu Gott sagen „Dein Wille geschehe", und die, zu denen Gott schließlich sagt „Dein Wille geschehe".`, status: 'paraphrase' },
          ],
          followUps: [
            {
              id: 'kein-ausgang-hoelle',
              objection: `„Gott respektiert das Nein" – und bestraft es dann ewig. Ein Angebot, das man unter Androhung ewiger Folter nicht ablehnen darf, ist kein Angebot, sondern Erpressung.`,
              objectionBy: 'Christopher Hitchens',
              answer: `Die orthodoxe Tradition denkt die Hölle nicht als Folterkammer, die Gott neben dem Himmel betreibt, sondern als das Erleiden derselben göttlichen Liebe durch einen Menschen, der sie hasst. Isaak der Syrer sagt, die Verdammten würden „von der Geißel der Liebe" gepeinigt. Gott droht nicht mit etwas Fremdem; er sagt die Wahrheit darüber, was es bedeutet, die Quelle allen Lebens dauerhaft abzulehnen. Ein Arzt, der vor den Folgen einer Krankheit warnt, erpresst nicht.`,
              detail: `Die Frage der ewigen Strafe wird eigens behandelt (Themenblock „Hölle"). Für dieses Gespräch reicht: Der Vorwurf der Erpressung setzt voraus, dass Gott ein Fremder ist, der Gehorsam gegen Belohnung tauscht. Das Evangelium sagt, dass Gott selbst das Leben ist (Joh 14,6) – sich von ihm abzuwenden heißt, sich vom Leben abzuwenden.`,
              voices: [
                { person: 'isaak-syrer', role: 'als Mystiker der Liebe', text: `Isaak der Syrer lehrt in seinen asketischen Homilien, dass die Gequälten in der Hölle von der Liebe Gottes gequält werden: Die Liebe, die den Heiligen Freude ist, ist denen, die sich ihr verschlossen haben, Pein. Die Hölle ist für ihn nicht Abwesenheit Gottes, sondern Abwehr seiner Gegenwart.` },
              ],
              sources: [
                { kind: 'kirchenvater', author: 'Isaak der Syrer', work: 'Asketische Homilien', ref: 'Homilie 28 (nach der Zählung der griechischen Ausgabe) bzw. I,28', year: '7. Jh.', quote: `Die in der Hölle gepeinigt werden, werden von der Geißel der Liebe gepeinigt.`, status: 'paraphrase', note: 'Homilienzählung unterscheidet sich je nach Ausgabe (syrisch/griechisch).' },
              ],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Warum lässt deine Liste Ex 34,6–7 aus, die Stelle, an der Gott sich selbst beschreibt?`,
    `Wäre ein Gott, der über Völkermord und Missbrauch nicht zornig wird, liebevoller oder gleichgültiger?`,
    `Auf welcher Grundlage nennst du etwas „ungerecht", wenn das Universum „kein Gut und kein Böse" kennt?`,
    `Wie erklärst du, dass ein Prophet sich beschwert, Gott sei zu barmherzig (Jona 4,2)?`,
  ],
  avoid: [
    `„Der AT-Gott war eben strenger, im NT ist Gott netter geworden." Das ist Markionismus und widerspricht Jesus selbst.`,
    `Jede harte Stelle mit „Gott weiß es besser" abwürgen, ohne Kontext und Gattung zu erklären.`,
    `Behaupten, Dawkins habe gar keine Belege. Er zitiert reale Texte – man muss sie im Zusammenhang zeigen.`,
  ],
  concessions: [
    `Einige Texte (Ussa, die Bären Elisas, die Sintflut) bleiben für heutige Leser verstörend, auch wenn man den Kontext kennt.`,
    `Christen haben oft nur die tröstlichen Teile der Bibel gelesen und sind den schwierigen ausgewichen – das hat den Eindruck des Etikettenschwindels verstärkt.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Paul Copan', work: 'Is God a Moral Monster?', year: '2011', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Miroslav Volf', work: 'Exclusion and Embrace', year: '1996', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Timothy Keller', work: 'The Reason for God', year: '2008', status: 'paraphrase' },
    { kind: 'kirchenvater', author: 'Tertullian', work: 'Adversus Marcionem', year: 'um 207', status: 'paraphrase' },
  ],
  difficulty: 1,
  tags: ['Dawkins', 'Gottesbild', 'Zorn Gottes', 'Eifersucht', 'Markion', 'Barmherzigkeit'],
  related: [
    'at-ethik/kanaaniter-voelkermord',
    'at-ethik/grausame-gesetze',
    'hoelle/liebender-gott-keine-hoelle',
    'theodizee/logisches-problem-des-uebels',
    'moral-und-gott/gut-ohne-gott',
  ],
};

export default claim;
