import React from "react";
import Hero from "./components/Hero";
import { Portfolio } from "./components/Portfolio";
import WhyNPA from "./components/WhyNPA";
import TabelaEconomiaCondominio from "./components/TabelaEconomiaCondominio";
import ProblemaTaxaCondominio from "./components/ProblemaTaxaCondominio";
import BenefitsCondo from "./components/BenefitsCondo";
import Savings from "./components/Savings";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Consultation from "../../components/Consultation";
import condHero from "../../assets/solar/images/hero/solar_hero_condominios.webp";

const CondominiosPage: React.FC = () => (
  <main>
    <Hero
      title="Energia Solar para Condomínios"
      subtitle="Energia solar para áreas comuns em SP. Reduza a taxa em até 30%, valorize as unidades e cumpra metas ESG."
      waMsg="Olá! Sou síndico/administrador e gostaria de uma análise solar para meu condomínio. Vi o projeto no hub da NPA."
      heroImage={condHero}
    />

    <ProblemaTaxaCondominio />
    <TabelaEconomiaCondominio />
    <BenefitsCondo />
    <Portfolio />
    <WhyNPA />
    <Savings variant="condominios" />
    <FAQ />

    <Consultation
      title="Solicitar Estudo de Viabilidade para o Condomínio"
      subtitle="Analise a viabilidade para seu condomínio com nossos especialistas."
      defaultService="energia-solar"
      variant="condominios"
      whatsappMessage="Olá! Sou síndico do [Condomínio X] em [cidade/bairro SP] e quero um estudo de energia solar."
    />

    <FinalCTA />
  </main>
);

export default CondominiosPage;
