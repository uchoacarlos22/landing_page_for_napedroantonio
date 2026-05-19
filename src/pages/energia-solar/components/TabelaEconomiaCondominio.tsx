import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  padding: 80px 20px;
  background: white;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2.2rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 50px;
  color: #0f172a;
`;

const TableContainer = styled.div`
  overflow-x: auto;
  background: #f8fafc;
  border-radius: 24px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
`;

const Th = styled.th`
  padding: 20px 24px;
  background: #f1f5f9;
  font-size: 0.85rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #64748b;
  border-bottom: 2px solid #e2e8f0;
`;

const Td = styled.td`
  padding: 20px 24px;
  font-size: 1rem;
  color: #0f172a;
  border-bottom: 1px solid #e2e8f0;
  font-weight: 500;
`;

const Highlight = styled.span`
  color: #0ea5e9;
  font-weight: 800;
`;

const TabelaEconomiaCondominio: React.FC = () => {
  const cases = [
    { size: 'Pequeno (Até 20 unidades)', area: 'Salão, Portaria, Elevador', current: 'R$ 2.400', new: 'R$ 150', savings: 'R$ 2.250' },
    { size: 'Médio (20 a 60 unidades)', area: 'Áreas Comuns + Lazer', current: 'R$ 5.800', new: 'R$ 320', savings: 'R$ 5.480' },
    { size: 'Grande (60+ unidades)', area: 'Full Lazer + Aspiração/Bombas', current: 'R$ 12.500', new: 'R$ 750', savings: 'R$ 11.750' },
  ];

  return (
    <Section>
      <Container>
        <Title>Potencial de Economia Mensal</Title>
        <TableContainer>
          <Table>
            <thead>
              <tr>
                <Th>Perfil do Condomínio</Th>
                <Th>Cobertura</Th>
                <Th>Gasto Atual (Estimado)</Th>
                <Th>Fatura com Solar</Th>
                <Th>Economia Mensal</Th>
              </tr>
            </thead>
            <tbody>
              {cases.map((c, i) => (
                <motion.tr 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Td>{c.size}</Td>
                  <Td>{c.area}</Td>
                  <Td>{c.current}</Td>
                  <Td>{c.new}</Td>
                  <Td><Highlight>{c.savings}</Highlight></Td>
                </motion.tr>
              ))}
            </tbody>
          </Table>
        </TableContainer>
      </Container>
    </Section>
  );
};

export default TabelaEconomiaCondominio;
