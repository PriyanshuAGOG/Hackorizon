// Tech decorative elements - code brackets, dots, terminal prompts
export function CodeBracket({ type, className = "" }: { type: "open" | "close"; className?: string }) {
  return (
    <span className={`code-bracket ${className}`}>
      {type === "open" ? "{" : "}"}
    </span>
  );
}

export function TerminalPrompt({ className = "" }: { className?: string }) {
  return (
    <span className={`font-mono text-xs text-primary/50 ${className}`}>
      <span className="text-primary/70">$</span> _
    </span>
  );
}

export function DotGrid({ className = "" }: { className?: string }) {
  return <div className={`absolute inset-0 dot-pattern opacity-30 pointer-events-none ${className}`} />;
}

export function FloatingDots({ count = 5, hideOnMobile = true }: { count?: number; hideOnMobile?: boolean }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${hideOnMobile ? 'hidden md:block' : ''}`}>
      {[...Array(count)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/30 pulse-dot"
          style={{
            left: `${15 + i * 18}%`,
            top: `${20 + (i % 3) * 25}%`,
            animationDelay: `${i * 0.4}s`,
          }}
        />
      ))}
    </div>
  );
}

export function CodeLine({ className = "" }: { className?: string }) {
  return (
    <div className={`hidden sm:flex items-center gap-2 text-[10px] font-mono text-muted-foreground/40 ${className}`}>
      <span className="text-primary/40">//</span>
      <span>building the future</span>
    </div>
  );
}

export function TechCorner({ position, hideOnMobile = true }: { position: "tl" | "tr" | "bl" | "br" | "top-left" | "top-right" | "bottom-left" | "bottom-right"; hideOnMobile?: boolean }) {
  // Normalize position names
  const normalizedPosition = position.replace('-', '') as "tl" | "tr" | "bl" | "br" | "topleft" | "topright" | "bottomleft" | "bottomright";
  const posMap: Record<string, "tl" | "tr" | "bl" | "br"> = {
    'tl': 'tl', 'tr': 'tr', 'bl': 'bl', 'br': 'br',
    'topleft': 'tl', 'topright': 'tr', 'bottomleft': 'bl', 'bottomright': 'br'
  };
  const pos = posMap[normalizedPosition] || 'tl';
  
  const posClasses = {
    tl: "top-4 left-4",
    tr: "top-4 right-4",
    bl: "bottom-4 left-4",
    br: "bottom-4 right-4",
  };
  
  const rotations = {
    tl: "",
    tr: "rotate-90",
    bl: "-rotate-90",
    br: "rotate-180",
  };

  return (
    <div className={`absolute ${posClasses[pos]} pointer-events-none ${hideOnMobile ? 'hidden sm:block' : ''}`}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className={`text-border ${rotations[pos]}`}
      >
        <path
          d="M0 12 L0 0 L12 0"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}

export function GridLines({ hideOnMobile = true }: { hideOnMobile?: boolean }) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden opacity-20 ${hideOnMobile ? 'hidden lg:block' : ''}`}>
      <div className="absolute left-1/4 top-0 w-px h-full bg-border" />
      <div className="absolute left-2/4 top-0 w-px h-full bg-border" />
      <div className="absolute left-3/4 top-0 w-px h-full bg-border" />
      <div className="absolute top-1/3 left-0 w-full h-px bg-border" />
      <div className="absolute top-2/3 left-0 w-full h-px bg-border" />
    </div>
  );
}
