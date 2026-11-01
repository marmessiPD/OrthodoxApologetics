import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'christliche-wissenschaft',
  title: `„Krankheit ist eine Illusion des sterblichen Geistes (Christian Science)."`,
  proponents: [
    { name: 'Mary Baker Eddy', role: 'Gründerin der Christian Science (1821–1910)', work: 'Science and Health with Key to the Scriptures (Wissenschaft und Gesundheit mit Schlüssel zur Heiligen Schrift, 1875)' },
    { name: 'The First Church of Christ, Scientist (Boston)', role: 'Mutterkirche der Christian Science', work: 'Christian Science Journal und Christian Science Sentinel (Heilungszeugnisse)' },
    { name: 'Robert Peel', role: 'Biograf Eddys und Christian Scientist (1909–1992)', work: 'Mary Baker Eddy (3 Bde., 1966–1977)' },
    { name: 'Stephen Gottschalk', role: 'Religionshistoriker und Christian Scientist', work: 'The Emergence of Christian Science in American Religious Life (1973)' },
  ],
  steelman: `Gott ist gut, Gott ist Geist, und Gott ist alles in allem. Ein vollkommen guter Gott kann weder Sünde noch Krankheit noch Tod geschaffen haben. Was Gott nicht geschaffen hat, hat keine wahre Wirklichkeit – es ist eine Täuschung des „sterblichen Gemüts", ein falscher Glaube an die Macht der Materie. Mary Baker Eddy formulierte es in ihrer „wissenschaftlichen Erklärung des Seins": „Es ist kein Leben, keine Wahrheit, keine Intelligenz und keine Substanz in der Materie." Jesus heilte nicht mit Medikamenten, sondern durch geistiges Verständnis – und er gebot seinen Jüngern: „Machet die Kranken gesund" (Mt 10,8). Die frühe Kirche heilte so, bis sie dieses Verständnis verlor. Christian Science stellt das ursprüngliche Christentum wieder her; Tausende dokumentierter Heilungszeugnisse belegen es. Dass der Geist auf den Körper wirkt, zeigt selbst die Medizin mit dem Placebo-Effekt – und die Medizin selbst richtet durch Nebenwirkungen und Fehler erheblichen Schaden an. Christian Scientists sind zudem frei, ärztliche Hilfe in Anspruch zu nehmen; niemand wird gezwungen.`,
  biblical: {
    summary: `Die Bibel lehrt keinen Gott, der „alles" ist, sondern einen Schöpfer, der eine wirkliche, materielle Welt geschaffen und „sehr gut" genannt hat (Gen 1,31). Das Wort Gottes „ward Fleisch" (Joh 1,14) – nicht Schein. Der Auferstandene sagt: „Fühlet mich und sehet; denn ein Geist hat nicht Fleisch und Bein, wie ihr sehet, daß ich habe" (Lk 24,39). Jesus behandelt Krankheit als wirkliches Übel und Werk des Feindes (Lk 13,16), er weint am Grab des Lazarus (Joh 11,35), und der Tod ist „der letzte Feind" (1 Kor 15,26) – kein Irrtum. Die Schrift ehrt Ärzte und Heilmittel: Lukas ist „der Arzt, der Geliebte" (Kol 4,14), Paulus rät Timotheus zu Wein für den Magen (1 Tim 5,23), und das Buch Sirach mahnt: „Ehre den Arzt" (Sir 38,1–15).`,
    detail: `**Jesus und die Materie:** Jesus heilt oft mit materiellen Mitteln – Speichel und Erde (Joh 9,6), Berührung (Mk 1,41), Speichel auf die Zunge (Mk 7,33). Er schickt geheilte Aussätzige zu den Priestern, die damals die Gesundheitsprüfung vornahmen (Lk 17,14). Im Gleichnis vom barmherzigen Samariter lobt er die Behandlung mit Öl und Wein (Lk 10,34).

**Nicht jeder wird geheilt:** Paulus behält seinen „Pfahl im Fleisch" (2 Kor 12,7–9), Trophimus bleibt krank in Milet (2 Tim 4,20), Epaphroditus war „todkrank" (Phil 2,27). Das wäre unverständlich, wenn Krankheit nur ein Irrtum wäre, den rechtes Verständnis sofort auflöst.

**Christus im Fleisch:** „Ein jeglicher Geist, der da bekennt, daß Jesus Christus ist in das Fleisch gekommen, der ist von Gott" (1 Joh 4,2). Johannes bekämpfte schon im 1. Jahrhundert eine Richtung, die das Fleisch Christi für unwirklich hielt.`,
    sources: [
      { kind: 'bibel', work: '1. Mose (Genesis)', ref: '1,31', quote: `Und Gott sah an alles, was er gemacht hatte; und siehe da, es war sehr gut.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '1,14', quote: `Und das Wort ward Fleisch und wohnte unter uns, und wir sahen seine Herrlichkeit.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Lukas', ref: '24,39', quote: `Sehet meine Hände und meine Füße: ich bin's selber. Fühlet mich und sehet; denn ein Geist hat nicht Fleisch und Bein, wie ihr sehet, daß ich habe.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Johannes', ref: '4,2–3', quote: `Ein jeglicher Geist, der da bekennt, daß Jesus Christus ist in das Fleisch gekommen, der ist von Gott; und ein jeglicher Geist, der da nicht bekennt, daß Jesus Christus ist in das Fleisch gekommen, der ist nicht von Gott.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '11,35', quote: `Und Jesus gingen die Augen über.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Korinther', ref: '15,26', quote: `Der letzte Feind, der aufgehoben wird, ist der Tod.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Kolosser', ref: '4,14', quote: `Es grüßt euch Lukas, der Arzt, der Geliebte, und Demas.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Jesus Sirach', ref: '38,1–4', quote: `Ehre den Arzt mit gebührender Verehrung, damit du ihn hast, wenn du ihn brauchst; denn der Herr hat ihn geschaffen. … Der Herr lässt die Arznei aus der Erde wachsen, und ein Vernünftiger verschmäht sie nicht.`, translation: 'sinngemäß nach Luther 1912', status: 'paraphrase', note: 'Deuterokanonisch; in der koptischen Kirche Teil der Schrift.' },
    ],
  },
  church: {
    summary: `Für die koptische Kirche ist die Materie gut und **heiligungsfähig**: Gott wirkt durch Wasser (Taufe), Öl (Myron, Krankensalbung), Brot und Wein (Eucharistie). Die Menschwerdung des Wortes in wirklichem Fleisch ist das Herz des Glaubens – nach dem hl. Kyrill „eine fleischgewordene Natur des Gott-Logos", ohne Vermischung und ohne Trennung. Die Kirche betet für Kranke und salbt sie mit Öl (Jak 5,14–15) – und sie ehrt zugleich die Heilkunst: Unter ihren Heiligen sind die Ärzte-Märtyrer Kyros und Johannes (Abu Kir), die Kranke unentgeltlich behandelten. Der hl. Basilius gründete eines der ersten christlichen Krankenhäuser und lehrte, die Medizin sei eine Gabe Gottes.`,
    detail: `Die Kirche hat die Leugnung der Leiblichkeit schon in ihrer Frühzeit zurückgewiesen. Ignatius von Antiochien schrieb um 110 gegen jene, die sagten, Christus habe nur zum Schein gelitten: Er hat wahrhaft gelitten und ist wahrhaft auferstanden. Irenäus verteidigte gegen die Gnostiker, dass das Fleisch fähig ist, das ewige Leben zu empfangen – es wird durch die Eucharistie genährt und wird auferstehen. Die koptische Liturgie bekennt: „Er nahm Fleisch an aus der heiligen Jungfrau … und machte es eins mit seiner Gottheit." Wer die Wirklichkeit des Leibes leugnet, kann diese Worte nicht mitsprechen.`,
    sources: [
      { kind: 'kirchenvater', author: 'Basilius von Caesarea', work: 'Ausführliche Regeln (Regulae fusius tractatae)', ref: '55', quote: `Die Heilkunst ist uns von Gott gegeben; man soll sie gebrauchen, ohne seine ganze Hoffnung auf sie zu setzen, sondern dankbar gegenüber Gott, der durch sie hilft.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Ignatius von Antiochien', work: 'Brief an die Smyrnäer', ref: '2–3', year: 'um 110', quote: `Er hat wahrhaft gelitten, wie er sich auch wahrhaft auferweckt hat – nicht, wie einige Ungläubige sagen, nur zum Schein.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Adversus Haereses', ref: 'V,2,2–3', quote: `Das Fleisch, das vom Leib und Blut des Herrn genährt wird, ist fähig, das ewige Leben zu empfangen, und wird auferstehen.`, status: 'paraphrase' },
      { kind: 'liturgie', work: 'Liturgie des hl. Basilius (koptisch), Bekenntnis vor der Kommunion', quote: `Er nahm Fleisch aus der Gottesgebärerin an und machte es eins mit seiner Gottheit ohne Vermischung, ohne Vermengung und ohne Verwandlung.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `**Lehre und Geschichte:** Mary Baker Eddy veröffentlichte 1875 *Science and Health* und gründete 1879 in Boston die Church of Christ, Scientist. Nach ihrer Lehre ist Gott unendliches Gemüt (Mind); Materie, Sünde, Krankheit und Tod sind Irrtümer des „sterblichen Gemüts". Heilung geschieht durch geistiges Verständnis, oft unterstützt durch „Practitioners". Eddy unterscheidet zwischen dem Menschen Jesus und „Christus" als der göttlichen Idee. Ob und wie stark sie von dem Heiler Phineas P. Quimby beeinflusst war, bei dem sie 1862 in Behandlung war, ist umstritten. Die Kirche gibt die *Christian Science Monitor* heraus, eine angesehene, mehrfach mit dem Pulitzer-Preis ausgezeichnete Zeitung. Die Mitgliederzahlen sind seit Mitte des 20. Jahrhunderts stark gesunken; die Kirche veröffentlicht keine Zahlen.`,
    detail: `**Kinder und medizinische Vernachlässigung:** Seth Asser und Rita Swan dokumentierten 1998 in der Fachzeitschrift *Pediatrics* 172 Todesfälle von Kindern in den USA (1975–1995) in Familien, die aus religiösen Gründen auf medizinische Behandlung verzichteten – aus verschiedenen Gemeinschaften, darunter Christian Science. In 140 Fällen hätte die Überlebenschance mit medizinischer Behandlung über 90 Prozent gelegen. Rita Swan, selbst frühere Christian Scientist, verlor 1977 ihren Sohn an einer behandelbaren Hirnhautentzündung und gründete die Organisation CHILD. Die Kirche betont heute, dass Mitglieder frei über medizinische Behandlung entscheiden. Caroline Fraser, in einer Christian-Science-Familie aufgewachsen, beschrieb die Kultur des Schweigens über Krankheit und Tod in *God's Perfect Child* (1999).

**Placebo:** Erwartung und Vertrauen beeinflussen subjektive Symptome (Schmerz, Übelkeit) messbar; bei Infektionen, Diabetes oder Krebs ersetzen sie keine Behandlung.`,
    sources: [
      { kind: 'gegner', author: 'Mary Baker Eddy', work: 'Science and Health with Key to the Scriptures', ref: 'S. 468 („wissenschaftliche Erklärung des Seins")', year: '1875 (endgültige Ausgabe 1910)', quote: `Es ist kein Leben, keine Wahrheit, keine Intelligenz und keine Substanz in der Materie. Alles ist unendliches Gemüt und seine unendliche Offenbarwerdung, denn Gott ist Alles-in-allem. Geist ist unsterbliche Wahrheit; Materie ist sterblicher Irrtum.`, original: `There is no life, truth, intelligence, nor substance in matter. All is infinite Mind and its infinite manifestation, for God is All-in-all. Spirit is immortal Truth; matter is mortal error.`, translation: 'eigene Übersetzung', status: 'verbatim' },
      { kind: 'wissenschaft', author: 'Seth M. Asser, Rita Swan', work: 'Child Fatalities From Religion-Motivated Medical Neglect', ref: 'Pediatrics 101/4 (1998), 625–629', year: '1998', quote: `172 Todesfälle von Kindern (1975–1995) bei religiös motiviertem Verzicht auf Medizin; in 140 Fällen hätte die Überlebensrate mit Behandlung über 90 % betragen.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Caroline Fraser', work: 'God\'s Perfect Child: Living and Dying in the Christian Science Church', year: '1999', quote: `Kritische Innensicht einer in Christian Science aufgewachsenen Autorin auf Heilungspraxis und Todesfälle.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Gott hat die Welt nicht als Illusion, sondern als „sehr gut" geschaffen (Gen 1,31) – und das Wort ist wirklich Fleisch geworden (Joh 1,14). Der Auferstandene sagt: „Fühlet mich … ein Geist hat nicht Fleisch und Bein, wie ihr sehet, daß ich habe" (Lk 24,39). Jesus hat Krankheit als echtes Übel bekämpft und am Grab geweint; die Bibel ehrt den Arzt (Kol 4,14; Sir 38). Wir beten für Kranke und gehen zum Arzt – denn beides kommt von Gott.`,
  keyPoints: [
    `**Schöpfung:** Die materielle Welt ist Gottes gutes Werk (Gen 1,31), nicht Irrtum; „Gott ist alles" ist Pantheismus, nicht Bibel.`,
    `**Menschwerdung:** Das Wort ward Fleisch (Joh 1,14); wer Christi Kommen im Fleisch leugnet, widerspricht 1 Joh 4,2–3.`,
    `**Auferstehung:** Der Auferstandene hat „Fleisch und Bein" (Lk 24,39) und isst Fisch – die Materie wird verwandelt, nicht geleugnet.`,
    `**Jesus und Krankheit:** Er heilt oft durch Berührung und Materie (Joh 9,6), weint (Joh 11,35) und nennt den Tod einen Feind (1 Kor 15,26).`,
    `**Gebet und Arzt:** Lukas der Arzt, Sir 38, Basilius' Krankenhaus, die Ärzte-Heiligen Kyros und Johannes.`,
    `**Ernste Folgen:** Kinder starben an behandelbaren Krankheiten (Asser/Swan 1998: 140 von 172 Fällen mit > 90 % Überlebenschance).`,
  ],
  argument: {
    name: 'Das inkarnatorische Argument gegen die Unwirklichkeit der Materie',
    summary: 'Wenn Materie unwirklich wäre, wären Menschwerdung, Kreuz und leibliche Auferstehung Christi bloßer Schein.',
    premises: [
      { text: 'P1: Christian Science lehrt, dass Materie keine Wirklichkeit und keine Substanz hat.', support: `Science and Health, S. 468.`, sources: [{ kind: 'gegner', author: 'Mary Baker Eddy', work: 'Science and Health', ref: 'S. 468', quote: `Es ist … keine Substanz in der Materie.`, status: 'verbatim' }] },
      { text: 'P2: Das Neue Testament bekennt, dass das Wort Fleisch wurde, wirklich litt und mit einem berührbaren Leib auferstand.', support: `Joh 1,14; 1 Joh 4,2–3; Lk 24,39–43; 1 Kor 15,3–8.` },
      { text: 'P3: Wenn das Fleisch unwirklich ist, sind Menschwerdung, Leiden und Auferstehung nur Schein (Doketismus).', support: `Ignatius, Smyrn. 2; Irenäus, Adv. Haer. V,2.` },
    ],
    conclusion: 'Christian Science ist mit dem biblischen Bekenntnis zum fleischgewordenen, gekreuzigten und leiblich auferstandenen Christus unvereinbar.',
  },
  voices: [
    {
      person: 'irenaeus',
      role: 'als Verteidiger der Würde des Fleisches gegen die Gnosis',
      text: `Irenäus stand vor Gegnern, die das Fleisch für unwürdig und unwirklich hielten. Seine Antwort: Wenn das Fleisch nicht gerettet würde, hätte der Herr uns nicht mit seinem Blut erlöst, und der Kelch der Eucharistie wäre nicht Gemeinschaft mit seinem Blut. Das Fleisch, das Gott geschaffen hat, ist fähig, das Leben Gottes zu empfangen. Christian Science wiederholt in neuer Sprache, was die Gnostiker lehrten.`,
      sources: [{ kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Adversus Haereses', ref: 'V,2,2–3', quote: `Das Fleisch ist fähig, das ewige Leben zu empfangen.`, status: 'paraphrase' }],
    },
    {
      person: 'basilius',
      role: 'als Gründer eines der ersten christlichen Krankenhäuser',
      text: `Basilius errichtete um 370 vor den Toren Caesareas eine ganze Stadt der Barmherzigkeit mit Krankenstationen, Herbergen und Pflege – später nach ihm „Basilias" genannt. In seinen Mönchsregeln beantwortet er die Frage, ob der Gebrauch der Medizin mit Frömmigkeit vereinbar sei: Ja, denn Gott hat die Heilkräfte der Natur und die Kunst des Arztes geschenkt. Man soll sie dankbar gebrauchen, ohne die Hoffnung von Gott auf die Medizin zu verlagern.`,
      sources: [{ kind: 'kirchenvater', author: 'Basilius von Caesarea', work: 'Regulae fusius tractatae', ref: '55', quote: `Die Heilkunst als Gabe Gottes.`, status: 'paraphrase' }],
    },
    {
      person: 'kyros-johannes',
      role: 'als Ärzte-Heilige Alexandriens',
      text: `Die koptische Kirche verehrt Abba Kyr (Kyros), einen Arzt aus Alexandrien, und den Soldaten Johannes als Märtyrer und „Anargyroi" – Heilige, die ohne Geld heilten. Ihr Beispiel zeigt, wie die Kirche Gebet und Heilkunst verbindet: Kyros behandelte die Kranken mit seinem ärztlichen Können und führte sie zugleich zum Glauben. Für die koptische Frömmigkeit sind ärztliche Kunst und göttliche Heilung keine Gegensätze.`,
      sources: [{ kind: 'koptisch', work: 'Synaxarium (Gedenken der hll. Abba Kyr und Johannes)', quote: `Der Arzt Kyros heilte unentgeltlich und starb mit Johannes als Märtyrer.`, status: 'paraphrase' }],
    },
    {
      person: 'koenig',
      role: 'als Psychiater und Erforscher von Religion und Gesundheit',
      text: `Koenig hat in jahrzehntelanger Forschung gezeigt, dass gelebter Glaube – Gebet, Gottesdienst, Gemeinschaft – im Durchschnitt mit besserer seelischer und teilweise auch körperlicher Gesundheit zusammenhängt. Gerade er betont aber, dass religiöse Praxis die medizinische Behandlung ergänzen, nicht ersetzen soll. Der Glaube wirkt im Menschen als leib-seelischer Einheit – er setzt die Wirklichkeit des Körpers voraus.`,
      sources: [{ kind: 'wissenschaft', author: 'Harold G. Koenig, Dana E. King, Verna Benner Carson', work: 'Handbook of Religion and Health', year: '2. Aufl. 2012', quote: `Systematische Übersicht über Zusammenhänge zwischen Religiosität und Gesundheit.`, status: 'paraphrase' }],
    },
    {
      person: 'walter-martin',
      role: 'als Analytiker der Christian-Science-Lehre',
      text: `Martin untersuchte *Science and Health* Lehrpunkt für Lehrpunkt und kam zu dem Ergebnis, dass Christian Science trotz christlicher Begriffe die Dreieinigkeit, die Gottheit Jesu als Person, die Wirklichkeit seines Leidens, das stellvertretende Opfer und die leibliche Auferstehung umdeutet. Für ihn ist sie weder christlich noch wissenschaftlich, sondern eine metaphysische Philosophie im Gewand christlicher Sprache.`,
      sources: [{ kind: 'fachliteratur', author: 'Walter Martin', work: 'The Kingdom of the Cults', year: '1965', ref: 'Kapitel „Christian Science"', quote: `Analyse der Lehren Mary Baker Eddys im Vergleich mit der Bibel.`, status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'gott-alles-krankheit-unwirklich',
      objection: `Gott ist vollkommen gut und alles in allem. Ein guter Gott hat keine Krankheit geschaffen. Was Gott nicht geschaffen hat, ist nicht wirklich – also ist Krankheit eine Illusion.`,
      objectionBy: 'Mary Baker Eddy',
      answer: `Dass Gott keine Krankheit geschaffen hat, sagt auch die Kirche. Aber daraus folgt nicht, dass sie unwirklich ist – sie ist die Zerstörung von etwas Gutem, das Gott geschaffen hat. „Gott ist alles" ist Pantheismus, nicht Bibel: Gott hat eine wirkliche, materielle Welt geschaffen und „sehr gut" genannt (Gen 1,31). Und Jesus behandelte Krankheit als wirklichen Feind (Lk 13,16), weinte am Grab (Joh 11,35) und nannte den Tod nicht Irrtum, sondern Feind (1 Kor 15,26).`,
      questionsBack: [`Warum weinte Jesus am Grab des Lazarus, wenn der Tod nur ein Irrtum ist?`],
      followUps: [
        {
          id: 'privation-gleich-illusion',
          objection: `Eure eigenen Kirchenväter sagen doch, das Böse sei „Nichtsein", Mangel an Gutem. Genau das meint Eddy: Krankheit hat kein eigenes Sein.`,
          objectionBy: 'Christian-Science-Apologeten',
          answer: `Mangel ist nicht Illusion. Blindheit ist ein Mangel an Sehkraft – und doch sehr wirklich; man heilt sie nicht, indem man sie leugnet, sondern indem man das Fehlende wiederherstellt. Athanasius sagt, das Böse sei nicht von Gott geschaffen und habe keine eigene Substanz. Aber gerade weil Verderben und Tod den Menschen wirklich ergriffen hatten, nahm das Wort einen wirklichen Leib an, um den Tod in ihm zu besiegen (De Inc. 8–9).`,
          sources: [{ kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'De Incarnatione', ref: '8–9', quote: `Das Wort nahm einen Leib an, der sterben konnte, um den Tod, der die Menschen wirklich beherrschte, durch seinen Tod zu vernichten.`, status: 'paraphrase' }],
          followUps: [
            {
              id: 'jesus-ohne-medizin',
              objection: `Jesus hat ohne Medizin geheilt – allein durch geistige Kraft. So sollen auch wir heilen.`,
              objectionBy: 'Mary Baker Eddy',
              answer: `Jesus heilte mit göttlicher Macht – und oft gerade durch Materie: Er strich Erde mit Speichel auf die Augen des Blinden (Joh 9,6), berührte den Aussätzigen (Mk 1,41) und schickte Geheilte zu den Priestern, die die Gesundheitsprüfung vornahmen (Lk 17,14). Nie sagte er einem Kranken, seine Krankheit sei unwirklich. Und sein Gleichnis vom Samariter lobt ausdrücklich die Behandlung mit Öl und Wein (Lk 10,34).`,
              followUps: [
                {
                  id: 'materie-nur-symbol',
                  objection: `Speichel und Erde waren nur Symbole für die Menschen damals. Die eigentliche Heilung geschah geistig.`,
                  objectionBy: 'Christian-Science-Apologeten',
                  answer: `Symbol *und* Materie – das ist die Logik des Sakraments: Gott wirkt durch Wasser, Öl, Brot und Wein. Christian Science feiert darum auch kein Abendmahl mit Brot und Wein und keine Wassertaufe; sie deutet alles rein geistig um. Die koptische Kirche dagegen glaubt, dass Gott die Materie heiligt, statt sie zu leugnen. Kyrill von Alexandrien betont, dass Christus mit seinem heiligen Fleisch berührte, weil dieses Fleisch als Fleisch des Wortes lebendig macht.`,
                  voices: [{ person: 'kyrill-alexandrien', role: 'als Lehrer des lebenspendenden Fleisches', text: `Kyrill legt die Heilungen Jesu so aus, dass Christus nicht nur durch ein Wort, sondern durch Berührung heilt, um zu zeigen, dass sein eigenes Fleisch – das Fleisch des Wortes – lebenspendende Kraft hat. Darauf beruht auch die Eucharistie: Wer das Fleisch Christi empfängt, empfängt Leben.`, sources: [{ kind: 'kirchenvater', author: 'Kyrill von Alexandrien', work: 'Lukaskommentar', ref: 'zu Lk 4,38–39', quote: `Christus heilt durch Berührung, weil sein heiliges Fleisch als Fleisch des Wortes lebenspendend ist.`, status: 'paraphrase' }] }],
                  questionsBack: [`Warum feiert Christian Science kein Abendmahl mit Brot und Wein, obwohl Jesus sagte: „Das tut zu meinem Gedächtnis"?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'heilungszeugnisse',
      objection: `In unseren Zeitschriften sind seit über hundert Jahren Zehntausende Heilungen bezeugt – mit Namen, Ort und oft mit ärztlicher Diagnose. Das sind Tatsachen.`,
      objectionBy: 'Christian Science Sentinel / Robert Peel',
      answer: `Ich bestreite nicht, dass Gott heilt und Gebet wirkt – die koptische Kirche glaubt an Wunder und salbt Kranke (Jak 5,14). Aber Zeugnisse sind ausgewählt: Wer nicht geheilt wird oder stirbt, schreibt keinen Bericht. Asser und Swan dokumentierten 1998 172 Todesfälle von Kindern in Familien, die aus religiösen Gründen auf Medizin verzichteten; in 140 Fällen hätte die Überlebenschance mit Behandlung über 90 Prozent gelegen. Darum: beten **und** zum Arzt gehen.`,
      followUps: [
        {
          id: 'freie-wahl',
          objection: `Kein Christian Scientist wird gezwungen, auf den Arzt zu verzichten. Die Kirche lässt ihren Mitgliedern die freie Wahl.`,
          objectionBy: 'Kirchensprecher der Christian Science',
          answer: `Das ist die heutige offizielle Position, und ich erkenne sie an. Aber die Lehre selbst erzeugt Druck: Wenn Krankheit ein Irrtum ist und der Gang zum Arzt den Glauben an die Macht der Materie bestärkt, dann ist der Arztbesuch ein Zeichen geistigen Versagens. Caroline Fraser, die in der Christian Science aufwuchs, hat diese Kultur beschrieben. Die eigentliche Frage ist also nicht das Kirchenrecht, sondern die Lehre: Ist Materie wirklich?`,
          followUps: [
            {
              id: 'medizin-schadet-auch',
              objection: `Auch die Medizin tötet – durch Fehler, Nebenwirkungen, falsche Diagnosen. Warum soll man ihr mehr vertrauen?`,
              objectionBy: 'Christian-Science-Apologeten',
              answer: `Medizin macht Fehler, das stimmt. Aber sie misst ihre Ergebnisse, korrigiert sich und kann zeigen, dass ein Kind mit Diabetes oder Hirnhautentzündung mit Behandlung fast immer überlebt und ohne sie oft stirbt. Die Bibel stellt beides nicht gegeneinander: „Ehre den Arzt … denn der Herr hat ihn geschaffen" (Sir 38,1), und Lukas, der Evangelist, war Arzt (Kol 4,14).`,
              followUps: [
                {
                  id: 'sirach-nicht-kanonisch',
                  objection: `Sirach gehört nicht zur Bibel – das ist ein Apokryph. Damit kannst du nichts beweisen.`,
                  objectionBy: 'Christian Scientists (King-James-Bibel)',
                  answer: `Für die koptische Kirche gehört Sirach zur Heiligen Schrift, wie für die ganze Alte Kirche. Aber auch ohne Sirach: Lukas ist „der Arzt, der Geliebte" (Kol 4,14), Paulus rät Timotheus zu Wein „um deines Magens willen" (1 Tim 5,23), und Jesus lobt den Samariter, der Wunden mit Öl und Wein versorgt (Lk 10,34). Kein einziger Vers verbietet ärztliche Hilfe.`,
                  sources: [{ kind: 'bibel', work: '1. Timotheus', ref: '5,23', quote: `Trinke nicht mehr Wasser, sondern brauche ein wenig Wein um deines Magens willen, und daß du oft krank bist.`, translation: 'Luther 1912', status: 'verbatim' }],
                  voices: [{ person: 'lukas', role: 'als Arzt und Evangelist', text: `Lukas, den Paulus „den geliebten Arzt" nennt, berichtet als Evangelist besonders viele Heilungen und beschreibt Krankheiten mit genauen Worten – etwa „hohes Fieber" bei der Schwiegermutter des Petrus (Lk 4,38). Ein Arzt als Evangelist zeigt: Der Glaube an den heilenden Christus und die ärztliche Kunst gehören zusammen.`, sources: [{ kind: 'bibel', work: 'Lukas', ref: '4,38', quote: `Die Schwiegermutter des Simon war mit einem hohen Fieber behaftet.`, status: 'paraphrase' }] }],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'jesus-und-christus',
      objection: `Jesus war der Mensch, der die göttliche Idee – den Christus – vollkommener als alle anderen darstellte. Christus ist die geistige Wahrheit, nicht ein Mensch aus Fleisch.`,
      objectionBy: 'Mary Baker Eddy, Science and Health',
      answer: `Das Neue Testament trennt Jesus und Christus nicht: „Wer ist ein Lügner, wenn nicht, der da leugnet, daß Jesus der Christus sei?" (1 Joh 2,22). Johannes nennt jeden Geist, der nicht bekennt, dass Jesus Christus „in das Fleisch gekommen" ist, „nicht von Gott" (1 Joh 4,3). Die koptische Kirche bekennt mit Kyrill: eine fleischgewordene Natur des Gott-Logos – Gottheit und Menschheit ohne Trennung in der einen Person Christi.`,
      sources: [{ kind: 'gegner', author: 'Mary Baker Eddy', work: 'Science and Health', ref: 'S. 473', quote: `Jesus sei der Name des Menschen, der mehr als alle anderen den Christus, die wahre Idee Gottes, dargestellt habe.`, status: 'paraphrase', note: 'Seitenangabe nach den Standardausgaben; vor wörtlicher Verwendung prüfen.' }],
      followUps: [
        {
          id: 'auferstehung-geistig',
          objection: `Die Auferstehung war die Demonstration, dass die Materie keine Macht über das Leben hat – ein geistiger Sieg, kein biologisches Ereignis.`,
          objectionBy: 'Christian-Science-Apologeten',
          answer: `Der Auferstandene zeigt seine Hände und Füße, lässt sich berühren und isst vor den Jüngern ein Stück gebratenen Fisch (Lk 24,39–43). Das Grab ist leer. Die Auferstehung zeigt nicht, dass die Materie unwirklich ist, sondern dass Gott sie verwandelt und verherrlicht. Paulus' „geistlicher Leib" (1 Kor 15,44) ist ein vom Geist durchdrungener Leib, kein körperloser Geist.`,
          followUps: [
            {
              id: 'blut-unwirksam',
              objection: `Das materielle Blut Jesu war am Kreuz nicht wirksamer, von Sünde zu reinigen, als in seinen Adern. Es geht um seine geistige Botschaft, nicht um Blut.`,
              objectionBy: 'Mary Baker Eddy, Science and Health',
              answer: `Das ist der Kern des Unterschieds. Die Schrift sagt: „Ohne Blutvergießen geschieht keine Vergebung" (Hebr 9,22), und wir sind erlöst „mit dem teuren Blut Christi als eines unschuldigen und unbefleckten Lammes" (1 Petr 1,19). In jeder koptischen Liturgie bekennt der Priester über dem Kelch, dass dies das wahre Blut Christi ist, vergossen zur Vergebung der Sünden. Ohne wirklichen Tod gibt es keine wirkliche Erlösung.`,
              sources: [
                { kind: 'gegner', author: 'Mary Baker Eddy', work: 'Science and Health', ref: 'S. 25', quote: `Das materielle Blut Jesu war nicht wirksamer, von Sünde zu reinigen, als es am „verfluchten Holz" vergossen wurde, als da es in seinen Adern floss.`, original: `The material blood of Jesus was no more efficacious to cleanse from sin when it was shed upon "the accursed tree," than when it was flowing in his veins …`, translation: 'eigene Übersetzung', status: 'unverified', note: 'Vielfach so zitiert; Wortlaut und Seite vor wörtlicher Verwendung an einer autorisierten Ausgabe prüfen.' },
                { kind: 'bibel', work: 'Hebräer', ref: '9,22', quote: `… und ohne Blutvergießen geschieht keine Vergebung.`, translation: 'Luther 1912', status: 'verbatim' },
              ],
              questionsBack: [`Wenn Christi Blut nicht wirksamer war als in seinen Adern – warum musste er dann sterben?`],
            },
          ],
        },
        {
          id: 'doketismus-vorwurf-unfair',
          objection: `Uns mit den Gnostikern oder Doketen zu vergleichen, ist unfair. Wir glauben, dass Jesus wirklich gelebt hat.`,
          objectionBy: 'Christian-Science-Apologeten',
          answer: `Ich will dir nichts unterstellen, und ich freue mich, dass du an den geschichtlichen Jesus glaubst. Aber wenn Materie keine Substanz hat, dann hatte auch sein Leib keine – dann war sein Leiden letztlich ein Irrtum des sterblichen Gemüts. Genau diese Folgerung hat Ignatius schon um 110 abgewehrt: „Er hat wahrhaft gelitten – nicht, wie einige sagen, nur zum Schein." Wie würdest du Jesu Leiden am Kreuz beschreiben – wirklich oder scheinbar?`,
          voices: [{ person: 'ignatius-antiochien', role: 'als Märtyrerbischof gegen den Doketismus', text: `Ignatius, der selbst den Märtyrertod vor Augen hatte, betont gegen die Doketen immer wieder das „wahrhaft": Christus wurde wahrhaft geboren, aß und trank, wurde wahrhaft verfolgt, gekreuzigt und starb, und wurde wahrhaft auferweckt. Wäre sein Leiden nur Schein, fragt Ignatius, wozu wäre er dann selbst bereit, für Christus zu sterben?`, sources: [{ kind: 'kirchenvater', author: 'Ignatius von Antiochien', work: 'Brief an die Trallianer', ref: '9–10', quote: `Christus wurde wahrhaft geboren, wahrhaft verfolgt, wahrhaft gekreuzigt und starb – wäre es nur Schein, wozu dann meine Fesseln?`, status: 'paraphrase' }] }],
        },
      ],
    },
    {
      id: 'placebo-geist',
      objection: `Selbst die Medizin kennt den Placebo-Effekt: Der Geist beeinflusst den Körper. Das bestätigt, dass das Denken die wahre Ursache von Krankheit und Gesundheit ist.`,
      objectionBy: 'Christian-Science-Apologeten',
      answer: `Der Placebo-Effekt ist real – aber begrenzt: Er lindert vor allem subjektive Beschwerden wie Schmerz oder Übelkeit, er heilt keine bakterielle Hirnhautentzündung und keinen Krebs. Und er beweist gerade das Gegenteil von Eddys Lehre: Geist und Körper wirken aufeinander, weil beide wirklich sind. Die Forschung zu Religion und Gesundheit (Koenig) zeigt den Nutzen des Glaubens im Menschen als leib-seelischer Einheit, nicht durch die Leugnung des Körpers.`,
      followUps: [
        {
          id: 'kopten-glauben-wunder',
          objection: `Ihr Kopten glaubt doch selbst an Wunderheilungen durch Gebet und Heilige. Wo ist da der Unterschied?`,
          objectionBy: 'Christian-Science-Apologeten',
          answer: `Wir glauben, dass Gott heilt – manchmal durch Wunder, oft durch Ärzte, immer aus Gnade. Aber Heilung ist für uns Gottes freies Geschenk an einen wirklichen Leib, nicht die Entdeckung, dass der Leib unwirklich ist. Unsere Heiligen Kyros und Johannes waren Ärzte; die Kirche salbt die Kranken mit Öl (Jak 5,14) – Materie im Dienst der Gnade. Und kein Priester würde einem kranken Kind den Arzt verweigern.`,
          sources: [{ kind: 'bibel', work: 'Jakobus', ref: '5,14', quote: `Ist jemand krank, der rufe zu sich die Ältesten von der Gemeinde, daß sie über ihm beten und salben ihn mit Öl in dem Namen des HERRN.`, translation: 'Luther 1912', status: 'verbatim' }],
          voices: [{ person: 'candy-gunther-brown', role: 'als Religionswissenschaftlerin zur Erforschung von Gebetsheilungen', text: `Brown hat Heilungsgebete in Pfingstgemeinden empirisch untersucht und zum Teil messbare Verbesserungen gefunden. Zugleich warnt sie davor, Gebet gegen Medizin auszuspielen: Die meisten Christen, die für Heilung beten, nutzen selbstverständlich auch ärztliche Hilfe – und das ist auch theologisch die verbreitete christliche Haltung.`, sources: [{ kind: 'fachliteratur', author: 'Candy Gunther Brown', work: 'Testing Prayer: Science and Healing', year: '2012', quote: `Empirische Untersuchung von Heilungsgebeten; Gebet und Medizin werden von den meisten Betenden kombiniert.`, status: 'paraphrase' }] }],
          followUps: [
            {
              id: 'warum-nicht-alle',
              objection: `Wenn Gott heilt – warum heilt er dann nicht alle? Wir sagen wenigstens: Es liegt am mangelnden Verständnis.`,
              objectionBy: 'Christian-Science-Apologeten',
              answer: `Damit legst du die Schuld auf den Kranken – eine schwere Last. Die Bibel ist ehrlicher: Paulus wurde trotz dreifachen Gebets nicht von seinem „Pfahl im Fleisch" befreit und hörte: „Laß dir an meiner Gnade genügen" (2 Kor 12,9); Trophimus blieb krank in Milet (2 Tim 4,20). Leid kann mit Christus getragen werden, und die endgültige Heilung ist die Auferstehung.`,
              sources: [{ kind: 'bibel', work: '2. Korinther', ref: '12,9', quote: `Laß dir an meiner Gnade genügen; denn meine Kraft ist in den Schwachen mächtig.`, translation: 'Luther 1912', status: 'verbatim' }],
              followUps: [
                {
                  id: 'tod-auch-illusion',
                  objection: `Auch der Tod ist letztlich eine Illusion. Mary Baker Eddy ist nicht gestorben, sondern „hinübergegangen".`,
                  objectionBy: 'Christian-Science-Apologeten',
                  answer: `Mary Baker Eddy starb 1910 in Chestnut Hill und wurde begraben – wie jeder Mensch. Wenn der Tod nur ein Irrtum ist, hat die Lehre an ihrer eigenen Gründerin die größte Probe nicht bestanden. Die christliche Hoffnung leugnet den Tod nicht, sondern bekennt einen, der ihn wirklich erlitten und wirklich besiegt hat. Das ist der Unterschied zwischen Verdrängung und Auferstehung.`,
                  questionsBack: [`Worauf gründest du deine Hoffnung angesichts des Todes – auf eine Idee oder auf einen, der aus dem Grab zurückgekehrt ist?`],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wenn Materie unwirklich ist – war dann der Leib Jesu am Kreuz unwirklich?`,
    `Warum weinte Jesus am Grab des Lazarus, wenn der Tod nur ein Irrtum ist?`,
    `Warum heilte Jesus mit Speichel und Erde und lobte den Samariter für Öl und Wein?`,
    `Wer trägt die Schuld, wenn ein Kind nicht geheilt wird – das Kind, die Eltern oder ihr „Verständnis"?`,
    `Wie verstehst du Lk 24,39: „Ein Geist hat nicht Fleisch und Bein, wie ihr sehet, daß ich habe"?`,
  ],
  avoid: [
    `Christian Scientists als „Kindermörder" bezeichnen – sprich über die dokumentierten Todesfälle sachlich und mit Mitgefühl für trauernde Familien.`,
    `Behaupten, die Kirche verbiete heute jede ärztliche Behandlung – offiziell lässt sie die Wahl.`,
    `Ungeprüfte Anekdoten über Eddys Privatleben verbreiten – bleib bei ihrer veröffentlichten Lehre.`,
    `Gebet und Heilung selbst lächerlich machen – das trifft auch den eigenen Glauben.`,
  ],
  concessions: [
    `Glaube, Vertrauen und Gebet haben messbar positive Wirkungen auf das Wohlbefinden; der Geist beeinflusst den Körper.`,
    `Die Medizin macht Fehler und hat Grenzen; Kritik an einer rein technischen Medizin ist teilweise berechtigt.`,
    `Die *Christian Science Monitor* ist eine angesehene, mehrfach preisgekrönte Zeitung; viele Christian Scientists leben vorbildlich.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Walter Martin', work: 'The Kingdom of the Cults', ref: 'Kapitel „Christian Science"', year: '1965', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Caroline Fraser', work: 'God\'s Perfect Child', year: '1999', status: 'paraphrase' },
    { kind: 'wissenschaft', author: 'Seth M. Asser, Rita Swan', work: 'Child Fatalities From Religion-Motivated Medical Neglect', ref: 'Pediatrics 101/4 (1998), 625–629', status: 'paraphrase' },
    { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Adversus Haereses', ref: 'Buch V', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Christian Science', 'Mary Baker Eddy', 'Krankheit', 'Heilung', 'Menschwerdung', 'Doketismus', 'Medizin'],
  related: [
    'pfingstbewegung/heilung-garantiert',
    'medizin-wunder/heilungen-placebo',
    'esoterik-new-age/alles-ist-energie-gott',
    'gnosis/geheimes-wissen-elite',
    'tod-seele-auferstehung/leibliche-auferstehung-unmoeglich',
  ],
};

export default claim;
