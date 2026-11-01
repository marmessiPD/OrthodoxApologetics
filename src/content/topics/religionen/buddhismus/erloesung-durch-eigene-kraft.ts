import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'erloesung-durch-eigene-kraft',
  title: `„Leid entsteht durch Begehren – Befreiung geschieht aus eigener Kraft."`,
  proponents: [
    { name: 'Siddhartha Gautama, der Buddha', role: 'Begründer des Buddhismus', work: 'Die Vier Edlen Wahrheiten (Samyutta-Nikaya 56,11); Dhammapada' },
    { name: 'Walpola Rahula', role: 'Sri-lankischer Mönch und Gelehrter (1907–1997)', work: 'What the Buddha Taught (1959)' },
    { name: 'Thich Nhat Hanh', role: 'Vietnamesischer Zen-Mönch, Begründer von Plum Village (1926–2022)', work: 'Living Buddha, Living Christ (1995)' },
    { name: 'Sam Harris', role: 'Neurowissenschaftler und Autor', work: 'Waking Up (2014)' },
  ],
  steelman: `Der Buddha hat die Ursache des Leidens mit klinischer Präzision bestimmt: Begehren (*tanha*) – das Festhalten am Angenehmen, das Wegstoßen des Unangenehmen, der Durst nach Werden. Hört das Begehren auf, hört das Leid auf. Der Weg dorthin ist der Edle Achtfache Pfad. Dazu braucht es keinen Retter, keinen Gott, keine Gnade. „Ihr selbst müsst euch mühen; die Vollendeten zeigen nur den Weg" (Dhammapada 276). „Niemand kann einen anderen reinigen" (Dhammapada 165). Das ist erwachsene Spiritualität: Du übernimmst Verantwortung, statt auf Vergebung von oben zu hoffen. Das Christentum dagegen redet dem Menschen erst ein, er sei ein hilfloser Sünder, um ihm dann einen Retter zu verkaufen – das hält ihn unmündig.`,
  biblical: {
    summary: `Die Bibel kennt die zerstörerische Macht ungeordneten Begehrens („die Begierde, wenn sie empfangen hat, gebiert sie die Sünde", Jak 1,15; vgl. 1 Joh 2,16). Aber sie verurteilt nicht das Begehren an sich, sondern seine falsche Richtung: Der Mensch soll nach Gott dürsten (Ps 42,2) und nach Gerechtigkeit hungern (Mt 5,6). Sie nimmt zudem ehrlich wahr, dass der Wille des Menschen das erkannte Gute oft nicht vollbringen kann (Röm 7,18–24). Ihre Antwort ist weder Selbsterlösung noch Passivität, sondern **Synergie**: „Schaffet, dass ihr selig werdet … denn Gott ist's, der in euch wirkt beides, das Wollen und das Vollbringen" (Phil 2,12–13).`,
    sources: [
      { kind: 'bibel', work: 'Jakobus', ref: '1,14–15', quote: `Sondern ein jeglicher wird versucht, wenn er von seiner eigenen Lust gereizt und gelockt wird. Danach, wenn die Lust empfangen hat, gebiert sie die Sünde; die Sünde aber, wenn sie vollendet ist, gebiert sie den Tod.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Römer', ref: '7,19', quote: `Denn das Gute, das ich will, das tue ich nicht; sondern das Böse, das ich nicht will, das tue ich.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Philipper', ref: '2,12–13', quote: `Schaffet, daß ihr selig werdet, mit Furcht und Zittern. Denn Gott ist's, der in euch wirket beides, das Wollen und das Vollbringen, nach seinem Wohlgefallen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '15,5', quote: `Ich bin der Weinstock, ihr seid die Reben. Wer in mir bleibt und ich in ihm, der bringt viel Frucht; denn ohne mich könnt ihr nichts tun.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche lehrt die Synergie von Gnade und freiem Willen: Gott wirkt zuerst und entscheidend, der Mensch antwortet mit Glauben, Umkehr, Gebet, Fasten und Werken der Liebe. Die Wüstenväter haben jahrzehntelang mit größtem eigenem Einsatz gegen die Leidenschaften gekämpft – und dennoch jeden Sieg der Gnade zugeschrieben. Athanasius schreibt über den ersten Sieg des hl. Antonius: Es war eigentlich der Sieg des Erlösers in Antonius. Johannes Cassian überliefert die ägyptische Lehre, dass Gnade und Wille zusammenwirken, ohne dass einer den anderen aufhebt.`,
    sources: [
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Vita Antonii', ref: '5; 7', year: 'ca. 357', quote: `Dies war der erste Kampf des Antonius gegen den Teufel – oder vielmehr der Erfolg des Erlösers in Antonius.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Johannes Cassian', work: 'Unterredungen mit den Vätern (Collationes)', ref: 'XIII', year: 'ca. 426', quote: `Gottes Gnade und der freie Wille des Menschen wirken zusammen; bald kommt die Gnade dem Willen zuvor, bald begleitet und vollendet sie sein Bemühen.`, status: 'paraphrase', note: 'Cassians Gnadenlehre wurde im lateinischen Westen kritisiert, entspricht aber der östlichen Synergie-Tradition.' },
      { kind: 'koptisch', author: 'Papst Schenuda III.', work: 'Das Heil im orthodoxen Verständnis', status: 'paraphrase', quote: `Das Heil ist Gabe der Gnade, die den freien Willen nicht aufhebt, sondern zur Mitwirkung beruft.` },
    ],
  },
  opposingView: {
    summary: `Die Lehre der Selbstbefreiung hat im frühen Buddhismus starke Belege (Dhammapada 160; 165; 276; Mahaparinibbana-Sutta). Doch der Buddhismus ist hier selbst vielstimmig. Jeder Buddhist nimmt „Zuflucht" zu Buddha, Dhamma und Sangha. Im Mahayana geloben Bodhisattvas, alle Wesen zu retten, und übertragen ihr Verdienst auf andere. Vor allem der **Reine-Land-Buddhismus** – in Japan als Jodo-Shinshu die größte buddhistische Richtung – gründet ganz auf der „Anderen Kraft" (*tariki*): dem Gelübde des Buddha Amida, alle zu retten, die ihm vertrauen. Shinran (1173–1263) kam nach langer, vergeblicher Selbstanstrengung als Mönch zu dem Schluss, dass „eigene Kraft" (*jiriki*) nicht befreien kann.`,
    detail: `Der evangelische Theologe Karl Barth nannte den Jodo-Shinshu-Buddhismus in seiner *Kirchlichen Dogmatik* (I/2, § 17) die umfassendste und einleuchtendste „heidnische Parallele" zum reformatorischen Gnadenglauben – und sah den entscheidenden Unterschied allein im Namen Jesus Christus. Barth wird hier als Religionsbeobachter, nicht als Autorität für die koptische Gnadenlehre zitiert.`,
    sources: [
      { kind: 'oestlich', work: 'Dhammapada', ref: '165', original: 'suddhī asuddhi paccattaṃ, nāñño aññaṃ visodhaye', quote: `Durch sich selbst wird Böses getan, durch sich selbst wird man befleckt; durch sich selbst wird Böses unterlassen, durch sich selbst wird man rein. Reinheit und Unreinheit hängen von einem selbst ab; niemand kann einen anderen reinigen.`, translation: 'eigene Übersetzung', status: 'verbatim' },
      { kind: 'oestlich', work: 'Dhammapada', ref: '276', original: 'tumhehi kiccam ātappaṃ, akkhātāro tathāgatā', quote: `Ihr selbst müsst euch mühen; die Vollendeten zeigen nur den Weg.`, translation: 'eigene Übersetzung', status: 'verbatim' },
      { kind: 'oestlich', work: 'Digha-Nikaya 16 (Mahaparinibbana-Sutta)', ref: '2,26', original: 'attadīpā viharatha attasaraṇā anaññasaraṇā, dhammadīpā dhammasaraṇā anaññasaraṇā', quote: `Lebt als eure eigene Insel, als eure eigene Zuflucht, ohne andere Zuflucht; mit dem Dhamma als Insel, dem Dhamma als Zuflucht.`, translation: 'eigene Übersetzung', status: 'verbatim', note: 'Beachte: Auch hier ist das Dhamma eine Zuflucht außerhalb des bloßen Ich.' },
      { kind: 'oestlich', author: 'Yuien-bo (Schüler Shinrans)', work: 'Tannisho', ref: 'Kap. 3', year: 'Ende 13. Jh.', quote: `Selbst ein guter Mensch wird im Reinen Land geboren – wie viel mehr ein böser.`, translation: 'eigene Übersetzung nach gängigen englischen Fassungen', status: 'verbatim', note: 'Der „Böse" ist hier der Mensch, der erkennt, dass er sich nicht selbst retten kann.' },
      { kind: 'fachliteratur', author: 'Karl Barth', work: 'Kirchliche Dogmatik I/2', ref: '§ 17,3 („Die wahre Religion"); engl. Church Dogmatics I/2, ca. S. 340–342', year: '1938', status: 'paraphrase', quote: `Der Jodo-Shinshu-Buddhismus als umfassende und einleuchtende heidnische Parallele zum (reformatorischen) Christentum; der Unterschied liegt allein im Namen Jesus Christus.`, note: 'Geprüft 2026: Fundstelle (§ 17, engl. Ausgabe um S. 342) und Inhalt – „comprehensive and illuminating heathen parallel", Liste der Parallelen (Gnade, stellvertretende Genugtuung, Glaube allein) – sind in der Sekundärliteratur bestätigt. Der deutsche Wortlaut wurde nicht am Original geprüft – daher sinngemäß.' },
    ],
  },
  quickAnswer: `Ich teile die Einsicht, dass falsches Begehren Leid erzeugt – die Bibel sagt das auch (Jak 1,15). Die Frage ist nicht, ob ich mich mühen soll – das soll ich –, sondern ob ich es aus eigener Kraft schaffe. Paulus sagt ehrlich: „Das Gute, das ich will, tue ich nicht." Und der größte Zweig des japanischen Buddhismus, der Reine-Land-Buddhismus Shinrans, kam zum selben Ergebnis und vertraute auf Gnade. Das Evangelium sagt: Diese Gnade ist kein Mythos, sondern hat einen Namen – Jesus Christus –, und sie macht dich nicht passiv, sondern zum Mitwirkenden.`,
  keyPoints: [
    `**Gemeinsame Diagnose:** Ungeordnetes Begehren ist eine Wurzel des Leids – Bibel und Buddha sind sich hier nahe (Jak 1,14–15; 1 Joh 2,16).`,
    `**Unterschiedliche Therapie:** Der Buddhismus will das Begehren zum Erlöschen bringen; das Christentum will es auf Gott ausrichten (Ps 42,2; Mt 5,6).`,
    `**Die ehrliche Frage nach dem Können:** Der Mensch tut oft nicht, was er als gut erkennt (Röm 7,19). Selbsterlösung überschätzt den Willen.`,
    `**Der Buddhismus selbst kennt Gnade:** Zuflucht zu den Drei Juwelen, Bodhisattva-Gelübde, Verdienstübertragung und vor allem der Reine-Land-Buddhismus Shinrans (Tannisho 3).`,
    `**Der Unterschied ist ein Name:** Amidas Gelübde ist eine Erzählung ohne geschichtlichen Anker; Christus ist eine geschichtliche Person, die starb und auferstand.`,
    `**Synergie, nicht Passivität:** Orthodoxes Christentum fordert höchsten Einsatz – Fasten, Gebet, Kampf gegen die Leidenschaften – und schreibt den Sieg doch der Gnade zu (Phil 2,12–13; Vita Antonii 7).`,
  ],
  voices: [
    {
      person: 'paulus',
      role: 'als Apostel, der den Kampf mit dem eigenen Willen beschrieb',
      text: `Paulus war vor seiner Bekehrung ein Mann höchster religiöser Selbstanstrengung – „nach der Gerechtigkeit im Gesetz untadelig" (Phil 3,6). Gerade deshalb beschreibt er so eindringlich den Riss im Menschen: Er will das Gute und tut es nicht (Röm 7,19), und er ruft: „Wer wird mich erlösen?" (Röm 7,24). Seine Antwort ist nicht Resignation, sondern Dank für Christus – und dann ein Leben voller Mühe, in dem er doch sagt: „nicht aber ich, sondern Gottes Gnade, die mit mir ist" (1 Kor 15,10).`,
      sources: [
        { kind: 'bibel', work: '1. Korinther', ref: '15,10', quote: `Aber von Gottes Gnade bin ich, was ich bin. Und seine Gnade an mir ist nicht vergeblich gewesen, sondern ich habe viel mehr gearbeitet denn sie alle; nicht aber ich, sondern Gottes Gnade, die mit mir ist.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
    },
    {
      person: 'antonius',
      role: 'als Vater der Mönche und Meister der Askese',
      text: `Kein Buddhist kann den Wüstenvätern vorwerfen, sie hätten sich nicht gemüht: Antonius lebte zwanzig Jahre in fast völliger Einsamkeit, fastete, wachte und kämpfte gegen Gedanken der Begierde, des Zorns und der Verzweiflung. Und doch schildert sein Biograph Athanasius jeden seiner Siege als Werk Christi in ihm. Das ist das orthodoxe Gleichgewicht: äußerste Anstrengung ohne Selbstruhm, weil die Kraft vom Herrn kommt.`,
      sources: [
        { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Vita Antonii', ref: '7', status: 'paraphrase', quote: `Das war der erste Sieg des Antonius – oder vielmehr der Sieg des Erlösers in Antonius.` },
      ],
    },
    {
      person: 'johannes-cassian',
      role: 'als Überlieferer der ägyptischen Wüstentradition',
      text: `Cassian gibt in seinen Unterredungen die Lehre der ägyptischen Väter wieder: Gott ruft, zieht und stärkt; der Mensch antwortet, ringt und arbeitet mit. Manchmal kommt die Gnade allem menschlichen Wollen zuvor, manchmal antwortet sie auf das erste Regen des guten Willens. Weder ist der Mensch ein bloßes Werkzeug, noch rettet er sich selbst – er wird von Gott zum Mitarbeiter gemacht.`,
      sources: [
        { kind: 'kirchenvater', author: 'Johannes Cassian', work: 'Collationes', ref: 'XIII', status: 'paraphrase' },
      ],
    },
    {
      person: 'paul-williams',
      role: 'als Fachmann für Mahayana-Buddhismus',
      text: `Paul Williams beschreibt in seinem Standardwerk über den Mahayana die Entwicklung der Reine-Land-Traditionen bis zu Shinran fair und ohne Herablassung. Für ihn als Christen ist bemerkenswert, dass innerhalb des Buddhismus selbst die Einsicht gewachsen ist, dass der Mensch in einem Zeitalter des Verfalls aus eigener Kraft nicht zur Befreiung gelangt. Die Sehnsucht nach einer rettenden „Anderen Kraft" ist also kein christlicher Import, sondern eine Erfahrung, die Buddhisten selbst gemacht haben.`,
      sources: [
        { kind: 'fachliteratur', author: 'Paul Williams', work: 'Mahayana Buddhism: The Doctrinal Foundations', year: '2. Aufl. 2009', ref: 'Kapitel zum Reinen Land', status: 'paraphrase' },
      ],
    },
    {
      person: 'sundar-singh',
      role: 'als Sucher, dessen eigene Kraft versagte',
      text: `Sundar Singh suchte als Jugendlicher mit großer Ernsthaftigkeit Frieden: durch Lesen der heiligen Schriften der Sikhs und Hindus, durch Meditation und religiöse Übungen. Er fand ihn nicht und war so verzweifelt, dass er sich nach eigenem Bericht das Leben nehmen wollte, falls Gott sich ihm nicht zeige. Er bezeugte danach, dass ihm der Friede nicht als Frucht seiner Anstrengung, sondern als Geschenk in der Begegnung mit Christus zuteilwurde.`,
      sources: [
        { kind: 'fachliteratur', author: 'B. H. Streeter / A. J. Appasamy', work: 'The Sadhu', year: '1921', status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'buddha-zeigt-nur-weg',
      objection: `Der Buddha zeigt nur den Weg – gehen musst du ihn selbst (Dhammapada 276). Niemand kann einen anderen reinigen (165). Das ist erwachsene Spiritualität ohne Abhängigkeit.`,
      objectionBy: 'Walpola Rahula',
      answer: `Die Verantwortung teile ich: Auch Jesus sagt „Ringet danach, dass ihr durch die enge Pforte eingeht" (Lk 13,24). Die Frage ist aber, ob ich es kann. Paulus sagt ehrlich: „Das Gute, das ich will, tue ich nicht." Und im Buddhismus selbst hat Shinran, der Begründer der größten buddhistischen Schule Japans, nach Jahrzehnten als Mönch genau das erkannt – und auf die rettende Kraft Amidas vertraut.`,
      followUps: [
        {
          id: 'reines-land-abweichung',
          objection: `Der Reine-Land-Buddhismus ist eine späte Volksfrömmigkeit für einfache Leute – nicht der ursprüngliche Weg des Buddha.`,
          objectionBy: 'Stephen Batchelor (sinngemäß)',
          answer: `Er beruft sich auf Mahayana-Sutren, die viele Jahrhunderte alt sind. Und Honen und Shinran waren keine einfachen Leute, sondern hochgebildete Mönche vom Berg Hiei, die jahrelang alle Übungen der „eigenen Kraft" versucht hatten – und gerade deshalb zur „Anderen Kraft" fanden. Ihn als Frömmigkeit für Einfältige abzutun, ist ein geistlicher Elitismus, den das Evangelium nicht kennt (Mt 11,25).`,
          followUps: [
            {
              id: 'amida-statt-jesus',
              objection: `Dann ist Amida eben unsere Gnade. Wozu brauchen wir Jesus?`,
              objectionBy: 'Shin-buddhistischer Gesprächspartner (sinngemäß, z. B. Taitetsu Unno)',
              answer: `Hier liegt der entscheidende Unterschied – auch Karl Barth sah ihn in einem Namen. Amida ist der Buddha eines Gelübdes, von dem Sutren erzählen, ohne geschichtlichen Ort. Jesus ist eine geschichtliche Person, die unter Pontius Pilatus gekreuzigt wurde und nach dem Zeugnis von Augenzeugen auferstand. Und am Kreuz geht es nicht nur um ein gnädiges Versprechen, sondern um Sühne: Gerechtigkeit und Barmherzigkeit begegnen sich.`,
              followUps: [
                {
                  id: 'historizitaet-egal',
                  objection: `Für den Gläubigen wirkt Amidas Gelübde genauso. Ob es historisch ist, spielt keine Rolle.`,
                  objectionBy: 'Taitetsu Unno (sinngemäß)',
                  answer: `Wenn ein Rettungsversprechen nicht wirklich gegeben wurde, ist das Vertrauen darauf zwar tröstlich, aber es rettet nicht – so wie ein Rettungsring, der nur gemalt ist. Paulus sagt es scharf: „Ist aber Christus nicht auferstanden, so ist euer Glaube eitel" (1 Kor 15,17). Shinrans Sehnsucht ist echt und bewegend. Das Evangelium sagt: Diese Sehnsucht hat eine wirkliche Antwort.`,
                  questionsBack: [`Würdest du einem Rettungsring vertrauen, von dem du nicht weißt, ob es ihn gibt?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'gnade-macht-unmuendig',
      objection: `Gnade macht unmündig. Ihr braucht einen himmlischen Vater, der euch rettet – das ist kindliches Denken, wie Freud gezeigt hat.`,
      objectionBy: 'Sam Harris',
      answer: `Ist es kindlich, sich von einem Arzt operieren zu lassen? Reife heißt, die eigenen Grenzen ehrlich anzuerkennen. Das orthodoxe Christentum macht nicht passiv: „Schaffet, dass ihr selig werdet … denn Gott ist's, der in euch wirkt" (Phil 2,12–13). Und jeder Buddhist beginnt seinen Weg mit der Zuflucht zu Buddha, Dhamma und Sangha – einem Vertrauen auf etwas jenseits des bloßen Ich.`,
      followUps: [
        {
          id: 'zuflucht-nur-symbolisch',
          objection: `Die Zuflucht ist nur symbolisch. Der Buddha greift nicht in dein Leben ein.`,
          objectionBy: 'Walpola Rahula (sinngemäß)',
          answer: `Im Theravada mag das so verstanden werden. Aber der Mahayana hat Bodhisattvas hervorgebracht, die geloben, alle Wesen zu retten und ihnen ihr Verdienst zu schenken. Der Buddhismus hat also selbst eine Gestalt der helfenden Liebe entwickelt. Das menschliche Herz sucht Hilfe. Das Evangelium sagt: Der Helfer ist selbst gekommen.`,
          followUps: [
            {
              id: 'christus-als-bodhisattva',
              objection: `Dann ist Christus eben ein großer Bodhisattva – einer, der aus Mitgefühl sein Leben für andere hingibt. Buddha und Christus sind Brüder, ihre Botschaft ist dieselbe Liebe.`,
              objectionBy: 'Thich Nhat Hanh (Living Buddha, Living Christ)',
              answer: `Thich Nhat Hanhs Achtung vor Jesus berührt mich. Aber ein Bodhisattva ist ein Wesen auf dem Weg zur Erleuchtung, das selbst aus dem Kreislauf kommt und andere lehrt, ihn zu verlassen. Christus ist nach dem Neuen Testament der ewige Sohn, durch den alles geschaffen ist (Joh 1,3), der unsere Schuld trägt und leiblich aufersteht. Und die großen Mahayana-Sutren sagen selbst: Für den Bodhisattva gibt es letztlich keine Wesen, die gerettet werden – sie sind leer. Im Evangelium ist jeder Gerettete eine unvergängliche Person, die Gott beim Namen ruft.`,
              detail: `Paul Williams, einer der führenden Kenner des Mahayana-Buddhismus, hat genau diesen Punkt beschrieben: Das Bodhisattva-Ideal ist von großer Schönheit, steht aber im Rahmen der Leerheitslehre. Im Diamant-Sutra gelobt der Bodhisattva, alle Wesen ins Nirvana zu führen – und soll zugleich erkennen, dass in Wahrheit kein Wesen ins Nirvana geführt wird. Mitgefühl ist hier eine Haltung gegenüber Prozessen, deren Selbst letztlich leer ist.

Christliche Liebe hat einen anderen Grund: Gott liebt Personen, die er geschaffen hat und nie wieder aufgibt. Christus stirbt nicht, um eine Illusion aufzulösen, sondern um wirkliche Menschen mit wirklicher Schuld zu retten – und er steht leiblich auf. Wer beide „Brüder" nennt, muss diese Unterschiede einebnen.`,
              voices: [
                { person: 'paul-williams', role: 'als Mahayana-Forscher und ehemaliger Buddhist', text: `Williams, Autor eines Standardwerks über den Mahayana-Buddhismus, würdigt das Bodhisattva-Ideal, betont aber, dass es in eine Philosophie der Leerheit eingebettet ist, in der es letztlich keine bleibenden Personen gibt. Gerade die Frage nach der Wirklichkeit der Person führte ihn schließlich zum Christentum, das die Person als von Gott geschaffen und geliebt ernst nimmt.`, sources: [
                  { kind: 'fachliteratur', author: 'Paul Williams', work: 'Mahayana Buddhism: The Doctrinal Foundations', year: '1989, 2. Aufl. 2009', status: 'paraphrase', quote: `Das Bodhisattva-Ideal im Rahmen der Lehre von der Leerheit aller Dinge.` },
                ] },
              ],
              sources: [
                { kind: 'oestlich', work: 'Diamant-Sutra (Vajracchedika Prajnaparamita)', ref: 'Kap. 3', status: 'paraphrase', quote: `Obwohl unermesslich viele Wesen ins Nirvana geführt werden, wird in Wahrheit kein Wesen ins Nirvana geführt – denn wer die Vorstellung eines Wesens hegt, ist kein Bodhisattva.` },
                { kind: 'gegner', author: 'Thich Nhat Hanh', work: 'Living Buddha, Living Christ (dt. Lebendiger Buddha, lebendiger Christus)', year: '1995', status: 'paraphrase', quote: `Buddha und Christus als Brüder; Achtsamkeit und Heiliger Geist als verwandte Wirklichkeiten.` },
              ],
              followUps: [
                {
                  id: 'praxis-statt-titel',
                  objection: `Titel sind unwichtig. Entscheidend ist, ob wir Liebe und Achtsamkeit praktizieren. Darüber zu streiten, wer Jesus „wirklich" war, trennt nur.`,
                  objectionBy: 'Thich Nhat Hanh (sinngemäß)',
                  answer: `Praxis ist wichtig – „an ihren Früchten sollt ihr sie erkennen" (Mt 7,16). Aber christliche Liebe ist Antwort: „Lasset uns ihn lieben; denn er hat uns erst geliebt" (1 Joh 4,19). Wenn ich nicht weiß, wer mich zuerst geliebt hat, wird Liebe zur Technik, die ich aus eigener Kraft erzeugen muss. Und darum geht es in diesem ganzen Gespräch: Kann ich mich selbst erlösen, oder brauche ich einen Erlöser? Die Frage, wer Jesus ist, entscheidet genau das.`,
                  questionsBack: [`Wenn Liebe nur Praxis ist – woher nimmst du die Kraft an dem Tag, an dem du nicht mehr lieben kannst?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'unwissenheit-nicht-suende',
      objection: `Das Problem ist Unwissenheit und Begehren, nicht „Sünde" gegen einen Gott. Einsicht heilt – Vergebung ist überflüssig.`,
      objectionBy: 'Thich Nhat Hanh (sinngemäß)',
      answer: `Auch die Bibel sieht ungeordnetes Begehren als Wurzel (Jak 1,14–15). Aber das Böse ist nicht nur Unwissenheit: Oft wissen wir genau, was gut ist, und tun es nicht. Und wer einem anderen Unrecht getan hat, wird durch eigene Einsicht nicht frei von der Schuld gegenüber dem Opfer. Vergebung ist etwas zwischen Personen – Einsicht kann nicht vergeben.`,
      followUps: [
        {
          id: 'schuld-krankhaft',
          objection: `Schuld ist ein christliches Konstrukt, das Menschen krank macht.`,
          objectionBy: 'Sam Harris (sinngemäß)',
          answer: `Krankhafte, diffuse Schuldgefühle gibt es, und die Kirche hat sie manchmal verstärkt – das ist ein Fehler. Aber das Gewissen, das echtes Unrecht als Unrecht erkennt, ist gesund. Selbst die buddhistische Mönchsregel kennt das regelmäßige Bekenntnis von Vergehen. Das Christentum bietet etwas, das Einsicht allein nicht kann: wirkliche Lossprechung (Ps 32,1–5).`,
          followUps: [
            {
              id: 'begehren-aufgeben-frieden',
              objection: `Aber das Begehren aufzugeben, ist doch der Weg zum Frieden. Darin hat der Buddha recht.`,
              objectionBy: 'Thich Nhat Hanh (sinngemäß)',
              answer: `Das Christentum will das Begehren nicht auslöschen, sondern heilen und auf sein wahres Ziel richten: „Wie der Hirsch schreit nach frischem Wasser, so schreit meine Seele, Gott, zu dir" (Ps 42,2). Auch der buddhistische Weg braucht übrigens einen Willen zur Befreiung – deshalb unterscheidet die Tradition zwischen heilsamem Streben (*chanda*) und Gier (*tanha*). Das Problem ist nicht das Begehren, sondern sein Gegenstand.`,
              followUps: [
                {
                  id: 'apatheia-gleich-nirvana',
                  objection: `Eure Wüstenväter lehrten doch auch Leidenschaftslosigkeit – *Apatheia*. Das ist dasselbe wie das Erlöschen des Begehrens im Buddhismus. Am Ende kommen wir aufs Gleiche hinaus.`,
                  objectionBy: 'Stephen Batchelor (sinngemäß)',
                  answer: `Es gibt eine echte Verwandtschaft in der Praxis – Wachsamkeit über die Gedanken, Loslassen von Gier und Zorn. Aber das Ziel ist ein anderes. Johannes Cassian, der die Lehre der ägyptischen Väter in den Westen brachte, nennt die Reinheit des Herzens das nächste Ziel – und das Reich Gottes das letzte. Apatheia ist bei den Vätern nicht das Erlöschen, sondern die Freiheit von ungeordneten Leidenschaften, damit die Liebe frei wird. Evagrius sagt: Die Tochter der Apatheia ist die Liebe.`,
                  detail: `In den *Unterredungen mit den Vätern* lässt Cassian Abba Moses erklären, dass jede Kunst ein unmittelbares Ziel (*scopos*) und ein letztes Ziel (*telos*) hat. Für den Mönch ist der Scopos die Reinheit des Herzens, der Telos aber das Reich Gottes. Askese ist also Mittel, nicht Selbstzweck. Das Herz wird nicht leer gemacht, sondern frei für Gott und den Nächsten.

Das ist der Unterschied zum Nirvana: Der buddhistische Weg zielt auf das Erlöschen von Durst und Ich-Vorstellung; der christliche Weg auf die Gemeinschaft der Liebe mit dem dreieinigen Gott. Ähnlich im Mittel, verschieden im Ziel – und das Ziel bestimmt, was man unterwegs wird.`,
                  voices: [
                    { person: 'johannes-cassian', role: 'als Überlieferer der ägyptischen Wüstenväter', text: `Cassian gibt die Lehre der ägyptischen Mönche weiter: Das Ziel des Mönchslebens ist nicht Leere, sondern die Liebe zu Gott. Fasten, Wachen und Schriftlesung dienen der Reinheit des Herzens, und die Reinheit des Herzens dient der Schau Gottes und dem Reich Gottes.`, sources: [
                      { kind: 'kirchenvater', author: 'Johannes Cassian', work: 'Unterredungen mit den Vätern (Collationes)', ref: 'I,4–7', year: 'ca. 426', status: 'paraphrase', quote: `Das Ziel (telos) unseres Berufs ist das Reich Gottes; das nächste Ziel (scopos) aber die Reinheit des Herzens.` },
                    ] },
                  ],
                  sources: [
                    { kind: 'kirchenvater', author: 'Evagrius Ponticus', work: 'Praktikos (Über das tätige Leben)', ref: 'Prolog 8', year: 'ca. 390', status: 'paraphrase', quote: `Die Apatheia hat eine Tochter, die Agape (Liebe).`, note: 'Evagrius lebte als Mönch in der ägyptischen Wüste (Kellia); einzelne seiner Lehren wurden später verurteilt – hier nur als Zeuge für das Ziel der Apatheia zitiert.' },
                  ],
                  questionsBack: [`Ist ein Herz, das frei von Gier ist, aber nicht mehr liebt, wirklich am Ziel?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'niemand-fuer-andere',
      objection: `Für euch ist Jesus ein Retter, für uns ist der Buddha ein Lehrer. Das ist ehrlicher, denn niemand kann für einen anderen etwas Entscheidendes tun.`,
      objectionBy: 'Walpola Rahula (sinngemäß)',
      answer: `Das Leben widerlegt diesen Satz täglich: Eltern, Ärzte, Feuerwehrleute, ein Organspender tun für andere, was diese nicht selbst können. Liebe heißt gerade, für den anderen zu tun, was er nicht kann. Das Bodhisattva-Ideal selbst lebt davon. Jesus sagt: „Niemand hat größere Liebe denn die, dass er sein Leben lässt für seine Freunde" (Joh 15,13).`,
      followUps: [
        {
          id: 'reinheit-nicht-uebertragbar',
          objection: `Aber moralische Reinheit kann man nicht übertragen wie eine Niere.`,
          objectionBy: 'Walpola Rahula (sinngemäß)',
          answer: `Es geht nicht um eine mechanische Übertragung, sondern um Vereinigung mit einer Person. In Taufe und Eucharistie werden wir mit Christus verbunden; sein Leben fließt in uns wie der Saft des Weinstocks in die Reben (Joh 15,4–5). Und der Heilige Geist verwandelt uns – langsam, unter unserer Mitwirkung. Das ist keine Magie, sondern Beziehung.`,
          followUps: [
            {
              id: 'stellvertretung-unmoralisch',
              objection: `Stellvertretung ist moralisch obszön. Kein Gericht der Welt würde einen Unschuldigen für einen Mörder ins Gefängnis stecken. Meine Schuld kann niemand tragen außer mir.`,
              objectionBy: 'Sam Harris (sinngemäß)',
              answer: `Wenn ein Richter einen ahnungslosen Dritten bestrafen würde, wäre das obszön – da hast du recht. Aber Christus ist kein Dritter. Er ist Gott selbst, der Beleidigte, der die Folgen trägt, und zugleich der neue Adam, das Haupt der Menschheit, mit dem wir in der Taufe vereint werden. Er nimmt nicht nur unsere Strafe weg, er gibt uns sein Leben. Es geht nicht um Buchhaltung, sondern um eine Vereinigung, wie in einer Ehe, in der die Schulden des einen die des anderen werden – und der Reichtum des anderen auch.`,
              detail: `Kyrill von Alexandrien betont immer wieder, dass der Logos die ganze menschliche Natur angenommen hat, um sie in sich zu erneuern: Er ist der „zweite Adam", in dem die Menschheit neu anfängt (1 Kor 15,22.45). Darum ist das Heil im orthodoxen Verständnis nicht ein fremder Betrag, der auf mein Konto überwiesen wird, sondern Teilhabe an Christus selbst – seinem Tod und seiner Auferstehung (Röm 6,3–5).

Der Buddhismus kennt übrigens selbst die Übertragung von Verdienst (*pattidana*): Mönche und Laien widmen ihr Verdienst anderen Wesen, auch Verstorbenen. Die Intuition, dass das Gute des einen dem anderen zugutekommen kann, ist also tief im Menschen verankert.`,
              voices: [
                { person: 'kyrill-alexandrien', role: 'als Lehrer der Menschwerdung', text: `Für Kyrill ist der menschgewordene Logos der Anfang einer erneuerten Menschheit. Wie in Adam alle der Verderbnis verfielen, so wird in Christus die menschliche Natur geheiligt und lebendig gemacht. Wer durch Taufe und Eucharistie mit ihm verbunden ist, empfängt Anteil an diesem neuen Leben.`, sources: [
                  { kind: 'kirchenvater', author: 'Kyrill von Alexandrien', work: 'Kommentar zum Johannesevangelium', year: 'ca. 425–428', status: 'paraphrase', quote: `Christus als zweiter Adam, in dem die ganze menschliche Natur erneuert und geheiligt wird.` },
                ] },
              ],
              sources: [
                { kind: 'bibel', work: '1. Korinther', ref: '15,22', quote: `Denn gleichwie sie in Adam alle sterben, also werden sie in Christus alle lebendig gemacht werden.`, translation: 'Luther 1912', status: 'verbatim' },
              ],
              questionsBack: [`Wenn der Richter selbst die Strafe auf sich nimmt – wem gegenüber ist das ungerecht?`],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Hast du schon erlebt, dass du etwas Gutes wolltest und es trotzdem nicht getan hast?`,
    `Warum hat Shinran, ein hochgebildeter Mönch, die „eigene Kraft" aufgegeben?`,
    `Kann Einsicht ein Unrecht vergeben, das du einem anderen angetan hast?`,
    `Ist die Zuflucht zu Buddha, Dhamma und Sangha nicht auch eine Form des Vertrauens jenseits des eigenen Ich?`,
  ],
  avoid: [
    `Stelle den Buddhismus nicht als „Werkgerechtigkeit" im polemischen Sinn dar – er kennt Mitgefühl, Hingabe und im Mahayana auch Gnade.`,
    `Präsentiere Gnade nicht als Einladung zur Passivität – die orthodoxe Askese widerlegt das, und du würdest den Einwand nur bestätigen.`,
    `Behaupte nicht, Shinran habe das Christentum gekannt oder kopiert – dafür gibt es keine Belege.`,
  ],
  concessions: [
    `Die buddhistische Analyse des Begehrens ist psychologisch tief und deckt sich in vielem mit der Lehre der Wüstenväter über die Leidenschaften.`,
    `Christen haben Gnade manchmal als Ausrede für Trägheit benutzt; die buddhistische Betonung der eigenen Verantwortung ist eine heilsame Mahnung.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Paul Williams', work: 'Mahayana Buddhism: The Doctrinal Foundations', year: '2. Aufl. 2009', status: 'paraphrase' },
    { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Das Leben des heiligen Antonius', year: 'ca. 357', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Keith Yandell / Harold Netland', work: 'Buddhism: A Christian Exploration and Appraisal', year: '2009', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Selbsterlösung', 'Gnade', 'Reines Land', 'Shinran', 'Synergie', 'Begehren'],
  related: [
    'hinduismus/karma-gerechter-als-gnade',
    'buddhismus/nirvana-hoechstes-ziel',
    'sola-fide/allein-durch-glauben',
    'religionskritik/freud-wunscherfuellung',
    'psychologie/schuldgefuehle-schaedlich',
  ],
};

export default claim;
