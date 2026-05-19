import React from "react";
import { Container } from "../../shared/Container";
import { SectionHeading } from "../../shared/SectionHeading";
import { GlassCard } from "../../shared/GlassCard";
import { empresasBenefits } from "../../data/empresas/benefits";

export const EmpresasBenefits: React.FC = () => {
  return (
    <section className="py-24 bg-[#071524] relative">
      <Container>
        <SectionHeading
          badge="Diferenciais NPA"
          title={
            <>
              Engenharia focada em prazo,
              <span className="block text-[#f9c03d]">orçamento e operação</span>
            </>
          }
          description="Obras corporativas exigem previsibilidade financeira, conformidade técnica e impacto mínimo na operação."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {empresasBenefits.map((item, index) => (
            <GlassCard key={index} className="group">
              <div className="w-14 h-14 rounded-2xl bg-[#f9c03d]/10 text-[#f9c03d] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>

              <h3 className="text-white text-xl font-black mb-4 leading-snug">
                {item.title}
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed">
                {item.text}
              </p>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  );
};
