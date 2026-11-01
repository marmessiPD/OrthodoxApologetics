import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'orientalisten-vorurteil',
  title: `„Goldziher, Schacht und die Revisionisten sind voreingenommene Orientalisten."`,
  proponents: [
    { name: 'Muhammad Mustafa al-Azami', role: 'Hadith-Gelehrter (1930–2017)', work: 'On Schacht\'s Origins of Muhammadan Jurisprudence (1985)' },
    { name: 'Edward W. Said', role: 'Literaturwissenschaftler (1935–2003)', work: 'Orientalism (1978)' },
    { name: 'Jonathan A. C. Brown', role: 'Islamwissenschaftler, Georgetown University', work: 'Hadith (2009); Misquoting Muhammad (2014)' },
    { name: 'Mohammed Hijab', role: 'Islamischer Apologet, London', work: 'Debatten gegen christliche Apologeten über Islamforschung' },
  ],
  steelman: `„Edward Said hat gezeigt, dass die westliche Orientalistik ein Werkzeug kolonialer Herrschaft war: Sie konstruierte den Orient als rückständig, irrational und fremd. Goldziher und Schacht gingen mit dem Vorurteil an die Hadithe heran, dass Muslime fälschen; sie suchten Fälschung und fanden sie. Schacht arbeitete mit Argumenten aus dem Schweigen (‚wenn ein Hadith in einer frühen Debatte nicht zitiert wird, existierte es nicht') und mit einer kleinen, selektiven Quellenbasis. Al-Azami hat seine Beispiele Punkt für Punkt widerlegt, Motzki hat seine Datierungen umgestoßen. Die Revisionisten der 1970er Jahre – Wansbrough, Crone, Cook – haben Theorien aufgestellt, die sie selbst später aufgaben, und die Birmingham-Fragmente haben sie widerlegt. Christliche Apologeten benutzen diese überholte Forschung trotzdem als Munition."`,
  biblical: {
    summary: `Die Schrift lehrt, Argumente an der Wahrheit zu messen, nicht an der Person: „Prüfet aber alles, und das Gute behaltet" (1 Thess 5,21). Die Beröer wurden gelobt, weil sie „täglich in der Schrift forschten, ob sich's also verhielte" (Apg 17,11). Das gilt für christliche wie für muslimische Überlieferungen. Christen haben keinen Grund, historische Kritik zu fürchten: Das Neue Testament wurde seit dem 18. Jahrhundert schärfer kritisiert als jeder andere Text der Weltgeschichte – und sein historischer Kern hat standgehalten.`,
    sources: [
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '17,11', quote: `Die Beröer nahmen das Wort auf ganz williglich und forschten täglich in der Schrift, ob sich's also verhielte.`, translation: 'Luther 1912', status: 'paraphrase' },
      { kind: 'bibel', work: '1. Thessalonicher', ref: '5,21', quote: `Prüfet aber alles, und das Gute behaltet.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die Kirche des Ostens, besonders die koptische, hat eine eigene, über tausendjährige Erfahrung mit dem Islam – lange bevor es „Orientalisten" gab. Christlich-arabische Gelehrte wie Theodor Abu Qurra, Abu Raʾita, Severus ibn al-Muqaffaʿ und die Awlad al-ʿAssal setzten sich respektvoll und gründlich mit Koran und Überlieferung auseinander, in arabischer Sprache und als Nachbarn der Muslime. Ihre Fragen sind keine Erfindung des westlichen Kolonialismus, sondern entstanden im Gespräch unter dem Kalifat.`,
    sources: [
      { kind: 'fachliteratur', author: 'Sidney H. Griffith', work: 'The Church in the Shadow of the Mosque: Christians and Muslims in the World of Islam', year: '2008', quote: `Christen im Kalifat entwickelten seit dem 8. Jahrhundert in arabischer Sprache eine eigene, gelehrte Auseinandersetzung mit dem Islam.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Die westliche Hadith-Forschung ist kein einheitlicher Block. **Goldziher** (1890) und **Schacht** (1950) waren skeptisch; **Fuat Sezgin** (*Geschichte des arabischen Schrifttums*, Bd. 1, 1967) und **Nabia Abbott** (1967) betonten frühe Schriftlichkeit; **Juynboll** (1983) verfeinerte Schachts Ansatz; **Motzki** (1991) und **Gregor Schoeler** zeigten Frühdatierungen ins späte 1. Jahrhundert n. H.; **Brown** verteidigt die klassische Methode. Die Revisionisten **Wansbrough** (*Quranic Studies*, 1977) und **Crone/Cook** (*Hagarism*, 1977) stellten radikale Thesen auf, die in dieser Form heute kaum noch vertreten werden. Edward Saids *Orientalism* (1978) ist einflussreich, aber auch scharf kritisiert worden (u. a. von Bernard Lewis und Robert Irwin).`,
    detail: `**Was Konsens ist:** Die großen Hadith-Sammlungen entstanden im 9. Jahrhundert; es gab umfangreiche Fälschungen, die auch muslimische Gelehrte bezeugen; die Mehrheit der heutigen Forscher vertritt eine Mittelposition zwischen radikaler Skepsis und traditioneller Annahme.

**Goldziher und der Islam:** Ignaz Goldziher (1850–1921), ungarischer Jude, studierte 1873/74 an der al-Azhar in Kairo und beschrieb in seinem Tagebuch eine tiefe innere Verbundenheit mit dem Islam. Er war alles andere als ein Islamfeind.

**Fazlur Rahman:** Der pakistanische Muslim Fazlur Rahman (1919–1988) übernahm in *Islamic Methodology in History* (1965) wesentliche historische Ergebnisse Goldzihers und Schachts und deutete sie theologisch als „lebendige Sunna".`,
    sources: [
      { kind: 'fachliteratur', author: 'Ignaz Goldziher', work: 'Tagebuch (hg. Alexander Scheiber)', year: '1978', quote: `Goldziher beschreibt seinen Aufenthalt in Kairo und seine innere Nähe zum Islam; er habe sich im Innern als Muslim gefühlt.`, status: 'unverified', note: 'Bekannte, oft zitierte Passage; genauer Wortlaut und Seite vor Verwendung prüfen.' },
      { kind: 'fachliteratur', author: 'Fazlur Rahman', work: 'Islamic Methodology in History', year: '1965', quote: `Ein großer Teil des Hadith-Materials ist die spätere Verbalisierung der lebendigen Praxis der frühen Gemeinden.`, status: 'paraphrase' },
      { kind: 'gegner', author: 'Edward W. Said', work: 'Orientalism', year: '1978', quote: `Die westliche Orientalistik konstruierte den Orient als das Andere und diente der kolonialen Macht.`, status: 'paraphrase' },
      { kind: 'gegner', author: 'Muhammad Mustafa al-Azami', work: 'On Schacht\'s Origins of Muhammadan Jurisprudence', year: '1985', quote: `Schachts Beispiele und seine Argumente aus dem Schweigen halten einer genauen Prüfung nicht stand.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Ob ein Argument stimmt, hängt nicht vom Motiv dessen ab, der es vorträgt – das wäre ein Fehlschluss. Goldziher bewunderte den Islam, und auch der muslimische Gelehrte Fazlur Rahman übernahm wesentliche Ergebnisse. Die Fälschungen bezeugen muslimische Gelehrte selbst. Und unser Argument braucht die Revisionisten nicht: Es genügt der unstrittige Zeitabstand von 200 Jahren und das Hadith-Dilemma. Christen haben ihre eigenen Texte 250 Jahre lang härtester Kritik ausgesetzt – wir laden zu demselben Maßstab für beide ein.`,
  keyPoints: [
    `**Genetischer Fehlschluss:** Ein Argument wird nicht dadurch falsch, dass sein Urheber Vorurteile hatte. Entscheidend sind die Belege.`,
    `**Goldziher war kein Islamfeind:** Er studierte an der al-Azhar und fühlte sich dem Islam innerlich verbunden.`,
    `**Muslimische Zeugen:** Fazlur Rahman (1965) übernahm wesentliche historische Ergebnisse; klassische Gelehrte (Muslim, Ibn al-Jawzi) bezeugten Fälschungen selbst.`,
    `**Selektive Berufung:** Muslimische Apologeten zitieren westliche Forscher gern, wenn sie günstig sind (Watt, Motzki, Bucaille) – und verwerfen sie als „Orientalisten", wenn nicht.`,
    `**Das Christentum hat die Probe bestanden:** Reimarus, Strauß, Bultmann, das Jesus Seminar – das Neue Testament wurde schärfer geprüft als jeder andere Text.`,
    `**Fairness:** Die Revisionisten haben übertrieben (Hagarism), und Schacht wurde in Teilen widerlegt. Christen sollten das offen zugeben.`,
  ],
  voices: [
    {
      person: 'abu-qurra',
      role: 'als christlich-arabischer Apologet unter dem Kalifat',
      text: `Theodor Abu Qurra, Bischof von Harran, diskutierte im frühen 9. Jahrhundert auf Arabisch mit muslimischen Gelehrten. Er schlug vor, Religionen mit der Vernunft zu prüfen: Welche Lehre über Gott, Sünde und Erlösung ist ihrer würdig, und welche Religion hat sich ohne Zwang, Machtanreize oder Begünstigung der Begierden ausgebreitet? Das zeigt: Die kritische Prüfung islamischer Ansprüche ist eine östliche, arabischsprachige Tradition – keine Erfindung europäischer Kolonialbeamter.`,
      sources: [
        { kind: 'fachliteratur', author: 'Sidney H. Griffith', work: 'The Church in the Shadow of the Mosque', year: '2008', quote: `Abu Qurras Kriterien für die wahre Religion: Ausbreitung ohne Schwert, Bestechung oder Zugeständnisse an die Begierden.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'sidney-griffith',
      role: 'als Historiker der christlich-muslimischen Begegnung',
      text: `Griffith zeigt, dass die Christen im Kalifat – Melkiten, Syrer, Kopten – eine eigene arabische Theologie entwickelten, die den Koran gut kannte und respektvoll, aber klar argumentierte. Sie kannten die islamischen Überlieferungen aus erster Hand. Wer christliche Fragen an den Islam pauschal als „westlichen Orientalismus" abtut, übersieht diese Jahrhunderte arabisch-christlicher Gelehrsamkeit.`,
    },
    {
      person: 'gabriel-reynolds',
      role: 'als heutiger Koranforscher',
      text: `Reynolds schätzt die klassische muslimische Gelehrsamkeit, plädiert aber dafür, den Koran und seine Überlieferung mit denselben historischen Methoden zu erforschen, die man auf die Bibel anwendet. Das sei keine Respektlosigkeit, sondern die Anerkennung, dass der Koran ein Text der Weltliteratur ist, der ernsthafte Untersuchung verdient.`,
    },
    {
      person: 'nt-wright',
      role: 'als Neutestamentler, der historische Kritik nicht scheut',
      text: `Wright betont, dass der christliche Glaube auf historischen Behauptungen beruht und deshalb die historische Prüfung nicht fürchten muss. Das Neue Testament wurde seit der Aufklärung von Skeptikern mit größter Schärfe untersucht; gerade diese Prüfung hat den frühen, jüdischen und historisch verankerten Charakter des Glaubens an den gekreuzigten und auferstandenen Jesus bestätigt.`,
      sources: [
        { kind: 'fachliteratur', author: 'N. T. Wright', work: 'The Resurrection of the Son of God', year: '2003', quote: `Die Entstehung des frühen Christentums lässt sich historisch nur erklären, wenn das Grab leer war und die Jünger Begegnungen mit dem Auferstandenen hatten.`, status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'said-orientalismus',
      objection: `Edward Said hat gezeigt: Orientalismus war ein Machtinstrument des Kolonialismus. Goldziher und Schacht sahen den Islam durch die Brille des Westens.`,
      objectionBy: 'Mohammed Hijab',
      answer: `Ein Argument wird nicht dadurch falsch, dass derjenige, der es vorträgt, Vorurteile hat – das ist ein genetischer Fehlschluss. Die Frage ist, ob die Belege stimmen: Entstanden die Sammlungen im 9. Jahrhundert? Gab es massenhafte Fälschungen? Das bestreiten nicht einmal die klassischen muslimischen Gelehrten.`,
      followUps: [
        {
          id: 'motive-praegen-methoden',
          objection: `Motive prägen Methoden. Wer mit Skepsis beginnt, findet Fälschung. Schachts Argumente aus dem Schweigen sind genau das.`,
          objectionBy: 'Jonathan A. C. Brown',
          answer: `Das stimmt für alle – auch für muslimische Gelehrte, die voraussetzen, dass alle Gefährten vertrauenswürdig waren und Gott die Sunna bewahrt hat. Faire Methode heißt: dieselben Kriterien für alle Texte. Christen haben erlebt, wie Skeptiker 250 Jahre lang das Neue Testament mit größtem Misstrauen untersuchten – und der Kern hielt stand: das frühe Bekenntnis (1 Kor 15), die Kreuzigung unter Pilatus, der Glaube an die Auferstehung.`,
          followUps: [
            {
              id: 'bibelkritik-zerstoerte',
              objection: `Die Bibelkritik hat euren Glauben im Westen zerstört. Gerade deshalb lehnen wir sie für den Islam ab.`,
              objectionBy: 'Mohammed Hijab',
              answer: `Sie hat ihn geprüft, nicht widerlegt. Ihre Übertreibungen wurden längst kritisiert (siehe Topic „Liberale Theologie"), aber die Prüfung selbst war berechtigt. Wer sich jeder Prüfung verweigert, zeigt Schwäche, nicht Stärke. Der Koran selbst fordert Gegner auf: „Bringt euren Beweis herbei, wenn ihr wahrhaftig seid" (2:111) – dann muss man auch selbst Beweise vorlegen können.`,
              sources: [
                { kind: 'koran', work: 'Sure 2 (al-Baqara)', ref: '2:111', quote: `Sag: Bringt euren Beweis vor, wenn ihr wahrhaftig seid.`, original: `qul hātū burhānakum in kuntum ṣādiqīn`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/2/111' },
              ],
              followUps: [
                {
                  id: 'eigene-wissenschaft',
                  objection: `Muslime haben ihre eigene Wissenschaft. Wir brauchen keine fremden westlichen Kriterien.`,
                  objectionBy: 'traditionalistische Gelehrte',
                  answer: `Historische Kritik ist nicht „westlich". Ibn Khaldun (gest. 1406) kritisierte in der Einleitung seiner *Muqaddima* die Leichtgläubigkeit der Geschichtsschreiber, die Berichte übernahmen, ohne ihre innere Möglichkeit zu prüfen. Wenn jede Religion nur ihre eigenen Kriterien gelten lässt, ist kein Gespräch über Wahrheit mehr möglich – dann bleibt nur Behauptung gegen Behauptung.`,
                  sources: [
                    { kind: 'hadith', author: 'Ibn Khaldun', work: 'al-Muqaddima', ref: 'Einleitung', year: '1377', quote: `Viele Geschichtsschreiber übernahmen Berichte, ohne sie an den Gesetzen der Wirklichkeit und der Natur der Dinge zu prüfen, und verbreiteten so Unwahrheiten.`, status: 'paraphrase' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'goldziher-jude-schacht',
      objection: `Goldziher war Jude, Schacht ein Deutscher im Dienst europäischer Interessen. Sie hatten religiöse und politische Gründe, den Islam schlechtzumachen.`,
      objectionBy: 'verbreiteter muslimischer Einwand',
      answer: `Goldziher studierte 1873/74 an der al-Azhar in Kairo und beschrieb in seinem Tagebuch eine tiefe innere Nähe zum Islam – er war ein Bewunderer, kein Feind. Und auch der gläubige Muslim Fazlur Rahman kam in *Islamic Methodology in History* (1965) zu dem Ergebnis, dass ein großer Teil der Hadithe die spätere „lebendige Tradition" der Gemeinden spiegelt.`,
      followUps: [
        {
          id: 'rahman-haeretiker',
          objection: `Fazlur Rahman wurde in Pakistan als Häretiker angefeindet und musste das Land verlassen. Er ist kein Maßstab.`,
          objectionBy: 'traditionalistische Gelehrte',
          answer: `Es geht nicht um seine Rechtgläubigkeit, sondern darum, dass ein gläubiger muslimischer Gelehrter die historischen Belege überzeugend fand. Außerdem: Die Fälschungen selbst haben nicht die Orientalisten entdeckt, sondern muslimische Gelehrte wie Muslim ibn al-Hajjaj und Ibn al-Jawzi bezeugt.`,
          followUps: [
            {
              id: 'gelehrte-sortierten-aus',
              objection: `Eben – die klassischen Gelehrten haben die Fälschungen erkannt und aussortiert. Das ist das Gegenteil von Goldzihers These.`,
              objectionBy: 'Muhammad Mustafa al-Azami',
              answer: `Goldziher baute gerade auf ihren Daten auf: politische und konfessionelle Fälschungen in den Kämpfen zwischen Umayyaden und Abbasiden, Sunniten und Schiiten. Die offene Frage ist, ob die Kettenprüfung Fälschungen erkennen konnte, die mit einer *guten* Kette versehen wurden. Schacht vertrat, dass Isnade „nach rückwärts wuchsen", bis sie den Propheten erreichten.`,
              followUps: [
                {
                  id: 'azami-widerlegte-schacht',
                  objection: `Al-Azami hat Schachts Beispiele widerlegt, und Motzki hat seine Datierungen umgestoßen. Schacht ist erledigt.`,
                  objectionBy: 'Muhammad Mustafa al-Azami',
                  answer: `Al-Azami hat berechtigte Punkte gemacht, und Motzki hat Schachts Pauschalurteil korrigiert – das gestehe ich zu. Aber auch Motzki und Brown behaupten nicht, die kanonischen Sammlungen garantierten die Worte des Propheten. Die Mehrheit der Forscher vertritt heute eine Mittelposition. Und mein Argument braucht Schacht gar nicht: Bukhari 6922 oder Bukhari 5133 gelten bei *muslimischen* Gelehrten als authentisch – das Dilemma entsteht aus ihrer eigenen Bewertung.`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'revisionisten-widerlegt',
      objection: `Die Revisionisten haben sich selbst widerlegt. Patricia Crone hat *Hagarism* später aufgegeben, Wansbroughs Spätdatierung des Korans ist durch die Handschriften erledigt.`,
      objectionBy: 'Jonathan A. C. Brown',
      answer: `Einverstanden: Die zentrale These von *Hagarism* wird kaum noch vertreten, und Christen sollten sie nicht als Hauptargument benutzen. Aber Crone blieb bis zuletzt skeptisch gegenüber der Zuverlässigkeit der Sira. Und das Scheitern einer radikalen Gegenthese beweist nicht die traditionelle Darstellung – es lässt die Frage nach den Belegen offen.`,
      followUps: [
        {
          id: 'birmingham-beweist',
          objection: `Die Birmingham-Fragmente sind auf 568–645 datiert. Der Koran existierte also zur Zeit des Propheten – die Revisionisten liegen falsch.`,
          objectionBy: 'Mohammed Hijab',
          answer: `Die Radiokarbondatierung stützt eine frühe Koranschrift – das gestehe ich zu. Aber unser Thema sind Hadithe und Sira, nicht der Korantext. Ein früher Koran beweist nicht, dass die zwei Jahrhunderte später gesammelten Berichte über Mohammeds Leben zuverlässig sind.`,
          followUps: [
            {
              id: 'frueher-koran-wahre-tradition',
              objection: `Wenn der Koran früh ist, dann stimmt auch die Tradition, die uns berichtet, wie er gesammelt wurde.`,
              objectionBy: 'Mohammed Hijab',
              answer: `Das folgt nicht. Und wenn du dieser Tradition folgst, übernimmst du auch, was sie sonst berichtet: dass ʿUthman abweichende Exemplare verbrennen ließ (Bukhari 4987) und dass ʿUmar einen Steinigungsvers für offenbart hielt, der im heutigen Koran fehlt (Bukhari 6829).`,
              sources: [
                { kind: 'hadith', work: 'Sahih al-Bukhari', ref: '6829', quote: `ʿUmar: Ich fürchte, dass die Leute nach langer Zeit sagen: „Wir finden den Steinigungsvers nicht im Buch Allahs."`, status: 'paraphrase', url: 'https://sunnah.com/bukhari:6829' },
              ],
              followUps: [
                {
                  id: 'naskh-tilawa',
                  objection: `Der Steinigungsvers wurde in der Rezitation aufgehoben, im Gesetz aber beibehalten (*naskh at-tilāwa dūna l-ḥukm*). Das ist bekannte Abrogationslehre.`,
                  objectionBy: 'klassische Usul-Lehre',
                  answer: `Das ist die klassische Erklärung. Aber sie räumt ein, dass ein nach ʿUmar offenbarter und weiterhin verbindlicher Vers im heutigen Koran fehlt – und dass das geltende Strafrecht auf diesem Bericht beruht. Damit hängt sogar ein Teil des „koranischen" Rechts an der Überlieferung, deren Zuverlässigkeit wir prüfen.`,
                  detail: `Siehe Claim „Der Koran ist Buchstabe für Buchstabe perfekt bewahrt".`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'christen-munition',
      objection: `Christliche Apologeten wie Jay Smith benutzen westliche Islamforscher nur als Munition. Den Teil ihrer Forschung, der das Christentum trifft, verschweigen sie. Das ist Doppelmoral.`,
      objectionBy: 'Shabir Ally',
      answer: `Ein berechtigter Einwand, den ich ernst nehme. Gute Apologetik muss auch die Kritik am Christentum kennen und offen benennen – etwa Bart Ehrman. Aber derselbe Vorwurf trifft muslimische Apologeten, die gern W. Montgomery Watt, Maurice Bucaille, Karen Armstrong oder Motzki zitieren, wenn es passt. Konsequenz für beide Seiten: Wir prüfen die Argumente, nicht die Lager.`,
      followUps: [
        {
          id: 'nur-als-zugestaendnis',
          objection: `Wir zitieren westliche Forscher nur als Zugeständnisse von Außenstehenden – das ist legitim.`,
          objectionBy: 'Shabir Ally',
          answer: `Einverstanden – und dasselbe tun wir mit den klassischen muslimischen Gelehrten: Muslims Einleitung, Ibn al-Jawzis Fälschungssammlung, Ibn Taymiyyas Urteil über das Hadith vom „großen Dschihad". Zugeständnisse der eigenen Seite sind starke Belege. Dann entscheiden die Belege, nicht die Herkunft des Forschers.`,
          followUps: [
            {
              id: 'meinung-gegen-meinung',
              objection: `Dann steht eben Gelehrter gegen Gelehrten – Meinung gegen Meinung.`,
              objectionBy: 'Mohammed Hijab',
              answer: `Nicht ganz. Manche Tatsachen sind gemeinsamer Boden: Mohammed starb 632, die kanonischen Sammlungen entstanden 200–250 Jahre später; Muslime bezeugen selbst massenhafte Fälschung; Ibn Ishaqs Werk ist nur in späteren Bearbeitungen erhalten; Sunniten und Schiiten haben verschiedene Korpora. Von diesen Tatsachen aus kann man argumentieren.`,
              questionsBack: [
                `Welche ist die älteste erhaltene Handschrift einer Hadith-Sammlung – und aus welchem Jahrhundert stammt sie?`,
              ],
              followUps: [
                {
                  id: 'muwatta-papyri-frueh',
                  objection: `Malik ibn Anas schrieb den *Muwaṭṭaʾ* schon im 8. Jahrhundert, und Nabia Abbott hat frühe Papyri mit Hadithen gefunden. Die Schriftlichkeit begann früh.`,
                  objectionBy: 'Nabia Abbott / Fuat Sezgin',
                  answer: `Zugestanden: Der *Muwaṭṭaʾ* (Malik starb 795) ist ein frühes Werk, und Abbotts Papyri zeigen schriftliche Notizen im 8. Jahrhundert. Aber auch das ist über 150 Jahre nach Mohammed. Und auffällig ist, was *fehlt*: Der *Muwaṭṭaʾ* überliefert zahlreiche Berichte über Hisham ibn ʿUrwa, aber nicht den Bericht über Aischas Heiratsalter, der später in Bukhari und Muslim steht. Frühe Schriftlichkeit beweist nicht die Echtheit späterer Berichte.`,
                  sources: [
                    { kind: 'fachliteratur', author: 'Joshua J. Little', work: 'The Hadith of ʿĀʾišah\'s Marital Age: A Study in the Evolution of Early Islamic Historical Memory (Dissertation, University of Oxford)', year: '2022', quote: `Der Bericht über Aischas Heiratsalter fehlt in den frühesten medinensischen Rechtswerken und lässt sich auf Hisham ibn ʿUrwa in seiner irakischen Zeit zurückführen.`, status: 'paraphrase', note: 'Ergebnis nach Berichten über die Dissertation; im Original prüfen.' },
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
    `Wenn ein Forscher Vorurteile hatte – welche seiner konkreten Belege sind dadurch falsch?`,
    `Zitierst du westliche Forscher nur, wenn sie dir recht geben?`,
    `Warum kam auch ein gläubiger Muslim wie Fazlur Rahman zu ähnlichen historischen Ergebnissen?`,
    `Bist du bereit, für Bibel und Hadith dieselben historischen Kriterien anzuwenden?`,
  ],
  avoid: [
    `Nicht mit *Hagarism* oder der These argumentieren, Mekka habe nicht existiert oder der Islam sei im 8. Jahrhundert „erfunden" worden. Diese Thesen sind in der Forschung weitgehend aufgegeben.`,
    `Nicht Schacht als unwiderlegbare Autorität zitieren. Seine Methode ist in Teilen (Argument aus dem Schweigen) zu Recht kritisiert worden.`,
    `Nicht den Eindruck erwecken, es gehe um „Westen gegen Islam". Die christliche Auseinandersetzung mit dem Islam ist eine arabische, östliche Tradition.`,
  ],
  concessions: [
    `Edward Said hat zu Recht auf koloniale Verflechtungen und Klischees in Teilen der westlichen Orientalistik hingewiesen.`,
    `Die radikalsten revisionistischen Thesen (Wansbrough, *Hagarism*) haben sich nicht durchgesetzt; Schachts Datierungen wurden von Motzki und anderen korrigiert.`,
    `Auch christliche Apologeten haben westliche Forschung manchmal einseitig und verkürzt verwendet.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Herbert Berg (Hg.)', work: 'Method and Theory in the Study of Islamic Origins', year: '2003', status: 'paraphrase' },
    { kind: 'gegner', author: 'Jonathan A. C. Brown', work: 'Hadith: Muhammad\'s Legacy in the Medieval and Modern World', year: '2009', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Sidney H. Griffith', work: 'The Church in the Shadow of the Mosque', year: '2008', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Robert Irwin', work: 'For Lust of Knowing: The Orientalists and Their Enemies', year: '2006', status: 'paraphrase', note: 'Kritische Antwort auf Edward Said.' },
  ],
  difficulty: 3,
  tags: ['Islam', 'Hadith', 'Orientalismus', 'Goldziher', 'Schacht', 'Methodik'],
  related: [
    'islam-hadith-sira/isnad-wissenschaftlich-gesichert',
    'islam-hadith-sira/sira-vorbildlicher-charakter',
    'islam-koran/koran-perfekt-bewahrt',
    'islam-frauen-familie/aischa-alter',
    'liberale-theologie/bibel-nur-menschliche-erfahrung',
    'neues-testament/evangelien-spaet-anonym',
  ],
};

export default claim;
