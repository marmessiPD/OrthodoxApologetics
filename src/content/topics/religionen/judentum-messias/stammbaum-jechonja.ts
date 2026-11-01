import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'stammbaum-jechonja',
  title: `„Jesus kann nicht der Messias sein: der Fluch über Jechonja und die Abstammung über Josef."`,
  proponents: [
    { name: 'Rabbi Tovia Singer', role: 'Gründer von Outreach Judaism', work: 'Let\'s Get Biblical!, Kapitel zu den Genealogien (2014)' },
    { name: 'Gerald Sigal', role: 'Jüdischer Gegenmissions-Autor', work: 'The Jew and the Christian Missionary (1981)' },
    { name: 'Rabbi Michael Skobac', role: 'Jews for Judaism (Toronto)', work: 'Vorträge „The Genealogy Problem"' },
    { name: 'Rabbi Shmuley Boteach', role: 'Rabbiner und Publizist', work: 'Kosher Jesus (2012)' },
  ],
  steelman: `Der Messias muss ein leiblicher Nachkomme Davids über Salomo sein (2 Sam 7,12–16; 1 Chr 22,9–10), und die Stammeszugehörigkeit geht in der Tora ausschließlich über den Vater (Num 1,18: „nach ihren Vaterhäusern"). Matthäus führt Jesus über Josef und über König Jechonja (Konja) – doch über Jechonja sprach Gott durch Jeremia: „Schreibt diesen Mann als kinderlos auf … denn keiner von seinen Nachkommen wird Glück haben, dass er auf dem Thron Davids sitze und wieder über Juda herrsche" (Jer 22,30). Daraus folgt ein unauflösbares Dilemma: Ist Jesus Josefs Sohn, steht er unter dem Fluch Jechonjas; ist er es nicht (Jungfrauengeburt), dann ist er gar kein Sohn Davids, denn Adoption überträgt keine Stammeszugehörigkeit und Frauen geben sie nicht weiter. Der Stammbaum bei Lukas hilft nicht: Er läuft über Natan statt Salomo, nennt ausdrücklich „Josef, Sohn des Eli" und enthält selbst Schealtiël und Serubbabel – Jechonjas Nachkommen. Zudem widersprechen sich die beiden Stammbäume. Maria war womöglich sogar aus dem Stamm Levi, denn sie war mit Elisabeth verwandt (Lk 1,36).`,
  biblical: {
    summary: `Das „Dilemma" löst sich auf drei Ebenen auf. (1) **Der Fluch wurde aufgehoben:** Gott verwirft Jechonja als „Siegelring an meiner rechten Hand" (Jer 22,24) – und nennt dessen Enkel Serubbabel ausdrücklich „wie einen Siegelring, denn ich habe dich erwählt" (Hag 2,23). Selbst die rabbinische Tradition lehrt, dass der Beschluss über Jechonja durch Exil und Umkehr aufgehoben wurde, und der Targum zu 1 Chr 3,24 nennt einen Nachkommen Jechonjas „den König Messias". (2) **Die Jungfrauengeburt:** Jesus stammt leiblich nicht von Jechonja, ist aber durch Josefs Annahme rechtlich dessen Sohn und Erbe (Mt 1,20–25). (3) **Die Abstammung über Maria:** Das Neue Testament bezeugt Jesus als Davids Nachkommen „nach dem Fleisch" (Röm 1,3), und die Bibel kennt Fälle, in denen Abstammung über eine Tochter gerechnet wird (1 Chr 2,21–22.34–35; Esra 2,61; Num 32,41).`,
    detail: `**Jer 22,24–30 im Zusammenhang:** Jechonja hatte Söhne (1 Chr 3,17–18). „Kinderlos" heißt: ohne Nachfolger auf dem Thron „in seinen Tagen" und „wieder in Juda". Tatsächlich wurde kein Nachkomme Jechonjas mehr König in Juda.

**Die Umkehrung in Hag 2,23:** „An jenem Tag, spricht der HERR der Heerscharen, will ich dich nehmen, Serubbabel, Sohn Schealtiëls, mein Knecht … und will dich wie einen Siegelring machen, denn ich habe dich erwählt." Das Bild des Siegelrings (chotam) nimmt Jer 22,24 bewusst auf und kehrt es um.

**Abstammung über eine Tochter – biblische Beispiele:**
- Jaïr stammt in männlicher Linie von Hezron aus Juda ab, dessen Frau eine Tochter Machirs aus Manasse war (1 Chr 2,21–22); dennoch heißt er „Jaïr, Sohn Manasses" (Num 32,41).
- Scheschan hatte keine Söhne, gab seine Tochter seinem ägyptischen Knecht Jarcha zur Frau, und die Nachkommen werden als Scheschans Linie gezählt (1 Chr 2,34–35).
- Ein Priester heiratete eine Tochter Barsillais „und wurde nach ihrem Namen genannt" (Esra 2,61).
- Die Töchter Zelofhads erben das Land ihres Vaters (Num 27,1–11; 36).

**Die zwei Stammbäume:** Matthäus (über Salomo und die Könige) und Lukas (über Natan, einen anderen Sohn Davids) werden seit der Alten Kirche unterschiedlich erklärt: Lukas gebe die Linie Marias wieder (Eli als Josefs Schwiegervater), oder Matthäus gebe die rechtliche, Lukas die natürliche Linie Josefs (Leviratsehe, so Julius Africanus bei Eusebius). Keine Erklärung ist sicher bewiesen; beide sind möglich.`,
    sources: [
      { kind: 'bibel', work: 'Jeremia', ref: '22,24.30', quote: `So wahr ich lebe, spricht der HERR: Wenn Konja, der Sohn Jojakims, der König von Juda, ein Siegelring an meiner rechten Hand wäre, so würde ich dich doch von dort abreißen … Schreibt diesen Mann als kinderlos auf, als einen Mann, der in seinen Tagen kein Gelingen hat; denn keinem von seinen Nachkommen wird es gelingen, auf dem Thron Davids zu sitzen und wieder über Juda zu herrschen.`, translation: 'eigene Übersetzung aus dem Hebräischen', status: 'verbatim' },
      { kind: 'bibel', work: 'Haggai', ref: '2,23', quote: `An jenem Tag, spricht der HERR der Heerscharen, will ich dich nehmen, Serubbabel, Sohn Schealtiëls, mein Knecht, spricht der HERR, und dich wie einen Siegelring machen; denn ich habe dich erwählt, spricht der HERR der Heerscharen.`, original: 'וְשַׂמְתִּיךָ כַּחוֹתָם כִּי־בְךָ בָחַרְתִּי', translation: 'eigene Übersetzung aus dem Hebräischen', status: 'verbatim' },
      { kind: 'bibel', work: '1. Chronik', ref: '2,21–22', quote: `Danach ging Hezron ein zu der Tochter Machirs, des Vaters Gileads … und sie gebar ihm Segub. Segub aber zeugte Jaïr; der hatte dreiundzwanzig Städte im Land Gilead.`, translation: 'eigene Übersetzung aus dem Hebräischen', status: 'verbatim', note: 'Vgl. Num 32,41: „Jaïr, der Sohn Manasses" – trotz judäischer Abstammung in männlicher Linie.' },
      { kind: 'bibel', work: '1. Chronik', ref: '2,34–35', quote: `Scheschan aber hatte keine Söhne, sondern Töchter; und Scheschan hatte einen ägyptischen Knecht namens Jarcha. Und Scheschan gab seine Tochter seinem Knecht Jarcha zur Frau, und sie gebar ihm Attai.`, translation: 'eigene Übersetzung aus dem Hebräischen', status: 'verbatim' },
      { kind: 'bibel', work: 'Römer', ref: '1,3', quote: `… von seinem Sohn, der geboren ist aus dem Samen Davids nach dem Fleisch.`, translation: 'eigene Übersetzung aus dem Griechischen', status: 'verbatim' },
      { kind: 'bibel', work: 'Lukas', ref: '1,32', quote: `Der wird groß sein und Sohn des Höchsten genannt werden; und Gott der Herr wird ihm den Thron seines Vaters David geben.`, translation: 'eigene Übersetzung aus dem Griechischen', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die Kirche bekennt Jesus als wahren Sohn Davids und zugleich als den aus der Jungfrau Maria ohne menschlichen Vater Geborenen. Schon Irenäus von Lyon führt den Fluch über Jechonja als Argument **für** die Jungfrauengeburt an: Wäre Jesus leiblich Josefs Sohn, stünde er unter dem Wort Jeremias; weil er aus der Jungfrau geboren ist, trifft ihn der Fluch nicht, und doch erbt er als Josefs Sohn die Verheißung. Justin und Ignatius bezeugen schon im 2. Jahrhundert, dass Maria selbst aus dem Geschlecht Davids stammte.`,
    detail: `Die koptische Kirche ehrt Josef als „den gerechten Josef", der Maria zu sich nahm und dem Kind den Namen gab – in jüdischem Verständnis eine rechtliche Anerkennung der Vaterschaft. Der hl. Joseph wird im koptischen Kalender gefeiert. Die Frage nach den beiden Stammbäumen haben schon die Väter offen behandelt: Julius Africanus schrieb um 220 einen Brief an Aristides über die Übereinstimmung der Genealogien, den Eusebius überliefert; er beruft sich dabei auf Verwandte Jesu, die Familienaufzeichnungen bewahrt hätten.`,
    sources: [
      { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Gegen die Häresien (Adversus Haereses)', ref: 'III,21,9', year: 'um 180', quote: `Wäre er der Sohn Josefs, könnte er nach Jeremia nicht König sein, denn Josef stammt von Jojakim und Jechonja ab, über die Gott verfügte, dass kein Nachkomme auf dem Thron Davids sitzen werde.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Justin der Märtyrer', work: 'Dialog mit dem Juden Tryphon', ref: '43; 100', year: 'um 160', quote: `Er wurde durch die Jungfrau aus dem Geschlecht Davids geboren.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Ignatius von Antiochien', work: 'Brief an die Epheser', ref: '18,2', year: 'um 110', quote: `Unser Gott, Jesus der Christus, wurde von Maria im Schoß getragen nach Gottes Heilsplan, aus dem Samen Davids und aus dem Heiligen Geist.`, original: 'ὁ γὰρ θεὸς ἡμῶν Ἰησοῦς ὁ Χριστὸς ἐκυοφορήθη ὑπὸ Μαρίας κατ᾽ οἰκονομίαν θεοῦ ἐκ σπέρματος μὲν Δαυίδ, πνεύματος δὲ ἁγίου', status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Eusebius von Caesarea (nach Julius Africanus)', work: 'Kirchengeschichte', ref: 'I,7', year: 'um 325', status: 'paraphrase', quote: `Africanus erklärt die beiden Stammbäume durch eine Leviratsehe: Josef war leiblich der Sohn Jakobs, rechtlich der Sohn Elis; Verwandte des Herrn bewahrten die Familienaufzeichnungen.` },
    ],
  },
  opposingView: {
    summary: `Die rabbinische Tradition selbst bezeugt, dass der Beschluss über Jechonja nicht endgültig war. Im Babylonischen Talmud lehrt Rabbi Jochanan, das Exil sühne alles, und verweist auf Jechonja: Zuerst heißt es „schreibt diesen Mann kinderlos auf", nach dem Exil aber „die Söhne Jechonjas: Assir, Schealtiël, sein Sohn". Midraschim (Pesikta de-Rav Kahana, Wajikra Rabba) erzählen von Jechonjas Umkehr im Gefängnis und der Aufhebung des Beschlusses. Der Targum zu 1 Chr 3,24 deutet Anani, einen Nachkommen Serubbabels, als den „König Messias, der offenbart werden wird".`,
    detail: `Historisch-kritische Exegeten halten die beiden Stammbäume meist für unabhängige, theologisch gestaltete Konstruktionen; auch innerhalb der Hebräischen Bibel sind die Angaben zu Serubbabel nicht einheitlich (Sohn Schealtiëls in Esra 3,2 und Hag 1,1; Sohn Pedajas in 1 Chr 3,19). Ein heutiger Messiaskandidat könnte seine davidische Abstammung nach dem Verlust der Geschlechterregister im Jahr 70 n. Chr. kaum nachweisen; die Mischna erwartet, dass Elija einst strittige Abstammungsfragen kläre (Edujot 8,7).`,
    sources: [
      { kind: 'juedisch', work: 'Babylonischer Talmud, Sanhedrin', ref: '37b–38a', quote: `Rabbi Jochanan sagte: Das Exil sühnt alles. Denn es heißt: „Schreibt diesen Mann kinderlos auf" – nachdem er aber ins Exil gegangen war, heißt es: „Und die Söhne Jechonjas: Assir, Schealtiël, sein Sohn."`, status: 'paraphrase', url: 'https://www.sefaria.org/Sanhedrin.37b', note: 'Geprüft: Rabbi Jochanans Satz und die Folgerung aus 1 Chr 3,17 stehen bSanhedrin 37b–38a; dort auch die Deutung des Namens „Assir" (seine Mutter habe ihn im Gefängnis empfangen). Im Talmud ist strittig, ob das Exil ganz oder nur teilweise sühnt – nicht als einhellige Lehre darstellen.' },
      { kind: 'juedisch', work: 'Pesikta de-Rav Kahana (Piska „Schuva")', ref: 'Piska 24 (in manchen Ausgaben 25), Abschnitt zur Kraft der Umkehr', quote: `Groß ist die Umkehr, denn sie hebt einen Beschluss auf: Über Jechonja war beschlossen „schreibt ihn kinderlos auf" – doch als er umkehrte, wurde der Beschluss aufgehoben.`, status: 'paraphrase', note: 'Geprüft (Jewish Encyclopedia, Art. „Aḥa b. Papa"; Übersetzung der Yeshivat Har Etzion): Die Pesikta beweist an Jechonja (Jer 22,30), dass Umkehr einen himmlischen Beschluss (und einen Schwur) aufhebt. Die Zuschreibung schwankt (R. Abba bzw. Aḥa/Abba bar Papa), die Abschnittszählung je nach Ausgabe; Wortlaut hier sinngemäß. Parallele zu Jechonjas Umkehr im Gefängnis und Gottes Vergebung: Wajikra Rabba 19,6.' },
      { kind: 'juedisch', work: 'Targum zu den Chronikbüchern', ref: '1 Chr 3,24', quote: `… und Anani – das ist der König Messias, der offenbart werden wird.`, status: 'paraphrase', note: 'Anani ist nach 1 Chr 3,17–24 ein Nachkomme Jechonjas über Serubbabel.' },
      { kind: 'juedisch', work: 'Mischna, Edujot', ref: '8,7', quote: `Elija kommt nicht, um für unrein oder rein zu erklären, zu entfernen oder heranzuführen, sondern um zu entfernen, die mit Gewalt herangeführt wurden, und heranzuführen, die mit Gewalt entfernt wurden.`, status: 'paraphrase', url: 'https://www.sefaria.org/Mishnah_Eduyot.8.7' },
    ],
  },
  quickAnswer: `Das Dilemma hat drei Ausgänge. Erstens wurde der Fluch aufgehoben: Gott nennt Jechonjas Enkel Serubbabel seinen „Siegelring" (Hag 2,23 kehrt Jer 22,24 um), und sogar der Talmud lehrt, Jechonjas Exil habe den Beschluss gesühnt – der Targum zu 1 Chr 3,24 erwartet den Messias aus genau dieser Linie. Zweitens stammt Jesus wegen der Jungfrauengeburt leiblich nicht von Jechonja, ist aber als Josefs angenommener Sohn rechtmäßiger Erbe. Drittens ist er durch Maria leiblich Davids Nachkomme (Röm 1,3) – und die Bibel kennt Abstammung über eine Tochter.`,
  keyPoints: [
    `**Hag 2,23 kehrt Jer 22,24 um:** Der verworfene „Siegelring" wird in Serubbabel wieder angenommen.`,
    `**Die rabbinische Tradition** sieht den Beschluss über Jechonja als aufgehoben (bSanhedrin 37b–38a; Pesikta de-Rav Kahana) und erwartet den Messias aus seiner Linie (Targum zu 1 Chr 3,24).`,
    `**Jungfrauengeburt:** Leiblich nicht von Jechonja, rechtlich Josefs Sohn – Josef gibt ihm den Namen (Mt 1,25).`,
    `**Abstammung über eine Tochter ist biblisch belegt:** Jaïr (1 Chr 2,21–22; Num 32,41), Scheschan (1 Chr 2,34–35), Barsillai (Esra 2,61).`,
    `**Maria aus Davids Geschlecht:** Lk 1,32; Röm 1,3; Ignatius (um 110) und Justin (um 160).`,
    `**Zwei Stammbäume:** Ihre Unterschiede sprechen eher gegen Erfindung – erfundene Listen hätte man angeglichen.`,
  ],
  voices: [
    {
      person: 'irenaeus',
      role: 'als Verteidiger der Jungfrauengeburt',
      text: `Irenäus dreht das Argument um: Gerade weil über Jechonja verfügt war, dass kein leiblicher Nachkomme auf Davids Thron herrschen werde, zeigt Jeremia, dass der Messias nicht aus Josefs Samen gezeugt werden konnte. Wer Jesus für Josefs leiblichen Sohn hält (wie die Ebioniten), bringt ihn unter den Fluch; die Kirche, die die Jungfrauengeburt bekennt, sieht in ihm den Erben Davids, über den der Fluch keine Macht hat.`,
      sources: [
        { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Gegen die Häresien (Adversus Haereses)', ref: 'III,21,9', year: 'um 180', status: 'paraphrase' },
      ],
    },
    {
      person: 'eusebius',
      role: 'als Überlieferer des Julius Africanus',
      text: `Eusebius bewahrt den Brief des Julius Africanus, der schon im 3. Jahrhundert die Unterschiede der Stammbäume erklären wollte: Nach dem Gesetz der Leviratsehe konnte ein Mann einen leiblichen und einen rechtlichen Vater haben. Africanus beruft sich auf die „Desposynoi", Verwandte des Herrn, die Familienaufzeichnungen bewahrt hätten. Ob man seiner Lösung folgt oder nicht – sie zeigt, dass die Kirche die Spannung nie versteckt, sondern offen untersucht hat.`,
      sources: [
        { kind: 'kirchenvater', author: 'Eusebius von Caesarea', work: 'Kirchengeschichte', ref: 'I,7', year: 'um 325', status: 'paraphrase' },
      ],
    },
    {
      person: 'lukas',
      role: 'als Historiker mit Nähe zu Maria',
      text: `Lukas erzählt die Kindheitsgeschichte aus der Perspektive Marias (Lk 1,26–56; 2,19.51) und lässt den Engel ihr ankündigen, Gott werde dem Kind „den Thron seines Vaters David" geben (1,32). Sein Stammbaum führt über Natan, einen anderen Sohn Davids, und vermeidet damit die Königslinie über Jechonja. Lukas formuliert vorsichtig, Jesus sei „wie man meinte" der Sohn Josefs gewesen (3,23) – ein Hinweis, dass er die Jungfrauengeburt voraussetzt.`,
      sources: [
        { kind: 'bibel', work: 'Lukas', ref: '1,32; 3,23–31', status: 'paraphrase' },
      ],
    },
    {
      person: 'justin',
      role: 'im Gespräch mit Tryphon',
      text: `Justin setzt gegenüber Tryphon selbstverständlich voraus, dass Maria aus dem Geschlecht Davids, Jakobs, Isaaks und Abrahams stammte, und verbindet die Jungfrauengeburt mit den Verheißungen an David. Für ihn ist Jesus Davids Nachkomme durch die Jungfrau – nicht durch einen menschlichen Vater.`,
      sources: [
        { kind: 'kirchenvater', author: 'Justin der Märtyrer', work: 'Dialog mit dem Juden Tryphon', ref: '43; 100', year: 'um 160', status: 'paraphrase' },
      ],
    },
    {
      person: 'michael-brown',
      role: 'als messianisch-jüdischer Apologet',
      text: `Brown weist darauf hin, dass die rabbinische Literatur selbst den Fluch über Jechonja als aufgehoben ansieht und den Messias in der Linie Serubbabels erwartet – das Argument der Gegenmission widerspricht also der eigenen Tradition. Außerdem betont er, dass im 1. Jahrhundert niemand Jesu davidische Abstammung bestritt; nach der Zerstörung der Register 70 n. Chr. könne dagegen kein künftiger Kandidat seine Abstammung mehr belegen.`,
      sources: [
        { kind: 'fachliteratur', author: 'Michael L. Brown', work: 'Answering Jewish Objections to Jesus, Bd. 4: New Testament Objections', year: '2007', status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'dilemma-josef',
      objection: `Jer 22,30: Kein Nachkomme Jechonjas wird auf Davids Thron sitzen. Matthäus führt Jesus über Jechonja. Entweder ist Jesus Josefs Sohn – dann ist er verflucht – oder nicht – dann ist er kein Sohn Davids. Das Dilemma ist unlösbar.`,
      objectionBy: 'Tovia Singer',
      answer: `Es gibt drei Ausgänge. Erstens: Wegen der Jungfrauengeburt stammt Jesus leiblich nicht von Jechonja, ist aber als Josefs angenommener Sohn rechtmäßiger Erbe. Zweitens: Der Fluch wurde aufgehoben – Gott nennt Jechonjas Enkel Serubbabel seinen „Siegelring" (Hag 2,23), genau das Bild, mit dem er Jechonja verworfen hatte (Jer 22,24). Drittens: Durch Maria ist Jesus leiblich Davids Nachkomme (Lk 1,32; Röm 1,3).`,
      followUps: [
        {
          id: 'serubbabel-statthalter',
          objection: `Serubbabel war nur Statthalter, kein König. Hag 2,23 hebt den Fluch nicht auf – kein Nachkomme Jechonjas wurde je wieder König.`,
          objectionBy: 'Gerald Sigal',
          answer: `Richtig, Serubbabel war Statthalter. Aber das Siegelring-Bild nimmt Jer 22,24 wörtlich auf und kehrt es um: Gott nimmt die Verwerfung zurück. Und deine eigene Tradition sieht es genauso: Der Talmud lehrt, Jechonjas Exil habe alles gesühnt (bSanhedrin 37b–38a), die Pesikta erzählt von seiner Umkehr und der Aufhebung des Beschlusses – und der Targum zu 1 Chr 3,24 nennt Anani, einen Nachkommen Jechonjas über Serubbabel, „den König Messias". Die jüdische Tradition erwartet den Messias also gerade aus dieser Linie.`,
          sources: [
            { kind: 'juedisch', work: 'Targum zu den Chronikbüchern', ref: '1 Chr 3,24', quote: `… und Anani – das ist der König Messias, der offenbart werden wird.`, status: 'paraphrase' },
          ],
          followUps: [
            {
              id: 'dann-keine-jungfrauengeburt',
              objection: `Gut – dann ist der Fluch aufgehoben. Aber dann brauchst du die Jungfrauengeburt nicht, und Jesus ist trotzdem nicht Josefs leiblicher Sohn, also kein Davidide.`,
              objectionBy: 'Tovia Singer',
              answer: `Einverstanden: Der Fluch ist dann nicht mehr das Problem, und es bleibt nur die Frage, ob Jesus Davids Sohn ist. Antwort: rechtlich durch Josef, der ihn annahm und ihm den Namen gab (Mt 1,25), und leiblich durch Maria (Lk 1,32; Röm 1,3), wie schon Ignatius um 110 und Justin um 160 bezeugen. In ihm treffen sich beide Linien.`,
              followUps: [
                {
                  id: 'maria-levitin',
                  objection: `Maria eine Davidin? Lukas selbst nennt sie eine Verwandte Elisabeths, und Elisabeth stammt „von den Töchtern Aarons" (Lk 1,5.36). Dann war Maria Levitin, nicht aus Juda. Euer eigenes Evangelium widerlegt euch.`,
                  objectionBy: 'Tovia Singer',
                  answer: `„Verwandte" (syngenis) sagt nicht, auf welchem Weg – Verwandtschaft konnte über die Mutter laufen, und Ehen zwischen Juda und Levi gab es von Anfang an: Aaron selbst heiratete Elischeba, die Schwester Nachschons, des Fürsten von Juda (Ex 6,23; Num 1,7). Dass Maria mit einer Priesterfamilie verwandt war, schließt ihre davidische Herkunft also nicht aus. Und Lukas lässt den Engel zu Maria – nicht zu Josef – sagen, Gott werde ihrem Sohn „den Thron seines Vaters David" geben (1,32). Paulus schreibt um 57, Jesus sei „aus dem Samen Davids nach dem Fleisch" (Röm 1,3) – leiblich, nicht nur rechtlich.`,
                  sources: [
                    { kind: 'bibel', work: 'Exodus', ref: '6,23', status: 'paraphrase', quote: `Aaron nahm Elischeba, die Tochter Amminadabs, die Schwester Nachschons, zur Frau.` },
                    { kind: 'bibel', work: 'Römer', ref: '1,3', status: 'paraphrase', quote: `… seinem Sohn, der geboren ist aus dem Samen Davids nach dem Fleisch.` },
                  ],
                  questionsBack: [
                    `Wenn schon Aaron eine Frau aus Juda heiratete – warum soll eine Verwandtschaft zwischen Maria und Elisabeth Marias davidische Herkunft ausschließen?`,
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'nur-vaterlinie',
      objection: `Die Stammeszugehörigkeit geht in der Tora nur über den Vater (Num 1,18). Adoption überträgt keine Stammeszugehörigkeit, und durch eine Frau geht gar nichts.`,
      objectionBy: 'Tovia Singer',
      answer: `Die normale Regel ist väterlich, ja. Aber die Bibel selbst kennt Ausnahmen: Jaïr stammt in männlicher Linie aus Juda, heißt aber „Sohn Manasses", weil seine Großmutter aus Manasse kam (1 Chr 2,21–22; Num 32,41). Scheschan hatte keine Söhne, gab seine Tochter seinem ägyptischen Knecht, und die Nachkommen gelten als Scheschans Linie (1 Chr 2,34–35). Ein Priester wurde nach seinem Schwiegervater Barsillai genannt (Esra 2,61).`,
      followUps: [
        {
          id: 'sonderfaelle',
          objection: `Das sind Sonderfälle, wenn Söhne fehlten. Sie ändern die Regel nicht.`,
          objectionBy: 'Gerald Sigal',
          answer: `Genau – Sonderfälle. Und die Geburt Jesu ist der größte Sonderfall überhaupt: Er hat keinen menschlichen Vater. Die Frage ist also nicht die allgemeine Regel, sondern ob die Schrift Abstammung über die Mutter zulässt, wenn kein Vater da ist – und diese Beispiele zeigen: ja. Dazu kommt die rechtliche Annahme durch Josef. Der Talmud sagt: „Wer eine Waise in seinem Haus großzieht, den betrachtet die Schrift, als hätte er sie gezeugt" (bSanhedrin 19b).`,
          sources: [
            { kind: 'juedisch', work: 'Babylonischer Talmud, Sanhedrin', ref: '19b', quote: `Wer eine Waise in seinem Haus großzieht, dem rechnet es die Schrift an, als hätte er sie gezeugt.`, status: 'paraphrase', url: 'https://www.sefaria.org/Sanhedrin.19b' },
          ],
          followUps: [
            {
              id: 'sanhedrin-19b-ethik',
              objection: `Sanhedrin 19b ist eine ethische Aussage, kein Erbrecht für das Königtum Davids.`,
              objectionBy: 'Michael Skobac',
              answer: `Zugestanden – es ist eine ethische Aussage. Sie zeigt aber, dass es im Judentum die Vorstellung einer nicht-leiblichen Vaterschaft gibt. Bei Matthäus gibt Josef dem Kind den Namen (Mt 1,21.25) – eine rechtliche Anerkennung. Jesus galt öffentlich als „Sohn Josefs" (Lk 4,22), und im 1. Jahrhundert hat niemand seine davidische Abstammung bestritten; die Menge rief ihm „Sohn Davids" zu (Mt 21,9).`,
              questionsBack: [
                `Wenn Jesu davidische Abstammung so offensichtlich falsch war – warum bestritt sie im 1. Jahrhundert niemand?`,
              ],
              followUps: [
                {
                  id: 'nur-anhaenger-behaupten',
                  objection: `„Niemand bestritt es" – das wissen wir nur aus christlichen Quellen. Seine Anhänger nannten ihn „Sohn Davids", weil sie ihn für den Messias hielten. Das ist Theologie, keine Genealogie.`,
                  objectionBy: 'Stuart Federow',
                  answer: `Es gibt ein bemerkenswertes Zeugnis, das nicht aus Theologie stammt: Der Geschichtsschreiber Hegesippus (2. Jh.), überliefert bei Eusebius, berichtet, dass Kaiser Domitian die Enkel des Judas, eines Bruders Jesu, verhören ließ – weil sie dem Geschlecht Davids angehörten und Rom jeden Davididen als möglichen Thronanwärter fürchtete. Man fand nur arme Bauern mit schwieligen Händen und ließ sie frei. Die Familie Jesu galt also auch für Außenstehende als davidisch. Und Paulus setzt die davidische Herkunft um 57 n. Chr. als bekannt voraus (Röm 1,3), ohne sie verteidigen zu müssen.`,
                  sources: [
                    { kind: 'kirchenvater', author: 'Eusebius von Caesarea (nach Hegesippus)', work: 'Kirchengeschichte', ref: 'III,19–20', year: 'um 325', status: 'paraphrase', quote: `Domitian ließ die Enkel des Judas, der dem Fleisch nach ein Bruder des Herrn genannt wurde, vorführen, weil sie aus dem Geschlecht Davids stammten … er fand sie arm und ließ sie frei.` },
                  ],
                  questionsBack: [
                    `Warum hätte ein römischer Kaiser die Verwandten Jesu als Davididen verhören lassen, wenn diese Abstammung eine bloße christliche Behauptung war?`,
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'lukas-natan',
      objection: `Lukas führt den Stammbaum über Natan, nicht über Salomo – der Messias muss aber von Salomo abstammen (1 Chr 22,9–10). Und Lukas schreibt „Josef, Sohn des Eli" – es ist Josefs Stammbaum, nicht Marias.`,
      objectionBy: 'Tovia Singer',
      answer: `Die Verheißung an David gilt seinem „Samen" (2 Sam 7,12; Ps 132,11); die Zusage an Salomos Linie war ausdrücklich an Gehorsam gebunden (1 Chr 28,7; 1 Kön 9,4–7; Ps 132,12) – und Jechonjas Fall zeigt, dass diese Linie als Königslinie abbrechen konnte. Natan ist ebenso Davids Sohn. Zu Lukas gibt es seit der Alten Kirche zwei Erklärungen: Er gibt Marias Linie (Eli als Josefs Schwiegervater), oder er gibt Josefs natürliche, Matthäus seine rechtliche Linie (Leviratsehe, so Julius Africanus). Ehrlich gesagt: Keine ist sicher bewiesen.`,
      followUps: [
        {
          id: 'stammbaeume-widerspruch',
          objection: `Die beiden Stammbäume widersprechen sich. Das allein zeigt, dass die Evangelisten sie erfunden haben.`,
          objectionBy: 'Shmuley Boteach',
          answer: `Wer erfindet, gleicht an. Dass die Kirche zwei so verschiedene Listen nebeneinander stehen ließ, spricht gegen Erfindung und für Achtung vor den Quellen. Antike Genealogien dienten verschiedenen Zwecken – Thronfolge, Rechtsnachfolge, natürliche Abstammung – und ließen oft Glieder aus (vgl. Esra 7,1–5 mit 1 Chr 5,29–41). Schon im 3. Jahrhundert beruft sich Africanus auf Verwandte Jesu, die Familienaufzeichnungen bewahrten.`,
          followUps: [
            {
              id: 'lukas-serubbabel',
              objection: `Lukas nennt aber auch Schealtiël und Serubbabel (Lk 3,27). Also läuft auch sein Stammbaum durch Jechonjas Familie – das Problem bleibt.`,
              objectionBy: 'Tovia Singer',
              answer: `Das können verschiedene Personen mit häufigen Namen sein, oder eine Verbindung durch Leviratsehe oder Annahme – die Hebräische Bibel selbst ist bei Serubbabel nicht einheitlich: Sohn Schealtiëls in Esra 3,2, Sohn Pedajas in 1 Chr 3,19. Vor allem aber: Nach deinen eigenen Quellen ist der Beschluss über Jechonja aufgehoben, und der Targum erwartet den Messias aus Serubbabels Linie. Die Erwähnung Serubbabels ist also nach jüdischer Tradition kein Ausschlussgrund.`,
              followUps: [
                {
                  id: 'frauen-im-stammbaum',
                  objection: `Warum nennt Matthäus ausgerechnet Tamar, Rahab, Rut und Batseba? Er wusste von Gerüchten über Marias uneheliche Schwangerschaft und wollte sie mit anrüchigen Vorfahrinnen entschärfen. Das ist Schadensbegrenzung, kein Stammbaum.`,
                  objectionBy: 'Shmuley Boteach',
                  answer: `Dass Matthäus die Umstände der Geburt Jesu im Blick hat, gestehe ich gern zu – er verschweigt nichts, er stellt sich dem. Aber die vier Frauen verbindet noch mehr: Drei von ihnen waren Nichtjüdinnen (Tamar und Rahab Kanaaniterinnen, Rut Moabiterin), Batseba die Frau eines Hethiters. Sie zeigen, dass Gott durch unerwartete Wege handelt und dass der Messias Israels auch der Völker wegen kommt. Und die jüdische Tradition ehrt sie selbst: Rut ist die Ahnfrau Davids, und der Talmud nennt Rahab Ahnfrau von Propheten und Priestern (bMegilla 14b).`,
                  sources: [
                    { kind: 'juedisch', work: 'Babylonischer Talmud, Megilla', ref: '14b', status: 'paraphrase', quote: `Acht Propheten, die zugleich Priester waren, stammten von Rahab ab.`, url: 'https://www.sefaria.org/Megillah.14b' },
                  ],
                  questionsBack: [
                    `Wenn die Tradition Rut als Ahnfrau Davids und Rahab als Ahnfrau von Propheten ehrt – warum sollen sie im Stammbaum des Messias anstößig sein?`,
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'niemand-nachweisbar',
      objection: `Matthäus lässt in seinem Stammbaum sogar Könige aus (Ahasja, Joasch, Amazja) und kommt trotzdem auf dreimal vierzehn Generationen. Das ist konstruiert und wertlos.`,
      objectionBy: 'Gerald Sigal',
      answer: `Matthäus gliedert bewusst: dreimal vierzehn – und die Zahlenwerte der hebräischen Buchstaben von „David" (D-W-D) ergeben 4 + 6 + 4 = 14. Auslassungen waren in antiken Genealogien üblich, auch in der Bibel (Esra 7,1–5 gegenüber 1 Chr 5,29–41). Ein Stammbaum muss nicht vollständig sein, um eine echte Abstammung zu bezeugen.`,
      followUps: [
        {
          id: 'elija-klaert',
          objection: `Wenn der Messias kommt, wird Elija seine Abstammung bestätigen. Wir brauchen keine fragwürdigen Listen.`,
          objectionBy: 'Michael Skobac',
          answer: `Damit gibst du zu, dass ein künftiger Kandidat seine davidische Abstammung nach dem Verlust der Register im Jahr 70 n. Chr. nicht nachweisen könnte – die Mischna erwartet ja, dass Elija Abstammungsfragen klärt (Edujot 8,7). Jesus dagegen trat auf, als die Register noch existierten, und niemand bestritt seine Herkunft aus Davids Haus. Und der Vorläufer im Geist Elijas, Johannes der Täufer, hat auf ihn gezeigt (Mal 3,23; Mt 11,14).`,
          sources: [
            { kind: 'juedisch', work: 'Mischna, Edujot', ref: '8,7', status: 'paraphrase', quote: `Elija wird kommen, um die mit Gewalt Entfernten heranzuführen und die mit Gewalt Herangeführten zu entfernen.`, url: 'https://www.sefaria.org/Mishnah_Eduyot.8.7' },
          ],
          followUps: [
            {
              id: 'taten-statt-listen',
              objection: `Der Messias muss seine Abstammung nicht mit Listen beweisen. Maimonides sagt: Wenn ein König aus dem Haus David aufsteht, die Tora lernt, Israel zu ihr zurückführt und die Kriege des HERRN führt, gilt er als möglicher Messias; baut er den Tempel und sammelt die Verstreuten, ist er es sicher. Die Taten entscheiden.`,
              objectionBy: 'Michael Skobac',
              answer: `Beachte, womit Maimonides beginnt: „ein König aus dem Haus David". Die davidische Herkunft ist bei ihm Voraussetzung, nicht Nebensache – und genau die kann nach 70 n. Chr. niemand mehr belegen. Jesus trat auf, als sie noch prüfbar war, und galt als Sohn Davids. Was die Taten angeht: Die Christen erwarten den Tempelbau im Vollsinn und die Sammlung Israels bei seiner Wiederkunft; bei seinem ersten Kommen hat er getan, was die Propheten vom leidenden Knecht sagen – und die Völker zum Gott Israels geführt.`,
              sources: [
                { kind: 'juedisch', author: 'Moses Maimonides', work: 'Mischne Tora, Hilchot Melachim', ref: '11,4', year: 'um 1180', status: 'paraphrase', quote: `Wenn ein König aus dem Haus David aufsteht, der sich in die Tora vertieft … und die Kriege des HERRN führt, so gilt er als vermutlicher Messias. Hat er Erfolg, baut das Heiligtum an seinem Ort und sammelt die Verstreuten Israels, so ist er gewiss der Messias.` },
              ],
              questionsBack: [
                `Wie soll ein heutiger Kandidat Maimonides' erste Bedingung – „aus dem Haus David" – erfüllen, wenn die Register seit 70 n. Chr. verloren sind?`,
              ],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Warum nennt Gott Jechonjas Enkel Serubbabel seinen „Siegelring" (Hag 2,23), wenn der Fluch fortbestand?`,
    `Wie verstehst du bSanhedrin 37b–38a und den Targum zu 1 Chr 3,24, der den Messias in Jechonjas Linie erwartet?`,
    `Warum heißt Jaïr „Sohn Manasses" (Num 32,41), obwohl er in männlicher Linie aus Juda stammte?`,
    `Wie könnte ein heutiger Messiaskandidat seine davidische Abstammung beweisen?`,
  ],
  avoid: [
    `Nicht als sichere Tatsache behaupten, Lukas gebe den Stammbaum Marias wieder. Das ist eine mögliche, nicht bewiesene Erklärung.`,
    `Nicht so tun, als gäbe es keine Spannung zwischen den beiden Stammbäumen – das wirkt unehrlich.`,
    `Nicht behaupten, Jechonja habe keine Kinder gehabt. 1 Chr 3,17–18 nennt seine Söhne; „kinderlos" meint ohne Thronfolger.`,
  ],
  concessions: [
    `Die Stammeszugehörigkeit wird in der Tora normalerweise über den Vater gerechnet; die Gegenbeispiele sind Sonderfälle.`,
    `Die Unterschiede zwischen Matthäus und Lukas sind real; ihre Harmonisierung ist möglich, aber nicht zwingend bewiesen.`,
    `Serubbabel wurde nicht König, sondern Statthalter.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Michael L. Brown', work: 'Answering Jewish Objections to Jesus, Bd. 4', year: '2007', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Raymond E. Brown', work: 'The Birth of the Messiah', year: '1977; erw. 1993', status: 'paraphrase', note: 'Umfassende katholische Fachstudie zu den Kindheitsgeschichten und Genealogien.' },
    { kind: 'kirchenvater', author: 'Eusebius von Caesarea', work: 'Kirchengeschichte, Buch I,7 (Brief des Julius Africanus an Aristides)', year: 'um 325', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Jechonja', 'Genealogie', 'Jeremia 22', 'Haggai 2', 'Jungfrauengeburt', 'Sohn Davids'],
  related: [
    'judentum-messias/jesaja-7-14-almah',
    'judentum-messias/messias-kriterien-nicht-erfuellt',
    'neues-testament/evangelien-widersprechen-sich',
  ],
};

export default claim;
