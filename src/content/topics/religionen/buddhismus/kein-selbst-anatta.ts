import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'kein-selbst-anatta',
  title: `„Es gibt kein Selbst (Anatta)."`,
  proponents: [
    { name: 'Siddhartha Gautama, der Buddha', role: 'Begründer des Buddhismus (5. Jh. v. Chr.)', work: 'Anattalakkhana-Sutta (Samyutta-Nikaya 22,59)' },
    { name: 'Nagasena', role: 'Buddhistischer Mönch im Dialog mit dem indo-griechischen König Menander (Milinda)', work: 'Milindapanha (Die Fragen des Milinda)' },
    { name: 'Sam Harris', role: 'Neurowissenschaftler und Autor', work: 'Waking Up: A Guide to Spirituality Without Religion (2014)' },
    { name: 'Thomas Metzinger', role: 'Philosoph, Universität Mainz', work: 'Being No One (2003); Der Ego-Tunnel (2009)' },
    { name: 'Stephen Batchelor', role: 'Säkularer buddhistischer Lehrer und Autor', work: 'Buddhism Without Beliefs (1997)' },
  ],
  steelman: `Such dein Selbst – du wirst es nicht finden. Dein Körper verändert sich ständig; Gefühle, Wahrnehmungen, Willensregungen und Bewusstseinsmomente kommen und gehen. Der Buddha prüfte jede dieser fünf „Daseinsgruppen" und stellte fest: „Das ist nicht mein, das bin ich nicht, das ist nicht mein Selbst" (SN 22,59). „Ich" ist eine praktische Bezeichnung wie „Wagen" für eine Ansammlung von Achse, Rädern und Deichsel. Die moderne Neurowissenschaft bestätigt das: Es gibt im Gehirn kein Ich-Zentrum, das Selbst ist ein Modell, das das Gehirn von sich entwirft (Metzinger). In der Meditation kann jeder selbst erfahren, dass das Ich-Gefühl verschwindet, während Bewusstsein bleibt (Harris). Der Glaube an ein festes, ewiges Selbst ist dagegen die Wurzel von Gier, Hass und Angst. Die christliche „unsterbliche Seele" ist eine unbelegte metaphysische Annahme – und eine, die Leid erzeugt.`,
  biblical: {
    summary: `Die Bibel teilt den Blick auf die Vergänglichkeit („Ein Mensch ist in seinem Leben wie Gras", Ps 103,15) und ruft zur Selbstverleugnung (Mt 16,24–25; Gal 2,20). Aber sie verneint nicht die **Person**, sondern ihr Kreisen um sich selbst. Der Mensch ist von Gott beim Namen gerufen (Jes 43,1), von ihm erkannt (Ps 139), verantwortlich (2 Kor 5,10) und zur Auferstehung bestimmt (1 Kor 15). Seine Identität gründet nicht in einer unzerstörbaren Substanz, die er besitzt, sondern in dem Gott, der ihn kennt, liebt und ruft.`,
    detail: `- **Vergänglichkeit:** Ps 90; Ps 103,15–16; Pred 1,2; Jak 4,14 – die Bibel ist hier dem Buddha erstaunlich nahe.
- **Selbstverleugnung:** „Wer sein Leben erhalten will, der wird's verlieren; wer aber sein Leben verliert um meinetwillen, der wird's finden" (Mt 16,25). Das Ziel ist **Finden**, nicht Auslöschen.
- **Gal 2,20:** „Ich lebe aber; doch nun nicht ich, sondern Christus lebt in mir" – das Ich lebt, aber neu, von Christus bewohnt.
- **Leib und Seele:** Mt 10,28 unterscheidet Leib und Seele; 1 Kor 15 verheißt die Auferstehung desselben Menschen in verwandelter Leiblichkeit.
- **Name und Einzigartigkeit:** Jes 43,1; Lk 10,20 („eure Namen sind im Himmel geschrieben"); Offb 2,17 (ein neuer Name, den nur der Empfänger kennt).`,
    sources: [
      { kind: 'bibel', work: 'Jesaja', ref: '43,1', quote: `Fürchte dich nicht, denn ich habe dich erlöst; ich habe dich bei deinem Namen gerufen; du bist mein!`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Matthäus', ref: '16,25', quote: `Denn wer sein Leben erhalten will, der wird's verlieren; wer aber sein Leben verliert um meinetwillen, der wird's finden.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Galater', ref: '2,20', quote: `Ich lebe aber; doch nun nicht ich, sondern Christus lebt in mir.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Psalmen', ref: '103,15–16', quote: `Ein Mensch ist in seinem Leben wie Gras, er blüht wie eine Blume auf dem Felde; wenn der Wind darüber geht, so ist sie nimmer da, und ihre Stätte kennt sie nicht mehr.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche lehrt, dass Gott den Menschen nach seinem Bild mit einer vernunftbegabten Seele geschaffen hat. Der hl. Athanasius begründet die Wirklichkeit der vernünftigen Seele damit, dass der Mensch über sich selbst nachdenkt, das Abwesende bedenkt und das Unsichtbare erstrebt – was kein Körperorgan von sich aus vermag. Die Wüstenväter kannten das „Sterben des Ich" sehr genau: Sie kämpften gegen Leidenschaften, Eigenwillen und Stolz. Doch dieser Kampf löste die Person nicht auf, sondern heilte sie – der hl. Antonius trat nach zwanzig Jahren Einsamkeit als ausgeglichener, gütiger und unverwechselbarer Vater hervor.`,
    sources: [
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Gegen die Heiden (Contra Gentes)', ref: '30–33', year: 'ca. 318', quote: `Dass der Mensch eine vernünftige Seele hat, zeigt sich daran, dass er allein über das nachdenkt, was außerhalb seiner selbst ist, Abwesendes bedenkt und mit dem Geist über die Sinne hinaus urteilt.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Leben des Antonius (Vita Antonii)', ref: '14', year: 'ca. 357', quote: `Als Antonius nach zwanzig Jahren hervortrat, war sein Zustand der Seele rein: weder bedrückt noch durch Vergnügen zerstreut, ganz im Gleichgewicht, wie einer, der von der Vernunft gelenkt wird.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Antonius der Große', work: 'Briefe (ed. S. Rubenson, The Letters of St Antony)', quote: `Wer sich selbst kennt, kennt Gott.`, status: 'unverified', note: 'Häufig zitierter Gedanke aus den Antonius-Briefen; genaue Briefstelle vor Verwendung prüfen.' },
    ],
  },
  opposingView: {
    summary: `In den Lehrreden des Pali-Kanons prüft der Buddha die fünf Daseinsgruppen (Form, Gefühl, Wahrnehmung, Gestaltungen, Bewusstsein) und erklärt von jeder: „Das ist nicht mein, das bin ich nicht, das ist nicht mein Selbst." Ob der Buddha damit **jedes** Selbst bestreitet oder nur lehrt, nichts Vergängliches als Selbst zu ergreifen, ist unter Fachleuten umstritten. Als der Wanderer Vacchagotta ihn direkt fragte, ob es ein Selbst gebe, schwieg der Buddha – und ebenso bei der Frage, ob es kein Selbst gebe (SN 44,10). Innerhalb des Buddhismus vertraten die Pudgalavadins eine „Person" (*pudgala*), die weder mit den Daseinsgruppen identisch noch von ihnen verschieden ist; Vasubandhu (4./5. Jh.) bekämpfte sie. Mahayana-Texte über die Buddha-Natur sprechen sogar von einem „wahren Selbst".`,
    detail: `Moderne Vertreter (Harris, Metzinger) verbinden Anatta mit der Neurowissenschaft: Es gebe kein zentrales „Ich" im Gehirn; das Selbst sei ein vom Gehirn erzeugtes Modell. Andere Forscher, etwa der Philosoph Evan Thompson, halten dagegen, dass das Selbst zwar kein Ding, aber ein wirklicher Prozess ist, und kritisieren einen „buddhistischen Exzeptionalismus", der den Buddhismus vorschnell als wissenschaftlich bestätigt ausgibt.`,
    sources: [
      { kind: 'oestlich', work: 'Samyutta-Nikaya 22,59 (Anattalakkhana-Sutta)', original: 'netaṃ mama, nesohamasmi, na meso attā', quote: `Das ist nicht mein, das bin ich nicht, das ist nicht mein Selbst.`, translation: 'eigene Übersetzung', status: 'verbatim' },
      { kind: 'oestlich', work: 'Samyutta-Nikaya 44,10 (Ananda-Sutta)', quote: `Auf die Frage Vacchagottas, ob es ein Selbst gebe, schwieg der Buddha; ebenso auf die Frage, ob es kein Selbst gebe. Ananda erklärt er: Die Bejahung hätte die Ewigkeitslehre, die Verneinung die Vernichtungslehre bestärkt.`, status: 'paraphrase' },
      { kind: 'oestlich', work: 'Samyutta-Nikaya 5,10 (Vajira-Sutta)', original: 'yathā hi aṅgasambhārā, hoti saddo ratho iti; evaṃ khandhesu santesu, hoti sattoti sammuti', quote: `Wie bei der Zusammenfügung von Teilen das Wort „Wagen" gebraucht wird, so gibt es, wenn die Daseinsgruppen vorhanden sind, die Konvention „ein Wesen".`, translation: 'eigene Übersetzung', status: 'verbatim' },
      { kind: 'fachliteratur', author: 'Evan Thompson', work: 'Why I Am Not a Buddhist', year: '2020', status: 'paraphrase', quote: `Kritik am „buddhistischen Exzeptionalismus", der den Buddhismus als wissenschaftliche Religion darstellt; das Selbst als wirklicher, wenn auch nicht substanzhafter Prozess.`, note: 'Thompson ist kein Christ und selbst langjährig mit dem Buddhismus vertraut.' },
    ],
  },
  quickAnswer: `Ich stimme zu: Mein Körper, meine Gefühle und Gedanken sind vergänglich, und das Kreisen um mich selbst macht unglücklich. Aber wenn es gar kein Selbst gibt – wer wird dann wiedergeboren, wer erntet das Karma und wer erlangt das Nirvana? Und wer ist es, der der „Illusion" eines Ichs erliegt? Eine Täuschung braucht jemanden, der getäuscht wird. Das Christentum sagt: Du bist kein Ding und keine Illusion, sondern eine Person, die Gott beim Namen ruft. Nicht das Ich soll verschwinden, sondern seine Selbstsucht.`,
  keyPoints: [
    `**Wer wird befreit?** Karma, Wiedergeburt und Nirvana setzen jemanden voraus, der handelt, erntet und befreit wird. Strenges Anatta nimmt diesen Lehren ihren Sinn.`,
    `**Täuschung braucht einen Getäuschten:** „Das Selbst ist eine Illusion" heißt: Ein falscher Anschein erscheint – aber wem? Augustinus: „Wenn ich mich täusche, bin ich."`,
    `**Der Buddha selbst schwieg:** Auf die Frage, ob es ein Selbst gibt oder nicht, schwieg er (SN 44,10). „Es gibt kein Selbst" ist eine spätere, dogmatische Zuspitzung.`,
    `**Der Buddhismus ist sich uneins:** Die Pudgalavadins (eine bedeutende Schule) lehrten eine „Person"; Mahayana-Texte sprechen vom „wahren Selbst" der Buddha-Natur.`,
    `**Der Wagen beweist zu viel:** Ein Wagen ist ein wirkliches, geordnetes Ganzes – kein Nichts. Und Wagen leiden, wollen und erinnern nicht; Personen schon.`,
    `**Christliche Selbstverleugnung ist Heilung, nicht Auslöschung:** „Wer sein Leben verliert um meinetwillen, wird's finden" (Mt 16,25).`,
  ],
  argument: {
    name: 'Das Argument „Wer erlangt das Nirvana?"',
    summary: 'Die buddhistischen Lehren von Karma, Wiedergeburt und Befreiung setzen ein Subjekt voraus, das strenges Anatta leugnet.',
    premises: [
      {
        text: 'P1: Der Buddhismus lehrt, dass absichtliche Taten (Karma) Früchte für die Zukunft des Handelnden tragen, dass es Wiedergeburt gibt und dass Befreiung (Nirvana) ein erstrebenswertes Ziel ist.',
        support: 'Grundlehre aller Schulen; der Buddha: „Absicht nenne ich Karma" (Anguttara-Nikaya 6,63).',
        sources: [
          { kind: 'oestlich', work: 'Anguttara-Nikaya 6,63 (Nibbedhika-Sutta)', original: 'cetanāhaṃ, bhikkhave, kammaṃ vadāmi', quote: `Die Absicht, ihr Mönche, nenne ich Karma.`, translation: 'eigene Übersetzung', status: 'verbatim' },
        ],
      },
      {
        text: 'P2: Diese Lehren setzen ein Subjekt voraus, das handelt, die Folgen trägt, fortdauert und befreit wird.',
        support: 'Gerechte Vergeltung verlangt, dass der, der erntet, derselbe ist, der gesät hat. Ein Ziel ist immer Ziel für jemanden.',
      },
      {
        text: 'P3: Strenges Anatta bestreitet jedes solche Subjekt; es gibt nur einen Strom bedingter Ereignisse, „Person" ist bloße Konvention.',
        support: 'So die Abhidharma-Deutung und die meisten modernen Vertreter (Harris, Metzinger).',
      },
    ],
    inferences: [
      'Entweder ist Anatta nicht streng gemeint – dann gibt es doch in einem wirklichen Sinn ein Selbst (so die Pudgalavadins und Teile des Mahayana) –,',
      'oder Karma, Verantwortung und Befreiung verlieren ihren Sinn: Niemand erntet, niemand wird befreit.',
    ],
    conclusion: 'Der strenge Anatta-Buddhismus ist mit seiner eigenen Heilslehre in Spannung. Die christliche Sicht – die Person ist wirklich, weil der dreieinige Gott personal ist und sie beim Namen ruft – erklärt Verantwortung, Liebe und Hoffnung besser.',
    horns: [
      { label: 'Horn A: Es gibt ein Selbst (in irgendeinem Sinn)', text: 'Dann ist „Es gibt kein Selbst" falsch, und die Frage lautet nur noch: Was für ein Selbst – und woher kommt es?' },
      { label: 'Horn B: Es gibt wirklich kein Selbst', text: 'Dann wird niemand wiedergeboren, niemand erntet Karma, niemand erlangt Nirvana. Der Heilsweg wäre ein Weg für niemanden.' },
    ],
  },
  voices: [
    {
      person: 'paul-williams',
      role: 'als Buddhologe, der zwanzig Jahre buddhistisch praktizierte',
      text: `Paul Williams, einer der führenden Fachleute für Mahayana-Buddhismus, beschreibt, wie ihm die Konsequenz von Anatta und Wiedergeburt zum Problem wurde: Wenn das Wesen, das nach meinem Tod wiedergeboren wird, weder meinen Körper noch meine Erinnerungen noch meine Persönlichkeit hat, dann ist es nicht ich. Für mich – diese Person – bedeutet der Tod dann das Ende. Der buddhistische Weg bietet also gerade der Person, die jetzt leidet und sucht, keine Hoffnung. Das christliche Versprechen gilt dagegen der Person selbst.`,
      sources: [
        { kind: 'fachliteratur', author: 'Paul Williams', work: 'The Unexpected Way: On Converting from Buddhism to Catholicism', year: '2002', status: 'paraphrase', quote: `Wenn der Buddhismus wahr ist, gibt es für mich, diese Person, keine Hoffnung über den Tod hinaus.` },
      ],
    },
    {
      person: 'augustinus',
      role: 'als Philosoph der Selbstgewissheit',
      text: `Lange vor Descartes formulierte Augustinus gegen die antiken Skeptiker: Wer sich täuscht, muss existieren, um sich täuschen zu können. Ich kann daran zweifeln, ob mein Selbst dauerhaft, einfach oder unsterblich ist – aber nicht daran, dass jemand zweifelt. Wer sagt „Das Ich ist eine Illusion", setzt voraus, dass es jemanden gibt, dem diese Illusion erscheint. Augustinus wird hier als Philosoph herangezogen.`,
      sources: [
        { kind: 'kirchenvater', author: 'Augustinus', work: 'Vom Gottesstaat (De civitate Dei)', ref: 'XI,26', year: 'ca. 417', original: 'Si enim fallor, sum.', quote: `Denn wenn ich mich täusche, bin ich.`, status: 'verbatim', translation: 'eigene Übersetzung' },
      ],
    },
    {
      person: 'swinburne',
      role: 'als Religionsphilosoph der personalen Identität',
      text: `Richard Swinburne argumentiert, dass personale Identität sich nicht auf körperliche oder psychische Kontinuität zurückführen lässt. Gedankenexperimente wie die Teilung eines Gehirns in zwei Hälften zeigen: Die Frage „Welcher der beiden bin ich?" hat eine Antwort, auch wenn alle körperlichen und psychischen Fakten bekannt sind. Das spricht dafür, dass die Person mehr ist als ein Bündel von Zuständen – ein einfaches, unteilbares Subjekt, das klassisch „Seele" heißt.`,
      sources: [
        { kind: 'fachliteratur', author: 'Richard Swinburne', work: 'The Evolution of the Soul', year: '1986; überarb. 1997', status: 'paraphrase' },
        { kind: 'fachliteratur', author: 'Richard Swinburne', work: 'Mind, Brain, and Free Will', year: '2013', status: 'paraphrase' },
      ],
    },
    {
      person: 'athanasius',
      role: 'als Lehrer der vernunftbegabten Seele',
      text: `Athanasius sieht im menschlichen Geist ein Zeichen, das über den Körper hinausweist: Der Mensch kann über sich selbst nachdenken, sich das Abwesende vorstellen, das Ewige bedenken und sogar den Leib zügeln. Darin zeigt sich eine vernünftige Seele, die nach Gottes Bild geschaffen ist. Diese Seele ist kein unabhängiger göttlicher Funke, sondern Geschöpf – aber ein wirkliches.`,
      sources: [
        { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Contra Gentes', ref: '30–33', status: 'paraphrase' },
      ],
    },
    {
      person: 'antonius',
      role: 'als Vater der Mönche',
      text: `Der hl. Antonius hat jahrzehntelang in der Wüste mit dem gerungen, was der Buddhismus „Begehren" nennt: Gier, Zorn, Stolz, Eigenwille. Insofern kennt die koptische Wüstentradition die Erfahrung, das falsche Ich loszulassen, aus erster Hand. Doch das Ergebnis war nicht das Erlöschen der Person, sondern ihre Heilung: Antonius wurde zu einem unverwechselbaren, warmherzigen geistlichen Vater, den Menschen aus ganz Ägypten aufsuchten. Selbsterkenntnis führt nach dieser Tradition zu Gott, nicht ins Leere.`,
      sources: [
        { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Vita Antonii', ref: '14', status: 'paraphrase' },
      ],
    },
    {
      person: 'chesterton',
      role: 'als Beobachter christlicher und buddhistischer Heiligkeit',
      text: `Chesterton fasste den Unterschied in ein Bild: Der buddhistische Heilige wird mit geschlossenen Augen dargestellt, der christliche mit weit geöffneten. Der eine wendet sich nach innen, um die Welt und das Ich als Schein zu durchschauen; der andere schaut staunend auf eine wirkliche Welt und auf wirkliche Menschen, die er lieben will. Für Chesterton folgt das aus dem christlichen Glauben, dass Gott die Welt als Gegenüber gewollt hat.`,
      sources: [
        { kind: 'fachliteratur', author: 'G. K. Chesterton', work: 'Orthodoxy', ref: 'Kap. 8', year: '1908', original: 'The Buddhist saint always has his eyes shut, while the Christian saint always has them very wide open.', quote: `Der buddhistische Heilige hat die Augen immer geschlossen, der christliche Heilige hat sie immer weit geöffnet.`, status: 'verbatim', translation: 'eigene Übersetzung' },
      ],
    },
  ],
  dialog: [
    {
      id: 'wagen-gleichnis',
      objection: `Nagasena hat es erklärt: Wie „Wagen" nur ein Name für Achse, Räder und Deichsel ist, so ist „Nagasena" nur ein Name für die Daseinsgruppen. Es gibt keinen Wagen über den Teilen hinaus – und kein Selbst über den Erlebnissen hinaus.`,
      objectionBy: 'Stephen Batchelor (nach dem Milindapanha)',
      targetsPremise: 2,
      answer: `Das Gleichnis beweist zu viel und zu wenig. Ein Wagen ist keine Illusion, sondern ein wirkliches, geordnetes Ganzes mit einer Funktion, die keines seiner Teile hat – also können auch Personen wirkliche Ganzheiten sein. Vor allem aber leiden Wagen nicht, wollen nichts und streben nicht nach Befreiung; Personen schon. Und wer versteht eigentlich Nagasenas Argument? Das Gleichnis setzt jemanden voraus, der es begreift.`,
      sources: [
        { kind: 'oestlich', work: 'Milindapanha', ref: 'Buch II, Kap. 1,1 (Wagengleichnis)', quote: `Nagasena: „Nagasena" ist nur eine Bezeichnung, eine Benennung, ein bloßer Name; eine Person wird hier nicht vorgefunden. Wie „Wagen" nur aufgrund von Deichsel, Achse, Rädern usw. gesagt wird.`, status: 'paraphrase' },
      ],
      followUps: [
        {
          id: 'kein-versteher',
          objection: `Auch das Verstehen ist nur ein Prozess. Es gibt keinen „Versteher" hinter dem Verstehen – nur das Geschehen selbst.`,
          objectionBy: 'Sam Harris',
          targetsPremise: 2,
          answer: `Dann frage ich: Wer ist für das verantwortlich, was dieser Prozess tut? Der Buddha sagte: „Die Absicht nenne ich Karma" (AN 6,63). Eine Absicht ohne jemanden, der beabsichtigt? Wenn niemand handelt, kann auch niemand die Frucht seines Handelns ernten – und dann verliert die Karma-Lehre, auf der der ganze buddhistische Weg ruht, ihren Sinn.`,
          followUps: [
            {
              id: 'karma-ohne-taeter',
              objection: `Karma braucht keinen Täter, nur Kausalität. Ein Zustand bedingt den nächsten – wie eine Flamme die nächste entzündet. Der Wiedergeborene ist „weder derselbe noch ein anderer".`,
              objectionBy: 'Nagasena (Milindapanha)',
              answer: `Dann trifft die Folge einer Tat jemanden, der „nicht derselbe" ist wie der Täter. Das ist genau die Ungerechtigkeit, die Buddhisten oft der christlichen Stellvertretung vorwerfen – nur ohne die Liebe, die sie freiwillig übernimmt. Und warum sollte ich mich heute mühen, damit ein künftiger Strom, der nicht ich bin, befreit wird?`,
              sources: [
                { kind: 'oestlich', work: 'Milindapanha', ref: 'Buch II, Kap. 2,1', original: 'na ca so na ca añño', quote: `Weder derselbe noch ein anderer – wie die Flamme in der ersten, mittleren und letzten Nachtwache weder dieselbe noch eine andere ist.`, status: 'paraphrase' },
              ],
              followUps: [
                {
                  id: 'leid-ueberhaupt-mindern',
                  objection: `Weil es um die Minderung von Leid überhaupt geht, nicht um „mein" Leid. Das ist Mitgefühl ohne Ego – die höchste Ethik.`,
                  objectionBy: 'Stephen Batchelor',
                  answer: `Eine schöne Ethik – aber dann ist der Weg nicht mehr die Befreiung von Personen, sondern das Verringern von Leidensereignissen, und niemand wird je befreit. Außerdem: Leid ohne Leidenden gibt es nicht. Schmerz ist immer jemandes Schmerz. Christen haben Mitgefühl gerade deshalb, weil jeder Leidende eine unersetzliche Person ist, deren Haare auf dem Haupt gezählt sind (Mt 10,30).`,
                  questionsBack: [
                    `Kannst du dir einen Schmerz vorstellen, der niemandes Schmerz ist?`,
                    `Wenn niemand befreit wird – was genau feiert ihr dann am Vesakh-Fest, dem Fest der Erleuchtung des Buddha?`,
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'seele-unbelegt',
          objection: `Ihr Christen habt keinen einzigen Beleg für eine unsterbliche Seele. Das ist reine Metaphysik.`,
          objectionBy: 'Sam Harris',
          answer: `Es gibt starke philosophische Gründe: die Einheit des Bewusstseins, die Perspektive der ersten Person, die Fähigkeit zu Vernunft und Bedeutung (Swinburne, Moreland). Aber wichtiger: Die christliche Hoffnung ist nicht zuerst die Unsterblichkeit einer unzerstörbaren Seele wie bei Platon, sondern die Auferstehung der Person durch Gott. Die Kontinuität meiner Identität verbürgt der Gott, der mich kennt – nicht eine Substanz, die ich besitze.`,
          followUps: [
            {
              id: 'kein-ich-zentrum',
              objection: `Die Neurowissenschaft zeigt: Es gibt im Gehirn kein Ich-Zentrum. Das Selbst ist ein Modell, das das Gehirn von sich entwirft (Metzinger).`,
              objectionBy: 'Thomas Metzinger',
              answer: `Dass es kein Ich-Zentrum im Gehirn gibt, zeigt nicht, dass es kein Selbst gibt – sondern dass das Selbst kein Gehirnteil ist. Ein „Selbstmodell" muss ein Modell **für jemanden** sein; ein Modell, das niemand erlebt, ist kein Erleben. Das berühmte „schwierige Problem des Bewusstseins" bleibt ungelöst: Warum gibt es überhaupt ein Innen, ein Erleben aus der Ich-Perspektive?`,
              followUps: [
                {
                  id: 'illusion-erzeugt-sich-selbst',
                  objection: `Das „Jemand" ist eben selbst Teil des Modells – eine Illusion, die sich selbst erzeugt.`,
                  objectionBy: 'Sam Harris',
                  answer: `Eine Illusion ist ein falscher Anschein **für** jemanden. „Das Selbst ist eine Illusion" würde bedeuten: Ein falscher Anschein erscheint niemandem – das ist in sich widersprüchlich. Augustinus sagte: „Wenn ich mich täusche, bin ich." Man kann bezweifeln, dass das Selbst dauerhaft oder unsterblich ist, aber nicht, dass jemand zweifelt.`,
                  voices: [
                    {
                      person: 'augustinus',
                      role: 'als Philosoph der Selbstgewissheit',
                      text: `Augustinus antwortet den Skeptikern, die alles für unsicher erklären: Selbst wenn ich mich in allem täusche, steht eines fest – dass ich bin, denn wer nicht ist, kann sich auch nicht täuschen. Diese Gewissheit ist der Fels, an dem die These „Das Ich ist nur Schein" zerbricht.`,
                      sources: [
                        { kind: 'kirchenvater', author: 'Augustinus', work: 'De civitate Dei', ref: 'XI,26', original: 'Si enim fallor, sum.', quote: `Wenn ich mich täusche, bin ich.`, status: 'verbatim', translation: 'eigene Übersetzung' },
                      ],
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
      id: 'buddha-lehrte-anatta',
      objection: `Der Buddha selbst hat es gelehrt: Form, Gefühl, Wahrnehmung, Gestaltungen, Bewusstsein – nichts davon ist mein Selbst (SN 22,59). Anatta ist der Kern des Dhamma.`,
      objectionBy: 'Walpola Rahula (What the Buddha Taught, 1959)',
      targetsPremise: 3,
      answer: `Interessant ist, was der Buddha dort sagt: Keine der Daseinsgruppen ist das Selbst – „das bin ich nicht". Er sagt dort nicht: „Es gibt kein Selbst." Als ihn Vacchagotta direkt fragte, ob es ein Selbst gebe, schwieg er, und ebenso bei der Frage, ob es keines gebe (SN 44,10). Viele Kenner lesen Anatta daher als Weg des Nicht-Anhaftens, nicht als metaphysische Leugnung. „Es gibt kein Selbst" ist eine spätere, dogmatische Zuspitzung.`,
      followUps: [
        {
          id: 'vacchagotta-verwirrt',
          objection: `Der Buddha schwieg nur, weil Vacchagotta verwirrt war. Die Lehre selbst ist eindeutig: Es gibt kein Selbst.`,
          objectionBy: 'Walpola Rahula (sinngemäß)',
          answer: `Der Buddha erklärt Ananda selbst, warum er schwieg: Hätte er „Es gibt ein Selbst" gesagt, hätte er die Ewigkeitslehre bestärkt; hätte er „Es gibt kein Selbst" gesagt, die Vernichtungslehre. Er lehnte also **beide** Antworten ab. Und innerhalb des Buddhismus lehrten die Pudgalavadins, eine bedeutende Schule, eine „Person", die weder mit den Daseinsgruppen identisch noch von ihnen verschieden ist. Der Buddhismus war sich in dieser Frage nie einig.`,
          followUps: [
            {
              id: 'vasubandhu-widerlegt',
              objection: `Vasubandhu hat die Pudgalavadins widerlegt. Ihre „Person" war nur ein verstecktes Atman.`,
              objectionBy: 'Walpola Rahula (sinngemäß)',
              answer: `Vasubandhu hat gegen sie argumentiert, ja. Aber dass solche Schulen jahrhundertelang bestanden, zeigt, wie stark die Frage „Wer wird wiedergeboren?" auf der Lehre lastete. Die Person kehrt immer wieder, weil man sie für Karma, Erinnerung und Verantwortung braucht. Und Mahayana-Texte über die Buddha-Natur sprachen später sogar von einem beständigen, seligen „wahren Selbst".`,
              followUps: [
                {
                  id: 'zwei-wahrheiten',
                  objection: `Das ist eine Frage der Ebenen: Konventionell gibt es Personen, letztlich nicht. Das ist die Lehre von den zwei Wahrheiten.`,
                  objectionBy: 'Dalai Lama (Linie der Madhyamaka-Philosophie)',
                  answer: `Dann sind auch Karma und Nirvana – die Personen betreffen – nur konventionell wahr, und die Befreiung ist letztlich Befreiung von niemandem. Hier zeigt sich dasselbe Problem wie im Advaita: Eine Lehre, die auf ihrer höchsten Ebene den nicht mehr erklären kann, der nach der Wahrheit sucht. Das Christentum sagt: Personen sind letztlich wirklich, weil die letzte Wirklichkeit selbst personal ist – der dreieinige Gott.`,
                  questionsBack: [`Ist das Mitgefühl des Dalai Lama für die Tibeter letztlich wirklich oder nur konventionell?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'ich-glaube-wurzel-leid',
      objection: `Der Glaube an ein festes Ich ist die Wurzel des Leidens: Gier, Hass, Angst. Wer das Ich durchschaut, wird frei. Das bestätigen Millionen Meditierende.`,
      objectionBy: 'Sam Harris',
      answer: `Dass Ichbezogenheit eine Wurzel des Elends ist, sehe ich genauso – das Christentum nennt sie Stolz und ruft dazu auf, sich selbst zu verleugnen (Mt 16,24–25). Aber die Heilung besteht nicht darin, die Person zu leugnen, sondern sie zu heilen: Wer sein Leben um Christi willen verliert, wird es finden. Selbstvergessenheit in der Liebe, nicht Selbstverneinung durch Einsicht.`,
      followUps: [
        {
          id: 'christen-sterben-des-ich',
          objection: `Aber auch ihr Christen sprecht vom „Sterben des Ich". Das ist doch dasselbe wie Anatta!`,
          objectionBy: 'Thich Nhat Hanh (sinngemäß)',
          answer: `Beim christlichen Sterben des Ich stirbt der „alte Mensch" mit seiner Selbstsucht (Röm 6,6); die Person wird erneuert. Paulus sagt: „Ich lebe aber; doch nun nicht ich, sondern Christus lebt in mir" (Gal 2,20) – achte auf das „ich lebe". Das Ich wird nicht aufgelöst, sondern von Christus bewohnt und verwandelt. Die Wüstenväter kämpften gegen Leidenschaften, nicht gegen das Personsein – und wurden dadurch unverwechselbarer.`,
          followUps: [
            {
              id: 'nur-andere-metapher',
              objection: `Das ist doch nur eine andere Metapher für dieselbe Erfahrung.`,
              objectionBy: 'Thich Nhat Hanh (sinngemäß)',
              answer: `Nein, denn die Ziele unterscheiden sich. Vom vollendeten Buddha sagt der Kanon, dass nach seinem endgültigen Erlöschen keine Begriffe mehr bleiben, mit denen man ihn beschreiben könnte (Sutta-Nipata 1074–1076). Die christliche Vollendung ist der auferstandene Mensch, der Gott „von Angesicht zu Angesicht" sieht (1 Kor 13,12) und ihn ewig liebt. Erlöschen und Begegnung sind keine zwei Bilder für dasselbe.`,
            },
          ],
        },
        {
          id: 'seelenglaube-klammert',
          objection: `Wer an eine ewige Seele glaubt, klammert sich an sich selbst. Das macht ängstlich und egoistisch.`,
          objectionBy: 'Stephen Batchelor',
          answer: `Die Erfahrung zeigt eher das Gegenteil: Wer sich bedingungslos von Gott geliebt weiß, muss sich nicht ängstlich selbst behaupten. „Furcht ist nicht in der Liebe, sondern die völlige Liebe treibt die Furcht aus" (1 Joh 4,18). Gerade die Gewissheit, in Gott geborgen zu sein, befähigte Märtyrer und Heilige zur völligen Hingabe. Klammern kommt aus Angst, nicht aus Personsein.`,
        },
      ],
    },
    {
      id: 'zeig-mir-die-seele',
      objection: `Was ist denn eure „Seele"? Zeig sie mir. Ihr könnt sie genauso wenig finden wie wir das Selbst.`,
      objectionBy: 'Sam Harris',
      answer: `Die Seele ist kein Gegenstand unter Gegenständen, sondern das Subjekt, das Gegenstände sieht – so wie dein Auge sich nicht selbst sehen kann. Nach christlicher Lehre ist der Mensch Leib und Seele, geschaffen, auf Beziehung angelegt und von Gott beim Namen gerufen (Jes 43,1). Meine Identität ist letztlich ein Geschenk dessen, der mich kennt – kein Besitz, den ich festhalten müsste.`,
      followUps: [
        {
          id: 'identitaet-an-gott',
          objection: `Dann hängt deine ganze Identität an einem Gott, den du nicht beweisen kannst.`,
          objectionBy: 'Stephen Batchelor',
          answer: `Ja, ich gebe gerne zu, dass meine Identität letztlich in Gott gründet. Aber auch der Buddhismus gründet Anatta auf eine Metaphysik, die man nicht beweisen kann – Karma und Wiedergeburt. Die Frage ist, welches Bild unsere unbestreitbare Ich-Erfahrung, moralische Verantwortung und Liebe besser erklärt. Und der Buddha selbst sprach von einem „Ungeborenen, Ungewordenen, Ungeschaffenen, Unbedingten" (Udana 8,3) – darüber lohnt es sich gemeinsam nachzudenken.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wenn es kein Selbst gibt – wer wird wiedergeboren, und wer erlangt das Nirvana?`,
    `Wem erscheint die „Illusion" eines Selbst?`,
    `Ist es gerecht, wenn die Frucht meiner Tat jemanden trifft, der „nicht derselbe" ist wie ich?`,
    `Warum schwieg der Buddha, als er gefragt wurde, ob es kein Selbst gibt?`,
    `Kann es Schmerz geben, der niemandes Schmerz ist?`,
  ],
  avoid: [
    `Behaupte nicht, Buddhisten seien „Nihilisten" – der Buddha lehnte die Vernichtungslehre ausdrücklich ab.`,
    `Stelle das Christentum nicht als Lehre eines selbstzufriedenen, unveränderlichen Ichs dar – die Bibel fordert radikale Selbstverleugnung.`,
    `Verwechsle die christliche Hoffnung nicht mit Platons Unsterblichkeit der Seele allein – sie ist Auferstehung der ganzen Person.`,
  ],
  concessions: [
    `Die buddhistische Analyse der Vergänglichkeit und der Ichbezogenheit als Quelle von Leid ist scharfsinnig und deckt sich mit vielem in der Bibel und bei den Wüstenvätern.`,
    `Christen haben manchmal ein starres, selbstgenügsames Ich-Bild vertreten, das der biblischen Sicht des Menschen in Beziehung nicht gerecht wird.`,
    `Ob der Buddha selbst ein Selbst metaphysisch leugnete, ist auch unter buddhistischen Gelehrten umstritten – sei vorsichtig mit pauschalen Aussagen.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Paul Williams', work: 'The Unexpected Way: On Converting from Buddhism to Catholicism', year: '2002', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Keith Yandell / Harold Netland', work: 'Buddhism: A Christian Exploration and Appraisal', year: '2009', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Evan Thompson', work: 'Why I Am Not a Buddhist', year: '2020', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Richard Swinburne', work: 'Mind, Brain, and Free Will', year: '2013', status: 'paraphrase' },
  ],
  difficulty: 3,
  tags: ['Anatta', 'Selbst', 'Seele', 'Milindapanha', 'Karma', 'Neurowissenschaft'],
  related: [
    'hinduismus/atman-ist-brahman',
    'buddhismus/nirvana-hoechstes-ziel',
    'buddhismus/schoepfergott-unnoetig',
    'hinduismus/reinkarnation-erklaert-leid',
    'neurowissenschaften/geist-gleich-gehirn',
    'neurowissenschaften/split-brain',
    'naturalismus/bewusstsein-materiell-erklaerbar',
  ],
};

export default claim;
