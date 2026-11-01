import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'sira-vorbildlicher-charakter',
  title: `„Mohammeds Leben ist das vollkommene Vorbild für alle Zeiten (33:21)."`,
  proponents: [
    { name: 'Yasir Qadhi', role: 'Islamischer Gelehrter, Dallas', work: 'Vortragsreihe „Seerah of Prophet Muhammad" (über 100 Folgen)' },
    { name: 'Tariq Ramadan', role: 'Schweizer Islamwissenschaftler', work: 'In the Footsteps of the Prophet (2007)' },
    { name: 'Martin Lings', role: 'Britischer Sufi-Autor (1909–2005)', work: 'Muhammad: His Life Based on the Earliest Sources (1983)' },
    { name: 'Omar Suleiman', role: 'Islamischer Prediger, Yaqeen Institute', work: 'Vorträge über den Charakter des Propheten' },
  ],
  steelman: `„Der Koran sagt: ‚Ihr habt im Gesandten Allahs ein schönes Vorbild' (33:21) und ‚Du bist wahrlich von großartiger Wesensart' (68:4). Gott hat ihn ‚nur als Barmherzigkeit für die Welten' gesandt (21:107). Sein Leben ist besser dokumentiert als das jeder anderen Religionsgründer-Gestalt: Er war Waise, Hirte, Händler, Ehemann, Vater, Prophet, Staatsmann und Feldherr – ein Vorbild für jede Lebenslage. Er flickte seine Kleider selbst, lebte bescheiden, war gütig zu Kindern, Tieren und Armen. Als er Mekka eroberte, vergab er seinen Verfolgern mit den Worten Josefs: ‚Kein Tadel soll heute auf euch sein.' Jesus hingegen war nie Ehemann oder Staatsoberhaupt – sein Vorbild reicht für Mönche, nicht für die Ordnung einer Gesellschaft."`,
  biblical: {
    summary: `Das Neue Testament stellt ebenfalls ein Vorbild auf – aber eines anderer Art: „Christus hat gelitten für uns und uns ein Vorbild gelassen, dass ihr sollt nachfolgen seinen Fußtapfen; welcher keine Sünde getan hat … welcher nicht wiederschalt, da er gescholten ward, nicht drohte, da er litt" (1 Petr 2,21–23). Jesus forderte seine Gegner heraus: „Welcher unter euch kann mich einer Sünde zeihen?" (Joh 8,46). Er lehnte politische Macht ab (Joh 6,15; 18,36), verbot den Gebrauch des Schwertes für sein Reich (Mt 26,52) und vergab seinen Henkern (Lk 23,34). Das Vorbild Christi beschränkt die schlimmsten Impulse seiner Nachfolger, statt sie zu legitimieren.`,
    detail: `**Der Maßstab der Schrift:** Die Bibel verschweigt die Sünden ihrer großen Gestalten nicht (Davids Ehebruch und Mord, 2 Sam 11–12; Petrus' Verleugnung). Mose und David sind Propheten, aber *nicht* das vollkommene Vorbild für alle Zeiten – dieses Vorbild ist allein Christus (Joh 13,15; Phil 2,5–8). Darum kann ein Christ kritisch über Davids Kriege sprechen, ohne seinen Glauben zu gefährden.

**Der Koran selbst:** Der Koran fordert Mohammed auf, um Vergebung für seine Sünde (*dhanb*) zu bitten (40:55; 47:19; vgl. 48:2) und tadelt ihn (80:1–10). Jesus wird dagegen im Koran als „rein" (*zakiyy*, 19:19) beschrieben. Dieser Unterschied ist für das Gespräch über „vollkommene Vorbilder" bedeutsam.`,
    sources: [
      { kind: 'bibel', work: '1. Petrus', ref: '2,21–23', quote: `Sintemal auch Christus gelitten hat für uns und uns ein Vorbild gelassen, daß ihr sollt nachfolgen seinen Fußtapfen; welcher keine Sünde getan hat, ist auch kein Betrug in seinem Munde erfunden; welcher nicht wiederschalt, da er gescholten ward, nicht drohte, da er litt.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '8,46', quote: `Welcher unter euch kann mich einer Sünde zeihen?`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Lukas', ref: '23,34', quote: `Vater, vergib ihnen; denn sie wissen nicht, was sie tun!`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'koran', work: 'Sure 33 (al-Ahzab)', ref: '33:21', quote: `Ihr habt ja im Gesandten Allahs ein schönes Vorbild.`, original: `laqad kāna lakum fī rasūli llāhi uswatun ḥasanatun`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/33/21' },
      { kind: 'koran', work: 'Sure 47 (Muhammad)', ref: '47:19', quote: `So wisse, dass es keinen Gott gibt außer Allah, und bitte um Vergebung für deine Sünde und für die gläubigen Männer und Frauen.`, original: `wa-staghfir li-dhanbika`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/47/19' },
    ],
  },
  church: {
    summary: `Für die orthodoxe Kirche ist Christus nicht nur Lehrer, sondern das menschgewordene Bild des Vaters (Kol 1,15; Joh 14,9). Sein Leben zeigt, wer Gott ist: der, der sich erniedrigt und dient (Phil 2,5–8; Joh 13,14–15). Die frühen christlichen Apologeten verwiesen darauf, dass Christen ihre Feinde lieben und für ihre Verfolger beten – nicht als Schwäche, sondern als Nachfolge. Timotheus I. würdigte im Gespräch mit dem Kalifen al-Mahdi (781), dass Mohammed „auf dem Weg der Propheten wandelte", insofern er gegen Götzendienst kämpfte und zum einen Gott rief – und blieb dennoch klar, dass er ihn nicht als Propheten im biblischen Sinn anerkennen könne. Diese Haltung – würdigen, wo möglich, klar bleiben, wo nötig – ist das Vorbild für dieses Gespräch.`,
    sources: [
      { kind: 'kirchenvater', author: 'Timotheus I.', work: 'Dialog mit dem Kalifen al-Mahdi', year: '781', quote: `Mohammed verdient das Lob vernünftiger Menschen, denn er wandelte auf dem Weg der Propheten, indem er die Menschen vom Götzendienst abbrachte und zum Glauben an den einen Gott rief.`, status: 'paraphrase', note: 'Sinngemäß nach der Übersetzung von A. Mingana (1928).' },
      { kind: 'kirchenvater', author: 'Justin der Märtyrer', work: 'Erste Apologie', ref: '14', year: 'um 155', quote: `Wir, die wir einander früher hassten und töteten, leben jetzt zusammen, beten für unsere Feinde und versuchen, die zu überzeugen, die uns ungerecht hassen.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Die Quellen über Mohammeds Leben sind die Sira-Literatur – Ibn Ishaq (gest. ca. 767), erhalten in der Bearbeitung des Ibn Hisham (gest. 833) und bei at-Tabari (gest. 923), al-Waqidi (gest. 823), Ibn Saʿd (gest. 845) – sowie die Hadith-Sammlungen des 9. Jahrhunderts. Westliche Historiker sind sich über deren Zuverlässigkeit uneinig (von W. Montgomery Watt, der den Kern für weitgehend historisch hielt, bis zu Patricia Crone, die tief skeptisch war). Die Quellen enthalten sowohl Berichte großer Güte als auch Episoden, die heute viele Muslime selbst als schwierig empfinden: die Hinrichtung der Männer der Banu Qurayza, die Tötung des Dichters Kaʿb ibn al-Aschraf, die Ehe mit der jungen Aischa.`,
    detail: `**Banu Qurayza (627):** Nach dem Grabenkrieg wurden die Männer des jüdischen Stammes nach dem Urteil des Saʿd ibn Muʿadh hingerichtet, Frauen und Kinder versklavt (Bukhari 3043; vgl. Koran 33:26). Ibn Ishaq nennt 600 bis 700 Männer, manche Berichte bis 900. Der muslimische Historiker W. N. Arafat bestritt 1976 die Historizität der Massenhinrichtung (*Journal of the Royal Asiatic Society*, 1976).

**Kaʿb ibn al-Aschraf:** Bukhari 4037 berichtet, dass der Prophet fragte, wer bereit sei, Kaʿb zu töten, „der Allah und Seinen Gesandten verletzt hat", und Muhammad ibn Maslama erlaubte, eine List zu gebrauchen.

**Asma bint Marwan und Abu ʿAfak:** Diese Berichte stammen aus Ibn Ishaq und Ibn Saʿd; viele muslimische Hadith-Kritiker halten ihre Ketten für schwach oder erfunden. Sie sollten nicht als Hauptargument dienen.`,
    sources: [
      { kind: 'hadith', author: 'Ibn Ishaq / Ibn Hisham', work: 'Sirat Rasul Allah (engl.: The Life of Muhammad, übers. A. Guillaume)', year: 'Ibn Ishaq gest. ca. 767; Guillaume 1955', quote: `Bericht über die Belagerung und Hinrichtung der Banu Qurayza; die Zahl der Getöteten wird mit 600 oder 700, von manchen mit 800 oder 900 angegeben.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'W. N. Arafat', work: 'New Light on the Story of Banū Qurayẓa and the Jews of Medina', ref: 'Journal of the Royal Asiatic Society, S. 100–107', year: '1976', quote: `Die Behauptung, 600, 800 oder 900 Männer seien kaltblütig hingerichtet worden, könne nicht zutreffen; die Erzählung sei späteren Ursprungs.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'W. Montgomery Watt', work: 'Muhammad at Medina', year: '1956', quote: `Watt hält den Kern der Sira für historisch und deutet die Qurayza-Episode im Rahmen der arabischen Stammeskriegsführung.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Ich achte vieles an Mohammed: seine Bescheidenheit, seine Fürsorge für Waisen, seine Großzügigkeit bei der Einnahme Mekkas. Aber „Vorbild für alle Zeiten" heißt: Sein *ganzes* Leben ist Maßstab – auch das, was die islamischen Quellen selbst berichten: die Hinrichtung der Männer der Banu Qurayza (Bukhari 3043; Koran 33:26), die Tötung Kaʿb ibn al-Aschrafs durch eine List (Bukhari 4037), die Ehe mit der neunjährigen Aischa (Bukhari 5133). Entweder ist das alles zeitlos gut – oder das Vorbild hat Grenzen. Jesus dagegen vergab am Kreuz und verbot das Schwert.`,
  keyPoints: [
    `**Würdigen, was zu würdigen ist:** Bescheidenheit, Güte gegenüber Schwachen, die Amnestie bei der Einnahme Mekkas sind in den Quellen bezeugt.`,
    `**Das ganze Vorbild zählt:** Wer 33:21 für alle Zeiten beansprucht, kann die Medina-Zeit nicht ausklammern.`,
    `**Die eigenen Quellen:** Bukhari 3043 und Koran 33:26 (Banu Qurayza), Abu Dawud 4404 (Auswahl nach Schamhaar), Bukhari 4037 (Kaʿb ibn al-Aschraf) – keine westlichen Erfindungen.`,
    `**Das Zeitlos-oder-zeitgebunden-Dilemma:** Rechtfertigt man Handlungen mit den Normen des 7. Jahrhunderts, sind sie nicht „für alle Zeiten"; sind sie zeitlos, gelten sie heute.`,
    `**Selektive Skepsis funktioniert nicht:** Wer die harten Episoden als unhistorisch verwirft, verliert auch die erbaulichen – sie stammen aus denselben Quellen.`,
    `**Das Gegenbild:** Christus – sündlos (Joh 8,46; auch Koran 19:19), gewaltlos (Mt 26,52), vergebend (Lk 23,34). Christen, die Gewalt übten, handelten *gegen* ihr Vorbild.`,
  ],
  argument: {
    name: 'Das Vorbild-Dilemma',
    summary: 'Ein Vorbild „für alle Zeiten" muss in allen seinen Handlungen zeitlos gut sein – oder es ist nicht für alle Zeiten.',
    premises: [
      {
        text: `P1: Der Islam beansprucht Mohammed als vollkommenes Vorbild für alle Menschen und alle Zeiten (33:21; 21:107; 68:4).`,
        support: `Das ist die Grundlage der Sunna als Rechtsquelle und die Behauptung des Gegenübers.`,
      },
      {
        text: `P2: Die islamischen Quellen berichten Handlungen Mohammeds, die nach allgemein geteilten moralischen Maßstäben heute nicht als vorbildlich gelten.`,
        support: `Kollektive Hinrichtung der Männer eines Stammes (Bukhari 3043; Abu Dawud 4404; Koran 33:26), Tötung eines Kritikers durch List (Bukhari 4037), Ehe mit einem neunjährigen Mädchen (Bukhari 5133).`,
        sources: [
          { kind: 'hadith', work: 'Sahih al-Bukhari', ref: '4037', quote: `„Wer ist bereit, Kaʿb ibn al-Aschraf zu töten, denn er hat Allah und Seinen Gesandten verletzt?" Muhammad ibn Maslama erbat die Erlaubnis, etwas (Unwahres) sagen zu dürfen, und erhielt sie.`, status: 'paraphrase', url: 'https://sunnah.com/bukhari:4037' },
          { kind: 'hadith', work: 'Sunan Abi Dawud', ref: '4404', quote: `ʿAtiyya al-Qurazi: Ich war unter den Gefangenen der Banu Qurayza. Man untersuchte uns; wer Schamhaar bekommen hatte, wurde getötet, wer nicht, wurde verschont. Ich gehörte zu denen, die noch keines hatten.`, status: 'paraphrase', url: 'https://sunnah.com/abudawud:4404', note: 'Von al-Albani als sahih eingestuft.' },
        ],
      },
      {
        text: `P3: Entweder sind diese Handlungen zeitlos gut – dann sind sie heute nachahmenswert –, oder sie sind nur aus ihrer Zeit verständlich – dann ist Mohammed in diesen Punkten kein Vorbild für alle Zeiten.`,
        support: `Ein Drittes gibt es nicht, außer man erklärt die Berichte für unhistorisch – was die Glaubwürdigkeit der gesamten Sira- und Hadith-Überlieferung trifft (siehe Hadith-Dilemma).`,
      },
    ],
    conclusion: `Der Anspruch eines uneingeschränkten Vorbilds für alle Zeiten ist nicht haltbar, ohne entweder heute unmoralische Handlungen als gut zu verteidigen oder die eigenen Quellen preiszugeben.`,
  },
  voices: [
    {
      person: 'petrus',
      role: 'als Augenzeuge, der das Vorbild Christi beschreibt',
      text: `Petrus hatte selbst zum Schwert gegriffen, als Jesus verhaftet wurde – und Jesus wies ihn zurecht. Jahre später schreibt er an verfolgte Christen, Christus habe „ein Vorbild gelassen": Er schalt nicht wieder, er drohte nicht, er übergab sich dem gerecht Richtenden. Das Vorbild, dem Christen folgen, ist das des leidenden Gerechten, nicht das des siegreichen Feldherrn.`,
      sources: [
        { kind: 'bibel', work: '1. Petrus', ref: '2,23', quote: `… stellte es aber dem anheim, der da recht richtet.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
    },
    {
      person: 'timotheus-i',
      role: 'als Patriarch im respektvollen Gespräch mit dem Kalifen',
      text: `Timotheus I. antwortete dem Kalifen al-Mahdi, der ihn nach Mohammed fragte, mit großer Höflichkeit: Mohammed habe gegen Götzendienst gekämpft und zum einen Gott gerufen. Auf die Frage, ob er ihn als Propheten annehme, verwies er auf die Kriterien der Schrift – Prophezeiung und Wunder im Namen des Gottes, der sich in Christus offenbarte. Damit zeigt er, dass Würdigung und Klarheit zusammengehen.`,
      sources: [
        { kind: 'kirchenvater', author: 'Timotheus I.', work: 'Dialog mit dem Kalifen al-Mahdi', year: '781', quote: `Würdigung Mohammeds als Kämpfer gegen den Götzendienst bei gleichzeitiger Verweigerung der Anerkennung als Prophet nach biblischen Kriterien.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'david-wood',
      role: 'als Debattierer über die Biografie Mohammeds',
      text: `Wood argumentiert, dass christliche Kritiker keine fremden Vorwürfe erfinden müssen: Die schwierigsten Episoden stehen in den frühesten und angesehensten muslimischen Quellen – Ibn Ishaq, al-Bukhari, Muslim, Abu Dawud. Er fordert muslimische Gesprächspartner auf, ehrlich zu sagen, ob sie diese Berichte für wahr halten – und wenn ja, ob sie die Handlungen für nachahmenswert halten.`,
    },
    {
      person: 'qureshi',
      role: 'als ehemaliger Muslim, der die Sira liebte',
      text: `Qureshi beschreibt, wie er als Kind die erbaulichen Geschichten über Mohammeds Güte lernte und erst als Student die vollständigen frühen Quellen las. Die Begegnung mit Berichten wie dem über Kaʿb ibn al-Aschraf oder die Banu Qurayza stürzte ihn in eine tiefe Krise – nicht, weil Christen sie erzählten, sondern weil sie in den Quellen standen, die er selbst verehrte. Er betont, dass er Muslime mit großer Liebe vor diese Frage stellt.`,
      sources: [
        { kind: 'fachliteratur', author: 'Nabeel Qureshi', work: 'Seeking Allah, Finding Jesus', year: '2014', quote: `Bericht über die Lektüre der frühen Sira-Quellen und die daraus folgende Krise.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'chrysostomus',
      role: 'als Prediger der Feindesliebe',
      text: `Chrysostomus predigte, dass nichts so sehr Christus nachahme wie die Liebe zu den Feinden und das Gebet für die, die uns schaden. Christen sollen sich vom Bösen nicht überwinden lassen, sondern es mit Gutem überwinden (Röm 12,21). Für ihn ist das kein Ideal für Weltflüchtige, sondern die Berufung aller Getauften – im Haus, auf dem Markt und in der Stadt.`,
      sources: [
        { kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Homilien zum Matthäusevangelium', ref: '18 (zu Mt 5,38–48)', year: 'um 390', quote: `Die Feindesliebe ist der Gipfel der Tugend; durch sie werden wir dem Vater im Himmel ähnlich.`, status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'mekka-amnestie',
      objection: `Lies 33:21 und 68:4! Sein Charakter war großartig. Als er Mekka eroberte, vergab er seinen Todfeinden. Welcher Eroberer hat das je getan?`,
      objectionBy: 'Yasir Qadhi',
      answer: `Die Amnestie bei der Einnahme Mekkas ist eindrucksvoll, und ich würdige sie aufrichtig. Aber „Vorbild für alle Zeiten" bedeutet, dass sein *ganzes* Leben zählt – auch die Medina-Zeit. Dieselben Quellen berichten die Tötung Kaʿb ibn al-Aschrafs durch eine List (Bukhari 4037) und die Hinrichtung der Männer der Banu Qurayza (Bukhari 3043). Hältst du diese Handlungen heute für nachahmenswert?`,
      questionsBack: [
        `Welche Handlungen Mohammeds sind nach deiner Sicht *nicht* Vorbild für heute – und wer entscheidet das?`,
      ],
      followUps: [
        {
          id: 'qurayza-hochverrat',
          objection: `Die Banu Qurayza begingen im Grabenkrieg Hochverrat und verbündeten sich mit dem Feind. Verrat wurde überall mit dem Tod bestraft. Und Saʿd urteilte sogar nach ihrer eigenen Tora (Dtn 20).`,
          objectionBy: 'Shabir Ally',
          answer: `Nach Bukhari 3043 bestätigte der Prophet Saʿds Urteil als Urteil Gottes. Hingerichtet wurden alle erwachsenen Männer – auch die, die persönlich nichts getan hatten; ob ein Junge als „Mann" galt, entschied das Schamhaar (Abu Dawud 4404). Das ist Kollektivstrafe. Und Dtn 20 war kein Maßstab, den Mohammed sonst anwandte; Christen lesen Dtn 20 als zeitgebundenes Gebot, nicht als Vorbild Christi.`,
          sources: [
            { kind: 'hadith', work: 'Sahih al-Bukhari', ref: '3043', quote: `Saʿd urteilte, dass ihre Kämpfer getötet und ihre Frauen und Kinder gefangen genommen werden; der Prophet sagte: „Du hast nach dem Urteil Allahs (bzw. des Königs) geurteilt."`, status: 'unverified', note: 'Nummer nach sunnah.com nicht abschließend geprüft; derselbe Bericht auch bei Bukhari im Kapitel über die Banu Qurayza (Kitab al-Maghazi).' },
          ],
          followUps: [
            {
              id: 'arafat-unhistorisch',
              objection: `Der Historiker W. N. Arafat hat 1976 gezeigt, dass die Massenhinrichtung historisch nicht haltbar ist – die Geschichte stammt von späteren Erzählern.`,
              objectionBy: 'W. N. Arafat / moderne muslimische Historiker',
              answer: `Ich nehme diese Debatte ernst. Aber beachte den Preis: Dann verwirfst du Ibn Ishaq, al-Waqidi, al-Bukhari und Abu Dawud – genau die Quellen, aus denen du das Bild des barmherzigen Propheten bei der Einnahme Mekkas hast. Wer nur das Unbequeme für unhistorisch erklärt, betreibt selektive Skepsis.`,
              followUps: [
                {
                  id: 'nur-koran-33-26',
                  objection: `Ich nehme aus der Sira nur, was der Koran bestätigt. Und der Koran erzählt keine Massenhinrichtung.`,
                  objectionBy: 'reformorientierte Muslime',
                  answer: `Der Koran bestätigt gerade den Kern: „Er ließ diejenigen von den Leuten der Schrift, die ihnen beigestanden hatten, aus ihren Burgen herabsteigen … einen Teil tötetet ihr, und einen Teil nahmt ihr gefangen" (33:26). Tötung und Versklavung sind also koranisch bezeugt; strittig ist nur die Zahl.`,
                  sources: [
                    { kind: 'koran', work: 'Sure 33 (al-Ahzab)', ref: '33:26', quote: `Und Er ließ diejenigen von den Leuten der Schrift, die ihnen beigestanden hatten, aus ihren Burgen herabsteigen und warf Schrecken in ihre Herzen; einen Teil tötetet ihr, und einen Teil nahmt ihr gefangen.`, original: `farīqan taqtulūna wa-taʾsirūna farīqā`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/33/26' },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'kaab-kriegshetzer',
          objection: `Kaʿb ibn al-Aschraf war kein harmloser Dichter. Er hetzte die Mekkaner zum Krieg gegen die Muslime auf und verhöhnte muslimische Frauen in seinen Versen. Er war ein Kriegsverbrecher.`,
          objectionBy: 'Mohammed Hijab',
          answer: `Selbst wenn man das zugrunde legt: Nach Bukhari 4037 wurde Kaʿb nachts unter einem Vorwand aus seiner Burg gelockt und getötet, mit der Erlaubnis des Propheten, dafür Unwahres zu sagen. Genau dieser Fall wurde zum Präzedenzfall: Ibn Taymiyya stützt in *aṣ-Ṣārim al-maslūl* die Tötung derer, die den Propheten schmähen, ausdrücklich auf Kaʿb. Das ist die Gefahr eines Vorbilds „für alle Zeiten".`,
          sources: [
            { kind: 'hadith', author: 'Ibn Taymiyya', work: 'as-Sarim al-maslul ʿala shatim ar-rasul', year: '14. Jh.', quote: `Die Tötung Kaʿb ibn al-Aschrafs dient als Beleg dafür, dass die Schmähung des Propheten mit dem Tod zu bestrafen sei.`, status: 'paraphrase' },
          ],
          followUps: [
            {
              id: 'taeuschung-im-krieg',
              objection: `Täuschung im Krieg ist überall erlaubt. Auch Rahab log und wird in der Bibel gelobt (Hebr 11,31).`,
              objectionBy: 'Mohammed Hijab',
              answer: `Hebr 11,31 lobt Rahabs *Glauben*, nicht ihre Lüge; christliche Ausleger haben ihre Lüge seit Augustinus kritisch gesehen. Der Unterschied ist grundsätzlich: Rahab ist eine Gestalt in einer Erzählung, Mohammed ist nach 33:21 das *Vorbild*, das hier selbst die Täuschung genehmigt. Von Christus sagt die Schrift: „Kein Betrug ist in seinem Munde erfunden" (1 Petr 2,22).`,
              followUps: [
                {
                  id: 'jesus-kein-staatsmann',
                  objection: `Der Vergleich ist unfair: Jesus war nie Staatsoberhaupt und musste keine Gemeinschaft verteidigen. Hätte er regiert, hätte er auch Krieg führen müssen.`,
                  objectionBy: 'Shabir Ally',
                  answer: `Genau darin liegt der Punkt: Jesus *lehnte* die Macht ab, als man ihn zum König machen wollte (Joh 6,15), und sagte vor Pilatus: „Mein Reich ist nicht von dieser Welt; wäre es von dieser Welt, meine Diener würden kämpfen" (Joh 18,36). Das ist keine Lücke, sondern Offenbarung über Gottes Weg. Deshalb handelten Christen, die Gewalt im Namen Christi übten, gegen ihr Vorbild – Muslime, die sich auf Kaʿb berufen, handeln gemäß ihrem.`,
                  sources: [
                    { kind: 'bibel', work: 'Johannes', ref: '18,36', quote: `Mein Reich ist nicht von dieser Welt. Wäre mein Reich von dieser Welt, meine Diener würden darob kämpfen, daß ich den Juden nicht überantwortet würde; aber nun ist mein Reich nicht von dannen.`, translation: 'Luther 1912', status: 'verbatim' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'massstaebe-seiner-zeit',
      objection: `Man muss Mohammed nach den Maßstäben seiner Zeit beurteilen. Ihn an modernen westlichen Werten zu messen, ist Präsentismus – ein Grundfehler jeder Geschichtswissenschaft.`,
      objectionBy: 'Jonathan A. C. Brown',
      answer: `Bei einer gewöhnlichen historischen Person hättest du völlig recht. Aber der Anspruch lautet: Vorbild *für alle Zeiten* und „Barmherzigkeit für die Welten" (21:107). Wenn seine Handlungen nur mit den Normen des 7. Jahrhunderts verständlich sind, dann sind sie nicht zeitlos. Wenn sie zeitlos sind, gelten sie heute. Beides zugleich geht nicht.`,
      followUps: [
        {
          id: 'prinzipien-zeitlos',
          objection: `Zeitlos sind seine Prinzipien – Gerechtigkeit, Barmherzigkeit, Gottesfurcht –, nicht jede einzelne Handlung in ihrem Kontext.`,
          objectionBy: 'Tariq Ramadan',
          answer: `Wer entscheidet, welche Handlungen Prinzip sind und welche Kontext? Die klassischen Juristen haben seine Handlungen gerade als Sunna, also als Recht, behandelt – Heiratsalter, Sklavinnen, Apostasie. Reformer, die das einschränken, tun etwas Gutes; aber sie messen Mohammed dabei an einem höheren Maßstab. Woher kommt dieser Maßstab, wenn Mohammed selbst der höchste ist?`,
          followUps: [
            {
              id: 'auch-bibel-kriegspropheten',
              objection: `Auch die Bibel hat Kriegspropheten: Mose, Josua, David. Warum dürfen die Krieg führen, Mohammed aber nicht?`,
              objectionBy: 'Zakir Naik',
              answer: `Weil das Neue Testament weder Mose noch Josua noch David als vollkommenes Vorbild für alle Zeiten hinstellt. Davids Sünde wird schonungslos aufgedeckt (2 Sam 12). Das Vorbild ist Christus allein (1 Petr 2,21; Joh 13,15). Deshalb kann ich offen über die Härte des Alten Testaments sprechen, ohne meinen Glauben zu gefährden – kannst du offen über die Härte in Mohammeds Leben sprechen?`,
              detail: `Siehe Claim „Die Bibel ist gewalttätiger als der Koran" und „Gott befahl Völkermord an den Kanaanitern".`,
              followUps: [
                {
                  id: 'christentum-ohne-staatsethik',
                  objection: `Dann hat das Christentum eben keine Ethik für Staat und Krieg. Darum braucht die Welt Mohammeds Vorbild, der alle Lebensbereiche ordnete.`,
                  objectionBy: 'Hamza Andreas Tzortzis',
                  answer: `Christen haben eine Ethik für Staat und Krieg entwickelt – aus Schöpfungsordnung, Vernunft und Röm 13 –, etwa die Lehre vom gerechten Krieg, die Gewalt *begrenzen* soll. Was das Christentum nicht hat, ist ein Gründer, dessen Feldzüge den Gläubigen als Vorbild dienen. Das ist kein Mangel, sondern ein Schutz: Ein Glaube, dessen Gründer die schlimmsten Impulse seiner Anhänger zügelt, ist besser als einer, dessen Gründer sie legitimieren kann.`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'asma-bint-marwan-erfunden',
      objection: `Islamkritiker benutzen schwache Quellen. Die Geschichten über Asma bint Marwan und Abu ʿAfak sind nach den Regeln der Hadith-Kritik erfunden.`,
      objectionBy: 'muslimische Hadith-Kritiker',
      answer: `Da hast du recht, und ich verwende diese Berichte nicht als Argument – viele muslimische Gelehrte halten ihre Ketten für schwach. Darum stütze ich mich auf das, was in al-Bukhari, Muslim, Abu Dawud und im Koran steht (33:26). Ehrliche Argumente brauchen keine zweifelhaften Quellen.`,
      followUps: [
        {
          id: 'sira-insgesamt-unzuverlaessig',
          objection: `Dann ist eben die ganze Sira unzuverlässig. Ibn Ishaq hatte keine strengen Ketten wie al-Bukhari.`,
          objectionBy: 'Shabir Ally',
          answer: `Dann verlierst du auch die erbaulichen Geschichten – die Amnestie in Mekka, die Vergebung in Taʾif, die Güte gegenüber der alten Frau, die ihm Müll in den Weg warf: Sie stammen aus derselben Literatur oder sind noch schwächer belegt. Und beachte das Kriterium der Peinlichkeit: Warum hätten fromme muslimische Autoren Episoden erfinden sollen, die ihren Propheten belasten?`,
          followUps: [
            {
              id: 'fruehe-muslime-ruhm',
              objection: `Die frühen Muslime sahen diese Episoden nicht als peinlich, sondern als Ruhmestaten.`,
              objectionBy: 'Jonathan A. C. Brown',
              answer: `Genau – und das ist aufschlussreich. Dann spiegeln die Berichte die Werte der frühen Gemeinde: Sie erzählte die Tötung Kaʿbs als Ruhmestat. Das spricht dafür, dass die Episoden früh sind, und dass das „vollkommene Vorbild" von Anfang an so verstanden wurde – einschließlich dieser Taten.`,
              followUps: [
                {
                  id: 'christen-kreuzzuege-urteilen',
                  objection: `Wer seid ihr Christen, um zu urteilen? Eure Kreuzfahrer haben Jerusalem in Blut getränkt.`,
                  objectionBy: 'Mohammed Hijab',
                  answer: `Ich verteidige die Massaker der Kreuzfahrer nicht – sie widersprachen Christus, und ich verurteile sie mit *seinem* Maßstab. Auch Christen des Ostens, darunter Kopten, litten unter Kreuzfahrern. Meine Frage an dich ist dieselbe: Verurteilst du die Tötung Kaʿbs mit dem Maßstab Mohammeds? Wenn das nicht geht, weil er der Maßstab ist, haben wir genau das Problem gefunden.`,
                  detail: `Siehe Claim „Die Kreuzzüge zeigen die Gewalt des Christentums".`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'jesus-schwert-mt-10-34',
      objection: `Auch Jesus sagte: „Ich bin nicht gekommen, Frieden zu bringen, sondern das Schwert" (Mt 10,34). Und er vertrieb die Händler mit einer Peitsche aus dem Tempel.`,
      objectionBy: 'Shabir Ally',
      answer: `Lies den Zusammenhang: Jesus spricht davon, dass der Glaube an ihn Familien spalten wird (Mt 10,35–36); die Parallele bei Lukas sagt „Zwietracht" (Lk 12,51). Die Jünger werden darin verfolgt, nicht Verfolger (Mt 10,16–23). Bei der Tempelreinigung wurde niemand verletzt oder getötet – sie war eine prophetische Zeichenhandlung.`,
      followUps: [
        {
          id: 'lukas-22-36-schwert',
          objection: `Lk 22,36: „Wer nichts hat, verkaufe seinen Mantel und kaufe ein Schwert." Jesus bewaffnete seine Jünger!`,
          objectionBy: 'Zakir Naik',
          answer: `Im nächsten Vers nennt Jesus den Grund: Das Schriftwort „Er ist unter die Übeltäter gerechnet" (Jes 53,12) solle sich erfüllen (Lk 22,37). Als die Jünger zwei Schwerter zeigen, sagt er: „Es ist genug." Und als einer davon Gebrauch macht, heilt Jesus den Verwundeten (Lk 22,50–51) und gebietet: „Stecke dein Schwert an seinen Ort" (Mt 26,52).`,
          sources: [
            { kind: 'bibel', work: 'Matthäus', ref: '26,52', quote: `Stecke dein Schwert an seinen Ort! denn wer das Schwert nimmt, der soll durchs Schwert umkommen.`, translation: 'Luther 1912', status: 'verbatim' },
          ],
          followUps: [
            {
              id: 'offenbarung-19-schwert',
              objection: `In Offb 19 kommt Jesus mit dem Schwert und tötet seine Feinde. Euer Jesus ist also auch ein Krieger.`,
              objectionBy: 'Mohammed Hijab',
              answer: `Das Schwert geht „aus seinem Munde" hervor (Offb 19,15.21) – das Bild für sein richtendes Wort. Es ist Gottes Endgericht, kein Befehl an Gläubige, zu kämpfen. Die Gläubigen in der Offenbarung siegen „durch des Lammes Blut und durch das Wort ihres Zeugnisses" (Offb 12,11) – als Märtyrer, nicht als Kämpfer.`,
              followUps: [
                {
                  id: 'gott-gewalt-verschoben',
                  objection: `Dann ist euer Gott eben auch gewalttätig – ihr verschiebt die Gewalt nur auf das Ende der Zeit.`,
                  objectionBy: 'Mohammed Hijab',
                  answer: `Das Endgericht durch den allwissenden, gerechten Gott ist Gerechtigkeit, keine menschliche Gewalt – und auch der Islam lehrt ein Endgericht. Die entscheidende Frage ist, ob *Menschen* den Auftrag haben, Gottes Gericht jetzt mit dem Schwert zu vollstrecken. Paulus sagt: „Rächet euch selber nicht … Die Rache ist mein; ich will vergelten, spricht der Herr" (Röm 12,19).`,
                  sources: [
                    { kind: 'bibel', work: 'Römer', ref: '12,19', quote: `Rächet euch selber nicht, meine Liebsten, sondern gebet Raum dem Zorn Gottes; denn es steht geschrieben: „Die Rache ist mein; ich will vergelten, spricht der Herr."`, translation: 'Luther 1912', status: 'verbatim' },
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
    `Gibt es eine Handlung Mohammeds, die du *nicht* als Vorbild für heute ansiehst? Wenn ja – mit welchem Maßstab entscheidest du das?`,
    `Hältst du Bukhari 4037 (Kaʿb ibn al-Aschraf) für authentisch? Und wenn ja: Ist es heute erlaubt, Kritiker des Propheten zu töten?`,
    `Wenn die Sira für die Medina-Zeit unzuverlässig ist – warum dann für die Mekka-Zeit zuverlässig?`,
    `Der Koran nennt Jesus „rein" (19:19) und fordert Mohammed auf, um Vergebung seiner Sünde zu bitten (47:19) – wer ist dann das vollkommenere Vorbild?`,
  ],
  avoid: [
    `Keine Beleidigungen oder Schimpfwörter über Mohammed. Sie verletzen Menschen, beenden das Gespräch und widersprechen 1 Petr 3,15.`,
    `Nicht mit Asma bint Marwan oder Abu ʿAfak als Hauptbeleg argumentieren – ihre Ketten gelten auch muslimischen Kritikern als schwach.`,
    `Nicht so tun, als habe Mohammed keinerlei gute Eigenschaften gehabt. Die Quellen berichten auch Güte, Bescheidenheit und Vergebung – das zu leugnen ist unehrlich.`,
  ],
  concessions: [
    `Die Quellen berichten von echter Bescheidenheit, Fürsorge für Waisen und Arme und der weitgehenden Amnestie bei der Einnahme Mekkas.`,
    `Die Zahl der getöteten Banu Qurayza ist historisch umstritten; auch muslimische Historiker (W. N. Arafat) haben die Überlieferung kritisch geprüft.`,
    `Christen haben in ihrer Geschichte Gewalt verübt – oft unter Berufung auf Christus, aber im Widerspruch zu ihm.`,
  ],
  furtherReading: [
    { kind: 'hadith', author: 'Ibn Ishaq / Ibn Hisham', work: 'The Life of Muhammad (übers. A. Guillaume)', year: '1955', status: 'paraphrase', note: 'Die wichtigste frühe Biografie.' },
    { kind: 'gegner', author: 'Martin Lings', work: 'Muhammad: His Life Based on the Earliest Sources', year: '1983', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Nabeel Qureshi', work: 'Seeking Allah, Finding Jesus', year: '2014', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'W. Montgomery Watt', work: 'Muhammad at Medina', year: '1956', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Islam', 'Mohammed', 'Sira', 'Vorbild', 'Banu Qurayza', 'Ethik'],
  related: [
    'islam-mohammed/mohammed-wahrer-prophet',
    'islam-hadith-sira/isnad-wissenschaftlich-gesichert',
    'islam-gewalt-scharia/schwertverse-kontext',
    'islam-gewalt-scharia/bibel-gewalttaetiger',
    'islam-frauen-familie/aischa-alter',
    'islam-gottheit-christi/jesus-nur-ein-prophet',
    'religion-gewalt/kreuzzuege',
    'at-ethik/kanaaniter-voelkermord',
  ],
};

export default claim;
