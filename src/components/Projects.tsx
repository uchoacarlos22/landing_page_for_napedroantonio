import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { colors } from "../theme";

// ====== Imagens ======
import banheiroAntes from "../assets/images/carousel-images/banheiro-antes.png";
import banheiroDepois from "../assets/images/carousel-images/banheiro-depois.png";
import casaAntes from "../assets/images/carousel-images/casa-antes.png";
import casaDepois from "../assets/images/carousel-images/casa-depois.png";
import cozinhaAntes from "../assets/images/carousel-images/cozinha-antes.png";
import cozinhaDepois from "../assets/images/carousel-images/cozinha-depois.png";
import quintalAntes from "../assets/images/carousel-images/quintal-antes.png";
import quintalDepois from "../assets/images/carousel-images/quintal-depois.png";
import salaAntes from "../assets/images/carousel-images/sala-antes.png";
import salaDepois from "../assets/images/carousel-images/sala-depois.png";

// Exemplo de logo
import logo from "../assets/images/npa_logo_sf.png";

interface SlideData {
  beforeSrc: string;
  afterSrc: string;
  title: string;
  description: string;
  status: string;
}

const slidesData: SlideData[] = [
  {
    beforeSrc: casaAntes,
    afterSrc: casaDepois,
    title: "Reforma de Fachada",
    description:
      "Modernização completa da fachada, trazendo um novo visual para o imóvel.",
    status: "Concluído",
  },
  {
    beforeSrc: banheiroAntes,
    afterSrc: banheiroDepois,
    title: "Banheiro Moderno",
    description: "Reforma com porcelanato e box de vidro temperado.",
    status: "Concluído",
  },
  {
    beforeSrc: cozinhaAntes,
    afterSrc: cozinhaDepois,
    title: "Cozinha Planejada",
    description:
      "Design moderno com bancadas em mármore e eletrodomésticos integrados.",
    status: "Em Progresso",
  },
  {
    beforeSrc: quintalAntes,
    afterSrc: quintalDepois,
    title: "Reforma do Quintal",
    description: "Paisagismo e criação de área de lazer.",
    status: "Planejamento",
  },
  {
    beforeSrc: salaAntes,
    afterSrc: salaDepois,
    title: "Renovação da Sala",
    description:
      "Transformação completa do ambiente com nova decoração e móveis modernos.",
    status: "Concluído",
  },
];

// ====== Styled Components ======
const Container = styled.div.attrs(() => ({ id: 'projects' }))`
  width: auto;
`;

const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 460px;
  overflow: hidden;
  border-radius: 5px;
  background: white;
  border: 4px solid ${colors.primary};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 10; /* Garante que o carrossel esteja acima de outros elementos */

  @media (max-width: 768px) {
    min-height: 500px; /* Aumenta a altura mínima para acomodar os bullets */
  }
`;

const SlideWrapper = styled.div<{ active: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
  z-index: ${(props) => (props.active ? 1 : 0)};
`;

const BeforeAfterContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  cursor: grab;
  user-select: none;
  overflow: hidden;
`;

const ImageBefore = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ImageAfter = styled.img<{ sliderPos: number }>`
  position: absolute;
  top: 0;
  left: 0;
  width: ${(props) => props.sliderPos}%;
  height: 100%;
  object-fit: cover;
  transition: width 0.8s ease-in-out;
`;

const SliderLine = styled.div<{ sliderPos: number }>`
  position: absolute;
  top: 0;
  left: ${(props) => props.sliderPos}%;
  transform: translateX(-50%);
  width: 4px;
  height: 100%;
  background: ${colors.primary};
  cursor: ew-resize;
  transition: left 0.8s ease-in-out;
`;

const SlideOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5); // semi-transparente
  color: white;
  padding: 20px;
  backdrop-filter: blur(5px); // desfoca o que está atrás

  @media (max-width: 768px) {
    padding-bottom: 50px; /* Aumenta o padding para acomodar os bullets */
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.2rem;
`;

const StatusIndicator = styled.div`
  background: ${colors.secondary};
  color: white;
  padding: 6px 12px;
  border-radius: 25px;
  font-size: 0.8rem;
`;

const Description = styled.p`
  margin: 5px 0 0 0;
  font-size: 0.9rem;
`;

// ====== Overlay "Tapume" ======
const TransitionOverlay = styled.div<{ active: boolean }>`
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 100%;
  background: url("/src/assets/images/fundo-tapume.jpg") center center / cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${(props) => props.active ? "translateX(0%)" : "translateX(-100%)"};
  transition: transform 0.6s ease-in-out;
  z-index: 30; // aumentar acima dos controles
`;

const OverlayLogo = styled.img`
  width: 320px;
  height: auto;
  opacity: 0.9;
`;

