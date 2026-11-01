import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'sterbehilfe-barmherzig',
  title: `„Sterbehilfe ist ein Akt der Barmherzigkeit."`,
  proponents: [
    { name: 'Peter Singer', role: 'Bioethiker, Princeton', work: 'Rethinking Life and Death (1994)' },
    { name: 'Udo Schüklenk', role: 'Bioethiker, Queen\'s University (Kanada)', work: 'Bericht des Expertengremiums der Royal Society of Canada zur Sterbehilfe (2011, Vorsitz)' },
    { name: 'Hans Küng & Walter Jens', role: 'Katholischer Theologe bzw. Rhetoriker', work: 'Menschenwürdig sterben. Ein Plädoyer für Selbstverantwortung (1995)' },
    { name: 'Philip Nitschke', role: 'Arzt, Gründer von Exit International', work: 'The Peaceful Pill Handbook' },
  ],
  steelman: `Wir ersparen einem sterbenden Tier unnötige Qual – warum verweigern wir sie einem Menschen, der ausdrücklich darum bittet? Selbstbestimmung über das eigene Leben schließt die Entscheidung über das eigene Sterben ein. Auch die beste Palliativmedizin kann nicht jedes Leiden lindern: Atemnot, Erstickungsangst, Verlust aller Kontrolle, das Gefühl, nur noch ein Schatten seiner selbst zu sein. Länder wie die Niederlande, Belgien und Kanada zeigen, dass eine geregelte Sterbehilfe mit strengen Sorgfaltskriterien möglich ist; in Deutschland hat das Bundesverfassungsgericht 2020 ein Recht auf selbstbestimmtes Sterben anerkannt. Selbst ein katholischer Theologe wie Hans Küng plädierte für Sterbehilfe aus christlicher Verantwortung. Wer anderen seine religiöse Sicht vom „Leben als Geschenk" aufzwingt, verlängert fremdes Leid um eines Prinzips willen.`,
  biblical: {
    summary: `Die Bibel versteht das Leben als Gabe Gottes, über die der Mensch nicht verfügt: „Der HERR hat's gegeben, der HERR hat's genommen" (Hiob 1,21); „Leben wir, so leben wir dem HERRN; sterben wir, so sterben wir dem HERRN" (Röm 14,8). Bemerkenswert ist 2 Sam 1: Der schwer verwundete König Saul bittet einen Amalekiter, ihn zu töten; als dieser David davon berichtet, verurteilt David ihn – die Bitte des Sterbenden rechtfertigte die Tötung nicht. Zugleich gebietet die Schrift Linderung: „Gebt starkes Getränk denen, die umkommen sollen" (Spr 31,6) – ein früher Hinweis auf palliative Fürsorge –, und Christus identifiziert sich mit den Kranken (Mt 25,36). Barmherzigkeit heißt in der Bibel: das Leid lindern und den Leidenden tragen (Gal 6,2), nicht den Leidenden beseitigen.`,
    detail: `- **2 Sam 1,6–16**: Der Amalekiter behauptet, Saul habe ihn gebeten: „Tritt zu mir und töte mich", weil er hart verwundet war. David bestraft ihn dennoch – ein biblisches Lehrstück über „Tötung auf Verlangen".
- **1 Sam 31,4**: Sauls Waffenträger weigert sich, seinen König zu töten.
- **Phil 1,21–24**: Paulus sehnt sich danach, „abzuscheiden und bei Christo zu sein", bleibt aber um der anderen willen – der Wunsch zu sterben ist menschlich und wird nicht verurteilt, aber er ist kein Auftrag, sich das Leben zu nehmen.
- **2 Kor 4,16–18**: „Ob unser äußerlicher Mensch verdirbt, so wird doch der innerliche von Tag zu Tag erneuert" – Würde hängt nicht an körperlicher Unversehrtheit.`,
    sources: [
      { kind: 'bibel', work: 'Hiob', ref: '1,21', quote: `Der HERR hat's gegeben, der HERR hat's genommen; der Name des HERRN sei gelobt!`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Römer', ref: '14,8', quote: `Leben wir, so leben wir dem HERRN; sterben wir, so sterben wir dem HERRN. Darum, wir leben oder sterben, so sind wir des HERRN.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '2. Samuel', ref: '1,9–16', quote: `Saul bat: „Tritt zu mir und töte mich; denn ich bin hart verwundet." David aber ließ den Mann, der dies getan zu haben behauptete, bestrafen, weil er die Hand an den Gesalbten des HERRN gelegt hatte.`, status: 'paraphrase' },
      { kind: 'bibel', work: 'Sprüche', ref: '31,6', quote: `Gebt starkes Getränk denen, die umkommen sollen, und den Wein den betrübten Seelen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Galater', ref: '6,2', quote: `Einer trage des andern Last, so werdet ihr das Gesetz Christi erfüllen.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche lehnt die aktive Tötung von Kranken – auch auf deren Verlangen – und die Beihilfe zur Selbsttötung ab, weil das Leben Gott gehört. Sie verlangt aber **nicht**, Sterbende um jeden Preis künstlich am Leben zu halten: Unverhältnismäßige, nur noch belastende Behandlungen dürfen beendet werden, und Schmerzlinderung ist geboten, selbst wenn sie als Nebenwirkung das Leben verkürzen könnte. Die Kirche begleitet Sterbende mit Gebet, Beichte, Kommunion und der Krankensalbung (Jak 5,14) und betet für die Entschlafenen. Die moderne Hospizbewegung wurde von der überzeugten Christin Cicely Saunders begründet – sie ist die christliche Antwort auf die Angst vor dem Sterben.`,
    detail: `Drei Unterscheidungen sind für Gespräche entscheidend: (1) **Töten** (aktive Sterbehilfe, ärztlich assistierter Suizid) ist etwas anderes als (2) **Sterbenlassen** (Verzicht auf unverhältnismäßige Maßnahmen) und (3) **Leidenslinderung** (Schmerztherapie, palliative Sedierung), bei der der Tod nicht beabsichtigt ist. Die Kirche lehnt nur das Erste ab.`,
    sources: [
      { kind: 'koptisch', work: 'Lehre der koptisch-orthodoxen Kirche zu Sterbehilfe und Sterbebegleitung', quote: `Aktive Tötung und Beihilfe zur Selbsttötung werden abgelehnt; unverhältnismäßige Behandlungen müssen nicht fortgesetzt werden; Schmerzlinderung und geistliche Begleitung sind geboten.`, status: 'unverified', note: 'Zusammenfassung der verbreiteten orthodoxen Lehre; kein synodales koptisches Dokument gefunden (Websuche 2026). Der Kern (Ablehnung von Euthanasie und assistiertem Suizid) ist durch die Stellungnahme der koptisch-orthodoxen Kirche im Vereinigten Königreich (2024, siehe nächste Quelle) belegt; die Unterscheidung von unverhältnismäßiger Behandlung entspricht allgemeiner orthodoxer Lehre (z. B. Erklärung der Versammlung der kanonischen orthodoxen Bischöfe der USA, 2022).' },
      { kind: 'koptisch', author: 'Koptisch-orthodoxe Kirche im Vereinigten Königreich (Erzbischof Angaelos)', work: 'Response to the Terminally Ill Adults (End of Life) Bill', year: 'November 2024', quote: `Die Kirche lehnt Euthanasie und assistierten Suizid ab und erkennt zugleich den Schmerz an, der Menschen dazu bringt, über die Beendigung ihres Lebens nachzudenken.`, status: 'paraphrase', url: 'https://cte.org.uk/app/uploads/2024/11/Terminally-Ill-Adults-End-of-Life-Bill-November-2024-Coptic-Orthodox-Church-UK-Response.pdf', note: 'Per Websuche gefunden (2026); sinngemäße Zusammenfassung, kein Wortlaut.' },
      { kind: 'bibel', work: 'Jakobus', ref: '5,14', quote: `Ist jemand krank, der rufe zu sich die Ältesten von der Gemeinde, daß sie über ihm beten und salben ihn mit Öl in dem Namen des HERRN.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  opposingView: {
    summary: `**Rechtslage und Zahlen (gerundet, nach den jeweiligen Jahresberichten):** In den **Niederlanden** (Gesetz seit 2002) wurden 2023 9.068 Fälle gemeldet (5,4 % aller Todesfälle), 2024 9.958 (5,8 %); die Fälle wegen psychiatrischer Erkrankung stiegen von 138 auf 219, der Anteil der Demenzfälle von 3,7 % auf 4,3 %. **Belgien** (seit 2002) erlaubt seit 2014 Sterbehilfe für Minderjährige ohne Altersgrenze; 2023 wurden 3.423 Fälle registriert (3,1 % aller Todesfälle, +15 % gegenüber 2022). In **Kanada** (seit 2016) wurde die Sterbehilfe 2021 auf Menschen ausgeweitet, deren Tod nicht absehbar ist; 2023 starben rund 15.300 Menschen durch „Medical Assistance in Dying" (MAID), etwa 4,7 % aller Todesfälle; die Ausweitung auf rein psychische Erkrankungen wurde auf 2027 verschoben. In **Oregon** nennen Betroffene als Hauptgründe Verlust der Autonomie, nachlassende Fähigkeit zu Freude und Aktivität sowie Würdeverlust – Schmerzen oder die Angst davor werden deutlich seltener genannt.`,
    detail: `- **Ärzteschaft:** Der Weltärztebund (WMA) bekräftigte 2019 seine Ablehnung von Euthanasie und ärztlich assistiertem Suizid.
- **Behindertenrechte:** Säkulare Behindertenorganisationen und UN-Sonderberichterstatter äußerten (etwa zur kanadischen Ausweitung 2021) die Sorge, dass Menschen mit Behinderung unter Druck geraten.
- **Deutschland:** Das Bundesverfassungsgericht erklärte 2020 das Verbot der geschäftsmäßigen Suizidhilfe für nichtig; die gesetzliche Neuregelung ist umstritten.
- **Palliativmedizin:** Die meisten Schmerzen lassen sich heute gut lindern; für therapieresistentes Leiden gibt es die palliative Sedierung. Ehrlich: Es bleiben Fälle schweren Leidens, die schwer zu lindern sind.`,
    sources: [
      { kind: 'sonstiges', work: 'Regionale Kontrollkommissionen für Sterbehilfe (RTE), Niederlande: Jahresberichte 2023/2024', status: 'paraphrase', note: 'Per Websuche geprüft (2026): 2023 9.068 Meldungen (5,4 %), 2024 9.958 (5,8 %); psychiatrische Erkrankungen 138 → 219; Demenz 3,7 % → 4,3 %.' },
      { kind: 'sonstiges', work: 'Föderale Kommission für die Kontrolle und Bewertung der Sterbehilfe (Belgien): Zahlen für 2023 (Pressemitteilung)', year: '2024', status: 'paraphrase', note: 'Per Websuche geprüft (2026): 3.423 Fälle (3,1 % aller Todesfälle), +15 % gegenüber 2022; 2023 ein Fall bei Minderjährigen.' },
      { kind: 'sonstiges', work: 'Health Canada: Fifth Annual Report on Medical Assistance in Dying in Canada, 2023', year: '2024', status: 'paraphrase', note: 'Per Websuche geprüft (2026): 15.343 Fälle, ca. 4,7 % aller Todesfälle.' },
      { kind: 'sonstiges', work: 'Oregon Health Authority: Death with Dignity Act Annual Reports', status: 'paraphrase' },
      { kind: 'sonstiges', work: 'World Medical Association: Declaration on Euthanasia and Physician-Assisted Suicide (Tiflis)', year: '2019', status: 'paraphrase' },
    ],
  },
  quickAnswer: `Mitgefühl – ja. Aber Töten ist nicht die einzige und nicht die beste Form der Barmherzigkeit. Moderne Palliativmedizin kann die meisten Schmerzen lindern, und für schwerstes Leiden gibt es die palliative Sedierung. Wo Sterbehilfe erlaubt ist, weitet sie sich aus: In den Niederlanden, Belgien und Kanada von Todkranken auf psychisch Kranke, Demente und Minderjährige – inzwischen rund 5 % aller Todesfälle. Die Hauptgründe sind Autonomieverlust und die Angst, eine Last zu sein, nicht unerträgliche Schmerzen. Die Antwort darauf ist Gegenwart: das Hospiz, begründet von der Christin Cicely Saunders.`,
  keyPoints: [
    `**Unterscheiden:** Töten (aktive Sterbehilfe, assistierter Suizid) ≠ Sterbenlassen (Verzicht auf unverhältnismäßige Behandlung) ≠ Schmerzlinderung. Nur das Erste lehnt die Kirche ab.`,
    `**Schmerz ist selten der Hauptgrund:** Nach den Oregon-Berichten dominieren Autonomieverlust, Würdeverlust und die Angst, anderen zur Last zu fallen – das sind Rufe nach Gemeinschaft, nicht nach der Spritze.`,
    `**Die Ausweitung ist dokumentiert:** Belgien (Minderjährige seit 2014), Kanada (nicht tödlich Kranke seit 2021), Niederlande (psychische Erkrankungen, Demenz). Die innere Logik – Autonomie oder Mitleid – drängt jeweils über die ursprünglichen Grenzen hinaus.`,
    `**Säkulare Einwände:** Weltärztebund, Behindertenrechtsbewegung und der vorchristliche hippokratische Eid lehnen ärztliche Tötung ab – das ist keine bloße Religionsfrage.`,
    `**Hospiz statt Tötung:** Cicely Saunders' Konzept des „totalen Schmerzes" (körperlich, seelisch, sozial, spirituell) zeigt, wie man Sterbende umfassend begleitet.`,
  ],
  argument: {
    name: 'Grundsatzargument gegen Tötung auf Verlangen',
    summary: 'Die Einwilligung des Opfers macht die Tötung eines unschuldigen Menschen nicht zu einem Recht des Täters.',
    premises: [
      {
        text: 'P1: Es ist falsch, einen unschuldigen Menschen absichtlich zu töten – auch auf dessen Verlangen.',
        support: `Das Leben ist keine bloße Sache, über die man verfügt, sondern Gabe Gottes (Hiob 1,21; Röm 14,8). Biblisch illustriert in 2 Sam 1. Auch säkular: Der hippokratische Eid verbietet dem Arzt, ein tödliches Mittel zu geben, „auch nicht auf Bitten".`,
        sources: [
          { kind: 'sonstiges', author: 'Hippokratisches Corpus', work: 'Eid des Hippokrates', year: '5./4. Jh. v. Chr.', quote: `Ich werde niemandem, auch nicht auf seine Bitte hin, ein tödlich wirkendes Mittel geben und auch keinen solchen Rat erteilen; ebenso werde ich keiner Frau ein abtreibendes Zäpfchen geben.`, original: 'οὐ δώσω δὲ οὐδὲ φάρμακον οὐδενὶ αἰτηθεὶς θανάσιμον, οὐδὲ ὑφηγήσομαι συμβουλίην τοιήνδε· ὁμοίως δὲ οὐδὲ γυναικὶ πεσσὸν φθόριον δώσω.', translation: 'eigene Übersetzung', status: 'verbatim' },
        ],
      },
      {
        text: 'P2: Aktive Sterbehilfe und ärztlich assistierter Suizid sind absichtliche Tötungen eines unschuldigen Menschen (bzw. die Mitwirkung daran).',
        support: `Ihr Ziel ist der Tod des Patienten; anders als bei der Schmerzlinderung (Ziel: Linderung) oder dem Behandlungsverzicht (Ziel: Ende einer unverhältnismäßigen Belastung, der Tod kommt durch die Krankheit).`,
      },
    ],
    conclusion: 'Aktive Sterbehilfe ist auch aus Mitleid nicht gerechtfertigt. Die Barmherzigkeit verlangt stattdessen umfassende Linderung, Begleitung und Gemeinschaft bis zuletzt.',
  },
  voices: [
    {
      person: 'cicely-saunders',
      role: 'als Begründerin der modernen Hospizbewegung',
      text: `Saunders, Krankenschwester, Sozialarbeiterin und Ärztin, eröffnete 1967 in London das St Christopher's Hospice. Sie entwickelte das Konzept des „totalen Schmerzes": Sterbende leiden nicht nur körperlich, sondern auch seelisch, sozial und spirituell, und jede dieser Dimensionen verdient Behandlung. Sie war überzeugt, dass die Bitte um Sterbehilfe meist verstummt, wenn Schmerzen gelindert und Ängste ernst genommen werden. Ihr wird der Satz zugeschrieben, ein Mensch sei wichtig, weil er er selbst ist – bis zum letzten Augenblick seines Lebens.`,
      sources: [
        { kind: 'fachliteratur', author: 'Cicely Saunders', work: 'Selected Writings 1958–2004', year: '2006', status: 'paraphrase' },
        { kind: 'sonstiges', author: 'Cicely Saunders (zugeschrieben)', work: 'Sinnspruch der Hospizbewegung', quote: `Du bist wichtig, weil du du bist, und du bist bis zum letzten Augenblick deines Lebens wichtig.`, status: 'unverified', note: 'Weit verbreitet und ihr zugeschrieben (engl. „You matter because you are you, and you matter to the end of your life"); Websuche 2026 fand keine gesicherte Primärquelle, der Wortlaut variiert („to the last moment of your life"). Nur als zugeschriebenen Leitsatz verwenden.' },
      ],
    },
    {
      person: 'john-wyatt',
      role: 'als Arzt und Ethiker',
      text: `Wyatt argumentiert in *Dying Well*, dass die Legalisierung der Sterbehilfe die Beziehung zwischen Arzt und Patient grundlegend verändert: Der Arzt wird vom Heiler zum möglichen Vollstrecker, und für verletzliche Menschen wird die Frage „Willst du nicht lieber gehen?" zu einem stillen Druck. Er setzt dem die christliche Sicht entgegen, dass Abhängigkeit kein Würdeverlust ist, sondern zum Menschsein gehört – wir beginnen und beenden unser Leben in den Händen anderer.`,
      sources: [
        { kind: 'fachliteratur', author: 'John Wyatt', work: 'Dying Well', year: '2018', status: 'paraphrase' },
      ],
    },
    {
      person: 'paulus',
      role: 'als Apostel, der Leid und Sterben kannte',
      text: `Paulus kannte Krankheit, Verfolgung und Todesnähe. Er schreibt, dass der äußere Mensch zerfällt, der innere aber täglich erneuert wird (2 Kor 4,16), und dass er sich danach sehnt, bei Christus zu sein, aber um der anderen willen weiterlebt (Phil 1,21–24). Für ihn gehört das Leben Gott: „Wir leben oder sterben, so sind wir des HERRN" (Röm 14,8). Sein Trost ist nicht die Abkürzung des Leidens, sondern die Hoffnung auf die Auferstehung.`,
      sources: [
        { kind: 'bibel', work: '2. Korinther', ref: '4,16–18', quote: `Darum werden wir nicht müde; sondern ob unser äußerlicher Mensch verdirbt, so wird doch der innerliche von Tag zu Tag erneuert.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
    },
    {
      person: 'athanasius',
      role: 'als Biograph eines heiligen Sterbens',
      text: `Athanasius schildert im *Leben des Antonius* das Sterben des großen Wüstenvaters: Hochbetagt verabschiedet er sich von seinen Schülern, gibt letzte Weisungen, ordnet seine Angelegenheiten und geht mit Freude dem Tod entgegen, „als sähe er Freunde kommen". Dieses Bild vom guten Sterben in Gemeinschaft, Versöhnung und Hoffnung prägte die christliche „Kunst des Sterbens" – das Gegenbild zum einsamen, angstvollen Tod, vor dem viele heute in die Sterbehilfe fliehen.`,
      sources: [
        { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Vita Antonii', ref: '89–92', status: 'paraphrase' },
      ],
    },
    {
      person: 'stump',
      role: 'als Philosophin des Leidens',
      text: `Stump untersucht in *Wandering in Darkness*, wie Menschen in schwerem Leiden Sinn finden können – nicht weil Leiden gut wäre, sondern weil auch in ihm Beziehung, Liebe und innere Wandlung möglich bleiben. Sie warnt davor, den Wert eines Lebens nach seiner Leidensfreiheit oder Leistungsfähigkeit zu bemessen.`,
      sources: [
        { kind: 'fachliteratur', author: 'Eleonore Stump', work: 'Wandering in Darkness: Narrative and the Problem of Suffering', year: '2010', status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'selbstbestimmung',
      objection: `Mein Leben, mein Tod. Selbstbestimmung schließt das Recht ein, über das eigene Sterben zu entscheiden.`,
      objectionBy: 'Udo Schüklenk',
      targetsPremise: 1,
      answer: `Selbstbestimmung ist ein hohes Gut – aber kein absolutes. Die Wünsche Schwerkranker sind oft geprägt von Angst, Depression, Einsamkeit oder dem Gefühl, eine Last zu sein. Und sobald Tötung als „Option" gilt, ändert sich die Frage für alle Kranken: Nicht mehr „Wie können wir dir helfen?", sondern „Warum willst du noch bleiben?" Das ist ein stiller Druck auf die Schwächsten.`,
      followUps: [
        {
          id: 'sorgfaltskriterien',
          objection: `Mit strengen Sorgfaltskriterien gibt es keinen Missbrauch. Die Niederlande zeigen, dass das funktioniert.`,
          objectionBy: 'Befürworter des niederländischen Modells',
          answer: `Die Erfahrung zeigt eher eine stetige Ausweitung: Belgien erlaubt Sterbehilfe seit 2014 auch für Minderjährige, die Niederlande zunehmend bei psychischen Erkrankungen und Demenz, Kanada seit 2021 auch für Menschen, deren Tod nicht absehbar ist. Zur kanadischen Ausweitung äußerten UN-Sonderberichterstatter Sorge um Menschen mit Behinderung.`,
          followUps: [
            {
              id: 'dammbruch-trugschluss',
              objection: `Das Dammbruch-Argument ist ein bekannter Trugschluss.`,
              objectionBy: 'Logik-Lehrbuch',
              answer: `Als bloße Behauptung („dann kommt zwangsläufig das Schlimmste") – ja. Aber hier geht es um dokumentierte Gesetzesänderungen und um innere Logik: Wenn Autonomie der Grund ist, warum nur bei tödlicher Krankheit? Wenn Mitleid der Grund ist, warum nur bei Einwilligungsfähigen – und nicht bei Dementen oder Säuglingen? Beide Begründungen drängen von selbst über die Grenze hinaus, die man anfangs zog.`,
              questionsBack: [
                `Wo genau soll die Grenze liegen – und mit welchem Argument verteidigst du sie gegen die nächste Ausweitung?`,
              ],
              followUps: [
                {
                  id: 'singer-konsequent',
                  objection: `Ich gebe offen zu: Die Grenze bei Einwilligungsfähigen ist nicht zwingend. Ein Neugeborenes mit schwerster Behinderung hat noch kein Selbstbewusstsein und keine Zukunftswünsche; in solchen Fällen kann Tötung aus Mitleid gerechtfertigt sein. Das ist kein Dammbruch, sondern Konsequenz.`,
                  objectionBy: 'Peter Singer (Praktische Ethik; Rethinking Life and Death)',
                  answer: `Danke für die Ehrlichkeit – sie zeigt, dass die schiefe Ebene keine Panikmache ist, sondern in der Logik selbst liegt. Wenn der Wert eines Menschen an **Fähigkeiten** hängt (Selbstbewusstsein, Wünsche, Lebensqualität), dann verlieren ihn alle, die diese Fähigkeiten noch nicht, nicht mehr oder nie haben: Säuglinge, Demenzkranke, Schwerstbehinderte. Die christliche Antwort ist die einzige stabile Grenze: Würde wird nicht verdient, sondern geschenkt – jeder Mensch ist Ebenbild Gottes, gleich was er kann.`,
                  detail: `Die Entwicklung in den Niederlanden zeigt, dass diese Logik real wirkt: Seit 2005 regelt das „Groningen-Protokoll" die Lebensbeendigung bei schwerstkranken Neugeborenen; seit 2024 ist die Regelung auf Kinder zwischen 1 und 12 Jahren erweitert. Nach dem Jahresbericht der Kontrollkommissionen (RTE) für 2024 wurden 9.958 Fälle gemeldet (5,8 % aller Todesfälle; 2023: 9.068 bzw. 5,4 %); die Meldungen wegen psychiatrischer Erkrankungen stiegen von 138 auf 219, der Anteil der Demenzfälle von 3,7 % auf 4,3 %.

Wichtig für den Ton: Eltern eines schwerstkranken Kindes stehen vor unvorstellbarem Schmerz. Die christliche Antwort ist nicht Verurteilung, sondern Begleitung: Kinderpalliativmedizin, Kinderhospize, Seelsorge, Hilfe für Geschwister. Die Kirche verlangt keine sinnlose Übertherapie – sie verbietet nur das gezielte Töten.`,
                  sources: [
                    { kind: 'gegner', author: 'Peter Singer', work: 'Practical Ethics', ref: 'Kap. 7', year: '3. Aufl. 2011', status: 'paraphrase' },
                    { kind: 'sonstiges', work: 'Regionale Kontrollkommissionen für Sterbehilfe (RTE), Niederlande: Jaarverslag 2024', year: '2025', status: 'paraphrase', note: 'Per Websuche geprüft (2026): 9.958 Meldungen (5,8 % aller Todesfälle), 2023: 9.068 (5,4 %); psychiatrische Erkrankungen 219 (2023: 138); Demenz 4,3 % (2023: 3,7 %). Für 2025 meldete ANP rund 10.300 Fälle.' },
                    { kind: 'bibel', work: 'Psalm', ref: '139,13–16', quote: `Du hast mich gebildet im Mutterleibe … Deine Augen sahen mich, da ich noch unbereitet war.`, translation: 'Luther 1912 (gekürzt)', status: 'paraphrase' },
                  ],
                  questionsBack: [
                    `Wenn Würde an Fähigkeiten hängt – ab welchem IQ, welchem Gedächtnis, welcher Lebensqualität verliert ein Mensch sie?`,
                    `Wer schützt die Menschen, die nicht mehr für sich selbst sprechen können?`,
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'unertraegliche-schmerzen',
      objection: `Manche Schmerzen sind unerträglich, und die Palliativmedizin hilft nicht immer. Willst du einen Menschen zwingen, qualvoll zu ersticken?`,
      objectionBy: 'Peter Singer',
      answer: `Nein. Niemand muss qualvoll sterben: Schmerzen lassen sich heute meist gut lindern, und wo das nicht gelingt, gibt es die palliative Sedierung, bei der der Patient schlafend stirbt – an seiner Krankheit, nicht an einer Tötung. Schon die Bibel sagt: „Gebt starkes Getränk denen, die umkommen sollen" (Spr 31,6). Und nach den Oregon-Berichten ist Schmerz gar nicht der Hauptgrund für den Sterbewunsch.`,
      followUps: [
        {
          id: 'sedierung-verkappt',
          objection: `Palliative Sedierung ist doch nur verkappte Euthanasie.`,
          objectionBy: 'Befürworter aktiver Sterbehilfe',
          answer: `Der Unterschied liegt in Ziel und Mittel: Bei der Sedierung ist das Ziel die Linderung, die Dosis richtet sich nach den Symptomen, und der Tod tritt durch die Grunderkrankung ein. Bei der Euthanasie ist der Tod das Ziel, und die Dosis ist so gewählt, dass sie tötet. Dieses Prinzip der Doppelwirkung unterscheidet auch sonst in der Medizin zwischen beabsichtigter Wirkung und in Kauf genommener Nebenwirkung.`,
          followUps: [
            {
              id: 'wach-abschied-nehmen',
              objection: `Und wenn eine Patientin nicht schlafend, sondern wach und bei klarem Verstand gehen will – im Kreis ihrer Familie, zu einem selbst gewählten Zeitpunkt? Die Sedierung nimmt ihr genau das.`,
              objectionBy: 'Udo Schüklenk',
              answer: `Das ist ein berührender Wunsch, und ich nehme ihn ernst. Gute Palliativmedizin ermöglicht meist genau das: wache Zeit für Abschied, Versöhnung und Segen, weil Schmerzen und Atemnot gelindert werden. Sedierung ist kein Entweder-oder, sondern kann vorübergehend und angepasst erfolgen. Aber der Wunsch, den Zeitpunkt selbst zu bestimmen, rechtfertigt nicht, dass ein Arzt tötet – und er verändert für alle anderen Kranken die Frage, ob sie noch bleiben dürfen.`,
              detail: `Ehrlich: Es gibt Menschen, denen das Warten auf den Tod unerträglich erscheint, und Christen sollten nicht so tun, als wäre das leicht. Die Kirche hat für diese Zeit einen reichen Schatz: die Krankensalbung (Jak 5,14), die heilige Kommunion als Wegzehrung, das Gebet der Familie, die Beichte und Versöhnung. Die koptische Tradition erzählt von Heiligen, die ihr Sterben bewusst annahmen und die Umstehenden segneten – Sterben als letzter Akt des Lebens, nicht als technisch terminierter Vorgang.

Hinzu kommt: Der Wunsch nach Kontrolle ist nach den Oregon-Berichten der häufigste Grund für assistierten Suizid. Auf Kontrollverlust antwortet man am besten mit Beziehung: Wer sicher weiß, dass er nicht allein gelassen wird, dass sein Wille zu Behandlungsgrenzen respektiert wird und dass Schmerzen gelindert werden, verliert oft die Angst vor dem Sterben.`,
              sources: [
                { kind: 'sonstiges', work: 'Oregon Health Authority: Death with Dignity Act Annual Reports', status: 'paraphrase', note: 'Häufigste genannte Gründe: Verlust der Autonomie, nachlassende Fähigkeit zu Aktivitäten, die das Leben lebenswert machen, Würdeverlust.' },
              ],
              questionsBack: [
                `Was bräuchte sie, um keine Angst mehr vor dem Kontrollverlust zu haben – eine Spritze oder die Gewissheit, nicht allein zu sein?`,
              ],
            },
          ],
        },
        {
          id: 'tiere-erloesen',
          objection: `Bei Tieren nennen wir es Gnade, sie zu erlösen. Warum gönnst du Menschen das nicht?`,
          objectionBy: 'Verbreitetes Argument',
          answer: `Gerade das zeigt das Problem: Beim Tier entscheiden wir ohne seine Zustimmung, weil wir sein Leben nicht für unantastbar halten. Genau diese Logik fürchten Menschen mit Demenz oder Behinderung, wenn Tötung zur „Gnade" erklärt wird. Der Mensch ist nach Gottes Bild geschaffen; seine Würde verlangt, dass wir ihn bis zuletzt begleiten, nicht „erlösen".`,
        },
      ],
    },
    {
      id: 'religion-aufzwingen',
      objection: `Du darfst deine religiöse Moral nicht per Gesetz anderen aufzwingen.`,
      objectionBy: 'Säkulare Ethik',
      answer: `Die stärksten Einwände sind gar nicht religiös: Der Weltärztebund lehnt Euthanasie und ärztlich assistierten Suizid ab; säkulare Behindertenorganisationen warnen vor Druck auf Verletzliche; und der hippokratische Eid, der dem Arzt das Töten verbietet, ist vorchristlich. Es geht um den Schutz der Schwächsten und das Vertrauen in die Medizin.`,
      followUps: [
        {
          id: 'eid-veraltet',
          objection: `Der hippokratische Eid ist zweieinhalbtausend Jahre alt. Medizinethik entwickelt sich weiter.`,
          objectionBy: 'Moderne Bioethik',
          answer: `Manche Einzelheiten des Eides sind zeitgebunden, sein Kern nicht: Der Arzt heilt und lindert, er tötet nicht. Gerade dieser Grundsatz macht es möglich, dass ein Patient sich einem Arzt ohne Angst anvertraut. Der Weltärztebund hat ihn 2019 ausdrücklich bekräftigt.`,
          followUps: [
            {
              id: 'gewissensfreiheit-aerzte',
              objection: `Niemand zwingt einen Arzt mitzumachen. Wer es ablehnt, lässt es. Ihr könnt eure Überzeugung leben, ohne sie anderen vorzuschreiben.`,
              objectionBy: 'Udo Schüklenk',
              answer: `In der Praxis gerät gerade diese Freiheit unter Druck. In Ontario müssen Ärzte, die nicht mitwirken, Patienten wirksam an einen Kollegen überweisen; das Berufungsgericht hat diese Pflicht 2019 bestätigt. In British Columbia verlor ein christlich geprägtes Hospiz (Delta Hospice Society) 2021 seine staatliche Finanzierung, weil es in seinen Räumen keine Sterbehilfe zulassen wollte. Wo Töten als Gesundheitsleistung gilt, wird die Weigerung zum Problem.`,
              detail: `Schüklenk selbst hat argumentiert, dass Ärzte, die legale Leistungen aus Gewissensgründen verweigern, sich einen anderen Beruf suchen sollten – das zeigt, dass „Niemand wird gezwungen" keine sichere Zusage ist. Für die Debatte: Es geht nicht darum, anderen den eigenen Glauben aufzuzwingen, sondern darum, ob Ärzte, Pflegekräfte und Hospize das Recht behalten, nicht an einer Tötung mitzuwirken. Eine Gesellschaft, die Vielfalt ernst nimmt, sollte Orte schützen, an denen Sterbende sicher sein können, dass niemand ihren Tod herbeiführt.`,
              sources: [
                { kind: 'sonstiges', work: 'Christian Medical and Dental Society of Canada v. College of Physicians and Surgeons of Ontario, 2019 ONCA 393', year: '2019', status: 'paraphrase', note: 'Das Berufungsgericht Ontario bestätigte die Pflicht zur „effective referral".' },
                { kind: 'gegner', author: 'Udo Schüklenk & Ricardo Smalling', work: '„Why medical professionals have no moral claim to conscientious objection accommodation in liberal democracies", Journal of Medical Ethics 43', year: '2017', status: 'paraphrase' },
              ],
              questionsBack: [
                `Darf es in deiner Gesellschaft ein Hospiz geben, in dem garantiert niemand getötet wird?`,
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'last-fuer-familie',
      objection: `Ich will meiner Familie nicht zur Last fallen. Das ist meine Würde.`,
      objectionBy: 'Persönlicher Einwand (häufig von Betroffenen)',
      answer: `Das ist ein zutiefst menschlicher Gedanke, und er verdient Zärtlichkeit, keine Belehrung. Aber gepflegt zu werden ist kein Würdeverlust – wir alle beginnen unser Leben in den Händen anderer. „Einer trage des andern Last" (Gal 6,2) ist kein Notfallplan, sondern das Gesetz Christi. Viele Familien erleben die letzte gemeinsame Zeit als kostbar: Versöhnung, Abschied, Dankbarkeit.`,
      followUps: [
        {
          id: 'sinnloses-leiden',
          objection: `Welchen Sinn soll Leiden am Ende des Lebens noch haben?`,
          objectionBy: 'Existenzielle Frage',
          answer: `Christen verherrlichen das Leiden nicht – sie lindern es, wo sie können. Aber auch im Leiden bleibt Leben: Beziehung, Liebe, Gebet, Versöhnung. Christus selbst ist durch das Leiden gegangen und hat es mit Hoffnung erfüllt; Paulus spricht von einer Herrlichkeit, die alles Leid überwiegt (2 Kor 4,17). Die Frage nach dem Sinn beantwortet man am besten nicht mit Worten, sondern mit Gegenwart.`,
          followUps: [
            {
              id: 'sinn-nur-fuer-glaeubige',
              objection: `Für dich als Christ mag Leiden Sinn haben. Für einen Atheisten hat es keinen. Du kannst deinen Glauben nicht zum Maßstab für sein Sterben machen.`,
              objectionBy: 'Peter Singer',
              answer: `Ich will niemandem meinen Glauben aufzwingen – ich biete ihn an, und vor allem biete ich Gegenwart an. Aber die Begleitung Sterbender ist keine Glaubensfrage: Cicely Saunders' Hospize nehmen Menschen jeder Überzeugung auf, und die Erfahrung dort ist, dass viele am Ende Sinn finden – in Beziehungen, Versöhnung, Erinnerung –, wenn Schmerzen gelindert und Ängste ernst genommen werden. Das Gesetz, um das wir streiten, betrifft zudem nicht nur den einen Atheisten, sondern alle Verletzlichen, die sich unter Druck gesetzt fühlen könnten.`,
              detail: `Auch säkulare Denker bezeugen, dass Leid nicht sinnlos sein muss: Viktor Frankl beschrieb aus der Erfahrung der Konzentrationslager, dass der Mensch selbst unter äußerstem Leid noch die Freiheit hat, eine Haltung zu wählen. Saunders' Konzept des „totalen Schmerzes" nimmt die spirituelle Dimension ernst, ohne eine bestimmte Religion vorauszusetzen. Und die Forschung zur Würde-zentrierten Therapie (Harvey Chochinov) zeigt, dass Sterbende Würde erleben, wenn man ihnen hilft, ihre Lebensgeschichte zu erzählen und Wichtiges weiterzugeben.`,
              voices: [
                {
                  person: 'cicely-saunders',
                  role: 'als Ärztin und Begründerin der Hospizbewegung',
                  text: `Saunders, die als junge Frau zum christlichen Glauben fand, verstand ihr Hospiz als Ort für alle. Sie verband modernste Schmerztherapie (regelmäßige, vorbeugende Gabe von Opioiden statt Warten auf den Schmerz) mit Zuwendung zu Familie, Ängsten und spirituellen Fragen. Ihr Ziel war, dass Menschen nicht nur „in Frieden sterben", sondern bis zuletzt leben können.`,
                  sources: [
                    { kind: 'fachliteratur', author: 'Cicely Saunders', work: 'Selected Writings 1958–2004', year: '2006', status: 'paraphrase' },
                    { kind: 'fachliteratur', author: 'Shirley du Boulay', work: 'Cicely Saunders: The Founder of the Modern Hospice Movement', year: '1984', status: 'paraphrase' },
                  ],
                },
              ],
              sources: [
                { kind: 'fachliteratur', author: 'Viktor E. Frankl', work: '… trotzdem Ja zum Leben sagen. Ein Psychologe erlebt das Konzentrationslager', year: '1946', status: 'paraphrase' },
                { kind: 'wissenschaft', author: 'Harvey Max Chochinov', work: 'Dignity Therapy: Final Words for Final Days', year: '2012', status: 'paraphrase' },
              ],
              questionsBack: [
                `Was hat Menschen, die im Hospiz ihren Sterbewunsch aufgegeben haben, umgestimmt – ein Argument oder eine Erfahrung?`,
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'kanada-sicher',
      objection: `Kanada zeigt, dass Sterbehilfe sicher ist: 2023 erhielten rund 15.300 Menschen MAID, die meisten mit Krebs und Zugang zu Palliativversorgung. Das sind keine armen, ausgegrenzten Opfer, sondern selbstbestimmte Bürger.`,
      objectionBy: 'Udo Schüklenk',
      answer: `Es stimmt, dass die meisten Empfänger in Kanada todkrank waren und Palliativversorgung hatten – das soll man fair sagen. Aber gerade bei den Fällen ohne absehbaren Tod (seit 2021) hat das Gutachtergremium des Chefcoroners von Ontario Fälle dokumentiert, in denen Einsamkeit, Armut oder fehlende Unterstützung eine Rolle spielten. Und 4,7 % aller Todesfälle nach nur sieben Jahren zeigen, wie schnell aus der Ausnahme eine Routine wird.`,
      detail: `Nach dem fünften Jahresbericht von Health Canada (Dezember 2024) erhielten 2023 15.343 Menschen MAID, etwa 4,7 % aller Todesfälle; die Zahl stieg um 15,8 % gegenüber 2022. Die Ausweitung auf rein psychische Erkrankungen wurde auf 2027 verschoben. Health Canada weist selbst darauf hin, dass MAID statistisch nicht als Todesursache geführt wird.

Das Ontario MAID Death Review Committee (beim Chief Coroner) hat 2024 in Berichten Fälle analysiert, in denen Menschen mit Behinderung oder in sozialer Isolation MAID erhielten, und auf Lücken in der Unterstützung hingewiesen. Für dich gilt: Bleib bei den offiziellen Berichten, nenne keine reißerischen Einzelfälle aus zweiter Hand, und sprich mit Mitgefühl über die Betroffenen.`,
      sources: [
        { kind: 'sonstiges', work: 'Health Canada: Fifth Annual Report on Medical Assistance in Dying in Canada, 2023', year: '2024', status: 'paraphrase', note: 'Per Websuche geprüft (2026): 15.343 MAID-Fälle, ca. 4,7 % aller Todesfälle, +15,8 % gegenüber 2022.' },
        { kind: 'sonstiges', work: 'Office of the Chief Coroner for Ontario: MAID Death Review Committee Reports', year: '2024', status: 'paraphrase', note: 'Analysen u. a. zu Track-2-Fällen mit sozialer Vulnerabilität; Einzelheiten vor Verwendung im Original prüfen.' },
      ],
      questionsBack: [
        `Was sagt es über eine Gesellschaft, wenn ein Mensch schneller Sterbehilfe erhält als eine barrierefreie Wohnung?`,
      ],
      followUps: [
        {
          id: 'sozialhilfe-statt-verbot',
          objection: `Dann muss man eben die Sozialleistungen verbessern, nicht die Sterbehilfe verbieten. Armut ist das Problem, nicht MAID.`,
          objectionBy: 'Udo Schüklenk / Befürworter von MAID',
          answer: `Die Sozialleistungen verbessern – unbedingt, da sind wir uns einig. Aber solange die Unterstützung fehlt, ist die „freie Wahl" eines armen, einsamen oder behinderten Menschen nicht frei. Ein Staat, der den Tod schneller und verlässlicher anbietet als Hilfe zum Leben, sendet eine Botschaft: Dein Leben ist eine Option, über die man reden kann. Barmherzigkeit fängt bei der Hilfe zum Leben an, nicht beim Ausweg aus ihm.`,
          detail: `Die frühe Kirche war für ihre Fürsorge berühmt: Kaiser Julian beklagte im 4. Jahrhundert, dass die „Galiläer" nicht nur ihre eigenen, sondern auch die heidnischen Armen versorgten. Basilius baute vor Caesarea ein Krankenhaus für Aussätzige. Die koptische Kirche betreibt bis heute Krankenhäuser, Behindertenheime und Sozialdienste in Ägypten. Diese Tradition ist die eigentliche Antwort auf die Frage nach Barmherzigkeit: Wir lassen niemanden allein, damit niemand sich wünschen muss, zu verschwinden.`,
          voices: [
            {
              person: 'tawadros-ii',
              role: 'als 118. Papst von Alexandrien',
              text: `Papst Tawadros II. betont in seiner Amtszeit die diakonische Sendung der Kirche: Dienst an Armen, Kranken und Menschen mit Behinderung als Ausdruck des Evangeliums. Die koptisch-orthodoxe Kirche unterhält in Ägypten und der Diaspora Krankenhäuser, Pflegeeinrichtungen und Sozialprogramme – gelebte Barmherzigkeit, die das Leben bis zuletzt begleitet.`,
              sources: [
                { kind: 'koptisch', author: 'Koptisch-orthodoxes Patriarchat', work: 'Bischöfliches Amt für Sozialdienste (Bishopric of Public, Ecumenical and Social Services)', status: 'paraphrase', note: 'Allgemeine Darstellung des diakonischen Wirkens; kein einzelnes Dokument zitiert.' },
              ],
            },
          ],
          sources: [
            { kind: 'sonstiges', author: 'Kaiser Julian', work: 'Brief an Arsakios, Oberpriester von Galatien', ref: 'Ep. 22 (Loeb-Zählung)', year: '362', status: 'paraphrase', note: 'Julian war ein Gegner des Christentums – sein Zeugnis wiegt daher schwer.' },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wenn Selbstbestimmung der Grund ist – warum dann nur bei Todkranken?`,
    `Wenn Mitleid der Grund ist – warum dann nur bei Menschen, die zustimmen können?`,
    `Wie stellst du sicher, dass sich Kranke nicht verpflichtet fühlen, „Platz zu machen"?`,
    `Hast du einmal ein gutes Hospiz von innen gesehen?`,
  ],
  avoid: [
    `Menschen, die Sterbehilfe erwägen, moralisch abkanzeln – sie sind in Not und brauchen Nähe.`,
    `Behaupten, jede Therapie müsse bis zuletzt fortgesetzt werden – das ist nicht die Lehre der Kirche.`,
    `Mit ungeprüften Einzelfällen aus den Medien argumentieren; stütze dich auf Jahresberichte und Gesetzesänderungen.`,
    `Suizid mit Verdammnis gleichsetzen – die Kirche überlässt das Urteil Gott und betet für alle Verstorbenen.`,
  ],
  concessions: [
    `Es gibt Fälle schwersten Leidens, die auch mit guter Palliativmedizin schwer zu lindern sind.`,
    `Übertherapie am Lebensende ist ein reales Problem; die Kirche verlangt keine Lebensverlängerung um jeden Preis.`,
    `Auch Christen (z. B. Hans Küng) haben Sterbehilfe befürwortet; die Debatte geht quer durch die Lager.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'John Wyatt', work: 'Dying Well', year: '2018', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Cicely Saunders', work: 'Selected Writings 1958–2004', year: '2006', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Eleonore Stump', work: 'Wandering in Darkness', year: '2010', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Sterbehilfe', 'Euthanasie', 'Palliativmedizin', 'Hospiz', 'Würde'],
  related: [
    'bioethik/embryo-zellhaufen',
    'sinn-existenz/tod-ist-das-ende',
    'theodizee/evidentielles-problem',
    'moral-und-gott/gut-ohne-gott',
    'informatik-ki/transhumanismus',
  ],
};

export default claim;
