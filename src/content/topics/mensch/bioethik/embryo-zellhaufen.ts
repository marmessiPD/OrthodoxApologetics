import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'embryo-zellhaufen',
  title: `„Ein Embryo ist nur ein Zellhaufen – Abtreibung ist Frauenrecht."`,
  proponents: [
    { name: 'Judith Jarvis Thomson', role: 'Philosophin, MIT (gest. 2020)', work: '„A Defense of Abortion", Philosophy & Public Affairs 1 (1971), 47–66' },
    { name: 'Peter Singer', role: 'Bioethiker, Princeton', work: 'Practical Ethics (1979; 3. Aufl. 2011)' },
    { name: 'Mary Anne Warren', role: 'Philosophin (gest. 2010)', work: '„On the Moral and Legal Status of Abortion", The Monist 57 (1973)' },
    { name: 'David Boonin', role: 'Philosoph, University of Colorado', work: 'A Defense of Abortion (2003)' },
    { name: 'Kate Greasley', role: 'Rechtsphilosophin, University College London', work: 'Arguments about Abortion (2017)' },
  ],
  steelman: `Ein Embryo in der frühen Schwangerschaft ist ein Gebilde aus wenigen hundert Zellen, kleiner als ein Stecknadelkopf, ohne Gehirn, ohne Empfindung, ohne Bewusstsein. Bis etwa zum 14. Tag kann er sich noch in Zwillinge teilen – es gibt also noch kein Individuum. Ein großer Teil aller befruchteten Eizellen geht ohnehin natürlich zugrunde, ohne dass jemand trauert. „Mensch" im biologischen Sinn ist nicht dasselbe wie „Person": Moralischen Status haben Wesen mit Bewusstsein, Interessen und Selbstverhältnis (Warren). Und selbst wenn der Fötus eine Person wäre: Niemand ist verpflichtet, seinen Körper neun Monate lang einem anderen zur Verfügung zu stellen – so wenig, wie man verpflichtet wäre, sich an einen bewusstlosen Geiger anschließen zu lassen, der ohne die eigenen Nieren stirbt (Thomson). Verbote verhindern Abtreibungen nicht, sie machen sie gefährlich. Es geht um Gesundheit, Freiheit und Lebenschancen von Frauen – oft in Armut, Gewalt oder Not.`,
  biblical: {
    summary: `Die Schrift spricht vom Ungeborenen als von einem Menschen, den Gott kennt und bildet: „Du warst über mir in meiner Mutter Leibe … Deine Augen sahen mich, da ich noch unbereitet war" (Ps 139,13–16); „Ich kannte dich, ehe denn ich dich im Mutterleibe bereitete" (Jer 1,5). Johannes der Täufer „hüpfte" im Leib Elisabeths, als die schwangere Maria kam (Lk 1,41.44) – Lukas verwendet für das Ungeborene dasselbe Wort (*brephos*) wie für das neugeborene Jesuskind (Lk 2,12) und für Kinder (Lk 18,15). Das Gebot „Du sollst nicht töten" (Ex 20,13) schützt den unschuldigen Menschen. Zugleich ist die Bibel voller Erbarmen für die Bedrängten: Jesus sagt der Frau, die man verurteilen will: „So verdamme ich dich auch nicht; gehe hin und sündige hinfort nicht mehr" (Joh 8,11).`,
    detail: `- **Ps 139,13–16** beschreibt Gottes persönliches Handeln am Ungeborenen – nicht an einem „Gewebe", sondern an einem „Ich".
- **Lk 1,39–44**: Das erste Zeugnis für Christus in den Evangelien gibt ein Ungeborener; die Menschwerdung selbst beginnt mit der Empfängnis im Leib der Theotokos (Lk 1,31).
- **Ex 21,22–25** wird oft als Gegenbeleg angeführt: Wer eine schwangere Frau so stößt, dass „ihr die Kinder abgehen", zahlt bei ausbleibendem Schaden eine Buße. Der hebräische Ausdruck (*weyatse'u yeladeha*, „und ihre Kinder gehen hervor") bezeichnet wahrscheinlich eine Frühgeburt; „Schaden" (*ason*) kann Mutter **und** Kind betreffen. Zudem geht es um ungewollte Verletzung, nicht um gezielte Tötung. Die griechische Übersetzung (Septuaginta) unterschied hier zwischen „geformtem" und „ungeformtem" Fötus – eine Unterscheidung, die Basilius ausdrücklich verwarf.
- **Pastoral:** Die Bibel kennt Barmherzigkeit für Frauen in Not (Jes 49,15; Joh 8,11) und den Auftrag, für die Stimmlosen einzutreten (Spr 31,8).`,
    sources: [
      { kind: 'bibel', work: 'Psalm', ref: '139,13–16', quote: `Denn du hast meine Nieren in deiner Gewalt; du warst über mir in meiner Mutter Leibe. Ich danke dir darüber, daß ich wunderbar gemacht bin … Deine Augen sahen mich, da ich noch unbereitet war, und waren alle Tage auf dein Buch geschrieben, die noch werden sollten.`, translation: 'nach Luther 1912', status: 'paraphrase' },
      { kind: 'bibel', work: 'Jeremia', ref: '1,5', quote: `Ich kannte dich, ehe denn ich dich im Mutterleibe bereitete, und sonderte dich aus, ehe denn du von der Mutter geboren wurdest, und stellte dich zum Propheten unter die Völker.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Lukas', ref: '1,41.44', quote: `Und es begab sich, als Elisabeth den Gruß Marias hörte, hüpfte das Kind in ihrem Leibe … Siehe, da ich die Stimme deines Grußes hörte, hüpfte mit Freuden das Kind in meinem Leibe.`, original: 'ἐσκίρτησεν τὸ βρέφος ἐν τῇ κοιλίᾳ αὐτῆς', translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Exodus', ref: '20,13', quote: `Du sollst nicht töten.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '8,11', quote: `Jesus aber sprach: So verdamme ich dich auch nicht; gehe hin und sündige hinfort nicht mehr!`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Sprüche', ref: '31,8', quote: `Tu deinen Mund auf für die Stummen und für die Sache aller, die verlassen sind.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die Kirche hat von Anfang an das ungeborene Kind geschützt – in einer Kultur, in der Abtreibung und Aussetzung von Neugeborenen verbreitet waren und meist vom Hausvater entschieden wurden. Die Didache (um 100) gebietet: „Du sollst ein Kind nicht durch Abtreibung töten und das Neugeborene nicht umbringen." Der Diognetbrief beschreibt Christen als Menschen, die „heiraten wie alle, Kinder zeugen, aber die Neugeborenen nicht aussetzen". Basilius der Große erklärt in seinen kanonischen Briefen, dass eine vorsätzliche Abtreibung als Tötung gilt, und verwirft die Unterscheidung zwischen „geformtem" und „ungeformtem" Embryo. Die koptisch-orthodoxe Kirche lehrt in dieser Linie, dass menschliches Leben von der Empfängnis an zu schützen ist. Zugleich ist die Kirche ein Haus der Barmherzigkeit: Wer abgetrieben hat, findet in Reue, Beichte und Eucharistie Vergebung und Heilung; schon Basilius milderte die Bußdauer, und die Kirche sieht ihre Aufgabe darin, Frauen in Not beizustehen, nicht sie zu verurteilen.`,
    detail: `In der orthodoxen Ethik wird als tragischer Grenzfall meist die Situation genannt, in der das Leben der Mutter unmittelbar bedroht ist (etwa bei einer Eileiterschwangerschaft); hier geht es um die Rettung von Leben, nicht um die Verfügung über Leben. Die Kirche verlangt von Männern ebenso Verantwortung: Johannes Chrysostomus richtete seine schärfsten Worte gegen Männer, die Frauen durch ihr Verhalten in die Abtreibung treiben.`,
    sources: [
      { kind: 'kirchenvater', work: 'Didache (Lehre der zwölf Apostel)', ref: '2,2', year: 'um 100', quote: `Du sollst ein Kind nicht durch Abtreibung töten und das Neugeborene nicht umbringen.`, original: 'οὐ φονεύσεις τέκνον ἐν φθορᾷ οὐδὲ γεννηθὲν ἀποκτενεῖς', translation: 'eigene Übersetzung', status: 'verbatim' },
      { kind: 'kirchenvater', work: 'Brief an Diognet', ref: '5,6', year: '2. Jh.', quote: `Sie heiraten wie alle, sie zeugen Kinder, aber sie setzen die Neugeborenen nicht aus.`, original: 'γαμοῦσιν ὡς πάντες, τεκνογονοῦσιν· ἀλλ᾽ οὐ ῥίπτουσι τὰ γεννώμενα.', translation: 'eigene Übersetzung', status: 'verbatim' },
      { kind: 'kirchenvater', author: 'Basilius der Große', work: 'Brief 188 (Erster kanonischer Brief an Amphilochius)', ref: 'Kanon 2', year: '374', quote: `Eine Frau, die vorsätzlich abgetrieben hat, unterliegt der Strafe für Tötung. Eine genaue Unterscheidung zwischen geformtem und ungeformtem Embryo gibt es bei uns nicht.`, translation: 'eigene Übersetzung', status: 'verbatim', note: 'Basilius begrenzt im selben Kanon die Bußzeit (zehn Jahre) – Barmherzigkeit gehört zur Lehre.' },
      { kind: 'kirchenvater', author: 'Tertullian', work: 'Apologeticum', ref: '9,8', year: '197', quote: `Ein Mensch ist auch, wer erst Mensch werden wird; auch die ganze Frucht ist schon im Samen.`, original: 'Homo est et qui est futurus; etiam fructus omnis iam in semine est.', translation: 'eigene Übersetzung', status: 'verbatim', note: 'Tertullian ist keine Lehrautorität, aber ein früher Zeuge der christlichen Praxis.' },
      { kind: 'kirchenvater', author: 'Athenagoras von Athen', work: 'Bittschrift für die Christen (Legatio)', ref: '35', year: 'um 177', quote: `Wir sagen, dass Frauen, die Abtreibungsmittel gebrauchen, Tötung begehen und Gott dafür Rechenschaft geben müssen.`, status: 'paraphrase' },
      { kind: 'koptisch', work: 'Lehre der koptisch-orthodoxen Kirche zum Schutz des ungeborenen Lebens', quote: `Menschliches Leben ist von der Empfängnis an heilig; Abtreibung wird als Tötung abgelehnt; als Ausnahme gilt in der orthodoxen Ethik meist die unmittelbare Lebensgefahr für die Mutter.`, status: 'unverified', note: 'Zusammenfassung der verbreiteten Lehre; ein einzelnes offizielles Synodaldokument ist hier nicht angegeben.' },
    ],
  },
  opposingView: {
    summary: `**Biologie:** Embryologische Standardlehrbücher beschreiben die Befruchtung als Beginn der Entwicklung eines neuen menschlichen Individuums; die Zygote ist ein eigenständiger Organismus mit eigenem Genom, der seine Entwicklung als Ganzes steuert. Das Herz beginnt etwa drei Wochen nach der Befruchtung zu schlagen, bis zum Ende der achten Woche sind alle Organanlagen gebildet; die Lebensfähigkeit außerhalb des Mutterleibs liegt heute bei etwa 22 Wochen (Rekord: ein 2020 in Alabama nach 21 Wochen und einem Tag geborener Junge). Eine Umfrage von Steven Jacobs (2018) ergab, dass 95 % von über 5.500 befragten Biologen der Aussage zustimmten, das Leben eines Menschen beginne mit der Befruchtung – die Methodik der Studie ist allerdings umstritten. **Philosophie:** Die eigentliche Streitfrage unter Fachleuten ist nicht, **ob** der Embryo ein lebender menschlicher Organismus ist, sondern ob er bereits **moralischen Status** (Personsein) hat.`,
    detail: `- **Positionen zum Personsein:** Die „Substanzsicht" (Beckwith, George, Lee) sieht den Embryo als Person, weil er von Natur aus ein vernunftbegabtes Wesen ist; „Fähigkeitssichten" (Warren, Tooley, Singer) machen Personsein an aktuellen Fähigkeiten fest – mit der von Singer und von Giubilini/Minerva (2013) offen gezogenen Konsequenz, dass auch Neugeborene keinen vollen Status hätten.
- **Säkulares Argument gegen Abtreibung:** Don Marquis (1989) argumentiert ohne religiöse Prämissen, Töten sei falsch, weil es dem Opfer „eine Zukunft wie die unsere" raubt – das gelte auch für den Fötus.
- **Natürlicher Embryonenverlust:** Die Schätzungen schwanken stark; ein erheblicher Teil der befruchteten Eizellen nistet sich nicht ein oder geht früh verloren (Jarvis 2016 betont die große Unsicherheit der Daten).
- **Folgen für Frauen:** Die US-amerikanische „Turnaway Study" (Foster 2020) fand, dass Frauen, denen eine Abtreibung verweigert wurde, häufiger in finanzielle Not gerieten. Das ist ehrlich zu nennen – und ein Auftrag an die Gesellschaft und die Kirche, Frauen wirksam zu helfen.`,
    sources: [
      { kind: 'wissenschaft', author: 'Keith L. Moore, T. V. N. Persaud, Mark G. Torchia', work: 'The Developing Human: Clinically Oriented Embryology', ref: 'Kap. 1–2', year: 'mehrere Auflagen', quote: `Die menschliche Entwicklung beginnt mit der Befruchtung, wenn sich Samenzelle und Eizelle zu einer einzigen Zelle, der Zygote, vereinigen; diese hochspezialisierte, totipotente Zelle markiert den Beginn jedes von uns als einzigartiges Individuum.`, status: 'paraphrase', note: 'Sinngetreu; der genaue englische Wortlaut variiert zwischen den Auflagen – vor wörtlicher Verwendung die konkrete Auflage prüfen.' },
      { kind: 'wissenschaft', author: 'Steven Andrew Jacobs', work: 'Biologists\' Consensus on „When Life Begins"', ref: 'SSRN Working Paper', year: '2018', quote: `5.212 von 5.502 befragten Biologen (95 %) bejahten die Aussage, das Leben eines Menschen beginne mit der Befruchtung.`, status: 'paraphrase', note: 'Methodik umstritten; nicht als „wissenschaftlicher Konsens" überhöhen.' },
      { kind: 'gegner', author: 'Judith Jarvis Thomson', work: 'A Defense of Abortion', ref: 'Philosophy & Public Affairs 1 (1971), 47–66', year: '1971', quote: `Thomson konstruiert den Fall eines berühmten, bewusstlosen Geigers, der ohne Zustimmung an den Kreislauf einer Frau angeschlossen wird; sie dürfe sich abkoppeln, auch wenn er dann stirbt – das Recht auf Leben schließe kein Recht ein, den Körper eines anderen zu benutzen.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Don Marquis', work: 'Why Abortion Is Immoral', ref: 'Journal of Philosophy 86 (1989), 183–202', year: '1989', status: 'paraphrase', note: 'Säkulares Argument gegen Abtreibung.' },
      { kind: 'gegner', author: 'Alberto Giubilini & Francesca Minerva', work: 'After-birth abortion: why should the baby live?', ref: 'Journal of Medical Ethics 39 (2013), 261–263', year: '2013', status: 'paraphrase', note: 'Zeigt, wohin Fähigkeitskriterien des Personseins führen.' },
      { kind: 'gegner', author: 'Diana Greene Foster', work: 'The Turnaway Study', year: '2020', status: 'paraphrase' },
    ],
  },
  quickAnswer: `Jeder von uns war einmal ein Embryo. Die Embryologie-Lehrbücher sagen: Mit der Befruchtung beginnt ein neuer, eigenständiger menschlicher Organismus. „Zellhaufen" beschreibt jeden Menschen – auch du bist eine Ansammlung von Billionen Zellen. Zwischen dem Embryo und dir gibt es nur vier Unterschiede: Größe, Entwicklungsstand, Aufenthaltsort und Grad der Abhängigkeit – und keiner davon entscheidet, ob jemand Wert hat. Und ja: Frauen in Not brauchen echte Hilfe – die Kirche muss die Erste sein, die sie gibt.`,
  keyPoints: [
    `**Biologischer Befund:** Mit der Befruchtung entsteht ein neuer, lebender, menschlicher Organismus mit eigenem Genom, der seine Entwicklung selbst steuert – kein Teil des mütterlichen Körpers.`,
    `**Das SLED-Argument (Stephen Schwarz):** Size, Level of development, Environment, Degree of dependency – Größe, Entwicklungsstand, Umgebung und Abhängigkeit unterscheiden Embryo und Erwachsenen; keines davon begründet einen Unterschied an Würde.`,
    `**Personsein nach Fähigkeiten** trifft auch Neugeborene, Schlafende, Komapatienten und Menschen mit schwerer Behinderung – Singer zieht diese Konsequenz offen.`,
    `**Thomsons Geiger** ist das stärkste Gegenargument – aber das Kind ist kein Fremder, sondern das eigene Kind; Abtreibung ist meist aktives Töten, nicht bloßes „Abkoppeln"; und Eltern haben besondere Fürsorgepflichten.`,
    `**Die Alte Kirche** schützte das Kind in einer Kultur der Abtreibung und Aussetzung (Didache 2,2; Diognet 5,6; Basilius, Brief 188).`,
    `**Mitgefühl ist kein Gegensatz:** Für das Leben sein heißt, für Mutter **und** Kind da zu sein – materiell, seelisch und mit Vergebung für die, die abgetrieben haben.`,
  ],
  argument: {
    name: 'Das Grundargument für den Lebensschutz',
    summary: 'Ein klassischer Syllogismus – jede Prämisse wird im Dialog verteidigt.',
    premises: [
      {
        text: 'P1: Es ist falsch, einen unschuldigen Menschen absichtlich zu töten.',
        support: `Allgemein anerkanntes moralisches Prinzip, Grundlage jeder Rechtsordnung und der Menschenrechte (Ex 20,13). Ausnahmen (Notwehr) betreffen keine unschuldigen Personen.`,
      },
      {
        text: 'P2: Von der Befruchtung an ist der Embryo ein lebender, individueller Mensch (ein Organismus der Art Homo sapiens).',
        support: `Embryologische Lehrbücher (Moore/Persaud), der eigene Genotyp, die selbstgesteuerte, kontinuierliche Entwicklung ohne spätere Wesensveränderung. Jeder spätere Einschnitt (Herzschlag, Schmerz, Lebensfähigkeit, Geburt) ist eine Etappe, kein Wesenswechsel.`,
        sources: [
          { kind: 'wissenschaft', author: 'Keith L. Moore, T. V. N. Persaud, Mark G. Torchia', work: 'The Developing Human', status: 'paraphrase' },
          { kind: 'fachliteratur', author: 'Robert P. George & Christopher Tollefsen', work: 'Embryo: A Defense of Human Life', year: '2008', status: 'paraphrase' },
        ],
      },
      {
        text: 'P3: Eine Abtreibung tötet den Embryo bzw. Fötus absichtlich.',
        support: `Das ist ihr Zweck; anders als bei der Behandlung einer lebensbedrohlichen Erkrankung der Mutter, bei der der Tod des Kindes nicht beabsichtigt ist (Prinzip der Doppelwirkung).`,
      },
    ],
    conclusion: 'Die gezielte Abtreibung ist moralisch falsch. Daraus folgt nicht Verurteilung von Frauen, sondern die Pflicht, Mutter und Kind zu schützen und zu unterstützen.',
  },
  voices: [
    {
      person: 'lejeune',
      role: 'als Genetiker',
      text: `Lejeune, der Entdecker der Ursache des Down-Syndroms, erklärte 1989 als Sachverständiger in einem Sorgerechtsstreit um eingefrorene Embryonen (Davis v. Davis, Tennessee), dass mit der Befruchtung ein neues menschliches Wesen mit seiner ganzen genetischen Individualität beginnt; die Embryonen seien keine „Sachen", sondern sehr junge Menschen. Er erlebte mit Schmerz, dass seine Entdeckung zur gezielten vorgeburtlichen Aussonderung von Kindern mit Down-Syndrom genutzt wurde, und setzte sich zeitlebens für ihr Lebensrecht ein.`,
      sources: [
        { kind: 'wissenschaft', author: 'Jérôme Lejeune', work: 'Gutachten im Verfahren Davis v. Davis (Maryville, Tennessee)', year: '1989', status: 'paraphrase' },
      ],
    },
    {
      person: 'francis-beckwith',
      role: 'als Philosoph der Bioethik',
      text: `Beckwith verteidigt in *Defending Life* die „Substanzsicht": Ein Mensch ist von Anfang bis Ende dasselbe Wesen, das sich entwickelt, nicht eine Folge verschiedener Dinge. Der Embryo ist kein „potenzieller Mensch", sondern ein Mensch mit Potenzial. Fähigkeitskriterien des Personseins sind willkürlich, weil Fähigkeiten graduell sind – wer Würde an sie knüpft, macht Würde zu einer Frage des Grades und verliert jede Begründung der Gleichheit aller Menschen.`,
      sources: [
        { kind: 'fachliteratur', author: 'Francis J. Beckwith', work: 'Defending Life: A Moral and Legal Case Against Abortion Choice', year: '2007', status: 'paraphrase' },
      ],
    },
    {
      person: 'basilius',
      role: 'als Kanonist der Alten Kirche',
      text: `Basilius stellt in seinem kanonischen Brief an Amphilochius klar, dass die Kirche keine Unterscheidung zwischen „geformtem" und „ungeformtem" Embryo kennt – jede vorsätzliche Abtreibung gilt als Tötung. Bemerkenswert ist zugleich seine Barmherzigkeit: Er begrenzt die Bußzeit und betont, dass die Buße nach ihrer Aufrichtigkeit, nicht nur nach der Zeit zu bemessen sei. Wahrheit und Erbarmen stehen bei ihm nebeneinander.`,
      sources: [
        { kind: 'kirchenvater', author: 'Basilius der Große', work: 'Brief 188', ref: 'Kanon 2', status: 'paraphrase' },
      ],
    },
    {
      person: 'chrysostomus',
      role: 'als Prediger der Verantwortung der Männer',
      text: `Chrysostomus richtet in seiner 24. Homilie über den Römerbrief seine schärfste Kritik an Männer, die durch Ehebruch und Prostitution Frauen in Schande und Abtreibung treiben: Sie machen aus einer gefallenen Frau eine Mörderin und laden doppelte Schuld auf sich. Die christliche Lebensethik ist also keine einseitige Last für Frauen, sondern ein Ruf an Männer zu Treue und Verantwortung.`,
      sources: [
        { kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Homilien über den Römerbrief', ref: 'Homilie 24 (zu Röm 13,11–14)', year: 'um 391', status: 'paraphrase' },
      ],
    },
    {
      person: 'john-wyatt',
      role: 'als Neonatologe und Ethiker',
      text: `Wyatt hat als Kinderarzt jahrzehntelang extrem früh geborene Kinder behandelt – manche kaum älter als Föten, die anderswo legal abgetrieben werden. Er beschreibt diese Spannung als Herausforderung für die Medizin: Dasselbe Kind wird auf der einen Station mit allen Mitteln gerettet und könnte auf der anderen getötet werden; der einzige Unterschied ist, ob es gewollt ist. Seine christliche Antwort verbindet den Schutz des Kindes mit Fürsorge für die Mutter.`,
      sources: [
        { kind: 'fachliteratur', author: 'John Wyatt', work: 'Matters of Life and Death: Human Dilemmas in the Light of the Christian Faith (2. Aufl.)', year: '2009', status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'nur-zellhaufen',
      objection: `Ein früher Embryo ist ein Zellhaufen, kleiner als ein Stecknadelkopf, ohne Gehirn und ohne Empfindung. Das ist kein Mensch.`,
      objectionBy: 'Verbreitetes Argument (u. a. Peter Singer)',
      targetsPremise: 2,
      answer: `Biologisch ist ein „Haufen" eine Ansammlung ohne Einheit. Der Embryo dagegen ist ein Organismus, der sich als Ganzes koordiniert entwickelt – nach seinem eigenen genetischen Programm, zum Fötus, zum Kind, zum Erwachsenen. Die Lehrbücher der Embryologie nennen die Befruchtung den Beginn eines neuen menschlichen Individuums. Und „Zellhaufen" trifft auf uns alle zu: Du bestehst aus rund 30 Billionen Zellen.`,
      questionsBack: [
        `Wann genau, glaubst du, hat dein Leben begonnen – und was hat sich in diesem Augenblick an deinem Wesen geändert?`,
      ],
      followUps: [
        {
          id: 'mensch-ja-person-nein',
          objection: `Biologisch menschlich – geschenkt. Aber keine Person. Person ist, wer Bewusstsein, Interessen und ein Selbstverhältnis hat (Warren, Singer).`,
          objectionBy: 'Mary Anne Warren / Peter Singer',
          targetsPremise: 2,
          answer: `Prüfe, was den Embryo von dir unterscheidet: Größe, Entwicklungsstand, Aufenthaltsort und Abhängigkeit. Kleinere Menschen sind nicht weniger wert, ein Vierjähriger ist weniger entwickelt als ein Erwachsener, eine Reise durch den Geburtskanal verändert nicht das Wesen, und Abhängigkeit – etwa von Insulin oder einem Herzschrittmacher – mindert keine Würde. Und wer Personsein an aktuelle Fähigkeiten knüpft, muss wie Singer auch Neugeborenen den vollen Schutz absprechen.`,
          sources: [
            { kind: 'fachliteratur', author: 'Stephen D. Schwarz', work: 'The Moral Question of Abortion', year: '1990', status: 'paraphrase', note: 'Ursprung des SLED-Arguments; popularisiert von Scott Klusendorf.' },
          ],
          followUps: [
            {
              id: 'empfindungsfaehigkeit',
              objection: `Das Kriterium ist Empfindungsfähigkeit. Wer nichts empfindet, dem kann man nicht schaden.`,
              objectionBy: 'Utilitaristische Bioethik',
              targetsPremise: 2,
              answer: `Dann dürfte man auch Menschen in Narkose oder im reversiblen Koma töten. Man sagt dann: Sie haben die Fähigkeit nur vorübergehend nicht ausgeübt. Genau das gilt für den Embryo: Er besitzt die angelegte Fähigkeit zu Bewusstsein und Vernunft, die sich entfaltet, wenn man ihn nicht tötet. Selbst der säkulare Philosoph Don Marquis argumentiert: Töten ist falsch, weil es eine „Zukunft wie die unsere" raubt – und die hat auch der Fötus.`,
              followUps: [
                {
                  id: 'marquis-gameten',
                  objection: `Nach Marquis hätten dann auch Ei- und Samenzellen eine Zukunft. Dann wäre jede Verhütung Mord!`,
                  objectionBy: 'David Boonin',
                  targetsPremise: 2,
                  answer: `Nein. Ei- und Samenzelle sind keine Organismen, sondern Teile der Eltern; keine von ihnen entwickelt sich für sich allein zu einem Menschen. Erst mit der Befruchtung entsteht ein neues Lebewesen mit eigenem Genom – ein Subjekt, das eine Zukunft **hat**. Vor der Befruchtung gibt es niemanden, dessen Zukunft verloren ginge.`,
                  questionsBack: [
                    `Wer genau wäre das Opfer, wenn eine Samenzelle nicht befruchtet – und wer, wenn ein Embryo getötet wird?`,
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'zwillinge-14-tage',
          objection: `Bis etwa zum 14. Tag kann sich der Embryo noch in Zwillinge teilen. Also gibt es noch gar kein Individuum.`,
          objectionBy: 'Norman Ford / Bioethik-Debatte zur 14-Tage-Regel',
          targetsPremise: 2,
          answer: `Teilbarkeit heißt nicht, dass vorher niemand da war. Auch ein Plattwurm, den man teilt, war vorher ein Individuum; nun sind es zwei. Bei der Zwillingsbildung entsteht aus einem bestehenden Menschen ein weiterer. Die allermeisten Embryonen teilen sich nie – und selbst bei Zwillingen existierte vorher mindestens ein menschliches Individuum.`,
          followUps: [
            {
              id: 'natuerlicher-verlust',
              objection: `Ein großer Teil der Embryonen stirbt natürlicherweise. Wären das Personen, wäre das die größte Katastrophe der Menschheit – und niemand trauert.`,
              objectionBy: 'Toby Ord / Debatte um Embryonenverlust',
              targetsPremise: 1,
              answer: `Eine hohe natürliche Sterblichkeit erlaubt kein Töten: Früher starb fast die Hälfte aller Kinder vor dem fünften Geburtstag – niemand folgerte daraus, Kinder seien keine Menschen. Natürlicher Tod und absichtliche Tötung sind moralisch verschieden. Und viele Eltern trauern sehr wohl um Fehlgeburten; die Kirche betet mit ihnen.`,
            },
          ],
        },
      ],
    },
    {
      id: 'geiger-thomson',
      objection: `Selbst wenn der Fötus eine Person wäre: Niemand muss seinen Körper einem anderen zur Verfügung stellen. Wenn du aufwachst und an einen bewusstlosen Geiger angeschlossen bist, der deine Nieren braucht, darfst du dich abkoppeln (Thomson 1971).`,
      objectionBy: 'Judith Jarvis Thomson',
      targetsPremise: 1,
      answer: `Das ist das stärkste Argument der Gegenseite – ich nehme es ernst. Aber der Vergleich hinkt an entscheidenden Stellen: Der Geiger ist ein Fremder, das Kind ist das eigene, und Eltern haben besondere Fürsorgepflichten; die Schwangerschaft ist in aller Regel die Folge einer freiwilligen Handlung; und die meisten Abtreibungen sind kein „Abkoppeln", sondern aktives Töten. Die Gebärmutter ist kein künstlicher Schlauch, sondern der natürliche Lebensraum des Kindes.`,
      followUps: [
        {
          id: 'vergewaltigung',
          objection: `Und bei einer Vergewaltigung? Da war nichts freiwillig.`,
          objectionBy: 'Judith Jarvis Thomson',
          targetsPremise: 1,
          answer: `Das ist der schwerste Fall, und hier braucht es zuerst tiefes Mitgefühl: Die Frau ist völlig unschuldig und hat Unvorstellbares erlitten. Aber auch das Kind ist unschuldig; es trägt nicht die Schuld seines Vaters. Eine zweite Gewalttat heilt die erste nicht. Die Kirche muss diese Frau tragen – mit Therapie, materieller Hilfe, Gemeinschaft und, wenn sie es wünscht, der Möglichkeit der Adoption.`,
          detail: `Ehrlich: An diesem Punkt hat Thomsons Argument seine größte Kraft, und manche Lebensschutz-Philosophen argumentieren hier zusätzlich mit dem Unterschied zwischen Töten und Sterbenlassen. Wichtig im Gespräch: Diese Fälle sind tragisch, aber selten; sie rechtfertigen nicht die Abtreibung in allen anderen Fällen.`,
          followUps: [
            {
              id: 'zwang-grausam',
              objection: `Eine Frau zu zwingen, das Kind ihres Vergewaltigers auszutragen, ist grausam.`,
              targetsPremise: 1,
              answer: `Ihr Leid ist real und darf nicht kleingeredet werden. Die Frage ist, ob die Tötung eines weiteren unschuldigen Menschen dieses Leid heilt. Es gibt Frauen, die nach einer Vergewaltigung ihr Kind bekamen und es lieben, und Menschen, die so gezeugt wurden und dankbar sind zu leben. Unsere Aufgabe ist nicht, über die Frau zu urteilen, sondern sie so zu begleiten, dass sie nicht allein ist.`,
            },
          ],
        },
        {
          id: 'pflicht-zur-organspende',
          objection: `Wir zwingen niemanden zur Blut- oder Organspende – nicht einmal Eltern für ihre Kinder. Warum dann zur Schwangerschaft?`,
          objectionBy: 'David Boonin',
          targetsPremise: 1,
          answer: `Eine Organspende ist ein außergewöhnliches Mittel; die Schwangerschaft ist die natürliche, gewöhnliche Weise, in der jedes Kind am Anfang lebt. Und Eltern sind sehr wohl verpflichtet, ihr Kind mit dem Gewöhnlichen zu versorgen: Wer sein Baby verhungern lässt, macht sich strafbar. Außerdem ist Nicht-Spenden ein Unterlassen, Abtreibung dagegen eine aktive Tötung.`,
          followUps: [
            {
              id: 'mein-koerper',
              objection: `Mein Körper, meine Entscheidung.`,
              objectionBy: 'Pro-Choice-Bewegung',
              targetsPremise: 2,
              answer: `Über den eigenen Körper soll jede Frau entscheiden – völlig richtig. Aber der Embryo ist nicht ihr Körper: Er hat sein eigenes Genom, sein eigenes Herz, oft eine andere Blutgruppe, in der Hälfte der Fälle ein anderes Geschlecht. Es geht um zwei Körper. Selbstbestimmung endet dort, wo das Leben eines anderen auf dem Spiel steht.`,
            },
          ],
        },
      ],
    },
    {
      id: 'verbote-gefaehrlich',
      objection: `Verbote verhindern keine Abtreibungen, sie machen sie nur gefährlich. Frauen sterben an illegalen Eingriffen.`,
      objectionBy: 'WHO / Frauenrechtsorganisationen',
      answer: `Jede Frau, die in Not stirbt, ist eine Tragödie – auch für mich. Mein Ziel ist nicht die Bestrafung von Frauen, sondern der Schutz von Mutter **und** Kind. Gesetze sind nur ein Teil; entscheidend sind Hilfe in Not, finanzielle Unterstützung, Wohnraum, Begleitung und eine Gemeinde, die nicht wegsieht. Und die Frage, ob etwas Unrecht ist, muss vor der Frage stehen, wie man es am klügsten verhindert.`,
      followUps: [
        {
          id: 'kontrolle-ueber-frauen',
          objection: `In Wahrheit geht es der Kirche nur um Kontrolle weiblicher Sexualität.`,
          objectionBy: 'Feministische Religionskritik',
          answer: `Historisch war es umgekehrt: Im Römischen Reich entschied meist der Hausvater über Abtreibung und Aussetzung, und Abtreibungen waren für Frauen lebensgefährlich. Die Christen schützten Frauen und Kinder und verlangten von Männern Treue (Rodney Stark). Die Kirche fordert von Männern dieselbe Keuschheit und Verantwortung – Chrysostomus richtete seine schärfste Kritik gegen Männer, die Frauen in die Abtreibung treiben.`,
          sources: [
            { kind: 'fachliteratur', author: 'Rodney Stark', work: 'The Rise of Christianity', ref: 'Kap. 5 (Die Rolle der Frauen)', year: '1996', status: 'paraphrase' },
          ],
        },
        {
          id: 'pro-geburt-nicht-pro-leben',
          objection: `Ihr seid nur für die Geburt, nicht fürs Leben – danach lasst ihr Mütter allein.`,
          objectionBy: 'Verbreiteter Vorwurf',
          answer: `Das ist eine berechtigte Herausforderung an die Kirche, kein Argument für Abtreibung. Wenn wir „Ja zum Leben" sagen, müssen wir es mit Taten sagen: Begleitung in der Schwangerschaft, materielle Hilfe, Kinderbetreuung, Adoptionsvermittlung, Gemeinschaft. Viele Gemeinden tun das – wo sie es nicht tun, sollen sie es lernen.`,
          questionsBack: [
            `Wenn wir gemeinsam dafür sorgten, dass keine Frau aus Not abtreiben muss – wärst du dabei?`,
          ],
        },
      ],
    },
    {
      id: 'frauen-moerderinnen',
      objection: `Und Frauen, die abgetrieben haben – sind das für dich Mörderinnen?`,
      objectionBy: 'Gesprächspartner (oft persönlich betroffen)',
      answer: `Nein, ich verurteile niemanden. Viele Frauen entscheiden unter enormem Druck, in Angst, Armut oder Einsamkeit, oft gedrängt von anderen. Jesus sagte der Frau, die man steinigen wollte: „So verdamme ich dich auch nicht." In der Kirche gibt es für jede Schuld Vergebung – in Reue und Beichte. Die Kirche ist ein Krankenhaus, kein Gericht.`,
      followUps: [
        {
          id: 'psychisch-unproblematisch',
          objection: `Studien wie die Turnaway Study zeigen, dass die meisten Frauen ihre Abtreibung nicht bereuen.`,
          objectionBy: 'Diana Greene Foster',
          answer: `Die Forschung zu den seelischen Folgen ist umstritten, und ich argumentiere nicht in erster Linie mit Reue, sondern mit dem Leben des Kindes. Zugleich gibt es Frauen, die lange und tief trauern – sie brauchen einen Ort, an dem sie das aussprechen dürfen, ohne verurteilt oder belächelt zu werden. Diesen Ort will die Kirche bieten.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wann, glaubst du, hat dein eigenes Leben begonnen?`,
    `Welcher der vier Unterschiede – Größe, Entwicklung, Ort, Abhängigkeit – macht für dich jemanden weniger wert?`,
    `Wenn Personsein an Fähigkeiten hängt: Warum sind dann Neugeborene geschützt?`,
    `Wenn der Embryo ein Mensch ist – welche Gründe würden es rechtfertigen, ihn zu töten, die wir bei einem Zweijährigen nicht gelten ließen?`,
    `Was müsste sich ändern, damit keine Frau mehr aus Not abtreiben muss?`,
  ],
  avoid: [
    `Frauen, die abgetrieben haben, als „Mörderinnen" beschimpfen – das ist lieblos, unwahr in Bezug auf ihre Lage und verschließt jede Tür.`,
    `Drastische Bilder ungefragt zeigen oder emotional überwältigen – überzeuge mit Argumenten und Mitgefühl.`,
    `Falsch zugeschriebene Zitate (z. B. angebliche Aussagen früher Frauenrechtlerinnen gegen Abtreibung), deren Herkunft du nicht belegen kannst.`,
    `Die Jacobs-Umfrage als „wissenschaftlichen Konsens" verkaufen – die biologische Aussage stützt sich besser auf die Lehrbücher.`,
  ],
  concessions: [
    `Der frühe Embryo hat kein Bewusstsein und kein Schmerzempfinden; die Debatte dreht sich um moralischen Status, nicht um Empfindung.`,
    `Thomsons Argument ist philosophisch ernst zu nehmen, besonders im Fall einer Vergewaltigung.`,
    `Frauen, denen eine Abtreibung verweigert wird, geraten nach Studien häufiger in wirtschaftliche Not – das verpflichtet zu konkreter Hilfe.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Francis J. Beckwith', work: 'Defending Life: A Moral and Legal Case Against Abortion Choice', year: '2007', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Robert P. George & Christopher Tollefsen', work: 'Embryo: A Defense of Human Life', year: '2008', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Scott Klusendorf', work: 'The Case for Life', year: '2009', status: 'paraphrase' },
    { kind: 'gegner', author: 'Kate Greasley', work: 'Arguments about Abortion: Personhood, Morality, and Law', year: '2017', status: 'paraphrase', note: 'Faire Darstellung der Gegenposition.' },
  ],
  difficulty: 2,
  tags: ['Abtreibung', 'Embryo', 'Personsein', 'SLED', 'Thomson', 'Lebensschutz'],
  related: [
    'bioethik/kirche-gegen-forschung',
    'bioethik/sterbehilfe-barmherzig',
    'moral-und-gott/gut-ohne-gott',
    'evolutionaere-psychologie/mensch-nur-tier',
    'sexualethik/sexualmoral-veraltet',
  ],
};

export default claim;
