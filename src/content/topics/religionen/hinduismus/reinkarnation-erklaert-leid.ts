import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'reinkarnation-erklaert-leid',
  title: `„Reinkarnation erklärt das Leid besser als das Christentum."`,
  proponents: [
    { name: 'Swami Vivekananda', role: 'Hindu-Mönch und Vedanta-Lehrer (1863–1902)', work: 'Vorträge über Karma und Wiedergeburt' },
    { name: 'Ian Stevenson', role: 'Psychiater, University of Virginia (1918–2007)', work: 'Twenty Cases Suggestive of Reincarnation (1966; 2. Aufl. 1974)' },
    { name: 'Jim B. Tucker', role: 'Kinderpsychiater, Nachfolger Stevensons an der University of Virginia', work: 'Life Before Life (2005)' },
    { name: 'Brian L. Weiss', role: 'Psychiater, Vertreter der Rückführungstherapie', work: 'Many Lives, Many Masters (1988)' },
  ],
  steelman: `Warum wird ein Kind gesund und reich geboren, ein anderes blind und arm? Im Christentum bleibt nur: Gott hat es so gewollt – das macht Gott willkürlich. Die Wiedergeburtslehre dagegen erklärt die Ungleichheit gerecht: Jeder erntet die Früchte früherer Leben. Niemand ist Opfer eines blinden Zufalls oder eines launischen Schöpfers. Außerdem bekommt jeder viele Chancen, statt in einem einzigen kurzen Leben über eine ganze Ewigkeit zu entscheiden. Und es gibt Belege: Der Psychiater Ian Stevenson hat jahrzehntelang Fälle von Kindern dokumentiert, die überprüfbare Einzelheiten aus dem Leben Verstorbener berichteten – teils mit Muttermalen, die deren tödlichen Wunden entsprachen.`,
  biblical: {
    summary: `Die Bibel lehrt **ein** irdisches Leben, danach das Gericht (Hebr 9,27) und die **leibliche Auferstehung derselben Person** (1 Kor 15). Sie lehnt die Deutung, Leiden sei Strafe für eigene frühere Schuld, ausdrücklich ab (Joh 9,1–3; Lk 13,1–5; das Buch Hiob). Das Leid wird nicht durch Schuldzuweisung „erklärt", sondern durch den Sündenfall in seiner Herkunft verortet (Röm 8,20–22), durch Gottes Mitleiden in Christus durchdrungen und durch die kommende Neuschöpfung überwunden (Offb 21,4).`,
    detail: `- **Hebr 9,27:** einmal sterben, danach das Gericht – keine Kette von Leben.
- **Lk 16,19–31:** Der reiche Mann und Lazarus behalten nach dem Tod ihre Identität und Erinnerung („Gedenke, Sohn …", V. 25) – keine Wiedergeburt.
- **Joh 9,1–3:** Jesus verneint die Frage, ob der Blindgeborene „vorher" gesündigt habe – die Frage der Jünger setzt sogar eine Art Vorexistenz voraus, aber Jesus weist die ganze Schuldlogik zurück.
- **Hiob:** Das ganze Buch widerlegt die Freunde, die Hiobs Leid als Strafe deuten (Hi 42,7).
- **Elia und Johannes der Täufer:** Johannes kommt „im Geist und in der Kraft Elias" (Lk 1,17), bestreitet aber selbst, Elia zu sein (Joh 1,21). Elia starb nicht (2 Kön 2,11) und erscheint bei der Verklärung als er selbst (Mt 17,3) – nach dem Tod des Täufers.`,
    sources: [
      { kind: 'bibel', work: 'Hebräer', ref: '9,27', quote: `Und wie den Menschen ist gesetzt, einmal zu sterben, darnach aber das Gericht:`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '9,2–3', quote: `Meister, wer hat gesündigt, dieser oder seine Eltern, daß er ist blind geboren? Jesus antwortete: Es hat weder dieser gesündigt noch seine Eltern; sondern daß die Werke Gottes offenbar würden an ihm.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Offenbarung', ref: '21,4', quote: `Gott wird abwischen alle Tränen von ihren Augen, und der Tod wird nicht mehr sein, noch Leid noch Geschrei noch Schmerz wird mehr sein.`, translation: 'Luther 1912', status: 'paraphrase', note: 'Wortlaut leicht gekürzt.' },
      { kind: 'bibel', work: 'Lukas', ref: '1,17', quote: `Und er wird vor ihm her gehen im Geist und Kraft des Elia …`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '1,21', quote: `Und sie fragten ihn: Was denn? Bist du Elia? Er sprach: Ich bin's nicht.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die Kirchenväter haben die Seelenwanderung (Metempsychose) schon im 2. und 3. Jahrhundert geprüft und mit Vernunftgründen zurückgewiesen: Irenäus mit dem Gedächtnis-Argument, Tertullian u. a. mit dem Bevölkerungs-Argument, Origenes – entgegen einem populären Mythos – mit der ausdrücklichen Ablehnung der Wanderung der Seele in neue Leiber. Die koptische Kirche bekennt die Auferstehung des Leibes und das ewige Leben; sie betet für die Entschlafenen, kennt aber weder Fegefeuer noch Wiedergeburt.`,
    sources: [
      { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Gegen die Häresien (Adversus Haereses)', ref: 'II,33,1–2', year: 'ca. 180', quote: `Wenn die Seelen schon früher in anderen Leibern gelebt hätten, müssten sie sich daran erinnern; da sie nichts davon wissen, ist die Lehre von der Seelenwanderung widerlegt.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Tertullian', work: 'Über die Seele (De anima)', ref: '30', year: 'ca. 210', quote: `Die Menschheit wächst zahlenmäßig beständig; wenn die Lebenden nur aus den Toten zurückkehrten, könnte ihre Zahl nicht zunehmen.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Origenes', work: 'Matthäuskommentar', ref: 'XIII,1', year: 'ca. 245', quote: `Origenes weist zur Frage, ob Johannes der Täufer Elia sei, die Lehre von der Wanderung der Seele in einen anderen Leib (Metensomatose) als der Kirche fremd zurück.`, status: 'paraphrase' },
      { kind: 'konzil', work: 'Nizäno-Konstantinopolitanisches Glaubensbekenntnis', year: '381', quote: `Wir erwarten die Auferstehung der Toten und das Leben der kommenden Welt.`, status: 'verbatim' },
    ],
  },
  opposingView: {
    summary: `Ian Stevenson (University of Virginia) untersuchte ab den 1960er-Jahren Fälle kleiner Kinder (meist zwischen 2 und 5 Jahren), die von einem früheren Leben sprachen; seine Forschungsgruppe nennt über 2.500 gesammelte Fälle. Stevenson arbeitete sorgfältig, nannte seine Fälle aber bewusst nur „suggestive" (hinweisend), nicht beweisend, und diskutierte selbst alternative Deutungen. Kritiker verweisen auf die Häufung der Fälle in Kulturen, die an Wiedergeburt glauben, auf die Beeinflussung durch Familien und Dorfgemeinschaft vor Beginn der Untersuchung, auf die Abhängigkeit von Dolmetschern und auf rückblickende Befragungen. Hypnotische „Rückführungen" gelten in der Gedächtnisforschung als hochgradig suggestionsanfällig.`,
    detail: `**Fair bewertet:** Einige Fälle sind bis heute nicht befriedigend erklärt; das sollte man nicht kleinreden. Aber: (1) Kein Fall zeigt eine **moralische Vergeltung** – also gerade das, was die Karma-Theodizee braucht. (2) Eine Anomalie ist nicht automatisch Beleg für **eine** bestimmte Theorie. (3) Die Experimente des Psychologen Nicholas Spanos (1991) zeigten, dass Inhalte von „Rückführungen" den Erwartungen folgen, die der Hypnotiseur vorgibt. Auch Stevenson selbst hielt hypnotische Rückführungen für weitgehend wertlos.`,
    sources: [
      { kind: 'wissenschaft', author: 'Ian Stevenson', work: 'Twenty Cases Suggestive of Reincarnation', year: '1966; 2. Aufl. 1974', status: 'paraphrase', quote: `Detaillierte Falldarstellungen aus Indien, Sri Lanka, Brasilien, Alaska (Tlingit) und Libanon; ausdrücklich als „hinweisend", nicht als Beweis vorgelegt.` },
      { kind: 'wissenschaft', author: 'Jim B. Tucker', work: 'Life Before Life: A Scientific Investigation of Children\'s Memories of Previous Lives', year: '2005', status: 'paraphrase', quote: `Überblick über die Fallsammlung der University of Virginia (nach Angaben der Gruppe über 2.500 Fälle).` },
      { kind: 'fachliteratur', author: 'Paul Edwards', work: 'Reincarnation: A Critical Examination', year: '1996', status: 'paraphrase', quote: `Philosophische und methodische Kritik an der Reinkarnationsforschung (u. a. Bevölkerungsproblem, fehlender Mechanismus, Kontamination der Zeugenaussagen).`, note: 'Edwards war Atheist und Philosoph; er kritisiert Reinkarnation aus säkularer Sicht.' },
      { kind: 'wissenschaft', author: 'Nicholas P. Spanos u. a.', work: 'Secondary identity enactments during hypnotic past-life regression: A sociocognitive perspective', ref: 'Journal of Personality and Social Psychology 61 (2), S. 308–320', year: '1991', status: 'paraphrase', quote: `Inhalte hypnotischer „Rückführungen" richten sich nach den vom Versuchsleiter vermittelten Erwartungen.` },
    ],
  },
  quickAnswer: `Reinkarnation erklärt das Leid nicht, sie verschiebt es nur: Jedes Leid wird mit einem früheren Leben begründet – und dieses mit einem noch früheren, ohne Ende. Dabei bekommt der Leidende die Schuld für Taten, an die er sich nicht erinnern kann. Jesus hat diese Logik beim Blindgeborenen ausdrücklich abgelehnt (Joh 9,3). Der christliche Glaube gibt keine bequeme Formel, aber etwas Besseres: einen Gott, der selbst gelitten hat, und die Auferstehung, in der jede Träne abgewischt wird.`,
  keyPoints: [
    `**Verschiebung statt Erklärung:** Die Ungleichheit von heute wird mit früheren Leben erklärt – die Ungleichheit des ersten Lebens bleibt unerklärt oder wird in eine anfangslose Kette verlegt.`,
    `**Schuld ohne Erinnerung:** Wer nicht weiß, wofür er leidet, kann weder bereuen noch lernen (Irenäus, Adv. Haer. II,33; Justin, Dialog 4).`,
    `**Das Opfer wird zum Täter:** Wer Leid als verdiente Frucht deutet, nimmt den Leidenden die Unschuld und den Mitmenschen den Antrieb zur Hilfe – Jesus weist das zurück (Joh 9,1–3; Lk 13,1–5).`,
    `**Wiedergeburt ist keine Chance, sondern ein Gefängnis:** Im Hinduismus und Buddhismus ist das Ziel gerade die Befreiung aus dem Kreislauf (Moksha, Nirvana).`,
    `**Die Fälle Stevensons sind interessant, aber kein Beweis:** Häufung in Glaubenskulturen, Kontamination, keine nachweisbare moralische Vergeltung; Stevenson selbst sprach nur von „hinweisenden" Fällen.`,
    `**Die christliche Antwort ist Gemeinschaft im Leid:** Gott tritt in Christus selbst ins Leid ein und verheißt leibliche Auferstehung und Gerechtigkeit (Offb 21,4; Röm 8,18–23).`,
  ],
  voices: [
    {
      person: 'irenaeus',
      role: 'als Bischof, der die Seelenwanderungslehren seiner Zeit prüfte',
      text: `Irenäus wendet sich gegen Gnostiker, die die platonische Seelenwanderung übernahmen. Sein Hauptargument ist schlicht und bis heute stark: Wenn unsere Seelen schon in anderen Leibern gelebt hätten, müssten wir uns daran erinnern. Die Gegner behaupten, ein „Trank des Vergessens" lösche die Erinnerung – doch dann, so Irenäus, könnten sie auch selbst nicht wissen, dass es diesen Trank gibt. Die Lehre entzieht sich jeder Überprüfung.`,
      sources: [
        { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Adversus Haereses', ref: 'II,33,1–2', status: 'paraphrase', quote: `Gegen die Seelenwanderung: Fehlende Erinnerung widerlegt die Behauptung früherer Leben; die Ausrede eines Vergessenstrankes ist selbst unbeweisbar.` },
      ],
    },
    {
      person: 'tertullian',
      role: 'als juristisch geschulter Apologet',
      text: `Tertullian prüft in seiner Schrift über die Seele die pythagoreische Lehre, die Lebenden kehrten aus den Toten zurück. Er verweist unter anderem darauf, dass die Menschheit beständig an Zahl zunimmt – das passt nicht zu einem geschlossenen Kreislauf von Seelen, die bloß wiederkehren. Das Argument ist heute mit acht Milliarden Menschen noch schärfer. Tertullian wird von der koptischen Kirche nicht als Lehrautorität geführt, ist aber als Apologet wertvoll.`,
      sources: [
        { kind: 'kirchenvater', author: 'Tertullian', work: 'De anima', ref: '28–35, bes. 30', status: 'paraphrase', quote: `Widerlegung der Metempsychose, u. a. mit dem Hinweis auf das Wachstum der Menschheit.` },
      ],
    },
    {
      person: 'origenes',
      role: 'als Exeget der alexandrinischen Schule',
      text: `Esoteriker berufen sich gern auf Origenes als angeblichen Reinkarnationslehrer. Origenes spekulierte zwar über eine Präexistenz der Seelen (was die Kirche später verwarf), lehnte aber die Wanderung der Seele in einen neuen Leib ausdrücklich ab – etwa bei der Frage, ob Johannes der Täufer Elia sei. Er deutet Lk 1,17 so, dass der Geist und die Kraft Elias, nicht die Seele Elias, in Johannes wirkten.`,
      sources: [
        { kind: 'kirchenvater', author: 'Origenes', work: 'Matthäuskommentar', ref: 'XIII,1', status: 'paraphrase', quote: `Die Lehre von der Metensomatose ist der Kirche fremd und widerspricht den Schriften.` },
      ],
    },
    {
      person: 'paul-williams',
      role: 'als Buddhologe, der selbst zwei Jahrzehnte an Wiedergeburt glaubte',
      text: `Paul Williams beschreibt, wie ihm als praktizierendem Buddhisten klar wurde: Wenn ich sterbe und ein anderes Wesen wiedergeboren wird, das sich an nichts erinnert, keinen Körper und keine Persönlichkeit mit mir teilt, dann ist dieses Wesen nicht „ich". Wiedergeburt bietet also gerade **mir** keine Hoffnung – sie ist für die Person, die jetzt leidet, faktisch das Ende. Das christliche Versprechen der Auferstehung dagegen gilt der Person selbst.`,
      sources: [
        { kind: 'fachliteratur', author: 'Paul Williams', work: 'The Unexpected Way: On Converting from Buddhism to Catholicism', year: '2002', status: 'paraphrase', quote: `Wiedergeburt ohne Kontinuität von Erinnerung, Leib und Persönlichkeit bedeutet für die jetzige Person keine Fortdauer.` },
      ],
    },
    {
      person: 'cs-lewis',
      role: 'als Denker über das Problem des Schmerzes',
      text: `C. S. Lewis betont, dass eine Welt freier Geschöpfe eine stabile, gesetzmäßige Natur braucht – und dass diese Stabilität auch Leid ermöglicht. Er gibt keine Formel, die jedes einzelne Leid „verrechnet", sondern verweist auf den Gott, der in Christus selbst gelitten hat und das Leid in einen größeren Zusammenhang der Erlösung stellt. Bezeichnend: Lewis verlor seine Frau an Krebs und schrieb darüber ohne jeden Versuch, ihr Leid als verdient zu erklären.`,
      sources: [
        { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'The Problem of Pain (dt. Über den Schmerz)', year: '1940', ref: 'Kap. 2', status: 'paraphrase', quote: `Eine gemeinsame Welt freier Wesen erfordert eine verlässliche Natur, die auch Leid möglich macht.` },
      ],
    },
  ],
  dialog: [
    {
      id: 'ungleichheit-bei-geburt',
      objection: `Warum wird ein Kind in Reichtum geboren, ein anderes blind in einem Slum? Nur die Wiedergeburt erklärt diese Ungleichheit gerecht. Bei euch ist es Gottes Willkür.`,
      objectionBy: 'Swami Vivekananda (Linie)',
      answer: `Die Wiedergeburt verschiebt die Frage nur: Warum war das frühere Leben ungleich? Und das davor? Am Ende steht entweder ein unverdienter Anfang oder eine endlose Kette ohne Erklärung. Außerdem erklärt sie das Leid, indem sie dem Kind die Schuld gibt. Jesus hat genau diese Logik beim Blindgeborenen abgelehnt (Joh 9,3). Für Christen ist Ungleichheit kein Urteil über das Kind, sondern ein Ruf an uns, ihm zu helfen (Mt 25,40).`,
      followUps: [
        {
          id: 'gott-erschafft-blind',
          objection: `Aber dann hat euer Gott das Kind eben blind erschaffen. Das ist doch viel schlimmer, als wenn es sein eigenes Karma wäre.`,
          objectionBy: 'Swami Sarvapriyananda (sinngemäß)',
          answer: `Die Bibel sagt nicht, dass Gott jedem Kind sein Leid zuteilt wie in einer Lotterie. Die ganze Schöpfung ist durch den Sündenfall der Vergänglichkeit unterworfen (Röm 8,20–22) – Leid ist Folge einer gebrochenen Welt, nicht eine persönliche Strafe. Gott bleibt nicht fern, sondern tritt in Christus selbst in das Leid ein und verheißt Heilung. Was ist tröstlicher für die Mutter: „Dein Kind hat es verdient" oder „Gott liebt dein Kind und wird alles neu machen"?`,
          followUps: [
            {
              id: 'vertroestung-jenseits',
              objection: `„Gott wird alles heil machen" ist eine Vertröstung aufs Jenseits. Karma erklärt das Leid wenigstens jetzt.`,
              objectionBy: 'Deepak Chopra (sinngemäß)',
              answer: `Karma erklärt jetzt gar nichts Überprüfbares – niemand kann die angeblichen früheren Taten eines Kindes nachweisen. Es ist ebenfalls eine Aussage über Unsichtbares. Die christliche Hoffnung dagegen gründet in einem geschichtlichen Ereignis: der Auferstehung Jesu, für die es starke historische Gründe gibt. Und sie ist keine Vertröstung: Seit 2000 Jahren gründen Christen gerade deshalb Krankenhäuser und Blindenschulen, weil sie das Leid nicht für verdient halten.`,
              questionsBack: [`Welche Methode gibt es, um die früheren Taten eines Kindes zu überprüfen?`],
              followUps: [
                {
                  id: 'auferstehung-nur-legende',
                  objection: `Die Auferstehung ist doch selbst eine fromme Legende. Du ersetzt eine unprüfbare Hoffnung nur durch eine andere.`,
                  objectionBy: 'Deepak Chopra (sinngemäß)',
                  answer: `Der Unterschied ist: Über die Auferstehung kann man historisch streiten, über frühere Leben eines Kindes nicht. Fast alle Fachhistoriker – auch skeptische – halten fest: Jesus starb am Kreuz, seine Jünger waren überzeugt, ihm lebend begegnet zu sein, sogar Gegner wie Paulus und Skeptiker wie Jakobus wurden umgestimmt, und das älteste Bekenntnis dazu (1 Kor 15,3–7) stammt aus den ersten Jahren nach dem Ereignis. Du musst das nicht sofort glauben – aber es ist eine Frage, die man mit Belegen prüfen kann.`,
                  detail: `Hier lohnt es sich, das Gespräch zu verlagern: weg von der Spekulation über unsichtbare frühere Leben, hin zu einem öffentlichen Ereignis. Die sogenannten „minimalen Fakten" (Gary Habermas) werden von der großen Mehrheit der Forscher anerkannt, gleich welcher Weltanschauung. Wer sie anders erklären will (Halluzination, Diebstahl des Leichnams, Legendenbildung), muss erklären, warum Gruppen gleichzeitig Erscheinungen hatten, warum ausgerechnet Gegner überzeugt wurden und warum die Jünger für diese Überzeugung ihr Leben riskierten. N. T. Wright hat gezeigt, dass „Auferstehung" im Judentum der Zeit nie eine bloß geistige Fortexistenz bedeutete, sondern ein neues leibliches Leben – die Jünger behaupteten also etwas sehr Konkretes und Überprüfbares.`,
                  voices: [
                    { person: 'nt-wright', role: 'als Neutestamentler', text: `Wright argumentiert in seinem Standardwerk, dass das leere Grab zusammen mit den Begegnungen mit dem Auferstandenen die einzige hinreichende Erklärung für die Entstehung des urchristlichen Auferstehungsglaubens ist. Weder das eine noch das andere allein hätte genügt; zusammen sind sie historisch hochwahrscheinlich.`, sources: [
                      { kind: 'fachliteratur', author: 'N. T. Wright', work: 'The Resurrection of the Son of God', year: '2003', status: 'paraphrase', quote: `Leeres Grab und Erscheinungen sind zusammen notwendige und hinreichende Bedingung für die Entstehung des frühchristlichen Glaubens an die Auferstehung.` },
                    ] },
                    { person: 'habermas', role: 'als Auferstehungsforscher', text: `Habermas hat die Fachliteratur zur Auferstehung über Jahrzehnte ausgewertet und eine Reihe von Fakten herausgearbeitet, die auch die meisten kritischen Forscher anerkennen: Jesu Tod durch Kreuzigung, die Überzeugung der Jünger, ihm begegnet zu sein, die Bekehrung des Paulus und des Jakobus sowie die sehr frühe Verkündigung.`, sources: [
                      { kind: 'fachliteratur', author: 'Gary R. Habermas / Michael R. Licona', work: 'The Case for the Resurrection of Jesus', year: '2004', status: 'paraphrase', quote: `Die „minimalen Fakten", die von der großen Mehrheit der Fachgelehrten anerkannt werden.` },
                    ] },
                  ],
                  sources: [
                    { kind: 'bibel', work: '1. Korinther', ref: '15,3–8', status: 'paraphrase', quote: `Christus ist gestorben für unsere Sünden nach der Schrift, begraben und auferstanden am dritten Tage; er erschien Kephas, den Zwölfen, über fünfhundert Brüdern auf einmal, Jakobus, allen Aposteln und zuletzt Paulus.` },
                  ],
                  questionsBack: [`Wie erklärst du, dass ausgerechnet Gegner wie Paulus und Skeptiker wie Jakobus überzeugt wurden?`, `Welche historische Methode würdest du anwenden, um ein früheres Leben zu überprüfen – und würdest du sie auch auf die Auferstehung anwenden?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'stevenson-faelle',
      objection: `Ian Stevenson hat über Jahrzehnte Tausende Fälle dokumentiert – Kinder, die überprüfbare Details aus dem Leben Verstorbener kannten. Das ist wissenschaftliche Evidenz, keine Glaubenssache.`,
      objectionBy: 'Jim B. Tucker',
      answer: `Stevenson war ein ernsthafter Forscher – und gerade deshalb nannte er seine Fälle nur „suggestive", also hinweisend, nicht beweisend. Die Fälle häufen sich auffällig in Kulturen, die an Wiedergeburt glauben, und meist hatten Familien schon Kontakt, bevor ein Forscher kam. Vor allem aber: Selbst ein ungeklärter Fall zeigt nicht, dass Leid die gerechte Strafe für frühere Taten ist – und genau das behauptet die Karma-Theodizee.`,
      detail: `Faire Bewertung: Man muss nicht jeden Fall wegerklären, um die Schlussfolgerung zurückzuweisen. Zwischen „hier ist etwas Ungeklärtes" und „also gibt es Wiedergeburt nach Karma" liegen viele Schritte. Stevenson selbst diskutierte andere Deutungen, etwa außersinnliche Wahrnehmung oder „Besessenheit" als Alternativen. Für das Christentum ist wichtig: Es gibt eine geistige Welt; aber nicht jede Anomalie ist eine Offenbarung.`,
      questionsBack: [
        `Warum gibt es so viele Fälle in Indien, Sri Lanka oder bei den Drusen – und kaum welche in Kulturen, die nicht an Wiedergeburt glauben?`,
        `Zeigt auch nur einer dieser Fälle, dass das Leid des Kindes die gerechte Folge einer früheren Tat war?`,
      ],
      followUps: [
        {
          id: 'muttermale',
          objection: `Und die Muttermale, die genau den tödlichen Wunden des Verstorbenen entsprechen? Wie willst du das erklären?`,
          objectionBy: 'Jim B. Tucker',
          answer: `Ich muss nicht jeden Einzelfall erklären können, um zu sehen, dass die Zuordnungen meist im Nachhinein entstanden, wenn Familien bereits nach einem passenden Verstorbenen suchten. Muttermale sind häufig; was „passt", wird erinnert, was nicht passt, vergessen. Und selbst eine echte, rätselhafte Verbindung würde nicht beweisen, dass dieselbe Person wiedergeboren wurde – Stevenson selbst zog andere Deutungen in Betracht.`,
          followUps: [
            {
              id: 'kinder-besessen',
              objection: `Willst du etwa sagen, diese Kinder seien von Dämonen besessen? Das ist absurd und herzlos.`,
              objectionBy: 'Jim B. Tucker (sinngemäß)',
              answer: `Nein, das unterstelle ich keinem Kind. Die meisten Fälle haben ganz gewöhnliche Erklärungen: Familienerzählungen, Suggestion, gutgläubige Verknüpfungen. Mein Punkt ist nur: Eine Anomalie beweist nicht automatisch eine bestimmte Theorie. Und an der eigentlichen Frage ändert sie nichts – kein Fall zeigt, dass Leid gerechte Vergeltung ist.`,
              followUps: [
                {
                  id: 'beste-faelle-vorher-dokumentiert',
                  objection: `Du weichst aus. In den besten Fällen wurden die Aussagen der Kinder aufgeschrieben, bevor man die verstorbene Person identifiziert hatte. Da gibt es keine nachträgliche Verknüpfung.`,
                  objectionBy: 'Jim B. Tucker (sinngemäß)',
                  answer: `Ich nehme diese Fälle ernst und behaupte nicht, alles erklären zu können. Aber selbst ein unerklärter Fall zeigt höchstens, dass ein Kind über Informationen verfügt, die es eigentlich nicht haben dürfte. Er zeigt nicht, dass dieselbe Person wiedergeboren wurde, und erst recht nicht, dass ihr Leid gerechte Vergeltung für frühere Taten ist. Stevenson selbst hat verschiedene Deutungen erwogen. Von „rätselhaft" zu „Karma ist bewiesen" ist ein sehr weiter Sprung.`,
                  detail: `Auch bei bekannten Fällen ist umstritten, was genau vor der Identifizierung schriftlich festgehalten wurde – Familien, Forscher und Übersetzer sind oft erst Jahre später beteiligt. Doch selbst wenn ein Fall standhält, bleibt die Deutung offen: Stevenson hat in seinen Fallstudien neben der Reinkarnation auch andere Hypothesen geprüft (Kryptomnesie, außersinnliche Wahrnehmung, Besessenheit) und sprach bewusst nur von Fällen, die Reinkarnation „nahelegen". Eine Informationsübertragung ist etwas anderes als die Fortdauer einer Person mit moralischer Bilanz.

Und hier liegt die eigentliche Pointe für unser Thema: Kein einziger dieser Fälle beweist, dass das Leid eines Kindes die gerechte Strafe für eine Tat in einem früheren Leben ist. Gerade die Fälle mit gewaltsamem Tod zeigen eher das Gegenteil – das „frühere Leben" endete oft als Opfer, nicht als Täter.`,
                  sources: [
                    { kind: 'gegner', author: 'Ian Stevenson', work: 'Twenty Cases Suggestive of Reincarnation', year: '1966, 2. Aufl. 1974', status: 'paraphrase', quote: `Fälle, die Reinkarnation „nahelegen"; Stevenson diskutiert ausdrücklich alternative Erklärungen.` },
                    { kind: 'gegner', author: 'Jim B. Tucker', work: 'Return to Life: Extraordinary Cases of Children Who Remember Past Lives', year: '2013', status: 'paraphrase', quote: `Fallstudien amerikanischer Kinder mit angeblichen Erinnerungen an frühere Leben; Tucker deutet sie bewusstseinsphilosophisch.` },
                  ],
                  questionsBack: [`Angenommen, ein Fall ist echt rätselhaft: Wie folgt daraus, dass Leid gerechte Strafe für frühere Taten ist?`],
                },
              ],
            },
          ],
        },
        {
          id: 'hypnose-rueckfuehrung',
          objection: `Dann nimm die Rückführungen unter Hypnose: Brian Weiss hat Patienten geheilt, die sich an frühere Leben erinnerten.`,
          objectionBy: 'Brian L. Weiss',
          answer: `Hypnose ist in der Gedächtnisforschung als Quelle falscher Erinnerungen bekannt. In Experimenten des Psychologen Nicholas Spanos richteten sich die „früheren Leben" nach dem, was der Versuchsleiter vorher angedeutet hatte. Sogar Ian Stevenson hielt hypnotische Rückführungen für weitgehend wertlos. Dass sich jemand danach besser fühlt, beweist nicht, dass die Bilder wahr sind.`,
          sources: [
            { kind: 'wissenschaft', author: 'Nicholas P. Spanos u. a.', work: 'Journal of Personality and Social Psychology 61 (2)', ref: 'S. 308–320', year: '1991', status: 'paraphrase', quote: `Rückführungsinhalte folgen den suggerierten Erwartungen.` },
          ],
        },
      ],
    },
    {
      id: 'viele-chancen',
      objection: `Wiedergeburt gibt jedem viele Chancen. Ein einziges kurzes Leben, das über die Ewigkeit entscheidet – das ist grausam.`,
      objectionBy: 'Deepak Chopra (sinngemäß)',
      answer: `In den indischen Traditionen selbst gilt der Kreislauf der Wiedergeburten nicht als Chance, sondern als Gefangenschaft – das Ziel ist Moksha, die Befreiung daraus. Nach klassischen Texten kann man auch als Tier oder in niedrigem Stand wiedergeboren werden (Chandogya-Upanishad 5,10,7). Das Christentum dagegen sagt: Gott ist geduldig (2 Petr 3,9), kennt jedes Herz und richtet gerecht – wer wenig wusste, wird anders beurteilt als der, der viel wusste (Lk 12,47–48).`,
      followUps: [
        {
          id: 'kind-stirbt-frueh',
          objection: `Aber was ist mit einem Kind, das mit fünf Jahren stirbt? Es hatte überhaupt keine Chance.`,
          objectionBy: 'Swami Sarvapriyananda (sinngemäß)',
          answer: `Die Kirche vertraut früh verstorbene Kinder der Barmherzigkeit Gottes an. Niemand wird für etwas verurteilt, das er weder wissen noch tun konnte – „der Richter aller Welt" handelt gerecht (Gen 18,25). König David sagte über sein verstorbenes Kind: „Ich werde wohl zu ihm fahren" (2 Sam 12,23). Das ist mehr Trost als die Aussicht, dass das Kind als jemand anderes ohne Erinnerung neu anfängt.`,
          followUps: [
            {
              id: 'ewige-strafe-nach-einem-leben',
              objection: `Und nach einem einzigen kurzen Leben folgt ewige Strafe? Endliche Schuld, unendliche Strafe – das ist das eigentliche Unrecht. Da ist Karma tausendmal gerechter.`,
              objectionBy: 'Swami Vivekananda (Linie)',
              answer: `Die Kirche lehrt ewiges Leben und ewige Strafe – aber nicht als willkürlichen Zuschlag. Gott richtet jeden nach dem Licht, das er empfangen hat (Lk 12,47–48), und niemand ist verloren, der nicht selbst Gottes Liebe bis zuletzt zurückweist. Die Väter beschreiben die Hölle nicht als Ort, an dem Gott aufhört zu lieben, sondern als den Zustand dessen, der diese Liebe nicht ertragen will. Das ist ernst – aber es ist nicht ungerecht.`,
              detail: `Der Einwand rechnet die Schwere einer Schuld nur nach ihrer Dauer. Aber Schuld bemisst sich auch nach der Würde dessen, gegen den sie sich richtet, und nach der Haltung, die sich verfestigt. Isaak der Syrer, ein großer Lehrer des östlichen Mönchtums, schreibt, dass die Verdammten von der „Geißel der Liebe" gequält werden: Die Liebe Gottes ist für den, der sie hasst, Qual. C. S. Lewis fasst es so: Die Tore der Hölle sind von innen verschlossen.

Wichtig für das Gespräch: Die orthodoxe Kirche maßt sich kein Urteil über einzelne Menschen an und lehrt kein Fegefeuer, betet aber für die Entschlafenen und vertraut sie Gottes Barmherzigkeit an. Und Karma ist bei genauerem Hinsehen nicht milder: Es kennt keine Vergebung, und in den klassischen Texten kann eine einzige Tat Wiedergeburten in niederen Daseinsformen über unvorstellbare Zeiträume nach sich ziehen.`,
              voices: [
                { person: 'isaak-syrer', role: 'als Lehrer des östlichen Mönchtums', text: `Isaak der Syrer lehrt, dass niemand von Gottes Liebe ausgeschlossen ist. Diejenigen, die in der Gehenna leiden, leiden an der Liebe selbst, weil sie gegen die Liebe gesündigt haben – für sie wird die Liebe zur Qual, während sie für die Heiligen Freude ist.`, sources: [
                  { kind: 'kirchenvater', author: 'Isaak der Syrer', work: 'Asketische Reden (Homilien)', status: 'paraphrase', quote: `Die in der Gehenna Gestraften werden von der Geißel der Liebe gezüchtigt; die Kraft der Liebe wirkt auf zweifache Weise – als Qual für die Sünder, als Wonne für die Gerechten.`, note: 'Berühmte Stelle; die Homilienzählung weicht zwischen den Ausgaben ab.' },
                ] },
                { person: 'cs-lewis', role: 'als Schriftsteller und Apologet', text: `Lewis beschreibt die Hölle als die letzte Konsequenz einer Freiheit, die Gott respektiert: Am Ende gibt es nur zwei Arten von Menschen – die, die zu Gott sagen „Dein Wille geschehe", und die, zu denen Gott schließlich sagt „Dein Wille geschehe".`, sources: [
                  { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'The Great Divorce (dt. Die große Scheidung)', ref: 'Kap. 9', year: '1945', status: 'paraphrase', quote: `Am Ende gibt es nur zwei Arten von Menschen: die, die zu Gott sagen „Dein Wille geschehe", und die, zu denen Gott sagt: „Dein Wille geschehe".` },
                ] },
              ],
              sources: [
                { kind: 'bibel', work: 'Lukas', ref: '12,47–48', status: 'paraphrase', quote: `Der Knecht, der den Willen seines Herrn kannte und nicht tat, wird viele Streiche leiden; der ihn nicht kannte, wenige. Wem viel gegeben ist, bei dem wird man viel suchen.` },
              ],
              followUps: [
                {
                  id: 'zeit-zum-reifen',
                  objection: `Dann gib den Menschen doch Zeit zu reifen! Genau das leistet die Wiedergeburt: Leben um Leben lernt die Seele, bis sie frei wird.`,
                  objectionBy: 'Deepak Chopra (sinngemäß)',
                  answer: `Reifen setzt voraus, dass dieselbe Person sich erinnert, lernt und sich verändert. Bei der Wiedergeburt wird aber die Erinnerung gelöscht – wer lernt da eigentlich was? Ein Schüler, der jedes Jahr alles vergisst, reift nicht. Christlich ist Reifung echt: Gott gibt jedem Menschen ein ganzes, unwiederholbares Leben, ruft ihn täglich zur Umkehr und begleitet ihn mit seiner Gnade. „Es ist dem Menschen gesetzt, einmal zu sterben, danach aber das Gericht" (Hebr 9,27) – das macht jeden Tag kostbar.`,
                  detail: `Die indischen Traditionen selbst erleben das Rad der Wiedergeburt eher als endlose Wiederholung denn als Schule: Die meisten Wesen sinken nach klassischer Lehre immer wieder ab, statt aufzusteigen. Darum sucht man ja die Befreiung (Moksha) aus dem Kreislauf. Das Christentum sagt: Reifung geschieht in der Beziehung zu einem Gott, der vergibt und neu anfangen lässt – innerhalb dieses einen Lebens, und vollendet in der Auferstehung, in der die Person nicht ausgelöscht, sondern verklärt wird.`,
                  sources: [
                    { kind: 'bibel', work: 'Hebräer', ref: '9,27', quote: `Und wie den Menschen ist gesetzt, einmal zu sterben, darnach aber das Gericht.`, translation: 'Luther 1912', status: 'verbatim' },
                  ],
                  questionsBack: [`Wenn ich mich an mein früheres Leben nicht erinnere – inwiefern bin ich es dann, der daraus lernt?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'kirche-lehrte-reinkarnation',
      objection: `Die frühe Kirche glaubte an Reinkarnation – Origenes lehrte sie, und erst 553 wurde sie verboten.`,
      objectionBy: 'Geddes MacGregor (sinngemäß)',
      answer: `Das ist ein Mythos. Origenes spekulierte über eine Präexistenz der Seele, lehnte aber die Wanderung in neue Leiber ausdrücklich ab (Matthäuskommentar XIII,1). Schon im 2. Jahrhundert haben Justin, Irenäus und später Tertullian die Seelenwanderung widerlegt. 553 ging es um origenistische Spekulationen, nicht um eine „gestrichene" Reinkarnationslehre.`,
      followUps: [
        {
          id: 'johannes-ist-elia',
          objection: `Jesus sagt selbst, Johannes der Täufer sei Elia (Mt 11,14). Das ist Reinkarnation!`,
          objectionBy: 'Geddes MacGregor (sinngemäß)',
          answer: `Lukas erklärt, wie das gemeint ist: Johannes kommt „im Geist und in der Kraft Elias" (Lk 1,17) – er erfüllt Elias Auftrag. Johannes selbst sagt: „Ich bin's nicht" (Joh 1,21). Elia ist nie gestorben (2 Kön 2,11), also kann er nicht wiedergeboren sein. Und bei der Verklärung erscheint Elia als er selbst neben Jesus (Mt 17,3) – nach dem Tod des Täufers.`,
        },
      ],
    },
    {
      id: 'vergessen-kein-einwand',
      objection: `Dass man sich an frühere Leben nicht erinnert, ist kein Einwand. Du erinnerst dich auch nicht an deine ersten beiden Lebensjahre – und bist trotzdem dieselbe Person, die die Folgen trägt.`,
      objectionBy: 'Swami Sarvapriyananda (sinngemäß)',
      answer: `Zwischen mir und dem Kleinkind, das ich war, gibt es denselben Leib, dieselben Eltern, Fotos und eine lückenlose Lebensgeschichte. Bei der Wiedergeburt gibt es nichts davon – keinen Leib, keine Erinnerung, keine erkennbare Kontinuität. Und das Entscheidende: Eine Strafe, von der niemand weiß, wofür sie verhängt wurde, kann weder bessern noch gerecht sein. Kein menschliches Gericht dürfte so verfahren.`,
      detail: `Schon Tertullian hat gegen die Seelenwanderungslehre der Pythagoreer und Platoniker eingewandt, dass die Seelen sich an ihre früheren Leben erinnern müssten, wenn es wirklich dieselben Seelen wären. Sein Argument zielt auf den Kern: Personale Identität und Verantwortung setzen eine Verbindung voraus, die man irgendwie erkennen kann.

Interessant ist, dass auch der Buddhismus hier eine Spannung empfindet: Wenn es kein bleibendes Selbst gibt (Anatta), was wird dann wiedergeboren? Der Philosoph Paul Williams, selbst zwei Jahrzehnte lang Buddhist, nennt das einen Hauptgrund für seine Abkehr: Wenn der Wiedergeborene nicht ich bin, dann ist die Befreiung für mich bedeutungslos – und die Vergeltung ungerecht, weil ein anderer die Folgen trägt.`,
      voices: [
        { person: 'tertullian', role: 'als Apologet gegen die Seelenwanderung', text: `Tertullian widmet in seiner Schrift über die Seele mehrere Kapitel der Widerlegung der Seelenwanderung. Er weist unter anderem darauf hin, dass niemand sich an ein früheres Leben erinnert und dass die Lehre mit dem Wachstum der Menschheit nicht zusammenpasst.`, sources: [
          { kind: 'kirchenvater', author: 'Tertullian', work: 'Über die Seele (De anima)', ref: '28–33', year: 'ca. 210', status: 'paraphrase', quote: `Widerlegung der Seelenwanderungslehre: fehlende Erinnerung, Zunahme der Menschenzahl, Unvereinbarkeit mit dem Gericht über die ganze Person.` },
        ] },
        { person: 'paul-williams', role: 'als ehemaliger Buddhist und Religionsphilosoph', text: `Williams schildert, dass ihn die Frage nach der Identität des Wiedergeborenen nicht losließ: Wenn das Wesen, das nach meinem Tod aus meinem Karma entsteht, nicht ich bin, dann bedeutet Wiedergeburt für mich praktisch dasselbe wie das Ende. Gerechte Vergeltung setzt voraus, dass derselbe die Folgen trägt, der gehandelt hat.`, sources: [
          { kind: 'fachliteratur', author: 'Paul Williams', work: 'The Unexpected Way: On Converting from Buddhism to Catholicism', year: '2002', status: 'paraphrase', quote: `Ohne bleibendes Selbst ist der Wiedergeborene nicht ich; für mich ist die Wiedergeburt dann so gut wie das Ende.` },
        ] },
      ],
      questionsBack: [`Würdest du ein Gericht gerecht nennen, das einen Angeklagten bestraft, ohne ihm zu sagen, wofür?`],
      followUps: [
        {
          id: 'samskaras-wunderkind',
          objection: `Es wandert ja nicht die Erinnerung, sondern die Prägung – Neigungen, Begabungen, die Samskaras. Wie sonst erklärst du ein Wunderkind wie Mozart, der mit fünf Jahren komponierte?`,
          objectionBy: 'Swami Sarvapriyananda (sinngemäß)',
          answer: `Begabungen lassen sich durch Anlage, Umfeld und frühes Üben erklären – Mozarts Vater war ein bedeutender Musiklehrer. Christen sehen darüber hinaus in jeder Begabung ein Geschenk des Schöpfers (1 Kor 12,4–11). Vor allem aber: Wenn Talente Lohn für frühere Leben sind, dann ist jede Behinderung eine Strafe. Diesen Preis sollte man ehrlich aussprechen – und Jesus hat ihn ausdrücklich zurückgewiesen (Joh 9,3).`,
          detail: `Das Argument erklärt zu viel und zu wenig zugleich. Zu viel, weil es jede Ungleichheit moralisch auflädt: Dem Hochbegabten steht sein Glück zu, dem behinderten Kind sein Leid. Zu wenig, weil es den Ursprung der ersten Begabung nicht erklärt – irgendwann muss jemand zum ersten Mal begabt gewesen sein. Die christliche Sicht ist einfacher und gütiger: Gaben sind unverdiente Geschenke, die zum Dienst an anderen gegeben werden, und Schwäche ist kein Urteil, sondern der Ort, an dem „Gottes Kraft in den Schwachen mächtig" wird (2 Kor 12,9).`,
          sources: [
            { kind: 'bibel', work: 'Johannes', ref: '9,3', quote: `Jesus antwortete: Es hat weder dieser gesündigt noch seine Eltern; sondern daß die Werke Gottes offenbar würden an ihm.`, translation: 'Luther 1912', status: 'verbatim' },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wenn das heutige Leid durch frühere Leben erklärt wird – was erklärt das Leid im ersten Leben?`,
    `Wie kann ein Mensch aus einer Strafe lernen, an deren Grund er sich nicht erinnert?`,
    `Ist das Wesen, das nach mir geboren wird, ohne meine Erinnerung, meinen Körper und meine Persönlichkeit, wirklich „ich"?`,
    `Woher kommen die zusätzlichen Seelen, wenn die Menschheit von einer Milliarde auf acht Milliarden gewachsen ist?`,
    `Hilft es einem Leidenden mehr, wenn man ihm sagt, er habe es verdient – oder wenn man ihm hilft?`,
  ],
  avoid: [
    `Mach dich nicht über die Fälle Stevensons lustig oder nenne ihn einen Betrüger – er war ein seriöser Psychiater. Würdige die Arbeit und zeig dann die Grenzen der Schlussfolgerung.`,
    `Erkläre nicht pauschal, alle Reinkarnationserlebnisse seien dämonisch – das ist unbeweisbar, verletzend und lenkt vom eigentlichen Argument ab.`,
    `Behaupte nicht, die Bibel sage nichts zum Thema – Hebr 9,27, Lk 16 und 1 Kor 15 sind klar.`,
  ],
  concessions: [
    `Einige der von Stevenson dokumentierten Fälle sind nicht befriedigend geklärt.`,
    `Auch Christen haben Leid oft vorschnell als Strafe gedeutet – wie die Freunde Hiobs. Die Bibel selbst kritisiert das.`,
    `Das Christentum bietet keine Formel, die jedes einzelne Leid erklärt. Es bietet Gottes Gegenwart im Leid und die Hoffnung der Auferstehung.`,
  ],
  furtherReading: [
    { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Adversus Haereses, Buch II', year: 'ca. 180', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Paul Edwards', work: 'Reincarnation: A Critical Examination', year: '1996', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Über den Schmerz (The Problem of Pain)', year: '1940', status: 'paraphrase' },
    { kind: 'wissenschaft', author: 'Ian Stevenson', work: 'Twenty Cases Suggestive of Reincarnation', year: '1974', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Reinkarnation', 'Theodizee', 'Karma', 'Ian Stevenson', 'Seelenwanderung'],
  related: [
    'hinduismus/karma-gerechter-als-gnade',
    'esoterik-new-age/reinkarnation-in-der-bibel',
    'kirchengeschichte-mythen/reinkarnation-553-gestrichen',
    'theodizee/logisches-problem-des-uebels',
    'theodizee/kinderleid-karamasow',
    'buddhismus/kein-selbst-anatta',
  ],
};

export default claim;
