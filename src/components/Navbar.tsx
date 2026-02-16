import React, { useState, useEffect } from "react";
import iconSvg from "../images/icon.svg";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${
        isScrolled ? "py-4" : "py-10"
      }`}
    >
      <div className="container mx-auto px-6">
        <div
          className={`flex justify-between items-center transition-all duration-500 ${
            isScrolled
              ? "glass-card px-8 py-3 rounded-full border border-white/5 gold-glow"
              : ""
          }`}
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-sm overflow-hidden">
              <img
                src={iconSvg}
                alt="Lincoln Hoshino Logo"
                className="w-full h-full object-contain p-1"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-serif text-xl tracking-wide text-white font-light">
                Lincoln <span className="font-bold">Hoshino</span>
              </span>
              <span className="text-[8px] tracking-[0.4em] uppercase text-[#cba246] mt-1">
                Advocacia Internacional
              </span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-12">
            {["Inicio", "Sobre", "Servicos", "Digital"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white/60 hover:text-[#cba246] transition-all text-[10px] font-bold uppercase tracking-[0.3em] relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#cba246] group-hover:w-full transition-all duration-500"></span>
              </a>
            ))}

            <a 
              href="https://wa.me/5511994801887" 
              className="bg-transparent border border-[#cba246]/40 text-[#cba246] px-8 py-3 rounded-sm text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#cba246] hover:text-[#0f172a] transition-all duration-500"
            >
              Consultoria
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
