import React from "react";
import ProcessoObra from "../components/ProcessoObra";
import Consultation from "../components/Consultation";
import { EmpresasHero } from "../components/empresas/EmpresasHero";
import { EmpresasTrustBar } from "../components/empresas/EmpresasTrustBar";
import { EmpresasCases } from "../components/empresas/EmpresasCases";
import { EmpresasBenefits } from "../components/empresas/EmpresasBenefits";
import { EmpresasComparison } from "../components/empresas/EmpresasComparison";

/**
 * B2B / Empresas Page
 * Modular Architecture for scalability and specialized marketing campaigns.
 */
const EmpresasPage: React.FC = () => {
  return (
    <main className="bg-[#051424] text-[#d4e4fa] font-['Inter',sans-serif]">
      {/* Hero Section with LCP Optimization */}
      <EmpresasHero />

      {/* Social Proof & Metrics Bar */}
      <EmpresasTrustBar />

      {/* Track Record & Case Studies Grid */}
      <EmpresasCases />

      {/* Main Value Proposition & Benefits */}
      <EmpresasBenefits />

      {/* Market Comparison / Methodology */}
      <EmpresasComparison />

      {/* Technical Process Timeline */}
      <ProcessoObra />

      {/* Conversion / Final Lead Capture */}
      <section className="bg-[#051424]">
        <Consultation
          title="Solicite uma Proposta Técnica para sua Empresa"
          subtitle="Receba um estudo técnico com estimativa de prazo, custo e viabilidade para sua obra comercial em até 24h."
          defaultService="comercial"
          whatsappMessage="Olá! Sou responsável por uma empresa em [cidade] e gostaria de solicitar uma proposta técnica para obra/reforma comercial."
          variant="empresas"
        />
      </section>
    </main>
  );
};

export default EmpresasPage;
