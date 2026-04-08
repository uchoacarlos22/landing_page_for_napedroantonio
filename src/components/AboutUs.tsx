import React from "react";
import styled from "styled-components";
import { breakpoints, colors } from "../theme";
import aboutImage from "../assets/images/about_image.png";

const SectionWrapper = styled.div`
  background: ${colors.primary};
  padding: 60px 20px;
`;


const WelcomeContainer = styled.section.attrs(() => ({ id: "about" }))`
  width: 75%;
  margin: 60px auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: ${colors.primary};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  overflow: hidden;

  @media (max-width: ${breakpoints.tabletMax}) {
    grid-template-columns: 1fr;
    width: 90%;
    margin: 60px auto;
  }
`;

const LeftSection = styled.div`
  padding: 40px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;

  @media (max-width: ${breakpoints.mobileMax}) {
    padding: 30px 20px;
  }
`;

const WelcomeTitle = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  color: ${colors.primary};
  margin-bottom: 24px;
  line-height: 1.2;

  span {
    color: ${colors.secondary};
  }

  @media (max-width: ${breakpoints.tabletMax}) {
    font-size: 1.8rem;
  }

  @media (max-width: ${breakpoints.mobileMax}) {
    font-size: 1.5rem;
  }
`;

const WorkerImage = styled.img`
  width: 100%;
  height: 320px;
  object-fit: cover;
  border-radius: 4px;

  @media (max-width: ${breakpoints.tabletMax}) {
    height: 260px;
  }

  @media (max-width: ${breakpoints.mobileMax}) {
    height: 220px;
  }
`;

const RightSection = styled.div`
  background: ${colors.primary};
  color: ${colors.background};
  padding: 50px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: ${breakpoints.tabletMax}) {
    padding: 40px 30px;
  }

  @media (max-width: ${breakpoints.mobileMax}) {
    padding: 30px 20px;
  }
`;

const DescriptionText = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  margin-bottom: 40px;
  color: rgba(255, 255, 255, 0.9);
`;

const SignatureSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const SignatureName = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
  color: ${colors.secondary};
  font-style: italic;
`;

const SignatureTitle = styled.div`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const AboutUs: React.FC = () => {
  return (
    <SectionWrapper>
      <WelcomeContainer>
      <LeftSection>
        <WelcomeTitle>
          <span>Bem vindo ao </span>
          <br />
          NaPedroAntonio
          <br />
          Construções e Reformas
        </WelcomeTitle>
        <WorkerImage
          src={aboutImage}
          alt="Profissional da Pedro Antonio Construções em obra"
        />
      </LeftSection>

      <RightSection>
        <DescriptionText>
          Somos especializados em{" "}
          <strong>construção e reformas residenciais e comerciais</strong>,
          unindo experiência, qualidade e compromisso. Nossa missão é
          transformar projetos em realidade, com foco em{" "}
          <strong>excelência, prazo e satisfação do cliente</strong>.
          <br />
          <br />
          Com uma equipe qualificada e apaixonada pelo que faz, garantimos
          resultados que superam expectativas — do planejamento à entrega final.
        </DescriptionText>

        <SignatureSection>
          <SignatureName as="h3">Antonio Almeida</SignatureName>
          <SignatureTitle as="p">Mestre de Obras e Fundador</SignatureTitle>
        </SignatureSection>
      </RightSection>
      </WelcomeContainer>
    </SectionWrapper>
  );
};


export default AboutUs;
