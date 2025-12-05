import React, { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';
import CardSelection from '../components/cards/CardSelection';

const PickingSection = ({ question, pickedCount, handlePickCard, isActive }) => {
  const [ritualState, setRitualState] = useState('idle');
  const [hasTriggeredRitual, setHasTriggeredRitual] = useState(false);

  useEffect(() => {
    if (isActive && !hasTriggeredRitual) {
      setHasTriggeredRitual(true);
      const flashStartDelay = 600;

      setTimeout(() => {
        setRitualState('cleansing');

        setTimeout(() => {
          setRitualState('shuffling');

          setTimeout(() => {
            setRitualState('ready');
          }, 2500);
        }, 2000);
      }, flashStartDelay);
    }

    if (!isActive) {
      setHasTriggeredRitual(false);
      setRitualState('idle');
    }
  }, [isActive, hasTriggeredRitual]);

  return (
    <section className="h-screen w-full flex flex-col items-center justify-center px-4 relative flex-shrink-0">
      {ritualState === 'cleansing' && (
        <div className="absolute inset-0 z-50 flex items-center justify-center pointer-events-none cleanse-flash">
          <div className="absolute inset-0 bg-violet-500/20 mix-blend-overlay" />
          <div className="text-3xl md:text-5xl font-serif text-white drop-shadow-[0_0_30px_rgba(255,255,255,1)] animate-pulse text-center px-4">
            <Sparkles className="inline-block w-8 h-8 mb-2 mr-2" />
            Thanh Tẩy Năng Lượng...
          </div>
        </div>
      )}

      <div className="w-full flex flex-col items-center justify-center max-w-6xl mx-auto">
        <div className={`text-center mb-8 transition-all duration-1000 delay-500 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <div className="inline-block mb-4">
            <div className="px-6 py-3 rounded-2xl bg-violet-900/30 border border-violet-500/30 backdrop-blur-md">
              <p className="text-violet-200 text-lg font-serif italic">"{question}"</p>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
            {ritualState === 'cleansing'
              ? 'Đang Làm Sạch Tâm Trí'
              : ritualState === 'shuffling'
                ? 'Đang Xào Bài...'
                : 'Lắng Nghe Trực Giác'}
          </h2>
          <p className="text-slate-400 mb-8 max-w-md mx-auto h-6 transition-all">
            {ritualState === 'shuffling'
              ? 'Vũ trụ đang sắp xếp các thông điệp...'
              : ritualState === 'ready'
                ? 'Chọn 3 lá bài khi bạn cảm thấy được thôi thúc mạnh mẽ nhất.'
                : '...'}
          </p>

          <div className="flex justify-center gap-4">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full transition-all duration-500 border border-violet-500/50 ${i < pickedCount ? 'bg-violet-400 scale-125 shadow-[0_0_10px_rgba(139,92,246,0.8)]' : 'bg-transparent'}`}
              />
            ))}
          </div>
        </div>

        <div className="w-full mb-12 min-h-[300px] flex items-center justify-center">
          {hasTriggeredRitual && (
            <CardSelection
              onSelect={handlePickCard}
              ritualState={ritualState}
              pickedCount={pickedCount}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default PickingSection;
