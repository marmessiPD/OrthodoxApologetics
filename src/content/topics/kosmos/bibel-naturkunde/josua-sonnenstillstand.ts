import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'josua-sonnenstillstand',
  title: `„Josuas Sonnenstillstand ist physikalisch unmöglich."`,
  proponents: [
    { name: 'Thomas Paine', role: 'Publizist und Deist', work: 'The Age of Reason (1794–1807)' },
    { name: 'Robert G. Ingersoll', role: 'Redner und Religionskritiker', work: 'Some Mistakes of Moses (1879)' },
    { name: 'Carl Sagan', role: 'Astronom, Cornell University', work: 'Broca\'s Brain (1979), Kapitel zu Velikovskys „Worlds in Collision"' },
    { name: 'Richard Dawkins', role: 'Evolutionsbiologe, Oxford', work: 'The God Delusion (2006)' },
  ],
  steelman: `Jos 10,12–14 berichtet, Josua habe gerufen: „Sonne, stehe still zu Gibeon, und Mond, im Tal Ajalon!" – und „die Sonne stand mitten am Himmel und verzog unterzugehen beinahe einen ganzen Tag". Physikalisch hieße das: Die Erde hört auf, sich zu drehen. Am Äquator bewegt sich die Erdoberfläche mit rund 1670 km/h; ein plötzlicher Stopp würde Ozeane, Gebäude und Menschen mit ungeheurer Wucht davonschleudern, die Atmosphäre in Orkane verwandeln und die Erdkruste zerreißen. Danach müsste die Erde wieder anlaufen – ohne jede geologische Spur. Kein anderes Volk der Welt verzeichnet einen verlängerten Tag. Der Text ist offensichtlich ein Stück Kriegsheldenlegende aus dem Weltbild einer Zeit, in der man glaubte, die Sonne laufe um eine feststehende Erde. Genau mit diesem Vers bekämpften Luther und die Inquisition Kopernikus und Galilei. Christen, die ihn verteidigen, greifen zu Ausflüchten – oder zu Märchen wie dem angeblich von der NASA gefundenen „fehlenden Tag".`,
  biblical: {
    summary: `Jos 10,12b–13a ist ausdrücklich ein **Zitat aus dem „Buch des Redlichen"** (hebr. *sēp̄er hayyāšār*, Luther: „Buch des Frommen") – einer Sammlung poetischer Lieder, aus der auch Davids Klage über Saul und Jonatan stammt (2 Sam 1,18). Josuas Ruf ist Poesie: „Sonne, steh still zu Gibeon, Mond, im Tal Ajalon" ist ein klassischer hebräischer Parallelismus. Das Verb *dmm* bedeutet „still sein, schweigen, verstummen, innehalten"; ob es heißt „steh still" oder „hör auf zu scheinen", ist in der Forschung umstritten. Der Prosaerzähler betont in V. 14 vor allem: „Kein Tag war diesem gleich …, **da der HERR der Stimme eines Mannes gehorchte**; denn der HERR stritt für Israel." Die Bibel beschreibt das Geschehen aus der Sicht des Beobachters (phänomenologisch) – wie wir heute vom Sonnenaufgang sprechen. Ob ein realer, wunderbarer Eingriff Gottes in die Lichtverhältnisse geschah, eine außergewöhnliche Himmelserscheinung oder poetische Siegessprache vorliegt, lässt sich aus dem Text nicht eindeutig entscheiden; der Text behauptet in jedem Fall, dass Gott Israel an diesem Tag den Sieg gab.`,
    detail: `**Poesie im Kontext.** Auch im Debora-Lied heißt es: „Vom Himmel ward wider sie gestritten; die Sterne in ihren Bahnen stritten wider Sisera" (Ri 5,20) – niemand liest das als astronomische Angabe. Hab 3,11 greift das Bild auf: „Sonne und Mond standen still."

**Die Position der Gestirne.** Die Sonne steht „zu Gibeon" (im Osten des Schauplatzes), der Mond „im Tal Ajalon" (im Westen). Das beschreibt eher die frühe Morgenstunde, wenn Sonne und Mond gleichzeitig am Himmel stehen, als einen Nachmittag, an dem man mehr Tageslicht brauchte. Darauf baut John Waltons Deutung auf.

**Der Hagel.** Kurz zuvor berichtet der Text von einem gewaltigen Hagelsturm, durch den mehr Feinde starben als durch das Schwert (Jos 10,11) – ein Hinweis darauf, dass der Tag von außergewöhnlichen Wettererscheinungen geprägt war.

**Spätere jüdische Lektüre.** Sir 46,4–5 (in der koptischen Kirche kanonisch) und Josephus verstehen das Ereignis als wirklich verlängerten Tag. Das zeigt, wie es früh gelesen wurde – nicht notwendig, welchen Mechanismus der Text meint.`,
    sources: [
      { kind: 'bibel', work: 'Josua', ref: '10,12–14', quote: `Sonne, stehe still zu Gibeon, und Mond, im Tal Ajalon! Da stand die Sonne und der Mond still, bis daß sich das Volk an seinen Feinden rächte. Ist dies nicht geschrieben im Buch des Frommen? … Und war kein Tag diesem gleich, weder vorher noch danach, da der HERR der Stimme eines Mannes gehorchte; denn der HERR stritt für Israel.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '2. Samuel', ref: '1,18', quote: `David befiehlt, das Bogenlied zu lehren; es steht geschrieben im Buch des Redlichen.`, status: 'paraphrase', note: 'Zeigt den poetischen Charakter des zitierten Buches.' },
      { kind: 'bibel', work: 'Richter', ref: '5,20', quote: `Vom Himmel ward wider sie gestritten; die Sterne in ihren Bahnen stritten wider Sisera.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Habakuk', ref: '3,11', quote: `Sonne und Mond standen still.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Jesus Sirach', ref: '46,4–5', quote: `Ward nicht die Sonne durch ihn aufgehalten, und wurde nicht ein Tag so lang wie zwei?`, status: 'paraphrase', note: 'Deuterokanonisch; zeigt die frühe jüdische Lektüre als verlängerter Tag.' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche bekennt, dass Gott der Herr der Schöpfung ist und Wunder wirken kann; zugleich gibt es **kein Dogma** über den physikalischen Ablauf von Jos 10. Viele Väter verstanden das Ereignis als echtes Wunder; Augustinus nannte es neben anderen biblischen Zeichen als Beispiel dafür, dass Gott über die gewohnte Ordnung der Natur verfügt. In der alexandrinischen Tradition wird das Buch Josua zudem **christologisch** gelesen: Josua trägt denselben Namen wie Jesus (*Jēsous* in der Septuaginta), und Origenes deutet in seinen Homilien zum Buch Josua dessen Siege als Bild für den Sieg Christi über die Mächte des Bösen. Die Kirche hält damit beides fest: Gott kann wirklich handeln – und die Schrift will nicht Himmelsmechanik lehren, sondern den Gott, der für sein Volk streitet.`,
    sources: [
      { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'De civitate Dei', ref: 'XXI, 8', year: 'um 420', quote: `Augustinus führt biblische Zeichen am Himmel als Beispiele dafür an, dass Gott die gewohnte Ordnung der Natur nach seinem Willen ändern kann, ohne gegen die Natur zu handeln.`, status: 'paraphrase', note: 'Augustinus argumentiert, Wunder geschähen nicht gegen die Natur, sondern gegen die uns bekannte Natur.' },
      { kind: 'kirchenvater', author: 'Origenes', work: 'Homilien zum Buch Josua (Homiliae in Iesu Nave)', year: 'um 240', quote: `Josua, der denselben Namen wie Jesus trägt, ist ein Vorbild Christi; seine Kriege sind Bild für den geistlichen Kampf gegen die Mächte des Bösen.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `In der Forschung gibt es mehrere ernsthafte Deutungen: (1) **wörtlich-wunderhaft** – Gott verlängerte das Tageslicht (auf welche Weise auch immer); (2) **poetisch** – das Zitat aus dem Buch des Redlichen ist hymnische Siegessprache wie Ri 5,20; (3) **Omen-Deutung** – John Walton verglich die Sprache mit mesopotamischen Himmelsomen, in denen das „Stehen" oder „Warten" von Sonne und Mond zu bestimmten Monatstagen günstige oder ungünstige Vorzeichen bedeutete; Josua habe um ein günstiges Zeichen gebeten; (4) **Finsternis-Deutung** – Colin Humphreys und Graeme Waddington deuteten *dmm* als „aufhören zu scheinen" und schlugen 2017 eine ringförmige Sonnenfinsternis im Jahr 1207 v. Chr. vor. Keine Deutung ist allgemein anerkannt. Historisch-kritische Forscher halten das Josuabuch zudem für eine späte, theologisch gestaltete Darstellung der Landnahme.`,
    sources: [
      { kind: 'fachliteratur', author: 'John H. Walton', work: '„Joshua 10:12–15 and Mesopotamian Celestial Omen Texts", in: A. R. Millard, J. K. Hoffmeier, D. W. Baker (Hg.), Faith, Tradition, and History', ref: 'S. 181–190', year: '1994', status: 'paraphrase', url: 'https://biblearchaeology.org/research-articles/joshuas-long-day-and-mesopotamian-celestial-omen-texts/' },
      { kind: 'wissenschaft', author: 'Colin J. Humphreys; W. Graeme Waddington', work: '„Solar eclipse of 1207 BC helps to date pharaohs", Astronomy & Geophysics 58', year: '2017', quote: `Die Autoren deuten Jos 10,12 als Bericht einer ringförmigen Sonnenfinsternis und datieren sie auf den 30. Oktober 1207 v. Chr.`, status: 'unverified', note: 'Titel, Jahrgang und Datum aus dem Gedächtnis; vor Verwendung prüfen. Die Hypothese ist umstritten.' },
      { kind: 'fachliteratur', author: 'K. Lawson Younger Jr.', work: 'Ancient Conquest Accounts: A Study in Ancient Near Eastern and Biblical History Writing', year: '1990', status: 'paraphrase' },
    ],
  },
  quickAnswer: `Der Ruf „Sonne, steh still" ist ausdrücklich ein Zitat aus einem alten Liederbuch (Jos 10,13) – hebräische Poesie, wie „die Sterne in ihren Bahnen stritten wider Sisera" (Ri 5,20). Die Bibel beschreibt, was die Menschen sahen, so wie wir heute vom „Sonnenaufgang" sprechen; sie behauptet nicht, dass die Erde aufhörte, sich zu drehen. Ob Gott das Licht wunderbar verlängerte, ob es eine außergewöhnliche Himmelserscheinung war oder poetische Siegessprache – Christen dürfen darüber verschieden denken. Und wenn es einen Schöpfer gibt, ist ein Wunder nicht „unmöglich", nur ungewöhnlich. Den angeblich von der NASA gefundenen „fehlenden Tag" gibt es übrigens nicht – das ist ein Märchen.`,
  keyPoints: [
    `**Poetisches Zitat:** Jos 10,12b–13a stammt aus dem „Buch des Redlichen", einer Liedersammlung (vgl. 2 Sam 1,18); Parallelismus wie in Ri 5,20.`,
    `**Phänomenologische Sprache:** Der Text beschreibt die Wahrnehmung, nicht Himmelsmechanik – er behauptet keinen Stillstand der Erdrotation.`,
    `**Mehrere seriöse Deutungen:** wunderbare Lichtverlängerung, poetische Siegessprache, Omen-Sprache (Walton), Himmelserscheinung (Humphreys) – kein Dogma legt eine fest.`,
    `**Wunder sind möglich, wenn Gott existiert:** Die Frage ist nicht physikalisch, sondern weltanschaulich; der Schöpfer der Naturgesetze ist nicht ihr Gefangener.`,
    `**Galilei las den Text richtig:** In seinem Brief an Christina (1615) zeigte er, dass Jos 10 der Kopernikanischen Lehre nicht widerspricht.`,
    `**Keine Märchen:** Der „fehlende Tag der NASA" ist eine Legende; Christen sollten sie als Erste zurückweisen.`,
  ],
  voices: [
    {
      person: 'galilei',
      role: 'als Astronom, der Jos 10 auslegte',
      text: `Galilei widmete in seinem Brief an die Großherzogin Christina (1615) einen langen Abschnitt dem Josua-Wunder, weil seine Gegner es gegen Kopernikus anführten. Er argumentierte, die Schrift spreche hier in der Sprache des gewöhnlichen Volkes, und zeigte sogar, dass das Wunder im ptolemäischen System schwerer zu erklären sei als im kopernikanischen. Vor allem aber berief er sich auf Augustinus: Die Bibel wolle nicht lehren, wie der Himmel gebaut ist. Galilei verteidigte die Schrift, nicht gegen sie.`,
      sources: [{ kind: 'fachliteratur', author: 'Galileo Galilei', work: 'Brief an die Großherzogin Christina von Lothringen', year: '1615', status: 'paraphrase' }],
    },
    {
      person: 'john-walton',
      role: 'als Kenner altorientalischer Texte',
      text: `Walton wies darauf hin, dass mesopotamische Omentexte die Begriffe „stehen" und „warten" für die Stellung von Sonne und Mond zu bestimmten Monatstagen verwenden; ob sie gleichzeitig am Himmel standen, galt als gutes oder schlechtes Vorzeichen. Die Position in Jos 10,12 – Sonne im Osten, Mond im Westen – spreche für die Morgenstunde. Josua habe demnach um ein Zeichen gebeten, das den Amoritern Unheil und Israel Sieg anzeigte. Diese Deutung nimmt den Text als Bericht über ein reales Geschehen ernst, verlegt aber den Akzent vom Mechanismus auf die Bedeutung.`,
      sources: [{ kind: 'fachliteratur', author: 'John H. Walton', work: '„Joshua 10:12–15 and Mesopotamian Celestial Omen Texts"', year: '1994', status: 'paraphrase' }],
    },
    {
      person: 'cs-lewis',
      role: 'als Philosoph des Wunders',
      text: `In *Miracles* (1947) argumentiert Lewis, dass Wunder die Naturgesetze nicht „brechen". Die Gesetze beschreiben, was geschieht, wenn nichts von außen eingreift; ein Wunder ist ein neues Ereignis, das Gott in die Natur einspeist, und von da an verläuft alles wieder nach den Gesetzen. Die Frage, ob Wunder möglich sind, ist daher keine naturwissenschaftliche, sondern eine philosophische: Gibt es etwas außerhalb der Natur? Wer das verneint, hat das Ergebnis vorweggenommen.`,
      sources: [{ kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Miracles: A Preliminary Study', ref: 'Kap. 8', year: '1947', status: 'paraphrase' }],
    },
    {
      person: 'k-lawson-younger',
      role: 'als Altorientalist',
      text: `K. Lawson Younger hat in *Ancient Conquest Accounts* (1990) die biblischen Eroberungsberichte mit assyrischen, hethitischen und ägyptischen Kriegsberichten verglichen. Er zeigt, dass diese Texte eine gemeinsame Rhetorik pflegen: Hyperbel, stereotype Wendungen und die Beteiligung der Götter am Kampf, oft mit kosmischen Bildern. Das hilft, Jos 10 in seiner Gattung zu lesen – nicht als Protokoll im modernen Sinn, sondern als Siegesbericht in der Sprache seiner Zeit, der gleichwohl reale Ereignisse meint.`,
      sources: [{ kind: 'fachliteratur', author: 'K. Lawson Younger Jr.', work: 'Ancient Conquest Accounts', year: '1990', status: 'paraphrase' }],
    },
    {
      person: 'swinburne',
      role: 'als Religionsphilosoph',
      text: `Richard Swinburne definiert in *The Concept of Miracle* (1970) ein Wunder als ein Ereignis, das durch einen Gott herbeigeführt wird und eine religiöse Bedeutung hat. Er zeigt, dass die Annahme eines Wunders rational sein kann, wenn es gute Gründe für die Existenz Gottes gibt und das Zeugnis zuverlässig ist. Zugleich warnt er davor, jeden ungewöhnlichen Bericht unkritisch als Wunder anzunehmen – die Prüfung der Quelle bleibt Pflicht.`,
      sources: [{ kind: 'fachliteratur', author: 'Richard Swinburne', work: 'The Concept of Miracle', year: '1970', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'erdrotation-stopp',
      objection: `Wenn die Erde plötzlich aufhört, sich zu drehen, würde alles mit über 1600 km/h davongeschleudert – Meere, Häuser, Menschen. Josuas Wunder hätte die Welt zerstört.`,
      objectionBy: 'Carl Sagan',
      answer: `Das stimmt, wenn man annimmt, Gott hätte nur die Erde gestoppt und alles andere seinem Schwung überlassen. Aber der Text behauptet überhaupt nicht, dass die Erde aufhörte, sich zu drehen. Er beschreibt, was die Menschen sahen – die Sonne „stand" –, so wie wir vom Sonnenaufgang sprechen. Viele Deutungen, auch bibeltreue, kommen ohne Stillstand der Erdrotation aus: eine wunderbare Verlängerung des Lichts, eine außergewöhnliche Himmelserscheinung oder poetische Siegessprache.`,
      followUps: [
        {
          id: 'gott-kann-alles',
          objection: `„Gott kann alles" – mit diesem Satz wird jede Geschichte unwiderlegbar. Das ist das Ende des Denkens.`,
          objectionBy: 'Richard Dawkins',
          answer: `Ich sage nicht: „Gott kann alles, also ist jede Geschichte wahr." Ich sage: Ob Wunder möglich sind, entscheidet nicht die Physik, sondern die Frage, ob es einen Gott gibt. Ob ein *bestimmtes* Wunder geschah, prüft man am Text und an den Belegen. Und beim Text von Jos 10 ist die erste Frage gar nicht „Ist es möglich?", sondern „Was behauptet er eigentlich?".`,
          followUps: [
            {
              id: 'text-ist-eindeutig',
              objection: `Der Text ist eindeutig: „Die Sonne stand mitten am Himmel und verzog unterzugehen beinahe einen ganzen Tag" (Jos 10,13).`,
              objectionBy: 'Thomas Paine',
              answer: `Schau auf die Struktur: Josuas Ruf ist ausdrücklich ein Zitat aus dem „Buch des Redlichen" (V. 13), einer Sammlung von Liedern, aus der auch Davids Klagelied stammt (2 Sam 1,18). Er ist als hebräischer Parallelismus gebaut – „Sonne, steh still zu Gibeon, Mond, im Tal Ajalon". Das Verb *dmm* heißt eigentlich „still sein, verstummen, innehalten" und kann auch „aufhören zu scheinen" bedeuten. Der Erzähler zitiert ein Siegeslied und deutet es. Das ist nicht so eindeutig, wie es in der Übersetzung klingt.`,
              followUps: [
                {
                  id: 'jaschar-ausrede',
                  objection: `Dass es aus einem Liederbuch zitiert wird, macht es nicht weniger wörtlich gemeint. Vers 14 sagt ausdrücklich: Kein Tag war diesem gleich.`,
                  objectionBy: 'Robert G. Ingersoll',
                  answer: `Das ist richtig – der Erzähler meint, dass etwas wirklich Außergewöhnliches geschah. Aber worin sieht er die Einzigartigkeit? „Da der HERR der Stimme eines Mannes gehorchte; denn der HERR stritt für Israel" (V. 14). Der Akzent liegt auf Gottes Antwort auf ein Gebet, nicht auf Himmelsmechanik. Ein Christ kann ein echtes Wunder annehmen – die Frage ist nur, welcher Art. Ich halte es für möglich, dass Gott auf eine Weise eingriff, die wir nicht genau kennen; der Text zwingt nicht zu einer Erdrotation, die aussetzt.`,
                  followUps: [
                    {
                      id: 'sirach-josephus',
                      objection: `Jesus Sirach und Josephus haben es wörtlich als verlängerten Tag verstanden. Also war das die ursprüngliche Bedeutung.`,
                      objectionBy: 'Thomas Paine',
                      answer: `Das stimmt – Sir 46,4–5, ein Buch, das in der koptischen Kirche zum Kanon gehört, spricht von einem Tag, der so lang war wie zwei. Das zeigt, dass Israel das Ereignis als echtes Wunder in Erinnerung hatte, und Christen dürfen das auch so glauben. Aber auch Sirach beschreibt aus der Sicht des Menschen auf der Erde: Der Tag *erschien* doppelt lang. Wie Gott das bewirkte, sagt weder Josua noch Sirach. Eine phänomenologische Beschreibung eines realen Wunders ist etwas anderes als eine Theorie über die Erdrotation.`,
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
      id: 'nasa-fehlender-tag',
      objection: `Und dann erzählen Christen, die NASA habe bei Bahnberechnungen einen „fehlenden Tag" gefunden, der Josuas Wunder beweise. Das ist ein Schwindel.`,
      answer: `Da hast du völlig recht. Die Geschichte wurde in den 1970er-Jahren von dem Geschäftsmann Harold Hill verbreitet und geht auf ähnliche Behauptungen von Charles Totten aus dem 19. Jahrhundert zurück. Die NASA hat sie zurückgewiesen, und sie ist auch logisch unsinnig: Man kann einen „fehlenden Tag" nur finden, wenn man einen festen Bezugspunkt in der Vergangenheit hätte. Christen sollten solche Legenden als Erste zurückweisen.`,
      followUps: [
        {
          id: 'christen-maerchen',
          objection: `Wenn Christen solche Märchen verbreiten – warum sollte ich ihnen dann irgendetwas anderes glauben?`,
          answer: `Das ist ein berechtigter Vorwurf, und solche Geschichten schaden dem Glauben. Die Bibel selbst fordert: „Prüfet aber alles, und das Gute behaltet" (1 Thess 5,21), und Augustinus warnte schon im 5. Jahrhundert, Christen sollten sich nicht durch unsinnige Behauptungen über die Natur lächerlich machen. Aber die Frage, ob Christus auferstanden ist, hängt nicht an der Leichtgläubigkeit mancher Christen, sondern an den historischen Belegen. Prüfe sie selbst.`,
          sources: [{ kind: 'bibel', work: '1. Thessalonicher', ref: '5,21', quote: `Prüfet aber alles, und das Gute behaltet.`, translation: 'Luther 1912', status: 'verbatim' }],
        },
      ],
    },
    {
      id: 'walton-omen',
      objection: `Selbst christliche Gelehrte wie John Walton sagen, Jos 10 sei Omen-Sprache wie in babylonischen Texten. Also gab es gar kein Wunder.`,
      objectionBy: 'Kritiker der wörtlichen Lesart',
      answer: `Walton sagt nicht, dass nichts geschah. Er deutet den Text als Bitte Josuas um ein günstiges Himmelszeichen – und der Bericht, dass Gott dieses Zeichen gab und dazu einen Hagel schickte, der mehr Feinde tötete als das Schwert (Jos 10,11), bleibt eine Aussage über Gottes reales Eingreifen. Walton zeigt nur, dass die Sprache des Textes aus seiner Umwelt verständlich ist. Seine Deutung ist eine von mehreren; der Altertumsforscher Bryant Wood hat sie aufgegriffen und weiterentwickelt.`,
      voices: [
        {
          person: 'bryant-wood',
          role: 'als biblischer Archäologe',
          text: `Bryant Wood hat Waltons Deutung in einem Aufsatz aufgegriffen: Die Stellung von Sonne und Mond zeige, dass das Ereignis am frühen Morgen stattfand, als Josuas Heer nach einem Nachtmarsch bei Gibeon eintraf. Es ging also nicht um mehr Tageslicht. Josua habe um ein Zeichen gebeten, das den Amoritern Unheil ankündigte – und Gott habe es gegeben. Wood versteht das als historisches Ereignis, nicht als bloße Poesie.`,
          sources: [{ kind: 'fachliteratur', author: 'Bryant G. Wood', work: '„Joshua\'s ‚Long Day\' and Mesopotamian Celestial Omen Texts", Bible and Spade', status: 'paraphrase', url: 'https://biblearchaeology.org/research-articles/joshuas-long-day-and-mesopotamian-celestial-omen-texts/' }],
        },
      ],
      followUps: [
        {
          id: 'omen-heidnisch',
          objection: `Dann hätte Josua heidnische Zeichendeuterei betrieben – die verbietet die Tora ausdrücklich (Dtn 18,10).`,
          answer: `Nicht ganz: Josua betreibt keine Wahrsagerei, sondern betet zu Gott, und Gott antwortet mit einem Zeichen, das die Feinde als Unheil verstehen mussten. Gott spricht auch sonst in der Sprache, die Menschen verstehen – den Magiern zeigte er einen Stern. Die Omen-Deutung ist aber nicht verpflichtend; viele Ausleger halten die poetische oder die wunderhafte Deutung für wahrscheinlicher.`,
          followUps: [
            {
              id: 'humphreys-finsternis',
              objection: `Humphreys und Waddington deuten Jos 10 als Sonnenfinsternis im Jahr 1207 v. Chr. Ist das nicht genauso spekulativ?`,
              objectionBy: 'Astronomische Kritiker',
              answer: `Ja, das ist eine spekulative Hypothese, und ich würde sie nicht als Beweis anführen. Sie beruht darauf, das Verb *dmm* als „aufhören zu scheinen" zu verstehen, und verbindet den Text mit einer errechneten Sonnenfinsternis; Datierung und Deutung sind umstritten. Sie zeigt aber, dass auch Naturwissenschaftler den Text als mögliche Erinnerung an ein reales Himmelsereignis ernst nehmen, statt ihn als Unsinn abzutun.`,
            },
          ],
        },
        {
          id: 'hagel-zufall',
          objection: `Der Hagel in Jos 10,11 war ein normales Unwetter. Daran ist nichts Göttliches.`,
          answer: `Möglich, dass Gott hier durch natürliche Wetterabläufe handelte – das schließt sein Wirken nicht aus. Die Bibel unterscheidet nicht scharf zwischen „natürlich" und „göttlich": Der Wind, der das Meer teilt (Ex 14,21), ist ein natürlicher Wind und zugleich Gottes Handeln. Der Zeitpunkt – gerade als die Feinde flohen – macht für den Erzähler das Zeichen aus. Ob man darin Gottes Hand sieht, hängt davon ab, ob man Gott überhaupt für möglich hält.`,
        },
      ],
    },
    {
      id: 'luther-galilei',
      objection: `Luther und die Kirche haben mit genau diesem Vers Kopernikus und Galilei bekämpft. Das zeigt, wie gefährlich die wörtliche Bibellektüre ist.`,
      answer: `Das stimmt: Luther soll in einer Tischrede gesagt haben, Josua habe der Sonne befohlen stillzustehen, nicht der Erde – ein Argument gegen Kopernikus. Und Jos 10 spielte im Galilei-Prozess eine Rolle. Aber Galilei selbst hat den Text in seinem Brief an Christina (1615) ausgelegt und gezeigt, dass er dem Kopernikanischen System nicht widerspricht – mit Berufung auf Augustinus. Die Lehre aus dieser Geschichte ist nicht, die Bibel aufzugeben, sondern sie so zu lesen, wie die Väter es lehrten: nach ihrer Aussageabsicht.`,
      sources: [{ kind: 'sonstiges', author: 'Martin Luther', work: 'Tischreden', ref: 'Nr. 4638 (WA TR 4)', year: '1539', quote: `Der Narr will die ganze Kunst Astronomiae umkehren; aber wie die Heilige Schrift anzeigt, hieß Josua die Sonne stillstehen und nicht das Erdreich.`, status: 'paraphrase', note: 'Nur in Mitschriften seiner Tischgenossen überliefert; Wortlaut und Nummerierung unsicher.' }],
      followUps: [
        {
          id: 'galilei-taktik',
          objection: `Galilei hat das nur aus Taktik geschrieben, um der Inquisition zu entgehen.`,
          answer: `Galilei war zeitlebens ein gläubiger Katholik; zwei seiner Töchter wurden Nonnen, und er korrespondierte mit ihnen über den Glauben. Seine Bibelhermeneutik im Brief an Christina ist durchdacht und stützt sich ausführlich auf Augustinus' Genesiskommentar. Wer ihn für einen heimlichen Atheisten hält, liest das 19. Jahrhundert in das 17. hinein. Die Geschichte des Galilei-Prozesses wird im Claim „Galilei" ausführlich behandelt.`,
        },
      ],
    },
    {
      id: 'wunder-hume',
      objection: `Wunder sind grundsätzlich unglaubwürdig. Hume hat gezeigt: Die Erfahrung, die für ein Naturgesetz spricht, ist immer größer als jedes Zeugnis für ein Wunder.`,
      objectionBy: 'David Hume',
      answer: `Humes Argument setzt voraus, was es beweisen will: Wenn die „gleichförmige Erfahrung" gegen Wunder schon ausschließt, dass es Ausnahmen gibt, ist das ein Zirkelschluss. Wenn es einen Gott gibt, der die Natur geschaffen hat, sind Wunder möglich; ob ein bestimmtes geschah, ist eine Frage der Belege. Für Josua 10 lege ich mich nicht auf einen Mechanismus fest. Aber den Glauben, dass Gott in der Geschichte handeln kann, lasse ich mir nicht durch ein philosophisches Vorurteil nehmen.`,
      sources: [{ kind: 'gegner', author: 'David Hume', work: 'An Enquiry Concerning Human Understanding', ref: 'Abschnitt X („Of Miracles")', year: '1748', status: 'paraphrase' }],
      followUps: [
        {
          id: 'eroberungspropaganda',
          objection: `Das Josuabuch ist ohnehin Eroberungspropaganda. Die Archäologie zeigt keine schnelle Eroberung Kanaans.`,
          objectionBy: 'Israel Finkelstein',
          answer: `Die Archäologie der Landnahme ist ein eigenes, komplexes Thema mit unterschiedlichen Auffassungen. Hier genügt: Altorientalische Kriegsberichte benutzen eine übertreibende Siegesrhetorik – die ägyptische Merenptah-Stele (um 1208 v. Chr.) sagt etwa: „Israel ist verwüstet, sein Same ist nicht mehr", obwohl Israel weiterbestand. Das Josuabuch selbst zeigt, dass viele Städte nicht erobert wurden (Jos 13,1–6; Ri 1). Wer diese Gattung kennt, liest auch kosmische Bilder wie in Jos 10 nicht als Protokoll.`,
          sources: [{ kind: 'sonstiges', work: 'Merenptah-Stele', year: 'um 1208 v. Chr.', quote: `Israel ist verwüstet, sein Same existiert nicht mehr.`, status: 'paraphrase', note: 'Älteste außerbiblische Erwähnung Israels.' }],
          followUps: [
            {
              id: 'hyperbel-was-bleibt',
              objection: `Wenn alles Hyperbel und Poesie ist – was bleibt dann von der Bibel übrig?`,
              answer: `Nicht alles ist Hyperbel – sondern jeder Text wird nach seiner Gattung gelesen. Eine Chronik liest man als Chronik, ein Siegeslied als Siegeslied, ein Evangelium mit Augenzeugenberufung als Geschichtsbericht. Übrig bleibt das, was die Texte sagen wollen: Gott hat Israel ins Land geführt und für sein Volk gestritten. Und die alexandrinische Tradition liest darüber hinaus den geistlichen Sinn: Josua, der in der griechischen Bibel denselben Namen trägt wie Jesus, führt das Volk ins verheißene Land – ein Bild für Christus, der uns in das Reich Gottes führt.`,
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Hast du bemerkt, dass Josuas Ruf ausdrücklich als Zitat aus einem Liederbuch gekennzeichnet ist (Jos 10,13)?`,
    `Liest du Ri 5,20 („Die Sterne in ihren Bahnen stritten wider Sisera") auch als astronomische Angabe?`,
    `Ist die Unmöglichkeit von Wundern ein Ergebnis der Physik – oder eine Voraussetzung deiner Weltanschauung?`,
    `Wenn ein Meteorologe vom „Sonnenaufgang" spricht – behauptet er dann, die Sonne kreise um die Erde?`,
  ],
  avoid: [
    `Den „fehlenden Tag der NASA" erzählen – das ist eine Legende, die die NASA zurückgewiesen hat.`,
    `Velikovskys Theorien (Venus als Komet, der die Erde streifte) als Erklärung heranziehen – sie sind wissenschaftlich widerlegt.`,
    `Eine einzige Deutung (Erdrotationsstopp, Sonnenfinsternis, Omen) als die einzig christliche ausgeben.`,
    `Behaupten, der Text sei „nur Poesie" und es sei nichts geschehen – das geht über das hinaus, was man sicher sagen kann, und widerspricht der frühen Lektüre (Sir 46).`,
  ],
  concessions: [
    `Ein wörtlicher Stillstand der Erdrotation wäre physikalisch katastrophal, wenn Gott nicht zugleich alle Folgen aufhielte.`,
    `Frühe jüdische Leser (Sirach, Josephus) verstanden den Text als wirklich verlängerten Tag.`,
    `Christen haben Jos 10 im 16. und 17. Jahrhundert gegen das heliozentrische Weltbild ins Feld geführt – ein Fehler, aus dem die Kirche gelernt hat.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'John H. Walton', work: '„Joshua 10:12–15 and Mesopotamian Celestial Omen Texts", in: Faith, Tradition, and History', year: '1994', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Miracles', year: '1947', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'K. Lawson Younger Jr.', work: 'Ancient Conquest Accounts', year: '1990', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Galileo Galilei', work: 'Brief an die Großherzogin Christina', year: '1615', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Josua', 'Wunder', 'Sonnenstillstand', 'Buch des Redlichen', 'Galilei', 'Alter Orient'],
  related: [
    'physik/wunder-verletzen-naturgesetze',
    'kirchengeschichte-mythen/galilei',
    'at-archaeologie/eroberung-kanaans',
    'at-ethik/kanaaniter-voelkermord',
    'bibel-naturkunde/bibel-flache-erde-firmament',
  ],
};

export default claim;
