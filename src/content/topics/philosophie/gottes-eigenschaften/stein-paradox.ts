import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'stein-paradox',
  title: `„Kann Gott einen Stein erschaffen, den er nicht heben kann?"`,
  proponents: [
    { name: 'J. L. Mackie', role: 'Philosoph, Oxford (1917–1981)', work: '„Evil and Omnipotence", Mind 64 (1955) – das „Paradox der Allmacht"' },
    { name: 'C. Wade Savage', role: 'Philosoph, University of Minnesota', work: '„The Paradox of the Stone", Philosophical Review 76 (1967)' },
    { name: 'Richard Dawkins', role: 'Evolutionsbiologe, Oxford', work: 'The God Delusion (2006), Kap. 3 – Allwissenheit gegen Allmacht' },
    { name: 'Michael Martin & Ricki Monnier (Hg.)', role: 'Herausgeber einer Sammlung atheistischer Inkohärenz-Argumente', work: 'The Impossibility of God (2003)' },
  ],
  steelman: `Die Frage klingt nach Schulhof, ist aber ein ernsthaftes logisches Dilemma, das Philosophen wie J. L. Mackie formuliert haben. Entweder Gott kann einen Stein erschaffen, den er nicht heben kann – dann gibt es etwas, das er nicht kann: diesen Stein heben. Oder er kann ihn nicht erschaffen – dann gibt es ebenfalls etwas, das er nicht kann. In beiden Fällen ist er nicht allmächtig. Also ist der Begriff „allmächtig" in sich widersprüchlich, und ein allmächtiges Wesen kann es nicht geben. Wer sich auf „Gott kann nur das logisch Mögliche" zurückzieht, gibt zu, dass Gott an etwas gebunden ist, das über ihm steht – die Logik. Und wer sagt, Gott könne nicht lügen, nicht sündigen und nicht sterben, gesteht ein, dass der Mensch Dinge kann, die Gott nicht kann. Was bleibt dann noch von „Allmacht" übrig? Die Bibel sagt: „Bei Gott sind alle Dinge möglich" (Mt 19,26) – die Theologen haben das nachträglich so lange eingeschränkt, bis es nichts mehr bedeutet.`,
  biblical: {
    summary: `Die Bibel nennt Gott den „Allmächtigen" – griechisch *Pantokrator*, „Allherrscher", hebräisch u. a. *El Schaddai*. Das bedeutet: Nichts entzieht sich seiner Herrschaft, nichts Wirkliche ist ihm zu schwer (Gen 18,14; Lk 1,37). Dieselbe Bibel sagt aber ausdrücklich, dass es Dinge gibt, die Gott *nicht* kann: lügen (Hebr 6,18; Tit 1,2) und sich selbst verleugnen (2 Tim 2,13). Die Schrift hat also nie gemeint, Gott könne Unsinn tun – sondern dass seiner Macht keine *wirkliche* Grenze gesetzt ist.`,
    detail: `- **Mt 19,26 im Kontext:** Jesus sagt den Satz zur Frage, ob ein Reicher gerettet werden kann. Gemeint ist: Was für Menschen unmöglich ist (sich selbst retten), ist für Gott möglich – nicht: Gott kann viereckige Kreise zeichnen.
- **Lk 1,37:** „Bei Gott ist kein Ding unmöglich" – wörtlich „kein *rhema* (Wort/Sache) wird unmöglich sein". Ein Widerspruch ist aber gerade kein „Ding", sondern eine Wortkombination ohne Gehalt.
- **Hebr 6,18 / 2 Tim 2,13:** Die Unfähigkeit zu lügen ist keine Schwäche, sondern Ausdruck der Vollkommenheit. Die Bibel sieht keinen Widerspruch zwischen „allmächtig" und „kann nicht lügen".
- **Pantokrator:** Das Glaubensbekenntnis von Nizäa-Konstantinopel, das die koptische Kirche in jeder Liturgie betet, bekennt Gott als *Pantokrator* – Herrscher über alles. Das ist ein Begriff der Herrschaft über das Wirkliche, kein Begriff der „Macht zum Unsinn".`,
    sources: [
      { kind: 'bibel', work: 'Lukas', ref: '1,37', quote: `Denn bei Gott ist kein Ding unmöglich.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Mose (Genesis)', ref: '18,14', quote: `Sollte dem HERRN etwas unmöglich sein?`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Hebräer', ref: '6,18', quote: `… auf daß wir durch zwei Stücke, die nicht wanken (denn es ist unmöglich, daß Gott lüge), einen starken Trost haben …`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '2. Timotheus', ref: '2,13', quote: `Glauben wir nicht, so bleibt er treu; er kann sich selbst nicht leugnen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Offenbarung', ref: '1,8', quote: `Ich bin das A und das O, der Anfang und das Ende, spricht Gott der HERR, der da ist und der da war und der da kommt, der Allmächtige.`, original: 'ὁ παντοκράτωρ', translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die Kirchenväter haben die Frage längst beantwortet: Gottes Allmacht ist die Macht, alles Wirkliche und Mögliche zu tun – nicht Widersprüche. Augustinus sagt, Gott könne nicht sterben und nicht getäuscht werden, und gerade *deshalb* sei er allmächtig. Origenes antwortete schon Kelsos, Gott könne nichts Schändliches tun, ohne aufzuhören, Gott zu sein. Die koptische Kirche bekennt Gott als *Pantokrator* und betont in der Liturgie seine Macht als Macht der Liebe, die aus dem Nichts erschafft und die Toten auferweckt.`,
    detail: `Thomas von Aquin hat die klassische Formel geprägt: Was einen Widerspruch einschließt, fällt nicht unter die göttliche Allmacht, weil es gar nicht den Charakter des Möglichen hat – darum sei es „passender zu sagen, dass so etwas nicht getan werden kann, als dass Gott es nicht tun kann" (S.th. I q.25 a.3). Anselm (Proslogion 7) unterscheidet zwischen echter Macht und „Unvermögen", das nur grammatisch wie Macht klingt: Lügen-Können oder Vergehen-Können ist kein Mehr an Macht, sondern ein Mangel.`,
    sources: [
      { kind: 'kirchenvater', author: 'Augustinus', work: 'Vom Gottesstaat (De civitate Dei)', ref: 'V,10', status: 'paraphrase', quote: 'Gott kann nicht sterben und nicht getäuscht werden – und eben deshalb heißt er allmächtig; könnte er es, wäre er nicht allmächtig.' },
      { kind: 'kirchenvater', author: 'Origenes', work: 'Gegen Kelsos (Contra Celsum)', ref: 'V,23', status: 'paraphrase', quote: 'Gott kann alles, was er tun kann, ohne aufzuhören, Gott, gut und weise zu sein – nichts Schändliches.', note: 'Origenes ist in der koptischen Kirche keine Lehrautorität, wird aber als Apologet gegen Kelsos zitiert. Abschnittsnummer sinngemäß; vor wörtlicher Verwendung prüfen.' },
      { kind: 'konzil', work: 'Glaubensbekenntnis von Nizäa-Konstantinopel', year: '325/381', quote: `Wir glauben an einen Gott, den Vater, den Allmächtigen (Pantokrator), Schöpfer des Himmels und der Erde …`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Allmacht heißt: Gott kann alles tun, was überhaupt *möglich* ist – nicht Widersprüche. „Ein Stein, zu schwer für den, der jeden Stein heben kann" ist wie „ein viereckiger Kreis": eine Wortkombination ohne Gegenstand. C. S. Lewis: „Unsinn bleibt Unsinn, auch wenn wir ihn über Gott reden." Gott fehlt hier keine Macht – es gibt schlicht nichts, das zu tun wäre. Und dass Gott nicht lügen oder sündigen kann, ist keine Schwäche, sondern Vollkommenheit.`,
  keyPoints: [
    `**Definition klären:** Allmacht ist die Macht, jeden *möglichen* Sachverhalt herbeizuführen. So lehren es Thomas, Anselm, Augustinus und praktisch alle Religionsphilosophen.`,
    `**Pseudo-Aufgabe:** „Einen Stein erschaffen, den der Allmächtige nicht heben kann" ist in sich widersprüchlich (George Mavrodes 1963). Wer es nicht kann, dem fehlt nichts – es gibt keine Aufgabe.`,
    `**Ohne Zirkel (Savage 1967):** „Gott kann keinen Stein erschaffen, den er nicht heben kann" heißt nur: Jeden Stein, den er erschafft, kann er auch heben. Das ist keine Grenze, sondern ein Ausdruck unbegrenzter Macht.`,
    `**Logik steht nicht über Gott:** Sie ist kein fremdes Gesetz, sondern Ausdruck seines vernünftigen Wesens – Gott ist der *Logos* (Joh 1,1).`,
    `**Nicht-Können aus Vollkommenheit:** Lügen, Sündigen, Sterben sind keine Fähigkeiten, sondern Mängel. Der Mensch „kann" sie, weil er begrenzt ist (Anselm, Proslogion 7).`,
    `**Wer Gott Widersprüche zutraut, zerstört das Paradox selbst:** Dann könnte Gott den unhebbaren Stein erschaffen *und* heben (Harry Frankfurt 1964).`,
  ],
  argument: {
    name: 'Auflösung des Stein-Paradoxes',
    summary: 'Das Paradox setzt einen Allmachtsbegriff voraus, den kein Theist vertritt.',
    premises: [
      {
        text: 'P1: Allmacht ist die Macht, jeden logisch möglichen Sachverhalt herbeizuführen, der mit Gottes vollkommenem Wesen vereinbar ist.',
        support: `Das ist die klassische Definition (Thomas, S.th. I q.25 a.3) und die Standarddefinition der heutigen Religionsphilosophie (Flint & Freddoso 1983). Sie ist nicht nachträglich erfunden, sondern seit Origenes und Augustinus belegt.`,
        sources: [
          { kind: 'fachliteratur', author: 'Thomas Flint & Alfred Freddoso', work: '„Maximal Power", in: A. Freddoso (Hg.), The Existence and Nature of God', year: '1983', status: 'paraphrase', quote: 'Präzise Definition der Allmacht über herbeiführbare Sachverhalte.' },
        ],
      },
      {
        text: 'P2: „Ein Stein, den ein allmächtiges Wesen nicht heben kann" ist ein logisch unmöglicher Gegenstand.',
        support: `Wenn Gott allmächtig ist, kann er jeden Stein heben. Ein Stein, den er nicht heben kann, wäre also ein Stein, den ein Wesen, das jeden Stein heben kann, nicht heben kann – ein Widerspruch wie „verheirateter Junggeselle".`,
      },
      {
        text: 'P3: Das Nicht-Herbeiführen eines logisch unmöglichen Sachverhalts ist keine Einschränkung der Macht.',
        support: `Macht bezieht sich auf etwas, das getan werden kann. Ein Widerspruch beschreibt nichts – es gibt keinen Gegenstand, an dem Macht scheitern könnte. Thomas: Es ist passender zu sagen, solche Dinge „können nicht getan werden", als dass Gott sie nicht tun kann.`,
      },
    ],
    conclusion: 'Also zeigt das Stein-Paradox keinen Mangel an Gottes Macht und keine Inkohärenz des Allmachtsbegriffs.',
  },
  voices: [
    {
      person: 'thomas-aquin',
      role: 'als Systematiker der Allmacht',
      text: `Thomas fragt in der Summa ausdrücklich, ob Gott alles kann. Seine Antwort: Gott wird allmächtig genannt, weil er alles kann, was *schlechthin möglich* ist. Schlechthin möglich ist, was keinen Widerspruch in sich enthält. Was Sein und Nichtsein zugleich einschließt, ist kein mögliches Ding, sondern hat „nicht einmal den Charakter des Machbaren". Darum, so Thomas, sei es angemessener zu sagen, solches könne nicht geschehen, als dass Gott es nicht tun könne. Die Grenze liegt nicht in Gottes Macht, sondern im fehlenden Gegenstand.`,
      sources: [
        { kind: 'fachliteratur', author: 'Thomas von Aquin', work: 'Summa theologiae', ref: 'I q.25 a.3', quote: `Daher sagt man passender, dass solches nicht geschehen kann, als dass Gott es nicht tun kann.`, original: 'Unde convenientius dicitur quod non possunt fieri, quam quod Deus non potest ea facere.', translation: 'eigene Übersetzung', status: 'verbatim' },
      ],
    },
    {
      person: 'cs-lewis',
      role: 'als Apologet für Laien',
      text: `Lewis beginnt sein Buch über das Leid mit einer Klärung der Allmacht: Sie ist die Macht, alles innerlich Mögliche zu tun, nicht das innerlich Unmögliche. Man darf Gott Wunder zuschreiben, aber keinen Unsinn. Sinnlose Wortkombinationen bekommen nicht plötzlich Sinn, nur weil man „Gott kann" davorsetzt. Das sei keine Grenze seiner Macht – so wie es keine Grenze für einen Schriftsteller ist, dass er keinen Satz schreiben kann, der zugleich wahr und falsch ist.`,
      sources: [
        { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'The Problem of Pain (Über den Schmerz)', ref: 'Kap. 2 „Divine Omnipotence"', year: '1940', quote: `Unsinn bleibt Unsinn, auch wenn wir ihn über Gott reden.`, original: 'nonsense remains nonsense even when we talk it about God', translation: 'eigene Übersetzung', status: 'verbatim' },
        { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'The Problem of Pain', ref: 'Kap. 2', year: '1940', quote: `Man kann ihm Wunder zuschreiben, aber nicht Unsinn. Das ist keine Grenze seiner Macht.`, original: 'You may attribute miracles to Him, but not nonsense. This is no limit to His power.', translation: 'eigene Übersetzung', status: 'verbatim' },
      ],
    },
    {
      person: 'anselm',
      role: 'als Metaphysiker der Vollkommenheit',
      text: `Anselm stellt sich im Proslogion selbst die Frage, wie Gott allmächtig sein kann, wenn er vieles nicht kann – etwa vergehen, lügen oder Wahres falsch machen. Seine Antwort: Solches „Können" ist kein Können, sondern ein Unvermögen. Wer lügen kann, kann etwas tun, das ihm schadet; je mehr jemand solches „kann", desto mehr können Widrigkeiten und Verkehrtheit über ihn. Gott ist also gerade deshalb wahrhaft allmächtig, weil er nichts aus Unvermögen kann und nichts gegen ihn vermag.`,
      sources: [
        { kind: 'fachliteratur', author: 'Anselm von Canterbury', work: 'Proslogion', ref: 'Kap. 7', year: 'um 1077', status: 'paraphrase', quote: 'Vergehen-, Lügen- oder Irren-Können ist nicht Macht, sondern Ohnmacht; darum ist Gott wahrhaft allmächtig.' },
      ],
    },
    {
      person: 'george-mavrodes',
      role: 'als analytischer Religionsphilosoph',
      text: `Mavrodes zeigte 1963 in einem nur dreiseitigen Aufsatz, dass das Stein-Paradox auf einer „Pseudo-Aufgabe" beruht. Unter der Annahme, dass Gott allmächtig ist, beschreibt „ein Stein, zu schwer für Gott" etwas Widersprüchliches. Dass Gott ihn nicht erschaffen kann, ist dann so wenig ein Mangel wie die Unfähigkeit, einen viereckigen Kreis zu zeichnen. Unter der Annahme, dass Gott *nicht* allmächtig ist, ist die Frage ohnehin uninteressant. In keinem Fall folgt eine Inkohärenz.`,
      sources: [
        { kind: 'fachliteratur', author: 'George I. Mavrodes', work: '„Some Puzzles Concerning Omnipotence", The Philosophical Review 72', year: '1963', ref: 'S. 221–223', status: 'paraphrase', quote: 'Der „unhebbare Stein" ist eine Pseudo-Aufgabe; ihr Nicht-Vollbringen begrenzt die Allmacht nicht.' },
      ],
    },
    {
      person: 'plantinga',
      role: 'als Logiker der Modalität',
      text: `Plantinga hat die Diskussion um die Grenzen der Allmacht mit dem Werkzeug der Modallogik präzisiert. Bekannt ist sein Hinweis, dass es nicht genügt, Allmacht als „alles tun können, was ein Wesen tun kann" zu definieren – sonst wäre ein Wesen „McEar", das nur sein Ohr kratzen kann, allmächtig. Die heutige Fachdiskussion präzisiert deshalb: Allmacht ist die Fähigkeit, jeden Sachverhalt herbeizuführen, den herbeizuführen überhaupt möglich ist. Dass man Definitionen verfeinern muss, zeigt nicht, dass der Begriff leer ist – genauso wenig wie beim Begriff „Wissen".`,
      sources: [
        { kind: 'fachliteratur', author: 'Alvin Plantinga', work: 'God and Other Minds', year: '1967', status: 'paraphrase', quote: 'Das „McEar"-Gegenbeispiel gegen zu einfache Allmachtsdefinitionen.' },
      ],
    },
  ],
  dialog: [
    {
      id: 'beide-hoerner-begrenzen',
      objection: `„Ganz einfach: Entweder Gott kann den Stein erschaffen – dann kann er ihn nicht heben. Oder er kann ihn nicht erschaffen. In beiden Fällen gibt es etwas, das er nicht kann. Also ist er nicht allmächtig."`,
      objectionBy: 'J. L. Mackie / C. Wade Savage (sinngemäß)',
      targetsPremise: 3,
      answer: `Das Dilemma funktioniert nur, wenn „allmächtig" heißt: auch Widersprüche tun können. Das hat kein Theologe je behauptet. Wenn Gott allmächtig ist, kann er jeden Stein heben; „ein Stein, den der Allmächtige nicht heben kann" ist dann so sinnvoll wie „ein viereckiger Kreis". Wer das nicht erschaffen kann, dem fehlt keine Macht – es gibt schlicht nichts zu erschaffen.`,
      detail: `Die Struktur des Paradoxes: Es behandelt eine widersprüchliche Beschreibung wie eine echte Aufgabe. George Mavrodes nannte das eine „Pseudo-Aufgabe". Man kann sie in die Form bringen: „Kann Gott eine Aufgabe erfüllen, die so beschaffen ist, dass Gott sie nicht erfüllen kann?" Die Frage enthält ihre eigene Verneinung.`,
      questionsBack: [`Wenn Gott keinen viereckigen Kreis zeichnen kann – welcher Gegenstand genau entgeht dann seiner Macht?`],
      followUps: [
        {
          id: 'logik-steht-ueber-gott',
          objection: `„Dann steht die Logik über Gott. Er ist an Gesetze gebunden, die er nicht gemacht hat. Ein Gott, der der Logik gehorchen muss, ist nicht souverän."`,
          objectionBy: 'Graham Oppy / populärer Einwand',
          answer: `Die Logik ist kein Gesetzbuch neben Gott, sondern Ausdruck seines eigenen vernünftigen Wesens. Johannes nennt den Sohn den *Logos* – das Wort, die Vernunft Gottes (Joh 1,1). Gott „gehorcht" der Logik so wenig, wie er seiner Güte „gehorcht": Er *ist* gut und vernünftig. Ein Widerspruch ist kein Ding, das Gott vorenthalten wird, sondern das Fehlen jedes Dings.`,
          voices: [
            {
              person: 'athanasius',
              role: 'als Theologe des Logos',
              text: `Für Athanasius ist die Welt vernünftig geordnet, weil sie durch den Logos geschaffen ist, der selbst die Vernunft des Vaters ist. Die Ordnung der Schöpfung ist kein fremdes Gesetz, dem Gott sich beugt, sondern Abdruck des göttlichen Logos selbst (vgl. Contra Gentes 40–42).`,
              sources: [
                { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Gegen die Heiden (Contra Gentes)', ref: '40–42', status: 'paraphrase', quote: 'Der Logos des Vaters ordnet und hält die ganze Schöpfung zusammen.' },
              ],
            },
          ],
          followUps: [
            {
              id: 'descartes-gott-kann-alles',
              objection: `„Descartes hat das konsequenter gesehen: Gott hat sogar die ewigen Wahrheiten erschaffen und hätte 2 + 2 = 5 machen können. Warum sagst du nicht einfach, Gott kann auch das Unmögliche?"`,
              objectionBy: 'Harry Frankfurt (Rekonstruktion von Descartes)',
              answer: `Das kann man sagen – aber dann löst sich das Paradox ebenfalls auf: Ein Gott, der Widersprüche wahr machen kann, könnte den unhebbaren Stein erschaffen *und* ihn trotzdem heben. Harry Frankfurt hat genau das 1964 gezeigt. Die christliche Tradition lehnt diese Sicht trotzdem ab, weil sie jede Aussage über Gott sinnlos machen würde – auch „Gott ist treu" könnte dann zugleich falsch sein.`,
              sources: [
                { kind: 'fachliteratur', author: 'Harry G. Frankfurt', work: '„The Logic of Omnipotence", The Philosophical Review 73', year: '1964', status: 'paraphrase', quote: 'Wenn Gott Unmögliches tun kann, kann er auch den unhebbaren Stein erschaffen und anschließend heben – das Paradox entfällt.' },
                { kind: 'fachliteratur', author: 'René Descartes', work: 'Brief an Mersenne vom 15. April 1630', status: 'paraphrase', quote: 'Die ewigen mathematischen Wahrheiten sind von Gott eingesetzt und hängen ganz von ihm ab.' },
              ],
              followUps: [
                {
                  id: 'allmacht-dann-leer',
                  objection: `„Dann ist deine Allmacht leer: ‚Gott kann alles, was er kann.' Das ist eine Tautologie, die nichts aussagt."`,
                  objectionBy: 'Anthony Kenny (The God of the Philosophers, 1979, sinngemäß)',
                  answer: `Nein. „Alles logisch Mögliche" ist ungeheuer viel: ein Universum aus dem Nichts erschaffen, Naturgesetze festlegen, Tote auferwecken, jeden Menschen gleichzeitig hören. Ausgeschlossen ist nur, was gar keinen Inhalt hat. Das ist so wenig leer wie die Aussage, ein Schachgroßmeister könne „jeden erlaubten Zug" spielen – auch wenn er keinen Zug spielen kann, der zugleich erlaubt und unerlaubt ist.`,
                  detail: `Anthony Kenny, ein agnostischer Philosoph und ehemaliger katholischer Priester, hält die klassischen Gottesattribute für schwer kohärent zu definieren. Die Fachdiskussion seit Flint & Freddoso (1983) hat präzise Definitionen vorgelegt: Allmacht als Fähigkeit, jeden Sachverhalt herbeizuführen, den herbeizuführen für irgendein Wesen in der jeweiligen Lage überhaupt möglich ist. Darüber wird weiter gestritten – aber „schwierig zu definieren" ist nicht „inkohärent".`,
                  questionsBack: [`Nenne mir eine Handlung mit echtem Inhalt, die nach dieser Definition ausgeschlossen wäre.`],
                },
              ],
            },
          ],
        },
        {
          id: 'mavrodes-zirkulaer',
          objection: `„Mavrodes' Lösung ist zirkulär: Er setzt voraus, dass Gott allmächtig ist, um zu zeigen, dass der Stein widersprüchlich ist. Genau das steht aber zur Debatte."`,
          objectionBy: 'C. Wade Savage (1967)',
          targetsPremise: 2,
          answer: `Savage selbst hat eine Lösung ohne Zirkel vorgelegt: Der Satz „Gott kann keinen Stein erschaffen, den er nicht heben kann" bedeutet nur: „Jeden Stein, den Gott erschaffen kann, kann er auch heben." Das ist keine Einschränkung, sondern der Ausdruck unbegrenzter Macht. Ein Mangel läge nur vor, wenn es ein bestimmtes Gewicht gäbe, das Gott nicht erschaffen oder nicht heben könnte – und das folgt aus dem Paradox nicht.`,
          sources: [
            { kind: 'fachliteratur', author: 'C. Wade Savage', work: '„The Paradox of the Stone", The Philosophical Review 76', year: '1967', status: 'paraphrase', quote: '„x kann keinen Stein erschaffen, den x nicht heben kann" impliziert keine Begrenzung der Macht von x.', note: 'Savage war selbst kein Apologet; seine Lösung gilt als die logisch sauberste.' },
          ],
          followUps: [
            {
              id: 'mensch-kann-mehr',
              objection: `„Aber ein Mensch kann einen Stein machen, den er nicht heben kann – einen großen Betonblock gießen. Also kann der Mensch etwas, das Gott nicht kann!"`,
              objectionBy: 'populärer Einwand',
              answer: `Was der Mensch hier „kann", ist im Kern eine Schwäche: Er ist so begrenzt, dass er Dinge herstellen kann, die ihn übersteigen. Für Gott hieße das Gleiche, etwas Mächtigeres als das Allmächtige zu erschaffen – ein Widerspruch. Es ist wie beim Vergessen: Ich kann etwas vergessen, ein allwissendes Wesen nicht. Hat es deshalb eine Fähigkeit weniger?`,
              followUps: [
                {
                  id: 'gott-kann-nicht-suendigen',
                  objection: `„Dann gibt es noch mehr, was Gott nicht kann: lügen, sündigen, sterben. Menschen können das alles. Also ist Gott in vieler Hinsicht weniger fähig als wir."`,
                  objectionBy: 'Michael Martin (The Impossibility of God, sinngemäß)',
                  answer: `Lügen, Sündigen und Sterben sind keine zusätzlichen Kräfte, sondern Formen des Versagens. Anselm sagt: Wer so etwas „kann", über den haben Verkehrtheit und Vergänglichkeit Macht – das ist Ohnmacht, nicht Macht. Thomas fügt hinzu: Sündigen heißt, im Handeln hinter dem Guten zurückbleiben; das widerspricht der Allmacht. Die Bibel sagt beides zugleich: Gott ist der Allmächtige, und es ist unmöglich, dass er lügt (Hebr 6,18).`,
                  sources: [
                    { kind: 'fachliteratur', author: 'Thomas von Aquin', work: 'Summa theologiae', ref: 'I q.25 a.3 ad 2', status: 'paraphrase', quote: 'Sündigen heißt, in der Tat zu versagen; Sündigen-Können widerspricht darum der Allmacht.' },
                  ],
                  followUps: [
                    {
                      id: 'rueckzug-maximal-maechtig',
                      objection: `„Du ziehst dich also zurück: Gott ist nicht ‚allmächtig', sondern nur ‚maximal mächtig'. Die naive biblische Allmacht – ‚bei Gott ist kein Ding unmöglich' – hast du aufgegeben."`,
                      objectionBy: 'Richard Dawkins / Michael Martin (sinngemäß)',
                      answer: `Es gibt keinen Rückzug, weil die Bibel nie mehr behauptet hat. Dieselbe Schrift, die sagt „bei Gott ist kein Ding unmöglich", sagt „es ist unmöglich, dass Gott lügt". Der Begriff *Pantokrator* meint Herrschaft über alles Wirkliche. Augustinus schrieb um 415: Gott kann nicht sterben und nicht getäuscht werden – gerade *deshalb* ist er allmächtig. Das ist keine moderne Ausrede, sondern die älteste christliche Auslegung.`,
                      detail: `Der katholische Philosoph Peter Geach schlug 1973 sogar vor, statt „omnipotent" (alles können) lieber „almighty" (Herr über alles, *Pantokrator*) zu sagen, weil das der biblischen Sprache näher sei. Ob man den Begriff so oder so fasst: Der christliche Glaube braucht einen Gott, dem *nichts Wirkliches* widerstehen kann – und genau das behauptet er.`,
                      sources: [
                        { kind: 'fachliteratur', author: 'Peter Geach', work: '„Omnipotence", Philosophy 48', year: '1973', status: 'paraphrase', quote: 'Der biblische Begriff ist „Allherrschaft" (almightiness), nicht die Fähigkeit zu allem Denkbaren.' },
                        { kind: 'kirchenvater', author: 'Augustinus', work: 'Vom Gottesstaat (De civitate Dei)', ref: 'V,10', status: 'paraphrase', quote: 'Er heißt allmächtig, weil er tut, was er will, und nicht erleidet, was er nicht will.' },
                      ],
                      questionsBack: [`Zeig mir einen christlichen Theologen vor der Neuzeit, der gelehrt hat, Gott könne Widersprüche wahr machen.`],
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
      id: 'gott-sich-selbst-vernichten',
      objection: `„Gut, dann anders: Kann Gott sich selbst vernichten? Kann er einen zweiten Gott erschaffen, der genauso mächtig ist wie er?"`,
      objectionBy: 'populärer Einwand (Variante des Paradoxes)',
      answer: `Beides sind wieder Widersprüche. Gott ist das notwendig existierende Sein – ein notwendiges Wesen, das aufhört zu existieren, ist ein Widerspruch. Und ein „erschaffener Gott" wäre ein Wesen, das zugleich ungeschaffen (sonst nicht Gott) und geschaffen ist. Die Frage klingt kühn, beschreibt aber keine Handlung.`,
      followUps: [
        {
          id: 'trinitaet-zweiter-gott',
          objection: `„Aber ihr Christen sagt doch selbst, der Vater habe den Sohn ‚gezeugt'. Ist das nicht genau ein zweiter Gott?"`,
          objectionBy: 'Shabir Ally / muslimischer Einwand im gleichen Gespräch',
          answer: `Nein – „gezeugt, nicht geschaffen" heißt es im Bekenntnis von Nizäa ausdrücklich. Der Sohn ist kein zweites Wesen, das irgendwann hervorgebracht wurde, sondern ewig aus dem Vater, eines Wesens (*homoousios*) mit ihm. Es gibt nicht zwei Götter, sondern einen Gott in drei Hypostasen. Das ist das Gegenteil eines „erschaffenen zweiten Gottes".`,
          detail: `Siehe „1+1+1=3 – die Trinität ist unlogisch" und „Die Trinität ist Vielgötterei (Schirk)". Athanasius argumentierte gegen Arius gerade damit, dass ein geschaffener Sohn kein wahrer Gott sein und uns nicht vergöttlichen könnte.`,
          sources: [
            { kind: 'konzil', work: 'Glaubensbekenntnis von Nizäa', year: '325', quote: `… gezeugt, nicht geschaffen, eines Wesens mit dem Vater …`, original: 'γεννηθέντα, οὐ ποιηθέντα, ὁμοούσιον τῷ πατρί', status: 'verbatim' },
          ],
        },
      ],
    },
    {
      id: 'freie-wesen-immer-gut',
      objection: `„Wenn Gott allmächtig ist, hätte er Menschen erschaffen können, die frei sind und trotzdem immer das Gute wählen. Dass er es nicht getan hat, zeigt: Entweder er kann es nicht, oder er will es nicht."`,
      objectionBy: 'J. L. Mackie (Evil and Omnipotence, 1955)',
      answer: `„Jemanden so erschaffen, dass er *frei* immer das Gute wählt, und zwar weil Gott es festlegt" ist selbst ein Widerspruch. Wenn Gott die Wahl bestimmt, ist sie nicht frei; wenn sie frei ist, liegt sie beim Geschöpf. Alvin Plantinga hat gezeigt, dass es durchaus möglich ist, dass Gott keine Welt erschaffen *kann*, in der freie Geschöpfe nie sündigen – ohne dass ihm Macht fehlt.`,
      sources: [
        { kind: 'fachliteratur', author: 'Alvin Plantinga', work: 'God, Freedom, and Evil', year: '1974', status: 'paraphrase', quote: 'Die Verteidigung aus der Willensfreiheit: Es ist möglich, dass Gott keine Welt mit freien Wesen ohne moralisches Übel verwirklichen kann.' },
      ],
      followUps: [
        {
          id: 'himmel-frei-ohne-suende',
          objection: `„Aber im Himmel sind die Menschen nach eurer Lehre frei und sündigen nicht mehr. Also ist eine solche Welt möglich – warum hat Gott nicht gleich den Himmel erschaffen?"`,
          objectionBy: 'Graham Oppy / Theodizee-Debatte',
          answer: `Im Himmel sündigen die Erlösten nicht, weil ihr Charakter durch ein Leben in freier Antwort auf Gott gereift ist. Das ist das Ergebnis eines Weges, nicht ein Startzustand, den man fertig liefern kann. Ein gereifter, frei gewachsener Charakter kann nicht ohne Geschichte erschaffen werden – so wenig wie eine Freundschaft von zwanzig Jahren in einer Sekunde.`,
          followUps: [
            {
              id: 'gott-frei-und-unfaehig-zu-suendigen',
              objection: `„Gott selbst ist frei und kann trotzdem nicht sündigen. Also schließen sich Freiheit und Sündlosigkeit nicht aus. Warum hat er uns nicht diese göttliche Freiheit gegeben?"`,
              objectionBy: 'Wes Morriston / Theodizee-Debatte',
              answer: `Gottes Sündlosigkeit gehört zu seinem ungeschaffenen Wesen – er ist die Güte selbst. Ein Geschöpf beginnt notwendig endlich und unvollendet; Vollkommenheit kann es nur in Gemeinschaft mit Gott empfangen und wachsen lassen. Genau das ist nach orthodoxer Lehre das Ziel des Menschen: die Vergöttlichung (*Theosis*), in der wir an Gottes Freiheit vom Bösen Anteil bekommen – als Geschenk und in freier Mitwirkung.`,
              voices: [
                {
                  person: 'irenaeus',
                  role: 'als Theologe des Wachstums',
                  text: `Irenäus fragt, warum Gott den Menschen nicht von Anfang an vollkommen geschaffen hat. Seine Antwort: Gott hätte es geben können, aber der Mensch konnte es nicht empfangen – wie eine Mutter ihrem Säugling feste Nahrung geben könnte, das Kind sie aber noch nicht verträgt. Das Geschöpf muss wachsen, reifen und so zur Gemeinschaft mit dem Ungeschaffenen gelangen.`,
                  sources: [
                    { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Gegen die Häresien (Adversus Haereses)', ref: 'IV,38,1–3', status: 'paraphrase', quote: 'Der Mensch konnte die Vollkommenheit am Anfang nicht empfangen, weil er noch ein Kind war; er sollte wachsen und reifen.' },
                  ],
                },
              ],
              detail: `Athanasius: „Er wurde Mensch, damit wir vergöttlicht würden" (De Inc. 54). Die Vergöttlichung ist nicht Verwandlung in Gottes Wesen, sondern Teilhabe an seinem Leben. Siehe auch das Thema „Das Problem des Leids".`,
            },
          ],
        },
      ],
    },
    {
      id: 'allwissenheit-gegen-allmacht',
      objection: `„Allmacht und Allwissenheit schließen sich aus: Wenn Gott schon weiß, was er morgen tun wird, kann er es nicht mehr ändern. Dann ist er nicht allmächtig. Kann der allwissende Gott seine Meinung ändern?"`,
      objectionBy: 'Richard Dawkins (The God Delusion, Kap. 3, nach einem Gedicht von Karen Owens)',
      answer: `Gott weiß, was er tun wird, weil er es will – sein Wissen folgt seinem freien Willen, es zwingt ihn nicht. Dass er seine Pläne nicht „umwirft", ist keine Ohnmacht, sondern Vollkommenheit: Man ändert seine Meinung, wenn man etwas übersehen hat oder dazulernt. Ein Wesen, das alles weiß und vollkommen gut ist, hat dazu keinen Grund.`,
      detail: `Siehe „Allwissenheit und Unveränderlichkeit widersprechen sich" und „Wenn Gott alles vorherweiß, sind wir nicht frei". Wenn Gott zeitlos ist (Boethius), ist sein Wissen ohnehin kein „Vorher"-Wissen, sondern eine ewige Gegenwart.`,
      sources: [
        { kind: 'gegner', author: 'Richard Dawkins', work: 'The God Delusion', ref: 'Kap. 3', year: '2006', status: 'paraphrase', quote: 'Allwissenheit und Allmacht seien unvereinbar: Ein Gott, der seine Zukunft kennt, könne sie nicht ändern.' },
      ],
      followUps: [
        {
          id: 'dann-ist-gott-gefangen',
          objection: `„Dann ist Gott ein Gefangener seines eigenen Wissens – er kann nur noch abspulen, was er sowieso weiß. Das ist keine Freiheit."`,
          objectionBy: 'Dawkins / populärer Einwand',
          answer: `Freiheit heißt nicht Unsicherheit über sich selbst, sondern: aus eigenem Willen handeln, ohne äußeren Zwang. Ein Mensch, der genau weiß, dass er sein Kind morgen nicht verraten wird, ist darin nicht unfrei – sondern treu. Gottes Wissen ist nicht ein Drehbuch, das ihm vorgegeben wird, sondern das Wissen um seinen eigenen, freien Entschluss.`,
          questionsBack: [`Ist ein Mensch, der genau weiß, dass er seinen Freund nie verraten wird, deshalb unfrei?`],
        },
      ],
    },
    {
      id: 'begriff-nicht-definierbar',
      objection: `„Selbst Philosophen, die an Gott glauben, streiten seit Jahrzehnten darüber, wie man Allmacht definieren soll. Jede Definition hat Gegenbeispiele. Das zeigt doch, dass der Begriff verworren ist."`,
      objectionBy: 'Anthony Kenny / Michael Martin',
      answer: `Dass ein Begriff schwer exakt zu definieren ist, zeigt nicht, dass er inkohärent ist. Auch „Wissen", „Ursache" oder „Zeit" sind seit Jahrhunderten umstritten – und niemand folgert daraus, es gäbe kein Wissen. Der Kerngehalt ist klar: Gott kann alles tun, was einen widerspruchsfreien Inhalt hat und mit seiner Güte vereinbar ist. Die Fachdiskussion feilt an Randfällen.`,
      followUps: [
        {
          id: 'mcear-gegenbeispiel',
          objection: `„Wenn Allmacht heißt ‚alles tun können, was mit dem eigenen Wesen vereinbar ist', dann wäre ein Wesen, dessen Wesen nur Ohrenkratzen erlaubt, auch allmächtig. Absurd."`,
          objectionBy: 'Gegenbeispiel „McEar" (bekannt durch Alvin Plantinga)',
          answer: `Richtig – deshalb definiert niemand Allmacht so. Die verbesserten Definitionen (etwa Flint & Freddoso) messen die Macht nicht am eigenen Wesen, sondern daran, was *überhaupt* herbeigeführt werden kann. McEar kann fast nichts davon, Gott kann alles davon. Dass Philosophen ihre Definitionen an Gegenbeispielen schärfen, ist normale Arbeit, keine Widerlegung.`,
          followUps: [
            {
              id: 'warum-dann-glauben',
              objection: `„Und warum sollte ich glauben, dass es so ein Wesen gibt? Die Kohärenz des Begriffs beweist noch keine Existenz."`,
              objectionBy: 'Graham Oppy',
              answer: `Völlig richtig – und das ist ein ehrlicher Fortschritt im Gespräch: Das Stein-Paradox zeigt nicht, dass Gott unmöglich ist. Ob er existiert, ist eine andere Frage, die man mit den Gottesbeweisen, der Auferstehung Jesu und der religiösen Erfahrung angehen muss. Das Paradox räumt nur ein Hindernis weg, das nie eines war.`,
              detail: `Weiter mit „Das kosmologische Kalam-Argument ist widerlegt", „Das Kontingenzargument ist ein Trugschluss" und dem Themenblock „Die Auferstehung Jesu".`,
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Was genau soll Gott tun, wenn er einen „Stein, den der Allmächtige nicht heben kann" erschafft – kannst du die Handlung beschreiben, ohne dir zu widersprechen?`,
    `Ist es für dich eine Schwäche, dass ein allwissendes Wesen nichts vergessen kann?`,
    `Wenn Gott auch Widersprüche wahr machen könnte – hätte dein Paradox dann noch Kraft?`,
    `Welcher Theologe hat je behauptet, Allmacht schließe Unsinn ein?`,
  ],
  avoid: [
    `„Gott kann alles, auch das Unmögliche." – Das macht jede Aussage über Gott beliebig und widerspricht der Bibel selbst (Hebr 6,18).`,
    `Die Frage als dumm abtun. Sie stammt aus der seriösen Philosophie (Mackie, Savage) und verdient eine ruhige, präzise Antwort.`,
    `„Gott steht über der Logik, darum gilt das nicht für ihn." – Damit gibt man das Gespräch auf und macht den Glauben irrational.`,
  ],
  concessions: [
    `Die genaue Definition der Allmacht ist in der Fachphilosophie bis heute umstritten; es gibt mehrere konkurrierende Vorschläge.`,
    `Volkstümliche christliche Rede („Gott kann einfach alles") ist oft unpräzise und lädt zu solchen Paradoxien ein.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Über den Schmerz (The Problem of Pain)', ref: 'Kap. 2', year: '1940', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Thomas von Aquin', work: 'Summa theologiae', ref: 'I q.25', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'George I. Mavrodes', work: '„Some Puzzles Concerning Omnipotence", Philosophical Review 72', year: '1963', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Edward Feser', work: 'Five Proofs of the Existence of God', ref: 'Kap. 6 (göttliche Attribute)', year: '2017', status: 'paraphrase' },
    { kind: 'gegner', author: 'Michael Martin & Ricki Monnier (Hg.)', work: 'The Impossibility of God', year: '2003', status: 'paraphrase' },
  ],
  difficulty: 1,
  tags: ['Allmacht', 'Paradox', 'Logik', 'Gottesattribute', 'Mavrodes'],
  related: [
    'gottes-eigenschaften/allwissenheit-unveraenderlichkeit',
    'willensfreiheit/vorherwissen-schliesst-freiheit-aus',
    'theodizee/logisches-problem-des-uebels',
    'islam-trinitaet/trinitaet-unlogisch',
    'atheismus/wer-schuf-gott',
  ],
};

export default claim;
