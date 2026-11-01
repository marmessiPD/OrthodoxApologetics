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
              followUps: [
                {
                  id: 'rote-buchstaben',
                  objection: `Dann formuliere ich es so: Das Injil sind die Worte, die Jesus selbst gesprochen hat – die „roten Buchstaben" in euren Evangelien. Die Erzählung drumherum ist Menschenwort, aber die Jesusworte darin sind Reste des Injil.`,
                  objectionBy: 'Paul Williams (Blogging Theology)',
                  answer: `Gut – dann lass uns die roten Buchstaben lesen. Jesus sagt darin: „Auch des Menschen Sohn ist nicht gekommen, dass er sich dienen lasse, sondern dass er diene und gebe sein Leben zur Bezahlung für viele" (Mk 10,45). Er sagt seinen Tod und seine Auferstehung dreimal voraus (Mk 8,31; 9,31; 10,33–34), nennt Gott „mein Vater" in einzigartiger Weise und nimmt für sich in Anspruch, Sünden zu vergeben (Mk 2,5–10). Wer nur die Jesusworte als Injil gelten lässt, bekommt ein noch christlicheres Buch – kein islamisches.`,
                  detail: `Die Unterscheidung zwischen „Jesusworten" und „Erzählung" hilft dem muslimischen Argument nicht: Gerade die Leidensankündigungen und das Abendmahlswort („Das ist mein Blut des neuen Testaments, welches vergossen wird für viele", Mk 14,24) sind Worte Jesu. Wer sie streicht, braucht ein Kriterium, das nicht einfach lautet: „Was dem Koran widerspricht, ist unecht" – denn das wäre ein Zirkelschluss. Zudem bezeugen alle Schichten der Überlieferung (Markus, der Sondergut-Stoff, Paulus) denselben Jesus, der für viele sterben will.`,
                  voices: [
                    {
                      person: 'pj-williams',
                      role: 'als Neutestamentler und Textforscher',
                      text: `Peter J. Williams zeigt, dass die Evangelien in ihren Details – Ortsnamen, Personennamen, jüdische Bräuche, aramäische Wendungen – fest im Palästina des 1. Jahrhunderts verankert sind. Die Jesusworte lassen sich nicht sauber von der Erzählung abheben: Sie sind in dieselbe, historisch genaue Welt eingebettet. Wer die Worte für zuverlässig hält, hat keinen sachlichen Grund, die Erzählung um sie herum zu verwerfen.`,
                      sources: [
                        { kind: 'fachliteratur', author: 'Peter J. Williams', work: 'Can We Trust the Gospels?', year: '2018', quote: `Die Evangelien zeigen eine genaue Kenntnis von Geografie, Namen und Bräuchen des Palästina im 1. Jahrhundert.`, status: 'paraphrase' },
                      ],
                    },
                  ],
                  sources: [
                    { kind: 'bibel', work: 'Markus', ref: '10,45', quote: `Denn auch des Menschen Sohn ist nicht gekommen, dass er sich dienen lasse, sondern dass er diene und gebe sein Leben zur Bezahlung für viele.`, translation: 'Luther 1912', status: 'paraphrase', note: 'Luther 1912 hat „zur Bezahlung für viele"; griechisch lytron anti pollōn – „Lösegeld für viele".' },
                    { kind: 'bibel', work: 'Markus', ref: '8,31', quote: `Jesus fing an, sie zu lehren: Des Menschen Sohn muss viel leiden, verworfen werden, getötet werden und nach drei Tagen auferstehen.`, translation: 'Luther 1912', status: 'paraphrase' },
                  ],
                  questionsBack: [
                    `Nach welchem Kriterium entscheidest du, welches Jesuswort echt ist – außer danach, ob es zum Koran passt?`,
                    `Wenn Mk 10,45 ein echtes Jesuswort ist: Was bleibt dann von der Behauptung, Jesus habe nie von seinem Tod für andere gesprochen?`,
                  ],
                },
              ],
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
          followUps: [
            {
              id: 'ibn-ishaq-von-christen',
              objection: `Ibn Ishaq hat das Johannes-Zitat von christlichen Informanten übernommen. Das zeigt, was Christen „Injil" nannten – nicht, was der Koran damit meint. Der Koran definiert seine Begriffe selbst.`,
              objectionBy: 'Ali Ataie',
              answer: `Genau darum geht es: Der Koran richtet sich an Hörer, die mit „Injil" ein bestimmtes Buch verbanden – das der Christen. Wenn der Koran ein ganz anderes Buch gemeint hätte, hätte er seine Hörer systematisch in die Irre geführt, denn er sagt nirgends: „Euer Injil ist nicht das Injil." Ein Text, der „klar" sein will (16:103), benutzt Wörter so, wie seine Hörer sie verstehen.`,
              detail: `Das ist ein Grundsatz jeder Auslegung, den auch klassische muslimische Gelehrte vertreten: Der Koran ist „in klarer arabischer Sprache" (16:103; 26:195) herabgesandt – also im Sprachgebrauch seiner Hörer. Im Arabien des 7. Jahrhunderts bezeichnete *injīl* (über äthiopisch *wangel* bzw. syrisch *ewangeliyon*) das Evangelienbuch der Kirchen. Wer behauptet, der Koran meine damit etwas völlig anderes, muss zeigen, wo der Koran diese Umdeutung vornimmt.`,
              sources: [
                { kind: 'koran', work: 'Sure 16 (an-Nahl)', ref: '16:103', quote: `… dies aber ist eine deutliche arabische Sprache.`, original: `wa-hādhā lisānun ʿarabiyyun mubīn`, translation: 'Bubenheim/Elyas (sinngemäß)', status: 'paraphrase', url: 'https://quran.com/16/103' },
              ],
              questionsBack: [
                `Wo im Koran wird erklärt, dass das Wort „Injil" etwas anderes bedeutet als das Evangelium der Christen, die Mohammed vor sich hatte?`,
              ],
              followUps: [
                {
                  id: 'richten-nach-dem-rest',
                  objection: `5:47 heißt nur: Die Christen sollen nach dem richten, was vom echten Injil übrig ist – also nach dem, was mit dem Koran übereinstimmt, etwa der Ankündigung Mohammeds.`,
                  objectionBy: 'Yasir Qadhi',
                  answer: `Der Vers sagt: „Die Leute des Evangeliums sollen nach dem richten, was Allah *darin* herabgesandt hat" – nicht „nach dem Rest" oder „nach dem, was mit dem Koran übereinstimmt". Und er nennt die, die es nicht tun, Frevler (*fāsiqūn*). Gott kann niemanden dafür verurteilen, nach einem Buch nicht zu richten, dessen echten Inhalt niemand mehr erkennen kann. Wenn man das Injil erst mit dem Koran „filtern" muss, hätte 5:47 einfach sagen können: „Richtet nach dem Koran."`,
                  detail: `Hier zeigt sich wieder das Dilemma (siehe Claim „Das Islamische Dilemma"): Entweder hatten die Christen im 7. Jahrhundert ein Injil, nach dem man zuverlässig richten konnte – dann ist es unser Neues Testament, dessen Handschriften Jahrhunderte älter sind als der Koran. Oder sie hatten es nicht – dann ist 5:47 ein unerfüllbarer Befehl. Die Formel „nur was mit dem Koran übereinstimmt" macht das Injil außerdem überflüssig: Es hätte keinen eigenen Inhalt mehr, nach dem man richten könnte.`,
                  voices: [
                    {
                      person: 'gordon-nickel',
                      role: 'als Erforscher der frühen Tafsir-Tradition',
                      text: `Nickel zeigt in seiner Untersuchung der frühen Koranauslegung, dass die ältesten Kommentatoren die Verse über das Richten nach Tora und Injil nicht mit der späteren Lehre einer Textverfälschung verbanden. Die Vorstellung, man müsse ein verdorbenes Injil erst „aussortieren", ist eine spätere Lesart, die die Verse von außen überformt.`,
                      sources: [
                        { kind: 'fachliteratur', author: 'Gordon D. Nickel', work: 'Narratives of Tampering in the Earliest Commentaries on the Qur\'an', year: '2011', quote: `Die frühesten Kommentare lesen die Tahrif-Verse überwiegend nicht als Vorwurf einer Textverfälschung.`, status: 'paraphrase' },
                      ],
                    },
                  ],
                  sources: [
                    { kind: 'koran', work: 'Sure 5 (al-Ma\'ida)', ref: '5:47', quote: `Und die Leute des Evangeliums sollen nach dem richten, was Allah darin herabgesandt hat. Wer nicht nach dem richtet, was Allah herabgesandt hat, das sind die Frevler.`, original: `wa-l-yaḥkum ahlu l-injīli bi-mā anzala llāhu fīh`, translation: 'Bubenheim/Elyas (sinngemäß)', status: 'paraphrase', url: 'https://quran.com/5/47' },
                  ],
                  questionsBack: [
                    `Wenn man das Injil nur durch den Koran verstehen darf – was genau sollten die Christen dann nach 5:47 aus ihrem eigenen Buch entnehmen?`,
                    `Wie kann Gott jemanden einen Frevler nennen, weil er nach einem Buch nicht richtet, das unauffindbar ist?`,
                  ],
                },
              ],
            },
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
          followUps: [
            {
              id: 'galater-1-offenbarung',
              objection: `Paulus sagt doch selbst in Galater 1, er habe sein Evangelium „nicht von einem Menschen empfangen", sondern durch eine Offenbarung. Er hatte also eine eigene Quelle – unabhängig von den Jüngern.`,
              objectionBy: 'Paul Williams (Blogging Theology)',
              answer: `In Gal 1,12 geht es um seine Berufung: Den auferstandenen Christus hat ihm kein Mensch gezeigt. Aber im selben Brief berichtet er, dass er drei Jahre später nach Jerusalem ging, um Petrus „kennenzulernen" (*historēsai*), und fünfzehn Tage bei ihm blieb (Gal 1,18). Vierzehn Jahre danach legte er den Säulen-Aposteln sein Evangelium ausdrücklich vor – und sie fügten ihm nichts hinzu (Gal 2,2.6.9). Paulus' Quelle war eigenständig, sein Inhalt aber geprüft und bestätigt.`,
              detail: `Gerade der Galaterbrief, den skeptische Forscher zu den unbestrittenen Paulusbriefen zählen, ist ein starkes Argument *gegen* die These, Paulus habe ein eigenes, von Jesu Jüngern abweichendes Evangelium erfunden: Er hätte allen Grund gehabt, Differenzen zu betonen, und berichtet stattdessen von Übereinstimmung in der Botschaft und Streit nur über die Praxis (Tischgemeinschaft in Antiochia, Gal 2,11–14). In 1 Kor 15,11 sagt er: „Es sei nun ich oder jene: also predigen wir, und also habt ihr geglaubt."`,
              voices: [
                {
                  person: 'nt-wright',
                  role: 'als Paulusforscher',
                  text: `Wright betont, dass Paulus sich nicht als Religionsstifter verstand, sondern als Bote, der die jüdische Hoffnung in Jesus als Messias erfüllt sah. Die Auferstehung Jesu und sein Tod „für unsere Sünden" waren für ihn gemeinsames Gut der Urgemeinde, kein Sondergut. Die Briefe setzen voraus, dass die Gemeinden diese Botschaft längst kennen.`,
                  sources: [
                    { kind: 'fachliteratur', author: 'N. T. Wright', work: 'Paul and the Faithfulness of God', year: '2013', quote: `Paulus versteht sich als Apostel des Messias Israels, nicht als Gründer einer neuen Religion.`, status: 'paraphrase' },
                  ],
                },
              ],
              sources: [
                { kind: 'bibel', work: 'Galater', ref: '1,18', quote: `Darnach über drei Jahre kam ich gen Jerusalem, Petrus zu schauen, und blieb fünfzehn Tage bei ihm.`, translation: 'Luther 1912', status: 'verbatim' },
                { kind: 'bibel', work: 'Galater', ref: '2,9', quote: `Jakobus, Kephas und Johannes, die für Säulen angesehen waren, gaben mir und Barnabas die rechte Hand und wurden mit uns eins.`, translation: 'Luther 1912', status: 'paraphrase' },
                { kind: 'bibel', work: '1. Korinther', ref: '15,11', quote: `Es sei nun ich oder jene: also predigen wir, und also habt ihr geglaubt.`, translation: 'Luther 1912', status: 'verbatim' },
              ],
              questionsBack: [
                `Wenn Paulus ein Abweichler war: Warum betont er, dass Petrus, Jakobus und Johannes ihm die Hand der Gemeinschaft gaben – Leute, die seine Leser noch fragen konnten?`,
              ],
            },
          ],
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
    {
      id: 'aramaeisches-original',
      objection: `Jesus sprach Aramäisch. Eure Evangelien sind auf Griechisch – ihr habt also nicht einmal die Worte Jesu, sondern Übersetzungen. Das Injil, das Jesus empfing, war aramäisch und ist verloren.`,
      objectionBy: 'Ahmed Deedat, Zakir Naik',
      answer: `Nach diesem Maßstab hättest auch du kein einziges echtes Jesuswort: Der Koran gibt Jesu Reden auf Arabisch wieder – einer Sprache, die Jesus nicht sprach. Trotzdem hält der Koran sie für wahre Wiedergabe. Übersetzung zerstört also nach dem Koran selbst nicht die Offenbarung. Und die Evangelien bewahren sogar aramäische Originalworte Jesu: „Abba", „Talitha kum", „Effata", „Eloi, Eloi, lama asabtani".`,
      detail: `Griechisch war im östlichen Mittelmeerraum die Verkehrssprache; Galiläa war zweisprachig. Dass die Evangelien Jesu Lehre auf Griechisch weitergeben, entspricht dem Auftrag, sie „allen Völkern" zu bringen (Mt 28,19). Zudem: Der Koran befiehlt den Christen seiner Zeit, nach dem Injil zu richten (5:47) – und diese Christen lasen es auf Griechisch, Syrisch, Koptisch oder Ge'ez. Der Koran macht die Gültigkeit des Injil also gerade nicht vom aramäischen Original abhängig.`,
      sources: [
        { kind: 'bibel', work: 'Markus', ref: '5,41', quote: `Und ergriff das Kind bei der Hand und sprach zu ihr: Talitha kumi! das ist verdolmetscht: Mägdlein, ich sage dir, stehe auf!`, translation: 'Luther 1912', status: 'verbatim' },
        { kind: 'bibel', work: 'Markus', ref: '14,36', quote: `Abba, mein Vater, es ist dir alles möglich; überhebe mich dieses Kelchs; doch nicht was ich will, sondern was du willst!`, translation: 'Luther 1912', status: 'paraphrase' },
        { kind: 'koran', work: 'Sure 19 (Maryam)', ref: '19:30', quote: `Er (Jesus) sagte: Ich bin Allahs Diener; Er hat mir die Schrift gegeben und mich zu einem Propheten gemacht.`, translation: 'Bubenheim/Elyas (sinngemäß)', status: 'paraphrase', url: 'https://quran.com/19/30', note: 'Jesu Rede wird im Koran auf Arabisch wiedergegeben.' },
      ],
      questionsBack: [
        `Wenn eine Übersetzung die Worte Jesu wertlos macht – was ist dann mit den Jesusworten im Koran, die ebenfalls nicht aramäisch sind?`,
      ],
      followUps: [
        {
          id: 'jeder-gesandte-eigene-sprache',
          objection: `Der Koran sagt: „Wir haben keinen Gesandten geschickt, außer in der Sprache seines Volkes" (14:4). Also war das Injil aramäisch – und das griechische Neue Testament ist nicht das herabgesandte Buch.`,
          objectionBy: 'Shabir Ally',
          answer: `14:4 sagt, dass Jesus in der Sprache seines Volkes *verkündete* – das bestreitet niemand. Aber der Koran setzt im selben Atemzug voraus, dass die Christen im 7. Jahrhundert das Injil besitzen (7:157) und danach richten sollen (5:47). Diese Christen hatten keine aramäische Urschrift, sondern das Evangelium in ihren Sprachen. Wenn nur das aramäische Original zählte, wäre 5:47 an keinen einzigen Christen zur Zeit Mohammeds gerichtet.`,
          detail: `Bemerkenswert ist, dass die syrische Kirche – deren Sprache dem Aramäischen Jesu am nächsten steht – genau dieselben vier Evangelien besitzt (Peschitta, Vetus Syra). Eine aramäischsprachige Christenheit mit einem anderen Injil hat es nie gegeben. Auch die frühen arabischen Evangelienübersetzungen, die Sidney Griffith untersucht hat, sind Übersetzungen dieser vier Evangelien.`,
          voices: [
            {
              person: 'sidney-griffith',
              role: 'als Erforscher der arabischen Bibel',
              text: `Griffith zeigt, dass die Christen im Umfeld des frühen Islam die Evangelien in Syrisch, Griechisch, Koptisch und bald auch in Arabisch lasen und im Gottesdienst vortrugen. Der Koran spricht in eine Welt hinein, in der „das Evangelium" ein bekanntes, gelesenes Buch der Kirchen war – kein verschollener Text.`,
              sources: [
                { kind: 'fachliteratur', author: 'Sidney H. Griffith', work: 'The Bible in Arabic: The Scriptures of the „People of the Book" in the Language of Islam', year: '2013', quote: `Die Schriften der Christen waren im Umfeld des Korans in mehreren Sprachen in liturgischem Gebrauch.`, status: 'paraphrase' },
              ],
            },
          ],
          sources: [
            { kind: 'koran', work: 'Sure 14 (Ibrahim)', ref: '14:4', quote: `Und Wir haben keinen Gesandten entsandt, außer in der Sprache seines Volkes, damit er ihnen Klarheit gebe.`, translation: 'Bubenheim/Elyas (sinngemäß)', status: 'paraphrase', url: 'https://quran.com/14/4' },
          ],
          questionsBack: [
            `Welche aramäische Christengemeinde besaß zur Zeit Mohammeds ein anderes Injil als die vier Evangelien?`,
          ],
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
