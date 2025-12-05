import React, { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

const AnalyzingSection = ({ isActive }) => {
  const [textIndex, setTextIndex] = useState(0);
  const messages = [
    'Đang kết nối với năng lượng vũ trụ...',
    'Đang lắng nghe câu chuyện của bạn...',
    'Đang giải mã các biểu tượng cổ xưa...',
    'Đang tổng hợp thông điệp định mệnh...'
  ];

  useEffect(() => {
    if (!isActive) {
      setTextIndex(0);
      return undefined;
    }
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % messages.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [isActive, messages.length]);

  return (
    <section className="h-screen w-full flex flex-col items-center justify-center px-4 relative flex-shrink-0">
      <div className="relative w-40 h-40 mx-auto mb-12">
        <div className="absolute inset-0 border-2 border-violet-500/10 rounded-full animate-[spin_10s_linear_infinite]" />
        <div className="absolute inset-4 border-2 border-fuchsia-500/20 rounded-full animate-[spin_7s_linear_infinite_reverse]" />
        <div className="absolute inset-0 border-t-2 border-violet-400 rounded-full animate-[spin_2s_linear_infinite]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Sparkles className="text-white w-12 h-12 animate-pulse drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
        </div>
      </div>

      <div className="text-center h-24">
        <p className="text-xl md:text-2xl font-serif text-violet-200 animate-fade-in-up" key={textIndex}>
          {messages[textIndex]}
        </p>
        <style>{`
          @keyframes fadeInUp {
              from { opacity: 0; transform: translateY(10px); }
              to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in-up {
              animation: fadeInUp 0.5s ease-out forwards;
          }
        `}</style>
      </div>
    </section>
  );
};

export default AnalyzingSection;
