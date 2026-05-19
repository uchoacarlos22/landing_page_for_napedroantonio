import React from "react";
import { ArrowRight } from "lucide-react";
import b2bHero from "../../assets/images/hero-b2b.webp";
import { buildWhatsAppLink } from "../../utils/whatsapp";

export const EmpresasHero: React.FC = () => {
  return (
    <section className="relative min-h-[84vh] flex items-center justify-center px-4 pt-12 pb-12">
      {/* BG IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${b2bHero})`,
          filter: "brightness(1.8)",
        }}
        role="img"
        aria-label="Reforma comercial em andamento"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/55 via-[#051424]/40 to-[#051424]" />

      {/* GRID EFFECT */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <span className="inline-flex items-center gap-2 bg-[#f9c03d]/10 border border-[#f9c03d]/30 text-[#f9c03d] px-5 py-2 rounded-full text-xs font-black uppercase tracking-[0.25em] mb-8">
          Reforma Comercial • Obras Corporativas • Industrial
        </span>

        <h1 className="text-4xl md:text-6xl xl:text-7xl font-black text-white leading-[1.05] tracking-tight mb-8">
          Reforma e Obra Comercial para
          <span className="block text-[#f9c03d]">Empresas em São Paulo</span>
        </h1>

        <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-300 leading-relaxed mb-10">
          Escritórios, clínicas, galpões e lojas comerciais com ART, NF,
          cronograma garantido em contrato rigoroso e gestão completa da obra.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={buildWhatsAppLink(
              "Olá! Sou responsável por uma empresa e preciso de uma proposta técnica para obra comercial.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#f9c03d] text-[#3d2a00] px-8 md:px-10 py-5 rounded-xl font-black uppercase tracking-[0.18em] text-sm hover:scale-[1.03] transition-all shadow-[0_0_30px_rgba(249,192,61,0.25)] flex items-center justify-center gap-3"
          >
            Solicitar proposta técnica
            <ArrowRight size={18} />
          </a>

          <a
            href="#cases"
            className="border border-white/10 bg-white/5 backdrop-blur-sm text-white px-8 md:px-10 py-5 rounded-xl font-bold uppercase tracking-[0.18em] text-sm hover:bg-white/10 transition-all"
          >
            Ver casos reais
          </a>
        </div>
      </div>
    </section>
  );
};
