import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { cn } from '@/lib/utils';

export function Md({ children, className, size = 'base' }: { children?: string; className?: string; size?: 'sm' | 'base' }) {
  if (!children) return null;
  return (
    <div
      className={cn(
        'prose prose-apologia max-w-none prose-p:my-2.5 prose-li:my-0.5 prose-ul:my-2 prose-ol:my-2 prose-blockquote:my-3 prose-headings:mb-2 prose-headings:mt-4 prose-strong:font-semibold',
        size === 'sm' ? 'prose-sm' : 'text-[15px] leading-relaxed',
        className,
      )}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          a: ({ href, children }) => (
            <a href={href} target="_blank" rel="noreferrer noopener">
              {children}
            </a>
          ),
          h1: 'h3',
          h2: 'h4',
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
}
