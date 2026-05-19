import React from "react";
import { SolarSegments } from "./components/SolarSegments";
import VideoSection from "./components/VideoSection";
import { Portfolio } from "./components/Portfolio";
import { Promocoes } from "./components/Promocoes";
import { GarantiasPagamento } from "./components/GarantiasPagamento";
import Benefits from "./components/Benefits";
import HowItWorks from "./components/HowItWorks";
import WhyNPA from "./components/WhyNPA";
import Savings from "./components/Savings";
import FAQ from "./components/FAQ";
import LeadForm from "./components/LeadForm";
import FinalCTA from "./components/FinalCTA";
import SolarHeroSlider from "./components/SolarHeroSlider";

const SolarPage: React.FC = () => (
  <main>
    <SolarHeroSlider />
    <SolarSegments />
    <VideoSection />
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

export default SolarPage;
