import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'heiliger-geist-kraft',
  title: `„Der Heilige Geist ist eine unpersönliche Kraft."`,
  proponents: [
    { name: 'Wachtturm-Gesellschaft', role: 'Lehrorgan der Zeugen Jehovas', work: 'Einsichten über die Heilige Schrift, Art. „Geist"; NWÜ Gen 1,2: „Gottes wirksame Kraft"' },
    { name: 'Christadelphians', role: 'Antitrinitarische Gemeinschaft (gegr. 1848 von John Thomas)', work: 'Lehre vom Geist als Kraft Gottes' },
    { name: 'Anthony Buzzard', role: 'Biblischer Unitarier', work: 'The Doctrine of the Trinity: Christianity\'s Self-Inflicted Wound (1998, mit C. Hunting)' },
  ],
  steelman: `Das griechische *pneuma* ist ein Neutrum, das hebräische *ruach* heißt „Wind, Atem". Die Bibel spricht vom Geist wie von einer Substanz: Er wird „ausgegossen" (Apg 2,17), Menschen werden mit ihm „gefüllt" wie Gefäße (Eph 5,18), man tauft „mit" Geist wie mit Wasser (Mt 3,11). Der Geist hat keinen Eigennamen. Paulus grüßt in seinen Briefen von „Gott, unserem Vater, und dem Herrn Jesus Christus" – nie vom Geist. Stephanus sah im Himmel Gott und Jesus, aber keinen Geist (Apg 7,55). Wenn die Bibel vom Geist persönlich spricht, ist das Personifikation – wie bei der Weisheit (Spr 8), der Sünde (Röm 6) oder dem Blut Abels, das „schreit" (Gen 4,10). Selbst trinitarische Grammatiker wie Daniel Wallace geben zu, dass das maskuline „jener" in Joh 16,13 sich nur auf das maskuline Wort *paraklētos* bezieht. Und die Personalität des Geistes wurde erst 381 in Konstantinopel als Dogma festgelegt.`,
  biblical: {
    summary: `Die Schrift schreibt dem Geist durchgängig, was nur eine Person tun kann: Er **redet** („Sondert mir aus Barnabas und Saulus", Apg 13,2), **lehrt** (Joh 14,26), **bezeugt** (Joh 15,26), **will** und teilt zu, „wie er will" (1 Kor 12,11), **verbietet** (Apg 16,6–7), **tritt ein** mit Seufzen (Röm 8,26), **erforscht** die Tiefen Gottes (1 Kor 2,10–11), kann **betrübt** (Eph 4,30), **belogen** (Apg 5,3) und **gelästert** werden (Mt 12,31–32). Wer den Geist belügt, belügt **Gott** (Apg 5,3–4). Jesus nennt ihn „einen **anderen** Beistand" (Joh 14,16) – einen wie sich selbst. Getauft wird „auf den Namen" (Singular) des Vaters, des Sohnes und des Heiligen Geistes (Mt 28,19).`,
    detail: `**Personifikation oder Person?** Personifikation ist ein dichterisches Stilmittel und bleibt begrenzt: Das Blut Abels „schreit", aber es trifft keine Entscheidungen, sendet niemanden aus und wird nicht belogen. Der Geist handelt in erzählenden, nüchternen Berichten (Apostelgeschichte) als Akteur mit Willen: „Es gefällt dem Heiligen Geist und uns" (Apg 15,28).

**Kraft und Geist werden unterschieden:** „Gott hat Jesus von Nazareth gesalbt mit dem Heiligen Geist **und** mit Kraft" (Apg 10,38). Jesus kehrte zurück „in des Geistes Kraft" (Lk 4,14). Wäre der Geist nur Kraft, hieße das „mit Kraft und mit Kraft" bzw. „in der Kraft der Kraft".

**Ehrlich zur Grammatik:** Dass *pneuma* Neutrum ist, beweist nichts – auch „Kind" (*to paidion*) ist Neutrum und doch eine Person. Umgekehrt beweist das maskuline *ekeinos* in Joh 16,13–14 nichts, weil es grammatisch an *paraklētos* (16,7) anknüpft. Das Argument für die Personalität ruht auf den Handlungen des Geistes, nicht auf dem Geschlecht von Wörtern.`,
    sources: [
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '5,3–4', quote: `Petrus aber sprach: Ananias, warum hat der Satan dein Herz erfüllt, daß du dem heiligen Geist lögest … Du hast nicht Menschen, sondern Gott gelogen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '13,2', quote: `Da sie aber dem HERRN dienten und fasteten, sprach der heilige Geist: Sondert mir aus Barnabas und Saulus zu dem Werk, dazu ich sie berufen habe.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Epheser', ref: '4,30', quote: `Und betrübt nicht den heiligen Geist Gottes, damit ihr versiegelt seid auf den Tag der Erlösung.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Korinther', ref: '12,11', quote: `Dies aber alles wirkt derselbe einige Geist und teilt einem jeglichen seines zu, nachdem er will.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '16,13–14', quote: `Wenn aber jener, der Geist der Wahrheit, kommen wird, der wird euch in alle Wahrheit leiten. … Derselbe wird mich verklären.`, original: `ἐκεῖνος, τὸ πνεῦμα τῆς ἀληθείας`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '10,38', quote: `wie Gott diesen Jesus von Nazareth gesalbt hat mit dem heiligen Geist und Kraft.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Matthäus', ref: '28,19', quote: `Darum gehet hin und lehret alle Völker und taufet sie im Namen des Vaters und des Sohnes und des heiligen Geistes.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die Frage wurde gerade in **Ägypten** entschieden: Um 359–361 schrieb der hl. Athanasius seine *Briefe an Serapion*, den Bischof von Thmuis im Nildelta, gegen ägyptische Gruppen (die „Tropiker"), die den Geist für ein Geschöpf oder einen Engel hielten. Didymus der Blinde, Leiter der Katechetenschule von Alexandrien, verfasste eine eigene Schrift *Über den Heiligen Geist*. Das Konzil von Konstantinopel (381) bekannte dann den Geist als „den Herrn, den Lebendigmachenden, der vom Vater ausgeht, der mit dem Vater und dem Sohn angebetet und verherrlicht wird". Koptische Christen beten in der dritten Stunde der Agpeya täglich **zum** Heiligen Geist: „O himmlischer König, Tröster, Geist der Wahrheit …" – zu einer Kraft betet man nicht.`,
    detail: `Gregor von Nazianz berichtet in seiner fünften theologischen Rede ehrlich, dass Zeitgenossen den Geist teils für eine Wirkkraft (*energeia*), teils für ein Geschöpf, teils für Gott hielten. Er erklärt die schrittweise Offenbarung: Das Alte Testament verkündete den Vater offen und den Sohn verhüllt, das Neue den Sohn offen und deutete die Gottheit des Geistes an; nun wohnt der Geist selbst unter uns und gibt sich deutlicher zu erkennen. In der koptischen Liturgie ruft der Priester in der Epiklese den Heiligen Geist auf die Gaben herab – er handelt als Person, die heiligt. Das koptische Glaubensbekenntnis bewahrt die Formel von 381 **ohne Filioque**: Der Geist geht vom Vater aus (Joh 15,26).`,
    sources: [
      { kind: 'konzil', work: 'Glaubensbekenntnis von Konstantinopel', year: '381', quote: `… und an den Heiligen Geist, den Herrn, den Lebendigmachenden, der vom Vater ausgeht, der mit dem Vater und dem Sohn zugleich angebetet und verherrlicht wird, der gesprochen hat durch die Propheten.`, original: `τὸ κύριον, τὸ ζωοποιόν, τὸ ἐκ τοῦ πατρὸς ἐκπορευόμενον, τὸ σὺν πατρὶ καὶ υἱῷ συμπροσκυνούμενον καὶ συνδοξαζόμενον`, translation: 'eigene Übersetzung', status: 'verbatim' },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Briefe an Serapion über den Heiligen Geist', year: 'ca. 359–361', quote: `Der Geist ist nicht Geschöpf und nicht Engel; er gehört untrennbar zur Dreiheit, in der Gott erkannt wird.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Gregor von Nazianz', work: 'Fünfte theologische Rede (Oratio 31)', ref: '5; 26', quote: `Manche halten den Geist für eine Wirkkraft, andere für ein Geschöpf, andere für Gott. – Die Offenbarung geschah schrittweise: erst der Vater offen, dann der Sohn, nun wohnt der Geist unter uns.`, status: 'paraphrase' },
      { kind: 'liturgie', work: 'Agpeya, Gebet der dritten Stunde', quote: `Gebet an den Heiligen Geist: „O himmlischer König, Tröster, Geist der Wahrheit …"`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Eine Kraft kann man nicht belügen, betrüben oder lästern – den Heiligen Geist schon (Apg 5,3; Eph 4,30; Mt 12,31). Er redet („Sondert **mir** Barnabas und Saulus aus", Apg 13,2), entscheidet „wie er will" (1 Kor 12,11) und tritt für uns ein (Röm 8,26). Und Apg 10,38 unterscheidet ausdrücklich zwischen dem Heiligen Geist **und** der Kraft.`,
  keyPoints: [
    `**Personale Handlungen:** Reden, lehren, wollen, verbieten, Fürbitte – in nüchternen Berichten, nicht nur in Poesie.`,
    `**Personale Erfahrungen:** Er kann belogen, betrübt und gelästert werden – Lästerung einer Kraft ist sinnlos.`,
    `**Lüge gegen den Geist = Lüge gegen Gott** (Apg 5,3–4).`,
    `**„Ein anderer Beistand"** (Joh 14,16): Jesus stellt den Geist als seinesgleichen vor.`,
    `**Geist ≠ Kraft:** „mit dem Heiligen Geist und mit Kraft" (Apg 10,38).`,
    `**Ägyptisches Erbe:** Athanasius' Briefe an Serapion und Didymus' Schrift entschieden diese Frage im 4. Jahrhundert.`,
  ],
  voices: [
    {
      person: 'athanasius',
      role: 'in den Briefen an Serapion',
      text: `Athanasius stellt fest: Der Geist heiligt, schafft Leben, vergöttlicht und verbindet uns mit Gott – lauter Werke Gottes. Ein Geschöpf, das selbst geheiligt werden muss, kann nicht heiligen. Weil die Taufe auf Vater, Sohn und Geist geschieht, kann der Geist nicht ein Geschöpf sein, sonst würden wir auf ein Geschöpf getauft. Die Einheit des Wirkens zeigt die Einheit des Wesens.`,
      sources: [{ kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Briefe an Serapion', ref: 'I', quote: `Der Geist heiligt und wird nicht geheiligt; er ist darum nicht Geschöpf.`, status: 'paraphrase' }],
    },
    {
      person: 'didymus',
      role: 'als Leiter der Katechetenschule von Alexandrien',
      text: `Didymus der Blinde schrieb eine eigene Abhandlung über den Heiligen Geist, die Hieronymus ins Lateinische übersetzte. Er sammelt die Schriftstellen, in denen der Geist als lehrender, sendender und heiligender Herr auftritt, und zeigt, dass der Geist Gaben austeilt, die nur Gott geben kann. Wer „Fülle des Geistes" empfängt, empfängt Gott selbst, nicht eine abgespaltene Energie.`,
      sources: [{ kind: 'kirchenvater', author: 'Didymus der Blinde', work: 'Über den Heiligen Geist (De Spiritu Sancto, lat. Übers. des Hieronymus)', quote: `Der Geist teilt göttliche Gaben aus und ist darum selbst göttlich.`, status: 'paraphrase' }],
    },
    {
      person: 'basilius',
      role: 'als Verfasser von „Über den Heiligen Geist"',
      text: `Basilius verteidigte die liturgische Doxologie „Ehre sei dem Vater **mit** dem Sohn **samt** dem Heiligen Geist". Er argumentiert: Die Kirche hat den Geist von Anfang an in Taufe und Lobpreis neben Vater und Sohn gestellt. Wer ihn zur bloßen Kraft macht, muss den Gottesdienst der Kirche umschreiben – die gelebte Anbetung ist ein Zeugnis älter als jede Debatte.`,
      sources: [{ kind: 'kirchenvater', author: 'Basilius der Große', work: 'Über den Heiligen Geist (De Spiritu Sancto)', year: 'ca. 375', quote: `Taufe und Doxologie stellen den Geist neben Vater und Sohn; er wird mit ihnen verherrlicht.`, status: 'paraphrase' }],
    },
    {
      person: 'gregor-nazianz',
      role: 'als „der Theologe" der Trinitätslehre',
      text: `Gregor nimmt den Einwand ernst, dass die Gottheit des Geistes in der Schrift weniger ausdrücklich steht als die des Sohnes. Er erklärt das pädagogisch: Gott offenbart sich stufenweise, um die Menschen nicht zu überfordern. Die Belege seien dennoch da – der Geist wird „Herr", „Geist Gottes", „Finger Gottes" genannt, er erschafft, erneuert, weiß alles. Für Gregor ist die Personalität des Geistes nicht spätere Erfindung, sondern reife Erkenntnis dessen, was die Schrift zeigt.`,
      sources: [{ kind: 'kirchenvater', author: 'Gregor von Nazianz', work: 'Oratio 31 (Über den Heiligen Geist)', ref: '26–29', quote: `Stufenweise Offenbarung; Sammlung der Titel und Werke des Geistes.`, status: 'paraphrase' }],
    },
    {
      person: 'wallace',
      role: 'als Grammatiker – ehrliche Korrektur eines christlichen Arguments',
      text: `Wallace hat gezeigt, dass das beliebte Argument „*ekeinos* ist maskulin, also ist der Geist Person" grammatisch nicht trägt, weil das Pronomen an *paraklētos* anschließt. Für Wallace schwächt das die Lehre nicht: Die Personalität des Geistes ergibt sich aus dem, was die Schrift über sein Handeln sagt. Ein gutes Beispiel, warum Christen nur Argumente benutzen sollten, die einer Prüfung standhalten.`,
      sources: [{ kind: 'fachliteratur', author: 'Daniel B. Wallace', work: 'Greek Grammar and the Personality of the Holy Spirit', ref: 'Bulletin for Biblical Research 13 (2003)', year: '2003', quote: `Das grammatische Geschlecht der Pronomen beweist die Personalität des Geistes nicht; sie ergibt sich aus anderen Gründen.`, status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'pneuma-neutrum',
      objection: `*Pneuma* ist im Griechischen ein Neutrum – „es", nicht „er". Und *ruach* heißt einfach Wind oder Atem.`,
      objectionBy: 'Zeugen Jehovas',
      answer: `Grammatisches Geschlecht sagt nichts über Personalität: „das Kind" ist auch Neutrum und doch eine Person; *ruach* ist im Hebräischen feminin – soll der Geist deshalb weiblich sein? Entscheidend ist, was der Geist **tut**: Er redet, lehrt, entscheidet, tritt ein und kann betrübt werden. Das tut kein Wind.`,
      followUps: [
        {
          id: 'ekeinos-nur-grammatik',
          objection: `Und das maskuline „jener" in Joh 16,13 ist auch nur Grammatik – es hängt an *paraklētos*. Das gibt sogar euer Grammatiker Wallace zu.`,
          objectionBy: 'Zeugen Jehovas mit Verweis auf D. Wallace',
          answer: `Einverstanden – darauf baue ich nicht. Mein Argument sind die Handlungen. Aber beachte, was Jesus in Joh 14–16 über diesen *Paraklēten* sagt: Er lehrt, erinnert, bezeugt, überführt die Welt, hört, redet und verherrlicht Jesus. Jesus nennt ihn „einen **anderen** Beistand" – einen wie sich selbst.`,
          followUps: [
            {
              id: 'personifikation-wie-weisheit',
              objection: `Die Bibel personifiziert vieles: Die Weisheit ruft, die Sünde herrscht, das Blut Abels schreit. Reden macht noch keine Person.`,
              objectionBy: 'Zeugen Jehovas',
              answer: `Personifikation ist Dichtung und bleibt begrenzt. Der Geist handelt aber in nüchternen Berichten als Entscheider: „Es gefällt dem Heiligen Geist und uns" (Apg 15,28), „Sondert **mir** aus" (13,2), er verwehrt Paulus eine Reise (16,6–7). Und man kann ihn lästern – mit unvergebbarer Schuld (Mt 12,31–32). Wer hat je eine Personifikation gelästert?`,
              followUps: [
                {
                  id: 'kraft-spricht-wie-telefon',
                  objection: `Gott spricht eben durch seine Kraft – so wie dein Telefon „spricht", wenn ich dich anrufe.`,
                  objectionBy: 'Zeugen Jehovas',
                  answer: `Ein Telefon kann man nicht belügen – aber Ananias belog den Geist, und Petrus sagt: „Du hast nicht Menschen, sondern **Gott** gelogen" (Apg 5,4). Ein Telefon kennt auch nicht die Gedanken des Anrufers; der Geist aber erforscht die Tiefen Gottes, wie der Geist des Menschen weiß, was im Menschen ist (1 Kor 2,10–11). Und er tritt **bei** Gott für uns ein (Röm 8,26–27) – ein Telefon bittet nicht.`,
                  detail: `Hinzu kommt Apg 10,38: Jesus wurde gesalbt „mit dem Heiligen Geist **und** mit Kraft". Wäre der Geist die Kraft, wäre das eine sinnlose Doppelung. Ebenso Lk 4,14: „in des Geistes Kraft" – nicht „in der Kraft der Kraft".`,
                  sources: [{ kind: 'bibel', work: 'Römer', ref: '8,26', quote: `Desgleichen auch der Geist hilft unsrer Schwachheit auf. Denn wir wissen nicht, was wir beten sollen, wie sich's gebührt; sondern der Geist selbst vertritt uns aufs beste mit unaussprechlichem Seufzen.`, translation: 'Luther 1912', status: 'verbatim' }],
                  questionsBack: [`Wenn der Geist eine Kraft ist – wie kann man eine Kraft belügen, und warum ist das eine Lüge gegen Gott?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'nicht-in-gruessen',
      objection: `Paulus grüßt in allen Briefen von „Gott, unserem Vater, und dem Herrn Jesus Christus" – nie vom Heiligen Geist. Wäre er eine Person, würde er genannt.`,
      objectionBy: 'Zeugen Jehovas',
      answer: `In 2 Kor 13,13 grüßt Paulus ausdrücklich mit allen dreien: „Die Gnade unsers HERRN Jesu Christi und die Liebe Gottes und die Gemeinschaft des heiligen Geistes sei mit euch allen!" Und Offb 1,4–5 wünscht Gnade „von dem, der da ist …, und von den sieben Geistern vor seinem Thron und von Jesus Christus". Ein Schweigen in Briefanfängen ist außerdem kein Gegenbeweis – Paulus nennt dort auch nicht jedes Mal alles, was er glaubt.`,
      sources: [{ kind: 'bibel', work: '2. Korinther', ref: '13,13', quote: `Die Gnade unsers HERRN Jesu Christi und die Liebe Gottes und die Gemeinschaft des heiligen Geistes sei mit euch allen! Amen.`, translation: 'Luther 1912', status: 'verbatim' }],
      followUps: [
        {
          id: 'stephanus-sah-zwei',
          objection: `Stephanus sah im Himmel nur Gott und Jesus zu seiner Rechten (Apg 7,55). Wo war der Geist?`,
          objectionBy: 'Zeugen Jehovas',
          answer: `Lies den Satzanfang: „Als er aber **voll heiligen Geistes** war, sah er auf gen Himmel." Der Geist ist der, der Stephanus sehen lässt. Seine Rolle ist nicht, gesehen zu werden, sondern Christus sichtbar zu machen: „Derselbe wird mich verklären" (Joh 16,14). Unsichtbarkeit ist kein Zeichen von Unpersönlichkeit – auch den Vater hat niemand je gesehen (Joh 1,18).`,
        },
        {
          id: 'ausgiessen-fuellen',
          objection: `Der Geist wird „ausgegossen", man wird mit ihm „gefüllt". Kann man eine Person ausgießen?`,
          objectionBy: 'Zeugen Jehovas',
          answer: `Das sind Bilder – und die Bibel benutzt sie auch für Personen: Wir sollen „Christus anziehen" (Röm 13,14; Gal 3,27), „Christus lebt in mir" (Gal 2,20), wir sollen „erfüllt werden mit der ganzen Gottesfülle" (Eph 3,19). Christus und Gott sind trotzdem Personen. Die Bilder beschreiben die Fülle seiner Gegenwart, nicht seine Natur.`,
          followUps: [
            {
              id: 'kein-name',
              objection: `Jede Person hat einen Namen. Der Geist hat keinen.`,
              objectionBy: 'Zeugen Jehovas',
              answer: `Jesus tauft „auf **den Namen** (Singular) des Vaters und des Sohnes und des Heiligen Geistes" (Mt 28,19) – der Geist teilt den einen Namen. Auch der Engel in Ri 13,18 nennt seinen Namen nicht; namenlos ist nicht dasselbe wie unpersönlich. Und würdest du jemanden „auf den Namen" einer Person, einer zweiten Person und der Elektrizität taufen?`,
              questionsBack: [`Warum steht der Geist in der Taufformel gleichrangig neben Vater und Sohn, wenn er nur eine Kraft ist?`],
            },
          ],
        },
      ],
    },
    {
      id: 'erst-381',
      objection: `Die Personalität des Geistes wurde erst 381 in Konstantinopel beschlossen. Die Bibel und die ersten Christen kannten das nicht.`,
      objectionBy: 'Zeugen Jehovas / biblische Unitarier',
      answer: `381 hat formuliert, was die Kirche praktizierte, nachdem es bestritten wurde. Schon die Didache (um 100) schreibt die Taufe auf Vater, Sohn und Geist vor; Justin (um 155) beschreibt sie ebenso; Athenagoras (um 177) nennt Vater, Sohn und Geist in Einheit und Unterscheidung; Tertullian (um 213) spricht von drei „Personen". Ein Konzil erfindet so wenig eine Lehre, wie ein Gericht ein Gesetz erfindet, wenn es einen Streit entscheidet.`,
      sources: [
        { kind: 'kirchenvater', work: 'Didache', ref: '7,1', year: 'um 100', quote: `Tauft auf den Namen des Vaters und des Sohnes und des Heiligen Geistes in lebendigem Wasser.`, status: 'paraphrase' },
        { kind: 'kirchenvater', author: 'Justin der Märtyrer', work: '1. Apologie', ref: '61', quote: `Die Täuflinge werden gewaschen im Namen Gottes, des Vaters, unseres Erlösers Jesus Christus und des Heiligen Geistes.`, status: 'paraphrase' },
        { kind: 'kirchenvater', author: 'Tertullian', work: 'Gegen Praxeas (Adversus Praxean)', ref: '2–3; 25', year: 'um 213', quote: `Drei – nicht dem Wesen, sondern der Stufe nach; eine Substanz, drei Personen.`, status: 'paraphrase' },
      ],
      followUps: [
        {
          id: 'gregor-gibt-zu',
          objection: `Gregor von Nazianz gibt selbst zu, dass viele seiner Zeitgenossen den Geist für eine Wirkkraft hielten. Also war es offen.`,
          objectionBy: 'Zeugen Jehovas',
          answer: `Ja – und das spricht für die Ehrlichkeit der Kirche: Die Position der Zeugen Jehovas war bekannt, wurde an der Schrift geprüft und verworfen. Gregor erklärt zudem, warum die Gottheit des Geistes weniger ausdrücklich formuliert ist: Gott offenbart sich schrittweise – erst den Vater, dann den Sohn, und nun wohnt der Geist selbst unter uns.`,
          followUps: [
            {
              id: 'also-entwicklung',
              objection: `Also gibst du zu: Das ist eine spätere Entwicklung!`,
              objectionBy: 'Zeugen Jehovas',
              answer: `Entfaltung ist nicht Erfindung. Die Daten liegen alle im Neuen Testament: Der Geist redet, will, wird belogen und gelästert, steht in der Taufformel neben Vater und Sohn. Die Kirche hat diese Daten später in Begriffe gefasst – so wie ihr eure Lehre über Jehova auch in Begriffe fasst, die so nicht in der Bibel stehen („leitende Körperschaft", „wirksame Kraft").`,
              questionsBack: [`Steht das Wort „wirksame Kraft" für den Geist irgendwo im hebräischen oder griechischen Text?`],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Kann man eine Kraft belügen, betrüben oder lästern?`,
    `Wer spricht in Apg 13,2 – und wer ist mit „mir" gemeint?`,
    `Wenn der Geist eine Kraft ist, was bedeutet dann „gesalbt mit dem Heiligen Geist und mit Kraft" (Apg 10,38)?`,
    `Warum steht der Geist in der Taufformel gleichrangig neben dem Vater und dem Sohn?`,
  ],
  avoid: [
    `„*Ekeinos* in Joh 16,13 ist maskulin, also ist der Geist eine Person." – Grammatisch nicht haltbar (Bezug auf *paraklētos*).`,
    `„*Pneuma* ist Neutrum, aber Johannes benutzt trotzdem ein Maskulinum – ein klarer Regelbruch." – Siehe oben; ein guter Gesprächspartner wird es widerlegen.`,
    `„Die Zeugen Jehovas lästern den Heiligen Geist und können nicht vergeben werden." – Unbarmherzig und exegetisch fragwürdig; Mt 12 meint die bewusste Verwerfung des Wirkens Gottes.`,
  ],
  concessions: [
    `Die Bibel verwendet für den Geist auch unpersönliche Bilder (Wasser, Feuer, Wind, Öl).`,
    `Die ausdrückliche dogmatische Formulierung der Gottheit des Geistes stammt aus dem 4. Jahrhundert.`,
    `Grammatische Argumente (Neutrum/Maskulinum) entscheiden die Frage in keiner Richtung.`,
  ],
  furtherReading: [
    { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Briefe an Serapion über den Heiligen Geist', status: 'paraphrase' },
    { kind: 'kirchenvater', author: 'Basilius der Große', work: 'Über den Heiligen Geist', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'James R. White', work: 'The Forgotten Trinity', year: '1998', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Daniel B. Wallace', work: 'Greek Grammar and the Personality of the Holy Spirit', ref: 'BBR 13 (2003)', status: 'paraphrase' },
  ],
  difficulty: 1,
  tags: ['Zeugen Jehovas', 'Heiliger Geist', 'Trinität', 'Athanasius', 'Agpeya'],
  related: [
    'zeugen-jehovas/joh-1-1-ein-gott',
    'antitrinitarier/trinitaet-in-nizaa-erfunden',
    'antitrinitarier/oneness-modalismus',
    'islam-trinitaet/trinitaet-unlogisch',
  ],
};

export default claim;
