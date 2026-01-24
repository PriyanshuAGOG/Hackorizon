import { useState, useEffect, useCallback, useRef } from 'react';
import { loadingSounds } from './loadingSounds';

interface EnhancedLoadingScreenProps {
  onComplete: () => void;
}

// Terminal commands - hackathon themed
const terminalCommands = [
  { cmd: '> system.boot()', output: 'Initializing ENIGMA\'26 kernel...', delay: 400 },
  { cmd: '> connect --server enigma.hackathon.io', output: 'Establishing secure connection...', delay: 500 },
  { cmd: '> auth.verify(credentials)', output: 'Verifying hacker credentials...', delay: 400 },
  { cmd: '> load.module("hackathon_core")', output: 'Loading hackathon modules...', delay: 350 },
  { cmd: '> fetch.data("prize_pool")', output: 'Prize pool: ₹1,00,000+ loaded', delay: 300 },
  { cmd: '> fetch.data("speakers")', output: 'Industry experts database synced', delay: 300 },
  { cmd: '> init.tracks()', output: 'Problem statements: [CLASSIFIED]', delay: 350 },
  { cmd: '> set.date("20-21 Feb 2026")', output: 'Event timeline configured', delay: 300 },
  { cmd: '> compile.experience()', output: 'Building 24-hour innovation framework...', delay: 400 },
  { cmd: '> verify.access()', output: 'VERIFICATION COMPLETE ✓', delay: 600 },
];

