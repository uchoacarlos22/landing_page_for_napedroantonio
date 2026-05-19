import React from "react";
import Hero from "./components/Hero";
import EVTable from "./components/EVTable";
import WhyNPA from "./components/WhyNPA";
import EVPersonas from "./components/EVPersonas";
import MarketStatsEV from "./components/MarketStatsEV";
import Consultation from "../../components/Consultation";
import mobilityHero from "../../assets/solar/images/hero/solar_hero_mobilidade.webp";

const MobilidadePage: React.FC = () => {
  return (
    <main>
      <Hero
        title="Instalação de Carregadores para Carros Elétricos em São Paulo"
        subtitle="Wallbox residencial, eletroposto para condomínios e infraestrutura de recarga para frotas em SP."
        waMsg="Olá! Gostaria de um projeto de infraestrutura para carregamento de veículos elétricos. Vi no hub da NPA."
        heroImage={mobilityHero}
      />

      <MarketStatsEV />

      <EVPersonas />

      <EVTable />

      <WhyNPA />

      <div style={{ background: "#0a192f", paddingBottom: "100px" }}>
        <Consultation
          title="CONSULTORIA EM MOBILIDADE"
          subtitle="PROJETOS DE INFRAESTRUTURA PARA CARREGAMENTO ELÉTRICO."
          defaultService="energia-solar"
          whatsappMessage="Olá! Gostaria de um projeto de infraestrutura para carregamento de veículos elétricos."
          variant="mobilidade"
        />
      </div>
    </main>
  );
};

export default MobilidadePage;
