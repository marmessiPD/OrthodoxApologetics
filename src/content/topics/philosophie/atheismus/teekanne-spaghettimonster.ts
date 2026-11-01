import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'teekanne-spaghettimonster',
  title: `„Gott ist wie Russells Teekanne oder das Fliegende Spaghettimonster."`,
  proponents: [
    { name: 'Bertrand Russell', role: 'Philosoph und Logiker', work: '„Is There a God?" (1952 für das Magazin Illustrated verfasst, dort nicht gedruckt; erstmals in Collected Papers Bd. 11, 1997)' },
    { name: 'Bobby Henderson', role: 'Physikabsolvent, Begründer der Satire-„Kirche" des Fliegenden Spaghettimonsters', work: 'Offener Brief an das Kansas State Board of Education (2005); The Gospel of the Flying Spaghetti Monster (2006)' },
    { name: 'Richard Dawkins', role: 'Evolutionsbiologe, Oxford', work: 'The God Delusion (2006), Kap. 2 „The Poverty of Agnosticism"' },
    { name: 'Matt Dillahunty', role: 'Atheistischer Debattierer', work: 'Debatten zur Beweislast' },
  ],
  steelman: `Russell schrieb 1952: Wenn er behauptete, zwischen Erde und Mars kreise eine Porzellan-Teekanne um die Sonne, zu klein für jedes Teleskop, könnte niemand ihn widerlegen – und doch wäre es absurd, von anderen zu verlangen, sie müssten das Gegenteil beweisen. Würde der Glaube an die Teekanne allerdings in alten Büchern gelehrt, sonntags verkündet und Kindern in der Schule eingeprägt, dann gälte der Zweifler als Exzentriker. Genau so steht es mit Gott: Unwiderlegbarkeit ist kein Grund zum Glauben, und nur Gewohnheit lässt Gott plausibler erscheinen als die Teekanne. Das Fliegende Spaghettimonster (2005) treibt das auf die Spitze: Es ist unsichtbar, hat das Universum erschaffen und lässt sich nicht widerlegen – mit genau denselben „Belegen" wie der Gott der Christen. Wer das Spaghettimonster lächerlich findet, sollte sich fragen, warum er seinen eigenen Gott anders behandelt.`,
  biblical: {
    summary: `Der biblische Gott ist kein Gegenstand *im* Universum, den man irgendwo zwischen Erde und Mars vermuten könnte, sondern der Schöpfer und Träger von allem: „Siehe, der Himmel und aller Himmel Himmel mögen dich nicht versorgen" (1 Kön 8,27); „in ihm leben, weben und sind wir" (Apg 17,28). Gerade die Bibel selbst verspottet Götter, die gemachte Gegenstände sind (Ps 115,4–7; Jes 44,9–20) – die Teekannen-Kritik trifft Götzen, nicht den lebendigen Gott.`,
    detail: `- **Ps 115 und Jes 44:** Die Propheten machen sich über Götter lustig, die ein Handwerker aus der Hälfte eines Holzstücks schnitzt, während er mit der anderen Hälfte sein Brot bäckt. Die biblische Religionskritik ist älter und schärfer als Russell – sie richtet sich gegen Götter als Dinge in der Welt.
- **1 Kön 8,27:** Salomo erkennt bei der Tempelweihe, dass Gott nicht räumlich eingeschlossen werden kann.
- **Apg 17,24–28:** Paulus unterscheidet vor den Athenern den Schöpfer, der „nicht wohnt in Tempeln mit Händen gemacht", von den Göttern aus Gold, Silber und Stein (V. 29).
- **Kol 1,16–17:** In Christus „besteht alles" – Gott ist nicht ein zusätzliches Ding neben anderen, sondern der Grund, warum es überhaupt Dinge gibt.`,
    sources: [
      { kind: 'bibel', work: '1. Könige', ref: '8,27', quote: `Denn sollte in Wahrheit Gott auf Erden wohnen? Siehe, der Himmel und aller Himmel Himmel mögen dich nicht versorgen; wie sollte es denn dies Haus tun, das ich gebaut habe?`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '17,27–28', quote: `daß sie den Herrn suchen sollten, ob sie doch ihn fühlen und finden möchten; und fürwahr, er ist nicht ferne von einem jeglichen unter uns. Denn in ihm leben, weben und sind wir.`, original: 'Ἐν αὐτῷ γὰρ ζῶμεν καὶ κινούμεθα καὶ ἐσμέν', translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Psalmen', ref: '115,4–5', quote: `Jener Götzen aber sind Silber und Gold, von Menschenhänden gemacht. Sie haben Mäuler und reden nicht; sie haben Augen und sehen nicht.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Kolosser', ref: '1,17', quote: `Und er ist vor allem, und es besteht alles in ihm.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die alexandrinischen Väter führten genau die Kritik, die Russell später an Gott richtete – gegen die heidnischen Götter. Clemens von Alexandrien verspottet in seiner „Mahnrede an die Heiden" Götter, die aus Holz und Stein gemacht oder in Mythen mit menschlichen Leidenschaften ausgestattet sind; Athanasius zeigt in „Gegen die Heiden", dass Götzen Geschöpfe sind, die selbst einen Schöpfer brauchen. Der Gott der Christen dagegen ist unsichtbar, unbegreiflich, ungeschaffen – nicht ein verstecktes Objekt, sondern der Grund des Seins.`,
    sources: [
      { kind: 'kirchenvater', author: 'Clemens von Alexandrien', work: 'Mahnrede an die Heiden (Protreptikos)', ref: 'Kap. 4', status: 'paraphrase', quote: 'Kritik an Götterbildern, die von Handwerkern aus Stoffen der Welt gemacht sind und weder hören noch sehen.' },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Gegen die Heiden (Contra Gentes)', ref: '8–29', status: 'paraphrase', quote: 'Die Verehrung von Geschöpfen und Bildern als Götter ist eine Verwechslung des Gemachten mit dem Schöpfer.' },
    ],
  },
  quickAnswer: `Ich glaube auch nicht an die Teekanne – aber nicht nur, weil man sie nicht widerlegen kann, sondern weil es gute Gründe *gegen* sie gibt (wer hätte sie 1952 dorthin bringen sollen?) und keinen einzigen Grund *für* sie: Sie erklärt nichts. Bei Gott ist es umgekehrt: Er wird als Grund des Universums behauptet, und es gibt Argumente aus dem Anfang des Kosmos, seiner Ordnung, dem Bewusstsein und der Geschichte Jesu. Der Vergleich funktioniert also nur, wenn man schon voraussetzt, dass es für Gott keine Gründe gibt – genau das ist ja die Streitfrage. Und das Spaghettimonster hat sein Erfinder 2005 ausdrücklich als Satire geschrieben.`,
  keyPoints: [
    `**Kein Christ argumentiert „Man kann Gott nicht widerlegen, also existiert er".** Russells Teekanne trifft ein Argument, das niemand vorbringt. Wir nennen positive Gründe.`,
    `**Kategorienfehler:** Teekanne und Spaghettimonster sind (gedachte) Dinge *im* Universum, aus Materie, an einem Ort. Gott wird als zeitloser, immaterieller Grund des Universums verstanden – das ist eine völlig andere Art von Behauptung.`,
    `**Erklärungskraft:** Die Teekanne erklärt nichts. Gott erklärt, warum es überhaupt etwas gibt, warum es einen Anfang hat, warum es geordnet und verständlich ist.`,
    `**Gibt man dem Spaghettimonster alle Eigenschaften Gottes** (ungeschaffen, immateriell, allmächtig, notwendig), ist es kein Spaghetti mehr, sondern Gott mit einem albernen Namen.`,
    `**Herkunft:** Das Spaghettimonster ist eine dokumentierte Satire von 2005. Das Christentum beruft sich auf öffentlich bezeugte Ereignisse im Palästina des 1. Jahrhunderts.`,
  ],
  voices: [
    {
      person: 'hart',
      role: 'als orthodoxer Religionsphilosoph',
      text: `Hart betont, dass die Neuen Atheisten mit dem Wort „Gott" oft ein Wesen meinen, das es in der klassischen Tradition gar nicht gibt: einen Demiurgen, ein mächtiges Ding innerhalb der Wirklichkeit, das man neben andere Dinge stellen und mit Teekannen oder Feen vergleichen könnte. In den großen theistischen Traditionen – christlich, jüdisch, islamisch, hinduistisch – meint „Gott" dagegen den unendlichen Grund allen Seins, Bewusstseins und aller Seligkeit, der nicht ein Seiendes unter anderen ist. Die Teekannen-Analogie widerlegt also allenfalls einen Gott, den kein klassischer Theist verteidigt.`,
      sources: [
        { kind: 'fachliteratur', author: 'David Bentley Hart', work: 'The Experience of God: Being, Consciousness, Bliss', year: '2013', ref: 'Einleitung und Kap. 1', status: 'paraphrase', quote: 'Gott ist in den klassischen Traditionen nicht ein Wesen unter anderen (Demiurg), sondern der unendliche Grund des Seins.' },
      ],
    },
    {
      person: 'feser',
      role: 'als Thomist',
      text: `Feser weist darauf hin, dass alle Figuren der Spott-Analogien – Teekanne, Zahnfee, Spaghettimonster – endliche, zusammengesetzte, veränderliche Dinge wären, die selbst einen Grund ihres Daseins bräuchten. Die klassischen Gottesbeweise schließen dagegen auf etwas, das *nicht* zusammengesetzt, nicht veränderlich und nicht kontingent ist – auf das „Sein selbst". Ein Spaghettimonster kann schon deshalb nicht die Antwort auf die Frage sein, warum es überhaupt etwas gibt, weil es selbst unter diese Frage fiele.`,
      sources: [
        { kind: 'fachliteratur', author: 'Edward Feser', work: 'The Last Superstition', year: '2008', status: 'paraphrase', quote: 'Die Spott-Analogien der Neuen Atheisten vergleichen den Grund allen Seins mit endlichen Gegenständen.' },
      ],
    },
    {
      person: 'clemens-alexandrien',
      role: 'als Kenner und Kritiker der griechischen Religion',
      text: `Clemens kannte die Götter und Mysterien seiner Zeit aus erster Hand und spottete selbst über Götter, die aus Holz, Stein und Elfenbein gemacht sind oder in Mythen streiten, betrügen und ehebrechen. Doch er setzt dem nicht die Leere entgegen, sondern den einen Gott, den Schöpfer, der nicht gemacht ist, sondern alles macht, und der sich durch den Logos den Menschen zeigt. Die Christen waren also schon im 2. Jahrhundert „Atheisten" gegenüber allen Teekannen-Göttern – gerade weil sie den wahren Gott kannten.`,
      sources: [
        { kind: 'kirchenvater', author: 'Clemens von Alexandrien', work: 'Mahnrede an die Heiden (Protreptikos)', ref: 'Kap. 2–4', status: 'paraphrase', quote: 'Spott über die Mythen und Bilder der Götter; Hinwendung zum einen Schöpfer durch den Logos.' },
      ],
    },
    {
      person: 'craig',
      role: 'als Debattierer',
      text: `Craig antwortet auf das Spaghettimonster mit einer einfachen Analyse: Entweder hat das Monster die Eigenschaften, die die Argumente für den Schöpfer verlangen – unverursacht, zeitlos, raumlos, immateriell, ungeheuer mächtig, personal –, dann ist es nur ein anderer Name für Gott; oder es besteht aus Nudeln und Fleischbällchen, dann ist es ein physisches, kontingentes Ding innerhalb des Universums und kommt als Ursache des Universums nicht in Frage. In beiden Fällen ist die Parodie kein Gegenargument.`,
      sources: [
        { kind: 'fachliteratur', author: 'William Lane Craig', work: 'Reasonable Faith (Website, Q&A-Beiträge zum „Flying Spaghetti Monster")', status: 'paraphrase', quote: 'Ein Spaghettimonster mit den Eigenschaften der ersten Ursache wäre einfach Gott unter anderem Namen.' },
      ],
    },
  ],
  dialog: [
    {
      id: 'teekanne-unwiderlegbar',
      objection: `„Du kannst nicht widerlegen, dass zwischen Erde und Mars eine Teekanne kreist. Trotzdem glaubst du nicht daran. Genauso glaube ich nicht an Gott."`,
      objectionBy: 'Bertrand Russell (1952), heute Richard Dawkins',
      answer: `Richtig – ich glaube nicht an die Teekanne. Aber nicht bloß, weil ich sie nicht widerlegen kann, sondern weil alles gegen sie spricht: Niemand konnte 1952 eine Teekanne in eine Umlaufbahn bringen, und sie würde nichts erklären. Bei Gott liegen dagegen positive Gründe auf dem Tisch – Anfang, Ordnung, Bewusstsein, Auferstehung. Die Analogie wäre nur dann treffend, wenn es keinerlei Gründe für Gott gäbe – und genau das ist die Frage, über die wir reden.`,
      sources: [
        { kind: 'gegner', author: 'Bertrand Russell', work: '„Is There a God?", in: Collected Papers of Bertrand Russell, Bd. 11', year: '1952 (gedruckt 1997)', quote: `If I were to suggest that between the Earth and Mars there is a china teapot revolving about the sun in an elliptical orbit, nobody would be able to disprove my assertion provided I were careful to add that the teapot is too small to be revealed even by our most powerful telescopes.`, status: 'verbatim', note: 'Der Aufsatz wurde 1952 vom Magazin Illustrated in Auftrag gegeben, aber dort nicht veröffentlicht.' },
      ],
      followUps: [
        {
          id: 'punkt-ist-beweislast',
          objection: `„Es geht Russell nicht um die Teekanne, sondern um das Prinzip: Unwiderlegbarkeit ist kein Grund, etwas zu glauben."`,
          objectionBy: 'Matt Dillahunty',
          answer: `Da stimme ich dir völlig zu! Kein informierter Christ sagt: „Du kannst Gott nicht widerlegen, also existiert er." Wir sagen: Es gibt positive Gründe für Gott. Damit trifft die Teekanne ein Argument, das wir gar nicht vorbringen. Die eigentliche Arbeit muss also bei den Gründen selbst geschehen – lass uns die prüfen.`,
          followUps: [
            {
              id: 'gruende-ebenso-schwach',
              objection: `„Deine ‚positiven Gründe' sind aber genauso schwach wie die für die Teekanne."`,
              objectionBy: 'Richard Dawkins',
              answer: `Dann leistet nicht die Teekanne die Arbeit, sondern deine Kritik an den Gründen – und die müssen wir einzeln besprechen. Ist der Anfang des Universums für dich so wenig erklärungsbedürftig wie eine Teekanne? Ist das Bewusstsein so belanglos? Es hat noch nie jemand wegen der Teekanne einen Lehrstuhl für Philosophie bekommen, aber zahlreiche hervorragende Philosophen halten die Gottesargumente für stark. Das beweist nichts, zeigt aber, dass der Vergleich nicht fair ist.`,
              questionsBack: [`Welches Gottesargument hältst du für vergleichbar schwach wie das für die Teekanne – und warum?`],
            },
          ],
        },
        {
          id: 'russell-gott-ebenso-unwahrscheinlich',
          objection: `„Russell selbst sagte, der christliche Gott sei für ihn genauso unwahrscheinlich wie die Teekanne."`,
          objectionBy: 'Bertrand Russell (sinngemäß)',
          answer: `Das ist eine Behauptung, kein Argument. Interessant ist, dass Russell im berühmten BBC-Streitgespräch mit Frederick Copleston (1948) auf die Frage, warum es das Universum gibt, keine Erklärung anbieten konnte und sagte: „Das Universum ist einfach da, und das ist alles." Das ist ehrlich – aber es ist kein Beleg dafür, dass Gott unwahrscheinlich ist, sondern ein Verzicht auf Erklärung.`,
          sources: [
            { kind: 'gegner', author: 'Bertrand Russell & Frederick C. Copleston', work: 'BBC-Rundfunkdebatte über die Existenz Gottes', year: '1948', quote: `I should say that the universe is just there, and that's all.`, status: 'verbatim' },
          ],
        },
      ],
    },
    {
      id: 'spaghettimonster-gleiche-belege',
      objection: `„Das Fliegende Spaghettimonster hat das Universum erschaffen und ist unsichtbar. Es hat genau dieselben Belege wie dein Gott. Warum ist dein Gott plausibler?"`,
      objectionBy: 'Bobby Henderson (2005) / Matt Dillahunty',
      answer: `Weil das Spaghettimonster sich an einer Gabelung entscheiden muss. Besteht es aus Nudeln und Fleischbällchen, dann ist es ein materielles, zusammengesetztes Ding, das selbst einen Grund braucht – also kann es das Universum nicht erklärt haben. Gibst du ihm dagegen alle Eigenschaften, die die Argumente verlangen – ungeschaffen, zeitlos, immateriell, allmächtig, personal –, dann ist es kein Spaghetti mehr, sondern Gott mit einem lustigen Namen.`,
      followUps: [
        {
          id: 'gott-ebenso-erfunden',
          objection: `„Dein Gott ist genauso eine Erfindung, nur älter. Religion ist Tradition, die man Kindern beibringt."`,
          objectionBy: 'Richard Dawkins',
          answer: `Beim Spaghettimonster wissen wir genau, wer es wann und wozu erfunden hat: Bobby Henderson schrieb 2005 einen satirischen Brief gegen die Behandlung von Intelligent Design im Schulunterricht in Kansas. Beim Christentum liegt die Frage, wie es entstand, offen auf dem Tisch der Geschichtswissenschaft – und dort finden wir keine Satire, sondern Zeugen, die sagen, sie hätten den Auferstandenen gesehen, und dafür Verfolgung in Kauf nahmen. Wie man zu einem Glauben kommt, entscheidet übrigens nicht über seine Wahrheit – das gilt auch für den Atheismus.`,
          followUps: [
            {
              id: 'woher-weisst-du',
              objection: `„Woher willst du wissen, dass die Auferstehung nicht auch nur eine Legende ist, die sich entwickelt hat?"`,
              objectionBy: 'Bart Ehrman',
              answer: `Weil die ältesten Zeugnisse sehr früh sind: Das Glaubensbekenntnis in 1 Kor 15,3–7, das Paulus „empfangen" hat, wird von den meisten Forschern – auch skeptischen – auf wenige Jahre nach der Kreuzigung datiert. Für die Bildung einer Legende fehlt schlicht die Zeit, und Paulus nennt Zeugen, die man noch befragen konnte. Das ist eine historische Frage, die man prüfen kann – und das unterscheidet sie grundsätzlich von einer Satire.`,
              detail: `Siehe „Die Auferstehung ist eine Legende, die sich über Jahrzehnte entwickelte".`,
            },
          ],
        },
      ],
    },
    {
      id: 'unendlich-viele-goetter',
      objection: `„Es gibt unendlich viele denkbare Götter: Zeus, Thor, das Spaghettimonster, ein böser Gott. Die Wahrscheinlichkeit, dass ausgerechnet deiner stimmt, ist praktisch null."`,
      objectionBy: 'Richard Dawkins / Alex O\'Connor',
      answer: `Die Argumente wählen nicht zufällig aus einer unendlichen Liste, sondern grenzen ein: Die Ursache des Universums muss ungeschaffen, zeitlos, immateriell, ungeheuer mächtig und personal sein. Damit scheiden Zeus, Thor und das Spaghettimonster aus – sie sind Wesen *in* der Welt. Übrig bleibt der eine Schöpfergott des Monotheismus. Und welcher Monotheismus wahr ist, lässt sich dann geschichtlich prüfen – an Jesus und seiner Auferstehung.`,
      followUps: [
        {
          id: 'boeser-gott',
          objection: `„Alle deine Argumente passen genauso gut auf einen allmächtigen, *bösen* Gott. Warum nimmst du einen guten an?"`,
          objectionBy: 'Stephen Law („The Evil-God Challenge", Religious Studies 46, 2010)',
          answer: `Weil die klassischen Argumente nicht nur auf einen mächtigen, sondern auf einen *vollkommenen* Grund schließen: Das Böse ist nach klassischer Lehre ein Mangel am Guten, kein eigenständiges Sein – ein Wesen, das reines Sein und reine Vollkommenheit ist, kann nicht böse sein. Zudem spricht die Fülle des Guten in der Welt – Liebe, Schönheit, Gewissen, die Sehnsucht nach Gerechtigkeit – deutlich gegen einen bösen Schöpfer. Das moralische Argument weist ohnehin auf einen guten Gott.`,
          followUps: [
            {
              id: 'privationstheorie-veraltet',
              objection: `„Die Lehre, das Böse sei nur ein Mangel, ist doch ein veralteter Trick der Theologen."`,
              objectionBy: 'Stephen Law',
              answer: `Sie ist alt, aber nicht widerlegt: Schon Athanasius argumentierte, dass das Böse keine eigene Substanz hat, sondern im Abwenden vom Guten besteht; Augustinus und Thomas entfalteten das. Auch heute wird sie von ernsthaften Philosophen verteidigt. Und selbst wer sie ablehnt, steht beim bösen Gott vor einem gespiegelten Problem: Warum gibt es dann so viel Gutes, Liebe und Selbsthingabe? Die Symmetrie ist geringer, als Law annimmt, weil unser moralisches Wissen selbst auf das Gute ausgerichtet ist.`,
              sources: [
                { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Gegen die Heiden (Contra Gentes)', ref: '6–7', status: 'paraphrase', quote: 'Das Böse hat kein eigenes Sein; es entsteht, wenn sich die Seele vom Guten abwendet.' },
              ],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Welche Argumente gibt es für die Teekanne – und welche gibt es für Gott? Sind die wirklich gleich?`,
    `Wäre ein Spaghettimonster, das zeitlos, immateriell und ungeschaffen ist, noch ein Spaghettimonster?`,
    `Erklärt die Teekanne irgendetwas, was wir sonst nicht erklären können?`,
    `Hast du die Argumente für Gott in ihrer stärksten Form geprüft, oder nur Karikaturen davon?`,
  ],
  avoid: [
    `Beleidigt reagieren oder das Spaghettimonster als „Gotteslästerung" bezeichnen – das bestätigt nur das Klischee. Mit Humor und Sachlichkeit antworten.`,
    `„Du kannst auch nicht beweisen, dass Gott nicht existiert." – Das ist genau das Argument, das Russell kritisiert. Lieber positive Gründe nennen.`,
    `Behaupten, die Teekannen-Analogie sei „dumm". Sie hat einen berechtigten Kern (Beweislast) – den sollte man anerkennen und dann zeigen, wo sie hinkt.`,
  ],
  concessions: [
    `Russells Grundsatz ist richtig: Dass man etwas nicht widerlegen kann, ist allein kein Grund, es zu glauben.`,
    `Viele Menschen glauben tatsächlich, ohne Gründe geprüft zu haben – auch unter Christen. Das ist eine berechtigte Anfrage an unsere Katechese.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'David Bentley Hart', work: 'The Experience of God: Being, Consciousness, Bliss', year: '2013', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Edward Feser', work: 'The Last Superstition', year: '2008', status: 'paraphrase' },
    { kind: 'gegner', author: 'Stephen Law', work: '„The Evil-God Challenge", Religious Studies 46', year: '2010', status: 'paraphrase' },
  ],
  difficulty: 1,
  tags: ['Russell', 'Teekanne', 'Spaghettimonster', 'Beweislast', 'klassischer Theismus'],
  related: [
    'atheismus/beweislast-mangel-an-glauben',
    'atheismus/ein-gott-weiter',
    'atheismus/wer-schuf-gott',
    'gottesbeweise/hoechstens-deismus',
    'auferstehung/legende-entwickelte-sich',
    'moral-und-gott/gut-ohne-gott',
  ],
};

export default claim;
