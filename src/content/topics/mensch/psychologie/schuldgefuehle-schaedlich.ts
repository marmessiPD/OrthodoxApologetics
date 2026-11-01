import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'schuldgefuehle-schaedlich',
  title: `„Religion erzeugt krankhafte Schuldgefühle."`,
  proponents: [
    { name: 'Friedrich Nietzsche', role: 'Philosoph (1844–1900)', work: 'Zur Genealogie der Moral (1887), 2. und 3. Abhandlung' },
    { name: 'Sigmund Freud', role: 'Begründer der Psychoanalyse', work: 'Das Unbehagen in der Kultur (1930)' },
    { name: 'Christopher Hitchens', role: 'Publizist (1949–2011)', work: 'God Is Not Great (2007)' },
    { name: 'Darrel Ray', role: 'Psychologe', work: 'The God Virus (2009); Sex & God (2012)' },
    { name: 'Marlene Winell', role: 'Psychologin', work: 'Leaving the Fold (1993)' },
  ],
  steelman: `Das Christentum folgt einem perfiden Geschäftsmodell: Erst redet es Menschen ein, sie seien von Geburt an Sünder, verdorben und der Hölle würdig – dann verkauft es das einzige Heilmittel. Nietzsche beschrieb den Priester als Arzt, der verwundet, um heilen zu dürfen, und der das Ressentiment nach innen lenkt: als „schlechtes Gewissen". Generationen von Kindern lernten, sich für ihren Körper, ihre Sexualität und ihre Gedanken zu schämen. Skrupulosität – die religiöse Zwangsstörung – zeigt, wie tief diese Schuld sich einfressen kann. Darrel Rays Umfragen unter Ex-Gläubigen ergaben: Religiöse Menschen haben nicht weniger Sex, nur mehr Schuldgefühle. Und die Beichte beim Priester? Ein Placebo-Ritual, das den Opfern nichts zurückgibt. Ohne Gott verschwindet die künstliche Schuld; was bleibt, ist ein gesundes Verantwortungsgefühl gegenüber anderen Menschen.`,
  biblical: {
    summary: `Die Bibel erfindet Schuld nicht, sie benennt sie – und sie zielt auf Befreiung, nicht auf Dauerscham. David beschreibt, wie verdrängte Schuld ihn körperlich zerfraß, bis er sie bekannte und Vergebung empfing (Ps 32,3–5). Paulus unterscheidet ausdrücklich zwischen einer „göttlichen Traurigkeit", die zur Umkehr und zum Heil führt, und einer „Traurigkeit der Welt", die den Tod wirkt (2 Kor 7,10). Für die, die in Christus sind, gilt: „So ist nun nichts Verdammliches" (Röm 8,1). Jesus sagt der Ehebrecherin: „So verdamme ich dich auch nicht; gehe hin und sündige hinfort nicht mehr" (Joh 8,11) – keine Beschämung, aber auch keine Verharmlosung.`,
    detail: `- **Schuld vs. Scham:** Die Bibel spricht von Taten, die bekannt und vergeben werden (1 Joh 1,9), und von einer Würde, die bleibt: Der Mensch ist Ebenbild Gottes (Gen 1,27). Der verlorene Sohn wird nicht als Knecht, sondern als Sohn wieder aufgenommen (Lk 15,22–24).
- **Wenn das Herz verdammt:** „Wenn uns unser Herz verdammt, so ist Gott größer als unser Herz" (1 Joh 3,20) – ein Schutz gegen krankhafte, überzogene Selbstanklage.
- **Wiedergutmachung:** Zachäus gibt zurück, was er erpresst hat (Lk 19,8); Jesus fordert, sich vor dem Opfer mit dem Bruder zu versöhnen (Mt 5,23–24). Vergebung durch Gott ersetzt nicht die Verantwortung gegenüber Menschen.`,
    sources: [
      { kind: 'bibel', work: 'Psalm', ref: '32,3–5', quote: `Denn da ich's wollte verschweigen, verschmachteten meine Gebeine durch mein täglich Heulen. … Darum bekannte ich dir meine Sünde und verhehlte meine Missetat nicht. Ich sprach: Ich will dem HERRN meine Übertretungen bekennen. Da vergabst du mir die Missetat meiner Sünde.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '2. Korinther', ref: '7,10', quote: `Denn die göttliche Traurigkeit wirkt zur Seligkeit eine Reue, die niemand gereut; die Traurigkeit aber der Welt wirkt den Tod.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Römer', ref: '8,1', quote: `So ist nun nichts Verdammliches an denen, die in Christo Jesu sind.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '8,11', quote: `Jesus aber sprach: So verdamme ich dich auch nicht; gehe hin und sündige hinfort nicht mehr!`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Johannes', ref: '3,20', quote: `daß, so uns unser Herz verdammt, Gott größer ist denn unser Herz und erkennt alle Dinge.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Psalm', ref: '51,12', quote: `Schaffe in mir, Gott, ein reines Herz und gib mir einen neuen, gewissen Geist.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche versteht Sünde vor allem als **Krankheit und Entfremdung**, die geheilt werden muss, nicht nur als juristische Schuld. Der Mensch bleibt auch nach dem Fall Ebenbild Gottes – die orthodoxe Lehre kennt keine „völlige Verdorbenheit" im calvinistischen Sinn. Das Sakrament der Buße und Beichte ist ein Ort der Heilung: freiwillig, unter Beichtgeheimnis, mit einem geistlichen Vater, der begleitet. Die Väter warnten ausdrücklich vor Verzweiflung und übertriebener Selbstanklage als einer eigenen Versuchung.`,
    detail: `- **Papst Schenuda III.** beschreibt in „Das Leben der Buße und Reinheit" die Umkehr als Rückkehr zu Gott, die mit Freude und Hoffnung verbunden ist; Verzweiflung an der eigenen Sünde sei eine Versuchung, keine Tugend.
- **Johannes Cassian** unterscheidet mit den ägyptischen Vätern die heilsame Traurigkeit, die zur Umkehr führt, von der Traurigkeit, die in Verzweiflung stürzt (Institutiones IX).
- In der Liturgie bittet die Kirche um Vergebung und empfängt sie: Die Absolution am Ende der Beichte und die Lossprechungsgebete der Liturgie sprechen dem Menschen Gottes Vergebung zu.`,
    sources: [
      { kind: 'koptisch', author: 'Papst Schenuda III.', work: 'Das Leben der Buße und Reinheit (The Life of Repentance and Purity)', status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Johannes Cassian', work: 'Von den Einrichtungen der Klöster (Institutiones)', ref: 'IX', status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Die Psychologie unterscheidet klar zwischen **Schuld** („Ich habe etwas Falsches getan") und **Scham** („Ich bin schlecht"). Nach jahrzehntelanger Forschung von June Tangney und anderen ist Schuldneigung überwiegend **anpassungsfähig**: Sie geht mit Empathie, Wiedergutmachung und weniger Aggression einher und sagt sogar weniger Rückfälle bei Straftätern voraus. Schamneigung dagegen ist mit Depression, Wut und Rückzug verbunden. Forschung zu Vergebung zeigt, dass Vergebungsinterventionen Depression und Angst verringern. Zugleich ist unbestritten, dass Skrupulosität (religiös gefärbte Zwangsstörung) und beschämende religiöse Erziehung real vorkommen.`,
    detail: `- Tangney & Dearing (2002): Grundlagenwerk zur Unterscheidung von Schuld und Scham.
- Tangney, Stuewig & Martinez (2014): Schuldneigung bei Inhaftierten sagte weniger Rückfälle voraus, Schamneigung nicht (indirekt sogar mehr).
- Wade, Hoyt, Kidwell & Worthington (2014), Metaanalyse: Psychotherapeutische Vergebungsinterventionen fördern Vergebung und verringern Depression und Angst.
- Pennebaker (1997): Das Offenlegen belastender Erfahrungen (schriftlich oder im Gespräch) verbessert messbar Gesundheit und Wohlbefinden.
- Skrupulosität ist als Form der Zwangsstörung beschrieben (u. a. Penn Inventory of Scrupulosity, Abramowitz u. a. 2002) und gut behandelbar.
- Darrel Rays Erhebungen beruhen auf Online-Umfragen unter vorwiegend ehemals religiösen Menschen – keine repräsentative Stichprobe.`,
    sources: [
      { kind: 'wissenschaft', author: 'June Price Tangney, Ronda L. Dearing', work: 'Shame and Guilt', year: '2002', status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'J. P. Tangney, J. Stuewig, A. G. Martinez', work: 'Two faces of shame: The roles of shame and guilt in predicting recidivism', ref: 'Psychological Science 25 (2014), 799–805', year: '2014', status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'N. G. Wade, W. T. Hoyt, J. E. M. Kidwell, E. L. Worthington Jr.', work: 'Efficacy of psychotherapeutic interventions to promote forgiveness: A meta-analysis', ref: 'Journal of Consulting and Clinical Psychology 82 (2014), 154–170', year: '2014', status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'James W. Pennebaker', work: 'Writing about emotional experiences as a therapeutic process', ref: 'Psychological Science 8 (1997), 162–166', year: '1997', status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'J. S. Abramowitz, J. D. Huppert, A. B. Cohen, D. F. Tolin, S. P. Cahill', work: 'Religious obsessions and compulsions in a non-clinical sample: The Penn Inventory of Scrupulosity (PIOS)', ref: 'Behaviour Research and Therapy 40 (2002), 825–838', year: '2002', status: 'paraphrase', url: 'https://doi.org/10.1016/S0005-7967(01)00070-5', note: 'Autoren und Titel korrigiert (Prüfung Nov. 2026). 19-Item-Fragebogen; sehr fromme Teilnehmer erzielten höhere Werte; fromme Juden berichteten weniger Furcht vor Sünde und Strafe als fromme Protestanten und Katholiken.' },
    ],
  },
  quickAnswer: `Die Psychologie unterscheidet **Schuld** („Ich habe etwas Schlechtes getan") von **Scham** („Ich bin schlecht"). Schuldgefühle sind gesund, wenn sie zu Einsicht, Wiedergutmachung und Vergebung führen – die Forschung von June Tangney zeigt: Schuldbewusste Menschen sind empathischer und werden seltener rückfällig; toxische Scham dagegen macht krank. Das Christentum erzeugt keine Schuld, es benennt sie und bietet an, was kein Therapeut geben kann: echte Vergebung (Ps 32; 1 Joh 1,9). Wo Kirchen Menschen mit Scham kleinhalten, verfehlen sie das Evangelium.`,
  keyPoints: [
    `**Schuld ist nicht Scham:** Schuld bezieht sich auf Taten und motiviert zur Wiedergutmachung; Scham verurteilt die ganze Person und lähmt. Die Forschung zeigt: Schuldneigung ist überwiegend gesund.`,
    `**Das Evangelium zielt auf Befreiung:** Bekenntnis führt zu Vergebung (Ps 32; 1 Joh 1,9); „nichts Verdammliches" in Christus (Röm 8,1).`,
    `**Orthodoxes Menschenbild:** Der Mensch bleibt Ebenbild Gottes; Sünde ist Krankheit, die geheilt wird – keine „völlige Verdorbenheit".`,
    `**Schuld ist universell, nicht religiös erfunden:** Auch säkulare Menschen und Gesellschaften kennen Schuld – aber oft ohne einen Weg zur Vergebung.`,
    `**Vergebung ist messbar heilsam:** Vergebungsinterventionen verringern Depression und Angst (Wade u. a. 2014).`,
    `**Ehrliches Zugeständnis:** Skrupulosität und beschämende Erziehung gibt es – sie widersprechen dem Evangelium und brauchen Hilfe, auch therapeutische.`,
  ],
  voices: [
    {
      person: 'everett-worthington',
      role: 'als führender Vergebungsforscher',
      text: `Everett Worthington hat über Jahrzehnte erforscht, wie Vergebung wirkt, und mit dem REACH-Modell eines der am besten untersuchten Programme zur Förderung von Vergebung entwickelt. Seine Metaanalysen zeigen, dass Vergebungsinterventionen nicht nur die Bereitschaft zur Vergebung stärken, sondern auch Depression und Angst verringern. Worthington unterscheidet dabei zwischen echter Selbstvergebung – die Verantwortung übernimmt und Wiedergutmachung sucht – und billiger Selbstentschuldigung. Persönlich wurde seine Forschung auf eine harte Probe gestellt, als seine Mutter ermordet wurde; er beschrieb später seinen Weg, dem Täter zu vergeben. Für ihn als Christen ist die Vergebung, die Gott schenkt, die tiefste Quelle der Fähigkeit, selbst zu vergeben.`,
      sources: [
        { kind: 'fachliteratur', author: 'Everett L. Worthington Jr.', work: 'Forgiving and Reconciling: Bridges to Wholeness and Hope', year: '2003', status: 'paraphrase' },
        { kind: 'wissenschaft', author: 'N. G. Wade, W. T. Hoyt, J. E. M. Kidwell, E. L. Worthington Jr.', work: 'Efficacy of psychotherapeutic interventions to promote forgiveness: A meta-analysis', ref: 'Journal of Consulting and Clinical Psychology 82 (2014), 154–170', year: '2014', status: 'paraphrase' },
      ],
    },
    {
      person: 'shenouda-iii',
      role: 'als Lehrer der Buße',
      text: `Papst Schenuda III. sprach in seinen Vorträgen immer wieder davon, dass Buße kein Zustand der Niedergeschlagenheit ist, sondern eine Rückkehr nach Hause. Er betonte, dass Gott keinen Sünder verwirft, der zu ihm kommt, und dass die Verzweiflung an der eigenen Schuld selbst ein Werk des Feindes sei. Seine Seelsorge verband Ernst gegenüber der Sünde mit großer Zärtlichkeit gegenüber dem Sünder – genau die Haltung, die zwischen gesunder Schuld und krankmachender Scham unterscheidet.`,
      sources: [
        { kind: 'koptisch', author: 'Papst Schenuda III.', work: 'Das Leben der Buße und Reinheit (The Life of Repentance and Purity)', status: 'paraphrase' },
      ],
    },
    {
      person: 'dostojewski',
      role: 'als Schriftsteller, der Schuld und Erlösung durchdacht hat',
      text: `Dostojewskis „Schuld und Sühne" (Verbrechen und Strafe) ist eine literarische Studie darüber, was unbekannte Schuld mit einem Menschen macht. Raskolnikow will sich mit einer Theorie über den „außergewöhnlichen Menschen" über die Moral stellen – und zerbricht innerlich an seiner Tat. Erst das Bekenntnis und die Liebe Sonjas, die ihm das Evangelium von der Auferweckung des Lazarus vorliest, öffnen den Weg zu einem neuen Leben. Dostojewski zeigt: Nicht das Benennen der Schuld macht krank, sondern ihr Verdrängen; Heilung kommt durch Bekenntnis, Sühne und Gnade.`,
      sources: [
        { kind: 'fachliteratur', author: 'Fjodor M. Dostojewski', work: 'Schuld und Sühne (Verbrechen und Strafe)', year: '1866', status: 'paraphrase' },
      ],
    },
    {
      person: 'johannes-cassian',
      role: 'als Vermittler der Wüstenväter',
      text: `Johannes Cassian überliefert die Lehre der ägyptischen Väter über die zwei Arten der Traurigkeit: Die eine entsteht aus der Erkenntnis der Sünde, ist sanft, geduldig und voller Hoffnung und führt zur Umkehr; die andere ist bitter, ungeduldig und lähmend und führt zur Verzweiflung. Die erste soll man annehmen, die zweite bekämpfen. Damit beschreibt die Tradition schon im 5. Jahrhundert ziemlich genau den Unterschied, den die heutige Psychologie zwischen gesunder Schuld und toxischer Scham macht.`,
      sources: [
        { kind: 'kirchenvater', author: 'Johannes Cassian', work: 'Von den Einrichtungen der Klöster (Institutiones)', ref: 'IX', status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'erbsuende-geschaeftsmodell',
      objection: `Erst redet ihr Kindern ein, sie seien von Geburt an Sünder – dann verkauft ihr ihnen das Heilmittel. Das ist ein Schutzgeldgeschäft.`,
      objectionBy: 'Christopher Hitchens',
      answer: `Die orthodoxe Kirche lehrt nicht, dass Kinder wertlos oder verdorben sind. Sie lehrt, dass alle Menschen die Folgen des Falls erben – Sterblichkeit und eine Neigung zum Bösen –, aber Ebenbild Gottes bleiben. Und eine Diagnose ist kein Geschäftsmodell: Jeder Arzt muss die Krankheit benennen, bevor er heilt. Vor allem hat die Kirche die Schuld nicht erfunden – jeder Mensch kennt sie aus eigener Erfahrung, und Paulus sagt, dass das Gewissen auch bei Menschen ohne Bibel wirkt (Röm 2,15).`,
      detail: `Zur orthodoxen Lehre von der Erbsünde (Folgen statt ererbter persönlicher Schuld im augustinischen Sinn) siehe A2, ‚islam-kreuzigung/keine-erbsuende-fitra', und A7, ‚calvinismus/voellige-verdorbenheit'.`,
      questionsBack: [`Hast du jemals etwas getan, wofür du dich zu Recht schuldig gefühlt hast – ohne dass eine Kirche dir das eingeredet hat?`],
      followUps: [
        {
          id: 'nietzsche-priester',
          objection: `Nietzsche hat es durchschaut: Der Priester ist ein Arzt, der verwundet, um heilen zu dürfen. Er lenkt das Ressentiment nach innen und erzeugt das „schlechte Gewissen".`,
          objectionBy: 'Friedrich Nietzsche (sinngemäß)',
          answer: `Nietzsches These ist eine brillante Spekulation, aber empirisch steht sie schlecht da: Schuldgefühle entwickeln Kinder schon im Kleinkindalter, in allen Kulturen, religiös oder nicht. Die Psychologie zeigt, dass Schuld uns empathischer macht und zur Wiedergutmachung motiviert. Die eigentliche Frage ist nicht, ob es Schuld gibt, sondern ob sie einer Wirklichkeit entspricht – ob es wirklich ein Gut gibt, das wir verletzen. Wenn ja, ist Schuld kein Konstrukt, sondern Wahrnehmung.`,
          detail: `Zur Begründung objektiver Moral siehe A10, ‚moral-und-gott/gut-ohne-gott'.`,
          followUps: [
            {
              id: 'gott-streichen',
              objection: `Streich einfach Gott, und das Problem verschwindet. Ohne Gott keine Sünde, ohne Sünde keine Schuldgefühle.`,
              objectionBy: 'Christopher Hitchens',
              answer: `Die Schuld gegenüber Menschen verschwindet nicht – wer einen Freund verraten hat, fühlt sich auch als Atheist schuldig, und zu Recht. Was verschwindet, ist die Möglichkeit einer endgültigen Vergebung. Säkulare Gesellschaften kennen öffentliche Anklage und Ächtung, aber kaum Rituale der Vergebung und des Neuanfangs. Das Christentum bietet beides: Ernst gegenüber der Schuld und eine Gnade, die größer ist als sie.`,
            },
          ],
        },
      ],
    },
    {
      id: 'sexualschuld',
      objection: `Die Kirche hat Generationen sexuelle Schuldgefühle eingeimpft – Lust ist Sünde, der Körper ist schmutzig. Das hat unzählige Menschen beschädigt.`,
      objectionBy: 'Darrel Ray',
      answer: `Es gab in der Kirchengeschichte und gibt in manchen Gemeinden eine körperfeindliche, beschämende Sexualerziehung – das gebe ich zu, und sie hat Menschen verletzt. Aber sie entspricht nicht der Bibel: Gott schuf den Menschen leiblich und nannte alles „sehr gut" (Gen 1,31); das Hohelied feiert die Liebe zwischen Mann und Frau; der Leib ist ein „Tempel des Heiligen Geistes" (1 Kor 6,19). Die koptische Kirche krönt Brautpaare in der Trauung – Ehe ist ein Sakrament. Ethik ist nicht dasselbe wie Scham.`,
      detail: `Zur christlichen Sexualethik insgesamt: A10, ‚sexualethik/sexualmoral-veraltet'.`,
      followUps: [
        {
          id: 'ray-umfrage',
          objection: `Meine Umfragen zeigen: Religiöse Menschen haben nicht weniger Sex, sie fühlen sich nur schuldiger dabei.`,
          objectionBy: 'Darrel Ray',
          answer: `Deine Erhebungen beruhen auf Online-Umfragen, an denen vor allem Menschen teilnahmen, die ihre Religion verlassen haben oder ihr kritisch gegenüberstehen. Das ist keine repräsentative Stichprobe, und daraus lässt sich nicht auf alle Gläubigen schließen. Die Erfahrungen der Befragten sind trotzdem ernst zu nehmen – als Anfrage an Gemeinden, wie sie über Sexualität sprechen.`,
          followUps: [
            {
              id: 'betroffene-leiden',
              objection: `Die Betroffenen leiden wirklich. Das kannst du nicht wegdiskutieren.`,
              objectionBy: 'Marlene Winell',
              answer: `Das will ich auch nicht. Wer unter Scham leidet, braucht zuerst Zuhören und oft auch therapeutische Hilfe. Seelsorglich hilft die Unterscheidung: Schuld für konkrete Taten kann bekannt und vergeben werden; diffuse Scham über die eigene Existenz und den eigenen Körper ist kein Werk Gottes, sondern eine Wunde, die Heilung braucht. Jesus hat Beschämte nie beschämt – denk an die Frau am Brunnen (Joh 4) oder die Ehebrecherin (Joh 8).`,
            },
          ],
        },
      ],
    },
    {
      id: 'skrupulositaet',
      objection: `Skrupulosität – die religiöse Zwangsstörung – beweist es: Religion liefert den Stoff für krankhafte Schuld.`,
      objectionBy: 'Robert Sapolsky',
      answer: `Skrupulosität ist real, das gebe ich zu, und sie ist ein schweres Leiden. Aber sie ist eine Form der Zwangsstörung, die sich auch an Keimen, Ordnung oder Sicherheit festmachen kann – der Inhalt ist nicht die Ursache. Die Wüstenväter kannten skrupulöse Mönche und rieten ihnen, ihren ängstlichen Gedanken *nicht* zu folgen, sondern einem erfahrenen geistlichen Vater zu gehorchen. Heute ist die Störung mit Expositionstherapie gut behandelbar, am besten in Zusammenarbeit von Therapeut und Seelsorger.`,
      followUps: [
        {
          id: 'ohne-religion-weniger-leid',
          objection: `Ohne religiöse Inhalte hätten diese Menschen trotzdem weniger Leid.`,
          objectionBy: 'Robert Sapolsky',
          answer: `Das ist unwahrscheinlich: Zwangsstörungen suchen sich Inhalte, die einem Menschen wichtig sind; ohne Religion wären es andere. Für viele Betroffene ist ihr Glaube zugleich eine Ressource – die Gewissheit, dass Gott größer ist als ihr verurteilendes Herz (1 Joh 3,20), kann in der Therapie helfen.`,
        },
      ],
    },
    {
      id: 'beichte-placebo',
      objection: `Die Beichte beim Priester ist ein Placebo. Bei echtem Schaden muss man sich beim Opfer entschuldigen, nicht bei einem Mann im Talar.`,
      objectionBy: 'Sam Harris',
      answer: `Einverstanden, dass Wiedergutmachung gegenüber dem Opfer nötig ist – das lehrt auch die Bibel: Zachäus gibt zurück (Lk 19,8), und Jesus sagt, erst versöhne dich mit deinem Bruder (Mt 5,23–24). Die Beichte ersetzt das nicht, sie schließt es ein. Psychologisch ist das Aussprechen von Schuld nachweislich heilsam (Pennebaker). Und theologisch geht es um mehr: Jede Schuld verletzt auch Gott (Ps 51,6), und nur er kann sie ganz vergeben.`,
      followUps: [
        {
          id: 'selbstvergebung-reicht',
          objection: `Ich kann mir selbst vergeben. Dafür brauche ich keinen Gott.`,
          objectionBy: 'Sam Harris',
          answer: `Die Forschung unterscheidet echte Selbstvergebung, die Verantwortung übernimmt und Wiedergutmachung sucht, von einer bloßen Selbstentlastung, bei der man die Schuld kleinredet. Die erste ist gesund, die zweite nicht. Aber selbst echte Selbstvergebung hat eine Grenze: Ich kann mich nicht im Namen dessen freisprechen, den ich verletzt habe. Das Christentum bietet eine Vergebung, die vom Verletzten selbst kommt – von Gott, dessen Ordnung jede Sünde verletzt.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Gibt es Schuldgefühle, die du für berechtigt hältst? Woher kommt dann der Maßstab?`,
    `Kennst du die Unterscheidung zwischen Schuld und Scham – und welches von beiden predigt das Evangelium?`,
    `Wo bietet eine säkulare Gesellschaft echte Vergebung und einen Neuanfang an?`,
    `Ist eine Gemeinschaft, die Schuld benennt und Vergebung schenkt, schädlicher als eine, die Schuld leugnet und Menschen öffentlich ächtet?`,
  ],
  avoid: [
    `Leugnen, dass es religiös verursachte Scham und Skrupulosität gibt.`,
    `Mit Schuldgefühlen argumentieren, um jemanden zum Glauben zu drängen – das bestätigt den Vorwurf.`,
    `Die calvinistische Lehre der „völligen Verdorbenheit" als christliche Lehre schlechthin darstellen – die orthodoxe Anthropologie ist anders.`,
  ],
  concessions: [
    `In Teilen der Kirchengeschichte und in manchen Gemeinden wurden Menschen, besonders Kinder, mit Scham und Angst erzogen – auch in Bezug auf Sexualität.`,
    `Skrupulosität ist eine reale, leidvolle Störung, die oft religiöse Inhalte annimmt und therapeutische Hilfe braucht.`,
  ],
  furtherReading: [
    { kind: 'wissenschaft', author: 'June Price Tangney, Ronda L. Dearing', work: 'Shame and Guilt', year: '2002', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Everett L. Worthington Jr.', work: 'Forgiving and Reconciling', year: '2003', status: 'paraphrase' },
    { kind: 'koptisch', author: 'Papst Schenuda III.', work: 'Das Leben der Buße und Reinheit', status: 'paraphrase' },
  ],
  difficulty: 1,
  tags: ['Schuld', 'Scham', 'Vergebung', 'Beichte', 'Skrupulosität', 'Nietzsche'],
  related: [
    'psychologie/religion-schadet-psyche',
    'sakramente/beichte-unbiblisch',
    'calvinismus/voellige-verdorbenheit',
    'islam-kreuzigung/keine-erbsuende-fitra',
    'sexualethik/sexualmoral-veraltet',
    'moral-und-gott/gut-ohne-gott',
  ],
};

export default claim;
