/**
 * Savings.tsx — ATUALIZADO com dados reais dos orçamentos
 */

import React, { useState } from 'react';
import { trackWA, WA_BASE } from '../solar-theme';
import { Calculator, TrendingUp, Clock, Zap } from 'lucide-react';

// Parâmetros reais do PDF (orçamento Fabíola / DJG-Solar)
const TARIFA_KWH = 0.80;          // R$/kWh (dado do PDF)
const REAJUSTE_ANUAL = 0.06;      // 6% ao ano (dado do PDF)
const ECONOMIA_PERCENT = 0.95;    // 95% de economia (sistema on-grid típico)
const CUSTO_POR_KWP = 2625;      // R$/kWp (baseado em R$26.468 / 10.08kWp)
const ANOS_VIDA = 25;             // vida útil garantida dos módulos

// Calcula economia acumulada com reajuste tarifário de 6% ao ano
function calcEconomia25Anos(economiaMensal: number): number {
  let total = 0;
  let mensal = economiaMensal;
  for (let ano = 0; ano < ANOS_VIDA; ano++) {
    total += mensal * 12;
    mensal *= 1 + REAJUSTE_ANUAL;
  }
  return total;
}

interface SavingsProps {
  variant?: "residencial" | "condominios";
}

const Savings: React.FC<SavingsProps> = ({ variant = "residencial" }) => {
  const [bill, setBill] = useState(variant === "condominios" ? 2500 : 800);

  // Economia mensal estimada
  const economiaMensal = Math.round(bill * ECONOMIA_PERCENT);
  const economiaAnual  = economiaMensal * 12;

  // Investimento estimado pelo consumo
  const kwh = bill / TARIFA_KWH;
  const kwpNecessario = kwh / 130;
  const investimentoEstimado = Math.round(kwpNecessario * CUSTO_POR_KWP);

  // Payback (anos)
  const paybackAnos = economiaAnual > 0
    ? (investimentoEstimado / economiaAnual).toFixed(1)
    : "—";

  // Economia acumulada em 25 anos (com reajuste)
  const economia25Anos = Math.round(calcEconomia25Anos(economiaMensal));

  // Parcela mínima estimada de financiamento
  const TAXA_MENSAL = 0.013;
  const parcela24x = Math.round(
    (investimentoEstimado * TAXA_MENSAL) / (1 - Math.pow(1 + TAXA_MENSAL, -24))
  );
  const economiaSobreParcela = economiaMensal - parcela24x;

  const fmt = (v: number) =>
    v.toLocaleString('pt-BR', { maximumFractionDigits: 0 });

  const labelSlider = variant === "condominios" 
    ? "Consumo mensal da área comum (R$)" 
    : "Sua conta de luz mensal";

  const waMsg = encodeURIComponent(
    `Olá! Quero simular um projeto solar para ${variant === "condominios" ? "meu condomínio" : "minha residência"}. Gasto médio: R$ ${bill},00.`
  );

  return (
    <section id="simulador" className="py-section-padding bg-surface-container">
      <div className="container-max mx-auto px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="font-label-caps text-label-caps text-secondary uppercase block mb-2">
            Simulador de economia {variant === "condominios" ? "Condominial" : ""}
          </span>
          <h2 className="font-display-lg text-headline-lg md:text-display-lg text-primary leading-tight mb-4">
            {variant === "condominios" 
              ? "Redução Real na Taxa de Condomínio" 
              : "Quanto você vai economizar?"}
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mx-auto">
            {variant === "condominios" 
              ? "Simule a economia energética das áreas comuns e veja o impacto direto no rateio mensal."
              : "Baseado na tarifa real de R$ 0,80/kWh com reajuste de 6% ao ano — os mesmos parâmetros usados nos nossos orçamentos."}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-10">

          {/* Slider */}
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-3 mb-6">
              <Calculator className="text-secondary" size={32} />
              <h3 className="font-headline-lg text-headline-md text-primary">
                Calculadora {variant === "condominios" ? "para Síndicos" : "de Economia"}
              </h3>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 mb-6">
              <label className="block font-label-caps text-label-caps text-primary mb-4 flex justify-between">
                <span>{labelSlider}</span>
                <span className="text-secondary text-xl border-b-2 border-secondary">
                  R$ {bill.toLocaleString('pt-BR')}
                </span>
              </label>
              <input
                type="range"
                min={variant === "condominios" ? "500" : "200"}
                max={variant === "condominios" ? "15000" : "5000"}
                step="50"
                value={bill}
                onChange={(e) => setBill(Number(e.target.value))}
                className="w-full h-2 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-secondary"
              />
              <div className="flex justify-between text-xs text-outline mt-2 font-label-caps">
                <span>R$ {variant === "condominios" ? "500" : "200"}</span>
                <span>R$ {variant === "condominios" ? "15.000+" : "5.000+"}</span>
              </div>
            </div>

            {/* Cards de métricas */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-2 mb-2">
                  <Zap size={16} className="text-secondary" />
                  <span className="font-label-caps text-[11px] text-outline uppercase tracking-wider">Economia mensal</span>
                </div>
                <div className="text-2xl font-black text-green-600">
                  R$ {fmt(economiaMensal)}
                </div>
                <div className="text-xs text-outline mt-1">{variant === "condominios" ? "Redução no rateio" : "95% da conta atual"}</div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-2 mb-2">
                  <Clock size={16} className="text-secondary" />
                  <span className="font-label-caps text-[11px] text-outline uppercase tracking-wider">Payback estimado</span>
                </div>
                <div className="text-2xl font-black text-primary">
                  {paybackAnos} anos
                </div>
                <div className="text-xs text-outline mt-1">Retorno do investimento</div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp size={16} className="text-secondary" />
                  <span className="font-label-caps text-[11px] text-outline uppercase tracking-wider">Em 25 anos*</span>
                </div>
                <div className="text-2xl font-black text-primary">
                  R$ {fmt(economia25Anos)}
                </div>
                <div className="text-xs text-outline mt-1">*com reajuste de 6% ao ano</div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-2 mb-2">
                  <Calculator size={16} className="text-secondary" />
                  <span className="font-label-caps text-[11px] text-outline uppercase tracking-wider">Investimento estimado</span>
                </div>
                <div className="text-2xl font-black text-primary">
                  R$ {fmt(investimentoEstimado)}
                </div>
                <div className="text-xs text-outline mt-1">Kit + instalação</div>
              </div>
            </div>
          </div>

          {/* Painel direito */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">

            {/* Resultado principal */}
            <div className="bg-primary text-white p-10 shadow-2xl relative overflow-hidden group rounded-xl">
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl group-hover:bg-secondary/20 transition-all duration-700" />

              <p className="font-label-caps text-label-caps text-secondary mb-2 uppercase tracking-widest">
                {variant === "condominios" ? "Capital economizado pelo condomínio" : "Economia acumulada em 25 anos"}
              </p>
              <h3 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tighter">
                R$ {fmt(economia25Anos)}
              </h3>

              <p className="font-body-md text-white/70 mb-6 border-l-4 border-secondary pl-4 text-sm leading-relaxed">
                {variant === "condominios" 
                  ? "Imagine reinvestir este valor em melhorias no condomínio, lazer ou fundo de reserva. A energia solar transforma um custo fixo passivo em um ativo financeiro para todos os condôminos."
                  : "Considerando tarifa de R$ 0,80/kWh com reajuste de 6% ao ano — os mesmos parâmetros usados nos orçamentos NPA. Após o payback de ~{paybackAnos} anos, a energia é praticamente gratuita pelo restante da vida útil."}
              </p>

              <a
                href={`${WA_BASE}?text=${waMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWA('simulador')}
                className="inline-flex w-full md:w-auto items-center justify-center bg-secondary-container text-on-secondary-fixed font-label-caps text-label-caps px-8 py-4 shadow-lg hover:bg-secondary-fixed transition-all"
              >
                {variant === "condominios" ? "Solicitar Analise de Viabilidade" : "Pedir detalhamento no WhatsApp"}
              </a>
            </div>

            {/* Comparativo parcela vs conta */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h4 className="font-bold text-primary text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                <CreditCardIcon size={16} className="text-secondary" />
                {variant === "condominios" ? "Impacto no Fluxo de Caixa" : "Financiamento vs Conta de Luz"}
              </h4>

              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-600">{variant === "condominios" ? "Gasto atual área comum" : "Sua conta atual"}</span>
                  <span className="font-black text-red-500 text-base">- R$ {fmt(bill)}/mês</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-600">Parcela estimada (24x)</span>
                  <span className="font-black text-primary text-base">R$ {fmt(parcela24x)}/mês</span>
                </div>
                <div className={`flex justify-between items-center py-3 px-3 rounded-lg ${economiaSobreParcela >= 0 ? 'bg-green-50 border border-green-200' : 'bg-orange-50 border border-orange-200'}`}>
                  <span className={`text-sm font-bold ${economiaSobreParcela >= 0 ? 'text-green-700' : 'text-orange-700'}`}>
                    {economiaSobreParcela >= 0 ? '✓ Rateio reduzido no 1º mês' : 'Diferença pequena vs conta atual'}
                  </span>
                  <span className={`font-black text-lg ${economiaSobreParcela >= 0 ? 'text-green-700' : 'text-orange-600'}`}>
                    {economiaSobreParcela >= 0 ? '+' : ''}R$ {fmt(Math.abs(economiaSobreParcela))}/mês
                  </span>
                </div>
              </div>

              <p className="text-xs text-outline mt-3">
                * Parcela estimada para financiamento de 24x com taxa de 1,3% a.m. Condições reais sujeitas a análise técnica e assembleia.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

// Ícone de cartão (renomeado para evitar conflito se necessário)
function CreditCardIcon({ size, className }: { size: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  );
}

export default Savings;
