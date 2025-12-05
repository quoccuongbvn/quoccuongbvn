import React from 'react';
import { RefreshCw, Share2, Sparkles } from 'lucide-react';
import ResultCard from '../components/cards/ResultCard';

const ResultSection = ({ question, selectedCards, handleReset, isActive }) => (
  <section className="h-screen w-full relative flex-shrink-0 overflow-hidden">
    <div className="h-full w-full overflow-y-auto pt-24 pb-20 px-4 scrollbar-hide">
      <div className={`w-full max-w-6xl mx-auto transition-all duration-1000 delay-500 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/10 pb-6 gap-6">
          <div className="text-center md:text-left w-full">
            <span className="text-violet-400 text-sm font-bold tracking-widest uppercase mb-2 block">Thông điệp dành cho bạn</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4 leading-tight">Kết Quả Trải Bài</h2>
            <div className="bg-white/5 inline-block px-4 py-2 rounded-lg backdrop-blur-sm border border-white/5">
              <p className="text-slate-300 italic">"{question}"</p>
            </div>
          </div>
          <button
            onClick={handleReset}
            className="flex-shrink-0 flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 hover:scale-105 transition-all border border-white/10 text-sm group"
          >
            <RefreshCw className="w-4 h-4 text-violet-300 group-hover:rotate-180 transition-transform duration-500" />
            <span>Bói Lại</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20 px-4 md:px-12">
          {selectedCards.map((card, idx) => (
            <ResultCard
              key={card.id + idx}
              card={card}
              index={idx}
              isVisible={isActive}
              position={idx === 0 ? 'Quá Khứ' : idx === 1 ? 'Hiện Tại' : 'Tương Lai'}
            />
          ))}
        </div>

        <div className={`bg-gradient-to-b from-[#1a1033]/90 to-[#0a0514]/90 backdrop-blur-xl border border-violet-500/20 rounded-3xl p-8 md:p-16 shadow-2xl mb-12 transform transition-all duration-1000 delay-[2000ms] ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="flex items-center gap-6 mb-10">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center shadow-[0_0_30px_rgba(139,92,246,0.3)] animate-pulse">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-1">Lời Khuyên Từ Vũ Trụ</h3>
              <div className="h-1 w-20 bg-gradient-to-r from-violet-500 to-transparent rounded-full" />
            </div>
          </div>

          <div className="space-y-10 text-slate-300 leading-loose text-lg font-light">
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-xl text-violet-200 font-serif italic border-l-4 border-violet-500 pl-6 py-2 bg-violet-500/5 rounded-r-lg">
                "Những lá bài không quyết định số phận, chúng chỉ soi sáng con đường mà tâm thức bạn đang hướng tới."
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-violet-500/30 transition-colors">
                  <h4 className="text-white font-bold mb-4 flex items-center gap-2 text-xl">
                    <div className="w-2 h-2 bg-red-400 rounded-full" />
                    Thách Thức Hiện Tại
                  </h4>
                  <p className="text-slate-400">
                    Lá bài <strong>{selectedCards[1]?.nameVN}</strong> cho thấy trọng tâm vấn đề nằm ở: {selectedCards[1]?.desc}
                    Đây là lúc bạn cần đối diện với sự thật bên trong mình.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-violet-500/30 transition-colors">
                  <h4 className="text-white font-bold mb-4 flex items-center gap-2 text-xl">
                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                    Hướng Đi Tương Lai
                  </h4>
                  <p className="text-slate-400">
                    Năng lượng từ <strong>{selectedCards[2]?.nameVN}</strong> mở ra một cánh cửa mới: {selectedCards[2]?.desc}
                    Hãy tin vào tiến trình này.
                  </p>
                </div>
              </div>

              <p className="mt-8 text-slate-300">
                Nhìn lại quá khứ với <strong>{selectedCards[0]?.nameVN}</strong>, có thể thấy những bài học cũ đã tôi luyện nên bản lĩnh của bạn ngày hôm nay. Đừng quên rằng, bạn chính là người nắm giữ tay lái của cuộc đời mình (The Chariot).
              </p>
            </div>

            <div className="mt-16 pt-10 border-t border-white/10 flex flex-col md:flex-row gap-6 justify-center">
              <button className="px-10 py-4 bg-white text-violet-950 hover:bg-violet-100 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]">
                Hỏi Chi Tiết Hơn
              </button>
              <button className="px-10 py-4 border border-white/20 hover:bg-white/5 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-3 hover:-translate-y-1">
                <Share2 className="w-5 h-5" /> Lưu Kết Quả
              </button>
            </div>
          </div>
        </div>

        <footer className="text-center text-slate-600 text-sm pb-8">
          <p>Tarot Reading by AI Oracle • Rider-Waite Edition</p>
        </footer>
      </div>
    </div>
  </section>
);

export default ResultSection;
