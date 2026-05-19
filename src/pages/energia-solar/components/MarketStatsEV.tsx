import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  padding: 80px 20px;
  background: #020617;
  color: white;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
`;

const StatCard = styled(motion.div)`
  text-align: center;
  padding: 40px;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.05);
`;

const Value = styled.div`
  font-size: 3.5rem;
  font-weight: 900;
  color: #3b82f6;
  margin-bottom: 10px;
  line-height: 1;
`;

const Label = styled.div`
  font-size: 1.1rem;
  font-weight: 700;
  color: white;
  margin-bottom: 8px;
`;

const Desc = styled.div`
  font-size: 0.9rem;
  color: #94a3b8;
`;

const MarketStatsEV: React.FC = () => {
  return (
    <Section>
      <Container>
        <StatsGrid>
          <StatCard
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Value>+90%</Value>
            <Label>Crescimento</Label>
            <Desc>Aumento anual na procura por soluções de recarga (Brasil).</Desc>
          </StatCard>

          <StatCard
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Value>70%</Value>
            <Label>Economia</Label>
            <Desc>Redução no custo por km rodado vs combustíveis fósseis.</Desc>
          </StatCard>

          <StatCard
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Value>2-3</Value>
            <Label>Anos de Payback</Label>
            <Desc>Retorno do investimento acelerado pela alta do combustível.</Desc>
          </StatCard>

          <StatCard
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Value>100%</Value>
            <Label>Compatível</Label>
            <Desc>Integração nativa com sistemas solares NPA.</Desc>
          </StatCard>
        </StatsGrid>
      </Container>
    </Section>
  );
};

export default MarketStatsEV;
