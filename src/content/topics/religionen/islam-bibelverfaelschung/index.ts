import type { Topic } from '../../../schema.ts';
import bibelTextvarianten from './bibel-textvarianten.ts';
import ehrmanBeweistVerfaelschung from './ehrman-beweist-verfaelschung.ts';
import barnabasevangelium from './barnabasevangelium.ts';
import bibelWidersprichtSich from './bibel-widerspricht-sich.ts';
import suendigePropheten from './suendige-propheten.ts';
import evangelienMenschenwort from './evangelien-menschenwort.ts';

const topic: Topic = {
  id: 'islam-bibelverfaelschung',
  category: 'religionen',
  group: 'Islam',
  order: 2,
  title: `Ist die Bibel verfälscht?`,
  subtitle: `Textvarianten, Ehrman, Barnabas, Widersprüche und sündige Propheten`,
  icon: 'book-x',
  overview: `Der Vorwurf der Bibelverfälschung (*taḥrīf*) ist das wichtigste Werkzeug muslimischer Apologetik. Seit Ahmed Deedat in den 1980er-Jahren Hallen mit Listen angeblicher Bibelwidersprüche füllte, wird er in zahllosen Variationen vorgebracht: „400.000 Textvarianten", „sogar Bart Ehrman sagt es", „das wahre Evangelium ist das Barnabasevangelium", „die Bibel verleumdet die Propheten", „die Evangelien sind nur Menschenwort". Heute greifen muslimische Debattierer wie Shabir Ally oder Mohammed Hijab vor allem auf die moderne Textkritik zurück.

Die gute Nachricht: Gerade die moderne Wissenschaft hat die Zuverlässigkeit des Bibeltextes eindrucksvoll bestätigt. Kein antiker Text ist so früh und so breit bezeugt wie das Neue Testament. Varianten gibt es viele – aber sie sind ein Zeichen für die Fülle der Handschriften, und keine verändert eine Lehre des Glaubens. Selbst der agnostische Textkritiker Bart Ehrman räumt das ein.

Dieser Themenblock ergänzt das **Islamische Dilemma**: Dort wird gezeigt, dass der Koran selbst die Bibel seiner Zeit bestätigt. Hier werden die Einzelvorwürfe geprüft, mit denen Muslime die Bibel entwerten wollen – fair, mit ehrlichen Zugeständnissen, wo sie berechtigt sind.`,
  strategy: `**Grundhaltung:** Nimm jeden Einwand ernst und antworte sachlich. Viele Muslime haben die Vorwürfe nur gehört, nicht geprüft. Ein ruhiges „Lass uns die Stelle gemeinsam ansehen" überzeugt mehr als jede Gegenattacke.

**Reihenfolge im Gespräch:**
1. **Klären, was gemeint ist.** „Verfälscht" heißt bei Varianten etwas anderes als bei „Paulus hat alles verändert". Frage: „Welche Lehre wurde verändert – und wann?"
2. **Die Natur der Varianten erklären** (Rechtschreibung, Wortstellung; unter 1 % sinnvoll und ursprungsverdächtig; keine Lehre betroffen). Nenne Ehrmans Zugeständnis.
3. **Zum Islamischen Dilemma überleiten:** „Selbst wenn es Varianten gibt – die Bibel des 7. Jahrhunderts lehrte die Kreuzigung. Was sagt der Koran über diese Bibel?"
4. **Gleiche Maßstäbe einfordern** – aber erst am Schluss und ohne Triumph: Wenn Varianten die Bibel entwerten, was bedeuten dann die Lesarten und Korrekturen in Koranhandschriften?

**Fallen:**
- Behaupte nie, die Bibel habe „keine Fehler in den Handschriften" – das ist falsch und sofort widerlegbar.
- Gib Abschreibfehler (z. B. Zahlen in Könige/Chronik) offen zu.
- Beim Barnabasevangelium: Nicht spotten. Zeig das Jubeljahr und den Messias-Titel (3:45) – das genügt.
- Bei „sündigen Propheten": Nicht mit Angriffen auf Mohammed antworten, sondern zeigen, dass der Koran selbst Vergebungsbitten der Propheten kennt – und dass nur Jesus sündlos ist.`,
  keyOpponents: [
    { name: 'Ahmed Deedat', role: 'Islamischer Apologet (1918–2005), IPCI Durban', work: 'Is the Bible God\'s Word? (1980)' },
    { name: 'Shabir Ally', role: 'Islamischer Apologet, Toronto', work: 'Debatten mit James White, William Lane Craig, David Wood' },
    { name: 'Zakir Naik', role: 'Islamischer Prediger, Mumbai', work: 'Debatte mit William Campbell (2000)' },
    { name: 'Mohammed Hijab', role: 'Islamischer Debattierer, London', work: 'Online-Debatten' },
    { name: 'Bart D. Ehrman', role: 'Neutestamentler, UNC Chapel Hill (agnostisch) – wird von Muslimen zitiert', work: 'Misquoting Jesus (2005)' },
  ],
  claims: [bibelTextvarianten, ehrmanBeweistVerfaelschung, barnabasevangelium, bibelWidersprichtSich, suendigePropheten, evangelienMenschenwort],
};

export default topic;
