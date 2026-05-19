import React from 'react';
import styled from 'styled-components';
import { colors, breakpoints } from '../theme';
import { ClipboardList, PenTool, FileSignature, Pickaxe, Key } from 'lucide-react';

const ProcessSection = styled.section`
  padding: 100px 20px;
  background: #0f172a;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 80px;
`;

const TimelineContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 40px;
    height: 100%;
    width: 2px;
    background: ${colors.secondary}44;

    @media (max-width: ${breakpoints.mobileMax}) {
      left: 24px;
    }
  }
`;

const TimelineItem = styled.div`
  display: flex;
  gap: 30px;
  position: relative;
  
  @media (max-width: ${breakpoints.mobileMax}) {
    gap: 20px;
  }
`;

const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  background: #1e293b;
  border: 2px solid ${colors.secondary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.secondary};
  z-index: 1;
  flex-shrink: 0;
  box-shadow: 0 0 20px rgba(218, 165, 32, 0.2);

  @media (max-width: ${breakpoints.mobileMax}) {
    width: 50px;
    height: 50px;
  }
`;

const ContentWrapper = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 30px;
  border-radius: 16px;
  flex: 1;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: ${colors.secondary}55;
    transform: translateX(10px);
  }

  @media (max-width: ${breakpoints.mobileMax}) {
    padding: 20px;
  }
`;

const StepTitle = styled.h3`
  font-size: 1.5rem;
  color: white;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 12px;
  
  span {
    color: ${colors.secondary};
    font-size: 1rem;
    font-weight: 900;
  }
`;

const StepDesc = styled.p`
  color: #94a3b8;
  line-height: 1.6;
`;

const steps = [
  {
    title: 'Visita Técnica e Viabilidade',
    desc: 'Análise minuciosa do local, levantamento estrutural e entendimento profundo das necessidades e dores operacionais da sua empresa.',
    icon: <ClipboardList size={32} />
  },
  {
    title: 'Projeto Técnico e Engenharia de Valor',
    desc: 'Desenvolvimento do escopo detalhado buscando as soluções de melhor custo-benefício (Engenharia de Valor) e redução de OPEX/CAPEX.',
    icon: <PenTool size={32} />
  },
  {
    title: 'Aprovação e Contrato Centralizado',
    desc: 'Apresentação do cronograma militar e orçamento cravado. Sem aditivos surpresas e com total segurança jurídica para o contratante.',
    icon: <FileSignature size={32} />
  },
  {
    title: 'Execução e Gestão Rigorosa',
    desc: 'Mobilização rápida, supervisão constante (SST), compra inteligente de materiais e relatórios periódicos de avanço para a diretoria.',
    icon: <Pickaxe size={32} />
  },
  {
    title: 'Key Handover e Ativação',
    desc: 'Entrega da obra 100% testada e limpa (padrão white-glove), garantindo que sua operação decole no dia marcado.',
    icon: <Key size={32} />
  }
];

const ProcessoObra: React.FC = () => {
  return (
    <ProcessSection id="process">
      <SectionHeader>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '16px', color: 'white' }}>Engenharia de Ponta a Ponta</h2>
        <p style={{ color: '#94a3b8', fontSize: '1.2rem' }}>O método NPA de <span style={{color: colors.secondary}}>5 etapas</span> para uma obra corporativa sem surpresas.</p>
      </SectionHeader>
      
      <TimelineContainer>
        {steps.map((step, idx) => (
          <TimelineItem key={idx}>
            <IconWrapper>
              {step.icon}
            </IconWrapper>
            <ContentWrapper>
              <StepTitle><span>0{idx + 1}.</span> {step.title}</StepTitle>
              <StepDesc>{step.desc}</StepDesc>
            </ContentWrapper>
          </TimelineItem>
        ))}
      </TimelineContainer>
    </ProcessSection>
  );
};

export default ProcessoObra;
