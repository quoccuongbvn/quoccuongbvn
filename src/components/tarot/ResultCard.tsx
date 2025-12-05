import Image from "next/image";
import { motion } from "framer-motion";
import { cardVariants } from "@/config/animation";
import { TarotCard } from "@/core/tarot/machine";

interface ResultCardProps {
  card: TarotCard;
  position: string;
  index: number;
}

export function ResultCard({ card, position, index }: ResultCardProps) {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      className="flex w-full max-w-xs flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 shadow-md shadow-black/20 backdrop-blur-md"
    >
      <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-violet-200">
        <span>{position}</span>
        <span className="rounded-full bg-white/5 px-2 py-1 text-[11px] text-slate-200">Lá {index + 1}</span>
      </div>
      <div className="relative aspect-[2/3] w-full overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/0">
        <Image src={card.image} alt={card.name} fill className="object-cover" sizes="(max-width: 640px) 100vw, 320px" />
      </div>
      <div>
        <p className="text-lg font-semibold text-white">{card.name}</p>
        <p className="text-sm text-slate-300">{card.nameVN}</p>
        <div className="mt-2 flex flex-wrap gap-2 text-[12px] text-violet-200">
          {card.keywords.map((kw) => (
            <span key={kw} className="rounded-full bg-violet-500/10 px-2 py-1">
              {kw}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
