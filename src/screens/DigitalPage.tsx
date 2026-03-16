import React from "react";
import { motion, type Variants } from "framer-motion";
import { ShieldCheck, Fingerprint, FileText, Globe, Lock } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const DigitalPage: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
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
          <motion.div variants={itemVariants} className="text-center mb-24">
            <div className="inline-block px-5 py-2 mb-8 glass-card rounded-full border border-white/10">
              <span className="text-[#cba246] text-[10px] font-bold uppercase tracking-[0.3em]">
                Inovação Notarial
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 italic">
              Certificado <span className="text-gradient-gold not-italic font-bold">Digital</span>
            </h1>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
              A sua identidade digital com validade jurídica no Brasil, emitida diretamente do Japão através da parceria com a Certising.
            </p>
          </motion.div>

          {/* What is it? */}
          <motion.div
            variants={itemVariants}
            className="mb-32 flex flex-col lg:flex-row gap-16 items-center"
          >
            <div className="lg:w-1/2">
              <h2 className="text-3xl text-white font-serif italic mb-6">
                O que é o Certificado Digital?
              </h2>
              <p className="text-slate-400 mb-6 leading-relaxed font-light">
                O Certificado Digital é uma identidade eletrônica para pessoas físicas (e-CPF) ou jurídicas
                (e-CNPJ). Ele funciona como uma carteira de identidade no mundo virtual, permitindo assinar
                documentos com validade jurídica, acessar sistemas governamentais e realizar transações online
                com total segurança.
              </p>
              <p className="text-slate-400 leading-relaxed font-light">
                Com a tecnologia criptográfica, ele garante a autenticidade, a confidencialidade e a
                integridade das operações eletrônicas, substituindo a necessidade de assinaturas físicas e
                reconhecimento de firma em cartórios tradicionais.
              </p>
            </div>
            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: <Lock className="w-6 h-6" />, title: "Segurança", desc: "Criptografia de ponta a ponta." },
                {
                  icon: <FileText className="w-6 h-6" />,
                  title: "Validade Legal",
                  desc: "Equivalente à assinatura de próprio punho."
                },
                {
                  icon: <Globe className="w-6 h-6" />,
                  title: "Sem Fronteiras",
                  desc: "Assine documentos do Brasil estando no Japão."
                },
                {
                  icon: <ShieldCheck className="w-6 h-6" />,
                  title: "ICP-Brasil",
                  desc: "Padrão oficial brasileiro de certificação."
                }
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-6 glass-card border border-white/5 rounded-sm hover:border-[#cba246]/40 transition-all"
                >
                  <div className="text-[#cba246] mb-4">{item.icon}</div>
                  <h3 className="text-white font-bold mb-2 uppercase tracking-wider text-sm">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certising Section */}
          <motion.div variants={itemVariants} className="mb-32">
            <div className="gradient-border-gold p-1 shadow-inner relative overflow-hidden rounded-sm">
              <div className="absolute inset-0 bg-slate-900/90 z-0"></div>
              <div className="relative z-10 p-12 md:p-20 flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/3 flex justify-center">
                  <div className="w-40 h-40 rounded-full border-2 border-[#cba246]/30 flex items-center justify-center bg-[#0f172a] shadow-[0_0_50px_rgba(203,162,70,0.1)] relative">
                    <div className="absolute inset-0 rounded-full border border-[#cba246]/10 animate-ping"></div>
                    <Fingerprint className="w-16 h-16 text-[#cba246]" />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-3xl text-white font-serif italic mb-6">
                    A Autoridade Certificadora:{" "}
                    <span className="text-[#cba246] not-italic font-bold">Certising</span>
                  </h2>
                  <p className="text-slate-400 mb-6 leading-relaxed font-light">
                    A <strong>Certising</strong> é uma Autoridade Certificadora (AC) credenciada, responsável por
                    emitir, distribuir, renovar e revogar os certificados digitais. Como parceiros oficiais,
                    atuamos como Autoridade de Registro (AR) no Japão.
                  </p>
                  <p className="text-slate-400 leading-relaxed font-light">
                    Isso significa que você não precisa viajar ao Brasil ou depender de procurações complexas e
                    demoradas. Realizamos todo o processo de validação da sua identidade e emissão do seu
                    certificado digital diretamente do Japão, com a mesma segurança e validade de um cartório
                    brasileiro.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-2xl text-white font-serif italic mb-8">
              Pronto para emitir o seu?
            </h2>
            <a
              href="https://wa.me/5511994801887"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-[#cba246] text-[#0f172a] px-10 py-4 rounded-sm font-bold text-xs tracking-[0.2em] uppercase hover:bg-[#e5c16d] transition-all shadow-xl shadow-[#cba246]/10"
            >
              Falar com Especialista
            </a>
          </motion.div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default DigitalPage;

