import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'astrologie-heilsteine',
  title: `„Astrologie, Heilsteine und Energieheilung funktionieren – und sind harmlos."`,
  proponents: [
    { name: 'Liz Greene', role: 'Psychologische Astrologin', work: 'Saturn: A New Look at an Old Devil (1976)' },
    { name: 'Dolores Krieger', role: 'Pflegewissenschaftlerin (1921–2019), Begründerin des „Therapeutic Touch"', work: 'The Therapeutic Touch (1979)' },
    { name: 'Mikao Usui', role: 'Japanischer Begründer des Reiki (1865–1926)', work: 'Reiki-Tradition' },
    { name: 'Michel Gauquelin', role: 'Französischer Psychologe und Statistiker (1928–1991)', work: '„Mars-Effekt" – statistische Studien zu Planetenstellungen und Berufen' },
  ],
  steelman: `Astrologie ist so alt wie die Zivilisation; Ptolemäus und sogar Johannes Kepler erstellten Horoskope. Der Mond bewegt die Gezeiten der Ozeane – warum sollten die Gestirne nicht auch den Menschen beeinflussen, der zu großen Teilen aus Wasser besteht? Viele Menschen erkennen sich in ihrem Sternzeichen erstaunlich genau wieder. Die Bibel selbst sagt, die Gestirne seien „Zeichen" (Gen 1,14), und die Weisen aus dem Morgenland fanden Christus, indem sie einem Stern folgten (Mt 2,2). Millionen Menschen berichten, dass Heilsteine, Reiki oder Therapeutic Touch ihnen helfen – bei Schmerzen, Schlaflosigkeit und Ängsten; in manchen Krankenhäusern wird Energieheilung sogar angeboten. Selbst wenn es „nur" Placebo wäre: Hauptsache, es hilft. Und es schadet niemandem – niemand wird gezwungen, und es geht um Selbsterkenntnis und Wohlbefinden, nicht um Götzendienst. Was die Bibel verbietet, ist Zauberei, nicht ein Horoskop in der Zeitung oder ein Rosenquarz auf dem Nachttisch.`,
  biblical: {
    summary: `Die Bibel verbietet ausdrücklich, die Zukunft aus Zeichen zu deuten: „dass nicht unter dir gefunden werde … ein Weissager oder ein Tagewähler oder der auf Vogelgeschrei achte oder ein Zauberer" (Dtn 18,10–12). Jesaja verspottet Babylons „Sterngucker, die nach den Monden rechnen", die sich selbst nicht retten können (Jes 47,13–14). Jeremia mahnt: „Ihr sollt euch nicht fürchten vor den Zeichen des Himmels, wie die Heiden sich fürchten" (Jer 10,2). Daniel erklärt dem König, die Sterndeuter könnten das Geheimnis nicht kundtun – „aber es ist ein Gott im Himmel, der kann verborgene Dinge offenbaren" (Dan 2,27–28). Die Gestirne sind nach Gen 1,14 Zeichen für „Zeiten, Tage und Jahre" – ein Kalender, keine Schicksalsmächte; die Genesis nennt Sonne und Mond nicht einmal beim Namen, sondern „Lichter", um jede Vergöttlichung auszuschließen.`,
    detail: `**Die Weisen aus dem Morgenland (Mt 2):** Gott begegnet den Sterndeutern dort, wo sie stehen – aber der Stern führt sie zu Christus, und sie beten **ihn** an. Ignatius von Antiochien deutet das so: Seit diesem Stern ist alle Magie aufgelöst. Gott hat auch Bileams Eselin und die Totenbeschwörerin von En-Dor in seinen Plan einbezogen, ohne diese Praktiken gutzuheißen.

**Apg 19,19:** Als in Ephesus Menschen zum Glauben kamen, verbrannten sie öffentlich ihre Zauberbücher im Wert von 50.000 Silberstücken – ein Zeichen, dass der Glaube an Christus und die Suche nach Kraft in okkulten Praktiken nicht zusammenpassen.

**Heilung in der Kirche:** Die Bibel ehrt Medizin und Gebet zugleich: „Ehre den Arzt … denn der Herr hat ihn geschaffen" (Sir 38,1, deuterokanonisch) und „Ist jemand krank, der rufe zu sich die Ältesten der Gemeinde, dass sie über ihm beten und salben ihn mit Öl" (Jak 5,14).`,
    sources: [
      { kind: 'bibel', work: 'Deuteronomium (5. Mose)', ref: '18,10–12', quote: `daß nicht unter dir gefunden werde, der seinen Sohn oder seine Tochter durchs Feuer gehen lasse, oder ein Weissager oder ein Tagewähler oder der auf Vogelgeschrei achte oder ein Zauberer oder Beschwörer oder Wahrsager oder ein Zeichendeuter oder der die Toten frage. Denn wer solches tut, der ist dem HERRN ein Greuel.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Jesaja', ref: '47,13–14', quote: `Lass hertreten und dir helfen die Meister des Himmelslaufs und die Sterngucker, die nach den Monden rechnen, was über dich kommen werde! Siehe, sie sind wie Stoppeln, die das Feuer verbrennt.`, translation: 'Luther 1912', status: 'paraphrase' },
      { kind: 'bibel', work: 'Jeremia', ref: '10,2', quote: `Ihr sollt nicht der Heiden Weise lernen und sollt euch nicht fürchten vor den Zeichen des Himmels, wie die Heiden sich fürchten.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Daniel', ref: '2,27–28', quote: `Das verborgene Ding, das der König fordert von den Weisen, Gelehrten, Sterndeutern und Wahrsagern, steht in ihrem Vermögen nicht, dem König zu sagen. Aber es ist ein Gott im Himmel, der kann verborgene Dinge offenbaren.`, translation: 'Luther 1912', status: 'paraphrase' },
      { kind: 'bibel', work: 'Matthäus', ref: '2,2', quote: `Wo ist der neugeborene König der Juden? Wir haben seinen Stern gesehen im Morgenland und sind gekommen, ihn anzubeten.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Jakobus', ref: '5,14', quote: `Ist jemand krank, der rufe zu sich die Ältesten von der Gemeinde, daß sie über ihm beten und salben ihn mit Öl in dem Namen des HERRN.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  opposingView: {
    summary: `Wissenschaftlich gibt es keinen Beleg für die Wirksamkeit der Astrologie oder der Energieheilung über Placeboeffekte hinaus. Im bekanntesten Test (Shawn Carlson, *Nature* 1985) sollten Astrologen, die das Testdesign vorher gebilligt hatten, Geburtshoroskope den passenden Persönlichkeitsprofilen zuordnen – sie lagen nicht besser als der Zufall. Eine Langzeitstudie an über 2000 „Zeitzwillingen", die im März 1958 in London innerhalb weniger Minuten geboren wurden, fand keine überzufälligen Ähnlichkeiten (Dean und Kelly 2003). Die Treffsicherheit allgemeiner Persönlichkeitsbeschreibungen erklärt der Barnum- oder Forer-Effekt (1949). Beim Therapeutic Touch konnten 21 Praktiker in 280 Versuchen nur in 44 % der Fälle angeben, über welcher Hand sich die Hand der Versuchsleiterin befand – schlechter als Raten (Rosa et al., *JAMA* 1998; die Versuchsleiterin war die damals neunjährige Emily Rosa).`,
    detail: `**Heilsteine:** In einem Experiment des Psychologen Christopher French (Goldsmiths, London; vorgestellt 2001) berichteten Versuchspersonen mit echten und mit gefälschten Kristallen gleich häufig von „Energiegefühlen" – entscheidend war die Erwartung, nicht der Stein.

**Präzession:** Durch die Kreiselbewegung der Erdachse haben sich die Sternbilder gegenüber den astrologischen „Zeichen" seit der Antike um fast ein ganzes Zeichen verschoben; wer „Widder" ist, wurde meist bei der Sonne im Sternbild Fische geboren.

**Ist es harmlos?** Eine Studie im *Journal of the National Cancer Institute* (Johnson et al. 2018) fand bei Krebspatienten, die ausschließlich alternative Methoden statt konventioneller Behandlung wählten, ein etwa 2,5-fach erhöhtes Sterberisiko.

**Ehrlich:** Placeboeffekte sind real, besonders bei subjektiven Beschwerden wie Schmerz oder Unruhe. Michel Gauquelin fand einen statistischen „Mars-Effekt" bei Sportlern, der jahrzehntelang diskutiert und von späteren Nachuntersuchungen nicht bestätigt wurde. Johannes Kepler erstellte selbst Horoskope und hielt an einer begrenzten Himmelswirkung fest, obwohl er die populäre Astrologie scharf kritisierte.`,
    sources: [
      { kind: 'wissenschaft', author: 'Shawn Carlson', work: 'A double-blind test of astrology', ref: 'Nature 318 (1985), 419–425', year: '1985', quote: `Astrologen konnten Horoskope den passenden Persönlichkeitsprofilen nicht besser als zufällig zuordnen.`, status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'Geoffrey Dean / Ivan W. Kelly', work: 'Is Astrology Relevant to Consciousness and Psi?', ref: 'Journal of Consciousness Studies 10 (2003), Heft 6–7', year: '2003', quote: `Über 2000 „Zeitzwillinge" zeigen keine überzufälligen Ähnlichkeiten.`, status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'Bertram R. Forer', work: 'The fallacy of personal validation', ref: 'Journal of Abnormal and Social Psychology 44 (1949), 118–123', year: '1949', quote: `Allgemeine Persönlichkeitsbeschreibungen werden als sehr zutreffend empfunden (Barnum-Effekt).`, status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'Linda Rosa / Emily Rosa / Larry Sarner / Stephen Barrett', work: 'A Close Look at Therapeutic Touch', ref: 'Journal of the American Medical Association 279 (1998), 1005–1010', year: '1998', quote: `21 Praktiker, 280 Versuche, 44 % Treffer – kein Nachweis eines wahrnehmbaren „Energiefeldes".`, status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'Skyler B. Johnson u. a.', work: 'Use of Alternative Medicine for Cancer and Its Impact on Survival', ref: 'Journal of the National Cancer Institute 110 (2018), 121–124', year: '2018', quote: `Ausschließlich alternative Behandlung war mit deutlich erhöhter Sterblichkeit verbunden.`, status: 'paraphrase' },
    ],
  },
  church: {
    summary: `Die Kirchenväter haben die Astrologie nicht aus Unwissenheit abgelehnt, sondern mit Argumenten, die heute noch gelten. Der hl. Basilius verspottet in seinen Predigten über das Sechstagewerk die Horoskopsteller: Zwillinge, im selben Augenblick geboren, führen ganz verschiedene Leben – wie Jakob und Esau. Augustinus, der in seiner Jugend selbst Astrologie betrieb, erzählt in den *Bekenntnissen* von einem reichen Herrensohn und einem Sklavenkind, die zur selben Stunde geboren wurden und völlig verschiedene Schicksale hatten. Gregor von Nyssa schrieb eine eigene Schrift *Gegen das Schicksal*. Die koptische Kirche begegnet Krankheit mit Gebet, dem Sakrament der Krankensalbung, der Fürbitte der Heiligen **und** ärztlicher Hilfe – ohne kosmische Energien oder Steine.`,
    detail: `Ignatius von Antiochien deutet den Stern von Betlehem als Wendepunkt: Mit dem Erscheinen Christi sei alle Magie aufgelöst worden. Tertullian argumentiert, die Magier hätten bis zum Evangelium Raum gehabt; seit Christus erschienen ist, habe die Sterndeutung ihre Berechtigung verloren. Die koptische Überlieferung erzählt vom hl. Cyprian, einem berühmten Zauberer aus Antiochien, der sich bekehrte und seine Zauberbücher verbrannte – wie die Epheser in Apg 19.`,
    sources: [
      { kind: 'kirchenvater', author: 'Basilius der Große', work: 'Homilien über das Sechstagewerk (Hexaemeron)', ref: 'VI,5–7', quote: `Widerlegung der Horoskopkunst, u. a. mit dem Beispiel von Zwillingen wie Jakob und Esau.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'Bekenntnisse (Confessiones)', ref: 'VII,6', quote: `Ein Herrensohn und ein Sklavenkind, zur selben Stunde geboren, mit völlig verschiedenen Lebensläufen – Augustinus' Abkehr von der Astrologie.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Ignatius von Antiochien', work: 'Brief an die Epheser', ref: '19,3', quote: `Seit dem Erscheinen des Sterns wurde alle Zauberei aufgelöst und jede Fessel der Bosheit beseitigt.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Tertullian', work: 'Über den Götzendienst (De idololatria)', ref: '9', quote: `Die Sterndeutung hatte nur bis zum Evangelium Raum; seit Christus ist sie nicht mehr erlaubt.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `In einem Doppelblindtest, den die Astrologen selbst gebilligt hatten, konnten sie Horoskope nicht besser als der Zufall zuordnen (*Nature* 1985), und beim „Therapeutic Touch" spürten 21 Heiler das angebliche Energiefeld seltener als durch Raten (*JAMA* 1998). Harmlos ist es auch nicht, wenn Menschen deshalb Ärzte meiden. Und die Bibel warnt, Führung bei den Sternen statt bei Gott zu suchen – die Weisen aus dem Morgenland legten ihre Sternkunde Christus zu Füßen.`,
  keyPoints: [
    `**Wissenschaftlich widerlegt:** Carlson (*Nature* 1985), Zeitzwillinge (Dean & Kelly 2003), Barnum-Effekt.`,
    `**Energieheilung im Test:** Emily Rosas Experiment (*JAMA* 1998); gefälschte Kristalle wirken wie echte.`,
    `**Nicht harmlos:** Verzögerte Behandlung kann tödlich sein (JNCI 2018); geistlich verschiebt sich das Vertrauen.`,
    `**Biblisch:** Dtn 18,10–12; Jes 47,13–14; Jer 10,2; Dan 2,27–28.`,
    `**Die Weisen:** Der Stern führte zu Christus – „seitdem ist alle Magie aufgelöst" (Ignatius).`,
    `**Väter-Argument der Zwillinge:** Basilius und Augustinus widerlegten die Astrologie mit Logik.`,
  ],
  voices: [
    {
      person: 'basilius',
      role: 'als Naturbeobachter und Prediger über die Schöpfung',
      text: `Basilius nimmt in seinen Predigten über das Sechstagewerk die Gestirne als Gottes Werk ernst – und lehnt gerade deshalb die Astrologie ab. Er fragt: Wenn ein Augenblick der Geburt das Leben bestimmt, warum leben Zwillinge so verschieden? Und wenn die Sterne zu Tugend und Laster zwingen, wäre niemand für sein Handeln verantwortlich, und Lob und Strafe wären sinnlos. Die Sterne sind Zeichen für Zeiten und Wetter, nicht Herren über das menschliche Schicksal.`,
      sources: [{ kind: 'kirchenvater', author: 'Basilius der Große', work: 'Hexaemeron', ref: 'VI,5–7', quote: `Die Gestirne bestimmen weder Charakter noch Schicksal; sonst gäbe es keine Verantwortung.`, status: 'paraphrase' }],
    },
    {
      person: 'augustinus',
      role: 'als ehemaliger Anhänger der Astrologie',
      text: `Augustinus befragte in seiner Jugend selbst Astrologen. Sein Freund Firminus erzählte ihm, dass er zur selben Stunde geboren worden war wie das Kind einer Sklavin im selben Haus – der eine wurde ein angesehener Mann, das andere blieb Sklave. Daraus zog Augustinus die Konsequenz: Treffer der Astrologen sind Zufall oder geschickte Deutung, nicht Wissen. Im *Gottesstaat* führt er die Kritik weiter.`,
      sources: [
        { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'Confessiones', ref: 'IV,3; VII,6', quote: `Der Fall des Firminus und Augustinus' Abkehr von der Astrologie.`, status: 'paraphrase' },
        { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'De civitate Dei', ref: 'V,1–7', quote: `Widerlegung des astrologischen Fatalismus.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'ignatius',
      role: 'als Märtyrerbischof über den Stern von Betlehem',
      text: `Ignatius deutet auf dem Weg zum Martyrium in seinem Brief an die Epheser den Stern der Weisen: Ein Stern, heller als alle anderen, erschien, und seitdem wurde alle Zauberei aufgelöst, jede Fessel der Bosheit beseitigt, die Unwissenheit vertrieben. Für ihn markiert die Geburt Christi das Ende der Macht von Magie und Sterndeutung – die Gestirne selbst bilden einen Reigen um den Stern Christi.`,
      sources: [{ kind: 'kirchenvater', author: 'Ignatius von Antiochien', work: 'Brief an die Epheser', ref: '19', quote: `Mit dem Stern Christi wurde alle Magie aufgelöst.`, status: 'paraphrase' }],
    },
    {
      person: 'gregor-nyssa',
      role: 'als Verfasser von „Gegen das Schicksal"',
      text: `Gregor von Nyssa schrieb eine eigene Abhandlung gegen den Schicksalsglauben, die sich mit einem heidnischen Philosophen auseinandersetzt. Er verteidigt die Freiheit des Menschen und die Vorsehung Gottes gegen die Vorstellung, die Stellung der Gestirne bei der Geburt lege das Leben fest. Wer die Sterne über sein Leben entscheiden lässt, gibt seine Verantwortung ab – und verliert den Gott, der ihn persönlich führt.`,
      sources: [{ kind: 'kirchenvater', author: 'Gregor von Nyssa', work: 'Gegen das Schicksal (Contra fatum)', quote: `Verteidigung der menschlichen Freiheit gegen astrologischen Fatalismus.`, status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'mond-gezeiten',
      objection: `Der Mond bewegt die Gezeiten der Ozeane. Warum sollten die Sterne und Planeten nicht auch uns beeinflussen?`,
      objectionBy: 'Astrologen',
      answer: `Die Gezeiten entstehen durch Gravitation, und die wirkt auf riesige Wassermassen. Auf einen einzelnen Menschen bei der Geburt wirkt die Schwerkraft der Hebamme stärker als die des Mars. Aber die eigentliche Frage ist einfach: Lässt sich ein Einfluss messen? Astrologen haben das in fairen Tests nicht zeigen können – auch nicht in einem Test, dessen Ablauf sie vorher selbst gebilligt hatten.`,
      followUps: [
        {
          id: 'horoskop-trifft',
          objection: `Aber mein Horoskop beschreibt mich wirklich genau.`,
          objectionBy: 'Alltagserfahrung',
          answer: `Das erleben fast alle – und genau das ist der Barnum-Effekt: 1949 gab der Psychologe Bertram Forer seinen Studenten allen dieselbe Beschreibung, und sie bewerteten sie als sehr zutreffend. Sätze wie „Du kannst gesellig sein, brauchst aber auch Zeit für dich" passen auf jeden. Lies einmal das Horoskop eines anderen Zeichens – du wirst dich auch darin wiederfinden.`,
          followUps: [
            {
              id: 'kepler-astrologe',
              objection: `Kepler war doch selbst Astrologe. Willst du klüger sein als Kepler?`,
              objectionBy: 'Astrologen',
              answer: `Kepler erstellte tatsächlich Horoskope – auch um seinen Lebensunterhalt zu verdienen – und hielt an einer begrenzten Himmelswirkung fest; das gestehe ich zu. Aber er kritisierte die gängige Astrologie scharf. Und Wissenschaft lebt davon, dass man auch große Männer prüft: Seit Keplers Zeit wurde Astrologie getestet und hat nicht bestanden. Basilius und Augustinus hatten sie schon tausend Jahre früher mit einem einfachen Argument widerlegt: Zwillinge.`,
              followUps: [
                {
                  id: 'sterne-neigen',
                  objection: `Die Sterne zwingen nicht, sie neigen nur. Deshalb haben Zwillinge eben trotzdem verschiedene Lebenswege.`,
                  objectionBy: 'Moderne psychologische Astrologie',
                  answer: `Dann müsste man wenigstens eine statistische Neigung finden. Die Langzeitstudie an über 2000 Menschen, die im März 1958 in London fast gleichzeitig geboren wurden, fand keine überzufälligen Ähnlichkeiten in Persönlichkeit, Beruf oder Lebensweg. Eine „Neigung", die man nie messen kann, ist eine Behauptung, die sich gegen jede Prüfung abschirmt.`,
                  questionsBack: [`Welches Ergebnis würde dich überzeugen, dass die Sterne keinen Einfluss haben?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'weise-stern',
      objection: `Die Weisen aus dem Morgenland waren Astrologen – und Gott führte sie mit einem Stern zu Jesus. Also hat Gott die Astrologie gebilligt.`,
      objectionBy: 'Christliche Esoteriker',
      answer: `Gott begegnete ihnen dort, wo sie standen – aber er führte sie weg von den Sternen hin zu Christus, und sie beteten **ihn** an. Ignatius von Antiochien schreibt: Seit diesem Stern ist alle Magie aufgelöst. Gott bezieht vieles in seinen Plan ein, was er nicht gutheißt – er sprach sogar durch Bileams Eselin.`,
      followUps: [
        {
          id: 'gen-1-14-zeichen',
          objection: `Gen 1,14 sagt doch: Die Gestirne sollen „Zeichen" sein.`,
          objectionBy: 'Christliche Esoteriker',
          answer: `Lies weiter: Zeichen „für Zeiten, Tage und Jahre" – also für Kalender, Jahreszeiten und Feste. Bezeichnend ist, dass Gen 1 Sonne und Mond nicht einmal beim Namen nennt, sondern „großes" und „kleines Licht": In Babylon und Ägypten waren sie Götter; die Bibel macht sie zu Lampen. Und Jer 10,2 sagt ausdrücklich: Fürchtet euch nicht vor den Zeichen des Himmels wie die Heiden.`,
        },
      ],
    },
    {
      id: 'heilsteine-helfen',
      objection: `Heilsteine und Reiki helfen mir, ich schlafe besser und habe weniger Schmerzen. Und es schadet niemandem.`,
      objectionBy: 'Anwender',
      answer: `Dass du dich besser fühlst, glaube ich dir – Ruhe, Zuwendung und Erwartung wirken. Aber im Test spürten 21 Praktiker des Therapeutic Touch das angebliche Energiefeld seltener als durch bloßes Raten, und gefälschte Kristalle wirken genauso wie echte. „Harmlos" ist es nicht, wenn Menschen deshalb ärztliche Hilfe aufschieben: Bei Krebspatienten, die nur alternative Methoden wählten, war das Sterberisiko etwa zweieinhalbfach erhöht.`,
      followUps: [
        {
          id: 'placebo-gut',
          objection: `Und wenn es Placebo ist – Hauptsache, es hilft!`,
          objectionBy: 'Anwender',
          answer: `Placebo hilft vor allem bei subjektiven Beschwerden – nicht bei Tumoren oder Infektionen. Es kostet Geld und lebt von einer falschen Erklärung. Und geistlich verschiebt sich etwas: Das Vertrauen richtet sich auf Steine, Energien oder „Einstimmungen", in manchen Reiki-Richtungen sogar auf Geistführer. Christen beten zum lebendigen Gott, empfangen die Krankensalbung (Jak 5,14) und ehren zugleich den Arzt (Sir 38,1).`,
          sources: [{ kind: 'bibel', work: 'Jesus Sirach (deuterokanonisch)', ref: '38,1–4', quote: `Ehre den Arzt mit gebührender Verehrung, denn auch ihn hat der Herr erschaffen … Der Herr lässt die Arznei aus der Erde wachsen, und ein Vernünftiger verschmäht sie nicht.`, translation: 'sinngemäß', status: 'paraphrase' }],
          followUps: [
            {
              id: 'reliquien-auch',
              objection: `Ihr habt doch auch Reliquien, Weihwasser und geweihtes Öl. Das ist doch dasselbe wie Heilsteine.`,
              objectionBy: 'Kritiker beider Seiten',
              answer: `Ein ernster Einwand. Der Unterschied: Wir schreiben weder dem Öl noch den Gebeinen eine eigene Energie zu. Wir bitten den lebendigen Gott, der frei durch seine Heiligen und Sakramente handelt – wie bei den Tüchern des Paulus (Apg 19,11–12) oder den Gebeinen Elisas (2 Kön 13,21). Es gibt keine Technik, keine Frequenz und kein Geschäft mit Energien – und wir verbinden das Gebet mit der Medizin. Ehrlich gesagt: Auch unter Christen gibt es abergläubischen Umgang mit Gesegnetem, und die Kirche warnt davor.`,
              questionsBack: [`Wirkt der Heilstein deiner Meinung nach durch sich selbst oder durch jemanden, der ihn gebraucht?`],
            },
          ],
        },
      ],
    },
    {
      id: 'nur-unterhaltung',
      objection: `Ich lese das Horoskop doch nur zum Spaß. Ich glaube nicht wirklich daran.`,
      objectionBy: 'Alltagsgespräch',
      answer: `Das ist ehrlich, und niemand muss sich deshalb schämen. Aber frag dich: Beeinflusst es manchmal doch Entscheidungen, Stimmungen oder den Blick auf andere („typisch Skorpion")? Die Bibel warnt nicht vor Zeitungsspalten, sondern davor, Orientierung bei Zeichen statt bei Gott zu suchen. Es lohnt sich, die eigene Hoffnung bewusst auf den zu setzen, der dich kennt.`,
    },
  ],
  questionsToAsk: [
    `Warum leben Zwillinge, die im selben Augenblick geboren wurden, oft völlig verschieden?`,
    `Hast du einmal das Horoskop eines anderen Sternzeichens gelesen – passt es auch?`,
    `Würdest du bei einer ernsten Krankheit auf ärztliche Behandlung verzichten?`,
    `Wer wirkt, wenn ein Heilstein „wirkt" – der Stein, eine Energie oder eine Person?`,
  ],
  avoid: [
    `„Wer Horoskope liest, ist besessen." – Übertrieben und verletzend.`,
    `Behaupten, die Weisen aus dem Morgenland seien keine Sterndeuter gewesen – *magoi* waren es.`,
    `Placeboeffekte leugnen – sie sind real; der Punkt ist, dass sie keine spezifische Wirkung beweisen.`,
  ],
  concessions: [
    `Placeboeffekte sind real und können subjektive Beschwerden lindern.`,
    `Johannes Kepler erstellte selbst Horoskope.`,
    `Auch unter Christen gibt es einen abergläubischen Umgang mit gesegneten Gegenständen.`,
  ],
  furtherReading: [
    { kind: 'kirchenvater', author: 'Basilius der Große', work: 'Homilien über das Sechstagewerk', status: 'paraphrase' },
    { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'Bekenntnisse, Buch IV und VII', status: 'paraphrase' },
    { kind: 'wissenschaft', author: 'Shawn Carlson', work: 'A double-blind test of astrology', ref: 'Nature 318 (1985)', status: 'paraphrase' },
    { kind: 'wissenschaft', author: 'Edzard Ernst / Simon Singh', work: 'Gesund ohne Pillen – was kann die Alternativmedizin? (Trick or Treatment)', year: '2008', status: 'paraphrase' },
  ],
  difficulty: 1,
  tags: ['Astrologie', 'Heilsteine', 'Reiki', 'Therapeutic Touch', 'Placebo', 'Weise aus dem Morgenland'],
  related: [
    'okkultismus/spiritismus-harmlos',
    'medizin-wunder/heilungen-placebo',
    'medizin-wunder/kirche-gegen-medizin',
    'erkenntnistheorie/nur-wissenschaft-liefert-wissen',
  ],
};

export default claim;
