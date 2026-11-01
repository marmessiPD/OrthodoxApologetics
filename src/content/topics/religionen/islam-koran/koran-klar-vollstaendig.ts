import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'koran-klar-vollstaendig',
  title: `„Der Koran ist ein klares, vollständig erklärtes Buch."`,
  proponents: [
    { name: 'Zakir Naik', role: 'Islamischer Prediger, Mumbai', work: 'Vorträge über die Vollkommenheit des Korans' },
    { name: 'Ahl al-Qur\'an („Koraniten")', role: 'Bewegung, die allein den Koran als Quelle anerkennt', work: 'u. a. Rashad Khalifa (1935–1990), Schriften und Übersetzung' },
    { name: 'Hamza Andreas Tzortzis', role: 'Islamischer Autor', work: 'The Divine Reality (2016)' },
  ],
  steelman: `„Der Koran beschreibt sich selbst als ‚klares Buch' (12:1), ‚ausführlich dargelegt' (6:114), als ‚Darlegung aller Dinge' (16:89), und Gott sagt: ‚Wir haben im Buch nichts ausgelassen' (6:38) und ‚Wir haben den Koran leicht gemacht zum Bedenken' (54:17). Anders als die Bibel, über deren Auslegung sich Tausende Konfessionen streiten, braucht der Koran keinen Klerus und keine geheimnisvolle Tradition: Jeder Gläubige kann ihn verstehen. Das ist ein Zeichen seiner göttlichen Herkunft – Gott spricht klar zu den Menschen."`,
  biblical: {
    summary: `Der Koran selbst unterscheidet in 3:7 zwischen „eindeutigen" (*muḥkamāt*) und „mehrdeutigen" (*mutashābihāt*) Versen und sagt, „ihre Deutung kennt niemand außer Allah" – ob danach auch „die im Wissen Gefestigten" sie kennen, hängt davon ab, wo man den Satz trennt, und ist seit jeher umstritten. 29 Suren beginnen mit Buchstabenfolgen (*al-ḥurūf al-muqaṭṭaʿa*, z. B. „Alif Lam Mim"), deren Bedeutung niemand sicher kennt. Grundlegende Praktiken des Islam – die Zahl der täglichen Gebete, ihr Ablauf, die Sätze der Pflichtabgabe – stehen nicht im Koran, sondern in der Sunna. Viele Verse sind ohne Offenbarungsanlässe (*asbāb an-nuzūl*) und Hadithe kaum verständlich. Die Bibel beansprucht dagegen nicht, ohne Auslegung in der Gemeinschaft verständlich zu sein: „Wie kann ich, so mich nicht jemand anleitet?" (Apg 8,31).`,
    detail: `**Beispiele für Abhängigkeit von außerkoranischem Wissen:**
- **Gebete:** Der Koran nennt Gebetszeiten nur andeutungsweise (11:114; 17:78; 30:17–18); die Fünfzahl stammt aus der Sunna, etwa dem Bericht von der Himmelsreise (Sahih al-Bukhari 349: von fünfzig auf fünf Gebete).
- **Anspielungen ohne Erklärung:** 66:1–5 (was hatte der Prophet sich verboten, und welche Frauen sind gemeint?), 2:258 (wer stritt mit Abraham?), 18:65 (der namenlose „Diener", später al-Khidr genannt), Sure 105 (die „Leute des Elefanten").
- **Abrogation:** Welcher Vers welchen aufhebt, sagt der Koran nicht; dafür braucht man Überlieferungen über die Reihenfolge der Offenbarung.

**Die koranitische Bewegung** (*Ahl al-Qurʾān*), die nur den Koran gelten lässt, zeigt das Problem besonders deutlich: Ohne Hadith kommt sie bei Gebet, Fasten und Pflichtabgabe zu anderen Ergebnissen als die große Mehrheit der Muslime.`,
    sources: [
      { kind: 'koran', work: 'Sure 3 (Al \'Imran)', ref: '3:7', quote: `Er ist es, Der das Buch auf dich herabgesandt hat. Darin sind eindeutige Verse – sie sind der Kern des Buches – und andere, mehrdeutige … Doch ihre Deutung kennt niemand außer Allah. Und die im Wissen Gefestigten sagen: „Wir glauben daran."`, original: `minhu āyātun muḥkamātun hunna ummu l-kitābi wa-ukharu mutashābihāt … wa-mā yaʿlamu taʾwīlahu illā llāh wa-r-rāsikhūna fī l-ʿilm`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/3/7', note: 'Ob „und die im Wissen Gefestigten" zum vorigen Satz gehört (sie kennen die Deutung auch) oder einen neuen Satz beginnt, ist klassisch umstritten.' },
      { kind: 'koran', work: 'Sure 16 (an-Nahl)', ref: '16:89', quote: `Und Wir haben dir das Buch herabgesandt als Darlegung aller Dinge und als Rechtleitung, Barmherzigkeit und frohe Botschaft für die (Allah) Ergebenen.`, original: `tibyānan li-kulli shayʾ`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/16/89' },
      { kind: 'koran', work: 'Sure 6 (al-An\'am)', ref: '6:114', quote: `Soll ich denn einen anderen Richter als Allah begehren, wo Er es doch ist, Der euch das Buch ausführlich dargelegt herabgesandt hat?`, original: `wa-huwa lladhī anzala ilaykumu l-kitāba mufaṣṣalan`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/6/114' },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '8,30–31', quote: `Philippus fragt den Kämmerer aus Äthiopien: „Verstehst du auch, was du liesest?" Er aber sprach: „Wie kann ich, so mich nicht jemand anleitet?"`, translation: 'Luther 1912', status: 'paraphrase' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche liest die Schrift in der Kirche: mit den Vätern, der Liturgie und den Konzilien. Der hl. Athanasius nennt die heiligen und inspirierten Schriften genügend zur Verkündigung der Wahrheit – und verweist zugleich auf die Schriften der seligen Lehrer, die sie auslegen. Die Schrift ist in ihrer Heilsbotschaft klar (Ps 119,105), enthält aber auch Schweres, das Unkundige verdrehen (2 Petr 3,16). Darum braucht sie die lebendige Überlieferung der Kirche. Diese Haltung ist ehrlicher als der Anspruch, ein heiliger Text erkläre sich ohne jede Tradition selbst.`,
    sources: [
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Gegen die Heiden (Contra Gentes)', ref: '1', year: 'um 335', quote: `Die heiligen und gottgehauchten Schriften genügen zur Verkündigung der Wahrheit; es gibt aber auch viele Schriften unserer seligen Lehrer, durch die man ihre Auslegung erlernen kann.`, status: 'paraphrase' },
      { kind: 'bibel', work: 'Psalm', ref: '119,105', quote: `Dein Wort ist meines Fußes Leuchte und ein Licht auf meinem Wege.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  quickAnswer: `Der Koran sagt selbst, dass er eindeutige und mehrdeutige Verse enthält, deren Deutung nur Gott kennt (3:7), und niemand weiß sicher, was „Alif Lam Mim" bedeutet. Wie oft und wie Muslime beten, steht nicht im Koran, sondern in der Sunna. Der Koran braucht also Überlieferung und Gelehrte – genau wie die Bibel die Kirche braucht. Das ist keine Schande, aber es widerlegt den Anspruch, er sei ohne Tradition vollständig verständlich.`,
  keyPoints: [
    `**3:7 selbst:** eindeutige und mehrdeutige Verse; „ihre Deutung kennt nur Allah".`,
    `**Unverstandene Buchstaben:** 29 Suren beginnen mit Buchstabenfolgen ungeklärter Bedeutung.`,
    `**Zentrale Praxis nicht im Koran:** Fünf tägliche Gebete, Gebetsablauf, Sätze der Pflichtabgabe stammen aus der Sunna (z. B. Bukhari 349).`,
    `**Abhängigkeit von Kontextwissen:** Offenbarungsanlässe, Abrogation, Personen und Ereignisse, auf die nur angespielt wird.`,
    `**Ehrlicher Vergleich:** Auch Islam hat Strömungen und Rechtsschulen; die Kirche sagt offen, dass die Schrift in der Überlieferung gelesen wird.`,
  ],
  voices: [
    {
      person: 'athanasius',
      role: 'als Lehrer der Schrift in Alexandrien',
      text: `Athanasius hält die Schrift für ausreichend, um die Wahrheit zu verkünden, und verweist doch auf die Auslegung der Väter. Für ihn sind beide kein Gegensatz: Die Schrift ist Gottes Wort, die Kirche liest sie im Glauben, den die Apostel überliefert haben. Gegen die Arianer, die mit Bibelversen argumentierten, betonte er, dass es nicht genügt, Verse zu zitieren – man muss den „Skopus", das Ziel und den Sinn der ganzen Schrift erfassen.`,
      sources: [
        { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Reden gegen die Arianer', ref: 'III,28–29', year: 'um 340', quote: `Der „Skopus" (Zielsinn) der Schrift muss erfasst werden, um einzelne Stellen richtig zu verstehen.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'gabriel-reynolds',
      role: 'als Koranforscher',
      text: `Reynolds zeigt, dass der Koran vielfach anspielt, statt zu erzählen: Er setzt voraus, dass seine Hörer die Geschichten von Noah, Abraham, Mose oder Maria schon kennen. Deshalb ist er ohne Kenntnis der biblischen und nachbiblischen Überlieferung oft schwer verständlich. Spätere muslimische Kommentatoren füllten diese Lücken mit Erzählungen – zum Teil aus jüdischen und christlichen Quellen (*isrāʾīliyyāt*).`,
      sources: [
        { kind: 'fachliteratur', author: 'Gabriel Said Reynolds', work: 'The Qur\'an and Its Biblical Subtext', year: '2010', quote: `Der Koran als anspielender Text, der ein mit biblischen Traditionen vertrautes Publikum voraussetzt.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'jay-smith',
      role: 'als Debattierer über die islamischen Quellen',
      text: `Jay Smith weist darauf hin, dass ein großer Teil dessen, was Muslime über den Kontext des Korans und das Leben Mohammeds wissen, aus Hadith- und Biografiesammlungen stammt, die rund 150 bis 250 Jahre nach Mohammed zusammengestellt wurden. Wer den Koran für „vollständig erklärt" hält, verlässt sich in der Praxis auf diese späteren Quellen – ohne sie oft kritisch zu prüfen.`,
    },
    {
      person: 'tadros-malaty',
      role: 'als koptischer Ausleger in der Tradition der Väter',
      text: `Vater Tadros Malaty legt die ganze Schrift im Licht der Väter aus und zeigt damit, wie die koptische Kirche liest: nicht als einzelne Leser, die aus dem Text herausholen, was ihnen gefällt, sondern als Gemeinschaft, die das überlieferte Verständnis der Kirche aufnimmt. Darin liegt kein Eingeständnis von Unklarheit, sondern die Einsicht, dass Gottes Wort in der Kirche lebendig ausgelegt wird.`,
      sources: [
        { kind: 'koptisch', author: 'Tadros Y. Malaty', work: 'Patristischer Kommentar zur Heiligen Schrift', quote: `Auslegung der Schrift durchgehend mit den Kirchenvätern.`, status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'ausfuehrlich-erklaert-6-114',
      objection: `Der Koran sagt, er ist „ausführlich dargelegt" (6:114) und „eine Darlegung aller Dinge" (16:89). Er braucht keine Ergänzung.`,
      objectionBy: 'Zakir Naik',
      answer: `Derselbe Koran sagt in 3:7, dass er mehrdeutige Verse enthält, deren Deutung nur Gott kennt. Und 29 Suren beginnen mit Buchstaben wie „Alif Lam Mim", deren Bedeutung bis heute niemand sicher weiß. Wenn „ausführlich dargelegt" heißen soll, dass alles klar ist, widerspricht ihm 3:7.`,
      followUps: [
        {
          id: 'mutashabihat-nur-verborgenes',
          objection: `Die mehrdeutigen Verse betreffen nur Gottes Eigenschaften und das Verborgene. Alles, was wir für unser Leben brauchen, ist klar.`,
          objectionBy: 'klassische Auslegung',
          answer: `Dann ist der Koran nicht in *allem* klar, sondern in dem, was die Gelehrten als notwendig bestimmen. Und schon über 3:7 selbst sind die Gelehrten uneins: Endet der Satz bei „außer Allah", oder kennen auch die „im Wissen Gefestigten" die Deutung? Selbst der Vers über die Mehrdeutigkeit ist also mehrdeutig.`,
          followUps: [
            {
              id: 'gelehrte-kennen-deutung',
              objection: `Die im Wissen Gefestigten – die Gelehrten – kennen die Deutung. Man muss eben die Gelehrten fragen.`,
              objectionBy: 'Yasir Qadhi',
              answer: `Dann ist der Koran für den einfachen Gläubigen nicht aus sich heraus klar; er braucht Gelehrte, Tradition und Auslegung. Das ist genau das, was die orthodoxe Kirche über die Bibel sagt – und was Muslime den Kirchen oft vorwerfen. Wir sind uns also einig: Ein heiliger Text wird in einer Gemeinschaft und mit Lehrern verstanden.`,
            },
          ],
        },
      ],
    },
    {
      id: 'hadith-erklaert-nur',
      objection: `Die Hadithe erklären nur, was im Koran schon steht. Der Koran ist die Grundlage, die Sunna ist nur die Anwendung.`,
      objectionBy: 'Yasir Qadhi',
      answer: `Dann zeig mir im Koran, dass Muslime fünfmal täglich beten sollen und wie viele Gebetseinheiten jedes Gebet hat. Der Koran deutet Gebetszeiten an (11:114; 17:78), aber die Fünfzahl kommt aus der Sunna, etwa aus dem Bericht über die Himmelsreise, in dem die Gebete von fünfzig auf fünf reduziert werden (Bukhari 349). Ohne diese Überlieferung wüsstest du nicht, wie du betest.`,
      sources: [
        { kind: 'hadith', work: 'Sahih al-Bukhari', ref: '349', quote: `Bericht von der Himmelsreise: Fünfzig Gebete werden auferlegt und auf Anraten Moses schrittweise auf fünf verringert.`, status: 'paraphrase', url: 'https://sunnah.com/bukhari:349' },
      ],
      followUps: [
        {
          id: 'fuenf-gebete-im-koran',
          objection: `Die fünf Gebete werden doch angedeutet: 11:114, 17:78 und 30:17–18 nennen zusammen alle Zeiten.`,
          objectionBy: 'verbreitete Erklärung',
          answer: `Man kann diese Verse so zusammenlesen – aber nur, weil man die Fünfzahl schon aus der Sunna kennt. Koraniten, die nur den Koran gelten lassen, kommen aus denselben Versen auf zwei oder drei Gebete. Das zeigt: Der Koran allein legt die Praxis nicht eindeutig fest. Und die Hadithsammlungen entstanden rund zweihundert Jahre nach Mohammed.`,
        },
      ],
    },
    {
      id: 'bibel-tausende-konfessionen',
      objection: `Die Bibel ist doch viel unklarer – ihr habt Tausende Konfessionen, die sich über alles streiten. Der Koran eint die Muslime.`,
      objectionBy: 'Zakir Naik',
      answer: `Die vielen Konfessionen sind vor allem eine Folge des Grundsatzes „allein die Schrift", nach dem jeder selbst auslegt. Die orthodoxe Kirche lehnt diesen Grundsatz ab: Wir lesen die Schrift mit den Vätern und der Liturgie – und unser Glaube ist seit Nizäa derselbe. Und auch der Islam kennt Sunniten, Schiiten und Ibaditen, vier sunnitische Rechtsschulen, Ahmadiyya und Koraniten. Ein Text allein eint keine Gemeinschaft.`,
      detail: `Siehe Claim „Nur die Bibel ist Autorität (Sola Scriptura)" im Topic „Schrift und Tradition" – dort wird die koptisch-orthodoxe Sicht auf Schrift und Überlieferung ausführlich dargestellt.`,
      followUps: [
        {
          id: 'islamische-spaltung-nur-politisch',
          objection: `Die Spaltung zwischen Sunniten und Schiiten war politisch – um die Nachfolge –, nicht wegen Unklarheit des Korans.`,
          objectionBy: 'Mohammed Hijab',
          answer: `Zum Teil, ja. Aber die Rechtsschulen unterscheiden sich in der Auslegung konkreter Koranverse – etwa zur rituellen Waschung (5:6) oder zu Ehe und Erbrecht. Und auch christliche Spaltungen hatten oft politische Gründe. Mein Punkt ist bescheiden: Weder Bibel noch Koran werden ohne Auslegungsgemeinschaft einheitlich verstanden. Darum ist „Klarheit" kein Beweis für göttliche Herkunft.`,
          sources: [
            { kind: 'koran', work: 'Sure 5 (al-Ma\'ida)', ref: '5:6', quote: `… so wascht euch das Gesicht und die Hände bis zu den Ellenbogen und streicht euch über den Kopf und (wascht) die Füße bis zu den Knöcheln.`, original: `wa-msaḥū bi-ruʾūsikum wa-arjulakum`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/5/6', note: 'Je nach Lesart (arjulakum / arjulikum) waschen (Sunniten) oder bestreichen (Zwölferschiiten) der Füße.' },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Was bedeutet „Alif Lam Mim"?`,
    `Wo steht im Koran, dass Muslime fünfmal täglich beten sollen?`,
    `Wie verstehst du 3:7 – kennen die Gelehrten die Deutung der mehrdeutigen Verse oder nicht?`,
    `Wenn du Gelehrte brauchst, um den Koran zu verstehen – warum wirfst du Christen vor, die Väter zu brauchen?`,
  ],
  avoid: [
    `Nicht behaupten, der Koran sei „unverständlich" oder „chaotisch". Viele Verse sind klar; es geht um den Anspruch der *vollständigen* Selbsterklärung.`,
    `Nicht mit protestantischer Logik argumentieren („jeder versteht die Bibel selbst") – das widerspricht der koptisch-orthodoxen Sicht und schwächt deine Position.`,
  ],
  concessions: [
    `Die Grundbotschaft des Korans (Einheit Gottes, Gericht, Propheten) ist für Muslime klar und leicht zugänglich.`,
    `Auch die Bibel enthält schwer verständliche Stellen (2 Petr 3,16) und wird in der Kirche mit Lehrern ausgelegt.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Gabriel Said Reynolds', work: 'The Qur\'an and Its Biblical Subtext', year: '2010', status: 'paraphrase' },
    { kind: 'gegner', author: 'Yasir Qadhi', work: 'An Introduction to the Sciences of the Qur\'aan', year: '1999', status: 'paraphrase' },
    { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Gegen die Heiden (Contra Gentes)', year: 'um 335', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Koran', 'Klarheit', 'Hadith', 'Tradition', 'Islam'],
  related: [
    'islam-koran/koran-widerspruchsfrei',
    'islam-koran/koran-perfekt-bewahrt',
    'sola-scriptura/nur-die-bibel',
    'sola-scriptura/jeder-legt-selbst-aus',
  ],
};

export default claim;
