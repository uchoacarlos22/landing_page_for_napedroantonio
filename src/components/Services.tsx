// src/components/Services.tsx
import React from "react";
import styled from "styled-components";
import { breakpoints, colors } from "../theme";
import construcao from "../assets/images/construcao.svg";
import renovacao from "../assets/images/renovacao.svg";
import arquitetura from "../assets/images/arquitetura.svg";
import integracao from "../assets/images/integracao.svg";
import consultoria from "../assets/images/consultoria.svg";
import planejamento from "../assets/images/planejamento.svg";
import servicesBackground from "../assets/images/services_back.jpg";

const ServicesSection = styled.section.attrs(() => ({ id: "services" }))`
  position: relative;
  background: linear-gradient(${colors.primary}50, ${colors.primary}70),
    url(${servicesBackground}) center/cover no-repeat;
  background-attachment: scroll;
  padding: 80px 20px;
  text-align: center;

  @media (min-width: ${breakpoints.desktopMin}) {
    background-attachment: fixed;
  }

  @media (max-width: ${breakpoints.mobileMax}) {
    padding: 60px 15px;
  }
`;

const ServicesContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

const ServicesTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 800;
  color: ${colors.secondary};
  margin-bottom: 12px;
  letter-spacing: 1px;
  text-transform: uppercase;

  @media (max-width: ${breakpoints.mobileMax}) {
    font-size: 1.6rem;
  }
`;

const ServicesSubtitle = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 60px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;

  @media (max-width: ${breakpoints.mobileMax}) {
    font-size: 0.95rem;
    margin-bottom: 40px;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  gap: 25px;
  margin: 0 auto;

  @media (max-width: ${breakpoints.mobileMax}) {
    grid-template-columns: 1fr;
  }

  @media (min-width: ${breakpoints.tabletMin}) and (max-width: ${breakpoints.tabletMax}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${breakpoints.desktopMin}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ServiceCard = styled.div`
  background: ${colors.primary};
  padding: 25px 20px;
  text-align: center;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: inset 0 -3px 0 0 ${colors.secondary},
      inset 3px 0 0 0 ${colors.secondary},
      0 10px 30px rgba(0, 0, 0, 0.3);
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    background: ${colors.secondary};
    transition: all 0.5s ease;
  }

  &::before {
    top: 0;
    left: 0;
    width: 0;
    height: 3px;
  }

  &::after {
    top: 0;
    right: 0;
    width: 3px;
    height: 0;
    transition-delay: 0.5s;
  }

  &:hover::before {
    width: 100%;
  }

  &:hover::after {
    height: 100%;
  }

  @media (max-width: ${breakpoints.mobileMax}) {
    padding: 18px;
  }

  @media (min-width: ${breakpoints.tabletMin}) and (max-width: ${breakpoints.tabletMax}) {
    padding: 20px;
  }
`;


const ServiceIcon = styled.img`
  width: 64px;
  height: 64px;
  margin-bottom: 20px;
  transition: transform 0.3s ease;

  ${ServiceCard}:hover & {
    transform: scale(1.1);
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: ${colors.secondary};
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;

  @media (max-width: ${breakpoints.mobileMax}) {
    font-size: 1rem;
  }
`;

const ServiceDescription = styled.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  max-width: 90%;
  margin: 0 auto;

  @media (max-width: ${breakpoints.mobileMax}) {
    font-size: 0.9rem;
  }
`;

const Services: React.FC = () => {
  const services = [
    {
      icon: construcao,
      title: "Construção Civil",
      desc: "Execução de obras residenciais e comerciais com alto padrão, segurança e profissionais qualificados.",
    },
    {
      icon: renovacao,
      title: "Reformas",
      desc: "Transformamos ambientes com reformas completas, acabamento de excelência e atenção aos detalhes.",
    },
    {
      icon: arquitetura,
      title: "Projetos",
      desc: "Desenvolvimento de projetos arquitetônicos e estruturais personalizados, adaptados ao seu estilo.",
    },
    {
      icon: integracao,
      title: "Manutenção",
      desc: "Serviços preventivos e corretivos elétricos, hidráulicos e estruturais, com agilidade e eficiência.",
    },
    {
      icon: consultoria,
      title: "Incorporação",
      desc: "Gestão completa de empreendimentos — do planejamento à entrega — com foco em qualidade e transparência.",
    },
    {
      icon: planejamento,
      title: "Orçamentos",
      desc: "Orçamentos detalhados e personalizados, garantindo clareza, custo-benefício e confiança.",
    },
  ];

  return (
    <ServicesSection>
      <ServicesContainer>
        <ServicesTitle>Nossos Serviços</ServicesTitle>
        <ServicesSubtitle>
          Soluções completas em construção e reformas, com qualidade,
          comprometimento e atenção a cada detalhe.
        </ServicesSubtitle>
        <ServicesGrid>
          {services.map(({ icon, title, desc }) => (
            <ServiceCard key={title}>
              <ServiceIcon src={icon} alt={title} />
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
