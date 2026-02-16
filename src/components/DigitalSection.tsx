import React from "react";
import { ShieldCheck, Cpu, Fingerprint } from "lucide-react";
import certisignSvg from "../images/certisign.svg";

const DigitalSection: React.FC = () => {
  return (
    <section id="digital" className="py-32 relative bg-slate-950/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-24">
          <div className="lg:w-1/2 relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#cba246]/10 to-transparent blur-3xl opacity-50"></div>
            <div className="gradient-border-gold p-1 shadow-inner relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1470"
                alt="Digital Tech"
                className="w-full grayscale brightness-50 contrast-125 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent"></div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="w-20 h-20 border border-[#cba246]/40 rounded-full flex items-center justify-center animate-pulse">
                  <Fingerprint className="text-[#cba246] w-10 h-10" />
                </div>
                <span className="mt-4 text-[#cba246] text-[10px] uppercase font-bold tracking-[0.4em]">
                  Autenticação Certising
                </span>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <span className="text-[#cba246] text-[11px] font-bold uppercase tracking-[0.3em] mb-4 block italic">
              Inovação Notarial
            </span>
            <h2 className="text-5xl text-white mb-8 font-serif leading-tight">
              Certificação em <br />
              <span className="text-gradient-gold">todo o Japão.</span>
            </h2>
            <p className="text-slate-400 mb-12 text-lg leading-relaxed font-light">
              Eliminamos as barreiras geográficas. Assine escrituras,
              procurações e documentos corporativos com validade plena de
              qualquer lugar do território japonês.
            </p>

            <div className="grid grid-cols-1 gap-6">
              {[
                {
                  title: "Validade Jurídica Plena",
                  desc: "Padrão ICP-Brasil aceito em todos os órgãos públicos e privados.",
                  icon: <ShieldCheck className="w-5 h-5 text-[#cba246]" />,
                },
                {
                  title: "Processamento em Nuvem",
                  desc: "Agilidade sem precedentes com o suporte tecnológico Certising.",
                  icon: <Cpu className="w-5 h-5 text-[#cba246]" />,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-6 p-6 glass-card rounded-sm border-l-2 border-l-[#cba246]/40 hover:border-l-[#cba246] transition-all"
                >
                  <div className="mt-1">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-1 font-serif">
                      {item.title}
                    </h4>
                    <p className="text-slate-500 text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 flex items-center gap-8 opacity-60">
              <div className="flex flex-col items-center">
                <img
                  src={certisignSvg}
                  alt="Certising"
                  className="h-8 mb-2 opacity-80"
                  style={{ width: "100px" }}
                />
                <span className="text-[8px] uppercase tracking-widest text-slate-500">
                  Credenciado Oficial
                </span>
              </div>
              <div className="h-10 w-px bg-white/10"></div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-xl tracking-tighter">
                  MALTA
                </span>
                <span className="text-[8px] uppercase tracking-widest text-slate-500">
                  Strategic Partner
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalSection;
