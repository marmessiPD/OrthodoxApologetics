import type { Topic } from '../../../schema.ts';
import zoroastrismusKopiert from './zoroastrismus-kopiert.ts';
import jainismusAhimsa from './jainismus-ahimsa.ts';
import ahnenverehrungWieHeilige from './ahnenverehrung-wie-heilige.ts';
import afrikaReligionDerKolonialherren from './afrika-religion-der-kolonialherren.ts';
import satanismusSelbstbestimmung from './satanismus-selbstbestimmung.ts';

const topic: Topic = {
  id: 'weitere-religionen-2',
  category: 'religionen',
  group: 'Weitere Religionen',
  order: 2,
  title: `Zoroastrismus, Jainismus, Ahnenkulte & Satanismus`,
  subtitle: `Persische Einflüsse, Gewaltlosigkeit ohne Schöpfer, Ahnen und Heilige, Afrikas Christentum und die Selbstvergötterung`,
  icon: 'flame',
  overview: `Dieser Themenblock bündelt Gesprächssituationen, die auf den ersten Blick wenig miteinander zu tun haben, aber eine gemeinsame Frage berühren: **Ist das Christentum nur ein Produkt seiner Umwelt – oder Gottes Offenbarung in der Geschichte?** Religionsgeschichtlich gebildete Gesprächspartner behaupten, Engel, Satan, Gericht und Auferstehung seien aus dem **Zoroastrismus** übernommen. Bewunderer des **Jainismus** halten dessen radikale Gewaltlosigkeit ohne Schöpfergott für ethisch überlegen. Religionswissenschaftler und Protestanten setzen **Ahnenverehrung** und Heiligenverehrung gleich. Afrikanische Intellektuelle nennen das Christentum die **Religion der Kolonialherren**. Und moderne **Satanisten** stellen sich als aufgeklärte Rationalisten dar, die nur Selbstbestimmung lehren.

Gerade für die koptische Kirche sind diese Fragen keine Theorie. Sie ist eine **afrikanische Kirche**, gegründet vom Evangelisten Markus, älter als die Christianisierung der meisten Völker Europas, die Mutterkirche der äthiopischen Kirche und nie eine Kolonialmacht. Sie lebt seit Jahrhunderten die Gemeinschaft der Heiligen, betet für ihre Entschlafenen und kennt aus der Wüstentradition des hl. Antonius einen nüchternen, angstfreien Umgang mit dem Bösen. Ihre Fastenpraxis mit rund 200 weitgehend veganen Tagen im Jahr ist Jains näher, als diese vermuten.

Der rote Faden ist in allen fünf Fällen derselbe: **Würdige das Wahre und Gute in der anderen Position, prüfe die Belege nüchtern und führe das Gespräch zur Person Jesu Christi.** Datierungsfragen (Zoroastrismus), Begründungsfragen (Jainismus), Unterscheidungen (Ahnen/Heilige), historische Fakten (Afrika) und die Frage nach wahrer Freiheit (Satanismus) sind jeweils die Hebel.`,
  strategy: `**1. Zoroastrismus – Datierung zuerst.** Frage nach der Quelle: Wann wurde die persische Lehre von Auferstehung und Weltgericht schriftlich fixiert? (Avesta sasanidisch, Bundahischn 9. Jh.) Dann zeige vorexilische Bibeltexte (Gen 3; Gen 28; Jes 6; Hos 6; Ez 37) und den inhaltlichen Gegensatz: Satan ist Geschöpf, kein Gegengott (Jes 45,7; Hi 1,12). Gib echte Lehnwörter (*pardēs*, Asmodäus) offen zu.

**2. Jainismus – erst würdigen, dann nach dem Grund fragen.** Ahimsa ist ehrenwert. Die entscheidenden Fragen: Warum ist Leben wertvoll, wenn das Universum unpersönlich ist? Hat ein krankes Kind sein Leid verdient? Warum gibt es überhaupt etwas?

**3. Ahnen und Heilige – unterscheiden statt verurteilen.** Grund (Heiligkeit statt Abstammung), Beziehung (keine Versorgung, keine Furcht), Opfer (nur für Gott), keine Totenbefragung. Pastoral: Ehre die Eltern, bete für die Entschlafenen, vertraue die Vorfahren Gottes Barmherzigkeit an.

**4. Afrika – Geschichte erzählen.** Apg 8, Markus in Alexandrien, Frumentius und Athanasius, Nubien, Adwa 1896. Gib koloniale Schuld ehrlich zu und zeige, dass das große Wachstum nach der Unabhängigkeit kam.

**5. Satanismus – fair und ohne Panik.** Erkenne an, dass die großen Gruppen atheistisch sind und die „Satanic Panic" Hysterie war. Dann frage nach dem Symbol und nach Gen 3,5. Biete die Freiheit an, die Christus schenkt (Joh 8,36).

**Fallen:** (a) „Zarathustra hat von Mose abgeschrieben" – ebenso unbelegt. (b) Jains, Ahnenverehrer oder Satanisten verspotten. (c) Koloniale Verbrechen beschönigen. (d) Horrorgeschichten über Satanisten weitergeben. (e) Volksfromme Übertreibungen in der eigenen Kirche leugnen.`,
  keyOpponents: [
    { name: 'Mary Boyce', role: 'Iranistin, SOAS London (1920–2006)', work: 'Zoroastrians: Their Religious Beliefs and Practices (1979)' },
    { name: 'Norman Cohn', role: 'Historiker (1915–2007)', work: 'Cosmos, Chaos and the World to Come (1993)' },
    { name: 'Padmanabh S. Jaini', role: 'Jain-Gelehrter, UC Berkeley (1923–2021)', work: 'The Jaina Path of Purification (1979)' },
    { name: 'Jeffery D. Long', role: 'Religionswissenschaftler, Elizabethtown College', work: 'Jainism: An Introduction (2009)' },
    { name: 'Ngũgĩ wa Thiong\'o', role: 'Kenianischer Schriftsteller', work: 'Decolonising the Mind (1986)' },
    { name: 'Okot p\'Bitek', role: 'Ugandischer Dichter und Religionswissenschaftler (1931–1982)', work: 'African Religions in Western Scholarship (1970)' },
    { name: 'Anton Szandor LaVey', role: 'Gründer der Church of Satan (1930–1997)', work: 'The Satanic Bible (1969)' },
    { name: 'Lucien Greaves', role: 'Mitbegründer von The Satanic Temple', work: 'Seven Tenets (2013 ff.)' },
  ],
  newPeople: [
    {
      id: 'james-barr',
      name: 'James Barr',
      years: '1924–2006',
      era: 'modern',
      tradition: 'evangelisch',
      title: 'Alttestamentler, Oxford und Vanderbilt University',
      fields: ['Altes Testament', 'Biblische Semantik', 'Religionsgeschichte'],
      bio: 'Schottischer Alttestamentler und Pfarrer der Church of Scotland, lehrte u. a. in Edinburgh, Manchester, Oxford (Oriel Professor of the Interpretation of Holy Scripture) und an der Vanderbilt University. Bekannt für seine Kritik an unsauberen Wortstudien in der Bibelwissenschaft und für eine nüchterne Prüfung der These zoroastrischer Einflüsse auf Judentum und Christentum.',
      keyWorks: ['The Semantics of Biblical Language (1961)', 'Fundamentalism (1977)', '„The Question of Religious Influence: The Case of Zoroastrianism, Judaism, and Christianity", JAAR 53 (1985)'],
      caveat: 'Barr war ein kritischer Bibelwissenschaftler und scharfer Kritiker des Fundamentalismus, kein Apologet; er wird hier für seine methodische Prüfung der Einflussfrage zitiert.',
    },
    {
      id: 'kwame-bediako',
      name: 'Kwame Bediako',
      years: '1945–2008',
      era: 'modern',
      tradition: 'evangelisch',
      title: 'Theologe, Gründer des Akrofi-Christaller-Instituts (Akropong, Ghana)',
      fields: ['Afrikanische Theologie', 'Weltchristentum', 'Ahnen-Christologie'],
      bio: 'Ghanaischer Theologe der Presbyterianischen Kirche von Ghana, der nach einer Phase des Atheismus zum Glauben fand. Er deutete das afrikanische Christentum als Erneuerung des Christentums als nichtwestlicher Religion und entwickelte eine Christologie, die Christus als den wahren, höchsten Ahnen versteht.',
      keyWorks: ['Theology and Identity (1992)', 'Christianity in Africa: The Renewal of a Non-Western Religion (1995)', 'Jesus in Africa (2000)'],
    },
    {
      id: 'john-mbiti',
      name: 'John S. Mbiti',
      years: '1931–2019',
      era: 'modern',
      tradition: 'anglikanisch',
      title: 'Religionswissenschaftler und Theologe, Makerere University; später in der Schweiz',
      fields: ['Afrikanische Religionen', 'Afrikanische Theologie', 'Religionsphilosophie'],
      bio: 'Kenianischer anglikanischer Priester und Gelehrter, gilt als einer der Begründer der modernen afrikanischen Theologie. Sein Werk „African Religions and Philosophy" (1969) prägte das Bild afrikanischer Religionen; er dokumentierte den Glauben vieler afrikanischer Völker an einen höchsten Schöpfergott und prägte den Begriff der „lebenden Toten" für die Ahnen.',
      keyWorks: ['African Religions and Philosophy (1969)', 'Concepts of God in Africa (1970)'],
    },
    {
      id: 'thomas-oden',
      name: 'Thomas C. Oden',
      years: '1931–2016',
      era: 'modern',
      tradition: 'evangelisch',
      title: 'Methodistischer Theologe, Drew University; Hauptherausgeber des „Ancient Christian Commentary on Scripture"',
      fields: ['Patristik', 'Frühes afrikanisches Christentum', 'Paläo-Orthodoxie'],
      bio: 'Amerikanischer Theologe, der sich nach einer liberalen Phase den Kirchenvätern zuwandte und für eine Rückkehr zum altkirchlichen Konsens („Paläo-Orthodoxie") eintrat. Er leitete den Ancient Christian Commentary on Scripture und gründete ein Zentrum zur Erforschung des frühen afrikanischen Christentums.',
      keyWorks: ['How Africa Shaped the Christian Mind (2007)', 'The African Memory of Mark (2011)'],
      caveat: 'Einige seiner Thesen über den Umfang afrikanischen Einflusses werden in der Forschung diskutiert.',
    },
  ],
  claims: [zoroastrismusKopiert, jainismusAhimsa, ahnenverehrungWieHeilige, afrikaReligionDerKolonialherren, satanismusSelbstbestimmung],
};

export default topic;
