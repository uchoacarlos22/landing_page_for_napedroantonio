import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  padding: 100px 20px;
  background: #f1f5f9;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const Badge = styled.span`
  background: #0ea5e9;
  color: white;
  padding: 6px 14px;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 15px;
  display: inline-block;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  color: #0f172a;
  margin-top: 10px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
`;

const Card = styled(motion.div)`
  background: white;
  padding: 40px;
  border-radius: 24px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  border: 1px solid #e2e8f0;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Icon = styled.div`
  width: 50px;
  height: 50px;
  background: #0ea5e9;
  color: white;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
  font-size: 1.5rem;
`;

const CardTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 15px;
`;

const CardText = styled.p`
  color: #64748b;
  line-height: 1.6;
  font-size: 1rem;
`;

const BenefitsCondo: React.FC = () => {
  const benefits = [
    {
      icon: '📉',
      title: 'Redução do Rateio',
      text: 'O impacto na conta de luz das áreas comuns é imediato, permitindo reduzir o valor do boleto para todos os moradores ou evitar chamadas de capital.'
    },
    {
      icon: '🏆',
      title: 'Valorização Imobiliária',
      text: 'Apartamentos em condomínios sustentáveis e energeticamente eficientes são mais disputados e valem até 10% a mais no mercado.'
    },
    {
      icon: '🛡️',
      title: 'Gestão Inteligente',
      text: 'Monitoramento em tempo real da geração. Transparência total para prestação de contas em assembleias e para o conselho fiscal.'
    },
    {
      icon: '🌿',
      title: 'Legado ESG',
      text: 'Atraia investidores e valorize a marca do condomínio com um selo de sustentabilidade, reduzindo a pegada de carbono do edifício.'
    }
  ];

  return (
    <Section id="beneficios-condo">
      <Container>
        <Header>
          <Badge>Benefícios para o Síndico</Badge>
          <Title>Por que investir agora?</Title>
        </Header>
        <Grid>
          {benefits.map((b, i) => (
            <Card
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Icon>{b.icon}</Icon>
              <CardTitle>{b.title}</CardTitle>
              <CardText>{b.text}</CardText>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default BenefitsCondo;
