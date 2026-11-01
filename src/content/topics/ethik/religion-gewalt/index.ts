import type { Topic } from '../../../schema.ts';
import religionVerursachtKriege from './religion-verursacht-kriege.ts';
import kreuzzuege from './kreuzzuege.ts';
import inquisitionHexen from './inquisition-hexen.ts';
import atheistischeRegime from './atheistische-regime.ts';

const topic: Topic = {
  id: 'religion-gewalt',
  category: 'ethik',
  group: 'Religion & Gewalt',
  order: 1,
  title: `Religion und Gewalt`,
  subtitle: `Religionskriege, Kreuzzüge, Inquisition, Hexenverfolgung und die Verbrechen atheistischer Regime`,
  icon: 'shield',
  overview: `„Religion vergiftet alles" – mit diesem Untertitel seines Buches hat Christopher Hitchens eine der wirksamsten Parolen des Neuen Atheismus geprägt. Kreuzzüge, Inquisition, Hexenverbrennungen, Religionskriege und heutiger Terror scheinen zu beweisen, dass Religion eine besonders gefährliche Kraft ist. Richard Dawkins lädt ein, sich mit John Lennon eine Welt ohne Religion vorzustellen – ohne heilige Kriege, ohne Hexenjagden, ohne Selbstmordattentäter.

Die christliche Antwort muss zwei Dinge zugleich leisten: **ehrlich** sein und **genau** sein. Ehrlich, weil Christen tatsächlich im Namen Gottes Unrecht getan haben – die Pogrome und Massaker der Kreuzfahrer, die Plünderung des christlichen Konstantinopel, Folter und Scheiterhaufen der Inquisition, die Verbrennung Zehntausender als Hexen. Genau, weil die populären Zahlen und Erzählungen oft weit von der Forschung entfernt sind: Die meisten Kriege waren nicht religiös, die „neun Millionen Hexen" sind eine Legende, und die blutigsten Verbrechen des 20. Jahrhunderts gingen von Regimen aus, die die Religion bekämpften.

Die koptische Kirche bringt in diese Debatte eine besondere Stimme ein: Sie ist die Kirche der Märtyrer. Sie hat in 1.400 Jahren nie einen heiligen Krieg geführt, kannte weder Inquisition noch Hexenprozesse und wurde selbst von byzantinischer Staatskirche, wechselnden Herrschern und heutigem Terror verfolgt. Die Familien der 21 Märtyrer von Libyen (2015), die den Mördern vergaben, sind ein lebendiges Gegenargument gegen die These, Religion mache notwendig gewalttätig. Der Maßstab des Christentums ist nicht das Verhalten seiner Anhänger, sondern Christus, der sagte: „Stecke dein Schwert an seinen Ort."`,
  strategy: `**1. Mit dem Zugeständnis beginnen.** „Ja, Christen haben im Namen Gottes schreckliches Unrecht getan." Benenne konkret: Rheinland 1096, Jerusalem 1099, Konstantinopel 1204, Inquisition, Hexenprozesse. Wer ausweicht, verliert.

**2. Dann die Fakten zurechtrücken – ohne zu relativieren.** Die meisten Kriege sind nicht religiös; Inquisition und Hexenverfolgung forderten Tausende bzw. Zehntausende Opfer, nicht Millionen; viele Hexenprozesse waren weltlich. Sag ausdrücklich: „Ich nenne die Zahlen nicht, um etwas kleinzureden."

**3. Den Maßstab klären.** Fragt der Gegner „Ist das Christentum gewalttätig?", frag zurück: „Was lehrt Jesus, und wohin führt seine treue Nachfolge?" Die Gewalt der Christen ist Abfall von Christus, nicht seine Folge – und kein „Kein-wahrer-Schotte"-Trick, weil der Maßstab (Bergpredigt) öffentlich und vorher bekannt ist.

**4. Den Begriff „Religion" hinterfragen (Cavanaugh).** Es gibt kein sauberes Kriterium, „religiöse" von „säkularer" Gewalt zu trennen. Wer bei Kreuzzügen „Religion" sagt, muss beim Gulag „Atheismus" sagen dürfen – oder bei beidem „Politik".

**5. Das 20. Jahrhundert nennen – fair.** Atheistische Regime verfolgten Gläubige im Namen des wissenschaftlichen Atheismus. Aber: Hitler war kein Atheist, und kein Atheist ist deshalb ein Mörder.

**6. Mit dem koptischen Zeugnis enden.** Märtyrer statt Krieger; Vergebung statt Rache.

**Fallen:** Keine pauschalen Angriffe auf Muslime. Keine Verherrlichung der Kreuzzüge. Nicht „Hitler war Atheist". Nicht mit exakten Prozentzahlen hantieren, die man nicht belegen kann.`,
  keyOpponents: [
    { name: 'Christopher Hitchens', role: 'Publizist und Religionskritiker', work: 'God Is Not Great (2007)' },
    { name: 'Richard Dawkins', role: 'Evolutionsbiologe, Oxford', work: 'The God Delusion (2006)' },
    { name: 'Sam Harris', role: 'Neurowissenschaftler und Autor', work: 'The End of Faith (2004)' },
    { name: 'Hector Avalos', role: 'Religionswissenschaftler, Iowa State University', work: 'Fighting Words (2005)' },
    { name: 'Steven Pinker', role: 'Kognitionspsychologe, Harvard', work: 'The Better Angels of Our Nature (2011)' },
    { name: 'Karlheinz Deschner', role: 'Schriftsteller und Kirchenkritiker', work: 'Kriminalgeschichte des Christentums (1986–2013)' },
  ],
  claims: [religionVerursachtKriege, kreuzzuege, inquisitionHexen, atheistischeRegime],
  newPeople: [
    {
      id: 'william-cavanaugh',
      name: 'William T. Cavanaugh',
      years: 'zeitgenössisch',
      era: 'modern',
      tradition: 'katholisch',
      title: 'Theologe, DePaul University (Chicago)',
      fields: ['Politische Theologie', 'Religion und Gewalt', 'Ekklesiologie'],
      bio: 'Amerikanischer katholischer Theologe, der in seinem einflussreichen Buch zeigt, dass sich „religiöse" und „säkulare" Gewalt nicht trennscharf unterscheiden lassen und dass die Erzählung von der besonders gewalttätigen Religion der Legitimation des modernen Nationalstaats dient.',
      keyWorks: ['The Myth of Religious Violence (2009)', 'Torture and Eucharist (1998)'],
    },
    {
      id: 'thomas-madden',
      name: 'Thomas F. Madden',
      years: 'zeitgenössisch',
      era: 'modern',
      tradition: 'christlich',
      title: 'Mediävist, Saint Louis University',
      fields: ['Kreuzzüge', 'Mittelalterliche Geschichte', 'Venedig'],
      bio: 'Amerikanischer Historiker des Mittelalters, Spezialist für die Kreuzzüge und die Geschichte Venedigs. Er wendet sich gegen populäre Mythen über die Kreuzzüge und betont ihren Kontext in der Geschichte der islamischen Expansion, ohne ihre Gräuel zu verschweigen.',
      keyWorks: ['The Concise History of the Crusades (1999; 3. Aufl. 2014)', 'The Fourth Crusade (mit Donald Queller, 1997)'],
    },
    {
      id: 'jonathan-riley-smith',
      name: 'Jonathan Riley-Smith',
      years: '1938–2016',
      era: 'modern',
      tradition: 'katholisch',
      title: 'Kreuzzugshistoriker, University of Cambridge',
      fields: ['Kreuzzüge', 'Ritterorden', 'Mittelalterliche Frömmigkeit'],
      bio: 'Führender Kreuzzugshistoriker seiner Generation, zuletzt Dixie Professor of Ecclesiastical History in Cambridge. Durch die Auswertung von Urkunden zeigte er, dass viele Kreuzfahrer aus Bußfrömmigkeit und unter großen finanziellen Opfern aufbrachen, und prägte die moderne Kreuzzugsforschung.',
      keyWorks: ['What Were the Crusades? (1977)', 'The First Crusaders, 1095–1131 (1997)', 'The Crusades: A History (1987; 3. Aufl. 2014)'],
    },
    {
      id: 'john-dickson',
      name: 'John Dickson',
      years: 'zeitgenössisch',
      era: 'modern',
      tradition: 'anglikanisch',
      title: 'Historiker und Autor (Australien)',
      fields: ['Kirchengeschichte', 'Historischer Jesus', 'Christentum und Gewalt'],
      bio: 'Australischer Historiker und anglikanischer Geistlicher, der sich offen mit den dunklen Kapiteln der Kirchengeschichte auseinandersetzt. Sein Bild: Das Christentum ist eine schöne Melodie, die Christen oft schlecht gespielt haben.',
      keyWorks: ['Bullies and Saints: An Honest Look at the Good and Evil of Christian History (2021)'],
    },
    {
      id: 'friedrich-spee',
      name: 'Friedrich Spee von Langenfeld',
      years: '1591–1635',
      era: 'neuzeit',
      tradition: 'katholisch',
      title: 'Jesuit, Dichter und Gegner der Hexenprozesse',
      fields: ['Kritik der Hexenprozesse', 'Rechtsethik', 'Geistliche Dichtung'],
      bio: 'Deutscher Jesuit, der als Beichtvater verurteilter „Hexen" deren Unschuld erkannte und 1631 anonym die „Cautio Criminalis" veröffentlichte, eine der wirksamsten Schriften gegen die Hexenverfolgung. Er starb 1635 an einer Seuche, die er sich bei der Pflege von Kranken und Verwundeten zugezogen hatte. Auch als Kirchenlieddichter bekannt („O Heiland, reiß die Himmel auf").',
      keyWorks: ['Cautio Criminalis (1631)', 'Trutz-Nachtigall (posthum 1649)'],
    },
    {
      id: 'solschenizyn',
      name: 'Alexander Solschenizyn',
      years: '1918–2008',
      era: 'modern',
      tradition: 'orthodox',
      title: 'Schriftsteller, Literaturnobelpreisträger 1970',
      fields: ['Sowjetisches Lagersystem', 'Totalitarismus', 'Moral und Gott'],
      bio: 'Russischer Schriftsteller, der acht Jahre in sowjetischen Straflagern verbrachte und das Lagersystem im „Archipel Gulag" dokumentierte. Er wurde 1974 ausgebürgert und kehrte 1994 nach Russland zurück. In seiner Templeton-Rede 1983 deutete er die Katastrophen des 20. Jahrhunderts als Folge davon, dass „die Menschen Gott vergessen haben".',
      keyWorks: ['Ein Tag im Leben des Iwan Denissowitsch (1962)', 'Der Archipel Gulag (1973)', 'Templeton-Rede „Men Have Forgotten God" (1983)'],
    },
    {
      id: 'richard-wurmbrand',
      name: 'Richard Wurmbrand',
      years: '1909–2001',
      era: 'modern',
      tradition: 'evangelisch',
      title: 'Lutherischer Pastor, Gründer der „Stimme der Märtyrer"',
      fields: ['Christenverfolgung', 'Kommunismus', 'Zeugnis unter Folter'],
      bio: 'Rumänischer Pastor jüdischer Herkunft, der insgesamt rund vierzehn Jahre in kommunistischen Gefängnissen verbrachte und gefoltert wurde. Nach seinem Freikauf in den Westen berichtete er über die Verfolgung der Christen im Ostblock und gründete ein Hilfswerk für verfolgte Christen.',
      keyWorks: ['Tortured for Christ (1967)', 'In God\'s Underground (1968)'],
    },
  ],
};

export default topic;
