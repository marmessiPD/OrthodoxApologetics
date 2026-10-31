import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'injil-ist-nicht-das-nt',
  title: `„Das Injil ist nicht das Neue Testament, sondern ein verlorenes Buch Jesu."`,
  proponents: [
    { name: 'Shabir Ally', role: 'Islamischer Apologet, Let the Quran Speak', work: 'Debatten über Injil und Evangelien' },
    { name: 'Ali Ataie', role: 'Islamwissenschaftler, Zaytuna College', work: 'Vorträge über das Injil im Koran' },
    { name: 'Ahmed Deedat', role: 'Islamischer Apologet (1918–2005), Südafrika', work: 'Is the Bible God\'s Word? (1980)' },
    { name: 'Ibn Hazm', role: 'Andalusischer Gelehrter (994–1064)', work: 'al-Fisal: Die Evangelien als vier von Menschen verfasste Geschichtswerke' },
  ],
  steelman: `„Der Koran sagt: ‚Wir gaben ihm (Jesus) das Injil' (5:46; 57:27) – genauso wie Mose die Tora gegeben wurde. Das Injil ist also ein Buch, das Gott Jesus offenbarte, in Gottes eigener Rede. Eure vier Evangelien sind dagegen Biografien: Sie berichten in der dritten Person *über* Jesus, wurden Jahrzehnte nach ihm auf Griechisch verfasst und erzählen sogar von seinem Tod – also können sie nicht das Buch sein, das Jesus zu Lebzeiten gegeben wurde. Lukas sagt selbst, er habe recherchiert (Lk 1,1–4). Das ursprüngliche Injil Jesu ist verloren; vielleicht sind Reste davon in den Worten Jesu erhalten, die die Forscher der Logienquelle Q zuschreiben. Der Koran bestätigt dieses ursprüngliche Injil – nicht das Neue Testament."`,
  biblical: {
    summary: `Im Neuen Testament ist „das Evangelium" (*euangelion*, „frohe Botschaft") die Botschaft, die Jesus verkündete und die die Apostel weitergaben: „Tut Buße und glaubt an das Evangelium" (Mk 1,15). Diese Botschaft wurde von Aposteln und ihren Schülern schriftlich festgehalten – „das Evangelium nach Matthäus, Markus, Lukas, Johannes" meint *ein* Evangelium in vierfacher Gestalt. Ein von Jesus selbst geschriebenes oder ihm diktiertes Buch kennt keine einzige Quelle der Antike. Und Paulus fasst „das Evangelium" ausdrücklich zusammen: Christus ist gestorben, begraben und auferstanden (1 Kor 15,1–4).`,
    detail: `Das arabische *injīl* ist ein Lehnwort aus dem griechischen *euangelion* (vermittelt über syrisch *ewangeliyon* bzw. äthiopisch *wangel*). Als der Koran das Wort benutzte, verstanden Christen in Arabien, Äthiopien, Syrien und Ägypten darunter ihre Evangelienbücher. Der Koran beschreibt nirgends ein anderes Buch, wirft den Christen nie vor, das Injil verloren zu haben, und setzt voraus, dass sie es „bei sich" haben (7:157) und danach richten können (5:47).`,
    sources: [
      { kind: 'bibel', work: 'Markus', ref: '1,1', quote: `Dies ist der Anfang des Evangeliums von Jesus Christus, dem Sohn Gottes.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Markus', ref: '1,14–15', quote: `Jesus kam nach Galiläa, predigte das Evangelium vom Reich Gottes und sprach: Tut Buße und glaubt an das Evangelium.`, translation: 'Luther 1912', status: 'paraphrase' },
      { kind: 'bibel', work: '1. Korinther', ref: '15,1–4', quote: `Paulus erinnert an „das Evangelium", das er verkündet hat: dass Christus gestorben ist für unsere Sünden, begraben wurde und am dritten Tag auferstanden ist.`, translation: 'Luther 1912', status: 'paraphrase' },
      { kind: 'koran', work: 'Sure 7 (al-A\'raf)', ref: '7:157', quote: `… den sie bei sich in der Tora und im Evangelium aufgeschrieben finden.`, original: `yajidūnahu maktūban ʿindahum fī t-tawrāti wa-l-injīl`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/7/157' },
    ],
  },
  church: {
    summary: `Die Kirche hat das Evangelium immer als die eine Botschaft Christi verstanden, die die Apostel erst mündlich verkündeten und dann aufschrieben. Der hl. Irenäus (um 180) spricht vom „viergestaltigen Evangelium", das von einem Geist zusammengehalten wird. Für die koptische Kirche ist der Evangelist Markus der Gründer der Kirche von Alexandrien; sein Evangelium wird in jeder Liturgie verlesen.`,
    sources: [
      { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Adversus Haereses', ref: 'III,1,1', year: 'um 180', quote: `Die Apostel verkündeten das Evangelium zuerst mündlich und überlieferten es dann nach Gottes Willen in Schriften, damit es Grundlage und Säule unseres Glaubens sei.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Adversus Haereses', ref: 'III,11,8', year: 'um 180', quote: `Das Wort hat uns das Evangelium viergestaltig gegeben, zusammengehalten von einem Geist.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Der Koran sagt, die Christen zur Zeit Mohammeds hätten das Injil „bei sich" (7:157) und sollten danach richten (5:47). Das kann sich nur auf ein Buch beziehen, das sie hatten – und sie hatten die vier Evangelien. Ein anderes, „verlorenes" Injil hat nie jemand gesehen, zitiert oder erwähnt. Sogar die früheste muslimische Prophetenbiografie zitiert das Johannesevangelium als „Injil".`,
  keyPoints: [
    `**Das Wort selbst:** *Injil* kommt vom griechischen *euangelion* – dem Namen der christlichen Evangelienbücher.`,
    `**Der Koran setzt Gegenwart voraus:** Die Christen haben das Injil „bei sich" (7:157) und sollen danach richten (5:47; 5:68). Ein verlorenes Buch kann man nicht befolgen.`,
    `**Keine Spur eines anderen Injil:** Keine Handschrift, kein Zitat, kein Kirchenvater, kein Gegner des Christentums kennt ein von Jesus geschriebenes Buch.`,
    `**Frühe Muslime identifizierten das Injil mit den Evangelien:** Ibn Ishaq zitiert Joh 15,23–16,1 als Text „im Injil"; nach Sahih al-Bukhari 3 schrieb Waraqa ibn Naufal „aus dem Injil" ab.`,
    `**Auch das mündliche Evangelium enthält die Kreuzigung:** Paulus' Zusammenfassung des Evangeliums (1 Kor 15,3–4) ist Tod und Auferstehung.`,
  ],
  voices: [
    {
      person: 'irenaeus',
      role: 'als Zeuge der Evangeliensammlung im 2. Jahrhundert',
      text: `Irenäus, Schüler des Polykarp, der wiederum den Apostel Johannes kannte, bezeugt um 180, dass die Kirche genau vier Evangelien besitzt – nicht mehr und nicht weniger – und dass diese das eine Evangelium Christi enthalten. Er beschreibt den Weg von der mündlichen Predigt der Apostel zur schriftlichen Überlieferung. Ein Buch, das Jesus selbst geschrieben hätte, kennt er nicht – und er hätte es, gegen die Gnostiker streitend, gewiss angeführt.`,
      sources: [
        { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Adversus Haereses', ref: 'III,1,1 und III,11,8', year: 'um 180', quote: `Vom mündlichen zum schriftlichen Evangelium; das viergestaltige Evangelium.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'gabriel-reynolds',
      role: 'als Islamwissenschaftler, der den Koran im Gespräch mit der Bibel liest',
      text: `Reynolds zeigt in seinem Kommentar, dass der Koran ständig ein Publikum voraussetzt, das biblische Erzählungen kennt: Er spielt an, statt zu erzählen. Das Injil des Korans ist für dieses Publikum das Evangelium der Kirchen. Die Idee eines ganz anderen, Jesus diktierten Buches ist eine spätere Harmonisierung, die der Koran selbst nicht ausspricht.`,
      sources: [
        { kind: 'fachliteratur', author: 'Gabriel Said Reynolds', work: 'The Qur\'an and the Bible: Text and Commentary', year: '2018', quote: `Der Koran setzt eine mit biblischen Traditionen vertraute Hörerschaft voraus und verweist auf deren Schriften.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'bauckham',
      role: 'als Neutestamentler zur Augenzeugenschaft der Evangelien',
      text: `Bauckham argumentiert, dass die Evangelien eng an die Aussagen benannter Augenzeugen gebunden sind (etwa Petrus hinter Markus). Sie sind keine späten Legenden, sondern Augenzeugenzeugnis in Form antiker Biografie. Gerade diese Form passt zu dem, was das Evangelium ist: Bericht über das, was Gott in Jesus getan hat.`,
      sources: [
        { kind: 'fachliteratur', author: 'Richard Bauckham', work: 'Jesus and the Eyewitnesses', year: '2006 (2. Aufl. 2017)', quote: `Die Evangelien sind Augenzeugenzeugnis, eng mit benannten Zeugen verbunden.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'severus-ibn-al-muqaffa',
      role: 'als koptischer Theologe, der den Glauben auf Arabisch erklärte',
      text: `Severus gehört zu den ersten Kopten, die den christlichen Glauben gegenüber Muslimen auf Arabisch darlegten. In dieser Tradition war selbstverständlich, dass das Injil die Evangelien der Kirche sind – die Muslime, mit denen er sprach, bestritten nicht, *welches* Buch gemeint war, sondern *wie* es auszulegen sei.`,
    },
  ],
  dialog: [
    {
      id: 'wir-gaben-ihm-das-injil',
      objection: `5:46 sagt: „Wir gaben ihm das Injil." Das Injil wurde Jesus gegeben – wie die Tora Mose. Die Evangelien wurden aber nicht Jesus gegeben, sondern von Matthäus, Markus, Lukas und Johannes geschrieben.`,
      objectionBy: 'Shabir Ally',
      answer: `Jesus empfing die frohe Botschaft und verkündete sie; seine Apostel schrieben sie auf. Das ist genau das, was die Evangelien sind. Entscheidend ist: Der Koran wirft den Christen nie vor, das falsche Buch zu haben. Er sagt, sie haben das Injil bei sich und sollen danach richten. Wenn du sagst, das echte Injil ist verloren, dann hat der Koran den Christen ein Buch befohlen, das sie nicht besaßen.`,
      detail: `Das Verb *ātā* („geben") verwendet der Koran auch für Weisheit, Urteil oder Prophetentum (z. B. 19:12 über Johannes: „Wir gaben ihm das Urteil schon als Kind"). Es beschreibt nicht notwendig die literarische Form eines Buches. Die Christen verstanden Jesus selbst als das lebendige Wort Gottes (Joh 1,1.14) – die Evangelien sind das Zeugnis von ihm.`,
      questionsBack: [
        `Kennst du ein einziges historisches Zeugnis – Handschrift, Zitat, Erwähnung – eines Buches, das Jesus offenbart wurde und sich von den Evangelien unterscheidet?`,
      ],
      followUps: [
        {
          id: 'logienquelle-q',
          objection: `Die Forscher selbst rekonstruieren eine Spruchquelle Q – eine Sammlung von Jesusworten ohne Kreuzigung. Das ist vermutlich das ursprüngliche Injil.`,
          objectionBy: 'Ali Ataie',
          answer: `Q ist eine wissenschaftliche Hypothese, keine Handschrift – niemand hat sie je gesehen. Und selbst das rekonstruierte Q lehrt nicht den Islam: Es enthält das Wort Jesu „Alles ist mir übergeben von meinem Vater; und niemand kennt den Sohn denn nur der Vater" (Mt 11,27; Lk 10,22) und Jesus als den kommenden Menschensohn, der richtet. Ein „islamisches" Q gibt es nicht.`,
          detail: `Die Zwei-Quellen-Theorie ist weit verbreitet, aber nicht unbestritten (Farrer-Hypothese: Lukas kannte Matthäus). Dass Q keine Passionsgeschichte enthält, ist eine Folge der Methode (Q = gemeinsamer Stoff von Mt und Lk, der nicht aus Mk stammt) – die Passion stand ja schon bei Markus.`,
          sources: [
            { kind: 'bibel', work: 'Matthäus', ref: '11,27', quote: `Alle Dinge sind mir übergeben von meinem Vater. Und niemand kennet den Sohn denn nur der Vater; und niemand kennet den Vater denn nur der Sohn und wem es der Sohn will offenbaren.`, translation: 'Luther 1912', status: 'verbatim' },
          ],
          followUps: [
            {
              id: 'thomas-evangelium',
              objection: `Dann eben das Thomasevangelium – auch eine Spruchsammlung ohne Kreuzigung, vielleicht älter als die Evangelien.`,
              objectionBy: 'verbreiteter Einwand',
              answer: `Die Mehrheit der Forscher datiert das Thomasevangelium ins 2. Jahrhundert und sieht es von den kanonischen Evangelien abhängig. Und es ist nicht islamisch: Es lehrt geheimes Wissen zur Erlösung, und sein letzter Spruch (114) sagt, eine Frau müsse „männlich" werden, um ins Himmelreich zu kommen. Kein Muslim würde das als Offenbarung annehmen.`,
              detail: `Siehe Topic „Gnosis & Geheimlehren". Die Suche nach einem „verlorenen" Evangelium endet regelmäßig bei Texten, die dem Koran noch weniger entsprechen als das Neue Testament.`,
            },
          ],
        },
      ],
    },
    {
      id: 'evangelien-berichten-tod',
      objection: `Die Evangelien berichten von Jesu Tod und seiner angeblichen Auferstehung. Wie kann ein Buch, das Jesus zu Lebzeiten gegeben wurde, von seinem Tod berichten? Also sind die Evangelien nicht das Injil.`,
      objectionBy: 'Ahmed Deedat',
      answer: `Das setzt voraus, was erst zu beweisen wäre: dass das Injil ein zu Lebzeiten diktiertes Buch war. Der Koran sagt das nicht. Für Christen ist die frohe Botschaft gerade das, was Gott in Jesus getan hat – einschließlich Kreuz und Auferstehung. Und noch einmal: Der Koran verweist die Christen auf das, was sie im 7. Jahrhundert *hatten*. Das waren diese Evangelien.`,
      followUps: [
        {
          id: 'gelehrte-sagen-das-seit-jeher',
          objection: `Muslimische Gelehrte haben immer gesagt, dass die Evangelien nicht das Injil sind. Das ist keine moderne Ausrede.`,
          objectionBy: 'Yasir Qadhi',
          answer: `Die frühesten Quellen sagen etwas anderes: Ibn Ishaq (gest. 767) zitiert in seiner Prophetenbiografie Joh 15,23–16,1 als das, was Jesus „im Injil" gesagt habe. Und nach Sahih al-Bukhari 3 schrieb Waraqa ibn Naufal, der Vetter Khadijas, „aus dem Injil" ab, so viel Gott wollte. Die These vom ganz anderen, verlorenen Buch hat später besonders Ibn Hazm (11. Jh.) systematisch ausgebaut.`,
          detail: `Das Zitat bei Ibn Ishaq folgt einer christlich-palästinisch-aramäischen Fassung des Johannesevangeliums und deutet den Parakleten (*munaḥḥemānā*) auf Mohammed. Ob man diese Deutung teilt oder nicht – die Quelle zeigt, dass die frühe Muslimgemeinde das Johannesevangelium als Injil zitierte. Ibn Hazm bezeichnete die Evangelien dagegen als vier von Menschen verfasste Geschichtswerke.`,
          sources: [
            { kind: 'hadith', author: 'Ibn Ishaq (überliefert von Ibn Hisham)', work: 'Sirat Rasul Allah', year: '8. Jh.', quote: `Zitiert Joh 15,23–16,1 als Text, den Jesus im Injil gegeben habe, und deutet den „Tröster" auf Mohammed.`, status: 'paraphrase', note: 'Englisch: A. Guillaume, The Life of Muhammad (1955).' },
            { kind: 'hadith', work: 'Sahih al-Bukhari', ref: '3', quote: `Waraqa ibn Naufal … schrieb mit hebräischen Buchstaben und schrieb aus dem Injil auf Hebräisch ab, so viel Allah wollte, dass er schreibe.`, status: 'paraphrase', url: 'https://sunnah.com/bukhari:3' },
          ],
        },
      ],
    },
    {
      id: 'paulus-kein-buch',
      objection: `Paulus spricht von „meinem Evangelium", nie von einem Buch. Das Injil war also eine mündliche Botschaft Jesu, die verloren ging, als Paulus seine eigene Lehre verbreitete.`,
      objectionBy: 'Shabir Ally',
      answer: `Gut – dann schauen wir, was Paulus als *das* Evangelium definiert: „dass Christus gestorben ist für unsre Sünden nach der Schrift, und dass er begraben ist, und dass er auferstanden ist am dritten Tage" (1 Kor 15,3–4). Und er sagt, das hätten auch Petrus, Jakobus und die Zwölf so verkündet (1 Kor 15,5–11). Das älteste greifbare Evangelium – mündlich oder schriftlich – ist eine Botschaft über Kreuz und Auferstehung.`,
      detail: `1 Kor 15,3–7 gilt in der Forschung als vorpaulinisches Glaubensbekenntnis, das Paulus „empfangen" hat – nach vielen Forschern wenige Jahre nach der Kreuzigung. Auch Ehrman, Lüdemann und andere skeptische Forscher datieren es sehr früh.`,
      followUps: [
        {
          id: 'paulus-erfand-das',
          objection: `Das ist eben Paulus' Erfindung. Er hat das Evangelium Jesu ersetzt.`,
          objectionBy: 'Shabir Ally',
          answer: `Paulus sagt, er habe es „empfangen" und es sei dasselbe, was die Jerusalemer Apostel predigten; Jakobus, Petrus und Johannes gaben ihm die Hand der Gemeinschaft (Gal 2,9). Und Markus, nach alter Überlieferung Dolmetscher des Petrus, erzählt dieselbe Passion. Wenn du Paulus als Verfälscher siehst, gerätst du außerdem in das zweite Dilemma: Gott versprach, die Nachfolger Jesu siegreich zu machen (61:14; 3:55).`,
          detail: `Siehe die Claims „Paulus hat die Lehre Jesu verfälscht" (Topic „Mohammed und die Bibel") und „Die Jünger Jesu waren Muslime".`,
        },
      ],
    },
    {
      id: 'viele-evangelien',
      objection: `Es gab doch Dutzende Evangelien – Thomas, Petrus, Judas, Maria, Barnabas. Die Kirche hat vier ausgewählt und die anderen unterdrückt. Woher willst du wissen, dass ausgerechnet die vier das Injil sind?`,
      objectionBy: 'verbreiteter Einwand',
      answer: `Die vier Evangelien sind die einzigen aus dem 1. Jahrhundert; um 180 bezeugt Irenäus sie als feste Sammlung. Die anderen sind später und meist gnostisch. Aber das Entscheidende: Keines dieser Bücher passt zum Koran. Das Petrusevangelium erzählt die Kreuzigung, das Thomasevangelium lehrt Geheimwissen, das Judasevangelium verachtet den Schöpfergott, und das Barnabasevangelium stammt aus dem Spätmittelalter.`,
      followUps: [
        {
          id: 'barnabas-ist-injil',
          objection: `Das Barnabasevangelium ist das echte Injil – es sagt, Jesus wurde nicht gekreuzigt und kündigt Mohammed an.`,
          objectionBy: 'Ahmed Deedat, Muhammad Ata ur-Rahim',
          answer: `Es enthält ein Jubeljahr „alle hundert Jahre" – das gab es erst seit Papst Bonifaz VIII. im Jahr 1300. Und es lässt Jesus sagen, er sei nicht der Messias, sondern Mohammed – während der Koran Jesus ausdrücklich „al-Masih" nennt (3:45). Ein Buch, das dem Koran widerspricht, kann ihn nicht stützen.`,
          detail: `Ausführlich: Claim „Das Barnabasevangelium ist das wahre Evangelium" im Topic „Ist die Bibel verfälscht?".`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wo sagt der Koran, dass das Injil verloren ging?`,
    `Wie sollten die Christen nach 5:47 nach einem Buch richten, das sie nicht besaßen?`,
    `Warum zitiert die früheste Prophetenbiografie das Johannesevangelium als „Injil", wenn es nicht das Injil ist?`,
    `Welches Buch meinst du konkret – und warum hat es nie jemand gesehen?`,
  ],
  avoid: [
    `Nicht behaupten, Jesus selbst habe die Evangelien geschrieben oder diktiert. Christen glauben das nicht – die Evangelien sind inspiriertes Zeugnis der Apostel und ihrer Schüler.`,
    `Nicht behaupten, „alle Muslime aller Zeiten" hätten das Injil mit den Evangelien gleichgesetzt – Ibn Hazm und andere vertraten anderes. Bleib bei den frühesten Quellen und beim Koran selbst.`,
  ],
  concessions: [
    `Die Evangelien sind nach Form und Inhalt Berichte über Jesus, nicht ein Buch in der Ich-Rede Gottes wie der Koran. Christen verstehen Offenbarung anders: Gott offenbart sich in Christus selbst, die Schrift bezeugt ihn.`,
    `Die Datierung und Verfasserschaft der Evangelien wird in der Forschung diskutiert; das ändert aber nichts daran, dass sie im 7. Jahrhundert das Evangelium der Christen waren.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Richard Bauckham', work: 'Jesus and the Eyewitnesses', year: '2006/2017', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Peter J. Williams', work: 'Can We Trust the Gospels?', year: '2018', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Gabriel Said Reynolds', work: 'The Qur\'an and the Bible: Text and Commentary', year: '2018', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Islam', 'Injil', 'Evangelium', 'Tahrif'],
  related: [
    'islam-dilemma/das-islamische-dilemma',
    'islam-bibelverfaelschung/evangelien-menschenwort',
    'islam-bibelverfaelschung/barnabasevangelium',
    'islam-mohammed/paraklet-ist-mohammed',
    'neues-testament/evangelien-spaet-anonym',
    'gnosis/gnostische-evangelien-wahres-christentum',
  ],
};

export default claim;
