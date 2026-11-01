import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'quranisten-nur-koran',
  title: `„Wir brauchen die Hadithe nicht – der Koran allein genügt (Quranisten)."`,
  proponents: [
    { name: 'Ghulam Ahmed Parwez', role: 'Pakistanischer Koranausleger (1903–1985), Bewegung Tolu-e-Islam', work: 'Koranauslegungen ohne Bindung an die Hadith-Literatur' },
    { name: 'Rashad Khalifa', role: 'Ägyptisch-amerikanischer Biochemiker und Prediger (1935–1990)', work: 'These vom „Code 19" im Koran; Gemeinschaft „Submitters"' },
    { name: 'Edip Yüksel', role: 'Türkisch-amerikanischer Autor', work: 'Quran: A Reformist Translation (Mitübersetzer, 2007)' },
    { name: 'Ahmed Subhy Mansour', role: 'Ägyptischer Gelehrter, ehemals al-Azhar', work: 'Schriften der „Ahl al-Qur\'an"' },
  ],
  steelman: `„Der Koran sagt selbst, dass er vollständig und ausführlich dargelegt ist: ‚Soll ich einen anderen Richter suchen als Allah, wo Er euch doch das Buch ausführlich dargelegt herabgesandt hat?' (6:114). ‚Wir haben im Buch nichts vernachlässigt' (6:38). Er ist ‚eine Darlegung für alles' (16:89). ‚An welche Aussage (*ḥadīth*) nach Allah und Seinen Zeichen wollen sie denn glauben?' (45:6). Die Hadithe wurden 200 Jahre später gesammelt, widersprechen einander, sind sektiererisch und enthalten Dinge, die dem Koran widersprechen – etwa die Todesstrafe für Apostasie, obwohl der Koran sagt: ‚Kein Zwang im Glauben' (2:256). Sogar ein Hadith sagt, der Prophet habe verboten, etwas außer dem Koran von ihm aufzuschreiben. Die Muslime haben den Propheten zu einem zweiten Gesetzgeber gemacht. Zurück zum Koran allein!"`,
  biblical: {
    summary: `Aus christlicher Sicht ist an den Quranisten zweierlei bemerkenswert. Erstens teilen wir ihre Kritik an der späten und unsicheren Hadith-Überlieferung zum großen Teil. Zweitens führt gerade ihr konsequentes „Nur der Koran" direkt zur Bibel: Der Koran verweist ausdrücklich auf Tora und Evangelium als Rechtleitung, nach der die Christen zur Zeit Mohammeds urteilen sollen (5:47), und er nennt sich selbst „Bestätigung dessen, was vor ihm war" (5:48; 10:37). Wer den Koran allein ernst nimmt, muss auch das Evangelium ernst nehmen, auf das er verweist.`,
    detail: `**Christliche Vergleichsfrage – sola scriptura?** Quranisten erinnern an protestantische Bewegungen, die „allein die Schrift" forderten. Die orthodoxe Kirche hält dagegen: Die Schrift wurde *in* der Kirche geschrieben, bewahrt und ausgelegt; ohne die lebendige Tradition entstehen beliebige Privatdeutungen (2 Petr 1,20). Interessanterweise machen die Quranisten genau diese Erfahrung: Ohne Überlieferung zerfallen sie in viele, einander widersprechende Gruppen. Der entscheidende Unterschied: Die apostolische Tradition ist so alt wie die Schrift selbst (2 Thess 2,15), die Hadith-Sammlungen sind zwei Jahrhunderte jünger als der Koran.`,
    sources: [
      { kind: 'koran', work: 'Sure 5 (al-Ma\'ida)', ref: '5:47', quote: `Und die Leute des Evangeliums sollen nach dem urteilen, was Allah darin herabgesandt hat.`, original: `wa-l-yaḥkum ahlu l-injīli bi-mā anzala llāhu fīhi`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/5/47' },
      { kind: 'koran', work: 'Sure 6 (al-An\'am)', ref: '6:114', quote: `Soll ich denn einen anderen Richter als Allah begehren, wo Er es ist, der euch das Buch ausführlich dargelegt herabgesandt hat?`, original: `wa-huwa lladhī anzala ilaykumu l-kitāba mufaṣṣalan`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/6/114' },
      { kind: 'bibel', work: '2. Thessalonicher', ref: '2,15', quote: `So stehet nun, liebe Brüder, und haltet an den Satzungen, darin ihr gelehret seid, es sei durch unser Wort oder Epistel.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche lehrt, dass Schrift und apostolische Tradition zusammengehören und gemeinsam in der Kirche weitergegeben werden. Die Tradition ist kein späterer Zusatz, sondern die Lebensform, in der die Schrift entstand – Taufe, Eucharistie, Glaubensbekenntnis, Gebet. Athanasius beruft sich auf „die Überlieferung, die Lehre und den Glauben der katholischen Kirche von Anfang an, die der Herr gab, die Apostel verkündeten und die Väter bewahrten". Weil diese Überlieferung so alt ist wie die Schrift, entsteht bei den Christen nicht das Dilemma, vor dem Muslime mit den späten Hadithen stehen.`,
    sources: [
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Erster Brief an Serapion', ref: '1,28', year: 'um 359', quote: `Die Überlieferung, Lehre und der Glaube der katholischen Kirche von Anfang an, die der Herr gab, die Apostel verkündeten und die Väter bewahrten.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Der Quranismus ist eine moderne Strömung mit Vorläufern im 19. und frühen 20. Jahrhundert in Südasien (u. a. ʿAbdullah Chakralawi, die Ahl-e-Qur'an-Bewegung) und in Ägypten. Bekannte Vertreter sind Ghulam Ahmed Parwez (Tolu-e-Islam), Rashad Khalifa (USA, 1990 ermordet), Edip Yüksel und Ahmed Subhy Mansour. Die überwältigende Mehrheit der sunnitischen und schiitischen Gelehrten verwirft den Quranismus – mit dem Argument, ohne Sunna sei der Koran nicht praktizierbar. Unter Quranisten selbst gibt es tiefe Unterschiede, etwa über Zahl und Form der täglichen Gebete.`,
    detail: `**Innere Vielfalt:** Khalifa hielt am fünfmaligen Gebet fest, das er als von Abraham her überliefert ansah; Yüksel und andere vertreten drei Gebetszeiten; Parwez deutete *ṣalāt* stark gesellschaftlich als soziale Ordnung. Einige Quranisten reduzieren die rituelle Waschung auf die in 5:6 genannten Schritte.

**Khalifas Textänderung:** Rashad Khalifa erklärte die beiden letzten Verse der Sure 9 (9:128–129) für nicht ursprünglich, weil sie nicht in sein Zahlensystem passten – ein Beispiel dafür, wie ein überlieferungsfreier Ansatz in Beliebigkeit umschlagen kann.`,
    sources: [
      { kind: 'fachliteratur', author: 'Daniel W. Brown', work: 'Rethinking Tradition in Modern Islamic Thought', year: '1996', quote: `Darstellung der modernen Debatten um die Autorität der Sunna, einschließlich der Ahl-e-Qur'an-Bewegung in Südasien.`, status: 'paraphrase' },
      { kind: 'gegner', author: 'Rashad Khalifa', work: 'Quran: The Final Testament (Übersetzung)', year: '1989', quote: `Khalifa streicht 9:128–129 als spätere Hinzufügung, gestützt auf seine These vom „Code 19".`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Ich teile viel von eurer Kritik an den späten Hadithen. Aber ohne sie könnt ihr nicht einmal sagen, wie man betet, wer Zayd (33:37) oder Abu Lahab (111) war, oder wie der Koran gesammelt wurde. Der Koran befiehlt außerdem, dem Gesandten zu gehorchen (4:59; 59:7) – wie gehorcht man einem Verstorbenen ohne Überlieferung? Und vor allem: Der Koran allein verweist euch auf Tora und Evangelium (5:47; 10:94). Wer konsequent „nur den Koran" will, muss die Bibel lesen.`,
  keyPoints: [
    `**Selbstwiderspruch beim Schreibverbot:** Wer mit einem Hadith (Muslim 3004) beweist, dass man Hadithen nicht folgen soll, sägt am eigenen Ast.`,
    `**Gehorsam gegenüber dem Gesandten:** Der Koran unterscheidet „Gehorcht Allah und gehorcht dem Gesandten" (4:59) und sagt: „Was der Gesandte euch gibt, das nehmt" (59:7).`,
    `**Das Gebet:** Der Koran nennt die Pflicht zum Gebet zu festgesetzten Zeiten (4:103), aber nicht ausdrücklich fünf Gebete, ihre Einheiten oder Worte – Quranisten sind darüber uneins.`,
    `**Kontextlosigkeit:** Zayd (33:37), Abu Lahab (111), der Blinde (80:1–10), der Wechsel der Gebetsrichtung (2:142–144) sind ohne Überlieferung kaum verständlich.`,
    `**Der Koran verweist auf die Bibel:** 5:47; 5:68; 10:94 – konsequenter Quranismus führt zum Islamischen Dilemma.`,
    `**Fairness:** Quranisten lehnen oft die gewaltsamen Hadith-Bestimmungen ab (Apostasie, Steinigung). Das verdient Anerkennung – aber die Koranverse 9:5, 9:29, 4:34 bleiben.`,
  ],
  voices: [
    {
      person: 'athanasius',
      role: 'als Verteidiger von Schrift und Überlieferung gegen Privatauslegung',
      text: `Athanasius stritt gegen die Arianer, die sich ebenfalls auf „die Schrift allein" beriefen und einzelne Verse gegen die Gottheit Christi anführten. Seine Antwort: Man muss die Schrift nach ihrem Gesamtsinn (*skopos*) lesen, wie er in der Kirche von den Aposteln überliefert ist. Ohne diesen Rahmen wird jeder Vers zum Spielball. Die Quranisten erleben genau das: Ohne gemeinsamen Überlieferungsrahmen streiten sie über Gebet, Waschung und Fasten.`,
      sources: [
        { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Reden gegen die Arianer', ref: 'III,28–29', year: 'um 340', quote: `Der Skopos und Charakter der Schrift ist das doppelte Zeugnis über den Erlöser: dass er immer Gott war und dass er später um unseretwillen Mensch wurde.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'david-wood',
      role: 'als Debattierer über die islamischen Quellen',
      text: `Wood weist in Debatten darauf hin, dass der Koran sich wiederholt auf Tora und Evangelium als zeitgenössisch vorhandene Offenbarung beruft. Wer wie die Quranisten den Koran allein gelten lässt, kommt am Islamischen Dilemma nicht vorbei: Entweder waren die Schriften der Christen zur Zeit Mohammeds zuverlässig – dann widerspricht der Koran ihnen –, oder sie waren verfälscht – dann irrt der Koran, wenn er die Christen auffordert, nach ihnen zu urteilen.`,
    },
    {
      person: 'gabriel-reynolds',
      role: 'als Koranforscher',
      text: `Reynolds betont, dass der Koran ein Text ist, der seine Hörer als vertraut mit biblischen Erzählungen voraussetzt: Er spielt an, statt zu erzählen, und erwartet, dass man Noah, Abraham, Mose und Jesus kennt. Ein Koran „ohne alles andere" ist daher eine moderne Fiktion; der Text selbst ruft nach seinem biblischen Hintergrund.`,
      sources: [
        { kind: 'fachliteratur', author: 'Gabriel Said Reynolds', work: 'The Qur\'an and the Bible: Text and Commentary', year: '2018', quote: `Der Koran setzt biblische Stoffe voraus und lässt sich nur im Gespräch mit ihnen verstehen.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'zakaria-botros',
      role: 'als koptischer Kenner der klassischen islamischen Quellen',
      text: `Zakaria Botros zeigt in seinen Sendungen, dass die klassische islamische Gelehrsamkeit selbst auf die Hadithe angewiesen ist, um den Koran zu erklären. Er stellt Muslime vor die Frage, ob sie die Quellen, auf die sich ihre Gelehrten berufen, annehmen oder verwerfen – ein Weg, der viele zum Nachdenken über die Grundlagen ihres Glaubens geführt hat.`,
    },
  ],
  dialog: [
    {
      id: 'koran-vollstaendig-detailliert',
      objection: `Der Koran sagt selbst, er sei ausführlich dargelegt (6:114), er habe nichts vernachlässigt (6:38) und sei eine Darlegung für alles (16:89). Wozu brauchen wir dann noch Hadithe?`,
      objectionBy: 'Edip Yüksel',
      answer: `Dann zeig mir im Koran, wie das Pflichtgebet geht: Wie viele Gebete täglich, wie viele Einheiten, welche Worte? Der Koran spricht vom Gebet zu „festgesetzten Zeiten" (4:103), nennt aber nicht ausdrücklich fünf Gebete und keine Gebetsabfolge. Wenn „ausführlich dargelegt" bedeutete, dass jedes Detail darin steht, müsste das Wichtigste – das tägliche Gebet – vollständig beschrieben sein.`,
      sources: [
        { kind: 'koran', work: 'Sure 4 (an-Nisa\')', ref: '4:103', quote: `Das Gebet ist für die Gläubigen eine zu bestimmten Zeiten festgesetzte Vorschrift.`, original: `inna ṣ-ṣalāta kānat ʿalā l-muʾminīna kitāban mawqūtā`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/4/103' },
      ],
      followUps: [
        {
          id: 'gebet-von-abraham',
          objection: `Das Gebet wurde praktisch von Abraham her überliefert – durch die Praxis der Gemeinschaft, nicht durch Hadithe. Die Praxis ist *mutawātir*.`,
          objectionBy: 'Rashad Khalifa',
          answer: `Dann gibst du zu, dass es neben dem Koran einen zweiten Überlieferungskanal braucht – die gelebte Praxis der Gemeinschaft. Genau das nennen die Sunniten *Sunna*. Du hast die Tradition nur durch die Hintertür wieder hereingeholt, und zwar ohne Belege: Eine abrahamische Gebetsform ist außerhalb der muslimischen Gemeinschaft nirgends bezeugt.`,
          followUps: [
            {
              id: 'praxis-nicht-faelschbar',
              objection: `Praxis ist etwas anderes als Worte. Millionen Menschen beten seit 1.400 Jahren gleich – das kann man nicht fälschen.`,
              objectionBy: 'Rashad Khalifa',
              answer: `Aber die Praxis ist nicht einheitlich: Sunniten und Schiiten unterscheiden sich (Haltung der Hände, Zusammenlegen von Gebeten), ebenso die Rechtsschulen. Und unter euch Quranisten beten manche fünfmal, andere dreimal, und Parwez verstand *ṣalāt* vor allem als gesellschaftliche Ordnung. Wenn die Praxis unfälschbar überliefert wäre, gäbe es diese Unterschiede nicht.`,
              followUps: [
                {
                  id: 'gebet-persoenlich',
                  objection: `Dann ist die genaue Form eben nicht wichtig. Gott schaut ins Herz, nicht auf die Zahl der Verbeugungen.`,
                  objectionBy: 'liberale Quranisten',
                  answer: `Das klingt sympathisch und ist dem christlichen Gebetsverständnis nicht fern. Aber dann hast du zugegeben, dass der Koran ein Gebot enthält („festgesetzte Zeiten"), dessen Inhalt er nicht ausführt – also ist „ausführlich dargelegt" (6:114) nicht im Sinn von „alle Einzelheiten" gemeint. Damit fällt dein Ausgangsargument gegen die Hadithe.`,
                  questionsBack: [
                    `Wenn der Koran das Gebet nicht vollständig beschreibt – in welchem Sinn ist er dann eine „Darlegung für alles"?`,
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'code-19-beweis',
          objection: `Der Koran braucht keine Hadithe, weil er sich mathematisch selbst beweist: Der Code 19 (74:30) zeigt seinen göttlichen Ursprung.`,
          objectionBy: 'Rashad Khalifa',
          answer: `Khalifa musste die beiden letzten Verse der Sure 9 (9:128–129) streichen, damit sein Code aufging. Ein „Beweis", der nur funktioniert, wenn man den Text ändert, beweist nicht den Text, sondern die Methode des Rechners. Die große Mehrheit der Muslime hat das deshalb zu Recht abgelehnt.`,
        },
      ],
    },
    {
      id: 'schreibverbot-muslim-3004',
      objection: `Der Prophet selbst hat verboten, etwas außer dem Koran von ihm aufzuschreiben (Muslim 3004). Die Hadith-Sammler haben gegen seinen Willen gehandelt.`,
      objectionBy: 'Ahmed Subhy Mansour',
      answer: `Beachte das Paradox: Du zitierst ein Hadith, um zu beweisen, dass man Hadithen nicht folgen soll. Ist es echt, dann können Hadithe echt sein, und du musst die übrigen prüfen statt sie pauschal zu verwerfen. Ist es nicht echt, fällt dein Argument. Außerdem befiehlt der Koran ausdrücklich: „Gehorcht Allah und gehorcht dem Gesandten" (4:59) und „Was der Gesandte euch gibt, das nehmt" (59:7). Einem Verstorbenen gehorcht man nur über Berichte von seinen Worten.`,
      sources: [
        { kind: 'koran', work: 'Sure 59 (al-Hashr)', ref: '59:7', quote: `Was der Gesandte euch gibt, das nehmt; und was er euch untersagt, dessen enthaltet euch.`, original: `wa-mā ātākumu r-rasūlu fa-khudhūhu wa-mā nahākum ʿanhu fa-ntahū`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/59/7' },
        { kind: 'koran', work: 'Sure 4 (an-Nisa\')', ref: '4:59', quote: `O die ihr glaubt, gehorcht Allah und gehorcht dem Gesandten und den Befehlshabern unter euch.`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/4/59' },
      ],
      followUps: [
        {
          id: 'gehorsam-heisst-koran',
          objection: `Dem Gesandten zu gehorchen heißt, dem Koran zu gehorchen, den er brachte. Parwez hat gezeigt: „Allah und der Gesandte" bezeichnet die zentrale Autorität der islamischen Ordnung.`,
          objectionBy: 'Ghulam Ahmed Parwez',
          answer: `Warum unterscheidet der Koran dann ausdrücklich zwischen Gehorsam gegenüber Allah und gegenüber dem Gesandten, und warum sollen Streitigkeiten dem Gesandten zur Entscheidung vorgelegt werden (4:65)? Die Deutung als „zentrale Staatsautorität" ist eine Neuerung des 20. Jahrhunderts, die in 1.300 Jahren islamischer Auslegung keine Vorläufer hat.`,
          followUps: [
            {
              id: 'prophet-zweiter-gesetzgeber',
              objection: `Die Sunniten haben den Propheten zu einem zweiten Gesetzgeber neben Gott gemacht. Das ist eine Art Schirk in der Gesetzgebung.`,
              objectionBy: 'Edip Yüksel',
              answer: `Die Sorge, Gottes Wort könne durch Menschenwort ergänzt werden, verstehe ich. Aber dann musst du erklären, wie die gesamte Umma – einschließlich der Gefährten – 1.300 Jahre lang in diesem Grundsatz irrte. Und der Koran sagt von der muslimischen Gemeinschaft: „Ihr seid die beste Gemeinschaft, die für die Menschen hervorgebracht wurde" (3:110).`,
              followUps: [
                {
                  id: 'umma-hat-geirrt',
                  objection: `Ja, die Umma hat geirrt – so wie die Christen nach Jesus sein Evangelium verdorben haben.`,
                  objectionBy: 'Edip Yüksel',
                  answer: `Dann trifft das islamische Argument gegen die Kirche den Islam selbst: Wenn die Umma *mit* einem bewahrten Buch in der Hand innerhalb von zwei Jahrhunderten in die Irre ging, dann garantiert ein bewahrtes Buch keinen rechten Glauben. Und du musst erklären, warum die Wahrheit erst im 20. Jahrhundert wieder auftauchte. Die Kirche dagegen kann zeigen, dass ihr Glaube an Kreuz und Auferstehung schon im ältesten Bekenntnis steht (1 Kor 15,3–5).`,
                  questionsBack: [
                    `Wenn die Umma so schnell irren konnte – warum soll das, was du heute aus dem Koran liest, sicherer sein?`,
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'hadithe-widerspruechlich',
      objection: `Die Hadithe sind widersprüchlich, sektiererisch und spät. Wir Quranisten sind die Einzigen, die konsequent sind: Gottes Buch allein.`,
      objectionBy: 'Edip Yüksel',
      answer: `In vielem gebe ich dir recht – die Hadithe sind spät und oft widersprüchlich. Aber ohne Überlieferung verliert der Koran seinen Kontext: Wer ist Zayd (33:37)? Wer ist Abu Lahab (Sure 111)? Wer ist „der Blinde", über den der Prophet die Stirn runzelte (80:1–10)? Der Name Mohammed kommt im Koran nur viermal vor (3:144; 33:40; 47:2; 48:29); fast alles, was Muslime über sein Leben wissen, steht nicht im Koran.`,
      followUps: [
        {
          id: 'koran-erklaert-sich-selbst',
          objection: `Der Koran erklärt sich selbst – Vers erklärt Vers (*tafsīr al-qurʾān bi-l-qurʾān*). Man braucht keine Geschichten von außen.`,
          objectionBy: 'Ahmed Subhy Mansour',
          answer: `Dann erkläre allein aus dem Koran, warum die Gebetsrichtung gewechselt wurde (2:142–144), wer „der Zweite von zweien in der Höhle" ist (9:40) oder welches Geheimnis zwei Frauen des Propheten ausplauderten (66:1–5). Diese Verse setzen Geschehnisse voraus, die der Text nicht erzählt.`,
          followUps: [
            {
              id: 'details-unwichtig',
              objection: `Diese historischen Einzelheiten sind unwichtig. Die Botschaft des Korans ist zeitlos.`,
              objectionBy: 'Edip Yüksel',
              answer: `Warum hat Gott dann diese historischen Anspielungen bewahrt? Und woher weißt du ohne Überlieferung, dass Mohammed den Koran brachte, welche 114 Suren dazugehören und in welcher Reihenfolge? Kanon, Anordnung und Lesarten des Korans kamen über dieselben Gemeinden und Gelehrten zu uns wie die Hadithe.`,
              followUps: [
                {
                  id: 'handschriften-genuegen',
                  objection: `Die frühen Koranhandschriften – Birmingham, Sanaa – belegen den Text unabhängig von den Hadithen.`,
                  objectionBy: 'Edip Yüksel',
                  answer: `Frühe Handschriften belegen frühe Textformen – das gestehe ich zu. Aber sie zeigen auch Varianten (etwa die untere Schrift des Sanaa-Palimpsests), und sie sagen nichts darüber, wer den Text verfasste oder was er den ersten Hörern bedeutete. Zum Vergleich: Für das Neue Testament gibt es eine noch dichtere und ältere Handschriftenlage relativ zum Abfassungszeitpunkt.`,
                  detail: `Siehe Claim „Der Koran ist Buchstabe für Buchstabe perfekt bewahrt".`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'ohne-hadith-keine-gewalt',
      objection: `Ohne Hadithe fallen die problematischen Lehren weg: Todesstrafe für Apostasie, Steinigung, Aischas Alter – all das steht nur in den Hadithen, nicht im Koran.`,
      objectionBy: 'reformorientierte Quranisten',
      answer: `Dass ihr Gewalt im Namen der Religion ablehnt, begrüße ich ausdrücklich. Aber manches bleibt im Koran selbst: 9:5 und 9:29 (Kampf gegen Ungläubige), 5:33 und 5:38 (Kreuzigung, Amputation), 24:2 (Auspeitschung), 4:34 (Schlagen der Frau), 4:3 und 23:5–6 (Mehrehe und Sklavinnen). Und vor allem verweist euch der Koran über sich hinaus – auf Tora und Evangelium (5:47; 5:68; 10:94).`,
      sources: [
        { kind: 'koran', work: 'Sure 5 (al-Ma\'ida)', ref: '5:68', quote: `Sag: O Leute der Schrift, ihr fußt auf nichts, bis ihr die Tora und das Evangelium befolgt und das, was zu euch von eurem Herrn herabgesandt worden ist.`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/5/68' },
        { kind: 'koran', work: 'Sure 10 (Yunus)', ref: '10:94', quote: `Wenn du über das, was Wir zu dir herabgesandt haben, im Zweifel bist, so frag diejenigen, die vor dir die Schrift lesen.`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/10/94' },
      ],
      followUps: [
        {
          id: 'urspruengliche-tora-injil',
          objection: `Mit Tora und Evangelium meint der Koran die ursprünglichen Offenbarungen an Mose und Jesus, nicht eure heutige Bibel.`,
          objectionBy: 'Edip Yüksel',
          answer: `5:47 fordert die Christen *zur Zeit Mohammeds* auf, nach dem zu urteilen, was Gott „darin" herabgesandt hat; 5:43 sagt, die Juden hätten die Tora „bei sich". Das setzt voraus, dass diese Schriften damals vorhanden waren. Und die Bibel des 7. Jahrhunderts ist dieselbe wie unsere – das zeigen Handschriften wie der Codex Sinaiticus und Vaticanus aus dem 4. Jahrhundert.`,
          followUps: [
            {
              id: 'koran-muhaymin',
              objection: `Der Koran ist *muhaymin* – Wächter über die früheren Schriften (5:48). Er entscheidet, was darin wahr ist.`,
              objectionBy: 'Edip Yüksel',
              answer: `Derselbe Vers nennt den Koran „Bestätigung dessen, was vor ihm von der Schrift vorhanden war". Ein Wächter, der bestätigt, was „vor ihm" liegt, kann nicht gleichzeitig behaupten, es sei verloren. Frag dich: Nach welchen Versen des Evangeliums sollte ein Christ im Jahr 630 urteilen, wenn nicht nach denen in seinen Händen?`,
              detail: `Siehe Claim „Der Koran ist Wächter (muhaymin) über die früheren Schriften".`,
              followUps: [
                {
                  id: 'nur-uebereinstimmende-teile',
                  objection: `Dann meinte der Koran eben nur die Teile des Evangeliums, die mit ihm übereinstimmen.`,
                  objectionBy: 'Edip Yüksel',
                  answer: `Das ist ein Zirkelschluss: Dann wäre der Koran der einzige Maßstab, und der Befehl, nach dem Evangelium zu urteilen, wäre bedeutungslos – man könnte gleich „urteilt nach dem Koran" sagen. Der Text fordert die Christen aber auf, nach *ihrer* Schrift zu urteilen. Genau hier beginnt das Islamische Dilemma.`,
                  questionsBack: [
                    `Wenn du den Koran allein ernst nimmst – warum nimmst du dann seinen Befehl nicht ernst, das Evangelium zu lesen?`,
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wie viele Pflichtgebete am Tag nennt der Koran ausdrücklich – und mit welchen Worten soll man beten?`,
    `Wie gehorchst du dem Gesandten (4:59; 59:7), wenn du keine Berichte über seine Worte annimmst?`,
    `Woher weißt du, welche Suren zum Koran gehören, wenn nicht aus der Überlieferung?`,
    `Der Koran verweist auf Tora und Evangelium (5:47; 10:94) – hast du sie schon gelesen?`,
  ],
  avoid: [
    `Quranisten nicht wie gewöhnliche Sunniten behandeln: Hadith-Argumente (Bukhari, Muslim) überzeugen sie nicht. Arbeite mit dem Koran selbst.`,
    `Nicht die Reformbereitschaft der Quranisten belächeln. Viele lehnen Gewalt und Zwang ab – das ist ehrenwert.`,
    `Nicht behaupten, alle Quranisten folgten Rashad Khalifa. Die Strömung ist sehr vielfältig.`,
  ],
  concessions: [
    `Die Kritik der Quranisten an der späten Entstehung und den Widersprüchen der Hadithe ist in vielen Punkten berechtigt.`,
    `Viele harte Bestimmungen des klassischen islamischen Rechts (Apostasie, Steinigung) stehen tatsächlich nicht im Koran, sondern in den Hadithen.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Daniel W. Brown', work: 'Rethinking Tradition in Modern Islamic Thought', year: '1996', status: 'paraphrase' },
    { kind: 'gegner', author: 'Edip Yüksel / Layth Saleh al-Shaiban / Martha Schulte-Nafeh', work: 'Quran: A Reformist Translation', year: '2007', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Gordon D. Nickel', work: 'The Gentle Answer to the Muslim Accusation of Biblical Falsification', year: '2015', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Islam', 'Quranismus', 'Hadith', 'Sunna', 'Islamisches Dilemma'],
  related: [
    'islam-hadith-sira/isnad-wissenschaftlich-gesichert',
    'islam-dilemma/das-islamische-dilemma',
    'islam-dilemma/muhaymin-5-48',
    'islam-dilemma/injil-ist-nicht-das-nt',
    'islam-koran/koran-klar-vollstaendig',
    'islam-koran/koran-perfekt-bewahrt',
    'sola-scriptura',
  ],
};

export default claim;
