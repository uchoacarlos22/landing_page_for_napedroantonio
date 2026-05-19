import React from "react";

const HowItWorks: React.FC = () => {
  return (
    <section id="como-funciona" className="py-section-padding bg-white">
      <div className="container-max mx-auto px-8">
        <h2 className="font-headline-lg text-headline-lg text-center mb-16 text-primary">O Caminho para sua Independência Energética</h2>
        <div className="relative flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Line background for desktop */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-[2px] bg-surface-container-highest -z-10"></div>
          
          <div className="flex-1 text-center group">
            <div className="w-24 h-24 rounded-full bg-white border-4 border-surface-container-highest flex items-center justify-center mx-auto mb-6 group-hover:border-secondary transition-colors z-10 relative">
              <span className="text-2xl font-bold text-primary">01</span>
            </div>
            <h4 className="font-headline-md text-headline-md mb-2">Visita Técnica</h4>
            <p className="text-on-surface-variant px-4">Análise detalhada da estrutura e incidência solar.</p>
          </div>
          
          <div className="flex-1 text-center group">
            <div className="w-24 h-24 rounded-full bg-white border-4 border-surface-container-highest flex items-center justify-center mx-auto mb-6 group-hover:border-secondary transition-colors z-10 relative">
              <span className="text-2xl font-bold text-primary">02</span>
            </div>
            <h4 className="font-headline-md text-headline-md mb-2">Projeto</h4>
            <p className="text-on-surface-variant px-4">Dimensionamento exclusivo para sua necessidade energética.</p>
          </div>
          
          <div className="flex-1 text-center group">
            <div className="w-24 h-24 rounded-full bg-white border-4 border-surface-container-highest flex items-center justify-center mx-auto mb-6 group-hover:border-secondary transition-colors z-10 relative">
              <span className="text-2xl font-bold text-primary">03</span>
            </div>
            <h4 className="font-headline-md text-headline-md mb-2">Instalação</h4>
            <p className="text-on-surface-variant px-4">Execução limpa e rápida com equipe técnica qualificada.</p>
          </div>
          
          <div className="flex-1 text-center group">
            <div className="w-24 h-24 rounded-full bg-white border-4 border-surface-container-highest flex items-center justify-center mx-auto mb-6 group-hover:border-secondary transition-colors z-10 relative">
              <span className="text-2xl font-bold text-primary">04</span>
            </div>
            <h4 className="font-headline-md text-headline-md mb-2">Homologação</h4>
            <p className="text-on-surface-variant px-4">Cuidamos de toda a burocracia junto à concessionária.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
