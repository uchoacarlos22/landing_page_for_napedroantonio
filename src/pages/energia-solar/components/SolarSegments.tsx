import React from "react";
import { useNavigate } from "react-router-dom";
import { Home, Building2, LayoutGrid, Zap, ArrowRight } from "lucide-react";

const segments = [
  {
    title: "Residencial",
    description: "Instalação de painéis solares para casas e apartamentos de alto padrão em São Paulo.",
    path: "/energia-solar/residencial",
    icon: <Home size={32} />,
    tag: "Alto Padrão",
  },
  {
    title: "Empresarial",
    description: "Sistemas fotovoltaicos para galpões e indústrias em SP com alto ROI e redução de OPEX.",
    path: "/energia-solar/empresas",
    icon: <Building2 size={32} />,
    tag: "B2B / Industrial",
  },
  {
    title: "Condomínios",
    description: "Energia solar para áreas comuns, rateio e redução da taxa condominial em SP.",
    path: "/energia-solar/condominios",
    icon: <LayoutGrid size={32} />,
    tag: "Rateio de Energia",
  },
  {
    title: "Mobilidade",
    description: "Eletropostos e wallbox para carregamento de veículos elétricos em São Paulo.",
    path: "/energia-solar/mobilidade-eletrica",
    icon: <Zap size={32} />,
    tag: "Eletropostos",
  },
];

export const SolarSegments: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-12 md:py-20 bg-background relative overflow-hidden" id="segmentos">
      <div className="container-max mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-secondary mb-2 md:mb-3 block">
            NICHOS DE ATUAÇÃO
          </span>
          <h2 className="font-display-lg text-2xl md:text-4xl lg:text-5xl text-primary mb-4 md:mb-6 uppercase tracking-tighter">
            Soluções para cada <span className="text-secondary">perfil</span>
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto text-base md:text-lg">
            Nossa engenharia é adaptada às necessidades específicas de cada setor, garantindo a melhor performance e viabilidade financeira.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {segments.map((seg) => (
            <div
              key={seg.title}
              onClick={() => {
                navigate(seg.path);
                window.scrollTo(0, 0);
              }}
              className="group cursor-pointer bg-white p-6 md:p-8 rounded-none border-b-4 border-transparent hover:border-secondary transition-all shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-5 md:mb-8">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/5 flex items-center justify-center text-primary group-hover:bg-secondary group-hover:text-white transition-all duration-500">
                  {seg.icon}
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-300 group-hover:text-secondary-fixed transition-colors">
                  {seg.tag}
                </span>
              </div>
              
              <h3 className="font-headline-md text-lg md:text-xl text-primary mb-3 md:mb-4 uppercase">
                {seg.title}
              </h3>
              
              <p className="text-on-surface-variant text-sm leading-relaxed mb-5 md:mb-8 flex-1">
                {seg.description}
              </p>
              
              <div className="flex items-center gap-2 text-secondary font-bold text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                Ver Detalhes <ArrowRight size={16} />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-surface-container-low/50 -skew-x-12 translate-x-1/2 pointer-events-none"></div>
    </section>
  );
};
