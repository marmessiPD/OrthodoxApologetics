import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'reinkarnation-553-gestrichen',
  title: `„Die Kirche hat 553 die Reinkarnation aus der Bibel gestrichen."`,
  proponents: [
    { name: 'Shirley MacLaine', role: 'Schauspielerin und Esoterik-Autorin', work: 'Out on a Limb (1983)' },
    { name: 'Elizabeth Clare Prophet', role: 'Esoterische Religionsgründerin (†2009)', work: 'Reincarnation: The Missing Link in Christianity (1997)' },
    { name: 'Esoterische und New-Age-Literatur', role: 'Populäre Autoren, Internetseiten', work: '„Justinian und Theodora ließen die Reinkarnation streichen"' },
  ],
  steelman: `Die ersten Christen glaubten an die Wiedergeburt der Seele – darauf deuten noch heute Bibelstellen hin: Jesus sagt, Johannes der Täufer sei Elia (Mt 11,14); die Jünger fragen, ob der Blindgeborene vor seiner Geburt gesündigt habe (Joh 9,2); der Mensch müsse „von neuem geboren" werden (Joh 3,3). Der große Kirchenlehrer Origenes lehrte die Präexistenz der Seelen. Doch 553 ließ Kaiser Justinian – angestiftet von Kaiserin Theodora – auf dem Konzil von Konstantinopel die Lehre des Origenes verdammen und alle Hinweise auf die Reinkarnation aus der Bibel entfernen, um die Menschen durch Angst vor dem einmaligen Gericht gefügig zu machen.`,
  biblical: {
    summary: `Die Bibel lehrt ein einmaliges irdisches Leben, auf das das Gericht und die leibliche Auferstehung folgen: „Wie den Menschen ist gesetzt, einmal zu sterben, danach aber das Gericht" (Hebr 9,27). Die angeführten Stellen tragen keine Reinkarnation: Johannes der Täufer kommt „im Geist und in der Kraft Elias" (Lk 1,17) und verneint selbst, Elia zu sein (Joh 1,21); Elia ist nie gestorben (2 Kön 2,11) und erscheint bei der Verklärung als er selbst neben Jesus (Mt 17,3). Beim Blindgeborenen weist Jesus die Voraussetzung der Frage zurück (Joh 9,3). „Von neuem geboren" erklärt Jesus selbst als Geburt „aus Wasser und Geist" (Joh 3,5) – die Taufe.`,
    sources: [
      { kind: 'bibel', work: 'Hebräer', ref: '9,27', quote: `Und wie den Menschen ist gesetzt, einmal zu sterben, darnach aber das Gericht:`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '1,21', quote: `Und sie fragten ihn: Was denn? Bist du Elia? Er sprach: Ich bin's nicht.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Lukas', ref: '1,17', quote: `Er wird vor ihm hergehen im Geist und in der Kraft Elias.`, status: 'paraphrase' },
      { kind: 'bibel', work: 'Johannes', ref: '9,3', quote: `Jesus antwortete: Es hat weder dieser gesündigt noch seine Eltern; sondern daß die Werke Gottes offenbar würden an ihm.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '3,5', quote: `Es sei denn, daß jemand geboren werde aus dem Wasser und Geist, so kann er nicht in das Reich Gottes kommen.`, status: 'paraphrase' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche bekennt im Glaubensbekenntnis: „Wir erwarten die Auferstehung der Toten und das Leben der kommenden Welt." Der Mensch ist eine Einheit aus Leib und Seele, die Seele wird mit dem Leib geschaffen, und am Ende steht die Auferstehung desselben, verwandelten Leibes – nicht die Wanderung der Seele durch viele Körper. Die koptische Kirche erkennt das Konzil von Konstantinopel 553 nicht an (sie anerkennt nur Nizäa, Konstantinopel 381 und Ephesus); ihre Ablehnung der Reinkarnation beruht nicht auf diesem Konzil, sondern auf der Schrift, dem Bekenntnis und den Vätern vor 553 – Irenäus, Tertullian, Gregor von Nyssa und sogar Origenes selbst.`,
    sources: [
      { kind: 'konzil', work: 'Glaubensbekenntnis von Nizäa-Konstantinopel', year: '381', quote: `Wir erwarten die Auferstehung der Toten und das Leben der kommenden Welt.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Adversus Haereses', ref: 'II,33,1–5', year: 'ca. 180', quote: `Widerlegung der Lehre von der Seelenwanderung: Die Seelen erinnern sich an kein früheres Leben; Gott gibt jedem Menschen seinen eigenen Leib und seine eigene Seele, und jeder wird in seinem eigenen Leib auferstehen.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Historisch gesichert ist: Das Zweite Konzil von Konstantinopel (553) verurteilte unter Kaiser Justinian die „Drei Kapitel"; im Umfeld des Konzils wurden 15 Anathematismen gegen origenistische Lehren (u. a. Präexistenz der Seelen und Apokatastasis) beschlossen – ob formell durch das Konzil selbst oder durch eine Versammlung kurz zuvor, ist in der Forschung umstritten. Eine Änderung des Bibeltextes ist nicht bezeugt und durch die erhaltenen Handschriften widerlegt: Tausende Abschriften des Neuen Testaments – darunter Papyri um 200 und die großen Kodizes des 4. Jahrhunderts – stammen aus der Zeit vor 553 und enthalten keine Reinkarnationslehre. Kaiserin Theodora starb bereits 548.`,
    sources: [
      { kind: 'konzil', work: 'Anathematismen gegen Origenes (Konstantinopel 553)', ref: 'Anathem 1', year: '553', quote: `Wer die erdichtete Präexistenz der Seelen und die daraus folgende ungeheuerliche Wiederherstellung (Apokatastasis) behauptet, der sei ausgeschlossen.`, status: 'paraphrase', note: 'Verurteilt wird die Präexistenz, nicht ein Bibeltext; die formelle Zuordnung zum Konzil ist umstritten.' },
      { kind: 'fachliteratur', author: 'Bruce M. Metzger, Bart D. Ehrman', work: 'The Text of the New Testament. Its Transmission, Corruption, and Restoration', year: '4. Aufl. 2005', quote: `Überblick über die frühen Papyri (z. B. P66, P75 um 200) und die großen Kodizes des 4. Jahrhunderts.`, status: 'paraphrase' },
      { kind: 'gegner', author: 'Elizabeth Clare Prophet', work: 'Reincarnation: The Missing Link in Christianity', year: '1997', quote: `Die Reinkarnation sei urchristlich gewesen und von der Kirche unterdrückt worden.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Das lässt sich leicht prüfen – und es stimmt nicht. Wir haben Tausende Handschriften des Neuen Testaments aus der Zeit vor 553, manche aus der Zeit um 200, auch koptische Übersetzungen. In keiner steht eine Reinkarnationslehre, und keine Stelle verschwindet nach 553. Das Konzil verurteilte Lehren des Origenes – vor allem die Präexistenz der Seele –, es strich keinen Bibelvers. Origenes selbst lehnte die Seelenwanderung ausdrücklich ab. Und Kaiserin Theodora, die angeblich dahintersteckte, war schon 548 gestorben.`,
  keyPoints: [
    `**Handschriftenprüfung:** Tausende NT-Handschriften vor 553 (Papyri um 200, Kodex Sinaiticus und Vaticanus im 4. Jh., koptische Übersetzungen) – keine Reinkarnationsstellen, keine Streichungen.`,
    `**Was 553 verurteilt wurde:** origenistische Spekulationen (Präexistenz der Seelen, Apokatastasis) – kein Bibeltext.`,
    `**Origenes lehnte die Seelenwanderung ab** (Matthäuskommentar XIII,1): Johannes sei nicht die wiedergekehrte Seele Elias.`,
    `**Hebr 9,27:** einmal sterben, danach das Gericht; dazu die leibliche Auferstehung im Glaubensbekenntnis.`,
    `**Die Bibelstellen tragen nicht:** Johannes kommt „im Geist Elias" und verneint, Elia zu sein; Elia starb nie; Jesus weist die Frage in Joh 9 zurück; „Wiedergeburt" ist die Taufe.`,
    `**Koptische Klarheit:** Die koptische Kirche erkennt 553 nicht an – und lehnt die Reinkarnation trotzdem ab, weil Schrift und Väter vor 553 sie ablehnen.`,
  ],
  voices: [
    {
      person: 'origenes',
      role: 'als der Kronzeuge, auf den sich die These beruft',
      text: `Ausgerechnet Origenes, auf den sich die Reinkarnationsthese stützt, weist die Seelenwanderung zurück. In seinem Matthäuskommentar fragt er, ob Johannes der Täufer die wiedergekehrte Seele Elias sei, und verneint: Das würde zur Lehre der Seelenwanderung führen, die der Kirche Gottes fremd, von den Aposteln nicht überliefert und nirgends in der Schrift gelehrt sei. Johannes kam in Geist und Kraft Elias, nicht als dessen Seele. Ehrlich ist: Origenes spekulierte über eine Präexistenz der Seelen vor der Erschaffung der Welt – diese Lehre wurde später verurteilt. Aber Präexistenz ist nicht Reinkarnation: Origenes kennt keinen Kreislauf von Wiedergeburten in immer neue Körper.`,
      sources: [
        { kind: 'kirchenvater', author: 'Origenes', work: 'Kommentar zum Matthäusevangelium', ref: 'XIII,1', year: 'ca. 246–248', quote: `Ablehnung der Vorstellung, Johannes sei die Seele Elias: Das führe zur Lehre der Seelenwanderung (Metensomatose), die der Kirche Gottes fremd, von den Aposteln nicht überliefert und in den Schriften nicht gelehrt sei.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'irenaeus',
      role: 'als früher Widerleger der Seelenwanderung',
      text: `Schon um 180 setzt sich Irenäus mit gnostischen Gruppen auseinander, die – angelehnt an Platon – lehrten, die Seelen wanderten durch viele Körper. Seine Argumente: Die Seelen erinnern sich an kein früheres Dasein; der Herr lehrt im Gleichnis vom reichen Mann und Lazarus, dass die Seelen nach dem Tod ihre Identität behalten und nicht in neue Körper wandern; und Gott schenkt jedem Menschen seinen eigenen Leib, in dem er auferstehen wird. Damit ist belegt, dass die Kirche die Reinkarnation fast 400 Jahre vor 553 ablehnte.`,
      sources: [
        { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Adversus Haereses', ref: 'II,33–34', year: 'ca. 180', quote: `Argumente gegen die Seelenwanderung: fehlende Erinnerung, das Gleichnis von Lazarus, die Auferstehung im eigenen Leib.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'gregor-nyssa',
      role: 'als Philosoph der Seele',
      text: `Gregor von Nyssa, einer der großen kappadokischen Väter, behandelt in seinem Dialog „Über die Seele und die Auferstehung" und in „Über die Erschaffung des Menschen" sowohl die Präexistenz als auch die Seelenwanderung. Er lehnt beide ab: Seele und Leib entstehen zusammen, der Mensch ist von Anfang an eine Einheit, und die Vorstellung, eine menschliche Seele könne in Tiere oder Pflanzen übergehen, zerstöre die Würde des Menschen als Bild Gottes. Die Hoffnung des Christen ist die Auferstehung, in der Gott den Menschen als ganzen erneuert.`,
      sources: [
        { kind: 'kirchenvater', author: 'Gregor von Nyssa', work: 'Über die Erschaffung des Menschen (De hominis opificio)', ref: '28', year: 'ca. 379', quote: `Zurückweisung sowohl der Präexistenz der Seelen als auch der Seelenwanderung; Seele und Leib entstehen zugleich.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'tertullian',
      role: 'als Apologet gegen die platonische Seelenlehre',
      text: `Tertullian widmet in seiner Schrift „Über die Seele" mehrere Kapitel der Widerlegung der Seelenwanderung (Metempsychose) des Pythagoras und Platons. Er argumentiert unter anderem mit der Bevölkerungsentwicklung, mit der fehlenden Erinnerung und mit dem biblischen Zeugnis über Elia und Johannes. Sein Beispiel zeigt: Die Frage wurde im 2./3. Jahrhundert offen diskutiert – und die Kirche hat sich klar gegen die Seelenwanderung entschieden, lange vor jedem Kaiser Justinian.`,
      sources: [
        { kind: 'kirchenvater', author: 'Tertullian', work: 'Über die Seele (De anima)', ref: '28–35', year: 'ca. 210', quote: `Widerlegung der pythagoreisch-platonischen Seelenwanderung; Johannes ist nicht Elia der Seele nach.`, status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'konzil-strich-bibel',
      objection: `553 ließ Kaiser Justinian, angestiftet von seiner Frau Theodora, auf dem Konzil von Konstantinopel alle Stellen über die Wiedergeburt aus der Bibel entfernen.`,
      objectionBy: 'Shirley MacLaine',
      answer: `Das lässt sich prüfen: Wir besitzen Tausende Handschriften des Neuen Testaments aus der Zeit vor 553 – Papyri aus der Zeit um 200, die großen Kodizes des 4. Jahrhunderts, frühe koptische Übersetzungen. Keine enthält eine Reinkarnationslehre, und kein Vers verschwindet nach 553. Das Konzil verurteilte Lehren des Origenes, keinen Bibeltext. Und Kaiserin Theodora war schon 548 gestorben, fünf Jahre vor dem Konzil.`,
      questionsBack: [`Welcher Vers stand vor 553 in der Bibel und fehlt danach – kannst du mir eine Handschrift nennen?`],
      followUps: [
        {
          id: 'origenes-reinkarnation',
          objection: `Aber Origenes lehrte die Reinkarnation, und genau deshalb wurde er verurteilt.`,
          objectionBy: 'Elizabeth Clare Prophet',
          answer: `Origenes spekulierte über eine Präexistenz der Seelen – dass sie vor der Welt existierten und dann in Leiber kamen. Das wurde verurteilt. Aber die Seelenwanderung durch viele Körper hat er ausdrücklich abgelehnt: In seinem Matthäuskommentar schreibt er, die Vorstellung, Johannes sei die Seele Elias, führe zur Seelenwanderung, die der Kirche fremd und in der Schrift nirgends gelehrt sei.`,
          followUps: [
            {
              id: 'hieronymus-vorwurf',
              objection: `Hieronymus warf Origenes aber vor, er habe gelehrt, Seelen könnten sogar in Tiere übergehen.`,
              objectionBy: 'Esoterische Literatur',
              answer: `Das ist richtig, Hieronymus erhob diesen Vorwurf – und er ist ein Grund, warum Origenes' Werk „Über die Prinzipien" umstritten ist; es ist großenteils nur in der abmildernden lateinischen Übersetzung Rufins erhalten. Die Forschung diskutiert, wie weit Origenes solche Gedanken nur als Hypothese erwog. Selbst im ungünstigsten Fall wäre es eine Spekulation eines einzelnen Theologen, die die Kirche gerade nicht übernommen hat – kein verdrängter urchristlicher Glaube.`,
            },
          ],
        },
      ],
    },
    {
      id: 'bibelstellen-spuren',
      objection: `In der Bibel sind noch Spuren erhalten: Jesus sagt, Johannes der Täufer sei Elia; die Jünger fragen, ob der Blindgeborene vor seiner Geburt gesündigt habe; und man müsse „wiedergeboren" werden.`,
      objectionBy: 'Shirley MacLaine',
      answer: `Lies die Stellen im Zusammenhang: Johannes kommt „im Geist und in der Kraft Elias" (Lk 1,17) und sagt selbst: „Ich bin's nicht" (Joh 1,21). Beim Blindgeborenen weist Jesus die Voraussetzung zurück: Weder er noch seine Eltern haben gesündigt (Joh 9,3). Und „wiedergeboren" erklärt Jesus selbst als Geburt „aus Wasser und Geist" – das ist die Taufe, eine Neugeburt in diesem Leben, nicht nach dem Tod.`,
      followUps: [
        {
          id: 'elia-johannes',
          objection: `Wenn Jesus sagt „Er ist Elia, der da kommen soll" (Mt 11,14), dann ist das doch Wiedergeburt.`,
          objectionBy: 'Elizabeth Clare Prophet',
          answer: `Reinkarnation setzt voraus, dass jemand stirbt und neu geboren wird. Elia ist nach der Bibel nie gestorben, sondern entrückt worden (2 Kön 2,11). Und bei der Verklärung erscheint Elia als er selbst neben Jesus (Mt 17,3) – zu einem Zeitpunkt, als Johannes bereits hingerichtet war. Jesus meint also: Johannes erfüllt die Rolle, die Maleachi für Elia angekündigt hatte (Mal 3,23–24).`,
        },
        {
          id: 'wiedergeburt-taufe',
          objection: `„Von neuem geboren werden" – das ist doch wörtlich Wiedergeburt.`,
          objectionBy: 'Esoterische Literatur',
          answer: `So hat es auch Nikodemus missverstanden: „Kann er denn wiederum in seiner Mutter Leib gehen?" (Joh 3,4). Jesus korrigiert ihn: Geburt aus Wasser und Geist, also durch die Taufe. Die koptische Kirche tauft deshalb durch dreimaliges Untertauchen – die neue Geburt geschieht in diesem Leben, durch Gottes Gnade, nicht durch einen Kreislauf von Leben.`,
        },
      ],
    },
    {
      id: 'kopten-kein-553',
      objection: `Ihr Kopten erkennt das Konzil von 553 doch gar nicht an. Also habt ihr keine Grundlage, die Reinkarnation abzulehnen.`,
      objectionBy: 'Esoterische Literatur',
      answer: `Richtig: Die koptische Kirche erkennt nur Nizäa, Konstantinopel 381 und Ephesus an – 553 gehört nicht dazu. Aber unsere Ablehnung der Reinkarnation hängt nicht an diesem Konzil. Sie beruht auf der Schrift (Hebr 9,27, die leibliche Auferstehung), auf dem Glaubensbekenntnis von 381 („Wir erwarten die Auferstehung der Toten") und auf Vätern lange vor 553 – Irenäus, Tertullian, Gregor von Nyssa und Origenes selbst.`,
      followUps: [
        {
          id: 'apokatastasis-karma',
          objection: `Origenes' Allversöhnung ist doch dem Karma-Kreislauf verwandt: Alle Seelen kehren am Ende zurück.`,
          objectionBy: 'Elizabeth Clare Prophet',
          answer: `Die Apokatastasis meint eine endgültige Wiederherstellung aller in Gott, keinen Kreislauf von Wiedergeburten nach dem Gesetz des Karma; Origenes bindet sie zudem an Christus und die Gnade, nicht an eigene Verdienste aus vielen Leben. Die koptische Kirche lehrt die Allversöhnung nicht als Dogma. Für unsere Frage zählt: Weder Origenes noch die Kirche lehrten Reinkarnation.`,
        },
      ],
    },
    {
      id: 'gnostiker-reinkarnation',
      objection: `Viele frühe Christen – etwa Gnostiker – glaubten an Seelenwanderung. Die Orthodoxie hat das einfach unterdrückt.`,
      objectionBy: 'Esoterische Literatur',
      answer: `Ehrlich ist: Einige gnostische Schriften kennen die Seelenwanderung – etwa die „Pistis Sophia", die übrigens auf Koptisch überliefert ist. Aber diese Texte stammen aus dem 2. bis 4. Jahrhundert und wurden von der Kirche gerade deshalb abgelehnt, weil sie der apostolischen Lehre widersprachen; Irenäus berichtet und widerlegt das schon um 180. Die apostolischen Schriften des 1. Jahrhunderts lehren durchgehend die Auferstehung.`,
      sources: [
        { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Adversus Haereses', ref: 'I,25,4', year: 'ca. 180', quote: `Bericht über die Karpokratianer, die lehrten, die Seelen müssten durch viele Körper wandern, bis sie alles erfahren haben.`, status: 'paraphrase' },
      ],
      followUps: [
        {
          id: 'sieger-schreiben',
          objection: `Die „Orthodoxen" waren eben die Sieger und haben die Geschichte geschrieben.`,
          objectionBy: 'Bart Ehrman (Lost Christianities)',
          answer: `Die Frage ist nicht, wer siegte, sondern was am Anfang stand. Die Paulusbriefe und Evangelien aus dem 1. Jahrhundert verkünden die leibliche Auferstehung (1 Kor 15; Lk 24,39); die gnostischen Texte mit Seelenwanderung sind deutlich jünger. Wer ältere Quellen durch jüngere ersetzt, um ein „ursprüngliches" Christentum zu finden, stellt die historische Methode auf den Kopf.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Welcher Bibelvers wurde 553 gestrichen – und in welcher Handschrift vor 553 steht er?`,
    `Wie konnte Theodora 553 Einfluss nehmen, wenn sie 548 gestorben ist?`,
    `Wusstest du, dass Origenes die Seelenwanderung ausdrücklich als der Kirche fremd bezeichnete?`,
    `Wie passt Reinkarnation zu Hebr 9,27 und zur Auferstehung des Leibes?`,
  ],
  avoid: [
    `Behaupten, Origenes sei ein unbedenklicher Kirchenlehrer gewesen – seine Präexistenzlehre wurde zu Recht abgelehnt; er ist in der koptischen Kirche kein Heiliger.`,
    `Das Konzil von 553 als Autorität der koptischen Kirche anführen – sie erkennt es nicht an.`,
    `Gnostische Reinkarnationstexte leugnen – lieber ehrlich einordnen.`,
  ],
  concessions: [
    `Origenes spekulierte über die Präexistenz der Seelen; Hieronymus warf ihm noch weitergehende Thesen vor.`,
    `Einige gnostische Gruppen des 2.–4. Jahrhunderts lehrten Seelenwanderung.`,
    `Die genaue Zuordnung der Anathematismen gegen Origenes zum Konzil von 553 ist umstritten.`,
  ],
  furtherReading: [
    { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Adversus Haereses, Buch II', year: 'ca. 180', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Bruce M. Metzger, Bart D. Ehrman', work: 'The Text of the New Testament', year: '2005', status: 'paraphrase' },
    { kind: 'kirchenvater', author: 'Gregor von Nyssa', work: 'Über die Seele und die Auferstehung', year: 'ca. 380', status: 'paraphrase' },
  ],
  difficulty: 1,
  tags: ['Reinkarnation', 'Origenes', 'Konstantinopel 553', 'Esoterik', 'Auferstehung'],
  related: ['esoterik-new-age/reinkarnation-in-der-bibel', 'hinduismus/reinkarnation-erklaert-leid', 'neues-testament/nur-kopien-von-kopien', 'gnosis/gnostische-evangelien-wahres-christentum'],
};

export default claim;
