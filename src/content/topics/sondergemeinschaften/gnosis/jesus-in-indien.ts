import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'jesus-in-indien',
  title: `„Jesus lernte in Indien bei Yogis / lebte nach der Kreuzigung in Kaschmir."`,
  proponents: [
    { name: 'Nicolas Notovitch', role: 'Russischer Reiseschriftsteller (1858–nach 1916)', work: 'La vie inconnue de Jésus-Christ (1894) – angebliche tibetische Handschrift über „Issa" im Kloster Hemis' },
    { name: 'Mirza Ghulam Ahmad', role: 'Gründer der Ahmadiyya-Bewegung (1835–1908)', work: 'Masih Hindustan Mein (Jesus in Indien), verfasst 1899, veröffentlicht 1908' },
    { name: 'Holger Kersten', role: 'Deutscher Sachbuchautor', work: 'Jesus lebte in Indien (1983)' },
    { name: 'Levi H. Dowling', role: 'Amerikanischer Prediger und Esoteriker (1844–1911)', work: 'The Aquarian Gospel of Jesus the Christ (1908)' },
    { name: 'Elizabeth Clare Prophet', role: 'Leiterin der Church Universal and Triumphant', work: 'The Lost Years of Jesus (1984)' },
  ],
  steelman: `Die Evangelien schweigen über rund achtzehn Jahre im Leben Jesu – zwischen seinem zwölften Lebensjahr (Lk 2,41–52) und seinem öffentlichen Auftreten mit etwa dreißig. Über die Seidenstraße und Seewege bestanden rege Handelsverbindungen zwischen dem römischen Osten und Indien. Jesu Lehre von Feindesliebe, Gewaltlosigkeit, Mitgefühl und innerer Läuterung erinnert stark an den Buddhismus. 1894 veröffentlichte Nicolas Notovitch den Text einer tibetischen Handschrift aus dem Kloster Hemis in Ladakh, die das Leben eines Heiligen „Issa" beschreibt, der als Jüngling nach Indien zog und bei Brahmanen und Buddhisten lernte. Später berichteten Swami Abhedananda (1922) und der Maler Nicholas Roerich, sie hätten in Ladakh von diesen Überlieferungen gehört. Die Ahmadiyya lehrt seit Mirza Ghulam Ahmad, Jesus habe die Kreuzigung bewusstlos überlebt, sei nach Osten gezogen, um die verlorenen Stämme Israels zu suchen, und liege in Srinagar im Schrein Roza Bal begraben – unter dem Namen „Yuz Asaf". Der Koran (23,50) spricht davon, dass Gott Maria und ihrem Sohn Zuflucht „auf einer Anhöhe mit Wiesen und Quellen" gab – ein Bild für Kaschmir.`,
  biblical: {
    summary: `Die Evangelien geben über die „verborgenen Jahre" genug Auskunft, um eine Indienreise auszuschließen: Jesus kehrte mit seinen Eltern nach Nazareth zurück und „war ihnen untertan" (Lk 2,51); er kam nach Nazareth, „wo er erzogen war", und ging „nach seiner Gewohnheit" in die Synagoge (Lk 4,16). Seine Nachbarn kannten ihn als „den Zimmermann, den Sohn der Maria", und kannten seine Brüder und Schwestern (Mk 6,3) – eine fünfzehnjährige Abwesenheit wäre aufgefallen. In Jerusalem wunderte man sich: „Wie kann dieser die Schrift, so er sie doch nicht gelernt hat?" (Joh 7,15) – man wusste, dass er keine Lehrerschule durchlaufen hatte. Jesu Lehre ist durch und durch jüdisch: Tora, Propheten, Reich Gottes, Menschensohn (Dan 7). Sein Tod, sein Begräbnis und seine Auferstehung sind der Kern des ältesten Bekenntnisses (1 Kor 15,3–5).`,
    detail: `**Feindesliebe ist jüdisch, nicht buddhistisch:** „Liebe deinen Nächsten wie dich selbst" (Lev 19,18), den Fremdling sollt ihr lieben wie euch selbst (Lev 19,34), „Hungert deinen Feind, so speise ihn" (Spr 25,21). Jesus radikalisiert die Tora, er importiert keine fremde Lehre. Zugleich unterscheidet sich seine Botschaft grundlegend vom Buddhismus: ein persönlicher Schöpfergott, Sünde und Vergebung, das Kommen des Reiches, seine eigene Vollmacht, Sünden zu vergeben, und die leibliche Auferstehung.

**Antike Biografien** überspringen häufig Kindheit und Jugend und setzen mit dem öffentlichen Wirken ein; das Schweigen der Evangelien ist für ihre Gattung normal.`,
    sources: [
      { kind: 'bibel', work: 'Lukas', ref: '2,51–52', quote: `Und er ging mit ihnen hinab und kam gen Nazareth und war ihnen untertan. … Und Jesus nahm zu an Weisheit, Alter und Gnade bei Gott und den Menschen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Lukas', ref: '4,16', quote: `Und er kam gen Nazareth, da er erzogen war, und ging in die Schule nach seiner Gewohnheit am Sabbattage und stand auf und wollte lesen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Markus', ref: '6,3', quote: `Ist er nicht der Zimmermann, Marias Sohn, und der Bruder des Jakobus und Joses und Judas und Simon? Sind nicht auch seine Schwestern allhier bei uns?`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '7,15', quote: `Und die Juden verwunderten sich und sprachen: Wie kann dieser die Schrift, so er sie doch nicht gelernt hat?`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Korinther', ref: '15,3–4', quote: `Denn ich habe euch zuvörderst gegeben, was ich empfangen habe: daß Christus gestorben sei für unsre Sünden nach der Schrift, und daß er begraben sei, und daß er auferstanden sei am dritten Tage nach der Schrift.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  opposingView: {
    summary: `In der Fachwelt – auch unter kirchenkritischen Historikern – gelten die Indien-Legenden als widerlegt. Notovitchs Bericht wurde schon kurz nach Erscheinen überprüft: Der Indologe **Friedrich Max Müller** äußerte 1894 begründete Zweifel, und **J. Archibald Douglas**, Professor am Government College in Agra, reiste 1895 nach Hemis. Der Abt des Klosters erklärte schriftlich, es gebe dort weder eine solche Handschrift noch habe ein Europäer wie Notovitch dort gelebt; Douglas veröffentlichte das 1896. Kein Gelehrter hat die angebliche Handschrift je gesehen oder fotografiert. Die deutschen Religionswissenschaftler **Günter Grönbold** (1985) und **Norbert Klatt** (1988) haben die Legenden um Jesus in Indien und Kaschmir ausführlich untersucht und als Konstrukte des 19. und 20. Jahrhunderts erwiesen.`,
    detail: `**Yuz Asaf:** Der Name des in Roza Bal Verehrten lässt sich über die mittelalterliche Legende von Barlaam und Josaphat zurückverfolgen, die selbst eine christianisierte Fassung der Buddha-Legende ist: Aus dem arabischen *Būdhāsaf* (Bodhisattva) wurde durch einen Schreibfehler *Yūdhāsaf*. Der Schrein ist ein muslimisches Heiligengrab; die Identifizierung mit Jesus stammt aus der Ahmadiyya-Literatur um 1900.

**Scheintod:** Die römische Kreuzigung war eine Tötungsmethode, die Soldaten überwachten. Ein medizinischer Fachartikel im *Journal of the American Medical Association* (1986) kam zum Schluss, dass Jesus nach den Berichten tatsächlich tot war. Schon David Friedrich Strauß, ein radikaler Kritiker, wandte gegen die Scheintodthese ein, ein halbtoter, gepflegter Jesus hätte nie den Glauben an einen Sieger über den Tod auslösen können.

**Ehrlich:** Es gab Handelsbeziehungen nach Indien; frühchristliche Traditionen verbinden den Apostel Thomas mit Indien (Thomaschristen in Kerala). Das betrifft aber einen Apostel nach Ostern, nicht Jesus.`,
    sources: [
      { kind: 'fachliteratur', author: 'F. Max Müller', work: 'The Alleged Sojourn of Christ in India', ref: 'The Nineteenth Century 36 (Oktober 1894)', year: '1894', quote: `Begründete Zweifel an der Existenz der von Notovitch beschriebenen Handschrift.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'J. Archibald Douglas', work: 'The Chief Lama of Himis on the Alleged „Unknown Life of Christ"', ref: 'The Nineteenth Century 39 (April 1896)', year: '1896', quote: `Der Abt von Hemis bestreitet schriftlich die Existenz der Handschrift und Notovitchs Aufenthalt.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Günter Grönbold', work: 'Jesus in Indien. Das Ende einer Legende', year: '1985', quote: `Religionswissenschaftliche Widerlegung der Indien- und Kaschmir-Legenden.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Norbert Klatt', work: 'Lebte Jesus in Indien? Eine religionsgeschichtliche Klärung', year: '1988', quote: `Quellenkritische Untersuchung der Legende und ihrer Entstehung im 19./20. Jahrhundert.`, status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'William D. Edwards / Wesley J. Gabel / Floyd E. Hosmer', work: 'On the Physical Death of Jesus Christ', ref: 'Journal of the American Medical Association 255 (1986), 1455–1463', year: '1986', quote: `Medizinische Analyse: Jesus war tot, bevor er vom Kreuz genommen wurde.`, status: 'paraphrase' },
    ],
  },
  church: {
    summary: `Die koptische Kirche kennt eine Auslandsreise Jesu – aber eine, die die Schrift selbst berichtet: die **Flucht der Heiligen Familie nach Ägypten** (Mt 2,13–15). Die koptische Überlieferung bewahrt die Stationen dieses Weges – etwa die Kirche des hl. Sergius in Alt-Kairo und das Kloster al-Muharraq in Oberägypten – und feiert den Einzug Christi in Ägypten als Fest. Diese Erinnerung ist mit dem Text des Evangeliums verbunden und wird seit Jahrhunderten von einer Ortskirche getragen. Die Indien-Legende dagegen taucht erst im späten 19. Jahrhundert auf, gestützt auf eine Handschrift, die niemand je gesehen hat.`,
    detail: `Die Kirche bekennt mit dem Glaubensbekenntnis, dass Christus „gekreuzigt wurde unter Pontius Pilatus, gelitten hat und begraben wurde und am dritten Tage auferstanden ist nach der Schrift". Die Leugnung des Kreuzestodes findet sich schon im Doketismus und im Koran; die Kaschmir-These ist eine moderne Variante dieser alten Leugnung.`,
    sources: [
      { kind: 'bibel', work: 'Matthäus', ref: '2,14–15', quote: `Und er stand auf und nahm das Kindlein und seine Mutter zu sich bei der Nacht und entwich nach Ägyptenland und blieb allda bis nach dem Tod des Herodes, auf daß erfüllet würde, was der HERR durch den Propheten gesagt hat, der da spricht: „Aus Ägypten habe ich meinen Sohn gerufen."`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'konzil', work: 'Glaubensbekenntnis von Nizäa-Konstantinopel', year: '381', quote: `… gekreuzigt für uns unter Pontius Pilatus, hat gelitten und ist begraben worden, ist auferstanden am dritten Tage nach der Schrift …`, translation: 'eigene Übersetzung', status: 'verbatim' },
    ],
  },
  quickAnswer: `Die Evangelien sagen, wo Jesus aufwuchs: in Nazareth, wo die Nachbarn ihn als Zimmermann kannten und sich wunderten, woher er die Schrift kannte, ohne studiert zu haben (Mk 6,3; Joh 7,15). Die „tibetische Handschrift" von Notovitch hat nie jemand gesehen; der Abt von Hemis bestritt schon 1895 schriftlich ihre Existenz. Und das Grab in Kaschmir gehört einem „Yuz Asaf", dessen Name auf eine mittelalterliche Buddha-Legende zurückgeht.`,
  keyPoints: [
    `**Nazareth, nicht Indien:** Lk 2,51; 4,16; Mk 6,3; Joh 7,15 – die Nachbarn kannten Jesus als Handwerker ohne Schulbildung.`,
    `**Notovitch widerlegt:** Max Müller (1894), J. Archibald Douglas (1895/96); niemand hat die Handschrift je gesehen.`,
    `**Yuz Asaf = Bodhisattva:** Der Name geht über Barlaam und Josaphat auf die Buddha-Legende zurück.`,
    `**Scheintod unhaltbar:** Römische Hinrichtungspraxis, medizinische Analyse (JAMA 1986), Strauß' Einwand.`,
    `**Jüdische Lehre:** Feindesliebe und Barmherzigkeit wurzeln in der Tora, nicht im Buddhismus.`,
    `**Späte Quellen:** Alle Indien-Thesen stammen aus dem späten 19. oder 20. Jahrhundert.`,
  ],
  voices: [
    {
      person: 'max-mueller',
      role: 'als Indologe in Oxford',
      text: `Max Müller, einer der bedeutendsten Indologen des 19. Jahrhunderts und Herausgeber der „Sacred Books of the East", kannte die buddhistische und tibetische Literatur wie kaum ein anderer. Er prüfte Notovitchs Behauptungen 1894 und wies darauf hin, dass eine solche Handschrift in den bekannten tibetischen Katalogen nicht vorkommt und Notovitchs Bericht innere Ungereimtheiten aufweist. Er forderte Belege – sie wurden nie geliefert.`,
      sources: [{ kind: 'fachliteratur', author: 'F. Max Müller', work: 'The Alleged Sojourn of Christ in India', ref: 'The Nineteenth Century 36 (1894)', quote: `Kritische Prüfung der Behauptungen Notovitchs.`, status: 'paraphrase' }],
    },
    {
      person: 'habermas',
      role: 'als Historiker der Auferstehung',
      text: `Habermas hat die Scheintodthese in ihren verschiedenen Varianten untersucht. Er verweist auf die römische Hinrichtungspraxis, die Geißelung, den Lanzenstich und die Bestätigung des Todes durch den Hauptmann. Entscheidend ist für ihn das Argument, das schon David Friedrich Strauß vorbrachte: Ein schwer verletzter, kaum lebensfähiger Jesus hätte die Jünger nicht davon überzeugen können, dass er den Tod besiegt habe – der Osterglaube wäre so nicht entstanden.`,
      sources: [{ kind: 'fachliteratur', author: 'Gary R. Habermas / Michael R. Licona', work: 'The Case for the Resurrection of Jesus', year: '2004', quote: `Widerlegung der Scheintodthese.`, status: 'paraphrase' }],
    },
    {
      person: 'nt-wright',
      role: 'als Historiker des Judentums zur Zeit Jesu',
      text: `Wright hat gezeigt, dass Jesus nur im Rahmen des Judentums des Zweiten Tempels verständlich ist: Seine Gleichnisse, seine Ankündigung des Reiches Gottes, seine Tempelhandlung und sein Selbstverständnis als Menschensohn greifen die Hoffnungen Israels auf. Jeder Versuch, ihn aus fernen Weisheitslehren abzuleiten, übersieht, wie tief er in Tora, Propheten und Psalmen verwurzelt ist.`,
      sources: [{ kind: 'fachliteratur', author: 'N. T. Wright', work: 'Jesus and the Victory of God', year: '1996', quote: `Jesus als jüdischer Prophet und Messias im Kontext des Zweiten Tempels.`, status: 'paraphrase' }],
    },
    {
      person: 'keener',
      role: 'als Neutestamentler (antike Biografie)',
      text: `Keener zeigt in seinen Arbeiten, dass die Evangelien der Gattung antiker Biografien entsprechen. Diese konzentrierten sich auf das öffentliche Wirken und den Tod einer Person; Kindheit und Jugend wurden oft übergangen oder nur in Andeutungen erwähnt. Das Schweigen über die Jahre in Nazareth ist daher kein Hinweis auf eine verborgene Reise, sondern typisch für die Gattung.`,
      sources: [{ kind: 'fachliteratur', author: 'Craig S. Keener', work: 'The Historical Jesus of the Gospels', year: '2009', quote: `Evangelien als antike Biografien.`, status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'verlorene-jahre',
      objection: `Die Bibel schweigt über achtzehn Jahre im Leben Jesu. Ist das nicht verdächtig? Irgendwo muss er doch gewesen sein.`,
      objectionBy: 'Holger Kersten / esoterische Autoren',
      answer: `Die Evangelien sagen, wo: in Nazareth. Er war seinen Eltern untertan (Lk 2,51), er ging „nach seiner Gewohnheit" in die Synagoge seiner Heimatstadt (Lk 4,16), und die Nachbarn kannten ihn als Zimmermann und kannten seine Familie (Mk 6,3). In Jerusalem wunderte man sich, dass er die Schrift kannte, „ohne sie gelernt zu haben" (Joh 7,15). Wäre er jahrelang bei indischen Gurus gewesen, hätte man genau das gesagt.`,
      followUps: [
        {
          id: 'lehre-buddhistisch',
          objection: `Aber seine Lehre von Feindesliebe, Gewaltlosigkeit und Mitgefühl klingt doch sehr buddhistisch.`,
          objectionBy: 'Esoterische Autoren',
          answer: `Diese Werte stehen in der Tora: Liebe deinen Nächsten (Lev 19,18), liebe den Fremden (Lev 19,34), speise deinen hungrigen Feind (Spr 25,21). Und das Herz der Botschaft Jesu ist zutiefst unbuddhistisch: ein persönlicher Schöpfergott, den er „Vater" nennt, Vergebung der Sünden durch ihn selbst, das kommende Reich, seine Auferstehung. Ähnliche Ethik bei verschiedenen Lehrern beweist keine Abhängigkeit.`,
          followUps: [
            {
              id: 'handelswege',
              objection: `Es gab Handelswege nach Indien. Er hätte reisen können.`,
              objectionBy: 'Esoterische Autoren',
              answer: `Möglich ist vieles – aber Geschichte braucht Quellen. Für eine Reise Jesu nach Indien gibt es keine einzige antike Quelle, weder christlich noch jüdisch, römisch oder indisch. Alle Behauptungen stammen aus dem späten 19. und dem 20. Jahrhundert. „Er hätte können" ist kein historisches Argument.`,
              questionsBack: [`Welche Quelle aus dem 1. bis 5. Jahrhundert berichtet von einer Reise Jesu nach Indien?`],
              followUps: [
                {
                  id: 'thomasakten-zwilling',
                  objection: `Es gibt eine antike Quelle: die Thomasakten. Dort ist Thomas in Indien – und Jesus erscheint dort leibhaftig, sogar als „Zwilling" des Thomas, den man mit ihm verwechselt. Das ist die Erinnerung an Jesus in Indien!`,
                  objectionBy: 'Holger Kersten / esoterische Autoren',
                  answer: `Die Thomasakten sind ein frommer Roman aus dem 3. Jahrhundert, wohl in Syrien verfasst. Sie erzählen, wie der Apostel Thomas **nach** Ostern nach Indien geht – und Jesus erscheint dort als der Auferstandene in Visionen, nicht als ein Mensch, der dort lebte. Die Akten setzen Kreuzigung und Auferstehung voraus und verkünden sie. Wer sie als Quelle anführt, muss auch ihre Botschaft übernehmen: Jesus starb und lebt als der Erhöhte.`,
                  detail: `Die Thomasakten sind dennoch ein wertvolles Zeugnis: Sie zeigen, dass syrische Christen im 3. Jahrhundert eine Verbindung des Apostels Thomas mit Indien kannten – eine Überlieferung, die die Thomaschristen in Kerala bis heute bewahren. Das ist eine Mission des Apostels, nicht eine Lehrzeit Jesu. Bezeichnend: Selbst dieser legendenfreudige Text kennt keine Jugendreise Jesu nach Indien – die Idee taucht erst im 19. Jahrhundert auf.`,
                  sources: [{ kind: 'gegner', work: 'Thomasakten (Acta Thomae)', ref: 'Kap. 1–3; 11', year: '3. Jh.', quote: `Thomas wird nach Indien gesandt; der auferstandene Herr erscheint in der Gestalt des Thomas.`, status: 'paraphrase' }],
                  questionsBack: [`Setzen die Thomasakten voraus, dass Jesus gekreuzigt wurde und auferstanden ist – oder dass er in Indien lebte?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'notovitch-handschrift',
      objection: `Notovitch hat im Kloster Hemis eine tibetische Handschrift über das Leben des „Issa" gefunden und veröffentlicht.`,
      objectionBy: 'Nicolas Notovitch / Elizabeth Clare Prophet',
      answer: `Diese Handschrift hat nie ein anderer Mensch gesehen. Der Indologe Max Müller bezweifelte den Bericht schon 1894, und Professor J. Archibald Douglas reiste 1895 nach Hemis: Der Abt erklärte schriftlich, es gebe keine solche Handschrift und Notovitch sei nie dort gewesen, wie er behauptete. Douglas veröffentlichte das 1896.`,
      followUps: [
        {
          id: 'abhedananda-roerich',
          objection: `Später haben Swami Abhedananda und Nicholas Roerich die Berichte bestätigt.`,
          objectionBy: 'Elizabeth Clare Prophet',
          answer: `Beide hörten Jahrzehnte nach Notovitchs Buch Erzählungen in der Region – nachdem die Geschichte bereits weltweit bekannt war. Eine Handschrift, die man fotografieren, datieren und übersetzen könnte, legte keiner vor. Mündliche Erzählungen, die nach einem Bestseller auftauchen, belegen nicht die Existenz eines alten Textes.`,
          followUps: [
            {
              id: 'versteckt',
              objection: `Die Mönche oder der Vatikan verstecken die Handschrift eben.`,
              objectionBy: 'Verschwörungstheoretische Autoren',
              answer: `Eine Behauptung, die durch das Fehlen von Belegen nur noch bestätigt wird, kann man nicht widerlegen – aber auch nicht beweisen. Warum sollten buddhistische Mönche in Ladakh einen Text verstecken, der ihre Tradition aufwerten würde? Die Beweislast liegt bei dem, der eine Handschrift behauptet.`,
              questionsBack: [`Welcher Befund würde dich überzeugen, dass es diese Handschrift nie gab?`],
            },
          ],
        },
      ],
    },
    {
      id: 'kaschmir-grab',
      objection: `Jesus überlebte die Kreuzigung, wanderte nach Kaschmir und ist in Srinagar im Roza-Bal-Schrein begraben – unter dem Namen Yuz Asaf.`,
      objectionBy: 'Ahmadiyya / Holger Kersten',
      answer: `Der Name „Yuz Asaf" lässt sich über die mittelalterliche Legende von Barlaam und Josaphat auf die Buddha-Legende zurückführen: Aus „Būdhāsaf" (Bodhisattva) wurde durch einen Schreibfehler „Yūdhāsaf". Die Gleichsetzung mit Jesus stammt aus Schriften um 1900. Und die Voraussetzung – Jesus habe das Kreuz überlebt – widerspricht allen antiken Quellen.`,
      followUps: [
        {
          id: 'scheintod-kaschmir',
          objection: `Er war nur bewusstlos. Nach wenigen Stunden am Kreuz stirbt man nicht, und Pilatus wunderte sich selbst, dass er schon tot war (Mk 15,44).`,
          objectionBy: 'Ahmadiyya-Apologeten',
          answer: `Pilatus wunderte sich – und ließ den Tod durch den Hauptmann bestätigen (Mk 15,44–45). Jesus war vorher gegeißelt worden, ein Soldat stieß ihm die Lanze in die Seite, und es floss Blut und Wasser (Joh 19,34). Ein medizinischer Fachartikel im JAMA (1986) kam zum Schluss, dass er tot war. Und wie schon der Kritiker David Friedrich Strauß bemerkte: Ein halbtoter, gepflegter Jesus hätte nie den Glauben an den Sieger über den Tod ausgelöst.`,
          sources: [
            { kind: 'bibel', work: 'Markus', ref: '15,44–45', quote: `Pilatus aber verwunderte sich, daß er schon tot war, und rief den Hauptmann und fragte ihn, ob er längst gestorben wäre. Und als er's erkundet von dem Hauptmann, gab er Joseph den Leichnam.`, translation: 'Luther 1912', status: 'verbatim' },
            { kind: 'fachliteratur', author: 'David Friedrich Strauß', work: 'Das Leben Jesu für das deutsche Volk bearbeitet', year: '1864', quote: `Ein halbtot aus dem Grab gekommener, siecher Jesus hätte bei den Jüngern nicht den Eindruck eines Siegers über Tod und Grab hervorrufen können.`, status: 'paraphrase', note: 'Strauß war radikaler Kritiker – sein Einwand gegen den Scheintod wiegt daher schwer.' },
          ],
          followUps: [
            {
              id: 'schwamm-betaeubung',
              objection: `Der Schwamm mit „Essig" kurz vor seinem Tod enthielt ein Betäubungsmittel. Jesus hat den Scheintod mit Vertrauten geplant – Hugh Schonfield hat das in „The Passover Plot" gezeigt. Danach pflegte ihn Josef von Arimathäa gesund.`,
              objectionBy: 'Hugh J. Schonfield (The Passover Plot, 1965) / Ahmadiyya',
              answer: `Der „Essig" (*oxos*) war Posca, das saure Weingetränk der römischen Soldaten – sie reichten es ihm (Mk 15,36; Joh 19,29), nicht seine Freunde. Den betäubenden Myrrhenwein hatte Jesus vorher ausdrücklich abgelehnt (Mk 15,23). Ein Plan, der davon abhängt, dass römische Soldaten das richtige Mittel reichen, auf die üblichen Beinbrüche verzichten und keinen Lanzenstich setzen, ist kein Plan, sondern ein Wunder. Und Schonfield selbst räumte ein, dass sein Plan scheiterte – der Lanzenstich habe Jesus getötet.`,
              detail: `Die Scheintodthese muss alle Glieder einer langen Kette erklären: Geißelung, Kreuzigung über Stunden, Lanzenstich, Bestätigung durch den Hauptmann (Mk 15,44–45), Grablegung in Leinen mit rund hundert Pfund Spezereien (Joh 19,39–40), ein verschlossenes Grab – und dann Erscheinungen, die die Jünger von einem Sieg über den Tod überzeugten. Selbst Kritiker der Auferstehung halten die Scheintodthese deshalb heute für erledigt. Ausführlicher: siehe den Claim „Scheintod" im Themenblock Auferstehung.`,
              sources: [
                { kind: 'bibel', work: 'Markus', ref: '15,23', quote: `Und sie gaben ihm Myrrhen im Wein zu trinken; und er nahm's nicht zu sich.`, translation: 'Luther 1912', status: 'verbatim' },
                { kind: 'gegner', author: 'Hugh J. Schonfield', work: 'The Passover Plot', year: '1965', quote: `Jesus habe den Scheintod geplant; der unvorhergesehene Lanzenstich habe den Plan jedoch scheitern lassen.`, status: 'paraphrase' },
              ],
              questionsBack: [`Wenn Jesus den Myrrhenwein ablehnte und die Soldaten den Essig reichten – wer hätte dann das Betäubungsmittel verabreicht?`],
            },
            {
              id: 'koran-23-50',
              objection: `Der Koran sagt in 23,50, Gott habe Maria und ihrem Sohn Zuflucht auf einer Anhöhe mit Wiesen und Quellen gegeben – das ist Kaschmir.`,
              objectionBy: 'Ahmadiyya-Apologeten',
              answer: `Diese Deutung vertritt nur die Ahmadiyya, eine Bewegung des späten 19. Jahrhunderts; die überwältigende Mehrheit der muslimischen Gelehrten lehnt sie ab und versteht Sure 4,158 so, dass Gott Jesus lebendig zu sich erhob. Für die historische Frage gilt aber unabhängig davon: Ein Text des 7. Jahrhunderts, der Kaschmir nicht nennt, kann eine Reise im 1. Jahrhundert nicht belegen.`,
              sources: [{ kind: 'koran', work: 'Sure 23 (al-Mu\'minun)', ref: '23:50', quote: `Und Wir machten den Sohn Marias und seine Mutter zu einem Zeichen und gaben ihnen Zuflucht auf einer Anhöhe mit festem Grund und Quellwasser.`, original: `wa-āwaynāhumā ilā rabwatin dhāti qarārin wa-maʿīn`, translation: 'sinngemäß', status: 'paraphrase', url: 'https://quran.com/23/50' }],
            },
          ],
        },
      ],
    },
    {
      id: 'wassermann-evangelium',
      objection: `Das „Wassermann-Evangelium" von Levi Dowling zeigt die verlorenen Jahre genau: Jesus lernte in Indien, Tibet und Persien und wurde in Ägypten, im Tempel von Heliopolis, in die Mysterien eingeweiht. Dowling hat es direkt aus der Akasha-Chronik empfangen, dem kosmischen Gedächtnis.`,
      objectionBy: 'Levi H. Dowling (The Aquarian Gospel, 1908) / Edgar Cayce',
      answer: `Gerade als Kopte kann ich dazu etwas sagen: Ägypten kennt eine Reise Jesu – die Flucht der Heiligen Familie, als er ein Kind war (Mt 2,13–15). Von einer Einweihung in Heliopolis weiß weder die Schrift noch die koptische Überlieferung, die jeden Ort dieses Weges liebevoll bewahrt. Und die „Akasha-Chronik" ist keine Quelle, die man prüfen kann, sondern die Behauptung eines Autors des Jahres 1908. Wer so arbeitet, kann über jede Person alles behaupten.`,
      detail: `Die verschiedenen „geschauten" Jesus-Biografien widersprechen einander: Notovitch lässt Jesus vor allem bei Brahmanen und Buddhisten lernen, Dowling schickt ihn durch Indien, Tibet, Persien, Assyrien, Griechenland und Ägypten, Edgar Cayce wieder anders. Hätten alle aus derselben kosmischen Quelle geschöpft, müssten sie übereinstimmen. Historisch prüfbar sind sie alle nicht – sie spiegeln den Orientalismus und die Esoterik ihrer Zeit, nicht das 1. Jahrhundert.`,
      sources: [
        { kind: 'gegner', author: 'Levi H. Dowling', work: 'The Aquarian Gospel of Jesus the Christ', year: '1908', quote: `Jesus auf Reisen durch Indien, Tibet, Persien, Assyrien, Griechenland und Ägypten; Einweihung in Heliopolis; angeblich aus der Akasha-Chronik übertragen.`, status: 'paraphrase' },
        { kind: 'bibel', work: 'Matthäus', ref: '2,13', quote: `Stehe auf und nimm das Kindlein und seine Mutter zu dir und fliehe nach Ägyptenland und bleib allda, bis ich dir sage.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      questionsBack: [`Wenn Notovitch, Dowling und Cayce aus derselben geistigen Quelle schöpften – warum widersprechen sich ihre Berichte?`],
      followUps: [
        {
          id: 'jesus-essener',
          objection: `Gut, vielleicht nicht Indien – aber Jesus war Essener. Er lernte in Qumran die geheimen Lehren, die er dann verkündete. Die Schriftrollen vom Toten Meer beweisen das.`,
          objectionBy: 'populäre Sachbücher (u. a. im Gefolge der Qumran-Funde)',
          answer: `Die Qumran-Texte zeigen eine Gemeinschaft, die sich strengster Reinheit verschrieb, den Sabbat noch schärfer hielt als die Pharisäer und lehrte, man solle „alle Söhne des Lichts lieben und alle Söhne der Finsternis hassen" (Gemeinderegel 1QS I,9–10). Jesus dagegen aß mit Zöllnern und Sündern, berührte Aussätzige, heilte am Sabbat und gebot: „Liebet eure Feinde." Die Fachwelt – auch die Herausgeber der Rollen – sieht in Jesus keinen Essener, sondern einen Zeitgenossen, der teils dieselbe Sprache, aber eine ganz andere Botschaft hatte.`,
          detail: `Die Qumran-Funde sind für das Verständnis Jesu dennoch wertvoll: Sie zeigen, dass Begriffe wie „Sohn Gottes" (4Q246), „Licht und Finsternis" oder messianische Erwartungen im Judentum des 1. Jahrhunderts lebendig waren. Damit bestätigen sie, dass die Evangelien in die jüdische Welt Palästinas gehören – nicht nach Indien. Eine „Geheimlehre" Jesu widerspricht seinem eigenen Wort: „Ich habe nichts im Winkel geredet" (Joh 18,20).`,
          sources: [
            { kind: 'juedisch', work: 'Gemeinderegel aus Qumran (1QS)', ref: 'I,9–10', quote: `… alle Söhne des Lichts zu lieben … und alle Söhne der Finsternis zu hassen.`, status: 'paraphrase' },
            { kind: 'bibel', work: 'Matthäus', ref: '5,44', quote: `Ich aber sage euch: Liebet eure Feinde; segnet, die euch fluchen.`, translation: 'Luther 1912', status: 'verbatim' },
          ],
          questionsBack: [`Passt „hasse die Söhne der Finsternis" zu „liebet eure Feinde"?`],
          followUps: [
            {
              id: 'wunder-als-siddhis',
              objection: `Jesu Wunder zeigen doch, dass er ein Meister war, der die Siddhis beherrschte – die übernatürlichen Kräfte, die fortgeschrittene Yogis durch Meditation erlangen. Das ist östliches Wissen.`,
              objectionBy: 'Paramahansa Yogananda / esoterische Autoren',
              answer: `Die Siddhis gelten im Yoga als Nebenprodukte der eigenen Übung, vor denen klassische Texte sogar warnen, weil sie vom Ziel der Befreiung ablenken. Jesu Wunder sind etwas anderes: Zeichen, dass das Reich Gottes gekommen ist (Mt 12,28), verbunden mit seiner Vollmacht, Sünden zu vergeben (Mk 2,5–12) – etwas, das nach jüdischem Glauben nur Gott kann. Er wirkt sie nicht durch Technik, sondern durch sein Wort: „Ich sage dir, stehe auf!" Und das größte Zeichen ist kein Kunststück, sondern seine eigene Auferstehung.`,
              detail: `Die Patanjali-Yogasutren (Buch III) zählen außergewöhnliche Kräfte auf und mahnen zugleich, sie seien Hindernisse auf dem Weg zur Versenkung. Jesus dagegen verweigert Schauwunder ausdrücklich (Mt 4,5–7; 12,38–39) und wirkt Heilungen aus Erbarmen, oft an Ausgestoßenen. Die Evangelien deuten seine Taten im Licht der Propheten: „Die Blinden sehen und die Lahmen gehen" (Mt 11,5; Jes 35,5–6). Das ist die Sprache Israels, nicht die des Yoga.`,
              sources: [
                { kind: 'bibel', work: 'Markus', ref: '2,7.10–11', quote: `Wer kann Sünden vergeben denn allein Gott? … Auf daß ihr aber wisset, daß des Menschen Sohn Macht hat, zu vergeben die Sünden auf Erden, sprach er zu dem Gichtbrüchigen: Ich sage dir, stehe auf.`, translation: 'Luther 1912', status: 'verbatim' },
                { kind: 'oestlich', author: 'Patanjali', work: 'Yogasutra', ref: 'III,37–38', quote: `Die außergewöhnlichen Kräfte sind Hindernisse für die Versenkung, auch wenn sie im weltlichen Leben als Vollkommenheiten gelten.`, status: 'paraphrase', note: 'Verszählung je nach Ausgabe leicht abweichend (III,37 oder III,38).' },
              ],
              questionsBack: [`Welcher Yogi hat beansprucht, Sünden zu vergeben – und wurde dafür als Gotteslästerer angeklagt?`],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Welche antike Quelle berichtet von Jesus in Indien?`,
    `Warum hat nie ein Gelehrter Notovitchs Handschrift gesehen?`,
    `Wie erklärst du Mk 6,3 und Joh 7,15, wenn Jesus jahrelang bei indischen Lehrern war?`,
    `Woher stammt der Name „Yuz Asaf"?`,
  ],
  avoid: [
    `Die Ahmadiyya oder Muslime insgesamt verspotten – viele Ahmadis sind friedliche, verfolgte Menschen; die Mehrheit der Muslime teilt die Kaschmir-These nicht.`,
    `„Jesus war nie außerhalb Palästinas." – Falsch: Als Kind war er in Ägypten (Mt 2,13–15).`,
    `Die Möglichkeit von Handelskontakten nach Indien bestreiten – sie gab es; es fehlen nur die Quellen für Jesus.`,
  ],
  concessions: [
    `Die Evangelien berichten wenig über die Jahre zwischen Jesu zwölftem und dreißigstem Lebensjahr.`,
    `Zwischen dem Römischen Reich und Indien bestanden Handelsverbindungen; frühe Traditionen verbinden den Apostel Thomas mit Indien.`,
    `Es gibt ethische Ähnlichkeiten zwischen Worten Jesu und buddhistischen Lehren.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Günter Grönbold', work: 'Jesus in Indien. Das Ende einer Legende', year: '1985', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Norbert Klatt', work: 'Lebte Jesus in Indien?', year: '1988', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Gary R. Habermas / Michael R. Licona', work: 'The Case for the Resurrection of Jesus', year: '2004', status: 'paraphrase' },
  ],
  difficulty: 1,
  tags: ['Jesus in Indien', 'Notovitch', 'Ahmadiyya', 'Kaschmir', 'Scheintod', 'Verborgene Jahre'],
  related: [
    'auferstehung/scheintod',
    'islam-kreuzigung/nicht-gekreuzigt-4-157',
    'hinduismus/jesus-war-avatar',
    'esoterik-new-age/christusbewusstsein',
  ],
};

export default claim;
