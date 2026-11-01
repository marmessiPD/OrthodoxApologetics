import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'atheistische-regime',
  title: `„Die Verbrechen atheistischer Regime haben nichts mit Atheismus zu tun."`,
  proponents: [
    { name: 'Richard Dawkins', role: 'Evolutionsbiologe, Oxford', work: 'The God Delusion (2006), Kap. 7' },
    { name: 'Christopher Hitchens', role: 'Publizist und Religionskritiker', work: 'God Is Not Great (2007), Kap. 17' },
    { name: 'Sam Harris', role: 'Neurowissenschaftler und Autor', work: 'Letter to a Christian Nation (2006)' },
    { name: 'Michael Shermer', role: 'Wissenschaftspublizist', work: 'The Moral Arc (2015)' },
  ],
  steelman: `Atheismus ist keine Weltanschauung, sondern nur die Abwesenheit des Glaubens an Götter – so wie das Nicht-Briefmarkensammeln kein Hobby ist. Aus einem bloßen Nein folgt nichts, weder Gutes noch Böses. Stalin, Mao und Pol Pot hatten vieles gemeinsam: Schnurrbärte, Personenkulte, dogmatische Ideologien. Sie mordeten im Namen des Marxismus, der Klasse, der Partei und der Nation – aber niemand mordet im Namen des Atheismus. Im Gegenteil: Diese Regime funktionierten wie Religionen, mit unfehlbaren Führern, heiligen Schriften, Prozessionen, Ketzerprozessen und Märtyrerkulten. Das Problem war Dogmatismus, nicht Unglaube. Und Hitler war ohnehin kein Atheist; auf den Koppelschlössern der Wehrmacht stand „Gott mit uns". Wie Dawkins schreibt: Einzelne Atheisten mögen Böses tun, aber sie tun es nicht im Namen des Atheismus. Wie Harris ergänzt: Keine Gesellschaft hat je darunter gelitten, dass ihre Menschen zu vernünftig wurden.`,
  biblical: {
    summary: `Die Bibel beschreibt, was geschieht, wenn der Mensch Gott verwirft: Er wird nicht frei von Anbetung, sondern betet das Geschöpf an statt den Schöpfer (Röm 1,21–25). „Die Toren sprechen in ihrem Herzen: Es ist kein Gott. Sie taugen nichts und sind ein Greuel in ihrem Wesen" (Ps 14,1) – das ist kein Urteil über die Moral einzelner Atheisten, sondern über eine Gesellschaft, die sich vor niemandem mehr verantwortlich weiß. Der Prophet Daniel und seine Freunde verweigerten die Anbetung des Staatsbildes (Dan 3; 6); die Apostel sagten: „Man muss Gott mehr gehorchen denn den Menschen" (Apg 5,29). Wo Gott als höchste Instanz fehlt, nimmt der Staat seinen Platz ein – und duldet niemanden, der ihm diesen Platz streitig macht.`,
    sources: [
      { kind: 'bibel', work: 'Römer', ref: '1,25', quote: `…die Gottes Wahrheit haben verwandelt in die Lüge und haben geehrt und gedient dem Geschöpf mehr denn dem Schöpfer.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '5,29', quote: `Man muß Gott mehr gehorchen denn den Menschen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Daniel', ref: '3,17–18', quote: `Unser Gott kann uns erretten … und wo er's nicht tun will, so sollst du dennoch wissen, daß wir deine Götter nicht ehren noch das goldene Bild, das du hast setzen lassen, anbeten wollen.`, translation: 'nach Luther 1912', status: 'paraphrase' },
    ],
  },
  church: {
    summary: `Die orthodoxen Kirchen haben im 20. Jahrhundert die größte Christenverfolgung ihrer Geschichte erlitten. In der Sowjetunion wurden Zehntausende Bischöfe, Priester, Mönche, Nonnen und Laien erschossen oder kamen in Lagern um; die Russische Orthodoxe Kirche verehrt sie als „Neumärtyrer". Auch die orientalisch-orthodoxe Schwesterkirche Äthiopiens, über Jahrhunderte mit dem Patriarchat von Alexandrien verbunden, litt unter dem marxistischen Derg-Regime, das 1979 ihren Patriarchen Abuna Tewophilos ermorden ließ. Die koptische Kirche ehrt Märtyrer aller Zeiten und lehrt: Der Mensch ist Gottes Ebenbild und darf nie bloßes Mittel für ein politisches Ziel sein. Wo diese Überzeugung fehlt, verliert der Einzelne seinen Schutz.`,
    sources: [
      { kind: 'sonstiges', work: 'Heiligsprechung der Neumärtyrer und Bekenner Russlands durch das Bischofskonzil der Russischen Orthodoxen Kirche', year: '2000', status: 'paraphrase' },
      { kind: 'sonstiges', work: 'Ermordung des äthiopischen Patriarchen Abuna Tewophilos durch das Derg-Regime', year: '1979', status: 'paraphrase', note: 'Historisch gut belegt; Details vor Verwendung prüfen.' },
    ],
  },
  opposingView: {
    summary: `Historiker sind sich einig, dass die Sowjetunion, die Volksrepublik China, das Albanien Enver Hoxhas, das Kambodscha der Roten Khmer und Nordkorea die Religion systematisch verfolgten und dass dies Teil ihres ideologischen Programms war: Der Marxismus-Leninismus verstand den „wissenschaftlichen Atheismus" als notwendigen Bestandteil seiner Weltanschauung. In der Sowjetunion propagierte der „Bund der kämpfenden Gottlosen" (1925 gegründet) die Ausrottung der Religion; die Zahl der geöffneten orthodoxen Kirchen sank von über 50.000 vor der Revolution auf wenige Hundert Ende der 1930er-Jahre. Albanien erklärte sich 1967 zum ersten atheistischen Staat der Welt. Die Gesamtzahl der Opfer kommunistischer Regime schätzte Stéphane Courtois im *Schwarzbuch des Kommunismus* (1997) auf annähernd 100 Millionen; diese Summe ist umstritten (auch Mitautoren distanzierten sich), aber selbst vorsichtige Schätzungen liegen bei vielen Dutzend Millionen. Ebenso unstrittig ist: Nicht alle Opfer starben wegen ihres Glaubens, und der Nationalsozialismus war kein atheistisches Regime.`,
    sources: [
      { kind: 'fachliteratur', author: 'Stéphane Courtois u. a.', work: 'Das Schwarzbuch des Kommunismus', year: '1997 (dt. 1998)', quote: `Die Gesamtzahl der Opfer kommunistischer Regime nähere sich 100 Millionen (u. a. Sowjetunion ca. 20 Mio., China ca. 65 Mio.).`, status: 'paraphrase', note: 'Die Gesamtsumme ist umstritten; die Mitautoren Nicolas Werth und Jean-Louis Margolin distanzierten sich von Courtois\' Einleitung.' },
      { kind: 'fachliteratur', author: 'Alister McGrath', work: 'The Twilight of Atheism: The Rise and Fall of Disbelief in the Modern World', year: '2004', status: 'paraphrase' },
      { kind: 'gegner', author: 'Richard Dawkins', work: 'The God Delusion', ref: 'Kap. 7', year: '2006', quote: `Einzelne Atheisten mögen Böses tun, aber sie tun es nicht im Namen des Atheismus.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Ich behaupte nicht, dass Atheisten böse Menschen sind. Aber die Behauptung, diese Verbrechen hätten nichts mit Atheismus zu tun, ist historisch falsch: Der Marxismus-Leninismus erklärte den Atheismus zur Staatslehre, in der Sowjetunion arbeitete ein „Bund der kämpfenden Gottlosen" an der Ausrottung der Religion, Zehntausende Priester wurden erschossen, und Albanien erklärte sich 1967 stolz zum ersten atheistischen Staat. Niemand hat Kirchen im Namen von Schnurrbärten gesprengt. Und wo kein Gott mehr über dem Staat steht, setzt sich die Partei an seine Stelle – mit tödlichen Folgen.`,
  keyPoints: [
    `**Kein Generalverdacht:** Atheisten können gute Menschen sein; die Frage betrifft Ideologien und Staaten, nicht Einzelne.`,
    `**Atheismus als Staatsprogramm:** Der Marxismus-Leninismus machte „wissenschaftlichen Atheismus" zur Doktrin; der „Bund der kämpfenden Gottlosen" (1925) wollte die Religion ausrotten.`,
    `**Verfolgung im Namen des Unglaubens:** Sprengung von Kirchen, Erschießung von Geistlichen, Albaniens Verfassungsverbot jeder Religion – das geschah nicht im Namen von Schnurrbärten.`,
    `**Moral ohne Gott wird Parteimoral:** Lenin erklärte die Moral den Interessen des Klassenkampfs untergeordnet – ohne höhere Instanz fehlt die Grenze.`,
    `**Doppelte Standards vermeiden:** Wer bei den Kreuzzügen „Religion" verantwortlich macht, kann beim Gulag nicht sagen „nur Politik".`,
    `**Ehrlich bleiben:** Hitler war kein Atheist im Sinne dieser Regime; viele Christen haben im Nationalsozialismus versagt.`,
  ],
  voices: [
    {
      person: 'solschenizyn',
      role: 'als Überlebender des Gulag',
      text: `In seiner Rede zur Verleihung des Templeton-Preises 1983 erinnerte sich Alexander Solschenizyn, wie er als Kind alte Leute die Katastrophen Russlands mit einem einzigen Satz erklären hörte: „Die Menschen haben Gott vergessen; deshalb ist das alles geschehen." Nach fünfzig Jahren Studium der Revolution, die nach seinen Worten Millionen seines Volkes verschlungen hatte, könne er die Hauptursache nicht genauer benennen. Für Solschenizyn war die Gottlosigkeit nicht ein Nebenaspekt der Sowjetideologie, sondern ihr Kern – und die Wurzel ihrer Grausamkeit.`,
      sources: [{ kind: 'sonstiges', author: 'Alexander Solschenizyn', work: 'Templeton-Preis-Rede („Men Have Forgotten God")', year: '1983', quote: `Die Menschen haben Gott vergessen; deshalb ist das alles geschehen.`, original: 'Men have forgotten God; that\'s why all this has happened.', translation: 'eigene Übersetzung (nach der engl. Fassung)', status: 'verbatim' }],
    },
    {
      person: 'dostojewski',
      role: 'als Prophet des Nihilismus',
      text: `In seinem Roman *Die Dämonen* (1872) beschrieb Dostojewski eine Gruppe revolutionärer Nihilisten, die im Namen einer neuen, gottlosen Ordnung zu Mord und Terror bereit sind. Einer ihrer Theoretiker, Schigaljow, gesteht, dass er von unbegrenzter Freiheit ausgegangen und bei unbegrenztem Despotismus angekommen ist. Fünfzig Jahre vor der Russischen Revolution sah Dostojewski voraus, dass der Versuch, eine Gesellschaft ohne Gott zu errichten, nicht zur Befreiung, sondern zur totalen Herrschaft führen würde.`,
      sources: [{ kind: 'fachliteratur', author: 'Fjodor M. Dostojewski', work: 'Die Dämonen', year: '1872', status: 'paraphrase' }],
    },
    {
      person: 'richard-wurmbrand',
      role: 'als verfolgter Pastor',
      text: `Der rumänische lutherische Pastor Richard Wurmbrand verbrachte insgesamt rund vierzehn Jahre in kommunistischen Gefängnissen, wurde gefoltert und hielt in Einzelhaft an seinem Glauben fest. In *Gefoltert für Christus* (1967) berichtet er, dass seine Peiniger offen erklärten, es gebe keinen Gott, kein Jenseits und keine Strafe – darum dürften sie tun, was sie wollten. Zugleich bezeugt Wurmbrand, dass er für seine Folterer betete und einige von ihnen zum Glauben kamen. Sein Zeugnis zeigt beides: die Logik einer gottlosen Gewalt und die Antwort des Evangeliums darauf.`,
      sources: [{ kind: 'sonstiges', author: 'Richard Wurmbrand', work: 'Tortured for Christ (Gefoltert für Christus)', year: '1967', status: 'paraphrase' }],
    },
    {
      person: 'mcgrath',
      role: 'als Theologe und Historiker des Atheismus',
      text: `Alister McGrath, selbst in seiner Jugend überzeugter marxistischer Atheist, beschreibt in *The Twilight of Atheism* (2004) den Aufstieg und Niedergang des Atheismus als öffentliche Weltanschauung. Er zeigt, dass der Staatsatheismus in der Sowjetunion und ihren Satellitenstaaten nicht ein zufälliges Beiwerk, sondern ein ausdrückliches Ziel war: Man wollte die Religion durch Propaganda, Erziehung und Repression zum Verschwinden bringen. Das Scheitern dieses Experiments und das Wiederaufleben des Glaubens nach 1989 sind für McGrath ein wichtiger Befund der Zeitgeschichte.`,
      sources: [{ kind: 'fachliteratur', author: 'Alister McGrath', work: 'The Twilight of Atheism', year: '2004', status: 'paraphrase' }],
    },
    {
      person: 'hart',
      role: 'als Kulturhistoriker',
      text: `David Bentley Hart betont in *Atheist Delusions*, dass die Verbrechen des 20. Jahrhunderts nicht beweisen, dass jeder Atheist zur Gewalt neigt. Sie zeigen aber, was geschieht, wenn eine Gesellschaft die christliche Überzeugung aufgibt, dass jeder Mensch – auch der Schwächste und Nutzloseste – eine unendliche Würde vor Gott hat. Für Hart war die „christliche Revolution" gerade die Entdeckung dieser Würde; ihr Verlust macht den Menschen zum Material für Utopien.`,
      sources: [{ kind: 'fachliteratur', author: 'David Bentley Hart', work: 'Atheist Delusions', year: '2009', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'schnurrbart',
      objection: `Atheismus ist nur das Fehlen eines Glaubens. Stalin hatte auch einen Schnurrbart – deswegen hat er nicht gemordet. Niemand tut Böses im Namen des Atheismus.`,
      objectionBy: 'Richard Dawkins',
      answer: `Niemand hat Kirchen gesprengt, Priester erschossen und Klöster in Lager verwandelt im Namen von Schnurrbärten – aber sehr wohl im Namen des wissenschaftlichen Atheismus. In der Sowjetunion gab es einen staatlich geförderten „Bund der kämpfenden Gottlosen", dessen erklärtes Ziel die Ausrottung der Religion war. Albanien schrieb das Religionsverbot in seine Verfassung. Lenin nannte jede Gottesidee eine unsägliche Abscheulichkeit. Die Verfolgung der Gläubigen geschah ausdrücklich im Namen des Unglaubens.`,
      sources: [
        { kind: 'sonstiges', author: 'Wladimir I. Lenin', work: 'Brief an Maxim Gorki', year: '1913', quote: `Jede religiöse Idee, jede Idee von einem Gott, sogar jedes Kokettieren mit einem Gott sei eine unsägliche Abscheulichkeit.`, status: 'paraphrase' },
        { kind: 'sonstiges', work: 'Verfassung der Volksrepublik Albanien', ref: 'Art. 37', year: '1976', quote: `Der Staat erkennt keine Religion an und unterstützt atheistische Propaganda.`, status: 'paraphrase', note: 'Bereits 1967 hatte Enver Hoxha Albanien zum „ersten atheistischen Staat der Welt" erklärt.' },
      ],
      questionsBack: [
        `Kennst du den „Bund der kämpfenden Gottlosen" – und in wessen Namen wohl hat er gearbeitet?`,
      ],
      followUps: [
        {
          id: 'marxismus-nicht-atheismus',
          objection: `Das war Marxismus, eine politische Ideologie – nicht Atheismus. Du musst unterscheiden.`,
          objectionBy: 'Christopher Hitchens',
          answer: `Der Atheismus war aber kein zufälliges Beiwerk des Marxismus, sondern ein Kernbestandteil: Für Marx war die Kritik der Religion „die Voraussetzung aller Kritik". Und wenn du hier sagst „Das war Politik, nicht Atheismus", dann musst du denselben Maßstab auf die Kreuzzüge und Religionskriege anwenden – auch dort war viel Politik im Spiel. Wer bei Religion „Religion" sagt und beim Gulag „nur Politik", misst mit zweierlei Maß.`,
          followUps: [
            {
              id: 'stalinismus-religion-hitchens',
              objection: `Stalinismus war selbst eine Religion: unfehlbarer Führer, heilige Texte, Ketzerprozesse, einbalsamierte Heilige. Das bestätigt meine These, dass religiöses Denken gefährlich ist.`,
              objectionBy: 'Christopher Hitchens',
              answer: `Dann ist „Religion" für dich alles, was zu Gewalt führt – und deine These ist unwiderlegbar und damit leer. Aber du bestätigst unfreiwillig etwas anderes: Wenn Menschen Gott abschaffen, verschwindet das Bedürfnis nach Anbetung nicht; sie setzen die Partei, den Führer oder die Geschichte an seine Stelle. Genau das sagt die Bibel: Der Mensch, der den Schöpfer nicht ehrt, betet das Geschöpf an (Röm 1,25). Der Atheismus schützt nicht vor Götzen – er macht Platz für sie.`,
              followUps: [
                {
                  id: 'atheismus-keine-gebote',
                  objection: `Aber kein Atheist muss so handeln. Atheismus enthält überhaupt keine Gebote – auch keine zur Gewalt.`,
                  objectionBy: 'Richard Dawkins',
                  answer: `Richtig – Atheismus enthält keine Gebote. Genau das ist das Problem: Er enthält auch kein Gebot *gegen* die Gewalt. Er hinterlässt eine Leere, und die Frage ist, was sie füllt. Lenin erklärte: Unsere Moral ist ganz den Interessen des proletarischen Klassenkampfs untergeordnet. Ohne eine Instanz über dem Staat bestimmt der Staat, was gut ist. Viele Atheisten füllen die Leere mit Humanität, die oft christlich geprägt ist – aber der Atheismus selbst garantiert das nicht.`,
                  sources: [
                    { kind: 'sonstiges', author: 'Wladimir I. Lenin', work: 'Rede „Die Aufgaben der Jugendverbände" auf dem III. Komsomol-Kongress', year: '1920', quote: `Unsere Sittlichkeit ist vollständig den Interessen des proletarischen Klassenkampfes untergeordnet.`, status: 'paraphrase' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'hitler-christ',
      objection: `Und Hitler? Der war kein Atheist, sondern Katholik. Auf den Koppelschlössern der Wehrmacht stand „Gott mit uns". Das Christentum hat den Holocaust möglich gemacht.`,
      objectionBy: 'Christopher Hitchens',
      answer: `Ich stimme zu, dass Hitler kein Atheist im Sinne Stalins war – Christen sollten das nicht behaupten. Sein Verhältnis zur Religion war widersprüchlich; das Regime bekämpfte die Kirchen, verfolgte Bekenner wie Dietrich Bonhoeffer, der 1945 hingerichtet wurde, und plante langfristig ihre Ausschaltung. „Gott mit uns" war ein preußischer Wahlspruch, der lange vor Hitler auf Uniformen stand. Ehrlich bleibt: Viele Christen und Kirchenführer haben im Nationalsozialismus versagt, geschwiegen oder mitgemacht. Der jahrhundertealte christliche Antijudaismus hat den Boden mit bereitet – das ist eine schwere Schuld.`,
      followUps: [
        {
          id: 'reichskonkordat',
          objection: `Die katholische Kirche hat 1933 sogar ein Konkordat mit Hitler geschlossen, und die evangelischen „Deutschen Christen" jubelten ihm zu.`,
          objectionBy: 'Karlheinz Deschner',
          answer: `Das stimmt, und es gehört zur Schuldgeschichte der Kirchen. Zugleich gab es die Bekennende Kirche mit der Barmer Theologischen Erklärung von 1934, die den Totalitätsanspruch des Staates im Namen Christi zurückwies, und Märtyrer wie Bonhoeffer, Pater Maximilian Kolbe oder die Geschwister Scholl, die aus christlicher Überzeugung Widerstand leisteten. Auch hier gilt: Wo Christen versagten, handelten sie gegen Christus; wo sie widerstanden, beriefen sie sich auf ihn.`,
        },
      ],
    },
    {
      id: 'schwarzbuch-uebertrieben',
      objection: `Die Zahl von 100 Millionen aus dem *Schwarzbuch des Kommunismus* ist übertrieben, und selbst Mitautoren haben sich davon distanziert. Ihr arbeitet mit Propagandazahlen.`,
      objectionBy: 'Michael Shermer',
      answer: `Das ist richtig: Courtois' Gesamtsumme ist umstritten, und Mitautoren wie Nicolas Werth haben sich von seiner Einleitung distanziert; zudem starben viele Opfer in Hungersnöten, die nicht direkt mit Atheismus zu tun haben. Ich brauche diese Zahl nicht. Auch vorsichtige Schätzungen liegen bei vielen Dutzend Millionen Toten, und die gezielte Verfolgung der Gläubigen ist unabhängig davon dokumentiert: In der Sowjetunion sank die Zahl der geöffneten Kirchen von über 50.000 auf wenige Hundert, Zehntausende Geistliche wurden ermordet.`,
    },
    {
      id: 'skandinavien-friedlich',
      objection: `Die säkularsten Länder der Welt – Schweden, Dänemark, Japan – sind friedlich und demokratisch. Also führt Atheismus nicht zu Gewalt.`,
      objectionBy: 'Sam Harris',
      answer: `Einverstanden: Säkulare Demokratien sind friedlich, und ich behaupte nicht, dass Atheisten gewalttätig sind. Aber diese Gesellschaften beruhen auf einem Erbe – Menschenwürde, Rechtsstaat, Begrenzung staatlicher Macht –, das tief christlich geprägt ist. Die mörderischen Regime waren jene, die den Atheismus zur Staatsdoktrin machten und dieses Erbe bewusst zerstören wollten. Die Frage ist nicht, ob Atheisten gut sein können, sondern ob der Atheismus allein eine Gesellschaft vor dem Absturz bewahrt. Das 20. Jahrhundert spricht dagegen.`,
      followUps: [
        {
          id: 'theokratien-auch',
          objection: `Religiöse Staaten wie der Iran oder Saudi-Arabien unterdrücken aber genauso. Das Problem ist der Staat, der eine Weltanschauung erzwingt.`,
          objectionBy: 'Sam Harris',
          answer: `Da stimme ich dir zu: Jeder Staat, der Glauben oder Unglauben erzwingt, verletzt die Würde des Menschen. Das Christentum lehrt, Gott und Kaiser zu unterscheiden (Mt 22,21), und die frühen Väter forderten Religionsfreiheit. Die Kopten kennen Unterdrückung durch religiös begründete Staatsmacht aus eigener langer Erfahrung. Gerade deshalb: Die Lösung ist nicht Staatsatheismus, sondern Freiheit – und die gründet in der Überzeugung, dass jeder Mensch vor Gott selbst verantwortlich ist.`,
        },
      ],
    },
    {
      id: 'orthodoxe-kollaboration',
      objection: `Die orthodoxe Kirche hat doch selbst mit dem Sowjetstaat kollaboriert. Bischöfe arbeiteten mit dem KGB zusammen.`,
      objectionBy: 'Christopher Hitchens',
      answer: `Es gab Kompromisse und Kollaboration, das ist wahr – etwa die Loyalitätserklärung von Metropolit Sergius 1927 und spätere Verstrickungen mit dem Geheimdienst. Aber man muss den Zusammenhang sehen: eine Kirche, deren Bischöfe und Priester zu Zehntausenden erschossen wurden, die ums nackte Überleben kämpfte. Neben den Kompromissen stehen unzählige Märtyrer, die lieber starben, als ihren Glauben zu verleugnen. Dass Menschen unter Todesdrohung schwach werden, entlastet nicht das Regime, das sie bedrohte.`,
    },
  ],
  questionsToAsk: [
    `In wessen Namen arbeitete der sowjetische „Bund der kämpfenden Gottlosen"?`,
    `Wenn du bei den Kreuzzügen „Religion" verantwortlich machst – warum beim Gulag nur „Politik"?`,
    `Was hindert einen Staat ohne Gott daran, selbst zu bestimmen, was gut ist?`,
    `Woher stammt die Überzeugung, dass der Einzelne Rechte hat, die kein Staat antasten darf?`,
  ],
  avoid: [
    `„Hitler war Atheist." Historisch nicht haltbar – du verlierst sofort an Glaubwürdigkeit.`,
    `„Atheismus führt zwangsläufig zu Massenmord" oder Atheisten als potenzielle Diktatoren darstellen.`,
    `Mit der 100-Millionen-Zahl argumentieren, als sei sie unumstritten.`,
    `Opferzahlen aufrechnen („Atheisten haben mehr getötet als Christen") – das wirkt kalt und lenkt vom Kern ab.`,
  ],
  concessions: [
    `Viele Opfer kommunistischer Regime starben nicht wegen ihres Glaubens, sondern in Hungersnöten, Säuberungen und Kriegen.`,
    `Christen und Kirchen haben im Nationalsozialismus vielfach versagt; christlicher Antijudaismus hat den Boden mitbereitet.`,
    `Auch orthodoxe Kirchenführer haben unter Druck mit kommunistischen Regimen kollaboriert.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Alister McGrath', work: 'The Twilight of Atheism', year: '2004', status: 'paraphrase' },
    { kind: 'sonstiges', author: 'Alexander Solschenizyn', work: 'Der Archipel Gulag', year: '1973', status: 'paraphrase' },
    { kind: 'sonstiges', author: 'Richard Wurmbrand', work: 'Gefoltert für Christus', year: '1967', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Stéphane Courtois u. a.', work: 'Das Schwarzbuch des Kommunismus', year: '1997', status: 'paraphrase', note: 'Mit Vorsicht benutzen: Gesamtsumme umstritten.' },
  ],
  difficulty: 2,
  tags: ['Atheismus', 'Kommunismus', 'Sowjetunion', 'Albanien', 'Neumärtyrer', 'Solschenizyn'],
  related: [
    'religion-gewalt/religion-verursacht-kriege',
    'moral-und-gott/gut-ohne-gott',
    'religionskritik/opium-des-volkes',
    'sinn-existenz/gott-ist-tot-nietzsche',
  ],
};

export default claim;
