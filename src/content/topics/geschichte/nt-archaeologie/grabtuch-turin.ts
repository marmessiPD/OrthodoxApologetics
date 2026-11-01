import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'grabtuch-turin',
  title: `„Das Turiner Grabtuch ist eine mittelalterliche Fälschung."`,
  proponents: [
    { name: 'Paul E. Damon u. a.', role: 'Radiokarbonlabors Arizona, Oxford, Zürich', work: 'Radiocarbon dating of the Shroud of Turin. Nature 337 (1989)' },
    { name: 'Walter McCrone', role: 'Mikroskopiker (†2002)', work: 'Judgment Day for the Shroud of Turin (1996)' },
    { name: 'Joe Nickell', role: 'Skeptischer Ermittler, Committee for Skeptical Inquiry', work: 'Inquest on the Shroud of Turin (1983, erw. 1998)' },
    { name: 'Luigi Garlaschelli', role: 'Chemiker, Universität Pavia', work: 'Nachbildung des Grabtuchbildes mit mittelalterlichen Mitteln (vorgestellt 2009)' },
  ],
  steelman: `1988 datierten drei unabhängige Labors (Arizona, Oxford, Zürich) Proben des Grabtuchs mit der Radiokarbonmethode; das Ergebnis wurde 1989 in „Nature" veröffentlicht: 1260–1390 n. Chr., mit mindestens 95 Prozent Wahrscheinlichkeit. Das passt genau zum historischen Befund: Das Tuch taucht erst um 1355 in Lirey in Frankreich auf, und schon 1389 schrieb der zuständige Bischof Pierre d'Arcis an Papst Clemens VII., ein Künstler habe gestanden, es gemalt zu haben. Walter McCrone fand Eisenoxid- und Zinnoberpartikel, also Farbpigmente. Luigi Garlaschelli hat ein ähnliches Bild mit mittelalterlichen Mitteln hergestellt. Dass eine Kirche ein solches Objekt jahrhundertelang zur Schau stellte, passt in die Welt des mittelalterlichen Reliquienhandels mit Splittern vom wahren Kreuz und Milch der Jungfrau. Wer das Grabtuch als Beweis für die Auferstehung anführt, hat die Debatte verloren.`,
  biblical: {
    summary: `Die Evangelien berichten, dass Jesus in Leinen gewickelt begraben wurde (Mk 15,46; Joh 19,40) und dass die Jünger im leeren Grab die Leinentücher und das Schweißtuch liegen sahen (Joh 20,5–7). Die Tücher sind dort ein Zeichen der Auferstehung, kein Gegenstand der Verehrung; das Neue Testament erwähnt nirgends, dass sie aufbewahrt wurden. Der Glaube der Apostel gründet auf den Begegnungen mit dem Auferstandenen und auf dem leeren Grab (1 Kor 15,3–8), nicht auf einem Gegenstand. Christus selbst preist die selig, „die nicht sehen und doch glauben" (Joh 20,29).`,
    detail: `**Zur Wortwahl:** Die Synoptiker sprechen von einem Leinentuch (*sindōn*, Mk 15,46), Johannes von Leinenbinden bzw. -tüchern (*othonia*, Plural) und einem gesonderten Schweißtuch (*soudarion*) „das um sein Haupt gewesen war" (Joh 20,7). Ob sich das mit einem einzigen großen Tuch vereinbaren lässt, wird unterschiedlich beurteilt – für den Glauben ist die Frage ohne Belang.`,
    sources: [
      { kind: 'bibel', work: 'Johannes', ref: '20,29', quote: `Spricht Jesus zu ihm: Dieweil du mich gesehen hast, Thomas, so glaubest du. Selig sind, die nicht sehen und doch glauben!`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '20,5–8', quote: `Der andere Jünger sieht die Leinentücher liegen und das Schweißtuch zusammengewickelt an einem besonderen Ort; er sah und glaubte.`, status: 'paraphrase' },
      { kind: 'bibel', work: '1. Korinther', ref: '15,3–8', quote: `Christus ist gestorben, begraben, am dritten Tag auferweckt worden und Kephas, den Zwölf, über fünfhundert Brüdern, Jakobus, allen Aposteln und zuletzt Paulus erschienen.`, status: 'paraphrase' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche hat zum Turiner Grabtuch keine verbindliche Position; es spielt in ihrer Frömmigkeit keine besondere Rolle, und der Glaube hängt nicht daran. Auch die römisch-katholische Kirche, in deren Obhut sich das Tuch befindet, hat seine Echtheit nie lehramtlich erklärt; Papst Johannes Paul II. sagte 1998, die Kirche habe keine besondere Kompetenz, über diese Fragen zu entscheiden, und überlasse sie den Wissenschaftlern. Orthodoxe Christen ehren Reliquien und Ikonen, aber der Grund der Hoffnung ist der lebendige, auferstandene Christus, der in seiner Kirche wirkt.`,
    sources: [
      { kind: 'sonstiges', author: 'Papst Johannes Paul II.', work: 'Ansprache in der Kathedrale von Turin', year: '24. Mai 1998', quote: `Die Kirche habe keine spezifische Kompetenz, sich zu diesen Fragen zu äußern; sie überlasse es den Wissenschaftlern, weiter zu forschen.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Menschwerdung (De Incarnatione)', ref: '30', year: 'ca. 318', quote: `Ein Toter wirkt nichts; Christus aber wirkt täglich, zieht Menschen zum Glauben und überwindet die Götzen – daran erkennt man, dass er lebt.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Die Radiokarbondatierung von 1988 (veröffentlicht 1989) ergab 1260–1390 n. Chr. und gilt in der Fachwelt als starkes Argument für eine mittelalterliche Herkunft. Kritik richtet sich vor allem auf die Probenentnahme (nur eine Stelle an einem Randstück, das möglicherweise repariert oder verunreinigt war – so der Chemiker Raymond Rogers 2005) und auf die Statistik: Eine Auswertung der 2017 freigegebenen Rohdaten (Casabianca u. a., Archaeometry 2019) fand Hinweise auf Inhomogenität. Gegenstudien (etwa eine Untersuchung eines Restfragments durch Freer-Waters und Jull, Radiocarbon 2010) fanden keine Belege für eine Reparatur. Wie das Bild entstand, ist bis heute nicht befriedigend erklärt; Nachbildungen erreichen nicht alle seine Eigenschaften. Der wissenschaftliche Mehrheitsstand bleibt: mittelalterlich – mit offenen Fragen.`,
    detail: `**Chronologie der Forschung:**
- **1389:** Memorandum des Bischofs Pierre d'Arcis von Troyes an Clemens VII.: Ein Vorgänger habe den Maler ausfindig gemacht. Der Maler wird nicht genannt; der Bischof stand in einem Streit mit den Kanonikern von Lirey.
- **1390:** Clemens VII. erlaubt die Ausstellung unter der Bedingung, dass sie als Darstellung (Abbild) und nicht als wahres Grabtuch gezeigt wird.
- **1978:** Das STURP-Team (Shroud of Turin Research Project) untersucht das Tuch fünf Tage lang und findet keine Pigmente, die das Bild erklären; Blutspuren werden von einigen Teammitgliedern als echtes Blut gedeutet. McCrone widerspricht (Eisenoxid, Zinnober).
- **1988/1989:** Radiokarbondatierung: 1260–1390.
- **2005:** Raymond Rogers (Thermochimica Acta 425) argumentiert, das Probenstück unterscheide sich chemisch vom Haupttuch.
- **2010:** Freer-Waters und Jull finden an einem Restfragment keine Hinweise auf Reparatur oder Beschichtung.
- **2019:** Casabianca u. a. sehen in den Rohdaten Inhomogenität und fordern eine Neubewertung.

**Hypothesen über eine frühere Geschichte** (Mandylion von Edessa, Darstellung im ungarischen Pray-Kodex um 1192–1195) sind unter Historikern umstritten und nicht beweiskräftig.`,
    sources: [
      { kind: 'wissenschaft', author: 'P. E. Damon u. a.', work: 'Radiocarbon dating of the Shroud of Turin. Nature 337', ref: 'S. 611–615', year: '1989', quote: `Die Ergebnisse liefern einen schlüssigen Beleg dafür, dass das Leinen des Turiner Grabtuchs mittelalterlich ist.`, original: `These results therefore provide conclusive evidence that the linen of the Shroud of Turin is mediaeval.`, translation: 'eigene Übersetzung', status: 'verbatim', note: 'Kalibriertes Alter 1260–1390 n. Chr. (mind. 95 % Konfidenz).' },
      { kind: 'wissenschaft', author: 'Raymond N. Rogers', work: 'Studies on the radiocarbon sample from the shroud of Turin. Thermochimica Acta 425', ref: 'S. 189–194', year: '2005', quote: `Das Probenstück unterscheide sich chemisch vom Hauptteil des Tuches und sei für das Ganze nicht repräsentativ.`, status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'T. Casabianca, E. Marinelli, G. Pernagallo, B. Torrisi', work: 'Radiocarbon Dating of the Turin Shroud: New Evidence from Raw Data. Archaeometry', year: '2019', quote: `Die statistische Analyse der Rohdaten lege nahe, dass die Messwerte nicht homogen seien und das Verfahren überprüft werden sollte.`, status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'R. A. Freer-Waters, A. J. T. Jull', work: 'Investigating a Dated Piece of the Shroud of Turin. Radiocarbon 52', year: '2010', quote: `An einem Restfragment der datierten Probe seien keine Hinweise auf Reparaturfäden oder Beschichtungen gefunden worden.`, status: 'paraphrase' },
      { kind: 'gegner', author: 'Walter McCrone', work: 'Judgment Day for the Shroud of Turin', year: '1996', quote: `Das Bild bestehe aus Eisenoxid- und Zinnoberpigmenten in einem Bindemittel; es sei gemalt.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Ob das Grabtuch echt ist, ist für meinen Glauben nicht entscheidend – die koptische Kirche hat dazu keine verbindliche Position. Die Radiokarbondatierung von 1988 spricht für das Mittelalter; Kritiker bemängeln Probenauswahl und Statistik, und wie das Bild entstand, ist bis heute nicht befriedigend erklärt. Ich lasse die Frage offen. Der Glaube der Apostel beruhte nicht auf einem Tuch, sondern auf dem leeren Grab und den Begegnungen mit dem Auferstandenen.`,
  keyPoints: [
    `**Keine Glaubensfrage:** Die koptische Kirche hat keine Position; auch Rom hat die Echtheit nie erklärt (Johannes Paul II., 1998).`,
    `**C14 ernst nehmen:** Drei Labors, 1260–1390 – das ist ein starkes Argument für das Mittelalter.`,
    `**Offene Fragen ehrlich nennen:** Probenstelle (Rogers 2005), Rohdaten-Statistik (Casabianca 2019), ungeklärte Bildentstehung – aber auch Gegenstudien (Freer-Waters/Jull 2010).`,
    `**Historische Quellen:** Erstes sicheres Auftauchen um 1355; Bischof d'Arcis 1389 behauptet ein Malergeständnis; Clemens VII. erlaubte 1390 nur die Ausstellung als Abbild.`,
    `**Auch bei Echtheit kein Beweis:** Ein Tuch aus dem 1. Jahrhundert würde die Auferstehung nicht beweisen; ein unerklärtes Bild ist kein Wunderbeweis.`,
    `**Fundament des Glaubens:** 1 Kor 15,3–8 – Zeugen, leeres Grab, Verwandlung der Jünger; Joh 20,29.`,
  ],
  voices: [
    {
      person: 'paulus',
      role: 'als Zeuge des Auferstandenen',
      text: `Paulus legt das Fundament des Osterglaubens in einer Liste von Zeugen dar, die er als Überlieferung empfangen hat (1 Kor 15,3–8). Er nennt Namen, verweist auf noch lebende Augenzeugen und auf seine eigene Begegnung mit dem Auferstandenen. Von Gegenständen, Tüchern oder Reliquien spricht er nicht. Die Wahrheit der Auferstehung entscheidet sich für ihn an der Geschichte und am Zeugnis – „Ist Christus nicht auferstanden, so ist euer Glaube vergeblich" (1 Kor 15,17).`,
      sources: [
        { kind: 'bibel', work: '1. Korinther', ref: '15,6', quote: `Danach ist er gesehen worden von mehr denn fünfhundert Brüdern auf einmal, deren noch viele leben, etliche aber sind entschlafen.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
    },
    {
      person: 'athanasius',
      role: 'als Theologe der Auferstehung',
      text: `Athanasius argumentiert, dass man die Auferstehung Christi an seinen gegenwärtigen Wirkungen erkennt: Ein Toter bewegt nichts, Christus aber verwandelt täglich Menschen, besiegt die Todesfurcht – selbst Kinder und Frauen gehen ihm zuliebe furchtlos in den Tod – und überwindet die Götzen (De Incarnatione 27–30). Für den großen alexandrinischen Lehrer ist der lebendige Herr in seiner Kirche das Zeichen der Auferstehung, nicht ein Gegenstand.`,
      sources: [
        { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'De Incarnatione', ref: '27–30', year: 'ca. 318', quote: `Die Todesverachtung der Christen und das tägliche Wirken Christi seien Zeichen dafür, dass er lebt und den Tod besiegt hat.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'habermas',
      role: 'als Historiker der Auferstehung',
      text: `Habermas hat sich früh mit dem Grabtuch beschäftigt und in den 1980er-Jahren gemeinsam mit Kenneth Stevenson ein Buch darüber geschrieben. Seine eigentliche Arbeit gilt aber einer Argumentation, die von solchen Gegenständen ganz unabhängig ist: der „Minimal-Facts"-Methode, die nur von Tatsachen ausgeht, die auch die Mehrheit kritischer Forscher anerkennt – Kreuzigung, Erscheinungserfahrungen der Jünger, Bekehrung des Paulus und des Jakobus, frühe Verkündigung. Damit zeigt er, dass die Auferstehungsfrage historisch ohne das Grabtuch verhandelt werden kann.`,
      sources: [
        { kind: 'fachliteratur', author: 'Gary R. Habermas / Michael R. Licona', work: 'The Case for the Resurrection of Jesus', year: '2004', quote: `Die Minimal-Facts-Argumentation beruht auf weithin anerkannten historischen Tatsachen, nicht auf umstrittenen Artefakten.`, status: 'paraphrase' },
        { kind: 'fachliteratur', author: 'Kenneth E. Stevenson / Gary R. Habermas', work: 'Verdict on the Shroud', year: '1981', quote: `Frühe, eher wohlwollende Untersuchung des Grabtuchs vor der Radiokarbondatierung.`, status: 'paraphrase', note: 'Vor 1988 erschienen – heute nur noch als Zeitdokument zu lesen.' },
      ],
    },
  ],
  dialog: [
    {
      id: 'c14-beweis',
      objection: `Drei unabhängige Labors, publiziert in „Nature": 1260 bis 1390. Das Grabtuch ist mittelalterlich. Ende der Diskussion.`,
      objectionBy: 'Joe Nickell',
      answer: `Das ist ein starkes Argument, und ich nehme es ernst. Es gibt Kritik an der Probenentnahme an einer einzigen Randstelle und an der Statistik der Rohdaten, aber auch Gegenstudien. Mein Glaube hängt daran nicht: Die koptische Kirche hat keine Position zum Grabtuch. Ich lasse die Frage offen – und baue keine Apologetik darauf.`,
      followUps: [
        {
          id: 'reparatur-widerlegt',
          objection: `Die These vom „unsichtbar eingewebten Flicken" wurde längst widerlegt – Freer-Waters und Jull fanden 2010 keine Reparatur.`,
          objectionBy: 'Joe Nickell',
          answer: `Es gibt diese Gegenstudie, ja, und ebenso die Studie von Rogers (2005) und die statistische Neuauswertung von 2019, die in die andere Richtung zeigen. Ich bin kein Radiochemiker und tue nicht so, als könnte ich das entscheiden. Ehrlich ist: Der Mehrheitsstand spricht für das Mittelalter, die Diskussion ist aber nicht vollständig abgeschlossen.`,
          followUps: [
            {
              id: 'glaeubige-ignorieren',
              objection: `Typisch: Gläubige akzeptieren Wissenschaft nur, wenn sie ihnen passt.`,
              objectionBy: 'Joe Nickell',
              answer: `Dann bin ich die Ausnahme: Ich akzeptiere, dass die Datierung für das Mittelalter spricht, und habe kein Problem damit. Mein Glaube gründet auf Christus, dem Auferstandenen, bezeugt von Augenzeugen (1 Kor 15). Ein Gegenstand kann diesen Glauben weder begründen noch zerstören.`,
              followUps: [
                {
                  id: 'warum-verehren',
                  objection: `Warum wird es dann in Turin von Millionen verehrt? Ist das nicht Betrug am Gläubigen?`,
                  objectionBy: 'Christopher Hitchens (als Diskussionspunkt)',
                  answer: `Die katholische Kirche stellt das Tuch als Anlass zur Betrachtung des Leidens Christi aus, ohne seine Echtheit lehramtlich zu behaupten. Auch wer es für ein mittelalterliches Abbild hält, kann es wie eine Ikone betrachten – ein Bild, das auf Christus verweist. Schon Clemens VII. erlaubte 1390 die Ausstellung nur als Darstellung. Betrug wäre es, Gläubigen eine Gewissheit vorzutäuschen, die es nicht gibt.`,
                },
              ],
            },
          ],
        },
        {
          id: 'probe-repraesentativ',
          objection: `Die Kritik an der Probenauswahl ist Ausrede. Man hat sorgfältig eine Stelle gewählt, die das Tuch nicht beschädigt.`,
          objectionBy: 'Paul E. Damon u. a. (Position der Labors)',
          answer: `Die Labors haben nach den damaligen Vereinbarungen gearbeitet, das stimmt. Gerade die Rücksicht auf das Tuch führte aber dazu, dass nur eine einzige Stelle beprobt wurde – statistisch ist das eine schmale Basis. Das ist kein Vorwurf an die Labors, sondern ein Grund, das Ergebnis als starkes, aber nicht unwiderlegbares Indiz zu behandeln.`,
        },
      ],
    },
    {
      id: 'darcis-gestaendnis',
      objection: `Schon 1389 schrieb Bischof d'Arcis dem Papst, ein Künstler habe gestanden, das Tuch gemalt zu haben.`,
      objectionBy: 'Walter McCrone',
      answer: `Das Memorandum existiert und ist ein ernsthaftes historisches Indiz. Allerdings nennt es den Maler nicht, beruft sich auf eine Untersuchung eines Vorgängers, und d'Arcis lag im Streit mit den Kanonikern von Lirey. Historiker gewichten es unterschiedlich. Bemerkenswert ist auch: Hier war es ein Bischof, der vor Missbrauch warnte – die Kirche hat sich selbst kritisch geprüft.`,
      followUps: [
        {
          id: 'keine-frueheren-belege',
          objection: `Vor etwa 1355 gibt es keinen einzigen sicheren Beleg für das Tuch. Das passt perfekt zur Fälschung.`,
          objectionBy: 'Joe Nickell',
          answer: `Richtig, die sichere Geschichte beginnt um 1355 in Lirey. Hypothesen über eine frühere Geschichte – etwa eine Identität mit dem Bild von Edessa – sind spekulativ und unter Historikern umstritten. Ich würde sie nicht als Argument benutzen.`,
          followUps: [
            {
              id: 'pray-kodex',
              objection: `Und der Pray-Kodex mit seinen angeblichen „Brandlöchern" ist Wunschdenken von Grabtuch-Fans.`,
              objectionBy: 'Joe Nickell',
              answer: `Die Deutung der Miniatur im ungarischen Pray-Kodex (um 1192–1195) als Darstellung des Grabtuchs ist umstritten, und ich stütze mich nicht darauf. Man sollte keine wackeligen Indizien aufhäufen – weder für noch gegen die Echtheit.`,
            },
          ],
        },
      ],
    },
    {
      id: 'gemalt-mccrone',
      objection: `McCrone hat Eisenoxid und Zinnober gefunden – also Farbe. Das Bild ist gemalt.`,
      objectionBy: 'Walter McCrone',
      answer: `Das STURP-Team, das das Tuch 1978 fünf Tage lang untersuchte, kam zum gegenteiligen Ergebnis: Pigmentspuren gebe es, sie erklärten aber das Bild nicht. Die Frage ist unter Fachleuten bis heute strittig. Wie das Bild genau entstanden ist, hat noch niemand vollständig befriedigend erklärt.`,
      followUps: [
        {
          id: 'garlaschelli-kopie',
          objection: `Garlaschelli hat das Bild 2009 mit mittelalterlichen Mitteln nachgebildet. Es ist also machbar.`,
          objectionBy: 'Luigi Garlaschelli',
          answer: `Die Nachbildung ähnelt dem Grabtuch, aber Befürworter wie Kritiker streiten darüber, ob sie alle Eigenschaften erreicht – etwa die extreme Oberflächlichkeit der Färbung. Ich halte die Frage für offen. Sicher ist nur: Wer behauptet, das Bild sei „wissenschaftlich unerklärlich und deshalb ein Wunder", macht einen Fehler.`,
          followUps: [
            {
              id: 'lueckenbuesser',
              objection: `Genau – „unerklärt, also Gott" ist ein klassischer Lückenbüßer-Gott.`,
              objectionBy: 'Joe Nickell',
              answer: `Einverstanden, und deshalb argumentiere ich nicht so. Dass wir etwas nicht erklären können, beweist kein Wunder. Christen sollten das Grabtuch nicht als Gottesbeweis verwenden; die Gründe für den Glauben liegen woanders.`,
            },
          ],
        },
      ],
    },
    {
      id: 'reliquienbetrug',
      objection: `Das Grabtuch ist typisch für den mittelalterlichen Reliquienschwindel: genug Kreuzessplitter für ein Schiff, Milch der Jungfrau, Federn des Erzengels. Die Kirche hat daran verdient.`,
      objectionBy: 'Christopher Hitchens',
      answer: `Es gab im Mittelalter tatsächlich viel Reliquienmissbrauch und Geschäftemacherei – das gestehe ich offen zu, und schon Zeitgenossen haben es kritisiert. Aber aus Missbrauch folgt nicht, dass jede Verehrung von Heiligen und Reliquien unsinnig ist; das wäre ein Fehlschluss. Und beim Grabtuch war es ausgerechnet ein Bischof, der Einspruch erhob.`,
      followUps: [
        {
          id: 'reliquien-allgemein',
          objection: `Ihr Orthodoxen verehrt doch auch Reliquien. Das ist dasselbe Prinzip.`,
          objectionBy: 'Protestantischer Kritiker',
          answer: `Die Kirche ehrt die Leiber der Heiligen, weil Gott in ihnen gewohnt hat und sie auferwecken wird (vgl. 2 Kön 13,21; Apg 19,12). Das verpflichtet aber zu Sorgfalt in der Prüfung, nicht zur Leichtgläubigkeit. Die Echtheit einer bestimmten Reliquie ist eine historische Frage; der Glaube an die Auferstehung hängt an keiner einzelnen.`,
        },
      ],
    },
    {
      id: 'glaube-faellt',
      objection: `Für viele Christen ist das Grabtuch der Beweis der Auferstehung. Wenn es gefälscht ist, fällt euer Glaube.`,
      objectionBy: 'Skeptischer Kritiker',
      answer: `Kein einziger Apostel hat die Auferstehung mit einem Tuch begründet. Paulus nennt Zeugen, Johannes beschreibt die liegenden Tücher als Zeichen, nicht als Reliquie. Der Glaube der Kirche stand 1300 Jahre, bevor das Grabtuch in Lirey auftauchte – er kann auch ohne es bestehen.`,
      followUps: [
        {
          id: 'johannes-tuecher',
          objection: `Johannes spricht von mehreren Leinenbinden und einem gesonderten Schweißtuch. Ein einziges großes Tuch widerspricht sogar der Bibel.`,
          objectionBy: 'Joe Nickell',
          answer: `Das griechische *othonia* kann Leinentücher allgemein bezeichnen, und die Synoptiker sprechen von einem *sindōn*; wie sich das genau zusammenfügt, wird unterschiedlich beurteilt. Für mich ist das kein Problem in die eine oder andere Richtung – genau weil mein Glaube nicht von der Echtheit des Tuches abhängt.`,
        },
      ],
    },
    {
      id: 'wenn-echt-beweis',
      objection: `Und wenn neue Messungen doch das 1. Jahrhundert ergeben? Dann ist die Auferstehung bewiesen!`,
      objectionBy: 'Enthusiastischer Grabtuch-Befürworter',
      answer: `Vorsicht: Selbst ein Leinentuch aus dem 1. Jahrhundert mit dem Bild eines Gekreuzigten würde nicht beweisen, dass es Jesus war, und schon gar nicht, dass er auferstanden ist. Wer so argumentiert, macht sich angreifbar. Die Auferstehung ist ein historisches und zugleich ein Glaubensereignis, das wir mit Zeugnissen begründen, nicht mit einem Laborwert.`,
      followUps: [
        {
          id: 'wissenschaft-glaube-feinde',
          objection: `Seht ihr: Wissenschaft und Glaube sind eben unvereinbar – ihr müsst den Glauben vor der Wissenschaft in Sicherheit bringen.`,
          objectionBy: 'Skeptischer Kritiker',
          answer: `Nein. Ich sage nur, dass eine einzelne Messung an einem Tuch eine andere Frage beantwortet als die nach der Auferstehung. Wissenschaftliche Methoden sind beim Grabtuch genau das richtige Werkzeug – und ich akzeptiere ihre Ergebnisse, auch wenn sie gegen die Echtheit sprechen.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wenn die koptische Kirche keine Position zum Grabtuch hat – welche Rolle spielt es dann für die Frage nach der Auferstehung?`,
    `Welcher Apostel hat die Auferstehung mit einem Gegenstand begründet?`,
    `Könntest du mir die Gründe der Apostel für ihren Osterglauben nennen, unabhängig von Reliquien?`,
  ],
  avoid: [
    `Das Grabtuch als „Beweis der Auferstehung" anführen.`,
    `Die Radiokarbondatierung als „Verschwörung" abtun.`,
    `Mit „unerklärlich, also Wunder" argumentieren.`,
    `Umstrittene Indizien (Pray-Kodex, Pollen, Münzen auf den Augen) als Beweise aufhäufen.`,
  ],
  concessions: [
    `Die Radiokarbondatierung von 1988 spricht für eine Entstehung zwischen 1260 und 1390.`,
    `Die sichere Geschichte des Tuches beginnt erst um 1355; schon 1389 behauptete ein Bischof, es sei gemalt.`,
    `Im Mittelalter gab es verbreiteten Reliquienmissbrauch.`,
  ],
  furtherReading: [
    { kind: 'wissenschaft', author: 'P. E. Damon u. a.', work: 'Radiocarbon dating of the Shroud of Turin (Nature 337)', year: '1989', status: 'paraphrase' },
    { kind: 'wissenschaft', author: 'T. Casabianca u. a.', work: 'Radiocarbon Dating of the Turin Shroud: New Evidence from Raw Data (Archaeometry)', year: '2019', status: 'paraphrase' },
    { kind: 'gegner', author: 'Joe Nickell', work: 'Inquest on the Shroud of Turin', year: '1998', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Grabtuch', 'Turin', 'Radiokarbon', 'Reliquien', 'Auferstehung'],
  related: ['auferstehung/halluzinationen', 'auferstehung/leichnam-gestohlen-falsches-grab', 'moenchtum-reliquien/reliquien-aberglaube', 'auferstehung/wunder-historisch-unmoeglich'],
};

export default claim;
