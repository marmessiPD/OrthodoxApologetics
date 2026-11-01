import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'chromosom-2-fusion',
  title: `„Die Fusion von Chromosom 2 beweist unsere Abstammung von Affen."`,
  proponents: [
    { name: 'Kenneth R. Miller', role: 'Zellbiologe, Brown University; stellte das Argument im Dover-Prozess 2005 vor', work: 'Only a Theory (2008)' },
    { name: 'Francis S. Collins', role: 'Genetiker, Leiter des Humangenomprojekts', work: 'The Language of God (2006)' },
    { name: 'Dennis Venema', role: 'Biologe, Trinity Western University', work: 'Adam and the Genome (2017, mit Scot McKnight)' },
    { name: 'Jerry A. Coyne', role: 'Evolutionsbiologe, University of Chicago', work: 'Why Evolution Is True (2009)' },
  ],
  steelman: `Menschenaffen haben 24 Chromosomenpaare, Menschen nur 23. Wenn wir gemeinsame Vorfahren haben, muss irgendwo ein Paar verloren gegangen sein – am wahrscheinlichsten durch Verschmelzung zweier Chromosomen. Das war eine riskante Vorhersage, und sie wurde glänzend bestätigt: Das menschliche Chromosom 2 entspricht in seinem Bandenmuster genau zwei Schimpansen-Chromosomen (2A und 2B, Yunis & Prakash 1982). In seiner Mitte, bei 2q13, liegen Telomer-Sequenzen – die normalerweise nur an Chromosomenenden vorkommen – Kopf an Kopf (Ijdo et al. 1991). Und bei 2q21 findet sich ein stillgelegtes zweites Zentromer genau dort, wo das Zentromer des zweiten Ahnenchromosoms sitzen müsste (Hillier et al. 2005). Das ist ein molekularer Fingerabdruck unserer Geschichte.`,
  biblical: {
    summary: `Die Bibel sagt nichts über Chromosomenzahlen. Sie lehrt, dass der Mensch aus „Erde" gebildet wurde und Gottes Lebensatem empfing (Gen 2,7) und dass alle Menschen von einem ersten Paar abstammen (Apg 17,26). Eine Chromosomenfusion in der Geschichte der menschlichen Linie widerspricht dem nicht – sie ist ein Ereignis in der Geschichte des menschlichen Erbguts, keine Aussage über die geistige Natur des Menschen.`,
    sources: [
      { kind: 'bibel', work: 'Genesis', ref: '2,7', translation: 'Luther 1912', status: 'verbatim', quote: `Und Gott der HERR machte den Menschen aus einem Erdenkloß, und er blies ihm ein den lebendigen Odem in seine Nase. Und also ward der Mensch eine lebendige Seele.` },
      { kind: 'bibel', work: 'Psalmen', ref: '8,5–6', translation: 'Luther 1912', status: 'verbatim', quote: `was ist der Mensch, daß du sein gedenkst, und des Menschen Kind, daß du dich seiner annimmst? Du hast ihn wenig niedriger gemacht denn Gott, und mit Ehre und Schmuck hast du ihn gekrönt.` },
    ],
  },
  church: {
    summary: `Für die koptische Kirche liegt die Würde des Menschen in seiner Erschaffung nach Gottes Bild, in der vernunftbegabten Seele und in seiner Berufung zur Gemeinschaft mit Gott. Kyrill von Alexandrien deutet das Anhauchen der Jünger durch den Auferstandenen (Joh 20,22) als Erneuerung jenes ersten Anhauchens von Gen 2,7 – das Bild Gottes wird durch den Geist wiederhergestellt. Diese Dimension liegt jenseits dessen, was Chromosomen zeigen können.`,
    sources: [
      { kind: 'kirchenvater', author: 'Kyrill von Alexandrien', work: 'Kommentar zum Johannesevangelium', ref: 'zu Joh 20,22', status: 'paraphrase', quote: `Wie Gott am Anfang dem Menschen den Lebensatem einhauchte, so erneuert Christus durch sein Anhauchen die Menschennatur und prägt ihr das göttliche Bild durch den Geist wieder ein.` },
    ],
  },
  opposingView: {
    summary: `Dass das menschliche Chromosom 2 aus der Verschmelzung zweier Ahnenchromosomen hervorging, ist in der Genetik unstrittig. Die Belege – Bandenmuster, Telomer-Reste an der Fusionsstelle, ein inaktiviertes Zentromer – sind solide. Junge-Erde-Kreationisten wie Jeffrey Tomkins bestreiten die Fusion (etwa mit Verweis auf ein Gen bzw. einen Promotor an der Fusionsstelle und den Zerfallsgrad der Telomer-Sequenzen); diese Einwände sind eine Minderheitenposition und werden von der Fachwelt nicht geteilt. Wichtig ist aber die logische Reichweite: Die Fusion belegt ein Ereignis in der menschlichen Linie; die Verwandtschaft mit den Affen ergibt sich aus der Ähnlichkeit der Chromosomen (Synteny), nicht aus der Fusion selbst.`,
    sources: [
      { kind: 'wissenschaft', author: 'J. W. Ijdo, A. Baldini, D. C. Ward, S. T. Reeders, R. A. Wells', work: '„Origin of human chromosome 2: an ancestral telomere-telomere fusion", PNAS 88 (20)', ref: 'S. 9051–9055', year: '1991', status: 'paraphrase', quote: `An der Stelle 2q13 finden sich in umgekehrter Orientierung angeordnete Telomer-Wiederholungen – das Kennzeichen einer Telomer-Telomer-Fusion.` },
      { kind: 'wissenschaft', author: 'Jorge J. Yunis, Om Prakash', work: '„The origin of man: a chromosomal pictorial legacy", Science 215', ref: 'S. 1525–1530', year: '1982', status: 'paraphrase', quote: `Hochauflösende Bandenmuster zeigen weitgehende Übereinstimmung der Chromosomen von Mensch und Menschenaffen; Chromosom 2 entspricht zwei Affenchromosomen.` },
      { kind: 'wissenschaft', author: 'LaDeana W. Hillier u. a.', work: '„Generation and annotation of the DNA sequences of human chromosomes 2 and 4", Nature 434', ref: 'S. 724–731', year: '2005', status: 'paraphrase', quote: `Bei 2q21 finden sich Alpha-Satelliten-Sequenzen eines inaktivierten Zentromers, passend zur Fusion zweier Ahnenchromosomen.` },
    ],
  },
  quickAnswer: `Die Fusion ist real – das gebe ich offen zu, und es war eine gelungene Vorhersage. Aber sie zeigt zunächst nur, dass es in der Geschichte der menschlichen Linie eine Chromosomenverschmelzung gab. Die Verwandtschaft mit den Affen schließt man aus der Ähnlichkeit der Chromosomen, nicht aus der Fusion. Und selbst wenn der menschliche Leib gemeinsame Vorfahren hätte: Über die geistige Seele und die Sonderstellung Adams sagt ein Chromosom nichts.`,
  keyPoints: [
    `**Die Fusion ist real** und gut belegt (Ijdo 1991, Hillier 2005). Christen sollten sie nicht bestreiten.`,
    `**Logische Reichweite:** Eine Fusion erklärt, warum Menschen 23 Paare haben – sie wäre in jedem Modell zu erwarten, in dem frühere Menschen 24 Paare hatten. Für die Verwandtschaft mit Affen spricht die Ähnlichkeit der Bandenmuster.`,
    `**Kleine Populationen begünstigen Fixierung:** Eine neue Chromosomenfusion setzt sich am leichtesten in einer kleinen, eng verbundenen Population durch – gut vereinbar mit einem frühen Engpass.`,
    `**Ähnlichkeit hat zwei mögliche Deutungen:** gemeinsame Abstammung oder gemeinsamer Bauplan. Viele Christen halten erstere für überzeugender; für den Glauben ist das nicht entscheidend.`,
    `**Schwache Gegenargumente meiden:** Die Bestreitung der Fusion durch einzelne Kreationisten ist eine Minderheitenposition, auf die man sich nicht stützen sollte.`,
  ],
  voices: [
    {
      person: 'casey-luskin',
      role: 'als Wissenschaftskommunikator der Design-Bewegung',
      text: `Luskin akzeptiert, dass eine Fusion stattgefunden hat, bestreitet aber, dass sie für sich genommen gemeinsame Abstammung mit den Affen beweist. Die Fusion zeige nur, dass Menschen einst 24 Chromosomenpaare hatten; das sei mit gemeinsamer Abstammung ebenso vereinbar wie mit einem Modell, in dem die frühen Menschen eigenständig entstanden. Das eigentliche Argument für Verwandtschaft sei die Ähnlichkeit der Chromosomen – und die lasse sich auch als gemeinsamer Bauplan deuten.`,
      sources: [
        { kind: 'fachliteratur', author: 'Casey Luskin', work: '„Francis Collins, Junk DNA, and Chromosomal Fusion", in: A. Gauger, D. Axe, C. Luskin, Science and Human Origins', year: '2012', status: 'paraphrase' },
      ],
    },
    {
      person: 'ann-gauger',
      role: 'als Biologin mit Schwerpunkt Populationsgenetik',
      text: `Gauger und andere weisen auf eine populationsgenetische Pointe hin: Ein Mensch, der als Erster eine solche Fusion trägt, hat 45 statt 46 Chromosomen und ist in der Regel gesund, aber in seiner Fruchtbarkeit eingeschränkt. Damit sich die Fusion durchsetzt, ist eine kleine, eng verbundene Population günstig, in der Träger leicht aufeinandertreffen. Ein früher Engpass – bis hin zu einem ersten Menschenpaar – erschwert die Fixierung also nicht, sondern kann sie erleichtern.`,
      sources: [
        { kind: 'fachliteratur', author: 'Ann Gauger u. a.', work: 'Beiträge zu Chromosom 2 und Populationsengpässen (Science and Human Origins; evolutionnews.org)', status: 'unverified', note: 'Die genetische Grundaussage zu balancierten Translokationsträgern ist medizinisch gesichert. Bestätigt ist, dass „Science and Human Origins" (2012) in Kap. 4 (Casey Luskin, „Francis Collins, Junk DNA, and Chromosomal Fusion") die Fusionsbelege behandelt; die konkrete Aussage zur Fixierung in kleinen Populationen bei Gauger ist weiterhin nicht am Original geprüft.' },
      ],
    },
    {
      person: 'francis-collins',
      role: 'als Genetiker (Position der theistischen Evolution)',
      text: `Collins hält die Fusion für ein eindrucksvolles Beispiel einer bestätigten Vorhersage und für einen deutlichen Hinweis auf gemeinsame Abstammung. Zugleich betont er, dass dies den christlichen Glauben nicht bedroht: Die Sonderstellung des Menschen liege nicht in seinen Chromosomen, sondern in Moralgesetz, Vernunft und Gottesbeziehung. Seine Stimme zeigt, dass gläubige Wissenschaftler die Daten unterschiedlich gewichten.`,
      sources: [
        { kind: 'fachliteratur', author: 'Francis S. Collins', work: 'The Language of God', ref: 'Kap. 6', year: '2006', status: 'paraphrase' },
      ],
    },
    {
      person: 'kyrill-alexandrien',
      role: 'als Kirchenvater',
      text: `Kyrill verbindet Schöpfung und Erlösung: Das Anhauchen in Gen 2,7 und das Anhauchen der Jünger durch den Auferstandenen gehören zusammen. Das Gottesbild ist für ihn eine Gabe des Geistes, die verloren und in Christus erneuert werden kann. Wer die Würde des Menschen in einer Chromosomenzahl sucht, sucht sie an der falschen Stelle.`,
      sources: [
        { kind: 'kirchenvater', author: 'Kyrill von Alexandrien', work: 'Kommentar zum Johannesevangelium', ref: 'zu Joh 20,22', status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'erfolgreiche-vorhersage',
      objection: `Die Evolutionstheorie sagte voraus: Wenn wir mit den Menschenaffen gemeinsame Vorfahren haben, muss ein Chromosomenpaar fusioniert sein. Und genau das fanden wir – samt Telomer-Resten und stillgelegtem Zentromer.`,
      objectionBy: 'Kenneth Miller',
      answer: `Das ist eine gelungene Vorhersage, und ich bestreite die Fusion nicht. Aber man muss genau sein: Die Fusion zeigt, dass Menschen früher 24 Chromosomenpaare hatten. Das wäre in jedem Modell so, in dem die menschliche Linie mit 24 Paaren begann. Der Schluss auf Verwandtschaft mit den Affen beruht auf der Ähnlichkeit der Chromosomen, nicht auf der Fusion selbst.`,
      followUps: [
        {
          id: 'bandenmuster-ist-das-argument',
          objection: `Genau – und die Bandenmuster des menschlichen Chromosoms 2 entsprechen exakt den Schimpansen-Chromosomen 2A und 2B. Das ist das Argument.`,
          objectionBy: 'Dennis Venema',
          answer: `Einverstanden, das ist der Kern. Ähnlichkeit des Genomaufbaus kann durch gemeinsame Abstammung oder durch einen gemeinsamen Bauplan erklärt werden. Viele halten Abstammung für die sparsamere Erklärung, und das ist nachvollziehbar. Für meinen Glauben ist die Frage nicht entscheidend: Auch ein gemeinsamer Ursprung des Leibes ließe Gott als Schöpfer, die geistige Seele und Adam unberührt.`,
          followUps: [
            {
              id: 'gemeinsamer-plan-unfalsifizierbar',
              objection: `„Gemeinsamer Plan" ist unfalsifizierbar – damit kann man jede Ähnlichkeit wegerklären.`,
              objectionBy: 'Jerry Coyne',
              answer: `Teilweise berechtigt. Prüfbar wird die Design-Deutung dort, wo sie funktionale Gründe für die Anordnung vorhersagt – etwa dass Gene, die zusammen reguliert werden, auch räumlich benachbart liegen, wie es die Forschung zu Chromatin-Domänen teilweise zeigt. Aber ich gebe zu: Bei der Frage der Abstammung des Leibes ist gemeinsame Abstammung die einfachere Erklärung. Darum hänge ich meinen Glauben nicht an diese Frage.`,
            },
          ],
        },
        {
          id: 'fixierung-bei-zwei-unmoeglich',
          objection: `Eine solche Fusion hätte sich bei einem einzigen Menschenpaar nie durchsetzen können.`,
          objectionBy: 'Nathan Lents',
          answer: `Eher umgekehrt: Ein Träger einer neuen Fusion hat 45 Chromosomen und ist meist gesund, aber weniger fruchtbar. Damit die Fusion sich durchsetzt, ist eine kleine, eng verbundene Population günstig, in der Träger leicht aufeinandertreffen und Nachkommen mit zwei fusionierten Chromosomen entstehen. Ein früher Engpass erschwert die Fixierung also nicht – er erleichtert sie.`,
          followUps: [
            {
              id: 'robertson-traeger-gesund',
              objection: `Robertson-Translokationen kommen bei etwa einem von tausend Menschen vor, die Träger sind meist völlig gesund. Fixierung durch Drift in kleinen Populationen ist Standard-Populationsgenetik. „Klein" heißt aber nicht „zwei" – eine Gruppe von einigen Tausend genügt.`,
              objectionBy: 'Larry Moran',
              answer: `Einverstanden – und das ist ein Punkt, an dem wir uns weitgehend einig sind: Die Fusion ist populationsgenetisch kein Problem, weder für dein Modell noch für ein Modell mit sehr kleinem Anfang. Es gibt sogar dokumentierte Fälle gesunder Menschen, die eine solche Translokation von beiden Eltern geerbt haben und nur 44 Chromosomen besitzen – ein Hinweis, wie eine neue Chromosomenzahl in einer eng verbundenen Familie stabil werden kann. Die Fusion entscheidet also nicht zwischen „zwei" und „einigen Tausend"; diese Frage muss mit anderen Daten geklärt werden.`,
              sources: [
                { kind: 'wissenschaft', author: 'Jianrong Song u. a.', work: '„A family with Robertsonian translocation: a potential mechanism of speciation in humans", Molecular Cytogenetics 9', year: '2016', status: 'unverified', quote: `Beschreibung eines gesunden Mannes mit 44 Chromosomen (homozygote Robertson-Translokation) aus einer verwandtschaftlich verbundenen Familie.`, note: 'Aus dem Gedächtnis zitiert, nicht per Websuche geprüft (Suchbudget erschöpft); Autoren, Jahrgang und Details vor Verwendung im Original prüfen.' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'telomere-fingerabdruck',
      objection: `An der Fusionsstelle liegen Telomer-Sequenzen Kopf an Kopf – Sequenzen, die an Chromosomenenden gehören. Das ist der Fingerabdruck der Fusion.`,
      objectionBy: 'Francis Collins',
      answer: `Einverstanden. Einige Kreationisten bestreiten das – mit Verweis auf den Zerfallsgrad der Telomer-Reste oder ein Gen an der Fusionsstelle. Das ist eine Minderheitenposition, und ich stütze mich nicht darauf. Die Fusion ist real; die Frage ist nur, was sie beweist.`,
      followUps: [
        {
          id: 'tomkins-kein-peer-review',
          objection: `Gut so – Tomkins ist ein Junge-Erde-Kreationist, dessen Arbeiten in hauseigenen Journalen erscheinen.`,
          objectionBy: 'Larry Moran',
          answer: `Deshalb verwende ich seine Argumente nicht. Ein Christ sollte die besten, nicht die bequemsten Argumente verwenden. Die Ehrlichkeit gebietet zu sagen: Die Fusion ist gut belegt.`,
          followUps: [
            {
              id: 'also-von-affen-abstammung',
              objection: `Dann gib es doch zu: Der Mensch stammt vom Affen ab.`,
              objectionBy: 'Dennis Venema',
              answer: `Präzise formuliert: Die Daten sprechen für gemeinsame Vorfahren von Mensch und heutigen Menschenaffen, nicht für eine Abstammung „vom Affen". Ich halte die Frage, ob der menschliche Leib so entstand, als Christ für offen; meine Kirche hat sie nicht dogmatisch entschieden, liest Gen 2,7 aber traditionell als unmittelbares Wirken Gottes. Was ich festhalte: Der Mensch ist mehr als sein Leib – er ist nach Gottes Bild geschaffen.`,
              followUps: [
                {
                  id: 'fusion-datiert-denisova',
                  objection: `Die Fusion lässt sich datieren: Poszewiecka und Kollegen schätzten 2022 rund 900.000 Jahre, und auch Neandertaler und Denisova-Menschen tragen sie. Wenn Adam der Erste mit fusioniertem Chromosom war, müsste er vor fast einer Million Jahren gelebt haben – lange vor allem, was Genesis beschreibt.`,
                  objectionBy: 'Joshua Swamidass',
                  answer: `Ein guter Punkt, und er zeigt, dass die Fusion vor der Trennung von Neandertalern, Denisovanern und modernen Menschen stattfand – also bei einem gemeinsamen Vorfahren aller drei. Das ist gut vereinbar mit Modellen, die Adam weit zurück datieren; William Lane Craig etwa hält Adam für einen Vertreter von Homo heidelbergensis vor 750.000 Jahren oder mehr. Die Datierung ist allerdings unsicher – das 95-%-Intervall reicht von etwa 0,4 bis 1,5 Millionen Jahren. Die koptische Kirche hat über das Datum Adams kein Dogma; verbindlich ist, dass er eine reale Person war.`,
                  detail: `Ehrlich festhalten: Die Datierung beruht auf einer indirekten Methode (Häufung bestimmter Basenaustausche um die Fusionsstelle) und hat große Unsicherheiten; frühere Schätzungen lagen bei 0,74 Millionen Jahren mit einem Intervall von 0 bis 2,8 Millionen Jahren. Für das Gespräch genügt: Die Fusion ist alt und wird von allen bekannten archaischen Menschenformen geteilt. Wer Adam vor wenigen Jahrtausenden ansetzt, braucht ein genealogisches Modell (Swamidass); wer ihn als ersten Menschen im biologischen Sinn versteht, landet bei sehr frühen Datierungen (Craig). Beide Wege werden unter Christen diskutiert – keiner ist Dogma.`,
                  voices: [
                    {
                      person: 'craig',
                      role: 'als Philosoph und Theologe',
                      text: `Craig hat in einer ausführlichen Studie argumentiert, dass Gen 1–11 als „mytho-historische" Erzählung über reale Personen und Ereignisse zu lesen ist und dass Adam und Eva wahrscheinlich Vertreter von Homo heidelbergensis waren, die vor rund 750.000 Jahren oder früher lebten. Damit wären Neandertaler und Denisovaner ebenfalls Nachkommen Adams – was zur geteilten Fusion passt.`,
                      sources: [
                        { kind: 'fachliteratur', author: 'William Lane Craig', work: 'In Quest of the Historical Adam: A Biblical and Scientific Exploration', year: '2021', status: 'paraphrase' },
                      ],
                    },
                  ],
                  sources: [
                    { kind: 'wissenschaft', author: 'Kamila Poszewiecka, Krzysztof Gogolewski, Paweł Stankiewicz, Anna Gambin', work: '„Revised time estimation of the ancestral human chromosome 2 fusion", BMC Genomics 23', year: '2022', status: 'paraphrase', quote: `Die Fusion wird auf etwa 0,9 Millionen Jahre datiert (95-%-Konfidenzintervall 0,4–1,5 Millionen Jahre).`, url: 'https://doi.org/10.1186/s12864-022-08828-7' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'restzentromer-relikt',
      objection: `Bei 2q21 sitzt ein stillgelegtes Zentromer – funktionslos, ein Relikt. Genau das erwartet man nach einer Fusion.`,
      objectionBy: 'Jerry Coyne',
      answer: `Richtig – ein Chromosom mit zwei aktiven Zentromeren wäre bei der Zellteilung instabil; dass eines stillgelegt ist, passt zur Fusion. Das gestehe ich zu. Es zeigt einmal mehr: Die Fusion ist ein reales Ereignis in der Geschichte des menschlichen Erbguts.`,
      followUps: [
        {
          id: 'evolution-erklaert-design-nicht',
          objection: `Siehst du: Evolution erklärt das. Design erklärt es nicht.`,
          objectionBy: 'Richard Dawkins',
          answer: `Design-Befürworter bestreiten keine historischen Ereignisse wie Fusionen, Mutationen oder Genverluste. Die Frage, die Design stellt, betrifft etwas anderes: den Ursprung der funktionalen Information in den Chromosomen – der Gene, ihrer Regulation, der Maschinerie, die Chromosomen überhaupt teilt. Dass zwei Chromosomen verschmolzen, erklärt nicht, woher ihr Inhalt stammt.`,
          followUps: [
            {
              id: 'design-sagt-fusion-nicht-voraus',
              objection: `Siehst du den Unterschied? Die Evolutionstheorie sagt die Fusion voraus, Design sagt gar nichts voraus. Nach dem Likelihood-Prinzip gewinnt die Theorie, die die Daten wahrscheinlicher macht.`,
              objectionBy: 'Dennis Venema',
              answer: `Für die konkrete Tatsache der Fusion stimmt das: Gemeinsame Abstammung macht sie wahrscheinlicher als ein beliebiges Alternativmodell – das gestehe ich zu. Aber Design ist kein Konkurrent zu historischen Ereignissen wie Fusionen, Mutationen oder Genverlusten. Design konkurriert mit der Behauptung, ungelenkte Prozesse hätten die **funktionale Information** hervorgebracht, die neue Proteine, Regelnetzwerke und Baupläne erfordern. Dort muss man den Likelihood-Vergleich führen – und dort sieht er ganz anders aus.`,
              questionsBack: [
                `Erhöht die Fusion von Chromosom 2 die Wahrscheinlichkeit, dass ungelenkte Mutationen neue Proteinfaltungen erzeugen?`,
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'inversionen-stammbaum',
      objection: `Chromosom 2 steht nicht allein. Zwischen Mensch und Schimpanse gibt es neun große perizentrische Inversionen und weitere Umbauten, und Gorilla, Orang-Utan und Schimpanse tragen 2A und 2B getrennt. Das gesamte Muster der Chromosomenumbauten fügt sich sauber in einen einzigen Stammbaum.`,
      objectionBy: 'Kenneth Miller',
      answer: `Das ist richtig, und ich bestreite das Muster nicht: Die Umbauten der Chromosomen lassen sich in einen Stammbaum einordnen, und gemeinsame Abstammung erklärt das elegant. Die koptische Kirche hat über den biologischen Weg der Erschaffung des Leibes kein Dogma. Was die Daten nicht zeigen, ist zweierlei: dass der Prozess ungelenkt war, und dass der Mensch nichts weiter ist als sein Genom. Die Schrift sagt, Gott habe den Menschen aus dem „Staub der Erde" gebildet und ihm den Lebensatem eingehaucht (Gen 2,7) – über den Staub sagen Chromosomen etwas, über den Atem nichts.`,
      followUps: [
        {
          id: 'warum-nicht-ganz-evolution',
          objection: `Wenn du die Abstammung des Leibes zugibst, warum dann nicht die ganze menschliche Evolution? Du hältst dir nur ein letztes Rückzugsgebiet frei.`,
          objectionBy: 'Nathan Lents',
          answer: `Weil es um verschiedene Fragen geht. Ob der menschliche Leib gemeinsame Vorfahren mit den Menschenaffen hat, ist eine historische Frage, über die Christen unterschiedlich urteilen. Ob ungelenkte Mutation und Selektion die nötigen Neuerungen erklären, ist eine Frage nach dem Mechanismus – dort sehe ich ernste offene Probleme (Wartezeiten, neue Proteine). Und ob der Mensch eine geistige Seele hat, ist eine philosophisch-theologische Frage, die kein Chromosom beantwortet. Ich halte mir kein Rückzugsgebiet frei, sondern unterscheide drei Fragen, die oft vermischt werden.`,
          followUps: [
            {
              id: 'seele-lueckenbuesser',
              objection: `Eine Seele, die in einen evolvierten Körper „eingesetzt" wird, ist ein klassischer Lückenbüßer. Bewusstsein erklärt die Neurowissenschaft.`,
              objectionBy: 'Jerry Coyne',
              answer: `Die Seele ist kein Lückenfüller in der Biologie, sondern die Erklärung für etwas, das wir täglich verwenden: Vernunft. Wenn unser Denken nur das Ergebnis von Prozessen ist, die auf Überleben und nicht auf Wahrheit ausgerichtet sind, haben wir keinen Grund, unseren eigenen Schlüssen – auch den naturwissenschaftlichen – zu trauen. Die Neurowissenschaft zeigt, **wie** Geist und Gehirn zusammenhängen; dass Bewusstsein und Wahrheitsfähigkeit **nichts als** Gehirnaktivität seien, ist eine philosophische These, keine Messung.`,
              voices: [
                {
                  person: 'kyrill-alexandrien',
                  role: 'als Kirchenvater',
                  text: `Kyrill versteht den „Lebensatem" von Gen 2,7 als Gottes Gabe, durch die der Mensch zu einem vernunftbegabten, auf Gott hin geöffneten Wesen wird. Die Gottebenbildlichkeit liegt für ihn nicht in der Gestalt des Leibes, sondern in Vernunft, Freiheit und der Fähigkeit zur Gemeinschaft mit Gott.`,
                  sources: [
                    { kind: 'kirchenvater', author: 'Kyrill von Alexandrien', work: 'Kommentar zum Johannesevangelium', ref: 'zu Joh 20,22 (Einhauchung des Geistes, mit Rückgriff auf Gen 2,7)', status: 'paraphrase' },
                  ],
                },
                {
                  person: 'plantinga',
                  role: 'als Philosoph',
                  text: `Plantinga argumentiert, dass Naturalismus und ungelenkte Evolution zusammen die Verlässlichkeit unserer kognitiven Fähigkeiten untergraben: Selektion belohnt nützliches Verhalten, nicht wahre Überzeugungen. Wer beides annimmt, hat einen Grund, an seinen eigenen Überzeugungen zu zweifeln – auch an dieser.`,
                  sources: [
                    { kind: 'fachliteratur', author: 'Alvin Plantinga', work: 'Where the Conflict Really Lies: Science, Religion, and Naturalism', ref: 'Kap. 10', year: '2011', status: 'paraphrase' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Beweist die Fusion selbst die Verwandtschaft mit den Affen – oder die Ähnlichkeit der Chromosomen?`,
    `Wäre eine Fusion nicht in jedem Modell zu erwarten, in dem frühe Menschen 24 Chromosomenpaare hatten?`,
    `In welcher Populationsgröße setzt sich eine neue Chromosomenfusion am leichtesten durch?`,
    `Was sagt eine Chromosomenzahl über die geistige Natur des Menschen aus?`,
  ],
  avoid: [
    `„Die Fusion ist eine Erfindung der Evolutionisten." – Sie ist gut belegt.`,
    `Sich auf einzelne kreationistische Gegenstudien zur Fusionsstelle stützen.`,
    `„Wenn wir verwandt wären, müssten wir 24 Chromosomen haben" – das Argument kehrt sich gegen dich.`,
  ],
  concessions: [
    `Die Fusion von zwei Ahnenchromosomen zu Chromosom 2 ist real und war eine erfolgreiche Vorhersage.`,
    `Die Ähnlichkeit der Chromosomen von Mensch und Menschenaffen wird von der Fachwelt als Beleg gemeinsamer Abstammung gewertet.`,
  ],
  furtherReading: [
    { kind: 'wissenschaft', author: 'J. W. Ijdo u. a.', work: 'PNAS 88 (20), 9051–9055', year: '1991', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Ann Gauger, Douglas Axe, Casey Luskin', work: 'Science and Human Origins', year: '2012', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Francis S. Collins', work: 'The Language of God', year: '2006', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Chromosom 2', 'Fusion', 'Telomere', 'Gemeinsame Abstammung', 'Mensch und Affe'],
  related: [
    'genetik/pseudogene-ervs',
    'genetik/mensch-schimpanse-99-prozent',
    'genetik/adam-eva-genetisch-unmoeglich',
  ],
};

export default claim;
