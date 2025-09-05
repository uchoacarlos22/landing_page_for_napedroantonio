import React from "react";
import styled from "styled-components";
import { breakpoints, colors } from "../theme"; // ajuste conforme o caminho real

const WelcomeContainer = styled.div.attrs(() => ({ id: 'about' }))`
  width: 72.5%;
  margin: 40px auto;
  align-content: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  background: ${colors.background};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  @media (max-width: ${breakpoints.tabletMax}) {
    grid-template-columns: 1fr;
    max-height: none;
    margin: 80px 20px;
    width: 92%;
  }

  @media (max-width: ${breakpoints.mobileMax}) {
    margin: 60px 15px;
    width: 92%;
  }
`;

const LeftSection = styled.div`
  background: ${colors.background};
  padding: 30px 0 20px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: ${breakpoints.tabletMax}) {
    padding: 40px 30px 20px;
  }

  @media (max-width: ${breakpoints.mobileMax}) {
    padding: 30px 20px 10px;
  }
`;

const WelcomeTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: ${colors.primary};
  margin-bottom: 30px;
  line-height: 1.2;

  @media (max-width: ${breakpoints.tabletMax}) {
    font-size: 2.2rem;
  }

  @media (max-width: ${breakpoints.mobileMax}) {
    font-size: 1.7rem;
  }
`;

const WorkerImage = styled.div`
  width: 100%;
  height: 300px;
  background: ${colors.border} url("/src/assets/images/about_image.png") center/cover
    no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  font-size: 1.1rem;

  @media (max-width: ${breakpoints.tabletMax}) {
    height: 250px;
  }

  @media (max-width: ${breakpoints.mobileMax}) {
    height: 200px;
  }
`;

const RightSection = styled.div`
  background: ${colors.primary};
  padding: 30px 20px;
  color: ${colors.background};
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: ${breakpoints.tabletMax}) {
    max-width: 92%;
    padding: 40px 30px;
  }

  @media (max-width: ${breakpoints.mobileMax}) {
    max-width: 92%;
    padding: 30px 20px;
  }
`;

const DescriptionText = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  margin-bottom: 40px;
  color: #ddd;

  @media (max-width: ${breakpoints.mobileMax}) {
    font-size: 0.9rem;
    margin-bottom: 30px;
  }
`;

const SignatureSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const SignatureName = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${colors.secondary};
  font-style: italic;
`;

const SignatureTitle = styled.div`
  font-size: 0.9rem;
  color: #ccc;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const AboutUs: React.FC = () => {
  return (
    <WelcomeContainer>
      <LeftSection>
        <WelcomeTitle>
          BEM VINDO A<br />
          NAPEDROANTONIO
        </WelcomeTitle>
        <WorkerImage />
      </LeftSection>

      <RightSection>
        <DescriptionText>
          Somos uma empresa de construção líder, dedicada a fornecer serviços de
          alta qualidade. Nossa equipe de profissionais experientes está
          comprometida em oferecer resultados excepcionais.
          <br />
          <br />
          Nós nos esforçamos para exceder as expectativas de nossos clientes
          através da inovação e excelência.
          <br />
          <br />
          Contate-nos hoje para saber mais sobre nossos serviços.
        </DescriptionText>

        <SignatureSection>
          <SignatureName>Antonio Almeida</SignatureName>
          <SignatureTitle>Mestre de Obras e Fundador</SignatureTitle>
        </SignatureSection>
      </RightSection>
    </WelcomeContainer>
  );
};

export default AboutUs;
