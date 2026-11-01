import type { Claim, Source } from '../../../schema.ts';

const suttle2007: Source = {
  kind: 'wissenschaft',
  author: 'Curtis A. Suttle',
  work: '„Marine viruses – major players in the global ecosystem", Nature Reviews Microbiology 5, S. 801–812',
  year: '2007',
  quote: `Viren sind die häufigsten biologischen Einheiten im Meer. Sie töten täglich einen erheblichen Teil der Meeresbakterien, setzen dadurch Nährstoffe und gelösten organischen Kohlenstoff frei („viral shunt") und beeinflussen so die globalen Stoff- und Kohlenstoffkreisläufe.`,
  status: 'paraphrase',
  note: 'Häufig genannte Schätzung: etwa 20–40 % der Meeresbakterien pro Tag; die genaue Zahl variiert je nach Region und Methode.',
};

const mi2000: Source = {
  kind: 'wissenschaft',
  author: 'Sha Mi u. a.',
  work: '„Syncytin is a captive retroviral envelope protein involved in human placental morphogenesis", Nature 403, S. 785–789',
  year: '2000',
  quote: `Das Hüllprotein eines menschlichen endogenen Retrovirus (HERV-W), Syncytin, ist an der Bildung des Synzytiotrophoblasten der Plazenta beteiligt.`,
  status: 'paraphrase',
};

const mann2003: Source = {
  kind: 'wissenschaft',
  author: 'Nicholas H. Mann u. a.',
  work: '„Bacterial photosynthesis genes in a virus", Nature 424, S. 741',
  year: '2003',
  quote: `Bakteriophagen, die Cyanobakterien befallen, tragen Gene für Proteine des Photosyntheseapparats und halten die Photosynthese ihres Wirts während der Infektion aufrecht.`,
  status: 'paraphrase',
};

const woolhouse2005: Source = {
  kind: 'wissenschaft',
  author: 'Mark E. J. Woolhouse, Sonya Gowtage-Sequeria',
  work: '„Host Range and Emerging and Reemerging Pathogens", Emerging Infectious Diseases 11 (12), S. 1842–1847',
  year: '2005',
  quote: `Die Autoren zählen rund 1.400 bekannte Arten von Krankheitserregern des Menschen (Viren, Bakterien, Pilze, Protozoen, Würmer); die Mehrheit davon sind Zoonosen.`,
  status: 'paraphrase',
  note: 'Gemessen an der geschätzten Zahl mikrobieller Arten (Millionen oder mehr) ist das ein winziger Bruchteil.',
};

const sender2016: Source = {
  kind: 'wissenschaft',
  author: 'Ron Sender, Shai Fuchs, Ron Milo',
  work: '„Revised Estimates for the Number of Human and Bacteria Cells in the Body", PLOS Biology 14 (8), e1002533',
  year: '2016',
  quote: `Ein Referenzmensch beherbergt etwa 38 Billionen Bakterien bei rund 30 Billionen eigenen Zellen – das Verhältnis liegt also etwa bei 1 : 1, nicht bei 10 : 1, wie lange behauptet.`,
  status: 'paraphrase',
};

const waldor1996: Source = {
  kind: 'wissenschaft',
  author: 'Matthew K. Waldor, John J. Mekalanos',
  work: '„Lysogenic Conversion by a Filamentous Phage Encoding Cholera Toxin", Science 272, S. 1910–1914',
  year: '1996',
  quote: `Die Gene für das Choleratoxin liegen auf einem Bakteriophagen (CTXφ); erst durch dessen Aufnahme werden harmlose Vibrio-cholerae-Stämme zu Erregern der Cholera.`,
  status: 'paraphrase',
};

const liu2010: Source = {
  kind: 'wissenschaft',
  author: 'Weimin Liu u. a.',
  work: '„Origin of the human malaria parasite Plasmodium falciparum in gorillas", Nature 467, S. 420–425',
  year: '2010',
  quote: `Der gefährlichste menschliche Malariaerreger geht nach genetischen Daten auf einen Parasiten von Gorillas zurück – er ist ein vergleichsweise junger „Wirtswechsler".`,
  status: 'paraphrase',
};

const lennox2020: Source = {
  kind: 'fachliteratur',
  author: 'John C. Lennox',
  work: 'Where Is God in a Coronavirus World?',
  year: '2020',
  quote: `Lennox beschreibt die Welt als schön und zugleich zerbrochen: Viren und Bakterien sind überwiegend nützlich und lebensnotwendig, einige wenige aber verheerend. Das Christentum bietet keine einfache Erklärung, aber einen Gott, der in Christus selbst gelitten hat, und eine begründete Hoffnung.`,
  status: 'paraphrase',
};

const behe2007: Source = {
  kind: 'fachliteratur',
  author: 'Michael J. Behe',
  work: 'The Edge of Evolution: The Search for the Limits of Darwinism',
  year: '2007',
  quote: `Behe nutzt die gewaltige Populationsgröße von Malariaerregern als „Großexperiment": Trotz astronomischer Zahlen an Zellen entstanden nur wenige, eng begrenzte Anpassungen (z. B. Chloroquin-Resistenz, die mindestens zwei Mutationen erfordert). Die Frage nach der Moral eines Designers weist er der Theologie zu.`,
  status: 'paraphrase',
};

