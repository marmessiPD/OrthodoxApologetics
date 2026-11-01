import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'kreuzzuege',
  title: `„Die Kreuzzüge zeigen die Gewalt des Christentums."`,
  proponents: [
    { name: 'Christopher Hitchens', role: 'Publizist und Religionskritiker', work: 'God Is Not Great (2007)' },
    { name: 'Richard Dawkins', role: 'Evolutionsbiologe, Oxford', work: 'The God Delusion (2006), Vorwort' },
    { name: 'Steven Runciman', role: 'Byzantinist und Kreuzzugshistoriker', work: 'A History of the Crusades (3 Bände, 1951–1954)' },
    { name: 'Amin Maalouf', role: 'Schriftsteller', work: 'Der Heilige Krieg der Barbaren. Die Kreuzzüge aus der Sicht der Araber (1983)' },
    { name: 'Karen Armstrong', role: 'Religionshistorikerin', work: 'Holy War: The Crusades and Their Impact on Today\'s World (1988)' },
  ],
  steelman: `Zwei Jahrhunderte lang zogen Heere unter dem Zeichen des Kreuzes in den Nahen Osten, angestachelt von Päpsten, die jedem, der kämpfte, die Vergebung seiner Sünden versprachen. Schon auf dem Weg ermordeten Kreuzfahrer 1096 Tausende Juden in den Städten am Rhein. Als sie 1099 Jerusalem eroberten, metzelten sie Muslime und Juden nieder; ihre eigenen Chronisten prahlten, sie seien bis zu den Knöcheln im Blut gewatet. 1204 plünderten Kreuzfahrer sogar das christliche Konstantinopel. Später richteten sich Kreuzzüge gegen „Ketzer" in Südfrankreich und gegen Heiden im Baltikum. Der Historiker Steven Runciman nannte den Heiligen Krieg „einen langen Akt der Intoleranz im Namen Gottes". Bis heute vergiften die Kreuzzüge das Verhältnis zwischen dem Westen und der islamischen Welt. Sie zeigen, was geschieht, wenn eine Religion, die sich Liebe auf die Fahnen schreibt, an die Macht kommt.`,
  biblical: {
    summary: `Das Neue Testament kennt keinen heiligen Krieg. Jesus verweigert die Verteidigung mit dem Schwert (Mt 26,52; Joh 18,36), gebietet Feindesliebe (Mt 5,44) und löst die Anbetung Gottes von jedem heiligen Ort: „Es kommt die Zeit, dass ihr weder auf diesem Berge noch zu Jerusalem werdet den Vater anbeten" (Joh 4,21). Die Vorstellung, man könne durch Töten Vergebung der Sünden erlangen, steht im Widerspruch zum Evangelium, nach dem das Heil Geschenk ist (Eph 2,8–9) und Martyrium heißt, getötet zu werden – nicht zu töten. Die Kreuzzugsidee ist eine mittelalterliche westliche Entwicklung, keine biblische Lehre.`,
    sources: [
      { kind: 'bibel', work: 'Matthäus', ref: '26,52', quote: `Stecke dein Schwert an seinen Ort! denn wer das Schwert nimmt, der soll durchs Schwert umkommen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '4,21', quote: `Weib, glaube mir, es kommt die Zeit, daß ihr weder auf diesem Berge noch zu Jerusalem werdet den Vater anbeten.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Epheser', ref: '2,8–9', quote: `Denn aus Gnade seid ihr selig geworden durch den Glauben, und dasselbe nicht aus euch: Gottes Gabe ist es, nicht aus den Werken.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die Kreuzzüge waren ein Unternehmen der lateinischen Westkirche. Die **orientalischen und östlichen Kirchen** haben die Idee eines verdienstlichen heiligen Krieges nie übernommen. Basilius der Große hatte schon im 4. Jahrhundert empfohlen, dass Soldaten, die im Krieg getötet hatten, drei Jahre lang von der Kommunion fernbleiben sollten – Töten galt als Wunde, nicht als Verdienst. Die Byzantiner reagierten auf die Kreuzfahrer oft mit Befremden, und 1204 wurden sie selbst ihre Opfer. Für die **Kopten** brachten die Kreuzzüge keine Befreiung: Die Kreuzfahrer betrachteten die orientalischen Christen meist als Schismatiker, und in Ägypten gerieten die Kopten – besonders während der Feldzüge gegen Damiette (1218–1221 und 1249–1250) – unter den Verdacht, mit dem Feind zu sympathisieren. Die koptische Kirche ehrt Märtyrer, keine Kreuzritter.`,
    sources: [
      { kind: 'kirchenvater', author: 'Basilius der Große', work: 'Brief 188 (1. kanonischer Brief an Amphilochius)', ref: 'Kanon 13', year: '374', quote: `Wer im Krieg getötet hat, soll drei Jahre lang von der Kommunion fernbleiben, weil seine Hände nicht rein sind.`, status: 'paraphrase' },
      { kind: 'sonstiges', author: 'Papst Johannes Paul II.', work: 'Ansprache in Athen', year: '2001', quote: `Bitte um Vergebung für die Sünden der Söhne und Töchter der katholischen Kirche gegenüber ihren orthodoxen Brüdern und Schwestern; besondere Erwähnung der verheerenden Plünderung Konstantinopels (1204).`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Die Kreuzzugsforschung hat sich seit Runciman stark gewandelt. Historiker wie **Jonathan Riley-Smith**, **Thomas Madden** und **Christopher Tyerman** betonen, dass die Kreuzzüge im Kontext von Jahrhunderten islamischer Expansion zu sehen sind: Syrien, Palästina (Jerusalem 637/638), **Ägypten (639–642)**, Nordafrika und Spanien wurden im 7. und 8. Jahrhundert erobert; nach der Schlacht von Mantzikert (1071) verlor Byzanz fast ganz Kleinasien an die Seldschuken, und Kaiser Alexios I. bat den Westen um Hilfe. Riley-Smith zeigte anhand von Urkunden, dass die meisten Kreuzfahrer nicht aus Gier, sondern aus Bußfrömmigkeit aufbrachen und dafür oft ihr Vermögen opferten. Zugleich sind die **Gräuel** unstrittig: die Pogrome im Rheinland 1096, das Massaker von Jerusalem 1099, die Plünderung Konstantinopels 1204, der Albigenserkreuzzug. Umstritten ist, wie stark die Kreuzzüge das kollektive Gedächtnis der islamischen Welt prägten; Madden argumentiert, sie seien dort erst im 19. Jahrhundert im Kontext von Kolonialismus und Nationalismus zu einem zentralen Thema geworden.`,
    sources: [
      { kind: 'fachliteratur', author: 'Jonathan Riley-Smith', work: 'The First Crusaders, 1095–1131', year: '1997', quote: `Auswertung von Urkunden zeigt: Viele Kreuzfahrer verkauften oder verpfändeten Besitz, um den Zug zu finanzieren; ihr vorherrschendes Motiv war Buße, nicht Beute.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Thomas F. Madden', work: 'The Concise History of the Crusades', year: '3. Aufl. 2014', status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Christopher Tyerman', work: 'God\'s War: A New History of the Crusades', year: '2006', status: 'paraphrase' },
      { kind: 'gegner', author: 'Steven Runciman', work: 'A History of the Crusades', ref: 'Bd. 3, Schluss', year: '1954', quote: `Der Heilige Krieg selbst sei nichts anderes gewesen als ein langer Akt der Intoleranz im Namen Gottes – die Sünde gegen den Heiligen Geist.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Die Kreuzzüge hatten eine Vorgeschichte: Seit dem 7. Jahrhundert hatten muslimische Heere zwei Drittel der christlichen Welt erobert – darunter Jerusalem, Syrien und auch Ägypten, die Heimat der Kopten –, und 1095 bat der byzantinische Kaiser um Hilfe. Aber nichts davon rechtfertigt die Gräuel: die Judenpogrome am Rhein, das Massaker von Jerusalem 1099 oder die Plünderung des christlichen Konstantinopel 1204. Diese Taten widersprechen Jesus, der sagte: „Stecke dein Schwert an seinen Ort." Die Ostkirchen haben die Idee des heiligen Krieges nie übernommen, und die koptische Kirche hat nie einen geführt.`,
  keyPoints: [
    `**Vorgeschichte:** Jerusalem (638), Ägypten (639–642), Nordafrika und Spanien wurden erobert; nach Mantzikert (1071) bat Byzanz um Hilfe – der Erste Kreuzzug (1095) war eine Antwort darauf.`,
    `**Gräuel benennen:** Rheinland-Pogrome 1096, Massaker von Jerusalem 1099, Plünderung Konstantinopels 1204 – Unrecht, das nicht zu verteidigen ist.`,
    `**Kein biblischer Auftrag:** Das NT kennt keinen heiligen Krieg (Mt 26,52; Joh 4,21); Vergebung durch Töten widerspricht dem Evangelium.`,
    `**Eine westliche Idee:** Die Ostkirchen haben den verdienstlichen heiligen Krieg nie übernommen; Basilius verordnete Soldaten, die getötet hatten, drei Jahre Buße.`,
    `**Moderne Forschung:** Riley-Smith, Madden, Tyerman – Bußfrömmigkeit statt Kolonialgier als Hauptmotiv; das Bild ist komplexer als „Gut gegen Böse".`,
    `**Christliche Gegenstimmen:** Franz von Assisi suchte 1219 vor Damiette den Sultan al-Kamil friedlich auf.`,
  ],
  voices: [
    {
      person: 'jonathan-riley-smith',
      role: 'als Kreuzzugshistoriker',
      text: `Jonathan Riley-Smith, der führende Kreuzzugshistoriker seiner Generation, hat das Bild vom gierigen Kreuzritter, der im Orient sein Glück suchte, mit Urkundenstudien widerlegt. Viele Kreuzfahrer verkauften oder verpfändeten ihr Land, um die enorm teure Reise zu finanzieren; viele kehrten verarmt oder gar nicht zurück. Ihr Motiv war in erster Linie die Buße – sie verstanden den Kreuzzug als bewaffnete Pilgerfahrt. Riley-Smith beschönigt die Gewalt nicht, aber er zeigt, dass man die Kreuzzüge nur versteht, wenn man die Frömmigkeit der Zeit ernst nimmt – auch dort, wo sie sich schrecklich verirrte.`,
      sources: [
        { kind: 'fachliteratur', author: 'Jonathan Riley-Smith', work: 'The First Crusaders, 1095–1131', year: '1997', status: 'paraphrase' },
        { kind: 'fachliteratur', author: 'Jonathan Riley-Smith', work: 'What Were the Crusades?', year: '1977; 4. Aufl. 2009', status: 'paraphrase' },
      ],
    },
    {
      person: 'thomas-madden',
      role: 'als Mediävist',
      text: `Thomas Madden betont den Kontext: Die Kreuzzüge waren in erster Linie eine verspätete, defensive Reaktion auf Jahrhunderte islamischer Eroberungen, die einst überwiegend christliche Länder – von Syrien über Ägypten bis Spanien – unter muslimische Herrschaft gebracht hatten. Madden argumentiert zudem, dass die Erinnerung an die Kreuzzüge in der islamischen Welt lange Zeit keine große Rolle spielte und erst im 19. und 20. Jahrhundert, im Zusammenhang mit europäischem Kolonialismus und arabischem Nationalismus, zu einem politischen Symbol wurde. Er verschweigt die Gräuel nicht, wendet sich aber gegen die Rückprojektion moderner Kolonialkategorien auf das Mittelalter.`,
      sources: [{ kind: 'fachliteratur', author: 'Thomas F. Madden', work: 'The Concise History of the Crusades', year: '3. Aufl. 2014', status: 'paraphrase' }],
    },
    {
      person: 'rodney-stark',
      role: 'als Religionssoziologe',
      text: `Rodney Stark hat in *God's Battalions* (2009) die populäre Sicht der Kreuzzüge als frühe westliche Kolonialkriege kritisiert. Er weist darauf hin, dass die Kreuzfahrerstaaten wirtschaftlich keine Ausbeutungskolonien waren, sondern auf ständigen Nachschub aus Europa angewiesen blieben, und dass die Pilger im Heiligen Land unter seldschukischer Herrschaft Gewalt erfahren hatten. Starks Darstellung ist pointiert und wurde von Fachhistorikern teils als einseitig kritisiert – für das Gespräch ist sie ein Gegengewicht zur ebenso einseitigen populären Sicht.`,
      sources: [{ kind: 'fachliteratur', author: 'Rodney Stark', work: 'God\'s Battalions: The Case for the Crusades', year: '2009', status: 'paraphrase' }],
    },
    {
      person: 'john-dickson',
      role: 'als Historiker der dunklen Kapitel',
      text: `John Dickson widmet den Kreuzzügen in *Bullies and Saints* (2021) ein offenes Kapitel. Er erzählt von der Pogromwelle 1096 und dem Massaker in Jerusalem ohne Beschönigung – und davon, dass einige Bischöfe am Rhein versuchten, Juden zu schützen. Seine Pointe: Die Kreuzzüge sind ein Beispiel dafür, wie Christen die „Melodie" Jesu schlecht gespielt haben. Wer die Kreuzzüge verurteilt, tut das zu Recht – aber er misst sie, oft unbewusst, an einem Maßstab, den Jesus selbst gesetzt hat.`,
      sources: [{ kind: 'fachliteratur', author: 'John Dickson', work: 'Bullies and Saints', year: '2021', status: 'paraphrase' }],
    },
    {
      person: 'basilius',
      role: 'als Kanonist der Ostkirche',
      text: `Basilius der Große, Erzbischof von Caesarea, beantwortete in seinen kanonischen Briefen Fragen der Bußpraxis. Über Soldaten, die im Krieg getötet hatten, schrieb er: Die Väter hätten solches Töten nicht als Mord gewertet, doch sei es gut, wenn diese Männer – weil ihre Hände nicht rein sind – drei Jahre lang von der Kommunion fernblieben. Diese Haltung prägte die Ostkirche: Selbst ein notwendiger Verteidigungskrieg ist eine Tragödie, die der Heilung bedarf, niemals ein Weg zum Heil. Eine Lehre, die das Töten für verdienstvoll erklärt, konnte hier nicht entstehen.`,
      sources: [{ kind: 'kirchenvater', author: 'Basilius der Große', work: 'Brief 188', ref: 'Kanon 13', year: '374', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'angriffskriege',
      objection: `Die Kreuzzüge waren grundlose Angriffskriege gegen friedliche Muslime – mittelalterlicher Kolonialismus im Namen Christi.`,
      objectionBy: 'Karen Armstrong',
      answer: `Grundlos waren sie nicht: Seit den 630er-Jahren hatten muslimische Heere Syrien, Jerusalem, Ägypten – die Heimat der Kopten –, Nordafrika und Spanien erobert. 1071 verlor Byzanz in Mantzikert fast ganz Kleinasien an die Seldschuken, und 1095 bat Kaiser Alexios I. den Westen um Hilfe. Kolonialismus im modernen Sinn war es auch nicht: Die meisten Kreuzfahrer verkauften ihr Land, um die Reise zu bezahlen, und viele kehrten verarmt zurück. Das rechtfertigt keine Gräuel – aber es erklärt den Zusammenhang.`,
      questionsBack: [
        `Wie kam es, dass Jerusalem, Syrien und Ägypten im 11. Jahrhundert unter muslimischer Herrschaft standen?`,
        `Welche Kolonie bringt ihren „Kolonisatoren" mehr Kosten als Gewinn?`,
      ],
      followUps: [
        {
          id: 'jerusalem-1099',
          objection: `Kontext hin oder her: In Jerusalem haben sie 1099 Muslime und Juden abgeschlachtet. Ihre eigenen Chronisten prahlten, sie seien bis zu den Knöcheln im Blut gewatet.`,
          objectionBy: 'Christopher Hitchens',
          answer: `Das Massaker von Jerusalem war ein Verbrechen, und ich verteidige es nicht. Das Bild vom Blut bis zu den Knöcheln ist eine Anspielung auf Offb 14,20 und übertreibt, wie mittelalterliche Chronisten es taten – aber dass Tausende Muslime und Juden getötet wurden, ist unstrittig. Schon 1096 hatten Kreuzfahrerhaufen in Mainz, Worms und Speyer Juden ermordet, obwohl einige Bischöfe sie zu schützen versuchten. Diese Taten stehen im Widerspruch zu dem, was Jesus lehrte.`,
          followUps: [
            {
              id: 'also-christentum-gewalttaetig',
              objection: `Also gibst du zu: Das Christentum führt zu Gewalt. Die Päpste haben sogar Vergebung der Sünden fürs Kämpfen versprochen.`,
              objectionBy: 'Christopher Hitchens',
              answer: `Ich gebe zu, dass Christen schreckliche Gewalt geübt haben und dass die Kreuzzugsablässe ein schwerer theologischer Irrweg waren. Aber diese Idee stammt nicht aus dem Neuen Testament, das keinen heiligen Krieg kennt, sondern ist eine Entwicklung der mittelalterlichen Westkirche. Die Ostkirchen haben sie nie übernommen: Basilius der Große empfahl Soldaten, die im Krieg getötet hatten, drei Jahre Buße. Die koptische Kirche hat nie einen Kreuzzug geführt oder gesegnet.`,
              followUps: [
                {
                  id: 'byzanz-auch-kriege',
                  objection: `Die Ostkirchen waren auch nicht friedlich. Byzanz hat ständig Krieg geführt, und die Kaiser ließen sich als „gottgekrönt" feiern.`,
                  objectionBy: 'Steven Runciman',
                  answer: `Das stimmt, Byzanz war ein Staat, der Kriege führte, und auch dort gab es Gewalt gegen Andersgläubige – die Kopten haben unter byzantinischen Statthaltern selbst Verfolgung erlitten. Der Unterschied ist: Die Ostkirche hat den Krieg nie zum Heilsweg erklärt. Als Kaiser Nikephoros II. im 10. Jahrhundert verlangte, gefallene Soldaten als Märtyrer zu ehren, lehnten die Bischöfe unter Berufung auf Basilius ab. Die Kreuzzugsfrömmigkeit war eine Sonderentwicklung, kein christliches Gemeingut.`,
                  sources: [
                    { kind: 'sonstiges', work: 'Bericht über die Ablehnung der Märtyrerverehrung gefallener Soldaten unter Nikephoros II. Phokas (bei Johannes Skylitzes)', year: '10. Jh.', status: 'paraphrase', note: 'Byzantinische Chronistik; vor Detailverwendung prüfen.' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'konstantinopel-1204',
      objection: `1204 haben die Kreuzfahrer sogar das christliche Konstantinopel geplündert, Kirchen entweiht, Nonnen vergewaltigt. Das zeigt, dass es nie um Glauben ging, sondern um Beute.`,
      objectionBy: 'Christopher Hitchens',
      answer: `Da hast du recht – 1204 ist eine Schande, und gerade orthodoxe Christen empfinden das bis heute. Papst Innozenz III. hatte den Angriff auf Christen verboten und die Plünderung danach scharf verurteilt; Papst Johannes Paul II. hat 2001 in Athen um Vergebung gebeten. Der Vierte Kreuzzug zeigt, wie eine Bewegung, die sich religiös verstand, in Gier und Machtpolitik entgleisen konnte. Ehrliche Geschichtsschreibung benennt das – und es bestätigt: Wo Christen töten und plündern, verraten sie ihren Herrn.`,
      followUps: [
        {
          id: 'rheinland-pogrome-1096',
          objection: `Und bevor sie überhaupt Muslime trafen, haben die Kreuzfahrer 1096 in Speyer, Worms, Mainz und Köln Tausende Juden ermordet. Das war der Auftakt des europäischen Antisemitismus – im Namen des Kreuzes.`,
          objectionBy: 'Christopher Hitchens',
          answer: `Ja, die Rheinland-Pogrome von 1096 sind ein furchtbares Verbrechen, und Christen müssen sie ohne Ausflüchte benennen. Bandenführer wie Graf Emicho von Leiningen ermordeten ganze Gemeinden. Zugleich zeigen die Quellen, dass sie damit gegen die Kirche handelten: Bischof Johannes von Speyer stellte die Juden unter seinen Schutz und ließ Mörder bestrafen, andere Bischöfe versuchten es vergeblich. Beim Zweiten Kreuzzug 1146 reiste Bernhard von Clairvaux eigens ins Rheinland, um einen Mönch zum Schweigen zu bringen, der zum Judenmord aufrief.`,
          detail: `Die jüdischen Chroniken jener Zeit (etwa Salomo bar Simson) berichten von Bischöfen, die Juden in ihren Palästen versteckten, aber oft von der Menge überrannt wurden. Das entlastet die Christenheit nicht: Antijüdische Predigt, Verschwörungsglaube und Gier bereiteten den Boden. Aber das Neue Testament bietet keinen Grund für solche Gewalt – Paulus sagt über Israel: „Sie sind Geliebte um der Väter willen" (Röm 11,28).`,
          sources: [
            { kind: 'fachliteratur', author: 'Jonathan Riley-Smith', work: '„The First Crusade and the Persecution of the Jews", Studies in Church History 21', year: '1984', status: 'paraphrase' },
            { kind: 'bibel', work: 'Römer', ref: '11,28–29', quote: `Aber nach der Wahl sind sie Geliebte um der Väter willen. Denn Gottes Gaben und Berufung können ihn nicht gereuen.`, translation: 'Luther 1912', status: 'paraphrase' },
          ],
          followUps: [
            {
              id: 'bernhard-zeugen-doktrin',
              objection: `Bernhard hat die Juden doch nur geschützt, weil sie nach Augustinus als „Zeugen" in Elend und Zerstreuung überleben sollten. Das war keine Liebe, sondern eine Theologie der Demütigung.`,
              objectionBy: 'Hector Avalos',
              answer: `Da ist etwas Wahres dran: Die augustinische „Zeugen-Lehre" schützte jüdisches Leben, sah es aber zugleich in einer Rolle der Erniedrigung – das ist kein Ruhmesblatt. Ich verteidige sie nicht. Aber der Maßstab, an dem auch Bernhard zu messen ist, geht weiter: Jesus gebietet, sogar den Feind zu lieben (Mt 5,44), und Paulus nennt die Juden „Geliebte". Gemessen daran war die mittelalterliche Haltung zu wenig – aber der Mord, gegen den Bernhard einschritt, war ihr Gegenteil.`,
              detail: `Diese Ehrlichkeit macht dich glaubwürdig: Christliche Theologie hat gegenüber dem Judentum über Jahrhunderte schwere Fehler gemacht, die bis in die Katastrophe des 20. Jahrhunderts nachwirkten. Viele Kirchen haben das seit 1945 bekannt. Die richtige Antwort ist nicht, die Geschichte zu verteidigen, sondern zu zeigen, dass die Quellen des Glaubens – die Schrift und Christus selbst, ein Jude – der Judenfeindschaft den Boden entziehen.`,
            },
          ],
        },
      ],
    },
    {
      id: 'muslimisches-trauma',
      objection: `Die Muslime erinnern sich bis heute an die Kreuzzüge. Bin Laden sprach von „Kreuzfahrern". Die Kreuzzüge sind die Wurzel des heutigen Konflikts.`,
      objectionBy: 'Karen Armstrong',
      answer: `Die Gewalt der Kreuzzüge hat echte Wunden hinterlassen, das bestreite ich nicht. Aber Historiker wie Thomas Madden zeigen, dass die Kreuzzüge in der islamischen Welt lange kein zentrales Thema waren und erst im 19. und 20. Jahrhundert, im Zusammenhang mit europäischem Kolonialismus und arabischem Nationalismus, zum politischen Symbol wurden. Wenn heutige Terroristen von „Kreuzfahrern" sprechen, ist das moderne Propaganda – und ihre Opfer sind oft orientalische Christen wie die Kopten, die nie Kreuzfahrer waren.`,
      followUps: [
        {
          id: 'verharmlosung',
          objection: `Du verharmlost die Kreuzzüge, um das Christentum reinzuwaschen. Das ist Geschichtsrevisionismus.`,
          objectionBy: 'Amin Maalouf',
          answer: `Ich will nichts verharmlosen: Die Pogrome, das Massaker von Jerusalem, die Plünderung Konstantinopels und der Albigenserkreuzzug sind Unrecht. Ich will nur, dass wir die Geschichte vollständig erzählen – mit der Vorgeschichte der Eroberungen und mit den Gräueln. Der Historiker John Dickson sagt: Christen müssen sowohl die Melodie als auch das schlechte Spiel ernst nehmen. Meine Verteidigung gilt nicht den Kreuzzügen, sondern Jesus, an dessen Maßstab sie scheitern.`,
          followUps: [
            {
              id: 'kopten-und-kreuzzuege',
              objection: `Und deine eigene Kirche? Die Kreuzfahrer betrachteten die Kopten als Ketzer, verweigerten ihnen den Zugang zu Jerusalem – und nach jedem Angriff auf Ägypten bezahlten die Kopten die Rechnung. Die Kreuzzüge waren auch für euch eine Katastrophe.`,
              objectionBy: 'Amin Maalouf',
              answer: `Das stimmt, und es ist ein wichtiger Teil der Geschichte, den westliche Darstellungen oft vergessen. Die lateinischen Herrscher in Jerusalem behandelten die Kopten als Schismatiker, und nach den Kreuzzugsangriffen auf Ägypten – etwa bei Damiette 1218–1221 – kam es zu Repressalien gegen die einheimischen Christen. Die koptische Kirche hat die Kreuzzüge nie unterstützt. Das zeigt gerade: Die Kreuzzüge waren kein Projekt „des Christentums", sondern einer bestimmten westlichen Christenheit – und ihre Leidtragenden waren auch Christen.`,
              detail: `Für Kopten ist das Erbe der Kreuzzüge zweischneidig: Bis heute werden sie von Extremisten als „Kreuzfahrer" beschimpft, obwohl ihre Vorfahren selbst unter den Kreuzfahrern litten und seit dem 7. Jahrhundert ununterbrochen in Ägypten leben. Der koptische Weg war nie das Schwert, sondern das Martyrium und das treue Ausharren.`,
              sources: [
                { kind: 'fachliteratur', author: 'Otto F. A. Meinardus', work: 'Two Thousand Years of Coptic Christianity', year: '1999', status: 'paraphrase', note: 'Zur Lage der Kopten während der Kreuzzugszeit.' },
              ],
              followUps: [
                {
                  id: 'koptischer-weg-vergebung',
                  objection: `Schöne Worte. Aber welche Religion zeigt denn in der Praxis, dass sie Gewalt anders beantwortet als mit Gewalt?`,
                  objectionBy: 'Sam Harris',
                  answer: `Die koptische Kirche hat es in unserer Zeit vor den Augen der Welt gezeigt. Als 2015 einundzwanzig Männer in Libyen enthauptet wurden, sprachen ihre Familien öffentlich Worte der Vergebung. Nach dem Anschlag auf die Markuskathedrale in Alexandria am Palmsonntag 2017 sagte die Witwe eines getöteten Wächters im Fernsehen zu den Tätern, sie sei nicht zornig auf sie und bete, dass Gott ihnen vergebe. Das ist nicht die Antwort einer Religion, die Gewalt hervorbringt, sondern eine, die sie überwindet.`,
                  detail: `Solche Zeugnisse sind kein Argument, das die Kreuzzüge entschuldigt. Aber sie zeigen, was geschieht, wenn Christen Christus ernst nehmen: „Liebet eure Feinde; segnet, die euch fluchen" (Mt 5,44). Das ist die Melodie, an der jede christliche Gewalt als Missklang erkennbar wird.`,
                  sources: [
                    { kind: 'koptisch', work: 'Synaxarium der koptischen Kirche: Gedenken der 21 Märtyrer von Libyen', year: '2015', status: 'paraphrase', note: 'Gedenktag am 8. Amschir (15. Februar).' },
                    { kind: 'sonstiges', work: 'Fernsehinterview der Witwe von Naseem Faheem (Wächter an der Markuskathedrale Alexandria)', year: '2017', status: 'paraphrase', note: 'Vielfach berichtet nach den Palmsonntagsanschlägen vom 9. April 2017.' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'gott-will-es',
      objection: `„Deus lo vult – Gott will es!" Das war der Schlachtruf von Clermont. Wenn Christen glauben, dass Gott einen Krieg will, kennen sie keine Grenzen mehr.`,
      objectionBy: 'Sam Harris',
      answer: `Gerade deshalb ist es so wichtig, was Gott *tatsächlich* in Christus offenbart hat: Der Sohn Gottes ließ sich lieber kreuzigen, als sich mit dem Schwert verteidigen zu lassen. Schon im Mittelalter gab es Christen, die das sahen: Franz von Assisi ging 1219 während des Kreuzzugs vor Damiette in Ägypten unbewaffnet zu Sultan al-Kamil, um mit ihm über den Glauben zu sprechen. Wer behauptet, Gott wolle einen Krieg zur Verbreitung oder Verteidigung des Glaubens, muss sich an Christus messen lassen – und scheitert.`,
      followUps: [
        {
          id: 'schwert-mt-10-lk-22',
          objection: `Jesus selbst sagt: „Ich bin nicht gekommen, Frieden zu bringen, sondern das Schwert" (Mt 10,34), und in Lk 22,36 befiehlt er seinen Jüngern, Schwerter zu kaufen. Der heilige Krieg ist im Neuen Testament angelegt.`,
          objectionBy: 'Hector Avalos',
          answer: `Lies die nächsten Verse: In Mt 10,35–36 erklärt Jesus, was er meint – Spaltung in Familien, weil sich manche für ihn entscheiden und andere nicht. Das Schwert ist das der Trennung, nicht der Gewalt. In Lk 22 sagt er bei zwei Schwertern „Es ist genug" (22,38) – offensichtlich keine Ausrüstung für einen Feldzug –, und als Petrus wenige Stunden später zuschlägt, heilt Jesus den Verletzten und sagt: „Stecke dein Schwert an seinen Ort; denn wer das Schwert nimmt, der soll durchs Schwert umkommen" (Mt 26,52).`,
          detail: `Die Kirche der ersten drei Jahrhunderte hat diese Worte so verstanden: Christen nahmen nicht an Gewalt zur Verbreitung des Glaubens teil, und viele Väter (Tertullian, Origenes) lehnten selbst den Kriegsdienst ab. Die Ostkirche hat nie eine Theologie des verdienstlichen heiligen Krieges entwickelt; Basilius verlangte sogar von Soldaten, die im Krieg getötet hatten, eine Zeit der Buße. Die Kreuzzugstheologie ist eine späte, westliche Entwicklung – keine Folge des Neuen Testaments.`,
          sources: [
            { kind: 'bibel', work: 'Matthäus', ref: '26,52', quote: `Stecke dein Schwert an seinen Ort; denn wer das Schwert nimmt, der soll durchs Schwert umkommen.`, translation: 'Luther 1912', status: 'verbatim' },
            { kind: 'bibel', work: 'Lukas', ref: '22,38', quote: `Sie sprachen aber: Herr, siehe, hier sind zwei Schwerter. Er aber sprach zu ihnen: Es ist genug.`, translation: 'Luther 1912', status: 'verbatim' },
          ],
          followUps: [
            {
              id: 'dann-pazifismus-heuchelei',
              objection: `Dann sei konsequent: Wenn das Christentum gewaltfrei ist, ist jede Kirche heuchlerisch, die Soldaten segnet und Armeen ihres Landes unterstützt – auch deine.`,
              objectionBy: 'Hector Avalos',
              answer: `Es gibt einen wichtigen Unterschied zwischen dem heiligen Krieg und der Verteidigung von Menschen. Ein heiliger Krieg erklärt das Töten zum gottgefälligen, verdienstvollen Werk für den Glauben – das lehnt die orthodoxe Tradition ab. Die Verteidigung Wehrloser durch eine rechtmäßige Obrigkeit (Röm 13,4) kann notwendig sein, bleibt aber immer tragisch: Darum verlangte Basilius von Soldaten, die getötet hatten, eine Zeit des Fernbleibens von der Kommunion. Die Ostkirche segnet Menschen, die schützen – nicht das Töten.`,
              detail: `Diese Spannung ist in der orthodoxen Tradition bewusst offen gehalten: Der Krieg wird nie „gerecht" im Sinne von „gut", sondern bestenfalls ein kleineres Übel. Ausführlich: Claim „Pazifismus oder gerechter Krieg?".`,
              voices: [
                { person: 'basilius', role: 'als Kanonist', text: `Basilius schreibt im 13. Kanon seines Briefes an Amphilochius, die Väter hätten das Töten im Krieg nicht als Mord gewertet, doch es sei gut, solchen, deren Hände nicht rein seien, für drei Jahre die Kommunion zu versagen. Damit hält er fest: Auch notwendige Gewalt befleckt und verlangt Umkehr.` },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'albigenser-beziers',
      objection: `Und der Albigenserkreuzzug: Christen gegen Christen in Südfrankreich. In Béziers 1209 soll der päpstliche Legat gesagt haben: „Tötet sie alle, Gott wird die Seinen erkennen." Das ist die Logik des Glaubenskriegs in einem Satz.`,
      objectionBy: 'Christopher Hitchens',
      answer: `Das Massaker von Béziers hat stattgefunden, und es ist ein Verbrechen. Der berühmte Satz ist allerdings historisch unsicher: Er stammt aus einer Wundererzählung des Zisterziensers Caesarius von Heisterbach, geschrieben rund zwanzig Jahre später, und schon er leitet ihn mit „er soll gesagt haben" ein. Benutze ihn also nicht als Tatsache. An der Schuld ändert das nichts: Ein Kreuzzug gegen andersgläubige Christen ist eine Perversion des Evangeliums.`,
      detail: `Der Albigenserkreuzzug (1209–1229) richtete sich gegen die Katharer, eine dualistische Bewegung, und wurde rasch zu einem Eroberungskrieg des nordfranzösischen Adels. Er zeigt, wohin die Verbindung von kirchlichem Wahrheitsanspruch und staatlicher Gewalt im mittelalterlichen Westen führen konnte. Die koptische Tradition hat diese Verbindung nie gekannt: Sie war fast immer Minderheit und lebte vom Zeugnis, nicht vom Schwert. Ehrlichkeit bei unsicheren Zitaten – auch bei solchen, die gegen uns verwendet werden – ist Teil unserer Glaubwürdigkeit.`,
      sources: [
        { kind: 'sonstiges', author: 'Caesarius von Heisterbach', work: 'Dialogus miraculorum', ref: 'V,21', year: 'um 1220–1235', quote: `Arnald Amalrich soll gesagt haben: Tötet sie, denn der Herr kennt die Seinen.`, original: 'Caedite eos. Novit enim Dominus qui sunt eius.', status: 'paraphrase', note: 'Caesarius leitet den Satz mit „dixisse fertur" („soll gesagt haben") ein; die Historizität ist unsicher.' },
      ],
    },
  ],
  questionsToAsk: [
    `Wie wurden Jerusalem, Syrien und Ägypten vor den Kreuzzügen muslimisch?`,
    `Welche Stelle des Neuen Testaments rechtfertigt einen heiligen Krieg?`,
    `Weißt du, dass die Ostkirchen und die koptische Kirche nie Kreuzzüge geführt haben?`,
    `An welchem Maßstab misst du die Kreuzzüge, wenn du sie verurteilst – und woher stammt er?`,
  ],
  avoid: [
    `Die Kreuzzüge als „rein defensiv" oder „gerechte Kriege" verherrlichen. Die Gräuel sind real und schwer.`,
    `Das Zitat „Tötet sie alle, Gott wird die Seinen erkennen" (Béziers 1209) unkritisch verwenden – es ist erst Jahrzehnte später überliefert und in seiner Echtheit umstritten (gilt auch für Kritiker).`,
    `Die Kreuzzüge mit heutigen Konflikten gleichsetzen oder Muslime pauschal anklagen.`,
  ],
  concessions: [
    `Kreuzfahrer verübten Pogrome an Juden (1096), ein Massaker in Jerusalem (1099) und plünderten das christliche Konstantinopel (1204).`,
    `Päpste versprachen Sündenvergebung für den Kampf – ein schwerer theologischer Irrweg.`,
    `Kreuzzüge richteten sich auch gegen Christen, die als Ketzer galten (Albigenserkreuzzug).`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Thomas F. Madden', work: 'The Concise History of the Crusades', year: '2014', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Jonathan Riley-Smith', work: 'The Crusades: A History', year: '3. Aufl. 2014', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Christopher Tyerman', work: 'God\'s War', year: '2006', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'John Dickson', work: 'Bullies and Saints', year: '2021', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Kreuzzüge', 'Jerusalem 1099', 'Konstantinopel 1204', 'Islamische Expansion', 'Ägypten', 'Basilius'],
  related: [
    'religion-gewalt/religion-verursacht-kriege',
    'religion-gewalt/inquisition-hexen',
    'christentum-gesellschaft/christentum-kolonialismus',
    'kirchengeschichte-mythen/konstantin-verfaelschte',
  ],
};

export default claim;
