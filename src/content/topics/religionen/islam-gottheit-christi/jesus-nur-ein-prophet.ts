import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'jesus-nur-ein-prophet',
  title: `„Jesus ist im Islam ein Prophet wie die anderen."`,
  proponents: [
    { name: 'Shabir Ally', role: 'Islamischer Apologet, Let the Quran Speak', work: 'Debatten „Jesus in Islam and Christianity"' },
    { name: 'Jamal Badawi', role: 'Islamischer Gelehrter, Halifax', work: 'Vortragsreihe „Jesus in the Qur\'an"' },
    { name: 'Zakir Naik', role: 'Islamischer Prediger, Peace TV', work: 'Vorträge „Jesus in Islam"' },
    { name: 'Tarif Khalidi', role: 'Historiker, American University of Beirut', work: 'The Muslim Jesus (2001) – wissenschaftliche Sammlung islamischer Jesusüberlieferungen' },
  ],
  steelman: `Muslime lieben und ehren Jesus mehr als viele Christen: Kein Muslim ist Muslim, der nicht an Jesus glaubt. Der Koran bezeugt seine Jungfrauengeburt, seine Wunder, seinen Ehrentitel „Messias" und seine Wiederkunft. Aber all das macht ihn nicht zu Gott. Adam wurde ohne Vater **und** Mutter erschaffen (3:59); Abraham ist „Freund Allahs" (4:125), Mose sprach mit Gott (4:164). Jeder Prophet hat seine Auszeichnung. „Wir machen keinen Unterschied zwischen einem von ihnen" (2:136). Jesus selbst sagt im Koran: „Ich bin Allahs Diener" (19:30). Wer ihn über einen Propheten erhebt, ehrt ihn nicht, sondern verfälscht ihn.`,
  biblical: {
    summary: `Das Evangelium zeigt Jesus als Propheten (Lk 24,19; Joh 6,14) – aber nicht als „einen unter vielen". Gott sprach früher „durch die Propheten", zuletzt „durch den Sohn, durch welchen er auch die Welt gemacht hat" (Hebr 1,1–2). Im Gleichnis vom Weinberg ist Jesus nicht ein weiterer Knecht, sondern der Sohn und Erbe (Mk 12,6). Er ist „mehr als Jona" und „mehr als Salomo" (Mt 12,41–42), größer als der Tempel (Mt 12,6), Herr des Sabbats (Mk 2,28). Johannes der Täufer, der größte der Propheten (Mt 11,11), hält sich nicht für würdig, ihm die Schuhriemen zu lösen (Mk 1,7).`,
    detail: `Für das Gespräch mit Muslimen ist die offensive Strategie fruchtbar: Statt sofort über die Bibel zu streiten, frag, was der **Koran selbst** über Jesus sagt – und vergleiche es mit dem, was er über andere Propheten, auch über Muhammad, sagt. Der koranische Jesus trägt Merkmale, die in der Bibel Gott bzw. dem Messias zukommen: Wort Gottes, Geist von Gott, Schöpfer von Leben, sündlos, lebendig bei Gott, kommender Richter. Das ist eine Brücke zum Evangelium (vgl. 10:94; 5:47).`,
    sources: [
      { kind: 'bibel', work: 'Hebräer', ref: '1,1–2', quote: `Nachdem vorzeiten Gott manchmal und mancherleiweise geredet hat zu den Vätern durch die Propheten, hat er am letzten in diesen Tagen zu uns geredet durch den Sohn, welchen er gesetzt hat zum Erben über alles, durch welchen er auch die Welt gemacht hat`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Matthäus', ref: '12,41–42', quote: `… Und siehe, hier ist mehr denn Jona … Und siehe, hier ist mehr denn Salomo.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Markus', ref: '1,7', quote: `Es kommt einer nach mir, der ist stärker denn ich, dem ich nicht genugsam bin, daß ich mich vor ihm bücke und die Riemen seiner Schuhe auflöse.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die Kirche bekennt Jesus als „Propheten, Priester und König" – als Prophet aber in einzigartiger Weise: Er bringt nicht nur Gottes Wort, er **ist** Gottes Wort (Joh 1,1.14). Die arabischsprachigen Väter haben schon im 8. und 9. Jahrhundert den Koran als Brücke benutzt: Timotheus I. erklärte dem Kalifen al-Mahdi, dass der Koran Jesus „Wort Gottes und Geist von ihm" nenne – genau das, was Christen bekennen. Johannes von Damaskus fragte, wie Muslime Christus „Wort und Geist Gottes" nennen und ihn dennoch für ein bloßes Geschöpf halten könnten.`,
    detail: `Die koptische Tradition des Gesprächs – von Severus ibn al-Muqaffa' bis zu Abuna Zakaria Botros – geht diesen Weg: Sie nimmt die koranischen Ehrentitel Jesu ernst und fragt behutsam, was sie bedeuten. Dabei gilt: Nicht der Koran ist die Grundlage des christlichen Glaubens, aber er kann zur Frage führen, warum Jesus selbst im Koran so herausragt.`,
    sources: [
      { kind: 'kirchenvater', author: 'Timotheus I.', work: 'Dialog mit dem Kalifen al-Mahdi', year: '781/782', status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Johannes von Damaskus', work: 'Über die Häresien', ref: 'Kap. 100', status: 'paraphrase' },
    ],
  },
  quickAnswer: `Der Koran selbst hebt Jesus über alle Propheten hinaus: Er nennt ihn „Wort Allahs" und „Geist von Ihm" (4:171), „rein/sündlos" (19:19), er erschafft Vögel aus Ton und haucht ihnen Leben ein (3:49), er lebt bei Gott (4:158) und kommt als Richter wieder. Muhammad dagegen wird aufgefordert, um Vergebung für seine Sünde zu bitten (47:19; 48:2), und sagt: „Ich weiß nicht, was mit mir geschehen wird" (46:9). Wer ist hier „nur ein Prophet"?`,
  keyPoints: [
    `**Wort Gottes** (*kalimatuhū*, 4:171; „ein Wort von Ihm, sein Name ist der Messias", 3:45) – kein anderer Prophet trägt diesen Titel.`,
    `**Geist von Ihm** (*rūḥun minhu*, 4:171) und vom Heiligen Geist gestärkt (2:87; 2:253).`,
    `**Sündlos:** „ein reiner Knabe" (*ġulāman zakiyyan*, 19:19); nach Bukhari 3431 wurden allein Maria und ihr Sohn bei der Geburt nicht vom Satan berührt.`,
    `**Schöpferisches Handeln:** Er „erschafft" (*akhluqu*) aus Ton Vögel und haucht ihnen Leben ein (3:49; 5:110) – wie Gott bei Adam.`,
    `**Lebendig bei Gott und kommender Richter:** Allah hat ihn „zu sich erhoben" (4:158); er ist „Wissen/Zeichen der Stunde" (43:61) und kehrt als gerechter Richter zurück (Bukhari 3448).`,
    `**Muhammad dagegen** wird aufgefordert, für seine Sünde um Vergebung zu bitten (40:55; 47:19; 48:2) und weiß nicht, was mit ihm geschehen wird (46:9).`,
  ],
  voices: [
    {
      person: 'zakaria-botros',
      role: 'als koptischer Priester und Kenner der islamischen Quellen',
      text: `Abuna Zakaria Botros hat in seinen arabischen Sendungen immer wieder die koranischen Ehrentitel Jesu zusammengestellt und gefragt: Wer ist dieser Jesus, den der Koran „Wort Gottes" und „Geist von Gott" nennt, der ohne Sünde ist, Tote erweckt, Leben erschafft und zum Gericht wiederkommt? Er weist auf die grammatische Besonderheit in 3:45 hin: „ein Wort von Ihm (*kalima*, weiblich), **sein** Name (*ismuhū*, männlich) ist der Messias" – das Wort ist eine Person mit einem Namen.`,
      sources: [{ kind: 'koptisch', author: 'Zakaria Botros', work: 'TV-Reihe „Fragen über den Glauben"', status: 'paraphrase' }],
    },
    {
      person: 'timotheus-i',
      role: 'als Katholikos im Gespräch mit dem Kalifen',
      text: `Im Gespräch mit al-Mahdi verweist Timotheus I. darauf, dass der Koran Christus selbst „Wort Gottes und Geist von ihm" nennt. Wenn Gottes Wort und Geist ewig in Gott sind, dann ist der, den der Koran so nennt, nicht bloß ein Geschöpf. Timotheus führt das Gespräch mit großer Höflichkeit und spricht respektvoll über Muhammad, bleibt aber in der Sache klar: Christus ist das ewige Wort, nicht einer unter den Gesandten.`,
      sources: [{ kind: 'kirchenvater', author: 'Timotheus I.', work: 'Dialog mit dem Kalifen al-Mahdi', year: '781/782', status: 'paraphrase' }],
    },
    {
      person: 'qureshi',
      role: 'als ehemaliger Muslim',
      text: `Nabeel Qureshi beschreibt, wie er als Muslim Jesus aufrichtig liebte – als Propheten. Erst die Frage, warum der Koran Jesus Titel gibt, die er keinem anderen gibt, und warum die frühesten Quellen über Jesus ihn als Herrn anbeten, führte ihn dazu, das Neue Testament ernsthaft zu lesen. Für Qureshi war die Hochachtung des Islam vor Jesus eine Brücke: Wer Jesus ehrt, sollte wissen wollen, wer er nach den Zeugen seines Lebens war.`,
      sources: [{ kind: 'fachliteratur', author: 'Nabeel Qureshi', work: 'Seeking Allah, Finding Jesus', year: '2014', status: 'paraphrase' }],
    },
    {
      person: 'gabriel-reynolds',
      role: 'als Islamwissenschaftler',
      text: `Gabriel Said Reynolds zeigt, wie die koranischen Jesus-Erzählungen mit christlichen Traditionen der Spätantike verbunden sind: Die Vögel aus Ton finden sich im Kindheitsevangelium des Thomas, das Reden in der Wiege in syrisch-arabischen Kindheitserzählungen. Für die Apologetik bedeutet das zweierlei: Der Koran kennt christliche Überlieferungen über Jesus, die ihn als Lebensspender zeigen – und er übernimmt diese Bilder, während er zugleich die Gottheit bestreitet.`,
      sources: [{ kind: 'fachliteratur', author: 'Gabriel Said Reynolds', work: 'The Qur\'an and the Bible: Text and Commentary', year: '2018', ref: 'zu 3:49; 5:110; 19:29–33', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'kein-unterschied-zwischen-propheten',
      objection: `Der Koran sagt: „Wir machen keinen Unterschied zwischen einem von ihnen" (2:136). Alle Propheten sind gleich – Jesus ist einer von ihnen.`,
      objectionBy: 'Zakir Naik',
      answer: `2:136 sagt, dass man an alle Propheten glauben soll, ohne einen abzulehnen. Derselbe Koran sagt aber in 2:253: „Diese Gesandten – Wir haben einige von ihnen vor anderen bevorzugt" – und nennt im selben Atemzug Jesus, dem Gott „klare Beweise" gab und den er „mit dem Heiligen Geist stärkte". Und dann schau, was der Koran über Jesus sagt, das er über keinen anderen sagt.`,
      sources: [
        { kind: 'koran', work: 'Sure 2 (al-Baqara)', ref: '2:253', quote: `Diese Gesandten – Wir haben die einen von ihnen vor den anderen bevorzugt … Und Wir gaben Jesus, dem Sohn der Maria, die klaren Beweise und stärkten ihn mit dem Heiligen Geist.`, original: `tilka r-rusulu faḍḍalnā baʿḍahum ʿalā baʿḍ … wa-ātaynā ʿīsā bna maryama l-bayyināti wa-ayyadnāhu bi-rūḥi l-qudus`, translation: 'eigene Übersetzung', status: 'verbatim', url: 'https://quran.com/2/253' },
      ],
      followUps: [
        {
          id: 'jeder-prophet-hat-auszeichnung',
          objection: `Jeder Prophet hat eine Auszeichnung: Abraham ist der „Freund Allahs", Mose sprach mit Gott, Muhammad ist das Siegel der Propheten. Jesus' Titel sind nichts Besonderes.`,
          objectionBy: 'Jamal Badawi',
          answer: `Diese Titel beschreiben eine Beziehung oder einen Auftrag: Freund Gottes, Gesprächspartner Gottes, letzter Gesandter. Die Titel Jesu beschreiben seine **Herkunft und sein Wesen**: Er ist Wort Gottes und Geist von ihm, ohne Sünde, er erschafft Leben, er lebt bei Gott und kommt zum Gericht. Freund Gottes kann man werden – Wort Gottes ist man.`,
          followUps: [
            {
              id: 'mohammed-herr-der-adamskinder',
              objection: `Muhammad ist der Herr der Kinder Adams und der Beste der Schöpfung, wie die Hadithe sagen. Er steht über Jesus.`,
              objectionBy: 'Islamischer Prediger',
              answer: `Dann frag die Quellen selbst: Der Koran fordert Muhammad auf, um Vergebung für seine Sünde zu bitten (47:19), und sagt, Gott vergebe ihm „das Frühere und das Spätere" seiner Sünden (48:2). Nach Bukhari 6307 bat Muhammad mehr als siebzigmal am Tag um Vergebung. In der großen Fürsprache-Überlieferung am Jüngsten Tag nennt jeder Prophet – Adam, Noah, Abraham, Mose – eine Verfehlung, derentwegen er nicht vor Gott treten könne; nur Jesus nennt keine Sünde. Wer ist hier der Sündlose?`,
              sources: [
                { kind: 'koran', work: 'Sure 47 (Muhammad)', ref: '47:19', quote: `So wisse, dass es keinen Gott gibt außer Allah, und bitte um Vergebung für deine Sünde und für die gläubigen Männer und Frauen.`, original: `wa-staghfir li-dhanbika wa-li-l-muʾminīna wa-l-muʾmināt`, translation: 'eigene Übersetzung', status: 'verbatim', url: 'https://quran.com/47/19' },
                { kind: 'koran', work: 'Sure 48 (al-Fath)', ref: '48:2', quote: `… damit Allah dir vergebe, was von deiner Sünde vorausging und was noch folgt.`, original: `li-yaghfira laka llāhu mā taqaddama min dhanbika wa-mā taʾakhkhar`, translation: 'eigene Übersetzung', status: 'verbatim', url: 'https://quran.com/48/2' },
                { kind: 'hadith', work: 'Sahih al-Bukhari', ref: '6307', quote: `Bei Allah, ich bitte Allah um Vergebung und wende mich Ihm in Reue zu, mehr als siebzigmal am Tag.`, translation: 'sinngemäß', status: 'paraphrase', url: 'https://sunnah.com/bukhari:6307' },
                { kind: 'hadith', work: 'Sahih al-Bukhari', ref: '4476 (Fürsprache-Hadith; Parallelen u. a. 7510)', quote: `Die Menschen gehen am Tag der Auferstehung zu Adam, Noah, Abraham und Mose; jeder erwähnt eine eigene Verfehlung und verweist weiter. Jesus verweist auf Muhammad, ohne eine Sünde zu nennen.`, translation: 'sinngemäß zusammengefasst', status: 'paraphrase', url: 'https://sunnah.com/bukhari:4476', note: 'Nummer nach sunnah.com-Zählung geprüft (2026): Buch des Tafsir, Kapitel zu 2:31 („Und Er lehrte Adam alle Namen"), Bericht des Anas. Jesus verweist dort auf Muhammad als den Diener, dem Allah seine frühere und spätere Schuld vergeben hat.' },
              ],
              questionsBack: [`Warum nennt Jesus in der Fürsprache-Überlieferung als einziger keine eigene Sünde?`],
              followUps: [
                {
                  id: 'isma-nur-kleine-versehen',
                  objection: `Die Propheten sind nach sunnitischer Lehre vor großen Sünden bewahrt (ʿiṣma). Was der Koran *dhanb* nennt, sind höchstens kleine Versehen oder Dinge, die für einen Propheten unter seinem hohen Rang lagen. Und 47:19 meint eigentlich die Sünden der Gemeinde.`,
                  objectionBy: 'Yasir Qadhi',
                  answer: `Ich will Muhammad nicht als großen Sünder hinstellen – das ist nicht mein Punkt. Aber der Vers unterscheidet selbst: „für deine Sünde **und** für die gläubigen Männer und Frauen" (47:19). Wenn *dhanb* bei Muhammad, Adam und Mose ein „Versehen unterhalb ihres Rangs" ist, dann bleibt die Frage: Warum wird Jesus im Koran und in den Hadithen nie ein solches Versehen zugeschrieben – sondern ausdrücklich „rein" (*zakiyy*, 19:19) genannt und als einziger mit seiner Mutter vor der Berührung Satans bei der Geburt bewahrt (Bukhari 3431)? Selbst innerhalb deiner Quellen steht Jesus allein.`,
                  detail: `Die Lehre von der ʿiṣma der Propheten wurde von den islamischen Theologen unterschiedlich weit gefasst; viele Exegeten deuten Verse wie 47:19 und 48:2 so, dass sie das Unterlassen des Besseren oder die Sünden der Gemeinde meinen. Das ist eine legitime innerislamische Auslegung – im Gespräch solltest du sie respektvoll anerkennen. Dein Argument hängt aber nicht daran, wie schwer die Verfehlungen der anderen Propheten waren, sondern an der auffälligen Ausnahme: Jesus ist der einzige, bei dem die Quellen überhaupt keine Verfehlung nennen. Das passt zu dem, was das Neue Testament sagt: „der keine Sünde getan hat" (1 Petr 2,22), „versucht in allem wie wir, doch ohne Sünde" (Hebr 4,15).`,
                  sources: [
                    { kind: 'koran', work: 'Sure 19 (Maryam)', ref: '19:19', quote: `Ich bin nur der Gesandte deines Herrn, um dir einen reinen Jungen zu schenken.`, original: `li-ahaba laki ghulāman zakiyyā`, translation: 'eigene Übersetzung', status: 'verbatim', url: 'https://quran.com/19/19' },
                    { kind: 'hadith', work: 'Sahih al-Bukhari', ref: '3431', quote: `Es gibt kein Neugeborenes, das der Satan bei seiner Geburt nicht berührt, sodass es schreit – außer Maria und ihrem Sohn.`, translation: 'sinngemäß', status: 'paraphrase', url: 'https://sunnah.com/bukhari:3431' },
                    { kind: 'bibel', work: 'Hebräer', ref: '4,15', quote: `… sondern der versucht ist allenthalben gleichwie wir, doch ohne Sünde.`, translation: 'Luther 1912', status: 'verbatim' },
                  ],
                  questionsBack: [
                    `Kannst du eine Stelle im Koran oder in den Hadithen nennen, die Jesus eine Sünde oder ein Versehen zuschreibt?`,
                    `Wenn nur Jesus ganz ohne Verfehlung ist – was sagt das über ihn?`,
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'kalima-heisst-kun',
      objection: `„Wort Allahs" bedeutet nur, dass Jesus durch Allahs Befehl „Sei!" (kun) erschaffen wurde – wie Adam (3:59; 3:47). Daran ist nichts Göttliches.`,
      objectionBy: 'Shabir Ally',
      answer: `Durch das „Sei!" ist **alles** erschaffen – Himmel, Erde, jeder Mensch (36:82). Trotzdem nennt der Koran nur Jesus „Sein Wort" (*kalimatuhū*, 4:171) und „ein Wort von Ihm, dessen Name der Messias ist" (3:45). Wenn „Wort" nur „durch das Wort erschaffen" hieße, wäre jeder Mensch „Wort Gottes". Der Koran sagt es aber nur von einem.`,
      sources: [
        { kind: 'koran', work: 'Sure 3 (Al Imran)', ref: '3:45', quote: `Als die Engel sagten: „O Maria, Allah verkündet dir ein Wort von Ihm, dessen Name der Messias Jesus, Sohn der Maria, ist – angesehen im Diesseits und Jenseits und einer der Nahegestellten."`, original: `inna llāha yubashshiruki bi-kalimatin minhu smuhu l-masīḥu ʿīsā bnu maryam`, translation: 'eigene Übersetzung', status: 'verbatim', url: 'https://quran.com/3/45' },
        { kind: 'koran', work: 'Sure 36 (Ya-Sin)', ref: '36:82', quote: `Sein Befehl, wenn Er etwas will, ist nur, dass Er zu ihm sagt: „Sei!", und so ist es.`, original: `innamā amruhū idhā arāda shayʾan an yaqūla lahū kun fa-yakūn`, translation: 'eigene Übersetzung', status: 'verbatim', url: 'https://quran.com/36/82' },
      ],
      followUps: [
        {
          id: 'ismuhu-grammatik',
          objection: `Das Pronomen in „sein Name" bezieht sich auf Jesus, nicht auf das Wort. Daraus kannst du nichts ableiten.`,
          objectionBy: 'Arabischkundiger muslimischer Apologet',
          answer: `Genau das ist der Punkt: *kalima* („Wort") ist im Arabischen weiblich, das Pronomen in *ismuhū* („sein Name") männlich. Die Exegeten erklären das damit, dass das „Wort" hier eine Person meint – Jesus. Das bedeutet: Der Koran identifiziert das Wort mit der Person. Das „Wort von Ihm" hat einen Namen – den Messias. Genau das sagt Johannes: „Das Wort ward Fleisch."`,
          detail: `Man sollte hier nicht überziehen: Die männliche Kongruenz nach Sinn (*ʿalā l-maʿnā*) ist im Arabischen möglich und erklärt sich grammatisch. Aber gerade diese Erklärung bestätigt, dass die Person Jesus selbst als „Wort" bezeichnet wird – nicht nur der Befehl, der ihn hervorbrachte.`,
          followUps: [
            {
              id: 'kalima-yahya-3-39',
              objection: `Auch Johannes der Täufer (Yahya) wird verkündet als einer, der „ein Wort von Allah bestätigt" (3:39). „Wort" ist im Koran einfach ein Ausdruck für Gottes schöpferisches Handeln – ihr macht daraus zu viel.`,
              objectionBy: 'Ali Ataie',
              answer: `Lies 3:39 genau: Yahya wird nicht selbst „Wort" genannt, sondern er soll „ein Wort von Allah bestätigen" (*muṣaddiqan bi-kalimatin mina llāh*). Und wen bestätigt er? Die großen Exegeten, an ihrer Spitze at-Tabari, sagen: Jesus. Damit stützt der Vers unser Argument: Johannes der Täufer bezeugt Jesus als „das Wort von Gott" – genau wie im Johannesevangelium, wo der Täufer auf das Wort zeigt, das Fleisch geworden ist (Joh 1,6–15).`,
              detail: `At-Tabari führt in seinem Tafsir zu 3:39 zahlreiche Überlieferungen (u. a. von Ibn ʿAbbas, Mujahid, Qatada) an, nach denen mit der *kalima* in diesem Vers ʿĪsā ibn Maryam gemeint ist. Damit ist der Gebrauch von „Wort" für Jesus im Koran keine Ausnahme, sondern ein fester Titel. Fair bleiben: Muslimische Exegeten erklären den Titel damit, dass Jesus durch Gottes Wort „Sei!" ohne Vater entstand. Die Frage bleibt, warum dann nicht auch Adam, der ebenfalls ohne Vater (und Mutter) durch „Sei!" entstand (3:59), „Wort Gottes" heißt.`,
              voices: [
                { person: 'zakaria-botros', role: 'als Kenner des Korans und der Tafsir-Literatur', text: `Zakaria Botros weist in seinen Sendungen immer wieder darauf hin, dass der Koran Jesus Titel gibt, die er keinem anderen Propheten gibt – „Wort Allahs" und „Geist von Ihm". Er fordert Muslime auf, die klassischen Kommentare selbst zu lesen, die diese Titel auf Jesus beziehen, und zu fragen, was es bedeutet, dass Gottes Wort einen Namen trägt.` },
              ],
              sources: [
                { kind: 'koran', work: 'Sure 3 (Al Imran)', ref: '3:39', quote: `Allah verkündet dir Yahya, der ein Wort von Allah bestätigen wird, einen Herrn, einen Keuschen und einen Propheten von den Rechtschaffenen.`, original: `anna llāha yubashshiruka bi-yaḥyā muṣaddiqan bi-kalimatin mina llāhi`, translation: 'eigene Übersetzung', status: 'verbatim', url: 'https://quran.com/3/39' },
                { kind: 'hadith', author: 'Muhammad ibn Jarir at-Tabari', work: 'Jāmiʿ al-bayān (Tafsir)', ref: 'zu 3:39', year: 'gest. 923', status: 'paraphrase', note: 'At-Tabari referiert die Deutung der kalima in 3:39 auf Jesus nach mehreren frühen Autoritäten.' },
              ],
              questionsBack: [
                `Wen bestätigt Yahya nach at-Tabari in 3:39?`,
                `Adam entstand ebenfalls durch „Sei!" ohne Vater – warum heißt er im Koran nie „Wort Gottes"?`,
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'ruh-minhu-auch-adam',
      objection: `„Geist von Ihm" ist nichts Besonderes: Auch in Adam hat Allah „von Seinem Geist" eingehaucht (15:29; 32:9), und in 45:13 heißt es, alles in den Himmeln und auf der Erde sei „von Ihm".`,
      objectionBy: 'Jamal Badawi',
      answer: `Ein fairer Einwand – „von Ihm" allein beweist keine Gottheit, das geben wir zu. Das Argument ist kumulativ: Nur Jesus wird zugleich „Wort Gottes" und „Geist von Ihm" genannt, nur er ist ohne Sünde, nur er erschafft Leben, nur er lebt bei Gott und kehrt zum Gericht zurück. Ein einzelner Titel kann geteilt sein – die Summe teilt kein anderer Prophet.`,
      followUps: [
        {
          id: 'null-plus-null-kumulativ',
          objection: `Ein kumulatives Argument aus lauter schwachen Gliedern bleibt schwach. Null plus null plus null ist immer noch null. Jeder dieser Titel ist für sich erklärbar – also beweist ihre Summe auch nichts.`,
          objectionBy: 'Mohammed Hijab',
          answer: `Die Glieder sind nicht null – jedes ist eine echte Auffälligkeit, die der Koran nur Jesus zuschreibt. Und so arbeitet jede historische und juristische Beweisführung: Ein einzelnes Indiz ist erklärbar, aber wenn ein Mensch als einziger ohne Vater geboren, als einziger „Wort Gottes" und „Geist von Ihm" genannt, als einziger sündlos, als einziger Leben schaffend, als einziger lebendig zu Gott erhoben und als einziger zum Gericht wiederkehrend beschrieben wird – dann braucht diese Häufung eine Erklärung. Die christliche Erklärung ist einfach: Der Koran bewahrt Reste dessen, was die Christen von Anfang an glaubten.`,
          detail: `Kumulative Argumente sind kein Zeichen von Schwäche, sondern Standard der Geschichtswissenschaft und des Rechts: Viele unabhängige Indizien, die in dieselbe Richtung weisen, erhöhen die Wahrscheinlichkeit einer Erklärung erheblich. Schon der ostsyrische Patriarch Timotheus I. hat dieses Argument im Gespräch mit dem Kalifen al-Mahdi (um 781) geführt: Wenn Christus Wort und Geist Gottes ist, wie der Koran sagt, dann kann er nicht ein bloßes Geschöpf sein, denn Gottes Wort und Geist sind von Gott nicht getrennt. Wichtig für dich: Mach daraus keinen „Beweis aus dem Koran für die Trinität". Das Argument zeigt nur, dass der Koran selbst Jesus über alle Propheten stellt – und dass die Frage „Wer ist er?" offen bleibt, bis man das Evangelium liest.`,
          voices: [
            { person: 'timotheus-i', role: 'im Gespräch mit dem Kalifen al-Mahdi', text: `Timotheus antwortete dem Kalifen, der Christus nur als Diener und Gesandten anerkennen wollte: Wenn Gottes Wort und Geist von Ewigkeit her bei Gott sind – und kein Muslim sagt, Gott sei je ohne Wort und Geist gewesen –, dann ist der, den der Koran „Wort und Geist Gottes" nennt, nicht von Gott zu trennen. Er führte das Gespräch mit großer Höflichkeit, und der Bericht darüber wurde unter Christen im Orient jahrhundertelang gelesen.` },
          ],
          sources: [
            { kind: 'kirchenvater', author: 'Timotheus I. (Patriarch der Kirche des Ostens)', work: 'Apologie vor dem Kalifen al-Mahdi (Dialog)', year: 'um 781', status: 'paraphrase', note: 'Englische Übersetzung von A. Mingana, Woodbrooke Studies 2 (1928).' },
          ],
          questionsBack: [
            `Welcher andere Prophet im Koran vereint auch nur drei dieser Eigenschaften auf sich?`,
            `Wenn jedes Indiz einzeln erklärbar ist – wie erklärst du, dass sie alle auf denselben einen Menschen fallen?`,
          ],
          followUps: [
            {
              id: 'nur-ein-diener-43-59',
              objection: `Der Koran beantwortet die Frage selbst: „Er ist nur ein Diener, dem Wir Gnade erwiesen und den Wir zum Beispiel für die Kinder Israels gemacht haben" (43:59). Das ist das letzte Wort über Jesus.`,
              objectionBy: 'Jamal Badawi',
              answer: `Dass Jesus Diener war, bestreiten wir nicht – er hat Knechtsgestalt angenommen (Phil 2,7) und sagte: „Der Menschensohn ist nicht gekommen, sich dienen zu lassen, sondern zu dienen" (Mk 10,45). Die Frage ist nicht, *ob* er diente, sondern *wer* da diente. Und hier zeigt sich eine Spannung im Koran selbst: Er sagt „nur ein Diener" und gibt ihm doch Titel, die kein Diener je trug. Diese Spannung löst der Koran nicht auf – das Evangelium schon: Das ewige Wort wurde Diener, um uns zu dienen.`,
              detail: `Historisch-kritisch arbeitende Forscher wie Gabriel Said Reynolds haben gezeigt, dass der Koran sich intensiv mit christlichen Aussagen über Jesus auseinandersetzt – oft in der Sprache syrischer Christen. Seine Titel für Jesus („Wort", „Geist", „Messias") stammen aus dieser christlichen Umwelt, werden aber in ein Prophetenbild eingeordnet, das sie nicht ganz fassen kann. Für das Gespräch: Erkenne respektvoll an, dass 43:59 für Muslime die Grenze zieht. Dann lade ein, die Frage an der Quelle zu prüfen, die der Koran selbst als Offenbarung anerkennt – dem Evangelium (5:46–47).`,
              voices: [
                { person: 'gabriel-reynolds', role: 'als Koranwissenschaftler (Notre Dame)', text: `Reynolds zeigt in seinen Studien, dass der Koran im Gespräch mit jüdischen und christlichen Traditionen steht und sie voraussetzt. Viele koranische Aussagen über Jesus lassen sich als Antwort auf christliche Bekenntnisse lesen; der Koran bejaht dabei manche Titel und verneint die Gottheit. Gerade diese Gesprächssituation erklärt, warum der Koran Jesus so hohe Titel gibt.` },
              ],
              sources: [
                { kind: 'koran', work: 'Sure 43 (az-Zukhruf)', ref: '43:59', quote: `Er ist nur ein Diener, dem Wir Gnade erwiesen und den Wir zu einem Beispiel für die Kinder Israels gemacht haben.`, original: `in huwa illā ʿabdun anʿamnā ʿalayhi`, translation: 'eigene Übersetzung', status: 'verbatim', url: 'https://quran.com/43/59' },
                { kind: 'fachliteratur', author: 'Gabriel Said Reynolds', work: 'The Qur\'an and the Bible: Text and Commentary', year: '2018', status: 'paraphrase' },
              ],
              questionsBack: [
                `Welcher „bloße Diener" wird von Gott „Sein Wort" genannt?`,
                `Bist du bereit, das Evangelium, das der Koran bestätigt, selbst zu lesen und zu prüfen, wer dieser Diener ist?`,
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'mit-allahs-erlaubnis',
      objection: `Alle Wunder Jesu geschahen „mit Allahs Erlaubnis" (bi-idhni llāh, 3:49). Jesus hatte keine eigene Macht. Das ist der Unterschied zwischen einem Propheten und Gott.`,
      objectionBy: 'Zakir Naik',
      answer: `Dass der Sohn in Einheit mit dem Vater handelt, sagen wir auch: „Der Sohn kann nichts von sich selber tun, sondern was er sieht den Vater tun" (Joh 5,19). Aber schau, **was** Jesus im Koran tut: Er formt aus Ton die Gestalt eines Vogels, haucht hinein, und er wird lebendig (3:49; 5:110). Das ist genau, was Gott mit Adam tat – aus Lehm geformt und von seinem Geist eingehaucht (15:28–29). Kein anderer Prophet tut im Koran, was Gott bei der Erschaffung des Menschen tat.`,
      sources: [
        { kind: 'koran', work: 'Sure 3 (Al Imran)', ref: '3:49', quote: `Ich erschaffe euch aus Ton etwas wie die Gestalt eines Vogels; dann hauche ich hinein, und es wird ein Vogel mit Allahs Erlaubnis. Und ich heile den Blindgeborenen und den Aussätzigen und mache Tote lebendig mit Allahs Erlaubnis.`, original: `annī akhluqu lakum mina ṭ-ṭīni ka-hayʾati ṭ-ṭayri fa-anfukhu fīhi fa-yakūnu ṭayran bi-idhni llāh`, translation: 'eigene Übersetzung', status: 'verbatim', url: 'https://quran.com/3/49' },
        { kind: 'koran', work: 'Sure 5 (al-Ma\'ida)', ref: '5:110', quote: `… und als du aus Ton etwas wie die Gestalt eines Vogels mit Meiner Erlaubnis erschufst und dann hineinhauchtest und es mit Meiner Erlaubnis ein Vogel wurde …`, original: `wa-idh takhluqu mina ṭ-ṭīni ka-hayʾati ṭ-ṭayri bi-idhnī`, translation: 'eigene Übersetzung', status: 'verbatim', url: 'https://quran.com/5/110' },
      ],
      followUps: [
        {
          id: 'auch-menschen-erschaffen',
          objection: `Allah ist „der beste der Schöpfer" (23:14) – also können auch andere in begrenztem Sinn „erschaffen". Das Wort khalaqa beweist nichts.`,
          objectionBy: 'Shabir Ally',
          answer: `Menschen können formen und herstellen – das stimmt. Aber Leben hervorbringen? Der Koran sagt selbst: „Diejenigen, die ihr neben Allah anruft, können nicht einmal eine Fliege erschaffen" (22:73). Jesus aber gibt im Koran einem Geschöpf Leben. Wenn das Erschaffen von Leben nach dem Koran ein Zeichen göttlicher Macht ist, warum wird es gerade Jesus zugeschrieben?`,
          sources: [
            { kind: 'koran', work: 'Sure 22 (al-Hajj)', ref: '22:73', quote: `Gewiss, diejenigen, die ihr neben Allah anruft, werden niemals eine Fliege erschaffen, auch wenn sie sich dafür zusammentäten.`, original: `inna lladhīna tadʿūna min dūni llāhi lan yakhluqū dhubāban`, translation: 'eigene Übersetzung', status: 'verbatim', url: 'https://quran.com/22/73' },
          ],
        },
      ],
    },
    {
      id: 'jesus-kommt-als-muslim-zurueck',
      objection: `Jesus wird zurückkehren, das Kreuz zerbrechen und nach dem Gesetz Muhammads richten (Bukhari 3448). Er ist also ein Anhänger Muhammads.`,
      objectionBy: 'Yasir Qadhi',
      answer: `Die Überlieferung sagt, Jesus werde als „gerechter Richter" (*ḥakam ʿadl*) herabkommen. Bedenke, was das bedeutet: Muhammad liegt in Medina begraben; Jesus lebt nach dem Koran bei Gott (4:158) und kehrt zurück, um die Welt zu richten. Der Koran nennt ihn „Wissen/Zeichen der Stunde" (43:61). Wer ist größer – der, der auf das Gericht wartet, oder der, der zum Gericht wiederkommt?`,
      sources: [
        { kind: 'hadith', work: 'Sahih al-Bukhari', ref: '3448', quote: `Bei Dem, in dessen Hand meine Seele ist, bald wird der Sohn der Maria unter euch herabsteigen als gerechter Richter; er wird das Kreuz zerbrechen, das Schwein töten und die Dschizya abschaffen …`, translation: 'sinngemäß', status: 'paraphrase', url: 'https://sunnah.com/bukhari:3448' },
        { kind: 'koran', work: 'Sure 4 (an-Nisa)', ref: '4:158', quote: `Vielmehr hat Allah ihn zu sich erhoben. Und Allah ist allmächtig und allweise.`, original: `bal rafaʿahu llāhu ilayhi`, translation: 'eigene Übersetzung', status: 'verbatim', url: 'https://quran.com/4/158' },
        { kind: 'koran', work: 'Sure 43 (az-Zukhruf)', ref: '43:61', quote: `Und er ist wahrlich ein Wissen (Zeichen) für die Stunde; so hegt keinen Zweifel an ihr.`, original: `wa-innahū la-ʿilmun li-s-sāʿa`, translation: 'eigene Übersetzung', status: 'verbatim', url: 'https://quran.com/43/61', note: 'Das Pronomen wird von den meisten Exegeten auf Jesus bezogen.' },
      ],
      followUps: [
        {
          id: 'mohammed-wahrer-groesser',
          objection: `Größe bemisst sich nicht danach, wer zuletzt kommt, sondern nach der Offenbarung. Muhammad brachte den Koran, das letzte Wort Gottes.`,
          objectionBy: 'Yasir Qadhi',
          answer: `Nach dem Koran brachte Muhammad eine Schrift. Nach dem Evangelium ist Jesus selbst das Wort Gottes, das Fleisch wurde – und der Koran nennt ihn „Wort Gottes". Das ist der Unterschied zwischen dem, der ein Buch überbringt, und dem, der das Wort ist. Ich lade dich ein: Lies das Evangelium, das der Koran den Christen als Maßstab bestätigt (5:47), und frage, wer dieser Jesus ist.`,
          questionsBack: [`Wenn der Koran sagt, die Leute des Evangeliums sollen nach dem urteilen, was Gott darin offenbart hat (5:47) – hast du das Evangelium einmal ganz gelesen?`],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Welchen anderen Propheten nennt der Koran „Wort Gottes" und „Geist von Ihm"?`,
    `Warum wurde nach Bukhari 3431 nur Jesus (mit Maria) bei der Geburt nicht vom Satan berührt?`,
    `Warum fordert der Koran Muhammad auf, für seine Sünde um Vergebung zu bitten, aber nie Jesus?`,
    `Welcher andere Prophet erschafft im Koran Leben und haucht ihm Geist ein?`,
    `Wer lebt heute bei Gott und wird zum Gericht wiederkommen?`,
  ],
  avoid: [
    `Nicht behaupten, der Koran lehre die Gottheit Jesu – er bestreitet sie ausdrücklich (5:72; 5:116). Der Punkt ist: Der Koran gibt Jesus Merkmale, die über einen Propheten hinausweisen.`,
    `Nicht über Muhammad spotten, wenn du die Verse über seine Sünden nennst. Bleib sachlich: „Was sagt der Koran über ihn – und was über Jesus?"`,
    `„Ruhun minhu" nicht als Einzelbeweis überladen – der Gegner nennt sofort 15:29.`,
  ],
  concessions: [
    `Muslime ehren Jesus aufrichtig; das sollte man anerkennen und als Gesprächsbrücke nutzen.`,
    `Viele Ehrentitel Jesu im Koran lassen sich islamisch-theologisch auch ohne Gottheit deuten; das Argument ist kumulativ, nicht ein einzelner Beweisvers.`,
    `Muslimische Gelehrte erklären die Bitten Muhammads um Vergebung meist als Ausdruck der Demut oder beziehen sie auf kleine Fehler; diese Deutung sollte man kennen und fair nennen.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Tarif Khalidi', work: 'The Muslim Jesus: Sayings and Stories in Islamic Literature', year: '2001', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Gabriel Said Reynolds', work: 'The Qur\'an and the Bible: Text and Commentary', year: '2018', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Nabeel Qureshi', work: 'Seeking Allah, Finding Jesus', year: '2014', status: 'paraphrase' },
  ],
  difficulty: 1,
  tags: ['Jesus im Koran', 'Wort Gottes', 'Sündlosigkeit', 'Offensive Apologetik'],
  related: [
    'islam-gottheit-christi/sohn-gottes-heisst-diener',
    'islam-trinitaet/trinitaet-ist-schirk',
    'islam-mohammed/mohammed-wahrer-prophet',
    'islam-dilemma/das-islamische-dilemma',
  ],
};

export default claim;
