import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../theme';

const Section = styled.section`
  padding: 100px 20px;
  background: white;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const TableContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  overflow-x: auto;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);

  th, td {
    padding: 20px;
    text-align: left;
    border-bottom: 1px solid #f1f5f9;
  }

  th {
    background: ${colors.primary};
    color: white;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 0.9rem;
    letter-spacing: 1px;
  }

  tr:last-child td {
    border-bottom: none;
  }

  tr:hover td {
    background: #f8fafc;
  }

  td {
    color: #475569;
    font-size: 1rem;
    line-height: 1.5;
  }

  td:first-child {
    font-weight: 700;
    color: ${colors.primary};
    width: 25%;
  }

  th:last-child, td:last-child {
    background: ${colors.secondary}11;
    border-left: 2px solid ${colors.secondary};
  }
  
  tr:hover td:last-child {
    background: ${colors.secondary}22;
  }
`;

const EVTable: React.FC = () => {
  return (
    <Section>
      <SectionHeader>
        <span style={{ color: colors.secondary, fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem', display: 'block', marginBottom: '16px' }}>
          Especificações Técnicas
        </span>
        <h2 style={{ fontSize: '2.5rem', color: colors.primary, marginBottom: '16px' }}>Tipos de Carregamento</h2>
        <p style={{ color: '#64748b', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>
          Entenda as diferenças entre as tecnologias de carregamento e encontre a ideal para seu projeto.
        </p>
      </SectionHeader>

      <TableContainer>
        <StyledTable>
          <thead>
            <tr>
              <th>Característica</th>
              <th>AC Nível 1 (Emergência)</th>
              <th>AC Nível 2 (Wallbox)</th>
              <th>DC Fast Charge (Ultra-rápido)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Aplicação Principal</td>
              <td>Doméstico (Tomada Padrão)</td>
              <td>Residências, Condomínios e Empresas</td>
              <td>Rodovias, Frotas Pesadas e Postos</td>
            </tr>
            <tr>
              <td>Potência Típica</td>
              <td>Até 1.4 kW a 1.9 kW</td>
              <td>De 7 kW a 22 kW</td>
              <td>De 50 kW a 350+ kW</td>
            </tr>
            <tr>
              <td>Tempo de Recarga (0-80%)</td>
              <td>20 a 40 horas</td>
              <td>4 a 8 horas</td>
              <td>15 a 45 minutos</td>
            </tr>
            <tr>
              <td>Corrente / Tensão</td>
              <td>AC Corrente Alternada (120V/220V)</td>
              <td>AC Corrente Alternada (220V/380V)</td>
              <td>DC Corrente Contínua (Alta Tensão)</td>
            </tr>
            <tr>
              <td>Complexidade de Instalação</td>
              <td>Baixa (Plug and Play)</td>
              <td>Média (Requer adequação do quadro)</td>
              <td>Alta (Projeto de engenharia dedicado)</td>
            </tr>
            <tr>
              <td>Recomendação NPA</td>
              <td>Apenas para usos pontuais.</td>
              <td>O equilíbrio ideal para o dia a dia.</td>
              <td>O padrão-ouro para frotas e logística.</td>
            </tr>
          </tbody>
        </StyledTable>
      </TableContainer>
    </Section>
  );
};

export default EVTable;
