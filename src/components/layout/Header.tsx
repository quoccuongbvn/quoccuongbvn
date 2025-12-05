import { Sparkles } from "lucide-react";

export function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-20 flex items-center justify-between px-4 py-3 md:px-8">
      <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-md shadow-md shadow-black/20">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-violet-500/80 to-indigo-500/70 text-white">
          <Sparkles size={18} />
        </div>
        <div>
          <p className="text-sm font-semibold leading-tight">Tarota.vn</p>
          <p className="text-xs text-slate-300">AI Tarot Oracle</p>
        </div>
      </div>

      <div className="hidden items-center gap-3 text-xs font-medium text-slate-300 sm:flex">
        <span className="rounded-full bg-white/5 px-3 py-1">PWA Ready</span>
        <span className="rounded-full bg-white/5 px-3 py-1">Capacitor friendly</span>
      </div>
    </header>
  );
}
