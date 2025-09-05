import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { colors } from "../theme";

const StyledHeroSection = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  height: 420px;
`;

const StyledBackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('src/assets/images/hero.png');
  background-color: ${colors.primary};
  background-blend-mode: screen;
  opacity: 0.9;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
`;

const StyledContentContainer = styled.div`
  position: relative;
  z-index: 10;
  text-align: left;
  container mx-auto px-6;
  padding-left: 24px;
  padding-right: 24px;
  margin-top: 100px;
`;

const StyledTitle = styled.h1`
  font-size: 2.25rem;
  @media (min-width: 768px) {
    font-size: 3rem;
  }
  font-weight: bold;
  margin-bottom: 1rem;
  color: white;
  line-height: 1.2;
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

const StyledFreeConsultationButton = styled.a`
  background-color: ${colors.secondary};
  color: ${colors.primary};
  padding: 0.5rem 1.5rem;
  border-radius: 0.375rem;
  &:hover {
    background-color: ${colors.secondary};
    transform: scale(1.05);
  }
  &:active {
    transform: scale(0.95);
  }
  transition: transform 0.2s;
  display: inline-flex;
  align-items: center;
  margin-top: 1rem;
  text-decoration: none;
  transform: translateY(100px);
  opacity: 0;
  transition: all 1s ease-out;

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
      {
        threshold: 0.5,
      }
    );

    if (titleRef1.current) {
      observer.observe(titleRef1.current);
    }
    if (titleRef2.current) {
      observer.observe(titleRef2.current);
    }
    if (buttonRef.current) {
      observer.observe(buttonRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <StyledHeroSection id="hero">
      <StyledBackgroundImage />
      <StyledContentContainer>
        <StyledTitle>
          <StyledTitleLine1 ref={titleRef1}>CONSTRUÍMOS SEUS</StyledTitleLine1>
          <StyledTitleLine2 ref={titleRef2}>
            <StyledHighlightedText>SONHOS E SEU LAR</StyledHighlightedText>
          </StyledTitleLine2>
        </StyledTitle>
        <StyledFreeConsultationButton ref={buttonRef} href="https://wa.me/SEUNUMERO">
          <StyledWhatsAppIcon
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M20 16V6H4v10l4 4 4-4 4 4 4-4z"></path>
            <polyline points="4 10 10 14 20 6"></polyline>
          </StyledWhatsAppIcon>
          CONSULTA GRATUITA
        </StyledFreeConsultationButton>
        {/* <Features /> */}
      </StyledContentContainer>
    </StyledHeroSection>
  );
};

export default Hero;
