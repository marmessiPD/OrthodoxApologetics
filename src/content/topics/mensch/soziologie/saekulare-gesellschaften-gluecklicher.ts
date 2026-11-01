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
    summary: `**Glücksforschung:** Der World Happiness Report misst vor allem die Lebensbewertung auf einer Skala von 0 bis 10; hier führen die nordischen Länder, Finnland seit 2018 jährlich. Die **Global Flourishing Study** (VanderWeele, Johnson u. a., Nature Mental Health 2025; rund 200.000 Teilnehmer in 22 Ländern) misst umfassender – Glück, Gesundheit, Sinn, Charakter, Beziehungen, finanzielle Sicherheit. Sie fand die höchsten Durchschnittswerte in Indonesien, die niedrigsten in Japan; wohlhabende Länder schnitten bei finanzieller Sicherheit gut, bei Sinn und Beziehungen oft schwächer ab; und Gottesdienstbesuch ging in vielen Ländern mit höherem „Flourishing" einher – Kausalität ist nach den Autoren erst mit den Folgewellen prüfbar.`,
    detail: `- **Gregory Paul (2005)** verglich 17–18 Länder mit einfachen Korrelationen ohne Kontrolle weiterer Faktoren (Ungleichheit, Ethnizität, Waffenbesitz, Geschichte); das Ergebnis hängt stark am Ausreißer USA. Die Studie wurde methodisch kritisiert, u. a. von Gary Jensen (2006). Länderkorrelationen erlauben zudem keine Schlüsse über Einzelpersonen („ökologischer Fehlschluss").
- **Individualdaten:** Innerhalb vieler Gesellschaften sind aktiv religiöse Menschen im Durchschnitt häufiger „sehr glücklich" und gesellschaftlich engagierter (Pew Research Center 2019); in den USA spenden und engagieren sich religiöse Menschen mehr – auch für nicht-religiöse Zwecke (Putnam & Campbell, *American Grace*, 2010).
- **Christliches Erbe Skandinaviens:** Die nordischen Wohlfahrtsstaaten wurzeln historisch in lutherischer Armenfürsorge und Arbeitsethik (Sigrun Kahl 2005; Robert H. Nelson 2017). Noch heute ist eine deutliche Mehrheit der Dänen und rund die Hälfte der Schweden Mitglied der lutherischen Volkskirche; Zuckerman selbst spricht von „kultureller Religion".`,
    sources: [
      { kind: 'wissenschaft', author: 'Tyler J. VanderWeele, Byron R. Johnson u. a.', work: 'The Global Flourishing Study: Study Profile and Initial Results on Flourishing', ref: 'Nature Mental Health (veröff. 30. April 2025)', year: '2025', status: 'paraphrase', url: 'https://www.nature.com/articles/s44220-025-00423-5', note: 'Per Websuche geprüft (2026): Längsschnittstudie mit über 200.000 Teilnehmern in 22 Ländern; Indonesien mit den höchsten Werten; regelmäßiger Gottesdienstbesuch mit höherem Flourishing verbunden; die Autoren betonen, dass Kausalität erst mit den Folgewellen geprüft werden kann. Weitere Einzelwerte vor Verwendung am Original prüfen.' },
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
          followUps: [
            {
              id: 'gluecksvorteil-nur-norm',
              objection: `Auch die Individualdaten helfen dir nicht: Stavrova und Kollegen zeigten 2013, dass Religiöse vor allem dort glücklicher sind, wo Religiosität gesellschaftliche Norm ist. In säkularen Ländern schrumpft der Vorteil. Es geht um soziale Anpassung, nicht um Gott.`,
              objectionBy: 'Phil Zuckerman (gestützt auf Stavrova, Fetchenhauer & Schlösser 2013)',
              answer: `Das ist ein ernstzunehmender Befund, und ich gebe zu: Soziale Einbettung erklärt einen Teil des Zusammenhangs. Aber der Vorteil verschwindet in säkularen Ländern nicht einfach, sondern wird kleiner, und Längsschnittstudien zum Gottesdienstbesuch finden Zusammenhänge mit geringerer Sterblichkeit, weniger Depression und weniger Suizid über viele Kontexte hinweg. Vor allem: Mein Glaube hängt nicht daran, dass er glücklich macht. Ob etwas wahr ist, entscheidet keine Glücksumfrage – in beide Richtungen.`,
              detail: `Die Studie (Stavrova, Fetchenhauer & Schlösser, *Social Science Research* 2013) wertete Daten aus vielen Ländern aus und fand, dass die Lebenszufriedenheit Religiöser stark vom religiösen Klima des Landes abhängt. Das passt zu der Beobachtung, dass Gemeinschaft ein zentraler Faktor ist. Die Global Flourishing Study (2025) misst breiter als nur Zufriedenheit – auch Sinn, Charakter und Beziehungen – und fand regelmäßigen Gottesdienstbesuch in vielen der 22 Länder mit höherem „Flourishing" verbunden; die Autoren betonen, dass Kausalität erst in den Folgewellen geprüft werden kann.`,
              sources: [
                { kind: 'gegner', author: 'Olga Stavrova, Detlef Fetchenhauer, Thomas Schlösser', work: '„Why are religious people happy? The effect of the social norm of religiosity across countries", Social Science Research 42 (1)', year: '2013', status: 'paraphrase' },
              ],
              followUps: [
                {
                  id: 'sportverein-reicht',
                  objection: `Dann ist es eben nur Gemeinschaft. Ein Sportverein oder ein Chor tut dasselbe – ohne Metaphysik.`,
                  objectionBy: 'Phil Zuckerman',
                  answer: `Gemeinschaft ist wichtig, und Chöre und Vereine sind etwas Gutes. Aber in den Studien von VanderWeele und Kollegen bleiben die Zusammenhänge des Gottesdienstbesuchs mit Gesundheit und Wohlbefinden auch dann bestehen, wenn man soziale Unterstützung berücksichtigt – soziale Kontakte erklären nur einen Teil. Glaube bietet mehr als Geselligkeit: Hoffnung über den Tod hinaus, Vergebung, Sinn im Leiden, einen Grund zur Dankbarkeit. Kein Fußballverein tröstet am Sterbebett mit der Auferstehung.`,
                  detail: `VanderWeele unterscheidet mehrere Wege, auf denen gemeinschaftliche religiöse Praxis wirken kann: soziale Unterstützung, gesünderes Verhalten, Optimismus und Hoffnung, Sinn und Lebenszweck, Selbstkontrolle, Vergebung. Nur ein Teil davon ist „Vereinsleben". Für das Gespräch: Du musst nicht bestreiten, dass auch säkulare Gemeinschaften Menschen guttun. Dein Punkt ist, dass die Behauptung „Religion bringt nichts, was man nicht auch ohne sie hätte" von den Daten nicht gedeckt ist – und dass die Wahrheitsfrage davon ohnehin unabhängig bleibt.`,
                  voices: [
                    {
                      person: 'vanderweele',
                      role: 'als Epidemiologe und Leiter des Human Flourishing Program, Harvard',
                      text: `VanderWeele hat in mehreren Arbeiten untersucht, ob die Zusammenhänge zwischen Gottesdienstbesuch und Gesundheit durch soziale Unterstützung allein erklärt werden. Seine Ergebnisse deuten darauf hin, dass soziale Unterstützung nur einen Teil erklärt; Faktoren wie Sinn, Hoffnung und Vergebung tragen ebenfalls bei. Er betont, dass gemeinschaftliche Praxis stärker mit Gesundheit verbunden ist als private Spiritualität allein.`,
                      sources: [
                        { kind: 'wissenschaft', author: 'Tyler J. VanderWeele', work: '„Religious Communities and Human Flourishing", Current Directions in Psychological Science 26 (5)', year: '2017', status: 'paraphrase' },
                      ],
                    },
                  ],
                  questionsBack: [
                    `Was sagt dein Sportverein einer Mutter am Grab ihres Kindes?`,
                  ],
                },
              ],
            },
          ],
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
          followUps: [
            {
              id: 'moral-angeboren',
              objection: `Moral braucht keine Religion. Schon Babys zeigen ein Gespür für Fairness (Paul Bloom), und Kooperation ist evolutionär entstanden. Atheisten sind genauso anständig.`,
              objectionBy: 'Sam Harris',
              answer: `Dem stimme ich zu: Atheisten können sehr anständige Menschen sein, und jeder Mensch hat ein Gewissen – das sagt schon Paulus (Röm 2,14–15). Die Frage ist nicht, ob man ohne Glauben Gutes **erkennen** oder **tun** kann, sondern was moralische Pflichten **begründet**. Ein evolutionär entstandenes Gefühl erklärt, warum wir Fairness mögen – nicht, warum wir zu Fairness verpflichtet sind, auch wenn es uns schadet.`,
              detail: `Paul Bloom selbst unterscheidet zwischen einem angeborenen moralischen Grundgespür und der reifen Moral, die durch Vernunft, Kultur und Erziehung entsteht – und er zeigt, dass Babys auch Vorlieben für die eigene Gruppe haben. Die angeborene Ausstattung ist also ambivalent. Die christliche Sicht erklärt beides: Der Mensch ist nach Gottes Bild geschaffen und trägt das Gesetz im Herzen, aber er ist auch gefallen und neigt zum Bösen. Die vollständige Debatte findet sich im Themenblock „Moral und Gott".`,
              sources: [
                { kind: 'bibel', work: 'Römer', ref: '2,14–15', quote: `Denn so die Heiden, die das Gesetz nicht haben, doch von Natur tun des Gesetzes Werk, … beweisen sie, des Gesetzes Werk sei geschrieben in ihren Herzen.`, translation: 'Luther 1912 (gekürzt)', status: 'paraphrase', note: 'Gekürzt; vor wörtlicher Verwendung abgleichen.' },
                { kind: 'gegner', author: 'Paul Bloom', work: 'Just Babies: The Origins of Good and Evil', year: '2013', status: 'paraphrase' },
              ],
              questionsBack: [
                `Warum solltest du fair sein, wenn Unfairness dir nützt und niemand es merkt?`,
              ],
            },
          ],
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
          followUps: [
            {
              id: 'sinn-selbst-geben',
              objection: `Säkulare Menschen haben auch Sinn: Familie, Arbeit, Kunst, Natur. Sinn gibt man sich selbst – dafür braucht niemand einen Gott.`,
              objectionBy: 'Phil Zuckerman (Living the Secular Life, 2014)',
              answer: `Viele säkulare Menschen erleben ihr Leben als sinnvoll, und das soll man nicht kleinreden. Aber selbst gegebener Sinn ist zerbrechlich: Er hängt an dem, was mir gerade wichtig ist, und endet spätestens mit mir. Die Frage ist, ob mein Leben Sinn **hat** – auch wenn ich krank, vergessen oder gescheitert bin. Interessant ist, dass die Global Flourishing Study gerade beim Erleben von Sinn und Bedeutung in wohlhabenden, säkularen Gesellschaften eher schwächere Werte fand.`,
              detail: `C. S. Lewis beschreibt eine Sehnsucht, die keine irdische Erfüllung stillt: „Wenn ich in mir ein Verlangen finde, das keine Erfahrung in dieser Welt befriedigen kann, ist die wahrscheinlichste Erklärung, dass ich für eine andere Welt geschaffen bin" (sinngemäß, *Mere Christianity*, Buch III, Kap. 10). Augustinus sagt es als Gebet: „Unruhig ist unser Herz, bis es ruht in dir" (Confessiones I,1). Das ist kein Beweis, aber eine Deutung menschlicher Erfahrung, die der säkulare Selbstentwurf nur schwer einholt. Für das Gespräch: Frage, was Sinn **trägt**, wenn das, worauf man ihn baut – Gesundheit, Arbeit, Beziehungen –, wegbricht.`,
              voices: [
                {
                  person: 'cs-lewis',
                  role: 'als Apologet der Sehnsucht',
                  text: `Lewis argumentiert in *Mere Christianity*, dass natürliche Bedürfnisse auf reale Erfüllungen hinweisen – Hunger auf Nahrung, Durst auf Wasser. Die tiefe menschliche Sehnsucht nach einem Glück, das keine irdische Erfahrung ganz stillt, deutet er als Hinweis darauf, dass der Mensch für Gott geschaffen ist.`,
                  sources: [
                    { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Mere Christianity', ref: 'Buch III, Kap. 10 („Hope")', year: '1952', status: 'paraphrase' },
                  ],
                },
              ],
              sources: [
                { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'Confessiones', ref: 'I,1,1', year: 'um 400', quote: `Unruhig ist unser Herz, bis es ruht in dir.`, original: 'inquietum est cor nostrum, donec requiescat in te', translation: 'eigene Übersetzung', status: 'verbatim' },
              ],
              questionsBack: [
                `Was trägt den Sinn deines Lebens, wenn Gesundheit, Arbeit und Beziehungen wegbrechen?`,
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'aufklaerung-nicht-religion',
      objection: `Der Fortschritt der Menschheit – weniger Armut, weniger Gewalt, längere Lebenserwartung, Menschenrechte – verdanken wir Vernunft, Wissenschaft und Humanismus, nicht der Religion. Je säkularer die Welt wurde, desto besser wurde sie.`,
      objectionBy: 'Steven Pinker (Enlightenment Now, 2018)',
      answer: `Der Fortschritt ist real, und Pinkers Daten dazu sind beeindruckend. Aber die Geschichte ist nicht so sauber getrennt: Die Abschaffung der Sklaverei wurde maßgeblich von Christen wie William Wilberforce getragen, das Krankenhaus für alle geht auf Basilius zurück, und die Idee der gleichen Würde jedes Menschen hat biblische Wurzeln. Zugleich hat das 20. Jahrhundert gezeigt, was ausdrücklich gottlose Regime anrichten können. Vernunft und Glaube sind keine Gegner – die Universitäten und die moderne Naturwissenschaft entstanden in christlicher Kultur.`,
      detail: `Rodney Stark hat in *For the Glory of God* (2003) und *The Victory of Reason* (2005) argumentiert, dass christliche Überzeugungen – ein rationaler Schöpfer, eine geordnete Welt, die gleiche Würde aller – die Wissenschaft, die Kritik an der Sklaverei und die Entwicklung von Freiheitsrechten gefördert haben. Man muss nicht jede seiner Thesen übernehmen; aber die einfache Erzählung „Religion = Dunkelheit, Säkularität = Licht" hält der historischen Forschung nicht stand. Ehrlich bleibt: Auch Christen haben Unrecht gerechtfertigt – etwa Sklaverei –, und die Kritik daran kam ebenfalls aus christlichen Gründen.`,
      voices: [
        {
          person: 'rodney-stark',
          role: 'als Religionssoziologe und Historiker',
          text: `Stark zeigt in *The Rise of Christianity* (1996), wie die frühen Christen durch Krankenpflege während der Seuchen, die Aufwertung von Frauen und die Sorge für Arme und Ausgesetzte in der antiken Welt auffielen und wuchsen. In späteren Werken argumentiert er, dass die christliche Theologie mit ihrem Glauben an einen vernünftigen Gott und eine geordnete Schöpfung den Boden für Wissenschaft und Freiheit bereitete.`,
          sources: [
            { kind: 'fachliteratur', author: 'Rodney Stark', work: 'For the Glory of God: How Monotheism Led to Reformations, Science, Witch-Hunts, and the End of Slavery', year: '2003', status: 'paraphrase' },
            { kind: 'fachliteratur', author: 'Rodney Stark', work: 'The Rise of Christianity', year: '1996', status: 'paraphrase' },
          ],
        },
      ],
      sources: [
        { kind: 'gegner', author: 'Steven Pinker', work: 'Enlightenment Now: The Case for Reason, Science, Humanism, and Progress', year: '2018', status: 'paraphrase' },
      ],
      questionsBack: [
        `Wer hat die Abschaffung der Sklaverei im britischen Empire politisch durchgesetzt – und aus welchen Gründen?`,
        `Waren die ausdrücklich atheistischen Staaten des 20. Jahrhunderts humaner?`,
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
