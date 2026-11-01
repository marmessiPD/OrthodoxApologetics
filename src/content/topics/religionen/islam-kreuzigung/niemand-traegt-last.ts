import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'niemand-traegt-last',
  title: `„Niemand trägt die Last eines anderen (6:164) – stellvertretende Sühne ist ungerecht."`,
  proponents: [
    { name: 'Ahmed Deedat', role: 'Islamischer Apologet (1918–2005)', work: 'Crucifixion or Cruci-fiction?; Debatten' },
    { name: 'Shabir Ally', role: 'Islamischer Apologet, Let the Quran Speak', work: 'Debatten über Sühne und Vergebung' },
    { name: 'Hamza Andreas Tzortzis', role: 'Islamischer Apologet', work: 'The Divine Reality (2016)' },
    { name: 'Ibn Taymiyya', role: 'Hanbalitischer Gelehrter (1263–1328)', work: 'al-Jawāb aṣ-ṣaḥīḥ li-man baddala dīn al-Masīḥ' },
  ],
  steelman: `Fünfmal wiederholt der Koran einen Grundsatz der Gerechtigkeit: „Keine lasttragende Seele trägt die Last einer anderen" (6:164; 17:15; 35:18; 39:7; 53:38). Die Bibel selbst sagt dasselbe: „Der Sohn soll nicht tragen die Missetat des Vaters" (Ez 18,20; vgl. Dtn 24,16). Jedes menschliche Gericht würde es als Skandal betrachten, wenn ein Richter einen Mörder freispräche und stattdessen einen Unschuldigen hinrichten ließe – selbst wenn dieser sich freiwillig meldete. Die christliche Sühnelehre macht Gott zu einem Richter, der Blut sehen muss, bevor er vergibt, und bestraft dafür seinen eigenen unschuldigen Sohn. Der Islam ist klarer und gerechter: Jeder ist für seine Taten verantwortlich, und Gott vergibt dem, der bereut.`,
  biblical: {
    summary: `Die Bibel enthält **beides**: den Grundsatz persönlicher Verantwortung (Ez 18,20; Dtn 24,16) und die Verheißung des leidenden Gottesknechts, der „unsre Krankheit trug" und auf den „der HERR unser aller Sünde warf" (Jes 53,4–6). Das ist kein Widerspruch, denn es geht um Verschiedenes: Ez 18 verbietet, dass Menschen **gegen ihren Willen** für fremde Schuld bestraft werden (z. B. Kinder für ihre Väter). Jes 53 und das NT sprechen von einem, der sich **freiwillig** hingibt (Joh 10,18), der selbst ohne Sünde ist (2 Kor 5,21; 1 Petr 2,22) und der nicht ein Dritter ist, sondern Gott selbst in seinem Sohn: „Gott war in Christo und versöhnte die Welt mit ihm selber" (2 Kor 5,19).`,
    detail: `- **Jes 53,5–6.10–12:** „Er ist um unsrer Missetat willen verwundet … die Strafe liegt auf ihm, auf daß wir Frieden hätten." Der Knecht gibt sein Leben als Schuldopfer (*ascham*, 53,10).
- **Mk 10,45:** Jesus deutet seinen Tod als „Lösegeld (*lytron*) für viele".
- **Joh 10,11.18:** Der gute Hirte lässt sein Leben für die Schafe – niemand nimmt es ihm, er gibt es von sich aus.
- **Röm 5,8:** Nicht Gott wird durch das Opfer umgestimmt; Gott selbst „beweist seine Liebe" im Tod Christi.
- **Ez 18 im Kontext:** Gegen das Sprichwort „Die Väter haben Herlinge gegessen, und den Kindern sind die Zähne stumpf geworden" (18,2) – es geht um Generationenhaftung, nicht um freiwillige Hingabe.`,
    sources: [
      { kind: 'bibel', work: 'Hesekiel', ref: '18,20', quote: `Denn welche Seele sündigt, die soll sterben. Der Sohn soll nicht tragen die Missetat des Vaters, und der Vater soll nicht tragen die Missetat des Sohnes …`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Jesaja', ref: '53,5–6', quote: `Aber er ist um unsrer Missetat willen verwundet und um unsrer Sünde willen zerschlagen. Die Strafe liegt auf ihm, auf daß wir Frieden hätten, und durch seine Wunden sind wir geheilt. Wir gingen alle in der Irre wie Schafe, ein jeglicher sah auf seinen Weg; aber der HERR warf unser aller Sünde auf ihn.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '2. Korinther', ref: '5,19.21', quote: `Denn Gott war in Christo und versöhnte die Welt mit ihm selber … Denn er hat den, der von keiner Sünde wußte, für uns zur Sünde gemacht, auf daß wir würden in ihm die Gerechtigkeit, die vor Gott gilt.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '10,18', quote: `Niemand nimmt es von mir, sondern ich lasse es von mir selber. Ich habe Macht, es zu lassen, und habe Macht, es wiederzunehmen.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche versteht das Kreuz nicht als Bestrafung eines unschuldigen Dritten durch einen zornigen Gott, sondern als Tat der Liebe des dreieinigen Gottes: Der ewige Logos nimmt unsere Natur an, tritt als neues Haupt der Menschheit an unsere Stelle, nimmt den Tod – die Folge der Sünde – auf sich und besiegt ihn von innen (Athanasius). Er ist zugleich Opfer und Priester, das „Lamm Gottes" (Joh 1,29). Papst Schenuda III. erklärt in *Das Heil im orthodoxen Verständnis*: Weil die Sünde gegen den unendlichen Gott gerichtet ist, bedarf es einer unbegrenzten Sühne; darum musste der Erlöser Gott sein – und Mensch, um für Menschen sterben zu können.`,
    detail: `- **Athanasius** (De Incarnatione 8–9): Der Logos nahm einen sterblichen Leib an, „damit er, da alle dem Verderben des Todes verfallen waren, ihn für alle in den Tod gebe und dem Vater darbringe" – und so das Gesetz des Verderbens aufhebe.
- **Kyrill** sieht Christus als den neuen Adam: Was in Adam verloren ging, wird in Christus, dem Haupt, für alle, die mit ihm verbunden sind, wiederhergestellt (Röm 5,12–21; 1 Kor 15,22).
- Die Stellvertretung ist darum keine **äußere** Übertragung zwischen Fremden, sondern beruht auf **Einheit**: Christus ist unser Haupt, wir sind sein Leib; durch Taufe und Eucharistie haben wir Anteil an seinem Tod und Leben (Röm 6,3–5).`,
    sources: [
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Menschwerdung des Logos', ref: '8–9', year: 'ca. 318', quote: `Er nahm einen Leib an, der sterben konnte, damit er ihn, da alle dem Verderben des Todes verfallen waren, für alle in den Tod gebe und dem Vater darbringe.`, translation: 'eigene Übersetzung, sinngemäß', status: 'paraphrase' },
      { kind: 'koptisch', author: 'Papst Schenuda III.', work: 'Das Heil im orthodoxen Verständnis (Salvation in the Orthodox Concept)', status: 'paraphrase', note: 'Argument: Sünde gegen den Unbegrenzten erfordert unbegrenzte Sühne; daher muss der Erlöser Gott und Mensch sein.' },
    ],
  },
  quickAnswer: `6:164 meint, dass niemand gegen seinen Willen für fremde Schuld bestraft wird – das sagt die Bibel auch (Ez 18,20). Am Kreuz trägt aber nicht ein unfreiwilliger Dritter die Strafe, sondern Gott selbst kommt in seinem Sohn und gibt sich freiwillig hin. Und der Koran kennt das Prinzip der Auslösung selbst: Abrahams Sohn wurde durch ein „gewaltiges Schlachtopfer" ausgelöst (37:107). Wenn ein Widder einen Propheten-Sohn auslösen kann – warum nicht der Sohn Gottes die Menschheit?`,
  keyPoints: [
    `**Ez 18 und 6:164 verbieten Zwangshaftung**, nicht freiwillige Hingabe. Die Bibel enthält Ez 18 und Jes 53 nebeneinander – als Worte desselben Gottes.`,
    `**Christus ist kein Dritter:** „Gott war in Christo und versöhnte die Welt mit ihm selber" (2 Kor 5,19). Der Richter trägt selbst die Last.`,
    `**Freiwilligkeit:** „Niemand nimmt es von mir, sondern ich lasse es von mir selber" (Joh 10,18).`,
    `**Einheit statt Fremdübertragung:** Christus ist das neue Haupt der Menschheit (Röm 5; 1 Kor 15,22); seine Tat gilt denen, die mit ihm verbunden werden.`,
    `**Der Koran kennt Auslösung:** *wa-fadaināhu bi-dhibḥin ʿaẓīm* (37:107); *fidya* als Rechtsbegriff (2:184; 2:196); Verführer tragen „Lasten derer, die sie in die Irre führen" mit (16:25; 29:13).`,
    `**Koptische Sicht:** Das Kreuz ist Sieg über Tod und Verderben, nicht Besänftigung eines zornigen Vaters – die Liebe des dreieinigen Gottes trägt selbst die Folgen unserer Sünde.`,
  ],
  voices: [
    {
      person: 'athanasius',
      role: 'als Lehrer der Erlösung',
      text: `Athanasius beschreibt die Erlösung als Tat dessen, der die Menschheit erschaffen hat: Nur der Schöpfer-Logos konnte das Verderbene erneuern. Weil der Tod durch die Sünde Gesetz geworden war, nahm der Logos einen sterblichen Leib aus unserer Natur an und übergab ihn für alle dem Tod. Da er mit allen Menschen durch die gemeinsame Natur verbunden ist, wurde in seinem Leib der Tod für alle erschöpft – und durch seine Auferstehung allen die Unvergänglichkeit geschenkt. Stellvertretung ist hier nicht Rechtsfiktion, sondern Folge der Einheit von Schöpfer und Geschöpf in der Menschwerdung.`,
      sources: [{ kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Menschwerdung des Logos', ref: '8–10', status: 'paraphrase' }],
    },
    {
      person: 'shenouda-iii',
      role: 'als koptischer Papst',
      text: `Papst Schenuda III. erklärte das Heil in zahlreichen Vorträgen mit einem einfachen Gedankengang: Die Sünde richtet sich gegen Gott, der unbegrenzt ist; ihre Folge ist der Tod. Ein Geschöpf kann nur begrenzt sühnen. Ein Engel ist nicht Mensch und kann nicht für Menschen sterben; ein Mensch ist selbst Sünder. Darum wurde Gott Mensch: als Mensch konnte er sterben, als Gott war sein Opfer von unbegrenztem Wert. Schenuda betont zugleich, dass das Heil durch Glauben, Taufe, Buße und das Leben in der Kirche empfangen wird.`,
      sources: [{ kind: 'koptisch', author: 'Papst Schenuda III.', work: 'Das Heil im orthodoxen Verständnis', status: 'paraphrase' }],
    },
    {
      person: 'michael-brown',
      role: 'als Semitist und Kenner der jüdischen Einwände',
      text: `Michael Brown zeigt, dass das Prinzip stellvertretender Sühne tief in der hebräischen Bibel verwurzelt ist: im Opferkult (Lev 16–17), im Gottesknecht von Jes 53 und sogar in der jüdischen Tradition, nach der der Tod der Gerechten Sühne wirkt (so im Talmud zum Tod Mirjams und Aarons). Ez 18 hebe dieses Prinzip nicht auf, sondern richte sich gegen eine fatalistische Haltung, die Verantwortung auf die Väter schiebt.`,
      sources: [{ kind: 'fachliteratur', author: 'Michael L. Brown', work: 'Answering Jewish Objections to Jesus, Bd. 2', year: '2000', status: 'paraphrase' }],
    },
    {
      person: 'craig',
      role: 'als Religionsphilosoph',
      text: `William Lane Craig hat in *Atonement and the Death of Christ* untersucht, ob stellvertretende Strafe mit Gerechtigkeit vereinbar ist. Er verweist auf rechtliche Analogien (stellvertretende Haftung, Begnadigung) und vor allem darauf, dass im christlichen Verständnis Gott selbst – nicht ein unbeteiligter Dritter – die Strafe trägt. Aus koptischer Sicht ist seine stärker juristisch geprägte Darstellung zu ergänzen: Die Väter betonen den Sieg über Tod und Verderben und die Heilung der Natur. Craigs Analyse zeigt aber, dass der Ungerechtigkeits-Vorwurf philosophisch nicht greift.`,
      sources: [{ kind: 'fachliteratur', author: 'William Lane Craig', work: 'Atonement and the Death of Christ: An Exegetical, Historical, and Philosophical Exploration', year: '2020', status: 'paraphrase' }],
    },
    {
      person: 'david-wood',
      role: 'als Islam-Apologet',
      text: `David Wood weist in Debatten darauf hin, dass die islamischen Quellen selbst Formen der Lastübertragung kennen: Der Koran sagt, Verführer würden auch Lasten derer tragen, die sie irreführen (16:25), und ein Hadith in Sahih Muslim spricht davon, dass am Jüngsten Tag Juden und Christen als „Auslösung" für Muslime in die Hölle kommen. Muslimische Gelehrte deuten diese Texte unterschiedlich; Woods Punkt ist, dass der Grundsatz von 6:164 im Islam selbst nicht absolut verstanden wird.`,
      sources: [{ kind: 'fachliteratur', author: 'David Wood', work: 'Debatten und Videoreihen zu Sühne und Vergebung im Islam', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'unschuldigen-bestrafen-unrecht',
      objection: `Kein gerechter Richter lässt einen Unschuldigen für einen Schuldigen hinrichten – auch nicht, wenn sich der Unschuldige freiwillig meldet. Euer Gott handelt ungerecht.`,
      objectionBy: 'Shabir Ally',
      answer: `Ein menschlicher Richter darf es nicht, weil er weder der Geschädigte noch der Herr über das Leben des Freiwilligen ist. Am Kreuz aber ist der Richter selbst derjenige, der die Last trägt: „Gott war in Christo und versöhnte die Welt mit ihm selber" (2 Kor 5,19). Gott bestraft nicht einen Fremden, sondern nimmt in seinem Sohn die Folgen unserer Sünde auf sich. Das ist nicht Ungerechtigkeit, sondern Liebe, die Gerechtigkeit nicht aufhebt, sondern erfüllt.`,
      questionsBack: [`Wäre es ungerecht, wenn der Geschädigte selbst die Schulden des Schuldigers bezahlt?`],
      followUps: [
        {
          id: 'richter-analogie-hinkt',
          objection: `Ein Richter kann eine Geldstrafe für jemanden bezahlen, aber keine Gefängnis- oder Todesstrafe für ihn absitzen. Eure Analogie hinkt.`,
          objectionBy: 'Hamza Tzortzis',
          answer: `Einverstanden – jede menschliche Analogie hinkt, und die Kirche macht das Kreuz nicht von einer Gerichtsanalogie abhängig. Für die Väter ist das Entscheidende die Einheit: Der Logos hat unsere Natur angenommen und ist das neue Haupt der Menschheit. Was er als unser Haupt durchlebt – Tod und Auferstehung –, wird denen zuteil, die mit ihm verbunden sind. Das ist mehr als eine Übertragung zwischen Fremden; es ist die Heilung der Menschheit von innen.`,
          followUps: [
            {
              id: 'freibrief-zum-suendigen',
              objection: `Wenn Jesus alle Sünden bezahlt hat, können Christen ja sündigen, wie sie wollen. Das ist moralisch verheerend.`,
              objectionBy: 'Zakir Naik',
              answer: `Paulus kannte den Einwand: „Sollen wir denn in der Sünde beharren …? Das sei ferne!" (Röm 6,1–2). Die koptische Kirche lehrt kein „einmal glauben, dann egal": Das Heil wird empfangen durch Glauben, Taufe, Buße und ein Leben in der Kirche, in dem die Gnade mit unserem freien Willen zusammenwirkt. Wer das Kreuz wirklich annimmt, stirbt der Sünde, statt sie zu lieben.`,
              followUps: [
                {
                  id: 'moerder-auf-dem-sterbebett',
                  objection: `Dann kann ein Mörder auf dem Sterbebett bereuen und kommt in den Himmel – sein Opfer aber, wenn es kein Christ war, nicht. Wo bleibt da die Gerechtigkeit für die Opfer?`,
                  objectionBy: 'Zakir Naik',
                  answer: `Echte Umkehr ist möglich bis zum letzten Atemzug – der Schächer am Kreuz zeigt es (Lk 23,43). Aber Gerechtigkeit wird dabei nicht übergangen: Die Schuld des Mörders wird nicht ignoriert, sondern von Christus getragen, und Gott richtet über das Opfer nach seiner eigenen Gerechtigkeit und Barmherzigkeit, nicht nach der Tat des Mörders. Und beachte: Dein Einwand trifft den Islam genauso. Nach einem bekannten Hadith vergab Allah einem Mann, der hundert Menschen getötet hatte, weil er bereute und sich auf den Weg zur Umkehr machte.`,
                  detail: `Der Hadith vom Mann, der 99 und dann 100 Menschen tötete, steht in den Sahih-Sammlungen (Bukhari 3470; Muslim 2766): Er fragt einen Gelehrten, ob es für ihn noch Umkehr gibt, wandert in ein Land der Frommen und stirbt unterwegs; die Engel der Barmherzigkeit nehmen ihn auf. Muslime lesen das als Zeugnis für Allahs grenzenlose Vergebung (vgl. 39:53). Damit ist klar: Beide Religionen kennen Vergebung für schwerste Schuld. Der Unterschied liegt im *Wie*: Im Islam vergibt Allah durch einen Akt seines Willens; im Evangelium vergibt Gott, indem er die Schuld selbst trägt – so dass Barmherzigkeit und Gerechtigkeit sich „küssen" (Ps 85,11). Die koptische Kirche betont dabei, dass wahre Reue Wiedergutmachung sucht, wo sie möglich ist (Lk 19,8).`,
                  sources: [
                    { kind: 'hadith', work: 'Sahih al-Bukhari', ref: '3470 (vgl. Sahih Muslim 2766)', quote: `Unter den Kindern Israels war ein Mann, der neunundneunzig Menschen getötet hatte … Die Engel der Barmherzigkeit nahmen ihn auf.`, translation: 'sinngemäß zusammengefasst', status: 'paraphrase', url: 'https://sunnah.com/bukhari:3470' },
                    { kind: 'bibel', work: 'Lukas', ref: '23,43', quote: `Wahrlich, ich sage dir: Heute wirst du mit mir im Paradiese sein.`, translation: 'Luther 1912', status: 'verbatim' },
                  ],
                  questionsBack: [
                    `Vergibt Allah nach dem Hadith von dem Mann, der hundert Menschen tötete, auch schwerste Schuld? Wo bleibt dort die Gerechtigkeit für die Opfer?`,
                    `Was ist gerechter: Schuld durch bloßen Willensakt zu erlassen – oder sie selbst zu tragen?`,
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'ez-18-widerspricht-kreuz',
      objection: `Eure eigene Bibel sagt: „Der Sohn soll nicht tragen die Missetat des Vaters" (Ez 18,20). Also widerspricht das Kreuz eurer Schrift.`,
      objectionBy: 'Ahmed Deedat',
      answer: `Derselbe Gott, der durch Hesekiel sprach, sprach auch durch Jesaja: „Der HERR warf unser aller Sünde auf ihn" (Jes 53,6). Ez 18 richtet sich gegen ein Sprichwort, das die Schuld auf die Väter schiebt (18,2), und verbietet, Menschen gegen ihren Willen für fremde Schuld zu bestrafen. Jes 53 spricht von dem einen, der sich freiwillig als Schuldopfer gibt. Beides ist wahr – nur in verschiedener Hinsicht.`,
      followUps: [
        {
          id: 'jesaja-53-ist-israel',
          objection: `Jesaja 53 handelt vom Volk Israel, nicht von Jesus. Das sagen die jüdischen Gelehrten.`,
          objectionBy: 'Muslimischer Apologet unter Berufung auf Rabbi Tovia Singer',
          answer: `Viele mittelalterliche und moderne jüdische Ausleger deuten Jes 53 auf Israel; aber es gibt auch alte jüdische Auslegungen, die den Text auf den Messias beziehen (etwa im Targum zu Jes 52,13). Im Text leidet der Knecht „um der Missetat meines Volks willen" (53,8) – er ist vom Volk unterschieden – und er ist ohne Unrecht (53,9). Das passt auf keinen Fall auf ein sündiges Volk. Mehr dazu im Thema „Jesaja 53 ist Israel".`,
          followUps: [
            {
              id: 'knecht-heisst-israel',
              objection: `Jesaja nennt Israel ausdrücklich „mein Knecht" (Jes 41,8; 44,1; 49,3). Der Knecht in Kapitel 53 ist also derselbe: das leidende Volk Israel unter den Völkern.`,
              objectionBy: 'Muslimischer Apologet unter Berufung auf Rabbi Tovia Singer',
              answer: `Jesaja unterscheidet selbst zwei Knechte. Der Knecht Israel ist blind und taub (42,19) und sündig (43,24). Der andere Knecht soll „Jakob zu ihm bekehren und Israel zu ihm sammeln" (49,5–6) – er kann also nicht Israel sein, sondern handelt *an* Israel. Er heißt in 49,3 „Israel", weil er als einzelner verkörpert, was das Volk sein sollte. Und von diesem Knecht heißt es: Er hat „kein Unrecht getan, und kein Betrug war in seinem Mund" (53,9) – das sagt Jesaja nirgends vom Volk.`,
              detail: `Michael Brown und Michael Rydelnik haben gezeigt, dass die messianische Deutung von Jes 52,13–53,12 im Judentum alt ist: Der Targum Jonathan bezieht 52,13 auf „meinen Knecht, den Messias"; spätere rabbinische Texte (u. a. im Talmud, Sanhedrin 98b, und im Midrasch) bringen den leidenden Messias mit diesem Kapitel in Verbindung. Raschi (11. Jh.) machte die Kollektivdeutung auf Israel populär. Für das Gespräch mit Muslimen ist ein Punkt besonders stark: Jesaja beschreibt einen Gerechten, der für die Sünden anderer leidet und dadurch „viele gerecht macht" (53,11). Selbst wenn man an Israel dächte, bliebe das Prinzip der stellvertretenden Sühne biblisch – genau das, was 6:164 angeblich ausschließt.`,
              voices: [
                { person: 'michael-brown', role: 'als messianisch-jüdischer Gelehrter', text: `Brown betont, dass Jesaja den Knecht vom Volk unterscheidet: Der Knecht leidet „für die Übertretung meines Volkes" (53,8), das Volk dagegen bekennt: „Wir gingen alle in die Irre wie Schafe" (53,6). Wer ist hier „wir", und wer ist „er"? Das „Wir" ist das Volk; „er" ist der Gerechte, der die Schuld trägt.` },
                { person: 'michael-rydelnik', role: 'als messianischer Ausleger der Hebräischen Bibel', text: `Rydelnik zeigt, dass die messianische Lesart von Jes 53 keine christliche Erfindung ist, sondern in älteren jüdischen Quellen bezeugt ist; erst im Mittelalter setzte sich – auch in Auseinandersetzung mit dem Christentum – die Deutung auf das Volk durch.` },
              ],
              sources: [
                { kind: 'bibel', work: 'Jesaja', ref: '49,5–6', quote: `Und nun spricht der HERR, der mich von Mutterleib an zu seinem Knechte bereitet hat, daß ich soll Jakob zu ihm bekehren, auf daß Israel nicht weggerafft werde …`, translation: 'Luther 1912', status: 'paraphrase', note: 'Gekürzt.' },
                { kind: 'juedisch', work: 'Targum Jonathan zu Jesaja', ref: '52,13', quote: `Siehe, mein Knecht, der Messias, wird Erfolg haben …`, translation: 'sinngemäß', status: 'paraphrase', note: 'Der Targum deutet den Knecht messianisch, deutet das Leiden aber weitgehend um.' },
                { kind: 'fachliteratur', author: 'Michael L. Brown', work: 'Answering Jewish Objections to Jesus, Bd. 3: Messianic Prophecy Objections', year: '2003', status: 'paraphrase' },
              ],
              questionsBack: [
                `Wie kann der Knecht in Jes 49,5–6 Israel zu Gott zurückführen, wenn er selbst Israel ist?`,
                `Von welchem Volk sagt die Schrift, es habe „kein Unrecht getan, und kein Betrug war in seinem Mund"?`,
              ],
              followUps: [
                {
                  id: 'jesus-nicht-stumm-keine-nachkommen',
                  objection: `Jesus passt gar nicht: Jesaja sagt, der Knecht tue seinen Mund nicht auf (53,7) – Jesus redete vor Pilatus. Und der Knecht werde „Nachkommen sehen und lange leben" (53,10) – Jesus hatte keine Kinder und starb jung.`,
                  objectionBy: 'Shabir Ally',
                  answer: `Vor seinen Anklägern verteidigte sich Jesus nicht: „Er aber schwieg still und antwortete nichts" (Mk 14,61; 15,5) – genau das Bild vom Lamm, das zur Schlachtbank geführt wird. Und lies 53,10 im Zusammenhang: Der Knecht wird getötet, begraben (53,8–9) – und *danach* „sieht er Nachkommen und lebt lange". Das setzt ein Leben nach dem Tod voraus, also Auferstehung. „Nachkommen" (*zeraʿ*) wird in der Schrift auch geistlich gebraucht; die Nachkommen des Knechts sind die „vielen", die er gerecht macht (53,11).`,
                  detail: `Jes 53,8: „Er ist aus dem Lande der Lebendigen weggerissen." 53,9: „Man gab ihm sein Grab bei den Gottlosen." 53,10–12: Nach diesem Tod „wird er Samen haben und in die Länge leben", „er wird das Licht sehen" (so die Qumran-Rolle 1QIsaᵃ und die Septuaginta in 53,11) und „mit den Starken den Raub teilen". Eine Person, die stirbt, begraben wird und danach lange lebt und Nachkommen sieht – das ist die Struktur von Karfreitag und Ostern. Für einen Laien reicht: Der Text beschreibt Tod *und* Leben danach. Wer ihn auf Israel bezieht, muss beides erklären.`,
                  sources: [
                    { kind: 'bibel', work: 'Jesaja', ref: '53,7', quote: `Da er gestraft und gemartert ward, tat er seinen Mund nicht auf wie ein Lamm, das zur Schlachtbank geführt wird.`, translation: 'Luther 1912', status: 'verbatim' },
                    { kind: 'bibel', work: 'Markus', ref: '14,61', quote: `Er aber schwieg still und antwortete nichts.`, translation: 'Luther 1912', status: 'verbatim' },
                  ],
                  questionsBack: [
                    `Wie kann jemand, der nach Jes 53,8–9 getötet und begraben wird, danach „lange leben" – wenn nicht durch Auferstehung?`,
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'widder-nur-symbol',
      objection: `Das „gewaltige Schlachtopfer" in 37:107 war ein Widder für Abrahams Prüfung, keine Sühne für Sünden. Daraus kannst du keine Stellvertretung ableiten.`,
      objectionBy: 'Yasir Qadhi',
      answer: `Richtig: Es geht nicht um Sünde, sondern um die Auslösung eines Lebens. Aber das Prinzip ist dasselbe: Ein Leben tritt an die Stelle eines anderen, und Gott selbst stellt das Ersatzopfer – *wa-fadaināhu*, „Wir lösten ihn aus". Wenn Stellvertretung als solche ungerecht wäre, wäre auch diese Auslösung ungerecht. Und das Wort „gewaltig" (*ʿaẓīm*) für einen Widder hat viele Ausleger stutzen lassen.`,
      sources: [
        { kind: 'koran', work: 'Sure 37 (as-Saffat)', ref: '37:107', quote: `Und Wir lösten ihn mit einem gewaltigen Schlachtopfer aus.`, original: `wa-fadaināhu bi-dhibḥin ʿaẓīm`, translation: 'eigene Übersetzung', status: 'verbatim', url: 'https://quran.com/37/107' },
        { kind: 'bibel', work: 'Genesis', ref: '22,8.13', quote: `Abraham antwortete: Mein Sohn, Gott wird sich ersehen ein Schaf zum Brandopfer … und Abraham ging hin und nahm den Widder und opferte ihn zum Brandopfer an seines Sohnes Statt.`, translation: 'Luther 1912', status: 'paraphrase', note: 'Gekürzt.' },
      ],
      followUps: [
        {
          id: 'fidya-ist-nur-recht',
          objection: `Fidya im Koran (2:184; 2:196) ist eine rechtliche Ersatzleistung beim Fasten oder der Pilgerfahrt – eine Mahlzeit für Arme, ein Opfertier. Mit Sündenvergebung hat das nichts zu tun.`,
          objectionBy: 'Shabir Ally',
          answer: `Das zeigt immerhin, dass Ersatzleistung als solche dem Islam nicht fremd ist: Gott nimmt etwas an der Stelle von etwas anderem an. Der Unterschied liegt nicht im Prinzip, sondern in der Tiefe: Im Evangelium stellt Gott selbst die Ersatzleistung – nicht ein Tier oder eine Mahlzeit, sondern sich selbst in seinem Sohn.`,
          sources: [
            { kind: 'koran', work: 'Sure 2 (al-Baqara)', ref: '2:184', quote: `… und denen, die es (das Fasten) nur mit großer Mühe vermögen, obliegt als Ersatzleistung die Speisung eines Armen.`, original: `wa-ʿalā lladhīna yuṭīqūnahū fidyatun ṭaʿāmu miskīn`, translation: 'eigene Übersetzung', status: 'verbatim', url: 'https://quran.com/2/184' },
          ],
        },
      ],
    },
    {
      id: 'jeder-fuer-sich-verantwortlich',
      objection: `Im Islam ist jeder für sich selbst verantwortlich. Niemand kann für einen anderen eintreten. Das ist die reinste Gerechtigkeit.`,
      objectionBy: 'Zakir Naik',
      answer: `Auch der Islam kennt das Eintreten für andere: die Fürsprache (*šafāʿa*) Muhammads am Jüngsten Tag, und der Koran sagt, Verführer würden „Lasten derer tragen, die sie ohne Wissen irreführen" (16:25; vgl. 29:13). Der Grundsatz von 6:164 wird also auch im Islam nicht absolut verstanden. Die Frage ist nicht, ob Gott Eintreten für andere zulässt, sondern wer dafür würdig ist.`,
      sources: [
        { kind: 'koran', work: 'Sure 16 (an-Nahl)', ref: '16:25', quote: `… damit sie am Tag der Auferstehung ihre Lasten vollständig tragen, und auch etwas von den Lasten derer, die sie ohne Wissen in die Irre führen.`, original: `wa-min awzāri lladhīna yuḍillūnahum bi-ghairi ʿilm`, translation: 'eigene Übersetzung', status: 'verbatim', url: 'https://quran.com/16/25' },
        { kind: 'koran', work: 'Sure 6 (al-An\'am)', ref: '6:164', quote: `Und keine lasttragende Seele trägt die Last einer anderen.`, original: `wa-lā taziru wāziratun wizra ukhrā`, translation: 'eigene Übersetzung', status: 'verbatim', url: 'https://quran.com/6/164' },
      ],
      followUps: [
        {
          id: 'muslim-2767-anders',
          objection: `Ich weiß, dass manche Christen den Hadith zitieren, in dem Juden und Christen als „Auslösung" für Muslime in die Hölle kommen. Die Gelehrten erklären, dass sie dort wegen ihres eigenen Unglaubens sind – nicht wegen der Sünden der Muslime.`,
          objectionBy: 'Yasir Qadhi',
          answer: `Das ist die Erklärung von an-Nawawi und anderen, und ich respektiere sie – ich will den Hadith nicht verzerren. Aber auch bei dieser Deutung bleibt: Die islamische Tradition hat die Sprache der „Auslösung" (*fikāk*/*fidāʾ*) für das Heil verwendet. Mein Punkt ist nicht, dass der Islam die christliche Sühnelehre enthält, sondern dass er Stellvertretung nicht grundsätzlich für undenkbar hält.`,
          sources: [
            { kind: 'hadith', work: 'Sahih Muslim', ref: '2767 (Kitab at-Tauba; sunnah.com 2767a)', quote: `Am Tag der Auferstehung wird Allah jedem Muslim einen Juden oder Christen übergeben und sagen: Das ist deine Auslösung vom Feuer.`, translation: 'sinngemäß', status: 'paraphrase', url: 'https://sunnah.com/muslim:2767', note: 'Nummer nach sunnah.com-Zählung geprüft (2026); von Dorar als ṣaḥīḥ bewertet. Die Parallelfassung 2767b lautet sinngemäß: Kein Muslim stirbt, ohne dass Allah an seiner Stelle einen Juden oder Christen ins Feuer bringt. An-Nawawi deutet: Jeder Mensch hat einen Platz im Paradies und einen in der Hölle; die Ungläubigen nehmen ihre eigenen Höllenplätze ein.' },
          ],
          followUps: [
            {
              id: 'fuersprache-nur-mit-erlaubnis',
              objection: `Die Fürsprache (šafāʿa) geschieht nur mit Allahs Erlaubnis und nur für Gläubige, die ohnehin glauben. Das ist keine Stellvertretung, bei der einer die Strafe eines anderen trägt.`,
              objectionBy: 'Yasir Qadhi',
              answer: `Einverstanden: Fürsprache geschieht nach dem Koran nur mit Gottes Erlaubnis (2:255) – und auch das Kreuz geschieht nicht gegen, sondern nach dem Willen des Vaters. Mein Punkt ist ein anderer: Wenn das Eintreten Muhammads das Schicksal anderer am Jüngsten Tag verändert, dann kann 6:164 nicht heißen, dass das Handeln einer Person nie einer anderen zugutekommen darf. 6:164 schließt aus, dass jemand *gegen seinen Willen* für fremde Schuld bestraft wird – das lehrt die Kirche auch. Es schließt nicht aus, dass Gott selbst freiwillig eintritt.`,
              detail: `Die Fürsprache-Überlieferung (u. a. Bukhari 4476) beschreibt, wie Muhammad sich vor seinem Herrn niederwirft und gebeten wird: „Bitte, es wird dir gewährt; tritt ein, deine Fürsprache wird angenommen" – und daraufhin werden Menschen aus dem Feuer geholt. Das ist im islamischen Verständnis keine Sühne, aber es ist ein Handeln für andere mit heilsentscheidender Wirkung. Für das Gespräch: Gestehe offen zu, dass Fürsprache und Sühne nicht dasselbe sind. Der Punkt ist nur, dass der Grundsatz „Jeder nur für sich" im Islam nicht absolut gilt – und dass deshalb die Frage nicht lautet „Darf es Stellvertretung geben?", sondern „Wer kann und darf für uns eintreten?". Die christliche Antwort: Nur der, der selbst ohne Sünde ist und zugleich Gott – weil nur er den Tod von innen besiegen kann.`,
              sources: [
                { kind: 'koran', work: 'Sure 2 (al-Baqara)', ref: '2:255', quote: `Wer ist es, der bei Ihm Fürsprache einlegen könnte, außer mit Seiner Erlaubnis?`, original: `man dhā lladhī yashfaʿu ʿindahū illā bi-idhnih`, translation: 'eigene Übersetzung', status: 'verbatim', url: 'https://quran.com/2/255' },
              ],
              questionsBack: [
                `Werden nach der Fürsprache-Überlieferung Menschen aus dem Feuer geholt, weil ein anderer für sie eintritt?`,
                `Wenn das möglich ist – warum soll es ungerecht sein, dass Gott selbst für die Menschen eintritt?`,
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'menschenopfer-ist-heidnisch',
      objection: `Menschenopfer sind heidnisch; Gott hat sie in der Tora verboten (Dtn 12,31). Ein Gott, der den Tod eines Menschen als Opfer verlangt, ist wie die Götzen der Kanaaniter.`,
      objectionBy: 'Hamza Tzortzis',
      answer: `Beim heidnischen Menschenopfer opfern Menschen einen anderen Menschen, um einen Gott gnädig zu stimmen. Am Kreuz ist es umgekehrt: Gott selbst gibt sich in seinem Sohn für die Menschen hin. Nicht wir besänftigen Gott, sondern Gott versöhnt uns mit sich (2 Kor 5,19). Jesus ist nicht Opfer eines Rituals, sondern Priester und Opfergabe in einem, der „sich selbst ohne allen Fehl durch den ewigen Geist Gott geopfert hat" (Hebr 9,14).`,
      followUps: [
        {
          id: 'gott-bezahlt-sich-selbst',
          objection: `Dann ist es noch absurder: Gott opfert sich selbst, um sich selbst zu besänftigen, und bezahlt sich selbst eine Schuld. Das ist ein Kreisgeschäft ohne Sinn.`,
          objectionBy: 'Mohammed Hijab',
          answer: `Es geht nicht um ein Geschäft, bei dem Gott „bezahlt" werden muss, sondern um die Heilung dessen, was die Sünde angerichtet hat: Tod und Verderben. Athanasius erklärt: Der Mensch war durch die Sünde dem Tod verfallen, und Reue allein konnte die Verderbnis der Natur nicht aufheben. Darum nahm das ewige Wort einen sterblichen Leib an, trat für alle in den Tod ein und besiegte ihn von innen durch die Auferstehung. Wer einem anderen eine Schuld vergibt, trägt den Schaden selbst – das ist kein Kreisgeschäft, sondern Liebe.`,
          detail: `Die koptische Tradition betont, im Anschluss an Athanasius und Kyrill, weniger das Bild eines zornigen Vaters, der besänftigt werden muss, als das Bild des Arztes und des Siegers: Christus „hat durch den Tod die Macht genommen dem, der des Todes Gewalt hatte" (Hebr 2,14). Gleichzeitig ist das Kreuz auch Opfer und Sühne (Röm 3,25; 1 Joh 2,2) – aber ein Opfer, das Gott *gibt*, nicht eines, das Menschen ihm darbringen müssen. Vater, Sohn und Geist haben einen Willen: Der Vater „gab" den Sohn (Joh 3,16), und der Sohn „gab sich selbst" (Gal 2,20). Im Alltag kennt jeder das Prinzip: Wer einem anderen eine Beleidigung, einen Schaden oder eine Schuld wirklich vergibt, nimmt die Last auf sich, statt sie zurückzugeben.`,
          voices: [
            { person: 'athanasius', role: 'als Lehrer der Menschwerdung', text: `Athanasius stellt in „Über die Menschwerdung" die Frage, ob Gott nicht einfach Reue verlangen könnte. Seine Antwort: Reue hält den Menschen vom weiteren Sündigen ab, aber sie ruft ihn nicht aus der Verderbnis zurück, in die er gefallen ist. Darum musste das Wort selbst, durch das alles geschaffen ist, kommen, um das Verderbliche zur Unverderblichkeit zu erneuern und den Tod für alle zu besiegen.` },
          ],
          sources: [
            { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Menschwerdung des Logos (De Incarnatione)', ref: '7–9', year: 'ca. 318–335', status: 'paraphrase', note: 'Reue genügt nicht, um die Verderbnis der Natur zu heilen; der Logos nimmt einen sterblichen Leib an, um den Tod für alle zu überwinden.' },
            { kind: 'bibel', work: 'Hebräer', ref: '2,14', quote: `… auf daß er durch den Tod die Macht nähme dem, der des Todes Gewalt hatte, das ist dem Teufel.`, translation: 'Luther 1912', status: 'verbatim' },
          ],
          questionsBack: [
            `Wenn dir jemand großen Schaden zufügt und du ihm vergibst – wer trägt dann den Schaden?`,
          ],
          followUps: [
            {
              id: 'warum-so-grausam',
              objection: `Selbst wenn Gott die Schuld selbst tragen wollte: Warum musste es so blutig und grausam sein? Ein allmächtiger Gott hätte einen sanfteren Weg wählen können.`,
              objectionBy: 'Hamza Tzortzis',
              answer: `Weil der Tod, den die Sünde gebracht hat, grausam ist – und Christus ist nicht an seinem Rand stehen geblieben, sondern ganz hineingegangen, bis in den schändlichsten Tod. So gibt es kein menschliches Leiden mehr, in dem Gott nicht schon gewesen ist. Athanasius sagt außerdem: Christus starb öffentlich, nicht heimlich im Bett, damit niemand bezweifeln konnte, dass er wirklich tot war – und die Auferstehung dann umso offenkundiger den Sieg über den Tod zeigt.`,
              detail: `Athanasius beantwortet in „Über die Menschwerdung" (21–25) genau diese Frage: Warum nicht ein ehrenvoller, privater Tod? Weil der Sieger über den Tod jeden Tod annehmen musste, den seine Feinde ihm zufügten, auch den schmachvollsten – so wie ein Ringer, der jeden Gegner besiegt, den man ihm stellt. Und er starb am Kreuz mit ausgebreiteten Armen, um mit der einen Hand das alte Volk, mit der anderen die Heiden zu sich zu ziehen (vgl. Joh 12,32). Für das Gespräch: Die Grausamkeit des Kreuzes zeigt zweierlei – den Ernst der Sünde und die Tiefe der Liebe. Gott verharmlost das Böse nicht, und er überlässt uns nicht damit.`,
              sources: [
                { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Menschwerdung des Logos (De Incarnatione)', ref: '21–25', year: 'ca. 318–335', status: 'paraphrase', note: 'Warum ein öffentlicher Tod und warum gerade das Kreuz.' },
                { kind: 'bibel', work: 'Johannes', ref: '12,32', quote: `Und ich, wenn ich erhöht werde von der Erde, so will ich sie alle zu mir ziehen.`, translation: 'Luther 1912', status: 'verbatim' },
              ],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wenn Stellvertretung als solche ungerecht ist – war dann die Auslösung von Abrahams Sohn durch den Widder (37:107) ungerecht?`,
    `Ist es ungerecht, wenn der Geschädigte selbst die Schuld des Täters auf sich nimmt?`,
    `Wie verstehst du 16:25, wo Verführer auch Lasten anderer tragen?`,
    `Wenn nach Ibn Kathir ein freiwilliger Jünger an Jesu Stelle sterben durfte – warum nicht Christus für die Sünder?`,
  ],
  avoid: [
    `Nicht das Bild eines zornigen Vaters zeichnen, der seinen Sohn „bestraft" – das entspricht nicht der koptischen Theologie und bestätigt das Zerrbild.`,
    `Den Hadith Sahih Muslim 2767 nicht als „Beweis" präsentieren, dass Muslime ihre Sünden auf Christen laden – nenne die muslimische Deutung fair.`,
    `Nicht behaupten, der Islam lehre dasselbe wie das Christentum; die Beispiele zeigen nur, dass Stellvertretung nicht grundsätzlich undenkbar ist.`,
  ],
  concessions: [
    `Es gibt unter Christen verschiedene Akzente in der Sühnelehre; die stark juristische Sicht des westlichen Protestantismus ist nicht die koptische Hauptlinie.`,
    `Jede Analogie für das Kreuz (Richter, Schuldenzahlung) bleibt unvollkommen.`,
  ],
  furtherReading: [
    { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Menschwerdung des Logos', year: 'ca. 318', status: 'paraphrase' },
    { kind: 'koptisch', author: 'Papst Schenuda III.', work: 'Das Heil im orthodoxen Verständnis', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'William Lane Craig', work: 'Atonement and the Death of Christ', year: '2020', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Sühne', 'Stellvertretung', 'Sure 6:164', 'Hesekiel 18', 'Jesaja 53'],
  related: [
    'islam-kreuzigung/gott-kann-einfach-vergeben',
    'islam-kreuzigung/ersatztheorie-taeuschung',
    'judentum-messias/kein-menschenopfer',
    'judentum-messias/jesaja-53-ist-israel',
    'calvinismus/begrenzte-suehne',
  ],
};

export default claim;
