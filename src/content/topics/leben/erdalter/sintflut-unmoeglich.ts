import type { Claim, Source } from '../../../schema.ts';

const young1995: Source = {
  kind: 'fachliteratur',
  author: 'Davis A. Young',
  work: 'The Biblical Flood: A Case Study of the Church\'s Response to Extrabiblical Evidence',
  year: '1995',
  quote: `Young zeichnet die Auslegungsgeschichte der Sintflut von den Kirchenvätern bis zur Gegenwart nach und zeigt, wie Christen auf neue geologische, geografische und zoologische Befunde reagierten; er hält eine globale Flutgeologie für unvereinbar mit dem geologischen Befund.`,
  status: 'paraphrase',
};

const grandCanyon2016: Source = {
  kind: 'fachliteratur',
  author: 'Carol Hill, Gregg Davidson, Tim Helble, Wayne Ranney (Hg.)',
  work: 'The Grand Canyon, Monument to an Ancient Earth: Can Noah\'s Flood Explain the Grand Canyon?',
  year: '2016',
  quote: `Eine Gruppe überwiegend christlicher Geologen zeigt an den Gesteinsschichten des Grand Canyon, warum eine einjährige globale Flut sie nicht erklären kann.`,
  status: 'paraphrase',
};

const waltonLongman2018: Source = {
  kind: 'fachliteratur',
  author: 'Tremper Longman III, John H. Walton',
  work: 'The Lost World of the Flood: Mythology, Theology, and the Deluge Debate',
  year: '2018',
  quote: `Die Autoren lesen die Flutgeschichte als Bericht über ein reales Ereignis, das mit universaler, hyperbolischer Sprache theologisch gedeutet wird.`,
  status: 'paraphrase',
};

const sumerKoenigsliste: Source = {
  kind: 'sonstiges',
  work: 'Sumerische Königsliste',
  year: 'Abschriften ab dem frühen 2. Jt. v. Chr.',
  quote: `Die Liste teilt die Geschichte in Könige „vor der Flut" mit gewaltigen Regierungszeiten und Könige „nachdem die Flut darüber hinweggegangen war".`,
  status: 'paraphrase',
};

