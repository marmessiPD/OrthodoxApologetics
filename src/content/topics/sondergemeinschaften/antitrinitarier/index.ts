import type { Topic } from '../../../schema.ts';
import onenessModalismus from './oneness-modalismus.ts';
import trinitaetInNizaaErfunden from './trinitaet-in-nizaa-erfunden.ts';
import jesusNurBesondererMensch from './jesus-nur-besonderer-mensch.ts';

const topic: Topic = {
  id: 'antitrinitarier',
  category: 'sondergemeinschaften',
  group: 'Antitrinitarier',
  order: 1,
  title: `Antitrinitarier`,
  subtitle: `Oneness-Pfingstler, biblische Unitarier und die These „Nizäa hat die Trinität erfunden"`,
  icon: 'split',
  overview: `Die Lehre von der Dreieinigkeit wird von zwei entgegengesetzten Seiten bestritten. **Modalisten** – heute vor allem die Oneness-Pfingstbewegung (United Pentecostal Church International, gegründet 1945; Theologe: David K. Bernard) – bekennen die volle Gottheit Jesu, lehnen aber ewige Unterscheidungen in Gott ab: Vater, Sohn und Geist seien Offenbarungsweisen des einen Gottes, der Name dieses Gottes sei Jesus. **Unitarier** – heute etwa Anthony Buzzard, Dale Tuggy, die Christadelphians, historisch die Sozinianer, in anderer Form die Zeugen Jehovas (eigenes Topic) – halten Jesus für einen von Gott gesandten, aber geschaffenen bzw. rein menschlichen Messias. Beide berufen sich auf den biblischen Monotheismus und auf die These, die Trinität sei ein späteres Produkt griechischer Philosophie und kaiserlicher Kirchenpolitik in Nizäa (325).

Die Forschung der letzten Jahrzehnte hat diese These erheblich geschwächt: Larry Hurtado und Richard Bauckham zeigten, dass Jesus in jüdisch-christlichen Gemeinden schon in den ersten Jahren nach Ostern angebetet und in die Identität des einen Gottes Israels einbezogen wurde (1 Kor 8,6; Phil 2,6–11). Selbst der agnostische Neutestamentler Bart Ehrman räumt ein, dass Paulus Jesus bereits als präexistentes göttliches Wesen verstand. Zugleich ist ehrlich festzuhalten: Die Fachbegriffe (homoousios, Hypostase) wurden erst im 3. und 4. Jahrhundert geprägt, manche vornizänische Väter formulierten unterordnend, und Kaiser Konstantin hatte Einfluss auf das Konzil.

Für die koptisch-orthodoxe Kirche ist dieses Thema Herzensangelegenheit: Die großen Verteidiger der Dreieinigkeit – Papst Alexander, der Arius als Erster entgegentrat, der hl. Athanasius, der fünfmal für den Glauben von Nizäa verbannt wurde, Didymus der Blinde und der hl. Kyrill – waren Alexandriner. Die Kirche bekennt einen Gott in drei Hypostasen, tauft mit dreimaligem Untertauchen auf den Namen des Vaters, des Sohnes und des Heiligen Geistes und betet das Bekenntnis von Nizäa-Konstantinopel (ohne Filioque) in jeder Liturgie.`,
  strategy: `**1. Erst den Gesprächspartner einordnen.** Frag: „Ist Jesus für dich Gott?" – Ein Oneness-Gläubiger sagt Ja (dann geht es um die Unterscheidung von Vater und Sohn), ein Unitarier sagt Nein (dann geht es um die Gottheit Christi). Viele Argumente, die gegen den einen helfen, helfen nicht gegen den anderen.

**2. Gegenüber Oneness-Gläubigen:** Würdige die gemeinsame Überzeugung von der Gottheit Jesu. Führe dann zu den Ich-Du-Beziehungen: Taufe Jesu (Mk 1,10–11), Joh 17,5.24, „ein anderer Beistand" (Joh 14,16). Frage: „Mit wem spricht Jesus in Joh 17?" Zeige die christologische Folge: Wenn nur die Menschheit zur Gottheit betet, zerfällt Christus in zwei (Ephesus 431).

**3. Gegenüber Unitariern:** Beginne bei den frühesten Texten (1 Kor 8,6; Phil 2,6–11; 1 Kor 16,22) und den Kennzeichen des einen Gottes: Schöpfung, Herrschaft, Anbetung. Lass die JHWH-Zitate sprechen (Jes 45,23 in Phil 2,10; Ps 102 in Hebr 1,10; Joel 3,5 in Röm 10,13).

**4. Gegen die Nizäa-These:** Arbeite mit einer Zeitleiste: Neues Testament (50–100), Ignatius (110), Plinius (112), Didache, Justin (155), Athenagoras (177), Theophilus (180), Irenäus (180), Tertullian (213), Origenes, Dionysius (260), Arius (318), Nizäa (325), Konstantinopel (381). Gib ehrlich zu, was stimmt (Begriffe, Konstantins Rolle, unterordnende Väterzitate) – das macht deine übrigen Punkte glaubwürdig.

**5. Fallen vermeiden:** Kein Comma Johanneum (1 Joh 5,7), keine modalistischen Bilder (Wasser–Eis–Dampf), keine Behauptung, Nizäa habe den Kanon festgelegt, keine Herabsetzung der Gesprächspartner. Ziel ist nicht, eine Debatte zu „gewinnen", sondern Christus so zu bezeugen, wie die Kirche ihn seit den Aposteln anbetet.`,
  keyOpponents: [
    { name: 'David K. Bernard', role: 'Generalsuperintendent der United Pentecostal Church International; führender Oneness-Theologe', work: 'The Oneness of God (1983)' },
    { name: 'Anthony F. Buzzard', role: 'Biblischer Unitarier, Restoration Fellowship / Atlanta Bible College', work: 'The Doctrine of the Trinity: Christianity\'s Self-Inflicted Wound (1998); Jesus Was Not a Trinitarian (2007)' },
    { name: 'Dale Tuggy', role: 'Religionsphilosoph, unitarischer Theologe, Podcast „Trinities"', work: 'What Is the Trinity? (2017)' },
    { name: 'Kegan Chandler', role: 'Unitarischer Autor', work: 'The God of Jesus in Light of Christian Dogma (2016)' },
    { name: 'Bart D. Ehrman', role: 'Neutestamentler, UNC Chapel Hill (Entwicklungsthese, kein Unitarier im religiösen Sinn)', work: 'How Jesus Became God (2014)' },
  ],
  claims: [onenessModalismus, trinitaetInNizaaErfunden, jesusNurBesondererMensch],
  newPeople: [
    {
      id: 'ignatius-antiochien',
      name: 'Hl. Ignatius von Antiochien',
      years: 'gest. um 110–117',
      era: 'patristisch',
      tradition: 'ungeteilt',
      title: 'Bischof von Antiochien, Märtyrer',
      fields: ['Gottheit Christi', 'Kirche', 'Eucharistie'],
      bio: 'Bischof von Antiochien, der unter Kaiser Trajan nach Rom gebracht und dort den wilden Tieren vorgeworfen wurde. Auf dem Weg schrieb er sieben Briefe an Gemeinden und an Polykarp von Smyrna, in denen er Jesus Christus wiederholt „unseren Gott" nennt und die Einheit der Kirche um den Bischof und die Eucharistie betont.',
      keyWorks: ['Briefe an die Epheser, Magnesier, Trallianer, Römer, Philadelphier, Smyrnäer und an Polykarp'],
    },
    {
      id: 'hippolyt-rom',
      name: 'Hippolyt von Rom',
      years: 'ca. 170–235',
      era: 'patristisch',
      tradition: 'ungeteilt',
      title: 'Presbyter und Theologe in Rom, Märtyrer',
      fields: ['Trinität', 'Modalismus', 'Widerlegung der Häresien'],
      bio: 'Bedeutender griechisch schreibender Theologe der römischen Kirche. Er bekämpfte den Modalismus des Noëtus und Sabellius und starb nach der Verbannung in die Bergwerke Sardiniens.',
      keyWorks: ['Gegen Noëtus (Contra Noetum)', 'Kommentar zu Daniel'],
      caveat: 'Stand zeitweise im Konflikt mit dem römischen Bischof Kallist; die Zuschreibung einiger ihm zugeschriebener Werke (z. B. Refutatio, Traditio Apostolica) ist in der Forschung umstritten.',
    },
    {
      id: 'alexander-alexandrien',
      name: 'Hl. Alexander I. von Alexandrien',
      years: 'gest. 326/328',
      era: 'patristisch',
      tradition: 'koptisch',
      title: '19. Papst von Alexandrien',
      fields: ['Gottheit Christi', 'Arianischer Streit', 'Nizäa'],
      bio: 'Erkannte als Erster die Tragweite der Lehre seines Presbyters Arius und schloss ihn um 318–320 auf einer Synode in Alexandrien aus der Kirchengemeinschaft aus. Er nahm mit seinem Diakon Athanasius, seinem späteren Nachfolger, am Konzil von Nizäa (325) teil.',
      keyWorks: ['Rundschreiben „Henos sōmatos" (bei Sokrates, Kirchengeschichte I,6)', 'Brief an Alexander von Thessalonike (bei Theodoret, Kirchengeschichte I,4)'],
    },
    {
      id: 'lewis-ayres',
      name: 'Lewis Ayres',
      years: 'zeitgenössisch',
      era: 'modern',
      tradition: 'katholisch',
      title: 'Historiker der Alten Kirche, Durham University',
      fields: ['Trinitätslehre des 4. Jahrhunderts', 'Nizäa', 'Patristik'],
      bio: 'Sein Standardwerk über die trinitarische Theologie des 4. Jahrhunderts zeigt, wie sich zwischen 325 und 381 eine „pro-nizänische" Theologie herausbildete, und widerlegt vereinfachende Darstellungen Nizäas als kaiserliches Diktat.',
      keyWorks: ['Nicaea and Its Legacy: An Approach to Fourth-Century Trinitarian Theology (2004)'],
      caveat: 'Katholischer Theologe; hier ausschließlich als Historiker des 4. Jahrhunderts herangezogen.',
    },
  ],
};

export default topic;
