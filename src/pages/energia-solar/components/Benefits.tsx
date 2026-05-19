import React from "react";
import { Wallet, Building2, Leaf, Wrench } from "lucide-react";

const benefits = [
  {
    icon: Wallet,
    title: "Economia Imediata",
    description:
      "Redução drástica na conta de luz desde o primeiro mês de ativação.",
  },
  {
    icon: Building2,
    title: "Valorização",
    description:
      "Imóveis com energia solar são ativos mais valiosos, chegando a 10% de valorização.",
  },
  {
    icon: Leaf,
    title: "Sustentabilidade",
    description:
      "Energia 100% limpa e renovável, alinhada com as melhores práticas ESG.",
  },
  {
    icon: Wrench,
    title: "Baixa Manutenção",
    description:
      "Sistemas de alta confiabilidade com durabilidade superior a 25 anos.",
  },
];

const Benefits: React.FC = () => {
  return (
    <section
      id="beneficios"
      className="py-12 md:py-section-padding bg-surface-container-low"
    >
      <div className="container-max mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {benefits.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="bg-white p-6 md:p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-on-primary-container/10 flex items-center justify-center mb-4 md:mb-6 text-secondary rounded-lg group-hover:bg-secondary group-hover:text-white transition-colors">
                  <Icon size={24} md:size={28} strokeWidth={1.8} />
                </div>

                <h3 className="font-headline-md text-lg md:text-headline-md mb-3 md:mb-4 text-primary">
                  {item.title}
                </h3>

                <p className="text-on-surface-variant text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
