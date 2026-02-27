import React from 'react';
import { motion, type Variants } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import lincolnImage from '../images/lincoln.jpeg';
import about1 from '../images/about1.jpeg';
import about2 from '../images/about2.jpeg';
import about3 from '../images/about3.jpeg';

const AboutPage: React.FC = () => {
  const images = [
    about1,
    about2,
    about3,
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <Navbar />
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="pt-32 pb-20 min-h-screen bg-mesh-dark"
      >
        <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <motion.div variants={itemVariants} className="text-center mb-20">
          <div className="inline-block px-5 py-2 mb-8 glass-card rounded-full border border-white/10">
            <span className="text-[#cba246] text-[10px] font-bold uppercase tracking-[0.3em]">Sobre Mim</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 italic">
            Lincoln Hoshino
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Advogado especialista em Direito Imobiliário e Internacional, conectando Brasil e Japão com excelência jurídica e inovação.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-32">
          {/* Text Content */}
          <motion.div variants={itemVariants} className="space-y-8 text-slate-300 leading-relaxed font-light text-lg">
            <p>
              Minha trajetória na advocacia começou com um propósito claro: simplificar a vida de quem precisa navegar entre diferentes sistemas jurídicos. Formado pelas <strong className="text-white">Faculdades Integradas Rio Branco</strong>, sempre busquei aliar o rigor técnico à sensibilidade cultural necessária para atuar em um mundo globalizado.
            </p>
            <p>
              Como Presidente da Comissão de Direito Imobiliário na <strong className="text-white">OAB/SP Lapa</strong>, tive a honra de liderar discussões importantes sobre regularização fundiária e segurança jurídica nos negócios imobiliários. Essa experiência moldou minha visão de que o direito deve ser, acima de tudo, uma ferramenta de realização e proteção patrimonial.
            </p>
            <p>
              Hoje, meu escritório atua como uma ponte sólida entre o Brasil e o Japão. Entendo as nuances culturais e legais de ambos os países, o que me permite oferecer soluções precisas para brasileiros que vivem no exterior e precisam resolver questões complexas em sua terra natal.
            </p>
            
            <div className="pt-8 grid grid-cols-2 gap-8">
              <div className="glass-card p-6 border-l-2 border-[#cba246]">
                <h3 className="text-white font-serif text-xl mb-2">Missão</h3>
                <p className="text-sm text-slate-400">Prover segurança jurídica transnacional com agilidade e transparência.</p>
              </div>
              <div className="glass-card p-6 border-l-2 border-[#cba246]">
                <h3 className="text-white font-serif text-xl mb-2">Visão</h3>
                <p className="text-sm text-slate-400">Ser referência absoluta em advocacia para a comunidade brasileira no Japão.</p>
              </div>
            </div>
          </motion.div>

          {/* Featured Image */}
          <motion.div variants={itemVariants} className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#cba246]/20 to-transparent rounded-lg blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden glass-card border border-white/10">
              <img 
                src={lincolnImage} 
                alt="Lincoln Hoshino Portrait" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>
        </div>

        {/* Gallery Section */}
        <motion.div variants={itemVariants} className="mb-32">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-12 text-center italic">
            Momentos e <span className="text-gradient-gold not-italic font-bold">Atuação</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((img, index) => (
              <motion.div 
                key={index} 
                whileHover={{ y: -10 }}
                className="group relative aspect-square overflow-hidden rounded-lg glass-card border border-white/5 cursor-pointer"
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500 z-10"></div>
                <img 
                  src={img} 
                  alt={`Galeria ${index + 1}`} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                  <span className="text-[#cba246] text-xs font-bold uppercase tracking-widest">Advocacia</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline / Experience */}
        <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-16 text-center italic">Trajetória Profissional</h2>
          
          <div className="space-y-12 relative before:absolute before:left-0 md:before:left-1/2 before:top-0 before:bottom-0 before:w-px before:bg-white/10">
            {[
              { year: "2024", title: "Expansão Internacional", desc: "Consolidação da parceria estratégica com escritórios no Japão." },
              { year: "2022", title: "Liderança na OAB", desc: "Nomeado Presidente da Comissão de Direito Imobiliário da OAB/SP Lapa." },
              { year: "2018", title: "Fundação do Escritório", desc: "Início das atividades com foco em direito imobiliário e digital." },
              { year: "2015", title: "Formação Acadêmica", desc: "Graduação em Direito pelas Faculdades Integradas Rio Branco." }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 relative ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="w-full md:w-1/2 p-6 glass-card border border-white/5 rounded-lg hover:border-[#cba246]/30 transition-colors group">
                  <span className="text-[#cba246] font-bold text-xl mb-2 block">{item.year}</span>
                  <h3 className="text-white font-serif text-lg mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-[#cba246] rounded-full transform -translate-x-1/2 border-4 border-[#0f172a] shadow-[0_0_15px_#cba246]"></div>
                <div className="w-full md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default AboutPage;


