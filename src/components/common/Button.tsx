import { ButtonHTMLAttributes } from "react";
import { cn } from "@/utils/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost";
}

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  const base = "inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold transition-transform duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 active:scale-95";
  const variants = {
    primary:
      "bg-gradient-to-r from-violet-500 to-indigo-500 text-white shadow-md hover:from-violet-400 hover:to-indigo-400",
    ghost:
      "border border-white/10 bg-white/5 text-slate-200 hover:border-white/20 hover:bg-white/10",
  } as const;

  return <button className={cn(base, variants[variant], className)} {...props} />;
}
