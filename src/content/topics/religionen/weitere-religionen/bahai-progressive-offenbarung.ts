import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'bahai-progressive-offenbarung',
  title: `„Baha'u'llah ist die Wiederkunft Christi – Offenbarung schreitet fort."`,
  proponents: [
    { name: 'Baha\'u\'llah (Mirza Husayn-Ali Nuri)', role: 'Stifter der Bahai-Religion (1817–1892)', work: 'Kitab-i-Iqan (1861/62); Kitab-i-Aqdas (1873)' },
    { name: 'Abdu\'l-Baha', role: 'Sohn Baha\'u\'llahs, Ausleger und Leiter der Bahai (1844–1921)', work: 'Some Answered Questions (Beantwortete Fragen, 1908)' },
    { name: 'Shoghi Effendi', role: 'Hüter der Bahai-Religion (1897–1957)', work: 'The World Order of Baha\'u\'llah (1938)' },
    { name: 'Moojan Momen', role: 'Bahai-Gelehrter und Autor', work: 'The Baha\'i Faith: A Beginner\'s Guide (2008)' },
  ],
  steelman: `Gott offenbart sich der Menschheit fortschreitend, wie ein Lehrer, der seinen Schülern Klasse für Klasse mehr beibringt. Die großen „Manifestationen Gottes" – Abraham, Mose, Krishna, Zarathustra, Buddha, Jesus, Mohammed, der Bab und Baha'u'llah – sind Spiegel, die dasselbe göttliche Licht widerspiegeln. Ihre geistlichen Kernlehren sind eins; ihre sozialen Gesetze unterscheiden sich, weil jedes Zeitalter andere Bedürfnisse hat. Baha'u'llah, „die Herrlichkeit Gottes", erfüllt die Verheißungen der Wiederkunft Christi, der kommen soll „in der Herrlichkeit seines Vaters". Er bringt die Botschaft für das Zeitalter der Menschheit als Ganzer: Einheit aller Menschen, Gleichheit von Mann und Frau, Harmonie von Wissenschaft und Religion, Weltfrieden. Christen, die ihn ablehnen, weil sie eine buchstäbliche Wiederkunft auf den Wolken erwarten, wiederholen den Fehler der Schriftgelehrten, die Jesus ablehnten, weil er ihre buchstäblichen Erwartungen nicht erfüllte.`,
  biblical: {
    summary: `Das Neue Testament versteht Christus nicht als eine Stufe, sondern als Gottes **letztes Wort**: „Nachdem vorzeiten Gott manchmal und auf mancherlei Weise geredet hat … hat er am letzten in diesen Tagen zu uns geredet durch den Sohn" (Hebr 1,1–2). Der Glaube ist „einmal den Heiligen übergeben" (Jud 3). Jesus selbst warnte ausdrücklich vor Menschen, die sagen „Hier ist Christus!", und kündigte sein Kommen als für alle sichtbar an wie ein Blitz (Mt 24,23–27). Die Engel bei der Himmelfahrt sagen: „**Dieser** Jesus … wird so kommen, wie ihr ihn habt gen Himmel fahren sehen" (Apg 1,11) – derselbe, leiblich auferstandene Herr (Lk 24,39), den „alle Augen sehen" werden (Offb 1,7).`,
    sources: [
      { kind: 'bibel', work: 'Hebräer', ref: '1,1–2', quote: `Nachdem vorzeiten Gott manchmal und mancherleiweise geredet hat zu den Vätern durch die Propheten, hat er am letzten in diesen Tagen zu uns geredet durch den Sohn …`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Matthäus', ref: '24,23.26–27', quote: `So alsdann jemand zu euch wird sagen: Siehe, hier ist Christus! oder: da! so sollt ihr's nicht glauben … Darum, wenn sie zu euch sagen werden: Siehe, er ist in der Wüste! so gehet nicht hinaus, siehe, er ist in der Kammer! so glaubt nicht. Denn gleichwie der Blitz ausgeht vom Aufgang und scheint bis zum Niedergang, also wird auch sein die Zukunft des Menschensohnes.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '1,11', quote: `Ihr Männer von Galiläa, was stehet ihr und sehet gen Himmel? Dieser Jesus, welcher von euch ist aufgenommen gen Himmel, wird kommen, wie ihr ihn gesehen habt gen Himmel fahren.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Offenbarung', ref: '1,7', quote: `Siehe, er kommt mit den Wolken, und es werden ihn sehen alle Augen und die ihn zerstochen haben.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Lukas', ref: '24,39', quote: `Sehet meine Hände und meine Füße: ich bin's selber. Fühlet mich und sehet; denn ein Geist hat nicht Fleisch und Bein, wie ihr sehet, daß ich habe.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Galater', ref: '1,8', quote: `Aber so auch wir oder ein Engel vom Himmel euch würde Evangelium predigen anders, denn das wir euch geprediget haben, der sei verflucht!`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptische Kirche bekennt im Glaubensbekenntnis: Christus „wird wiederkommen in Herrlichkeit, zu richten die Lebenden und die Toten; seines Reiches wird kein Ende sein". Die Kirche hat das Schema einer fortschreitenden Prophetenkette schon sehr früh kennengelernt: Mani (216–ca. 276) verkündete, die Weisheit sei nacheinander durch Buddha in Indien, Zarathustra in Persien und Jesus im Westen gebracht worden, und nun durch ihn selbst als letzten Gesandten. Manichäische Schriften wurden gerade in Ägypten in koptischer Sprache überliefert. Die Kirche hat geantwortet: Christus ist nicht eine Stufe, sondern die Erfüllung; die Glaubensregel der Apostel ist der Maßstab jeder neuen Lehre (Irenäus).`,
    sources: [
      { kind: 'konzil', work: 'Nizäno-Konstantinopolitanisches Glaubensbekenntnis', year: '381', quote: `…und wird wiederkommen in Herrlichkeit, zu richten die Lebenden und die Toten; seines Reiches wird kein Ende sein.`, status: 'verbatim' },
      { kind: 'sonstiges', author: 'al-Biruni (Zitat aus Manis Schabuhragan)', work: 'Chronologie der alten Völker', year: 'ca. 1000 (Mani: 3. Jh.)', quote: `Weisheit und Werke wurden von den Gesandten Gottes von Zeit zu Zeit gebracht: in Indien durch Buddha, in Persien durch Zarathustra, im Westen durch Jesus; nun ist diese Offenbarung durch mich, Mani, gekommen.`, status: 'paraphrase', note: 'Frühes Beispiel des Schemas „fortschreitender Offenbarung"; vgl. die koptischen Kephalaia aus Medinet Madi.' },
      { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Adversus Haereses', ref: 'III,3–4', status: 'paraphrase', quote: `Die von den Aposteln überlieferte Wahrheit ist in den Kirchen bewahrt; an ihr ist jede neue Lehre zu messen.` },
    ],
  },
  opposingView: {
    summary: `Die Bahai-Religion geht auf den Bab (1819–1850) zurück, der 1844 in Schiras auftrat und 1850 in Täbris hingerichtet wurde, und auf Baha'u'llah, der sich 1863 in Bagdad als der vom Bab angekündigte Verheißene erklärte und in osmanischer Verbannung in Akko starb. Im *Kitab-i-Iqan* deutet er die Endzeitbilder von Bibel und Koran symbolisch: „Wolken" seien Schleier und Prüfungen, die Verfinsterung der Sonne der Niedergang religiöser Führer. Abdu'l-Baha deutet die Auferstehung Christi geistlich: Nach der Kreuzigung sei die Sache Christi „wie ein lebloser Leib" gewesen und nach drei Tagen durch die Jünger wiederbelebt worden. Das *Kitab-i-Aqdas* schließt eine neue Manifestation vor Ablauf von tausend Jahren aus. Bahai werden insbesondere im Iran bis heute schwer verfolgt.`,
    detail: `Die Bahai erkennen – anders als der Islam (Koran 4,157) – die Kreuzigung Jesu als geschichtlich an und deuten den Koranvers symbolisch. Ebenso deuten sie die koranische Bezeichnung Mohammeds als „Siegel der Propheten" (33,40) so, dass sie nur das Ende eines Zyklus bezeichne. Diese Umdeutungen sind nötig, damit die Lehren der verschiedenen „Manifestationen" vereinbar erscheinen.`,
    sources: [
      { kind: 'gegner', author: 'Baha\'u\'llah', work: 'Kitab-i-Aqdas', ref: 'Abs. 37', year: '1873', original: 'Whoso layeth claim to a Revelation direct from God, ere the expiration of a full thousand years, such a man is assuredly a lying impostor.', quote: `Wer eine unmittelbare Offenbarung von Gott beansprucht, bevor volle tausend Jahre verstrichen sind, ist gewiss ein lügnerischer Betrüger.`, status: 'verbatim', translation: 'eigene Übersetzung aus der offiziellen englischen Fassung' },
      { kind: 'gegner', author: 'Baha\'u\'llah', work: 'Kitab-i-Iqan (Buch der Gewissheit)', year: '1861/62', status: 'paraphrase', quote: `Symbolische Deutung von „Wolken", „Sonne", „Mond" und „Sternen" in den Endzeitreden Jesu als Bilder für Prüfungen, Schleier und religiöse Führer.` },
      { kind: 'gegner', author: 'Abdu\'l-Baha', work: 'Some Answered Questions', ref: 'Kap. 23 („Die Auferstehung Christi")', year: '1908', status: 'paraphrase', quote: `Die Auferstehung Christi war nicht leiblich, sondern geistig: Nach drei Tagen wurde die Sache Christi, die wie ein toter Leib war, durch die Standhaftigkeit der Jünger wiederbelebt.` },
      { kind: 'koran', work: 'Sure 33 (al-Ahzab)', ref: '33:40', quote: `Mohammed ist nicht der Vater irgendeines eurer Männer, sondern der Gesandte Allahs und das Siegel der Propheten.`, original: 'wa-lākin rasūla llāhi wa-khātama n-nabiyyīn', translation: 'sinngemäß nach Bubenheim/Elyas', status: 'paraphrase', url: 'https://quran.com/33/40' },
    ],
  },
  quickAnswer: `Fortschreitende Offenbarung würde bedeuten, dass spätere Lehrer ergänzen und vertiefen – nicht widersprechen. Aber die „Manifestationen" widersprechen sich in Tatsachen: Jesus ist am Kreuz gestorben (Evangelien) – oder nicht (Koran 4,157); es gibt einen Schöpfer (Mose) – oder keinen (Buddha). Und Jesus selbst hat vorausgesagt, dass Menschen sagen werden „Hier ist Christus!" – und gewarnt: „Glaubt es nicht." Er kommt wieder wie der Blitz, für alle sichtbar, als derselbe auferstandene Jesus (Apg 1,11) – nicht als ein anderer Mann, geboren 1817 in Teheran.`,
  keyPoints: [
    `**Widerspruch ist kein Fortschritt:** Ein Mathematiklehrer in Klasse 6 korrigiert nicht „2+2=5" aus Klasse 5. Die „Manifestationen" widersprechen sich über Gott (Schöpfer oder keiner), Jesu Tod und das Leben nach dem Tod.`,
    `**Unfalsifizierbare Umdeutung:** Jeder Widerspruch wird als „spätere Verfälschung" oder „symbolisch" erklärt. Eine Theorie, die alles schlucken kann, erklärt nichts.`,
    `**Jesu Warnung:** „Wenn jemand sagt: Hier ist Christus! … glaubt es nicht" (Mt 24,23–27). Die Wiederkunft ist sichtbar, weltweit, und betrifft „diesen Jesus" (Apg 1,11).`,
    `**Leugnung der Auferstehung:** Die geistliche Umdeutung (Abdu'l-Baha) widerspricht dem frühesten Zeugnis (Lk 24,39; 1 Kor 15,3–8). Jesus wird nur angenommen, nachdem man ihn umgedeutet hat.`,
    `**Ein altes Schema:** Schon Mani (3. Jh.) stellte sich als letzten Gesandten nach Buddha, Zarathustra und Jesus vor. Die Kirche erkannte darin nicht Fortschritt, sondern Ersatz.`,
    `**Selbstaufhebung:** Wenn Offenbarung immer weiter schreitet, ist auch Baha'u'llah nur vorläufig – nach tausend Jahren kommt der Nächste. Christus dagegen ist Gottes letztes Wort (Hebr 1,1–2).`,
  ],
  voices: [
    {
      person: 'paulus',
      role: 'als Apostel, der vor einem „anderen Evangelium" warnte',
      text: `Paulus kannte das Phänomen neuer Offenbarungsansprüche schon in den ersten Gemeinden. Seine Antwort an die Galater ist von großer Schärfe: Selbst wenn ein Engel vom Himmel ein anderes Evangelium verkündigte, als die Apostel es überliefert haben, solle man es nicht annehmen (Gal 1,8). Das Kriterium ist nicht die Eindrücklichkeit eines Boten, sondern die Übereinstimmung mit dem überlieferten Evangelium vom gestorbenen und leiblich auferstandenen Christus (1 Kor 15,3–8).`,
      sources: [
        { kind: 'bibel', work: '1. Korinther', ref: '15,3–4', quote: `Denn ich habe euch zuvörderst gegeben, was ich empfangen habe: daß Christus gestorben sei für unsre Sünden nach der Schrift, und daß er begraben sei, und daß er auferstanden sei am dritten Tage nach der Schrift …`, translation: 'Luther 1912', status: 'verbatim' },
      ],
    },
    {
      person: 'johannes-apostel',
      role: 'als Apostel, der zur Prüfung der Geister aufrief',
      text: `Johannes ruft die Gemeinde auf, nicht jedem Geist zu glauben, sondern die Geister zu prüfen, „denn es sind viele falsche Propheten ausgegangen in die Welt" (1 Joh 4,1). Das Kriterium ist christologisch: Wer bekennt, dass Jesus Christus im Fleisch gekommen ist, ist aus Gott (1 Joh 4,2). Eine Lehre, die die leibliche Auferstehung umdeutet und einen anderen als „wiedergekommenen Christus" verkündet, besteht diese Prüfung nicht.`,
      sources: [
        { kind: 'bibel', work: '1. Johannes', ref: '4,1', quote: `Ihr Lieben, glaubet nicht einem jeglichen Geist, sondern prüfet die Geister, ob sie von Gott sind; denn es sind viel falsche Propheten ausgegangen in die Welt.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
    },
    {
      person: 'lukas',
      role: 'als Historiker der Himmelfahrt',
      text: `Lukas, der sorgfältig von Anfang an nachgeforscht haben will (Lk 1,3), betont die Leiblichkeit des Auferstandenen: Er isst vor den Jüngern und lässt sich berühren (Lk 24,39–43). Und er berichtet die Worte der Engel bei der Himmelfahrt: Derselbe Jesus wird auf dieselbe Weise wiederkommen (Apg 1,11). Die christliche Hoffnung ist damit an eine bestimmte Person gebunden – nicht an eine neue Gestalt, die dieselbe „Sache" weiterträgt.`,
      sources: [
        { kind: 'bibel', work: 'Lukas', ref: '24,42–43', quote: `Und sie legten ihm vor ein Stück von gebratenem Fisch und Honigseim. Und er nahm's und aß vor ihnen.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
    },
    {
      person: 'irenaeus',
      role: 'als Bischof gegen neue Offenbarungsansprüche',
      text: `Irenäus setzte sich mit Lehrern auseinander, die höhere, spätere Erkenntnis beanspruchten als die Apostel. Seine Antwort: Die Apostel haben die Wahrheit vollständig empfangen und den Kirchen übergeben, deren Bischöfe man bis auf die Apostel zurückverfolgen kann. Wer eine „fortgeschrittenere" Offenbarung behauptet, die dem apostolischen Glauben widerspricht, bringt nicht Fortschritt, sondern Abweichung.`,
      sources: [
        { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Adversus Haereses', ref: 'III,1–4', status: 'paraphrase' },
      ],
    },
    {
      person: 'corduan',
      role: 'als Religionswissenschaftler',
      text: `Winfried Corduan beschreibt die Bahai-Religion fair, mit ihren Idealen der Einheit und ihrer Leidensgeschichte im Iran. Er zeigt zugleich, dass die Harmonie der Religionen nur dadurch erreicht wird, dass ihre zentralen Aussagen umgedeutet werden – etwa Jesu leibliche Auferstehung oder die Lehren des Buddha. Respektvoller sei es, die Unterschiede ernst zu nehmen und nach der Wahrheit zu fragen.`,
      sources: [
        { kind: 'fachliteratur', author: 'Winfried Corduan', work: 'Neighboring Faiths', year: '2. Aufl. 2012', ref: 'Kapitel zur Bahai-Religion', status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'lehrer-klassen',
      objection: `Gott offenbart sich fortschreitend, wie ein Lehrer in aufeinanderfolgenden Klassen: Mose, Buddha, Jesus, Mohammed, Baha'u'llah – alle spiegeln dieselbe göttliche Sonne.`,
      objectionBy: 'Abdu\'l-Baha (Linie)',
      answer: `Fortschritt würde bedeuten: ergänzen und vertiefen, nicht widersprechen. Die „Manifestationen" widersprechen sich aber in Tatsachen: Jesus starb am Kreuz – sagen die Evangelien; er starb nicht – sagt der Koran (4,157). Es gibt einen Schöpfergott – sagt Mose; nach dem frühen Buddhismus keinen. Ein Leben und dann das Gericht – sagt Jesus; viele Leben – sagt Krishna. Ein Lehrer in Klasse 6 korrigiert nicht „2+2=5" aus Klasse 5.`,
      followUps: [
        {
          id: 'spaetere-verfaelschung',
          objection: `Die Widersprüche stammen aus späteren Verfälschungen durch die Anhänger, nicht von den Manifestationen selbst.`,
          objectionBy: 'Moojan Momen (sinngemäß)',
          answer: `Woran erkennt man dann, was echt ist? Die Antwort lautet am Ende: an der Übereinstimmung mit Baha'u'llah – das ist ein Zirkel. Für Jesus haben wir sehr frühe Quellen (Paulusbriefe etwa 20–25 Jahre nach seinem Tod), und der Koran beansprucht vollkommene Bewahrung. Du müsstest also sagen, dass sowohl die frühesten christlichen Quellen als auch der Koran in der Frage der Kreuzigung „verfälscht" sind. Das ist keine Harmonie, sondern ein Überstimmen beider.`,
          followUps: [
            {
              id: 'symbolisch-verstehen',
              objection: `Viele Aussagen sind eben symbolisch zu verstehen – Kreuzigung, Auferstehung, Wiederkunft auf den Wolken.`,
              objectionBy: 'Baha\'u\'llah (Kitab-i-Iqan)',
              answer: `Wenn jeder Widerspruch durch symbolische Deutung aufgelöst werden kann, ist die Theorie nicht mehr überprüfbar – sie kann alles schlucken. Und es bedeutet: Jesus wird erst angenommen, nachdem man umgedeutet hat, was er und seine Zeugen sagten („Ein Geist hat nicht Fleisch und Bein, wie ihr seht, dass ich habe", Lk 24,39). Dasselbe geschieht mit Mohammeds Titel „Siegel der Propheten" (33,40).`,
              followUps: [
                {
                  id: 'christen-auch-typologie',
                  objection: `Ihr Christen deutet das Alte Testament doch auch symbolisch – als Vorausbild auf Christus.`,
                  objectionBy: 'Moojan Momen (sinngemäß)',
                  answer: `Die alexandrinische Auslegung liest wörtlich **und** geistlich – der geistliche Sinn hebt den geschichtlichen nicht auf. Christen sagen nicht, der Auszug aus Ägypten habe nicht stattgefunden, weil er ein Bild der Taufe ist. Die Bahai-Deutung dagegen ersetzt den wörtlichen Sinn: Die Auferstehung sei eben nicht leiblich gewesen. Das ist nicht Vertiefung, sondern Verneinung.`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'wiederkunft-baha',
      objection: `Baha'u'llah ist die Wiederkunft Christi. Er kam „in der Herrlichkeit des Vaters" – sein Name bedeutet „Herrlichkeit Gottes".`,
      objectionBy: 'Shoghi Effendi (Linie)',
      answer: `Jesus hat genau diese Situation vorhergesagt: „Wenn jemand zu euch sagen wird: Siehe, hier ist Christus! … so sollt ihr's nicht glauben … Denn wie der Blitz ausgeht vom Aufgang und scheint bis zum Niedergang, so wird das Kommen des Menschensohnes sein" (Mt 24,23–27). Die Engel sagten: „Dieser Jesus … wird so kommen, wie ihr ihn gesehen habt" (Apg 1,11) – derselbe, sichtbar, leiblich. Nicht ein anderer Mann, geboren 1817 in Teheran.`,
      followUps: [
        {
          id: 'juden-wie-christen',
          objection: `Auch die Juden erwarteten den Messias buchstäblich und haben Jesus deshalb verpasst. Ihr macht denselben Fehler.`,
          objectionBy: 'Abdu\'l-Baha (Linie)',
          answer: `Ein ernster Einwand. Aber Jesus erfüllte die Verheißungen in konkreter Geschichte: aus Davids Geschlecht, geboren in Bethlehem, als leidender Gottesknecht gestorben und auferstanden. Und er hat selbst die Art seiner Wiederkunft beschrieben und vor Nachfolgern mit Anspruch gewarnt. Die Juden, die Jesus annahmen, mussten keine wörtliche Erfüllung leugnen – sie sahen wörtliche Erfüllung **und** tieferen Sinn. Die Bahai-Deutung muss die wörtliche Wiederkunft leugnen.`,
          followUps: [
            {
              id: 'wolken-sind-schleier',
              objection: `Die „Wolken" sind Schleier des Unglaubens, und der „Blitz vom Aufgang zum Niedergang" ist die Offenbarung, die von Persien aus in den Westen geht.`,
              objectionBy: 'Baha\'u\'llah (Kitab-i-Iqan)',
              answer: `Das ist geistreich, aber beliebig. Mit dieser Methode könnte jeder Anwärter der wiedergekommene Christus sein – und genau davor hat Jesus gewarnt. Vor allem wäre Baha'u'llah dann nicht „dieser Jesus" (Apg 1,11), sondern eine andere Person. Die christliche Hoffnung ist aber die Wiederbegegnung mit demselben Herrn, der für uns gestorben ist und die Wundmale trägt (Joh 20,27).`,
              questionsBack: [`Nach welchem Kriterium wäre jemand, der sich als wiedergekommener Christus ausgibt, als falscher Christus zu erkennen – wenn alle Zeichen symbolisch sind?`],
            },
          ],
        },
      ],
    },
    {
      id: 'ideale-zeitalter',
      objection: `Die Bahai lehren die Einheit der Menschheit, die Gleichheit von Mann und Frau, die Harmonie von Wissenschaft und Religion und den Weltfrieden. Das ist die Religion für unser Zeitalter.`,
      objectionBy: 'Abdu\'l-Baha',
      answer: `Diese Ideale bejahe ich gerne – Christen teilen sie (Gal 3,28; Apg 17,26). Aber Ideale beweisen keine Offenbarung; viele davon sind in der Geschichte gerade aus dem Einfluss des Evangeliums erwachsen. Und eine ehrliche Frage: Warum sind Frauen von der Mitgliedschaft im Universalen Haus der Gerechtigkeit, dem höchsten Leitungsorgan der Bahai, ausgeschlossen?`,
      followUps: [
        {
          id: 'grund-wird-klar',
          objection: `Abdu'l-Baha hat gesagt, der Grund dafür werde in der Zukunft klar werden.`,
          objectionBy: 'Moojan Momen (sinngemäß)',
          answer: `Ich respektiere, dass Bahai ihren Leitern hier vertrauen. Dann beruht aber auch die Aussage „Bahai ist die Religion der Vernunft und der Gleichheit" an diesem Punkt auf Vertrauen in eine Autorität – wie bei anderen Religionen auch. Die entscheidende Frage bleibt ohnehin eine Wahrheitsfrage: Ist Jesus leiblich auferstanden? Und erfüllt Baha'u'llah Jesu eigene Worte über seine Wiederkunft?`,
        },
      ],
    },
    {
      id: 'bahai-inklusiv',
      objection: `Ihr Christen seid exklusiv. Die Bahai-Religion schließt alle Religionen ein.`,
      objectionBy: 'Moojan Momen',
      answer: `Auch die Bahai-Religion schließt aus: Sie erklärt jeden, der vor Ablauf von tausend Jahren eine neue Offenbarung beansprucht, zum „lügnerischen Betrüger" (Kitab-i-Aqdas 37), und sie verwirft das Selbstverständnis der Christen (leibliche Auferstehung), der Muslime (Mohammed als letzter Prophet) und der Buddhisten (kein Schöpfer). Einschließen durch Umdeuten ist auch eine Form von Exklusivität.`,
      followUps: [
        {
          id: 'warum-mit-jesus-enden',
          objection: `Aber Fortschritt ist doch Gottes Prinzip. Warum sollte die Offenbarung ausgerechnet mit Jesus enden?`,
          objectionBy: 'Shoghi Effendi (Linie)',
          answer: `Wegen dessen, wer Jesus ist: nicht ein Bote unter anderen, sondern der Sohn, Gottes letztes Wort (Hebr 1,1–2). Wenn Gott selbst gekommen ist, welche höhere Offenbarung sollte folgen? Das Schema einer Prophetenkette ist übrigens alt: Mani stellte sich im 3. Jahrhundert als letzten Gesandten nach Buddha, Zarathustra und Jesus vor, und seine Schriften wurden gerade in Ägypten auf Koptisch überliefert. Und nach eurer eigenen Logik wird auch Baha'u'llah einmal überholt sein – warum sollte ich mich ihm endgültig anvertrauen?`,
          questionsBack: [`Wenn nach tausend Jahren eine neue Manifestation kommt – ist dann Baha'u'llahs Botschaft nicht ebenso vorläufig?`],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Ist Jesus am Kreuz gestorben – ja oder nein? Und was sagt dann der Koran, den ihr ebenfalls als Offenbarung anerkennt?`,
    `Woran würdest du einen falschen Christus erkennen, wenn alle Zeichen der Wiederkunft symbolisch sind?`,
    `Ist Baha'u'llah „dieser Jesus" aus Apg 1,11 – oder eine andere Person?`,
    `Lehrte der Buddha einen Schöpfergott? Wenn nicht – wie passt er in die Reihe der Manifestationen?`,
  ],
  avoid: [
    `Rede nicht abfällig über Bahai – sie werden im Iran bis heute schwer verfolgt. Christen sollten für ihre Religionsfreiheit eintreten.`,
    `Unterstelle Bahai keine bösen Absichten; ihre Sehnsucht nach Einheit und Frieden ist aufrichtig.`,
    `Behaupte nicht, Bahai lehnten die Kreuzigung ab – sie erkennen sie an (im Unterschied zum Islam); ihr Streitpunkt ist die leibliche Auferstehung und die Wiederkunft.`,
  ],
  concessions: [
    `Die Ideale der Einheit der Menschheit, der Bildung und des Friedens sind gut und mit dem Evangelium vereinbar.`,
    `Christen haben selbst oft Spaltung und Feindschaft gelebt, statt die Einheit, um die Jesus betete (Joh 17,21).`,
    `Die Leidensgeschichte der Bahai im Iran verdient Mitgefühl und Solidarität.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Winfried Corduan', work: 'Neighboring Faiths', year: '2. Aufl. 2012', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'William McElwee Miller', work: 'The Baha\'i Faith: Its History and Teachings', year: '1974', status: 'paraphrase', note: 'Kritische Darstellung eines presbyterianischen Iran-Missionars.' },
    { kind: 'fachliteratur', author: 'Francis J. Beckwith', work: 'Baha\'i', year: '1985', status: 'paraphrase' },
    { kind: 'gegner', author: 'Moojan Momen', work: 'The Baha\'i Faith: A Beginner\'s Guide', year: '2008', status: 'paraphrase', note: 'Darstellung aus Bahai-Sicht – zum fairen Verständnis.' },
  ],
  difficulty: 2,
  tags: ['Bahai', 'Baha\'u\'llah', 'fortschreitende Offenbarung', 'Wiederkunft Christi', 'Mani'],
  related: [
    'islam-kreuzigung/nicht-gekreuzigt-4-157',
    'islam-mohammed/mohammed-wahrer-prophet',
    'pluralismus/alle-religionen-gleich-wahr',
    'auferstehung/halluzinationen',
    'mormonen/grosser-abfall',
  ],
};

export default claim;
