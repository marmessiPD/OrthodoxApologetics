import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'heil-durch-werke-gerecht',
  title: `„Im Islam wird man durch Glauben und gute Taten gerettet – das ist gerecht."`,
  proponents: [
    { name: 'Shabir Ally', role: 'Islamischer Apologet, Let the Quran Speak (Toronto)', work: 'Debatten über Erlösung, Sühne und Gerechtigkeit' },
    { name: 'Yasir Qadhi', role: 'Islamischer Gelehrter (Promotion Yale), East Plano Islamic Center', work: 'Vortragsreihen über das Jenseits und den Tag des Gerichts' },
    { name: 'Mohammed Hijab', role: 'Britischer muslimischer Apologet', work: 'Debatten über „cheap grace" und christliche Erlösungslehre' },
    { name: 'Jamal Badawi', role: 'Islamischer Gelehrter (Kanada, 1939–2024)', work: 'Vorträge und Debatten zum Heilsverständnis im Islam und Christentum' },
  ],
  steelman: `Der Koran verbindet immer wieder „die glauben und rechtschaffene Werke tun" (z. B. 2:25; 103:3). Am Tag der Auferstehung stellt Allah „gerechte Waagen" auf, „und keiner Seele wird im Geringsten Unrecht getan; und wäre es das Gewicht eines Senfkorns, Wir bringen es bei" (21:47). „Wer auch nur das Gewicht eines Stäubchens an Gutem tut, wird es sehen, und wer das Gewicht eines Stäubchens an Bösem tut, wird es sehen" (99:7–8). Wessen Waagschalen schwer sind, dem ergeht es wohl (101:6–7). Das ist Gerechtigkeit: Jeder erhält, was er erworben hat (53:39). Zugleich ist Allah großzügig: Gute Taten werden zehnfach angerechnet, schlechte nur einfach (6:160), gute Taten tilgen schlechte (11:114), und wer bereut, dessen schlechte Taten verwandelt Allah in gute (25:70). Vergleiche das mit dem Christentum: Ein Mörder bekehrt sich auf dem Sterbebett und geht ins Paradies, ein lebenslang rechtschaffener Muslim in die Hölle – nur wegen eines Glaubenssatzes. Und ein Unschuldiger muss für die Schuldigen sterben. Der Islam dagegen nimmt die moralische Verantwortung ernst und hält den Menschen zwischen Hoffnung und Furcht – das bewahrt vor Hochmut und vor billiger Gnade.`,
  biblical: {
    summary: `Die Bibel nimmt gute Werke sehr ernst: Gott „wird einem jeglichen geben nach seinen Werken" (Röm 2,6), „Glaube ohne Werke ist tot" (Jak 2,17), und nicht jeder, der „Herr, Herr" sagt, kommt ins Himmelreich (Mt 7,21). Zugleich sagt sie klar, dass **niemand** vor Gottes vollkommener Heiligkeit durch eigene Werke bestehen kann: „Sie sind allesamt Sünder und mangeln des Ruhmes, den sie bei Gott haben sollten" (Röm 3,23); „wer das ganze Gesetz hält und sündigt an einem, der ist's ganz schuldig" (Jak 2,10). Darum gründet das Heil auf Gottes Gnade in Christus – „aus Gnade seid ihr selig geworden durch den Glauben … nicht aus den Werken" –, und gerade dazu sind wir „geschaffen in Christus Jesus zu guten Werken" (Eph 2,8–10).`,
    detail: `**1. Gute Werke sind Pflicht, kein Guthaben.** „Wenn ihr alles getan habt, was euch befohlen ist, so sprecht: Wir sind unnütze Knechte; wir haben getan, was wir zu tun schuldig waren" (Lk 17,10). Wer heute ehrlich lebt, gleicht damit nicht aus, dass er gestern gestohlen hat.

**2. Das Maß ist Gottes Heiligkeit.** „Ihr sollt heilig sein, denn ich bin heilig" (Lev 19,2; vgl. Mt 5,48). Vor diesem Maß bekennt David: „Gehe nicht ins Gericht mit deinem Knecht; denn vor dir ist kein Lebendiger gerecht" (Ps 143,2).

**3. Das Herz ist das Problem.** Nicht nur einzelne Taten, sondern das Herz selbst muss erneuert werden: „Ich will euch ein neues Herz und einen neuen Geist in euch geben" (Ez 36,26). Heil ist darum mehr als ein positiver Saldo – es ist neues Leben aus Gott (Joh 3,3–5).

**4. Gewisse Hoffnung.** „Solches habe ich euch geschrieben, die ihr glaubt an den Namen des Sohnes Gottes, damit ihr wisst, dass ihr das ewige Leben habt" (1 Joh 5,13) – eine Gewissheit, die nicht auf der eigenen Bilanz, sondern auf Gottes Treue ruht, und die mit Ehrfurcht gelebt wird (Phil 2,12–13).`,
    sources: [
      { kind: 'bibel', work: 'Epheser', ref: '2,8–10', quote: `Denn aus Gnade seid ihr selig geworden durch den Glauben, und dasselbe nicht aus euch, Gottes Gabe ist es; nicht aus den Werken, auf daß sich nicht jemand rühme. Denn wir sind sein Werk, geschaffen in Christo Jesu zu guten Werken, zu welchen Gott uns zuvor bereitet hat, daß wir darin wandeln sollen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Jakobus', ref: '2,10', quote: `Denn so jemand das ganze Gesetz hält und sündigt an einem, der ist's ganz schuldig.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Lukas', ref: '17,10', quote: `Also auch ihr; wenn ihr alles getan habt, was euch befohlen ist, so sprechet: Wir sind unnütze Knechte; wir haben getan, was wir zu tun schuldig waren.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Psalm', ref: '143,2', quote: `Und gehe nicht ins Gericht mit deinem Knecht; denn vor dir ist kein Lebendiger gerecht.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Johannes', ref: '5,13', quote: `Solches habe ich euch geschrieben, die ihr glaubet an den Namen des Sohnes Gottes, auf daß ihr wisset, daß ihr das ewige Leben habt.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche lehrt weder „allein durch den Glauben" noch Erlösung durch eigene Verdienste. Das Heil gründet auf Menschwerdung, Kreuz und Auferstehung Christi; es wird empfangen durch Glauben, Taufe und das Leben in der Kirche – Sakramente, Buße und gute Werke als Frucht und Mitwirkung (Synergie) mit der Gnade. Gute Werke sind nicht Gewichte, die Sünden aufwiegen, sondern Ausdruck des neuen Lebens in Christus, durch das der Mensch in der Gemeinschaft mit Gott wächst. Papst Schenuda III. betont in *Das Heil im orthodoxen Verständnis*: Kein Werk des Menschen kann eine Sünde gegen den unendlichen Gott sühnen – dafür musste der Erlöser Gott und Mensch sein.`,
    detail: `Für das Gespräch mit Muslimen ist diese Position stark, weil sie zwei Fallen vermeidet: Sie kann den muslimischen Vorwurf der „billigen Gnade" glaubwürdig zurückweisen (die Kirche verlangt Umkehr, Fasten, Beichte, Nächstenliebe), und sie kann zugleich zeigen, dass das Fundament des Heils nicht die eigene Bilanz ist. Der Unterschied zum Islam liegt nicht darin, dass Werke wichtig oder unwichtig wären, sondern darin, **worauf** die Vergebung gründet (auf Christi Tat oder auf dem Verhältnis meiner Taten) und **was** Heil ist (Gemeinschaft mit Gott durch den innewohnenden Geist oder Bestehen einer Prüfung).`,
    sources: [
      { kind: 'koptisch', author: 'Papst Schenuda III.', work: 'Das Heil im orthodoxen Verständnis (Salvation in the Orthodox Concept)', status: 'paraphrase', quote: `Gute Werke sind notwendig als Frucht des Glaubens und Zeichen des Lebens mit Gott, aber kein Mensch kann durch sie die Sünde sühnen; die Sühne ist allein im Blut Christi.` },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Menschwerdung des Logos (De Incarnatione)', ref: '7', year: 'ca. 318', quote: `Reue allein hätte den Menschen nicht aus dem Zustand des Verderbens herausgeführt; sie hält nur von weiteren Sünden ab, heilt aber nicht die Natur.`, status: 'paraphrase' },
      { kind: 'bibel', work: 'Philipper', ref: '2,12–13', quote: `Schaffet, daß ihr selig werdet, mit Furcht und Zittern. Denn Gott ist's, der in euch wirkt beides, das Wollen und das Vollbringen, nach seinem Wohlgefallen.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  opposingView: {
    summary: `Die sunnitische Theologie lehrt: Das Heil hängt am Glauben (iman) und an den Werken, entscheidend aber an Allahs Barmherzigkeit. Der Prophet sagte nach einem verbreiteten Hadith, niemand werde durch seine Taten allein gerettet – „nicht einmal ich, es sei denn, Allah umhüllt mich mit Seiner Barmherzigkeit" (Sahih al-Bukhari 6463; 5673; Sahih Muslim 2816). Gläubige Sünder können nach sunnitischer Lehre zeitweilig im Feuer bestraft und dann durch Fürsprache (schafa'a) herausgeholt werden. Die klassische Haltung des Gläubigen ist das Gleichgewicht von Furcht (khauf) und Hoffnung (radscha').`,
    detail: `Islamische Gelehrte betonen, dass der Islam keine reine „Werkgerechtigkeit" lehrt: Gute Taten sind selbst eine Gnade Allahs, und der Glaube ist Voraussetzung. Die christliche Kritik setzt deshalb besser nicht bei einer Karikatur („Muslime glauben, sie verdienen sich das Paradies") an, sondern bei drei echten Fragen: (1) Ist ein Gericht, in dem gute Taten schlechte aufwiegen, wirklich **gerecht**? (2) Worauf **gründet** die Barmherzigkeit, die nach dem Hadith am Ende entscheidet? (3) Kann ein Muslim **wissen**, wie sein Gericht ausgeht? Der Koran selbst sagt: „Ich weiß nicht, was mit mir und mit euch geschehen wird" (46:9).`,
    sources: [
      { kind: 'koran', work: 'Sure 21 (al-Anbiya)', ref: '21:47', quote: `Und Wir stellen die gerechten Waagen für den Tag der Auferstehung auf; so wird keiner Seele in irgendetwas Unrecht zugefügt. Und wenn es auch das Gewicht eines Senfkorns sein sollte, bringen Wir es bei.`, translation: 'nach Bubenheim/Elyas', status: 'verbatim', url: 'https://quran.com/21/47' },
      { kind: 'koran', work: 'Sure 101 (al-Qari\'a)', ref: '101:6–9', quote: `Was dann jemanden angeht, dessen Waagschalen schwer sind, der wird in einem zufriedenen Leben sein. Was aber jemanden angeht, dessen Waagschalen leicht sind, dessen Mutter wird ein tiefer Abgrund sein.`, translation: 'nach Bubenheim/Elyas', status: 'verbatim', url: 'https://quran.com/101/6-9' },
      { kind: 'koran', work: 'Sure 7 (al-A\'raf)', ref: '7:8–9', quote: `Das Wägen an jenem Tag ist die Wahrheit. Wessen Waagschalen dann schwer sind, das sind die, denen es wohl ergeht. Und wessen Waagschalen leicht sind, das sind diejenigen, die sich selbst verloren haben.`, translation: 'nach Bubenheim/Elyas', status: 'verbatim', url: 'https://quran.com/7/8-9' },
      { kind: 'hadith', work: 'Sahih al-Bukhari', ref: '6463', quote: `Keinen von euch werden seine Taten retten. Sie sagten: Auch dich nicht, o Gesandter Allahs? Er sagte: Auch mich nicht, es sei denn, Allah umhüllt mich mit Seiner Barmherzigkeit. Seid aufrichtig und maßvoll …`, original: 'وَلاَ أَنَا، إِلاَّ أَنْ يَتَغَمَّدَنِيَ اللَّهُ بِرَحْمَةٍ', translation: 'sinngemäß', status: 'paraphrase', url: 'https://sunnah.com/bukhari:6463', note: 'Kitab ar-Riqaq; Paralleltexte mit „niemand kommt durch seine Taten ins Paradies" u. a. Bukhari 5673, 6467 und Sahih Muslim 2816. Wortlaut je nach Fassung leicht verschieden.' },
    ],
  },
  quickAnswer: `Gerecht wäre ein Gericht, in dem gute Taten schlechte aufwiegen, nicht: Ein Richter spricht keinen Mörder frei, weil er viel gespendet hat – gute Taten schulden wir ohnehin. Darum sagt der Prophet selbst, niemand werde durch seine Taten gerettet, „nicht einmal ich, es sei denn, Allah umhüllt mich mit Barmherzigkeit" (Bukhari 6463). Dann aber lautet die eigentliche Frage: Worauf gründet diese Barmherzigkeit – und kannst du wissen, ob sie dir gilt? Das Evangelium antwortet: Sie gründet auf Christus, der unsere Schuld getragen hat, und darum dürfen wir mit Gewissheit hoffen (1 Joh 5,13).`,
  keyPoints: [
    `**Die Waage ist nicht Gerechtigkeit:** Kein gerechter Richter verrechnet Verbrechen mit guten Taten. Gute Werke sind Pflicht, kein Guthaben (Lk 17,10).`,
    `**Der Islam gibt es selbst zu:** „Niemand wird durch seine Taten gerettet – nicht einmal ich" (Bukhari 6463). „Würde Allah die Menschen für das belangen, was sie erworben haben, ließe Er kein Lebewesen übrig" (35:45).`,
    `**Dann entscheidet die Barmherzigkeit – aber worauf gründet sie?** Wenn nicht auf Gerechtigkeit, ist sie Willkür; im Kreuz gründet sie auf Gottes eigener Tat.`,
    `**Keine Gewissheit:** „Ich weiß nicht, was mit mir und mit euch geschehen wird" (46:9); „Keiner von euch, der nicht hinkommt" (19:71). Das Evangelium schenkt gewisse Hoffnung (1 Joh 5,13; Röm 8,38–39).`,
    `**Keine billige Gnade:** Die orthodoxe Kirche verlangt Umkehr und ein Leben der Liebe; Werke sind Frucht und Mitwirkung, nicht Kaufpreis.`,
    `**Der eigentliche Unterschied:** Nicht Werke gegen Glauben, sondern ob Gott selbst kommt, die Schuld trägt und in uns wohnt.`,
  ],
  argument: {
    name: 'Das Waagschalen-Argument',
    summary: 'Ein Heil durch Aufwiegen von Taten ist weder streng gerecht noch gewiss; nur eine Barmherzigkeit, die die Gerechtigkeit erfüllt, ist beides.',
    premises: [
      {
        text: 'P1: Ein vollkommen gerechter Richter kann schlechte Taten nicht durch gute Taten aufheben lassen.',
        support: 'Gute Taten sind ohnehin geschuldet (Lk 17,10); kein irdisches Gericht spricht einen Dieb frei, weil er auch gespendet hat. Das Unrecht an den Opfern bleibt bestehen.',
      },
      {
        text: 'P2: Alle Menschen haben schlechte Taten begangen.',
        support: 'Röm 3,23; Ps 143,2 – und der Koran: „Würde Allah die Menschen für ihr Unrecht belangen, ließe Er auf ihr kein Lebewesen übrig" (16:61; vgl. 35:45).',
        sources: [
          { kind: 'koran', work: 'Sure 35 (Fatir)', ref: '35:45', quote: `Und wenn Allah die Menschen für das belangen würde, was sie verdient haben, würde Er auf ihrer Oberfläche kein Lebewesen übrig lassen; aber Er stellt sie bis zu einer festgesetzten Frist zurück.`, translation: 'eigene Übersetzung', status: 'verbatim', url: 'https://quran.com/35/45' },
        ],
      },
      {
        text: 'P3: Also kann nach strenger Gerechtigkeit niemand durch seine Taten gerettet werden.',
        support: 'Das bestätigt der Hadith: „Keinen von euch werden seine Taten retten – auch mich nicht, es sei denn, Allah umhüllt mich mit Barmherzigkeit" (Bukhari 6463).',
      },
      {
        text: 'P4: Wenn das Heil dann an Barmherzigkeit hängt, hat diese Barmherzigkeit entweder eine gerechte Grundlage oder sie ist ungeschuldete Nachsicht ohne Erklärung, wie die Gerechtigkeit gewahrt bleibt.',
        support: 'Im Islam vergibt Allah, „wem Er will" (2:284) – die Frage der Gerechtigkeit gegenüber dem Unrecht bleibt offen, und der Einzelne kann sein Urteil nicht kennen (46:9).',
      },
    ],
    conclusion: 'Nur eine Barmherzigkeit, die die Gerechtigkeit selbst erfüllt – Gott trägt in Christus die Schuld –, ist zugleich gerecht und gewiss (Röm 3,26; 1 Joh 5,13).',
  },
  voices: [
    {
      person: 'paulus',
      role: 'als ehemaliger Gesetzeseiferer',
      text: `Paulus kannte den Weg der Werke von innen: „nach der Gerechtigkeit im Gesetz untadelig" (Phil 3,6). Gerade darum schreibt er, dass „aus Werken des Gesetzes kein Fleisch vor ihm gerecht sein wird" (Röm 3,20), und rühmt die Gerechtigkeit, die Gott schenkt. Zugleich weist er den Vorwurf der billigen Gnade scharf zurück: „Sollen wir in der Sünde beharren, damit die Gnade umso mächtiger werde? Das sei ferne!" (Röm 6,1–2).`,
      sources: [{ kind: 'bibel', work: 'Römer / Philipper', ref: 'Röm 3,19–26; 6,1–4; Phil 3,4–9', status: 'paraphrase' }],
    },
    {
      person: 'shenouda-iii',
      role: 'als koptischer Lehrer des Heils',
      text: `Papst Schenuda III. weist in seinen Schriften über das Heil beide Extreme zurück: die Vorstellung, man könne ohne Umkehr und Werke gerettet sein, und die Vorstellung, man könne sich das Heil durch Werke verdienen. Werke sind für ihn Frucht und Zeichen des Glaubens, Sühne aber gibt es allein im Kreuz Christi, weil eine Sünde gegen den unendlichen Gott nur durch einen unendlichen Erlöser gesühnt werden kann.`,
      sources: [{ kind: 'koptisch', author: 'Papst Schenuda III.', work: 'Salvation in the Orthodox Concept', status: 'paraphrase' }],
    },
    {
      person: 'qureshi',
      role: 'als ehemaliger Muslim',
      text: `Qureshi beschreibt die Heilsungewissheit als einen der tiefsten Unterschiede, die er beim Übergang vom Islam zum Christentum erlebte: Als Muslim habe er nie gewusst, ob seine Taten genügen würden; im Evangelium habe er einen Gott gefunden, der den Weg zu ihm nicht am Ende eines Lebens voller Leistung, sondern am Anfang durch seine Gnade öffnet. Er betont zugleich, dass diese Gnade ihn zu einem ernsthafteren, nicht zu einem lässigeren Leben führte.`,
      sources: [{ kind: 'fachliteratur', author: 'Nabeel Qureshi', work: 'No God but One: Allah or Jesus?', year: '2016', status: 'paraphrase' }],
    },
    {
      person: 'kyrill-alexandrien',
      role: 'als Theologe der Teilhabe',
      text: `Für Kyrill besteht das Heil nicht darin, dass der Mensch vor einer Waage besteht, sondern darin, dass er durch den Heiligen Geist und die Eucharistie mit dem lebendigmachenden Fleisch Christi vereint wird und so an Gottes Leben teilhat. Die Werke des Christen sind Ausdruck dieses neuen Lebens; seine Hoffnung ruht auf Christus, der unsere Natur in sich geheiligt hat.`,
      sources: [{ kind: 'kirchenvater', author: 'Kyrill von Alexandrien', work: 'Kommentar zum Johannesevangelium', ref: 'zu Joh 6 und 17', year: 'vor 429', status: 'paraphrase' }],
    },
    {
      person: 'zakaria-botros',
      role: 'als koptischer Islam-Apologet',
      text: `Vater Zakaria Botros hat in seinen Sendungen immer wieder auf Koranverse und Hadithe hingewiesen, die zeigen, dass nach islamischer Lehre niemand seines Heils sicher sein kann – nicht einmal der Prophet –, und ihnen das Angebot gewisser Hoffnung in Christus gegenübergestellt. Er tat das mit der Bitte an seine muslimischen Zuschauer, die Texte selbst zu prüfen.`,
      sources: [{ kind: 'koptisch', author: 'Zakaria Botros', work: 'Arabischsprachige Fernsehsendungen', year: '2000er', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'waage-ist-gerecht',
      objection: `Allah stellt gerechte Waagen auf, und niemandem wird auch nur ein Senfkorn Unrecht getan (21:47). Jeder bekommt genau, was er getan hat (99:7–8). Was könnte gerechter sein?`,
      objectionBy: 'Shabir Ally',
      targetsPremise: 1,
      answer: `Stell dir einen Richter vor: Ein Mann hat einen Menschen getötet, aber er hat auch viel gespendet und vielen geholfen. Der Richter wiegt ab und spricht ihn frei, weil das Gute überwiegt. Wäre das gerecht? Nein – gute Taten schulden wir ohnehin; sie heben ein Verbrechen nicht auf. Jesus sagt: „Wenn ihr alles getan habt, sprecht: Wir haben nur getan, was wir schuldig waren" (Lk 17,10). Ein Aufrechnen von Taten ist nicht strenge Gerechtigkeit.`,
      followUps: [
        {
          id: 'gute-taten-tilgen-11-114',
          objection: `Allah hat aber festgelegt: „Die guten Taten lassen die bösen Taten vergehen" (11:114). Er ist der Gesetzgeber, und Er hat diese Regel gegeben.`,
          objectionBy: 'Yasir Qadhi',
          answer: `Dann ist das, was du beschreibst, nicht strenge Gerechtigkeit, sondern ein Gnadenerweis per Dekret – und dann stimmt die Behauptung „Das Heil durch Werke ist gerecht" so nicht mehr. Außerdem bleibt offen: Wie viel Gutes tilgt wie viel Böses? Welche Tat wiegt wie schwer? Das weiß kein Mensch – und deshalb kann auch niemand sein Urteil kennen.`,
          followUps: [
            {
              id: 'allah-definiert-gerecht',
              objection: `Was Allah bestimmt, ist per Definition gerecht. Du kannst Ihn nicht an menschlichen Maßstäben messen.`,
              objectionBy: 'Mohammed Hijab',
              answer: `Dann wird „Der Islam ist gerecht" zu einer leeren Aussage: Sie bedeutet nur noch „Allah tut, was Er tut". Aber der Koran selbst appelliert an unser Gerechtigkeitsempfinden – „Allah gebietet Gerechtigkeit" (16:90), „Er tut nicht das Gewicht eines Stäubchens Unrecht" (4:40). Und wer das Kreuz als ungerecht kritisiert, benutzt ebenfalls einen Maßstab. Diesen Maßstab müssen wir dann auf beide Seiten anwenden.`,
              followUps: [
                {
                  id: 'kreuz-ungerecht',
                  objection: `Gut – dann wende ihn an: Euer Kreuz bestraft einen Unschuldigen für die Schuldigen. Das ist die größte Ungerechtigkeit überhaupt.`,
                  objectionBy: 'Mohammed Hijab',
                  answer: `Gerechtigkeit verbietet, einen Unschuldigen **gegen seinen Willen** für fremde Schuld zu bestrafen. Sie verbietet nicht, dass der Richter selbst die Strafe trägt. Stell dir vor, der Richter verurteilt den Schuldigen zur vollen Geldstrafe – und steigt dann von seinem Stuhl und bezahlt sie selbst. Das Recht ist gewahrt, und die Barmherzigkeit ist vollkommen. Nach christlichem Glauben ist Christus kein Dritter, sondern Gott selbst, der freiwillig trägt (2 Kor 5,19; Joh 10,18).`,
                  questionsBack: [
                    `Wäre es ungerecht, wenn ein Richter die Strafe, die er verhängt, aus eigener Tasche bezahlt?`,
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'zehnfach-angerechnet',
          objection: `Allah ist sogar großzügiger als gerecht: Gute Taten zählen zehnfach, schlechte nur einfach (6:160). Das System ist zu unseren Gunsten.`,
          objectionBy: 'Jamal Badawi',
          answer: `Das ist Großzügigkeit, keine Gerechtigkeit – und ich freue mich, dass wir uns einig sind, dass es ohne Gnade nicht geht. Aber dann frage ich: Warum sagt der Koran selbst, Allah würde, wenn Er die Menschen für das belangte, was sie verdient haben, „kein Lebewesen auf der Erde übrig lassen" (35:45)? Offenbar reicht selbst die zehnfache Anrechnung bei niemandem aus.`,
          followUps: [
            {
              id: 'vers-35-45-geduld',
              objection: `35:45 spricht von Allahs Geduld: Er bestraft nicht sofort, sondern gibt Aufschub. Es sagt nicht, dass niemand gerecht ist.`,
              objectionBy: 'Muslimischer Gelehrter',
              answer: `Der Vers spricht vom Aufschub – aber er begründet ihn damit, dass sonst **kein Lebewesen** übrig bliebe, wenn Allah nach dem Verdienten handelte. Sure 16:61 sagt dasselbe ausdrücklich „für ihr Unrecht" (bi-zulmihim). Das setzt voraus, dass alle Strafe verdienen. Der Koran und die Bibel sind sich hier einig: „Vor dir ist kein Lebendiger gerecht" (Ps 143,2). Die Frage ist nur, was Gott dagegen tut.`,
              sources: [
                { kind: 'koran', work: 'Sure 16 (an-Nahl)', ref: '16:61', quote: `Und wenn Allah die Menschen für ihr Unrecht belangen würde, würde Er auf ihr kein Lebewesen übrig lassen; aber Er stellt sie bis zu einer festgesetzten Frist zurück.`, original: 'wa-law yuʾākhidhu llāhu n-nāsa bi-ẓulmihim mā taraka ʿalaihā min dābba', translation: 'eigene Übersetzung', status: 'verbatim', url: 'https://quran.com/16/61' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'barmherzigkeit-rettet-auch-im-islam',
      objection: `Du kämpfst gegen einen Strohmann. Kein Muslim glaubt, er verdiene sich das Paradies. Der Prophet sagte selbst: „Niemand kommt durch seine Taten ins Paradies – nicht einmal ich, es sei denn, Allah umhüllt mich mit Barmherzigkeit." Wir werden durch Allahs Barmherzigkeit gerettet, genau wie ihr durch Gnade.`,
      objectionBy: 'Yasir Qadhi',
      targetsPremise: 3,
      answer: `Danke – das ist ein wichtiges Zugeständnis, und ich will den Islam nicht karikieren. Dann sind wir uns einig, dass Taten nicht retten können. Aber dann ist die Waage nicht das Entscheidende, und zwei Fragen werden zentral: Worauf gründet diese Barmherzigkeit – wie bleibt Allah gerecht, wenn Er vergibt? Und kannst du wissen, ob sie dir gilt? Der Prophet selbst sprach von „es sei denn" – also von einer Hoffnung, nicht von einer Gewissheit.`,
      sources: [
        { kind: 'hadith', work: 'Sahih al-Bukhari', ref: '5673', quote: `Niemandes Taten werden ihn ins Paradies bringen. Sie sagten: Auch deine nicht, o Gesandter Allahs? Er sagte: Auch meine nicht, es sei denn, Allah überschüttet mich mit Seiner Huld und Barmherzigkeit.`, translation: 'sinngemäß', status: 'paraphrase', url: 'https://sunnah.com/bukhari:5673', note: 'Kitab al-Marda (Buch der Kranken); Nummer nach sunnah.com-Zählung, vor Verwendung prüfen.' },
      ],
      followUps: [
        {
          id: 'verheissung-sicher',
          objection: `Allah hat den Gläubigen, die Gutes tun, das Paradies versprochen (z. B. 4:122; 9:72), und Allah bricht Sein Versprechen nicht. Also haben wir Gewissheit.`,
          objectionBy: 'Muslimischer Gelehrter',
          answer: `Die Verheißung gilt denen, „die glauben und rechtschaffene Werke tun" – aber wie viele Werke genügen? Wie rechtschaffen? Das weiß niemand. Darum sagt der Prophet im Koran: „Ich weiß nicht, was mit mir und mit euch geschehen wird" (46:9). Und als eine Frau beim Begräbnis Uthman ibn Maz'uns sagte, Allah habe ihn sicher geehrt, antwortete er: „Bei Allah, obwohl ich der Gesandte Allahs bin, weiß ich nicht, was mit mir geschehen wird" (Sahih al-Bukhari 1243).`,
          sources: [
            { kind: 'koran', work: 'Sure 46 (al-Ahqaf)', ref: '46:9', quote: `Sag: Ich bin keine Neuheit unter den Gesandten, und ich weiß nicht, was mit mir und was mit euch geschehen wird. Ich folge nur dem, was mir eingegeben wird.`, original: 'wa-mā adrī mā yufʿalu bī wa-lā bikum', translation: 'nach Bubenheim/Elyas', status: 'verbatim', url: 'https://quran.com/46/9' },
            { kind: 'hadith', work: 'Sahih al-Bukhari', ref: '1243', quote: `Bei Allah, obwohl ich der Gesandte Allahs bin, weiß ich nicht, was mit mir geschehen wird.`, translation: 'sinngemäß', status: 'paraphrase', url: 'https://sunnah.com/bukhari:1243', note: 'Bericht der Umm al-Ala über den Tod Uthman ibn Maz\'uns; Parallelen u. a. Bukhari 3929, 7003, 7018. Manche Fassungen lesen „was mit ihm geschehen wird".' },
          ],
          followUps: [
            {
              id: 'vers-46-9-frueh',
              objection: `46:9 ist ein früher mekkanischer Vers. Später offenbarte Allah: „damit Allah dir deine früheren und späteren Sünden vergebe" (48:2). Der Prophet hatte also Gewissheit.`,
              objectionBy: 'Yasir Qadhi',
              answer: `Nehmen wir an, der Prophet erhielt später persönlich Gewissheit – was ist mit dir? Für den gewöhnlichen Muslim gibt es keinen Vers, der ihm persönlich das Heil zusagt. Im Gegenteil: „Keiner von euch, der nicht dorthin hinabkommt; das ist für deinen Herrn eine beschlossene Entscheidung" (19:71). Der erste Johannesbrief dagegen ist an gewöhnliche Gläubige geschrieben: „damit ihr wisst, dass ihr das ewige Leben habt" (1 Joh 5,13).`,
              sources: [
                { kind: 'koran', work: 'Sure 19 (Maryam)', ref: '19:71–72', quote: `Und es gibt keinen unter euch, der nicht zu ihr hinabkommen wird. Das ist für deinen Herrn eine unabwendbar beschlossene Sache. Hierauf erretten Wir diejenigen, die gottesfürchtig waren, und lassen die Ungerechten darin auf den Knien zurück.`, original: 'wa-in minkum illā wāriduhā', translation: 'nach Bubenheim/Elyas', status: 'verbatim', url: 'https://quran.com/19/71-72', note: 'Viele Exegeten deuten das „Hinabkommen" als Überschreiten der Brücke (sirat) über dem Feuer; die Deutungen gehen auseinander.' },
              ],
              followUps: [
                {
                  id: 'hoffnung-und-furcht',
                  objection: `Das Gleichgewicht von Hoffnung und Furcht ist gesund. Wer sich seines Heils sicher ist, wird hochmütig und nachlässig – siehe die Christen, die meinen, sie seien gerettet, und tun, was sie wollen.`,
                  objectionBy: 'Mohammed Hijab',
                  answer: `Auch die orthodoxe Kirche warnt vor Vermessenheit: „Wer sich lässt dünken, er stehe, mag wohl zusehen, dass er nicht falle" (1 Kor 10,12); sie lehrt nicht „einmal gerettet, immer gerettet". Aber es gibt zwei Arten von Furcht: die Angst eines Angeklagten vor einem unbekannten Urteil und die Ehrfurcht eines Kindes vor seinem Vater. „Ihr habt nicht einen knechtischen Geist empfangen, dass ihr euch abermals fürchten müsstet, sondern einen kindlichen Geist" (Röm 8,15). Und Liebe motiviert tiefer als Angst: „Die völlige Liebe treibt die Furcht aus" (1 Joh 4,18).`,
                  followUps: [
                    {
                      id: 'orthodoxe-auch-ungewiss',
                      objection: `Also seid ihr Orthodoxen auch nicht sicher! Du sagst selbst, man kann abfallen. Dann seid ihr in derselben Lage wie wir.`,
                      objectionBy: 'Mohammed Hijab',
                      answer: `Nicht ganz. Unsere Hoffnung ruht auf einer vollbrachten Tat – Kreuz und Auferstehung – und auf Gottes Zusage an alle, die in Christus bleiben. Ungewiss ist nicht, ob Gottes Barmherzigkeit genügt oder ob meine guten Taten meine schlechten überwiegen, sondern nur, ob ich mich selbst von ihm abwende. Ein Kind im Haus seines Vaters fragt nicht jeden Abend, ob es genug geleistet hat, um bleiben zu dürfen – es kann nur weglaufen. „Nichts kann uns scheiden von der Liebe Gottes, die in Christus Jesus ist" (Röm 8,39).`,
                      sources: [
                        { kind: 'bibel', work: 'Römer', ref: '8,38–39', quote: `Denn ich bin gewiß, daß weder Tod noch Leben, weder Engel noch Fürstentümer noch Gewalten … noch keine andere Kreatur mag uns scheiden von der Liebe Gottes, die in Christo Jesu ist, unserm HERRN.`, translation: 'Luther 1912', status: 'verbatim' },
                      ],
                      questionsBack: [
                        `Worauf ruht deine Hoffnung am Tag des Gerichts – auf deinen Taten oder auf etwas, das Gott schon getan hat?`,
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'billige-gnade',
      objection: `Euer System ist billige Gnade: Ein Mörder bekehrt sich auf dem Sterbebett und kommt ins Paradies, ein lebenslang rechtschaffener Muslim kommt in die Hölle, nur weil er nicht an die Kreuzigung glaubt. Das ist zutiefst ungerecht.`,
      objectionBy: 'Mohammed Hijab',
      answer: `Gnade ist kein Freibrief: „Sollen wir in der Sünde beharren, damit die Gnade umso mächtiger werde? Das sei ferne!" (Röm 6,1–2). Die orthodoxe Kirche verlangt echte Umkehr, und echter Glaube wird „durch die Liebe tätig" (Gal 5,6). Und beachte: Auch der Islam kennt die späte Gnade – „außer dem, der bereut … deren böse Taten wandelt Allah in gute um" (25:70), und Bukhari überliefert, dass ein Mann, der hundert Menschen getötet hatte, vergeben wurde, weil er auf dem Weg der Umkehr starb (Bukhari 3470).`,
      sources: [
        { kind: 'hadith', work: 'Sahih al-Bukhari', ref: '3470', quote: `Ein Mann hatte neunundneunzig Menschen getötet … und dann den hundertsten. Er machte sich auf den Weg zu einem Ort der Frommen, starb unterwegs, und Allah vergab ihm.`, translation: 'sinngemäß, stark gekürzt', status: 'paraphrase', url: 'https://sunnah.com/bukhari:3470', note: 'Parallel Sahih Muslim 2766.' },
        { kind: 'bibel', work: 'Galater', ref: '5,6', quote: `Denn in Christo Jesu gilt weder Beschneidung noch unbeschnitten sein etwas, sondern der Glaube, der durch die Liebe tätig ist.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'orthodoxe-lehren-werke',
          objection: `Moment: Deine orthodoxe Kirche lehrt doch auch Werke – Fasten, Beichte, Sakramente, Almosen. Das ist genau unser Weg! Ihr seid Werkgerechte wie wir.`,
          objectionBy: 'Shabir Ally',
          answer: `Ja, für uns sind Werke wichtig – „Glaube ohne Werke ist tot" (Jak 2,17). Der Unterschied liegt in ihrem Platz: Sie sind nicht Gewichte, die Sünden aufwiegen, sondern Frucht und Mitwirkung mit der Gnade. Paulus sagt beides zugleich: „Schaffet eure Rettung mit Furcht und Zittern, **denn Gott ist's, der in euch wirkt** beides, das Wollen und das Vollbringen" (Phil 2,12–13). Die Vergebung gründet auf Christus; die Werke sind das Leben, das aus ihr wächst.`,
          followUps: [
            {
              id: 'synergie-gleich-islam',
              objection: `„Gnade plus menschliche Mühe" – das ist exakt der Islam: Allahs Hilfe (taufiq) und unsere Taten. Wo ist der Unterschied?`,
              objectionBy: 'Yasir Qadhi',
              answer: `Der Unterschied liegt in der Gabe: Im Islam gibt Gott Rechtleitung, Hilfe und Lohn, aber Er selbst bleibt in Seiner Transzendenz fern. In der Orthodoxie gibt Gott **sich selbst**: Sein Geist wohnt in uns (Röm 8,11), wir werden „teilhaftig der göttlichen Natur" (2 Petr 1,4), wir empfangen in der Eucharistie den Leib und das Blut Christi. Heil ist nicht das Bestehen einer Prüfung, sondern Gemeinschaft mit Gott. Und die Vergebung gründet nicht auf meiner Mitwirkung, sondern auf Kreuz und Auferstehung.`,
              followUps: [
                {
                  id: 'gott-wohnt-nicht-im-menschen',
                  objection: `Dass Gott im Menschen wohnt, ist Beigesellung (schirk) und unmöglich. Allah ist über alles erhaben.`,
                  objectionBy: 'Muslimischer Gelehrter',
                  answer: `Damit hast du den eigentlichen Trennpunkt benannt – nicht „Werke gegen Glauben", sondern ob Gott selbst uns nahe kommt. Jesus sagt: „Wer mich liebt, der wird mein Wort halten, und mein Vater wird ihn lieben, und wir werden zu ihm kommen und Wohnung bei ihm machen" (Joh 14,23). Der Koran sagt, Allah sei dem Menschen „näher als seine Halsschlagader" (50:16). Warum sollte der Allmächtige dem Menschen nicht so nahe kommen können, wie er es will?`,
                  questionsBack: [
                    `Ist es Gott unmöglich, in seinem Geschöpf zu wohnen – oder will er es nur nicht? Woher weißt du das?`,
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'schaecher-am-kreuz',
          objection: `Der Schächer am Kreuz war sein Leben lang ein Verbrecher und kommt in einer Minute ins Paradies (Lk 23,43). Wie soll das gerecht sein gegenüber denen, die ihr Leben lang Gutes getan haben?`,
          objectionBy: 'Jamal Badawi',
          answer: `Jesus hat genau diesen Einwand in einem Gleichnis vorweggenommen: Die Arbeiter der ersten Stunde murren, weil die der letzten Stunde denselben Lohn bekommen – und der Herr fragt: „Siehst du darum scheel, dass ich so gütig bin?" (Mt 20,15). Gnade ist kein Lohn, sondern Geschenk. Und dieselbe Struktur kennt der Islam: Der Mann, der hundert Menschen getötet hatte, wird vergeben, weil er auf dem Weg zur Umkehr starb (Bukhari 3470). Dein Einwand trifft also beide Seiten.`,
          sources: [
            { kind: 'bibel', work: 'Matthäus', ref: '20,13–15', quote: `Mein Freund, ich tue dir nicht unrecht. Bist du nicht mit mir eins geworden um einen Groschen? … Habe ich nicht Macht zu tun, was ich will, mit dem Meinen? Siehest du darum scheel, daß ich so gütig bin?`, translation: 'Luther 1912', status: 'verbatim' },
          ],
        },
      ],
    },
    {
      id: 'mensch-gut-genug',
      objection: `Der Mensch wird rein geboren (fitra). Er ist schwach und vergesslich, aber nicht verdorben. Allah verlangt von keiner Seele mehr, als sie tragen kann (2:286). Wir brauchen keinen Erlöser, sondern Rechtleitung.`,
      objectionBy: 'Shabir Ally',
      targetsPremise: 2,
      answer: `Sure 2:286 ist ein schöner Vers. Aber das Problem ist nicht, was wir tragen **können**, sondern was wir tatsächlich **getan** haben: Niemand hat alles gehalten, was er hätte halten können (35:45). Und Jesus sagt: „Niemand ist gut als Gott allein" (Mk 10,18). Selbst der Prophet bat nach Bukhari mehr als siebzigmal am Tag um Vergebung (Bukhari 6307). Rechtleitung zeigt den Weg – aber sie tilgt nicht, was schon geschehen ist.`,
      sources: [
        { kind: 'hadith', work: 'Sahih al-Bukhari', ref: '6307', quote: `Bei Allah, ich bitte Allah am Tag mehr als siebzigmal um Vergebung und kehre reuig zu Ihm um.`, translation: 'sinngemäß', status: 'paraphrase', url: 'https://sunnah.com/bukhari:6307' },
      ],
      followUps: [
        {
          id: 'istighfar-demut',
          objection: `Dass der Prophet um Vergebung bat, ist Ausdruck seiner Demut und ein Vorbild für uns – kein Beweis für Sünden.`,
          objectionBy: 'Yasir Qadhi',
          answer: `Der Koran selbst sagt zum Propheten: „Bitte um Vergebung für deine Sünde (dhanb)" (47:19) und spricht davon, dass Allah ihm „seine früheren und späteren Sünden" vergibt (48:2). Aber selbst wenn man es als Demut deutet: Wenn der Beste der Geschöpfe um Vergebung bitten musste – wie viel mehr wir? Und auf welcher Grundlage vergibt Gott, ohne ungerecht zu werden?`,
          sources: [
            { kind: 'koran', work: 'Sure 48 (al-Fath)', ref: '48:2', quote: `… damit Allah dir vergebe, was von deiner Sünde vorausgegangen ist und was noch folgen wird.`, original: 'li-yaghfira laka llāhu mā taqaddama min dhanbika wa-mā taʾakhkhar', translation: 'nach Bubenheim/Elyas', status: 'verbatim', url: 'https://quran.com/48/2' },
          ],
          followUps: [
            {
              id: 'propheten-ma-sum',
              objection: `Die Propheten sind sündlos (ma'sum). „Dhanb" meint hier kleine Versehen, keine echten Sünden.`,
              objectionBy: 'Muslimischer Gelehrter',
              answer: `Dann zeigt gerade das, wie hoch Gottes Maßstab ist: Selbst kleine Versehen bedürfen der Vergebung – „wer an einem sündigt, ist's ganz schuldig" (Jak 2,10). Bemerkenswert ist: Beide Schriften kennen nur einen, der ohne Sünde ist. Der Koran nennt Jesus einen „reinen Knaben" (19:19), und nach Bukhari blieb er als Einziger mit seiner Mutter bei der Geburt von Satans Berührung verschont (Bukhari 3431). Das Neue Testament sagt: Er „wusste von keiner Sünde" und wurde „für uns zur Sünde gemacht" (2 Kor 5,21).`,
              sources: [
                { kind: 'koran', work: 'Sure 19 (Maryam)', ref: '19:19', quote: `Er sagte: Ich bin nur der Gesandte deines Herrn, um dir einen reinen Jungen zu schenken.`, original: 'ghulāman zakiyyā', translation: 'nach Bubenheim/Elyas', status: 'verbatim', url: 'https://quran.com/19/19' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'werke-motivieren',
      objection: `Der Islam motiviert zu moralischem Leben, weil jede Tat zählt. Seht euch den Westen an: Christen glauben, sie seien gerettet, und das Ergebnis ist moralischer Verfall.`,
      objectionBy: 'Mohammed Hijab',
      answer: `Dankbarkeit motiviert tiefer als Lohn. Jesus sagt über die Sünderin: „Ihr sind viele Sünden vergeben, denn sie hat viel geliebt; wem aber wenig vergeben wird, der liebt wenig" (Lk 7,47). Aus dieser Dankbarkeit sind Krankenhäuser, Waisenhäuser und die Fürsorge der Kirche in Seuchenzeiten entstanden. Auch die Sufis wissen übrigens, dass Liebe um Gottes willen höher steht als Dienst um Lohn.`,
      followUps: [
        {
          id: 'westen-unmoralisch',
          objection: `Schöne Theorie. Aber in der Praxis sind die christlichen Länder die unmoralischsten der Welt.`,
          objectionBy: 'Mohammed Hijab',
          answer: `Die säkularisierten Gesellschaften Europas sind nicht der Maßstab des Evangeliums – Jesus sagt selbst: „Nicht jeder, der zu mir sagt: Herr, Herr, wird ins Himmelreich kommen" (Mt 7,21). Fair ist nur, Ideal mit Ideal und Praxis mit Praxis zu vergleichen; auch muslimische Gesellschaften kennen Korruption, Gewalt und Heuchelei. Die eigentliche Frage bleibt: Welche Botschaft verwandelt das Herz – der Druck einer Waage oder die Liebe eines Gottes, der uns zuerst geliebt hat?`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Würdest du einen Richter gerecht nennen, der einen Mörder freispricht, weil er auch viel gespendet hat?`,
    `Warum sagt der Prophet, dass ihn seine Taten nicht retten werden, „es sei denn, Allah umhüllt mich mit Barmherzigkeit"?`,
    `Worauf gründet Allahs Barmherzigkeit – und wie bleibt Er gerecht, wenn Er vergibt?`,
    `Wenn du heute sterben würdest: Weißt du, ob deine Waagschale schwer genug ist?`,
    `Was motiviert tiefer: die Angst vor einem unbekannten Urteil oder die Dankbarkeit für eine geschenkte Vergebung?`,
  ],
  avoid: [
    `Nicht behaupten, Muslime glaubten, sie verdienten sich das Paradies „aus eigener Kraft". Sunnitische Theologie betont Allahs Barmherzigkeit; das ist der Strohmann, den Yasir Qadhi sofort entlarvt.`,
    `Nicht protestantisch argumentieren („Werke spielen überhaupt keine Rolle", „einmal gerettet, immer gerettet"). Das ist nicht koptische Lehre und liefert dem Vorwurf der billigen Gnade Munition.`,
    `Nicht mit Angst arbeiten („Du kommst in die Hölle!"). Frage lieber nach der Grundlage der Hoffnung.`,
    `Keine pauschalen Urteile über die Moral muslimischer oder westlicher Gesellschaften.`,
  ],
  concessions: [
    `Der Islam lehrt nicht reine Werkgerechtigkeit; auch dort entscheidet am Ende Allahs Barmherzigkeit.`,
    `Auch die orthodoxe Kirche kennt keine „Heilsgewissheit" im Sinne einer Garantie unabhängig vom Lebenswandel; sie lehrt gewisse Hoffnung und warnt vor Vermessenheit.`,
    `Manche Christen leben tatsächlich so, als sei Gnade ein Freibrief – die Kritik der billigen Gnade trifft sie zu Recht (vgl. Röm 6,1–2).`,
  ],
  furtherReading: [
    { kind: 'koptisch', author: 'Papst Schenuda III.', work: 'Salvation in the Orthodox Concept', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Nabeel Qureshi', work: 'No God but One: Allah or Jesus?', year: '2016', status: 'paraphrase' },
    { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Menschwerdung des Logos (De Incarnatione)', year: 'ca. 318', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Timothy C. Tennent', work: 'Christianity at the Religious Roundtable', year: '2002', status: 'paraphrase', note: 'Evangelisch; vergleicht Heilsverständnis in Islam, Hinduismus und Buddhismus.' },
  ],
  difficulty: 2,
  tags: ['Heil', 'Werke', 'Waagschalen', 'Heilsgewissheit', 'Gnade', 'Gerechtigkeit', 'Synergie'],
  related: [
    'islam-heil-gottesbild/allah-barmherziger',
    'islam-kreuzigung/gott-kann-einfach-vergeben',
    'islam-kreuzigung/keine-erbsuende-fitra',
    'sola-fide/allein-durch-glauben',
    'sola-fide/einmal-gerettet-immer-gerettet',
    'hinduismus/karma-gerechter-als-gnade',
  ],
};

export default claim;
