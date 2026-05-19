import React from "react";
import styled from "styled-components";
import PartnerImage from "../../../assets/solar/images/partner-details/partner-perfil.webp";

const Section = styled.section`
  padding: 100px 20px;
  background: #fdfdfd;
  color: #0f172a;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Badge = styled.div`
  display: inline-block;
  padding: 8px 16px;
  background: #dcfce7;
  color: #166534;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 700;
  margin-bottom: 20px;
`;

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 80px;
  align-items: center;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const TextContent = styled.div``;

const Title = styled.h2`
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 25px;
  line-height: 1.1;
  color: #0f172a;

  span {
    color: #22c55e;
  }
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin-top: 40px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const InfoItem = styled.div`
  h4 {
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  p {
    font-size: 0.95rem;
    color: #64748b;
    line-height: 1.5;
  }
`;

const ImageSide = styled.div`
  position: relative;
  width: 100%;
  max-width: 350px;
  aspect-ratio: 1 / 1;
  margin: 0 auto;
  border-radius: 50%;
  border: 4px solid #fdfdfd;
  box-shadow: 15px 15px 0px #22c55e;
  background-color: #f1f5f9;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    display: block;
  }
`;

const WhyNPA: React.FC = () => {
  return (
    <Section id="especialista">
      <Container>
        <MainGrid>
          <TextContent>
            <Badge>Autoridade Técnica</Badge>
            <Title>
              Engenharia de precisão com <span>21 anos de experiência</span>
            </Title>
            <p
              style={{
                fontSize: "1.1rem",
                color: "#475569",
                marginBottom: "30px",
              }}
            >
              Diferente de empresas de "venda de painéis", a NPA trabalha com
              engenharia consultiva liderada por <b>Edu Santos</b>, especialista
              formado na Unicamp com passagens pelas maiores concessionárias do
              país.
            </p>

            <InfoGrid>
              <InfoItem>
                <h4>🎓 Expertise</h4>
                <p>
                  Formação Unicamp e especialização alemã (Schwäbish-hall).
                  Know-how técnico de alto nível.
                </p>
              </InfoItem>
              <InfoItem>
                <h4>⚡ Concessionárias</h4>
                <p>
                  Ex-Eletropaulo, Energisa e Grupo Rede. Projetos aprovados de
                  primeira, sem burocracia.
                </p>
              </InfoItem>
              <InfoItem>
                <h4>🛡️ Segurança</h4>
                <p>
                  Técnico em Segurança do Trabalho e Meio Ambiente. Instalações
                  100% em conformidade.
                </p>
              </InfoItem>
              <InfoItem>
                <h4>🚀 Resultados</h4>
                <p>
                  Mais de 1.400 módulos instalados e 100% de satisfação em
                  pós-venda.
                </p>
              </InfoItem>
            </InfoGrid>
          </TextContent>

          <ImageSide>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <img src={PartnerImage} alt="" />
            </div>
          </ImageSide>
        </MainGrid>
      </Container>
    </Section>
  );
};

export default WhyNPA;
