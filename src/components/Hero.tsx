import React from "react";
import justiceGoddessImage from "../images/justice-goddess.png";

const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-24 overflow-hidden"
    >
      {/* Background with Motion */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-fixed bg-center opacity-[0.05] grayscale"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#0f172a]/80 to-[#0f172a]"></div>
        <div className="absolute top-1/3 -right-1/4 w-[700px] h-[700px] bg-[#cba246]/5 rounded-full blur-[180px]"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-[#cba246]/3 rounded-full blur-[150px]"></div>
      </div>

      {/* Right Side Background Image */}
      <div className="absolute right-0 top-0 h-full w-full lg:w-1/2 z-0 pointer-events-none overflow-hidden hidden lg:block">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${justiceGoddessImage})`,
            opacity: 0.8,
          }}
        ></div>
      </div>

      {/* Overlay forte azul escuro com dourado e reflexo */}
      <div className="absolute inset-0 z-[1]">
        {/* Overlay azul escuro base mais forte */}
        <div className="absolute inset-0 bg-[#0f172a]/45"></div>

        {/* Gradiente dourado com reflexo diagonal mais intenso */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#cba246]/45 via-transparent to-[#cba246]/18"></div>

        {/* Reflexo dourado mais forte no topo */}
        <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-[#cba246]/25 via-[#cba246]/8 to-transparent"></div>

        {/* Reflexo lateral direito mais intenso */}
        <div className="absolute top-0 right-0 bottom-0 w-1/3 bg-gradient-to-l from-[#cba246]/18 via-transparent to-transparent"></div>

        {/* Overlay azul escuro com gradiente mais forte */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/75 via-[#0f172a]/60 to-[#0f172a]/65"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl">
          <div className="flex items-center gap-6 mb-12 overflow-hidden group">
            <div className="h-px w-20 bg-gradient-to-r from-[#cba246] to-transparent"></div>
            <span className="text-[#cba246] text-[10px] font-bold uppercase tracking-[0.6em] animate-pulse">
              Brasil & Japão • Excelência Binacional
            </span>
          </div>

          <h1 className="text-7xl md:text-[10rem] text-white mb-8 font-serif leading-[0.85] tracking-tighter">
            Lincoln <br />
            <span className="text-gradient-gold italic">Hoshino</span>
          </h1>

          <div className="h-[2px] w-48 bg-gradient-to-r from-[#cba246] via-[#cba246]/40 to-transparent my-12"></div>

          <h2 className="text-2xl md:text-4xl text-slate-300 mb-16 font-light tracking-wide max-w-3xl italic leading-relaxed">
            "Sua ponte jurídica para o Brasil. <br />
            <span className="text-white/70">
              Segurança cartorial e digital em solo japonês."
            </span>
          </h2>

          <div className="flex flex-col sm:flex-row gap-10 items-start sm:items-center">
            <a href="https://wa.me/55000000000" className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#cba246] via-white to-[#cba246] rounded-sm blur-md opacity-20 group-hover:opacity-60 transition duration-1000 group-hover:duration-300"></div>
              <button className="relative bg-[#cba246] text-[#0f172a] px-14 py-6 rounded-sm font-bold tracking-[0.3em] uppercase text-xs shadow-2xl transition-all active:scale-95 hover:bg-[#d4ae58]">
                Agendar Consultoria
              </button>
            </a>
            <a
              href="#servicos"
              className="text-white/40 hover:text-[#cba246] transition-all tracking-[0.3em] uppercase text-xs font-semibold flex items-center gap-4 group"
            >
              Explorar Serviços
              <div className="w-12 h-px bg-[#cba246]/30 group-hover:w-20 transition-all duration-500"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
