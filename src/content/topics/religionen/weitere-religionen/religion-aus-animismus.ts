import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'religion-aus-animismus',
  title: `„Religion entwickelte sich vom Animismus zum Monotheismus."`,
  proponents: [
    { name: 'Edward Burnett Tylor', role: 'Begründer der Kulturanthropologie (1832–1917)', work: 'Primitive Culture (1871)' },
    { name: 'James George Frazer', role: 'Religionsethnologe (1854–1941)', work: 'The Golden Bough (Der goldene Zweig, 1890 ff.)' },
    { name: 'Robert Wright', role: 'Wissenschaftsjournalist und Autor', work: 'The Evolution of God (2009)' },
    { name: 'Pascal Boyer', role: 'Anthropologe, kognitive Religionswissenschaft', work: 'Religion Explained (2001)' },
  ],
  steelman: `Die Religionsgeschichte zeigt eine klare Entwicklung: Am Anfang stand der Animismus – der Glaube, dass Bäume, Flüsse und Tiere beseelt sind (Tylor). Daraus entstanden Ahnen- und Naturgeister, dann Götter mit Zuständigkeiten, dann Hochgötter über anderen Göttern und schließlich der eine Gott. Auch Israel war ursprünglich nicht monotheistisch: Inschriften aus Kuntillet Adschrud sprechen von „Jahwe und seiner Aschera"; erst im Exil setzte sich der strenge Monotheismus durch. Die kognitive Religionswissenschaft erklärt, warum: Unser Gehirn erkennt überall Absichten und Akteure, wo keine sind. Der Monotheismus ist also kein Ausgangspunkt einer Offenbarung, sondern ein spätes Produkt kultureller Evolution.`,
  biblical: {
    summary: `Die Bibel erzählt die Religionsgeschichte in umgekehrter Richtung: Am Anfang kannte die Menschheit den einen Gott; dann „haben sie verwandelt die Herrlichkeit des unvergänglichen Gottes in ein Bild gleich dem vergänglichen Menschen und der Vögel und der vierfüßigen und der kriechenden Tiere" (Röm 1,23). Gott hat sich dennoch „nicht unbezeugt gelassen" (Apg 14,17), und alle Völker sollen ihn suchen (Apg 17,26–27). Die Bibel verschweigt nicht, dass auch Israel immer wieder Götzen diente – bis in den Tempel hinein (2 Kön 21,7; 23,4–7) –, und sie zeigt die Propheten im Kampf dagegen.`,
    sources: [
      { kind: 'bibel', work: 'Römer', ref: '1,21–23', quote: `Dieweil sie wußten, daß ein Gott ist, und haben ihn nicht gepriesen als einen Gott noch ihm gedankt … und haben verwandelt die Herrlichkeit des unvergänglichen Gottes in ein Bild gleich dem vergänglichen Menschen und der Vögel und der vierfüßigen und der kriechenden Tiere.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '14,16–17', quote: `…der in den vergangenen Zeiten hat lassen alle Heiden wandeln ihre eigenen Wege; und doch hat er sich selbst nicht unbezeugt gelassen, hat uns viel Gutes getan und vom Himmel Regen und fruchtbare Zeiten gegeben …`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '2. Könige', ref: '23,4–6', quote: `König Josia lässt alle Geräte, die für Baal, Aschera und das Himmelsheer gemacht waren, aus dem Tempel schaffen und verbrennen und das Ascherabild aus dem Haus des HERRN entfernen.`, status: 'paraphrase' },
    ],
  },
  church: {
    summary: `Der hl. Athanasius beschreibt in *Gegen die Heiden* die Entstehung des Götzendienstes als **Abstieg**: Der Mensch war geschaffen, um Gott durch seinen Logos zu schauen; als er sich von der Betrachtung Gottes abwandte und sich den Sinnen und sich selbst zuwandte, verfiel er Schritt für Schritt der Vergötterung von Himmelskörpern, Elementen, Menschen und Tieren. Das ist die patristische Entfaltung von Röm 1. Die Väter haben dabei die religiöse Suche der Völker nicht verachtet: Gott hat sich überall Zeugen gelassen.`,
    sources: [
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Contra Gentes', ref: '3–9', year: 'ca. 318', quote: `Die Menschen, die zur Gotteserkenntnis geschaffen waren, wandten sich vom Höheren ab, suchten das Nahe und Sinnliche und verfielen so stufenweise darauf, Himmel, Gestirne, Elemente, Menschen und schließlich Tiere und Bilder als Götter zu verehren.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Das Stufenschema „Animismus – Polytheismus – Monotheismus" geht auf Forscher des 19. Jahrhunderts wie Tylor und Frazer zurück. Die heutige Ethnologie hat einlinige Entwicklungsschemata weitgehend aufgegeben; E. E. Evans-Pritchard kritisierte sie 1965 als unüberprüfbare Spekulationen „vom Lehnstuhl aus". Zugleich berichteten Forscher wie Andrew Lang (1898) und Wilhelm Schmidt (*Der Ursprung der Gottesidee*, 12 Bde., 1912–1955) vom Glauben an einen Hochgott und Schöpfer gerade bei Völkern mit sehr einfacher materieller Kultur; Mircea Eliade beschrieb weltweit das Motiv des „deus otiosus" – eines Schöpfergottes, der sich zurückgezogen hat. Schmidts Methode und manche seiner Schlüsse gelten heute als überholt; Kritiker wie Raffaele Pettazzoni deuteten Hochgötter als personifizierte Himmelsmächte.`,
    detail: `**Ehrliche Bilanz:** Weder ein ursprünglicher Animismus noch ein ursprünglicher Monotheismus lässt sich streng beweisen; wir haben keine Quellen aus der Frühzeit der Menschheit, und heutige Stammeskulturen haben selbst eine lange Geschichte. Aber die Behauptung, Religion habe sich nachweislich vom Animismus zum Monotheismus entwickelt, ist kein wissenschaftlicher Konsens. Zu Israel: Die Inschriften von Kuntillet Adschrud (um 800 v. Chr.) mit der Formel „Jahwe … und seine Aschera" belegen Volksfrömmigkeit mit Aschera-Verehrung – was die Bibel selbst berichtet und verurteilt. Wie sich der israelitische Monotheismus geschichtlich durchsetzte, ist in der Forschung umstritten (z. B. Mark S. Smith).`,
    sources: [
      { kind: 'fachliteratur', author: 'E. E. Evans-Pritchard', work: 'Theories of Primitive Religion', year: '1965', status: 'paraphrase', quote: `Die evolutionistischen Religionstheorien des 19. Jahrhunderts beruhten auf unüberprüfbaren Mutmaßungen über Ursprünge.`, note: 'Evans-Pritchard konvertierte 1944 zum Katholizismus; seine Methodenkritik wird aber auch von säkularen Ethnologen geteilt.' },
      { kind: 'fachliteratur', author: 'Andrew Lang', work: 'The Making of Religion', year: '1898', status: 'paraphrase', quote: `Berichte über Hochgötter und Schöpferwesen bei Völkern mit sehr einfacher Kultur, die dem animistischen Stufenschema widersprechen.` },
      { kind: 'fachliteratur', author: 'Mircea Eliade', work: 'Die Religionen und das Heilige (Traité d\'histoire des religions)', year: '1949', status: 'paraphrase', quote: `Weltweit verbreitetes Motiv des Himmels- und Schöpfergottes, der sich nach der Schöpfung zurückzieht (deus otiosus).` },
      { kind: 'wissenschaft', work: 'Inschriften auf Vorratskrügen aus Kuntillet Adschrud (Sinai)', year: 'um 800 v. Chr.', quote: `Ich segne euch bei Jahwe von Samaria und seiner Aschera.`, status: 'paraphrase', note: 'Deutung von „seine Aschera" (Göttin oder Kultpfahl) ist umstritten.' },
      { kind: 'gegner', author: 'Robert Wright', work: 'The Evolution of God', year: '2009', status: 'paraphrase', quote: `Gottesvorstellungen als Produkt kultureller Evolution, vom Animismus über Polytheismus zum Monotheismus.` },
    ],
  },
  quickAnswer: `Das Schema „vom Animismus zum Monotheismus" stammt aus dem 19. Jahrhundert und ist in der Ethnologie längst kein Konsens mehr. Im Gegenteil: Forscher fanden gerade bei Völkern mit sehr einfacher Kultur den Glauben an einen hohen Schöpfergott, der sich oft „zurückgezogen" hat – genau wie Römer 1 es beschreibt. Und selbst wenn sich Religion entwickelt hätte: Die Chemie entstand aus der Alchemie und ist trotzdem wahr. Die Herkunft einer Überzeugung entscheidet nicht über ihre Wahrheit.`,
  keyPoints: [
    `**Das Stufenschema ist überholt:** Tylors und Frazers einlinige Evolution gilt in der Ethnologie als Spekulation des 19. Jahrhunderts (Evans-Pritchard).`,
    `**Hochgötter am „Anfang":** Lang, Schmidt und Eliade dokumentierten weit verbreitete Vorstellungen eines Schöpfergottes, der sich zurückzog – gut vereinbar mit Röm 1,21–23.`,
    `**Ehrlichkeit:** Schmidts Methode ist überholt, und ein Urmonotheismus ist nicht streng beweisbar – der Animismus als Ursprung aber ebenso wenig.`,
    `**Israel:** Die Aschera-Inschriften bestätigen, was die Bibel selbst über Volksfrömmigkeit berichtet und verurteilt (2 Kön 23). Sie zeigen, was Menschen taten, nicht, was offenbart wurde.`,
    `**Genetischer Fehlschluss:** Wie eine Überzeugung entstand, entscheidet nicht, ob sie wahr ist (Chemie aus Alchemie, Astronomie aus Astrologie).`,
    `**Kognitive Erklärungen** zeigen, warum Menschen leicht an Gott glauben – nicht, dass Gott nicht existiert.`,
  ],
  voices: [
    {
      person: 'paulus',
      role: 'als Apostel, der zu den Heiden in Lystra und Athen sprach',
      text: `Paulus deutet die Religionsgeschichte der Völker in Römer 1 als Abfall von einer ursprünglichen Gotteserkenntnis: Die Menschen wussten von Gott, ehrten ihn aber nicht und wandten sich Bildern zu. Zugleich würdigt er in Lystra und Athen, dass Gott sich durch Regen, fruchtbare Zeiten und die Nähe zu jedem Menschen nicht unbezeugt gelassen hat. Die religiöse Suche der Völker ist für ihn Spur einer verlorenen und gesuchten Wahrheit, nicht Anfangsstufe einer Erfindung.`,
      sources: [
        { kind: 'bibel', work: 'Apostelgeschichte', ref: '17,27', quote: `…daß sie den Herrn suchen sollten, ob sie doch ihn fühlen und finden möchten; und fürwahr, er ist nicht ferne von einem jeglichen unter uns.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
    },
    {
      person: 'athanasius',
      role: 'als Deuter der Entstehung des Götzendienstes',
      text: `Athanasius beschreibt, wie die Menschheit Schritt für Schritt von der reinen Gotteserkenntnis abstieg: zuerst zur Verehrung der Himmelskörper, dann der Elemente, dann vergöttlichter Menschen und schließlich von Tieren und Bildern. Für ihn ist Götzendienst nicht der kindliche Anfang der Religion, sondern ihre Entstellung – und die Menschwerdung des Logos die Wiederherstellung der verlorenen Erkenntnis.`,
      sources: [
        { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Contra Gentes', ref: '8–9', status: 'paraphrase' },
        { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'De Incarnatione', ref: '11–16', status: 'paraphrase', quote: `Weil die Menschen Gott nicht mehr aus der Schöpfung erkannten, kam der Logos selbst, um sich in einem Leib zu zeigen.` },
      ],
    },
    {
      person: 'wilhelm-schmidt',
      role: 'als Ethnologe und Sammler der Hochgott-Überlieferungen',
      text: `Wilhelm Schmidt trug in jahrzehntelanger Arbeit Berichte über Hochgötter bei Völkern auf allen Kontinenten zusammen: einen Schöpfer, Vater und Gesetzgeber, der oft ohne Bilder verehrt wird und sich manchmal wegen menschlicher Verfehlungen zurückgezogen hat. Er folgerte daraus einen ursprünglichen Monotheismus. Seine kulturhistorische Methode gilt heute als überholt, und seine Schlussfolgerungen sind umstritten – doch die gesammelten Befunde bleiben ein starker Einwand gegen das Schema, Religion habe zwingend mit Geisterglauben begonnen.`,
      sources: [
        { kind: 'fachliteratur', author: 'Wilhelm Schmidt', work: 'Der Ursprung der Gottesidee', year: '12 Bde., 1912–1955', status: 'paraphrase' },
      ],
    },
    {
      person: 'corduan',
      role: 'als Religionswissenschaftler',
      text: `Winfried Corduan hat die Debatte um den Urmonotheismus 2013 neu aufgerollt. Er unterscheidet sorgfältig zwischen Schmidts überholter Methode und den Daten, die bleiben, und argumentiert, dass die Annahme eines ursprünglichen Glaubens an einen Hochgott die ethnographischen Befunde mindestens so gut erklärt wie das Entwicklungsschema – und besser zu den Berichten vieler Völker über einen fernen Schöpfer passt.`,
      sources: [
        { kind: 'fachliteratur', author: 'Winfried Corduan', work: 'In the Beginning God: A Fresh Look at the Case for Original Monotheism', year: '2013', status: 'paraphrase' },
      ],
    },
    {
      person: 'chesterton',
      role: 'als Essayist über Religionsgeschichte',
      text: `Chesterton bemerkte in *Der unsterbliche Mensch* (The Everlasting Man), dass bei vielen „primitiven" Völkern hinter allen Geistern und Mythen die Ahnung eines fernen, guten Vaters und Schöpfers steht, über den sie oft nur mit Scheu sprechen. Für ihn ist das kein Endprodukt der Entwicklung, sondern eine Erinnerung, die von späteren Mythologien überwuchert wurde.`,
      sources: [
        { kind: 'fachliteratur', author: 'G. K. Chesterton', work: 'The Everlasting Man', ref: 'Teil I, Kap. 4 („God and Comparative Religion")', year: '1925', status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'tylor-frazer-schema',
      objection: `Religion begann mit Animismus – Geister in Bäumen, Steinen und Tieren – und entwickelte sich über den Polytheismus zum Monotheismus. Das haben Tylor und Frazer gezeigt.`,
      objectionBy: 'Robert Wright',
      answer: `Dieses Schema ist eine Konstruktion des 19. Jahrhunderts; die Ethnologie hat einlinige Entwicklungsschemata längst aufgegeben – Evans-Pritchard nannte sie Spekulationen ohne Belege. Im Gegenteil: Forscher wie Andrew Lang, Wilhelm Schmidt und Mircea Eliade dokumentierten gerade bei Völkern mit sehr einfacher Kultur den Glauben an einen hohen Schöpfergott, der sich oft zurückgezogen hat.`,
      followUps: [
        {
          id: 'schmidt-agenda',
          objection: `Schmidt war ein katholischer Priester mit Agenda, und seine Methode gilt als überholt.`,
          objectionBy: 'Robert Wright (sinngemäß)',
          answer: `Das stimmt teilweise, und ich will nicht übertreiben: Seine kulturhistorische Methode ist überholt. Aber Andrew Lang war kein christlicher Apologet, und die Feldberichte über Hochgötter bleiben – etwa Evans-Pritchards Studie über die Nuer im Südsudan und ihren Gott Kwoth. Und Tylors und Frazers Evolutionsschema ist genauso überholt. Ehrlich gesagt: Es gibt keinen Beweis, dass Religion mit Animismus begann – und die Hochgott-Befunde passen gut zum biblischen Bild.`,
          followUps: [
            {
              id: 'hochgott-himmelsmacht',
              objection: `Diese Hochgötter sind nur personifizierte Himmelsmächte (Pettazzoni) – das ist kein Monotheismus.`,
              objectionBy: 'Pascal Boyer (sinngemäß, nach Pettazzoni)',
              answer: `Viele dieser Gestalten werden als Schöpfer, als moralischer Gesetzgeber und als ferner Vater beschrieben – das ist mehr als der Himmel. Auffällig ist das verbreitete Motiv, dass der Schöpfer sich zurückzog, nachdem die Menschen ihn beleidigt hatten. Das deckt sich erstaunlich mit Römer 1. Ein Beweis ist das nicht – aber ein ernstes Indiz gegen die Behauptung, der Gedanke eines höchsten Gottes sei ein spätes Kulturprodukt.`,
            },
          ],
        },
      ],
    },
    {
      id: 'israel-aschera',
      objection: `Auch Israel war ursprünglich polytheistisch: Inschriften von Kuntillet Adschrud sprechen von „Jahwe und seiner Aschera".`,
      objectionBy: 'Robert Wright (unter Berufung auf Mark S. Smith)',
      answer: `Die Bibel selbst berichtet, dass viele Israeliten die Aschera verehrten – sogar im Tempel (2 Kön 21,7) – und dass Propheten und Könige wie Josia dagegen kämpften (2 Kön 23,4–7). Die Inschriften bestätigen also die biblische Beschreibung der Volksfrömmigkeit. Sie zeigen, was Menschen taten, nicht dass der prophetische Glaube aus diesem Synkretismus „entstanden" sei.`,
      followUps: [
        {
          id: 'bibel-spaet-redigiert',
          objection: `Die Bibel wurde aber spät redigiert, um einen frühen Monotheismus in die Vergangenheit zurückzuprojizieren.`,
          objectionBy: 'Robert Wright (sinngemäß)',
          answer: `Das ist eine Hypothese, kein gesicherter Befund. Auffällig ist gerade die Ehrlichkeit der Bibel über Israels ständiges Versagen – eine geschönte Rückprojektion würde anders aussehen. Und das ausschließliche Gebot „Du sollst keine anderen Götter haben neben mir" steht im Kern der ältesten Gesetzestexte. Siehe ausführlich den Claim zur Dokumentenhypothese.`,
        },
      ],
    },
    {
      id: 'kognitive-erklaerung',
      objection: `Die kognitive Religionswissenschaft erklärt Religion: Unser Gehirn erkennt überall Akteure, wo keine sind. Daraus entstanden Geister und Götter.`,
      objectionBy: 'Pascal Boyer',
      answer: `Zu erklären, warum wir zum Glauben neigen, entscheidet nicht, ob der Glaube wahr ist – sonst wäre es ein genetischer Fehlschluss. Dass wir leicht Gesichter in Wolken sehen, heißt nicht, dass es keine echten Gesichter gibt. Der Kognitionswissenschaftler Justin Barrett zeigte, dass schon Kinder intuitiv an einen Schöpfer glauben – Christen würden erwarten, dass Gott uns so geschaffen hat, dass wir ihn erkennen können.`,
      sources: [
        { kind: 'wissenschaft', author: 'Justin L. Barrett', work: 'Born Believers: The Science of Children\'s Religious Belief', year: '2012', status: 'paraphrase' },
      ],
      followUps: [
        {
          id: 'mechanismus-gott-ueberfluessig',
          objection: `Wenn ein Mechanismus den Glauben vollständig erklärt, ist Gott überflüssig.`,
          objectionBy: 'Pascal Boyer (sinngemäß)',
          answer: `Auch unser Glaube an andere Personen und an die Außenwelt beruht auf kognitiven Mechanismen – niemand folgert daraus, dass es keine anderen Personen gibt. Die Frage ist, ob ein Mechanismus in diesem Fall zuverlässig ist, und das entscheiden unabhängige Gründe: die Existenz des Universums, die moralische Ordnung, die Auferstehung Jesu. Siehe den Claim „Religion ist ein Nebenprodukt unserer kognitiven Mechanismen".`,
          voices: [
            {
              person: 'plantinga',
              role: 'als Erkenntnistheoretiker',
              text: `Alvin Plantinga greift Calvins Gedanken eines angeborenen „Sinns für das Göttliche" auf: Wenn Gott existiert, ist es zu erwarten, dass er Menschen mit einer natürlichen Fähigkeit geschaffen hat, ihn zu erkennen. Die Existenz eines solchen Mechanismus ist also kein Argument gegen Gott, sondern genau das, was der Theismus vorhersagt. Ob der Mechanismus zuverlässig ist, hängt davon ab, ob Gott existiert – die kognitive Erklärung allein kann das nicht entscheiden.`,
              sources: [
                { kind: 'fachliteratur', author: 'Alvin Plantinga', work: 'Warranted Christian Belief', year: '2000', status: 'paraphrase' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'kulturelle-entwicklung',
      objection: `Selbst wenn es Hochgötter gab: Religion ist eine kulturelle Entwicklung, und der Monotheismus ist einfach ein späteres, abstrakteres Stadium.`,
      objectionBy: 'Robert Wright',
      answer: `Selbst wenn sich religiöse Vorstellungen geschichtlich entwickelt hätten, entscheidet die Herkunft nicht über die Wahrheit: Die Chemie entstand aus der Alchemie, die Astronomie aus der Astrologie – und beide beschreiben die Wirklichkeit. Der christliche Anspruch ist nicht, dass Menschen Gott Schritt für Schritt erfanden, sondern dass Gott sich in der Geschichte zu erkennen gab, zuletzt in Christus.`,
      followUps: [
        {
          id: 'bibel-beschreibt-entwicklung',
          objection: `Aber die Bibel beschreibt doch selbst eine Entwicklung – von Abraham bis Jesus.`,
          objectionBy: 'Robert Wright (sinngemäß)',
          answer: `Ja – eine fortschreitende Offenbarung in einer durchgehenden Linie, die vertieft und nicht widerspricht: „Nachdem Gott vorzeiten manchmal und auf mancherlei Weise geredet hat … hat er zuletzt zu uns geredet durch den Sohn" (Hebr 1,1–2). Das ist etwas anderes als die These, Menschen hätten Gott allmählich erfunden. Ein Lehrer, der Schritt für Schritt erklärt, ist kein Schüler, der sich etwas ausdenkt.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Welche heutigen Ethnologen vertreten noch Tylors einliniges Stufenschema?`,
    `Wie erklärst du die weit verbreitete Vorstellung eines fernen Schöpfergottes bei Völkern mit sehr einfacher Kultur?`,
    `Wenn eine Überzeugung eine Entstehungsgeschichte hat – folgt daraus, dass sie falsch ist?`,
    `Beweist die Aschera-Inschrift mehr als das, was die Bibel selbst über Israels Götzendienst berichtet?`,
  ],
  avoid: [
    `Behaupte nicht, der Urmonotheismus sei „wissenschaftlich bewiesen" – Schmidts Methode ist überholt. Argumentiere mit den Befunden und mit der Beweislast.`,
    `Verwende populäre Bücher wie Don Richardsons „Eternity in Their Hearts" nur mit Vorsicht – manche Beispiele sind vereinfacht.`,
    `Stelle Stammesreligionen nicht herablassend als „primitiv" dar.`,
  ],
  concessions: [
    `Ein ursprünglicher Monotheismus lässt sich historisch nicht streng beweisen; wir haben keine Quellen aus der Frühzeit der Menschheit.`,
    `Volksfrömmigkeit in Israel war über lange Zeit synkretistisch – das bestätigt die Archäologie, und die Bibel räumt es selbst ein.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Winfried Corduan', work: 'In the Beginning God', year: '2013', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'E. E. Evans-Pritchard', work: 'Theories of Primitive Religion', year: '1965', status: 'paraphrase' },
    { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Gegen die Heiden (Contra Gentes)', year: 'ca. 318', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'G. K. Chesterton', work: 'Der unsterbliche Mensch (The Everlasting Man)', year: '1925', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Urmonotheismus', 'Animismus', 'Wilhelm Schmidt', 'Religionsgeschichte', 'kognitive Religionswissenschaft'],
  related: [
    'kognitive-religionswissenschaft/religion-nebenprodukt',
    'okkultismus/naturreligion-urspruenglich',
    'hinduismus/veden-aelter',
    'at-archaeologie/dokumentenhypothese',
    'pluralismus/nur-christ-wegen-geburt',
  ],
};

export default claim;
