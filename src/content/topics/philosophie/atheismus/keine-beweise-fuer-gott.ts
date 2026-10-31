import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'keine-beweise-fuer-gott',
  title: `„Es gibt keine Beweise für Gott."`,
  proponents: [
    { name: 'Richard Dawkins', role: 'Evolutionsbiologe, Oxford', work: 'The God Delusion (2006), bes. Kap. 3–4' },
    { name: 'Matt Dillahunty', role: 'Atheistischer Debattierer, ehem. Moderator von „The Atheist Experience"', work: 'Zahlreiche Debatten (u. a. mit Jimmy Akin, Matt Slick)' },
    { name: 'Graham Oppy', role: 'Religionsphilosoph, Monash University (Melbourne)', work: 'Arguing about Gods (2006)' },
    { name: 'Jeffery Jay Lowder', role: 'Mitbegründer der Secular Web (Internet Infidels)', work: 'Evidenzbasierte Fallbegründungen für den Naturalismus (Secular Outpost)' },
    { name: 'Christopher Hitchens', role: 'Publizist', work: 'God Is Not Great (2007)' },
  ],
  steelman: `Wenn ein allmächtiger, allgütiger Gott existierte, der eine Beziehung mit jedem Menschen wünscht, dann wäre seine Existenz so offensichtlich wie die Existenz Australiens. Stattdessen streiten Fachleute seit Jahrtausenden ergebnislos; die große Mehrheit der Berufsphilosophen ist nicht theistisch; jedes klassische Argument hat anerkannte Schwachstellen; religiöse Erfahrungen widersprechen einander von Kultur zu Kultur; und der Theismus macht keine überprüfbaren Vorhersagen, die der Naturalismus nicht ebenso gut oder besser erklärt. Graham Oppy hat gezeigt, dass zu jedem theistischen Argument ein naturalistisches Gegenstück existiert, das mit weniger Annahmen auskommt. Jeffery Jay Lowder ergänzt: Die tatsächlichen Daten – Geist, der vollständig vom Gehirn abhängt, Schmerz und Lust in genau der biologisch nützlichen Verteilung, das riesige, für Leben fast vollständig feindliche Universum – sind unter dem Naturalismus viel eher zu erwarten. Wer eine Behauptung aufstellt, trägt die Beweislast. Solange sie nicht eingelöst ist, ist Unglaube die vernünftige Grundhaltung.`,
  biblical: {
    summary: `Die Bibel verlangt nirgends einen Glauben „ohne Belege". Sie verweist im Gegenteil auf öffentlich zugängliche Zeugnisse: die Schöpfung (Röm 1,19–20; Ps 19,2; Apg 14,17), das Gewissen (Röm 2,14–15) und vor allem das geschichtliche Ereignis der Auferstehung, das Paulus auf dem Areopag ausdrücklich als „Beweis" für alle Menschen anführt (Apg 17,31). Zugleich sagt sie realistisch, dass Belege niemanden zwingen: Wer die Wahrheit nicht will, kann sie „niederhalten" (Röm 1,18).`,
    detail: `- **Röm 1,19–20:** Paulus behauptet nicht, Gott sei durch Gefühle erkennbar, sondern durch „die Werke" – griechisch *tois poiēmasin nooumena kathoratai*: durch das Gemachte, mit dem Verstand wahrgenommen, wird Gottes unsichtbares Wesen „erblickt". Das ist ein Schluss von der Wirkung auf die Ursache.
- **Apg 17,31:** Der Ausdruck *pistin paraschōn pasin* bedeutet wörtlich „indem er allen eine Beglaubigung (einen Beweis) gab", nämlich durch die Auferweckung Jesu. Luther übersetzt: „und jedermann vorhält den Glauben". *Pistis* bezeichnet hier das, was Vertrauen begründet.
- **1 Kor 15,3–8.14:** Paulus nennt Zeugen, von denen „noch viele leben" – eine Einladung zur Überprüfung – und macht den Glauben ausdrücklich falsifizierbar: Ohne Auferstehung ist er „vergeblich".
- **Missverständnis:** „Selig sind, die nicht sehen und doch glauben" (Joh 20,29) lobt nicht Blindheit, sondern das Vertrauen auf glaubwürdiges Zeugnis – der folgende Vers sagt, die Zeichen seien *aufgeschrieben*, damit man glaube (Joh 20,30–31).`,
    sources: [
      { kind: 'bibel', work: 'Römer', ref: '1,19–20', quote: `Denn was man von Gott weiß, ist ihnen offenbar; denn Gott hat es ihnen offenbart, damit daß Gottes unsichtbares Wesen, das ist seine ewige Kraft und Gottheit, wird ersehen, so man des wahrnimmt, an den Werken, nämlich an der Schöpfung der Welt; also daß sie keine Entschuldigung haben.`, original: `τὰ γὰρ ἀόρατα αὐτοῦ ἀπὸ κτίσεως κόσμου τοῖς ποιήμασιν νοούμενα καθορᾶται, ἥ τε ἀΐδιος αὐτοῦ δύναμις καὶ θειότης`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Psalmen', ref: '19,2', quote: `Die Himmel erzählen die Ehre Gottes, und die Feste verkündigt seiner Hände Werk.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '17,31', quote: `darum daß er einen Tag gesetzt hat, auf welchen er richten will den Kreis des Erdbodens mit Gerechtigkeit durch einen Mann, in welchem er's beschlossen hat, und jedermann vorhält den Glauben, nachdem er ihn hat von den Toten auferweckt.`, original: `πίστιν παρασχὼν πᾶσιν ἀναστήσας αὐτὸν ἐκ νεκρῶν`, translation: 'Luther 1912', status: 'verbatim', note: 'Pistis meint hier die Beglaubigung, den Beweisgrund – nicht ein Gefühl.' },
      { kind: 'bibel', work: '1. Korinther', ref: '15,6.14', quote: `Darnach ist er gesehen worden von mehr denn fünfhundert Brüdern auf einmal, deren noch viele leben, etliche aber sind entschlafen. […] Ist aber Christus nicht auferstanden, so ist unsre Predigt vergeblich, so ist auch euer Glaube vergeblich.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '14,17', quote: `und doch hat er sich selbst nicht unbezeugt gelassen, hat uns viel Gutes getan und vom Himmel Regen und fruchtbare Zeiten gegeben, unsere Herzen erfüllt mit Speise und Freude.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die alexandrinische Tradition lehrt eine doppelte Gotteserkenntnis: eine natürliche aus der geordneten Schöpfung und der vernunftbegabten Seele, und eine geoffenbarte in Christus, dem fleischgewordenen Logos. Der hl. Athanasius beginnt sein apologetisches Doppelwerk genau so: „Gegen die Heiden" zeigt, dass die Ordnung des Kosmos auf den einen Schöpfer verweist; „Über die Menschwerdung" zeigt, dass Gott sich in Christus sichtbar gemacht hat – und dass die Wirkungen des Auferstandenen in der Gegenwart sichtbar sind.`,
    detail: `Athanasius vergleicht die Schöpfung mit einem Kunstwerk, aus dem man den Künstler erkennt, auch wenn er nicht sichtbar anwesend ist (Contra Gentes 35). In De Incarnatione 27–32 argumentiert er, dass die Verwandlung von Menschen – Märtyrer, die den Tod nicht mehr fürchten, Heiden, die ihre Götzen verlassen – die Gegenwart des lebendigen Christus anzeigt: Ein Toter wirkt nicht. Johannes von Damaskus fasst die Väter zusammen: Gott hat die Erkenntnis, dass er ist, allen Menschen von Natur eingepflanzt, und die Schöpfung selbst mit ihrer Veränderlichkeit und Ordnung verweist auf ihn (De fide orthodoxa I,1 und I,3). Die koptische Kirche bekennt im Glaubensbekenntnis Gott als „Schöpfer des Himmels und der Erde, alles Sichtbaren und Unsichtbaren".`,
    sources: [
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Gegen die Heiden (Contra Gentes)', ref: '35', quote: `Gott hat dem All seine Ordnung gegeben, damit die Menschen ihn, der von Natur unsichtbar ist, wenigstens aus seinen Werken erkennen können – so wie man einen Künstler aus seinen Werken erkennt.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Menschwerdung des Logos (De Incarnatione)', ref: '27–32', quote: `Dass die Menschen in Christus den Tod verachten und die Götzen verlassen, zeigt, dass der Erlöser lebt und wirkt; ein Toter vermag nichts.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Johannes von Damaskus', work: 'Genaue Darlegung des orthodoxen Glaubens (De fide orthodoxa)', ref: 'I,1; I,3', quote: `Die Erkenntnis, dass Gott ist, hat Gott allen von Natur eingepflanzt; zudem verweisen die Veränderlichkeit und die Ordnung der Schöpfung auf einen unveränderlichen Schöpfer.`, status: 'paraphrase' },
      { kind: 'konzil', work: 'Glaubensbekenntnis von Nizäa-Konstantinopel (381)', ref: 'Art. 1', quote: `Wir glauben an den einen Gott, den Vater, den Allmächtigen, der alles geschaffen hat, Himmel und Erde, die sichtbare und die unsichtbare Welt.`, translation: 'gebräuchliche deutsche Fassung', status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Ehrlich festzuhalten ist: Kein Gottesargument wird von allen Fachleuten akzeptiert – wie übrigens fast kein Argument der Philosophie. In der PhilPapers-Umfrage 2020 bezeichnete sich eine deutliche Mehrheit der befragten Berufsphilosophen als atheistisch (rund zwei Drittel), eine Minderheit (knapp ein Fünftel) als theistisch; unter den Spezialisten für Religionsphilosophie ist das Verhältnis dagegen umgekehrt. Sorgfältige atheistische Philosophen wie Graham Oppy und Jeffery Jay Lowder behaupten meist nicht, es gebe „null Belege", sondern dass die Gesamtheit der Belege den Naturalismus stütze.`,
    detail: `Oppy versteht ein „erfolgreiches" Argument als eines, das alle vernünftigen Menschen überzeugen müsste – nach diesem Maßstab scheitern freilich auch alle Argumente *für* den Naturalismus, wie Oppy selbst einräumt. Lowder unterscheidet ausdrücklich zwischen „Evidenz" (etwas, das eine Hypothese wahrscheinlicher macht) und „Beweis" und räumt ein, dass es Indizien für den Theismus gibt, die nach seinem Urteil aber aufgewogen werden. Damit ist die Debatte keine über „Belege ja oder nein", sondern eine **Abwägung der Gesamtevidenz** – genau das, was der kumulative Fall leisten will. Die Umfragezahlen sind gerundet wiedergegeben und sollten vor wörtlicher Verwendung auf philpapers.org geprüft werden.`,
    sources: [
      { kind: 'gegner', author: 'Graham Oppy', work: 'Arguing about Gods', year: '2006', quote: `Kein bekanntes Argument für (oder gegen) die Existenz Gottes ist in dem Sinn erfolgreich, dass es alle vernünftigen Menschen überzeugen müsste.`, status: 'paraphrase' },
      { kind: 'gegner', author: 'Jeffery Jay Lowder', work: 'Beiträge auf The Secular Outpost / Secular Web', quote: `Es gibt Indizien für den Theismus, doch nach Lowders Abwägung werden sie von gewichtigeren Indizien für den Naturalismus übertroffen.`, status: 'paraphrase' },
      { kind: 'sonstiges', author: 'D. Bourget & D. Chalmers', work: 'PhilPapers Survey 2020', year: '2020', quote: `Mehrheit der Befragten atheistisch, Minderheit theistisch; unter Religionsphilosophen überwiegt der Theismus.`, status: 'paraphrase', url: 'https://survey2020.philpeople.org/', note: 'Genaue Prozentzahlen vor Verwendung nachschlagen.' },
    ],
  },
  quickAnswer: `Einen *mathematischen* Zwangsbeweis gibt es für Gott nicht – so wie für fast nichts außerhalb der Mathematik, auch nicht für die Existenz anderer Menschen mit Bewusstsein. Aber es gibt viele **Belege**: dass überhaupt etwas existiert, dass das Universum einen Anfang hat, dass es fein abgestimmt und mathematisch verständlich ist, dass es Bewusstsein, Vernunft und objektive Moral gibt – und die historisch gut bezeugte Auferstehung Jesu. Jeder dieser Punkte ist mit Gott viel eher zu erwarten als ohne ihn; zusammen ergeben sie einen Indizienfall wie vor Gericht. Darf ich dich fragen: Welche Art von Beleg würdest du überhaupt akzeptieren?`,
  keyPoints: [
    `**Beweis ≠ Beleg.** Außerhalb von Logik und Mathematik arbeiten wir mit Belegen, die eine Hypothese wahrscheinlicher machen – in Geschichte, Medizin, Justiz und Naturwissenschaft. Wer für Gott einen Zwangsbeweis fordert, legt einen Maßstab an, den er sonst nirgends anlegt.`,
    `**Kumulativer Fall:** Existenz der Welt (Kontingenz), Anfang des Universums, Feinabstimmung, Verständlichkeit der Natur, Bewusstsein und Vernunft, objektive Moral, die Auferstehung Jesu. Einzelne Indizien mögen bestreitbar sein – ihre Konvergenz ist schwer wegzuerklären.`,
    `**Belege sind öffentlich**, nicht privat: Kosmologie, Logik und Geschichtswissenschaft – jeder kann sie prüfen. Die Bibel selbst lädt zur Prüfung ein (1 Kor 15,6; Lk 1,1–4; 1 Thess 5,21).`,
    `**Auch der Naturalismus braucht Belege.** „Es gibt nur die Natur" ist ebenfalls eine Behauptung über die Wirklichkeit. Der faire Vergleich lautet: Welche Weltsicht erklärt die Gesamtheit der Daten besser?`,
    `**Mangelnde Überzeugungskraft ≠ fehlende Belege.** Dass Fachleute uneins sind, gilt für fast jede philosophische Frage (Willensfreiheit, Bewusstsein, Ethik). Und Belege zwingen nicht – der Wille spielt mit (Röm 1,18; Lk 16,31).`,
    `**Das Christentum ist falsifizierbar:** Wäre Christus nicht auferstanden, wäre der Glaube vergeblich (1 Kor 15,14–17). Das ist das Gegenteil eines immunisierten Glaubens.`,
  ],
  argument: {
    name: 'Kumulatives Argument (Schluss auf die beste Erklärung)',
    summary: 'Mehrere voneinander unabhängige Befunde sind unter dem Theismus deutlich wahrscheinlicher als unter dem Naturalismus.',
    premises: [
      {
        text: 'P1: Es gibt eine Reihe öffentlich zugänglicher Befunde: Es existiert überhaupt etwas Kontingentes; das Universum hat einen Anfang; seine Gesetze und Konstanten sind lebensfreundlich fein abgestimmt; die Natur ist mathematisch verständlich; es gibt bewusste, vernünftige Wesen; es gibt objektive moralische Pflichten; Jesu Grab war leer und seine Jünger erlebten Begegnungen mit ihm.',
        support: `Diese Befunde werden als *Daten* auch von den meisten Atheisten anerkannt (Ausnahmen: manche bestreiten objektive Moral oder deuten den Anfang des Universums anders). Strittig ist ihre Erklärung, nicht ihr Vorhandensein.`,
      },
      {
        text: 'P2: Jeder dieser Befunde ist unter der Annahme, dass Gott existiert, wahrscheinlicher als unter der Annahme, dass nur die Natur existiert.',
        support: `Ein notwendiger, personaler, vernünftiger Schöpfer lässt Kontingenz, Anfang, Ordnung, Geist und Moral *erwarten*; der Naturalismus muss sie als unerklärte Grundtatsachen hinnehmen oder durch zusätzliche, oft spekulative Annahmen (z. B. ein Multiversum) auffangen. Richard Swinburne hat dies im Rahmen der Wahrscheinlichkeitstheorie ausgearbeitet.`,
        sources: [
          { kind: 'fachliteratur', author: 'Richard Swinburne', work: 'The Existence of God', year: '2. Aufl. 2004', quote: `Die einzelnen Argumente sind je für sich „gute C-induktive" Argumente; zusammen machen sie die Existenz Gottes wahrscheinlicher als nicht.`, status: 'paraphrase' },
        ],
      },
      {
        text: 'P3: Die bekannten Gegenbelege (v. a. das Leid und die Verborgenheit Gottes) heben diese positive Evidenz nicht auf.',
        support: `Leid und Verborgenheit sind ernst zu nehmen, aber sie stehen in einem christlichen Rahmen nicht im Widerspruch zu Gottes Existenz (Freiheit, Liebe, die nicht erzwungen werden kann, das Kreuz). Sie sind Fragen *an* Gott, keine Erklärung dafür, dass überhaupt etwas existiert.`,
      },
    ],
    conclusion: 'Also ist es vernünftiger, an Gott zu glauben, als ihn zu leugnen – die Behauptung, es gebe „keine Belege", ist falsch.',
  },
  voices: [
    {
      person: 'paulus',
      role: 'als Apostel vor den Philosophen von Athen',
      text: `Paulus argumentiert vor Stoikern und Epikureern auf dem Areopag nicht mit innerer Gewissheit, sondern mit öffentlich zugänglichen Gründen: Der Gott, der die Welt gemacht hat, bedarf keiner Tempel; alle Menschen stammen von einem ab; Gott ist „nicht ferne von einem jeglichen unter uns" – und er hat einen Beweis gegeben, indem er Jesus von den Toten auferweckte. Im Römerbrief erklärt er, dass Gottes Kraft und Gottheit an den Werken der Schöpfung mit dem Verstand erkennbar sind; das Problem des Menschen sei nicht Mangel an Licht, sondern dass er die Wahrheit „aufhält".`,
      sources: [
        { kind: 'bibel', work: 'Apostelgeschichte', ref: '17,24–31', status: 'paraphrase', quote: 'Areopagrede: Schöpfung, Nähe Gottes, Auferstehung als Beglaubigung.' },
        { kind: 'bibel', work: 'Römer', ref: '1,18–21', status: 'paraphrase', quote: 'Die Erkenntnis Gottes aus der Schöpfung wird nicht aus Mangel an Licht, sondern durch Unterdrückung der Wahrheit verfehlt.' },
      ],
    },
    {
      person: 'athanasius',
      role: 'als Apologet gegen das Heidentum',
      text: `Athanasius stellt drei Wege der Gotteserkenntnis nebeneinander: die vernunftbegabte Seele, die – wenn sie nicht durch die Leidenschaften getrübt ist – Gott wie in einem Spiegel erkennt; die Ordnung und Harmonie des Kosmos, die auf einen einzigen lenkenden Logos verweist; und schließlich die Menschwerdung, in der sich der unsichtbare Gott sichtbar gemacht hat. Für ihn ist die Gotteserkenntnis also nicht Mangel an Belegen, sondern eine Frage der Reinheit des Blicks: Die Belege sind da, das Auge muss geheilt werden.`,
      sources: [
        { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Gegen die Heiden (Contra Gentes)', ref: '30–39', status: 'paraphrase', quote: 'Erkenntnis Gottes aus der Seele (30–34) und aus der Ordnung der Schöpfung (35–39).' },
      ],
    },
    {
      person: 'swinburne',
      role: 'als Religionsphilosoph der Wahrscheinlichkeit (Oxford)',
      text: `Swinburne hat die Gottesargumente konsequent als Wahrscheinlichkeitsargumente formuliert: Nicht jedes einzelne muss zwingend sein; es genügt, dass jedes die Wahrscheinlichkeit der Gotteshypothese erhöht. Weil Gott eine einfache Hypothese ist – eine Person mit unbegrenzter Macht, Erkenntnis und Freiheit –, und weil sie viele sonst unerklärte Tatsachen erklärt (dass es ein Universum gibt, dass es gesetzmäßig ist, dass es bewusste Wesen gibt), ergibt sich ein kumulativer Fall. Das Argument aus der religiösen Erfahrung gibt dann, so Swinburne, den Ausschlag.`,
      sources: [
        { kind: 'fachliteratur', author: 'Richard Swinburne', work: 'The Existence of God', year: '2. Aufl. 2004', ref: 'bes. Kap. 13–14', status: 'paraphrase', quote: 'Der kumulative Fall macht den Theismus wahrscheinlicher als nicht; die religiöse Erfahrung gibt den Ausschlag.' },
        { kind: 'fachliteratur', author: 'Richard Swinburne', work: 'Is There a God?', year: '1996', status: 'paraphrase', quote: 'Allgemeinverständliche Fassung des kumulativen Arguments.' },
      ],
    },
    {
      person: 'craig',
      role: 'als Debattierer gegen führende Atheisten',
      text: `Craig betont in seinen Debatten immer wieder, dass ein gutes Argument keine hundertprozentige Gewissheit braucht: Es genügt, dass es logisch gültig ist und seine Prämissen plausibler sind als ihre Verneinungen. Daher verlangt er vom Gegenüber, nicht nur „Ich bin nicht überzeugt" zu sagen, sondern konkret anzugeben, welche Prämisse falsch ist und warum. In Debatten mit Hitchens, Krauss, Carroll und anderen zeigte sich oft, dass „keine Belege" in Wahrheit hieß: „Ich akzeptiere keine Art von Beleg, die zu Gott führen könnte."`,
      sources: [
        { kind: 'fachliteratur', author: 'William Lane Craig', work: 'Reasonable Faith', year: '3. Aufl. 2008', ref: 'Kap. 1–2', status: 'paraphrase', quote: 'Ein gutes Argument ist gültig, hat wahre Prämissen, die plausibler sind als ihre Verneinungen.' },
      ],
    },
    {
      person: 'cs-lewis',
      role: 'als ehemaliger Atheist',
      text: `Lewis beschreibt, wie er als Atheist argumentierte, das Universum sei grausam und sinnlos – und dann bemerkte, dass schon der Begriff „ungerecht" einen Maßstab voraussetzt, der in einer bloß sinnlosen Welt nicht vorkäme. Sein bekanntes Bild: Er glaube an das Christentum, wie er glaube, dass die Sonne aufgegangen ist – nicht nur, weil er sie sieht, sondern weil er durch sie alles andere sieht. Der Glaube ist für ihn nicht ein isolierter Beweis, sondern das Licht, in dem Vernunft, Moral und Sehnsucht verständlich werden.`,
      sources: [
        { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Is Theology Poetry? (Vortrag, Oxford Socratic Club 1944)', quote: `I believe in Christianity as I believe that the sun has risen: not only because I see it, but because by it I see everything else.`, status: 'verbatim' },
        { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Pardon, ich bin Christ (Mere Christianity)', ref: 'Buch II, Kap. 1', year: '1952', status: 'paraphrase', quote: 'Der Einwand, die Welt sei ungerecht, setzt einen objektiven Maßstab von Gerechtigkeit voraus.' },
      ],
    },
  ],
  dialog: [
    {
      id: 'zeig-mir-evidenz',
      objection: `„Ich will keine philosophischen Argumente hören, ich will Evidenz. Zeig mir eine einzige Evidenz für Gott."`,
      objectionBy: 'Matt Dillahunty',
      answer: `Argumente sind kein Gegensatz zu Evidenz – sie *ordnen* Evidenz. Dass das Universum einen Anfang hat, ist ein empirischer Befund; dass die Naturkonstanten lebensfreundlich fein abgestimmt sind, ebenfalls; dass das Grab Jesu leer war und Hunderte ihm begegnet sein wollen, ist ein historischer Befund. Das Argument fragt nur: Welche Erklärung passt am besten zu diesen Daten? Wer „keine Argumente, nur Evidenz" sagt, will in Wahrheit die Schlussfolgerung verbieten, nicht die Daten.`,
      detail: `Auch in der Naturwissenschaft spricht keine Messung für sich: Die Rotverschiebung der Galaxien wird erst durch ein Argument zum Beleg für die Expansion des Universums. Evidenz ist immer *Evidenz für eine Hypothese*, und ob etwas Evidenz ist, entscheidet sich daran, ob es unter dieser Hypothese wahrscheinlicher ist als unter der Alternative. Genau so funktioniert der kumulative Fall.`,
      questionsBack: [
        `Was würdest du als Evidenz für Gott akzeptieren – und ist das ein Maßstab, den du auch an deine eigene Weltanschauung anlegst?`,
        `Ist der Anfang des Universums für dich ein Befund, der nach einer Erklärung verlangt, oder nicht?`,
      ],
      followUps: [
        {
          id: 'nur-empirische-belege',
          objection: `„Philosophie ist Wortspielerei. Nur empirische, wissenschaftlich überprüfbare Belege zählen."`,
          objectionBy: 'Lawrence Krauss',
          answer: `Der Satz „Nur empirisch überprüfbare Belege zählen" ist selbst nicht empirisch überprüfbar – er widerlegt sich also nach seinem eigenen Maßstab. Außerdem stützen sich die Gottesargumente durchaus auf empirische Prämissen (Kosmologie, Feinabstimmung, Geschichte). Und auch die Wissenschaft setzt Logik, Mathematik und die Verlässlichkeit unserer Vernunft voraus, die sie nicht selbst empirisch beweisen kann.`,
          detail: `Diese Position heißt Szientismus. Sie war in Gestalt des logischen Positivismus im 20. Jahrhundert philosophisch prominent und ist an genau diesem Problem gescheitert – das Verifikationsprinzip ist nicht verifizierbar. Siehe ausführlich den Claim „Nur die Naturwissenschaft liefert echtes Wissen".`,
          questionsBack: [`Welches Experiment hat bewiesen, dass nur Experimente Wissen liefern?`],
          followUps: [
            {
              id: 'wissenschaft-bewaehrt-theologie-nicht',
              objection: `„Die Wissenschaft hat uns Medizin, Raumfahrt und Computer gegeben. Welche einzige Frage hat die Theologie je beantwortet?"`,
              objectionBy: 'Richard Dawkins',
              answer: `Das ist ein Kategorienvergleich: Die Frage, wie Penicillin wirkt, ist eine andere als die Frage, warum es überhaupt Naturgesetze gibt. Die Wissenschaft setzt voraus, dass die Natur geordnet, verständlich und mathematisch beschreibbar ist – genau das, was der christliche Schöpfungsglaube erwarten lässt und was historisch die Begründer der modernen Naturwissenschaft (Kepler, Boyle, Newton, Faraday, Maxwell) motivierte. Theologie und Philosophie beantworten die Fragen, auf denen die Wissenschaft aufbaut.`,
              questionsBack: [`Warum ist die Natur überhaupt so geordnet, dass Mathematik sie beschreibt – erwartest du das in einem ungelenkten Universum?`],
              followUps: [
                {
                  id: 'gruender-nur-zufaellig-christen',
                  objection: `„Die frühen Naturforscher waren nur Christen, weil damals jeder Christ war. Das beweist gar nichts."`,
                  objectionBy: 'Jerry Coyne',
                  answer: `Zugestanden: Dass sie Christen waren, beweist allein noch nicht, dass das Christentum wahr ist. Aber der Punkt ist ein logischer, kein soziologischer: Viele von ihnen begründeten ihre Forschung *ausdrücklich* mit dem Glauben an einen vernünftigen Gesetzgeber. Und die Frage bleibt offen, die du selbst beantworten musst: Warum ist das Universum rational verständlich? Der Theismus hat eine Antwort, der Naturalismus muss es als glücklichen Zufall hinnehmen.`,
                  detail: `Albert Einstein nannte die Verständlichkeit der Welt ein „ewiges Geheimnis", Eugene Wigner sprach von der „unvernünftigen Wirksamkeit der Mathematik". Siehe den Claim zur Effektivität der Mathematik.`,
                },
              ],
            },
          ],
        },
        {
          id: 'gott-waere-offensichtlich',
          objection: `„Wenn ein allmächtiger Gott eine Beziehung zu mir wollte, wäre seine Existenz so offensichtlich wie die von Australien. Dass wir darüber streiten, ist schon der Beweis, dass es ihn nicht gibt."`,
          objectionBy: 'J. L. Schellenberg (Verborgenheitsargument)',
          answer: `Das ist kein Argument aus *fehlender* Evidenz mehr, sondern das Argument aus der Verborgenheit Gottes – es setzt voraus, dass Gott, wenn es ihn gibt, eine *bestimmte Art* von Evidenz liefern müsste. Das Christentum behauptet aber, dass Gott Liebe will, nicht bloß Zustimmung: Auch die Dämonen „glauben und zittern" (Jak 2,19), ohne zu lieben. Gott hat sich so gezeigt, dass Suchende ihn finden, Unwillige ihn aber nicht gezwungen werden (Jer 29,13).`,
          detail: `Ausführlich im Claim „Wenn Gott existiert, warum zeigt er sich nicht eindeutig?" (Schellenberg). Wichtig: Die bloße Tatsache, dass Menschen streiten, beweist wenig – Menschen streiten auch über die Mondlandung, die Evolution und die Existenz der Außenwelt.`,
          followUps: [
            {
              id: 'gott-koennte-jedem-erscheinen',
              objection: `„Ein allmächtiger Gott könnte doch einfach jedem Menschen erscheinen. Dann würde ich glauben."`,
              objectionBy: 'Alex O\'Connor',
              answer: `Jesus selbst antwortet darauf im Gleichnis vom reichen Mann: „Hören sie Mose und die Propheten nicht, so werden sie auch nicht glauben, ob jemand von den Toten aufstünde" (Lk 16,31). Die Geschichte bestätigt das: Viele sahen Jesu Wunder und lehnten ihn trotzdem ab. Eine Erscheinung erzeugt Kenntnis, aber kein Vertrauen und keine Liebe – und genau um diese geht es Gott. Zudem hat sich Gott tatsächlich gezeigt: in Christus, öffentlich, vor Zeugen, in der Geschichte.`,
              sources: [
                { kind: 'bibel', work: 'Lukas', ref: '16,31', quote: `Er sprach zu ihm: Hören sie Mose und die Propheten nicht, so werden sie auch nicht glauben, ob jemand von den Toten aufstünde.`, translation: 'Luther 1912', status: 'verbatim' },
              ],
              questionsBack: [`Wenn dir heute Nacht etwas erschiene – würdest du es nicht morgen früh als Halluzination deuten?`],
            },
          ],
        },
      ],
    },
    {
      id: 'experten-ueberzeugt-es-nicht',
      objection: `„Die große Mehrheit der Berufsphilosophen ist atheistisch. Wenn die Argumente gut wären, würden die Experten sie akzeptieren."`,
      objectionBy: 'Graham Oppy (sinngemäß, mit Verweis auf den PhilPapers Survey)',
      answer: `Mehrheiten sind kein Argument – sonst wäre jede philosophische Frage durch Abstimmung entschieden. Interessant ist aber: Unter den Philosophen, die sich beruflich am intensivsten mit den Gottesargumenten beschäftigen – den Religionsphilosophen –, ist die Mehrheit theistisch. In fast keiner großen philosophischen Frage (Willensfreiheit, Bewusstsein, Moral) gibt es Einigkeit. Uneinigkeit zeigt, dass die Frage schwer ist, nicht dass es keine Belege gibt.`,
      questionsBack: [`Welches konkrete Argument hältst du für gescheitert – und an welcher Prämisse?`],
      followUps: [
        {
          id: 'selektionseffekt',
          objection: `„Religionsphilosophen sind theistisch, weil vor allem Gläubige dieses Fach wählen. Das ist ein Selektionseffekt, kein Qualitätsurteil."`,
          objectionBy: 'Häufiger Einwand in der Diskussion um den PhilPapers Survey',
          answer: `Zum Teil sicher – das gestehe ich zu. Aber Selektionseffekte gibt es in beide Richtungen: Wer die Gottesfrage für erledigt hält, beschäftigt sich nicht jahrzehntelang mit ihr. Und es gibt bemerkenswerte Fälle, in denen das Studium der Argumente zur Änderung der Überzeugung führte – C. S. Lewis, Antony Flew, viele andere. Am Ende müssen die Argumente nach ihrer Qualität beurteilt werden, nicht nach der Biografie ihrer Vertreter.`,
          followUps: [
            {
              id: 'flew-senil',
              objection: `„Flew war am Ende alt und verwirrt; sein Buch hat Roy Varghese geschrieben."`,
              objectionBy: 'Mark Oppenheimer (New York Times Magazine 2007, sinngemäß)',
              answer: `Fairerweise: Die Frage, wie viel des Buches „There Is a God" von Flew selbst stammt, ist berechtigt, und man sollte sich nicht allein darauf stützen. Aber Flew hatte seine Wende schon 2004 in einem ausführlichen Interview mit Gary Habermas in der Fachzeitschrift Philosophia Christi begründet – mit Verweis auf die Feinabstimmung und den Ursprung des Lebens. Vor allem aber: Ob Flew recht hatte, hängt nicht von seinem Alter ab, sondern von den Argumenten. Das wäre sonst derselbe Fehlschluss, den du mir gerade vorgeworfen hast.`,
              sources: [
                { kind: 'fachliteratur', author: 'Antony Flew & Gary Habermas', work: '„My Pilgrimage from Atheism to Theism", Philosophia Christi 6/2', year: '2004', status: 'paraphrase', quote: 'Flew begründet seine Hinwendung zum Theismus u. a. mit der Feinabstimmung und dem Ursprung des Lebens und beruft sich auf das sokratische Prinzip, dem Argument zu folgen, wohin es führt.' },
              ],
            },
          ],
        },
        {
          id: 'paritaet-oppy',
          objection: `„Zu jedem theistischen Argument gibt es ein naturalistisches Gegenstück, das ohne Gott auskommt und deshalb einfacher ist. Der Naturalismus gewinnt immer durch Sparsamkeit."`,
          objectionBy: 'Graham Oppy',
          answer: `Diese Parität muss Fall für Fall gezeigt werden, und gerade da wird es teuer: Der Naturalismus muss die Existenz eines kontingenten Universums, seinen Anfang oder seinen Anfangszustand, die Feinabstimmung, die Verständlichkeit der Natur, das Bewusstsein und die Moral jeweils als unerklärte Grundtatsachen hinnehmen. Der Theismus erklärt all das mit *einer* Annahme. Sparsamkeit zählt die unerklärten Tatsachen, nicht nur die Zahl der Entitäten.`,
          followUps: [
            {
              id: 'gott-auch-brute-fact',
              objection: `„Auch du hast eine unerklärte Grundtatsache: Gott. Warum ist dein Endpunkt besser als meiner?"`,
              objectionBy: 'Graham Oppy',
              answer: `Weil Gott als *notwendiges* Wesen verstanden wird, das nicht anders sein könnte, während das Universum alle Merkmale des Kontingenten trägt: Es hat einen Anfang (oder zumindest einen Anfangszustand), es hätte andere Konstanten haben können, es besteht aus veränderlichen Teilen. Ein notwendiger Erklärungsgrund ist kein willkürlicher „Brute Fact", sondern das, was jede Erklärungskette am Ende braucht.`,
              followUps: [
                {
                  id: 'universum-notwendig',
                  objection: `„Dann ist eben der Anfangszustand des Universums notwendig. Das ist genauso legitim wie dein notwendiger Gott – und sparsamer."`,
                  objectionBy: 'Graham Oppy (Arguing about Gods, Kap. 3)',
                  answer: `Dann müsstest du erklären, warum ein physikalischer Zustand mit ganz bestimmten, präzise eingestellten Werten nicht anders hätte sein *können* – während die Physik genau diese Werte als frei variierbare Parameter behandelt. Ein notwendiger Zustand, der sich zugleich verändert und in etwas anderes übergeht, ist zudem schwer verständlich. Ein notwendiges Wesen, das frei wählt, erklärt dagegen, warum ein kontingentes Universum mit genau diesen Eigenschaften existiert.`,
                  detail: `Hier mündet die Debatte in das Kontingenzargument (siehe „Das Kontingenzargument ist ein Trugschluss"). Oppys Position ist philosophisch ernst zu nehmen; sie zeigt aber, dass auch der Naturalismus eine kühne metaphysische Behauptung braucht – nicht bloß „fehlenden Glauben".`,
                  questionsBack: [`Kann sich ein notwendig existierender Zustand verändern, ohne dass etwas Kontingentes ins Spiel kommt?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'evidenz-spricht-fuer-naturalismus',
      objection: `„Es gibt nicht nur keine Belege für Gott, es gibt Belege dagegen: das Leid, die Verborgenheit Gottes, die völlige Abhängigkeit des Geistes vom Gehirn. Alles zusammen spricht für den Naturalismus."`,
      objectionBy: 'Jeffery Jay Lowder',
      answer: `Gut – dann sind wir uns einig, dass es um eine *Abwägung* der Gesamtevidenz geht, nicht um „Belege ja oder nein". Dann müssen aber auch die Befunde auf die Waage: dass überhaupt etwas existiert, der Anfang, die Feinabstimmung, das Bewusstsein, die Moral, die Auferstehung. Das Leid ist eine ernste Frage, die ich nicht kleinrede. Aber es erklärt nicht, warum es überhaupt ein Universum mit bewussten, moralischen Wesen gibt, die über Leid klagen können.`,
      questionsBack: [`Wenn du eine Abwägung machst: Welches Gewicht gibst du dem Anfang des Universums und der Feinabstimmung?`],
      followUps: [
        {
          id: 'schmerz-lust-verteilung',
          objection: `„Schmerz und Lust sind genau so verteilt, wie sie für das biologische Überleben nützlich sind. Das erwartet man unter dem Naturalismus, nicht unter einem gütigen Gott." (Argument nach Paul Draper)`,
          objectionBy: 'Jeffery Jay Lowder / Paul Draper',
          answer: `Wenn Gott eine Welt mit verkörperten, freien Geschöpfen schaffen wollte, die in einer verlässlichen, gesetzmäßigen Natur leben, dann ist eine biologisch sinnvolle Schmerzempfindung genau das, was man erwarten würde: Schmerz warnt und schützt. Ein Wesen ohne Schmerzempfinden ist lebensgefährlich bedroht. Der Befund ist also mit beiden Weltsichten vereinbar und entscheidet die Frage nicht.`,
          followUps: [
            {
              id: 'welt-ohne-leid',
              objection: `„Aber ein allmächtiger Gott hätte eine Welt ohne all dieses Leid schaffen können."`,
              objectionBy: 'Alex O\'Connor',
              answer: `Damit verlassen wir die Frage nach Belegen und kommen zur Theodizee – das ist eine eigene, große Debatte, die ich gern führe. Kurz: Eine Welt mit echter Freiheit, verlässlichen Naturgesetzen und der Möglichkeit von Liebe, Mut und Mitgefühl kann nicht beliebig leidfrei sein. Und der christliche Gott hat das Leid nicht von außen betrachtet, sondern am Kreuz selbst getragen.`,
              detail: `Siehe „Ein allmächtiger, allgütiger Gott und das Übel sind logisch unvereinbar" und „Das Ausmaß sinnlosen Leids macht Gott unwahrscheinlich". Pastoral wichtig: Wenn das Gegenüber eigenes Leid anspricht, zuerst zuhören.`,
            },
          ],
        },
        {
          id: 'wunderberichte-ueberall',
          objection: `„Die Auferstehung ist kein Beleg. Wunderberichte gibt es in jeder Religion – warum soll ausgerechnet deiner stimmen?"`,
          objectionBy: 'Bart Ehrman / Richard Carrier',
          answer: `Weil Berichte nicht gleich Berichte sind. Für die Auferstehung haben wir Quellen innerhalb weniger Jahre (das Bekenntnis in 1 Kor 15,3–7 wird von fast allen Forschern auf die ersten Jahre nach der Kreuzigung datiert), mehrere unabhängige Zeugen, Gegner, die zu Anhängern wurden (Paulus, Jakobus), und Zeugen, die für ihre Aussage litten. Die meisten Wunderberichte anderer Religionen sind Jahrhunderte später aufgeschrieben. Jeder Bericht verdient eine Einzelprüfung – genau das fordere ich.`,
          followUps: [
            {
              id: 'ecree-in-dialog',
              objection: `„Außergewöhnliche Behauptungen erfordern außergewöhnliche Belege. Eine Auferstehung ist so außergewöhnlich, dass kein historischer Beleg reicht."`,
              objectionBy: 'Carl Sagan (Schlagwort), Matt Dillahunty',
              answer: `„Außergewöhnlich" ist hier zweideutig. Dass ein Mensch *natürlicherweise* von den Toten aufsteht, ist extrem unwahrscheinlich – das behauptet aber niemand. Die Behauptung lautet: Gott hat Jesus auferweckt. Wie wahrscheinlich das ist, hängt davon ab, ob es Gott gibt – und dafür sprechen die anderen Belege. Und auch sehr unwahrscheinliche Ereignisse werden durch gewöhnliche, gute Zeugnisse belegt: die Lottozahlen von gestern etwa.`,
              detail: `Ausführlich im Claim „Außergewöhnliche Behauptungen erfordern außergewöhnliche Belege".`,
              followUps: [
                {
                  id: 'historiker-keine-wunder',
                  objection: `„Historiker können per Definition kein Wunder feststellen. Die wahrscheinlichste Erklärung ist immer eine natürliche."`,
                  objectionBy: 'Bart Ehrman',
                  answer: `Das ist eine methodische Vorentscheidung, kein Ergebnis der Forschung. Historiker können feststellen, dass das Grab leer war, dass Menschen Begegnungen mit Jesus erlebten und dass die Jünger sich radikal veränderten. Ob die beste Erklärung natürlich oder übernatürlich ist, hängt davon ab, ob man Gott von vornherein ausschließt. Wer das tut, setzt den Atheismus voraus, statt ihn zu begründen.`,
                  detail: `Siehe „Historiker können grundsätzlich kein Wunder feststellen" und „Die Jünger hatten Halluzinationen".`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'nicht-falsifizierbar',
      objection: `„Was würde dich überhaupt davon überzeugen, dass es Gott nicht gibt? Wenn nichts, dann ist deine Gottesbehauptung nicht falsifizierbar – und damit leer."`,
      objectionBy: 'Antony Flew (1950, „Theology and Falsification"), heute oft von Matt Dillahunty',
      answer: `Das Christentum ist erstaunlich falsifizierbar: Paulus schreibt selbst, wenn Christus nicht auferstanden ist, sei unser Glaube vergeblich (1 Kor 15,14–17). Das ist ein historischer Prüfstein. Zudem: Nicht jede sinnvolle Aussage ist empirisch falsifizierbar – „Es gibt andere Menschen mit Bewusstsein" oder „Die Vergangenheit ist real" auch nicht, und das Falsifizierbarkeitskriterium selbst ist es ebenfalls nicht. Ironischerweise hat Flew, der dieses Argument 1950 berühmt machte, später selbst den Gottesglauben angenommen.`,
      sources: [
        { kind: 'gegner', author: 'Antony Flew', work: '„Theology and Falsification", in: Flew & MacIntyre (Hg.), New Essays in Philosophical Theology', year: '1950/1955', status: 'paraphrase', quote: 'Das Gleichnis vom unsichtbaren Gärtner: Eine Behauptung, die mit jedem denkbaren Befund vereinbar ist, stirbt „den Tod der tausend Einschränkungen".' },
        { kind: 'bibel', work: '1. Korinther', ref: '15,17', quote: `Ist Christus aber nicht auferstanden, so ist euer Glaube eitel, so seid ihr noch in euren Sünden.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'was-wuerde-dich-ueberzeugen',
          objection: `„Dann sag konkret: Was würde dich vom Glauben abbringen?"`,
          objectionBy: 'Matt Dillahunty',
          answer: `Ehrlich: Wenn sich zeigen ließe, dass Jesus nicht gelebt hat oder dass er nicht auferstanden ist – etwa durch den Fund seiner Gebeine –, wäre das Christentum widerlegt. Auf der philosophischen Ebene: Wenn gezeigt würde, dass das Universum notwendig existiert, keinen Anfang hat, Bewusstsein vollständig physikalisch erklärbar ist und Moral bloße Konvention ist, verlören die Argumente ihre Kraft. Mein Glaube ruht zwar auf mehr als Argumenten – auf Erfahrung, Gebet und der Kirche –, aber er ist nicht gegen Gründe immun.`,
          followUps: [
            {
              id: 'praktisch-unwiderlegbar',
              objection: `„Das kann man praktisch nie zeigen – damit hast du dich doch wieder immunisiert."`,
              objectionBy: 'Matt Dillahunty',
              answer: `Dann gilt dasselbe für deinen Naturalismus: Was würde *dich* überzeugen? Jede Feinabstimmung wird mit einem Multiversum beantwortet, jeder Anfang mit einem unbekannten Vorher, jedes Bewusstsein mit künftiger Neurowissenschaft. Dass eine Weltanschauung schwer zu widerlegen ist, ist kein Makel – es betrifft alle umfassenden Weltsichten. Die Frage ist nicht, ob man sie *leicht* widerlegen kann, sondern welche die Daten besser erklärt.`,
              questionsBack: [
                `Welcher Befund würde dich dazu bringen, den Naturalismus aufzugeben?`,
                `Ist die Antwort „Es wird sich schon eine natürliche Erklärung finden" falsifizierbar?`,
              ],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Welche Art von Beleg würdest du für Gott akzeptieren – und hast du schon einmal untersucht, ob es ihn gibt?`,
    `Ist „Es gibt nur die Natur" für dich eine Behauptung, die ebenfalls begründet werden muss?`,
    `Wie erklärst du, dass überhaupt etwas existiert, dass es einen Anfang hat und dass es vernünftig verstehbar ist?`,
    `Welche Prämisse des Kalam- oder des Kontingenzarguments hältst du für falsch – und warum?`,
    `Wenn Jesus wirklich auferstanden wäre – würde das für dich etwas ändern?`,
  ],
  avoid: [
    `„Ich kann Gott beweisen wie 2 + 2 = 4." – Das überzieht den Anspruch und ist angreifbar. Sprich von guten Gründen und der besten Erklärung.`,
    `„Die Bibel ist Gottes Wort, weil sie es selbst sagt." – Das ist ein Zirkelschluss gegenüber jemandem, der die Bibel nicht anerkennt. Beginne mit gemeinsamen Daten.`,
    `„Du glaubst doch auch an Evolution – das ist auch nur Glaube." – Lenkt ab und klingt nach Relativismus. Bleib bei der Frage nach Gott.`,
    `„Darwin hat auf dem Sterbebett widerrufen" oder ähnliche Legenden – nachweislich falsch (die „Lady Hope"-Geschichte wurde von Darwins Familie bestritten).`,
  ],
  concessions: [
    `Es gibt keinen Gottesbeweis, der jeden vernünftigen Menschen zwingend überzeugt – wie für fast keine philosophische These.`,
    `Unter Berufsphilosophen insgesamt sind Atheisten in der Mehrheit; das ist ein ernstzunehmender soziologischer Befund, wenn auch kein Argument.`,
    `Das Leid und die Verborgenheit Gottes sind echte Herausforderungen, die der Glaube nicht wegwischen sollte.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Richard Swinburne', work: 'Gibt es einen Gott? (Is There a God?)', year: '1996', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'William Lane Craig & J. P. Moreland (Hg.)', work: 'The Blackwell Companion to Natural Theology', year: '2009', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Edward Feser', work: 'Five Proofs of the Existence of God', year: '2017', status: 'paraphrase' },
    { kind: 'gegner', author: 'Graham Oppy', work: 'Arguing about Gods', year: '2006', status: 'paraphrase', note: 'Die stärkste akademische Gegenposition.' },
    { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Pardon, ich bin Christ (Mere Christianity)', year: '1952', status: 'paraphrase' },
  ],
  difficulty: 1,
  tags: ['Atheismus', 'Evidenz', 'kumulativer Fall', 'Beweislast', 'Falsifizierbarkeit'],
  related: [
    'atheismus/beweislast-mangel-an-glauben',
    'atheismus/aussergewoehnliche-belege',
    'gottesbeweise/kalam-widerlegt',
    'gottesbeweise/kontingenz-trugschluss',
    'gottesbeweise/goettliche-verborgenheit',
    'feinabstimmung/multiversum',
    'auferstehung/halluzinationen',
    'auferstehung/wunder-historisch-unmoeglich',
    'erkenntnistheorie/nur-wissenschaft-liefert-wissen',
    'theodizee/evidentielles-problem',
    'mathematik/effektivitaet-der-mathematik-zufall',
  ],
};

export default claim;
