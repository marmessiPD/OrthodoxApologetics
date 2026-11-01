import type { Topic } from '../../../schema.ts';
import joh11EinGott from './joh-1-1-ein-gott.ts';
import jesusIstMichaelGeschoepf from './jesus-ist-michael-geschoepf.ts';
import heiligerGeistKraft from './heiliger-geist-kraft.ts';
import nameJehova from './name-jehova.ts';
import wachtturmGottesKanal from './wachtturm-gottes-kanal.ts';
import pfahlSeeleHoelle from './pfahl-seele-hoelle.ts';

const topic: Topic = {
  id: 'zeugen-jehovas',
  category: 'sondergemeinschaften',
  group: 'Zeugen Jehovas',
  order: 1,
  title: `Zeugen Jehovas`,
  subtitle: `Johannes 1,1, Michael, der Heilige Geist, der Gottesname und die Autorität der leitenden Körperschaft`,
  icon: 'door-open',
  overview: `Die Zeugen Jehovas gingen aus der Bibelforscherbewegung hervor, die Charles Taze Russell in den 1870er-Jahren in Pennsylvania gründete; den heutigen Namen nahmen sie 1931 an. Weltweit zählen sie über acht Millionen aktive Verkündiger, in Deutschland deutlich über 150.000. Ihre Lehre wird zentral von der leitenden Körperschaft bestimmt und über den *Wachtturm*, die Neue-Welt-Übersetzung (NWÜ) und ein dichtes Versammlungsleben vermittelt. Viele Zeugen sind aufrichtige, disziplinierte und bibelkundige Menschen; unter dem Nationalsozialismus und in der DDR wurden sie schwer verfolgt.

Theologisch erneuern die Zeugen Jehovas im Kern die Lehre des **Arius**, eines alexandrinischen Presbyters des 4. Jahrhunderts: Jesus sei das erste Geschöpf Gottes (identisch mit dem Erzengel Michael), der Heilige Geist eine unpersönliche Kraft. Hinzu kommen die Leugnung der Unsterblichkeit der Seele und der ewigen Strafe, die Pflicht zum Gebrauch des Namens „Jehova", die Lehre von der unsichtbaren Wiederkunft Christi 1914 und der Anspruch der leitenden Körperschaft, Gottes einziger Kanal zu sein.

Für koptische Christen ist diese Debatte vertraut: Sie wurde in **Alexandrien** geführt. Der hl. Athanasius, der Apostolische, verteidigte gegen Arius die Gottheit des Sohnes und schrieb seine Briefe an Serapion über den Heiligen Geist an einen Bischof im Nildelta. Wer die koptischen Väter kennt, hat auf fast jedes Argument der Zeugen Jehovas eine 1700 Jahre alte, durchdachte Antwort.`,
  strategy: `**1. Beziehung vor Argument.** Zeugen Jehovas kommen meist zu zweit und mit vorbereiteten Gesprächsabläufen. Biete ein ruhiges Gespräch an, lies **gemeinsam in deiner Bibel** (und vergleiche mit ihrer NWÜ), statt nur Broschüren auszutauschen.

**2. Eine Frage zur Zeit – beginne bei Jesus.** Die Person Christi ist der Kern. Empfohlene Reihenfolge: Joh 1,1–3 (Schöpfer, nicht Geschöpf) → Hebr 1 (über den Engeln, von Engeln angebetet) → Joh 20,28 und Joh 8,58 → Kol 1,16 (das eingefügte „andere"). Erst danach Geist, Seele, Hölle.

**3. Fragen statt Behauptungen.** Die stärksten Werkzeuge sind Rückfragen: „Ist Jesus ein wahrer oder ein falscher Gott?" – „Warum übersetzt die NWÜ *theos* ohne Artikel in Joh 1,6 mit ‚Gott'?" – „Zu welchem Engel hat Gott je gesagt: Du bist mein Sohn?"

**4. Autorität als zweites Thema.** Wenn exegetische Argumente mit „Die Organisation erklärt das anders" beantwortet werden, wechsle behutsam zur Frage der Autorität: Dtn 18,22, die Daten 1914/1925/1975 und die eigene Aussage, die leitende Körperschaft sei „weder inspiriert noch unfehlbar".

**5. Fallen vermeiden.** Keine erfundenen oder ungeprüften Wachtturm-Zitate aus dem Internet; keine schwachen Grammatikargumente (Colwell-Umkehrung, maskulines *ekeinos*); kein Spott. Respektiere, dass ein Zeuge bei Zweifeln viel verlieren kann (Familie, Freunde) – sei bereit, langfristig Freund zu bleiben.`,
  keyOpponents: [
    { name: 'Leitende Körperschaft der Zeugen Jehovas', role: 'Oberstes Lehrgremium, Warwick (New York)', work: 'Der Wachtturm; Neue-Welt-Übersetzung (rev. 2013, dt. 2018)' },
    { name: 'Jason David BeDuhn', role: 'Religionswissenschaftler, Northern Arizona University (kein Zeuge)', work: 'Truth in Translation (2003)' },
    { name: 'Greg Stafford', role: 'Apologet der Zeugen-Jehovas-Theologie', work: 'Jehovah\'s Witnesses Defended (2000)' },
    { name: 'Rolf Furuli', role: 'Semitist, Universität Oslo (Zeuge Jehovas)', work: 'The Role of Theology and Bias in Bible Translation (1999)' },
  ],
  claims: [joh11EinGott, jesusIstMichaelGeschoepf, heiligerGeistKraft, nameJehova, wachtturmGottesKanal, pfahlSeeleHoelle],
  newPeople: [
    {
      id: 'murray-harris',
      name: 'Murray J. Harris',
      years: 'zeitgenössisch',
      era: 'modern',
      tradition: 'evangelisch',
      title: 'Neutestamentler, emeritierter Professor, Trinity Evangelical Divinity School',
      fields: ['Griechisches Neues Testament', 'Gottheit Christi', 'Auferstehung'],
      bio: 'Neuseeländischer Neutestamentler. Seine Monografie „Jesus as God" untersucht alle Stellen des Neuen Testaments, an denen Jesus möglicherweise „theos" genannt wird, und gilt als Standardwerk zur Frage.',
      keyWorks: ['Jesus as God: The New Testament Use of Theos in Reference to Jesus (1992)'],
    },
    {
      id: 'raymond-franz',
      name: 'Raymond Franz',
      years: '1922–2010',
      era: 'modern',
      tradition: 'christlich',
      title: 'Ehemaliges Mitglied der leitenden Körperschaft der Zeugen Jehovas (1971–1980)',
      fields: ['Zeugen Jehovas', 'Geschichte der Wachtturm-Gesellschaft'],
      bio: 'Neffe des späteren Wachtturm-Präsidenten Frederick Franz, jahrzehntelang Missionar und Mitglied der leitenden Körperschaft. Nach Gewissenskonflikten über Lehre und Autorität verließ er das Gremium 1980 und wurde 1981 ausgeschlossen. Sein Insiderbericht dokumentiert die Entscheidungsprozesse der Organisation.',
      keyWorks: ['Crisis of Conscience (1983; dt. Der Gewissenskonflikt)', 'In Search of Christian Freedom (1991)'],
      caveat: 'Kein trinitarischer Theologe; zitiert wird er als Zeitzeuge für die inneren Abläufe der Wachtturm-Organisation, nicht als Lehrautorität.',
    },
  ],
};

export default topic;