const claim: Claim = {
  id: 'krankheitserreger-design',
  title: `„Wenn Viren und Bakterien entworfen sind, ist der Designer böse."`,
  proponents: [
    { name: 'Richard Dawkins', role: 'Evolutionsbiologe, Oxford', work: 'River Out of Eden (1995)' },
    { name: 'Jerry A. Coyne', role: 'Evolutionsbiologe, University of Chicago', work: 'Why Evolution Is True (2009); Faith vs. Fact (2015)' },
    { name: 'Kenneth R. Miller', role: 'Zellbiologe, Brown University (katholisch, Kritiker von ID)', work: 'Only a Theory (2008); Zeugenaussage im Kitzmiller-Prozess (2005)' },
    { name: 'Bart D. Ehrman', role: 'Neutestamentler, UNC', work: 'God\'s Problem: How the Bible Fails to Answer Our Most Important Question – Why We Suffer (2008)' },
    { name: 'Nathan H. Lents', role: 'Biologe, John Jay College (CUNY)', work: 'Human Errors (2018)' },
  ],
  steelman: `Pocken töteten allein im 20. Jahrhundert Hunderte Millionen Menschen, die Pest entvölkerte halb Europa, Malaria tötet bis heute jedes Jahr Hunderttausende – überwiegend Kinder unter fünf Jahren. Diese Erreger sind keine groben Zufallsprodukte, sondern präzise Maschinen: Malariaparasiten wechseln ihre Oberflächenproteine, um dem Immunsystem zu entgehen; Bakterien besitzen molekulare Injektionsnadeln, mit denen sie Gifte in unsere Zellen spritzen; HIV zerstört gezielt die Zellen, die uns schützen sollen. Die Intelligent-Design-Bewegung behauptet, solche molekularen Maschinen seien entworfen. Dann ist die Konsequenz unausweichlich: Ihr Designer hat Malaria, Pest und Pocken erfunden. Entweder ist er nicht gut, oder es gibt ihn nicht – und die ungelenkte Evolution, die kein Mitleid kennt, erklärt die Daten ohnehin besser.`,
  biblical: {
    summary: `Die Bibel nennt Krankheit nie gut. Sie gehört zu einer Schöpfung, die „unterworfen ist der Eitelkeit" und auf Befreiung wartet (Röm 8,20–22); in der Vollendung wird Gott „abwischen alle Tränen" und „der Tod wird nicht mehr sein" (Offb 21,4). Jesus weist die Deutung jeder Krankheit als persönliche Strafe ausdrücklich zurück (Joh 9,3; Lk 13,1–5) und heilt Kranke als Zeichen des anbrechenden Reiches Gottes. Medizin ist nach der Schrift eine gottgewollte Gabe (Sir 38,1–15); Lukas war Arzt (Kol 4,14).`,
    detail: `- **Joh 9,3:** „Es hat weder dieser gesündigt noch seine Eltern" – kein Kurzschluss von Krankheit auf Schuld.
- **Sir 38** (deuterokanonisch, im koptischen Kanon): Gott hat den Arzt geschaffen und die Arznei aus der Erde wachsen lassen; der Kranke soll beten **und** den Arzt rufen.
- **Mt 25,36:** „Ich bin krank gewesen, und ihr habt mich besucht" – Krankenpflege ist Christusdienst.`,
    sources: [
      { kind: 'bibel', work: 'Johannes', ref: '9,3', quote: `Jesus antwortete: Es hat weder dieser gesündigt noch seine Eltern; sondern daß die Werke Gottes offenbar würden an ihm.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Offenbarung', ref: '21,4', quote: `Und Gott wird abwischen alle Tränen von ihren Augen, und der Tod wird nicht mehr sein, noch Leid noch Geschrei noch Schmerz wird mehr sein; denn das Erste ist vergangen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Jesus Sirach', ref: '38,1–4', quote: `Ehre den Arzt, denn der Herr hat ihn geschaffen; die Arznei lässt der Herr aus der Erde wachsen, und ein Vernünftiger verachtet sie nicht.`, status: 'paraphrase' },
      { kind: 'bibel', work: 'Römer', ref: '8,21', quote: `Denn auch die Kreatur wird frei werden vom Dienst des vergänglichen Wesens zu der herrlichen Freiheit der Kinder Gottes.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche sieht Krankheit als Teil der gefallenen, der Verderbnis unterworfenen Welt – nicht als ursprünglichen Willen Gottes und nicht als automatische Strafe. Sie betet für die Kranken (Krankensalbung, Fürbitten der Liturgie) **und** ehrt die Medizin: Basilius der Große gründete in Caesarea eine der ersten großen Krankenanstalten und lehrte, die Heilkunst sei eine Gabe Gottes; Kopten verehren die Ärzte-Märtyrer Kyros und Johannes; der heutige Papst Tawadros II. ist studierter Pharmazeut. In der COVID-19-Pandemie setzte die Kirche Gottesdienste zeitweise aus und folgte den Gesundheitsbehörden.`,
    sources: [
      { kind: 'kirchenvater', author: 'Basilius der Große', work: 'Längere Regeln (Regulae fusius tractatae)', ref: '55', quote: `Die Heilkunst ist uns von Gott geschenkt, um die Schwäche des Leibes zu lindern; man soll sie dankbar gebrauchen, aber seine ganze Hoffnung nicht auf sie setzen.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'De Incarnatione', ref: '4–5', quote: `Durch die Abwendung von Gott verfiel der Mensch der Verderbnis und dem Tod.`, status: 'paraphrase' },
      { kind: 'liturgie', work: 'Koptische Liturgie (Fürbitte für die Kranken)', quote: `Die Kirche bittet in jeder Liturgie, dass Gott die Kranken besuche und heile.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Die überwältigende Mehrheit der Mikroorganismen ist für den Menschen harmlos oder lebenswichtig: Bakterien fixieren Stickstoff, zersetzen totes Material, produzieren einen erheblichen Teil des Sauerstoffs der Meere und bilden im Darm ein Mikrobiom, das Verdauung, Vitaminversorgung und Immunsystem prägt (ca. 38 Billionen Bakterien im Körper, Sender u. a. 2016). Von geschätzt Millionen mikrobieller Arten sind rund 1.400 als menschliche Krankheitserreger bekannt (Woolhouse 2005). Viren regulieren Bakterienpopulationen, treiben Kohlenstoff- und Nährstoffkreisläufe der Ozeane an (Suttle 2007) und haben Gene beigesteuert, die heute unverzichtbar sind (Syncytin der Plazenta, Mi u. a. 2000). Pathogenität entsteht häufig durch Kontext und „Entgleisung": durch Aufnahme von Toxin-Genen über Phagen (Cholera, Diphtherie), durch Wirtswechsel (Zoonosen; *P. falciparum* stammt von einem Gorilla-Parasiten), durch Störung des Gleichgewichts (opportunistische Infektionen).`,
    detail: `- **Was der Einwand richtig sieht:** Manche Erreger nutzen hochspezialisierte molekulare Werkzeuge. Wer Design behauptet, muss die moralische Frage beantworten.
- **Was er übersieht:** (1) Die Kategorie „Virus" oder „Bakterium" ist nicht böse, sondern überwiegend lebensförderlich. (2) Viele Krankheitserreger sind abgeleitete, „entgleiste" Zustände – biologisch belegt durch horizontalen Gentransfer von Toxinen, durch Funktionsverlust (Behe 2010) und durch junge Wirtswechsel. (3) Die moralische Frage betrifft jede Form von Theismus, auch die theistische Evolution.`,
    sources: [woolhouse2005, sender2016, suttle2007, mi2000, waldor1996, liu2010],
  },
  quickAnswer: `Fast alle Viren und Bakterien sind harmlos oder lebensnotwendig: Ohne Bakterien gäbe es keinen Stickstoffkreislauf und keine Verdauung, ohne Viren keine Regulation der Meeresbakterien – und ohne ein Virus-Gen keine menschliche Plazenta. Krankheitserreger sind ein winziger Bruchteil und oft „entgleiste" Formen: Cholera wird erst gefährlich, wenn ein Phage ein Gift-Gen einschleust; Malaria stammt von einem Gorilla-Parasiten. Das passt zur christlichen Sicht einer guten, aber beschädigten Schöpfung – und Christen haben deshalb immer Krankheiten bekämpft, statt sie zu verklären.`,
  keyPoints: [
    `**Die Proportionen:** Rund 1.400 bekannte menschliche Erregerarten gegenüber Millionen harmloser oder nützlicher Mikroben; wir tragen etwa so viele Bakterien wie eigene Zellen.`,
    `**Viren sind Infrastruktur:** Sie regulieren Bakterien, recyceln Nährstoffe im Meer, tragen Photosynthese-Gene und lieferten das Plazenta-Gen Syncytin.`,
    `**Entgleisung ist biologisch belegt:** Cholera- und Diphtherietoxin stammen aus Phagen; viele Erreger sind junge Wirtswechsler; Anpassung geschieht oft durch Funktionsverlust.`,
    `**Design ≠ Moralurteil:** Ob ein System Planung zeigt, ist eine andere Frage als die, warum es heute schadet.`,
    `**Das Problem bleibt für alle Theisten:** Auch die theistische Evolution muss erklären, warum Gott eine Welt mit Malaria zulässt – es ist die Frage der Theodizee, nicht des Mechanismus.`,
    `**Christliche Antwort ist Handeln:** Krankenhäuser (Basilius), Ärzte-Heilige, Impfpioniere – der Glaube bekämpft Krankheit als Feind, nicht als Gottes Ideal.`,
  ],
  argument: {
    name: 'Das Argument vom „bösen Designer" – geprüft',
    summary: 'Drei verdeckte Annahmen tragen das Argument; keine hält.',
    premises: [
      {
        text: `P1 (Gegner): Mikroorganismen sind im Wesentlichen Krankheitserreger.`,
        support: `Falsch. Die große Mehrheit ist harmlos oder lebensnotwendig; Viren und Bakterien sind Grundpfeiler der Biosphäre.`,
        sources: [woolhouse2005, sender2016, suttle2007],
      },
      {
        text: `P2 (Gegner): Pathogenität ist ein ursprünglich entworfenes Merkmal.`,
        support: `Vieles spricht für abgeleitete Zustände: Toxine durch Phagen-Transfer, Wirtswechsel, Funktionsverlust, Störung von Gleichgewichten.`,
        sources: [waldor1996, liu2010],
      },
      {
        text: `P3 (Gegner): Ein guter Gott hätte keinen Grund, eine Welt mit entgleisten Systemen zuzulassen.`,
        support: `Das ist die allgemeine Theodizee-Frage. Aus „ich kenne den Grund nicht" folgt nicht „es gibt keinen". Die christliche Antwort umfasst die Freiheit der Geschöpfe, die Gesetzmäßigkeit der Natur, den Fall und die Hoffnung auf Erneuerung.`,
      },
    ],
    conclusion: `Krankheitserreger widerlegen weder Design noch Gottes Güte; sie stellen die Theodizee-Frage – auf die das Christentum mit Kreuz, Auferstehung und tätiger Nächstenliebe antwortet.`,
  },
  voices: [
    {
      person: 'lennox',
      role: 'als Mathematiker und Apologet in der Pandemie',
      text: `Lennox schrieb 2020 mitten in der COVID-19-Pandemie ein kurzes Buch zur Frage nach Gott. Er erinnert daran, dass Viren und Bakterien überwiegend lebenswichtig sind und nur wenige verheerend wirken – die Welt ist schön und zerbrochen zugleich. Für Lennox ist entscheidend, dass der christliche Glaube keine Theorie über das Leid aus sicherer Distanz anbietet, sondern einen Gott, der in Christus selbst Leid und Tod erlitten hat und sie in der Auferstehung überwindet. Daraus folgt Hoffnung – und der Auftrag, Kranken zu dienen.`,
      sources: [lennox2020],
    },
    {
      person: 'michael-behe',
      role: 'als Biochemiker',
      text: `Behe hat den Malariaerreger in *The Edge of Evolution* als Testfall genutzt: Gerade weil Plasmodium in astronomischen Zahlen vorkommt, zeigt er, was ungelenkte Mutation und Selektion leisten können – und was nicht. Resistenzen entstehen, aber meist durch wenige Punktmutationen oder durch den Verlust von Funktionen. Zur moralischen Frage betont Behe, dass Design-Erkennung keine Aussage über die Güte oder die Absichten eines Designers trifft; diese Frage gehöre in die Theologie.`,
      sources: [behe2007],
    },
    {
      person: 'francis-collins',
      role: 'als Genetiker und Arzt',
      text: `Collins, der als Direktor der US-Gesundheitsbehörde NIH die Forschung in der Pandemie mitverantwortete, betrachtet die Naturgesetze als Gottes Weise, die Welt zu erhalten. Dieselben Prozesse, die Leben und Vielfalt ermöglichen – etwa das Kopieren und gelegentliche Verändern von Erbinformation –, können auch Krankheit hervorbringen. Für ihn ist die medizinische Forschung ein Akt der Nächstenliebe.

*Hinweis:* Collins vertritt die theistische Evolution; in der Frage biologischer Mechanismen steht er für eine andere christliche Position als das Design-Lager.`,
      sources: [{ kind: 'fachliteratur', author: 'Francis S. Collins', work: 'The Language of God: A Scientist Presents Evidence for Belief', year: '2006', status: 'paraphrase' }],
    },
    {
      person: 'basilius',
      role: 'als Bischof und Gründer einer Krankenanstalt',
      text: `Basilius ließ vor den Toren Caesareas eine ganze Anlage für Kranke, Arme und Fremde errichten, die Zeitgenossen „Basilias" nannten. In seinen Mönchsregeln beantwortet er die Frage, ob ein Christ ärztliche Hilfe suchen darf: Ja – die Heilkunst ist eine Gabe Gottes, wie Ackerbau und Weberei; man soll sie dankbar nutzen, die Hoffnung aber auf Gott setzen. Damit hat Basilius den christlichen Umgang mit Krankheit geprägt: beten, behandeln, pflegen.`,
      sources: [{ kind: 'kirchenvater', author: 'Basilius der Große', work: 'Längere Regeln (Regulae fusius tractatae)', ref: '55', status: 'paraphrase' }],
    },
    {
      person: 'polkinghorne',
      role: 'als Physiker und Theologe',
      text: `Polkinghorne entwickelte die „free-process defence": So wie Gott Menschen Freiheit schenkt, gibt er der Schöpfung, sie selbst zu sein – mit Prozessen, die Leben ermöglichen, aber auch Krankheit hervorbringen können. Eine Welt, die sich selbst entfalten darf, ist nach Polkinghorne ein größeres Gut als eine Marionettenwelt. Das löst nicht jede Frage, zeigt aber, dass ein guter Gott Gründe haben kann, eine gesetzmäßige, eigenständige Natur zuzulassen.`,
      sources: [{ kind: 'fachliteratur', author: 'John Polkinghorne', work: 'Science and Providence', year: '1989', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'designer-boese',
      objection: `Pocken, Pest, Malaria, HIV – wenn diese molekularen Maschinen entworfen sind, wie ihr ID-Leute sagt, dann ist euer Designer böse.`,
      objectionBy: 'Jerry Coyne',
      targetsPremise: 1,
      answer: `Schau zuerst auf die Proportionen: Rund 1.400 bekannte menschliche Erregerarten stehen Millionen harmloser oder lebensnotwendiger Mikroben gegenüber. Ohne Bakterien kein Stickstoffkreislauf, ohne Darmflora keine gesunde Verdauung, ohne Viren keine Regulation der Meeresbakterien – und ohne das Virus-Gen Syncytin keine menschliche Plazenta. Die Kategorie „Mikrobe" ist überwiegend lebensförderlich. Die Frage ist also: Warum entgleisen einige wenige?`,
      sources: [woolhouse2005, sender2016, suttle2007, mi2000],
      questionsBack: [`Wie viele der Bakterien in deinem Darm machen dich gerade krank?`],
      followUps: [
        {
          id: 'bruchteil-reicht',
          objection: `Auch ein Bruchteil sind Pocken und Malaria mit Hunderten Millionen Toten. Das relativiert gar nichts.`,
          objectionBy: 'Jerry Coyne',
          targetsPremise: 2,
          answer: `Du hast recht, ich will kein Leid relativieren. Mein Punkt ist ein anderer: Die Biologie zeigt Krankheitserreger oft als *abgeleitete* Formen. Cholera wird erst gefährlich, wenn ein Phage das Toxin-Gen einschleust; der gefährlichste Malariaerreger ist ein Wirtswechsler von Gorillas; seine Verwandten leben als Partner-Algen in Korallen. Das sieht nach Entgleisung aus – und passt zur christlichen Sicht einer guten, aber beschädigten Schöpfung.`,
          sources: [waldor1996, liu2010],
          followUps: [
            {
              id: 'entgleisung-umschreibung',
              objection: `„Entgleist" ist nur eine fromme Umschreibung für „evolviert". Du übernimmst unsere Erklärung und klebst ein Etikett drauf.`,
              objectionBy: 'Nathan Lents',
              targetsPremise: 2,
              answer: `Ich übernehme gern, was die Daten zeigen: Gentransfer, Funktionsverlust, Wirtswechsel. Das erklärt, wie aus harmlosen Formen gefährliche werden. Es erklärt nicht, woher die komplexe Maschinerie stammt, die da umgenutzt wird – Behe nennt es die „erste Regel": Brechen und Umnutzen ist leicht, Bauen ist schwer. Und die theologische Deutung ist kein Etikett, sondern die Antwort auf die Frage, die du gestellt hast: ob ein guter Gott hinter dieser Welt stehen kann.`,
              sources: [{ kind: 'wissenschaft', author: 'Michael J. Behe', work: '„Experimental Evolution, Loss-of-Function Mutations, and the First Rule of Adaptive Evolution", Quarterly Review of Biology 85 (4), S. 419–445', year: '2010', status: 'paraphrase' }],
              followUps: [
                {
                  id: 'behe-malaria-entworfen',
                  objection: `Behe selbst schreibt in „The Edge of Evolution", die Maschinerie des Malariaerregers zeige Design. Also hat sein Designer die Malaria gemacht.`,
                  objectionBy: 'Kenneth Miller',
                  answer: `Behe argumentiert, dass bestimmte molekulare Systeme Planung erfordern – und er trennt das ausdrücklich von der Frage nach der Moral. Eine Zelle mit raffinierter Maschinerie kann ursprünglich einem guten Zweck gedient haben und in einer beschädigten Welt zum Schaden werden. Interessant ist übrigens Behes eigentlicher Punkt: Trotz astronomischer Populationsgrößen hat Malaria nur wenige, eng begrenzte Neuerungen hervorgebracht – meist durch Verlust.`,
                  sources: [behe2007],
                  followUps: [
                    {
                      id: 'allmacht-beenden',
                      objection: `Selbst wenn sie entgleist sind: Ein allmächtiger Gott könnte die Malaria morgen beenden. Er tut es nicht – jedes Jahr sterben Hunderttausende Kinder.`,
                      objectionBy: 'Bart Ehrman',
                      targetsPremise: 3,
                      answer: `Das ist die schwerste Frage, und ich beantworte sie nicht mit einer Formel. Ich kann sagen: Gott hat uns Verstand gegeben, Krankheiten zu bekämpfen – und die Malariaforschung, Moskitonetze und Impfstoffe sind Teil dieser Berufung. Eine Welt, in der Gott jede Folge sofort verhindert, wäre keine verlässliche Welt mehr. Vor allem aber: Gott schaut nicht von außen zu, sondern hat in Christus selbst gelitten, und er verheißt, alle Tränen abzuwischen.`,
                      detail: `Ehrman verlor nach eigener Aussage seinen Glauben vor allem am Problem des Leids (*God's Problem*, 2008). Das verdient Respekt. Philosophisch unterscheidet man: (1) das logische Problem – ist Gott mit Leid überhaupt vereinbar? Das gilt seit Plantinga weitgehend als gelöst; (2) das evidentielle Problem – macht das Ausmaß des Leids Gott unwahrscheinlich? Hier ist die Gesamtevidenz abzuwägen; (3) das existenzielle Problem – wie lebe ich mit Leid? Hier antwortet das Christentum mit dem Kreuz, der Gemeinschaft und der Hoffnung.`,
                      sources: [{ kind: 'gegner', author: 'Bart D. Ehrman', work: 'God\'s Problem', year: '2008', status: 'paraphrase', quote: `Ehrman beschreibt, dass das Problem des Leids der Hauptgrund für den Verlust seines christlichen Glaubens war.` }],
                      questionsBack: [`Wenn es keinen Gott gibt – haben die Kinder, die an Malaria sterben, dann irgendeine Hoffnung?`],
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
      id: 'mikroben-vor-adam',
      objection: `Bakterien und Viren gab es Milliarden Jahre vor dem Menschen. Mit dem Sündenfall kannst du Krankheitserreger nicht erklären.`,
      objectionBy: 'Francisco Ayala',
      answer: `Mikroben gab es lange vor uns – aber *menschliche* Krankheitserreger brauchen menschliche Wirte, und viele sind erstaunlich jung: HIV ist im 20. Jahrhundert von Affen übergesprungen, der Masernvirus hat sich nach genetischen Daten erst im ersten Jahrtausend vor Christus vom Rinderpestvirus getrennt, und der gefährlichste Malariaerreger ist ein Wirtswechsler von Gorillas. Viele Seuchen entstanden mit Viehzucht, Städten und Handel. Ich behaupte nicht, dass jede Krankheit direkt aus dem Fall stammt – über die Mechanismen gibt es kein Dogma.`,
      sources: [liu2010, { kind: 'wissenschaft', author: 'Ariane Düx u. a.', work: '„Measles virus and rinderpest virus divergence dated to the sixth century BCE", Science 368, S. 1367–1370', year: '2020', status: 'paraphrase' }],
      followUps: [
        {
          id: 'zoonosen-natuerlich',
          objection: `Zoonosen entstehen auf natürlichem Weg, nicht durch Sünde. Du vermischst Biologie und Theologie.`,
          objectionBy: 'Jerry Coyne',
          answer: `Beides gilt: Der Mechanismus ist natürlich, und menschliches Verhalten – Abholzung, Wildtierhandel, dichte Städte – beeinflusst ihn stark. Theologisch behaupte ich gerade *nicht*, dass jede Krankheit eine Strafe ist. Jesus selbst sagt über den Blindgeborenen: „Es hat weder dieser gesündigt noch seine Eltern." Der Fall erklärt den Zustand der Welt im Ganzen, nicht jede einzelne Infektion.`,
          followUps: [
            {
              id: 'strafe-gottes-prediger',
              objection: `Viele Prediger haben AIDS oder Corona eine Strafe Gottes genannt. Das ist die eigentliche Botschaft der Religion.`,
              objectionBy: 'Christopher Hitchens',
              answer: `Solche Aussagen waren falsch und unbiblisch – Jesus hat diese Deutung zurückgewiesen (Joh 9,3; Lk 13,1–5). Die eigentliche christliche Antwort auf Seuchen war Pflege: In den Epidemien der Antike blieben Christen bei den Kranken, als andere flohen; Basilius baute eine Krankenanstalt. Und in der COVID-19-Pandemie hat die koptische Kirche Gottesdienste zeitweise ausgesetzt, um Menschen zu schützen.`,
              sources: [{ kind: 'fachliteratur', author: 'Rodney Stark', work: 'The Rise of Christianity', ref: 'Kap. 4 (Epidemien)', year: '1996', status: 'paraphrase', quote: `Stark beschreibt, wie Christen in den großen Epidemien des 2. und 3. Jahrhunderts Kranke pflegten, was die Überlebensrate deutlich erhöhte.` }],
              followUps: [
                {
                  id: 'gebet-gegen-viren',
                  objection: `Wenn Gebet nichts gegen Viren nützt und ihr ohnehin zum Arzt geht – wozu braucht ihr dann Gott?`,
                  objectionBy: 'Richard Dawkins',
                  answer: `Christen beten *und* gehen zum Arzt – das sagt schon Jesus Sirach. Gebet ist kein Ersatzmechanismus für Medizin, sondern Beziehung zu Gott, in Gesundheit und Krankheit. Und die Medizin selbst ist für uns Teil von Gottes Gabe: Wer forscht und heilt, erfüllt einen göttlichen Auftrag. Ob Gott existiert, entscheidet sich nicht daran, ob er Impfstoffe überflüssig macht.`,
                  questionsBack: [`Hältst du einen Glauben nur dann für sinnvoll, wenn er die Medizin ersetzt?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'nuetzliche-viren-schoenfaerberei',
      objection: `Das Gerede von „nützlichen Viren" ist Schönfärberei. Viren sind egoistische Genparasiten; Syncytin ist ein Zufallsfund.`,
      objectionBy: 'Richard Dawkins',
      targetsPremise: 1,
      answer: `Das ist keine Schönfärberei, sondern Meeresbiologie: Viren töten täglich einen großen Teil der Meeresbakterien, setzen dadurch Nährstoffe frei und steuern Kohlenstoffkreisläufe mit. Phagen, die Cyanobakterien befallen, tragen sogar Photosynthese-Gene. Im Darm regulieren Phagen die Bakteriengemeinschaft; in der Medizin nutzt man sie gegen resistente Keime. „Egoistisch" ist eine Metapher – die Ökologie zeigt Viren als Teil der Infrastruktur des Lebens.`,
      sources: [suttle2007, mann2003],
      followUps: [
        {
          id: 'syncytin-kooptiert',
          objection: `Syncytin wurde kooptiert – die Evolution recycelt Müll. Das spricht für Bastelei, nicht für einen Designer.`,
          objectionBy: 'Jerry Coyne',
          answer: `„Kooptiert" beschreibt das Ergebnis, nicht den Weg dorthin: Ein Hüllprotein musste in die richtige Regulation, das richtige Gewebe und den richtigen Zeitpunkt eingebunden werden. Aber selbst wenn man deine Deutung annimmt, bleibt mein Punkt: Was als „Virus" begann, ist heute für die menschliche Fortpflanzung unverzichtbar. Die Kategorie „Virus" ist nicht böse. Und biblisch ist das vertraut: Gott kann das, was schaden könnte, zum Guten wenden.`,
          sources: [mi2000],
          followUps: [
            {
              id: 'pocken-auch-nuetzlich',
              objection: `Dann sag den Pockenopfern, Viren seien nützlich.`,
              objectionBy: 'Christopher Hitchens',
              answer: `Das sage ich nicht. Die Pocken waren eine furchtbare Geißel, und ich bin dankbar, dass sie 1980 für ausgerottet erklärt wurden – dank der Impfung, deren Grundlage der Landarzt und Pfarrerssohn Edward Jenner legte. Ich sage nur: Die Existenz von Viren als solche ist kein Argument gegen Gott, so wie die Existenz von Feuer kein Argument gegen Gott ist, nur weil Häuser abbrennen.`,
              followUps: [
                {
                  id: 'jenner-irrelevant',
                  objection: `Dass Jenner Christ war, ist irrelevant. Die Pocken wurden von der Wissenschaft besiegt, nicht vom Gebet.`,
                  objectionBy: 'Jerry Coyne',
                  answer: `Einverstanden, es beweist nicht Gott. Aber es widerlegt die Vorstellung, Glaube und Krankheitsbekämpfung seien Gegner. Das christliche Weltbild liefert sogar ein Motiv: Die Welt ist gut, aber beschädigt – deshalb ist Krankheit ein Feind, den man bekämpft, und Pflege ein Dienst an Christus (Mt 25,36). Wissenschaft und Gebet stehen bei uns nicht im Wettbewerb.`,
                  sources: [{ kind: 'bibel', work: 'Matthäus', ref: '25,36', quote: `Ich bin krank gewesen, und ihr habt mich besucht.`, translation: 'Luther 1912', status: 'verbatim' }],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'immunsystem-flickwerk',
      objection: `Unser Immunsystem ist ein Flickwerk aus einem endlosen Wettrüsten. Autoimmunerkrankungen und Allergien zeigen: Kein Designer würde so bauen.`,
      objectionBy: 'Nathan Lents',
      answer: `Das Immunsystem gehört zu den raffiniertesten Systemen, die wir kennen: Es erzeugt durch gezielte Genumlagerung Millionen verschiedener Antikörper, unterscheidet Selbst von Fremd und hat ein Gedächtnis. Dass ein so komplexes System versagen kann, spricht nicht gegen Planung. Und die Allergieforschung zeigt etwas Aufschlussreiches: Allergien nehmen zu, wenn Kinder zu wenig Kontakt mit Mikroben haben – das Immunsystem ist auf eine Welt *mit* nützlichen Mikroben angelegt.`,
      sources: [{ kind: 'wissenschaft', author: 'Graham A. W. Rook', work: '„Old friends"-Hypothese, u. a. in: The Hygiene Hypothesis and Darwinian Medicine (Hg.)', year: '2009', status: 'paraphrase', quote: `Das Immunsystem braucht den Kontakt mit „alten Freunden" – harmlosen Mikroben, Umweltkeimen, Darmflora –, um Regulationsmechanismen auszubilden; fehlt er, häufen sich Allergien und Autoimmunerkrankungen.` }],
      followUps: [
        {
          id: 'rag-transposon',
          objection: `Die Genumlagerung der Antikörper stammt von einem Transposon, einem „springenden Gen". Wieder recycelter Müll.`,
          objectionBy: 'Kenneth Miller',
          answer: `Dass RAG-Proteine Ähnlichkeit mit einer Transposase haben, ist ein interessanter Befund. Aber Ähnlichkeit einzelner Bauteile zeigt nicht, wie das ganze System entstand: Umlagerung, Reparatur, Auswahl, Toleranz gegenüber dem eigenen Körper und Gedächtnis müssen zusammenspielen, sonst ist das System nutzlos oder tödlich. Herkunftshinweise ersetzen keinen schrittweisen Weg.`,
          followUps: [
            {
              id: 'kitzmiller-buecherstapel',
              objection: `Im Kitzmiller-Prozess 2005 hat man Behe einen Stapel Bücher und Artikel zur Evolution des Immunsystems vorgelegt. Er hatte sie nicht gelesen.`,
              objectionBy: 'Kenneth Miller',
              answer: `Das ist so geschehen, und ich verschweige es nicht. Behes Antwort war, dass diese Literatur Homologien und Hypothesen enthält, aber keinen detaillierten, geprüften Schritt-für-Schritt-Weg für die Entstehung des Systems durch Mutation und Selektion. Ob man das überzeugend findet, kann jeder prüfen. Ein Bücherstapel im Gerichtssaal ersetzt jedenfalls nicht die Frage: Welche Arbeit zeigt diesen Weg im Detail?`,
              sources: [{ kind: 'fachliteratur', author: 'Michael J. Behe', work: 'Zeugenaussage im Verfahren Kitzmiller v. Dover Area School District', year: '2005', status: 'paraphrase' }],
              followUps: [
                {
                  id: 'gericht-entschieden',
                  objection: `Das Gericht hat Intelligent Design als Religion eingestuft. Die Sache ist erledigt.`,
                  objectionBy: 'Kenneth Miller',
                  answer: `Das Urteil betraf die Frage, was an einer staatlichen Schule im Biologieunterricht gelehrt werden darf – eine juristische, keine naturwissenschaftliche Entscheidung. Über wissenschaftliche Wahrheit entscheiden keine Gerichte. Und für unsere Frage ist ID gar nicht nötig: Auch theistische Evolutionisten wie du staunen über das Immunsystem. Die Frage, ob ein guter Gott hinter einer Welt mit Krankheit stehen kann, bleibt für uns beide dieselbe.`,
                  questionsBack: [`Du bist selbst Katholik – wie beantwortest du die Frage nach Gott und den Krankheitserregern?`],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Welcher Anteil der Mikroben ist tatsächlich krankheitserregend – und welcher lebensnotwendig?`,
    `Warum werden harmlose Cholera-Bakterien erst durch einen Phagen gefährlich – passt das zu „ursprünglich böse entworfen"?`,
    `Löst die theistische Evolution das Problem der Krankheit – oder verschiebt sie es nur?`,
    `Wenn es keinen Gott gibt: Ist Malaria dann objektiv böse – oder nur unangenehm für uns?`,
    `Warum haben gerade Christen Krankenhäuser gegründet, wenn ihr Glaube Krankheit verklärt?`,
  ],
  avoid: [
    `„Krankheit ist Strafe für Sünde" – Jesus weist das ausdrücklich zurück (Joh 9,3).`,
    `Pathogene einfach dem Teufel zuschreiben, um der Frage auszuweichen.`,
    `Die Proportionen übertreiben („Viren sind alle gut") – manche sind verheerend, das gehört ehrlich gesagt.`,
    `Medizin gegen Gebet ausspielen – die Kirche lehrt beides.`,
  ],
  concessions: [
    `Einige Krankheitserreger nutzen hochkomplexe Mechanismen; wer Design behauptet, muss die moralische Frage ernst nehmen.`,
    `Die These der „Entgleisung" ist für viele Erreger gut belegt, aber nicht für jeden im Detail gezeigt.`,
    `Christen haben Seuchen manchmal fälschlich als Strafe gedeutet.`,
  ],
  furtherReading: [
    lennox2020,
    behe2007,
    { kind: 'sonstiges', author: 'Carl Zimmer', work: 'A Planet of Viruses', year: '2011', status: 'paraphrase', note: 'Populärwissenschaftliche Einführung in die ökologische Rolle der Viren (säkularer Autor).' },
    suttle2007,
  ],
  difficulty: 2,
  tags: ['Viren', 'Bakterien', 'Malaria', 'Syncytin', 'Mikrobiom', 'Theodizee', 'Behe', 'Medizin'],
  related: ['natur-grausamkeit-design/parasiten-grausames-design', 'theodizee/natuerliche-uebel', 'genetik/pseudogene-ervs', 'medizin-wunder/kirche-gegen-medizin', 'medizin-wunder/gebetsstudien', 'evolution/id-keine-wissenschaft'],
};

export default claim;
