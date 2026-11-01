import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'werke-sind-werkgerechtigkeit',
  title: `„Gute Werke als Heilsbedingung sind Werkgerechtigkeit."`,
  proponents: [
    { name: 'Martin Luther', role: 'Reformator', work: 'Von der Freiheit eines Christenmenschen (1520); Galaterkommentar (1535)' },
    { name: 'Michael S. Horton', role: 'Reformierter Theologe, Westminster Seminary California', work: 'Christless Christianity (2008); Unterscheidung von Gesetz und Evangelium' },
    { name: 'John MacArthur', role: 'Pastor, Grace Community Church', work: 'Predigten zu Galater und Römer' },
    { name: 'James R. White', role: 'Reformierter Baptist', work: 'The God Who Justifies (2001)' },
    { name: 'Heidelberger Katechismus', role: 'Reformiertes Bekenntnis (1563)', work: 'Dritter Teil „Von der Dankbarkeit"' },
  ],
  steelman: `Das Evangelium ist die Unterscheidung von Gesetz und Evangelium: Das Gesetz fordert, das Evangelium schenkt. Macht man auch nur ein einziges Werk zur Bedingung des Heils, so wird das Heil am Ende doch meine Leistung – genau das verfluchte Paulus bei den Galatern, die zur Gnade „nur" die Beschneidung hinzufügen wollten (Gal 1,8–9; 5,2–4). „Alle unsere Gerechtigkeit ist wie ein beflecktes Kleid" (Jes 64,5); selbst wenn wir alles getan haben, sind wir „unnütze Knechte" (Lk 17,10); „ist's aber aus Gnaden, so ist's nicht aus Verdienst der Werke" (Röm 11,6). Gute Werke sind Dank, nicht Bedingung – so der Heidelberger Katechismus. Luther hat es unübertrefflich gesagt: Gute Werke machen nie einen guten Menschen, sondern ein guter Mensch tut gute Werke. Ein System, in dem Fasten, Beichte, Almosen und Gebetsregeln für das Heil nötig sind, ist ein neuer Galaterbrief: Es führt entweder in den Hochmut („ich habe genug getan") oder in die Verzweiflung („ich habe nie genug getan") – wie Luthers Jahre im Kloster zeigen.`,
  biblical: {
    summary: `Die Schrift verwirft Werke, mit denen der Mensch sich vor Gott Gerechtigkeit verdienen will, und die Rückkehr unter das mosaische Gesetz (Galater). Sie fordert aber zugleich Werke des Glaubens, die Gott selbst in uns wirkt und ohne die niemand das Reich erbt: „ohne Heiligung wird niemand den HERRN sehen" (Hebr 12,14); „wo ihr den Menschen ihre Fehler nicht vergebet, so wird euch euer Vater eure Fehler auch nicht vergeben" (Mt 6,15); „die solches tun, werden das Reich Gottes nicht ererben" (Gal 5,21). Gott nennt die Werke der Heiligen nicht „befleckte Kleider", sondern „die Gerechtigkeit der Heiligen" (Offb 19,8).`,
    detail: `**Drei Arten von „Werken" unterscheiden:**
1. **Werke zur Selbstrechtfertigung ohne Gnade** – der Pharisäer, der Gott seine Leistungen vorrechnet (Lk 18,11–12). Die Kirche verwirft das.
2. **Werke des mosaischen Gesetzes** als Bedingung der Zugehörigkeit zum Gottesvolk – die Beschneidung bei den Galatern („wer sich beschneiden läßt, der ist noch das ganze Gesetz schuldig zu tun", Gal 5,3). Auch das ist für Christen abgetan.
3. **Werke des Glaubens**, „zuvor bereitet" von Gott (Eph 2,10), gewirkt durch den Geist (Gal 5,22), in denen der Gläubige in Christus bleibt (Joh 15,10). Diese verlangt die Schrift.

**Der Galaterbrief selbst** endet nicht mit „Werke sind egal", sondern: „Der Glaube, der durch die Liebe tätig ist" (5,6); „Irret euch nicht! Gott läßt sich nicht spotten. Denn was der Mensch sät, das wird er ernten" (6,7); „lasset uns Gutes tun und nicht müde werden; denn zu seiner Zeit werden wir auch ernten ohne Aufhören" (6,9).

**Jes 64,5 im Zusammenhang:** Der Prophet klagt im Namen des Volkes, das im Exil in seinen Sünden lebt („wir sind allesamt wie die Unreinen", 64,5). Es geht um die Werke eines abgefallenen Volkes, nicht um die Frucht des Geistes in denen, die in Christus sind.

**Lohn ist Gnade:** Jesus verheißt Lohn (Mt 6,4; 10,42; 25,34–40); „Gott ist nicht ungerecht, daß er vergesse eures Werks und der Arbeit der Liebe" (Hebr 6,10). Das heißt nicht, dass Gott uns etwas schuldet (Lk 17,10), sondern dass er in seiner Güte belohnt, was er selbst in uns gewirkt hat.`,
    sources: [
      { kind: 'bibel', work: 'Hebräer', ref: '12,14', quote: `Jaget nach dem Frieden gegen jedermann und der Heiligung, ohne welche wird niemand den HERRN sehen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Matthäus', ref: '6,14–15', quote: `Denn so ihr den Menschen ihre Fehler vergebet, so wird euch euer himmlischer Vater auch vergeben. Wo ihr aber den Menschen ihre Fehler nicht vergebet, so wird euch euer Vater eure Fehler auch nicht vergeben.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Galater', ref: '6,7–9', quote: `Irret euch nicht! Gott läßt sich nicht spotten. Denn was der Mensch sät, das wird er ernten. Wer auf sein Fleisch sät, der wird vom Fleisch das Verderben ernten; wer aber auf den Geist sät, der wird vom Geist das ewige Leben ernten. Lasset uns aber Gutes tun und nicht müde werden; denn zu seiner Zeit werden wir auch ernten ohne Aufhören.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Offenbarung', ref: '19,8', quote: `Und es ward ihr gegeben, sich anzutun mit reiner und schöner Leinwand. (Die köstliche Leinwand aber ist die Gerechtigkeit der Heiligen.)`, translation: 'Luther 1912', status: 'verbatim', note: 'Griechisch ta dikaiōmata tōn hagiōn – die gerechten Taten der Heiligen.' },
      { kind: 'bibel', work: 'Johannes', ref: '15,10', quote: `So ihr meine Gebote haltet, so bleibet ihr in meiner Liebe, gleichwie ich meines Vaters Gebote halte und bleibe in seiner Liebe.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Hebräer', ref: '6,10', quote: `Denn Gott ist nicht ungerecht, daß er vergesse eures Werks und der Arbeit der Liebe, die ihr bewiesen habt an seinem Namen …`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche lehnt Werkgerechtigkeit ab: Kein Mensch kann sich durch eigene Kraft Gottes Gnade verdienen. Aber sie lehrt mit der ganzen Schrift, dass der Glaube lebendig ist und in Werken der Liebe, der Buße und des Gehorsams Gestalt gewinnt – und dass diese Werke nicht „Zusatz" zur Gnade sind, sondern die Gnade selbst, die in uns wirkt und mit der wir frei mitwirken. Fasten, Gebet, Almosen und Beichte sind keine Gebühren für den Himmel, sondern Arzneien der Seele und Wege der Liebe.`,
    detail: `Die Wüstenväter Ägyptens – die geistlichen Väter der koptischen Kirche – sind das beste Gegenmittel gegen das Klischee der „Werkgerechtigkeit". Sie fasteten, wachten und beteten mehr als irgendjemand – und hielten sich dennoch für die geringsten Sünder. Als Abba Sisoes im Sterben lag und sein Gesicht zu leuchten begann, sagten die Brüder, er habe doch genug Buße getan; er antwortete, er wisse nicht, ob er überhaupt schon mit der Buße angefangen habe. Das ist nicht Verzweiflung, sondern Demut vor dem Gott, dem man alles verdankt.

Athanasius erzählt im Leben des Antonius, wie der Heilige nach einem schweren Kampf mit Dämonen fragte: „Wo warst du, Herr?" Und eine Stimme antwortete: „Ich war hier, Antonius, aber ich wartete, um deinen Kampf zu sehen; weil du ausgeharrt hast, will ich dir immer Helfer sein." Synergie in einer Szene: Gott ist da und hilft, der Mensch kämpft frei.

Papst Schenuda III. betont: Wer gute Werke als Verdienst ansieht, mit dem er Gott etwas abhandelt, verfällt dem Stolz; wer gute Werke verachtet, verfällt der Gleichgültigkeit. Der orthodoxe Weg ist der Weg der Liebe, die aus Dankbarkeit und Gemeinschaft mit Gott handelt.`,
    sources: [
      { kind: 'kirchenvater', work: 'Apophthegmata Patrum (Aussprüche der Wüstenväter), Abba Sisoes', quote: `Als der sterbende Abba Sisoes mit leuchtendem Antlitz sagte, er wolle noch Zeit zur Buße, und die Brüder einwandten, er brauche keine Buße, antwortete er: „Ich weiß nicht, ob ich überhaupt schon angefangen habe."`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Leben des Antonius (Vita Antonii)', ref: '10', quote: `„Wo warst du, guter Jesus?" – „Ich war hier, Antonius, aber ich wartete, um deinen Kampf zu sehen; weil du standgehalten hast, werde ich immer dein Helfer sein."`, status: 'paraphrase' },
      { kind: 'koptisch', author: 'Papst Schenuda III.', work: 'Das Heil im orthodoxen Verständnis', quote: `Gute Werke sind weder Handelsware mit Gott noch belanglos; sie sind Frucht der Liebe und der Gnade, mit der der Mensch mitwirkt.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Wir lehnen Werkgerechtigkeit genauso ab wie du: Niemand kann sich das Heil verdienen. Aber Jesus selbst macht Werke zur Bedingung: „Wo ihr den Menschen nicht vergebt, wird euch euer Vater auch nicht vergeben" (Mt 6,15), und „ohne Heiligung wird niemand den Herrn sehen" (Hebr 12,14). Das sind keine Leistungen *neben* der Gnade, sondern die Gnade selbst, die in uns wirkt (Phil 2,13). Paulus verflucht im Galaterbrief die Rückkehr unters mosaische Gesetz – nicht den „Glauben, der durch die Liebe tätig ist" (Gal 5,6).`,
  keyPoints: [
    `**Drei Arten von Werken:** Selbstrechtfertigung (abgelehnt), mosaisches Gesetz als Bundesbedingung (abgelehnt), Werke des Glaubens durch die Gnade (gefordert).`,
    `**Jesus macht Werke zur Bedingung:** Vergebung (Mt 6,14–15; 18,32–35), Werke der Barmherzigkeit (Mt 25), Tun des Willens Gottes (Mt 7,21).`,
    `**Der Galaterbrief selbst:** „Glaube, der durch die Liebe tätig ist" (5,6); „was der Mensch sät, das wird er ernten" (6,7–9).`,
    `**Jes 64,5** beschreibt ein Volk im Abfall – Gott nennt die Werke der Heiligen „Gerechtigkeit" (Offb 19,8).`,
    `**Lohn ist Gnade:** Gott schuldet uns nichts (Lk 17,10), belohnt aber, was er selbst in uns wirkt (Hebr 6,10).`,
  ],
  voices: [
    {
      person: 'antonius',
      role: 'als Vater der Mönche',
      text: `Antonius ist das Urbild des asketischen Kampfes – und zugleich der beste Zeuge dafür, dass dieser Kampf nichts mit Selbsterlösung zu tun hat. In seiner Vita schreibt Athanasius, Antonius habe alles, was er vollbrachte, dem Herrn zugeschrieben; seine Siege über die Dämonen seien Christi Siege in ihm gewesen. Als er nach einem besonders schweren Kampf fragte, wo der Herr gewesen sei, hörte er: Er war da und wartete, um den Kampf zu sehen.

Das ist die orthodoxe Synergie in einem Bild: Gott ist immer da, die Gnade geht voraus und vollendet, und der Mensch kämpft dennoch frei. Werke ohne Gnade wären Hochmut – Gnade ohne Antwort wäre Trägheit.`,
    },
    {
      person: 'chrysostomus',
      role: 'als Prediger der Barmherzigkeit',
      text: `Chrysostomus predigte unermüdlich über Mt 25: Christus wird uns am Jüngsten Tag nicht fragen, wie viele Bücher wir gelesen haben, sondern ob wir ihn in den Hungrigen gespeist haben. Er nennt das Almosen eine „Königin der Tugenden" und eine Arznei für die Sünden – zugleich betont er, dass all dies aus der Gnade kommt und dass niemand sich seiner Werke rühmen darf. Für ihn ist das kein Widerspruch: Die Liebe, die Gott schenkt, will in der Liebe zum Nächsten Fleisch werden.`,
      sources: [
        { kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Homilien zum Matthäusevangelium', ref: 'Homilie 79 (zu Mt 25,31–46)', quote: `Christus wird im Gericht nach den Werken der Barmherzigkeit fragen; wer den Armen verachtet, verachtet Christus selbst.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'shenouda-iii',
      role: 'als Lehrer des geistlichen Lebens',
      text: `Papst Schenuda III. hat Protestanten oft gefragt: Wenn Werke keinerlei Bedeutung für das Heil haben – warum hat Christus dann die Bergpredigt gehalten? Warum spricht er vom Gericht nach den Werken? Zugleich warnte er die eigenen Gläubigen: Wer fastet, um gesehen zu werden, oder Almosen gibt, um Gott etwas abzuhandeln, hat seinen Lohn schon (Mt 6,2). Die Frage ist nicht, ob Werke nötig sind, sondern aus welcher Quelle sie fließen – aus Stolz oder aus Liebe.`,
    },
    {
      person: 'augustinus',
      role: 'als westlicher Vater der Gnadenlehre (mit Vorbehalt)',
      text: `Augustinus, auf den sich die Reformatoren gern beriefen, hat einen Satz geprägt, der die Spannung löst: Wenn Gott unsere Verdienste krönt, krönt er nichts anderes als seine eigenen Gaben. Augustinus lehrte also, dass es Lohn für gute Werke gibt und dass diese Werke für das Heil bedeutsam sind – und zugleich, dass sie ganz Gottes Geschenk sind. Die koptische Kirche teilt nicht alle Akzente Augustins, aber hier stimmt er mit den östlichen Vätern überein – und widerspricht der Vorstellung, Werke seien für das Heil belanglos.`,
      sources: [
        { kind: 'kirchenvater', author: 'Augustinus', work: 'Brief 194 (an Sixtus)', ref: '5,19', quote: `Wenn Gott unsere Verdienste krönt, krönt er nichts anderes als seine Gaben.`, status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'befleckte-kleider',
      objection: `„Jes 64,5: ‚Alle unsere Gerechtigkeit ist wie ein beflecktes Kleid.' Wie können solche Werke Bedingung des Heils sein?"`,
      objectionBy: 'John MacArthur',
      answer: `Jesaja klagt im Namen eines Volkes, das in Sünde und Exil lebt – es geht um Werke ohne Gott. Die Werke, die der Geist in den Gläubigen wirkt, nennt die Schrift ganz anders: Gott hat sie „zuvor bereitet" (Eph 2,10), sie sind „Frucht des Geistes" (Gal 5,22) und „die Gerechtigkeit der Heiligen" (Offb 19,8). Gott nennt das Werk seines eigenen Geistes nicht ein beflecktes Kleid.`,
      followUps: [
        {
          id: 'beste-werke-befleckt',
          objection: `„Selbst die besten Werke der Christen sind mit Sünde befleckt. Darum können sie vor Gottes Gericht nicht bestehen."`,
          objectionBy: 'R. C. Sproul',
          answer: `Unsere Werke sind unvollkommen und brauchen Gottes Erbarmen – darum beten wir in jeder Liturgie „Kyrie eleison". Aber Gott nimmt sie in seiner Barmherzigkeit an, wie ein Vater das Bild seines Kindes annimmt. Jesus lobt das Scherflein der Witwe (Mk 12,43) und verheißt Lohn für einen Becher kalten Wassers (Mt 10,42). Unvollkommen heißt nicht wertlos.`,
          followUps: [
            {
              id: 'dann-verdienst',
              objection: `„Dann geht es bei euch am Ende doch um Verdienst: Gott schuldet euch Lohn für eure Werke."`,
              objectionBy: 'Michael Horton',
              answer: `Gott schuldet niemandem etwas – „wenn ihr alles getan habt, was euch befohlen ist, so sprecht: Wir sind unnütze Knechte" (Lk 17,10). Der Lohn ist Verheißung aus Gnade, nicht Lohnforderung. Augustinus hat es so gesagt: Wenn Gott unsere Verdienste krönt, krönt er seine eigenen Gaben. Die koptische Frömmigkeit spricht deshalb lieber von „Früchten" und „Kampf" als von „Verdienst".`,
              sources: [
                { kind: 'bibel', work: 'Lukas', ref: '17,10', quote: `Also auch ihr, wenn ihr alles getan habt, was euch befohlen ist, so sprechet: Wir sind unnütze Knechte; wir haben getan, was wir zu tun schuldig waren.`, translation: 'Luther 1912', status: 'verbatim' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'galater-ein-werk',
      objection: `„Paulus verflucht in Gal 1 und 5 jeden, der zur Gnade auch nur ein einziges Werk hinzufügt – die Beschneidung. Fasten, Beichte und Almosen als Heilsbedingung sind genau dasselbe."`,
      objectionBy: 'James White',
      answer: `Im Galaterbrief geht es um die Beschneidung als Übernahme des ganzen mosaischen Gesetzes („wer sich beschneiden läßt, der ist noch das ganze Gesetz schuldig zu tun", Gal 5,3) – als Bedingung dafür, dass Heiden zum Volk Gottes gehören. Derselbe Brief sagt: Was zählt, ist „der Glaube, der durch die Liebe tätig ist" (5,6); wer die Werke des Fleisches tut, „wird das Reich Gottes nicht ererben" (5,21); „was der Mensch sät, das wird er ernten" (6,7). Paulus verwirft das Gesetz des Mose als Heilsweg, nicht das Leben des Glaubens.`,
      sources: [
        { kind: 'bibel', work: 'Galater', ref: '5,19–21', quote: `Offenbar sind aber die Werke des Fleisches, als da sind: Ehebruch, Hurerei, Unreinigkeit, Unzucht … von welchen ich euch habe zuvor gesagt und sage noch zuvor, daß, die solches tun, werden das Reich Gottes nicht ererben.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'fasten-beichte-riten',
          objection: `„Fasten und Beichte sind religiöse Riten – genauso wie die Beschneidung."`,
          objectionBy: 'James White',
          answer: `Sie stammen nicht aus dem mosaischen Gesetz, sondern von Christus: „Wenn ihr fastet …" (Mt 6,16), „alsdann werden sie fasten" (Mt 9,15), „welchen ihr die Sünden erlasset, denen sind sie erlassen" (Joh 20,23). Und sie sind nicht Eintrittsbedingung in den Bund, sondern Wege, im Bund zu leben und zu heilen. Die koptische Kirche lehrt nicht, dass Fasten das Heil verdient; sie nennt es eine Arznei der Seele.`,
          followUps: [
            {
              id: 'nicht-fasten-suende',
              objection: `„Aber wer bei euch nicht fastet, sündigt – das ist doch ein Gesetz."`,
              objectionBy: 'John MacArthur',
              answer: `Wer aus Gleichgültigkeit die gemeinsame Ordnung der Kirche missachtet, verletzt die Gemeinschaft (Hebr 13,17). Aber das Fasten wird vom Beichtvater an Gesundheit, Alter und Lebenslage angepasst; Kranke, Schwangere und kleine Kinder sind ausgenommen. Und die Kirche liest jedes Jahr Jes 58: Das Fasten, das Gott gefällt, ist, „dem Hungrigen dein Brot zu brechen". Ein Fasten ohne Liebe verurteilt die koptische Tradition selbst.`,
              sources: [
                { kind: 'bibel', work: 'Jesaja', ref: '58,6–7', quote: `Das ist aber ein Fasten, das ich erwähle: Laß los, welche du mit Unrecht gebunden hast; laß ledig, welche du beschwerst; gib frei, welche du drängest; reiß weg allerlei Last; brich dem Hungrigen dein Brot …`, translation: 'Luther 1912', status: 'verbatim' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'luther-guter-mann',
      objection: `„Luther: ‚Gute fromme Werke machen nimmermehr einen guten frommen Mann, sondern ein guter frommer Mann macht gute fromme Werke.' Werke sind Frucht, nicht Wurzel."`,
      objectionBy: 'Martin Luther / Michael Horton',
      answer: `Ein schöner Satz – und wir stimmen zu, dass der Baum zuerst durch Gottes Gnade gut gemacht werden muss (Mt 7,17–18). Aber Jesus fährt fort: „Ein jeglicher Baum, der nicht gute Früchte bringt, wird abgehauen und ins Feuer geworfen" (Mt 7,19); „eine jegliche Rebe an mir, die nicht Frucht bringt, wird er wegnehmen" (Joh 15,2). Frucht ist kein optionaler Beweis – ihr Fehlen führt ins Gericht. Und Tugend wächst durch Übung: „durch Gewohnheit geübte Sinne" (Hebr 5,14).`,
      sources: [
        { kind: 'gegner', author: 'Martin Luther', work: 'Von der Freiheit eines Christenmenschen', year: '1520', quote: `Gute fromme Werke machen nimmermehr einen guten frommen Mann, sondern ein guter frommer Mann macht gute fromme Werke.`, translation: 'Original (Schreibweise modernisiert)', status: 'verbatim' },
        { kind: 'bibel', work: 'Matthäus', ref: '7,19', quote: `Ein jeglicher Baum, der nicht gute Früchte bringt, wird abgehauen und ins Feuer geworfen.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'bedingung-zweiter-ordnung',
          objection: `„Dann sind Werke eben eine Bedingung zweiter Ordnung. Das ist Werkgerechtigkeit mit frommem Etikett."`,
          objectionBy: 'Michael Horton',
          answer: `Werkgerechtigkeit heißt: selbst erzeugte Gerechtigkeit, mit der man vor Gott einen Anspruch erhebt. Synergie heißt: Frucht, die die Gnade wirkt und der Mensch frei bejaht. Jesus selbst macht ein Werk zur Bedingung: „Wo ihr den Menschen ihre Fehler nicht vergebet, so wird euch euer Vater eure Fehler auch nicht vergeben" (Mt 6,15). Lehrt Jesus Werkgerechtigkeit?`,
          questionsBack: [
            `Ist das Vergeben, das Jesus in Mt 6,15 zur Bedingung macht, ein „Werk"? Und wenn ja – lehrt Jesus damit Werkgerechtigkeit?`,
          ],
          followUps: [
            {
              id: 'mt-18-nie-vergeben',
              objection: `„Mt 6,15 zeigt nur: Wer unversöhnlich bleibt, beweist, dass er die Vergebung nie wirklich erfahren hat."`,
              objectionBy: 'John MacArthur',
              answer: `Das Gleichnis vom Schalksknecht (Mt 18,23–35) sagt das Gegenteil: Dem Knecht war die riesige Schuld wirklich erlassen – „alle diese Schuld habe ich dir erlassen". Weil er seinem Mitknecht nicht vergab, wurde die Vergebung zurückgenommen. Und Jesus schließt: „Also wird euch mein himmlischer Vater auch tun, so ihr nicht vergebet von eurem Herzen." Echte, empfangene Vergebung kann durch Unbarmherzigkeit verloren gehen.`,
              sources: [
                { kind: 'bibel', work: 'Matthäus', ref: '18,32–35', quote: `Da forderte ihn sein Herr vor sich und sprach zu ihm: Du Schalksknecht, alle diese Schuld habe ich dir erlassen, dieweil du mich batest; solltest du dich denn nicht auch erbarmen über deinen Mitknecht, wie ich mich über dich erbarmet habe? … Also wird euch mein himmlischer Vater auch tun, so ihr nicht vergebet von eurem Herzen, ein jeglicher seinem Bruder seine Fehler.`, translation: 'Luther 1912', status: 'verbatim' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'verzweiflung-kloster',
      objection: `„Wer Werke zur Bedingung macht, weiß nie, ob er genug getan hat. Das führt in die Verzweiflung – wie bei Luther im Kloster."`,
      objectionBy: 'R. C. Sproul',
      answer: `Luthers Angst entstand in einem spätmittelalterlichen westlichen System von bezifferten Verdiensten, Genugtuungen und Ablässen – das die koptische Kirche nie kannte. Orthodoxe Frömmigkeit ist kein Rechnen, sondern Beziehung: Der Vater läuft dem heimkehrenden Sohn entgegen, bevor dieser seine Rede beendet hat (Lk 15,20). Die Wüstenväter lehrten nicht das Zählen von Leistungen, sondern Demut und grenzenloses Vertrauen auf Gottes Erbarmen.`,
      followUps: [
        {
          id: 'sisoes-ungewissheit',
          objection: `„Aber genau dieses ‚Ich weiß nicht, ob ich schon angefangen habe' ist doch die Ungewissheit, von der das Evangelium befreit!"`,
          objectionBy: 'R. C. Sproul',
          answer: `Es ist Demut, nicht Angst: Das Gesicht des sterbenden Abba Sisoes leuchtete, er starb in Frieden. Vertrauen auf Gott und Demut über sich selbst gehören zusammen – wie bei Paulus: „Ich bin mir wohl nichts bewußt; aber darin bin ich nicht gerechtfertigt; der HERR ist's aber, der mich richtet" (1 Kor 4,4). Wer sich seines Heils rühmt, steht nicht fester, sondern gefährlicher.`,
          sources: [
            { kind: 'bibel', work: '1. Korinther', ref: '4,4', quote: `Ich bin mir wohl nichts bewußt; aber darin bin ich nicht gerechtfertigt; der HERR ist's aber, der mich richtet.`, translation: 'Luther 1912', status: 'verbatim' },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wenn Werke für das Heil keine Rolle spielen – warum fragt Jesus im Gericht (Mt 25) ausschließlich nach Werken der Barmherzigkeit?`,
    `Was bedeutet Hebr 12,14 „ohne Heiligung wird niemand den Herrn sehen" für deine Lehre?`,
    `Ist Vergeben (Mt 6,15) ein Werk? Und ist es eine Bedingung der Vergebung?`,
    `Warum warnt Paulus *im Galaterbrief*: „Was der Mensch sät, das wird er ernten" (Gal 6,7)?`,
  ],
  avoid: [
    `Von „Verdiensten" so sprechen, als könne man Gott etwas abhandeln. Das ist weder biblisch noch koptisch.`,
    `Die eigene Frömmigkeit vorrechnen („Wir fasten 200 Tage im Jahr"). Das bestätigt nur das Vorurteil.`,
    `Luthers persönliche Kämpfe verspotten. Seine Gewissensnot war echt und verdient Respekt.`,
  ],
  concessions: [
    `Im spätmittelalterlichen Westen gab es ein Verdienst- und Ablasswesen, das tatsächlich Werkgerechtigkeit förderte; Luthers Protest dagegen war berechtigt.`,
    `Auch Orthodoxe können in eine äußerliche Leistungsfrömmigkeit abgleiten. Die Kirche bekämpft das – aber es kommt vor.`,
  ],
  furtherReading: [
    { kind: 'koptisch', author: 'Papst Schenuda III.', work: 'Das Heil im orthodoxen Verständnis', status: 'paraphrase' },
    { kind: 'kirchenvater', work: 'Apophthegmata Patrum (Weisung der Väter)', status: 'paraphrase', note: 'Die Aussprüche der ägyptischen Wüstenväter – Demut statt Leistungsdenken.' },
    { kind: 'gegner', author: 'Michael S. Horton', work: 'Christless Christianity', year: '2008', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Werke', 'Werkgerechtigkeit', 'Gesetz und Evangelium', 'Galaterbrief', 'Synergie'],
  related: [
    'sola-fide/allein-durch-glauben',
    'sola-fide/einmal-gerettet-immer-gerettet',
    'fasten-liturgie/fasten-gesetzlichkeit',
    'sakramente/beichte-unbiblisch',
    'katholizismus/ablass-verdienste',
  ],
};

export default claim;
