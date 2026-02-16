import React from 'react';
import { MapPin, Plane, Globe } from 'lucide-react';

const Locations: React.FC = () => {
  return (
    <section id="presenca" className="py-24 bg-[#0f172a] text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-4xl mb-6">Atendimento Presencial e Digital</h2>
            <p className="text-slate-400 mb-10 text-lg">
              Embora sejamos líderes em atendimento digital, mantemos presença física estratégica para casos que exigem proximidade ou suporte presencial.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="p-6 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 transition-all">
                <MapPin className="w-8 h-8 text-[#cba246] mb-4" />
                <h3 className="text-xl font-bold mb-2">Tokyo</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Centro comercial e jurídico, pronto para atender a comunidade brasileira na capital.
                </p>
              </div>
              <div className="p-6 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 transition-all">
                <MapPin className="w-8 h-8 text-[#cba246] mb-4" />
                <h3 className="text-xl font-bold mb-2">Yokohama</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Suporte estratégico para residentes da região de Kanagawa e arredores.
                </p>
              </div>
            </div>

            <div className="mt-12 flex items-center gap-4 text-[#cba246]">
              <Plane className="w-6 h-6 rotate-45" />
              <span className="font-bold tracking-wider">Conectando Brasil e Japão sem fronteiras</span>
            </div>
          </div>

          <div className="lg:w-1/2 relative w-full h-[400px]">
            {/* Minimalist World Map placeholder style */}
            <div className="absolute inset-0 bg-[#cba246]/5 rounded-3xl flex items-center justify-center">
              <Globe className="w-64 h-64 text-white/5" />
              <div className="absolute flex flex-col items-center">
                 <div className="flex gap-40 mb-10">
                   <div className="flex flex-col items-center animate-bounce">
                      <div className="w-3 h-3 bg-[#cba246] rounded-full shadow-[0_0_15px_#cba246]"></div>
                      <span className="text-xs mt-2 font-bold">Brasil</span>
                   </div>
                   <div className="flex flex-col items-center animate-pulse">
                      <div className="w-3 h-3 bg-[#cba246] rounded-full shadow-[0_0_15px_#cba246]"></div>
                      <span className="text-xs mt-2 font-bold">Japão</span>
                   </div>
                 </div>
                 <div className="w-48 h-[1px] bg-gradient-to-r from-transparent via-[#cba246] to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
