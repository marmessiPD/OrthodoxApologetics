import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'dokumentenhypothese',
  title: `„Mose schrieb den Pentateuch nicht (JEDP)."`,
  proponents: [
    { name: 'Julius Wellhausen', role: 'Alttestamentler und Orientalist (†1918)', work: 'Geschichte Israels I (1878), ab 1883 Prolegomena zur Geschichte Israels' },
    { name: 'Richard Elliott Friedman', role: 'Bibelwissenschaftler, University of Georgia', work: 'Who Wrote the Bible? (1987)' },
    { name: 'Joel S. Baden', role: 'Alttestamentler, Yale (Neo-Documentarian)', work: 'The Composition of the Pentateuch (2012)' },
    { name: 'Dan McClellan', role: 'Bibelwissenschaftler und Wissenschaftskommunikator', work: 'Data Over Dogma (Podcast, Videos)' },
  ],
  steelman: `Die Fünf Bücher Mose sind aus mehreren Quellen zusammengesetzt: Es gibt Dubletten (zwei Schöpfungsberichte, zweimal die Preisgabe der Ahnfrau, zwei Fassungen der Sintflut ineinander verwoben), wechselnde Gottesnamen (JHWH/Elohim), unterschiedliche Stile und Theologien. Ex 6,3 sagt, Gott sei den Vätern nicht unter dem Namen JHWH bekannt gewesen – obwohl die Genesis ihn ständig verwendet. Mose berichtet seinen eigenen Tod (Dtn 34) und wird als „sehr demütig, mehr als alle Menschen" beschrieben (Num 12,3). Die Texte setzen Verhältnisse späterer Jahrhunderte voraus. Kein kritischer Bibelwissenschaftler an einer säkularen Universität vertritt heute die mosaische Autorschaft.`,
  biblical: {
    summary: `Der Pentateuch selbst nennt Mose als Schreiber bestimmter Teile (Ex 17,14; 24,4; 34,27; Num 33,2; Dtn 31,9.24), und das spätere AT spricht vom „Buch Moses" bzw. „Gesetz des Mose" (Jos 8,31; 2 Chr 25,4; Neh 8,1). Jesus zitiert die Tora als Wort des Mose (Mk 12,26; Joh 5,46–47). Gleichzeitig enthält der Text erkennbar spätere Notizen: den Bericht von Moses Tod und Begräbnis (Dtn 34), aktualisierte Ortsnamen (Gen 14,14 „Dan") und Bemerkungen „bis auf diesen Tag". Die traditionelle Lehre lautet daher: **mosaische Autorschaft im Kern, mit späteren inspirierten redaktionellen Ergänzungen** – nicht, dass Mose jedes Wort in der heutigen Form schrieb.`,
    detail: `Schon das Judentum sah das differenziert: Der Talmud (Baba Batra 14b–15a) schreibt den Pentateuch Mose zu, die letzten acht Verse (über Moses Tod) aber Josua; ein anderer Rabbi meint, Mose habe sie unter Tränen geschrieben. Hieronymus konnte offenlassen, ob man Mose als Verfasser oder Esra als „Wiederhersteller" des Werkes bezeichne.

**Zu Ex 6,3:** Der Vers kann bedeuten, dass Gott den Vätern die volle Bedeutung seines Namens – als Bundesgott, der seine Verheißung einlöst – noch nicht erschlossen hatte; „erkennen" (*yādaʿ*) meint im Hebräischen oft Erfahrung, nicht bloße Bekanntschaft mit einem Wort.`,
    sources: [
      { kind: 'bibel', work: 'Johannes', ref: '5,46–47', quote: `Wenn ihr Mose glaubtet, so glaubtet ihr auch mir; denn er hat von mir geschrieben. So ihr aber seinen Schriften nicht glaubt, wie werdet ihr meinen Worten glauben?`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Markus', ref: '12,26', quote: `Jesus: Habt ihr nicht gelesen im Buch des Mose, bei dem Dornbusch, wie Gott zu ihm sprach: Ich bin der Gott Abrahams, Isaaks und Jakobs?`, status: 'paraphrase' },
      { kind: 'bibel', work: 'Exodus', ref: '24,4', quote: `Da schrieb Mose alle Worte des HERRN.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Deuteronomium', ref: '34,5–6', quote: `Also starb Mose, der Knecht des HERRN, daselbst im Lande der Moabiter nach dem Wort des HERRN. Und er begrub ihn im Tal, im Lande der Moabiter, gegenüber dem Hause Peor. Und niemand hat sein Grab erfahren bis auf diesen heutigen Tag.`, translation: 'Luther 1912', status: 'verbatim', note: 'Offensichtlich eine Notiz aus späterer Perspektive.' },
      { kind: 'juedisch', work: 'Babylonischer Talmud, Baba Batra', ref: '14b–15a', quote: `Mose schrieb sein Buch und den Abschnitt über Bileam und Hiob. Josua schrieb das Buch, das seinen Namen trägt, und die letzten acht Verse der Tora.`, translation: 'nach der Soncino-Übersetzung, dt. eigene Übersetzung', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche liest die Tora als die „fünf Bücher Mose", inspiriert vom Heiligen Geist und in der Kirche empfangen. Die Inspiration hängt nicht an einer modernen Theorie über Schreibvorgänge, sondern daran, dass Gott durch diese Schrift spricht. Die Kirche hat nie dogmatisiert, dass Mose jedes Wort eigenhändig schrieb; die Väter sahen spätere Ergänzungen (wie Dtn 34) gelassen. Wohl aber gilt: Was Christus über Mose sagt, ist wahr – die Tora geht in ihrem Kern auf Mose zurück und bezeugt Christus (Joh 5,46).`,
    sources: [
      { kind: 'kirchenvater', author: 'Hieronymus', work: 'Gegen Helvidius', ref: '7', year: 'ca. 383', quote: `Ob du Mose den Verfasser des Pentateuch nennen willst oder Esra den Wiederhersteller dieses Werkes, ich lehne es nicht ab.`, original: `sive Mosen dicere volueris auctorem Pentateuchi, sive Ezram eiusdem instauratorem operis, non recuso`, translation: 'eigene Übersetzung', status: 'verbatim' },
      { kind: 'koptisch', author: 'Tadros Y. Malaty', work: 'Kommentare zu Genesis und Exodus', quote: `Patristische Auslegung der Tora als Werk des Mose und christozentrisches Zeugnis.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Ehrlich: Die heutige kritische Forschung hält die mosaische Autorschaft praktisch einhellig für ausgeschlossen und rechnet mit einer langen Entstehung bis in die persische Zeit. **Aber** das klassische JEDP-Modell Wellhausens ist in Europa weitgehend aufgegeben: Seit Rendtorff (1977) und Blum spricht man eher von Erzählblöcken, einer priesterlichen Schicht (P), dem Deuteronomium und nachpriesterlichen Redaktionen; den „Jahwisten" haben viele ganz verabschiedet. In den USA vertreten „Neo-Documentarians" (Baden, Schwartz, Stackert) eine erneuerte Quellenscheidung. Es gibt also keinen Konsens über das *Wie* – nur darüber, dass es nicht Mose war.`,
    detail: `**Kritik am klassischen Modell:**
- **Umberto Cassuto** (*The Documentary Hypothesis*, hebr. 1941, engl. 1961) prüfte die „fünf Säulen" (Gottesnamen, Sprache, Theologie, Dubletten, Widersprüche) und hielt sie für tragunfähig.
- **R. Norman Whybray** (*The Making of the Pentateuch*, 1987) zeigte methodische Schwächen der Quellenscheidung – schlug aber selbst einen einzigen Autor im Exil vor, nicht Mose.
- **Rolf Rendtorff** (*Das überlieferungsgeschichtliche Problem des Pentateuch*, 1977) leitete die Abkehr von durchlaufenden Quellen ein.
- **Avi Hurvitz** zeigte sprachgeschichtlich, dass die Priesterschrift (P) im klassischen, nicht im späten biblischen Hebräisch verfasst ist – gegen Wellhausens nachexilische Datierung von P.
- **Joshua Berman** (*Inconsistency in the Torah*, 2017) verweist auf altorientalische Texte wie die Kadesch-Inschrift Ramses' II., die bewusst mehrere, scheinbar widersprüchliche Darstellungen desselben Ereignisses nebeneinanderstellen.

**Wichtig:** Die Krise des JEDP-Modells ist **kein** Beweis für die mosaische Autorschaft. Wer das behauptet, verliert gegen einen Fachmann.`,
    sources: [
      { kind: 'gegner', author: 'Julius Wellhausen', work: 'Prolegomena zur Geschichte Israels', year: '1883 (zuerst 1878 als Geschichte Israels I)', quote: `Das Gesetz (Priesterschrift) sei nicht der Anfang, sondern das Ende der Religionsgeschichte Israels.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Rolf Rendtorff', work: 'Das überlieferungsgeschichtliche Problem des Pentateuch', year: '1977', quote: `Abkehr von durchlaufenden Quellenschriften zugunsten größerer Erzähleinheiten.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'R. Norman Whybray', work: 'The Making of the Pentateuch. A Methodological Study', year: '1987', quote: `Die Kriterien der Quellenscheidung sind methodisch nicht tragfähig; der Pentateuch könnte das Werk eines einzigen (exilischen) Autors sein, der viele Überlieferungen verarbeitete.`, status: 'paraphrase', note: 'Whybray vertritt keine mosaische Autorschaft.' },
      { kind: 'fachliteratur', author: 'Umberto Cassuto', work: 'The Documentary Hypothesis and the Composition of the Pentateuch', year: 'hebr. 1941, engl. 1961', quote: `Kritik der fünf Hauptargumente der Quellenscheidung.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Jan C. Gertz, Konrad Schmid, Markus Witte (Hg.)', work: 'Abschied vom Jahwisten', year: '2002', quote: `Sammelband zur Verabschiedung der Jahwisten-Quelle in der europäischen Forschung.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Interessant ist: Das klassische JEDP-Modell, das du nennst, ist in der Fachwelt selbst in der Krise – in Europa ist der „Jahwist" weitgehend verabschiedet. Ehrlich gesagt beweist das noch nicht, dass Mose alles schrieb. Die kirchliche Sicht war aber nie, dass Mose jedes Wort verfasste – schon der Talmud lässt Josua den Bericht von Moses Tod schreiben. Unsere Position: Die Tora geht im Kern auf Mose zurück und wurde später inspiriert ergänzt. Und für Christen entscheidend: Jesus selbst nennt sie die Schriften des Mose.`,
  keyPoints: [
    `**JEDP ist kein gesichertes Ergebnis:** Seit Rendtorff (1977), Whybray (1987) und dem „Abschied vom Jahwisten" (2002) gibt es keinen Konsens über Quellen und Entstehung.`,
    `**Ehrlich bleiben:** Die Krise von JEDP beweist keine mosaische Autorschaft; die Fachwelt vertritt sie nicht.`,
    `**Traditionell heißt nicht naiv:** Talmud (Josua schrieb Dtn 34) und Hieronymus (Mose oder Esra als Wiederhersteller) rechneten mit späteren Ergänzungen.`,
    `**Sprachgeschichte:** Die Priesterschrift ist im klassischen Hebräisch verfasst (Hurvitz) – das spricht gegen Wellhausens Spätdatierung.`,
    `**Altorientalische Erzählkunst:** Dubletten und scheinbare Widersprüche finden sich bewusst in einheitlichen Texten wie der Kadesch-Inschrift (Berman).`,
    `**Christologische Pointe:** Jesus nennt die Tora „Buch des Mose" und sagt, Mose habe von ihm geschrieben (Joh 5,46).`,
  ],
  voices: [
    {
      person: 'kitchen',
      role: 'als Altorientalist',
      text: `Kitchen kritisiert, dass die Quellenscheidung im 19. Jahrhundert ohne Kenntnis altorientalischer Literatur entwickelt wurde. Ägyptische und mesopotamische Texte zeigen, dass Wechsel von Gottesnamen, Stilwechsel und Wiederholungen in literarisch einheitlichen Werken vorkommen. Besonders betont er, dass der Aufbau von Exodus–Deuteronomium den hethitischen Staatsverträgen des 14./13. Jh. entspricht (Präambel, historischer Prolog, Bestimmungen, Hinterlegung und Verlesung, Zeugen, Segen und Fluch) – nicht den neuassyrischen Verträgen des 7. Jh., denen der historische Prolog und die Segensformeln fehlen.`,
      sources: [
        { kind: 'fachliteratur', author: 'Kenneth A. Kitchen', work: 'On the Reliability of the Old Testament', ref: 'Kap. 6–7', year: '2003', quote: `Das Bundesformular von Exodus–Deuteronomium entspricht den hethitischen Verträgen des späten 2. Jahrtausends.`, status: 'paraphrase' },
        { kind: 'fachliteratur', author: 'George E. Mendenhall', work: 'Covenant Forms in Israelite Tradition. The Biblical Archaeologist 17', year: '1954', quote: `Strukturparallelen zwischen dem Sinaibund und hethitischen Vasallenverträgen.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'origenes',
      role: 'als Textgelehrter der Alten Kirche',
      text: `Origenes, der größte Bibelphilologe der Alten Kirche, kannte Spannungen und Wiederholungen im Text sehr genau. Er schloss daraus nicht auf zusammengestückelte Quellen, sondern sah in ihnen oft Hinweise des Geistes auf einen tieferen Sinn. Methodisch zeigt er, dass die Kirche Textbeobachtungen nie gescheut hat – sie deutete sie nur anders als die Kritik des 19. Jahrhunderts.`,
      sources: [
        { kind: 'kirchenvater', author: 'Origenes', work: 'Über die Prinzipien (De principiis)', ref: 'IV,2–3', year: 'ca. 220–230', quote: `Unebenheiten und scheinbar Unmögliches im Wortsinn sollen den Leser zum geistlichen Sinn führen.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'hoffmeier',
      role: 'als Ägyptologe',
      text: `Hoffmeier weist darauf hin, dass die Tora ägyptische Lehnwörter, Namen und Realien enthält, die zu einer Entstehung im späten 2. Jahrtausend passen, und dass das Wüstenheiligtum Parallelen in ramessidischen Feldlagerzelten hat. Für ihn sind das Indizien für alte Überlieferungsschichten, die eine sehr späte Komposition schwer erklären kann.`,
      sources: [
        { kind: 'fachliteratur', author: 'James K. Hoffmeier', work: 'Ancient Israel in Sinai', year: '2005', quote: `Ägyptische Parallelen zum Wüstenheiligtum und zu Realien der Tora.`, status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'mose-beschreibt-tod',
      objection: `Mose beschreibt seinen eigenen Tod und sein Begräbnis, und „bis auf diesen Tag" kennt niemand sein Grab. Wie soll er das geschrieben haben?`,
      objectionBy: 'Dan McClellan',
      answer: `Gar nicht – und das hat die Tradition auch nie behauptet. Der Talmud sagt, Josua habe die letzten acht Verse geschrieben. Die klassische Position ist mosaische Autorschaft im Kern mit späteren inspirierten Ergänzungen. Dtn 34 widerlegt also nicht die Tradition, sondern bestätigt, dass sie differenzierter ist als ihre Karikatur.`,
      followUps: [
        {
          id: 'wo-hoert-ergaenzung-auf',
          objection: `Wenn du spätere Ergänzungen zugibst – wo hören sie auf? Am Ende ist das ein schleichender Rückzug zur kritischen Sicht.`,
          objectionBy: 'Dan McClellan',
          answer: `Es gibt einen echten Unterschied: Die kritische Sicht sieht in Mose eine literarische Figur, der Texte aus vielen Jahrhunderten zugeschrieben werden. Die traditionelle Sicht sieht in Mose den Ursprung der Tora, deren Text später überliefert, erklärt und an einigen Stellen ergänzt wurde. Wie viel genau ergänzt wurde, ist eine offene Forschungsfrage – aber die Grundrichtung ist verschieden.`,
          followUps: [
            {
              id: 'beweise-fuer-mosaischen-kern',
              objection: `Dann nenne mir einen positiven Grund für einen mosaischen Kern – nicht nur Kritik an JEDP.`,
              objectionBy: 'Joel Baden',
              answer: `Drei Gründe: Erstens die Selbstaussagen der Tora, dass Mose schrieb (Ex 17,14; 24,4; Dtn 31,9). Zweitens das Bundesformular, das den hethitischen Verträgen des 14./13. Jh. entspricht. Drittens das ägyptische Kolorit in Namen, Lehnwörtern und Realien. Keiner dieser Gründe ist ein Beweis – zusammen machen sie einen alten Kern wahrscheinlicher, als die kritische Sicht zugesteht.`,
              followUps: [
                {
                  id: 'assyrische-vertraege',
                  objection: `Deuteronomium 28 hat enge Parallelen zum Thronfolgevertrag Asarhaddons von 672 v. Chr. Das spricht für das 7. Jahrhundert, nicht für Mose.`,
                  objectionBy: 'Joel Baden',
                  answer: `Diese Parallelen in einzelnen Fluchformeln sind real, das gebe ich zu. Aber die Gesamtstruktur mit historischem Prolog und Segensformeln entspricht dem älteren hethitischen Muster. Beide Beobachtungen lassen sich vereinbaren: ein altes Bundesformular, dessen Fluchkatalog in späterer Zeit sprachlich aktualisiert wurde. Die Datierung hängt also davon ab, welches Merkmal man für ursprünglich hält.`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'dubletten-gottesnamen',
      objection: `Zwei Schöpfungsberichte, zwei verwobene Flutberichte, ständig wechselnde Gottesnamen – das schreit nach verschiedenen Quellen.`,
      objectionBy: 'Richard Elliott Friedman',
      answer: `Es kann nach Quellen schreien – oder nach bewusster Erzählkunst. Altorientalische Texte wie die Kadesch-Inschrift Ramses' II. stellen absichtlich mehrere Darstellungen desselben Ereignisses nebeneinander. Und die Gottesnamen haben oft eine theologische Funktion: Elohim für Gott als Schöpfer und Herrn aller Völker, JHWH für den Bundesgott Israels. Cassuto hat genau das ausführlich gezeigt.`,
      followUps: [
        {
          id: 'cassuto-veraltet',
          objection: `Cassuto ist von 1941. Die Forschung ist weitergegangen.`,
          objectionBy: 'Joel Baden',
          answer: `Richtig – und sie ist in eine Richtung gegangen, die Cassutos Kritik am klassischen Modell teilweise bestätigt: Rendtorff, Whybray und der „Abschied vom Jahwisten" haben die durchlaufenden Quellen J und E weitgehend aufgegeben. Die Neo-Documentarians um dich halten dagegen. Wenn die Fachwelt selbst gespalten ist, kann man JEDP nicht als gesichertes Ergebnis präsentieren.`,
          followUps: [
            {
              id: 'flut-getrennt-lesen',
              objection: `Dann nimm die Flutgeschichte: Trennt man sie in J und P, erhält man zwei fast vollständige, in sich stimmige Erzählungen – ein Paar oder sieben Paare reiner Tiere, 40 Tage oder 150 Tage. Das ist kein Stilmittel, das sind zwei Quellen.`,
              objectionBy: 'Joel Baden',
              answer: `Das ist das stärkste Beispiel der Quellenkritik, und ich nehme es ernst. Aber zwei Beobachtungen sprechen für eine bewusst gestaltete Einheit: Gordon Wenham hat gezeigt, dass die Endfassung einen kunstvollen spiegelbildlichen Aufbau hat, der quer über beide „Quellen" läuft. Und das Gilgamesch-Epos enthält Elemente, die man J (die ausgesandten Vögel, das Opfer) und P (Maße des Schiffes, Landung auf einem Berg) zuschreibt – in einer einzigen Erzählung. Die hebräische Endfassung folgt diesem Gesamtablauf; getrennt hätte jede „Quelle" Lücken.`,
              detail: `Auch die angeblichen Widersprüche lassen sich lesen: Gen 6,19 nennt die Grundregel (je ein Paar), Gen 7,2 präzisiert für reine Tiere (sieben Paare, für Opfer); 40 Tage Regen und 150 Tage Höchststand des Wassers sind keine konkurrierenden Angaben. Ehrlich bleibt: Die Doppelungen sind auffällig, und Christen dürfen annehmen, dass Mose oder spätere Bearbeiter ältere Überlieferungen verarbeiteten – Lukas tat dasselbe (Lk 1,1–4), ohne dass die Inspiration litt.`,
              sources: [
                { kind: 'fachliteratur', author: 'Gordon J. Wenham', work: 'The Coherence of the Flood Narrative. Vetus Testamentum 28', year: '1978', quote: `Die Flutgeschichte bildet in ihrer Endfassung eine durchlaufende spiegelbildliche Struktur, die die Quellenscheidung in Frage stellt.`, status: 'paraphrase' },
                { kind: 'bibel', work: 'Lukas', ref: '1,1–3', quote: `Lukas verweist auf ältere Berichte und Augenzeugen, die er sorgfältig geprüft habe.`, status: 'paraphrase' },
              ],
              followUps: [
                {
                  id: 'chiasmus-ueberall',
                  objection: `Chiasmen findet man überall, wenn man sie sucht. Und selbst wenn die Endfassung kunstvoll ist: Dann war eben der Redaktor ein Künstler. Die Quellen darunter bleiben.`,
                  objectionBy: 'Joel Baden',
                  answer: `Das ist fair – und es verschiebt die Debatte. Wenn ein Redaktor die Quellen so kunstvoll verwoben hat, dass ein durchlaufender Aufbau entsteht, ist er ein Autor im vollen Sinn. Dann werden aber auch die Kriterien, mit denen man die Quellen wieder herauslöst, unsicherer: Jede „Naht" könnte ebenso gut beabsichtigt sein. Das heißt: Ältere Vorlagen sind möglich, ihre genaue Rekonstruktion bleibt Hypothese.`,
                  detail: `Joshua Berman (*Inconsistency in the Torah*, 2017) argumentiert, dass altorientalische Rechts- und Erzähltexte Widersprüche und Doppelungen bewusst nebeneinanderstellten – nach anderen Konventionen als moderne Leser erwarten. Für den Laien genügt die Unterscheidung: „Der Pentateuch hat Vorlagen verarbeitet" ist mit dem Glauben vereinbar; „JEDP ist ein gesichertes Ergebnis" ist eine Übertreibung.`,
                  questionsBack: [`Nach welchem Kriterium unterscheidest du eine Quellennaht von einer bewusst gesetzten Doppelung?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'jesus-redete-konventionell',
      objection: `Wenn Jesus „Mose" sagt, benutzt er nur die übliche Bezeichnung seiner Zeit – wie wir „Sonnenaufgang" sagen. Das ist keine Aussage über Autorschaft.`,
      objectionBy: 'Dan McClellan',
      answer: `Bei Mk 12,26 könnte man das so sehen. Aber Joh 5,46–47 geht weiter: Jesus sagt, Mose habe von ihm geschrieben, und stellt Moses Schriften seinen eigenen Worten gegenüber. Das setzt voraus, dass Mose als realer Autor hinter diesen Schriften steht. Das zwingt nicht zur Annahme, jedes Wort stamme von ihm – wohl aber zur Annahme eines echten mosaischen Kerns.`,
      followUps: [
        {
          id: 'jesus-irrte-als-mensch',
          objection: `Vielleicht teilte Jesus als Mensch einfach die Annahmen seiner Zeit. Er war kein Bibelwissenschaftler.`,
          objectionBy: 'Bart Ehrman',
          answer: `Für Christen ist Jesus der menschgewordene Logos; seine Lehre ist wahr. Die Orthodoxie unterscheidet zwischen dem, was er bewusst lehrt, und Fragen, die er nicht berührt. Hier lehrt er ausdrücklich, dass Moses Schriften von ihm zeugen – das ist eine theologische Kernaussage, keine Nebenbemerkung. Wer sie als Irrtum erklärt, kritisiert nicht nur die Tradition, sondern Christus selbst; das sollte man offen benennen.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Welches Modell meinst du genau – das klassische JEDP, das europäische Blockmodell oder die Neo-Documentarians?`,
    `Warum hat die europäische Forschung den Jahwisten weitgehend aufgegeben?`,
    `Wie erklärst du, dass die Priesterschrift sprachlich klassisches und nicht spätes Hebräisch zeigt?`,
    `Wusstest du, dass schon der Talmud Dtn 34 Josua zuschreibt?`,
  ],
  avoid: [
    `Behaupten, JEDP sei „widerlegt" und deshalb sei Mose bewiesener Autor.`,
    `So tun, als hätte die Tradition behauptet, Mose habe seinen eigenen Tod beschrieben.`,
    `Fachleute als ungläubig abwerten – viele gläubige Juden und Christen vertreten kritische Modelle.`,
  ],
  concessions: [
    `Die kritische Forschung vertritt nahezu einhellig keine mosaische Autorschaft.`,
    `Der Pentateuch enthält eindeutig spätere Notizen und aktualisierte Ortsnamen.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Umberto Cassuto', work: 'The Documentary Hypothesis', year: '1961', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'R. Norman Whybray', work: 'The Making of the Pentateuch', year: '1987', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Joshua A. Berman', work: 'Inconsistency in the Torah. Ancient Literary Convention and the Limits of Source Criticism', year: '2017', status: 'paraphrase' },
    { kind: 'gegner', author: 'Joel S. Baden', work: 'The Composition of the Pentateuch. Renewing the Documentary Hypothesis', year: '2012', status: 'paraphrase' },
  ],
  difficulty: 3,
  tags: ['Pentateuch', 'Mose', 'Dokumentenhypothese', 'Wellhausen', 'Tora'],
  related: ['at-archaeologie/patriarchen-anachronismen', 'at-archaeologie/exodus-nie-passiert', 'genesis/genesis-1-und-2-widerspruch'],
};

export default claim;
