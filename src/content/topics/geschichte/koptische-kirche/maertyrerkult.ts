import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'maertyrerkult',
  title: `„Die koptische Märtyrerverehrung ist ein Todeskult."`,
  proponents: [
    { name: 'Arthur J. Droge / James D. Tabor', role: 'Religionswissenschaftler', work: 'A Noble Death. Suicide and Martyrdom among Christians and Jews in Antiquity (1992)' },
    { name: 'Candida Moss', role: 'Theologin und Historikerin, University of Birmingham', work: 'The Myth of Persecution (2013)' },
    { name: 'Edward Gibbon', role: 'Historiker (†1794)', work: 'The History of the Decline and Fall of the Roman Empire, Kap. 16' },
    { name: 'Christopher Hitchens', role: 'Publizist (†2011)', work: 'God Is Not Great (2007)' },
  ],
  steelman: `Die koptische Kirche zählt ihre Jahre nicht ab Christi Geburt, sondern ab dem Jahr 284, dem Regierungsantritt Diokletians – dem „Jahr der Märtyrer". Ihr Kalender ist voller Gedenktage für Gefolterte und Hingerichtete, ihre Ikonen zeigen abgeschlagene Köpfe, ihre Heiligenlegenden schwelgen in Folterqualen und sprechen von Zehntausenden Märtyrern. Schon in der Antike suchten Christen den Tod: Ignatius von Antiochien bat, man möge ihn nicht retten, damit er von wilden Tieren zermalmt werde; in Nordafrika und Kleinasien stellten sich Christen freiwillig den Statthaltern. Droge und Tabor haben gezeigt, dass das „freiwillige Martyrium" nach antiken Maßstäben kaum von edlem Suizid zu unterscheiden war. Candida Moss argumentiert, dass die Verfolgungen weit seltener waren, als die Kirche behauptet, und dass die Martyriumserzählungen eine Identität des ewigen Opfers erzeugten. Heute verehren die Kopten die 21 in Libyen Ermordeten – eine Kultur, die den Tod feiert, statt das Leben zu schützen.`,
  biblical: {
    summary: `„Märtyrer" heißt im Griechischen „Zeuge" (*martys*). Jesus kündigt seinen Jüngern Verfolgung an (Mt 10,16–22; Joh 15,20) und preist die Verfolgten selig (Mt 5,10–12) – aber er gebietet zugleich: „Wenn sie euch in einer Stadt verfolgen, so flieht in eine andere" (Mt 10,23). Er selbst entzog sich mehrfach der Gefahr, bis seine Stunde gekommen war (Lk 4,30; Joh 8,59; 11,54). Paulus floh aus Damaskus über die Stadtmauer (2 Kor 11,32–33) und berief sich auf sein römisches Bürgerrecht, um sein Leben zu schützen (Apg 22,25). Das Martyrium wird nicht gesucht, sondern angenommen, wenn die Treue zu Christus nur noch um diesen Preis zu bewahren ist: „Sei getreu bis an den Tod, so will ich dir die Krone des Lebens geben" (Offb 2,10). Und der Märtyrer stirbt, ohne zu töten – er betet, wie Stephanus, für seine Mörder (Apg 7,60).`,
    sources: [
      { kind: 'bibel', work: 'Matthäus', ref: '10,23', quote: `Wenn sie euch aber in einer Stadt verfolgen, so fliehet in eine andere.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Offenbarung', ref: '2,10', quote: `Sei getreu bis an den Tod, so will ich dir die Krone des Lebens geben.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '7,60', quote: `Er kniete aber nieder und schrie laut: HERR, behalte ihnen diese Sünde nicht! Und als er das gesagt, entschlief er.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Philipper', ref: '1,21–24', quote: `Christus ist mein Leben, Sterben mein Gewinn – doch im Fleisch zu bleiben ist nötiger um euretwillen.`, status: 'paraphrase', note: 'Paulus wählt das Leben um des Dienstes willen.' },
    ],
  },
  church: {
    summary: `Die koptische Kirche heißt „Kirche der Märtyrer", weil Ägypten unter Diokletian besonders schwer litt; ihre Zeitrechnung ab 284 (*Anno Martyrum*) ist Erinnerung an Treue, nicht Verherrlichung des Todes. Das Neujahrsfest Nairuz wird mit Freude gefeiert, und die Märtyrerfeste sind Freudenfeste, weil die Kirche im Tod der Heiligen den Sieg der Auferstehung sieht. Zugleich hat die Kirche das Provozieren des Martyriums ausdrücklich missbilligt: Das Martyrium Polykarps lobt die nicht, die sich selbst ausliefern; Clemens von Alexandrien nennt Menschen, die sich zum Tod drängen, keine Märtyrer; Papst Petrus von Alexandria, selbst Märtyrer (311), tadelte in seinen Kanones diejenigen, die die Behörden zur Verfolgung reizten; Athanasius verteidigte seine eigene Flucht vor den Häschern mit Mt 10,23. Martyrium ist Zeugnis der Liebe, die stärker ist als der Tod (Hld 8,6) – und die Kirche lebt aus dem Ostersieg, nicht aus der Todessehnsucht.`,
    sources: [
      { kind: 'kirchenvater', work: 'Martyrium des Polykarp', ref: '4', year: 'ca. 155–160', quote: `Deshalb, Brüder, loben wir die nicht, die sich selbst ausliefern, da das Evangelium nicht so lehrt.`, translation: 'eigene Übersetzung nach dem Griechischen', status: 'verbatim', note: 'Anlass: der Phryger Quintus, der sich freiwillig stellte und dann vom Glauben abfiel.' },
      { kind: 'kirchenvater', author: 'Clemens von Alexandrien', work: 'Stromateis', ref: 'IV,4,16–17', year: 'ca. 200', quote: `Auch wir sagen, dass diejenigen, die sich in den Tod stürzen, keine Märtyrer sind, auch wenn sie öffentlich hingerichtet werden; sie machen sich mitschuldig am Verbrechen des Verfolgers.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Petrus von Alexandrien', work: 'Kanonischer Brief (Kanones über die Gefallenen)', ref: 'Kanon 9 (Zählung nach ANF)', year: '306', quote: `Wer von sich aus die Behörden herausfordert und so sich und andere in Verfolgung stürzt, ist zu tadeln, auch wenn er nicht von der Gemeinschaft ausgeschlossen wird; er handelt gegen das Wort des Herrn, der lehrte, um Bewahrung vor der Versuchung zu bitten und zu fliehen.`, status: 'paraphrase', note: 'Petrus I. von Alexandrien, 17. Papst, starb 311 als Märtyrer – „Siegel der Märtyrer".' },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Verteidigung seiner Flucht (Apologia de fuga)', year: 'ca. 357', quote: `Die Flucht vor den Verfolgern sei vom Herrn geboten und von den Heiligen geübt; wer flieht, bleibt bereit, das Martyrium zu erleiden, wenn die Stunde kommt.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Die historische Forschung hat das Bild der frühen Verfolgungen differenziert. Bis 250 gab es keine reichsweite, systematische Verfolgung, sondern lokale Prozesse und Pogrome; die großen Verfolgungen unter Decius (250), Valerian (257–260) und Diokletian (ab 303) waren zeitlich begrenzt, aber in Ägypten besonders schwer. Edward Gibbon schätzte die Zahl der Opfer der Großen Verfolgung auf unter zweitausend – eine Zahl, die heute als zu niedrig, die Legendenzahlen der Hagiographie (Zehntausende) aber als zu hoch gelten. G. E. M. de Ste. Croix und Droge/Tabor betonten das Phänomen des „freiwilligen Martyriums"; Candida Moss hält die Verfolgungsgeschichte für ideologisch überformt, was andere Historiker als überzogen kritisieren. Unstrittig ist, dass viele koptische Märtyrerakten („epische Passionen") legendarisch ausgeschmückt sind – und ebenso unstrittig, dass Eusebius als Augenzeuge Massenhinrichtungen in der Thebais beschreibt.`,
    detail: `**Eusebius als Augenzeuge (KG VIII,8–9):** Er beschreibt, wie in der Thebais an einem Tag Dutzende, ja über hundert Männer, Frauen und Kinder hingerichtet wurden, so dass die Schwerter stumpf und die Henker erschöpft waren – und wie die Verurteilten mit Psalmen und Danksagung in den Tod gingen. Er betont, er habe dies selbst gesehen.

**Moderne Märtyrer:** Im Februar 2015 wurden 21 Männer – 20 koptische Gastarbeiter aus Oberägypten und ein Westafrikaner – von der Terrormiliz IS an der libyschen Küste enthauptet. Papst Tawadros II. nahm sie wenige Tage später in das Synaxarium auf; 2023 wurden sie auch ins Römische Martyrologium aufgenommen. Angehörige erklärten öffentlich, sie vergäben den Mördern; ein Bruder zweier Opfer dankte, dass die Mörder das Gebet der Männer zum Herrn Jesus nicht aus dem Video geschnitten hatten, und bat Gott, ihnen die Augen zu öffnen.`,
    sources: [
      { kind: 'kirchenvater', author: 'Eusebius von Caesarea', work: 'Kirchengeschichte', ref: 'VIII,9', year: 'frühes 4. Jh.', quote: `In der Thebais seien an einzelnen Tagen viele Menschen hingerichtet worden, so dass die Henker ermüdeten und die Schwerter stumpf wurden; er selbst sei Zeuge gewesen, wie die Verurteilten freudig Psalmen sangen.`, status: 'paraphrase' },
      { kind: 'gegner', author: 'Arthur J. Droge / James D. Tabor', work: 'A Noble Death', year: '1992', quote: `Das freiwillige Martyrium sei in der Antike weit verbreitet gewesen und habe dem edlen Suizid nahegestanden.`, status: 'paraphrase' },
      { kind: 'gegner', author: 'Candida Moss', work: 'The Myth of Persecution. How Early Christians Invented a Story of Martyrdom', year: '2013', quote: `Die Verfolgungen seien seltener und begrenzter gewesen als behauptet; die Märtyrererzählungen hätten eine Identität des verfolgten Opfers geprägt.`, status: 'paraphrase' },
      { kind: 'gegner', author: 'Edward Gibbon', work: 'The History of the Decline and Fall of the Roman Empire', ref: 'Kap. 16', year: '1776', quote: `Die Zahl der Märtyrer der diokletianischen Verfolgung sei weit geringer gewesen als in der kirchlichen Überlieferung, wohl unter zweitausend.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Ein Märtyrer ist ein Zeuge, kein Selbstmörder: Er tötet niemanden und sucht den Tod nicht, sondern bleibt Christus treu, wenn man ihn vor die Wahl stellt. Die Kirche hat das Provozieren des Martyriums sogar ausdrücklich getadelt – im Martyrium Polykarps, bei Clemens von Alexandrien, in den Kanones des Papstes Petrus von Alexandria; Athanasius ist selbst vor seinen Verfolgern geflohen. Die koptische Zeitrechnung ab 284 erinnert an Treue unter der schlimmsten Verfolgung, und die Märtyrerfeste sind Freudenfeste der Auferstehung. Und als 2015 die 21 Märtyrer starben, antworteten ihre Familien mit Vergebung, nicht mit Rache.`,
  keyPoints: [
    `**Martys = Zeuge:** Martyrium ist Treue bis zum Tod, nicht Todessehnsucht; der Märtyrer stirbt, ohne zu töten, und betet für seine Mörder (Apg 7,60).`,
    `**Die Kirche gegen das Provozieren:** Martyrium Polykarps 4; Clemens, Stromateis IV,4; Petrus von Alexandria, Kanon 9; Athanasius, Apologia de fuga; Mt 10,23.`,
    `**Anno Martyrum:** Erinnerung an die Große Verfolgung (ab 284/303), die Ägypten besonders traf (Eusebius als Augenzeuge); Nairuz ist ein Freudenfest.`,
    `**Ehrlich zur Hagiographie:** Viele koptische Märtyrerakten sind legendarisch ausgeschmückt; Legendenzahlen sind nicht historisch.`,
    `**Ehrlich zur Forschung:** Verfolgungen waren nicht ununterbrochen – aber real, und in Ägypten besonders schwer.`,
    `**Die 21 Märtyrer (2015):** Zeugnis des Glaubens und der Vergebung; Kopten antworten auf Gewalt nicht mit Gewalt.`,
  ],
  voices: [
    {
      person: 'athanasius',
      role: 'als verfolgter Bischof und Lehrer über Flucht und Martyrium',
      text: `Athanasius wurde fünfmal verbannt und entkam seinen Häschern mehrmals nur durch Flucht. In seiner „Verteidigung der Flucht" weist er den Vorwurf der Feigheit zurück: Der Herr selbst habe geboten, in eine andere Stadt zu fliehen, und habe sich verborgen, bis seine Stunde kam; die Heiligen des Alten Bundes und die Apostel hätten ebenso gehandelt. Das Martyrium sei anzunehmen, wenn Gott es fügt, nicht herbeizuzwingen. In seiner Schrift über die Menschwerdung nennt er die Todesverachtung der Christen – selbst von Kindern und Frauen – ein Zeichen, dass Christus den Tod besiegt hat: nicht Sehnsucht nach dem Tod, sondern Freiheit von seiner Angst.`,
      sources: [
        { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Apologia de fuga', year: 'ca. 357', quote: `Flucht vor Verfolgung als vom Herrn gebotenes und von den Heiligen geübtes Verhalten.`, status: 'paraphrase' },
        { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'De Incarnatione', ref: '27–29', year: 'ca. 318', quote: `Die Christen fürchten den Tod nicht mehr, sondern verachten ihn – Zeichen, dass er durch Christus entmachtet ist.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'clemens-alexandrien',
      role: 'als alexandrinischer Lehrer über das wahre Martyrium',
      text: `Clemens widmet dem Martyrium ein ganzes Buch seiner „Teppiche". Für ihn ist das wahre Martyrium die Vollendung der Liebe, und es kann sich im ganzen Leben vollziehen, nicht nur im Tod. Scharf grenzt er sich von Leuten ab, die sich zum Tod drängen: Sie seien keine Märtyrer, sondern machten sich am Verbrechen der Verfolger mitschuldig, weil sie sie zur Sünde reizen. Wer flieht, um den Verfolger nicht schuldig werden zu lassen, handelt nach Clemens in der Liebe.`,
      sources: [
        { kind: 'kirchenvater', author: 'Clemens von Alexandrien', work: 'Stromateis', ref: 'IV,4; IV,10', year: 'ca. 200', quote: `Wer sich selbst in den Tod drängt, ist kein Märtyrer; Flucht kann ein Akt der Liebe gegenüber dem Verfolger sein.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'dionysius-alexandrien',
      role: 'als Bischof in den Verfolgungen unter Decius und Valerian',
      text: `Dionysius berichtet in Briefen, die Eusebius aufbewahrt hat, von den Märtyrern Alexandrias unter Decius – darunter die greise Jungfrau Apollonia – und von seiner eigenen Lage: Er sei nicht aus eigenem Antrieb geflohen, sondern auf Gottes Weisung, sei gefangen genommen und von Dorfbewohnern befreit worden. Zugleich beschreibt er die Christen, die in der Seuche die Kranken pflegten und dabei starben. Sein Zeugnis zeigt eine Kirche, die das Leben liebt, den Tod nicht sucht und dennoch bereit ist, um Christi und des Nächsten willen zu sterben.`,
      sources: [
        { kind: 'kirchenvater', author: 'Dionysius von Alexandrien (bei Eusebius)', work: 'Kirchengeschichte', ref: 'VI,40–42; VII,11; VII,22', year: 'Mitte 3. Jh.', quote: `Berichte über die Märtyrer Alexandrias, die eigene Flucht und Gefangennahme sowie die Krankenpflege in der Seuche.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'tawadros-ii',
      role: 'als Patriarch der Kirche der 21 Märtyrer',
      text: `Papst Tawadros II. nahm die 21 in Libyen ermordeten Männer im Februar 2015 wenige Tage nach ihrem Tod in das Synaxarium auf. In seinen Ansprachen nach den Anschlägen der folgenden Jahre betonte er immer wieder, dass die Kirche mit Gebet und Vergebung antwortet und die Einheit des Landes nicht zerstören lässt. Die Märtyrer werden nicht als Helden eines Kampfes gefeiert, sondern als Zeugen, die im Gebet zu Jesus starben – ein Zeugnis gegen jede Ideologie, die Tod und Töten verherrlicht.`,
      sources: [
        { kind: 'koptisch', author: 'Papst Tawadros II.', work: 'Aufnahme der 21 Märtyrer von Libyen in das Synaxarium', year: 'Februar 2015', quote: `Die 21 Märtyrer werden in der koptischen Kirche als Heilige kommemoriert.`, status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'todeskult-kalender',
      objection: `Eure Zeitrechnung beginnt mit einem Massenmord, euer Kalender ist voller Hinrichtungen, eure Ikonen zeigen abgeschlagene Köpfe. Das ist ein Todeskult.`,
      objectionBy: 'Christopher Hitchens',
      answer: `Die Zeitrechnung ab 284 erinnert an Menschen, die unter der schlimmsten Verfolgung ihrem Gewissen treu blieben – so wie man Gedenktage für Widerstandskämpfer begeht. Die Märtyrerfeste sind Freudenfeste, weil die Kirche im Tod der Heiligen den Sieg Christi über den Tod feiert. Ein Todeskult würde den Tod suchen und andere töten; die Märtyrer taten weder das eine noch das andere.`,
      followUps: [
        {
          id: 'freiwillige-maertyrer',
          objection: `Doch, sie suchten ihn: In der Antike stellten sich Christen massenhaft freiwillig den Statthaltern. Das war religiös motivierter Suizid.`,
          objectionBy: 'Arthur Droge / James Tabor',
          answer: `Freiwillige Martyrien gab es, das gestehe ich zu. Aber die Kirche hat sie gerade nicht gelobt: Das Martyrium Polykarps sagt ausdrücklich, man lobe die nicht, die sich selbst ausliefern, „denn das Evangelium lehrt nicht so". Clemens von Alexandrien nennt solche Menschen keine Märtyrer, und Papst Petrus von Alexandria tadelte in seinen Kanones die, die die Behörden herausforderten. Die offizielle Lehre war: fliehen, wenn möglich – standhalten, wenn nötig.`,
          followUps: [
            {
              id: 'ignatius-todessehnsucht',
              objection: `Und Ignatius? Er bat die Römer, ihn nicht zu retten, er wolle von Tieren zermalmt werden. Das ist Todessehnsucht in Reinform.`,
              objectionBy: 'Arthur Droge / James Tabor',
              answer: `Ignatius' Sprache ist glühend, das stimmt. Aber er war bereits verurteilt und auf dem Weg nach Rom; er bittet einflussreiche Christen, nicht durch Bestechung oder Beziehungen seine Begnadigung zu erwirken, weil er sein Zeugnis nicht verleugnen will. Er nimmt ein gefälltes Urteil an – er hat es nicht provoziert. Und er tötet niemanden, er betet für die Kirche.`,
              followUps: [
                {
                  id: 'unterschied-suizid',
                  objection: `Wo ist dann der Unterschied zum Suizid? In beiden Fällen nimmt jemand den Tod bewusst in Kauf.`,
                  objectionBy: 'Arthur Droge / James Tabor',
                  answer: `Der Suizid will den Tod; der Märtyrer will die Treue und nimmt den Tod in Kauf, den andere ihm zufügen. Er würde gern weiterleben, wenn er dafür nicht Christus verleugnen müsste – darum flohen viele, wann immer es möglich war. Das Christentum hat den Suizid stets abgelehnt, weil das Leben Gottes Geschenk ist. Moralisch ist der Unterschied derselbe wie zwischen einem Menschen, der sich umbringt, und einem, der lieber stirbt, als einen Unschuldigen zu verraten.`,
                },
              ],
            },
          ],
        },
        {
          id: 'legendenzahlen',
          objection: `Eure Heiligenlegenden sprechen von Zehntausenden Märtyrern an einem Ort. Das sind offensichtliche Erfindungen.`,
          objectionBy: 'Edward Gibbon',
          answer: `Viele koptische Märtyrerakten sind tatsächlich legendarisch ausgeschmückt – Forscher sprechen von „epischen Passionen" mit wunderhaften Elementen und runden Riesenzahlen. Das gestehe ich offen zu, und die Kirche muss Legende und Geschichte unterscheiden. Aber dass es in Ägypten schwere Verfolgungen mit vielen Toten gab, bezeugt der Historiker Eusebius als Augenzeuge in der Thebais.`,
          followUps: [
            {
              id: 'gibbon-zweitausend',
              objection: `Gibbon schätzte, dass in der ganzen Großen Verfolgung nicht einmal zweitausend Christen starben.`,
              objectionBy: 'Edward Gibbon',
              answer: `Gibbons Schätzung beruht im Wesentlichen auf Eusebius' Bericht über Palästina und wird heute als zu niedrig betrachtet – Eusebius selbst beschreibt in Ägypten weit größere Zahlen. Exakte Zahlen kennt niemand. Aber selbst wenn es „nur" einige tausend gewesen wären: Für jede dieser Familien war es eine Katastrophe, und keine Kirche muss sich dafür schämen, ihrer zu gedenken.`,
            },
          ],
        },
      ],
    },
    {
      id: 'verfolgung-mythos',
      objection: `Die Christenverfolgung ist größtenteils ein Mythos. Es gab nur wenige Jahre echter Verfolgung, den Rest haben Christen zur Opferidentität aufgebauscht.`,
      objectionBy: 'Candida Moss',
      answer: `Richtig ist, dass die Verfolgungen nicht ununterbrochen waren – die erste reichsweite kam unter Decius 250. Aber Christsein war bis 311 ein Verbrechen, für das man hingerichtet werden konnte, wie schon Plinius um 112 zeigt. Unter Decius, Valerian und Diokletian wurde systematisch verfolgt, und Ägypten traf es besonders hart. Eine Opferidentität entsteht nicht aus dem Nichts.`,
      followUps: [
        {
          id: 'opferidentitaet-heute',
          objection: `Und heute nutzt ihr Kopten die Märtyrer, um euch politisch als ewige Opfer darzustellen.`,
          objectionBy: 'Candida Moss (als Diskussionspunkt)',
          answer: `Die Gefahr, Leiden politisch zu instrumentalisieren, besteht für jede Gemeinschaft, und ich will sie nicht verharmlosen. Aber die Anschläge von 2011, 2013, 2016 und 2017 und der Mord an den 21 in Libyen sind dokumentierte Tatsachen. Und bemerkenswert ist, wie die Kirche damit umgeht: mit Gebet, Vergebung und dem Aufruf zur nationalen Einheit, nicht mit Rachefeldzügen.`,
        },
        {
          id: 'decius-allgemeines-opfer',
          objection: `Das Edikt des Decius verlangte von allen Bürgern ein Opfer. Es richtete sich gar nicht speziell gegen Christen.`,
          objectionBy: 'Candida Moss',
          answer: `Formal richtete es sich an alle, aber Christen konnten es nicht befolgen, ohne ihren Glauben zu verleugnen. Aus Ägypten sind sogar die Opferbescheinigungen (*libelli*) auf Papyrus erhalten. Wie groß der Druck war, zeigen die Kanones des Petrus von Alexandria (306): Sie regeln ausführlich, wie mit den vielen umzugehen ist, die unter Folter oder Drohung geopfert hatten – solche Regeln braucht keine Kirche, die nur eine „erfundene" Verfolgung erlebt.`,
        },
      ],
    },
    {
      id: 'vergleich-dschihadisten',
      objection: `Christliche Märtyrer, dschihadistische „Märtyrer" – am Ende verherrlichen beide den Tod für den Glauben.`,
      objectionBy: 'Säkularer Kritiker',
      answer: `Der Unterschied ist grundlegend: Der christliche Märtyrer stirbt, ohne zu töten – er wird getötet, weil er seinen Glauben nicht verleugnet, und betet für seine Mörder. Ein Attentäter, der sich in die Luft sprengt, tötet Unschuldige. Die 21 von Libyen und ihre Mörder stehen genau für diese beiden Gegenpole. Übrigens verurteilen auch die großen islamischen Gelehrten Selbstmordanschläge auf Unschuldige.`,
      followUps: [
        {
          id: 'maertyrer-als-waffe',
          objection: `Trotzdem erzeugt die Märtyrerverehrung eine Kultur, in der Leiden und Tod einen höheren Wert haben als das Leben.`,
          objectionBy: 'Säkularer Kritiker',
          answer: `Die koptische Kirche ist voller Lebensfreude: volle Kirchen, Hochzeiten, Kinderfeste, Pilgerfeste mit Musik und Speisen. Das Leben ist Gottes Geschenk, und Christen sollen es schützen – darum betreibt die Kirche Krankenhäuser, Schulen und Sozialdienste. Die Märtyrer zeigen, dass es etwas gibt, das wertvoller ist als das eigene Überleben: Treue, Wahrheit, Liebe. Das gilt auch für jeden säkularen Menschen, der lieber stirbt, als einen Unschuldigen zu verraten.`,
        },
      ],
    },
    {
      id: 'libyen-21-instrumentalisiert',
      objection: `Die 21 Männer in Libyen waren arme Gastarbeiter, die einfach Opfer von Terror wurden. Sie zu „Heiligen" zu machen, ist Instrumentalisierung.`,
      objectionBy: 'Säkularer Kritiker',
      answer: `Sie waren arme Gastarbeiter, ja – und gerade darin liegt ihre Würde. Nach allem, was bekannt ist, wurden sie getötet, weil sie Christen waren; im Video sieht man, wie manche im Augenblick des Todes den Namen Jesu anrufen. Ihre Familien antworteten mit Vergebung: Ein Bruder dankte öffentlich, dass ihr Gebet nicht herausgeschnitten wurde, und betete für die Mörder. Wenn das kein Zeugnis ist, was dann?`,
      followUps: [
        {
          id: 'einundzwanzigster',
          objection: `Einer der 21 war gar kein Kopte, sondern ein Afrikaner. Warum ist auch er euer Heiliger?`,
          objectionBy: 'Kritiker in der Debatte',
          answer: `Weil er nach dem Bericht vieler Quellen dieselbe Wahl traf: Als man ihn fragte, ob er den Glauben der anderen teile, bekannte er sich zu Christus. Die Kirche ehrt Märtyrer nicht nach ihrer Volkszugehörigkeit, sondern nach ihrem Zeugnis. Dass die koptische Kirche einen Westafrikaner unter ihre Heiligen zählt, zeigt gerade, dass sie keine ethnische Sekte ist.`,
        },
      ],
    },
    {
      id: 'warum-nicht-fliehen',
      objection: `Wenn Martyrium nicht gesucht werden soll – warum verlassen die Kopten dann nicht einfach Ägypten, statt sich Anschlägen auszusetzen?`,
      objectionBy: 'Säkularer Kritiker',
      answer: `Viele sind tatsächlich ausgewandert, und die Kirche verurteilt das nicht – Flucht ist nach Mt 10,23 erlaubt. Aber Ägypten ist ihre Heimat seit den Pharaonen; sie haben dort Familien, Gräber, Kirchen und eine Verantwortung für das Land. Zu bleiben und dem Land Gutes zu tun (Jer 29,7) ist keine Todessehnsucht, sondern Liebe zur Heimat und zum Nächsten – auch zum muslimischen Nachbarn.`,
      followUps: [
        {
          id: 'diaspora-widerspruch',
          objection: `Dann ist eure Diaspora in Amerika und Europa ja eine Flucht vor dem Martyrium. Ist das nicht ein Widerspruch zu eurer Märtyrerverehrung?`,
          objectionBy: 'Säkularer Kritiker',
          answer: `Nein – genau das zeigt, dass die Kirche den Tod nicht sucht. Wer auswandert, um seine Familie zu schützen, handelt nach dem Wort Jesu; wer bleibt, ebenfalls. Beide verehren dieselben Märtyrer, weil diese nicht den Tod wählten, sondern die Treue, als ihnen keine andere Wahl blieb. Die Diasporagemeinden unterstützen übrigens die Kirche in Ägypten mit Gebet und Hilfe – Leben, nicht Tod, ist das Ziel.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Kennst du die Stellen, an denen die Alte Kirche das Provozieren des Martyriums ausdrücklich tadelt?`,
    `Was unterscheidet für dich einen Menschen, der sich tötet, von einem, der lieber stirbt, als einen anderen zu verraten?`,
    `Wie passt ein „Todeskult" zu Familien, die den Mördern ihrer Söhne öffentlich vergeben?`,
    `Hast du einmal ein koptisches Märtyrerfest erlebt?`,
  ],
  avoid: [
    `Jede Märtyrerlegende als historisch verteidigen.`,
    `Die Zahl der Verfolgungsopfer übertreiben.`,
    `Muslime pauschal mit den Mördern der 21 gleichsetzen.`,
    `Leiden als Selbstzweck darstellen oder politische Opferrhetorik pflegen.`,
  ],
  concessions: [
    `Es gab in der Alten Kirche freiwillige Martyrien und eine glühende Märtyrerfrömmigkeit, die heute fremd wirkt.`,
    `Viele koptische Märtyrerakten sind legendarisch ausgeschmückt; die Zahlen sind oft unhistorisch.`,
    `Die Verfolgungen der ersten drei Jahrhunderte waren nicht ununterbrochen und reichsweit.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Candida Moss', work: 'Ancient Christian Martyrdom', year: '2012', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'G. E. M. de Ste. Croix', work: 'Christian Persecution, Martyrdom, and Orthodoxy (Aufsätze, hg. 2006)', year: '2006', status: 'paraphrase' },
    { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Apologia de fuga', year: 'ca. 357', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Martin Mosebach', work: 'Die 21. Eine Reise ins Land der koptischen Märtyrer', year: '2018', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Martyrium', 'Anno Martyrum', '21 Märtyrer', 'Diokletian', 'Petrus von Alexandrien', 'Kopten'],
  related: ['koptische-kirche/kopten-begruessten-araber', 'fruehes-christentum-vielfalt/christentum-durch-gewalt-verbreitet', 'heilige-ikonen', 'religion-gewalt/religion-verursacht-kriege'],
};

export default claim;
