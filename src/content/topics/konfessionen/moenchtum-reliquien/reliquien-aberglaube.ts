import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'reliquien-aberglaube',
  title: `„Reliquien und Heiligenwunder sind Aberglaube."`,
  proponents: [
    { name: 'Johannes Calvin', role: 'Reformator in Genf', work: 'Traité des reliques (Abhandlung über die Reliquien), 1543' },
    { name: 'Martin Luther', role: 'Reformator', work: 'Schmalkaldische Artikel (1537), Teil II, Art. 2 (über „Heiligtum" und Reliquien)' },
    { name: 'Erasmus von Rotterdam', role: 'Humanist', work: 'Peregrinatio religionis ergo (Colloquia, 1526) – Spott über Reliquienwallfahrten' },
    { name: 'Vigilantius', role: 'Gallischer Presbyter um 400', work: 'Kritik an Reliquienverehrung, überliefert durch Hieronymus, Contra Vigilantium (406)' },
    { name: 'Joe Nickell', role: 'Skeptischer Untersucher paranormaler Phänomene', work: 'Relics of the Christ (2007)' },
  ],
  steelman: `Im ganzen Neuen Testament wird kein einziger Knochen eines Heiligen aufbewahrt, ausgestellt oder verehrt. Das Gesetz erklärt jeden für unrein, der einen Toten berührt (Num 19,11–16), und Gott selbst begrub Mose an einem Ort, den „niemand weiß bis auf diesen heutigen Tag" (Dtn 34,6) – offensichtlich, um einen Grabkult zu verhindern. Als Israel der ehernen Schlange Weihrauch opferte, zerschlug König Hiskia sie (2 Kön 18,4), obwohl Gott sie einst selbst hatte machen lassen. Genau das zeigt die Geschichte der Reliquien: Im Mittelalter gab es mehrere Köpfe Johannes des Täufers, Milch der Jungfrau Maria und – so Calvin – so viele Kreuzessplitter, dass man ein Schiff damit beladen könnte. Kurfürst Friedrich der Weise sammelte in Wittenberg Tausende Reliquien, deren Betrachtung mit Ablass verbunden war. Reliquien wurden gestohlen, gehandelt und gefälscht. Und die Wunder, die man ihnen zuschreibt, sind Legenden, Suggestion oder Placebo. Wer zu Knochen pilgert, sucht Gott in der Materie statt im Geist und in der Wahrheit (Joh 4,24). Das ist Aberglaube – und letztlich eine Form von Götzendienst.`,
  biblical: {
    summary: `Die Schrift bezeugt mehrfach, dass Gott durch die **Leiber und Gegenstände seiner Heiligen** wirkt. Als ein Toter in Elisas Grab geworfen wurde und „die Gebeine Elisas berührte, ward er lebendig" (2 Kön 13,21). Durch die Schweißtücher des Paulus wichen Krankheiten (Apg 19,11–12), durch den Schatten des Petrus suchten Kranke Heilung (Apg 5,15), und die blutflüssige Frau wurde durch die Berührung des Gewandsaums Jesu gesund (Mt 9,20–22). Mose nahm die **Gebeine Josefs** mit auf den Weg durch die Wüste (Ex 13,19; Jos 24,32). Das ist keine Magie, sondern Ausdruck davon, dass Gott den ganzen Menschen – Leib und Seele – heiligt: Der Leib des Gläubigen ist „Tempel des Heiligen Geistes" (1 Kor 6,19) und wird auferstehen (Röm 8,11).`,
    detail: `**2 Kön 13,20–21:** Der Text betont, dass der Tote „die Gebeine Elisas berührte" – nicht ein Gebet, nicht ein Glaube des Toten, sondern die Berührung mit dem Leib des Propheten war der Anlass. Gott selbst hat hier ein Zeichen gesetzt, dass die Heiligkeit des Propheten nicht mit seinem Tod erlosch.

**Num 19 und die Unreinheit der Toten:** Die Reinheitsgesetze des Alten Bundes gehören zu den „Satzungen des Fleisches", die bis zur Zeit der Besserung auferlegt waren (Hebr 9,10). Christus hat den Tod besiegt; der Leib des Märtyrers ist nicht mehr bloß „Leichnam", sondern Same der Auferstehung (1 Kor 15,42–44). Gerade die Elisa-Geschichte zeigt, dass schon im Alten Bund der Leib eines Gottesmannes nicht nur Quelle der Unreinheit war.

**Verehrung ist nicht Anbetung:** Die Schrift kennt die Ehrerbietung (*proskynēsis*) vor Menschen, ohne sie anzubeten: Abraham verneigt sich vor den Hethitern (Gen 23,7), Nathan vor David (1 Kön 1,23). Anbetung (*latreia*) gebührt allein Gott (Mt 4,10). Die Kirche ehrt die Reliquien, weil sie Gott in seinen Heiligen verherrlicht.`,
    sources: [
      { kind: 'bibel', work: '2. Könige', ref: '13,21', quote: `Und es begab sich, daß sie einen Mann begruben; da sie aber die Kriegsleute sahen, warfen sie den Mann in Elisas Grab. Und da er hinabkam und die Gebeine Elisas berührte, ward er lebendig und trat auf seine Füße.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '19,11–12', quote: `Und Gott wirkte nicht geringe Taten durch die Hände des Paulus, also daß sie auch von seiner Haut die Schweißtüchlein und Binden über die Kranken hielten und die Seuchen von ihnen wichen und die bösen Geister von ihnen ausfuhren.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '5,15', quote: `… also daß sie die Kranken auf die Gassen heraustrugen und legten sie auf Betten und Bahren, auf daß, wenn Petrus käme, sein Schatten ihrer etliche überschattete.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Matthäus', ref: '9,20–21', quote: `Und siehe, ein Weib, das zwölf Jahre den Blutgang gehabt, trat von hinten zu ihm und rührte seines Kleides Saum an. Denn sie sprach bei sich selbst: Möchte ich nur sein Kleid anrühren, so würde ich gesund.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '2. Mose', ref: '13,19', quote: `Und Mose nahm mit sich die Gebeine Josephs.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche **ehrt** die Reliquien der Heiligen und Märtyrer, **betet aber nur Gott an**. Schon das *Martyrium des Polykarp* (um 156) berichtet, dass die Christen von Smyrna die Gebeine ihres Bischofs sammelten, „kostbarer als Edelsteine", um dort den Tag seines Martyriums zu feiern – und es unterscheidet klar: Christus beten wir an, die Märtyrer lieben wir als Jünger und Nachahmer des Herrn. Die Kirche kennt aber auch die **Unterscheidung**: Schon der hl. Antonius wandte sich gegen den ägyptischen Brauch, Leichname von Heiligen in Häusern aufzubewahren, und verfügte ein verborgenes Begräbnis. Gefälschte Reliquien, Handel und Aberglaube sind Missbrauch, den die Väter selbst kritisierten.`,
    detail: `**Väterzeugnisse:** Kyrill von Jerusalem führt in seinen Katechesen (18,16) die Elisa-Geschichte als Beweis an, dass den Leibern der Gerechten eine Kraft innewohnt, weil die Seele, die in ihnen wohnte, Gott diente. Hieronymus verteidigte gegen Vigilantius die Verehrung der Märtyrer und schrieb, man ehre die Reliquien der Märtyrer, um den anzubeten, dessen Märtyrer sie sind (Brief 109). Augustinus berichtet in „Vom Gottesstaat" (22,8) von Heilungen bei den Reliquien des Stephanus – und kritisierte zugleich umherziehende Mönche, die „Glieder von Märtyrern, wenn es denn Märtyrer sind", verkauften (De opere monachorum 28).

**In der koptischen Kirche heute:** 1968 kehrte ein Teil der Reliquien des hl. Markus, des Gründers der Kirche von Alexandrien, aus Venedig nach Ägypten zurück – als Geschenk Papst Pauls VI. an Papst Kyrillos VI. zur Einweihung der Markuskathedrale in Kairo. 1973 erhielt Papst Schenuda III. in Rom Reliquien des hl. Athanasius. Viele koptische Kirchen bewahren Reliquien in Schreinen; die Gläubigen beten dort, zünden Kerzen an und bitten die Heiligen um ihre Fürbitte – nicht als Ersatz für Christus, sondern in seiner Gemeinschaft.`,
    sources: [
      { kind: 'kirchenvater', work: 'Martyrium des Polykarp', ref: '18,2–3', year: 'um 156', quote: `Wir aber nahmen später seine Gebeine, die kostbarer sind als Edelsteine und wertvoller als Gold, und setzten sie an einem geeigneten Ort bei. Dort wird uns der Herr gewähren, uns, soweit möglich, in Jubel und Freude zu versammeln und den Geburtstag seines Martyriums zu feiern.`, original: `τὰ τιμιώτερα λίθων πολυτελῶν καὶ δοκιμώτερα ὑπὲρ χρυσίον ὀστᾶ αὐτοῦ`, translation: 'eigene Übersetzung', status: 'paraphrase', note: 'Der griechische Kernausdruck ist wörtlich wiedergegeben; die deutsche Übertragung ist sinngetreu.' },
      { kind: 'kirchenvater', work: 'Martyrium des Polykarp', ref: '17,3', year: 'um 156', quote: `Ihn beten wir an, weil er der Sohn Gottes ist; die Märtyrer aber lieben wir als Jünger und Nachahmer des Herrn.`, original: `τοῦτον μὲν γὰρ υἱὸν ὄντα τοῦ θεοῦ προσκυνοῦμεν, τοὺς δὲ μάρτυρας ὡς μαθητὰς καὶ μιμητὰς τοῦ κυρίου ἀγαπῶμεν`, translation: 'eigene Übersetzung', status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Kyrill von Jerusalem', work: 'Katechesen', ref: '18,16', year: 'um 350', status: 'paraphrase', quote: `Nicht nur die Seelen der Heiligen sind zu ehren, sondern es wohnt auch ihren Leibern eine Kraft inne – wie der Tote zeigt, der die Gebeine Elisas berührte.` },
      { kind: 'kirchenvater', author: 'Hieronymus', work: 'Brief 109 an Riparius', ref: '1', year: '404', quote: `Wir ehren die Reliquien der Märtyrer, um den anzubeten, dessen Märtyrer sie sind.`, original: `Honoramus reliquias martyrum, ut eum cuius sunt martyres adoremus.`, status: 'paraphrase', note: 'Vielzitierte Stelle; Wortlaut nach gängigen Ausgaben, hier vorsichtshalber als sinngemäß markiert.' },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Vita Antonii', ref: '90–91', year: 'um 357', status: 'paraphrase', quote: `Antonius tadelte den ägyptischen Brauch, die Leiber der Heiligen unbestattet in Häusern aufzubewahren, und gebot seinen Schülern, ihn an einem verborgenen Ort zu begraben.` },
    ],
  },
  quickAnswer: `Wir beten keine Knochen an – wir beten nur Gott an. Aber die Bibel selbst berichtet, dass ein Toter lebendig wurde, als er die Gebeine Elisas berührte (2 Kön 13,21), und dass durch die Tücher des Paulus Kranke geheilt wurden (Apg 19,11–12). Gott heiligt den ganzen Menschen, auch den Leib, der einmal auferstehen wird. Schon um 156 sammelten die Christen die Gebeine Polykarps, „kostbarer als Edelsteine", und sagten zugleich: Christus beten wir an, die Märtyrer lieben wir. Dass es Fälschungen und Missbrauch gab, geben wir offen zu – aber Missbrauch hebt den rechten Gebrauch nicht auf.`,
  keyPoints: [
    `**Biblische Grundlage:** 2 Kön 13,21 (Elisas Gebeine), Apg 19,11–12 (Tücher des Paulus), Apg 5,15 (Schatten des Petrus), Mt 9,20 (Gewandsaum Jesu), Ex 13,19 (Josefs Gebeine).`,
    `**Theologischer Grund:** Gott heiligt Leib und Seele; der Leib des Heiligen war Tempel des Geistes und wird auferstehen (1 Kor 6,19; Röm 8,11).`,
    `**Frühestes Zeugnis:** Martyrium des Polykarp (um 156) – Gebeine „kostbarer als Edelsteine", zugleich klare Unterscheidung von Anbetung und Liebe (17,3).`,
    `**Verehrung ≠ Anbetung:** Hieronymus: Wir ehren die Reliquien, um den anzubeten, dessen Märtyrer sie sind.`,
    `**Die Kirche kennt Unterscheidung:** Antonius gegen falschen Leichenkult; Augustinus gegen Reliquienhändler. Fälschungen sind Sünde, nicht Lehre.`,
    `**Wunder sind Zeichen, keine Grundlage:** Der Glaube ruht auf Christus und seiner Auferstehung, nicht auf einzelnen Wunderberichten.`,
  ],
  voices: [
    {
      person: 'kyrill-jerusalem',
      role: 'als Katechet der Taufbewerber',
      text: `Kyrill erklärt den Taufbewerbern in Jerusalem die Auferstehung des Leibes und führt dabei die Gebeine Elisas an: Wenn schon der tote Leib des Propheten einen Toten lebendig machte, dann zeigt das, dass Gott die Leiber der Gerechten nicht verachtet. Die Seele, die im Leib Gott diente, hat diesen Leib geheiligt. Darum ist es kein Aberglaube, die Leiber der Heiligen mit Ehrfurcht zu behandeln, sondern Glaube an die Auferstehung des Fleisches.`,
      sources: [{ kind: 'kirchenvater', author: 'Kyrill von Jerusalem', work: 'Katechesen', ref: '18,16', status: 'paraphrase' }],
    },
    {
      person: 'hieronymus',
      role: 'als Gegner des Vigilantius',
      text: `Als der gallische Presbyter Vigilantius um 400 die Verehrung der Reliquien als heidnischen Brauch angriff, antwortete Hieronymus: Niemand bete die Märtyrer an, noch weniger ihren Staub. Man ehre sie, um Christus anzubeten, für den sie gestorben sind. Er verwies darauf, dass Kaiser und Bischöfe die Reliquien von Propheten und Aposteln feierlich überführt hatten – waren sie alle Götzendiener? Vigilantius blieb eine Einzelstimme; die Kirche in Ost und West folgte ihm nicht.`,
      sources: [
        { kind: 'kirchenvater', author: 'Hieronymus', work: 'Gegen Vigilantius (Contra Vigilantium)', year: '406', status: 'paraphrase' },
        { kind: 'kirchenvater', author: 'Hieronymus', work: 'Brief 109 an Riparius', year: '404', status: 'paraphrase' },
      ],
    },
    {
      person: 'athanasius',
      role: 'als Zeuge der Unterscheidung',
      text: `Athanasius berichtet in der Vita Antonii, dass Antonius den Brauch mancher Ägypter tadelte, die Leiber verehrter Toter – auch von Märtyrern – unbestattet in ihren Häusern aufzubewahren. Er ließ sich an einem verborgenen Ort begraben, damit mit seinem Leib kein falscher Kult getrieben werde. Das zeigt: Die ägyptische Kirche ehrt die Heiligen, aber sie hat schon im 4. Jahrhundert klar zwischen Ehrfurcht und Aberglauben unterschieden.`,
      sources: [{ kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Vita Antonii', ref: '90–91', status: 'paraphrase' }],
    },
    {
      person: 'johannes-damaskus',
      role: 'als Systematiker der Väterlehre',
      text: `Johannes von Damaskus fasst die Lehre der Väter zusammen: Christus hat uns die Reliquien der Heiligen als heilbringende Quellen gegeben, durch die Gott vielfältig Gutes wirkt. Der Grund ist christologisch: Weil Gott in Christus Fleisch geworden ist, hat die Materie Anteil an der Heiligung. Die Heiligen sind durch die Gnade Wohnstätten Gottes geworden – deshalb ehrt man ihre Leiber, betet aber allein Gott an.`,
      sources: [{ kind: 'kirchenvater', author: 'Johannes von Damaskus', work: 'Genaue Darlegung des orthodoxen Glaubens (De fide orthodoxa)', ref: 'IV,15', year: '8. Jh.', status: 'paraphrase' }],
    },
    {
      person: 'kyrillos-vi',
      role: 'als Papst, der die Reliquien des hl. Markus empfing',
      text: `Papst Kyrillos VI. empfing 1968 aus der Hand einer Delegation Papst Pauls VI. Reliquien des Evangelisten Markus, die im 9. Jahrhundert von venezianischen Kaufleuten aus Alexandrien nach Venedig gebracht worden waren. Sie wurden in der neuen Markuskathedrale in Kairo beigesetzt. Für die Kopten war das nicht ein Fetisch, sondern ein Zeichen der Kontinuität mit dem Apostel, der ihnen das Evangelium brachte – und ein Zeichen der Versöhnung zwischen Kirchen.`,
      sources: [{ kind: 'koptisch', work: 'Überführung der Markus-Reliquien nach Kairo', year: '1968', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'kein-reliquienkult-im-nt',
      objection: `„Zeig mir im Neuen Testament einen einzigen Christen, der die Knochen eines Heiligen aufbewahrt und verehrt hat!"`,
      objectionBy: 'Evangelikaler Apologet',
      answer: `Das NT zeigt das Prinzip: Gott wirkt durch Leib und Gegenstände seiner Heiligen – durch Elisas Gebeine (2 Kön 13,21), die Tücher des Paulus (Apg 19,12), den Schatten des Petrus (Apg 5,15), den Gewandsaum Jesu (Mt 9,20). Und schon um 156, eine Generation nach den Aposteln, sammelten die Christen von Smyrna die Gebeine Polykarps „kostbarer als Edelsteine". Diese Gemeinde stand den Aposteln näher als jeder Reformator.`,
      followUps: [
        {
          id: 'num-19-unrein',
          objection: `„Nach dem Gesetz macht die Berührung eines Toten unrein (Num 19,11). Gott wollte gerade keinen Kontakt mit Gebeinen."`,
          objectionBy: 'Reformierter Theologe',
          answer: `Unter dem Gesetz ja – und doch machte Gott durch die Gebeine Elisas einen Toten lebendig. Das zeigt schon im Alten Bund: Der Leib eines Gottesmannes ist mehr als ein unreiner Leichnam. Im Neuen Bund hat Christus den Tod besiegt; die Reinheitsgesetze waren „bis auf die Zeit der Besserung" auferlegt (Hebr 9,10). Der Leib des Märtyrers ist Same der Auferstehung (1 Kor 15,42–44).`,
          sources: [
            { kind: 'bibel', work: 'Hebräer', ref: '9,10', status: 'paraphrase', quote: `… äußerliche Heiligkeit des Fleisches, die bis auf die Zeit der Besserung sind aufgelegt.` },
          ],
          followUps: [
            {
              id: 'einmaliges-wunder',
              objection: `„Die Elisa-Geschichte ist ein einmaliges Wunder. Niemand in Israel hat danach Elisas Knochen verehrt oder herumgetragen."`,
              objectionBy: 'Reformierter Theologe',
              answer: `Israel ehrte die Gräber seiner Propheten sehr wohl – Jesus spricht davon, dass man „der Propheten Gräber baut und der Gerechten Gräber schmückt" (Mt 23,29), und er tadelt nicht das Schmücken, sondern die Heuchelei. Mose trug die Gebeine Josefs vierzig Jahre durch die Wüste (Ex 13,19). Und das Wunder bei Elisa zeigt, was Gott tun *kann*: Er ehrt die Leiber seiner Heiligen. Darauf gründet die Kirche ihre Ehrfurcht, nicht auf eine Pflicht, Knochen herumzutragen.`,
              followUps: [
                {
                  id: 'polykarp-schon-abfall',
                  objection: `„Das Martyrium des Polykarp stammt aus dem 2. Jahrhundert – das ist schon der Beginn des Abfalls, nicht apostolische Praxis."`,
                  objectionBy: 'Freikirchlicher Kirchenkritiker',
                  answer: `Polykarp war ein Schüler des Apostels Johannes; seine Gemeinde kannte die apostolische Lehre aus erster Hand. Wenn schon sie „abgefallen" war, wann war die Kirche dann je treu? Und gerade dieser Text unterscheidet glasklar: „Christus beten wir an, die Märtyrer lieben wir als Jünger und Nachahmer des Herrn." Die Behörden fürchteten sogar, die Christen könnten Christus verlassen und Polykarp anbeten – die Gemeinde antwortete, das sei unmöglich.`,
                  sources: [
                    { kind: 'kirchenvater', work: 'Martyrium des Polykarp', ref: '17,2–3', year: 'um 156', status: 'paraphrase', quote: `Man sagte, wir könnten den Gekreuzigten verlassen und anfangen, diesen anzubeten – sie wussten nicht, dass wir weder Christus je verlassen noch einen anderen anbeten können.` },
                  ],
                  questionsBack: [`Wenn die direkten Schüler der Apostel schon in die Irre gingen – woher weißt du dann, welche Bücher zum Neuen Testament gehören? Die Kirche dieser Zeit hat den Kanon gesammelt.`],
                },
              ],
            },
          ],
        },
        {
          id: 'paulus-lebte-noch',
          objection: `„Paulus und Petrus lebten noch, als Gott durch sie wirkte. Das hat nichts mit den Knochen Verstorbener zu tun."`,
          objectionBy: 'Evangelikaler Apologet',
          answer: `Bei Elisa war der Prophet tot – und Gott wirkte trotzdem durch seine Gebeine. Bei Paulus wirkte Gott durch Tücher, also durch Gegenstände, die nicht Paulus selbst waren. Beide Stellen zusammen zeigen: Gott bindet seine Gnade nicht an unsere Vorstellungen, sondern wirkt auch durch Materie, die mit seinen Heiligen verbunden ist. Und für Gott sind die Heiligen nicht tot: „Sie leben ihm alle" (Lk 20,38).`,
        },
      ],
    },
    {
      id: 'nehuschtan',
      objection: `„Hiskia zerschlug die eherne Schlange, als Israel ihr Weihrauch opferte (2 Kön 18,4) – obwohl Gott sie selbst angeordnet hatte. Genau so muss man mit Reliquien umgehen."`,
      objectionBy: 'Reformierter Prediger',
      answer: `Die Geschichte bestätigt unsere Unterscheidung: Die Schlange war von Gott gegeben und gut (Num 21,8–9); Jesus selbst nimmt sie als Bild für sein Kreuz (Joh 3,14). Hiskia zerschlug sie erst, als man ihr opferte – also bei Anbetung. Wo eine Reliquie angebetet wird, ist das Götzendienst und muss beendet werden. Wo sie geehrt wird, um Gott zu verherrlichen, ist sie rechter Gebrauch. Missbrauch hebt den Gebrauch nicht auf – sonst müsstest du auch die Bibel verbieten, die oft missbraucht wurde.`,
      sources: [
        { kind: 'bibel', work: '2. Könige', ref: '18,4', status: 'paraphrase', quote: `Er … zerstieß die eherne Schlange, die Mose gemacht hatte; denn bis zu der Zeit hatten ihr die Kinder Israel geräuchert.` },
        { kind: 'bibel', work: 'Johannes', ref: '3,14', quote: `Und wie Mose in der Wüste eine Schlange erhöht hat, also muß des Menschen Sohn erhöht werden.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'verehrung-anbetung-wortspiel',
          objection: `„‚Verehrung' statt ‚Anbetung' ist doch nur ein Wortspiel. Ihr küsst die Reliquien, verneigt euch, zündet Kerzen an und betet davor. Was würde ein Außenstehender dazu sagen?"`,
          objectionBy: 'Evangelikaler Apologet',
          answer: `Die Bibel selbst kennt die Verneigung ohne Anbetung: Abraham verneigt sich vor den Hethitern (Gen 23,7), Nathan vor König David (1 Kön 1,23) – das griechische Wort ist dasselbe (*proskynein*). Entscheidend ist, wem man göttliche Ehre gibt: Wir bitten keinen Knochen um Vergebung oder Heil, wir opfern keinem Heiligen, wir bekennen keinen Heiligen als Gott. Auch du küsst vielleicht das Foto eines verstorbenen Angehörigen – betest du es deshalb an?`,
          sources: [
            { kind: 'bibel', work: '1. Mose', ref: '23,7', quote: `Da stand Abraham auf und bückte sich vor dem Volk des Landes, vor den Kindern Heth.`, translation: 'Luther 1912', status: 'verbatim' },
          ],
          followUps: [
            {
              id: 'volk-unterscheidet-nicht',
              objection: `„Theologen mögen das unterscheiden. Aber die einfachen Gläubigen tun es nicht – für sie ist die Reliquie magisch."`,
              objectionBy: 'Evangelischer Religionspädagoge',
              answer: `Das kann vorkommen, und dann ist es Aufgabe der Kirche, zu lehren und zu korrigieren – so wie Antonius gegen falschen Leichenkult auftrat und Augustinus gegen Reliquienhändler. Aber Missverständnisse einfacher Gläubiger gibt es überall: Manche behandeln auch die Bibel wie ein Amulett oder schlagen sie „zufällig" auf, um Gottes Willen zu erfahren. Die Lösung ist Unterweisung, nicht Abschaffung.`,
              followUps: [
                {
                  id: 'kirche-profitiert',
                  objection: `„Und die Kirche verdient an den Pilgern. Im Mittelalter war der Reliquienkult ein Geschäft – Wittenberg ist das beste Beispiel."`,
                  objectionBy: 'Lutherischer Kirchenhistoriker',
                  answer: `Das Wittenberger System, in dem die Betrachtung von Reliquien mit Ablass verbunden war, war ein schwerer westlicher Missbrauch – die Orthodoxie kannte nie Ablässe. Wer mit Heiligem Geld machen will, dem gilt das Wort des Petrus an Simon: „Dass du verdammt werdest mit deinem Gelde" (Apg 8,20). Spenden von Pilgern für Kirche und Arme sind etwas anderes als ein Verkauf von Gnade. Und auch evangelische Großveranstaltungen haben Eintrittspreise – das macht das Evangelium nicht falsch.`,
                  sources: [
                    { kind: 'bibel', work: 'Apostelgeschichte', ref: '8,20', quote: `Petrus aber sprach zu ihm: Daß du verdammt werdest mit deinem Gelde, darum daß du meinst, Gottes Gabe werde durch Geld erlangt!`, translation: 'Luther 1912', status: 'verbatim' },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'mose-grab-verborgen',
          objection: `„Gott begrub Mose an einem unbekannten Ort (Dtn 34,6). Damit wollte er jeden Reliquienkult verhindern."`,
          objectionBy: 'Reformierter Theologe',
          answer: `Der Text sagt nicht, warum Gott das Grab verbarg; die Begründung „um einen Kult zu verhindern" ist eine Vermutung. Dagegen steht, dass Mose selbst die Gebeine Josefs mit sich nahm und Israel sie in Sichem bestattete (Jos 24,32). Gott kann in einem Fall verbergen und im anderen ehren. Auch die Kirche lehrt keine Pflicht zur Reliquienverehrung, sondern eine Ehrfurcht, die Gott dort schenkt, wo er seine Heiligen verherrlicht.`,
        },
      ],
    },
    {
      id: 'faelschungen-calvin',
      objection: `„Calvin hat gezeigt: Es gab so viele Kreuzessplitter, dass man ein Schiff damit beladen könnte, und mehrere Köpfe Johannes des Täufers. Der Reliquienkult ist durch und durch Betrug."`,
      objectionBy: 'Reformierter Kirchenhistoriker',
      answer: `Dass es im Mittelalter massenhaft Fälschungen, Diebstähle und Handel gab, ist wahr und beschämend – und schon Augustinus kritisierte Reliquienhändler. Aber Falschgeld beweist nicht, dass es kein echtes Geld gibt; es setzt echtes voraus. Die Reliquien Polykarps oder der Märtyrer der Verfolgungszeit wurden von ihren eigenen Gemeinden gesammelt, die wussten, wen sie begruben. Und unser Glaube hängt nicht an einem einzelnen Splitter, sondern an Christus.`,
      sources: [
        { kind: 'gegner', author: 'Johannes Calvin', work: 'Traité des reliques', year: '1543', status: 'paraphrase', quote: `Wenn man alle Stücke des Kreuzes sammelte, die man zeigt, ergäbe das eine ganze Schiffsladung.` },
        { kind: 'kirchenvater', author: 'Augustinus', work: 'Über die Handarbeit der Mönche (De opere monachorum)', ref: '28', year: 'um 401', status: 'paraphrase', quote: `Manche verkaufen Glieder von Märtyrern – wenn es denn Märtyrer sind.` },
      ],
      followUps: [
        {
          id: 'nicht-pruefbar',
          objection: `„Wenn man echte und falsche Reliquien nicht unterscheiden kann, sollte man die ganze Praxis abschaffen."`,
          objectionBy: 'Skeptiker',
          answer: `Dann müsstest du auch die Wallfahrt nach Jerusalem abschaffen, weil nicht jede gezeigte Stätte sicher ist, und jede Geschichtsschreibung, weil es Fälschungen gibt. Sorgfalt ist gefordert, nicht Abschaffung. Viele Reliquien haben eine dokumentierte Geschichte über Jahrhunderte. Und wo die Echtheit unsicher bleibt, schadet das dem Gebet nicht: Der Gläubige ehrt den Heiligen und bittet Gott – nicht die Materie an sich.`,
          followUps: [
            {
              id: 'markus-reliquien-venedig',
              objection: `„Eure Markus-Reliquien wurden 828 von venezianischen Kaufleuten gestohlen. Woher wisst ihr, was ihr 1968 zurückbekommen habt?"`,
              objectionBy: 'Skeptischer Historiker',
              answer: `Eine historische Gewissheit im naturwissenschaftlichen Sinn gibt es dafür nicht – das sagen wir ehrlich. Die Überführung nach Venedig im 9. Jahrhundert ist gut bezeugt, und Venedig hat die Reliquien über Jahrhunderte als die des Markus verehrt. Die Rückgabe 1968 war vor allem ein Zeichen der Versöhnung zwischen Kirchen. Der Glaube der Kopten an das Evangelium des Markus hängt nicht an diesen Gebeinen, sondern an seinem Zeugnis von Christus.`,
              questionsBack: [`Hängt dein Glaube an der Echtheit eines bestimmten Grabes in Jerusalem? Warum sollte unserer an einer Reliquie hängen?`],
            },
          ],
        },
      ],
    },
    {
      id: 'wunder-placebo',
      objection: `„Heilungen an Reliquien sind Placebo, Suggestion oder fromme Legenden. Kein einziges Wunder hält einer wissenschaftlichen Prüfung stand."`,
      objectionBy: 'Joe Nickell / skeptische Untersucher',
      answer: `Viele Berichte sind tatsächlich legendarisch oder psychologisch erklärbar – das geben wir zu. Aber das Wunder bei Elisa geschah an einem Toten, der keine Erwartung hatte; Placebo scheidet dort aus. Die Kirche gründet ihren Glauben nicht auf Reliquienwunder, sondern auf Christus und seine Auferstehung. Wunder bei den Heiligen sind Zeichen, dass Gott „wunderbar ist in seinen Heiligen" – sie sind Bestätigung, nicht Fundament.`,
      sources: [
        { kind: 'bibel', work: 'Psalm', ref: '67,36 (LXX)', status: 'paraphrase', quote: `Wunderbar ist Gott in seinen Heiligen.`, original: `θαυμαστὸς ὁ θεὸς ἐν τοῖς ἁγίοις αὐτοῦ`, note: 'So nach der griechischen Septuaginta (in der Liturgie viel gebraucht); der hebräische Text (Ps 68,36) liest „furchtbar ist Gott von deinem Heiligtum her".' },
      ],
      followUps: [
        {
          id: 'andere-religionen-wunder',
          objection: `„Auch an Sufi-Schreinen, in Hindutempeln und in Lourdes berichtet man Wunder. Entweder sind alle wahr – oder keines."`,
          objectionBy: 'Religionswissenschaftler',
          answer: `Die Bibel selbst rechnet mit außergewöhnlichen Phänomenen außerhalb der Wahrheit – die Zauberer Ägyptens (Ex 7,11) und die „lügenhaften Kräfte" (2 Thess 2,9). Deshalb prüft die Kirche an der Frucht und am Bekenntnis zu Christus (1 Joh 4,2). Psychologische Erklärungen mögen manches erklären; sie schließen nicht aus, dass Gott tatsächlich handelt. Wir müssen nicht jeden Bericht verteidigen, um an den lebendigen Gott zu glauben, der Gebet erhört.`,
          followUps: [
            {
              id: 'dann-beweisen-wunder-nichts',
              objection: `„Dann beweisen eure Wunder gar nichts. Warum erzählt ihr sie überhaupt?"`,
              objectionBy: 'Religionswissenschaftler',
              answer: `Wunder sind für die Kirche keine Beweise, mit denen man Ungläubige zwingt, sondern Zeichen der Liebe Gottes für die, die ihn suchen – so wie Jesus in Nazareth wegen des Unglaubens kaum Wunder wirkte (Mk 6,5–6). Wir erzählen sie, wie man von einer Gebetserhörung erzählt: als Dank. Die Begründung des Glaubens liegt woanders – in der Geschichtlichkeit der Auferstehung Jesu.`,
              sources: [
                { kind: 'bibel', work: 'Markus', ref: '6,5–6', quote: `Und er konnte allda nicht eine einzige Tat tun; außer wenigen Siechen legte er die Hände auf und heilte sie. Und er verwunderte sich ihres Unglaubens.`, translation: 'Luther 1912', status: 'verbatim' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'totenbefragung',
      objection: `„Die Bibel verbietet jeden Kontakt mit den Toten (Dtn 18,11). Wer an Gräbern betet und Heilige anruft, betreibt Totenkult."`,
      objectionBy: 'Evangelikaler Apologet',
      answer: `Dtn 18,11 verbietet die Totenbeschwörung – also den Versuch, Verstorbene herbeizurufen und Auskunft über die Zukunft zu erhalten. Das tun wir nicht. Die Heiligen sind für uns nicht tot: Gott „ist nicht der Toten, sondern der Lebendigen Gott; denn sie leben ihm alle" (Lk 20,38). Wir bitten sie um ihre Fürbitte, wie wir lebende Geschwister um Gebet bitten – und am Ort ihrer Reliquien erinnern wir uns daran, dass sie mit uns die Auferstehung erwarten.`,
      sources: [
        { kind: 'bibel', work: 'Lukas', ref: '20,38', quote: `Gott aber ist nicht der Toten, sondern der Lebendigen Gott; denn sie leben ihm alle.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'koerper-zerteilen',
          objection: `„Leichen zu zerteilen und Körperteile in Kirchen zu verteilen, ist pietätlos. Das würde man bei keinem anderen Verstorbenen tun."`,
          objectionBy: 'Säkularer Gesprächspartner',
          answer: `Das Empfinden ist verständlich, und die Praxis ist in den Kirchen unterschiedlich. Die frühe Kirche bestattete die Märtyrer ganz und feierte die Eucharistie an ihren Gräbern – ein Echo der Seelen „unter dem Altar" (Offb 6,9). Die Verteilung kleiner Teile entstand später aus dem Wunsch, dass viele Gemeinden Anteil am Zeugnis eines Heiligen haben. Entscheidend ist die Ehrfurcht: Die Gebeine werden in Schreinen, Gebet und Liturgie geehrt, nicht ausgestellt wie Museumsstücke.`,
          sources: [
            { kind: 'bibel', work: 'Offenbarung', ref: '6,9', quote: `Und da es das fünfte Siegel auftat, sah ich unter dem Altar die Seelen derer, die erwürgt waren um des Wortes Gottes willen und um des Zeugnisses willen, das sie hatten.`, translation: 'Luther 1912', status: 'verbatim' },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wie erklärst du 2 Kön 13,21 – warum wurde der Tote durch die Berührung von Elisas Gebeinen lebendig?`,
    `Waren die Christen von Smyrna, die Schüler eines Apostelschülers, schon Götzendiener, als sie Polykarps Gebeine sammelten?`,
    `Ist die Verneigung Abrahams vor den Hethitern Anbetung?`,
    `Hebt der Missbrauch einer Sache – etwa der Bibel oder der Taufe – ihren rechten Gebrauch auf?`,
  ],
  avoid: [
    `Nicht jede Reliquie und jeden Wunderbericht für historisch gesichert erklären; das macht dich unglaubwürdig.`,
    `Nicht sagen, Reliquien „wirken" aus sich selbst. Gott wirkt – die Reliquie ist kein Talisman.`,
    `Den mittelalterlichen Reliquienhandel und die Verbindung mit Ablässen nicht verteidigen; das ist ein westliches Problem, das die Orthodoxie nicht teilt.`,
  ],
  concessions: [
    `Im Neuen Testament gibt es keine ausdrückliche Anweisung, Reliquien zu sammeln oder zu verehren; die Praxis ist eine früh bezeugte Entfaltung biblischer Prinzipien.`,
    `Fälschungen, Diebstähle (z. B. die Überführung der Markus-Reliquien nach Venedig 828) und Geschäftemacherei gab es reichlich.`,
    `Viele Wunderberichte sind legendarisch ausgeschmückt oder psychologisch erklärbar.`,
  ],
  furtherReading: [
    { kind: 'kirchenvater', work: 'Das Martyrium des Polykarp', year: 'um 156', status: 'paraphrase' },
    { kind: 'kirchenvater', author: 'Hieronymus', work: 'Gegen Vigilantius', year: '406', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Peter Brown', work: 'The Cult of the Saints. Its Rise and Function in Latin Christianity', year: '1981', status: 'paraphrase' },
    { kind: 'gegner', author: 'Charles Freeman', work: 'Holy Bones, Holy Dust. How Relics Shaped the History of Medieval Europe', year: '2011', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Reliquien', 'Heilige', 'Wunder', 'Polykarp', 'Verehrung', 'Calvin'],
  related: ['heilige-ikonen/fuerbitte-der-heiligen', 'heilige-ikonen/ikonen-goetzenbilder', 'moenchtum-reliquien/weihwasser-oel-magie', 'katholizismus/ablass-verdienste', 'sola-scriptura/kirche-war-verdorben'],
};

export default claim;
