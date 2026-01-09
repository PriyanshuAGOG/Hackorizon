export default function CircuitPattern() {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-[0.15]" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="circuit" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
          <path d="M 20 20 L 80 20" stroke="#E8DCC4" strokeWidth="1" fill="none"/>
          <path d="M 80 20 L 80 60" stroke="#E8DCC4" strokeWidth="1" fill="none"/>
          <path d="M 80 60 L 140 60" stroke="#E8DCC4" strokeWidth="1" fill="none"/>
          <path d="M 140 60 L 140 120" stroke="#E8DCC4" strokeWidth="1" fill="none"/>
          <circle cx="80" cy="20" r="3" fill="#E8DCC4"/>
          <circle cx="80" cy="60" r="3" fill="#E8DCC4"/>
          <circle cx="140" cy="60" r="3" fill="#E8DCC4"/>
          
          <path d="M 60 100 L 120 100" stroke="#E8DCC4" strokeWidth="1" fill="none"/>
          <path d="M 120 100 L 120 160" stroke="#E8DCC4" strokeWidth="1" fill="none"/>
          <circle cx="60" cy="100" r="3" fill="#E8DCC4"/>
          <circle cx="120" cy="100" r="3" fill="#E8DCC4"/>
          
          <path d="M 160 40 L 160 100" stroke="#E8DCC4" strokeWidth="1" fill="none"/>
          <path d="M 160 100 L 180 100" stroke="#E8DCC4" strokeWidth="1" fill="none"/>
          <circle cx="160" cy="40" r="3" fill="#E8DCC4"/>
          <circle cx="160" cy="100" r="3" fill="#E8DCC4"/>
          
          <rect x="75" y="55" width="10" height="10" fill="none" stroke="#E8DCC4" strokeWidth="1"/>
          <rect x="135" y="115" width="10" height="10" fill="none" stroke="#E8DCC4" strokeWidth="1"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#circuit)" />
    </svg>
  );
}
