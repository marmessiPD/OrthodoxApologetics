import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'scientology',
  title: `„Scientology befreit den Menschen und ist mit dem Christentum vereinbar."`,
  proponents: [
    { name: 'L. Ron Hubbard', role: 'Gründer von Dianetik und Scientology, Science-Fiction-Autor (1911–1986)', work: 'Dianetics: The Modern Science of Mental Health (1950); The Way to Happiness (1981)' },
    { name: 'David Miscavige', role: 'Führungsfigur der Scientology seit Ende der 1980er-Jahre (Chairman of the Board, Religious Technology Center)', work: 'Öffentliche Ansprachen und Selbstdarstellungen der Church of Scientology' },
    { name: 'J. Gordon Melton', role: 'Religionswissenschaftler, Institute for the Study of American Religion', work: 'The Church of Scientology (2000) – verteidigt den religiösen Charakter' },
  ],
  steelman: `Scientology versteht sich als „angewandte religiöse Philosophie". Der Mensch ist kein Tier und keine Maschine, sondern ein unsterbliches geistiges Wesen, ein *Thetan* – das deckt sich mit dem christlichen Glauben an die unsterbliche Seele. Unser Leiden rührt von schmerzhaften, unbewussten Erinnerungsbildern (*Engrammen*) her; im *Auditing* werden sie bewusst gemacht und verlieren ihre Macht – vergleichbar mit Beichte oder Seelsorge, aber methodisch und messbar. Der Weg führt über den Zustand „Clear" zu immer größerer geistiger Freiheit. Scientology verlangt nicht, den bisherigen Glauben aufzugeben; viele Mitglieder bleiben Christen. Sie engagiert sich gegen Drogen (Narconon), verbreitet einen Moralkodex (*Der Weg zum Glücklichsein*) und schickt ehrenamtliche Helfer in Katastrophengebiete. In den USA ist sie seit 1993 steuerlich als Kirche anerkannt, ebenso in mehreren europäischen Ländern. Die jahrzehntelange Beobachtung durch den deutschen Verfassungsschutz war Diskriminierung einer religiösen Minderheit. Und Jesus selbst sagte: „Die Wahrheit wird euch frei machen" – genau das will die „Brücke zur völligen Freiheit".`,
  biblical: {
    summary: `Nach der Bibel ist der Mensch ein **Geschöpf**, aus Erde gebildet und von Gott belebt (Gen 2,7), als Einheit von Leib und Seele, der „einmal stirbt, darnach aber das Gericht" (Hebr 9,27) – kein ewiges Geistwesen, das seit Billionen Jahren durch Körper wandert. Das Grundproblem des Menschen sind nicht verdrängte Traumata, sondern die Sünde, die uns von Gott trennt (Röm 3,23); das Heil ist ein **Geschenk**, nicht das Ergebnis bezahlter Kursstufen: „Umsonst habt ihr's empfangen, umsonst gebt es auch" (Mt 10,8). Als Simon der Zauberer geistliche Macht kaufen wollte, antwortete Petrus: „Daß du verdammt werdest mit deinem Gelde, darum daß du meinst, Gottes Gabe werde durch Geld erlangt!" (Apg 8,20). Jesus lehrte öffentlich und „nichts im Winkel" (Joh 18,20), und „in keinem andern ist Heil" als in ihm (Apg 4,12).`,
    detail: `**Freiheit nach Joh 8,32:** Jesus sagt: „Ihr werdet die Wahrheit erkennen, und die Wahrheit wird euch frei machen" – und erklärt sofort, wovon: von der Knechtschaft der Sünde (8,34), und durch wen: „So euch nun der Sohn frei macht, so seid ihr recht frei" (8,36). Freiheit ist eine Person, keine Technik.

**Keine Geheimlehre:** Paulus hat „nichts verhalten", sondern „all den Rat Gottes" verkündigt (Apg 20,27). Das Evangelium ist dasselbe für Anfänger und Fortgeschrittene; es gibt keine höheren, gegen Bezahlung erschlossenen Stufen, auf denen sich der Inhalt grundlegend ändert.

**Warnung vor Menschenlehren:** „Sehet zu, daß euch niemand beraube durch die Philosophie und lose Verführung nach der Menschen Lehre … und nicht nach Christo" (Kol 2,8).`,
    sources: [
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '8,20', quote: `Petrus aber sprach zu ihm: Daß du verdammt werdest mit deinem Gelde, darum daß du meinst, Gottes Gabe werde durch Geld erlangt!`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Matthäus', ref: '10,8', quote: `Umsonst habt ihr's empfangen, umsonst gebt es auch.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '18,20', quote: `Ich habe frei öffentlich geredet vor der Welt; ich habe allezeit gelehrt in der Schule und in dem Tempel, da alle Juden zusammenkommen, und habe nichts im Winkel geredet.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '4,12', quote: `Und ist in keinem andern Heil, ist auch kein anderer Name unter dem Himmel den Menschen gegeben, darin wir sollen selig werden.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Hebräer', ref: '9,27', quote: `Und wie den Menschen ist gesetzt, einmal zu sterben, darnach aber das Gericht.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Römer', ref: '3,23–24', quote: `… sie sind allzumal Sünder und mangeln des Ruhmes, den sie an Gott haben sollten, und werden ohne Verdienst gerecht aus seiner Gnade durch die Erlösung, so durch Christum Jesum geschehen ist.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Kolosser', ref: '2,8', quote: `Sehet zu, daß euch niemand beraube durch die Philosophie und lose Verführung nach der Menschen Lehre und nach der Welt Satzungen, und nicht nach Christo.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptische Kirche bekennt den Menschen als Geschöpf, das Gott aus dem Nichts ins Dasein rief und nach seinem Bild schuf (Athanasius, *De Incarnatione* 3–4). Die Seele ist nicht ewig präexistent, sondern geschaffen; sie lebt ein einziges irdisches Leben. Heilung der Seele geschieht durch die Gnade Christi in den Sakramenten – besonders im Sakrament der Buße und Beichte, das **unentgeltlich** gespendet wird und dessen Inhalt das Beichtgeheimnis schützt. Die Kirche hat sich schon im 2. Jahrhundert gegen Systeme gewandt, die eine gestufte Geheimerkenntnis für Eingeweihte lehrten: Irenäus von Lyon antwortete den Gnostikern, dass die Apostel keine Geheimlehren zurückhielten.`,
    detail: `Der Vergleich mit der Gnosis drängt sich auf: Auch die Gnostiker lehrten, der wahre Mensch sei ein göttlicher Funke, gefangen in der Materie durch eine urzeitliche Katastrophe; Befreiung geschehe durch stufenweise enthüllte Erkenntnis, die nur Eingeweihten zugänglich sei. Irenäus hielt dagegen: Die Lehre der Apostel ist öffentlich, in allen Kirchen dieselbe und für alle bestimmt. Der Wüstenvater Antonius lehrte, dass der Weg zur Freiheit über Demut, Gebet und Gottes Gnade führt – nicht über Technik und Machtsteigerung des eigenen Geistes.`,
    sources: [
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'De Incarnatione', ref: '3–4', quote: `Gott schuf den Menschen aus dem Nichts nach seinem Bild; aus sich selbst ist der Mensch vergänglich und lebt nur durch die Teilhabe am Wort.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Adversus Haereses', ref: 'III,3,1', quote: `Hätten die Apostel geheime Mysterien gekannt, die sie den Vollkommenen gesondert und im Verborgenen lehrten, dann hätten sie diese vor allem denen übergeben, denen sie die Kirchen anvertrauten.`, status: 'paraphrase' },
      { kind: 'koptisch', work: 'Sakrament der Buße und Beichte in der koptisch-orthodoxen Kirche', quote: `Die Beichte wird unentgeltlich gespendet; der Priester ist an das Beichtgeheimnis gebunden.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `**Lehre:** L. Ron Hubbard veröffentlichte 1950 *Dianetik* als „moderne Wissenschaft der geistigen Gesundheit"; 1954 entstand die erste Church of Scientology. Der Mensch ist ein *Thetan*, ein unsterbliches Geistwesen, das durch unzählige Leben gegangen ist und Materie, Energie, Raum und Zeit („MEST") mitgeschaffen hat. Im Auditing (mit dem „E-Meter") werden belastende Erinnerungen bearbeitet; über „Clear" führt die „Brücke" zu den Stufen des „Operierenden Thetan" (OT). Die Inhalte der höheren OT-Stufen sind vertraulich; die Lehre der Stufe OT III über eine urzeitliche Katastrophe unter einem galaktischen Herrscher namens Xenu wurde durch Gerichtsakten in den USA öffentlich bekannt.`,
    detail: `**Rechtsstatus:** Die US-Steuerbehörde erkannte Scientology 1993 nach langem Rechtsstreit als gemeinnützige Kirche an. In Deutschland beobachtete der Verfassungsschutz die „Scientology-Organisation" ab 1997, nachdem die Innenministerkonferenz Anhaltspunkte für verfassungsfeindliche Bestrebungen festgestellt hatte. Im Mai 2026 beendete das Bundesamt die gesonderte Beobachtung wegen nachlassender Relevanz (Einzelfälle werden weiter bearbeitet); Bayern beobachtet weiterhin. Der letzte Verfassungsschutzbericht nannte rund 3.600 Mitglieder in Deutschland. Die Organisation selbst nennt weltweit Millionen; unabhängige Schätzungen liegen weit darunter.

**Forschung:** Religionswissenschaftler wie J. Gordon Melton und Hugh Urban beschreiben Scientology als neue Religion eigener Art mit esoterischen und stark kommerziellen Zügen. Aussteigerberichte (u. a. bei Lawrence Wright, *Going Clear*, 2013) schildern Druck, hohe Kosten und Kontrolle; die Organisation bestreitet diese Darstellungen.`,
    sources: [
      { kind: 'gegner', author: 'L. Ron Hubbard', work: 'Dianetics: The Modern Science of Mental Health', year: '1950', quote: `Der „reaktive Verstand" speichert schmerzhafte Erfahrungen als Engramme, die das Verhalten unbewusst steuern; durch Auditing werden sie gelöscht und der Mensch wird „Clear".`, status: 'paraphrase' },
      { kind: 'sonstiges', author: 'Bundesamt für Verfassungsschutz / Innenministerkonferenz', work: 'Beobachtung der Scientology-Organisation', year: '1997–2026', quote: `Beginn der Beobachtung 1997; im Mai 2026 Ende der gesonderten Beobachtung auf Bundesebene wegen nachlassender Relevanz; Bayern setzt die Beobachtung fort. Letzter Bericht (Stand 2024): rund 3.600 Mitglieder.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Hugh B. Urban', work: 'The Church of Scientology: A History of a New Religion', year: '2011', quote: `Religionsgeschichtliche Darstellung der Scientology zwischen Religion, Therapie, Geschäft und Geheimlehre.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Lawrence Wright', work: 'Going Clear: Scientology, Hollywood, and the Prison of Belief', year: '2013', quote: `Journalistische Untersuchung mit zahlreichen Aussteigerberichten; von der Organisation bestritten.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Scientology und christlicher Glaube bieten zwei verschiedene Wege zur Rettung an: Hier ein ewiges Geistwesen, das sich durch bezahlte Kursstufen selbst befreit – dort ein geschaffener Mensch, den Christus aus Gnade erlöst (Eph 2,8–9). Hubbard stellte Jesus nicht als Herrn dar, sondern knapp über den Zustand „Clear". Und das Evangelium ist öffentlich und kostenlos (Mt 10,8; Joh 18,20) – keine Geheimlehre, deren höhere Inhalte man erst nach Bezahlung erfährt. Petrus sagte zu dem, der geistliche Macht kaufen wollte: „Gottes Gabe wird nicht durch Geld erlangt" (Apg 8,20).`,
  keyPoints: [
    `**Menschenbild:** Geschaffener Mensch, ein Leben, dann Gericht (Gen 2,7; Hebr 9,27) – nicht ein ewiger Thetan mit unzähligen Vorleben.`,
    `**Problem und Lösung:** Sünde und Gnade statt Engramme und Technik (Röm 3,23–24).`,
    `**Gabe statt Kauf:** „Umsonst habt ihr's empfangen" (Mt 10,8); Simon der Zauberer (Apg 8,20).`,
    `**Öffentlich statt geheim:** Jesus lehrte „nichts im Winkel" (Joh 18,20); Paulus verkündigte „all den Rat Gottes" (Apg 20,27).`,
    `**Jesus:** Für Christen der Herr (Phil 2,9–11; Joh 20,28) – nicht ein Mensch knapp über „Clear".`,
    `**Fairness:** Religionsfreiheit gilt auch für Scientologen; der Einwand ist theologisch, nicht staatlich.`,
  ],
  voices: [
    {
      person: 'walter-martin',
      role: 'als Analytiker neuer religiöser Bewegungen',
      text: `Martin untersuchte Scientology anhand von Hubbards eigenen Schriften und zeigte, dass sie trotz ihres Anspruchs auf Vereinbarkeit mit allen Religionen eine eigene Erlösungslehre vertritt: Der Mensch rettet sich durch Technik und Wissen selbst; Sünde, Gnade, Kreuz und Auferstehung haben darin keinen Platz. Für Martin ist sie darum mit dem biblischen Christentum unvereinbar – ganz gleich, wie viele Mitglieder sich zugleich Christen nennen.`,
      sources: [{ kind: 'fachliteratur', author: 'Walter Martin', work: 'The Kingdom of the Cults', ref: 'Kapitel „Scientology"', year: '1965 ff.', quote: `Analyse der Lehren Hubbards im Vergleich mit dem biblischen Glauben.`, status: 'paraphrase' }],
    },
    {
      person: 'irenaeus',
      role: 'als Gegner gestufter Geheimerkenntnis',
      text: `Irenäus kannte Systeme, die den Menschen als göttlichen Funken verstanden, der durch eine urzeitliche Katastrophe in die Materie gefallen sei und durch stufenweise enthüllte Erkenntnis befreit werde – nur für Eingeweihte. Sein Gegenargument ist schlicht: Die Apostel lehrten öffentlich; hätten sie Geheimnisse gehabt, hätten sie sie den Bischöfen der von ihnen gegründeten Kirchen anvertraut. Davon weiß aber keine dieser Kirchen etwas.`,
      sources: [{ kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Adversus Haereses', ref: 'III,3,1', quote: `Die Apostel hielten keine Geheimlehren für Vollkommene zurück.`, status: 'paraphrase' }],
    },
    {
      person: 'athanasius',
      role: 'als Lehrer der Schöpfung des Menschen',
      text: `Für Athanasius ist der Mensch von Natur aus vergänglich, weil er aus dem Nichts geschaffen ist; er lebt nur durch die Teilhabe am göttlichen Wort. Diese Sicht steht dem Thetan-Begriff diametral entgegen: Der Mensch ist nicht Schöpfer des Universums, der sich an seine Allmacht erinnern muss, sondern Geschöpf, das nur in Gemeinschaft mit seinem Schöpfer lebt. Rettung ist darum nicht Selbstermächtigung, sondern Gnade: Das Wort wurde Mensch, damit wir vergöttlicht würden.`,
      sources: [{ kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'De Incarnatione', ref: '4; 54', quote: `Der Mensch ist aus dem Nichts geschaffen und lebt durch das Wort; das Wort wurde Mensch, damit wir vergöttlicht würden.`, status: 'paraphrase' }],
    },
    {
      person: 'petrus',
      role: 'als Apostel gegenüber Simon dem Zauberer',
      text: `Als Simon in Samaria sah, dass durch die Handauflegung der Apostel der Geist gegeben wurde, bot er Geld an, um diese Macht zu kaufen. Petrus' Antwort ist eine der schärfsten im Neuen Testament: Gottes Gabe wird nicht durch Geld erlangt. Seitdem nennt die Kirche den Handel mit geistlichen Gütern „Simonie" – und misst daran jede Gemeinschaft, die Stufen geistlicher Befreiung gegen Bezahlung anbietet.`,
      sources: [{ kind: 'bibel', work: 'Apostelgeschichte', ref: '8,18–20', quote: `Simon bietet Geld für die Vollmacht der Geistmitteilung; Petrus weist ihn zurück.`, status: 'paraphrase' }],
    },
    {
      person: 'cs-lewis',
      role: 'als Apologet der Einzigartigkeit Jesu',
      text: `Lewis argumentierte, dass man Jesus nicht einfach als großen Lehrer verehren kann, während man seine Ansprüche ablehnt. Wer behauptet, Sünden zu vergeben und eins mit dem Vater zu sein, ist entweder ein Betrüger, ein Wahnsinniger oder der Herr. Die Einordnung Jesu als jemand „knapp über Clear" ist genau die bequeme Mittelposition, die Lewis für unmöglich hielt.`,
      sources: [{ kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Pardon, ich bin Christ (Mere Christianity)', ref: 'Buch II, Kap. 3', year: '1952', quote: `Jesus als bloß großen Morallehrer anzusehen, ist keine offene Möglichkeit; seine Ansprüche lassen nur zu, ihn abzulehnen oder als Herrn anzubeten.`, status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'vereinbar-mit-jedem-glauben',
      objection: `Scientology verlangt von niemandem, seinen Glauben aufzugeben. Man kann Christ bleiben und Scientology als praktische Hilfe nutzen.`,
      objectionBy: 'Church of Scientology (Selbstdarstellung)',
      answer: `Dann lass uns prüfen, was beide über die Grundfragen sagen: Wer ist der Mensch? Ein ewiger Thetan mit Billionen Jahren Vorgeschichte – oder ein Geschöpf mit einem Leben (Hebr 9,27)? Was ist sein Problem? Engramme – oder Sünde? Wer rettet? Die eigene Arbeit auf der „Brücke" – oder Christus (Apg 4,12)? Zwei verschiedene Wege zur Rettung kann man nicht gleichzeitig gehen.`,
      questionsBack: [`Wenn du durch Auditing völlige Freiheit erreichen kannst – wozu brauchst du dann noch Christus?`],
      followUps: [
        {
          id: 'nur-angewandte-philosophie',
          objection: `Scientology ist eine angewandte Philosophie, eine Technik – wie Meditation oder Psychotherapie. Sie konkurriert nicht mit der Erlösung.`,
          objectionBy: 'Scientology-Mitglieder',
          answer: `Dann frage ich: Warum nennt sie sich „Church", spendet Taufen und Trauungen, verspricht geistige Unsterblichkeit und völlige Freiheit – und hat in den USA genau als Kirche die Steuerbefreiung erstritten? Man kann nicht gleichzeitig „nur Technik" sein, um mit allen Religionen vereinbar zu wirken, und „Religion", um rechtlich als Kirche zu gelten.`,
          followUps: [
            {
              id: 'thetan-gleich-seele',
              objection: `Der Thetan ist doch einfach die Seele. Auch Christen glauben an eine unsterbliche Seele.`,
              objectionBy: 'Scientology-Mitglieder',
              answer: `Die christliche Seele ist geschaffen, nicht ewig; sie ist mit einem Leib verbunden, lebt ein Leben und wird gerichtet. Der Thetan ist nach Hubbard ewig, hat unzählige Körper bewohnt und das physische Universum mitgeschaffen. Das ist dem Gnostizismus und der Seelenwanderung viel näher als der Bibel. Athanasius sagt: Der Mensch ist aus dem Nichts geschaffen und lebt nur durch Gott – nicht Schöpfer, sondern Geschöpf.`,
              followUps: [
                {
                  id: 'reinkarnation-urkirche',
                  objection: `Die frühe Kirche – Origenes zum Beispiel – kannte die Präexistenz der Seelen und die Wiedergeburt. Das wurde erst 553 unterdrückt.`,
                  objectionBy: 'Esoterische und scientologische Argumentation',
                  answer: `Origenes spekulierte über eine Präexistenz der Seelen, lehrte aber keine Reinkarnation in immer neue Körper auf Erden – er lehnte die Seelenwanderung ausdrücklich ab. Und er ist für die koptische Kirche keine Lehrautorität. Die Schrift ist eindeutig: „Wie den Menschen ist gesetzt, einmal zu sterben, darnach aber das Gericht" (Hebr 9,27).`,
                  sources: [{ kind: 'kirchenvater', author: 'Origenes', work: 'Kommentar zum Matthäusevangelium', ref: 'zu Mt 17,10–13 (XIII,1)', quote: `Origenes weist die Lehre der Seelenwanderung als der Kirche fremd zurück.`, status: 'paraphrase', note: 'Origenes ist in der koptischen Kirche keine Lehrautorität; seine Präexistenzlehre wurde später verurteilt.' }],
                  questionsBack: [`Kannst du eine Stelle nennen, an der die Bibel lehrt, dass ein Mensch viele Leben hat?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'auditing-wie-beichte',
      objection: `Auditing ist wie eure Beichte: Man spricht über belastende Erfahrungen und wird davon befreit. Nur ist es methodischer und wirksamer.`,
      objectionBy: 'Scientology-Mitglieder',
      answer: `Der Unterschied ist grundlegend: In der Beichte bekenne ich Sünden vor Gott und empfange Vergebung durch Christus – unentgeltlich, unter strengem Beichtgeheimnis. Im Auditing werden Engramme bearbeitet, um die eigene Fähigkeit zu steigern; die Sitzungen kosten Geld, und die Aufzeichnungen bleiben bei der Organisation. Beichte ist Gnade, Auditing ist Technik.`,
      followUps: [
        {
          id: 'kirchen-nehmen-geld',
          objection: `Auch Kirchen nehmen Geld – Kirchensteuer, Spenden, Gebühren für Hochzeiten. Was ist der Unterschied?`,
          objectionBy: 'Scientology-Mitglieder',
          answer: `Freiwillige Gaben zum Unterhalt einer Gemeinschaft sind etwas anderes als feste Preise für geistliche Fortschrittsstufen. Kein koptischer Priester verlangt Geld für die Beichte, die Taufe oder die Kommunion. Jesus sagte: „Umsonst habt ihr's empfangen, umsonst gebt es auch" (Mt 10,8), und Petrus wies Simon zurück, der geistliche Macht kaufen wollte (Apg 8,20).`,
          followUps: [
            {
              id: 'kosten-fuer-ausbildung',
              objection: `Die Kosten sind für Ausbildung und Material, wie bei einem Studium. Wer eine Universität besucht, zahlt auch.`,
              objectionBy: 'Church of Scientology',
              answer: `Dann ist es Bildung, nicht Religion – und an einer Universität kann jeder die Lehrbücher der höheren Semester in der Bibliothek aufschlagen, bevor er sich einschreibt. Bei Scientology bleiben die Inhalte der höheren OT-Stufen vertraulich, bis man sie erreicht und bezahlt hat. Das ist die Struktur einer gestuften Geheimerkenntnis, wie sie schon Irenäus bei den Gnostikern beschrieb.`,
              followUps: [
                {
                  id: 'disciplina-arcani',
                  objection: `Auch die frühe Kirche hatte eine Arkandisziplin: Den Ungetauften wurden die Mysterien vorenthalten. Also auch eine Geheimlehre!`,
                  objectionBy: 'Scientology-Apologeten',
                  answer: `Die Arkandisziplin betraf die Feier der Sakramente, nicht den Inhalt des Glaubens: Glaubensbekenntnis, Evangelium und Gebote wurden öffentlich gepredigt, und die Katechumenen erhielten alles in wenigen Monaten oder Jahren – unentgeltlich. Kyrill von Jerusalem erklärte den Neugetauften die Sakramente nach der Taufe; es gab keine höhere Stufe, auf der sich der Glaube in eine ganz andere Kosmologie verwandelte.`,
                  questionsBack: [`Gibt es in Scientology Lehren auf höheren Stufen, die du heute noch nicht kennst? Würdest du einen Vertrag unterschreiben, ohne ihn gelesen zu haben?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'xenu-verleumdung',
      objection: `Die Geschichte von Xenu ist aus dem Zusammenhang gerissen und wird von Kritikern benutzt, um uns lächerlich zu machen.`,
      objectionBy: 'Church of Scientology',
      answer: `Ich will niemanden lächerlich machen. Aber die Inhalte der Stufe OT III sind durch Gerichtsakten in den USA öffentlich geworden, und die Organisation behandelt sie als vertraulich, statt sie zu erklären. Genau das ist der Punkt: Ein Mitglied kann beim Eintritt nicht wissen, was die höheren Stufen lehren. Das Evangelium dagegen liegt vollständig offen auf dem Tisch.`,
      followUps: [
        {
          id: 'stufenweise-lernen',
          objection: `Höhere Stufen brauchen Vorbereitung – wie man auch nicht Differentialrechnung vor dem Einmaleins lernt.`,
          objectionBy: 'Scientology-Mitglieder',
          answer: `In der Mathematik ist nichts geheim: Jeder kann ein Lehrbuch der Differentialrechnung kaufen und hineinschauen. Und die Differentialrechnung widerspricht dem Einmaleins nicht. Im christlichen Glauben ist es ebenso: Ein Kind und ein Theologe bekennen dasselbe Glaubensbekenntnis; der Theologe versteht es nur tiefer. Paulus hat „nichts verhalten" (Apg 20,27).`,
          sources: [{ kind: 'bibel', work: 'Apostelgeschichte', ref: '20,27', quote: `Denn ich habe euch nichts verhalten, daß ich nicht verkündigt hätte all den Rat Gottes.`, translation: 'Luther 1912', status: 'verbatim' }],
          followUps: [
            {
              id: 'christen-glauben-auch-wunder',
              objection: `Christen glauben auch an Jungfrauengeburt, Wunder und Auferstehung – das ist nicht weniger fantastisch als Xenu.`,
              objectionBy: 'Religionskritiker / Scientology-Apologeten',
              answer: `Ein fairer Einwand. Aber die christlichen Behauptungen sind öffentlich und geschichtlich prüfbar: Sie betreffen eine bekannte Person, einen Ort, eine Zeit unter Pontius Pilatus, ein leeres Grab und Zeugen, von denen viele noch lebten (1 Kor 15,6). Man kann sie untersuchen. Die OT-III-Erzählung behauptet Ereignisse vor 75 Millionen Jahren, die sich nicht prüfen lassen und von einem Science-Fiction-Autor stammen. Die Frage nach der Glaubwürdigkeit der Quelle ist berechtigt.`,
              questionsBack: [`Welche Belege außerhalb von Hubbards Schriften gibt es für die Ereignisse der Stufe OT III?`],
            },
          ],
        },
      ],
    },
    {
      id: 'verfolgung-deutschland',
      objection: `In Deutschland wurde Scientology jahrzehntelang vom Verfassungsschutz bespitzelt – in den USA ist sie anerkannte Kirche. Das ist religiöse Diskriminierung.`,
      objectionBy: 'Church of Scientology',
      answer: `Religionsfreiheit gilt auch für Scientologen, und Christen sollten jede Diskriminierung ablehnen. Die deutsche Beobachtung (1997 bis Mai 2026 auf Bundesebene; Bayern beobachtet weiter) richtete sich nicht gegen Glaubensinhalte, sondern gegen organisatorische Ziele, die die Innenminister für verfassungsfeindlich hielten. Mein Einwand ist ohnehin kein staatlicher, sondern ein theologischer: Ist Scientology mit Christus vereinbar?`,
      followUps: [
        {
          id: 'usa-anerkannt',
          objection: `Die US-Steuerbehörde hat uns 1993 als Kirche anerkannt. Also sind wir eine echte Religion.`,
          objectionBy: 'Church of Scientology',
          answer: `Ein Steuerbescheid ist keine theologische Aussage. Selbst wenn Scientology eine Religion ist – und das will ich gar nicht bestreiten –, ist damit nicht gesagt, dass sie christlich oder mit dem Christentum vereinbar ist. Auch der Buddhismus ist eine Religion, und doch würde kein Buddhist behaupten, er sei dasselbe wie das Christentum.`,
          followUps: [
            {
              id: 'gute-werke',
              objection: `Scientology tut viel Gutes: Drogenprävention, Katastrophenhilfe, Menschenrechtskampagnen. Daran soll man sie erkennen.`,
              objectionBy: 'Church of Scientology',
              answer: `Gutes Tun erkenne ich an, wo es geschieht. Die Methoden von Narconon sind allerdings fachlich umstritten. Vor allem aber beweisen gute Werke nicht die Wahrheit einer Lehre – auch Atheisten, Muslime und Buddhisten tun viel Gutes. Die entscheidende Frage bleibt: Wer ist Jesus, und wie wird der Mensch gerettet?`,
            },
          ],
        },
      ],
    },
    {
      id: 'jesus-respektiert',
      objection: `Scientology respektiert Jesus als großen Lehrer, wie Buddha und andere. Was wollt ihr mehr?`,
      objectionBy: 'Scientology-Mitglieder',
      answer: `Christen sehen in Jesus nicht einen großen Lehrer neben anderen, sondern den Herrn, vor dem sich jedes Knie beugen wird (Phil 2,9–11), den Thomas „mein Herr und mein Gott" nannte (Joh 20,28). Hubbard dagegen soll Jesus und Buddha nach dem Zeugnis eines Artikels von 1958 nicht einmal als „Operierende Thetane" eingeordnet haben, sondern nur knapp über „Clear". Ein solcher Jesus ist nicht der Jesus der Evangelien.`,
      sources: [{ kind: 'gegner', author: 'L. Ron Hubbard (zugeschrieben)', work: 'Leitartikel in der Scientology-Zeitschrift „Ability"', year: '1958', quote: `Weder Buddha noch Jesus Christus seien nach den vorliegenden Hinweisen OTs gewesen, sondern nur knapp über Clear.`, status: 'unverified', note: 'Zitiert nach Lawrence Wright, Going Clear (2013); Wortlaut und Fundstelle konnten am Original nicht geprüft werden – nur mit diesem Vorbehalt verwenden.' }],
      followUps: [
        {
          id: 'trilemma-legende',
          objection: `Das Trilemma von C. S. Lewis ist schwach: Vielleicht sind die göttlichen Ansprüche Jesu spätere Legende. Dann bleibt er ein großer Lehrer.`,
          objectionBy: 'Religionskritiker',
          answer: `Dann verschiebt sich die Frage auf die historische Zuverlässigkeit der Evangelien – und die lässt sich prüfen. Aber für Scientology entsteht ein anderes Problem: Woher weiß Hubbard, welche Worte Jesu echt sind und welche Legende? Wer Jesus nur als Lehrer anerkennt, muss auswählen – und wählt dabei genau das aus, was ihm in das eigene System passt.`,
          questionsBack: [`Nach welchem Maßstab entscheidest du, welche Worte Jesu du annimmst und welche nicht?`],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wer ist der Mensch – ein ewiger Thetan oder ein Geschöpf Gottes mit einem Leben?`,
    `Was ist das Grundproblem des Menschen – Engramme oder Sünde?`,
    `Kennst du die Inhalte aller höheren Stufen? Würdest du einen Vertrag unterschreiben, den du nicht lesen darfst?`,
    `Warum kostet geistliche Befreiung Geld, wenn Jesus sagt: „Umsonst habt ihr's empfangen"?`,
    `Wer ist Jesus für dich – ein Mensch knapp über „Clear" oder der Herr?`,
  ],
  avoid: [
    `Mit der Xenu-Geschichte spotten – das beendet das Gespräch und verletzt Menschen, die sie oft selbst nicht kennen.`,
    `Unbelegte Behauptungen über Straftaten weitergeben – bleib bei veröffentlichten Lehren und Gerichtsentscheidungen.`,
    `Sich auf staatliche Maßnahmen berufen, um die Lehre zu widerlegen – Religionsfreiheit gilt für alle.`,
    `Ein angebliches Hubbard-Zitat über Jesus als Pädophilen (aus OT-VIII-Gerüchten) verwenden – nicht belegbar.`,
  ],
  concessions: [
    `Scientology wird in mehreren Ländern als Religion anerkannt; Religionsfreiheit gilt auch für ihre Mitglieder.`,
    `Viele Mitglieder sind aufrichtig auf der Suche nach Freiheit und Sinn und berichten von persönlicher Hilfe.`,
    `Das Bundesamt für Verfassungsschutz hat die gesonderte Beobachtung 2026 beendet, weil die Organisation an Relevanz verloren hat.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Walter Martin', work: 'The Kingdom of the Cults', ref: 'Kapitel „Scientology"', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Hugh B. Urban', work: 'The Church of Scientology: A History of a New Religion', year: '2011', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Lawrence Wright', work: 'Going Clear', year: '2013', status: 'paraphrase' },
    { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Adversus Haereses', ref: 'Buch I und III', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Scientology', 'L. Ron Hubbard', 'Dianetik', 'Thetan', 'Auditing', 'Gnosis', 'Verfassungsschutz'],
  related: [
    'gnosis/geheimes-wissen-elite',
    'esoterik-new-age/reinkarnation-in-der-bibel',
    'kirchengeschichte-mythen/reinkarnation-553-gestrichen',
    'esoterik-new-age/christusbewusstsein',
    'weitere-sondergemeinschaften/christliche-wissenschaft',
  ],
};

export default claim;
