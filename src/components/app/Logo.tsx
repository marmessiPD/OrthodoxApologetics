import { cn } from '@/lib/utils';

/** Koptisches Kreuz als Markenzeichen. */
export function CopticCross({ className }: { className?: string }) {
  return (
    <svg viewBox="96 72 320 368" className={cn('size-6', className)} aria-hidden fill="currentColor">
      <defs>
        <g id="ap-arm">
          <rect x="227" y="134" width="58" height="122" rx="6" />
          <circle cx="256" cy="110" r="26" />
          <circle cx="218" cy="136" r="20" />
          <circle cx="294" cy="136" r="20" />
        </g>
      </defs>
      <use href="#ap-arm" />
      <use href="#ap-arm" transform="rotate(90 256 256)" />
      <use href="#ap-arm" transform="rotate(180 256 256)" />
      <use href="#ap-arm" transform="rotate(270 256 256)" />
      <circle cx="256" cy="256" r="48" />
    </svg>
  );
}

export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'grid size-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#8f2635] to-[#5c1520] text-[#efcf7f] shadow-sm ring-1 ring-black/5',
        className,
      )}
    >
      <CopticCross className="size-[70%]" />
    </span>
  );
}
