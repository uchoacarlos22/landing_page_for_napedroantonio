import React from "react";
import styled from "styled-components";
import { breakpoints, colors } from "../theme";
import icon1 from "../assets/images/hero-icon-1.png.svg";
import icon2 from "../assets/images/hero-icon-2.png.svg";
import icon3 from "../assets/images/hero-icon-3.png.svg";
import icon4 from "../assets/images/hero-icon-4.png.svg";

const StyledFeaturesSection = styled.section`
  background-color: ${colors.primary};
  border: 3px solid ${colors.secondary};
  padding: 1rem; /* Aumentado o padding para melhor espaçamento */
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-wrap: wrap;
  gap: 1.5rem; /* Reduzido o gap para otimizar espaço */
  text-align: center;
  position: relative;
  z-index: 5;

  @media (max-width: ${breakpoints.mobileMax}) {
    display: none;
  }

  @media (min-width: ${breakpoints.tabletMin}) and (max-width: ${breakpoints.tabletMax}) {
    padding: 1.5rem 1rem; /* Ajustado para tablets */
    gap: 1rem; /* Ajustado para tablets */
  }
`;

const StyledFeatureItem = styled.article`
  flex: 1;
  min-width: 220px;
  max-width: 260px;
  padding: 1rem 0.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  transition: transform 0.3s ease, opacity 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    opacity: 0.95;
  }

  @media (min-width: ${breakpoints.tabletMin}) and (max-width: ${breakpoints.tabletMax}) {
    flex: 0 1 calc(50% - 1rem);
  }
`;

const StyledFeatureIcon = styled.img`
  display: block;
  margin-bottom: 1rem;
  height: 3rem;
  width: auto;

  @media (min-width: ${breakpoints.tabletMin}) and (max-width: ${breakpoints.tabletMax}) {
    height: 2.5rem;
  }
`;

const StyledFeatureTitle = styled.h3`
  color: ${colors.background};
  font-size: 1.05rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.6px;
`;

const StyledFeatureDescription = styled.p`
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.85rem;
  line-height: 1.6;
  margin: 0 auto;
  max-width: 90%;
`;

const Features: React.FC = () => {
  const items = [
    {
      icon: icon1,
      title: "EQUIPE ESPECIALIZADA E EXPERIENTE",
      description: "Profissionais experientes que constroem com qualidade e compromisso.",
    },
    {
      icon: icon2,
      title: "REFORMAS E CONSTRUÇÕES SOB MEDIDA",
      description: "Desenvolvemos projetos personalizados para atender com excelência.",
    },
    {
      icon: icon3,
      title: "QUALIDADE EM CADA DETALHE",
      description: "Usamos os melhores materiais e técnicas para garantir durabilidade e beleza.",
    },
    {
      icon: icon4,
      title: "SUPORTE DO COMEÇO AO FIM",
      description: "Acompanhamos todas as etapas para que você tenha uma experiência tranquila.",
    },
  ];

  return (
    <StyledFeaturesSection aria-label="Principais diferenciais da empresa">
      {items.map((item, index) => (
        <StyledFeatureItem key={index}>
          <StyledFeatureIcon src={item.icon} alt={item.title} />
          <StyledFeatureTitle>{item.title}</StyledFeatureTitle>
          <StyledFeatureDescription>{item.description}</StyledFeatureDescription>
        </StyledFeatureItem>
      ))}
    </StyledFeaturesSection>
  );
};

export default Features;
