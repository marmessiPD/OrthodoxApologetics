import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'hawking-keine-grenze',
  title: `„Hawkings No-Boundary-Modell macht einen Schöpfer überflüssig."`,
  proponents: [
    { name: 'Stephen Hawking', role: 'Theoretischer Physiker, Cambridge', work: 'A Brief History of Time (1988), Kap. 8; mit J. Hartle: „Wave Function of the Universe", Phys. Rev. D 28 (1983)' },
    { name: 'James Hartle', role: 'Theoretischer Physiker, UC Santa Barbara', work: 'Hartle–Hawking-Vorschlag (1983)' },
    { name: 'Thomas Hertog', role: 'Kosmologe, KU Leuven, langjähriger Mitarbeiter Hawkings', work: 'On the Origin of Time: Stephen Hawking’s Final Theory (2023)' },
    { name: 'Sean Carroll', role: 'Theoretischer Physiker', work: '„Does the Universe Need God?", in: Blackwell Companion to Science and Christianity (2012)' },
  ],
  steelman: `Hartle und Hawking haben 1983 eine Wellenfunktion des Universums vorgeschlagen, in der der Anfang keine scharfe Kante ist. Rechnet man in „imaginärer Zeit", verhält sich die Zeit nahe dem Ursprung wie eine Raumrichtung: Die frühe Raumzeit ist wie die Oberfläche einer Kugel um den Südpol – endlich, aber ohne Rand. Es gibt keinen ersten Moment, keine Singularität, keinen Punkt, an dem die Gesetze versagen, und damit keinen Ort, an dem ein Schöpfer eingreifen müsste. Hawking zog daraus 1988 den berühmten Schluss: Solange das Universum einen Anfang hatte, konnte man einen Schöpfer annehmen. Ist es aber völlig in sich geschlossen, ohne Rand, dann hat es weder Anfang noch Ende – es *ist* einfach. Welchen Platz gibt es dann für einen Schöpfer?`,
  biblical: {
    summary: `Hawkings Frage setzt voraus, dass ein Schöpfer nur am ersten Moment „gebraucht" wird – wie ein Uhrmacher, der die Uhr aufzieht und dann weggeht. Das ist Deismus, nicht biblischer Glaube. Die Schrift beschreibt Gott nicht nur als den, der „im Anfang" schuf, sondern als den, in dem „alles besteht" (Kol 1,17), der „alle Dinge trägt" (Hebr 1,3) und in dem „wir leben, weben und sind" (Apg 17,28). Schöpfung bedeutet Abhängigkeit des Seins – in jedem Augenblick, ob die Zeit einen Rand hat oder nicht.`,
    detail: `- **Kol 1,16–17:** Der Logos ist Schöpfer *und* Erhalter; das Verb *synestēken* („besteht zusammen") beschreibt fortdauernden Zusammenhalt.
- **Hebr 1,3:** Christus „trägt" (*pherōn*, Präsens) alle Dinge durch sein Wort.
- **Apg 17,28:** Paulus vor Philosophen auf dem Areopag – das Dasein in Gott ist eine Gegenwartsaussage.
- **Joh 5,17:** „Mein Vater wirkt bis jetzt" – Gottes Wirken endet nicht mit dem Anfang.

Daher würde selbst ein Universum ohne ersten Moment die biblische Lehre nicht berühren. Ironischerweise ist Hawkings No-Boundary-Universum aber gar nicht anfangslos: Es hat eine endliche Vergangenheit.`,
    sources: [
      { kind: 'bibel', work: 'Kolosser', ref: '1,16–17', quote: `Denn durch ihn ist alles geschaffen, das im Himmel und auf Erden ist, das Sichtbare und Unsichtbare … es ist alles durch ihn und zu ihm geschaffen; und er ist vor allem, und es besteht alles in ihm.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Hebräer', ref: '1,3', quote: `… und trägt alle Dinge mit seinem kräftigen Wort …`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '17,28', quote: `Denn in ihm leben, weben und sind wir …`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die alexandrinische Tradition hat Schöpfung immer als dauernde Abhängigkeit verstanden. Der hl. Athanasius lehrt, dass die geschaffene Natur aus sich „fließend und auflösbar" ist und nur durch den Logos im Sein gehalten wird. Thomas von Aquin – ein westlicher Zeuge, aber in dieser philosophischen Frage hilfreich – hielt es sogar für philosophisch nicht beweisbar, dass die Welt einen zeitlichen Anfang hat; geschaffen wäre sie auch ohne Anfang, weil ihr Sein von Gott kommt.`,
    detail: `- **Athanasius, Contra Gentes 41–42:** Weil die Schöpfung aus dem Nichts stammt, wäre sie in Gefahr, ins Nichts zurückzufallen; der Logos ordnet und erhält sie wie ein Musiker, der die Saiten seiner Leier stimmt.
- **Augustinus, De Genesi ad litteram IV,12,22:** Würde Gott seine schöpferische Kraft entziehen, hörte die Schöpfung auf zu bestehen.
- **Thomas von Aquin, Summa Theologiae I, q. 46, a. 2:** Dass die Welt begann, wird durch den Glauben festgehalten und kann nicht zwingend bewiesen werden. Darum hängt die Schöpfungslehre nicht an einem physikalischen Anfangspunkt.`,
    sources: [
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Contra Gentes', ref: '41–42', year: 'ca. 318', quote: `Die geschaffene Natur ist aus sich fließend und auflösbar; der Logos hält sie zusammen und ordnet sie wie ein Musiker die gestimmte Leier.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'De Genesi ad litteram', ref: 'IV,12,22', year: 'ca. 415', quote: `Würde die Kraft des Schöpfers den Dingen entzogen, so hörten sie sofort auf zu sein.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Thomas von Aquin', work: 'Summa Theologiae', ref: 'I, q. 46, a. 2', year: 'ca. 1268', quote: `Dass die Welt nicht immer war, wird allein durch den Glauben festgehalten und lässt sich nicht beweiskräftig demonstrieren.`, status: 'paraphrase', note: 'Westlicher Theologe; hier nur für die philosophische Unterscheidung zwischen Anfang und Abhängigkeit herangezogen.' },
    ],
  },
  opposingView: {
    summary: `Der Hartle–Hawking-Vorschlag (*Phys. Rev. D* 28, 2960, 1983) ist ein ernsthafter, einflussreicher Ansatz der Quantenkosmologie, aber unbestätigt und umstritten. Die „imaginäre Zeit" ist eine mathematische Technik (Wick-Rotation), die in vielen Gebieten der Physik als Rechentrick dient. Hawking selbst schrieb, dass in der realen Zeit, in der wir leben, weiterhin Singularitäten auftreten. 2017 argumentierten Feldbrugge, Lehners und Turok, dass ein glatter, semiklassischer Anfang im Sinne des No-Boundary- oder Tunnelvorschlags nicht haltbar sei; Hartle, Hertog und Kollegen antworteten mit modifizierten Formulierungen. Die Debatte ist offen.`,
    detail: `- **Endliche Vergangenheit:** Im No-Boundary-Modell ist die Vergangenheit endlich – vergleichbar mit der Oberfläche einer Kugel: Es gibt keinen Rand, aber auch keine unendliche Ausdehnung. Das Universum ist nicht ewig.
- **Imaginäre Zeit:** Durch Multiplikation der Zeit mit der imaginären Einheit wird die Lorentz-Signatur zur euklidischen; das vereinfacht Rechnungen. Ob diese euklidische Geometrie physikalisch real ist, ist eine Deutungsfrage. Hawking selbst nannte es eine Vermutung („vielleicht"), dass die imaginäre Zeit grundlegender sei.
- **Feldbrugge, Lehners & Turok** (*Phys. Rev. Lett.* 119, 171301, 2017): Störungen würden in diesen Ansätzen nicht unterdrückt, sondern verstärkt; ein glatter Anfang sei unmöglich.
- **Hertog (2023):** Hawkings späte „Top-down-Kosmologie" deutet die Gesetze selbst als in gewissem Sinn mit dem Universum entstanden – auch das setzt einen quantenmechanischen Rahmen voraus.`,
    sources: [
      { kind: 'wissenschaft', author: 'James B. Hartle & Stephen W. Hawking', work: '„Wave Function of the Universe", Physical Review D 28, 2960', year: '1983', quote: `Vorschlag, den Grundzustand des Universums durch ein Pfadintegral über kompakte euklidische Geometrien ohne Rand zu definieren.`, status: 'paraphrase' },
      { kind: 'gegner', author: 'Stephen Hawking', work: 'A Brief History of Time', ref: 'Kap. 8 „The Origin and Fate of the Universe"', year: '1988', quote: `Kehrt man jedoch zur realen Zeit zurück, in der wir leben, wird es immer noch Singularitäten zu geben scheinen.`, original: `When one goes back to the real time in which we live, however, there will still appear to be singularities.`, translation: 'eigene Übersetzung', status: 'verbatim' },
      { kind: 'wissenschaft', author: 'Job Feldbrugge, Jean-Luc Lehners & Neil Turok', work: '„No Smooth Beginning for Spacetime", Physical Review Letters 119, 171301', year: '2017', quote: `Wir identifizieren ein grundlegendes Hindernis für jede Theorie des Anfangs des Universums als semiklassischen Quantenprozess … Eine semiklassische Beschreibung des Anfangs als reguläres Tunnelereignis erscheint unhaltbar.`, original: `We identify a fundamental obstruction to any theory of the beginning of the universe as a semi-classical quantum process … A semi-classical description of the beginning of the universe as a regular tunneling event thus appears to be untenable.`, translation: 'eigene Übersetzung', status: 'verbatim', url: 'https://doi.org/10.1103/PhysRevLett.119.171301' },
      { kind: 'gegner', author: 'Thomas Hertog', work: 'On the Origin of Time: Stephen Hawking’s Final Theory', year: '2023', quote: `In Hawkings später Sicht sind auch die effektiven Naturgesetze in gewissem Sinn mit dem Universum entstanden.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Erstens macht das No-Boundary-Modell das Universum nicht ewig: Seine Vergangenheit bleibt endlich, nur die scharfe Kante wird abgerundet. Zweitens ist die „imaginäre Zeit" ein Rechenverfahren; Hawking schrieb selbst, dass in der realen Zeit Singularitäten bleiben. Drittens ist das Modell unbestätigt und umstritten. Und viertens: Schöpfung heißt nicht „Zündschnur anzünden", sondern Dasein schenken – auch einem Universum ohne Rand. Hawking fragte selbst: Was haucht den Gleichungen Feuer ein?`,
  keyPoints: [
    `**Endlich, nicht ewig:** Das No-Boundary-Universum hat eine endliche Vergangenheit wie die Oberfläche einer Kugel – kein Rand, aber auch kein unendliches Alter.`,
    `**Imaginäre Zeit ist ein Werkzeug:** In der realen Zeit, sagt Hawking selbst, gibt es weiterhin Singularitäten.`,
    `**Umstrittenes Modell:** Feldbrugge, Lehners und Turok (2017) halten einen glatten semiklassischen Anfang für unhaltbar; die Debatte ist offen.`,
    `**Hawking widerlegt einen Deisten-Gott:** Der biblische Gott erhält alles in jedem Moment (Kol 1,17; Hebr 1,3) – nicht nur am Startpunkt.`,
    `**Die Gleichungen brauchen Wirklichkeit:** Eine Wellenfunktion des Universums ist ein mathematisches Objekt; warum sie real ist, sagt sie nicht.`,
  ],
  voices: [
    {
      person: 'thomas-aquin',
      role: 'als Philosoph der Schöpfung',
      text: `Thomas unterscheidet sorgfältig zwischen zwei Fragen: Hat die Welt einen zeitlichen Anfang? Und ist die Welt in ihrem Sein von Gott abhängig? Die erste Frage hielt er philosophisch für nicht entscheidbar; die zweite für beweisbar. Selbst eine anfangslose Welt wäre geschaffen, weil sie ihr Sein nicht aus sich hat. Darum kann ein physikalisches Modell ohne ersten Augenblick die Schöpfungslehre nicht widerlegen. Hawkings Frage „Welchen Platz gibt es dann für einen Schöpfer?" trifft nur eine Vorstellung, die Thomas schon im 13. Jahrhundert als unzureichend erkannte.`,
      sources: [{ kind: 'fachliteratur', author: 'Thomas von Aquin', work: 'De aeternitate mundi', year: 'um 1270', quote: `Es widerspricht sich nicht, dass etwas von Gott geschaffen ist und dennoch immer existiert hat.`, status: 'paraphrase' }],
    },
    {
      person: 'craig',
      role: 'als Zeitphilosoph',
      text: `Craig hat Hawkings Schluss bereits 1990 im *British Journal for the Philosophy of Science* unter dem Titel „What Place, Then, for a Creator?" analysiert. Sein Ergebnis: Das No-Boundary-Modell beseitigt nicht den Anfang, sondern nur den singulären Anfangspunkt. Eine endliche Vergangenheit ohne scharfen ersten Moment ist immer noch eine Vergangenheit, die begonnen hat. Zudem wird die imaginäre Zeit von Hawking selbst nicht konsequent realistisch gedeutet; in der realen Zeit bleibt die Singularität.`,
      sources: [{ kind: 'fachliteratur', author: 'William Lane Craig', work: '„What Place, Then, for a Creator?: Hawking on God and Creation", British Journal for the Philosophy of Science 41', year: '1990', quote: `Hawkings Modell rundet den Anfang ab, beseitigt ihn aber nicht; die Vergangenheit bleibt endlich.`, status: 'paraphrase' }],
    },
    {
      person: 'don-page',
      role: 'als langjähriger Mitarbeiter Hawkings und Quantenkosmologe',
      text: `Don Page arbeitete eng mit Hawking zusammen und ist überzeugter Christ. Er hat betont, dass die Frage nach Gott in der Quantenkosmologie nicht an einem Anfangszeitpunkt hängt: Gott ist Schöpfer des gesamten Universums und seiner Gesetze, nicht nur seines Beginns. Ein Universum, das durch eine elegante Wellenfunktion beschrieben wird, passt nach Page gut zu einem rationalen Schöpfer, der eine einfache, schöne Ordnung wählt.`,
      sources: [{ kind: 'fachliteratur', author: 'Don N. Page', work: 'Rezension von „A Brief History of Time" („Hawking’s Timely Story"), Nature 332', year: '1988', quote: `Gott schafft das ganze Universum, nicht nur seinen Anfang; die No-Boundary-Bedingung beseitigt die Frage nach dem Schöpfer nicht.`, status: 'unverified', note: 'Sinngemäß; genauer Wortlaut und Seitenangabe vor Verwendung prüfen.' }],
    },
    {
      person: 'athanasius',
      role: 'als Theologe des Logos',
      text: `Für Athanasius ist die Welt kein Uhrwerk, das nach dem Aufziehen allein weiterläuft. In *Contra Gentes* 41–42 beschreibt er den Logos als den, der die Schöpfung beständig zusammenhält, ordnet und ins Sein ruft – wie ein Musiker, dessen gestimmte Leier nur klingt, solange er spielt. Eine physikalische Theorie, die einen Anfangspunkt abrundet, berührt diese Lehre nicht: Sie beschreibt die Melodie, nicht den Spieler.`,
      sources: [{ kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Contra Gentes', ref: '42', year: 'ca. 318', quote: `Der Logos bewegt, ordnet und erhält alles, wie ein Musiker seine Leier stimmt und spielt.`, status: 'paraphrase' }],
    },
    {
      person: 'stephen-meyer',
      role: 'als Wissenschaftsphilosoph',
      text: `Meyer weist darauf hin, dass Hawkings Quantenkosmologie keine Physik „aus dem Nichts" ist, sondern ein hochabstraktes mathematisches Gerüst voraussetzt: Pfadintegrale über Geometrien, eine bestimmte Randbedingung, eine Auswahl von Feldern. Wer das Universum durch Mathematik erklärt, muss sagen, warum diese Mathematik physikalisch wirksam ist. Für Meyer verweist das eher auf einen Geist als auf ein in sich geschlossenes, selbsterklärendes Universum.`,
      sources: [{ kind: 'fachliteratur', author: 'Stephen C. Meyer', work: 'Return of the God Hypothesis', year: '2021', quote: `Hawkings Kosmologie setzt eine mathematische Struktur voraus, deren Herkunft und Wirksamkeit sie nicht erklärt.`, status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'kein-anfangspunkt',
      objection: `Im No-Boundary-Modell gibt es keinen Anfangspunkt. Wo kein Anfang ist, braucht es keine Ursache des Anfangs.`,
      objectionBy: 'Stephen Hawking',
      answer: `Es gibt keinen *scharfen* Anfangspunkt – aber eine endliche Vergangenheit. Stell dir die Erdoberfläche vor: Am Südpol gibt es keinen Rand, aber die Oberfläche ist trotzdem endlich. Ein Universum mit endlicher Vergangenheit ist nicht ewig; es hat begonnen, nur eben „abgerundet".`,
      detail: `Hawking selbst spricht von einem Universum, das „endlich, aber unbegrenzt" ist. Die Pointe seines Modells ist nicht ein ewiges Universum, sondern ein Anfang ohne Singularität, an dem die Gesetze nicht versagen.`,
      sources: [{ kind: 'gegner', author: 'Stephen Hawking', work: 'A Brief History of Time', ref: 'Kap. 8', year: '1988', quote: `Solange das Universum einen Anfang hatte, konnten wir annehmen, dass es einen Schöpfer hatte. Aber wenn das Universum wirklich völlig in sich abgeschlossen ist, ohne Grenze oder Rand, hätte es weder Anfang noch Ende: Es wäre einfach. Welchen Platz gäbe es dann für einen Schöpfer?`, original: `So long as the universe had a beginning, we could suppose it had a creator. But if the universe is really completely self-contained, having no boundary or edge, it would have neither beginning nor end: it would simply be. What place, then, for a creator?`, translation: 'eigene Übersetzung', status: 'verbatim' }],
      questionsBack: [`Ist die Vergangenheit im No-Boundary-Modell endlich oder unendlich?`],
      followUps: [
        {
          id: 'kein-erstes-ereignis-kalam',
          objection: `Wenn es keinen ersten Moment gibt, gibt es auch kein erstes Ereignis, das verursacht werden müsste. Damit scheitert das Kalam-Argument.`,
          objectionBy: 'Sean Carroll',
          answer: `Das Kalam-Argument braucht keinen ersten Augenblick, sondern eine endliche Vergangenheit. Mathematisch: Ein Zeitintervall, das vorne offen ist, ist trotzdem endlich. Etwas, dessen Dasein eine endliche Dauer hat, hat zu existieren begonnen – auch ohne exakten Startpunkt.`,
          followUps: [
            {
              id: 'wortklauberei-beginnen',
              objection: `Das ist Wortklauberei über das Wort „beginnen".`,
              objectionBy: 'Sean Carroll',
              answer: `Nein, das ist Mathematik. Die Frage ist: Reicht die Vergangenheit unendlich weit zurück oder nicht? Im No-Boundary-Modell nicht. Damit ist das Universum nicht ewig und die Frage nach seinem Grund bleibt bestehen.`,
            },
          ],
        },
        {
          id: 'es-waere-einfach',
          objection: `Hawking sagt doch: Ein solches Universum „wäre einfach". Da ist schlicht kein Platz für einen Schöpfer.`,
          objectionBy: 'Stephen Hawking',
          answer: `Diese Frage trifft nur einen Gott, der an einem ersten Zeitpunkt eingreift – einen deistischen Uhrmacher. Der Gott der Bibel ist der Grund, warum es überhaupt etwas gibt, in jedem Augenblick (Kol 1,17; Hebr 1,3). „Es wäre einfach" ist keine Erklärung, sondern ein Verzicht auf Erklärung.`,
          followUps: [
            {
              id: 'erhaltender-gott-unfalsifizierbar',
              objection: `Ein Gott, der nur „erhält", aber nirgends eingreift, ist unbeweisbar und unfalsifizierbar – also wissenschaftlich wertlos.`,
              objectionBy: 'Victor Stenger',
              answer: `Er ist eine metaphysische, keine naturwissenschaftliche These – genau wie „das Universum ist einfach da". Beide kann man nicht im Labor testen; beide muss man philosophisch begründen. Für die eine sprechen Kontingenz, Feinabstimmung und Verstehbarkeit der Welt; die andere verzichtet auf jede Begründung.`,
            },
          ],
        },
      ],
    },
    {
      id: 'imaginaere-zeit-fundamental',
      objection: `Hawking hat gezeigt: Die imaginäre Zeit ist vielleicht die grundlegendere Zeit; was wir reale Zeit nennen, ist nur eine Idee, die wir erfinden. In der wirklichen, imaginären Zeit gibt es keinen Anfang.`,
      objectionBy: 'Stephen Hawking',
      answer: `Hawking selbst sagt „vielleicht" – und im selben Kapitel, dass in der realen Zeit, in der wir leben, Singularitäten bleiben. Imaginäre Zeit ist ein bewährtes Rechenverfahren; dass sie die eigentliche Wirklichkeit sei, ist eine philosophische Spekulation. Unsere Beobachtungen, Experimente und unser Leben finden in realer Zeit statt.`,
      detail: `Die Wick-Rotation wird in der statistischen Physik und Quantenfeldtheorie routinemäßig verwendet, ohne dass jemand daraus schließt, die Zeit sei „eigentlich" imaginär. Wer dem Universum den Anfang nimmt, indem er die Zeit für imaginär erklärt, löst das Problem durch Umbenennung.`,
      questionsBack: [`In welcher Zeit – realer oder imaginärer – findet deine Messung statt?`],
      followUps: [
        {
          id: 'mathematik-ist-fundamental',
          objection: `Mathematik ist eben fundamentaler als unsere Anschauung. Tegmark sagt sogar: Das Universum *ist* eine mathematische Struktur.`,
          objectionBy: 'Max Tegmark',
          answer: `Dann stellt sich die Frage umso schärfer: Warum ist gerade diese Struktur physikalisch verwirklicht und nicht unzählige andere? Mathematische Strukturen sind abstrakt; was sie „real" macht, sagen sie nicht. Hawking selbst fragte, was den Gleichungen Feuer einhaucht. Dass die Welt mathematisch ist, passt hervorragend zu einem rationalen Schöpfer.`,
          detail: `Zur Frage, warum Mathematik die Welt so gut beschreibt (Wigner), siehe den Themenblock Mathematik.`,
        },
      ],
    },
    {
      id: 'wellenfunktion-spontan',
      objection: `Die Hartle–Hawking-Wellenfunktion gibt die Wahrscheinlichkeit an, dass ein Universum wie unseres spontan entsteht. Das ist Physik – Gott wird dafür nicht gebraucht.`,
      objectionBy: 'Stephen Hawking & Leonard Mlodinow',
      answer: `Eine Wellenfunktion setzt vieles voraus: einen Raum möglicher Geometrien und Felder, die Regeln der Quantenmechanik, eine Gleichung, die sie erfüllt, und eine Randbedingung, die Hawking gewählt hat. Das ist eine Beschreibung innerhalb eines Rahmens – keine Erklärung, warum es den Rahmen gibt. Und das Modell selbst ist umstritten.`,
      followUps: [
        {
          id: 'turok-wurde-beantwortet',
          objection: `Das Papier von Feldbrugge, Lehners und Turok wurde von Hartle, Hertog und anderen beantwortet. Du pickst dir die Kritik heraus, die dir passt.`,
          objectionBy: 'Kosmologe (Fachdiskussion)',
          answer: `Stimmt, die Debatte ist offen, und ich behaupte nicht, das Modell sei widerlegt. Mein Punkt ist bescheidener: Es ist nicht etabliert. Und meine Hauptargumente – endliche Vergangenheit, vorausgesetzter Rahmen, Schöpfung als Seinsabhängigkeit – gelten unabhängig davon, wer in dieser Fachdebatte recht behält.`,
          followUps: [
            {
              id: 'top-down-gesetze-entstehen',
              objection: `Hawking hat mit Hertog am Ende eine „Top-down-Kosmologie" entwickelt: Selbst die Naturgesetze entstehen mit dem Universum. Dann gibt es nichts mehr, was vorausgesetzt wäre.`,
              objectionBy: 'Thomas Hertog',
              answer: `Auch dann gibt es eine tiefere Ebene: einen quantenmechanischen Rahmen, in dem sich effektive Gesetze herausbilden. Irgendetwas muss fundamental sein, sonst lässt sich nichts berechnen. Die Frage verschiebt sich – sie verschwindet nicht: Warum gibt es diesen Rahmen überhaupt?`,
            },
          ],
        },
      ],
    },
    {
      id: 'hawking-groesster-physiker',
      objection: `Hawking war einer der größten Physiker des Jahrhunderts. Du bist ein Laie – mit welchem Recht widersprichst du ihm?`,
      objectionBy: 'Gesprächspartner',
      answer: `Ich widerspreche nicht seiner Physik, sondern seiner Theologie. Die Frage, ob ein Schöpfer „Platz" hat, ist keine Gleichung, sondern Philosophie. Und auch in der Fachwelt sehen das viele anders – etwa Don Page, sein langjähriger Mitarbeiter, ein überzeugter Christ.`,
      detail: `Hawking selbst war bereit, seine Positionen zu revidieren (etwa zur Informationsfrage bei Schwarzen Löchern). Autorität verdient Respekt, ersetzt aber keine Begründung.`,
    },
  ],
  questionsToAsk: [
    `Ist die Vergangenheit im No-Boundary-Modell endlich oder unendlich?`,
    `In welcher Zeit leben und messen wir – in realer oder in imaginärer?`,
    `Was erklärt, dass gerade diese Wellenfunktion physikalisch verwirklicht ist?`,
    `Welcher Gott wird durch das Fehlen eines ersten Moments überflüssig – der deistische Uhrmacher oder der biblische Erhalter aller Dinge?`,
  ],
  avoid: [
    `„Imaginäre Zeit ist Unsinn, weil es imaginäre Zahlen nicht gibt." – Imaginäre Zahlen sind seriöse Mathematik und in der Physik unverzichtbar. Kritisiere die Deutung, nicht die Mathematik.`,
    `„Hawking hat selbst zugegeben, dass er falsch lag." – So pauschal ist das falsch. Zitiere genau, was er über reale Zeit und Singularitäten sagte.`,
  ],
  concessions: [
    `Der Hartle–Hawking-Vorschlag ist ein ernstzunehmender, eleganter Beitrag zur Quantenkosmologie.`,
    `Wenn das Modell stimmt, gibt es tatsächlich keinen singulären ersten Augenblick, an dem die Gesetze versagen.`,
  ],
  furtherReading: [
    { kind: 'gegner', author: 'Stephen Hawking', work: 'A Brief History of Time', ref: 'Kap. 8', year: '1988', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'William Lane Craig', work: '„What Place, Then, for a Creator?", British Journal for the Philosophy of Science 41', year: '1990', status: 'paraphrase' },
    { kind: 'gegner', author: 'Thomas Hertog', work: 'On the Origin of Time', year: '2023', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'John C. Lennox', work: 'God and Stephen Hawking', year: '2011', status: 'paraphrase' },
  ],
  difficulty: 3,
  tags: ['Hawking', 'No-Boundary', 'imaginäre Zeit', 'Quantenkosmologie', 'Erhaltung der Schöpfung'],
  related: [
    'kosmologie/universum-aus-dem-nichts',
    'kosmologie/vor-dem-urknall-sinnlos',
    'gottesbeweise/kalam-widerlegt',
    'gottesbeweise/hoechstens-deismus',
    'mathematik/effektivitaet-der-mathematik-zufall',
  ],
};

export default claim;
