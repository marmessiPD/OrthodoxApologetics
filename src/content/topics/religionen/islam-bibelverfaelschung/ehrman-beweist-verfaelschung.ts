import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'ehrman-beweist-verfaelschung',
  title: `„Sogar christliche Gelehrte wie Bart Ehrman sagen, die Bibel sei verfälscht."`,
  proponents: [
    { name: 'Shabir Ally', role: 'Islamischer Apologet, Toronto', work: 'Debatten, in denen er sich häufig auf Ehrman stützt' },
    { name: 'Mohammed Hijab', role: 'Islamischer Debattierer, London', work: 'Online-Debatten über die Bibel' },
    { name: 'Bart D. Ehrman', role: 'Neutestamentler, University of North Carolina at Chapel Hill (agnostisch)', work: 'Misquoting Jesus (2005); Orthodox Corruption of Scripture (1993); Forged (2011)' },
  ],
  steelman: `„Bart Ehrman ist einer der führenden Neutestamentler der Welt, Schüler von Bruce Metzger, früher selbst evangelikaler Christ. Er zeigt, dass Schreiber den Text bewusst verändert haben, um ihn der späteren Rechtgläubigkeit anzupassen (*The Orthodox Corruption of Scripture*). Er sagt, wir hätten nicht einmal Kopien der Kopien der Originale. Er hält viele Briefe des Neuen Testaments für Fälschungen (*Forged*) und meint, Jesus habe sich nicht für Gott gehalten. Wenn ein christlich ausgebildeter Spitzenforscher das sagt, kann man nicht behaupten, nur Muslime würden die Zuverlässigkeit der Bibel bezweifeln. Ehrman bestätigt, was der Koran seit 1.400 Jahren sagt."`,
  biblical: {
    summary: `Ehrman ist kein Christ, sondern bezeichnet sich als Agnostiker. Seine Arbeit zeigt, dass es Textvarianten gibt und Schreiber manchmal theologisch motiviert änderten – aber auch, dass man diese Änderungen **erkennt**, weil andere Handschriften den älteren Text bewahren. Er räumt ausdrücklich ein, dass wesentliche christliche Glaubensinhalte von den Varianten nicht berührt werden. Und seine historischen Ergebnisse widersprechen dem Koran an mehr Stellen als der Bibel: Er hält die Kreuzigung Jesu für historisch gesichert.`,
    detail: `**Was Ehrman sagt – und was nicht:**
- Ja: Es gibt viele Varianten; einige sind theologisch motiviert; manche Bücher stammen seiner Ansicht nach nicht von den genannten Autoren.
- Ja: Wesentliche Glaubensinhalte sind von den Varianten nicht betroffen (Anhang der Taschenbuchausgabe von *Misquoting Jesus*).
- Ja: Jesus wurde unter Pontius Pilatus gekreuzigt – das zählt er zu den sichersten Daten über Jesus.
- Nein: Ehrman sagt nirgends, dass die Bibel ursprünglich eine islamische Botschaft enthielt.

**Methodischer Punkt:** Ehrmans Ansatz schließt Wunder als historische Erklärung aus. Damit fallen auch die Jungfrauengeburt, die Wunder Jesu und seine Erhöhung zu Gott – alles Lehren des Korans.`,
    sources: [
      { kind: 'gegner', author: 'Bart D. Ehrman', work: 'Misquoting Jesus (Taschenbuchausgabe, Anhang mit Interview)', quote: `Ehrman erklärt, seine Position stehe nicht im Widerspruch zu Metzgers Auffassung, dass wesentliche christliche Glaubensinhalte von den Textvarianten nicht berührt werden.`, original: `essential Christian beliefs are not affected by textual variants in the manuscript tradition of the New Testament`, status: 'paraphrase', note: 'Vielzitiertes Zugeständnis; Seitenzahl je nach Ausgabe.' },
      { kind: 'gegner', author: 'Bart D. Ehrman', work: 'Did Jesus Exist? The Historical Argument for Jesus of Nazareth', year: '2012', quote: `Die Kreuzigung Jesu auf Befehl des Pilatus gehört zu den sichersten Fakten über den historischen Jesus.`, status: 'paraphrase' },
      { kind: 'gegner', author: 'Bart D. Ehrman', work: 'How Jesus Became God', year: '2014', quote: `Die Verehrung Jesu als göttliches Wesen setzte sehr früh ein – schon die frühesten Christen nach seinem Tod sahen ihn als erhöht.`, status: 'paraphrase' },
    ],
  },
  church: {
    summary: `Die Kirche hat keine Angst vor kritischer Forschung. Sie hat sie selbst begonnen – Origenes und Hieronymus waren Textforscher, die koptischen Awlad al-'Assal ebenso. Entscheidend ist, die Ergebnisse ehrlich zu unterscheiden: Was ist Befund (es gibt Varianten), und was ist Weltanschauung (Wunder können nicht geschehen)?`,
    sources: [
      { kind: 'kirchenvater', author: 'Hieronymus', work: 'Vorrede zu den Evangelien an Papst Damasus', year: '383', quote: `Hieronymus prüfte die lateinischen Handschriften an den griechischen Vorlagen, weil die Abweichungen groß waren.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Ehrman ist ein angesehener Textkritiker; seine Fachkollegen teilen viele seiner Befunde, aber nicht seine populären Zuspitzungen. Daniel Wallace, Peter Williams und andere haben in Debatten und Fachbeiträgen gezeigt, dass seine Beispiele den Glauben nicht gefährden. Ehrman selbst unterscheidet zwischen seinen wissenschaftlichen Publikationen und seinen Büchern für ein breites Publikum, die bewusst pointierter formuliert sind.`,
    sources: [
      { kind: 'fachliteratur', author: 'Daniel B. Wallace (Hg.)', work: 'Revisiting the Corruption of the New Testament', year: '2011', quote: `Auseinandersetzung mit Ehrmans These der „orthodoxen Verfälschung".`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Ehrman ist Agnostiker, kein Christ – und er gibt zu, dass die Varianten keine wesentliche christliche Lehre berühren. Außerdem hält er die Kreuzigung Jesu für eine der sichersten Tatsachen der Geschichte. Wenn du Ehrman als Autorität nimmst, musst du ihn ganz nehmen: Dann widerlegt er 4:157 und auch die Jungfrauengeburt und die Wunder Jesu, die der Koran lehrt.`,
  keyPoints: [
    `**Ehrmans Zugeständnis:** Wesentliche christliche Glaubensinhalte werden von den Textvarianten nicht berührt.`,
    `**Ehrman bestätigt die Kreuzigung** als historisch gesichert – gegen 4:157.`,
    `**Ehrmans Methode schließt Wunder aus** – damit auch die Jungfrauengeburt, Jesu Wunder und die Offenbarung an Mohammed.`,
    `**Erkannte Änderungen beweisen intakte Überlieferung:** Man erkennt eine Änderung nur, weil andere Handschriften den älteren Text bewahren.`,
    `**Ehrmans Jesus ist nicht der Jesus des Korans:** Ein apokalyptischer Prophet, der am Kreuz starb – kein jungfräulich geborener Gesandter, der lebendig erhöht wurde.`,
  ],
  voices: [
    {
      person: 'wallace',
      role: 'als Textkritiker, der Ehrman mehrfach öffentlich gegenüberstand',
      text: `Wallace hat mit Ehrman öffentlich debattiert und ihn als ausgezeichneten Fachmann gewürdigt. Er zeigt jedoch, dass Ehrmans populäre Darstellung einen falschen Eindruck erzeugt: Die Leser glauben, der Text sei unsicher, obwohl Ehrman selbst einräumt, dass keine Kernlehre betroffen ist. Wallace nennt das eine Kluft zwischen dem, was Ehrman in Fachpublikationen zugesteht, und dem Eindruck, den seine Bestseller erwecken.`,
      sources: [
        { kind: 'fachliteratur', author: 'Daniel B. Wallace', work: 'The Gospel according to Bart: A Review Article of Misquoting Jesus, Journal of the Evangelical Theological Society 49', year: '2006', quote: `Kritische Würdigung von Misquoting Jesus: Fachliche Befunde ja, aber übertriebene Schlussfolgerungen.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'metzger',
      role: 'als Ehrmans Lehrer',
      text: `Metzger hat sein Leben der Textkritik gewidmet und blieb überzeugter Christ. Gerade die Kenntnis aller Varianten hat ihn nicht am Glauben irre werden lassen, sondern ihm gezeigt, wie gut der Text bezeugt ist. Ehrman beruft sich selbst darauf, dass seine Position der Metzgers über die wesentlichen Glaubensinhalte nicht widerspreche.`,
      sources: [
        { kind: 'fachliteratur', author: 'Bruce M. Metzger', work: 'The Text of the New Testament (frühere Auflagen ohne Ehrman)', year: '1964', quote: `Grundlegende Darstellung der Textkritik durch einen gläubigen Textforscher.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'james-white',
      role: 'als Apologet, der mit Ehrman debattierte',
      text: `White hat 2009 mit Ehrman über die Frage debattiert, ob die Bibel Jesus falsch zitiert. Er weist Muslime regelmäßig darauf hin, dass sie Ehrman nicht konsequent verwenden können: Ehrmans Skepsis trifft den Koran mindestens ebenso hart, denn derselbe Maßstab, an Fehlerlosigkeit und frühe Bezeugung angelegt, gilt auch für die Überlieferung des Korans und der Hadithe.`,
      sources: [
        { kind: 'fachliteratur', author: 'James R. White', work: 'Debatte mit Bart Ehrman „Did the Bible Misquote Jesus?"', year: '2009', quote: `Auseinandersetzung mit Ehrmans Thesen zur Textüberlieferung.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'pj-williams',
      role: 'als Neutestamentler',
      text: `Williams hat Ehrmans populäre Bücher detailliert besprochen und gezeigt, dass seine Beispiele oft eine Unsicherheit suggerieren, die der Befund nicht trägt. Er betont, dass Historiker die Evangelien nach denselben Maßstäben prüfen sollten wie andere antike Quellen – und dass sie dabei außerordentlich gut abschneiden.`,
      sources: [
        { kind: 'fachliteratur', author: 'Peter J. Williams', work: 'Can We Trust the Gospels?', year: '2018', quote: `Die Evangelien halten einer historischen Prüfung nach antiken Maßstäben stand.`, status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'ehrman-keine-kopien',
      objection: `Ehrman sagt, wir haben nicht einmal Kopien der Kopien der Originale. Wie kannst du dann behaupten, die Bibel sei zuverlässig?`,
      objectionBy: 'Shabir Ally',
      answer: `Er hat recht, dass wir keine Abschriften der ersten Generation besitzen – das gilt für jeden antiken Text, auch für den Koran. Aber derselbe Ehrman sagt, dass die wesentlichen Glaubensinhalte von den Varianten nicht berührt werden. Er bestreitet also nicht, dass wir wissen, was das Neue Testament lehrt.`,
      followUps: [
        {
          id: 'orthodoxe-verfaelschung',
          objection: `Ehrman zeigt in „The Orthodox Corruption of Scripture", dass Schreiber den Text bewusst geändert haben, um die Gottheit Jesu zu betonen.`,
          objectionBy: 'Shabir Ally',
          answer: `Ja, an einigen Stellen haben Schreiber verdeutlicht, was sie glaubten. Aber woher wissen wir das? Weil andere Handschriften den älteren Wortlaut bewahrt haben. Und die Schreiber verdeutlichten, was der Text ohnehin schon sagte: Joh 1,1 („das Wort war Gott") und Joh 20,28 („Mein Herr und mein Gott") haben keine solche Variante. Die Gottheit Jesu ist nicht das Produkt von Schreibern, sondern steht in unbestrittenen Texten.`,
          followUps: [
            {
              id: 'gottheit-durch-schreiber',
              objection: `Dann ist die Gottheit Jesu eben schon von den Evangelisten erfunden worden – Ehrman sagt ja, das sei eine Entwicklung.`,
              objectionBy: 'Shabir Ally',
              answer: `Das ist keine Frage der Textüberlieferung mehr, sondern der Geschichte – und auch da sagt Ehrman inzwischen, dass Christen Jesus sehr früh nach seinem Tod als göttlich verehrten (*How Jesus Became God*). Für dich als Muslim ist das ein Problem: Dann haben die frühesten Nachfolger Jesu genau das geglaubt, was der Islam ablehnt – siehe das zweite Dilemma (61:14).`,
              detail: `Siehe Claim „Die Jünger Jesu waren Muslime" und Claim „Die Gottheit Jesu wurde erst später erfunden" (Topic „Der historische Jesus").`,
              followUps: [
                {
                  id: 'erhoehungschristologie',
                  objection: `Ehrman sagt aber, die früheste Christologie war eine Erhöhungschristologie: Jesus wurde erst bei der Auferstehung zum Sohn Gottes *gemacht* (Röm 1,4; Apg 2,36). Er war also nicht von Anfang an Gott – das kommt dem Islam näher als eurer Trinität.`,
                  objectionBy: 'Paul Williams (Blogging Theology)',
                  answer: `Schau, was selbst diese „früheste" Christologie voraussetzt: Jesus wurde gekreuzigt, starb, wurde auferweckt und zur Rechten Gottes erhöht – drei Aussagen, die der Koran verneint. Selbst Ehrmans Minimalversion steht also weiter vom Islam entfernt als vom Christentum. Und Ehrman räumt in „How Jesus Became God" ein, dass schon Paulus – in den 50er-Jahren – Jesus als präexistentes himmlisches Wesen sah, das Mensch wurde (Phil 2,6–11).`,
                  detail: `Röm 1,3–4 spricht davon, dass Jesus „eingesetzt" wurde als Sohn Gottes „in Kraft" – gemeint ist die Offenbarung seiner Würde in der Auferstehung, nicht deren Beginn; derselbe Paulus spricht vom Sohn, den Gott „sandte" (Gal 4,4). Larry Hurtado und Richard Bauckham haben gezeigt, dass die Verehrung Jesu als göttlich keine allmähliche Entwicklung war, sondern ein frühes „Urknall"-Phänomen in jüdischen, streng monotheistischen Gemeinden: Gebet zu Jesus (1 Kor 16,22 *maranatha*), Taufe auf seinen Namen, und in 1 Kor 8,6 wird Jesus in das jüdische Bekenntnis des einen Gottes (Schema Israel) hineingenommen.`,
                  voices: [
                    {
                      person: 'hurtado',
                      role: 'als Erforscher der frühen Christusverehrung',
                      text: `Hurtado zeigt in „Lord Jesus Christ", dass Jesus schon in den ersten Jahren nach Ostern in einer Weise verehrt wurde, die im Judentum allein Gott vorbehalten war: Gebet, Anrufung, Hymnen, Taufe in seinem Namen. Diese „binitarische" Frömmigkeit entstand nicht unter heidnischem Einfluss Jahrzehnte später, sondern in jüdisch-christlichen Gemeinden – sie ist so alt wie die Kirche selbst.`,
                      sources: [
                        { kind: 'fachliteratur', author: 'Larry W. Hurtado', work: 'Lord Jesus Christ: Devotion to Jesus in Earliest Christianity', year: '2003', quote: `Die Verehrung Jesu als göttlich erscheint explosionsartig früh in jüdisch geprägten Gemeinden.`, status: 'paraphrase' },
                      ],
                    },
                    {
                      person: 'bauckham',
                      role: 'als Erforscher der frühen Christologie',
                      text: `Bauckham argumentiert, dass die neutestamentlichen Autoren Jesus in die „göttliche Identität" des einen Gottes Israels einbeziehen – etwa wenn Paulus in 1 Kor 8,6 das Schema Israel auf Vater und Herrn aufteilt. Das ist keine späte Vergöttlichung eines Propheten, sondern von Anfang an die höchste denkbare Christologie in jüdischen Begriffen.`,
                      sources: [
                        { kind: 'fachliteratur', author: 'Richard Bauckham', work: 'Jesus and the God of Israel', year: '2008', quote: `Die frühen Christen bezogen Jesus in die einzigartige göttliche Identität des Gottes Israels ein.`, status: 'paraphrase' },
                      ],
                    },
                  ],
                  sources: [
                    { kind: 'gegner', author: 'Bart D. Ehrman', work: 'How Jesus Became God', year: '2014', quote: `Schon Paulus versteht Christus als präexistentes, engelartiges Wesen, das Mensch wurde und dann erhöht wurde.`, status: 'paraphrase' },
                    { kind: 'bibel', work: '1. Korinther', ref: '8,6', quote: `So haben wir doch nur einen Gott, den Vater, von welchem alle Dinge sind und wir zu ihm; und einen Herrn, Jesus Christus, durch welchen alle Dinge sind und wir durch ihn.`, translation: 'Luther 1912', status: 'verbatim' },
                  ],
                  questionsBack: [
                    `Selbst nach Ehrmans frühester Christologie wurde Jesus gekreuzigt und auferweckt. Akzeptierst du das?`,
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'ehrman-ist-neutral',
      objection: `Ehrman ist neutral, kein Apologet. Deshalb ist er objektiver als christliche Gelehrte, die ihre Bibel verteidigen müssen.`,
      objectionBy: 'Mohammed Hijab',
      answer: `Ehrman hat eine Weltanschauung wie jeder: Er ist Agnostiker und geht davon aus, dass Historiker Wunder nicht feststellen können. Mit dieser Methode fallen auch die Jungfrauengeburt, Jesu Wunder und seine Erhöhung – alles Lehren des Korans – und erst recht die Offenbarung an Mohammed durch einen Engel. Du kannst Ehrmans Methode nicht nur auf die Bibel anwenden und beim Koran aussetzen.`,
      questionsBack: [
        `Akzeptierst du Ehrmans Ergebnis, dass Jesus gekreuzigt wurde? Und dass Historiker keine Jungfrauengeburt feststellen können?`,
      ],
      followUps: [
        {
          id: 'nur-textkritik-nicht-wunder',
          objection: `Ich benutze Ehrman nur für die Textkritik, nicht für seine Ansichten über Wunder.`,
          objectionBy: 'Shabir Ally',
          answer: `Dann nimm auch sein textkritisches Ergebnis ganz: Keine Kernlehre wird von den Varianten berührt, und die Handschriften vor Mohammed lehren die Kreuzigung. Genau das ist der Ausgangspunkt des Islamischen Dilemmas. Der Textkritiker Ehrman bestätigt Prämisse 4 – die Bibel des 7. Jahrhunderts ist im Wesentlichen unsere Bibel.`,
          followUps: [
            {
              id: 'ehrman-methode-auf-koran',
              objection: `Ehrmans Methode ist für die Bibel entwickelt. Auf den Koran lässt sie sich nicht übertragen – er wurde ganz anders überliefert, mündlich und massenhaft (*tawātur*).`,
              objectionBy: 'Mohammed Hijab',
              answer: `Historische Methoden sind nicht für ein bestimmtes Buch gemacht; man wendet sie auf jeden antiken Text an. Und Ehrmans Skepsis gegenüber mündlicher Überlieferung und späten Sammlungen träfe die Hadithe – rund 200 Jahre nach Mohammed gesammelt – viel härter als die Evangelien, die 30 bis 60 Jahre nach Jesus entstanden. Auch die Koransammlung selbst wird in den Hadithen beschrieben: Zaid ibn Thabit sammelte die Verse „von Palmblattstielen, Steinplatten und aus den Herzen der Männer" (Sahih al-Bukhari 4986). Wer Ehrman gegen die Bibel nutzt, muss sich denselben Fragen stellen.`,
              detail: `Das ist kein Angriff, sondern eine Bitte um gleiche Maßstäbe. Forscher wie Gabriel Said Reynolds, Nicolai Sinai oder Keith Small wenden historisch-kritische und textkritische Methoden längst auch auf den Koran an. Wer die Bibel mit dem schärfsten Skeptiker misst und den Koran mit der frömmsten Überlieferung, vergleicht nicht zwei Schriften, sondern zwei Maßstäbe.`,
              sources: [
                { kind: 'hadith', work: 'Sahih al-Bukhari', ref: '4986', quote: `Zaid ibn Thabit: Ich suchte den Koran zusammen und sammelte ihn von Palmblattstielen, dünnen Steinplatten und aus den Herzen der Männer.`, status: 'paraphrase', url: 'https://sunnah.com/bukhari:4986' },
              ],
              questionsBack: [
                `Würdest du Ehrmans Maßstäbe für mündliche Überlieferung auch auf die Hadithsammlungen anwenden?`,
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'ehrman-faelschungen',
      objection: `Ehrman zeigt in „Forged", dass viele Bücher des Neuen Testaments Fälschungen sind – die Pastoralbriefe, 2 Petrus, Epheser. Wie kann das Gottes Wort sein?`,
      objectionBy: 'verbreiteter Einwand',
      answer: `Die Verfasserschaft einiger Briefe wird in der Forschung diskutiert, und es gibt gute Argumente für die traditionelle Zuschreibung. Aber selbst wenn man nur die sieben Paulusbriefe nimmt, die auch Ehrman für echt hält: Sie enthalten Kreuzestod und Auferstehung (1 Kor 15), die Präexistenz und göttliche Würde Christi (Phil 2,6–11) und das Gebet zu Jesus (1 Kor 16,22). Das Christentum steht und fällt nicht mit den umstrittenen Briefen.`,
      followUps: [
        {
          id: 'koran-bestaetigt-injil-nicht-briefe',
          objection: `Der Koran bestätigt ohnehin nur das Injil, nicht die Briefe des Paulus.`,
          objectionBy: 'Ali Ataie',
          answer: `Einverstanden – dann bleiben wir bei den Evangelien. Alle vier berichten ausführlich von der Kreuzigung, dem Tod und der Auferstehung Jesu. Das ist das Injil, das die Christen zur Zeit Mohammeds lasen und auf das der Koran sie verpflichtete (5:47). Die Briefe brauche ich für das Dilemma gar nicht.`,
          followUps: [
            {
              id: 'evangelien-anonym',
              objection: `Aber Ehrman sagt auch: Die Evangelien sind anonym. Keiner nennt seinen Verfasser, die Namen wurden erst im 2. Jahrhundert hinzugefügt. Es waren keine Augenzeugen.`,
              objectionBy: 'Shabir Ally',
              answer: `Für das Dilemma ist die Verfasserfrage gar nicht entscheidend: Der Koran verlangt nicht, dass das Injil von Aposteln stammt – er sagt, die Christen hätten es *bei sich* und sollten danach richten (5:47; 7:157). Und die Zuschreibungen sind auffallend einheitlich: Kein Evangelium kursierte je unter einem anderen Namen, und alle erhaltenen Handschriften mit Überschrift nennen dieselben vier Namen. Echte anonyme Werke der Antike bekommen gewöhnlich wechselnde Zuschreibungen – die Evangelien nicht.`,
              detail: `Simon Gathercole hat gezeigt, dass die Evangelien im strengen Sinn nicht anonym sind: Die Verfasser waren den ersten Empfängern bekannt, und die Überschriften („Evangelium nach …") sind sehr früh und einheitlich bezeugt. Hinzu kommen Papias (frühes 2. Jh.) und Irenäus (um 180). Zudem: Warum hätte man ein Evangelium Markus und Lukas zuschreiben sollen – zwei Nicht-Apostel –, wenn man nachträglich Autorität erfinden wollte?`,
              voices: [
                {
                  person: 'simon-gathercole',
                  role: 'als Neutestamentler zur Verfasserschaft der Evangelien',
                  text: `Gathercole argumentiert, dass die Evangelien zwar ihre Verfasser nicht im Text nennen, aber deshalb nicht im modernen Sinn anonym sind. Die frühe, einheitliche Bezeugung der Titel und das Fehlen konkurrierender Zuschreibungen sprechen dafür, dass die Namen von Anfang an mit den Büchern verbunden waren.`,
                  sources: [
                    { kind: 'fachliteratur', author: 'Simon Gathercole', work: 'The Alleged Anonymity of the Canonical Gospels', ref: 'Journal of Theological Studies 69 (2018)', year: '2018', quote: `Die kanonischen Evangelien sind nicht im eigentlichen Sinn anonym; ihre Verfasser waren den ersten Lesern bekannt.`, status: 'paraphrase' },
                  ],
                },
              ],
              questionsBack: [
                `Warum hätte man, um Autorität zu erfinden, zwei Evangelien ausgerechnet Nicht-Aposteln wie Markus und Lukas zuschreiben sollen?`,
              ],
              followUps: [
                {
                  id: 'papias-unzuverlaessig',
                  objection: `Papias ist kein ernstzunehmender Zeuge. Ehrman weist darauf hin, dass er auch absurde Legenden erzählt – etwa über den grotesk aufgeschwollenen Judas. Auf so jemanden stützt ihr die Verfasserschaft?`,
                  objectionBy: 'Paul Williams (Blogging Theology)',
                  answer: `Papias gibt beides wieder: Legenden, die im Umlauf waren, und Auskünfte, die er ausdrücklich auf einen bestimmten Gewährsmann zurückführt – „den Presbyter", der sagte, Markus sei der Dolmetscher des Petrus gewesen. Ein Historiker wägt solche Angaben einzeln ab. Und die Angabe zu Markus steht nicht allein: Sie passt zur einheitlichen Überlieferung der Titel und zu Irenäus. Auch muslimische Gelehrte unterscheiden in der Hadithkritik zwischen schwachen und starken Berichten desselben Überlieferers.`,
                  detail: `Papias' Aussage ist bei Eusebius (Kirchengeschichte III,39,15) erhalten. Bauckham zeigt, dass Papias bewusst nach lebenden Zeugen fragte („was Andreas oder Petrus sagte …", III,39,4) – das ist die Haltung eines Sammlers, der Augenzeugen den Vorzug gibt. Wer ihn wegen einer Legende ganz verwirft, müsste mit demselben Maßstab auch viele frühe muslimische Überlieferer verwerfen, die neben glaubwürdigen Berichten auch Legenden weitergaben.`,
                  sources: [
                    { kind: 'kirchenvater', author: 'Eusebius von Caesarea (zitiert Papias)', work: 'Kirchengeschichte', ref: 'III,39,15', year: 'um 325', quote: `Der Presbyter sagte: Markus, der Dolmetscher des Petrus, schrieb genau auf, woran er sich erinnerte, was vom Herrn gesagt oder getan worden war.`, status: 'paraphrase' },
                    { kind: 'kirchenvater', author: 'Eusebius von Caesarea (zitiert Papias)', work: 'Kirchengeschichte', ref: 'III,39,4', year: 'um 325', quote: `Papias fragte, was Andreas oder Petrus, Philippus, Thomas, Jakobus, Johannes oder Matthäus gesagt hatten.`, status: 'paraphrase' },
                  ],
                  questionsBack: [
                    `Verwirfst du einen Hadith-Überlieferer vollständig, weil er an anderer Stelle eine schwache Überlieferung weitergab?`,
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'ehrman-jesus-wie-koran',
      objection: `Ehrmans Jesus ist ein Prophet, der sich nicht für Gott hielt – das ist doch genau der Jesus des Korans!`,
      objectionBy: 'Shabir Ally',
      answer: `Nein. Ehrmans Jesus ist ein apokalyptischer Prophet, der das baldige Weltende erwartete, am Kreuz starb und tot blieb. Der Jesus des Korans wurde von einer Jungfrau geboren, tat Wunder, wurde *nicht* gekreuzigt, sondern lebendig zu Gott erhöht und kommt wieder. Ehrman widerspricht dem Koran an mehr Stellen als dem Neuen Testament.`,
      questionsBack: [
        `Wenn du Ehrmans Jesus übernimmst: Glaubst du dann, dass Jesus am Kreuz gestorben ist?`,
      ],
      followUps: [
        {
          id: 'nur-gegen-gottheit',
          objection: `Mir genügt der eine Punkt: Ehrman zeigt, dass Jesus sich selbst nicht für Gott hielt. Seine übrigen Ansichten lehne ich ab.`,
          objectionBy: 'Shabir Ally',
          answer: `Dann benutzt du Ehrman selektiv: Wo er dem Christentum widerspricht, ist er Autorität, wo er dem Koran widerspricht, nicht. Das ist keine Methode. Und auch in den ältesten Evangelien beansprucht Jesus göttliche Vorrechte: Er vergibt Sünden, was „niemand als Gott allein" kann (Mk 2,5–10), und antwortet vor dem Hohen Rat mit Dan 7: Man werde den Menschensohn „sitzen sehen zur Rechten der Kraft und kommen mit des Himmels Wolken" (Mk 14,62) – worauf der Hohepriester „Gotteslästerung" ruft.`,
          detail: `Ehrmans Argument stützt sich vor allem darauf, dass die ausdrücklichsten Ich-Aussagen im Johannesevangelium stehen, das er spät datiert. Aber das Markusevangelium – nach Ehrman das älteste – zeigt Jesus als Herrn über den Sabbat (Mk 2,28), über Wind und Wellen (Mk 4,41, vgl. Ps 107,29) und als den, der auf dem Wasser geht (Mk 6,48–50, vgl. Hi 9,8). Ein jüdischer Hörer verstand diese Anspielungen: Hier handelt Jesus, wie nur Gott handelt.`,
          sources: [
            { kind: 'bibel', work: 'Markus', ref: '14,61–64', quote: `Bist du Christus, der Sohn des Hochgelobten? Jesus aber sprach: Ich bin's; und ihr werdet sehen des Menschen Sohn sitzen zur rechten Hand der Kraft und kommen mit des Himmels Wolken. Da zerriss der Hohepriester seinen Rock … Ihr habt gehört die Gotteslästerung.`, translation: 'Luther 1912', status: 'paraphrase' },
            { kind: 'bibel', work: 'Markus', ref: '2,7', quote: `Wer kann Sünden vergeben denn allein Gott?`, translation: 'Luther 1912', status: 'paraphrase' },
          ],
          questionsBack: [
            `Nach welchem Kriterium entscheidest du, wann Ehrman recht hat – außer danach, ob er dem Koran zustimmt?`,
          ],
        },
      ],
    },
    {
      id: 'nestle-aland-aendert-sich',
      objection: `Selbst eure Fachleute geben zu, dass der Text nicht feststeht: Der Nestle-Aland wird ständig überarbeitet, die neueste Auflage hat wieder Stellen geändert. Wie kann ein Buch Gottes Wort sein, dessen Text sich alle paar Jahre ändert?`,
      objectionBy: 'Mohammed Hijab',
      answer: `Die Änderungen sind winzig: Die 28. Auflage (2012) änderte den Haupttext an rund drei Dutzend Stellen in den Katholischen Briefen – meist Kleinigkeiten wie Wortstellung oder ein Artikel. Dass Forscher neue Daten einarbeiten und das offenlegen, ist ein Zeichen von Ehrlichkeit, nicht von Unsicherheit. Keine dieser Änderungen berührt eine Lehre. Ein Text, dessen Unsicherheiten man auf so wenige, offen benannte Stellen eingrenzen kann, ist außergewöhnlich gut bewahrt.`,
      detail: `Auch beim Koran arbeiten heute Forscher mit wissenschaftlichen Methoden an den frühen Handschriften (Corpus Coranicum in Berlin, Studien von Sadeghi, Déroche, Small, Brubaker). Dort zeigen sich ebenfalls Varianten in Orthografie, Wortformen und gelegentlich im Wortlaut. Der Unterschied liegt nicht darin, dass eine Schrift eine Überlieferungsgeschichte hat und die andere nicht, sondern darin, ob man diese Geschichte offen erforscht.`,
      questionsBack: [
        `Welche Lehre der Kirche hat sich durch eine Änderung im Nestle-Aland verändert?`,
      ],
      followUps: [
        {
          id: 'warum-nicht-wortwoertlich-bewahrt',
          objection: `Wenn Gott eure Bibel inspiriert hat – warum hat er sie dann nicht wortwörtlich bewahrt, wie den Koran? Ein Gott, der sein Wort nicht schützt, ist schwach.`,
          objectionBy: 'Paul Williams (Blogging Theology)',
          answer: `Christen verstehen Offenbarung anders als Muslime: Gottes höchste Offenbarung ist nicht ein Buch, sondern eine Person – das fleischgewordene Wort (Joh 1,14). Die Schrift ist das inspirierte Zeugnis von ihm. Gott hat dieses Zeugnis bewahrt, indem er es in Tausenden Abschriften über viele Länder verbreitete, sodass niemand es kontrollieren oder heimlich ändern konnte. Gerade diese Vielfalt macht den ursprünglichen Text überprüfbar. Ein einzelner, zentral kontrollierter Text – wie nach Uthmans Vereinheitlichung – wäre viel leichter zu verändern gewesen.`,
          detail: `Für die koptische Kirche wird die Schrift in der lebendigen Kirche gelesen – mit den Vätern, der Liturgie und den Konzilien. Die Bewahrung des Glaubens hängt nicht an einer einzelnen Handschrift, sondern an der ununterbrochenen Überlieferung, in der dieselben Evangelien seit dem hl. Markus in Alexandrien gelesen werden. Und Jesu Wort „Himmel und Erde werden vergehen; aber meine Worte werden nicht vergehen" (Mt 24,35) hat sich darin erfüllt, dass seine Lehre in einer Breite überliefert ist wie keine andere aus der Antike.`,
          voices: [
            {
              person: 'athanasius',
              role: 'als Theologe der Menschwerdung',
              text: `Für Athanasius ist das Wort Gottes zuerst der ewige Logos, der Mensch wurde, um den Menschen zu erneuern. Die Heiligen Schriften sind „Quellen des Heils", weil sie von ihm zeugen. In seinem 39. Osterfestbrief (367) zählt er als erster genau die 27 Bücher des Neuen Testaments auf – nicht als Erfindung, sondern als Bestätigung dessen, was die Kirchen längst lasen.`,
              sources: [
                { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: '39. Osterfestbrief', year: '367', quote: `Zählt die 27 Bücher des Neuen Testaments auf und nennt die Schriften „Quellen des Heils".`, status: 'paraphrase' },
              ],
            },
          ],
          sources: [
            { kind: 'bibel', work: 'Johannes', ref: '1,14', quote: `Und das Wort ward Fleisch und wohnte unter uns, und wir sahen seine Herrlichkeit, eine Herrlichkeit als des eingeborenen Sohnes vom Vater, voller Gnade und Wahrheit.`, translation: 'Luther 1912', status: 'verbatim' },
          ],
          questionsBack: [
            `Was lässt sich leichter heimlich verändern: ein zentral kontrollierter Einheitstext oder Tausende Abschriften in verschiedenen Ländern und Sprachen?`,
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wusstest du, dass Ehrman sagt, die wesentlichen christlichen Lehren seien von den Varianten nicht betroffen?`,
    `Akzeptierst du Ehrmans Urteil, dass Jesus gekreuzigt wurde?`,
    `Würdest du Ehrmans Methode auch auf den Koran und die Hadithe anwenden?`,
    `Was hält Ehrman von der Jungfrauengeburt?`,
  ],
  avoid: [
    `Ehrman nicht als „bösartig" oder „unwissend" hinstellen. Er ist ein fähiger Wissenschaftler; argumentiere mit seinen eigenen Zugeständnissen.`,
    `Nicht behaupten, Ehrman sei „Christ" oder sei es nie gewesen – er war Evangelikaler und ist heute Agnostiker.`,
  ],
  concessions: [
    `Ehrman hat recht, dass es theologisch motivierte Schreiberänderungen gab – sie sind gut dokumentiert.`,
    `Die Verfasserschaft einiger neutestamentlicher Briefe ist in der Forschung umstritten.`,
  ],
  furtherReading: [
    { kind: 'gegner', author: 'Bart D. Ehrman', work: 'Misquoting Jesus', year: '2005', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Daniel B. Wallace (Hg.)', work: 'Revisiting the Corruption of the New Testament', year: '2011', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Michael J. Kruger', work: 'The Question of Canon', year: '2013', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Ehrman', 'Textkritik', 'Islam', 'Bibel'],
  related: [
    'islam-bibelverfaelschung/bibel-textvarianten',
    'islam-dilemma/das-islamische-dilemma',
    'islam-dilemma/juenger-waren-muslime',
    'historischer-jesus/gottheit-jesu-spaet-erfunden',
  ],
};

export default claim;
