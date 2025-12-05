import { motion } from "framer-motion";
import { Bookmark, Repeat } from "lucide-react";
import { sectionVariants } from "@/config/animation";
import { Button } from "@/components/common/Button";
import { ResultCard } from "@/components/tarot/ResultCard";
import { TarotCard, TarotStep } from "@/core/tarot/machine";

interface ResultSectionProps {
  question: string;
  selectedCards: TarotCard[];
  reset: () => void;
  step: TarotStep;
}

const positions = ["Quá khứ", "Hiện tại", "Tương lai"];

export function ResultSection({ question, selectedCards, reset, step }: ResultSectionProps) {
  const isActive = step === "result";

  return (
    <motion.section
      className="flex h-dvh w-full flex-col items-center justify-center gap-8 px-4 pb-10 pt-16 md:px-10"
      initial="hidden"
      animate={isActive ? "visible" : "hidden"}
      variants={sectionVariants}
    >
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-violet-200">Kết quả trải bài</p>
        <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">Thông điệp cho: {question}</h2>
      </div>

      <div className="grid w-full max-w-5xl grid-cols-1 gap-4 md:grid-cols-3">
        {selectedCards.slice(0, 3).map((card, idx) => (
          <ResultCard key={card.id + idx} card={card} position={positions[idx]} index={idx} />
        ))}
      </div>

      <div className="w-full max-w-4xl space-y-3 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/25 backdrop-blur-md">
        <div className="flex items-center gap-2 text-sm font-semibold text-white">
          <Bookmark size={16} className="text-violet-200" /> Lời khuyên từ vũ trụ
        </div>
        <p className="text-slate-200">
          {(selectedCards[0]?.desc ?? "Hãy tin vào hành trình của mình.") + " "}
          {selectedCards[1]?.desc ?? "Mỗi trải bài là một cơ hội để soi chiếu bản thân."}
        </p>
      </div>

      <div className="flex flex-col items-center gap-3 sm:flex-row">
        <Button onClick={reset} className="w-full sm:w-auto">
          <Repeat size={16} className="mr-2" /> Bói lại
        </Button>
        <Button variant="ghost" className="w-full sm:w-auto">
          <Bookmark size={16} className="mr-2" /> Lưu kết quả
        </Button>
      </div>
    </motion.section>
  );
}
