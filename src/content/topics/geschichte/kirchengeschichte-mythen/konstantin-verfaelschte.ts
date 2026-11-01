import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'konstantin-verfaelschte',
  title: `„Konstantin hat das Christentum verfälscht und zur Staatsreligion gemacht."`,
  proponents: [
    { name: 'Dan Brown', role: 'Romanautor', work: 'The Da Vinci Code / Sakrileg (2003)' },
    { name: 'Ahmed Deedat / islamische Apologetik', role: 'Islamische Apologeten', work: 'Vorträge über „Paulus und Konstantin als Verfälscher"' },
    { name: 'Populäre Religionskritik', role: 'Dokumentationen, Internet', work: '„Konstantin erfand das Christentum"' },
  ],
  steelman: `Bis 312 war das Christentum eine verfolgte, vielfältige Bewegung. Dann sah Kaiser Konstantin vor der Schlacht an der Milvischen Brücke ein Zeichen, machte das Christentum mit dem „Edikt von Mailand" 313 zur bevorzugten Religion und berief 325 das Konzil von Nizäa ein, wo er – ein Anhänger des Sonnengottes – die Bischöfe zwang, Jesus per Abstimmung zum Gott zu erklären. Er ließ die Bibel zusammenstellen, unliebsame Evangelien vernichten, den „Tag der Sonne" zum Feiertag machen und heidnische Bräuche einfließen. So wurde aus der Bewegung eines jüdischen Lehrers eine imperiale Staatsreligion. Getauft wurde Konstantin erst auf dem Sterbebett – von einem arianischen Bischof.`,
  biblical: {
    summary: `Was Konstantin angeblich erfunden hat, steht lange vor ihm im Neuen Testament: die Gottheit Christi (Joh 1,1; 20,28; Phil 2,6; Tit 2,13), die Anbetung Jesu (Mt 28,17; Phil 2,10–11), die Feier am ersten Tag der Woche (Apg 20,7; 1 Kor 16,2; Offb 1,10: „Tag des Herrn"). Jesus selbst lehnte die Verbindung seines Reiches mit politischer Macht ab: „Mein Reich ist nicht von dieser Welt" (Joh 18,36). Die Gefahr, die Kirche mit Staatsmacht zu verwechseln, ist also biblisch benannt – aber das Evangelium ist älter als Konstantin.`,
    sources: [
      { kind: 'bibel', work: 'Johannes', ref: '20,28', quote: `Thomas antwortete und sprach zu ihm: Mein HERR und mein Gott!`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '1,1', quote: `Im Anfang war das Wort, und das Wort war bei Gott, und Gott war das Wort.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Offenbarung', ref: '1,10', quote: `Ich war im Geist an des HERRN Tag.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Für die koptische Kirche ist das 4. Jahrhundert untrennbar mit dem hl. Athanasius verbunden – dem Verteidiger des Glaubens von Nizäa, der unter Konstantin und seinen Söhnen fünfmal verbannt wurde, weil er sich kaiserlichem Druck zugunsten der Arianer nicht beugte („Athanasius gegen die Welt"). Die Kirche ehrt Konstantin in vielen Traditionen für das Ende der Verfolgung, unterscheidet aber klar: Der Glaube wurde nicht vom Kaiser festgelegt, sondern von der Kirche bezeugt – oft gegen den Kaiser. Athanasius' 39. Osterfestbrief (367) enthält die erste bekannte Liste genau der 27 Bücher des Neuen Testaments – geschrieben von einem Papst Alexandriens, den Kaiser verfolgt hatten.`,
    sources: [
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: '39. Osterfestbrief', year: '367', quote: `Aufzählung der kanonischen Bücher, darunter genau die 27 Schriften des Neuen Testaments: „Dies sind die Quellen des Heils … niemand füge etwas hinzu oder nehme etwas weg."`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Geschichte der Arianer (Historia Arianorum)', ref: '44', year: 'ca. 357', quote: `Athanasius überliefert den Brief des greisen Bischofs Ossius an Kaiser Constantius: Der Kaiser solle sich nicht in kirchliche Angelegenheiten einmischen; Gott habe ihm das Reich, der Kirche aber die kirchlichen Dinge anvertraut.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Historiker sind sich einig, dass Konstantin das Christentum massiv förderte und dass die Verbindung von Kirche und Reich tiefgreifende Folgen hatte – auch negative (Zwang, Verweltlichung, kaiserliche Einmischung). Ebenso klar ist aber: Das „Edikt von Mailand" (313) gewährte allen Religionen Freiheit; zur Staatsreligion wurde das Christentum erst unter Theodosius I. (Edikt „Cunctos populos", 380). In Nizäa wurde nicht die Gottheit Christi erfunden, sondern über ihr Verständnis gegen Arius entschieden; nur zwei Bischöfe verweigerten die Unterschrift. Über den Kanon wurde in Nizäa nicht verhandelt. Auch der Agnostiker Bart Ehrman hat die Behauptungen von „Sakrileg" scharf kritisiert.`,
    sources: [
      { kind: 'kirchenvater', author: 'Laktanz', work: 'Über die Todesarten der Verfolger (De mortibus persecutorum)', ref: '48', year: 'ca. 315', quote: `Text der Mailänder Vereinbarung: Den Christen und allen anderen werde die freie Wahl gewährt, der Religion zu folgen, die jeder wolle.`, status: 'paraphrase' },
      { kind: 'sonstiges', work: 'Codex Theodosianus 16,1,2 (Edikt „Cunctos populos")', year: '27. Februar 380', quote: `Alle Völker sollen dem Glauben folgen, den der Apostel Petrus den Römern überliefert hat – Erhebung des nizänischen Christentums zur verbindlichen Reichsreligion.`, status: 'paraphrase' },
      { kind: 'gegner', author: 'Bart D. Ehrman', work: 'Truth and Fiction in The Da Vinci Code', year: '2004', quote: `Die Behauptungen von „Sakrileg" über Konstantin, Nizäa und den Kanon sind historisch falsch.`, status: 'paraphrase', note: 'Ehrman ist Agnostiker und Kritiker des Christentums.' },
      { kind: 'fachliteratur', author: 'Peter J. Leithart', work: 'Defending Constantine. The Twilight of an Empire and the Dawn of Christendom', year: '2010', quote: `Konstantin war ein ernsthafter, wenn auch fehlerhafter Christ; er beendete das Opfer als Grundlage des Reiches, legte aber keine Lehre fest.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Drei Fakten genügen: Erstens machte das Mailänder Abkommen von 313 das Christentum nicht zur Staatsreligion, sondern gab allen Religionen Freiheit – Staatsreligion wurde es erst 380 unter Theodosius. Zweitens glaubten Christen schon lange vor Nizäa an die Gottheit Christi; in Nizäa verweigerten nur zwei von rund dreihundert Bischöfen die Unterschrift. Drittens: Hätte Konstantin die Lehre bestimmt, wäre die Kirche arianisch geworden – denn er selbst verbannte später Athanasius, den Verteidiger von Nizäa. Der Glaube setzte sich gegen die Kaiser durch, nicht durch sie.`,
  keyPoints: [
    `**313 ≠ Staatsreligion:** Mailand gewährte Religionsfreiheit für alle; Staatsreligion erst 380 (Theodosius, „Cunctos populos").`,
    `**Gottheit Christi vor Nizäa:** NT (Joh 1,1; 20,28), Ignatius (um 110: „unser Gott Jesus Christus"), Plinius (um 112: Lieder „an Christus als einen Gott").`,
    `**Nizäa war keine knappe Abstimmung:** Nur zwei Bischöfe verweigerten die Unterschrift; auch Arius hielt Christus für ein präexistentes, göttliches Wesen.`,
    `**Der Kaiser bestimmte nicht die Lehre:** Konstantin verbannte später Athanasius; sein Sohn Constantius war Arianer – der Glaube von Nizäa siegte gegen kaiserlichen Druck.`,
    `**Kanon:** In Nizäa nicht verhandelt; vier Evangelien schon um 180 (Irenäus); erste Liste der 27 Bücher von Athanasius (367).`,
    `**Sonntag:** Christen feierten den „Tag des Herrn" seit apostolischer Zeit (Apg 20,7; Justin um 155); Konstantin machte ihn 321 nur zum staatlichen Ruhetag.`,
  ],
  voices: [
    {
      person: 'peter-leithart',
      role: 'als Theologe und Historiker der konstantinischen Wende',
      text: `Leithart widerspricht sowohl der Glorifizierung als auch der Dämonisierung Konstantins. Er zeichnet ihn als ernsthaften, aber fehlerhaften Christen, dessen größte Tat es war, das Opfer als religiöses Fundament des Reiches zu beenden. Konstantin berief Konzilien ein und wollte Einheit, aber er formulierte keine Glaubenssätze; in Nizäa entschieden die Bischöfe. Die Gefahren der neuen Nähe von Kirche und Thron – Zwang, Verweltlichung – nimmt Leithart ernst; aber die These, Konstantin habe das Christentum „erfunden" oder „verfälscht", hält er für historisch unhaltbar.`,
      sources: [
        { kind: 'fachliteratur', author: 'Peter J. Leithart', work: 'Defending Constantine', year: '2010', quote: `Neubewertung Konstantins jenseits von Verklärung und Verteufelung.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'athanasius',
      role: 'als Verteidiger von Nizäa gegen die Kaiser',
      text: `Athanasius ist der lebende Gegenbeweis zur These, der Kaiser habe die Lehre bestimmt. Als Diakon war er in Nizäa dabei; als Papst von Alexandrien wurde er 335 auf Betreiben der Arianer auf der Synode von Tyrus verurteilt und von Konstantin nach Trier verbannt. Unter Constantius II. folgten weitere Verbannungen; insgesamt verbrachte er rund siebzehn Jahre im Exil. In seiner „Geschichte der Arianer" prangert er die Einmischung des Kaisers in kirchliche Angelegenheiten an. Die koptische Kirche ehrt ihn als „Apostolischen" – weil er den Glauben der Apostel gegen die Macht des Reiches verteidigte.`,
      sources: [
        { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Historia Arianorum', year: 'ca. 357', quote: `Kritik an der kaiserlichen Einmischung zugunsten der Arianer.`, status: 'paraphrase' },
        { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Verteidigungsschrift gegen die Arianer (Apologia contra Arianos)', year: 'ca. 357', quote: `Dokumente zu seiner Verurteilung in Tyrus und seinen Verbannungen.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'rodney-stark',
      role: 'als Religionssoziologe',
      text: `Stark hat das Wachstum des frühen Christentums soziologisch rekonstruiert. Nach seiner Schätzung wuchs die Kirche über drei Jahrhunderte um rund 40 Prozent pro Jahrzehnt und umfasste um 300 bereits etwa ein Zehntel der Reichsbevölkerung – vor jeder kaiserlichen Förderung. Konstantin hat also nicht das Christentum geschaffen, sondern eine Bewegung anerkannt, die trotz Verfolgung unaufhaltsam gewachsen war. Die Ursachen sieht Stark im Lebensstil der Christen: Fürsorge in Seuchen, Aufwertung der Frauen, Netzwerke der Liebe.`,
      sources: [
        { kind: 'fachliteratur', author: 'Rodney Stark', work: 'The Rise of Christianity', year: '1996', quote: `Schätzung des christlichen Wachstums vor Konstantin auf rund 40 Prozent pro Jahrzehnt; um 300 etwa sechs Millionen Christen.`, status: 'paraphrase', note: 'Modellrechnung; die genauen Zahlen sind Schätzungen.' },
      ],
    },
    {
      person: 'eusebius',
      role: 'als Zeitgenosse und Biograf Konstantins',
      text: `Eusebius kannte Konstantin persönlich und schrieb nach dessen Tod eine Lebensbeschreibung. Sie ist lobrednerisch und muss kritisch gelesen werden. Gerade deshalb ist aufschlussreich, was sie nicht behauptet: Eusebius schreibt Konstantin keine Festlegung des Kanons zu; seine eigene Kirchengeschichte (Buch III,25) beschreibt die Einteilung der Schriften in anerkannte und umstrittene Bücher als Ergebnis kirchlicher Überlieferung, nicht kaiserlicher Entscheidung. Die Bestellung von fünfzig Bibelhandschriften durch Konstantin betrifft Abschriften, nicht die Auswahl.`,
      sources: [
        { kind: 'kirchenvater', author: 'Eusebius von Caesarea', work: 'Kirchengeschichte', ref: 'III,25', year: 'ca. 325', quote: `Einteilung der neutestamentlichen Schriften in anerkannte, umstrittene und unechte Bücher nach kirchlicher Überlieferung.`, status: 'paraphrase' },
        { kind: 'kirchenvater', author: 'Eusebius von Caesarea', work: 'Leben Konstantins (Vita Constantini)', ref: 'IV,36', year: 'ca. 339', quote: `Konstantin bestellt fünfzig Abschriften der heiligen Schriften für die Kirchen Konstantinopels.`, status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'staatsreligion-313',
      objection: `313 machte Konstantin das Christentum zur Staatsreligion. Ab da war es eine Religion der Macht.`,
      objectionBy: 'Populäre Religionskritik',
      answer: `Das Mailänder Abkommen von 313 gewährte den Christen und allen anderen die Freiheit, der Religion ihrer Wahl zu folgen – es war ein Toleranzedikt, keine Staatsreligion. Konstantin förderte die Kirche, verbot das Heidentum aber nicht und blieb Pontifex maximus. Zur verbindlichen Reichsreligion wurde das Christentum erst 380 unter Theodosius I.`,
      followUps: [
        {
          id: 'macht-korrumpiert',
          objection: `Trotzdem: Mit der kaiserlichen Gunst kamen Geld, Macht und Opportunisten. Die Kirche wurde korrumpiert.`,
          objectionBy: 'Populäre Religionskritik',
          answer: `Das ist ein berechtigter Punkt, den ich zugestehe: Mit der Gunst kamen Namenschristen, Machtkämpfe und später auch Zwang. Bezeichnend ist, wie die Kirche reagierte: Gerade in dieser Zeit zogen in Ägypten Tausende in die Wüste – Antonius, Pachomius, die Wüstenväter –, um das Evangelium radikal zu leben, als Protest gegen eine verweltlichte Christenheit. Die koptische Kirche ist die Mutter dieses Mönchtums.`,
          followUps: [
            {
              id: 'andere-religion',
              objection: `Dann ist das Christentum nach Konstantin eben eine andere Religion als die der ersten Christen.`,
              objectionBy: 'Ahmed Deedat',
              answer: `Der Glaubensinhalt ist vor Konstantin gut bezeugt: das älteste Bekenntnis von Tod und Auferstehung (1 Kor 15,3–5), die Gottheit Christi bei Ignatius um 110, die Glaubensregel bei Irenäus um 180, die Theologie des Origenes im 3. Jahrhundert – und Tausende Märtyrer, die vor 313 für genau diesen Glauben starben. Das Nizänum fasst zusammen, was die Kirche glaubte; es erfindet nichts Neues.`,
              followUps: [
                {
                  id: 'staatsmacht-entschied-sieger',
                  objection: `Vor Konstantin gab es viele Christentümer – Gnostiker, Ebioniten, Marcioniten, später Arianer. Erst die kaiserliche Unterstützung hat einer Richtung zum Sieg verholfen. Die „Orthodoxie" ist die Version der Sieger.`,
                  objectionBy: 'Bart Ehrman',
                  answer: `Die Vielfalt gab es, das bestreite ich nicht. Aber die Linie von Irenäus, Tertullian und Origenes war schon vor 313 die breite Mehrheit der Gemeinden – ohne jede Staatsmacht, oft unter Verfolgung. Und der Test der Geschichte spricht gegen deine These: Nach Konstantin unterstützten Kaiser wie Constantius II. und Valens jahrzehntelang die Arianer – und trotzdem setzte sich der Glaube von Nizäa durch. Wenn Staatsmacht über die Lehre entschiede, wären wir heute Arianer.`,
                  detail: `Die koptische Kirche ist dafür ein lebendiges Beispiel: Nach 451 widersetzte sie sich dem byzantinischen Kaiser in der Christologie, später lebte sie unter islamischer Herrschaft als Minderheit – und hat das Bekenntnis von Nizäa über 1500 Jahre ohne und oft gegen Staatsmacht bewahrt. Ein Glaube, der nur von Kaisern getragen wäre, hätte das nicht überlebt.`,
                  sources: [
                    { kind: 'gegner', author: 'Bart D. Ehrman', work: 'Lost Christianities', year: '2003', quote: `Die siegreiche „proto-orthodoxe" Richtung habe die Geschichte geschrieben und andere Formen des Christentums unterdrückt.`, status: 'paraphrase' },
                  ],
                  questionsBack: [`Wenn die Kaiser die Lehre bestimmten – warum siegte Nizäa ausgerechnet gegen die arianischen Kaiser?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'nizaea-abstimmung',
      objection: `In Nizäa ließ Konstantin die Bischöfe abstimmen, ob Jesus Gott ist. Das Ergebnis war knapp – vorher war Jesus ein sterblicher Prophet.`,
      objectionBy: 'Dan Brown',
      answer: `Die Gottheit Christi bezeugen schon das Neue Testament, Ignatius um 110 („unser Gott Jesus Christus") und der heidnische Statthalter Plinius um 112, der berichtet, die Christen sängen „Christus als einem Gott" Lieder. In Nizäa ging es um die Frage, ob der Sohn ewig und wesensgleich mit dem Vater ist – auch Arius hielt Christus für ein präexistentes, göttliches Wesen. Und knapp war es nicht: Nur zwei Bischöfe verweigerten die Unterschrift.`,
      sources: [
        { kind: 'sonstiges', author: 'Plinius der Jüngere', work: 'Briefe', ref: '10,96', year: 'ca. 112', quote: `Die Christen pflegten sich an einem bestimmten Tag vor Sonnenaufgang zu versammeln und Christus wie einem Gott im Wechsel ein Lied zu singen.`, original: `carmenque Christo quasi deo dicere secum invicem`, status: 'paraphrase' },
        { kind: 'kirchenvater', author: 'Ignatius von Antiochien', work: 'Brief an die Epheser', ref: '18,2', year: 'ca. 110', quote: `Unser Gott Jesus, der Christus, wurde von Maria im Schoß getragen nach Gottes Heilsplan.`, status: 'paraphrase' },
      ],
      followUps: [
        {
          id: 'konstantin-druck',
          objection: `Konstantin übte Druck aus. Wer nicht unterschrieb, wurde verbannt.`,
          objectionBy: 'Populäre Religionskritik',
          answer: `Konstantin wollte Einheit und verbannte anfangs Arius und die Verweigerer, das stimmt. Aber schon wenige Jahre später rief er Arius zurück und verbannte 335 Athanasius, den Verteidiger von Nizäa. Sein Sohn Constantius II. förderte offen die Arianer. Hätten die Kaiser die Lehre bestimmt, wäre die Kirche arianisch geworden. Dass der Glaube von Nizäa siegte, geschah gegen den kaiserlichen Druck – Athanasius wurde fünfmal verbannt.`,
          followUps: [
            {
              id: 'taufe-arianer',
              objection: `Konstantin ließ sich erst auf dem Sterbebett taufen – von dem arianischen Bischof Eusebius von Nikomedien. Er war nie wirklich Christ.`,
              objectionBy: 'Populäre Religionskritik',
              answer: `Die Taufe auf dem Sterbebett war damals verbreitet, weil viele fürchteten, nach der Taufe schwer zu sündigen. Dass Eusebius von Nikomedien ihn taufte, zeigt gerade, wie nahe Konstantin am Ende den Arianern stand – wieder ein Beleg, dass er nicht der Urheber des nizänischen Glaubens war. Wie echt sein persönlicher Glaube war, ist umstritten; für die Frage, was die Kirche lehrt, ist es unerheblich.`,
              sources: [
                { kind: 'kirchenvater', author: 'Eusebius von Caesarea', work: 'Vita Constantini', ref: 'IV,61–64', year: 'ca. 339', quote: `Bericht über Taufe und Tod Konstantins 337 bei Nikomedien.`, status: 'paraphrase' },
              ],
              followUps: [
                {
                  id: 'kreuzesvision-propaganda',
                  objection: `Die ganze Bekehrung an der Milvischen Brücke ist Propaganda. Eusebius war ein Hofschmeichler, der seinem Kaiser eine Himmelsvision andichtete.`,
                  objectionBy: 'Charles Freeman',
                  answer: `Dass die „Vita Constantini" eine Lobschrift ist, gebe ich offen zu – Eusebius ist hier mit Vorsicht zu lesen. Laktanz, der früher schrieb, berichtet nur von einem Traum, nach dem Konstantin ein Christuszeichen auf die Schilde malen ließ; die große Himmelsvision kennt erst Eusebius Jahrzehnte später. Die Details sind also legendarisch überformt. Aber für unsere Frage ist das gleichgültig: Ob Konstantins Glaube echt war oder nicht, die Lehre der Kirche war vor ihm da und hat ihn überdauert.`,
                  voices: [
                    {
                      person: 'eusebius',
                      role: 'als Kirchenhistoriker und Biograf Konstantins (mit Vorbehalt)',
                      text: `Eusebius ist für die konstantinische Zeit eine unverzichtbare, aber parteiische Quelle: Seine Kirchengeschichte bewahrt zahlreiche ältere Dokumente, während seine Lebensbeschreibung Konstantins als Panegyrikus angelegt ist. Zudem stand er im arianischen Streit lange auf der vermittelnden, Arius nahen Seite. Wer ihn zitiert, sollte zwischen den von ihm überlieferten Dokumenten und seinen eigenen Deutungen unterscheiden.`,
                      sources: [
                        { kind: 'kirchenvater', author: 'Eusebius von Caesarea', work: 'Vita Constantini', ref: 'I,28–31', year: 'ca. 339', quote: `Bericht über die Kreuzeserscheinung am Himmel, die Konstantin selbst ihm unter Eid erzählt habe.`, status: 'paraphrase' },
                      ],
                    },
                  ],
                  sources: [
                    { kind: 'kirchenvater', author: 'Laktanz', work: 'Über die Todesarten der Verfolger (De mortibus persecutorum)', ref: '44,5', year: 'ca. 315', quote: `Konstantin sei im Traum ermahnt worden, das himmlische Zeichen Gottes auf die Schilde zu setzen.`, status: 'paraphrase' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'kanon-konstantin',
      objection: `Konstantin bestimmte in Nizäa, welche Evangelien in die Bibel kamen, und ließ die anderen verbrennen.`,
      objectionBy: 'Dan Brown',
      answer: `In Nizäa wurde über den Kanon gar nicht verhandelt – die erhaltenen Kanones betreffen Ostertermin, Bußdisziplin und Kirchenordnung. Die vier Evangelien waren schon um 180 anerkannt (Irenäus); die erste Liste genau unserer 27 Bücher stammt aus dem 39. Osterfestbrief des Athanasius von 367 – von einem Bischof, den Konstantin verbannt hatte.`,
      sources: [
        { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Adversus Haereses', ref: 'III,11,8', year: 'ca. 180', quote: `Es kann weder mehr noch weniger als vier Evangelien geben.`, status: 'paraphrase' },
      ],
      followUps: [
        {
          id: 'fuenfzig-bibeln',
          objection: `Aber Konstantin bestellte bei Eusebius fünfzig Bibeln – also bestimmte er ihren Inhalt.`,
          objectionBy: 'Dan Brown',
          answer: `Er bestellte Abschriften für die neuen Kirchen Konstantinopels; über die Auswahl der Bücher sagt der Bericht nichts. Eusebius beschreibt in seiner Kirchengeschichte, welche Schriften in den Kirchen anerkannt und welche umstritten waren – als Ergebnis langer kirchlicher Überlieferung. Eine Bestellung beim Kopisten ist keine Kanonentscheidung.`,
          followUps: [
            {
              id: 'sinaiticus-kaiserbibel',
              objection: `Codex Sinaiticus und Vaticanus könnten genau aus diesen fünfzig Bibeln stammen. Dann beruht euer Text auf einer kaiserlichen Auftragsedition.`,
              objectionBy: 'Dan Brown',
              answer: `Dass einer der beiden Kodizes zu Konstantins Bestellung gehörte, ist eine alte Vermutung (T. C. Skeat), aber unbewiesen. Selbst wenn: Es wären Abschriften älterer Texte, keine Neuschöpfung. Das lässt sich prüfen – der Papyrus 75 aus der Zeit um 200 stimmt mit dem Text des Codex Vaticanus in Lukas und Johannes so eng überein, dass Textkritiker von einer gemeinsamen, viel älteren Überlieferung sprechen. Ein Text, der schon hundert Jahre vor Konstantin so lautete, wurde nicht von ihm geschaffen.`,
              sources: [
                { kind: 'fachliteratur', author: 'T. C. Skeat', work: 'The Codex Sinaiticus, the Codex Vaticanus and Constantine. Journal of Theological Studies 50', year: '1999', quote: `Vermutung, die Kodizes könnten mit Konstantins Bestellung bei Eusebius zusammenhängen.`, status: 'paraphrase' },
                { kind: 'fachliteratur', author: 'Bruce M. Metzger, Bart D. Ehrman', work: 'The Text of the New Testament', year: '4. Aufl. 2005', quote: `P75 (um 200) und Codex Vaticanus stehen sich textlich außerordentlich nahe.`, status: 'paraphrase' },
              ],
              followUps: [
                {
                  id: 'nag-hammadi-versteckt',
                  objection: `Und die anderen Evangelien wurden unterdrückt: Ägyptische Mönche vergruben die Nag-Hammadi-Bücher, weil Athanasius 367 ihre Lektüre verbot. Eure eigene koptische Kirche hat sie vernichtet.`,
                  objectionBy: 'Dan Brown',
                  answer: `Hier ist ein wahrer Kern: Athanasius warnte in seinem 39. Osterfestbrief ausdrücklich vor apokryphen Büchern, und manche Forscher vermuten, dass die Nag-Hammadi-Kodizes daraufhin versteckt wurden – eine Hypothese, kein Beleg. Aber das war eine Entscheidung eines Bischofs darüber, was in der Kirche gelesen wird, nicht ein Befehl Konstantins; und diese Schriften hatte schon Irenäus um 180 abgelehnt. Bemerkenswert ist auch: Wir besitzen sie heute gerade deshalb, weil koptische Schreiber sie kopierten und jemand sie sorgfältig verwahrte.`,
                  detail: `Fair bleiben: Dass die Kirche bestimmte Schriften aus dem Gottesdienst und der Lektüre ausschloss, ist eine Form der Abgrenzung, die man kritisieren darf. Es war aber keine Fälschung der Evangelien, sondern eine Unterscheidung zwischen den apostolischen Schriften, die seit dem 2. Jahrhundert in den Gemeinden gelesen wurden, und späteren Texten mit gnostischer Theologie. Die Nag-Hammadi-Texte sind zudem fast alle jünger als die vier Evangelien.`,
                  sources: [
                    { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: '39. Osterfestbrief', year: '367', quote: `Aufzählung der kanonischen Bücher; Warnung vor apokryphen Schriften, die unter Namen von Heiligen verbreitet werden.`, status: 'paraphrase' },
                  ],
                  questionsBack: [`Welches der Nag-Hammadi-Evangelien ist nachweislich älter als Markus oder Johannes?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'sonnenkult-sonntag',
      objection: `Konstantin war Sonnenanbeter. Er führte 321 den „Tag der Sonne" als Feiertag ein und verschmolz Christus mit Sol Invictus.`,
      objectionBy: 'Populäre Religionskritik',
      answer: `Christen feierten den ersten Tag der Woche schon in apostolischer Zeit als „Tag des Herrn" (Apg 20,7; Offb 1,10); Justin beschreibt um 155 den Gottesdienst „am Tag, den man Sonntag nennt". Konstantins Gesetz von 321 machte diesen Tag zum staatlichen Ruhetag – es erfand den christlichen Sonntag nicht. Ehrlich ist: Auf Konstantins Münzen erschien Sol noch bis etwa 325, und seine religiöse Sprache war manchmal mehrdeutig.`,
      sources: [
        { kind: 'kirchenvater', author: 'Justin der Märtyrer', work: 'Erste Apologie', ref: '67', year: 'ca. 155', quote: `Am Tag, den man Sonntag nennt, versammeln sich alle, die in Städten oder auf dem Land wohnen; man liest die Erinnerungen der Apostel oder die Schriften der Propheten.`, status: 'paraphrase' },
      ],
      followUps: [
        {
          id: 'konstantin-synkretist',
          objection: `Also gibst du zu, dass Konstantin Heidnisches ins Christentum mischte.`,
          objectionBy: 'Populäre Religionskritik',
          answer: `Ich gebe zu, dass Konstantin persönlich lange zwischen alten und neuen Formen schwankte. Aber seine persönlichen Neigungen sind nicht die Lehre der Kirche: Kein Glaubensbekenntnis, kein Kanon und keine Liturgie der Kirche verehrt die Sonne. Die Kirche bekennt den Schöpfer der Sonne – genau das unterscheidet sie vom Sonnenkult.`,
          followUps: [
            {
              id: 'christus-helios-mosaik',
              objection: `Unter dem Petersdom gibt es ein Mosaik, das Christus als Sonnengott Helios mit dem Sonnenwagen zeigt. Da habt ihr den Beweis: Christus wurde zum Sol Invictus.`,
              objectionBy: 'Populäre Religionskritik',
              answer: `Das Mosaik im Grab der Julier ist echt – und es stammt aus dem 3. Jahrhundert, also *vor* Konstantin. Es kann also nicht seine Erfindung sein. Es zeigt, dass Christen die Bildsprache ihrer Umgebung benutzten, um Christus als die „Sonne der Gerechtigkeit" (Mal 3,20) und das „Licht der Welt" (Joh 8,12) darzustellen. Ein biblisches Bild in der Formensprache der Zeit ist keine Anbetung der Sonne – so wenig wie das Bild vom guten Hirten Schafhirten vergöttlicht.`,
              sources: [
                { kind: 'sonstiges', work: 'Mosaik im Mausoleum der Julier (Mausoleum M), Vatikanische Nekropole', year: '3. Jh.', quote: `Darstellung einer Christusgestalt mit Strahlenkranz auf einem Wagen, umgeben von Weinranken.`, status: 'paraphrase', note: 'Die christliche Deutung ist verbreitet, aber nicht unumstritten.' },
              ],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Was genau stand im Mailänder Abkommen von 313 – und wann wurde das Christentum tatsächlich Staatsreligion?`,
    `Wie erklärst du Plinius' Bericht von 112, dass Christen „Christus wie einem Gott" sangen?`,
    `Wenn Konstantin die Lehre bestimmte – warum verbannte er dann Athanasius, den Verteidiger von Nizäa?`,
    `Welcher Kanon von Nizäa behandelt die Auswahl der biblischen Bücher?`,
  ],
  avoid: [
    `Konstantin als Heiligen ohne Schatten darstellen – er ließ u. a. seinen Sohn Crispus und seine Frau Fausta töten.`,
    `Die Folgen der Verbindung von Kirche und Staat (Zwang, Verweltlichung) leugnen.`,
  ],
  concessions: [
    `Die Nähe zwischen Kirche und Reich brachte Zwang, Opportunismus und kaiserliche Einmischung mit sich.`,
    `Konstantins persönlicher Glaube und seine religiöse Sprache waren lange mehrdeutig.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Peter J. Leithart', work: 'Defending Constantine', year: '2010', status: 'paraphrase' },
    { kind: 'gegner', author: 'Bart D. Ehrman', work: 'Truth and Fiction in The Da Vinci Code', year: '2004', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Rodney Stark', work: 'The Rise of Christianity', year: '1996', status: 'paraphrase' },
  ],
  difficulty: 1,
  tags: ['Konstantin', 'Nizäa', 'Staatsreligion', 'Athanasius', 'Kanon', 'Sonntag'],
  related: ['neues-testament/kanon-von-konstantin', 'antitrinitarier/trinitaet-in-nizaa-erfunden', 'historischer-jesus/gottheit-jesu-spaet-erfunden', 'antike-parallelen/christliche-feste-heidnisch'],
};

export default claim;
