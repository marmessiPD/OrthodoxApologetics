import type { Topic } from '../../../schema.ts';
import moenchtumWeltflucht from './moenchtum-weltflucht.ts';
import reliquienAberglaube from './reliquien-aberglaube.ts';
import weihwasserOelMagie from './weihwasser-oel-magie.ts';
import bischofsZoelibat from './bischofs-zoelibat.ts';

const topic: Topic = {
  id: 'moenchtum-reliquien',
  category: 'konfessionen',
  group: 'Protestantismus',
  order: 6,
  title: `Mönchtum, Reliquien und Segnungen`,
  subtitle: `Die Wüstenväter, die Gebeine der Heiligen, Weihwasser und Öl, der Bischof aus dem Kloster – was die Schrift sagt und warum das nichts mit Weltflucht oder Magie zu tun hat`,
  icon: 'church',
  overview: `Wer als Kopte mit evangelischen oder freikirchlichen Christen spricht, hört früher oder später: „Klöster sind Weltflucht", „Reliquien sind Aberglaube", „Weihwasser ist Magie" und „Eure Bischöfe dürfen nicht heiraten – das ist unbiblisch". Hinter diesen Einwänden steht die Kritik der Reformation des 16. Jahrhunderts: Luther schrieb 1521 auf der Wartburg sein Urteil über die Mönchsgelübde, Calvin verspottete 1543 den Reliquienkult, und das Augsburger Bekenntnis (1530) verwarf Klostergelübde und den Zölibat der Priester.

Diese Kritik richtete sich gegen reale **Missstände im spätmittelalterlichen Westen**: Verdienstdenken, reiche Abteien, ins Kloster gegebene Kinder, Reliquienhandel und die Verbindung von Reliquien mit Ablässen. Vieles davon hat die orthodoxe Kirche nie gekannt – sie hatte nie Ablässe und nie einen Pflichtzölibat für Priester. Zugleich warf die Reformation Dinge über Bord, die tief in der Schrift und in der Kirche der ersten Jahrhunderte verwurzelt sind.

Gerade für die koptische Kirche ist das Thema eine Frage der Identität: **Ägypten ist die Wiege des christlichen Mönchtums.** Antonius, Pachomius, Makarius und Schenute haben die Lebensform geprägt, die über Johannes Cassian und Basilius die ganze Christenheit bis zur Regel Benedikts beeinflusste. Bis heute werden koptische Bischöfe und Patriarchen aus dem Mönchsstand gewählt, die Gemeindepriester sind verheiratet, und Kopten ehren die Reliquien ihrer Märtyrer – des Markus, des Athanasius und vieler anderer – und feiern die Wasserweihe (Lakan) und die Krankensalbung.

Die Antwort der Orthodoxie lautet nicht: „Alles war immer gut." Sie lautet: Missbrauch hebt den rechten Gebrauch nicht auf. Christus selbst lebte ehelos und betete in der Wüste, Gott wirkte durch die Gebeine Elisas und das Wasser von Siloah, und Paulus empfahl die Ehelosigkeit um des ungeteilten Dienstes willen.`,
  strategy: `**1. Gemeinsamen Boden suchen.** Gib zuerst ehrlich zu, wo die Reformation recht hatte: Verdienstdenken, Reliquienhandel, Ablässe und erzwungene Gelübde waren Missstände. Sag dann: Die Orthodoxie kannte vieles davon nicht – die Kritik traf ein westliches Problem.

**2. Mit der Schrift beginnen, nicht mit der Tradition.** Für jedes Thema gibt es klare Bibelstellen: Mt 19,12.21 und 1 Kor 7,32–35 (Mönchtum), 2 Kön 13,21 und Apg 19,11–12 (Reliquien), Joh 9,6–7, Mk 6,13 und Jak 5,14 (Öl und Wasser), 1 Tim 5,9 als Schlüssel zu 1 Tim 3,2 (Bischof). Erst danach die Väter.

**3. Die entscheidende Unterscheidung klar machen.** Verehrung ist nicht Anbetung; Segnung ist nicht Magie; Berufung ist nicht Zwei-Klassen-Christentum; kirchliche Ordnung ist nicht Dogma. Wer diese Unterscheidungen erklärt, entschärft die meisten Einwände.

**4. Mit Fragen arbeiten.** „War Jesus ein Weltflüchtling, als er in die Wüste ging?" – „Hätte Paulus Bischof sein können?" – „Warum wurde der Tote durch Elisas Gebeine lebendig?" – „Ist das Gebet über dein Essen Magie?"

**5. Protestantische Zeugen nennen.** Bonhoeffer, Taizé, evangelische Kommunitäten und pfingstliche Ölsalbungen zeigen, dass viele Protestanten das Anliegen selbst wiederentdeckt haben.

**6. Fallen meiden.** Verteidige keine Wunderlegenden oder zweifelhaften Reliquien als historisch gesichert; behaupte nicht, Mönche seien bessere Christen; und verwechsle die koptische Ordnung nicht mit dem katholischen Pflichtzölibat.`,
  keyOpponents: [
    { name: 'Martin Luther', role: 'Reformator, ehemaliger Augustinermönch', work: 'De votis monasticis iudicium (1521); Schmalkaldische Artikel (1537)' },
    { name: 'Johannes Calvin', role: 'Reformator in Genf', work: 'Traité des reliques (1543); Institutio IV,13 und IV,19' },
    { name: 'Philipp Melanchthon', role: 'Reformator', work: 'Confessio Augustana (1530), Art. 23 und 27' },
    { name: 'Adolf von Harnack', role: 'Liberaler Kirchenhistoriker', work: 'Das Mönchtum. Seine Ideale und seine Geschichte (1881)' },
    { name: 'Keith Thomas', role: 'Historiker, Oxford', work: 'Religion and the Decline of Magic (1971)' },
  ],
  claims: [moenchtumWeltflucht, reliquienAberglaube, weihwasserOelMagie, bischofsZoelibat],
  newPeople: [
    {
      id: 'pachomius',
      name: 'Hl. Pachomius der Große',
      years: 'ca. 292–346',
      era: 'patristisch',
      tradition: 'koptisch',
      title: 'Vater des gemeinschaftlichen Mönchtums (Koinonia)',
      fields: ['Mönchtum', 'Gemeinschaftsleben', 'Klosterregel'],
      bio: 'Ehemaliger Soldat aus Oberägypten, der nach der Überlieferung durch die Nächstenliebe von Christen zum Glauben fand. Gründete um 320/323 in Tabennesi das erste Gemeinschaftskloster und einen Verband von Klöstern für Mönche und Nonnen. Seine Regel, die Arbeit und Gebet verbindet, wurde 404 von Hieronymus ins Lateinische übersetzt.',
      keyWorks: ['Regel des Pachomius', 'Briefe'],
    },
    {
      id: 'makarius-aegypten',
      name: 'Hl. Makarius der Große (der Ägypter)',
      years: 'ca. 300–390',
      era: 'patristisch',
      tradition: 'koptisch',
      title: 'Vater der Mönche der Sketis (Wadi Natrun)',
      fields: ['Mönchtum', 'Geistliches Leben', 'Demut'],
      bio: 'Begründete um 330 das Mönchsleben in der Sketis, dem heutigen Wadi Natrun, wo das nach ihm benannte Kloster bis heute besteht. Die Apophthegmata Patrum zeichnen ihn als Mann großer Milde und Demut. Die unter seinem Namen überlieferten „Geistlichen Homilien" stammen nach heutiger Forschung wohl aus einem anderen, syrischen Umfeld.',
      caveat: 'Die „Makarius-Homilien" werden heute meist einem anonymen Verfasser („Pseudo-Makarius") zugeschrieben.',
    },
  ],
};

export default topic;
