import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'gender-frei-waehlbar',
  title: `„Geschlecht ist frei wählbar – das biblische Menschenbild ist überholt."`,
  proponents: [
    { name: 'Judith Butler', role: 'Philosophin und Gendertheoretikerin, UC Berkeley', work: 'Gender Trouble (1990); Who\'s Afraid of Gender? (2024)' },
    { name: 'Anne Fausto-Sterling', role: 'Biologin und Gender-Forscherin, Brown University', work: 'Sexing the Body (2000)' },
    { name: 'Dan Savage', role: 'Publizist und LGBT-Aktivist', work: 'Kolumne „Savage Love"' },
    { name: 'Jack Turban', role: 'Kinder- und Jugendpsychiater, University of California San Francisco', work: 'Free to Be: Understanding Kids & Gender Identity (2024)' },
  ],
  steelman: `Biologisches Geschlecht (*sex*) und soziales Geschlecht (*gender*) sind verschiedene Dinge. Was als „männlich" oder „weiblich" gilt, ist zum großen Teil kulturell geformt – Judith Butler spricht von Geschlecht als einer wiederholten „Performance". Selbst das biologische Geschlecht ist kein klares Entweder-oder: Chromosomen, Hormone, Keimdrüsen und äußere Merkmale stimmen nicht immer überein; nach Anne Fausto-Sterling sind bis zu 1,7 % der Menschen intersexuell. Entscheidend für die Identität eines Menschen ist darum nicht sein Körper, sondern sein inneres, tief empfundenes Geschlecht. Wer Menschen mit Geschlechtsdysphorie diese Identität abspricht, verursacht unnötiges Leid; die Bestätigung ihrer Identität – sozial, rechtlich und, wo nötig, medizinisch – lindert es. In Deutschland kann seit November 2024 jeder seinen Geschlechtseintrag durch Erklärung beim Standesamt ändern. Ein biblisches Menschenbild, das nur „Mann und Frau" kennt, stammt aus einer vorwissenschaftlichen Zeit und schadet heute verletzlichen Menschen.`,
  biblical: {
    summary: `Die Bibel beginnt mit einer Aussage über die Würde **und** die Leiblichkeit des Menschen: „Gott schuf den Menschen ihm zum Bilde … und schuf sie einen Mann und ein Weib" (Gen 1,27). Beide Geschlechter tragen gleichermaßen Gottes Bild; der Leib ist keine Hülle, sondern von Gott „wunderbar gemacht" (Ps 139,13–14) und ein „Tempel des Heiligen Geistes" (1 Kor 6,19). Zugleich ist die Bibel bemerkenswert barmherzig gegenüber Menschen, die nicht in die üblichen Kategorien passten: Jesus spricht von „Verschnittenen", die „von Mutterleib so geboren" sind (Mt 19,12); Jesaja verheißt Eunuchen einen Namen im Haus Gottes, „besser denn Söhne und Töchter" (Jes 56,3–5); und der erste Nichtjude, dessen Taufe die Apostelgeschichte erzählt, ist ein äthiopischer Eunuch (Apg 8,26–39). Die Bibel kennt also Menschen mit leiblichen Besonderheiten und nimmt sie mit offenen Armen auf – ohne deshalb die Schöpfung als Mann und Frau aufzugeben.`,
    detail: `**Gen 1,27** ist keine Abwertung, sondern eine Gleichheitsaussage: In einer Welt, in der Frauen oft als minderwertig galten, sagt der Text, dass beide Geschlechter gleichermaßen Ebenbild Gottes sind. Die Zweiheit ist zugleich die Grundlage der Ehe und der Weitergabe des Lebens (Gen 1,28; 2,24).

**Ps 139,13–16** beschreibt den Leib als Gottes Werk von Anfang an: „Du hast meine Nieren bereitet und warst über mir im Mutterleibe." Der Leib gehört zu dem, was ich bin; er ist nicht ein Gegenstand, über den ein vom Körper gelöstes „wahres Ich" verfügt.

**Mt 19,12** und **Jes 56,3–5**: Eunuchen waren im alten Israel vom Tempelkult ausgeschlossen (Dtn 23,2). Jesaja kündigt an, dass Gott ihnen in seinem Haus einen ewigen Namen gibt. Jesus nennt Menschen, die „von Mutterleib so geboren" sind – nach heutiger Sprache vielleicht auch Menschen mit Besonderheiten der Geschlechtsentwicklung. Die Botschaft: Niemand ist wegen seines Leibes von Gottes Liebe ausgeschlossen.

**Apg 8**: Der äthiopische Kämmerer, ein Eunuch, liest Jesaja, wird von Philippus getauft und zieht „fröhlich" seine Straße. Die äthiopische Kirche – über Jahrhunderte eng mit dem Patriarchat von Alexandrien verbunden – sieht in ihm einen Anfang ihres Glaubens.`,
    sources: [
      { kind: 'bibel', work: 'Genesis', ref: '1,27', quote: `Und Gott schuf den Menschen ihm zum Bilde, zum Bilde Gottes schuf er ihn; und schuf sie einen Mann und ein Weib.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Psalmen', ref: '139,13–14', quote: `Denn du hast meine Nieren bereitet und warst über mir in meiner Mutter Leibe. Ich danke dir darüber, daß ich wunderbar gemacht bin.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Matthäus', ref: '19,12', quote: `Denn es sind etliche verschnitten, die sind aus Mutterleibe also geboren.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Jesaja', ref: '56,4–5', quote: `Den Verschnittenen, welche meine Sabbate halten …, will ich in meinem Hause und in meinen Mauern einen Ort geben und einen bessern Namen denn den Söhnen und Töchtern.`, translation: 'nach Luther 1912', status: 'paraphrase' },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '8,36–39', quote: `Der Kämmerer wird getauft und zieht seine Straße fröhlich.`, status: 'paraphrase' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Theologie sieht den Menschen als **Einheit von Leib und Seele**. Weil der ewige Logos einen wirklichen menschlichen Leib angenommen hat (Joh 1,14), ist der Leib nicht Nebensache, sondern zur Auferstehung und Verherrlichung bestimmt. Das Geschlecht gehört zu dieser leiblichen Wirklichkeit, die Gott gibt und nicht der Mensch macht. Zugleich gilt die Liebe der Kirche jedem Menschen, der unter seinem Leib oder seiner Identität leidet: Menschen mit Geschlechtsdysphorie und Menschen mit Besonderheiten der Geschlechtsentwicklung (DSD/Intersexualität) sind Gottes geliebte Ebenbilder; sie verdienen Achtung, geduldige Begleitung durch einen geistlichen Vater und sorgfältige medizinische und psychologische Hilfe. Spott und Verachtung sind Sünde.`,
    detail: `Athanasius beschreibt in *De Incarnatione*, dass der Logos einen Leib „wie den unseren" annahm, um ihn von innen zu heilen und mit Unvergänglichkeit zu bekleiden. Für die alexandrinische Tradition ist der Leib also kein Gefängnis der Seele (wie im Platonismus und in der Gnosis), sondern Teil des Menschen, den Gott retten will.

Ehrliche Nuance: Gregor von Nyssa spekulierte in *De opificio hominis* (16–17), Gott habe die Unterscheidung von Mann und Frau im Vorblick auf den Sündenfall hinzugefügt, während das Bild Gottes selbst „weder männlich noch weiblich" sei (vgl. Gal 3,28). Gregor folgerte daraus jedoch nicht, dass der Mensch sein Geschlecht wählen könne; er sprach über die Bestimmung der Menschheit in der Auferstehung, nicht über heutige Identitätsfragen. Die kirchliche Lehre hält am geschlechtlichen Leib als Gabe fest.`,
    sources: [
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'De Incarnatione', ref: '8–9; 44', year: 'um 318', quote: `Der Logos nahm einen Leib wie den unseren an, um ihn von innen zu erneuern und mit Unvergänglichkeit zu bekleiden.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Gregor von Nyssa', work: 'De opificio hominis (Über die Erschaffung des Menschen)', ref: '16–17', year: 'um 379', quote: `Das Bild Gottes im Menschen ist weder männlich noch weiblich; die Unterscheidung der Geschlechter wurde im Vorblick auf die Sterblichkeit hinzugefügt.`, status: 'paraphrase', note: 'Spekulative Auslegung Gregors zur Anthropologie, keine Aussage über Wählbarkeit des Geschlechts.' },
    ],
  },
  opposingView: {
    summary: `Biologisch wird das Geschlecht über die Organisation des Körpers für eine von zwei Fortpflanzungsrollen bestimmt (Produktion großer oder kleiner Keimzellen). **Besonderheiten der Geschlechtsentwicklung (DSD)** sind real, vielfältig und verdienen medizinische Sorgfalt; ihre Häufigkeit hängt von der Definition ab: Die oft zitierten 1,7 % (Fausto-Sterling) schließen Zustände ein, bei denen das Geschlecht eindeutig ist; bei enger Definition liegt die Häufigkeit nach Leonard Sax (2002) bei etwa 0,02 %. **Geschlechtsdysphorie** – anhaltendes Leiden an der Diskrepanz zwischen Körper und empfundener Identität – ist als Diagnose anerkannt (DSM-5). Die Evidenz für medizinische Behandlungen bei **Kindern und Jugendlichen** wird kontrovers bewertet: Die britische **Cass Review** (April 2024), gestützt auf systematische Übersichtsarbeiten der Universität York, beurteilte die Evidenzlage für Pubertätsblocker und gegengeschlechtliche Hormone bei Minderjährigen als schwach und empfahl einen ganzheitlichen, vorsichtigen Ansatz; NHS England verschreibt Pubertätsblocker seither nicht mehr routinemäßig außerhalb von Studien. Mehrere US-Fachgesellschaften halten dagegen an der Empfehlung des „gender-affirming care"-Modells fest, und die Cass Review wurde von einigen Fachleuten kritisiert.`,
    detail: `Für die Debatte wichtig: Die christliche Position hängt nicht an medizinischen Einzelstudien, sondern am Verständnis des Menschen als leiblich-seelische Einheit. Die Cass Review ist aber ein wichtiges Argument gegen die Behauptung, die medizinische Transition von Minderjährigen sei „wissenschaftlich geklärt" und alternativlos. Zudem fand die Review keine belastbaren Belege dafür, dass medizinische Transition bei Jugendlichen das Suizidrisiko senkt – ein Punkt, der in der öffentlichen Debatte oft anders dargestellt wird.`,
    sources: [
      { kind: 'wissenschaft', author: 'Hilary Cass u. a.', work: 'Independent Review of Gender Identity Services for Children and Young People: Final Report (Cass Review)', year: '2024', quote: `Die Evidenz für Pubertätsblocker und gegengeschlechtliche Hormone bei Minderjährigen sei schwach; empfohlen wird eine ganzheitliche Versorgung mit großer Vorsicht bei medizinischen Eingriffen. Belastbare Belege, dass diese Eingriffe das Suizidrisiko senken, fanden sich nicht.`, original: 'remarkably weak', status: 'paraphrase', note: 'Im Auftrag von NHS England; gestützt auf systematische Reviews der University of York. Geprüft (WebSearch 11/2026): Veröffentlichung April 2024; der Bericht nennt die Evidenz für Pubertätsblocker „remarkably weak". Eine von der BMA beauftragte Nachprüfung (HEOR) bestätigte, dass die Evidenzbasis begrenzt ist; NICE fand keine statistisch signifikante Wirkung auf Dysphorie und psychische Gesundheit bei geringer Evidenzqualität.' },
      { kind: 'wissenschaft', author: 'Leonard Sax', work: '„How Common Is Intersex? A Response to Anne Fausto-Sterling", Journal of Sex Research 39(3)', year: '2002', quote: `Bei enger Definition (Chromosomen und Phänotyp nicht übereinstimmend oder Phänotyp nicht eindeutig) liege die Häufigkeit von Intersexualität bei etwa 0,018 %, nicht bei 1,7 %.`, status: 'paraphrase' },
      { kind: 'gegner', author: 'Anne Fausto-Sterling', work: 'Sexing the Body: Gender Politics and the Construction of Sexuality', year: '2000', quote: `Bis zu 1,7 % aller Geburten wichen vom idealtypischen männlichen oder weiblichen Muster ab.`, status: 'paraphrase' },
      { kind: 'gegner', author: 'Judith Butler', work: 'Gender Trouble: Feminism and the Subversion of Identity', year: '1990', quote: `Geschlecht sei keine vorgegebene Substanz, sondern entstehe durch wiederholte performative Akte.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Zuerst: Wer an seinem Körper oder seiner Identität leidet, verdient Mitgefühl, Respekt und gute Begleitung – niemals Spott. Aber Geschlecht ist nicht nur ein Gefühl: Es ist im Leib eingeschrieben, und der Leib ist nach christlichem Verständnis Gottes Gabe, nicht ein Kostüm. Viele Rollenklischees sind tatsächlich kulturell, und die musst du nicht verteidigen. Und selbst das britische Gesundheitswesen ist nach der Cass Review (2024) bei Hormonbehandlungen von Jugendlichen sehr vorsichtig geworden, weil die Evidenz schwach ist.`,
  keyPoints: [
    `**Mitgefühl zuerst:** Geschlechtsdysphorie ist echtes Leiden; jeder Betroffene ist Gottes geliebtes Ebenbild.`,
    `**Rollen ≠ Leib:** Viele Geschlechterklischees sind kulturell und müssen nicht verteidigt werden; das leibliche Geschlecht dagegen ist Wirklichkeit, keine Performance.`,
    `**DSD sind real, aber selten:** Besonderheiten der Geschlechtsentwicklung verdienen Sorgfalt; sie zeigen die Störanfälligkeit der Entwicklung, nicht die Aufhebung von Mann und Frau (enge Definition ca. 0,02 %).`,
    `**Leib und Seele sind eins:** Der Logos nahm einen wirklichen Leib an; der Leib ist kein Kostüm über einem „wahren Ich".`,
    `**Vorsicht bei Kindern:** Die Cass Review (2024) fand schwache Evidenz für medizinische Transition bei Minderjährigen und keinen Beleg für ein geringeres Suizidrisiko.`,
    `**Die Bibel nimmt die „Anderen" auf:** Eunuchen erhalten einen Namen „besser als Söhne und Töchter" (Jes 56); der äthiopische Eunuch wird getauft (Apg 8).`,
  ],
  voices: [
    {
      person: 'mark-yarhouse',
      role: 'als klinischer Psychologe',
      text: `Mark Yarhouse hat sich jahrzehntelang mit der Begleitung von Menschen mit Geschlechtsdysphorie befasst. In *Understanding Gender Dysphoria* (2015) unterscheidet er drei „Linsen", durch die Christen das Thema sehen: die **Integritäts**-Linse (die Schöpfung als Mann und Frau ist bedeutsam), die **Beeinträchtigungs**-Linse (Dysphorie ist ein nicht gewähltes Leiden in einer gefallenen Welt, das Mitgefühl verdient) und die **Vielfalts**-Linse (die Identität als Kern des Selbst feiern). Yarhouse plädiert dafür, die ersten beiden zu verbinden: an Gottes Schöpfungsordnung festhalten und zugleich dem leidenden Menschen mit Geduld, Demut und praktischer Hilfe begegnen – statt mit schnellen Antworten.`,
      sources: [{ kind: 'fachliteratur', author: 'Mark A. Yarhouse', work: 'Understanding Gender Dysphoria: Navigating Transgender Issues in a Changing Culture', year: '2015', status: 'paraphrase' }],
    },
    {
      person: 'carl-trueman',
      role: 'als Ideenhistoriker',
      text: `Carl Trueman zeichnet in *The Rise and Triumph of the Modern Self* (2020) nach, wie es zu dem Satz „Ich bin eine Frau, gefangen im Körper eines Mannes" kommen konnte – ein Satz, der vor wenigen Generationen unverständlich gewesen wäre. Er beschreibt den Aufstieg des „expressiven Individualismus" von Rousseau über die Romantik und Freud bis zur sexuellen Revolution: Das wahre Selbst wird in den inneren Gefühlen verortet, und die Gesellschaft soll dieses innere Selbst anerkennen. Trueman will damit niemanden lächerlich machen, sondern zeigen, dass die Debatte weniger von Biologie als von einem neuen Menschenbild bestimmt ist – und dass Christen dieses Menschenbild verstehen müssen, um gut antworten zu können.`,
      sources: [{ kind: 'fachliteratur', author: 'Carl R. Trueman', work: 'The Rise and Triumph of the Modern Self', year: '2020', status: 'paraphrase' }],
    },
    {
      person: 'athanasius',
      role: 'als Theologe der Menschwerdung',
      text: `Für Athanasius ist die Menschwerdung der Schlüssel zum Verständnis des Leibes. Der ewige Logos hat nicht nur einen Menschen „bewohnt" oder einen Scheinleib getragen, sondern einen wirklichen menschlichen Leib zu seinem eigenen gemacht, um ihn vom Verderben zu befreien und zur Unvergänglichkeit zu führen. Daraus folgt eine hohe Achtung vor dem Leib: Er ist nicht das Gefängnis der Seele, sondern wird in der Auferstehung verherrlicht. Was Gott im Leib geschaffen hat, ist nicht beliebig formbares Material, sondern Gabe und Berufung.`,
      sources: [{ kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'De Incarnatione', ref: '8–10; 44', status: 'paraphrase' }],
    },
    {
      person: 'lukas',
      role: 'als Erzähler der Taufe des Äthiopiers',
      text: `Lukas erzählt in Apg 8, wie der Geist Philippus auf eine einsame Wüstenstraße schickt – zu einem Mann, der doppelt am Rand stand: Ausländer und Eunuch, vom Tempel ausgeschlossen. Er liest gerade Jesaja, und Philippus erklärt ihm das Evangelium. Auf die Frage „Was hindert's, dass ich mich taufen lasse?" antwortet die Erzählung mit der Taufe. Für Lukas ist das programmatisch: Das Evangelium überwindet jede Grenze, die Menschen ausschließt. Die Kirche aus allen Völkern beginnt mit einem Menschen, der nirgends dazugehörte.`,
      sources: [{ kind: 'bibel', work: 'Apostelgeschichte', ref: '8,26–39', status: 'paraphrase' }],
    },
    {
      person: 'paulus',
      role: 'als Theologe des Leibes',
      text: `Paulus schreibt an die Korinther, die den Leib für unwichtig hielten: „Wisset ihr nicht, dass euer Leib ein Tempel des Heiligen Geistes ist … und ihr seid nicht euer selbst?" (1 Kor 6,19). Der Leib gehört zum Menschen, den Gott erlöst, und er wird auferweckt (1 Kor 15). Zugleich verkündet Paulus, dass in Christus „kein Mann noch Weib" mehr trennt (Gal 3,28) – nicht weil die Geschlechter aufgehoben wären, sondern weil sie vor Gott gleich an Würde sind. Beides zusammen ist die christliche Antwort: Der geschlechtliche Leib ist Gabe, und keine Gabe begründet einen Vorrang.`,
      sources: [
        { kind: 'bibel', work: '1. Korinther', ref: '6,19–20', status: 'paraphrase' },
        { kind: 'bibel', work: 'Galater', ref: '3,28', status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'gender-konstrukt',
      objection: `Geschlecht ist ein soziales Konstrukt. Was „männlich" und „weiblich" heißt, unterscheidet sich von Kultur zu Kultur – Gender ist eine Performance, keine Natur.`,
      objectionBy: 'Judith Butler',
      answer: `Da muss man unterscheiden. Viele Geschlechterrollen sind tatsächlich kulturell: dass Männer nicht weinen, dass Frauen nicht studieren, dass Rosa für Mädchen ist. Solche Klischees muss ein Christ nicht verteidigen – die Bibel kennt weinende Männer und Frauen, die Land kaufen und Handel treiben (Spr 31). Aber das leibliche Geschlecht ist keine Performance: Der menschliche Körper ist auf eine von zwei Rollen in der Fortpflanzung hin organisiert. Rollenbilder können sich ändern, der Leib ist Wirklichkeit.`,
      questionsBack: [
        `Wenn Geschlecht nur Performance ist – was genau „performt" jemand, der sich als Frau versteht?`,
      ],
      followUps: [
        {
          id: 'spektrum-intersex',
          objection: `Auch das biologische Geschlecht ist ein Spektrum. Bis zu 1,7 % der Menschen sind intersexuell. Die Natur selbst widerlegt die Binarität.`,
          objectionBy: 'Anne Fausto-Sterling',
          answer: `Besonderheiten der Geschlechtsentwicklung sind real, und die betroffenen Menschen verdienen Respekt und sehr sorgfältige medizinische Begleitung. Aber die 1,7 % schließen Zustände ein, bei denen das Geschlecht eindeutig ist; bei enger Definition liegt die Häufigkeit nach Leonard Sax bei etwa 0,02 %. Und diese Besonderheiten werden ja gerade als Abweichungen von der männlichen oder weiblichen Entwicklung beschrieben – sie zeigen, dass Entwicklung störanfällig ist, nicht, dass es Mann und Frau nicht gibt.`,
          followUps: [
            {
              id: 'dsd-grausam',
              objection: `Dann ist dein binäres Menschenbild grausam gegenüber intersexuellen Menschen. Sie passen nirgends hinein.`,
              objectionBy: 'Anne Fausto-Sterling',
              answer: `Im Gegenteil: Die Bibel hat gerade für Menschen, die „nirgends hineinpassten", einen besonderen Platz. Jesus spricht von denen, die „von Mutterleib so geboren" sind (Mt 19,12), und Jesaja verheißt ihnen einen Namen im Haus Gottes, „besser als Söhne und Töchter" (Jes 56,5). Die Kirche nimmt jeden Menschen mit einer Besonderheit der Geschlechtsentwicklung als Ebenbild Gottes an und begleitet ihn individuell – mit Geduld, ohne vorschnelle Eingriffe und ohne Beschämung.`,
              followUps: [
                {
                  id: 'operationen-intersex-babys',
                  objection: `Genau eure binäre Ideologie hat dazu geführt, dass Ärzte intersexuelle Babys jahrzehntelang ohne Einwilligung operierten, um sie „eindeutig" zu machen. Viele leiden bis heute an den Folgen.`,
                  objectionBy: 'Anne Fausto-Sterling',
                  answer: `Diese Operationen haben vielen Menschen schweres Leid zugefügt, und das muss man klar beim Namen nennen. Aber sie folgten weniger einer christlichen Lehre als einem medizinischen Machbarkeitsdenken – teils beeinflusst von dem Sexualforscher John Money, der glaubte, Geschlechtsidentität sei bei Kindern beliebig formbar. Christliche Ethik spricht sogar für Zurückhaltung: Der Leib eines Kindes ist eine Gabe, kein Material, und nicht dringend notwendige Eingriffe sollten warten, bis der Mensch selbst mitentscheiden kann.`,
                  detail: `Der tragische Fall von David Reimer, den Money nach einer verunglückten Beschneidung als Mädchen erziehen ließ, zeigt, dass das Geschlecht gerade **nicht** beliebig formbar ist – Reimer lehnte die zugewiesene Rolle ab und litt sein Leben lang. Für dein Gespräch: Menschen mit Besonderheiten der Geschlechtsentwicklung sind keine Argumente, sondern Menschen. Sie verdienen Respekt, Zeit und eine Kirche, in der sie nicht erklären müssen, warum sie dazugehören.`,
                  sources: [
                    { kind: 'fachliteratur', author: 'John Colapinto', work: 'As Nature Made Him: The Boy Who Was Raised as a Girl', year: '2000', status: 'paraphrase', note: 'Zum Fall David Reimer und zu John Moneys Theorie.' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'identitaet-innerlich',
      objection: `Wer sich als Frau empfindet, ist eine Frau. Identität ist etwas Inneres, nicht etwas Körperliches. Niemand anderes darf darüber urteilen.`,
      objectionBy: 'Dan Savage',
      answer: `Ich nehme ernst, dass jemand tief empfindet, im falschen Körper zu leben, und dass das großes Leid bedeuten kann. Aber nach christlichem Verständnis ist der Mensch eine Einheit von Leib und Seele; der Leib ist nicht ein Kostüm, über das ein körperloses „wahres Ich" verfügt. Und wenn „Frau sein" nur heißt, „sich als Frau zu empfinden", bleibt offen, *was* da empfunden wird – ohne Bezug auf den Leib wird die Definition zirkulär oder greift auf genau die Klischees zurück, die man überwinden wollte.`,
      detail: `Carl Trueman beschreibt diese Sicht als „expressiven Individualismus": Das wahre Selbst liegt in den inneren Gefühlen, und die Umwelt hat es anzuerkennen. Das ist eine junge, philosophisch voraussetzungsreiche Annahme – keine naturwissenschaftliche Entdeckung. Im Gespräch hilft es, das offen anzusprechen, ohne die Person zu entwerten.`,
      followUps: [
        {
          id: 'existenz-absprechen',
          objection: `Damit sprichst du trans Menschen ihre Existenz ab. Das ist genau die Art von Ablehnung, die sie krank macht.`,
          objectionBy: 'Judith Butler',
          answer: `Nein. Ich bestreite nicht, dass es dich gibt, dass du leidest oder dass deine Erfahrung echt ist – ich nehme das sehr ernst. Wir sind uns uneinig darüber, was einen Menschen zum Mann oder zur Frau macht; das ist eine Frage des Menschenbildes, über die man respektvoll streiten kann. Wichtiger als jedes Argument ist mir, dass du weißt: Du bist von Gott geliebt, und ich will dich kennenlernen, nicht über dich reden.`,
          followUps: [
            {
              id: 'transition-oder-suizid',
              objection: `Ohne Bestätigung und medizinische Transition bringen sich trans Jugendliche um. „Lieber eine lebende Tochter als ein toter Sohn" – jede Verzögerung kostet Leben.`,
              objectionBy: 'Jack Turban',
              answer: `Jeder Suizidgedanke muss sofort ernst genommen werden – hier geht Hilfe vor jeder Debatte. Aber die Behauptung, nur die medizinische Transition rette Leben, ist nicht belegt: Die Cass Review (2024) fand keine belastbaren Belege, dass Pubertätsblocker oder Hormone bei Jugendlichen das Suizidrisiko senken, und betonte, dass viele Betroffene zusätzliche psychische Belastungen haben, die Aufmerksamkeit brauchen. Verantwortliche Liebe heißt hier: ganzheitliche Begleitung, Zeit und Vorsicht mit irreversiblen Eingriffen – nicht Druck in die eine oder andere Richtung.`,
              detail: `**Bei akuter Gefahr:** zuhören, nicht allein lassen, professionelle Hilfe holen (in Deutschland z. B. Telefonseelsorge 0800 111 0 111, Notruf 112; in Österreich 142).

Die Cass Review warnte zudem davor, Eltern mit der Alternative „Transition oder Suizid" unter Druck zu setzen, da dies weder der Evidenz entspricht noch den Jugendlichen hilft.`,
              followUps: [
                {
                  id: 'cass-kritisiert',
                  objection: `Die Cass Review ist politisch motiviert und wurde von amerikanischen Fachgesellschaften und Forschern scharf kritisiert.`,
                  objectionBy: 'Jack Turban',
                  answer: `Es stimmt, dass es Kritik gibt, und ich behaupte nicht, die Debatte sei abgeschlossen. Aber die Review stützt sich auf systematische Übersichtsarbeiten der Universität York, und auch andere Länder wie Schweden und Finnland sind schon vor ihr zu vorsichtigeren Leitlinien für Minderjährige gekommen. Meine Position hängt ohnehin nicht an einer Studie: Gerade weil wir so wenig über die Langzeitfolgen wissen, ist Behutsamkeit bei Kindern ein Gebot der Liebe.`,
                },
              ],
            },
            {
              id: 'pronomen-verweigerung',
              objection: `Wer die gewählten Pronomen eines trans Menschen verweigert, übt Gewalt aus. Es kostet dich nichts, „sie" zu sagen – aber es kostet sie viel, wenn du es nicht tust.`,
              objectionBy: 'Judith Butler',
              answer: `Ich will niemandem durch Worte wehtun, und Spott oder absichtliches Verletzen sind für einen Christen ausgeschlossen. Christen gehen mit der Frage unterschiedlich um: Manche benutzen den gewählten Namen und die Pronomen als Ausdruck der Höflichkeit, andere vermeiden Pronomen und sprechen die Person beim Namen an, weil sie nichts sagen wollen, was sie für unwahr halten. Beides kann aus Liebe geschehen. Gewalt ist es, Menschen zu demütigen – aber nicht, eine andere Überzeugung über den Leib zu haben und sie respektvoll zu leben.`,
              detail: `Mark Yarhouse empfiehlt Christen, den gewählten Namen oft als Brücke der Beziehung zu verwenden: Er drückt Respekt aus und öffnet die Tür für ein Gespräch, in dem Vertrauen wachsen kann. Wichtiger als die Grammatik ist die Haltung: Wer einen Menschen spüren lässt, dass er geliebt und willkommen ist, kann auch mit Meinungsverschiedenheiten leben. Wer dagegen recht behält und den Menschen verliert, hat nichts gewonnen.`,
              voices: [
                { person: 'mark-yarhouse', role: 'als Begleiter von Menschen mit Geschlechtsdysphorie', text: `Yarhouse rät, den Menschen vor der Debatte zu sehen: zuhören, die Not anerkennen, den gewählten Namen als Zeichen des Respekts verwenden, wo das Gewissen es erlaubt, und eine Beziehung aufbauen, in der man auch die christliche Sicht vom Leib ehrlich teilen kann.` },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'genesis-mythos',
      objection: `„Mann und Frau schuf er sie" – das ist ein antiker Mythos. Darauf kann man doch im 21. Jahrhundert kein Menschenbild bauen.`,
      objectionBy: 'Judith Butler',
      answer: `Gen 1,27 sagt zwei Dinge, die bis heute tragen: dass Mann und Frau gleichermaßen Gottes Ebenbild sind – die Grundlage der Gleichberechtigung – und dass der Mensch als Mann und Frau leiblich verfasst ist, wie es die Biologie jeder Säugetierart bestätigt. Daran ist nichts überholt. Überholt ist eher die alte gnostische Idee, dass der Leib eine fremde Hülle sei, aus der das „wahre Ich" befreit werden müsse – die Kirche hat sie schon im 2. Jahrhundert zurückgewiesen.`,
      followUps: [
        {
          id: 'keimzellen-reduktionistisch',
          objection: `Geschlecht über Keimzellen zu definieren ist biologischer Reduktionismus. Menschen sind nicht ihre Eizellen oder Spermien. Wer einen Menschen auf seine Fortpflanzungsfunktion reduziert, hat das Menschsein nicht verstanden.`,
          objectionBy: 'Judith Butler',
          answer: `Da sind wir uns einig: Kein Mensch ist auf seine Fortpflanzungsfunktion zu reduzieren – nach christlichem Verständnis ist er ein unendlich wertvolles Ebenbild Gottes. Aber zu sagen, dass ein Mensch **mehr** als sein Leib ist, heißt nicht, dass er **weniger** als sein Leib wäre. Das Geschlecht ist nicht nur eine Keimzelle, sondern die Gestalt des ganzen Leibes – Chromosomen, Hormone, Anatomie –, die auf eine von zwei Rollen in der Weitergabe des Lebens hin geordnet ist. Die Kirche lehrt die Einheit von Leib und Seele: Ich **habe** nicht nur einen Leib, ich **bin** auch mein Leib.`,
          detail: `Gerade die christliche Lehre ist hier das Gegenteil von Reduktionismus: Sie hält den Leib für so bedeutsam, dass Gott selbst Fleisch wurde und der Leib in der Auferstehung verwandelt, nicht abgelegt wird. Eine Sicht, für die die „eigentliche" Person ein inneres Selbst ist, das vom Leib unabhängig ist, steht dagegen der alten Gnosis näher, die den Leib als bloße Hülle betrachtete – ein Punkt, den Carl Trueman in seiner Analyse des „modernen Selbst" hervorhebt.`,
          voices: [
            { person: 'carl-trueman', role: 'als Ideenhistoriker', text: `Trueman zeichnet in *The Rise and Triumph of the Modern Self* (2020) nach, wie sich seit Rousseau ein Verständnis des Menschen durchgesetzt hat, in dem das innere, psychologische Selbst die eigentliche Wahrheit der Person ist und der Leib zum formbaren Material wird. Er versteht die heutige Gender-Debatte als Folge dieser langen Entwicklung, nicht als plötzliche Mode.` },
          ],
          followUps: [
            {
              id: 'gregor-nyssa-geschlecht-zusatz',
              objection: `Euer eigener Kirchenvater Gregor von Nyssa lehrte, das Bild Gottes im Menschen sei jenseits von männlich und weiblich; die Geschlechterdifferenz sei erst nachträglich hinzugefügt worden. Die Tradition selbst ist also weniger binär, als ihr behauptet.`,
              objectionBy: 'Elisabeth Schüssler Fiorenza',
              answer: `Das stimmt: Gregor deutet in *Über die Erschaffung des Menschen* (Kap. 16) eine „doppelte Schöpfung" an – das Bild Gottes liegt für ihn in Vernunft und Freiheit, nicht im Geschlecht. Aber daraus folgt nicht, was du daraus machst: Für Gregor ist die Geschlechtlichkeit von **Gott gegeben**, nicht vom Menschen gewählt, und keine Frage der Selbstdefinition. Seine Spekulation, die Geschlechterdifferenz sei im Vorauswissen des Falls hinzugefügt worden, ist eine Einzelmeinung, die die Kirche nicht zur Lehre gemacht hat. Und Gregor verehrte seine Schwester Makrina als Lehrerin gerade als Frau.`,
              detail: `Zur Einordnung: Gregor betont gegen jede Herabsetzung der Frau, dass Mann und Frau gleichermaßen Gottes Bild tragen – darin ist er erstaunlich modern. Aber Christus ist als Mann auferstanden, die Theotokos ist als Frau in den Himmel aufgenommen, und die Kirche bekennt die Auferstehung des **Leibes**. Wer aus Gregor eine Lehre der frei wählbaren Geschlechtsidentität ableitet, liest ein modernes Anliegen in einen Text hinein, der eine ganz andere Frage stellt.`,
              voices: [
                { person: 'gregor-nyssa', role: 'als Theologe der Gottebenbildlichkeit', text: `Gregor unterscheidet in *De hominis opificio* zwischen dem, worin der Mensch Gott ähnlich ist – Vernunft, Freiheit, Fähigkeit zur Tugend –, und dem, was er mit den Tieren teilt. Die Gottebenbildlichkeit kommt darum Männern und Frauen in gleicher Weise zu; die Geschlechtlichkeit gehört zur leiblichen Natur, die Gott dem Menschen gegeben hat.` },
              ],
              sources: [
                { kind: 'kirchenvater', author: 'Gregor von Nyssa', work: 'Über die Erschaffung des Menschen (De hominis opificio)', ref: '16', year: 'um 379', quote: `Die Unterscheidung von männlich und weiblich habe keinen Bezug zum göttlichen Urbild; das Bild Gottes liege in dem, was der menschlichen Natur gemeinsam ist.`, status: 'paraphrase' },
                { kind: 'kirchenvater', author: 'Gregor von Nyssa', work: 'Leben der Makrina (Vita Macrinae)', year: 'um 380', status: 'paraphrase', note: 'Gregor nennt seine Schwester seine Lehrerin.' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'eunuchen-jenseits-binaer',
      objection: `Und die Eunuchen? Jesus und Jesaja nehmen Menschen jenseits der Geschlechterbinarität ausdrücklich an. Die Bibel ist also auf unserer Seite.`,
      objectionBy: 'Dan Savage',
      answer: `Die Eunuchen sind ein wunderbares Beispiel dafür, dass Gott niemanden wegen seines Leibes ausschließt – und die Kirche muss sich daran messen lassen. Jes 56 verheißt ihnen einen ewigen Namen, und der äthiopische Eunuch wird ohne Zögern getauft. Eunuchen waren allerdings Männer, deren Zeugungsfähigkeit fehlte oder genommen war; sie wurden nicht als drittes Geschlecht oder als Frauen verstanden. Die Lehre aus diesen Texten ist also: Gottes Haus ist offen für alle – nicht: Das Geschlecht ist wählbar.`,
      followUps: [
        {
          id: 'detransition-selten',
          objection: `Ihr malt Detransitionierer an die Wand, dabei bereut weniger als ein Prozent die Transition. Das ist Angstmache auf dem Rücken einer verletzlichen Minderheit.`,
          objectionBy: 'Jack Turban',
          answer: `Ich will niemandem Angst machen, und jeder Mensch, der transitioniert hat, verdient Respekt und Fürsorge. Aber die niedrigen Reuezahlen stammen überwiegend aus älteren Studien mit Erwachsenen, kurzer Nachbeobachtung und vielen Teilnehmern, die aus den Studien verschwanden. Die Cass Review wies darauf hin, dass sich die Gruppe der Betroffenen stark verändert hat – heute sind es viel mehr Jugendliche, besonders Mädchen, oft mit weiteren psychischen Belastungen. Für sie ist die Datenlage dünn. Und Detransitionierer selbst berichten, dass sie in Kliniken und Gemeinschaften kaum Gehör finden – auch sie sind eine verletzliche Minderheit.`,
          detail: `Ein bekanntes Beispiel ist die Britin Keira Bell, die als Jugendliche Pubertätsblocker und Hormone erhielt, später detransitionierte und gegen die Londoner Tavistock-Klinik klagte. Ihr Fall trug zur Untersuchung bei, aus der die Cass Review hervorging. Für dein Gespräch: Benutze solche Fälle nicht als Waffe gegen trans Menschen, sondern als Argument für Vorsicht, besonders bei Minderjährigen, und für eine Begleitung, die offen für jeden Ausgang ist.`,
          sources: [
            { kind: 'wissenschaft', author: 'Hilary Cass u. a.', work: 'Independent Review of Gender Identity Services for Children and Young People: Final Report (Cass Review)', year: '2024', status: 'paraphrase', note: 'Zum veränderten Profil der überwiesenen Jugendlichen und zur fehlenden Langzeitnachbeobachtung.' },
          ],
          followUps: [
            {
              id: 'erwachsene-autonomie',
              objection: `Und bei Erwachsenen? Wer volljährig ist, entscheidet selbst über seinen Körper. Was geht das die Kirche an?`,
              objectionBy: 'Jack Turban',
              answer: `Im Rechtsstaat entscheiden Erwachsene über ihren Körper, und Christen wollen niemandem etwas mit Gewalt vorschreiben. Die Kirche bietet aber eine andere Sicht an: dass der Leib eine Gabe ist, mit der man sich versöhnen kann, auch wenn das schwer ist. Und sie bietet vor allem Begleitung. Der Psychologe Mark Yarhouse rät Christen, nicht nur auf die Schöpfungsordnung zu verweisen, sondern Geschlechtsdysphorie als nicht gewähltes Leiden ernst zu nehmen, das Mitgefühl verdient – und Menschen nicht zu verlassen, egal welchen Weg sie gehen.`,
              detail: `In der Praxis heißt das: Ein Mensch, der transitioniert hat, ist in der Kirche willkommen, wird beim Namen gerufen, gehört und geliebt. Die Kirche hält zugleich an ihrer Lehre vom Leib fest. Diese Spannung lässt sich nicht in einem Satz auflösen; sie wird in geduldiger Seelsorge getragen. Christus hat sich jedem Menschen zugewandt, bevor er von ihm etwas verlangte.`,
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Was macht deiner Meinung nach einen Menschen zur Frau oder zum Mann – und lässt sich das ohne Bezug auf den Körper sagen?`,
    `Welche Rollenklischees lehnst du ab – und könnten wir da vielleicht sogar übereinstimmen?`,
    `Wenn die Langzeitfolgen medizinischer Eingriffe bei Kindern unklar sind, ist dann nicht Vorsicht ein Gebot der Liebe?`,
    `Was brauchst du von Christen, um dich angenommen zu fühlen, auch wenn wir nicht in allem übereinstimmen?`,
  ],
  avoid: [
    `Spott, Witze oder abfällige Bemerkungen über trans Menschen – das ist Sünde und zerstört jedes Vertrauen.`,
    `Komplexe medizinische Behauptungen aufstellen, die du nicht belegen kannst; bleib bei dem, was gesichert ist (Cass Review).`,
    `Geschlechterklischees als „biblisch" verteidigen (etwa, dass Männer nicht emotional sein dürfen).`,
    `Menschen mit Besonderheiten der Geschlechtsentwicklung (DSD) als Argumentationsmaterial benutzen, statt sie als Personen zu achten.`,
  ],
  concessions: [
    `Geschlechtsdysphorie ist echtes, oft schweres Leiden, das nicht gewählt wurde.`,
    `Viele traditionelle Geschlechterrollen sind kulturell geprägt und wurden auch von Christen zu Unrecht als göttliche Ordnung ausgegeben.`,
    `Christen sind Menschen mit Geschlechtsdysphorie oft mit Spott, Angst oder Härte begegnet statt mit Mitgefühl.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Mark A. Yarhouse', work: 'Understanding Gender Dysphoria', year: '2015', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Carl R. Trueman', work: 'The Rise and Triumph of the Modern Self', year: '2020', status: 'paraphrase' },
    { kind: 'wissenschaft', author: 'Hilary Cass u. a.', work: 'Cass Review – Final Report', year: '2024', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Nancy R. Pearcey', work: 'Love Thy Body: Answering Hard Questions about Life and Sexuality', year: '2018', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Gender', 'Geschlechtsdysphorie', 'Intersexualität', 'Leib', 'Cass Review', 'Menschenbild'],
  related: [
    'sexualethik/homosexualitaet-bibel',
    'sexualethik/ehe-soziales-konstrukt',
    'at-ethik/bibel-frauenfeindlich',
    'bioethik/embryo-zellhaufen',
  ],
};

export default claim;
