import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'religion-herrschaftsinstrument',
  title: `„Religion ist ein Herrschaftsinstrument der Mächtigen."`,
  proponents: [
    {
      name: 'Kritias',
      role: 'Athenischer Politiker und Dichter (ca. 460–403 v. Chr.)',
      work: 'Sisyphos-Fragment (DK 88 B25): Ein kluger Mann habe die Götter erfunden, damit die Menschen auch im Verborgenen das Unrecht fürchten',
    },
    {
      name: 'Karl Marx / Friedrich Engels',
      role: 'Begründer des Marxismus',
      work: 'Die deutsche Ideologie (1845/46): „Die Gedanken der herrschenden Klasse sind in jeder Epoche die herrschenden Gedanken."',
    },
    {
      name: 'Yuval Noah Harari',
      role: 'Historiker, Hebräische Universität Jerusalem',
      work: 'Sapiens (2011) – Religionen als „gemeinsame Fiktionen", die Massenkooperation und Hierarchien stabilisieren',
    },
    {
      name: 'Christopher Hitchens',
      role: 'Journalist und Autor (1949–2011)',
      work: 'God Is Not Great: How Religion Poisons Everything (2007)',
    },
  ],
  steelman: `Schon in der Antike durchschaute man das Spiel: Der Athener Kritias ließ eine Figur erklären, ein kluger Mann habe die Götter erfunden, damit die Menschen auch dort das Unrecht fürchten, wo kein Gesetz sie sieht. Seitdem hat sich das Muster ständig wiederholt. Könige regierten „von Gottes Gnaden", Bischöfe krönten Kaiser, Priester segneten Waffen. Seit Konstantin war die Kirche mit dem Staat verbündet; sie wurde reich, besaß Land, unterdrückte Andersgläubige und rechtfertigte Hierarchien – zwischen Herren und Sklaven, Männern und Frauen, Kolonisatoren und Kolonisierten. Paulus lieferte dafür sogar den Schlüsseltext: „Jedermann sei untertan der Obrigkeit" (Röm 13,1). Die Drohung mit der Hölle ist das wirksamste Kontrollmittel, das je erfunden wurde. Wer die Menschen befreien will, muss ihnen diese Fessel nehmen.`,
  biblical: {
    summary: `Das Christentum beginnt nicht auf einem Thron, sondern am Kreuz: Sein Gründer wurde von der Allianz aus religiöser Führung und römischer Staatsmacht hingerichtet. Maria besingt einen Gott, der „die Gewaltigen vom Stuhl stößt und die Niedrigen erhebt" (Lk 1,52). Die Propheten traten Königen entgegen: Nathan David (2 Sam 12,7: „Du bist der Mann!"), Elia Ahab, Johannes der Täufer Herodes – er bezahlte es mit dem Leben. Jesus stellt die Herrschaft der Mächtigen ausdrücklich unter Kritik (Mk 10,42–45). Die Apostel erklären dem Hohen Rat: „Man muß Gott mehr gehorchen denn den Menschen" (Apg 5,29). Röm 13 begründet staatliche Ordnung von ihrem Zweck her – die Obrigkeit ist „Gottes Dienerin, dir zugut" –, und die Offenbarung zeigt den Staat, der sich vergöttlicht, als Tier aus dem Meer (Offb 13).`,
    detail: `- **Königtum unter Gottes Gesetz:** Dtn 17,14–20 begrenzt die Macht des Königs: keine Anhäufung von Pferden, Frauen, Silber; er soll das Gesetz abschreiben und sich nicht über seine Brüder erheben. 1 Sam 8 warnt Israel vor den Folgen des Königtums.
- **Röm 13 im Zusammenhang:** Paulus schreibt unter Nero an eine machtlose Minderheit. Er begründet Gehorsam mit dem Auftrag der Obrigkeit, das Böse zu strafen und das Gute zu fördern (13,3–4). Wo der Staat Götzendienst verlangt, gilt Apg 5,29 – und die Märtyrer haben genau das gelebt.
- **Jesus vor Pilatus:** „Mein Reich ist nicht von dieser Welt" (Joh 18,36) – die Herrschaft Christi lässt sich nicht in politische Macht umwandeln.`,
    sources: [
      { kind: 'bibel', work: 'Lukas', ref: '1,52', quote: `Er stößt die Gewaltigen vom Stuhl und erhebt die Niedrigen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '2. Samuel', ref: '12,7', quote: `Da sprach Nathan zu David: Du bist der Mann!`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '5,29', quote: `Petrus aber antwortete und die Apostel und sprachen: Man muß Gott mehr gehorchen denn den Menschen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Römer', ref: '13,4', quote: `Denn sie ist Gottes Dienerin, dir zugut.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '18,36', quote: `Mein Reich ist nicht von dieser Welt.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Deuteronomium (5. Mose)', ref: '17,18–20', quote: `Der König soll eine Abschrift des Gesetzes nehmen, darin lesen sein Leben lang, damit er den HERRN fürchten lerne und sein Herz sich nicht über seine Brüder erhebe.`, status: 'paraphrase' },
    ],
  },
  church: {
    summary: `Die koptische Kirche ist das historische Gegenbeispiel zur These vom Herrschaftsinstrument. Ihr Kalender beginnt mit dem Jahr 284 – der Thronbesteigung Diokletians, unter dem die schwerste Verfolgung über Ägypten kam (*Anno Martyrum*). Athanasius wurde fünfmal von Kaisern verbannt. Nach 451 war die koptische Kirche nie mehr Staatskirche: Sie litt unter byzantinischen Machthabern, die ihr ein anderes Bekenntnis aufzwingen wollten – Papst Benjamin I. musste sich jahrelang verstecken –, und lebte danach über dreizehn Jahrhunderte als Minderheit unter islamischer Herrschaft. Noch Papst Schenuda III. wurde 1981 von Präsident Sadat in das Kloster des hl. Bischoi verbannt. Diese Kirche hat nie geherrscht; sie hat überlebt, gebetet und gedient.`,
    detail: `- **Tertullian** formulierte um 212 in einem Brief an den Statthalter Scapula als erster die Religionsfreiheit als Menschenrecht: Es sei ein Recht der Menschen und eine natürliche Befugnis, dass jeder verehre, was er für richtig halte; es gehöre nicht zur Religion, Religion zu erzwingen.
- **Ambrosius von Mailand** verweigerte 390 Kaiser Theodosius die Kommunion, bis dieser öffentlich Buße für das Massaker von Thessalonich tat – ein frühes Beispiel dafür, dass die Kirche Herrscher unter ein höheres Gesetz stellte.
- **Neuere Zeit:** Die Anschläge auf koptische Kirchen (Kairo, Dezember 2016; Tanta und Alexandria, Palmsonntag 2017) und der Mord an den 21 Märtyrern in Libyen (2015) zeigen, auf welcher Seite der Macht die Kopten stehen.`,
    sources: [
      { kind: 'kirchenvater', author: 'Tertullian', work: 'An Scapula (Ad Scapulam)', ref: '2', year: 'um 212', quote: `Es ist ein Recht der Menschen und eine natürliche Befugnis, dass jeder verehrt, was er für richtig hält … Es ist nicht Sache der Religion, Religion zu erzwingen.`, original: `Tamen humani iuris et naturalis potestatis est unicuique quod putaverit colere … sed nec religionis est cogere religionem.`, translation: 'eigene Übersetzung', status: 'verbatim', note: 'Tertullian wird als Apologet zitiert, nicht als Lehrautorität (Hinwendung zum Montanismus).' },
      { kind: 'koptisch', work: 'Koptischer Kalender (Anno Martyrum)', quote: `Die koptische Zeitrechnung beginnt mit dem Jahr 284, dem Regierungsantritt Kaiser Diokletians, zum Gedächtnis der Märtyrer seiner Verfolgung.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Historisch ist unbestreitbar, dass Religion – auch das Christentum – oft mit politischer Macht verflochten war und zur Legitimation von Herrschaft gedient hat (Gottesgnadentum, Staatskirchen, Kolonialismus). Die These, Religion sei *ihrem Wesen nach* oder *ihrem Ursprung nach* ein Herrschaftsinstrument, ist dagegen nicht belegt. Religion ist älter als Staaten; die Monumentalanlage von Göbekli Tepe in Anatolien (um 9500 v. Chr.) wurde nach Deutung ihres Ausgräbers Klaus Schmidt als Kultstätte von Jägern und Sammlern errichtet, bevor es Städte und Herrscher gab. Historiker wie Brian Tierney (*The Idea of Natural Rights*, 1997) und Tom Holland (*Dominion*, 2019) zeigen umgekehrt, dass zentrale Ideen der Machtbegrenzung – Naturrechte, Gewissensfreiheit, Gleichheit vor Gott – im christlichen Denken wurzeln.`,
    detail: `- **Falschzitat beachten:** Der oft Seneca zugeschriebene Satz „Religion gilt dem Volk als wahr, den Weisen als falsch und den Herrschern als nützlich" stammt nicht von Seneca, sondern ist eine Abwandlung eines Satzes von Edward Gibbon (*Decline and Fall of the Roman Empire*, Kap. 2) über die *heidnische* Religion Roms. Pointe: Gerade weil die Christen sich weigerten, für den römischen Staatskult „nützlich" zu sein, wurden sie verfolgt.
- **Die atheistischen Staaten des 20. Jahrhunderts** (Sowjetunion, Albanien als erklärt atheistischer Staat ab 1967, Kambodscha unter den Roten Khmer, Nordkorea) gehörten zu den repressivsten Herrschaftssystemen der Geschichte.`,
    sources: [
      { kind: 'gegner', author: 'Kritias', work: 'Sisyphos-Fragment', ref: 'DK 88 B25', year: '5. Jh. v. Chr.', quote: `Ein kluger und gedankenreicher Mann erfand für die Sterblichen die Furcht vor den Göttern, damit die Bösen sich fürchteten, auch wenn sie im Verborgenen handelten oder dächten.`, status: 'paraphrase', note: 'Die Zuschreibung an Kritias (oder Euripides) ist in der Forschung umstritten.' },
      { kind: 'gegner', author: 'Karl Marx, Friedrich Engels', work: 'Die deutsche Ideologie', year: '1845/46', quote: `Die Gedanken der herrschenden Klasse sind in jeder Epoche die herrschenden Gedanken.`, status: 'verbatim' },
      { kind: 'fachliteratur', author: 'Edward Gibbon', work: 'The History of the Decline and Fall of the Roman Empire', ref: 'Kap. 2', year: '1776', quote: `Die verschiedenen Arten der Verehrung im Römischen Reich galten dem Volk als gleich wahr, dem Philosophen als gleich falsch und dem Magistrat als gleich nützlich.`, original: `The various modes of worship which prevailed in the Roman world were all considered by the people as equally true; by the philosopher as equally false; and by the magistrate as equally useful.`, translation: 'eigene Übersetzung', status: 'verbatim', note: 'Quelle des oft fälschlich Seneca zugeschriebenen Spruchs; Gibbon spricht über die heidnische Religion Roms.' },
      { kind: 'fachliteratur', author: 'Brian Tierney', work: 'The Idea of Natural Rights: Studies on Natural Rights, Natural Law and Church Law 1150–1625', year: '1997', quote: `Die Idee subjektiver Naturrechte entstand im Kirchenrecht des 12. Jahrhunderts, nicht erst in der Aufklärung.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Ja, Religion wurde oft von Mächtigen missbraucht – auch das Christentum, das gebe ich offen zu. Aber das Christentum *beginnt* als Religion der Machtlosen: Sein Gründer wurde von der Staatsmacht gekreuzigt, die ersten dreihundert Jahre waren Verfolgung. Meine eigene, die koptische Kirche, war seit dem 5. Jahrhundert nie Staatskirche, sondern lebte unter Fremdherrschaft – ihr Kalender beginnt mit den Märtyrern Diokletians. Und der Satz „Man muss Gott mehr gehorchen als den Menschen" ist das Gegenteil eines Herrschaftsinstruments: Er setzt jeder Macht eine Grenze.`,
  keyPoints: [
    `**Ehrliches Zugeständnis:** Kirchen haben Macht missbraucht und Herrschaft legitimiert – das verrät ihre eigenen Maßstäbe (Mk 10,42–43).`,
    `**Ursprung in der Machtlosigkeit:** Ein gekreuzigter Messias, drei Jahrhunderte Verfolgung – das Christentum hat Rom ohne Schwert erobert.`,
    `**Die Bibel stellt Herrscher unter Gottes Gericht:** Propheten gegen Könige, das Magnifikat, Apg 5,29 – jede Macht hat eine Grenze.`,
    `**Die koptische Kirche als Gegenbeispiel:** Kirche der Märtyrer (Anno Martyrum 284), nie Staatskirche nach 451, bis heute unter Druck.`,
    `**Machtbegrenzung hat christliche Wurzeln:** Religionsfreiheit (Tertullian), Kirchenbuße für Kaiser (Ambrosius), Naturrechte im Kirchenrecht (Tierney).`,
    `**Ohne Gott fehlt die Berufungsinstanz über dem Staat:** Die erklärt atheistischen Staaten des 20. Jahrhunderts gehörten zu den repressivsten der Geschichte.`,
  ],
  voices: [
    {
      person: 'lukas',
      role: 'als Evangelist und Historiker der Urgemeinde',
      text: `Lukas erzählt die Geschichte Jesu bewusst im Rahmen der Weltpolitik – „Es begab sich aber zu der Zeit, daß ein Gebot von dem Kaiser Augustus ausging" (Lk 2,1) – und stellt dem Kaiser, der sich als Retter und Friedensbringer feiern ließ, ein Kind in einer Krippe gegenüber, das von Hirten angebetet wird. In der Apostelgeschichte berichtet er, wie die Apostel vor dem Hohen Rat erklären, man müsse Gott mehr gehorchen als den Menschen, und wie die Botschaft gerade unter Verfolgung wächst. Die Gegner werfen den Christen in Thessalonich vor, sie handelten „gegen des Kaisers Gebote und sagen, ein anderer sei der König, nämlich Jesus" (Apg 17,7).`,
      sources: [
        { kind: 'bibel', work: 'Apostelgeschichte', ref: '17,6–7', quote: `Diese, die den ganzen Weltkreis erregen, sind auch hergekommen … und diese alle handeln gegen des Kaisers Gebote, sagen, ein anderer sei der König, nämlich Jesus.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
    },
    {
      person: 'tertullian',
      role: 'als Apologet unter Verfolgung (mit Vorbehalt)',
      text: `Tertullian verteidigte die Christen um 200 gegen den Vorwurf, Staatsfeinde zu sein: Sie beten für den Kaiser, zahlen Steuern, leben friedlich – aber sie verehren ihn nicht als Gott. In seinem Brief an den Statthalter Scapula formulierte er als einer der Ersten den Grundsatz der Religionsfreiheit: Es gehöre zum Menschenrecht und zur natürlichen Freiheit, dass jeder verehre, was er für richtig halte; Religion zu erzwingen widerspreche dem Wesen der Religion. Sein berühmter Satz im *Apologeticum* („Ein Same ist das Blut der Christen") zeigt, wie die Kirche wuchs: nicht durch Macht, sondern durch Märtyrer. Tertullian wird hier als Apologet zitiert; seine spätere Hinwendung zum Montanismus macht ihn nicht zur Lehrautorität.`,
      sources: [
        { kind: 'kirchenvater', author: 'Tertullian', work: 'Apologeticum', ref: '50,13', year: '197', quote: `Wir werden zahlreicher, sooft wir von euch niedergemäht werden: Ein Same ist das Blut der Christen.`, original: `Plures efficimur, quotiens metimur a vobis: semen est sanguis Christianorum.`, translation: 'eigene Übersetzung', status: 'verbatim' },
      ],
    },
    {
      person: 'athanasius',
      role: 'als fünfmal verbannter Bischof',
      text: `Athanasius war 45 Jahre Papst von Alexandrien, davon rund 17 Jahre in fünf Verbannungen – verhängt von Kaisern, die eine arianische oder kompromisslerische Lehre durchsetzen wollten. Er versteckte sich bei den Mönchen der ägyptischen Wüste, die ihn schützten. Daraus entstand die Formel „Athanasius contra mundum" – Athanasius gegen die Welt. Sein Leben widerlegt die These, die Kirche sei nur ein Werkzeug der Herrschenden: Der wichtigste Theologe des 4. Jahrhunderts stand fast sein ganzes Leben im Konflikt mit der Staatsmacht.`,
    },
    {
      person: 'shenouda-iii',
      role: 'als Papst, der vom Staat verbannt wurde',
      text: `Papst Schenuda III. setzte sich in den 1970er-Jahren öffentlich gegen die zunehmende Diskriminierung der Kopten ein. Im September 1981 entzog ihm Präsident Anwar as-Sadat die staatliche Anerkennung und verbannte ihn in das Kloster des hl. Bischoi im Wadi Natrun; erst 1985 durfte er zurückkehren. Er nutzte die Jahre im Kloster zum Gebet und zum Schreiben. Das ist das Bild einer Kirche, die nicht mit der Macht paktiert, sondern ihr widersteht – mit Geduld, ohne Gewalt.`,
    },
    {
      person: 'rodney-stark',
      role: 'als Religionssoziologe',
      text: `Rodney Stark hat in *The Rise of Christianity* (1996) gezeigt, dass das Christentum in den ersten drei Jahrhunderten ohne jede staatliche Förderung von einer winzigen Gruppe zu einer Bewegung von Millionen wuchs – trotz wiederholter Verfolgung. Ein Herrschaftsinstrument, das sich drei Jahrhunderte lang gegen die Herrschenden durchsetzen musste, ist ein seltsames Herrschaftsinstrument. Stark erklärt das Wachstum mit sozialen Netzwerken, der Fürsorge in Seuchenzeiten, der höheren Stellung der Frauen und der Attraktivität einer Gemeinschaft, in der Sklaven und Freie gemeinsam am Tisch saßen.`,
    },
  ],
  dialog: [
    {
      id: 'goetter-erfunden-zur-kontrolle',
      objection: `Schon die alten Griechen wussten es: Kluge Herrscher haben die Götter erfunden, damit die Menschen auch dann gehorchen, wenn kein Polizist zusieht. Religion ist die billigste Polizei der Welt.`,
      objectionBy: 'Kritias (Sisyphos-Fragment) / Yuval Noah Harari',
      answer: `Wo ist der Beleg? Religion ist älter als Staaten und Herrscher – die Kultanlage von Göbekli Tepe wurde von Jägern und Sammlern errichtet, Jahrtausende bevor es Könige gab. Und die Bibel ist das Gegenteil eines Herrscherhandbuchs: Ihre Propheten klagen Könige an, ihr Messias wird von der Staatsmacht gekreuzigt. Außerdem ist es ein genetischer Fehlschluss: Selbst wenn jemand Religion zur Kontrolle benutzt hat, folgt daraus nicht, dass Gott nicht existiert.`,
      detail: `Das Kritias-Fragment ist eine Theaterrede, keine historische Untersuchung; seine Zuschreibung ist umstritten. Harari nennt Religionen in *Sapiens* „gemeinsame Fiktionen" – aber er nennt auch Menschenrechte, Nationen und Geld so. Wenn alles Fiktion ist, was Menschen gemeinsam glauben, sagt das Wort nichts mehr über Wahrheit. Zu Göbekli Tepe: Die Deutung als Kultanlage stammt vom Ausgräber Klaus Schmidt; Details sind in der Forschung diskutiert.`,
      questionsBack: [
        `Welche historischen Belege gibt es dafür, dass Religion von Herrschern erfunden wurde – und nicht umgekehrt älter ist als Herrschaft?`,
        `Wenn Religion ein Herrschaftsinstrument ist: Warum hat der römische Staat das Christentum drei Jahrhunderte lang verfolgt?`,
      ],
      followUps: [
        {
          id: 'gottesgnadentum',
          objection: `Aber das Christentum hat sich doch perfekt dazu geeignet: Könige „von Gottes Gnaden", Bischöfe krönten Kaiser, Thron und Altar waren über tausend Jahre verbündet.`,
          objectionBy: 'Historischer Kritiker',
          answer: `Das stimmt für weite Teile der europäischen Geschichte, und das war oft ein Verrat am Evangelium. Aber auch damals stand die Kirche unter einem Maßstab, der Könige begrenzte: Das Gesetz Gottes stand über dem König (Dtn 17,18–20). Ambrosius verweigerte Kaiser Theodosius 390 die Kommunion, bis er öffentlich Buße für ein Massaker tat. Die Idee, dass ein Herrscher einem höheren Gesetz verantwortlich ist, stammt gerade aus dem biblischen Glauben – ohne sie gäbe es keinen Rechtsstaat.`,
          detail: `Die koptische Tradition kennt dieselbe Haltung: Athanasius gegen Konstantius, Dioskur gegen Kaiser Markian. Und sie kennt den Preis: Verbannung, Absetzung, Verfolgung. Brian Tierney hat gezeigt, dass das Konzept subjektiver Naturrechte im Kirchenrecht des 12. Jahrhunderts entstand – eine Wurzel der modernen Menschenrechte.`,
          followUps: [
            {
              id: 'roemer-13',
              objection: `Paulus schreibt: „Jedermann sei untertan der Obrigkeit, die Gewalt über ihn hat." Ein perfekter Freibrief für jeden Tyrannen.`,
              objectionBy: 'Christopher Hitchens',
              answer: `Paulus schreibt das unter Nero an eine machtlose Minderheit und begründet staatliche Gewalt von ihrem Zweck her: Sie ist „Gottes Dienerin, dir zugut", um das Böse zu strafen und das Gute zu fördern. Ein Staat, der das Gute bestraft, verfehlt seinen Auftrag. Wo der Staat verlangt, was Gott verbietet, gilt Apg 5,29: „Man muß Gott mehr gehorchen denn den Menschen." Die Offenbarung zeichnet den Staat, der sich anbeten lässt, als Tier (Offb 13). Und die koptischen Märtyrer haben unter Diokletian genau diesen Gehorsam verweigert.`,
              detail: `Röm 13 ist kein Freibrief, sondern eine Begründung *und* Begrenzung staatlicher Macht. Die Tradition hat das immer so gelesen: Die Christen zahlten Steuern und beteten für den Kaiser, aber sie opferten ihm nicht. Diese Unterscheidung zwischen legitimer Ordnung und illegitimem Absolutheitsanspruch ist eine der wichtigsten Wurzeln der Freiheit.`,
              followUps: [
                {
                  id: 'maertyrer-passiv',
                  objection: `Märtyrer sterben lieber, statt zu kämpfen. Das ist passiver Gehorsam – genau das, was Herrscher wollen: Untertanen, die sich nicht wehren.`,
                  objectionBy: 'Religionskritiker',
                  answer: `Für die römischen Kaiser waren die Märtyrer das Gegenteil von bequem: Sie verweigerten das Einzige, was dem Staat wirklich wichtig war – die Anerkennung seiner göttlichen Autorität. Und sie haben gewonnen: Ohne ein einziges Schwert wurde das verfolgte Christentum stärker als das Imperium. Tertullian: „Ein Same ist das Blut der Christen." Gewaltloser Widerstand hat auch im 20. Jahrhundert Regime gestürzt – etwa die DDR 1989, ausgehend von Friedensgebeten in den Kirchen.`,
                  detail: `Das Martyrium ist die radikalste Form, einer Macht zu sagen: Du bist nicht Gott. Die koptische Kirche hat diese Haltung bis heute bewahrt – die 21 Märtyrer von Libyen (2015) haben ihren Mördern weder Gewalt noch Unterwerfung geboten, sondern das Bekenntnis zu Christus.`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'kirche-reich-maechtig',
      objection: `Die Kirche war und ist reich und mächtig: Paläste, Landbesitz, Einfluss auf Politik. Das ist kein Zufall, sondern das Wesen organisierter Religion.`,
      objectionBy: 'Christopher Hitchens',
      answer: `Reichtum und Machtgier in der Kirche sind real und ein Skandal – gemessen an Christus selbst, der „nicht hatte, wo er sein Haupt hinlege". Aber gerade aus dem Protest dagegen entstand eine der großen Bewegungen der Kirchengeschichte: das Mönchtum. Der hl. Antonius verkaufte sein Erbe, gab es den Armen und ging in die ägyptische Wüste. Und die koptische Kirche ist bis heute eine Kirche der Armen – etwa unter den Müllsammlern von Kairo.`,
      detail: `Nach der Vita Antonii (Kap. 2) hörte Antonius in der Kirche das Wort Jesu: „Willst du vollkommen sein, so gehe hin, verkaufe, was du hast, und gib's den Armen" (Mt 19,21) – und tat es. Das ägyptische Mönchtum war von Anfang an ein Gegenentwurf zu einer Kirche, die sich mit Macht und Reichtum arrangiert. Siehe auch den Claim „Die Kirche ist reich und heuchlerisch".`,
      sources: [
        { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Leben des Antonius (Vita Antonii)', ref: '2', year: 'ca. 357', quote: `Antonius hörte im Gottesdienst das Wort „Verkaufe, was du hast, und gib's den Armen", ging hinaus, verschenkte sein Erbe und behielt nur wenig für seine Schwester.`, status: 'paraphrase' },
      ],
      followUps: [
        {
          id: 'mission-kolonialismus',
          objection: `Und die Mission? Missionare kamen mit den Kolonisatoren. Die Bibel in der einen Hand, das Gewehr in der anderen. Christentum war die Ideologie des Kolonialismus.`,
          objectionBy: 'Postkolonialer Kritiker',
          answer: `Es gab diese Verflechtung, und sie war oft schändlich. Aber es gab auch Missionare, die die Einheimischen gegen die Kolonisatoren verteidigten – wie Bartolomé de las Casas. Und vor allem: Das Christentum in Afrika ist älter als jeder Kolonialismus. Die ägyptische Kirche geht auf den Evangelisten Markus zurück; Athanasius weihte im 4. Jahrhundert Frumentius zum ersten Bischof Äthiopiens. Afrikanisches Christentum ist eine der ältesten Formen des Christentums überhaupt – keine europäische Importware.`,
          detail: `Siehe den Claim „Das Christentum hat Kolonialismus und Unterdrückung gerechtfertigt". Die äthiopisch-orthodoxe Kirche, eine Schwesterkirche der koptischen, ist seit dem 4. Jahrhundert die Kirche eines afrikanischen Königreichs, das nie dauerhaft kolonisiert wurde. Las Casas trat 1550/51 in der Disputation von Valladolid für die Menschenwürde der Ureinwohner Amerikas ein.`,
          followUps: [
            {
              id: 'las-casas-afrikaner',
              objection: `Ausgerechnet Las Casas! Der hat doch vorgeschlagen, statt der Indios afrikanische Sklaven nach Amerika zu bringen. Euer Held hat den atlantischen Sklavenhandel mitbefeuert.`,
              objectionBy: 'Postkolonialer Historiker',
              answer: `Das stimmt, und es ist gut, dass du es ansprichst. Las Casas hat in jungen Jahren tatsächlich die Einfuhr afrikanischer Sklaven empfohlen, um die Ureinwohner zu schonen. Später hat er das bitter bereut und in seiner *Geschichte Westindiens* geschrieben, die Versklavung der Afrikaner sei ebenso ungerecht wie die der Indios. Gerade das zeigt, wie das Evangelium wirkt: Es überführt auch die eigenen Leute – Las Casas wurde durch dieselben Maßstäbe korrigiert, mit denen er die Konquistadoren angeklagt hatte.`,
              detail: `Las Casas' Reue findet sich in der *Historia de las Indias* (Buch III), die er gegen Ende seines Lebens verfasste. Historiker betonen zudem, dass der Sklavenhandel bereits vor seinem Vorschlag in Gang war; seine Rolle wird in der populären Darstellung oft übertrieben. Ehrlich bleibt: Auch große Christen haben Fehler gemacht. Der Maßstab, an dem man sie misst, ist Christus – und dieser Maßstab hat Las Casas am Ende selbst verurteilt.`,
              voices: [
                {
                  person: 'las-casas',
                  role: 'als Anwalt der Ureinwohner Amerikas',
                  text: `Las Casas, zunächst selbst Kolonist mit indianischen Zwangsarbeitern, gab nach seiner Bekehrung um 1514 seinen Besitz auf und verbrachte sein Leben mit dem Kampf für die Ureinwohner. Er argumentierte, dass alle Völker vernunftbegabte Menschen nach Gottes Bild seien und das Evangelium nur durch Überzeugung, nie durch Gewalt verbreitet werden dürfe. Seine späte Selbstkritik zur Versklavung der Afrikaner zeigt, dass er diesen Maßstab ernst nahm – auch gegen sich selbst.`,
                  sources: [
                    { kind: 'fachliteratur', author: 'Bartolomé de las Casas', work: 'Historia de las Indias', ref: 'Buch III', year: 'um 1527–1561', quote: `Las Casas bereut, die Einfuhr afrikanischer Sklaven empfohlen zu haben; ihre Versklavung sei ebenso ungerecht wie die der Indios.`, status: 'paraphrase' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'ohne-religion-freier',
      objection: `Nimm den Menschen die Religion, und sie werden frei von Priestern, Höllenangst und heiligen Hierarchien. Religion vergiftet alles.`,
      objectionBy: 'Christopher Hitchens',
      answer: `Das 20. Jahrhundert hat diesen Versuch gemacht: Die Sowjetunion, Albanien – 1967 der erste erklärt atheistische Staat –, Kambodscha unter den Roten Khmer, Nordkorea. Sie haben nicht die Freiheit gebracht, sondern die totalste Kontrolle, die es je gab. Das heißt nicht, dass jeder Atheist ein Tyrann ist. Aber wenn es keinen Gott über dem Staat gibt, fehlt die letzte Berufungsinstanz, auf die sich ein Gewissen gegen den Staat berufen kann.`,
      detail: `Siehe den Claim „Die Verbrechen atheistischer Regime haben nichts mit Atheismus zu tun". Es geht nicht darum, Schuld aufzurechnen, sondern um eine strukturelle Beobachtung: Der Satz „Man muss Gott mehr gehorchen als den Menschen" ist das stärkste Bollwerk gegen die Vergöttlichung des Staates.`,
      followUps: [
        {
          id: 'nordkorea-ist-religion',
          objection: `Nordkorea ist doch selbst eine Religion – mit Gottkönigen, Ritualen, Dogmen. Totalitarismus ist immer religiös. Das beweist meinen Punkt.`,
          objectionBy: 'Christopher Hitchens',
          answer: `Dann bedeutet „Religion" jede absolute Ideologie – und deine These wird unwiderlegbar, weil du jedes Gegenbeispiel umdefinierst. Aber du triffst etwas Wahres: Der Mensch verehrt immer etwas. Die Frage ist nicht, ob er glaubt, sondern woran: an einen Staat, der sich vergöttlicht, oder an einen gekreuzigten Gott, der jede Vergötterung von Menschen verbietet. Gerade die Christen in Nordkorea, die den Kim-Kult verweigern, werden am härtesten verfolgt.`,
          detail: `Nordkorea steht seit vielen Jahren an der Spitze der Verfolgungsindizes für Christen. Die Pointe: Das Christentum ist nicht die Ursache des Totalitarismus, sondern sein natürlicher Feind, weil es Gott und Kaiser unterscheidet (Mt 22,21).`,
          followUps: [
            {
              id: 'christen-verfolgten-auch',
              objection: `Sobald Christen an der Macht waren, haben sie selbst verfolgt – Heiden, Juden, Ketzer. Ihr seid nur so lange für Freiheit, wie ihr in der Minderheit seid.`,
              objectionBy: 'Historischer Kritiker',
              answer: `Das ist leider oft wahr, und ich verteidige es nicht. Die koptische Kirche hat das übrigens selbst erlitten: Nach 451 verfolgten byzantinische Christen die Kopten, um ihnen ein anderes Bekenntnis aufzuzwingen. Die Lehre daraus ist nicht, dass das Evangelium Unterdrückung lehrt, sondern dass die Verschmelzung von Kirche und Staatsmacht das Evangelium verdirbt. Jesus hat es gesagt: „Mein Reich ist nicht von dieser Welt."`,
              detail: `Die byzantinische Verfolgung der Kopten erreichte unter dem Patriarchen und Präfekten Kyros (arabisch al-Muqawqis) in den 630er-Jahren einen Höhepunkt; der koptische Papst Benjamin I. lebte jahrelang im Verborgenen. Diese Erfahrung macht die koptische Kirche zu einer glaubwürdigen Stimme gegen jede Instrumentalisierung des Glaubens durch Macht.`,
              followUps: [
                {
                  id: 'hypatia',
                  objection: `Und in Alexandrien? Ein christlicher Mob hat 415 die Philosophin Hypatia aus ihrem Wagen gezerrt und in einer Kirche grausam ermordet – unter eurem Patriarchen Kyrill, den ihr als Heiligen verehrt. Da habt ihr Religion als Machtinstrument in Reinform.`,
                  objectionBy: 'Carl Sagan (Cosmos) / Film „Agora" (2009)',
                  answer: `Der Mord an Hypatia war ein entsetzliches Verbrechen, begangen von Christen, und es gibt nichts daran zu beschönigen. Schon der christliche Kirchenhistoriker Sokrates schrieb wenige Jahrzehnte später, nichts sei dem Geist des Christentums fremder als solche Morde. Ob Kyrill die Tat angestiftet hat, ist unter Historikern umstritten; keine zeitgenössische Quelle sagt, dass er sie befahl, aber das politische Klima in Alexandrien trug er mit. Die Kirche verehrt Kyrill für seine Verteidigung des Glaubens an Christus, nicht für die Kirchenpolitik seiner Zeit – Heilige sind keine fehlerlosen Menschen.`,
                  detail: `Sokrates Scholastikos (*Kirchengeschichte* VII,15) berichtet, ein Lektor namens Petrus habe die Täter angeführt; die Tat habe Kyrill und der ganzen alexandrinischen Kirche großen Schaden zugefügt. Der koptische Bischof Johannes von Nikiu (7. Jh.) stellt Hypatia dagegen feindselig dar – auch das muss man ehrlich zur Kenntnis nehmen. Populäre Darstellungen (Sagans *Cosmos*, der Film *Agora*) verbinden den Mord oft fälschlich mit der Zerstörung der großen Bibliothek, die zu dieser Zeit längst nicht mehr existierte, und machen aus Hypatia eine Märtyrerin der Wissenschaft gegen den Glauben – das Bild ist historisch vereinfacht (siehe Edward Watts, *Hypatia*, 2017).

Für das Gespräch: Erst das Unrecht klar benennen, dann die Fakten ordnen. Eine Kirche, die ihre Schuld nicht zugeben kann, macht sich unglaubwürdig.`,
                  voices: [
                    {
                      person: 'sokrates-scholastikos',
                      role: 'als christlicher Historiker des 5. Jahrhunderts',
                      text: `Sokrates, ein Laie aus Konstantinopel, schreibt über den Mord an Hypatia mit deutlicher Missbilligung. Er rühmt ihre Bildung und Besonnenheit und urteilt, die Tat habe der alexandrinischen Kirche Schande gebracht, denn Mord, Gewalt und dergleichen seien dem Christentum völlig fremd. Damit ist er ein frühes Zeugnis dafür, dass Christen diese Tat schon damals am Evangelium gemessen und verurteilt haben.`,
                      sources: [
                        { kind: 'kirchenvater', author: 'Sokrates Scholastikos', work: 'Kirchengeschichte (Historia ecclesiastica)', ref: 'VII,15', year: 'um 440', quote: `Diese Tat brachte Kyrill und der ganzen alexandrinischen Kirche nicht geringe Schande; denn nichts ist dem Geist des Christentums fremder als Morde, Kämpfe und dergleichen.`, status: 'paraphrase' },
                      ],
                    },
                  ],
                  questionsBack: [
                    `Woran misst du, dass dieser Mord ein Verbrechen war – und ist das nicht derselbe Maßstab, mit dem schon Sokrates ihn als unchristlich verurteilte?`,
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'priester-erfindet-suende',
      objection: `Der Priester herrscht durch die Erfindung der Sünde. Er macht den Menschen krank an Schuld, um sich dann als Arzt unentbehrlich zu machen. Das ist der eigentliche Machtmechanismus des Christentums – subtiler als jedes Schwert.`,
      objectionBy: 'Friedrich Nietzsche (Der Antichrist, 1888)',
      answer: `Schuld ist keine Erfindung von Priestern – jeder Mensch, auch ein Atheist, kennt das Gewissen, das ihn anklagt, wenn er einen anderen verletzt hat. Das Christentum erfindet die Krankheit nicht, sondern bietet Heilung an. Und die Vergebung gehört nicht dem Priester, sondern Gott; der Priester selbst muss beichten wie jeder andere. Wo Geistliche Schuld benutzen, um Menschen abhängig zu machen, ist das genau der Machtmissbrauch, den Jesus an den religiösen Führern seiner Zeit gegeißelt hat (Mt 23,4).`,
      detail: `Nietzsche formuliert den Satz im *Antichrist* (§ 49). In der koptisch-orthodoxen Praxis ist die Beichte ein Sakrament der Heilung: Der Beichtvater ist geistlicher Arzt, nicht Richter; das Ziel ist die Freiheit der Kinder Gottes (Gal 5,1), nicht lebenslange Abhängigkeit. Die Wüstenväter warnten scharf davor, Menschen zu beherrschen: Ein Altvater soll „Vorbild sein, nicht Gesetzgeber". Ehrlich bleibt: Es gibt geistlichen Missbrauch, auch in orthodoxen Kirchen – ihn zu benennen ist Treue zum Evangelium.`,
      sources: [
        { kind: 'gegner', author: 'Friedrich Nietzsche', work: 'Der Antichrist', ref: '§ 49', year: '1888', quote: `Der Priester herrscht durch die Erfindung der Sünde.`, status: 'paraphrase' },
        { kind: 'bibel', work: 'Matthäus', ref: '23,4', quote: `Sie binden aber schwere und unerträgliche Bürden und legen sie den Menschen auf den Hals; aber sie selbst wollen dieselben nicht mit einem Finger regen.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      questionsBack: [
        `Hast du jemals Schuld empfunden, ohne dass ein Priester dir das eingeredet hätte?`,
      ],
      followUps: [
        {
          id: 'foucault-pastoralmacht',
          objection: `Michel Foucault hat es genauer beschrieben: Die Beichte ist eine „Pastoralmacht", eine Technik, die das Innerste des Menschen ans Licht zerrt, um ihn zu lenken. Der moderne Überwachungsstaat hat sie nur übernommen.`,
          objectionBy: 'Michel Foucault (Sexualität und Wahrheit I, 1976)',
          answer: `Foucault beschreibt in derselben Weise Medizin, Psychiatrie, Schule und Therapie – jede Beziehung, in der ein Mensch sich einem anderen öffnet, wird bei ihm zur Machttechnik. Das trifft also nicht spezifisch die Beichte, sondern jede Form von Fürsorge. Und es wirft eine Frage auf: Wenn alles Macht ist, woher nimmt Foucault den Maßstab, Macht zu kritisieren? In der orthodoxen Praxis ist die Beichte freiwillig, der Beichtvater wird frei gewählt, und das Ziel ist, dass der Mensch frei wird – nicht, dass er gelenkt wird.`,
          detail: `Foucault entwickelte das Konzept der „Pastoralmacht" u. a. in *Der Wille zum Wissen* (Sexualität und Wahrheit I, 1976) und in den Vorlesungen „Omnes et singulatim" (1979). Seine Analysen sind anregend, aber sie haben ein bekanntes Problem: Wenn jede Wahrheit nur Effekt von Macht ist, gilt das auch für Foucaults eigene Analyse. Christen können zugestehen, dass geistliche Autorität missbraucht werden kann – gerade deshalb kennt die Tradition Regeln: Beichtgeheimnis, Freiwilligkeit, Rechenschaft der Geistlichen vor ihrem Bischof.`,
          sources: [
            { kind: 'gegner', author: 'Michel Foucault', work: 'Der Wille zum Wissen (Sexualität und Wahrheit I)', year: '1976', quote: `Foucault deutet die christliche Beichte als Machttechnik, die das Innere des Menschen zur Sprache zwingt und ihn so formbar macht.`, status: 'paraphrase' },
          ],
          followUps: [
            {
              id: 'missbrauch-kirche',
              objection: `Und die Wirklichkeit gibt Foucault recht: Die Missbrauchsskandale in Kirchen weltweit zeigen, was geschieht, wenn Geistliche unkontrollierte Macht über Gewissen und Körper haben.`,
              objectionBy: 'Investigativer Journalist / Kirchenkritiker',
              answer: `Missbrauch durch Geistliche ist ein entsetzliches Verbrechen und ein doppelter Verrat – an den Opfern und an Christus. Die Opfer verdienen zuerst Gehör, Schutz und Gerechtigkeit, nicht Apologetik. Jesus hat über solche Täter das härteste Wort gesprochen, das er kannte: Es wäre besser, man hängte ihm einen Mühlstein um den Hals (Lk 17,2). Missbrauch gibt es leider in allen Institutionen mit Macht über Abhängige – in Schulen, Sportverbänden, Heimen. Die Antwort ist nicht weniger Glaube, sondern Rechenschaft, Transparenz und Konsequenzen, die das Evangelium selbst verlangt.`,
              detail: `Die Kanones der Alten Kirche sehen für schwere Vergehen von Geistlichen die Absetzung vor; Paulus verlangt, dass Älteste, die sündigen, „vor allen" zurechtgewiesen werden (1 Tim 5,20). Für das Gespräch gilt: Nicht relativieren („anderswo ist es auch so") als erstes Wort, sondern Mitgefühl und klare Verurteilung. Der Vergleich mit anderen Institutionen gehört erst in einen zweiten Schritt – um zu zeigen, dass das Problem Macht ohne Kontrolle ist, nicht der Glaube an Gott.`,
              sources: [
                { kind: 'bibel', work: 'Lukas', ref: '17,2', quote: `Es wäre ihm besser, daß man einen Mühlstein an seinen Hals hängte und würfe ihn ins Meer, denn daß er dieser Kleinen einen ärgert.`, translation: 'Luther 1912', status: 'verbatim' },
                { kind: 'bibel', work: '1. Timotheus', ref: '5,20', quote: `Die da sündigen, die strafe vor allen, auf daß sich auch die andern fürchten.`, translation: 'Luther 1912', status: 'verbatim' },
              ],
              followUps: [
                {
                  id: 'vertuschung-beweist',
                  objection: `Das Schlimmste war nicht der Missbrauch, sondern die Vertuschung. Bischöfe haben Täter versetzt, um den Ruf der Kirche zu schützen. Das zeigt: Am Ende geht es der Institution um Macht, nicht um Menschen.`,
                  objectionBy: 'Investigativer Journalist',
                  answer: `Ja – die Vertuschung war ein eigenes, schweres Unrecht, und wo Kirchen es begangen haben, haben sie gegen Christus gehandelt. Jesus sagt: „Nichts ist verborgen, das nicht offenbar werde" (Lk 8,17). Eine Kirche, die ihren Ruf über die Opfer stellt, hat ihren Herrn verraten. Aber Vertuschung ist ein Muster jeder Institution, die sich selbst schützen will – Rundfunkanstalten, Sportverbände, Regierungen. Was daraus folgt, ist eine Anklage gegen menschliche Machtgier, die das Evangelium selbst erhebt, nicht ein Argument gegen Gott.`,
                  detail: `Bekannte säkulare Beispiele sind der Fall Jimmy Savile bei der BBC (Untersuchungsbericht von Dame Janet Smith, 2016) und der Fall Larry Nassar im US-Turnverband. Das relativiert kirchliche Schuld nicht, sondern zeigt die Struktur: Institutionen neigen dazu, sich zu schützen. Die biblische Tradition ist hier radikal selbstkritisch – die Propheten klagten Priester und Könige Israels an, und Jesus richtete seine schärfsten Worte gegen religiöse Führer. Christen sollten die Ersten sein, die Aufklärung fordern.`,
                  sources: [
                    { kind: 'bibel', work: 'Lukas', ref: '8,17', quote: `Denn nichts ist verborgen, das nicht offenbar werde, auch nichts Heimliches, das nicht kund werde und an den Tag komme.`, translation: 'Luther 1912', status: 'verbatim' },
                  ],
                  questionsBack: [
                    `Wenn Vertuschung ein Muster aller mächtigen Institutionen ist – zeigt das ein Problem des Glaubens oder ein Problem des menschlichen Herzens, von dem die Bibel spricht?`,
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
    `Wenn Religion ein Herrschaftsinstrument ist – warum wurde das Christentum drei Jahrhunderte lang vom Staat verfolgt?`,
    `Welche Instanz kann sich gegen einen allmächtigen Staat berufen, wenn es keinen Gott gibt?`,
    `Kennst du die Geschichte der koptischen Kirche? Wann hat sie je geherrscht?`,
    `Woher stammt die Idee, dass auch Könige einem höheren Gesetz unterstehen?`,
  ],
  avoid: [
    `Die Verflechtung von Kirche und Macht leugnen oder beschönigen – das ist unehrlich und kostet sofort Glaubwürdigkeit.`,
    `Das falsche „Seneca-Zitat" über Religion als nützliches Herrschaftsmittel unkritisch übernehmen oder widerlegen wollen – es stammt von Gibbon und betrifft die heidnische Religion Roms.`,
    `„Atheisten sind alle potenzielle Diktatoren" – unfair und falsch; es geht um die strukturelle Rolle Gottes als Grenze staatlicher Macht.`,
  ],
  concessions: [
    `Das Christentum wurde vielfach zur Legitimation von Herrschaft, Kolonialismus und Unterdrückung missbraucht.`,
    `Christen haben, wo sie an der Macht waren, selbst Andersgläubige verfolgt – auch die Kopten wurden von anderen Christen verfolgt.`,
    `Auch Kirchenleitungen sind der Versuchung von Reichtum und Einfluss nicht immer entgangen.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Tom Holland', work: 'Dominion (dt. Herrschaft)', year: '2019', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Rodney Stark', work: 'The Rise of Christianity', year: '1996', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Brian Tierney', work: 'The Idea of Natural Rights', year: '1997', status: 'paraphrase' },
    { kind: 'kirchenvater', author: 'Tertullian', work: 'Apologeticum; An Scapula', year: 'um 197–212', status: 'paraphrase' },
  ],
  difficulty: 1,
  tags: ['Macht', 'Herrschaft', 'Kirche und Staat', 'Märtyrer', 'Koptische Geschichte', 'Religionsfreiheit', 'Römer 13'],
  related: [
    'religionskritik/opium-des-volkes',
    'christentum-gesellschaft/christentum-kolonialismus',
    'christentum-gesellschaft/kirche-heuchlerisch',
    'religion-gewalt/atheistische-regime',
    'kirchengeschichte-mythen/konstantin-verfaelschte',
    'hoelle/hoelle-angstmache',
  ],
};

export default claim;
