import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'opium-des-volkes',
  title: `„Religion ist das Opium des Volkes (Marx)."`,
  proponents: [
    {
      name: 'Karl Marx',
      role: 'Philosoph, Ökonom, Begründer des Marxismus (1818–1883)',
      work: '„Zur Kritik der Hegel\'schen Rechtsphilosophie. Einleitung", Deutsch-Französische Jahrbücher (Paris 1844)',
    },
    {
      name: 'Friedrich Engels',
      role: 'Philosoph und Mitbegründer des Marxismus (1820–1895)',
      work: 'Zur Geschichte des Urchristentums (1894/95)',
    },
    {
      name: 'Wladimir I. Lenin',
      role: 'Revolutionär, Gründer der Sowjetunion (1870–1924)',
      work: '„Sozialismus und Religion" (1905) – Religion als „eine Art geistigen Fusels"',
    },
  ],
  steelman: `Marx' berühmter Satz ist kein billiger Spott, sondern eine tiefe Diagnose. Im vollen Zusammenhang heißt es: „Das religiöse Elend ist in einem der Ausdruck des wirklichen Elendes und in einem die Protestation gegen das wirkliche Elend. Die Religion ist der Seufzer der bedrängten Kreatur, das Gemüt einer herzlosen Welt, wie sie der Geist geistloser Zustände ist. Sie ist das Opium des Volkes." Religion ist also ein echter Schrei des Leidens – aber sie betäubt ihn. Sie vertröstet den Ausgebeuteten auf ein Jenseits, statt ihn zum Kampf gegen die Ausbeutung zu ermutigen; sie lehrt Gehorsam gegenüber der Obrigkeit und Geduld im Leid. Die Herrschenden haben sie deshalb immer gefördert. Die Aufhebung der Religion als des illusorischen Glücks ist die Forderung des wirklichen Glücks: Wer die Blumen der Illusion von den Ketten pflückt, tut es nicht, damit der Mensch die Ketten ohne Trost trägt, sondern damit er sie abwirft. Die Kritik des Himmels verwandelt sich in die Kritik der Erde.`,
  biblical: {
    summary: `Die Bibel ist kein Beruhigungsmittel, sondern über weite Strecken ein Protestbuch gegen Unterdrückung. Die Propheten klagen die Reichen an, die „die Armen unterdrücken und die Dürftigen schinden" (Am 4,1), und fordern: „Es soll aber das Recht offenbart werden wie Wasser und die Gerechtigkeit wie ein starker Strom" (Am 5,24). Maria singt im Magnifikat: „Er stößt die Gewaltigen vom Stuhl und erhebt die Niedrigen. Die Hungrigen füllt er mit Gütern und läßt die Reichen leer" (Lk 1,52–53). Jakobus droht den Reichen, die ihren Arbeitern den Lohn vorenthalten (Jak 5,1–6). Die Urgemeinde teilte ihren Besitz, „und man gab einem jeglichen, was ihm not war" (Apg 4,35). Die Hoffnung auf das kommende Reich macht nicht passiv, sondern ist der Maßstab, an dem die gegenwärtige Ungerechtigkeit gemessen wird.`,
    detail: `- **Prophetische Sozialkritik:** Amos, Jesaja (Jes 1,17; 10,1–2), Micha (Mi 2,1–2) und Jeremia (Jer 22,13) prangern Ausbeutung, Bestechung und Landraub an – oft unter Lebensgefahr.
- **Jesu Antrittspredigt:** „Der Geist des HERRN ist bei mir, darum daß er mich gesalbt hat; er hat mich gesandt, zu verkündigen das Evangelium den Armen … zu predigen den Gefangenen, daß sie los sein sollen" (Lk 4,18).
- **Lukas, der Evangelist der Armen:** Seligpreisung der Armen (Lk 6,20), Weherufe über die Reichen (6,24), das Gleichnis vom reichen Mann und Lazarus (16,19–31).
- **Missverständnis:** Röm 13 und 1 Petr 2,13 mahnen zur Achtung staatlicher Ordnung, aber die Apostel sagen auch: „Man muß Gott mehr gehorchen denn den Menschen" (Apg 5,29).`,
    sources: [
      { kind: 'bibel', work: 'Lukas', ref: '1,51–53', quote: `Er übet Gewalt mit seinem Arm und zerstreut, die hoffärtig sind in ihres Herzens Sinn. Er stößt die Gewaltigen vom Stuhl und erhebt die Niedrigen. Die Hungrigen füllt er mit Gütern und läßt die Reichen leer.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Amos', ref: '5,24', quote: `Es soll aber das Recht offenbart werden wie Wasser und die Gerechtigkeit wie ein starker Strom.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Jakobus', ref: '5,4', quote: `Siehe, der Arbeiter Lohn, die euer Land eingeerntet haben, und von euch abgebrochen ist, das schreit, und das Rufen der Ernter ist gekommen vor die Ohren des HERRN Zebaoth.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Lukas', ref: '4,18', quote: `Der Geist des HERRN ist bei mir, darum daß er mich gesalbt hat; er hat mich gesandt, zu verkündigen das Evangelium den Armen, zu heilen die zerstoßenen Herzen, zu predigen den Gefangenen, daß sie los sein sollen, und den Blinden das Gesicht und den Zerschlagenen, daß sie frei und ledig sein sollen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '4,34–35', quote: `Es war auch keiner unter ihnen, der Mangel hatte; denn wie viele ihrer waren, die da Äcker oder Häuser hatten, verkauften sie dieselben und brachten das Geld des verkauften Guts und legten es zu der Apostel Füßen; und man gab einem jeglichen, was ihm not war.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die Kirchenväter waren schärfere Kritiker des Reichtums als manche Sozialisten. **Johannes Chrysostomus** predigte, den Armen nicht an unseren Gütern teilhaben zu lassen, sei Diebstahl an ihnen; was wir besitzen, gehöre ihnen. **Basilius der Große** sagte, das Brot, das du hortest, gehöre dem Hungrigen, und baute vor den Toren Caesareas eine ganze Stadt der Fürsorge (Basilias) mit Krankenhaus und Armenhäusern. In Alexandrien pflegten die Christen während der Seuche des 3. Jahrhunderts die Kranken, die die Heiden verlassen hatten (Dionysius von Alexandrien). Die koptische Kirche ist bis heute eine Kirche der Armen – von den Klöstern, die in Hungerzeiten die Dörfer versorgten, bis zum Dienst unter den Müllsammlern (Zabbaleen) von Kairo.`,
    detail: `- **Bischof Samuel** (Anba Samuel), Bischof für soziale und ökumenische Dienste der koptischen Kirche, baute in den 1960er- und 70er-Jahren landesweit Sozialprogramme auf; er wurde am 6. Oktober 1981 beim Attentat auf Präsident Sadat getötet.
- **Das Kloster des hl. Simon des Gerbers** im Mokattam-Viertel von Kairo entstand unter den christlichen Müllsammlern; die Felsenkirchen dort gehören zu den größten Kirchen des Nahen Ostens.
- **Maggie Gobran** („Mama Maggie"), eine koptisch-orthodoxe Christin, gab eine Universitätskarriere auf und gründete 1989 die Organisation „Stephen's Children" für Kinder in den Elendsvierteln Kairos.
- Diese Beispiele zeigen: Die Jenseitshoffnung hat Kopten nicht passiv gemacht, sondern zu Dienst und Treue unter schwierigsten Bedingungen befähigt.`,
    sources: [
      { kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Predigten über Lazarus (De Lazaro concio)', ref: 'II,6', year: 'um 388', quote: `Den Armen nicht an unserem Besitz teilhaben zu lassen, heißt, sie zu bestehlen und ihnen das Leben zu nehmen; nicht unser eigenes Gut besitzen wir, sondern das ihre.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Basilius der Große', work: 'Homilie über Lk 12,18 („Ich will meine Scheunen abbrechen")', ref: '7', year: '4. Jh.', quote: `Das Brot, das du zurückhältst, gehört dem Hungrigen; der Mantel in deiner Truhe dem Nackten; das Geld, das du vergräbst, dem Bedürftigen.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Dionysius von Alexandrien (bei Eusebius)', work: 'Kirchengeschichte', ref: 'VII,22', year: 'um 260', quote: `Während der Seuche pflegten die Christen furchtlos die Kranken, während die Heiden sie verstießen.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Marx' Satz wird meist aus dem Zusammenhang gerissen. Im Original ist Religion für ihn **sowohl Ausdruck als auch Protest** gegen wirkliches Elend – eine fast mitfühlende Beschreibung. „Opium" war 1844 zudem nicht nur Rauschmittel, sondern auch gängiges Schmerzmittel (Laudanum). Historisch hat sich die These, Religion mache politisch passiv, nicht allgemein bestätigt: Religiöse Bewegungen standen hinter der Abschaffung der Sklaverei, der US-Bürgerrechtsbewegung, der polnischen Solidarność und der friedlichen Revolution in der DDR 1989. Umgekehrt haben die Staaten, die Marx' Programm umsetzen wollten, Religion verfolgt und neue Formen der Unterdrückung geschaffen. Der französische Soziologe Raymond Aron nannte den Marxismus selbst „das Opium der Intellektuellen" (1955).`,
    detail: `- **Empirisch:** In US-Studien (Putnam/Campbell, *American Grace*, 2010) engagieren sich religiös aktive Menschen deutlich häufiger ehrenamtlich und spenden mehr – auch für nichtreligiöse Zwecke.
- **Ehrlich:** Kirchen haben sich oft mit den Mächtigen verbündet (Zarenreich, Staatskirchen, Kolonialmächte); Marx' Kritik traf eine reale Kirche seiner Zeit.`,
    sources: [
      { kind: 'gegner', author: 'Karl Marx', work: 'Zur Kritik der Hegel\'schen Rechtsphilosophie. Einleitung', ref: 'MEW 1, S. 378', year: '1844', quote: `Das religiöse Elend ist in einem der Ausdruck des wirklichen Elendes und in einem die Protestation gegen das wirkliche Elend. Die Religion ist der Seufzer der bedrängten Kreatur, das Gemüt einer herzlosen Welt, wie sie der Geist geistloser Zustände ist. Sie ist das Opium des Volkes.`, status: 'verbatim' },
      { kind: 'gegner', author: 'Karl Marx', work: 'Zur Kritik der Hegel\'schen Rechtsphilosophie. Einleitung', ref: 'MEW 1, S. 378–379', year: '1844', quote: `Die Aufhebung der Religion als des illusorischen Glücks des Volkes ist die Forderung seines wirklichen Glücks.`, status: 'verbatim' },
      { kind: 'fachliteratur', author: 'Raymond Aron', work: 'L\'Opium des intellectuels (Opium für Intellektuelle)', year: '1955', quote: `Der Marxismus funktioniert für viele Intellektuelle selbst wie eine säkulare Heilslehre – ein Opium.`, status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'Robert D. Putnam, David E. Campbell', work: 'American Grace: How Religion Divides and Unites Us', year: '2010', quote: `Religiös aktive Amerikaner sind in fast jeder Form bürgerschaftlichen Engagements aktiver als nichtreligiöse – auch bei säkularen Anliegen.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Lies Marx ganz: Für ihn ist Religion auch „der Seufzer der bedrängten Kreatur" und „Protestation gegen das wirkliche Elend" – das ist fast mitfühlend. Aber dass sie die Menschen betäubt, stimmt historisch nicht: Christen haben die Sklaverei bekämpft, die Bürgerrechtsbewegung getragen und 1989 mit Friedensgebeten die DDR zu Fall gebracht. Die Bibel selbst ist voller Protest gegen Ausbeutung. Und die Staaten, die Marx' Programm umsetzten, haben nicht das „wirkliche Glück" gebracht, sondern Gulags.`,
  keyPoints: [
    `**Der volle Kontext:** Marx nennt Religion „Seufzer der bedrängten Kreatur" und „Protestation gegen das wirkliche Elend" – nicht bloß Betrug.`,
    `**Die Bibel ist kein Sedativ:** Propheten, Magnifikat, Jakobusbrief und die Urgemeinde stehen gegen Ausbeutung (Am 5,24; Lk 1,52–53; Jak 5,4; Apg 4,34–35).`,
    `**Historisch hat Glaube eher mobilisiert als betäubt:** Abschaffung der Sklaverei, Bürgerrechtsbewegung (Martin Luther King zitierte Amos), Solidarność, Leipziger Montagsgebete 1989.`,
    `**Die Väter waren radikale Sozialkritiker:** Chrysostomus und Basilius nannten das Horten von Reichtum Diebstahl an den Armen.`,
    `**Der Marxismus als Gegenprobe:** Das Versprechen des Himmels auf Erden rechtfertigte im 20. Jahrhundert unzählige Opfer; Aron nannte ihn „Opium der Intellektuellen".`,
    `**Die koptische Kirche ist eine Kirche der Armen und Verfolgten**, nicht der Herrschenden – von Bischof Samuel bis zu den Zabbaleen.`,
  ],
  voices: [
    {
      person: 'lukas',
      role: 'als Evangelist der Armen',
      text: `Lukas hat in seinem Evangelium und in der Apostelgeschichte die soziale Dimension der Botschaft Jesu besonders herausgearbeitet: das Magnifikat Marias mit dem Sturz der Mächtigen, die Antrittspredigt Jesu in Nazareth mit der Befreiung der Gefangenen, die Seligpreisung der Armen und die Weherufe über die Reichen, das Gleichnis vom reichen Mann und Lazarus, die Gütergemeinschaft der Urgemeinde. Für Lukas ist das Reich Gottes nicht eine Vertröstung, sondern eine Umkehrung der Verhältnisse, die bereits jetzt in der Gemeinde beginnt.`,
    },
    {
      person: 'chrysostomus',
      role: 'als Prediger gegen den Reichtum in Antiochien und Konstantinopel',
      text: `Johannes Chrysostomus, Erzbischof von Konstantinopel, legte sich mit der Kaiserin und dem Hof an, predigte gegen Luxus und Ausbeutung und wurde dafür zweimal verbannt; er starb 407 auf dem Weg ins Exil. In seinen Predigten über den reichen Mann und Lazarus erklärt er, dass die Güter der Erde allen gehören und dass das Zurückhalten vor dem Armen Diebstahl ist. Wer Christus im Sakrament ehrt, ihn aber im Armen vor der Kirchentür hungern lässt, ehrt ihn nicht. Mit Opium hat das nichts zu tun – es ist Sprengstoff.`,
      sources: [
        { kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Homilien zum Matthäusevangelium', ref: '50,3–4', year: 'um 390', quote: `Willst du den Leib Christi ehren? Dann verachte ihn nicht, wenn er nackt ist; ehre ihn nicht hier in der Kirche mit seidenen Gewändern, während du ihn draußen vor Kälte und Blöße umkommen lässt.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'basilius',
      role: 'als Bischof, der eine Stadt der Barmherzigkeit baute',
      text: `Basilius der Große ließ während einer Hungersnot in Kappadokien sein Erbe verkaufen, um die Hungernden zu speisen, und errichtete vor Caesarea die „Basilias" – ein Komplex mit Krankenhaus, Herberge und Armenversorgung, oft als eines der ersten öffentlichen Krankenhäuser der Geschichte bezeichnet. In seinen Predigten über den reichen Kornbauern (Lk 12) erklärt er, dass das zurückgehaltene Brot dem Hungrigen gehört. Wer Basilius liest, findet keine Betäubung der Armen, sondern eine Anklage der Reichen.`,
    },
    {
      person: 'rodney-stark',
      role: 'als Religionssoziologe',
      text: `Rodney Stark hat in *The Rise of Christianity* (1996) soziologisch untersucht, warum das frühe Christentum in drei Jahrhunderten ohne staatliche Unterstützung so stark wuchs. Ein Hauptfaktor: Die Christen schufen in den elenden, seuchengeplagten Städten des Römischen Reiches „eine neue Kultur", in der Witwen, Waisen, Kranke und Fremde versorgt wurden. Während der großen Epidemien pflegten sie Kranke – auch nichtchristliche –, was die Sterblichkeit senkte. Das Christentum bot nicht nur Trost, sondern reale Verbesserung der Lebensverhältnisse.`,
      sources: [
        { kind: 'fachliteratur', author: 'Rodney Stark', work: 'The Rise of Christianity: A Sociologist Reconsiders History', year: '1996', quote: `Das Christentum bot den elenden Städten des Reiches neue Normen und neue Formen sozialer Beziehungen, die die dringendsten städtischen Probleme linderten – etwa die Pflege in Seuchenzeiten.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'mcgrath',
      role: 'als Historiker des Atheismus',
      text: `Alister McGrath zeigt in *The Twilight of Atheism*, dass Marx' Religionskritik ihre Kraft aus einer realen Situation bezog: Die Staatskirchen des 19. Jahrhunderts standen oft auf der Seite der Besitzenden. Doch die Geschichte des 20. Jahrhunderts hat Marx' Voraussage umgekehrt: Wo der Staat den Atheismus durchsetzte, wurde die Religion zur Stimme der Unterdrückten – in Polen, in der DDR, in der Sowjetunion. Die Kirche wurde zum Ort der Freiheit gegenüber einem Staat, der selbst quasi-religiöse Ansprüche erhob.`,
    },
  ],
  dialog: [
    {
      id: 'vertroestung-jenseits',
      objection: `Religion vertröstet die Armen auf den Himmel, damit sie die Ausbeutung auf Erden ertragen. „Selig sind die Armen" – das ist die perfekte Ideologie für die Herrschenden.`,
      objectionBy: 'Karl Marx / Lenin',
      answer: `Lies die Seligpreisungen bei Lukas weiter: Gleich danach kommen die Weherufe über die Reichen (Lk 6,24). Die Bibel ist voller Protest – Amos, das Magnifikat, Jakobus. Und historisch haben gerade Menschen mit Ewigkeitshoffnung die Welt verändert: Wilberforce gegen die Sklaverei, Martin Luther King, der Amos zitierte, die Leipziger Friedensgebete 1989. Wer an Gottes Gericht glaubt, weiß, dass Unrecht nicht das letzte Wort hat – das macht mutig, nicht passiv.`,
      detail: `Die Seligpreisung „Selig seid ihr Armen; denn das Reich Gottes ist euer" (Lk 6,20) ist keine Rechtfertigung der Armut, sondern Gottes Parteinahme für die Armen. Die Leipziger Montagsgebete in der Nikolaikirche wurden im Herbst 1989 zum Ausgangspunkt der friedlichen Revolution; am 9. Oktober 1989 zogen Zehntausende unter dem Ruf „Keine Gewalt" durch die Stadt. Das Regime, das sich auf Marx berief, wurde von Betern gestürzt.`,
      questionsBack: [
        `Kennst du die Weherufe über die Reichen in Lukas 6,24 – direkt nach den Seligpreisungen?`,
        `Wenn Religion passiv macht: Wie erklärst du die Rolle der Kirchen bei der Abschaffung der Sklaverei und beim Fall der DDR?`,
      ],
      followUps: [
        {
          id: 'kirche-bei-maechtigen',
          objection: `Schöne Bibelverse. Aber in der Praxis stand die Kirche fast immer auf der Seite der Mächtigen – die russische Kirche segnete den Zaren, die Staatskirchen die Könige.`,
          objectionBy: 'Historischer Kritiker',
          answer: `Das ist leider oft wahr, und es ist ein Verrat an den eigenen Maßstäben der Kirche. Die Versuchung der Macht begleitet die Kirche seit Konstantin. Aber es gab immer auch die Gegenstimmen – Propheten, Mönche, Märtyrer. Und es lohnt der Blick auf die koptische Kirche: Sie war seit dem 5. Jahrhundert nie Staatskirche, sondern lebte unter byzantinischer und dann islamischer Herrschaft als Kirche der Bedrängten. Sie ist das Gegenteil eines Herrschaftsinstruments.`,
          detail: `Siehe ausführlich den Claim „Religion ist ein Herrschaftsinstrument der Mächtigen". Ein ehrliches Zugeständnis ist hier überzeugender als jede Beschönigung. Das Evangelium selbst liefert den Maßstab, an dem die Kirche gemessen werden muss: „Aber also soll es unter euch nicht sein" (Mk 10,43).`,
          followUps: [
            {
              id: 'befreiung-trotz-religion',
              objection: `Die Befreiungsbewegungen kamen trotz der Religion, nicht wegen ihr. Auch die Sklavenhalter zitierten die Bibel.`,
              objectionBy: 'Säkularer Historiker',
              answer: `Beide Seiten zitierten die Bibel – das stimmt. Aber die treibende Kraft des britischen und amerikanischen Abolitionismus waren nachweislich Evangelikale und Quäker: Wilberforce, die Clapham-Gruppe, Frederick Douglass, Harriet Beecher Stowe. Und manche Aufklärer, auf die sich Säkulare berufen, hatten rassistische Ansichten, etwa Hume in einer berüchtigten Fußnote. Wer Martin Luther Kings Reden liest, findet nicht säkulare Theorie, sondern Amos und Jesaja.`,
              detail: `Ehrlich bleibt: Die Bibel wurde missbraucht, um Sklaverei zu rechtfertigen, und das ist eine Schande. Die Frage ist, welche Lesart dem Text gerecht wird. Gal 3,28 („Hier ist kein Jude noch Grieche, hier ist kein Knecht noch Freier … ihr seid allzumal einer in Christo Jesu") und die Lehre vom Ebenbild Gottes lieferten den Abolitionisten ihre stärksten Argumente. Siehe den Claim „Die Bibel befürwortet Sklaverei".`,
              sources: [
                { kind: 'bibel', work: 'Galater', ref: '3,28', quote: `Hier ist kein Jude noch Grieche, hier ist kein Knecht noch Freier, hier ist kein Mann noch Weib; denn ihr seid allzumal einer in Christo Jesu.`, translation: 'Luther 1912', status: 'verbatim' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'wirkliches-glueck',
      objection: `Marx wollte nicht Trostlosigkeit, sondern wirkliches Glück. Die Kritik pflückt die Blumen von den Ketten, damit der Mensch die Ketten abwirft. Ohne Religion kann der Mensch endlich seine Welt gerecht gestalten.`,
      objectionBy: 'Karl Marx',
      answer: `Das Ziel ist edel – und Christen teilen das Verlangen nach Gerechtigkeit. Aber die Geschichte hat geantwortet: Die Staaten, die Marx' Programm umsetzten – Sowjetunion, China unter Mao, Kambodscha –, haben Religion verfolgt und zig Millionen Menschenleben gefordert. Das heißt nicht, dass jeder Atheist ein Tyrann ist. Aber wenn der Himmel auf Erden das einzige Ziel ist und es keinen Richter über der Geschichte gibt, dann scheint jedes Mittel gerechtfertigt.`,
      detail: `Lenin schrieb 1905, die Religion sei „eine Art geistigen Fusels"; die Sowjetunion ließ in den folgenden Jahrzehnten Zehntausende Priester, Mönche und Gläubige töten und Kirchen zerstören. Albanien erklärte sich 1967 zum ersten atheistischen Staat der Welt. Siehe den Claim „Die Verbrechen atheistischer Regime haben nichts mit Atheismus zu tun".`,
      sources: [
        { kind: 'gegner', author: 'Wladimir I. Lenin', work: 'Sozialismus und Religion', year: '1905', quote: `Die Religion ist das Opium des Volkes. Die Religion ist eine Art geistigen Fusels, in dem die Sklaven des Kapitals ihr Menschenantlitz ersäufen.`, status: 'paraphrase', note: 'Wortlaut je nach Übersetzung leicht verschieden.' },
      ],
      followUps: [
        {
          id: 'kein-echter-marxismus',
          objection: `Das war kein echter Marxismus. Stalin und Mao haben Marx verraten. Du kannst Marx nicht für den Gulag verantwortlich machen.`,
          objectionBy: 'Marxistischer Theoretiker',
          answer: `Einverstanden, wenn wir denselben Maßstab für beide Seiten anlegen: Dann darf man auch das Christentum nicht nach den Kreuzzügen beurteilen, sondern nach Christus und seinen Geboten. Aber es gibt einen strukturellen Unterschied: Wer die Feindesliebe verletzt, handelt gegen Jesus. Wer im Namen einer klassenlosen Zukunft „Klassenfeinde" opfert, kann sich auf eine Logik berufen, die das Individuum dem Ziel der Geschichte unterordnet. Ohne einen Gott, vor dem jeder Einzelne unendlichen Wert hat, fehlt die letzte Schranke.`,
          detail: `Der Punkt ist nicht „Atheismus führt zwangsläufig zu Mord", sondern: Eine Weltanschauung ohne transzendente Würde des Einzelnen hat keinen inneren Halt, wenn eine Ideologie die Opferung Einzelner für das Kollektiv fordert. Dostojewski hat das in *Die Dämonen* (1872) vorausgesehen.`,
          followUps: [
            {
              id: 'christen-auch-gewalt',
              objection: `Christen haben auch gemordet: Kreuzzüge, Inquisition, Religionskriege. Ihr habt kein Recht, auf andere zu zeigen.`,
              objectionBy: 'Historischer Kritiker',
              answer: `Das stimmt, und ich verteidige keine dieser Taten. Der Unterschied ist: Sie widersprechen dem ausdrücklichen Gebot Christi – „Liebet eure Feinde", „Stecke dein Schwert an seinen Ort". Christen können sich für ihre Verbrechen an Christus selbst messen lassen und werden verurteilt. Die Frage ist, ob eine Weltanschauung in sich die Mittel hat, ihre eigenen Verbrechen zu verurteilen.`,
              detail: `Siehe den Themenblock „Religion und Gewalt" für eine faire Darstellung der Zahlen und Zusammenhänge (Kreuzzüge, Inquisition, Hexenverfolgung). Die koptische Kirche hat übrigens keine Kreuzzüge geführt – sie hat unter den Kreuzfahrern sogar gelitten, die die orientalischen Christen oft als Häretiker behandelten.`,
            },
          ],
        },
      ],
    },
    {
      id: 'kruecke-fuer-schwache',
      objection: `Moderner gesagt: Religion ist eine psychologische Krücke für Schwache, die das Leben nicht allein aushalten. Starke Menschen brauchen das nicht.`,
      objectionBy: 'Populärer Religionskritiker',
      answer: `Krücken braucht, wer verletzt ist – und ehrlich gesagt sind wir das alle. Die Frage ist nicht, ob jemand Halt braucht, sondern ob der Halt real ist. Auch säkulare Menschen haben ihre Krücken: Karriere, Konsum, Ideologien, Betäubung. Und die Kirche besteht nicht aus Schwächlingen: Märtyrer, die lieber starben als zu verleugnen, und Kopten, die unter Bedrängnis bis heute ihren Glauben bekennen, sind nicht gerade das Bild von Menschen, die sich das Leben leicht machen.`,
      detail: `Jesus selbst sagt: „Die Starken bedürfen des Arztes nicht, sondern die Kranken" (Mk 2,17). Das Christentum hat nie behauptet, eine Religion der Starken zu sein. Aber es behauptet, dass der Arzt real ist. Ob er es ist, muss man prüfen – nicht an der Schwäche der Patienten, sondern an der Person des Arztes.`,
      sources: [
        { kind: 'bibel', work: 'Markus', ref: '2,17', quote: `Die Starken bedürfen keines Arztes, sondern die Kranken.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'religioese-passiver',
          objection: `Studien zeigen, dass religiöse Menschen eher konservativ sind und den Status quo akzeptieren. Das bestätigt Marx.`,
          objectionBy: 'Sozialwissenschaftler',
          answer: `Die Daten sind gemischt. Religiöse Menschen sind in manchen Ländern politisch konservativer – aber zugleich engagieren sie sich mehr ehrenamtlich, spenden mehr und sind in Hilfsorganisationen überrepräsentiert, auch bei säkularen Anliegen. Das ist nicht das Bild betäubter Menschen. Und „konservativ" heißt nicht „passiv gegenüber Unrecht": Die Bürgerrechtsbewegung kam aus den Kirchen.`,
          detail: `Putnam/Campbell (*American Grace*, 2010) und Arthur Brooks (*Who Really Cares*, 2006) belegen die höhere Spenden- und Ehrenamtsbereitschaft religiös aktiver Amerikaner. Für Europa ist die Datenlage weniger eindeutig. Fair bleiben: Engagement beweist keine Wahrheit, widerlegt aber die Betäubungsthese.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Hast du den ganzen Absatz bei Marx gelesen – mit dem „Seufzer der bedrängten Kreatur"?`,
    `Wie erklärst du, dass die DDR, die sich auf Marx berief, von Friedensgebeten in Kirchen gestürzt wurde?`,
    `Kennst du die Propheten Amos und Micha? Klingen sie wie Beruhigungsmittel?`,
    `Wenn Religion das Opium war – was hat der Marxismus den Völkern gebracht, die ihn umsetzten?`,
  ],
  avoid: [
    `Marx pauschal als „Massenmörder" bezeichnen – er hat keine Gulags gebaut; es geht um die Logik seiner Nachfolger.`,
    `Bestreiten, dass Kirchen sich mit Mächtigen verbündet haben – das ist historisch falsch und kostet Glaubwürdigkeit.`,
    `„Arme sollen eben auf den Himmel warten" – das ist genau die Haltung, die Marx zu Recht kritisierte und die Propheten verurteilten.`,
  ],
  concessions: [
    `Marx' Kritik traf eine reale Kirche: Viele Kirchen des 19. Jahrhunderts standen auf der Seite der Besitzenden und rechtfertigten soziale Ungleichheit.`,
    `Glaube kann missbraucht werden, um Menschen ruhigzustellen; das ist eine Verfälschung des Evangeliums, die man klar benennen muss.`,
  ],
  furtherReading: [
    { kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Predigten über den reichen Mann und Lazarus', year: 'um 388', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Rodney Stark', work: 'The Rise of Christianity', year: '1996', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Alister E. McGrath', work: 'The Twilight of Atheism', year: '2004', status: 'paraphrase' },
    { kind: 'gegner', author: 'Karl Marx', work: 'Zur Kritik der Hegel\'schen Rechtsphilosophie. Einleitung', year: '1844', status: 'paraphrase', note: 'Den ganzen Absatz lesen – er ist kurz.' },
  ],
  difficulty: 1,
  tags: ['Marx', 'Opium des Volkes', 'Religionskritik', 'Soziale Gerechtigkeit', 'Propheten', 'Kirchenväter', 'Kommunismus'],
  related: [
    'religionskritik/religion-herrschaftsinstrument',
    'religionskritik/projektion-feuerbach',
    'religion-gewalt/atheistische-regime',
    'christentum-gesellschaft/christentum-ohne-nutzen',
    'at-ethik/bibel-befuerwortet-sklaverei',
    'sinn-existenz/tod-ist-das-ende',
  ],
};

export default claim;
