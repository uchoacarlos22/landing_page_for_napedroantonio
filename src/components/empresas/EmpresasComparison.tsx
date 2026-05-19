import React from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { Container } from "../../shared/Container";
import {
  empresasPains,
  empresasSolutions,
} from "../../data/empresas/comparison";

export const EmpresasComparison: React.FC = () => {
  return (
    <section className="py-24 bg-[#020617] border-y border-white/5">
      <Container>
        <div className="text-center mb-16">
          <span className="bg-white/10 text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest inline-block">
            O Diferencial Competitivo
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mt-6 mb-6">
            Cenário Atual vs. Padrão NPA
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* PAIN */}
          <div className="bg-red-500/[0.03] border border-red-500/10 rounded-3xl p-8 md:p-10">
            <h3 className="flex items-center gap-3 text-red-400 text-2xl font-black mb-8 pb-5 border-b border-red-500/10">
              <AlertCircle size={28} />
              Problemas comuns do mercado
            </h3>

            <ul className="space-y-6">
              {empresasPains.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="text-red-400 mt-1">✕</span>
                  <span className="text-slate-300 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* SOLUTION */}
          <div className="relative overflow-hidden bg-green-500/[0.03] border border-green-500/20 rounded-3xl p-8 md:p-10">
            <div className="absolute top-0 right-0 w-40 h-40 bg-green-500/10 blur-3xl rounded-full" />

            <h3 className="relative z-10 flex items-center gap-3 text-green-400 text-2xl font-black mb-8 pb-5 border-b border-green-500/10">
              <CheckCircle2 size={28} />
              Padrão Ouro NPA
            </h3>

            <ul className="relative z-10 space-y-6">
              {empresasSolutions.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="text-green-400 mt-1">✓</span>
                  <span className="text-white font-medium leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};
