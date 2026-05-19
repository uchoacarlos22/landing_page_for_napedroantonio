import React from "react";
import { ArrowRight } from "lucide-react";
import { Container } from "../../shared/Container";
import { empresasCases } from "../../data/empresas/cases";
import { buildWhatsAppLink } from "../../utils/whatsapp";

export const EmpresasCases: React.FC = () => {
  return (
    <section id="cases" className="relative py-12 bg-[#051424] overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      <Container className="relative z-10 max-w-[1200px]">
        {/* HEADING */}
        <div className="max-w-3xl mb-14">
          <span className="inline-flex items-center gap-2 border border-[#f9c03d]/30 bg-[#f9c03d]/10 text-[#f9c03d] px-4 py-2 rounded-full text-[11px] font-black uppercase tracking-[0.25em] mb-6">
            Estudos de Casos Reais
          </span>

          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
            Obras comerciais executadas com foco em
            <span className="block text-[#f9c03d]">
              performance e valorização
            </span>
          </h2>

          <p className="text-[#b8c7d9] text-lg leading-relaxed max-w-2xl">
            Projetos corporativos planejados para reduzir riscos operacionais,
            acelerar entregas e elevar o padrão da infraestrutura empresarial.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
          {empresasCases.map((item) => (
            <div
              key={item.id}
              className="group rounded-3xl overflow-hidden border border-white/10 bg-[#0d1d2f] hover:border-[#f9c03d]/40 transition-all duration-500 hover:-translate-y-1"
            >
              {/* IMAGE */}
              <div className="relative h-[280px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#071524] via-[#071524]/20 to-transparent" />

                <div className="absolute top-5 left-5">
                  <span className="bg-[#f9c03d] text-[#402d00] px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">
                    {item.segment}
                  </span>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-8">
                <h3 className="text-2xl font-black text-white uppercase leading-tight mb-4">
                  {item.title}
                </h3>

                <p className="text-[#b8c7d9] text-sm leading-relaxed mb-7">
                  {item.description}
                </p>

                <div className="flex items-center justify-between pt-5 border-t border-white/10">
                  <div>
                    <p className="text-[#f9c03d] text-[10px] uppercase tracking-[0.25em] font-black mb-2">
                      Resultado
                    </p>

                    <p className="text-white text-sm font-semibold">
                      {item.result}
                    </p>
                  </div>

                  <a
                    href={buildWhatsAppLink(
                      "Olá! Vi os casos de obras corporativas e gostaria de falar sobre meu projeto.",
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#f9c03d] text-sm uppercase tracking-[0.2em] font-black hover:text-white transition-colors"
                  >
                    Ver projeto
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href={buildWhatsAppLink(
              "Olá! Gostaria de receber uma proposta para uma obra comercial.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#f9c03d] text-[#402d00] px-10 py-5 rounded-2xl text-sm font-black uppercase tracking-[0.2em] hover:scale-105 transition-all shadow-[0_0_30px_rgba(249,192,61,0.25)]"
          >
            Solicitar proposta técnica
            <ArrowRight size={18} />
          </a>
        </div>
      </Container>
    </section>
  );
};
