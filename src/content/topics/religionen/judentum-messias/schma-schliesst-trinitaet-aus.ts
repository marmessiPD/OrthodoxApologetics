import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'schma-schliesst-trinitaet-aus',
  title: `„Das Schma (Dtn 6,4) schließt die Trinität aus – Gott ist echad."`,
  proponents: [
    { name: 'Rabbi Tovia Singer', role: 'Gründer von Outreach Judaism', work: 'Let\'s Get Biblical!, Kapitel zur Trinität (2014)' },
    { name: 'Rabbi Stuart Federow', role: 'Rabbiner in Houston', work: 'Judaism and Christianity: A Contrast (2012)' },
    { name: 'Moses Maimonides (Rambam)', role: 'Rechtsgelehrter und Philosoph, 1138–1204', work: '13 Glaubensgrundsätze, Nr. 2 (Einheit Gottes); Mischne Tora, Hilchot Jesode ha-Tora 1,7' },
    { name: 'Rabbi Shmuley Boteach', role: 'Rabbiner und Publizist', work: 'Kosher Jesus (2012)' },
  ],
  steelman: `„Höre, Israel: Der HERR ist unser Gott, der HERR ist einer" (Dtn 6,4) – das ist das Herz des Judentums, zweimal täglich gebetet, das letzte Wort unzähliger jüdischer Märtyrer. Jesus selbst hat es als erstes Gebot zitiert (Mk 12,29). Die Propheten sagen unmissverständlich: „Ich bin der Erste und der Letzte, außer mir gibt es keinen Gott" (Jes 44,6), „Gott ist kein Mensch" (Num 23,19), „Ich bin Gott und nicht ein Mensch" (Hos 11,9). Maimonides hat es auf den Punkt gebracht: Gott ist einzig (jachid), nicht wie ein Paar, nicht wie eine Gattung, nicht wie ein zusammengesetzter Körper. Die christlichen Beweisversuche sind schwach: „Elohim" ist ein Hoheitsplural – auch Mose heißt „Elohim" für den Pharao (Ex 7,1), und der einzelne Gott Kemosch heißt „Elohim" (Ri 11,24); „echad" heißt einfach „eins"; das „Lasst uns Menschen machen" (Gen 1,26) richtet sich nach der rabbinischen Auslegung an die Engel. Drei Personen, die jeweils Gott sind, sind drei Götter – das hat mit dem Gott Abrahams nichts zu tun. Jüdische Vorfahren gingen lieber in den Tod, als einen Menschen anzubeten.`,
  biblical: {
    summary: `Das Schma bekennt, dass JHWH allein Israels Gott ist und es keinen anderen gibt – Christen bekennen genau das (Mk 12,29; 1 Kor 8,4–6; „Wir glauben an den einen Gott"). Das Wort **echad** heißt „eins", schließt aber eine innere Vielfalt nicht aus (Gen 2,24 „ein Fleisch"; Num 13,23 „eine Traube"). Entscheidend sind Texte, in denen innerhalb der Identität des einen JHWH eine Unterscheidung sichtbar wird: der „Engel des HERRN", der als Gott spricht und angebetet wird (Gen 16,13; 22,11–16; Ex 3,2–6; Ri 13,22); JHWH, der „vom HERRN aus dem Himmel" regnen lässt (Gen 19,24); „Der HERR sprach zu meinem Herrn" (Ps 110,1); „Gott, dein Gott, hat dich gesalbt" (Ps 45,7–8); „Der Herr HERR hat mich gesandt und sein Geist" (Jes 48,16); der Menschensohn auf den Wolken neben dem Alten an Tagen (Dan 7,13–14); „Was ist sein Name, und was ist der Name seines Sohnes?" (Spr 30,4).`,
    detail: `**Was das Schma sagt – und was nicht:** Dtn 6,4 bekennt die Ausschließlichkeit und Einzigartigkeit JHWHs gegenüber den Göttern der Völker (vgl. Dtn 4,35.39). Es enthält keine philosophische Theorie über die innere Einfachheit Gottes. Das Wort „jachid" (einzig, allein), das Maimonides in den Glaubensgrundsätzen verwendet, kommt im Schma nicht vor.

**Der Engel des HERRN:** Hagar nennt ihn „Du bist der Gott, der mich sieht" (Gen 16,13); am Dornbusch sagt der „Engel des HERRN": „Ich bin der Gott deines Vaters" (Ex 3,2–6); Manoach fürchtet: „Wir müssen sterben, denn wir haben Gott gesehen" (Ri 13,22). Jakob setzt „den Gott, der mich geweidet hat" mit „dem Engel, der mich erlöst hat" gleich und gebraucht dafür ein Verb im Singular: „er segne die Knaben" (Gen 48,15–16). Von diesem Engel sagt Gott: „Mein Name ist in ihm" (Ex 23,21).

**Wort und Geist:** „Durch das Wort des HERRN sind die Himmel gemacht, und durch den Hauch seines Mundes ihr ganzes Heer" (Ps 33,6); „er sandte sein Wort und heilte sie" (Ps 107,20). Die aramäischen Targumim sprechen auf Schritt und Tritt vom „Memra (Wort) des HERRN", das handelt, schafft und rettet.

**Die Grenzen der Einzelargumente:** „Elohim" ist grammatisch ein Plural, wird aber auch für Einzelwesen verwendet (Ex 7,1; Ri 11,24) – als Trinitätsbeweis taugt es nicht. Gen 1,26 („Lasst uns") ist ein Hinweis, kein Beweis. Die Stärke liegt in der Summe der Texte.`,
    sources: [
      { kind: 'bibel', work: 'Deuteronomium', ref: '6,4', quote: `Höre, Israel, der HERR, unser Gott, ist ein einiger HERR.`, original: 'שְׁמַע יִשְׂרָאֵל יְהוָה אֱלֹהֵינוּ יְהוָה אֶחָד', translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Markus', ref: '12,29', quote: `Jesus aber antwortete ihm: Das vornehmste Gebot vor allen Geboten ist das: „Höre, Israel, der Herr, unser Gott, ist ein einiger Gott."`, translation: 'Luther 1912', status: 'paraphrase', note: 'Wortlaut nach Luther 1912 aus dem Gedächtnis; vor wörtlicher Verwendung prüfen.' },
      { kind: 'bibel', work: 'Genesis', ref: '19,24', quote: `Da ließ der HERR Schwefel und Feuer regnen von dem HERRN vom Himmel herab auf Sodom und Gomorra.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Genesis', ref: '48,15–16', quote: `Der Gott, vor dem meine Väter Abraham und Isaak gewandelt haben, der Gott, der mich geweidet hat … der Engel, der mich erlöst hat von allem Bösen, er segne die Knaben.`, original: 'הַמַּלְאָךְ הַגֹּאֵל אֹתִי מִכָּל־רָע יְבָרֵךְ אֶת־הַנְּעָרִים', translation: 'eigene Übersetzung aus dem Hebräischen', status: 'verbatim', note: '„Er segne" (jevarech) steht im Singular – für Gott und den Engel zugleich.' },
      { kind: 'bibel', work: 'Psalm', ref: '110,1', quote: `Der HERR sprach zu meinem Herrn: Setze dich zu meiner Rechten, bis ich deine Feinde zum Schemel deiner Füße lege.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Jesaja', ref: '48,16', quote: `Und nun hat der Herr HERR mich gesandt und sein Geist.`, translation: 'eigene Übersetzung aus dem Hebräischen', status: 'verbatim' },
      { kind: 'bibel', work: 'Sprüche', ref: '30,4', quote: `Wer ist hinaufgestiegen zum Himmel und herabgekommen? … Was ist sein Name, und was ist der Name seines Sohnes? Weißt du es?`, translation: 'eigene Übersetzung aus dem Hebräischen', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche beginnt jedes Glaubensbekenntnis mit den Worten „Wir glauben an den einen Gott". Die Dreieinigkeit ist keine Einschränkung des Schma, sondern seine Entfaltung: ein Gott, ein Wesen (Usia), drei Hypostasen – der Vater, sein ewiges Wort (der Sohn) und sein Heiliger Geist, der vom Vater ausgeht (Joh 15,26). Drei Götter lehnt die Kirche ebenso entschieden ab wie das Judentum. Gregor von Nazianz erklärt, warum das Alte Testament die Dreiheit nur andeutet: Gott offenbart sich schrittweise, wie ein Arzt, der dem Kranken die Nahrung in der Menge gibt, die er tragen kann.`,
    detail: `Justin der Märtyrer hat Tryphon schon um 160 die Theophanien gezeigt: Der, der Abraham bei Mamre erschien und Feuer „vom HERRN aus dem Himmel" regnen ließ, ist „ein anderer als der Schöpfer aller Dinge – der Zahl nach, nicht dem Willen nach" (Dial. 56; 62). Die spätere Kirche hat Justins Sprache präzisiert (keine Unterordnung im Wesen), aber seine biblische Beobachtung beibehalten: Der eine Gott Israels hat sich durch sein Wort und seinen Geist offenbart, und dieses Wort ist in Jesus Christus Fleisch geworden – ohne dass Gott aufhörte, Gott zu sein. Die koptische Liturgie bekennt den menschgewordenen Logos „ohne Vermischung, ohne Verwandlung, ohne Vermengung, ohne Trennung".`,
    sources: [
      { kind: 'konzil', work: 'Glaubensbekenntnis von Nizäa-Konstantinopel', year: '325/381', quote: `Wir glauben an den einen Gott, den Vater, den Allmächtigen … und an den einen Herrn Jesus Christus, Gottes eingeborenen Sohn … und an den Heiligen Geist, den Herrn, den Lebendigmacher, der vom Vater ausgeht.`, status: 'verbatim', translation: 'gebräuchliche deutsche Fassung (ohne Filioque)' },
      { kind: 'kirchenvater', author: 'Gregor von Nazianz', work: 'Fünfte Theologische Rede (Oratio 31)', ref: '26', year: '380', quote: `Das Alte Testament verkündete den Vater offen, den Sohn mehr verhüllt; das Neue offenbarte den Sohn und deutete die Gottheit des Geistes an; jetzt wohnt der Geist unter uns und gewährt uns eine klarere Schau seiner selbst.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Justin der Märtyrer', work: 'Dialog mit dem Juden Tryphon', ref: '56; 62', year: 'um 160', status: 'paraphrase', quote: `Der Abraham erschien und „vom HERRN aus dem Himmel" Feuer regnen ließ, ist der Zahl nach ein anderer als der Vater, nicht aber dem Willen nach.` },
    ],
  },
  opposingView: {
    summary: `Für das rabbinische Judentum ist Gottes Einheit absolut und unteilbar; Maimonides formuliert, Gott sei „einzig, und es gibt keine Einzigkeit wie die seine" (Ani Maamin, 2. Grundsatz). Zugleich zeigt die Forschung – auch jüdischer Gelehrter –, dass das Judentum des Zweiten Tempels keineswegs einheitlich war: Philo von Alexandrien nannte den Logos einen „zweiten Gott"; die Rabbinen bekämpften seit dem 2. Jahrhundert die Lehre von „zwei Mächten im Himmel" (Alan F. Segal); Daniel Boyarin spricht von einem jüdischen „Binitarismus", aus dem Christentum und rabbinisches Judentum gemeinsam hervorgingen. Interessant ist auch die halachische Kategorie „Schittuf": Manche Autoritäten (Tosafot; Rema) urteilen, dass Nichtjuden die Verehrung Gottes in Verbindung mit einem anderen nicht verboten sei.`,
    sources: [
      { kind: 'juedisch', work: 'Ani Maamin (13 Glaubensgrundsätze, Nr. 2)', quote: `Ich glaube mit vollkommenem Glauben, dass der Schöpfer, gepriesen sei sein Name, einzig ist und es keine Einzigkeit gibt wie die seine in irgendeiner Weise.`, original: 'שֶׁהַבּוֹרֵא יִתְבָּרַךְ שְׁמוֹ הוּא יָחִיד וְאֵין יְחִידוּת כָּמוֹהוּ בְּשׁוּם פָּנִים', translation: 'eigene Übersetzung', status: 'verbatim', note: 'Spätere Kurzfassung der Grundsätze des Maimonides (Kommentar zur Mischna, Sanhedrin 10).' },
      { kind: 'fachliteratur', author: 'Alan F. Segal', work: 'Two Powers in Heaven: Early Rabbinic Reports about Christianity and Gnosticism', year: '1977', status: 'paraphrase', quote: `Die rabbinische Polemik gegen „zwei Mächte im Himmel" richtete sich gegen jüdische und frühchristliche Deutungen einer zweiten göttlichen Gestalt (u. a. nach Dan 7 und Ex 15/20) und reicht bis ins 1./2. Jahrhundert zurück.`, note: 'Segal (1945–2011) war jüdischer Religionswissenschaftler (Columbia/Barnard).' },
      { kind: 'fachliteratur', author: 'Daniel Boyarin', work: 'The Jewish Gospels: The Story of the Jewish Christ', year: '2012', status: 'paraphrase', quote: `Die Vorstellung einer zweiten göttlichen Gestalt neben dem Alten an Tagen – eines göttlichen Menschensohns – war im Judentum vor Jesus vorhanden; viele Juden konnten Jesus deshalb als solche Gestalt verstehen.`, note: 'Boyarin ist orthodox-jüdischer Talmudforscher (Berkeley), kein Christ.' },
      { kind: 'fachliteratur', author: 'Daniel Boyarin', work: 'The Gospel of the Memra: Jewish Binitarianism and the Prologue to John', ref: 'Harvard Theological Review 94', year: '2001', status: 'paraphrase' },
      { kind: 'juedisch', work: 'Babylonischer Talmud, Chagiga', ref: '15a', quote: `Acher sah Metatron sitzen und sprach: Vielleicht gibt es – Gott behüte – zwei Mächte (schte reschujot).`, status: 'paraphrase', url: 'https://www.sefaria.org/Chagigah.15a' },
      { kind: 'juedisch', work: 'Tosafot zu bSanhedrin 63b; Rema zu Schulchan Aruch, Orach Chajim 156,1', status: 'unverified', quote: `Den Noachiden (Nichtjuden) ist „Schittuf" – die Verehrung Gottes zusammen mit etwas anderem – nicht verboten.`, note: 'Fundstellen und genaue Reichweite vor Verwendung prüfen; die Auslegung ist unter jüdischen Autoritäten umstritten.' },
    ],
  },
  quickAnswer: `Ich glaube das Schma auch – Jesus hat es zitiert, und unser Bekenntnis beginnt mit „Wir glauben an den einen Gott". Die Trinität lehrt nicht drei Götter, sondern einen Gott in drei Hypostasen. Und die Hebräische Bibel selbst zeigt Unterscheidungen innerhalb des einen JHWH: den Engel des HERRN, der als Gott spricht; JHWH, der „vom HERRN aus dem Himmel" Feuer regnen lässt (Gen 19,24); „Der HERR sprach zu meinem Herrn" (Ps 110,1). Sogar Rabbinen mussten später gegen Juden kämpfen, die von „zwei Mächten im Himmel" sprachen.`,
  keyPoints: [
    `**Christen bekennen das Schma** (Mk 12,29; 1 Kor 8,6): ein Gott, ein Wesen – keine drei Götter.`,
    `**Echad schließt innere Vielfalt nicht aus** (Gen 2,24; Num 13,23) – beweist sie aber auch nicht. Das Gewicht liegt woanders.`,
    `**Unterscheidungen in JHWH:** Engel des HERRN (Gen 16; 48,16; Ex 3; 23,21), Gen 19,24, Ps 45,7–8, Ps 110,1, Jes 48,16, Dan 7,13–14, Spr 30,4.`,
    `**Wort und Geist Gottes** handeln als Gott (Ps 33,6); die Targumim sprechen vom „Memra des HERRN".`,
    `**Das antike Judentum war nicht einheitlich:** Philo („zweiter Gott"), die rabbinische Polemik gegen „zwei Mächte im Himmel" (Segal), Boyarins „jüdischer Binitarismus".`,
    `**Schrittweise Offenbarung:** Das Alte Testament deutet an, was in der Menschwerdung offenbar wird (Gregor von Nazianz, Or. 31,26).`,
  ],
  voices: [
    {
      person: 'justin',
      role: 'als erster Ausleger der Theophanien im Gespräch mit einem Juden',
      text: `Justin zeigt Tryphon, dass der, der Abraham bei Mamre erschien, mit Jakob rang und Mose im Dornbusch begegnete, als Gott spricht und doch von dem unterschieden wird, der ihn sendet – etwa in Gen 19,24, wo „der HERR vom HERRN aus dem Himmel" Feuer regnen lässt. Er nennt ihn das Wort und die Weisheit Gottes (Spr 8,22–31), durch das Gott schuf und sich offenbarte. Justins Formulierungen sind noch nicht so präzise wie die späteren Konzilien, aber sein Ansatz ist rein biblisch: aus der Hebräischen Schrift selbst.`,
      sources: [
        { kind: 'kirchenvater', author: 'Justin der Märtyrer', work: 'Dialog mit dem Juden Tryphon', ref: '56–62; 126–129', year: 'um 160', status: 'paraphrase' },
      ],
    },
    {
      person: 'bauckham',
      role: 'als Neutestamentler zum jüdischen Monotheismus',
      text: `Bauckham zeigt, dass der jüdische Monotheismus des Zweiten Tempels Gott nicht über eine abstrakte „Natur", sondern über seine **Identität** definierte: Der eine Gott ist der Schöpfer und Herrscher über alles und allein anbetungswürdig. Paulus nimmt in 1 Kor 8,6 die Worte des Schma auf und teilt sie: „ein Gott, der Vater … und ein Herr, Jesus Christus" – er schließt Jesus in die Identität des einen Gottes ein, statt einen zweiten Gott daneben zu stellen. Eine solche „Christologie der göttlichen Identität" ist für Bauckham von Anfang an da, nicht erst ein späteres griechisches Produkt.`,
      sources: [
        { kind: 'fachliteratur', author: 'Richard Bauckham', work: 'Jesus and the God of Israel', year: '2008', status: 'paraphrase' },
        { kind: 'bibel', work: '1. Korinther', ref: '8,6', quote: `So haben wir doch nur einen Gott, den Vater, von welchem alle Dinge sind und wir zu ihm; und einen Herrn, Jesus Christus, durch welchen alle Dinge sind und wir durch ihn.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
    },
    {
      person: 'gregor-nazianz',
      role: 'als „der Theologe" der Dreieinigkeit',
      text: `Gregor erklärt die Zurückhaltung des Alten Testaments pädagogisch: Hätte Gott einem Volk inmitten des Polytheismus sofort den Sohn verkündet, bevor der Vater als der Eine anerkannt war, wäre es eine zu schwere Last gewesen. Darum offenbart Gott sich schrittweise. Für Gregor ist die Dreiheit keine Zahl, die die Einheit zerteilt: „Kaum denke ich an den Einen, umstrahlt mich der Glanz der Drei; kaum unterscheide ich die Drei, werde ich zum Einen zurückgetragen."`,
      sources: [
        { kind: 'kirchenvater', author: 'Gregor von Nazianz', work: 'Fünfte Theologische Rede (Oratio 31)', ref: '26', year: '380', status: 'paraphrase' },
        { kind: 'kirchenvater', author: 'Gregor von Nazianz', work: 'Rede auf die heilige Taufe (Oratio 40)', ref: '41', year: '381', status: 'paraphrase', quote: `Kaum denke ich an den Einen, umstrahlt mich der Glanz der Drei; kaum unterscheide ich die Drei, werde ich zum Einen zurückgetragen.` },
      ],
    },
    {
      person: 'michael-brown',
      role: 'als messianisch-jüdischer Theologe',
      text: `Brown warnt davor, mit „echad heißt zusammengesetzte Einheit" zu argumentieren – das überzeugt keinen Rabbiner. Er setzt bei der Hebräischen Bibel selbst an: Gott ist dort zugleich unsichtbar und erscheint sichtbar, ist im Himmel und wohnt im Heiligtum, sendet seinen Engel, in dem sein Name ist, sein Wort und seinen Geist. Auch die jüdische Mystik und das Konzept der Schechina zeigen, dass das Judentum über Gottes Gegenwart in vielfältigen Weisen nachgedacht hat. Die Menschwerdung ist für Brown die Vollendung dieser Linie, kein Bruch mit ihr.`,
      sources: [
        { kind: 'fachliteratur', author: 'Michael L. Brown', work: 'Answering Jewish Objections to Jesus, Bd. 2: Theological Objections', year: '2000', status: 'paraphrase' },
      ],
    },
    {
      person: 'shenouda-iii',
      role: 'als koptischer Lehrer der Gottheit Christi',
      text: `Papst Schenuda III. hat in seinen Schriften und Katechesen immer wieder betont, dass die Kirche an einen einzigen Gott glaubt und dass die Hypostasen Vater, Sohn und Heiliger Geist keine drei Götter sind, sondern der eine Gott mit seinem Wort und seinem Geist. Er verteidigt die Gottheit Christi aus der Schrift, besonders aus den Stellen, in denen Christus Eigenschaften und Werke zugeschrieben werden, die das Alte Testament allein Gott vorbehält – Schöpfung, Sündenvergebung, Anbetung, Gericht.`,
      sources: [
        { kind: 'koptisch', author: 'Papst Schenuda III.', work: 'Die Gottheit Christi (Lahut al-Masih)', status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'drei-nicht-eins',
      objection: `„Höre, Israel, der HERR ist unser Gott, der HERR ist einer." Jesus selbst hat das zitiert. Drei Personen sind nicht einer – Punkt.`,
      objectionBy: 'Tovia Singer',
      answer: `Ich bekenne das Schma genauso wie du – Jesus hat es zitiert, Paulus auch, und unser Glaubensbekenntnis beginnt mit „Wir glauben an den einen Gott". Die Trinität lehrt nicht drei Götter, sondern einen Gott: ein Wesen, drei Hypostasen. Die Frage ist also nicht „ein Gott oder drei?", sondern: Welche Art von Einheit hat der eine Gott? Und darauf gibt die Hebräische Bibel selbst Hinweise.`,
      questionsBack: [
        `Was genau verneint das Schma – andere Götter neben JHWH oder jede Unterscheidung in JHWH selbst?`,
      ],
      followUps: [
        {
          id: 'jachid-absolut',
          objection: `Das ist Wortspielerei. Drei, die jeweils Gott sind, sind drei Götter. Das Judentum lehrt absolute Einheit – Maimonides: Gott ist „jachid", einzig, ohne jede Zusammensetzung.`,
          objectionBy: 'Stuart Federow',
          answer: `Maimonides' „jachid" ist eine mittelalterliche philosophische Formulierung; im Schma steht „echad". Und Person ist nicht dasselbe wie Wesen: Wir sagen nicht „drei Wesen in einem Wesen" – das wäre ein Widerspruch –, sondern „drei Hypostasen in einem Wesen". Ehrlich gesagt beweist auch „echad" allein keine Dreiheit; aber es schließt eine innere Unterscheidung nicht aus, wie „ein Fleisch" (Gen 2,24) zeigt.`,
          followUps: [
            {
              id: 'echad-traube',
              objection: `„Echad" heißt einfach „eins". Eine Traube oder ein Fleisch beweisen keine Dreieinigkeit – das ist christliche Akrobatik.`,
              objectionBy: 'Tovia Singer',
              answer: `Einverstanden – mit „echad" allein argumentiere ich nicht. Mein Punkt ist nur: Das Wort schließt nichts aus. Die positiven Hinweise kommen aus Texten, in denen JHWH von JHWH unterschieden wird: Gen 19,24 („der HERR ließ regnen vom HERRN aus dem Himmel"), Sach 2,12–13 („der HERR der Heerscharen hat mich gesandt"), Ps 110,1 und der Engel des HERRN, der als Gott spricht.`,
              followUps: [
                {
                  id: 'gen-19-stil',
                  objection: `Gen 19,24 ist schlicht hebräischer Stil – das Subjekt wird wiederholt. „Vom HERRN aus dem Himmel" heißt: von ihm selbst aus dem Himmel.`,
                  objectionBy: 'Tovia Singer',
                  answer: `Diese stilistische Erklärung ist möglich, das gebe ich zu – ein einzelner Vers entscheidet nichts. Aber das Muster ist breit: Der Engel des HERRN spricht als Gott und wird von Gott unterschieden; Jakob nennt Gott und den Engel in einem Atemzug und gebraucht ein Verb im Singular (Gen 48,16); Gott sagt von seinem Engel „Mein Name ist in ihm" (Ex 23,21). Genau dieses Muster ließ Juden der Zeit des Zweiten Tempels von einer zweiten göttlichen Gestalt sprechen – und die Rabbinen bekämpften das später als „zwei Mächte im Himmel".`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'zwei-maechte-ketzerei',
      objection: `Die Lehre von „zwei Mächten im Himmel" haben die Rabbinen als Ketzerei verurteilt. Das beweist, dass das Judentum so etwas immer abgelehnt hat.`,
      objectionBy: 'Michael Skobac',
      answer: `Es beweist zweierlei: dass die Rabbinen es ablehnten – und dass Juden vor ihnen es vertraten. Niemand bekämpft eine Ansicht, die keiner hat. Der jüdische Religionswissenschaftler Alan Segal hat gezeigt, dass diese Debatte bis ins 1. und 2. Jahrhundert zurückreicht und an Texten wie Dan 7 entbrannte; der orthodox-jüdische Talmudforscher Daniel Boyarin spricht sogar von einem jüdischen „Binitarismus", aus dem Christentum und rabbinisches Judentum gemeinsam hervorgingen.`,
      sources: [
        { kind: 'juedisch', work: 'Mechilta de-Rabbi Jischmael, Bachodesch', ref: '5 (zu Ex 20,2)', quote: `Weil er sich am Meer als Kriegsheld und am Sinai als Greis voller Erbarmen zeigte, sollte man den Völkern keinen Anlass geben zu sagen: Es gibt zwei Mächte. Darum heißt es: „Ich bin der HERR, dein Gott."`, status: 'paraphrase' },
      ],
      followUps: [
        {
          id: 'boyarin-einzelgaenger',
          objection: `Boyarin ist ein Einzelgänger, und Segal sagt nur, dass Gnostiker und Christen so etwas glaubten – nicht das Judentum.`,
          objectionBy: 'Stuart Federow',
          answer: `Segal rechnet zu den frühesten Vertretern ausdrücklich auch jüdische Ausleger von Dan 7 und der Theophanien. Und es gibt einen unbestreitbaren jüdischen Zeugen: Philo von Alexandrien, ein frommer Jude der Zeit Jesu, nennt den Logos den „erstgeborenen Sohn", „Erzengel" und sogar einen „zweiten Gott". Philo war kein Christ und kein Trinitarier – aber er zeigt, dass man innerhalb des jüdischen Monotheismus von einer göttlichen Gestalt neben Gott sprechen konnte.`,
          sources: [
            { kind: 'juedisch', author: 'Philo von Alexandrien', work: 'Fragen zur Genesis (Quaestiones in Genesin)', ref: 'II,62', year: '1. Hälfte 1. Jh. n. Chr.', quote: `Nichts Sterbliches konnte nach dem Bild des höchsten Vaters gemacht werden, sondern nach dem des zweiten Gottes, der sein Logos ist.`, original: 'πρὸς τὸν δεύτερον θεόν, ὅς ἐστιν ἐκείνου λόγος', status: 'paraphrase', note: 'Griechisch erhalten bei Eusebius, Praeparatio Evangelica VII,13.' },
          ],
          followUps: [
            {
              id: 'philo-hellenist',
              objection: `Philo war ein hellenistischer Philosoph, beeinflusst von Platon. Er ist kein Maßstab für das Judentum.`,
              objectionBy: 'Tovia Singer',
              answer: `Philo war einer der bedeutendsten jüdischen Denker seiner Zeit und Sprecher der größten jüdischen Gemeinde der Diaspora – der von Alexandrien. Ich behaupte nicht, Philo habe die Trinität gelehrt. Ich widerlege nur die These, der jüdische Monotheismus habe jede Unterscheidung in Gott kategorisch ausgeschlossen. Historisch stimmt das nicht – und das ist für unsere Frage entscheidend.`,
            },
          ],
        },
      ],
    },
    {
      id: 'gott-kein-mensch',
      objection: `„Gott ist kein Mensch" (Num 23,19), „Ich bin Gott und nicht ein Mensch" (Hos 11,9). Ein Gott, der Mensch wird, ist Götzendienst – genau dafür sind unsere Vorfahren lieber gestorben.`,
      objectionBy: 'Shmuley Boteach',
      answer: `Ich ehre die jüdischen Märtyrer zutiefst. Aber Num 23,19 sagt: Gott ist kein Mensch, „dass er lüge" – es geht um seine Treue und Unwandelbarkeit, nicht um ein Verbot, Menschennatur anzunehmen. Wir glauben nicht, dass Gott sich in einen Menschen verwandelt hat, sondern dass der ewige Logos Menschsein angenommen hat, ohne aufzuhören, Gott zu sein. Und die Hebräische Bibel kennt Gottes Erscheinen in menschlicher Gestalt: „Der HERR erschien Abraham" bei Mamre (Gen 18,1), und Jakob sagt: „Ich habe Gott von Angesicht zu Angesicht gesehen" (Gen 32,31).`,
      followUps: [
        {
          id: 'nur-engel',
          objection: `Bei Abraham waren es Engel, und Jakob rang mit einem Engel (Hos 12,5). Gott selbst ist nie als Mensch erschienen.`,
          objectionBy: 'Tovia Singer',
          answer: `Gen 18 sagt ausdrücklich „der HERR erschien ihm" (18,1), „Abraham blieb vor dem HERRN stehen" (18,22), und der HERR redet mit ihm. Hos 12,4–5 setzt beides parallel: „Er kämpfte mit Gott … er kämpfte mit dem Engel" – der Text identifiziert den Engel mit Gott. Und am Dornbusch sagt der „Engel des HERRN": „Ich bin der Gott deines Vaters" (Ex 3,2–6).`,
          followUps: [
            {
              id: 'schaliach-prinzip',
              objection: `Der Engel spricht als Bote im Namen dessen, der ihn sendet – das ist das jüdische Schaliach-Prinzip: „Der Bote eines Menschen ist wie er selbst" (Mischna Berachot 5,5).`,
              objectionBy: 'Stuart Federow',
              answer: `Das Botenprinzip ist ein echtes jüdisches Konzept. Aber ein Bote nimmt keine Anbetung an, sagt nicht „Ich bin der Gott von Bethel" (Gen 31,11–13) und vergibt keine Sünden aus eigener Vollmacht – von diesem Engel heißt es: „Er wird eure Übertretungen nicht vergeben, denn mein Name ist in ihm" (Ex 23,21). Bezeichnenderweise identifizierten die Rabbinen diese Gestalt mit Metatron, „dessen Name wie der seines Herrn ist" (bSanhedrin 38b). Christen sagen: Es ist das ewige Wort Gottes vor seiner Menschwerdung.`,
              sources: [
                { kind: 'juedisch', work: 'Babylonischer Talmud, Sanhedrin', ref: '38b', quote: `Ein Minäer sagte zu Rav Idit: Es steht geschrieben: „Und zu Mose sprach er: Steige hinauf zum HERRN" – es hätte heißen müssen: „zu mir". Er antwortete: Das ist Metatron, dessen Name wie der Name seines Herrn ist.`, status: 'paraphrase', url: 'https://www.sefaria.org/Sanhedrin.38b' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'warum-nicht-klar',
      objection: `Wenn die Trinität so wichtig ist, warum steht sie dann nicht klar im Tanach? Gott hätte es Mose am Sinai deutlich sagen müssen.`,
      objectionBy: 'Stuart Federow',
      answer: `Weil Gott sich schrittweise offenbart. Gregor von Nazianz sagt: Das Alte Testament verkündete den Vater offen und den Sohn verhüllt; das Neue offenbarte den Sohn und deutete den Geist an. In einer Welt voller Götter musste Israel zuerst lernen, dass JHWH allein Gott ist. Die volle Offenbarung kam nicht als Formel, sondern als Ereignis – in der Menschwerdung des Wortes.`,
      followUps: [
        {
          id: 'dtn-13-andere-goetter',
          objection: `Dann ist die Trinität eine neue Offenbarung, die dem Tanach widerspricht. Dtn 13 warnt ausdrücklich vor Propheten, die zu anderen Göttern führen.`,
          objectionBy: 'Tovia Singer',
          answer: `Dtn 13 warnt vor „anderen Göttern, die du nicht kanntest". Christen verkünden keinen anderen Gott als den Gott Abrahams, Isaaks und Jakobs; Jesus betet zum Gott Israels und offenbart sich als dessen ewiges Wort. Entfaltung ist nicht Widerspruch: Schon die Tora selbst kennt fortschreitende Offenbarung – „mit meinem Namen JHWH habe ich mich ihnen nicht zu erkennen gegeben" (Ex 6,3).`,
          questionsBack: [
            `Wenn Gott sich den Vätern noch nicht mit dem Namen JHWH offenbarte (Ex 6,3) – war die Offenbarung an Mose dann ein Widerspruch zu Abraham?`,
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Was verneint das Schma: andere Götter neben JHWH – oder jede Unterscheidung in Gott selbst?`,
    `Wer ist der „Engel des HERRN", der am Dornbusch sagt: „Ich bin der Gott deines Vaters" (Ex 3,6)?`,
    `Wenn niemand von „zwei Mächten im Himmel" sprach – warum mussten die Rabbinen es dann bekämpfen?`,
    `Wie lautet nach Spr 30,4 der Name des Sohnes?`,
  ],
  avoid: [
    `Nicht behaupten, „echad" bedeute immer „zusammengesetzte Einheit". Es heißt „eins"; das Argument überzeugt keinen Hebraisten.`,
    `Nicht „Elohim ist Plural, also Trinität" argumentieren – auch Mose (Ex 7,1) und der Einzelgott Kemosch (Ri 11,24) heißen Elohim.`,
    `Nicht mit angeblich „trinitarischen" Zohar-Stellen oder Zahlenmystik (drei Wörter, drei Buchstaben) argumentieren – das wirkt unseriös.`,
    `Nicht so reden, als wären Vater, Sohn und Geist drei Teile Gottes oder drei Götter – das ist weder koptisch-orthodox noch biblisch.`,
  ],
  concessions: [
    `Die Trinität wird im Alten Testament nicht ausdrücklich gelehrt; sie wird angedeutet und im Neuen Testament offenbar.`,
    `„Echad" allein beweist keine innere Vielfalt Gottes, und „Elohim" ist kein Trinitätsbeweis.`,
    `Viele jüdische Märtyrer starben für das Schma; ihr Zeugnis verdient tiefe Achtung.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Richard Bauckham', work: 'Jesus and the God of Israel', year: '2008', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Daniel Boyarin', work: 'The Jewish Gospels: The Story of the Jewish Christ', year: '2012', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Alan F. Segal', work: 'Two Powers in Heaven', year: '1977', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Michael L. Brown', work: 'Answering Jewish Objections to Jesus, Bd. 2', year: '2000', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Benjamin D. Sommer', work: 'The Bodies of God and the World of Ancient Israel', year: '2009', status: 'paraphrase', note: 'Jüdischer Bibelwissenschaftler (Jewish Theological Seminary) über die Vielgestaltigkeit göttlicher Gegenwart in der Hebräischen Bibel.' },
  ],
  difficulty: 2,
  tags: ['Schma', 'Trinität', 'Echad', 'Engel des HERRN', 'Zwei Mächte im Himmel', 'Memra', 'Philo'],
  related: [
    'islam-trinitaet/trinitaet-unlogisch',
    'antitrinitarier/jesus-nur-besonderer-mensch',
    'antitrinitarier/oneness-modalismus',
    'judentum-messias/messias-kriterien-nicht-erfuellt',
  ],
};

export default claim;
