import { Bookmark, BookmarkCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tip } from '@/components/ui/tooltip';
import { difficultyLabel } from '@/lib/labels';
import { useBookmarks } from '@/lib/storage';
import { cn } from '@/lib/utils';

export function BookmarkButton({ refId, className }: { refId: string; className?: string }) {
  const { isBookmarked, toggle } = useBookmarks();
  const on = isBookmarked(refId);
  return (
    <Tip content={on ? 'Aus „Gemerkt" entfernen' : 'Merken'}>
      <Button variant={on ? 'soft' : 'outline'} size="icon-sm" onClick={() => toggle(refId)} className={className} aria-pressed={on} aria-label="Merken">
        {on ? <BookmarkCheck /> : <Bookmark />}
      </Button>
    </Tip>
  );
}

export function Difficulty({ level, showLabel = true }: { level: 1 | 2 | 3; showLabel?: boolean }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-muted-foreground" title={difficultyLabel[level]}>
      <span className="flex gap-0.5">
        {[1, 2, 3].map((i) => (
          <span key={i} className={cn('h-2.5 w-1 rounded-full', i <= level ? 'bg-gold' : 'bg-border')} />
        ))}
      </span>
      {showLabel && difficultyLabel[level]}
    </span>
  );
}

export function SectionTitle({ icon: Icon, children, className }: { icon?: React.ComponentType<{ className?: string }>; children: React.ReactNode; className?: string }) {
  return (
    <h2 className={cn('mb-3 flex items-center gap-2 text-[13px] font-semibold uppercase tracking-wider text-muted-foreground', className)}>
      {Icon && <Icon className="size-4 text-gold" />}
      {children}
    </h2>
  );
}

export function PageHeader({ eyebrow, title, subtitle, children, className }: { eyebrow?: React.ReactNode; title: React.ReactNode; subtitle?: React.ReactNode; children?: React.ReactNode; className?: string }) {
  return (
    <header className={cn('mb-6', className)}>
      {eyebrow && <div className="mb-2 flex flex-wrap items-center gap-2 text-xs font-medium text-muted-foreground">{eyebrow}</div>}
      <div className="flex items-start gap-3">
        <div className="min-w-0 flex-1">
          <h1 className="font-serif text-[26px] font-semibold leading-tight tracking-tight sm:text-3xl">{title}</h1>
          {subtitle && <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{subtitle}</p>}
        </div>
        {children}
      </div>
    </header>
  );
}
