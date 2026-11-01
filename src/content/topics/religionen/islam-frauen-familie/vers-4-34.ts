import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'vers-4-34',
  title: `„Sure 4:34 erlaubt kein Schlagen der Frau."`,
  proponents: [
    { name: 'Laleh Bakhtiar', role: 'Islamische Übersetzerin (1938–2020)', work: 'The Sublime Quran (2007) – übersetzt *iḍribūhunna* mit „geht von ihnen weg"' },
    { name: 'Abdulhamid AbuSulayman', role: 'Saudischer Gelehrter (1936–2021)', work: 'Marital Discord: Recapturing the Full Islamic Spirit of Human Dignity (2003)' },
    { name: 'Jonathan A. C. Brown', role: 'Islamwissenschaftler, Georgetown University', work: 'Misquoting Muhammad (2014), Kapitel zur Frage des Schlagens' },
    { name: 'Edip Yüksel', role: 'Quranistischer Übersetzer', work: 'Quran: A Reformist Translation (2007)' },
  ],
  steelman: `„Das arabische Verb *ḍaraba* hat Dutzende Bedeutungen: reisen (*ḍaraba fī l-arḍ*, 4:101), ein Gleichnis prägen (*ḍaraba mathalan*), trennen, abwenden. Laleh Bakhtiar und Abdulhamid AbuSulayman haben gezeigt, dass *iḍribūhunna* in 4:34 als ‚trennt euch von ihnen' gelesen werden kann. Der Prophet selbst hat nie eine Frau geschlagen – Aischa bezeugt: ‚Der Gesandte Allahs schlug niemals jemanden mit seiner Hand, weder eine Frau noch einen Diener' (Muslim 2328). Er sagte über Männer, die ihre Frauen schlagen: ‚Diese sind nicht die Besten unter euch' (Abu Dawud 2146), und: ‚Der Beste unter euch ist der, der am besten zu seiner Familie ist.' Selbst die klassischen Gelehrten, die *ḍaraba* als ‚schlagen' verstanden, beschränkten es auf eine symbolische Berührung mit einem Zahnhölzchen (*miswāk*). Der Vers schützt also die Frau, statt Gewalt zu erlauben."`,
  biblical: {
    summary: `Das Neue Testament gibt dem Mann keinerlei Züchtigungsrecht über seine Frau. Es fordert: „Ihr Männer, liebet eure Weiber, gleichwie Christus auch geliebt hat die Gemeinde und hat sich selbst für sie gegeben" (Eph 5,25). „Niemand hat jemals sein eigen Fleisch gehasst, sondern er nährt es und pflegt es" (Eph 5,29). „Ihr Männer, liebet eure Weiber und seid nicht bitter gegen sie" (Kol 3,19). Wer seine Frau nicht ehrt, dessen Gebete werden „verhindert" (1 Petr 3,7). Das Haupt-Sein des Mannes (Eph 5,23) ist am Bild Christi gemessen, der seinen Jüngern die Füße wusch (Joh 13,14–15) – Dienst, nicht Strafgewalt.`,
    detail: `**Ehrlich zugestanden:** Christliche Männer haben ihre Frauen geschlagen, und manche Rechtsordnungen christlicher Länder duldeten lange eine „maßvolle Züchtigung". Aber dafür gab es keinen neutestamentlichen Text – im Gegenteil: Christliche Reformer konnten sich auf Eph 5 und 1 Petr 3 berufen, um diese Praxis zu überwinden.`,
    sources: [
      { kind: 'bibel', work: 'Epheser', ref: '5,25', quote: `Ihr Männer, liebet eure Weiber, gleichwie Christus auch geliebt hat die Gemeinde und hat sich selbst für sie gegeben.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Epheser', ref: '5,28–29', quote: `So sollen auch die Männer ihre Weiber lieben wie ihre eigenen Leiber. Wer sein Weib liebt, der liebt sich selbst. Denn niemand hat jemals sein eigen Fleisch gehaßt, sondern er nährt es und pflegt es.`, translation: 'Luther 1912', status: 'paraphrase' },
      { kind: 'bibel', work: 'Kolosser', ref: '3,19', quote: `Ihr Männer, liebet eure Weiber und seid nicht bitter gegen sie.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Petrus', ref: '3,7', quote: `… gebet dem weiblichen als dem schwächeren Werkzeug seine Ehre, als die auch Miterben sind der Gnade des Lebens, auf daß eure Gebete nicht verhindert werden.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die orthodoxe Kirche versteht die Ehe als „Hauskirche", in der Mann und Frau einander in Christus dienen. Chrysostomus predigt zu Eph 5, der Mann solle seine Frau so lieben, dass er für sie zu sterben bereit sei; er solle sie nicht wie eine Sklavin behandeln und nicht durch Furcht und Drohungen, sondern durch Zuneigung gewinnen. Im koptischen Ritus der Eheschließung wird der Bräutigam ermahnt, seine Braut zu lieben, zu ehren und für sie zu sorgen, wie Christus für die Kirche sorgt. Gewalt gegen die Ehefrau ist nach kirchlicher Lehre schwere Sünde.`,
    sources: [
      { kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Homilien zum Epheserbrief', ref: 'Hom. 20 (zu Eph 5,22–33)', year: 'um 390', quote: `Der Mann soll seine Frau lieben, wie Christus die Kirche geliebt hat, auch wenn er dafür sterben müsste; er soll sie nicht wie eine Sklavin behandeln und sie nicht durch Furcht und Drohungen, sondern durch Liebe, Güte und große Achtung an sich binden.`, status: 'paraphrase' },
      { kind: 'liturgie', work: 'Koptischer Ritus der Eheschließung (Krönung)', quote: `Ermahnung an den Bräutigam, seine Braut zu lieben, zu ehren und für sie zu sorgen, wie Christus die Kirche liebt.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Die überwältigende Mehrheit der klassischen Koranausleger (at-Tabari, az-Zamachschari, ar-Razi, al-Qurtubi, Ibn Kathir) verstand *wa-ḍribūhunna* in 4:34 als „und schlagt sie" – als letzten von drei Schritten bei *nushūz* (Widersetzlichkeit) der Ehefrau, nach Ermahnung und Meiden im Ehebett. Sie begrenzten das Schlagen stark: nicht ins Gesicht, „nicht heftig" (*ghayr mubarriḥ*), nach einer Ibn ʿAbbas zugeschriebenen Erklärung etwa mit einem Zahnhölzchen. Moderne Deutungen („trennt euch", „geht weg") vertreten u. a. Laleh Bakhtiar (2007) und Abdulhamid AbuSulayman (2003). Muslimische Feministinnen wie Amina Wadud lehnen die wörtliche Anwendung ab; Kecia Ali hält fest, dass die exegetische Tradition eindeutig ist.`,
    detail: `**Hadith-Belege in der Debatte:**
- Muslim 1218 (Abschiedspredigt nach Jabir): Wenn die Frauen jemanden, den ihr nicht mögt, auf euer Lager lassen, „so schlagt sie, aber nicht heftig".
- Abu Dawud 2146 (von al-Albani als sahih eingestuft): Der Prophet verbot zunächst, „die Dienerinnen Allahs" zu schlagen; nach ʿUmars Klage erlaubte er es; als viele Frauen sich beschwerten, sagte er: „Diese (Männer) sind nicht die Besten unter euch."
- Abu Dawud 2147: „Ein Mann wird nicht gefragt, warum er seine Frau geschlagen hat" – al-Albani: schwach; Zubair ʿAli Zai: ḥasan.
- Muslim 2328: Der Prophet schlug niemals eine Frau oder einen Diener mit seiner Hand.
- Muslim 974: Aischa berichtet, er habe sie in einer Nacht „vor die Brust gestoßen, was mir Schmerz bereitete" (*lahada*); muslimische Ausleger deuten das als Stoß, nicht als Schlag.
- Bukhari 5825: Eine Frau mit grünem Fleck auf der Haut beklagt sich; Aischa: „Ich habe keine Frau so leiden sehen wie die gläubigen Frauen."`,
    sources: [
      { kind: 'koran', work: 'Sure 4 (an-Nisa\')', ref: '4:34', quote: `Die Männer stehen den Frauen vor, weil Allah die einen vor den anderen ausgezeichnet hat und weil sie von ihrem Vermögen ausgeben … Und diejenigen, deren Widersetzlichkeit ihr befürchtet – ermahnt sie, meidet sie im Ehebett und schlagt sie. Wenn sie euch dann gehorchen, so sucht keinen Weg gegen sie.`, original: `fa-ʿiẓūhunna wa-hjurūhunna fī l-maḍājiʿi wa-ḍribūhunna fa-in aṭaʿnakum fa-lā tabghū ʿalayhinna sabīlā`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/4/34' },
      { kind: 'gegner', author: 'Laleh Bakhtiar', work: 'The Sublime Quran', year: '2007', quote: `Übersetzt iḍribūhunna mit „und geht von ihnen weg".`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Kecia Ali', work: 'Sexual Ethics and Islam', year: '2006', quote: `Die vormoderne Exegese verstand 4:34 einhellig als Erlaubnis, die Ehefrau – wenn auch begrenzt – zu schlagen; neue Übersetzungen können diese Tradition nicht einfach ungeschehen machen.`, status: 'paraphrase', note: 'Kecia Ali ist selbst Muslimin.' },
    ],
  },
  quickAnswer: `Ich freue mich über jeden Muslim, der Gewalt gegen Frauen ablehnt. Aber *ḍaraba* mit einer Person als direktem Objekt heißt „schlagen", und so hat es die gesamte klassische Auslegung verstanden. Der Prophet selbst erklärte den Vers in der Abschiedspredigt: „Schlagt sie, aber nicht heftig" (Muslim 1218), und er erlaubte es nach ʿUmars Klage (Abu Dawud 2146) – auch wenn er sagte, solche Männer seien „nicht die Besten". Das Neue Testament kennt kein Züchtigungsrecht des Mannes, sondern nur eines: „Liebet eure Weiber, gleichwie Christus die Gemeinde geliebt hat" (Eph 5,25).`,
  keyPoints: [
    `**Grammatik:** *ḍaraba* mit Personenobjekt = „schlagen"; „reisen" braucht *fī l-arḍ*, „ein Gleichnis prägen" braucht *mathalan*, „trennen" braucht *bayna*.`,
    `**Struktur des Verses:** Der zweite Schritt ist schon die Trennung („meidet sie im Ehebett"); „wenn sie euch dann gehorchen" zeigt Zwangsmittel.`,
    `**Die Auslegung des Propheten:** Muslim 1218 („nicht heftig"), Abu Dawud 2146 (Erlaubnis nach ʿUmars Klage).`,
    `**Fair anerkennen:** Muslim 2328 (er schlug nie eine Frau), Abu Dawud 2146 („nicht die Besten"), klassische Begrenzungen (nicht ins Gesicht, symbolisch).`,
    `**Asymmetrie:** Bei Widersetzlichkeit des Mannes (4:128) soll die Frau Versöhnung suchen – sie erhält kein Recht, ihn zu „ermahnen, zu meiden und zu schlagen".`,
    `**Christliche Ehe:** Haupt-Sein als Selbsthingabe (Eph 5,25), keine Bitterkeit (Kol 3,19), Ehre als Miterbin (1 Petr 3,7) – kein Züchtigungsrecht.`,
  ],
  argument: {
    name: 'Das Argument aus Sprache und Prophetenauslegung',
    summary: 'Wer 4:34 neu übersetzt, muss nicht nur die Grammatik, sondern auch die Auslegung des Propheten selbst korrigieren.',
    premises: [
      {
        text: `P1: Das Verb *ḍaraba* mit einer Person als direktem Objekt bedeutet im Arabischen „schlagen"; die anderen Bedeutungen erfordern andere Konstruktionen.`,
        support: `*ḍaraba fī l-arḍ* (reisen, 4:101), *ḍaraba mathalan* (ein Gleichnis prägen), *ḍaraba bayna* (trennen). In 4:34 steht *wa-ḍribūhunna* mit dem Pronomen „sie" als Objekt.`,
      },
      {
        text: `P2: Der Prophet selbst hat die Erlaubnis, die Ehefrau (leicht) zu schlagen, ausgesprochen und erläutert.`,
        support: `Muslim 1218 (Abschiedspredigt) und Abu Dawud 2146 (sahih nach al-Albani).`,
        sources: [
          { kind: 'hadith', work: 'Sahih Muslim', ref: '1218', quote: `(Aus der Abschiedspredigt:) „… Ihr habt das Recht über sie, dass sie niemanden, den ihr nicht mögt, auf euer Lager lassen. Wenn sie das tun, so schlagt sie, aber nicht heftig."`, original: `fa-ḍribūhunna ḍarban ghayra mubarriḥ`, status: 'paraphrase' },
          { kind: 'hadith', work: 'Sunan Abi Dawud', ref: '2146', quote: `„Schlagt die Dienerinnen Allahs nicht." Dann kam ʿUmar und sagte, die Frauen seien ihren Männern gegenüber dreist geworden; da erlaubte er, sie zu schlagen. Dann kamen viele Frauen zur Familie des Propheten und beklagten sich über ihre Männer. Er sagte: „Viele Frauen sind zur Familie Muhammads gekommen und haben sich über ihre Männer beklagt. Diese sind nicht die Besten unter euch."`, status: 'paraphrase', url: 'https://sunnah.com/abudawud:2146', note: 'Von al-Albani, Zubair ʿAli Zai und al-Arnaʾut als sahih eingestuft.' },
        ],
      },
      {
        text: `P3: Die gesamte vormoderne Exegese verstand 4:34 als begrenzte Erlaubnis zum Schlagen.`,
        support: `At-Tabari, ar-Razi, al-Qurtubi, Ibn Kathir; vgl. Kecia Ali, *Sexual Ethics and Islam* (2006).`,
      },
    ],
    conclusion: `Die Lesart „trennt euch von ihnen" ist eine moderne Neudeutung, die nicht nur der Grammatik und der Tradition widerspricht, sondern der eigenen Auslegung des Propheten. Ehrlicher ist es zu sagen: Der Vers erlaubt ein (begrenztes) Schlagen – und dann zu fragen, ob das der Wille Gottes sein kann.`,
  },
  voices: [
    {
      person: 'paulus',
      role: 'als Apostel der christlichen Ehe',
      text: `Paulus, oft als Patriarch missverstanden, definiert das „Haupt"-Sein des Mannes ausschließlich durch Christus: Christus ist Haupt, indem er sich für die Kirche hingibt (Eph 5,25). Er nennt die Frau den „eigenen Leib" des Mannes: Wer sie verletzt, verletzt sich selbst (Eph 5,28–29). Ein Recht des Mannes, seine Frau zu züchtigen, ist in diesem Denken ausgeschlossen – die einzige „Macht" des Mannes ist die Pflicht, zu lieben und zu dienen.`,
      sources: [
        { kind: 'bibel', work: 'Epheser', ref: '5,21', quote: `Und seid untereinander untertan in der Furcht Gottes.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
    },
    {
      person: 'chrysostomus',
      role: 'als Prediger der christlichen Ehe',
      text: `Chrysostomus hält in seiner Homilie zu Eph 5 fest: Der Mann soll seine Frau nicht durch Furcht und Drohungen an sich binden, sondern durch Liebe, Güte und Achtung; eine Frau, die man wie eine Sklavin behandelt, kann keine Gefährtin sein. Er sagt, selbst wenn die Frau Unrecht tut, solle der Mann sie nicht schmähen, denn auch Christus tat das nicht. Damit beschreibt er im 4. Jahrhundert eine Eheethik, die Gewalt keinen Raum lässt.`,
      sources: [
        { kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Homilien zum Epheserbrief', ref: 'Hom. 20', year: 'um 390', quote: `Welche Freude wird der Mann haben, wenn er mit seiner Frau wie mit einer Sklavin zusammenlebt? … Schmähe sie nicht, denn auch Christus hat das nicht getan.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'qureshi',
      role: 'als ehemaliger Muslim mit Kenntnis der Debatte',
      text: `Qureshi berichtet, wie er als Muslim die Übersetzung „trennt euch von ihnen" gern übernahm, weil sie das Unbehagen an 4:34 löste – und wie er dann feststellen musste, dass die klassischen Kommentare und die Hadithe eindeutig vom Schlagen sprechen. Er ermutigt Christen, das Gespräch nicht mit Anklagen, sondern mit der Frage nach dem Charakter Gottes zu führen: Was sagt dieser Vers über Gottes Sicht auf die Frau?`,
    },
    {
      person: 'shenouda-iii',
      role: 'als Patriarch und Lehrer der koptischen Kirche',
      text: `Papst Schenuda III. betonte in seinen Lehren über die christliche Familie die gegenseitige Liebe, Achtung und Selbstverleugnung der Eheleute als Weg der Heiligung. Die Ehe ist für ihn ein Sakrament, in dem Christus gegenwärtig ist; Härte und Gewalt widersprechen ihrem Wesen. Die koptische Kirche hält daran fest, dass der Mann seine Frau lieben soll „wie Christus die Kirche".`,
    },
  ],
  dialog: [
    {
      id: 'daraba-viele-bedeutungen',
      objection: `*Ḍaraba* hat viele Bedeutungen. Laleh Bakhtiar übersetzt *iḍribūhunna* zu Recht mit „geht von ihnen weg". Gott befiehlt kein Schlagen.`,
      objectionBy: 'Laleh Bakhtiar',
      targetsPremise: 1,
      answer: `Ich achte die gute Absicht. Aber im Arabischen hängt die Bedeutung von der Konstruktion ab: „reisen" heißt *ḍaraba fī l-arḍ* (4:101), „ein Gleichnis prägen" *ḍaraba mathalan*. Mit einer Person als direktem Objekt – wie in *wa-ḍribūhunna* – heißt es „schlagen". 1.300 Jahre lang hat kein klassischer Ausleger den Vers anders verstanden. Bakhtiars Lesart stammt aus dem Jahr 2007.`,
      followUps: [
        {
          id: 'daraba-bayna-trennen',
          objection: `Die Bedeutung „trennen" ist belegt – *ḍaraba bayna*, „zwischen ihnen trennen".`,
          objectionBy: 'Abdulhamid AbuSulayman',
          targetsPremise: 1,
          answer: `Dafür braucht es das Wort *bayna* („zwischen") – in 4:34 steht es nicht. Außerdem ist der zweite Schritt bereits die Trennung: „meidet sie im Ehebett" (*wa-hjurūhunna fī l-maḍājiʿ*). Ein dritter Schritt „trennt euch" wäre eine Wiederholung. Und der Vers fährt fort: „Wenn sie euch dann gehorchen" – das setzt Zwangsmittel voraus.`,
          followUps: [
            {
              id: 'klassiker-patriarchal',
              objection: `Die klassischen Gelehrten waren Kinder einer patriarchalen Kultur. Wir dürfen den Koran heute neu lesen.`,
              objectionBy: 'Edip Yüksel',
              targetsPremise: 3,
              answer: `Dann war auch der Prophet selbst „patriarchal": In seiner Abschiedspredigt erklärte er: „Schlagt sie, aber nicht heftig" (Muslim 1218), und nach ʿUmars Klage erlaubte er das Schlagen (Abu Dawud 2146). Wer 4:34 neu liest, korrigiert nicht nur die Gelehrten, sondern die Auslegung des Propheten.`,
              followUps: [
                {
                  id: 'nur-leicht-miswak',
                  objection: `Muslim 1218 erlaubt es nur in einem bestimmten Fall und „nicht heftig". Ibn ʿAbbas sagte: mit einem Zahnhölzchen (*miswāk*) – also rein symbolisch.`,
                  objectionBy: 'Jonathan A. C. Brown',
                  targetsPremise: 2,
                  answer: `Diese Begrenzungen sind echt und haben vielen Frauen Schutz gegeben – das gestehe ich zu. Aber auch ein „symbolischer" Schlag ist die Erlaubnis für einen Ehemann, eine erwachsene Frau körperlich zu bestrafen. Das ist ein Ausdruck von Rangordnung, nicht von gegenseitiger Würde. Im Neuen Testament gibt es nichts Vergleichbares – weder hart noch symbolisch.`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'prophet-schlug-nie',
      objection: `Der Prophet hat nie eine Frau geschlagen. Aischa bezeugt es (Muslim 2328). Sein Vorbild ist der Maßstab.`,
      objectionBy: 'Jonathan A. C. Brown',
      targetsPremise: 2,
      answer: `Muslim 2328 ist ein schöner Bericht, und ich erkenne ihn an. Aber derselbe Prophet hat anderen das Schlagen erlaubt (Abu Dawud 2146) und es in der Abschiedspredigt erläutert (Muslim 1218). Ein Vorbild, das selbst nicht schlägt, aber anderen das Recht dazu gibt, ändert nichts an der Erlaubnis.`,
      sources: [
        { kind: 'hadith', work: 'Sahih Muslim', ref: '2328', quote: `Aischa: Der Gesandte Allahs schlug niemals jemanden mit seiner Hand, weder eine Frau noch einen Diener, außer wenn er auf dem Weg Allahs kämpfte.`, status: 'paraphrase' },
      ],
      followUps: [
        {
          id: 'muslim-974-stoss',
          objection: `Und erzähl mir nicht von Muslim 974! Dort heißt es *lahada* – er stieß Aischa, das ist kein Schlagen.`,
          objectionBy: 'IslamQA / traditionelle Ausleger',
          answer: `Einverstanden, ich will nichts übertreiben: Muslim 974 berichtet, er habe Aischa in einer Nacht vor die Brust gestoßen, „was mir Schmerz bereitete" – muslimische Ausleger deuten das als Stoß. Ich brauche diesen Bericht nicht. Das Argument ruht auf dem Vers selbst und auf Muslim 1218 und Abu Dawud 2146.`,
          sources: [
            { kind: 'hadith', work: 'Sahih Muslim', ref: '974 (Kitab al-Jana\'iz)', quote: `Aischa: … er stieß mich vor die Brust, was mir Schmerz bereitete, und sagte: „Meintest du, Allah und Sein Gesandter würden dir Unrecht tun?"`, original: `fa-lahadanī fī ṣadrī lahdatan awjaʿatnī`, status: 'paraphrase', note: 'Nummerierung je nach Ausgabe verschieden; lahada wird von muslimischen Auslegern als „stoßen" gedeutet.' },
          ],
          followUps: [
            {
              id: 'nicht-die-besten',
              objection: `Abu Dawud 2146 endet mit: „Diese sind nicht die Besten unter euch." Der Prophet missbilligte das Schlagen also.`,
              objectionBy: 'Jonathan A. C. Brown',
              targetsPremise: 2,
              answer: `Ja, er missbilligte Männer, die schlagen – das gestehe ich gern zu. Aber in demselben Bericht verbietet er es zuerst, erlaubt es dann nach ʿUmars Klage, und am Ende bleibt es erlaubt, nur missbilligt. Das letzte Wort im Koran bleibt die Erlaubnis. Ist „erlaubt, aber nicht empfohlen" die höchste Ethik, die Gott für Ehefrauen vorsieht?`,
              followUps: [
                {
                  id: 'realistischer-kompromiss',
                  objection: `Erlaubt, aber missbilligt ist ein realistischer Kompromiss für eine patriarchale Gesellschaft, die man nicht über Nacht ändern konnte.`,
                  objectionBy: 'Jonathan A. C. Brown',
                  targetsPremise: 3,
                  answer: `Damit gibst du zu, dass es ein zeitgebundenes Zugeständnis war – in einem Buch, das als ewig und vollkommen gilt. Und beachte: Sechshundert Jahre vorher hatte das Neue Testament den Männern bereits geboten, ihre Frauen zu lieben, „gleichwie Christus die Gemeinde geliebt hat" (Eph 5,25). Warum sollte die letzte Offenbarung hinter Eph 5 zurückgehen?`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'bukhari-5825-beschwerde',
      objection: `Bukhari 5825 zeigt doch: Frauen konnten sich beim Propheten über ihre Männer beschweren. Das ist Schutz.`,
      objectionBy: 'muslimische Apologeten',
      answer: `Die Frau kam mit einem grünen Fleck auf der Haut, und Aischa sagte: „Ich habe keine Frau so leiden sehen wie die gläubigen Frauen – ihre Haut ist grüner als ihr Gewand." Die Antwort des Propheten in diesem Bericht betrifft den Ehestreit um ihre Rückkehr zu Rifaʿa – eine Strafe für den Mann wegen des Flecks wird nicht berichtet.`,
      sources: [
        { kind: 'hadith', work: 'Sahih al-Bukhari', ref: '5825', quote: `Aischa: „Ich habe keine Frau so leiden sehen wie die gläubigen Frauen. Seht, ihre Haut ist grüner als ihre Kleidung!"`, status: 'paraphrase', url: 'https://sunnah.com/bukhari:5825' },
      ],
      followUps: [
        {
          id: 'argument-aus-schweigen',
          objection: `Das ist ein Argument aus dem Schweigen. Wir wissen nicht, ob der Prophet nicht doch etwas unternahm.`,
          objectionBy: 'Jonathan A. C. Brown',
          answer: `Richtig – ein Argument aus dem Schweigen trägt nur begrenzt, das gestehe ich zu. Darum stütze ich mich auf die ausdrücklichen Texte: 4:34 und Muslim 1218. Auch im klassischen Recht war ein Mann für ein „leichtes" Schlagen seiner Frau nicht strafbar.`,
          followUps: [
            {
              id: 'christliche-laender-zuechtigung',
              objection: `Auch in christlichen Ländern war die Züchtigung der Ehefrau bis ins 19. Jahrhundert rechtlich geduldet.`,
              objectionBy: 'Mohammed Hijab',
              answer: `Das gestehe ich zu – manche Rechtsordnungen duldeten eine „maßvolle Züchtigung". Aber keine davon konnte sich auf das Neue Testament berufen. Schon Chrysostomus lehrte im 4. Jahrhundert, der Mann solle seine Frau nicht durch Furcht, sondern durch Liebe gewinnen. Christliche Reformer haben die Duldung später mit Berufung auf Christus beseitigt – nicht gegen ihn.`,
              followUps: [
                {
                  id: 'chrysostomus-frauenfeind',
                  objection: `Chrysostomus war doch selbst frauenfeindlich – er schrieb harte Dinge über Frauen.`,
                  objectionBy: 'Mohammed Hijab',
                  answer: `Er hat in asketischer Rhetorik harte Sätze geschrieben – das gestehe ich zu. Aber über die Ehe predigte er Liebe bis zum Tod nach Eph 5. Und der entscheidende Unterschied: Die harten Worte eines Kirchenvaters sind keine Heilige Schrift. 4:34 dagegen ist für Muslime Gottes ewiges Wort.`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'gewalt-ueberall',
      objection: `Gewalt gegen Frauen gibt es überall – auch im Westen wird ein großer Teil der Frauen Opfer häuslicher Gewalt. Das hat nichts mit Religion zu tun.`,
      objectionBy: 'Mohammed Hijab',
      answer: `Richtig: Häusliche Gewalt ist ein weltweites Übel – nach Schätzungen der WHO erlebt etwa jede dritte Frau körperliche oder sexuelle Gewalt –, und auch Christen sind nicht frei davon. Es ist Sünde. Aber die Frage ist, ob die heilige Schrift es erlaubt. Ein christlicher Mann, der schlägt, hat keinen Vers; im klassischen Islam hat er einen.`,
      sources: [
        { kind: 'wissenschaft', author: 'Weltgesundheitsorganisation (WHO)', work: 'Violence Against Women Prevalence Estimates 2018', year: '2021', quote: `Weltweit erlebt etwa jede dritte Frau im Laufe ihres Lebens körperliche und/oder sexuelle Gewalt durch einen Partner oder sexuelle Gewalt durch einen Nichtpartner.`, status: 'paraphrase' },
      ],
      followUps: [
        {
          id: 'stufenweise-konfliktloesung',
          objection: `4:34 schützt die Frau sogar: Statt Scheidung oder schlimmerer Gewalt gibt es eine stufenweise Konfliktlösung – und 4:35 sieht Schlichter aus beiden Familien vor.`,
          objectionBy: 'Yasir Qadhi',
          answer: `4:35 mit den Schlichtern ist ein guter Gedanke, das erkenne ich an. Aber die Stufen in 4:34 sind eine einseitige Disziplinierung: Bei Widersetzlichkeit des *Mannes* (4:128) soll die Frau eine Versöhnung suchen – sie erhält kein Recht, ihn zu ermahnen, zu meiden und zu schlagen. Das ist keine Konfliktlösung unter Gleichen.`,
          sources: [
            { kind: 'koran', work: 'Sure 4 (an-Nisa\')', ref: '4:128', quote: `Und wenn eine Frau von ihrem Mann Widersetzlichkeit oder Abwendung befürchtet, so ist es keine Sünde für beide, sich untereinander zu versöhnen.`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/4/128' },
          ],
          followUps: [
            {
              id: 'qawwam-verantwortung',
              objection: `Der Mann ist *qawwām* – er trägt die Verantwortung für die Familie, darum hat er Autorität. Jede Gemeinschaft braucht ein Haupt.`,
              objectionBy: 'Yasir Qadhi',
              answer: `Auch das Neue Testament spricht vom Haupt (Eph 5,23) – aber es definiert das Haupt-Sein als Selbsthingabe: Christus wäscht die Füße (Joh 13,14) und gibt sein Leben (Eph 5,25). Strafgewalt kommt darin nicht vor. Und Petrus warnt: Wenn Männer ihre Frauen nicht ehren, werden ihre Gebete verhindert (1 Petr 3,7).`,
              followUps: [
                {
                  id: 'haupt-ist-haupt',
                  objection: `Dann ist das Christentum genauso patriarchal – Haupt ist Haupt.`,
                  objectionBy: 'Mohammed Hijab',
                  answer: `Haupt-Sein als Dienst ist etwas völlig anderes als Haupt-Sein mit dem Recht zu strafen. Paulus sagt: „Niemand hat jemals sein eigen Fleisch gehasst, sondern er nährt es und pflegt es" (Eph 5,29). Ein Mann, der seine Frau schlägt, schlägt nach christlichem Verständnis seinen eigenen Leib – und vergeht sich an dem, wofür Christus gestorben ist.`,
                  questionsBack: [
                    `Wenn du deine Tochter verheiratest – würdest du ihrem Mann das Recht aus 4:34 zugestehen, auch nur „leicht"?`,
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
    `Welcher klassische Ausleger vor dem 20. Jahrhundert hat *wa-ḍribūhunna* nicht als „schlagt sie" verstanden?`,
    `Wie verstehst du Muslim 1218: „Schlagt sie, aber nicht heftig"?`,
    `Hat die Frau nach 4:128 dasselbe Recht gegenüber einem widersetzlichen Mann wie der Mann nach 4:34?`,
    `Würdest du deiner Tochter wünschen, dass ihr Mann das Recht aus 4:34 hat – auch nur symbolisch?`,
  ],
  avoid: [
    `Nicht behaupten, der Islam befehle Männern, ihre Frauen zu verprügeln. Die klassischen Gelehrten haben das Schlagen stark begrenzt; sei präzise.`,
    `Muslim 974 nicht als „Mohammed schlug Aischa" präsentieren. Der Ausdruck wird als Stoß gedeutet, und das Argument braucht diesen Bericht nicht.`,
    `Nicht so tun, als gebe es unter Christen keine häusliche Gewalt. Sie ist Sünde – aber sie hat keinen Bibelvers auf ihrer Seite.`,
  ],
  concessions: [
    `Viele Muslime und muslimische Gelehrte lehnen das Schlagen der Ehefrau heute vollständig ab, und der Prophet selbst hat nach Muslim 2328 nie eine Frau geschlagen.`,
    `Die klassischen Ausleger haben das Schlagen erheblich eingeschränkt (nicht ins Gesicht, nicht heftig, symbolisch).`,
    `In christlichen Gesellschaften war die Züchtigung der Ehefrau lange rechtlich geduldet, und manche Kirchenväter äußerten sich hart über Frauen.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Kecia Ali', work: 'Sexual Ethics and Islam', year: '2006', status: 'paraphrase' },
    { kind: 'gegner', author: 'Abdulhamid AbuSulayman', work: 'Marital Discord: Recapturing the Full Islamic Spirit of Human Dignity', year: '2003', status: 'paraphrase' },
    { kind: 'gegner', author: 'Jonathan A. C. Brown', work: 'Misquoting Muhammad', year: '2014', status: 'paraphrase' },
    { kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'On Marriage and Family Life (übers. C. P. Roth / D. Anderson)', year: '1986', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Islam', 'Frauen', 'Ehe', 'Gewalt', '4:34', 'Koranauslegung'],
  related: [
    'islam-frauen-familie/islam-befreite-frau',
    'islam-frauen-familie/polygamie-gerecht',
    'islam-hadith-sira/isnad-wissenschaftlich-gesichert',
    'at-ethik/bibel-frauenfeindlich',
    'islam-koran/koran-klar-vollstaendig',
  ],
};

export default claim;
