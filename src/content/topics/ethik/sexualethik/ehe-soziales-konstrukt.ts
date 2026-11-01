import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'ehe-soziales-konstrukt',
  title: `„Die Ehe ist nur ein soziales Konstrukt."`,
  proponents: [
    { name: 'Friedrich Engels', role: 'Philosoph und Mitbegründer des Marxismus', work: 'Der Ursprung der Familie, des Privateigentums und des Staats (1884)' },
    { name: 'Stephanie Coontz', role: 'Familienhistorikerin, Evergreen State College', work: 'Marriage, a History (2005)' },
    { name: 'Simone de Beauvoir', role: 'Philosophin', work: 'Das andere Geschlecht (1949)' },
    { name: 'Dan Savage', role: 'Publizist und LGBT-Aktivist', work: 'The Commitment (2005)' },
  ],
  steelman: `Die Ehe hat in der Geschichte unzählige Formen angenommen: Polygamie bei den Patriarchen und in vielen Kulturen bis heute, arrangierte Ehen zur Sicherung von Besitz und Bündnissen, Mitgift, Brautpreis, das Recht des Ehemanns über Körper und Vermögen der Frau. Die „traditionelle" Liebesehe zwischen gleichberechtigten Partnern ist, wie die Historikerin Stephanie Coontz zeigt, eine Erfindung der letzten zweihundert Jahre. Friedrich Engels erklärte die Monogamie als Instrument, mit dem Männer die Vaterschaft und damit die Vererbung ihres Eigentums sicherten – auf Kosten der Frauen. Wenn die Ehe so wandelbar ist, dann ist sie eine menschliche Institution, die jede Gesellschaft nach ihren Werten gestalten darf. Es gibt keinen Grund, sie auf einen Mann und eine Frau, auf Lebenslänglichkeit oder auf die Zahl zwei zu beschränken. Der Staat sollte neutral jede Form verbindlicher Liebe anerkennen.`,
  biblical: {
    summary: `Nach der Bibel ist die Ehe keine Erfindung des Staates oder der Kirche, sondern eine **Schöpfungsordnung**, die allen Kulturen vorausliegt: „Darum wird ein Mann seinen Vater und seine Mutter verlassen und an seinem Weibe hangen, und sie werden sein ein Fleisch" (Gen 2,24). Jesus bestätigt: „Von Anbeginn" war es so, und „was Gott zusammengefügt hat, soll der Mensch nicht scheiden" (Mt 19,4–8). Die Propheten nennen die Ehe einen **Bund**, bei dem Gott Zeuge ist (Mal 2,14), und Paulus sieht in ihr ein Abbild der Liebe Christi zur Kirche (Eph 5,31–32). Die Polygamie wird im AT berichtet, aber nie als Ideal gelehrt – die Erzählungen zeigen fast immer ihr Elend (Sara und Hagar, Lea und Rahel, Salomo).`,
    detail: `**Die Polygamie-Erzählungen** sind keine Werbung: Abrahams Verbindung mit Hagar führt zu Eifersucht und Vertreibung (Gen 16; 21), Jakobs zwei Frauen konkurrieren bitter (Gen 29–30), Salomos viele Frauen verführen ihn zum Götzendienst (1 Kön 11,1–4). Dtn 17,17 verbietet dem König ausdrücklich, viele Frauen zu nehmen. Jesus verweist auf das „von Anbeginn" (Mt 19,8) als Maßstab, hinter dem die späteren Abweichungen zurückbleiben.

**Mal 2,14–16** nennt die Frau „das Weib deines Bundes" und klagt Männer an, die ihre Frauen treulos verstoßen – die biblische Ehe schützt die Schwächeren vor Verstoßung.

**Eph 5,31–32**: „Darum wird ein Mensch verlassen Vater und Mutter … Das Geheimnis ist groß; ich sage aber von Christus und der Gemeinde." Die Ehe ist ein lebendiges Bild der Treue Gottes – deshalb gehören Ausschließlichkeit und Dauer zu ihrem Wesen.`,
    sources: [
      { kind: 'bibel', work: 'Genesis', ref: '2,24', quote: `Darum wird ein Mann seinen Vater und seine Mutter verlassen und an seinem Weibe hangen, und sie werden sein ein Fleisch.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Maleachi', ref: '2,14', quote: `…weil der HERR zwischen dir und dem Weibe deiner Jugend Zeuge war, die du verachtest, so sie doch deine Gesellin und ein Weib deines Bundes ist.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Epheser', ref: '5,31–32', quote: `„Um deswillen wird ein Mensch verlassen Vater und Mutter und seinem Weibe anhangen, und werden die zwei ein Fleisch sein." Das Geheimnis ist groß; ich sage aber von Christus und der Gemeinde.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Deuteronomium', ref: '17,17', quote: `Er soll auch nicht viele Weiber nehmen, daß sein Herz nicht abgewandt werde.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `In der koptisch-orthodoxen Kirche ist die Ehe eines der sieben **Sakramente**. Im Ritus der Ehekrönung werden Braut und Bräutigam vom Priester gesalbt und gekrönt; sie werden „ein Fleisch" und eine „kleine Kirche" (Chrysostomus). Die Ehe ist ein lebenslanger Bund zwischen einem Mann und einer Frau, offen für Kinder, getragen von gegenseitiger Hingabe. Die koptische Kirche hält an der Unauflöslichkeit fest und lässt Scheidung und Wiederheirat nur in sehr engen Grenzen zu (vor allem bei Ehebruch, vgl. Mt 19,9). Zugleich muss niemand in einer Ehe bleiben, in der er an Leib oder Seele bedroht ist – die Kirche schützt die Verletzlichen.`,
    sources: [
      { kind: 'liturgie', work: 'Ritus der Ehekrönung der Koptisch-Orthodoxen Kirche', quote: `Gebete um Einheit, Treue und Fruchtbarkeit; die Kronen als Zeichen der Würde und der gegenseitigen Hingabe nach dem Bild Christi und der Kirche.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Homilien zum Epheserbrief', ref: 'Hom. 20', quote: `Das christliche Haus ist eine kleine Kirche; Mann und Frau sind gerufen, einander in Liebe zu dienen, wie Christus der Kirche.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Die Ethnologie bestätigt die Vielfalt der Eheformen – und zugleich ihre **Universalität**: In allen bekannten Gesellschaften gibt es eine öffentlich anerkannte Verbindung von Mann und Frau, die Sexualität, Elternschaft und Verwandtschaft ordnet (Donald E. Brown, *Human Universals*, 1991). Historiker wie Coontz zeigen, dass die romantische Liebesheirat neu ist, nicht aber die Ehe selbst. Sozialwissenschaftliche Studien finden, dass Kinder im Durchschnitt am besten gedeihen, wenn sie mit beiden leiblichen Eltern in einer stabilen, konfliktarmen Ehe aufwachsen (z. B. McLanahan & Sandefur 1994; Child Trends 2002). Studien zu gleichgeschlechtlichen Elternpaaren berichten überwiegend keine großen Unterschiede, ihre Methodik (kleine Stichproben) wird aber diskutiert.`,
    sources: [
      { kind: 'wissenschaft', author: 'Sara McLanahan; Gary Sandefur', work: 'Growing Up with a Single Parent: What Hurts, What Helps', year: '1994', quote: `Kinder, die ohne einen ihrer leiblichen Elternteile aufwachsen, haben im Durchschnitt schlechtere Bildungs- und Lebensaussichten, auch nach Berücksichtigung von Einkommen.`, status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'Kristin A. Moore u. a. (Child Trends)', work: 'Marriage from a Child\'s Perspective (Research Brief)', year: '2002', quote: `Die Familienstruktur ist für Kinder bedeutsam; am meisten hilft eine Familie mit beiden leiblichen Eltern in einer konfliktarmen Ehe.`, status: 'paraphrase' },
      { kind: 'gegner', author: 'Stephanie Coontz', work: 'Marriage, a History: How Love Conquered Marriage', year: '2005', quote: `Die Liebesheirat sei eine historisch junge Erfindung; die Ehe habe über Jahrtausende vor allem wirtschaftliche und politische Funktionen gehabt.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Dass die Ehe viele Formen hatte, stimmt – aber unter allen Formen liegt etwas, das jede bekannte Kultur kennt: die öffentlich anerkannte Verbindung von Mann und Frau, die Kinder an ihre Eltern bindet. So wie es viele Sprachen gibt, aber die Sprache selbst zur menschlichen Natur gehört. Die Bibel sagt: Gott hat die Ehe „von Anbeginn" gestiftet, lange vor jedem Staat. Und ihr Kern – Treue, Ausschließlichkeit, Dauer – hat gerade die Schwächeren geschützt: Frauen vor der Verstoßung und Kinder vor dem Verlust ihrer Eltern.`,
  keyPoints: [
    `**Vielfalt setzt einen Kern voraus:** Alle Kulturen kennen eine anerkannte Verbindung von Mann und Frau, die Sexualität, Kinder und Verwandtschaft ordnet.`,
    `**Schöpfungsordnung vor dem Staat:** Gen 2,24; Mt 19,4–8 – die Ehe liegt jeder Gesellschaft voraus.`,
    `**Polygamie beschrieben, nicht gelehrt:** Die Erzählungen zeigen ihr Elend; Dtn 17,17 verbietet sie dem König; Jesus verweist auf den Anfang.`,
    `**Christliche Monogamie schützte Frauen:** gleiche Treuepflicht, Schutz vor Verstoßung (Mal 2,14–16; Mt 19).`,
    `**Kinder haben ein Recht auf ihre Eltern:** Die UN-Kinderrechtskonvention (Art. 7) nennt das Recht des Kindes, seine Eltern zu kennen und von ihnen betreut zu werden.`,
    `**Wenn Ehe nur Liebe zweier Erwachsener wäre:** Warum dann zwei, warum ausschließlich, warum lebenslang? Die Definitionsfrage betrifft alle Merkmale.`,
  ],
  voices: [
    {
      person: 'kierkegaard',
      role: 'als Philosoph der Liebe',
      text: `In den *Taten der Liebe* (1847) unterscheidet Kierkegaard die spontane, gefühlsbestimmte Liebe von der Liebe, die zur Pflicht geworden ist. Seine überraschende These: Erst wenn Liebe Pflicht ist, ist sie „ewig gesichert" – gegen Veränderung, gegen Verzweiflung, gegen die eigenen Stimmungen. Das Versprechen nimmt der Liebe nicht ihre Freiheit, sondern schützt sie vor ihrer eigenen Vergänglichkeit. Für die Debatte um die Ehe heißt das: Das öffentliche Versprechen ist nicht ein Käfig für die Liebe, sondern ihr Schutzraum.`,
      sources: [{ kind: 'fachliteratur', author: 'Søren Kierkegaard', work: 'Der Liebe Tun (Kjerlighedens Gjerninger)', year: '1847', quote: `Nur wenn es Pflicht ist zu lieben, nur dann ist die Liebe ewig gegen jede Veränderung gesichert.`, status: 'paraphrase' }],
    },
    {
      person: 'chrysostomus',
      role: 'als Prediger der Ehe',
      text: `Chrysostomus hat in seinen Homilien zum Epheser- und Kolosserbrief eine der schönsten Theologien der Ehe in der Alten Kirche entwickelt. Die Ehe ist für ihn eine „kleine Kirche", in der Mann und Frau einander zur Heiligkeit helfen. Er warnt davor, eine Frau wegen ihres Vermögens zu heiraten, und rät Männern, ihren Frauen zu sagen, dass sie sie mehr lieben als ihr eigenes Leben. Die Ehe ist bei ihm kein Wirtschaftsvertrag, sondern eine Gemeinschaft der Liebe – Jahrhunderte vor der „Erfindung" der Liebesheirat.`,
      sources: [{ kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Homilien zum Epheserbrief', ref: 'Hom. 20', status: 'paraphrase' }],
    },
    {
      person: 'chesterton',
      role: 'als Kulturkritiker',
      text: `Chesterton hat in *The Thing* (1929) ein berühmtes Bild geprägt: Ein Reformer findet einen Zaun quer über einer Straße und sagt: „Ich sehe keinen Sinn darin, reißt ihn ab." Der klügere Reformer antwortet: „Wenn du keinen Sinn darin siehst, lasse ich dich ihn nicht abreißen. Geh und finde heraus, warum er dasteht – dann darfst du ihn vielleicht entfernen." Für Chesterton, der auch ein Buch gegen die Scheidung schrieb, ist die Ehe ein solcher Zaun: eine Institution, deren Sinn – Schutz von Kindern, Treue, Generationenfolge – man erst versteht, wenn man nach ihrem Grund fragt, bevor man sie umbaut.`,
      sources: [
        { kind: 'fachliteratur', author: 'G. K. Chesterton', work: 'The Thing', ref: 'Kap. „The Drift from Domesticity"', year: '1929', status: 'paraphrase' },
        { kind: 'fachliteratur', author: 'G. K. Chesterton', work: 'The Superstition of Divorce', year: '1920', status: 'paraphrase' },
      ],
    },
    {
      person: 'tim-keller',
      role: 'als Pastor',
      text: `Keller beschreibt in *The Meaning of Marriage* zwei Bilder der Ehe: das moderne, in dem die Ehe dem Selbstverwirklichungswunsch zweier Individuen dient und endet, wenn sie nicht mehr erfüllt, und das biblische, in dem die Ehe ein Bund ist, in dem zwei Menschen einander helfen, das zu werden, wozu Gott sie geschaffen hat. Das erste Bild macht die Ehe zerbrechlich, weil es sie von Gefühlen abhängig macht; das zweite macht sie stark, weil es auf einem Versprechen ruht, das Gottes eigene Treue abbildet.`,
      sources: [{ kind: 'fachliteratur', author: 'Timothy Keller; Kathy Keller', work: 'The Meaning of Marriage', year: '2011', status: 'paraphrase' }],
    },
    {
      person: 'paulus',
      role: 'als Theologe des Ehegeheimnisses',
      text: `Paulus verbindet in Eph 5 die Ehe mit dem größten Geheimnis des Glaubens: der Liebe Christi zu seiner Kirche. Weil Christus seiner Braut treu ist bis in den Tod, ist auch die Ehe auf Treue und Dauer angelegt; weil Christus sich hingibt, ist die Ehe ein Ort der Selbsthingabe, nicht der Herrschaft. Für Paulus ist die Ehe damit kein bloß soziales Arrangement, sondern ein Zeichen, das auf Gottes eigene Liebe verweist.`,
      sources: [{ kind: 'bibel', work: 'Epheser', ref: '5,21–33', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'tausend-formen',
      objection: `Die Ehe hatte in der Geschichte tausend Formen: Polygamie, arrangierte Ehen, Kinderheirat, Mitgift. Die „traditionelle Ehe" gibt es gar nicht. Also ist sie ein soziales Konstrukt, das wir frei gestalten können.`,
      objectionBy: 'Stephanie Coontz',
      answer: `Die Vielfalt ist real, aber sie setzt einen gemeinsamen Kern voraus: In jeder bekannten Kultur gibt es eine öffentlich anerkannte Verbindung von Mann und Frau, die Sexualität, Kinder und Verwandtschaft ordnet. Es gibt auch Tausende Sprachen – und doch ist Sprache kein beliebiges Konstrukt, sondern gehört zur menschlichen Natur. Christen sagen: Gott hat die Ehe gestiftet, Kulturen haben sie unterschiedlich gut verwirklicht oder verzerrt. Jesus misst sie am „Anfang", nicht an der jeweiligen Kultur.`,
      questionsBack: [
        `Was haben all diese Eheformen gemeinsam – und warum ist dieser Kern überall derselbe?`,
      ],
      followUps: [
        {
          id: 'engels-eigentum',
          objection: `Engels hat gezeigt: Die Monogamie entstand, um Vaterschaft und Erbe zu sichern. Sie war von Anfang an ein Instrument zur Unterdrückung der Frau.`,
          objectionBy: 'Friedrich Engels',
          answer: `Die christliche Monogamie verlangte die Treue gerade auch von Männern – das war gegen die antike Doppelmoral gerichtet. Und Jesus' strenge Haltung zur Scheidung (Mt 19) schützte vor allem Frauen, die in der damaligen Welt von ihren Männern leicht verstoßen werden konnten und dann oft schutzlos waren. Historisch hat die Polygamie Frauen eher benachteiligt: Sie macht Frauen zu einem knappen Gut, das wohlhabende Männer anhäufen.`,
          followUps: [
            {
              id: 'scheidungsverbot-gefaengnis',
              objection: `Aber das kirchliche Scheidungsverbot hat Frauen jahrhundertelang in gewalttätigen Ehen gefangen gehalten.`,
              objectionBy: 'Simone de Beauvoir',
              answer: `Wo das geschah, war es ein schweres Unrecht. Die Ehe ist kein Freibrief für Gewalt, und niemand muss mit einem Partner zusammenleben, der ihn an Leib oder Seele bedroht – auch die koptische Kirche erlaubt in solchen Fällen die Trennung und schützt die Bedrohten. Das Ideal der unauflöslichen Ehe ist ein Versprechen der Treue, kein Gefängnis. Der Missbrauch eines Ideals widerlegt nicht das Ideal.`,
            },
          ],
        },
      ],
    },
    {
      id: 'staat-neutral',
      objection: `Der Staat sollte neutral sein und jede verbindliche Liebesbeziehung als Ehe anerkennen. Warum sollte er eine bestimmte Form bevorzugen?`,
      objectionBy: 'Dan Savage',
      answer: `Der Staat hat die Ehe nie anerkannt, weil er sich für die Gefühle Erwachsener interessiert, sondern wegen der Kinder: Die Ehe bindet Mutter und Vater aneinander und an die Kinder, die aus ihrer Verbindung hervorgehen. Wenn Ehe dagegen nur noch „verbindliche Liebe zweier Erwachsener" ist, stellt sich sofort die Frage: Warum zwei? Warum ausschließlich? Warum lebenslang? Genau diese Fragen werden heute von Befürwortern polyamorer Beziehungen gestellt. Wer die Definition ändert, ändert alle Merkmale.`,
      followUps: [
        {
          id: 'unfruchtbare-paare',
          objection: `Das Kinder-Argument funktioniert nicht: Unfruchtbare oder ältere Paare dürfen auch heiraten, obwohl sie keine Kinder bekommen.`,
          objectionBy: 'Stephanie Coontz',
          answer: `Die Ehe ist eine Verbindung von der *Art*, die auf Kinder hin offen ist – die leibliche Einheit von Mann und Frau –, auch wenn im Einzelfall keine Kinder kommen. Eine Fußballmannschaft, die nie ein Tor schießt, bleibt eine Mannschaft. Und die Bibel kennt gerade unfruchtbare Paare, deren Ehe vollgültig ist – Abraham und Sara, Elkana und Hanna, Zacharias und Elisabeth. Die Ehe ist mehr als Fortpflanzung, aber ihr Wesen ist auf die Einheit von Mann und Frau bezogen, die neues Leben schenken kann.`,
        },
      ],
    },
    {
      id: 'kinder-brauchen-liebe',
      objection: `Kinder brauchen keine Mutter und keinen Vater, sondern Liebe. Studien zeigen, dass es Kindern in Regenbogenfamilien genauso gut geht.`,
      objectionBy: 'Dan Savage',
      answer: `Kinder brauchen Liebe, ganz sicher – und viele Alleinerziehende, Adoptiv- und Pflegeeltern leisten Heldenhaftes. Die Studienlage zu gleichgeschlechtlichen Eltern ist methodisch umstritten, und ich würde meine Position nicht an einzelnen Studien festmachen. Der Kern ist ein anderer: Kinder haben ein natürliches Interesse daran, ihre leiblichen Eltern zu kennen und, wo möglich, von ihnen aufgezogen zu werden – die UN-Kinderrechtskonvention nennt das ausdrücklich. Die Ehe von Mann und Frau ist die Institution, die dieses Interesse schützt.`,
      sources: [
        { kind: 'sonstiges', work: 'UN-Übereinkommen über die Rechte des Kindes', ref: 'Art. 7 Abs. 1', year: '1989', quote: `Das Kind hat … soweit möglich das Recht, seine Eltern zu kennen und von ihnen betreut zu werden.`, status: 'paraphrase' },
      ],
    },
    {
      id: 'ehe-gefaengnis-liebe',
      objection: `Liebe braucht keinen Vertrag. Die Ehe macht aus Liebe eine Pflicht – und tötet damit, was sie schützen will.`,
      objectionBy: 'Simone de Beauvoir',
      answer: `Kierkegaard hat genau das Gegenteil beobachtet: Erst wenn die Liebe zur Pflicht geworden ist, ist sie gegen Veränderung gesichert. Gefühle kommen und gehen; ein Versprechen trägt durch die Zeiten, in denen die Gefühle schwach sind. Wer verspricht, sagt: „Ich will dich lieben, auch wenn ich es einmal nicht spüre." Das ist nicht der Tod der Liebe, sondern ihre reifste Form – so wie Gott uns treu bleibt, auch wenn wir untreu sind (2 Tim 2,13).`,
    },
  ],
  questionsToAsk: [
    `Warum gibt es in jeder bekannten Kultur eine Verbindung von Mann und Frau, die Kinder an ihre Eltern bindet?`,
    `Wenn Ehe nur verbindliche Liebe zweier Erwachsener ist – warum dann zwei, warum ausschließlich, warum lebenslang?`,
    `Hat ein Kind ein Recht, seine Mutter und seinen Vater zu kennen?`,
    `Ist ein Versprechen für dich ein Gefängnis oder ein Schutz?`,
  ],
  avoid: [
    `Alleinerziehende, Geschiedene, Adoptiv- oder Patchworkfamilien abwerten – sie verdienen Unterstützung, nicht Belehrung.`,
    `Behaupten, die Ehe sei in der Geschichte immer gleich gewesen; die Formen waren sehr verschieden.`,
    `Einzelne umstrittene Studien als „Beweis" präsentieren.`,
  ],
  concessions: [
    `Die Ehe war in vielen Epochen auch in christlichen Gesellschaften ein Instrument von Besitz- und Machtinteressen.`,
    `Frauen hatten in der Ehe über Jahrhunderte weniger Rechte als Männer; das wurde auch kirchlich gestützt.`,
    `Die romantische Liebesheirat in ihrer heutigen Form ist historisch relativ jung.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Timothy Keller; Kathy Keller', work: 'The Meaning of Marriage', year: '2011', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Sherif Girgis; Ryan T. Anderson; Robert P. George', work: 'What Is Marriage? Man and Woman: A Defense', year: '2012', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Søren Kierkegaard', work: 'Der Liebe Tun', year: '1847', status: 'paraphrase' },
    { kind: 'gegner', author: 'Stephanie Coontz', work: 'Marriage, a History', year: '2005', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Ehe', 'Familie', 'Monogamie', 'Sakrament', 'Kinderrechte', 'Ehekrönung'],
  related: [
    'sexualethik/homosexualitaet-bibel',
    'sexualethik/sexualmoral-veraltet',
    'sexualethik/gender-frei-waehlbar',
    'at-ethik/bibel-frauenfeindlich',
  ],
};

export default claim;
