export const WaveBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-background">
      <svg
        className="absolute w-full h-full"
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="wave-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(245, 60%, 88%)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(227, 95%, 68%)" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="wave-gradient-2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(227, 95%, 78%)" stopOpacity="0.2" />
            <stop offset="100%" stopColor="hsl(245, 60%, 92%)" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        
        <path
          d="M0,160 C320,280 420,100 720,160 C1020,220 1120,180 1440,120 L1440,800 L0,800 Z"
          fill="url(#wave-gradient-1)"
        />
        <path
          d="M0,240 C360,340 480,180 840,240 C1200,300 1280,220 1440,200 L1440,800 L0,800 Z"
          fill="url(#wave-gradient-2)"
        />
      </svg>
    </div>
  );
};

export default WaveBackground;
