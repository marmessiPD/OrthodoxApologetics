import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'islam-heisst-frieden',
  title: `„Islam bedeutet Frieden."`,
  proponents: [
    { name: 'Zakir Naik', role: 'Islamischer Prediger, Peace TV', work: 'Vorträge „Islam – Religion des Friedens"' },
    { name: 'George W. Bush', role: 'US-Präsident 2001–2009', work: 'Rede im Islamic Center of Washington, 17. September 2001 („Islam is peace")' },
    { name: 'Mirza Masroor Ahmad', role: 'Oberhaupt der Ahmadiyya Muslim Jamaat', work: 'Leitwort „Liebe für alle, Hass für keinen"' },
    { name: 'Hamza Yusuf', role: 'US-amerikanischer islamischer Gelehrter, Zaytuna College', work: 'Vorträge über Islam und Frieden' },
  ],
  steelman: `„Das Wort *islām* stammt von derselben Wurzel *s-l-m* wie *salām*, Frieden. Muslime grüßen einander mit ‚as-salāmu ʿalaykum' – Friede sei mit euch. Gottes Name ist ‚as-Salām' (59:23), das Paradies heißt ‚Haus des Friedens' (10:25). Der Koran sagt: ‚Kein Zwang im Glauben' (2:256) und ‚Wer einen Menschen tötet … ist, als ob er alle Menschen getötet hätte' (5:32). ‚Und wenn sie sich dem Frieden zuneigen, so neige auch du dich ihm zu' (8:61). Terroristen missbrauchen den Islam – die überwältigende Mehrheit von fast zwei Milliarden Muslimen lebt friedlich. Wer den Islam mit Gewalt gleichsetzt, betreibt Islamophobie."`,
  biblical: {
    summary: `Die Bibel versteht Frieden (*šālôm*, *eirēnē*) zuerst als Versöhnung mit Gott, aus der Frieden unter den Menschen folgt. Christus „ist unser Friede" (Eph 2,14); „gerecht geworden durch den Glauben, haben wir Frieden mit Gott durch unsern Herrn Jesus Christus" (Röm 5,1). Dieser Friede wird nicht durch politische Unterwerfung hergestellt, sondern durch das Kreuz (Kol 1,20). Jesus preist die Friedensstifter selig (Mt 5,9) und gibt einen Frieden, „nicht wie die Welt gibt" (Joh 14,27). Das Wort für die Religion ist im Christentum nicht „Unterwerfung", sondern das „Evangelium" – die gute Nachricht von Gottes Liebe.`,
    detail: `**Christliches Selbstverständnis ehrlich:** Auch Christen haben Kriege geführt. Aber das Neue Testament enthält keinen einzigen Befehl, den Glauben mit Gewalt auszubreiten oder Ungläubige zu bekämpfen. Christen, die das taten, handelten gegen das Wort und Beispiel ihres Herrn (Mt 26,52; Joh 18,36).`,
    sources: [
      { kind: 'bibel', work: 'Epheser', ref: '2,14', quote: `Denn er ist unser Friede.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Matthäus', ref: '5,9', quote: `Selig sind die Friedfertigen; denn sie werden Gottes Kinder heißen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '14,27', quote: `Den Frieden lasse ich euch, meinen Frieden gebe ich euch. Nicht gebe ich euch, wie die Welt gibt.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Römer', ref: '5,1', quote: `Nun wir denn sind gerecht geworden durch den Glauben, so haben wir Frieden mit Gott durch unsern HERRN Jesus Christus.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptische Kirche betet in jeder Liturgie um den Frieden der Welt, für die Regierenden und für alle Menschen. Der Friedensgruß („Grüßt einander mit dem heiligen Kuss") ist ein Herzstück der Liturgie. Die Kopten haben über 1.300 Jahre unter islamischer Herrschaft gelebt – mit Zeiten guter Nachbarschaft und Zeiten schwerer Bedrängnis – und haben ihr Zeugnis meist durch Geduld und Martyrium, nicht durch Gewalt bewahrt. Papst Schenuda III. prägte das Wort, Ägypten sei „nicht ein Land, in dem wir leben, sondern ein Land, das in uns lebt" – ein Ausdruck der Liebe zur gemeinsamen Heimat mit den muslimischen Mitbürgern.`,
    sources: [
      { kind: 'liturgie', work: 'Liturgie des hl. Basilius (koptisch)', ref: 'Fürbitte für den Frieden', quote: `Gebet um den Frieden der einen, heiligen, katholischen und apostolischen Kirche und um Frieden für die ganze Welt.`, status: 'paraphrase' },
      { kind: 'koptisch', author: 'Papst Schenuda III.', work: 'Ansprachen', quote: `Ägypten ist nicht ein Land, in dem wir leben, sondern ein Land, das in uns lebt.`, status: 'unverified', note: 'Weit verbreitetes, Schenuda III. zugeschriebenes Wort; genaue Fundstelle unbekannt.' },
    ],
  },
  opposingView: {
    summary: `Sprachwissenschaftlich ist *islām* der Infinitiv (*maṣdar*) des IV. Verbstamms *aslama* – „sich ergeben, sich hingeben, sich unterwerfen". *Salām* (Frieden) ist ein anderes Wort derselben Wurzel. Muslimische Gelehrte definieren *islām* als Hingabe an den Willen Gottes. Im klassischen islamischen Recht wurde die Welt in das „Gebiet des Islam" (*dār al-islām*) und das „Gebiet des Krieges" (*dār al-ḥarb*) eingeteilt; Frieden im vollen Sinn bedeutete die Geltung der islamischen Ordnung, mit Nichtmuslimen gab es Verträge, Waffenstillstände oder die *dhimma* (Schutz gegen Tribut).`,
    detail: `**Forschung:** Majid Khadduri (*War and Peace in the Law of Islam*, 1955) und Rudolph Peters (*Jihad in Classical and Modern Islam*, 1996) beschreiben die klassische Lehre von *dār al-islām* und *dār al-ḥarb*. Viele heutige Muslime und Gelehrte lehnen diese Einteilung für die Gegenwart ab und sehen den Islam in einem Rahmen friedlicher internationaler Beziehungen – eine Entwicklung, die zu begrüßen ist.`,
    sources: [
      { kind: 'fachliteratur', author: 'Majid Khadduri', work: 'War and Peace in the Law of Islam', year: '1955', quote: `Das klassische islamische Recht kannte keinen dauerhaften Frieden mit nichtmuslimischen Staaten, sondern Waffenstillstände; die Welt teilte sich in dār al-islām und dār al-ḥarb.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Rudolph Peters', work: 'Jihad in Classical and Modern Islam', year: '1996', quote: `Darstellung der klassischen Dschihad-Lehre und ihrer modernen Neudeutungen.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `*Islām* und *salām* haben dieselbe Wurzel, aber verschiedene Bedeutungen: *Islām* heißt „Hingabe" oder „Unterwerfung" – so definieren es Muslime selbst. Viele Muslime sind friedliche Menschen, und das ehre ich. Aber die Frage ist, was die Quellen lehren: Der Koran befiehlt auch, Ungläubige zu bekämpfen, bis sie Tribut zahlen (9:29), und das klassische Recht kennt die Todesstrafe für den Austritt aus dem Islam (Bukhari 6922). Frieden durch Unterwerfung ist etwas anderes als der Friede, den Christus durch das Kreuz schenkt.`,
  keyPoints: [
    `**Sprache:** *Islām* = Infinitiv von *aslama* („sich ergeben"); *salām* = Frieden. Gleiche Wurzel, verschiedene Wörter – wie im Deutschen „Gift" und „Mitgift".`,
    `**Muslime selbst** definieren Islam als Hingabe an Gottes Willen – das ist eine schöne Idee, aber keine Aussage über Gewaltlosigkeit.`,
    `**5:32 im Zusammenhang:** Der Vers nimmt Mord und „Unheil im Land" aus; 5:33 schreibt für Letzteres Tötung, Kreuzigung und wechselseitige Amputation vor.`,
    `**2:256 und die Apostasie:** „Kein Zwang" beim Eintritt – aber das klassische Recht bestraft den Austritt mit dem Tod (Bukhari 6922).`,
    `**Muslime sind oft besser als das klassische Recht:** Das ist ein Lob für sie – und eine Frage an die Texte.`,
    `**Christlicher Friede:** Versöhnung mit Gott durch das Kreuz (Röm 5,1; Eph 2,14), Feindesliebe (Mt 5,44), kein Auftrag zur Glaubensausbreitung mit Gewalt.`,
  ],
  voices: [
    {
      person: 'paulus',
      role: 'als Apostel des Friedens mit Gott',
      text: `Für Paulus ist Frieden zuerst eine neue Beziehung zu Gott, die Christus durch sein Blut am Kreuz gestiftet hat (Kol 1,20). Daraus folgt der Friede zwischen Menschen, die vorher Feinde waren – Juden und Heiden (Eph 2,14–16). Er fordert: „Ist's möglich, soviel an euch ist, so habt mit allen Menschen Frieden" (Röm 12,18). Gewalt zur Ausbreitung des Glaubens ist in seinem Denken undenkbar: „Die Waffen unserer Ritterschaft sind nicht fleischlich" (2 Kor 10,4).`,
      sources: [
        { kind: 'bibel', work: '2. Korinther', ref: '10,4', quote: `Denn die Waffen unsrer Ritterschaft sind nicht fleischlich, sondern mächtig vor Gott, zu zerstören Befestigungen.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
    },
    {
      person: 'severus-ibn-al-muqaffa',
      role: 'als koptischer Bischof und Apologet unter islamischer Herrschaft',
      text: `Severus ibn al-Muqaffaʿ schrieb im 10. Jahrhundert auf Arabisch, um den christlichen Glauben unter islamischer Herrschaft zu erklären und zu verteidigen. Seine Werke zeigen beides: das Ringen um ein friedliches Miteinander und die Erfahrung einer Gemeinschaft, die als *dhimmi* lebte – geschützt, aber untergeordnet. Die koptische Geschichte ist das lebendige Zeugnis dafür, was „Frieden" unter der klassischen islamischen Ordnung für Christen bedeutete.`,
    },
    {
      person: 'qureshi',
      role: 'als ehemaliger Muslim, der den Islam als Religion des Friedens kennenlernte',
      text: `Qureshi wuchs in einer liebevollen, friedlichen muslimischen Familie auf und lernte den Islam als Religion des Friedens kennen. Er betont, dass die meisten Muslime genau so leben. Erst die Lektüre der Quellen – Koran, Hadith, Sira, klassisches Recht – zeigte ihm, dass der Islam der Texte anders ist als der Islam, den er zu Hause erlebte. Er unterscheidet deshalb sorgfältig zwischen Muslimen und Islam.`,
      sources: [
        { kind: 'fachliteratur', author: 'Nabeel Qureshi', work: 'Answering Jihad: A Better Way Forward', year: '2016', quote: `Der Islam, den viele Muslime leben, ist friedlich; die frühen Quellen und das klassische Recht zeichnen jedoch ein anderes Bild. Man muss Muslime und den Islam der Quellen unterscheiden.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'athanasius',
      role: 'als Zeuge der befriedenden Kraft des Evangeliums',
      text: `Athanasius führt als Beweis für die Wahrheit Christi an, dass Völker, die zuvor kriegerisch waren, nach der Annahme seiner Lehre die Waffen niederlegten und sich dem Ackerbau zuwandten – die Erfüllung von Jesaja 2,4 („Schwerter zu Pflugscharen"). Der Friede Christi verwandelt Menschen von innen, statt sie von außen zu unterwerfen.`,
      sources: [
        { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Menschwerdung des Logos (De Incarnatione)', ref: '52', year: 'um 318', quote: `Barbaren, die einander bekriegten, legen, sobald sie die Lehre Christi hören, den Krieg ab und wenden sich dem Ackerbau zu; statt die Hände mit Waffen zu rüsten, erheben sie sie zum Gebet.`, status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'islam-von-salam',
      objection: `Islam kommt von *salām* – Frieden. Schon der Name zeigt: Der Islam ist die Religion des Friedens.`,
      objectionBy: 'Zakir Naik',
      answer: `*Islām* und *salām* haben dieselbe Wurzel, aber verschiedene Bedeutungen. *Islām* ist der Infinitiv von *aslama* – „sich ergeben, sich unterwerfen"; so definieren es muslimische Gelehrte selbst: Hingabe an Gottes Willen. Gleiche Wurzeln beweisen keine gleiche Bedeutung – im Deutschen sind „Gift" und „Mitgift" verwandt, meinen aber Verschiedenes.`,
      followUps: [
        {
          id: 'hingabe-bringt-frieden',
          objection: `Durch die Hingabe an Gott findet der Mensch Frieden. Darum ist beides dasselbe: Islam ist der Friede, der aus der Unterwerfung unter Gott kommt.`,
          objectionBy: 'Hamza Yusuf',
          answer: `Das ist ein schöner Gedanke, den Christen gut verstehen: „Unruhig ist unser Herz, bis es ruht in dir" (Augustinus). Aber das ist eine Aussage über die innere Spiritualität des Einzelnen. Die Frage war, ob der Islam als Rechts- und Glaubensordnung gegenüber Nichtmuslimen friedlich ist. Dafür müssen wir auf Koran, Hadith und klassisches Recht schauen.`,
          followUps: [
            {
              id: 'dhimma-ist-frieden',
              objection: `Das islamische Recht schützt Nichtmuslime als *dhimmī*. Juden und Christen lebten jahrhundertelang sicher unter islamischer Herrschaft. Das ist Frieden.`,
              objectionBy: 'Jonathan A. C. Brown',
              answer: `Die *dhimma* war Schutz gegen einen Preis: Tribut (*jizya*) „in Demut" (9:29) und Einschränkungen, wie sie der sogenannte Pakt ʿUmars festhält – keine neuen Kirchen, keine öffentlichen Prozessionen, Kleidervorschriften. Die Kopten haben das gelebt: Zeiten der Duldung, aber auch Zeiten schwerer Verfolgung, etwa unter dem Fatimiden-Kalifen al-Hakim, der Anfang des 11. Jahrhunderts zahlreiche Kirchen zerstören ließ. Das war ein Friede der Unterordnung, nicht der Gleichheit.`,
              sources: [
                { kind: 'fachliteratur', author: 'Sidney H. Griffith', work: 'The Church in the Shadow of the Mosque', year: '2008', quote: `Die dhimma gewährte Schutz und Religionsausübung, verband sie aber mit Tribut und sozialer Unterordnung.`, status: 'paraphrase' },
              ],
              followUps: [
                {
                  id: 'kopten-unter-byzanz',
                  objection: `Unter Byzanz wurden die Kopten verfolgt! Die Araber haben sie befreit. Ohne den Islam gäbe es keine Kopten mehr.`,
                  objectionBy: 'Mohammed Hijab',
                  answer: `Richtig ist: Die byzantinische Reichskirche hat die Kopten nach Chalcedon bedrängt, und manche Kopten mögen die Araber anfangs als Erleichterung erlebt haben – das gestehe ich zu. Aber unter islamischer Herrschaft wurde Ägypten über Jahrhunderte von einem christlichen zu einem mehrheitlich muslimischen Land – durch Steuerdruck, soziale Benachteiligung und Zeiten der Verfolgung. Der koptische Bischof Johannes von Nikiu beschreibt schon die Eroberung im 7. Jahrhundert als gewaltsam. Überleben ist nicht dasselbe wie Frieden.`,
                  voices: [
                    {
                      person: 'johannes-nikiu',
                      role: 'als Augenzeuge der arabischen Eroberung Ägyptens',
                      text: `Johannes, Bischof von Nikiu im Nildelta, verfasste gegen Ende des 7. Jahrhunderts eine Weltchronik, die nur in äthiopischer Übersetzung erhalten ist. Ihre letzten Kapitel schildern die arabische Eroberung Ägyptens aus der Sicht eines koptischen Zeitgenossen – mit Plünderungen, Tributlasten und Abfall vom Glauben, aber auch mit der Rolle der byzantinischen Herrschaft und innerchristlicher Zwietracht.`,
                      sources: [
                        { kind: 'koptisch', author: 'Johannes von Nikiu', work: 'Chronik (äthiopische Übersetzung; engl. R. H. Charles 1916)', ref: 'Schlusskapitel über die arabische Eroberung', year: 'Ende 7. Jh.', quote: `Bericht über die Eroberung Ägyptens durch die Araber, die auferlegten Abgaben und die Not der Bevölkerung.`, status: 'paraphrase' },
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
      id: 'vers-5-32',
      objection: `Der Koran sagt in 5:32: Wer einen Menschen tötet, ist, als ob er die ganze Menschheit getötet hätte. Wie kann man da den Islam gewalttätig nennen?`,
      objectionBy: 'verbreiteter Einwand',
      answer: `Lies den ganzen Vers: „Deswegen haben Wir den Kindern Israels vorgeschrieben" – und die Ausnahme: „es sei denn für einen Mord oder für Unheil (*fasād*) im Land". Der nächste Vers (5:33) schreibt für die, die „gegen Allah und Seinen Gesandten Krieg führen und Unheil stiften", Tötung, Kreuzigung oder wechselseitige Amputation von Hand und Fuß vor. Der Gedanke selbst steht übrigens schon in der Mischna (Sanhedrin 4,5).`,
      sources: [
        { kind: 'koran', work: 'Sure 5 (al-Ma\'ida)', ref: '5:32', quote: `Deswegen haben Wir den Kindern Israels vorgeschrieben: Wer eine Seele tötet, ohne dass es für eine Seele oder für Unheil im Land geschieht, so ist es, als ob er alle Menschen getötet hätte.`, original: `man qatala nafsan bi-ghayri nafsin aw fasādin fī l-arḍ`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/5/32' },
        { kind: 'koran', work: 'Sure 5 (al-Ma\'ida)', ref: '5:33', quote: `Der Lohn derer, die gegen Allah und Seinen Gesandten Krieg führen und im Land nach Unheil streben, ist, dass sie getötet oder gekreuzigt werden oder dass ihnen Hände und Füße wechselseitig abgehackt werden oder dass sie aus dem Land verbannt werden.`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/5/33' },
        { kind: 'juedisch', work: 'Mischna', ref: 'Sanhedrin 4,5', quote: `Wer eine Seele (aus Israel) vernichtet, dem rechnet es die Schrift an, als hätte er eine ganze Welt vernichtet.`, status: 'paraphrase' },
      ],
      followUps: [
        {
          id: 'nur-verbrecher-bestraft',
          objection: `Gerade das zeigt: Der Islam bestraft nur Verbrecher, die Unheil stiften – wie jeder Staat.`,
          objectionBy: 'Shabir Ally',
          answer: `„Unheil im Land" (*fasād fī l-arḍ*) wurde weit ausgelegt. Im Iran etwa wird der Vorwurf *mofsed-e fel-arz* auch gegen Regimekritiker verwendet. Und Kreuzigung und wechselseitige Amputation sind nicht das, was „jeder Staat" tut.`,
          followUps: [
            {
              id: 'missbrauch-durch-regime',
              objection: `Das ist Missbrauch durch Regime, nicht der Islam.`,
              objectionBy: 'Shabir Ally',
              answer: `Ich stimme zu, dass Regime missbrauchen. Aber die Strafen selbst stehen im Text (5:33) – Missbrauch braucht etwas, das man missbrauchen kann. Das Evangelium enthält dagegen kein Strafgesetzbuch, das die Kirche durchsetzen soll; Jesus sagt: „Mein Reich ist nicht von dieser Welt" (Joh 18,36).`,
              followUps: [
                {
                  id: 'tora-todesstrafe',
                  objection: `Auch die Tora kennt die Todesstrafe, und Christen haben im Mittelalter Ketzer verbrannt.`,
                  objectionBy: 'Mohammed Hijab',
                  answer: `Die Tora gab Israel als Theokratie ein bürgerliches Recht; Christus hat es erfüllt, und die Kirche hat nie den Auftrag erhalten, ein religiöses Strafrecht durchzusetzen. Wenn Christen Ketzer hinrichteten, verletzten sie das Gleichnis vom Unkraut, das man nicht ausreißen soll (Mt 13,29–30). Tertullian schrieb: „Es ist nicht Sache der Religion, Religion zu erzwingen."`,
                  sources: [
                    { kind: 'kirchenvater', author: 'Tertullian', work: 'An Scapula (Ad Scapulam)', ref: '2,2', year: 'um 212', quote: `Es ist nicht Sache der Religion, Religion zu erzwingen.`, original: `nec religionis est cogere religionem`, translation: 'eigene Übersetzung', status: 'verbatim' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'kein-zwang-2-256',
      objection: `„Kein Zwang im Glauben" (2:256) – der Islam garantiert Religionsfreiheit.`,
      objectionBy: 'Shabir Ally',
      answer: `Diesen Vers begrüße ich von Herzen. Aber Religionsfreiheit muss auch die Freiheit einschließen, den Islam zu verlassen – und Bukhari 6922 sagt: „Wer seine Religion wechselt, den tötet." Alle vier sunnitischen Rechtsschulen haben den männlichen Apostaten mit dem Tod bestraft. Man darf also nicht zum Eintritt gezwungen werden, aber nicht austreten.`,
      sources: [
        { kind: 'koran', work: 'Sure 2 (al-Baqara)', ref: '2:256', quote: `Es gibt keinen Zwang in der Religion.`, original: `lā ikrāha fī d-dīn`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/2/256' },
        { kind: 'hadith', work: 'Sahih al-Bukhari', ref: '6922', quote: `„Wer seine (islamische) Religion wechselt, den tötet."`, original: `man baddala dīnahu fa-qtulūhu`, translation: 'eigene Übersetzung', status: 'verbatim', url: 'https://sunnah.com/bukhari:6922' },
      ],
      followUps: [
        {
          id: 'apostasie-nur-verrat',
          objection: `Apostasie wurde nur bestraft, wenn sie mit Hochverrat verbunden war. Das sagen viele heutige Gelehrte.`,
          objectionBy: 'Jonathan A. C. Brown',
          answer: `Das ist eine Reformlesart, die ich begrüße – vertreten etwa von Taha Jabir al-Alwani oder Abdullah Saeed. Aber sie bricht mit dem klassischen Konsens, und Bukhari 6922 enthält keine Verratsklausel. Siehe dazu ausführlich den Claim „Die Scharia ist eine gerechte Ordnung".`,
          followUps: [
            {
              id: 'mehrheit-lehnt-gewalt-ab',
              objection: `Die allermeisten Muslime lehnen Gewalt und Zwang heute ab. Du beurteilst den Islam nach Extremisten.`,
              objectionBy: 'Hamza Yusuf',
              answer: `Viele Muslime sind friedlicher als das klassische Recht – Gott sei Dank, und das ist ein Lob für sie. Aber die klassische Position ist keine Randmeinung: In der Pew-Studie 2013 befürworteten in mehreren Ländern Mehrheiten derjenigen Muslime, die die Scharia als staatliches Recht wollen, die Todesstrafe für Apostasie (in Afghanistan etwa 79 %). Die Frage an die Texte bleibt.`,
              sources: [
                { kind: 'sonstiges', author: 'Pew Research Center', work: 'The World\'s Muslims: Religion, Politics and Society', year: '2013', quote: `In mehreren Ländern (u. a. Afghanistan, Ägypten, Jordanien, Pakistan) befürwortete eine Mehrheit der Muslime, die die Scharia als offizielles Recht wünschen, die Todesstrafe für den Abfall vom Islam; in Afghanistan rund 79 %.`, status: 'paraphrase', note: 'Prozentwerte beziehen sich nur auf Befragte, die die Scharia als staatliches Recht befürworten; Länderwerte vor Verwendung im Bericht prüfen.' },
              ],
              followUps: [
                {
                  id: 'umfragen-diktaturen',
                  objection: `Umfragen in Diktaturen sind verzerrt und sagen nichts über den Islam aus.`,
                  objectionBy: 'Shabir Ally',
                  answer: `Mag sein – dann schau auf die Gesetze: In mehreren Staaten kann Apostasie mit dem Tod oder schweren Strafen geahndet werden, und Blasphemiegesetze wie § 295-C des pakistanischen Strafgesetzbuchs sehen für die Schmähung des Propheten die Todesstrafe vor. Darum meine ehrliche Frage an dich: Würdest du öffentlich für das Recht eines Muslims eintreten, Christ zu werden – ohne Strafe und ohne Ächtung?`,
                  questionsBack: [
                    `Wenn ein Mitglied deiner Familie Christ würde – was sollte nach deiner Überzeugung mit ihm geschehen?`,
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'christen-mehr-kriege',
      objection: `Christen haben die meisten Kriege der Geschichte geführt – zwei Weltkriege, Kolonialismus, Kreuzzüge. Wie kannst du behaupten, das Christentum sei friedlicher?`,
      objectionBy: 'Mohammed Hijab',
      answer: `Man muss Anhänger und Gründer unterscheiden. Die Weltkriege waren nationalistisch und säkular motiviert, Nationalsozialismus und Kommunismus waren christentumsfeindlich. Entscheidend ist: Was lehrt der Gründer? Jesus verbot das Schwert für sein Reich (Mt 26,52). Mohammed führte nach Ibn Ishaq selbst 27 Feldzüge an. Christen, die Krieg führten, mussten sich gegen ihren Herrn rechtfertigen – Muslime nicht gegen ihren.`,
      detail: `Siehe auch Claim „Religion verursacht die meisten Kriege" (Topic „Religion und Gewalt").`,
      followUps: [
        {
          id: 'mohammed-nur-defensiv',
          objection: `Mohammed kämpfte nur defensiv – nachdem die Mekkaner ihn verfolgt, enteignet und vertrieben hatten.`,
          objectionBy: 'Shabir Ally',
          answer: `Die ersten Kämpfe in Medina begannen mit Überfällen auf mekkanische Karawanen (Nachla; Badr begann als Karawanenüberfall, vgl. 8:7). Später folgten der Angriff auf die jüdische Oase Khaybar und der Zug nach Tabuk gegen die Byzantiner. Und 9:29 befiehlt den Kampf gegen Schriftbesitzer, bis sie Tribut zahlen – ohne Bedingung eines Angriffs.`,
          followUps: [
            {
              id: 'tabuk-praeventiv',
              objection: `Die Byzantiner bedrohten Medina. Tabuk war ein Präventivschlag – Verteidigung.`,
              objectionBy: 'Jonathan A. C. Brown',
              answer: `Selbst wenn das der Anlass war: Der Wortlaut von 9:29 nennt theologische Kriterien – „die nicht an Allah glauben … und nicht der Religion der Wahrheit folgen" – und das Ziel ist der Tribut, nicht die Abwehr. Die klassischen Juristen lasen ihn deshalb als Grundlage für den Angriffsdschihad. Siehe Claim „Die Schwertverse gelten nur im historischen Kontext".`,
              followUps: [
                {
                  id: 'eroberungen-befreiung',
                  objection: `Die islamischen Eroberungen brachten Gerechtigkeit und befreiten die Völker von der Tyrannei Persiens und Byzanz'.`,
                  objectionBy: 'Mohammed Hijab',
                  answer: `Eroberung bleibt Eroberung, auch wenn die neue Herrschaft in manchem milder war als die alte. Wenn ein christliches Reich so argumentierte – „Wir haben euch befreit, darum ist unser Krieg gerecht" –, würdest du es zu Recht Imperialismus nennen. Derselbe Maßstab gilt für beide.`,
                  questionsBack: [
                    `Wenn Christen mit demselben Argument Länder erobert hätten – würdest du das „Frieden" nennen?`,
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
    `Was bedeutet das Wort *islām* wörtlich – nach den arabischen Lexika?`,
    `Wie lautet 5:33, der Vers unmittelbar nach 5:32?`,
    `Darf ein Muslim nach deiner Überzeugung frei Christ werden – ohne Strafe?`,
    `Was meint der Koran mit „bis sie den Tribut in Demut entrichten" (9:29)?`,
  ],
  avoid: [
    `Nicht behaupten, alle Muslime seien gewalttätig oder Terroristen. Das ist falsch, verletzend und widerspricht dem Gebot der Nächstenliebe.`,
    `Nicht die arabische Etymologie überdehnen („Islam heißt Unterwerfung, also ist er Tyrannei"). Hingabe an Gott ist für sich ein ehrenwerter Gedanke.`,
    `Nicht die christliche Geschichte beschönigen. Gestehe Kreuzzüge, Religionskriege und Ketzerverfolgung ein – und zeige, dass sie Christus widersprachen.`,
  ],
  concessions: [
    `Die große Mehrheit der Muslime lebt friedlich, und viele islamische Gelehrte verurteilen Terror klar.`,
    `Unter islamischer Herrschaft gab es auch Zeiten echter Duldung und Blüte, in denen Christen und Juden besser lebten als manche Minderheiten in Europa.`,
    `Christen haben in ihrer Geschichte Kriege im Namen der Religion geführt.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Nabeel Qureshi', work: 'Answering Jihad: A Better Way Forward', year: '2016', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Majid Khadduri', work: 'War and Peace in the Law of Islam', year: '1955', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Sidney H. Griffith', work: 'The Church in the Shadow of the Mosque', year: '2008', status: 'paraphrase' },
  ],
  difficulty: 1,
  tags: ['Islam', 'Frieden', 'Gewalt', 'Dhimma', 'Religionsfreiheit', 'Kopten'],
  related: [
    'islam-gewalt-scharia/dschihad-innerer-kampf',
    'islam-gewalt-scharia/schwertverse-kontext',
    'islam-gewalt-scharia/scharia-gerecht',
    'religion-gewalt/religion-verursacht-kriege',
    'religion-gewalt/kreuzzuege',
    'islam-mohammed/mohammed-wahrer-prophet',
  ],
};

export default claim;
