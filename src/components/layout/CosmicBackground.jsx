import React from 'react';

const CosmicBackground = React.memo(() => (
  <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#0a0514] pointer-events-none transform-gpu">
    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,#2d1b4e,transparent_50%)] will-change-transform"></div>
    <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_90%,#1e1b4b,transparent_50%)] will-change-transform"></div>
    <div className="absolute top-0 left-0 w-full h-full opacity-30 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] animate-[pulse_10s_ease-in-out_infinite]"></div>
    {[...Array(20)].map((_, i) => (
      <div
        key={i}
        className="absolute rounded-full bg-white will-change-opacity"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          width: `${Math.random() * 2 + 1}px`,
          height: `${Math.random() * 2 + 1}px`,
          opacity: Math.random() * 0.5 + 0.2,
          animation: `twinkle ${Math.random() * 5 + 3}s infinite ease-in-out ${Math.random() * 5}s`
        }}
      />
    ))}
    <style>{`
      @keyframes twinkle {
        0%, 100% { opacity: 0.2; transform: scale(1); }
        50% { opacity: 0.8; transform: scale(1.2); }
      }
      @keyframes shake {
        0% { transform: translate(1px, 1px) rotate(0deg); }
        10% { transform: translate(-1px, -2px) rotate(-1deg); }
        20% { transform: translate(-3px, 0px) rotate(1deg); }
        30% { transform: translate(3px, 2px) rotate(0deg); }
        40% { transform: translate(1px, -1px) rotate(1deg); }
        50% { transform: translate(-1px, 2px) rotate(-1deg); }
        60% { transform: translate(-3px, 1px) rotate(0deg); }
        70% { transform: translate(3px, 1px) rotate(-1deg); }
        80% { transform: translate(-1px, -1px) rotate(1deg); }
        90% { transform: translate(1px, 2px) rotate(0deg); }
        100% { transform: translate(1px, -2px) rotate(-1deg); }
      }
      .animate-shake {
        animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both infinite;
      }
      .cleanse-flash {
        animation: cleanse 2s ease-out forwards;
      }
      @keyframes cleanse {
        0% { opacity: 0; transform: scale(0.9); background-color: transparent; }
        20% { opacity: 1; background-color: rgba(139, 92, 246, 0.3); backdrop-filter: brightness(1.5) blur(5px); }
        100% { opacity: 0; transform: scale(1.1); background-color: transparent; }
      }
      /* Hide scrollbar for Chrome, Safari and Opera */
      .scrollbar-hide::-webkit-scrollbar {
          display: none;
      }
      /* Hide scrollbar for IE, Edge and Firefox */
      .scrollbar-hide {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
      }
    `}</style>
  </div>
));

export default CosmicBackground;
