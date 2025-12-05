import { ButtonHTMLAttributes } from "react";
import { cn } from "@/utils/cn";

interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
}

export function Chip({ className, selected, ...props }: ChipProps) {
  return (
    <button
      className={cn(
        "rounded-full border px-3 py-1 text-sm transition-colors",
        selected
          ? "border-violet-400/80 bg-violet-500/20 text-white"
          : "border-white/10 bg-white/5 text-slate-200 hover:border-white/20",
        className
      )}
      {...props}
    />
  );
}
