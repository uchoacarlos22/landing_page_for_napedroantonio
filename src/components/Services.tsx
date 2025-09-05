// src/components/Services.tsx
import React from "react";
import styled from "styled-components";
import { breakpoints, colors } from "../theme";

const ServicesSection = styled.section.attrs(() => ({ id: 'services' }))`
  position: relative;
  background: linear-gradient(
      ${colors.primary}40,
      ${colors.primary}40
    ),
    url("src/assets/images/services_back.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  padding: 20px;

  @media (max-width: ${breakpoints.mobileMax}) {
    padding: 30px 10px;
  }

  @media (min-width: ${breakpoints.tabletMin}) and (max-width: ${breakpoints.tabletMax}) {
    padding: 35px 15px;
  }
`;

const ServicesContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

const ServicesTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: ${colors.secondary};
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-align: center;

  @media (max-width: ${breakpoints.mobileMax}) {
    font-size: 1.5rem;
    text-align: center;
  }

  @media (min-width: ${breakpoints.tabletMin}) and (max-width: ${breakpoints.tabletMax}) {
    font-size: 1.75rem;
    text-align: left;
    padding-left: 5%;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  gap: 20px;
  margin: 0 auto;

  /* mobile: 1 coluna */
  @media (max-width: ${breakpoints.mobileMax}) {
    grid-template-columns: 1fr;
  }

  /* tablet: 2 colunas */
  @media (min-width: ${breakpoints.tabletMin}) and (max-width: ${breakpoints.tabletMax}) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* desktop: 3 colunas */
  @media (min-width: ${breakpoints.desktopMin}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ServiceCard = styled.div`
  background: ${colors.primary};
  padding: 20px;
  text-align: center;
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: inset 0 -3px 0 0 ${colors.secondary},
      inset 3px 0 0 0 ${colors.secondary},
      0 10px 30px rgba(0, 0, 0, 0.3);
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    background: ${colors.secondary};
  }

  &::before {
    top: 0;
    left: 0;
    width: 0;
    height: 3px;
    transition: width 0.5s ease;
  }

  &::after {
    top: 0;
    right: 0;
    width: 3px;
    height: 0;
    transition: height 0.5s ease 0.5s;
  }

  &:hover::before {
    width: 100%;
  }
  &:hover::after {
    height: 100%;
  }

  /* ajustes mobile */
  @media (max-width: ${breakpoints.mobileMax}) {
    padding: 15px;
  }

  /* ajustes tablet */
  @media (min-width: ${breakpoints.tabletMin}) and (max-width: ${breakpoints.tabletMax}) {
    padding: 18px;
  }
`;

const ServiceIcon = styled.div`
  width: 60px;
  height: 60px;
  margin: 0 auto 20px;
  background-size: cover;
  background-position: center;

  &.icon-construcao {
    background-image: url("src/assets/images/construcao.svg");
  }
  &.icon-renovacao {
    background-image: url("src/assets/images/renovacao.svg");
  }
  &.icon-arquitetura {
    background-image: url("src/assets/images/arquitetura.svg");
  }
  &.icon-integracao {
    background-image: url("src/assets/images/integracao.svg");
  }
  &.icon-consultoria {
    background-image: url("src/assets/images/consultoria.svg");
  }
  &.icon-planejamento {
    background-image: url("src/assets/images/planejamento.svg");
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  color: ${colors.background};
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;

  @media (max-width: ${breakpoints.mobileMax}) {
    font-size: 0.95rem;
  }
`;

const ServiceDescription = styled.p`
  font-size: 0.9rem;
  color: #ddd;
  line-height: 1.6;

  @media (max-width: ${breakpoints.mobileMax}) {
    font-size: 0.85rem;
  }
`;

const Services: React.FC = () => {
  const services = [
    {
      icon: "icon-construcao",
      title: "CONSTRUÇÃO CIVIL",
      desc: "Construção de casas, prédios e estruturas comerciais com materiais de qualidade e mão de obra especializada.",
    },
    {
      icon: "icon-renovacao",
      title: "REFORMAS",
      desc: "Renovação completa de ambientes residenciais e comerciais, incluindo pintura, pisos e acabamentos.",
    },
    {
      icon: "icon-arquitetura",
      title: "PROJETOS",
      desc: "Desenvolvimento de projetos arquitetônicos e estruturais personalizados para sua necessidade.",
    },
    {
      icon: "icon-integracao",
      title: "MANUTENÇÃO",
      desc: "Serviços de manutenção predial, reparos elétricos, hidráulicos e estruturais para sua segurança.",
    },
    {
      icon: "icon-consultoria",
      title: "INCORPORAÇÃO",
      desc: "Desenvolvimento de empreendimentos imobiliários do planejamento à entrega das chaves.",
    },
    {
      icon: "icon-planejamento",
      title: "ORÇAMENTOS",
      desc: "Análise detalhada de custos e cronogramas para seu projeto com transparência total.",
    },
  ];

  return (
    <ServicesSection>
      <ServicesContainer>
        <ServicesTitle>NOSSOS SERVIÇOS</ServicesTitle>
        <ServicesGrid>
          {services.map(({ icon, title, desc }) => (
            <ServiceCard key={title}>
              <ServiceIcon className={icon} />
              <ServiceTitle>{title}</ServiceTitle>
              <ServiceDescription>{desc}</ServiceDescription>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </ServicesContainer>
    </ServicesSection>
  );
};

export default Services;
