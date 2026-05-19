import React from "react";
import { trackWA, WA_BASE } from "../solar-theme";

const FinalCTA: React.FC = () => {
  const waMsg = encodeURIComponent(
    "Olá, NPA! Quero falar com um especialista sobre meu projeto de energia solar.",
  );

  return (
    <section className="py-12 bg-primary text-center">
      <div className="container-max mx-auto px-8">
        <h2 className="font-display-lg text-display-lg text-white mb-8">
          Pare de pagar caro pela energia
        </h2>
        <p className="font-body-lg text-body-lg text-white/60 mb-12 max-w-2xl mx-auto">
          Junte-se às centenas de famílias que já transformaram seus telhados em
          usinas de economia e sustentabilidade com a NPA Solar.
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <a
            href={`${WA_BASE}?text=${waMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWA("final_cta")}
            className="flex items-center justify-center bg-secondary-container text-on-secondary-fixed font-label-caps text-label-caps px-12 py-5 shadow-xl hover:scale-105 transition-transform select-none"
          >
            Falar com Especialista
          </a>
          <button
            onClick={() =>
              document
                .getElementById("portfolio")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="border border-white/20 text-white font-label-caps text-label-caps px-12 py-5 hover:bg-white hover:text-primary transition-all select-none"
          >
            Ver Projetos
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
