import React from "react";
import Hero from "./components/Hero";
import { Portfolio } from "./components/Portfolio";
import { Promocoes } from "./components/Promocoes";
import { GarantiasPagamento } from "./components/GarantiasPagamento";
import Benefits from "./components/Benefits";
import HowItWorks from "./components/HowItWorks";
import BlocoRazoesResidencial from "./components/BlocoRazoesResidencial";
import WhyNPA from "./components/WhyNPA";
import Savings from "./components/Savings";
import FAQ from "./components/FAQ";
import LeadForm from "./components/LeadForm";
import FinalCTA from "./components/FinalCTA";
import resHero from "../../assets/solar/images/hero/solar_hero_residencial.webp";

const SolarResidencialPage: React.FC = () => (
  <main>
    <Hero
      title="Energia Solar Residencial em São Paulo — Economize até 95%"
      subtitle="Instalação de painéis solares para casas e apartamentos em SP. Financiamento em até 60x, garantia de 25 anos."
      waMsg="Olá, NPA! 👋 Gostaria de solicitar uma simulação gratuita de energia solar para minha residência. Podem me ajudar?"
      heroImage={resHero}
    />
    <BlocoRazoesResidencial />
    <Portfolio />
    <Promocoes />
    <GarantiasPagamento />
    <Benefits />
    <HowItWorks />
    <WhyNPA />
    <Savings />
    <FAQ />
    <LeadForm />
    <FinalCTA />
  </main>
);

export default SolarResidencialPage;
