import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'religioese-erfahrung-kein-beleg',
  title: `„Religiöse Erfahrung ist kein Beleg."`,
  proponents: [
    { name: 'Richard Dawkins', role: 'Evolutionsbiologe, Oxford', work: 'The God Delusion (2006), Kap. 3 („The argument from personal experience")' },
    { name: 'Michael Martin', role: 'Religionsphilosoph, Boston University', work: 'Atheism: A Philosophical Justification (1990) – Kritik an Swinburnes Prinzip der Leichtgläubigkeit' },
    { name: 'Evan Fales', role: 'Religionsphilosoph, University of Iowa', work: 'Kritiken an W. P. Alstons „Perceiving God"' },
    { name: 'Matt Dillahunty', role: 'Atheistischer Debattierer', work: 'Debatten zur Beweiskraft persönlicher Erfahrung' },
  ],
  steelman: `Religiöse Erfahrungen sind privat, nicht überprüfbar und widersprechen einander: Hindus erleben Brahman, Muslime Allah, Christen die Dreieinigkeit, Buddhisten die Leere – offensichtlich prägt die Kultur, was man erlebt. Die Neurowissenschaft kann ähnliche Erlebnisse durch Hirnstimulation, Epilepsie oder Psilocybin hervorrufen. Die kognitive Religionswissenschaft erklärt, warum unser Gehirn überall Absichten und unsichtbare Akteure vermutet. Dawkins weist darauf hin, dass Menschen mit großer Überzeugung auch Stimmen hören, Geister sehen oder von Außerirdischen entführt werden. Wenn eine Erfahrung nur für den überzeugend ist, der sie hat, und sich durch natürliche Mechanismen vollständig erklären lässt, ist sie kein Beleg – höchstens ein psychologisches Datum.`,
  biblical: {
    summary: `Die Bibel lädt zur Erfahrung Gottes ein – „Schmecket und sehet, wie freundlich der HERR ist" (Ps 34,9) – und verheißt, dass Christus sich denen offenbart, die ihn lieben (Joh 14,21) und dass der Geist „unserm Geist" bezeugt, dass wir Gottes Kinder sind (Röm 8,16). Zugleich ist sie nüchtern: Nicht jeder Geist ist von Gott (1 Joh 4,1), selbst der Satan verstellt sich zum Engel des Lichts (2 Kor 11,14), und an den Früchten erkennt man, was echt ist (Gal 5,22–23). Erfahrung wird also ernst genommen *und* geprüft – an der öffentlichen Offenbarung in Christus.`,
    detail: `- **Ps 34,9:** „Schmecken" – eine Erkenntnisweise der Erfahrung, nicht der bloßen Information.
- **Joh 7,17:** „So jemand will des Willen tun, der wird innewerden, ob diese Lehre von Gott sei" – manche Erkenntnis setzt Bereitschaft voraus.
- **Apg 9; 22; 26:** Die Bekehrung des Paulus war eine Erfahrung mit äußeren Begleitumständen (seine Gefährten nahmen Licht und Stimme wahr) und mit sichtbaren Folgen: Aus dem Verfolger wurde der Apostel.
- **1 Joh 4,1–3:** Das Kriterium für die Prüfung der Geister ist das Bekenntnis zu Jesus Christus, „der in das Fleisch gekommen ist" – private Erfahrung wird an der öffentlichen, geschichtlichen Offenbarung gemessen.`,
    sources: [
      { kind: 'bibel', work: 'Psalmen', ref: '34,9', quote: `Schmecket und sehet, wie freundlich der HERR ist. Wohl dem, der auf ihn traut!`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '14,21', quote: `Wer meine Gebote hat und hält sie, der ist's, der mich liebt. Wer mich aber liebt, der wird von meinem Vater geliebt werden, und ich werde ihn lieben und mich ihm offenbaren.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Römer', ref: '8,16', quote: `Derselbe Geist gibt Zeugnis unserm Geist, daß wir Gottes Kinder sind.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Johannes', ref: '4,1', quote: `Ihr Lieben, glaubet nicht einem jeglichen Geist, sondern prüfet die Geister, ob sie von Gott sind.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '7,17', quote: `So jemand will des Willen tun, der wird innewerden, ob diese Lehre von Gott sei, oder ob ich von mir selbst rede.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptische Kirche ist die Mutter des christlichen Mönchtums, und ihre Wüstenväter sind Meister der Gotteserfahrung *und* der Unterscheidung der Geister. Der hl. Antonius lehrte nach seiner von Athanasius verfassten Vita, dass Erscheinungen, die von Gott kommen, Ruhe, Freude und Mut bringen, während trügerische Verwirrung, Furcht und Unruhe hinterlassen. Erfahrungen werden in der orthodoxen Tradition nie isoliert beurteilt, sondern an der Schrift, am Glauben der Kirche, an den Früchten und im Gespräch mit einem geistlichen Vater geprüft. Vater Matta el-Meskeen beschreibt das Gebet als lebendige Begegnung, in der Gott sich dem demütig Suchenden zu erkennen gibt.`,
    sources: [
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Leben des Antonius (Vita Antonii)', ref: '35–37', status: 'paraphrase', quote: 'Die Schau der Heiligen bringt Ruhe, Freude und Zuversicht; die Erscheinungen der Dämonen bringen Verwirrung, Furcht und Unruhe – daran erkennt man den Unterschied.' },
      { kind: 'koptisch', author: 'Matta el-Meskeen', work: 'Das orthodoxe Gebetsleben (Orthodox Prayer Life)', status: 'paraphrase', quote: 'Das Gebet ist lebendige Gemeinschaft mit Gott, in der die Seele Gott nicht nur denkt, sondern erfährt; Demut und Ausdauer sind seine Bedingungen.' },
    ],
  },
  opposingView: {
    summary: `Religiöse Erfahrungen sind weit verbreitet: In Umfragen (u. a. des Religious Experience Research Centre in Oxford, gegründet von dem Zoologen Alister Hardy) berichtet ein erheblicher Teil der Befragten von Erfahrungen einer höheren Macht oder Gegenwart. In der Religionsphilosophie haben Richard Swinburne (Prinzip der Leichtgläubigkeit) und William P. Alston („Perceiving God", 1991) argumentiert, dass solche Erfahrungen prima facie Rechtfertigung liefern, ähnlich wie Sinneswahrnehmung. Kritiker (Martin, Fales, Gale) verweisen auf fehlende Überprüfbarkeit, widersprüchliche Erfahrungen und naturalistische Erklärungen. Der „God Helmet" von Michael Persinger, der religiöse Erlebnisse durch Magnetfelder auslösen sollte, ließ sich in einer kontrollierten schwedischen Doppelblindstudie nicht bestätigen; die Erlebnisse hingen von der Suggestibilität der Versuchspersonen ab.`,
    sources: [
      { kind: 'fachliteratur', author: 'William P. Alston', work: 'Perceiving God: The Epistemology of Religious Experience', year: '1991', status: 'paraphrase', quote: 'Die christliche mystische Praxis ist eine sozial etablierte Überzeugungspraxis, die – wie die Sinneswahrnehmung – prima facie Rechtfertigung liefert.' },
      { kind: 'wissenschaft', author: 'Pehr Granqvist u. a.', work: '„Sensed presence and mystical experiences are predicted by suggestibility, not by the application of transcranial weak complex magnetic fields", Neuroscience Letters 379', year: '2005', status: 'paraphrase', quote: 'Doppelblind kontrolliert konnten Persingers Befunde nicht repliziert werden; entscheidend war die Suggestibilität.' },
      { kind: 'gegner', author: 'Michael Martin', work: 'Atheism: A Philosophical Justification', year: '1990', status: 'paraphrase', quote: 'Swinburnes Prinzip der Leichtgläubigkeit würde, konsequent angewandt, auch Erfahrungen der Abwesenheit Gottes rechtfertigen („negative Leichtgläubigkeit").' },
    ],
  },
  quickAnswer: `Fast alles, was wir wissen, beruht auf Erfahrung – auf Sinneswahrnehmung, Erinnerung und dem Zeugnis anderer. Der Philosoph Richard Swinburne nennt das „Prinzip der Leichtgläubigkeit": Wenn uns etwas so erscheint, ist es vernünftig anzunehmen, dass es so ist, solange nichts dagegen spricht. Millionen Menschen aller Zeiten berichten, Gott erfahren zu haben. Das ist kein Beweis für andere, aber ein echter Beleg – für den, der die Erfahrung macht, und als Teil des Gesamtbildes. Dass dabei das Gehirn aktiv ist, widerlegt nichts: Auch wenn ich einen Baum sehe, ist mein Gehirn aktiv. Und das Christentum prüft Erfahrungen an der Schrift, an den Früchten und vor allem an Christus, der öffentlich und geschichtlich gekommen ist.`,
  keyPoints: [
    `**Erfahrung ist die Quelle allen Wissens:** Wer religiöse Erfahrung grundsätzlich als Beleg ausschließt, muss begründen, warum gerade sie anders zu behandeln ist als Sinneswahrnehmung oder Erinnerung.`,
    `**Prinzip der Leichtgläubigkeit (Swinburne):** Was uns erscheint, dürfen wir für wirklich halten, solange keine besonderen Gegengründe vorliegen. Sonst endet man im totalen Skeptizismus.`,
    `**Hirnaktivität widerlegt nichts:** Jede Erfahrung hat ein neuronales Korrelat – auch die Wahrnehmung eines Baumes. Dass man manche Erlebnisse künstlich nachahmen kann, zeigt nicht, dass alle unecht sind, so wie Falschgeld echtes Geld voraussetzt.`,
    `**Widersprüchliche Deutungen** heben die Erfahrung nicht auf; auch Augenzeugen widersprechen sich im Detail. Sie verlangen Prüfung – das Christentum verankert die Erfahrung in der öffentlichen Geschichte Jesu.`,
    `**Die Kirche prüft:** Schrift, Glaube der Kirche, Früchte des Geistes, geistliche Begleitung – die Wüstenväter Ägyptens sind Meister der Unterscheidung der Geister.`,
    `**Erfahrung ist nicht das Fundament allein:** Der christliche Glaube ruht auf der Auferstehung als öffentlichem Ereignis; persönliche Erfahrung bestätigt und vertieft ihn.`,
  ],
  argument: {
    name: 'Argument aus der religiösen Erfahrung (nach Swinburne)',
    summary: 'Die Erfahrung der Gegenwart Gottes rechtfertigt prima facie den Glauben, dass Gott gegenwärtig ist.',
    premises: [
      {
        text: 'P1: Wenn es einem Menschen so erscheint, als sei etwas gegenwärtig, dann ist es wahrscheinlich gegenwärtig – sofern keine besonderen Gegengründe vorliegen (Prinzip der Leichtgläubigkeit).',
        support: `Ohne dieses Prinzip könnten wir keiner Wahrnehmung trauen, denn jede Überprüfung einer Wahrnehmung stützt sich auf weitere Wahrnehmungen. Swinburne nennt als mögliche Gegengründe: unzuverlässige Umstände (Drogen, Krankheit), frühere Täuschungen derselben Art, starke Gründe gegen die Existenz des Gegenstands, oder eine bessere Erklärung der Erfahrung.`,
        sources: [
          { kind: 'fachliteratur', author: 'Richard Swinburne', work: 'The Existence of God', year: '2. Aufl. 2004', ref: 'Kap. 13', status: 'paraphrase', quote: 'Prinzip der Leichtgläubigkeit und Prinzip des Zeugnisses; das Argument aus der religiösen Erfahrung im kumulativen Fall.' },
        ],
      },
      {
        text: 'P2: Sehr vielen Menschen erscheint es so, als begegne ihnen Gott bzw. als sei er ihnen gegenwärtig.',
        support: `Das ist durch Berichte aus allen Epochen und Kulturen und durch moderne Umfragen gut belegt.`,
      },
      {
        text: 'P3: Es gibt keine durchschlagenden Gegengründe, die alle diese Erfahrungen entkräften.',
        support: `Die meisten Erfahrenden sind psychisch gesund und nicht unter Drogeneinfluss; dass Gott nicht existiert, ist nicht gezeigt; neuronale Korrelate begleiten jede Erfahrung und erklären sie nicht weg. Einzelne Erfahrungen können Täuschungen sein – das gilt für Sinneswahrnehmungen auch.`,
      },
    ],
    conclusion: 'Also liefern religiöse Erfahrungen prima facie gute Gründe für die Annahme, dass Gott gegenwärtig ist – sie sind ein echter Teil der Gesamtevidenz.',
  },
  voices: [
    {
      person: 'swinburne',
      role: 'als Religionsphilosoph',
      text: `Swinburne hält das Argument aus der religiösen Erfahrung für das Element, das im kumulativen Fall für Gott den Ausschlag gibt. Er begründet es mit zwei Prinzipien, ohne die wir keinerlei Wissen hätten: dem Prinzip der Leichtgläubigkeit (Dinge sind wahrscheinlich so, wie sie uns erscheinen, wenn nichts dagegen spricht) und dem Prinzip des Zeugnisses (Menschen berichten wahrscheinlich, was sie erlebt haben). Wer religiöse Erfahrung grundsätzlich ausschließen will, muss einen besonderen Gegengrund nennen – und der bloße Hinweis, dass sie religiös ist, ist keiner, solange nicht gezeigt ist, dass Gott nicht existiert.`,
      sources: [
        { kind: 'fachliteratur', author: 'Richard Swinburne', work: 'The Existence of God', year: '2. Aufl. 2004', ref: 'Kap. 13', status: 'paraphrase', quote: 'Prinzipien der Leichtgläubigkeit und des Zeugnisses.' },
      ],
    },
    {
      person: 'william-alston',
      role: 'als Erkenntnistheoretiker',
      text: `Alston vergleicht die Wahrnehmung Gottes mit der Sinneswahrnehmung. Beide sind „Überzeugungspraxen", die sozial etabliert sind, eigene Prüfverfahren haben und sich im Leben bewähren. Auch die Verlässlichkeit der Sinneswahrnehmung lasse sich nicht ohne Zirkel beweisen – jede Überprüfung benutzt wieder die Sinne. Wenn wir die Sinneswahrnehmung trotzdem vernünftigerweise für verlässlich halten, gebe es keinen Grund, die christliche mystische Praxis von vornherein auszuschließen; sie verfügt über eigene Prüfungen: die Schrift, die Tradition, die Früchte im Leben und die Übereinstimmung mit der Erfahrung anderer.`,
      sources: [
        { kind: 'fachliteratur', author: 'William P. Alston', work: 'Perceiving God: The Epistemology of Religious Experience', year: '1991', status: 'paraphrase', quote: 'Die christliche mystische Praxis als rationale Überzeugungspraxis analog zur Sinneswahrnehmung.' },
      ],
    },
    {
      person: 'antonius',
      role: 'als Vater der Mönche und Lehrer der Unterscheidung',
      text: `Nach der Vita, die der hl. Athanasius verfasste, lehrte Antonius seine Mönche, Erfahrungen und Erscheinungen nicht leichtgläubig anzunehmen, sondern zu prüfen: Was von Gott kommt, bringt Ruhe, Freude, Mut und Liebe zu Gott; was trügerisch ist, hinterlässt Verwirrung, Furcht und Unruhe. Als griechische Philosophen ihn besuchten und ihm vorhielten, die Christen hätten keine Beweise, verwies er auf die sichtbare verwandelnde Kraft des Glaubens an Christus. Für die koptische Tradition gehören Gotteserfahrung und nüchterne Prüfung untrennbar zusammen.`,
      sources: [
        { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Leben des Antonius (Vita Antonii)', ref: '35–37; 72–80', status: 'paraphrase', quote: 'Unterscheidung der Geister nach ihren Wirkungen; Gespräch mit den Philosophen über Glaube und Beweis.' },
      ],
    },
    {
      person: 'matta-el-meskeen',
      role: 'als koptischer Lehrer des Gebets',
      text: `Matta el-Meskeen, der das Makarius-Kloster im Wadi Natrun erneuerte, beschreibt das Gebet nicht als Selbstgespräch, sondern als Begegnung mit dem lebendigen Gott. Die Gotteserkenntnis, die im Gebet wächst, ist nach seiner Darstellung mehr als intellektuelles Wissen: Sie verwandelt den Menschen und schenkt Frieden, Demut und Liebe. Zugleich betont er, dass diese Erfahrung nicht erzwungen werden kann, sondern Geschenk ist, das dem Ausharrenden und Demütigen zuteilwird – in Übereinstimmung mit der Erfahrung der Väter.`,
      sources: [
        { kind: 'koptisch', author: 'Matta el-Meskeen', work: 'Das orthodoxe Gebetsleben (Orthodox Prayer Life)', status: 'paraphrase', quote: 'Das Gebet als Begegnung und Gemeinschaft mit Gott, die den Menschen verwandelt.' },
      ],
    },
    {
      person: 'pascal',
      role: 'als Mathematiker mit einer Gotteserfahrung',
      text: `Nach Pascals Tod fand man in seinen Rock eingenäht ein Pergament, das er stets bei sich getragen hatte: das „Mémorial", die Niederschrift einer Gotteserfahrung in der Nacht des 23. November 1654. Es beginnt mit dem Wort „Feuer" und spricht vom „Gott Abrahams, Gott Isaaks, Gott Jakobs, nicht der Philosophen und Gelehrten", von „Gewissheit, Empfinden, Freude, Friede". Pascal, einer der schärfsten Denker seiner Zeit, sah in dieser Erfahrung keinen Widerspruch zur Vernunft, sondern ihre Erfüllung: „Das Herz hat seine Gründe, die der Verstand nicht kennt."`,
      sources: [
        { kind: 'fachliteratur', author: 'Blaise Pascal', work: 'Mémorial', year: '1654', quote: `Gewissheit, Gewissheit, Empfinden, Freude, Friede.`, original: 'Certitude, certitude, sentiment, joie, paix.', translation: 'eigene Übersetzung', status: 'verbatim' },
        { kind: 'fachliteratur', author: 'Blaise Pascal', work: 'Pensées (Gedanken)', ref: 'Fragment 423 (Lafuma; Brunschvicg 277)', quote: `Das Herz hat seine Gründe, die der Verstand nicht kennt.`, original: 'Le cœur a ses raisons que la raison ne connaît point.', translation: 'eigene Übersetzung', status: 'paraphrase', note: 'Wortlaut bekannt; Fragmentnummer je nach Ausgabe.' },
      ],
    },
  ],
  dialog: [
    {
      id: 'erfahrung-einbildung',
      objection: `„Persönliche Erfahrung ist kein Beleg. Man kann sich alles einbilden – Menschen sind auch überzeugt, von Außerirdischen entführt worden zu sein."`,
      objectionBy: 'Matt Dillahunty / Richard Dawkins',
      targetsPremise: 1,
      answer: `Natürlich können wir uns täuschen – bei religiösen Erfahrungen ebenso wie bei Sinneswahrnehmungen. Aber daraus folgt nicht, dass Erfahrung grundsätzlich wertlos ist; sonst dürften wir auch unseren Augen und unserem Gedächtnis nicht trauen. Vernünftig ist: Erfahrungen grundsätzlich ernst nehmen und dort misstrauen, wo es konkrete Gründe gibt. Dass einzelne Menschen sich täuschen, ist kein Grund, die Erfahrungen von Millionen gesunder, nüchterner Menschen pauschal abzutun.`,
      followUps: [
        {
          id: 'sinne-ueberpruefbar',
          objection: `„Sinneswahrnehmung kann man überprüfen: Andere sehen den Baum auch, Kameras zeichnen ihn auf. Religiöse Erfahrungen kann niemand überprüfen."`,
          objectionBy: 'Michael Martin / Evan Fales',
          targetsPremise: 3,
          answer: `Gott ist kein Gegenstand, der sich von Kameras erfassen oder auf Befehl vorführen lässt – er ist Person, die sich frei offenbart. Auch das Innenleben anderer Menschen kannst du nicht mit Kameras überprüfen, und doch weißt du, dass deine Freunde Gefühle haben. Die christliche Erfahrung hat zudem eigene Prüfungen: Stimmt sie mit der Schrift und dem Glauben der Kirche überein? Bringt sie Früchte wie Liebe, Demut und Frieden? Wird sie von anderen geteilt? Das sind echte, wenn auch andere Kriterien.`,
          followUps: [
            {
              id: 'pruefungen-zirkulaer',
              objection: `„Diese Prüfungen sind zirkulär: Ihr prüft religiöse Erfahrung an der Bibel und der Kirche, die selbst auf religiöser Erfahrung beruhen."`,
              objectionBy: 'Evan Fales',
              targetsPremise: 3,
              answer: `Das gilt für jede grundlegende Erkenntnisquelle, wie Alston gezeigt hat: Die Verlässlichkeit der Sinneswahrnehmung kannst du auch nur mit weiteren Sinneswahrnehmungen prüfen – auch das ist zirkulär. Entscheidend ist, ob eine Praxis in sich stimmig ist, sich bewährt und durch nichts Stärkeres widerlegt wird. Zudem gibt es beim Christentum einen Anker außerhalb der persönlichen Erfahrung: das öffentliche, historisch prüfbare Ereignis der Auferstehung.`,
            },
          ],
        },
      ],
    },
    {
      id: 'erfahrungen-widersprechen',
      objection: `„Hindus erleben Brahman, Muslime Allah, Buddhisten die Leere, Christen die Dreieinigkeit. Die Erfahrungen widersprechen sich – also sind sie als Belege wertlos."`,
      objectionBy: 'Richard Dawkins / Michael Martin',
      targetsPremise: 3,
      answer: `Widersprüche in der *Deutung* machen nicht alle Erfahrungen wertlos. Auch Augenzeugen eines Unfalls widersprechen sich im Detail – und trotzdem hat der Unfall stattgefunden. Viele religiöse Erfahrungen haben einen gemeinsamen Kern: die Begegnung mit einer heiligen, transzendenten Wirklichkeit. Welche Deutung zutrifft, muss man mit weiteren Gründen klären – mit Philosophie, Geschichte und vor allem mit der Frage, wer Jesus war und ob er auferstanden ist.`,
      followUps: [
        {
          id: 'gleich-viel-wert',
          objection: `„Dann ist deine Erfahrung genauso viel wert wie die eines Muslims oder Hindus."`,
          objectionBy: 'Alex O\'Connor',
          answer: `Als Erfahrungen sind beide ernst zu nehmen – beide sprechen gegen einen rein materialistischen Naturalismus. Aber um den *Inhalt* zu prüfen, brauchen wir mehr als die Erfahrung selbst. Darum stützt sich das Christentum nicht zuerst auf innere Erlebnisse, sondern auf ein geschichtliches Ereignis: Jesus Christus, gekreuzigt und auferstanden vor Zeugen. Persönliche Erfahrung bestätigt diesen Glauben, aber sie begründet ihn nicht allein.`,
          detail: `Siehe „Alle Religionen sind gleich wahr" und „Ich habe ein Zeugnis im Herzen (Moroni 10,4)".`,
        },
      ],
    },
    {
      id: 'god-helmet-psilocybin',
      objection: `„Neurowissenschaftler können Gotteserfahrungen erzeugen – mit dem ‚God Helmet', durch Epilepsie oder mit Psilocybin. Also sind sie nur Hirnaktivität."`,
      objectionBy: 'Michael Persinger / Sam Harris',
      targetsPremise: 3,
      answer: `Erstens: Persingers „God Helmet" ließ sich in einer schwedischen Doppelblindstudie (Granqvist u. a., 2005) nicht bestätigen – entscheidend war die Suggestibilität der Teilnehmer, nicht das Magnetfeld. Zweitens: Jede Erfahrung hat ein Hirnkorrelat, auch das Sehen eines Baumes; das macht den Baum nicht unwirklich. Drittens: Dass man manche Erlebnisse künstlich nachahmen kann, zeigt nicht, dass alle künstlich sind – Falschgeld beweist nicht, dass es kein echtes Geld gibt, sondern setzt es voraus.`,
      detail: `Siehe „Gotteserfahrungen sind nur Hirnaktivität (God Helmet, Neurotheologie)".`,
      followUps: [
        {
          id: 'agentendetektor',
          objection: `„Die Evolution hat uns einen überaktiven Agentendetektor gegeben. Deshalb vermuten wir hinter jedem Rascheln einen Akteur – und hinter der Welt einen Gott."`,
          objectionBy: 'Pascal Boyer / Daniel Dennett',
          answer: `Das erklärt allenfalls, *wie* Menschen zu Gottesvorstellungen kommen – nicht, ob sie wahr sind. Wenn es Gott gibt, ist es nicht überraschend, dass er uns mit Fähigkeiten ausgestattet hat, ihn wahrzunehmen. Der Kognitionswissenschaftler Justin Barrett, einer der Begründer dieses Forschungsfeldes, ist selbst Christ und hält die Befunde für mit dem Glauben vereinbar. Wer aus der Herkunft einer Überzeugung auf ihre Falschheit schließt, begeht einen genetischen Fehlschluss.`,
          detail: `Siehe „Religion ist ein Nebenprodukt unserer kognitiven Mechanismen".`,
        },
      ],
    },
    {
      id: 'warum-nicht-ich',
      objection: `„Warum habe ich nie eine solche Erfahrung gemacht? Wenn Gott existierte, würde er sie mir auch schenken."`,
      objectionBy: 'Alex O\'Connor',
      answer: `Ich kann dir nicht sagen, warum Gott einem Menschen so und einem anderen anders begegnet – das bleibt sein Geheimnis. Aber Gotteserfahrung ist kein Experiment, das man auf Knopfdruck abrufen kann; Gott ist Person, nicht Gegenstand. Die Bibel lädt ein: „Schmecket und sehet" (Ps 34,9). Viele Menschen haben erst Gott erfahren, als sie anfingen, ehrlich zu beten, die Evangelien zu lesen oder eine Liturgie mitzufeiern.`,
      detail: `Siehe „Wenn Gott existiert, warum zeigt er sich nicht eindeutig?".`,
      followUps: [
        {
          id: 'erst-glauben-dann-erfahren',
          objection: `„Das ist ein Zirkel: Man muss erst glauben, um dann zu erfahren, was man glaubt."`,
          objectionBy: 'Matt Dillahunty',
          answer: `Nicht blind glauben – aber offen sein und sich einlassen. Das gilt für viele Erkenntnisse: Wer Musik verstehen will, muss zuhören; wer einen Menschen kennenlernen will, muss Zeit mit ihm verbringen. Jesus sagt: „So jemand will des Willen tun, der wird innewerden, ob diese Lehre von Gott sei" (Joh 7,17). Das ist kein Zirkel, sondern ein Experiment, das jeder ehrlich wagen kann.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Warum sollte gerade religiöse Erfahrung anders behandelt werden als Sinneswahrnehmung oder Erinnerung?`,
    `Wenn man Falschgeld herstellen kann – beweist das, dass es kein echtes Geld gibt?`,
    `Kannst du die Gefühle deiner Freunde mit einer Kamera überprüfen? Weißt du trotzdem, dass sie welche haben?`,
    `Wärst du bereit, ehrlich zu beten: „Gott, wenn es dich gibt, zeige dich mir"?`,
  ],
  avoid: [
    `„Ich habe es erlebt, also musst du es glauben." – Deine Erfahrung ist Beleg für dich, aber kein Zwangsbeweis für andere.`,
    `Jedes Gefühl als Gotteserfahrung ausgeben. Die orthodoxe Tradition ist nüchtern und prüft.`,
    `Die neurowissenschaftlichen Befunde bestreiten, statt sie richtig einzuordnen.`,
  ],
  concessions: [
    `Menschen können sich in religiösen Erfahrungen täuschen; nicht jede angebliche Gotteserfahrung ist echt (1 Joh 4,1).`,
    `Religiöse Erfahrungen werden kulturell gedeutet und widersprechen sich in ihren Deutungen.`,
    `Für Außenstehende hat die Erfahrung eines anderen weniger Gewicht als für den Erfahrenden selbst.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'William P. Alston', work: 'Perceiving God', year: '1991', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Richard Swinburne', work: 'The Existence of God', year: '2. Aufl. 2004', ref: 'Kap. 13', status: 'paraphrase' },
    { kind: 'koptisch', author: 'Matta el-Meskeen', work: 'Das orthodoxe Gebetsleben', status: 'paraphrase' },
    { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Leben des Antonius', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Religiöse Erfahrung', 'Prinzip der Leichtgläubigkeit', 'Alston', 'Wüstenväter', 'Unterscheidung der Geister'],
  related: [
    'neurowissenschaften/gotteserfahrung-hirnaktivitaet',
    'kognitive-religionswissenschaft/religion-nebenprodukt',
    'mormonen/brennen-im-herzen',
    'gottesbeweise/goettliche-verborgenheit',
    'erkenntnistheorie/glaube-ohne-beweise',
    'pluralismus/alle-religionen-gleich-wahr',
    'psychiatrie/propheten-psychisch-krank',
  ],
};

export default claim;
