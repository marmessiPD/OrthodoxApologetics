import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'physik-kausal-geschlossen',
  title: `„Die Physik ist kausal geschlossen – für Gott oder Seele ist kein Platz."`,
  proponents: [
    { name: 'Sean Carroll', role: 'Theoretischer Physiker', work: 'The Big Picture (2016); „Physics and the Immortality of the Soul", Scientific American (Gastbeitrag, Mai 2011)' },
    { name: 'David Papineau', role: 'Philosoph, King’s College London', work: 'Thinking about Consciousness (2002); „The Rise of Physicalism" (2001)' },
    { name: 'Jaegwon Kim (†2019)', role: 'Philosoph des Geistes, Brown University', work: 'Mind in a Physical World (1998) – Exklusionsargument' },
    { name: 'Daniel Dennett (†2024)', role: 'Philosoph, Tufts University', work: 'Consciousness Explained (1991)' },
  ],
  steelman: `Jedes physikalische Ereignis hat eine hinreichende physikalische Ursache – das ist das Prinzip der kausalen Geschlossenheit. Sean Carroll argumentiert: Die Gesetze, die das Alltagsgeschehen bestimmen – das Standardmodell der Teilchenphysik plus Gravitation im schwachen Feld, die „Core Theory" –, sind vollständig verstanden und in Teilchenbeschleunigern bis zu Energien getestet, die weit über allem liegen, was in einem Gehirn vorkommt. Eine Seele, die Neuronen anstößt, müsste mit Elektronen und Atomkernen wechselwirken; dann wäre sie ein neues Feld oder eine neue Kraft, die wir längst entdeckt hätten. Jaegwon Kim zeigte zudem: Wenn jedes Gehirnereignis schon eine vollständige physikalische Ursache hat, bleibt für eine mentale Ursache nichts zu tun – sie wäre überflüssig. Und ein Gott, der in die Welt eingreift, müsste Energie zuführen und so die Erhaltungssätze verletzen. Für Seele und Gott als Ursachen ist in der Physik schlicht kein Platz.`,
  biblical: {
    summary: `Die Schrift beschreibt den Menschen als Einheit aus Leib und von Gott gegebenem Lebensatem: „Da machte Gott der HERR den Menschen aus einem Erdenkloß, und er blies ihm ein den lebendigen Odem in seine Nase" (Gen 2,7). Jesus unterscheidet Leib und Seele (Mt 10,28), und der Prediger sagt, dass der Geist zu Gott zurückkehrt, der ihn gegeben hat (Pred 12,7). Zugleich lehrt die Bibel, dass Gott die ganze Schöpfung in jedem Augenblick trägt (Kol 1,17; Hebr 1,3; Apg 17,28) – er ist nicht eine Kraft unter anderen Kräften, sondern der Grund, dass es Kräfte überhaupt gibt.`,
    detail: `- **Gen 2,7:** Der Mensch ist aus Staub *und* göttlichem Lebensatem – keine bloße Materie, aber auch kein Geist in einer Maschine.
- **Mt 10,28:** „Fürchtet euch nicht vor denen, die den Leib töten und die Seele nicht können töten."
- **Pred 12,7:** Der Staub kehrt zur Erde zurück, der Geist zu Gott.
- **Apg 17,28:** „In ihm leben, weben und sind wir" – Gottes Wirken ist nicht auf punktuelle Eingriffe beschränkt.
Die koptisch-orthodoxe Anthropologie versteht den Menschen als von Gott geschaffene Einheit aus Leib und vernunftbegabter Seele; die Seele ist kein Fremdkörper, sondern das belebende und denkende Prinzip des ganzen Menschen.`,
    sources: [
      { kind: 'bibel', work: '1. Mose', ref: '2,7', quote: `Und Gott der HERR machte den Menschen aus einem Erdenkloß, und er blies ihm ein den lebendigen Odem in seine Nase. Und also ward der Mensch eine lebendige Seele.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Matthäus', ref: '10,28', quote: `Und fürchtet euch nicht vor denen, die den Leib töten und die Seele nicht können töten …`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Prediger', ref: '12,7', quote: `Denn der Staub muß wieder zu der Erde kommen, wie er gewesen ist, und der Geist wieder zu Gott, der ihn gegeben hat.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '17,28', quote: `Denn in ihm leben, weben und sind wir …`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Der hl. Athanasius argumentiert in *Contra Gentes* (30–34), dass die menschliche Seele vernünftig ist und sich vom Leib unterscheidet: Sie überlegt, urteilt, betrachtet Unsichtbares und kann sogar gegen die Begierden des Leibes entscheiden – was ein bloßer Teil des Leibes nicht könnte. Der hl. Gregor von Nyssa beschreibt in *De hominis opificio* die Seele als lebendige, vernünftige Wesenheit, die den ganzen Leib durchdringt, ohne an einem Ort eingeschlossen zu sein. Die Kirche lehrt: Der Mensch ist mit einer vernünftigen Seele geschaffen; Gott erhält und lenkt die Welt in seiner Vorsehung.`,
    detail: `Für die Väter ist Gottes Wirken nicht Konkurrenz zu den natürlichen Ursachen. Gott ist die Erstursache, die allem Sein und Wirken gibt; die geschöpflichen Ursachen wirken in ihrer eigenen Ordnung. Diese Unterscheidung (später von Thomas von Aquin als Primär- und Sekundärursachen systematisiert) entschärft die Vorstellung, Gott müsse sich als zusätzliche Kraft „zwischen" die Atome drängen.`,
    sources: [
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Contra Gentes', ref: '31–33', year: 'ca. 318', quote: `Die vernünftige Seele unterscheidet sich vom Leib: Sie urteilt über die Sinne, denkt Unsichtbares und widersteht oft den Neigungen des Leibes.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Gregor von Nyssa', work: 'De hominis opificio', ref: '14–15', year: 'ca. 379', quote: `Die vernünftige Seele durchdringt den ganzen Leib und wirkt durch alle Organe, ohne an einem Ort eingeschlossen zu sein.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `„Kausale Geschlossenheit" ist eine philosophische These, kein Messergebnis. Sie wird vor allem induktiv begründet (Papineau): Wo immer man genau hinsah, fand man physikalische Ursachen. Kritiker verweisen darauf, dass die Physik selbst unvollständig ist (Quantengravitation, Messproblem, Dunkle Materie und Dunkle Energie) und dass niemand die Dynamik eines Gehirns aus der Core Theory tatsächlich berechnet hat. Hempels Dilemma (nach Carl Hempel) fragt, auf welche Physik sich die These bezieht: auf die heutige, die nachweislich unvollständig ist, oder auf eine künftige, deren Inhalt wir nicht kennen? Der Einwand aus der Energieerhaltung gegen den Leib-Seele-Dualismus wurde u. a. von Robin Collins (*American Philosophical Quarterly*, 2008) ausführlich beantwortet.`,
    detail: `- **Carrolls Argument** (*Scientific American*, 2011; *The Big Picture*, 2016): Eine Seele müsste als neues Feld an Elektronen koppeln und wäre experimentell aufgefallen. Das setzt voraus, dass eine Seele wie ein physikalisches Feld wirkt.
- **Kims Exklusionsargument:** Setzt die Geschlossenheit als Prämisse voraus. Kim selbst zog daraus den Schluss, dass nichtreduktiver Physikalismus nicht haltbar ist, und räumte in *Physicalism, or Something Near Enough* (2005) einen nicht reduzierbaren „Rest" bewusster Qualitäten ein.
- **Energieerhaltung:** Gilt für abgeschlossene Systeme und folgt aus Symmetrien (Noether). Collins argumentiert, dass in der modernen Physik (Quantenmechanik, Allgemeine Relativitätstheorie) eine geistige Einwirkung nicht notwendig Energie zuführen muss und dass die Erhaltung selbst kein metaphysisch absolutes Prinzip ist.
- **Dekohärenz:** Max Tegmark (*Physical Review E* 61, 2000) zeigte, dass Quantenüberlagerungen im Gehirn extrem schnell zerfallen – ein Argument gegen bestimmte Quantenbewusstseinsmodelle (Penrose–Hameroff), nicht gegen jede Form mentaler Verursachung.
- **Offene Frage:** Es gibt keinen empirischen Nachweis einer „Seelenkraft" im Gehirn – aber auch keinen Nachweis der Geschlossenheit. Die Debatte ist philosophisch.`,
    sources: [
      { kind: 'gegner', author: 'Sean Carroll', work: '„Physics and the Immortality of the Soul", Scientific American (Guest Blog)', year: 'Mai 2011', quote: `Wenn eine Seele das Verhalten der Atome im Gehirn beeinflussen soll, muss sie mit Elektronen wechselwirken; eine solche neue Wechselwirkung wäre in unseren Experimenten längst aufgefallen.`, status: 'paraphrase' },
      { kind: 'gegner', author: 'David Papineau', work: '„The Rise of Physicalism", in: C. Gillett & B. Loewer (Hg.), Physicalism and Its Discontents', year: '2001', quote: `Die Geschichte der Physik stützt induktiv die These, dass physikalische Wirkungen stets vollständige physikalische Ursachen haben.`, status: 'paraphrase' },
      { kind: 'gegner', author: 'Jaegwon Kim', work: 'Physicalism, or Something Near Enough', year: '2005', quote: `Mentale Verursachung ist nur durch Reduktion zu retten; die qualitativen Bewusstseinszustände bleiben jedoch ein nicht reduzierbarer Rest.`, status: 'paraphrase', note: 'Kim, einer der wichtigsten Physikalisten, räumt damit eine Grenze des Physikalismus ein.' },
      { kind: 'fachliteratur', author: 'Robin Collins', work: '„Modern Physics and the Energy-Conservation Objection to Mind-Body Dualism", American Philosophical Quarterly 45 (1)', year: '2008', quote: `Der Einwand aus der Energieerhaltung gegen den interaktionistischen Dualismus beruht auf einem Verständnis der Erhaltungssätze, das die moderne Physik nicht stützt.`, status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'Max Tegmark', work: '„Importance of Quantum Decoherence in Brain Processes", Physical Review E 61, 4194', year: '2000', quote: `Quantenkohärenz im Gehirn zerfällt auf Zeitskalen, die viel kürzer sind als neuronale Prozesse.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `„Kausale Geschlossenheit" ist kein Messergebnis, sondern eine philosophische Annahme: Niemand hat gezeigt, dass jedes Ereignis im Gehirn eine vollständige physikalische Ursache hat – die Physik kann das nicht einmal ausrechnen. Die Physik sagt, wie sich Materie verhält, wenn sie sich selbst überlassen ist; dass sie immer sich selbst überlassen ist, kann sie nicht zeigen. Und welche Physik ist gemeint – die heutige, die nachweislich unvollständig ist, oder eine künftige, die wir nicht kennen? Dann wird „physikalisch" zur Leerformel.`,
  keyPoints: [
    `**Annahme, kein Befund:** Kausale Geschlossenheit ist eine metaphysische These; kein Experiment hat sie für das Gehirn nachgewiesen.`,
    `**Hempels Dilemma:** Die heutige Physik ist unvollständig; eine künftige ist unbekannt. Die These ist entweder falsch oder inhaltsleer.`,
    `**Erhaltungssätze gelten für abgeschlossene Systeme:** Ob Leib und Geist ein abgeschlossenes System bilden, ist genau die Streitfrage (Collins 2008).`,
    `**Carroll setzt voraus, dass die Seele wie ein Feld wirkt:** Eine geistige Ursache muss keine zusätzliche Kraft im Sinne der Teilchenphysik sein.`,
    `**Gott ist keine Kraft unter Kräften:** Als Erstursache trägt er alle Ursachen, statt mit ihnen zu konkurrieren.`,
    `**Erste-Person-Evidenz:** Unser Denken, Urteilen und Begründen kennen wir sicherer als die Geschlossenheitsthese.`,
  ],
  argument: {
    name: 'Hempels Dilemma gegen die Geschlossenheitsthese',
    summary: 'Die These der kausalen Geschlossenheit ist entweder falsch oder inhaltsleer – in keinem Fall ein Befund, der Gott oder Seele ausschließt.',
    premises: [
      {
        text: 'P1: Die These „Jedes physikalische Ereignis hat eine hinreichende physikalische Ursache" bezieht sich entweder auf die heutige Physik oder auf eine künftige, vollendete Physik.',
        support: `„Physikalisch" muss irgendeinen Inhalt haben; dieser kann nur aus einer bestimmten Physik stammen. Die Unterscheidung geht auf den Wissenschaftsphilosophen Carl Hempel zurück.`,
      },
      {
        text: 'P2: Die heutige Physik ist nachweislich unvollständig und in Teilen widersprüchlich; auf ihr kann keine allgemeine Geschlossenheitsthese ruhen.',
        support: `Quantenmechanik und Allgemeine Relativitätstheorie sind nicht vereinigt; das Messproblem ist ungelöst; Dunkle Materie und Dunkle Energie sind unverstanden. Selbst Physikalisten rechnen damit, dass die heutige Physik in Teilen falsch ist.`,
      },
      {
        text: 'P3: Eine künftige Physik ist unbekannt; wenn „physikalisch" einfach heißt „was eine künftige Physik beschreiben wird", könnte das auch geistige Größen einschließen.',
        support: `Einige Philosophen (etwa Vertreter des Panpsychismus wie Philip Goff) erwägen bereits, Bewusstsein als fundamentale Größe in die Naturbeschreibung aufzunehmen. Dann schließt „physikalisch geschlossen" Geistiges nicht mehr aus.`,
      },
    ],
    conclusion: 'Die Geschlossenheitsthese ist entweder auf eine falsche Physik gestützt oder inhaltsleer. Sie ist eine weltanschauliche Vorentscheidung, kein Ergebnis der Physik – und kann daher weder Gott noch die Seele ausschließen.',
  },
  voices: [
    {
      person: 'plantinga',
      role: 'als Philosoph der Naturwissenschaft',
      text: `Plantinga zeigt in *Where the Conflict Really Lies* (2011), dass die Gesetze der klassischen Physik nur beschreiben, wie sich die Welt verhält, wenn sie kausal abgeschlossen ist. Dass sie es ist, ist eine Zusatzannahme, die aus keiner Gleichung folgt. Die Quantenmechanik macht die Lage noch offener: Sie legt für viele Einzelereignisse nur Wahrscheinlichkeiten fest; ein Wirken Gottes, das innerhalb dieser Wahrscheinlichkeiten Ergebnisse bestimmt, verletzt kein Gesetz. Die angebliche Unvereinbarkeit besteht nicht zwischen Physik und Theismus, sondern zwischen Theismus und Naturalismus.`,
      sources: [{ kind: 'fachliteratur', author: 'Alvin Plantinga', work: 'Where the Conflict Really Lies', ref: 'Kap. 3–4', year: '2011', quote: `Der Konflikt besteht nicht zwischen Wissenschaft und Theismus, sondern zwischen Wissenschaft und Naturalismus; die Geschlossenheit des Universums ist keine physikalische Aussage.`, status: 'paraphrase' }],
    },
    {
      person: 'robin-collins',
      role: 'als Philosoph und Physiker',
      text: `Collins hat den Energieerhaltungs-Einwand gegen den Leib-Seele-Dualismus gründlich untersucht. Sein Ergebnis: In der Allgemeinen Relativitätstheorie gibt es keine allgemein gültige globale Energieerhaltung, und in der Quantenmechanik ist Energieerhaltung an Symmetrien und an die Abgeschlossenheit des Systems gebunden. Zudem könnte eine geistige Einwirkung über Größen erfolgen, die gar keine Energie übertragen – etwa durch Auswahl zwischen quantenmechanisch gleich wahrscheinlichen Möglichkeiten. Der Einwand beruht daher auf einem veralteten, quasi-newtonschen Bild der Physik.`,
      sources: [{ kind: 'fachliteratur', author: 'Robin Collins', work: '„Modern Physics and the Energy-Conservation Objection to Mind-Body Dualism", American Philosophical Quarterly 45', year: '2008', quote: `Die moderne Physik stützt den Energieerhaltungs-Einwand gegen den Dualismus nicht.`, status: 'paraphrase' }],
    },
    {
      person: 'eccles',
      role: 'als Neurophysiologe (Nobelpreis 1963)',
      text: `John Eccles, der für seine Arbeiten über die Signalübertragung an Nervenzellen den Nobelpreis erhielt, vertrat einen interaktionistischen Dualismus. In *The Self and Its Brain* (1977), gemeinsam mit dem Philosophen Karl Popper, argumentierte er, dass sich das Ich nicht auf neuronale Prozesse reduzieren lässt, und suchte nach Orten im Gehirn, an denen geistige Einwirkung ohne Verletzung physikalischer Gesetze denkbar wäre. Man muss seine konkreten Hypothesen nicht übernehmen; wichtig ist, dass einer der besten Kenner der Synapse den Physikalismus gerade nicht für bewiesen hielt.`,
      sources: [{ kind: 'wissenschaft', author: 'Karl R. Popper & John C. Eccles', work: 'The Self and Its Brain: An Argument for Interactionism', year: '1977', quote: `Das selbstbewusste Ich ist nicht mit neuronalen Vorgängen identisch, sondern wirkt mit ihnen in Wechselwirkung.`, status: 'paraphrase' }],
    },
    {
      person: 'swinburne',
      role: 'als Philosoph des Geistes',
      text: `Swinburne verteidigt in *Mind, Brain, and Free Will* (2013) einen substanziellen Dualismus. Er weist darauf hin, dass niemand das Verhalten eines Gehirns aus den Grundgleichungen der Physik vorhergesagt hat und dass Gehirnprozesse in hohem Maß von Quantenereignissen und chaotischen Verstärkungen abhängen könnten. Die Behauptung, alles im Gehirn sei physikalisch determiniert, sei daher keine empirische Erkenntnis, sondern eine Extrapolation. Gleichzeitig kennen wir unser bewusstes Überlegen und Wollen unmittelbar; diese Evidenz darf man nicht zugunsten einer unbewiesenen These preisgeben.`,
      sources: [{ kind: 'fachliteratur', author: 'Richard Swinburne', work: 'Mind, Brain, and Free Will', year: '2013', quote: `Dass Gehirnprozesse vollständig physikalisch determiniert sind, ist eine ungeprüfte Extrapolation; unser bewusstes Entscheiden ist unmittelbar bekannt.`, status: 'paraphrase' }],
    },
    {
      person: 'polkinghorne',
      role: 'als Teilchenphysiker',
      text: `Polkinghorne kannte die Teilchenphysik, auf die sich Carroll beruft, aus eigener Forschung. Er bestritt dennoch, dass sie die Welt als geschlossenes Uhrwerk beschreibt. Quantenmechanische Unbestimmtheit und die extreme Empfindlichkeit chaotischer Systeme zeigen eine Welt, deren Zukunft durch ihre physikalische Beschreibung nicht vollständig festgelegt ist. In dieser Offenheit sah er Raum sowohl für menschliche Freiheit als auch für Gottes fortwährendes Wirken – ohne dass ein einziges Naturgesetz verletzt würde.`,
      sources: [{ kind: 'fachliteratur', author: 'John Polkinghorne', work: 'Belief in God in an Age of Science', year: '1998', quote: `Die Physik beschreibt keine geschlossene, mechanische Welt; ihre Offenheit lässt Raum für Freiheit und göttliches Handeln.`, status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'core-theory-seele-als-kraft',
      objection: `Die Gesetze des Alltagslebens sind vollständig verstanden. Eine Seele, die Neuronen beeinflusst, müsste eine neue Kraft oder ein neues Feld sein – das hätten wir in Teilchenbeschleunigern längst gefunden.`,
      objectionBy: 'Sean Carroll',
      targetsPremise: 2,
      answer: `Dein Argument setzt voraus, dass eine Seele wie ein physikalisches Feld wirkt, das an Elektronen koppelt. Genau das behaupten Dualisten nicht. Eine geistige Ursache könnte etwa zwischen physikalisch offenen Möglichkeiten auswählen, ohne Energie zuzuführen. Und dass die Core Theory in Beschleunigern stimmt, zeigt nicht, dass das Gehirn ein abgeschlossenes System ist – niemand hat ein Gehirn aus ihr berechnet.`,
      sources: [{ kind: 'gegner', author: 'Sean Carroll', work: '„Physics and the Immortality of the Soul", Scientific American', year: '2011', quote: `Eine Seele müsste mit gewöhnlicher Materie wechselwirken; die Quantenfeldtheorie lässt dafür keinen Raum.`, status: 'paraphrase' }],
      questionsBack: [`Hat jemand die Entscheidungen eines Menschen aus dem Standardmodell der Teilchenphysik berechnet?`, `Woher weißt du, dass eine geistige Ursache wie ein physikalisches Feld wirken müsste?`],
      followUps: [
        {
          id: 'jeder-einfluss-ist-kraft',
          objection: `Jeder Einfluss auf Neuronen ist eine Kraft. In der Quantenfeldtheorie heißt Kraft Teilchenaustausch. Eine Seele wäre also zwangsläufig ein neues Feld.`,
          objectionBy: 'Sean Carroll',
          answer: `Das setzt voraus, dass jede Verursachung physikalische Verursachung ist – das ist die Streitfrage. Eine Auswahl zwischen quantenmechanisch offenen Ergebnissen überträgt keine Energie und braucht kein neues Teilchen. Und Gottes Erhalten der Welt ist ohnehin keine Kraft neben anderen Kräften, sondern der Grund, dass es Felder und Kräfte überhaupt gibt.`,
          followUps: [
            {
              id: 'dekohaerenz-tegmark',
              objection: `Quanteneffekte im warmen, nassen Gehirn sind widerlegt. Tegmark hat gezeigt, dass Dekohärenz alle Überlagerungen sofort zerstört.`,
              objectionBy: 'Max Tegmark',
              answer: `Tegmark hat ein bestimmtes Modell kritisiert – Quantenberechnungen in Mikrotubuli nach Penrose und Hameroff. Dekohärenz erklärt, warum Überlagerungen klassisch *aussehen*, aber nicht, welches Ergebnis tatsächlich eintritt; das ist das ungelöste Messproblem. Ich gebe zu: Wie Geist und Gehirn genau zusammenwirken, ist offen und spekulativ. Aber die Geschlossenheitsthese ist es ebenso.`,
              followUps: [
                {
                  id: 'keine-evidenz-seele',
                  objection: `Also gibst du zu: Es gibt keine Evidenz für eine Einwirkung der Seele auf das Gehirn.`,
                  objectionBy: 'Sean Carroll',
                  answer: `Es gibt keine Messung einer „Seelenkraft" – die erwarte ich auch nicht. Die Evidenz für den Geist ist von anderer Art: Bewusstsein, Bedeutung, Begründen, freies Abwägen. Diese kennen wir unmittelbarer als jede physikalische Theorie – denn jede Theorie, auch deine, setzt voraus, dass wir Gründe erfassen und nach ihnen urteilen können.`,
                  detail: `Siehe die Claims „Bewusstsein lässt sich materialistisch erklären" und „Die Evolution hat uns verlässliche Vernunft gegeben".`,
                  followUps: [
                    {
                      id: 'bewusstsein-belegt-keine-seele',
                      objection: `Bewusstsein ist Evidenz für Bewusstsein – nicht für eine Seele. Dass wir erleben und denken, bestreitet niemand. Daraus folgt aber keine immaterielle Substanz, die irgendwo im Gehirn sitzt.`,
                      objectionBy: 'Sean Carroll',
                      answer: `Richtig, aus der bloßen Tatsache des Erlebens folgt noch keine bestimmte Theorie. Die Frage ist, welche Theorie die Merkmale des Geistes am besten erklärt: die Einheit des Bewusstseins (ich erlebe Farbe, Ton und Gedanke als *ein* Subjekt), die Bezogenheit der Gedanken auf etwas (Intentionalität) und vor allem das Begründen – dass ich etwas glaube, *weil* es aus Gründen folgt, nicht nur, weil Neuronen feuern. Und übrigens: Die orthodoxe Lehre stellt sich die Seele nicht als Gespenst vor, das „irgendwo im Gehirn sitzt". Der Mensch ist eine Einheit aus Seele und Leib; die Seele ist sein Lebensprinzip, nicht ein Fremdkörper.`,
                      detail: `Swinburne argumentiert, dass ein und dasselbe Subjekt mentaler Ereignisse nicht mit einer Ansammlung physischer Teile identisch sein kann, weil bei jeder Aufteilung des Gehirns die Frage offenbleibt, wer „ich" bin. C. S. Lewis' „Argument aus der Vernunft" zielt darauf, dass rationales Schließen nicht vollständig durch blinde physikalische Ursachen erklärt werden kann, ohne sich selbst zu untergraben. Für die koptisch-orthodoxe Anthropologie ist entscheidend: Gott schuf den Menschen als beseelten Leib (1 Mo 2,7); der Tod trennt Seele und Leib vorübergehend, und die Auferstehung vereint sie wieder. Das ist keine cartesische Zwei-Dinge-Lehre, sondern eine Lehre von der Einheit des Menschen.`,
                      voices: [
                        { person: 'swinburne', role: 'als Philosoph des Geistes', text: `Swinburne vertritt in *Mind, Brain, and Free Will* (2013) einen Substanzdualismus: Die Tatsachen über mentale Ereignisse und darüber, wer sie hat, lassen sich nicht aus den Tatsachen über physische Ereignisse ableiten. Daraus folgt für ihn, dass der Mensch aus zwei Teilen besteht – einem Leib und einer Seele –, wobei die Seele der wesentliche Träger der personalen Identität ist.` },
                      ],
                      questionsBack: [`Wenn deine Überzeugungen vollständig durch blinde physikalische Ursachen entstehen – was macht sie dann wahr statt nur verursacht?`],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'kim-exklusion',
      objection: `Kims Exklusionsargument: Wenn jedes Gehirnereignis schon eine hinreichende physikalische Ursache hat, bleibt für mentale Ursachen nichts zu tun. Sie sind überflüssig.`,
      objectionBy: 'Jaegwon Kim',
      targetsPremise: 1,
      answer: `Das Argument hat die kausale Geschlossenheit als Prämisse – es setzt voraus, was zu beweisen wäre. Wer die Geschlossenheit nicht annimmt, ist vom Argument nicht betroffen. Bemerkenswert: Kim selbst hat daraus gefolgert, dass der „weiche" Physikalismus nicht haltbar ist, und am Ende einen nicht reduzierbaren Rest des Bewusstseins eingeräumt.`,
      followUps: [
        {
          id: 'epiphaenomenalismus-oder-reduktion',
          objection: `Dann bleibt dir nur: Entweder ist Bewusstsein ein wirkungsloses Nebenprodukt, oder es ist mit Gehirnprozessen identisch. Dualismus ist keine Option.`,
          objectionBy: 'Daniel Dennett',
          answer: `Ein wirkungsloses Bewusstsein untergräbt sich selbst: Dann wären auch unsere Überzeugungen über das Bewusstsein nicht durch das Bewusstsein verursacht – wir redeten über etwas, das unser Reden nicht beeinflusst. Und die Identitätsthese steht vor dem „schweren Problem": Warum fühlt sich irgendetwas überhaupt nach etwas an? Dualismus ist nur ausgeschlossen, wenn man die Geschlossenheit schon voraussetzt.`,
          followUps: [
            {
              id: 'identitaetstheorie',
              objection: `Dann nehme ich die Identität: Mentale Zustände *sind* Gehirnzustände. Damit sind sie kausal wirksam – ganz physikalisch –, und es gibt weder Überdetermination noch Epiphänomenalismus.`,
              objectionBy: 'Daniel Dennett',
              answer: `Die Identitätstheorie hat einen hohen Preis: Sie muss erklären, wie das Erleben von Rot, der Schmerz oder die Bedeutung eines Gedankens *dasselbe* sein kann wie elektrochemische Vorgänge, die man vollständig beschreiben kann, ohne je von Erleben zu sprechen. Bemerkenswert ist, dass ausgerechnet Jaegwon Kim, der Urheber des Exklusionsarguments, am Ende zugestand: Die Erlebnisqualitäten lassen sich nicht funktional reduzieren. Er nannte seine Position deshalb nur noch einen Physikalismus, der „nahe genug" ist.`,
              detail: `Kim zog in *Physicalism, or Something Near Enough* (2005) die Konsequenz: Intentionale Zustände lassen sich vielleicht funktional reduzieren, die Qualia aber nicht; sie bleiben als „mentaler Rest" bestehen. Damit gesteht einer der schärfsten Verteidiger des Physikalismus zu, dass der Physikalismus das Bewusstsein nicht vollständig erfasst. Leibniz' Mühlengleichnis bringt das Problem auf den Punkt: Wenn man durch ein Gehirn wie durch eine Mühle ginge, sähe man nur Teile, die einander stoßen – nirgends ein Erleben.`,
              sources: [{ kind: 'fachliteratur', author: 'Jaegwon Kim', work: 'Physicalism, or Something Near Enough', year: '2005', quote: `Qualia ließen sich nicht funktional reduzieren und blieben als „mentaler Rest"; der Physikalismus sei daher nicht ganz, sondern nur „nahe genug" wahr.`, status: 'paraphrase', note: 'Kim war Physikalist; sein Zugeständnis wiegt deshalb schwer.' }],
              questionsBack: [`Kannst du einen Gehirnvorgang vollständig beschreiben, ohne das Erleben zu erwähnen? Wenn ja – wie kann er dann mit dem Erleben identisch sein?`],
              followUps: [
                {
                  id: 'illusionismus',
                  objection: `Die Qualia, auf die du dich berufst, gibt es nicht. Das Bewusstsein, wie es dir erscheint, ist eine nützliche Illusion, die das Gehirn von sich selbst erzeugt. Ist das erklärt, bleibt nichts übrig.`,
                  objectionBy: 'Daniel Dennett / Keith Frankish',
                  answer: `Eine Illusion ist etwas, das jemandem *erscheint*. Wer sagt, mein Erleben sei eine Illusion, setzt voraus, dass es mir so erscheint – und genau dieses Erscheinen ist das Bewusstsein, das erklärt werden soll. Man kann sich über *was* man erlebt täuschen, aber nicht darüber, *dass* man erlebt. Selbst der säkulare Philosoph Galen Strawson hat die Leugnung des Bewusstseins als eine der seltsamsten Thesen der Philosophiegeschichte bezeichnet.`,
                  detail: `Der Illusionismus ist eine ernsthafte Position (Dennett, *Consciousness Explained*, 1991; Frankish 2016) und zeigt, wie weit man gehen muss, um den Physikalismus konsequent zu halten. Strawson – Naturalist, aber kein Physikalist im reduktiven Sinn – hält dagegen, dass bewusstes Erleben das Einzige ist, dessen Existenz wir mit Gewissheit kennen. Für den Laien gilt: Wenn das Gegenüber das Bewusstsein für eine Illusion erklärt, hat es die kausale Geschlossenheit nicht bewiesen, sondern ihren Preis offengelegt.`,
                  sources: [{ kind: 'fachliteratur', author: 'Galen Strawson', work: '„The Consciousness Deniers", The New York Review of Books', year: '2018', quote: `Die Leugnung der Existenz bewussten Erlebens sei eine der seltsamsten Thesen, die je vertreten wurden; Bewusstsein sei das Gewisseste, was wir kennen.`, status: 'paraphrase', note: 'Strawson ist kein Theist.' }],
                  questionsBack: [`Wem erscheint die Illusion des Bewusstseins – und ist dieses Erscheinen nicht selbst Bewusstsein?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'gott-verletzt-geschlossenheit',
      objection: `Ein Gott, der in die Welt eingreift, verletzt die kausale Geschlossenheit genauso. Deshalb ist der Theismus mit der Physik unvereinbar.`,
      objectionBy: 'Sean Carroll',
      answer: `Der Theismus bestreitet die Geschlossenheit – richtig. Die Frage ist, ob die Physik sie beweist. Das tut sie nicht: Ihre Gesetze sagen, was geschieht, wenn nichts von außen einwirkt. Und Gottes erhaltendes Wirken konkurriert nicht mit physikalischen Ursachen; er ist die Erstursache, durch die alle Zweitursachen überhaupt wirken.`,
      followUps: [
        {
          id: 'papineau-induktion',
          objection: `Die Wissenschaftsgeschichte zeigt: Jede vermeintliche Lücke wurde physikalisch geschlossen – Lebenskraft, Geister, Äther. Induktiv ist die Geschlossenheit hervorragend gestützt.`,
          objectionBy: 'David Papineau',
          targetsPremise: 2,
          answer: `Die Wissenschaft hat dort, wo sie nach physikalischen Ursachen suchte, physikalische Ursachen gefunden – das zeigt, dass die Methode funktioniert, nicht, dass es nichts anderes gibt. Und manche Lücken sind größer geworden: Bewusstsein, Ursprung des Lebens, Feinabstimmung. Vor allem aber: Auf welche Physik stützt sich die Induktion – auf die heutige, die nachweislich unvollständig ist?`,
          followUps: [
            {
              id: 'hempel-spitzfindig',
              objection: `Hempels Dilemma ist eine Spitzfindigkeit. Wir wissen sehr gut, was „physikalisch" heißt: das, was Physiker untersuchen.`,
              objectionBy: 'Sean Carroll',
              targetsPremise: 3,
              answer: `Dann gilt: Wenn Physiker eines Tages Bewusstsein als fundamentale Größe in ihre Theorien aufnehmen – und manche Philosophen wie Philip Goff schlagen genau das vor –, dann ist der Geist „physikalisch", und die Geschlossenheit schließt ihn nicht mehr aus. Deine These lebt davon, dass „physikalisch" heimlich „nicht geistig" bedeutet. Das ist eine Vorentscheidung, kein Ergebnis.`,
              sources: [{ kind: 'fachliteratur', author: 'Philip Goff', work: 'Galileo’s Error: Foundations for a New Science of Consciousness', year: '2019', quote: `Die Physik beschreibt nur die Struktur und Dynamik der Materie, nicht ihre innere Natur; Bewusstsein könnte eine fundamentale Eigenschaft sein.`, status: 'paraphrase', note: 'Goff ist kein christlicher Apologet; er vertritt einen Panpsychismus.' }],
              followUps: [
                {
                  id: 'panpsychismus-statt-gott',
                  objection: `Dann nehmen wir eben den Panpsychismus: Bewusstsein ist eine fundamentale Eigenschaft der Materie. Das erklärt den Geist naturalistisch – ganz ohne Gott und ohne Seele.`,
                  objectionBy: 'Philip Goff',
                  answer: `Der Panpsychismus ist ein bemerkenswertes Zugeständnis: Er gibt zu, dass die Physik nur beschreibt, was Materie *tut*, nicht, was sie *ist* – und dass der klassische Materialismus das Bewusstsein nicht erklärt. Damit ist die „kausale Geschlossenheit" im materialistischen Sinn aufgegeben. Allerdings hat der Panpsychismus ein bekanntes Problem: Wie sollen sich Billionen winziger „Bewusstseinsfunken" zu *einem* einheitlichen Ich zusammensetzen? Dieses Kombinationsproblem ist ungelöst – und es ist genau die Einheit des Bewusstseins, die für ein geistiges Subjekt spricht.`,
                  detail: `Goff vertritt in *Galileo’s Error* (2019) einen Panpsychismus im Anschluss an Bertrand Russell und Arthur Eddington: Die Physik erfasst nur die strukturellen, mathematischen Eigenschaften der Materie; ihr innerer Charakter könnte Erleben sein. Goff hat sich später für die Möglichkeit eines kosmischen Geistes geöffnet. Für das Gespräch zeigt das: Wer das Bewusstsein ernst nimmt, verlässt den einfachen Materialismus – die Frage ist nur noch, wohin.`,
                  sources: [{ kind: 'gegner', author: 'Philip Goff', work: 'Galileo’s Error: Foundations for a New Science of Consciousness', year: '2019', quote: `Die Physik beschreibe nur die Struktur und das Verhalten der Materie, nicht ihre innere Natur; diese könnte aus Bewusstsein bestehen.`, status: 'paraphrase' }],
                  questionsBack: [`Wie setzen sich Milliarden winziger Bewusstseinsfunken zu einem einzigen Ich zusammen, das jetzt diesen Satz versteht?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'libet-vorentscheidung',
      objection: `Die Neurowissenschaft zeigt doch: Das Gehirn entscheidet, bevor wir es bewusst merken (Libet). Der Geist ist nur Zuschauer.`,
      objectionBy: 'Sam Harris',
      answer: `Libet selbst hielt am bewussten „Veto" fest. Und neuere Arbeiten (Schurger, Sitt und Dehaene, *PNAS* 2012) deuten das Bereitschaftspotenzial als Anhäufung neuronalen Hintergrundrauschens, nicht als unbewusste Entscheidung. Libets Versuche betrafen zudem willkürliche Fingerbewegungen ohne Gründe – nicht das Abwägen von Gründen, um das es bei Freiheit eigentlich geht.`,
      sources: [{ kind: 'wissenschaft', author: 'Aaron Schurger, Jacobo D. Sitt & Stanislas Dehaene', work: '„An Accumulator Model for Spontaneous Neural Activity Prior to Self-Initiated Movement", Proceedings of the National Academy of Sciences 109', year: '2012', quote: `Das Bereitschaftspotenzial lässt sich als Anstieg spontaner neuronaler Fluktuationen erklären, nicht als Ausdruck einer bereits gefallenen unbewussten Entscheidung.`, status: 'paraphrase' }],
      detail: `Ausführlich im Claim „Libets Experimente beweisen, dass der freie Wille eine Illusion ist".`,
    },
  ],
  questionsToAsk: [
    `Ist die kausale Geschlossenheit ein Messergebnis oder eine philosophische Annahme?`,
    `Auf welche Physik bezieht sich die These – die heutige, unvollständige, oder eine künftige, unbekannte?`,
    `Hat jemand das Verhalten eines Gehirns aus den Grundgleichungen der Physik berechnet?`,
    `Wenn dein Bewusstsein nichts bewirkt – wie kann dann dein Nachdenken über diese Frage dein Reden beeinflussen?`,
    `Gilt der Energieerhaltungssatz auch für Systeme, die nicht abgeschlossen sind?`,
  ],
  avoid: [
    `„Die Quantenmechanik beweist die Seele." – Sie lässt Raum, beweist aber nichts dergleichen.`,
    `Die Seele als „Geist in der Maschine" darstellen, der wie ein Gespenst Knöpfe drückt. Die orthodoxe Anthropologie denkt den Menschen als Einheit aus Leib und Seele.`,
    `Die Erfolge der Neurowissenschaft kleinreden. Gehirn und Geist hängen eng zusammen; das ist kein Problem für den Glauben.`,
  ],
  concessions: [
    `Es gibt keinen empirischen Nachweis einer besonderen „Seelenkraft" im Gehirn; wie Geist und Gehirn zusammenwirken, ist eine offene Frage.`,
    `Die Core Theory ist in ihrem Gültigkeitsbereich außerordentlich gut bestätigt.`,
    `Viele Philosophen und Wissenschaftler halten die kausale Geschlossenheit für plausibel; sie ist eine ernst zu nehmende Position.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Alvin Plantinga', work: 'Where the Conflict Really Lies', year: '2011', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Richard Swinburne', work: 'Mind, Brain, and Free Will', year: '2013', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Robin Collins', work: '„Modern Physics and the Energy-Conservation Objection to Mind-Body Dualism", American Philosophical Quarterly 45', year: '2008', status: 'paraphrase' },
    { kind: 'gegner', author: 'Sean Carroll', work: 'The Big Picture', year: '2016', status: 'paraphrase' },
  ],
  difficulty: 3,
  tags: ['kausale Geschlossenheit', 'Core Theory', 'Dualismus', 'Kim', 'Hempels Dilemma', 'Energieerhaltung'],
  related: [
    'naturalismus/bewusstsein-materiell-erklaerbar',
    'naturalismus/nur-materie',
    'neurowissenschaften/geist-gleich-gehirn',
    'neurowissenschaften/libet-experimente',
    'willensfreiheit/freier-wille-illusion',
    'physik/wunder-verletzen-naturgesetze',
    'physik/quanten-ohne-ursache',
  ],
};

export default claim;
