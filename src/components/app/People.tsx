import { Link } from 'react-router';
import type { Person, Voice } from '@/content/schema';
import { Badge } from '@/components/ui/badge';
import { eraLabel, traditionLabel } from '@/lib/labels';
import { useKB } from '@/lib/content';
import { cn, initials } from '@/lib/utils';
import { Md } from './Md';
import { SourceList } from './Sources';

const eraColor: Record<string, string> = {
  biblisch: 'from-[#a87623] to-[#7a5418]',
  patristisch: 'from-[#8f2635] to-[#5c1520]',
  mittelalter: 'from-[#5b4b8a] to-[#3b2f63]',
  neuzeit: 'from-[#2f6b5e] to-[#1d4a40]',
  modern: 'from-[#33507d] to-[#1f3557]',
};

export function PersonAvatar({ person, className }: { person?: Person; className?: string }) {
  const name = person?.name ?? '?';
  return (
    <span
      className={cn(
        'relative grid size-10 shrink-0 place-items-center rounded-full bg-gradient-to-br text-[13px] font-semibold tracking-wide text-white shadow-sm',
        eraColor[person?.era ?? 'modern'],
        className,
      )}
      title={name}
    >
      {initials(name)}
      {person?.tradition === 'koptisch' && (
        <span className="absolute -bottom-0.5 -right-0.5 size-3.5 rounded-full border-2 border-card bg-gold" title="Koptisch-orthodox" />
      )}
    </span>
  );
}

export function PersonLine({ person, role }: { person?: Person; role?: string }) {
  if (!person) return <span className="text-sm text-muted-foreground">Unbekannt</span>;
  return (
    <div className="min-w-0">
      <Link to={`/konzil/${person.id}`} className="block truncate text-sm font-semibold hover:text-primary">
        {person.name}
      </Link>
      <div className="truncate text-xs text-muted-foreground">
        {role ?? person.title} · {person.years}
      </div>
    </div>
  );
}

export function VoiceCard({ voice, compact }: { voice: Voice; compact?: boolean }) {
  const kb = useKB();
  const person = kb.personById.get(voice.person);
  return (
    <div className={cn('rounded-xl border bg-card p-4', compact && 'p-3.5')}>
      <div className="flex items-center gap-3">
        <PersonAvatar person={person} />
        <PersonLine person={person} role={voice.role} />
        {person && (
          <Badge variant={person.tradition === 'koptisch' ? 'gold' : 'muted'} className="ml-auto hidden sm:inline-flex">
            {eraLabel[person.era]}
          </Badge>
        )}
      </div>
      <Md className="mt-3" size={compact ? 'sm' : 'base'}>
        {voice.text}
      </Md>
      {voice.sources?.length ? (
        <details className="mt-2 group">
          <summary className="cursor-pointer text-xs font-medium text-muted-foreground hover:text-foreground">
            {voice.sources.length} Beleg{voice.sources.length > 1 ? 'e' : ''} anzeigen
          </summary>
          <div className="mt-2">
            <SourceList sources={voice.sources} compact />
          </div>
        </details>
      ) : null}
      {person?.caveat && !compact && <p className="mt-2 text-[11.5px] leading-snug text-muted-foreground">Hinweis: {person.caveat}</p>}
    </div>
  );
}

export function TraditionBadge({ person }: { person: Person }) {
  return <Badge variant={person.tradition === 'koptisch' ? 'gold' : 'muted'}>{traditionLabel[person.tradition]}</Badge>;
}

export function AvatarStack({ ids, max = 4 }: { ids: string[]; max?: number }) {
  const kb = useKB();
  const uniq = [...new Set(ids)];
  return (
    <div className="flex -space-x-2">
      {uniq.slice(0, max).map((id) => (
        <PersonAvatar key={id} person={kb.personById.get(id)} className="size-7 text-[10px] ring-2 ring-card" />
      ))}
      {uniq.length > max && (
        <span className="grid size-7 place-items-center rounded-full bg-muted text-[10px] font-semibold text-muted-foreground ring-2 ring-card">
          +{uniq.length - max}
        </span>
      )}
    </div>
  );
}
