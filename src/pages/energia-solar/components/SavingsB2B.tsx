import { useState } from 'react';
import styled from 'styled-components';
import { Calculator, TrendingDown, PiggyBank, Calendar, ArrowRight } from 'lucide-react';

const SavingsSection = styled.section`
  padding: 100px 20px;
  background: white;
  position: relative;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 10;
`;

const HeaderContainer = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 60px;
`;

const Subtitle = styled.span`
  color: #1e293b;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.9rem;
  display: block;
  margin-bottom: 16px;
`;

const Title = styled.h2`
  font-size: 2.8rem;
  font-weight: 900;
  color: #0f172a;
  line-height: 1.2;
  margin-bottom: 24px;
`;

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  background: #f8fafc;
  border-radius: 32px;
  padding: 60px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.05);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 30px;
  }
`;

const ControlPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Label = styled.label`
  font-size: 1.1rem;
  font-weight: 700;
  color: #334155;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SliderValue = styled.span`
  color: #1e40af;
  font-size: 1.5rem;
  font-weight: 900;
`;

const Slider = styled.input`
  width: 100%;
  height: 8px;
  background: #cbd5e1;
  border-radius: 4px;
  outline: none;
  -webkit-appearance: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 28px;
    height: 28px;
    background: #1e40af;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 4px 10px rgba(30, 64, 175, 0.4);
    transition: transform 0.1s;
  }

  &::-webkit-slider-thumb:hover {
    transform: scale(1.1);
  }
`;

const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const ResultCard = styled.div<{ $highlight?: boolean }>`
  background: ${p => p.$highlight ? 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)' : 'white'};
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.03);
  display: flex;
  flex-direction: column;
  gap: 12px;
  border: ${p => p.$highlight ? 'none' : '1px solid #e2e8f0'};

  ${p => p.$highlight && 'grid-column: 1 / -1;'}
  
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
`;

const ResultTitle = styled.div<{ $highlight?: boolean }>`
  color: ${p => p.$highlight ? '#bfdbfe' : '#64748b'};
  font-size: 0.95rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ResultValue = styled.div<{ $highlight?: boolean }>`
  color: ${p => p.$highlight ? 'white' : '#0f172a'};
  font-size: ${p => p.$highlight ? '3rem' : '2rem'};
  font-weight: 900;
`;

const FormatCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(value);
};

export const SavingsB2B = () => {
  const [contaMensal, setContaMensal] = useState(15000);

  // Parâmetros (estimativas simplificadas)
  const economiaMensal = contaMensal * 0.95;
  const economiaAnual = economiaMensal * 12;
  
  // Payback estimado inversamente proporcional ao valor (ganho de escala)
  const paybackMeses = contaMensal > 50000 ? 36 : (contaMensal > 10000 ? 42 : 48);

  return (
    <SavingsSection id="simulador">
      <ContentWrapper>
        <HeaderContainer>
          <Subtitle>Calculadora P&L Solar</Subtitle>
          <Title>Impacto Direto no Fluxo de Caixa da sua Empresa</Title>
          <p style={{ color: '#475569', fontSize: '1.2rem', lineHeight: '1.6' }}>
            Descubra o potencial de redução do seu OPEX e o retorno sobre o investimento (ROI) 
            ao gerar sua própria energia.
          </p>
        </HeaderContainer>

        <MainGrid>
          <ControlPanel>
            <div style={{ background: 'white', padding: '30px', borderRadius: '20px', border: '1px solid #e2e8f0' }}>
              <InputGroup>
                <Label>
                  Qual seu gasto médio mensal? (Alta/Baixa Tensão)
                  <SliderValue>{FormatCurrency(contaMensal)}</SliderValue>
                </Label>
                <Slider 
                  type="range" 
                  min="2000" 
                  max="150000" 
                  step="1000"
                  value={contaMensal}
                  onChange={(e) => setContaMensal(Number(e.target.value))}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#94a3b8', fontSize: '0.85rem', marginTop: '4px', fontWeight: 'bold' }}>
                  <span>R$ 2k</span>
                  <span>R$ 150k+</span>
                </div>
              </InputGroup>
            </div>
            
            <div style={{ background: '#f1f5f9', padding: '24px', borderRadius: '16px' }}>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#334155', marginBottom: '12px', fontWeight: '800' }}>
                <Calculator size={20} /> Vantagens Tributárias (Lucro Real)
              </h4>
              <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Além de zerar a conta de luz, o investimento em usinas fotovoltaicas pode permitir a depreciação acelerada, abatendo <strong>IRPJ e CSLL</strong> nos primeiros anos.
              </p>
            </div>
          </ControlPanel>

          <ResultsGrid>
            <ResultCard $highlight>
              <ResultTitle $highlight><TrendingDown size={20} /> Impacto no P&L (1º Ano)</ResultTitle>
              <ResultValue $highlight>{FormatCurrency(economiaAnual)}</ResultValue>
              <p style={{ color: '#93c5fd', fontSize: '0.9rem' }}>Aumento direto no seu lucro líquido (EBITDA), livre de taxações, anulando o pagamento fixo mensal.</p>
            </ResultCard>

            <ResultCard>
              <ResultTitle><Calendar size={20} /> Payback Estimado</ResultTitle>
              <ResultValue>{paybackMeses} <span style={{fontSize: '1rem', color: '#64748b'}}>meses</span></ResultValue>
            </ResultCard>

            <ResultCard>
              <ResultTitle><PiggyBank size={20} /> TIR Estimada</ResultTitle>
              <ResultValue>28 <span style={{fontSize: '1rem', color: '#64748b'}}>% a.a.</span></ResultValue>
            </ResultCard>
            
            <a 
              href={`https://wa.me/5511967796576?text=Olá!%20Fiz%20uma%20simulação%20B2B%20(conta%20de%20${FormatCurrency(contaMensal)})%20e%20gostaria%20da%20análise%20oficial.`}
              target="_blank"
              style={{ gridColumn: '1 / -1', background: '#0f172a', color: 'white', padding: '20px', borderRadius: '16px', textAlign: 'center', fontWeight: 'bold', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}
            >
              Receber Análise de Viabilidade Oficial <ArrowRight size={20} />
            </a>
          </ResultsGrid>
        </MainGrid>
      </ContentWrapper>
    </SavingsSection>
  );
};
