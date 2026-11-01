import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'sexualmoral-veraltet',
  title: `„Christliche Sexualmoral ist veraltet und repressiv."`,
  proponents: [
    { name: 'Dan Savage', role: 'Publizist, Kolumne „Savage Love"', work: 'Savage Love; American Savage (2013)' },
    { name: 'Christopher Hitchens', role: 'Publizist und Religionskritiker', work: 'God Is Not Great (2007)' },
    { name: 'Wilhelm Reich', role: 'Psychoanalytiker', work: 'Die sexuelle Revolution (1936/1945)' },
    { name: 'Peter Singer', role: 'Ethiker, Princeton', work: 'Practical Ethics (1979; 3. Aufl. 2011)' },
  ],
  steelman: `Die christliche Sexualmoral stammt aus einer Welt ohne Verhütung, mit hoher Kindersterblichkeit, in der Frauen als Eigentum ihrer Väter und Männer galten und Vaterschaft über das Erbe entschied. Unter diesen Bedingungen mag es sinnvoll gewesen sein, Sexualität streng an die Ehe zu binden. Heute, mit sicherer Verhütung, Gleichberechtigung und dem Wissen der Sexualwissenschaft, bleiben nur zwei vernünftige Kriterien: Einvernehmen und keinen Schaden. Alles darüber hinaus ist religiöser Ballast, der Generationen von Menschen mit Scham und Schuldgefühlen belastet hat – besonders Frauen, deren Sexualität kontrolliert wurde, und Homosexuelle, die sich verstecken mussten. Die kirchliche Fixierung auf Sex hat zudem eine Kultur des Schweigens erzeugt, in der sexueller Missbrauch durch Kleriker jahrzehntelang vertuscht wurde. Eine Moral, die das Natürlichste der Welt zur Sünde erklärt, ist nicht nur veraltet, sondern schädlich.`,
  biblical: {
    summary: `Die Bibel ist nicht sexualfeindlich: Gott schuf den Menschen als Mann und Frau und „sah an alles, was er gemacht hatte, und siehe da, es war sehr gut" (Gen 1,31). „Sie waren beide nackt … und schämten sich nicht" (Gen 2,25). Das Hohelied feiert die erotische Liebe, und die Sprüche ermutigen: „Freue dich des Weibes deiner Jugend" (Spr 5,18). Paulus formuliert eine für die Antike unerhörte **Gegenseitigkeit**: Nicht nur die Frau, auch der Mann „ist seines Leibes nicht mächtig", sondern gehört dem anderen (1 Kor 7,3–4). Die Grenze, die die Bibel zieht, ist kein Nein zur Sexualität, sondern ein Ja zu ihrem Ort: dem lebenslangen, treuen Bund. Der Leib ist „ein Tempel des Heiligen Geistes" (1 Kor 6,19), also nicht verachtenswert, sondern heilig.`,
    detail: `**Gegenseitigkeit (1 Kor 7,3–4).** „Das Weib ist ihres Leibes nicht mächtig, sondern der Mann. Desgleichen der Mann ist seines Leibes nicht mächtig, sondern das Weib." In einer Kultur, in der der Ehemann rechtlich über seine Frau verfügte, Sklavinnen und Prostituierte aber für ihn frei verfügbar waren, war die zweite Hälfte des Satzes revolutionär.

**Sexualität als Sprache des Bundes.** Gen 2,24 verbindet „verlassen – anhangen – ein Fleisch werden": Die leibliche Einheit ist Ausdruck einer Ganzhingabe. Die Bibel sagt damit: Der Leib spricht eine Sprache – „Ich gebe mich dir ganz". Ohne den Bund sagt der Leib etwas, was das Leben nicht einlöst.

**Jesus und die Sünder.** Jesus verschärft die Sexualethik (Mt 5,27–28: das Begehren im Herzen), aber er begegnet sexuell gescheiterten Menschen mit unerhörter Barmherzigkeit: der Samariterin (Joh 4), der „Sünderin" im Haus des Pharisäers (Lk 7,36–50), der Ehebrecherin (Joh 8). Die christliche Sexualethik ist von Anfang an mit Vergebung verbunden: „Und solche sind euer etliche gewesen; aber ihr seid abgewaschen" (1 Kor 6,11).`,
    sources: [
      { kind: 'bibel', work: 'Genesis', ref: '2,24–25', quote: `Darum wird ein Mann seinen Vater und seine Mutter verlassen und an seinem Weibe hangen, und sie werden sein ein Fleisch. Und sie waren beide nackt, der Mensch und sein Weib, und schämten sich nicht.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Korinther', ref: '7,3–4', quote: `Der Mann leiste dem Weib die schuldige Freundschaft, desgleichen das Weib dem Manne. Das Weib ist ihres Leibes nicht mächtig, sondern der Mann. Desgleichen der Mann ist seines Leibes nicht mächtig, sondern das Weib.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Sprüche', ref: '5,18–19', quote: `Dein Born sei gesegnet, und freue dich des Weibes deiner Jugend.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Korinther', ref: '6,19–20', quote: `Oder wisset ihr nicht, daß euer Leib ein Tempel des heiligen Geistes ist, der in euch ist …? Denn ihr seid teuer erkauft; darum so preiset Gott an eurem Leibe.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die Kirche hat von Anfang an zwei Irrwege abgelehnt: die **heidnische Ausbeutung**, die den Körper der Schwächeren frei verfügbar machte, und die **gnostische Leibfeindlichkeit**, die Ehe und Sexualität verachtete. Klemens von Alexandrien verteidigte im 3. Buch seiner *Stromateis* die Ehe gegen gnostische Gruppen, die sie als unrein verwarfen. In der koptischen Kirche ist die Ehe eines der sieben **Sakramente**: In der Feier der Krönung (Ehekrönung) segnet der Priester das Paar, das zu einer „kleinen Kirche" wird. Keuschheit ist für die koptische Tradition keine Unterdrückung, sondern Ganzheit – die Integration der Sexualität in die Liebe, in der Ehe als Treue, im ehelosen und monastischen Leben als Hingabe an Gott.`,
    sources: [
      { kind: 'kirchenvater', author: 'Klemens von Alexandrien', work: 'Stromateis', ref: 'Buch III', year: 'um 200', quote: `Verteidigung der Ehe gegen Gnostiker, die sie als unrein verwarfen, wie gegen solche, die Zügellosigkeit predigten; Ehe und Enthaltsamkeit sind beide Wege der Heiligkeit.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Homilien zum Epheserbrief', ref: 'Hom. 20', quote: `Das Haus der Eheleute ist eine kleine Kirche.`, status: 'paraphrase' },
      { kind: 'liturgie', work: 'Ritus der Ehekrönung der Koptisch-Orthodoxen Kirche', quote: `Gebete um die Einheit, Treue und Fruchtbarkeit des Paares; die Kronen als Zeichen der Würde und des Martyriums gegenseitiger Hingabe.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Die Bewertung der sexuellen Revolution ist auch unter säkularen Forschern umstritten. Einerseits haben Verhütung und Gleichberechtigung vielen Frauen echte Freiheiten gebracht. Andererseits dokumentieren Sozialwissenschaftler steigende Raten von Einsamkeit, Beziehungslosigkeit und Alleinerziehenden-Haushalten sowie die Folgen der Pornografie. Säkulare Autorinnen wie die Feministin Louise Perry (*The Case Against the Sexual Revolution*, 2022) argumentieren, dass eine reine Einvernehmensethik besonders Frauen schadet. Der Historiker Kyle Harper zeigt, dass die christliche Sexualethik in der Antike eine Befreiung war: Sie ersetzte eine Moral der Scham und des sozialen Status, in der Sklaven, Prostituierte und Knaben verfügbar waren, durch eine Moral der persönlichen Freiheit und Verantwortung vor Gott.`,
    sources: [
      { kind: 'fachliteratur', author: 'Kyle Harper', work: 'From Shame to Sin: The Christian Transformation of Sexual Morality in Late Antiquity', year: '2013', quote: `Das Christentum ersetzte eine an Status und Ehre orientierte Sexualordnung durch eine, die jeden Menschen als freies, vor Gott verantwortliches Subjekt sieht – mit tiefgreifenden Folgen für Sklaven und Frauen.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Louise Perry', work: 'The Case Against the Sexual Revolution', year: '2022', quote: `Die sexuelle Revolution habe vor allem Männern genützt; eine Ethik, die nur Einvernehmen kennt, schütze Frauen nicht ausreichend vor Pornografie, Druck und Ausbeutung.`, status: 'paraphrase', note: 'Perry schrieb das Buch aus säkular-feministischer Perspektive.' },
      { kind: 'fachliteratur', author: 'Mary Eberstadt', work: 'Adam and Eve after the Pill', year: '2012', status: 'paraphrase' },
    ],
  },
  quickAnswer: `Christliche Sexualmoral ist kein Nein zur Sexualität, sondern ein Ja zu ihrem Ort: dem lebenslangen, treuen Bund. Sie war in der Antike eine Befreiung – damals waren Sklavinnen, Prostituierte und Knaben für freie Männer verfügbar, und das Christentum erklärte jeden Körper für gleich geschützt. Heute sagen sogar säkulare Feministinnen, dass „Einvernehmen" allein Frauen nicht schützt. Dass Christen versagt und Missbrauch vertuscht haben, ist eine Schande – aber das ist Verrat an dieser Moral, nicht ihre Folge.`,
  keyPoints: [
    `**Ja zur Sexualität:** Gen 1,31; 2,25; das Hohelied; Spr 5,18 – die Bibel feiert die Sexualität im Bund.`,
    `**Revolutionäre Gegenseitigkeit:** „Der Mann ist seines Leibes nicht mächtig, sondern das Weib" (1 Kor 7,4).`,
    `**Historische Befreiung:** Christliche Ethik schützte Sklaven, Prostituierte und Kinder vor sexueller Verfügbarkeit (Kyle Harper).`,
    `**Einvernehmen ist nötig, aber nicht genug:** Auch säkulare Stimmen (Louise Perry) sehen die Grenzen einer reinen Einvernehmensethik.`,
    `**Weder Gnosis noch Ausbeutung:** Die Kirche hat leibfeindliche Gruppen ebenso verworfen wie Zügellosigkeit (Klemens von Alexandrien).`,
    `**Mit Vergebung verbunden:** Jesu Barmherzigkeit für sexuell Gescheiterte (Joh 4; Joh 8; Lk 7) gehört zum Kern der christlichen Sexualethik.`,
  ],
  voices: [
    {
      person: 'paulus',
      role: 'als Seelsorger einer Hafenstadt',
      text: `Korinth war für seine Freizügigkeit berüchtigt. Paulus antwortet in 1 Kor 6–7 auf zwei Gruppen zugleich: auf die, die sagten „Mir ist alles erlaubt" (6,12), und auf die, die meinten, es sei „gut für den Menschen, keine Frau zu berühren" (7,1). Gegen die einen betont er, dass der Leib dem Herrn gehört und ein Tempel des Geistes ist; gegen die anderen, dass Mann und Frau einander in der Ehe gehören und sich nicht entziehen sollen. Seine Ethik ist weder lustfeindlich noch beliebig: Der Leib ist gut, kostbar und „teuer erkauft".`,
      sources: [{ kind: 'bibel', work: '1. Korinther', ref: '6,12–7,7', status: 'paraphrase' }],
    },
    {
      person: 'clemens-alexandrien',
      role: 'als Leiter der alexandrinischen Katechetenschule',
      text: `Klemens lebte in Alexandria, wo gnostische Gruppen einerseits die Ehe als unrein verwarfen und andere die Freiheit von allen sittlichen Regeln predigten. Im 3. Buch der *Stromateis* verteidigt er die Ehe als gute Schöpfung Gottes: Die Apostel Petrus und Philippus seien verheiratet gewesen, und wer die Ehe verachte, lästere den Schöpfer. Zugleich lehrt er, dass die Sexualität geordnet und von Liebe und Selbstbeherrschung getragen sein müsse. Für Klemens ist der verheiratete Christ, der seinen Haushalt in Liebe führt, sogar in mancher Hinsicht der größere Asket.`,
      sources: [{ kind: 'kirchenvater', author: 'Klemens von Alexandrien', work: 'Stromateis', ref: 'III; VII,12', status: 'paraphrase' }],
    },
    {
      person: 'kyle-harper',
      role: 'als Althistoriker',
      text: `Harper beschreibt die römische Sexualordnung als eine Moral der Scham und des Status: Entscheidend war nicht, *was* jemand tat, sondern *mit wem* gemäß seinem Rang. Freie Männer durften Sklaven, Prostituierte und Knaben gebrauchen; geschützt war nur die Ehre ehrbarer Frauen und Familien. Das Christentum führte etwas Neues ein: die Vorstellung, dass jeder Mensch – auch der Sklave – ein freies sittliches Subjekt vor Gott ist, dessen Körper nicht verfügbar ist. Diese Umwandlung, so Harper, war einer der tiefsten kulturellen Brüche der Antike.`,
      sources: [{ kind: 'fachliteratur', author: 'Kyle Harper', work: 'From Shame to Sin', year: '2013', status: 'paraphrase' }],
    },
    {
      person: 'tim-keller',
      role: 'als Pastor säkularer Großstädter',
      text: `In *The Meaning of Marriage* (2011) beschreibt Keller Sexualität als „Bundeszeichen": So wie die Unterschrift einen Vertrag besiegelt, erneuert die leibliche Hingabe das Versprechen, das zwei Menschen einander gegeben haben. Außerhalb des Bundes sagt der Leib „Ich gehöre dir ganz", während das Leben sagt „Aber nur für jetzt". Keller betont, dass die christliche Sicht die Sexualität höher stellt als die säkulare: Sie ist nicht nur Vergnügen oder Bedürfnis, sondern eine Weise, sich ganz einem anderen Menschen zu schenken.`,
      sources: [{ kind: 'fachliteratur', author: 'Timothy Keller; Kathy Keller', work: 'The Meaning of Marriage', year: '2011', status: 'paraphrase' }],
    },
    {
      person: 'chrysostomus',
      role: 'als Prediger der gleichen Treuepflicht',
      text: `Chrysostomus wandte sich in seinen Predigten über 1 Kor 7 scharf gegen die Doppelmoral seiner Zeit: Ein Mann, der zu einer Prostituierten oder einer Sklavin geht, begeht ebenso Ehebruch wie eine Frau, die ihren Mann betrügt. Das Gesetz der Treue gilt für beide gleich, weil beide einander gehören. In einer Gesellschaft, in der Männern sexuelle Freiheiten selbstverständlich zugestanden wurden, war das eine ungeheure Zumutung – und ein Schutz für Frauen.`,
      sources: [{ kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Homilien zum 1. Korintherbrief', ref: 'Hom. 19 (zu 1 Kor 7)', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'einvernehmen-reicht',
      objection: `Die christliche Sexualmoral stammt aus einer Zeit ohne Verhütung. Heute gilt: Was zwei Erwachsene einvernehmlich tun und niemandem schadet, ist ihre Sache. Mehr Moral braucht Sexualität nicht.`,
      objectionBy: 'Peter Singer',
      answer: `Einvernehmen ist unverzichtbar – ohne Einvernehmen ist jede Sexualität Gewalt. Aber ist es genug? Sogar säkulare Feministinnen wie Louise Perry sagen heute: Nein. Pornografie, Druck in Gelegenheitsbeziehungen und die Erwartung, Sex sei „nichts Besonderes", schaden vor allem Frauen – obwohl formal alles einvernehmlich ist. Die christliche Ethik bindet Sexualität an einen Bund, weil der Leib mehr sagt als ein Vertrag: „Ich gebe mich dir ganz."`,
      questionsBack: [
        `Ist Sexualität für dich etwas Bedeutungsloses wie Händeschütteln – oder etwas, das Menschen tief verbindet und verletzen kann?`,
        `Wenn Sexualität bedeutsam ist: Welcher Rahmen schützt die Verletzlichen am besten?`,
      ],
      followUps: [
        {
          id: 'moralpanik',
          objection: `Das ist moralische Panik. Die Menschen sind heute freier und glücklicher als je zuvor. Niemand will zurück in die Fünfzigerjahre.`,
          objectionBy: 'Dan Savage',
          answer: `Niemand will zurück zu Doppelmoral und Verklemmtheit – die waren auch nicht christlich. Aber „glücklicher" ist eine empirische Behauptung: Sozialforscher berichten von wachsender Einsamkeit, weniger stabilen Beziehungen und mehr Kindern, die ohne einen Elternteil aufwachsen. Und die Geschichte zeigt: Die christliche Sexualethik war in der Antike selbst die große Befreiung – damals waren Sklavinnen, Prostituierte und Knaben für freie Männer verfügbar, und das Christentum erklärte jeden Körper für gleich geschützt.`,
          followUps: [
            {
              id: 'kirche-bestrafte-frauen',
              objection: `Du romantisierst die Geschichte. Die Kirche hat jahrhundertelang Frauen für Sex bestraft und Männern alles durchgehen lassen.`,
              objectionBy: 'Christopher Hitchens',
              answer: `Es gab diese Doppelmoral in christlichen Gesellschaften, und sie war Unrecht. Aber sie widersprach der christlichen Lehre: Gregor von Nazianz und Johannes Chrysostomus haben genau diese Doppelmoral angeprangert und von Männern dieselbe Treue verlangt wie von Frauen. Paulus schreibt, dass auch der Mann über seinen Leib nicht verfügt, sondern seine Frau (1 Kor 7,4). Wo Christen das nicht gelebt haben, haben sie ihre eigene Moral verraten.`,
              followUps: [
                {
                  id: 'purity-culture-scham',
                  objection: `Ich bin in der „Purity Culture" aufgewachsen: Mädchen wurden mit zerkautem Kaugummi und zerknitterten Rosen verglichen, die niemand mehr will, wenn sie vor der Ehe Sex hatten. Viele Frauen leiden bis heute an Scham und Angst vor ihrem eigenen Körper.`,
                  objectionBy: 'Linda Kay Klein',
                  answer: `Was du beschreibst, hat Menschen tief verletzt, und es tut mir leid. Diese Bilder sind nicht christlich, sondern ein Verrat am Evangelium: Kein Mensch ist „benutzte Ware", und Gott wirft niemanden weg. Die orthodoxe Kirche verehrt Maria von Ägypten, die jahrelang als Prostituierte lebte und zu einer der größten Heiligen der Wüste wurde. Keuschheit ist eine Tugend für Männer und Frauen gleichermaßen, und ihr Ziel ist nicht Angst, sondern Freiheit und Liebe – mit der Beichte als Ort, an dem jede Scham Vergebung findet.`,
                  detail: `Linda Kay Klein hat in *Pure* (2018) die Erfahrungen vieler Frauen aus der evangelikalen Reinheitsbewegung der 1990er-Jahre gesammelt. Ihre Kritik trifft vor allem eine Pädagogik, die mit Scham und Angst arbeitete und Frauen einseitig für die Sexualität der Männer verantwortlich machte. Die orthodoxe Tradition kennt einen anderen Ton: Der geistliche Vater begleitet, statt zu beschämen; die Umkehr ist immer offen; und der Leib ist „Tempel des Heiligen Geistes" (1 Kor 6,19) – zu ehren, nicht zu fürchten. Wichtig für dein Gespräch: Höre zuerst zu. Ein Mensch, der verletzt wurde, braucht zuerst Anerkennung, dann Argumente.`,
                  sources: [
                    { kind: 'gegner', author: 'Linda Kay Klein', work: 'Pure: Inside the Evangelical Movement That Shamed a Generation of Young Women and How I Broke Free', year: '2018', status: 'paraphrase' },
                    { kind: 'kirchenvater', author: 'Sophronius von Jerusalem (zugeschrieben)', work: 'Leben der hl. Maria von Ägypten', year: '7. Jh.', status: 'paraphrase', note: 'In der orthodoxen Fastenzeit gelesen; Vorbild der Umkehr.' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'missbrauchsskandale',
      objection: `Die Missbrauchsskandale zeigen, wohin Sexualunterdrückung und Zölibat führen. Eine Institution, die Kinderschänder deckt, soll uns Sexualmoral predigen?`,
      objectionBy: 'Christopher Hitchens',
      answer: `Der Missbrauch von Kindern durch Kleriker und seine Vertuschung sind ein entsetzliches Verbrechen und ein Verrat an Christus, der gesagt hat: Wer einen dieser Kleinen zu Fall bringt, für den wäre es besser, mit einem Mühlstein im Meer versenkt zu werden (Mt 18,6). Aber die Ursache ist nicht die christliche Sexualmoral, sondern ihre Verletzung, verbunden mit Macht und Geheimhaltung. Missbrauch geschieht leider auch in Familien, Schulen, Sportvereinen und säkularen Einrichtungen. Und in der koptischen Kirche sind die Gemeindepriester verheiratet – Zölibat allein erklärt das Problem nicht.`,
      followUps: [
        {
          id: 'vertuschung',
          objection: `Trotzdem hat die Kirche vertuscht, um ihren Ruf zu schützen. Das ist systemisch.`,
          objectionBy: 'Christopher Hitchens',
          answer: `Ja, und das ist unentschuldbar. Eine Kirche, die Täter schützt, statt Opfer, stellt sich gegen das Evangelium. Die christliche Antwort ist nicht weniger Moral, sondern mehr Ehrlichkeit: Licht statt Dunkelheit (Eph 5,11), Zusammenarbeit mit den staatlichen Behörden, Schutz und Gehör für die Betroffenen. Jesus hat die Heuchelei religiöser Führer schärfer verurteilt als jede andere Sünde (Mt 23).`,
          followUps: [
            {
              id: 'zoelibat-ursache',
              objection: `Der Zölibat ist die Ursache: Eine Kirche, die gesunde Sexualität unterdrückt, produziert Täter.`,
              objectionBy: 'Christopher Hitchens',
              answer: `So einfach ist es nach der Forschung nicht. Der große Bericht des John Jay College für die US-Bischöfe (2011) fand keinen Beleg, dass der Zölibat an sich Missbrauch verursacht; Missbrauch geschieht auch in Kirchen mit verheirateten Geistlichen, in Schulen, Sportvereinen und vor allem in Familien. Die deutsche MHG-Studie nennt den Zölibat nicht als Ursache, aber als möglichen Risikofaktor im Zusammenspiel mit anderen. Die koptische Kirche hat übrigens überwiegend verheiratete Gemeindepriester – auch sie ist nicht davor gefeit, wenn Macht und Schweigen zusammenkommen.`,
              detail: `Die Forschung weist immer wieder auf strukturelle Faktoren: Klerikalismus (die Überhöhung des Geistlichen), fehlende Kontrolle, eine Kultur des Schweigens und der Schutz des Rufs der Institution. Das ist für jede Kirche eine Warnung, gleich ob ihre Priester verheiratet sind oder nicht.`,
              sources: [
                { kind: 'wissenschaft', author: 'John Jay College of Criminal Justice', work: 'The Causes and Context of Sexual Abuse of Minors by Catholic Priests in the United States, 1950–2010', year: '2011', status: 'paraphrase' },
              ],
              followUps: [
                {
                  id: 'warum-dann-missbrauch',
                  objection: `Wenn nicht der Zölibat – warum dann? Irgendetwas an eurer Struktur macht es möglich.`,
                  objectionBy: 'Christopher Hitchens',
                  answer: `Ja – und zwar etwas, das Jesus selbst angeprangert hat: religiöse Macht ohne Rechenschaft. Wo Geistliche als unantastbar gelten, wo Opfer nicht gehört werden und wo der Ruf der Institution mehr zählt als ein Kind, entsteht ein Raum für Täter. Jesus sagte seinen Jüngern: „Wer unter euch groß sein will, der sei euer Diener" (Mk 10,43), und er stellte ein Kind in die Mitte. Jede Kirche – auch die koptische – muss sich daran messen lassen: unabhängige Anlaufstellen, Zusammenarbeit mit staatlichen Behörden, Schutzkonzepte, Transparenz.`,
                  detail: `Seelsorgerlicher Hinweis: Wenn dein Gegenüber selbst betroffen ist oder Betroffene kennt, ist dies nicht der Moment für Apologetik, sondern für Zuhören und konkrete Hilfe. Die Glaubwürdigkeit der Kirche wird nicht durch Argumente wiederhergestellt, sondern durch Umkehr und Taten.`,
                  sources: [
                    { kind: 'bibel', work: 'Markus', ref: '10,42–45', quote: `Wer groß werden will unter euch, der soll euer Diener sein.`, translation: 'Luther 1912', status: 'paraphrase' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'warten-unrealistisch',
      objection: `Sex vor der Ehe ist natürlich und normal. Bis zur Hochzeit zu warten ist unrealistisch, und die Schuldgefühle, die ihr erzeugt, machen Menschen krank.`,
      objectionBy: 'Dan Savage',
      answer: `Die christliche Ethik will keine Scham erzeugen, sondern die Würde des Leibes schützen. Und sie ist untrennbar mit Vergebung verbunden: Niemand ist zu weit gegangen, um zurückzukommen (1 Kor 6,11). In der koptischen Kirche ist die Beichte ein Ort der Heilung, nicht der Verurteilung. Dass etwas schwer ist, heißt nicht, dass es falsch ist – Treue in der Ehe ist auch nicht immer leicht, und doch halten wir sie für gut.`,
      followUps: [
        {
          id: 'stueck-papier',
          objection: `Was ändert ein Stück Papier oder eine Zeremonie? Liebe ist Liebe, ob mit oder ohne Trauschein.`,
          objectionBy: 'Dan Savage',
          answer: `Die Ehe ist kein Stück Papier, sondern ein Versprechen: öffentlich, ausschließlich, lebenslang. Sexualität sagt mit dem Leib „Ich gehöre dir ganz und für immer". Ohne das Versprechen sagt der Leib etwas, das das Leben nicht einlöst. Kierkegaard hat es so gesagt: Erst wenn die Liebe zur Pflicht geworden ist, ist sie gegen Veränderung gesichert. Das Versprechen schützt die Liebe vor unseren eigenen Stimmungen.`,
          followUps: [
            {
              id: 'zusammenleben-testlauf',
              objection: `Zusammenleben vor der Ehe ist doch ein vernünftiger Testlauf. Wer kauft schon ein Auto ohne Probefahrt? So vermeidet man spätere Scheidungen.`,
              objectionBy: 'Dan Savage',
              answer: `Ein Mensch ist kein Auto, und Liebe, die unter Vorbehalt geschenkt wird – „ich behalte dich, wenn du dich bewährst" –, ist etwas anderes als die Hingabe, die sagt: „Ich will dich, so wie du bist und wirst." Auch empirisch ist der Testlauf keine sichere Versicherung: Die Forscher Galena Rhoades und Scott Stanley fanden, dass Paare, die schon vor der Verlobung zusammenzogen, im Durchschnitt eine geringere Ehequalität und ein höheres Trennungsrisiko hatten – viele „rutschen" in eine Ehe hinein, statt sich bewusst zu entscheiden. Die Datenlage ist komplex, aber das Testlauf-Versprechen hält sie nicht.`,
              detail: `Neuere Studien (etwa Rosenfeld und Roesler, 2019) zeigen ein gemischtes Bild: Wer zusammengelebt hat, hat im ersten Ehejahr ein etwas geringeres, später aber ein höheres Scheidungsrisiko. Für dein Gespräch: Überziehe die Statistik nicht. Die christliche Begründung hängt nicht an Zahlen, sondern an der Bedeutung der Sexualität: Der Leib spricht die Sprache der vollständigen Hingabe; diese Sprache soll nicht lügen.`,
              sources: [
                { kind: 'wissenschaft', author: 'Galena K. Rhoades; Scott M. Stanley; Howard J. Markman', work: '„The Pre-engagement Cohabitation Effect: A Replication and Extension of Previous Findings", Journal of Family Psychology 23(1)', year: '2009', status: 'paraphrase' },
                { kind: 'wissenschaft', author: 'Michael J. Rosenfeld; Katharina Roesler', work: '„Cohabitation Experience and Cohabitation\'s Association With Marital Dissolution", Journal of Marriage and Family 81(1)', year: '2019', status: 'paraphrase' },
              ],
              followUps: [
                {
                  id: 'korrelation-religioese-paare',
                  objection: `Das ist Korrelation, nicht Kausalität. Religiöse Menschen ziehen seltener zusammen und lassen sich seltener scheiden – nicht wegen des Wartens, sondern weil sie religiös sind.`,
                  objectionBy: 'Dan Savage',
                  answer: `Das ist ein berechtigter methodischer Einwand, und deshalb stütze ich mich nicht auf Statistik. Mein eigentliches Argument ist ein anderes: Sexualität ist nicht nur ein Gefühl, sondern eine Sprache des Leibes, die sagt: „Ich gebe mich dir ganz." Die Ehe ist das öffentliche, verbindliche Ja, das dieser Sprache entspricht. Ohne dieses Ja sagt der Leib etwas, das die Person noch nicht versprochen hat. Die christliche Ethik will, dass Leib und Wort übereinstimmen.`,
                  detail: `Tim Keller beschreibt Sex als „Bundeserneuerungszeremonie": In der Ehe erneuert das Paar mit dem Leib, was es vor Gott und Menschen versprochen hat. Außerhalb der Ehe wird dieselbe Geste von ihrem Sinn getrennt. Das ist kein Urteil über die Liebe zusammenlebender Paare, sondern eine Einladung, diese Liebe in ein ganzes Ja zu führen.`,
                  voices: [
                    { person: 'tim-keller', role: 'als Pastor in Manhattan', text: `Keller argumentiert in *The Meaning of Marriage* (2011), dass Sexualität nach christlichem Verständnis ein Zeichen der vollständigen, lebenslangen Selbsthingabe ist. Wer sich mit dem Leib ganz schenkt, aber das Leben zurückhält, lebt einen inneren Widerspruch.` },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'leibfeindlich',
      objection: `Das Christentum ist von Grund auf leibfeindlich. Augustinus hielt die sexuelle Lust für die Folge der Erbsünde, Mönche flohen in die Wüste, um dem Körper zu entkommen.`,
      objectionBy: 'Christopher Hitchens',
      answer: `Die Bibel beginnt mit einem Leib, den Gott „sehr gut" nennt, und endet mit der Auferstehung des Leibes – leibfeindlicher geht es nicht. Die Kirche hat Gruppen, die die Ehe verachteten, ausdrücklich verurteilt; Klemens von Alexandrien schrieb ein ganzes Buch zu ihrer Verteidigung. Die Wüstenväter flohen nicht vor dem Leib, sondern suchten die Freiheit von Leidenschaften, die den Menschen beherrschen. Augustinus' Sicht der Begierde ist ein westlicher Akzent, den die koptische Tradition nicht in dieser Schärfe teilt; für sie ist die Ehe ein Sakrament.`,
      followUps: [
        {
          id: 'fasten-zoelibat-hoeher',
          objection: `Und warum fastet eure Kirche dann 200 Tage im Jahr und verehrt zölibatäre Mönche als die eigentlichen Heiligen? Das zeigt doch, was ihr vom Körper und von der Sexualität haltet.`,
          objectionBy: 'Christopher Hitchens',
          answer: `Fasten ist keine Verachtung des Leibes, sondern seine Schulung – so wie ein Sportler nicht seinen Körper hasst, wenn er trainiert. Und die Ehe ist in der koptischen Kirche ein Sakrament: Das Paar wird bei der Trauung gekrönt, als König und Königin eines kleinen Reiches. Die Kirche hat jede Verachtung der Ehe ausdrücklich verurteilt: Die Synode von Gangra (um 340) belegte die mit dem Bann, die die Ehe verwerfen oder aus Verachtung der Ehe jungfräulich leben. Mönchtum und Ehe sind zwei Wege derselben Hingabe, nicht ein höherer und ein niedriger.`,
          detail: `Klemens von Alexandrien verteidigte im dritten Buch seiner *Stromata* die Ehe gegen die Enkratiten, die sie als unrein ablehnten: Die Ehe sei von Gott gegeben und könne ein Weg der Heiligung sein. Die koptische Kirche verehrt zahlreiche verheiratete Heilige und lebt mit verheirateten Gemeindepriestern. Das Fasten selbst endet immer im Fest – nach der Fastenzeit kommt Ostern, das Fest des auferstandenen Leibes.`,
          sources: [
            { kind: 'konzil', work: 'Synode von Gangra', ref: 'Kanones 1, 9 und 10', year: 'um 340', quote: `Wer die Ehe verwirft … wer jungfräulich lebt, nicht um der Schönheit der Jungfräulichkeit willen, sondern aus Abscheu vor der Ehe … der sei ausgeschlossen.`, status: 'paraphrase' },
            { kind: 'kirchenvater', author: 'Klemens von Alexandrien', work: 'Stromata', ref: 'III', year: 'um 200', status: 'paraphrase', note: 'Verteidigung der Ehe gegen die Enkratiten.' },
          ],
          followUps: [
            {
              id: 'zoelibat-fuer-homosexuelle-grausam',
              objection: `Für Mönche mag Zölibat eine Berufung sein. Aber ihr verlangt ihn von jedem schwulen oder lesbischen Menschen, ob er die Berufung hat oder nicht. Das ist grausam.`,
              objectionBy: 'Matthew Vines',
              answer: `Das ist der ernsteste Einwand in dieser ganzen Debatte, und ich will ihn nicht kleinreden: Was die Kirche hier verlangt, ist schwer, und es darf nie leichtfertig ausgesprochen werden. Dieselbe Erwartung gilt allerdings für jeden Unverheirateten – für den Witwer, die Frau, die nie den richtigen Mann gefunden hat, den Menschen mit Behinderung. Aber die Kirche hat dann die Pflicht, nicht nur ein Nein zu sagen, sondern ein Ja zu leben: tiefe Freundschaft, Familie im Glauben, Zugehörigkeit. Jesus verspricht denen, die um seinetwillen verzichten, „Häuser und Brüder und Schwestern und Mütter" schon in dieser Zeit (Mk 10,29–30).`,
              detail: `Sam Allberry, der selbst gleichgeschlechtlich empfindet und zölibatär lebt, schreibt, dass die Einsamkeit, die viele Singles in Gemeinden erleben, nicht ihr Problem ist, sondern das der Gemeinde. Die frühen Christen lebten in Hausgemeinschaften, in denen niemand allein war. Wenn die Kirche von Menschen mit gleichgeschlechtlicher Neigung Enthaltsamkeit erwartet, muss sie ihnen mehr Gemeinschaft schenken als irgendjemandem sonst. Seelsorgerlich gilt: Ein Mensch, der mit diesem Ruf ringt, verdient Geduld, Gebet und Begleitung – keine schnellen Antworten.`,
              voices: [
                { person: 'sam-allberry', role: 'als zölibatär lebender Pastor', text: `Allberry beschreibt in *7 Myths about Singleness* (2019), dass das Neue Testament die Ehelosigkeit nicht als Mangel, sondern als Gabe darstellt (1 Kor 7,7) – aber nur, wenn die Gemeinde zur Familie wird. Er widerspricht dem Mythos, ein Leben ohne Sex sei ein Leben ohne Liebe, und erinnert daran, dass Jesus selbst unverheiratet war und das erfüllteste menschliche Leben lebte.` },
              ],
              sources: [
                { kind: 'bibel', work: 'Markus', ref: '10,29–30', quote: `Es ist niemand, so er verlässt Haus oder Brüder oder Schwestern oder Vater oder Mutter … um meinetwillen, der nicht hundertfältig empfange: jetzt in dieser Zeit Häuser und Brüder und Schwestern und Mütter.`, status: 'paraphrase' },
              ],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Glaubst du, dass Sexualität etwas Bedeutsames ist – oder bloß ein Bedürfnis wie Essen?`,
    `Schützt eine reine Einvernehmensethik die Verletzlichen genug – etwa vor Pornografie oder Druck?`,
    `Weißt du, wie die römische Sexualmoral mit Sklaven und Kindern umging, bevor das Christentum kam?`,
    `Was ist für dich der Unterschied zwischen einem Versprechen und einem Gefühl?`,
  ],
  avoid: [
    `Menschen, die außerhalb der Ehe Sexualität gelebt haben, beschämen oder verurteilen – das Evangelium beginnt mit Vergebung.`,
    `Die Missbrauchsskandale relativieren oder mit „anderswo ist es schlimmer" abwehren. Erst klar verurteilen, dann differenzieren.`,
    `So tun, als sei die christliche Sexualethik vor allem ein Katalog von Verboten. Sie ist zuerst ein Ja zur Würde des Leibes und zum Bund.`,
  ],
  concessions: [
    `In christlichen Gesellschaften gab es eine Doppelmoral, die Frauen härter bestrafte als Männer – das widersprach der Lehre, war aber Realität.`,
    `Christliche Erziehung hat oft Scham statt Würde vermittelt und über Sexualität geschwiegen, statt sie gut zu erklären.`,
    `Sexueller Missbrauch durch Geistliche und seine Vertuschung sind ein schwerer Verrat, der unzählige Leben zerstört hat.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Kyle Harper', work: 'From Shame to Sin', year: '2013', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Timothy Keller; Kathy Keller', work: 'The Meaning of Marriage', year: '2011', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Louise Perry', work: 'The Case Against the Sexual Revolution', year: '2022', status: 'paraphrase' },
    { kind: 'kirchenvater', author: 'Klemens von Alexandrien', work: 'Stromateis', ref: 'Buch III', status: 'paraphrase' },
  ],
  difficulty: 1,
  tags: ['Sexualmoral', 'Ehe', 'Keuschheit', 'sexuelle Revolution', 'Missbrauch', 'Leib'],
  related: [
    'sexualethik/homosexualitaet-bibel',
    'sexualethik/ehe-soziales-konstrukt',
    'at-ethik/bibel-frauenfeindlich',
    'christentum-gesellschaft/kirche-heuchlerisch',
    'psychologie/schuldgefuehle-schaedlich',
  ],
};

export default claim;
