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
        { kind: 'gegner', author: 'John Dominic Crossan', work: 'Jesus: A Revolutionary Biography', year: '1994', quote: `Crossan hält die Kreuzigung Jesu für so sicher, wie etwas Historisches überhaupt sein kann.`, status: 'unverified', note: 'Häufig zitiert; genauer Wortlaut und Seite nicht verifiziert.' },
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
