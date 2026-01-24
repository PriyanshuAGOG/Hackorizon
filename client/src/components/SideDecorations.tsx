// Side decorations for larger screens - animated text strips and decorative elements
// These are only visible on xl screens and above (1280px+)

export function LeftSideDecoration() {
  return (
    <div className="fixed left-0 top-0 bottom-0 w-16 z-40 pointer-events-none hidden xl:flex flex-col items-center justify-center">
      {/* Animated vertical text strip */}
      <div className="absolute left-4 h-full flex items-center">
        <div className="vertical-text-strip">
          <span className="vertical-text text-[10px] font-mono uppercase tracking-[0.5em] text-muted-foreground/30 whitespace-nowrap animate-scroll-down">
            ENIGMA'26 · CODE · CREATE · INNOVATE · HACK · BUILD · LEARN · 
          </span>
        </div>
      </div>
      
      {/* Decorative line */}
      <div className="absolute left-8 top-24 bottom-24 w-px bg-gradient-to-b from-transparent via-border to-transparent" />
      
      {/* Corner bracket top */}
      <div className="absolute top-20 left-3">
        <svg width="20" height="40" viewBox="0 0 20 40" className="text-border/50">
          <path d="M18 0 L18 2 L2 2 L2 38 L18 38 L18 40" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>
      
      {/* Corner bracket bottom */}
      <div className="absolute bottom-20 left-3">
        <svg width="20" height="40" viewBox="0 0 20 40" className="text-border/50">
          <path d="M18 40 L18 38 L2 38 L2 2 L18 2 L18 0" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      {/* Floating dots */}
      <div className="absolute left-6 top-1/4 w-1 h-1 rounded-full bg-primary/40 pulse-dot" />
      <div className="absolute left-4 top-1/2 w-1.5 h-1.5 rounded-full bg-primary/30 pulse-dot" style={{ animationDelay: '0.5s' }} />
      <div className="absolute left-6 top-3/4 w-1 h-1 rounded-full bg-primary/40 pulse-dot" style={{ animationDelay: '1s' }} />
    </div>
  );
}

export function RightSideDecoration() {
  return (
    <div className="fixed right-0 top-0 bottom-0 w-16 z-40 pointer-events-none hidden xl:flex flex-col items-center justify-center">
      {/* Animated vertical text strip - scrolls up */}
      <div className="absolute right-4 h-full flex items-center">
        <div className="vertical-text-strip-reverse">
          <span className="vertical-text text-[10px] font-mono uppercase tracking-[0.5em] text-muted-foreground/30 whitespace-nowrap animate-scroll-up">
            RIET JAIPUR · 24 HOURS · FEB 2026 · HACKATHON · DEVELOPERS · 
          </span>
        </div>
      </div>
      
      {/* Decorative line */}
      <div className="absolute right-8 top-24 bottom-24 w-px bg-gradient-to-b from-transparent via-border to-transparent" />
      
      {/* Code symbols */}
      <div className="absolute right-3 top-32 text-[10px] font-mono text-muted-foreground/20">
        {"</>"}
      </div>
      <div className="absolute right-3 bottom-32 text-[10px] font-mono text-muted-foreground/20">
        {"{ }"}
      </div>
      
      {/* Corner bracket top */}
      <div className="absolute top-20 right-3">
        <svg width="20" height="40" viewBox="0 0 20 40" className="text-border/50">
          <path d="M2 0 L2 2 L18 2 L18 38 L2 38 L2 40" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>
      
      {/* Corner bracket bottom */}
      <div className="absolute bottom-20 right-3">
        <svg width="20" height="40" viewBox="0 0 20 40" className="text-border/50">
          <path d="M2 40 L2 38 L18 38 L18 2 L2 2 L2 0" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      {/* Small decorative squares */}
      <div className="absolute right-5 top-1/3 w-2 h-2 border border-primary/20 rotate-45" />
      <div className="absolute right-6 top-2/3 w-1.5 h-1.5 border border-primary/30 rotate-45" />
    </div>
  );
}

// Subtle bottom decoration for sections
export function SectionEdgeDecoration({ side }: { side: 'left' | 'right' }) {
  const isLeft = side === 'left';
  
  return (
    <div className={`absolute ${isLeft ? 'left-0' : 'right-0'} top-0 bottom-0 w-12 pointer-events-none hidden lg:block`}>
      {/* Subtle vertical line */}
      <div className={`absolute ${isLeft ? 'left-4' : 'right-4'} top-8 bottom-8 w-px bg-border/30`} />
      
      {/* Small tick marks */}
      <div className={`absolute ${isLeft ? 'left-2' : 'right-2'} top-1/4 w-4 h-px bg-border/20`} />
      <div className={`absolute ${isLeft ? 'left-2' : 'right-2'} top-1/2 w-6 h-px bg-border/30`} />
      <div className={`absolute ${isLeft ? 'left-2' : 'right-2'} top-3/4 w-4 h-px bg-border/20`} />
    </div>
  );
}

// Animated code snippet for corners (large screens only)
export function CornerCodeSnippet({ position }: { position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' }) {
  const posClasses = {
    'top-left': 'top-24 left-20',
    'top-right': 'top-24 right-20',
    'bottom-left': 'bottom-24 left-20',
    'bottom-right': 'bottom-24 right-20',
  };

  const codeSnippets = {
    'top-left': 'const enigma = () => {',
    'top-right': 'await innovate();',
    'bottom-left': 'return success;',
    'bottom-right': '};',
  };

  return (
    <div className={`absolute ${posClasses[position]} hidden 2xl:block pointer-events-none`}>
      <code className="text-[9px] font-mono text-muted-foreground/15 tracking-wide">
        {codeSnippets[position]}
      </code>
    </div>
  );
}
