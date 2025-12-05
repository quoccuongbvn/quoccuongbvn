import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { sectionVariants } from "@/config/animation";
import { TarotStep } from "@/core/tarot/machine";

interface AnalyzingSectionProps {
  step: TarotStep;
}

const messages = [
  "Đang kết nối với nguồn năng lượng...",
  "Đang lắng nghe câu hỏi của bạn...",
  "Các biểu tượng đang sắp xếp...",
  "Ánh sáng vũ trụ đang soi đường...",
];

export function AnalyzingSection({ step }: AnalyzingSectionProps) {
  const isActive = step === "analyzing";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [isActive]);

  return (
    <motion.section
      className="flex h-dvh w-full items-center justify-center px-4 md:px-8"
      initial="hidden"
      animate={isActive ? "visible" : "hidden"}
      variants={sectionVariants}
    >
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-8 py-10 text-center shadow-xl shadow-black/30 backdrop-blur-md">
        <div className="relative h-16 w-16">
          <div className="absolute inset-0 rounded-full border border-violet-400/40" />
          <div className="absolute inset-2 animate-spin rounded-full border-2 border-dashed border-violet-400/70" />
          <div className="absolute inset-4 flex items-center justify-center rounded-full bg-gradient-to-br from-violet-500/30 to-indigo-500/30 text-white">
            <Sparkles />
          </div>
        </div>
        <p className="text-sm uppercase tracking-[0.25em] text-violet-200">Đang phân tích</p>
        <p className="max-w-xl text-lg text-slate-200 transition-opacity">{messages[index]}</p>
      </div>
    </motion.section>
  );
}
