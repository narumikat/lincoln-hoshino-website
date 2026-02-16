import React from 'react';
import { CORE_SERVICES, PRACTICE_AREAS } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-40 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-28 gap-12">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl text-white mb-8 font-serif italic tracking-wide">
              Soluções Jurídicas <br/>
              <span className="text-gradient-gold font-bold not-italic uppercase text-3xl md:text-4xl tracking-[0.3em]">Sob Medida</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed font-light">
              Especialistas em conectar as necessidades dos brasileiros no Japão ao ordenamento jurídico do Brasil. Atendimento exclusivo em Tokyo e Yokohama com tecnologia Certising.
            </p>
          </div>
          <div className="flex items-center gap-6 text-[#cba246]/60 uppercase tracking-[0.5em] text-[11px] font-bold pb-4">
            <span>Serviços Premium</span>
            <div className="h-px w-32 bg-gradient-to-r from-[#cba246]/40 to-transparent"></div>
          </div>
        </div>

        {/* Highlighted Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-40">
          {CORE_SERVICES.slice(0, 4).map((service, index) => (
            <div key={index} className="group relative h-full">
              <div className="gradient-border-gold h-full p-10 glass-card transition-all duration-700 group-hover:-translate-y-3 group-hover:bg-slate-800/40 shimmer">
                <div className="w-14 h-14 border border-[#cba246]/30 flex items-center justify-center rounded-sm mb-10 text-[#cba246] group-hover:scale-110 transition-all duration-500 group-hover:border-[#cba246]">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-6 font-serif uppercase tracking-widest">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-light group-hover:text-slate-200 transition-colors">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Practice Areas Masonry-like Grid */}
        <div className="pt-32 border-t border-white/5">
          <div className="flex items-center gap-10 mb-20">
            <h3 className="text-3xl text-white font-serif italic">Áreas de Especialidade</h3>
            <div className="flex-grow h-[1px] bg-gradient-to-r from-white/10 via-[#cba246]/20 to-transparent"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {PRACTICE_AREAS.map((area, index) => (
              <div key={index} className="group p-8 glass-card border border-white/5 rounded-sm hover:border-[#cba246]/40 transition-all duration-500 hover:bg-[#cba246]/5">
                <div className="text-slate-600 group-hover:text-[#cba246] mb-6 transition-all duration-500 group-hover:rotate-12">
                  {React.cloneElement(area.icon as React.ReactElement<any>, { size: 24 })}
                </div>
                <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-slate-500 group-hover:text-white transition-colors block">
                  {area.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
