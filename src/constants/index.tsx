import React from 'react';
import { 
  Scale, 
  FileText, 
  Building2, 
  Globe, 
  ShieldCheck,
  Briefcase,
  Users,
  Home,
  FileCheck,
  Gavel,
  Landmark,
  Handshake,
  Banknote,
  Plane,
  Heart,
  Car,
  GraduationCap,
  BriefcaseIcon,
  FileSearch,
  ScaleIcon
} from 'lucide-react';

export const CORE_SERVICES = [
  {
    title: 'Direito Imobiliário',
    description: 'Regularização de imóveis, escrituras, usucapião e questões patrimoniais para brasileiros no Japão.',
    icon: <Home className="w-7 h-7" />
  },
  {
    title: 'Certificação Digital',
    description: 'Assinatura de documentos com validade jurídica plena diretamente do Japão através da plataforma Certising.',
    icon: <ShieldCheck className="w-7 h-7" />
  },
  {
    title: 'Direito Internacional',
    description: 'Consultoria especializada para brasileiros residentes no exterior, conectando legislação brasileira e japonesa.',
    icon: <Globe className="w-7 h-7" />
  },
  {
    title: 'Regularização Patrimonial',
    description: 'Planejamento sucessório, inventários e gestão de patrimônio transnacional com segurança jurídica.',
    icon: <Building2 className="w-7 h-7" />
  }
];

export const PRACTICE_AREAS = [
  { name: 'Direito Imobiliário', icon: <Home /> },
  { name: 'Direito Internacional', icon: <Globe /> },
  { name: 'Direito Civil', icon: <FileText /> },
  { name: 'Direito Empresarial', icon: <Briefcase /> },
  { name: 'Direito de Família', icon: <Heart /> },
  { name: 'Direito Trabalhista', icon: <BriefcaseIcon /> },
  { name: 'Direito Tributário', icon: <Banknote /> },
  { name: 'Direito Sucessório', icon: <Users /> },
  { name: 'Direito Contratual', icon: <Handshake /> },
  { name: 'Direito Administrativo', icon: <Landmark /> },
  { name: 'Direito do Consumidor', icon: <FileCheck /> },
  { name: 'Direito Penal', icon: <Gavel /> },
  { name: 'Direito Previdenciário', icon: <ShieldCheck /> },
  { name: 'Direito Educacional', icon: <GraduationCap /> },
  { name: 'Direito de Trânsito', icon: <Car /> },
  { name: 'Certificação Digital', icon: <FileSearch /> },
  { name: 'Mediação', icon: <Scale /> },
  { name: 'Arbitragem', icon: <ScaleIcon /> }
];
