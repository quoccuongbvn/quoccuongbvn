import React from 'react';
import { Stars, Search, ArrowRight } from 'lucide-react';

const IntroSection = ({ question, setQuestion, handleStart, isActive }) => (
  <section className={`h-screen w-full flex flex-col items-center justify-center px-4 relative flex-shrink-0 transition-opacity duration-1000 ${isActive ? 'opacity-100' : 'opacity-20 blur-sm pointer-events-none'}`}>
    <div className="w-full max-w-3xl mx-auto text-center animate-in fade-in zoom-in duration-1000">
      <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_20px_rgba(139,92,246,0.1)]">
        <Stars className="w-4 h-4 text-violet-400" />
        <span className="text-sm font-medium text-violet-200">AI Tarot Oracle</span>
      </div>

      <h1 className="text-4xl md:text-7xl font-bold mb-8 font-serif leading-tight drop-shadow-2xl">
        Hỏi Vũ Trụ Về <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-fuchsia-200 to-white animate-pulse">
          Định Mệnh Của Bạn
        </span>
      </h1>

      <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-xl mx-auto font-light tracking-wide">
        Hít thở sâu. Tập trung vào vấn đề của bạn. <br />
        Hãy để trực giác dẫn lối cho câu hỏi này.
      </p>

      <div className="relative group max-w-2xl mx-auto transform transition-all duration-500 will-change-transform">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000" />
        <div className="relative bg-[#0a0514]/80 ring-1 ring-white/10 rounded-2xl p-2 flex items-center shadow-2xl backdrop-blur-xl transition-all duration-500 focus-within:ring-2 focus-within:ring-violet-400/50 focus-within:shadow-[0_0_50px_rgba(139,92,246,0.5)] focus-within:bg-[#1a1033]/90">
          <Search className="w-6 h-6 text-slate-500 ml-4 group-focus-within:text-violet-400 transition-colors" />
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Tình yêu, sự nghiệp, hay những băn khoăn thầm kín..."
            className="w-full bg-transparent border-none focus:ring-0 text-white placeholder-slate-500 text-lg px-4 py-4 font-light outline-none"
            onKeyDown={(e) => e.key === 'Enter' && handleStart()}
          />
          <button
            onClick={handleStart}
            disabled={!question.trim()}
            className="px-8 py-4 bg-gradient-to-r from-violet-700 to-fuchsia-700 hover:from-violet-600 hover:to-fuchsia-600 text-white rounded-xl font-semibold transition-all shadow-lg shadow-violet-500/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 whitespace-nowrap"
          >
            Gửi <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
        {['Tình yêu', 'Sự nghiệp', 'Tài chính', 'Hàng ngày'].map((tag) => (
          <button
            key={tag}
            onClick={() => setQuestion(`${tag} sẽ diễn biến thế nào?`)}
            className="px-6 py-2 rounded-full border border-white/10 hover:bg-white/10 hover:border-violet-500/50 transition-all text-slate-400 hover:text-white hover:scale-105"
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  </section>
);

export default IntroSection;
