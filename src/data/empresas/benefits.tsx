import React from "react";
import { LineChart, TimerReset, FileCheck2, BadgeCheck } from "lucide-react";

export interface BenefitItem {
  icon: React.ReactNode;
  title: string;
  text: string;
}

export const empresasBenefits: BenefitItem[] = [
  {
    icon: <LineChart size={28} />,
    title: "Controle Total de Orçamento",
    text: "Planejamento financeiro e engenharia de valor para eliminar desperdícios e aditivos surpresa.",
  },
  {
    icon: <TimerReset size={28} />,
    title: "Cronograma Garantido",
    text: "Gestão estratégica de obra com acompanhamento rigoroso de cada etapa.",
  },
  {
    icon: <FileCheck2 size={28} />,
    title: "ART, NF e Conformidade",
    text: "Segurança jurídica e adequação técnica completa para empresas e condomínios.",
  },
  {
    icon: <BadgeCheck size={28} />,
    title: "Gestão Turn-Key",
    text: "Da execução civil à elétrica e energia solar com um único parceiro estratégico.",
  },
];
