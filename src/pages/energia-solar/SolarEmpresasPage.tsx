import React from "react";
import Hero from "./components/Hero";
import { GarantiasPagamento } from "./components/GarantiasPagamento";
import Benefits from "./components/Benefits";
import CasesReais from "./components/CasesReais";
import WhyNPA from "./components/WhyNPA";
import { SavingsB2B } from "./components/SavingsB2B";
import FAQ from "./components/FAQ";
import Consultation from "../../components/Consultation";
import b2bHero from "../../assets/solar/images/hero/solar_hero_empresas.webp";

const SolarEmpresasPage: React.FC = () => {
  return (
    <main>
      <Hero
        title="Energia Solar para Empresas em São Paulo — Reduza até 95% do OPEX"
        subtitle="Sistemas fotovoltaicos para comércios, indústrias e galpões em SP. Payback de 2 a 5 anos, financiamento e ART inclusos."
        waMsg="Olá! Gostaria de uma análise de viabilidade solar estratégica para minha empresa. Vi o projeto no hub da NPA."
        heroImage={b2bHero}
      />

      <CasesReais />

      <div style={{ background: "#f8fafc" }}>
        <Benefits />
      </div>

      <SavingsB2B />

      <GarantiasPagamento />

      <WhyNPA />

      <FAQ />

      <div style={{ background: "#0a192f", paddingBottom: "100px" }}>
        <Consultation
          title="Solicite um Estudo de Viabilidade Solar Gratuito"
          subtitle="Análise técnica com estimativa de economia, payback e ROI para sua operação."
          defaultService="energia-solar"
          whatsappMessage="Olá! Tenho uma [empresa/comércio/indústria] em [cidade] e quero um estudo de energia solar."
          variant="empresas"
        />
      </div>
    </main>
  );
};

export default SolarEmpresasPage;
