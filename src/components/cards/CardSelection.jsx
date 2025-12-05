import React, { useEffect, useMemo, useRef } from 'react';
import { Sparkles, Stars, ArrowRight, Hand } from 'lucide-react';

const CardSelection = ({ onSelect, ritualState, pickedCount }) => {
  const cards = useMemo(() => Array.from({ length: 78 }), []);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    if (ritualState === 'ready' && scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      container.scrollLeft = (container.scrollWidth - container.clientWidth) / 2;
    }
  }, [ritualState]);

  if (ritualState === 'cleansing' || ritualState === 'idle') {
    return <div className="h-64 md:h-96 w-full" />;
  }

  if (ritualState === 'shuffling') {
    return (
      <div className="relative h-64 w-full flex items-center justify-center perspective-1000">
        <div className="relative w-32 h-48">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute inset-0 bg-gradient-to-br from-indigo-950 to-violet-950 border border-white/20 rounded-lg shadow-2xl animate-shake"
              style={{
                transform: `rotate(${i * 2 - 4}deg) translate(${i}px, -${i}px)`,
                animationDelay: `${i * 0.05}s`,
                zIndex: i
              }}
            >
              <div className="w-full h-full rounded-lg bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-40" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full relative group animate-in fade-in duration-700">
      <div
        ref={scrollContainerRef}
        className="w-full overflow-x-auto scrollbar-hide py-12 px-4 md:px-0 cursor-grab active:cursor-grabbing perspective-1000"
      >
        <div className="flex flex-col gap-6 w-max mx-auto min-w-full px-10">
          <div className="flex -space-x-12 hover:-space-x-8 transition-all duration-500 ease-out py-2">
            {cards.slice(0, 39).map((_, i) => (
              <div
                key={`row1-${i}`}
                onClick={onSelect}
                className="relative w-20 h-32 md:w-24 md:h-40 bg-gradient-to-br from-indigo-950 to-violet-950 border border-white/20 rounded-lg shadow-lg cursor-pointer transition-all duration-300 transform hover:-translate-y-10 hover:scale-110 hover:z-50 hover:shadow-[0_0_20px_rgba(167,139,250,0.8)] hover:border-violet-300 group-hover:rotate-0"
                style={{
                  transitionDelay: `${i * 10}ms`,
                  zIndex: i
                }}
              >
                <div className="w-full h-full rounded-lg bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center opacity-30">
                    <Sparkles className="w-4 h-4 text-violet-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex -space-x-12 hover:-space-x-8 transition-all duration-500 ease-out py-2 ml-10">
            {cards.slice(39, 78).map((_, i) => (
              <div
                key={`row2-${i}`}
                onClick={onSelect}
                className="relative w-20 h-32 md:w-24 md:h-40 bg-gradient-to-br from-indigo-950 to-violet-950 border border-white/20 rounded-lg shadow-lg cursor-pointer transition-all duration-300 transform hover:-translate-y-10 hover:scale-110 hover:z-50 hover:shadow-[0_0_20px_rgba(167,139,250,0.8)] hover:border-violet-300"
                style={{
                  transitionDelay: `${i * 10}ms`,
                  zIndex: i + 100
                }}
              >
                <div className="w-full h-full rounded-lg bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center opacity-30">
                    <Stars className="w-4 h-4 text-violet-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute left-2 top-1/2 -translate-y-1/2 text-white/20 pointer-events-none animate-pulse">
        <ArrowRight className="w-8 h-8 rotate-180" />
      </div>
      <div className="absolute right-2 top-1/2 -translate-y-1/2 text-white/20 pointer-events-none animate-pulse">
        <ArrowRight className="w-8 h-8" />
      </div>

      <div className={`absolute bottom-24 text-center transition-opacity duration-1000 ${pickedCount === 0 && ritualState === 'ready' ? 'opacity-100' : 'opacity-0'}`}>
        <p className="text-slate-500 text-sm flex items-center justify-center gap-2 animate-pulse">
          <Hand className="w-4 h-4" /> Kéo sang ngang & Chạm để rút
        </p>
      </div>
    </div>
  );
};

export default CardSelection;
