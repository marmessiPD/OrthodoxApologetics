import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'filioque',
  title: `„Der Heilige Geist geht auch vom Sohn aus (Filioque)."`,
  proponents: [
    { name: 'Augustinus', role: 'Bischof von Hippo (354–430)', work: 'De Trinitate XV,26,47' },
    { name: 'Thomas von Aquin', role: 'Kirchenlehrer', work: 'Summa Theologiae I, q. 36, a. 2; Contra errores Graecorum' },
    { name: 'Konzil von Florenz', role: 'Unionskonzil der lateinischen Kirche', work: 'Laetentur caeli (1439)' },
    { name: 'Katechismus der Katholischen Kirche', role: 'Lehrzusammenfassung', work: 'KKK 246–248' },
  ],
  steelman: `Jesus sagt: „Alles, was der Vater hat, das ist mein. Darum habe ich gesagt: Er wird’s von dem Meinen nehmen" (Joh 16,15). Der Geist heißt „Geist seines Sohnes" (Gal 4,6) und „Geist Christi" (Röm 8,9); der Sohn sendet ihn (Joh 15,26; 16,7) und haucht ihn den Jüngern ein (Joh 20,22). Wenn der Sohn alles hat, was der Vater hat, außer dem Vatersein, dann hat er auch Anteil daran, dass der Geist aus ihm hervorgeht. Sonst wären Sohn und Geist nicht voneinander unterschieden – denn in Gott unterscheiden sich die Personen nur durch ihre Ursprungsbeziehungen. Schon Augustinus und viele lateinische Väter, aber auch Alexandriner wie Kyrill sprechen davon, dass der Geist dem Sohn „eigen" ist und aus beiden hervorgeht. Das Filioque leugnet nicht den Vater als Ursprung: Der Geist geht „hauptsächlich" vom Vater aus und vom Vater und Sohn „wie aus einem Prinzip" (Florenz). Es schützt im Gegenteil die volle Gottheit des Sohnes gegen den Arianismus.`,
  biblical: {
    summary: `Christus sagt ausdrücklich, dass der Geist „**vom Vater ausgeht**" (Joh 15,26; griechisch *ekporeuetai*), und unterscheidet das davon, dass **er selbst** ihn **senden** wird. Die Schrift unterscheidet also zwischen dem ewigen **Ausgehen** (Ursprung) vom Vater und der zeitlichen **Sendung** durch den Sohn. Der Geist heißt „Geist des Sohnes" (Gal 4,6) und „Geist des Vaters" (Mt 10,20) – das zeigt seine Wesenseinheit mit beiden, nicht einen doppelten Ursprung. Joh 16,15 („er wird’s von dem Meinen nehmen") spricht vom Verkündigen dessen, was Christus gehört, nicht vom ewigen Hervorgang. Wer aus der Sendung durch den Sohn auf einen ewigen Ursprung aus dem Sohn schließt, müsste nach Lk 1,35 und Lk 4,18 („Der Geist des Herrn ist bei mir … er hat mich gesandt") auch schließen, dass der Sohn aus dem Geist hervorgeht.`,
    detail: `**Joh 15,26:** „Wenn aber der Tröster kommen wird, welchen **ich** euch **senden** werde vom Vater, der Geist der Wahrheit, der **vom Vater ausgeht** …" Zwei Verben, zwei Aussagen: senden (*pempsō*, Futur – ein künftiges Geschehen) und ausgehen (*ekporeuetai*, Präsens – eine bleibende Beziehung). Das Glaubensbekenntnis von 381 übernimmt genau dieses Verb: *to ek tou Patros ekporeuomenon*.

**Ökonomie und Theologie:** Die Väter unterscheiden zwischen Gottes Wirken in der Heilsgeschichte (Ökonomie) und seinem ewigen Sein (Theologie). In der Heilsgeschichte sendet der Sohn den Geist, der Geist führt den Sohn (Mt 4,1), der Geist überschattet Maria (Lk 1,35), der Geist ruht auf dem Sohn (Joh 1,32). Würde man jede Sendung in die Ewigkeit zurückprojizieren, entstünde ein Widerspruch.

**Gal 4,6 und Röm 8,9:** „Geist des Sohnes" und „Geist Christi" stehen neben „Geist Gottes" im selben Vers (Röm 8,9). Der Geist gehört dem Sohn, weil er mit ihm eines Wesens ist.`,
    sources: [
      { kind: 'bibel', work: 'Johannes', ref: '15,26', quote: `Wenn aber der Tröster kommen wird, welchen ich euch senden werde vom Vater, der Geist der Wahrheit, der vom Vater ausgeht, der wird zeugen von mir.`, translation: 'Luther 1912', status: 'verbatim', original: `ὃ παρὰ τοῦ πατρὸς ἐκπορεύεται` },
      { kind: 'bibel', work: 'Johannes', ref: '16,14–15', quote: `Derselbe wird mich verklären; denn von dem Meinen wird er's nehmen und euch verkündigen. Alles, was der Vater hat, das ist mein. Darum habe ich gesagt: Er wird's von dem Meinen nehmen und euch verkündigen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Matthäus', ref: '10,20', quote: `Denn ihr seid es nicht, die da reden, sondern eures Vaters Geist ist es, der durch euch redet.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Lukas', ref: '4,18', quote: `Der Geist des HERRN ist bei mir, darum daß er mich gesalbt hat; er hat mich gesandt, zu verkündigen das Evangelium den Armen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Galater', ref: '4,6', quote: `Weil ihr denn Kinder seid, hat Gott gesandt den Geist seines Sohnes in eure Herzen, der schreit: Abba, lieber Vater!`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche bekennt das Glaubensbekenntnis von Nizäa-Konstantinopel (381) **ohne** Filioque: „Wir glauben an den Heiligen Geist, den Herrn, den Lebendigmacher, der vom Vater ausgeht." Der **Vater** ist die einzige Quelle (Ursprung) der Gottheit, aus der der Sohn gezeugt wird und der Geist hervorgeht – die „Monarchie des Vaters" (Athanasius, Kappadokier, Kyrill). Der Geist ist dem Sohn **wesenseigen**, wird **durch** den Sohn gesandt und offenbart ihn; er ist „Geist des Sohnes". Die Einfügung des Filioque in das gemeinsame Bekenntnis durch den Westen widerspricht außerdem Kanon 7 des Konzils von Ephesus (431), dessen Vorsitz der heilige Kyrill führte.`,
    detail: `**Ephesus 431, Kanon 7:** „Niemand darf einen anderen Glauben vorbringen, schreiben oder zusammenstellen als den, der von den heiligen Vätern, die sich mit dem Heiligen Geist in Nizäa versammelt hatten, festgesetzt wurde." Für die koptische Kirche ist dieses Konzil eines der drei ökumenischen Konzilien.

**Geschichte der Einfügung:** Das Filioque taucht in Spanien auf (Synode von Toledo 589 – ob schon in den ursprünglichen Akten, ist umstritten), verbreitet sich im Frankenreich unter Karl dem Großen und wird in Rom erst 1014 unter Papst Benedikt VIII. auf Wunsch Kaiser Heinrichs II. in die Messe aufgenommen. Papst Leo III. hatte um 809/810 die Einfügung abgelehnt und nach dem Bericht des Liber Pontificalis das Bekenntnis ohne Filioque auf zwei silbernen Tafeln in Griechisch und Latein in St. Peter anbringen lassen.

**Kyrill und Athanasius:** Beide sprechen davon, dass der Geist dem Sohn „eigen" (*idion*) ist und „durch" ihn gegeben wird. Kyrill verteidigte gegen Theodoret, dass der Geist nicht „fremd" vom Sohn sei; er lehrte aber nicht, dass der Sohn Ursache des ewigen Hervorgangs ist. Diese alexandrinische Sprache ist eine Brücke: Sie betont die innige Gemeinschaft von Sohn und Geist, ohne die Monarchie des Vaters aufzugeben.

**Johannes von Damaskus** fasst zusammen: Wir sagen, dass der Geist vom Vater ist, und nennen ihn Geist des Vaters; wir sagen nicht, dass er vom Sohn ist, nennen ihn aber Geist des Sohnes (Expositio fidei I,8).`,
    sources: [
      { kind: 'konzil', work: 'Nizäno-Konstantinopolitanisches Glaubensbekenntnis', year: '381', quote: `Und an den Heiligen Geist, den Herrn, den Lebendigmacher, der vom Vater ausgeht, der mit dem Vater und dem Sohn zugleich angebetet und verherrlicht wird.`, original: `τὸ ἐκ τοῦ πατρὸς ἐκπορευόμενον`, translation: 'eigene Übersetzung', status: 'verbatim' },
      { kind: 'konzil', work: 'Konzil von Ephesus, Kanon 7', year: '431', quote: `Niemand darf einen anderen Glauben vorbringen, schreiben oder zusammenstellen als den, der von den heiligen Vätern, die sich mit dem Heiligen Geist in Nizäa versammelt hatten, festgesetzt wurde.`, original: `ἑτέραν πίστιν μηδενὶ ἐξεῖναι προφέρειν, ἤγουν συγγράφειν ἢ συντιθέναι`, translation: 'eigene Übersetzung nach NPNF II/14', status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Johannes von Damaskus', work: 'Darlegung des orthodoxen Glaubens', ref: 'I,8', status: 'paraphrase', quote: `Wir sagen, der Heilige Geist ist aus dem Vater, und nennen ihn Geist des Vaters; dass er aus dem Sohn sei, sagen wir nicht, wir nennen ihn aber Geist des Sohnes.` },
      { kind: 'sonstiges', work: 'Liber Pontificalis, Leben Leos III.', status: 'paraphrase', note: 'Bericht über zwei silberne Schilde mit dem Glaubensbekenntnis (ohne Filioque) in Griechisch und Latein in St. Peter.' },
    ],
  },
  quickAnswer: `Christus selbst sagt: Der Geist „geht vom Vater aus" (Joh 15,26) – und so bekennt es das Konzil von Konstantinopel 381, das wir mit allen alten Kirchen beten. Dass der Sohn den Geist **sendet**, ist etwas anderes als sein ewiger **Ursprung**. Der Westen hat das Filioque später ohne ökumenisches Konzil in das gemeinsame Bekenntnis eingefügt – Rom selbst erst 1014; Papst Leo III. hatte das noch abgelehnt. Wir bekennen das Bekenntnis so, wie die ungeteilte Kirche es formuliert hat.`,
  keyPoints: [
    `**Joh 15,26:** Der Geist „geht vom Vater aus"; der Sohn „sendet" ihn – Ursprung und Sendung sind verschieden.`,
    `**Das Bekenntnis von 381** sagt „der vom Vater ausgeht"; Ephesus 431 (Kanon 7) verbietet, einen anderen Glauben zu formulieren.`,
    `**Historisch spät und einseitig:** Toledo (589, umstritten), Frankenreich (8./9. Jh.), Rom erst 1014; Leo III. lehnte die Einfügung ab.`,
    `**Monarchie des Vaters:** Der Vater ist die einzige Quelle von Sohn und Geist; „alles, was der Vater hat, hat der Sohn – außer dem Vatersein".`,
    `**Brücke statt Mauer:** Die Alexandriner lehren, dass der Geist dem Sohn eigen ist und durch ihn gesandt wird. Heute beten auch Päpste das Bekenntnis auf Griechisch ohne Filioque.`,
  ],
  voices: [
    {
      person: 'athanasius',
      role: 'als Verteidiger der Gottheit des Geistes',
      text: `In seinen Briefen an Serapion von Thmuis verteidigt Athanasius die Gottheit des Heiligen Geistes. Der Geist ist nicht Geschöpf, sondern gehört zum Wesen Gottes; er ist dem Sohn „eigen", wie der Sohn dem Vater eigen ist, und wirkt untrennbar mit ihm. Zugleich bleibt für Athanasius der Vater die eine Quelle der Gottheit. Seine Sprache zeigt die alexandrinische Betonung der Einheit von Sohn und Geist – ohne den Vater als einzigen Ursprung aufzugeben.`,
      sources: [{ kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Briefe an Serapion über den Heiligen Geist', ref: 'I,19–25; III,1', year: 'um 358–360', status: 'paraphrase' }],
    },
    {
      person: 'gregor-nazianz',
      role: 'als „der Theologe" der Dreieinigkeit',
      text: `Gregor von Nazianz erklärte in seinen theologischen Reden, wodurch sich die drei Personen unterscheiden: Der Vater ist ungezeugt, der Sohn gezeugt, der Geist hervorgehend. Alles, was der Vater hat, gehört auch dem Sohn – außer der Ursächlichkeit. Gerade deshalb kann Joh 16,15 nicht bedeuten, dass der Sohn auch Ursprung des Geistes ist: Sonst müsste man auch die Vaterschaft auf den Sohn übertragen. Gregor prägte die Theologie des Konzils von Konstantinopel 381, das er eine Zeitlang leitete.`,
      sources: [{ kind: 'kirchenvater', author: 'Gregor von Nazianz', work: 'Theologische Reden (Orationes 27–31), bes. Or. 31', year: '380', status: 'paraphrase' }],
    },
    {
      person: 'kallistos-ware',
      role: 'als orthodoxer Dialogtheologe',
      text: `Ware nennt zwei Einwände der Orthodoxie: Erstens den kanonischen – der Westen hat das gemeinsame Bekenntnis ohne ökumenisches Konzil verändert. Zweitens den theologischen – die Formel „vom Vater und vom Sohn wie aus einem Prinzip" verwischt die Monarchie des Vaters. Zugleich erkennt er an, dass eine Formel wie „vom Vater durch den Sohn", die schon griechische Väter gebrauchten, eine Brücke zur lateinischen Tradition bilden kann; er selbst wurde im Lauf seines Lebens in dieser Frage versöhnlicher.`,
      sources: [{ kind: 'fachliteratur', author: 'Kallistos Ware', work: 'The Orthodox Church', year: '1963, überarb. 1993', status: 'paraphrase' }],
    },
    {
      person: 'kyrill-alexandrien',
      role: 'als Kirchenvater, auf den sich beide Seiten berufen',
      text: `Kyrill sagt in seinen trinitarischen Schriften, dass der Geist „aus beiden" bzw. „durch den Sohn" hervorströmt und dem Sohn wesenseigen ist. Katholische Theologen berufen sich darauf. Im Streit mit Theodoret über sein neuntes Anathema stellte Kyrill aber klar, dass er den Geist nicht als dem Sohn fremd betrachten wolle – nicht, dass er ihm einen zweiten Ursprung zuschreibe. Kyrill führte den Vorsitz in Ephesus, dessen siebter Kanon jede andere Glaubensformel verbietet.`,
      sources: [{ kind: 'kirchenvater', author: 'Kyrill von Alexandrien', work: 'Thesaurus; Briefe; Erklärung der zwölf Anathematismen', status: 'paraphrase', note: 'Fair: Kyrills Sprache steht der lateinischen näher als die der Kappadokier; die genaue Deutung ist zwischen Ost und West umstritten.' }],
    },
  ],
  dialog: [
    {
      id: 'alles-was-der-vater-hat',
      objection: `„Joh 16,15: ‚Alles, was der Vater hat, das ist mein.' Dazu gehört auch, dass der Geist von ihm ausgeht. Also geht der Geist auch vom Sohn aus."`,
      objectionBy: 'Thomas von Aquin (sinngemäß)',
      answer: `Wenn „alles" ausnahmslos gilt, dann hätte der Sohn auch das Vatersein – er würde sich selbst zeugen. Das sagt niemand. Die Väter erklären deshalb: Der Sohn hat alles, was der Vater hat, **außer** dem, was den Vater als Vater kennzeichnet – der Ursprung zu sein. Und der Zusammenhang von Joh 16,14–15 ist das Verkündigen: Der Geist nimmt von dem, was Christi ist, und verkündigt es uns.`,
      questionsBack: [`Hat der Sohn auch die Eigenschaft, ungezeugt zu sein? Wenn nicht – warum soll dann „alles" in Joh 16,15 das Hervorbringen des Geistes einschließen?`],
      followUps: [
        {
          id: 'sonst-sohn-und-geist-nicht-unterschieden',
          objection: `„Wenn der Geist nicht auch vom Sohn ausgeht, wodurch unterscheiden sich dann Sohn und Geist? Beide kämen gleich aus dem Vater."`,
          objectionBy: 'Thomas von Aquin',
          answer: `Sie unterscheiden sich durch die **Art** ihres Ursprungs: Der Sohn ist **gezeugt**, der Geist **geht hervor** – so lehren es die Kappadokier und Johannes von Damaskus. Worin genau der Unterschied zwischen Zeugung und Hervorgang besteht, nennt Gregor von Nazianz ein Geheimnis, das wir nicht ergründen. Die Schrift gibt uns die Worte; mehr müssen wir nicht wissen.`,
          followUps: [
            {
              id: 'durch-den-sohn-gleich-filioque',
              objection: `„Auch griechische Väter sagen ‚vom Vater **durch** den Sohn'. Maximus der Bekenner hat erklärt, das lateinische Filioque meine genau das. Dann ist es nur ein Wortstreit!"`,
              objectionBy: 'Katholischer Dialogtheologe',
              answer: `Wenn das Filioque nur „durch den Sohn" im Sinn einer ewigen Offenbarung oder Sendung meint und den Vater als einzigen Ursprung bestehen lässt, dann ist eine Verständigung möglich – das hat schon Maximus im 7. Jahrhundert angedeutet. Aber das Konzil von Florenz definierte den Hervorgang „aus dem Vater und dem Sohn wie aus einem Prinzip". Und das kanonische Problem bleibt: Das gemeinsame Bekenntnis wurde einseitig verändert.`,
              sources: [
                { kind: 'kirchenvater', author: 'Maximus der Bekenner', work: 'Brief an Marinus von Zypern', year: 'um 655', status: 'paraphrase', note: 'Die Römer, so Maximus, machten den Sohn nicht zur Ursache des Geistes, sondern wollten zeigen, dass der Geist durch den Sohn hervorgeht und mit ihm wesenseins ist.' },
                { kind: 'gegner', work: 'Konzil von Florenz, Laetentur caeli', year: '1439', status: 'paraphrase', quote: `Der Heilige Geist hat sein Wesen und Sein zugleich aus dem Vater und dem Sohn und geht von beiden ewig wie aus einem Prinzip und durch eine Hauchung hervor.` },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'konstantinopel-hat-auch-ergaenzt',
      objection: `„Konstantinopel 381 hat das Bekenntnis von Nizäa auch erweitert. Warum sollte die Kirche nicht wieder ergänzen dürfen? Ephesus Kanon 7 verbietet nur einen ‚anderen' Glauben, keine Erläuterung."`,
      objectionBy: 'Katholischer Apologet',
      answer: `Konstantinopel 381 war ein **ökumenisches Konzil**, das die ganze Kirche angenommen hat. Das Filioque wurde dagegen von regionalen Synoden im Westen eingefügt und in Rom erst 1014 übernommen – ohne Beteiligung der östlichen Kirchen. Selbst Papst Leo III. sah das so: Er hatte keine Einwände gegen die Lehre an sich, lehnte aber die Einfügung in das Bekenntnis ab und ließ den unveränderten Text in St. Peter anbringen.`,
      followUps: [
        {
          id: 'leo-iii-billigte-lehre',
          objection: `„Leo III. hat die Lehre des Filioque ausdrücklich gebilligt. Er hatte nur pastorale Bedenken."`,
          objectionBy: 'Katholischer Kirchenhistoriker',
          answer: `Das stimmt, und ich gebe es zu. Aber genau darin liegt unser Punkt: Ein Papst erkannte an, dass das gemeinsame Bekenntnis nicht einseitig geändert werden darf – selbst wenn man eine Lehre für wahr hält. Seine Nachfolger haben es 1014 trotzdem getan. Die Frage, wer das Bekenntnis der ganzen Kirche ändern darf, hängt mit der Frage des Papstprimats zusammen.`,
          followUps: [
            {
              id: 'paepste-beten-ohne-filioque',
              objection: `„Heute beten Päpste das Credo auf Griechisch ohne Filioque, und Rom hat 1995 erklärt, dass das Bekenntnis von 381 normativ ist. Das Problem ist doch gelöst."`,
              objectionBy: 'Katholischer Ökumeniker',
              answer: `Das sind wichtige, dankenswerte Schritte: Der Päpstliche Rat zur Förderung der Einheit der Christen erkannte 1995 an, dass das griechische *ekporeuesthai* den Ursprung allein aus dem Vater bezeichnet, und Päpste haben das Bekenntnis mit dem Ökumenischen Patriarchen ohne Filioque gesprochen. Gelöst ist es aber erst, wenn die lateinische Liturgie zum gemeinsamen Text zurückkehrt und Florenz entsprechend gedeutet wird. Bis dahin beten wir weiter das Bekenntnis der ungeteilten Kirche – und hoffen.`,
              sources: [
                { kind: 'gegner', author: 'Päpstlicher Rat zur Förderung der Einheit der Christen', work: 'Die griechische und die lateinische Tradition über den Hervorgang des Heiligen Geistes', year: '1995', status: 'paraphrase', note: 'Klarstellung: Der Vater ist die einzige trinitarische Ursache (Ursprung) von Sohn und Geist; das Bekenntnis von 381 hat normativen Wert.' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'geist-des-sohnes-gesandt',
      objection: `„Der Geist heißt ‚Geist seines Sohnes' (Gal 4,6), Jesus haucht ihn den Jüngern ein (Joh 20,22) und sendet ihn (Joh 16,7). Was in der Zeit geschieht, spiegelt die Ewigkeit."`,
      objectionBy: 'Katholischer Theologe',
      answer: `Wenn jede zeitliche Sendung den ewigen Ursprung spiegelt, dann müsste der Sohn auch aus dem Geist hervorgehen: Der Geist überschattet Maria (Lk 1,35), salbt Jesus und „sendet" ihn (Lk 4,18), führt ihn in die Wüste (Mt 4,1). Niemand zieht diesen Schluss. Die Väter unterscheiden deshalb Heilsgeschichte und ewiges Sein: Der Sohn sendet den Geist zu uns; der Geist geht ewig vom Vater aus.`,
      followUps: [
        {
          id: 'augustinus-principaliter',
          objection: `„Augustinus, der größte Vater des Westens, lehrte: Der Geist geht hauptsächlich (*principaliter*) vom Vater, aber auch vom Sohn aus. Wollt ihr ihn verwerfen?"`,
          objectionBy: 'Katholischer Apologet',
          answer: `Wir ehren Augustinus – und bemerken, dass auch er den Vater als „hauptsächlichen" Ursprung festhielt (De Trinitate XV,26,47). Aber er schrieb in einer anderen Sprache und ohne das Griechisch der Kappadokier gut zu kennen; seine trinitarischen Spekulationen sind im Osten nie zur Norm geworden. Für die koptische Kirche ist das ökumenische Bekenntnis maßgeblich, nicht die Theologie eines einzelnen Vaters in einer Frage, in der der Osten ihm nicht folgte.`,
          sources: [
            { kind: 'kirchenvater', author: 'Augustinus', work: 'De Trinitate', ref: 'XV,26,47', status: 'paraphrase', quote: `Der Heilige Geist geht hauptsächlich vom Vater aus – denn der Vater hat dem Sohn gegeben, dass der Geist auch von ihm ausgeht.` },
          ],
          questionsBack: [`Welcher östliche Vater vor dem 9. Jahrhundert hat die Einfügung des Filioque in das Glaubensbekenntnis gutgeheißen?`],
        },
      ],
    },
    {
      id: 'kyrill-lehrte-filioque',
      objection: `„Euer eigener Kyrill von Alexandrien sagt, der Geist sei dem Sohn ‚eigen' (*idion*), er gehe ‚aus beiden' hervor und ströme vom Sohn aus. Der größte Vater der Kopten lehrt also das Filioque."`,
      objectionBy: 'Erick Ybarra / Jimmy Akin',
      answer: `Kyrill betont, dass der Geist dem Sohn wesenhaft eigen ist – nicht fremd, sondern desselben Wesens – und dass er durch den Sohn gesandt und mitgeteilt wird. Als Theodoret ihm vorwarf, er lasse den Geist sein Dasein vom Sohn haben, antwortete Kyrill: Der Geist geht von Gott dem Vater aus, ist aber dem Sohn nicht fremd. Der Vater bleibt der eine Ursprung; Kyrills Formeln sprechen von Wesensgleichheit und Sendung, nicht von einer zweiten Ursache.`,
      detail: `Gib ehrlich zu: Kyrills Sprache („aus dem Vater und dem Sohn", „vom Sohn ausströmend") steht der lateinischen Ausdrucksweise nahe und wird von katholischen Theologen mit gutem Grund angeführt. Entscheidend ist, wie Kyrill selbst sich erklärte, als er auf die Frage der Ursache angesprochen wurde – und da hält er am Vater als Quelle fest. Kein Satz Kyrills rechtfertigt zudem eine Änderung des gemeinsamen Glaubensbekenntnisses, das er selbst unverändert bekannte.`,
      voices: [
        {
          person: 'kyrill-alexandrien',
          role: 'als Lehrer der Dreieinigkeit',
          text: `Kyrill verteidigt gegen die Pneumatomachen und gegen Nestorius, dass der Geist nicht ein Geschöpf und nicht ein fremdes Wesen ist, sondern der Geist des Sohnes, durch den Christus die Seinen heiligt. In seiner Antwort auf Theodorets Kritik am neunten Anathematismus stellt er klar, dass der Geist aus dem Vater hervorgeht und dem Sohn eigen ist, ohne dass damit dem Sohn die Rolle der Ursache des Geistes zugeschrieben wird.`,
          sources: [
            { kind: 'kirchenvater', author: 'Kyrill von Alexandrien', work: 'Thesaurus de sancta et consubstantiali Trinitate', ref: '34', year: 'vor 429', status: 'paraphrase' },
            { kind: 'kirchenvater', author: 'Kyrill von Alexandrien', work: 'Verteidigung der zwölf Anathematismen gegen Theodoret', ref: 'zum 9. Anathematismus', year: '431', status: 'paraphrase' },
          ],
        },
      ],
      followUps: [
        {
          id: 'florenz-ein-prinzip',
          objection: `„Das Konzil von Florenz (1439) hat geklärt: Vater und Sohn sind **ein** Prinzip des Geistes, und das griechische ‚durch den Sohn' meint dasselbe wie das lateinische ‚aus dem Sohn'. Die Griechen haben das damals unterschrieben."`,
          objectionBy: 'Erick Ybarra',
          answer: `Die Union von Florenz wurde von den Gläubigen und den Synoden des Ostens bald danach verworfen; Markus von Ephesus verweigerte die Unterschrift. Von der koptischen Kirche unterschrieb 1442 nur eine kleine Delegation ohne Auftrag ihres Synods. Inhaltlich löscht die Gleichsetzung von „durch" und „aus" gerade den Unterschied, auf den die Väter Wert legten: Der Vater allein ist Ursprung (*aitia*) von Sohn und Geist.`,
          followUps: [
            {
              id: 'monarchie-gewahrt',
              objection: `„Die katholische Lehre wahrt die Monarchie des Vaters: Er ist die Quelle ohne Ursprung, und der Sohn empfängt vom Vater selbst, dass der Geist auch aus ihm hervorgeht. Es gibt also keine zwei Ursachen."`,
              objectionBy: 'Trent Horn / katholische Dogmatik',
              answer: `Diese Formulierung ist besser als manche frühere, und wir würdigen sie. Aber wenn der Sohn – wenn auch empfangend – Mit-Ursache der Hypostase des Geistes ist, dann teilen Vater und Sohn die Eigenschaft, Ursache zu sein. Gregor der Theologe sagt dagegen: Alles, was der Vater hat, gehört dem Sohn – **außer der Ursächlichkeit**. Die persönlichen Eigenschaften (Ungezeugtsein und Ursprungsein beim Vater, Gezeugtsein beim Sohn, Hervorgehen beim Geist) sind nicht austauschbar.`,
              voices: [
                {
                  person: 'gregor-nazianz',
                  role: 'als Theologe der Dreieinigkeit',
                  text: `Gregor von Nazianz betont, dass Vater, Sohn und Geist das eine göttliche Wesen ganz gemeinsam haben, sich aber durch ihre Ursprungsbeziehungen unterscheiden. Der Vater ist der Ursprung, der Sohn gezeugt, der Geist hervorgehend. Alles, was des Vaters ist, ist auch des Sohnes – mit Ausnahme dessen, dass der Vater Ursache ist.`,
                  sources: [{ kind: 'kirchenvater', author: 'Gregor von Nazianz', work: 'Reden (Orationes)', ref: '34,10', year: 'um 380', status: 'paraphrase', original: `πλὴν τῆς αἰτίας` }],
                },
              ],
              followUps: [
                {
                  id: 'warum-so-wichtig',
                  objection: `„Ist das nicht ein rein akademischer Streit? Was hat ein einfacher koptischer Gläubiger davon?"`,
                  objectionBy: 'Katholischer Ökumeniker',
                  answer: `Es geht um zwei sehr praktische Dinge. Erstens um das Bild Gottes: Der Vater ist die eine Quelle der Liebe, aus der Sohn und Geist hervorgehen – Gott ist Gemeinschaft von Personen, nicht ein Wesen, das etwas „produziert". Zweitens um das gemeinsame Bekenntnis: Wenn ein Teil der Kirche das Credo der ganzen Kirche einseitig ändert, ist die Frage berührt, wer in der Kirche entscheidet. Deshalb hängt das Filioque eng mit der Frage des Papstprimats zusammen.`,
                  voices: [
                    {
                      person: 'kallistos-ware',
                      role: 'als orthodoxer Theologe und Ökumeniker',
                      text: `Ware beschreibt den Filioque-Streit als doppelten Einwand: einen theologischen, weil die Monarchie des Vaters verdunkelt werde, und einen kirchlichen, weil ein Teil der Kirche das gemeinsame Bekenntnis ohne ökumenisches Konzil verändert habe. Er hält eine Verständigung über das „durch den Sohn" für möglich, wenn die Ursprünglichkeit des Vaters klar bleibt.`,
                      sources: [{ kind: 'fachliteratur', author: 'Kallistos Ware', work: 'The Orthodox Church', year: '1963, Neuausgabe 1993', status: 'paraphrase' }],
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
      id: 'toledo-gegen-arianer',
      objection: `„Das Filioque wurde in Spanien (Toledo 589) eingefügt, um gegen die Arianer die volle Gottheit des Sohnes zu betonen. Die Absicht war orthodox – warum dann der Streit?"`,
      objectionBy: 'Katholischer Kirchenhistoriker',
      answer: `Die gute Absicht erkennen wir an. Aber das Heilmittel schuf ein neues Problem: Das gemeinsame Bekenntnis wurde regional geändert, nicht durch ein ökumenisches Konzil. Und es war unnötig: Das Nizänum bekennt die Gottheit des Sohnes bereits mit dem *homoousios*, und der Osten hat den Arianismus mit Athanasius und den Kappadokiern ohne Filioque überwunden.`,
      followUps: [
        {
          id: 'jede-tradition-eigene-sprache',
          objection: `„Ihr Kopten verlangt, dass man eure Formel ‚eine Natur' als rechtgläubig anerkennt, obwohl sie anders klingt als Chalcedon. Dann gesteht dem Westen auch seine Sprache zu – das Filioque ist nur die lateinische Ausdrucksweise desselben Glaubens."`,
          objectionBy: 'Erick Ybarra',
          answer: `Ein fairer Vergleich, den wir ernst nehmen: Unterschiedliche Terminologie kann denselben Glauben ausdrücken – das haben Kopten und östliche Orthodoxe 1989/1990 für die Christologie festgestellt. Aber es gibt einen Unterschied: Die Kopten haben „eine Natur" nie in das gemeinsame Bekenntnis von Nizäa-Konstantinopel eingefügt. Ob das Filioque als theologische Meinung rechtgläubig verstanden werden kann, ist eine Frage für den Dialog; seine Einfügung in das Credo der ganzen Kirche bleibt ein einseitiger Akt.`,
          questionsBack: [`Wärst du einverstanden, wenn die Kopten „eine fleischgewordene Natur" in das gemeinsame Glaubensbekenntnis einfügten?`],
          followUps: [
            {
              id: 'lateinische-vaeter-vor-589',
              objection: `„Schon vor Toledo lehrten Ambrosius und Augustinus, dass der Geist vom Vater und vom Sohn ausgeht. Die westliche Tradition ist alt und ehrwürdig."`,
              objectionBy: 'Jimmy Akin',
              answer: `Das stimmt, und wir geben es zu: Die lateinische Theologie kennt diese Ausdrucksweise seit dem 4. Jahrhundert. Aber erstens als theologische Lehre, nicht als Bekenntnistext. Zweitens ist das lateinische *procedere* weiter als das griechische *ekporeuesthai*, das den Ursprung aus dem Vater allein meint (Joh 15,26) – das hat Rom selbst 1995 anerkannt. Drittens hat der Osten diese Lehre nie als gemeinsamen Glauben übernommen.`,
              followUps: [
                {
                  id: 'dann-werdet-katholisch',
                  objection: `„Wenn du zugibst, dass das Filioque rechtgläubig verstanden werden kann – warum tretet ihr dann nicht in Gemeinschaft mit Rom, wie es die koptisch-katholische Kirche getan hat?"`,
                  objectionBy: 'Katholischer Apologet',
                  answer: `Weil das Filioque nicht das Haupthindernis ist. Die tiefere Frage ist die universale Rechtsgewalt und Unfehlbarkeit des Papstes, dazu Lehren wie die Unbefleckte Empfängnis und das Fegefeuer. Die koptisch-katholischen Christen sind unsere Geschwister, aber die Gründung von Unionskirchen ist kein Weg zur Einheit – das haben Katholiken und östliche Orthodoxe in der Erklärung von Balamand (1993) selbst festgestellt. Einheit wächst im Dialog in Wahrheit und Liebe, wie ihn Papst Schenuda III. und Papst Paul VI. 1973 begonnen haben.`,
                  sources: [
                    { kind: 'konzil', work: 'Gemeinsame Internationale Kommission für den theologischen Dialog zwischen der römisch-katholischen und der orthodoxen Kirche, Erklärung von Balamand', year: '1993', status: 'paraphrase', note: 'Der „Uniatismus" wird als Methode der Einheitssuche für die Gegenwart abgelehnt.' },
                    { kind: 'konzil', work: 'Gemeinsame Erklärung von Papst Paul VI. und Papst Schenuda III.', year: '10. Mai 1973', status: 'paraphrase', note: 'Gemeinsames christologisches Bekenntnis und Beginn des offiziellen Dialogs.' },
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
    `Warum benutzt Jesus in Joh 15,26 für sich selbst das Verb „senden", für den Vater aber „ausgehen"?`,
    `Welches ökumenische Konzil hat das Filioque in das Bekenntnis eingefügt?`,
    `Warum ließ Papst Leo III. das Bekenntnis ohne Filioque auf Silbertafeln anbringen?`,
    `Wenn zeitliche Sendung ewigen Ursprung spiegelt – geht dann der Sohn auch aus dem Geist hervor (Lk 4,18)?`,
  ],
  avoid: [
    `Nicht behaupten, Katholiken leugneten den Vater als Ursprung oder lehrten zwei Götter. Sie betonen selbst „ein Prinzip".`,
    `Nicht so tun, als hätten alle östlichen Väter jede Aussage über den Sohn und den Geist vermieden. Kyrill und Athanasius sagen, dass der Geist dem Sohn eigen ist und durch ihn gegeben wird.`,
    `Das Filioque nicht zur Ursache aller Übel der Kirchengeschichte machen. Es ist eine ernste, aber lösbare Frage.`,
  ],
  concessions: [
    `Die alexandrinischen Väter (Athanasius, Kyrill) sprechen vom Geist als dem Sohn „eigen" und „durch" ihn hervorströmend; ihre Sprache steht der lateinischen näher als oft behauptet.`,
    `Die katholische Kirche hat in den letzten Jahrzehnten bedeutende Schritte getan (Klarstellung 1995, Credo ohne Filioque in ökumenischen Gottesdiensten).`,
    `Die Filioque-Frage war historisch vor allem ein Streit zwischen Rom und Konstantinopel; die koptische Kirche stand in ihm, aber nicht in seinem Zentrum.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'A. Edward Siecienski', work: 'The Filioque: History of a Doctrinal Controversy', year: '2010', status: 'paraphrase', note: 'Ausgewogene, quellennahe Gesamtdarstellung.' },
    { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Briefe an Serapion über den Heiligen Geist', status: 'paraphrase' },
    { kind: 'kirchenvater', author: 'Photios von Konstantinopel', work: 'Mystagogie des Heiligen Geistes', year: 'um 886', status: 'paraphrase', note: 'Klassische östliche Kritik am Filioque.' },
  ],
  difficulty: 3,
  tags: ['Filioque', 'Trinität', 'Heiliger Geist', 'Glaubensbekenntnis', 'Ephesus', 'Ost-West'],
  related: ['katholizismus/papstprimat-unfehlbarkeit', 'islam-trinitaet/trinitaet-unlogisch', 'antitrinitarier'],
};

export default claim;
