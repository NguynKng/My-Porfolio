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
    <header className="fixed top-0 lg:left-[4rem] lg:w-[88rem] w-full z-50 bg-[#181a1c] border-b-[0.5px] border-gray-700 lg:border-x-[0.5px]">
      <div className="flex items-center justify-between h-16">
        {/* Logo */}
        <div
          className="flex items-center text-white hover:text-yellow-500 font-bold tracking-[0.3em] cursor-pointer text-[10px] w-1/4 h-full pl-4"
          onClick={() => handleNavClick("INTRO")}
        >
          NGUYNKNG.
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex h-full w-full">
          {headerTab.map((tab, index) => (
            <div
              key={index}
              onClick={() => handleNavClick(tab.name)}
              className={`flex items-center px-4 border-l-[0.5px] border-gray-600 text-[10px] tracking-[0.3em] text-white hover:text-yellow-500 transition-all duration-300 cursor-pointer h-full w-1/4
                ${tab.name === activeSection ? "bg-[#282a2e] text-yellow-500" : ""}
              `}
            >
              {tab.name}
            </div>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-white pr-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <AlignJustify />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute bg-[#181a1c] flex flex-col justify-center z-40 w-full py-8">
          {headerTab.map((tab, index) => (
            <div
              key={index}
              onClick={() => handleNavClick(tab.name)}
              className={`text-white text-base tracking-[0.3em] hover:text-yellow-500 cursor-pointer py-2 px-4
                ${tab.name === activeSection ? "text-yellow-500" : ""}
              `}
            >
              {tab.name}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
