import type { Topic } from '../../../schema.ts';
import koptenBegruesstenAraber from './kopten-begruessten-araber.ts';
import dhimmiGerecht from './dhimmi-gerecht.ts';
import koptischeKircheSekte from './koptische-kirche-sekte.ts';
import maertyrerkult from './maertyrerkult.ts';
import mokattamLegende from './mokattam-legende.ts';

const topic: Topic = {
  id: 'koptische-kirche',
  category: 'geschichte',
  group: 'Kirchengeschichte & Mythen',
  order: 3,
  title: `Die koptische Kirche in Geschichte und Gegenwart`,
  subtitle: `Arabische Eroberung, Dhimma, apostolische Herkunft, Märtyrer, Mokattam-Wunder`,
  icon: 'church',
  overview: `Die koptisch-orthodoxe Kirche gehört zu den ältesten Kirchen der Welt. Nach ihrer Überlieferung vom Evangelisten Markus gegründet, gab sie der Christenheit das Mönchtum (Antonius, Pachomius), große Lehrer (Athanasius, Kyrill, die Katechetenschule), die erste Liste der 27 Bücher des Neuen Testaments und einen Strom von Märtyrern, weshalb sie ihre Jahre seit 284 als „Jahre der Märtyrer" zählt. Seit dem 7. Jahrhundert lebt sie unter islamischer Herrschaft – heute als größte christliche Gemeinschaft des Nahen Ostens, mit umstrittenen, aber in jedem Fall mehrere Millionen umfassenden Mitgliederzahlen in Ägypten und einer wachsenden Diaspora.

Um diese Geschichte ranken sich gegensätzliche Erzählungen. Die eine sagt: Die Kopten hätten die Araber 641 als Befreier begrüßt, und die Dhimma sei ein gerechter Schutzvertrag gewesen. Die andere – oft von Christen erzählt – macht aus vierzehn Jahrhunderten eine ununterbrochene Verfolgung. Beides hält den Quellen nicht stand. Die Wahrheit ist unbequemer und reicher: Die Kopten litten schwer unter dem christlichen byzantinischen Staat; Amr ibn al-As holte ihren Papst ehrenvoll zurück; die Eroberung war zugleich von Gewalt begleitet; und die folgenden Jahrhunderte kannten Blüte und Bedrückung, gerechte und grausame Herrscher.

Hinzu kommen Fragen nach der Identität der Kirche selbst: Ist sie eine „abgespaltene Sekte"? Ist ihre Märtyrerverehrung ein Todeskult? Und wie geht sie mit ihren eigenen Wundertraditionen um, etwa dem Mokattam-Wunder? Dieser Themenblock will Kopten helfen, ihre eigene Geschichte quellenkritisch und zugleich mit Liebe zu erzählen – so, dass sie vor Historikern, muslimischen Gesprächspartnern und Skeptikern bestehen kann.`,
  strategy: `**Grundregel: Zwei Wahrheiten zugleich sagen.**
1. **Eigene Schuld zuerst:** Die chalcedonensische Reichskirche hat die Kopten verfolgt; Christen haben auch in Alexandria Unrecht getan (Hypatia, Serapeum); der koptische Chronist Johannes von Nikiu billigte Gewalt. Wer das ausspricht, darf auch über fremdes Unrecht sprechen.
2. **Das Gute anerkennen:** Amrs Schutzbrief für Benjamin, die innere Kirchenfreiheit, Zeiten der Koexistenz, muslimische Nachbarn, die Kirchen schützten, die Hadith-Überlieferung über die gute Behandlung der Kopten.
3. **Dann die Quellen sprechen lassen:** Johannes von Nikiu, die Geschichte der Patriarchen, Papyri, Sure 9:29, die Bedingungen Umars, die Verfolgungen unter al-Hakim und den Mamluken, die Anschläge 2011–2017.
4. **Unterscheiden:** Befreiung *von* Byzanz ist nicht Gleichheit *unter* der Dhimma; Duldung ist nicht Gleichberechtigung; Überlieferung ist nicht Dogma.

**Bei Fragen zur Identität:** Apostolische Herkunft, Beitrag zur Weltchristenheit und die gemeinsamen christologischen Erklärungen (1973, 1989/1990) nennen – ohne andere Kirchen herabzusetzen und ohne überhöhte Mitgliederzahlen.

**Bei Wundern und Legenden:** Ehrlich trennen zwischen gut bezeugtem Rahmen, später Ausschmückung und Glaubenskern. Der Glaube steht auf der Auferstehung, nicht auf dem Mokattam.

**Fallen:** Keine Pauschalurteile über „den Islam" oder „die Muslime"; keine Gegenlegenden (z. B. Amr und die Bibliothek); keine Opferrhetorik; keine Verharmlosung echter Verfolgung.`,
  keyOpponents: [
    { name: 'Thomas W. Arnold', role: 'Orientalist (†1930)', work: 'The Preaching of Islam (1896)' },
    { name: 'Muslimische Apologeten', role: 'populäre Debatten über Islam und Minderheiten', work: 'These von Befreiung und Toleranz' },
    { name: 'Candida Moss', role: 'Historikerin, Birmingham', work: 'The Myth of Persecution (2013)' },
    { name: 'Arthur J. Droge / James D. Tabor', role: 'Religionswissenschaftler', work: 'A Noble Death (1992)' },
    { name: 'David Hume', role: 'Philosoph (†1776)', work: 'Of Miracles (1748)' },
  ],
  claims: [koptenBegruesstenAraber, dhimmiGerecht, koptischeKircheSekte, maertyrerkult, mokattamLegende],
  newPeople: [
    {
      id: 'johannes-nikiu',
      name: 'Johannes von Nikiu',
      years: 'Ende 7. Jh.',
      era: 'patristisch',
      tradition: 'koptisch',
      title: 'Koptischer Bischof von Nikiu (Pschati) im Nildelta, Chronist',
      fields: ['Chronistik', 'Arabische Eroberung Ägyptens', 'Spätantike Geschichte'],
      bio: 'Koptischer Bischof, der gegen Ende des 7. Jahrhunderts eine Weltchronik von der Schöpfung bis zur arabischen Eroberung Ägyptens verfasste. Sie ist die zeitnächste koptische Quelle für die Eroberung und schildert Gewalt, Abgaben und Kollaboration ebenso wie die Schuld der byzantinischen Machthaber. Das Werk ist nur in einer äthiopischen Übersetzung (1602) einer arabischen Fassung erhalten.',
      keyWorks: ['Chronik (engl. Übersetzung von R. H. Charles, 1916)'],
      caveat: 'Parteiischer Chronist: scharf gegen die Chalcedonenser, billigt den Mord an Hypatia. Wertvolle Quelle, aber keine Lehrautorität; die Textüberlieferung ist philologisch problematisch.',
    },
    {
      id: 'mark-swanson',
      name: 'Mark N. Swanson',
      years: 'zeitgenössisch',
      era: 'modern',
      tradition: 'evangelisch',
      title: 'Professor für christlich-muslimische Studien, Lutheran School of Theology at Chicago',
      fields: ['Christlich-arabische Literatur', 'Koptische Kirchengeschichte', 'Christentum und Islam'],
      bio: 'Lutherischer Theologe und Historiker, Spezialist für die arabischsprachige christliche Literatur und die Geschichte der koptischen Kirche unter islamischer Herrschaft. Sein Werk über das koptische Papsttum von 641 bis 1517 ist ein Standardwerk.',
      keyWorks: ['The Coptic Papacy in Islamic Egypt (641–1517) (2010)', 'Christian-Muslim Relations. A Bibliographical History (Mitherausgeber)'],
    },
    {
      id: 'otto-meinardus',
      name: 'Otto F. A. Meinardus',
      years: '1925–2005',
      era: 'modern',
      tradition: 'christlich',
      title: 'Koptologe, langjährig in Kairo tätig',
      fields: ['Koptische Kirchengeschichte', 'Klöster und Heiligenverehrung', 'Koptische Tradition'],
      bio: 'In Deutschland geborener Theologe und Koptologe, der viele Jahre in Ägypten lehrte und forschte. Seine Bücher über das koptische Christentum, seine Klöster, Heiligen und Traditionen gehören zu den meistgelesenen Einführungen in die Geschichte der koptischen Kirche.',
      keyWorks: ['Monks and Monasteries of the Egyptian Deserts (1961)', 'Christian Egypt, Ancient and Modern (1965)', 'Two Thousand Years of Coptic Christianity (1999)'],
    },
  ],
};

export default topic;
