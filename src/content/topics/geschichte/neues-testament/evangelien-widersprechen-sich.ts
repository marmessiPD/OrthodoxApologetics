import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'evangelien-widersprechen-sich',
  title: `„Die Evangelien widersprechen sich – sogar bei Kreuzigung und Auferstehung."`,
  proponents: [
    { name: 'Bart D. Ehrman', role: 'Neutestamentler, UNC', work: 'Jesus, Interrupted: Revealing the Hidden Contradictions in the Bible (2009)' },
    { name: 'Porphyrios von Tyros', role: 'Neuplatonischer Philosoph, 3. Jh.', work: 'Gegen die Christen (fragmentarisch erhalten)' },
    { name: 'Ahmed Deedat', role: 'Muslimischer Apologet', work: 'Is the Bible God’s Word? (1980)' },
    { name: 'Dan McClellan', role: 'Bibelwissenschaftler, Social Media', work: 'Beiträge zu Widersprüchen und Harmonisierung' },
  ],
  steelman: `Lies die Evangelien nicht nacheinander, sondern nebeneinander – „horizontal" –, und die Widersprüche springen ins Auge. Bei Markus stirbt Jesus am Tag **nach** dem Passamahl, um die dritte Stunde gekreuzigt (Mk 14,12; 15,25); bei Johannes am Rüsttag **vor** dem Passa, um die sechste Stunde noch vor Pilatus (Joh 19,14). Bei Markus bittet Jairus für seine sterbende Tochter, bei Matthäus ist sie schon tot (Mk 5,23; Mt 9,18). Der Hauptmann kommt bei Matthäus selbst, bei Lukas schickt er Älteste (Mt 8,5; Lk 7,3). Judas erhängt sich bei Matthäus, und die Hohepriester kaufen einen Acker; in der Apostelgeschichte kauft Judas den Acker selbst und stürzt kopfüber (Mt 27,5–7; Apg 1,18). Die Stammbäume nennen verschiedene Großväter Jesu (Mt 1,16; Lk 3,23). Am Ostermorgen: eine oder mehrere Frauen, ein junger Mann oder zwei Engel, Erscheinungen in Galiläa oder nur in Jerusalem (Lk 24,49). Diese Unterschiede sind nicht trivial; sie zeigen, dass die Evangelisten ihre Geschichten frei veränderten. Wer an ein irrtumsloses Wort Gottes glaubt, hat hier ein Problem. – So etwa Bart Ehrman.`,
  biblical: {
    summary: `Die Evangelien sind vier eigenständige Zeugnisse desselben Geschehens, geschrieben für verschiedene Leser mit verschiedenen Schwerpunkten. Lukas sagt ausdrücklich, dass es schon „viele" Berichte gab und er „in Ordnung" schreiben will (Lk 1,1–3); Johannes betont, dass er nur eine Auswahl bietet (Joh 20,30–31; 21,25). Im Kern stimmen alle vier überein: Wirken in Galiläa und Judäa, Konflikt mit den Autoritäten, Einzug in Jerusalem, letztes Mahl, Verhaftung, Verhör, Kreuzigung unter Pilatus am Freitag der Passawoche, Begräbnis durch Josef von Arimathäa, leeres Grab am ersten Tag der Woche, Maria Magdalena als Zeugin, Erscheinungen des Auferstandenen.`,
    detail: `**Unterschied ist nicht gleich Widerspruch.** Ein Widerspruch liegt nur vor, wenn zwei Aussagen nicht gleichzeitig wahr sein können. Viele „Widersprüche" sind Auslassungen (einer nennt einen Engel, der andere zwei), Raffungen (Matthäus fasst die Jairus-Geschichte zusammen), Stellvertretung (der Hauptmann handelt durch Boten) oder unterschiedliche Perspektiven.

**Ein Beispiel für Raffung beim selben Autor:** Lukas erzählt in Lk 24 alle Ostererscheinungen so, als geschähen sie an einem Tag, und am Ende die Himmelfahrt. In der Apostelgeschichte – vom selben Verfasser – sagt er, Jesus sei den Jüngern **vierzig Tage** lang erschienen (Apg 1,3). Lukas wusste also genau, dass er im Evangelium rafft. Wer Lk 24,49 („bleibt in der Stadt") gegen Erscheinungen in Galiläa ausspielt, übersieht diese Technik.

**Ein Beispiel für unabsichtliche Übereinstimmung:** In Joh 20,1 geht scheinbar nur Maria Magdalena zum Grab, doch in 20,2 sagt sie: „**wir** wissen nicht, wo sie ihn hingelegt haben" – ein beiläufiger Hinweis auf die anderen Frauen der Synoptiker.`,
    sources: [
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '1,3', quote: `welchen er sich nach seinem Leiden lebendig erzeigt hatte durch mancherlei Erweisungen, und ließ sich sehen unter ihnen vierzig Tage lang und redete mit ihnen vom Reich Gottes.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '20,1–2', quote: `An der Sabbate einem kommt Maria Magdalena früh, da es noch finster war, zum Grabe … Da läuft sie und kommt zu Simon Petrus … und spricht zu ihnen: Sie haben den HERRN weggenommen aus dem Grabe, und wir wissen nicht, wo sie ihn hingelegt haben.`, translation: 'Luther 1912 (gekürzt)', status: 'paraphrase' },
      { kind: 'bibel', work: 'Johannes', ref: '20,30–31', quote: `Auch viele andere Zeichen tat Jesus vor seinen Jüngern, die nicht geschrieben sind in diesem Buch. Diese aber sind geschrieben, daß ihr glaubet, Jesus sei Christus, der Sohn Gottes, und daß ihr durch den Glauben das Leben habt in seinem Namen.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die Kirche hat die Unterschiede zwischen den Evangelien nie verborgen, sondern seit dem 2. Jahrhundert offen bearbeitet. In Alexandrien schuf **Ammonius** im 3. Jahrhundert eine Synopse, in der er die Parallelen der anderen Evangelien neben Matthäus stellte; **Eusebius** baute darauf seine zehn Kanontafeln auf, die über Jahrhunderte am Anfang der Evangelienhandschriften standen – auch in koptischen, syrischen, armenischen und lateinischen Bibeln. **Augustinus** schrieb um 400 ein ganzes Werk über die Übereinstimmung der Evangelisten gegen heidnische Kritiker, und **Johannes Chrysostomus** sah in den Unterschieden einen Beweis, dass die Evangelisten sich nicht abgesprochen hatten.`,
    detail: `Die koptisch-orthodoxe Kirche bekennt die Heilige Schrift als inspiriertes Wort Gottes, das in der Kirche mit den Vätern gelesen wird. Die Evangelien werden in der Liturgie als lebendige Stimme Christi verkündet; ihre Vierheit ist kein Problem, sondern Reichtum – Irenäus vergleicht sie mit den vier Himmelsrichtungen und den vier Lebewesen vor dem Thron (Adv. Haer. III,11,8). Die Väter unterscheiden zwischen dem, was die Evangelisten bezeugen wollen, und der Art, wie sie es erzählen (Wortlaut, Reihenfolge, Auswahl).`,
    sources: [
      { kind: 'kirchenvater', author: 'Eusebius von Caesarea', work: 'Brief an Karpianus (Vorrede zu den Kanontafeln)', year: 'ca. 320', quote: `Ammonius der Alexandriner hat uns mit viel Fleiß ein Diatessaron-Evangelium hinterlassen, indem er dem Matthäusevangelium die entsprechenden Abschnitte der übrigen Evangelisten beifügte; davon angeregt, habe ich zehn Kanones erstellt.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'De consensu evangelistarum (Über die Übereinstimmung der Evangelisten)', year: 'ca. 400', quote: `Augustinus weist nach, dass die Evangelisten in der Sache übereinstimmen, auch wo sie mit verschiedenen Worten oder in anderer Reihenfolge erzählen.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Homilien zum Matthäusevangelium', ref: '1,6', year: 'ca. 390', quote: `Stimmten sie in allem genau überein – in Zeit, Ort und Wortlaut –, so würde kein Gegner glauben, dass sie nicht nach menschlicher Absprache geschrieben hätten; die kleinen Abweichungen befreien sie von diesem Verdacht.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Dass es zwischen den Evangelien Unterschiede gibt, bestreitet niemand. Strittig ist ihre Bewertung. Die kritische Mehrheit (Ehrman) sieht darin Belege für theologisch motivierte Veränderungen und gegen eine detailgenaue Historizität. Viele christliche Forscher verweisen auf die Gattung **antike Biografie** (Richard Burridge, „What Are the Gospels?", 1992) und deren Konventionen: Michael Licona zeigte an Plutarchs Lebensbeschreibungen, dass antike Biografen Ereignisse rafften, verlagerten, zusammenzogen oder vereinfachten. Andere christliche Autoren (Lydia McGrew) halten Licona für zu großzügig und betonen die Tatsachentreue der Evangelisten sowie „unbeabsichtigte Übereinstimmungen".`,
    detail: `**Innerchristliche Debatte – ehrlich:** Licona (2017) erwägt etwa, dass Johannes den Tag der Kreuzigung aus theologischen Gründen (Jesus als Passalamm) verlegt haben **könnte**. Lydia McGrew (The Mirror or the Mask, 2019) kritisiert solche Vorschläge scharf und hält Harmonisierungen für historisch plausibler. Brant Pitre (Jesus and the Last Supper, 2015) bietet eine Lösung, nach der Johannes und die Synoptiker denselben Tag meinen. Für das Gespräch genügt: Beide Lager sind sich einig, dass der **Kern** – Kreuzigung unter Pilatus am Freitag der Passawoche – gesichert ist.

**Historischer Vergleich:** Auch für unbestrittene Ereignisse widersprechen sich antike Quellen in Details – etwa Polybios und Livius über Hannibals Route über die Alpen. Niemand schließt daraus, Hannibal habe die Alpen nicht überquert.`,
    sources: [
      { kind: 'gegner', author: 'Bart D. Ehrman', work: 'Jesus, Interrupted', year: '2009', quote: `Ehrman empfiehlt, die Evangelien „horizontal" zu lesen, und führt zahlreiche Unterschiede als Widersprüche an, u. a. Tag und Stunde der Kreuzigung, Judas' Tod, Stammbäume und Osterberichte.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Michael R. Licona', work: 'Why Are There Differences in the Gospels? What We Can Learn from Ancient Biography', year: '2017', quote: `Licona untersucht Kompositionstechniken Plutarchs (Raffung, Verlagerung, Zusammenziehung, Vereinfachung, Fokussierung) und wendet sie auf die Evangelien an.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Lydia McGrew', work: 'The Mirror or the Mask: Liberating the Gospels from Literary Devices', year: '2019', quote: `McGrew kritisiert die Annahme bewusster Tatsachenveränderungen und verteidigt die Evangelien als zuverlässige, „spiegelnde" Berichte.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Richard A. Burridge', work: 'What Are the Gospels? A Comparison with Graeco-Roman Biography', year: '1992', quote: `Die Evangelien gehören zur Gattung der antiken Biografie (bios).`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Unterschiede sind nicht dasselbe wie Widersprüche. Vier unabhängige Zeugen erzählen dasselbe Geschehen mit verschiedenen Details – genau das erwarten Historiker; wörtlich identische Berichte würden nach Absprache riechen, wie schon Chrysostomus sagte. Im Kern stimmen alle vier überein: Kreuzigung unter Pilatus am Freitag der Passawoche, Begräbnis durch Josef, leeres Grab, Maria Magdalena, Erscheinungen. Viele angebliche Widersprüche lösen sich auf, wenn man antike Erzählweisen kennt: Raffung, Stellvertretung, Auswahl. Und die Kirche hat die Unterschiede nie versteckt – sie hat sie seit dem 3. Jahrhundert in Synopsen nebeneinandergestellt.`,
  keyPoints: [
    `**Kern-Übereinstimmung:** Alle vier Evangelien teilen das Grundgerüst von Passion und Ostern – die Unterschiede liegen in Nebendetails.`,
    `**Unterschied ≠ Widerspruch:** Wer einen Engel nennt, bestreitet nicht einen zweiten (Augustinus); wer rafft, lügt nicht (Lk 24 und Apg 1,3 vom selben Autor).`,
    `**Antike Biografie:** Raffung, Stellvertretung, freie Reihenfolge waren normale Techniken (Licona, Burridge); vgl. „Der Bote eines Menschen ist wie er selbst" (Mischna Berachot 5,5).`,
    `**Unabhängigkeit:** Abweichungen in Details zeigen, dass die Zeugen nicht voneinander abschrieben oder sich absprachen (Chrysostomus).`,
    `**Unbeabsichtigte Übereinstimmungen:** Ein Evangelium erklärt beiläufig ein Rätsel in einem anderen – ein starkes Indiz für Wahrhaftigkeit (Blunt 1847, L. McGrew 2017).`,
    `**Offene Kirche:** Ammonius von Alexandrien, die Eusebianischen Kanones, Tatians Diatessaron, Augustinus – die Kirche hat die Unterschiede immer offen behandelt.`,
  ],
  voices: [
    {
      person: 'augustinus',
      role: 'als Verfasser von „Über die Übereinstimmung der Evangelisten"',
      text: `Augustinus antwortete um 400 heidnischen Kritikern, die – wie heute Ehrman – Widersprüche zwischen den Evangelien aufzählten. Sein methodischer Grundsatz: Es kommt auf die Sache an, nicht auf den genauen Wortlaut; wenn ein Evangelist etwas auslässt, das ein anderer berichtet, ist das kein Widerspruch; die Reihenfolge der Ereignisse folgt bei den Evangelisten oft der Erinnerung oder dem Thema, nicht der Chronologie. Er arbeitet Stelle für Stelle durch und zeigt, wie wenig echte Widersprüche übrigbleiben.`,
      sources: [{ kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'De consensu evangelistarum', ref: 'II,12,28–29', year: 'ca. 400', status: 'paraphrase', quote: `Die Evangelisten geben denselben Sinn mit verschiedenen Worten wieder; nicht die Worte, sondern die Sache ist entscheidend.` }],
    },
    {
      person: 'chrysostomus',
      role: 'als Prediger und Ausleger',
      text: `Chrysostomus stellt sich gleich zu Beginn seiner Matthäus-Homilien der Frage, warum es vier Evangelien mit Abweichungen gibt. Seine Antwort: Gerade die Unterschiede in Zeit- und Ortsangaben beweisen, dass die Evangelisten nicht nach Absprache geschrieben haben; in den Hauptsachen – dass Gott Mensch wurde, Wunder tat, gekreuzigt wurde, auferstand und gen Himmel fuhr – stimmen sie völlig überein. Ein Gericht würde Zeugen, die Wort für Wort dasselbe sagen, eher misstrauen.`,
      sources: [{ kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Homilien zum Matthäusevangelium', ref: '1,6', year: 'ca. 390', status: 'paraphrase', quote: `Übereinstimmung in den Hauptsachen, Abweichung in Nebensachen als Zeichen der Unabhängigkeit.` }],
    },
    {
      person: 'ammonius-alexandrien',
      role: 'als Schöpfer der ersten Evangelien-Synopse',
      text: `Ammonius von Alexandrien stellte im 3. Jahrhundert den Text des Matthäus in eine Spalte und ordnete die parallelen Abschnitte von Markus, Lukas und Johannes daneben. Damit schuf er die erste uns bekannte Synopse – ein Werkzeug, das Unterschiede und Übereinstimmungen sofort sichtbar macht. Eusebius entwickelte daraus seine Kanontafeln. Die alexandrinische Kirche hat also genau das getan, was Ehrman „horizontales Lesen" nennt – rund 1700 Jahre vor ihm, und ohne darin eine Bedrohung des Glaubens zu sehen.`,
      sources: [{ kind: 'kirchenvater', author: 'Eusebius von Caesarea', work: 'Brief an Karpianus', year: 'ca. 320', status: 'paraphrase', quote: `Beschreibung der Synopse des Ammonius als Grundlage der Kanontafeln.` }],
    },
    {
      person: 'licona',
      role: 'als Erforscher antiker Biografie',
      text: `Licona hat neun Lebensbeschreibungen Plutarchs verglichen, in denen derselbe Autor dieselben Ereignisse mehrfach erzählt – und dabei unterschiedlich. Plutarch rafft, verlagert Ereignisse, lässt Personen weg, schreibt einer Person Worte zu, die eine andere sprach. Niemand wirft Plutarch deshalb Lüge vor; es waren anerkannte Techniken. Licona zeigt, dass sich viele Unterschiede der Evangelien auf dieselbe Weise erklären, und betont zugleich, dass dies den historischen Kern nicht berührt.`,
      sources: [{ kind: 'fachliteratur', author: 'Michael R. Licona', work: 'Why Are There Differences in the Gospels?', year: '2017', status: 'paraphrase', quote: `Kompositionstechniken antiker Biografen als Erklärung vieler Evangelienunterschiede.` }],
    },
    {
      person: 'lydia-mcgrew',
      role: 'als Analytikerin unbeabsichtigter Übereinstimmungen',
      text: `Lydia McGrew hat das Argument der „unbeabsichtigten Übereinstimmungen" (J. J. Blunt, 1847) erneuert: Ein Evangelium wirft beiläufig eine Frage auf, die ein anderes – ebenso beiläufig – beantwortet. Beispiel: Bei der Speisung der Fünftausend fragt Jesus ausgerechnet Philippus, wo man Brot kaufen könne (Joh 6,5). Warum Philippus? Johannes erklärt es nicht, sagt aber an anderer Stelle, Philippus stamme aus Betsaida (Joh 1,44; 12,21). Lukas wiederum verortet die Speisung bei Betsaida (Lk 9,10). Solche Passungen entstehen nicht durch Abschreiben oder Erfindung, sondern durch wahrheitsgetreues Erzählen realer Ereignisse.`,
      sources: [{ kind: 'fachliteratur', author: 'Lydia McGrew', work: 'Hidden in Plain View: Undesigned Coincidences in the Gospels and Acts', year: '2017', status: 'paraphrase', quote: `Sammlung und Analyse unbeabsichtigter Übereinstimmungen in den Evangelien und der Apostelgeschichte.` }],
    },
    {
      person: 'blomberg',
      role: 'als Neutestamentler',
      text: `Blomberg hat die gängigen Widerspruchsvorwürfe systematisch untersucht und gezeigt, dass für die meisten plausible Erklärungen existieren, die nicht künstlich sind, sondern aus dem Umgang antiker Historiker mit ihren Quellen folgen. Er betont, dass man an die Evangelien dieselben Maßstäbe anlegen sollte wie an andere antike Geschichtsschreibung – und nach diesen Maßstäben schneiden sie gut ab.`,
      sources: [{ kind: 'fachliteratur', author: 'Craig L. Blomberg', work: 'The Historical Reliability of the Gospels', year: '2. Aufl. 2007', status: 'paraphrase', quote: `Systematische Behandlung der Harmonisierungsfragen nach Maßstäben antiker Historiografie.` }],
    },
  ],
  dialog: [
    {
      id: 'kernwidersprueche',
      objection: `Die Widersprüche betreffen nicht nur Kleinigkeiten, sondern das Zentrum: Markus und Johannes können sich nicht einmal einigen, an welchem Tag und zu welcher Stunde Jesus gekreuzigt wurde. Wenn die Quellen schon da auseinandergehen – was ist dann überhaupt zuverlässig?`,
      objectionBy: 'Bart Ehrman',
      answer: `Gerade beim Zentrum stimmen sie überein: gekreuzigt unter Pilatus, an einem Freitag in der Passawoche, begraben vor dem Sabbat, das Grab am Sonntag leer. Die Differenz betrifft die Frage, ob dieser Freitag der Tag des Passamahls war oder der Tag davor – und auch dafür gibt es gute Lösungen. Historiker sind es gewohnt, dass Quellen bei Nebenumständen abweichen und im Hauptgeschehen übereinstimmen; das ist ein Zeichen von Unabhängigkeit, nicht von Erfindung.`,
      questionsBack: [
        `Bestreitest du, dass alle vier Evangelien Jesus unter Pilatus an einem Freitag der Passawoche sterben lassen?`,
        `Bei welchem antiken Ereignis stimmen vier Quellen in allen Details überein?`,
      ],
      followUps: [
        {
          id: 'kreuzigungstag',
          objection: `Bei Markus essen die Jünger das Passamahl, und Jesus stirbt am nächsten Tag (Mk 14,12). Bei Johannes wollen die Priester am Morgen der Kreuzigung das Passa erst noch essen (Joh 18,28), und es ist „der Rüsttag des Passa" um die sechste Stunde (Joh 19,14) – zur Zeit, als die Lämmer geschlachtet wurden. Johannes hat den Tag verlegt, um Jesus zum Passalamm zu machen.`,
          objectionBy: 'Bart Ehrman',
          answer: `„Rüsttag" (paraskeuē) war im Griechischen der Juden die gewöhnliche Bezeichnung für **Freitag** – Markus selbst verwendet das Wort so: „Es war der Rüsttag, das ist der Vorsabbat" (Mk 15,42). „Rüsttag des Passa" kann daher einfach „Freitag der Passawoche" heißen. Und „das Passa essen" (Joh 18,28) muss nicht das Lamm am ersten Abend meinen; die Festopfer der siebentägigen Festwoche hießen ebenfalls „Passa". So verstanden beschreiben Markus und Johannes denselben Freitag. Bei der Stundenangabe sagt Johannes ausdrücklich „**um** die sechste Stunde" – antike Zeitangaben waren grob, oft in Dreistundenblöcken.`,
          detail: `**Belege für die Lösung (u. a. Brant Pitre, Jesus and the Last Supper, 2015):**
- Mk 15,42 und Joh 19,31.42 verwenden paraskeuē für den Tag vor dem Sabbat.
- In 2 Chr 30,22 (LXX) und in rabbinischer Sprache kann „Passa" auch die Festopfer der Woche bezeichnen.
- Joh 13,1–30 schildert ein Mahl „vor dem Passafest" – das kann sich auf die Fußwaschung vor dem eigentlichen Festmahl beziehen.

**Ehrlich:** Es gibt auch andere Vorschläge (verschiedene Kalender, z. B. nach Annie Jaubert) und christliche Forscher, die eine bewusste theologische Gestaltung durch Johannes für möglich halten. Die Frage ist offen – der Kern nicht.`,
          sources: [
            { kind: 'bibel', work: 'Markus', ref: '15,42', quote: `Und am Abend, dieweil es der Rüsttag war, welcher ist der Vorsabbat,`, original: `ἐπεὶ ἦν παρασκευή, ὅ ἐστιν προσάββατον`, translation: 'Luther 1912', status: 'verbatim' },
            { kind: 'bibel', work: 'Johannes', ref: '19,14', quote: `Es war aber der Rüsttag auf Ostern um die sechste Stunde.`, original: `ἦν δὲ παρασκευὴ τοῦ πάσχα, ὥρα ἦν ὡς ἕκτη`, translation: 'Luther 1912', status: 'verbatim' },
            { kind: 'fachliteratur', author: 'Brant Pitre', work: 'Jesus and the Last Supper', year: '2015', quote: `Pitre argumentiert, dass Johannes und die Synoptiker dasselbe Datum meinen: das letzte Mahl als Passamahl, die Kreuzigung am Freitag der Passawoche.`, status: 'paraphrase' },
          ],
          followUps: [
            {
              id: 'licona-gibt-zu',
              objection: `Selbst dein christlicher Gewährsmann Michael Licona hält es für möglich, dass Johannes den Tag der Kreuzigung absichtlich geändert hat. Damit gibst du zu, dass ein Evangelist Fakten verändert!`,
              objectionBy: 'Bart Ehrman',
              answer: `Licona erwägt das als **eine** Möglichkeit im Rahmen antiker Biografiekonventionen, nach denen eine Umstellung aus Darstellungsgründen nicht als Lüge galt. Andere christliche Forscher – Lydia McGrew, Brant Pitre – halten eine Harmonisierung für wahrscheinlicher und haben Licona dafür deutlich kritisiert. Ich muss mich in dieser innerchristlichen Debatte nicht festlegen, um dir zu antworten: Nach beiden Sichtweisen ist gesichert, dass Jesus am Freitag der Passawoche unter Pilatus gekreuzigt wurde. Die Kirche liest die Evangelien als inspiriertes Zeugnis, das in der Sache wahr ist – und genau diese Sache steht hier nicht in Frage.`,
              followUps: [
                {
                  id: 'dann-ist-nichts-sicher',
                  objection: `Wenn Evangelisten Details nach Belieben verschieben durften, dann kannst du dich auf gar nichts mehr verlassen. Wer sagt dir, dass sie nicht auch die Auferstehung „literarisch gestaltet" haben?`,
                  objectionBy: 'Bart Ehrman / Robert M. Price',
                  answer: `Antike Leser unterschieden sehr genau zwischen der Freiheit in Anordnung und Wortwahl und der Erfindung von Ereignissen. Lukian von Samosata schreibt im 2. Jahrhundert, die einzige Aufgabe des Historikers sei es, zu berichten, wie es gewesen ist; Stil und Anordnung seien seine Kunst, die Tatsachen nicht. Plutarchs Freiheiten betreffen Reihenfolge und Raffung, nicht die Erfindung der Schlacht bei Pharsalos. Und die Auferstehung ist nicht nur in einem Evangelium „gestaltet", sondern in allen vier, bei Paulus und im alten Credo von 1 Kor 15 unabhängig bezeugt.`,
                  sources: [
                    { kind: 'sonstiges', author: 'Lukian von Samosata', work: 'Wie man Geschichte schreiben soll', ref: '39–41', year: 'ca. 166', quote: `Die eine Aufgabe des Geschichtsschreibers ist es, zu erzählen, wie es sich zugetragen hat; er soll den Tatsachen dienen, nicht der Gunst.`, status: 'paraphrase' },
                  ],
                  questionsBack: [
                    `Gilt dein Grundsatz „eine Detailabweichung macht alles unzuverlässig" auch für Plutarch, Tacitus oder Josephus?`,
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'jairus',
          objection: `Bei Markus sagt Jairus: „Meine Tochter liegt in den letzten Zügen" (Mk 5,23), und erst später kommen Boten mit der Todesnachricht. Bei Matthäus sagt er gleich: „Meine Tochter ist jetzt gestorben" (Mt 9,18). Beides kann nicht stimmen.`,
          objectionBy: 'Bart Ehrman',
          answer: `Matthäus erzählt die ganze Geschichte in neun Versen, Markus in dreiundzwanzig. Matthäus lässt die Boten weg und fasst zusammen, was Jairus im Lauf der Begegnung erfährt – das Ergebnis: Er bittet um die Auferweckung seiner toten Tochter. Das ist **Raffung**, eine der häufigsten Techniken antiker Erzähler: Man fasst mehrere Schritte zu einem zusammen. Ein Widerspruch wäre es nur, wenn Matthäus behaupten wollte, er gebe Jairus' ersten Satz wortgetreu wieder.`,
          sources: [
            { kind: 'bibel', work: 'Matthäus', ref: '9,18', quote: `Da er solches mit ihnen redete, siehe, da kam der Obersten einer und fiel vor ihm nieder und sprach: HERR, meine Tochter ist jetzt gestorben; aber komm und lege deine Hand auf sie, so wird sie lebendig.`, translation: 'Luther 1912', status: 'paraphrase' },
            { kind: 'bibel', work: 'Markus', ref: '5,23', quote: `… Meine Tochter ist in den letzten Zügen; du wollest kommen und deine Hand auf sie legen, daß sie gesund werde und lebe.`, translation: 'Luther 1912 (gekürzt)', status: 'paraphrase' },
          ],
        },
        {
          id: 'hauptmann',
          objection: `Bei Matthäus kommt der Hauptmann von Kafarnaum persönlich zu Jesus (Mt 8,5). Bei Lukas schickt er jüdische Älteste und dann Freunde – er selbst kommt gar nicht (Lk 7,3.6). Das ist ein klarer Widerspruch.`,
          objectionBy: 'Bart Ehrman / Ahmed Deedat',
          answer: `Nach antikem und jüdischem Verständnis handelt jemand selbst, wenn er durch Boten handelt – die Mischna sagt: „Der Bote eines Menschen ist wie er selbst." Wir sprechen heute genauso: „Der Präsident hat den Vertrag unterzeichnet", obwohl ein Botschafter es tat. Matthäus konzentriert sich auf die Begegnung zwischen Jesus und dem Hauptmann, Lukas schildert die Vermittler. Matthäus selbst zeigt dieselbe Technik: Bei ihm bittet die Mutter der Zebedäussöhne für sie (Mt 20,20), bei Markus bitten die Söhne selbst (Mk 10,35).`,
          sources: [
            { kind: 'juedisch', work: 'Mischna, Berachot', ref: '5,5', quote: `Der Bote eines Menschen ist wie er selbst.`, original: `שלוחו של אדם כמותו`, status: 'verbatim' },
          ],
        },
      ],
    },
    {
      id: 'auferstehungsberichte',
      objection: `Die Osterberichte sind ein Chaos: Wer ging zum Grab – Maria Magdalena allein, zwei, drei oder mehr Frauen? Sahen sie einen jungen Mann, einen Engel oder zwei Männer? War der Stein schon weg? Wenn Zeugen sich bei so einem Ereignis widersprechen, ist ihr Zeugnis wertlos.`,
      objectionBy: 'Bart Ehrman / Ahmed Deedat',
      answer: `Wer eine Person nennt, bestreitet nicht, dass weitere dabei waren – das ist Augustinus' Grundsatz und gesunder Menschenverstand. Johannes nennt nur Maria Magdalena, lässt sie aber sagen: „**Wir** wissen nicht, wo sie ihn hingelegt haben" (Joh 20,2) – ein beiläufiger Hinweis auf die anderen Frauen. Ebenso bei den Engeln: Wer einen nennt, der spricht, schließt einen zweiten nicht aus. Im Kern stimmen alle überein: früh am ersten Tag der Woche, Frauen mit Maria Magdalena, Grab offen und leer, himmlische Botschaft.`,
      sources: [
        { kind: 'bibel', work: 'Markus', ref: '16,1–5', quote: `Und da der Sabbat vergangen war, kauften Maria Magdalena und Maria, des Jakobus Mutter, und Salome Spezerei … und gingen hinein in das Grab und sahen einen Jüngling zur rechten Hand sitzen …`, translation: 'Luther 1912 (gekürzt)', status: 'paraphrase' },
        { kind: 'bibel', work: 'Lukas', ref: '24,4.10', quote: `… siehe, da traten bei sie zwei Männer mit glänzenden Kleidern. … Es war aber Maria Magdalena und Johanna und Maria, des Jakobus Mutter, und andere mit ihnen …`, translation: 'Luther 1912 (gekürzt)', status: 'paraphrase' },
      ],
      questionsBack: [
        `Ist es ein Widerspruch, wenn ein Zeuge sagt „Maria war am Grab" und ein anderer „Maria und Salome waren am Grab"?`,
      ],
      followUps: [
        {
          id: 'galilaea-jerusalem',
          objection: `Matthäus lässt die Jünger nach Galiläa gehen, wo Jesus ihnen erscheint (Mt 28,16). Bei Lukas befiehlt Jesus ihnen dagegen: „Bleibt in der Stadt Jerusalem, bis ihr angetan werdet mit Kraft aus der Höhe" (Lk 24,49). Also gab es nach Lukas keine Erscheinungen in Galiläa. Das ist ein echter Widerspruch.`,
          objectionBy: 'Bart Ehrman',
          answer: `Lukas selbst löst das auf: Im Evangelium rafft er die Ostergeschichten scheinbar auf einen Tag, in der Apostelgeschichte – seinem zweiten Band – schreibt er, Jesus sei vierzig Tage lang erschienen (Apg 1,3). Der Befehl von Lk 24,49 gehört an das Ende dieser vierzig Tage, unmittelbar vor der Himmelfahrt (vgl. Apg 1,4). Dazwischen ist Raum für Galiläa. Johannes bestätigt beides: Erscheinungen in Jerusalem (Joh 20) und danach am See Tiberias in Galiläa (Joh 21).`,
          sources: [
            { kind: 'bibel', work: 'Lukas', ref: '24,49', quote: `Und siehe, ich will auf euch senden die Verheißung meines Vaters. Ihr aber sollt in der Stadt Jerusalem bleiben, bis ihr angetan werdet mit Kraft aus der Höhe.`, translation: 'Luther 1912', status: 'verbatim' },
            { kind: 'bibel', work: 'Johannes', ref: '21,1', quote: `Darnach offenbarte sich Jesus abermals den Jüngern an dem Meer bei Tiberias.`, translation: 'Luther 1912', status: 'paraphrase' },
          ],
          followUps: [
            {
              id: 'widersprueche-zeigen-legende',
              objection: `Wären es echte Augenzeugenberichte, würden sie übereinstimmen. Dass sie so verschieden sind, zeigt, dass jede Gemeinde ihre eigene Legende entwickelt hat.`,
              objectionBy: 'Robert M. Price',
              answer: `Das Gegenteil ist der Fall: Augenzeugen stimmen fast nie in allen Details überein – Gerichte wissen das, und Chrysostomus sagte es schon im 4. Jahrhundert. Als die Titanic 1912 sank, widersprachen sich die Überlebenden darin, ob das Schiff vor dem Untergang zerbrach oder nicht. Niemand folgerte daraus, die Titanic sei nicht gesunken. Übereinstimmung im Kern und Abweichung in Nebensachen ist das typische Muster echter, unabhängiger Zeugenaussagen.`,
              followUps: [
                {
                  id: 'titanic-unpassend',
                  objection: `Bei der Titanic haben wir das Wrack auf dem Meeresgrund. Bei Jesus haben wir nur die Texte. Der Vergleich hinkt.`,
                  objectionBy: 'Kipp Davis',
                  answer: `Der Vergleich soll nur eines zeigen: Widersprüche in Nebendetails machen das Zeugnis über das Hauptereignis nicht unglaubwürdig. Übrigens bestätigte der Fund des Wracks 1985, dass das Schiff tatsächlich zerbrochen war – die widersprechenden Zeugen waren beim Untergang selbst trotzdem zuverlässig. Und auch für die Auferstehung haben wir unabhängige Bestätigung des Kerns außerhalb der Evangelien: das Credo in 1 Kor 15, das Paulus von Petrus und Jakobus kannte.`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'judas-tod',
      objection: `Matthäus: Judas wirft das Geld in den Tempel und erhängt sich; die Priester kaufen damit den Töpferacker (Mt 27,5–7). Apostelgeschichte: Judas kauft selbst einen Acker, stürzt kopfüber und birst mitten entzwei (Apg 1,18). Zwei völlig verschiedene Todesarten!`,
      objectionBy: 'Bart Ehrman / Ahmed Deedat',
      answer: `Eine alte Harmonisierung lautet: Judas erhängte sich, der Körper fiel später – etwa als der Strick riss oder die Verwesung einsetzte – und barst auf. Der Acker wurde mit seinem Geld gekauft; nach antiker Ausdrucksweise „erwarb" er ihn, auch wenn die Priester den Kauf abwickelten. Wichtiger: Beide Berichte stimmen unabhängig im Kern überein – Judas starb gewaltsam, und ein Acker, der mit seinem Verräterlohn verbunden war, hieß „Blutacker". Ehrlich: Ob die Harmonisierung zutrifft, kann man nicht beweisen; sie ist aber nicht abwegig.`,
      sources: [
        { kind: 'bibel', work: 'Matthäus', ref: '27,5', quote: `Und er warf die Silberlinge in den Tempel, hob sich davon, ging hin und erhängte sich selbst.`, translation: 'Luther 1912', status: 'verbatim' },
        { kind: 'bibel', work: 'Apostelgeschichte', ref: '1,18–19', quote: `Dieser hat erworben den Acker um den ungerechten Lohn und ist abgestürzt und mitten entzweigeborsten, und all sein Eingeweide ausgeschüttet. Und es ist kund geworden allen, die zu Jerusalem wohnen, also daß dieser Acker genannt wird auf ihrer Sprache: Hakeldama (das ist: ein Blutacker).`, translation: 'Luther 1912', status: 'paraphrase' },
      ],
      followUps: [
        {
          id: 'harmonisierung-unredlich',
          objection: `Harmonisierung ist intellektuell unredlich. Bei keinem anderen antiken Text würde man sich solche Verrenkungen leisten, nur um zwei Berichte passend zu machen.`,
          objectionBy: 'Bart Ehrman',
          answer: `Doch – Historiker harmonisieren Quellen ständig, wenn es plausibel ist: etwa bei den unterschiedlichen Berichten über Neros Brand oder Hannibals Alpenroute. Harmonisierung ist unredlich, wenn sie erzwungen wird; sie ist redlich, wenn sie einfach und naheliegend ist. Ich zwinge nichts: Wo eine Harmonisierung nicht überzeugt, sage ich offen, dass die Berichte in einem Nebendetail auseinandergehen – der Kern bleibt davon unberührt. Die Kirche hat genau so gearbeitet: offen, mit Synopsen, ohne Verstecken.`,
        },
      ],
    },
    {
      id: 'stammbaeume',
      objection: `Nach Matthäus war Josefs Vater Jakob (Mt 1,16), nach Lukas Eli (Lk 3,23). Zwischen David und Josef stimmen die Namen fast nie überein – bei Matthäus über Salomo, bei Lukas über Natan. Einer der beiden muss falsch sein.`,
      objectionBy: 'Bart Ehrman / jüdische Gesprächspartner',
      answer: `Das Problem ist so alt wie die Kirche – und wurde offen diskutiert. Julius Africanus schlug um 220 eine Lösung über die Leviratsehe vor: Jakob und Eli waren Halbbrüder; als einer kinderlos starb, zeugte der andere mit der Witwe einen Sohn, der rechtlich dem einen, leiblich dem anderen gehörte (Eusebius, KG I,7). Eine andere, spätere Deutung sieht in Lukas die Linie Marias. Ehrlich: Keine Lösung ist sicher bewiesen. Aber die Evangelisten wussten, was sie taten – Matthäus gliedert seinen Stammbaum bewusst in dreimal vierzehn Generationen (Mt 1,17) –, und beide bezeugen Jesu davidische Abstammung, die nie bestritten wurde.`,
      sources: [
        { kind: 'kirchenvater', author: 'Julius Africanus (bei Eusebius)', work: 'Brief an Aristides, zitiert in Kirchengeschichte', ref: 'I,7', year: 'ca. 220', quote: `Erklärung der beiden Stammbäume durch eine Leviratsehe: Jakob und Eli seien Halbbrüder gewesen, Josef rechtlich Sohn des einen, leiblich des anderen.`, status: 'paraphrase' },
      ],
    },
    {
      id: 'unbeabsichtigte-uebereinstimmungen',
      objection: `Dass die Evangelien oft übereinstimmen, beweist nichts – Matthäus und Lukas haben bekanntlich von Markus abgeschrieben. Übereinstimmungen sind kein Zeichen von Wahrheit, sondern von Kopieren.`,
      objectionBy: 'Dan McClellan',
      answer: `Für wörtliche Parallelen stimmt das. Aber es gibt eine andere Art von Übereinstimmung, die Abschreiben nicht erklärt: Ein Evangelium erwähnt beiläufig etwas Rätselhaftes, und ein **anderes** erklärt es, ebenso beiläufig. Bei Matthäus verhöhnen die Wächter Jesus: „Weissage uns, Christe, wer ist's, der dich schlug?" (Mt 26,68) – eine sinnlose Frage, wenn Jesus sie sehen konnte. Erst Lukas erwähnt, dass sie ihm die Augen verbanden (Lk 22,64). Oder: Warum fragt Jesus ausgerechnet Philippus nach Brot (Joh 6,5)? Weil Philippus aus Betsaida stammte (Joh 12,21), und dort fand die Speisung laut Lukas statt (Lk 9,10). Solche Passungen erfindet niemand, sie entstehen, wenn man von realen Ereignissen erzählt.`,
      voices: [
        {
          person: 'paley',
          role: 'als Begründer des Arguments aus unbeabsichtigten Übereinstimmungen',
          text: `William Paley verglich 1790 in seinen „Horae Paulinae" die Paulusbriefe mit der Apostelgeschichte und fand zahlreiche beiläufige Übereinstimmungen – Namen, Reisen, Umstände –, die keiner der Texte erklärt, die aber zusammenpassen. Er folgerte, dass weder die Briefe nach der Apostelgeschichte noch diese nach den Briefen gefälscht sein können, sondern beide unabhängig auf wirkliche Ereignisse zurückgehen. J. J. Blunt übertrug das Verfahren 1847 auf die Evangelien.`,
          sources: [{ kind: 'fachliteratur', author: 'William Paley', work: 'Horae Paulinae', year: '1790', status: 'paraphrase', quote: `Nachweis unbeabsichtigter Übereinstimmungen zwischen Paulusbriefen und Apostelgeschichte.` }],
        },
      ],
      sources: [
        { kind: 'bibel', work: 'Matthäus', ref: '26,67–68', quote: `Da speieten sie aus in sein Angesicht und schlugen ihn mit Fäusten. Etliche aber schlugen ihn ins Angesicht und sprachen: Weissage uns, Christe, wer ist's, der dich schlug?`, translation: 'Luther 1912', status: 'paraphrase' },
        { kind: 'bibel', work: 'Lukas', ref: '22,64', quote: `… und verdeckten ihn und schlugen ihn ins Angesicht und fragten ihn und sprachen: Weissage, wer ist's, der dich schlug?`, translation: 'Luther 1912 (gekürzt)', status: 'paraphrase' },
        { kind: 'fachliteratur', author: 'John James Blunt', work: 'Undesigned Coincidences in the Writings Both of the Old and New Testament, an Argument of Their Veracity', year: '1847', quote: `Klassische Sammlung unbeabsichtigter Übereinstimmungen als Argument für die Wahrhaftigkeit der biblischen Berichte.`, status: 'paraphrase' },
      ],
      followUps: [
        {
          id: 'cherry-picking',
          objection: `Das ist Cherry-Picking. Bei einem so großen Textbestand findet man immer irgendwelche zufälligen Passungen – und die Widersprüche ignorierst du dabei.`,
          objectionBy: 'Dan McClellan / Bart Ehrman',
          answer: `Einzelne Beispiele sind tatsächlich schwächer als andere, das gebe ich zu, und ich ignoriere die Unterschiede nicht – wir haben gerade über sie gesprochen. Aber die stärksten Beispiele haben eine besondere Struktur: Das Rätsel steht in einem Text, die Erklärung in einem anderen, und keiner von beiden zeigt Interesse daran, die Verbindung herzustellen. Lydia McGrew hat Dutzende solcher Fälle zusammengetragen. Es ist das kumulative Muster, das zählt – genau wie bei Indizien vor Gericht.`,
          questionsBack: [
            `Wie erklärst du die Frage „Wer ist's, der dich schlug?" bei Matthäus ohne die Augenbinde bei Lukas?`,
          ],
        },
      ],
    },
    {
      id: 'kirche-hat-vertuscht',
      objection: `Die Kirche hat diese Widersprüche jahrhundertelang vor den einfachen Gläubigen verborgen. Erst die moderne Bibelkritik hat sie ans Licht gebracht.`,
      objectionBy: 'Bart Ehrman (sinngemäß, Jesus, Interrupted)',
      answer: `Historisch ist das Gegenteil wahr. Schon im 2. Jahrhundert verfasste Tatian eine Evangelienharmonie, im 3. Jahrhundert stellte Ammonius von Alexandrien die Parallelen nebeneinander, Eusebius schuf die Kanontafeln, die über tausend Jahre am Anfang fast jeder Evangelienhandschrift standen – auch der koptischen. Der Heide Porphyrios veröffentlichte im 3. Jahrhundert Widerspruchslisten, Augustinus antwortete um 400 mit einem ganzen Buch. Die Christen kannten die Unterschiede, diskutierten sie offen – und glaubten trotzdem, weil der Kern feststand.`,
      questionsBack: [
        `Warum standen dann über tausend Jahre lang Kanontafeln zum Vergleich der Evangelien am Anfang der Bibelhandschriften?`,
      ],
    },
  ],
  questionsToAsk: [
    `Was genau ist für dich ein Widerspruch – und was eine Auslassung oder Raffung?`,
    `Bei welchem antiken Ereignis stimmen vier unabhängige Quellen in allen Details überein?`,
    `Welche der angeblichen Widersprüche betreffen den Kern: Kreuzigung, Begräbnis, leeres Grab, Erscheinungen?`,
    `Würdest du vier wortgleichen Berichten mehr trauen als vier unterschiedlichen?`,
    `Wie erklärst du unbeabsichtigte Übereinstimmungen, bei denen ein Evangelium das Rätsel eines anderen löst?`,
  ],
  avoid: [
    `Für jeden Unterschied eine Harmonisierung erzwingen – das wirkt unredlich. Sag offen, wo eine Lösung unsicher ist.`,
    `Behaupten, es gebe „keine einzige Differenz" – das ist offensichtlich falsch und kostet Glaubwürdigkeit.`,
    `Die innerchristliche Debatte (Licona vs. McGrew) verschweigen, wenn der Gegner sie kennt – nenne sie und zeige, dass der Kern davon unberührt ist.`,
    `Die Glaubwürdigkeit des ganzen Christentums an jedem Nebendetail aufhängen.`,
  ],
  concessions: [
    `Die Evangelien unterscheiden sich in vielen Details; nicht für jede Differenz gibt es eine sichere Harmonisierung.`,
    `Die Evangelisten haben ihr Material theologisch gestaltet, ausgewählt und angeordnet.`,
    `Auch christliche Forscher sind sich uneins, wie weit antike Kompositionstechniken in den Evangelien reichen.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Michael R. Licona', work: 'Why Are There Differences in the Gospels?', year: '2017', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Lydia McGrew', work: 'Hidden in Plain View: Undesigned Coincidences in the Gospels and Acts', year: '2017', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Craig L. Blomberg', work: 'The Historical Reliability of the Gospels', year: '2. Aufl. 2007', status: 'paraphrase' },
    { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'De consensu evangelistarum', year: 'ca. 400', status: 'paraphrase' },
    { kind: 'gegner', author: 'Bart D. Ehrman', work: 'Jesus, Interrupted', year: '2009', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Widersprüche', 'Harmonisierung', 'Augustinus', 'Ammonius', 'Eusebianische Kanones', 'unbeabsichtigte Übereinstimmungen', 'Licona'],
  related: [
    'islam-bibelverfaelschung/bibel-widerspricht-sich',
    'judentum-messias/stammbaum-jechonja',
    'neues-testament/evangelien-spaet-anonym',
    'auferstehung/legende-entwickelte-sich',
  ],
};

export default claim;
