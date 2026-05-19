import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { colors, breakpoints } from "../theme";
import heroBg from "../assets/images/hero.webp"; // ✅ Import da imagem

// === Hero Section Container ===
const StyledHeroSection = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${colors.background};
  min-height: 84vh; /* Ajustado para ocupar menos espaço (~15% reduzido) */
  overflow: hidden;

  @media (min-width: ${breakpoints.tabletMin}) {
    height: 340px; /* Ajustado (15% menor) */
  }

  @media (min-width: ${breakpoints.desktopMin}) {
    height: 425px; /* Ajustado (15% menor) */
  }
`;

// === Background Image Layer ===
const StyledBackgroundImage = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background-image: url(${heroBg});
  background-color: ${colors.primary};
  opacity: 1;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;

  transition: filter 0.5s ease;

  @media (prefers-reduced-motion: no-preference) {
    &:hover {
      filter: brightness(1.35);
    }
  }
`;

// === Content Container ===
const StyledContentContainer = styled.div`
  position: relative;
  z-index: 10;
  padding: 0 24px;
  margin-top: 100px;
  max-width: 1200px;
  text-align: left;

  @media (max-width: ${breakpoints.mobileMax}) {
    text-align: center;
    margin-top: 60px;
  }
`;

// === Title Styles ===
const StyledTitle = styled.h1`
  font-size: 2.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: ${colors.background};
  line-height: 1.2;

  @media (min-width: ${breakpoints.tabletMin}) {
    font-size: 3rem;
  }

  @media (min-width: ${breakpoints.desktopMin}) {
    font-size: 3.5rem;
  }
`;

const StyledTitleLine1 = styled.span`
  display: block;
  transform: translateY(-100px);
  opacity: 0;
  transition: all 1s ease-out;

  &.active {
    transform: translateY(0);
    opacity: 1;
  }
`;

const StyledTitleLine2 = styled.span`
  display: block;
  transform: translateX(200px);
  opacity: 0;
  transition: all 1s ease-out;

  &.active {
    transform: translateX(0);
    opacity: 1;
  }
`;

const StyledHighlightedText = styled.span`
  color: ${colors.secondary};
`;

// === Button Styles ===
const StyledFreeConsultationButton = styled.a`
  background-color: ${colors.secondary};
  color: ${colors.primary};
  padding: 0.75rem 1.75rem;
  border-radius: 0.375rem;
  display: inline-flex;
  align-items: center;
  margin-top: 1rem;
  text-decoration: none;
  font-weight: 600;

  transform: translateY(100px);
  opacity: 0;
  transition: all 1s ease-out;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  &.active {
    transform: translateY(0);
    opacity: 1;
  }
`;

const StyledWhatsAppIcon = styled.svg`
  width: 1.25rem;
  height: 1.25rem;
  fill: none;
  stroke: ${colors.primary};
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  margin-right: 0.5rem;
`;

const Hero: React.FC = () => {
  const titleRef1 = useRef<HTMLSpanElement>(null);
  const titleRef2 = useRef<HTMLSpanElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            titleRef1.current?.classList.add("active");
            titleRef2.current?.classList.add("active");
            buttonRef.current?.classList.add("active");
          }
        });
      },
      { threshold: 0.5 },
    );

    if (titleRef1.current) observer.observe(titleRef1.current);
    if (titleRef2.current) observer.observe(titleRef2.current);
    if (buttonRef.current) observer.observe(buttonRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <StyledHeroSection id="hero">
      <StyledBackgroundImage
        role="img"
        aria-label="Imagem de fundo representando construção de casas"
      />
      <StyledContentContainer>
        <StyledTitle>
          <StyledTitleLine1 ref={titleRef1}>
            EMPRESA DE REFORMA E CONSTRUÇÃO
          </StyledTitleLine1>
          <StyledTitleLine2 ref={titleRef2}>
            <StyledHighlightedText>
              RESIDENCIAL EM SÃO PAULO
            </StyledHighlightedText>
          </StyledTitleLine2>
        </StyledTitle>
        <p
          style={{
            color: "rgba(255,255,255,0.9)",
            fontSize: "1.2rem",
            maxWidth: "800px",
            marginTop: "20px",
            marginBottom: "20px",
            lineHeight: "1.6",
          }}
        >
          Reformas de apartamentos, casas e obras novas no Morumbi e Grande SP.
          Visita técnica gratuita, orçamento em 24h.
        </p>
        <StyledFreeConsultationButton
          ref={buttonRef}
          href="https://wa.me/5511967796576?text=Olá!%20Preciso%20de%20um%20orçamento%20para%20reforma%20residencial%20em%20[bairro/cidade]."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Abrir conversa no WhatsApp para falar com especialista"
          onClick={() =>
            window.gtag("event", "click_whatsapp", {
              event_category: "contato",
              event_label: "hero",
            })
          }
        >
          <StyledWhatsAppIcon
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M20 16V6H4v10l4 4 4-4 4 4 4-4z"></path>
            <polyline points="4 10 10 14 20 6"></polyline>
          </StyledWhatsAppIcon>
          SOLICITAR VISITA TÉCNICA
        </StyledFreeConsultationButton>
      </StyledContentContainer>
    </StyledHeroSection>
  );
};

export default Hero;
