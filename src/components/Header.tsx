import { AlignJustify, X } from "lucide-react";
import { useState } from "react";

const tabs = ["INTRO", "ABOUT", "WORKS", "CONTACT"] as const;

export default function Header({ activeSection }: { activeSection: string }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (name: string) => {
    const el = document.getElementById(name);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#070b12]/80 backdrop-blur-2xl supports-backdrop-filter:bg-[#070b12]/70">
      <div className="mx-auto flex h-18 w-full max-w-[1120px] items-center justify-between px-4 sm:px-6">
        <button
          type="button"
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => handleNavClick("INTRO")}
          aria-label="Go to intro"
        >
          <div className="relative size-11 overflow-hidden rounded-2xl border border-slate-500/35 bg-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.22)] transition-transform duration-300 group-hover:scale-110">
            <img src="/stitch.webp" alt="Logo" className="h-full w-full object-cover" />
          </div>
          <div className="hidden text-left sm:block">
            <p className="text-[11px] font-bold tracking-[0.28em] text-slate-100 group-hover:text-blue-400 transition-colors">NGUYNKNG</p>
            <p className="mt-0.5 text-[10px] tracking-[0.22em] text-slate-500">PORTFOLIO</p>
          </div>
        </button>

        <nav className="hidden items-center gap-1 rounded-full border border-slate-500/20 bg-white/5 p-1 md:flex">
          {tabs.map((tab) => {
            const isActive = tab === activeSection;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => handleNavClick(tab)}
                className={`rounded-full px-4 py-2 text-[10px] font-medium tracking-[0.24em] transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-blue-500/10 text-blue-400 shadow-[0_8px_30px_rgba(59,130,246,0.1)]"
                    : "text-slate-300 hover:bg-white/5 hover:text-slate-100"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </nav>

        <button
          type="button"
          className="rounded-full border border-slate-600/45 bg-white/5 p-2.5 text-slate-100 transition hover:border-slate-300/70 md:hidden cursor-pointer"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={18} /> : <AlignJustify size={18} />}
        </button>
      </div>

      <div
        className={`mx-auto w-full max-w-[1120px] overflow-hidden px-4 transition-all duration-300 md:hidden sm:px-6 ${
          isOpen ? "max-h-80 pb-4 opacity-100" : "max-h-0 pb-0 opacity-0"
        }`}
      >
        <div className="card-surface rounded-2xl p-2">
          {tabs.map((tab) => {
            const isActive = tab === activeSection;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => handleNavClick(tab)}
                className={`w-full rounded-xl px-4 py-3 text-left text-xs tracking-[0.24em] transition-colors cursor-pointer ${
                  isActive ? "bg-blue-500/10 text-blue-400" : "text-slate-300 hover:bg-white/5"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}
