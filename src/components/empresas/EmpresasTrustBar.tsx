import React from "react";
import { Container } from "../../shared/Container";
import { empresasMiniStats } from "../../data/empresas/stats";

export const EmpresasTrustBar: React.FC = () => {
  return (
    <section className="bg-[#020617] py-8 border-y border-white/5 relative z-20">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-x-0 md:divide-x divide-white/10">
          {empresasMiniStats.map((stat, i) => (
            <div key={i} className="py-4 md:py-2">
              <div className="text-3xl font-black text-[#f9c03d] mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-slate-400 uppercase tracking-widest font-bold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
