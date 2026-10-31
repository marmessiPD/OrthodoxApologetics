import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'messias-kriterien-nicht-erfuellt',
  title: `„Jesus hat die messianischen Kriterien nicht erfüllt (Tempel, Weltfrieden, Sammlung Israels)."`,
  proponents: [
    { name: 'Rabbi Tovia Singer', role: 'Gründer von Outreach Judaism', work: 'Let\'s Get Biblical! Why Doesn\'t Judaism Accept the Christian Messiah? (2 Bde., erw. Ausg. 2014)' },
    { name: 'Rabbi Michael Skobac', role: 'Bildungsleiter von Jews for Judaism (Toronto)', work: 'Vorträge und Debatten zu den Messias-Kriterien' },
    { name: 'Rabbi Shmuley Boteach', role: 'Rabbiner und Publizist', work: 'Kosher Jesus (2012)' },
    { name: 'Moses Maimonides (Rambam)', role: 'Rechtsgelehrter und Philosoph, 1138–1204', work: 'Mischne Tora, Hilchot Melachim 11–12' },
    { name: 'Moses ben Nachman (Nachmanides)', role: 'Rabbiner, Wortführer der Disputation von Barcelona 1263', work: 'Wikkuach (Bericht über die Disputation)' },
  ],
  steelman: `Die Hebräische Bibel sagt klar, woran man den Messias erkennt: Er ist ein menschlicher König aus dem Haus Davids, der Israel aus allen Ländern sammelt (Jes 11,11–12; Ez 37,21–22), den Tempel wiedererrichtet (Ez 37,26–28), Krieg für immer beendet (Jes 2,4; Mi 4,3) und die ganze Welt zur Erkenntnis des einen Gottes führt (Sach 14,9; Jer 31,34). Maimonides hat das rechtsverbindlich zusammengefasst: Wer das tut und gelingt, ist „gewiss der Messias"; wer scheitert oder getötet wird, war es nicht (Hilchot Melachim 11,4). Jesus hat keine dieser Aufgaben erfüllt: Der Tempel wurde vierzig Jahre nach ihm zerstört, Israel wurde in alle Welt zerstreut, und seit seinem Kommen ist die Geschichte – auch durch seine Anhänger – blutiger geworden, nicht friedlicher. Die Lehre vom „zweiten Kommen" ist eine nachträgliche Rettungsbehauptung, die man von jedem gescheiterten Messias-Prätendenten aufstellen könnte. Nachmanides hat schon 1263 in Barcelona vor dem König von Aragón gesagt: Seit den Tagen Jesu ist die Welt voller Gewalt – also ist die Messiaszeit nicht angebrochen.`,
  biblical: {
    summary: `Die Hebräische Bibel zeichnet zwei Bilder des kommenden Heilsbringers, die sich nicht in einem einzigen Auftreten vereinen lassen: den verachteten, durchbohrten, ausgerotteten Knecht (Jes 49,4–7; 52,13–53,12; Sach 12,10; Dan 9,26; Ps 22) und den herrschenden König, der Frieden und Erkenntnis Gottes bringt (Jes 2; 11; Dan 7,13–14). Viele Texte deuten eine **Reihenfolge** an: erst Ablehnung, dann Erhöhung (Jes 49,7; 53,10–12; Hos 3,4–5). Die Kriterien-Liste der Gegenseite beschreibt also das, was die Schrift über die Vollendung sagt – nicht notwendig das, was beim ersten Auftreten geschehen muss.`,
    detail: `- **Jes 49,1–7:** Der Knecht klagt: „Ich habe mich vergeblich gemüht" (49,4), er ist „von der Nation verabscheut, ein Knecht der Herrscher" (49,7) – und erst danach „werden Könige es sehen und aufstehen". Seine Sendung umfasst Israel **und** die Völker: „Ich mache dich zum Licht der Nationen, dass mein Heil reiche bis an das Ende der Erde" (49,6).
- **Jes 53,8–12:** Der Knecht wird „aus dem Land der Lebenden weggerissen" und begraben – und danach „wird er Nachkommen sehen und seine Tage verlängern". Tod und anschließende Erhöhung sind Teil des Programms.
- **Hos 3,4–5:** „Viele Tage" bleibt Israel ohne König, ohne Opfer, ohne Ephod – „danach" kehren sie um und suchen „David, ihren König". Genau diese Lage (kein Tempel, kein Opfer) besteht seit 70 n. Chr.
- **Sach 9,9 und 12,10:** Der König kommt „demütig, auf einem Esel"; später blickt Israel auf den, „den sie durchbohrt haben", und klagt um ihn wie um einen Erstgeborenen.
- **Dan 9,26:** Ein Gesalbter wird „ausgerottet" – vor der Zerstörung von Stadt und Heiligtum.
- **Typologie der Erlöser:** Josef wird von seinen Brüdern verkauft und erst beim zweiten Treffen erkannt (Gen 37; 45); Mose wird beim ersten Auftreten abgelehnt („Wer hat dich zum Obersten gesetzt?", Ex 2,14) und kehrt nach vierzig Jahren als Befreier zurück. Stephanus argumentiert genau so (Apg 7,25.35).

Das Neue Testament verschweigt die unerfüllten Erwartungen nicht: Die Jünger fragen nach der Himmelfahrt: „Stellst du in dieser Zeit das Reich für Israel wieder her?" – und Jesus verschiebt die Antwort, ohne sie zu verneinen (Apg 1,6–7). Petrus spricht von den „Zeiten der Wiederherstellung von allem" bei der Wiederkunft (Apg 3,19–21).`,
    sources: [
      { kind: 'bibel', work: 'Jesaja', ref: '2,4', quote: `Und er wird richten unter den Heiden und strafen viele Völker. Da werden sie ihre Schwerter zu Pflugscharen und ihre Spieße zu Sicheln machen.`, translation: 'Luther 1912', status: 'paraphrase', note: 'Wortlaut nach Luther 1912 aus dem Gedächtnis; vor wörtlicher Verwendung prüfen.' },
      { kind: 'bibel', work: 'Jesaja', ref: '49,4–7', quote: `Ich aber sprach: Vergeblich habe ich mich gemüht … So spricht der HERR … zu dem von der Nation Verabscheuten, zu dem Knecht der Herrscher: Könige werden es sehen und aufstehen.`, translation: 'eigene Übersetzung aus dem Hebräischen (gekürzt)', status: 'verbatim' },
      { kind: 'bibel', work: 'Hosea', ref: '3,4–5', quote: `Denn viele Tage werden die Kinder Israel ohne König und ohne Fürsten bleiben, ohne Schlachtopfer … Danach werden die Kinder Israel umkehren und den HERRN, ihren Gott, und David, ihren König, suchen … am Ende der Tage.`, translation: 'eigene Übersetzung aus dem Hebräischen (gekürzt)', status: 'verbatim' },
      { kind: 'bibel', work: 'Sacharja', ref: '9,9; 12,10', quote: `Siehe, dein König kommt zu dir, gerecht und ein Helfer, demütig und reitend auf einem Esel … Und sie werden auf mich blicken, den sie durchbohrt haben, und werden um ihn klagen, wie man klagt um den Einzigen.`, translation: 'eigene Übersetzung aus dem Hebräischen', status: 'verbatim' },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '1,6–7; 3,19–21', quote: `Herr, wirst du in dieser Zeit das Reich für Israel wiederherstellen? Er aber sprach zu ihnen: Es gebührt euch nicht, Zeiten oder Fristen zu kennen.`, translation: 'eigene Übersetzung aus dem Griechischen', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die Kirche bekennt im Glaubensbekenntnis von Nizäa-Konstantinopel beide Phasen: Christus „hat gelitten, ist begraben worden und am dritten Tage auferstanden" – und „er wird wiederkommen in Herrlichkeit, zu richten die Lebenden und die Toten; seines Reiches wird kein Ende sein". Schon Justin der Märtyrer (um 160) erklärte dem Juden Tryphon, die Propheten sprächen von **zwei Ankünften** des Christus: einer in Niedrigkeit und Leiden, einer in Herrlichkeit. Athanasius von Alexandrien argumentiert in „Über die Menschwerdung", dass die Prophetien über Zeit, Ort und Art des Kommens (Dan 9; Jes 7; Jes 53) erfüllt sind und dass seit Christus in Jerusalem weder König noch Prophet noch Vision mehr aufgetreten ist.`,
    detail: `Die koptisch-orthodoxe Kirche liest das Alte Testament in der alexandrinischen Tradition christozentrisch – wörtlich **und** geistlich. Dabei gilt: Was die Propheten über Frieden, Gerechtigkeit und die Erneuerung der Schöpfung sagen, wird **nicht** weggedeutet, sondern bei der Wiederkunft leibhaftig erfüllt (Auferstehung, neuer Himmel und neue Erde). Gleichzeitig hat das Reich schon begonnen: in der Versöhnung mit Gott, in der Kirche aus Juden und Heiden (Eph 2,14–16) und in der Ausbreitung der Erkenntnis des Gottes Israels unter den Völkern (Jes 49,6). Gegenüber dem jüdischen Volk gilt die Haltung des Apostels Paulus: tiefe Ehrfurcht und Liebe, denn „Gottes Gaben und Berufung können ihn nicht gereuen" (Röm 11,29).`,
    sources: [
      { kind: 'konzil', work: 'Glaubensbekenntnis von Nizäa-Konstantinopel', year: '325/381', quote: `… und er wird wiederkommen in Herrlichkeit, zu richten die Lebenden und die Toten; seines Reiches wird kein Ende sein.`, status: 'verbatim', translation: 'gebräuchliche deutsche Fassung' },
      { kind: 'kirchenvater', author: 'Justin der Märtyrer', work: 'Dialog mit dem Juden Tryphon', ref: '14,8; 32; 110', year: 'um 160', quote: `Die Propheten haben zwei Ankünfte des Christus angekündigt: die eine, in der er leidend und ungeehrt erschien, die andere, in der er in Herrlichkeit vom Himmel kommen wird.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Menschwerdung des Logos (De Incarnatione)', ref: '39–40', year: 'ca. 318', quote: `Seit Christus ist in Jerusalem weder König noch Prophet noch Vision mehr aufgetreten – die Prophetie ist „versiegelt", wie Daniel es angekündigt hat.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Für das rabbinische Judentum ist der Messias ein menschlicher, davidischer König, dessen Identität sich an seinem Erfolg zeigt; Maimonides formuliert in Hilchot Melachim 11,4 die bis heute maßgebliche Doppelstufe „mutmaßlicher Messias" (König aus Davids Haus, Tora-treu, führt Israel, kämpft die Kriege des Herrn) und „gewisser Messias" (baut den Tempel, sammelt die Zerstreuten). Ein getöteter Kandidat ist danach widerlegt – Maimonides nennt selbst Bar Kochba, den Rabbi Akiba für den Messias hielt.`,
    detail: `Ehrlich festzuhalten ist zugleich: Die rabbinische Literatur kennt **keine einheitliche** Messiaslehre. Der Talmud diskutiert einen getöteten „Messias ben Josef" neben dem siegreichen „Messias ben David" (bSukka 52a), einen Messias, der „mit den Wolken des Himmels" oder „demütig auf einem Esel" kommt (bSanhedrin 98a), einen leidenden Messias, der unter Kranken am Tor Roms sitzt (bSanhedrin 98a) und den Namen „der Aussätzige aus dem Lehrhaus" trägt, gestützt auf Jes 53,4 (bSanhedrin 98b). Ein Amoräer, Rabbi Hillel, meinte sogar, Israel habe gar keinen Messias mehr zu erwarten, da es ihn schon in Hiskia gehabt habe (bSanhedrin 99a). Maimonides selbst warnt, niemand wisse, wie sich diese Dinge genau ereignen werden, bevor sie geschehen (Hilchot Melachim 12,2), und er deutet manche Prophetien – etwa den Wolf beim Lamm – ausdrücklich als Gleichnis (12,1).`,
    sources: [
      { kind: 'juedisch', author: 'Moses Maimonides', work: 'Mischne Tora, Hilchot Melachim', ref: '11,3–4', year: 'um 1180', quote: `Wenn ein König aus dem Haus Davids aufsteht, der sich in die Tora vertieft … ganz Israel dazu bringt, in ihr zu wandeln, und die Kriege des HERRN führt, so gilt er als mutmaßlicher Messias. Gelingt es ihm, baut er das Heiligtum an seinem Ort und sammelt die Zerstreuten Israels, so ist er gewiss der Messias.`, status: 'paraphrase', note: 'In unzensierten Ausgaben folgt eine ausdrückliche Auseinandersetzung mit Jesus von Nazareth; in 11,3 nennt Maimonides Rabbi Akiba, der Bar Kochba für den Messias hielt.' },
      { kind: 'juedisch', author: 'Moses Maimonides', work: 'Mischne Tora, Hilchot Melachim', ref: '12,1–2', year: 'um 1180', quote: `Man soll nicht meinen, dass in den Tagen des Messias etwas vom Lauf der Welt aufhört … Das Wort Jesajas „Der Wolf wird beim Lamm wohnen" ist ein Gleichnis … Wie all diese Dinge sein werden, weiß niemand, bis sie geschehen.`, status: 'paraphrase' },
      { kind: 'juedisch', work: 'Babylonischer Talmud, Sukka', ref: '52a', quote: `Die Klage in Sach 12,12 gilt nach Rabbi Dosa dem Messias, dem Sohn Josefs, der getötet wird; der Talmud bestätigt dies unter Berufung auf Sach 12,10 („sie werden auf mich blicken, den sie durchbohrt haben").`, status: 'paraphrase', url: 'https://www.sefaria.org/Sukkah.52a' },
      { kind: 'juedisch', work: 'Babylonischer Talmud, Sanhedrin', ref: '98a', quote: `Rabbi Josua ben Levi stellte zwei Verse gegenüber: „Mit den Wolken des Himmels kam einer wie ein Menschensohn" (Dan 7,13) und „demütig, reitend auf einem Esel" (Sach 9,9). Sind sie würdig – mit den Wolken des Himmels; sind sie es nicht – demütig auf einem Esel.`, status: 'paraphrase', url: 'https://www.sefaria.org/Sanhedrin.98a' },
      { kind: 'juedisch', work: 'Babylonischer Talmud, Sanhedrin', ref: '98b–99a', quote: `Rabbi Hillel sagte: Für Israel gibt es keinen Messias mehr, denn sie haben ihn schon in den Tagen Hiskias genossen. Rav Josef sagte: Möge der Herr dem Rabbi Hillel vergeben.`, status: 'paraphrase', url: 'https://www.sefaria.org/Sanhedrin.99a' },
      { kind: 'gegner', author: 'Moses ben Nachman (Nachmanides)', work: 'Wikkuach (Disputation von Barcelona)', year: '1263', quote: `Der Prophet sagt, in der Zeit des Messias werde man nicht mehr Krieg lernen; doch seit den Tagen Jesu ist die ganze Welt voller Gewalt und Raub.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Die Hebräische Bibel beschreibt den Messias zweifach: als verachteten, durchbohrten und getöteten Knecht (Jes 53, Sach 12,10, Dan 9,26) und als König, der Frieden bringt (Jes 2, Jes 11). Beides zugleich geht nicht – deshalb kennt sogar der Talmud zwei Messiasbilder (bSukka 52a; bSanhedrin 98a). Jesus hat das erste erfüllt und ist auferstanden; die Liste, die du nennst, beschreibt sein zweites Kommen. Die eigentliche Frage ist also nicht „Hat er schon alles getan?", sondern „Verlangt die Schrift, dass alles beim ersten Mal geschieht?"`,
  keyPoints: [
    `**Zwei Bilder, eine Person:** Leiden und Herrschaft des Messias stehen beide im Tanach (Jes 49; 53; Sach 9 und 12; Dan 7 und 9). Wer nur die Herrschafts-Texte als „Kriterien" nimmt, lässt die Hälfte der Schrift weg.`,
    `**Die Rabbinen sahen die Spannung selbst:** Messias ben Josef wird getötet, Messias ben David siegt (bSukka 52a); der Messias kommt „mit den Wolken" oder „auf einem Esel" (bSanhedrin 98a).`,
    `**Biblisches Muster „erst abgelehnt, dann erkannt":** Josef, Mose, David – und der Knecht in Jes 49,4–7 und 53,10–12.`,
    `**Was schon erfüllt ist:** Der Gott Israels wird heute von Milliarden Menschen aus allen Völkern angebetet – genau die Sendung des Knechts als „Licht der Nationen" (Jes 49,6; 42,6).`,
    `**Die Auferstehung ist das Siegel:** Jede andere jüdische Messiasbewegung des Altertums endete mit dem Tod ihres Anführers; nur die Bewegung Jesu verkündete ihn danach erst recht als Messias.`,
    `**Ehrlich bleiben:** Weltfrieden und Sammlung Israels sind noch nicht vollendet – Christen deuten das nicht weg, sondern erwarten es leibhaftig bei der Wiederkunft (Apg 1,6–7; 3,19–21).`,
  ],
  argument: {
    name: 'Das Zwei-Phasen-Argument',
    summary: 'Die Schrift verlangt selbst, dass der Messias zuerst leidet und danach herrscht.',
    premises: [
      {
        text: 'P1: Die Hebräische Bibel kündigt einen Gesalbten/Knecht an, der verachtet, durchbohrt und getötet wird (Jes 53; Sach 12,10; Dan 9,26).',
        support: 'Die messianische Deutung dieser Texte ist auch im antiken Judentum belegt (Targum zu Jes 52,13; bSukka 52a; bSanhedrin 98b).',
        sources: [
          { kind: 'juedisch', work: 'Targum Jonathan zu Jesaja', ref: '52,13', quote: `Siehe, mein Knecht, der Messias, wird Gelingen haben; er wird erhöht und groß und sehr stark sein.`, original: 'הא יצלח עבדי משיחא ירום ויסגי ויתקוף לחדא', translation: 'eigene Übersetzung aus dem Aramäischen', status: 'verbatim', note: 'Der Targum bezieht die Leidensaussagen von Jes 53 allerdings überwiegend auf Israel bzw. die Völker – das muss man ehrlich dazusagen.' },
        ],
      },
      {
        text: 'P2: Dieselbe Bibel kündigt einen davidischen König an, der in Frieden und Gerechtigkeit über die Völker herrscht (Jes 2; 11; Dan 7,13–14).',
        support: 'Unstrittig zwischen Juden und Christen.',
      },
      {
        text: 'P3: Ein und dieselbe Person kann nicht im selben Auftreten getötet werden und ungebrochen siegreich herrschen.',
        support: 'Logische Unvereinbarkeit; deshalb verteilt der Talmud die Bilder auf zwei Gestalten oder auf zwei Bedingungen.',
      },
      {
        text: 'P4: Mehrere Texte deuten eine Abfolge an: erst Ablehnung und Tod, danach Erhöhung (Jes 49,4–7; 53,10–12; Hos 3,4–5; Sach 12,10).',
        support: 'Die Reihenfolge ergibt sich aus dem Text selbst, nicht aus christlicher Rückprojektion.',
      },
    ],
    inferences: [
      'Also verlangt die Schrift nicht, dass alle Herrschaftsverheißungen beim ersten Auftreten erfüllt werden.',
      'Also widerlegt die Nichterfüllung der Herrschaftsverheißungen Jesus nicht, sofern er die Leidensphase erfüllt hat und von Gott bestätigt wurde (Auferstehung).',
    ],
    conclusion: 'Das Argument „Jesus hat die Kriterien nicht erfüllt" setzt ein Ein-Phasen-Modell voraus, das die Hebräische Bibel selbst nicht stützt.',
  },
  voices: [
    {
      person: 'justin',
      role: 'als erster christlicher Gesprächspartner eines gelehrten Juden',
      text: `Justin führte um 160 in Ephesus ein langes Gespräch mit dem Juden Tryphon. Tryphon brachte genau den heutigen Einwand: Die Schrift zwinge, einen glorreichen Messias zu erwarten, der „wie ein Menschensohn" mit den Wolken kommt (Dan 7) – Jesus aber sei „ungeehrt und ohne Herrlichkeit" gestorben. Justin antwortete, die Propheten sprächen von **zwei Ankünften**: einer in Leiden, einer in Herrlichkeit, und erst bei der zweiten würden die Völker den erkennen, „den sie durchbohrt haben" (Sach 12,10). Bemerkenswert: Tryphon räumte später ein, dass die Schrift einen leidenden Messias kenne – sein Anstoß war vor allem die Kreuzigung (Dial. 89–90).`,
      sources: [
        { kind: 'kirchenvater', author: 'Justin der Märtyrer', work: 'Dialog mit dem Juden Tryphon', ref: '32; 89–90; 110', year: 'um 160', status: 'paraphrase' },
      ],
    },
    {
      person: 'michael-brown',
      role: 'als messianisch-jüdischer Semitist',
      text: `Brown betont, dass die Messias-Kriterien der Gegenseite nicht falsch, sondern **unvollständig** sind: Sie greifen die Vollendungs-Texte heraus und übergehen die priesterlichen und leidenden Züge des Messias. Der Messias ist nach der Schrift König **und** Priester (Ps 110,4; Sach 6,12–13); seine priesterliche Aufgabe – Sühne und Versöhnung – musste vor der Zerstörung des Zweiten Tempels geschehen, seine königliche Herrschaft wird bei seiner Rückkehr vollendet. Brown verweist außerdem darauf, dass der Gott Israels durch Jesus heute weltweit angebetet wird – eine Erfüllung von Jes 49,6, die kein anderer jüdischer Messias-Prätendent auch nur annähernd vorweisen kann.`,
      sources: [
        { kind: 'fachliteratur', author: 'Michael L. Brown', work: 'Answering Jewish Objections to Jesus, Bd. 1: General and Historical Objections', year: '2000', status: 'paraphrase' },
        { kind: 'fachliteratur', author: 'Michael L. Brown', work: 'Answering Jewish Objections to Jesus, Bd. 3: Messianic Prophecy Objections', year: '2003', status: 'paraphrase' },
      ],
    },
    {
      person: 'nt-wright',
      role: 'als Historiker des Judentums des Zweiten Tempels',
      text: `Wright zeigt, dass im 1. Jahrhundert ein gekreuzigter Messias für Juden schlicht ein gescheiterter Messias war: Nach dem Tod von Judas dem Galiläer, Theudas oder später Simon bar Kochba suchten die Anhänger entweder einen neuen Anführer oder gaben auf. Dass die Anhänger Jesu ihn gerade **nach** seiner Hinrichtung als Messias verkündeten – und zwar Juden, die keinen sterbenden Messias erwartet hatten –, erklärt Wright historisch nur durch ihre feste Überzeugung, Gott habe ihn leiblich auferweckt.`,
      sources: [
        { kind: 'fachliteratur', author: 'N. T. Wright', work: 'The Resurrection of the Son of God', year: '2003', status: 'paraphrase' },
        { kind: 'fachliteratur', author: 'N. T. Wright', work: 'Jesus and the Victory of God', year: '1996', status: 'paraphrase' },
      ],
    },
    {
      person: 'edersheim',
      role: 'als jüdischer Gelehrter der rabbinischen Literatur',
      text: `Edersheim stellte im Anhang seines Lebens Jesu Hunderte von Schriftstellen zusammen (er zählt über 450), die in alten rabbinischen Schriften messianisch gedeutet werden. Sein Ergebnis: Die alte Synagoge las die Schrift weit messianischer als spätere Polemik zugab – einschließlich Stellen über Leiden und Erniedrigung. Wer behauptet, der leidende Messias sei eine christliche Erfindung, kennt die eigene Tradition nicht vollständig.`,
      sources: [
        { kind: 'fachliteratur', author: 'Alfred Edersheim', work: 'The Life and Times of Jesus the Messiah', ref: 'Anhang IX', year: '1883', status: 'paraphrase' },
      ],
    },
    {
      person: 'athanasius',
      role: 'als alexandrinischer Ausleger der Prophetie',
      text: `In „Über die Menschwerdung" (Kap. 33–40) prüft Athanasius die jüdischen Einwände Schritt für Schritt an den Propheten: Die Jungfrau-Geburt, der Stern aus Jakob, das Leiden des Knechts und der Zeitpunkt nach Daniel 9 seien in Christus erfüllt. Sein Schlussargument: Wenn der Messias noch nicht gekommen sei, warum habe Jerusalem dann seit Christus weder König noch Prophet noch Vision mehr? Die Zeichen der ersten Ankunft seien erfüllt; die Herrlichkeit der zweiten stehe noch aus.`,
      sources: [
        { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Menschwerdung des Logos (De Incarnatione)', ref: '33–40', year: 'ca. 318', status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'liste-nicht-erfuellt',
      objection: `Der Messias muss den Dritten Tempel bauen, alle Juden ins Land Israel zurückbringen, Weltfrieden schaffen und die ganze Welt zur Erkenntnis des einen Gottes führen. Jesus hat nichts davon getan. Mehr muss man nicht wissen.`,
      objectionBy: 'Tovia Singer',
      answer: `Diese Texte gibt es, und ich glaube, dass sie wörtlich erfüllt werden. Aber dieselbe Bibel sagt auch, dass ein Gesalbter „ausgerottet" wird (Dan 9,26), dass man auf den blickt, „den sie durchbohrt haben" (Sach 12,10), und dass der Knecht verachtet wird und stirbt (Jes 53). Beides zugleich kann eine Person nicht tun. Deshalb hat der Talmud selbst zwei Messiasbilder. Die Frage ist: Wo steht, dass alles beim ersten Auftreten geschehen muss?`,
      detail: `Die „Kriterienliste" ist eine Auswahl. Sie wurde vor allem von Maimonides (Hilchot Melachim 11) systematisiert – also über tausend Jahre nach Jesus und in bewusster Abgrenzung zum Christentum (in unzensierten Ausgaben nennt Maimonides Jesus ausdrücklich). Die Texte über Leiden, Ablehnung und Tod des Messias kommen in der Liste nicht vor, obwohl die Rabbinen sie kannten (bSukka 52a; bSanhedrin 98a–b).`,
      questionsBack: [
        `Welche Stelle der Hebräischen Bibel sagt ausdrücklich, dass der Messias alle diese Dinge bei seinem ersten Auftreten vollbringen muss?`,
        `Wie passen Sach 12,10 und Dan 9,26 in deine Liste?`,
      ],
      followUps: [
        {
          id: 'zweites-kommen-erfunden',
          objection: `„Zweites Kommen" ist eine Ausrede, die die Jünger erfanden, nachdem ihr Messias gescheitert war. Kein Vers im Tanach sagt, dass der Messias zweimal kommt.`,
          objectionBy: 'Michael Skobac',
          answer: `Das Wort „zweites Kommen" steht nicht da – aber die Abfolge steht da. Jes 49: Der Knecht müht sich „vergeblich", wird von der Nation verabscheut, und erst danach stehen Könige vor ihm auf. Jes 53: Er wird begraben – und danach „verlängert er seine Tage". Hos 3: „Viele Tage" ohne König und Opfer, „danach" suchen sie David, ihren König. Und Justin hat das schon um 160 einem Juden namens Tryphon erklärt – lange bevor irgendwer eine „Ausrede" brauchte.`,
          detail: `Das biblische Grundmuster des Erlösers ist „erst abgelehnt, dann erkannt": Josef wird von seinen Brüdern nicht erkannt und rettet sie später (Gen 45); Mose wird beim ersten Auftreten abgewiesen (Ex 2,14) und kehrt nach vierzig Jahren als Befreier zurück; David wird gesalbt (1 Sam 16) und muss jahrelang fliehen, bevor er König wird. Stephanus argumentiert in Apg 7,25.35 genau mit diesem Muster.`,
          sources: [
            { kind: 'bibel', work: 'Jesaja', ref: '53,10', quote: `Wenn er sein Leben als Schuldopfer eingesetzt hat, wird er Nachkommen sehen, er wird seine Tage verlängern.`, translation: 'eigene Übersetzung aus dem Hebräischen', status: 'verbatim' },
          ],
          followUps: [
            {
              id: 'typologie-beliebig',
              objection: `Josef und Mose sind Erzählungen, keine Messias-Prophetien. Mit Typologie kannst du alles in alles hineinlesen.`,
              objectionBy: 'Stuart Federow',
              answer: `Einverstanden: Typologie allein beweist nichts – deshalb stütze ich mich zuerst auf die direkten Texte (Jes 53, Sach 12,10, Dan 9,26). Aber das Muster ist keine christliche Erfindung: Der Midrasch selbst sagt, der letzte Erlöser werde sein wie der erste – Mose offenbarte sich, verbarg sich und erschien wieder; so werde sich auch der Messias offenbaren, verborgen werden und wiederkommen.`,
              sources: [
                { kind: 'juedisch', work: 'Midrasch Rut Rabba', ref: '5,6', quote: `Wie der erste Erlöser, so der letzte Erlöser: Der erste offenbarte sich ihnen und wurde dann vor ihnen verborgen … so wird sich auch der letzte Erlöser ihnen offenbaren und dann vor ihnen verborgen werden.`, status: 'unverified', note: 'Inhalt vielfach zitiert (vgl. auch Bamidbar Rabba 11,2; Pesikta Rabbati 15); Wortlaut und Zählung vor Verwendung an einer Ausgabe prüfen.' },
              ],
              followUps: [
                {
                  id: 'verborgen-45-tage',
                  objection: `Der Midrasch spricht von einer kurzen Verborgenheit – 45 Tagen nach Dan 12. Das ist etwas völlig anderes als 2000 Jahre Abwesenheit und eine neue Weltreligion.`,
                  objectionBy: 'Tovia Singer',
                  answer: `Richtig, der Midrasch nennt eine kurze Frist – mir geht es um das Muster, nicht um die Dauer. Die Dauer nennt die Schrift nicht; Hosea sagt nur „viele Tage". Und auch das Judentum muss eine Verzögerung von fast zweitausend Jahren erklären: Der Talmud selbst sagt, die zweitausend „Tage des Messias" seien wegen der Sünden verloren gegangen (bSanhedrin 97a–b). Eine neue Religion ist es übrigens nicht: Es ist der Glaube Abrahams, Isaaks und Jakobs, geöffnet für die Völker – genau wie Jes 49,6 es ankündigt.`,
                  sources: [
                    { kind: 'juedisch', work: 'Babylonischer Talmud, Sanhedrin', ref: '97a–b', quote: `Die Schule Elijas lehrte: Sechstausend Jahre besteht die Welt – zweitausend Jahre Öde, zweitausend Jahre Tora, zweitausend Jahre Tage des Messias; doch wegen unserer vielen Sünden sind von ihnen vergangen, die vergangen sind.`, status: 'paraphrase', url: 'https://www.sefaria.org/Sanhedrin.97a' },
                  ],
                  questionsBack: [
                    `Wenn die „Tage des Messias" nach dem Talmud schon begonnen haben sollten, wie erklärst du die Verzögerung – und warum darf ein Christ nicht ebenfalls von einer Zwischenzeit sprechen?`,
                  ],
                },
              ],
            },
            {
              id: 'sanhedrin-98a-entweder-oder',
              objection: `Sanhedrin 98a ist kein Zwei-Phasen-Modell, sondern ein Entweder-Oder: Je nach Verdienst Israels kommt der Messias auf den Wolken ODER auf einem Esel. Du missbrauchst den Talmud.`,
              objectionBy: 'Tovia Singer',
              answer: `Du hast recht, der Talmud formuliert es als Bedingung – das gestehe ich zu. Mein Punkt ist bescheidener: Der Talmud zeigt, dass beide Bilder zum selben Messias gehören und nicht einfach eines davon gestrichen werden kann. Die Bibel selbst stellt sie nicht als Alternative nebeneinander, sondern beide als Verheißung. Jesus hat Sach 9,9 beim Einzug in Jerusalem erfüllt und vor dem Hohen Rat Dan 7,13 auf seine Wiederkunft bezogen (Mk 14,62). Nicht „entweder – oder", sondern „zuerst – dann".`,
              sources: [
                { kind: 'juedisch', work: 'Babylonischer Talmud, Sanhedrin', ref: '98a', quote: `Sind sie würdig – „mit den Wolken des Himmels"; sind sie nicht würdig – „demütig, reitend auf einem Esel".`, status: 'paraphrase', url: 'https://www.sefaria.org/Sanhedrin.98a' },
                { kind: 'bibel', work: 'Markus', ref: '14,61–62', quote: `Bist du der Christus, der Sohn des Hochgelobten? Jesus aber sprach: Ich bin es; und ihr werdet den Menschensohn sitzen sehen zur Rechten der Macht und kommen mit den Wolken des Himmels.`, translation: 'eigene Übersetzung aus dem Griechischen', status: 'verbatim' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'weltfrieden-blut',
      objection: `Jesaja 2: Schwerter zu Pflugscharen. Seit Jesus wurde mehr Blut vergossen als je zuvor – oft im Namen Jesu und gerade gegen Juden: Kreuzzüge, Inquisition, Pogrome. Wie kann er der Friedefürst sein?`,
      objectionBy: 'Shmuley Boteach (in der Linie von Nachmanides, Barcelona 1263)',
      answer: `Zuerst: Was Christen Juden angetan haben, ist eine Schuld, die ich nicht kleinrede – es war Verrat an Christus, nicht seine Erfüllung (Röm 11,18). Zur Sache: Jes 2 spricht vom Ende der Tage, und genau dieses Ende erwarten wir noch. Was Jesus schon gebracht hat, ist der Friede, den Jes 53,5 nennt – „die Strafe lag auf ihm, damit wir Frieden hätten" – und die Versöhnung von Juden und Heiden im einen Gott Israels.`,
      detail: `Nachmanides hat dieses Argument 1263 in Barcelona eindrucksvoll vorgebracht, und es ist bis heute das emotional stärkste. Eine ehrliche Antwort muss zwei Dinge zugleich sagen: (1) Die Verbrechen von Christen an Juden widersprechen der Lehre Jesu (Mt 5,44; 26,52) und des Paulus, der für Israel „große Traurigkeit und unaufhörlichen Schmerz" empfand und sich wünschte, selbst verflucht zu sein für seine Brüder (Röm 9,1–3). (2) Die Frage, ob Jesus der Messias ist, entscheidet sich nicht am Verhalten seiner Anhänger, sondern an der Schrift und an seiner Auferstehung – sonst müsste man jede Wahrheit an ihren schlechtesten Vertretern messen.`,
      sources: [
        { kind: 'bibel', work: 'Jesaja', ref: '53,5', quote: `Aber er ist um unsrer Missetat willen verwundet und um unsrer Sünde willen zerschlagen. Die Strafe liegt auf ihm, auf daß wir Frieden hätten, und durch seine Wunden sind wir geheilt.`, translation: 'Luther 1912', status: 'verbatim' },
        { kind: 'bibel', work: 'Römer', ref: '11,18', quote: `So rühme dich nicht gegen die Zweige. Rühmst du dich aber, so sollst du wissen, daß du die Wurzel nicht trägst, sondern die Wurzel trägt dich.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'spiritualisierung',
          objection: `Das ist Spiritualisierung: „Frieden im Herzen". Die Propheten meinten echten, politischen, sichtbaren Frieden zwischen Völkern.`,
          objectionBy: 'Tovia Singer',
          answer: `Da stimme ich dir zu – und ich deute es nicht weg. Christen erwarten echten, leibhaftigen Weltfrieden, eine erneuerte Schöpfung, die Auferstehung der Toten (Jes 11; 65; Offb 21). Der Unterschied zwischen uns ist nicht, ob es kommt, sondern ob der Messias alles bei seinem ersten Auftreten tun muss. Übrigens: Maimonides selbst deutet manche dieser Bilder als Gleichnis, etwa den Wolf beim Lamm.`,
          sources: [
            { kind: 'juedisch', author: 'Moses Maimonides', work: 'Mischne Tora, Hilchot Melachim', ref: '12,1', quote: `Man soll nicht meinen, dass in den Tagen des Messias etwas vom Lauf der Welt aufhört … „Der Wolf wird beim Lamm wohnen" ist ein Gleichnis und Rätselwort.`, status: 'paraphrase' },
          ],
          followUps: [
            {
              id: 'maimonides-nur-tiere',
              objection: `Maimonides deutet nur die Tierbilder bildlich. Weltfrieden, Tempel und Sammlung nimmt er völlig wörtlich – und die hat Jesus nicht gebracht.`,
              objectionBy: 'Michael Skobac',
              answer: `Genau – und damit sind wir uns in der Methode einig: Jeder Leser muss entscheiden, was wörtlich, was bildlich und **in welcher Reihenfolge** es geschieht. Maimonides schreibt selbst, niemand wisse, wie diese Dinge sein werden, bis sie geschehen (12,2). Dann ist dein Argument aber kein Beweis mehr, sondern eine Auslegungsentscheidung – und meine Auslegung hat Jes 53, Sach 12 und Dan 9 auf ihrer Seite.`,
              questionsBack: [
                `Wenn Maimonides zugibt, dass niemand den genauen Ablauf kennt – woher weißt du dann, dass der Messias nicht zuerst leiden und danach herrschen kann?`,
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'messias-nur-mensch',
      objection: `Der Messias ist ein Mensch, ein König aus Davids Haus – kein Gott. Ein göttlicher Messias ist dem Judentum völlig fremd; das ist heidnisches Denken.`,
      objectionBy: 'Shmuley Boteach',
      answer: `Der Messias ist wirklich Mensch und Sohn Davids – das glauben wir auch. Aber der Tanach gibt ihm Züge, die über einen bloßen König hinausgehen: Jes 9,5 nennt das Kind „El Gibbor", „starker Gott" – derselbe Titel, der in Jes 10,21 Gott selbst bezeichnet. Dan 7 zeigt einen „wie ein Menschensohn", der auf den Wolken kommt und dem alle Völker dienen. Mi 5,1 spricht von seinem Ursprung „von den Tagen der Ewigkeit". Und der Midrasch sagt sogar: „Wie lautet der Name des Königs Messias? JHWH ist sein Name."`,
      sources: [
        { kind: 'bibel', work: 'Jesaja', ref: '9,5', quote: `Denn uns ist ein Kind geboren, ein Sohn ist uns gegeben, und die Herrschaft ist auf seiner Schulter; und er heißt Wunderbar, Rat, Kraft, Held, Ewig-Vater, Friedefürst.`, translation: 'Luther 1912', status: 'verbatim', note: 'Hebräisch „El Gibbor" (Luther: „Kraft, Held") – vgl. Jes 10,21, wo derselbe Ausdruck Gott bezeichnet.' },
        { kind: 'juedisch', work: 'Midrasch Echa Rabba (Klagelieder)', ref: '1,51 (zu Klgl 1,16)', quote: `Wie lautet der Name des Königs Messias? Rabbi Abba bar Kahana sagte: JHWH ist sein Name, denn es heißt (Jer 23,6): „Und dies ist sein Name, mit dem man ihn nennen wird: JHWH ist unsere Gerechtigkeit."`, status: 'paraphrase', note: 'Zählung je nach Ausgabe verschieden.' },
        { kind: 'juedisch', work: 'Babylonischer Talmud, Bava Batra', ref: '75b', quote: `Drei werden mit dem Namen des Heiligen, gepriesen sei er, genannt: die Gerechten, der Messias und Jerusalem.`, status: 'paraphrase', url: 'https://www.sefaria.org/Bava_Batra.75b' },
      ],
      followUps: [
        {
          id: 'satzname-jer-23',
          objection: `Jer 23,6 ist ein Satzname wie „Elijahu" – „mein Gott ist JHWH". Das macht den Träger nicht zum Gott. Jer 33,16 gibt denselben Namen sogar der Stadt Jerusalem!`,
          objectionBy: 'Tovia Singer',
          answer: `Das ist ein fairer Punkt, den ich dir zugestehe: Satznamen allein beweisen keine Gottheit, und Jer 33,16 zeigt das. Mein Argument ruht auch nicht auf einem Namen, sondern auf dem Gesamtbild: Dan 7 (Wolkenreiter, ewige Herrschaft, Dienst aller Völker), Ps 110 (sitzt zur Rechten Gottes), Mi 5,1 (Ursprung von Ewigkeit) und Sach 12,10, wo JHWH sagt: „Sie werden auf **mich** blicken, den sie durchbohrt haben." Der Talmud zeigt nur, dass so ein Gedanke nicht „heidnisch" ist.`,
          followUps: [
            {
              id: 'pelach-daniel',
              objection: `Das aramäische Wort in Dan 7,14 kann auch den Dienst für einen menschlichen König meinen, und Dan 7,27 überträgt das Reich dem „Volk der Heiligen des Höchsten". Der Menschensohn ist ein Symbol für Israel.`,
              objectionBy: 'Stuart Federow',
              answer: `Die kollektive Deutung ist ernst zu nehmen – der Menschensohn repräsentiert sein Volk. Aber zwei Dinge bleiben: Das Kommen „mit den Wolken" ist in der Bibel sonst Gottes Vorrecht (Ps 104,3; Jes 19,1), und das Verb „dienen" (pelach) wird im Buch Daniel sonst für den Gottesdienst verwendet (Dan 3,12.14.17.18.28; 6,17.21). Selbst der jüdische Talmudgelehrte Daniel Boyarin sieht in Dan 7 eine zweite, göttliche Gestalt neben dem „Alten an Tagen" – und Jesus hat sich vor dem Hohen Rat genau damit identifiziert, was als Gotteslästerung gewertet wurde (Mk 14,62–64).`,
              sources: [
                { kind: 'fachliteratur', author: 'Daniel Boyarin', work: 'The Jewish Gospels: The Story of the Jewish Christ', ref: 'Kap. 1', year: '2012', status: 'paraphrase', note: 'Boyarin ist orthodox-jüdischer Talmudforscher (Berkeley), kein Christ – das Zugeständnis wiegt daher schwer.' },
              ],
              questionsBack: [
                `Wenn der Menschensohn bloß ein Symbol für Israel ist – warum reitet er auf den Wolken, was sonst nur Gott tut?`,
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'eigenes-volk-lehnt-ab',
      objection: `Wenn Jesus der Messias wäre, warum lehnen ihn sein eigenes Volk und gerade die besten Kenner der Schrift seit 2000 Jahren ab?`,
      objectionBy: 'Michael Skobac',
      answer: `Nicht das ganze Volk: Die erste Gemeinde war vollständig jüdisch, die Apostel waren Juden, und Apg 21,20 spricht von „Zehntausenden" gläubigen Juden. Die Ablehnung selbst ist vorhergesagt: „Wer glaubt unserer Botschaft?" (Jes 53,1), „verachtet und von den Menschen verlassen" (53,3). Und Expertenkonsens entscheidet keine Messiasfrage: Rabbi Akiba, einer der größten Gelehrten, hielt Bar Kochba für den Messias – und irrte.`,
      sources: [
        { kind: 'bibel', work: 'Apostelgeschichte', ref: '21,20', quote: `Bruder, du siehst, wie viele Tausende (wörtlich: Zehntausende) unter den Juden gläubig geworden sind, und alle sind Eiferer für das Gesetz.`, translation: 'eigene Übersetzung aus dem Griechischen', status: 'verbatim' },
        { kind: 'juedisch', work: 'Jerusalemer Talmud, Taanit', ref: '4 (68d)', quote: `Rabbi Akiba sagte, als er Bar Koziba sah: Das ist der König Messias.`, status: 'paraphrase', note: 'Auch Maimonides, Hilchot Melachim 11,3, erwähnt dies.' },
      ],
      followUps: [
        {
          id: 'kleine-sekte',
          objection: `Die Judenchristen waren eine winzige Sekte, die bald verschwand. Die Rabbinen, die die Tora bewahrten, haben ihn abgelehnt – das ist das Urteil Israels.`,
          objectionBy: 'Tovia Singer',
          answer: `Auch die Pharisäer waren damals eine „Sekte" (Josephus nennt sie so), und Zahlen entscheiden keine Wahrheit. Paulus sagt nicht, Israel sei verworfen, sondern: „Hat Gott sein Volk verstoßen? Das sei ferne!" (Röm 11,1). Eine teilweise Verhärtung ist zeitlich begrenzt (Röm 11,25), und Gottes Berufung Israels ist unwiderruflich (Röm 11,29). Und auch heute bekennt eine wachsende Zahl jüdischer Menschen Jesus als Messias, ohne aufzuhören, Juden zu sein.`,
          followUps: [
            {
              id: 'verfolgung-durch-christen',
              objection: `Und was hat Israel von diesem „Messias" gehabt? Zwei Jahrtausende Verfolgung, Ghettos und Zwangstaufen durch seine Anhänger.`,
              objectionBy: 'Shmuley Boteach',
              answer: `Das ist eine Wunde, vor der ich mich schäme, und ich bitte dich, sie nicht Jesus zuzurechnen. Wer einen Juden verfolgt, verfolgt die Brüder Jesu nach dem Fleisch (Röm 9,5) und verleugnet den, den er zu bekennen meint. Die koptische Kirche weiß selbst, was es heißt, jahrhundertelang als Minderheit zu leiden. Gerade deshalb trenne ich zwei Fragen: Was Christen falsch gemacht haben – und ob Jesus der ist, den Mose und die Propheten angekündigt haben.`,
              questionsBack: [
                `Wenn wir uns einig sind, dass Verfolgung im Namen Jesu seiner Lehre widerspricht – können wir dann über die Texte selbst reden?`,
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'gescheiterter-praetendent',
      objection: `Jesus war einer von vielen gescheiterten Messias-Prätendenten: Theudas, Judas der Galiläer, Bar Kochba, Schabbtai Zwi. Alle wurden getötet oder scheiterten. Warum sollte er die Ausnahme sein?`,
      objectionBy: 'Tovia Singer',
      answer: `Gerade der Vergleich spricht für Jesus. Nach dem Tod aller anderen löste sich ihre Bewegung auf oder suchte einen neuen Anführer. Nur die Anhänger Jesu verkündeten ihn **nach** seiner Hinrichtung in Jerusalem als Messias – und zwar Juden, die keinen sterbenden Messias erwartet hatten. Warum? Weil sie ihn lebendig gesehen hatten. Die Auferstehung ist Gottes Urteil über ihn.`,
      voices: [
        {
          person: 'nt-wright',
          role: 'als Historiker',
          text: `Wright betont, dass „Messias" im 1. Jahrhundert einen siegreichen König meinte; ein gekreuzigter Messias war ein Widerspruch in sich. Dass die Bewegung Jesu nicht zerfiel, sondern ihn als Messias und Herrn verkündete, verlangt nach einer Erklärung – und die Jünger selbst nannten nur eine: die leibliche Auferstehung.`,
        },
      ],
      followUps: [
        {
          id: 'chabad-rebbe',
          objection: `Auch heute glauben Anhänger des Lubawitscher Rebbe (gest. 1994), er sei der Messias und werde wiederkommen. Glaube an einen toten Messias beweist also gar nichts.`,
          objectionBy: 'Michael Skobac',
          answer: `Ein guter Vergleich – und er zeigt den Unterschied. Die Messianisten in Chabad behaupten nicht, den Rebbe nach seinem Tod leiblich gesehen, mit ihm gegessen und ihn betastet zu haben, und niemand ist für diese Behauptung als Augenzeuge in den Tod gegangen. Die Apostel dagegen bezeugten wenige Wochen nach der Kreuzigung, in derselben Stadt, ein leeres Grab und leibliche Begegnungen – und blieben dabei unter Verfolgung. Michael Brown hat genau diesen Vergleich ausführlich untersucht.`,
          sources: [
            { kind: 'fachliteratur', author: 'Michael L. Brown', work: 'Resurrection: Investigating a Rabbi from Brooklyn, a Preacher from Galilee, and an Event that Changed the World', year: '2020', status: 'paraphrase' },
          ],
          followUps: [
            {
              id: 'auferstehung-kein-kriterium',
              objection: `Die Auferstehung ist ohnehin kein messianisches Kriterium. Wir Juden glauben an die Auferstehung aller am Ende der Tage – nicht an die eines Einzelnen mitten in der Geschichte.`,
              objectionBy: 'Tovia Singer',
              answer: `Genau deshalb ist sie so bedeutsam: Weil Juden des 1. Jahrhunderts nur die allgemeine Auferstehung am Ende erwarteten, hätten die Jünger die Auferstehung eines Einzelnen mitten in der Geschichte nie erfunden – sie hätten eher gesagt, seine Seele sei bei Gott. Und Jes 53,10–12 kündigt genau das an: Der Knecht stirbt, wird begraben – und „verlängert danach seine Tage" und wird erhöht. Wenn Gott einen angeblichen Gotteslästerer auferweckt, ist das sein Urteil.`,
              questionsBack: [
                `Wenn die Auferstehung Jesu historisch wäre – würdest du dann seinen Anspruch, der Messias zu sein, neu prüfen?`,
              ],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Welche Stelle der Hebräischen Bibel verlangt, dass der Messias alles bei seinem ersten Auftreten vollbringt?`,
    `Wie verbindest du Sach 12,10 („den sie durchbohrt haben") und Dan 9,26 („ein Gesalbter wird ausgerottet") mit deiner Kriterienliste?`,
    `Warum spricht der Talmud von einem getöteten Messias ben Josef, wenn ein sterbender Messias dem Judentum fremd ist?`,
    `Wer außer Jesus hat den Gott Israels zu Milliarden Menschen aus den Völkern gebracht (Jes 49,6)?`,
    `Wie erklärst du historisch, dass die jüdischen Jünger Jesu ihn gerade nach seiner Hinrichtung als Messias verkündeten?`,
  ],
  avoid: [
    `Nicht behaupten, die Juden hätten die Kriterien „erfunden", um Jesus auszuschließen. Die Herrschafts-Texte stehen wirklich in der Schrift; der Streit geht um ihre Reihenfolge.`,
    `Nicht Weltfrieden, Tempel und Sammlung „geistlich" wegdeuten („Frieden im Herzen genügt"). Das wirkt wie eine Ausflucht und widerspricht der christlichen Hoffnung auf leibliche Vollendung.`,
    `Keine Formulierungen wie „die Juden haben ihren Messias verworfen und wurden dafür bestraft". Das ist Antijudaismus, widerspricht Röm 11 und beendet jedes Gespräch.`,
    `Nicht jede rabbinische Stelle als „Beweis für Jesus" ausgeben. Der Talmud zeigt die Offenheit der eigenen Tradition für einen leidenden Messias – nicht, dass die Rabbinen an Jesus glaubten.`,
  ],
  concessions: [
    `Weltfrieden, Wiederherstellung Israels und universale Gotteserkenntnis sind noch nicht vollendet. Christen erwarten das noch – bei der Wiederkunft Christi.`,
    `Der Begriff „zweites Kommen" steht nicht wörtlich im Tanach; das Zwei-Phasen-Modell wird aus der Abfolge der Texte erschlossen.`,
    `Das Verhalten vieler Christen gegenüber Juden war über Jahrhunderte ein schweres Gegenzeugnis und hat die Glaubwürdigkeit der Botschaft beschädigt.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Michael L. Brown', work: 'Answering Jewish Objections to Jesus, Bd. 1–5', year: '2000–2010', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Michael Rydelnik', work: 'The Messianic Hope: Is the Hebrew Bible Really Messianic?', year: '2010', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Walter C. Kaiser Jr.', work: 'The Messiah in the Old Testament', year: '1995', status: 'paraphrase' },
    { kind: 'kirchenvater', author: 'Justin der Märtyrer', work: 'Dialog mit dem Juden Tryphon', year: 'um 160', status: 'paraphrase' },
    { kind: 'gegner', author: 'Tovia Singer', work: 'Let\'s Get Biblical! Why Doesn\'t Judaism Accept the Christian Messiah?', year: '2014', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Messias', 'Judentum', 'Maimonides', 'Talmud', 'Wiederkunft', 'Messias ben Josef'],
  related: [
    'judentum-messias/jesaja-53-ist-israel',
    'judentum-messias/messias-noch-nicht-gekommen',
    'judentum-messias/stammbaum-jechonja',
    'auferstehung/halluzinationen',
    'prophetie/wiederkunft-falsche-prophetie',
  ],
};

export default claim;
