import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'kirche-gegen-forschung',
  title: `„Die Kirche behindert Fortschritt (IVF, Embryonenforschung, CRISPR)."`,
  proponents: [
    { name: 'Steven Pinker', role: 'Kognitionspsychologe, Harvard', work: '„The Moral Imperative for Bioethics", Boston Globe (2015)' },
    { name: 'Julian Savulescu', role: 'Bioethiker (Oxford, Singapur)', work: '„Procreative Beneficence: Why We Should Select the Best Children", Bioethics 15 (2001)' },
    { name: 'John Harris', role: 'Bioethiker, Manchester', work: 'Enhancing Evolution: The Ethical Case for Making Better People (2007)' },
    { name: 'Lee M. Silver', role: 'Molekularbiologe, Princeton', work: 'Remaking Eden (1997)' },
  ],
  steelman: `Seit der Geburt von Louise Brown 1978 hat die künstliche Befruchtung weltweit über zehn Millionen Kindern das Leben geschenkt – Kirchen standen ihr skeptisch gegenüber. Embryonale Stammzellen versprechen Therapien für Parkinson, Diabetes und Querschnittslähmung; die „überzähligen" Embryonen aus Kinderwunschbehandlungen werden ohnehin vernichtet – warum sie nicht für die Heilung von Menschen nutzen? Mit CRISPR könnten Erbkrankheiten für immer aus Familien verschwinden. Jedes Mal stellen sich religiöse Stimmen mit metaphysischen Bedenken in den Weg, die eine plurale Gesellschaft nicht teilt. Pinker bringt es auf den Punkt: Die wichtigste Aufgabe der Bioethik sei heute, „aus dem Weg zu gehen". Jeder Monat Verzögerung kostet Leben.`,
  biblical: {
    summary: `Die Bibel bejaht Erkenntnis und Gestaltung der Welt: Der Mensch soll die Erde „bebauen und bewahren" (Gen 2,15), und es ist „der Könige Ehre, eine Sache erforschen" (Spr 25,2). Kinder sind eine Gabe Gottes (Ps 127,3), die Not der Kinderlosigkeit nimmt die Schrift ernst (Sara, Hanna, Elisabeth). Zugleich setzt sie eine klare Grenze: Man darf nicht „Übles tun, auf daß Gutes daraus komme" (Röm 3,8). Nicht alles Machbare ist gut: „Ich habe es zwar alles Macht; aber es frommt nicht alles" (1 Kor 10,23). Und der Turmbau zu Babel (Gen 11) warnt vor einer Technik, die Gott ersetzen will.`,
    detail: `- **Gen 1,28; 2,15**: Herrschaft ist Verwaltung im Auftrag Gottes, nicht Willkür.
- **1 Sam 1**: Hannas Schmerz über ihre Kinderlosigkeit wird ernst genommen; Gott hört ihr Gebet. Die Kirche begegnet ungewollt kinderlosen Paaren mit Mitgefühl.
- **Röm 3,8**: Der Zweck heiligt nicht die Mittel – das zentrale Prinzip für Forschung an Menschen.
- **Mt 7,12**: Die Goldene Regel gilt auch gegenüber dem Embryo und gegenüber künftigen Generationen, über deren Erbgut entschieden würde.`,
    sources: [
      { kind: 'bibel', work: 'Genesis', ref: '2,15', quote: `Und Gott der HERR nahm den Menschen und setzte ihn in den Garten Eden, daß er ihn baute und bewahrte.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Psalm', ref: '127,3', quote: `Siehe, Kinder sind eine Gabe des HERRN, und Leibesfrucht ist ein Geschenk.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Römer', ref: '3,8', quote: `Paulus weist den Grundsatz „Lasset uns Übles tun, auf daß Gutes daraus komme" als verwerflich zurück.`, status: 'paraphrase' },
      { kind: 'bibel', work: '1. Korinther', ref: '10,23', quote: `Ich habe es zwar alles Macht; aber es frommt nicht alles.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche ist nicht forschungsfeindlich; sie bejaht Medizin und Wissenschaft als Gaben Gottes. Ihre Grenzen folgen aus zwei Grundsätzen: der Würde des menschlichen Lebens von der Empfängnis an und der Heiligkeit der Ehe. Daraus ergibt sich: Eine künstliche Befruchtung innerhalb der Ehe mit den Keimzellen der Eheleute wird nach verbreiteter Darstellung nicht grundsätzlich abgelehnt; Samen- oder Eizellspenden Dritter lehnt die Kirche ab – Papst Schenuda III. bezeichnete die Befruchtung einer Frau mit dem Samen eines anderen Mannes als Ehebruch. Die Erzeugung „überzähliger" Embryonen, die vernichtet oder für Forschung verbraucht werden, widerspricht dem Lebensschutz. Gentherapie zur Heilung kranker Menschen ist dagegen grundsätzlich zu begrüßen.`,
    detail: `Wichtig für Gespräche: Die Kirche sagt nicht Nein zu Heilung, sondern Nein zu Mitteln, die einen Menschen töten oder die Ehe auflösen. Sie unterstützt ethisch unbedenkliche Wege – adulte und reprogrammierte (iPS-)Stammzellen, somatische Gentherapie, Behandlung der Ursachen von Unfruchtbarkeit – und begleitet kinderlose Paare seelsorgerlich, auch mit dem Weg der Adoption.`,
    sources: [
      { kind: 'koptisch', author: 'Papst Schenuda III.', work: 'Äußerungen zur Samenspende (nach Presseberichten)', year: 'um 2010', quote: `Die Befruchtung einer Frau mit dem Samen eines Mannes, der nicht ihr Ehemann ist, kommt einem Ehebruch gleich und ist verboten.`, status: 'paraphrase', note: 'Nach Presseberichten wiedergegeben; kein Originaldokument geprüft.' },
      { kind: 'koptisch', work: 'Verbreitete Darstellung der koptisch-orthodoxen Haltung zur künstlichen Befruchtung', quote: `Künstliche Befruchtung innerhalb der Ehe mit den eigenen Keimzellen der Eheleute wird nicht grundsätzlich verworfen; Fremdspende und die Vernichtung von Embryonen werden abgelehnt.`, status: 'unverified', note: 'Kein offizielles synodales Dokument gefunden (Websuche 2026). Gestützt durch die Übersichtsarbeit von Sallam & Sallam 2016 (nächste Quelle) und die Berichte über Schenuda III. zur Fremdspende; vor Verwendung mit einem koptischen Priester abgleichen.' },
      { kind: 'wissenschaft', author: 'Hassan N. Sallam & Nooman H. Sallam', work: '„Religious aspects of assisted reproduction", Facts, Views & Vision in ObGyn 8 (1)', ref: '33–48', year: '2016', quote: `Protestanten, Anglikaner, koptische Christen und sunnitische Muslime akzeptieren die meisten Formen der assistierten Reproduktion, sofern keine Ei-, Samen- oder Embryonenspende beteiligt ist.`, status: 'paraphrase', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5096425/', note: 'Per Websuche gefunden (2026); medizinische Übersichtsarbeit, keine kirchenamtliche Quelle.' },
    ],
  },
  opposingView: {
    summary: `**Fakten zur Forschung:** Die erste menschliche embryonale Stammzelllinie gewann James Thomson 1998. 2006 (Maus) und 2007 (Mensch) gelang Shinya Yamanaka die Reprogrammierung gewöhnlicher Körperzellen zu pluripotenten Stammzellen (iPS-Zellen) – ohne Embryonen; er erhielt dafür 2012 mit John Gurdon den Nobelpreis. Adulte Stammzellen werden seit Jahrzehnten klinisch genutzt (Knochenmarktransplantation; Nobelpreis für E. Donnall Thomas 1990). 2025 wurden Studien zu Zellersatztherapien bei Parkinson sowohl mit embryonal als auch mit iPS-abgeleiteten Zellen veröffentlicht – beide Ansätze sind noch experimentell. **CRISPR:** Doudna und Charpentier erhielten 2020 den Chemie-Nobelpreis; Ende 2023 wurde mit Casgevy die erste CRISPR-Therapie (gegen Sichelzellkrankheit und Beta-Thalassämie) in Großbritannien und den USA zugelassen – eine somatische Therapie, die nicht vererbt wird. 2018 verkündete He Jiankui die Geburt genetisch veränderter Zwillinge; er wurde weltweit verurteilt und 2019 in China zu drei Jahren Haft verurteilt.`,
    detail: `- **IVF:** Weltweit über zehn Millionen Geburten; Robert Edwards erhielt 2010 den Nobelpreis. Ethische Streitpunkte: überzählige und eingefrorene Embryonen, Embryonenselektion, Fremdspende, Leihmutterschaft.
- **Keimbahneingriffe:** Internationale Gremien (Gipfeltreffen 2015/2018, WHO 2021) halten vererbbare Genomeditierung beim Menschen derzeit für unverantwortlich – eine Position, die mit der kirchlichen übereinstimmt.
- **Säkulare Kritik an „liberaler Eugenik":** Jürgen Habermas warnte 2001 in *Die Zukunft der menschlichen Natur*, genetische Eingriffe in Nachkommen verletzten deren Selbstverständnis als freie, nicht „gemachte" Personen.
- **Pränataldiagnostik:** In einigen Ländern (z. B. Island, Dänemark) werden nach einer Down-Syndrom-Diagnose nahezu alle Schwangerschaften abgebrochen – ein Beispiel für faktische Selektion.`,
    sources: [
      { kind: 'wissenschaft', author: 'Kazutoshi Takahashi & Shinya Yamanaka', work: 'Induction of Pluripotent Stem Cells from Mouse Embryonic and Adult Fibroblast Cultures by Defined Factors', ref: 'Cell 126 (2006), 663–676', year: '2006', status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'Kazutoshi Takahashi u. a.', work: 'Induction of Pluripotent Stem Cells from Adult Human Fibroblasts by Defined Factors', ref: 'Cell 131 (2007)', year: '2007', status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'James A. Thomson u. a.', work: 'Embryonic Stem Cell Lines Derived from Human Blastocysts', ref: 'Science 282 (1998)', year: '1998', status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Jürgen Habermas', work: 'Die Zukunft der menschlichen Natur. Auf dem Weg zu einer liberalen Eugenik?', year: '2001', status: 'paraphrase', note: 'Säkularer Philosoph – Kritik an Keimbahneingriffen ohne religiöse Prämissen.' },
      { kind: 'gegner', author: 'Julian Savulescu', work: 'Procreative Beneficence: Why We Should Select the Best Children', ref: 'Bioethics 15 (2001), 413–426', year: '2001', status: 'paraphrase' },
      { kind: 'gegner', author: 'Steven Pinker', work: 'The Moral Imperative for Bioethics', ref: 'Boston Globe, 1. August 2015', year: '2015', quote: `Das wichtigste moralische Ziel der heutigen Bioethik lasse sich in einem Satz zusammenfassen: „aus dem Weg gehen".`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Die Kirche ist nicht gegen Forschung, sondern dagegen, Menschen für Forschung zu töten und Kinder wie Produkte zu behandeln. Sie begrüßt Gentherapie, die Kranke heilt (wie die 2023 zugelassene CRISPR-Therapie gegen Sichelzellkrankheit), adulte Stammzellen und die iPS-Zellen von Shinya Yamanaka (Nobelpreis 2012), die ganz ohne Embryonen auskommen. Und bei den CRISPR-Babys von He Jiankui stand die Kirche auf derselben Seite wie die weltweite Wissenschaftsgemeinschaft, die dieses Experiment verurteilte.`,
  keyPoints: [
    `**Nicht gegen Heilung, sondern gegen Tötung:** Der Grundsatz „Man darf nicht Böses tun, damit Gutes entsteht" (Röm 3,8) gilt auch in der Forschung.`,
    `**Ethische Alternativen existieren:** iPS-Zellen (Yamanaka 2006/2007, Nobelpreis 2012) und adulte Stammzellen; Knochenmarktransplantation ist seit Jahrzehnten Standard.`,
    `**Somatische Gentherapie ist willkommen:** Casgevy (2023) heilt Kranke, ohne das Erbgut künftiger Generationen zu verändern.`,
    `**Keimbahn: Kirche und Wissenschaft einig:** He Jiankuis Experiment (2018) wurde weltweit verurteilt; internationale Gremien halten vererbbare Eingriffe derzeit für unverantwortlich.`,
    `**IVF differenziert:** Die koptische Kirche lehnt nicht jede künstliche Befruchtung ab, wohl aber Fremdspende und die Vernichtung von Embryonen.`,
    `**Auch Säkulare warnen:** Habermas kritisiert „liberale Eugenik"; Behindertenrechtler warnen vor Selektion.`,
  ],
  argument: {
    name: 'Zweck-Mittel-Argument',
    summary: 'Ein guter Zweck rechtfertigt nicht die Tötung eines unschuldigen Menschen – zumal es ethische Wege gibt.',
    premises: [
      {
        text: 'P1: Man darf einen unschuldigen Menschen nicht absichtlich töten, auch nicht, um anderen zu helfen.',
        support: `Röm 3,8; allgemein anerkannter Grundsatz der Forschungsethik seit dem Nürnberger Kodex (1947): Kein Mensch darf zum bloßen Mittel für den Nutzen anderer gemacht werden.`,
      },
      {
        text: 'P2: Der menschliche Embryo ist ein lebender, individueller Mensch.',
        support: `Siehe den Claim „Ein Embryo ist nur ein Zellhaufen"; embryologische Standardlehrbücher.`,
      },
      {
        text: 'P3: Verbrauchende Embryonenforschung tötet Embryonen absichtlich, um Erkenntnisse oder Therapien für andere zu gewinnen.',
        support: `Bei der Gewinnung embryonaler Stammzellen wird der Embryo zerstört.`,
      },
    ],
    conclusion: 'Verbrauchende Embryonenforschung ist ethisch nicht zulässig. Weil es Alternativen gibt (iPS- und adulte Stammzellen), bedeutet das keinen Verzicht auf Heilung, sondern einen anderen Weg dorthin.',
  },
  voices: [
    {
      person: 'lejeune',
      role: 'als Genetiker im Dienst der Kranken',
      text: `Lejeune war ein Forscher von Weltrang, der sein Leben der Erforschung genetischer Krankheiten widmete – mit dem Ziel, Kinder mit Down-Syndrom zu **heilen**, nicht auszusortieren. Dass seine Entdeckung zur vorgeburtlichen Selektion genutzt wurde, empfand er als Verkehrung der Medizin. Er steht dafür, dass christlicher Glaube und Spitzenforschung zusammengehen, solange die Forschung dem Menschen dient und ihn nicht beseitigt.`,
      sources: [
        { kind: 'wissenschaft', author: 'Jérôme Lejeune, Marthe Gautier, Raymond Turpin', work: 'Étude des chromosomes somatiques de neuf enfants mongoliens', ref: 'Comptes rendus de l\'Académie des sciences 248 (1959)', year: '1959', status: 'paraphrase' },
      ],
    },
    {
      person: 'francis-collins',
      role: 'als Genetiker und ehemaliger Direktor der NIH',
      text: `Collins leitete das Humangenomprojekt und war Direktor der US-Gesundheitsbehörde NIH. 2015 erklärte er, die NIH würden keine Genomeditierung an menschlichen Embryonen finanzieren, weil vererbbare Eingriffe ernste ethische und sicherheitsrelevante Fragen aufwerfen und ein Überschreiten einer Grenze bedeuten, die weithin respektiert wird. Gleichzeitig ist er ein entschiedener Befürworter somatischer Gentherapien, die kranke Menschen heilen.`,
      sources: [
        { kind: 'sonstiges', author: 'Francis S. Collins', work: 'Statement on NIH funding of research using gene-editing technologies in human embryos', year: '2015', status: 'paraphrase', note: 'Collins befürwortete in seiner Amtszeit auch die staatliche Förderung bestimmter Forschung an embryonalen Stammzellen – hier weicht er von der orthodoxen Position ab.' },
      ],
    },
    {
      person: 'shenouda-iii',
      role: 'als Patriarch zur Ethik der Fortpflanzung',
      text: `Papst Schenuda III. hielt an der Einheit von Ehe und Elternschaft fest: Ein Kind soll aus der Gemeinschaft von Mann und Frau hervorgehen. Nach Presseberichten bezeichnete er die Befruchtung einer Frau mit dem Samen eines fremden Mannes als Ehebruch. Damit setzte er keine Grenze gegen die Medizin, sondern gegen die Auflösung der Ehe in eine technische Dienstleistung mit Dritten.`,
      sources: [
        { kind: 'koptisch', author: 'Papst Schenuda III.', work: 'Äußerungen zur Samenspende (nach Presseberichten)', year: 'um 2010', status: 'paraphrase' },
      ],
    },
    {
      person: 'cs-lewis',
      role: 'als Kritiker der Menschenformung',
      text: `Lewis sah voraus, dass die Macht, künftige Generationen zu formen, die größte Macht ist, die Menschen je über andere ausüben könnten: Jede Generation, die über die Natur der nächsten verfügt, macht sie zu ihrem Produkt. Wer festlegt, wie künftige Menschen sein sollen, braucht Maßstäbe jenseits seiner Wünsche – sonst ist das Ergebnis „die Abschaffung des Menschen".`,
      sources: [
        { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'The Abolition of Man', ref: 'Kap. 3', year: '1943', status: 'paraphrase' },
      ],
    },
    {
      person: 'john-wyatt',
      role: 'als Arzt und Ethiker der Fortpflanzungsmedizin',
      text: `Wyatt beschreibt, wie sich durch die Reproduktionstechnik der Blick auf Kinder verschiebt – vom geschenkten Gegenüber zum geplanten Produkt, das Qualitätskriterien erfüllen soll. Er plädiert dafür, das Leid ungewollter Kinderlosigkeit ernst zu nehmen und medizinisch zu helfen, aber Techniken abzulehnen, die Embryonen selektieren oder vernichten. Christliche Ethik sei hier nicht Fortschrittsverweigerung, sondern Schutz des Schwächsten.`,
      sources: [
        { kind: 'fachliteratur', author: 'John Wyatt', work: 'Matters of Life and Death (2. Aufl.)', year: '2009', status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'ivf-kinderwunsch',
      objection: `IVF hat Millionen Paaren ein Kind geschenkt. Wer dagegen ist, ist herzlos gegenüber Kinderlosen.`,
      objectionBy: 'Robert Edwards (sinngemäß) / Kinderwunschmedizin',
      answer: `Ungewollte Kinderlosigkeit ist ein tiefer Schmerz – die Bibel erzählt von Sara, Hanna und Elisabeth. Die koptische Kirche lehnt die künstliche Befruchtung auch nicht pauschal ab. Ihre Bedenken betreffen Fremdspenden, die Selektion von Embryonen und die Erzeugung „überzähliger" Embryonen, die eingefroren oder vernichtet werden. Man kann so behandeln, dass nur so viele Embryonen entstehen, wie übertragen werden.`,
      followUps: [
        {
          id: 'ueberzaehlige-embryonen',
          objection: `Die überzähligen Embryonen werden sowieso vernichtet. Dann ist es doch besser, sie für die Forschung zu nutzen.`,
          objectionBy: 'Befürworter der Embryonenforschung',
          targetsPremise: 3,
          answer: `Dass jemand ohnehin sterben wird, gibt niemandem das Recht, ihn zu töten, um ihn zu nutzen – wir entnehmen auch Todkranken keine Organe vor ihrem Tod. Besser ist, keine überzähligen Embryonen zu erzeugen; und für bereits existierende gibt es die Möglichkeit der Embryonenadoption.`,
          followUps: [
            {
              id: 'embryonenadoption',
              objection: `Embryonenadoption? Das klingt absurd.`,
              answer: `Es ist schlicht die Rettung eines existierenden menschlichen Lebens: Ein anderes Paar nimmt den eingefrorenen Embryo an, die Frau trägt ihn aus. In den USA gibt es solche Programme seit den 1990er-Jahren, und so geborene Kinder leben heute. Absurd ist eher, dass wir Menschen in Tiefkühltanks lagern und dann darüber streiten, wozu man sie verbrauchen darf.`,
            },
          ],
        },
      ],
    },
    {
      id: 'stammzellen-heilung',
      objection: `Embryonale Stammzellen werden Parkinson, Diabetes und Querschnittslähmung heilen. Mit eurem Widerstand blockiert ihr Heilung.`,
      objectionBy: 'Befürworter der Embryonenforschung',
      targetsPremise: 1,
      answer: `Shinya Yamanaka hat 2006 gezeigt, dass man gewöhnliche Körperzellen zu Stammzellen mit denselben Fähigkeiten reprogrammieren kann – ohne einen einzigen Embryo. Dafür erhielt er 2012 den Nobelpreis. Er selbst berichtete, der Blick auf einen Embryo durch das Mikroskop habe ihn bewogen, nach einem anderen Weg zu suchen. Adulte Stammzellen werden ohnehin seit Jahrzehnten erfolgreich eingesetzt.`,
      sources: [
        { kind: 'sonstiges', author: 'Shinya Yamanaka (Interview)', work: 'Bericht in der New York Times („Risk Taking Is in His Genes")', year: '2007', quote: `Yamanaka berichtete, beim Anblick eines Embryos im Mikroskop sei ihm bewusst geworden, wie gering der Unterschied zu seinen eigenen Töchtern sei, und er habe nach einem Weg gesucht, ohne die Zerstörung von Embryonen zu forschen.`, status: 'paraphrase', note: 'Sinngemäß nach Presseinterview; nicht als wörtliches Zitat verwenden.' },
      ],
      followUps: [
        {
          id: 'ips-nicht-gleichwertig',
          objection: `iPS-Zellen sind nicht gleichwertig – sie tragen epigenetische Spuren ihrer Herkunft und haben ein Tumorrisiko.`,
          objectionBy: 'Stammzellforscher',
          answer: `Diese Herausforderungen sind real; die Forschung arbeitet daran, und auch embryonale Stammzellen bergen Tumorrisiken. 2025 wurden Parkinson-Studien mit beiden Zelltypen veröffentlicht, beide noch im frühen Stadium. Aber selbst wenn embryonale Zellen technisch etwas leichter wären: Der Zweck heiligt nicht die Mittel.`,
          followUps: [
            {
              id: 'brennendes-labor',
              objection: `Stell dir ein brennendes Labor vor: Du kannst ein fünfjähriges Kind retten oder einen Behälter mit tausend Embryonen. Du rettest das Kind – also glaubst du selbst nicht, dass Embryonen Menschen sind.`,
              objectionBy: 'Gedankenexperiment aus der Bioethik',
              targetsPremise: 2,
              answer: `Wen ich in einer Notlage rette, sagt nichts darüber, wer ein Mensch ist. Die meisten würden auch ihr eigenes Kind vor zwei fremden Kindern retten – ohne dass die fremden Kinder deshalb keine Menschen wären. Zudem: Retten ist nicht Töten. Aus der Wahl, wen ich zuerst rette, folgt kein Recht, die anderen zu zerstören.`,
            },
          ],
        },
      ],
    },
    {
      id: 'crispr-erbkrankheiten',
      objection: `Mit CRISPR könnten wir Erbkrankheiten für immer ausrotten. Und wieder bremst die Kirche.`,
      objectionBy: 'Lee Silver / John Harris',
      answer: `Die Kirche begrüßt Gentherapie, die Kranke heilt – etwa die 2023 zugelassene CRISPR-Therapie gegen Sichelzellkrankheit, die nur die Zellen des Patienten verändert. Bei Eingriffen in die Keimbahn, die an alle Nachkommen vererbt werden, steht sie auf derselben Seite wie die Wissenschaftsgemeinschaft: He Jiankuis CRISPR-Babys (2018) wurden weltweit verurteilt, er selbst kam in Haft.`,
      followUps: [
        {
          id: 'designerbabys',
          objection: `Warum nicht Kinder verbessern? Savulescu sagt: Eltern haben sogar die moralische Pflicht, das bestmögliche Kind zu wählen.`,
          objectionBy: 'Julian Savulescu',
          answer: `Dann wird das Kind vom Geschenk zum Produkt mit Qualitätsanforderungen. Was als „besser" gilt, bestimmen die Mächtigen und der Markt – die Geschichte der Eugenik zeigt, wohin das führt. Schon heute werden in manchen Ländern fast alle Kinder mit Down-Syndrom vor der Geburt aussortiert. C. S. Lewis warnte: Die Macht einer Generation über die Natur der nächsten ist Macht einiger Menschen über andere.`,
          followUps: [
            {
              id: 'liberale-eugenik',
              objection: `Aber das ist liberale Eugenik – freiwillig, nicht staatlich wie im 20. Jahrhundert.`,
              objectionBy: 'Nicholas Agar / John Harris',
              answer: `Selbst der säkulare Philosoph Jürgen Habermas hält das nicht für harmlos: Ein genetisch „entworfener" Mensch kann sich nicht mehr als unverfügbar, als nicht von anderen gemacht verstehen – das beschädigt seine Freiheit. Und „freiwillig" bleibt es nicht lange, wenn Versicherungen, Konkurrenz und gesellschaftliche Erwartungen Druck machen.`,
            },
          ],
        },
      ],
    },
    {
      id: 'aus-dem-weg-gehen',
      objection: `Pinker hat recht: Die Bioethik soll aus dem Weg gehen. Religiöse Bedenken sind private Metaphysik.`,
      objectionBy: 'Steven Pinker',
      answer: `Die Geschichte der Medizin zeigt, wohin Forschung ohne ethische Grenzen führt: Zwangssterilisationen im Namen der Eugenik, die Tuskegee-Syphilis-Studie, He Jiankui. Ethik ist kein Hindernis, sondern Schutz. Und die Argumente sind nicht privat-religiös: Dass der Embryo ein menschlicher Organismus ist, steht in den Lehrbüchern; die Kritik an Keimbahneingriffen teilen säkulare Denker wie Habermas.`,
      followUps: [
        {
          id: 'kirche-immer-falsch',
          objection: `Die Kirche stand doch schon bei Galilei auf der falschen Seite – immer gegen den Fortschritt.`,
          objectionBy: 'Verbreitetes Argument',
          answer: `Der Fall Galilei ist komplizierter, als die Legende erzählt (siehe den eigenen Themenblock). Vor allem aber verwechselst du zwei Fragen: Bei Galilei ging es um eine Tatsachenfrage der Astronomie; hier geht es um die moralische Frage, was man mit Menschen tun darf. Und viele Pioniere der Wissenschaft waren gläubige Christen – von Mendel, dem Begründer der Genetik, bis zu Lejeune.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wenn es Wege zur Heilung ohne die Zerstörung von Embryonen gibt – warum nicht diese gehen?`,
    `Wer soll entscheiden, welche Eigenschaften künftiger Kinder „Verbesserungen" sind?`,
    `Warum war die weltweite Empörung über He Jiankui berechtigt – und welches Prinzip steckt dahinter?`,
    `Darf man einen Menschen töten, wenn er ohnehin sterben wird, um anderen zu helfen?`,
  ],
  avoid: [
    `„Die Kirche ist gegen künstliche Befruchtung" pauschal behaupten – die koptische Position ist differenzierter.`,
    `Kinder, die durch IVF oder Fremdspende entstanden sind, oder ihre Eltern abwerten – jedes Kind ist von Gott gewollt und geliebt.`,
    `Behaupten, embryonale Stammzellen hätten „nichts gebracht" – die Forschung ist im Gang; argumentiere mit dem Prinzip und den Alternativen.`,
  ],
  concessions: [
    `IVF hat vielen Paaren großes Glück geschenkt, und die Not der Kinderlosigkeit ist real.`,
    `Embryonale Stammzellen haben wissenschaftlich viel beigetragen, und entsprechende Therapien werden klinisch erprobt.`,
    `Christen haben neuen Techniken in der Geschichte manchmal vorschnell misstraut.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Jürgen Habermas', work: 'Die Zukunft der menschlichen Natur', year: '2001', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'John Wyatt', work: 'Matters of Life and Death', year: '2009', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Die Abschaffung des Menschen (The Abolition of Man)', year: '1943', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Robert P. George & Christopher Tollefsen', work: 'Embryo: A Defense of Human Life', year: '2008', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['IVF', 'Stammzellen', 'iPS', 'CRISPR', 'Eugenik', 'Forschungsethik'],
  related: [
    'bioethik/embryo-zellhaufen',
    'informatik-ki/transhumanismus',
    'kirchengeschichte-mythen/galilei',
    'christentum-gesellschaft/christentum-ohne-nutzen',
    'medizin-wunder/kirche-gegen-medizin',
  ],
};

export default claim;
