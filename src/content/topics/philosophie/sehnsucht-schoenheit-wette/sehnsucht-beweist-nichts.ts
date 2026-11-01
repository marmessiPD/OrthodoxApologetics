import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'sehnsucht-beweist-nichts',
  title: `„Die Sehnsucht nach Gott beweist nichts (gegen C. S. Lewis)."`,
  proponents: [
    { name: 'John Beversluis', role: 'Philosoph, Butler University', work: 'C. S. Lewis and the Search for Rational Religion (1985, überarb. 2007)' },
    { name: 'Ludwig Feuerbach', role: 'Philosoph (1804–1872)', work: 'Das Wesen des Christentums (1841)' },
    { name: 'Sigmund Freud', role: 'Begründer der Psychoanalyse (1856–1939)', work: 'Die Zukunft einer Illusion (1927); Das Unbehagen in der Kultur (1930)' },
    { name: 'Sam Harris', role: 'Neurowissenschaftler und Autor', work: 'Waking Up: A Guide to Spirituality Without Religion (2014)' },
  ],
  steelman: `C. S. Lewis argumentiert: Jedem natürlichen Verlangen entspricht etwas, das es stillen kann – dem Hunger die Nahrung, dem Durst das Wasser, dem Geschlechtstrieb die Sexualität. Wir haben aber ein Verlangen, das nichts in dieser Welt stillt; also sind wir für eine andere Welt gemacht. Das Argument ist rührend, aber logisch wertlos. Wünsche erzeugen keine Gegenstände: Ich kann mir ewige Jugend, Gerechtigkeit für alle oder ein Einhorn wünschen, ohne dass es sie gibt. John Beversluis hat gezeigt, dass Lewis entweder zirkulär argumentiert (er definiert das Verlangen als Verlangen nach Gott) oder unbegründet verallgemeinert. Die Unruhe des Herzens ist evolutionär leicht erklärbar: Ein Lebewesen, das nie ganz zufrieden ist („hedonische Tretmühle"), strebt weiter und überlebt besser. Feuerbach hat erklärt, warum wir uns einen Gott vorstellen: Er ist die Projektion unserer unerfüllten Wünsche. Und moderne Achtsamkeit zeigt, dass Erfahrungen der Transzendenz ganz ohne Gott möglich sind. Die Sehnsucht beweist nur, dass wir sehnsüchtige Wesen sind.`,
  biblical: {
    summary: `Die Bibel beschreibt den Menschen als ein Wesen, das nach Gott dürstet: „Wie der Hirsch schreit nach frischem Wasser, so schreit meine Seele, Gott, zu dir" (Ps 42,2). Gott hat „die Ewigkeit in ihr Herz gelegt" (Koh 3,11), und darum findet der Mensch in nichts Endlichem dauerhafte Ruhe – das ganze Buch Kohelet beschreibt diese Erfahrung: „Es ist alles eitel." Jesus antwortet auf diese Sehnsucht: „Wer von diesem Wasser trinkt, den wird wieder dürsten; wer aber von dem Wasser trinken wird, das ich ihm gebe, den wird ewiglich nicht dürsten" (Joh 4,13–14).`,
    detail: `- **Koh 3,11:** Das hebräische *ha'olam* („Ewigkeit") im Herzen – eine Sehnsucht, die über das Zeitliche hinausweist. Luther übersetzt hier anders; die Elberfelder Übersetzung gibt den hebräischen Text wörtlicher wieder.
- **Ps 42 und 63:** Die Sehnsucht nach Gott in Bildern körperlichen Durstes – Psalm 63 betet die koptische Kirche in der Agpeya.
- **Kohelet insgesamt:** Ein Experiment mit allen irdischen Gütern – Weisheit, Lust, Besitz, Werke – mit dem Ergebnis: Nichts stillt das Herz ganz.
- **Joh 4,13–14; 6,35:** Jesus beansprucht, selbst die Antwort auf den Durst des Menschen zu sein.
- **Röm 8,22–23:** Die ganze Schöpfung „sehnt sich" und „ängstet sich" – die Sehnsucht ist nicht nur menschlich, sondern kosmisch.`,
    sources: [
      { kind: 'bibel', work: 'Psalmen', ref: '42,2–3', quote: `Wie der Hirsch schreit nach frischem Wasser, so schreit meine Seele, Gott, zu dir. Meine Seele dürstet nach Gott, nach dem lebendigen Gott. Wann werde ich dahin kommen, daß ich Gottes Angesicht schaue?`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Prediger (Kohelet)', ref: '3,11', quote: `Er hat alles schön gemacht zu seiner Zeit; auch hat er die Ewigkeit in ihr Herz gelegt, ohne dass der Mensch das Werk, das Gott gewirkt hat, von Anfang bis zu Ende erfassen kann.`, translation: 'nach Elberfelder 1905', status: 'paraphrase' },
      { kind: 'bibel', work: 'Johannes', ref: '4,13–14', quote: `Jesus antwortete und sprach zu ihr: Wer dies Wasser trinkt, den wird wieder dürsten; wer aber das Wasser trinken wird, das ich ihm gebe, den wird ewiglich nicht dürsten …`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Psalmen', ref: '63,2', quote: `Gott, du bist mein Gott; frühe wache ich zu dir. Es dürstet meine Seele nach dir; mein Fleisch verlangt nach dir in einem trockenen und dürren Lande, da kein Wasser ist.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Der berühmteste Satz über die Sehnsucht stammt von Augustinus: „Du hast uns zu dir hin geschaffen, und unruhig ist unser Herz, bis es ruht in dir." Die orthodoxe Tradition sieht im Menschen ein Wesen, das nach Gottes Bild geschaffen ist und darum auf die Gemeinschaft mit ihm hin angelegt ist – sein Ziel ist die Vergöttlichung. Gregor von Nyssa beschreibt die Sehnsucht nach Gott als unendlich, weil ihr Ziel unendlich ist. Die koptische Kirche betet in der Agpeya jeden Morgen Psalm 63 („Es dürstet meine Seele nach dir") – die Sehnsucht wird nicht verdrängt, sondern ins Gebet genommen.`,
    sources: [
      { kind: 'kirchenvater', author: 'Augustinus', work: 'Bekenntnisse (Confessiones)', ref: 'I,1,1', year: 'um 400', quote: `Du hast uns zu dir hin geschaffen, und unruhig ist unser Herz, bis es ruht in dir.`, original: 'fecisti nos ad te et inquietum est cor nostrum, donec requiescat in te', translation: 'eigene Übersetzung', status: 'verbatim' },
      { kind: 'kirchenvater', author: 'Gregor von Nyssa', work: 'Das Leben des Mose', ref: 'II,239', status: 'paraphrase', quote: 'Die wahre Schau Gottes besteht darin, nie satt zu werden in der Sehnsucht, ihn zu sehen.' },
      { kind: 'liturgie', work: 'Agpeya (koptisches Stundengebet), Gebet der ersten Stunde', status: 'paraphrase', quote: 'Psalm 63 (LXX 62) – „Gott, mein Gott, frühe suche ich dich; es dürstet meine Seele nach dir" – gehört zu den Psalmen des Morgengebets.', note: 'Psalmenauswahl je nach Agpeya-Ausgabe; vor genauer Angabe prüfen.' },
    ],
  },
  quickAnswer: `Lewis' Argument ist kein mathematischer Beweis, sondern ein Schluss auf die beste Erklärung. Er sagt nicht: „Jeder Wunsch hat ein Objekt" (Einhörner!), sondern: Jedes *angeborene, natürliche* Verlangen – Hunger, Durst, Freundschaft, Wissensdrang – entspricht etwas Wirklichem. Nun haben Menschen aller Zeiten ein Verlangen, das nichts Endliches stillt: Kohelet, Augustinus, Pascal, sogar der Atheist Bertrand Russell beschrieb einen „wilden Schmerz", eine Suche nach etwas jenseits der Welt. Die einfachste Erklärung ist, dass wir für mehr geschaffen sind. Lewis: „Wenn ich in mir ein Verlangen finde, das keine Erfahrung in dieser Welt stillen kann, ist die wahrscheinlichste Erklärung, dass ich für eine andere Welt gemacht bin."`,
  keyPoints: [
    `**Natürliches vs. künstliches Verlangen:** Das Argument gilt für angeborene Bedürfnisse (Hunger, Durst, Gemeinschaft), nicht für erworbene Wünsche (Einhörner, Ferraris).`,
    `**Kein Beweis, sondern beste Erklärung:** Lewis spricht ausdrücklich von der „wahrscheinlichsten Erklärung".`,
    `**Universell bezeugt:** Kohelet, Platon, Augustinus, Pascal – und Atheisten wie Bertrand Russell beschreiben dieselbe unstillbare Sehnsucht.`,
    `**Hunger garantiert nicht Brot – aber die Existenz von Brot:** Lewis selbst: Das Verlangen beweist nicht, dass ich es gestillt bekomme, wohl aber, dass es etwas gibt, das es stillt.`,
    `**Evolution erklärt das Wie, nicht das Ob:** Auch Hunger ist evolutionär entstanden – und doch gibt es Nahrung.`,
    `**Ein Indiz unter vielen:** Das Argument ist Teil eines kumulativen Falls, nicht seine Grundlage.`,
  ],
  argument: {
    name: 'Das Argument aus der Sehnsucht (Lewis; Fassung nach Peter Kreeft)',
    summary: 'Jedes natürliche Verlangen hat ein reales Objekt; es gibt ein Verlangen, das nichts Irdisches stillt; also gibt es ein überirdisches Objekt.',
    premises: [
      {
        text: 'P1: Jedes natürliche, angeborene Verlangen entspricht einem realen Gegenstand, der es stillen kann.',
        support: `Hunger – Nahrung; Durst – Wasser; Geschlechtstrieb – Sexualität; Einsamkeit – Gemeinschaft; Neugier – Erkenntnis. Natürliche Verlangen sind allen Menschen gemeinsam und nicht erst durch Kultur oder Werbung erzeugt. Künstliche Wünsche (Einhörner, Oz) gehören nicht dazu.`,
        sources: [
          { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Mere Christianity (Pardon, ich bin Christ)', ref: 'Buch III, Kap. 10 „Hope"', year: '1952', quote: `Geschöpfe werden nicht mit Wünschen geboren, ohne dass es eine Erfüllung für diese Wünsche gibt. Ein Säugling hat Hunger: Nun, es gibt so etwas wie Nahrung.`, original: 'Creatures are not born with desires unless satisfaction for those desires exists. A baby feels hunger: well, there is such a thing as food.', translation: 'eigene Übersetzung', status: 'verbatim' },
        ],
      },
      {
        text: 'P2: Es gibt in uns ein Verlangen, das nichts in Zeit, Welt und Geschöpfen stillen kann.',
        support: `Das bezeugen Menschen aller Kulturen: Kohelets „Alles ist eitel", Augustinus' „unruhiges Herz", Pascals „unendlicher Abgrund", der nur durch Unendliches gefüllt werden kann, und selbst Bertrand Russells „Suche nach etwas jenseits dessen, was die Welt enthält". Die Glücksforschung kennt die „hedonische Anpassung": Jede erfüllte Erwartung verliert bald ihren Glanz.`,
      },
    ],
    conclusion: 'Also gibt es etwas jenseits von Zeit, Welt und Geschöpfen, das dieses Verlangen stillen kann – was Menschen „Gott" und „ewiges Leben mit Gott" nennen.',
  },
  voices: [
    {
      person: 'cs-lewis',
      role: 'als Urheber des modernen Arguments',
      text: `Lewis beschrieb seit seiner Kindheit wiederkehrende Erfahrungen einer stechenden, süßen Sehnsucht, die er „Joy" oder mit dem deutschen Wort „Sehnsucht" nannte – ausgelöst durch einen Spielzeuggarten seines Bruders, nordische Mythen, eine Landschaft. In „Surprised by Joy" (1955) erzählt er, wie er dieser Sehnsucht nachjagte und sie in keinem ihrer Auslöser fand, bis er erkannte, dass sie auf etwas jenseits aller Auslöser wies. In seiner Predigt „The Weight of Glory" (1941) nennt er die Schönheiten dieser Welt den „Duft einer Blume, die wir nicht gefunden haben, das Echo einer Melodie, die wir nicht gehört haben". Und er warnt: Wir sind „viel zu leicht zufrieden".`,
      sources: [
        { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Mere Christianity', ref: 'Buch III, Kap. 10', year: '1952', quote: `Wenn ich in mir ein Verlangen finde, das keine Erfahrung in dieser Welt stillen kann, ist die wahrscheinlichste Erklärung, dass ich für eine andere Welt gemacht bin.`, original: 'If I find in myself a desire which no experience in this world can satisfy, the most probable explanation is that I was made for another world.', translation: 'eigene Übersetzung', status: 'verbatim' },
        { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'The Weight of Glory (Predigt in St Mary the Virgin, Oxford)', year: '1941', quote: `Wir sind halbherzige Geschöpfe, die mit Alkohol, Sex und Ehrgeiz herumspielen, wenn uns unendliche Freude angeboten wird – wie ein unwissendes Kind, das weiter in einem Elendsviertel Sandkuchen backen will, weil es sich nicht vorstellen kann, was mit dem Angebot von Ferien am Meer gemeint ist. Wir sind viel zu leicht zufrieden.`, original: 'We are half-hearted creatures, fooling about with drink and sex and ambition when infinite joy is offered us, like an ignorant child who wants to go on making mud pies in a slum because he cannot imagine what is meant by the offer of a holiday at the sea. We are far too easily pleased.', translation: 'eigene Übersetzung', status: 'verbatim' },
      ],
    },
    {
      person: 'augustinus',
      role: 'als Zeuge des unruhigen Herzens',
      text: `Augustinus hat das Argument nicht formal aufgestellt, aber gelebt: In den Bekenntnissen beschreibt er, wie er Liebe, Ruhm, Wissen und Philosophie suchte und in keinem davon Ruhe fand. Seine Erkenntnis: Er hatte Gott außen gesucht, in den schönen Dingen, während Gott innen war – und die schönen Dinge hielten ihn fern, obwohl sie nur durch Gott existierten. Der berühmte erste Satz der Bekenntnisse fasst die Lehre zusammen: Das Herz ist auf Gott hin geschaffen und darum unruhig, bis es in ihm ruht.`,
      sources: [
        { kind: 'kirchenvater', author: 'Augustinus', work: 'Bekenntnisse', ref: 'X,27,38', status: 'paraphrase', quote: 'Du warst innen und ich draußen; dort suchte ich dich … Du warst bei mir, aber ich war nicht bei dir.' },
      ],
    },
    {
      person: 'pascal',
      role: 'als Analytiker der menschlichen Lage',
      text: `Pascal beobachtet, dass alle Menschen glücklich sein wollen, ohne Ausnahme – und dass niemand es durch irdische Mittel dauerhaft wird. Was schreit diese Gier und Ohnmacht uns zu, fragt er, wenn nicht, dass es einst im Menschen ein wahres Glück gab, von dem nur noch die leere Spur übrig ist? Diesen „unendlichen Abgrund" kann nur ein unendlicher und unveränderlicher Gegenstand füllen, „das heißt nur Gott selbst". Zugleich beschreibt Pascal, wie Menschen der Leere durch Zerstreuung (*divertissement*) ausweichen: Alles Unglück komme daher, dass man nicht ruhig in einem Zimmer bleiben könne.`,
      sources: [
        { kind: 'fachliteratur', author: 'Blaise Pascal', work: 'Pensées', ref: 'Lafuma 148 / Brunschvicg 425', quote: `… dieser unendliche Abgrund kann nur durch einen unendlichen und unveränderlichen Gegenstand gefüllt werden, das heißt nur durch Gott selbst.`, original: 'ce gouffre infini ne peut être rempli que par un objet infini et immuable, c\'est-à-dire que par Dieu même', translation: 'eigene Übersetzung', status: 'verbatim' },
      ],
    },
    {
      person: 'peter-kreeft',
      role: 'als Systematiker des Arguments',
      text: `Kreeft hat Lewis' Gedanken als formales Argument ausgearbeitet und gegen Einwände verteidigt. Entscheidend ist für ihn die Unterscheidung zwischen natürlichen, angeborenen Verlangen und künstlichen, erworbenen Wünschen: Nur für die ersten gilt, dass ihnen ein reales Objekt entspricht. Er betont, dass das Argument nicht beweist, dass jeder Mensch die Erfüllung erlangt – sondern dass es sie gibt. Und er gibt ehrlich zu: Wer die Sehnsucht in sich nicht wahrnimmt oder sie wegerklärt, wird das Argument nicht zwingend finden; es spricht zum Herzen ebenso wie zum Verstand.`,
      sources: [
        { kind: 'fachliteratur', author: 'Peter Kreeft & Ronald K. Tacelli', work: 'Handbook of Christian Apologetics', year: '1994', ref: 'Kap. 3 (Argument aus der Sehnsucht)', status: 'paraphrase', quote: 'Formalisierung und Verteidigung des Arguments aus der Sehnsucht.' },
        { kind: 'fachliteratur', author: 'Peter Kreeft', work: 'Heaven: The Heart\'s Deepest Longing', year: '1980', status: 'paraphrase', quote: 'Die Sehnsucht nach dem Himmel als Hinweis auf seine Wirklichkeit.' },
      ],
    },
    {
      person: 'thomas-aquin',
      role: 'als Metaphysiker der Natur',
      text: `Thomas formuliert einen Grundsatz, auf dem auch Lewis' Argument ruht: Ein natürliches Verlangen kann nicht vergeblich sein (*naturale desiderium non potest esse inane*), denn die Natur tut nichts umsonst. Der menschliche Geist verlangt von Natur aus, die Ursache von allem zu erkennen; dieses Verlangen kommt erst in der Schau Gottes zur Ruhe. Thomas leitet daraus ab, dass die letzte Glückseligkeit des Menschen nicht in diesem Leben, sondern in der Schau Gottes liegt.`,
      sources: [
        { kind: 'fachliteratur', author: 'Thomas von Aquin', work: 'Summa contra Gentiles', ref: 'III,48–51', status: 'paraphrase', quote: 'Ein natürliches Verlangen kann nicht vergeblich sein; das natürliche Verlangen des Geistes kommt erst in der Schau Gottes zur Ruhe.' },
      ],
    },
  ],
  dialog: [
    {
      id: 'wunsch-erzeugt-nichts',
      objection: `„Ein Wunsch beweist nicht, dass sein Gegenstand existiert. Ich wünsche mir ewige Jugend, ein Einhorn, Gerechtigkeit für alle – nichts davon existiert deshalb."`,
      objectionBy: 'John Beversluis / Bertrand Russell (sinngemäß)',
      targetsPremise: 1,
      answer: `Lewis behauptet das auch nicht. Er unterscheidet natürliche, angeborene Verlangen – Hunger, Durst, Gemeinschaft, Erkenntnis – von erworbenen Wünschen wie Einhörnern oder Ferraris. Für die natürlichen gilt ausnahmslos: Es gibt etwas, das sie stillt. Und er spricht nicht von einem Beweis, sondern von der „wahrscheinlichsten Erklärung". Das Argument ist ein Schluss auf die beste Erklärung, kein Wunschdenken.`,
      followUps: [
        {
          id: 'hunger-garantiert-nichts',
          objection: `„Auch natürliche Verlangen werden nicht immer erfüllt: Ein Verhungernder hat Hunger und stirbt trotzdem. Das Verlangen garantiert gar nichts."`,
          objectionBy: 'John Beversluis',
          answer: `Das hat Lewis selbst vorweggenommen: Der Hunger eines Menschen beweist nicht, dass *er* Brot bekommt – er könnte auf einem Floß im Atlantik verhungern. Aber er beweist, dass er zu einer Art gehört, die durch Essen lebt, und in einer Welt, in der es Essbares gibt. Ebenso beweist die Sehnsucht nicht, dass ich das Ziel erreiche, wohl aber, dass es ein solches Ziel gibt. Ob ich es finde, ist eine andere Frage – die Frage nach dem Weg.`,
          sources: [
            { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'The Weight of Glory', year: '1941', status: 'paraphrase', quote: 'Der Hunger beweist nicht, dass ein Mensch Brot bekommt, wohl aber, dass er zu einer Art gehört, die durch Essen lebt, und in einer Welt, in der es Nahrung gibt.' },
          ],
          followUps: [
            {
              id: 'woher-angeboren',
              objection: `„Woher weißt du, dass diese ‚Sehnsucht' angeboren und universell ist? Vielleicht ist sie ein Produkt der Romantik, der Kultur, der religiösen Erziehung."`,
              objectionBy: 'John Beversluis / Kulturrelativismus',
              targetsPremise: 2,
              answer: `Sie ist quer durch Zeiten und Kulturen bezeugt: Kohelet um 300 v. Chr. („Alles ist eitel"), Platons Eros, der nach dem Schönen selbst strebt, Augustinus, buddhistische Lehren vom unbefriedigenden Charakter alles Vergänglichen (*dukkha*), und Atheisten wie Bertrand Russell, der von einem „wilden Schmerz", einer Suche nach etwas „Verklärtem und Unendlichem" schrieb. Die moderne Glücksforschung beschreibt die „hedonische Anpassung": Keine Erfüllung hält lange vor. Das ist keine romantische Mode.`,
              sources: [
                { kind: 'gegner', author: 'Bertrand Russell', work: 'Brief an Constance Malleson („Colette O\'Niel")', year: '1916 (gedruckt in: The Autobiography of Bertrand Russell, Bd. II)', status: 'paraphrase', quote: 'Der Kern meines Wesens ist immer und ewig ein schrecklicher Schmerz – ein seltsamer, wilder Schmerz – eine Suche nach etwas jenseits dessen, was die Welt enthält, etwas Verklärtem und Unendlichem.', note: 'Wortlaut in Sekundärquellen leicht abweichend überliefert; Datum und Fundstelle vor wörtlicher Verwendung prüfen. Russell schloss daraus nicht auf Gott.' },
              ],
              followUps: [
                {
                  id: 'hedonische-tretmuehle',
                  objection: `„Die Evolution erklärt das perfekt: Ein Lebewesen, das nie ganz zufrieden ist, strebt weiter, sammelt mehr, pflanzt sich besser fort. Die ‚hedonische Tretmühle' ist ein Anpassungsvorteil, kein Hinweis auf Gott."`,
                  objectionBy: 'Evolutionäre Psychologie (z. B. Steven Pinker, sinngemäß)',
                  answer: `Die Tretmühle erklärt, warum wir immer *mehr vom Gleichen* wollen – mehr Nahrung, mehr Status. Sie erklärt kaum, warum Menschen sich nach etwas sehnen, das *kein* irdisches Gut ist: nach dem Schönen selbst, nach Ewigkeit, nach vollkommener Liebe. Und selbst wenn die Sehnsucht evolutionär entstanden ist, entscheidet das nicht über ihr Objekt: Auch der Hunger ist evolutionär entstanden, und es gibt Nahrung. Die Herkunft eines Verlangens sagt nichts darüber, ob sein Gegenstand existiert.`,
                  followUps: [
                    {
                      id: 'evolution-erzeugt-illusionen',
                      objection: `„Die Evolution erzeugt aber auch nützliche Illusionen – etwa die Neigung, überall Absichten zu sehen. Die Sehnsucht nach Gott könnte genau so eine nützliche Täuschung sein."`,
                      objectionBy: 'Pascal Boyer / Daniel Dennett (sinngemäß)',
                      answer: `Wenn die Evolution nur auf Nützlichkeit, nicht auf Wahrheit zielt, trifft dieser Verdacht nicht nur die Sehnsucht nach Gott, sondern auch unser Vertrauen in die Vernunft – und damit den Naturalismus selbst. Alvin Plantinga hat das als „evolutionäres Argument gegen den Naturalismus" ausgearbeitet. Man kann den Verdacht nicht selektiv nur gegen den Glauben richten. Wenn unsere Grundausstattung grundsätzlich verlässlich ist, gibt es keinen Grund, ausgerechnet die tiefste Sehnsucht für eine Täuschung zu halten.`,
                      detail: `Siehe „Unsere Vernunft ist ein Produkt der Evolution – ganz ohne Gott" und „Religion ist ein Nebenprodukt unserer kognitiven Mechanismen".`,
                      questionsBack: [`Wenn die Evolution uns Illusionen einpflanzt, weil sie nützlich sind – warum vertraust du dann den Überzeugungen, mit denen du den Glauben kritisierst?`],
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
      id: 'projektion',
      objection: `„Feuerbach hat es erklärt: Gott ist die Projektion unserer unerfüllten Wünsche. Die Sehnsucht ist nicht der Beweis für Gott, sondern die Quelle der Gottesvorstellung."`,
      objectionBy: 'Ludwig Feuerbach (Das Wesen des Christentums, 1841)',
      answer: `Das erklärt, wie Menschen auf die Idee Gottes kommen könnten, wenn es ihn nicht gibt – aber es zeigt nicht, dass es ihn nicht gibt. Bei jedem anderen natürlichen Verlangen schließen wir vom Verlangen auf die Existenz seines Gegenstands: Durst „projiziert" Wasser, und es gibt Wasser. Feuerbach setzt den Atheismus voraus und erklärt dann den Glauben; das ist kein Argument, sondern eine Deutung. Mit derselben Logik könnte man den Atheismus als Projektion des Wunsches deuten, niemandem Rechenschaft zu schulden.`,
      detail: `Siehe „Gott ist nur eine Projektion menschlicher Wünsche (Feuerbach)".`,
      followUps: [
        {
          id: 'freud-infantil',
          objection: `„Freud hat Feuerbach vertieft: Die Sehnsucht nach Gott ist die Sehnsucht des Kindes nach dem schützenden Vater – infantil und neurotisch."`,
          objectionBy: 'Sigmund Freud (Die Zukunft einer Illusion, 1927)',
          answer: `Freud selbst räumte ein, eine Illusion müsse kein Irrtum sein. Dass ein Mensch sich nach einem Vater sehnt, beweist nicht, dass es keinen himmlischen Vater gibt – so wenig wie die Sehnsucht nach Liebe beweist, dass es keine Liebe gibt. Und der Psychologe Paul Vitz hat gezeigt, dass man Freuds Methode ebenso auf den Atheismus anwenden kann. Psychologie erklärt Motive, nicht Wahrheit.`,
          detail: `Siehe „Religion ist infantile Wunscherfüllung und kollektive Neurose (Freud)".`,
        },
      ],
    },
    {
      id: 'transzendenz-ohne-gott',
      objection: `„Meditation und Achtsamkeit zeigen: Erfahrungen der Transzendenz, des Einsseins und des Friedens sind ganz ohne Gott möglich. Das Verlangen lässt sich hier und jetzt stillen."`,
      objectionBy: 'Sam Harris (Waking Up, 2014)',
      answer: `Meditation kann Ruhe, Klarheit und ein Gefühl der Weite schenken – das ist wertvoll, und christliche Mönche üben seit Jahrhunderten das stille Gebet. Aber die Sehnsucht, von der Augustinus und Lewis sprechen, ist nicht nur Sehnsucht nach innerer Ruhe, sondern nach einem *Du*: nach Liebe, nach Erkanntwerden, nach Heimat. Ein Bewusstseinszustand kann nicht lieben. Wenn die Meditation die Sehnsucht ganz stillte, warum kehrt sie dann immer wieder?`,
      followUps: [
        {
          id: 'buddhismus-begehren-ausloeschen',
          objection: `„Der Buddhismus geht noch weiter: Das Problem ist das Begehren selbst. Die Lösung ist, es zu überwinden, nicht, ihm ein himmlisches Objekt zu verschaffen."`,
          objectionBy: 'Buddhistische Lehre (Vier Edle Wahrheiten, sinngemäß)',
          answer: `Mit Respekt vor dieser alten Weisheit: Das Christentum sieht das Verlangen nicht als das Problem, sondern seine Fehlleitung. Augustinus spricht von der „Ordnung der Liebe": Wir lieben Endliches, als wäre es unendlich, und werden enttäuscht. Die Antwort ist nicht, weniger zu lieben, sondern das Richtige richtig zu lieben. Lewis: Unser Problem ist nicht, dass unsere Wünsche zu stark, sondern dass sie zu schwach sind – „wir sind viel zu leicht zufrieden".`,
          detail: `Siehe den Themenblock „Weitere Religionen" zum Buddhismus.`,
        },
        {
          id: 'mir-fehlt-nichts',
          objection: `„Ehrlich gesagt: Ich spüre diese Sehnsucht nicht. Ich bin zufrieden mit Familie, Arbeit und Freunden."`,
          objectionBy: 'zufriedener Säkularer',
          answer: `Das freut mich, und es ist gut, sich an diesen Gaben zu freuen – sie kommen nach christlichem Glauben von Gott. Pascal bemerkte allerdings, wie sehr unser Alltag aus Zerstreuung besteht, damit wir nicht über die großen Fragen nachdenken müssen: „Alles Unglück der Menschen kommt von einem Einzigen: dass sie nicht ruhig in einem Zimmer bleiben können." Vielleicht meldet sich die Sehnsucht in stillen Momenten – bei einer Musik, an einem Grab, unter dem Sternenhimmel. Das Argument zwingt niemanden; es lädt ein, ehrlich hinzuhören.`,
          sources: [
            { kind: 'fachliteratur', author: 'Blaise Pascal', work: 'Pensées', ref: 'Lafuma 136 / Brunschvicg 139', quote: `… dass alles Unglück der Menschen von einem Einzigen kommt: dass sie nicht ruhig in einem Zimmer bleiben können.`, original: 'tout le malheur des hommes vient d\'une seule chose, qui est de ne savoir pas demeurer en repos dans une chambre', translation: 'eigene Übersetzung', status: 'verbatim' },
          ],
          questionsBack: [`Hast du je bei einer Musik oder unter dem Sternenhimmel ein Verlangen gespürt, das du nicht benennen konntest?`],
        },
      ],
    },
    {
      id: 'sehnsucht-unbestimmt',
      objection: `„Selbst wenn es diese Sehnsucht gibt: Sie zielt auf ‚irgendetwas'. Warum sollte das der christliche Gott sein und nicht das Nirwana, Platons Idee des Guten oder einfach das Schöne?"`,
      objectionBy: 'John Beversluis (sinngemäß)',
      answer: `Zu Recht: Das Argument allein zeigt nur, dass es ein Ziel jenseits der Welt gibt, nicht, wer es ist. Es ist ein Baustein in einem größeren Gebäude. Aber es passt besonders gut zum christlichen Glauben, der sagt, dass dieses Ziel nicht ein unpersönlicher Zustand, sondern eine Person ist, die liebt – und dass sie sich in Jesus Christus gezeigt hat. Lewis selbst kam über die Sehnsucht zuerst zum Gottesglauben und erst dann, über historische Überlegungen, zu Christus.`,
      followUps: [
        {
          id: 'russell-fand-es-nicht',
          objection: `„Russell hatte diese Sehnsucht auch – und schloss daraus, dass sie nicht zu erfüllen ist. Warum ist dein Schluss besser als seiner?"`,
          objectionBy: 'Bertrand Russell (sinngemäß)',
          answer: `Russells Ehrlichkeit ist bewegend: Er bezeugt die Sehnsucht und sagt, er finde das Ersehnte nicht und halte es nicht für auffindbar – und doch sei die Liebe dazu sein Leben. Das zeigt, dass die Sehnsucht real ist, auch bei Atheisten. Sein Schluss, das Ersehnte gebe es nicht, ist aber eine Entscheidung, keine Entdeckung. Bei jedem anderen natürlichen Verlangen würden wir umgekehrt schließen. Und die Frage, ob jemand das Ziel gefunden hat, lässt sich prüfen: Christen sagen, es hat sich in Christus finden lassen.`,
          questionsBack: [`Wenn du bei jedem anderen tiefen Verlangen annimmst, dass es ein Gegenstück gibt – warum gerade hier nicht?`],
        },
      ],
    },
    {
      id: 'jenseitssehnsucht-lebensfeindlich',
      objection: `„Die Sehnsucht nach dem Jenseits ist lebensfeindlich. Nietzsche hatte recht: ‚Bleibt der Erde treu und glaubt denen nicht, welche euch von überirdischen Hoffnungen reden!'"`,
      objectionBy: 'Friedrich Nietzsche (Also sprach Zarathustra, Vorrede 3, 1883)',
      answer: `Das Christentum verachtet die Erde nicht: Gott hat sie „sehr gut" geschaffen, der Logos ist Fleisch geworden, und die christliche Hoffnung ist nicht die Flucht aus der Welt, sondern die leibliche Auferstehung und ein neuer Himmel und eine neue Erde. Lewis schrieb: „Ziele auf den Himmel, und du bekommst die Erde dazu; ziele auf die Erde, und du bekommst keines von beiden." Wer weiß, dass die Erde nicht alles ist, muss sie nicht zum Götzen machen – und kann sie gerade deshalb lieben.`,
      sources: [
        { kind: 'gegner', author: 'Friedrich Nietzsche', work: 'Also sprach Zarathustra', ref: 'Vorrede, Abschnitt 3', year: '1883', quote: `Ich beschwöre euch, meine Brüder, bleibt der Erde treu und glaubt Denen nicht, welche euch von überirdischen Hoffnungen reden!`, status: 'verbatim' },
        { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Mere Christianity', ref: 'Buch III, Kap. 10', year: '1952', quote: `Ziele auf den Himmel, und du bekommst die Erde „dazu"; ziele auf die Erde, und du bekommst keines von beiden.`, original: 'Aim at Heaven and you will get earth "thrown in": aim at earth and you will get neither.', translation: 'eigene Übersetzung', status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'jenseits-macht-passiv',
          objection: `„Die Geschichte zeigt aber: Jenseitsorientierung hat Christen passiv gemacht. Statt die Welt zu verbessern, haben sie auf den Himmel vertröstet."`,
          objectionBy: 'Karl Marx (Opium des Volkes) / Heinrich Heine (sinngemäß)',
          answer: `Lewis beobachtete das Gegenteil: Die Christen, die am meisten für diese Welt taten, waren gerade die, die am meisten an die kommende dachten – die Apostel, die das Römische Reich veränderten, die Erbauer der Krankenhäuser, die Gegner der Sklaverei. Die koptischen Mönche schufen Gemeinschaften der Fürsorge, Basilius baute in Caesarea eine ganze Stadt der Barmherzigkeit. Die Hoffnung auf das Ewige gibt dem Zeitlichen Gewicht.`,
          sources: [
            { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Mere Christianity', ref: 'Buch III, Kap. 10', year: '1952', quote: `Die Christen, die am meisten für die gegenwärtige Welt getan haben, waren gerade die, die am meisten an die nächste dachten.`, original: 'the Christians who did most for the present world were just those who thought most of the next', translation: 'eigene Übersetzung', status: 'verbatim' },
          ],
          detail: `Siehe „Religion ist das Opium des Volkes (Marx)" und den Themenblock „Christentum und Gesellschaft".`,
        },
      ],
    },
    {
      id: 'sublimierte-sexualitaet',
      objection: `„Die ‚Sehnsucht', von der Lewis spricht, ist sublimierte Sexualität. Das sagt die Psychoanalyse seit Freud."`,
      objectionBy: 'Freudianische Deutung',
      answer: `Lewis hat diese Deutung selbst geprüft: Er beschreibt, wie er die Sehnsucht in erotischen Erfahrungen suchte und feststellte, dass die erfüllte Begierde das Verlangen nicht stillte – die Sehnsucht blieb, unverändert. Augustinus erlebte dasselbe. Wenn die Sehnsucht nur verkleidete Sexualität wäre, müsste sexuelle Erfüllung sie beenden. Das tut sie offensichtlich nicht.`,
      sources: [
        { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'The Pilgrim\'s Regress, Vorwort zur 3. Auflage', year: '1943', status: 'paraphrase', quote: 'Lewis beschreibt die falschen Gegenstände, in denen er die Sehnsucht suchte – darunter das Erotische – und dass keiner sie stillte.' },
      ],
      followUps: [
        {
          id: 'psychoanalyse-unwiderlegbar',
          objection: `„Das ist eben die Abwehr: Dass du die sexuelle Wurzel nicht siehst, beweist gerade, dass du sie verdrängst."`,
          objectionBy: 'Freudianische Deutung',
          answer: `Eine Theorie, bei der jede Antwort – Zustimmung wie Widerspruch – als Bestätigung gilt, erklärt nichts. Karl Popper hat genau dies an der Psychoanalyse kritisiert: Sie ist so angelegt, dass nichts sie widerlegen kann – und darum ist sie in diesem Punkt keine Wissenschaft. Wer die Sehnsucht nach Gott mit einer solchen Theorie wegerklären will, hat sich gegen jede Prüfung immunisiert.`,
          sources: [
            { kind: 'fachliteratur', author: 'Karl R. Popper', work: 'Conjectures and Refutations (Vermutungen und Widerlegungen)', year: '1963', ref: 'Kap. 1', status: 'paraphrase', quote: 'Die Psychoanalyse kann jedes denkbare Verhalten erklären; gerade diese scheinbare Stärke ist ihre Schwäche als wissenschaftliche Theorie.' },
          ],
          questionsBack: [`Welche Beobachtung könnte deine Deutung widerlegen – oder bestätigt alles sie?`],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Gibt es ein angeborenes Verlangen, dem kein realer Gegenstand entspricht?`,
    `Was hat dich je so erfüllt, dass du nichts mehr wolltest – und wie lange hielt das an?`,
    `Warum bezeugen Menschen aller Zeiten – sogar Atheisten wie Russell – eine Sehnsucht nach etwas jenseits der Welt?`,
    `Wenn die Evolution uns nützliche Illusionen einpflanzt – wie entscheidest du, welche deiner Überzeugungen keine sind?`,
  ],
  avoid: [
    `Das Argument als zwingenden Beweis ausgeben. Lewis selbst sprach von der „wahrscheinlichsten Erklärung".`,
    `Behaupten, jeder Atheist sei innerlich unglücklich. Viele sind zufrieden; das Argument lädt ein, es verurteilt nicht.`,
    `Das Russell-Zitat als wörtlich geprüft ausgeben – die Überlieferung weicht leicht ab.`,
  ],
  concessions: [
    `Das Argument ist abhängig von der inneren Erfahrung; wer die Sehnsucht nicht wahrnimmt, wird es nicht zwingend finden.`,
    `Die Unterscheidung zwischen natürlichen und künstlichen Verlangen ist nicht immer scharf zu ziehen.`,
    `Das Argument zeigt allein nicht, dass das Ziel der Sehnsucht der christliche Gott ist.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Mere Christianity', ref: 'Buch III, Kap. 10', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'The Weight of Glory', year: '1941', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Surprised by Joy (Überrascht von Freude)', year: '1955', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Peter Kreeft', work: 'Heaven: The Heart\'s Deepest Longing', year: '1980', status: 'paraphrase' },
    { kind: 'gegner', author: 'John Beversluis', work: 'C. S. Lewis and the Search for Rational Religion', year: '2. Aufl. 2007', status: 'paraphrase' },
  ],
  difficulty: 1,
  tags: ['Sehnsucht', 'C. S. Lewis', 'Augustinus', 'Pascal', 'Argument aus dem Verlangen', 'Feuerbach'],
  related: [
    'religionskritik/projektion-feuerbach',
    'religionskritik/freud-wunscherfuellung',
    'sinn-existenz/kein-objektiver-sinn',
    'naturalismus/vernunft-durch-evolution',
    'kognitive-religionswissenschaft/religion-nebenprodukt',
    'sehnsucht-schoenheit-wette/schoenheit-evolutionaer',
    'tod-seele-auferstehung/ewiges-leben-langweilig',
  ],
};

export default claim;
