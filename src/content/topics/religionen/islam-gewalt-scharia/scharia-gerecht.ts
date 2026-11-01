import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'scharia-gerecht',
  title: `„Die Scharia ist eine gerechte Ordnung (Apostasie, Hudud-Strafen)."`,
  proponents: [
    { name: 'Jonathan A. C. Brown', role: 'Islamwissenschaftler, Georgetown University', work: 'Stoning and Hand Cutting: Understanding the Hudud and the Shariah in Islam (Yaqeen Institute, 2017)' },
    { name: 'Mohammed Hijab', role: 'Islamischer Apologet, London', work: 'Debatten über Scharia und westliche Moral' },
    { name: 'Hamza Andreas Tzortzis', role: 'Islamischer Apologet', work: 'The Divine Reality (2016)' },
    { name: 'Wael B. Hallaq', role: 'Rechtshistoriker, Columbia University', work: 'Sharīʿa: Theory, Practice, Transformations (2009); The Impossible State (2013)' },
  ],
  steelman: `„Scharia heißt ‚Weg zur Quelle' – sie umfasst Gebet, Almosen, Ethik, Familienrecht und nur zu einem kleinen Teil Strafrecht. Ihr Ziel ist der Schutz der fünf Grundgüter (*maqāṣid*): Religion, Leben, Verstand, Nachkommenschaft und Eigentum (al-Ghazali, asch-Schatibi). Die Hudud-Strafen sind von so hohen Beweisanforderungen umgeben – vier männliche Augenzeugen für Unzucht (24:4), ‚wehrt die Hudud-Strafen durch Zweifel ab' –, dass sie historisch fast nie vollstreckt wurden; sie wirken als moralische Abschreckung. ʿUmar setzte die Strafe für Diebstahl in einer Hungersnot aus. Apostasie wurde in einer Zeit, in der Religion und politische Zugehörigkeit eins waren, wie Hochverrat behandelt. Und der Westen? Massengefängnisse, Drogenepidemien, zerfallende Familien. Die Scharia bietet eine von Gott gegebene, gerechte Ordnung."`,
  biblical: {
    summary: `Die Bibel kennt im Alten Testament ein von Gott gegebenes Recht für Israel – einschließlich harter Strafen. Das Neue Testament versteht dieses Gesetz als „Zuchtmeister auf Christus" (Gal 3,24), das in Christus erfüllt ist (Mt 5,17). Die Kirche hat nie den Auftrag erhalten, ein religiöses Strafrecht durchzusetzen: „Mein Reich ist nicht von dieser Welt" (Joh 18,36). Die Gerechtigkeit Gottes und seine Barmherzigkeit treffen sich im Kreuz (Röm 3,25–26): Gott nimmt die Schuld ernst und vergibt zugleich. Wer gestohlen hat, soll nicht verstümmelt werden, sondern „arbeite und schaffe mit den Händen etwas Gutes, auf daß er habe zu geben dem Dürftigen" (Eph 4,28).`,
    detail: `**Das alttestamentliche Recht im Vergleich:** Die Tora kennt für Diebstahl keine Verstümmelung, sondern Wiedergutmachung (Ex 21,37–22,3). Bei einer Vergewaltigung „auf dem Feld" geht das Gesetz von der Unschuld der Frau aus: „Sie schrie, und niemand war da, der ihr half" (Dtn 22,25–27). Das „Auge um Auge" begrenzte Rache und wurde in der jüdischen Praxis in Geldersatz umgewandelt; Jesus hebt es für das persönliche Handeln auf (Mt 5,38–39).

**Die Ehebrecherin (Joh 8,1–11):** Fair ist zu sagen, dass dieser Abschnitt in den ältesten Handschriften (P66, P75, Sinaiticus, Vaticanus) fehlt. Die koptische Kirche liest ihn, und viele Forscher halten ihn für eine alte, echte Überlieferung. Das Argument hängt aber nicht an ihm: Mt 5,38–48 und Röm 12,17–21 genügen.`,
    sources: [
      { kind: 'bibel', work: 'Galater', ref: '3,24', quote: `Also ist das Gesetz unser Zuchtmeister gewesen auf Christum, daß wir durch den Glauben gerecht würden.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Epheser', ref: '4,28', quote: `Wer gestohlen hat, der stehle nicht mehr, sondern arbeite und schaffe mit den Händen etwas Gutes, auf daß er habe zu geben dem Dürftigen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '5. Mose (Deuteronomium)', ref: '22,25–27', quote: `Wenn ein Mann eine verlobte Dirne auf dem Felde überwältigt, so soll der Mann allein sterben; der Dirne soll man nichts tun, denn sie schrie, und niemand war da, der ihr half.`, translation: 'Luther 1912', status: 'paraphrase' },
    ],
  },
  church: {
    summary: `Die frühe Kirche verband Treue zum Glauben mit dem Grundsatz, dass Glaube nicht erzwungen werden kann. Tertullian schrieb an den Statthalter Scapula, es sei „nicht Sache der Religion, Religion zu erzwingen". Laktanz betonte, die Religion sei nicht durch Töten, sondern durch Sterben zu verteidigen. Die koptische Kirche kennt Buße und Kirchenzucht (Ausschluss von der Kommunion), aber keine leiblichen Strafen für Abfall vom Glauben. Ihre Haltung zu Konvertiten in beide Richtungen ist von Gebet und Werben geprägt, nicht von Zwang.`,
    sources: [
      { kind: 'kirchenvater', author: 'Tertullian', work: 'An Scapula (Ad Scapulam)', ref: '2,2', year: 'um 212', quote: `Es ist ein Menschenrecht und eine Sache natürlicher Freiheit, dass jeder verehrt, was er für richtig hält … Es ist nicht Sache der Religion, Religion zu erzwingen.`, original: `humani iuris et naturalis potestatis est unicuique quod putaverit colere … nec religionis est cogere religionem`, translation: 'eigene Übersetzung', status: 'verbatim' },
      { kind: 'kirchenvater', author: 'Laktanz', work: 'Göttliche Unterweisungen (Divinae Institutiones)', ref: 'V,19', year: 'um 310', quote: `Die Religion ist zu verteidigen nicht durch Töten, sondern durch Sterben; nicht durch Grausamkeit, sondern durch Geduld.`, original: `defendenda enim religio est non occidendo, sed moriendo; non saevitia, sed patientia`, translation: 'eigene Übersetzung', status: 'paraphrase', note: 'Lateinischer Wortlaut nach gängigen Ausgaben; vor wörtlicher Verwendung prüfen.' },
    ],
  },
  opposingView: {
    summary: `Die klassischen sunnitischen Rechtsschulen stimmten darin überein, dass der erwachsene männliche Apostat nach einer Frist zur Umkehr getötet wird (die Hanafiten verschonten Frauen und sperrten sie ein). Die koranischen Hudud-Strafen sind: wechselseitige Amputation, Kreuzigung oder Tötung für *ḥirāba* (5:33), Abtrennen der Hand für Diebstahl (5:38), hundert Peitschenhiebe für Unzucht (24:2), achtzig für falsche Bezichtigung (24:4). Die Steinigung verheirateter Ehebrecher beruht auf Hadithen (Bukhari 6829; Muslim 1695). Historiker wie Jonathan Brown zeigen, dass Hudud-Strafen vormodern selten vollstreckt wurden. Reformdenker wie Taha Jabir al-Alwani, Abdullah Saeed oder Tariq Ramadan (der 2005 ein Moratorium forderte) stellen Teile davon in Frage.`,
    detail: `**Beweisregeln:** Für Unzucht verlangt das klassische Recht vier männliche Augenzeugen des Aktes oder ein Geständnis; nach malikitischer Lehre gilt auch die Schwangerschaft einer unverheirateten Frau als Beweis – gestützt auf ʿUmars Rede in Bukhari 6829. Pakistans Hudood-Verordnungen (1979) führten dazu, dass vergewaltigte Frauen wegen Unzucht angeklagt wurden; 2006 wurde das Gesetz durch den *Protection of Women Act* reformiert.

**Ungleichheit:** Nach Bukhari 111 wird „ein Muslim nicht für einen Ungläubigen getötet"; das klassische Blutgeld für Frauen und Nichtmuslime war in den meisten Schulen niedriger.`,
    sources: [
      { kind: 'gegner', author: 'Jonathan A. C. Brown', work: 'Stoning and Hand Cutting: Understanding the Hudud and the Shariah in Islam', year: '2017', quote: `Die Hudud-Strafen waren von so hohen Beweishürden umgeben, dass sie in der vormodernen Praxis selten angewandt wurden; sie dienten vor allem als Ausdruck göttlicher Missbilligung.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Abdullah Saeed / Hassan Saeed', work: 'Freedom of Religion, Apostasy and Islam', year: '2004', quote: `Die Todesstrafe für Apostasie ist mit der koranischen Religionsfreiheit unvereinbar und sollte aufgegeben werden.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Taha Jabir al-Alwani', work: 'Apostasy in Islam: A Historical and Scriptural Analysis', year: '2011', quote: `Der Koran kennt keine weltliche Strafe für Apostasie; die klassischen Bestimmungen spiegeln politische Umstände.`, status: 'paraphrase' },
      { kind: 'hadith', work: 'Sahih al-Bukhari', ref: '111', quote: `In der Schrift ʿAlis steht: „Ein Muslim wird nicht für (die Tötung) eines Ungläubigen getötet."`, status: 'paraphrase', url: 'https://sunnah.com/bukhari:111' },
    ],
  },
  quickAnswer: `Die Scharia umfasst viel Gutes – Gebet, Almosen, Ethik –, und die hohen Beweisanforderungen haben Hudud-Strafen historisch selten gemacht. Aber das Prinzip bleibt: Der klassische Konsens aller Rechtsschulen bestraft den Austritt aus dem Islam mit dem Tod (Bukhari 6922), der Koran schreibt Amputation (5:38) und wechselseitige Amputation (5:33) vor, und vor dem Gesetz sind Muslim und Nichtmuslim, Mann und Frau nicht gleich (Bukhari 111). Gerechtigkeit, die den Glauben erzwingt und Menschen ungleich wiegt, ist nicht die Gerechtigkeit des Gottes, der „die Person nicht ansieht" (Apg 10,34).`,
  keyPoints: [
    `**Fair anerkennen:** Scharia ist mehr als Strafrecht; die Beweisregeln waren hoch; die Praxis war vormodern oft milder als die Theorie.`,
    `**Apostasie:** Bukhari 6922 („Wer seine Religion wechselt, den tötet") und der Konsens der vier Schulen – keine Glaubensfreiheit ohne Austrittsrecht.`,
    `**Unumkehrbare Körperstrafen:** 5:33; 5:38; 24:2 und die Steinigung (Bukhari 6829) – Justizirrtümer lassen sich nicht korrigieren.`,
    `**Opfer werden zu Angeklagten:** Schwangerschaft als Beweis für Unzucht (ʿUmar in Bukhari 6829) – mit fatalen Folgen für Vergewaltigungsopfer.`,
    `**Ungleichheit vor dem Gesetz:** Muslim und Nichtmuslim (Bukhari 111), Mann und Frau (Zeugenaussage, Blutgeld, Erbe).`,
    `**Christliches Gegenbild:** Gesetz als Zuchtmeister (Gal 3,24), Erfüllung in Christus, Wiedergutmachung statt Verstümmelung (Eph 4,28), keine Glaubenserzwingung (Tertullian).`,
  ],
  voices: [
    {
      person: 'tertullian',
      role: 'als frühester Verteidiger der Religionsfreiheit',
      text: `Tertullian schrieb um 212 an einen römischen Statthalter, der Christen verfolgte: Es sei ein Recht des Menschen und eine Sache der natürlichen Freiheit, zu verehren, was er für richtig hält; die Religion des einen schade dem anderen nicht, und erzwungene Verehrung wolle kein Gott. Damit formulierte ein Christ als einer der Ersten das Prinzip der Religionsfreiheit – nicht als Mehrheit, sondern als verfolgte Minderheit.`,
      sources: [
        { kind: 'kirchenvater', author: 'Tertullian', work: 'An Scapula (Ad Scapulam)', ref: '2,2', year: 'um 212', quote: `Es ist nicht Sache der Religion, Religion zu erzwingen.`, original: `nec religionis est cogere religionem`, translation: 'eigene Übersetzung', status: 'verbatim' },
      ],
    },
    {
      person: 'qureshi',
      role: 'als Konvertit, der die Folgen der Apostasie-Lehre erlebte',
      text: `Qureshi beschreibt den tiefen Schmerz seiner geliebten Familie, als er Christ wurde – nicht Gewalt, sondern das Gefühl, dass ein Kind die Familie und Gott verraten habe. Er erklärt, dass dieser Schmerz in einer Lehre wurzelt, die den Abfall als schwerste Sünde und klassisch als todeswürdiges Verbrechen versteht. In vielen Ländern zahlen Konvertiten einen weit höheren Preis. Er spricht davon ohne Bitterkeit, mit Liebe zu seinen Eltern.`,
      sources: [
        { kind: 'fachliteratur', author: 'Nabeel Qureshi', work: 'Seeking Allah, Finding Jesus', year: '2014', quote: `Bericht über die Reaktion seiner Familie auf seine Konversion und die Bedeutung der Apostasie im Islam.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'ibn-al-assal',
      role: 'als koptischer Kirchenrechtler',
      text: `Al-Safi ibn al-ʿAssal schuf im 13. Jahrhundert das große Kirchenrechtsbuch (Nomokanon) der koptischen Kirche – unter islamischer Herrschaft und in arabischer Sprache. Es regelt Ehe, Erbe, Kirchenzucht und Buße, aber es kennt keine leiblichen Strafen für Glaubensabfall. Die Kirchenzucht der Kopten zielt auf Umkehr und Wiederaufnahme, nicht auf Vergeltung.`,
    },
    {
      person: 'paulus',
      role: 'als Apostel, der die Erfüllung des Gesetzes in Christus lehrt',
      text: `Paulus, selbst ein eifriger Gesetzeslehrer, der Christen verfolgt hatte, lehrt nach seiner Bekehrung: Das Gesetz ist heilig und gut, aber es kann nicht lebendig machen; es war ein Zuchtmeister bis Christus. Die Gerechtigkeit Gottes wird offenbar im Kreuz, wo Gott „gerecht ist und gerecht macht" (Röm 3,26). Christen sollen Böses nicht mit Bösem vergelten, sondern das Böse mit Gutem überwinden (Röm 12,21).`,
      sources: [
        { kind: 'bibel', work: 'Römer', ref: '3,26', quote: `… auf daß er allein gerecht sei und gerecht mache den, der da ist des Glaubens an Jesum.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
    },
  ],
  dialog: [
    {
      id: 'hudud-kaum-angewandt',
      objection: `Die Hudud werden fast nie angewendet. Vier männliche Augenzeugen für Unzucht – das ist praktisch unmöglich. Die Strafen sind eine moralische Abschreckung, keine Praxis.`,
      objectionBy: 'Jonathan A. C. Brown',
      answer: `Ich gestehe zu: Die Beweisregeln waren hoch, und die vormoderne Praxis war oft milder als die Theorie. Aber erstens bleiben die Strafen als ewiges Gottesrecht bestehen. Zweitens gibt es den Weg des Geständnisses: Maʿiz und die Frau aus dem Stamm Ghamid wurden auf eigenes Geständnis gesteinigt (Muslim 1695). Drittens galt nach malikitischer Lehre die Schwangerschaft einer Unverheirateten als Beweis.`,
      sources: [
        { kind: 'hadith', work: 'Sahih Muslim', ref: '1695', quote: `Bericht über die Frau aus dem Stamm Ghamid, die Unzucht gestand, nach der Geburt und dem Abstillen ihres Kindes wiederkam und gesteinigt wurde.`, status: 'paraphrase' },
      ],
      followUps: [
        {
          id: 'pakistan-verzerrung',
          objection: `Die Missstände in Pakistan unter Zia ul-Haq waren eine Verzerrung, nicht die klassische Scharia.`,
          objectionBy: 'Jonathan A. C. Brown',
          answer: `Der Grundsatz stammt aber nicht von Zia ul-Haq, sondern von ʿUmar selbst: In Bukhari 6829 sagt er, die Steinigung sei Pflicht für den Verheirateten, „wenn der Beweis erbracht ist oder eine Schwangerschaft vorliegt oder ein Geständnis". Die malikitische Schule hat daraus Recht gemacht.`,
          sources: [
            { kind: 'hadith', work: 'Sahih al-Bukhari', ref: '6829', quote: `ʿUmar: Die Steinigung ist im Buch Allahs Pflicht für den Verheirateten, der Unzucht begeht, wenn der Beweis erbracht ist oder eine Schwangerschaft vorliegt oder ein Geständnis.`, status: 'paraphrase', url: 'https://sunnah.com/bukhari:6829' },
          ],
          followUps: [
            {
              id: 'vergewaltigung-zweifel',
              objection: `Bei Vergewaltigung greift der Grundsatz des Zweifels (*shubha*) – die Frau wird nicht bestraft.`,
              objectionBy: 'klassische Juristen',
              answer: `Viele Juristen sagen das, das gestehe ich zu. Aber die Last liegt bei der Frau: Sie muss den Zwang glaubhaft machen, während der Täter nur durch vier männliche Zeugen oder ein Geständnis überführt werden kann. Ein System, in dem das Opfer mehr riskiert als der Täter, ist nicht gerecht.`,
              followUps: [
                {
                  id: 'dna-beweise',
                  objection: `Moderne Gelehrte akzeptieren heute DNA-Beweise bei Vergewaltigung. Die Scharia kann sich anpassen.`,
                  objectionBy: 'reformorientierte Juristen',
                  answer: `Das begrüße ich. Aber es zeigt: Gerechtigkeit verlangt hier, über das klassische System hinauszugehen. Bemerkenswert ist, dass schon die Tora im Fall der Vergewaltigung „auf dem Feld" ausdrücklich von der Unschuld der Frau ausging: „Sie schrie, und niemand war da, der ihr half" (Dtn 22,27).`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'apostasie-hochverrat',
      objection: `Apostasie war im frühen Islam Hochverrat. Wer die Religion verließ, lief zum Feind über. Darum die Todesstrafe – wie bei jedem Staat im Krieg.`,
      objectionBy: 'Shabir Ally',
      answer: `Bukhari 6922 enthält keine Verratsklausel: „Wer seine Religion wechselt, den tötet." Der Kontext ist sogar, dass ʿAli Abtrünnige verbrennen ließ und Ibn ʿAbbas nur die Verbrennung, nicht die Tötung tadelte. Die klassischen Schulen haben den Abfall *als solchen* bestraft – mit einer Frist von meist drei Tagen zur Umkehr.`,
      sources: [
        { kind: 'hadith', work: 'Sahih al-Bukhari', ref: '6922', quote: `ʿAli ließ einige Zanadiqa verbrennen. Ibn ʿAbbas sagte: Ich hätte sie nicht verbrannt … sondern getötet, nach dem Wort des Gesandten Allahs: „Wer seine (islamische) Religion wechselt, den tötet."`, original: `man baddala dīnahu fa-qtulūhu`, status: 'paraphrase', url: 'https://sunnah.com/bukhari:6922' },
      ],
      followUps: [
        {
          id: 'bukhari-6878-gemeinschaft',
          objection: `Bukhari 6878 spricht von dem, der „seine Religion verlässt und sich von der Gemeinschaft trennt" – also Rebellion.`,
          objectionBy: 'Jonathan A. C. Brown',
          answer: `Die klassischen Kommentatoren verstanden „sich von der Gemeinschaft trennen" als Beschreibung des Abfalls selbst, nicht als zusätzliche Bedingung. Selbst wenn man es als Rebellion liest – der klassische Konsens tat es nicht, und Bukhari 6922 kennt die Einschränkung nicht.`,
          followUps: [
            {
              id: 'koran-keine-strafe',
              objection: `Der Koran nennt für Apostasie keine weltliche Strafe (2:217; 4:137). Die Todesstrafe ist nicht koranisch.`,
              objectionBy: 'Mustafa Akyol',
              answer: `Das ist richtig und ein starkes Argument für Reformer – das gestehe ich zu. 4:137 erwähnt sogar Menschen, die glaubten, ungläubig wurden, wieder glaubten – sie lebten also weiter. Aber genau hier liegt das Hadith-Dilemma: Wenn die Hadithe verbindlich sind, gilt Bukhari 6922; wenn nicht, verliert das islamische Recht insgesamt seine Grundlage.`,
              detail: `Siehe Claim „Die Hadithe sind durch die Isnad-Wissenschaft zuverlässig gesichert".`,
              followUps: [
                {
                  id: 'reformgelehrte',
                  objection: `Ich folge den Reformgelehrten wie Taha Jabir al-Alwani. Für mich gibt es keine Strafe für Apostasie.`,
                  objectionBy: 'reformorientierte Muslime',
                  answer: `Das freut mich aufrichtig. Dann eine ehrliche Frage, ohne Falle: Würdest du öffentlich das Recht eines Muslims verteidigen, Christ zu werden – und würdest du einen Konvertiten in deiner Familie weiter lieben und aufnehmen? Wenn ja, bist du in dieser Frage näher am Evangelium als am klassischen Recht.`,
                  questionsBack: [
                    `Wie würde deine Gemeinde reagieren, wenn du diese Meinung in der Freitagspredigt verträtest?`,
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'maqasid-fuenf-gueter',
      objection: `Die Scharia schützt die fünf Grundgüter: Religion, Leben, Verstand, Nachkommenschaft und Eigentum. Was kann ungerecht daran sein?`,
      objectionBy: 'Hamza Andreas Tzortzis',
      answer: `Gute Ziele – aber „Schutz der Religion" bedeutete klassisch gerade die Bestrafung von Apostasie und Blasphemie: Schutz des Islam, nicht Freiheit der Religion. Al-Ghazali selbst begründete mit diesem Gut die Bekämpfung derer, die zum Unglauben einladen. Für Christen und andere bedeutete es die *dhimma* – Schutz unter Unterordnung.`,
      followUps: [
        {
          id: 'jede-gesellschaft-schuetzt',
          objection: `Jede Gesellschaft schützt ihre Grundwerte durch Strafrecht. Auch der Westen bestraft Angriffe auf seine Verfassung.`,
          objectionBy: 'Mohammed Hijab',
          answer: `Glaube lässt sich aber nicht durch Zwang schützen – erzwungener Glaube ist Heuchelei, und der Koran selbst verurteilt die Heuchler (*munāfiqūn*). Gott will freie Liebe: Jesus klagt über Jerusalem: „Wie oft habe ich deine Kinder versammeln wollen … und ihr habt nicht gewollt!" (Mt 23,37) – und er zwang sie nicht. Tertullian: „Es ist nicht Sache der Religion, Religion zu erzwingen."`,
          followUps: [
            {
              id: 'westen-moralisch-bankrott',
              objection: `Der säkulare Westen ist moralisch bankrott: Drogen, Pornografie, zerfallende Familien. Die Scharia bietet Ordnung und Sicherheit.`,
              objectionBy: 'Mohammed Hijab',
              answer: `Viele dieser Probleme sind real, und ich teile deine Sorge. Aber die Antwort auf Dekadenz ist nicht Zwang, sondern die Umkehr der Herzen. Und die Würde jedes Menschen, auf der Menschenrechte beruhen, stammt aus dem biblischen Gedanken der Gottebenbildlichkeit (Gen 1,27) – nicht aus dem Säkularismus.`,
              followUps: [
                {
                  id: 'menschenrechte-saekular',
                  objection: `Menschenrechte sind ein westlich-säkulares Konstrukt der Aufklärung, nicht christlich. Wir Muslime haben die Kairoer Erklärung.`,
                  objectionBy: 'Hamza Andreas Tzortzis',
                  answer: `Historiker wie Brian Tierney und – als Nichtchrist – Tom Holland haben gezeigt, wie tief die Idee gleicher Menschenwürde im Christentum wurzelt. Und die Kairoer Erklärung (1990) stellt alle Rechte unter den Vorbehalt der Scharia (Art. 24 und 25). Damit stehen Religionsfreiheit und Gleichheit unter dem Vorbehalt genau der Regeln, über die wir gerade sprechen.`,
                  sources: [
                    { kind: 'fachliteratur', author: 'Tom Holland', work: 'Dominion: The Making of the Western Mind', year: '2019', quote: `Die westlichen Vorstellungen von Menschenwürde, Gleichheit und Mitgefühl mit den Schwachen sind zutiefst christlichen Ursprungs, auch dort, wo sie säkular auftreten.`, status: 'paraphrase', note: 'Holland schrieb das Buch nicht als gläubiger Christ.' },
                    { kind: 'fachliteratur', author: 'Brian Tierney', work: 'The Idea of Natural Rights', year: '1997', quote: `Die Idee subjektiver Naturrechte entstand im mittelalterlichen Kirchenrecht des 12. Jahrhunderts.`, status: 'paraphrase' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'amputation-humaner',
      objection: `Die Amputation für Diebstahl ist humaner als jahrelange Haft, die Familien zerstört. Und sie schreckt wirksam ab – in Saudi-Arabien gibt es kaum Diebstahl.`,
      objectionBy: 'verbreiteter Einwand',
      answer: `Eine Amputation ist unumkehrbar: Ein Justizirrtum lässt sich nie wiedergutmachen, und die Armen trifft es am härtesten. Das biblische Recht sah für Diebstahl Wiedergutmachung vor (Ex 21,37), nicht Verstümmelung, und das Neue Testament zielt auf Umkehr: „Wer gestohlen hat, der stehle nicht mehr, sondern arbeite" (Eph 4,28). Zachäus erstattete vierfach zurück (Lk 19,8) – Wiederherstellung statt Vergeltung.`,
      sources: [
        { kind: 'koran', work: 'Sure 5 (al-Ma\'ida)', ref: '5:38', quote: `Dem Dieb und der Diebin trennt ihre Hände ab als Lohn für das, was sie begangen haben, und als abschreckende Strafe von Allah.`, original: `jazāʾan bi-mā kasabā nakālan mina llāh`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/5/38' },
      ],
      followUps: [
        {
          id: 'umar-hungersnot',
          objection: `ʿUmar setzte die Strafe in einer Hungersnot aus. Die Scharia ist barmherzig und kennt viele Ausnahmen.`,
          objectionBy: 'Jonathan A. C. Brown',
          answer: `Das zeigt echte Barmherzigkeit der Juristen, das gestehe ich zu. Aber eine Aussetzung bestätigt die Regel: Der Koran nennt die Amputation ausdrücklich eine „abschreckende Strafe von Allah" (5:38). Barmherzigkeit, die nur in Ausnahmefällen die Regel aufhebt, ist etwas anderes als eine Ordnung, die von Grund auf auf Wiederherstellung zielt.`,
          followUps: [
            {
              id: 'auge-um-auge-bibel',
              objection: `Die Bibel hat doch auch „Auge um Auge, Zahn um Zahn" (Ex 21,24).`,
              objectionBy: 'Zakir Naik',
              answer: `Das *ius talionis* begrenzte im alten Orient die Rache auf das Maß des Schadens und wurde in der jüdischen Praxis in Geldersatz umgewandelt. Jesus hebt es für seine Jünger ausdrücklich auf: „Ihr habt gehört, daß da gesagt ist: ‚Auge um Auge, Zahn um Zahn.' Ich aber sage euch …" (Mt 5,38–39). Der Koran übernimmt die Wiedervergeltung dagegen als bleibendes Recht (2:178; 5:45).`,
              followUps: [
                {
                  id: 'vergebung-5-45',
                  objection: `5:45 sagt auch: Wer darauf verzichtet, dem ist es eine Sühne. Die Scharia ermutigt zur Vergebung und zum Blutgeld.`,
                  objectionBy: 'Shabir Ally',
                  answer: `Ein schöner Zug, den ich anerkenne. Aber es bleibt die Ungleichheit: Nach Bukhari 111 wird ein Muslim nicht für die Tötung eines Ungläubigen getötet, und das klassische Blutgeld für Frauen und Nichtmuslime war in den meisten Schulen niedriger. Die Bibel sagt: „Gott sieht die Person nicht an" (Apg 10,34). Gerechtigkeit muss vor Gott für alle gleich sein.`,
                  sources: [
                    { kind: 'bibel', work: 'Apostelgeschichte', ref: '10,34', quote: `Nun erfahre ich mit der Wahrheit, daß Gott die Person nicht ansieht.`, translation: 'Luther 1912', status: 'verbatim' },
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
    `Darf ein Muslim nach der Scharia, wie du sie verstehst, Christ werden – ohne irgendeine Strafe?`,
    `Ist das Leben eines Christen vor dem Scharia-Gericht genauso viel wert wie das eines Muslims?`,
    `Was geschieht nach klassischem Recht mit einer unverheirateten schwangeren Frau, die eine Vergewaltigung nicht beweisen kann?`,
    `Wie korrigiert man einen Justizirrtum nach einer Amputation?`,
  ],
  avoid: [
    `Nicht behaupten, in islamischen Ländern würden täglich Hände abgehackt. Die Praxis ist von Land zu Land sehr verschieden und oft selten.`,
    `Nicht die alttestamentlichen Strafen verschweigen. Erkläre ehrlich, wie Christen das Gesetz in Christus erfüllt sehen.`,
    `Nicht die westliche Gesellschaft als christliches Ideal hinstellen. Ihre Probleme sind real – und oft gerade Folge der Abkehr vom Glauben.`,
  ],
  concessions: [
    `Die Scharia umfasst weit mehr als Strafrecht, und vieles darin (Almosen, Schutz der Waisen, Ethik des Handels) ist ehrenwert.`,
    `Die hohen Beweisanforderungen und der Grundsatz, Hudud-Strafen durch Zweifel abzuwenden, haben ihre Anwendung in der vormodernen Praxis stark eingeschränkt.`,
    `Der Koran selbst nennt keine weltliche Strafe für Apostasie; viele heutige muslimische Gelehrte lehnen die Todesstrafe dafür ab.`,
  ],
  furtherReading: [
    { kind: 'gegner', author: 'Jonathan A. C. Brown', work: 'Stoning and Hand Cutting: Understanding the Hudud and the Shariah in Islam', year: '2017', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Abdullah Saeed / Hassan Saeed', work: 'Freedom of Religion, Apostasy and Islam', year: '2004', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Rudolph Peters', work: 'Crime and Punishment in Islamic Law', year: '2005', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Tom Holland', work: 'Dominion: The Making of the Western Mind', year: '2019', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Islam', 'Scharia', 'Apostasie', 'Hudud', 'Religionsfreiheit', 'Strafrecht'],
  related: [
    'islam-gewalt-scharia/islam-heisst-frieden',
    'islam-hadith-sira/isnad-wissenschaftlich-gesichert',
    'islam-hadith-sira/quranisten-nur-koran',
    'at-ethik/grausame-gesetze',
    'islam-frauen-familie/islam-befreite-frau',
    'moral-und-gott/gut-ohne-gott',
  ],
};

export default claim;
