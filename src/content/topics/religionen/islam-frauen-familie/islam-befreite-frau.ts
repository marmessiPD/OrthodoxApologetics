import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'islam-befreite-frau',
  title: `„Der Islam hat die Frau befreit und ihr Rechte gegeben."`,
  proponents: [
    { name: 'Jamal Badawi', role: 'Islamischer Gelehrter, Kanada', work: 'Gender Equity in Islam (1995)' },
    { name: 'Zakir Naik', role: 'Islamischer Prediger, Peace TV', work: 'Vortrag „Women\'s Rights in Islam – Modernising or Outdated?"' },
    { name: 'Asma Barlas', role: 'Politikwissenschaftlerin, Ithaca College', work: '„Believing Women" in Islam: Unreading Patriarchal Interpretations of the Qur\'an (2002)' },
    { name: 'Yasmin Mogahed', role: 'Islamische Autorin und Rednerin', work: 'Reclaim Your Heart (2012)' },
  ],
  steelman: `„Vor dem Islam begruben Araber ihre neugeborenen Töchter lebendig – der Koran verurteilte das: ‚Wenn das lebendig begrabene Mädchen gefragt wird, wegen welcher Sünde es getötet wurde' (81:8–9). Frauen wurden wie Besitz vererbt – der Koran verbot es (4:19). Der Islam gab der Frau vor 1.400 Jahren ein eigenes Erbrecht (4:7), die Brautgabe als ihr Eigentum (4:4), das Recht auf eigenes Vermögen, auf Zustimmung zur Ehe und auf Scheidung (*khulʿ*). ‚Das Paradies liegt unter den Füßen der Mütter.' Auf die Frage, wem man am meisten Güte schulde, sagte der Prophet dreimal: ‚Deiner Mutter.' Vor Gott sind Männer und Frauen gleich (33:35). In Europa durften Frauen dagegen bis ins 19. und 20. Jahrhundert kein eigenes Vermögen besitzen und nicht wählen."`,
  biblical: {
    summary: `Die Bibel begründet die Würde der Frau in der Schöpfung: „Gott schuf den Menschen ihm zum Bilde … und schuf sie einen Mann und ein Weib" (Gen 1,27). Jesus durchbrach die Konventionen seiner Zeit: Er sprach öffentlich mit der Samariterin (Joh 4), ließ sich von Frauen begleiten und unterstützen (Lk 8,1–3), lehrte Maria von Bethanien wie einen Jünger (Lk 10,39) und machte Frauen zu den ersten Zeuginnen der Auferstehung (Mt 28,1–10; Joh 20,11–18) – in einer Kultur, in der ihr Zeugnis wenig galt. Paulus schreibt: „Hier ist kein Mann noch Weib; denn ihr seid allzumal einer in Christo Jesu" (Gal 3,28). Ehemänner sollen ihre Frauen lieben, „gleichwie Christus geliebt hat die Gemeinde und hat sich selbst für sie gegeben" (Eph 5,25), und die ehelichen Rechte sind gegenseitig (1 Kor 7,3–4).`,
    detail: `**Gegenseitigkeit:** „Das Weib ist ihres Leibes nicht mächtig, sondern der Mann. Desgleichen der Mann ist seines Leibes nicht mächtig, sondern das Weib" (1 Kor 7,4) – für die Antike revolutionär.

**Josephus zum Zeugnis der Frauen:** Der jüdische Historiker schreibt, das Zeugnis von Frauen werde wegen der „Leichtfertigkeit und Kühnheit ihres Geschlechts" nicht zugelassen (Antiquitates 4,219). Dass die Evangelien Frauen als erste Zeuginnen nennen, ist darum historisch bemerkenswert – und theologisch eine Aufwertung.`,
    sources: [
      { kind: 'bibel', work: 'Galater', ref: '3,28', quote: `Hier ist kein Jude noch Grieche, hier ist kein Knecht noch Freier, hier ist kein Mann noch Weib; denn ihr seid allzumal einer in Christo Jesu.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Epheser', ref: '5,25', quote: `Ihr Männer, liebet eure Weiber, gleichwie Christus auch geliebt hat die Gemeinde und hat sich selbst für sie gegeben.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Korinther', ref: '7,4', quote: `Das Weib ist ihres Leibes nicht mächtig, sondern der Mann. Desgleichen der Mann ist seines Leibes nicht mächtig, sondern das Weib.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Petrus', ref: '3,7', quote: `Desgleichen, ihr Männer, wohnet bei ihnen mit Vernunft und gebet dem weiblichen als dem schwächeren Werkzeug seine Ehre, als die auch Miterben sind der Gnade des Lebens, auf daß eure Gebete nicht verhindert werden.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'sonstiges', author: 'Flavius Josephus', work: 'Jüdische Altertümer (Antiquitates)', ref: '4,219', year: 'um 93/94', quote: `Das Zeugnis von Frauen soll wegen der Leichtfertigkeit und Kühnheit ihres Geschlechts nicht zugelassen werden.`, status: 'paraphrase' },
    ],
  },
  church: {
    summary: `In der orthodoxen Kirche ist der höchstverehrte Mensch eine Frau: die Theotokos, die Gottesgebärerin, „höher als die Cherubim und herrlicher als die Seraphim". Die koptische Kirche verehrt zahlreiche heilige Frauen – Märtyrerinnen wie die hl. Demiana und ihre vierzig Jungfrauen, Wüstenmütter wie die Amma Synkletika, in neuerer Zeit Mutter Irini (Tamav Irini, gest. 2006). Die frühe Kirche verbot die Aussetzung neugeborener Kinder, die im Römischen Reich vor allem Mädchen traf (Didache 2,2; Diognetbrief 5,6). Die christliche Ehe ist monogam und gegenseitig, und der Mann wird an der Selbsthingabe Christi gemessen.`,
    sources: [
      { kind: 'kirchenvater', work: 'Didache', ref: '2,2', year: 'ca. 100', quote: `Du sollst kein Kind durch Abtreibung töten und kein Neugeborenes umbringen.`, status: 'paraphrase' },
      { kind: 'kirchenvater', work: 'Brief an Diognet', ref: '5,6', year: '2. Jh.', quote: `Die Christen heiraten wie alle und zeugen Kinder, aber sie setzen die Neugeborenen nicht aus.`, status: 'paraphrase' },
      { kind: 'liturgie', work: 'Koptische Psalmodie / Theotokien', quote: `Maria wird als höher als die Cherubim und herrlicher als die Seraphim gepriesen.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Islamwissenschaftlerinnen wie Kecia Ali und Leila Ahmed zeigen ein differenziertes Bild: Der Koran brachte gegenüber manchen vorislamischen Praktiken echte Verbesserungen (Verbot der Tötung von Mädchen, Erbanteil, Brautgabe als Eigentum der Frau). Zugleich schrieb er eine Ordnung fest, in der Männer rechtlich übergeordnet sind: Erbteil halb so groß wie der des Bruders (4:11), Zeugenaussage zweier Frauen gegen die eines Mannes (2:282), Autorität und Züchtigungsrecht des Mannes (4:34), Mehrehe und Sklavinnen nur für Männer (4:3; 23:5–6), einseitiges Scheidungsrecht des Mannes. Muslimische Feministinnen (Fatima Mernissi, Amina Wadud, Asma Barlas) lesen den Koran egalitär und machen die Auslegungstradition für das Patriarchat verantwortlich; traditionelle Gelehrte verteidigen die Rollenverteilung als komplementär und gerecht.`,
    detail: `**Hadithe, die in der Debatte eine Rolle spielen:**
- Bukhari 304: Frauen seien „mangelhaft an Verstand und Religion"; die Mehrheit der Höllenbewohner seien Frauen.
- Bukhari 2658: Die Zeugenaussage einer Frau gelte halb, „wegen des Mangels ihres Verstandes".
- Bukhari 5273: Die Frau des Thabit ibn Qays erhält die Trennung (*khulʿ*) gegen Rückgabe ihres Gartens – ein positives Beispiel für das Recht der Frau, die Ehe zu beenden.`,
    sources: [
      { kind: 'fachliteratur', author: 'Kecia Ali', work: 'Sexual Ethics and Islam: Feminist Reflections on Qur\'an, Hadith, and Jurisprudence', year: '2006', quote: `Das klassische islamische Recht ordnete die Ehe nach einem Modell männlicher Verfügungsgewalt; muslimische Feministinnen müssen sich den Texten ehrlich stellen, statt das Problem allein den Auslegern zuzuschreiben.`, status: 'paraphrase', note: 'Kecia Ali ist selbst Muslimin.' },
      { kind: 'hadith', work: 'Sahih al-Bukhari', ref: '304', quote: `„Ich habe niemanden gesehen, der mangelhafter an Verstand und Religion ist als ihr (Frauen) …" – auf die Frage nach dem Mangel an Verstand: „Ist nicht das Zeugnis einer Frau gleich dem halben Zeugnis eines Mannes?"`, status: 'paraphrase', url: 'https://sunnah.com/bukhari:304' },
      { kind: 'hadith', work: 'Sahih al-Bukhari', ref: '2658', quote: `„Ist nicht das Zeugnis einer Frau gleich der Hälfte des Zeugnisses eines Mannes?" – „Das liegt am Mangel ihres Verstandes."`, status: 'paraphrase', url: 'https://sunnah.com/bukhari:2658' },
      { kind: 'hadith', work: 'Sahih al-Bukhari', ref: '5273', quote: `Die Frau des Thabit ibn Qays kam zum Propheten und wollte sich trennen; er fragte, ob sie ihm seinen Garten zurückgebe, und ordnete die Trennung an.`, status: 'paraphrase', url: 'https://sunnah.com/bukhari:5273' },
    ],
  },
  quickAnswer: `Der Islam hat einige vorislamische Missstände beendet – etwa die Tötung neugeborener Mädchen – und der Frau Erb- und Eigentumsrechte gegeben. Das erkenne ich ausdrücklich an. Aber er hat zugleich eine dauerhafte Ungleichheit als ewiges Gottesrecht festgeschrieben: halber Erbteil (4:11), halbes Zeugnis (2:282, begründet in Bukhari 2658 mit dem „Mangel an Verstand"), Züchtigungsrecht des Mannes (4:34), Mehrehe nur für Männer (4:3). Christus dagegen machte Frauen zu den ersten Zeuginnen der Auferstehung, und Paulus schreibt: „Hier ist kein Mann noch Weib" (Gal 3,28).`,
  keyPoints: [
    `**Echte Verbesserungen anerkennen:** Verbot der Tötung von Mädchen (81:8–9), Erbanteil (4:7), Brautgabe als Eigentum der Frau (4:4), Möglichkeit des *khulʿ* (Bukhari 5273).`,
    `**Aber: festgeschriebene Ungleichheit** – Erbe (4:11), Zeugnis (2:282), Autorität und Züchtigung (4:34), Mehrehe und Sklavinnen (4:3; 23:5–6).`,
    `**Die Begründung in den Hadithen:** Bukhari 304 und 2658 begründen das halbe Zeugnis mit einem „Mangel an Verstand" – nicht mit fehlender Erfahrung.`,
    `**Das Christentum war früher:** Verbot der Kindesaussetzung (Didache, Diognet), monogame und gegenseitige Ehe (1 Kor 7,4), Frauen als erste Auferstehungszeuginnen.`,
    `**Reformbedarf von innen:** Muslimische Feministinnen wie Amina Wadud müssen sich gegen den Wortlaut einzelner Verse stellen – ein Zeichen, dass das Problem im Text liegt.`,
    `**Die Theotokos:** Im orthodoxen Glauben ist ein Mensch über allen Engeln geehrt – eine Frau.`,
  ],
  voices: [
    {
      person: 'paulus',
      role: 'als Apostel der Gleichheit in Christus',
      text: `Paulus, dem oft Frauenfeindlichkeit vorgeworfen wird, nennt zahlreiche Frauen als Mitarbeiterinnen: Phöbe, die Diakonin von Kenchreä, Priska, die er vor ihrem Mann nennt, Junia, „berühmt unter den Aposteln" (Röm 16,1–7). Er lehrt die Gegenseitigkeit der Ehe (1 Kor 7,3–4) und die gleiche Würde in Christus (Gal 3,28). Sein Bild der Ehe ist nicht Herrschaft, sondern Hingabe nach dem Maß Christi (Eph 5,25–29).`,
      sources: [
        { kind: 'bibel', work: 'Römer', ref: '16,1–7', quote: `Paulus empfiehlt Phöbe, die Dienerin (Diakonin) der Gemeinde zu Kenchreä, grüßt Priska und Aquila und Junia.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'rodney-stark',
      role: 'als Religionssoziologe',
      text: `Stark zeigt, dass Frauen im frühen Christentum einen deutlich höheren Status hatten als in ihrer heidnischen Umwelt: Die Kirche verbot Kindesaussetzung und Abtreibung, die vor allem Mädchen und Frauen trafen, verlangte eheliche Treue auch vom Mann, schützte Witwen und lehnte die Zwangsverheiratung sehr junger Mädchen ab. Das machte das Christentum für Frauen besonders anziehend und trug zu seinem Wachstum bei.`,
      sources: [
        { kind: 'fachliteratur', author: 'Rodney Stark', work: 'The Rise of Christianity', ref: 'Kap. 5', year: '1996', quote: `Frauen genossen in christlichen Gemeinden einen höheren Status als in der griechisch-römischen Welt; Christinnen heirateten im Durchschnitt später und freier.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'kyle-harper',
      role: 'als Althistoriker der spätantiken Sexualethik',
      text: `Harper beschreibt, wie das Christentum die Sexualmoral der Antike grundlegend veränderte: von einer Ordnung, in der Ehre und Status den Wert eines Menschen bestimmten und Sklavinnen sexuell verfügbar waren, zu einer Ethik, in der jeder Mensch als freies, vor Gott verantwortliches Subjekt galt. Damit wurde auch die Frau – auch die Sklavin – zur Trägerin unverletzlicher Würde.`,
      sources: [
        { kind: 'fachliteratur', author: 'Kyle Harper', work: 'From Shame to Sin: The Christian Transformation of Sexual Morality in Late Antiquity', year: '2013', quote: `Das Christentum ersetzte eine statusbasierte Sexualordnung durch eine Ethik der Freiheit und Verantwortung jedes Einzelnen vor Gott.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'johannes-damaskus',
      role: 'als früher christlicher Kenner des Korans',
      text: `Johannes von Damaskus erwähnt in seiner Schrift über die Häresien die Sure „Die Frau" (an-Nisaʾ) und kritisiert, dass sie dem Mann mehrere Frauen und daneben Sklavinnen erlaube und die Scheidung leicht mache. Er stellt dem das christliche Verständnis der Ehe als lebenslange, einzigartige Verbindung gegenüber – eine Kritik, die zeigt, dass Christen schon im 8. Jahrhundert die koranische Frauenordnung als Rückschritt gegenüber dem Evangelium empfanden.`,
      sources: [
        { kind: 'kirchenvater', author: 'Johannes von Damaskus', work: 'Über die Häresien (De haeresibus)', ref: 'Kap. 100/101', year: 'um 743', quote: `Kritik an den Bestimmungen der „Schrift über die Frau", die vier Frauen und daneben zahlreiche Sklavinnen erlaube und die Scheidung erleichtere.`, status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'toechter-lebendig-begraben',
      objection: `Vor dem Islam begruben die Araber ihre Töchter lebendig. Der Koran hat das verboten (81:8–9). Das ist Befreiung!`,
      objectionBy: 'Jamal Badawi',
      answer: `Das ist eine echte Errungenschaft, und ich ehre sie. Aber die Christen hatten die Tötung und Aussetzung Neugeborener schon 500 Jahre früher verboten (Didache 2,2; Diognet 5,6), und auch das Judentum lehnte sie ab. Die Frage ist nicht, ob der Islam besser war als die schlimmste vorislamische Praxis, sondern ob seine Ordnung das vollkommene und endgültige Maß für die Frau ist.`,
      sources: [
        { kind: 'koran', work: 'Sure 81 (at-Takwir)', ref: '81:8–9', quote: `Und wenn das lebendig begrabene Mädchen gefragt wird, für welche Sünde es getötet wurde.`, original: `wa-idhā l-mawʾūdatu suʾilat bi-ayyi dhanbin qutilat`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/81/8-9' },
      ],
      followUps: [
        {
          id: 'europa-frauen-unmuendig',
          objection: `Das christliche Europa behandelte Frauen bis ins 20. Jahrhundert als Unmündige. Das Frauenwahlrecht kam erst 1918/19, das Recht auf eigenes Vermögen noch später.`,
          objectionBy: 'Mohammed Hijab',
          answer: `Das gestehe ich zu – christliche Gesellschaften blieben oft hinter dem Evangelium zurück. Aber die Reformer, die das änderten, konnten sich auf die Grundtexte berufen: Gal 3,28, die Gottebenbildlichkeit, die Gegenseitigkeit der Ehe. Muslimische Reformer müssen dagegen gegen den Wortlaut von 4:11, 2:282 und 4:34 argumentieren.`,
          followUps: [
            {
              id: 'paulus-frau-schweige',
              objection: `Paulus sagt doch selbst: „Die Frau schweige in der Gemeinde" (1 Kor 14,34) und „Der Mann ist des Weibes Haupt" (Eph 5,23).`,
              objectionBy: 'Zakir Naik',
              answer: `Paulus spricht von einer Ordnung im Gottesdienst, nicht vom Wert der Frau – er setzt drei Kapitel vorher voraus, dass Frauen beten und prophetisch reden (1 Kor 11,5). Und das „Haupt"-Sein in Eph 5 wird sofort definiert: lieben, „gleichwie Christus geliebt hat die Gemeinde und hat sich selbst für sie gegeben" (5,25). Voraus geht die gegenseitige Unterordnung (5,21).`,
              detail: `Siehe Claim „Die Bibel ist frauenfeindlich" (Topic „Altes Testament & Ethik").`,
              followUps: [
                {
                  id: 'keine-priesterinnen',
                  objection: `Und warum dürfen Frauen in eurer Kirche dann nicht Priester werden? Das ist doch Diskriminierung.`,
                  objectionBy: 'Mohammed Hijab',
                  answer: `Das Priestertum ist in der orthodoxen Sicht keine Belohnung für höheren Wert, sondern eine Ikone Christi als Bräutigam der Kirche. Der höchstverehrte Mensch in unserer Kirche ist kein Priester, sondern eine Frau: die Gottesgebärerin, „höher als die Cherubim". Und auch der Islam kennt keine weiblichen Imame für gemischte Gemeinden – diese Frage trifft beide.`,
                  detail: `Siehe Claim „Dass Frauen nicht Priester werden können, ist diskriminierend".`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'erbrecht-4-7',
      objection: `Der Islam gab der Frau ein eigenes Erbrecht (4:7) – in Europa erbten Frauen oft jahrhundertelang gar nichts.`,
      objectionBy: 'Jamal Badawi',
      answer: `4:7 gibt Frauen einen Anteil – ein Fortschritt gegenüber manchen damaligen Praktiken. Aber 4:11 legt fest: „Dem Männlichen kommt gleich viel zu wie der Anteil zweier Weiblicher." Für eine bestimmte Wirtschaftsordnung mag das erklärbar sein; als ewiges, unveränderliches Gottesrecht schreibt es Ungleichheit fest.`,
      sources: [
        { kind: 'koran', work: 'Sure 4 (an-Nisa\')', ref: '4:11', quote: `Allah verordnet euch hinsichtlich eurer Kinder: Dem Männlichen kommt gleich viel zu wie der Anteil zweier Weiblicher.`, original: `li-dh-dhakari mithlu ḥaẓẓi l-unthayayn`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/4/11' },
      ],
      followUps: [
        {
          id: 'mann-muss-versorgen',
          objection: `Der Mann muss die Frau versorgen und die Brautgabe zahlen; ihr Vermögen gehört ihr allein. Unterm Strich ist die Frau sogar bevorzugt.`,
          objectionBy: 'Jamal Badawi',
          answer: `In der klassischen Wirtschaftsordnung lässt sich das vertreten. Aber das Gesetz gilt „für alle Zeiten": auch für die Witwe, die ihre Kinder allein ernährt, und für die Tochter, die ihre Eltern pflegt. Ihr Anteil bleibt die Hälfte. Und beim Zeugnis gibt es keinen Ausgleich: 2:282 verlangt zwei Frauen anstelle eines Mannes, „damit, wenn eine sich irrt, die andere sie erinnere".`,
          sources: [
            { kind: 'koran', work: 'Sure 2 (al-Baqara)', ref: '2:282', quote: `Und lasst zwei Zeugen von euren Männern bezeugen; wenn es nicht zwei Männer sind, dann ein Mann und zwei Frauen …, damit, wenn eine von beiden sich irrt, die eine die andere erinnere.`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/2/282' },
          ],
          followUps: [
            {
              id: 'nur-finanzvertraege',
              objection: `2:282 betrifft nur Finanzverträge, in denen Frauen damals unerfahren waren. Das ist keine Aussage über ihren Verstand.`,
              objectionBy: 'Amina Wadud',
              answer: `Eine mögliche moderne Lesart, und manche klassischen Gelehrten wie Ibn al-Qayyim ließen breitere Beweismittel zu – das gestehe ich zu. Aber Bukhari 2658 begründet die Regel ausdrücklich mit dem „Mangel ihres Verstandes", nicht mit fehlender Erfahrung, und Bukhari 304 verallgemeinert: „mangelhaft an Verstand und Religion".`,
              followUps: [
                {
                  id: 'bukhari-304-scherz',
                  objection: `Bukhari 304 war eine liebevolle Neckerei des Propheten am Festtag, kein Urteil über die Natur der Frau.`,
                  objectionBy: 'moderne muslimische Apologeten',
                  answer: `Der Bericht gibt einen Grund an und beantwortet eine Frage – im Zusammenhang einer Warnung, dass die meisten Höllenbewohner Frauen seien. Und wenn es ein Scherz war, ist es umso problematischer, dass darauf eine Rechtsregel beruht. Ganz anders Christus: Er vertraute die erste Botschaft der Auferstehung Frauen an (Joh 20,17–18) – in einer Kultur, in der ihr Zeugnis nach Josephus nicht zugelassen wurde.`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'khadija-aischa-vorbilder',
      objection: `Khadija war eine erfolgreiche Geschäftsfrau, Aischa eine der größten Gelehrten des Islam. Der Islam fördert Frauen!`,
      objectionBy: 'Yasmin Mogahed',
      answer: `Khadija führte ihr Geschäft *vor* dem Islam – sie stellte Mohammed an und machte ihm den Heiratsantrag. Das zeigt, dass Frauen im vorislamischen Mekka nicht rechtlos waren. Aischas Gelehrsamkeit ist echt und bewundernswert – das gestehe ich gern zu. Aber herausragende Frauen gibt es in allen Religionen; die Frage ist der rechtliche Rahmen.`,
      followUps: [
        {
          id: 'recht-auf-scheidung',
          objection: `Frauen haben im Islam ein Recht auf Scheidung (*khulʿ*), wie die Frau des Thabit ibn Qays zeigt (Bukhari 5273).`,
          objectionBy: 'Jamal Badawi',
          answer: `Das ist ein gutes Beispiel, und ich erkenne es an. Aber die Rechte sind ungleich: Der Mann kann einseitig durch Aussprechen (*ṭalāq*) scheiden; die Frau muss beim *khulʿ* in der Regel die Brautgabe zurückgeben und braucht oft einen Richter. Und nach dreimaliger Scheidung darf sie ihren ersten Mann nur wieder heiraten, wenn sie zuvor einen anderen geheiratet und die Ehe vollzogen hat (2:230).`,
          sources: [
            { kind: 'koran', work: 'Sure 2 (al-Baqara)', ref: '2:230', quote: `Wenn er sich (zum dritten Mal) von ihr scheidet, so ist sie ihm danach nicht mehr erlaubt, bis sie einen anderen Gatten geheiratet hat.`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/2/230' },
          ],
          followUps: [
            {
              id: 'christliche-scheidung-haerter',
              objection: `Im Christentum ist Scheidung praktisch verboten. Das ist viel härter für Frauen in schlechten Ehen.`,
              objectionBy: 'Mohammed Hijab',
              answer: `Jesu Strenge in der Scheidungsfrage schützte gerade die Frauen: Zu seiner Zeit konnten Männer ihre Frauen „um jeder Ursache willen" entlassen (Mt 19,3), und die Frau stand dann oft schutzlos da. Die koptische Kirche erlaubt die Scheidung vor allem bei Ehebruch (Mt 19,9), kann aber zum Schutz einer Frau die Trennung erlauben. Die Grundlage ist nicht das Verfügungsrecht des Mannes, sondern die Treue beider.`,
              followUps: [
                {
                  id: 'frauen-gefangen',
                  objection: `Dann sind Frauen in eurer Kirche in gewalttätigen Ehen gefangen.`,
                  objectionBy: 'Mohammed Hijab',
                  answer: `Nein. Gewalt in der Ehe ist eine schwere Sünde, der die Kirche entgegentreten muss, und eine Frau darf und soll sich in Sicherheit bringen; die Kirche begleitet sie seelsorglich. Wir sind darin nicht vollkommen. Aber in der christlichen Ehe hat der Mann kein Züchtigungsrecht – er ist gerufen, seine Frau zu lieben wie seinen eigenen Leib (Eph 5,28).`,
                  detail: `Siehe Claim „Sure 4:34 erlaubt kein Schlagen der Frau".`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'gleich-vor-gott-33-35',
      objection: `Vor Gott sind Mann und Frau im Islam völlig gleich (33:35). Unterschiede gibt es nur in den Rollen – das ist Komplementarität, nicht Ungleichheit.`,
      objectionBy: 'Asma Barlas',
      answer: `33:35 ist ein schöner Vers, den ich anerkenne. Aber die „Rollen" umfassen das Züchtigungsrecht des Mannes (4:34), Mehrehe und Sklavinnen nur für Männer (4:3; 23:5–6) und die Regel, dass Muslime Christinnen und Jüdinnen heiraten dürfen (5:5), Musliminnen aber keine Nichtmuslime. Das ist mehr als ein Unterschied der Aufgaben.`,
      sources: [
        { kind: 'koran', work: 'Sure 33 (al-Ahzab)', ref: '33:35', quote: `Die muslimischen Männer und Frauen, die gläubigen Männer und Frauen … für sie hat Allah Vergebung und großartigen Lohn bereitet.`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/33/35' },
      ],
      followUps: [
        {
          id: 'barlas-wadud-auslegung',
          objection: `Asma Barlas und Amina Wadud haben gezeigt: Der Koran ist nicht patriarchal – nur die männlichen Ausleger waren es.`,
          objectionBy: 'Asma Barlas',
          answer: `Ich respektiere ihre Arbeit sehr. Aber Amina Wadud selbst schreibt in *Inside the Gender Jihad* (2006), dass sie die wörtliche Anwendung von 4:34 letztlich ablehnt – sie sagt also „Nein" zum Wortlaut, nicht nur zu den Auslegern. Das zeigt ehrlich, wo das Problem liegt.`,
          sources: [
            { kind: 'gegner', author: 'Amina Wadud', work: 'Inside the Gender Jihad: Women\'s Reform in Islam', year: '2006', quote: `Wadud erklärt, dass sie die wörtliche Umsetzung von 4:34 nicht mehr akzeptieren kann, und spricht davon, „Nein" zum Text zu sagen.`, status: 'paraphrase', note: 'Sinngemäß; genauen Wortlaut und Seite vor Verwendung prüfen.' },
          ],
          followUps: [
            {
              id: 'wadud-nicht-islam',
              objection: `Wadud ist eine Einzelstimme. Sie repräsentiert nicht den Islam.`,
              objectionBy: 'traditionalistische Gelehrte',
              answer: `Genau: Dann ist entweder die traditionelle Auslegung der Islam – mit Züchtigungsrecht und halbem Zeugnis –, oder die reformerische, die sich gegen den Wortlaut stellen muss. In beiden Fällen kann man „Der Islam hat die Frau befreit" nicht als uneingeschränkte Aussage über die Texte stehen lassen.`,
              followUps: [
                {
                  id: 'eva-pforte-des-teufels',
                  objection: `Und die Christen? Tertullian nannte die Frau „die Pforte des Teufels". Eure Väter sahen in Eva die Verführerin.`,
                  objectionBy: 'Mohammed Hijab',
                  answer: `Das stimmt – Tertullian schrieb das (*De cultu feminarum* I,1), und es ist hart. Er ist für Kopten keine Lehrautorität. Die Antwort der Kirche ist Maria, die neue Eva: Irenäus lehrt, was Eva durch Unglauben gebunden hat, hat Maria durch Glauben gelöst (*Adversus Haereses* III,22,4). Durch eine Frau kam der Retter in die Welt – Gott hat die Frau zum Gefäß seiner Menschwerdung gemacht.`,
                  sources: [
                    { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Adversus Haereses', ref: 'III,22,4', year: 'um 180', quote: `Der Knoten des Ungehorsams Evas wurde durch den Gehorsam Marias gelöst; was die Jungfrau Eva durch Unglauben gebunden hatte, löste die Jungfrau Maria durch Glauben.`, status: 'paraphrase' },
                    { kind: 'kirchenvater', author: 'Tertullian', work: 'Über den Putz der Frauen (De cultu feminarum)', ref: 'I,1', year: 'um 200', quote: `Du bist die Pforte des Teufels.`, original: `tu es diaboli ianua`, translation: 'eigene Übersetzung', status: 'verbatim', note: 'Harte asketische Rhetorik; Tertullian ist für Kopten keine Lehrautorität.' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wenn Mann und Frau vor Gott gleich sind – warum gilt das Zeugnis einer Frau nach 2:282 nur halb, und wie begründet es Bukhari 2658?`,
    `Darf eine Muslimin nach islamischem Recht einen Christen heiraten? Darf ein Muslim eine Christin heiraten? Warum der Unterschied?`,
    `Hat eine Frau dasselbe Recht wie ihr Mann, eine zweite Ehe einzugehen?`,
    `Wer waren die ersten Zeugen der Auferstehung Jesu – und was bedeutete das in einer Kultur, in der das Zeugnis von Frauen wenig galt?`,
  ],
  avoid: [
    `Nicht behaupten, der Islam habe Frauen gar keine Rechte gegeben. Die Verbesserungen gegenüber manchen vorislamischen Praktiken sind real.`,
    `Nicht muslimische Frauen als unterdrückte Opfer ohne eigenen Willen darstellen. Viele leben ihren Glauben überzeugt und selbstbewusst.`,
    `Nicht so tun, als hätten christliche Gesellschaften Frauen immer gerecht behandelt. Gestehe die Geschichte ein – und zeige, dass das Evangelium der Maßstab der Reform war.`,
  ],
  concessions: [
    `Der Koran verbot die Tötung neugeborener Mädchen, gab Frauen einen Erbanteil und machte die Brautgabe zu ihrem Eigentum.`,
    `Christliche Gesellschaften haben Frauen jahrhundertelang rechtlich benachteiligt; manche Kirchenväter äußerten sich hart über Frauen.`,
    `Aischa und andere Frauen der frühen islamischen Geschichte waren bedeutende Gelehrte und Persönlichkeiten.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Kecia Ali', work: 'Sexual Ethics and Islam', year: '2006', status: 'paraphrase', note: 'Ehrliche Darstellung einer muslimischen Feministin.' },
    { kind: 'gegner', author: 'Jamal Badawi', work: 'Gender Equity in Islam: Basic Principles', year: '1995', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Rodney Stark', work: 'The Rise of Christianity', year: '1996', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Kyle Harper', work: 'From Shame to Sin', year: '2013', status: 'paraphrase' },
  ],
  difficulty: 1,
  tags: ['Islam', 'Frauen', 'Erbrecht', 'Zeugnis', 'Gleichheit', 'Ehe'],
  related: [
    'islam-frauen-familie/vers-4-34',
    'islam-frauen-familie/polygamie-gerecht',
    'islam-frauen-familie/aischa-alter',
    'at-ethik/bibel-frauenfeindlich',
    'christentum-gesellschaft/keine-priesterinnen',
    'islam-gewalt-scharia/scharia-gerecht',
  ],
};

export default claim;
