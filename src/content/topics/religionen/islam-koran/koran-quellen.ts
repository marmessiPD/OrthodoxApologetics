import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'koran-quellen',
  title: `„Der Koran kann nicht aus menschlichen Quellen stammen."`,
  proponents: [
    { name: 'Zakir Naik', role: 'Islamischer Prediger, Mumbai', work: 'Vorträge über die Einzigartigkeit des Korans' },
    { name: 'Hamza Andreas Tzortzis', role: 'Islamischer Autor', work: 'The Divine Reality (2016)' },
    { name: 'Mohammed Hijab', role: 'Islamischer Debattierer, London', work: 'Debatten über die Herkunft des Korans' },
  ],
  steelman: `„Mohammed war ein Analphabet in Mekka, ohne Bibliotheken, ohne Kenntnis von Hebräisch, Griechisch oder Syrisch. Und doch erzählt der Koran die Geschichten der Propheten mit Einzelheiten, die er nicht kennen konnte – der Koran sagt selbst: ‚Das gehört zu den Nachrichten des Verborgenen, die Wir dir offenbaren; du warst nicht bei ihnen' (3:44; 11:49; 12:102). Den Vorwurf, ein Mensch lehre ihn, widerlegt der Koran schon zu Lebzeiten: ‚Die Sprache dessen, auf den sie anspielen, ist fremd, dies aber ist klare arabische Sprache' (16:103). Wo der Koran Erzählungen enthält, die es auch bei Juden und Christen gibt, offenbart Gott den wahren Kern, der dort nur entstellt überliefert war."`,
  biblical: {
    summary: `Zahlreiche Erzählungen des Korans haben enge Parallelen in **nachbiblischer** jüdischer und christlicher Literatur, die im 7. Jahrhundert in Arabien und seiner Umgebung mündlich und schriftlich verbreitet war – nicht in der Bibel selbst, sondern in späteren Legenden und Auslegungen. Beispiele: Jesus formt Vögel aus Ton (3:49; 5:110) wie im **Kindheitsevangelium des Thomas**; Maria wächst im Tempel auf und wird wunderbar versorgt (3:37) wie im **Protevangelium des Jakobus**; das Kind Jesus spricht in der Wiege (19:29–33) wie im **arabischen Kindheitsevangelium**; der Satz über die Tötung eines Menschen als Tötung der ganzen Menschheit (5:32) steht wörtlich ähnlich in der **Mischna (Sanhedrin 4,5)**; Abraham zerschlägt die Götzen und wird ins Feuer geworfen (21:51–70) wie im **Midrasch Genesis Rabba 38**; die Siebenschläfer (18:9–26) und Dhu l-Qarnain (18:83–98) entsprechen christlichen Legenden.`,
    detail: `**Weitere Beispiele:**
- **Der über Israel gehaltene Berg** (2:63; 7:171) – Babylonischer Talmud, Schabbat 88a: Gott hielt den Berg wie eine Wanne über das Volk.
- **Palme und Quelle bei der Geburt Jesu** (19:23–26) – ähnlich im Pseudo-Matthäus-Evangelium (Palme und Quelle auf der Flucht nach Ägypten).
- **Dhu l-Qarnain** (18:83–98) – die syrische Alexanderlegende (um 630) erzählt von Alexanders Reise zum Ort des Sonnenuntergangs und seinem eisernen Tor gegen Gog und Magog.
- **Kain und der Rabe** (5:31) – jüdische Auslegungstradition (u. a. Pirqe de-Rabbi Eliezer 21; die Datierung dieser Quelle ist später und umstritten).

**Wichtig:** Viele dieser Quellen sind keine historischen Berichte, sondern fromme Legenden – das Kindheitsevangelium des Thomas etwa erzählt auch, wie der junge Jesus Kinder mit einem Fluch tötet. Wenn der Koran Episoden aus solchen Texten als Geschichte wiedergibt, ist die naheliegende Erklärung Abhängigkeit, nicht Offenbarung.`,
    sources: [
      { kind: 'koran', work: 'Sure 3 (Al \'Imran)', ref: '3:49', quote: `Ich erschaffe euch aus Ton etwas wie die Gestalt eines Vogels, dann hauche ich hinein, und es wird ein Vogel mit Allahs Erlaubnis.`, original: `annī akhluqu lakum mina ṭ-ṭīni ka-hayʾati ṭ-ṭayri fa-anfukhu fīhi`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/3/49' },
      { kind: 'sonstiges', work: 'Kindheitsevangelium des Thomas', ref: '2', year: '2. Jh. (Grundbestand)', quote: `Der fünfjährige Jesus formt am Sabbat zwölf Sperlinge aus Lehm, klatscht in die Hände, und sie fliegen davon.`, status: 'paraphrase' },
      { kind: 'koran', work: 'Sure 5 (al-Ma\'ida)', ref: '5:32', quote: `Deshalb haben Wir den Kindern Israels vorgeschrieben: Wer einen Menschen tötet – nicht für einen Menschen oder für Unheil im Land –, ist, als hätte er alle Menschen getötet; und wer einen Menschen am Leben erhält, ist, als hätte er alle Menschen am Leben erhalten.`, original: `min ajli dhālika katabnā ʿalā banī isrāʾīla`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/5/32' },
      { kind: 'juedisch', work: 'Mischna, Traktat Sanhedrin', ref: '4,5', year: 'Redaktion um 200 n. Chr.', quote: `Wer eine einzige Seele vernichtet, dem rechnet es die Schrift an, als hätte er eine ganze Welt vernichtet; wer eine einzige Seele erhält, als hätte er eine ganze Welt erhalten – abgeleitet aus dem Plural „Blute" in Gen 4,10.`, status: 'paraphrase' },
      { kind: 'juedisch', work: 'Genesis Rabba', ref: '38,13', year: 'um 400–450', quote: `Abraham zerschlägt die Götzen seines Vaters, legt den Stock in die Hand des größten und wird von Nimrod ins Feuer geworfen.`, status: 'paraphrase' },
      { kind: 'sonstiges', work: 'Protevangelium des Jakobus', ref: '7–8', year: '2. Jh.', quote: `Maria wird als Kind in den Tempel gebracht und dort „wie eine Taube" von der Hand eines Engels ernährt.`, status: 'paraphrase' },
    ],
  },
  church: {
    summary: `Die Kirche hat die apokryphen Kindheitsevangelien nie als Schrift anerkannt; manche ihrer Motive gingen in die Frömmigkeit ein (etwa der Tempelgang Marias als Fest), aber stets als Überlieferung, nicht als inspirierte Geschichtsschreibung. Christliche Autoren unter islamischer Herrschaft bemerkten früh, dass der Koran christliche und jüdische Überlieferungen aufnimmt; Johannes von Damaskus schreibt, Mohammed sei mit dem Alten und Neuen Testament in Berührung gekommen und habe mit einem arianischen Mönch gesprochen – eine polemische, aber aufschlussreiche frühe Einschätzung.`,
    sources: [
      { kind: 'kirchenvater', author: 'Johannes von Damaskus', work: 'Über die Häresien', ref: 'Kap. 100', year: 'um 740', quote: `Mohammed sei zufällig mit dem Alten und Neuen Testament in Berührung gekommen und habe vermutlich mit einem arianischen Mönch Umgang gehabt.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Die historisch-kritische Koranforschung (Reynolds, Griffith, Neuwirth, Zellentin u. a.) liest den Koran heute als Text, der im lebendigen Gespräch mit jüdischen und christlichen Traditionen der Spätantike steht – mit Bibel, Midrasch, syrischer Predigt und Apokryphen. Umstritten ist das *Wie*: direkte Kenntnis von Texten, mündliche Vermittlung oder ein gemeinsames religiöses Milieu. Muslimische Gelehrte deuten die Parallelen meist so, dass Gott die wahren Ereignisse offenbarte, die in den anderen Traditionen nur verzerrt erhalten waren.`,
    sources: [
      { kind: 'fachliteratur', author: 'Gabriel Said Reynolds', work: 'The Qur\'an and Its Biblical Subtext', year: '2010', quote: `Der Koran setzt biblische und nachbiblische Traditionen voraus und spielt auf sie an.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Kevin van Bladel', work: 'The Alexander Legend in the Qur\'an 18:83–102, in: G. S. Reynolds (Hg.), The Qur\'an in Its Historical Context', year: '2008', quote: `Enge Übereinstimmungen zwischen Sure 18,83–102 und der syrischen Alexanderlegende.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Viele Erzählungen des Korans finden sich fast gleich in jüdischen und christlichen Legenden, die damals im Umlauf waren – Jesus formt Tonvögel wie im Kindheitsevangelium des Thomas, 5:32 steht fast wörtlich in der Mischna, Abraham und die Götzen stammen aus einem Midrasch. Man muss dafür nicht lesen können; diese Geschichten wurden erzählt. Und 16:103 zeigt, dass schon Zeitgenossen fragten, wer ihn lehrt.`,
  keyPoints: [
    `**Parallelen zu Legenden, nicht zur Bibel:** Kindheitsevangelium des Thomas, Protevangelium des Jakobus, Midrasch, Talmud, syrische Alexanderlegende.`,
    `**5:32 = Mischna Sanhedrin 4,5:** Der Koran gibt eine rabbinische Auslegung als göttliche Vorschrift an die Kinder Israels wieder.`,
    `**Mündliche Verbreitung:** Juden in Medina, Christen in Arabien, Handelsreisen nach Syrien, Waraqa ibn Naufal (Bukhari 3) – man brauchte keine Bibliothek.`,
    `**Legenden als Geschichte:** Wenn der Koran Episoden aus offenkundig legendären Texten übernimmt, spricht das für Abhängigkeit.`,
    `**Zeitgenossen bemerkten es:** „Fabeln der Früheren" (25:5), „ein Mensch lehrt ihn" (16:103).`,
  ],
  voices: [
    {
      person: 'gabriel-reynolds',
      role: 'als Koranforscher (Notre Dame)',
      text: `Reynolds liest den Koran als Text, der ein mit biblischen Geschichten vertrautes Publikum voraussetzt und auf jüdische und christliche Auslegungen anspielt. Viele Rätsel des Korans lösen sich, wenn man die syrisch-christliche Predigt und den Midrasch kennt. Für ihn ist der Koran ein Teil der religiösen Literatur der Spätantike – ein Befund, der der Behauptung, er sei ohne jede menschliche Vorlage entstanden, entgegensteht.`,
      sources: [
        { kind: 'fachliteratur', author: 'Gabriel Said Reynolds', work: 'The Qur\'an and the Bible: Text and Commentary', year: '2018', quote: `Vers-für-Vers-Kommentar mit biblischen und nachbiblischen Parallelen.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'jay-smith',
      role: 'als Debattierer über die Ursprünge des Korans',
      text: `Jay Smith stellt in Debatten die Parallelen zwischen Koran und Apokryphen nebeneinander und fragt, warum der Koran ausgerechnet Episoden aus Texten wiedergibt, die schon die alte Kirche als legendär ansah. Seine Pointe: Ein Gott, der die „wahren Ereignisse" offenbart, würde nicht gerade jene Details bestätigen, die erkennbar aus späten Volkserzählungen stammen.`,
    },
    {
      person: 'johannes-damaskus',
      role: 'als frühester christlicher Beobachter des Islam',
      text: `Johannes von Damaskus vermutete schon im 8. Jahrhundert, dass Mohammed mit biblischen Überlieferungen in Berührung kam und durch Gespräche mit einem Mönch beeinflusst wurde. Interessanterweise erzählt auch die islamische Überlieferung von einem christlichen Mönch (Bahira), der dem jungen Mohammed auf einer Handelsreise nach Syrien begegnete. Beide Seiten bezeugen also, dass es Kontakte zu Christen gab.`,
      sources: [
        { kind: 'kirchenvater', author: 'Johannes von Damaskus', work: 'Über die Häresien', ref: 'Kap. 100', year: 'um 740', quote: `Mohammed habe Altes und Neues Testament kennengelernt und mit einem Mönch verkehrt.`, status: 'paraphrase' },
        { kind: 'hadith', author: 'Ibn Ishaq (überliefert von Ibn Hisham)', work: 'Sirat Rasul Allah', year: '8. Jh.', quote: `Erzählung vom Mönch Bahira, der den jungen Mohammed auf einer Karawanenreise nach Syrien erkennt.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'zakaria-botros',
      role: 'als koptischer Priester und Kenner der Quellen',
      text: `Zakaria Botros hat in seinen Sendungen die Parallelen zwischen Koranerzählungen und jüdisch-christlichen Legenden nebeneinandergelegt, um Muslime zum eigenen Nachdenken zu bewegen. Er verweist auf die Bekanntschaft Mohammeds mit Christen wie Waraqa ibn Naufal, der nach al-Bukhari aus dem Evangelium abschrieb.`,
      sources: [
        { kind: 'hadith', work: 'Sahih al-Bukhari', ref: '3', quote: `Waraqa ibn Naufal, ein Christ, schrieb aus dem Injil auf Hebräisch ab, so viel Allah wollte.`, status: 'paraphrase', url: 'https://sunnah.com/bukhari:3' },
      ],
    },
  ],
  dialog: [
    {
      id: 'gott-offenbarte-wahren-kern',
      objection: `Ähnlichkeit beweist kein Abschreiben. Gott hat die wahren Ereignisse offenbart, die in den jüdischen und christlichen Legenden nur verzerrt erhalten waren.`,
      objectionBy: 'Mohammed Hijab',
      answer: `Das ist grundsätzlich denkbar. Aber dann müsstest du erklären, warum Gott gerade Episoden aus Texten bestätigt, die erkennbar späte Legenden sind. Das Kindheitsevangelium des Thomas erzählt auch, wie der junge Jesus andere Kinder mit einem Fluch tötet – es ist fromme Fantasie des 2. Jahrhunderts. Wenn der Koran ausgerechnet daraus die Tonvögel übernimmt, ist Abhängigkeit die einfachere Erklärung.`,
      questionsBack: [
        `Hältst du das Kindheitsevangelium des Thomas insgesamt für einen historischen Bericht?`,
      ],
      followUps: [
        {
          id: 'analphabet-keine-buecher',
          objection: `Wie hätte ein Analphabet in Mekka Texte auf Griechisch, Syrisch oder Hebräisch lesen sollen?`,
          objectionBy: 'Zakir Naik',
          answer: `Niemand muss lesen können, um Geschichten zu hören. Diese Erzählungen wurden in christlichen und jüdischen Gemeinden mündlich weitergegeben – in Gottesdiensten, Predigten und am Lagerfeuer der Karawanen. In Medina lebten jüdische Stämme, Mohammed reiste nach Syrien, und mit Waraqa ibn Naufal hatte seine Familie einen christlichen Verwandten, der nach al-Bukhari aus dem Evangelium abschrieb.`,
          followUps: [
            {
              id: 'sprache-ist-fremd-16-103',
              objection: `16:103 widerlegt das schon: „Die Sprache dessen, auf den sie anspielen, ist fremd; dies aber ist klare arabische Sprache."`,
              objectionBy: 'Zakir Naik',
              answer: `Der Vers bestätigt zunächst, dass Zeitgenossen einen menschlichen Lehrer vermuteten. Seine Antwort betrifft die *Sprache*, nicht den *Inhalt*: Ein Mensch mit fremder Muttersprache kann sehr wohl Geschichten erzählen, die ein anderer in schönes Arabisch fasst. Das Argument zeigt also nicht, dass der Inhalt ohne menschliche Vermittlung entstand.`,
              sources: [
                { kind: 'koran', work: 'Sure 16 (an-Nahl)', ref: '16:103', quote: `Und Wir wissen wohl, dass sie sagen: „Es lehrt ihn nur ein Mensch." Die Sprache dessen, auf den sie anspielen, ist fremd; dies aber ist klare arabische Sprache.`, original: `innamā yuʿallimuhu basharun`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/16/103' },
              ],
              followUps: [
                {
                  id: 'unterschiede-sind-korrekturen',
                  objection: `Wenn der Koran abgeschrieben hätte, warum unterscheidet er sich dann in so vielen Details von Bibel und Midrasch? Er *korrigiert* die früheren Berichte – das spricht für einen göttlichen Autor, nicht für einen Kopisten.`,
                  objectionBy: 'Hamza Andreas Tzortzis',
                  answer: `Abweichungen sind genau das, was man erwartet, wenn Geschichten mündlich weitererzählt und in ein neues theologisches Gesamtbild eingefügt werden – niemand behauptet ein wörtliches Abschreiben. Ob eine Abweichung eine „Korrektur" ist, müsste man unabhängig zeigen. Manche Abweichungen sehen eher nach Verschmelzung verschiedener Stoffe aus: So erscheint Haman im Koran als Minister des Pharao, der einen hohen Turm bauen soll (28:38; 40:36–37) – in der Bibel ist Haman ein persischer Beamter aus dem Buch Ester, Jahrhunderte nach Mose, und der Turmbau erinnert an Babel.`,
                  detail: `Muslimische Apologeten haben versucht, einen ägyptischen Namen „Haman" in Hieroglyphen nachzuweisen; diese Deutung ist in der Ägyptologie nicht anerkannt. Gabriel Said Reynolds zeigt, dass der Koran biblische Gestalten oft in einem typologischen Muster erzählt: Der Prophet wird verworfen, die Ungläubigen werden bestraft, der Gesandte gerettet. Die Unterschiede zur Bibel erklären sich weithin aus diesem Muster – also aus der Theologie des Korans, nicht aus besserem historischem Wissen.`,
                  voices: [
                    {
                      person: 'gabriel-reynolds',
                      role: 'als Islamwissenschaftler zur Bibel im Koran',
                      text: `Reynolds liest den Koran im Gespräch mit Bibel, Midrasch und syrisch-christlicher Literatur. Er zeigt, dass der Koran biblische Stoffe nicht nacherzählt, sondern in Anspielungen aufgreift und neu deutet – mit einer eigenen „Prophetologie". Die Unterschiede zur Bibel sind deshalb meist homiletisch, nicht historisch zu erklären.`,
                      sources: [
                        { kind: 'fachliteratur', author: 'Gabriel Said Reynolds', work: 'The Qur\'an and Its Biblical Subtext', year: '2010', quote: `Der Koran greift biblische und nachbiblische Stoffe auf und deutet sie homiletisch neu.`, status: 'paraphrase' },
                      ],
                    },
                  ],
                  sources: [
                    { kind: 'koran', work: 'Sure 28 (al-Qasas)', ref: '28:38', quote: `Und Pharao sagte: … So entfache mir, Haman, ein Feuer über dem Lehm und mache mir einen Hochbau, vielleicht steige ich zum Gott Moses empor.`, translation: 'Bubenheim/Elyas (sinngemäß)', status: 'paraphrase', url: 'https://quran.com/28/38' },
                    { kind: 'bibel', work: 'Ester', ref: '3,1', quote: `Nach diesen Geschichten machte der König Ahasveros Haman groß, den Sohn Hammedathas, den Agagiter.`, translation: 'Luther 1912', status: 'paraphrase' },
                  ],
                  questionsBack: [
                    `Woran erkennst du, ob eine Abweichung eine göttliche Korrektur ist – und nicht eine Verschmelzung verschiedener Geschichten?`,
                  ],
                },
              ],
            },
            {
              id: 'waraqa-starb-frueh',
              objection: `Waraqa starb kurz nach der ersten Offenbarung – das steht im selben Hadith (Sahih al-Bukhari 3). Er kann gar nicht Mohammeds Quelle gewesen sein.`,
              objectionBy: 'Yasir Qadhi',
              answer: `Einverstanden – ich behaupte nicht, Waraqa sei „die Quelle" gewesen. Mein Punkt ist ein anderer: Biblische und nachbiblische Erzählstoffe waren in Mohammeds Umfeld lebendig. Waraqa ist nur ein Zeichen dafür. Dazu kommen die jüdischen Stämme Medinas (Qainuqa', Nadir, Quraiza), die christliche Delegation aus Nadschran, die Handelsreisen nach Syrien, die Christen Abessiniens, zu denen die ersten Muslime flohen. Erzählstoffe brauchen keinen einzelnen Lehrer, sondern ein Umfeld – und das war vorhanden.`,
              detail: `Auffällig ist, dass die Erzählungen über Jesus und Maria im Koran besonders der syrischen und äthiopischen Christenheit nahestehen (Kindheitslegenden, Marienfrömmigkeit), während viele Prophetengeschichten Motive aus Midrasch und Talmud zeigen. Das passt zu einem Umfeld, in dem Juden und Christen verschiedener Prägung präsent waren.`,
              sources: [
                { kind: 'hadith', work: 'Sahih al-Bukhari', ref: '3', quote: `… doch es dauerte nicht lange, bis Waraqa starb, und die Offenbarung setzte eine Zeit lang aus.`, status: 'paraphrase', url: 'https://sunnah.com/bukhari:3' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'vers-5-32-tora',
      objection: `5:32 sagt ausdrücklich: „Wir haben den Kindern Israels vorgeschrieben." Der Koran zitiert also ihr Gesetz – das ist doch kein Problem.`,
      objectionBy: 'Mohammed Hijab',
      answer: `Der Satz steht nicht in der Tora, sondern in der Mischna (Sanhedrin 4,5) – einer rabbinischen Sammlung aus der Zeit um 200 n. Chr. Dort wird er sogar *hergeleitet*: aus dem Plural „Blute" in Gen 4,10, wo Gott zu Kain sagt: „Die Stimme der Blute deines Bruders schreit." Der Koran gibt also eine rabbinische Schlussfolgerung als göttliche Vorschrift wieder – in genau dem Zusammenhang der Kain-und-Abel-Geschichte.`,
      followUps: [
        {
          id: 'urspruengliche-tora-enthielt-es',
          objection: `Vielleicht stand es in der ursprünglichen Tora und ist nur in der Mischna erhalten geblieben.`,
          objectionBy: 'verbreitete muslimische Erklärung',
          answer: `Dafür gibt es keinen Beleg – keine Handschrift, keine Übersetzung, keine jüdische Tradition kennt diesen Satz als Torawort. Die Mischna selbst zeigt, wie er entstand: als Auslegung eines grammatischen Details. Wer behauptet, er stand ursprünglich in der Tora, nimmt eine Verfälschung an, um eine Abhängigkeit zu vermeiden – ohne jeden Beweis.`,
          followUps: [
            {
              id: 'muendliche-tora',
              objection: `Die Juden glauben doch selbst an eine mündliche Tora, die Mose am Sinai empfing und die in der Mischna aufgeschrieben wurde. Dann ist der Satz eben Teil dieser mündlichen Offenbarung – und der Koran bestätigt ihn zu Recht.`,
              objectionBy: 'Ali Ataie',
              answer: `Ein interessanter Zug – aber die Mischna selbst stellt den Satz nicht als Sinai-Überlieferung dar, sondern leitet ihn als Auslegung aus dem Plural „Blute" in Gen 4,10 ab. Und wenn du die rabbinische mündliche Tora als göttliche Offenbarung anerkennst, die der Koran bestätigt, dann gibst du dem Talmud eine Autorität, die kein muslimischer Gelehrter ihm zugesteht. Damit wird das Problem nicht kleiner, sondern größer.`,
              detail: `Der Zusammenhang in Mischna Sanhedrin 4,5 ist die Ermahnung an Zeugen in Kapitalprozessen: Wer ein einziges Leben zerstört, dem wird es angerechnet, als hätte er eine ganze Welt zerstört. Die Begründung ist exegetisch („Blute" deines Bruders – sein Blut und das Blut seiner Nachkommen). Dass der Koran dieselbe Folgerung im Anschluss an die Kain-und-Abel-Geschichte bringt, zeigt die Nähe zu dieser rabbinischen Tradition.`,
              sources: [
                { kind: 'juedisch', work: 'Mischna Sanhedrin', ref: '4,5', year: 'um 200', quote: `Darum wurde der Mensch einzeln erschaffen: um zu lehren, dass jeder, der ein Leben aus Israel vernichtet, so angesehen wird, als hätte er eine ganze Welt vernichtet.`, status: 'paraphrase', note: 'Einige Handschriften ohne „aus Israel".' },
                { kind: 'koran', work: 'Sure 5 (al-Ma\'ida)', ref: '5:32', quote: `Aus diesem Grund haben Wir den Kindern Israels vorgeschrieben: Wer einen Menschen tötet … so ist es, als ob er alle Menschen getötet hätte.`, translation: 'Bubenheim/Elyas (sinngemäß)', status: 'paraphrase', url: 'https://quran.com/5/32' },
              ],
              questionsBack: [
                `Erkennst du die Mischna als Offenbarung an – und wenn nicht, wie kommt ihre Auslegung als göttliche Vorschrift in den Koran?`,
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'bibel-hat-auch-parallelen',
      objection: `Die Bibel hat auch Parallelen – zu Gilgamesch, zum Enuma Elisch, zu ägyptischen Weisheitstexten. Nach deiner Logik müsstest du die Bibel auch verwerfen.`,
      objectionBy: 'Mohammed Hijab',
      answer: `Es gibt Parallelen zwischen der Bibel und altorientalischer Literatur – aber die biblischen Texte sind meist gleich alt oder bearbeiten die Motive bewusst kritisch, etwa gegen den Polytheismus. Zwei Unterschiede sind entscheidend: Die Bibel beansprucht nicht, Wort für Wort vom Himmel diktiert zu sein. Und die Parallelen des Korans führen zu *späteren* Legenden und Auslegungen – zu Texten, die selbst schon auf der Bibel aufbauen.`,
      detail: `Siehe Claim „Die Genesis ist von babylonischen Mythen abgeschrieben" im Topic „Schöpfung und Genesis".`,
      followUps: [
        {
          id: 'genesis-spaet-redigiert',
          objection: `Die Bibelwissenschaft sagt aber, Genesis wurde im babylonischen Exil redigiert – also lange nach Gilgamesch. Die Bibel hat dann genauso spätere Vorlagen bearbeitet wie der Koran.`,
          objectionBy: 'Paul Williams (Blogging Theology)',
          answer: `Selbst wenn man diese Datierung annimmt: Die Flutüberlieferung des alten Orients (Atrahasis, Gilgamesch) ist weit älter, und Genesis setzt sich mit ihr kritisch auseinander – ein Gott statt vieler, eine moralische Ursache statt göttlicher Laune über den Lärm der Menschen. Vor allem aber: Christen haben kein Problem damit, dass menschliche Verfasser Quellen benutzten – Lukas sagt es selbst (Lk 1,1–4). Ein Problem entsteht erst für eine Lehre, nach der jedes Wort unvermittelt und unerschaffen von Gott stammt. Das ist die islamische Lehre vom Koran, nicht die christliche von der Bibel.`,
          detail: `Die christliche Inspirationslehre ist „inkarnatorisch": Gott spricht durch menschliche Autoren mit ihrer Sprache, ihren Quellen und ihrem Stil. Deshalb ist Quellenbenutzung kein Einwand gegen die Bibel. Die klassische sunnitische Lehre dagegen versteht den Koran als ewiges, unerschaffenes Wort Gottes, das wörtlich herabgesandt wurde. Für diese Lehre sind Parallelen zu späten rabbinischen und apokryphen Texten erklärungsbedürftig – darum ist der Vergleich nicht symmetrisch.`,
          questionsBack: [
            `Behauptet die Bibel von sich, ohne menschliche Vermittlung Wort für Wort herabgesandt zu sein – wie der Koran es tut?`,
          ],
        },
      ],
    },
    {
      id: 'dhul-qarnain-kyros',
      objection: `Dhu l-Qarnain ist nicht Alexander, sondern der persische König Kyros. Also gibt es keine Abhängigkeit von der Alexanderlegende.`,
      objectionBy: 'moderne muslimische Auslegung (u. a. Abul Kalam Azad)',
      answer: `Die meisten klassischen Ausleger identifizierten Dhu l-Qarnain mit Alexander. Und die Einzelheiten – die Reise zum Ort des Sonnenuntergangs, wo die Sonne in einer Quelle versinkt, das Tor aus Eisen und Kupfer gegen Gog und Magog – stimmen eng mit der syrischen Alexanderlegende überein. Die Kyros-Deutung ist eine moderne Harmonisierung, um dieser Parallele auszuweichen.`,
      sources: [
        { kind: 'fachliteratur', author: 'Kevin van Bladel', work: 'The Alexander Legend in the Qur\'an 18:83–102', year: '2008', quote: `Detaillierter Vergleich mit der syrischen Alexanderlegende (Neshana).`, status: 'paraphrase' },
      ],
      followUps: [
        {
          id: 'legende-juenger-als-koran',
          objection: `Die syrische Alexanderlegende wird um 630 datiert – also gleichzeitig mit dem Koran. Vielleicht hat sie vom Koran abgeschrieben.`,
          objectionBy: 'Mohammed Hijab',
          answer: `Das ist eine berechtigte Frage, und die Forschung diskutiert sie. Aber die Alexanderlegende ist ein christlich-syrischer Text, der in einen politischen Zusammenhang am byzantinischen Hof (Herakleios) passt und Motive älterer Alexander-Überlieferungen verarbeitet. Dass ein syrischer Christ um 630 aus einer gerade entstehenden arabischen Rezitation schöpfte, ist deutlich unwahrscheinlicher als der umgekehrte Weg über mündliche Erzählung.`,
          followUps: [
            {
              id: 'alexander-war-heide',
              objection: `Alexander war ein heidnischer Polytheist, der sich als Sohn des Ammon verehren ließ. Der Koran lobt Dhu l-Qarnain als frommen Gottesdiener. Also kann er nicht Alexander sein.`,
              objectionBy: 'Mohammed Hijab',
              answer: `Genau das spricht *für* die Abhängigkeit: Der historische Alexander war Heide – aber der Alexander der christlich-syrischen Legende ist ein frommer Verehrer des einen Gottes, der zu Gott betet und von ihm geführt wird. Der Dhu l-Qarnain des Korans entspricht also nicht dem historischen, sondern dem legendarischen Alexander. Und der Beiname „der Zweigehörnte" passt zu Alexander, der auf Münzen mit den Widderhörnern des Ammon dargestellt wurde.`,
              detail: `Das Argument „Alexander war Heide" setzt voraus, dass der Koran historisch genau über Alexander berichtet. Gerade die Übereinstimmung mit einer *frommen Legende* über Alexander – einschließlich der Hörner, der Reise zum Sonnenuntergang und des Tores gegen Gog und Magog – zeigt, woher der Stoff stammt. Kevin van Bladel hat die Parallelen Punkt für Punkt nachgewiesen.`,
              sources: [
                { kind: 'fachliteratur', author: 'Kevin van Bladel', work: 'The Alexander Legend in the Qur\'an 18:83–102', year: '2008', quote: `In der syrischen Legende ist Alexander ein frommer Diener Gottes; die koranische Erzählung folgt ihr in zahlreichen Einzelheiten.`, status: 'paraphrase', note: 'Beitrag in: G. S. Reynolds (Hg.), The Qur\'an in Its Historical Context (2008).' },
              ],
              questionsBack: [
                `Wenn Dhu l-Qarnain fromm ist, der historische Alexander aber Heide war – welchem Alexander gleicht er dann: dem der Geschichte oder dem der syrischen Legende?`,
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'siebenschlaefer',
      objection: `Die Geschichte der Leute der Höhle (18:9–26) ist ein Zeichen göttlichen Wissens. Die Juden in Medina fragten Mohammed danach, um ihn zu prüfen – und er bestand die Prüfung.`,
      objectionBy: 'Zakir Naik',
      answer: `Die Legende von den Siebenschläfern von Ephesus war in der christlichen Welt weit verbreitet, lange vor Mohammed: Jakob von Sarug (gest. 521) verfasste darüber eine syrische Predigt, und Gregor von Tours überlieferte sie im 6. Jahrhundert auf Latein. Der Koran spiegelt sogar die Unsicherheit der verschiedenen Fassungen über ihre Zahl wider: „drei, ihr Hund der vierte … fünf … sieben" (18:22). Eine bekannte christliche Legende wiederzugeben, ist kein Beweis für göttliches Wissen.`,
      detail: `In der christlichen Legende fliehen junge Christen vor der Verfolgung unter Kaiser Decius (um 250) in eine Höhle bei Ephesus, schlafen dort fast zwei Jahrhunderte und erwachen unter Theodosius II. – ihr Erwachen gilt als Zeichen für die leibliche Auferstehung. Die Geschichte wird in der Kirche bis heute als Heiligenlegende erzählt; sie ist erbaulich, aber kein Teil der Heiligen Schrift.`,
      sources: [
        { kind: 'koran', work: 'Sure 18 (al-Kahf)', ref: '18:22', quote: `Sie werden sagen: Es waren drei, der vierte von ihnen war ihr Hund. Und sie sagen: fünf, der sechste war ihr Hund – ein Raten ins Ungewisse. Und sie sagen: sieben, und der achte war ihr Hund.`, translation: 'Bubenheim/Elyas (sinngemäß)', status: 'paraphrase', url: 'https://quran.com/18/22' },
        { kind: 'kirchenvater', author: 'Jakob von Sarug', work: 'Memra über die Jünglinge von Ephesus', year: 'frühes 6. Jh.', quote: `Syrische Versdichtung über die Siebenschläfer von Ephesus.`, status: 'paraphrase' },
      ],
      questionsBack: [
        `Wenn die Geschichte in Syrien und Gallien schon im 6. Jahrhundert erzählt wurde – warum soll ihre Kenntnis in Arabien ein Wunder sein?`,
      ],
      followUps: [
        {
          id: 'siebenschlaefer-wahr',
          objection: `Und wenn die Geschichte wahr ist? Gott kann eine wahre Begebenheit bestätigen, die auch die Christen kannten.`,
          objectionBy: 'Mohammed Hijab',
          answer: `Dann sieh, wen der Koran da lobt: „Jünglinge, die an ihren Herrn glaubten, und Wir mehrten ihre Rechtleitung" (18:13). Das waren nach der Legende Christen des 3. Jahrhunderts, die unter Decius lieber flohen, als den Götzen zu opfern – Christen, die Christus anbeteten und deren Erwachen die Auferstehung des Leibes bezeugen sollte. Wenn der Koran sie als Rechtgeleitete ehrt, dann ehrt er den Glauben der Kirche des 3. Jahrhunderts. Wo bleibt dann die These, die Christen hätten ihren Glauben längst verfälscht?`,
          detail: `Dieser Zug verbindet die Quellenfrage mit dem Islamischen Dilemma: Entweder ist die Legende eine christliche Erzählung, die der Koran aufnimmt – dann stammt der Stoff aus menschlicher Überlieferung. Oder sie ist wahr – dann waren Christen um 250, die Christus als Herrn anbeteten, nach dem Koran Gläubige. Beides ist für die These eines früh verfälschten Christentums unbequem. Sprich das freundlich und fragend an, nicht triumphierend.`,
          sources: [
            { kind: 'koran', work: 'Sure 18 (al-Kahf)', ref: '18:13', quote: `Es waren Jünglinge, die an ihren Herrn glaubten, und Wir mehrten ihre Rechtleitung.`, original: `innahum fityatun āmanū bi-rabbihim wa-zidnāhum hudā`, translation: 'Bubenheim/Elyas (sinngemäß)', status: 'paraphrase', url: 'https://quran.com/18/13' },
          ],
          questionsBack: [
            `Welchen Glauben hatten die christlichen Jünglinge unter Decius – und warum nennt der Koran sie rechtgeleitet?`,
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Warum steht 5:32 fast wörtlich in der Mischna, aber nicht in der Tora?`,
    `Hältst du das Kindheitsevangelium des Thomas für historisch zuverlässig?`,
    `Was meint 16:103, wenn Zeitgenossen sagen: „Ein Mensch lehrt ihn"?`,
    `Warum braucht man Bücher, um Geschichten zu hören?`,
  ],
  avoid: [
    `Nicht behaupten, Mohammed habe „abgeschrieben" oder Bücher heimlich gelesen. Sprich von Parallelen und mündlicher Überlieferung.`,
    `Nicht mit unsicher datierten Quellen (z. B. Pirqe de-Rabbi Eliezer, Targum Scheni) als „Beweis" argumentieren – ihre Endfassung ist vermutlich jünger als der Koran.`,
    `Nicht die These übernehmen, der Koran sei ursprünglich ein syrischer Text (Luxenberg) – sie ist in der Forschung stark umstritten.`,
  ],
  concessions: [
    `Ähnlichkeit allein beweist noch keine Abhängigkeit; die Richtung und Art der Beziehung wird in der Forschung diskutiert.`,
    `Der Koran gestaltet die übernommenen Motive eigenständig und theologisch neu.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Gabriel Said Reynolds', work: 'The Qur\'an and the Bible: Text and Commentary', year: '2018', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Gabriel Said Reynolds (Hg.)', work: 'The Qur\'an in Its Historical Context', year: '2008', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Sidney H. Griffith', work: 'The Bible in Arabic', year: '2013', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Koran', 'Quellen', 'Apokryphen', 'Midrasch', 'Islam'],
  related: [
    'islam-koran/koran-herausforderung',
    'gnosis/gnostische-evangelien-wahres-christentum',
    'genesis/genesis-von-babylon-kopiert',
  ],
};

export default claim;
