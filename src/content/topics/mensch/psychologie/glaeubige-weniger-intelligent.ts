import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'glaeubige-weniger-intelligent',
  title: `„Gläubige sind weniger intelligent."`,
  proponents: [
    { name: 'Miron Zuckerman, Jordan Silberman, Judith A. Hall', role: 'Psychologen, University of Rochester / Northeastern University', work: '„The Relation Between Intelligence and Religiosity: A Meta-Analysis", Personality and Social Psychology Review 17 (2013)' },
    { name: 'Richard Dawkins', role: 'Evolutionsbiologe, Oxford', work: 'The God Delusion (2006), Kap. 3' },
    { name: 'Will M. Gervais, Ara Norenzayan', role: 'Sozialpsychologen, University of British Columbia', work: '„Analytic Thinking Promotes Religious Disbelief", Science 336 (2012)' },
    { name: 'Sam Harris', role: 'Neurowissenschaftler und Autor', work: 'The End of Faith (2004); Letter to a Christian Nation (2006)' },
  ],
  steelman: `Die Daten sind eindeutig: Eine Metaanalyse von 63 Studien (Zuckerman u. a. 2013) fand in der großen Mehrheit einen negativen Zusammenhang zwischen Intelligenz und Religiosität, und eine Aktualisierung mit noch mehr Studien bestätigte ihn. Experimente zeigten, dass schon das Anregen analytischen Denkens – etwa durch das Betrachten von Rodins „Denker" – religiösen Glauben senkt (Gervais & Norenzayan 2012). In den Spitzen der Wissenschaft ist Unglaube die Regel: Nur rund 7 % der Mitglieder der US-amerikanischen National Academy of Sciences glaubten 1998 an einen persönlichen Gott. Wer besser denkt, braucht offenbar weniger Gott. Religion lebt von Intuition, Autorität und Gruppendruck, Wissenschaft von kritischem Denken – kein Wunder, dass die Klügsten sich abwenden.`,
  biblical: {
    summary: `Die Bibel selbst sagt nüchtern, dass unter den ersten Christen „nicht viel Weise nach dem Fleisch" waren (1 Kor 1,26) – Gott erwählt das Schwache, damit sich niemand rühme. Glaube ist also kein Intelligenztest, und Gottes Gnade gilt allen gleich. Zugleich gebietet die Schrift, Gott „mit ganzem Gemüte" (griech. *dianoia*, Verstand) zu lieben (Mt 22,37), die Schrift kritisch zu prüfen (Apg 17,11), sich durch Erneuerung des Denkens verwandeln zu lassen (Röm 12,2) und jederzeit Rechenschaft über die Hoffnung zu geben (1 Petr 3,15). Glaube und Denken sind biblisch Verbündete.`,
    sources: [
      { kind: 'bibel', work: '1. Korinther', ref: '1,26–27', quote: `Sehet an, liebe Brüder, eure Berufung: nicht viel Weise nach dem Fleisch, nicht viel Gewaltige, nicht viel Edle sind berufen. Sondern was töricht ist vor der Welt, das hat Gott erwählt, daß er die Weisen zu Schanden mache.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Matthäus', ref: '22,37', quote: `Du sollst lieben Gott, deinen HERRN, von ganzem Herzen, von ganzer Seele und von ganzem Gemüte.`, original: `ἐν ὅλῃ τῇ διανοίᾳ σου`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '17,11', quote: `Denn sie waren die edelsten unter denen zu Thessalonich; die nahmen das Wort auf ganz williglich und forschten täglich in der Schrift, ob sich's also verhielte.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptische Kirche ist die Erbin der **Katechetenschule von Alexandrien**, der ersten christlichen Hochschule, an der Pantänus, Klemens, Didymus der Blinde und andere Philosophie, Naturkunde und Theologie verbanden. Athanasius und Kyrill gehörten zu den schärfsten Denkern ihrer Zeit. Zugleich ehrt die Kirche ungebildete Heilige wie Antonius den Großen, der nach seiner Vita gelehrte Philosophen mit Klarheit und Weisheit beschämte. Christliche Weisheit ist nicht an Schulbildung gebunden – aber sie fürchtet das Denken nicht.`,
    sources: [
      { kind: 'koptisch', author: 'Tadros Yacoub Malaty', work: 'The School of Alexandria', status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Leben des Antonius (Vita Antonii)', ref: 'Kap. 72–80', status: 'paraphrase', quote: `Antonius, der keine Schulbildung hatte, führte Gespräche mit griechischen Philosophen und verwies sie darauf, dass ein gesunder Verstand der Buchstaben nicht bedarf und dass der Glaube durch seine Wirkung erwiesen wird.` },
    ],
  },
  opposingView: {
    summary: `Es gibt in der psychologischen Forschung einen **kleinen negativen Zusammenhang** zwischen gemessener Intelligenz und Religiosität. Zuckerman u. a. (2013) fanden ihn in 53 von 63 Studien; die durchschnittliche Korrelation liegt etwa in der Größenordnung von r ≈ –0,2 (stärker für religiöse Überzeugungen als für Praxis, stärker bei Erwachsenen als bei Schülern). Eine Korrelation dieser Größe erklärt nur wenige Prozent der Unterschiede. Ursachen sind umstritten (Nonkonformität, kognitiver Stil, Bildungsmilieus, „funktionale Äquivalente" wie Selbstwirksamkeit). Das berühmte Experiment von Gervais & Norenzayan ließ sich in großen Replikationen **nicht** bestätigen; kulturübergreifend erwies sich der Zusammenhang zwischen analytischem Denken und Unglauben als schwach und instabil.`,
    detail: `- **Größenordnung:** r ≈ –0,2 bedeutet etwa 4 % erklärte Varianz. Für den Einzelnen ist aus seiner Religiosität praktisch nichts über seine Intelligenz ableitbar.
- **Kontext:** Zuckerman u. a. erklären den Befund u. a. damit, dass intelligentere Menschen weniger zur Anpassung an die Mehrheit neigen – in religiösen Gesellschaften bedeutet Nonkonformität eher Unglauben.
- **Replikation:** Sanchez u. a. (PLoS ONE 2017) und das Social Sciences Replication Project (Camerer u. a., Nature Human Behaviour 2018) konnten den „Denker"-Effekt nicht reproduzieren. Gervais u. a. (Judgment and Decision Making 2018) fanden in einer Studie über 13 Länder nur einen schwachen, uneinheitlichen Zusammenhang.
- **Wissenschaftler:** Larson & Witham (Nature 1998): ca. 7 % der NAS-Mitglieder glaubten an einen persönlichen Gott. Pew Research (2009): Unter Mitgliedern der AAAS glaubten 33 % an Gott und weitere 18 % an eine höhere Macht. Ecklund (2010) fand bei Natur- und Sozialwissenschaftlern an US-Eliteuniversitäten, dass etwa die Hälfte sich einer religiösen Tradition zugehörig fühlt und dass Unglaube oft schon im nichtreligiösen Elternhaus wurzelt.
- **Nobelpreise:** Nach Baruch Shalev (100 Years of Nobel Prizes, 2003) gaben rund 65 % der Nobelpreisträger 1901–2000 eine christliche Religionszugehörigkeit an, rund 10 % bezeichneten sich als Atheisten, Agnostiker oder Freidenker. Die Kategorie „Zugehörigkeit" umfasst auch rein nominelle Bindung.`,
    sources: [
      { kind: 'wissenschaft', author: 'M. Zuckerman, J. Silberman, J. A. Hall', work: 'The relation between intelligence and religiosity: A meta-analysis and some proposed explanations', ref: 'Personality and Social Psychology Review 17 (2013), 325–354', year: '2013', status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'W. M. Gervais, A. Norenzayan', work: 'Analytic thinking promotes religious disbelief', ref: 'Science 336 (2012), 493–496', year: '2012', status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'C. F. Camerer, A. Dreber, F. Holzmeister u. a.', work: 'Evaluating the replicability of social science experiments in Nature and Science between 2010 and 2015', ref: 'Nature Human Behaviour 2 (2018), 637–644', year: '2018', status: 'paraphrase', note: 'Die Studie von Gervais & Norenzayan (2012) gehörte zu den nicht replizierten Experimenten.' },
      { kind: 'wissenschaft', author: 'W. M. Gervais, M. van Elk, D. Xygalatas u. a.', work: 'Analytic atheism: A cross-culturally weak and fickle phenomenon?', ref: 'Judgment and Decision Making 13 (2018), 268–274', year: '2018', status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'E. J. Larson, L. Witham', work: 'Leading scientists still reject God', ref: 'Nature 394 (1998), 313', year: '1998', status: 'paraphrase' },
      { kind: 'sonstiges', author: 'Pew Research Center', work: 'Scientists and Belief', year: '2009', status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Elaine Howard Ecklund', work: 'Science vs. Religion: What Scientists Really Think', year: '2010', status: 'paraphrase', note: 'Geprüft (Nov. 2026): Befragung von ca. 1.650 Wissenschaftlern an 21 US-Eliteuniversitäten; „nearly 50 percent" identifizieren sich mit einer religiösen Bezeichnung, knapp jeder Fünfte ist aktiv in einer Gemeinde.' },
      { kind: 'wissenschaft', author: 'Elaine Howard Ecklund, Christopher P. Scheitle', work: 'Religion among Academic Scientists: Distinctions, Disciplines, and Demographics', ref: 'Social Problems 54 (2007), 289–307', year: '2007', status: 'paraphrase', note: 'Beleg für den Befund, dass die geringere Religiosität von Wissenschaftlern stark mit religionsferner Herkunft zusammenhängt (vgl. Pressemitteilung University at Buffalo: „Scientists may not be very religious, but science may not be to blame").' },
      { kind: 'sonstiges', author: 'Baruch A. Shalev', work: '100 Years of Nobel Prizes', ref: 'Abschnitt zur Religionszugehörigkeit (je nach Auflage ca. S. 57–61)', year: '2003', status: 'paraphrase', note: 'Prozentwerte geprüft (Nov. 2026): 65,4 % christliche Zugehörigkeit bzw. Herkunft, 10,5 % Atheisten/Agnostiker/Freidenker, über 20 % jüdisch (1901–2000). Es handelt sich um Shalevs eigene Einordnung; Zugehörigkeit kann nominell sein – nicht als Glaubensbeweis überbewerten.' },
    ],
  },
  quickAnswer: `Es gibt in Studien eine **kleine** negative Korrelation zwischen IQ und Religiosität – das sollte man ehrlich zugeben. Aber sie ist schwach (sie erklärt nur wenige Prozent der Unterschiede), hängt stark von Kultur und Bildungsmilieu ab, und das bekannteste Experiment dazu ließ sich nicht wiederholen. Vor allem sagt sie nichts über die Wahrheit: Newton, Pascal, Maxwell, Mendel, Lemaître und Francis Collins waren gläubig. Ob ein Argument stimmt, entscheidet man am Argument, nicht am IQ seines Vertreters.`,
  keyPoints: [
    `**Ehrlich zugeben:** Die Metaanalyse von Zuckerman u. a. (2013) findet einen negativen Zusammenhang – aber er ist klein (etwa r ≈ –0,2, rund 4 % erklärte Varianz).`,
    `**Korrelation ist nicht Kausalität:** Bildungsmilieus, Nonkonformität und kultureller Kontext erklären einen Teil; in religiösen Gesellschaften ist Unglaube Nonkonformität.`,
    `**Das berühmte „Denker"-Experiment ist nicht replizierbar:** Große Replikationsprojekte (2017, 2018) fanden keinen Effekt.`,
    `**Die Geschichte widerspricht:** Die Begründer der modernen Naturwissenschaft (Kepler, Boyle, Newton, Faraday, Maxwell) waren überzeugte Christen; auch heute gibt es Spitzenforscher mit festem Glauben.`,
    `**Das ist ein Ad-hominem-Argument:** Selbst wenn Gläubige im Schnitt weniger intelligent wären, wäre der Glaube nicht falsch – Wahrheit entscheidet sich an Gründen.`,
    `**Expertise zählt doppelt:** Unter Religionsphilosophen, also den Fachleuten für die Gottesfrage, ist eine deutliche Mehrheit theistisch (PhilPapers-Umfrage 2009) – auch das beweist nichts, zeigt aber, dass Kopfzahlen in beide Richtungen ausgelegt werden können.`,
  ],
  voices: [
    {
      person: 'lennox',
      role: 'als Mathematiker (Oxford)',
      text: `John Lennox weist in seinen Debatten mit Dawkins und Hitchens darauf hin, dass die Frage nach Gott nicht durch Umfragen unter Wissenschaftlern entschieden wird. Er erinnert an die Gründerväter der modernen Wissenschaft, die gerade *weil* sie an einen vernünftigen Schöpfer glaubten, eine geordnete, erforschbare Natur erwarteten. Lennox kehrt den Vorwurf um: Nicht der Glaube, sondern der Naturalismus habe ein Problem, die Verlässlichkeit unseres Denkens zu begründen. Wer behauptet, Glaube sei für Dumme, müsse erklären, warum so viele der klügsten Köpfe der Geschichte gläubig waren.`,
      sources: [
        { kind: 'fachliteratur', author: 'John C. Lennox', work: 'God\'s Undertaker: Has Science Buried God? (dt. Hat die Wissenschaft Gott begraben?)', year: '2007/2009', status: 'paraphrase' },
      ],
    },
    {
      person: 'francis-collins',
      role: 'als Genetiker und Leiter des Humangenomprojekts',
      text: `Francis Collins war als junger Chemiker und Mediziner überzeugter Atheist. Erst als er am Krankenbett gläubiger Patienten merkte, dass er die Gründe für seinen Unglauben nie geprüft hatte, begann er zu lesen – vor allem C. S. Lewis' „Mere Christianity". Nach jahrelangem Nachdenken wurde er Christ. Collins betont, dass sein Glaube nicht das Ergebnis mangelnden Denkens war, sondern gründlicher Prüfung; er leitete später das Humangenomprojekt und die National Institutes of Health.`,
      sources: [
        { kind: 'fachliteratur', author: 'Francis S. Collins', work: 'The Language of God: A Scientist Presents Evidence for Belief', ref: 'Kap. 1', year: '2006', status: 'paraphrase' },
      ],
    },
    {
      person: 'pascal',
      role: 'als Mathematiker, Physiker und Philosoph',
      text: `Blaise Pascal, einer der genialsten Mathematiker des 17. Jahrhunderts, war ein tief gläubiger Christ. In seinen „Gedanken" warnt er vor zwei Extremen: die Vernunft auszuschließen und nur die Vernunft gelten zu lassen. Für Pascal ist es vernünftig zu erkennen, wo die Vernunft an ihre Grenzen kommt – ohne sie zu verachten. Glaube ist bei ihm keine Flucht vor dem Denken, sondern dessen Vollendung.`,
      sources: [
        { kind: 'fachliteratur', author: 'Blaise Pascal', work: 'Pensées (Gedanken)', ref: 'Fragment 183 (Lafuma) / 253 (Brunschvicg)', status: 'verbatim', quote: `Zwei Übertreibungen: die Vernunft ausschließen, nur die Vernunft zulassen.`, original: `Deux excès : exclure la raison, n'admettre que la raison.`, translation: 'eigene Übersetzung' },
      ],
    },
    {
      person: 'antonius',
      role: 'als ungebildeter Heiliger, der Philosophen beschämte',
      text: `Nach der Vita des Athanasius kamen griechische Philosophen zu Antonius, um den ungebildeten Mönch zu verspotten. Antonius fragte sie, was eher war: der Verstand oder die Buchstaben? Wer einen gesunden Verstand habe, brauche keine Buchstaben. Dann verwies er sie darauf, dass ihre Beweise den Menschen nicht verwandeln, der Glaube an Christus aber Menschen aus allen Völkern zur Tugend führt. Die koptische Tradition sieht darin keine Verachtung der Bildung, sondern die Erinnerung, dass Weisheit mehr ist als Schulwissen.`,
      sources: [
        { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Leben des Antonius (Vita Antonii)', ref: 'Kap. 72–80', status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'metaanalyse',
      objection: `Zuckerman und Kollegen haben 63 Studien ausgewertet: 53 zeigen einen negativen Zusammenhang zwischen Intelligenz und Religiosität. Die Daten sind klar.`,
      objectionBy: 'Miron Zuckerman',
      answer: `Ja, und ich gebe das zu. Aber der Zusammenhang ist klein: Er liegt in der Größenordnung von r ≈ –0,2 und erklärt damit nur wenige Prozent der Unterschiede. Die Autoren selbst führen ihn teilweise darauf zurück, dass Intelligentere weniger zur Anpassung an die Mehrheit neigen – in religiösen Gesellschaften heißt das: eher Unglaube. Und vor allem: Ob Gott existiert, hängt nicht vom IQ derer ab, die an ihn glauben. Das wäre ein klassischer Schluss gegen die Person statt gegen das Argument.`,
      questionsBack: [`Wie viel Prozent der Unterschiede erklärt eine Korrelation von –0,2?`, `Ändert der IQ eines Menschen etwas an der Gültigkeit seiner Argumente?`],
      followUps: [
        {
          id: 'nas-sieben-prozent',
          objection: `Gut, aber schau auf die Spitze: Nur 7 % der Mitglieder der National Academy of Sciences glauben an einen persönlichen Gott (Larson & Witham 1998).`,
          objectionBy: 'Richard Dawkins',
          answer: `Die Zahl ist real. Aber Spitzenakademien sind keine Zufallsstichprobe: Elaine Ecklund fand, dass viele ungläubige Wissenschaftler schon aus nichtreligiösen Elternhäusern stammen – ihr Unglaube ist also nicht einfach das Ergebnis ihrer Forschung. Breiter gefasst glaubten 2009 laut Pew 33 % der Mitglieder der größten US-Wissenschaftsvereinigung an Gott und 18 % an eine höhere Macht. Und Wissenschaftler sind Experten für Natur, nicht für Metaphysik.`,
          sources: [
            { kind: 'wissenschaft', author: 'E. J. Larson, L. Witham', work: 'Leading scientists still reject God', ref: 'Nature 394 (1998), 313', year: '1998', status: 'paraphrase' },
            { kind: 'fachliteratur', author: 'Elaine Howard Ecklund', work: 'Science vs. Religion: What Scientists Really Think', year: '2010', status: 'paraphrase' },
          ],
          followUps: [
            {
              id: 'naturforscher-brauchen-gott-nicht',
              objection: `Wer sich am intensivsten mit der Natur beschäftigt, braucht Gott am wenigsten. Das sagt doch etwas.`,
              objectionBy: 'Sam Harris',
              answer: `Es sagt vielleicht etwas über die Kultur heutiger Universitäten – historisch war es anders: Kepler, Boyle, Newton, Faraday, Maxwell, Mendel und Lemaître erforschten die Natur gerade, weil sie an einen vernünftigen Schöpfer glaubten. Und fragt man die Fachleute für die Gottesfrage selbst, die Religionsphilosophen, ist die Mehrheit theistisch – in der PhilPapers-Umfrage von 2009 rund sieben von zehn.`,
              sources: [
                { kind: 'wissenschaft', author: 'David Bourget, David J. Chalmers', work: 'What do philosophers believe?', ref: 'Philosophical Studies 170 (2014), 465–500', year: '2014', status: 'paraphrase', note: 'Auswertung der PhilPapers-Umfrage 2009; unter Religionsphilosophen war eine klare Mehrheit theistisch, unter Philosophen insgesamt eine Minderheit.' },
              ],
              followUps: [
                {
                  id: 'religionsphilosophen-befangen',
                  objection: `Religionsphilosophen sind befangen: Man wird Religionsphilosoph, weil man glaubt.`,
                  objectionBy: 'Daniel Dennett',
                  answer: `Genau – Auswahleffekte gibt es. Aber dann gilt das auch umgekehrt: Wer sich für eine naturwissenschaftliche Spitzenkarriere in einem säkularen Umfeld entscheidet, bringt oft schon eine Haltung mit. Kopfzahlen lassen sich also in beide Richtungen deuten und entscheiden nichts. Was zählt, sind die Argumente – darüber sollten wir reden.`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'denker-experiment',
      objection: `Gervais und Norenzayan haben 2012 in „Science" gezeigt: Schon das Betrachten von Rodins „Denker" senkt religiösen Glauben. Analytisches Denken macht ungläubig.`,
      objectionBy: 'Will M. Gervais',
      answer: `Dieses Experiment ist ein Lehrstück der Replikationskrise: Eine direkte Wiederholung (Sanchez u. a. 2017) und das große Replikationsprojekt der Sozialwissenschaften (Camerer u. a. 2018) fanden keinen Effekt. Gervais selbst hat in einer späteren Studie über 13 Länder festgestellt, dass der Zusammenhang zwischen analytischem Denken und Unglauben kulturübergreifend schwach und uneinheitlich ist.`,
      sources: [
        { kind: 'wissenschaft', author: 'C. F. Camerer u. a.', work: 'Evaluating the replicability of social science experiments in Nature and Science between 2010 and 2015', ref: 'Nature Human Behaviour 2 (2018), 637–644', year: '2018', status: 'paraphrase' },
      ],
      followUps: [
        {
          id: 'crt-korrelation',
          objection: `Aber der „Cognitive Reflection Test" korreliert trotzdem negativ mit Glauben – wer Denkfallen erkennt, glaubt weniger.`,
          objectionBy: 'Michael Shermer',
          answer: `In westlichen Studierendenstichproben gibt es eine kleine Korrelation, ja. Aber die Studie von Gervais und Kollegen (2018) zeigte, dass sie in vielen Ländern kaum oder gar nicht auftritt. Ein Effekt, der vom kulturellen Kontext abhängt, sagt mehr über Milieus als über die Wahrheit des Glaubens.`,
          sources: [
            { kind: 'wissenschaft', author: 'W. M. Gervais u. a.', work: 'Analytic atheism: A cross-culturally weak and fickle phenomenon?', ref: 'Judgment and Decision Making 13 (2018), 268–274', year: '2018', status: 'paraphrase' },
          ],
          followUps: [
            {
              id: 'intuition-denkfaulheit',
              objection: `Intuitiver Glaube ist eben Denkfaulheit.`,
              objectionBy: 'Michael Shermer',
              answer: `Viele Gläubige haben ihre Überzeugung jahrzehntelang analytisch geprüft – Plantinga, Swinburne und Lennox sind keine Denkfaulen. Intuition ist auch nicht irrational: Wissenschaftler verlassen sich ständig auf sie, etwa bei der Hypothesenbildung. Und in säkularen Milieus kann Unglaube genauso eine ungeprüfte Intuition sein. Entscheidend ist, ob jemand seine Überzeugung geprüft hat – egal welche.`,
            },
          ],
        },
      ],
    },
    {
      id: 'nobel-statistik-billig',
      objection: `Deine Nobelpreis-Statistik ist billig. Bei Shalev bedeutet „christlich" oft nur, dass jemand getauft wurde oder aus einer christlichen Kultur stammt.`,
      objectionBy: 'Richard Dawkins',
      answer: `Das gebe ich zu – Zugehörigkeit ist nicht gleich überzeugter Glaube, und ich benutze die Zahl nicht als Gottesbeweis. Sie widerlegt nur die Behauptung, Gläubige könnten keine Spitzenforscher sein. Stärker sind Einzelpersonen mit dokumentiertem, durchdachtem Glauben: James Clerk Maxwell, Gregor Mendel, Georges Lemaître, John Eccles oder Francis Collins.`,
      followUps: [
        {
          id: 'damals-glaubte-jeder',
          objection: `Die waren gläubig, weil zu ihrer Zeit jeder gläubig war.`,
          objectionBy: 'Richard Dawkins',
          answer: `Für Newton mag das teilweise gelten. Aber Lemaître, Eccles, Collins oder der Physiker John Polkinghorne lebten im 20. und 21. Jahrhundert, in säkularen Milieus. Collins war sogar Atheist und wurde als erwachsener Wissenschaftler nach gründlicher Prüfung Christ.`,
          followUps: [
            {
              id: 'collins-wasserfall',
              objection: `Collins ist ein Einzelfall, und seine Bekehrung beim Anblick eines gefrorenen Wasserfalls ist nicht gerade wissenschaftlich.`,
              objectionBy: 'Richard Dawkins',
              answer: `Der Wasserfall war der Moment der Entscheidung nach jahrelangem Lesen und Nachdenken, nicht ihr Grund. Eine Lebensentscheidung ist kein Laborexperiment – auch deine Entscheidung für den Atheismus war es nicht. Mein Punkt bleibt: Ein Spitzenforscher kam durch rationale Prüfung zum Glauben. Das widerlegt die Gleichung „Glaube = mangelndes Denken".`,
            },
          ],
        },
      ],
    },
    {
      id: 'glaube-heisst-nicht-denken',
      objection: `Glaube heißt per Definition, nicht nachzudenken – sonst bräuchte man ihn nicht.`,
      objectionBy: 'Sam Harris',
      answer: `Das ist nicht die biblische Bedeutung. Das griechische *pistis* bedeutet Vertrauen auf der Grundlage guter Gründe – so wie ich einem bewährten Freund oder einem verlässlichen Zeugen vertraue. Die Bibel gebietet, Gott mit dem Verstand zu lieben (Mt 22,37) und die Schrift zu prüfen (Apg 17,11). Die Katechetenschule von Alexandrien war die erste christliche Hochschule.`,
      detail: `Ausführlich: A8, ‚erkenntnistheorie/glaube-ohne-beweise'.`,
      followUps: [
        {
          id: 'selig-die-nicht-sehen',
          objection: `Und warum sagt Jesus dann: „Selig sind, die nicht sehen und doch glauben" (Joh 20,29)?`,
          objectionBy: 'Sam Harris',
          answer: `Weil Thomas das Zeugnis von zehn Augenzeugen hatte und trotzdem einen persönlichen Beweis verlangte. Selig sind die, die auf glaubwürdiges Zeugnis hin vertrauen, ohne selbst dabei gewesen zu sein – so funktioniert alles historische Wissen. Du glaubst auch, dass Caesar ermordet wurde, ohne es gesehen zu haben. Direkt danach sagt Johannes, er habe sein Evangelium geschrieben, „damit ihr glaubt" (Joh 20,31) – also mit Belegen.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wie groß ist der Zusammenhang wirklich – und wie viel erklärt eine Korrelation von –0,2?`,
    `Weißt du, dass das „Denker"-Experiment in großen Replikationsprojekten nicht bestätigt wurde?`,
    `Ändert der durchschnittliche IQ einer Gruppe etwas an der Gültigkeit eines Arguments?`,
    `Wie erklärst du Gläubige wie Newton, Maxwell, Lemaître oder Collins?`,
  ],
  avoid: [
    `Die Korrelation leugnen – sie ist in der Forschung gut belegt, nur klein.`,
    `„Die meisten Wissenschaftler sind gläubig." – Bei Spitzenwissenschaftlern ist das falsch.`,
    `Mit Nobelpreis-Prozenten als Gottesbeweis argumentieren – Zugehörigkeit ist oft nominell, und Wahrheit ist keine Abstimmung.`,
    `Mit Gegenstereotypen antworten („Atheisten sind arrogant") – das ist derselbe Fehler in umgekehrter Richtung.`,
  ],
  concessions: [
    `In der Forschung gibt es einen kleinen, aber recht stabilen negativen Zusammenhang zwischen gemessener Intelligenz und Religiosität.`,
    `Unter Mitgliedern von Spitzenakademien der Naturwissenschaften ist der Glaube an einen persönlichen Gott selten.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Elaine Howard Ecklund', work: 'Science vs. Religion: What Scientists Really Think', year: '2010', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'John C. Lennox', work: 'Can Science Explain Everything?', year: '2019', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Francis S. Collins', work: 'The Language of God', year: '2006', status: 'paraphrase' },
  ],
  difficulty: 1,
  tags: ['Intelligenz', 'IQ', 'Wissenschaftler', 'Replikationskrise', 'Nobelpreis'],
  related: [
    'erkenntnistheorie/glaube-ohne-beweise',
    'erkenntnistheorie/nur-wissenschaft-liefert-wissen',
    'kirchengeschichte-mythen/galilei',
    'christentum-gesellschaft/christentum-ohne-nutzen',
  ],
};

export default claim;
