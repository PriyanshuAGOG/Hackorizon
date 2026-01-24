// Techy sound effects for the loading screen using Web Audio API
// All sounds are generated programmatically - no external files needed

let audioContext: AudioContext | null = null;

const getAudioContext = (): AudioContext => {
  if (!audioContext || audioContext.state === 'closed') {
    audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
  }
  if (audioContext.state === 'suspended') {
    audioContext.resume();
  }
  return audioContext;
};

export const loadingSounds = {
  // Mechanical keyboard typing - realistic clicky sound
  terminalType: () => {
    try {
      const ctx = getAudioContext();
      
      // Create noise burst for key click
      const bufferSize = ctx.sampleRate * 0.015; // 15ms
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      
      // Generate click noise
      for (let i = 0; i < bufferSize; i++) {
        const t = i / bufferSize;
        // Sharp attack, quick decay
        const envelope = Math.exp(-t * 40);
        data[i] = (Math.random() * 2 - 1) * envelope;
      }
      
      const source = ctx.createBufferSource();
      source.buffer = buffer;
      
      // Bandpass filter for typewriter character
      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.value = 2000 + Math.random() * 1500;
      filter.Q.value = 2;
      
      const gain = ctx.createGain();
      gain.gain.value = 0.15;
      
      source.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      
      source.start();
    } catch (e) {
      console.log('Audio not supported');
    }
  },

  // Command execution - sci-fi computer beep sequence
  commandExecute: () => {
    try {
      const ctx = getAudioContext();
      const now = ctx.currentTime;
      
      // Three-tone confirmation beep (like Star Trek computer)
      const frequencies = [880, 1100, 1320];
      
      frequencies.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        
        osc.connect(gain);
        gain.connect(ctx.destination);
        
        osc.frequency.value = freq;
        osc.type = 'sine';
        
        const startTime = now + i * 0.06;
        gain.gain.setValueAtTime(0, startTime);
        gain.gain.linearRampToValueAtTime(0.12, startTime + 0.01);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.08);
        
        osc.start(startTime);
        osc.stop(startTime + 0.1);
      });
    } catch (e) {
      console.log('Audio not supported');
    }
  },

  // System boot - retro computer startup
  systemBoot: () => {
    try {
      const ctx = getAudioContext();
      const now = ctx.currentTime;
      
      // Rising frequency sweep
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(80, now);
      osc.frequency.exponentialRampToValueAtTime(400, now + 0.2);
      osc.frequency.exponentialRampToValueAtTime(600, now + 0.4);
      
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.setValueAtTime(0.08, now + 0.35);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
      
      osc.start(now);
      osc.stop(now + 0.5);
      
      // Add confirmation beep
      setTimeout(() => {
        const beep = ctx.createOscillator();
        const beepGain = ctx.createGain();
        beep.connect(beepGain);
        beepGain.connect(ctx.destination);
        beep.frequency.value = 800;
        beep.type = 'sine';
        beepGain.gain.setValueAtTime(0.1, ctx.currentTime);
        beepGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
        beep.start();
        beep.stop(ctx.currentTime + 0.15);
      }, 500);
    } catch (e) {
      console.log('Audio not supported');
    }
  },

  // Data processing blip
  dataBlip: () => {
    try {
      const ctx = getAudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.frequency.value = 1200 + Math.random() * 600;
      osc.type = 'sine';
      
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);
      
      osc.start();
      osc.stop(ctx.currentTime + 0.05);
    } catch (e) {
      console.log('Audio not supported');
    }
  },

  // ROBOTIC VOICE "ACCESS GRANTED" using Speech Synthesis
  accessGranted: () => {
    try {
      // Check if speech synthesis is available
      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance('Access Granted');
        
        // Get available voices and prefer a robotic-sounding one
        const voices = window.speechSynthesis.getVoices();
        
        // Try to find a suitable voice (prefer Google US English or similar)
        const preferredVoice = voices.find(v => 
          v.name.includes('Google') || 
          v.name.includes('Microsoft David') ||
          v.name.includes('Microsoft Mark') ||
          v.name.includes('Microsoft Zira') ||
          v.lang.startsWith('en')
        ) || voices[0];
        
        if (preferredVoice) {
          utterance.voice = preferredVoice;
        }
        
        // Robotic voice settings
        utterance.rate = 0.8; // Slower for dramatic effect
        utterance.pitch = 0.3; // Lower pitch for robotic feel
        utterance.volume = 1;
        
        // Cancel any ongoing speech
        window.speechSynthesis.cancel();
        
        // Add electronic effect with tones
        const ctx = getAudioContext();
        const now = ctx.currentTime;
        
        // Pre-speech electronic tone
        const preBeep = ctx.createOscillator();
        const preGain = ctx.createGain();
        preBeep.connect(preGain);
        preGain.connect(ctx.destination);
        preBeep.frequency.value = 440;
        preBeep.type = 'square';
        preGain.gain.setValueAtTime(0.08, now);
        preGain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
        preBeep.start(now);
        preBeep.stop(now + 0.1);
        
        // Speak after short delay
        setTimeout(() => {
          window.speechSynthesis.speak(utterance);
        }, 150);
        
        // Post-speech confirmation tone
        utterance.onend = () => {
          const ctx2 = getAudioContext();
          const now2 = ctx2.currentTime;
          
          // Success fanfare
          [523, 659, 784, 1047].forEach((freq, i) => {
            const osc = ctx2.createOscillator();
            const gain = ctx2.createGain();
            osc.connect(gain);
            gain.connect(ctx2.destination);
            osc.frequency.value = freq;
            osc.type = 'sine';
            
            const startTime = now2 + i * 0.08;
            gain.gain.setValueAtTime(0, startTime);
            gain.gain.linearRampToValueAtTime(0.12, startTime + 0.02);
            gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.2);
            
            osc.start(startTime);
            osc.stop(startTime + 0.25);
          });
        };
      } else {
        // Fallback: synthesized robotic sound pattern if no speech synthesis
        loadingSounds.accessGrantedFallback();
      }
    } catch (e) {
      console.log('Speech synthesis not supported, using fallback');
      loadingSounds.accessGrantedFallback();
    }
  },

  // Fallback robotic sound if speech synthesis unavailable
  accessGrantedFallback: () => {
    try {
      const ctx = getAudioContext();
      const now = ctx.currentTime;
      
      // Create robotic beep pattern that mimics "access granted" rhythm
      const pattern = [
        { freq: 400, duration: 0.15, gap: 0.05 },  // "ac"
        { freq: 500, duration: 0.15, gap: 0.05 },  // "cess"
        { freq: 600, duration: 0.2, gap: 0.15 },   // pause
        { freq: 450, duration: 0.15, gap: 0.05 },  // "gran"
        { freq: 550, duration: 0.2, gap: 0 },      // "ted"
      ];
      
      let time = now;
      pattern.forEach(note => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        
        osc.connect(gain);
        gain.connect(ctx.destination);
        
        osc.frequency.value = note.freq;
        osc.type = 'square';
        
        gain.gain.setValueAtTime(0, time);
        gain.gain.linearRampToValueAtTime(0.15, time + 0.02);
        gain.gain.setValueAtTime(0.15, time + note.duration - 0.02);
        gain.gain.linearRampToValueAtTime(0, time + note.duration);
        
        osc.start(time);
        osc.stop(time + note.duration);
        
        time += note.duration + note.gap;
      });
      
      // Final confirmation chord
      setTimeout(() => {
        const ctx2 = getAudioContext();
        const now2 = ctx2.currentTime;
        
        [523, 659, 784].forEach(freq => {
          const osc = ctx2.createOscillator();
          const gain = ctx2.createGain();
          osc.connect(gain);
          gain.connect(ctx2.destination);
          osc.frequency.value = freq;
          osc.type = 'sine';
          gain.gain.setValueAtTime(0.1, now2);
          gain.gain.exponentialRampToValueAtTime(0.001, now2 + 0.4);
          osc.start(now2);
          osc.stop(now2 + 0.4);
        });
      }, 800);
    } catch (e) {
      console.log('Audio not supported');
    }
  },

  // Glitch static effect
  glitch: () => {
    try {
      const ctx = getAudioContext();
      const bufferSize = ctx.sampleRate * 0.05; // 50ms of noise
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / bufferSize * 3);
      }
      
      const source = ctx.createBufferSource();
      source.buffer = buffer;
      
      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.value = 2000;
      filter.Q.value = 1;
      
      const gain = ctx.createGain();
      gain.gain.value = 0.1;
      
      source.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      
      source.start();
    } catch (e) {
      console.log('Audio not supported');
    }
  },

  // Whoosh transition sound
  whoosh: () => {
    try {
      const ctx = getAudioContext();
      const duration = 0.3;
      const bufferSize = ctx.sampleRate * duration;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      
      // Create whoosh with filtered noise
      for (let i = 0; i < bufferSize; i++) {
        const t = i / bufferSize;
        const envelope = Math.sin(t * Math.PI) * (1 - t);
        data[i] = (Math.random() * 2 - 1) * envelope;
      }
      
      const source = ctx.createBufferSource();
      source.buffer = buffer;
      
      const filter = ctx.createBiquadFilter();
      filter.type = 'highpass';
      filter.frequency.setValueAtTime(500, ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(3000, ctx.currentTime + duration);
      
      const gain = ctx.createGain();
      gain.gain.value = 0.15;
      
      source.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      
      source.start();
    } catch (e) {
      console.log('Audio not supported');
    }
  },

  // Initialize voices (call this early to ensure voices are loaded)
  initVoices: () => {
    if ('speechSynthesis' in window) {
      // Force loading of voices
      window.speechSynthesis.getVoices();
      
      // Some browsers need this event
      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = () => {
          window.speechSynthesis.getVoices();
        };
      }
    }
  }
};
