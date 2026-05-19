import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  padding: 100px 20px;
  background: #020617;
  color: white;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 20px;
  background: linear-gradient(to right, #22c55e, #10b981);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #94a3b8;
  max-width: 700px;
  margin: 0 auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const CaseCard = styled(motion.div)`
  background: rgba(30, 41, 59, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;

  &:hover {
    border-color: #22c55e;
    transform: translateY(-10px);
    background: rgba(30, 41, 59, 0.8);
  }
`;

const IconWrapper = styled.div`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const CaseTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 15px;
  color: white;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: auto;
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const StatLabel = styled.span`
  font-size: 0.8rem;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const StatValue = styled.span`
  font-size: 1.1rem;
  font-weight: 700;
  color: #22c55e;
`;

const FooterNote = styled.p`
  margin-top: 25px;
  font-size: 0.85rem;
  color: #64748b;
  font-style: italic;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  padding-top: 15px;
`;

const cases = [
  {
    title: 'Hospital Central',
    icon: '🏥',
    modules: 180,
    savings: 'R$ 9.260',
    type: 'Saúde'
  },
  {
    title: 'Usina Fotovoltaica',
    icon: '⚡',
    modules: 144,
    savings: 'R$ 7.445',
    type: 'Energia'
  },
  {
    title: 'Restaurante Gourmet',
    icon: '🍽️',
    modules: 94,
    savings: 'R$ 5.400',
    type: 'Gastronomia'
  },
  {
    title: 'Creche Municipal',
    icon: '🏫',
    modules: 60,
    savings: 'R$ 3.640',
    type: 'Educação'
  },
  {
    title: 'Indústria Têxtil',
    icon: '🏭',
    modules: 78,
    savings: 'R$ 3.440',
    type: 'Indústria'
  },
  {
    title: 'Academia Fitness',
    icon: '💪',
    modules: 60,
    savings: 'R$ 2.400',
    type: 'Serviços'
  }
];

const CasesReais: React.FC = () => {
  return (
    <Section id="cases">
      <Container>
        <Header>
          <Title>Casos Reais de Sucesso</Title>
          <Subtitle>
            Performance comprovada em diferentes setores da economia, entregando ROI real e previsibilidade financeira.
          </Subtitle>
        </Header>

        <Grid>
          {cases.map((item, index) => (
            <CaseCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <IconWrapper>{item.icon}</IconWrapper>
              <CaseTitle>{item.title}</CaseTitle>
              <StatsGrid>
                <StatItem>
                  <StatLabel>Módulos</StatLabel>
                  <StatValue>{item.modules}</StatValue>
                </StatItem>
                <StatItem>
                  <StatLabel>Economia/mês</StatLabel>
                  <StatValue>{item.savings}</StatValue>
                </StatItem>
              </StatsGrid>
              <FooterNote>Instalação realizada por parceiro certificado NPA</FooterNote>
            </CaseCard>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default CasesReais;
