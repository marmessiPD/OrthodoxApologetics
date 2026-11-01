import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'tod-ist-das-ende',
  title: `„Der Tod ist das Ende – und das ist in Ordnung."`,
  proponents: [
    {
      name: 'Epikur',
      role: 'Griechischer Philosoph (341–270 v. Chr.)',
      work: 'Brief an Menoikeus (überliefert bei Diogenes Laertius X,122–135)',
    },
    {
      name: 'Lukrez (Titus Lucretius Carus)',
      role: 'Römischer Dichter und Epikureer (1. Jh. v. Chr.)',
      work: 'De rerum natura (Über die Natur der Dinge), Buch III',
    },
    {
      name: 'Sean Carroll',
      role: 'Theoretischer Physiker',
      work: '„Physics and the Immortality of the Soul", Scientific American (Blog, 2011); The Big Picture (2016)',
    },
    {
      name: 'Bernard Williams',
      role: 'Moralphilosoph, Cambridge/Oxford/Berkeley (1929–2003)',
      work: '„The Makropulos Case: Reflections on the Tedium of Immortality", in: Problems of the Self (1973)',
    },
    {
      name: 'Shelly Kagan',
      role: 'Philosoph, Yale University',
      work: 'Death (2012)',
    },
  ],
  steelman: `Alles, was wir über den Geist wissen, spricht dafür, dass er vom Gehirn abhängt: Narkose schaltet das Bewusstsein ab, Alzheimer zerstört die Persönlichkeit, ein Schlaganfall raubt die Sprache. Wenn das Gehirn stirbt, endet die Person. Sean Carroll argumentiert, dass die gut verstandene Physik des Alltags keinen Mechanismus kennt, durch den die Information unseres Gehirns nach dem Tod fortbestehen könnte. Und das ist kein Grund zur Angst. Epikur hat es vor über 2000 Jahren gezeigt: Solange wir sind, ist der Tod nicht da; wenn der Tod da ist, sind wir nicht mehr. Lukrez fügte hinzu: Die Ewigkeit vor unserer Geburt hat uns nicht gequält – warum die danach? Bernard Williams zeigte sogar, dass ewiges Leben unerträglich wäre: Irgendwann wäre alles erlebt, und endlose Langeweile bliebe. Gerade die Endlichkeit macht das Leben kostbar und dringlich. Jenseitsglaube ist dagegen aus Todesangst geboren und lenkt vom einzigen Leben ab, das wir haben.`,
  biblical: {
    summary: `Die Bibel nennt den Tod nicht „in Ordnung", sondern den „letzten Feind" (1 Kor 15,26). „Gott hat den Tod nicht gemacht" (Weish 1,13); er kam durch die Sünde in die Welt (Röm 5,12). Jesus weint am Grab des Lazarus (Joh 11,35) – er nimmt den Schmerz des Todes ernst, bevor er ihn besiegt. Die christliche Hoffnung gründet nicht auf einer philosophischen Seelenlehre, sondern auf einem Ereignis: der leiblichen Auferstehung Jesu. Paulus macht den Glauben ausdrücklich davon abhängig: „Ist aber Christus nicht auferstanden, so ist … euer Glaube vergeblich" (1 Kor 15,14) – und er gibt zu, dass dann Epikurs Folgerung gälte: „Lasset uns essen und trinken; denn morgen sind wir tot!" (1 Kor 15,32).`,
    detail: `- **Furcht vor dem Tod als Knechtschaft:** Christus wurde Mensch, „auf daß er durch den Tod die Macht nähme dem, der des Todes Gewalt hatte … und erlösete die, so durch Furcht des Todes im ganzen Leben Knechte sein mußten" (Hebr 2,14–15). Die Bibel teilt Epikurs Ziel – Befreiung von Todesfurcht –, aber auf einem anderen Weg: nicht durch Verharmlosung, sondern durch Sieg.
- **Paulus' Ehrlichkeit:** 1 Kor 15,12–19 ist ein „Falsifizierbarkeits-Text": Ohne Auferstehung wären die Christen „die elendesten unter allen Menschen" (V. 19).
- **Auferstehung, nicht nur Unsterblichkeit:** Das Ziel ist nicht eine körperlose Seele, sondern die Auferstehung des Leibes (1 Kor 15,42–44) und eine neue Schöpfung (Offb 21,4).
- **Der Tod bleibt Schmerz:** Christen trauern – aber „nicht wie die andern, die keine Hoffnung haben" (1 Thess 4,13).`,
    sources: [
      { kind: 'bibel', work: '1. Korinther', ref: '15,26', quote: `Der letzte Feind, der aufgehoben wird, ist der Tod.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Weisheit Salomos', ref: '1,13', quote: `Denn Gott hat den Tod nicht gemacht und hat nicht Lust am Verderben der Lebendigen.`, translation: 'Luther 1912', status: 'verbatim', note: 'Deuterokanonisch; in der koptischen Kirche kanonisch.' },
      { kind: 'bibel', work: 'Hebräer', ref: '2,14–15', quote: `Nachdem nun die Kinder Fleisch und Blut haben, ist er dessengleichen teilhaftig geworden, auf daß er durch den Tod die Macht nähme dem, der des Todes Gewalt hatte, das ist dem Teufel, und erlösete die, so durch Furcht des Todes im ganzen Leben Knechte sein mußten.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Korinther', ref: '15,14.19.32', quote: `Ist aber Christus nicht auferstanden, so ist unsre Predigt vergeblich, so ist auch euer Glaube vergeblich. … Hoffen wir allein in diesem Leben auf Christum, so sind wir die elendesten unter allen Menschen. … Lasset uns essen und trinken; denn morgen sind wir tot!`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '11,25.35', quote: `Ich bin die Auferstehung und das Leben. Wer an mich glaubt, der wird leben, ob er gleich stürbe … Und Jesus gingen die Augen über.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Korinther', ref: '15,55', quote: `Tod, wo ist dein Stachel? Hölle, wo ist dein Sieg?`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptische Kirche nennt sich mit Recht **Kirche der Märtyrer**. Ihr Kalender zählt die Jahre „nach den Märtyrern" (*Anno Martyrum*), beginnend mit dem Regierungsantritt Kaiser Diokletians im Jahr 284, unter dem unzählige ägyptische Christen starben. Athanasius sah im furchtlosen Sterben der Christen den sichtbarsten Beweis, dass Christus den Tod besiegt hat: Männer, Frauen und Kinder verspotten den Tod wie einen besiegten Tyrannen (De Incarnatione 27–29). Dieses Zeugnis setzt sich bis heute fort – etwa in den 21 Märtyrern von Libyen (2015). In jeder Osterfeier singt die Kirche: Christus ist auferstanden von den Toten, mit seinem Tod hat er den Tod zertreten.`,
    detail: `- **Athanasius, De Incarnatione 27:** Der Tod gleicht einem Tyrannen, der an Händen und Füßen gebunden ist; die in Christus sind, gehen an ihm vorüber, treten auf ihn und spotten: „Tod, wo ist dein Sieg?" Selbst Frauen, die er früher getäuscht hatte, verlachen ihn nun als tot und gelähmt.
- **De Incarnatione 28–29:** Junge Männer und Mädchen üben sich darin, den Tod zu verachten – gegen die natürliche Todesfurcht des Menschen. Für Athanasius ist das ein empirisches Argument: Etwas Neues ist in die Welt gekommen.
- **Die 21 Märtyrer von Libyen:** Im Februar 2015 wurden 20 koptische Gastarbeiter aus Ägypten und ein Mann aus Ghana (Matthew Ayariga) vom „Islamischen Staat" an einem Strand bei Sirte enthauptet. Papst Tawadros II. nahm sie wenige Tage später ins Synaxarium auf; ihr Gedenktag fällt auf den 8. Amschir (15. Februar). 2023 nahm auch die römisch-katholische Kirche sie in das Martyrologium Romanum auf. Berichten zufolge riefen einige von ihnen im Sterben „Ya Rabbi Yasou" (O mein Herr Jesus).
- **Die Agpeya** beginnt jeden Tag mit dem Gebet der ersten Stunde, das an die Auferstehung erinnert; das Mitternachtsgebet ruft zur Wachsamkeit auf das Kommen des Bräutigams (Mt 25,1–13).`,
    sources: [
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'De Incarnatione', ref: '27', year: 'ca. 318–335', quote: `Alle, die in Christus sind, gehen an ihm vorüber, treten auf ihn, und Christus bezeugend verspotten sie den Tod und rufen: „Tod, wo ist dein Sieg? Hölle, wo ist dein Stachel?"`, status: 'paraphrase', note: 'Sinngemäß nach der englischen BKV/NPNF-Übersetzung.' },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'De Incarnatione', ref: '28–29', year: 'ca. 318–335', quote: `Männer und Frauen und kleine Kinder eilen um des Glaubens willen dem Tod entgegen – ein sichtbarer Beweis, dass der Tod zunichte gemacht ist.`, status: 'paraphrase' },
      { kind: 'liturgie', work: 'Osterhymnus (Troparion der Auferstehung, auch koptisch gesungen)', quote: `Christus ist auferstanden von den Toten; durch den Tod hat er den Tod zertreten und denen in den Gräbern das ewige Leben geschenkt.`, status: 'paraphrase' },
      { kind: 'koptisch', author: 'Papst Tawadros II.', work: 'Aufnahme der 21 Märtyrer von Libyen in das Synaxarium', year: '21. Februar 2015', quote: `Die 21 in Libyen getöteten Christen werden als Märtyrer verehrt; Gedenktag am 8. Amschir (15. Februar).`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Die Neurowissenschaft zeigt eine enge Abhängigkeit des bewussten Erlebens vom Gehirn – das bestreitet niemand ernsthaft (Details im Themenblock Neurowissenschaften). Ob daraus folgt, dass die Person mit dem Gehirn endet, ist eine philosophische Frage (Leib-Seele-Problem) und keine Messung. Epikurs Argument gilt in der Fachphilosophie keineswegs als erledigt: Gerade säkulare Philosophen wie **Thomas Nagel** („Death", 1970) halten dagegen, dass der Tod ein Übel ist, weil er uns der Güter des Lebens beraubt (Deprivationstheorie). Auch Bernard Williams' These von der Langeweile der Unsterblichkeit ist umstritten (John Martin Fischer, 1994).`,
    detail: `- **Terror-Management-Theorie** (Solomon, Greenberg, Pyszczynski, nach Ernest Becker, *The Denial of Death*, 1973): Menschen puffern Todesangst durch Weltanschauungen ab. Wichtig: Die Theorie gilt für *alle* Weltanschauungen – auch für säkularen Humanismus, Nationalismus oder Fortschrittsglauben. Sie entscheidet also nicht, welche wahr ist.
- **Nahtoderfahrungen** sind ein eigenes, umstrittenes Feld (eigener Claim im Themenblock Neurowissenschaften); man sollte sie nicht als Hauptargument verwenden.
- **Ehrlich:** Die christliche Hoffnung steht und fällt mit der Auferstehung Jesu (1 Kor 15,14). Deshalb gehört die historische Frage (Themenblock Auferstehung) ins Zentrum jedes Gesprächs über den Tod.`,
    sources: [
      { kind: 'fachliteratur', author: 'Thomas Nagel', work: 'Death', ref: 'Noûs 4', year: '1970', quote: `Der Tod ist ein Übel nicht wegen eines unangenehmen Zustands, sondern weil er uns der Güter beraubt, die das Leben enthalten hätte.`, status: 'paraphrase', note: 'Nagel ist Atheist – er widerspricht Epikur aus säkularer Sicht.' },
      { kind: 'fachliteratur', author: 'Ernest Becker', work: 'The Denial of Death', year: '1973', quote: `Die Angst vor dem Tod ist eine Hauptantriebskraft menschlicher Kultur; Menschen schaffen Bedeutungssysteme, um sie zu bewältigen.`, status: 'paraphrase', note: 'Pulitzer-Preis 1974.' },
    ],
  },
  quickAnswer: `Epikur sagt: Wo der Tod ist, bin ich nicht. Das tröstet über das *Totsein*, aber nicht über den *Verlust* – nicht einmal Atheisten wie Thomas Nagel finden es überzeugend, und an einem Kindergrab wirkt es grausam. Die Bibel nennt den Tod deshalb ehrlich einen Feind. Ihre Antwort ist kein Trostspruch, sondern eine Behauptung über die Geschichte: Jesus ist von den Toten auferstanden. Wenn das stimmt, ist der Tod nicht das Ende. Lass uns über die Gründe dafür sprechen.`,
  keyPoints: [
    `**Epikur verfehlt das Problem:** Er tröstet über den Zustand des Totseins, nicht über den Verlust des Lebens und geliebter Menschen. Selbst säkulare Philosophen (Nagel) lehnen sein Argument ab.`,
    `**Die Bibel verharmlost den Tod nicht:** Er ist der „letzte Feind" (1 Kor 15,26); Jesus weint am Grab (Joh 11,35). Christliche Hoffnung ist kein Verdrängen.`,
    `**Die Frage ist historisch:** Paulus macht den Glauben von der Auferstehung Jesu abhängig (1 Kor 15,14). Das ist überprüfbar – und es gibt starke Gründe dafür.`,
    `**Physik beschreibt Natur, nicht den Schöpfer:** Dass Tote nicht von selbst aufstehen, wissen Christen. Die Auferstehung ist Gottes Handeln, kein Naturvorgang.`,
    `**Todesangst erklärt jede Weltanschauung – auch die säkulare:** Die Terror-Management-Theorie gilt für Humanismus und Fortschrittsglauben genauso; sie entscheidet nicht über Wahrheit.`,
    `**Das Zeugnis der Märtyrer:** Von den Märtyrern unter Diokletian bis zu den 21 Kopten in Libyen 2015 starben Christen ohne Hass und ohne Panik – Athanasius sah darin den sichtbaren Sieg über den Tod.`,
  ],
  argument: {
    name: 'Das Argument aus der Auferstehung Jesu',
    summary: 'Die christliche Antwort auf den Tod ist keine Spekulation, sondern hängt an einem historischen Ereignis.',
    premises: [
      {
        text: `P1: Wenn Jesus von Nazareth leiblich von den Toten auferstanden ist, dann ist der Tod nicht das Ende des Menschen, und Jesu Verheißung (Joh 11,25) ist glaubwürdig.`,
        support: `Ein Mensch, der den Tod besiegt hat und dies angekündigt hat, ist der kompetenteste Zeuge darüber, was nach dem Tod kommt. Paulus argumentiert genau so (1 Kor 15,20–22).`,
      },
      {
        text: `P2: Es gibt gute historische Gründe für die Auferstehung Jesu: das leere Grab, die Erscheinungen vor Einzelnen und Gruppen, die plötzliche Verwandlung der Jünger und die Bekehrung von Skeptikern wie Jakobus und Paulus.`,
        support: `Diese Daten werden auch von vielen kritischen Historikern anerkannt; die natürlichen Alternativerklärungen (Halluzination, Grabraub, Scheintod) erklären sie schlecht. Ausführlich im Themenblock „Die Auferstehung Jesu".`,
      },
    ],
    conclusion: `Also gibt es gute Gründe zu glauben, dass der Tod nicht das Ende ist. Die Frage „Ist der Tod das Ende?" führt ins Zentrum des christlichen Glaubens: zum leeren Grab.`,
  },
  voices: [
    {
      person: 'paulus',
      role: 'als Apostel, der mit Epikureern stritt',
      text: `Paulus diskutierte auf dem Areopag in Athen mit epikureischen und stoischen Philosophen; als er von der Auferstehung der Toten sprach, spotteten einige (Apg 17,18.32). In 1 Kor 15 legt er die christliche Antwort auf den Tod in voller Schärfe dar: Er überliefert ein frühes Bekenntnis über Tod, Begräbnis, Auferweckung und Erscheinungen Jesu (15,3–8) und macht dann alles davon abhängig. Ohne Auferstehung wären die Christen „die elendesten unter allen Menschen", und man dürfte mit Recht leben wie die Genießer: „Lasset uns essen und trinken; denn morgen sind wir tot!" Paulus nimmt die epikureische Logik ernst – er bestreitet nur ihre Voraussetzung.`,
    },
    {
      person: 'athanasius',
      role: 'als Theologe der Menschwerdung und Zeuge der Märtyrerkirche',
      text: `Athanasius, der als junger Mann die letzte große Verfolgung erlebte, argumentiert in *De Incarnatione* 27–29 empirisch: Vor Christus fürchteten alle Menschen den Tod; jetzt verachten ihn Männer, Frauen und Kinder um des Glaubens willen. Wer bezweifelt, dass der Tod besiegt ist, solle selbst den Glauben annehmen und erfahren, wie die Todesfurcht weicht. Das ist kein Fanatismus – die Märtyrer suchen den Tod nicht, aber sie fürchten ihn nicht, weil er seine Macht verloren hat.`,
    },
    {
      person: 'dionysius-alexandrien',
      role: 'als Papst von Alexandrien in Zeiten der Seuche',
      text: `Dionysius, Papst von Alexandrien im 3. Jahrhundert, beschreibt in einem Osterbrief (überliefert bei Eusebius, Kirchengeschichte VII,22) eine verheerende Seuche: Die Heiden stießen die Erkrankten von sich und flohen sogar vor ihren Liebsten, während viele Christen die Kranken furchtlos pflegten, ihnen dienten und mit ihnen starben. Das widerlegt praktisch den Vorwurf, Jenseitshoffnung lenke vom Diesseits ab: Gerade wer den Tod nicht mehr fürchten muss, kann sein Leben für andere riskieren.`,
      sources: [
        { kind: 'kirchenvater', author: 'Dionysius von Alexandrien (bei Eusebius)', work: 'Kirchengeschichte (Historia ecclesiastica)', ref: 'VII,22,7–10', year: 'um 260', quote: `Die meisten unserer Brüder schonten sich in übergroßer Liebe nicht, hielten zueinander, besuchten furchtlos die Kranken, dienten ihnen und schieden mit ihnen freudig aus dem Leben; die Heiden dagegen stießen die Erkrankten von sich.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'antonius',
      role: 'als Vater der Mönche',
      text: `Nach der Lebensbeschreibung des Athanasius ermahnte der hl. Antonius seine Mönche, jeden Tag so zu leben, als müssten sie an ihm sterben – nicht aus Angst, sondern damit sie nicht sündigen und nichts Vergängliches festhalten. Das ist das Gegenteil der Todesverdrängung, die Ernest Becker der modernen Kultur bescheinigt: Der Christ denkt an den Tod, gerade weil er ihn nicht mehr fürchten muss. Antonius ging, als die Verfolgung unter Maximinus Daia Alexandrien erreichte, in die Stadt, um den Bekennern beizustehen.`,
      sources: [
        { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Leben des Antonius (Vita Antonii)', ref: '19; 46', year: 'ca. 357', quote: `Antonius lehrte, man solle jeden Tag leben, als müsse man an ihm sterben; in der Verfolgung ging er nach Alexandrien, um den Bekennern zu dienen.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'cs-lewis',
      role: 'als Apologet der christlichen Hoffnung',
      text: `C. S. Lewis widerspricht dem Vorwurf der Weltflucht: Die Christen, die am meisten für diese Welt getan haben, waren gerade jene, die am meisten an die kommende dachten. Wer auf den Himmel zielt, bekommt die Erde „dazu"; wer nur auf die Erde zielt, bekommt keines von beiden. Nach dem Tod seiner Frau Joy schrieb Lewis *A Grief Observed* (1961) – ein schonungsloses Zeugnis, dass Christen den Tod nicht weglächeln. Der Glaube nimmt den Schmerz nicht weg, aber er nimmt ihm das letzte Wort.`,
      sources: [
        { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Mere Christianity', ref: 'Buch III, Kap. 10', year: '1952', quote: `Ziele auf den Himmel, und du bekommst die Erde „dazugeworfen"; ziele auf die Erde, und du bekommst keines von beiden.`, original: `Aim at Heaven and you will get earth 'thrown in': aim at earth and you will get neither.`, translation: 'eigene Übersetzung', status: 'verbatim' },
      ],
    },
  ],
  dialog: [
    {
      id: 'epikur-geht-uns-nichts-an',
      objection: `Epikur hat es gezeigt: Der Tod geht uns nichts an. Solange wir sind, ist der Tod nicht da; wenn der Tod da ist, sind wir nicht mehr. Wovor also Angst haben?`,
      objectionBy: 'Epikur (Brief an Menoikeus)',
      answer: `Epikur tröstet über den *Zustand* des Totseins – den erlebe ich tatsächlich nicht. Aber das ist nicht das, worum Menschen trauern. Wir trauern um den *Verlust*: um alles Gute, das ein Leben noch enthalten hätte, um geliebte Menschen, die wir nie wiedersehen. Selbst der Atheist Thomas Nagel hält Epikurs Argument deshalb für falsch. Und Epikur setzt voraus, was strittig ist: dass der Tod das Ende ist.`,
      detail: `Epikurs Argument ist für einen bestimmten Zweck gebaut: die Furcht vor Bestrafung im Hades zu nehmen. Für die Trauer an einem Kindergrab ist es kein Trost – es klingt eher wie eine Zurückweisung des Schmerzes. Nagels Deprivationstheorie (1970): Etwas kann schlecht für uns sein, ohne dass wir es erleben – wie ein Verrat, von dem wir nie erfahren. Die Bibel steht hier auf der Seite der Trauernden: „Weinet mit den Weinenden" (Röm 12,15).`,
      sources: [
        { kind: 'gegner', author: 'Epikur', work: 'Brief an Menoikeus (bei Diogenes Laertius X,125)', year: 'um 300 v. Chr.', quote: `Das schauerlichste aller Übel, der Tod, geht uns nichts an: Solange wir sind, ist der Tod nicht da; wenn aber der Tod da ist, sind wir nicht mehr.`, original: `τὸ φρικωδέστατον οὖν τῶν κακῶν ὁ θάνατος οὐθὲν πρὸς ἡμᾶς, ἐπειδήπερ ὅταν μὲν ἡμεῖς ὦμεν, ὁ θάνατος οὐ πάρεστιν· ὅταν δὲ ὁ θάνατος παρῇ, τόθ' ἡμεῖς οὐκ ἐσμέν.`, translation: 'eigene Übersetzung', status: 'verbatim' },
      ],
      questionsBack: [
        `Würdest du Epikurs Satz einer Mutter am Grab ihres Kindes sagen? Wenn nein – warum nicht, wenn er doch wahr ist?`,
      ],
      followUps: [
        {
          id: 'symmetrie-lukrez',
          objection: `Lukrez hat es noch klarer gemacht: Die unendliche Zeit vor deiner Geburt hat dich nicht gestört. Die Zeit nach deinem Tod ist ihr Spiegelbild. Warum sollte sie dich stören?`,
          objectionBy: 'Lukrez',
          answer: `Die Symmetrie stimmt nicht. Ich hätte nicht viel früher geboren werden und trotzdem *ich* sein können – mit anderen Eltern, anderer Zeit. Aber ich könnte sehr wohl länger leben. Außerdem richten sich unsere Hoffnungen nach vorn: Niemand trauert, weil er im Mittelalter nicht gelebt hat, aber jeder, wenn ihm die Zukunft mit seinen Kindern genommen wird. Und vor allem: Die Frage ist nicht, ob uns das Nichts stören sollte, sondern ob danach wirklich nichts kommt.`,
          detail: `Das Symmetrie-Argument (De rerum natura III,972–977) wird auch in der säkularen Philosophie breit kritisiert (Nagel, Frederik Kaufman). Christlich gesehen ist die Vorstellung des Lukrez sogar ehrlich: Ohne Gott wäre das Leben ein kurzes Licht zwischen zwei Dunkelheiten. Die Bibel bestreitet nicht die Dunkelheit vor der Geburt (der Mensch ist aus dem Nichts geschaffen), wohl aber, dass der Tod in sie zurückführen muss.`,
          sources: [
            { kind: 'gegner', author: 'Lukrez', work: 'De rerum natura', ref: 'III,830', year: '1. Jh. v. Chr.', quote: `Nichts also ist der Tod für uns und geht uns nicht das Geringste an.`, original: `Nil igitur mors est ad nos neque pertinet hilum.`, translation: 'eigene Übersetzung', status: 'verbatim' },
          ],
          followUps: [
            {
              id: 'todesangst-ausgenutzt',
              objection: `Todesangst ist ein evolutionäres Programm. Die Religion nutzt sie aus. Ernest Becker und die Terror-Management-Forschung zeigen: Menschen klammern sich an Jenseitsglauben, um die Angst zu dämpfen.`,
              objectionBy: 'Sheldon Solomon / Ernest Becker (Rezeption)',
              answer: `Die Terror-Management-Forschung zeigt etwas anderes: Menschen dämpfen Todesangst durch *jede* Weltanschauung – durch Nation, Fortschritt, Ruhm, säkularen Humanismus. Wenn das den Glauben widerlegt, widerlegt es auch den Unglauben. Die Theorie sagt, *warum* Menschen Weltbilder brauchen, nicht *welches* wahr ist. Und das Neue Testament behauptet nicht, die Angst zu dämpfen, sondern sie zu überwinden – mit sichtbaren Folgen.`,
              detail: `Hebr 2,15 spricht von Menschen, die „durch Furcht des Todes im ganzen Leben Knechte" sind – das ist eine erstaunlich moderne Diagnose. Die Antwort des Glaubens zeigt sich nicht im Wegsehen, sondern im Zeugnis: Die Märtyrer der koptischen Kirche, von Diokletian bis Libyen 2015, sind das Gegenteil von Menschen, die sich aus Angst an eine Illusion klammern.`,
              followUps: [
                {
                  id: 'maertyrer-fanatiker',
                  objection: `Märtyrer beweisen gar nichts. Selbstmordattentäter sterben auch für ihren Glauben – das zeigt nur, wie stark Indoktrination sein kann.`,
                  objectionBy: 'Sam Harris',
                  answer: `Es gibt zwei entscheidende Unterschiede. Erstens: Christliche Märtyrer töten nicht – sie sterben und vergeben ihren Mördern, wie Stephanus (Apg 7,60). Die 21 Kopten in Libyen griffen niemanden an; sie weigerten sich nur, Christus zu verleugnen. Zweitens: Die Apostel starben nicht für etwas, das sie von anderen gehört hatten, sondern für das, was sie selbst gesehen zu haben bezeugten – den auferstandenen Jesus. Für eine Lüge, die man selbst erfunden hat, stirbt man nicht.`,
                  detail: `Wichtig: Das Martyrium beweist nicht, dass ein Glaube wahr ist, wohl aber, dass die Zeugen aufrichtig waren. Bei den Aposteln ist das historisch entscheidend, weil sie Augenzeugen waren (vgl. den Claim zu den Halluzinations- und Legendenthesen). Der Unterschied zwischen Märtyrer und Attentäter ist zugleich der Unterschied zwischen dem gekreuzigten Christus, der für seine Feinde betet, und einer Gewalt, die im Namen Gottes tötet.`,
                  sources: [
                    { kind: 'bibel', work: 'Apostelgeschichte', ref: '7,60', quote: `Er kniete aber nieder und schrie laut: HERR, behalte ihnen diese Sünde nicht!`, translation: 'Luther 1912', status: 'verbatim' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'gehirn-tot-person-tot',
      objection: `Die Physik des Alltags ist vollständig verstanden. Es gibt keinen Mechanismus, durch den die Information in deinem Gehirn nach dem Tod fortbestehen könnte. Eine Seele, die ohne Gehirn weiterlebt, müsste mit Atomen wechselwirken – das hätten wir längst gemessen.`,
      objectionBy: 'Sean Carroll',
      answer: `Die christliche Hoffnung beruht nicht in erster Linie darauf, dass ein Geist „aus dem Gehirn entweicht", sondern darauf, dass Gott die Toten auferweckt – wie er Jesus auferweckt hat. Die Physik beschreibt, was die Natur von selbst tut; sie sagt nichts darüber, was ihr Schöpfer tun kann. Und dein Argument setzt bereits voraus, dass der Geist nichts anderes ist als Physik – das ist die Frage, nicht die Antwort.`,
      detail: `Carrolls Argument ist stark gegen eine bestimmte Vorstellung: eine Seele als feinstoffliches Etwas, das wie ein Gas aus dem Körper strömt. Die christliche Tradition denkt anders: Die Seele ist Lebensprinzip und personale Mitte des Menschen, die nach dem Tod von Gott im Sein gehalten wird (Zwischenzustand), bis zur Auferstehung des Leibes. Ob und wie der Geist vom Gehirn abhängt, ist Gegenstand des Leib-Seele-Problems (siehe Themenblock Naturalismus und Neurowissenschaften).`,
      questionsBack: [
        `Woher weißt du, dass das Bewusstsein vollständig physikalisch ist – ist das eine Messung oder eine Voraussetzung?`,
        `Wenn es einen Gott gibt, der das Universum geschaffen hat: Warum sollte er Tote nicht auferwecken können?`,
      ],
      followUps: [
        {
          id: 'auferstehung-unmoeglich',
          objection: `Tote stehen nicht auf. Das ist die sicherste Erfahrung der Menschheit. Ein Wunder anzunehmen ist irrational.`,
          objectionBy: 'David Hume (Rezeption)',
          answer: `Einverstanden – Tote stehen nicht *von selbst* auf. Gerade deshalb ist die Auferstehung Jesu so bemerkenswert. Die Frage ist nicht, ob es natürlich wahrscheinlich ist, dass ein Toter aufsteht (nein), sondern ob es wahrscheinlich ist, dass *Gott* einen bestimmten Toten auferweckt hat, der dies angekündigt hatte und dessen Grab leer war. Das hängt an der Frage nach Gott und an den historischen Belegen – beides kann man prüfen.`,
          detail: `Siehe die Claims „Historiker können grundsätzlich kein Wunder feststellen" und „Die Jünger hatten Halluzinationen" (Themenblock Auferstehung).`,
          followUps: [
            {
              id: 'identitaet-nach-tod',
              objection: `Selbst wenn Gott einen Körper neu zusammensetzt: Das wäre eine Kopie, nicht du. Wenn ich sterbe und Gott einen identischen Menschen erschafft, bin ich trotzdem tot.`,
              objectionBy: 'Philosophischer Einwand (Personale Identität)',
              answer: `Ein fairer philosophischer Einwand. Die christliche Tradition beantwortet ihn mit der Seele: Die Person besteht zwischen Tod und Auferstehung fort, von Gott im Sein gehalten, und erhält einen verwandelten Leib. Paulus vergleicht das mit einem Samenkorn, das stirbt und doch dieselbe Pflanze hervorbringt (1 Kor 15,36–44). Die Kontinuität liegt nicht in denselben Atomen – die tauschen wir auch im Leben ständig aus –, sondern in der Person selbst.`,
              detail: `Die Frage der personalen Identität ist auch für Naturalisten schwierig: Unsere Atome werden im Lauf des Lebens weitgehend ersetzt, und doch sind wir dieselben. Was macht Identität aus? Die Tradition antwortet: die Seele als Form und Mitte der Person. Das „Kopie-Problem" entsteht vor allem für reine Materialisten, nicht für den klassischen christlichen Ansatz.`,
              sources: [
                { kind: 'bibel', work: '1. Korinther', ref: '15,42–44', quote: `Es wird gesät verweslich und wird auferstehen unverweslich. … Es wird gesät ein natürlicher Leib, und wird auferstehen ein geistlicher Leib.`, translation: 'Luther 1912', status: 'verbatim' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'unsterblichkeit-langweilig',
      objection: `Ewiges Leben wäre ein Albtraum. Nach ein paar Millionen Jahren hättest du alles erlebt, alles gelesen, jedes Gespräch geführt. Endlose Langeweile. Gerade die Endlichkeit gibt dem Leben seinen Wert.`,
      objectionBy: 'Bernard Williams',
      answer: `Langeweile entsteht, wenn endliche Güter sich wiederholen. Das christliche ewige Leben ist aber nicht eine endlose Verlängerung dieses Lebens, sondern Gemeinschaft mit dem unendlichen Gott – und Unendliches lässt sich nicht ausschöpfen. Gregor von Nyssa beschreibt es als ewiges Fortschreiten: Man dringt immer tiefer in Gott ein, ohne je an ein Ende zu kommen. Wer liebt, langweilt sich nicht am Geliebten.`,
      detail: `Williams' Argument („The Makropulos Case", 1973) beruht auf dem Bild der Opernfigur Elina Makropulos, die durch ein Elixier 342 Jahre alt wird und das Leben nur noch als öde empfindet. Das trifft eine endlose Verlängerung *dieses* Lebens. Gregor von Nyssa (*Das Leben des Mose* II) spricht von der *Epektasis*, dem Sich-Ausstrecken nach dem, was vorn ist (Phil 3,13): Gottes Schönheit ist unerschöpflich. Auch säkulare Philosophen (John Martin Fischer, 1994) halten Williams entgegen, dass es wiederholbare Freuden gibt, die nicht schal werden.`,
      sources: [
        { kind: 'kirchenvater', author: 'Gregor von Nyssa', work: 'Das Leben des Mose (De vita Moysis)', ref: 'II,225–239', year: 'um 390', quote: `Wahrhaft Gott zu sehen heißt, im Verlangen nach ihm nie gesättigt zu werden; das Aufsteigen zu ihm findet kein Ende.`, status: 'paraphrase' },
        { kind: 'fachliteratur', author: 'John Martin Fischer', work: 'Why Immortality Is Not So Bad', ref: 'International Journal of Philosophical Studies 2', year: '1994', quote: `Es gibt wiederholbare Freuden, die nicht schal werden; deshalb muss ein unsterbliches Leben nicht notwendig langweilig sein.`, status: 'paraphrase' },
      ],
      followUps: [
        {
          id: 'endlichkeit-macht-wertvoll',
          objection: `Knappheit macht wertvoll. Wenn das Leben endlos ist, ist nichts mehr dringlich. Ein unendliches Leben hätte keinen Ernst.`,
          objectionBy: 'Martin Hägglund (This Life, 2019)',
          answer: `Wenn Kürze den Wert erhöht, wäre das Leben eines Kindes, das mit fünf Jahren stirbt, wertvoller als ein Leben von achtzig Jahren. Das glaubt niemand. Und der christliche Glaube kennt die Dringlichkeit sehr wohl: Dieses Leben ist entscheidend, „wie den Menschen ist gesetzt, einmal zu sterben, danach aber das Gericht" (Hebr 9,27). Ernst und Ewigkeit schließen sich nicht aus – gerade weil die Ewigkeit auf dem Spiel steht, ist das Heute ernst.`,
          detail: `Der schwedische Philosoph Martin Hägglund (*This Life: Secular Faith and Spiritual Freedom*, 2019) argumentiert, dass nur ein endliches Leben uns wirklich etwas bedeuten lässt. Die Antwort: Liebe zu Personen hängt nicht daran, dass sie sterben – wir lieben unsere Kinder nicht trotz, sondern *mit* der Hoffnung, dass sie leben.`,
          sources: [
            { kind: 'bibel', work: 'Hebräer', ref: '9,27', quote: `Und wie den Menschen ist gesetzt, einmal zu sterben, darnach aber das Gericht.`, translation: 'Luther 1912', status: 'verbatim' },
          ],
        },
      ],
    },
    {
      id: 'jenseits-vertroestung',
      objection: `Jenseitsglaube ist Vertröstung. Er lenkt vom einzigen Leben ab, das wir haben. Heine hatte recht: „Den Himmel überlassen wir den Engeln und den Spatzen." Wir sollten hier und jetzt eine gerechte Welt bauen.`,
      objectionBy: 'Heinrich Heine / Karl Marx',
      answer: `Die Geschichte zeigt eher das Gegenteil: Die Christen, die an die Ewigkeit glaubten, haben Krankenhäuser gebaut, Seuchenkranke gepflegt, Sklaven freigekauft. Als in Alexandrien im 3. Jahrhundert die Pest wütete, flohen die Heiden vor ihren Kranken, während die Christen sie pflegten und mit ihnen starben – so berichtet Papst Dionysius. Wer den Tod nicht mehr fürchten muss, kann sein Leben für andere einsetzen.`,
      detail: `C. S. Lewis: „Ziele auf den Himmel, und du bekommst die Erde dazu; ziele auf die Erde, und du bekommst keines von beiden." Die Vorstellung, dass Ewigkeitshoffnung passiv macht, ist ein Vorurteil des 19. Jahrhunderts. Umgekehrt haben die politischen Bewegungen, die den Himmel auf Erden errichten wollten, im 20. Jahrhundert oft die Hölle geschaffen (siehe Themenblock Religion und Gewalt).`,
      sources: [
        { kind: 'gegner', author: 'Heinrich Heine', work: 'Deutschland. Ein Wintermärchen', ref: 'Caput I', year: '1844', quote: `Den Himmel überlassen wir / Den Engeln und den Spatzen.`, status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'gutes-nur-fuer-lohn',
          objection: `Christen tun Gutes nur, um in den Himmel zu kommen. Das ist Egoismus mit Jenseitsrendite. Ein Atheist, der hilft, tut es wenigstens selbstlos.`,
          objectionBy: 'Säkularer Humanist',
          answer: `Das Doppelgebot der Liebe verlangt, Gott und den Nächsten um ihrer selbst willen zu lieben, nicht als Mittel zum Zweck. Der Himmel ist kein Lohn, der nachträglich an die Liebe angehängt wird, sondern ihre Vollendung: Gemeinschaft mit dem, den man liebt. Ein Mann, der seine Frau heiratet, ist nicht „egoistisch", weil er sich auf das gemeinsame Leben freut. Und Jesus warnt ausdrücklich davor, Gutes zu tun, um gesehen zu werden (Mt 6,1–4).`,
          detail: `C. S. Lewis unterscheidet in *The Weight of Glory* (1941) zwischen „angehängten" und „eigentlichen" Belohnungen: Geld für eine Heirat wäre eine angehängte, käufliche Belohnung; die Ehe selbst ist der eigentliche Lohn der Liebe. So verhält es sich mit dem Himmel. Zugleich gilt: Wer echte Selbstlosigkeit bei Atheisten sieht, sollte sie dankbar anerkennen – sie ist ein Abglanz des Bildes Gottes in jedem Menschen.`,
          sources: [
            { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'The Weight of Glory', year: '1941', quote: `Die eigentlichen Belohnungen sind nicht einfach an die Tätigkeit angehängt, für die sie gegeben werden, sondern sind diese Tätigkeit in ihrer Vollendung.`, status: 'paraphrase' },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Würdest du Epikurs „Der Tod geht uns nichts an" einer trauernden Mutter sagen?`,
    `Wenn der Tod wirklich in Ordnung ist – warum trauern wir dann, auch als Atheisten, so tief?`,
    `Hast du dir die historischen Gründe für die Auferstehung Jesu schon einmal ernsthaft angesehen?`,
    `Woher weißt du, dass Bewusstsein vollständig physikalisch ist?`,
  ],
  avoid: [
    `Nahtoderfahrungen als Hauptbeweis verwenden – sie sind umstritten und lenken vom Kern (der Auferstehung Jesu) ab.`,
    `„Du hast nur Angst vor der Hölle" oder „Du wirst schon sehen" – Drohungen sind kein Argument und verletzen.`,
    `Den Tod verharmlosen („Er ist doch nur ins Nebenzimmer gegangen") – die Bibel nennt ihn einen Feind; christliche Hoffnung ist kein Lächeln über den Schmerz.`,
  ],
  concessions: [
    `Die enge Abhängigkeit des Bewusstseins vom Gehirn ist eine echte Herausforderung; Christen sollten sie nicht kleinreden.`,
    `Der christliche Glaube steht und fällt mit der Auferstehung Jesu – Paulus selbst sagt das (1 Kor 15,14). Wenn sie widerlegt wäre, wäre der Glaube vergeblich.`,
    `Auch Christen erleben Todesangst und Trauer; der Glaube nimmt sie nicht einfach weg.`,
  ],
  furtherReading: [
    { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Menschwerdung des Logos (De Incarnatione), bes. Kap. 20–32', year: 'ca. 318–335', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'N. T. Wright', work: 'The Resurrection of the Son of God', year: '2003', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'A Grief Observed (Über die Trauer)', year: '1961', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Thomas Nagel', work: 'Mortal Questions (darin: „Death")', year: '1979', status: 'paraphrase', note: 'Säkulare Kritik an Epikur.' },
  ],
  difficulty: 2,
  tags: ['Tod', 'Epikur', 'Lukrez', 'Auferstehung', 'Märtyrer', 'Unsterblichkeit', 'Seele'],
  related: [
    'auferstehung/halluzinationen',
    'auferstehung/wunder-historisch-unmoeglich',
    'neurowissenschaften/geist-gleich-gehirn',
    'neurowissenschaften/nahtoderfahrungen-halluzination',
    'informatik-ki/transhumanismus',
    'sinn-existenz/kein-objektiver-sinn',
  ],
};

export default claim;
