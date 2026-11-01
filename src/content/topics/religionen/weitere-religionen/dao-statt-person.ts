import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'dao-statt-person',
  title: `„Das Dao ist tiefer als ein persönlicher Gott."`,
  proponents: [
    { name: 'Laozi (traditionell zugeschrieben)', role: 'Legendärer Verfasser des Daodejing', work: 'Daodejing (Tao Te King)' },
    { name: 'Zhuangzi', role: 'Daoistischer Philosoph (4. Jh. v. Chr.)', work: 'Zhuangzi' },
    { name: 'Alan Watts', role: 'Britisch-amerikanischer Popularisierer östlicher Philosophie (1915–1973)', work: 'Tao: The Watercourse Way (1975)' },
    { name: 'Fritjof Capra', role: 'Physiker und Autor', work: 'The Tao of Physics (Das Tao der Physik, 1975)' },
  ],
  steelman: `„Das Dao, das man aussprechen kann, ist nicht das ewige Dao" – so beginnt das Daodejing. Die letzte Wirklichkeit ist namenlos, jenseits aller Begriffe, auch jenseits von „Person". Ein persönlicher Gott, der will, zürnt, befiehlt und belohnt, ist ein vergrößertes Menschenbild. Das Dao dagegen wirkt ohne Absicht (*wu wei*), aus sich selbst heraus (*ziran*), wie Wasser, das sanft jeden Widerstand überwindet. „Himmel und Erde sind nicht menschenfreundlich" (Kap. 5) – sie bevorzugen niemanden. Statt eines Kampfes zwischen Gut und Böse kennt das Dao das harmonische Wechselspiel von Yin und Yang. Die moderne Physik mit ihrem Bild eines dynamischen Netzes von Beziehungen (Capra) ist dieser Sicht näher als der Vorstellung eines himmlischen Herrschers. Bezeichnend: Sogar die chinesische Bibel übersetzt Joh 1,1 mit „Im Anfang war das Dao".`,
  biblical: {
    summary: `Die Bibel teilt die Ehrfurcht vor der Unergründlichkeit Gottes („Wie gar unbegreiflich sind seine Gerichte und unerforschlich seine Wege!", Röm 11,33; Jes 55,8–9). Aber sie bezeugt zugleich: Der Unergründliche ist kein „Es", sondern spricht, ruft beim Namen und liebt (Ex 3,14; Jes 43,1; 1 Joh 4,8). Die chinesische Union-Übersetzung gibt Joh 1,1 tatsächlich mit 太初有道 wieder – „Im Anfang war das Dao". Doch Johannes fährt fort: Das Dao war **bei Gott**, war **Gott**, alles ist durch es geschaffen, und „das Dao ward Fleisch … voller Gnade und Wahrheit" (Joh 1,14). Und Jesus sagt: „Ich bin der Weg" (Joh 14,6) – im Chinesischen 道路.`,
    sources: [
      { kind: 'bibel', work: 'Johannes', ref: '1,1 (Chinesische Union-Übersetzung)', original: '太初有道，道與神同在，道就是神。', quote: `Im Anfang war das Dao, und das Dao war bei Gott, und das Dao war Gott.`, translation: 'Chinesische Union-Übersetzung (和合本, 1919), eigene Rückübersetzung', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '1,14 (Chinesische Union-Übersetzung)', original: '道成了肉身，住在我們中間，充充滿滿地有恩典有真理。', quote: `Das Dao wurde Fleisch und wohnte unter uns, voller Gnade und Wahrheit.`, translation: 'Chinesische Union-Übersetzung, eigene Rückübersetzung', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '14,6', quote: `Jesus spricht zu ihm: Ich bin der Weg und die Wahrheit und das Leben; niemand kommt zum Vater denn durch mich.`, original: '我就是道路、真理、生命', translation: 'Luther 1912; Chinesisch nach der Union-Übersetzung', status: 'verbatim' },
      { kind: 'bibel', work: 'Römer', ref: '11,33', quote: `O welch eine Tiefe des Reichtums, beides, der Weisheit und Erkenntnis Gottes! Wie gar unbegreiflich sind seine Gerichte und unerforschlich seine Wege!`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Exodus', ref: '3,14', quote: `Gott sprach zu Mose: Ich werde sein, der ich sein werde.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die alexandrinische Tradition kennt die „negative Theologie": Gottes Wesen übersteigt jeden Namen; die koptische Gregorius-Liturgie redet Gott als den Unsichtbaren, Unbegreiflichen, Unbeschreiblichen an. Zugleich ist dieser Unbegreifliche der dreieinige, sprechende und liebende Gott. Justin lehrte, dass der Logos als „Same" in allen Völkern Wahrheit aufleuchten ließ – auch Laozis Ahnung eines namenlosen Ursprungs kann so gewürdigt werden. Christen in China haben das Dao-Vokabular sehr früh aufgenommen: Die Stele von Xi'an (781) bezeugt die Mission der Kirche des Ostens seit 635. Gegen jeden Dualismus von Gut und Böse als gleichrangigen Prinzipien betonte Athanasius, dass das Böse kein eigenes Sein hat, sondern Abwendung vom Guten ist.`,
    sources: [
      { kind: 'liturgie', work: 'Anaphora des hl. Gregorius (koptisch)', quote: `Du Unsichtbarer, Unbegreiflicher, Unbeschreiblicher, Unwandelbarer …`, status: 'paraphrase', note: 'Sinngemäß nach den Gottesanreden der Gregorius-Liturgie.' },
      { kind: 'kirchenvater', author: 'Justin der Märtyrer', work: 'Zweite Apologie', ref: '13', status: 'paraphrase', quote: `Alles, was bei allen Menschen richtig gesagt wurde, gehört uns Christen; durch den eingepflanzten Samen des Logos konnten sie die Wahrheit dunkel sehen.` },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Contra Gentes', ref: '6–7', status: 'paraphrase', quote: `Das Böse ist nicht von Gott und hat kein eigenes Sein; es ist nicht ein zweites Prinzip neben dem Guten, sondern entsteht durch die Abwendung der Seele vom Guten.` },
      { kind: 'sonstiges', work: 'Stele der Kirche des Ostens in Xi\'an (Chang\'an)', year: '781', status: 'paraphrase', quote: `Bericht über die Ankunft des Missionars Alopen 635 und die Ausbreitung der „Leuchtenden Lehre" (Jingjiao) in China, formuliert mit chinesisch-daoistischem Vokabular.` },
    ],
  },
  opposingView: {
    summary: `Das Daodejing ist ein Weisheitsbuch, dessen Entstehung meist ins 4./3. Jh. v. Chr. datiert wird; die Bambustexte von Guodian (um 300 v. Chr.) enthalten bereits Teile davon. Die Geschichtlichkeit eines Verfassers Laozi ist unsicher. Das Dao wird als namenloser, ungeschiedener Ursprung beschrieben, der „vor Himmel und Erde" war (Kap. 25) und aus dem „die zehntausend Dinge" hervorgehen (Kap. 42). Neben dem philosophischen Daoismus gibt es den religiösen Daoismus mit Göttern (u. a. den Drei Reinen), Ritualen und Unsterblichkeitspraktiken. Westliche Popularisierungen wie Capras „Tao der Physik" werden von vielen Physikern als poetische Überdehnung kritisiert.`,
    sources: [
      { kind: 'oestlich', work: 'Daodejing', ref: 'Kap. 1', original: '道可道，非常道；名可名，非常名。', quote: `Das Dao, das man aussprechen kann, ist nicht das ewige Dao; der Name, den man nennen kann, ist nicht der ewige Name.`, translation: 'eigene Übersetzung', status: 'verbatim' },
      { kind: 'oestlich', work: 'Daodejing', ref: 'Kap. 25', original: '有物混成，先天地生。… 吾不知其名，字之曰道。', quote: `Es gibt etwas ungeschieden Vollendetes, das vor Himmel und Erde entstand … Ich kenne seinen Namen nicht; ich nenne es Dao.`, translation: 'eigene Übersetzung', status: 'verbatim' },
      { kind: 'oestlich', work: 'Daodejing', ref: 'Kap. 5', original: '天地不仁，以萬物為芻狗。', quote: `Himmel und Erde sind nicht menschenfreundlich; sie behandeln die zehntausend Dinge wie Strohhunde (Opferfiguren, die nach dem Ritus weggeworfen werden).`, translation: 'eigene Übersetzung', status: 'verbatim' },
      { kind: 'oestlich', work: 'Daodejing', ref: 'Kap. 67', original: '我有三寶，持而保之：一曰慈，二曰儉，三曰不敢為天下先。', quote: `Ich habe drei Schätze, die ich bewahre: Der erste heißt Barmherzigkeit, der zweite Genügsamkeit, der dritte: nicht wagen, der Erste unter dem Himmel zu sein.`, translation: 'eigene Übersetzung', status: 'verbatim' },
    ],
  },
  quickAnswer: `Ich teile die Ehrfurcht des Daodejing: Gottes Wesen übersteigt alle Namen – das sagen auch die Kirchenväter. Aber „jenseits unserer Begriffe" heißt nicht „unpersönlich". Was über dem Personsein steht, muss mehr sein als eine Person, nicht weniger – ein Stein steht auch „jenseits der Person", aber nach unten. Das Christentum sagt: Gott ist mehr als eine Person – drei Personen in einem Wesen, ewige Liebe. Und die chinesische Bibel sagt es wunderbar: „Im Anfang war das Dao … und das Dao wurde Fleisch." Das Dao, das Laozi suchte, hat ein Gesicht.`,
  keyPoints: [
    `**Gemeinsam: die Unbegreiflichkeit.** Die negative Theologie der Väter und Daodejing 1 sind sich nahe: Gottes Wesen übersteigt jeden Namen.`,
    `**Überpersönlich heißt nicht unpersönlich:** Erkennen, Wollen und Lieben sind Vollkommenheiten, keine Begrenzungen. Die Trinität ist Personsein ohne Begrenzung (C. S. Lewis: „Beyond Personality").`,
    `**Ein gleichgültiger Grund?** „Himmel und Erde behandeln die Dinge wie Strohhunde" (Kap. 5) – doch Kap. 67 preist Barmherzigkeit als ersten Schatz. Woher kommt Barmherzigkeit, wenn der Grund gleichgültig ist?`,
    `**Yin und Yang sind nicht Gut und Böse:** Ergänzende Gegensätze gehören zur guten Schöpfung; Grausamkeit ist aber nicht der notwendige Zwilling der Güte. Das Böse ist Verderbnis, kein Prinzip (Athanasius).`,
    `**Das Dao wurde Fleisch:** Joh 1,1.14 im Chinesischen ist eine Brücke: Das Ewige, Namenlose hat sich in Jesus gezeigt – „Ich bin der Weg".`,
    `**Physik und Dao:** Die mathematische Ordnung der Natur verweist eher auf einen vernünftigen Logos als auf mystische Parallelen.`,
  ],
  voices: [
    {
      person: 'johannes-apostel',
      role: 'als Evangelist des Logos',
      text: `Johannes greift einen Begriff auf, der in seiner Welt das vernünftige Grundprinzip des Kosmos bezeichnen konnte – den Logos –, und füllt ihn mit dem Glauben Israels und dem Ereignis Christi: Der Logos ist ewig bei Gott, ist Gott, durch ihn ist alles geschaffen, in ihm ist das Leben und das Licht der Menschen. Und dann der unerhörte Satz: Er wurde Fleisch. Dass chinesische Übersetzer dafür „Dao" wählten, zeigt die Weite dieses Prologs: Was die Weisen ahnten, ist in Jesus Person geworden.`,
      sources: [
        { kind: 'bibel', work: 'Johannes', ref: '1,3–4', quote: `Alle Dinge sind durch dasselbe gemacht, und ohne dasselbe ist nichts gemacht, was gemacht ist. In ihm war das Leben, und das Leben war das Licht der Menschen.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
    },
    {
      person: 'justin',
      role: 'als Lehrer vom „Samen des Logos"',
      text: `Justin sah in den Weisen der Völker Menschen, die durch den „Samen des Logos" Teilwahrheiten erkannten. Christen müssen das Daodejing darum nicht verachten: Seine Ahnung eines namenlosen Ursprungs vor Himmel und Erde und sein Lob der Sanftmut und Demut haben Wahres erfasst. Aber für Justin ist Christus der ganze Logos – die Fülle, auf die alle Teilwahrheiten hinweisen.`,
      sources: [
        { kind: 'kirchenvater', author: 'Justin der Märtyrer', work: 'Zweite Apologie', ref: '10; 13', status: 'paraphrase' },
      ],
    },
    {
      person: 'cs-lewis',
      role: 'als Denker des „Tao" und der Dreieinigkeit',
      text: `C. S. Lewis verwendete in *Die Abschaffung des Menschen* (1943) bewusst das Wort „Tao" für das allen großen Kulturen gemeinsame Sittengesetz und sammelte Belege aus China, Indien, Ägypten, Babylon und der Bibel. Für Lewis ist dieses moralische „Tao" kein unpersönlicher Mechanismus, sondern ein Hinweis auf den Gesetzgeber hinter dem Gesetz. Und in *Pardon, ich bin Christ* überschrieb er das Buch über die Dreieinigkeit mit „Jenseits der Persönlichkeit": Gott ist nicht weniger, sondern mehr als eine Person.`,
      sources: [
        { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'The Abolition of Man (dt. Die Abschaffung des Menschen)', year: '1943', status: 'paraphrase', quote: `Das „Tao" als die allen Kulturen gemeinsame Lehre objektiver Werte; Anhang mit Belegen aus vielen Traditionen.` },
        { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Mere Christianity', ref: 'Buch IV („Beyond Personality")', year: '1952', status: 'paraphrase', quote: `Gott ist nicht unpersönlich, sondern mehr als persönlich: drei Personen in einem Wesen.` },
      ],
    },
    {
      person: 'james-legge',
      role: 'als Sinologe und Übersetzer der chinesischen Klassiker',
      text: `James Legge übersetzte sowohl die konfuzianischen Klassiker als auch die daoistischen Texte ins Englische. Er unterschied sorgfältig zwischen dem unpersönlichen Dao der Daoisten und dem persönlichen Shangdi („Herrscher in der Höhe") der ältesten chinesischen Klassiker, den er mit dem Gott der Bibel identifizierte. Damit zeigte er, dass die chinesische Überlieferung selbst nicht nur ein unpersönliches Prinzip kennt, sondern auch einen persönlichen höchsten Gott.`,
      sources: [
        { kind: 'fachliteratur', author: 'James Legge', work: 'The Texts of Taoism (Sacred Books of the East, Bd. 39–40)', year: '1891', status: 'paraphrase' },
        { kind: 'fachliteratur', author: 'James Legge', work: 'The Notions of the Chinese concerning God and Spirits', year: '1852', status: 'paraphrase' },
      ],
    },
    {
      person: 'athanasius',
      role: 'als Kritiker des Dualismus',
      text: `Athanasius wendet sich gegen Lehren, die Gut und Böse als zwei gleichrangige Prinzipien verstehen. Das Böse hat für ihn kein eigenes Sein; es ist Abwendung des freien Geschöpfes vom Guten, so wie Dunkelheit Abwesenheit von Licht ist. Darum ist das Christentum nicht dualistisch: Es kennt keinen ewigen Kampf zweier Mächte, sondern den einen guten Schöpfer, dessen Schöpfung durch die Sünde verwundet und in Christus geheilt wird.`,
      sources: [
        { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Contra Gentes', ref: '6–7', status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'unnennbares-dao',
      objection: `„Das Dao, das man benennen kann, ist nicht das ewige Dao." Ein persönlicher Gott ist eine menschliche Verkleinerung des Unnennbaren.`,
      objectionBy: 'Alan Watts',
      answer: `Dass Gottes Wesen alle Namen übersteigt, sagen auch die Kirchenväter. Aber „jenseits unserer Begriffe" heißt nicht „unpersönlich". Wenn die letzte Wirklichkeit jenseits des Personseins steht, dann muss sie mehr als persönlich sein, nicht weniger – auch ein Stein steht „jenseits der Person", aber unterhalb. Das Christentum sagt: Gott ist mehr als eine Person – drei Personen in einem Wesen.`,
      followUps: [
        {
          id: 'person-ist-begrenzung',
          objection: `Person heißt Begrenzung: ein Ich gegenüber einem Du. Das Absolute kann nicht begrenzt sein.`,
          objectionBy: 'Alan Watts',
          answer: `Person heißt zuerst: erkennen, wollen, lieben. Das sind keine Begrenzungen, sondern Vollkommenheiten. Ein Prinzip ohne Erkenntnis und Liebe hätte gerade einen Mangel. Die Dreieinigkeit zeigt, wie Personsein ohne Begrenzung möglich ist: Ich und Du gibt es innerhalb des einen unendlichen Gottes, als ewige Beziehung der Liebe.`,
          followUps: [
            {
              id: 'wu-wei-ohne-absicht',
              objection: `Das Dao „weiß" nicht und „liebt" nicht – es wirkt spontan, ohne Absicht (wu wei, ziran). Gerade das ist vollkommen.`,
              objectionBy: 'Alan Watts (sinngemäß)',
              answer: `Dann gleicht das Dao der Schwerkraft – man kann ihm nicht vertrauen, es nicht ansprechen und nicht lieben. Das Daodejing sagt selbst: Himmel und Erde behandeln die Dinge „wie Strohhunde" (Kap. 5). Ist Gleichgültigkeit das Höchste? Und doch nennt dasselbe Buch Barmherzigkeit den ersten der drei Schätze (Kap. 67). Woher kommt Barmherzigkeit, wenn der Grund aller Dinge gleichgültig ist?`,
              followUps: [
                {
                  id: 'mitgefuehl-natuerlich',
                  objection: `Mitgefühl ist einfach ein Teil der natürlichen Harmonie.`,
                  objectionBy: 'Alan Watts (sinngemäß)',
                  answer: `Grausamkeit gehört dann aber ebenso zur „natürlichen" Welt – das Raubtier, die Seuche. Wenn beides gleich natürlich ist, kann die Natur nicht sagen, was ich wählen soll. Dass wir urteilen können „Barmherzigkeit ist besser als Grausamkeit", verweist auf einen Maßstab über der Natur – C. S. Lewis nannte ihn das „Tao" – und ein moralisches Gesetz verweist auf einen Gesetzgeber.`,
                  questionsBack: [`Wenn Mitgefühl und Grausamkeit gleich „natürlich" sind – warum sollte ich Mitgefühl wählen?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'chinesische-bibel-dao',
      objection: `Sogar eure chinesische Bibel übersetzt Joh 1,1 mit „Im Anfang war das Dao". Also ist Christus nur eine Erscheinungsform des Dao.`,
      objectionBy: 'Alan Watts (sinngemäß)',
      answer: `Diese Übersetzung ist eine schöne Brücke: Christen erkannten im Dao einen Widerhall des Logos. Aber Johannes sagt sofort weiter: Das Dao war **bei Gott** und **war Gott**, durch es ist alles geschaffen, in ihm ist das Leben – und „das Dao wurde Fleisch … voller Gnade und Wahrheit" (Joh 1,14). Johannes macht Christus nicht zu einer Form des Dao; er sagt, dass das Dao, das die Weisen suchten, ein Gesicht und einen Namen hat.`,
      followUps: [
        {
          id: 'vereinnahmung',
          objection: `Das ist eine christliche Vereinnahmung chinesischer Begriffe.`,
          objectionBy: 'Alan Watts (sinngemäß)',
          answer: `Jede Übersetzung benutzt vorhandene Wörter – sonst könnte man gar nicht übersetzen. Christen in China taten das schon sehr früh: Die Stele von Xi'an aus dem Jahr 781 bezeugt die Mission der Kirche des Ostens seit 635 in chinesischer Sprache. Wir behaupten nicht, Laozi sei Christ gewesen. Wir sagen mit Justin: Wo Wahrheit aufleuchtete, kam sie vom Logos, „der alle Menschen erleuchtet" (Joh 1,9).`,
        },
      ],
    },
    {
      id: 'yin-yang-gut-boese',
      objection: `Yin und Yang zeigen: Gut und Böse sind Pole einer Harmonie. Euer Kampf Gut gegen Böse ist dualistisch und erzeugt nur Konflikte.`,
      objectionBy: 'Alan Watts / Fritjof Capra',
      answer: `Ergänzende Gegensätze – Licht und Dunkel, Ruhe und Bewegung, Mann und Frau – gehören zur guten Schöpfung (Gen 1). Aber moralisch Böses ist kein ergänzender Pol: Grausamkeit ist nicht der notwendige Zwilling der Güte. Das Christentum ist auch nicht dualistisch: Das Böse ist kein ewiges Prinzip, sondern Verderbnis des Guten (Athanasius). Und selbst das Daodejing urteilt: Waffen sind Werkzeuge des Unheils (Kap. 31).`,
      followUps: [
        {
          id: 'wer-kaempft-wird-boese',
          objection: `Wer gegen das Böse kämpft, wird selbst böse. Nicht-Eingreifen (wu wei) ist weiser.`,
          objectionBy: 'Alan Watts (sinngemäß)',
          answer: `Im Nicht-Erzwingen liegt Weisheit – Jesus lehrt, nicht Böses mit Bösem zu vergelten (Mt 5,39). Aber Passivität gegenüber Völkermord oder Sklaverei ist keine Weisheit. Christus überwindet das Böse nicht durch Gleichgültigkeit, sondern durch hingebende Liebe: „Lass dich nicht das Böse überwinden, sondern überwinde das Böse mit Gutem" (Röm 12,21).`,
        },
      ],
    },
    {
      id: 'physik-bestaetigt-dao',
      objection: `Die moderne Physik bestätigt das Dao: Alles ist ein dynamisches Netz von Beziehungen, kein Ding steht für sich.`,
      objectionBy: 'Fritjof Capra',
      answer: `Viele Physiker sehen in Capras Parallelen eher poetische Überdehnung: Die Quantentheorie ist eine mathematische Theorie, keine Mystik. Und gerade die erstaunliche mathematische Beschreibbarkeit der Natur verweist eher auf einen vernünftigen Logos als auf ein namenloses, absichtsloses Prinzip (siehe den Claim zur Effektivität der Mathematik).`,
      followUps: [
        {
          id: 'gott-statischer-herrscher',
          objection: `Aber Beziehungshaftigkeit passt nicht zu eurem Gott. Der ist doch ein statischer, einsamer Herrscher.`,
          objectionBy: 'Fritjof Capra (sinngemäß)',
          answer: `Das Gegenteil ist richtig: Der christliche Gott ist in sich selbst Beziehung – Vater, Sohn und Heiliger Geist in gegenseitiger Durchdringung der Liebe. Für Christen ist Beziehung nicht nur ein Merkmal der Welt, sondern das Innerste der letzten Wirklichkeit. Ein unpersönliches Netz kennt Verbindungen; der dreieinige Gott kennt Liebe.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Ist etwas, das „jenseits der Person" steht, mehr oder weniger als eine Person?`,
    `Wenn Himmel und Erde gleichgültig sind – woher kommt dann die Barmherzigkeit, die das Daodejing als ersten Schatz preist?`,
    `Ist Grausamkeit wirklich nur der „Gegenpol" der Güte?`,
    `Was bedeutet es für dich, dass die chinesische Bibel sagt: „Das Dao wurde Fleisch"?`,
  ],
  avoid: [
    `Bezeichne Daoisten nicht als „Götzendiener" oder das Daodejing als „okkult" – es ist ein Weisheitsbuch, das auch Christen Wertvolles lehrt.`,
    `Verwende keine spekulativen Zeichendeutungen, nach denen chinesische Schriftzeichen die Genesis verschlüsselt enthalten – das ist philologisch nicht haltbar.`,
    `Behaupte nicht, „Dao" und „Logos" seien identisch – die Übersetzung ist eine Brücke, keine Gleichsetzung.`,
  ],
  concessions: [
    `Das Daodejing enthält tiefe Weisheit über Demut, Sanftmut und das Nicht-Erzwingen, die mit der Bergpredigt in manchem übereinstimmt.`,
    `Christen haben Gott manchmal tatsächlich wie einen allzu menschlichen Herrscher dargestellt – die negative Theologie der Väter ist ein wichtiges Gegengewicht.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Die Abschaffung des Menschen (The Abolition of Man)', year: '1943', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Winfried Corduan', work: 'Neighboring Faiths, Kapitel zu den chinesischen Religionen', year: '2. Aufl. 2012', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'James Legge', work: 'The Religions of China', year: '1880', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Daoismus', 'Daodejing', 'Laozi', 'Logos', 'Yin und Yang', 'Personalität Gottes'],
  related: [
    'weitere-religionen/religion-aus-animismus',
    'esoterik-new-age/alles-ist-energie-gott',
    'mathematik/effektivitaet-der-mathematik-zufall',
    'moral-und-gott/gut-ohne-gott',
    'hinduismus/atman-ist-brahman',
  ],
};

export default claim;
