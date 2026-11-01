import type { Topic } from '../../../schema.ts';
import sexualmoralVeraltet from './sexualmoral-veraltet.ts';
import homosexualitaetBibel from './homosexualitaet-bibel.ts';
import eheSozialesKonstrukt from './ehe-soziales-konstrukt.ts';
import genderFreiWaehlbar from './gender-frei-waehlbar.ts';

const topic: Topic = {
  id: 'sexualethik',
  category: 'ethik',
  group: 'Sexualethik & Familie',
  order: 1,
  title: `Sexualethik, Ehe & Identität`,
  subtitle: `Christliche Sexualmoral, Homosexualität, Ehe und Geschlecht – in Wahrheit und Liebe`,
  icon: 'heart',
  overview: `Kein Themenblock ist persönlicher und verletzlicher als dieser. Hinter jeder Frage zur Sexualethik stehen Menschen – oft mit Geschichten von Scham, Ablehnung, Einsamkeit oder Verletzung, manchmal durch Christen selbst. Deshalb gilt hier mehr als irgendwo sonst: **Die Würde des Menschen, Liebe und Seelsorge kommen vor jedem Argument.** Wer gewinnt, aber einen Menschen verletzt, hat verloren.

Die Debatte hat sich in den letzten Jahrzehnten grundlegend verschoben. Die christliche Sexualethik – Sexualität gehört in den lebenslangen Bund von Mann und Frau – gilt vielen als veraltet, repressiv oder sogar schädlich. Kritiker wie Dan Savage, Theologen wie Matthew Vines und James Brownson und Theoretikerinnen wie Judith Butler argumentieren, dass die Bibel heutige Fragen nicht kenne, dass ihre Texte nur Ausbeutung meinten und dass Identität im inneren Empfinden liege. Dahinter steht ein neues Menschenbild, das Carl Trueman „expressiven Individualismus" nennt: Das wahre Selbst ist das, was ich in mir fühle.

Die koptisch-orthodoxe Kirche hält an der Lehre der Schrift und der Väter fest: Der Mensch ist als Mann und Frau nach Gottes Bild geschaffen; die Ehe ist ein Sakrament zwischen einem Mann und einer Frau; alle Menschen sind zur Keuschheit gerufen – in der Ehe zur Treue, außerhalb zur Enthaltsamkeit. Zugleich lehrt sie, dass eine gleichgeschlechtliche Neigung oder eine Geschlechtsdysphorie selbst keine Sünde ist, dass jeder Mensch Gottes geliebtes Ebenbild bleibt und dass Verachtung, Spott und Ausgrenzung Sünde sind. Die Kirche hat die Aufgabe, Familie für alle zu sein, die den Weg der Nachfolge gehen.`,
  strategy: `**1. Zuhören, bevor du sprichst.** Frag nach der Geschichte deines Gegenübers. Oft steht hinter der Frage eine Verletzung. Eine Entschuldigung für das, was Christen getan haben, öffnet mehr Türen als jedes Argument.

**2. Person und Handlung unterscheiden.** Mach früh klar: Die Neigung ist keine Sünde; der Mensch ist geliebt; der Ruf zur Keuschheit gilt allen, auch dir selbst.

**3. Mit der positiven Vision beginnen.** Nicht mit Verboten, sondern mit Gen 1–2 und Mt 19,4–6: der Würde des Leibes, der Schönheit der Ehe, dem Bund als Schutz der Verletzlichen.

**4. Den Textbefund ehrlich darstellen – mit Zeugen der Gegenseite.** Dass auch revisionistische Forscher (Crompton, Brooten, L. T. Johnson) die traditionelle Bedeutung der Texte bestätigen, ist dein stärkstes exegetisches Argument.

**5. Zugeständnisse machen.** Sodom ist nicht der Kerntext; Christen haben verachtet und verletzt; Ehelosigkeit ist ein schwerer Weg; Geschlechtsdysphorie ist echtes Leiden.

**6. Bei Krisen: Hilfe vor Diskussion.** Wenn jemand von Suizidgedanken spricht, ist die Debatte beendet. Zuhören, nicht allein lassen, professionelle Hilfe vermitteln.

**Fallen:** Keine Witze, keine Abwertung, keine pauschalen Statistiken als Waffe. Keine Versprechen, dass sich eine Neigung „wegbeten" lässt. Gleichgeschlechtliche Handlungen nicht als „schlimmste Sünde" darstellen. Medizinische Aussagen nur, wenn sie belegt sind.`,
  keyOpponents: [
    { name: 'Matthew Vines', role: 'Autor, Gründer des Reformation Project', work: 'God and the Gay Christian (2014)' },
    { name: 'James V. Brownson', role: 'Neutestamentler, Western Theological Seminary', work: 'Bible, Gender, Sexuality (2013)' },
    { name: 'Dan Savage', role: 'Publizist und LGBT-Aktivist', work: 'Savage Love; It Gets Better Project' },
    { name: 'Judith Butler', role: 'Philosophin und Gendertheoretikerin', work: 'Gender Trouble (1990)' },
    { name: 'Dale B. Martin', role: 'Neutestamentler, Yale', work: 'Sex and the Single Savior (2006)' },
    { name: 'Peter Singer', role: 'Ethiker, Princeton', work: 'Practical Ethics (1979)' },
  ],
  claims: [sexualmoralVeraltet, homosexualitaetBibel, eheSozialesKonstrukt, genderFreiWaehlbar],
  newPeople: [
    {
      id: 'robert-gagnon',
      name: 'Robert A. J. Gagnon',
      years: 'zeitgenössisch',
      era: 'modern',
      tradition: 'evangelisch',
      title: 'Neutestamentler (lange Jahre Pittsburgh Theological Seminary)',
      fields: ['Biblische Sexualethik', 'Paulusbriefe', 'Hermeneutik'],
      bio: 'Amerikanischer Neutestamentler, dessen Monografie zur Bibel und gleichgeschlechtlichen Praxis die ausführlichste exegetische Untersuchung der einschlägigen Texte im Kontext des Alten Orients, des Frühjudentums und der griechisch-römischen Welt bietet. Führte zahlreiche öffentliche Debatten mit Vertretern der revisionistischen Position.',
      keyWorks: ['The Bible and Homosexual Practice: Texts and Hermeneutics (2001)', 'Homosexuality and the Bible: Two Views (mit Dan O. Via, 2003)'],
    },
    {
      id: 'sam-allberry',
      name: 'Sam Allberry',
      years: 'zeitgenössisch',
      era: 'modern',
      tradition: 'anglikanisch',
      title: 'Pastor und Autor',
      fields: ['Seelsorge', 'Sexualethik', 'Ehelosigkeit'],
      bio: 'Britischer Pastor, der offen über seine gleichgeschlechtliche Neigung spricht und sich für ein eheloses Leben in der Nachfolge Christi entschieden hat. Er schreibt darüber, wie Gemeinden Menschen, die ehelos leben, echte Familie und Freundschaft bieten können.',
      keyWorks: ['Is God Anti-Gay? (2013)', '7 Myths about Singleness (2019)'],
    },
    {
      id: 'mark-yarhouse',
      name: 'Mark A. Yarhouse',
      years: 'zeitgenössisch',
      era: 'modern',
      tradition: 'evangelisch',
      title: 'Klinischer Psychologe, Leiter des Sexual & Gender Identity Institute',
      fields: ['Geschlechtsdysphorie', 'Psychologie der Sexualität', 'Seelsorge'],
      bio: 'Amerikanischer Psychologe, der seit Jahrzehnten zur Begleitung von Menschen mit Fragen der sexuellen und geschlechtlichen Identität forscht und publiziert. Er verbindet eine traditionelle christliche Anthropologie mit großem Respekt für die Erfahrungen der Betroffenen.',
      keyWorks: ['Understanding Gender Dysphoria (2015)', 'Emerging Gender Identities (mit Julia Sadusky, 2020)'],
    },
    {
      id: 'carl-trueman',
      name: 'Carl R. Trueman',
      years: 'zeitgenössisch',
      era: 'modern',
      tradition: 'evangelisch',
      title: 'Kirchen- und Ideenhistoriker, Grove City College',
      fields: ['Ideengeschichte', 'Moderne Anthropologie', 'Expressiver Individualismus'],
      bio: 'Britisch-amerikanischer Historiker, der nachzeichnet, wie sich das moderne Verständnis des Selbst von Rousseau über die Romantik und Freud bis zur sexuellen Revolution entwickelt hat, und erklärt, warum heute Identität vor allem im inneren Empfinden verortet wird.',
      keyWorks: ['The Rise and Triumph of the Modern Self (2020)', 'Strange New World (2022)'],
    },
  ],
};

export default topic;
