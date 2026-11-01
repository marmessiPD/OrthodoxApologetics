import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'koran-widerspruchsfrei',
  title: `„Der Koran enthält keine Widersprüche (4:82)."`,
  proponents: [
    { name: 'Zakir Naik', role: 'Islamischer Prediger, Mumbai', work: 'Vorträge „Is the Qur\'an God\'s Word?"' },
    { name: 'Yasir Qadhi', role: 'Islamischer Gelehrter, Dallas', work: 'An Introduction to the Sciences of the Qur\'aan (Kapitel über Abrogation)' },
    { name: 'Mohammed Hijab', role: 'Islamischer Debattierer, London', work: 'Antworten auf angebliche Widersprüche im Koran' },
  ],
  steelman: `„Der Koran stellt selbst den Test auf: ‚Denken sie denn nicht über den Koran nach? Wäre er von einem anderen als Allah, sie würden darin viele Widersprüche finden' (4:82). Ein Buch, das über 23 Jahre in Krieg und Frieden, in Mekka und Medina entstand, müsste voller Widersprüche sein, wenn es menschlich wäre. Alle angeblichen Widersprüche, die Kritiker vorbringen, haben die Gelehrten längst erklärt – sie beruhen auf Unkenntnis der arabischen Sprache, des Kontexts oder der Offenbarungsanlässe. Die Abrogation (*naskh*) ist kein Widerspruch, sondern Gottes Weisheit: Wie ein Arzt die Medizin dem Heilungsverlauf anpasst, hat Gott seine Gebote stufenweise offenbart (2:106)."`,
  biblical: {
    summary: `Der Koran selbst bezeugt, dass Verse ersetzt wurden: „Was Wir an Versen aufheben oder in Vergessenheit geraten lassen, dafür bringen Wir einen besseren oder gleichwertigen" (2:106; vgl. 16:101). Die klassische Lehre der Abrogation räumt ein, dass manche Verse **einander im Urteil widersprechen** und der spätere den früheren aufhebt – etwa 2:234 (Wartezeit der Witwe: vier Monate und zehn Tage) gegenüber 2:240 (ein Jahr), wobei der aufhebende Vers im Koran *vor* dem aufgehobenen steht. Wie viele Verse abrogiert sind, ist unter Gelehrten seit jeher umstritten. Daneben gibt es historische Spannungen (Maria als „Schwester Aarons", 19:28; Haman am Hof Pharaos, 28:38). Das zeigt: 4:82 ist kein einfacher Prüfstein, sondern hängt von Harmonisierung ab – derselben Methode, die Christen bei der Bibel anwenden.`,
    detail: `**Beispiele, die Muslime selbst diskutieren:**
- **Abrogation:** 2:240 (Versorgung der Witwe für ein Jahr) vs. 2:234 (vier Monate und zehn Tage); die stufenweise Behandlung des Weins (2:219; 4:43; 5:90). Klassische Listen nennen von wenigen bis über hundert abrogierte Verse; Schah Waliullah (18. Jh.) reduzierte sie auf etwa fünf.
- **Maria, „Schwester Aarons"** (19:28), „Tochter Imrans" (66:12) – in der Bibel sind Mirjam, Aaron und Mose Kinder Amrams (Num 26,59). Muslim 2135 überliefert, dass schon Christen in Nadschran danach fragten; die Antwort: Man benannte Menschen nach früheren Propheten und Frommen.
- **Haman** (28:6.38; 40:36–37) ist Minister Pharaos und soll einen Turm zum Himmel bauen; in der Bibel ist Haman ein persischer Beamter (Ester), und der Turm erinnert an Babel (Gen 11).
- **Schöpfungstage:** 7:54 (sechs Tage) und 41:9–12 (zwei + vier + zwei) – Muslime erklären, die „vier Tage" schlössen die ersten zwei ein.
- **Reihenfolge:** 2:29 und 41:9–11 (Erde, dann Himmel) vs. 79:27–30 (Himmel, „danach" breitete Er die Erde aus).`,
    sources: [
      { kind: 'koran', work: 'Sure 4 (an-Nisa\')', ref: '4:82', quote: `Denken sie denn nicht sorgfältig über den Koran nach? Wäre er von einem anderen als Allah, sie würden darin gewiss viele Widersprüche finden.`, original: `la-wajadū fīhi khtilāfan kathīrā`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/4/82' },
      { kind: 'koran', work: 'Sure 2 (al-Baqara)', ref: '2:106', quote: `Was Wir an Versen aufheben oder in Vergessenheit geraten lassen, dafür bringen Wir einen besseren oder gleichwertigen.`, original: `mā nansakh min āyatin aw nunsihā naʾti bi-khayrin minhā aw mithlihā`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/2/106' },
      { kind: 'koran', work: 'Sure 16 (an-Nahl)', ref: '16:101', quote: `Und wenn Wir einen Vers an die Stelle eines anderen setzen – und Allah weiß am besten, was Er herabsendet –, sagen sie: „Du bist nur ein Erdichter."`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/16/101' },
      { kind: 'koran', work: 'Sure 19 (Maryam)', ref: '19:28', quote: `O Schwester Aarons, dein Vater war kein schlechter Mann, und deine Mutter war keine Hure.`, original: `yā ukhta hārūna`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/19/28' },
      { kind: 'hadith', work: 'Sahih Muslim', ref: '2135', quote: `Al-Mughira ibn Schu'ba: Als ich nach Nadschran kam, fragten sie mich: Ihr lest „O Schwester Aarons", obwohl Mose lange vor Jesus lebte. Der Prophet erklärte: Sie pflegten (Kinder) nach den Propheten und Frommen vor ihnen zu benennen.`, status: 'paraphrase', url: 'https://sunnah.com/muslim:2135' },
    ],
  },
  church: {
    summary: `Christen messen die Bibel nicht an der Behauptung, sie enthalte keinerlei Schwierigkeiten, sondern bekennen sie als Gottes wahrhaftiges Wort, das in der Kirche mit den Vätern ausgelegt wird. Die Väter behandelten scheinbare Widersprüche offen und mit Sorgfalt. Gerade deshalb bittet der Christ um Fairness: Dieselben Auslegungsregeln – Kontext, Gattung, Perspektive, Entwicklung –, die Muslime für den Koran beanspruchen, müssen auch für die Bibel gelten.`,
    sources: [
      { kind: 'bibel', work: 'Hebräer', ref: '8,13', quote: `Indem er sagt: „Ein neues", macht er das erste alt. Was aber alt und überjahrt ist, das ist nahe bei seinem Ende.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  quickAnswer: `Der Koran selbst sagt, dass Gott Verse durch andere ersetzt hat (2:106; 16:101), und die klassischen Gelehrten listen Verse auf, deren Urteil durch spätere aufgehoben wurde. Für viele Spannungen gibt es Erklärungen – genau wie für die angeblichen Widersprüche der Bibel. Dann ist 4:82 aber kein Beweis mehr, denn mit Harmonisierung kann man jeden Text widerspruchsfrei machen. Ich bitte nur um gleiche Maßstäbe für beide Bücher.`,
  keyPoints: [
    `**Abrogation ist im Koran bezeugt:** 2:106; 16:101 – Verse wurden ersetzt.`,
    `**Widersprüchliche Urteile im Text:** z. B. 2:234 und 2:240; der aufhebende Vers steht vor dem aufgehobenen.`,
    `**Keine Einigkeit über den Umfang:** Die Zahl abrogierter Verse schwankt bei den Gelehrten erheblich.`,
    `**Historische Spannungen:** 19:28 (Schwester Aarons), 28:38 (Haman in Ägypten) – mit innerislamischen Erklärungen, die man fair nennen sollte.`,
    `**Gleicher Maßstab:** Wer Harmonisierung für den Koran beansprucht, muss sie für die Bibel zulassen.`,
  ],
  voices: [
    {
      person: 'gabriel-reynolds',
      role: 'als Koranforscher – fair auch zur islamischen Seite',
      text: `Reynolds deutet 19:28 nicht als plumpe Verwechslung, sondern als bewusste typologische Verbindung zwischen Maria und Mirjam, wie sie auch christliche Ausleger der Spätantike kannten. Das ist ein Beispiel dafür, wie man fair mit scheinbaren Widersprüchen umgeht: Man fragt zuerst, was der Text sagen will. Genau diese Fairness sollten Muslime auch der Bibel gewähren.`,
      sources: [
        { kind: 'fachliteratur', author: 'Gabriel Said Reynolds', work: 'The Qur\'an and Its Biblical Subtext', year: '2010', quote: `Deutung von 19:28 als typologische Verbindung zwischen Maria und Mirjam.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'david-wood',
      role: 'als Philosoph und Debattierer',
      text: `Wood betont, dass 4:82 einen hohen Maßstab setzt: Ein menschliches Buch hätte „viele Widersprüche". Wenn Muslime aber für jede Spannung eine Erklärung finden – Abrogation, Kontext, verschiedene Ebenen –, dann gilt dasselbe für die Bibel, deren angebliche Widersprüche Ahmed Deedat auflistete. Entweder beide Bücher dürfen harmonisiert werden, oder keines.`,
    },
    {
      person: 'james-white',
      role: 'als Apologet mit Kenntnis des Korans',
      text: `White weist darauf hin, dass die Abrogation die Behauptung absoluter Widerspruchsfreiheit relativiert: Zwei Verse mit unvereinbaren Anweisungen stehen beide im Koran, und nur außerkoranisches Wissen über die Reihenfolge der Offenbarung entscheidet, welcher gilt. Damit hängt das Verständnis des Korans von Überlieferungen ab, die nicht im Koran stehen.`,
      sources: [
        { kind: 'fachliteratur', author: 'James R. White', work: 'What Every Christian Needs to Know About the Qur\'an', year: '2013', quote: `Behandlung von Abrogation und Textgeschichte des Korans.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'zakaria-botros',
      role: 'als koptischer Priester',
      text: `Zakaria Botros hat in seinen Sendungen die klassische Literatur über die Abrogation (*an-nāsikh wa-l-mansūkh*) vorgestellt und gefragt, wie ein Gläubiger wissen soll, welche Verse gelten, wenn die Gelehrten selbst über ihre Zahl uneins sind. Sein Anliegen ist nicht Spott, sondern die Einladung, denselben ehrlichen Blick auf beide Schriften zu werfen.`,
    },
  ],
  dialog: [
    {
      id: 'nenn-einen-widerspruch',
      objection: `Nenn mir einen einzigen echten Widerspruch im Koran!`,
      objectionBy: 'Zakir Naik',
      answer: `Ich möchte nicht mit einer Liste kommen, sondern mit einem Grundsatz: Der Koran sagt selbst, dass Gott Verse ersetzt hat (2:106; 16:101), und eure Gelehrten nennen Verse mit unvereinbaren Urteilen – etwa die Wartezeit der Witwe in 2:240 (ein Jahr) und 2:234 (vier Monate und zehn Tage). Ihr löst das durch Abrogation. Das ist legitim – aber dann ist „keine Widersprüche" eine Frage der Deutung, nicht des bloßen Textes.`,
      followUps: [
        {
          id: 'abrogation-ist-weisheit',
          objection: `Abrogation ist kein Widerspruch, sondern Gottes Weisheit. Ein Arzt ändert die Medizin, wenn der Patient gesünder wird. Gott hat seine Gebote stufenweise offenbart.`,
          objectionBy: 'Yasir Qadhi',
          answer: `Ich verstehe dieses Bild. Aber dann stehen im Koran Anweisungen, die nicht mehr gelten, neben solchen, die gelten – und welcher Vers welchen aufhebt, sagt der Koran nicht; das weiß man nur aus Überlieferungen über die Reihenfolge der Offenbarung. Und die Gelehrten sind sich über die Zahl der abrogierten Verse nicht einig. 4:82 als einfacher Test funktioniert dann nicht mehr.`,
          followUps: [
            {
              id: 'bibel-hat-auch-abrogation',
              objection: `Die Bibel hat doch auch Abrogation – die Speisegebote, die Opfer, die Beschneidung wurden im Neuen Testament aufgehoben.`,
              objectionBy: 'Mohammed Hijab',
              answer: `Richtig, und das gebe ich gern zu: Der neue Bund erfüllt den alten (Hebr 8,13). Aber das ist ein Übergang zwischen zwei Bundesschlüssen über Jahrhunderte, den das Neue Testament ausdrücklich erklärt. Und Christen behaupten nicht, ihre Schrift beweise sich durch Widerspruchsfreiheit. Ich halte Abrogation nicht für unmöglich – ich sage nur: Mit ihr ist 4:82 kein Gottesbeweis mehr.`,
              followUps: [
                {
                  id: 'gott-darf-aendern',
                  objection: `Gott darf seine Gebote ändern, wann und wie Er will. Wer bist du, Ihm das vorzuschreiben?`,
                  objectionBy: 'Mohammed Hijab',
                  answer: `Einverstanden – Gott ist frei. Aber dann ist die Aussage „kein Widerspruch" so zu verstehen: „Widersprüche sind keine, wenn einer später kam." Damit ist sie nicht mehr überprüfbar. Ein Test, den nichts nicht bestehen kann, ist kein Test. Ich prüfe damit nicht Gott, sondern ein Argument, das Menschen für den Koran vorbringen.`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'schwester-aarons',
      objection: `19:28 nennt Maria „Schwester Aarons" – das ist kein Fehler. Muslim 2135 erklärt es: Man benannte Menschen nach früheren Propheten und Frommen.`,
      objectionBy: 'Yasir Qadhi',
      answer: `Das ist eine ernsthafte Erklärung, und ich nenne sie fair. Bemerkenswert ist allerdings, dass der Koran Marias Vater „Imran" nennt (66:12; vgl. 3:35) – in der Bibel ist Amram der Vater von Mirjam, Aaron und Mose. Diese Häufung macht es plausibel, dass der Koran Maria und Mirjam bewusst oder unbewusst verbindet. Ich behaupte nicht, das sei ein zwingender Beweis; es ist eine offene Frage.`,
      sources: [
        { kind: 'koran', work: 'Sure 66 (at-Tahrim)', ref: '66:12', quote: `Und Maria, die Tochter Imrans, die ihre Scham hütete …`, original: `wa-maryama bnata ʿimrān`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/66/12' },
        { kind: 'bibel', work: '4. Mose (Numeri)', ref: '26,59', quote: `Amrams Frau Jochebed gebar dem Amram Aaron und Mose und Mirjam, ihre Schwester.`, translation: 'Luther 1912', status: 'paraphrase' },
      ],
      followUps: [
        {
          id: 'kein-widerspruch-zugegeben',
          objection: `Dann gibst du zu, dass es kein Widerspruch ist.`,
          objectionBy: 'Mohammed Hijab',
          answer: `Es ist kein innerer Widerspruch im strengen Sinn, sondern eine historische Frage, die sich erklären lässt. Genau so behandle ich auch die Stellen, die Ahmed Deedat in der Bibel als Widersprüche anführte. Wenn du diese Großzügigkeit für den Koran beanspruchst, gewähre sie bitte auch der Bibel.`,
        },
      ],
    },
    {
      id: 'haman-aegyptisch-belegt',
      objection: `Haman in Ägypten ist kein Fehler – Maurice Bucaille hat gezeigt, dass ein Name „Haman" in ägyptischen Inschriften vorkommt.`,
      objectionBy: 'Maurice Bucaille (aufgegriffen von Zakir Naik)',
      answer: `Diese Deutung wird von Ägyptologen nicht geteilt; der angeführte Name ist weder sicher gelesen noch mit einem Minister des Pharao verbunden. Auffällig ist zudem, was der koranische Haman tut: Er soll einen hohen Turm bauen, damit Pharao zum Gott Moses hinaufsteigen kann (28:38; 40:36–37) – das erinnert an den Turm zu Babel (Gen 11). In der Bibel ist Haman ein Beamter am persischen Hof (Ester 3).`,
      sources: [
        { kind: 'koran', work: 'Sure 28 (al-Qasas)', ref: '28:38', quote: `Pharao sagte: „O Haman, brenne mir Lehm (zu Ziegeln) und mache mir einen Hochbau, damit ich zum Gott Moses hinaufsteige."`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/28/38' },
      ],
      followUps: [
        {
          id: 'esther-unzuverlaessig',
          objection: `Warum soll ausgerechnet das Buch Ester recht haben? Vielleicht irrt die Bibel und nicht der Koran.`,
          objectionBy: 'Mohammed Hijab',
          answer: `Das ist eine faire Frage. Aber dann bräuchte es einen Beleg für einen ägyptischen Minister Haman zur Zeit Moses – den gibt es nicht. Ohne Beleg bleibt die Beobachtung: Der Koran verbindet Namen und Motive aus verschiedenen biblischen Zusammenhängen (Pharao, Haman, Turmbau). Das ist mindestens eine ernsthafte Schwierigkeit, die man nicht mit 4:82 vom Tisch wischen kann.`,
        },
      ],
    },
    {
      id: 'alles-schon-erklaert',
      objection: `Alle angeblichen Widersprüche im Koran wurden von unseren Gelehrten längst erklärt. Wer sie anführt, kennt einfach die Tafsir-Literatur nicht.`,
      objectionBy: 'Yasir Qadhi',
      answer: `Ich respektiere die Arbeit eurer Gelehrten. Aber dann haben auch christliche Gelehrte die angeblichen Bibelwidersprüche seit Jahrhunderten erklärt – Julius Africanus, Augustinus, Chrysostomus bis heute. Wenn Erklärungen beim Koran genügen, genügen sie auch bei der Bibel. Dann kann man die Bibel nicht wegen Widersprüchen verwerfen und den Koran wegen Widerspruchsfreiheit loben.`,
    },
  ],
  questionsToAsk: [
    `Wie viele Verse sind nach deiner Meinung abrogiert – und woher weißt du, welche?`,
    `Warum steht der aufhebende Vers 2:234 vor dem aufgehobenen 2:240?`,
    `Wenn Harmonisierung beim Koran legitim ist – warum nicht bei der Bibel?`,
    `Ist 4:82 ein Test, den der Koran überhaupt nicht bestehen *könnte*?`,
  ],
  avoid: [
    `Nicht mit langen Widerspruchslisten aus dem Internet arbeiten – viele Beispiele sind schwach und leicht zu erklären. Wenige, gut verstandene Beispiele genügen.`,
    `Nicht behaupten, die Kreuzigungsdrohung Pharaos (7:124) sei ein sicherer Anachronismus – Pfählen und ähnliche Strafen sind im alten Ägypten belegt.`,
    `Nicht spotten: Der Ton entscheidet, ob dein Gegenüber zuhört.`,
  ],
  concessions: [
    `Für die meisten angeführten Spannungen gibt es innerislamische Erklärungen, die ernst zu nehmen sind.`,
    `Auch das Neue Testament hebt Gebote des Alten Bundes auf; Christen kennen also eine Form von Fortschreiten der Offenbarung.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Gabriel Said Reynolds', work: 'The Qur\'an and Its Biblical Subtext', year: '2010', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'James R. White', work: 'What Every Christian Needs to Know About the Qur\'an', year: '2013', status: 'paraphrase' },
    { kind: 'gegner', author: 'Yasir Qadhi', work: 'An Introduction to the Sciences of the Qur\'aan', year: '1999', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Koran', 'Widersprüche', 'Abrogation', 'Islam'],
  related: [
    'islam-bibelverfaelschung/bibel-widerspricht-sich',
    'islam-dilemma/muhaymin-5-48',
    'islam-koran/koran-perfekt-bewahrt',
    'islam-koran/koran-klar-vollstaendig',
  ],
};

export default claim;
