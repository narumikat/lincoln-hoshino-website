import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import DigitalSection from "../components/DigitalSection";
import Locations from "../components/Locations";
import Footer from "../components/Footer";
import { MessageCircle } from "lucide-react";
import certisignSvg from "../images/certisign.svg";
import lhLogoSvg from "../images/LH-logo.svg";

const HomePage: React.FC = () => {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        {/* Partnership Bar */}
        <section className="bg-slate-900 border-y border-white/5 py-8">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex items-center">
                <img
                  src={lhLogoSvg}
                  alt="Lincoln Hoshino Advogados"
                  className="h-20 opacity-80"
                />
              </div>
              <div className="h-4 w-px bg-white/20 hidden md:block"></div>
              <div className="flex flex-col items-center">
                <img
                  src={certisignSvg}
                  alt="Certising"
                  className="h-12 mb-1 opacity-80"
                />
                <span className="text-[8px] uppercase tracking-tighter">
                  Autoridade Certificadora
                </span>
              </div>
              <div className="h-4 w-px bg-white/20 hidden md:block"></div>
              <div className="flex flex-col items-center">
                <span className="text-lg font-bold tracking-tighter text-white">
                  MALTA
                </span>
                <span className="text-[8px] uppercase tracking-tighter">
                  Parceria Estratégica
                </span>
              </div>
            </div>
          </div>
        </section>

        <About />
        <Services />
        <DigitalSection />
        <Locations />

        {/* Final Call to Action */}
        <section className="py-24 bg-[#0f172a]">
          <div className="container mx-auto px-6">
            <div className="bg-gradient-to-br from-slate-900 to-black rounded-3xl p-12 md:p-24 border border-white/5 relative overflow-hidden group">
              {/* Gold light effect */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#cba246]/5 rounded-full blur-[100px] group-hover:bg-[#cba246]/10 transition-all"></div>

              <div className="relative z-10 max-w-3xl text-center mx-auto">
                <h2 className="text-4xl md:text-5xl mb-8 font-serif italic text-white leading-tight">
                  Seja no Brasil ou no Japão, estou preparado para ser o seu
                  advogado de confiança.
                </h2>
                <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto">
                  Soluções personalizadas voltadas para resultados. Independente
                  da sua localização, conectamos seus direitos ao futuro.
                </p>
                <a
                  href="https://wa.me/5511994801887"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 bg-[#cba246] text-[#0f172a] px-12 py-5 rounded-sm font-bold text-sm tracking-[0.2em] uppercase hover:bg-[#e5c16d] transition-all shadow-xl shadow-[#cba246]/10"
                >
                  <MessageCircle className="w-5 h-5" />
                  Atendimento Via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Elegant WhatsApp Float */}
      <a
        href="https://wa.me/5511994801887"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-10 right-10 z-50 bg-[#cba246] text-[#0f172a] p-5 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all group"
        aria-label="Agendar no WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute right-full mr-4 bg-[#0f172a] text-[#cba246] px-4 py-2 rounded text-xs font-bold uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-[#cba246]/20 pointer-events-none">
          Fale com o Doutor
        </span>
      </a>
    </>
  );
};

export default HomePage;
