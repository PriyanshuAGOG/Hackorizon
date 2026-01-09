import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onLoadComplete: () => void;
}

export default function LoadingScreen({ onLoadComplete }: LoadingScreenProps) {
  const [phase, setPhase] = useState(1);
  const [terminalText, setTerminalText] = useState<string[]>([]);
  const [progress1, setProgress1] = useState(0);
  const [progress2, setProgress2] = useState(0);
  const [progress3, setProgress3] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [glitchText, setGlitchText] = useState('HACKORIZON');

  // Phase 1: Terminal Access
  useEffect(() => {
    if (phase !== 1) return;

    const sequence = [
      { text: '> ACCESS RESTRICTED', delay: 300 },
      { text: '> Scanning credentials...', delay: 800 },
      { text: '> Enter password: ', delay: 1000 },
      { text: 'password', delay: 1500, isPassword: true },
      { text: '> Verifying access...', delay: 2200 },
      { text: '> ACCESS GRANTED ✓', delay: 2800 },
      { text: '> Initializing HACKORIZON mainframe...', delay: 3300 },
    ];

    sequence.forEach((item, index) => {
      setTimeout(() => {
        setTerminalText(prev => [...prev, item.text]);
        if (item.isPassword) {
          setShowPassword(true);
          setTimeout(() => {
            setTerminalText(prev => [...prev.slice(0, -1), '> Enter password: ********']);
          }, 500);
        }
        if (index === sequence.length - 1) {
          setTimeout(() => setPhase(2), 800);
        }
      }, item.delay);
    });
  }, [phase]);

  // Phase 2: Progress Bars
  useEffect(() => {
    if (phase !== 2) return;

    // Progress bar 1
    const interval1 = setInterval(() => {
      setProgress1(prev => {
        if (prev >= 100) {
          clearInterval(interval1);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    // Progress bar 2 (starts after 0.8s)
    setTimeout(() => {
      const interval2 = setInterval(() => {
        setProgress2(prev => {
          if (prev >= 100) {
            clearInterval(interval2);
            return 100;
          }
          return prev + Math.random() * 18;
        });
      }, 80);
    }, 800);

    // Progress bar 3 (starts after 1.5s)
    setTimeout(() => {
      const interval3 = setInterval(() => {
        setProgress3(prev => {
          if (prev >= 100) {
            clearInterval(interval3);
            return 100;
          }
          return prev + Math.random() * 20;
        });
      }, 70);
    }, 1500);

    // Move to phase 3 after all complete
    setTimeout(() => setPhase(3), 4500);

    return () => {
      clearInterval(interval1);
    };
  }, [phase]);

  // Phase 3: Glitch Effect
  useEffect(() => {
    if (phase !== 3) return;

    const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`';
    const originalText = 'HACKORIZON';
    let glitchCount = 0;

    const glitchInterval = setInterval(() => {
      setGlitchText(
        originalText
          .split('')
          .map(char => (Math.random() > 0.7 ? glitchChars[Math.floor(Math.random() * glitchChars.length)] : char))
          .join('')
      );

      glitchCount++;
      if (glitchCount > 15) {
        setGlitchText(originalText);
        clearInterval(glitchInterval);
        setTimeout(() => setPhase(4), 800);
      }
    }, 100);

    return () => clearInterval(glitchInterval);
  }, [phase]);

  // Phase 4: Complete
  useEffect(() => {
    if (phase === 4) {
      setTimeout(() => {
        onLoadComplete();
      }, 2000);
    }
  }, [phase, onLoadComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Animated Background */}
        <div className="absolute inset-0 bg-black">
          {/* Matrix Rain Effect */}
          <div className="absolute inset-0 opacity-20">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-green-500 font-mono text-xs"
                style={{ left: `${(i * 100) / 30}%` }}
                initial={{ y: -100, opacity: 0 }}
                animate={{
                  y: '100vh',
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: 'linear',
                }}
              >
                {Array(20)
                  .fill(0)
                  .map(() => String.fromCharCode(33 + Math.random() * 94))
                  .join('')}
              </motion.div>
            ))}
          </div>

          {/* Circuit Pattern Overlay */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full">
              <defs>
                <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  <motion.path
                    d="M10,10 L50,10 L50,50 L90,50 M50,50 L50,90"
                    stroke="url(#grad1)"
                    strokeWidth="1"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </pattern>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fb923c" />
                  <stop offset="100%" stopColor="#f59e0b" />
                </linearGradient>
              </defs>
              <rect width="100%" height="100%" fill="url(#circuit)" />
            </svg>
          </div>

          {/* Radial Gradient Glow */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(251, 146, 60, 0.15) 0%, transparent 60%)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Phase 1: Terminal */}
          {phase === 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-black/80 backdrop-blur-xl border-2 border-green-500/50 rounded-lg p-6 sm:p-8 md:p-12 shadow-2xl shadow-green-500/20"
            >
              <div className="font-mono text-sm sm:text-base md:text-lg space-y-2 sm:space-y-3">
                {terminalText.map((text, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`${
                      text.includes('ACCESS GRANTED')
                        ? 'text-green-400 font-bold text-lg sm:text-xl'
                        : text.includes('RESTRICTED')
                        ? 'text-red-500 font-bold'
                        : 'text-green-500'
                    }`}
                  >
                    {text}
                    {index === terminalText.length - 1 && !text.includes('✓') && (
                      <motion.span
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                        className="inline-block ml-1"
                      >
                        █
                      </motion.span>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Scanning Line Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/10 to-transparent h-24 pointer-events-none"
                animate={{ y: ['0%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              />
            </motion.div>
          )}

          {/* Phase 2: Progress Bars */}
          {phase === 2 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              className="space-y-6 sm:space-y-8 md:space-y-10"
            >
              {/* Logo/Title */}
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
              >
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-600 bg-clip-text text-transparent mb-2 sm:mb-4">
                  HACKORIZON
                </h1>
                <p className="text-green-400 font-mono text-xs sm:text-sm md:text-base">INITIALIZING SYSTEMS...</p>
              </motion.div>

              {/* Progress Bar 1 */}
              <div className="space-y-2 sm:space-y-3">
                <div className="flex justify-between items-center font-mono text-xs sm:text-sm text-green-400">
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    [LOADING] BRILLIANCE MODULE
                  </motion.span>
                  <motion.span
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    {Math.min(Math.round(progress1), 100)}%
                  </motion.span>
                </div>
                <div className="h-3 sm:h-4 bg-gray-900 rounded-full overflow-hidden border border-green-500/30 shadow-lg">
                  <motion.div
                    className="h-full bg-gradient-to-r from-green-500 to-emerald-400 relative overflow-hidden"
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.min(progress1, 100)}%` }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                    />
                  </motion.div>
                </div>
              </div>

              {/* Progress Bar 2 */}
              {progress2 > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-2 sm:space-y-3"
                >
                  <div className="flex justify-between items-center font-mono text-xs sm:text-sm text-orange-400">
                    <span>[COMPILING] CREATIVITY ENGINE</span>
                    <motion.span
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      {Math.min(Math.round(progress2), 100)}%
                    </motion.span>
                  </div>
                  <div className="h-3 sm:h-4 bg-gray-900 rounded-full overflow-hidden border border-orange-500/30 shadow-lg">
                    <motion.div
                      className="h-full bg-gradient-to-r from-orange-500 to-yellow-400 relative overflow-hidden"
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.min(progress2, 100)}%` }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        animate={{ x: ['-100%', '200%'] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              )}

              {/* Progress Bar 3 */}
              {progress3 > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-2 sm:space-y-3"
                >
                  <div className="flex justify-between items-center font-mono text-xs sm:text-sm text-purple-400">
                    <span>[INITIALIZING] INNOVATION PROTOCOLS</span>
                    <motion.span
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      {Math.min(Math.round(progress3), 100)}%
                    </motion.span>
                  </div>
                  <div className="h-3 sm:h-4 bg-gray-900 rounded-full overflow-hidden border border-purple-500/30 shadow-lg">
                    <motion.div
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-400 relative overflow-hidden"
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.min(progress3, 100)}%` }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        animate={{ x: ['-100%', '200%'] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              )}

              {/* System Status */}
              {progress1 >= 100 && progress2 >= 100 && progress3 >= 100 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center font-mono text-green-400 text-sm sm:text-base md:text-lg font-bold"
                >
                  <motion.div
                    animate={{
                      textShadow: [
                        '0 0 10px rgba(34, 197, 94, 0.5)',
                        '0 0 20px rgba(34, 197, 94, 0.8)',
                        '0 0 10px rgba(34, 197, 94, 0.5)',
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

          {/* Phase 3: Glitch Effect */}
          {phase === 3 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center"
            >
              <motion.h1
                className="text-6xl sm:text-7xl md:text-9xl font-bold tracking-wider"
                style={{
                  textShadow: '0 0 20px rgba(251, 146, 60, 0.8), 0 0 40px rgba(251, 146, 60, 0.5)',
                }}
                animate={{
                  x: [0, -5, 5, -5, 5, 0],
                  y: [0, 5, -5, 5, -5, 0],
                  scale: [1, 1.05, 0.95, 1.05, 0.95, 1],
                }}
                transition={{
                  duration: 0.3,
                  repeat: Infinity,
                  repeatType: 'mirror',
                }}
              >
                {glitchText.split('').map((char, index) => (
                  <motion.span
                    key={index}
                    className={`inline-block ${
                      Math.random() > 0.5 ? 'text-orange-500' : 'text-yellow-500'
                    }`}
                    animate={{
                      opacity: [1, 0.5, 1],
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 0.2,
                      delay: index * 0.05,
                      repeat: Infinity,
                    }}
                    style={{
                      textShadow:
                        Math.random() > 0.5
                          ? '2px 2px 0 #00ff00, -2px -2px 0 #ff0000'
                          : '0 0 10px currentColor',
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.h1>

              {/* Glitch Bars */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute left-0 right-0 h-1 bg-white/20"
                  style={{ top: `${20 * i}%` }}
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{
                    opacity: [0, 1, 0],
                    scaleX: [0, 1, 0],
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.1,
                    repeat: Infinity,
                    repeatDelay: 0.5,
                  }}
                />
              ))}
            </motion.div>
          )}

          {/* Phase 4: Particle Explosion */}
          {phase === 4 && (
            <motion.div
              initial={{ scale: 0, rotate: 0 }}
              animate={{ scale: 50, rotate: 360 }}
              transition={{ duration: 2, ease: 'easeOut' }}
              className="text-center"
            >
              <div className="relative">
                {/* Central Explosion */}
                <motion.div
                  className="text-8xl sm:text-9xl md:text-[12rem] font-bold bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-600 bg-clip-text text-transparent"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: [0, 1.5, 1], opacity: [0, 1, 0] }}
                  transition={{ duration: 1.5 }}
                >
                  🚀
                </motion.div>

                {/* Particle Burst */}
                {[...Array(30)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute top-1/2 left-1/2 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full"
                    style={{
                      background: `hsl(${Math.random() * 60 + 20}, 100%, 50%)`,
                    }}
                    initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                    animate={{
                      x: Math.cos((i * 2 * Math.PI) / 30) * 500,
                      y: Math.sin((i * 2 * Math.PI) / 30) * 500,
                      opacity: 0,
                      scale: [1, 2, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      ease: 'easeOut',
                    }}
                  />
                ))}

                {/* Ring Waves */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-4 border-orange-500 rounded-full"
                    initial={{ width: 0, height: 0, opacity: 1 }}
                    animate={{
                      width: 1000,
                      height: 1000,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.3,
                      ease: 'easeOut',
                    }}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* Corner Decorations */}
        <motion.div
          className="absolute top-4 left-4 sm:top-8 sm:left-8 text-green-500 font-mono text-xs sm:text-sm opacity-50"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {'</>'}
        </motion.div>
        <motion.div
          className="absolute top-4 right-4 sm:top-8 sm:right-8 text-orange-500 font-mono text-xs sm:text-sm opacity-50"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        >
          {'{ }'}
        </motion.div>
        <motion.div
          className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 text-purple-500 font-mono text-xs sm:text-sm opacity-50"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        >
          {'[ ]'}
        </motion.div>
        <motion.div
          className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 text-yellow-500 font-mono text-xs sm:text-sm opacity-50"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
        >
          {'( )'}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
