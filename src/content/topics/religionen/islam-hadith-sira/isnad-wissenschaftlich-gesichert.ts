import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'isnad-wissenschaftlich-gesichert',
  title: `„Die Hadithe sind durch die Isnad-Wissenschaft zuverlässig gesichert."`,
  proponents: [
    { name: 'Jonathan A. C. Brown', role: 'Islamwissenschaftler, Georgetown University', work: 'Hadith: Muhammad\'s Legacy in the Medieval and Modern World (2009); Misquoting Muhammad (2014)' },
    { name: 'Muhammad Mustafa al-Azami', role: 'Hadith-Gelehrter (1930–2017)', work: 'Studies in Early Hadith Literature (1968); On Schacht\'s Origins of Muhammadan Jurisprudence (1985)' },
    { name: 'Yasir Qadhi', role: 'Islamischer Gelehrter, Dallas', work: 'Vorträge zur Hadith-Wissenschaft (ʿulūm al-ḥadīth)' },
    { name: 'Mohammed Hijab', role: 'Islamischer Apologet, London', work: 'Debatten über die Zuverlässigkeit der Sunna' },
  ],
  steelman: `„Keine andere Religion hat ihre Überlieferung so streng geprüft wie der Islam. Jeder Bericht (*ḥadīth*) besteht aus einer Überliefererkette (*isnād*) und einem Text (*matn*). Die Gelehrten haben Zehntausende Überlieferer biografisch erfasst (*ʿilm ar-rijāl*): Wann lebten sie, wen trafen sie, wie gut war ihr Gedächtnis, wie fromm waren sie? Al-Bukhari soll aus rund 600.000 Berichten nur etwa 2.600 (ohne Wiederholungen) in sein *Ṣaḥīḥ* aufgenommen haben – das zeigt, wie streng gesiebt wurde. Erfundene Hadithe wurden von den Muslimen selbst entlarvt und in eigenen Werken gesammelt. Westliche Skeptiker wie Goldziher und Schacht sind durch Forscher wie Harald Motzki widerlegt, der Material bis ins erste islamische Jahrhundert zurückverfolgt hat. Wer die Hadithe verwirft, muss konsequenterweise jede mündliche Überlieferung verwerfen – auch die der Evangelien."`,
  biblical: {
    summary: `Die Bibel stellt an die Überlieferung über Jesus genau die Frage, um die es hier geht: Wie nahe ist das Zeugnis an den Ereignissen? Lukas schreibt ausdrücklich auf der Grundlage von „Augenzeugen und Dienern des Wortes" und will „Gewissheit" (*asphaleia*) vermitteln (Lk 1,1–4). Paulus gibt ein Bekenntnis weiter, das er „empfangen" hat, und nennt lebende Zeugen, die man befragen konnte (1 Kor 15,3–8). Die neutestamentlichen Schriften entstanden innerhalb einer Generation nach Jesus – die Paulusbriefe etwa 20–30 Jahre danach. Die kanonischen Hadith-Sammlungen entstanden dagegen rund 200–250 Jahre nach Mohammed.`,
    detail: `**Das Prinzip „Prüft alles" (1 Thess 5,21):** Das Christentum fordert keine Unantastbarkeit seiner Überlieferung, sondern Prüfung. Die frühen Christen unterschieden selbst zwischen apostolischen Schriften und späteren Legenden (z. B. die Ablehnung der „Petrusakten" und des „Thomasevangeliums" als nicht apostolisch).

**Der Maßstab ist derselbe:** Christen wenden auf die Hadithe keine strengeren Kriterien an als auf die Evangelien – Nähe zu den Ereignissen, Augenzeugenschaft, mehrfache unabhängige Bezeugung, Kriterium der Peinlichkeit, Handschriftenlage. Der Unterschied liegt in den Daten, nicht im Maßstab.`,
    sources: [
      { kind: 'bibel', work: 'Lukas', ref: '1,1–4', quote: `Lukas schreibt, wie es „uns überliefert haben, die es von Anfang an selbst gesehen und Diener des Worts gewesen sind", damit Theophilus „gewissen Grund" der Lehre erfahre.`, translation: 'Luther 1912', status: 'paraphrase' },
      { kind: 'bibel', work: '1. Korinther', ref: '15,3–8', quote: `Paulus gibt weiter, was er empfangen hat, und fügt an, dass die meisten der über fünfhundert Zeugen „noch heutigestages" leben.`, translation: 'Luther 1912', status: 'paraphrase' },
      { kind: 'bibel', work: '1. Thessalonicher', ref: '5,21', quote: `Prüfet aber alles, und das Gute behaltet.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die Kirche empfängt die Heilige Schrift als apostolisches Zeugnis, das innerhalb der Generation der Augenzeugen niedergeschrieben und in der Kirche bewahrt wurde. Schon die Väter betonten die Kette der Zeugen – aber als Kette von Gemeinden und Bischöfen, die öffentlich lehrten (Irenäus), nicht als private Einzelberichte. Papias legte Wert darauf, Worte des Herrn von den „Ältesten" zu erfahren, die die Apostel gehört hatten. Die koptische Kirche verbindet Schrift, Liturgie und Väter; aber keine spätere Tradition darf dem apostolischen Zeugnis widersprechen (Gal 1,8).`,
    sources: [
      { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Adversus Haereses', ref: 'III,3,1–4', year: 'um 180', quote: `Die apostolische Überlieferung ist in den Kirchen öffentlich durch die Reihe der Bischöfe bezeugt, die von den Aposteln eingesetzt wurden – sie ist kein geheimes Sonderwissen.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Eusebius von Caesarea', work: 'Kirchengeschichte', ref: 'III,39,3–4', year: 'um 325', quote: `Papias berichtet, er habe sich bei den Schülern der Ältesten erkundigt, was Andreas, Petrus, Philippus, Thomas, Jakobus, Johannes oder Matthäus gesagt hätten, denn die „lebendige und bleibende Stimme" sei ihm wertvoller als Bücher.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `In der Forschung gibt es ein Spektrum: **Ignaz Goldziher** (*Muhammedanische Studien*, Bd. 2, 1890) zeigte, dass viele Hadithe die Lehr- und Parteikämpfe der ersten zwei Jahrhunderte spiegeln. **Joseph Schacht** (*The Origins of Muhammadan Jurisprudence*, 1950) vertrat, dass die Isnade „nach rückwärts gewachsen" seien und juristische Hadithe kaum vor 100 n. H. zurückreichen. **G. H. A. Juynboll** (*Muslim Tradition*, 1983) entwickelte die Theorie des „gemeinsamen Glieds" (*common link*). **Harald Motzki** (*Die Anfänge der islamischen Jurisprudenz*, 1991) zeigte mit der Isnad-cum-Matn-Analyse, dass Material im *Muṣannaf* des ʿAbd ar-Razzaq bis ins späte 1. Jahrhundert n. H. zurückreicht. **Jonathan Brown** verteidigt die Leistung der klassischen Hadith-Kritik und hält radikale Skepsis für unbegründet.`,
    detail: `**Was weitgehend unstrittig ist:**
- Die großen kanonischen Sammlungen entstanden im 9. Jahrhundert: al-Bukhari (gest. 870), Muslim (gest. 875), Abu Dawud (gest. 889), at-Tirmidhi (gest. 892). Mohammed starb 632.
- Die frühesten erhaltenen Sira-Werke sind spät: Ibn Ishaq (gest. ca. 767) ist nur in der Bearbeitung des Ibn Hisham (gest. 833) und in Auszügen bei at-Tabari (gest. 923) erhalten.
- Es gab massenhaft Erfindungen – das bezeugen muslimische Gelehrte selbst (z. B. Ibn al-Jawzi, *al-Mawḍūʿāt*; Muslims Einleitung zum *Ṣaḥīḥ*).
- Sunniten und Schiiten haben auf derselben „Wissenschaft" zwei unterschiedliche Korpora aufgebaut.

**Was umstritten ist:** wie viel vom Kern auf Mohammed zurückgeht. Selbst Motzki und Brown behaupten nicht, die Methode *garantiere* die Worte des Propheten; Motzki zeigt Frühdatierungen in die Zeit der Nachfolgegeneration (um 700), nicht eine lückenlose Sicherung bis 632.

**Wichtig:** Das christliche Argument hängt nicht von Schachts Radikalskepsis ab. Es funktioniert auch auf der Grundlage der moderaten Position (siehe Dialog: das Hadith-Dilemma).`,
    sources: [
      { kind: 'fachliteratur', author: 'Ignaz Goldziher', work: 'Muhammedanische Studien, Bd. 2', year: '1890', quote: `Ein großer Teil der Hadithe ist nicht Dokument der Zeit Mohammeds, sondern spiegelt die religiösen, politischen und sozialen Entwicklungen der ersten beiden Jahrhunderte.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Joseph Schacht', work: 'The Origins of Muhammadan Jurisprudence', year: '1950', quote: `Juristische Hadithe entstanden überwiegend im 2. Jahrhundert; die Isnade wurden im Lauf der Zeit „nach rückwärts" bis zum Propheten verlängert.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Harald Motzki', work: 'Die Anfänge der islamischen Jurisprudenz. Ihre Entwicklung in Mekka bis zur Mitte des 2./8. Jahrhunderts', year: '1991', quote: `Das im Muṣannaf des ʿAbd ar-Razzaq überlieferte Material seiner Hauptgewährsleute ist echt und reicht bis in das späte 1. Jahrhundert der Hidschra zurück; Schachts Generalthese ist so nicht haltbar.`, status: 'paraphrase', note: 'Motzki widerlegt Schachts Pauschalurteil, behauptet aber keine generelle Echtheit der Prophetenworte.' },
      { kind: 'gegner', author: 'Jonathan A. C. Brown', work: 'Hadith: Muhammad\'s Legacy in the Medieval and Modern World', year: '2009', quote: `Die klassische Hadith-Kritik war ein hochentwickeltes System; die westliche Skepsis beruht teilweise auf fragwürdigen Annahmen.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Die Isnad-Wissenschaft ist eine beeindruckende Leistung – aber sie begann erst, als bereits massenhaft gefälscht wurde, und sie prüft vor allem den Ruf von Überlieferern, nicht, ob ein gut klingender Isnad selbst erfunden ist. Die großen Sammlungen entstanden 200 Jahre nach Mohammed. Und hier liegt das Dilemma: Wenn die Methode zuverlässig ist, gehören auch die schwierigen Hadithe (Apostasie, Steinigung, Aischas Alter) verbindlich zum Islam. Wenn sie es nicht ist, verliert der Islam sein Gebet, sein Recht und sogar die Geschichte seines Korans.`,
  keyPoints: [
    `**Zeitabstand:** Mohammed starb 632; al-Bukhari (gest. 870) und Muslim (gest. 875) sammelten rund 200–250 Jahre später. Die Paulusbriefe entstanden etwa 20–30 Jahre nach Jesus.`,
    `**Fälschung von Muslimen selbst bezeugt:** Muslims Einleitung zum *Ṣaḥīḥ* zitiert Yahya ibn Saʿid al-Qattan, man sehe die Frommen in nichts so unzuverlässig wie beim Hadith; Ibn al-Jawzi sammelte ganze Bände erfundener Hadithe.`,
    `**Die Methode prüft vor allem Personen:** Ein Fälscher kann einen Text an eine angesehene Kette hängen; Kettenkritik allein entdeckt das nicht (Schacht, Juynboll).`,
    `**Theologische Voraussetzungen:** Das sunnitische Axiom, alle Prophetengefährten seien vertrauenswürdig (*ʿadāla*), ist eine Glaubensaussage – Schiiten kommen mit derselben Methode zu einem anderen Korpus.`,
    `**Das Hadith-Dilemma:** Ist die Methode verlässlich, sind Bukhari 6922 (Apostasie), Bukhari 6829 (Steinigung) und Bukhari 5133 (Aischa) authentische Sunna. Ist sie es nicht, fallen Gebetsordnung, Recht, Sira und die Sammlungsgeschichte des Korans.`,
    `**Fairness:** Motzki und Brown haben echte Argumente gegen radikale Skepsis. Unser Argument braucht Schacht nicht – es funktioniert schon auf Grundlage der muslimischen Selbstauskunft.`,
  ],
  argument: {
    name: 'Das Hadith-Dilemma',
    summary: 'Der Islam braucht die Hadithe – aber er kann sie weder ganz behalten noch ganz verwerfen.',
    premises: [
      {
        text: `P1: Die islamische Praxis (Gebet, Fasten, Recht), die Biografie Mohammeds, der Kontext vieler Koranverse und die Sammlungsgeschichte des Korans stammen aus den Hadithen und der Sira.`,
        support: `Der Koran nennt weder die Zahl der täglichen Gebete ausdrücklich noch die Gebetseinheiten; die Geschichte der Koransammlung unter Abu Bakr und ʿUthman steht in Bukhari 4986 und 4987.`,
        sources: [
          { kind: 'hadith', work: 'Sahih al-Bukhari', ref: '4986', quote: `Bericht des Zayd ibn Thabit über die Sammlung des Korans unter Abu Bakr nach der Schlacht von Yamama.`, status: 'paraphrase', url: 'https://sunnah.com/bukhari:4986' },
        ],
      },
      {
        text: `P2: Wenn die Hadith-Methode zuverlässig ist, gehören auch die als *ṣaḥīḥ* eingestuften schwierigen Berichte zum verbindlichen Islam.`,
        support: `Bukhari 6922 („Wer seine Religion wechselt, den tötet"), Bukhari 6829 (Steinigung), Bukhari 5133 (Aischa mit sechs verheiratet, mit neun die Ehe vollzogen) stehen in der als zuverlässigst geltenden Sammlung.`,
        sources: [
          { kind: 'hadith', work: 'Sahih al-Bukhari', ref: '6922', quote: `„Wer seine (islamische) Religion wechselt, den tötet."`, original: `man baddala dīnahu fa-qtulūhu`, translation: 'eigene Übersetzung', status: 'verbatim', url: 'https://sunnah.com/bukhari:6922' },
        ],
      },
      {
        text: `P3: Wenn die Hadith-Methode unzuverlässig ist, verliert der Islam seine Praxis, sein Recht, seine Prophetenbiografie und die Bezeugung seiner Koransammlung.`,
        support: `Das räumen auch muslimische Hadith-Verteidiger ein; genau deshalb bekämpfen sie die Quranisten (siehe Claim „Wir brauchen die Hadithe nicht").`,
      },
    ],
    conclusion: `Der Muslim kann sich nicht aussuchen, welche Hadithe er gelten lässt, ohne seine eigene Methode aufzugeben. Entweder er verteidigt die schwierigen Hadithe als göttlich gebilligte Sunna – oder er räumt ein, dass das Fundament der islamischen Praxis unsicher ist.`,
    horns: [
      { label: 'Horn A: Die Methode ist zuverlässig', text: `Dann sind Todesstrafe für Apostasie, Steinigung und die Ehe mit der neunjährigen Aischa authentischer Teil des prophetischen Vorbilds „für alle Zeiten" (33:21).` },
      { label: 'Horn B: Die Methode ist unzuverlässig', text: `Dann ist unsicher, wie man betet, was erlaubt ist, wer Mohammed war und wie der Koran gesammelt wurde – der Islam steht ohne seine zweite Quelle da.` },
    ],
  },
  voices: [
    {
      person: 'lukas',
      role: 'als Historiker, der seine Quellen offenlegt',
      text: `Lukas beschreibt seine Methode, bevor er erzählt: Er hat „alles von Anfang an genau erkundet" und stützt sich auf Augenzeugen, damit sein Leser Gewissheit hat. Er schreibt innerhalb der Lebenszeit dieser Zeugen und nennt überprüfbare Namen, Orte und Herrscher (Lk 3,1–2). Das ist der Maßstab, an dem sich jede religiöse Überlieferung messen lassen muss – auch die eigene.`,
      sources: [
        { kind: 'bibel', work: 'Lukas', ref: '1,3', quote: `Lukas hat es für gut gehalten, nachdem er „alles von Anbeginn mit Fleiß erkundet" hat, es in Ordnung zu schreiben.`, translation: 'Luther 1912', status: 'paraphrase' },
      ],
    },
    {
      person: 'papias',
      role: 'als frühester Zeuge der Evangelienüberlieferung',
      text: `Papias, Bischof von Hierapolis zu Beginn des 2. Jahrhunderts, berichtet, wie die Evangelien entstanden: Markus habe aufgeschrieben, was Petrus lehrte. Er gehörte zur Generation, die noch Schüler der Apostel befragen konnte. Zwischen Ereignis und schriftlicher Fixierung liegen hier Jahrzehnte – bei den kanonischen Hadith-Sammlungen sind es etwa zwei Jahrhunderte.`,
      sources: [
        { kind: 'kirchenvater', author: 'Eusebius von Caesarea', work: 'Kirchengeschichte', ref: 'III,39,15', year: 'um 325', quote: `Papias überliefert vom „Presbyter", Markus sei der Dolmetscher des Petrus gewesen und habe dessen Erinnerungen sorgfältig aufgeschrieben.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'qureshi',
      role: 'als ehemaliger Muslim und Kenner der Hadith-Literatur',
      text: `Qureshi beschreibt in seiner Autobiografie, wie er als frommer Ahmadi-Muslim die Hadithe für gesichert hielt – bis er die Daten nachprüfte: Die frühesten erhaltenen Biografien und Sammlungen stammen aus der Zeit weit nach Mohammed, und vieles, was er über den Propheten „wusste", stand erst dort. Für ihn wurde entscheidend, dass Muslime die Evangelien wegen eines Abstands von wenigen Jahrzehnten verwerfen, die Hadithe aber trotz eines Abstands von Jahrhunderten annehmen.`,
      sources: [
        { kind: 'fachliteratur', author: 'Nabeel Qureshi', work: 'Seeking Allah, Finding Jesus', year: '2014', quote: `Bericht über die Entdeckung des großen Zeitabstands zwischen Mohammed und den Quellen über ihn.`, status: 'paraphrase' },
        { kind: 'fachliteratur', author: 'Nabeel Qureshi', work: 'No God but One: Allah or Jesus?', year: '2016', quote: `Vergleich der historischen Quellenlage für Jesus und Mohammed.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'gabriel-reynolds',
      role: 'als Koranforscher',
      text: `Reynolds weist darauf hin, dass die klassische Exegese den Koran fast immer durch Berichte aus Hadith und Sira deutet – die sogenannten „Offenbarungsanlässe" (*asbāb an-nuzūl*). Viele dieser Berichte sind jedoch selbst spätere Deutungen, die aus dem Korantext herausgesponnen wurden. Wer den Koran historisch verstehen will, darf die späte Tradition nicht ungeprüft als Augenzeugenbericht nehmen.`,
      sources: [
        { kind: 'fachliteratur', author: 'Gabriel Said Reynolds', work: 'The Qur\'an and Its Biblical Subtext', year: '2010', quote: `Die exegetische Tradition ist oft eher Interpretation als historische Erinnerung; der Koran sollte im Gespräch mit der biblischen Tradition gelesen werden.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'jay-smith',
      role: 'als Kenner der revisionistischen Forschung',
      text: `Jay Smith stellt in öffentlichen Debatten immer wieder dieselbe Frage: Welche erhaltene Handschrift einer Hadith-Sammlung oder Sira stammt aus dem ersten Jahrhundert nach Mohammed? Er verweist auf Forscher wie Patricia Crone und Joseph Schacht. Fair ist zu ergänzen, dass Smith die radikalsten Thesen der Revisionisten nicht alle teilen muss – seine Kernfrage nach dem Zeitabstand bleibt aber berechtigt.`,
    },
  ],
  dialog: [
    {
      id: 'einzigartige-methode',
      objection: `Keine Religion hat ein so strenges Prüfsystem wie die Isnad-Wissenschaft. Jeder Überlieferer wurde biografisch erfasst und bewertet. Das ist Wissenschaft, während ihr Christen nicht einmal wisst, wer eure Evangelien geschrieben hat.`,
      objectionBy: 'Mohammed Hijab',
      targetsPremise: 2,
      answer: `Die Isnad-Wissenschaft verdient Respekt – sie ist eine echte Leistung muslimischer Gelehrsamkeit. Aber die Frage ist nicht, ob die Methode ausgefeilt ist, sondern *wann* sie einsetzte und *was* sie erkennen kann. Sie entstand, als bereits massenhaft gefälscht wurde, und sie prüft vor allem den Ruf der Überlieferer. Einen erfundenen Text, der an eine angesehene Kette gehängt wurde, kann sie kaum entdecken.`,
      detail: `Die systematische Überlieferer-Kritik entwickelte sich im 2. Jahrhundert n. H. Ein bekannter Ausspruch, der Ibn Sirin (gest. 728) zugeschrieben wird, lautet sinngemäß: Früher fragte man nicht nach dem Isnad; als aber die *fitna* (der Bürgerkrieg) kam, sagte man: „Nennt uns eure Männer." Das zeigt: Die Kettenprüfung entstand als Reaktion auf eine Krise der Glaubwürdigkeit – nicht als Ursprungsmerkmal.`,
      sources: [
        { kind: 'hadith', author: 'Muslim ibn al-Hajjaj', work: 'Sahih Muslim, Einleitung (Muqaddima)', ref: 'Kapitel über den Isnad', quote: `Ibn Sirin: Man fragte früher nicht nach dem Isnad; als die Fitna ausbrach, sagte man: „Nennt uns eure Gewährsleute."`, status: 'paraphrase', note: 'Bekannter Ausspruch in der Einleitung zu Sahih Muslim; genaue Abschnittsnummer je nach Ausgabe verschieden.' },
      ],
      questionsBack: [
        `Ab wann wurde der Isnad systematisch geprüft – und wie viele Jahre nach Mohammed war das?`,
      ],
      followUps: [
        {
          id: 'bukhari-600000',
          objection: `Gerade die Strenge beweist die Zuverlässigkeit: Al-Bukhari prüfte 600.000 Berichte und nahm nur etwa 2.600 auf. Wer so streng aussortiert, dem kann man vertrauen.`,
          objectionBy: 'Yasir Qadhi',
          targetsPremise: 2,
          answer: `Das Argument schneidet in beide Richtungen. Wenn im 9. Jahrhundert ein so riesiger Bestand umlief, aus dem nur ein Bruchteil als gesichert galt, zeigt das zuerst, wie verunreinigt der Pool war. Ein Filter, der 200 Jahre später angewendet wird und vor allem nach dem Ruf der Überlieferer urteilt, kann keine Gewissheit über Worte aus dem Jahr 620 herstellen. Und spätere muslimische Kritiker wie ad-Daraqutni haben sogar an Hadithen in Bukhari und Muslim Kritik geübt.`,
          detail: `Die Zahl 600.000 stammt aus der biografischen Überlieferung über al-Bukhari; moderne Zählungen kommen für das *Ṣaḥīḥ* auf etwa 7.400–7.600 Berichte mit Wiederholungen und rund 2.600 ohne. Ad-Daraqutni (gest. 995) verfasste mit *al-Ilzāmāt wa-t-Tatabbuʿ* eine Kritik an rund 200 Berichten der beiden Sahihs; Jonathan Brown hat die Kanonisierung von Bukhari und Muslim ausführlich untersucht.`,
          sources: [
            { kind: 'gegner', author: 'Jonathan A. C. Brown', work: 'The Canonization of al-Bukhārī and Muslim', year: '2007', quote: `Die beiden Sahihs wurden erst im Lauf des 10./11. Jahrhunderts zu kanonischen Autoritäten; frühe Gelehrte wie ad-Daraqutni kritisierten einzelne Berichte.`, status: 'paraphrase' },
          ],
          followUps: [
            {
              id: 'wiederholungen-varianten',
              objection: `Die 600.000 umfassen Wiederholungen und Varianten – jede Kette zählt als eigener Hadith. Das ist kein Beleg für massenhafte Fälschung.`,
              objectionBy: 'Jonathan A. C. Brown',
              targetsPremise: 2,
              answer: `Einverstanden – die Zahl zählt Ketten, nicht verschiedene Inhalte. Ich brauche die Zahl auch nicht. Die massenhafte Fälschung bezeugen muslimische Gelehrte selbst: Muslim zitiert in seiner Einleitung Yahya ibn Saʿid al-Qattan, man sehe die Frommen in nichts so unzuverlässig wie beim Hadith. Ibn al-Jawzi füllte mit *al-Mawḍūʿāt* ganze Bände mit erfundenen Hadithen. Das Problem ist also keine westliche Erfindung.`,
              sources: [
                { kind: 'hadith', author: 'Muslim ibn al-Hajjaj', work: 'Sahih Muslim, Einleitung (Muqaddima)', ref: 'Kapitel über die Mängel der Überlieferer', quote: `Yahya ibn Saʿid al-Qattan: Wir haben die Frommen in nichts so lügenhaft gesehen wie im Hadith. Muslim erläutert: Die Unwahrheit läuft ihnen über die Zunge, ohne dass sie lügen wollen.`, status: 'paraphrase', url: 'https://sunnah.com/muslim/introduction/39', note: 'Übersetzungen variieren; Muslim deutet den Satz als Unachtsamkeit frommer Leute, nicht als bewusste Fälschung.' },
                { kind: 'hadith', author: 'Ibn al-Jawzi', work: 'Kitab al-Mawdu\'at', year: '12. Jh.', quote: `Mehrbändige Sammlung von Hadithen, die der Verfasser als erfunden einstuft.`, status: 'paraphrase' },
              ],
              followUps: [
                {
                  id: 'faelscher-entlarvt',
                  objection: `Ja, es gab Fälscher – aber sie wurden entlarvt. Genau dafür gibt es die Rijal-Kritik. Das System hat funktioniert.`,
                  objectionBy: 'Mohammed Hijab',
                  targetsPremise: 2,
                  answer: `Entlarvt wurden die Fälscher, die *bekannt* wurden. Die Frage ist, wie viele Fälschungen mit guten Ketten durchgerutscht sind. Juynboll zeigte, dass viele Hadithe auf ein einziges „gemeinsames Glied" im 2. Jahrhundert zulaufen und erst von dort aus breit werden – die Strecke bis zum Propheten ist oft eine dünne Einzelkette. Und die Urteile über dieselben Überlieferer gehen zwischen den Kritikern weit auseinander.`,
                  detail: `Ein Beispiel: Den Medinenser Hisham ibn ʿUrwa (gest. 763) hielten frühe Kritiker für zuverlässig – für seine späten Überlieferungen im Irak gab es jedoch Vorbehalte. Gerade über ihn läuft der Bericht über Aischas Heiratsalter (siehe Claim „Aischas Heiratsalter war damals normal"). Moderne muslimische Revisionisten, die diesen Bericht ablehnen, bestätigen damit unfreiwillig, dass Fehler mit „authentischer" Kette in beide Sahihs gelangen konnten.`,
                  sources: [
                    { kind: 'fachliteratur', author: 'G. H. A. Juynboll', work: 'Muslim Tradition: Studies in Chronology, Provenance and Authorship of Early Hadith', year: '1983', quote: `Viele Überlieferungen zeigen ein „gemeinsames Glied" in der Generation nach den Nachfolgern; dieser Überlieferer ist oft als eigentlicher Urheber des Wortlauts anzusehen.`, status: 'paraphrase' },
                  ],
                  questionsBack: [
                    `Wenn eine Fälschung an eine Kette angesehener Männer gehängt wurde – mit welchem Kriterium hätte al-Bukhari das sicher erkennen können?`,
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'gefaehrten-alle-gerecht',
          objection: `Die Prophetengefährten waren alle gerecht und vertrauenswürdig (*ʿudūl*). Gott selbst hat sie im Koran gelobt (9:100). Deshalb sind ihre Berichte gesichert.`,
          objectionBy: 'sunnitische Hadith-Lehre',
          targetsPremise: 2,
          answer: `Das ist eine theologische Voraussetzung, kein historisches Ergebnis. Die Gefährten führten Bürgerkriege gegeneinander – in der Kamelschlacht stand Aischa gegen ʿAli, in Siffin ʿAli gegen Muʿawiya. Wenn das System nur funktioniert, weil man vorher glaubt, dass alle Gefährten vertrauenswürdig waren, dann beruht es auf Glauben, nicht auf Geschichtswissenschaft.`,
          followUps: [
            {
              id: 'schia-abweichung',
              objection: `Die Schiiten sind eine Abweichung. Die Sunniten repräsentieren den Konsens der Umma.`,
              objectionBy: 'Mohammed Hijab',
              answer: `Mir geht es nicht darum, wer recht hat. Entscheidend ist: Dieselbe Methode – Isnad und Überlieferer-Kritik – führte bei Sunniten und Schiiten zu zwei unvereinbaren Korpora (die „Sechs Bücher" hier, *al-Kāfī* und andere Werke dort). Wenn die Ergebnisse von der Vorentscheidung abhängen, welche Gefährten man für glaubwürdig hält, ist die Methode nicht neutral.`,
              followUps: [
                {
                  id: 'christen-auch-vorannahmen',
                  objection: `Auch ihr Christen habt Vorannahmen: Ihr glaubt, dass der Heilige Geist die Kirche geführt hat, und nehmt deshalb eure Evangelien an.`,
                  objectionBy: 'Shabir Ally',
                  answer: `Richtig – jeder hat Vorannahmen, und ich verberge meine nicht. Aber ich behaupte nicht, eine *historische Methode* garantiere jedes Jesuswort. Ich zeige, dass die Evangelien aus der Generation der Augenzeugen stammen und dass Kernereignisse wie die Kreuzigung auch von Nichtchristen bezeugt sind (Tacitus, Josephus). Die Behauptung „Isnad = wissenschaftliche Gewissheit" ist dagegen genau das, was hier zur Prüfung steht.`,
                  questionsBack: [
                    `Welche nichtmuslimische Quelle aus dem 7. Jahrhundert bestätigt eine Einzelheit aus den Hadithen?`,
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'motzki-widerlegt-schacht',
      objection: `Schacht ist längst widerlegt. Harald Motzki hat gezeigt, dass Hadith-Material bis ins erste islamische Jahrhundert zurückreicht. Die westliche Skepsis ist erledigt.`,
      objectionBy: 'Jonathan A. C. Brown',
      targetsPremise: 2,
      answer: `Motzki ist ein seriöser Forscher und hat Schachts Pauschalthese tatsächlich erschüttert – das gestehe ich gern zu. Aber was hat er gezeigt? Dass Rechtsüberlieferungen im *Muṣannaf* des ʿAbd ar-Razzaq auf Gelehrte wie ʿAta ibn Abi Rabah (gest. um 732) zurückgehen – also auf die Generation *nach* den Gefährten, gut 70 bis 100 Jahre nach Mohammed. Das ist früher als Schacht dachte, aber keine Garantie für Prophetenworte. Motzki selbst hat das nie behauptet.`,
      followUps: [
        {
          id: 'siebzig-jahre-wie-evangelien',
          objection: `70 Jahre – das ist nicht schlimmer als bei euren Evangelien. Johannes wurde auch erst 60 bis 70 Jahre nach Jesus geschrieben.`,
          objectionBy: 'Shabir Ally',
          answer: `Der Vergleich trägt nicht: Die Paulusbriefe entstanden 20–30 Jahre nach Jesus und zitieren ein Bekenntnis, das noch älter ist (1 Kor 15,3–7); Markus etwa 35–40 Jahre danach. Das sind zusammenhängende Schriften aus der Generation der Zeugen, keine Einzelberichte, die erst im 9. Jahrhundert gesammelt wurden. Vor allem aber: Der Islam beansprucht die Sunna als göttlich geleitete Rechtsquelle, nach der man Apostaten tötet und Ehebrecher steinigt. Eine Quelle für unwiderrufliche Strafen braucht einen *höheren*, nicht einen niedrigeren Maßstab.`,
          followUps: [
            {
              id: 'zweierlei-mass',
              objection: `Du misst mit zweierlei Maß. Bei euren anonymen Evangelien akzeptierst du Unsicherheit, aber von den Hadithen verlangst du Gewissheit.`,
              objectionBy: 'Mohammed Hijab',
              answer: `Nein – ich wende dieselben historischen Kriterien an: Nähe zum Ereignis, Augenzeugenschaft, mehrfache unabhängige Bezeugung, Peinlichkeit, äußere Bestätigung. Nicht ich verlange Gewissheit von den Hadithen, sondern die islamische Lehre *behauptet* sie, wenn sie ein Hadith als *ṣaḥīḥ* zur Grundlage von Todesurteilen macht. Ich prüfe nur diese Behauptung.`,
              detail: `Zur Verfasserschaft der Evangelien: Die frühe Kirche schrieb sie einhellig Matthäus, Markus, Lukas und Johannes zu; Papias (frühes 2. Jh.) und Irenäus (um 180) bezeugen die Zuschreibungen. Siehe Claim „Die Evangelien wurden spät und von anonymen Autoren geschrieben".`,
              followUps: [
                {
                  id: 'fruehe-sahifas',
                  objection: `Es gab sehr frühe schriftliche Sammlungen – etwa die *Ṣaḥīfa* des Hammam ibn Munabbih von Abu Huraira aus dem 1. Jahrhundert. Al-Azami hat gezeigt, dass Hadithe von Anfang an aufgeschrieben wurden.`,
                  objectionBy: 'Muhammad Mustafa al-Azami',
                  answer: `Zugestanden: Es gab frühe Notizen, und die *Ṣaḥīfa* des Hammam (rund 140 Berichte) ist ein wichtiges Zeugnis; Nabia Abbott hat frühe Papyri mit Hadith-Material untersucht. Aber eine Sammlung von rund 140 Berichten deckt nicht die Tausenden anderen ab, auf denen Recht und Sira beruhen. Und Muslim überliefert selbst, dass der Prophet geboten haben soll, außer dem Koran nichts von ihm aufzuschreiben – die frühe Schriftlichkeit war also gerade umstritten.`,
                  sources: [
                    { kind: 'hadith', work: 'Sahih Muslim', ref: '3004', quote: `„Schreibt nichts von mir auf außer dem Koran; wer etwas anderes als den Koran von mir aufgeschrieben hat, soll es tilgen."`, status: 'paraphrase', note: 'Bericht des Abu Saʿid al-Khudri; von Gelehrten unterschiedlich gedeutet (zeitlich begrenzt, später aufgehoben).' },
                    { kind: 'fachliteratur', author: 'Nabia Abbott', work: 'Studies in Arabic Literary Papyri II: Qur\'anic Commentary and Tradition', year: '1967', quote: `Papyrusbefunde zeigen schriftliche Hadith-Notizen schon im 8. Jahrhundert.`, status: 'paraphrase' },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'schacht-agenda',
          objection: `Schacht und Goldziher hatten eine Agenda – sie wollten den Islam als Fälschung darstellen. Das ist Orientalismus im Sinne Edward Saids.`,
          objectionBy: 'Mohammed Hijab',
          answer: `Das ist ein Argument gegen Personen, nicht gegen Belege. Außerdem kam auch der muslimische Gelehrte Fazlur Rahman (*Islamic Methodology in History*, 1965) zu dem Schluss, dass ein großer Teil der Hadithe die „lebendige Tradition" der frühen Gemeinden spiegelt und erst später dem Propheten zugeschrieben wurde. Die Frage bleibt: Was zeigen die Daten?`,
          detail: `Siehe ausführlich Claim „Goldziher, Schacht und die Revisionisten sind voreingenommene Orientalisten".`,
          sources: [
            { kind: 'fachliteratur', author: 'Fazlur Rahman', work: 'Islamic Methodology in History', year: '1965', quote: `Die Hadith-Literatur ist weitgehend die verbalisierte Form der „lebendigen Sunna" der frühen Gemeinden; ihr Ursprung beim Propheten ist im Einzelnen nicht gesichert.`, status: 'paraphrase', note: 'Fazlur Rahman (1919–1988) war gläubiger Muslim und Professor in Chicago.' },
          ],
        },
      ],
    },
    {
      id: 'dann-auch-koran-ablehnen',
      objection: `Wenn du die mündliche Überlieferung der Hadithe ablehnst, musst du auch den Koran ablehnen – denn auch er wurde durch dieselben Menschen mündlich weitergegeben.`,
      objectionBy: 'Mohammed Hijab',
      targetsPremise: 3,
      answer: `Genau das ist das Problem – aber es ist deines, nicht meines. Die Geschichte, wie der Koran gesammelt wurde (Abu Bakr, ʿUthman, das Verbrennen abweichender Exemplare), steht in den Hadithen (Bukhari 4986, 4987). Ich kann Koranhandschriften direkt untersuchen. Aber wer sagt, ohne Hadithe falle auch der Koran, gibt zu: Der Koran hängt an derselben Überlieferung, deren Zuverlässigkeit wir gerade prüfen.`,
      sources: [
        { kind: 'hadith', work: 'Sahih al-Bukhari', ref: '4987', quote: `ʿUthman ließ Abschriften des Korans in die Provinzen senden und befahl, alle anderen Koranmaterialien zu verbrennen.`, status: 'paraphrase', url: 'https://sunnah.com/bukhari:4987' },
      ],
      followUps: [
        {
          id: 'koran-mutawatir-hadith-ahad',
          objection: `Der Koran ist *mutawātir* – von Massen überliefert. Die meisten Hadithe sind *āḥād*, Einzelüberlieferungen. Das ist ein klarer Unterschied.`,
          objectionBy: 'klassische Usul-Lehre',
          targetsPremise: 2,
          answer: `Dann gibst du zu, dass die meisten Hadithe nach eurer eigenen Lehre nur *wahrscheinliches* Wissen (*ẓann*) liefern. Trotzdem stützt das klassische Recht darauf unwiderrufliche Strafen – den Tod des Apostaten, die Steinigung. Kann man ein Menschenleben auf eine Wahrscheinlichkeit gründen?`,
          followUps: [
            {
              id: 'apostasie-durch-konsens',
              objection: `Die Apostasie-Strafe ist nicht nur durch ein Hadith, sondern durch viele Überlieferungen und den Konsens (*ijmāʿ*) aller Rechtsschulen gesichert.`,
              objectionBy: 'klassische Rechtsgelehrte',
              targetsPremise: 2,
              answer: `Dann ist sie authentische Sunna – und du musst sie als Teil des vollkommenen Vorbilds für alle Zeiten verteidigen. Genau das ist das Hadith-Dilemma: Entweder ist das System zuverlässig, dann gilt Bukhari 6922 mit all seinen Folgen. Oder es ist unzuverlässig, dann fehlt dem Islam seine Praxis. Einen dritten Weg, bei dem nur die angenehmen Hadithe gelten, gibt es methodisch nicht.`,
              followUps: [
                {
                  id: 'kontextualisieren',
                  objection: `Wir können die Hadithe kontextualisieren. Die Apostasie-Strafe galt dem Hochverrat – Bukhari 6878 spricht von dem, der „die Gemeinschaft verlässt".`,
                  objectionBy: 'Shabir Ally',
                  answer: `Diesen Reformimpuls begrüße ich von Herzen. Aber beachte den Preis: Bukhari 6922 enthält keinen Hinweis auf Hochverrat, und alle vier sunnitischen Rechtsschulen haben den Abfall *als solchen* bestraft. Wer das neu deutet, korrigiert den Konsens von 1.200 Jahren – und gibt damit zu, dass die Überlieferung nicht von selbst „gesichert" ist, sondern von heutigen Lesern zurechtgerückt werden muss.`,
                  detail: `Siehe ausführlich Claim „Die Scharia ist eine gerechte Ordnung".`,
                  sources: [
                    { kind: 'hadith', work: 'Sahih al-Bukhari', ref: '6878', quote: `Das Blut eines Muslims ist nur in drei Fällen erlaubt: Leben um Leben, der verheiratete Ehebrecher und wer seine Religion verlässt und sich von der Gemeinschaft trennt.`, status: 'paraphrase', url: 'https://sunnah.com/bukhari:6878' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'sunna-auch-bewahrt',
      objection: `Gott hat nicht nur den Koran, sondern auch die Sunna bewahrt. „Wir haben die Ermahnung (*adh-dhikr*) herabgesandt, und Wir werden sie bewahren" (15:9) – das schließt die Sunna ein.`,
      objectionBy: 'salafitische Gelehrte',
      targetsPremise: 2,
      answer: `Wenn Gott die Sunna bewahrt hat, warum konnten dann so viele Fälschungen entstehen, dass Muslime ganze Bände mit erfundenen Hadithen füllten? Und warum haben Sunniten und Schiiten eine verschiedene Sunna? Eine Bewahrung, die erst nach 200 Jahren menschlicher Siebung zustande kommt und bis heute umstritten bleibt, ist nicht die Art Bewahrung, die behauptet wird.`,
      followUps: [
        {
          id: 'bewahrung-durch-gelehrte',
          objection: `Bewahrung heißt eben: Gott hat Gelehrte geschickt, die Echtes vom Falschen trennten. Das ist Gottes Vorsehung durch Menschen.`,
          objectionBy: 'Yasir Qadhi',
          answer: `Dann ist die Bewahrung ein fehlbarer menschlicher Prozess – und er führt bis heute zu verschiedenen Urteilen. Ein Beispiel: Den Bericht „Ein Mann wird nicht gefragt, warum er seine Frau geschlagen hat" (Abu Dawud 2147) stufte al-Albani als schwach ein, Zubair ʿAli Zai als gut (*ḥasan*). Dieselbe Wissenschaft, entgegengesetzte Urteile – bei einer Frage, die Frauen ganz konkret betrifft.`,
          sources: [
            { kind: 'hadith', work: 'Sunan Abi Dawud', ref: '2147', quote: `„Ein Mann wird nicht gefragt werden, weshalb er seine Frau geschlagen hat."`, status: 'paraphrase', url: 'https://sunnah.com/abudawud:2147', note: 'Al-Albani: schwach (ḍaʿīf); Zubair ʿAli Zai: ḥasan.' },
          ],
          followUps: [
            {
              id: 'nur-randfragen',
              objection: `Uneinigkeit in Randfragen ändert nichts am Kern. Das Wesentliche ist gesichert.`,
              objectionBy: 'Mohammed Hijab',
              answer: `Es sind keine Randfragen: Wortlaut und Form des Gebets, Erbrecht, Strafrecht, Apostasie, Steinigung, Aischas Alter, die Biografie des Propheten, die Anlässe der Offenbarung – der „Kern" der islamischen Praxis kommt aus den Hadithen. Frag ehrlich zurück: Welche Hadithe sind *gesichert*, und nach welchem Kriterium, das nicht schon voraussetzt, was es beweisen soll?`,
              followUps: [
                {
                  id: 'christen-tradition-auch',
                  objection: `Ihr Christen habt dasselbe Problem – ihr verlasst euch auf die Kirchenväter und eure Tradition, gerade ihr Orthodoxen.`,
                  objectionBy: 'Shabir Ally',
                  answer: `Die Kirche behauptet nicht, dass die Väter wörtliche Offenbarung seien. Unsere Grundlage ist das apostolische Zeugnis des Neuen Testaments aus dem 1. Jahrhundert; Väter und Liturgie legen es aus, sie ersetzen es nicht. Zudem sind die Kernereignisse – Kreuzigung unter Pilatus, die Verehrung Christi durch die frühen Christen – auch außerchristlich bezeugt (Tacitus, Annalen 15,44; Plinius, Briefe 10,96). Für die Einzelheiten aus Mohammeds Leben gibt es kaum Vergleichbares.`,
                  sources: [
                    { kind: 'sonstiges', author: 'Tacitus', work: 'Annalen', ref: '15,44', year: 'um 116', quote: `Christus wurde unter Tiberius vom Prokurator Pontius Pilatus hingerichtet.`, status: 'paraphrase' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'matn-kritik-gab-es',
      objection: `Es ist falsch, dass nur Ketten geprüft wurden. Es gab auch Textkritik: Aischa korrigierte Abu Huraira, und die Gelehrten lehnten Hadithe ab, die dem Koran oder der Vernunft widersprachen.`,
      objectionBy: 'Jonathan A. C. Brown',
      targetsPremise: 2,
      answer: `Zugestanden – Brown hat gezeigt, dass es Inhaltskritik gab. Aber sie blieb zweitrangig. Sonst stünden in den Sahihs nicht Berichte, mit denen selbst muslimische Gelehrte heute ringen, etwa der Bericht über das „Stillen eines Erwachsenen" (Muslim 1453), der 2007 in Ägypten heftige Debatten auslöste. Entweder solche Berichte sind echt – dann hat das Problem der Prophet selbst geschaffen – oder sie sind trotz Inhaltskritik durchgerutscht.`,
      sources: [
        { kind: 'gegner', author: 'Jonathan A. C. Brown', work: 'Misquoting Muhammad: The Challenge and Choices of Interpreting the Prophet\'s Legacy', year: '2014', quote: `Die klassischen Gelehrten prüften auch den Inhalt der Hadithe; Inhaltskritik war Teil des Systems, auch wenn sie anders funktionierte als moderne historische Kritik.`, status: 'paraphrase' },
        { kind: 'hadith', work: 'Sahih Muslim', ref: '1453', quote: `Bericht über Sahla bint Suhayl und Salim: Der Prophet habe ihr geraten, den erwachsenen Salim zu stillen, damit er für sie als Mahram gelte.`, status: 'paraphrase', note: 'Klassisch meist als Sonderfall gedeutet; 2007 löste ein Gutachten eines al-Azhar-Gelehrten dazu einen Skandal aus.' },
      ],
      followUps: [
        {
          id: 'sonderfall-erklaerung',
          objection: `Das war eine Ausnahmeregelung nur für Salim. Die Gelehrten haben das immer so verstanden – es ist kein Problem.`,
          objectionBy: 'klassische Mehrheitsmeinung',
          answer: `Möglich – ich will den Bericht nicht ins Lächerliche ziehen. Mein Punkt ist ein methodischer: Schon die Frühzeit stritt darüber (Aischa soll die Regel weiter verstanden haben als die anderen Frauen des Propheten). Wenn selbst „authentische" Berichte erklärt, eingeschränkt und umgedeutet werden müssen, dann ist die Isnad-Prüfung kein Endpunkt, sondern der Beginn einer Auslegungsdebatte.`,
          followUps: [
            {
              id: 'gleiches-gilt-fuer-bibel',
              objection: `Auch die Bibel muss ausgelegt werden. Jeder Text braucht Auslegung – das ist kein Argument gegen die Hadithe.`,
              objectionBy: 'Shabir Ally',
              answer: `Richtig, jeder Text braucht Auslegung. Aber die These hieß: Die Hadithe sind *gesichert*. Wer zugibt, dass auch die gesicherten Hadithe im Ergebnis umstritten, umgedeutet und teilweise nur Wahrscheinlichkeitswissen sind, hat die These aufgegeben. Dann sollten wir ehrlich sagen: Wir wissen über die Worte Mohammeds weit weniger sicher Bescheid, als die islamische Lehre beansprucht.`,
              questionsBack: [
                `Würdest du dein Leben darauf verwetten, dass Bukhari 6922 Mohammeds eigene Worte sind? Und wenn ja – würdest du die Strafe heute vollstrecken?`,
              ],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wie viele Jahre liegen zwischen Mohammeds Tod und der ältesten erhaltenen Hadith-Sammlung?`,
    `Wenn al-Bukhari zuverlässig ist – warum nimmst du dann Bukhari 6922 (Apostasie) nicht wörtlich?`,
    `Wenn du einzelne Sahih-Hadithe ablehnst – nach welchem Kriterium, das du nicht nur auf peinliche Berichte anwendest?`,
    `Woher weißt du, wie der Koran gesammelt wurde, wenn nicht aus den Hadithen?`,
    `Warum ergibt dieselbe Methode bei Sunniten und Schiiten zwei verschiedene Korpora?`,
  ],
  avoid: [
    `Nicht behaupten, „alle Hadithe sind Fälschungen" – das ist unhaltbar und lässt sich mit Motzki und Brown leicht kontern. Bleib bei Zeitabstand, Selbstauskunft der Muslime und dem Dilemma.`,
    `Nicht die Leistung der muslimischen Gelehrten verspotten. Die Isnad-Wissenschaft war für ihre Zeit bemerkenswert; Respekt öffnet das Gespräch.`,
    `Nicht mit der Zahl 600.000 als „Beweis für Fälschung" argumentieren – sie zählt Ketten und Varianten.`,
    `Nicht so tun, als stünden Christen ohne eigene Überlieferungsfragen da. Gib zu, dass auch die Evangelien historisch geprüft werden müssen – und zeige, dass sie die Prüfung besser bestehen.`,
  ],
  concessions: [
    `Die Isnad- und Rijal-Wissenschaft war eine bemerkenswerte kritische Leistung, und muslimische Gelehrte haben selbst viele Fälschungen aufgedeckt.`,
    `Harald Motzki hat gezeigt, dass Schachts Spätdatierung so pauschal nicht haltbar ist; manches Material reicht bis ins späte 1. Jahrhundert n. H.`,
    `Es gab früh schriftliche Hadith-Notizen (z. B. die Ṣaḥīfa des Hammam ibn Munabbih).`,
  ],
  furtherReading: [
    { kind: 'gegner', author: 'Jonathan A. C. Brown', work: 'Hadith: Muhammad\'s Legacy in the Medieval and Modern World', year: '2009', status: 'paraphrase', note: 'Die beste muslimische Gegenposition – fair und gelehrt.' },
    { kind: 'fachliteratur', author: 'Harald Motzki (Hg.)', work: 'Hadith: Origins and Developments', year: '2004', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'G. H. A. Juynboll', work: 'Muslim Tradition', year: '1983', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Nabeel Qureshi', work: 'No God but One: Allah or Jesus?', year: '2016', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Richard Bauckham', work: 'Jesus and the Eyewitnesses', year: '2006', status: 'paraphrase', note: 'Zum Vergleich: Augenzeugenschaft in den Evangelien.' },
  ],
  difficulty: 3,
  tags: ['Islam', 'Hadith', 'Isnad', 'Überlieferung', 'Quellenkritik', 'Dilemma'],
  related: [
    'islam-hadith-sira/quranisten-nur-koran',
    'islam-hadith-sira/orientalisten-vorurteil',
    'islam-hadith-sira/sira-vorbildlicher-charakter',
    'islam-koran/koran-perfekt-bewahrt',
    'islam-gewalt-scharia/scharia-gerecht',
    'islam-frauen-familie/aischa-alter',
    'neues-testament/evangelien-spaet-anonym',
    'neues-testament/stille-post',
  ],
};

export default claim;
