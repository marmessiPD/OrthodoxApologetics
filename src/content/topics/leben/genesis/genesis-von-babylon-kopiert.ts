import type { Claim, Source } from '../../../schema.ts';

const hasel1974: Source = {
  kind: 'fachliteratur',
  author: 'Gerhard F. Hasel',
  work: '„The Polemic Nature of the Genesis Cosmology", The Evangelical Quarterly 46, S. 81–102',
  year: '1974',
  quote: `Hasel argumentiert, die Schöpfungsgeschichte von Genesis 1 sei nicht von babylonischen Schöpfungsmythen abhängig, sondern setze sich bewusst und polemisch von ihnen ab – u. a. beim Begriff tehom, bei den „großen Seeungeheuern" und bei Sonne und Mond, die nicht mit ihren Namen, sondern nur als „großes" und „kleines Licht" bezeichnet werden.`,
  status: 'paraphrase',
  url: 'https://digitalcommons.andrews.edu/pubs/3590',
};

const lambert1965: Source = {
  kind: 'wissenschaft',
  author: 'Wilfred G. Lambert',
  work: '„A New Look at the Babylonian Background of Genesis", Journal of Theological Studies 16, S. 287–300',
  year: '1965',
  quote: `Der Assyriologe Lambert kommt zu dem Ergebnis, dass das Enuma-Elisch-Epos nicht als Quelle von Genesis 1 gelten kann und auch nicht die typische babylonische Kosmologie darstellt.`,
  status: 'paraphrase',
  note: 'Lambert war kein Apologet, sondern einer der führenden Assyriologen des 20. Jahrhunderts.',
};

const gilgameschXI: Source = {
  kind: 'sonstiges',
  work: 'Gilgamesch-Epos, Tafel XI (jungbabylonische Fassung)',
  year: 'Standardfassung um 1100 v. Chr.; erhaltene Tafel 7. Jh. v. Chr.',
  quote: `Utnapischtim soll ein Schiff bauen, dessen Breite und Länge gleich sind (annähernd ein Würfel). Nach der Flut bringt er ein Opfer dar; die Götter riechen den süßen Duft und versammeln sich „wie Fliegen" um den Opfernden. Während der Flut kauern sie sich verängstigt zusammen.`,
  status: 'paraphrase',
  url: 'https://livius.org/articles/misc/great-flood/flood3_t-gilgamesh',
};

const atrahasis: Source = {
  kind: 'sonstiges',
  author: 'Wilfred G. Lambert, Alan R. Millard (Hg.)',
  work: 'Atra-ḫasīs: The Babylonian Story of the Flood (Oxford)',
  year: '1969 (Text altbabylonisch, um 1700 v. Chr.)',
  quote: `Die Götter erschaffen die Menschen aus Lehm und dem Blut eines getöteten Gottes, damit sie den Göttern die Arbeit abnehmen; als der Lärm der Menschen die Götter stört, beschließen sie Seuchen, Hunger und schließlich die Flut.`,
  status: 'paraphrase',
};

