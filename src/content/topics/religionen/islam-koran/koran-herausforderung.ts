import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'koran-herausforderung',
  title: `„Niemand kann eine Sure wie den Koran hervorbringen (2:23 – I'jaz)."`,
  proponents: [
    { name: 'Hamza Andreas Tzortzis', role: 'Islamischer Autor und Apologet', work: 'The Divine Reality (2016); Schriften zur literarischen Unnachahmlichkeit des Korans' },
    { name: 'Nouman Ali Khan', role: 'Islamischer Prediger, Bayyinah Institute', work: 'Vorträge über die sprachlichen Wunder des Korans' },
    { name: 'Mohammed Hijab', role: 'Islamischer Debattierer, London', work: 'Debatten über die Herausforderung des Korans' },
    { name: 'Abd al-Qahir al-Jurjani', role: 'Klassischer Sprachgelehrter (gest. 1078)', work: 'Dala\'il al-I\'jaz' },
  ],
  steelman: `„Der Koran fordert seine Gegner fünfmal heraus, etwas Gleichwertiges hervorzubringen – zuletzt nur eine einzige Sure (2:23; 10:38; 11:13; 17:88; 52:34). Die Araber des 7. Jahrhunderts waren Meister der Dichtung und Redekunst und Mohammeds erbitterte Feinde; hätten sie die Herausforderung erfüllen können, hätten sie es getan, statt Kriege zu führen. Der Koran ist weder Poesie noch gewöhnliche Prosa, sondern eine einzigartige Form, die Klang, Bedeutung und Struktur auf unvergleichliche Weise verbindet. Und er stammt von einem Mann, der weder lesen noch schreiben konnte (*ummī*). Seit 1.400 Jahren ist niemandem gelungen, was der Koran fordert. Das ist ein bleibendes Wunder."`,
  biblical: {
    summary: `Die Herausforderung (2:23 u. a.) nennt **kein überprüfbares Kriterium**: Wer entscheidet, was „wie der Koran" ist, und nach welchen Maßstäben? Literarische Einzigartigkeit beweist keine göttliche Herkunft – jedes große Werk (Homer, Shakespeare, al-Mutanabbi) ist in seiner Art unnachahmlich. Die Bibel nennt andere Kriterien für einen Propheten: Übereinstimmung mit der bisherigen Offenbarung (Dtn 13,1–5; Gal 1,8) und Eintreffen seiner Vorhersagen (Dtn 18,21–22) – nicht sprachliche Schönheit.`,
    detail: `**Innerislamische Debatte:** Die Lehre von der Unnachahmlichkeit (*iʿjāz*) wurde erst über Jahrhunderte ausgearbeitet. Der Muʿtazilit an-Nazzam (9. Jh.) vertrat die *ṣarfa*-Lehre: Der Koran sei nicht aus sich heraus unnachahmlich, sondern Gott halte die Menschen davon ab (*ṣarafa*), ihn nachzuahmen. Selbst im Islam war also umstritten, *worin* das Wunder besteht.

**Sprachliche Besonderheiten:** Klassische Grammatiker diskutierten Stellen, die von den später kodifizierten Regeln abweichen – etwa 2:177 (*wa-ṣ-ṣābirīna* im Akkusativ), 4:162 (*wa-l-muqīmīna*), 5:69 (*wa-ṣ-ṣābiʾūna* im Nominativ nach *inna*) und 20:63 (*in hādhāni la-sāḥirāni*). Muslimische Gelehrte erklären sie als bewusste rhetorische Konstruktionen (etwa „Akkusativ des Lobes"). Da die arabische Grammatik aber erst nach dem Koran – auch auf seiner Grundlage – kodifiziert wurde, kann der Koran an ihr kaum scheitern.`,
    sources: [
      { kind: 'koran', work: 'Sure 2 (al-Baqara)', ref: '2:23', quote: `Und wenn ihr im Zweifel seid über das, was Wir auf Unseren Diener herabgesandt haben, so bringt doch eine Sure gleicher Art bei und ruft eure Zeugen außer Allah an, wenn ihr wahrhaftig seid.`, original: `fa-tū bi-sūratin min mithlihi`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/2/23' },
      { kind: 'koran', work: 'Sure 17 (al-Isra\')', ref: '17:88', quote: `Sag: Wenn sich die Menschen und die Dschinn zusammentäten, um etwas wie diesen Koran beizubringen, sie brächten nichts Gleiches bei, auch wenn sie einander beistünden.`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/17/88' },
      { kind: 'bibel', work: '5. Mose (Deuteronomium)', ref: '18,21–22', quote: `Woran erkennt man ein Wort, das der HERR nicht geredet hat? Wenn der Prophet redet im Namen des HERRN, und es wird nichts daraus und kommt nicht – das ist das Wort, das der HERR nicht geredet hat.`, translation: 'Luther 1912', status: 'paraphrase' },
      { kind: 'bibel', work: '5. Mose (Deuteronomium)', ref: '13,1–4', quote: `Selbst wenn ein Prophet ein Zeichen gibt, das eintrifft, aber zu anderen Göttern führt, soll man nicht auf ihn hören.`, translation: 'Luther 1912', status: 'paraphrase' },
    ],
  },
  church: {
    summary: `Die Kirche hat Offenbarung nie an Stilschönheit gemessen. Die Apostel predigten „nicht mit hohen Worten oder hoher Weisheit" (1 Kor 2,1–5), sondern bezeugten, was sie gesehen hatten. Christliche Theologen in der islamischen Welt antworteten auf die Herausforderung des Korans mit der Frage nach Zeugen und Zeichen: Johannes von Damaskus fragte, wer bezeugt habe, dass Mohammed eine Schrift empfing – während Mose am Sinai vor dem ganzen Volk Gottes Gesetz empfing; Theodor Abu Qurra fragte, an welchen von der jeweiligen Religion unabhängigen Kriterien man die wahre Religion erkennt.`,
    sources: [
      { kind: 'bibel', work: '1. Korinther', ref: '2,4–5', quote: `Und mein Wort und meine Predigt war nicht in vernünftigen Reden menschlicher Weisheit, sondern in Beweisung des Geistes und der Kraft, auf daß euer Glaube bestehe nicht auf Menschenweisheit, sondern auf Gottes Kraft.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'kirchenvater', author: 'Johannes von Damaskus', work: 'Über die Häresien', ref: 'Kap. 100', year: 'um 740', quote: `Fragt, wer bezeugt habe, dass Mohammed eine Schrift empfing, und stellt dem Mose gegenüber, der vor den Augen des Volkes am Sinai das Gesetz empfing.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Die Herausforderung nennt kein Kriterium und keinen neutralen Richter – deshalb kann sie nie scheitern: Jeder Versuch wird von Gläubigen als „nicht gleichwertig" beurteilt. Literarische Größe beweist keine göttliche Herkunft; auch Shakespeare oder der Dichter al-Mutanabbi sind unnachahmlich. Und selbst muslimische Gelehrte wie an-Nazzam bestritten, dass der Koran sprachlich aus sich heraus unnachahmlich sei.`,
  keyPoints: [
    `**Kein Kriterium, kein Richter:** Was „gleichwertig" heißt und wer urteilt, bleibt offen – damit ist die Herausforderung nicht überprüfbar.`,
    `**Einzigartigkeit ist kein Gottesbeweis:** Jedes große Kunstwerk ist in seiner Art unnachahmlich.`,
    `**Innerislamischer Streit:** Die *ṣarfa*-Lehre an-Nazzams bestreitet die innere sprachliche Unnachahmlichkeit.`,
    `**Grammatikalische Diskussionen:** Klassische Grammatiker diskutierten Stellen wie 2:177, 4:162, 5:69 und 20:63; die Grammatik wurde zudem nach dem Koran kodifiziert.`,
    `**Biblische Kriterien:** Übereinstimmung mit früherer Offenbarung und erfüllte Vorhersagen – nicht Stil (Dtn 13; 18).`,
  ],
  voices: [
    {
      person: 'johannes-damaskus',
      role: 'als Kenner des frühen Islam',
      text: `Johannes von Damaskus stellt dem Anspruch Mohammeds die Frage nach den Zeugen gegenüber: Mose empfing das Gesetz auf dem Sinai, während das ganze Volk den Berg in Rauch und Feuer sah; die Propheten kündigten Christus über Jahrhunderte an. Wer aber bezeugt, dass Mohammed sein Buch von Gott empfing? Für Johannes muss sich eine Offenbarung durch öffentliche Bezeugung und durch die Übereinstimmung mit der früheren Offenbarung ausweisen, nicht durch ihren Selbstanspruch.`,
      sources: [
        { kind: 'kirchenvater', author: 'Johannes von Damaskus', work: 'Über die Häresien', ref: 'Kap. 100', year: 'um 740', quote: `Frage nach Zeugen für den Empfang der Schrift; Vergleich mit Mose am Sinai.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'abu-qurra',
      role: 'als christlich-arabischer Religionsphilosoph',
      text: `Abu Qurra fragt, woran man die wahre Religion erkennt, wenn alle Religionen sich auf Gott berufen. Seine Antwort: an Kriterien, die nicht vom Selbstanspruch abhängen – etwa daran, dass eine Religion sich nicht durch Gewalt, Bestechung oder Nachgiebigkeit gegenüber menschlichen Begierden ausbreitete, sondern trotz ihrer Anforderungen durch Zeichen Gottes. Sprachliche Schönheit gehört für ihn nicht zu diesen Kriterien.`,
      sources: [
        { kind: 'kirchenvater', author: 'Theodor Abu Qurra', work: 'Über die Existenz des Schöpfers und die wahre Religion', year: 'frühes 9. Jh.', quote: `Kriterien zur Unterscheidung der wahren Religion unabhängig vom Selbstanspruch.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'qureshi',
      role: 'als ehemaliger Muslim',
      text: `Qureshi beschreibt, wie ihn als jungen Muslim die Schönheit der Rezitation tief bewegte – und wie er später erkannte, dass dieses Gefühl kein Beweis ist: Gläubige anderer Religionen empfinden dasselbe bei ihren heiligen Texten. Er prüfte deshalb, ob es objektive Kriterien für die Herausforderung gibt, und fand, dass sie letztlich vom Urteil der Gläubigen abhängt.`,
      sources: [
        { kind: 'fachliteratur', author: 'Nabeel Qureshi', work: 'No God but One: Allah or Jesus?', year: '2016', quote: `Prüfung der Argumente für die göttliche Herkunft des Korans, darunter die literarische Herausforderung.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'gabriel-reynolds',
      role: 'als Koranforscher',
      text: `Reynolds zeigt, dass der Koran ständig auf biblische und spätantike Überlieferungen anspielt und ein Publikum voraussetzt, das sie kennt. Seine Sprache und Form stehen im Gespräch mit der religiösen Literatur seiner Zeit, besonders der syrisch-christlichen Predigt. Das macht den Koran zu einem faszinierenden Text seiner Epoche – aber gerade nicht zu einem Werk ohne jede Vorlage und Analogie.`,
      sources: [
        { kind: 'fachliteratur', author: 'Gabriel Said Reynolds', work: 'The Qur\'an and Its Biblical Subtext', year: '2010', quote: `Der Koran als homiletischer Text im Gespräch mit biblischen und nachbiblischen Traditionen.`, status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'niemand-hat-es-geschafft',
      objection: `In 1.400 Jahren hat niemand eine einzige Sure wie den Koran hervorgebracht – nicht einmal die besten arabischen Dichter. Das ist ein Wunder.`,
      objectionBy: 'Mohammed Hijab',
      answer: `Woran würdest du erkennen, dass jemand es geschafft hat? Wer ist der Richter, und welche Kriterien gelten? Solange das offen ist, kann die Herausforderung nie scheitern, denn jeder Versuch wird von Gläubigen als „nicht gleichwertig" beurteilt. Eine Behauptung, die durch nichts widerlegt werden kann, ist kein Beweis.`,
      questionsBack: [
        `Nenne mir die Kriterien, nach denen ein Text „wie der Koran" wäre – und einen neutralen Richter.`,
      ],
      followUps: [
        {
          id: 'arabische-experten-urteilen',
          objection: `Die Kriterien sind klar: Experten der arabischen Sprache erkennen die einzigartige Verbindung von Klang, Rhythmus, Bedeutung und Struktur. Selbst Mohammeds Feinde mussten das zugeben.`,
          objectionBy: 'Hamza Andreas Tzortzis',
          answer: `Experten bewundern auch Shakespeare oder den Dichter al-Mutanabbi als unübertroffen – ohne daraus göttliche Herkunft abzuleiten. Und innerhalb des Islam war das umstritten: Der Gelehrte an-Nazzam lehrte, nicht der Text selbst sei unnachahmlich, sondern Gott hindere die Menschen daran, ihn nachzuahmen (*ṣarfa*). Wenn selbst muslimische Gelehrte darüber stritten, ist es kein offensichtliches Kriterium.`,
          followUps: [
            {
              id: 'musaylima-laecherlich',
              objection: `Die Versuche, etwa von Musaylima, waren lächerlich. Daran sieht man den Unterschied.`,
              objectionBy: 'verbreiteter muslimischer Einwand',
              answer: `Musaylimas Texte kennen wir nur aus den Berichten seiner Gegner, die ihn als „Lügner" überlieferten – kein faires Material für einen Vergleich. Seine Anhänger hielten seine Worte für Offenbarung. Genau das zeigt das Problem: Das Urteil hängt von der Gemeinschaft ab, die urteilt.`,
              followUps: [
                {
                  id: 'arabische-christen-schwiegen',
                  objection: `Und warum haben dann die arabischen Christen, die die Sprache perfekt beherrschten, die Herausforderung nie angenommen? Ihr Schweigen ist ein Eingeständnis.`,
                  objectionBy: 'Mohammed Hijab',
                  answer: `Arabische Christen haben großartige arabische Dichtung geschaffen – al-Akhtal, einer der berühmtesten Dichter der Umayyadenzeit, war Christ. Aber sie hielten die Herausforderung nicht für einen sinnvollen Test: Wer einen Text in einem fremden Stil nachahmt, schreibt eine Kopie, und wer seinen eigenen Stil schreibt, wird von den Richtern als „anders" verworfen. Jedes große Werk ist in seiner Art unnachahmlich – Homer, Dante, die Psalmen. Und unter islamischer Herrschaft war es nicht ratsam, öffentlich einen „Gegen-Koran" vorzulegen.`,
                  detail: `Christliche Theologen im islamischen Raum haben sich durchaus zur Frage geäußert. Der ostsyrische Patriarch Timotheus I. erklärte im Gespräch mit dem Kalifen al-Mahdi (um 781), dass Gott die Sendung seiner Boten durch Zeichen und Wunder bestätigt habe – sprachliche Schönheit allein beweise keine göttliche Herkunft, denn es gebe in vielen Sprachen eindrucksvolle Bücher. Das ist bis heute die stärkste Antwort: Ästhetik ist ein Werturteil, kein Beweis.`,
                  voices: [
                    {
                      person: 'timotheus-i',
                      role: 'als Patriarch im Gespräch mit dem Kalifen al-Mahdi',
                      text: `Timotheus antwortet dem Kalifen mit großer Höflichkeit, aber in der Sache klar: Die Propheten und Christus wurden durch Zeichen bestätigt, die Gott vor vielen Zeugen wirkte. Die Schönheit eines Textes ist für ihn kein solches Zeichen, denn eindrucksvolle Rede findet sich auch bei anderen Völkern und in anderen Sprachen. Er würdigt Mohammed als einen, der gegen den Götzendienst kämpfte, ohne ihn als Propheten im biblischen Sinn anzuerkennen.`,
                      sources: [
                        { kind: 'kirchenvater', author: 'Timotheus I. (ostsyrischer Patriarch)', work: 'Dialog mit dem Kalifen al-Mahdi', year: 'um 781', quote: `Offenbarung wird durch Zeichen bestätigt; sprachliche Schönheit allein ist kein Beweis göttlicher Herkunft.`, status: 'paraphrase', note: 'Sinngemäße Zusammenfassung; englische Übersetzung bei A. Mingana, Woodbrooke Studies 2 (1928).' },
                      ],
                    },
                  ],
                  questionsBack: [
                    `Ist Homers Ilias göttlich, weil niemand etwas „wie die Ilias" geschrieben hat?`,
                    `Wer hätte im Kalifat entschieden, ob ein christlicher Text der Herausforderung genügt?`,
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'mohammed-analphabet',
      objection: `Mohammed konnte weder lesen noch schreiben (ummi). Wie hätte ein Analphabet ein solches Meisterwerk schaffen können?`,
      objectionBy: 'Zakir Naik',
      answer: `Die arabische Dichtung vor dem Islam war vor allem mündlich – große Dichter brauchten keine Schrift. Der Koran entstand zudem über rund 23 Jahre. Und die Bedeutung von *ummī* ist unter Gelehrten umstritten: Manche verstehen es als „einer aus den Völkern ohne Schrift" (vgl. 3:20, wo die *ummiyyūn* den Leuten der Schrift gegenübergestellt werden). Selbst wenn er nicht lesen konnte, beweist das keine göttliche Herkunft.`,
      sources: [
        { kind: 'koran', work: 'Sure 3 (Al \'Imran)', ref: '3:20', quote: `Und sag zu denen, denen die Schrift gegeben wurde, und zu den Schriftlosen (al-ummiyyīn): „Seid ihr (Allah) ergeben?"`, original: `wa-qul li-lladhīna ūtū l-kitāba wa-l-ummiyyīna a-aslamtum`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/3/20' },
      ],
      followUps: [
        {
          id: 'feinde-bewunderten',
          objection: `Sogar seine Feinde wie al-Walid ibn al-Mughira gaben zu, dass der Koran weder Dichtung noch Wahrsagerei ist.`,
          objectionBy: 'Nouman Ali Khan',
          answer: `Bewunderung ist kein Beweis göttlicher Herkunft. Und der Koran selbst überliefert, was andere Zeitgenossen sagten: „Fabeln der Früheren, die er sich aufschreiben lässt" (25:5) und „ein Mensch lehrt ihn" (16:103). Die Zeitgenossen waren also gespalten – genau wie heute.`,
          sources: [
            { kind: 'koran', work: 'Sure 25 (al-Furqan)', ref: '25:5', quote: `Und sie sagen: „Fabeln der Früheren, die er sich aufgeschrieben hat; sie werden ihm morgens und abends vorgelesen."`, original: `asāṭīru l-awwalīna ktatabahā`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/25/5' },
          ],
          followUps: [
            {
              id: 'fremde-zunge-16-103',
              objection: `Der Koran beantwortet den Vorwurf in 16:103 doch selbst: Die Sprache dessen, auf den sie anspielen, ist fremd – der Koran aber ist klares Arabisch. Ein Nichtaraber hätte ihn nicht verfassen können.`,
              objectionBy: 'Mohammed Hijab',
              answer: `Die Antwort betrifft die *Sprache*, nicht den *Inhalt*. Niemand behauptet, ein Fremder habe den arabischen Wortlaut diktiert. Die Frage ist, ob Erzählstoffe – über Abraham, Josef, Maria, die Siebenschläfer – aus jüdischen und christlichen Überlieferungen bekannt waren und in Arabien erzählt wurden. Das lässt sich am Text prüfen, und die Parallelen sind zahlreich. Dass jemand klares Arabisch spricht, schließt nicht aus, dass er Geschichten gehört hat.`,
              detail: `Siehe ausführlich Claim „Der Koran hat keine menschlichen Quellen". Für die Herausforderung gilt: Wenn der Koran die Einwände seiner Zeitgenossen zitiert, zeigt er, dass die Frage nach seiner Herkunft von Anfang an offen diskutiert wurde. Die Herausforderung von 2:23 ist eine Antwort auf diese Zweifel – nicht deren Widerlegung.`,
              sources: [
                { kind: 'koran', work: 'Sure 16 (an-Nahl)', ref: '16:103', quote: `Wir wissen wohl, dass sie sagen: „Es lehrt ihn nur ein Mensch." Die Sprache dessen, auf den sie anspielen, ist eine fremde, dies aber ist eine deutliche arabische Sprache.`, original: `lisānu lladhī yulḥidūna ilayhi aʿjamiyyun wa-hādhā lisānun ʿarabiyyun mubīn`, translation: 'Bubenheim/Elyas (sinngemäß)', status: 'paraphrase', url: 'https://quran.com/16/103' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'sprachlich-vollkommen',
      objection: `Der Koran ist sprachlich vollkommen – es gibt in ihm keinen einzigen grammatikalischen Fehler.`,
      objectionBy: 'Nouman Ali Khan',
      answer: `Klassische muslimische Grammatiker haben selbst Stellen diskutiert, die von den Regeln abweichen: 2:177 (*wa-ṣ-ṣābirīna* im Akkusativ, wo man den Nominativ erwartet), 4:162 (*wa-l-muqīmīna*), 5:69 (*wa-ṣ-ṣābiʾūna* im Nominativ nach *inna*) und 20:63 (*in hādhāni la-sāḥirāni*). Es gibt dafür Erklärungen – aber dass sie nötig sind, zeigt: Die „Vollkommenheit" ist eine Deutung, kein offensichtlicher Befund.`,
      sources: [
        { kind: 'koran', work: 'Sure 2 (al-Baqara)', ref: '2:177', quote: `… und die Geduldigen in Not und Leid …`, original: `wa-ṣ-ṣābirīna fī l-baʾsāʾi wa-ḍ-ḍarrāʾ`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/2/177', note: 'Akkusativ in einer Reihe von Nominativen; klassisch als „Akkusativ des Lobes" erklärt.' },
        { kind: 'koran', work: 'Sure 20 (Ta Ha)', ref: '20:63', quote: `Sie sagten: „Diese beiden sind gewiss Zauberer …"`, original: `in hādhāni la-sāḥirāni`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/20/63', note: 'Andere Lesart (Abu Amr): inna hādhayni.' },
      ],
      followUps: [
        {
          id: 'rhetorische-stilmittel',
          objection: `Das sind keine Fehler, sondern bewusste rhetorische Stilmittel – der „Akkusativ des Lobes" (nasb 'ala l-madh) betont die Geduldigen besonders.`,
          objectionBy: 'klassische Grammatik',
          answer: `Das ist möglich, und ich respektiere diese Erklärung. Aber dann gilt: Was im Koran steht, ist per Definition richtig, und was abweicht, ist ein Stilmittel. Mit dieser Methode kann der Koran nie einen Fehler haben – aber dann ist seine „Fehlerlosigkeit" auch kein Beweis mehr, sondern eine Voraussetzung.`,
          followUps: [
            {
              id: 'grammatik-aus-koran',
              objection: `Die arabische Grammatik wurde ja aus dem Koran und der klassischen Dichtung abgeleitet. Der Koran ist der Maßstab der Grammatik.`,
              objectionBy: 'Hamza Andreas Tzortzis',
              answer: `Genau – und deshalb kann der Koran an dieser Grammatik nicht scheitern. Ein Maßstab, der vom geprüften Gegenstand abgeleitet ist, kann ihn nicht prüfen. Das macht die Herausforderung zirkulär: Der Koran ist unübertroffen, weil er der Maßstab ist, an dem alles gemessen wird.`,
              followUps: [
                {
                  id: 'wirkung-auf-die-herzen',
                  objection: `Es geht nicht nur um Grammatik. Höre die Rezitation: Menschen weinen, die kein Wort Arabisch verstehen. Diese Wirkung auf die Herzen hat kein menschliches Werk.`,
                  objectionBy: 'Nouman Ali Khan',
                  answer: `Diese Erfahrung ist echt, und ich nehme sie ernst. Aber sie beweist nicht, was du daraus folgerst: Hindus weinen bei der Rezitation der Gita auf Sanskrit, Christen bei byzantinischen Hymnen oder beim koptischen Karfreitagsgesang „Golgotha", ohne jedes Wort zu verstehen. Ergreifende Klanggestalt bezeugt Schönheit und Ehrfurcht – nicht, wer den Text verfasst hat. Wäre emotionale Wirkung ein Beweis, müsste man viele Religionen zugleich für wahr halten.`,
                  detail: `Die Frage nach der Wahrheit einer Offenbarung ist eine Frage nach ihrem Inhalt und ihrer Geschichte: Stimmt, was sie über Gott, Jesus und die früheren Propheten sagt? Stimmen ihre Berichte mit dem überein, was wir sonst wissen? Hier muss der Koran sich messen lassen – an der Kreuzigung, an der Bestätigung der früheren Schriften (5:47), an seiner Überlieferungsgeschichte. Klang kann diese Fragen nicht beantworten.`,
                  questionsBack: [
                    `Wenn Ergriffenheit beim Hören ein Beweis wäre – was beweist dann die Ergriffenheit von Hindus bei der Gita?`,
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'klares-arabisch-keine-fremdwoerter',
      objection: `Der Koran ist „ein arabischer Koran" in „klarer arabischer Sprache" (12:2; 16:103). Er enthält kein fremdes Wort – auch das ist Teil des Wunders.`,
      objectionBy: 'klassische Position (u. a. asch-Schafi\'i)',
      answer: `Schon klassische Gelehrte waren uneins: as-Suyuti listet in einem eigenen Werk über hundert Wörter fremder Herkunft auf, etwa *injīl* (griechisch), *firdaws* (persisch, über Griechisch) oder *ṣirāṭ* (lateinisch *strata*, über Aramäisch). Lehnwörter sind keine Schande – jede Sprache hat sie. Aber sie zeigen, dass der Koran in einer konkreten sprachlichen Umwelt entstand.`,
      sources: [
        { kind: 'fachliteratur', author: 'Arthur Jeffery', work: 'The Foreign Vocabulary of the Qur\'an', year: '1938', quote: `Verzeichnis der Lehnwörter im Koran aus dem Aramäisch-Syrischen, Hebräischen, Griechischen, Persischen und Äthiopischen.`, status: 'paraphrase' },
        { kind: 'hadith', author: 'Jalal ad-Din as-Suyuti', work: 'al-Muhadhdhab fima waqa\'a fi l-Qur\'an min al-mu\'arrab', year: '15. Jh.', quote: `Klassische Sammlung von Wörtern nichtarabischer Herkunft im Koran.`, status: 'paraphrase' },
      ],
      followUps: [
        {
          id: 'muarrab-ist-arabisch',
          objection: `Arabisierte Lehnwörter sind Arabisch – so haben es die Gelehrten gelöst: Die Wörter stammen ursprünglich aus anderen Sprachen, waren aber längst Teil des Arabischen. Kein Widerspruch zu „klarem Arabisch".`,
          objectionBy: 'Yasir Qadhi',
          answer: `Einverstanden – das ist eine vernünftige Lösung. Aber sie hat eine Folge: Der Koran spricht die Sprache seiner Umwelt, und zu dieser Umwelt gehörte eine christliche und jüdische religiöse Fachsprache. Wörter wie *injīl*, *ṣalāt* oder *zakāt* haben aramäisch-syrische Vorbilder; Arthur Jeffery leitet sogar das Wort *qurʾān* vom syrischen *qeryānā* („Lesung", liturgischer Lesetext) ab. Der Koran ist also in einem Gespräch mit Juden und Christen entstanden – das spricht nicht gegen seine Schönheit, aber gegen die Vorstellung, er sei ohne Bezug zu seiner Umwelt vom Himmel gefallen.`,
          detail: `Für Christen ist das kein Triumph, sondern eine Einladung: Wenn der Koran die religiöse Sprache der Kirchen aufnimmt, dann setzt er auch voraus, dass seine Hörer wussten, was „Injil", „Tora" und „Messias" bedeuten. Genau darauf baut das Islamische Dilemma auf.`,
          sources: [
            { kind: 'fachliteratur', author: 'Arthur Jeffery', work: 'The Foreign Vocabulary of the Qur\'an', year: '1938', quote: `Leitet u. a. qur'an vom syrischen qeryānā (Lesung, Lektion) ab und zeigt zahlreiche religiöse Lehnwörter aus dem Syrischen.`, status: 'paraphrase' },
          ],
        },
      ],
    },
    {
      id: 'bibel-stellt-keine-herausforderung',
      objection: `Die Bibel stellt nicht einmal eine solche Herausforderung. Sie beansprucht keine sprachliche Einzigartigkeit. Schon das zeigt die Überlegenheit des Korans.`,
      objectionBy: 'Hamza Andreas Tzortzis',
      answer: `Die Bibel begründet ihren Anspruch anders – und überprüfbarer: durch Gottes Handeln in der Geschichte vor vielen Zeugen und durch erfüllte Verheißung. Die Tora gibt selbst den Prüfstein: Ein Prophet ist daran zu erkennen, dass eintrifft, was er sagt (Dtn 18,21–22). Jesus sagt: „Glaubt doch den Werken" (Joh 10,38), und Paulus verweist auf über fünfhundert Zeugen des Auferstandenen, „von denen die meisten noch leben" (1 Kor 15,6). Schönheit ist Geschmackssache; ein leeres Grab ist eine Frage der Geschichte.`,
      detail: `Das ist der Kern des Unterschieds: Die Herausforderung des Korans beruft sich auf ein ästhetisches Urteil, das jede Gemeinschaft für ihren eigenen Text fällen kann. Die Bibel beruft sich auf öffentliche Ereignisse, die Gegner hätten bestreiten können – und deren Spuren der Historiker prüfen kann. Ein Laie kann im Gespräch ruhig sagen: „Ich möchte nicht über Geschmack streiten, sondern über Geschichte."`,
      sources: [
        { kind: 'bibel', work: '5. Mose (Deuteronomium)', ref: '18,21–22', quote: `Wenn der Prophet redet in dem Namen des HERRN, und es wird nichts daraus und kommt nicht, das ist das Wort, das der HERR nicht geredet hat.`, translation: 'Luther 1912', status: 'paraphrase' },
        { kind: 'bibel', work: 'Johannes', ref: '10,37–38', quote: `Tue ich nicht die Werke meines Vaters, so glaubet mir nicht; tue ich sie aber, glaubet doch den Werken, wollt ihr mir nicht glauben.`, translation: 'Luther 1912', status: 'paraphrase' },
      ],
      questionsBack: [
        `Was ist leichter objektiv zu prüfen: ob ein Text schöner ist als alle anderen – oder ob ein Ereignis vor Hunderten Zeugen stattfand?`,
      ],
      followUps: [
        {
          id: 'roemer-prophezeiung-30-2',
          objection: `Der Koran hat auch erfüllte Prophezeiungen: „Die Römer sind besiegt worden … aber sie werden nach ihrer Niederlage siegen, in wenigen Jahren" (30:2–4). Genau das geschah, als Herakleios die Perser schlug.`,
          objectionBy: 'Zakir Naik',
          answer: `Die Vorhersage ist allgemein: In einem langen Krieg zwischen zwei Großmächten ist ein Wechsel des Kriegsglücks nicht unwahrscheinlich, und Herakleios begann seine Gegenoffensive schon 622. Hinzu kommt ein Textproblem: Das ursprünglich unvokalisierte Konsonantengerüst erlaubt auch die Lesung „Die Römer haben gesiegt … und sie werden besiegt werden" – und klassische Kommentare berichten von dieser Lesart. Eine Prophezeiung, die je nach Vokalisierung Sieg oder Niederlage voraussagt, ist ein schwacher Beweis.`,
          detail: `Die gängige Lesart (*ghulibati r-rūm … sa-yaghlibūn*) bezieht sich auf die persischen Siege um 614 (Eroberung Jerusalems) und die byzantinische Wende ab 622–628. Die Wendung *biḍʿ sinīn* („einige Jahre") wird klassisch als drei bis neun Jahre verstanden. Muslime sehen darin eine erfüllte Weissagung; Christen müssen das nicht verächtlich machen, sollten aber darauf hinweisen, dass sie mit der Fülle und Genauigkeit der messianischen Verheißungen des Alten Testaments (etwa Jes 53; Mi 5,1; Dan 9) nicht vergleichbar ist.`,
          sources: [
            { kind: 'koran', work: 'Sure 30 (ar-Rum)', ref: '30:2–4', quote: `Besiegt worden sind die Römer im nächstgelegenen Land. Sie aber werden nach ihrer Niederlage siegen, in einigen Jahren.`, original: `ghulibati r-rūmu fī adnā l-arḍi wa-hum min baʿdi ghalabihim sa-yaghlibūna fī biḍʿi sinīn`, translation: 'Bubenheim/Elyas (sinngemäß)', status: 'paraphrase', url: 'https://quran.com/30/2-4' },
          ],
          questionsBack: [
            `Wenn das Konsonantengerüst auch „sie haben gesiegt … und werden besiegt werden" erlaubt – woher weißt du, welche Lesung die ursprüngliche Vorhersage war?`,
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Nach welchen Kriterien würdest du entscheiden, dass ein Text „wie der Koran" ist – und wer urteilt?`,
    `Warum vertrat an-Nazzam die Lehre der *ṣarfa*, wenn die Unnachahmlichkeit offensichtlich ist?`,
    `Beweist die Unübertroffenheit Shakespeares, dass er inspiriert war?`,
    `Welche Kriterien nennt die Bibel für einen wahren Propheten (Dtn 13; 18)?`,
  ],
  avoid: [
    `Nicht behaupten, der Koran sei „schlecht geschrieben". Viele empfinden seine Rezitation als überwältigend schön – das zu bestreiten wirkt respektlos und unglaubwürdig.`,
    `Nicht selbst „eine Sure wie den Koran" vorlegen. Darum geht es nicht; es geht um das fehlende Kriterium.`,
    `Grammatikstellen nur mit dem Hinweis auf die klassischen Erklärungen bringen; sonst wirkt es wie Unkenntnis.`,
  ],
  concessions: [
    `Der Koran ist ein sprachlich außergewöhnlicher Text und hat die arabische Sprache und Kultur tief geprägt.`,
    `Für die diskutierten Grammatikstellen gibt es innerislamische, sprachwissenschaftlich begründete Erklärungen.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Gabriel Said Reynolds', work: 'The Qur\'an and Its Biblical Subtext', year: '2010', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Arthur Jeffery', work: 'The Foreign Vocabulary of the Qur\'an', year: '1938', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Nabeel Qureshi', work: 'No God but One: Allah or Jesus?', year: '2016', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Koran', 'I\'jaz', 'Sprache', 'Islam'],
  related: [
    'islam-koran/koran-quellen',
    'islam-mohammed/mohammed-wahrer-prophet',
    'islam-koran/koran-perfekt-bewahrt',
  ],
};

export default claim;
