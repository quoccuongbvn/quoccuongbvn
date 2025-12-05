import { motion } from "framer-motion";
import { anim } from "@/config/animation";
import { Button } from "@/components/common/Button";

interface CardSelectionProps {
  question: string;
  pickedCount: number;
  onPick: () => void;
}

export function CardSelection({ question, pickedCount, onPick }: CardSelectionProps) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-6 px-4 md:px-8">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center shadow-lg shadow-black/20 backdrop-blur-md max-w-xl w-full">
        <p className="text-xs uppercase tracking-[0.2em] text-violet-200">Câu hỏi</p>
        <p className="mt-2 text-lg font-semibold text-white">{question}</p>
      </div>

      <motion.div
        className="relative flex w-full max-w-3xl items-center justify-center gap-4 overflow-x-auto px-4 py-6 scrollbar-thin"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: anim.duration.slow, ease: anim.easing.standard }}
      >
        {Array.from({ length: 9 }).map((_, idx) => (
          <div
            key={idx}
            className="flex h-44 w-28 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 text-xs text-slate-200 shadow-md shadow-black/30"
          >
            ✧
          </div>
        ))}
      </motion.div>

      <Button
        onClick={onPick}
        disabled={pickedCount >= 3}
        className="px-6 py-3 text-base shadow-md shadow-violet-900/30"
      >
        {pickedCount < 3 ? `Rút lá ${pickedCount + 1}/3` : "Đã đủ 3 lá"}
      </Button>
    </div>
  );
}
