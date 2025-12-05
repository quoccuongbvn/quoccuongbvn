import { motion } from "framer-motion";
import { CosmicBackground } from "@/components/layout/CosmicBackground";
import { Header } from "@/components/layout/Header";
import { IntroSection } from "@/sections/IntroSection";
import { PickingSection } from "@/sections/PickingSection";
import { AnalyzingSection } from "@/sections/AnalyzingSection";
import { ResultSection } from "@/sections/ResultSection";
import { useTarotMachine } from "@/core/tarot/useTarotMachine";
import { anim } from "@/config/animation";

const stepOrder = ["input", "picking", "analyzing", "result"] as const;

export function TarotApp() {
  const tarot = useTarotMachine();
  const stepIndex = stepOrder.indexOf(tarot.step);

  return (
    <div className="h-dvh w-screen overflow-hidden bg-[#0a0514] font-sans text-slate-200">
      <CosmicBackground />
      <Header />

      <motion.div
        className="relative h-full w-full"
        animate={{ y: `-${stepIndex * 100}vh` }}
        transition={{ duration: anim.duration.slide, ease: anim.easing.standard }}
      >
        <IntroSection {...tarot} />
        <PickingSection {...tarot} />
        <AnalyzingSection {...tarot} />
        <ResultSection {...tarot} />
      </motion.div>
    </div>
  );
}
