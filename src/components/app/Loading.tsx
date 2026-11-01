import { Skeleton } from '@/components/ui/misc';
import { useLoadProgress } from '@/lib/content';
import { LogoMark } from './Logo';

export function LoadBar() {
  const { loaded, total } = useLoadProgress();
  if (!total || loaded >= total) return null;
  const pct = Math.round((loaded / total) * 100);
  return (
    <div className="mb-6 rounded-xl border bg-card p-4">
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span>Wissensdatenbank wird geladen – beim nächsten Start sofort verfügbar (auch offline).</span>
        <span className="tabular-nums">{pct} %</span>
      </div>
      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted">
        <div className="h-full rounded-full bg-gradient-to-r from-[#8f2635] to-[#c9973f] transition-all" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

export function PageSkeleton() {
  return (
    <div className="space-y-4">
      <LoadBar />
      <Skeleton className="h-8 w-2/3" />
      <Skeleton className="h-4 w-1/2" />
      <div className="grid gap-3 pt-4 sm:grid-cols-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-28" />
        ))}
      </div>
    </div>
  );
}

export function SplashScreen() {
  return (
    <div className="grid min-h-dvh place-items-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <LogoMark className="size-14 animate-pulse rounded-2xl" />
        <div className="text-center">
          <div className="font-serif text-xl font-semibold">Apologia</div>
          <div className="mt-1 text-xs text-muted-foreground">Die Wissensdatenbank wird geladen …</div>
        </div>
      </div>
    </div>
  );
}