const claim: Claim = {
  id: 'sintflut-unmoeglich',
  title: `„Die Sintflut ist geologisch unmöglich."`,
  proponents: [
    { name: 'Bill Nye', role: 'Wissenschaftskommunikator', work: 'Debatte mit Ken Ham (2014): Eisschichten, Gesteinsfolgen, Arche' },
    { name: 'Donald R. Prothero', role: 'Geologe und Paläontologe', work: 'Evolution: What the Fossils Say and Why It Matters (2007)' },
    { name: 'Ian Plimer', role: 'Geologe (Australien)', work: 'Telling Lies for God (1994)' },
    { name: 'Richard Dawkins', role: 'Evolutionsbiologe', work: 'The Greatest Show on Earth (2009)' },
  ],
  steelman: `Es gibt keine weltweite Flutschicht. Stattdessen zeigt die Gesteinsfolge versteinerte Wüstendünen, Salzlager, die nur durch jahrtausendelange Verdunstung entstehen, Bodenhorizonte mit Wurzelspuren, Korallenriffe, die über lange Zeit gewachsen sind, und Millionen feiner Jahresschichten in Seesedimenten. Eisbohrkerne enthalten Hunderttausende Jahresschichten ohne Unterbrechung. Um den Mount Everest zu bedecken, fehlt schlicht das Wasser, und niemand kann erklären, wohin es danach verschwunden sein soll. Eine Arche kann nicht Paare aller Landtierarten aufnehmen, Kängurus müssten von einem Berg in der Türkei nach Australien gewandert sein, ohne Spuren zu hinterlassen, und die Genetik zeigt keinen gleichzeitigen Engpass aller Arten. Ägypten und Mesopotamien weisen keine Kulturunterbrechung auf. Die Sintflut ist ein Mythos – und wer an ihr festhält, stellt sich gegen die gesamte Geologie.`,
  biblical: {
    summary: `Das hebräische *kol ha-ʾareṣ* („die ganze Erde") bedeutet oft „das ganze (bekannte) Land": „Alle Lande kamen nach Ägypten, zu kaufen bei Joseph" (Gen 41,57) meint nicht Australien und Amerika. Ebenso sollen sich nach Dtn 2,25 „alle Völker unter dem ganzen Himmel" vor Israel fürchten – eindeutig regional gemeint. Die Flutgeschichte beschreibt die Katastrophe aus der Sicht des Erzählers und mit dem Ziel, Gottes Gericht über die verdorbene Menschheit zu zeigen (Gen 6,5–7) – nicht eine Aussage über Geologie. Deshalb vertreten bibeltreue Christen sowohl eine globale als auch eine regionale Flut; die Geschichtlichkeit der Flut bezeugt auch Jesus (Mt 24,37–39).`,
    detail: `**Universale Sprache im AT, regional gemeint:**
- Gen 41,57 – „alle Lande" kommen nach Ägypten.
- Dtn 2,25 – „alle Völker unter dem ganzen Himmel".
- 1 Kön 10,24 – „alle Welt" sucht Salomo auf.
- Im NT ähnlich: Apg 2,5 („aus allerlei Volk, das unter dem Himmel ist"), Kol 1,23.

**Gen 7,19–20:** „alle hohen Berge unter dem ganzen Himmel bedeckt … fünfzehn Ellen hoch". Das ist die stärkste Stelle für eine globale Flut – zugegeben. Regional gelesen beschreibt sie, was der Augenzeuge sah: Selbst die Höhen am Horizont standen unter Wasser.

**Positionen unter Christen:** (1) globale Flut mit Flutgeologie (Whitcomb & Morris 1961); (2) regionale Flut, die die damalige Menschheit traf (Hugh Ross); (3) reales lokales Ereignis, theologisch mit universaler Sprache gedeutet (Longman & Walton 2018). Über den Umfang hat die koptische Kirche kein Dogma.`,
    sources: [
      { kind: 'bibel', work: 'Genesis', ref: '41,57', quote: `Und alle Lande kamen nach Ägypten, zu kaufen bei Joseph; denn der Hunger war groß in allen Landen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Deuteronomium (5. Mose)', ref: '2,25', quote: `Heutigestages will ich anheben, daß sich vor dir fürchten und erschrecken sollen alle Völker unter dem ganzen Himmel, …`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Genesis', ref: '7,19', quote: `Und das Gewässer nahm überhand und wuchs so sehr auf Erden, daß alle hohen Berge unter dem ganzen Himmel bedeckt wurden.`, original: 'kol-heharim haggəbohîm ʾăšer-taḥat kol-haššāmāyim', translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Genesis', ref: '6,5', quote: `Da aber der HERR sah, daß der Menschen Bosheit groß war auf Erden und alles Dichten und Trachten ihres Herzens nur böse war immerdar, …`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Matthäus', ref: '24,38–39', quote: `Denn gleichwie sie waren in den Tagen vor der Sintflut – sie aßen, sie tranken, sie freiten und ließen sich freien, bis an den Tag, da Noah zu der Arche einging; und sie achteten's nicht, bis die Sintflut kam und nahm sie alle dahin –, also wird auch sein die Zukunft des Menschensohnes.`, translation: 'Luther 1912', status: 'paraphrase' },
    ],
  },
  church: {
    summary: `Die Väter hielten die Flut überwiegend für weltweit – ein Teil des Wissens ihrer Zeit, keine Konzilsentscheidung. Wichtiger war ihnen der geistliche Sinn: Die Arche ist Bild der Kirche, die Flut Bild der Taufe (1 Petr 3,20–21). Augustinus verteidigte die Geschichtlichkeit der Arche gegen heidnischen Spott und deutete ihre Proportionen auf den Leib Christi; Origenes antwortete auf den Spott des Kelsos. Die koptische Kirche hält an der Geschichtlichkeit der Flut fest, legt aber ihren geografischen Umfang nicht dogmatisch fest.`,
    sources: [
      { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'De Civitate Dei', ref: 'XV,26–27', quote: `Augustinus deutet die Maße der Arche (Länge das Sechsfache der Breite, das Zehnfache der Höhe) auf den menschlichen Leib und damit auf Christus und verteidigt ihre Geschichtlichkeit gegen Spötter.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Origenes', work: 'Gegen Kelsos (Contra Celsum)', ref: 'IV,41', quote: `Origenes antwortet auf Kelsos' Spott über die Arche.`, status: 'paraphrase' },
      { kind: 'bibel', work: '1. Petrus', ref: '3,20–21', quote: `In der Arche wurden wenige, nämlich acht Seelen, durchs Wasser gerettet – ein Vorbild der Taufe, die auch uns jetzt rettet.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Die Geologie findet keine Spur einer weltweiten Flut in den letzten Zehntausenden Jahren; die „Flutgeologie" (Whitcomb & Morris 1961) wird nicht nur von säkularen, sondern auch von vielen christlichen Geologen abgelehnt (Davis Young; Hill, Davidson, Helble & Ranney 2016). Zugleich sind große lokale Flutkatastrophen in Mesopotamien archäologisch belegt (Flutschichten u. a. in Ur, Kisch und Schuruppak aus verschiedenen Epochen), und Mesopotamien selbst erinnerte sich an „die Flut" als Epochengrenze (Sumerische Königsliste, Atrahasis, Gilgamesch XI). Ein regionales Großereignis als historischer Kern ist daher mit der Geologie vereinbar.`,
    sources: [young1995, grandCanyon2016, sumerKoenigsliste],
  },
  quickAnswer: `Die Bibel erlaubt eine regionale Flut: „die ganze Erde" heißt im Hebräischen oft „das ganze Land" – nach Gen 41,57 kamen „alle Lande" nach Ägypten, um Getreide zu kaufen. Die Flutgeschichte will Gottes Gericht über die Menschheit zeigen, keine Geologie lehren. Viele christliche Geologen halten eine große Flut in Mesopotamien für den historischen Kern, und die Mesopotamier selbst erinnerten sich an „die Flut". Manche Christen glauben an eine weltweite Flut – die koptische Kirche hat über den Umfang kein Dogma.`,
  keyPoints: [
    `**Hebräischer Sprachgebrauch:** „Ganze Erde" und „unter dem ganzen Himmel" sind in der Bibel oft regional gemeint (Gen 41,57; Dtn 2,25).`,
    `**Zweck des Textes:** Gericht über die verdorbene Menschheit und Rettung (Gen 6,5–8) – nicht Erdgeschichte.`,
    `**Zugeständnis an die Geologie:** Eine globale Flutgeologie ist mit dem Gesteinsbefund nicht vereinbar – das sagen auch christliche Geologen.`,
    `**Historischer Kern plausibel:** Mesopotamien teilte seine Geschichte in „vor" und „nach der Flut" (Sumerische Königsliste); Flutschichten in mehreren Städten belegen große lokale Katastrophen.`,
    `**Fair bleiben:** Christen vertreten globale, regionale und lokale Deutungen; Jesus bezeugt die Geschichtlichkeit der Flut (Mt 24,37–39).`,
    `**Geistlicher Sinn:** Arche und Flut als Vorbild von Kirche und Taufe (1 Petr 3,20–21) – zentral für die Väter.`,
  ],
  voices: [
    {
      person: 'davis-young',
      role: 'als christlicher Geologe',
      text: `Davis Young, Geologe am Calvin College, hat die Auslegungsgeschichte der Sintflut nachgezeichnet. Er zeigt, dass Christen seit den Vätern immer wieder auf neue Befunde reagiert haben – etwa auf die Entdeckung Amerikas mit seiner eigenen Tierwelt oder auf die Gesteinsfolgen der frühen Geologie, die übrigens oft von gläubigen Naturforschern erforscht wurden. Seine Folgerung: Eine globale Flutgeologie ist geologisch nicht haltbar, der Bibeltext verlangt sie aber auch nicht. Die Kirche sollte aus der Geschichte lernen, Schrift und Auslegung zu unterscheiden.`,
      sources: [young1995, { kind: 'fachliteratur', author: 'Davis A. Young, Ralph F. Stearley', work: 'The Bible, Rocks and Time: Geological Evidence for the Age of the Earth', year: '2008', status: 'paraphrase' }],
    },
    {
      person: 'hugh-ross',
      role: 'als Astrophysiker (regionale Flut)',
      text: `Hugh Ross vertritt eine regionale Flut, die die gesamte damalige Menschheit traf, die sich – so seine Deutung – noch im Raum Mesopotamien konzentrierte. So bleibt die theologische Aussage (universales Gericht über die Menschheit) gewahrt, ohne geologische Unmöglichkeiten zu behaupten. Er stützt sich auf den hebräischen Sprachgebrauch und betont, dass die Bibel aus der Perspektive des Erzählers spricht.`,
      sources: [{ kind: 'fachliteratur', author: 'Hugh Ross', work: 'Navigating Genesis: A Scientist\'s Journey through Genesis 1–11', year: '2014', status: 'paraphrase' }],
    },
    {
      person: 'kitchen',
      role: 'als Ägyptologe und Altorientalist',
      text: `Kenneth Kitchen ordnet die Urgeschichte (Gen 1–11) in ihr altorientalisches Umfeld ein. Er weist darauf hin, dass mesopotamische Überlieferungen – die Sumerische Königsliste, das Atrahasis-Epos, die sumerische Flutgeschichte – eine ähnliche Abfolge kennen: Schöpfung, frühe Menschheit, Flut, Neubeginn. Die Flut galt dort als reales Epochenereignis. Für Kitchen spricht das dafür, dass Genesis und Mesopotamien auf gemeinsame Erinnerungen zurückgreifen, die Genesis aber monotheistisch und ethisch völlig neu deutet.`,
      sources: [{ kind: 'fachliteratur', author: 'Kenneth A. Kitchen', work: 'On the Reliability of the Old Testament', ref: 'Kap. 9 (Urgeschichte)', year: '2003', status: 'paraphrase' }],
    },
    {
      person: 'augustinus',
      role: 'als Apologet gegen heidnischen Spott',
      text: `Augustinus verteidigte in *De Civitate Dei* XV die Geschichtlichkeit der Arche gegen Spötter seiner Zeit und deutete zugleich ihre Proportionen – sechsmal so lang wie breit, zehnmal so lang wie hoch – auf den menschlichen Leib und damit auf Christus, an dessen Seite die Tür (Joh 19,34) geöffnet wurde. Er verbindet so Geschichtlichkeit und geistlichen Sinn, wie es die alexandrinische Tradition liebt. Augustinus hielt die Flut für weltweit – ein Teil des Wissens seiner Zeit.`,
      sources: [{ kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'De Civitate Dei', ref: 'XV,26–27', status: 'paraphrase' }],
    },
    {
      person: 'tadros-malaty',
      role: 'als koptischer Patristiker',
      text: `In der Tradition der alexandrinischen Auslegung, die Tadros Malaty in seinem patristischen Kommentar sammelt, steht die Flut vor allem für Gericht und Rettung: Die Arche ist Bild der Kirche, durch deren Tür man ins Heil eintritt; das Wasser, das richtet und rettet, ist Vorbild der Taufe. Diese geistliche Deutung hängt nicht am geografischen Umfang der Flut und ist für den koptischen Gläubigen der eigentliche Schatz des Textes.`,
      sources: [{ kind: 'koptisch', author: 'Tadros Y. Malaty', work: 'Patristischer Kommentar zur Genesis', status: 'paraphrase', note: 'Inhaltliche Wiedergabe der patristischen Typologie; konkrete Seitenangabe nicht geprüft.' }],
    },
  ],
  dialog: [
    {
      id: 'wasser-everest',
      objection: `Es gibt nicht genug Wasser auf der Erde, um den Mount Everest zu bedecken. Wohin sollte es danach verschwunden sein?`,
      objectionBy: 'Bill Nye',
      answer: `Gegen eine globale Flutgeologie ist das ein berechtigter Einwand. Aber der Text verlangt keinen Everest: „Die ganze Erde" heißt im Hebräischen oft „das ganze Land" – nach Gen 41,57 kamen „alle Lande" nach Ägypten, um Getreide zu kaufen.`,
      followUps: [
        {
          id: 'alle-hohen-berge',
          objection: `Genesis 7,19 sagt: „alle hohen Berge unter dem ganzen Himmel". Deutlicher geht es nicht.`,
          objectionBy: 'Donald Prothero',
          answer: `Eine starke Formulierung – das gebe ich zu. Aber Dtn 2,25 sagt, „alle Völker unter dem ganzen Himmel" sollen sich vor Israel fürchten, und meint offensichtlich die umliegenden Völker. Die Bibel beschreibt hier aus der Sicht des Erzählers: Selbst die Höhen am Horizont standen unter Wasser.`,
          followUps: [
            {
              id: 'warum-arche',
              objection: `Bei einer lokalen Flut hätte Noah einfach wegziehen können. Wozu dann eine Arche?`,
              answer: `Eine gute Frage. Die Arche ist mehr als ein Transportmittel: Sie ist Zeichen von Gericht und Rettung, Noah ist „Prediger der Gerechtigkeit" (2 Petr 2,5), und die Arche wird zum Vorbild der Kirche und der Taufe (1 Petr 3,20–21). Gottes Weg der Rettung wird sichtbar gemacht – nicht ein Umzug organisiert.`,
              followUps: [
                {
                  id: 'tiere-auf-der-arche',
                  objection: `Und die Tiere? Genesis 6 verlangt von „allen Tieren" je ein Paar. Bei einer lokalen Flut hätten die Tiere anderswo einfach überlebt – dann ist das ganze Tier-Programm sinnlos. Und bei einer globalen Flut passen Millionen Arten nicht in ein Holzschiff.`,
                  objectionBy: 'Bill Nye',
                  answer: `Der Einwand trifft beide Seiten – deshalb antworte ich ehrlich auf beide. Für die regionale Lesart gilt dasselbe wie bei „die ganze Erde": „Alle Tiere" meint aus Sicht des Erzählers die Tiere seines Lebensraums, vor allem Vieh und Kleintiere, die Noahs Familie nach der Flut brauchte. Der theologische Sinn steht in Gen 9,10: Gott schließt seinen Bund ausdrücklich auch mit den Tieren. Die Geschichte zeigt, dass Gottes Rettung die ganze Schöpfung umfasst – das ist ihr Punkt, nicht die Logistik.`,
                  detail: `**Regional gelesen:** Der Text spricht in der Perspektive des Erzählers. Die Tiere, die Noah aufnimmt, sind die Tiere seiner Welt; „Vieh, Gewürm und Vögel" (Gen 7,14) entspricht den Gruppen, die ein Mensch des Alten Orients kannte. Longman und Walton lesen die universalen Formulierungen als bewusst gesteigerte Rhetorik, die die Größe des Gerichts ausdrückt.

**Global gelesen (zur Fairness):** Vertreter einer weltweiten Flut argumentieren, Noah habe nicht Arten, sondern Grundtypen („Arten" im biblischen Sinn, hebräisch *mîn*) aufgenommen, aus denen sich die heutige Vielfalt rasch entwickelt habe. Das reduziert die Zahl erheblich, wirft aber eigene biologische Fragen auf.

**Geistlicher Sinn:** Für die Väter ist die Arche, die reine und unreine Tiere birgt, ein Bild der Kirche, in der Menschen aus allen Völkern Rettung finden (vgl. die Vision des Petrus, Apg 10,11–15).`,
                  sources: [
                    { kind: 'bibel', work: 'Genesis', ref: '9,9–10', quote: `Siehe, ich richte mit euch einen Bund auf und mit eurem Samen nach euch und mit allem lebendigen Getier bei euch, an Vögeln, an Vieh und an allen Tieren auf Erden bei euch.`, translation: 'Luther 1912', status: 'paraphrase' },
                    waltonLongman2018,
                  ],
                  questionsBack: [`Was ist für den Erzähler der Zweck der Tiere in der Arche – Artenschutz im modernen Sinn oder ein Zeichen, dass Gottes Bund die ganze Schöpfung umfasst (Gen 9,10)?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'keine-flutschicht',
      objection: `Die Geologie zeigt keine globale Flutschicht – stattdessen Wüstendünen, Salzlager und fossile Böden mitten in der Gesteinsfolge.`,
      objectionBy: 'Donald Prothero',
      answer: `Einverstanden. Das sagen auch christliche Geologen wie Davis Young oder die Autoren des Grand-Canyon-Buchs von 2016. Es widerlegt die Flutgeologie des 20. Jahrhunderts – nicht die Genesis, die eine regionale Lesart zulässt.`,
      sources: [young1995, grandCanyon2016],
      followUps: [
        {
          id: 'kreationisten-global',
          objection: `Aber Junge-Erde-Kreationisten sagen, die Bibel verlange eine weltweite Flut.`,
          answer: `Christen sind hier verschiedener Meinung, und ich respektiere diese Geschwister. Die koptische Kirche hat über den Umfang der Flut kein Dogma. Der Text selbst erlaubt die regionale Lesart, wie der Sprachgebrauch der Bibel zeigt.`,
          followUps: [
            {
              id: 'bibel-dehnbar',
              objection: `Dann ist eure Bibel beliebig dehnbar.`,
              answer: `Nicht beliebig: Die regionale Lesart stützt sich auf den Sprachgebrauch der Bibel selbst (Gen 41,57; Dtn 2,25; 1 Kön 10,24) – nicht auf moderne Bedürfnisse. Und schon Augustinus mahnte, Schriftauslegung nicht gegen gesichertes Naturwissen zu stellen.`,
              followUps: [
                {
                  id: 'autor-meinte-ganze-welt',
                  objection: `Ehrlich gesagt: Der antike Autor hat sehr wohl eine weltweite Flut gemeint – so wie die mesopotamischen Flutmythen. Eure regionale Flut ist eine moderne Harmonisierung, um die Bibel vor der Geologie zu retten. Lasst den Text doch einfach sagen, was er sagt.`,
                  objectionBy: 'Peter Enns',
                  answer: `Da steckt Wahres drin: Der Erzähler dachte nicht in den Kategorien unseres Globus, sondern in denen seiner bekannten Welt – und ich unterstelle ihm keine moderne Geografie. Aber genau das ist der Punkt: „Die ganze Erde" war für ihn die Welt, die er kannte und überblickte. Die inspirierte Botschaft liegt nicht in einer Aussage über Kontinente, die er nicht kannte, sondern in Gericht, Gnade und Neubeginn. Den Text sagen lassen, was er sagt, heißt: ihn in seiner Welt hören.`,
                  detail: `**Enns' Anliegen** (*The Bible Tells Me So*, 2014; *Inspiration and Incarnation*, 2005): Die Bibel spreche in der Vorstellungswelt des Alten Orients; man solle sie nicht in moderne Wissenschaft übersetzen. Das ist ein berechtigter Einspruch gegen eine zu glatte Harmonisierung.

**Walton als Brücke:** John Walton argumentiert, dass antike Texte in ihrer „kognitiven Umwelt" gelesen werden müssen. Gerade wer das ernst nimmt, sieht: Der Erzähler beschreibt ein reales Ereignis in der Sprache und Perspektive seiner Welt – mit universalen Formulierungen, die die Größe des Gerichts ausdrücken. Das ist weder moderne Harmonisierung noch Mythos im Sinn von Erfindung.

**Koptisch-orthodox:** Die Kirche liest die Schrift mit wörtlichem und geistlichem Sinn. Der wörtliche Sinn ist das, was der inspirierte Autor sagen wollte – nicht eine Aussage über moderne Geologie. Die Geschichtlichkeit der Flut wird bekannt, ihr geografischer Umfang ist nicht festgelegt.`,
                  voices: [
                    {
                      person: 'john-walton',
                      role: 'als Alttestamentler (altorientalischer Kontext)',
                      text: `Walton betont, dass die Bibel *für* uns, aber nicht *an* uns geschrieben wurde. Wer sie verstehen will, muss die Denkweise ihrer ersten Hörer rekonstruieren. In *The Lost World of the Flood* (mit Tremper Longman) liest er die Flutgeschichte als Bericht über ein reales Ereignis, das mit der in der Antike üblichen hyperbolischen, universalisierenden Sprache theologisch gedeutet wird.`,
                      sources: [waltonLongman2018],
                    },
                  ],
                  sources: [{ kind: 'gegner', author: 'Peter Enns', work: 'The Bible Tells Me So: Why Defending Scripture Has Made Us Unable to Read It', year: '2014', quote: `Enns plädiert dafür, die biblischen Texte in ihrer antiken Vorstellungswelt zu lesen, statt sie mit moderner Wissenschaft zu harmonisieren.`, status: 'paraphrase' }],
                  questionsBack: [`Was war für einen Erzähler im Alten Orient „die ganze Erde" – und warum sollte er eine Aussage über Kontinente machen, die er nicht kannte?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'von-gilgamesch-kopiert',
      objection: `Die Flutgeschichte ist doch vom Gilgamesch-Epos abgeschrieben – also ein Mythos.`,
      objectionBy: 'Francesca Stavrakopoulou',
      answer: `Die Parallelen sind real. Aber gemeinsame Erinnerung an eine reale Katastrophe erklärt sie mindestens ebenso gut wie Abschreiben – und die Unterschiede sind gewaltig: ein gerechter Gott statt lärmgestörter, hungriger Götter, ein moralischer Grund, eine seetüchtige Arche statt eines Würfels. Mehr dazu im Claim zur babylonischen Herkunft der Genesis.`,
      followUps: [
        {
          id: 'gemeinsame-erinnerung-spekulation',
          objection: `„Gemeinsame Erinnerung" ist reine Spekulation.`,
          answer: `Es ist eine begründete Hypothese: Die Sumerische Königsliste teilt die Geschichte in „vor" und „nach der Flut", Mesopotamien behandelte sie also als reales Ereignis; Flutablagerungen in mehreren mesopotamischen Städten belegen große lokale Überschwemmungen. Ich behaupte Plausibilität, keinen Beweis.`,
          sources: [sumerKoenigsliste],
          followUps: [
            {
              id: 'flutschichten-verschieden-alt',
              objection: `Die Flutschichten in Ur, Kisch und Schuruppak stammen aus verschiedenen Jahrhunderten. Woolley hat 1929 voreilig „Noahs Flut" ausgerufen. Es gab nicht *die* Flut, sondern viele kleine.`,
              objectionBy: 'Donald Prothero',
              answer: `Das stimmt, und ich übernehme Woolleys Überschwang nicht. Mesopotamien war eine Flussebene, die immer wieder überschwemmt wurde. Gerade das macht plausibel, dass sich eine besonders verheerende Flut als Epochengrenze ins Gedächtnis einbrannte – eine Flutschicht in Schuruppak, der Stadt des mesopotamischen Fluthelden, wird oft an den Übergang zur frühdynastischen Zeit gesetzt. Aber ich sage bewusst: plausibel, nicht bewiesen.`,
              detail: `**Die Befunde:** Leonard Woolley fand 1929 in Ur eine mächtige Schwemmschicht und deutete sie als Spur der biblischen Flut. Spätere Grabungen zeigten, dass Flutschichten in Ur, Kisch, Schuruppak und anderen Orten verschiedenen Zeiten angehören und nicht ein einziges Ereignis belegen.

**Was daraus folgt:**
- Eine einzige, das ganze Zweistromland zugleich bedeckende Flut ist archäologisch nicht nachgewiesen.
- Die Region kannte wiederholt große Überschwemmungen; eine davon kann als „die Flut" in Erinnerung geblieben sein.
- Die mesopotamische Literatur verbindet den Fluthelden (Ziusudra/Utnapischtim) mit Schuruppak.

Kenneth Kitchen betont, dass die Abfolge „Schöpfung – frühe Menschheit – Flut – Neubeginn" in mesopotamischen und biblischen Texten gemeinsam ist; die Flut war dort ein fester Bezugspunkt der Geschichte.`,
              voices: [
                {
                  person: 'kitchen',
                  role: 'als Altorientalist',
                  text: `Kitchen ordnet die biblische Urgeschichte in eine altorientalische Gattung ein, die auch die Sumerische Königsliste und das Atrahasis-Epos kennen: eine Folge von frühen Generationen, eine große Flut, danach eine neue Ära. Dass dieselbe Struktur in unabhängigen Traditionen auftaucht, deutet er als Hinweis auf gemeinsame Erinnerung – bei völlig unterschiedlicher theologischer Deutung.`,
                  sources: [{ kind: 'fachliteratur', author: 'Kenneth A. Kitchen', work: 'On the Reliability of the Old Testament', ref: 'Kap. 9', year: '2003', status: 'paraphrase' }],
                },
              ],
              questionsBack: [`Wenn Mesopotamien immer wieder Fluten erlebte – warum wurde dann gerade *eine* Flut zur Epochengrenze in der Königsliste?`],
              followUps: [
                {
                  id: 'koenigsliste-mythisch',
                  objection: `Die Sumerische Königsliste gibt Königen vor der Flut Regierungszeiten von Zehntausenden Jahren. Ein so offensichtlich mythisches Dokument kannst du nicht als Geschichtsquelle verwenden.`,
                  objectionBy: 'Francesca Stavrakopoulou',
                  answer: `Natürlich nicht als Chronik im modernen Sinn – die Zahlen vor der Flut sind legendär, das bestreite ich nicht. Aber die Liste mischt Legende und Geschichte: Einige der frühen Könige nach der Flut, etwa Enmebaragesi von Kisch, sind durch eigene Inschriften als reale Herrscher belegt. Entscheidend ist, *wie* die Mesopotamier dachten: Sie behandelten die Flut als Grenze zwischen zwei Epochen ihrer Geschichte. Mehr behaupte ich nicht.`,
                  detail: `**Legende und Geschichte:** Antike Königslisten verbinden oft historische Erinnerung mit idealisierten Zahlen. Bei der Sumerischen Königsliste ist das deutlich: riesige Regierungszeiten vor der Flut, kürzere danach, und in der frühdynastischen Zeit Namen, die durch Inschriften bestätigt sind (Enmebaragesi von Kisch gilt als frühester durch zeitgenössische Inschriften belegter Herrscher der Liste).

**Der faire Schluss:** „Mythisch" im altorientalischen Sinn heißt nicht automatisch „ohne historischen Anlass". Die Liste beweist keine bestimmte Flut, zeigt aber, dass „die Flut" in Mesopotamien als reales Epochenereignis galt.

**Die biblischen Zahlen:** Auch die hohen Lebensalter in Gen 5 sind deutlich niedriger als die sumerischen Regierungszeiten und folgen einer eigenen Logik. Christen lesen sie unterschiedlich – wörtlich oder symbolisch; ein Dogma gibt es nicht.`,
                  sources: [sumerKoenigsliste],
                  questionsBack: [`Wenn spätere Könige derselben Liste durch Inschriften als real belegt sind – folgt aus den legendären Zahlen, dass die Flut als Epochengrenze erfunden ist?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'jesus-noah',
      objection: `Jesus glaubte an Noah und die Flut. Wenn sie nicht stattfand, irrte er sich – und ist nicht Gott.`,
      answer: `Ich glaube auch, dass die Flut stattfand – Jesus bezeugt sie zu Recht (Mt 24,37–39). Sein Punkt ist die Plötzlichkeit des Gerichts über eine sorglose Menschheit, nicht der geografische Umfang. Eine regionale Flut, die die damalige Menschheit traf, erfüllt seine Aussage vollständig.`,
      followUps: [
        {
          id: 'welt-ging-unter',
          objection: `Aber 2. Petrus 3,6 sagt, die damalige Welt (kosmos) sei untergegangen.`,
          answer: `Derselbe Brief nennt sie kurz zuvor „die Welt der Gottlosen" (2 Petr 2,5) – gemeint ist die Menschenwelt, über die das Gericht kam. „Kosmos" bezeichnet im NT oft die Menschheit (vgl. Joh 3,16).`,
          sources: [{ kind: 'bibel', work: '2. Petrus', ref: '2,5', quote: `… und hat nicht verschont die vorige Welt, sondern bewahrte Noah, den Prediger der Gerechtigkeit, … und führte die Sintflut über die Welt der Gottlosen.`, translation: 'Luther 1912', status: 'paraphrase' }],
          followUps: [
            {
              id: 'feuergericht-parallele',
              objection: `Petrus stellt die Flut direkt neben das kommende Weltgericht durch Feuer (2 Petr 3,5–7). Wenn das Endgericht die ganze Erde betrifft, muss auch die Flut die ganze Erde betroffen haben – sonst hinkt der Vergleich.`,
              objectionBy: 'Ken Ham (Junge-Erde-Position)',
              answer: `Das ist das stärkste neutestamentliche Argument für eine globale Flut – ich nehme es ernst. Aber ein Vergleich verlangt nicht, dass beide Seiten in jeder Hinsicht gleich sind. Petrus vergleicht die *Wirklichkeit* und *Plötzlichkeit* des Gerichts gegen Spötter, die sagen, alles bleibe, wie es war (2 Petr 3,4). Die Flut traf die damalige Welt der Gottlosen; das Endgericht wird alles betreffen. Der Punkt ist: Gott hat schon einmal gerichtet, also wird er wieder richten.`,
              detail: `**Der Zusammenhang:** In 2 Petr 3,3–4 spotten Menschen: „Wo ist die Verheißung seiner Zukunft? … es bleibt alles, wie es von Anfang der Kreatur gewesen ist." Petrus antwortet, sie übersähen absichtlich, dass Gott die damalige Welt durch Wasser gerichtet hat. Das Argument zielt auf die Behauptung, Gott greife nie ein – nicht auf die geografische Ausdehnung.

**Fair bleiben:** Vertreter einer weltweiten Flut lesen die Parallele als Hinweis auf gleichen Umfang. Das ist eine mögliche Auslegung, und die Kirchenväter dachten überwiegend so. Weil die koptische Kirche den Umfang nicht festlegt, kannst du beide Lesarten respektvoll nebeneinanderstehen lassen und den gemeinsamen Kern betonen: Die Flut war real, und das Gericht wird kommen.`,
              sources: [{ kind: 'bibel', work: '2. Petrus', ref: '3,6–7', quote: `Dennoch ward zu der Zeit die Welt durch dieselben mit der Sintflut verderbt. Also auch der Himmel jetzund und die Erde werden durch sein Wort gespart, daß sie zum Feuer behalten werden am Tage des Gerichts und der Verdammnis der gottlosen Menschen.`, translation: 'Luther 1912', status: 'paraphrase' }],
              questionsBack: [`Worauf antwortet Petrus in 2 Petr 3,3–4 – auf eine Frage nach der Ausdehnung der Flut oder auf den Spott, Gott greife nie ins Weltgeschehen ein?`],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Bedeutet „alle Lande kamen nach Ägypten" (Gen 41,57), dass Menschen aus Amerika Getreide kauften?`,
    `Warum ordnen die Mesopotamier selbst ihre Geschichte nach „vor" und „nach der Flut"?`,
    `Widerlegt die Geologie den Text der Genesis – oder eine bestimmte Auslegung des 20. Jahrhunderts?`,
    `Was ist für dich der Sinn der Geschichte: ein Wasserstand oder Gottes Gericht und Rettung?`,
  ],
  avoid: [
    `„Die Arche wurde auf dem Ararat gefunden" – keine dieser Meldungen hat sich bestätigt.`,
    `„Überall gibt es versteinerte Meerestiere auf Bergen, das beweist die Flut" – das erklärt die Plattentektonik über lange Zeiträume.`,
    `Christen, die an eine globale Flut glauben, lächerlich machen.`,
  ],
  concessions: [
    `Eine einjährige, weltweite Flut kann die Gesteinsfolgen der Erde nicht erklären.`,
    `Die Kirchenväter hielten die Flut überwiegend für weltweit.`,
  ],
  furtherReading: [
    young1995,
    grandCanyon2016,
    waltonLongman2018,
    { kind: 'fachliteratur', author: 'Hugh Ross', work: 'Navigating Genesis', year: '2014', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Sintflut', 'Noah', 'Geologie', 'Regionale Flut', 'Gilgamesch'],
  related: ['genesis/genesis-von-babylon-kopiert', 'erdalter/erde-alt-bibel-widerlegt', 'erdalter/radiometrie-widerlegt-bibel', 'genesis/vaeter-lasen-woertlich'],
};

export default claim;
