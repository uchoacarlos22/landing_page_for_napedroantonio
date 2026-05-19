import React, { useState } from "react";
import hospital from "../../../assets/solar/images/portfolio/solar-hospital.webp";
import galpao from "../../../assets/solar/images/portfolio/solar-instalacao-galpao-urbano.webp";
import predioComercial from "../../../assets/solar/images/portfolio/solar-comercial-predio.jpg";
import salaoResidencial from "../../../assets/solar/images/portfolio/solar-residencial-salao.jpeg";
import telhadoResidencial from "../../../assets/solar/images/portfolio/solar-residencial-telhado-1.jpg";
import telhadoResidencial2 from "../../../assets/solar/images/portfolio/solar-residencial-telhado-2.jpg";
import chacara from "../../../assets/solar/images/portfolio/solar-residencial-chacara.jpeg";
import { X, ArrowLeft, ArrowRight, ZoomIn } from "lucide-react";
import { trackWA, WA_BASE } from "../solar-theme";

const projects = [
  {
    id: 1,
    type: "comercial",
    location: "Hospital Central",
    economy: "R$ 9.260/mês",
    power: "180 Módulos · 72 kWp",
    img: hospital,
  },
  {
    id: 2,
    type: "industrial",
    location: "Galpão Industrial Urbano",
    economy: "R$ 7.445/mês",
    power: "144 Módulos · 57 kWp",
    img: galpao,
  },
  {
    id: 3,
    type: "comercial",
    location: "Complexo Comercial",
    economy: "R$ 5.400/mês",
    power: "94 Módulos · 37 kWp",
    img: predioComercial,
  },
  {
    id: 4,
    type: "residencial",
    location: "Residência Alto Padrão",
    economy: "R$ 1.900/mês",
    power: "18 Módulos · 7,2 kWp",
    img: telhadoResidencial2,
  },
  {
    id: 5,
    type: "residencial",
    location: "Casa com Área Verde",
    economy: "R$ 980/mês",
    power: "12 Módulos · 4,8 kWp",
    img: salaoResidencial,
  },
  {
    id: 6,
    type: "residencial",
    location: "Casa com Piscina",
    economy: "R$ 1.100/mês",
    power: "10 Módulos · 4 kWp",
    img: telhadoResidencial,
  },
  {
    id: 7,
    type: "condominio",
    location: "Condomínio Mont Blanc",
    economy: "R$ 4.850/mês",
    power: "82 Módulos · 32 kWp",
    img: chacara,
  },
];

export const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState("todos");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const filteredProjects =
    filter === "todos" ? projects : projects.filter((p) => p.type === filter);

  const openLightbox = (index: number) => {
    setCurrentImgIndex(index);
    setLightboxOpen(true);
  };

  const nextImg = () =>
    setCurrentImgIndex((prev) =>
      prev === filteredProjects.length - 1 ? 0 : prev + 1,
    );
  const prevImg = () =>
    setCurrentImgIndex((prev) =>
      prev === 0 ? filteredProjects.length - 1 : prev - 1,
    );

