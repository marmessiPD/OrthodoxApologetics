import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'vergebung-ungerecht',
  title: `„Wenn ein Mörder bereut und in den Himmel kommt, ist das ungerecht gegenüber den Opfern."`,
  proponents: [
    { name: 'Christopher Hitchens', role: 'Publizist und Religionskritiker', work: 'God Is Not Great (2007); Debatten gegen „stellvertretende Erlösung"' },
    { name: 'Dennis Prager', role: 'Jüdischer Publizist', work: 'Beitrag im Symposium zu Simon Wiesenthals „The Sunflower" (erw. Ausgabe 1997)' },
    { name: 'Jean Améry', role: 'Schriftsteller, Überlebender von Auschwitz', work: 'Jenseits von Schuld und Sühne (1966), Essay „Ressentiments"' },
    { name: 'Richard Dawkins', role: 'Evolutionsbiologe, Oxford', work: 'The God Delusion (2006), Kap. 7 (zur Sühnelehre)' },
    { name: 'Iwan Karamasow (literarische Figur)', role: 'Romanfigur bei F. M. Dostojewski', work: 'Die Brüder Karamasow (1880), Buch V, Kap. 4 „Die Empörung"' },
  ],
  steelman: `Stell dir vor, ein Mann foltert und ermordet ein Kind. Jahre später bekehrt er sich im Gefängnis, lässt sich taufen und stirbt im Frieden mit Gott – nach christlicher Lehre geht er ins Paradies. Die Eltern des Kindes wurden nie gefragt. Wer gibt Gott das Recht, im Namen der Opfer zu vergeben? Moralisch kann nur das Opfer selbst vergeben; auch das Judentum lehrt, dass der Versöhnungstag Vergehen gegen den Mitmenschen nicht sühnt, solange der Geschädigte nicht besänftigt ist. Simon Wiesenthal hat in „Die Sonnenblume" (1969) erzählt, wie ein sterbender SS-Mann ihn – einen beliebigen Juden – um Vergebung bat; Wiesenthal schwieg, und viele Denker gaben ihm recht: Er hatte kein Recht, für die Ermordeten zu sprechen. Die christliche Antwort, ein Unschuldiger habe stellvertretend „bezahlt", macht es nur schlimmer: Schulden kann man übernehmen, Schuld nicht (Hitchens). Jean Améry, der Auschwitz überlebte, nannte das Ressentiment die moralische Weigerung, das Verbrechen als „erledigt" zu betrachten. Und Dostojewskis Iwan Karamasow bringt es auf den Punkt: Die Mutter darf dem Peiniger ihres Kindes nicht vergeben – und wenn Harmonie nur um diesen Preis zu haben ist, „gebe ich die Eintrittskarte zurück". Eine Religion, die Mördern den Himmel öffnet, während deren Opfer womöglich verloren gehen, ist nicht barmherzig, sondern moralisch blind.`,
  biblical: {
    summary: `Die Bibel nimmt den Einwand ernster, als Kritiker meinen. Sie kennt keine Vergebung, die das Unrecht übergeht: Gott vergibt so, dass er dabei **gerecht bleibt** (Röm 3,25–26). Am Kreuz trägt Christus – der menschgewordene Gott selbst, nicht ein unbeteiligter Dritter – die Last der Schuld. Vergebung setzt **echte Umkehr** voraus (*metanoia*: Sinnesänderung, die Wiedergutmachung einschließt, Lk 19,8). Sie hebt die **irdischen Folgen** nicht automatisch auf (2 Sam 12,13–14; der Schächer bleibt am Kreuz, Lk 23,41). Die persönliche Rache wird Gott, dem gerechten Richter, überlassen (Röm 12,19), die öffentliche Strafe bleibt Aufgabe der Obrigkeit (Röm 13,4). Und die Opfer sind nicht vergessen: Ihr Schrei „Wie lange?" (Offb 6,10) wird gehört, und Gott selbst wird ihre Tränen abwischen (Offb 21,4).`,
    detail: `**Alle Sünde ist auch Sünde gegen Gott.** David hat Urija ermorden lassen und betet dennoch: „An dir allein habe ich gesündigt" (Ps 51,6). Das leugnet nicht das Unrecht an Urija, sondern sagt: Jedes Verbrechen verletzt zuerst den Schöpfer, dem das Leben des Opfers gehört. Darum *kann* Gott vergeben, was Menschen allein nicht vergeben können.

**Gerecht und gerecht machend.** Röm 3,25–26 ist die Antwort auf die Frage, wie Gott Sünder annehmen kann, ohne ungerecht zu werden: Christus wurde „zum Gnadenstuhl" (*hilastērion*, der Deckel der Bundeslade, an dem am Versöhnungstag gesühnt wurde) gemacht, „auf daß er allein gerecht sei und gerecht mache den, der da ist des Glaubens an Jesum".

**Christus identifiziert sich mit den Opfern.** „Was ihr getan habt einem unter diesen meinen geringsten Brüdern, das habt ihr mir getan" (Mt 25,40). Der Gekreuzigte ist nicht nur Stellvertreter der Täter, sondern selbst das unschuldige Opfer schlechthin. Wenn er vergibt („Vater, vergib ihnen", Lk 23,34), vergibt das größte aller Opfer.

**Stephanus und Saulus.** Stephanus betete für seine Mörder (Apg 7,60) – und Saulus „hatte Wohlgefallen an seinem Tode" (Apg 8,1). Später wurde Saulus zum Apostel Paulus. Das Neue Testament hat genau den Fall, den der Einwand für absurd hält: Opfer und Mittäter werden in Christus Brüder.`,
    sources: [
      { kind: 'bibel', work: 'Römer', ref: '3,25–26', quote: `…auf daß er zu diesen Zeiten darböte die Gerechtigkeit, die vor ihm gilt; auf daß er allein gerecht sei und gerecht mache den, der da ist des Glaubens an Jesum.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Römer', ref: '12,19', quote: `Rächet euch selber nicht, meine Liebsten, sondern gebet Raum dem Zorn Gottes; denn es steht geschrieben: „Die Rache ist mein; ich will vergelten, spricht der Herr."`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Psalmen', ref: '51,6', quote: `An dir allein habe ich gesündigt und übel vor dir getan.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Lukas', ref: '23,41–43', quote: `Und zwar wir sind billig darin, denn wir empfangen, was unsre Taten wert sind; dieser aber hat nichts Ungeschicktes gehandelt. … Wahrlich ich sage dir: Heute wirst du mit mir im Paradiese sein.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Offenbarung', ref: '6,10', quote: `Herr, du Heiliger und Wahrhaftiger, wie lange richtest du und rächest nicht unser Blut an denen, die auf der Erde wohnen?`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Lukas', ref: '19,8', quote: `Siehe, Herr, die Hälfte meiner Güter gebe ich den Armen, und so ich jemand betrogen habe, das gebe ich vierfältig wieder.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Für die koptisch-orthodoxe Kirche ist Vergebung kein juristischer Freispruch, sondern **Heilung**: Der Sünder wird durch Buße (*metanoia*), Beichte und die Sakramente in die Gemeinschaft mit Gott zurückgeführt. Der hl. Athanasius betont, dass bloße Reue die durch die Sünde verdorbene Natur nicht heilt – deshalb wurde der Logos Mensch, nahm den Tod auf sich und erneuerte die Natur von innen (De Incarnatione 7–9). Gerechtigkeit wird also nicht übergangen, sondern in Christus erfüllt. Das Leben der Kirche kennt dabei ernste Bußwege: In der alten Kirche wurden Mörder oft jahrelang von der Kommunion ausgeschlossen (vgl. Basilius, Kanones). Zugleich hat die koptische Kirche in jüngster Zeit der Welt gezeigt, was Feindesvergebung heißt: Angehörige der 21 in Libyen 2015 ermordeten Märtyrer und die Witwe eines 2017 in Alexandria getöteten Kirchenwächters erklärten öffentlich, den Mördern zu vergeben – ohne das Verbrechen kleinzureden.`,
    sources: [
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'De Incarnatione', ref: '7–9', year: 'um 335', quote: `Wäre es nur um ein Vergehen gegangen und nicht um die nachfolgende Verderbnis, so hätte die Reue genügt; da aber der Mensch der Verderbnis verfallen war, musste der Logos selbst kommen, um die Natur zu erneuern und die Schuld des Todes zu tilgen.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Basilius von Caesarea', work: 'Kanonische Briefe (Briefe 188, 199, 217 an Amphilochius)', year: 'um 374–375', quote: `Für vorsätzlichen Mord werden lange Bußzeiten ohne Kommunion vorgesehen, gestuft nach Schwere der Tat.`, status: 'paraphrase', note: 'Die genaue Dauer variiert nach Kanon; sinngemäße Zusammenfassung.' },
      { kind: 'koptisch', work: 'Berichte über die Angehörigen der 21 Märtyrer von Libyen (u. a. Beschir Kamel im Sender SAT-7, Februar 2015)', year: '2015', quote: `Der Bruder zweier Ermordeter dankte den Tätern im Fernsehen dafür, dass sie das Glaubensbekenntnis der Männer im Video gelassen hatten, und betete für sie; seine Mutter sagte, sie würde den Mörder in ihr Haus einladen und für ihn beten.`, status: 'paraphrase', url: 'https://www.sat7uk.org/?p=1621', note: 'Mehrfach berichtet (SAT-7, World Watch Monitor u. a.); Wortlaut der Mutter nur sinngemäß.' },
      { kind: 'koptisch', work: 'Fernsehinterview der Witwe des Kirchenwächters Naseem Faheem (St.-Markus-Kathedrale Alexandria), ONTV, Moderator Amr Adeeb', year: 'April 2017', quote: `Die Witwe sagte über den Selbstmordattentäter vom Palmsonntag: Ich bin nicht zornig auf ihn; möge Gott dir vergeben – wir vergeben dir auch.`, status: 'paraphrase', url: 'https://www.christianpost.com/news/coptic-widow-on-palm-sunday-suicide-bomber-that-killed-husband-i-forgive-you.html', note: 'Der Moderator war sichtlich sprachlos. Der Vorname der Witwe wird in den Berichten unterschiedlich angegeben.' },
    ],
  },
  quickAnswer: `Du hast recht: Vergebung, die das Unrecht einfach übergeht, wäre ungerecht. Aber genau das lehrt das Christentum nicht. Jede Sünde richtet sich zuletzt gegen Gott, dem das Leben des Opfers gehört – und Gott vergibt nicht billig, sondern indem er selbst in Christus die Schuld trägt (Röm 3,26). Echte Reue heißt Umkehr und Wiedergutmachung, nicht ein Zauberwort; die irdische Strafe bleibt. Und die Opfer werden nicht übergangen: Im Gericht kommt alles ans Licht, und Gott selbst wischt ihre Tränen ab.`,
  keyPoints: [
    `**Vergebung ist nicht Gleichgültigkeit:** Gott vergibt so, dass er gerecht bleibt – die Schuld wird nicht ignoriert, sondern getragen (Röm 3,25–26).`,
    `**Gott ist in jedem Verbrechen mitverletzt:** Das Leben des Opfers gehört seinem Schöpfer (Ps 51,6). Darum kann er vergeben, was Menschen nicht stellvertretend vergeben können.`,
    `**Der Vergebende ist selbst das größte Opfer:** Der gekreuzigte Christus identifiziert sich mit allen Opfern (Mt 25,40) und betet für seine Mörder (Lk 23,34).`,
    `**Reue ist Umkehr, kein Ritual:** *Metanoia* schließt Wahrheit, Wiedergutmachung und ein neues Leben ein (Lk 19,8); Gott sieht das Herz.`,
    `**Vergebung ≠ Straffreiheit:** Persönliche Rache wird Gott überlassen (Röm 12,19), staatliche Strafe bleibt (Röm 13,4); David und der Schächer trugen die irdischen Folgen.`,
    `**Die Opfer kommen zu ihrem Recht:** Im Gericht wird nichts vertuscht (Offb 6,10); Gnade für den Täter bedeutet nicht Verlust für das Opfer.`,
  ],
  argument: {
    name: 'Gerechte Vergebung',
    summary: 'Warum göttliche Vergebung die Gerechtigkeit gegenüber den Opfern nicht verletzt.',
    premises: [
      {
        text: 'P1: Vergebung ist nur dann ungerecht, wenn sie das Unrecht leugnet, das Opfer übergeht oder dem Vergebenden gar nicht zusteht.',
        support: 'Das ist der Kern des Einwands (Prager, Améry, Iwan Karamasow): Ein Dritter vergibt über den Kopf des Opfers hinweg und erklärt das Verbrechen für „erledigt".',
      },
      {
        text: 'P2: Gott ist in jedem Unrecht selbst der zuerst Verletzte, denn das Opfer ist sein Geschöpf und Ebenbild.',
        support: 'Ps 51,6; Gen 9,6 (Mord ist Angriff auf Gottes Bild). Gott ist kein unbeteiligter Dritter, sondern Eigentümer des Lebens und Anwalt des Opfers.',
        sources: [{ kind: 'bibel', work: 'Genesis', ref: '9,6', quote: `Wer Menschenblut vergießt, des Blut soll auch durch Menschen vergossen werden; denn Gott hat den Menschen zu seinem Bilde gemacht.`, translation: 'Luther 1912', status: 'verbatim' }],
      },
      {
        text: 'P3: Gottes Vergebung leugnet das Unrecht nicht, sondern verurteilt es am Kreuz und trägt seine Last selbst.',
        support: 'Röm 3,25–26; Jes 53,5. Der Richter nimmt die Folgen auf sich; die Sünde wird beim Namen genannt, nicht verharmlost.',
      },
      {
        text: 'P4: Gottes Vergebung übergeht das Opfer nicht, denn im Gericht wird alles offenbar, und das Opfer wird von Gott selbst getröstet und erhöht.',
        support: 'Offb 6,9–11; 21,4; 1 Kor 4,5. Der Täter muss der Wahrheit seiner Tat begegnen; das Opfer verliert nichts dadurch, dass der Täter geheilt wird.',
      },
    ],
    conclusion: 'K: Also ist die Vergebung eines bereuenden Mörders durch Gott nicht ungerecht gegenüber den Opfern – sie ist die einzige Form von Vergebung, die Gerechtigkeit und Barmherzigkeit zugleich wahrt.',
  },
  voices: [
    {
      person: 'paulus',
      role: 'als ehemaliger Verfolger',
      text: `Paulus spricht über diese Frage nicht theoretisch. Er war an der Steinigung des Stephanus beteiligt (Apg 8,1; 22,20), verfolgte Christen „bis auf den Tod" (Apg 22,4) und nennt sich später den „vornehmsten" der Sünder (1 Tim 1,15). In Röm 3 entfaltet er, dass Gott die Sünder nicht durch Wegsehen rechtfertigt, sondern indem er seine Gerechtigkeit am Kreuz „darbietet". Zugleich verbietet er Christen die Selbstjustiz und überlässt die Vergeltung Gott (Röm 12,19) – nicht weil Unrecht egal wäre, sondern weil nur Gott vollkommen gerecht richtet.`,
      sources: [{ kind: 'bibel', work: '1. Timotheus', ref: '1,15', quote: `Denn das ist gewißlich wahr und ein teuer wertes Wort, daß Christus Jesus gekommen ist in die Welt, die Sünder selig zu machen, unter welchen ich der vornehmste bin.`, translation: 'Luther 1912', status: 'verbatim' }],
    },
    {
      person: 'athanasius',
      role: 'als Lehrer der Menschwerdung',
      text: `Athanasius stellt in *De Incarnatione* genau die Frage, die der Einwand aufwirft: Hätte Gott nicht einfach die Reue annehmen können? Seine Antwort: Reue allein hätte weder Gottes Wahrhaftigkeit gewahrt (die Sünde hat Tod zur Folge) noch die verdorbene Natur geheilt. Darum nahm der Logos einen Leib an, gab ihn für alle in den Tod und erweckte ihn zum Leben. Vergebung ist für Athanasius also keine Amnestie, sondern eine Neuschöpfung – der Mörder, der wirklich umkehrt, wird ein anderer Mensch.`,
      sources: [{ kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'De Incarnatione', ref: '6–10', year: 'um 335', status: 'paraphrase' }],
    },
    {
      person: 'dostojewski',
      role: 'als Romancier, der dem Einwand die stärkste Stimme gab',
      text: `Dostojewski legte den Einwand Iwan Karamasow in den Mund, und zwar so stark, dass viele Leser ihn für unwiderlegbar halten: Die Mutter dürfe dem General, der ihr Kind von Hunden zerreißen ließ, nicht vergeben. Doch Dostojewski lässt Aljoscha antworten: Es gibt ein Wesen, das alles vergeben kann, weil es selbst sein unschuldiges Blut für alle und für alles gegeben hat. Die Antwort des Romans ist kein Argument, sondern eine Person – der gekreuzigte Christus, der als Opfer das Recht zu vergeben hat.`,
      sources: [{ kind: 'fachliteratur', author: 'Fjodor M. Dostojewski', work: 'Die Brüder Karamasow', ref: 'Buch V, Kap. 4 („Die Empörung")', year: '1880', quote: `Aljoscha: Es gibt ein Wesen, das alles vergeben kann, allen und für alles, weil es selbst sein unschuldiges Blut für alle und für alles hingegeben hat.`, status: 'paraphrase' }],
    },
    {
      person: 'miroslav-volf',
      role: 'als kroatischer Theologe nach dem Balkankrieg',
      text: `Volf schrieb *Exclusion and Embrace* (1996) unter dem Eindruck des Krieges in seiner Heimat. Er vertritt die These, dass gerade der Glaube an ein göttliches Gericht Menschen befähigt, auf eigene Rache zu verzichten: Wer weiß, dass Gott dem Bösen nicht das letzte Wort lässt, muss es nicht selbst vergelten. Die Vorstellung eines Gottes, der niemals richtet, entstehe eher in der Ruhe eines Vororts als in einem verbrannten, mit unschuldigem Blut getränkten Land. In *The End of Memory* (2006) entwickelt er, dass Opfer sich „richtig erinnern" sollen: Das Unrecht wird wahrheitsgemäß benannt, aber nicht zur Waffe für neues Unrecht.`,
      sources: [
        { kind: 'fachliteratur', author: 'Miroslav Volf', work: 'Exclusion and Embrace: A Theological Exploration of Identity, Otherness, and Reconciliation', ref: 'Kap. 7', year: '1996', quote: `Die These, menschliche Gewaltlosigkeit entspreche Gottes Weigerung zu richten, werde in der Stille eines Vorstadthauses geboren; in einem verbrannten, mit dem Blut Unschuldiger getränkten Land sterbe sie unweigerlich.`, status: 'paraphrase', note: 'Vielzitierte Passage (meist mit S. 304 angegeben); Seitenzahl vor wörtlicher Verwendung prüfen.' },
        { kind: 'fachliteratur', author: 'Miroslav Volf', work: 'The End of Memory: Remembering Rightly in a Violent World', year: '2006', status: 'paraphrase' },
      ],
    },
    {
      person: 'swinburne',
      role: 'als Religionsphilosoph',
      text: `Richard Swinburne hat in *Responsibility and Atonement* (1989) analysiert, was zur Vergebung gehört: Der Täter muss bereuen, sich entschuldigen, nach Möglichkeit Wiedergutmachung leisten und eine Buße auf sich nehmen. Weil schwere Schuld nie aus eigener Kraft ganz wiedergutzumachen ist, bietet Gott in Christus ein Sühnopfer an, das der Täter sich zu eigen machen kann. Swinburnes Analyse zeigt: Christliche Vergebung ist moralisch anspruchsvoller als die säkulare Alternative, nicht billiger.`,
      sources: [{ kind: 'fachliteratur', author: 'Richard Swinburne', work: 'Responsibility and Atonement', year: '1989', status: 'paraphrase' }],
    },
    {
      person: 'tawadros-ii',
      role: 'als Patriarch einer Märtyrerkirche',
      text: `Papst Tawadros II. hat die 21 in Libyen ermordeten Männer 2015 als Märtyrer in das Synaxarium aufnehmen lassen und ihren Angehörigen beigestanden. Die Reaktionen dieser Familien – Trauer, ungebrochener Glaube und öffentliches Gebet für die Mörder – sind das stärkste Gegenargument zur Behauptung, christliche Vergebung sei eine Theorie von Schreibtischtheologen. Die Opfer selbst haben vergeben; niemand hat es ihnen abgenommen oder aufgezwungen.`,
      sources: [{ kind: 'koptisch', work: 'Aufnahme der 21 Märtyrer von Libyen in das koptische Synaxarium (Gedenktag 8. Amschir)', year: '2015', status: 'paraphrase', note: 'Gedenktag am 8. Amschir (15. Februar); vor Verwendung des Datums prüfen.' }],
    },
  ],
  dialog: [
    {
      id: 'nur-opfer-vergeben',
      objection: `Nur das Opfer kann vergeben. Wenn Gott einem Mörder vergibt, vergibt er etwas, das ihm gar nicht angetan wurde. Das ist eine Anmaßung gegenüber den Toten.`,
      objectionBy: 'Dennis Prager',
      targetsPremise: 2,
      answer: `Unter Menschen stimme ich dir zu: Ich kann nicht für jemand anderen vergeben – darum hatte Wiesenthal kein Recht, für die Ermordeten zu sprechen. Aber Gott ist kein unbeteiligter Dritter. Jeder Mord ist ein Angriff auf Gottes Ebenbild und auf ein Leben, das ihm gehört (Gen 9,6). David hatte Urija ermorden lassen und bekannte trotzdem: „An dir allein habe ich gesündigt" (Ps 51,6). Gott ist in jedem Verbrechen der zuerst Verletzte – deshalb kann er vergeben, was ihn selbst betrifft, ohne dem Opfer etwas wegzunehmen.`,
      detail: `Wichtig ist die Unterscheidung zweier Ebenen: Die **Schuld gegenüber dem Opfer** und die **Schuld gegenüber Gott**. Gottes Vergebung betrifft das Verhältnis des Täters zu Gott; sie erklärt nicht, das Opfer sei „abgefunden". Im Gegenteil: Im Gericht wird der Täter der Wahrheit seiner Tat begegnen (1 Kor 4,5), und das Opfer wird von Gott gerechtfertigt (Offb 6,9–11). Die christliche Hoffnung ist nicht, dass das Opfer übergangen wird, sondern dass am Ende sogar Versöhnung zwischen Opfer und Täter möglich wird – frei, nicht erzwungen.`,
      questionsBack: [
        `Wenn nur das Opfer vergeben kann – wer vergibt dann einem Mörder, dessen Opfer tot ist? Bleibt er für immer unversöhnt, auch wenn er sich völlig ändert?`,
        `Ist der Schöpfer, dem das Leben des Opfers gehört, wirklich ein „Dritter"?`,
      ],
      followUps: [
        {
          id: 'opfer-nicht-gefragt',
          objection: `Trotzdem: Das Opfer wird nicht gefragt. Gott überstimmt es einfach und erklärt den Täter für gerecht.`,
          objectionBy: 'Jean Améry',
          targetsPremise: 4,
          answer: `Das Opfer wird nicht überstimmt, sondern in Gottes Gericht ins Recht gesetzt. Der Täter kommt nicht an der Wahrheit vorbei – er muss ihr ins Gesicht sehen. Christliche Vergebung heißt nicht: „Schwamm drüber", sondern: Das Unrecht wird vollständig verurteilt, und der Täter wird nur gerettet, indem er dieses Urteil über sich selbst annimmt. Kein Opfer wird gezwungen, so zu tun, als sei nichts gewesen.`,
          detail: `Volf beschreibt das Ziel als „Umarmung", die erst möglich wird, wenn die Wahrheit ausgesprochen, das Unrecht benannt und der Täter verwandelt ist. Diese Versöhnung ist eschatologisch: Sie wird nicht auf Erden erzwungen, sondern von Gott vollendet. Das Opfer verliert dabei nichts – es bekommt seine Würde, sein Leben in der Auferstehung und die Anerkennung seines Leids zurück.`,
          followUps: [
            {
              id: 'iwan-eintrittskarte',
              objection: `Dostojewskis Iwan hat recht: Die Mutter darf dem Peiniger nicht vergeben, der ihr Kind von Hunden zerreißen ließ. Wenn das der Preis der himmlischen Harmonie ist, gebe ich die Eintrittskarte zurück.`,
              objectionBy: 'Iwan Karamasow (Dostojewski)',
              answer: `Es ist bezeichnend, dass Dostojewski selbst – ein überzeugter orthodoxer Christ – diesen Einwand formuliert und im selben Kapitel beantwortet hat. Aljoscha sagt: Es gibt ein Wesen, das alles vergeben kann, weil es selbst sein unschuldiges Blut für alle gegeben hat. Das Recht zu vergeben liegt bei dem, der als Unschuldiger gelitten hat. Der gekreuzigte Christus ist kein Zuschauer des Leids, sondern das Opfer aller Opfer.`,
              detail: `Iwans Einwand richtet sich gegen eine Harmonie, die das Leid „verrechnet" – als wäre das zerrissene Kind ein notwendiger Preis für ein größeres Gut. Das Christentum behauptet das nicht. Es behauptet, dass Gott das Leid nicht von außen verrechnet, sondern in Christus von innen erleidet und am Ende überwindet. Ob die Mutter vergibt, bleibt ihre freie Entscheidung; Gott zwingt niemanden. Aber die Möglichkeit der Vergebung wird durch den eröffnet, der selbst das Leiden getragen hat.`,
              voices: [
                {
                  person: 'dostojewski',
                  role: 'als Autor beider Stimmen',
                  text: `Dostojewski schrieb an seinen Verleger, die Antwort auf Iwans „Empörung" sei das ganze folgende Buch über den Starez Sosima – nicht ein Gegenargument, sondern ein Leben tätiger Liebe, die sich für alle verantwortlich weiß. Die Antwort auf das Leid ist bei ihm nicht Theorie, sondern der Christus, der Iwans „Großinquisitor" schweigend küsst.`,
                  sources: [{ kind: 'fachliteratur', author: 'Fjodor M. Dostojewski', work: 'Die Brüder Karamasow', ref: 'Buch V–VI', year: '1880', status: 'paraphrase' }],
                },
              ],
              followUps: [
                {
                  id: 'blut-ist-buchhaltung',
                  objection: `Ein Unschuldiger, der stirbt, macht das Verbrechen nicht ungeschehen. „Er hat für dich bezahlt" ist moralische Buchhaltung. Ich kann deine Schulden bezahlen, aber nicht deine Verantwortung abnehmen.`,
                  objectionBy: 'Christopher Hitchens',
                  answer: `Da stimme ich dir zu: Verantwortung kann man nicht abgeben – und das Christentum verlangt gerade, dass der Täter seine Verantwortung voll anerkennt. Das Kreuz nimmt ihm nicht die Verantwortung ab, sondern die Verdammnis. Und Christus ist kein beliebiger Dritter: Er ist der Gott, gegen den gesündigt wurde, und der Mensch, der sich mit den Opfern identifiziert. Der Geschädigte selbst trägt den Schaden, statt ihn einzufordern – das ist nicht Buchhaltung, sondern das Wesen jeder echten Vergebung.`,
                  detail: `Auch unter Menschen kostet Vergebung immer etwas: Wer vergibt, verzichtet darauf, den Schaden zurückzufordern, und trägt ihn selbst (Tim Keller). Die Ostkirche, auch die koptische, versteht das Kreuz zudem nicht nur juristisch: Christus besiegt Tod und Verderben, heilt die menschliche Natur und öffnet den Weg zur Vereinigung mit Gott. Der Täter, der das annimmt, wird nicht „freigekauft", um weiterzumachen, sondern verwandelt.`,
                  voices: [
                    {
                      person: 'tim-keller',
                      role: 'als Pastor in Manhattan',
                      text: `Keller argumentiert in *The Reason for God* (2008) und in *Forgive* (2022): Wenn jemand dir schweres Unrecht tut, hast du zwei Möglichkeiten – du lässt ihn bezahlen (Rache), oder du vergibst und trägst den Schaden selbst. Vergebung ist immer ein Leiden. Wenn schon menschliche Vergebung den Vergebenden etwas kostet, ist es nicht verwunderlich, dass Gottes Vergebung ihn das Kreuz kostet.`,
                      sources: [{ kind: 'fachliteratur', author: 'Timothy Keller', work: 'The Reason for God', ref: 'Kap. 12', year: '2008', status: 'paraphrase' }],
                    },
                  ],
                  followUps: [
                    {
                      id: 'mischna-joma',
                      objection: `Das Judentum ist hier ehrlicher: Nach der Mischna sühnt der Versöhnungstag Vergehen gegen den Mitmenschen erst, wenn man den Geschädigten besänftigt hat. Gott vergibt nicht über den Kopf des Opfers hinweg.`,
                      objectionBy: 'Dennis Prager',
                      answer: `Das ist ein wertvoller Hinweis, und Jesus lehrt genau dasselbe: „Wenn du deine Gabe auf dem Altar opferst und wirst allda eingedenk, daß dein Bruder etwas wider dich habe, so … gehe zuvor hin und versöhne dich mit deinem Bruder" (Mt 5,23–24). Zachäus erstattet vierfach (Lk 19,8). Echte christliche Buße schließt die Bitte um Vergebung und Wiedergutmachung gegenüber dem Opfer ein, soweit möglich. Wo das Opfer tot ist, bleibt das Urteil Gott überlassen – und das ist auch im Judentum so.`,
                      sources: [
                        { kind: 'juedisch', work: 'Mischna Joma', ref: '8,9', quote: `Vergehen zwischen Mensch und Gott sühnt der Versöhnungstag; Vergehen zwischen einem Menschen und seinem Nächsten sühnt der Versöhnungstag nicht, bis er seinen Nächsten besänftigt hat.`, status: 'paraphrase' },
                        { kind: 'bibel', work: 'Matthäus', ref: '5,23–24', status: 'paraphrase' },
                      ],
                      questionsBack: [`Was geschieht nach jüdischem Verständnis mit einem reuigen Mörder, dessen Opfer nicht mehr besänftigt werden kann? Ist er für immer ohne Hoffnung?`],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'billige-gnade',
      objection: `Ein Serienmörder spricht kurz vor der Hinrichtung ein Gebet – und alles ist gut? Das ist die billigste Gnade der Welt.`,
      objectionBy: 'Christopher Hitchens',
      answer: `Ein Gebet ist kein Zauberspruch, und „billige Gnade" haben Christen selbst am schärfsten kritisiert – Dietrich Bonhoeffer nannte sie den „Todfeind unserer Kirche". Reue (*metanoia*) heißt völlige Umkehr: die Tat beim Namen nennen, die Schuld ohne Ausreden anerkennen, wiedergutmachen, was möglich ist, und ein neues Leben beginnen. Ob das bei einem bestimmten Menschen echt ist, sieht nur Gott. Wir können es nicht beurteilen – aber wir sollten nicht wollen, dass Gott einem wirklich verwandelten Menschen die Tür verschließt.`,
      voices: [
        {
          person: 'dietrich-bonhoeffer',
          role: 'als Theologe der Nachfolge',
          text: `Bonhoeffer eröffnet *Nachfolge* (1937) mit der Unterscheidung von billiger und teurer Gnade. Billige Gnade ist Vergebung ohne Buße, Taufe ohne Gemeindezucht, Absolution ohne Beichte – „Gnade ohne Nachfolge". Teure Gnade ist teuer, weil sie Gott das Leben seines Sohnes gekostet hat und weil sie den Menschen in die Nachfolge ruft. Bonhoeffers Kritik trifft eine reale Fehlform des Christentums – nicht aber die Lehre der Kirche.`,
          sources: [{ kind: 'fachliteratur', author: 'Dietrich Bonhoeffer', work: 'Nachfolge', ref: 'Kap. 1 „Die teure Gnade"', year: '1937', quote: `Billige Gnade ist der Todfeind unserer Kirche. Unser Kampf geht heute um die teure Gnade.`, status: 'verbatim', note: 'Eröffnungssätze des ersten Kapitels; vielfach belegt.' }],
        },
      ],
      followUps: [
        {
          id: 'dahmer-himmel',
          objection: `Jeffrey Dahmer hat sich im Gefängnis taufen lassen. Ist er jetzt im Himmel – und seine Opfer vielleicht nicht?`,
          objectionBy: 'Christopher Hitchens',
          answer: `Ehrlich: Ich weiß nicht, wo Dahmer ist, und ich weiß nicht, wo seine Opfer sind. Niemand außer Gott kennt das Herz eines Menschen, und die Kirche spricht kein Urteil über das ewige Schicksal Einzelner. Falls Dahmer wirklich umgekehrt ist, wäre er der Erste, der sagt, dass er nichts verdient hat. Und die Opfer kommen nicht deshalb in die Hölle, weil ein Mörder Gnade fand – Gott richtet jeden Menschen gerecht nach dem Licht, das er hatte (Röm 2,12–16).`,
          followUps: [
            {
              id: 'opfer-verloren-taeter-gerettet',
              objection: `Aber wenn seine Opfer keine Christen waren, landen sie nach eurer Lehre in der Hölle und der Mörder im Himmel. Absurder geht es nicht.`,
              objectionBy: 'Richard Dawkins',
              answer: `Dieser Satz setzt voraus, dass Christen wüssten, wer verloren ist. Das wissen wir nicht. Die Bibel sagt, dass Gott jeden nach dem Licht richtet, das er empfangen hat (Lk 12,47–48; Röm 2,14–16), und dass „in allerlei Volk, wer ihn fürchtet und recht tut, der ist ihm angenehm" (Apg 10,35). Kein Mensch wird verloren, *weil* er ermordet wurde, und kein Opfer verliert etwas dadurch, dass Gott einem Täter Gnade erweist. Das ewige Schicksal entscheidet sich an der Beziehung jedes Einzelnen zu Gott – nicht an einem Vergleich zwischen Täter und Opfer.`,
              detail: `Das Gegenargument vermischt zwei Fragen: (1) Ist es gerecht, dass Gott einem bereuenden Täter vergibt? (2) Wie richtet Gott Menschen, die Christus nicht kannten? Die zweite Frage behandelt der Claim „Ein guter Atheist kommt in die Hölle". Für die erste genügt: Gnade für den einen ist kein Unrecht am anderen (Mt 20,15).`,
              followUps: [
                {
                  id: 'gott-haette-opfer-schuetzen',
                  objection: `Wenn Gott so gerecht ist, warum hat er die Opfer dann nicht einfach vor dem Mörder beschützt? Erst lässt er das Verbrechen zu, dann vergibt er dem Täter.`,
                  objectionBy: 'Richard Dawkins',
                  answer: `Das ist die Frage nach dem Leid – eine echte und schwere Frage, die einen eigenen Themenblock verdient. Kurz: Eine Welt mit echter Freiheit ist eine Welt, in der Menschen einander furchtbar verletzen können; Gott verhindert nicht jedes Böse, aber er lässt dem Bösen nicht das letzte Wort. Die Vergebung für den Täter ist kein Widerspruch dazu, sondern Teil der Antwort: Gott will das Böse nicht nur bestrafen, sondern überwinden – auch im Herzen des Täters.`,
                  questionsBack: [`Wäre es dir lieber, Gott würde einen Mörder, der wirklich umkehrt, trotzdem verwerfen? Was würde das für das Opfer besser machen?`],
                },
              ],
            },
          ],
        },
        {
          id: 'freibrief-spaete-reue',
          objection: `Dann ist die Lehre ein moralischer Freibrief: Lebe, wie du willst, bereue kurz vor dem Tod – fertig.`,
          objectionBy: 'Christopher Hitchens',
          answer: `Diesen Einwand hat schon Paulus beantwortet: „Sollen wir denn in der Sünde beharren, auf daß die Gnade desto mächtiger werde? Das sei ferne!" (Röm 6,1–2). Wer so rechnet, hat Gnade nicht verstanden – und spielt mit seiner Seele, denn niemand kennt seine Stunde (Lk 12,20), und Reue ist ein Geschenk, das man nicht auf Abruf bestellen kann. Die Väter warnten ausdrücklich davor, Taufe und Buße hinauszuschieben.`,
          sources: [
            { kind: 'bibel', work: 'Römer', ref: '6,1–2', status: 'paraphrase' },
            { kind: 'kirchenvater', author: 'Gregor von Nazianz', work: 'Oratio 40 (Über die Taufe)', year: '381', quote: `Gregor warnt eindringlich davor, die Taufe aus Berechnung bis zum Lebensende aufzuschieben.`, status: 'paraphrase' },
          ],
        },
      ],
    },
    {
      id: 'stellvertretung-unmoralisch',
      objection: `Stellvertretende Strafe ist unmoralisch. Kein Richter darf einen Unschuldigen bestrafen, damit der Schuldige freikommt.`,
      objectionBy: 'Christopher Hitchens',
      targetsPremise: 3,
      answer: `Ein menschlicher Richter darf das nicht, weil er über fremdes Leben verfügen würde. Aber im Kreuz bestraft Gott keinen Dritten: Der Sohn ist eines Wesens mit dem Vater, und er gibt sein Leben freiwillig hin (Joh 10,18). Der Richter selbst steigt herab und trägt die Folgen der Schuld. Das ist nicht Ungerechtigkeit, sondern die höchste Form der Liebe, die Gerechtigkeit ernst nimmt.`,
      detail: `In der koptischen Tradition ist das Kreuz zudem mehr als Strafersatz: Christus vereint die menschliche Natur mit seiner Gottheit, besiegt den Tod „durch seinen Tod" und heilt die Verderbnis. Juristische Bilder (Lösegeld, Schuld) und medizinische Bilder (Heilung, Leben) stehen nebeneinander. Gerade deshalb wird der Täter durch die Vergebung nicht nur freigesprochen, sondern verwandelt.`,
      followUps: [
        {
          id: 'kosmischer-kindesmissbrauch',
          objection: `Ein Vater, der seinen Sohn foltern lässt, um selbst besänftigt zu werden – das ist kosmischer Kindesmissbrauch.`,
          objectionBy: 'Richard Dawkins',
          answer: `Dieses Bild setzt zwei getrennte Personen mit entgegengesetztem Willen voraus – einen zornigen Vater und ein wehrloses Kind. Der christliche Glaube sagt das Gegenteil: Vater und Sohn sind ein Gott mit einem Willen; der Sohn ist kein Kind, sondern der ewige Logos, der aus Liebe Mensch wird und sein Leben selbst hingibt. „Also hat Gott die Welt geliebt" (Joh 3,16) – das Kreuz ist Ausdruck der Liebe des Vaters, nicht ihr Gegenteil.`,
          followUps: [
            {
              id: 'warum-nicht-einfach-vergeben',
              objection: `Wenn Gott vergeben will, warum vergibt er dann nicht einfach – ohne Blut? Menschen vergeben doch auch, ohne dass jemand sterben muss.`,
              objectionBy: 'Shabir Ally',
              answer: `Weil Gott nicht nur ein Privatmann ist, sondern der Richter der ganzen Erde (Gen 18,25). Ein Richter, der Mord einfach „vergibt", ohne dass das Unrecht verurteilt wird, wäre gerade gegenüber den Opfern ungerecht – das ist ja dein eigener Einwand! Und auch menschliche Vergebung ist nie gratis: Der Vergebende trägt den Schaden selbst. Am Kreuz trägt Gott den Schaden – und gibt den Opfern zugleich die Gewissheit, dass ihr Leid nicht gleichgültig war.`,
              followUps: [
                {
                  id: 'ich-vergebe-gratis',
                  objection: `Ich vergebe meinem Freund, wenn er mich belogen hat, und niemand muss dafür bezahlen.`,
                  objectionBy: 'Shabir Ally',
                  answer: `Doch – du bezahlst. Du verzichtest auf Vergeltung, schluckst den Schmerz, trägst den Vertrauensverlust und gibst ihm trotzdem eine neue Chance. Vergebung heißt immer: Der Verletzte nimmt die Last auf sich, statt sie dem Schuldigen aufzuladen. Bei einer kleinen Lüge ist der Preis klein; beim Mord eines Kindes ist er unermesslich. Das Kreuz zeigt, wie hoch der Preis ist, wenn Gott das ganze Böse der Welt vergibt.`,
                  questionsBack: [`Hast du je eine schwere Verletzung vergeben? Hat es dich nichts gekostet?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'vergebung-untergraebt-justiz',
      objection: `Wenn Christen Mördern vergeben, wollt ihr bald auch keine Strafen mehr. Vergebung untergräbt die Justiz.`,
      answer: `Nein. Vergebung verzichtet auf **persönliche Rache**, nicht auf **öffentliche Gerechtigkeit**. Dieselbe Bibel, die sagt „Rächet euch selber nicht" (Röm 12,19), sagt im nächsten Kapitel, dass die Obrigkeit das Schwert „nicht umsonst" trägt (Röm 13,4). David wurde vergeben, aber die Folgen blieben (2 Sam 12,13–14); der reumütige Schächer erhielt das Paradies, aber er blieb am Kreuz. Ein Opfer kann dem Täter vergeben und trotzdem wollen, dass er verurteilt wird.`,
      sources: [
        { kind: 'bibel', work: 'Römer', ref: '13,4', quote: `Denn sie ist Gottes Dienerin dir zu gut. Tust du aber Böses, so fürchte dich; denn sie trägt das Schwert nicht umsonst; sie ist Gottes Dienerin, eine Rächerin zur Strafe über den, der Böses tut.`, translation: 'Luther 1912', status: 'verbatim' },
        { kind: 'bibel', work: '2. Samuel', ref: '12,13–14', status: 'paraphrase' },
      ],
      followUps: [
        {
          id: 'wahrheitskommission',
          objection: `Desmond Tutus Wahrheitskommission in Südafrika hat Tätern Amnestie gewährt. Opferfamilien wie die von Steve Biko haben dagegen sogar geklagt. Christliche Vergebung opfert die Opfer.`,
          objectionBy: 'Kritiker der südafrikanischen Wahrheits- und Versöhnungskommission',
          answer: `Das ist ein ernster Punkt, und man muss zugeben: Die Amnestieregelung war umstritten, und die Biko-Familie hat sie gerichtlich angefochten. Tutu selbst hat aber nie behauptet, Vergebung heiße Vergessen oder Verharmlosen; Amnestie gab es nur gegen vollständige öffentliche Wahrheit. Man kann über das politische Modell streiten. Entscheidend ist: Persönliche Vergebung und staatliche Rechtsprechung sind zwei Ebenen. Christen dürfen für Gerechtigkeit kämpfen und zugleich ihr Herz von Hass freihalten.`,
          voices: [
            {
              person: 'desmond-tutu',
              role: 'als Vorsitzender der Wahrheitskommission',
              text: `Tutu argumentiert in *No Future Without Forgiveness* (1999), dass Vergebung weder Vergessen noch Billigung bedeutet; sie setzt voraus, dass das Unrecht beim Namen genannt wird. Er unterscheidet eine vergeltende Gerechtigkeit, die vor allem bestraft, von einer wiederherstellenden Gerechtigkeit, die Beziehungen heilen will. Ohne Vergebung, so seine Erfahrung nach der Apartheid, wäre Südafrika in einen Kreislauf von Rache gestürzt.`,
              sources: [{ kind: 'fachliteratur', author: 'Desmond Tutu', work: 'No Future Without Forgiveness', year: '1999', status: 'paraphrase' }],
            },
          ],
        },
      ],
    },
    {
      id: 'vergebung-druck-auf-opfer',
      objection: `Opfern Vergebung abzuverlangen ist grausam. Kirchen haben Missbrauchsopfer gedrängt, ihren Peinigern zu vergeben, statt die Täter anzuzeigen.`,
      answer: `Das ist leider wahr, und es ist ein schweres Unrecht – auch an der Botschaft Jesu. Vergebung darf nie als Druckmittel gegen Opfer benutzt werden. Sie ist ein Weg, oft ein langer, kein Befehl auf Knopfdruck. Vergebung heißt nicht Vertrauen, nicht Versöhnung um jeden Preis und schon gar nicht Schweigen: Verbrechen gehören angezeigt (Röm 13,4), und wer den Kleinen schadet, steht unter dem schärfsten Wort Jesu (Mt 18,6).`,
      detail: `Pastoral wichtig: Opfer dürfen klagen, zürnen und Gott ihren Schmerz entgegenschreien – die Klagepsalmen geben dafür Worte (Ps 13; Ps 55). Vergebung beginnt oft mit dem Gebet „Herr, ich kann nicht vergeben – hilf mir, es zu wollen". Christliche Seelsorge begleitet, sie drängt nicht.`,
      followUps: [
        {
          id: 'amery-ressentiment',
          objection: `Jean Améry hat nach Auschwitz geschrieben: Das Ressentiment ist die moralische Weigerung, das Verbrechen als erledigt zu betrachten. Vergebung ist Verrat an den Toten.`,
          objectionBy: 'Jean Améry',
          answer: `Améry verdient tiefen Respekt; er spricht als Gefolterter. Und in einem hat er völlig recht: Das Verbrechen darf nie „erledigt" sein, nur weil Zeit vergangen ist. Christliche Vergebung behauptet das auch nicht. Sie setzt das Urteil „Das war Unrecht" gerade voraus – man kann nur vergeben, was man als Schuld erkannt hat. Vergebung ist nicht Vergessen, sondern der Verzicht darauf, dass das Böse auch noch mein Inneres beherrscht.`,
          followUps: [
            {
              id: 'volf-vergessen',
              objection: `Aber Volf schreibt in „The End of Memory" sogar, dass die Erinnerung an das Böse am Ende vergehen soll. Das ist doch Verrat!`,
              objectionBy: 'Jean Améry',
              answer: `Volf sagt ausdrücklich: Zuerst muss richtig erinnert werden – wahrheitsgemäß, damit das Unrecht anerkannt wird und die Opfer geschützt werden. Erst nachdem Gerechtigkeit geschehen und Versöhnung vollendet ist, hofft er auf ein Nicht-mehr-Erinnern als Geschenk Gottes, nicht als Pflicht der Opfer. Man muss Volf in diesem letzten Punkt nicht folgen; manche Christen tun es nicht. Aber niemand verlangt von einem Opfer, heute zu vergessen.`,
              voices: [
                {
                  person: 'miroslav-volf',
                  role: 'als Theologe der Erinnerung',
                  text: `Volf, der selbst in Jugoslawien von einem Militärvernehmer wochenlang verhört wurde, beginnt *The End of Memory* mit dieser eigenen Erfahrung. Die Frage, wie er sich an seinen Peiniger erinnern soll, ist für ihn keine akademische. Seine Antwort: wahrheitsgemäß, ohne Übertreibung, im Licht der Hoffnung, dass auch der Täter sich ändern kann – und im Wissen, dass die Erinnerung an erlittenes Unrecht selbst zur Quelle neuen Unrechts werden kann.`,
                  sources: [{ kind: 'fachliteratur', author: 'Miroslav Volf', work: 'The End of Memory', ref: 'Kap. 1', year: '2006', status: 'paraphrase' }],
                },
              ],
            },
          ],
        },
        {
          id: 'kopten-konditioniert',
          objection: `Die koptischen Familien, die dem IS vergeben haben, sind entweder traumatisiert oder von ihrer Kirche so konditioniert, dass sie ihre Wut verdrängen.`,
          answer: `Diese Menschen haben getrauert, geweint und das Verbrechen klar als Mord benannt – aber sie haben sich geweigert, sich vom Hass ihrer Mörder bestimmen zu lassen. Es ist herablassend, ihre Worte als Konditionierung abzutun, nur weil sie nicht in unser Schema passen. Wenn eine Mutter sagt, sie würde für den Mörder ihres Sohnes beten, dann spricht nicht eine Kirche über ihren Kopf hinweg – dann spricht ein Opfer.`,
          questionsBack: [`Wer hat mehr Recht, über Vergebung zu urteilen: wir, die nichts erlitten haben, oder die Mutter, die ihren Sohn verlor?`],
        },
      ],
    },
    {
      id: 'moerder-neben-opfer',
      objection: `Stell dir vor, im Himmel sitzt der Mörder neben seinem Opfer. Wie soll das Opfer da glücklich sein?`,
      answer: `Das Neue Testament kennt genau diesen Fall: Stephanus betete sterbend für seine Mörder, und Saulus stand dabei und billigte den Mord (Apg 7,58–8,1). Heute ehrt die Kirche beide – den ersten Märtyrer und den Apostel. Im Himmel sitzt nicht ein Mörder neben seinem Opfer, sondern ein verwandelter Mensch neben einem verherrlichten. „Ist jemand in Christo, so ist er eine neue Kreatur" (2 Kor 5,17). Das Glück des Himmels ist nicht die Abwesenheit früherer Täter, sondern die Gegenwart Gottes, in der alles Böse geheilt ist.`,
      followUps: [
        {
          id: 'paulus-kein-moerder',
          objection: `Paulus hat Stephanus aber nicht selbst umgebracht. Das ist kein Vergleich mit einem Serienmörder.`,
          answer: `Paulus sagt selbst: „Ich verfolgte diesen Weg bis auf den Tod" (Apg 22,4), und als Christen getötet wurden, „gab ich die Stimme dazu" (Apg 26,10). Er war Anstifter und Mittäter einer Verfolgung mit Toten. Und Mose hatte einen Ägypter erschlagen (Ex 2,12), David ließ Urija töten (2 Sam 11). Die Bibel ist voller Menschen mit Blut an den Händen, die Gott verwandelt hat – das ist kein Randfall, sondern der Kern des Evangeliums.`,
          sources: [{ kind: 'bibel', work: 'Apostelgeschichte', ref: '26,10', status: 'paraphrase' }],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wenn ein Mörder sich wirklich und vollständig ändert – soll es für ihn dann gar keine Hoffnung geben? Was gewinnt das Opfer dadurch?`,
    `Wer hat mehr Recht zu vergeben als der, gegen den jedes Verbrechen letztlich gerichtet ist – der Schöpfer des Opfers?`,
    `Ist eine Welt ohne göttliches Gericht für Opfer gerechter – eine Welt, in der viele Mörder nie bestraft werden?`,
    `Kennst du eine Form der Vergebung, die den Vergebenden nichts kostet?`,
    `Wer soll entscheiden, ob Vergebung möglich ist: die Opfer selbst oder wir als Zuschauer?`,
  ],
  avoid: [
    `Vergebung als „Schwamm drüber" darstellen – das bestätigt genau den Einwand und ist unbiblisch.`,
    `Opfern sagen, sie „müssten" sofort vergeben, oder ihre Wut als Sünde abstempeln. Das ist pastoral verheerend.`,
    `Behaupten, ein bestimmter Mörder sei sicher im Himmel oder ein bestimmtes Opfer sicher verloren – kein Mensch kann das wissen.`,
    `Die Strafjustiz gegen die Vergebung ausspielen („Ein Christ darf keine Anzeige erstatten") – das verwechselt persönliche Rache mit öffentlicher Gerechtigkeit.`,
  ],
  concessions: [
    `Kirchen haben Vergebung missbraucht, um Missbrauch zu vertuschen und Opfer zum Schweigen zu bringen. Das ist ein schweres Unrecht, das Christen offen benennen müssen.`,
    `Der Einwand berührt etwas Wahres: Kein Mensch kann stellvertretend für ein anderes Opfer vergeben – Wiesenthals Schweigen ist moralisch verständlich.`,
    `Wie Versöhnung zwischen Opfer und Täter in der Ewigkeit konkret aussieht, wissen wir nicht; wir vertrauen darauf, dass Gott gerecht und barmherzig ist.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Miroslav Volf', work: 'Exclusion and Embrace', year: '1996', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Miroslav Volf', work: 'The End of Memory: Remembering Rightly in a Violent World', year: '2006', status: 'paraphrase' },
    { kind: 'sonstiges', author: 'Simon Wiesenthal', work: 'Die Sonnenblume. Von Schuld und Vergebung', year: '1969 (erw. engl. Ausgabe „The Sunflower" 1997)', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Timothy Keller', work: 'Forgive: Why Should I and How Can I?', year: '2022', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Richard Swinburne', work: 'Responsibility and Atonement', year: '1989', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Vergebung', 'Gerechtigkeit', 'Sühne', 'Opfer', 'Wiesenthal', 'Volf', 'Karamasow', 'Märtyrer'],
  related: [
    'hoelle/ewige-strafe-ungerecht',
    'islam-kreuzigung/gott-kann-einfach-vergeben',
    'islam-kreuzigung/niemand-traegt-last',
    'theodizee/kinderleid-karamasow',
    'vergebung-gerechtigkeit/guter-atheist-hoelle',
    'vergebung-gerechtigkeit/feindesliebe-naiv',
    'christentum-gesellschaft/kirche-heuchlerisch',
  ],
};

export default claim;
