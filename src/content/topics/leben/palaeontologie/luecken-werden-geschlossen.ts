import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'luecken-werden-geschlossen',
  title: `„Die Lücken im Fossilbericht werden ständig geschlossen."`,
  proponents: [
    { name: 'Donald Prothero', role: 'Paläontologe', work: 'Evolution: What the Fossils Say and Why It Matters (2007, 2. Aufl. 2017)' },
    { name: 'Michael J. Benton', role: 'Paläontologe, University of Bristol', work: 'Benton, Wills & Hitchin, „Quality of the fossil record through time", Nature 403 (2000)' },
    { name: 'Kevin Padian', role: 'Paläontologe, UC Berkeley; Sachverständiger im Dover-Prozess', work: 'Arbeiten zum Ursprung der Vögel und zur Qualität des Fossilberichts' },
    { name: 'Neil Shubin', role: 'Paläontologe, University of Chicago', work: 'Your Inner Fish (2008)' },
    { name: 'Jerry A. Coyne', role: 'Evolutionsbiologe, University of Chicago', work: 'Why Evolution Is True (2009)' },
  ],
  steelman: `Zu Darwins Zeit war der Fossilbericht dürftig; Darwin selbst nannte seine Unvollständigkeit den schwersten Einwand gegen seine Theorie. Heute kennen wir Hunderttausende fossile Arten, und laufend kommen neue hinzu: gefiederte Dinosaurier, Fisch-Tetrapoden, frühe Wale, Homininen, Ediacara-Tiere. Fast jedes Jahr wird eine weitere Übergangsform beschrieben. Studien zur Qualität des Fossilberichts zeigen, dass die Reihenfolge der Fossilien in den Schichten gut mit den aus Anatomie und Genetik rekonstruierten Stammbäumen übereinstimmt (Benton et al. 2000) – der Bericht ist also gut genug, um die großen Muster zu zeigen. Dass Lücken bleiben, ist bei den extrem seltenen Bedingungen der Fossilisation unvermeidlich. Wer auf Lücken setzt, betreibt eine Rückzugsstrategie: Jede neue Entdeckung verkleinert den Raum für einen „Gott der Lücken".`,
  biblical: {
    summary: `Die Schrift ermutigt zur Erforschung der Schöpfung: „Groß sind die Werke des HERRN; wer ihrer achtet, der hat eitel Lust daran" (Ps 111,2). Zugleich mahnt sie zur Demut: „Wo warst du, da ich die Erde gründete?" (Hiob 38,4). Der christliche Glaube hängt nicht an Lücken in unserem Wissen. Gott ist nicht der Lückenfüller zwischen bekannten Fossilien, sondern Schöpfer und Erhalter der ganzen Geschichte des Lebens – der dokumentierten wie der undokumentierten.`,
    sources: [
      { kind: 'bibel', work: 'Psalmen', ref: '111,2', translation: 'Luther 1912', status: 'verbatim', quote: `Groß sind die Werke des HERRN; wer ihrer achtet, der hat eitel Lust daran.` },
      { kind: 'bibel', work: 'Hiob', ref: '38,4', translation: 'Luther 1912', status: 'verbatim', quote: `Wo warst du, da ich die Erde gründete? Sage an, bist du so klug!` },
    ],
  },
  church: {
    summary: `Augustinus warnte Christen eindringlich davor, über naturkundliche Fragen Unsinn zu reden und sich dabei auf die Schrift zu berufen – das mache den Glauben vor Ungläubigen lächerlich. Diese Mahnung gilt auch für den Umgang mit dem Fossilbericht: Christen sollten ihn kennen, ehrlich darstellen und keine Argumente verwenden, die auf veralteten Kenntnissen beruhen. Die koptische Kirche hat kein Dogma über die Erdgeschichte; sie bekennt Gott als Ursprung aller Lebensformen.`,
    sources: [
      { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'Über den Wortlaut der Genesis (De Genesi ad litteram)', ref: 'I,19,39', status: 'paraphrase', quote: `Es ist schändlich und verderblich, wenn ein Ungläubiger einen Christen über Erde, Himmel und Naturdinge Unsinn reden hört, der sich dabei auf die Schrift beruft.` },
    ],
  },
  opposingView: {
    summary: `Seit Darwin ist der Fossilbericht enorm gewachsen, und zahlreiche Fossilien mit intermediären Merkmalen zwischen Großgruppen wurden gefunden. Studien zur Übereinstimmung von Stratigraphie und Stammbäumen (Benton et al. 2000) zeigen, dass der Bericht die großen Muster recht zuverlässig wiedergibt. Zugleich hat die Paläontologie selbst ein wiederkehrendes Muster beschrieben, das sich mit wachsender Datenmenge nicht aufgelöst hat: **abruptes Auftreten neuer Formen, gefolgt von langer Stasis**. Um es zu erklären, entwickelten Niles Eldredge und Stephen Jay Gould 1972 das Modell des „unterbrochenen Gleichgewichts" (punctuated equilibrium). Weitere Beispiele abrupter Diversifizierung sind die kambrische Explosion, das rasche Auftreten der Blütenpflanzen (Darwins „abscheuliches Rätsel") und die schnelle Radiation von Vögeln und Säugetieren nach dem Aussterben der Dinosaurier.`,
    sources: [
      { kind: 'gegner', author: 'Stephen Jay Gould', work: '„Evolution\'s erratic pace", Natural History 86 (5)', year: '1977', status: 'verbatim', quote: `Die extreme Seltenheit von Übergangsformen im Fossilbericht bleibt das Berufsgeheimnis der Paläontologie.`, original: `The extreme rarity of transitional forms in the fossil record persists as the trade secret of paleontology.`, translation: 'eigene Übersetzung', note: 'Gould war Evolutionist und meinte die Ebene der Arten; er wehrte sich später ausdrücklich gegen kreationistischen Missbrauch dieses Zitats (Discover 1981). Nur mit diesem Hinweis verwenden!' },
      { kind: 'wissenschaft', author: 'Niles Eldredge, Stephen Jay Gould', work: '„Punctuated equilibria: an alternative to phyletic gradualism", in: T. J. M. Schopf (Hg.), Models in Paleobiology', ref: 'S. 82–115', year: '1972', status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'Michael J. Benton, Matthew A. Wills, Rebecca Hitchin', work: '„Quality of the fossil record through time", Nature 403', ref: 'S. 534–537', year: '2000', status: 'paraphrase', quote: `Die Übereinstimmung zwischen stratigraphischer Abfolge und Stammbäumen ist hoch und hat sich über die Erdzeitalter nicht wesentlich verschlechtert.` },
      { kind: 'gegner', author: 'David M. Raup', work: '„Conflicts between Darwin and paleontology", Field Museum of Natural History Bulletin 50 (1)', ref: 'S. 22–29', year: '1979', status: 'paraphrase', quote: `Rund 120 Jahre nach Darwin und bei stark erweitertem Fossilwissen sei der Bericht noch immer „ruckartig"; manche klassische Übergangsreihe (wie die des Pferdes) habe man sogar revidieren müssen.`, note: 'Raup war Evolutionist; er wollte zeigen, dass der Fossilbericht nicht der gradualistischen Erwartung entspricht, nicht dass Evolution falsch sei.' },
    ],
  },
  quickAnswer: `Ja, es werden laufend neue Fossilien gefunden, auch solche mit intermediären Merkmalen – das gestehe ich zu. Aber das Grundmuster, das schon Darwin beunruhigte, hat sich nicht aufgelöst: Neue Formen erscheinen meist abrupt und bleiben dann lange unverändert. Gould und Eldredge entwickelten genau deshalb das Modell des „unterbrochenen Gleichgewichts". Und Benton zeigte, dass der Fossilbericht für große Muster zuverlässig ist – dann ist aber auch das wiederkehrende Muster abrupter Ursprünge ernst zu nehmen.`,
  keyPoints: [
    `**Neue Funde – zugestanden.** Der Fossilbericht ist seit Darwin enorm gewachsen, inklusive Mosaikformen zwischen Großgruppen.`,
    `**Das Muster bleibt:** abruptes Auftreten und lange Stasis – deshalb das Modell des „unterbrochenen Gleichgewichts" (Eldredge & Gould 1972).`,
    `**Das Argument schneidet in beide Richtungen:** Wenn der Bericht gut genug ist, um die Reihenfolge zu zeigen (Benton 2000), ist er auch gut genug, um das wiederholte Fehlen gradueller Vorstufen ernst zu nehmen.`,
    `**Abrupte Ursprünge sind wiederkehrend:** kambrische Explosion, Blütenpflanzen, rasche Radiation von Vögeln und Säugetieren.`,
    `**Kein Lückenbüßer-Glaube:** Gott ist Schöpfer der ganzen Geschichte, nicht nur ihrer Lücken. Die Design-Frage betrifft die Information, nicht die Zahl der Fossilien.`,
  ],
  voices: [
    {
      person: 'bechly',
      role: 'als Paläontologe',
      text: `Bechly, der als Kurator viele neue fossile Arten beschrieben hat, kennt den Fortschritt der Paläontologie aus erster Hand. Gerade deshalb betont er, dass sich das Muster abrupter Ursprünge mit wachsender Datenmenge nicht verflüchtigt hat: Viele Großgruppen erscheinen plötzlich, oft in geologisch kurzer Zeit nach einer Umweltkrise, und verändern sich danach kaum. Er sieht darin ein durchgängiges Merkmal der Erdgeschichte, das mit dem populationsgenetischen Wartezeitproblem zusammen gedacht werden muss.`,
      sources: [
        { kind: 'fachliteratur', author: 'Günter Bechly', work: 'Beiträge zu „abrupten Ursprüngen" im Fossilbericht (evolutionnews.org; Vorträge)', status: 'unverified', note: 'Konkrete Fundstellen vor Zitierung heraussuchen.' },
      ],
    },
    {
      person: 'stephen-meyer',
      role: 'als Wissenschaftsphilosoph',
      text: `Meyer verweist auf Studien, die die Vollständigkeit des Fossilberichts statistisch untersuchen. Wenn die bekannte morphologische Vielfalt einer Gruppe durch neue Funde kaum noch erweitert wird, spricht das dafür, dass die großen Lücken real und nicht bloß Sammelartefakte sind. Für ihn verlagert sich die Frage damit vom Fossilbericht auf die Entstehung der Information, die neue Baupläne erfordern.`,
      sources: [
        { kind: 'fachliteratur', author: 'Stephen C. Meyer', work: "Darwin's Doubt", ref: 'Kap. 3–4', year: '2013', status: 'paraphrase' },
        { kind: 'wissenschaft', author: 'Mike Foote', work: '„Sampling, taxonomic description, and our evolving knowledge of morphological diversity", Paleobiology 23 (2)', year: '1997', status: 'paraphrase', note: 'Von Meyer herangezogen; Foote ist kein ID-Vertreter. Genaue Aussage vor Verwendung prüfen.' },
      ],
    },
    {
      person: 'casey-luskin',
      role: 'als Geologe und Wissenschaftskommunikator',
      text: `Luskin weist darauf hin, dass populäre Darstellungen neue Funde oft als „Schließen der Lücke" feiern, während die Fachliteratur nüchterner ist: Viele Funde werden als Seitenzweige eingeordnet, Datierungen verschieben sich, und manche Funde schaffen neue Rätsel – etwa Tetrapoden-Spuren, die älter sind als die vermeintlichen Übergangsformen. Er rät, zwischen dem Wachstum der Daten und der Lösung der Frage nach dem Mechanismus zu unterscheiden.`,
      sources: [
        { kind: 'fachliteratur', author: 'Casey Luskin', work: 'Beiträge zum Fossilbericht (evolutionnews.org)', status: 'unverified', note: 'Einzelne Artikel vor Zitierung heraussuchen.' },
      ],
    },
    {
      person: 'conway-morris',
      role: 'als Paläontologe',
      text: `Conway Morris ist ein Beispiel dafür, dass die Anerkennung abrupter Ereignisse im Fossilbericht nicht nur aus dem Design-Lager kommt: Für die kambrische Explosion betont er, dass es sich um ein reales Ereignis handelt. Er erwartet eine naturalistische Erklärung, sieht aber in der Geschichte des Lebens eine tiefere Ordnung, die mit einem christlichen Schöpfungsverständnis vereinbar ist.`,
      sources: [
        { kind: 'wissenschaft', author: 'Simon Conway Morris', work: '„Darwin\'s dilemma: the realities of the Cambrian ‚explosion‘", Philosophical Transactions of the Royal Society B 361', year: '2006', status: 'paraphrase' },
      ],
    },
    {
      person: 'augustinus',
      role: 'als Kirchenvater',
      text: `Augustinus ermahnt Christen, sich in Naturfragen sachkundig zu machen und nicht mit unhaltbaren Behauptungen den Glauben zu diskreditieren. Für das Gespräch über Fossilien heißt das: neue Funde anerkennen, Zitate korrekt verwenden und nur mit dem argumentieren, was der aktuelle Forschungsstand hergibt. Zugleich lehrt er, dass Gottes Schöpfungshandeln nicht von unserer Kenntnis der Einzelheiten abhängt.`,
      sources: [
        { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'Über den Wortlaut der Genesis (De Genesi ad litteram)', ref: 'I,19,39', status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'tausende-uebergaenge',
      objection: `Seit Darwin wurden Tausende Übergangsformen gefunden. Die Lücken schrumpfen Jahr für Jahr – euer Argument stirbt einen langsamen Tod.`,
      objectionBy: 'Donald Prothero',
      answer: `Es wurden viele Fossilien mit intermediären Merkmalen gefunden, das gestehe ich zu. Aber das Grundmuster ist geblieben: Neue Formen erscheinen meist abrupt und verändern sich danach lange kaum. Genau deshalb haben Eldredge und Gould 1972 das Modell des „unterbrochenen Gleichgewichts" entwickelt – nicht Kreationisten, sondern Evolutionisten, die den Befund ernst nahmen.`,
      followUps: [
        {
          id: 'punktualismus-ist-evolution',
          objection: `Punktualismus ist Evolution – nur in schnellen Schüben. Er passt problemlos zur Theorie.`,
          objectionBy: 'Jerry Coyne',
          answer: `Einverstanden, Gould und Eldredge waren Evolutionisten. Aber ihr Modell räumt ein, was die Daten zeigen: Abruptheit und Stasis. Damit verlagert sich das Problem: Je schneller die Veränderung, desto weniger Generationen stehen für die nötigen genetischen Neuerungen zur Verfügung. Das verschärft das Wartezeitproblem, statt es zu lösen.`,
          followUps: [
            {
              id: 'stasis-stabilisierende-selektion',
              objection: `Stasis erklärt sich einfach durch stabilisierende Selektion. Wenn die Umwelt stabil ist, bleibt auch die Form stabil.`,
              objectionBy: 'Larry Moran',
              answer: `Das ist eine plausible Erklärung für die Stasis, und ich gestehe sie zu. Offen bleibt dann aber die andere Hälfte des Musters: die großen Umbauten in kurzen Fenstern. Wenn Formen Millionen Jahre stabil sind und sich dann rasch grundlegend ändern, braucht es eine Erklärung dafür, wie so viele koordinierte Neuerungen in kurzer Zeit entstehen konnten.`,
            },
          ],
        },
      ],
    },
    {
      id: 'stratigraphie-stimmt',
      objection: `Die Reihenfolge der Fossilien in den Schichten stimmt sehr gut mit den Stammbäumen überein – das zeigte Benton 2000. Der Fossilbericht ist gut genug.`,
      objectionBy: 'Kevin Padian',
      answer: `Ein gutes Argument – und es schneidet in beide Richtungen. Wenn der Fossilbericht gut genug ist, um die große Reihenfolge zuverlässig zu zeigen, dann ist er auch gut genug, um das wiederholte Fehlen gradueller Vorstufen ernst zu nehmen, etwa vor der kambrischen Explosion. Man kann den Bericht nicht für die Reihenfolge als zuverlässig und für die Lücken als unzuverlässig erklären.`,
      followUps: [
        {
          id: 'nur-ein-prozent-fossilisiert',
          objection: `Nur ein winziger Bruchteil aller Arten ist überhaupt fossil erhalten. Lücken bei einzelnen Arten sind unvermeidlich.`,
          objectionBy: 'Donald Prothero',
          answer: `Für einzelne Arten stimmt das, und ich erwarte keine lückenlose Artenfolge. Aber das Problem betrifft das systematische Muster über viele Gruppen hinweg – auch bei Meerestieren mit Hartschalen, die den besten Fossilbericht überhaupt haben. Wenn dort ebenfalls abruptes Auftreten und Stasis vorherrschen, ist das kein Zufall der Erhaltung mehr.`,
        },
      ],
    },
    {
      id: 'luecken-strategie',
      objection: `ID ist eine Lücken-Strategie. Jede neue Entdeckung verkleinert den Raum für euren Designer.`,
      objectionBy: 'Jerry Coyne',
      answer: `Der christliche Gott ist kein Lückenfüller zwischen Fossilien, sondern Schöpfer und Erhalter der ganzen Geschichte des Lebens. Und das Design-Argument beruht nicht auf fehlenden Fossilien, sondern auf der Information, die neue Baupläne erfordern. Selbst eine lückenlose Fossilreihe würde zeigen, **dass** sich Formen gewandelt haben – nicht, **wie** die dafür nötige genetische Information entstand.`,
      followUps: [
        {
          id: 'zwei-neue-luecken',
          objection: `Ihr Kreationisten gewinnt doch immer: Findet man ein Fossil zwischen zwei anderen, sagt ihr, jetzt gibt es zwei Lücken statt einer.`,
          objectionBy: 'Richard Dawkins',
          answer: `Das ist eine treffende Satire auf ein schlechtes Argument – und ich verwende es nicht. Jedes neue Fossil mit intermediären Merkmalen ist ein echter Befund. Mein Argument betrifft das Gesamtmuster und vor allem die Frage, ob der vorgeschlagene Mechanismus die beobachteten Umbauten in der verfügbaren Zeit leisten kann.`,
        },
      ],
    },
    {
      id: 'fundorte-vorhergesagt',
      objection: `Wir sagen Fundorte und Zeitfenster voraus und finden dann die Übergangsformen – Tiktaalik ist das beste Beispiel. Das ist Wissenschaft, die funktioniert.`,
      objectionBy: 'Neil Shubin',
      answer: `Die Suche nach Tiktaalik war eine beeindruckende Leistung. Aber kurz darauf zeigten die Zachełmie-Fährten, dass Tetrapoden schon rund 20 Millionen Jahre früher existierten. Die Fossilien passen also nicht immer in die vorhergesagte Reihenfolge; das Zeitfenster der „Vorhersage" war nachträglich betrachtet falsch. Siehe den Claim zu Übergangsformen.`,
      followUps: [
        {
          id: 'geisterlinien-normal-luecken',
          objection: `Solche Verschiebungen sind normal; der Fossilbericht ist eben unvollständig, und Seitenzweige leben oft lange neben ihren Nachkommen.`,
          objectionBy: 'Neil Shubin',
          answer: `Das gestehe ich zu. Aber dann sollte man vorsichtig sein, den Fossilbericht gleichzeitig als Beweis für eine bestimmte Abfolge und als Entschuldigung für fehlende Abfolgen zu verwenden. Beides zugleich macht ihn zu einem sehr dehnbaren Argument.`,
        },
      ],
    },
    {
      id: 'abscheuliches-raetsel-geloest',
      objection: `Darwins „abscheuliches Rätsel" der Blütenpflanzen ist längst gelöst – mit frühen Funden und molekularen Stammbäumen.`,
      objectionBy: 'Donald Prothero',
      answer: `Es gibt große Fortschritte, etwa durch frühe Fossilien und die Stellung von Amborella an der Basis des Stammbaums. Gelöst ist das Rätsel aber nicht: Molekulare Uhren datieren den Ursprung der Blütenpflanzen oft deutlich früher als die Fossilien, und ihre rasche Ausbreitung in der Kreidezeit wird weiterhin diskutiert. Darwins Formulierung trifft das Problem bis heute.`,
      sources: [
        { kind: 'gegner', author: 'Charles Darwin', work: 'Brief an Joseph Dalton Hooker', ref: '22. Juli 1879', year: '1879', status: 'verbatim', quote: `Die rasche Entwicklung aller höheren Pflanzen in jüngerer geologischer Zeit ist, soweit wir urteilen können, ein abscheuliches Rätsel.`, original: `The rapid development as far as we can judge of all the higher plants within recent geological times is an abominable mystery.`, translation: 'eigene Übersetzung' },
      ],
      followUps: [
        {
          id: 'uhren-und-fossilien',
          objection: `Die Diskrepanz zwischen Uhren und Fossilien zeigt nur, dass frühe Blütenpflanzen selten und unauffällig waren.`,
          objectionBy: 'Kevin Padian',
          answer: `Das ist eine mögliche Erklärung – dieselbe wie beim Kambrium. Sie ist aber eine Annahme, die die Abwesenheit von Belegen erklärt, kein Beleg selbst. Wenn dieselbe Hilfsannahme bei vielen großen Ursprüngen nötig ist, wird das wiederkehrende Muster selbst zu einer Frage, die eine Antwort verdient.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Warum entwickelten Gould und Eldredge das Modell des „unterbrochenen Gleichgewichts", wenn die Lücken sich schließen?`,
    `Kann der Fossilbericht zugleich zuverlässig für die Reihenfolge und unzuverlässig für die Lücken sein?`,
    `Würde eine lückenlose Fossilreihe zeigen, wie die nötige genetische Information entstand?`,
    `Warum tritt das Muster abrupten Auftretens auch bei Meerestieren mit dem besten Fossilbericht auf?`,
  ],
  avoid: [
    `Gould (1977) oder Raup (1979) zitieren, ohne zu sagen, dass beide Evolutionisten waren und was sie meinten.`,
    `„Es gibt keine Übergangsformen." – Falsch.`,
    `Mit Zitaten aus den 1970er-Jahren argumentieren, als sei seither nichts gefunden worden.`,
  ],
  concessions: [
    `Seit Darwin wurden zahlreiche Fossilien mit intermediären Merkmalen gefunden, und es kommen laufend neue hinzu.`,
    `Der Fossilbericht gibt die großen Muster der Abfolge recht zuverlässig wieder (Benton et al. 2000).`,
    `Stasis lässt sich plausibel durch stabilisierende Selektion erklären.`,
  ],
  furtherReading: [
    { kind: 'gegner', author: 'Donald R. Prothero', work: 'Evolution: What the Fossils Say and Why It Matters', year: '2017', status: 'paraphrase' },
    { kind: 'wissenschaft', author: 'Niles Eldredge, Stephen Jay Gould', work: '„Punctuated equilibria", in: Models in Paleobiology', year: '1972', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Stephen C. Meyer', work: "Darwin's Doubt", year: '2013', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Fossilbericht', 'Lücken', 'Punktualismus', 'Stasis', 'Gould', 'Blütenpflanzen'],
  related: [
    'palaeontologie/uebergangsformen',
    'palaeontologie/kambrische-explosion-kein-problem',
    'genetik/wartezeitproblem',
    'naturalismus/lueckenbuesser-gott',
  ],
};

export default claim;
