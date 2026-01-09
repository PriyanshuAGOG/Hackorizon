import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface EnhancedLoadingScreenProps {
  onLoadComplete: () => void;
  enableSounds?: boolean;
}

export default function EnhancedLoadingScreen({ 
  onLoadComplete, 
  enableSounds = false 
}: EnhancedLoadingScreenProps) {
  const [phase, setPhase] = useState(1);
  const [terminalText, setTerminalText] = useState<string[]>([]);
  const [progress1, setProgress1] = useState(0);
  const [progress2, setProgress2] = useState(0);
  const [progress3, setProgress3] = useState(0);
  const [glitchText, setGlitchText] = useState('HACKORIZON');
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([]);

  // Simple sound effect function
  const playSound = (frequency: number, duration: number) => {
    if (!enableSounds) return;
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.value = frequency;
      oscillator.type = 'sine';
      
      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + duration);
    } catch (e) {
      // Silently fail if audio is not supported
    }
  };

  // Phase 1: Terminal Access with Enhanced Typing
  useEffect(() => {
    if (phase !== 1) return;

    const sequence = [
      { text: '> INITIALIZING SECURE CONNECTION...', delay: 200 },
      { text: '> SCANNING NETWORK PROTOCOLS...', delay: 600 },
      { text: '> ESTABLISHING ENCRYPTED TUNNEL...', delay: 1100 },
      { text: '> ACCESS POINT: HACKORIZON MAINFRAME', delay: 1800 },
      { text: '> AUTHENTICATION REQUIRED', delay: 2400 },
      { text: '> Enter password: ********', delay: 3000 },
      { text: '> VERIFYING CREDENTIALS...', delay: 3700 },
      { text: '> BIOMETRIC SCAN COMPLETE ✓', delay: 4200 },
      { text: '> ACCESS GRANTED - WELCOME HACKER ✓', delay: 4700 },
      { text: '> LOADING HACKORIZON INTERFACE...', delay: 5200 },
    ];

    sequence.forEach((item, index) => {
      setTimeout(() => {
        setTerminalText(prev => [...prev, item.text]);
        playSound(800, 0.05);
        
        if (index === sequence.length - 1) {
          setTimeout(() => {
            playSound(1200, 0.2);
            setPhase(2);
          }, 800);
        }
      }, item.delay);
    });
  }, [phase]);

  // Phase 2: Advanced Progress Bars
  useEffect(() => {
    if (phase !== 2) return;

    const updateProgress = (
      setter: React.Dispatch<React.SetStateAction<number>>,
      delay: number,
      interval: number,
      increment: number
    ) => {
      setTimeout(() => {
        const intervalId = setInterval(() => {
          setter(prev => {
            const newValue = prev + Math.random() * increment;
            if (newValue >= 100) {
              clearInterval(intervalId);
              playSound(1500, 0.15);
              return 100;
            }
            return newValue;
          });
        }, interval);
      }, delay);
    };

    updateProgress(setProgress1, 0, 80, 12);
    updateProgress(setProgress2, 800, 70, 15);
    updateProgress(setProgress3, 1600, 60, 18);

    setTimeout(() => setPhase(3), 5000);
  }, [phase]);

  // Phase 3: Enhanced Glitch Effect
  useEffect(() => {
    if (phase !== 3) return;

    const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`¡™£¢∞§¶•ªº';
    const originalText = 'HACKORIZON';
    let glitchCount = 0;

    const glitchInterval = setInterval(() => {
      if (glitchCount % 3 === 0) {
        playSound(Math.random() * 500 + 400, 0.05);
      }

      setGlitchText(
        originalText
          .split('')
          .map((char, i) => {
            if (glitchCount > 20 && i < glitchCount - 20) return char;
            return Math.random() > 0.6 ? glitchChars[Math.floor(Math.random() * glitchChars.length)] : char;
          })
          .join('')
      );

      glitchCount++;
      if (glitchCount > 30) {
        setGlitchText(originalText);
        clearInterval(glitchInterval);
        playSound(2000, 0.3);
        setTimeout(() => setPhase(4), 500);
      }
    }, 80);

    return () => clearInterval(glitchInterval);
  }, [phase]);

  // Phase 4: Particle System
  useEffect(() => {
    if (phase !== 4) return;

    playSound(200, 0.5);
    
    // Generate initial particles
    const initialParticles = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.cos((i * 2 * Math.PI) / 40) * 300,
      y: Math.sin((i * 2 * Math.PI) / 40) * 300,
    }));
    setParticles(initialParticles);

    setTimeout(() => {
      onLoadComplete();
    }, 2000);
  }, [phase, onLoadComplete]);

  const getProgressColor = (value: number, colorScheme: string) => {
    if (colorScheme === 'green') return value >= 100 ? 'from-green-500 to-emerald-400' : 'from-green-600 to-green-500';
    if (colorScheme === 'orange') return value >= 100 ? 'from-orange-500 to-yellow-400' : 'from-orange-600 to-orange-500';
    return value >= 100 ? 'from-purple-500 to-pink-400' : 'from-purple-600 to-purple-500';
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="loading-screen"
        className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.5 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        {/* Dynamic Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          {/* Animated Grid */}
          <motion.div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(rgba(251, 146, 60, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(251, 146, 60, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
            }}
            animate={{
              backgroundPosition: ['0px 0px', '50px 50px'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          {/* Floating Matrix Code */}
          <div className="absolute inset-0 opacity-10 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={`matrix-${i}`}
                className="absolute text-green-500 font-mono text-xs whitespace-nowrap"
                style={{ left: `${(i * 5)}%`, top: '-100px' }}
                initial={{ y: -100 }}
                animate={{ y: '100vh' }}
                transition={{
                  duration: Math.random() * 5 + 3,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: 'linear',
                }}
              >
                {Array(30).fill(0).map(() => Math.random() > 0.5 ? '1' : '0').join('')}
              </motion.div>
            ))}
          </div>

          {/* Pulsing Radial Gradient */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(251, 146, 60, 0.2) 0%, transparent 70%)',
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Scan Lines */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 0, 0, 0.3) 2px, rgba(0, 0, 0, 0.3) 4px)',
            }}
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Phase 1: Enhanced Terminal */}
          <AnimatePresence mode="wait">
            {phase === 1 && (
              <motion.div
                key="phase1"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="bg-black/90 backdrop-blur-2xl border-2 border-green-500/40 rounded-xl p-4 sm:p-6 md:p-10 shadow-2xl shadow-green-500/30 relative overflow-hidden"
              >
                {/* Terminal Header */}
                <div className="flex items-center gap-2 mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-green-500/30">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-green-400 font-mono text-xs sm:text-sm ml-2">
                    root@hackorizon:~$
                  </span>
                </div>

                {/* Terminal Content */}
                <div className="font-mono text-xs sm:text-sm md:text-base space-y-1.5 sm:space-y-2 min-h-[200px] sm:min-h-[250px]">
                  {terminalText.map((text, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2 }}
                      className={`${
                        text.includes('GRANTED') || text.includes('COMPLETE')
                          ? 'text-green-400 font-bold'
                          : text.includes('REQUIRED') || text.includes('password')
                          ? 'text-yellow-400'
                          : 'text-green-500'
                      }`}
                    >
                      {text}
                      {index === terminalText.length - 1 && !text.includes('✓') && (
                        <motion.span
                          animate={{ opacity: [0, 1, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity }}
                          className="inline-block ml-1"
                        >
                          █
                        </motion.span>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Animated Scanning Line */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/20 to-transparent h-16 pointer-events-none"
                  animate={{ y: ['0%', '100%'] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
                />

                {/* Corner Brackets */}
                <div className="absolute top-2 left-2 text-green-500 text-2xl opacity-50">[</div>
                <div className="absolute top-2 right-2 text-green-500 text-2xl opacity-50">]</div>
                <div className="absolute bottom-2 left-2 text-green-500 text-2xl opacity-50">[</div>
                <div className="absolute bottom-2 right-2 text-green-500 text-2xl opacity-50">]</div>
              </motion.div>
            )}

            {/* Phase 2: Enhanced Progress Bars */}
            {phase === 2 && (
              <motion.div
                key="phase2"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1, rotateX: 90 }}
                transition={{ duration: 0.6 }}
                className="space-y-6 sm:space-y-8 md:space-y-12"
              >
                {/* Animated Logo */}
                <motion.div
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center space-y-2 sm:space-y-4"
                >
                  <motion.h1 
                    className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tight"
                    style={{
                      backgroundImage: 'linear-gradient(135deg, #fb923c 0%, #f59e0b 50%, #fb923c 100%)',
                      backgroundSize: '200% auto',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  >
                    HACKORIZON
                  </motion.h1>
                  
                  <motion.div
                    className="flex items-center justify-center gap-2 font-mono text-green-400 text-sm sm:text-base"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                    >
                      ⚡
                    </motion.span>
                    INITIALIZING SYSTEMS
                    <motion.span
                      animate={{ rotate: -360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                    >
                      ⚡
                    </motion.span>
                  </motion.div>
                </motion.div>

                {/* Progress Bar 1 */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="space-y-2 sm:space-y-3"
                >
                  <div className="flex justify-between items-center font-mono text-xs sm:text-sm">
                    <span className="text-green-400 flex items-center gap-2">
                      <span className="hidden sm:inline">[LOADING]</span>
                      <span className="text-white">BRILLIANCE MODULE</span>
                    </span>
                    <motion.span
                      className="text-green-400 font-bold"
                      animate={{ scale: progress1 >= 100 ? [1, 1.2, 1] : 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {Math.min(Math.round(progress1), 100)}%
                    </motion.span>
                  </div>
                  <div className="h-4 sm:h-5 bg-gray-900/80 rounded-full overflow-hidden border-2 border-green-500/30 shadow-lg shadow-green-500/20">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${getProgressColor(progress1, 'green')} relative`}
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.min(progress1, 100)}%` }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                        animate={{ x: ['-100%', '200%'] }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      />
                      {progress1 >= 100 && (
                        <motion.div
                          className="absolute inset-0 bg-white/30"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: [0, 1, 0] }}
                          transition={{ duration: 0.5 }}
                        />
                      )}
                    </motion.div>
                  </div>
                </motion.div>

                {/* Progress Bar 2 */}
                {progress2 > 0 && (
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-2 sm:space-y-3"
                  >
                    <div className="flex justify-between items-center font-mono text-xs sm:text-sm">
                      <span className="text-orange-400 flex items-center gap-2">
                        <span className="hidden sm:inline">[COMPILING]</span>
                        <span className="text-white">CREATIVITY ENGINE</span>
                      </span>
                      <motion.span
                        className="text-orange-400 font-bold"
                        animate={{ scale: progress2 >= 100 ? [1, 1.2, 1] : 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {Math.min(Math.round(progress2), 100)}%
                      </motion.span>
                    </div>
                    <div className="h-4 sm:h-5 bg-gray-900/80 rounded-full overflow-hidden border-2 border-orange-500/30 shadow-lg shadow-orange-500/20">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${getProgressColor(progress2, 'orange')} relative`}
                        initial={{ width: 0 }}
                        animate={{ width: `${Math.min(progress2, 100)}%` }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                          animate={{ x: ['-100%', '200%'] }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        />
                        {progress2 >= 100 && (
                          <motion.div
                            className="absolute inset-0 bg-white/30"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 0.5 }}
                          />
                        )}
                      </motion.div>
                    </div>
                  </motion.div>
                )}

                {/* Progress Bar 3 */}
                {progress3 > 0 && (
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-2 sm:space-y-3"
                  >
                    <div className="flex justify-between items-center font-mono text-xs sm:text-sm">
                      <span className="text-purple-400 flex items-center gap-2">
                        <span className="hidden sm:inline">[INITIALIZING]</span>
                        <span className="text-white">INNOVATION PROTOCOLS</span>
                      </span>
                      <motion.span
                        className="text-purple-400 font-bold"
                        animate={{ scale: progress3 >= 100 ? [1, 1.2, 1] : 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {Math.min(Math.round(progress3), 100)}%
                      </motion.span>
                    </div>
                    <div className="h-4 sm:h-5 bg-gray-900/80 rounded-full overflow-hidden border-2 border-purple-500/30 shadow-lg shadow-purple-500/20">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${getProgressColor(progress3, 'purple')} relative`}
                        initial={{ width: 0 }}
                        animate={{ width: `${Math.min(progress3, 100)}%` }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                          animate={{ x: ['-100%', '200%'] }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        />
                        {progress3 >= 100 && (
                          <motion.div
                            className="absolute inset-0 bg-white/30"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 0.5 }}
                          />
                        )}
                      </motion.div>
                    </div>
                  </motion.div>
                )}

                {/* All Systems Operational */}
                {progress1 >= 100 && progress2 >= 100 && progress3 >= 100 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-4 sm:py-6"
                  >
                    <motion.div
                      className="inline-block font-mono text-base sm:text-lg md:text-xl font-bold text-green-400 px-6 py-3 border-2 border-green-400 rounded-lg"
                      animate={{
                        boxShadow: [
                          '0 0 10px rgba(34, 197, 94, 0.3)',
                          '0 0 30px rgba(34, 197, 94, 0.6)',
                          '0 0 10px rgba(34, 197, 94, 0.3)',
                        ],
                      }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      ✓ ALL SYSTEMS OPERATIONAL
                    </motion.div>
                  </motion.div>
                )}
              </motion.div>
            )}

            {/* Phase 3: Extreme Glitch Effect */}
            {phase === 3 && (
              <motion.div
                key="phase3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center relative"
              >
                <motion.h1
                  className="text-6xl sm:text-8xl md:text-[10rem] lg:text-[12rem] font-black tracking-wider select-none"
                  animate={{
                    x: [0, -10, 10, -10, 10, -5, 5, 0],
                    y: [0, 5, -5, 8, -8, 3, -3, 0],
                    rotate: [0, -2, 2, -1, 1, 0],
                  }}
                  transition={{
                    duration: 0.4,
                    repeat: Infinity,
                    repeatType: 'mirror',
                  }}
                >
                  {glitchText.split('').map((char, index) => (
                    <motion.span
                      key={index}
                      className="inline-block"
                      style={{
                        color: `hsl(${Math.random() * 60 + 10}, 100%, ${Math.random() * 30 + 50}%)`,
                        textShadow: `
                          ${Math.random() * 5 - 2}px ${Math.random() * 5 - 2}px 0 #00ff00,
                          ${Math.random() * 5 - 2}px ${Math.random() * 5 - 2}px 0 #ff0000,
                          ${Math.random() * 5 - 2}px ${Math.random() * 5 - 2}px 0 #0000ff,
                          0 0 20px currentColor
                        `,
                      }}
                      animate={{
                        opacity: [1, 0.3, 1],
                        y: [0, Math.random() * -20, 0],
                        scaleY: [1, Math.random() * 0.5 + 0.7, 1],
                      }}
                      transition={{
                        duration: 0.15,
                        delay: index * 0.03,
                        repeat: Infinity,
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.h1>

                {/* RGB Split Effect */}
                <motion.div
                  className="absolute inset-0 mix-blend-screen pointer-events-none"
                  animate={{
                    opacity: [0, 0.5, 0],
                  }}
                  transition={{
                    duration: 0.2,
                    repeat: Infinity,
                  }}
                >
                  <div className="absolute inset-0 text-red-500" style={{ transform: 'translate(-3px, 0)' }}>
                    {glitchText}
                  </div>
                  <div className="absolute inset-0 text-blue-500" style={{ transform: 'translate(3px, 0)' }}>
                    {glitchText}
                  </div>
                </motion.div>

                {/* Horizontal Glitch Bars */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute left-0 right-0 bg-white/30 backdrop-invert"
                    style={{
                      height: `${Math.random() * 10 + 2}px`,
                      top: `${(100 / 8) * i}%`,
                    }}
                    initial={{ scaleX: 0, x: '-100%' }}
                    animate={{
                      scaleX: [0, 1, 0],
                      x: ['-100%', '0%', '100%'],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 0.3,
                      delay: i * 0.05,
                      repeat: Infinity,
                      repeatDelay: 0.3,
                    }}
                  />
                ))}
              </motion.div>
            )}

            {/* Phase 4: Epic Particle Explosion */}
            {phase === 4 && (
              <motion.div
                key="phase4"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="relative h-screen flex items-center justify-center"
              >
                {/* Central Rocket */}
                <motion.div
                  className="text-[8rem] sm:text-[12rem] md:text-[16rem] z-20 relative"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{
                    scale: [0, 1.5, 20],
                    rotate: [0, 360, 1080],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    times: [0, 0.5, 1],
                    ease: 'easeOut',
                  }}
                >
                  🚀
                </motion.div>

                {/* Particle Explosion */}
                {particles.map((particle, i) => (
                  <motion.div
                    key={particle.id}
                    className="absolute top-1/2 left-1/2 rounded-full"
                    style={{
                      width: `${Math.random() * 20 + 10}px`,
                      height: `${Math.random() * 20 + 10}px`,
                      background: `hsl(${Math.random() * 60 + 10}, 100%, 50%)`,
                    }}
                    initial={{
                      x: 0,
                      y: 0,
                      opacity: 1,
                      scale: 0,
                    }}
                    animate={{
                      x: particle.x * (1 + Math.random()),
                      y: particle.y * (1 + Math.random()),
                      opacity: 0,
                      scale: [0, 2, 0],
                      rotate: Math.random() * 360,
                    }}
                    transition={{
                      duration: 1.5,
                      delay: i * 0.01,
                      ease: 'easeOut',
                    }}
                  />
                ))}

                {/* Expanding Rings */}
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={`ring-${i}`}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-4 rounded-full"
                    style={{
                      borderColor: `hsl(${30 + i * 10}, 100%, 50%)`,
                    }}
                    initial={{
                      width: 0,
                      height: 0,
                      opacity: 1,
                    }}
                    animate={{
                      width: [0, 2000],
                      height: [0, 2000],
                      opacity: [1, 0],
                      borderWidth: [8, 0],
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.1,
                      ease: 'easeOut',
                    }}
                  />
                ))}

                {/* Flash Effect */}
                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 0.5, times: [0, 0.1, 1] }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Persistent Corner Code Symbols */}
        {phase < 4 && (
          <>
            <motion.div
              className="absolute top-4 left-4 sm:top-8 sm:left-8 text-green-500 font-mono text-sm sm:text-base md:text-xl font-bold opacity-40"
              animate={{
                opacity: [0.2, 0.6, 0.2],
                rotate: [0, 5, 0],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              {'</>'}
            </motion.div>
            <motion.div
              className="absolute top-4 right-4 sm:top-8 sm:right-8 text-orange-500 font-mono text-sm sm:text-base md:text-xl font-bold opacity-40"
              animate={{
                opacity: [0.2, 0.6, 0.2],
                rotate: [0, -5, 0],
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            >
              {'{ }'}
            </motion.div>
            <motion.div
              className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 text-purple-500 font-mono text-sm sm:text-base md:text-xl font-bold opacity-40"
              animate={{
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            >
              {'[ ]'}
            </motion.div>
            <motion.div
              className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 text-yellow-500 font-mono text-sm sm:text-base md:text-xl font-bold opacity-40"
              animate={{
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            >
              {'( )'}
            </motion.div>
          </>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
