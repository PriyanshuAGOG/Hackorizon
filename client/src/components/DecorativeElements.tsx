export function Star({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L13 11L22 12L13 13L12 22L11 13L2 12L11 11L12 2Z" fill="currentColor"/>
    </svg>
  );
}

export function Cross({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 0V16M0 8H16" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}

export function Diamond({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 1L15 8L8 15L1 8L8 1Z" fill="currentColor"/>
    </svg>
  );
}

export function FlowingLine() {
  return (
    <svg className="w-full h-32" viewBox="0 0 400 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M0,50 Q50,20 100,50 T200,50 T300,50 T400,50" 
        stroke="currentColor" 
        strokeWidth="2" 
        fill="none"
        className="text-foreground opacity-30"
      />
      <path 
        d="M0,60 Q50,80 100,60 T200,60 T300,60 T400,60" 
        stroke="currentColor" 
        strokeWidth="2" 
        fill="none"
        className="text-foreground opacity-20"
      />
    </svg>
  );
}
