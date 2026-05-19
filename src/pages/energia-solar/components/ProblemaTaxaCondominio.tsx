import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  padding: 80px 20px;
  background: #0ea5e9; /* Sky Blue consistent with Condos */
  color: white;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const Visual = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PieContainer = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  position: relative;
  border: 4px solid rgba(255, 255, 255, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: conic-gradient(
      #ffcc00 0% 30%, 
      transparent 30% 100%
    );
    filter: drop-shadow(0 0 20px rgba(255, 204, 0, 0.5));
  }
`;

const PieInner = styled.div`
  width: 220px;
  height: 220px;
  background: #0ea5e9;
  border-radius: 50%;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 4px 10px rgba(0,0,0,0.1);
`;

const Percentage = styled.div`
  font-size: 3.5rem;
  font-weight: 900;
  line-height: 1;
`;

const Label = styled.div`
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  opacity: 0.9;
`;

const Content = styled.div``;

const Headline = styled.h2`
  font-size: 2.5rem;
  font-weight: 900;
  margin-bottom: 25px;
  line-height: 1.1;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  opacity: 0.9;
  line-height: 1.6;
  margin-bottom: 30px;
`;

const Highlight = styled.span`
  background: #ffcc00;
  color: #0c4a6e;
  padding: 2px 8px;
  border-radius: 4px;
  font-weight: 800;
`;

const ProblemaTaxaCondominio: React.FC = () => {
  return (
    <Section>
      <Container>
        <Visual>
          <PieContainer>
            <PieInner>
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
              >
                <Percentage>30%</Percentage>
                <Label>Da Taxa</Label>
              </motion.div>
            </PieInner>
          </PieContainer>
        </Visual>

        <Content>
          <Headline>O Inimigo Oculto da Taxa Condominial</Headline>
          <Paragraph>
            Em média, <Highlight>30% dos custos fixos</Highlight> de um condomínio são destinados à energia das áreas comuns. Elevadores, bombas e iluminação são os maiores vilões.
          </Paragraph>
          <Paragraph>
            Com a NPA Solar, eliminamos esse custo, permitindo a **redução real do boleto** dos moradores ou investimentos pesados em benfeitorias sem chamadas de capital.
          </Paragraph>
        </Content>
      </Container>
    </Section>
  );
};

export default ProblemaTaxaCondominio;
