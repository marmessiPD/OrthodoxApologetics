import type { Topic } from '../../../schema.ts';
import christentumUmweltkrise from './christentum-umweltkrise.ts';
import speziesismus from './speziesismus.ts';
import pazifismusGerechterKrieg from './pazifismus-gerechter-krieg.ts';
import jesusSozialist from './jesus-sozialist.ts';

const topic: Topic = {
  id: 'umwelt-tiere-krieg',
  category: 'ethik',
  group: 'Christentum & Gesellschaft',
  order: 2,
  title: `Umwelt, Tiere, Krieg und Besitz`,
  subtitle: `Lynn White, Peter Singer, Pazifismus und „Jesus der Sozialist"`,
  icon: 'leaf',
  overview: `In diesem Themenblock geht es um vier Vorwürfe, die das Christentum für gesellschaftliche Übel verantwortlich machen – oder ihm vorwerfen, seine eigenen Ideale zu verraten. **Lynn White Jr.** machte 1967 in *Science* das „anthropozentrische" westliche Christentum für die Umweltkrise verantwortlich. **Peter Singer** sieht in der jüdisch-christlichen Sonderstellung des Menschen die Wurzel des „Speziesismus", der Tiere zu Sachen macht. Christliche **Pazifisten** wie Tolstoi, Yoder und Hauerwas werfen den Kirchen vor, Jesu Gewaltverbot seit Konstantin verraten zu haben. Und **marxistische** wie manche theologische Stimmen erklären Jesus zum Sozialisten, der Gütergemeinschaft verlange.

Die Antworten haben eine gemeinsame Struktur: Die Bibel ist in all diesen Fragen anspruchsvoller, als die Kritiker meinen – und zugleich anders, als sie behaupten. Der Mensch soll die Erde „bebauen und bewahren" (Gen 2,15), nicht ausbeuten. Er hat als Bild Gottes eine besondere Würde, aber Tiere sind Mitgeschöpfe, über die er Rechenschaft ablegt (Spr 12,10). Jesus verbietet persönliche Rache und heiligen Krieg, gibt aber der Obrigkeit das Schwert zum Schutz der Schwachen (Röm 13,4). Und die Urgemeinde teilte freiwillig aus Liebe (Apg 5,4), nicht unter staatlichem Zwang.

Die koptisch-orthodoxe Kirche bringt eigene Schätze ein: eine Liturgie, die seit Jahrhunderten für die Wasser des Nils, die Pflanzen und die Früchte betet; Wüstenväter, die mit wilden Tieren in Frieden lebten; über 200 Fastentage ohne tierische Produkte; Soldatenheilige wie Menas und Georg und zugleich Basilius' Mahnung zur Buße nach dem Töten; die radikalen Predigten der Väter über Reichtum und Armut.`,
  strategy: `**1. Zugeständnisse zuerst.** In jedem dieser Themen haben Christen versagt: Umweltvergessenheit, Tierquälerei, Kriegssegnungen, Wohlstandschristentum. Wer das offen zugibt, gewinnt Gehör.

**2. Den Text gegen das Klischee stellen.** Gen 2,15 neben Gen 1,28; Spr 12,10 und Jona 4,11 neben Singers Vorwurf; Röm 13,4 neben Mt 5,39; Apg 5,4 neben Apg 2,44. Lass die Bibel selbst sprechen.

**3. Unterscheidungen einführen.** Herrschaft ≠ Ausbeutung; Würde ≠ Willkür; persönliche Rache ≠ öffentlicher Schutz; freiwilliges Teilen ≠ staatliche Enteignung.

**4. Die Konsequenzen der Alternativen zeigen.** Singers Logik führt zur Abwertung behinderter Säuglinge; absoluter Pazifismus lässt Wehrlose im Stich; erzwungener Kollektivismus endete im 20. Jahrhundert in Hungersnöten und Kirchenverfolgung.

**5. Den koptischen Schatz zeigen.** Liturgie, Fasten, Wüstenväter, Soldatenheilige, die Väter über Reichtum – das östliche Christentum ist in diesen Fragen oft das beste Gegenbeispiel zu den Klischees.

**Fallen:** Das angebliche „Tiergebet des hl. Basilius" nicht zitieren (es stammt nicht von ihm). Lk 22,36 nicht als Waffenbefürwortung missbrauchen. Nicht Jesus zum Kapitalisten machen. Den Klimawandel nicht leugnen, um das Christentum zu verteidigen.`,
  keyOpponents: [
    { name: 'Lynn White Jr.', role: 'Technikhistoriker, UCLA', work: '„The Historical Roots of Our Ecologic Crisis" (1967)' },
    { name: 'Peter Singer', role: 'Ethiker, Princeton', work: 'Animal Liberation (1975); Practical Ethics (1979)' },
    { name: 'Leo Tolstoi', role: 'Schriftsteller', work: 'Das Reich Gottes ist inwendig in euch (1893/94)' },
    { name: 'Stanley Hauerwas', role: 'Theologe, Duke University', work: 'The Peaceable Kingdom (1983)' },
    { name: 'John Howard Yoder', role: 'Mennonitischer Theologe', work: 'The Politics of Jesus (1972)' },
    { name: 'Karl Kautsky', role: 'Marxistischer Theoretiker', work: 'Der Ursprung des Christentums (1908)' },
    { name: 'Yuval Noah Harari', role: 'Historiker', work: 'Sapiens (2011); Homo Deus (2015)' },
  ],
  claims: [christentumUmweltkrise, speziesismus, pazifismusGerechterKrieg, jesusSozialist],
  newPeople: [
    {
      id: 'francis-schaeffer',
      name: 'Francis A. Schaeffer',
      years: '1912–1984',
      era: 'modern',
      tradition: 'evangelisch',
      title: 'Presbyterianischer Theologe und Apologet, Gründer von L\'Abri (Schweiz)',
      fields: ['Apologetik', 'Kulturkritik', 'Schöpfungsverantwortung', 'Menschenwürde'],
      bio: 'Schaeffer gründete 1955 die Gemeinschaft L\'Abri in den Schweizer Alpen, die Suchende aus aller Welt anzog. Er gehörte zu den ersten evangelikalen Denkern, die auf Lynn Whites Kritik antworteten und eine christliche Verantwortung für die Natur einforderten. Später setzte er sich stark für den Lebensschutz ein.',
      keyWorks: ['Pollution and the Death of Man (1970)', 'The God Who Is There (1968)', 'How Should We Then Live? (1976)'],
    },
    {
      id: 'bartholomaios',
      name: 'Ökumenischer Patriarch Bartholomaios I.',
      years: 'geb. 1940',
      era: 'modern',
      tradition: 'orthodox',
      title: 'Erzbischof von Konstantinopel und Ökumenischer Patriarch (seit 1991)',
      fields: ['Schöpfungstheologie', 'Ökologie', 'Ökumene'],
      bio: 'Bartholomaios I. wird wegen seines Einsatzes für die Bewahrung der Schöpfung oft der „grüne Patriarch" genannt. Er veranstaltete internationale Symposien zu Religion, Wissenschaft und Umwelt und bezeichnete die Zerstörung der Natur als Sünde. Als östlich-orthodoxer (chalcedonensischer) Patriarch ist er keine Autorität der koptischen Kirche, teilt mit ihr aber die östliche Sicht der Schöpfung als Gabe.',
      keyWorks: ['On Earth as in Heaven: Ecological Vision and Initiatives (2012)', 'Encountering the Mystery (2008)'],
    },
    {
      id: 'nigel-biggar',
      name: 'Nigel Biggar',
      years: 'geb. 1955',
      era: 'modern',
      tradition: 'anglikanisch',
      title: 'Regius Professor für Moral- und Pastoraltheologie, Universität Oxford (bis 2022)',
      fields: ['Ethik des Krieges', 'Gerechter Krieg', 'Christliche Ethik'],
      bio: 'Biggar ist anglikanischer Priester und einer der bekanntesten Verteidiger der Lehre vom gerechten Krieg in der Gegenwart. In seinen Büchern setzt er sich kritisch mit christlichem Pazifismus auseinander und beurteilt konkrete Kriege nach strengen moralischen Kriterien.',
      keyWorks: ['In Defence of War (2013)', 'Aiming to Kill: The Ethics of Suicide and Euthanasia (2004)'],
    },
    {
      id: 'andrew-linzey',
      name: 'Andrew Linzey',
      years: 'geb. 1952',
      era: 'modern',
      tradition: 'anglikanisch',
      title: 'Anglikanischer Priester und Theologe, Direktor des Oxford Centre for Animal Ethics',
      fields: ['Tierethik', 'Tiertheologie', 'Schöpfungstheologie'],
      bio: 'Linzey gilt als Pionier der christlichen Tiertheologie. Er kritisiert die Gleichgültigkeit vieler Christen gegenüber Tierleid, argumentiert dabei aber aus der christlichen Schöpfungs- und Christuslehre. Er setzt sich gegen Massentierhaltung und Tierversuche ein.',
      keyWorks: ['Animal Theology (1994)', 'Creatures of the Same God (2007)'],
      caveat: 'Linzey vertritt in der Tierethik teilweise Positionen (etwa zu Tierrechten), die über die kirchliche Lehre hinausgehen; er wird hier als Zeuge für christliche Ressourcen der Tierethik zitiert.',
    },
  ],
};

export default topic;
