import type { Topic } from '../../../schema.ts';
import erdeAltBibelWiderlegt from './erde-alt-bibel-widerlegt.ts';
import sintflutUnmoeglich from './sintflut-unmoeglich.ts';
import radiometrieWiderlegtBibel from './radiometrie-widerlegt-bibel.ts';

const topic: Topic = {
  id: 'erdalter',
  category: 'leben',
  group: 'Geologie & Erdalter',
  order: 1,
  title: `Erdalter, Sintflut und Datierung`,
  subtitle: `4,5 Milliarden Jahre, Noahs Flut und radiometrische Uhren – was die Bibel sagt und was nicht`,
  icon: 'mountain-snow',
  overview: `Für viele Kritiker ist das Erdalter der schnellste Weg, die Bibel zu „widerlegen": Die Wissenschaft misst 4,5 Milliarden Jahre, die Bibel scheine 6.000 zu lehren. Dazu kommen die Sintflut, für die sich keine weltweite geologische Spur findet, und die radiometrische Datierung, deren Uhren eindeutig ein hohes Alter anzeigen.

Die koptisch-orthodoxe Kirche hat **kein Dogma über das Alter der Erde** oder den geografischen Umfang der Flut. Verbindlich ist: Gott schuf alles aus dem Nichts, der Mensch ist nach Gottes Bild geschaffen, Adam und Eva sind reale Personen, die Flut ist ein reales Gericht Gottes. Die Väter lasen die Schöpfungstage unterschiedlich – Basilius und Ephräm eher wörtlich, Origenes, Clemens und Augustinus nicht als gewöhnliche Tage –, lange vor jeder modernen Geologie. Ehrlich ist zugleich: Die meisten Väter hielten die Welt für einige tausend Jahre alt.

Unter bibeltreuen Christen gibt es mehrere Modelle: Junge Erde (z. B. John Sanford), Tag-Zeitalter (Hugh Ross), Rahmendeutung (Meredith Kline), analoge Tage (C. John Collins), regionale oder globale Flut. Dieser Themenblock stellt sie fair dar und empfiehlt eine klare Linie: Die radiometrische Datierung ist im Allgemeinen zuverlässig – das bestätigen auch christliche Wissenschaftler wie Roger Wiens und Davis Young. Ein Christ braucht hier keinen Kampfplatz; die eigentlichen Fragen (Warum gibt es eine Welt? Woher kommt das Leben?) entscheiden sich anderswo.`,
  strategy: `**Reihenfolge im Gespräch:**
1. **Entdramatisieren:** „Die Bibel nennt kein Alter der Erde, und meine Kirche hat dazu kein Dogma." Damit läuft der Angriff ins Leere.
2. **Text zeigen:** Gen 1,1 vor dem ersten Tag; *jôm* mit mehreren Bedeutungen (Gen 2,4); siebter Tag ohne Abend; Lücken in Genealogien (Mt 1,8).
3. **Väter als Beleg gegen den Vorwurf der Anpassung:** Origenes und Augustinus vor 1.500+ Jahren – aus Textgründen, nicht aus Druck der Geologie.
4. **Zugeständnisse:** Radiometrie zuverlässig, globale Flutgeologie unhaltbar, Väter mehrheitlich für junge Welt. Ehrlichkeit macht dich glaubwürdig.
5. **Sintflut:** Regionale Lesart über den biblischen Sprachgebrauch begründen (Gen 41,57; Dtn 2,25); Geschichtlichkeit und geistlicher Sinn (Taufe, Kirche) festhalten.
6. **Umlenken auf die großen Fragen:** Anfang des Universums, Feinabstimmung, Ursprung des Lebens, Auferstehung.

**Fallen:**
- Keine Junge-Erde-„Beweise" aus zweiter Hand (Mount St. Helens, C-14 in Diamanten, „NASA fand einen fehlenden Tag", Arche auf dem Ararat).
- Keine Verachtung für Christen mit Junge-Erde-Überzeugung – sie sind Geschwister mit einer legitimen Auslegungstradition.
- Nicht behaupten, die Väter hätten alle symbolisch gelesen.
- Die junge oder alte Erde nie zum Test der Rechtgläubigkeit machen.`,
  keyOpponents: [
    { name: 'Bill Nye', role: 'Wissenschaftskommunikator', work: 'Debatte mit Ken Ham (2014); Undeniable (2014)' },
    { name: 'Richard Dawkins', role: 'Evolutionsbiologe', work: 'The Greatest Show on Earth (2009)' },
    { name: 'G. Brent Dalrymple', role: 'Geochronologe, U.S. Geological Survey', work: 'The Age of the Earth (1991)' },
    { name: 'Donald R. Prothero', role: 'Geologe und Paläontologe' },
    { name: 'Jerry Coyne', role: 'Evolutionsbiologe', work: 'Faith vs. Fact (2015)' },
  ],
  claims: [erdeAltBibelWiderlegt, sintflutUnmoeglich, radiometrieWiderlegtBibel],
  newPeople: [
    {
      id: 'hugh-ross',
      name: 'Hugh Ross',
      years: 'geb. 1945',
      era: 'modern',
      tradition: 'evangelisch',
      title: 'Astrophysiker (PhD University of Toronto), Gründer von Reasons to Believe',
      fields: ['Astrophysik', 'Erdalter', 'Tag-Zeitalter-Deutung', 'Feinabstimmung'],
      bio: 'Kanadisch-amerikanischer Astronom, der 1986 die christliche Organisation Reasons to Believe gründete. Vertritt die Tag-Zeitalter-Deutung von Genesis 1 und eine regionale Flut, die die damalige Menschheit traf; argumentiert, dass Natur und Schrift als zwei Offenbarungen Gottes übereinstimmen.',
      keyWorks: ['The Creator and the Cosmos (1993)', 'A Matter of Days (2004)', 'Navigating Genesis (2014)'],
      caveat: 'Seine detaillierte Zuordnung der Schöpfungstage zu Erdepochen ist auch unter Christen umstritten; das Erdalter ist in der koptischen Kirche kein Dogma.',
    },
    {
      id: 'meredith-kline',
      name: 'Meredith G. Kline',
      years: '1922–2007',
      era: 'modern',
      tradition: 'evangelisch',
      title: 'Alttestamentler und Altorientalist (reformiert)',
      fields: ['Altes Testament', 'Rahmendeutung von Genesis 1', 'Bundestheologie'],
      bio: 'Reformierter Alttestamentler, der u. a. am Gordon-Conwell Theological Seminary und am Westminster Seminary California lehrte. Wurde zum bekanntesten Vertreter der Rahmendeutung („Framework"), nach der die sechs Schöpfungstage einen literarischen Rahmen bilden und keine Chronologie.',
      keyWorks: ['„Because It Had Not Rained", Westminster Theological Journal 20 (1958)', '„Space and Time in the Genesis Cosmogony", Perspectives on Science and Christian Faith 48 (1996)', 'Kingdom Prologue (2000)'],
    },
    {
      id: 'roger-wiens',
      name: 'Roger C. Wiens',
      years: 'zeitgenössisch',
      era: 'modern',
      tradition: 'christlich',
      title: 'Physiker und Planetenforscher (u. a. Los Alamos National Laboratory)',
      fields: ['Radiometrische Datierung', 'Isotopengeochemie', 'Planetenforschung'],
      bio: 'Physiker und Planetenforscher, maßgeblich beteiligt am ChemCam-Instrument des Mars-Rovers Curiosity. Schrieb als bekennender Christ eine weit verbreitete Einführung in die radiometrischen Datierungsmethoden für christliche Leser.',
      keyWorks: ['Radiometric Dating: A Christian Perspective (American Scientific Affiliation, 1994; überarb. 2002)'],
    },
    {
      id: 'davis-young',
      name: 'Davis A. Young',
      years: 'zeitgenössisch',
      era: 'modern',
      tradition: 'evangelisch',
      title: 'Geologe, emeritierter Professor am Calvin College',
      fields: ['Geologie', 'Sintflut', 'Geschichte der Schöpfungsauslegung'],
      bio: 'Christlicher Geologe (Petrologie) in reformierter Tradition. Untersuchte die Auslegungsgeschichte der Sintflut von den Kirchenvätern bis zur Gegenwart und legte dar, warum eine globale Flutgeologie mit dem geologischen Befund unvereinbar ist, ohne dass dadurch die Autorität der Schrift berührt wird.',
      keyWorks: ['The Biblical Flood: A Case Study of the Church\'s Response to Extrabiblical Evidence (1995)', 'The Bible, Rocks and Time (2008, mit Ralph Stearley)'],
    },
  ],
};

export default topic;