return (
    <section id="portfolio" className="py-12 md:py-20 bg-slate-50 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-secondary mb-2 md:mb-3 block">
            Cases de Sucesso
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-primary mb-4 md:mb-6">
            Engenharia que entrega{" "}
            <span className="text-secondary">resultado</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base md:text-lg">
            Conferia alguns dos projetos realizados em parceria com nosso corpo
            técnico, delivering ROI real e segurança operacional.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 md:gap-3 justify-center mb-8 md:mb-12">
          {[
            "todos",
            "residencial",
            "comercial",
            "industrial",
            "condominio",
          ].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 md:px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 border-2 ${
                filter === f
                  ? "bg-primary text-white border-primary"
                  : "bg-white text-slate-400 border-slate-200 hover:border-primary hover:text-primary"
              }`}
            >
              {f === "todos" ? "Todos" : f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => openLightbox(idx)}
              className="bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] hover:-translate-y-2 transition-all duration-500 cursor-pointer group"
            >
              <div className="relative h-48 md:h-64 overflow-hidden">
                <img
                  src={project.img}
                  alt={project.location}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                  <div className="bg-secondary rounded-full w-12 h-12 md:w-14 md:h-14 flex items-center justify-center text-primary shadow-xl">
                    <ZoomIn size={24} md:size={28} />
                  </div>
                </div>
                <div
                  className={`absolute top-3 md:top-5 left-3 md:left-5 text-[9px] md:text-[10px] font-black uppercase px-3 md:px-4 py-1 md:py-1.5 rounded-full text-white shadow-lg ${
                    project.type === "residencial"
                      ? "bg-green-500"
                      : project.type === "comercial"
                        ? "bg-blue-600"
                        : project.type === "condominio"
                          ? "bg-sky-500"
                          : "bg-slate-800"
                  }`}
                >
                  {project.type}
                </div>
              </div>
              <div className="p-5 md:p-8">
                <h4 className="font-bold text-lg md:text-xl text-primary mb-1 md:mb-2">
                  {project.location}
                </h4>
                <div className="flex items-center justify-between mt-3 md:mt-4 pt-3 md:pt-4 border-t border-slate-100">
                  <div className="flex flex-col">
                    <span className="text-[9px] md:text-[10px] uppercase text-slate-400 font-bold tracking-wider">
                      Economia Mensal
                    </span>
                    <span className="text-base md:text-lg font-black text-green-600">
                      {project.economy}
                    </span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[9px] md:text-[10px] uppercase text-slate-400 font-bold tracking-wider">
                      Tamanho
                    </span>
                    <span className="text-sm font-bold text-slate-700">
                      {project.power}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <p className="text-slate-500 mb-6 text-lg italic">
            "Instalações realizadas por corpo técnico parceiro e homologado NPA"
          </p>
          <a
            href={`${WA_BASE}?text=${encodeURIComponent(
              "Olá, NPA! Gostaria de ter um projeto solar como os do portfólio.",
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWA("portfolio_cta")}
            className="inline-flex items-center gap-3 bg-secondary text-primary font-black text-sm uppercase tracking-widest px-10 py-5 rounded-full hover:scale-105 transition-all shadow-xl"
          >
            Seu projeto começa aqui <ArrowRight size={20} />
          </a>
        </div>
      </div>

      {lightboxOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/95 animate-in fade-in duration-300">
          <div className="relative max-w-5xl w-full mx-4 flex flex-col items-center">
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute -top-16 right-0 text-white/50 hover:text-white transition-colors p-2"
            >
              <X size={40} />
            </button>
            <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={filteredProjects[currentImgIndex].img}
                alt="Projeto realizado"
                className="w-full max-h-[80vh] object-contain bg-slate-900"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-slate-950 to-transparent text-white">
                <h3 className="text-2xl font-black mb-2">
                  {filteredProjects[currentImgIndex].location}
                </h3>
                <p className="text-white/80 font-bold uppercase tracking-widest text-xs">
                  {filteredProjects[currentImgIndex].power} •{" "}
                  {filteredProjects[currentImgIndex].economy}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-10 mt-10">
              <button
                onClick={prevImg}
                className="group flex items-center gap-3 text-white font-bold text-sm uppercase tracking-widest hover:text-secondary transition-colors"
              >
                <div className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center group-hover:border-secondary transition-colors">
                  <ArrowLeft size={20} />
                </div>
                Anterior
              </button>

              <div className="text-white/40 font-black tracking-widest text-lg">
                {currentImgIndex + 1}{" "}
                <span className="text-white/10 mx-2">/</span>{" "}
                {filteredProjects.length}
              </div>

              <button
                onClick={nextImg}
                className="group flex items-center gap-3 text-white font-bold text-sm uppercase tracking-widest hover:text-secondary transition-colors"
              >
                Próximo
                <div className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center group-hover:border-secondary transition-colors">
                  <ArrowRight size={20} />
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
