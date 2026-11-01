import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'scheintod',
  title: `„Jesus war nur scheintot – er überlebte die Kreuzigung und erholte sich im Grab."`,
  proponents: [
    { name: 'Heinrich Eberhard Gottlob Paulus', role: 'Rationalistischer Theologe, Heidelberg', work: 'Das Leben Jesu als Grundlage einer reinen Geschichte des Urchristentums (1828)' },
    { name: 'Mirza Ghulam Ahmad', role: 'Gründer der Ahmadiyya-Bewegung', work: 'Jesus in India (urdu „Masih Hindustan Mein", verfasst 1899)' },
    { name: 'Ahmed Deedat', role: 'Muslimischer Apologet, Südafrika', work: 'Crucifixion or Cruci-fiction? (1984)' },
    { name: 'Holger Kersten', role: 'Populärautor', work: 'Jesus lebte in Indien (1983)' },
  ],
  steelman: `Jesus hing nur etwa sechs Stunden am Kreuz – andere Gekreuzigte überlebten tagelang. Selbst Pilatus „verwunderte sich, daß er schon tot war" (Mk 15,44). Die Soldaten brachen ihm die Beine nicht; als ein Soldat in seine Seite stach, flossen Blut und Wasser – Tote bluten nicht. Josef und Nikodemus, zwei heimliche Anhänger, nahmen ihn eilig ab und brachten hundert Pfund Myrrhe und Aloe – bekannte Heilmittel. Josephus berichtet selbst von einem Gekreuzigten, der nach dem Abnehmen überlebte. Danach zeigt Jesus seine Wunden, isst Fisch, um zu beweisen, dass er kein Geist ist (Lk 24,39–43) – genau das tut ein Lebender, kein Auferstandener. Er erholte sich, trat ein paarmal auf und verschwand – nach der Ahmadiyya-Lehre nach Kaschmir, wo er hochbetagt starb. – So etwa Ahmed Deedat und die Ahmadiyya.`,
  biblical: {
    summary: `Die Evangelien betonen den **wirklichen Tod** Jesu mit auffälliger Sorgfalt: Geißelung (Mk 15,15), Unfähigkeit, das Kreuz zu tragen (Mk 15,21), Tod nach lautem Schrei (Mk 15,37), amtliche Bestätigung durch den Hauptmann gegenüber Pilatus (Mk 15,44–45), Lanzenstich in die Seite (Joh 19,34) mit ausdrücklichem Augenzeugenvermerk (Joh 19,35), Einwickeln in Leinen mit Gewürzen „wie die Juden pflegen zu begraben" (Joh 19,40), verschlossenes Grab.`,
    detail: `**Johannes 19,33–35** ist bemerkenswert: Der Evangelist unterbricht die Erzählung, um zu versichern: „Und der das gesehen hat, der hat es bezeugt, und sein Zeugnis ist wahr." Ihm liegt gerade daran, dass Jesus wirklich tot war – vermutlich auch gegen frühe Doketen, die Jesu Tod für Schein hielten.

**Die Gewürze (Joh 19,39–40):** Myrrhe und Aloe wurden zur Bestattung verwendet; die große Menge entspricht einer königlichen Bestattung, nicht einer Krankenpflege. Der Text sagt ausdrücklich, dass es um ein Begräbnis „nach jüdischer Sitte" ging.

**Lk 24,39–43** soll beweisen, dass der Auferstandene **kein Geist** ist – derselbe Bericht zeigt ihn aber plötzlich erscheinend und verschwindend (Lk 24,31.36), was zu einem schwerverletzten Überlebenden nicht passt.`,
    sources: [
      { kind: 'bibel', work: 'Johannes', ref: '19,33–35', quote: `Als sie aber zu Jesus kamen, da sie sahen, daß er schon gestorben war, brachen sie ihm die Beine nicht; sondern der Kriegsknechte einer öffnete seine Seite mit einem Speer, und alsbald ging Blut und Wasser heraus. Und der das gesehen hat, der hat es bezeugt, und sein Zeugnis ist wahr.`, translation: 'Luther 1912 (gekürzt)', status: 'paraphrase' },
      { kind: 'bibel', work: 'Markus', ref: '15,44–45', quote: `Pilatus aber verwunderte sich, daß er schon tot war, und rief den Hauptmann und fragte ihn, ob er längst gestorben wäre. Und als er's erkundet von dem Hauptmann, gab er Joseph den Leichnam.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '19,39–40', quote: `Es kam aber auch Nikodemus … und brachte Myrrhe und Aloe untereinander, bei hundert Pfunden. Da nahmen sie den Leichnam Jesu und banden ihn in leinene Tücher mit den Spezereien, wie die Juden pflegen zu begraben.`, translation: 'Luther 1912 (gekürzt)', status: 'paraphrase' },
    ],
  },
  church: {
    summary: `Der wirkliche Tod Christi ist für die Kirche heilsentscheidend: Der Logos hat einen sterblichen Leib angenommen, um ihn „für alle dem Tod zu übergeben" und so den Tod von innen her zu überwinden (Athanasius, De Incarnatione 8–9). Ein Scheintod wäre keine Erlösung – der Tod wäre nicht besiegt, sondern umgangen. Die koptische Liturgie bekennt am Karfreitag den Tod des Herrn am Kreuz und seine Grablegung; im Bekenntnis am Ende der Liturgie heißt es, dass die Gottheit sich weder von der Seele noch vom Leib getrennt habe – auch im Tod blieb der Leib mit dem Logos vereint.`,
    sources: [
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'De Incarnatione', ref: '8–9', year: 'ca. 318', quote: `Weil der Logos nicht sterben konnte, nahm er einen Leib an, der sterben konnte, um ihn als Opfer für alle darzubringen und durch seine Gnade den Tod von allen abzuwenden.`, status: 'paraphrase' },
      { kind: 'liturgie', work: 'Koptische Basilius-Liturgie, Bekenntnis vor der Kommunion', quote: `… Seine Gottheit hat sich nicht getrennt von seiner Menschheit, weder einen Augenblick noch einen Wimpernschlag.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Die Scheintodhypothese wird in der heutigen Geschichtswissenschaft praktisch von niemandem vertreten. Der Tod Jesu durch Kreuzigung gilt als eine der sichersten Tatsachen über ihn – bei Christen, Juden, Agnostikern und Atheisten gleichermaßen. Gerd Lüdemann nannte den Tod Jesu als Folge der Kreuzigung „unbestreitbar"; Bart Ehrman zählt die Kreuzigung unter Pilatus zu den sichersten Daten über Jesus. Die Hypothese lebt heute vor allem in der Ahmadiyya-Bewegung, in Teilen der muslimischen Polemik (Deedat) und in esoterischer Literatur fort.`,
    detail: `**Medizinische Fachliteratur – ehrlich:** Der Artikel von Edwards, Gabel und Hosmer, „On the Physical Death of Jesus Christ" (JAMA 1986), wird oft zitiert. Er beschreibt Geißelung, Kreuzigung und Lanzenstich und schließt auf den sicheren Tod. Er wurde aber auch kritisiert, weil manche medizinische Rekonstruktionen spekulativ sind. Eine Übersichtsarbeit (Maslen/Mitchell, Journal of the Royal Society of Medicine, 2006) stellte fest, dass die genaue **Todesursache** bei Kreuzigung umstritten ist (Ersticken, Schock, Herzversagen u. a.). Das betrifft das **Wie**, nicht das **Ob**: Die Römer kreuzigten, um zu töten.

**Klassische Kritik:** David Friedrich Strauss – selbst kein gläubiger Christ – erledigte die Scheintodthese im 19. Jahrhundert mit einem Argument: Ein halbtot aus dem Grab gekrochener, pflegebedürftiger Mensch hätte bei den Jüngern niemals den Eindruck eines Siegers über Tod und Grab, eines „Fürsten des Lebens" hervorgerufen.`,
    sources: [
      { kind: 'wissenschaft', author: 'William D. Edwards / Wesley J. Gabel / Floyd E. Hosmer', work: 'On the Physical Death of Jesus Christ. JAMA 255 (11)', year: '1986', quote: `Die Autoren kommen zu dem Schluss, dass Jesus am Kreuz starb und die Lanzenwunde den Tod bestätigte.`, status: 'paraphrase', note: 'Einzelne medizinische Rekonstruktionen des Artikels wurden später als spekulativ kritisiert.' },
      { kind: 'wissenschaft', author: 'Matthew W. Maslen / Piers D. Mitchell', work: 'Medical theories on the cause of death in crucifixion. Journal of the Royal Society of Medicine 99', year: '2006', quote: `Übersicht über die zahlreichen, teils widersprüchlichen Theorien zur Todesursache bei Kreuzigung.`, status: 'paraphrase' },
      { kind: 'gegner', author: 'David Friedrich Strauss', work: 'Das Leben Jesu für das deutsche Volk bearbeitet', year: '1864', quote: `Ein halbtot aus dem Grab Geschlichener, der schwach und krank umherkroch und ärztlicher Pflege bedurfte, hätte den Jüngern unmöglich den Eindruck vermitteln können, er sei der Sieger über Tod und Grab, der Fürst des Lebens.`, status: 'paraphrase', note: 'Sinngemäß; englisch verbreitet als „A New Life of Jesus" (1865). Wortlaut vor Zitierung im Original prüfen.' },
      { kind: 'gegner', author: 'Gerd Lüdemann', work: 'The Resurrection of Christ: A Historical Inquiry', year: '2004', quote: `Der Tod Jesu als Folge der Kreuzigung ist unbestreitbar.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Die Römer waren Profis im Töten; Jesus wurde vorher gegeißelt, war zu schwach, sein Kreuz zu tragen, und sein Tod wurde vom Hauptmann gegenüber Pilatus amtlich bestätigt – dazu kam der Lanzenstich. Selbst der Kirchenkritiker David Friedrich Strauss sah das Hauptproblem: Ein halbtoter, pflegebedürftiger Mann hätte niemals den Glauben ausgelöst, er habe den Tod besiegt. Deshalb vertritt heute praktisch kein Historiker – auch kein atheistischer – die Scheintodthese.`,
  keyPoints: [
    `**Römische Professionalität:** Geißelung, Kreuzigung, Bestätigung durch den Hauptmann (Mk 15,44–45), Lanzenstich (Joh 19,34). Soldaten haften mit ihrem Leben für Gefangene (vgl. Apg 12,19).`,
    `**Außerchristliche Quellen bestätigen den Tod:** Tacitus („supplicio adfectus"), Josephus, Mara bar Serapion, Talmud („gehängt").`,
    `**Das Strauss-Argument:** Ein schwer verletzter Überlebender hätte keinen Glauben an den Sieg über den Tod erzeugt.`,
    `**Josephus' Überlebender zeigt das Gegenteil:** Von drei frühzeitig abgenommenen und ärztlich versorgten Gekreuzigten starben trotzdem zwei.`,
    `**Konsens:** Der Kreuzestod Jesu gehört zu den sichersten Daten der Geschichte des 1. Jahrhunderts – auch für Ehrman, Lüdemann und Crossan.`,
    `**Theologisch:** Ohne wirklichen Tod gibt es keine Auferstehung – und keine Erlösung (Athanasius).`,
  ],
  voices: [
    {
      person: 'johannes-apostel',
      role: 'als Augenzeuge unter dem Kreuz',
      text: `Der Evangelist Johannes, der nach seinem eigenen Bericht unter dem Kreuz stand (Joh 19,26–27), unterbricht seine Erzählung an der entscheidenden Stelle, um feierlich zu versichern, dass er den Lanzenstich und das Herausfließen von Blut und Wasser selbst gesehen hat. Seine Absicht ist klar: Niemand soll sagen können, Jesus sei nicht wirklich gestorben. Für Johannes hängt daran der ganze Glaube – „auf daß auch ihr glaubet" (Joh 19,35).`,
      sources: [{ kind: 'bibel', work: 'Johannes', ref: '19,35', quote: `Und der das gesehen hat, der hat es bezeugt, und sein Zeugnis ist wahr; und derselbe weiß, daß er die Wahrheit sagt, auf daß auch ihr glaubet.`, translation: 'Luther 1912', status: 'verbatim' }],
    },
    {
      person: 'origenes',
      role: 'als Apologet gegen Kelsos',
      text: `Kelsos verglich Jesu Auferstehung mit Geschichten von Wundermännern wie Zalmoxis oder Pythagoras, die sich angeblich eine Zeit lang verborgen hielten und dann als „Auferstandene" wieder auftauchten. Origenes antwortet: Diese hätten sich heimlich versteckt – Jesus dagegen sei vor aller Augen öffentlich gekreuzigt worden und gestorben, vor Juden und Römern. Der Unterschied zwischen einem inszenierten Verschwinden und einem öffentlichen Tod sei offenkundig.`,
      sources: [{ kind: 'kirchenvater', author: 'Origenes', work: 'Contra Celsum', ref: 'II,55–56', year: 'ca. 248', status: 'paraphrase', quote: `Gegen den Vergleich mit Zalmoxis und Pythagoras: Jesus starb nicht im Verborgenen, sondern öffentlich am Kreuz.` }],
    },
    {
      person: 'lukas',
      role: 'als Historiker (und nach Kol 4,14 Arzt)',
      text: `Lukas, den Paulus „den Arzt" nennt, schildert den Auferstandenen bewusst leiblich – mit Wunden, die man berühren kann, und beim Essen –, aber zugleich als jemanden, der plötzlich erscheint und verschwindet (Lk 24,31.36) und am Ende in den Himmel aufgenommen wird. Wer Lk 24 als Beleg für einen überlebenden Patienten liest, muss die Hälfte des Kapitels übersehen: Der Text will zeigen, dass der Auferstandene **kein Geist**, aber auch **kein Wiederbelebter** in alter Gestalt ist.`,
      sources: [{ kind: 'bibel', work: 'Lukas', ref: '24,31.36', quote: `Da wurden ihre Augen geöffnet, und sie erkannten ihn. Und er verschwand vor ihnen. … Da sie aber davon redeten, trat er selbst, Jesus, mitten unter sie …`, translation: 'Luther 1912 (gekürzt)', status: 'paraphrase' }],
    },
    {
      person: 'habermas',
      role: 'als Historiker der Auferstehung',
      text: `Habermas zählt den Kreuzestod Jesu zu den „Minimal Facts", die nahezu alle Forscher anerkennen. Er weist darauf hin, dass die Scheintodthese seit Strauss' Kritik im 19. Jahrhundert in der Wissenschaft als erledigt gilt und dass selbst skeptische Forscher sie nicht mehr ernsthaft vertreten. Ihre Wiederbelebung in populärer und religiöser Polemik beruht nicht auf neuen Quellen, sondern auf Umdeutungen der Evangelientexte.`,
      sources: [{ kind: 'fachliteratur', author: 'Gary R. Habermas / Michael R. Licona', work: 'The Case for the Resurrection of Jesus', year: '2004', status: 'paraphrase', quote: `Behandlung und Zurückweisung der Scheintodthese.` }],
    },
  ],
  dialog: [
    {
      id: 'nur-sechs-stunden',
      objection: `Jesus hing nur sechs Stunden am Kreuz. Andere Gekreuzigte überlebten zwei, drei Tage. Selbst Pilatus wunderte sich, dass er schon tot war (Mk 15,44). Das schreit doch nach einem Scheintod.`,
      objectionBy: 'Ahmed Deedat',
      answer: `Jesus war vor der Kreuzigung von Römern gegeißelt worden – eine Strafe, die mit bleibeschwerten Riemen das Fleisch aufriss und allein schon tödlich sein konnte. Er war so geschwächt, dass er sein Kreuz nicht tragen konnte (Mk 15,21). Ein schneller Tod ist bei diesem Zustand nicht verdächtig, sondern zu erwarten. Und gerade weil Pilatus sich wunderte, ließ er den Tod vom Hauptmann bestätigen, bevor er den Leichnam freigab – das ist das Gegenteil von Nachlässigkeit.`,
      sources: [
        { kind: 'bibel', work: 'Markus', ref: '15,15.21', quote: `… und geißelte Jesum und überantwortete ihn, daß er gekreuzigt würde. … Und zwangen einen, der vorüberging, mit Namen Simon von Kyrene … daß er ihm das Kreuz trüge.`, translation: 'Luther 1912 (gekürzt)', status: 'paraphrase' },
      ],
      questionsBack: [
        `Warum ließ Pilatus den Tod bestätigen, wenn er Zweifel hatte – und was hätte ein Hauptmann riskiert, der einen Lebenden als tot meldet?`,
      ],
      followUps: [
        {
          id: 'beine-nicht-gebrochen',
          objection: `Die Soldaten brachen ihm die Beine nicht – den anderen beiden schon. Vielleicht war er nur bewusstlos, und die Soldaten haben sich getäuscht.`,
          objectionBy: 'Ahmed Deedat / Ahmadiyya-Literatur',
          answer: `Die Soldaten brachen die Beine nicht, **weil** sie ihn für tot hielten – und um sicherzugehen, stach einer mit dem Speer in seine Seite (Joh 19,33–34). Römische Soldaten hafteten mit ihrem eigenen Leben für Gefangene; als Petrus aus dem Gefängnis entkam, ließ Herodes die Wächter hinrichten (Apg 12,19). Dass ausgerechnet ein Hinrichtungskommando einen Bewusstlosen nicht von einem Toten unterscheiden konnte und dann noch die Lanze verfehlte, ist kaum ernsthaft vorstellbar.`,
          sources: [
            { kind: 'bibel', work: 'Apostelgeschichte', ref: '12,19', quote: `Herodes aber, da er ihn forderte und nicht fand, ließ er die Hüter verhören und hieß sie wegführen …`, translation: 'Luther 1912 (gekürzt)', status: 'paraphrase' },
          ],
          followUps: [
            {
              id: 'blut-und-wasser',
              objection: `Aus der Wunde flossen Blut und Wasser. Tote bluten nicht – das Herz muss noch geschlagen haben!`,
              objectionBy: 'Ahmed Deedat',
              answer: `Das ist medizinisch nicht richtig. Auch kurz nach dem Tod kann Blut aus großen Gefäßen oder dem Herzen passiv austreten, vor allem bei einem Stich von unten nach oben in den Brustkorb. Die „wässrige" Flüssigkeit wird von Medizinern meist als Erguss im Herzbeutel oder Brustraum gedeutet, wie er nach schwerer Misshandlung und Kreislaufversagen auftreten kann. Johannes erwähnt das Detail übrigens gerade als **Beweis des Todes** – mit feierlichem Augenzeugenvermerk.`,
              detail: `Ehrlich: Die genaue medizinische Deutung von „Blut und Wasser" ist unter Ärzten nicht einheitlich. Für die Frage nach Leben oder Tod ist entscheidend, dass ein Lanzenstich in den Brustkorb – mit dem Ziel, den Tod sicherzustellen – bei einem lebenden, ohnehin schwerst verletzten Menschen tödlich gewesen wäre.`,
              followUps: [
                {
                  id: 'blut-wasser-symbolik',
                  objection: `„Blut und Wasser" ist johanneische Theologie, kein Obduktionsbericht – Symbole für Taufe und Eucharistie oder für das lebendige Wasser aus Joh 7,38. Johannes ist das späteste und theologischste Evangelium. Darauf kannst du keine Todesfeststellung bauen.`,
                  objectionBy: 'Bart Ehrman / Kipp Davis',
                  answer: `Dass Johannes dem Detail einen tiefen Sinn gibt, bestreite ich nicht – die Kirchenväter haben darin selbst Taufe und Eucharistie gesehen. Aber Symbolik schließt ein Ereignis nicht aus: Johannes erzählt es gerade mit Augenzeugenvermerk, weil er gegen Leute schreibt, die Jesu wirklichen Tod bestritten. Vor allem: Mein Argument hängt nicht an Johannes. Den Tod Jesu bezeugen Markus, Paulus, Tacitus, Josephus und die jüdische Gegenüberlieferung – keine einzige antike Quelle, auch keine feindliche, spricht von einem Überleben.`,
                  detail: `**Väterliche Deutung:** Johannes Chrysostomus sieht in Blut und Wasser die Quellen der Mysterien – Taufe und Eucharistie –, aus denen die Kirche hervorgeht, wie Eva aus der Seite Adams. Diese Deutung setzt den wirklichen Lanzenstich voraus; sie ersetzt ihn nicht.

**Antidoketische Spitze:** Der 1. Johannesbrief betont, Jesus Christus sei gekommen „durch Wasser und Blut" (1 Joh 5,6) – offenbar gegen Lehrer, die die Wirklichkeit seines Leidens leugneten. Ignatius von Antiochien (um 110) bekämpft dieselbe Gruppe: Wer sage, Christus habe nur zum Schein gelitten, sei selbst nur Schein. Die frühe Kirche hatte also allen Grund, den **wirklichen** Tod festzuhalten – und tat es mit Berufung auf Zeugen.`,
                  sources: [
                    { kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Taufkatechesen', ref: '3,16–19', year: 'ca. 390', quote: `Aus der Seite Christi flossen Wasser und Blut, die Sinnbilder von Taufe und Mysterien; aus ihnen ist die Kirche gebildet, wie Eva aus der Seite Adams.`, status: 'paraphrase' },
                    { kind: 'kirchenvater', author: 'Ignatius von Antiochien', work: 'Brief an die Trallianer', ref: '9–10', year: 'ca. 110', quote: `Christus wurde wahrhaft verfolgt unter Pontius Pilatus, wahrhaft gekreuzigt und starb; wer sagt, er habe nur zum Schein gelitten, ist selbst nur Schein.`, status: 'paraphrase' },
                    { kind: 'bibel', work: '1. Johannes', ref: '5,6', quote: `Dieser ist's, der da kommt mit Wasser und Blut, Jesus Christus; nicht mit Wasser allein, sondern mit Wasser und Blut.`, translation: 'Luther 1912', status: 'paraphrase' },
                  ],
                  questionsBack: [
                    `Nenne eine einzige antike Quelle – christlich, jüdisch oder heidnisch –, die behauptet, Jesus habe die Kreuzigung überlebt.`,
                    `Warum sollte Johannes ausgerechnet ein Detail erfinden, das seine Gegner, die Doketen, widerlegen soll – und es dann unter Eid stellen?`,
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'josephus-ueberlebender',
      objection: `Josephus selbst berichtet, dass ein Gekreuzigter überlebte, nachdem man ihn abgenommen hatte (Vita 420–421). Das zeigt doch, dass es möglich war!`,
      objectionBy: 'Ahmadiyya-Literatur / Holger Kersten',
      answer: `Lies den ganzen Bericht: Josephus sah drei Bekannte am Kreuz, bat Titus um Gnade, und sie wurden **auf Befehl des Feldherrn** vorzeitig abgenommen und erhielten die **beste ärztliche Behandlung**. Trotzdem starben zwei von dreien. Jesus dagegen wurde nicht vorzeitig begnadigt, sondern hing bis zum festgestellten Tod, erhielt einen Lanzenstich, wurde nicht ärztlich versorgt, sondern in Tücher gewickelt und in ein verschlossenes Felsengrab gelegt. Der Josephus-Bericht zeigt, wie tödlich Kreuzigung war.`,
      sources: [
        { kind: 'sonstiges', author: 'Flavius Josephus', work: 'Vita (Selbstbiografie)', ref: '420–421', year: 'ca. 95', quote: `Josephus erwirkte bei Titus, dass drei gekreuzigte Bekannte abgenommen und sorgfältig ärztlich behandelt wurden; zwei starben dennoch, einer überlebte.`, status: 'paraphrase' },
      ],
      followUps: [
        {
          id: 'myrrhe-aloe-medizin',
          objection: `Aber Nikodemus brachte hundert Pfund Myrrhe und Aloe – das sind Heilmittel! Josef und Nikodemus haben ihn im Grab gepflegt, bis er sich erholte.`,
          objectionBy: 'Ahmed Deedat / Holger Kersten',
          answer: `Johannes sagt ausdrücklich, wozu die Gewürze dienten: Sie banden den Leichnam damit in Tücher, „wie die Juden pflegen zu begraben" (Joh 19,40). Die riesige Menge ist ein Zeichen königlicher Ehre bei einer Bestattung, keine Krankenpflege. Und selbst wenn man das ignoriert: Ein Mensch, der nach Geißelung, Kreuzigung und Lanzenstich eingewickelt in einem kalten Felsengrab liegt, braucht wochenlange Pflege – und erscheint nicht am dritten Tag als strahlender Sieger, der zu Fuß nach Emmaus geht.`,
          questionsBack: [
            `Wenn Josef und Nikodemus ihn gepflegt haben – warum haben sie den Aposteln nicht gesagt, dass er nur überlebt hat, statt sie für eine „Auferstehung" sterben zu lassen?`,
          ],
        },
      ],
    },
    {
      id: 'wunden-fisch-lebender',
      objection: `Nach dem „Ostern" zeigt Jesus seine Wunden und isst gebratenen Fisch, um zu beweisen, dass er kein Geist ist (Lk 24,39–43). Genau das tut ein Lebender. Er war nicht auferstanden, sondern hatte überlebt – und versteckte sich deshalb vor den Juden.`,
      objectionBy: 'Ahmed Deedat',
      answer: `Derselbe Bericht zeigt Jesus, wie er bei verschlossenen Türen plötzlich mitten unter den Jüngern steht (Joh 20,19), beim Brotbrechen erkannt wird und verschwindet (Lk 24,31) und schließlich in den Himmel aufgenommen wird. Die Wunden zeigen, dass der Auferstandene derselbe ist wie der Gekreuzigte – nicht, dass er ein Patient ist. Und wie schon der Kirchenkritiker Strauss sah: Ein mühsam überlebender, verwundeter Mann hätte den Jüngern nie den Glauben gegeben, er habe den Tod besiegt.`,
      sources: [
        { kind: 'bibel', work: 'Johannes', ref: '20,19', quote: `Am Abend aber desselben ersten Tages der Woche, da die Jünger versammelt und die Türen verschlossen waren aus Furcht vor den Juden, kam Jesus und trat mitten ein und spricht zu ihnen: Friede sei mit euch!`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'jesus-nach-kaschmir',
          objection: `Jesus floh nach Indien, lebte in Kaschmir und starb dort hochbetagt. Sein Grab, der Roza Bal in Srinagar, wird bis heute verehrt.`,
          objectionBy: 'Mirza Ghulam Ahmad / Holger Kersten',
          answer: `Für diese Reise gibt es keine einzige Quelle aus dem 1. oder 2. Jahrhundert. Der Roza Bal wurde erst im späten 19. Jahrhundert von Mirza Ghulam Ahmad mit Jesus identifiziert; er gilt als Grab eines „Yuz Asaf", eines Namens, der vermutlich auf die mittelalterliche Barlaam-und-Josaphat-Legende (letztlich auf den Bodhisattva) zurückgeht. Die angeblichen tibetischen Jesus-Handschriften Nikolai Notowitschs (1894) wurden schon 1895/96 von Max Müller und J. Archibald Douglas als Erfindung entlarvt.`,
          sources: [
            { kind: 'fachliteratur', author: 'J. Archibald Douglas', work: `The Chief Lama of Himis on the Alleged „Unknown Life of Christ". The Nineteenth Century`, year: '1896', quote: `Bericht über den Besuch im Kloster Hemis, wo man von Notowitschs angeblichem Fund nichts wusste.`, status: 'paraphrase' },
          ],
        },
        {
          id: 'koran-schien-ihnen-so',
          objection: `Auch der Koran sagt: „Sie haben ihn nicht getötet und nicht gekreuzigt, sondern es erschien ihnen nur so" (4:157). Der Scheintod passt genau dazu.`,
          objectionBy: 'Ahmadiyya-Apologetik',
          answer: `Die Mehrheit der muslimischen Gelehrten liest Sure 4:157 als Ersatztheorie (ein anderer wurde an seiner Stelle gekreuzigt) – nicht als Scheintod. Die Ahmadiyya-Deutung widerspricht also selbst der islamischen Hauptlinie. Beide Deutungen haben dasselbe Problem: Sie stammen aus dem 7. Jahrhundert bzw. dem 19. Jahrhundert und haben keinerlei Rückhalt in den Quellen des 1. Jahrhunderts – christlichen, jüdischen oder römischen –, die übereinstimmend den Tod Jesu bezeugen.`,
          sources: [
            { kind: 'koran', work: 'Sure 4 (an-Nisa)', ref: '4:157', quote: `… und sie haben ihn nicht getötet und sie haben ihn nicht gekreuzigt, sondern es erschien ihnen (jemand) ähnlich …`, original: `wa-mā qatalūhu wa-mā ṣalabūhu wa-lākin šubbiha lahum`, translation: 'Bubenheim/Elyas (sinngemäß)', status: 'paraphrase', url: 'https://quran.com/4/157' },
          ],
        },
      ],
    },
    {
      id: 'medizin-unsicher',
      objection: `Die medizinischen Rekonstruktionen – etwa der berühmte JAMA-Artikel von 1986 – sind spekulativ. Ärzte sind sich nicht einmal einig, woran Gekreuzigte überhaupt starben. Wie kannst du dir dann so sicher sein?`,
      objectionBy: 'Kipp Davis / medizinisch informierte Skeptiker',
      answer: `Einverstanden: Die genaue **Todesursache** bei Kreuzigung ist umstritten – Ersticken, Schock, Herzversagen, eine Kombination. Manche Details im JAMA-Artikel sind spekulativ. Aber die Frage ist nicht, **woran** Jesus starb, sondern **ob**. Und darin stimmen alle antiken Quellen überein – christliche, jüdische und römische –, und die römische Hinrichtung war darauf angelegt, zu töten. Deshalb vertritt heute kein namhafter Historiker, gleich welcher Weltanschauung, einen Scheintod.`,
      sources: [
        { kind: 'gegner', author: 'Bart D. Ehrman', work: 'The Historical Jesus (Vorlesungsreihe, The Teaching Company)', year: '2000', quote: `Die Kreuzigung Jesu auf Befehl des Pilatus gehört zu den sichersten Tatsachen über ihn.`, status: 'paraphrase' },
        { kind: 'gegner', author: 'John Dominic Crossan', work: 'Jesus: A Revolutionary Biography', ref: 'S. 145 (HarperSanFrancisco)', year: '1994', quote: `Dass er gekreuzigt wurde, ist so sicher, wie etwas Historisches überhaupt nur sein kann, denn sowohl Josephus als auch Tacitus stimmen zumindest in dieser grundlegenden Tatsache mit den christlichen Berichten überein.`, original: `That he was crucified is as sure as anything historical can ever be, since both Josephus and Tacitus … agree with the Christian accounts on at least that basic fact.`, translation: 'eigene Übersetzung', status: 'verbatim', note: 'Wortlaut und Seitenangabe (S. 145) übereinstimmend in mehreren Sekundärquellen belegt (WebSearch-Prüfung 2026); Crossan bestreitet zugleich ein ehrenvolles Begräbnis.' },
      ],
      followUps: [
        {
          id: 'tod-nur-christliche-quelle',
          objection: `Euer „Konsens" beruht am Ende nur auf den Evangelien. Tacitus und Josephus schreiben Generationen später und geben bloß wieder, was Christen über ihren Gründer erzählten. Unabhängige Bestätigung ist das nicht.`,
          objectionBy: 'Richard Carrier',
          answer: `Selbst wenn Tacitus seine Information letztlich von Christen hätte: Er übernimmt sie als Senator, der Christen verachtet, und nennt nüchtern Statthalter und Kaiser. Aber das Hauptargument ist ein anderes: Die Kreuzigung ist das, was **niemand erfindet**. Ein gekreuzigter Messias war für Juden ein Fluch (Dtn 21,23; Gal 3,13) und für Griechen eine Torheit (1 Kor 1,23). Paulus schreibt darüber schon um 50, und die jüdische Gegenüberlieferung bestreitet Jesu Hinrichtung nie – sie rechtfertigt sie.`,
          detail: `**Die Quellenlage:**
- **Paulus** (Briefe ab ca. 50): „Christus, den Gekreuzigten" (1 Kor 2,2; Gal 3,1) – zwei Jahrzehnte nach dem Ereignis, im Kontakt mit Petrus und Jakobus.
- **Tacitus** (Annalen 15,44, um 116): „Christus … wurde unter der Herrschaft des Tiberius vom Prokurator Pontius Pilatus hingerichtet."
- **Josephus** (Ant. 18,63–64): Auch nach Abzug christlicher Zusätze bleibt nach der Mehrheitsmeinung ein Kern, in dem Pilatus Jesus zum Kreuz verurteilt.
- **Babylonischer Talmud** (Sanhedrin 43a): Die jüdische Polemik berichtet, man habe „Jeschu" am Vorabend des Pessach „gehängt" – sie streitet über die Schuld, nicht über den Tod.

**Kriterium der Peinlichkeit:** Eine Bewegung, die ihren Messias als Sieger verkünden will, erfindet nicht dessen schändlichsten Tod. Dass die Christen den Gekreuzigten trotzdem predigten, zeigt, dass sie an dieser Tatsache nicht vorbeikamen.`,
          voices: [
            {
              person: 'martin-hengel',
              role: 'als Historiker der antiken Kreuzigungsstrafe',
              text: `Hengel hat gezeigt, wie tief die Kreuzigung in der antiken Welt verachtet war: die Strafe für Sklaven und Aufrührer, so schändlich, dass gebildete Römer kaum darüber schrieben. Eine Religion, die einen Gekreuzigten als Sohn Gottes verkündete, musste in den Augen der Zeitgenossen als Wahnsinn erscheinen. Gerade das macht eine Erfindung dieses Todes historisch unglaubwürdig.`,
              sources: [{ kind: 'fachliteratur', author: 'Martin Hengel', work: 'Crucifixion in the Ancient World and the Folly of the Message of the Cross', year: '1977', status: 'paraphrase', quote: `Die Kreuzigung galt als schändlichste aller Strafen; die Botschaft vom Gekreuzigten war für antike Hörer anstößig.` }],
            },
            {
              person: 'paulus',
              role: 'als frühester schriftlicher Zeuge',
              text: `Paulus nennt die Botschaft vom Kreuz offen ein „Ärgernis" und eine „Torheit" – er weiß, dass sie für Juden und Griechen gleichermaßen anstößig ist. Trotzdem macht er sie zum Zentrum seiner Verkündigung, nicht weil sie werbewirksam war, sondern weil sie geschehen war.`,
              sources: [{ kind: 'bibel', work: '1. Korinther', ref: '1,23', quote: `wir aber predigen den gekreuzigten Christus, den Juden ein Ärgernis und den Griechen eine Torheit;`, translation: 'Luther 1912', status: 'verbatim' }],
            },
          ],
          sources: [
            { kind: 'sonstiges', author: 'Tacitus', work: 'Annalen', ref: '15,44', year: 'ca. 116', quote: `Der Name stammt von Christus, der unter der Herrschaft des Tiberius vom Prokurator Pontius Pilatus hingerichtet worden war.`, original: `auctor nominis eius Christus Tiberio imperitante per procuratorem Pontium Pilatum supplicio adfectus erat`, translation: 'eigene Übersetzung', status: 'verbatim' },
            { kind: 'juedisch', work: 'Babylonischer Talmud, Sanhedrin', ref: '43a', quote: `Am Vorabend des Pessach hängte man Jeschu.`, status: 'paraphrase', note: 'Spätere rabbinische Polemik; Datierung der Überlieferung umstritten, sie bestreitet die Hinrichtung aber nicht.' },
            { kind: 'bibel', work: 'Galater', ref: '3,13', quote: `Christus aber hat uns erlöst von dem Fluch des Gesetzes, da er ward ein Fluch für uns (denn es steht geschrieben: „Verflucht ist jedermann, der am Holz hängt").`, translation: 'Luther 1912', status: 'paraphrase' },
          ],
          questionsBack: [
            `Warum hätten die ersten Christen ausgerechnet die schändlichste Todesart der Antike für ihren Messias erfunden?`,
            `Warum behauptet keine jüdische Gegenschrift, Jesus habe überlebt – das wäre doch die einfachste Widerlegung gewesen?`,
          ],
          followUps: [
            {
              id: 'kreuz-aus-schrift',
              objection: `Die Kreuzigung war gar nicht peinlich, sondern gewollt: Die Christen haben ihren leidenden Messias aus Jesaja 53 und Psalm 22 herausgelesen. Das Drehbuch stand in der Schrift – die „Geschichte" ist Midrasch.`,
              objectionBy: 'Richard Carrier / Robert M. Price',
              answer: `Dann frage dich, warum kein einziger jüdischer Text vor Jesus aus Jesaja 53 einen **gekreuzigten** Messias ableitet – und warum Paulus die Botschaft trotzdem ein „Ärgernis" nennt. Die Christen fanden ihren Gekreuzigten **nachträglich** in der Schrift, weil sie mit seinem Tod fertig werden mussten (Lk 24,25–27). Justins jüdischer Gesprächspartner Tryphon gesteht um 155 sogar zu, dass der Messias leiden müsse – aber dass er den im Gesetz verfluchten Kreuzestod sterbe, will er sich erst beweisen lassen. Genau diese Hürde hätte niemand freiwillig aufgebaut.`,
              detail: `**Psalm 22 und Jesaja 53 vor Christus:** Beide Texte wurden im Judentum der Zeit nicht als Ankündigung eines gekreuzigten Messias gelesen. Der Gottesknecht von Jes 53 wurde häufig auf Israel oder auf Gerechte gedeutet; der Targum zu Jesaja wendet die Leidensaussagen sogar vom Messias weg. Erst die Christen verbanden Psalm 22 und Jesaja 53 mit dem Kreuz.

**Die Logik der Midrasch-These:** Wer die Kreuzigung aus der Schrift ableiten will, muss erklären, warum die Evangelien zugleich so viele „unpassende" Details bringen (ein Ratsherr als Bestatter, Frauen als Zeugen, Jünger auf der Flucht) und warum die Christen ihre Schriftbeweise **mühsam** und **nachträglich** führen. Midrasch erklärt die Deutung, nicht das Ereignis.`,
              voices: [
                {
                  person: 'justin',
                  role: 'als Zeuge des jüdisch-christlichen Gesprächs',
                  text: `In Justins Dialog räumt Tryphon ein, dass die Schriften einen leidenden Messias kennen. Sein eigentlicher Einwand ist der Kreuzestod, den das Gesetz verflucht: Ob der Messias so schändlich sterben müsse, solle Justin ihm erst zeigen. Justin muss sich die Antwort aus der Schrift mühsam erarbeiten – ein Hinweis darauf, dass die Kreuzigung eine vorgegebene Tatsache war, die man deuten musste, nicht ein Wunschmotiv.`,
                  sources: [{ kind: 'kirchenvater', author: 'Justin der Märtyrer', work: 'Dialog mit dem Juden Tryphon', ref: '89–90', year: 'ca. 155–160', status: 'paraphrase', quote: `Tryphon gesteht einen leidenden Messias zu, verlangt aber den Schriftbeweis für einen im Gesetz verfluchten Kreuzestod.` }],
                },
              ],
              sources: [
                { kind: 'bibel', work: 'Lukas', ref: '24,25–27', quote: `O ihr Toren und träges Herzens, zu glauben all dem, was die Propheten geredet haben! Mußte nicht Christus solches leiden und zu seiner Herrlichkeit eingehen? Und fing an von Mose und allen Propheten und legte ihnen alle Schriften aus, die von ihm gesagt waren.`, translation: 'Luther 1912', status: 'paraphrase' },
                { kind: 'gegner', author: 'Richard Carrier', work: 'On the Historicity of Jesus', year: '2014', quote: `Carrier hält es für möglich, dass die frühesten Christen ihren gekreuzigten Messias aus der Schrift und aus Offenbarungen gewannen.`, status: 'paraphrase' },
              ],
              questionsBack: [
                `Welcher vorchristliche jüdische Text erwartet einen Messias, der am Kreuz stirbt?`,
                `Wenn das Drehbuch in der Schrift stand – warum waren die Jünger nach Karfreitag so verzweifelt (Lk 24,21)?`,
              ],
              followUps: [
                {
                  id: 'qumran-durchbohrter-messias',
                  objection: `Ganz so fremd war das nicht. In Qumran gibt es Texte über einen leidenden oder gar „durchbohrten" Messias – 4Q285 wurde so gelesen, 4Q541 spricht von einer leidenden Heilsgestalt, und Israel Knohl hat einen „Messias vor Jesus" rekonstruiert, der getötet und erhöht wird. Die Idee lag in der Luft.`,
                  objectionBy: 'Robert Eisenman / Israel Knohl',
                  answer: `Gerade Qumran-Spezialisten haben die Lesung vom „durchbohrten Messias" in 4Q285 zurückgewiesen: Der Text sagt nach heute überwiegender Deutung, dass der davidische „Spross" den Anführer der Feinde **tötet**, nicht dass er getötet wird. 4Q541 beschreibt eine priesterliche Gestalt, die Anfeindung erleidet – von Kreuzigung ist keine Rede. Selbst wenn es vereinzelt Erwartungen eines leidenden Gerechten gab: Ein Messias, der am Holz hängt und damit unter den Fluch des Gesetzes fällt, war das Anstößigste, was man denken konnte. Das zeigen Paulus und Tryphon übereinstimmend.`,
                  detail: `**4Q285 (Fragment 5/7):** 1991 von Robert Eisenman als „durchbohrter Messias" popularisiert. Geza Vermes und die Mehrheit der Fachleute lesen die Verbform aktiv: Der „Fürst der Gemeinde" bzw. „Spross Davids" bringt den Anführer der Kittim zu Tode – ein **siegreicher** Messias im Endkampf, kein leidender.

**4Q541 („Aaron A"):** Eine endzeitliche priesterliche Gestalt wird angefeindet und verleumdet; manche Forscher sehen Anklänge an den Gottesknecht. Ein Kreuzestod oder eine stellvertretende Hinrichtung wird nicht beschrieben.

**Knohl:** Israel Knohls Rekonstruktion eines getöteten und erhöhten „Messias vor Jesus" (The Messiah before Jesus, 2000) stützt sich vor allem auf den sogenannten Selbstverherrlichungshymnus (4Q491c) und ist stark hypothetisch; sie hat wenig Zustimmung gefunden – und auch sie kennt keinen gekreuzigten Messias.

**Ehrlich:** Das Judentum des Zweiten Tempels kannte die Vorstellung leidender Gerechter und Märtyrer (2 Makk 7; Weish 2). Neu und skandalös war die Behauptung, der **Messias selbst** sei gekreuzigt worden und gerade darin habe Gott gehandelt.`,
                  sources: [
                    { kind: 'juedisch', work: 'Qumran, 4Q285 (Sefer ha-Milhamah)', ref: 'Fragment 5 (7)', quote: `Der „Spross Davids" bringt im Endkampf den Anführer der Kittim zu Tode.`, status: 'paraphrase', note: 'Die Lesung „durchbohrter Messias" (Eisenman 1991) wird von der Mehrheit der Fachleute abgelehnt.' },
                    { kind: 'fachliteratur', author: 'Geza Vermes', work: 'The Oxford Forum for Qumran Research Seminar on the Rule of War from Cave 4 (4Q285)', ref: 'Journal of Jewish Studies 43', year: '1992', quote: `Vermes verteidigt die aktive Lesung: Der messianische Fürst tötet den Feind; ein „getöteter Messias" ist dem Text nicht zu entnehmen.`, status: 'paraphrase' },
                    { kind: 'bibel', work: '5. Mose (Deuteronomium)', ref: '21,23', quote: `… denn ein Gehenkter ist verflucht bei Gott.`, translation: 'Luther 1912 (gekürzt)', status: 'paraphrase' },
                  ],
                  questionsBack: [
                    `Zeig mir den Qumrantext, in dem der Messias gekreuzigt wird – nicht nur leidet oder angefeindet wird.`,
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'passahkomplott',
      objection: `Vielleicht war es kein Zufall, sondern ein Plan. Hugh Schonfield hat in „The Passover Plot" gezeigt, wie Jesus seinen eigenen Tod inszenieren konnte: mit Josef von Arimathäa als Verbündetem, einem frühen Abnehmen vom Kreuz und einem Betäubungstrank am Schwamm.`,
      objectionBy: 'Hugh J. Schonfield / Michael Baigent',
      answer: `Selbst Schonfield lässt seinen Plan scheitern: In seinem Buch stirbt Jesus doch – an der Lanzenwunde –, und die „Erscheinungen" führt er auf eine Verwechslung zurück. Das zeigt das Grundproblem jeder Komplott-These: Sie braucht Mitwisser, die anschließend für eine Botschaft leiden, von der sie wissen, dass sie inszeniert war. Und sie braucht ein römisches Hinrichtungskommando, das sich ausgerechnet bei diesem Häftling täuschen lässt. Keine einzige antike Quelle stützt das Szenario; es ist eine Romanidee des 20. Jahrhunderts.`,
      detail: `**Schonfields These (1965):** Jesus habe sich bewusst als leidender Messias verstanden und mit einem kleinen Kreis von Vertrauten (nicht den Zwölf) einen Scheintod geplant. Der Plan sei durch den unvorhergesehenen Lanzenstich vereitelt worden; Jesus sei kurz danach gestorben, und ein Unbekannter sei später irrtümlich für ihn gehalten worden.

**Baigent (Holy Blood, Holy Grail 1982; The Jesus Papers 2006)** variiert die Idee mit Pilatus als Mitverschworenem – ohne Quellenbelege. Diese Bücher gelten in der Fachwelt als populäre Spekulation.

**Was die Komplott-These erklären müsste:** die Bereitschaft der Zwölf zum Leiden, die Bekehrung des Gegners Paulus, das Fehlen jeder späteren „Enthüllung" durch einen Mitwisser und die Tatsache, dass kein antiker Gegner – weder Kelsos noch die rabbinische Polemik – diese naheliegende Erklärung je anbot.`,
      sources: [
        { kind: 'gegner', author: 'Hugh J. Schonfield', work: 'The Passover Plot', year: '1965', quote: `Schonfield deutet die Passion als von Jesus geplanten Scheintod, der durch den Lanzenstich scheiterte.`, status: 'paraphrase' },
        { kind: 'gegner', author: 'Michael Baigent', work: 'The Jesus Papers', year: '2006', quote: `Baigent vertritt, Jesus habe die Kreuzigung mit Hilfe Verbündeter überlebt.`, status: 'paraphrase' },
      ],
      questionsBack: [
        `Wer von den Mitwissern hätte das Komplott jemals verraten – und warum hören wir von keinem?`,
        `Warum hat kein antiker Gegner des Christentums, nicht einmal Kelsos, je einen inszenierten Scheintod behauptet?`,
      ],
      followUps: [
        {
          id: 'schwamm-betaeubung',
          objection: `Aber denk an den Schwamm mit Essig: Kaum hatte Jesus davon getrunken, „verschied" er (Joh 19,30). Das war ein Schlaftrunk, der ihn todesähnlich erscheinen ließ.`,
          objectionBy: 'Michael Baigent / Ahmed Deedat',
          answer: `Der „Essig" (oxos) war Posca, das saure Wein-Wasser-Getränk römischer Soldaten – gereicht von einem Umstehenden, nicht von einem Verschwörer. Bezeichnenderweise **lehnte** Jesus vor der Kreuzigung den mit Myrrhe gemischten, betäubenden Wein ab (Mk 15,23). Und ein Betäubungsmittel, das einen gegeißelten Mann so bewusstlos macht, dass Soldaten ihn für tot halten, hätte ihn in dieser Lage eher umgebracht als gerettet – Kreuzigungsopfer mussten sich zum Atmen aufrichten.`,
          detail: `**Zwei Getränke, zwei Szenen:**
- **Mk 15,23:** Vor der Kreuzigung wird Jesus „Myrrhe im Wein" angeboten – ein betäubender Trank, wie ihn nach jüdischer Überlieferung barmherzige Frauen Jerusalems Verurteilten reichten. Jesus nimmt ihn **nicht**.
- **Mk 15,36 / Joh 19,29–30:** Am Ende reicht jemand einen Schwamm mit oxos – Posca, das alltägliche Getränk der Soldaten und einfachen Leute. Lukas deutet es als Verspottung (Lk 23,36).

Die These dreht also die Texte um: Den Betäubungstrank lehnt Jesus ab, und das Getränk am Ende ist kein Arzneimittel.`,
          sources: [
            { kind: 'bibel', work: 'Markus', ref: '15,23', quote: `Und sie gaben ihm Myrrhen im Wein zu trinken; und er nahm's nicht zu sich.`, translation: 'Luther 1912', status: 'verbatim' },
            { kind: 'bibel', work: 'Johannes', ref: '19,29–30', quote: `Da stand ein Gefäß voll Essig. Sie aber füllten einen Schwamm mit Essig … und hielten es ihm dar zum Munde. Da nun Jesus den Essig genommen hatte, sprach er: Es ist vollbracht! und neigte das Haupt und verschied.`, translation: 'Luther 1912 (gekürzt)', status: 'paraphrase' },
          ],
          questionsBack: [
            `Warum lehnt Jesus den betäubenden Myrrhenwein ab, wenn der Plan auf einem Betäubungstrank beruhte?`,
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Welcher Historiker des 1. Jahrhunderts bezweifelt den Tod Jesu?`,
    `Wie hätte ein schwer verletzter Überlebender bei den Jüngern den Glauben ausgelöst, er habe den Tod besiegt?`,
    `Wenn Jesus überlebte – warum verschwand er dann, statt öffentlich weiterzulehren?`,
    `Warum sind sich alle antiken Quellen, auch die feindlichen, über seinen Tod einig?`,
  ],
  avoid: [
    `Detaillierte medizinische Szenarien (z. B. exakte Todesursache) als gesichert darstellen – die Ärzte sind uneins.`,
    `Das Turiner Grabtuch als medizinischen Beweis verwenden.`,
    `Den JAMA-Artikel von 1986 als „endgültigen Beweis" präsentieren – er ist ein Beitrag, kein Schlusswort.`,
  ],
  concessions: [
    `Die genaue Todesursache bei Kreuzigung ist medizinisch umstritten.`,
    `Es gab tatsächlich Fälle, in denen Gekreuzigte nach frühzeitiger Abnahme überlebten (Josephus, Vita 420–421).`,
    `Ein Tod nach etwa sechs Stunden war vergleichsweise schnell – das erklärt sich aber aus der vorherigen Geißelung.`,
  ],
  furtherReading: [
    { kind: 'wissenschaft', author: 'William D. Edwards u. a.', work: 'On the Physical Death of Jesus Christ. JAMA 255', year: '1986', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Martin Hengel', work: 'Crucifixion in the Ancient World and the Folly of the Message of the Cross', year: '1977', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Gary R. Habermas / Michael R. Licona', work: 'The Case for the Resurrection of Jesus', year: '2004', status: 'paraphrase' },
  ],
  difficulty: 1,
  tags: ['Scheintod', 'Kreuzigung', 'Ahmadiyya', 'Deedat', 'Strauss', 'Medizin'],
  related: [
    'islam-kreuzigung/nicht-gekreuzigt-4-157',
    'islam-kreuzigung/ersatztheorie-taeuschung',
    'gnosis/jesus-in-indien',
    'auferstehung/leichnam-gestohlen-falsches-grab',
  ],
};

export default claim;
