import type { Topic } from '../../../schema.ts';
import alleinDurchGlauben from './allein-durch-glauben.ts';
import einmalGerettet from './einmal-gerettet-immer-gerettet.ts';
import werkeSindWerkgerechtigkeit from './werke-sind-werkgerechtigkeit.ts';
import wiedergeburtDurchEntscheidung from './wiedergeburt-durch-entscheidung.ts';

const topic: Topic = {
  id: 'sola-fide',
  category: 'konfessionen',
  group: 'Protestantismus',
  order: 2,
  title: `Glaube, Werke und Heil`,
  subtitle: `Sola Fide, Heilsgewissheit, Werke und Wiedergeburt aus koptisch-orthodoxer Sicht`,
  icon: 'heart-handshake',
  overview: `„Bist du gerettet?" – Mit dieser Frage beginnen viele Gespräche zwischen evangelikalen Christen und Kopten. Dahinter steht das reformatorische Prinzip *Sola Fide*: Der Mensch wird allein durch den Glauben gerechtfertigt, ohne Werke; die Gerechtigkeit Christi wird ihm zugerechnet; gute Werke folgen als Frucht und Dank. Für Luther war das der „Artikel, mit dem die Kirche steht und fällt". Daraus folgen in vielen Gemeinden weitere Lehren: die Heilsgewissheit („einmal gerettet, immer gerettet") und die Wiedergeburt durch eine persönliche Entscheidung.

Die stärksten Vertreter – R. C. Sproul, James White, John MacArthur, John Piper, Michael Horton – sind keine Verfechter eines billigen Glaubens. MacArthur und Sproul betonen, dass echter Glaube Werke hervorbringt (Calvin: „Allein der Glaube rechtfertigt, aber der Glaube, der rechtfertigt, ist nicht allein"). Der Streit liegt tiefer: Ist Rechtfertigung ein reiner Rechtsspruch (Zurechnung) oder wirkliche Erneuerung? Sind Werke nur Beweis oder Teil des lebendigen Glaubens? Kann man das Heil verlieren?

Die koptisch-orthodoxe Antwort ist weder „Glaube allein" noch „Verdienst durch Werke": Das Heil ist ganz Gnade – geschenkt durch Menschwerdung, Kreuz und Auferstehung Christi. Es wird empfangen durch einen lebendigen Glauben, der durch die Liebe tätig ist (Gal 5,6), in der Taufe, im Leben der Buße und der Sakramente, in der Mitwirkung mit der Gnade (Synergie) und im Beharren bis ans Ende. Heil ist Heilung und Gemeinschaft mit Gott – „Er wurde Mensch, damit wir vergöttlicht würden" (Athanasius). Grundlegend ist Papst Schenudas III. *Das Heil im orthodoxen Verständnis*.`,
  strategy: `**1. Mit der Gnade beginnen.** Sag zuerst klar: „Ich glaube, dass niemand sich das Heil verdienen kann. Es ist ganz Gnade (Eph 2,8–9)." Damit nimmst du dem Gegenüber das Hauptvorurteil.

**2. Die Antwort auf „Bist du gerettet?"** Mit Schenuda III. dreifach antworten: „Ich *wurde* gerettet (in der Taufe, Tit 3,5), ich *werde* gerettet (1 Kor 1,18) und ich hoffe, gerettet zu *werden*, wenn ich bis ans Ende beharre (Mt 24,13)." Das ist biblisch, ruhig und eröffnet das Gespräch.

**3. Die Schlüsselstellen in dieser Reihenfolge:**
- Jak 2,24 – die einzige Stelle mit „Glaube allein": „nicht durch den Glauben allein".
- Röm 3,28–30 – das „allein" ist Luthers Zusatz; V. 29 zeigt den Kontext Juden/Heiden.
- Gal 5,6 – „der Glaube, der durch die Liebe tätig ist".
- Mt 25,31–46; Röm 2,6–7 – das Gericht nach den Werken.
- Phil 2,12–13; 1 Kor 3,9 – Mitwirkung mit der Gnade.

**4. Positionen unterscheiden.** Frage nach: Vertritt dein Gegenüber die reformierte Sicht (MacArthur, Sproul) oder die „Free Grace"-Sicht (Charles Stanley)? Bei Reformierten liegt der Streit bei „Bedingung oder Beweis", bei Free Grace beim Abfall.

**5. Die Taufe ins Spiel bringen.** Zeige, dass Glaube und Taufe im NT immer zusammengehören (Apg 2,38; Gal 3,26–27; 1 Petr 3,21). Damit wird die Frage der Wiedergeburt klar.

**Fallen:**
- Sprich nie so, als verdiene man durch Werke das Heil – das ist nicht koptische Lehre.
- Unterstelle Protestanten nicht, sie lehrten ein Leben ohne Werke.
- Gib zu, dass einige Väter die Wendung „allein durch den Glauben" benutzen (in anderem Sinn) und dass Paulus die Gnade mit großer Wucht betont.
- Verwende Mk 16,16 nicht als einzigen Beleg (Markusschluss textkritisch umstritten).
- Bleib geschwisterlich: Viele Evangelikale haben Christus in einer persönlichen Umkehr wirklich gefunden.`,
  keyOpponents: [
    { name: 'R. C. Sproul', role: 'Reformierter Theologe, Ligonier Ministries (1939–2017)', work: 'Faith Alone (1995)' },
    { name: 'James R. White', role: 'Reformierter Baptist, Alpha and Omega Ministries', work: 'The God Who Justifies (2001)' },
    { name: 'John MacArthur', role: 'Pastor, Grace Community Church; Vertreter der „Lordship Salvation"', work: 'The Gospel According to Jesus (1988)' },
    { name: 'John Piper', role: 'Reformierter Baptistenpastor', work: 'The Future of Justification (2007)' },
    { name: 'Michael S. Horton', role: 'Reformierter Theologe, Westminster Seminary California', work: 'Christless Christianity (2008)' },
    { name: 'Charles Stanley', role: 'Baptistischer Prediger (1932–2023)', work: 'Eternal Security (1990)' },
    { name: 'Martin Luther', role: 'Reformator (1483–1546)', work: 'Sendbrief vom Dolmetschen (1530); Von der Freiheit eines Christenmenschen (1520)' },
  ],
  claims: [alleinDurchGlauben, einmalGerettet, werkeSindWerkgerechtigkeit, wiedergeburtDurchEntscheidung],
};

export default topic;
