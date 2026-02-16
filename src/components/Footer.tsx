import React from 'react';
import { Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import certisignSvg from '../images/certisign.svg';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950/80 border-t border-white/5 text-slate-400 py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#cba246]/30 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-4 mb-8 group cursor-default">
              <div className="w-12 h-12 border-2 border-[#cba246] flex items-center justify-center font-serif text-[#cba246] text-xl font-bold group-hover:bg-[#cba246] group-hover:text-[#0f172a] transition-all duration-500">LH</div>
              <div className="flex flex-col leading-none">
                <span className="font-serif text-white text-2xl tracking-wide">Lincoln Hoshino</span>
                <span className="text-[9px] uppercase tracking-[0.4em] text-[#cba246] mt-1 font-bold">Advocacia de Elite</span>
              </div>
            </div>
            <p className="max-w-md mb-10 text-sm leading-relaxed font-light">
              Compromisso inabalável com a excelência jurídica entre continentes. Credenciado Certising e especializado em Direito Internacional e Imobiliário.
            </p>
            <div className="flex items-center gap-6 mb-6">
              <img src={certisignSvg} alt="Certising" className="h-12 opacity-80" />
            </div>
            <div className="flex gap-6">
              <a href="https://www.instagram.com/lincolnhoshino" target="_blank" rel="noopener noreferrer" className="w-12 h-12 glass-card rounded-full flex items-center justify-center hover:bg-[#cba246] hover:text-[#0f172a] transition-all group/icon">
                <Instagram className="w-5 h-5 group-hover/icon:scale-110 transition-transform" />
              </a>
              <a href="https://www.linkedin.com/in/lincolnhoshino" target="_blank" rel="noopener noreferrer" className="w-12 h-12 glass-card rounded-full flex items-center justify-center hover:bg-[#cba246] hover:text-[#0f172a] transition-all group/icon">
                <Linkedin className="w-5 h-5 group-hover/icon:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[#cba246] font-bold mb-10 uppercase tracking-[0.4em] text-[10px]">Navegação</h4>
            <ul className="space-y-6 text-xs uppercase tracking-widest font-semibold">
              <li><a href="#inicio" className="hover:text-white transition-all hover:translate-x-2 inline-block">Home</a></li>
              <li><a href="#sobre" className="hover:text-white transition-all hover:translate-x-2 inline-block">O Advogado</a></li>
              <li><a href="#servicos" className="hover:text-white transition-all hover:translate-x-2 inline-block">Serviços</a></li>
              <li><a href="#digital" className="hover:text-white transition-all hover:translate-x-2 inline-block">Cartório Digital</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#cba246] font-bold mb-10 uppercase tracking-[0.4em] text-[10px]">Canais de Acesso</h4>
            <ul className="space-y-6 text-xs font-light">
              <li className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-[#cba246]/60 mt-px flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href="mailto:lhoshino@lincolnhoshino.com.br" className="hover:text-white transition-colors">lhoshino@lincolnhoshino.com.br</a>
                  <a href="mailto:lincolnhoshino@hotmail.com" className="hover:text-white transition-colors">lincolnhoshino@hotmail.com</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-[#cba246]/60 mt-px flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href="https://wa.me/5511994801887" className="hover:text-white transition-colors">WhatsApp BR: +55 11 99480-1887</a>
                  <a href="tel:+551130905012" className="hover:text-white transition-colors">BR: +55 11 3090-5012</a>
                  <a href="https://wa.me/817010637393" className="hover:text-white transition-colors">WhatsApp JP: +81 70 1063-7393</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#cba246]/60 mt-px flex-shrink-0" />
                <div className="flex flex-col gap-2">
                  <div>
                    <span className="text-[#cba246] font-semibold block mb-1">Brasil:</span>
                    <span className="hover:text-white transition-colors">Av. Pedroso de Morais, 103 - Pinheiros<br/>São Paulo - SP, 05419-000</span>
                  </div>
                  <div>
                    <span className="text-[#cba246] font-semibold block mb-1">Japão:</span>
                    <span className="hover:text-white transition-colors">Hoshino Building 3F<br/>8-11-10 Nishi-Shinjuku<br/>Shinjuku, Tokyo 160-0023</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 text-[10px] uppercase tracking-[0.2em] font-medium">
          <p>© 2024 Lincoln Hoshino. Todos os direitos reservados. Design by Senior Elite.</p>
          <div className="flex gap-12 text-white/30">
            <a href="#" className="hover:text-[#cba246] transition-colors">Privacidade</a>
            <a href="#" className="hover:text-[#cba246] transition-colors">Compliance</a>
            <a href="#" className="hover:text-[#cba246] transition-colors">Código de Ética</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
