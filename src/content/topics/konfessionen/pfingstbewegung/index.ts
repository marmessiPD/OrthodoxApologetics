import type { Topic } from '../../../schema.ts';
import zungenredeBeweis from './zungenrede-beweis.ts';
import wohlstandsevangelium from './wohlstandsevangelium.ts';
import heilungGarantiert from './heilung-garantiert.ts';
import neueApostelPropheten from './neue-apostel-propheten.ts';

const topic: Topic = {
  id: 'pfingstbewegung',
  category: 'konfessionen',
  group: 'Pfingst- & Charismatische Bewegung',
  order: 1,
  title: `Pfingst- und Charismatische Bewegung`,
  subtitle: `Zungenrede, Wohlstandsevangelium, Heilungsversprechen und neue Apostel – im Licht der Schrift und der Kirche der Märtyrer`,
  icon: 'wind',
  overview: `Die **Pfingstbewegung** entstand Anfang des 20. Jahrhunderts: 1901 in Topeka (Kansas) unter Charles F. Parham, ab 1906 in der Azusa Street in Los Angeles unter dem afroamerikanischen Prediger William J. Seymour. Ihr Kennzeichen ist die Lehre von einer **Geistestaufe** nach der Bekehrung, deren „erstes Zeichen" die **Zungenrede** sei. Ab den 1960er-Jahren griff die **charismatische Bewegung** auf traditionelle Kirchen über, später folgten die „dritte Welle" und die **Neue Apostolische Reformation** (NAR). Mit mehreren hundert Millionen Anhängern ist die pfingstlich-charismatische Christenheit heute die am schnellsten wachsende Strömung weltweit – auch im Nahen Osten und unter jungen Kopten.

Man muss fair unterscheiden: Viele Pfingstler sind fromme, opferbereite, missionarische Christen, die die Trinität und die Gottheit Christi bekennen, die Bibel lieben und sich nach dem Wirken des Heiligen Geistes sehnen. Seriöse pfingstliche Gelehrte wie **Gordon Fee** haben selbst das **Wohlstandsevangelium** scharf kritisiert, und charismatische Leiter wie **Michael Brown** warnen vor falschen Prophetien. Problematisch sind vor allem vier Lehren: Zungenrede als Pflichtbeweis, Reichtum und Gesundheit als Glaubensrecht, garantierte Heilung und neue Apostel mit eigener Offenbarungsautorität.

Die **koptisch-orthodoxe Kirche** ist keine „geistlose" Kirche: Sie glaubt, dass der Heilige Geist in der Taufe und in der **Myronsalbung** jedem Christen geschenkt wird, dass er in den Sakramenten wirkt, dass Wunder und Heilungen bis heute geschehen (Heiligengeschichten, Krankensalbung nach Jak 5,14) und dass die Gaben des Geistes nicht aufgehört haben. Aber sie misst alles an der Frucht des Geistes (Gal 5,22), am apostolischen Glauben, der „ein für alle Mal" überliefert ist (Jud 3), und an der Erfahrung einer Kirche, die seit 2000 Jahren die **Kirche der Märtyrer** ist.`,
  strategy: `**1. Mit Wertschätzung beginnen.** Erkenne die Glaubensglut, die Gebetsfreude und den Missionseifer deines pfingstlichen Gegenübers an. Sag klar: „Wir glauben auch an das Wirken des Heiligen Geistes heute – auch an Wunder." So nimmst du ihm den Eindruck, du seist ein toter Ritualist.

**2. Die Frage verschieben: Nicht ob, sondern wie der Geist wirkt.** Lenke von Erfahrungen auf die Schrift: 1 Kor 12,30 („Reden sie alle mit Zungen?"), Gal 5,22 (Frucht vor Gaben), 1 Kor 13 (Liebe vor Zungen).

**3. Zeugnis der Märtyrer.** Beim Wohlstands- und Heilungsevangelium ist das stärkste Argument die Geschichte: Paulus, Timotheus, Trophimus – und die 21 Märtyrer von Libyen. Frage: „Hatten sie zu wenig Glauben?"

**4. Prüfstein Didache und Dtn 18.** Bei neuen Aposteln und Propheten: Die älteste Kirchenordnung (Didache 11) gibt klare Kriterien – wer Geld fordert, ist ein falscher Prophet.

**5. Fallen meiden.** Werde nicht „cessationistisch" (die Gaben hätten ganz aufgehört) – das ist nicht koptische Lehre. Mach dich nicht über Erfahrungen lustig. Und unterscheide klassische Pfingstler von Wohlstandspredigern – viele Pfingstler lehnen das Wohlstandsevangelium selbst ab.`,
  keyOpponents: [
    { name: 'Charles F. Parham / William J. Seymour', role: 'Gründergestalten der Pfingstbewegung (Topeka 1901, Azusa Street 1906)', work: 'Lehre von der Zungenrede als Zeichen der Geistestaufe' },
    { name: 'Kenneth E. Hagin', role: 'Begründer der „Word of Faith"-Bewegung (1917–2003)', work: 'Rhema Bible Training College; zahlreiche Bücher zum „Glaubenswort"' },
    { name: 'Kenneth Copeland', role: 'Fernsehprediger, Kenneth Copeland Ministries', work: 'The Laws of Prosperity (1974)' },
    { name: 'Benny Hinn', role: 'Heilungsevangelist', work: 'Heilungskreuzzüge, Fernsehsendung „This Is Your Day"' },
    { name: 'C. Peter Wagner', role: 'Missionswissenschaftler, Fuller Seminary (1930–2016)', work: 'Begründer der „Neuen Apostolischen Reformation"; Apostles Today (2006)' },
    { name: 'Bill Johnson', role: 'Pastor der Bethel Church, Redding (Kalifornien)', work: 'When Heaven Invades Earth (2003)' },
  ],
  claims: [zungenredeBeweis, wohlstandsevangelium, heilungGarantiert, neueApostelPropheten],
  newPeople: [
    {
      id: 'gordon-fee',
      name: 'Gordon D. Fee',
      years: '1934–2022',
      era: 'modern',
      tradition: 'evangelisch',
      title: 'Neutestamentler, Regent College (Vancouver); Pfingstler (Assemblies of God)',
      fields: ['Neues Testament', 'Paulus', 'Pneumatologie', 'Hermeneutik', 'Wohlstandsevangelium-Kritik'],
      bio: 'Einer der bedeutendsten pfingstlichen Bibelwissenschaftler. Sein Kommentar zum 1. Korintherbrief und seine Studie über den Heiligen Geist bei Paulus sind Standardwerke. Er kritisierte das Wohlstandsevangelium scharf und stellte die klassisch-pfingstliche Lehre von der Zungenrede als „erstem Beweis" der Geistestaufe aus hermeneutischen Gründen in Frage.',
      keyWorks: ['The First Epistle to the Corinthians (NICNT, 1987)', 'God’s Empowering Presence (1994)', 'Gospel and Spirit: Issues in New Testament Hermeneutics (1991)', 'The Disease of the Health and Wealth Gospels (1985)'],
      caveat: 'Protestant (pfingstlich) – in Fragen der Sakramente, der Kirche und der Tradition teilt die koptische Kirche seine Positionen nicht. Hier als innerpfingstlicher Kritiker und als Exeget.',
    },
  ],
};

export default topic;
