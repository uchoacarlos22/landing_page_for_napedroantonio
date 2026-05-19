export interface StatItem {
  value: string;
  label: string;
}

export const empresasStats: StatItem[] = [
  { value: "15+", label: "obras corporativas" },
  { value: "500+", label: "m² construídos/reformados" },
  { value: "100%", label: "entrega no prazo" },
  { value: "R$0", label: "aditivos surpresa" },
];

export const empresasMiniStats: StatItem[] = [
  { value: "15+", label: "anos de mercado" },
  { value: "100%", label: "obras com ART" },
  { value: "24h", label: "prazo de proposta" },
  { value: "R$0", label: "custos ocultos" },
];
