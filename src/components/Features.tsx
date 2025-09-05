// src/components/Features.tsx
import React from "react";
import styled from "styled-components";
import { breakpoints, colors } from "../theme";
import icon1 from "../assets/images/hero-icon-1.png.svg";
import icon2 from "../assets/images/hero-icon-2.png.svg";
import icon3 from "../assets/images/hero-icon-3.png.svg";
import icon4 from "../assets/images/hero-icon-4.png.svg";

const StyledFeaturesContainer = styled.div`
  background-color: ${colors.primary};
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: row;
  text-align: center;
  gap: 1rem;
  border: 3px solid ${colors.secondary};
  left: 35%;

  /* tablets: duas colunas */
  @media (min-width: ${breakpoints.tabletMin}) and (max-width: ${breakpoints.tabletMax}) {
    justify-content: space-between;
    padding: 1.25rem 0.75rem;
  }

  /* mobile: ocultar completamente */
  @media (max-width: ${breakpoints.mobileMax}) {
    display: none;
  }
`;

const StyledFeatureItem = styled.div`
  flex: 1;
  padding: 0.5rem;

  @media (min-width: ${breakpoints.tabletMin}) and (max-width: ${breakpoints.tabletMax}) {
    flex: 0 1 calc(50% - 1rem);
    margin-bottom: 1rem;
  }
`;

const StyledFeatureIcon = styled.img`
  display: block;
  margin: 0 auto 0.75rem;
  height: 2rem;
  width: auto;

  @media (min-width: ${breakpoints.tabletMin}) and (max-width: ${breakpoints.tabletMax}) {
    height: 2.25rem;
    margin-bottom: 0.5rem;
  }
`;

const StyledFeatureTitle = styled.h3`
  color: ${colors.background};
  font-size: 0.9rem;
  font-weight: 400;
  margin-bottom: 0.25rem;
  font-family: sans-serif;

  @media (min-width: ${breakpoints.tabletMin}) and (max-width: ${breakpoints.tabletMax}) {
    font-size: 1rem;
  }
`;

const StyledFeatureDescription = styled.p`
  color: #ccc;
  font-size: 0.7rem;
  font-family: sans-serif;
  line-height: 1.4;

  @media (min-width: ${breakpoints.tabletMin}) and (max-width: ${breakpoints.tabletMax}) {
    font-size: 0.75rem;
  }
`;

const Features: React.FC = () => (
  <StyledFeaturesContainer>
    <StyledFeatureItem>
      <StyledFeatureIcon src={icon1} alt="Professional Builders" />
      <StyledFeatureTitle>CONSTRUTORES PROFISSIONAIS</StyledFeatureTitle>
      <StyledFeatureDescription>
        Empregamos artesãos qualificados com anos de experiência.
      </StyledFeatureDescription>
    </StyledFeatureItem>

    <StyledFeatureItem>
      <StyledFeatureIcon src={icon2} alt="Passionate About Work" />
      <StyledFeatureTitle>APAIXONADOS PELO TRABALHO</StyledFeatureTitle>
      <StyledFeatureDescription>
        Somos apaixonados pelo que fazemos e temos orgulho do nosso trabalho.
      </StyledFeatureDescription>
    </StyledFeatureItem>

    <StyledFeatureItem>
      <StyledFeatureIcon src={icon3} alt="High Quality Guarantee" />
      <StyledFeatureTitle>GARANTIA DE ALTA QUALIDADE</StyledFeatureTitle>
      <StyledFeatureDescription>
        Garantimos mão de obra e materiais de alta qualidade.
      </StyledFeatureDescription>
    </StyledFeatureItem>

    <StyledFeatureItem>
      <StyledFeatureIcon src={icon4} alt="Great Support Team" />
      <StyledFeatureTitle>ÓTIMA EQUIPE DE SUPORTE</StyledFeatureTitle>
      <StyledFeatureDescription>
        Nossa equipe está sempre disponível para fornecer suporte e responder
        perguntas.
      </StyledFeatureDescription>
    </StyledFeatureItem>
  </StyledFeaturesContainer>
);

export default Features;
