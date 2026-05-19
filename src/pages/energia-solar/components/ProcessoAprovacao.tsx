import React from 'react';
import styled from 'styled-components';
import { colors, breakpoints } from '../../../theme';
import { Users, FileCheck, Hammer, Sun } from 'lucide-react';

const Section = styled.section`
  padding: 100px 20px;
  background: white;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const FlowGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: ${breakpoints.tabletMax}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }

  @media (max-width: ${breakpoints.mobileMax}) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const StepItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  
  @media (min-width: 900px) {
    &::after {
      content: '';
      position: absolute;
      top: 50px;
      right: -50%;
      width: 100%;
      height: 2px;
      background: dashed 2px ${colors.secondary}66;
      z-index: 0;
    }
    
    &:last-child::after { display: none; }
  }
`;

const IconCircle = styled.div`
  width: 100px;
  height: 100px;
  background: ${colors.background};
  border: 4px solid ${colors.secondary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.secondary};
  margin-bottom: 24px;
  z-index: 1;
  background: white;
  box-shadow: 0 10px 20px rgba(0,0,0,0.05);
`;

const StepTitle = styled.h3`
  font-size: 1.3rem;
  color: ${colors.primary};
  margin-bottom: 12px;
`;

const StepDesc = styled.p`
  color: #64748b;
  line-height: 1.5;
`;

const ProcessoAprovacao: React.FC = () => {
  return (
    <Section>
      <SectionHeader>
        <span style={{ color: colors.secondary, fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem', display: 'block', marginBottom: '16px' }}>
          Processo Descomplicado
        </span>
        <h2 style={{ fontSize: '2.5rem', color: colors.primary, marginBottom: '16px' }}>Jornada do Condomínio</h2>
        <p style={{ color: '#64748b', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>
          Do primeiro contato até a economia na fatura, cuidamos de toda a burocracia para síndicos e administradoras.
        </p>
      </SectionHeader>

      <FlowGrid>
        <StepItem>
          <IconCircle><Users size={40} /></IconCircle>
          <StepTitle>1. Aprovação e Assembleia</StepTitle>
          <StepDesc>Apoiamos o síndico na apresentação do ROI em assembleia, fornecendo laudos e materiais explicativos.</StepDesc>
        </StepItem>
        <StepItem>
          <IconCircle><FileCheck size={40} /></IconCircle>
          <StepTitle>2. Parecer da Concessionária</StepTitle>
          <StepDesc>Elaboração do projeto de engenharia e gestão de toda a documentação junto à distribuidora de energia.</StepDesc>
        </StepItem>
        <StepItem>
          <IconCircle><Hammer size={40} /></IconCircle>
          <StepTitle>3. Instalação Segura</StepTitle>
          <StepDesc>Obra rápida, áreas isoladas e seguindo a risca as normas NR10 e NR35 para segurança dos moradores.</StepDesc>
        </StepItem>
        <StepItem>
          <IconCircle><Sun size={40} /></IconCircle>
          <StepTitle>4. Rateio de Créditos</StepTitle>
          <StepDesc>Configuração da geração compartilhada enviando os créditos para as faturas escolhidas (área comum ou condôminos).</StepDesc>
        </StepItem>
      </FlowGrid>
    </Section>
  );
};

export default ProcessoAprovacao;
