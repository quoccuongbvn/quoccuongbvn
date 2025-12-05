import React, { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

const ResultCard = ({ card, position, index, isVisible }) => {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setFlipped(true), index * 600 + 800);
      return () => clearTimeout(timer);
    }
    setFlipped(false);
    return undefined;
  }, [index, isVisible]);

  return (
    <div
      className={`flex flex-col items-center gap-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="group relative w-full max-w-[220px] aspect-[2/3] perspective-1000">
        <div className={`w-full h-full transition-all duration-[1200ms] transform-style-3d ${flipped ? 'rotate-y-180' : ''}`}>
          <div className="absolute inset-0 w-full h-full backface-hidden bg-gradient-to-br from-violet-900 to-slate-900 rounded-xl border border-white/10 shadow-2xl flex items-center justify-center">
            <Sparkles className="text-violet-400/50 w-8 h-8 animate-pulse" />
          </div>

          <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-slate-900 rounded-xl overflow-hidden border border-violet-500/50 shadow-[0_0_30px_rgba(139,92,246,0.3)]">
            <img src={card.image} alt={card.name} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-90" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
              <h3 className="text-lg font-bold text-white font-serif tracking-wider">{card.nameVN}</h3>
              <p className="text-xs text-violet-300 uppercase tracking-widest">{card.name}</p>
            </div>
          </div>
        </div>
      </div>

      <div className={`text-center transition-all duration-1000 delay-[800ms] ${flipped ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <span className="inline-block px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-bold uppercase tracking-widest mb-2 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
          {position}
        </span>
      </div>
    </div>
  );
};

export default ResultCard;
