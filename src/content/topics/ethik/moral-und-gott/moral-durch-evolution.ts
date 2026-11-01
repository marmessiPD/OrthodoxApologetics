import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'moral-durch-evolution',
  title: `„Moral ist durch die Evolution entstanden."`,
  proponents: [
    { name: 'Richard Dawkins', role: 'Evolutionsbiologe, Oxford', work: 'The Selfish Gene (1976); The God Delusion (2006), Kap. 6' },
    { name: 'Frans de Waal', role: 'Primatologe, Emory University', work: 'Primates and Philosophers (2006); The Bonobo and the Atheist (2013)' },
    { name: 'Michael Shermer', role: 'Wissenschaftspublizist, Skeptic Magazine', work: 'The Science of Good and Evil (2004)' },
    { name: 'Michael Ruse', role: 'Wissenschaftsphilosoph, Florida State University', work: 'Taking Darwin Seriously (1986)' },
    { name: 'Steven Pinker', role: 'Kognitionspsychologe, Harvard', work: 'The Better Angels of Our Nature (2011)' },
  ],
  steelman: `Moral ist kein Geschenk vom Himmel, sondern ein Produkt der natürlichen Selektion. Verwandtenselektion erklärt, warum wir uns für unsere Familie aufopfern; reziproker Altruismus erklärt Fairness und Dankbarkeit; Gruppenselektion und Reputation erklären, warum wir Betrüger bestrafen und Großzügigkeit bewundern. Primatenforscher wie Frans de Waal zeigen bei Schimpansen und Bonobos Trost, Versöhnung und Gerechtigkeitssinn – die Bausteine der Moral sind älter als der Mensch. Spieltheoretische Modelle zeigen, wie Kooperation in Populationen stabil wird. Damit ist die Frage, woher Moral kommt, wissenschaftlich beantwortet: Gott ist als Erklärung überflüssig. Dass sich unsere Moralurteile „objektiv" anfühlen, ist selbst eine Anpassung – Gemeinschaften, deren Mitglieder ihre Normen für heilig hielten, kooperierten besser.`,
  biblical: {
    summary: `Die Bibel sagt nichts über die biologischen Mechanismen, durch die Gott die menschliche Natur geformt hat; die koptische Kirche hat darüber kein Dogma. Sie sagt aber, dass der Mensch nach Gottes Bild geschaffen ist (Gen 1,27) und das Gesetz Gottes in seinem Herzen trägt (Röm 2,15). Ein Christ kann daher ohne Weiteres zugestehen, dass unsere moralischen **Fähigkeiten** eine Naturgeschichte haben – so wie unser Auge oder unser Sprachvermögen. Die entscheidende Frage ist eine andere: Erklärt die Herkunft unserer moralischen Gefühle auch, ob sie **wahr** sind? Hier liegt der Unterschied: Im Theismus hat Gott dafür gesorgt, dass wir das Gute erkennen können; im Naturalismus gibt es dafür keine Garantie.`,
    detail: `**Ursprung vs. Geltung.** Dass ich Mathematik in der Schule gelernt habe, erklärt, wie ich zu meinen Rechenkenntnissen kam – es sagt nichts darüber, ob 7 × 8 = 56 wahr ist. Ebenso erklärt die Evolution (wenn sie es tut), wie wir zu moralischen Gefühlen kamen, aber nicht, ob es wahr ist, dass Grausamkeit böse ist. Aus der Herkunft einer Überzeugung auf ihre Falschheit oder Wahrheit zu schließen, ist der „genetische Fehlschluss".

**Gewissen und Natur.** Röm 2,14 sagt, die Heiden täten „von Natur" (*physei*) des Gesetzes Werk. Die Bibel erwartet also eine natürliche Verankerung der Moral im Menschen – aber als Gabe des Schöpfers, die auf ihn verweist, nicht als zufälliges Nebenprodukt.

**Mehr als Instinkt.** Die biblische Ethik fordert gerade das, was evolutionär „unsinnig" scheint: Feindesliebe (Mt 5,44), Fürsorge für Fremde, die nichts zurückgeben können (Lk 14,12–14), Martyrium. Die höchsten Formen der Moral sind keine Fortpflanzungsvorteile.`,
    sources: [
      { kind: 'bibel', work: 'Römer', ref: '2,14–15', quote: `…die Heiden, die das Gesetz nicht haben, doch von Natur tun des Gesetzes Werk … als die da beweisen, des Gesetzes Werk sei geschrieben in ihren Herzen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Matthäus', ref: '5,44', quote: `Liebet eure Feinde; segnet, die euch fluchen; tut wohl denen, die euch hassen; bittet für die, so euch beleidigen und verfolgen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Lukas', ref: '14,13–14', quote: `Wenn du ein Mahl machst, so lade die Armen, die Krüppel, die Lahmen, die Blinden, so bist du selig; denn sie haben's dir nicht zu vergelten.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die Väter sahen im Gewissen eine Gabe des Schöpfers, die jedem Menschen eingepflanzt ist. Johannes Chrysostomus erklärt in seinen *Säulenhomilien*, dass Gott dem Menschen von Anfang an das Wissen um Gut und Böse ins Gewissen gelegt hat, sodass niemand sich mit Unwissenheit entschuldigen kann. Die koptische Kirche lehrt, dass der Mensch als vernunftbegabte Seele nach Gottes Bild geschaffen ist; über die biologischen Wege, auf denen Gott die menschliche Natur geformt hat, gibt es kein Dogma. Entscheidend ist: Die Moral wurzelt im Bild Gottes und weist auf ihn zurück.`,
    sources: [
      { kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Homilien über die Statuen (De statuis)', ref: 'Hom. 12–13', year: '387', quote: `Gott hat dem Menschen bei der Erschaffung das Gewissen gegeben, das ihn über Gut und Böse belehrt; darum kann sich niemand mit Unwissenheit entschuldigen.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Die evolutionäre Moralpsychologie ist ein etabliertes Forschungsfeld. Weitgehend akzeptiert sind Verwandtenselektion (Hamilton), reziproker Altruismus (Trivers) und die Bedeutung von Reputation für Kooperation; Primatenstudien zeigen Vorläufer von Empathie und Fairness. Umstritten ist, wie weit diese Modelle reichen – etwa zur Erklärung von Altruismus gegenüber Fremden ohne Aussicht auf Gegenleistung – und vor allem, welche **philosophischen** Folgen sie haben. Hier sind sich Philosophen uneinig: Manche (Ruse, Joyce, Street) sehen darin ein „Entlarvungsargument" gegen objektive Moral, andere halten moralische Wahrheiten trotz evolutionärer Herkunft unserer Fähigkeiten für erkennbar.`,
    sources: [
      { kind: 'fachliteratur', author: 'Sharon Street', work: 'A Darwinian Dilemma for Realist Theories of Value', ref: 'Philosophical Studies 127, S. 109–166', year: '2006', quote: `Wenn die Evolution unsere Wertungen geformt hat, ohne dass objektive Werte dabei eine Rolle spielten, wäre eine Übereinstimmung unserer Urteile mit solchen Werten ein unerklärlicher Zufall.`, status: 'paraphrase', note: 'Street argumentiert gegen den Moralrealismus, nicht für den Theismus.' },
      { kind: 'gegner', author: 'Frans de Waal', work: 'Primates and Philosophers: How Morality Evolved', year: '2006', quote: `Die Bausteine der Moral – Empathie, Gegenseitigkeit, Konfliktlösung – finden sich bereits bei Menschenaffen.`, status: 'paraphrase' },
      { kind: 'gegner', author: 'Richard Dawkins', work: 'The God Delusion', ref: 'Kap. 6', year: '2006', quote: `Altruismus gegenüber Fremden sei eine „Fehlzündung" von Regeln, die in kleinen Verwandtengruppen entstanden – eine segensreiche, kostbare Fehlzündung.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Mag sein, dass die Evolution erklärt, wie wir zu moralischen *Gefühlen* gekommen sind – aber sie erklärt nicht, ob diese Gefühle *wahr* sind. Darwin selbst schrieb: Wären wir unter denselben Bedingungen wie Bienen entstanden, hielten wir es für eine heilige Pflicht, unsere Brüder zu töten. Wenn Moral nur ein Überlebenstrick ist, dann ist sie, wie Michael Ruse sagt, eine Illusion – und dann gibt es nichts, was Grausamkeit wirklich böse macht. Ich glaube, dass sie wirklich böse ist, und das spricht für einen Schöpfer, der uns befähigt hat, das Gute zu erkennen.`,
  keyPoints: [
    `**Ursprung ≠ Wahrheit:** Woher eine Überzeugung kommt, sagt nicht, ob sie wahr ist (genetischer Fehlschluss).`,
    `**Darwins Bienen:** Wäre der Mensch unter Bienenbedingungen entstanden, hielte er Brudermord für heilige Pflicht – evolutionäre Moral ist kontingent.`,
    `**Das Entlarvungsargument trifft den Naturalisten:** Wenn Selektion nur Überlebensnutzen „sieht", warum sollten unsere Moralurteile mit objektiven Werten übereinstimmen (Sharon Street)?`,
    `**Der Theist hat eine Antwort:** Gott kann evolutionäre Prozesse so gelenkt haben, dass wir das wirklich Gute erkennen – der Naturalist hat keine.`,
    `**Die höchste Moral passt nicht ins Schema:** Feindesliebe, Martyrium, Hilfe für Fremde ohne Gegenleistung sind keine Fortpflanzungsvorteile – Dawkins nennt sie „Fehlzündungen".`,
    `**Christen müssen die Biologie nicht fürchten:** Die Kirche hat kein Dogma über biologische Mechanismen; sie lehrt, dass die Moral im Bild Gottes wurzelt.`,
  ],
  voices: [
    {
      person: 'cs-lewis',
      role: 'als Philosoph des Moralgesetzes',
      text: `Lewis hat den Einwand „Moral ist nur Herdeninstinkt" bereits in *Mere Christianity* behandelt. Sein Bild: Wenn ich jemanden in Not höre, spüre ich zwei Instinkte – den Wunsch zu helfen und den Wunsch, mich in Sicherheit zu bringen. Aber in mir ist noch ein Drittes, das mir sagt, ich *solle* dem Hilfsimpuls folgen und den Fluchtimpuls unterdrücken. Dieses Dritte kann selbst kein Instinkt sein, so wie die Noten, die sagen, welche Taste des Klaviers man anschlagen soll, nicht selbst eine Taste sind.`,
      sources: [{ kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Mere Christianity', ref: 'Buch I, Kap. 2', year: '1952', status: 'paraphrase' }],
    },
    {
      person: 'plantinga',
      role: 'als Erkenntnistheoretiker',
      text: `Plantinga hat mit seinem „Evolutionären Argument gegen den Naturalismus" gezeigt: Wenn unsere kognitiven Fähigkeiten nur auf Überleben und nicht auf Wahrheit selektiert wurden, hat der Naturalist keinen Grund, ihnen zu vertrauen – auch nicht seinem Glauben an den Naturalismus. Für die Moral gilt dasselbe in verschärfter Form: Moralische Wahrheiten wirken nicht kausal auf das Überleben; also gibt es im Naturalismus keinen Mechanismus, der unsere Moralurteile auf sie ausrichtet. Im Theismus dagegen ist es zu erwarten, dass ein guter Gott uns befähigt, das Gute zu erkennen.`,
      sources: [{ kind: 'fachliteratur', author: 'Alvin Plantinga', work: 'Where the Conflict Really Lies: Science, Religion, and Naturalism', year: '2011', status: 'paraphrase' }],
    },
    {
      person: 'francis-collins',
      role: 'als Genetiker',
      text: `Collins, der die Evolutionstheorie als Biologe vertritt, hält sie dennoch nicht für eine ausreichende Erklärung des Moralgesetzes. Besonders der radikale Altruismus – Hilfe für Fremde oder sogar Feinde ohne jede Aussicht auf Gegenleistung – passe schlecht zu Verwandtenselektion und Gegenseitigkeit. Für Collins ist gerade diese selbstlose Liebe, wie sie etwa Mutter Teresa lebte, ein Hinweis auf eine Wirklichkeit jenseits der Biologie.`,
      sources: [{ kind: 'fachliteratur', author: 'Francis S. Collins', work: 'The Language of God', ref: 'Kap. 1', year: '2006', status: 'paraphrase' }],
    },
    {
      person: 'craig',
      role: 'als Religionsphilosoph',
      text: `Craig unterscheidet in Debatten scharf: Die evolutionäre Moralpsychologie mag erklären, warum wir moralische *Überzeugungen* haben. Wenn sie diese vollständig erklärt, ohne auf moralische *Wahrheit* zurückzugreifen, dann folgt im Naturalismus, dass unsere Überzeugungen nicht auf Wahrheit ausgerichtet sind. Das ist ein Argument gegen den Naturalismus, nicht gegen Gott: Denn der Theist kann sagen, Gott habe die Entwicklung so gelenkt, dass wir die objektiven Werte erkennen, die in seinem Wesen gründen.`,
      sources: [{ kind: 'fachliteratur', author: 'William Lane Craig', work: 'Reasonable Faith', ref: 'Kap. 2', year: '2008', status: 'paraphrase' }],
    },
    {
      person: 'chrysostomus',
      role: 'als Prediger des Gewissens',
      text: `In seinen Predigten nach dem Aufstand von Antiochia (387) spricht Chrysostomus vom natürlichen Gesetz: Gott hat dem Menschen das Gewissen als inneren Lehrer gegeben, lange bevor das geschriebene Gesetz kam. Deshalb wissen auch Menschen ohne Schrift, dass Mord, Ehebruch und Diebstahl böse sind. Für Chrysostomus ist diese Universalität kein Argument gegen Gott, sondern ein Zeugnis für ihn: Die gemeinsame moralische Erkenntnis aller Völker verweist auf einen gemeinsamen Gesetzgeber.`,
      sources: [{ kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Homilien über die Statuen', ref: 'Hom. 12–13', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'evolution-erklaert-moral',
      objection: `Verwandtenselektion, reziproker Altruismus, Reputation – die Evolution erklärt unsere Moral vollständig. Schimpansen trösten einander, Kapuzineraffen protestieren gegen ungerechte Bezahlung. Gott ist als Erklärung überflüssig.`,
      objectionBy: 'Frans de Waal',
      answer: `Ich bestreite nicht, dass unsere moralischen Fähigkeiten eine Naturgeschichte haben könnten – die Kirche hat darüber kein Dogma. Aber du erklärst, wie wir zu moralischen *Gefühlen* gekommen sind, nicht, ob sie *wahr* sind. Wenn die Evolution alles erklärt, ohne dass es auf moralische Wahrheit ankommt, dann haben wir im Naturalismus keinen Grund zu glauben, dass Grausamkeit wirklich böse ist. Das ist ein Problem für deinen Naturalismus, nicht für meinen Glauben.`,
      questionsBack: [
        `Erklärt die Evolution, warum wir glauben, dass Grausamkeit böse ist – oder auch, dass sie *wirklich* böse ist?`,
        `Wenn sich unsere Moral anders entwickelt hätte, wäre dann etwas anderes gut gewesen?`,
      ],
      followUps: [
        {
          id: 'wie-augen',
          objection: `Das ist wie beim Auge: Auch das Sehen ist evolutionär entstanden, und trotzdem sehen wir die Wirklichkeit. Warum sollte es bei der Moral anders sein?`,
          objectionBy: 'Michael Shermer',
          answer: `Weil die Gegenstände des Sehens – ein Löwe, ein Abgrund – kausal auf unser Überleben wirken; ein Auge, das sie falsch abbildet, wird aussortiert. Objektive moralische Wahrheiten (falls es sie gibt) wirken nicht so: Die *Wahrheit*, dass Grausamkeit böse ist, hat keinen Einfluss auf den Fortpflanzungserfolg. Selektiert wird nur, was nützt. Die Philosophin Sharon Street hat genau daraus ein Dilemma gegen den atheistischen Moralrealismus gemacht.`,
          followUps: [
            {
              id: 'kooperation-objektiv-nuetzlich',
              objection: `Kooperation ist aber objektiv nützlich. Also erfasst unsere Moral objektive Fakten – nämlich darüber, was Gemeinschaften gedeihen lässt.`,
              objectionBy: 'Michael Shermer',
              answer: `Dann ist „gut" nur ein anderes Wort für „fortpflanzungsfördernd unter unseren Bedingungen". Darwin hat die Konsequenz selbst gezogen: Wären Menschen unter denselben Bedingungen aufgezogen worden wie Honigbienen, so würden unverheiratete Frauen es für eine heilige Pflicht halten, ihre Brüder zu töten, und niemand würde einschreiten. Wenn das „gut" gewesen wäre, ist Moral nicht objektiv, sondern ein Zufall unserer Biologie.`,
              sources: [
                { kind: 'wissenschaft', author: 'Charles Darwin', work: 'The Descent of Man', ref: 'Kap. 3 (1. Aufl.) bzw. Kap. 4 (2. Aufl. 1874)', year: '1871', quote: `Wären, um einen extremen Fall zu nehmen, Menschen unter genau denselben Bedingungen aufgezogen worden wie Honigbienen, so kann kaum ein Zweifel bestehen, dass unsere unverheirateten Frauen es wie die Arbeitsbienen für eine heilige Pflicht halten würden, ihre Brüder zu töten, und Mütter würden danach streben, ihre fruchtbaren Töchter zu töten; und niemand würde daran denken einzuschreiten.`, original: 'If, for instance, to take an extreme case, men were reared under precisely the same conditions as hive-bees, there can hardly be a doubt that our unmarried females would, like the worker-bees, think it a sacred duty to kill their brothers, and mothers would strive to kill their fertile daughters; and no one would think of interfering.', translation: 'eigene Übersetzung', status: 'verbatim' },
              ],
              followUps: [
                {
                  id: 'darwin-nicht-so-gemeint',
                  objection: `Darwin wollte damit nur zeigen, dass das Gewissen sich an Lebensbedingungen anpasst. Daraus folgt nicht, dass Moral beliebig ist.`,
                  objectionBy: 'Michael Ruse',
                  answer: `Darwin hat tatsächlich gehofft, der Mensch werde durch Vernunft zu höheren moralischen Einsichten aufsteigen. Aber im Naturalismus fehlt jeder Grund, warum dieser Aufstieg zu *Wahrheit* führen sollte statt nur zu einer anderen Anpassung. Du selbst hast mit E. O. Wilson die Konsequenz gezogen: Ethik, wie wir sie verstehen, sei eine Illusion, die uns die Gene vorgaukeln, damit wir kooperieren. Das ist ehrlich – aber dann gibt es nichts, was die Bienenmoral falsch und unsere richtig macht.`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'erklaerung-reicht',
      objection: `Wir brauchen keine „objektiven Werte". Die Evolution erklärt, warum wir moralisch empfinden – mehr gibt es nicht zu erklären.`,
      objectionBy: 'Michael Shermer',
      answer: `Dann erklärt sie, warum du *fühlst*, dass du Schwachen helfen sollst – aber nicht, ob du es *sollst*. Aus einer Beschreibung, wie wir geworden sind, folgt keine Vorschrift, wie wir handeln sollen; das ist Humes Sein-Sollen-Problem. Wenn es nur Gefühle gibt, dann heißt „Hitler war böse" nur noch: „Ich empfinde Abscheu gegenüber Hitler." Die meisten Menschen – und die meisten Philosophen – halten das für zu wenig.`,
      followUps: [
        {
          id: 'sollen-nur-gefuehl',
          objection: `Dann ist „Sollen" eben nur ein Gefühl. Das ist unbequem, aber wahr.`,
          objectionBy: 'Michael Ruse',
          answer: `Wenn das wahr ist, dann ist auch dein Satz „Man soll die Wahrheit sagen, auch wenn sie unbequem ist" nur ein Gefühl. Und wenn jemand den Völkermord befürwortet, hast du nur ein anderes Gefühl als er – keinen Grund, der für alle gilt. Fast niemand lebt so; selbst der überzeugteste Naturalist empört sich über Unrecht, als wäre es wirklich Unrecht. Diese gelebte Überzeugung ist ein starker Hinweis, dass Moral mehr ist als ein Gefühl.`,
        },
      ],
    },
    {
      id: 'religion-auch-evolution',
      objection: `Mit derselben Logik ist auch dein Gottesglaube ein Produkt der Evolution – ein Nebenprodukt unserer Neigung, überall Absichten zu sehen. Dein Argument fällt auf dich zurück.`,
      objectionBy: 'Daniel Dennett',
      answer: `Das Argument fällt nur auf den Naturalisten zurück, nicht auf den Theisten. Wenn Gott existiert und die Evolution als Werkzeug gebraucht hat, dann ist es zu erwarten, dass er uns sowohl die Fähigkeit gegeben hat, ihn zu erkennen, als auch die, das Gute zu erkennen. Wenn aber nur blinde Selektion am Werk war, gibt es für keine unserer Überzeugungen eine Wahrheitsgarantie – auch nicht für den Naturalismus selbst. Das hat Plantinga gezeigt.`,
    },
    {
      id: 'fehlzuendung-altruismus',
      objection: `Selbstloser Altruismus gegenüber Fremden ist eine „Fehlzündung" von Regeln, die in kleinen Verwandtengruppen entstanden sind – eine segensreiche, kostbare Fehlzündung, aber eben eine Fehlzündung.`,
      objectionBy: 'Richard Dawkins',
      answer: `Merkst du, was das bedeutet? Dann sind die größten moralischen Taten der Menschheit – der barmherzige Samariter, Maximilian Kolbe, der für einen Fremden in den Hungerbunker ging, die koptischen Familien, die 2015 den Mördern ihrer Söhne öffentlich vergaben – biologische Irrtümer. Die christliche Sicht ist umgekehrt: Diese Liebe ist kein Fehler im System, sondern das Ziel, für das der Mensch geschaffen ist.`,
      followUps: [
        {
          id: 'gegen-gene-auflehnen',
          objection: `Wir Menschen können uns gegen die Tyrannei unserer egoistischen Gene auflehnen. Das ist die Würde des Menschen – ganz ohne Gott.`,
          objectionBy: 'Richard Dawkins',
          answer: `Ein schöner Satz – aber wer ist „wir", wenn wir nur Genmaschinen sind? Und nach welchem Maßstab wäre die Auflehnung *besser* als der Gehorsam gegenüber den Genen? Du setzt stillschweigend zwei Dinge voraus, die dein Weltbild nicht hergibt: eine Freiheit, die über die Natur hinausreicht, und einen Maßstab des Guten, der über dem Überlebensnutzen steht. Genau diese beiden Dinge begründet der christliche Glaube.`,
          sources: [
            { kind: 'gegner', author: 'Richard Dawkins', work: 'The Selfish Gene', ref: 'Kap. 11', year: '1976', quote: `Wir allein auf der Erde können uns gegen die Tyrannei der egoistischen Replikatoren auflehnen.`, original: 'We, alone on earth, can rebel against the tyranny of the selfish replicators.', translation: 'eigene Übersetzung', status: 'verbatim' },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wenn unsere Moral sich anders entwickelt hätte, wäre dann etwas anderes gut gewesen?`,
    `Warum sollten wir einer Moral vertrauen, die nur auf Überleben und nicht auf Wahrheit selektiert wurde?`,
    `Sind Feindesliebe und Martyrium für dich biologische Fehler – oder das Höchste, was ein Mensch tun kann?`,
    `Nach welchem Maßstab ist es *besser*, sich gegen die egoistischen Gene aufzulehnen, als ihnen zu folgen?`,
  ],
  avoid: [
    `Die Evolution pauschal leugnen, um das Argument zu retten. Das ist unnötig: Das moralische Argument funktioniert auch, wenn die Moralfähigkeit eine biologische Geschichte hat.`,
    `„Tiere haben keinerlei Vorstufen von Mitgefühl." Die Primatenforschung zeigt Ansätze – das bestreitet niemand ernsthaft.`,
    `Behaupten, Darwin habe Moral für beliebig gehalten. Darwin hoffte auf moralischen Fortschritt; der Punkt ist, dass sein Naturalismus diesen nicht begründen kann.`,
  ],
  concessions: [
    `Die evolutionäre Moralpsychologie erklärt manche Aspekte unseres moralischen Empfindens plausibel, etwa die besondere Fürsorge für Verwandte.`,
    `Unsere moralischen Gefühle sind fehlbar und kulturell geprägt; nicht jede Intuition ist ein sicherer Wegweiser.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Mere Christianity', ref: 'Buch I', year: '1952', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Alvin Plantinga', work: 'Where the Conflict Really Lies', year: '2011', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Sharon Street', work: 'A Darwinian Dilemma for Realist Theories of Value', year: '2006', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Mark D. Linville', work: '„The Moral Argument", in: W. L. Craig; J. P. Moreland (Hg.), The Blackwell Companion to Natural Theology', year: '2009', status: 'paraphrase', note: 'Behandelt ausführlich evolutionäre Entlarvungsargumente.' },
  ],
  difficulty: 2,
  tags: ['Evolution', 'Moralpsychologie', 'Darwin', 'Entlarvungsargument', 'Altruismus', 'Gewissen'],
  related: [
    'moral-und-gott/gut-ohne-gott',
    'evolutionaere-psychologie/altruismus-evolutionaer',
    'naturalismus/vernunft-durch-evolution',
    'kognitive-religionswissenschaft/religion-nebenprodukt',
  ],
};

export default claim;
