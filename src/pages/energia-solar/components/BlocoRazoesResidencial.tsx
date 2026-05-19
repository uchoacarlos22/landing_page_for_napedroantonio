import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import resAereo from "../../../assets/solar/images/portfolio/all-services.jpeg";

const Section = styled.section`
  padding: 100px 20px;
  background: white;
  color: #0f172a;
`;

const Container = styled.div`
  max-width: 1200px;
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

const Content = styled.div``;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 20px;
  color: #0f172a;
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 40px;
`;

const ReasonsGrid = styled.div`
  display: grid;
  gap: 20px;
`;

const ReasonCard = styled(motion.div)`
  padding: 25px;
  background: #f8fafc;
  border-radius: 15px;
  border: 1px solid #e2e8f0;
  display: flex;
  gap: 20px;
  align-items: flex-start;
  text-align: left;
`;

const Icon = styled.div`
  background: #22c55e;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: 1.2rem;
`;

const ReasonText = styled.div`
  h4 {
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 5px;
    color: #0f172a;
  }
  p {
    font-size: 0.95rem;
    color: #64748b;
  }
`;

const ImageWrapper = styled.div`
  position: relative;

  img {
    width: 100%;
    border-radius: 30px;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  }

  &::after {
    content: "";
    position: absolute;
    top: -20px;
    right: -20px;
    width: 100px;
    height: 100px;
    background: #22c55e;
    border-radius: 20px;
    z-index: -1;
  }
`;

const BlocoRazoesResidencial: React.FC = () => {
  return (
    <Section id="razoes">
      <Container>
        <ImageWrapper>
          <img src={resAereo} alt="Instalação Solar Residencial NPA" />
        </ImageWrapper>

        <Content>
          <Title>Por que investir em Solar na sua casa?</Title>
          <Description>
            Mais que economia, é sobre liberdade energética e valorização do seu
            maior patrimônio.
          </Description>

          <ReasonsGrid>
            <ReasonCard
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Icon>📈</Icon>
              <ReasonText>
                <h4>Valorização Imediata</h4>
                <p>
                  Imóveis com energia solar valorizam de 10% a 15% no mercado
                  imobiliário.
                </p>
              </ReasonText>
            </ReasonCard>

            <ReasonCard
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Icon>🎨</Icon>
              <ReasonText>
                <h4>Estética Integrada</h4>
                <p>
                  Nossos projetos prezam pela harmonia arquitetônica, sem fios
                  expostos ou gambiarras.
                </p>
              </ReasonText>
            </ReasonCard>

            <ReasonCard
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Icon>🛡️</Icon>
              <ReasonText>
                <h4>Autonomia Energética</h4>
                <p>
                  Proteja sua família contra os aumentos abusivos das bandeiras
                  tarifárias.
                </p>
              </ReasonText>
            </ReasonCard>
          </ReasonsGrid>
        </Content>
      </Container>
    </Section>
  );
};

export default BlocoRazoesResidencial;
