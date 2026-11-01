import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'grausame-gesetze',
  title: `„Die Bibel fordert grausame Strafen (Steinigung, Todesstrafe)."`,
  proponents: [
    { name: 'Sam Harris', role: 'Neurowissenschaftler und Autor', work: 'Letter to a Christian Nation (2006); The End of Faith (2004)' },
    { name: 'Richard Dawkins', role: 'Evolutionsbiologe, Oxford', work: 'The God Delusion (2006), Kap. 7' },
    { name: 'Dan Savage', role: 'Publizist und LGBT-Aktivist', work: 'Vorträge und Kolumnen (u. a. 2012)' },
    { name: 'Hector Avalos', role: 'Religionswissenschaftler', work: 'Fighting Words (2005)' },
  ],
  steelman: `Die Tora verhängt die Todesstrafe für eine erschreckende Liste von Taten: Sabbatbruch (Ex 31,14; Num 15,32–36), Ehebruch (Lev 20,10), gleichgeschlechtlichen Verkehr (Lev 20,13), Gotteslästerung (Lev 24,16), Zauberei (Ex 22,17), das Verfluchen der Eltern (Lev 20,9) und für den „störrischen und widerspenstigen Sohn", den die eigenen Eltern zur Steinigung vor die Ältesten bringen sollen (Dtn 21,18–21). Die Hinrichtungsart ist oft die Steinigung durch die ganze Gemeinde. Christen behaupten, diese Gesetze stammten vom vollkommen guten Gott. Gleichzeitig ignorieren sie die meisten davon – sie essen Schalentiere, tragen Mischgewebe und steinigen niemanden –, berufen sich aber auf Lev 18,22, wenn es ihnen passt. Entweder waren diese Gesetze gut – dann müssten Christen sie heute fordern –, oder sie waren nie gut – dann stammen sie nicht von Gott. Das „Rosinenpicken" zeigt, dass Christen ihre Moral längst von der säkularen Gesellschaft beziehen.`,
  biblical: {
    summary: `Die Tora ist das Recht eines bestimmten Volkes im Bund vom Sinai, gegeben in eine Welt, deren Gesetzbücher (Hammurabi, Mittelassyrische Gesetze) weit härter waren. Ihre Todesstrafen markieren die **Schwere** eines Vergehens, sind aber von hohen **Verfahrenshürden** umgeben: mindestens zwei oder drei Zeugen (Dtn 17,6; 19,15), Bestrafung falscher Zeugen mit der angestrebten Strafe (Dtn 19,18–19), persönliche Verantwortung der Zeugen, die den ersten Stein werfen müssen (Dtn 17,7). Nur bei Mord ist ein Lösegeld ausdrücklich ausgeschlossen (Num 35,31) – was viele Ausleger als Hinweis lesen, dass bei anderen Kapitalvergehen Ersatzleistungen möglich waren. Christen unterscheiden mit dem Neuen Testament zwischen dem bleibenden **moralischen** Gehalt des Gesetzes und seiner **zivil- und kultrechtlichen** Gestalt für das alte Israel, die in Christus erfüllt ist (Mk 7,19; Apg 15; Hebr 8,13).`,
    detail: `**Verfahrensschutz.** Das Zwei-Zeugen-Prinzip schloss Verurteilungen aufgrund von Indizien oder Geständnissen unter Folter aus. Der falsche Zeuge erlitt, was er dem anderen zugedacht hatte (Dtn 19,19) – ein starker Schutz gegen Verleumdung. Die Asylstädte (Num 35) schützten den unabsichtlichen Totschläger vor der Blutrache.

**Das Lösegeld-Argument (Num 35,31).** „Ihr sollt keine Versöhnung (*kōfer*) nehmen für die Seele des Totschlägers." Weil dies nur für Mord ausdrücklich gesagt wird, folgern Ausleger wie Walter Kaiser, dass bei anderen Kapitalvergehen ein Lösegeld möglich war; die Todesstrafe wäre dann die *Höchststrafe*, nicht die zwingende. Diese Deutung ist plausibel, aber nicht unumstritten.

**Der „widerspenstige Sohn" (Dtn 21,18–21).** Es geht nicht um ein trotziges Kind, sondern um einen erwachsenen „Schlemmer und Säufer", der gewaltsam gegen seine Eltern vorgeht. Entscheidend: Das Gesetz nimmt dem Vater die Macht über Leben und Tod und überträgt sie einem öffentlichen Gericht der Ältesten, beide Eltern müssen übereinstimmen. Im römischen Recht dagegen besaß der *pater familias* lange das Recht, seine Kinder ohne Gericht zu töten. Kein biblischer Bericht erzählt von einer solchen Hinrichtung; der Talmud sagt: „Einen störrischen und widerspenstigen Sohn hat es nie gegeben und wird es nie geben" (bSanh 71a).

**Lex talionis** („Auge um Auge", Ex 21,23–25) ist eine Regel für Richter, die die Strafe begrenzt und für alle gleich macht – im Kodex Hammurabi hing die Strafe vom Stand des Opfers ab (§ 196–199). Ex 21,26–27 wendet sie sogar zugunsten des Sklaven an.

**Erfüllung in Christus.** Jesus erklärt alle Speisen für rein (Mk 7,19); das Apostelkonzil befreit die Heidenchristen vom mosaischen Gesetz (Apg 15); der Hebräerbrief nennt den alten Bund „veraltet" (Hebr 8,13). Zugleich bestätigt das NT die moralischen Gebote (Röm 13,8–10; 1 Kor 6,9–11). Paulus nennt das Gesetz einen „Zuchtmeister auf Christus hin" (Gal 3,24).`,
    sources: [
      { kind: 'bibel', work: 'Deuteronomium', ref: '17,6–7', quote: `Auf zweier oder dreier Zeugen Mund soll sterben, wer des Todes wert ist; aber auf eines einzigen Zeugen Mund soll er nicht sterben. Die Hand der Zeugen soll die erste sein.`, status: 'paraphrase' },
      { kind: 'bibel', work: 'Deuteronomium', ref: '19,18–19', quote: `Wird der falsche Zeuge überführt, so sollt ihr ihm tun, wie er gedachte seinem Bruder zu tun.`, status: 'paraphrase' },
      { kind: 'bibel', work: 'Numeri', ref: '35,31', quote: `Und ihr sollt keine Versöhnung nehmen für die Seele des Totschlägers; denn er ist des Todes schuldig, und er soll des Todes sterben.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Markus', ref: '7,19', quote: `Damit erklärte er alle Speisen für rein.`, status: 'paraphrase' },
      { kind: 'bibel', work: 'Galater', ref: '3,24', quote: `Also ist das Gesetz unser Zuchtmeister gewesen auf Christum, daß wir durch den Glauben gerecht würden.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'juedisch', work: 'Babylonischer Talmud, Sanhedrin', ref: '71a', quote: `Einen störrischen und widerspenstigen Sohn hat es nie gegeben und wird es nie geben.`, status: 'paraphrase' },
    ],
  },
  church: {
    summary: `Die Kirche hat das mosaische Zivil- und Strafrecht nie als ihr eigenes Recht durchgesetzt. Schon Irenäus (um 180) unterschied zwischen den Geboten des Dekalogs, die dem natürlichen Sittengesetz entsprechen und bleiben, und den Vorschriften, die Israel „wegen der Härte des Herzens" und als Vorbilder auf Christus hin gegeben wurden. Augustinus erklärte gegen den Manichäer Faustus, die kultischen Vorschriften seien Schatten und Bilder, die in Christus erfüllt sind. Die koptische Kirche liest das Gesetz christologisch und geistlich: Es offenbart Gottes Heiligkeit, überführt von Sünde und führt zu Christus, dem barmherzigen Richter.`,
    sources: [
      { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Adversus Haereses', ref: 'IV,15–16', year: 'um 180', quote: `Die natürlichen Gebote des Dekalogs bleiben für alle; andere Vorschriften wurden Israel als Zuchtmittel und Vorbilder gegeben.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Augustinus', work: 'Contra Faustum Manichaeum', ref: 'Buch VI und X', year: 'um 400', quote: `Die zeremoniellen Vorschriften des Alten Bundes waren Verheißungen und Bilder, die durch Christus erfüllt sind; die sittlichen Gebote gelten fort.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Historiker des Alten Orients bestätigen, dass die Tora in vielen Punkten milder und egalitärer war als die Rechtssammlungen ihrer Umwelt (keine Verstümmelungsstrafen außer Dtn 25,11–12, keine Standesunterschiede bei der Talion, Schutz von Sklaven und Fremden). Zugleich ist unstrittig, dass sie Todesstrafen für religiöse und sexuelle Vergehen kennt, die modernen Rechtsstaaten fremd sind. In der Forschung ist umstritten, wie oft diese Strafen tatsächlich vollstreckt wurden; die rabbinische Rechtspraxis machte Hinrichtungen durch extreme Verfahrensanforderungen nahezu unmöglich.`,
    sources: [
      { kind: 'juedisch', work: 'Mischna, Makkot', ref: '1,10', year: 'um 200', quote: `Ein Sanhedrin, der einmal in sieben Jahren hinrichtet, heißt „verderblich". Rabbi Eleasar ben Asarja: einmal in siebzig Jahren. Rabbi Tarfon und Rabbi Akiba: Wären wir im Sanhedrin gewesen, wäre nie ein Mensch hingerichtet worden.`, status: 'paraphrase' },
      { kind: 'sonstiges', work: 'Kodex Hammurabi', ref: '§ 196–199', year: 'um 1750 v. Chr.', quote: `Schlägt ein Freier einem Freien das Auge aus, verliert er sein Auge; schlägt er einem Gemeinfreien das Auge aus, zahlt er eine Mine Silber.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Die Todesstrafen der Tora galten für das alte Israel im Sinai-Bund, nicht für die Kirche – kein Christ fordert heute die Steinigung. Schon damals gab es hohe Hürden: zwei bis drei Augenzeugen, Bestrafung falscher Zeugen, und die Rabbinen sagten, ein Gericht, das alle siebzig Jahre einmal hinrichtet, sei „verderblich". Christus hat das Gesetz erfüllt; seine moralischen Grundsätze bleiben, seine zivile und kultische Gestalt nicht. Und Jesus selbst hat zur Ehebrecherin gesagt: „Wer unter euch ohne Sünde ist, der werfe den ersten Stein."`,
  keyPoints: [
    `**Bundesrecht Israels, nicht der Kirche:** Die Kirche ist kein Staat und hat das mosaische Strafrecht nie durchgesetzt (Apg 15; Hebr 8,13).`,
    `**Hohe Verfahrenshürden:** zwei bis drei Zeugen (Dtn 17,6), Strafe für falsche Zeugen (Dtn 19,19), Asylstädte (Num 35).`,
    `**Höchststrafe statt Pflichtstrafe:** Nur bei Mord ist Lösegeld ausgeschlossen (Num 35,31) – ein Hinweis auf mögliche Ersatzleistungen bei anderen Vergehen.`,
    `**Im Vergleich milder:** Gleiche Talion für alle statt Standesrecht (Hammurabi § 196–199); kaum Verstümmelungsstrafen.`,
    `**Moralischer Kern vs. zivile Gestalt:** Das NT bestätigt die sittlichen Gebote, erklärt aber Speise- und Kultgesetze für erfüllt (Mk 7,19) – keine Erfindung, sondern apostolische Lehre (Irenäus, Augustinus).`,
  ],
  voices: [
    {
      person: 'kitchen',
      role: 'als Ägyptologe und Altorientalist',
      text: `Kenneth Kitchen hat gemeinsam mit Paul Lawrence die Rechts- und Bundestexte des Alten Orients in einer großen Edition zusammengestellt. Sein Befund: Die Tora gehört formal in die Welt der altorientalischen Verträge und Gesetzessammlungen, unterscheidet sich aber inhaltlich deutlich – sie bindet das Recht an den Bund mit Gott, sie kennt keine Standesunterschiede im Strafmaß, und sie schützt Schwache (Witwen, Waisen, Fremde, Sklaven) in einer Weise, die in den Nachbarkulturen fehlt.`,
      sources: [{ kind: 'fachliteratur', author: 'Kenneth A. Kitchen; Paul J. N. Lawrence', work: 'Treaty, Law and Covenant in the Ancient Near East', year: '2012', status: 'paraphrase' }],
    },
    {
      person: 'irenaeus',
      role: 'als Theologe der Heilsgeschichte',
      text: `Irenäus argumentiert gegen die Gnostiker, die das Gesetz einem niederen Gott zuschrieben: Derselbe Gott hat das Gesetz gegeben und Christus gesandt. Die Gebote des Dekalogs entsprechen dem natürlichen Gesetz, das Gott von Anfang an ins Herz des Menschen gelegt hat; die übrigen Vorschriften dienten der Erziehung eines „harten" Volkes und als Vorbilder auf das Kommende. Für Irenäus ist Gottes Handeln eine *Pädagogik*: Er führt die Menschheit von der Knechtschaft zur Freiheit der Kinder Gottes.`,
      sources: [{ kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Adversus Haereses', ref: 'IV,13–16', status: 'paraphrase' }],
    },
    {
      person: 'augustinus',
      role: 'als Apologet gegen den Manichäismus',
      text: `Der Manichäer Faustus verspottete die Christen, weil sie das Alte Testament ehrten, aber Beschneidung, Opfer und Speisegebote nicht hielten. Augustinus antwortet in *Contra Faustum*: Die kultischen Vorschriften waren Verheißungen in Bildern; nachdem das Verheißene in Christus gekommen ist, wäre es widersinnig, an den Bildern festzuhalten – so wie man nach der Ankunft des Bräutigams nicht mehr seinen Brief küsst. Die sittlichen Gebote dagegen gelten unverändert, weil sie Gottes Wesen und die Natur des Menschen ausdrücken.`,
      sources: [{ kind: 'kirchenvater', author: 'Augustinus', work: 'Contra Faustum Manichaeum', ref: 'VI; X; XIX', status: 'paraphrase' }],
    },
    {
      person: 'christopher-wright',
      role: 'als Alttestamentler und Ethiker',
      text: `Christopher Wright schlägt einen „paradigmatischen" Zugang vor: Israels Gesetz ist nicht ein Gesetzbuch zum Kopieren, sondern ein Modellfall, an dem man sieht, wie Gottes Gerechtigkeit in einer konkreten Gesellschaft aussah. Man fragt also nicht „Sollen wir das heute genauso machen?", sondern „Welche Werte – Schutz des Lebens, der Schwachen, der Ehe, Gerechtigkeit vor Gericht – zeigt uns dieses Gesetz, und wie verwirklichen wir sie in unserer Lage?"`,
      sources: [{ kind: 'fachliteratur', author: 'Christopher J. H. Wright', work: 'Old Testament Ethics for the People of God', year: '2004', status: 'paraphrase' }],
    },
    {
      person: 'michael-brown',
      role: 'als Kenner der jüdischen Auslegung',
      text: `Michael Brown erinnert daran, dass das Judentum selbst die Todesstrafen der Tora nie mechanisch angewandt hat. Die rabbinische Tradition machte Hinrichtungen durch Anforderungen wie Vorwarnung des Täters vor Zeugen, Kenntnis der Strafe und strenge Zeugenprüfung faktisch unmöglich. Wer die Tora als „Blutgesetz" liest, ignoriert, wie Israels Lehrer sie über Jahrhunderte verstanden haben.`,
      sources: [{ kind: 'juedisch', work: 'Mischna, Makkot 1,10; Sanhedrin 4–5', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'todesstrafen-liste',
      objection: `Todesstrafe für Sabbatbruch, Ehebruch, Homosexualität, Gotteslästerung und widerspenstige Söhne – durch Steinigung! Das ist barbarisch, und das soll von einem guten Gott kommen?`,
      objectionBy: 'Sam Harris',
      answer: `Die Liste ist real, und ich verstecke sie nicht. Aber man muss sie im Rahmen lesen: Es war das Recht eines Volkes im Bund vom Sinai, mit hohen Hürden – zwei bis drei Augenzeugen, Strafe für falsche Zeugen, die Zeugen mussten selbst den ersten Stein werfen. Die Todesstrafe markierte die Schwere, nicht die alltägliche Praxis; nur bei Mord war ein Lösegeld ausdrücklich ausgeschlossen. Und die Kirche hat dieses Strafrecht nie für sich übernommen.`,
      detail: `Die rabbinische Rechtspraxis bestätigt, dass die Tora nicht als Hinrichtungskatalog verstanden wurde. Die Mischna (Makkot 1,10) nennt ein Gericht, das einmal in sieben Jahren hinrichtet, „verderblich". Für die Debatte entscheidend: Du verteidigst nicht, dass heute jemand gesteinigt werden soll, sondern du erklärst, was diese Gesetze in ihrem Bund bedeuteten.`,
      questionsBack: [
        `Kennst du ein zeitgenössisches Gesetzbuch des Alten Orients, das falsche Zeugen so hart bestraft?`,
        `Wie viele Kapitalverbrechen kannte das englische Strafrecht noch um 1800?`,
      ],
      followUps: [
        {
          id: 'widerspenstiger-sohn',
          objection: `Dtn 21,18–21: Eltern sollen ihren ungehorsamen Sohn zur Steinigung bringen! Das ist Kindesmord per Gesetz.`,
          objectionBy: 'Richard Dawkins',
          answer: `Es geht nicht um ein trotziges Kind, sondern um einen erwachsenen „Schlemmer und Säufer", der gewalttätig gegen seine Eltern ist. Das Gesetz nimmt dem Vater gerade die Macht über Leben und Tod – die er im römischen Recht lange hatte – und überträgt sie einem öffentlichen Gericht; beide Eltern müssen zustimmen. Kein biblischer Text berichtet von einer solchen Hinrichtung.`,
          followUps: [
            {
              id: 'talmud-spaet',
              objection: `Dein Talmud-Zitat, es habe nie einen solchen Sohn gegeben, stammt aus dem 5. Jahrhundert nach Christus. Das sagt nichts über die biblische Zeit.`,
              objectionBy: 'Hector Avalos',
              answer: `Richtig, der Talmud ist spät, und ich benutze ihn nicht als Beweis für die Eisenzeit. Er zeigt aber, wie die jüdische Tradition das Gesetz verstanden hat – als Grenze, nicht als Auftrag. Für die biblische Zeit selbst gilt: Kein einziger Bericht erzählt von einer solchen Hinrichtung, und die Logik des Gesetzes ist die Begrenzung der väterlichen Willkür durch ein öffentliches Verfahren.`,
              followUps: [
                {
                  id: 'achan-familie',
                  objection: `Und Achan in Josua 7? Seine Söhne und Töchter werden mit ihm gesteinigt und verbrannt – für den Diebstahl ihres Vaters. Das widerspricht sogar deinem eigenen Dtn 24,16.`,
                  objectionBy: 'Hector Avalos',
                  answer: `Das ist ein harter Text, und ich glätte ihn nicht. Zwei Dinge sind wichtig: Erstens hatte Achan die Beute **im Familienzelt** vergraben (Jos 7,21–22) – viele Ausleger sehen darin eine Mitwisserschaft des Haushalts. Zweitens ist Josua 7 eine einmalige Erzählung aus der Eroberungszeit, kein Gesetz. Das Gesetz Israels verbietet ausdrücklich, Kinder für die Schuld der Eltern zu töten (Dtn 24,16), und die Propheten schärfen das ein: „Der Sohn soll nicht tragen die Missetat des Vaters" (Ez 18,20).`,
                  detail: `Die Erzählung gehört in den Zusammenhang des „Bannes" (*ḥerem*), der in der Eroberungszeit eine Sonderstellung hatte (siehe Claim zum Kanaaniter-Feldzug). Ehrlich bleibt: Der Text lässt nicht eindeutig erkennen, ob die Kinder mitschuldig waren, und das moderne Gewissen stößt sich daran zu Recht. Für die Debatte entscheidend: Die Bibel selbst stellt als **Rechtsgrundsatz** die individuelle Verantwortung auf – und Hesekiel 18 widmet diesem Prinzip ein ganzes Kapitel. Die Kirche liest Josua im Licht dieses Grundsatzes und im Licht Christi, nicht umgekehrt.`,
                  sources: [
                    { kind: 'bibel', work: '5. Mose (Deuteronomium)', ref: '24,16', quote: `Die Väter sollen nicht für die Kinder noch die Kinder für die Väter sterben, sondern ein jeglicher soll für seine Sünde sterben.`, translation: 'Luther 1912', status: 'verbatim' },
                    { kind: 'bibel', work: 'Hesekiel', ref: '18,20', quote: `Der Sohn soll nicht tragen die Missetat des Vaters, und der Vater soll nicht tragen die Missetat des Sohnes.`, translation: 'Luther 1912', status: 'verbatim' },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'kofer-spekulation',
          objection: `Das Argument mit dem Lösegeld ist Spekulation. Dass bei Mord kein Lösegeld erlaubt ist, heißt nicht, dass es bei Ehebruch erlaubt war.`,
          objectionBy: 'Hector Avalos',
          answer: `Das ist ein fairer Punkt: Die Lösegeld-Deutung ist plausibel, aber nicht bewiesen, und ich stütze mich nicht allein darauf. Die tragenden Argumente sind die Verfahrenshürden, der Bundeskontext und vor allem: Christen sind nicht unter dem mosaischen Zivilrecht. Selbst wenn jede Todesstrafe zwingend gewesen wäre, folgte daraus nicht, dass die Kirche sie heute fordern müsste.`,
        },
      ],
    },
    {
      id: 'rosinenpicken-shrimps',
      objection: `Christen picken sich die Rosinen heraus: Lev 18,22 zitiert ihr gegen Schwule, aber Shrimps esst ihr trotzdem, und Mischgewebe tragt ihr auch. Das ist Heuchelei.`,
      objectionBy: 'Dan Savage',
      answer: `Die Unterscheidung kommt nicht von uns, sondern vom Neuen Testament selbst. Jesus erklärt alle Speisen für rein (Mk 7,19), Petrus lernt das in Apg 10, das Apostelkonzil befreit die Heidenchristen vom mosaischen Gesetz (Apg 15). Die sexualethischen Gebote dagegen werden im NT ausdrücklich wiederholt (Röm 1,26–27; 1 Kor 6,9–11). Das Kriterium ist also einfach: Was bestätigt das Neue Testament, und was erklärt es für erfüllt?`,
      sources: [
        { kind: 'bibel', work: 'Apostelgeschichte', ref: '15,28–29', quote: `Es gefällt dem heiligen Geiste und uns, euch keine Beschwerung mehr aufzulegen denn nur diese nötigen Stücke.`, status: 'paraphrase' },
      ],
      questionsBack: [
        `Wenn ein Gesetz im NT ausdrücklich aufgehoben, ein anderes ausdrücklich bestätigt wird – ist es dann Rosinenpicken, beides zu beachten?`,
      ],
      followUps: [
        {
          id: 'thomas-erfindung',
          objection: `Die Einteilung in „moralisches, zeremonielles und ziviles Gesetz" hat Thomas von Aquin im 13. Jahrhundert erfunden, um sich aus der Affäre zu ziehen.`,
          objectionBy: 'Hector Avalos',
          answer: `Thomas hat die Begriffe systematisiert, aber die Sache ist viel älter: Irenäus unterscheidet um 180 zwischen dem Dekalog als natürlichem Gesetz und den Vorschriften, die Israel zur Erziehung gegeben wurden; selbst der Gnostiker Ptolemäus setzt in seinem *Brief an Flora* (Mitte 2. Jh.) eine solche Dreiteilung voraus. Und vor allem liegt sie schon im Neuen Testament vor: Hebr 8–10 erklärt den Opferkult für erfüllt, Röm 13,8–10 fasst die sittlichen Gebote im Liebesgebot zusammen.`,
          followUps: [
            {
              id: 'kein-jota',
              objection: `Aber Jesus sagt doch selbst: Kein Jota und kein Häkchen vom Gesetz wird vergehen (Mt 5,18). Also gilt alles.`,
              objectionBy: 'Dan Savage',
              answer: `Lies den ganzen Satz: „…bis dass es alles geschehe." Jesus sagt im Vers davor, er sei gekommen, das Gesetz zu *erfüllen* (Mt 5,17). Das Gesetz vergeht nicht, sondern kommt in ihm an sein Ziel – der Opferkult in seinem Opfer, die Reinheitsgebote in der Reinigung des Herzens. Deshalb konnte derselbe Jesus alle Speisen für rein erklären.`,
              followUps: [
                {
                  id: 'jesus-zitiert-todesstrafe',
                  objection: `Jesus hat die Todesstrafe nie abgeschafft. In Mt 15,4 zitiert er sogar zustimmend: „Wer Vater oder Mutter flucht, der soll des Todes sterben." Er wirft den Pharisäern vor, dieses Gesetz zu umgehen!`,
                  objectionBy: 'Hector Avalos',
                  answer: `Lies den Zusammenhang: Jesus kritisiert in Mt 15 eine Praxis, mit der man Geld, das den alten Eltern zustand, als „Opfergabe" erklärte und sie so im Stich ließ. Er zitiert Ex 21,17, um zu zeigen, **wie ernst** Gott das Gebot nimmt, die Eltern zu ehren – nicht, um Hinrichtungen anzuordnen. Als man ihm tatsächlich einen Fall zur Vollstreckung vorlegte oder seine Jünger Feuer auf ein ungastliches Dorf herabrufen wollten, lehnte er ab (Lk 9,54–55).`,
                  detail: `Jesus argumentiert hier innerjüdisch: Ihr beruft euch auf die Tora und hebelt sie zugleich mit euren Überlieferungen aus. Das Zitat dient als Beleg für den Rang des Gebots, nicht als Strafrechtsanweisung. Bezeichnend ist, dass im ganzen Neuen Testament keine einzige Anweisung an die Kirche steht, irgendjemanden für eine Sünde zu töten. Die schärfste Gemeindestrafe ist der Ausschluss aus der Gemeinschaft – mit dem Ziel der Umkehr und Wiederaufnahme (1 Kor 5,5; 2 Kor 2,6–8).`,
                  sources: [
                    { kind: 'bibel', work: 'Matthäus', ref: '15,3–6', status: 'paraphrase', note: 'Jesus gegen die Korban-Praxis, die das Elterngebot aushöhlt.' },
                    { kind: 'bibel', work: 'Lukas', ref: '9,54–55', quote: `Herr, willst du, so wollen wir sagen, dass Feuer vom Himmel falle und verzehre sie … Jesus aber wandte sich um und bedrohte sie.`, status: 'paraphrase' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'heute-steinigen',
      objection: `Dann beantworte doch klar: Wäre es heute gut, Ehebrecher zu steinigen? Wenn nein, gibst du zu, dass das biblische Gesetz unmoralisch war.`,
      objectionBy: 'Sam Harris',
      answer: `Nein, die Kirche fordert das nicht, und sie hat es nie gefordert. Daraus folgt aber nicht, dass das Gesetz damals unmoralisch war: Es war das Recht eines theokratischen Bundesvolkes, es zeigte die Schwere der Sünde und war nach Paulus ein „Zuchtmeister auf Christus hin". Die Kirche ist kein Staat; ihr Weg mit dem Sünder ist Umkehr und Barmherzigkeit. Jesus sagte zur Ehebrecherin: „Wer unter euch ohne Sünde ist, der werfe den ersten Stein" – und zu ihr: „Gehe hin und sündige hinfort nicht mehr."`,
      sources: [
        { kind: 'bibel', work: 'Johannes', ref: '8,7.11', quote: `Wer unter euch ohne Sünde ist, der werfe den ersten Stein auf sie. … So verdamme ich dich auch nicht; gehe hin und sündige hinfort nicht mehr!`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'joh-8-unecht',
          objection: `Johannes 8,1–11 fehlt in den ältesten Handschriften. Das ist eine spätere Einfügung. Du kannst dich nicht darauf berufen.`,
          objectionBy: 'Bart Ehrman',
          answer: `Richtig, die Perikope fehlt in den ältesten griechischen Handschriften, das gebe ich zu. Viele Forscher halten sie dennoch für eine alte, echte Überlieferung über Jesus; sie wird in der orthodoxen Kirche liturgisch gelesen. Aber meine Antwort hängt nicht an ihr: Jesus sagt auch „Barmherzigkeit will ich und nicht Opfer" (Mt 9,13), verbietet die Vergeltung (Mt 5,38–39) und sagt, er sei nicht gekommen, die Welt zu richten, sondern zu retten (Joh 3,17).`,
        },
        {
          id: 'damals-homosexuelle-toeten',
          objection: `Wenn das Gesetz damals richtig war – war es dann damals moralisch, Homosexuelle zu töten? Sag ja oder nein.`,
          objectionBy: 'Dan Savage',
          answer: `Ich will ehrlich sein: Die Tora bestimmte für bestimmte sexuelle Handlungen – auch Ehebruch und Inzest – die Höchststrafe im Rahmen eines theokratischen Bundes, mit Verfahrenshürden, die Vollstreckungen sehr selten machten. Gott ist Richter über Leben und Tod. Aber das gilt nicht für uns: Kein Christ darf Gewalt gegen Homosexuelle befürworten oder ausüben, und die Kirche ruft jeden Menschen – mich eingeschlossen – zur Umkehr und bietet allen dieselbe Barmherzigkeit an.`,
          detail: `Wichtig für den Ton: Die Frage ist emotional aufgeladen, oft aus persönlicher Verletzung. Nimm den Menschen ernst. Mache klar, dass das Gericht über jede Sünde – Ehebruch, Habgier, Lüge, Hass – Gott gehört, und dass das Evangelium allen Sündern gilt. Verweise auf das eigene Thema zur Sexualethik.`,
          followUps: [
            {
              id: 'uganda-gesetze-konsequent',
              objection: `Dann sind Länder, die heute Homosexualität mit dem Tod bestrafen, wie Uganda mit seinem Gesetz von 2023, einfach konsequent biblisch. Christliche Politiker haben es ja unterstützt.`,
              objectionBy: 'Dan Savage',
              answer: `Nein. Das Neue Testament gibt weder der Kirche noch dem Staat den Auftrag, Sünden des Fleisches strafrechtlich zu verfolgen. Paulus sagt ausdrücklich, es sei nicht Sache der Gemeinde, „die draußen" zu richten (1 Kor 5,12–13). Gesetze, die Menschen wegen ihrer Neigung oder einvernehmlicher Handlungen ins Gefängnis oder an den Galgen bringen, widersprechen der Würde, die jeder Mensch als Ebenbild Gottes hat. Dass Christen solche Gesetze unterstützt haben, ist Unrecht, und viele Kirchenführer haben das öffentlich kritisiert.`,
              detail: `Hier musst du klar unterscheiden: Die Kirche hält an ihrer Lehre fest, dass sexuelle Gemeinschaft in die Ehe von Mann und Frau gehört. Daraus folgt aber keine staatliche Strafe für Menschen, die anders leben – sonst müsste man auch Ehebruch, Habgier und Lüge kriminalisieren. Die Verantwortung der Christen ist, verfolgte Menschen zu schützen, nicht sie zu verfolgen. Sam Allberry, der selbst gleichgeschlechtlich empfindet und zölibatär lebt, betont, dass Gemeinden für solche Menschen sichere Orte sein müssen.`,
              voices: [
                { person: 'sam-allberry', role: 'als Pastor mit gleichgeschlechtlicher Neigung', text: `Allberry schreibt in *Is God Anti-Gay?*, dass die Kirche gegenüber Menschen mit gleichgeschlechtlicher Neigung oft versagt habe – durch Spott, Schweigen und Härte. Die biblische Sexualethik sei ein Ruf an alle Menschen, nicht eine Waffe gegen eine Gruppe; das Evangelium biete allen dieselbe Gnade und dieselbe Nachfolge an.` },
              ],
              sources: [
                { kind: 'bibel', work: '1. Korinther', ref: '5,12–13', quote: `Denn was gehen mich die draußen an, dass ich sie sollte richten? … Gott aber wird, die draußen sind, richten.`, status: 'paraphrase' },
              ],
              followUps: [
                {
                  id: 'moral-aendert-sich-mit-bund',
                  objection: `Damit gibst du zu, dass Gottes Moral sich ändert: Was damals todeswürdig war, ist heute nicht einmal strafbar. Dann ist eure Moral genauso relativ wie meine.`,
                  objectionBy: 'Sam Harris',
                  answer: `Nein – du verwechselst die moralische Bewertung einer Tat mit der rechtlichen Strafe, die ein bestimmtes Gemeinwesen darauf setzt. Die Bewertung bleibt: Ehebruch etwa ist damals wie heute Treuebruch. Was sich geändert hat, ist das Gemeinwesen: Israel war ein theokratischer Bund mit eigenem Strafrecht, die Kirche ist eine weltweite Gemeinschaft ohne Schwert. Auch in deinem Denken gilt: Dass Diebstahl in verschiedenen Staaten verschieden bestraft wird, macht Diebstahl nicht moralisch relativ.`,
                  detail: `Christopher Wright beschreibt das Gesetz Israels als „Paradigma": ein konkretes Modell, das zeigt, wie Gottes unveränderlicher Wille in einer bestimmten Gesellschaft Gestalt annahm. Die Prinzipien (Heiligkeit des Lebens, Treue, Schutz der Schwachen) bleiben; die konkrete Rechtsform war an Israels Situation gebunden. Diese Unterscheidung ist keine Ausrede, sondern Grundwissen jeder Rechtsphilosophie: Moralische Normen und positive Strafgesetze sind zweierlei.`,
                  voices: [
                    { person: 'christopher-wright', role: 'als Alttestamentler', text: `Wright versteht Israel als Gottes „Paradigma" für die Völker: Seine Gesetze sind nicht ein zeitloses Strafgesetzbuch für alle Staaten, sondern ein Anschauungsmodell, an dem man die Grundwerte göttlicher Gerechtigkeit ablesen und in neue Kontexte übertragen soll (*Old Testament Ethics for the People of God*, 2004).` },
                  ],
                  sources: [
                    { kind: 'fachliteratur', author: 'Christopher J. H. Wright', work: 'Old Testament Ethics for the People of God', ref: 'Kap. 2', year: '2004', status: 'paraphrase' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'auge-um-auge',
      objection: `„Auge um Auge, Zahn um Zahn" – das ist die primitive Moral der Rache.`,
      objectionBy: 'Christopher Hitchens',
      answer: `Im Gegenteil: Die Talion ist eine Regel für Richter, keine Erlaubnis zur Privatrache, und sie begrenzt die Strafe – nicht mehr als den Schaden. Revolutionär war, dass sie für alle gleich galt: Bei Hammurabi bekam der Gemeinfreie für sein Auge eine Mine Silber, der Adelige das Auge des Täters. In Israel galt „ein Recht für den Fremden wie für den Einheimischen" (Lev 24,22). Jesus geht noch weiter und ruft zum Verzicht auf Vergeltung (Mt 5,38–39).`,
      followUps: [
        {
          id: 'andere-wange-widerruf',
          objection: `Wenn Jesus sagt „Ihr habt gehört, dass gesagt ist: Auge um Auge … Ich aber sage euch: Halte die andere Wange hin", dann hat er das Alte Testament doch selbst als moralisch überholt verworfen.`,
          objectionBy: 'Christopher Hitchens',
          answer: `Jesus verwirft nicht die Gerechtigkeit des Richters, sondern die Haltung, mit der Einzelne die Talion als Recht auf persönliche Vergeltung missbrauchten. Und schon das Alte Testament verbietet private Rache: „Du sollst nicht rächen noch Zorn halten gegen die Kinder deines Volks" (Lev 19,18) – im selben Vers wie „Liebe deinen Nächsten wie dich selbst". Die Sprüche gebieten, dem hungrigen Feind Brot zu geben (Spr 25,21), was Paulus wörtlich aufnimmt (Röm 12,20). Jesus vertieft eine Linie, die im Alten Testament schon angelegt ist.`,
          detail: `Das „Ich aber sage euch" in der Bergpredigt ist keine Abrechnung mit der Tora, sondern ihre Auslegung mit messianischer Vollmacht: Jesus zielt auf das Herz – vom Verbot des Mordes zum Verbot des Hasses, vom Verbot des Ehebruchs zum Verbot der Begierde. Die Talion als Rechtsprinzip der Verhältnismäßigkeit lebt übrigens in jedem modernen Strafrecht fort: Die Strafe soll der Tat entsprechen, nicht darüber hinausgehen.`,
          sources: [
            { kind: 'bibel', work: '3. Mose (Levitikus)', ref: '19,18', quote: `Du sollst nicht rächen noch Zorn halten gegen die Kinder deines Volks. Du sollst deinen Nächsten lieben wie dich selbst.`, translation: 'Luther 1912', status: 'verbatim' },
            { kind: 'bibel', work: 'Sprüche', ref: '25,21', quote: `Hungert deinen Feind, so speise ihn mit Brot; dürstet ihn, so tränke ihn mit Wasser.`, translation: 'Luther 1912', status: 'verbatim' },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Woher nimmst du den Maßstab, nach dem du die Tora als „barbarisch" beurteilst – und wie begründest du ihn?`,
    `Weißt du, dass das Neue Testament selbst Speisegesetze aufhebt, sexualethische Gebote aber bestätigt?`,
    `Kennst du ein antikes Rechtssystem mit stärkerem Schutz gegen falsche Anklagen?`,
    `Glaubst du wirklich, dass Christen heute die Steinigung fordern – oder kritisierst du eine Position, die niemand vertritt?`,
  ],
  avoid: [
    `„Diese Gesetze waren damals für Israel völlig in Ordnung, Punkt." Ohne Erklärung des Rahmens wirkt das gleichgültig gegenüber den Betroffenen.`,
    `„Das AT gilt nicht mehr." Christen glauben, dass das AT Gottes Wort bleibt; erfüllt heißt nicht abgeschafft.`,
    `Die Lösegeld-Deutung (Num 35,31) als sicheren Beweis vortragen – sie ist plausibel, aber umstritten.`,
  ],
  concessions: [
    `Die Tora kennt tatsächlich Todesstrafen für religiöse und sexuelle Vergehen, die uns fremd und hart erscheinen.`,
    `Christliche Staaten haben in der Geschichte Todesstrafen für Gotteslästerung, Ketzerei oder Zauberei verhängt – oft unter Berufung auf das AT. Das widersprach dem Evangelium.`,
    `Die Perikope von der Ehebrecherin (Joh 7,53–8,11) fehlt in den ältesten Handschriften.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Christopher J. H. Wright', work: 'Old Testament Ethics for the People of God', year: '2004', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Paul Copan', work: 'Is God a Moral Monster?', year: '2011', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Kenneth A. Kitchen; Paul J. N. Lawrence', work: 'Treaty, Law and Covenant in the Ancient Near East', year: '2012', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Tora', 'Todesstrafe', 'Steinigung', 'Gesetz', 'Lex talionis', 'Rosinenpicken'],
  related: [
    'at-ethik/bibel-befuerwortet-sklaverei',
    'at-ethik/at-gott-monster',
    'sexualethik/homosexualitaet-bibel',
    'moral-und-gott/moral-kulturell-relativ',
  ],
};

export default claim;
