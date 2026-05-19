import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Section = styled.section`
  padding: 100px 20px;
  background: #0f172a;
  color: white;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 70px;
`;

const Title = styled.h2`
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 20px;
  background: linear-gradient(to right, #60a5fa, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
`;

const Card = styled(motion.div)`
  background: rgba(30, 41, 59, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 40px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: #3b82f6;
  }
`;

const Icon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 25px;
`;

const CardTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 15px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 30px;
`;

const ListItem = styled.li`
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 12px;
  color: #94a3b8;
  font-size: 1rem;

  &::before {
    content: '✓';
    color: #3b82f6;
    font-weight: bold;
  }
`;

const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #3b82f6;
  color: white;
  padding: 10px 20px;
  border-radius: 12px;
  font-size: 0.85rem;
  font-weight: 700;
  text-decoration: none;
  margin-top: auto;
  transition: all 0.3s ease;

  &:hover {
    background: #2563eb;
    transform: scale(1.05);
  }
`;

const personas = [
  {
    title: 'Para sua Casa',
    icon: '🏠',
    features: [
      'Instalação de Wallbox residencial em SP com proteção contra surtos (DPS)',
      'Carregamento 3x mais rápido que tomadas comuns',
      'Design compacto e elegante para sua garagem',
      'Conforto de sair sempre com "tanque cheio"'
    ],
    waMsg: 'Olá! Gostaria de um orçamento para carregador EV residencial.'
  },
  {
    title: 'Para Condomínios',
    icon: '🏢',
    features: [
      'Gestão de energia e rateio automático de custos com portaria',
      'Instalação de eletroposto para condomínios em SP com controle RFID',
      'Balanceamento de carga (Load Shifting)',
      'Valorização do condomínio em até 10%'
    ],
    waMsg: 'Olá! Gostaria de saber mais sobre soluções de carregamento EV para condomínios.'
  },
  {
    title: 'Para Empresas/Frotas',
    icon: '🚚',
    features: [
      'Infraestrutura de recarga para frotas e empresas de alta capacidade',
      'Redução de custos operacionais de frota em 70%',
      'Monitoramento remoto em tempo real',
      'Selo de sustentabilidade para sua marca'
    ],
    waMsg: 'Olá! Gostaria de uma consultoria para infraestrutura de recarga de frota elétrica corporativa.'
  }
];

const EVPersonas: React.FC = () => {
  const WA_BASE = "https://wa.me/5511967796576";

  return (
    <Section id="solucoes">
      <Container>
        <Header>
          <Title>Soluções em Recarga para cada necessidade</Title>
        </Header>

        <Grid>
          {personas.map((p, index) => (
            <Card
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              <Icon>{p.icon}</Icon>
              <CardTitle>{p.title}</CardTitle>
              <List>
                {p.features.map((f, i) => (
                  <ListItem key={i}>{f}</ListItem>
                ))}
              </List>
              <CTAButton 
                href={`${WA_BASE}?text=${encodeURIComponent(p.waMsg)}`}
                target="_blank"
              >
                Solicitar Orçamento <ArrowRight size={16} />
              </CTAButton>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default EVPersonas;
