import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'kinder-indoktrination',
  title: `„Kinder glauben nur, weil sie indoktriniert werden."`,
  proponents: [
    { name: 'Richard Dawkins', role: 'Evolutionsbiologe, Oxford', work: 'The God Delusion (2006), Kap. 9 „Childhood, Abuse and the Escape from Religion"' },
    { name: 'Nicholas Humphrey', role: 'Psychologe, London School of Economics', work: 'Amnesty-Vorlesung „What Shall We Tell the Children?" (Oxford 1997)' },
    { name: 'Christopher Hitchens', role: 'Publizist (1949–2011)', work: 'God Is Not Great (2007), Kap. 16 „Is Religion Child Abuse?"' },
    { name: 'Daniel Dennett', role: 'Philosoph, Tufts University (gest. 2024)', work: 'Breaking the Spell (2006)' },
  ],
  steelman: `Kinder sind von Natur aus leichtgläubig – evolutionär sinnvoll, denn wer den Eltern glaubt, dass der Fluss gefährlich ist, überlebt. Genau diese Leichtgläubigkeit nutzen Religionen aus. Dawkins sagt: Es gibt kein „christliches Kind" und kein „muslimisches Kind", nur Kinder christlicher oder muslimischer Eltern – ebenso wenig wie ein „marxistisches Kind". Die Religion eines Menschen lässt sich fast immer aus der seiner Eltern und seines Geburtslandes vorhersagen; wer in Saudi-Arabien geboren wird, wird Muslim, wer in Texas geboren wird, Baptist. Kinder werden mit Höllenangst eingeschüchtert, bevor sie kritisch denken können; Dawkins berichtet von einer Frau, die die Höllenangst ihrer Kindheit als schlimmer empfand als den sexuellen Missbrauch durch einen Priester. Nicholas Humphrey fordert, Kinder hätten ein Recht darauf, nicht mit schädlichen Ideen „eingenebelt" zu werden. Kein Erwachsener würde die Jungfrauengeburt glauben, wenn er erstmals mit dreißig davon hörte.`,
  biblical: {
    summary: `Die Bibel beauftragt Eltern ausdrücklich, ihren Glauben weiterzugeben: „Diese Worte … sollst du deinen Kindern einschärfen" (Dtn 6,6–7). Timotheus kannte die Schrift „von Kind auf" (2 Tim 3,15). Jesus segnet die Kinder: „Lasset die Kindlein zu mir kommen und wehret ihnen nicht" (Mk 10,14). Zugleich verbietet die Schrift, Kinder zu verängstigen oder zu verbittern: „Ihr Väter, reizet eure Kinder nicht zum Zorn" (Eph 6,4). Und der Glaube muss persönlich werden – die Samariter sagen: „Wir glauben nun hinfort nicht um deiner Rede willen; wir haben selber gehört und erkannt" (Joh 4,42).`,
    sources: [
      { kind: 'bibel', work: 'Deuteronomium', ref: '6,6–7', quote: `Und diese Worte, die ich dir heute gebiete, sollst du zu Herzen nehmen und sollst sie deinen Kindern einschärfen und davon reden, wenn du in deinem Hause sitzest oder auf dem Wege gehst, wenn du dich niederlegst oder aufstehst.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Epheser', ref: '6,4', quote: `Und ihr Väter, reizet eure Kinder nicht zum Zorn, sondern ziehet sie auf in der Zucht und Vermahnung zum Herrn.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Markus', ref: '10,14', quote: `Lasset die Kindlein zu mir kommen und wehret ihnen nicht; denn solcher ist das Reich Gottes.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '4,42', quote: `Wir glauben nun hinfort nicht um deiner Rede willen; wir haben selber gehört und erkannt, daß dieser ist wahrlich Christus, der Welt Heiland.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '2. Timotheus', ref: '3,15', quote: `und weil du von Kind auf die Heilige Schrift weißt, kann dich dieselbe unterweisen zur Seligkeit durch den Glauben an Christum Jesum.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche tauft Kinder und lässt sie an der Eucharistie teilnehmen – sie wachsen von Anfang an in die Gemeinschaft der Kirche hinein, wie ein Kind in seine Familie. Die große Erneuerung der koptischen Sonntagsschule im 20. Jahrhundert (der hl. Habib Girgis, später Papst Schenuda III.) zielte darauf, dass Kinder ihren Glauben verstehen, begründen und persönlich annehmen. Johannes Chrysostomus schrieb eine ganze Abhandlung über die rechte Kindererziehung, in der er Eltern mahnt, ihre Kinder mit Geduld, Vorbild und Liebe zu formen.`,
    detail: `- **Hl. Habib Girgis** (2013 heiliggesprochen) erneuerte die religiöse Bildung der Kopten und verfasste Lehrbücher über die Grundlagen des Glaubens.
- **Johannes Chrysostomus**, „Über eitlen Ruhm und die Kindererziehung": Die Seele des Kindes sei wie eine Stadt, deren Tore (Sinne) die Eltern behutsam behüten sollen; Erziehung geschieht durch Vorbild und Geschichten mehr als durch Strafe.
- Die Taufe von Kindern bedeutet für die koptische Kirche nicht, dass der Glaube „fertig" ist, sondern dass das Kind in einen Weg aufgenommen wird, den es mit wachsender Reife selbst gehen muss.`,
    sources: [
      { kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Über eitlen Ruhm und die Kindererziehung (De inani gloria et de educandis liberis)', status: 'paraphrase' },
      { kind: 'koptisch', author: 'Habib Girgis', work: 'Lehrbücher zu den Grundlagen des orthodoxen Glaubens', status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Dass Kinder die Weltanschauung ihrer Eltern häufig übernehmen, ist gut belegt – das gilt aber für religiöse **und** nicht-religiöse Eltern gleichermaßen (Bengtson 2013). Die Entwicklungspsychologie zeigt zudem, dass Kinder keine leeren Blätter sind: Sie neigen spontan zu zweckhaften Erklärungen der Natur (Kelemen 2004) und schreiben den Ursprung natürlicher Dinge teils von sich aus einem Schöpfer zu (Petrovich). Eine liebevolle religiöse Erziehung ist laut prospektiven Daten mit besseren Ergebnissen im jungen Erwachsenenalter verbunden (Chen & VanderWeele 2018); eine strenge, angstbesetzte Erziehung dagegen mit negativen Folgen und häufigerer Abkehr. Rechtlich schützen internationale Abkommen das Recht der Eltern, ihre Kinder gemäß ihren Überzeugungen zu erziehen.`,
    detail: `- **Bengtson, Putney & Harris (2013):** Langzeitstudie über mehrere Generationen; nicht-religiöse Eltern geben ihre Haltung ebenfalls in hohem Maß weiter; entscheidend für die Weitergabe des Glaubens ist eine warme, besonders väterliche Beziehung.
- **Kelemen (2004):** Kinder bevorzugen zweckhafte Erklärungen („Wolken sind zum Regnen da"), auch wenn ihre Eltern solche Erklärungen nicht geben.
- **Olivera Petrovich (Oxford):** Vorschulkinder in Großbritannien und Japan schrieben den Ursprung natürlicher Dinge eher Gott als Menschen zu – entgegen Piagets Annahme eines kindlichen „Artifizialismus".
- **Chen & VanderWeele (2018):** Religiöse Praxis in der Jugend ging mit höherer Lebenszufriedenheit, weniger Depression, weniger Drogenkonsum und weniger riskantem Sexualverhalten einher.
- **UN-Kinderrechtskonvention (1989), Art. 14:** Recht des Kindes auf Gedanken-, Gewissens- und Religionsfreiheit; die Vertragsstaaten achten das Recht und die Pflicht der Eltern, das Kind dabei entsprechend seiner Entwicklung zu leiten.
- **EMRK, 1. Zusatzprotokoll, Art. 2:** Der Staat achtet das Recht der Eltern, die Erziehung ihrer Kinder entsprechend ihren religiösen und weltanschaulichen Überzeugungen sicherzustellen.`,
    sources: [
      { kind: 'wissenschaft', author: 'Vern L. Bengtson, Norella M. Putney, Susan Harris', work: 'Families and Faith: How Religion Is Passed Down across Generations', year: '2013', status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'Deborah Kelemen', work: 'Are children „intuitive theists"? Reasoning about purpose and design in nature', ref: 'Psychological Science 15 (2004), 295–301', year: '2004', status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'Olivera Petrovich', work: 'Natural-Theological Understanding from Childhood to Adulthood (Reihe Essays in Developmental Psychology, Routledge)', year: '2018/2019', status: 'paraphrase', note: 'Monografie bestätigt (Prüfung Nov. 2026): Petrovich (Oxford, Experimentelle Psychologie) argumentiert anhand kulturvergleichender Studien, dass Kinder „intuitive natürliche Theologen" sind. E-Book/Hardcover 2018, Paperback 2019.' },
      { kind: 'wissenschaft', author: 'Y. Chen, T. J. VanderWeele', work: 'Associations of religious upbringing with subsequent health and well-being from adolescence to young adulthood: An outcome-wide analysis', ref: 'American Journal of Epidemiology 187 (2018), 2355–2364', year: '2018', status: 'paraphrase' },
      { kind: 'sonstiges', work: 'Übereinkommen über die Rechte des Kindes (UN-Kinderrechtskonvention)', ref: 'Art. 14', year: '1989', status: 'paraphrase' },
      { kind: 'sonstiges', work: 'Europäische Menschenrechtskonvention, 1. Zusatzprotokoll', ref: 'Art. 2', year: '1952', status: 'paraphrase' },
      { kind: 'gegner', author: 'Richard Dawkins', work: 'The God Delusion', ref: 'Kap. 9', year: '2006', status: 'paraphrase' },
    ],
  },
  quickAnswer: `Alle Eltern geben ihren Kindern eine Weltanschauung weiter – auch atheistische; Langzeitstudien zeigen, dass nicht-religiöse Eltern ihre Haltung ebenso erfolgreich vererben (Bengtson 2013). Indoktrination ist nicht, dass man Kindern seine Überzeugung erklärt, sondern dass man Fragen verbietet. Die Forschung zeigt außerdem: Kinder sind keine leeren Blätter, sondern „geborene Gläubige", die spontan Zweck und Urheberschaft in der Welt vermuten (Barrett, Kelemen). Und eine liebevolle religiöse Erziehung ist laut Harvard-Daten mit mehr Wohlbefinden und weniger Depression, Drogen und Risikoverhalten verbunden.`,
  keyPoints: [
    `**Neutralität gibt es nicht:** Auch eine säkulare Erziehung vermittelt eine Weltanschauung; nicht-religiöse Eltern geben ihre Haltung nachweislich erfolgreich weiter.`,
    `**Erziehung ≠ Indoktrination:** Indoktrination verbietet Fragen und verschweigt Alternativen; gute christliche Erziehung erklärt Gründe und lädt zur Prüfung ein (Apg 17,11; 1 Petr 3,15).`,
    `**Kinder glauben nicht nur, weil man es ihnen sagt:** Die Entwicklungspsychologie findet spontane Zweck- und Schöpfer-Intuitionen (Kelemen, Petrovich, Barrett).`,
    `**Positive Folgen:** Religiöse Erziehung ist im Durchschnitt mit besseren Lebensergebnissen verbunden (Chen & VanderWeele 2018).`,
    `**Glaube wird persönlich:** Viele Menschen kommen als Erwachsene und gegen ihre Herkunft zum Glauben; Kinder christlicher Eltern müssen den Glauben selbst annehmen (Joh 4,42).`,
    `**Ehrliches Zugeständnis:** Angst- und strafbasierte religiöse Erziehung schadet und widerspricht der Schrift (Eph 6,4).`,
  ],
  voices: [
    {
      person: 'justin-barrett',
      role: 'als Entwicklungs- und Religionspsychologe',
      text: `In „Born Believers" fasst Justin Barrett die Forschung zur kindlichen Religiosität zusammen: Kinder unterscheiden früh zwischen Personen und Dingen, vermuten hinter geordneten Strukturen einen Urheber, neigen zu zweckhaften Erklärungen und können sich leicht unsichtbare, allwissende Wesen vorstellen – teilweise leichter als begrenztes Wissen bei Menschen. Barrett schließt daraus, dass Kinder nicht erst durch Erziehung religiös werden, sondern eine natürliche Empfänglichkeit mitbringen, die Erziehung formt. Den Vorwurf der Indoktrination hält er für einseitig: Auch eine atheistische Erziehung muss gegen kindliche Intuitionen anarbeiten.`,
      sources: [
        { kind: 'fachliteratur', author: 'Justin L. Barrett', work: 'Born Believers: The Science of Children\'s Religious Belief', year: '2012', status: 'paraphrase' },
      ],
    },
    {
      person: 'vanderweele',
      role: 'als Epidemiologe (Harvard)',
      text: `Tyler VanderWeele und Ying Chen untersuchten tausende Jugendliche über viele Jahre. Wer in der Jugend regelmäßig Gottesdienste besuchte oder betete, hatte als junger Erwachsener im Durchschnitt eine höhere Lebenszufriedenheit, mehr Hoffnung und ehrenamtliches Engagement, weniger depressive Symptome, weniger Drogenkonsum und weniger riskantes Sexualverhalten – auch nach Kontrolle zahlreicher Familienmerkmale. VanderWeele folgert, dass religiöse Erziehung für viele Kinder eine bedeutende Ressource ist. Die Behauptung, sie sei grundsätzlich schädlich, passt nicht zu diesen Daten.`,
      sources: [
        { kind: 'wissenschaft', author: 'Y. Chen, T. J. VanderWeele', work: 'Associations of religious upbringing with subsequent health and well-being from adolescence to young adulthood', ref: 'American Journal of Epidemiology 187 (2018), 2355–2364', year: '2018', status: 'paraphrase' },
      ],
    },
    {
      person: 'chrysostomus',
      role: 'als Kirchenvater und Lehrer der Kindererziehung',
      text: `Johannes Chrysostomus widmete der Erziehung von Kindern eine eigene Schrift. Er vergleicht die Eltern mit Künstlern, die eine Statue formen: nicht mit Gewalt, sondern mit Sorgfalt, Geduld und Vorbild. Kinder sollen biblische Geschichten hören, die ihr Herz bilden, und vor allem sehen, dass ihre Eltern leben, was sie lehren. Chrysostomus warnt vor Härte und vor einer Erziehung, die nur auf Ansehen zielt. Sein Ideal ist ein Kind, das aus Liebe gut wird – das Gegenteil von Einschüchterung.`,
      sources: [
        { kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Über eitlen Ruhm und die Kindererziehung (De inani gloria et de educandis liberis)', status: 'paraphrase' },
      ],
    },
    {
      person: 'habib-girgis',
      role: 'als Erneuerer der koptischen Katechese',
      text: `Der hl. Habib Girgis erkannte zu Beginn des 20. Jahrhunderts, dass viele koptische Kinder ihren Glauben zwar übernommen, aber nicht verstanden hatten. Er gründete die Sonntagsschulbewegung und schrieb Lehrbücher, die den Glauben verständlich erklärten. Sein Ziel war nicht blinde Übernahme, sondern verstandener, persönlich angeeigneter Glaube – eine Bewegung, aus der eine ganze Generation koptischer Bischöfe und Gelehrter hervorging, darunter Papst Schenuda III.`,
      sources: [
        { kind: 'koptisch', author: 'Habib Girgis', work: 'Lehrbücher zu den Grundlagen des orthodoxen Glaubens', status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'kein-christliches-kind',
      objection: `Es gibt kein christliches Kind, nur ein Kind christlicher Eltern. Ein Kind „katholisch" oder „muslimisch" zu nennen, ist so absurd, wie es „marxistisch" oder „keynesianisch" zu nennen.`,
      objectionBy: 'Richard Dawkins',
      answer: `Kinder wachsen immer in eine Weltanschauung hinein – in Sprache, Werte, Feste, Fragen und Antworten. Auch eine säkulare Erziehung ist keine neutrale Leere, sondern vermittelt eine bestimmte Sicht der Welt. Für die koptische Kirche ist ein getauftes Kind Teil der Familie Gottes, so wie es Teil seiner leiblichen Familie ist – aber der Glaube muss mit dem Kind wachsen und persönlich werden. Das sagt schon die Bibel: „Wir glauben nun nicht mehr um deiner Rede willen; wir haben selber gehört und erkannt" (Joh 4,42).`,
      questionsBack: [`Welche Erziehung wäre völlig weltanschauungsneutral – und wie sähe sie konkret aus?`],
      followUps: [
        {
          id: 'wie-nicht-was',
          objection: `Man sollte Kindern beibringen, wie man denkt – nicht was man denkt.`,
          objectionBy: 'Richard Dawkins',
          answer: `Einverstanden, das ist ein gutes Ziel – und gute christliche Erziehung tut beides. Aber „wie man denkt" ist nie wertneutral; es enthält Vorstellungen darüber, was zählt und was wahr ist. Auch du vermittelst Kindern, *was* sie denken sollen: Dein Kinderbuch „The Magic of Reality" und dein veröffentlichter Brief an deine Tochter erklären Kindern, woran sie glauben sollen und woran nicht. Das ist legitim – aber dann ist es auch für christliche Eltern legitim.`,
          followUps: [
            {
              id: 'schaedliche-ideen',
              objection: `Eltern haben kein Recht, ihren Kindern schädliche Ideen einzupflanzen – so wenig, wie sie ihnen die Zähne ausschlagen dürfen.`,
              objectionBy: 'Nicholas Humphrey',
              answer: `Das setzt voraus, dass religiöse Erziehung schädlich ist – die Daten sagen im Durchschnitt das Gegenteil. Und wer soll entscheiden, welche Weltanschauungen Kindern „schaden"? Der Staat? Die Geschichte kennt Staaten, die Kindern den Glauben austreiben wollten, etwa in der Sowjetunion – mit verheerenden Folgen. Deshalb schützen die UN-Kinderrechtskonvention und die Europäische Menschenrechtskonvention ausdrücklich das Recht der Eltern, ihre Kinder gemäß ihren Überzeugungen zu erziehen.`,
              followUps: [
                {
                  id: 'kindertaufe-ohne-zustimmung',
                  objection: `Nehmen wir die Kindertaufe: Da wird über den Kopf eines Säuglings hinweg eine religiöse Zugehörigkeit festgelegt, der er nie zugestimmt hat. Warum nicht warten, bis er selbst entscheiden kann?`,
                  objectionBy: 'Richard Dawkins',
                  answer: `Eltern entscheiden ständig für ihre Kinder, bevor diese zustimmen können: Name, Sprache, Staatsangehörigkeit, Impfungen, Schule. Keiner dieser Schritte nimmt dem Kind die spätere Freiheit, und die Taufe tut es auch nicht. Für die koptische Kirche ist sie ein Geschenk – so wie ein Kind nicht gefragt wird, ob es in eine Familie geboren werden will, wird es in die Familie Gottes aufgenommen. Ob es dieses Geschenk als Erwachsener annimmt, bleibt seine freie Antwort.`,
                  detail: `Die Kirche tauft Kinder seit frühester Zeit: Das Neue Testament berichtet von der Taufe ganzer „Häuser" (Apg 16,15.33; 1 Kor 1,16), und Petrus sagt, die Verheißung gelte „euch und euren Kindern" (Apg 2,39). Origenes bezeugt die Kindertaufe als apostolische Überlieferung (Römerbriefkommentar V,9). Theologisch steht dahinter: Das Heil ist zuerst Gottes Gabe, nicht menschliche Leistung – gerade das Kind, das noch nichts leisten kann, zeigt das.

Die Zustimmung des Kindes ist nicht ausgeschaltet, sondern aufgeschoben: Orthodoxer Glaube ist Synergie, und jedes getaufte Kind muss den Glauben persönlich ergreifen. Der Einwand verwechselt eine Zugehörigkeit, die man später bejahen oder ablehnen kann, mit einem Zwang.

Siehe auch ‚sakramente/taufe-nur-symbol-keine-kindertaufe'.`,
                  sources: [
                    { kind: 'bibel', work: 'Apostelgeschichte', ref: '2,38–39', status: 'paraphrase', quote: `Tut Buße und lasse sich ein jeglicher taufen … denn euer und eurer Kinder ist diese Verheißung.` },
                    { kind: 'kirchenvater', author: 'Origenes', work: 'Kommentar zum Römerbrief', ref: 'V,9', status: 'paraphrase', quote: `Die Kirche hat von den Aposteln die Überlieferung empfangen, auch den kleinen Kindern die Taufe zu spenden.`, note: 'Erhalten in der lateinischen Übersetzung Rufins.' },
                  ],
                  questionsBack: [`Entscheidest du nicht auch für dein Kind, in welcher Sprache und mit welchen Werten es aufwächst – ohne es zu fragen?`],
                  followUps: [
                    {
                      id: 'sozialer-druck-gemeinschaft',
                      objection: `Theoretisch ist es freiwillig. Praktisch verliert in engen religiösen Gemeinschaften, wer austritt, Familie, Freunde und Heimat. Das ist kein Geschenk, das ist eine Falle.`,
                      objectionBy: 'Michael Shermer',
                      answer: `Das ist ein ernster Punkt, und ich gebe zu: Sozialer Druck existiert, auch unter Christen, und er ist falsch, wenn er Menschen zum Bleiben zwingt. Die Kirche wendet keine Gewalt an und bestraft niemanden, der geht; Christus ließ den reichen Jüngling gehen und blickte ihn dabei liebevoll an (Mk 10,21–22). Für eine koptische Familie heißt das: Liebe bleibt bestehen, auch wenn ein Kind einen anderen Weg geht. Genau daran misst sich, ob ein Glaube frei ist.`,
                      detail: `Ehrliche Unterscheidung:
- **Zwang** (Strafe, Gewalt, Drohung, Gesetze gegen Glaubenswechsel) widerspricht dem Evangelium. Kopten wissen aus eigener Geschichte, was es heißt, unter Druck zur Aufgabe des Glaubens gedrängt zu werden – sie haben deshalb allen Grund, die Freiheit des Gewissens hochzuhalten.
- **Bindung** (Liebe, Gemeinschaft, gemeinsame Feste) ist kein Zwang, auch wenn ihr Verlust schmerzt. Das gilt für jede enge Gemeinschaft, auch für politische oder weltanschauliche.

Pastoral: Eltern, deren Kind sich vom Glauben abwendet, sollen nach dem Vorbild des Vaters im Gleichnis (Lk 15,11–32) handeln – nicht festhalten, sondern warten, beten und die Tür offen halten.`,
                      sources: [
                        { kind: 'bibel', work: 'Markus', ref: '10,21–22', status: 'paraphrase', quote: `Jesus sah ihn an und liebte ihn … Er aber ging traurig davon.` },
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
      id: 'geografie',
      objection: `Wärst du in Saudi-Arabien geboren, wärst du Muslim. Dein Glaube ist eine Frage der Geografie, nicht der Wahrheit.`,
      objectionBy: 'Richard Dawkins',
      answer: `Das ist ein genetischer Fehlschluss: Woher eine Überzeugung stammt, sagt nichts über ihre Wahrheit. Wärst du im Mittelalter geboren, wärst du wahrscheinlich kein Atheist – macht das deinen Atheismus falsch? Außerdem ist die Behauptung nur halb richtig: Viele Menschen wechseln ihre Religion gegen ihre Herkunft, oft unter großen Opfern – frühere Muslime wie Nabeel Qureshi oder die vielen Christen im Iran, der frühere Atheist C. S. Lewis.`,
      detail: `Ausführlich: A5, ‚pluralismus/nur-christ-wegen-geburt'.`,
      followUps: [
        {
          id: 'mehrheit-bleibt',
          objection: `Die Ausnahmen bestätigen nur die Regel: Die große Mehrheit bleibt in der Religion ihrer Eltern.`,
          objectionBy: 'Michael Shermer',
          answer: `Das gilt genauso für Sprache, politische Überzeugungen und die nicht-religiöse Haltung säkularer Familien. Es zeigt, dass Familie prägt – nicht, welche Prägung wahr ist. Die entscheidende Frage ist, ob ein Mensch seinen Glauben als Erwachsener geprüft hat. Das gilt für jeden – auch für den, der als Atheist aufgewachsen ist.`,
          followUps: [
            {
              id: 'hast-du-geprueft',
              objection: `Und? Hast du deinen Glauben geprüft?`,
              objectionBy: 'Michael Shermer',
              answer: `Ja – und gern zeige ich dir meine Gründe: warum es überhaupt ein Universum mit einem Anfang gibt, warum es für Leben feinabgestimmt ist, warum wir objektive moralische Verpflichtungen kennen und warum die historischen Fakten um Jesu Tod und Auferstehung am besten durch die Auferstehung erklärt werden. Darüber können wir sprechen – ganz unabhängig davon, wo ich geboren bin.`,
              followUps: [
                {
                  id: 'motiviertes-denken',
                  objection: `Das glaubst du nur. Das Gehirn bildet zuerst Überzeugungen und sucht dann die passenden Gründe – ich nenne das „belief-dependent realism". Deine Argumente sind die nachträgliche Verteidigung deines Kinderglaubens.`,
                  objectionBy: 'Michael Shermer',
                  answer: `Motiviertes Denken gibt es – bei allen Menschen. Deshalb trifft deine These dich genauso: Auch dein Skeptizismus könnte die nachträgliche Verteidigung einer früheren Prägung sein. Wenn die These stimmt, entwertet sie also keine Seite, sondern zwingt beide, die Argumente selbst zu prüfen. Und mein Glaube ist überprüfbar angelegt: Paulus sagt, wenn Christus nicht auferstanden ist, ist der Glaube nichtig (1 Kor 15,17). Ich nenne dir gern, was meine Meinung ändern würde.`,
                  detail: `Shermer beschreibt in „The Believing Brain" (2011), wie das Gehirn Muster und Akteure erkennt und dann Erklärungen nachliefert. Das ist ein brauchbares Modell menschlicher Fehleranfälligkeit – aber kein Wahrheitskriterium. Es gilt symmetrisch.

Der Psychologe Paul Vitz hat das Gegenstück untersucht: Er zeigt an Biografien prominenter Atheisten (Nietzsche, Freud, Russell, Sartre u. a.) auffällig häufig einen abwesenden, schwachen oder verstorbenen Vater und schlägt eine psychologische Erklärung des Unglaubens vor. Vitz selbst betont, dass auch diese Erklärung nichts über die Wahrheit sagt – sie zeigt nur, dass sich psychologische Ableitungen in beide Richtungen konstruieren lassen. Darum: Weg von der Psychologie, hin zu den Gründen.

Ein guter Test für eigenes motiviertes Denken: Kann ich die stärkste Fassung der Gegenposition so wiedergeben, dass der Gegner zustimmt? Und kann ich benennen, welcher Befund mich umstimmen würde (etwa der Nachweis, dass Jesu Leichnam im Grab blieb)?`,
                  voices: [
                    {
                      person: 'vitz',
                      role: 'als Psychologe',
                      text: `Paul Vitz argumentiert in „Faith of the Fatherless", dass psychologische Erklärungen des Glaubens, wie Freud sie gab, mit gleichem Recht auf den Unglauben angewendet werden können: Wer Gott als Projektion eines Vaterwunsches deutet, muss sich fragen lassen, ob nicht auch die Ablehnung Gottes eine Projektion enttäuschter Vatererfahrungen sein könnte. Sein Punkt ist nicht, Atheisten zu pathologisieren, sondern zu zeigen, dass Psychologie die Wahrheitsfrage nicht entscheiden kann.`,
                      sources: [
                        { kind: 'fachliteratur', author: 'Paul C. Vitz', work: 'Faith of the Fatherless: The Psychology of Atheism', year: '1999', status: 'paraphrase' },
                      ],
                    },
                  ],
                  sources: [
                    { kind: 'gegner', author: 'Michael Shermer', work: 'The Believing Brain: From Ghosts and Gods to Politics and Conspiracies', year: '2011', status: 'paraphrase' },
                    { kind: 'bibel', work: '1. Korinther', ref: '15,17', quote: `Ist Christus aber nicht auferstanden, so ist euer Glaube eitel, so seid ihr noch in euren Sünden.`, translation: 'Luther 1912', status: 'verbatim' },
                  ],
                  questionsBack: [`Welcher Befund würde dich davon überzeugen, dass es Gott gibt – und welcher mich vom Gegenteil? Wollen wir über diese Befunde reden?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'hoellenangst',
      objection: `Kindern mit der Hölle zu drohen, ist seelischer Missbrauch. Dawkins berichtet von einer Frau, für die die Höllenangst ihrer Kindheit schlimmer war als der sexuelle Missbrauch durch einen Priester.`,
      objectionBy: 'Christopher Hitchens',
      answer: `Kinder mit Angst gefügig zu machen, ist falsch – das sagt die Bibel selbst: „Reizet eure Kinder nicht zum Zorn" (Eph 6,4), und „Furcht ist nicht in der Liebe" (1 Joh 4,18). Die koptische Kirche stellt Kindern vor allem Christus vor, der die Kinder segnet, die Heiligen und die Freude der Liturgie. Aber der Vergleich mit sexuellem Missbrauch ist unangemessen: Er stützt sich auf einen einzelnen Brief und läuft Gefahr, das Leid von Missbrauchsopfern zu verharmlosen.`,
      followUps: [
        {
          id: 'nur-faelle',
          objection: `Dawkins sagt doch nur, dass es Fälle gibt, in denen religiöse Erziehung mehr schadet als anderes.`,
          objectionBy: 'Richard Dawkins',
          answer: `Dass es schädliche Einzelfälle gibt, bestreite ich nicht – dann ist das aber eine Kritik an schlechter Erziehung, nicht an religiöser Erziehung als solcher. Im Durchschnitt zeigen die großen Langzeitstudien positive Zusammenhänge zwischen religiöser Erziehung und dem Wohlbefinden junger Erwachsener (Chen & VanderWeele 2018).`,
        },
      ],
    },
    {
      id: 'geborene-glaeubige-wehrlos',
      objection: `Gerade weil Kinder „geborene Gläubige" sind, wie Barrett und Kelemen zeigen, sind sie der religiösen Indoktrination wehrlos ausgeliefert. Sie glauben alles.`,
      objectionBy: 'Paul Bloom',
      answer: `Kinder glauben auch spontan, dass andere Menschen Gedanken haben und dass Gegenstände weiterexistieren, wenn man sie nicht sieht – natürliche Fähigkeiten sind keine Defekte. Wichtiger: Die Forschung zeigt, dass Kinder Gott als Schöpfer teilweise von sich aus vermuten, ohne dass man es ihnen beibringt (Petrovich). Dann ist die These, Kinder glaubten *nur* wegen Indoktrination, falsch – ihr Glaube hat auch eine natürliche Wurzel.`,
      followUps: [
        {
          id: 'weihnachtsmann',
          objection: `Kinder glauben auch an den Weihnachtsmann – und geben ihn auf, wenn sie erwachsen werden.`,
          objectionBy: 'Paul Bloom',
          answer: `Der Unterschied ist aufschlussreich: Den Glauben an den Weihnachtsmann geben praktisch alle auf, sobald sie die Belege kennen. Den Glauben an Gott behalten oder gewinnen dagegen Millionen nachdenklicher Erwachsener, darunter Philosophen und Naturwissenschaftler, nach gründlicher Prüfung. Den Weihnachtsmann muss man Kindern ausdrücklich erzählen; die Ahnung eines Schöpfers entsteht kulturübergreifend auch spontan. Und niemand schreibt philosophische Abhandlungen über die Existenz des Weihnachtsmanns.`,
          followUps: [
            {
              id: 'ad-populum',
              objection: `Das ist ein Argument ad populum – viele glauben es, also ist es wahr.`,
              objectionBy: 'Richard Dawkins',
              answer: `Nein. Ich sage nicht: „Viele glauben es, also ist es wahr." Ich sage: Ein Glaube, der die kritische Prüfung vieler kompetenter Erwachsener übersteht, ist kein kindlicher Restglaube wie der Weihnachtsmann. Das beweist nicht seine Wahrheit – aber es widerlegt die Behauptung, er bestehe nur, weil Kinder leichtgläubig sind.`,
              followUps: [
                {
                  id: 'promiskuitive-teleologie',
                  objection: `Kelemen hat gezeigt: Kinder sind „promiskuitive Teleologen". Sie meinen, Steine seien spitz, damit Tiere sich daran kratzen können. Wissenschaftliche Bildung korrigiert das. Der Schöpfergott ist derselbe Kinderfehler im Großformat.`,
                  objectionBy: 'Paul Bloom',
                  answer: `Kinder übertreiben das Zweckdenken im Einzelnen – das stimmt. Aber Kelemens eigene Folgestudie zeigt, dass selbst promovierte Physiker und Chemiker unter Zeitdruck teleologischen Erklärungen zustimmen: Die Intuition verschwindet nicht durch Bildung. Das beweist weder Gott noch widerlegt es ihn. Ob das Universum als Ganzes einen Urheber hat, entscheidet sich nicht an kindlichen Fehlurteilen über Steine, sondern an Gründen – etwa an seinem Anfang und seiner Feinabstimmung.`,
                  detail: `Wichtig ist der Unterschied zwischen **Übergeneralisierung** und **Fehlfunktion**: Kinder übertragen auch Grammatikregeln zu weit („gehte" statt „ging") – daraus folgt nicht, dass es keine Grammatik gibt. Ebenso folgt aus übertriebenem Zweckdenken im Detail nicht, dass die Frage nach einem Urheber des Ganzen unsinnig ist.

Kelemen, Rottman und Seston (2013) fanden, dass Naturwissenschaftler unter Zeitdruck häufiger falsche teleologische Aussagen akzeptierten als ohne Zeitdruck; sie deuten Zweckdenken als kognitive Grundeinstellung, die durch Bildung nur überlagert wird. Für die Debatte heißt das: Die Intuition ist universell und tief – ob sie im Ganzen auf Wirklichkeit trifft, muss mit Argumenten geklärt werden, nicht mit dem Verweis auf ihre Kindlichkeit.

Justin Barrett und Olivera Petrovich deuten die Befunde so, dass Menschen eine natürliche Offenheit für den Gedanken eines Schöpfers haben – was mit Röm 1,20 gut zusammenpasst.`,
                  sources: [
                    { kind: 'wissenschaft', author: 'Deborah Kelemen', work: `Are children „intuitive theists"? Reasoning about purpose and design in nature`, ref: 'Psychological Science 15 (2004), 295–301', year: '2004', status: 'paraphrase' },
                    { kind: 'wissenschaft', author: 'D. Kelemen, J. Rottman, R. Seston', work: 'Professional physical scientists display tenacious teleological tendencies: Purpose-based reasoning as a cognitive default', ref: 'Journal of Experimental Psychology: General 142 (2013), 1074–1083', year: '2013', status: 'paraphrase' },
                  ],
                  voices: [
                    {
                      person: 'justin-barrett',
                      role: 'als Kognitionswissenschaftler',
                      text: `Justin Barrett betont in „Born Believers", dass die natürliche Neigung von Kindern, hinter der Welt einen absichtsvollen Urheber zu vermuten, weder Beweis noch Widerlegung ist. Natürliche kognitive Neigungen sind in der Regel verlässlich, wenn auch nicht unfehlbar; wer sie pauschal als Fehler abtut, müsste das für viele andere Grundüberzeugungen ebenfalls tun, etwa für den Glauben an andere Personen mit eigenem Geist.`,
                      sources: [
                        { kind: 'fachliteratur', author: 'Justin L. Barrett', work: 'Born Believers: The Science of Children\'s Religious Belief', year: '2012', status: 'paraphrase' },
                      ],
                    },
                  ],
                  questionsBack: [`Wenn Physiker unter Zeitdruck teleologisch denken – ist dann auch die Physik ein Kinderfehler? Oder müssen wir einfach die Gründe prüfen?`],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Welche Erziehung wäre völlig weltanschauungsneutral?`,
    `Ist es auch Indoktrination, wenn atheistische Eltern ihren Kindern erklären, dass es keinen Gott gibt?`,
    `Wer soll entscheiden, welche Überzeugungen Eltern ihren Kindern weitergeben dürfen?`,
    `Wie erklärst du, dass Kinder Gott als Schöpfer teilweise von sich aus vermuten, ohne dass man es ihnen beibringt?`,
  ],
  avoid: [
    `Bestreiten, dass Herkunft den Glauben stark prägt – das ist offensichtlich.`,
    `Angstbasierte Erziehung („Gott sieht alles, was du falsch machst") verteidigen.`,
    `Mit der Gegenbehauptung antworten, atheistische Erziehung sei „Missbrauch" – das ist derselbe Fehler in umgekehrter Richtung.`,
  ],
  concessions: [
    `Kinder übernehmen die Weltanschauung ihrer Eltern häufig; Herkunft prägt den Glauben stark.`,
    `Es gibt religiöse Erziehung, die mit Angst, Strafe und Denkverboten arbeitet – sie schadet Kindern und widerspricht dem Evangelium.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Justin L. Barrett', work: 'Born Believers: The Science of Children\'s Religious Belief', year: '2012', status: 'paraphrase' },
    { kind: 'wissenschaft', author: 'Vern L. Bengtson', work: 'Families and Faith: How Religion Is Passed Down across Generations', year: '2013', status: 'paraphrase' },
    { kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Über eitlen Ruhm und die Kindererziehung', status: 'paraphrase' },
  ],
  difficulty: 1,
  tags: ['Indoktrination', 'Kinder', 'Erziehung', 'Dawkins', 'geborene Gläubige', 'Elternrecht'],
  related: [
    'pluralismus/nur-christ-wegen-geburt',
    'kognitive-religionswissenschaft/religion-nebenprodukt',
    'psychologie/bekehrung-manipulation',
    'psychologie/religion-schadet-psyche',
    'sakramente/taufe-nur-symbol-keine-kindertaufe',
  ],
};

export default claim;
