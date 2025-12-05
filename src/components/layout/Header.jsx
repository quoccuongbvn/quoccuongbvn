import React from 'react';
import { Sparkles, Menu } from 'lucide-react';

const Header = React.memo(() => (
  <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0a0514]/80 backdrop-blur-md transition-all duration-500 will-change-transform">
    <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
      <div className="flex items-center gap-2 group cursor-pointer">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center shadow-lg shadow-violet-500/20 group-hover:rotate-12 transition-transform duration-500">
          <Sparkles className="w-5 h-5 text-white" />
        </div>
        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-violet-200 font-serif tracking-wide">
          Tarota.vn
        </span>
      </div>
      <div className="flex items-center gap-4">
        <button className="md:hidden text-white/70 hover:text-white" aria-label="Open menu">
          <Menu />
        </button>
      </div>
    </div>
  </header>
));

export default Header;
