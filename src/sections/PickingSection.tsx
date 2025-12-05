import { motion } from "framer-motion";
import { Sparkles, Wand2 } from "lucide-react";
import { sectionVariants } from "@/config/animation";
import { CardSelection } from "@/components/tarot/CardSelection";
import { TarotStep, RitualState } from "@/core/tarot/machine";

interface PickingSectionProps {
  question: string;
  pickedCount: number;
  pickCard: () => void;
  ritual: RitualState;
  step: TarotStep;
}

export function PickingSection({ question, pickedCount, pickCard, ritual, step }: PickingSectionProps) {
  const isActive = step === "picking";

  return (
    <motion.section
      className="relative h-dvh w-full px-4 md:px-8"
      initial="hidden"
      animate={isActive ? "visible" : "hidden"}
      variants={sectionVariants}
    >
      <div className="flex h-full w-full items-center justify-center">
        {ritual === "cleansing" && (
          <div className="relative flex h-80 w-full max-w-3xl flex-col items-center justify-center overflow-hidden rounded-3xl border border-violet-500/20 bg-gradient-to-br from-violet-900/40 via-indigo-900/30 to-violet-900/10 shadow-xl shadow-black/30 backdrop-blur-md">
            <div className="absolute inset-0 animate-drift bg-[radial-gradient(circle_at_30%_40%,rgba(167,139,250,0.3),transparent_35%),radial-gradient(circle_at_70%_60%,rgba(59,130,246,0.25),transparent_30%)]" />
            <div className="relative z-10 flex flex-col items-center gap-3 text-center">
              <Wand2 className="h-12 w-12 text-violet-200" />
              <p className="text-sm uppercase tracking-[0.25em] text-violet-200">Nghi thức thanh tẩy</p>
              <p className="max-w-xl text-base text-slate-200">Chúng tôi đang thanh lọc bộ bài để kết nối với năng lượng của câu hỏi.</p>
            </div>
          </div>
        )}

        {ritual === "shuffling" && (
          <div className="relative flex h-80 w-full max-w-3xl flex-col items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-xl shadow-black/30 backdrop-blur-md">
            <div className="absolute inset-0 grid grid-cols-6 gap-2 px-4">
              {Array.from({ length: 18 }).map((_, idx) => (
                <div
                  key={idx}
                  className="h-20 rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent"
                  style={{ animationDelay: `${idx * 60}ms` }}
                />
              ))}
            </div>
            <div className="relative z-10 flex flex-col items-center gap-3 text-center">
              <Sparkles className="h-10 w-10 text-violet-200" />
              <p className="text-sm uppercase tracking-[0.25em] text-violet-200">Đang xào bài</p>
              <p className="max-w-xl text-base text-slate-200">Những lá bài đang hòa vào câu hỏi của bạn. Chuẩn bị rút nhé.</p>
            </div>
          </div>
        )}

        {ritual === "ready" && (
          <div className="flex w-full max-w-5xl flex-col gap-6">
            <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 shadow-md shadow-black/20 backdrop-blur-md">
              <div className="text-left text-sm text-slate-200">
                <p className="font-semibold text-white">Nghi thức hoàn tất</p>
                <p>Bạn đã rút {pickedCount}/3 lá</p>
              </div>
              <span className="rounded-full bg-violet-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-violet-200">
                Ready
              </span>
            </div>
            <CardSelection question={question} pickedCount={pickedCount} onPick={pickCard} />
          </div>
        )}
      </div>
    </motion.section>
  );
}
