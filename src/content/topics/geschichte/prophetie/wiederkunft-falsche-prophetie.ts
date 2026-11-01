import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'wiederkunft-falsche-prophetie',
  title: `„Jesus kündigte seine Wiederkunft noch zu Lebzeiten der Jünger an (Mk 9,1; 13,30)."`,
  proponents: [
    { name: 'Bart D. Ehrman', role: 'Neutestamentler, UNC Chapel Hill', work: 'Jesus: Apocalyptic Prophet of the New Millennium (1999)' },
    { name: 'Albert Schweitzer', role: 'Theologe, Arzt (†1965)', work: 'Von Reimarus zu Wrede / Geschichte der Leben-Jesu-Forschung (1906/1913)' },
    { name: 'Dale C. Allison', role: 'Neutestamentler, Princeton Theological Seminary', work: 'Constructing Jesus (2010)' },
    { name: 'Bertrand Russell', role: 'Philosoph (†1970)', work: 'Why I Am Not a Christian (1927)' },
  ],
  steelman: `Jesus sagt: „Es stehen etliche hier, die werden den Tod nicht schmecken, bis daß sie sehen das Reich Gottes mit seiner Kraft kommen" (Mk 9,1), und nach der Ankündigung, der Menschensohn werde „in den Wolken mit großer Kraft und Herrlichkeit" kommen: „Dies Geschlecht wird nicht vergehen, bis daß dies alles geschehe" (Mk 13,26.30). Dazu Mt 10,23: Die Jünger würden mit den Städten Israels nicht fertig, bis der Menschensohn kommt. Paulus erwartet, die Wiederkunft zu erleben („wir, die wir leben", 1 Thess 4,15). Albert Schweitzer schloss daraus, Jesus sei ein apokalyptischer Prophet gewesen, der sich im Zeitpunkt irrte. Selbst C. S. Lewis nannte Mk 13,30 „den peinlichsten Vers der Bibel". Ein Gott, der sich im Datum seiner Wiederkunft irrt, ist kein Gott.`,
  biblical: {
    summary: `Beide Verse stehen in einem Kontext, der ihren Sinn bestimmt. **Mk 9,1** folgt unmittelbar die Verklärung: „Und nach sechs Tagen nahm Jesus zu sich Petrus, Jakobus und Johannes" (Mk 9,2) – alle drei Synoptiker verbinden beides. 2 Petr 1,16–18 nennt die Verklärung ausdrücklich die „Kraft und Ankunft" (*dynamis kai parousia*) Christi. **Mk 13** antwortet auf die Frage der Jünger, wann der Tempel zerstört wird (13,1–4). „Dies alles" (13,30) bezieht sich auf die angekündigten Zeichen bis zur Zerstörung – sie trat 70 n. Chr. ein, innerhalb einer Generation. Unmittelbar danach unterscheidet Jesus: „Von dem Tage aber und der Stunde weiß niemand … auch der Sohn nicht" (13,32).`,
    detail: `**Signale der Verzögerung bei Jesus selbst:** Das Evangelium muss zuvor allen Völkern verkündigt werden (Mk 13,10); Jerusalem wird „zertreten von den Heiden, bis daß der Heiden Zeit erfüllt wird" (Lk 21,24); Gleichnisse vom Herrn, der „lange ausbleibt" (Mt 24,48), vom Bräutigam, der „verzog" (Mt 25,5), vom Herrn, der „über eine lange Zeit" zurückkehrt (Mt 25,19).

**Prophetische Bildsprache:** Sonne, Mond und Sterne, die sich verfinstern und fallen (Mk 13,24–25), sind alttestamentliche Gerichtssprache für den Sturz politischer Mächte – Jes 13,10 über Babylon, Jes 34,4 über Edom. Der „Menschensohn, der mit den Wolken kommt" (Dan 7,13), kommt dort zum Hochbetagten, um die Herrschaft zu empfangen – ein Bild der Rechtfertigung und Inthronisation.`,
    sources: [
      { kind: 'bibel', work: 'Markus', ref: '9,1', quote: `Und er sprach zu ihnen: Wahrlich ich sage euch: Es stehen etliche hier, die werden den Tod nicht schmecken, bis daß sie sehen das Reich Gottes mit seiner Kraft kommen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Markus', ref: '13,30', quote: `Wahrlich ich sage euch: Dies Geschlecht wird nicht vergehen, bis daß dies alles geschehe.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Markus', ref: '13,32', quote: `Von dem Tage aber und der Stunde weiß niemand, auch die Engel nicht im Himmel, auch der Sohn nicht, sondern allein der Vater.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '2. Petrus', ref: '1,16', quote: `Denn wir sind nicht den klugen Fabeln gefolgt, da wir euch kundgetan haben die Kraft und Zukunft unsers HERRN Jesu Christi; sondern wir haben seine Herrlichkeit selber gesehen,`, translation: 'Luther 1912', status: 'verbatim', note: '„Kraft und Zukunft" = griech. dynamis kai parousia; der Kontext (1,17–18) ist die Verklärung.' },
      { kind: 'bibel', work: 'Lukas', ref: '21,24', quote: `Und sie werden fallen durch des Schwertes Schärfe und gefangen geführt unter alle Völker; und Jerusalem wird zertreten werden von den Heiden, bis daß der Heiden Zeit erfüllt wird.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die Kirche bekennt im Glaubensbekenntnis: „Er wird wiederkommen in Herrlichkeit, zu richten die Lebenden und die Toten." Den Zeitpunkt kennt niemand (Apg 1,7). Die Väter lasen Mk 9,1 überwiegend auf die Verklärung (Johannes Chrysostomus), teils auch auf Auferstehung und Pfingsten. Zu Mk 13,32 lehren Athanasius und Kyrill von Alexandrien, dass der eine Christus dies „nach seiner Menschheit" sagt: Der menschgewordene Logos nimmt die Begrenztheit der menschlichen Natur in der Heilsordnung (*oikonomia*) wirklich an – ohne Trennung der Naturen, aber ohne dass seine Lehre dadurch irrig würde.`,
    sources: [
      { kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Homilien zum Matthäusevangelium', ref: '56', year: 'ca. 390', quote: `Die Verheißung, einige würden den Tod nicht schmecken, bis sie den Menschensohn in seinem Reich kommen sehen, bezieht sich auf die Verklärung auf dem Berg.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Reden gegen die Arianer', ref: 'III,42–46', year: 'ca. 340', quote: `Das Nichtwissen der Stunde spricht der Herr gemäß seiner Menschheit aus, weil es dem Fleisch eigen ist, nicht zu wissen.`, status: 'paraphrase' },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '1,7', quote: `Es gebührt euch nicht, zu wissen Zeit oder Stunde, welche der Vater seiner Macht vorbehalten hat;`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  opposingView: {
    summary: `Seit Johannes Weiß und Albert Schweitzer ist das Bild Jesu als apokalyptischer Prophet mit Naherwartung in der kritischen Forschung weit verbreitet (Ehrman, Allison, Sanders). Auch der christliche Neutestamentler Dale Allison hält es für wahrscheinlich, dass Jesus ein baldiges Ende erwartete. Andere Forscher (N. T. Wright, R. T. France) lesen Mk 13 im Kern als Ankündigung der Tempelzerstörung und die Menschensohn-Worte als Rechtfertigung im Sinne von Dan 7. Die Frage ist in der Forschung offen und wird kontrovers diskutiert.`,
    sources: [
      { kind: 'gegner', author: 'Albert Schweitzer', work: 'Geschichte der Leben-Jesu-Forschung', year: '1913 (zuerst 1906)', quote: `Jesus habe das unmittelbar bevorstehende Ende erwartet; Mt 10,23 sei als unerfüllte Weissagung ein Schlüssel zu seinem Selbstverständnis.`, status: 'paraphrase' },
      { kind: 'gegner', author: 'Bart D. Ehrman', work: 'Jesus: Apocalyptic Prophet of the New Millennium', year: '1999', quote: `Jesus erwartete, dass das Reich Gottes noch zu Lebzeiten seiner Jünger mit Macht anbricht.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Dale C. Allison', work: 'Constructing Jesus. Memory, Imagination, and History', year: '2010', quote: `Die Erinnerung an Jesus ist durchgehend apokalyptisch geprägt; eine Naherwartung ist wahrscheinlich.`, status: 'paraphrase', note: 'Allison ist bekennender Christ (Episkopalkirche) – ehrlich nennen.' },
    ],
  },
  quickAnswer: `Lies die Verse im Zusammenhang: Unmittelbar nach Mk 9,1 folgt die Verklärung – drei Jünger sehen Jesus in der Kraft seines Reiches, und der 2. Petrusbrief nennt genau das seine „Kraft und Ankunft". Mk 13 beginnt mit der Frage, wann der Tempel zerstört wird; „dies alles" trat im Jahr 70 ein – innerhalb einer Generation. Und zwei Verse weiter sagt Jesus ausdrücklich, dass niemand Tag und Stunde seiner Wiederkunft kennt. Er hat also kein Datum genannt, sondern es ausdrücklich offengelassen.`,
  keyPoints: [
    `**Mk 9,1 → Verklärung:** Alle drei Synoptiker lassen die Verklärung direkt folgen; 2 Petr 1,16–18 nennt sie „Kraft und Ankunft".`,
    `**Mk 13 beginnt mit der Tempelfrage** (13,1–4); „dies alles" (13,30) erfüllte sich 70 n. Chr.`,
    `**„Dies alles" vs. „jener Tag":** Jesus unterscheidet sprachlich und sachlich (13,30 und 13,32); den Tag kennt niemand.`,
    `**Jesus kündigt selbst eine Zwischenzeit an:** Evangelium für alle Völker (Mk 13,10), „Zeit der Heiden" (Lk 21,24), Gleichnisse vom ausbleibenden Herrn.`,
    `**Bildsprache:** Fallende Sterne sind prophetische Gerichtssprache (Jes 13,10 über Babylon).`,
    `**Ehrlich:** Auch gläubige Forscher (Allison) sehen eine Naherwartung; C. S. Lewis nannte Mk 13,30 „peinlich". Die Frage ist ernst – aber nicht unbeantwortet.`,
  ],
  voices: [
    {
      person: 'chrysostomus',
      role: 'als Ausleger der Evangelien',
      text: `Chrysostomus beginnt seine 56. Matthäushomilie genau mit diesem Vers und erklärt: Der Herr meinte die Verklärung, die wenige Tage später folgte. Er wollte den Jüngern, die eben vom Kreuz und von der Selbstverleugnung gehört hatten, einen Vorgeschmack seiner Herrlichkeit geben, damit sie nicht verzagen. Dass nur „etliche" es sehen sollten, passt genau: Nur Petrus, Jakobus und Johannes durften auf den Berg.`,
      sources: [
        { kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Homilien zum Matthäusevangelium', ref: '56', year: 'ca. 390', quote: `Mt 16,28 bezieht sich auf die Verklärung.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'nt-wright',
      role: 'als Historiker des Judentums zur Zeit Jesu',
      text: `Wright liest die Endzeitrede (Mk 13 par.) als Ankündigung des Gerichts über Jerusalem und den Tempel in der Sprache der Propheten. Die kosmischen Bilder bedeuten nicht das physische Ende des Universums, sondern die Erschütterung politischer Ordnungen – so, wie Jesaja den Fall Babylons beschrieb. Der „Menschensohn, der mit den Wolken kommt", ist nach Dan 7 der, der zu Gott erhöht und gerechtfertigt wird. Diese Rechtfertigung wurde in der Auferstehung und sichtbar in der Zerstörung des Tempels, den Jesus angekündigt hatte, offenbar. Damit hat Jesus sich nicht geirrt, sondern ist bestätigt worden.`,
      sources: [
        { kind: 'fachliteratur', author: 'N. T. Wright', work: 'Jesus and the Victory of God', year: '1996', quote: `Mk 13 als prophetische Ankündigung der Tempelzerstörung; das Kommen des Menschensohns als Rechtfertigung im Sinne von Dan 7.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'bauckham',
      role: 'als Kommentator des 2. Petrusbriefes',
      text: `Bauckham hat gezeigt, dass sich die frühe Kirche mit der „Verzögerung der Parusie" ausdrücklich auseinandergesetzt hat – nicht als Krise, die alles erschütterte, sondern im Rahmen jüdischer Denkmuster: Gottes Zeit ist nicht unsere Zeit, und sein Zögern ist Geduld, die Raum zur Umkehr schafft (2 Petr 3,8–9; vgl. Hab 2,3). Diese Spannung zwischen Nähe und Verzögerung findet sich schon in der jüdischen Apokalyptik. Das Neue Testament hält beides fest: Wachsamkeit, als könne der Herr heute kommen, und Gelassenheit, weil niemand das Datum kennt.`,
      sources: [
        { kind: 'fachliteratur', author: 'Richard Bauckham', work: 'Jude, 2 Peter (Word Biblical Commentary 50)', year: '1983', quote: `Die Verzögerung der Parusie wird im 2. Petrusbrief mit jüdischen Motiven der Geduld Gottes beantwortet.`, status: 'paraphrase' },
        { kind: 'bibel', work: '2. Petrus', ref: '3,8–9', quote: `Eins aber sei euch unverhalten, ihr Lieben, daß ein Tag vor dem HERRN ist wie tausend Jahre, und tausend Jahre wie ein Tag. Der HERR verzieht nicht die Verheißung, wie es etliche für einen Verzug achten; sondern er hat Geduld mit uns und will nicht, daß jemand verloren werde, sondern daß sich jedermann zur Buße kehre.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
    },
    {
      person: 'athanasius',
      role: 'als Lehrer der Christologie',
      text: `Athanasius behandelt Mk 13,32 ausführlich gegen die Arianer, die daraus folgerten, der Sohn sei geringer als der Vater. Seine Antwort: Der ewige Logos weiß alles; als Mensch geworden aber spricht er, was der menschlichen Natur eigen ist. Er hungert, ermüdet, weint und „weiß nicht" nach seiner Menschheit – und zeigt gerade so, dass er wirklich Mensch geworden ist. Für die koptische Christologie (eine fleischgewordene Natur des Gott-Logos, ohne Vermischung und ohne Trennung) bedeutet das: Der eine Christus nimmt menschliche Begrenzung wirklich an, aber er lehrt keinen Irrtum.`,
      sources: [
        { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Reden gegen die Arianer', ref: 'III,42–46', year: 'ca. 340', quote: `Nichtwissen ist dem Fleisch eigen; der Logos nimmt es in der Menschwerdung an.`, status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'mk-9-1-alle-tot',
      objection: `„Etliche, die hier stehen, werden den Tod nicht schmecken, bis sie das Reich Gottes in Kraft kommen sehen." Sie sind alle gestorben, und das Reich kam nicht. Klarer kann man sich nicht irren.`,
      objectionBy: 'Bart Ehrman',
      answer: `Lies den nächsten Vers: „Und nach sechs Tagen nahm Jesus Petrus, Jakobus und Johannes mit auf einen hohen Berg" – die Verklärung. Alle drei Synoptiker stellen beides direkt hintereinander. Und der 2. Petrusbrief nennt genau die Verklärung die „Kraft und Ankunft" Christi – dieselben Begriffe wie in Mk 9,1. So haben es auch die Kirchenväter gelesen, etwa Johannes Chrysostomus.`,
      followUps: [
        {
          id: 'sechs-tage-absurd',
          objection: `Das ist absurd: Warum sollte Jesus feierlich ankündigen, dass „etliche" nicht sterben werden, bevor etwas in sechs Tagen passiert?`,
          objectionBy: 'Bart Ehrman',
          answer: `Weil der Kontext vom Sterben spricht: Unmittelbar vorher ruft Jesus dazu auf, das Kreuz auf sich zu nehmen und das Leben zu verlieren (Mk 8,34–38). Den Jüngern, die vom Martyrium hören, verspricht er, dass einige – tatsächlich nur drei – vorher einen Blick auf die Herrlichkeit seines Reiches werfen dürfen. Viele Ausleger beziehen den Vers zudem auf Auferstehung und Pfingsten, wo das Reich „mit Kraft" (Apg 1,8) kommt – beides noch zu Lebzeiten der Jünger.`,
          followUps: [
            {
              id: 'zweiter-petrus-faelschung',
              objection: `Der 2. Petrusbrief ist eine Fälschung aus dem 2. Jahrhundert. Er zeigt nur, wie spätere Christen das Problem wegerklären mussten.`,
              objectionBy: 'Bart Ehrman',
              answer: `Die Verfasserfrage ist umstritten; Richard Bauckham etwa sieht im Brief ein Testament in der Tradition des Petrus aus dem späten 1. Jahrhundert. Aber selbst wenn der Brief später wäre: Er zeigt, wie frühe Christen Mk 9,1 verstanden – auf die Verklärung bezogen –, und die Synoptiker selbst stellen diese Verbindung her. Das Problem, das 2 Petr 3 beantwortet, ist nicht Mk 9,1, sondern Spötter, die überhaupt bezweifeln, dass Christus wiederkommt.`,
            },
          ],
        },
      ],
    },
    {
      id: 'mk-13-30-generation',
      objection: `Mk 13 kündigt an, der Menschensohn komme in den Wolken mit großer Kraft – und dann: „Dies Geschlecht wird nicht vergehen, bis dies alles geschieht." Das ist eindeutig.`,
      objectionBy: 'Albert Schweitzer',
      answer: `Die Rede beginnt mit einer konkreten Frage: Wann wird der Tempel zerstört, von dem kein Stein auf dem anderen bleiben soll (13,1–4)? „Dies alles" meint die Zeichen bis zu dieser Zerstörung – sie geschah im Jahr 70, innerhalb einer Generation. Zwei Verse später sagt Jesus dann: „Von dem Tage aber und der Stunde weiß niemand … auch der Sohn nicht." Er unterscheidet also ausdrücklich zwischen „dies alles" und „jenem Tag".`,
      followUps: [
        {
          id: 'kosmische-sprache',
          objection: `Sonne verfinstert, Sterne fallen vom Himmel – das ist das Ende der Welt, kein Krieg in Judäa. Wright vergeistigt einfach den Text.`,
          objectionBy: 'Bart Ehrman',
          answer: `Jesaja beschreibt den Fall Babylons mit denselben Bildern: Die Sterne geben keinen Schein, die Sonne geht finster auf (Jes 13,10). Niemand meint, dass 539 v. Chr. Sterne vom Himmel fielen – das ist die übliche Gerichtssprache der Propheten, die jeder jüdische Hörer kannte. Und selbst wer 13,24–27 auf die Wiederkunft bezieht, wie viele Väter es tun, kann „dies alles" in 13,30 auf die vorausgehenden Zeichen beziehen.`,
          followUps: [
            {
              id: 'unfalsifizierbar-wahl',
              objection: `Du suchst dir aus: Was eingetroffen ist, war symbolisch, was nicht eingetroffen ist, liegt in der Zukunft. Das ist unfalsifizierbar.`,
              objectionBy: 'Dan McClellan',
              answer: `Die Unterscheidung stammt nicht von mir, sondern aus dem Text: „dies alles" (tauta) gegenüber „jenem Tag" (ekeinē hē hēmera) – mit der ausdrücklichen Aussage, dass niemand den Tag kennt. Und die Tempelprophetie war sehr wohl falsifizierbar: Hätte der Tempel bis heute gestanden, wäre Jesus widerlegt. Er fiel im Jahr 70.`,
              followUps: [
                {
                  id: 'markus-nach-70',
                  objection: `Markus wurde um oder nach 70 geschrieben. Die Tempelprophetie ist nachträglich formuliert.`,
                  objectionBy: 'Bart Ehrman',
                  answer: `Viele datieren Markus in die späten 60er-Jahre, also vor das Ende des Krieges. Aber beachte: Du kannst nicht beides haben. Wenn Markus die Tempelprophetie im Nachhinein formuliert hat, ist sie eingetroffen und kein Fehlschlag. Und wenn er nach 70 schrieb, hätte er wohl kaum einen Vers stehen lassen, der nach deiner Lesart schon offenkundig gescheitert war.`,
                  questionsBack: [`Ist Mk 13 für dich nun eine gescheiterte Vorhersage oder eine nachträglich formulierte eingetroffene – beides zugleich geht nicht?`],
                },
              ],
            },
          ],
        },
        {
          id: 'mt-10-23',
          objection: `Und Mt 10,23? „Ihr werdet mit den Städten Israels nicht zu Ende kommen, bis der Menschensohn kommt." Das ist Schweitzers Schlüsselvers.`,
          objectionBy: 'Albert Schweitzer',
          answer: `Das ist ein schwieriger Vers, das gebe ich zu. Zwei ernsthafte Deutungen: Entweder meint „kommen" wie in Dan 7 das Kommen des Menschensohnes zur Rechtfertigung und zum Gericht, sichtbar im Jahr 70. Oder Jesus sagt, dass die Mission an Israel nie abgeschlossen sein wird, bevor er wiederkommt – die Jünger sollen also nicht meinen, sie müssten erst alle Städte erreichen. Beide Lesarten passen zum Kontext der Verfolgung (10,16–23).`,
        },
      ],
    },
    {
      id: 'lewis-peinlichster-vers',
      objection: `Selbst euer C. S. Lewis nannte Mk 13,30 „den peinlichsten Vers der Bibel" und gab zu, dass Jesus sich geirrt hat.`,
      objectionBy: 'Bart Ehrman',
      answer: `Lewis hat das tatsächlich geschrieben, und ich verschweige es nicht. Seine eigene Lösung – Jesus habe als Mensch auch geirrt – teilt die orthodoxe Kirche nicht: Christus lehrt keinen Irrtum. Aber Lewis macht eine wichtige Beobachtung: Im selben Abschnitt steht das ausdrückliche Bekenntnis des Nichtwissens (13,32). Die Evangelisten haben beide Verse bewahrt – niemand erfindet Jahrzehnte später einen Vers, der den eigenen Herrn bloßstellt.`,
      sources: [
        { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'The World\'s Last Night (in: The World\'s Last Night and Other Essays)', year: '1960', quote: `Es ist gewiss der peinlichste Vers der Bibel.`, original: `It is certainly the most embarrassing verse in the Bible.`, translation: 'eigene Übersetzung', status: 'verbatim', note: 'Lewis nahm den Einwand ernst; seine kenotische Lösung (Irrtum der menschlichen Natur) ist nicht die orthodoxe Position.' },
      ],
      followUps: [
        {
          id: 'nichtwissen-kein-gott',
          objection: `Wenn Jesus Tag und Stunde nicht kannte, war er nicht allwissend – also nicht Gott.`,
          objectionBy: 'Bart Ehrman',
          answer: `Athanasius und Kyrill haben genau diese Frage beantwortet: Der eine Christus sagt das nach seiner Menschheit. Wie er nach seiner Menschheit hungert, müde wird und stirbt, so nimmt er auch die Begrenztheit menschlichen Wissens in der Heilsordnung an. Das zeigt nicht, dass er nicht Gott ist, sondern dass er wirklich Mensch geworden ist (Phil 2,7). Wer das Nichtwissen als Argument gegen seine Gottheit nimmt, muss auch sein Sterben so deuten – genau das ist der Kern des Glaubens: Gott ist Mensch geworden.`,
        },
      ],
    },
    {
      id: 'paulus-naherwartung',
      objection: `Paulus schreibt: „Wir, die wir leben und übrig bleiben bis zur Ankunft des Herrn" (1 Thess 4,15). Er erwartete, die Wiederkunft zu erleben – wie alle ersten Christen.`,
      objectionBy: 'Bart Ehrman',
      answer: `Paulus spricht von der Gruppe derer, die bei der Wiederkunft noch leben, und zählt sich der Möglichkeit nach dazu; im selben Brief betont er, dass der Tag „wie ein Dieb in der Nacht" kommt (1 Thess 5,2). Später rechnet er mit seinem Tod (Phil 1,21–23) und warnt die Thessalonicher ausdrücklich davor zu meinen, der Tag sei schon da (2 Thess 2,1–3). Wachsame Erwartung ist nicht dasselbe wie ein Datum.`,
      followUps: [
        {
          id: 'allison-christ',
          objection: `Selbst der christliche Forscher Dale Allison sagt, Jesus habe ein baldiges Ende erwartet. Das ist keine atheistische Erfindung.`,
          objectionBy: 'Dale Allison',
          answer: `Das ist richtig, und Allisons Ehrlichkeit verdient Respekt. Aber es ist eine Position unter mehreren; andere Forscher wie N. T. Wright und R. T. France lesen dieselben Texte anders. Und Jesu eigene Worte kündigen eine Zwischenzeit an: Das Evangelium muss zuerst allen Völkern verkündigt werden (Mk 13,10), Jerusalem bleibt „zertreten, bis der Heiden Zeit erfüllt wird" (Lk 21,24). Wer nur eine Woche bis zum Weltende erwartet, entwirft kein Programm für alle Völker.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Was geschieht im Markusevangelium unmittelbar nach Mk 9,1?`,
    `Worauf antwortet Jesus in Mk 13 – welche Frage haben die Jünger gestellt?`,
    `Wie passt deine Lesart zu Mk 13,32, wo Jesus sagt, dass niemand den Tag kennt?`,
    `Warum hätten die Evangelisten Verse bewahren sollen, die sie für gescheitert hielten?`,
    `Wie verstehst du Jes 13,10 – fielen beim Untergang Babylons die Sterne vom Himmel?`,
  ],
  avoid: [
    `„Geschlecht" (genea) zwingend als „Rasse/Volk Israel" übersetzen – das ist möglich, aber sprachlich umstritten und wirkt im Gespräch wie eine Ausflucht.`,
    `Behaupten, Jesus habe die Wiederkunft im Jahr 70 bereits vollzogen (Vollpräterismus) – das widerspricht dem Glaubensbekenntnis.`,
    `C. S. Lewis' Zitat verschweigen oder verdrehen – wer es kennt, wirft dir sonst Unehrlichkeit vor.`,
  ],
  concessions: [
    `Viele kritische und auch einige christliche Forscher (Allison) sehen bei Jesus eine Naherwartung.`,
    `Mt 10,23 ist ein schwieriger Vers mit mehreren ernsthaften Deutungen.`,
    `C. S. Lewis nannte Mk 13,30 den „peinlichsten Vers der Bibel".`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'N. T. Wright', work: 'Jesus and the Victory of God', year: '1996', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'R. T. France', work: 'The Gospel of Mark (NIGTC)', year: '2002', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'The World\'s Last Night and Other Essays', year: '1960', status: 'paraphrase' },
    { kind: 'gegner', author: 'Dale C. Allison', work: 'Constructing Jesus', year: '2010', status: 'paraphrase' },
  ],
  difficulty: 3,
  tags: ['Wiederkunft', 'Parusie', 'Naherwartung', 'Markus 13', 'Verklärung'],
  related: ['historischer-jesus/jesus-nur-apokalyptiker', 'prophetie/daniel-spaetdatierung', 'historischer-jesus/gottheit-jesu-spaet-erfunden'],
};

export default claim;
