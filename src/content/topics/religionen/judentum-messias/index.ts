import type { Topic } from '../../../schema.ts';
import messiasKriterienNichtErfuellt from './messias-kriterien-nicht-erfuellt.ts';
import jesaja53IstIsrael from './jesaja-53-ist-israel.ts';
import jesaja714Almah from './jesaja-7-14-almah.ts';
import messiasNochNichtGekommen from './messias-noch-nicht-gekommen.ts';
import psalm22WieEinLoewe from './psalm-22-wie-ein-loewe.ts';
import schmaSchliesstTrinitaetAus from './schma-schliesst-trinitaet-aus.ts';
import toraEwigGueltig from './tora-ewig-gueltig.ts';
import muendlicheTora from './muendliche-tora.ts';
import stammbaumJechonja from './stammbaum-jechonja.ts';
import keinMenschenopfer from './kein-menschenopfer.ts';

const topic: Topic = {
  id: 'judentum-messias',
  category: 'religionen',
  group: 'Judentum',
  order: 1,
  title: `Jesus, der Messias Israels?`,
  subtitle: `Messiaskriterien, Jesaja 53, Jesaja 7,14, Daniel 9, Psalm 22, das Schma, Tora und Sühne – im Gespräch mit Rabbinern`,
  icon: 'star',
  overview: `Das Gespräch mit dem Judentum ist für Christen einzigartig: Es ist kein Streit mit einer fremden Religion, sondern ein Familiengespräch über dieselbe Heilige Schrift. Jesus, Maria, die Apostel und die gesamte Urgemeinde waren Juden; das Evangelium beginnt mit dem Satz „Buch des Ursprungs Jesu Christi, des Sohnes Davids, des Sohnes Abrahams" (Mt 1,1). Paulus spricht über sein Volk mit „großer Traurigkeit und unaufhörlichem Schmerz" und bekennt: „Gottes Gaben und Berufung können ihn nicht gereuen" (Röm 9,2; 11,29). Wer in dieses Gespräch geht, geht es mit Ehrfurcht – auch angesichts der schweren Schuld, die Christen in der Geschichte an Juden auf sich geladen haben.

Seit den 1980er-Jahren gibt es eine gut organisierte jüdische **Gegenmission** (Outreach Judaism, Jews for Judaism), deren Vertreter – allen voran **Rabbi Tovia Singer** – die christlichen Prophetiebeweise systematisch angreifen: Jesus habe die Messiaskriterien nicht erfüllt, Jesaja 53 handle von Israel, Jes 7,14 meine eine „junge Frau", Ps 22,17 sage „wie ein Löwe", Matthäus habe den Fluch über Jechonja übersehen, die Trinität widerspreche dem Schma, und stellvertretende Sühne widerspreche Ez 18. Diese Einwände sind oft sprachlich versiert und treffen Christen, die nur mit Bibelstellen-Listen argumentieren, unvorbereitet.

Die Debatte ist zugleich eine **Debatte über das Judentum selbst**: Der Talmud kennt einen getöteten Messias ben Josef, einen Messias, der „mit den Wolken" oder „auf einem Esel" kommt, einen „Aussätzigen aus dem Lehrhaus", der nach Jes 53,4 unsere Krankheiten trägt; der Targum beginnt Jes 52,13 mit „mein Knecht, der Messias"; jüdische Gelehrte wie Daniel Boyarin und Alan Segal zeigen, dass das antike Judentum über eine zweite göttliche Gestalt nachdachte. Gleichzeitig ist ehrlich festzuhalten: Die kollektive Deutung von Jes 53 ist alt (Origenes bezeugt sie um 248), die Lesart von Ps 22,17 ist textkritisch offen, und „almah" heißt sprachlich „junge Frau".

Aus koptischer Sicht hat dieses Thema eine besondere Note: Alexandrien war die Stadt der Septuaginta, des jüdischen Philosophen Philo, des „schriftgewaltigen" Apollos (Apg 18,24) und der großen Ausleger Origenes, Athanasius und Kyrill. Hier lasen Juden und Christen dieselben griechischen Schriften – und Athanasius' „Über die Menschwerdung" enthält eine der ältesten systematischen Antworten auf jüdische Einwände.`,
  strategy: `**1. Beziehung vor Argument.** Beginne mit Respekt und Gemeinsamkeit: derselbe Gott Abrahams, dieselbe Schrift, dieselbe Hoffnung auf den Messias. Benenne von dir aus die Schuld der Christen an Juden. Ein Rabbiner, der spürt, dass du sein Volk achtest, hört anders zu.

**2. Kläre die Grundlage: der Tanach.** Schlag vor, gemeinsam aus der Hebräischen Bibel zu argumentieren – das tun beide Seiten. Wenn die mündliche Tora als Autorität ins Spiel kommt, argumentiere nicht mit „sola scriptura" (das ist nicht koptisch), sondern mit der Frage nach dem bevollmächtigten Ausleger (Dtn 18,15).

**3. Empfohlene Reihenfolge:**
- **Zeitfenster** (Dan 9,26; Hag 2; Mal 3): Der Messias musste vor 70 n. Chr. kommen. Das ist ein starkes, einfaches Argument.
- **Zwei Phasen** (Jes 49; 53; Sach 9 und 12; bSukka 52a; bSanhedrin 98a): Die „nicht erfüllten Kriterien" betreffen die Wiederkunft.
- **Jesaja 53** im Detail – Unschuld, Stellvertretung, „mein Volk" (53,8), Leben nach dem Tod.
- **Die Auferstehung** als Gottes Bestätigung.
- Erst danach Einzelfragen wie Jes 7,14, Ps 22,17, Jechonja.

**4. Typische Fallen:**
- Falsche Zitate („Wehe uns, das Zepter ist gewichen …"), übertriebene Behauptungen („almah heißt eindeutig Jungfrau", „Raschi hat die Israel-Deutung erfunden", „Juden haben Ps 22 gefälscht") – ein einziger solcher Fehler kostet die gesamte Glaubwürdigkeit.
- Antijüdische Formulierungen („die Juden haben ihren Messias gekreuzigt und wurden bestraft", Ersetzungstheologie). Sie sind falsch (Röm 11) und beenden das Gespräch.
- Sich auf Wortfelder einlassen und das Gesamtbild verlieren: Bei Jes 7,14 und Ps 22,17 lieber offen zugeben, was umstritten ist, und zum Zusammenhang zurückkehren.

**5. Tonfall:** Fragen statt Behauptungen. Die stärksten Momente entstehen, wenn du eine ehrliche Frage stellst: „Für wessen Übertretung wird der Knecht in 53,8 geschlagen?" – und dann schweigst.`,
  keyOpponents: [
    { name: 'Rabbi Tovia Singer', role: 'Gründer und Leiter von Outreach Judaism; bekanntester Kritiker christlicher Prophetiebeweise', work: 'Let\'s Get Biblical! Why Doesn\'t Judaism Accept the Christian Messiah? (2 Bde., 2014)' },
    { name: 'Rabbi Michael Skobac', role: 'Bildungsleiter von Jews for Judaism, Toronto', work: 'Vorträge und Debatten zur Gegenmission' },
    { name: 'Rabbi Shmuley Boteach', role: 'Rabbiner, Publizist; Debatten mit Michael Brown', work: 'Kosher Jesus (2012)' },
    { name: 'Rabbi Stuart Federow', role: 'Rabbiner in Houston, Radiosendung „What Would Moses Say?"', work: 'Judaism and Christianity: A Contrast (2012)' },
    { name: 'Gerald Sigal', role: 'Jüdischer Gegenmissions-Autor', work: 'The Jew and the Christian Missionary (1981); Isaiah 53: Who Is the Servant? (2007)' },
    { name: 'Moses Maimonides (Rambam)', role: 'Klassischer Rechtsgelehrter, 1138–1204; Messiaskriterien', work: 'Mischne Tora, Hilchot Melachim 11–12' },
    { name: 'Isaak ben Abraham von Troki', role: 'Karäischer Polemiker, 16. Jh.', work: 'Chisuk Emuna (Befestigung des Glaubens)' },
  ],
  claims: [
    messiasKriterienNichtErfuellt,
    jesaja53IstIsrael,
    jesaja714Almah,
    messiasNochNichtGekommen,
    psalm22WieEinLoewe,
    schmaSchliesstTrinitaetAus,
    toraEwigGueltig,
    muendlicheTora,
    stammbaumJechonja,
    keinMenschenopfer,
  ],
  newPeople: [
    {
      id: 'michael-rydelnik',
      name: 'Michael Rydelnik',
      years: 'zeitgenössisch',
      era: 'modern',
      tradition: 'messianisch',
      title: 'Professor für Jüdische Studien, Moody Bible Institute (Chicago)',
      fields: ['Messianische Prophetie', 'Judentum', 'Altes Testament'],
      bio: 'Messianisch-jüdischer Theologe. Er untersucht, wie messianische Deutungen der Hebräischen Bibel in der Auslegungsgeschichte entstanden, zurückgedrängt und wiederentdeckt wurden, und verteidigt die direkte messianische Lesart zentraler Texte.',
      keyWorks: ['The Messianic Hope: Is the Hebrew Bible Really Messianic? (2010)', 'The Moody Handbook of Messianic Prophecy (Hg. mit Edwin Blum, 2019)'],
    },
  ],
};

export default topic;
