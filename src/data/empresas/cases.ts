// ── CASE IMAGES ─────────────────────────────────────────────
import caseCorporate from "../../assets/images/services/case-corporate.jpg";
import caseOffice from "../../assets/images/services/case-office.jpg";
import caseWarehouse from "../../assets/images/services/case-warehouse.jpg";
import caseLobby from "../../assets/images/services/case-lobby.jpg";
import caseRetail from "../../assets/images/services/case-retail.jpg";
import caseClinic from "../../assets/images/services/case-clinic.jpg";

export interface CaseStudy {
  id: number;
  title: string;
  segment: string;
  description: string;
  result: string;
  image: string;
}

export const empresasCases: CaseStudy[] = [
  {
    id: 1,
    title: "Edifício Corporativo",
    segment: "Corporativo · São Paulo",
    description:
      "Modernização completa da fachada, recepção premium e adequação elétrica corporativa.",
    result: "Entrega em 78 dias",
    image: caseCorporate,
  },
  {
    id: 2,
    title: "Escritório Empresarial",
    segment: "Escritórios · Morumbi",
    description:
      "Reforma corporativa com infraestrutura moderna e operação funcionando durante toda a obra.",
    result: "Operação ativa durante execução",
    image: caseOffice,
  },
  {
    id: 3,
    title: "Centro Logístico",
    segment: "Industrial · Grande SP",
    description:
      "Ampliação estrutural e modernização operacional de galpão logístico.",
    result: "30% ganho operacional",
    image: caseWarehouse,
  },
  {
    id: 4,
    title: "Lobby Premium",
    segment: "Comercial · Alphaville",
    description:
      "Reforma de recepção corporativa com iluminação arquitetural e acabamento premium.",
    result: "Valorização institucional",
    image: caseLobby,
  },
  {
    id: 5,
    title: "Loja Conceito",
    segment: "Varejo · São Paulo",
    description:
      "Execução acelerada de loja comercial com cronograma estratégico para inauguração.",
    result: "Entrega antecipada",
    image: caseRetail,
  },
  {
    id: 6,
    title: "Clínica Médica",
    segment: "Saúde · São Paulo",
    description:
      "Adequação técnica e arquitetônica para clínica de alto padrão com conformidade ABNT.",
    result: "100% regularizada",
    image: caseClinic,
  },
];
