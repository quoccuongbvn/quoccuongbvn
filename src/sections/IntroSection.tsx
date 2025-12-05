import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { sectionVariants } from "@/config/animation";
import { Button } from "@/components/common/Button";
import { Chip } from "@/components/common/Chip";
import { TarotStep } from "@/core/tarot/machine";

interface IntroSectionProps {
  question: string;
  setQuestion: (q: string) => void;
  startReading: () => void;
  step: TarotStep;
}

const presets = ["Tình yêu", "Sự nghiệp", "Tài chính", "Hàng ngày"];

export function IntroSection({ question, setQuestion, startReading, step }: IntroSectionProps) {
  const isActive = step === "input";

  return (
    <motion.section
      className="flex h-dvh w-full flex-col items-center justify-center px-4 text-center md:px-8"
      initial="hidden"
      animate={isActive ? "visible" : "hidden"}
      variants={sectionVariants}
    >
      <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-violet-200">
        <Sparkles size={16} />
        AI Tarot Oracle
      </div>
      <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
        Chạm vào vũ trụ để nhận thông điệp Tarot
      </h1>
      <p className="mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
        Hãy đặt câu hỏi của bạn. Chúng tôi sẽ hướng dẫn qua các nghi thức, chọn 3 lá bài, phân tích và gửi lại lời nhắn từ vũ trụ.
      </p>

      <div className="mt-8 w-full max-w-2xl space-y-4 rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg shadow-black/20 backdrop-blur-md">
        <div className="flex flex-wrap gap-2">
          {presets.map((preset) => (
            <Chip key={preset} onClick={() => setQuestion(preset)} selected={question === preset}>
              {preset}
            </Chip>
          ))}
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Nhập câu hỏi của bạn..."
            className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-base text-white placeholder:text-slate-400 shadow-inner shadow-black/30 focus:border-violet-400 focus:outline-none"
          />
          <Button onClick={startReading} className="w-full sm:w-auto" disabled={!question.trim()}>
            Gửi
          </Button>
        </div>
      </div>
    </motion.section>
  );
}
