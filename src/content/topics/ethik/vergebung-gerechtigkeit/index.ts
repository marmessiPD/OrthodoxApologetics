import type { Topic } from '../../../schema.ts';
import vergebungUngerecht from './vergebung-ungerecht.ts';
import guterAtheistHoelle from './guter-atheist-hoelle.ts';
import feindesliebeNaiv from './feindesliebe-naiv.ts';

const topic: Topic = {
  id: 'vergebung-gerechtigkeit',
  category: 'ethik',
  group: 'Moral & Gott',
  order: 2,
  title: `Vergebung und Gerechtigkeit`,
  subtitle: `Reuige Mörder, „gute Atheisten" und das Gebot der Feindesliebe`,
  icon: 'scale',
  overview: `Kaum ein Thema berührt Menschen so tief wie die Frage, ob Vergebung gerecht sein kann. Kritiker wie Christopher Hitchens halten die christliche Botschaft für moralisch verkehrt: Ein Mörder, der bereut, komme in den Himmel, ein anständiger Atheist in die Hölle; ein Unschuldiger werde „stellvertretend" bestraft; Gott vergebe im Namen von Opfern, die nie gefragt wurden. Jüdische Stimmen wie Dennis Prager erinnern an Simon Wiesenthals *Die Sonnenblume* (1969): Nur das Opfer selbst könne vergeben. Nietzsche und Freud schließlich halten die Feindesliebe für Ohnmacht oder Überforderung.

Die christliche Antwort beginnt mit einem Zugeständnis: Vergebung, die das Unrecht übergeht, wäre tatsächlich ungerecht. Aber genau das lehrt die Bibel nicht. Gott vergibt so, dass er gerecht bleibt (Röm 3,25–26) – der Richter selbst trägt in Christus die Last. Reue ist echte Umkehr mit Wiedergutmachung, nicht ein Zauberwort; Vergebung hebt irdische Folgen und staatliche Strafe nicht auf (Röm 12,19; 13,4). Das Heil ist keine Belohnung für die „Guten", denn niemand ist gut genug (Mk 10,18) – zugleich richtet Gott jeden gerecht nach dem Licht, das er hatte (Röm 2,12–16; Lk 12,47–48), und kein Mensch darf über das ewige Schicksal Einzelner urteilen.

Die koptische Kirche bringt in diese Debatte ein Zeugnis ein, das kein Lehrbuch ersetzen kann: Die Angehörigen der 21 Märtyrer von Libyen (2015) und die Witwe eines 2017 in Alexandria getöteten Kirchenwächters haben öffentlich für die Mörder gebetet. Sie haben das Verbrechen klar benannt – und sich trotzdem geweigert, sich vom Hass bestimmen zu lassen.`,
  strategy: `**1. Den Schmerz ernst nehmen.** Wer über Vergebung spricht, spricht oft mit Menschen, die verletzt wurden. Beginne mit Mitgefühl, nicht mit Dogmatik. Sag: „Du hast recht – Vergebung, die das Unrecht übergeht, wäre ungerecht."

**2. Vergebung definieren.** Vergebung ist nicht Vergessen, nicht Verharmlosen, nicht Vertrauen, nicht Straffreiheit und nicht Versöhnung um jeden Preis. Sie ist der Verzicht auf persönliche Rache, weil das Urteil Gott gehört.

**3. Gott als Verletzten zeigen.** Jedes Verbrechen trifft das Ebenbild Gottes (Ps 51,6; Gen 9,6). Gott ist kein Dritter – und am Kreuz ist er selbst das unschuldige Opfer, das für seine Mörder betet.

**4. Die Lohn-Logik aufdecken.** Beim „guten Atheisten" zuerst die stille Voraussetzung benennen: Der Himmel ist kein Preis für gutes Benehmen. Dann klarstellen: Gott richtet nach dem Licht, und kein Christ kennt das Urteil über Einzelne.

**5. Feindesliebe von Passivität unterscheiden.** Liebe ist Wille, nicht Gefühl; persönliche Rache ist verboten, Schutz der Schwachen geboten (Röm 12,19 / 13,4).

**Fallen:** Nie konkrete Menschen für verdammt erklären. Nie Opfer zur Vergebung drängen. Den Missbrauch von „Vergebung" zur Vertuschung in Kirchen offen zugeben. Keine erfundenen Zitate von Märtyrerfamilien – nur das, was belegt ist.`,
  keyOpponents: [
    { name: 'Christopher Hitchens', role: 'Publizist und Religionskritiker', work: 'God Is Not Great (2007)' },
    { name: 'Dennis Prager', role: 'Jüdischer Publizist', work: 'Beitrag zu „The Sunflower" (1997)' },
    { name: 'Jean Améry', role: 'Schriftsteller, Auschwitz-Überlebender', work: 'Jenseits von Schuld und Sühne (1966)' },
    { name: 'Friedrich Nietzsche', role: 'Philosoph', work: 'Zur Genealogie der Moral (1887)' },
    { name: 'Sigmund Freud', role: 'Psychoanalytiker', work: 'Das Unbehagen in der Kultur (1930)' },
    { name: 'Bertrand Russell', role: 'Philosoph', work: 'Why I Am Not a Christian (1927)' },
    { name: 'Sam Harris', role: 'Neurowissenschaftler und Autor', work: 'The End of Faith (2004)' },
  ],
  claims: [vergebungUngerecht, guterAtheistHoelle, feindesliebeNaiv],
  newPeople: [
    {
      id: 'dietrich-bonhoeffer',
      name: 'Dietrich Bonhoeffer',
      years: '1906–1945',
      era: 'modern',
      tradition: 'evangelisch',
      title: 'Lutherischer Theologe und Pfarrer der Bekennenden Kirche',
      fields: ['Nachfolge', 'Ethik', 'Feindesliebe', 'Widerstand gegen den Nationalsozialismus'],
      bio: 'Bonhoeffer war Mitglied der Bekennenden Kirche, leitete das illegale Predigerseminar in Finkenwalde und schloss sich dem Widerstandskreis um die Abwehr an. 1943 verhaftet, wurde er am 9. April 1945 im KZ Flossenbürg hingerichtet. Seine Unterscheidung von „billiger" und „teurer Gnade" prägt die christliche Ethik bis heute.',
      keyWorks: ['Nachfolge (1937)', 'Gemeinsames Leben (1939)', 'Ethik (posthum 1949)', 'Widerstand und Ergebung (posthum 1951)'],
    },
    {
      id: 'corrie-ten-boom',
      name: 'Corrie ten Boom',
      years: '1892–1983',
      era: 'modern',
      tradition: 'evangelisch',
      title: 'Niederländische Uhrmacherin, Judenretterin und Evangelistin',
      fields: ['Vergebung', 'Feindesliebe', 'Zeugnis unter Verfolgung'],
      bio: 'Corrie ten Boom versteckte mit ihrer Familie in Haarlem während der deutschen Besatzung Juden und Widerstandskämpfer. 1944 verraten, kam sie mit ihrer Schwester Betsie in das KZ Ravensbrück, wo Betsie starb. Nach dem Krieg reiste sie als Predigerin der Vergebung um die Welt; Yad Vashem ehrte sie als „Gerechte unter den Völkern".',
      keyWorks: ['The Hiding Place (Die Zuflucht, 1971)', 'Tramp for the Lord (1974)'],
    },
    {
      id: 'desmond-tutu',
      name: 'Desmond Tutu',
      years: '1931–2021',
      era: 'modern',
      tradition: 'anglikanisch',
      title: 'Anglikanischer Erzbischof von Kapstadt, Friedensnobelpreisträger 1984',
      fields: ['Vergebung', 'Versöhnung', 'Wiederherstellende Gerechtigkeit', 'Menschenrechte'],
      bio: 'Tutu war eine führende Stimme gegen die Apartheid in Südafrika. Ab 1996 leitete er die Wahrheits- und Versöhnungskommission, die Verbrechen der Apartheidzeit öffentlich aufarbeitete. Er vertrat eine wiederherstellende Gerechtigkeit, die Wahrheit, Reue und Vergebung verbindet; die Amnestieregelung der Kommission blieb umstritten.',
      keyWorks: ['No Future Without Forgiveness (1999)', 'The Book of Forgiving (2014, mit Mpho Tutu)'],
    },
  ],
};

export default topic;