const claim: Claim = {
  id: 'genesis-von-babylon-kopiert',
  title: `„Die Genesis ist von babylonischen Mythen abgeschrieben (Enuma Elisch, Gilgamesch)."`,
  proponents: [
    { name: 'Friedrich Delitzsch', role: 'Assyriologe (1850–1922)', work: 'Babel und Bibel (Vorträge 1902–1904)' },
    { name: 'Hermann Gunkel', role: 'Alttestamentler (1862–1932)', work: 'Schöpfung und Chaos in Urzeit und Endzeit (1895)' },
    { name: 'Francesca Stavrakopoulou', role: 'Professorin für Hebräische Bibel und antike Religion, University of Exeter', work: 'God: An Anatomy (2021)' },
    { name: 'Dan McClellan', role: 'Bibelwissenschaftler, populärer YouTuber' },
  ],
  steelman: `Als George Smith 1872 im Britischen Museum die Flut-Tafel des Gilgamesch-Epos entzifferte, war die Sensation perfekt: Ein Held wird von einem Gott gewarnt, baut ein Schiff, nimmt Tiere und Familie auf, eine gewaltige Flut vernichtet die Menschen, das Schiff landet auf einem Berg, er lässt Vögel fliegen – Taube, Schwalbe, Rabe –, bringt ein Opfer dar, und die Götter riechen den Duft. Genesis 8,21 sagt: „Und der HERR roch den lieblichen Geruch." Das Atrahasis-Epos verbindet wie die Genesis die Erschaffung der Menschen mit einer späteren Flut. Das Enuma Elisch beginnt mit einem Urwasser (Tiamat – vgl. hebräisch *tehom*), Marduk spaltet es in Himmel und Erde, setzt Gestirne ein und erschafft Menschen; sieben Tafeln entsprechen sieben Tagen. Die babylonischen Texte sind älter, und Israel lebte im 6. Jahrhundert v. Chr. im babylonischen Exil, als die Priesterschrift entstand. Die Genesis ist eine israelitische Bearbeitung babylonischer Mythen.`,
  biblical: {
    summary: `Ein genauer Vergleich zeigt weniger Abhängigkeit als **Auseinandersetzung**. Genesis 1 kennt keinen Götterkampf: Gott schafft durch sein Wort. Sonne und Mond – in der Umwelt mächtige Gottheiten (Schamasch, Sin, Re) – heißen nur „großes" und „kleines Licht" und werden erst am vierten Tag als Lampen und Zeitgeber eingesetzt (Gen 1,14–16). Die „großen Seeungeheuer" (*tanninim*), in den Mythen Chaosmächte, sind schlicht Geschöpfe, die Gott „gut" nennt (Gen 1,21). Der Mensch ist Gottes Ebenbild und Statthalter (Gen 1,27), nicht Sklave, der den Göttern die Arbeit abnimmt. Die Flut kommt wegen moralischer Verderbnis (Gen 6,5), nicht weil Menschen zu laut sind; Gott ist souverän, nicht verängstigt oder hungrig. Die Arche ist ein Kasten im Verhältnis 6:1, nicht ein Würfel.`,
    detail: `**Gemeinsamkeiten (ehrlich benennen):** Urwasser, Trennung der Wasser, Erschaffung von Gestirnen und Menschen; in der Flutgeschichte Warnung, Schiff, Tiere, Berg, Vögel, Opfer, wohlgefälliger Duft.

**Unterschiede (entscheidend):**
| Babylonisch | Genesis |
|---|---|
| viele Götter, entstehen selbst aus dem Urwasser | ein Gott, vor und über allem |
| Schöpfung durch Kampf (Marduk spaltet Tiamats Leib) | Schöpfung durch das Wort |
| Gestirne als Gottheiten | „Lichter" als Lampen und Zeitgeber |
| Mensch aus dem Blut eines getöteten Gottes, als Arbeitssklave | Mensch als Bild Gottes, gesegnet und beauftragt |
| Flut wegen Lärm, Götter uneins und verängstigt | Flut wegen Bosheit, ein souveräner Gott |
| Würfelförmiges Schiff | Kasten 300 × 50 × 30 Ellen (6:1) |
| Götter „wie Fliegen" um das Opfer, hungrig | Gott nimmt den Duft an und schließt einen Bund mit allem Leben |

**Tehom und Tiamat:** Das hebräische *tehom* ist ein gemeinsemitisches Wort (vgl. ugaritisch *thm*) und sprachlich nicht von Tiamat abgeleitet (David Tsumura).`,
    sources: [
      { kind: 'bibel', work: 'Genesis', ref: '1,16', quote: `Und Gott machte zwei große Lichter: ein großes Licht, das den Tag regiere, und ein kleines Licht, das die Nacht regiere, dazu auch Sterne.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Genesis', ref: '1,21', quote: `Und Gott schuf große Walfische und allerlei Getier, daß da lebt und webt, davon das Wasser sich erregte, ein jegliches nach seiner Art, … Und Gott sah, daß es gut war.`, original: 'hattanninim haggədolim („die großen Seeungeheuer")', translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Genesis', ref: '6,15', quote: `Und mache sie also: Dreihundert Ellen sei die Länge, fünfzig Ellen die Weite und dreißig Ellen die Höhe.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Genesis', ref: '8,21', quote: `Und der HERR roch den lieblichen Geruch und sprach in seinem Herzen: Ich will hinfort nicht mehr die Erde verfluchen um der Menschen willen; …`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'fachliteratur', author: 'David Toshio Tsumura', work: 'The Earth and the Waters in Genesis 1 and 2 (JSOT Supplement 83)', year: '1989', status: 'paraphrase', quote: `Tehom ist nicht von Tiamat abgeleitet; beide gehen auf ein gemeinsemitisches Wort zurück.` },
    ],
  },
  church: {
    summary: `Schon die Väter kannten den Vorwurf, Mose habe von heidnischen Weisen abgeschrieben, und den Vergleich mit heidnischen Kosmogonien. Kyrill von Alexandrien verteidigte gegen Kaiser Julian, der Moses Schöpfungsbericht mit Platons *Timaios* verglich und für unterlegen erklärte, die Wahrheit und Würde des mosaischen Berichts. Athanasius setzte sich in *Contra Gentes* mit den heidnischen Göttergeschichten auseinander und stellte ihnen den einen Schöpfer gegenüber, der nichts Geschaffenes vergöttlicht. Die Kirche liest die Genesis als inspirierte Offenbarung, die in die Sprache und Welt ihrer Zeit hinein spricht und deren Irrtümer korrigiert.`,
    sources: [
      { kind: 'kirchenvater', author: 'Kyrill von Alexandrien', work: 'Gegen Julian (Contra Iulianum)', ref: 'II', quote: `Kyrill verteidigt den Schöpfungsbericht des Mose gegen Julians Vergleich mit Platons Timaios.`, status: 'paraphrase', note: 'Buchzählung vor Zitierung prüfen.' },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Contra Gentes', ref: '8–29', quote: `Kritik der heidnischen Vergöttlichung von Gestirnen, Elementen und Menschen.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Die frühe „Panbabylonismus"-These (Delitzsch) gilt heute als überholt. Führende Assyriologen wie Wilfred Lambert und Alexander Heidel kamen zu dem Ergebnis, dass Genesis 1 nicht direkt vom Enuma Elisch abhängt. Konsens ist, dass die Genesis die Vorstellungswelt des Alten Orients teilt (Walton: „kognitive Umwelt"). Bei der Flutgeschichte sind die Parallelen am engsten; viele Fachleute rechnen mit einer literarischen oder traditionsgeschichtlichen Beziehung. Erklärungen sind: (1) Israel übernahm und verwandelte mesopotamisches Material polemisch; (2) beide gehen auf eine gemeinsame Überlieferung eines realen Ereignisses zurück; (3) die Genesis bewahrt eine ältere, unverzerrte Tradition. Die Datierung der Genesis ist umstritten.`,
    sources: [lambert1965,
      { kind: 'fachliteratur', author: 'Alexander Heidel', work: 'The Babylonian Genesis (2. Aufl.) / The Gilgamesh Epic and Old Testament Parallels', year: '1951 / 1949', status: 'paraphrase' },
      gilgameschXI, atrahasis,
    ],
  },
  quickAnswer: `Ja, es gibt Parallelen – die Bibel spricht in die Welt des Alten Orients hinein. Aber ein genauer Vergleich zeigt kein Abschreiben, sondern eine bewusste Gegenrede: kein Götterkrieg, keine hungrigen Götter, Sonne und Mond zu „Lampen" degradiert, der Mensch als Gottes Ebenbild statt als Sklave, eine Flut aus moralischen Gründen. Führende Assyriologen wie Lambert und Heidel verneinten eine direkte Abhängigkeit vom Enuma Elisch. Die Flut-Parallelen erklärt eine gemeinsame Erinnerung an ein reales Ereignis mindestens ebenso gut.`,
  keyPoints: [
    `**Parallelen ehrlich zugeben:** Urwasser, Flut, Schiff, Vögel, Opfer – die Ähnlichkeiten sind real.`,
    `**Gegenrede statt Kopie:** Gen 1 entmythologisiert: Gestirne sind Lampen, Seeungeheuer sind Geschöpfe, Schöpfung durch das Wort (Hasel 1974).`,
    `**Menschenbild:** Ebenbild und Statthalter Gottes statt Arbeitssklave der Götter (Atrahasis, Enuma Elisch).`,
    `**Flutmotiv:** Moralische Verderbnis statt Lärm; ein souveräner Gott statt verängstigter, hungriger Götter; seetüchtiger Kasten statt Würfel.`,
    `**Fachurteil:** Lambert und Heidel – keine direkte Abhängigkeit von Enuma Elisch; *tehom* nicht von Tiamat abgeleitet (Tsumura).`,
    `**Älter heißt nicht wahrer:** Das Alter einer Tafel sagt nichts über das Alter einer Überlieferung – und eine spätere Korrektur kann ältere Irrtümer richtigstellen.`,
  ],
  voices: [
    {
      person: 'kitchen',
      role: 'als Ägyptologe und Altorientalist',
      text: `Kitchen ordnet Genesis 1–11 in die Literatur des Alten Orients ein und weist auf ein gemeinsames Grundmuster hin: Schöpfung, frühe Menschheit, Flut, Neubeginn – bezeugt in der Sumerischen Königsliste, im Atrahasis-Epos und in der sumerischen Flutgeschichte, alle im frühen 2. Jahrtausend v. Chr. belegt. Die Genesis nimmt dieses Muster auf, füllt es aber monotheistisch und ethisch völlig neu. Für Kitchen ist das Alter des gemeinsamen Musters ein Argument gegen eine späte Erfindung im Exil und dafür, dass die Genesis auf sehr alte Überlieferung zurückgreift.`,
      sources: [{ kind: 'fachliteratur', author: 'Kenneth A. Kitchen', work: 'On the Reliability of the Old Testament', ref: 'Kap. 9', year: '2003', status: 'paraphrase' }],
    },
    {
      person: 'gerhard-hasel',
      role: 'als Alttestamentler',
      text: `Hasel zeigte 1974, dass Genesis 1 an zentralen Stellen gezielt gegen die Mythologie seiner Umwelt formuliert ist. Das Urwasser (*tehom*) ist keine Göttin, sondern unbelebte Tiefe; die „großen Seeungeheuer" sind Geschöpfe, keine Chaosmächte; Sonne und Mond werden bewusst nicht mit ihren Namen genannt, die zugleich Götternamen waren, sondern als „großes" und „kleines Licht" eingeführt – erst am vierten Tag und mit dienender Funktion. Die Schöpfung durch das Wort ersetzt den Götterkampf. Das ist kein Abschreiben, sondern eine theologische Kampfschrift gegen den Polytheismus.`,
      sources: [hasel1974],
    },
    {
      person: 'john-walton',
      role: 'als Alttestamentler (altorientalischer Hintergrund)',
      text: `Walton spricht von einer gemeinsamen „kognitiven Umwelt": Israel teilte mit seinen Nachbarn viele Vorstellungen über die Welt – etwa das Bild eines Kosmos als Tempel. Daraus folge nicht literarische Abhängigkeit. Entscheidend sei, wie die Genesis diese gemeinsamen Vorstellungen umformt: Ihr Gott braucht keine Nahrung, keine Diener und keine Ruhe vor dem Lärm der Menschen; er setzt den Menschen als sein Bild und als Priester in seinen Kosmos-Tempel ein.`,
      sources: [{ kind: 'fachliteratur', author: 'John H. Walton', work: 'Ancient Near Eastern Thought and the Old Testament', year: '2006', status: 'paraphrase' }],
    },
    {
      person: 'kyrill-alexandrien',
      role: 'als Apologet gegen Kaiser Julian',
      text: `Kyrill antwortete in seiner großen Schrift gegen Kaiser Julian auf den Vorwurf, die Weisheit des Mose sei der griechischen Philosophie unterlegen. Er verteidigte den Schöpfungsbericht als wahre Offenbarung des einen Gottes, der durch sein Wort aus dem Nichts schafft, und stellte ihn über die Kosmogonien der Heiden. Die heutige Debatte über babylonische Mythen ist eine neue Form derselben alten Frage – und Kyrills Antwort bleibt: Die Ähnlichkeit der Themen verbirgt einen grundlegenden Unterschied im Gottesbild.`,
      sources: [{ kind: 'kirchenvater', author: 'Kyrill von Alexandrien', work: 'Contra Iulianum', ref: 'II', status: 'paraphrase' }],
    },
    {
      person: 'athanasius',
      role: 'als Apologet gegen das Heidentum',
      text: `Athanasius analysiert in *Contra Gentes* die heidnischen Göttergeschichten: Menschen hätten Gestirne, Elemente und schließlich sich selbst vergöttlicht. Dem stellt er den einen Schöpfer gegenüber, der über allem Geschaffenen steht. Genau diese Grenzziehung zwischen Schöpfer und Geschöpf ist das, was die Genesis von den babylonischen Texten unterscheidet.`,
      sources: [{ kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Contra Gentes', ref: '8–29', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'flutparallelen-zu-genau',
      objection: `Die Parallelen in der Flutgeschichte sind zu genau – Vögel, Opfer, Duft. Das ist abgeschrieben.`,
      objectionBy: 'Francesca Stavrakopoulou',
      answer: `Die Parallelen sind real, das gebe ich zu. Aber Ähnlichkeit kann auch aus gemeinsamer Erinnerung an dasselbe Ereignis stammen. Und die Unterschiede sind entscheidend: ein Gott statt vieler, Bosheit statt Lärm, ein seetüchtiger Kasten statt eines Würfels, Götter, die sich im Gilgamesch-Epos „wie Fliegen" um das Opfer drängen, gegenüber einem Gott, der einen Bund mit allem Leben schließt.`,
      sources: [gilgameschXI],
      followUps: [
        {
          id: 'keine-globale-flut',
          objection: `Gemeinsame Erinnerung? Es gab keine globale Flut – also bleibt nur literarische Abhängigkeit.`,
          answer: `Eine große regionale Flut in Mesopotamien könnte von allen erinnert worden sein – die Sumerische Königsliste teilt ihre Geschichte in „vor" und „nach der Flut". Und selbst literarische Abhängigkeit würde die Genesis nicht widerlegen: Inspirierte Autoren dürfen bekanntes Material aufgreifen und korrigieren – Paulus zitiert in Athen einen heidnischen Dichter (Apg 17,28).`,
          sources: [{ kind: 'bibel', work: 'Apostelgeschichte', ref: '17,28', quote: `Denn in ihm leben, weben und sind wir; wie auch etliche Poeten bei euch gesagt haben: »Wir sind seines Geschlechts.«`, translation: 'Luther 1912', status: 'verbatim' }],
          followUps: [
            {
              id: 'heidnisches-material',
              objection: `Dann gibst du zu, dass die Bibel heidnisches Material verwendet.`,
              answer: `Ja, möglicherweise – Gott spricht in menschlicher Sprache und in bekannten Formen. Entscheidend ist der neue Inhalt: Wie ein Prediger eine bekannte Geschichte aufgreift, um sie richtigzustellen. Kyrill und Athanasius kannten solche Vergleiche und betonten gerade den Unterschied im Gottesbild.`,
              followUps: [
                {
                  id: 'also-mythos',
                  objection: `Dann sei konsequent: Genesis 1–11 ist Mythologie, genau wie die Texte ihrer Nachbarn. „Mythos" heißt ja nicht „Lüge" – aber es heißt eben auch nicht Geschichte. Gibst du das zu?`,
                  objectionBy: 'Dan McClellan',
                  answer: `Es kommt darauf an, was du mit „Mythos" meinst. Wenn du meinst: Die Genesis erzählt in der Bildsprache und den Formen ihrer Zeit von Ursprung und Sinn der Welt – ja, in diesem Sinn teilt sie Formen mit ihrer Umwelt. Wenn du meinst: Sie erzählt von nichts, was wirklich geschah – nein. Gerade die Genesis verankert ihre Urgeschichte durch Stammbäume und die Toledot-Formel in der Geschichte Israels, und die Kirche bekennt Adam, Eva und den Fall als real.`,
                  detail: `**Begriffe klären:** In der Fachwelt wird „Mythos" sehr unterschiedlich gebraucht – von „Göttergeschichte" bis „sinnstiftende Ursprungserzählung". Frag freundlich nach, welche Bedeutung gemeint ist, bevor du antwortest.

**Was die Genesis von Mythen unterscheidet:**
- **Kein Götterpantheon**, keine Theogonie (Entstehung der Götter), kein Kampf zwischen Göttern.
- **Geschichtlicher Anschluss:** Die Toledot-Formel verbindet die Urgeschichte (Gen 2,4; 5,1; 6,9; 10,1; 11,10) bruchlos mit Abraham und Israel. Kenneth Kitchen spricht von einer Form, die Ursprungserzählung und Geschichte verbindet, wie sie auch die Sumerische Königsliste kennt.
- **Theologische Gegenrede:** Wo die Nachbartexte Götter verherrlichen, entzaubert die Genesis die Welt (siehe Hasel).

**Koptisch-orthodox:** Die Kirche liest Genesis 1–3 im wörtlichen und geistlichen Sinn. Über Details der Bildsprache gibt es Freiheit; verbindlich ist, dass Gott alles aus dem Nichts schuf, dass Adam und Eva reale Personen sind und der Sündenfall real ist.`,
                  voices: [
                    {
                      person: 'kitchen',
                      role: 'als Altorientalist',
                      text: `Kitchen weist darauf hin, dass altorientalische Ursprungstexte häufig nahtlos in Königslisten und historische Berichte übergehen. Die Genesis folgt einem ähnlichen Muster: Ihre Urgeschichte ist durch Genealogien mit der Geschichte der Erzväter verbunden. Das unterscheidet sie von reinen Göttermythen und zeigt, dass sie als Vorgeschichte realer Menschen gelesen werden wollte.`,
                      sources: [{ kind: 'fachliteratur', author: 'Kenneth A. Kitchen', work: 'On the Reliability of the Old Testament', ref: 'Kap. 9', year: '2003', status: 'paraphrase' }],
                    },
                  ],
                  questionsBack: [`Was genau meinst du mit „Mythos" – eine Göttergeschichte, oder eine Ursprungserzählung, die in der Sprache ihrer Zeit von realen Anfängen spricht?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'enuma-elisch-reihenfolge',
      objection: `Enuma Elisch: Urwasser Tiamat gleich tehom, Spaltung der Wasser, Gestirne, Menschen – dieselbe Reihenfolge wie Genesis 1.`,
      objectionBy: 'Hermann Gunkel',
      answer: `*Tehom* ist sprachlich nicht von Tiamat abgeleitet, sondern ein gemeinsemitisches Wort. Die Reihenfolge weicht in vielen Punkten ab, und das Enuma Elisch ist vor allem ein Lobpreis auf Marduks Aufstieg, in dem die Welt aus dem zerteilten Leib einer getöteten Göttin entsteht. Der Assyriologe Wilfred Lambert hat die direkte Abhängigkeit deshalb verneint.`,
      sources: [lambert1965],
      followUps: [
        {
          id: 'lambert-kritiker',
          objection: `Lambert war doch selbst kein Verteidiger der Bibel.`,
          answer: `Genau deshalb ist sein Urteil wichtig: Ein führender Assyriologe ohne apologetisches Interesse kam zu dem Ergebnis, dass das Enuma Elisch nicht die Quelle von Genesis 1 ist.`,
          followUps: [
            {
              id: 'ugarit-baal',
              objection: `Dann eben kanaanäische Mythen – Baal gegen das Meer, Leviathan. Die Bibel ist voll davon.`,
              answer: `Psalmen und Hiob verwenden diese Bilder poetisch, um Gottes Macht über alle Chaosmächte zu besingen (z. B. Ps 74,13–14). Genesis 1 geht noch weiter: Dort gibt es gar keinen Kampf – die „großen Seeungeheuer" sind Geschöpfe, die Gott „gut" nennt (Gen 1,21). Das ist bewusste Entmythologisierung.`,
              followUps: [
                {
                  id: 'jhwh-und-seine-aschera',
                  objection: `Die Archäologie zeigt, dass Israel ursprünglich gar nicht monotheistisch war. In Kuntillet Adschrud steht „JHWH und seine Aschera" – Gott hatte eine Gemahlin. Der Monotheismus der Genesis ist eine späte Redaktion, die das ältere Pantheon übermalt.`,
                  objectionBy: 'Francesca Stavrakopoulou',
                  answer: `Die Inschriften sind echt, und ich bestreite nicht, dass viele Israeliten Aschera verehrten. Aber das berichtet die Bibel selbst ausführlich – und verurteilt es: Propheten wie Jeremia und Könige wie Josia kämpften genau gegen diese Mischreligion (2 Kön 23,4–7; Jer 44). Volksreligion ist nicht dasselbe wie die Offenbarung, die die Propheten verkündeten. Aus „Israeliten taten X" folgt nicht „Gottes Wort lehrte X".`,
                  detail: `**Die Befunde:** In Kuntillet ʿAdschrud (Sinai, um 800 v. Chr.) fanden sich Segensformeln „durch JHWH von Samaria und seine Aschera" bzw. „JHWH von Teman und seine Aschera"; ähnlich in Khirbet el-Qom. Ob „Aschera" hier eine Göttin oder ein Kultpfahl ist, wird diskutiert; jedenfalls belegen die Texte eine Verehrung, die JHWH mit Aschera verband.

**Die Bibel als ehrlicher Zeuge:** Die Schrift verschweigt das nicht. Sie berichtet, dass Aschera-Bilder sogar im Tempel standen, bis Josia sie entfernen ließ (2 Kön 23,6), und dass Frauen in Ägypten der „Himmelskönigin" opferten (Jer 44,17–19). Die biblische Botschaft ist gerade die Kritik dieser Praxis.

**Deuteronomium 32,8–9:** Manche verweisen auf die „Söhne Gottes", unter die die Völker verteilt werden. In der biblischen Sicht sind diese himmlischen Wesen Geschöpfe im Rat Gottes, nicht gleichrangige Götter (vgl. Ps 82; Hiob 1).

**Fair bleiben:** Die Entstehung des Monotheismus in Israel ist eine ernsthafte Forschungsfrage. Du kannst zugestehen, dass die Volksreligion vielfältig war, und zugleich zeigen, dass die Genesis die prophetische Norm ausdrückt, nicht die Praxis, gegen die die Propheten kämpften.`,
                  sources: [
                    { kind: 'wissenschaft', work: 'Inschriften von Kuntillet ʿAdschrud (Sinai)', year: 'um 800 v. Chr.', quote: `Segensformeln „durch JHWH von Samaria und seine Aschera" bzw. „JHWH von Teman und seine Aschera".`, status: 'paraphrase', note: 'Ob „Aschera" hier eine Göttin oder ein Kultsymbol bezeichnet, ist in der Forschung umstritten.' },
                    { kind: 'bibel', work: '2. Könige', ref: '23,6', quote: `Und ließ das Ascherabild aus dem Hause des HERRN führen hinaus vor Jerusalem an den Bach Kidron und verbrannte es am Bach Kidron und machte es zu Staub.`, translation: 'Luther 1912', status: 'paraphrase' },
                    { kind: 'gegner', author: 'Francesca Stavrakopoulou', work: 'God: An Anatomy', year: '2021', quote: `Stavrakopoulou rekonstruiert den Gott der Bibel als körperliche, ursprünglich in ein Pantheon eingebundene Gottheit.`, status: 'paraphrase' },
                  ],
                  questionsBack: [`Wenn die Bibel selbst berichtet und verurteilt, dass Israeliten Aschera verehrten – ist die Inschrift dann ein Argument gegen die Bibel oder eine Bestätigung ihres Berichts?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'sonne-mond-primitiv',
      objection: `Dass Sonne und Mond in Genesis 1 nicht beim Namen genannt werden, zeigt nur primitives Denken.`,
      answer: `Das Hebräische hat die Wörter *schemesch* (Sonne) und *jareach* (Mond) und verwendet sie anderswo ständig. In Genesis 1 werden sie gemieden, weil sie zugleich Götternamen der Umwelt waren. Sonne und Mond erscheinen erst am vierten Tag – nach dem Licht und den Pflanzen – als „Lichter", die Zeiten anzeigen. Das ist gezielte Herabstufung, keine Primitivität.`,
      sources: [hasel1974],
      followUps: [
        {
          id: 'ueberinterpretation',
          objection: `Das ist Überinterpretation.`,
          answer: `Der Kontext stützt sie: Sonnen- und Mondgötter (Schamasch, Sin, Re) gehörten zu den höchsten Gottheiten der Nachbarvölker. Dass Genesis 1 sie als Lampen und Zeitgeber beschreibt, wird in der Fachliteratur weithin als bewusste Polemik verstanden – nicht nur von Hasel, sondern z. B. auch im Genesis-Kommentar von Gordon Wenham.`,
        },
      ],
    },
    {
      id: 'babylonisch-aelter',
      objection: `Die babylonischen Texte sind älter – also hat Israel abgeschrieben.`,
      objectionBy: 'Friedrich Delitzsch',
      answer: `Das Alter einer Tontafel ist nicht das Alter einer Überlieferung. Kitchen zeigt, dass das Grundmuster „Schöpfung – Flut – Neubeginn" schon im frühen 2. Jahrtausend belegt ist; die Genesis kann sehr alte Tradition bewahren. Und „älter" heißt nicht „wahrer": Eine spätere Fassung kann ältere Verzerrungen korrigieren.`,
      followUps: [
        {
          id: 'exil-geschrieben',
          objection: `Die Genesis wurde aber erst im babylonischen Exil geschrieben.`,
          answer: `Die Datierung ist umstritten (siehe den Claim zur Urkundenhypothese). Aber selbst bei einer Endredaktion im Exil bleibt der Befund: Die Genesis stellt sich gegen die babylonische Religion, statt sie zu übernehmen – eine Gegenrede an die Sieger, mitten in deren Hauptstadt.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Welche Unterschiede zwischen Gilgamesch und Genesis hältst du für unwichtig – und warum?`,
    `Warum nennt Genesis 1 Sonne und Mond nicht beim Namen, obwohl das Hebräische die Wörter kennt?`,
    `Wie erklärst du, dass Assyriologen wie Lambert eine direkte Abhängigkeit vom Enuma Elisch verneinen?`,
    `Ist ein Text, der eine ältere Geschichte korrigiert, deshalb weniger wahr?`,
  ],
  avoid: [
    `„Es gibt keine Parallelen" – sie sind offensichtlich; erkläre sie.`,
    `„Die Babylonier haben von Mose abgeschrieben" – chronologisch nicht haltbar für die erhaltenen Texte.`,
    `Die Arche-Proportionen als „wissenschaftlichen Beweis" der Inspiration ausgeben – es ist ein Unterschied, kein Beweis.`,
  ],
  concessions: [
    `Die Flutgeschichten in Gilgamesch, Atrahasis und Genesis sind sich in vielen Einzelheiten ähnlich.`,
    `Die erhaltenen babylonischen Tafeln sind älter als die ältesten erhaltenen Handschriften der Genesis.`,
  ],
  furtherReading: [
    hasel1974,
    { kind: 'fachliteratur', author: 'John H. Walton', work: 'Ancient Near Eastern Thought and the Old Testament', year: '2006', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Kenneth A. Kitchen', work: 'On the Reliability of the Old Testament', year: '2003', status: 'paraphrase' },
    lambert1965,
  ],
  difficulty: 2,
  tags: ['Gilgamesch', 'Enuma Elisch', 'Atrahasis', 'Altorientalische Mythen', 'Polemik'],
  related: ['erdalter/sintflut-unmoeglich', 'genesis/genesis-1-und-2-widerspruch', 'at-archaeologie/dokumentenhypothese', 'antike-parallelen/jesus-kopie-horus-mithras'],
};

export default claim;
