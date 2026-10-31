import { BadgeCheck, BookText, ExternalLink, FileQuestion, Quote } from 'lucide-react';
import type { QuoteStatus, Source } from '@/content/schema';
import { Badge } from '@/components/ui/badge';
import { Tip } from '@/components/ui/tooltip';
import { sourceKindLabel, statusLabel } from '@/lib/labels';
import { cn } from '@/lib/utils';

export function StatusBadge({ status }: { status: QuoteStatus }) {
  const v = status === 'verbatim' ? 'success' : status === 'paraphrase' ? 'info' : 'warning';
  const Icon = status === 'verbatim' ? BadgeCheck : status === 'paraphrase' ? BookText : FileQuestion;
  return (
    <Tip content={statusLabel[status].long}>
      <Badge variant={v} className="cursor-help">
        <Icon />
        {statusLabel[status].short}
      </Badge>
    </Tip>
  );
}

function isRtl(s: string) {
  return /[֐-ࣿ]/.test(s);
}

export function sourceTitle(s: Source) {
  const parts = [s.author, s.work].filter(Boolean).join(', ');
  return s.ref ? `${parts} ${s.ref}` : parts;
}

export function SourceItem({ source: s, compact, where }: { source: Source; compact?: boolean; where?: string }) {
  return (
    <div className={cn('group rounded-lg border bg-card p-3.5', compact && 'p-3')}>
      <div className="flex flex-wrap items-center gap-1.5">
        <Badge variant="muted">{sourceKindLabel[s.kind] ?? s.kind}</Badge>
        <StatusBadge status={s.status} />
        {where && <span className="text-[11px] text-muted-foreground">· {where}</span>}
      </div>
      <div className="mt-2 text-sm font-medium leading-snug">
        {s.author && <span>{s.author}, </span>}
        <span className="italic">{s.work}</span>
        {s.ref && <span className="text-primary"> {s.ref}</span>}
        {s.year && <span className="font-normal text-muted-foreground"> ({s.year})</span>}
      </div>
      {s.quote && (
        <blockquote className="mt-2 flex gap-2 border-l-2 border-gold/60 pl-3 font-serif text-[14.5px] leading-relaxed text-foreground/90">
          <Quote className="mt-1 size-3.5 shrink-0 text-gold" />
          <span>{s.quote}</span>
        </blockquote>
      )}
      {s.original && (
        <p dir={isRtl(s.original) ? 'rtl' : 'auto'} className="mt-1.5 pl-3 text-[13px] italic text-muted-foreground">
          {s.original}
        </p>
      )}
      {(s.translation || s.note || s.url) && (
        <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
          {s.translation && <span>Übers.: {s.translation}</span>}
          {s.url && (
            <a href={s.url} target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-1 text-primary hover:underline">
              Quelle öffnen <ExternalLink className="size-3" />
            </a>
          )}
          {s.note && <span className="basis-full text-[12.5px] leading-snug">{s.note}</span>}
        </div>
      )}
    </div>
  );
}

export function SourceList({ sources, compact }: { sources?: Source[]; compact?: boolean }) {
  if (!sources?.length) return null;
  return (
    <div className="grid gap-2">
      {sources.map((s, i) => (
        <SourceItem key={i} source={s} compact={compact} />
      ))}
    </div>
  );
}

/** Kompakte Inline-Liste von Fundstellen (z. B. „Joh 1,1 · Sure 5:47"). */
export function SourceChips({ sources }: { sources?: Source[] }) {
  if (!sources?.length) return null;
  return (
    <div className="flex flex-wrap gap-1.5">
      {sources.map((s, i) => (
        <Tip key={i} content={s.quote ? `„${s.quote}"` : sourceTitle(s)}>
          <span
            className={cn(
              'inline-flex max-w-full cursor-help items-center gap-1 truncate rounded-md border bg-muted/50 px-2 py-0.5 text-[11.5px] text-muted-foreground',
              s.status === 'unverified' && 'border-warning/40',
            )}
          >
            <span className="truncate">{sourceTitle(s)}</span>
          </span>
        </Tip>
      ))}
    </div>
  );
}
