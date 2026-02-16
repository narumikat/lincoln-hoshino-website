import React from 'react';
import lincolnImage from '../images/lincoln.png';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-40 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          
          <div className="lg:w-2/5 group">
            <div className="gradient-border-gold p-1 shadow-[0_0_50px_rgba(0,0,0,0.5)] transition-all duration-1000 group-hover:scale-[1.03]">
              <div className="aspect-[3/4] rounded-sm overflow-hidden relative glass-card">
                <img 
                  src={lincolnImage}
                  alt="Dr. Lincoln Hoshino"
                  className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 hover:brightness-105 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-90"></div>
              </div>
            </div>
            {/* Minimalist Caption */}
            <div className="mt-10 pl-6 border-l-2 border-[#cba246]/40">
               <span className="text-[#cba246] text-sm font-bold uppercase tracking-[0.4em] block mb-2">Lincoln Hoshino</span>
               <span className="text-slate-500 text-[11px] uppercase tracking-widest">Especialista em Direito Imobiliário & Internacional</span>
            </div>
          </div>

          <div className="lg:w-3/5">
            <div className="inline-block px-5 py-2 mb-8 glass-card rounded-full border border-white/10">
              <span className="text-[#cba246] text-[10px] font-bold uppercase tracking-[0.3em]">Perfil Profissional</span>
            </div>
            <h2 className="text-6xl md:text-7xl text-white mb-12 font-serif font-light leading-tight italic">
              Trajetória entre <br/>
              <span className="text-gradient-gold font-bold not-italic">duas culturas.</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="space-y-8 text-slate-400 text-base leading-relaxed text-justify font-light">
                <p>
                  A carreira do <strong className="text-white/90">Dr. Lincoln Hoshino</strong> é pautada pela intersecção de dois mundos. Formado pelas <span className="text-[#cba246] font-semibold">Faculdades Integradas Rio Branco</span>, ele traduz a complexidade do sistema brasileiro para a realidade dos residentes no Japão.
                </p>
                <p>
                  Sua atuação como Presidente da Comissão de Direito Imobiliário na <span className="text-white/80">OAB/SP Lapa</span> consolidou sua reputação como um advogado técnico, focado em resultados e ética inabalável.
                </p>
              </div>
              
              <div className="space-y-10">
                <div className="p-10 glass-card gradient-border-gold shimmer">
                  <h4 className="text-white font-serif italic text-2xl mb-4">Visão Global</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Facilitamos a regularização patrimonial e jurídica de brasileiros que vivem no Japão, conectando-os aos seus direitos com tecnologia e confiança.
                  </p>
                </div>
                <div className="flex gap-16 items-center px-6">
                  <div className="group/stat">
                    <span className="text-4xl text-white font-serif block group-hover/stat:text-[#cba246] transition-colors">OAB/SP</span>
                    <span className="text-[10px] text-[#cba246] uppercase tracking-widest font-bold mt-2 block">Liderança</span>
                  </div>
                  <div className="w-px h-12 bg-white/10"></div>
                  <div className="group/stat">
                    <span className="text-4xl text-white font-serif block group-hover/stat:text-[#cba246] transition-colors">20+</span>
                    <span className="text-[10px] text-[#cba246] uppercase tracking-widest font-bold mt-2 block">Áreas</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