export default function EnhancedLoadingScreen({ onComplete }: EnhancedLoadingScreenProps) {
  const [phase, setPhase] = useState<'boot' | 'terminal' | 'access' | 'complete'>('boot');
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [displayedCommands, setDisplayedCommands] = useState<Array<{ cmd: string; output: string; typing: boolean }>>([]);
  const [typingText, setTypingText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showSkip, setShowSkip] = useState(false);
  const [accessText, setAccessText] = useState('');
  const terminalRef = useRef<HTMLDivElement>(null);
  const hasInteracted = useRef(false);

  // Initialize speech synthesis voices on mount
  useEffect(() => {
    loadingSounds.initVoices();
  }, []);

  // Enable audio on first interaction
  const enableAudio = useCallback(() => {
    if (!hasInteracted.current) {
      hasInteracted.current = true;
      // Play a silent sound to unlock audio context
      try {
        const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        gain.gain.value = 0;
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.001);
      } catch (e) {}
    }
  }, []);

  // Cursor blink
  useEffect(() => {
    const interval = setInterval(() => setShowCursor(prev => !prev), 500);
    return () => clearInterval(interval);
  }, []);

  // Show skip hint after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowSkip(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Boot phase
  useEffect(() => {
    if (phase === 'boot') {
      loadingSounds.systemBoot();
      const timer = setTimeout(() => {
        setPhase('terminal');
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  // Terminal typing effect
  useEffect(() => {
    if (phase !== 'terminal') return;
    if (currentCommandIndex >= terminalCommands.length) {
      // All commands done, move to access phase
      setTimeout(() => {
        setPhase('access');
        loadingSounds.accessGranted();
      }, 500);
      return;
    }

    const command = terminalCommands[currentCommandIndex];
    let charIndex = 0;
    setTypingText('');

    // Type the command character by character
    const typeInterval = setInterval(() => {
      if (charIndex < command.cmd.length) {
        setTypingText(command.cmd.slice(0, charIndex + 1));
        if (charIndex % 2 === 0) loadingSounds.terminalType();
        charIndex++;
      } else {
        clearInterval(typeInterval);
        // Command typed, show output after delay
        setTimeout(() => {
          loadingSounds.commandExecute();
          setDisplayedCommands(prev => [...prev, { cmd: command.cmd, output: command.output, typing: false }]);
          setTypingText('');
          setProgress(((currentCommandIndex + 1) / terminalCommands.length) * 100);
          
          // Auto-scroll terminal
          if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
          }
          
          // Move to next command
          setTimeout(() => {
            setCurrentCommandIndex(prev => prev + 1);
          }, command.delay);
        }, 150);
      }
    }, 35);

    return () => clearInterval(typeInterval);
  }, [phase, currentCommandIndex]);

  // Access granted animation with robotic voice
  useEffect(() => {
    if (phase !== 'access') return;
    
    const accessMessage = 'ACCESS GRANTED';
    let charIndex = 0;
    
    // Play the robotic "Access Granted" voice immediately
    loadingSounds.accessGranted();
    
    // Type out the text with a slight delay to sync with voice
    setTimeout(() => {
      const typeInterval = setInterval(() => {
        if (charIndex <= accessMessage.length) {
          setAccessText(accessMessage.slice(0, charIndex));
          charIndex++;
        } else {
          clearInterval(typeInterval);
          // Complete after showing access granted
          setTimeout(() => {
            loadingSounds.whoosh();
            setPhase('complete');
            setTimeout(onComplete, 400);
          }, 1200);
        }
      }, 100);
      
      return () => clearInterval(typeInterval);
    }, 200);
  }, [phase, onComplete]);

  // Skip handler
  const handleSkip = useCallback(() => {
    enableAudio();
    loadingSounds.whoosh();
    setPhase('complete');
    setTimeout(onComplete, 200);
  }, [onComplete, enableAudio]);

  // Keyboard/click to skip
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      enableAudio();
      if (showSkip && (e.key === ' ' || e.key === 'Enter' || e.key === 'Escape')) {
        handleSkip();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showSkip, handleSkip, enableAudio]);

  if (phase === 'complete') {
    return (
      <div className="fixed inset-0 bg-background z-[9999] flex items-center justify-center animate-fade-out">
        <div className="text-4xl md:text-6xl font-mono text-primary">ENIGMA'26</div>
      </div>
    );
  }

  return (
    <div 
      className="fixed inset-0 bg-[#0a0a0a] z-[9999] overflow-hidden cursor-pointer"
      onClick={enableAudio}
    >
      {/* Scanline effect - desktop only */}
      <div className="hidden md:block absolute inset-0 pointer-events-none opacity-[0.03] z-50">
        <div className="absolute inset-0 bg-scanlines" />
      </div>

      {/* Side decorative lines - visible on all screens */}
      <div className="absolute left-2 md:left-4 lg:left-8 top-0 bottom-0 flex flex-col justify-between py-8 md:py-16">
        <div className="space-y-1">
          {[...Array(5)].map((_, i) => (
            <div 
              key={`left-top-${i}`} 
              className="h-px bg-primary/30"
              style={{ 
                width: `${8 + i * 4}px`,
                animation: `pulse-line 2s ease-in-out ${i * 0.1}s infinite`
              }}
            />
          ))}
        </div>
        <div className="flex-1 flex flex-col justify-center gap-4 md:gap-8">
          {[...Array(3)].map((_, i) => (
            <div 
              key={`left-mid-${i}`} 
              className="w-px h-8 md:h-16 lg:h-24 bg-gradient-to-b from-transparent via-primary/40 to-transparent"
              style={{ animation: `pulse-opacity 3s ease-in-out ${i * 0.5}s infinite` }}
            />
          ))}
        </div>
        <div className="space-y-1">
          {[...Array(5)].map((_, i) => (
            <div 
              key={`left-bottom-${i}`} 
              className="h-px bg-primary/30"
              style={{ 
                width: `${24 - i * 4}px`,
                animation: `pulse-line 2s ease-in-out ${i * 0.1}s infinite`
              }}
            />
          ))}
        </div>
      </div>

      {/* Right side decorative lines */}
      <div className="absolute right-2 md:right-4 lg:right-8 top-0 bottom-0 flex flex-col justify-between py-8 md:py-16 items-end">
        <div className="space-y-1">
          {[...Array(5)].map((_, i) => (
            <div 
              key={`right-top-${i}`} 
              className="h-px bg-primary/30"
              style={{ 
                width: `${8 + i * 4}px`,
                animation: `pulse-line 2s ease-in-out ${i * 0.1}s infinite`
              }}
            />
          ))}
        </div>
        <div className="flex-1 flex flex-col justify-center gap-4 md:gap-8 items-end">
          {[...Array(3)].map((_, i) => (
            <div 
              key={`right-mid-${i}`} 
              className="w-px h-8 md:h-16 lg:h-24 bg-gradient-to-b from-transparent via-primary/40 to-transparent"
              style={{ animation: `pulse-opacity 3s ease-in-out ${i * 0.5}s infinite` }}
            />
          ))}
        </div>
        <div className="space-y-1">
          {[...Array(5)].map((_, i) => (
            <div 
              key={`right-bottom-${i}`} 
              className="h-px bg-primary/30 ml-auto"
              style={{ 
                width: `${24 - i * 4}px`,
                animation: `pulse-line 2s ease-in-out ${i * 0.1}s infinite`
              }}
            />
          ))}
        </div>
      </div>

      {/* Desktop: Additional corner decorations */}
      <div className="hidden lg:block">
        {/* Top left corner */}
        <div className="absolute top-8 left-8">
          <div className="w-16 h-16 border-l-2 border-t-2 border-primary/20" />
          <div className="absolute top-2 left-2 w-2 h-2 bg-primary/50 animate-pulse" />
        </div>
        {/* Top right corner */}
        <div className="absolute top-8 right-8">
          <div className="w-16 h-16 border-r-2 border-t-2 border-primary/20" />
          <div className="absolute top-2 right-2 w-2 h-2 bg-primary/50 animate-pulse" />
        </div>
        {/* Bottom left corner */}
        <div className="absolute bottom-8 left-8">
          <div className="w-16 h-16 border-l-2 border-b-2 border-primary/20" />
          <div className="absolute bottom-2 left-2 w-2 h-2 bg-primary/50 animate-pulse" />
        </div>
        {/* Bottom right corner */}
        <div className="absolute bottom-8 right-8">
          <div className="w-16 h-16 border-r-2 border-b-2 border-primary/20" />
          <div className="absolute bottom-2 right-2 w-2 h-2 bg-primary/50 animate-pulse" />
        </div>
      </div>

      {/* Main content container */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 md:px-8">
        
        {/* Boot phase */}
        {phase === 'boot' && (
          <div className="text-center animate-pulse">
            <div className="text-xs md:text-sm font-mono text-primary/70 mb-2">ENIGMA SYSTEMS</div>
            <div className="text-lg md:text-2xl font-mono text-primary">INITIALIZING...</div>
          </div>
        )}

        {/* Terminal phase */}
        {phase === 'terminal' && (
          <div className="w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl">
            {/* Terminal window */}
            <div className="bg-[#0d0d0d] border border-primary/30 rounded-sm overflow-hidden shadow-2xl">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-3 md:px-4 py-2 md:py-3 bg-[#1a1a1a] border-b border-primary/20">
                <div className="flex gap-1.5 md:gap-2">
                  <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500/70" />
                  <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500/70" />
                </div>
                <div className="flex-1 text-center">
                  <span className="text-[10px] md:text-xs font-mono text-muted-foreground hidden sm:inline">enigma@hackathon:~</span>
                  <span className="text-[10px] md:text-xs font-mono text-muted-foreground sm:hidden">enigma:~</span>
                </div>
                <div className="text-[10px] md:text-xs font-mono text-primary/50">v2.6</div>
              </div>

              {/* Terminal body */}
              <div 
                ref={terminalRef}
                className="p-3 md:p-4 lg:p-6 h-48 sm:h-56 md:h-72 lg:h-80 overflow-y-auto custom-scrollbar"
              >
                {/* Welcome message */}
                <div className="mb-3 md:mb-4">
                  <div className="text-[10px] md:text-xs text-muted-foreground font-mono mb-1">
                    ╔══════════════════════════════════════════╗
                  </div>
                  <div className="text-[10px] md:text-xs text-primary font-mono pl-1">
                    ║  ENIGMA'26 HACKATHON TERMINAL v2.6.0     ║
                  </div>
                  <div className="text-[10px] md:text-xs text-muted-foreground font-mono pl-1">
                    ║  RIET Jaipur · 20-21 February 2026       ║
                  </div>
                  <div className="text-[10px] md:text-xs text-muted-foreground font-mono">
                    ╚══════════════════════════════════════════╝
                  </div>
                </div>

                {/* Executed commands */}
                {displayedCommands.map((item, index) => (
                  <div key={index} className="mb-2 md:mb-3">
                    <div className="text-xs md:text-sm font-mono text-green-400">{item.cmd}</div>
                    <div className="text-[10px] md:text-xs font-mono text-muted-foreground pl-2 md:pl-4 mt-0.5 md:mt-1">
                      └─ {item.output}
                    </div>
                  </div>
                ))}

                {/* Currently typing command */}
                {typingText && (
                  <div className="text-xs md:text-sm font-mono text-green-400">
                    {typingText}
                    <span className={`inline-block w-1.5 md:w-2 h-3 md:h-4 bg-green-400 ml-0.5 ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
                  </div>
                )}

                {/* Waiting cursor */}
                {!typingText && phase === 'terminal' && currentCommandIndex < terminalCommands.length && (
                  <div className="text-xs md:text-sm font-mono text-green-400">
                    {'> '}
                    <span className={`inline-block w-1.5 md:w-2 h-3 md:h-4 bg-green-400 ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
                  </div>
                )}
              </div>

              {/* Progress bar */}
              <div className="px-3 md:px-4 py-2 md:py-3 bg-[#1a1a1a] border-t border-primary/20">
                <div className="flex items-center gap-2 md:gap-3">
                  <span className="text-[10px] md:text-xs font-mono text-muted-foreground">PROGRESS</span>
                  <div className="flex-1 h-1 md:h-1.5 bg-[#0d0d0d] rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary to-green-500 transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <span className="text-[10px] md:text-xs font-mono text-primary w-8 md:w-10 text-right">{Math.round(progress)}%</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Access granted phase */}
        {phase === 'access' && (
          <div className="text-center relative">
            {/* Glowing background */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-64 md:h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
            </div>
            
            {/* Access text */}
            <div className="relative">
              <div className="text-xs md:text-sm font-mono text-green-400 mb-2 md:mb-4">
                ✓ ALL SYSTEMS OPERATIONAL
              </div>
              <div className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-mono font-bold text-primary tracking-wider animate-access-glow">
                {accessText}
                <span className={`inline-block w-2 md:w-4 h-8 md:h-16 bg-primary ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
              </div>
              <div className="mt-4 md:mt-8 text-sm md:text-xl font-mono text-muted-foreground">
                Welcome to ENIGMA'26
              </div>
              
              {/* Decorative elements */}
              <div className="mt-6 md:mt-12 flex justify-center gap-2 md:gap-4">
                {[...Array(5)].map((_, i) => (
                  <div 
                    key={i}
                    className="w-1 md:w-2 h-4 md:h-8 bg-primary/50"
                    style={{ 
                      animation: `pulse-height 1s ease-in-out ${i * 0.1}s infinite`,
                      animationDirection: i % 2 === 0 ? 'normal' : 'reverse'
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Skip hint */}
        {showSkip && (phase === 'boot' || phase === 'terminal') && (
          <button 
            onClick={handleSkip}
            className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 text-[10px] md:text-xs font-mono text-muted-foreground hover:text-primary transition-colors animate-fade-in"
          >
            [ Press any key or tap to skip ]
          </button>
        )}

        {/* Version tag - desktop */}
        <div className="hidden md:block absolute bottom-4 right-4 text-[10px] font-mono text-muted-foreground/50">
          ENIGMA'26 TERMINAL v2.6.0
        </div>
      </div>

      {/* Mobile: Bottom symmetry lines */}
      <div className="md:hidden absolute bottom-4 left-0 right-0 flex justify-center gap-1">
        {[...Array(7)].map((_, i) => (
          <div 
            key={`bottom-${i}`}
            className="w-4 h-px bg-primary/30"
            style={{ 
              opacity: 1 - Math.abs(i - 3) * 0.15,
              animation: `pulse-line 2s ease-in-out ${i * 0.1}s infinite`
            }}
          />
        ))}
      </div>
    </div>
  );
}
