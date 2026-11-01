import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'saekulare-gesellschaften-gluecklicher',
  title: `„Säkulare Gesellschaften sind glücklicher und moralischer (Skandinavien)."`,
  proponents: [
    { name: 'Phil Zuckerman', role: 'Religionssoziologe, Pitzer College', work: 'Society without God: What the Least Religious Nations Can Tell Us About Contentment (2008)' },
    { name: 'Gregory S. Paul', role: 'Paläontologe und Gesellschaftsforscher', work: '„Cross-National Correlations of Quantifiable Societal Health with Popular Religiosity and Secularism in the Prosperous Democracies", Journal of Religion & Society 7 (2005)' },
    { name: 'Sam Harris', role: 'Neurowissenschaftler und Autor', work: 'Letter to a Christian Nation (2006)' },
    { name: 'Steven Pinker', role: 'Psychologe, Harvard', work: 'Enlightenment Now (2018)' },
  ],
  steelman: `Die Länder, die regelmäßig an der Spitze des World Happiness Report stehen – Finnland, Dänemark, Island, Schweden, Norwegen –, gehören zu den am wenigsten religiösen der Welt. Sie haben niedrige Kriminalitätsraten, kaum Korruption, hohes gegenseitiges Vertrauen, großzügige Sozialstaaten und viel Gleichberechtigung. Phil Zuckerman hat in Dänemark und Schweden gezeigt, dass Menschen ohne Gott zufrieden, anständig und solidarisch leben. Gregory Paul fand 2005 im Vergleich wohlhabender Demokratien: Je religiöser eine Gesellschaft, desto höher Mordrate, Teenagerschwangerschaften und Geschlechtskrankheiten – das religiöseste reiche Land, die USA, schneidet am schlechtesten ab. Wenn Religion wirklich moralischer und glücklicher machte, müsste es umgekehrt sein.`,
  biblical: {
    summary: `Die Bibel unterscheidet zwischen Wohlergehen und Heil: „Was hülfe es dem Menschen, wenn er die ganze Welt gewönne, und nähme an seiner Seele Schaden?" (Mk 8,36); „niemand lebt davon, daß er viele Güter hat" (Lk 12,15). Die Seligpreisungen (Mt 5,3–12) nennen gerade die Armen, Trauernden und Verfolgten „selig" – biblisches Glück (griech. *makarios*) ist nicht bloß Lebenszufriedenheit. Zugleich gilt: „Gerechtigkeit erhöht ein Volk" (Spr 14,34), und Jesus will, dass die Seinen „das Leben und volle Genüge haben" (Joh 10,10). Ein Christ kann sich also über Gerechtigkeit, Wohlstand und Vertrauen in jeder Gesellschaft freuen – und zugleich fragen, woher diese Güter stammen und ob sie ohne ihre Wurzeln bestehen.`,
    detail: `- **Mt 7,16** („An ihren Früchten sollt ihr sie erkennen") wird von Kritikern gern gegen das Christentum gewendet – zu Recht als Maßstab. Entscheidend ist dann, die Früchte richtig zuzuordnen: Welche Wurzeln trugen die Früchte, die Skandinavien heute genießt?
- **Pred 2,1–11**: Salomo prüft Reichtum, Genuss und Werke – und findet: „alles eitel und Haschen nach dem Wind". Wohlstand allein beantwortet die Sinnfrage nicht.
- **Gal 5,22**: Die Frucht des Geistes ist „Liebe, Freude, Friede, Geduld …" – innere Haltungen, die mit Lebensumständen nicht deckungsgleich sind.`,
    sources: [
      { kind: 'bibel', work: 'Markus', ref: '8,36', quote: `Was hülfe es dem Menschen, wenn er die ganze Welt gewönne, und nähme an seiner Seele Schaden?`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Lukas', ref: '12,15', quote: `Sehet zu und hütet euch vor dem Geiz; denn niemand lebt davon, daß er viele Güter hat.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Sprüche', ref: '14,34', quote: `Gerechtigkeit erhöhet ein Volk; aber die Sünde ist der Leute Verderben.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '10,10', quote: `Ich bin gekommen, daß sie das Leben und volle Genüge haben sollen.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptische Kirche kennt Freude, die nicht vom Wohlstand abhängt. Über Jahrhunderte lebten Kopten als oft benachteiligte Minderheit – und bewahrten doch eine tiefe, frohe Glaubenskultur mit Liturgie, Fasten und Festen. Als im Februar 2015 einundzwanzig Männer – zwanzig Kopten und ein Ghanaer – in Libyen wegen ihres Glaubens ermordet wurden, nahm Papst Tawadros II. sie als Märtyrer in das Synaxarium auf, und ihre Familien antworteten mit Vergebung statt Hass. Die Väter lehren, dass Reichtum gefährlich werden kann, wenn er Gott vergessen lässt; Johannes Chrysostomus predigte unermüdlich, dass wahre Freude im Teilen und in der Gemeinschaft mit Gott liegt, nicht im Besitz.`,
    sources: [
      { kind: 'koptisch', author: 'Papst Tawadros II.', work: 'Aufnahme der 21 Märtyrer von Libyen in das koptische Synaxarium', year: '2015', status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Predigten über den reichen Mann und Lazarus (De Lazaro)', year: 'um 388', quote: `Nicht wer viel besitzt, ist reich, sondern wer wenig braucht; den Armen nicht an seinem Besitz teilhaben zu lassen, heißt, ihn zu berauben.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `**Glücksforschung:** Der World Happiness Report misst vor allem die Lebensbewertung auf einer Skala von 0 bis 10; hier führen die nordischen Länder, Finnland seit 2018 jährlich. Die **Global Flourishing Study** (VanderWeele, Johnson u. a., Nature Mental Health 2025; rund 200.000 Teilnehmer in 22 Ländern) misst umfassender – Glück, Gesundheit, Sinn, Charakter, Beziehungen, finanzielle Sicherheit. Sie fand die höchsten Durchschnittswerte in Indonesien, die niedrigsten in Japan; wohlhabende Länder schnitten bei finanzieller Sicherheit gut, bei Sinn und Beziehungen oft schwächer ab; und Gottesdienstbesuch ging in vielen Ländern mit höherem „Flourishing" einher (Einzelheiten am Original prüfen).`,
    detail: `- **Gregory Paul (2005)** verglich 17–18 Länder mit einfachen Korrelationen ohne Kontrolle weiterer Faktoren (Ungleichheit, Ethnizität, Waffenbesitz, Geschichte); das Ergebnis hängt stark am Ausreißer USA. Die Studie wurde methodisch kritisiert, u. a. von Gary Jensen (2006). Länderkorrelationen erlauben zudem keine Schlüsse über Einzelpersonen („ökologischer Fehlschluss").
- **Individualdaten:** Innerhalb vieler Gesellschaften sind aktiv religiöse Menschen im Durchschnitt häufiger „sehr glücklich" und gesellschaftlich engagierter (Pew Research Center 2019); in den USA spenden und engagieren sich religiöse Menschen mehr – auch für nicht-religiöse Zwecke (Putnam & Campbell, *American Grace*, 2010).
- **Christliches Erbe Skandinaviens:** Die nordischen Wohlfahrtsstaaten wurzeln historisch in lutherischer Armenfürsorge und Arbeitsethik (Sigrun Kahl 2005; Robert H. Nelson 2017). Noch heute ist eine deutliche Mehrheit der Dänen und rund die Hälfte der Schweden Mitglied der lutherischen Volkskirche; Zuckerman selbst spricht von „kultureller Religion".`,
    sources: [
      { kind: 'wissenschaft', author: 'Tyler J. VanderWeele, Byron R. Johnson u. a.', work: 'The Global Flourishing Study: Study Profile and Initial Results on Flourishing', ref: 'Nature Mental Health', year: '2025', status: 'paraphrase', note: 'Einzelergebnisse vor Verwendung am Original prüfen.' },
      { kind: 'gegner', author: 'Gregory S. Paul', work: 'Cross-National Correlations of Quantifiable Societal Health with Popular Religiosity and Secularism in the Prosperous Democracies', ref: 'Journal of Religion & Society 7 (2005)', year: '2005', status: 'paraphrase' },
      { kind: 'gegner', author: 'Phil Zuckerman', work: 'Society without God', year: '2008', quote: `Zuckerman beschreibt Dänen und Schweden als zufrieden und solidarisch, aber weitgehend ohne Gottesglauben; zugleich spricht er von einer verbreiteten „kulturellen Religion" (Taufe, Konfirmation, Kirchenmitgliedschaft ohne persönlichen Glauben).`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Sigrun Kahl', work: 'The Religious Roots of Modern Poverty Policy: Catholic, Lutheran, and Reformed Protestant Traditions Compared', ref: 'European Journal of Sociology 46 (2005)', year: '2005', status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Robert D. Putnam & David E. Campbell', work: 'American Grace: How Religion Divides and Unites Us', year: '2010', status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'Pew Research Center', work: 'Religion\'s Relationship to Happiness, Civic Engagement and Health Around the World', year: '2019', status: 'paraphrase' },
    ],
  },
  quickAnswer: `Skandinavien ist ein christliches Erbe, keine säkulare Erfindung: Sozialstaat, Vertrauen und Arbeitsethik wuchsen über Jahrhunderte aus lutherischer Kultur, und die meisten Dänen sind bis heute Kirchenmitglieder. Diese Länder leben von einem Kapital, das der Glaube angelegt hat. Innerhalb fast aller Gesellschaften sind aktiv religiöse Menschen im Schnitt glücklicher, gesünder und engagierter. Und die große Global Flourishing Study (2025, 22 Länder) fand: Reiche Länder punkten bei Finanzen, aber oft schwach beim Lebenssinn. Ländervergleiche beweisen ohnehin nichts über Gott.`,
  keyPoints: [
    `**Erbe statt Gegenbeweis:** Die nordischen Wohlfahrtsstaaten wurzeln in lutherischer Armenfürsorge und Ethik; die Mehrheit der Dänen ist bis heute Mitglied der Volkskirche.`,
    `**Böckenförde-Diktum:** Der freiheitliche, säkularisierte Staat lebt von Voraussetzungen, die er selbst nicht garantieren kann – ob die Früchte ohne Wurzeln bleiben, ist offen.`,
    `**Ökologischer Fehlschluss:** Ländervergleiche (Gregory Paul) sagen wenig über Individuen; innerhalb der Gesellschaften sind religiöse Menschen im Schnitt glücklicher, gesünder und großzügiger.`,
    `**Glück ist mehr als Zufriedenheit:** Die Global Flourishing Study misst auch Sinn, Beziehungen und Charakter – hier stehen reiche, säkulare Länder keineswegs an der Spitze.`,
    `**Wahrheit ≠ Glück:** Selbst wenn Säkulare glücklicher wären, folgte daraus nicht, dass es Gott nicht gibt.`,
  ],
  argument: {
    name: 'Warum Skandinavien kein Argument gegen den Glauben ist',
    summary: 'Länderkorrelationen sind schwach, Individualdaten zeigen anderes, und die Institutionen sind christlich geprägt.',
    premises: [
      {
        text: 'P1: Vergleiche zwischen Ländern (aggregierte Daten) erlauben keine Schlüsse darüber, wie sich Religiosität auf Einzelne auswirkt (ökologischer Fehlschluss).',
        support: `Methodischer Grundsatz der Sozialforschung; Länder unterscheiden sich in Geschichte, Größe, Homogenität, Rohstoffen und Institutionen.`,
      },
      {
        text: 'P2: Individualdaten aus vielen Gesellschaften zeigen überwiegend positive Zusammenhänge zwischen religiöser Praxis und Wohlbefinden, Gesundheit und Gemeinsinn.',
        support: `Pew 2019; Putnam & Campbell 2010; Kohortenstudien von VanderWeele; Global Flourishing Study 2025.`,
      },
      {
        text: 'P3: Die gesellschaftlichen Stärken Skandinaviens haben sich über Jahrhunderte in einer christlich-lutherischen Kultur entwickelt.',
        support: `Kahl 2005; Nelson 2017; hohe Kirchenmitgliedschaft bis heute.`,
      },
    ],
    conclusion: 'Skandinavien belegt nicht, dass Säkularität Gesellschaften glücklicher oder moralischer macht; es zeigt eher, wie lange die Früchte einer christlichen Kultur nachwirken können.',
  },
  voices: [
    {
      person: 'vanderweele',
      role: 'als Leiter der Global Flourishing Study',
      text: `VanderWeele betont, dass „Flourishing" mehr ist als Glücksgefühl oder Lebenszufriedenheit: Es umfasst Gesundheit, Sinn, Charakter, Beziehungen und finanzielle Stabilität. Die Global Flourishing Study, die er mitleitet, zeigt, dass wirtschaftlicher Wohlstand und umfassendes Gedeihen nicht dasselbe sind – und dass regelmäßige Teilnahme an Gottesdiensten in vielen Ländern mit höherem Gedeihen einhergeht. Er warnt davor, aus Ländervergleichen kausale Schlüsse zu ziehen, und stützt sich auf große Längsschnittstudien an Einzelpersonen.`,
      sources: [
        { kind: 'wissenschaft', author: 'Tyler J. VanderWeele u. a.', work: 'The Global Flourishing Study', ref: 'Nature Mental Health', year: '2025', status: 'paraphrase' },
        { kind: 'wissenschaft', author: 'Tyler J. VanderWeele', work: 'On the promotion of human flourishing', ref: 'PNAS 114 (2017)', year: '2017', status: 'paraphrase' },
      ],
    },
    {
      person: 'rodney-stark',
      role: 'als Religionssoziologe',
      text: `Stark trug in *America's Blessings* (2012) Befunde zusammen, nach denen religiöse Menschen – im Durchschnitt und unter Kontrolle anderer Faktoren – seltener kriminell werden, mehr spenden, sich häufiger ehrenamtlich engagieren und stabilere Familien haben. Sein Punkt: Gesellschaftliche Güter, die auch Nichtgläubigen zugutekommen, werden in erheblichem Maß von gelebter Religion getragen.`,
      sources: [
        { kind: 'fachliteratur', author: 'Rodney Stark', work: 'America\'s Blessings: How Religion Benefits Everyone, Including Atheists', year: '2012', status: 'paraphrase' },
      ],
    },
    {
      person: 'kierkegaard',
      role: 'als dänischer Kritiker der Kulturchristenheit',
      text: `Kierkegaard griff schon im 19. Jahrhundert die dänische Staatskirche an: Eine Gesellschaft, in der jeder automatisch getauft und Mitglied ist, sei „Christenheit" ohne Christentum. Damit beschrieb er genau das, was Zuckerman heute „kulturelle Religion" nennt. Für das Gespräch heißt das: Skandinaviens „Säkularität" ist oft die späte Folge eines bequem gewordenen Kulturchristentums – keine Widerlegung des Glaubens, sondern eine Warnung, die ein dänischer Christ längst ausgesprochen hat.`,
      sources: [
        { kind: 'fachliteratur', author: 'Søren Kierkegaard', work: 'Der Augenblick (Øjeblikket) / Angriff auf die Christenheit', year: '1854–1855', status: 'paraphrase' },
      ],
    },
    {
      person: 'chrysostomus',
      role: 'als Prediger über Reichtum und Glück',
      text: `Chrysostomus predigte in der wohlhabenden Großstadt Antiochia und später in Konstantinopel gegen die Gleichsetzung von Wohlstand und Glück. In seinen Predigten über den reichen Mann und Lazarus zeigt er, dass äußerer Reichtum innere Armut verbergen kann und dass wahrer Reichtum im Teilen und in der Gemeinschaft mit Gott liegt. Eine Gesellschaft kann also materiell blühen und zugleich geistlich verarmen.`,
      sources: [
        { kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'De Lazaro (Predigten über Lazarus)', status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'skandinavien-gluecklichste',
      objection: `Finnland, Dänemark, Schweden: die glücklichsten Länder der Welt – und kaum jemand geht in die Kirche.`,
      objectionBy: 'Phil Zuckerman',
      targetsPremise: 3,
      answer: `Diese Länder sind über tausend Jahre christlich geprägt worden; ihr Sozialstaat wurzelt in lutherischer Armenfürsorge, und bis heute ist die Mehrheit der Dänen Mitglied der Volkskirche. Zudem misst der World Happiness Report vor allem Lebenszufriedenheit. Die umfassendere Global Flourishing Study fand in reichen Ländern hohe finanzielle Sicherheit, aber eher schwächere Werte bei Lebenssinn und Beziehungen.`,
      followUps: [
        {
          id: 'erbe-ist-ausrede',
          objection: `„Christliches Erbe" ist eine Ausrede. Die Werte Skandinaviens stammen aus der Aufklärung und der Sozialdemokratie.`,
          objectionBy: 'Steven Pinker',
          targetsPremise: 3,
          answer: `Sozialhistoriker wie Sigrun Kahl zeigen, dass die Armenpolitik der nordischen Länder deutlich lutherische Wurzeln hat; der Historiker Tom Holland beschreibt in *Dominion* (2019), wie selbst die Aufklärung mit ihren Idealen von Gleichheit und Menschenwürde aus christlichem Boden wuchs. Und Zuckerman spricht selbst von einer „kulturellen Religion" in Dänemark und Schweden.`,
          sources: [
            { kind: 'fachliteratur', author: 'Tom Holland', work: 'Dominion: How the Christian Revolution Remade the World (dt. Herrschaft)', year: '2019', status: 'paraphrase' },
          ],
          followUps: [
            {
              id: 'werte-ohne-wurzeln',
              objection: `Dann bleibt das Erbe eben auch ohne Glauben bestehen. Wozu noch Gott?`,
              answer: `Das ist die offene Frage. Der Verfassungsrichter Ernst-Wolfgang Böckenförde formulierte: „Der freiheitliche, säkularisierte Staat lebt von Voraussetzungen, die er selbst nicht garantieren kann." Ob Vertrauen, Würde und Solidarität über Generationen ohne ihre Wurzeln bestehen bleiben, ist ein Experiment, dessen Ausgang niemand kennt. Und vor allem: Ob Gott existiert, hängt nicht davon ab, ob eine Gesellschaft ihn gerade vermisst.`,
              sources: [
                { kind: 'fachliteratur', author: 'Ernst-Wolfgang Böckenförde', work: 'Die Entstehung des Staates als Vorgang der Säkularisation', year: '1967', quote: `Der freiheitliche, säkularisierte Staat lebt von Voraussetzungen, die er selbst nicht garantieren kann.`, status: 'verbatim' },
              ],
              followUps: [
                {
                  id: 'experiment-gelingt',
                  objection: `Das Experiment läuft schon seit Generationen, und es gelingt: Skandinavien ist seit Jahrzehnten weitgehend säkular und trotzdem friedlich, vertrauensvoll und solidarisch. Böckenförde war zu pessimistisch.`,
                  objectionBy: 'Phil Zuckerman',
                  answer: `Zwei, drei Generationen sind für die Geschichte einer Kultur kurz – ein Erbe kann lange tragen, bevor man merkt, dass niemand mehr einzahlt. Ich wünsche Skandinavien von Herzen, dass seine Stärken bleiben. Aber Böckenfördes Punkt ist nicht, dass alles sofort zusammenbricht, sondern dass der Staat die Quellen von Vertrauen und Gemeinsinn nicht selbst erzeugen kann. Und ob die Würde jedes Menschen auch ohne den Gedanken der Gottebenbildlichkeit überzeugend begründet bleibt, ist eine philosophische Frage, die Wohlstandsdaten nicht beantworten.`,
                  detail: `Tom Holland, selbst lange kein Kirchgänger, beschreibt in *Dominion*, wie tief Werte wie Mitleid mit den Schwachen, Gleichheit aller Menschen und Vergebung im Christentum wurzeln – so tief, dass säkulare Europäer sie für „natürlich" halten. Auch Jürgen Habermas hat (2004 im Gespräch mit Joseph Ratzinger) betont, dass der säkulare Staat gut daran tut, die normativen Quellen der Religion nicht zu verachten. Für dein Gespräch gilt: Keine Untergangsszenarien malen, sondern die Frage stellen, woraus sich Würde und Solidarität auf Dauer speisen.`,
                  sources: [
                    { kind: 'fachliteratur', author: 'Jürgen Habermas & Joseph Ratzinger', work: 'Dialektik der Säkularisierung. Über Vernunft und Religion', year: '2005 (Gespräch 2004)', status: 'paraphrase' },
                  ],
                  questionsBack: [
                    `Woraus begründest du die gleiche Würde eines schwerbehinderten Menschen – und wird diese Begründung auch deine Enkel überzeugen?`,
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'gregory-paul',
      objection: `Gregory Paul hat 2005 gezeigt: Je religiöser eine wohlhabende Gesellschaft, desto mehr Morde, Teenagerschwangerschaften und Geschlechtskrankheiten.`,
      objectionBy: 'Gregory S. Paul',
      targetsPremise: 1,
      answer: `Die Studie arbeitet mit einfachen Korrelationen zwischen 17 bis 18 Ländern, ohne andere Faktoren wie Ungleichheit, Waffenbesitz oder Geschichte zu kontrollieren, und hängt stark am Ausreißer USA. Sie wurde methodisch deutlich kritisiert. Vor allem: Aus Länderdaten kann man nicht auf Einzelne schließen. Innerhalb der USA werden religiöse Menschen seltener straffällig, nicht häufiger.`,
      sources: [
        { kind: 'fachliteratur', author: 'Byron R. Johnson', work: 'More God, Less Crime: Why Faith Matters and How It Could Matter More', year: '2011', status: 'paraphrase' },
      ],
      followUps: [
        {
          id: 'ihr-auch-laendervergleiche',
          objection: `Ihr argumentiert doch selbst mit Ländervergleichen, etwa wenn ihr auf das Wachstum in Afrika verweist.`,
          objectionBy: 'Kritischer Soziologe',
          targetsPremise: 1,
          answer: `Ein fairer Punkt. Deshalb stütze ich Aussagen über Wohlbefinden und Moral auf Individualdaten und Längsschnittstudien, nicht auf Länderranglisten. Die Wachstumszahlen benutze ich nur, um die Behauptung zu widerlegen, Religion sterbe zwangsläufig aus – nicht als Beweis für ihre Wahrheit.`,
        },
      ],
    },
    {
      id: 'religioese-nicht-moralischer',
      objection: `Religiöse sind nicht moralischer. Denk an die Missbrauchsskandale in den Kirchen.`,
      objectionBy: 'Sam Harris',
      answer: `Die Skandale sind furchtbar, und die Kirche muss sich ihnen ohne Ausflüchte stellen – „Wenn wir sagen, wir haben keine Sünde, so verführen wir uns selbst" (1 Joh 1,8). Christen behaupten nicht, bessere Menschen zu sein, sondern begnadigte Sünder. Im Durchschnitt zeigen die Daten aber: Religiöse Menschen spenden mehr, engagieren sich häufiger ehrenamtlich und werden seltener straffällig.`,
      followUps: [
        {
          id: 'nur-fuer-eigene',
          objection: `Sie spenden doch nur für ihre eigene Kirche.`,
          objectionBy: 'Skeptiker',
          answer: `Putnam und Campbell fanden in *American Grace* (2010), dass religiös aktive Amerikaner nicht nur für ihre Gemeinden, sondern auch für weltliche Zwecke mehr spenden und sich häufiger in nicht-religiösen Organisationen engagieren als Nichtreligiöse. Gemeinschaft im Glauben scheint Gemeinsinn insgesamt zu stärken.`,
        },
      ],
    },
    {
      id: 'gluecklich-ohne-gott',
      objection: `Wenn Menschen ohne Gott glücklich und anständig leben – wozu braucht man ihn dann noch?`,
      objectionBy: 'Phil Zuckerman',
      answer: `Weil die Frage nach Gott eine Wahrheitsfrage ist, keine Glücksfrage. Ein Medikament wird nicht dadurch überflüssig, dass sich jemand gerade gesund fühlt. Christen glauben nicht, weil der Glaube glücklich macht, sondern weil Christus auferstanden ist. Und christliche Freude zeigt sich gerade dort, wo es kein Wohlstandsglück gibt – bei den koptischen Märtyrern von Libyen und ihren Familien, die mit Vergebung antworteten.`,
      followUps: [
        {
          id: 'also-nur-trost',
          objection: `Also gibst du zu: Religion ist nur Trost für Menschen ohne Wohlstand.`,
          objectionBy: 'Karl Marx (sinngemäß)',
          answer: `Nein. Ein bloßer Trost würde nicht verlangen, das Kreuz auf sich zu nehmen, die Feinde zu lieben und den Besitz zu teilen (Lk 9,23). Der Glaube gründet auf einer historischen Behauptung – der Auferstehung Jesu –, die man prüfen kann. Dass er Menschen in Not trägt, ist eine Frucht, nicht sein Fundament.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Woher stammen nach deiner Ansicht Sozialstaat, Vertrauen und Arbeitsethik in Skandinavien historisch?`,
    `Warum sind innerhalb fast aller Gesellschaften die religiös Aktiven im Durchschnitt glücklicher?`,
    `Ist Lebenszufriedenheit dasselbe wie ein sinnvolles Leben?`,
    `Selbst wenn Säkulare glücklicher wären – was würde das über die Existenz Gottes aussagen?`,
  ],
  avoid: [
    `Skandinavien schlechtreden (z. B. mit unbelegten Suizid- oder Kriminalitätszahlen) – diese Länder haben echte Stärken, die man anerkennen sollte.`,
    `Behaupten, ohne Gott könne niemand moralisch handeln – das ist falsch und wird sofort widerlegt; die Frage ist, wie Moral begründet wird.`,
    `Die Missbrauchsskandale relativieren.`,
  ],
  concessions: [
    `Die nordischen Länder sind in vielen Bereichen vorbildlich – Vertrauen, geringe Korruption, Sozialstaat.`,
    `Auch Nichtgläubige leben oft zutiefst anständig und solidarisch.`,
    `In Kirchen gab und gibt es schwere moralische Verfehlungen.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Tom Holland', work: 'Dominion (dt. Herrschaft: Die Entstehung des Westens)', year: '2019', status: 'paraphrase' },
    { kind: 'wissenschaft', author: 'Tyler J. VanderWeele u. a.', work: 'The Global Flourishing Study', year: '2025', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Robert D. Putnam & David E. Campbell', work: 'American Grace', year: '2010', status: 'paraphrase' },
    { kind: 'gegner', author: 'Phil Zuckerman', work: 'Society without God', year: '2008', status: 'paraphrase' },
  ],
  difficulty: 1,
  tags: ['Skandinavien', 'Glück', 'Flourishing', 'Moral', 'Säkularität'],
  related: [
    'soziologie/saekularisierung-unaufhaltsam',
    'moral-und-gott/gut-ohne-gott',
    'christentum-gesellschaft/christentum-ohne-nutzen',
    'psychologie/religion-schadet-psyche',
    'religionskritik/opium-des-volkes',
  ],
};

export default claim;
