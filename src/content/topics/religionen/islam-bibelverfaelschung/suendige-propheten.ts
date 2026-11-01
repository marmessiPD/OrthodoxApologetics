import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'suendige-propheten',
  title: `„Die Bibel stellt Propheten als Sünder dar (Noah, Lot, David) – das kann nicht Gottes Wort sein."`,
  proponents: [
    { name: 'Ahmed Deedat', role: 'Islamischer Apologet (1918–2005)', work: 'Vorträge über die „unmoralischen Geschichten" der Bibel' },
    { name: 'Zakir Naik', role: 'Islamischer Prediger, Mumbai', work: 'Vorträge über Propheten in Bibel und Koran' },
    { name: 'Klassische Lehre der Isma', role: 'Sunnitische und schiitische Dogmatik (kalam)', work: 'Lehre von der Sündlosigkeit bzw. Bewahrung der Propheten (\'isma)' },
  ],
  steelman: `„Propheten sind von Gott erwählte Vorbilder. Gott bewahrt sie vor schweren Sünden (*ʿiṣma*), sonst könnte man ihrer Botschaft nicht vertrauen. Die Bibel aber erzählt, Noah habe sich betrunken und nackt gelegen (Gen 9,21), Lot habe mit seinen Töchtern geschlafen (Gen 19,30–38), David habe Ehebruch begangen und einen Mord befohlen (2 Sam 11), Salomo sei Götzen nachgelaufen (1 Kön 11,4) und Aaron habe das goldene Kalb gemacht (Ex 32). Solche Geschichten zerstören das Vertrauen in die Gesandten Gottes. Ein Buch, das Gottes Propheten so verleumdet, kann nicht von Gott stammen – das zeigt, dass Menschen die Schrift verfälscht haben."`,
  biblical: {
    summary: `Die Bibel erzählt die Sünden ihrer Helden **ohne sie zu billigen**: Sie zeigt die Folgen (Davids Haus zerbricht, 2 Sam 12,10), die Buße (Ps 51) und Gottes Gnade. Ihr Ziel ist nicht, Menschen zu verherrlichen, sondern zu zeigen, dass nur Gott treu ist und alle Menschen Erlösung brauchen (Röm 3,23). Gerade diese Ehrlichkeit ist ein Zeichen von Echtheit: Propaganda beschönigt, Wahrheit berichtet. Nur **einer** wird in der Bibel ausdrücklich als sündlos bezeugt: Jesus Christus (Hebr 4,15; 1 Petr 2,22).`,
    detail: `**Der Koran selbst** berichtet von Verfehlungen und Vergebungsbitten der Propheten:
- **Adam:** „Adam widersetzte sich seinem Herrn und ging in die Irre" (20:121).
- **Mose** tötet einen Mann: „Das ist ein Werk des Satans … Mein Herr, ich habe mir selbst Unrecht getan, so vergib mir" (28:15–16).
- **David** bittet um Vergebung, fällt nieder und bereut, „da vergaben Wir ihm dies" (38:24–25).
- **Jona:** „Ich gehörte zu den Unrechttuenden" (21:87).
- **Abraham:** „der, von dem ich erhoffe, dass Er mir am Tag des Gerichts meine Verfehlung vergibt" (26:82).
- **Mohammed** wird aufgefordert: „Bitte um Vergebung für deine Sünde (*li-dhanbika*)" (47:19; vgl. 40:55; 48:2).

Und Sahih al-Bukhari 3358 überliefert, dass Abraham dreimal die Unwahrheit sagte. Die Lehre der *ʿiṣma* ist eine spätere theologische Systematisierung; sie steht in Spannung zum Wortlaut des Korans.`,
    sources: [
      { kind: 'bibel', work: 'Psalm', ref: '51,3–4 (Agpeya: Psalm 50)', quote: `Gott, sei mir gnädig nach deiner Güte und tilge meine Sünden nach deiner großen Barmherzigkeit. Wasche mich wohl von meiner Missetat und reinige mich von meiner Sünde.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Hebräer', ref: '4,15', quote: `Denn wir haben nicht einen Hohenpriester, der nicht könnte Mitleiden haben mit unsrer Schwachheit, sondern der versucht ist allenthalben gleichwie wir, doch ohne Sünde.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'koran', work: 'Sure 20 (Ta Ha)', ref: '20:121', quote: `Und Adam widersetzte sich seinem Herrn und ging in die Irre.`, original: `wa-ʿaṣā ādamu rabbahu fa-ghawā`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/20/121' },
      { kind: 'koran', work: 'Sure 28 (al-Qasas)', ref: '28:15–16', quote: `Mose schlug ihn, und er starb. Er sagte: „Das ist ein Werk des Satans … Mein Herr, ich habe mir selbst Unrecht getan, so vergib mir."`, original: `rabbi innī ẓalamtu nafsī fa-ghfir lī`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/28/15-16' },
      { kind: 'koran', work: 'Sure 38 (Sad)', ref: '38:24–25', quote: `David … bat seinen Herrn um Vergebung, fiel nieder und wandte sich reuig (Ihm) zu. Da vergaben Wir ihm dies.`, original: `fa-staghfara rabbahu wa-kharra rākiʿan wa-anāb`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/38/24-25' },
      { kind: 'koran', work: 'Sure 47 (Muhammad)', ref: '47:19', quote: `So wisse, dass es keinen Gott gibt außer Allah, und bitte um Vergebung für deine Sünde und für die gläubigen Männer und Frauen.`, original: `wa-staghfir li-dhanbika`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/47/19' },
    ],
  },
  church: {
    summary: `Die Kirche liest die Sünden der Heiligen als Schule der Buße. Die koptische Kirche betet den Bußpsalm Davids (Ps 50 nach griechischer Zählung) **zu Beginn jeder Gebetsstunde der Agpeya** – das Gebet eines gefallenen Königs ist zum täglichen Gebet der ganzen Kirche geworden. Johannes Chrysostomus predigt über Davids Fall und Umkehr als Ermutigung für jeden Sünder: Wer fällt, soll nicht verzweifeln, sondern aufstehen.`,
    sources: [
      { kind: 'liturgie', work: 'Agpeya (Stundengebet der koptischen Kirche)', quote: `Jede Gebetsstunde beginnt nach Vaterunser und Dankgebet mit Psalm 50 (LXX), dem Bußpsalm Davids.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Homilien über die Buße (De paenitentia)', ref: 'Homilie 2', year: 'um 387', quote: `David ist das Vorbild des Büßers: tief gefallen, aufrichtig bereut, von Gott wieder angenommen.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Die Bibel billigt die Sünden der Propheten nicht – sie erzählt sie ehrlich, zeigt ihre Folgen und Gottes Vergebung. Auch der Koran sagt, dass Adam sich widersetzte (20:121), Mose einen Mann tötete und um Vergebung bat (28:16) und dass Mohammed um Vergebung für seine Sünde bitten sollte (47:19). Und beide Bücher stimmen in einem überein: Nur Jesus ist ohne Sünde. Warum wohl?`,
  keyPoints: [
    `**Erzählen heißt nicht billigen:** Die Bibel zeigt Sünde, Gericht und Umkehr (2 Sam 12; Ps 51).`,
    `**Ehrlichkeit ist ein Echtheitsmerkmal:** Propaganda beschönigt ihre Helden; die Bibel tut es nicht.`,
    `**Der Koran kennt Verfehlungen der Propheten:** Adam (20:121), Mose (28:15–16), David (38:24–25), Jona (21:87), Abraham (26:82), Mohammed (47:19; 48:2).`,
    `**Auch Hadithe berichten es:** Abrahams drei Unwahrheiten (Sahih al-Bukhari 3358).`,
    `**Nur Jesus ist sündlos** – in der Bibel (Hebr 4,15; 1 Petr 2,22) und nach islamischer Überlieferung (Bukhari 3431: nur Maria und ihr Sohn wurden bei der Geburt nicht vom Satan berührt).`,
  ],
  voices: [
    {
      person: 'chrysostomus',
      role: 'als Prediger der Buße',
      text: `Chrysostomus macht aus Davids Fall eine Predigt der Hoffnung: Der König, der Ehebruch und Mord beging, wurde durch Nathans Wort zur Umkehr gerufen und von Gott wieder angenommen. Die Schrift erzählt das, damit kein Sünder verzweifelt und kein Gerechter überheblich wird. Wer die Geschichte als „Verleumdung" liest, verfehlt ihren Sinn: Sie verherrlicht nicht David, sondern die Barmherzigkeit Gottes.`,
      sources: [
        { kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'De paenitentia', ref: 'Homilie 2', year: 'um 387', quote: `Davids Fall und Buße als Vorbild für alle Sünder.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'zakaria-botros',
      role: 'als koptischer Priester mit Kenntnis der islamischen Quellen',
      text: `Zakaria Botros weist in seinen Sendungen auf die Verse hin, in denen Mohammed aufgefordert wird, um Vergebung für seine Sünde zu bitten (47:19; 48:2), und stellt dem die einzigartige Reinheit Jesu gegenüber, die auch der Koran (19:19: „ein reiner Knabe") und die Hadithe bezeugen. Seine Frage an Muslime: Wenn alle Propheten um Vergebung bitten, nur einer nicht – was sagt das über diesen einen?`,
    },
    {
      person: 'qureshi',
      role: 'als ehemaliger Muslim und Arzt',
      text: `Qureshi beschreibt, wie er als Muslim mit der Lehre von der Bewahrung der Propheten aufwuchs und erst beim eigenen Lesen der Quellen bemerkte, dass Koran und Hadith Verfehlungen der Propheten durchaus berichten. Für ihn war entscheidend, dass die Bibel den Menschen nicht idealisiert, sondern Gott: Die Propheten sind Zeugen der Gnade, nicht Beweise menschlicher Vollkommenheit.`,
      sources: [
        { kind: 'fachliteratur', author: 'Nabeel Qureshi', work: 'Seeking Allah, Finding Jesus', year: '2014', quote: `Bericht über die eigene Auseinandersetzung mit Koran, Hadith und Bibel als Muslim.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'tadros-malaty',
      role: 'als koptischer Kommentator der Schrift',
      text: `Vater Tadros Malaty liest die Sünden der Patriarchen und Könige in seinem patristischen Kommentar im Licht der Väter: Die Schrift zeigt die Schwäche des Menschen, um die Notwendigkeit des Erlösers zu offenbaren. Noahs Trunkenheit, Davids Fall und Salomos Abfall sind Spiegel für uns – und zugleich Hinweise darauf, dass nicht ein menschlicher Prophet, sondern nur der menschgewordene Gott selbst den Menschen heilen kann.`,
      sources: [
        { kind: 'koptisch', author: 'Tadros Y. Malaty', work: 'Patristischer Kommentar zur Heiligen Schrift (Bände zu Genesis und 2 Samuel)', quote: `Die Sünden der Heiligen als Spiegel der menschlichen Schwäche und Hinweis auf den Erlöser.`, status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'propheten-muessen-vorbilder-sein',
      objection: `Propheten sind Vorbilder. Wenn sie schwere Sünden begehen, wie kann man ihnen dann vertrauen? Deshalb lehrt der Islam die Bewahrung der Propheten (Isma).`,
      objectionBy: 'Zakir Naik',
      answer: `Die Vertrauenswürdigkeit einer Botschaft hängt an Gott, der sie gibt – nicht an der Vollkommenheit des Boten. Gerade weil die Bibel ihre Boten nicht idealisiert, sieht man: Die Kraft liegt bei Gott. Und dein eigenes Buch sagt, dass Adam sich widersetzte (20:121) und Mose um Vergebung für einen Totschlag bat (28:16). Die Isma ist eine spätere Lehre, die der Koran so nicht ausspricht.`,
      followUps: [
        {
          id: 'kleine-fehler-nicht-sunden',
          objection: `Das waren keine Sünden, sondern kleine Fehler oder Fehleinschätzungen (zalla). Die Isma schützt vor großen Sünden – nicht vor jedem Fehlgriff.`,
          objectionBy: 'klassische sunnitische Dogmatik',
          answer: `Mose tötet einen Mann und nennt es „ein Werk des Satans" (28:15) – ist Totschlag ein kleiner Fehler? Und Mohammed soll um Vergebung für seine *dhanb* bitten (47:19) – dasselbe Wort, das der Koran für die Sünden der Menschen gebraucht. Wenn du diese Verse als „kleine Fehler" deutest, darfst du auch die Bibel nicht strenger lesen als deinen Koran.`,
          followUps: [
            {
              id: 'aber-nicht-ehebruch-mord',
              objection: `Aber Ehebruch und Mord wie bei David, Inzest wie bei Lot – so etwas würde Gott einem Propheten nie erlauben.`,
              objectionBy: 'Ahmed Deedat',
              answer: `Gott *erlaubte* es nicht – er verurteilte es: Nathan konfrontiert David, das Kind stirbt, sein Haus wird vom Schwert heimgesucht (2 Sam 12). Die Bibel erzählt Sünde als Sünde. Und Lot wird in der Bibel nicht als Prophet, der eine Offenbarung bringt, dargestellt, sondern als Gerechter, der in Sodom lebte. Die Frage ist nicht, ob Menschen fallen, sondern ob Gott sie richtet und wieder aufrichtet.`,
              detail: `Der Koran selbst spielt in 38:21–25 auf eine Episode an, nach der David um Vergebung bat; viele klassische Ausleger verbinden sie mit der Geschichte um Urias Frau, andere lehnen das wegen der Isma ab. Die Spannung zwischen Text und Dogma ist in der islamischen Tradition selbst sichtbar.`,
              followUps: [
                {
                  id: 'wozu-solche-geschichten',
                  objection: `Aber warum sollte Gott solche schmutzigen Geschichten überhaupt in sein heiliges Buch aufnehmen? Welchen Nutzen hat es, von Ehebruch und Inzest zu lesen?`,
                  objectionBy: 'Zakir Naik',
                  answer: `Weil Gott nicht für Helden schreibt, sondern für Sünder, die umkehren sollen. Aus Davids Fall entstand Psalm 51: „Gott, sei mir gnädig nach deiner Güte … Schaffe in mir, Gott, ein reines Herz." Die koptische Kirche betet diesen Psalm in *jeder* Gebetsstunde der Agpeya – seit Jahrhunderten lernen Millionen Menschen von David, wie echte Buße aussieht. Paulus sagt: „Es ist uns zur Warnung geschrieben" (1 Kor 10,11). Eine Schrift, die die Sünde ihrer Größten nicht verschweigt, lehrt Demut und Hoffnung zugleich.`,
                  detail: `Hier zeigt sich auch ein historisches Argument: Nationale Heldenepen verherrlichen ihre Könige. Die Schrift Israels dagegen klagt ihre größten Könige an – David, Salomo, Ahab. Das spricht für ihre Wahrhaftigkeit, nicht dagegen: Niemand erfindet die Schande seines Nationalhelden. Für den hl. Athanasius sind die Psalmen ein „Spiegel der Seele": Wer betet, findet darin seine eigenen Regungen – auch die der Reue.`,
                  voices: [
                    {
                      person: 'athanasius',
                      role: 'als Lehrer des Psalmengebets',
                      text: `In seinem Brief an Marcellinus über die Psalmen erklärt Athanasius, dass die Psalmen dem Betenden wie ein Spiegel seine eigene Seele zeigen. Wer gesündigt hat, findet in den Bußpsalmen die Worte der Umkehr, die ihm selbst fehlen. Die Geschichte Davids ist darum kein Ärgernis, sondern eine Schule der Buße für die ganze Kirche.`,
                      sources: [
                        { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Brief an Marcellinus über die Auslegung der Psalmen (Epistula ad Marcellinum)', year: 'um 360', quote: `Die Psalmen sind wie ein Spiegel, in dem der Betende die Regungen seiner eigenen Seele erkennt.`, status: 'paraphrase' },
                      ],
                    },
                  ],
                  sources: [
                    { kind: 'bibel', work: 'Psalm', ref: '51,3.12', quote: `Gott, sei mir gnädig nach deiner Güte und tilge meine Sünden nach deiner großen Barmherzigkeit … Schaffe in mir, Gott, ein reines Herz und gib mir einen neuen, gewissen Geist.`, translation: 'Luther 1912', status: 'verbatim', note: 'In der Agpeya (LXX-Zählung) Psalm 50.' },
                    { kind: 'bibel', work: '1. Korinther', ref: '10,11', quote: `Solches alles widerfuhr ihnen zum Vorbilde; es ist aber geschrieben uns zur Warnung.`, translation: 'Luther 1912', status: 'paraphrase' },
                  ],
                  questionsBack: [
                    `Welches Buch der Antike kennst du, das die Sünden des eigenen Nationalhelden so offen erzählt – und warum würde jemand so etwas erfinden?`,
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'abraham-luegt',
      objection: `In der Bibel lügt Abraham und gibt seine Frau als seine Schwester aus (Gen 12; 20). Ein Prophet Gottes lügt nicht!`,
      objectionBy: 'Ahmed Deedat',
      answer: `Sahih al-Bukhari 3358 überliefert ausdrücklich, dass Abraham dreimal die Unwahrheit sagte – darunter genau diese Geschichte mit Sara, die er als Schwester ausgab. Die Bibel und deine eigene Hadithsammlung erzählen dasselbe. Wenn das Bukhari nicht unglaubwürdig macht, dann auch nicht die Bibel.`,
      sources: [
        { kind: 'hadith', work: 'Sahih al-Bukhari', ref: '3358', quote: `Abraham sagte nur dreimal die Unwahrheit: zweimal um Allahs willen („Ich bin krank"; „Der Größte von ihnen hat es getan") und einmal wegen Sara („Sie ist meine Schwester").`, status: 'paraphrase', url: 'https://sunnah.com/bukhari:3358' },
      ],
      followUps: [
        {
          id: 'luege-um-allahs-willen',
          objection: `Das waren keine echten Lügen, sondern kluge Wortspiele zum Schutz – Sara war ja seine Schwester im Glauben.`,
          objectionBy: 'klassische Hadithkommentare',
          answer: `Interessant – genau diese Erklärung gibt die Bibel selbst: Sara war tatsächlich seine Halbschwester (Gen 20,12). Wenn du Abraham mit dieser Begründung entlastest, entlastest du auch die Bibel. Der Vorwurf, die Bibel verleumde Abraham, fällt damit weg.`,
          sources: [
            { kind: 'bibel', work: '1. Mose (Genesis)', ref: '20,12', quote: `Auch ist sie wahrhaftig meine Schwester; denn sie ist meines Vaters Tochter, aber nicht meiner Mutter Tochter, und ist mein Weib geworden.`, translation: 'Luther 1912', status: 'verbatim' },
          ],
          followUps: [
            {
              id: 'bibel-tadelt-abraham-nicht',
              objection: `Aber die Bibel tadelt Abraham nicht einmal. Sie erzählt sogar, wie er durch die Geschichte reich wird – Schafe, Rinder, Knechte (Gen 12,16). Das ist moralisch verwerflich.`,
              objectionBy: 'Shabir Ally',
              answer: `Die Bibel urteilt oft durch die Erzählung selbst. Schau, wer Abraham zurechtweist: der heidnische Pharao – „Warum hast du mir das getan?" (Gen 12,18) –, später Abimelech mit derselben Frage (Gen 20,9). Der Prophet steht beschämt vor einem Heiden, der moralischer handelt als er. Deutlicher kann eine Erzählung kaum tadeln. Und nicht Abrahams List rettet Sara, sondern Gottes Eingreifen.`,
              detail: `Das ist eine typische Erzählweise der Bibel: Sie kommentiert nicht jedes Fehlverhalten, sondern lässt den Leser die Folgen sehen. Aus Ägypten kommt Hagar, die ägyptische Magd (Gen 16,1) – und mit ihr der Konflikt, der Abrahams Haus lange belastet. Der Glaube Abrahams wird gerade dadurch groß, dass Gott seine Verheißung trotz Abrahams Schwäche hält. Der Koran erzählt ebenfalls oft ohne ausdrückliche Bewertung – etwa die Täuschung der Brüder Josefs gegenüber ihrem Vater (12:16–18).`,
              sources: [
                { kind: 'bibel', work: '1. Mose (Genesis)', ref: '12,18', quote: `Da rief Pharao Abram zu sich und sprach zu ihm: Warum hast du mir das getan? Warum sagtest du mir's nicht, dass sie dein Weib wäre?`, translation: 'Luther 1912', status: 'paraphrase' },
              ],
              questionsBack: [
                `Wenn ein heidnischer König den Propheten zurechtweist – ist das Billigung oder Beschämung?`,
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'mohammed-ohne-suende',
      objection: `Mohammed war sündlos. „Dhanb" in 47:19 bedeutet nur, dass er für seine Gemeinde um Vergebung bitten sollte – oder es ist eine Lehre für die Gläubigen.`,
      objectionBy: 'verbreitete muslimische Auslegung',
      answer: `Der Vers unterscheidet ausdrücklich: „Bitte um Vergebung für *deine* Sünde *und* für die gläubigen Männer und Frauen." Und 48:2 spricht von dem, was Allah ihm „von deiner früheren und späteren Sünde" vergibt. Ich möchte Mohammed nicht verurteilen – ich zeige nur, dass der Koran seinen Propheten genauso als vergebungsbedürftigen Menschen darstellt, wie die Bibel ihre Propheten.`,
      sources: [
        { kind: 'koran', work: 'Sure 48 (al-Fath)', ref: '48:2', quote: `… damit Allah dir vergebe, was von deiner Sünde vorausging und was noch folgt.`, original: `li-yaghfira laka llāhu mā taqaddama min dhanbika wa-mā ta\'akhkhar`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/48/2' },
      ],
      followUps: [
        {
          id: 'nur-jesus-sundlos',
          objection: `Gut, alle Propheten sind Menschen. Aber das macht Jesus nicht zu etwas Besonderem.`,
          objectionBy: 'Zakir Naik',
          answer: `Doch: In der ganzen Bibel wird nur von Jesus gesagt, er sei ohne Sünde (Hebr 4,15; 1 Petr 2,22; Joh 8,46). Der Koran nennt ihn „einen reinen Knaben" (19:19), und nach Sahih al-Bukhari 3431 wurde jedes Kind bei der Geburt vom Satan berührt – außer Maria und ihrem Sohn. Wenn alle Propheten um Vergebung bitten müssen, nur einer nicht – dann ist er mehr als ein Prophet. Genau das bezeugt das Evangelium.`,
          sources: [
            { kind: 'koran', work: 'Sure 19 (Maryam)', ref: '19:19', quote: `Ich bin nur der Gesandte deines Herrn, um dir einen reinen Knaben zu schenken.`, original: `li-ahaba laki ghulāman zakiyyā`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/19/19' },
            { kind: 'hadith', work: 'Sahih al-Bukhari', ref: '3431', quote: `Kein Kind wird geboren, ohne dass der Satan es bei der Geburt berührt, sodass es schreit – außer Maria und ihrem Sohn.`, status: 'paraphrase', url: 'https://sunnah.com/bukhari:3431' },
          ],
          followUps: [
            {
              id: 'suendlos-heisst-nicht-gott',
              objection: `Sündlosigkeit macht niemanden zu Gott. Engel sündigen auch nicht, und nach demselben Hadith wurde auch Maria vor dem Satan geschützt. Ist Maria dann auch göttlich?`,
              objectionBy: 'Shabir Ally',
              answer: `Richtig – Sündlosigkeit allein beweist keine Gottheit. Aber sie steht bei Jesus nicht allein: Im Evangelium vergibt er Sünden, nimmt Anbetung an und beansprucht, der Richter der Welt zu sein. Und selbst der Koran gibt ihm Titel, die er keinem anderen gibt: „Wort von Ihm" (*kalimatuhu*) und „Geist von Ihm" (*rūḥun minhu*, 4:171), „der Messias", geboren ohne Vater, erhoben zu Gott, wiederkommend. Die Frage an dich: Warum gibt der Koran gerade Jesus diese einzigartigen Titel und schreibt ihm keine Sünde zu – während er Mohammed zur Bitte um Vergebung auffordert (47:19)?`,
              detail: `Maria ehrt die koptische Kirche als Theotokos, als „Gottesgebärerin", die über alle Heiligen erhoben ist – aber sie betet sie nicht als Gott an. Der Unterschied zu Jesus liegt nicht allein in der Reinheit, sondern in dem, was die Schrift über seine Person sagt: Er ist das Wort, das im Anfang bei Gott war und Fleisch wurde (Joh 1,1.14). Der Koran berührt diesen Kern mit dem Titel *kalimatu llāh*, deutet ihn aber anders.`,
              sources: [
                { kind: 'koran', work: 'Sure 4 (an-Nisa\')', ref: '4:171', quote: `Der Messias, Jesus, Sohn der Maria, ist nur der Gesandte Allahs und Sein Wort, das Er Maria entbot, und ein Geist von Ihm.`, original: `innamā l-masīḥu ʿīsā bnu maryama rasūlu llāhi wa-kalimatuhu alqāhā ilā maryama wa-rūḥun minhu`, translation: 'Bubenheim/Elyas (sinngemäß)', status: 'paraphrase', url: 'https://quran.com/4/171' },
              ],
              questionsBack: [
                `Welchen anderen Propheten nennt der Koran „Wort Allahs" und „Geist von Ihm"?`,
              ],
              followUps: [
                {
                  id: 'mohammed-auch-isma',
                  objection: `Nach der Lehre der Isma war auch Mohammed sündlos. Jesus ist hier nichts Besonderes.`,
                  objectionBy: 'Yasir Qadhi',
                  answer: `Das ist eine Lehre der späteren Dogmatik – der Koran selbst klingt anders: Mohammed soll um Vergebung für „deine Sünde" bitten (47:19); Allah vergibt ihm „deine frühere und spätere Sünde" (48:2); Sure 80 beginnt mit einem Tadel, weil er sich von einem Blinden abwandte (80:1–10); und 9:43 sagt: „Allah hat dir verziehen – warum hast du ihnen erlaubt …?" Ich sage das nicht, um Mohammed herabzusetzen, sondern weil der Text es so sagt. Von Jesus berichtet der Koran nichts Vergleichbares.`,
                  detail: `Muslimische Gelehrte haben diese Verse unterschiedlich gedeutet (z. B. als „Unterlassen des Besseren" oder als Lehre für die Gemeinde). Das ist legitim – aber es zeigt, dass die Isma eine Deutung *gegen* den Wortlaut braucht. Wer das für den Koran in Anspruch nimmt, kann der Bibel nicht vorwerfen, ihre Propheten als Menschen mit Sünden darzustellen.`,
                  sources: [
                    { kind: 'koran', work: 'Sure 80 (\'Abasa)', ref: '80:1–2', quote: `Er runzelte die Stirn und wandte sich ab, weil der Blinde zu ihm kam.`, original: `ʿabasa wa-tawallā an jāʾahu l-aʿmā`, translation: 'Bubenheim/Elyas (sinngemäß)', status: 'paraphrase', url: 'https://quran.com/80/1-2' },
                    { kind: 'koran', work: 'Sure 9 (at-Tauba)', ref: '9:43', quote: `Allah verzeihe dir! Warum hast du ihnen erlaubt (zurückzubleiben), bevor dir klar wurde, wer die Wahrheit sagte?`, original: `ʿafā llāhu ʿanka li-ma adhinta lahum`, translation: 'Bubenheim/Elyas (sinngemäß)', status: 'paraphrase', url: 'https://quran.com/9/43' },
                  ],
                  questionsBack: [
                    `Wenn 48:2 von Mohammeds „früherer und späterer Sünde" spricht – wo sagt der Koran so etwas über Jesus?`,
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'noah-trunken',
      objection: `Noah betrank sich und lag nackt in seinem Zelt (Gen 9,21). Ein großer Prophet als Trunkenbold – das ist eine Beleidigung.`,
      objectionBy: 'Ahmed Deedat',
      answer: `Die Bibel nennt Noah gerecht und untadelig in seiner Zeit (Gen 6,9) – und berichtet zugleich, dass er nach der Flut vom Wein betrunken wurde. Sie verurteilt nicht ihn, sondern die Respektlosigkeit Hams. Die Geschichte zeigt, dass selbst der Gerechte, durch den Gott die Menschheit rettete, schwach ist. Auch der Koran lässt Noah um Vergebung bitten (71:28).`,
      sources: [
        { kind: 'koran', work: 'Sure 71 (Nuh)', ref: '71:28', quote: `Mein Herr, vergib mir und meinen Eltern …`, original: `rabbi ghfir lī wa-li-wālidayya`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/71/28' },
      ],
      followUps: [
        {
          id: 'jesus-trinkt-wein',
          objection: `Und Jesus trinkt nicht nur Wein, er macht sogar Wein aus Wasser (Joh 2)! Ein Prophet, der Alkohol verteilt – das kann nicht von Gott sein.`,
          objectionBy: 'Zakir Naik',
          answer: `Die Bibel unterscheidet zwischen Wein und Trunkenheit: Wein ist eine Gabe, „dass er des Menschen Herz erfreue" (Ps 104,15), Trunkenheit dagegen ist Sünde (Eph 5,18; Spr 20,1). Auch der Koran hält Wein nicht für in sich böse: Er verheißt im Paradies „Ströme von Wein, köstlich für die Trinkenden" (47:15), und das Verbot kam nach islamischer Überlieferung erst schrittweise – 4:43 untersagt nur, *betrunken* zum Gebet zu kommen, setzt also voraus, dass Muslime damals noch Wein tranken.`,
          detail: `Die klassische islamische Lehre von der stufenweisen Offenbarung des Weinverbots (2:219 → 4:43 → 5:90) zeigt: Auch nach islamischem Verständnis war Weingenuss für Propheten und Gläubige nicht immer verboten. Die Hochzeit zu Kana ist im Johannesevangelium das erste „Zeichen" Jesu: Er verwandelt das Wasser der jüdischen Reinigungskrüge in Wein der messianischen Freude (vgl. Jes 25,6). Die koptische Kirche feiert in der Eucharistie Wein, der durch die Herabkunft des Heiligen Geistes zum wahren Blut Christi wird.`,
          sources: [
            { kind: 'bibel', work: 'Psalm', ref: '104,15', quote: `… und dass der Wein erfreue des Menschen Herz …`, translation: 'Luther 1912', status: 'paraphrase' },
            { kind: 'bibel', work: 'Epheser', ref: '5,18', quote: `Und saufet euch nicht voll Weins, daraus ein unordentlich Wesen folgt, sondern werdet voll Geistes.`, translation: 'Luther 1912', status: 'verbatim' },
            { kind: 'koran', work: 'Sure 47 (Muhammad)', ref: '47:15', quote: `… und Ströme von Wein, köstlich für die Trinkenden …`, original: `wa-anhārun min khamrin ladhdhatin li-sh-shāribīn`, translation: 'Bubenheim/Elyas (sinngemäß)', status: 'paraphrase', url: 'https://quran.com/47/15' },
            { kind: 'koran', work: 'Sure 4 (an-Nisa\')', ref: '4:43', quote: `O die ihr glaubt, nähert euch nicht dem Gebet, während ihr trunken seid, bis ihr wisst, was ihr sagt.`, translation: 'Bubenheim/Elyas (sinngemäß)', status: 'paraphrase', url: 'https://quran.com/4/43' },
          ],
          questionsBack: [
            `Wenn Wein in sich böse wäre – warum verheißt der Koran Ströme davon im Paradies?`,
          ],
        },
      ],
    },
    {
      id: 'salomo-goetzendienst',
      objection: `Die Bibel behauptet, Salomo habe am Ende Götzen gedient (1 Kön 11,4–8). Der Koran stellt richtig: „Nicht Salomo war ungläubig, sondern die Teufel" (2:102). Hier korrigiert der Koran die Verleumdung eines Propheten durch die Bibel.`,
      objectionBy: 'Ali Ataie',
      answer: `Schau in den Zusammenhang von 2:102: Es geht um Zauberei, die die Teufel „zur Zeit der Herrschaft Salomos" lehrten – also um Legenden, Salomo sei ein Magier gewesen. Diese Legenden stehen nicht in der Bibel, sondern in späteren jüdischen und volkstümlichen Überlieferungen. Der Koran weist eine Zauberei-Legende zurück, nicht 1 Kön 11. Und auch der Koran kennt eine Prüfung Salomos, nach der er umkehrte (38:34).`,
      detail: `1 Kön 11 schildert, wie Salomos ausländische Frauen „sein Herz fremden Göttern zuneigten" – als Erfüllung der Warnung in Dtn 17,17, ein König solle nicht viele Frauen nehmen. Die Folge ist die Teilung des Reiches (1 Kön 11,11–13). Nehemia greift das später als Warnung auf (Neh 13,26). Die Bibel ehrt Salomo für seine Weisheit und den Tempelbau und verschweigt zugleich nicht seinen Fall – so wie sie es bei David tut. Die Vorstellung von Salomo als Herr der Dämonen und Magier findet sich dagegen etwa im „Testament Salomos" (frühchristlich-jüdische Pseudepigraphie) und in volkstümlichen Erzählungen.`,
      sources: [
        { kind: 'koran', work: 'Sure 2 (al-Baqara)', ref: '2:102', quote: `Und sie folgten dem, was die Teufel unter der Herrschaft Salomos vortrugen. Doch nicht Salomo war ungläubig, sondern die Teufel waren ungläubig, indem sie die Menschen die Zauberei lehrten.`, original: `wa-mā kafara sulaymānu wa-lākinna sh-shayāṭīna kafarū yuʿallimūna n-nāsa s-siḥr`, translation: 'Bubenheim/Elyas (sinngemäß)', status: 'paraphrase', url: 'https://quran.com/2/102' },
        { kind: 'koran', work: 'Sure 38 (Sad)', ref: '38:34', quote: `Und Wir hatten ja Salomo der Prüfung unterzogen und auf seinen Thron einen Körper gesetzt; hierauf wandte er sich (Allah) reuig zu.`, translation: 'Bubenheim/Elyas (sinngemäß)', status: 'paraphrase', url: 'https://quran.com/38/34' },
        { kind: 'bibel', work: '1. Könige', ref: '11,4', quote: `Und da er nun alt war, neigten seine Weiber sein Herz fremden Göttern nach.`, translation: 'Luther 1912', status: 'paraphrase' },
      ],
      questionsBack: [
        `Wo in der Bibel steht, dass Salomo Zauberei lehrte – worauf 2:102 antwortet?`,
      ],
      followUps: [
        {
          id: 'gott-erwaehlt-keinen-goetzendiener',
          objection: `Ein Mann, den Gott mit Weisheit und Prophetie beschenkt, fällt am Ende in Götzendienst? Das macht Gottes Erwählung lächerlich.`,
          objectionBy: 'Zakir Naik',
          answer: `Es macht nicht Gottes Erwählung lächerlich, sondern zeigt, dass selbst die größte Gabe nicht vor dem Fall schützt, wenn das Herz sich abwendet. Genau deshalb steht die Geschichte da: als Warnung für jeden Gläubigen, auch für Könige und Gelehrte. Gott bleibt treu und gerecht – er straft Salomos Untreue, hält aber seine Verheißung an David. Und noch einmal: Eine Schrift, die die Schande ihres prächtigsten Königs erzählt, ist schwer als Propaganda zu erklären.`,
          detail: `Im Alten Testament ist Salomo vor allem König und Weiser, nicht Prophet im Sinn eines Offenbarungsträgers wie Mose oder Jesaja. Die islamische Kategorie „Prophet" (nabī) ist weiter gefasst als die biblische. Wer die Bibel nach der islamischen Isma-Lehre beurteilt, legt einen fremden Maßstab an – einen Maßstab, den, wie gezeigt, auch der Koran selbst nicht durchhält.`,
          sources: [
            { kind: 'bibel', work: 'Nehemia', ref: '13,26', quote: `Hat nicht Salomo, der König Israels, daran gesündigt? … und doch machten ihn die ausländischen Weiber zur Sünde.`, translation: 'Luther 1912', status: 'paraphrase' },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wie verstehst du 20:121: „Adam widersetzte sich seinem Herrn"?`,
    `Wofür soll Mohammed nach 47:19 um Vergebung bitten?`,
    `Warum bezeugen Koran und Hadith ausgerechnet Jesus als rein von Geburt an?`,
    `Ist eine Geschichte unglaubwürdig, weil sie die Schwächen ihrer Helden zeigt?`,
  ],
  avoid: [
    `Nicht mit Angriffen auf Mohammeds Lebensführung antworten. Bleib bei der Frage, wie Bibel und Koran Propheten darstellen.`,
    `Nicht behaupten, die Bibel lehre, die Propheten seien „schlechte Menschen" gewesen. Sie waren Gerechte, die fielen und bereuten.`,
  ],
  concessions: [
    `Einige biblische Erzählungen (Lot und seine Töchter) sind verstörend; die Bibel erzählt sie ohne ausdrückliche Bewertung, was beim Lesen Unbehagen auslöst.`,
    `Innerhalb der islamischen Tradition gibt es unterschiedliche Auffassungen über Umfang und Grenzen der Isma.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Nabeel Qureshi', work: 'Seeking Allah, Finding Jesus', year: '2014', status: 'paraphrase' },
    { kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Homilien über die Buße (De paenitentia)', year: 'um 387', status: 'paraphrase' },
  ],
  difficulty: 1,
  tags: ['Propheten', 'Isma', 'Sünde', 'Islam'],
  related: [
    'islam-gottheit-christi/jesus-nur-ein-prophet',
    'islam-mohammed/mohammed-wahrer-prophet',
    'islam-kreuzigung/keine-erbsuende-fitra',
  ],
};

export default claim;
