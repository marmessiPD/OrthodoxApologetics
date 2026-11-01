import type { Topic } from '../../../schema.ts';
import schiaImamat from './schia-imamat.ts';
import ahmadiyyaJesusKaschmir from './ahmadiyya-jesus-kaschmir.ts';
import sufismusMystik from './sufismus-mystik.ts';
import islamSchnellstwachsend from './islam-schnellstwachsend.ts';

const topic: Topic = {
  id: 'islam-stroemungen',
  category: 'religionen',
  group: 'Islam',
  order: 11,
  title: `Schia, Ahmadiyya, Sufismus`,
  subtitle: `Die Vielfalt des Islam: Imamat und verborgener Imam, Jesus in Kaschmir, mystische Gotteserfahrung – und das Argument vom schnellsten Wachstum`,
  icon: 'git-fork',
  overview: `„Der Islam" begegnet dir im Gespräch selten als einheitlicher Block. Neben der sunnitischen Mehrheit (rund 85–90 % der Muslime) stehen die **Schia** – vor allem die Zwölferschia in Iran, Irak, Libanon und Bahrain –, die mystische Tradition des **Sufismus**, die quer durch Sunniten und Schiiten verläuft, und kleinere Bewegungen wie die **Ahmadiyya**, die von den meisten Muslimen nicht als muslimisch anerkannt wird, in Deutschland aber sehr aktiv ist. Jede dieser Strömungen stellt eigene Fragen und bringt eigene Einwände gegen den christlichen Glauben vor.

Die Schia fragt nach **verbürgter Leitung**: Ein Buch allein spricht nicht – es braucht einen irrtumsfreien Ausleger. Die Ahmadiyya bietet eine eigene Antwort auf das Rätsel von Sure 4:157: Jesus sei gekreuzigt worden, aber **nicht am Kreuz gestorben**, sondern nach Kaschmir gewandert. Der Sufismus sucht die **innere Erfahrung Gottes** und wird gern als Beweis angeführt, dass christliche und islamische Mystik im Kern dasselbe seien. Und quer durch alle Gruppen begegnet das populäre Argument, der Islam sei die **am schnellsten wachsende Religion** – und damit wahr.

Für den christlichen Gesprächspartner ist dieses Feld besonders lohnend, weil hier oft die **tiefsten Sehnsüchte** sichtbar werden: nach einem lebendigen Führer, nach dem erlösenden Leiden eines Unschuldigen (Kerbela), nach der Liebe Gottes um ihrer selbst willen (Rabi'a), nach einem Jesus, der nicht vom Kreuz „weggezaubert" wird. Das Evangelium kann an jede dieser Sehnsüchte anknüpfen.`,
  strategy: `**1. Frag zuerst, wer dir gegenübersitzt.** Sunnit, Schiit, Ahmadi, Sufi? Wer einem Ahmadi mit der sunnitischen Ersatztheorie kommt oder einem Schiiten mit Abu-Bakr-Argumenten, hat schon verloren. Frag freundlich nach Herkunft und Prägung.

**2. Nimm nie Partei im innerislamischen Streit.** Du bist weder Schiedsrichter zwischen Sunna und Schia noch Verbündeter der Sunniten gegen die Ahmadiyya. Stehe für die Religionsfreiheit aller ein – besonders der verfolgten Ahmadis und Schiiten.

**3. Knüpfe an die Sehnsucht an:**
- **Schia:** lebendige Leitung → Christus, der ewig lebende Hohepriester; Kerbela → das freiwillige Leiden des Sündlosen.
- **Ahmadiyya:** Sie gibt die Kreuzigung zu → nur noch die Frage, ob Jesus starb; dann die Belege für Tod und Auferstehung.
- **Sufismus:** Gottesliebe um ihrer selbst willen → der Gott, der „uns zuerst geliebt hat" und Mensch wurde.

**4. Beim Wachstumsargument:** Zahlen zugeben, Ursachen erklären (Geburtenrate), Fehlschluss benennen (Mehrheit ≠ Wahrheit), dann das Gespräch auf Belege lenken.

**5. Typische Fallen:** Übertreibungen („Die Schiiten haben einen anderen Koran", „Sufis sind heimliche Christen", „Bald ist Europa islamisch"), Häme über Verfolgung, Polemik gegen Personen. Hart in der Logik, sanft im Ton.`,
  keyOpponents: [
    { name: 'Allama Muhammad Husayn Tabataba\'i', role: 'Schiitischer Philosoph und Exeget (1903–1981)', work: 'Shi\'ite Islam; Tafsir al-Mizan' },
    { name: 'Sayyid Ammar Nakshawani', role: 'Schiitischer Prediger (Großbritannien)', work: 'Vorträge zu Imamat und Kerbela' },
    { name: 'Mirza Ghulam Ahmad', role: 'Gründer der Ahmadiyya (1835–1908)', work: 'Masih Hindustan Mein (Jesus in Indien)' },
    { name: 'Mirza Tahir Ahmad', role: 'Vierter Kalif der Ahmadiyya Muslim Jamaat (1928–2003)', work: 'Christianity: A Journey from Facts to Fiction (1994)' },
    { name: 'Seyyed Hossein Nasr', role: 'Islamischer Philosoph, Perennialist', work: 'Sufi Essays; The Garden of Truth' },
    { name: 'Zakir Naik', role: 'Indischer Prediger, Peace TV', work: 'Vorträge zur Ausbreitung des Islam' },
    { name: 'Mohammed Hijab', role: 'Britischer muslimischer Apologet', work: 'Debatten zu Demografie und Säkularisierung' },
  ],
  claims: [schiaImamat, ahmadiyyaJesusKaschmir, sufismusMystik, islamSchnellstwachsend],
  newPeople: [
    {
      id: 'louis-massignon',
      name: 'Louis Massignon',
      years: '1883–1962',
      era: 'modern',
      tradition: 'katholisch',
      title: 'Islamwissenschaftler, Collège de France',
      fields: ['Sufismus', 'al-Halladsch', 'Christlich-islamische Begegnung'],
      bio: 'Französischer Orientalist, der nach einer Bekehrungserfahrung 1908 zum katholischen Glauben zurückfand. Sein Lebenswerk galt dem Mystiker al-Halladsch, dessen Gottesliebe er mit großer Ehrfurcht erforschte. Er prägte die katholische Haltung gegenüber dem Islam im 20. Jahrhundert maßgeblich.',
      keyWorks: ['La Passion de Husayn Ibn Mansûr Hallâj (1922)', 'Essai sur les origines du lexique technique de la mystique musulmane (1922)'],
    },
    {
      id: 'david-garrison',
      name: 'David Garrison',
      years: 'zeitgenössisch',
      era: 'modern',
      tradition: 'evangelisch',
      title: 'Missionsforscher (Southern Baptist)',
      fields: ['Mission unter Muslimen', 'Religionswechsel'],
      bio: 'Amerikanischer Missionswissenschaftler, der Bewegungen von Muslimen dokumentiert hat, die Christus nachfolgen. Seine Studie beruht auf Interviews in zahlreichen Ländern der islamischen Welt; seine Zahlen sind Schätzungen.',
      keyWorks: ['A Wind in the House of Islam (2014)', 'Church Planting Movements (2004)'],
    },
  ],
};

export default topic;
