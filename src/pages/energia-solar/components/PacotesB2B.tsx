
import styled from 'styled-components';
import { Check, ArrowRight } from 'lucide-react';

const PromocoesSection = styled.section`
  padding: 100px 20px;
  background: white;
  position: relative;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const HeaderContainer = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 60px;
`;

const Badge = styled.span`
  background: #f1f5f9;
  color: #0f172a;
  padding: 8px 16px;
  border-radius: 50px;
  font-weight: 800;
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 2px;
  margin-bottom: 24px;
  display: inline-block;
  border: 1px solid #e2e8f0;
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: 900;
  color: #0f172a;
  line-height: 1.1;
  margin-bottom: 24px;
  
  span {
    color: #1e40af;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const Card = styled.div<{ $highlight?: boolean }>`
  position: relative;
  background: ${p => p.$highlight ? '#0f172a' : 'white'};
  border: ${p => p.$highlight ? 'none' : '2px solid #e2e8f0'};
  border-radius: 24px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  overflow: hidden;

  ${p => p.$highlight && 'box-shadow: 0 20px 40px rgba(15, 23, 42, 0.15); transform: translateY(-10px);'}

  &:hover {
    transform: translateY(-10px);
    border-color: ${p => p.$highlight ? 'none' : '#cbd5e1'};
  }
`;

const CardHeader = styled.div<{ $highlight?: boolean }>`
  border-bottom: 1px solid ${p => p.$highlight ? 'rgba(255,255,255,0.1)' : '#e2e8f0'};
  padding-bottom: 24px;
  margin-bottom: 24px;
`;

const PlanName = styled.h3<{ $highlight?: boolean }>`
  font-size: 1.5rem;
  color: ${p => p.$highlight ? 'white' : '#0f172a'};
  margin-bottom: 12px;
`;

const PlanSize = styled.div<{ $highlight?: boolean }>`
  font-size: 2.5rem;
  font-weight: 900;
  color: ${p => p.$highlight ? 'white' : '#0f172a'};
  display: flex;
  align-items: baseline;
  gap: 8px;

  span {
    font-size: 1.2rem;
    color: ${p => p.$highlight ? '#94a3b8' : '#64748b'};
    font-weight: 600;
  }
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 40px 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
`;

const Feature = styled.li<{ $highlight?: boolean }>`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  color: ${p => p.$highlight ? '#cbd5e1' : '#475569'};
  font-size: 1rem;
  line-height: 1.5;

  svg {
    color: ${p => p.$highlight ? '#1e40af' : '#22c55e'};
    flex-shrink: 0;
    margin-top: 2px;
  }
`;

const ActionButton = styled.a<{ $highlight?: boolean }>`
  background: ${p => p.$highlight ? '#1e40af' : '#f1f5f9'};
  color: ${p => p.$highlight ? 'white' : '#0f172a'};
  padding: 16px;
  border-radius: 12px;
  text-align: center;
  font-weight: 700;
  font-size: 1.1rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.2s;

  &:hover {
    background: ${p => p.$highlight ? '#1e3a8a' : '#e2e8f0'};
    transform: translateY(-2px);
  }
`;

export const PacotesB2B = () => {
  return (
    <PromocoesSection id="pacotes">
      <ContentWrapper>
        <HeaderContainer>
          <Badge>Tamanho Flexível</Badge>
          <Title>Soluções para o <span>Seu Escopo</span></Title>
          <p style={{ color: '#475569', fontSize: '1.2rem', lineHeight: '1.6' }}>
            Escalabilidade total. Do pequeno comércio às grandes indústrias, dimensionamos o 
            sistema exato para cobrir a sua curva de carga.
          </p>
        </HeaderContainer>

        <Grid>
          <Card>
            <CardHeader>
              <PlanName>Empresarial Start</PlanName>
              <PlanSize>30 kWp <span>/ Sist.</span></PlanSize>
            </CardHeader>
            <FeatureList>
              <Feature><Check size={20} /> Ideal para: Padarias, Farmácias, Clínicas.</Feature>
              <Feature><Check size={20} /> Geração Estimada: ~3.600 kWh/mês</Feature>
              <Feature><Check size={20} /> Inversores string WEG / Fronius</Feature>
              <Feature><Check size={20} /> Painéis Tier 1 Full Black</Feature>
            </FeatureList>
            <ActionButton href="https://wa.me/5511967796576?text=Gostaria%20de%20um%20orçamento%20para%20o%20sistema%20B2B%20Start%20(30kWp)." target="_blank">
              Consultar Valores
            </ActionButton>
          </Card>

          <Card $highlight>
            <CardHeader $highlight>
              <PlanName $highlight>Indústria Padrão</PlanName>
              <PlanSize $highlight>50 kWp <span>/ Sist.</span></PlanSize>
            </CardHeader>
            <FeatureList>
              <Feature $highlight><Check size={20} /> Ideal para: Supermercados, Pequenas Indústrias, Galpões.</Feature>
              <Feature $highlight><Check size={20} /> Geração Estimada: ~6.000 kWh/mês</Feature>
              <Feature $highlight><Check size={20} /> Projeto de Engenharia Avançado</Feature>
              <Feature $highlight><Check size={20} /> Acompanhamento de Geração via App Premium</Feature>
            </FeatureList>
            <ActionButton $highlight href="https://wa.me/5511967796576?text=Gostaria%20de%20um%20orçamento%20para%20o%20sistema%20Indústria%20Padrão%20(50kWp)." target="_blank">
              Solicitar Orçamento <ArrowRight size={20} />
            </ActionButton>
          </Card>

          <Card>
            <CardHeader>
              <PlanName>Grande Opeção (Mercado Livre)</PlanName>
              <PlanSize>Custom <span>/ MWp</span></PlanSize>
            </CardHeader>
            <FeatureList>
              <Feature><Check size={20} /> Usinas de Solo, Carports Agrícolas ou Mega Telhados.</Feature>
              <Feature><Check size={20} /> Análise de migração para o Mercado Livre de Energia</Feature>
              <Feature><Check size={20} /> Subestações e aprovação de grande porte na concessionária.</Feature>
              <Feature><Check size={20} /> Financiamento Estruturado (BNDES / FCO)</Feature>
            </FeatureList>
            <ActionButton href="https://wa.me/5511967796576?text=Olá!%20Represento%20uma%20grande%20indústria%20e%20busco%20projetos%20acima%20de%20100kWp." target="_blank">
              Falar com Engenheiro
            </ActionButton>
          </Card>
        </Grid>
      </ContentWrapper>
    </PromocoesSection>
  );
};
