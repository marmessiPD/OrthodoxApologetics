import type { Topic } from '../../../schema.ts';
import ntAntisemitisch from './nt-antisemitisch.ts';
import jesusJuedischerReformer from './jesus-juedischer-reformer.ts';
import judenLehntenAb from './juden-lehnten-ab.ts';
import zweiWegeBund from './zwei-wege-bund.ts';

const topic: Topic = {
  id: 'judentum-dialog',
  category: 'religionen',
  group: 'Judentum',
  order: 2,
  title: `Judentum, Kirche und Geschichte`,
  subtitle: `Ist das Neue Testament antisemitisch? War Jesus nur ein jüdischer Reformer? Warum glaubte die Mehrheit nicht? Braucht Israel Jesus?`,
  icon: 'scroll',
  overview: `Dieser Themenblock behandelt nicht einzelne Prophetien, sondern die großen **Grundfragen** des christlich-jüdischen Gesprächs – und sie sind belastet von einer schweren Geschichte. Christen haben Juden über Jahrhunderte verachtet, verleumdet, zwangsgetauft, vertrieben und ermordet; christlicher Antijudaismus hat den Boden für den modernen Antisemitismus mit bereitet. Wer mit Juden über Jesus spricht, muss diese Geschichte kennen und bekennen – auch die dunklen Seiten der eigenen Tradition: Melito von Sardes, Chrysostomus' Reden gegen die Juden, die Vertreibung der Juden aus Alexandria 415.

Vier Einwände stehen im Mittelpunkt: Das Neue Testament sei **selbst antisemitisch** (Jules Isaac, Rosemary Ruether, Hyam Maccoby); Jesus sei ein **jüdischer Reformer** gewesen, den erst die hellenistische Kirche vergöttlicht habe (Joseph Klausner, Geza Vermes); wenn Jesus der Messias wäre, hätten **die Juden ihn erkannt** (Tovia Singer, Michael Skobac); und Israel habe **seinen eigenen Bund** und brauche Jesus nicht (Franz Rosenzweig, Krister Stendahl). Die jüdische Jesusforschung hat dabei viel Wertvolles geleistet: Sie hat Jesus als Juden wiederentdeckt – eine Wahrheit, die die Kirche nie hätte vergessen dürfen.

Die christliche Antwort lebt von Röm 9–11: Gott hat sein Volk nicht verstoßen; seine Gaben und Berufung sind unwiderruflich; die Heidenchristen sind in den Ölbaum Israel eingepfropft und dürfen sich nicht rühmen. Zugleich bekennt das Neue Testament – geschrieben von Juden – Jesus als den Messias Israels und den Erlöser aller. Für Kopten kommt hinzu: Alexandrien war die Stadt der Septuaginta, Philos und des „schriftgewaltigen" Apollos, eines Juden, der „aus der Schrift erwies, dass Jesus der Christus ist" (Apg 18,24–28).`,
  strategy: `**1. Mit Bekenntnis beginnen.** Sprich die Schuld der Christen an, bevor dein Gegenüber es tun muss – ohne Relativierung („Das waren keine echten Christen"). Glaubwürdigkeit entsteht durch Ehrlichkeit.

**2. Das Judentum Jesu und des Neuen Testaments betonen.** Jesus, Maria, die Apostel, Paulus und fast alle Verfasser waren Juden. Viele Einwände lösen sich, wenn die Texte als innerjüdische Gespräche gelesen werden.

**3. Empfohlene Reihenfolge:**
- **Antisemitismus-Vorwurf:** Schuld bekennen → Zusammenhang der Texte (Joh 8,31; Mt 27,20; 1 Thess 2,14) → prophetische Tradition → Röm 9–11 → das „entjudete" NT der Nazis.
- **„Jüdischer Reformer":** Markus 2,7 und 14,62 → Maranatha und 1 Kor 8,6 → Hurtado/Bauckham/Boyarin.
- **„Die Juden lehnten ihn ab":** Urgemeinde (Apg 2,41; 6,7; 21,20) → Rest-Theologie → Akiva und Bar Kochba.
- **Zwei Wege:** Bund unwiderruflich → Apg 4,12 an die Ältesten Israels → Röm 10,1; 11,23 → Jer 31,31.

**4. Typische Fallen:**
- Ersetzungstheologie, „Gottesmord", „verstockte Juden" – falsch und verletzend.
- Nahostpolitik ins Gespräch tragen.
- Das Trilemma als Totschlagargument.
- Über das ewige Geschick Einzelner urteilen.

**5. Haltung:** Paulus' Schmerz und Hoffnung (Röm 9,2; 10,1; 11,26). Du sprichst mit einem älteren Bruder im Glauben an den Gott Abrahams.`,
  keyOpponents: [
    { name: 'Jules Isaac', role: 'Französisch-jüdischer Historiker (1877–1963)', work: 'L\'enseignement du mépris (1962)' },
    { name: 'Rosemary Radford Ruether', role: 'Katholische Theologin (1936–2022)', work: 'Faith and Fratricide (1974)' },
    { name: 'Hyam Maccoby', role: 'Britisch-jüdischer Religionswissenschaftler (1924–2004)', work: 'The Mythmaker (1986)' },
    { name: 'Joseph Klausner', role: 'Jüdischer Historiker (1874–1958)', work: 'Jeschu ha-Nozri (1922)' },
    { name: 'Geza Vermes', role: 'Jüdischer Religionshistoriker (1924–2013), Oxford', work: 'Jesus the Jew (1973)' },
    { name: 'Rabbi Tovia Singer', role: 'Gründer von Outreach Judaism', work: 'Let\'s Get Biblical! (2014)' },
    { name: 'Franz Rosenzweig', role: 'Jüdischer Religionsphilosoph (1886–1929)', work: 'Der Stern der Erlösung (1921)' },
    { name: 'Amy-Jill Levine', role: 'Jüdische Neutestamentlerin; Kritikerin antijüdischer Auslegung', work: 'The Misunderstood Jew (2006); The Jewish Annotated New Testament (Hg., 2011)' },
  ],
  claims: [ntAntisemitisch, jesusJuedischerReformer, judenLehntenAb, zweiWegeBund],
  newPeople: [
    {
      id: 'james-parkes',
      name: 'James Parkes',
      years: '1896–1981',
      era: 'modern',
      tradition: 'anglikanisch',
      title: 'Anglikanischer Priester und Historiker der christlich-jüdischen Beziehungen',
      fields: ['Antijudaismus', 'Kirchengeschichte', 'Christlich-jüdischer Dialog'],
      bio: 'Britischer Geistlicher und Historiker, der als einer der ersten Christen die Wurzeln des Antisemitismus in der christlichen Tradition schonungslos aufarbeitete. Er setzte sich zeitlebens für die Versöhnung von Kirche und Judentum ein.',
      keyWorks: ['The Conflict of the Church and the Synagogue (1934)'],
    },
    {
      id: 'luke-timothy-johnson',
      name: 'Luke Timothy Johnson',
      years: 'geb. 1943',
      era: 'modern',
      tradition: 'katholisch',
      title: 'Neutestamentler, Candler School of Theology (Emory University)',
      fields: ['Neues Testament', 'Antike Polemik', 'Lukas-Schriften'],
      bio: 'Amerikanischer katholischer Neutestamentler, ehemaliger Benediktinermönch. Sein Aufsatz über die neutestamentliche Polemik gegen Juden im Licht antiker Streitkonventionen (1989) wurde zu einem Standardtext der Debatte.',
      keyWorks: ['The New Testament\'s Anti-Jewish Slander and the Conventions of Ancient Polemic (JBL 1989)', 'The Writings of the New Testament (1986)'],
    },
    {
      id: 'jakob-jocz',
      name: 'Jakob Jocz',
      years: '1906–1983',
      era: 'modern',
      tradition: 'messianisch',
      title: 'Jüdisch-christlicher (hebräisch-christlicher) Theologe, Toronto',
      fields: ['Christlich-jüdische Kontroverse', 'Judenchristentum'],
      bio: 'In Litauen geborener jüdischer Christ und anglikanischer Geistlicher, später Professor für systematische Theologie in Toronto. Er untersuchte die Geschichte der Auseinandersetzung zwischen Kirche und Synagoge aus der Sicht eines Juden, der an Jesus glaubt.',
      keyWorks: ['The Jewish People and Jesus Christ (1949)'],
    },
  ],
};

export default topic;
