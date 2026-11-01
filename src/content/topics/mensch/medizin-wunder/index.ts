import type { Topic } from '../../../schema.ts';
import heilungenPlacebo from './heilungen-placebo.ts';
import gebetsstudien from './gebetsstudien.ts';
import keineBelegtenWunder from './keine-belegten-wunder.ts';
import zeitounErscheinungen from './zeitoun-erscheinungen.ts';
import kircheGegenMedizin from './kirche-gegen-medizin.ts';

const topic: Topic = {
  id: 'medizin-wunder',
  category: 'mensch',
  group: 'Medizin & Wunder',
  order: 1,
  title: `Medizin und Wunder`,
  subtitle: `Placebo, Gebetsstudien, Lourdes, Zeitoun – und die Kirche als Mutter der Krankenhäuser`,
  icon: 'stethoscope',
  overview: `Kaum ein Thema wird so emotional diskutiert wie Wunderheilungen. Auf der einen Seite stehen skeptische Mediziner und Publizisten (Shermer, Novella, Ernst, Dawkins), die auf Placebo, Spontanremission, Betrug und die negativen Ergebnisse großer Gebetsstudien wie STEP verweisen. Auf der anderen Seite stehen Jahrhunderte christlicher Erfahrung, das Medizinische Büro von Lourdes (seit 1883, über 7.000 Dossiers, 72 anerkannte Wunder bis 2025), die weltweiten Fallsammlungen Craig Keeners und – für Kopten besonders bedeutsam – die Marienerscheinungen von Zeitoun (ab 2. April 1968).

Wer hier bestehen will, braucht zwei Dinge: **Ehrlichkeit** und **Unterscheidungsvermögen**. Ehrlichkeit heißt zugeben, dass viele „Heilungen" natürlich erklärbar sind, dass Studien zur Fern-Fürbitte keinen Effekt zeigen und dass es religiös motivierte Behandlungsverweigerung mit tödlichen Folgen gibt. Unterscheidungsvermögen heißt: Placebo wirkt vor allem auf subjektive Beschwerden; seriöse Wunderprüfungen schließen genau die natürlichen Erklärungen aus; Gebet ist kein Medikament; und Humes Argument gegen Wunder gilt selbst unter säkularen Philosophen als gescheitert.

Schließlich räumt der Themenblock mit einem Mythos auf: Die Kirche war nicht Gegnerin, sondern Mutter der Krankenpflege. Basilius gründete im 4. Jahrhundert eines der ersten Krankenhäuser, die Kirche verehrt heilige Ärzte wie Kyros und Johannes aus Alexandrien, und der heutige koptische Papst ist Apotheker.`,
  strategy: `**Reihenfolge:**
1. **Gemeinsamen Boden schaffen.** „Ich bin genauso skeptisch gegenüber Heilungsshows wie du." Verurteile Betrug und Behandlungsverweigerung klar.
2. **Placebo präzise einordnen.** Placebo wirkt auf Schmerz und subjektives Befinden – nicht auf Röntgenbefunde, zerstörte Knochen oder Hörschwellen.
3. **Die Gebetsstudien entschärfen, ohne zu beschönigen.** Gib zu: STEP fand nichts. Erkläre dann, warum ein Experiment, das Gott „testet", das biblische Gebet nicht misst (Dtn 6,16; Mt 4,7) – und dass Christen auch positive Einzelstudien nicht als Beweis feiern sollten.
4. **Hume aufbrechen.** Zeige den Zirkel (Lewis) und verweise auf Earman („Hume's Abject Failure").
5. **Konkrete Fälle statt Masse.** Lieber ein gut dokumentierter Lourdes-Fall als zwanzig Internetgeschichten. Der Gegner muss jeden starken Fall einzeln wegerklären.
6. **Zeitoun gelassen vertreten.** Die Kirche hat es anerkannt; der Glaube hängt nicht daran; die Gegenhypothesen sind schwach. Keine unbelegten Ausschmückungen!
7. **Mit Geschichte schließen.** Krankenhäuser, Anargyroi, Lukas der Arzt, Tawadros der Apotheker.

**Fallen:** Keine Wunder „bewiesen durch die Wissenschaft"; keine Byrd-Studie als Beweis; keine Behauptung, wer genug glaube, werde geheilt (seelsorgerlich verheerend); keine Dämonisierung anderer Religionen.`,
  keyOpponents: [
    { name: 'Michael Shermer', role: 'Herausgeber „Skeptic"', work: 'Why People Believe Weird Things (1997)' },
    { name: 'Steven Novella', role: 'Neurologe, Yale; Science-Based Medicine', work: 'The Skeptics\' Guide to the Universe (2018)' },
    { name: 'Edzard Ernst', role: 'Emeritierter Professor für Komplementärmedizin', work: 'Trick or Treatment (2008)' },
    { name: 'Richard Dawkins', role: 'Evolutionsbiologe', work: 'The God Delusion (2006)' },
    { name: 'Richard P. Sloan', role: 'Verhaltensmediziner, Columbia University', work: 'Blind Faith (2006)' },
    { name: 'Joe Nickell', role: 'Skeptischer Ermittler', work: 'Looking for a Miracle (1993)' },
    { name: 'David Hume', role: 'Philosoph (1711–1776)', work: 'An Enquiry Concerning Human Understanding, Abschnitt X (1748)' },
  ],
  claims: [heilungenPlacebo, gebetsstudien, keineBelegtenWunder, zeitounErscheinungen, kircheGegenMedizin],
  newPeople: [
    {
      id: 'candy-gunther-brown',
      name: 'Candy Gunther Brown',
      years: 'zeitgenössisch',
      era: 'modern',
      tradition: 'christlich',
      title: 'Professorin für Religionswissenschaft, Indiana University Bloomington',
      fields: ['Gebet & Heilung', 'Religionswissenschaft', 'Pfingstbewegung'],
      bio: 'Religionswissenschaftlerin, die empirisch zu Gebet und Heilung forscht. Leitete die Studie zur Nah-Fürbitte bei Hör- und Sehbehinderungen in Mosambik (Southern Medical Journal 2010) und untersuchte die Geschichte und Methodik der Gebetsforschung in „Testing Prayer" (2012).',
      keyWorks: ['Testing Prayer: Science and Healing (2012)', 'Global Pentecostal and Charismatic Healing (Hg., 2011)'],
      caveat: 'Sie spricht hier als Forscherin; ihre eigene Pilotstudie ist klein und unkontrolliert, was sie selbst betont.',
    },
    {
      id: 'kyros-johannes',
      name: 'Hll. Kyros und Johannes (Abba Kyr und Johannes)',
      years: 'Martyrium nach der Überlieferung unter Diokletian (frühes 4. Jh.)',
      era: 'patristisch',
      tradition: 'ungeteilt',
      title: 'Ärzte-Märtyrer und „Anargyroi" (Uneigennützige Heiler) aus Alexandrien',
      fields: ['Medizin', 'Barmherzigkeit', 'Heilung'],
      bio: 'Nach der Überlieferung behandelte der Arzt Kyros in Alexandrien Kranke unentgeltlich und führte sie zum Glauben; der Soldat Johannes schloss sich ihm an, beide starben als Märtyrer. Der hl. Kyrill von Alexandrien überführte ihre Reliquien nach Menouthis, wo ein heidnischer Heilkult bestand; der Ort Abu Qir trägt den Namen des „Abba Kyr". Sophronius von Jerusalem sammelte die an ihrem Heiligtum berichteten Heilungen.',
      keyWorks: ['Sophronius von Jerusalem: Wunderberichte (Thaumata) der hll. Kyros und Johannes (7. Jh.)'],
      caveat: 'Die Lebensdaten beruhen auf hagiographischer Überlieferung und sind historisch nicht gesichert.',
    },
    {
      id: 'kyrillos-vi',
      name: 'Papst Kyrillos VI.',
      years: '1902–1971',
      era: 'modern',
      tradition: 'koptisch',
      title: '116. Papst von Alexandrien (1959–1971)',
      fields: ['Gebetsleben', 'Mönchtum', 'Zeitoun'],
      bio: 'Lebte vor seiner Wahl als Mönch und Einsiedler und war als Mann des unablässigen Gebets bekannt. Gründete das Kloster des hl. Menas in Mariut neu, weihte 1968 die neue Markuskathedrale in Kairo und empfing im selben Jahr Reliquien des Evangelisten Markus aus Rom. Unter ihm erkannte das Patriarchat 1968 die Marienerscheinungen von Zeitoun an. In der koptischen Kirche wird er als Heiliger verehrt.',
    },
  ],
};

export default topic;