// ====== Controles ======
const CarouselIndicators = styled.div`
  position: absolute;
  bottom: 70px;
  right: 20px;
  display: flex;
  gap: 10px;
  z-index: 20;

  @media (max-width: 768px) {
    position: absolute;
    bottom: 10px; /* Posiciona abaixo do texto */
    left: 50%;
    right: auto; /* Remove o right fixo */
    transform: translateX(-50%);
    width: 100%;
    justify-content: center;
  }
`;

const Indicator = styled.div<{ active: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${(props) => (props.active ? colors.secondary : "#ccc")};
  cursor: pointer;
`;

const ControlsContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 10px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 10px;

  @media (max-width: 768px) {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: none; /* Remove o background em mobile */
    padding: 0;
    align-items: center; /* Centraliza os itens */
  }
`;

const ControlsWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 20px;
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  z-index: 20;

  @media (max-width: 768px) {
    display: none; /* Oculta os botões em telas menores */
  }
`;

const ControlButton = styled.button`
  background: ${colors.secondary};
  border: none;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.2rem;
  margin-bottom: 10px;
  &:hover {
    background: ${colors.primary};
  }
`;

// ====== Component ======
export default function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderPos, setSliderPos] = useState(0);
  const [overlayActive, setOverlayActive] = useState(false);
  const isDragging = useRef(false);

  const changeSlide = (newIndex: number) => {
    setOverlayActive(true);
    setTimeout(() => {
      setCurrentSlide(newIndex);
      setSliderPos(0);
    }, 300); // cobre o slide rapidamente
    setTimeout(() => {
      setOverlayActive(false); // agora espera 1s a mais antes de sumir
    }, 1700);
  };

  const nextSlide = () => changeSlide((currentSlide + 1) % slidesData.length);
  const prevSlide = () =>
    changeSlide(currentSlide === 0 ? slidesData.length - 1 : currentSlide - 1);
  const goToSlide = (index: number) => changeSlide(index);

  // ====== Drag ======
  const handleMouseDown = () => {
    isDragging.current = true;
  };
  const handleMouseUp = () => {
    isDragging.current = false;
  };
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    let newPos = ((e.clientX - rect.left) / rect.width) * 100;
    newPos = Math.max(0, Math.min(100, newPos));
    setSliderPos(newPos);
  };
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    let newPos = ((e.touches[0].clientX - rect.left) / rect.width) * 100;
    newPos = Math.max(0, Math.min(100, newPos));
    setSliderPos(newPos);
  };

  // ====== Auto Slide Animation ======
  useEffect(() => {
    const timer1 = setTimeout(() => setSliderPos(50), 4000); // vai para o meio após 4s
    const timer2 = setTimeout(() => setSliderPos(100), 6000); // vai para 100% após +2s no meio
    const timer3 = setTimeout(() => nextSlide(), 8000); // próximo slide após +2s final
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [currentSlide]);

  const displayStatus = sliderPos === 100 ? "Concluído" : "Antes";

  return (
    <Container>
      <CarouselWrapper
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchMove}
      >
        {slidesData.map((slide, index) => (
          <SlideWrapper key={index} active={index === currentSlide}>
            <BeforeAfterContainer
              onMouseDown={handleMouseDown}
              onTouchStart={handleMouseDown}
            >
              <ImageBefore
                src={slide.beforeSrc}
                alt={`Antes - ${slide.title}`}
              />
              <ImageAfter
                src={slide.afterSrc}
                alt={`Depois - ${slide.title}`}
                sliderPos={sliderPos}
              />
              <SliderLine sliderPos={sliderPos} />
              <SlideOverlay>
                <TitleWrapper>
                  <Title>{slide.title}</Title>
                  <StatusIndicator>{displayStatus}</StatusIndicator>
                </TitleWrapper>
                <Description>{slide.description}</Description>
              </SlideOverlay>
            </BeforeAfterContainer>
          </SlideWrapper>
        ))}

        {/* Overlay tapume com logo */}
        <TransitionOverlay active={overlayActive}>
          <OverlayLogo src={logo} alt="Logo-3d" />
        </TransitionOverlay>
        <ControlsContainer>
          <CarouselIndicators>
            {slidesData.map((_, idx) => (
              <Indicator
                key={idx}
                active={idx === currentSlide}
                onClick={() => goToSlide(idx)}
              />
            ))}
          </CarouselIndicators>
          <ControlsWrapper>
            <ControlButton onClick={prevSlide}>‹</ControlButton>
            <ControlButton onClick={nextSlide}>›</ControlButton>
          </ControlsWrapper>
        </ControlsContainer>
      </CarouselWrapper>
    </Container>
  );
}
