import type { Topic } from '../../../schema.ts';
import kanaaniterVoelkermord from './kanaaniter-voelkermord.ts';
import bibelBefuerwortetSklaverei from './bibel-befuerwortet-sklaverei.ts';
import bibelFrauenfeindlich from './bibel-frauenfeindlich.ts';
import grausameGesetze from './grausame-gesetze.ts';
import atGottMonster from './at-gott-monster.ts';
import abrahamIsaak from './abraham-isaak.ts';

const topic: Topic = {
  id: 'at-ethik',
  category: 'ethik',
  group: 'Altes Testament & Ethik',
  order: 1,
  title: `Altes Testament & Ethik`,
  subtitle: `Kanaaniter, Sklaverei, Frauen, harte Gesetze und das Gottesbild des Alten Testaments`,
  icon: 'swords',
  overview: `Seit den „Neuen Atheisten" ist das Alte Testament eines der wirksamsten Argumente gegen den christlichen Glauben – nicht auf der Ebene der Wissenschaft, sondern der **Moral**. Richard Dawkins eröffnet das zweite Kapitel von *The God Delusion* mit einer Liste von Anklagen gegen den „Gott des Alten Testaments", Christopher Hitchens nennt das AT einen „Albtraum", und Hector Avalos sieht in der Bibel eine Quelle religiöser Gewalt. Die Vorwürfe zielen auf reale Texte: den Bann gegen die Kanaaniter, Sklavengesetze, Bestimmungen über Frauen, Todesstrafen und die Bindung Isaaks.

Die Debatte verläuft fast immer nach demselben Muster: Der Kritiker zitiert einen isolierten Vers, beschreibt ihn mit heutigen Rechtsbegriffen („Völkermord", „Besitzsklaverei") und folgert, dass ein guter Gott so etwas nie gesagt hätte. Die christliche Antwort braucht drei Ebenen: **Exegese** (Was sagt der Text in seiner Sprache, Gattung und Zeit wirklich?), **Vergleich** (Wohin weist die Tora gegenüber Hammurabi und den Nachbarkulturen?) und **Heilsgeschichte** (Wie führt Gott ein Volk Schritt für Schritt bis zu Christus – „wegen eurer Herzenshärtigkeit", Mt 19,8?).

Die koptisch-orthodoxe Kirche steht dabei in der **alexandrinischen Tradition**: Origenes, Athanasius, Kyrill und Gregor von Nyssa lasen die Schrift wörtlich *und* geistlich, mit Christus als Mitte. Die Kirche hat **Markion** verworfen, der den Gott des AT vom Vater Jesu trennen wollte – derselbe Gott spricht in beiden Testamenten. Zugleich hat sie nie aus den Kriegstexten ein Recht zur Gewalt abgeleitet: Die koptische Kirche hat ihre Identität in 1.400 Jahren unter wechselnden Herrschaften im Martyrium gefunden, nicht im Schwert.`,
  strategy: `**1. Zuerst zugeben, dass die Texte schwer sind.** Nichts verliert eine Debatte schneller als ein Christ, der Jos 6,21 oder Lev 25,44–46 achselzuckend verteidigt. Sag: „Das ist eine harte Stelle – lass sie uns genau ansehen."

**2. Den ganzen Text lesen.** Fast jeder Einwand lebt von einem isolierten Vers. Zeige die innerbiblischen Gegenstücke: Jos 10,40 vs. Ri 1; Ex 20,5 vs. Ez 18,20; Gen 22,2 vs. 22,12; Ex 21,20 vs. 21,21.

**3. Vergleichen, nicht idealisieren.** Die Tora ist nicht die Bergpredigt – aber sie ist im Vergleich mit Hammurabi und den Mittelassyrischen Gesetzen ein moralischer Fortschritt (Asyl für entlaufene Sklaven, Menschenraub als Kapitalverbrechen, gleiches Recht für alle).

**4. Die Richtung zeigen.** Gott erzieht ein Volk aus einer gewalttätigen Welt heraus bis zu Christus (Mt 19,8; Gal 3,24). Die Saat – Gottebenbildlichkeit, Exodus, Bruderschaft in Christus – hat Sklaverei und Kindesaussetzung überwunden.

**5. Die Frage nach dem Maßstab stellen – aber erst am Ende.** Wer Gott „ungerecht" nennt, braucht einen objektiven Maßstab für Gerechtigkeit. Diese Rückfrage ist stark, darf aber nicht als Ausweichmanöver wirken: Beantworte zuerst den Einwand, dann frage nach dem Fundament.

**Fallen:** Nicht behaupten, alle Kanaaniter (auch Kinder) hätten den Tod „verdient". Nicht das AT als „überholt" abtun (Markionismus). Nicht die Hyperbel-Deutung als Allheilmittel verkaufen – sie verringert das Ausmaß, aber nicht jede Härte.`,
  keyOpponents: [
    { name: 'Richard Dawkins', role: 'Evolutionsbiologe, Oxford', work: 'The God Delusion (2006)' },
    { name: 'Christopher Hitchens', role: 'Publizist und Religionskritiker', work: 'God Is Not Great (2007)' },
    { name: 'Hector Avalos', role: 'Religionswissenschaftler, Iowa State University', work: 'Fighting Words (2005); Slavery, Abolitionism, and the Ethics of Biblical Scholarship (2011)' },
    { name: 'Sam Harris', role: 'Neurowissenschaftler und Autor', work: 'Letter to a Christian Nation (2006)' },
    { name: 'Bart Ehrman', role: 'Neutestamentler, UNC Chapel Hill', work: 'God\'s Problem (2008)' },
    { name: 'Wes Morriston', role: 'Religionsphilosoph, University of Colorado', work: '„Did God Command Genocide?" (2009)' },
    { name: 'Dan Savage', role: 'Publizist und LGBT-Aktivist', work: 'Vorträge zur Bibel und Sexualmoral' },
  ],
  claims: [kanaaniterVoelkermord, bibelBefuerwortetSklaverei, bibelFrauenfeindlich, grausameGesetze, atGottMonster, abrahamIsaak],
  newPeople: [
    {
      id: 'paul-copan',
      name: 'Paul Copan',
      years: 'zeitgenössisch',
      era: 'modern',
      tradition: 'evangelisch',
      title: 'Religionsphilosoph, Palm Beach Atlantic University',
      fields: ['Ethik des Alten Testaments', 'Moralisches Argument', 'Religionsphilosophie'],
      bio: 'Amerikanischer Religionsphilosoph, der sich besonders mit den ethischen Einwänden gegen das Alte Testament befasst. Seine Bücher antworten direkt auf die Neuen Atheisten und verbinden Exegese, altorientalische Vergleichsstudien und Moralphilosophie.',
      keyWorks: ['Is God a Moral Monster? (2011)', 'Did God Really Command Genocide? (mit Matthew Flannagan, 2014)'],
    },
    {
      id: 'k-lawson-younger',
      name: 'K. Lawson Younger Jr.',
      years: 'zeitgenössisch',
      era: 'modern',
      tradition: 'evangelisch',
      title: 'Alttestamentler und Altorientalist, Trinity Evangelical Divinity School',
      fields: ['Altorientalische Geschichtsschreibung', 'Eroberungsberichte', 'Assyriologie'],
      bio: 'Fachmann für altorientalische Inschriften und Geschichtsschreibung. Seine Vergleichsstudie zu den Eroberungsberichten in Josua und in assyrischen, hethitischen und ägyptischen Annalen ist ein Standardwerk zur Frage der Kriegsrhetorik im Alten Testament.',
      keyWorks: ['Ancient Conquest Accounts (1990)'],
    },
    {
      id: 'christopher-wright',
      name: 'Christopher J. H. Wright',
      years: 'zeitgenössisch',
      era: 'modern',
      tradition: 'anglikanisch',
      title: 'Alttestamentler, Langham Partnership',
      fields: ['Ethik des Alten Testaments', 'Mission', 'Hermeneutik'],
      bio: 'Britischer Alttestamentler und anglikanischer Geistlicher, der die Ethik des Alten Testaments als „Paradigma" für die Gegenwart erschließt. Er behandelt auch die schwierigen Texte (Landnahme, Gericht) ausdrücklich und seelsorgerlich.',
      keyWorks: ['Old Testament Ethics for the People of God (2004)', 'The God I Don\'t Understand (2008)', 'The Mission of God (2006)'],
    },
    {
      id: 'kyle-harper',
      name: 'Kyle Harper',
      years: 'zeitgenössisch',
      era: 'modern',
      tradition: 'christlich',
      title: 'Althistoriker, University of Oklahoma',
      fields: ['Spätantike', 'Sklaverei', 'Sexualmoral der Antike', 'Römische Geschichte'],
      bio: 'Amerikanischer Althistoriker mit Arbeiten zur spätrömischen Sklaverei, zur Umwandlung der Sexualmoral durch das Christentum und zur Umweltgeschichte Roms. Seine Studien zeigen nüchtern die Grenzen, aber auch die tiefgreifende Neuheit des christlichen Menschenbilds.',
      keyWorks: ['Slavery in the Late Roman World, AD 275–425 (2011)', 'From Shame to Sin (2013)', 'The Fate of Rome (2017)'],
      caveat: 'Harper wird als Fachhistoriker angeführt, nicht als Apologet; seine persönliche Konfession ist hier nicht belegt.',
    },
    {
      id: 'wilberforce',
      name: 'William Wilberforce',
      years: '1759–1833',
      era: 'neuzeit',
      tradition: 'anglikanisch',
      title: 'Britischer Parlamentarier und Abolitionist',
      fields: ['Abschaffung der Sklaverei', 'Sozialreform', 'Christliche Ethik in der Politik'],
      bio: 'Evangelikaler Anglikaner und Mitglied der Clapham-Gruppe, der fast zwei Jahrzehnte lang im britischen Unterhaus gegen den Sklavenhandel kämpfte, bis 1807 der Slave Trade Act verabschiedet wurde. Kurz nach seinem Tod 1833 wurde die Sklaverei im Britischen Empire abgeschafft.',
      keyWorks: ['A Practical View of Christianity (1797)'],
    },
    {
      id: 'miroslav-volf',
      name: 'Miroslav Volf',
      years: 'geb. 1956',
      era: 'modern',
      tradition: 'evangelisch',
      title: 'Systematischer Theologe, Yale Divinity School',
      fields: ['Versöhnung', 'Gewalt und Gericht', 'Öffentliche Theologie'],
      bio: 'Aus Kroatien stammender Theologe, der unter dem Eindruck der Kriege im ehemaligen Jugoslawien über Versöhnung, Vergebung und das Gericht Gottes schrieb. Er argumentiert, dass der Glaube an Gottes gerechtes Gericht Menschen zum Verzicht auf eigene Rache befähigt.',
      keyWorks: ['Exclusion and Embrace (1996)', 'Free of Charge (2005)'],
    },
  ],
};

export default topic;
