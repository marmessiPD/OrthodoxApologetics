import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'sterbende-auferstehende-goetter',
  title: `„Es gab viele sterbende und auferstehende Götter (Osiris, Tammuz, Attis)."`,
  proponents: [
    { name: 'James G. Frazer', role: 'Religionsethnologe (†1941)', work: 'The Golden Bough (3. Aufl. 1906–1915), Teil „Adonis, Attis, Osiris"' },
    { name: 'Richard Carrier', role: 'Althistoriker, Mythizist', work: 'On the Historicity of Jesus (2014)' },
    { name: 'Robert M. Price', role: 'Bibelwissenschaftler, Mythizist', work: 'Deconstructing Jesus (2000)' },
    { name: 'Acharya S (Dorothy M. Murdock)', role: 'Autorin (†2015)', work: 'Christ in Egypt (2009)' },
  ],
  steelman: `Der Mythos vom sterbenden und auferstehenden Gott gehört zu den ältesten Mustern der Menschheit: Osiris wird ermordet, zerstückelt und von Isis wiederbelebt; Tammuz (Dumuzi) steigt in die Unterwelt und kehrt jedes Jahr zurück – Ez 8,14 kennt die Frauen, die ihn beweinen; Attis stirbt und wird im Frühjahr mit Jubel gefeiert; Adonis ersteht jährlich neu. Die sumerische Göttin Inanna wird in der Unterwelt getötet, an einem Pflock aufgehängt und nach drei Tagen und drei Nächten wiederbelebt. Tryggve Mettinger hat 2001 gezeigt, dass die Kategorie – entgegen Jonathan Z. Smith – nicht aufgegeben werden muss. Die Auferstehung Jesu „am dritten Tag" fügt sich nahtlos in dieses Muster ein.`,
  biblical: {
    summary: `Das Neue Testament verkündet nicht einen jährlich wiederkehrenden Vegetationsgott, sondern einen bestimmten Menschen, der zu einer bestimmten Zeit (Passafest unter Pontius Pilatus) an einem bestimmten Ort (Jerusalem) hingerichtet und begraben wurde und dessen Grab leer war. Die Auferstehung ist kein Zyklus, sondern ein einmaliges Ereignis: „Christus, von den Toten erweckt, stirbt hinfort nicht" (Röm 6,9). Sie wird bezeugt durch namentlich genannte Zeugen (1 Kor 15,5–8) und verstanden im jüdischen Sinn: als leibliche Auferstehung, die die endzeitliche Auferweckung aller vorwegnimmt (Dan 12,2; 1 Kor 15,20). Ez 8,14 nennt den Tammuzkult ausdrücklich einen „Greuel".`,
    sources: [
      { kind: 'bibel', work: 'Römer', ref: '6,9', quote: `Christus, von den Toten erweckt, hinfort nicht stirbt; der Tod wird hinfort über ihn nicht herrschen.`, status: 'paraphrase' },
      { kind: 'bibel', work: '1. Korinther', ref: '15,14', quote: `Ist aber Christus nicht auferstanden, so ist unsre Predigt vergeblich, so ist auch euer Glaube vergeblich.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Hesekiel', ref: '8,14–15', quote: `Frauen saßen am Nordtor des Tempels und beweinten den Tammuz – und der Prophet nennt es einen noch größeren Greuel.`, status: 'paraphrase' },
      { kind: 'bibel', work: 'Daniel', ref: '12,2', quote: `Viele, die unter der Erde schlafen liegen, werden aufwachen, etliche zum ewigen Leben, etliche zu ewiger Schmach und Schande.`, status: 'paraphrase' },
    ],
  },
  church: {
    summary: `Die koptische Kirche ruft zu Ostern: „Christus ist auferstanden – er ist wahrhaftig auferstanden!" (koptisch *Pikhristos aftonf – khen u-methmi aftonf*). Die Liturgie besingt, dass Christus den Tod durch seinen Tod zertreten und den Hades zerstört hat. Das ist das Gegenteil des Osirismythos: Osiris wird zum Herrscher über die Toten in der Unterwelt; Christus führt die Toten aus dem Hades heraus. Athanasius argumentierte, dass die Auferstehung sich an ihren Wirkungen zeigt: Selbst Kinder und Frauen verachten den Tod, weil Christus ihn besiegt hat (De Inc. 27–29).`,
    sources: [
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'De Incarnatione', ref: '27–30', year: 'ca. 318', quote: `Dass Christen – auch Kinder und Frauen – den Tod verachten und ihm spotten, ist ein Zeichen, dass der Tod durch Christus besiegt ist; ein Toter kann nicht so wirken, also lebt er.`, status: 'paraphrase' },
      { kind: 'liturgie', work: 'Koptischer Ostergruß', quote: `Christus ist auferstanden – er ist wahrhaftig auferstanden.`, original: `Pikhristos aftonf – khen u-methmi aftonf`, status: 'paraphrase', note: 'Transliteration nach verbreiteter koptischer Aussprache; Schreibweisen variieren.' },
    ],
  },
  opposingView: {
    summary: `Seit Jonathan Z. Smiths Artikel von 1987 gilt Frazers Großkategorie in der Religionswissenschaft als weitgehend überholt: Die Belege seien oft späte, mehrdeutige Texte oder moderne Rekonstruktionen. Tryggve Mettinger (2001) hat die Kategorie für einige westsemitische Gottheiten (Dumuzi, Baal, Melqart) rehabilitiert – betont aber zugleich, dass die Auferstehung Jesu nicht als Konstrukt aus diesen Mythen erklärbar ist. Bei Attis und Adonis stammen die Auferstehungsmotive aus nachchristlichen Quellen. Osiris lebt in der Unterwelt weiter, kehrt aber nicht ins irdische Leben zurück.`,
    detail: `- **Osiris:** Wiederbelebt, um Horus zu zeugen; danach Herrscher des Totenreiches (Duat). Vorbild für das Weiterleben des Verstorbenen, nicht Rückkehr in die Welt.
- **Dumuzi/Tammuz:** In „Inannas Gang in die Unterwelt" muss er als Ersatz für Inanna in die Unterwelt; nach dem 1963 veröffentlichten Schluss teilt er sich die Zeit dort mit seiner Schwester Geschtinanna – ein jahreszeitlicher Wechsel.
- **Inanna:** Wird in der Unterwelt getötet, ihr Leichnam an einen Haken/Pflock gehängt; nach drei Tagen und drei Nächten erwirkt ihre Dienerin Hilfe, und sie wird mit Speise und Wasser des Lebens wiederbelebt – muss aber einen Ersatz stellen.
- **Attis:** Frühe Quellen (Catull 63, Ovid, Pausanias) kennen Tod und Unverweslichkeit des Leichnams, keine Auferstehung; Freudenfeste (Hilaria) und ein „gerettet"-Ruf sind erst spät bezeugt.
- **Adonis:** Wiederkehr erst bei Lukian (2. Jh. n. Chr.) und späteren Autoren.
- **Baal (Ugarit) und Melqart (Tyrus):** Mettingers stärkste Fälle; jahreszeitliche Mythen bzw. Riten der „Erweckung".`,
    sources: [
      { kind: 'fachliteratur', author: 'Jonathan Z. Smith', work: 'Dying and Rising Gods. In: Mircea Eliade (Hg.), The Encyclopedia of Religion, Bd. 4', year: '1987', quote: `Die Kategorie der sterbenden und auferstehenden Götter, einst ein Hauptgegenstand der Forschung, muss heute weitgehend als Fehlbezeichnung verstanden werden, die auf phantasievollen Rekonstruktionen und äußerst späten oder höchst mehrdeutigen Texten beruht.`, original: `The category of dying and rising gods, once a major topic of scholarly investigation, must now be understood to have been largely a misnomer based on imaginative reconstructions and exceedingly late or highly ambiguous texts.`, translation: 'eigene Übersetzung', status: 'verbatim', note: 'Smith war kein Apologet, sondern ein säkularer Religionswissenschaftler (University of Chicago).' },
      { kind: 'fachliteratur', author: 'Tryggve N. D. Mettinger', work: 'The Riddle of Resurrection. „Dying and Rising Gods" in the Ancient Near East', year: '2001', quote: `Dumuzi, Baal und Melqart lassen sich als sterbende und wiederkehrende Götter beschreiben; für eine Ableitung der Auferstehung Jesu aus diesen Mythen gibt es jedoch keinen Prima-facie-Beleg.`, status: 'paraphrase' },
      { kind: 'gegner', author: 'James G. Frazer', work: 'The Golden Bough, Teil IV: Adonis, Attis, Osiris', year: '1906', quote: `Vergleichende Konstruktion eines verbreiteten Vegetationsmythos vom sterbenden und wiederkehrenden Gott.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Die Religionswissenschaft hat Frazers Idee weitgehend aufgegeben. Jonathan Z. Smith, kein Christ, schrieb 1987, die Kategorie sei „weitgehend eine Fehlbezeichnung", gestützt auf späte oder mehrdeutige Texte. Osiris kehrt nicht ins Leben zurück, er wird König der Toten. Tammuz wechselt jahreszeitlich zwischen Unterwelt und Oberwelt. Die Auferstehung von Attis und Adonis taucht erst in Quellen nach Christus auf. Und selbst Mettinger, der die Kategorie verteidigt, sagt: Für eine Ableitung der Auferstehung Jesu aus diesen Mythen gibt es keinen Beleg.`,
  keyPoints: [
    `**Forschungsstand:** J. Z. Smith (1987): Fehlbezeichnung auf Basis später oder mehrdeutiger Texte. Mettinger (2001): einige Fälle ja – aber keine Ableitung Jesu.`,
    `**Osiris:** Herrscher der Unterwelt, keine Rückkehr ins irdische Leben. Christus dagegen zerstört den Hades.`,
    `**Zyklisch vs. einmalig:** Vegetationsgötter kehren jedes Jahr wieder; Christus starb einmal, zu einer datierbaren Zeit, und stirbt nicht mehr (Röm 6,9).`,
    `**Mythos vs. Geschichte:** Keine Statthalter, keine Gräber, keine Augenzeugen bei Tammuz oder Attis; bei Jesus Pontius Pilatus, ein Grab und namentliche Zeugen.`,
    `**Späte Quellen:** Auferstehungsmotive bei Attis und Adonis sind nachchristlich – wenn überhaupt Einfluss, dann eher umgekehrt.`,
    `**Jüdischer Rahmen:** Auferstehung meint im Judentum die leibliche, endzeitliche Auferweckung (Dan 12,2) – die Heiden bestritten sie meist ausdrücklich.`,
  ],
  voices: [
    {
      person: 'nt-wright',
      role: 'als Historiker der Auferstehungsvorstellungen',
      text: `Wright hat in seinem großen Werk über die Auferstehung die Jenseitsvorstellungen der Antike systematisch untersucht. Ergebnis: Die griechisch-römische Welt kannte viele Vorstellungen vom Weiterleben der Seele, aber sie bestritt in aller Regel ausdrücklich, dass Tote leiblich zurückkehren – schon Aischylos lässt Apollon sagen, für einen Toten gebe es keine Auferstehung. „Auferstehung" (anastasis) bezeichnete eine neue leibliche Existenz nach dem Tod, nicht ein Leben in der Unterwelt oder den jährlichen Kreislauf der Natur. Die frühen Christen übernahmen das jüdische Konzept – mit einer unerhörten Neuerung: Einer ist schon jetzt auferstanden, mitten in der Geschichte. Diese Mutation lasse sich aus heidnischen Vorbildern nicht erklären.`,
      sources: [
        { kind: 'fachliteratur', author: 'N. T. Wright', work: 'The Resurrection of the Son of God', year: '2003', quote: `Die heidnische Welt bestritt die leibliche Auferstehung; das frühe Christentum vertrat eine jüdische, aber entscheidend veränderte Auferstehungshoffnung.`, status: 'paraphrase' },
        { kind: 'sonstiges', author: 'Aischylos', work: 'Die Eumeniden', ref: '647–648', year: '458 v. Chr.', quote: `Wenn der Staub das Blut eines Mannes getrunken hat, der einmal gestorben ist, gibt es keine Auferstehung (anastasis).`, status: 'paraphrase' },
      ],
    },
    {
      person: 'edwin-yamauchi',
      role: 'als Althistoriker des Alten Orients',
      text: `Yamauchi hat sich schon 1965 mit dem Tammuzkult befasst. Er zeigte, dass die Texte über Dumuzi vor allem Klage um einen Toten sind; die Vorstellung einer jubelnd gefeierten Auferstehung beruhte zu einem guten Teil auf Rekonstruktionen. Der später veröffentlichte Schluss von „Inannas Gang in die Unterwelt" zeigt einen jahreszeitlichen Wechsel, nicht eine siegreiche Auferstehung. Die Frauen in Ez 8,14 weinen um Tammuz – sie feiern keinen Auferstandenen.`,
      sources: [
        { kind: 'fachliteratur', author: 'Edwin M. Yamauchi', work: 'Tammuz and the Bible. Journal of Biblical Literature 84', year: '1965', quote: `Der Tammuzkult ist vor allem Totenklage; eine Auferstehung des Tammuz ist in den Quellen nicht eindeutig belegt.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'athanasius',
      role: 'als Zeuge der Auferstehung in Ägypten',
      text: `Athanasius, der Bischof eines Landes, in dem der Osiriskult jahrtausendelang geblüht hatte, setzt einen anderen Schwerpunkt: Die Auferstehung Christi ist kein Mythos über die Unterwelt, sondern ein Sieg über den Tod, der sich in der Gegenwart zeigt. Wer früher den Tod fürchtete, geht nun als Märtyrer fröhlich in ihn hinein. Ein Toter, so argumentiert er, kann nicht täglich Menschen verwandeln, Götzen stürzen und Dämonen vertreiben – also lebt Christus.`,
      sources: [
        { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'De Incarnatione', ref: '30–32', year: 'ca. 318', quote: `Die Wirkungen Christi in der Gegenwart zeigen, dass er lebt; ein Toter könnte nicht so wirken.`, status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'frazer-muster',
      objection: `Osiris, Tammuz, Attis, Adonis – Frazer hat gezeigt, dass der sterbende und auferstehende Gott ein universelles Muster ist. Jesus ist nur die jüdische Variante.`,
      objectionBy: 'Robert M. Price',
      answer: `Frazers Kategorie gilt in der Religionswissenschaft weitgehend als überholt. Jonathan Z. Smith, ein säkularer Religionswissenschaftler, nannte sie 1987 „weitgehend eine Fehlbezeichnung", gestützt auf phantasievolle Rekonstruktionen und späte oder mehrdeutige Texte. Osiris wird König der Toten, Tammuz wechselt jahreszeitlich, die Auferstehung von Attis und Adonis taucht erst in Quellen nach Christus auf.`,
      followUps: [
        {
          id: 'mettinger-rehabilitiert',
          objection: `Mettinger hat 2001 gezeigt, dass Smith zu weit ging: Dumuzi, Baal und Melqart sterben und kehren zurück. Die Kategorie lebt.`,
          objectionBy: 'Richard Carrier',
          answer: `Das ist richtig, und Mettingers Arbeit ist ernst zu nehmen. Aber derselbe Mettinger zieht die Konsequenz für das Christentum ausdrücklich: Er sieht keinen Prima-facie-Beleg, dass Tod und Auferstehung Jesu aus diesen Mythen konstruiert wurden. Seine Götter sind jahreszeitlich und mythisch; Jesus ist eine geschichtliche Person mit Hinrichtungsdatum, Grab und Zeugen.`,
          followUps: [
            {
              id: 'inanna-drei-tage',
              objection: `Und Inanna? Sie wird getötet, an einem Pflock aufgehängt und nach drei Tagen und drei Nächten wiederbelebt. Eine gekreuzigte Göttin, die am dritten Tag aufersteht – das ist doch eindeutig!`,
              objectionBy: 'Richard Carrier',
              answer: `Der sumerische Text existiert, das ist fair. Aber genau gelesen: Inanna wird als Leichnam an einen Haken gehängt; nach drei Tagen und drei Nächten sucht ihre Dienerin Hilfe, und sie wird in der Unterwelt mit Speise und Wasser des Lebens wiederbelebt – muss aber einen Ersatz stellen, den unglücklichen Dumuzi. Das ist eine Göttin ohne geschichtlichen Ort, keine stellvertretende Hingabe, sondern erzwungener Austausch. Und dass Juden in Galiläa im 1. Jahrhundert ein über tausend Jahre altes Gedicht in toter sumerischer Sprache kannten, müsste man erst zeigen.`,
              followUps: [
                {
                  id: 'dritter-tag-hosea',
                  objection: `Dann stammt der „dritte Tag" eben aus Hosea 6,2 – literarisch, nicht historisch.`,
                  objectionBy: 'Dan McClellan',
                  answer: `Kein Text des Neuen Testaments zitiert Hos 6,2 ausdrücklich. Der „dritte Tag" ergibt sich aus der Chronologie: Kreuzigung am Rüsttag vor dem Sabbat, Grabbesuch der Frauen am ersten Tag der Woche. Selbst wenn die Formulierung „nach der Schrift" an Hosea anklingt, bezieht sie sich auf einen datierbaren Sonntag nach dem Passa – und genau deshalb feierten die Christen von Anfang an den „Herrentag".`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'osiris-prototyp',
      objection: `Osiris wurde ermordet, zerstückelt und von Isis wieder zum Leben erweckt. Er ist der Prototyp des auferstandenen Erlösers – und das in Ägypten, eurer Heimat!`,
      objectionBy: 'Acharya S',
      answer: `Gerade in Ägypten kennt man den Unterschied: Osiris wird wiederbelebt, um Horus zu zeugen, und herrscht danach im Totenreich. Er kehrt nicht ins irdische Leben zurück; er ist der Gott der Toten, und der verstorbene Pharao „wird zu Osiris". Christus dagegen steht leiblich aus dem Grab auf, isst mit seinen Jüngern und zerstört nach dem Bekenntnis der koptischen Liturgie den Hades. Das eine ist Herrschaft über die Toten, das andere Sieg über den Tod.`,
      sources: [
        { kind: 'fachliteratur', author: 'Henri Frankfort', work: 'Kingship and the Gods', year: '1948', quote: `Osiris sei nicht ein sterbender und wiederkehrender Gott, sondern der tote Gott, der nicht unter die Lebenden zurückkehrt.`, status: 'paraphrase' },
      ],
      followUps: [
        {
          id: 'osiris-ewiges-leben',
          objection: `Aber Osiris versprach seinen Anhängern ewiges Leben – genau wie Jesus.`,
          objectionBy: 'Acharya S',
          answer: `Hoffnung auf ein Leben nach dem Tod gibt es in fast allen Kulturen; daraus folgt keine Abhängigkeit. Die ägyptische Hoffnung zielte auf das Weiterleben im Jenseits, wofür der Körper mumifiziert wurde. Die christliche Botschaft ist etwas anderes: Ein bestimmter Mensch ist in der Geschichte leiblich und verwandelt auferstanden, vor Zeugen (1 Kor 15,5–8), als Erstling der allgemeinen Auferstehung.`,
          followUps: [
            {
              id: 'plutarch-isis-osiris',
              objection: `Plutarch beschreibt in „Über Isis und Osiris" einen Mysterienkult, in dem Osiris stirbt und wiederkehrt. Das war die religiöse Luft, die die frühen Christen atmeten.`,
              objectionBy: 'Richard Carrier',
              answer: `Plutarch schrieb um 100 n. Chr. – nach Paulus und den meisten Evangelien. Und gerade er warnt davor, die Osiris-Erzählung wörtlich zu nehmen: Er deutet sie philosophisch und allegorisch, als Bild für kosmische Prinzipien. Osiris kehrt auch bei ihm nicht ins irdische Leben zurück, sondern herrscht über die Toten. Ein Mythos, den schon seine gebildeten Anhänger allegorisch lasen, ist das Gegenteil eines Berichts über ein leeres Grab in Jerusalem unter Pontius Pilatus.`,
              sources: [
                { kind: 'sonstiges', author: 'Plutarch', work: 'Über Isis und Osiris (De Iside et Osiride)', ref: 'bes. Kap. 11; 20; 78', year: 'ca. 100–120', quote: `Plutarch mahnt, die Mythen nicht wörtlich zu verstehen, sondern ihren philosophischen Sinn zu suchen; Osiris herrscht über die Toten.`, status: 'paraphrase', note: 'Kapitelangaben als Orientierung; Plutarch allegorisiert durchgehend.' },
              ],
              followUps: [
                {
                  id: 'isis-lactans-theotokos',
                  objection: `Und eure koptische Kirche hat das ägyptische Erbe nur umetikettiert: Isis mit dem Horuskind an der Brust wurde zur Gottesmutter mit dem Jesuskind. Das sieht man doch auf den Ikonen!`,
                  objectionBy: "Tim O'Neill",
                  answer: `Hier muss man ehrlich unterscheiden: Dass frühchristliche Künstler in Ägypten die Bildsprache ihrer Umwelt benutzten – auch das Motiv der stillenden Mutter –, halten viele Kunsthistoriker für plausibel, und ich bestreite es nicht. Aber Bildform ist nicht Glaubensinhalt. Die Kopten sprachen auch weiter die Sprache der Pharaonen, in griechischen Buchstaben geschrieben – und verkündeten darin das Evangelium. Isis ist eine Göttin, die einen Gott gebiert; die Theotokos ist eine menschliche Frau, aus der der ewige Logos Fleisch annimmt. Das Konzil von Ephesus (431) spricht über die Menschwerdung, nicht über eine Muttergöttin.`,
                  detail: `Für die koptische Kirche ist das kein peinliches Geheimnis, sondern ein Zeichen der Inkulturation: Wie Paulus griechische Begriffe nutzte (Apg 17,28), übernahm die ägyptische Kirche künstlerische Formen ihrer Kultur und füllte sie mit neuem Inhalt. Das Ankh-Zeichen lebte etwa als koptisches Kreuz (*crux ansata*) weiter. Gleichzeitig kämpften Alexandriner wie Athanasius und Schenute entschieden gegen den Kult der alten Götter – die Kirche wusste genau, wo die Grenze verlief. Ehrlich bleibt: Manche Christen der Spätantike haben die Grenze im Volksglauben verwischt; die Lehre der Kirche nie.`,
                  voices: [
                    {
                      person: 'athanasius',
                      role: 'als Gegner des ägyptischen Götterkults',
                      text: `Athanasius setzt sich in „Gegen die Heiden" ausführlich mit der ägyptischen Götterverehrung auseinander und hält sie für Verehrung der Schöpfung statt des Schöpfers. Für ihn ist die Menschwerdung des Logos gerade das Gegenteil eines Mythos: Gott selbst tritt in die Geschichte ein, um die Menschen von der Anbetung des Geschaffenen zu befreien.`,
                      sources: [
                        { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Gegen die Heiden (Contra Gentes)', ref: '9; 23–24', year: 'ca. 335', quote: `Kritik der ägyptischen Tier- und Götterverehrung als Verehrung der Schöpfung statt des Schöpfers.`, status: 'paraphrase', note: 'Kapitelangaben als Orientierung.' },
                      ],
                    },
                  ],
                  sources: [
                    { kind: 'konzil', work: 'Konzil von Ephesus, Bestätigung des zweiten Briefes Kyrills an Nestorius', year: '431', quote: `Maria ist Theotokos, weil der aus ihr Geborene der menschgewordene Logos selbst ist.`, status: 'paraphrase' },
                  ],
                  questionsBack: [`Wenn die Kopten die koptische Sprache von den Pharaonen erbten – macht das ihr Evangelium zu einem altägyptischen Mythos?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'auferstehung-persisch',
      objection: `Die Juden haben die Auferstehungsidee ohnehin von den Persern übernommen. Also ist auch die christliche Auferstehung geborgt.`,
      objectionBy: 'Dan McClellan',
      answer: `Ob und wie stark persischer Einfluss auf die jüdische Auferstehungshoffnung wirkte, ist in der Forschung umstritten; sie hat jedenfalls tiefe Wurzeln in den eigenen Schriften (Jes 26,19; Ez 37; Dan 12,2; 2 Makk 7). Entscheidend ist aber: Weder Judentum noch Zoroastrismus erwarteten, dass ein Einzelner mitten in der Geschichte vor allen anderen aufersteht. Genau das verkündeten die Jünger – eine Neuerung, die aus keinem Vorbild folgt.`,
      followUps: [
        {
          id: 'saisonal-verstanden',
          objection: `Die Menschen der Antike verstanden Jesus eben wie einen Vegetationsgott, der im Frühjahr wiederkommt – Ostern liegt ja nicht zufällig im Frühling.`,
          objectionBy: 'Robert M. Price',
          answer: `Ostern liegt im Frühling, weil das Passafest im Frühling liegt – und Jesus am Passa starb. Die frühen Christen feierten seine Auferstehung nicht als Naturzyklus, sondern wöchentlich am Herrentag und jährlich am Pascha, in Verbindung mit dem Auszug aus Ägypten. Niemand sagte, Christus sterbe jedes Jahr neu; im Gegenteil: „Er stirbt hinfort nicht" (Röm 6,9).`,
        },
      ],
    },
    {
      id: 'attis-hilaria',
      objection: `Attis starb und wurde am 25. März mit dem Freudenfest der Hilaria als Auferstandener gefeiert. Die Christen haben Ostern vom Attiskult übernommen.`,
      objectionBy: 'Acharya S',
      answer: `Die frühen Quellen zu Attis – Catull, Ovid, Pausanias – erzählen, dass er stirbt und sein Leichnam nicht verwest; von Auferstehung keine Rede. Die Freudenfeste und die Deutung als Auferstehung sind erst in Quellen des 4. Jahrhunderts und später bezeugt, also lange nach dem Neuen Testament. Und Ostern ist an das jüdische Passa gebunden – darüber stritten die Christen schon im 2. Jahrhundert (Osterfeststreit).`,
      followUps: [
        {
          id: 'spaete-quellen-alte-praxis',
          objection: `Späte Quellen können ältere Praxis widerspiegeln. Du kannst nicht ausschließen, dass der Kult schon früher so gefeiert wurde.`,
          objectionBy: 'Richard Carrier',
          answer: `Ausschließen kann ich es nicht – aber du kannst es auch nicht voraussetzen, denn es ist genau das, was zu beweisen wäre. Wenn ein Motiv erst nach dem Christentum belegt ist, kann der Einfluss ebenso gut in die andere Richtung gegangen sein; manche Forscher halten genau das für möglich, weil die Kulte im 4. Jahrhundert mit dem Christentum konkurrierten. Historisch arbeitet man mit belegten Daten, nicht mit vermuteten.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Welcher dieser Götter wird nach den Quellen leiblich und dauerhaft ins irdische Leben zurückgebracht?`,
    `Aus welcher Zeit stammen die Quellen für die Auferstehung von Attis und Adonis – vor oder nach dem Neuen Testament?`,
    `Hast du J. Z. Smiths Artikel von 1987 gelesen – und warum hat die Religionswissenschaft Frazer weitgehend aufgegeben?`,
    `Welcher dieser Götter wird von einem bekannten römischen Statthalter hingerichtet und von namentlich genannten Zeugen gesehen?`,
  ],
  avoid: [
    `Behaupten, Mettinger stehe auf der Seite der Mythizisten – er verteidigt die Kategorie, verneint aber die Ableitung Jesu.`,
    `Inanna und Baal verschweigen, wenn sie genannt werden – lieber ruhig die Texte erklären.`,
    `Pauschal behaupten, es habe „keine einzige" Wiederkehr-Erzählung gegeben – Baal und Dumuzi kehren in gewissem Sinn zurück.`,
  ],
  concessions: [
    `Einige altorientalische Götter (Dumuzi, Baal, Melqart) sterben und kehren nach Mettinger in gewisser Weise zurück.`,
    `Der Inanna-Mythos kennt eine Wiederbelebung nach drei Tagen und drei Nächten.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Tryggve N. D. Mettinger', work: 'The Riddle of Resurrection', year: '2001', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'N. T. Wright', work: 'The Resurrection of the Son of God', year: '2003', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Jonathan Z. Smith', work: 'Dying and Rising Gods (Encyclopedia of Religion)', year: '1987', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Osiris', 'Tammuz', 'Attis', 'Inanna', 'Auferstehung', 'Frazer'],
  related: ['antike-parallelen/jesus-kopie-horus-mithras', 'auferstehung/legende-entwickelte-sich', 'antike-parallelen/christliche-feste-heidnisch'],
};

export default claim;
