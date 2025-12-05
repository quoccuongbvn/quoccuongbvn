import React, { useCallback, useState } from 'react';
import CosmicBackground from './components/layout/CosmicBackground';
import Header from './components/layout/Header';
import IntroSection from './sections/IntroSection';
import PickingSection from './sections/PickingSection';
import AnalyzingSection from './sections/AnalyzingSection';
import ResultSection from './sections/ResultSection';
import { MAJOR_ARCANA } from './data/cards';

export default function App() {
  const [step, setStep] = useState('input');
  const [question, setQuestion] = useState('');
  const [selectedCards, setSelectedCards] = useState([]);
  const [pickedCount, setPickedCount] = useState(0);

  const getStepIndex = useCallback(() => {
    switch (step) {
      case 'input':
        return 0;
      case 'picking':
        return 1;
      case 'analyzing':
        return 2;
      case 'result':
        return 3;
      default:
        return 0;
    }
  }, [step]);

  const currentStepIndex = getStepIndex();

  const handleStart = () => {
    if (!question.trim()) return;
    setStep('picking');
    setPickedCount(0);
    setSelectedCards([]);
  };

  const handlePickCard = () => {
    if (pickedCount < 3) {
      setPickedCount((prev) => prev + 1);
      const randomCard = MAJOR_ARCANA[Math.floor(Math.random() * MAJOR_ARCANA.length)];
      setSelectedCards((prev) => [...prev, randomCard]);

      if (pickedCount === 2) {
        setTimeout(() => setStep('analyzing'), 1000);
        setTimeout(() => setStep('result'), 6000);
      }
    }
  };

  const handleReset = () => {
    setStep('input');
    setQuestion('');
    setPickedCount(0);
    setSelectedCards([]);
  };

  return (
    <div className="h-screen w-screen overflow-hidden text-slate-200 font-sans selection:bg-violet-500/30 selection:text-white relative bg-[#0a0514]">
      <CosmicBackground />
      <Header />

      <div
        className="w-full h-full transform-gpu will-change-transform transition-transform duration-[1200ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]"
        style={{ transform: `translateY(-${currentStepIndex * 100}vh)` }}
      >
        <IntroSection
          question={question}
          setQuestion={setQuestion}
          handleStart={handleStart}
          isActive={step === 'input'}
        />

        <PickingSection
          question={question}
          pickedCount={pickedCount}
          handlePickCard={handlePickCard}
          isActive={step === 'picking'}
        />

        <AnalyzingSection isActive={step === 'analyzing'} />

        <ResultSection
          question={question}
          selectedCards={selectedCards}
          handleReset={handleReset}
          isActive={step === 'result'}
        />
      </div>
    </div>
  );
}
