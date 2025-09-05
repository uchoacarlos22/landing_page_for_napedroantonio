// src/components/FAQ.tsx
import React, { useState } from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { breakpoints, colors } from "../theme";

// ============ STYLED COMPONENTS ============

const FAQSection = styled.section.attrs(() => ({ id: "faq" }))`
  position: relative;
  background-color: ${colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;

  /* tablet */
  @media (min-width: ${breakpoints.tabletMin}) and (max-width: ${breakpoints.tabletMax}) {
    padding: 15px;
  }

  /* mobile */
  @media (max-width: ${breakpoints.mobileMax}) {
    padding: 10px;
  }
`;

const Container = styled.div`
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  position: relative;

  /* mobile: transforma em coluna */
  @media (max-width: ${breakpoints.mobileMax}) {
    flex-direction: column;
    align-items: center;
  }
`;

const FAQTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${colors.secondary};
  padding: 0.5rem;
  letter-spacing: 2px;
  text-align: center;
  /* tablet */
  @media (max-width: ${breakpoints.tabletMax}) {
    font-size: 2.2rem;
    text-align: center;
    padding: 1.5rem 0;
  }

  /* mobile */
  @media (max-width: ${breakpoints.mobileMax}) {
    font-size: 2rem;
    padding: 1rem 0;
  }
`;

const FAQList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  flex: 1;

  /* mobile: largura total */
  @media (max-width: ${breakpoints.mobileMax}) {
    width: 100%;
  }
`;

const ImageContent = styled.div`
  flex: 1;
  margin-left: 20px;
  position: relative;

  @media (max-width: ${breakpoints.mobileMax}) {
    display: none;
  }
`;

const MainImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
`;

const StatsOverlay = styled.div`
  position: absolute;
  bottom: -30px;
  left: 30px;
  background: ${colors.background};
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  display: flex;
  gap: 40px;

  @media (max-width: 768px) {
    position: static;
    margin-top: 20px;
    justify-content: center;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 20px;
    padding: 20px;
  }
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatNumber = styled.span`
  font-size: 28px;
  font-weight: 700;
  color: ${colors.secondary};
  display: block;
`;

const StatLabel = styled.span`
  font-size: 14px;
  color: ${colors.textSecondary};
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

// Cada item FAQ
const FAQItem = styled.li`
  border-left: 3px solid ${colors.secondary};
  margin-bottom: 1rem;
  background: ${colors.primary}E6;
  backdrop-filter: blur(10px);
  color: ${colors.secondary};
  overflow: hidden;
  transition: all 0.3s ease;
`;

const FAQQuestion = styled.button`
  padding: 1.5rem;
  width: 100%;
  text-align: left;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  color: ${colors.secondary};
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background 0.3s ease;

  &:hover {
    background: ${colors.secondary}1A;
  }

  /* tablet */
  @media (max-width: ${breakpoints.tabletMax}) {
    font-size: 0.9rem;
    padding: 1rem;
  }

  /* mobile */
  @media (max-width: ${breakpoints.mobileMax}) {
    font-size: 0.8rem;
    padding: 0.8rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

const FAQIcon = styled.span<{ open: boolean }>`
  display: inline-block;
  transition: transform 0.3s ease;
  transform: rotate(${(p) => (p.open ? 180 : 0)}deg);
  color: ${colors.secondary};
`;

const FAQAnswer = styled.div<{ open: boolean }>`
  max-height: ${(p) => (p.open ? "500px" : "0")};
  opacity: ${(p) => (p.open ? 1 : 0)};
  padding: ${(p) => (p.open ? "1rem 1.5rem" : "0 1.5rem")};
  background: ${colors.primary}4D;
  color: ${colors.background};
  font-size: 1.2rem;
  line-height: 1.6;
  overflow: hidden;
  transition: all 0.3s ease;

  /* mobile */
  @media (max-width: ${breakpoints.mobileMax}) {
    font-size: 1rem;
  }
`;

// ============ COMPONENT ============

const faqData = [
  {
    question:
      "Como descubro o status da minha solicitação de licença de construção?",
    answer:
      "Você pode acompanhar pelo portal da prefeitura ou entrando em contato com o setor responsável.",
  },
  {
    question:
      'O que é um "empreiteiro especializado"? Eles precisam de uma licença de empreiteiro?',
    answer:
      "Empreiteiros especializados atuam em nichos específicos e devem ter licença conforme normas locais.",
  },
  {
    question: "Qual é o prazo de aprovação para uma licença de construção?",
    answer:
      "O prazo varia de 15 a 60 dias, dependendo da complexidade do projeto e documentação.",
  },
  {
    question:
      "Em que horário é permitida a construção (ruído)? O trabalho pode ser feito nos fins de semana?",
    answer:
      "Segunda a sexta, 7h–18h; sábado até 17h. Domingos e feriados geralmente restritos.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState<number | null>(null);
  const { ref } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <>
      <FAQTitle>Perguntas Frequentes</FAQTitle>
      <FAQSection ref={ref}>
        <Container>
          <FAQList>
            {faqData.map((item, idx) => {
              const isOpen = active === idx;
              return (
                <FAQItem key={idx}>
                  <FAQQuestion onClick={() => setActive(isOpen ? null : idx)}>
                    <span>{item.question}</span>
                    <FAQIcon open={isOpen}>▼</FAQIcon>
                  </FAQQuestion>
                  <FAQAnswer open={isOpen}>
                    <p>{item.answer}</p>
                  </FAQAnswer>
                </FAQItem>
              );
            })}
          </FAQList>
          <ImageContent>
            <MainImage
              src="src/assets/images/why_us.jpg"
              alt="Trabalhador da Construção"
            />

            <StatsOverlay>
              <StatItem>
                <StatNumber>1K+</StatNumber>
                <StatLabel>Projetos</StatLabel>
              </StatItem>
              <StatItem>
                <StatNumber>950+</StatNumber>
                <StatLabel>Clientes</StatLabel>
              </StatItem>
              <StatItem>
                <StatNumber>15+</StatNumber>
                <StatLabel>Anos</StatLabel>
              </StatItem>
            </StatsOverlay>
          </ImageContent>
        </Container>
      </FAQSection>
    </>
  );
}
