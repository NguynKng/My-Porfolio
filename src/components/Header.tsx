import { AlignJustify, X } from "lucide-react";
import { useState } from "react";

export default function Header({ activeSection }: { activeSection: string }) {
  const [isOpen, setIsOpen] = useState(false);

  const headerTab = [
    { name: "INTRO" },
    { name: "ABOUT" },
    { name: "WORKS" },
    { name: "CONTACT" },
  ];

  const handleNavClick = (name: string) => {
    const el = document.getElementById(name);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#070b12]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-18 w-full max-w-[1120px] items-center justify-between px-4 sm:px-6">
        <button
          className="font-semibold tracking-[0.28em] text-[11px] text-slate-100 transition-colors duration-300 hover:text-[#f5c55d]"
          onClick={() => handleNavClick("INTRO")}
        >
          NGUYNKNG.
        </button>

        <nav className="hidden items-center gap-1 rounded-full border border-slate-500/30 bg-black/25 p-1 md:flex">
          {headerTab.map((tab) => (
            <button
              key={tab.name}
              onClick={() => handleNavClick(tab.name)}
              className={`rounded-full px-4 py-2 text-[10px] font-medium tracking-[0.24em] transition-all duration-300 cursor-pointer
                ${
                  tab.name === activeSection
                    ? "bg-[#162338] text-[#f5c55d]"
                    : "text-slate-300 hover:bg-[#122038] hover:text-slate-100"
                }
              `}
            >
              {tab.name}
            </button>
          ))}
        </nav>

        <button
          className="rounded-lg border border-slate-600/50 p-2 text-slate-100 transition hover:border-slate-400 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={18} /> : <AlignJustify size={18} />}
        </button>
      </div>

      <div
        className={`mx-auto w-full max-w-[1120px] overflow-hidden px-4 transition-all duration-300 md:hidden sm:px-6
          ${isOpen ? "max-h-80 pb-4 opacity-100" : "max-h-0 pb-0 opacity-0"}
        `}
      >
        <div className="card-surface rounded-2xl p-2">
          {headerTab.map((tab) => (
            <button
              key={tab.name}
              onClick={() => handleNavClick(tab.name)}
              className={`w-full rounded-xl px-4 py-3 text-left text-xs tracking-[0.24em] transition-colors cursor-pointer
                ${
                  tab.name === activeSection
                    ? "bg-[#162338] text-[#f5c55d]"
                    : "text-slate-300 hover:bg-[#122038]"
                }
              `}
            >
              {tab.name}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
