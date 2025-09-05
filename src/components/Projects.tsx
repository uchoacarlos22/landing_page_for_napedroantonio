import React, { useEffect, useRef, useState, useCallback } from "react";
import styled, { keyframes } from "styled-components";
import { colors } from "../theme";

// ==== Styled Components ====

const pulse = keyframes`
  0%, 100% { opacity: 0.7; }
  50% { opacity: 1; }
  `;

const Container = styled.div`
  width: 95%;
  padding-top: 20px;
`;

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
`;

const Track = styled.div`
  display: flex;
`;

const Slide = styled.div`
  min-width: 100%;
  position: relative;
  height: 350px;
  overflow: hidden;

  &:hover img.after {
    opacity: 1;
  }
  &:hover img.before {
    opacity: 0;
  }
  &:hover div.overlay {
    transform: translateY(0);
  }
  &:hover div.status {
    background: ${colors.secondary};
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const ImageContainer = styled.div`
position: relative;
width: 100%;
height: 100%;
`;

const ImgBefore = styled.img.attrs({ className: "before" })`
position: absolute;
top: 0;
left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 1;
`;

const ImgAfter = styled.img.attrs({ className: "after" })`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
object-fit: cover;
transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1);
opacity: 0;
`;

const StatusIndicator = styled.div.attrs({ className: "status" })`
position: absolute;
top: 20px;
right: 20px;
  background: ${colors.primary};
  border-radius: 25px;
  padding: 8px 16px;
  font-size: 0.85rem;
  font-weight: 500;
  color: white;
  transition: all 0.3s ease;
  `;
  
  const ImageOverlay = styled.div.attrs({ className: "overlay" })`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  color: white;
  padding: 30px;
  transform: translateY(100%);
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const OverlayTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 8px;
`;

const OverlayDescription = styled.div`
  font-size: 0.95rem;
  opacity: 0.9;
  line-height: 1.4;
`;

const Controls = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 30px;
`;

const Button = styled.button`
  background: ${colors.primary};
  border: none;
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    background: ${colors.secondary};
    transform: scale(1.1);
  }
`;

const Indicators = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
`;

interface IndicatorProps {
  $active: boolean;
}

const Indicator = styled.div<IndicatorProps>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${(props) => (props.$active ? colors.secondary : colors.border)};
  cursor: pointer;
  transition: all 0.3s ease;
  transform: ${(props) => (props.$active ? "scale(1.2)" : "scale(1)")};

  &:focus {
    outline: 2px solid white;
  }
`;

const HoverInstruction = styled.p`
  text-align: center;
  color: ${colors.textSecondary};
  font-size: 0.9rem;
  margin-top: 15px;
  font-style: italic;
  animation: ${pulse} 2s infinite;
`;

// ==== Data ====

const slidesData = [
  {
    beforeSrc: "https://picsum.photos/id/1015/800/500",
    afterSrc: "https://picsum.photos/id/1016/800/500",
    status: "ANTES/DEPOIS",
    title: "Projeto de Exemplo",
    description: "Descrição da transformação realizada.",
  },
  {
    beforeSrc: "https://picsum.photos/id/1015/800/500",
    afterSrc: "https://picsum.photos/id/1018/800/500",
    status: "CONCLUÍDO",
    title: "Reforma Cozinha",
    description:
      "Transformação total da cozinha com móveis planejados e bancada moderna.",
  },
  {
    beforeSrc: "https://picsum.photos/id/1016/800/500",
    afterSrc: "https://picsum.photos/id/1020/800/500",
    status: "CONCLUÍDO",
    title: "Banheiro Moderno",
    description: "Reforma com porcelanato e box de vidro temperado.",
  },
  {
    beforeSrc: "https://picsum.photos/id/1019/800/500",
    afterSrc: "https://picsum.photos/id/1024/800/500",
    status: "CONCLUÍDO",
    title: "Sala de Estar",
    description: "Ambiente integrado com projeto de iluminação personalizado.",
  },
  {
    beforeSrc: "https://picsum.photos/id/1021/800/500",
    afterSrc: "https://picsum.photos/id/1027/800/500",
    status: "CONCLUÍDO",
    title: "Suíte Master",
    description:
      "Criação de suíte com closet integrado e varanda com vista panorâmica.",
  },
  {
    beforeSrc: "https://picsum.photos/id/1022/800/500",
    afterSrc: "https://picsum.photos/id/1031/800/500",
    status: "CONCLUÍDO",
    title: "Área de Lazer",
    description:
      "Espaço gourmet com churrasqueira, piscina e paisagismo completo.",
  },
];

// ==== React Component ====

export default function CarouselAntesDepois() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<number | null>(null);

  // Clones: first and last
  const totalSlides = slidesData.length;

  // Slides with clones
  const slidesWithClones = [
    slidesData[totalSlides - 1], // last clone at the start
    ...slidesData,
    slidesData[0], // first clone at the end
  ];

  const updatePosition = useCallback((index: number, animate = true) => {
    if (!trackRef.current) return;
    trackRef.current.style.transition = animate
      ? "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)"
      : "none";
    trackRef.current.style.transform = `translateX(${-index * 100}%)`;
  }, []);

  useEffect(() => {
    updatePosition(currentSlide);
  }, [currentSlide, updatePosition]);

  // Handle transition end to reset instantly when on clones
  function handleTransitionEnd() {
    setIsTransitioning(false);
    if (currentSlide === 0) {
      setCurrentSlide(totalSlides);
      updatePosition(totalSlides, false);
    } else if (currentSlide === totalSlides + 1) {
      setCurrentSlide(1);
      updatePosition(1, false);
    }
  }

  // Next slide
  function nextSlide() {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => prev + 1);
  }

  // Previous slide
  function prevSlide() {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => prev - 1);
  }

  // Go to specific slide
  function goToSlide(index: number) {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
  }

  // Autoplay
  useEffect(() => {
    function startAutoplay() {
      if (autoplayRef.current !== null) clearInterval(autoplayRef.current);
      autoplayRef.current = window.setInterval(() => {
        nextSlide();
      }, 4000);
    }
    startAutoplay();
    return () => {
      if (autoplayRef.current !== null) clearInterval(autoplayRef.current);
    };
  }, [isTransitioning]);

  // Pause autoplay on hover
  function handleMouseEnter() {
    if (autoplayRef.current !== null) clearInterval(autoplayRef.current);
  }
  function handleMouseLeave() {
    autoplayRef.current = window.setInterval(() => {
      nextSlide();
    }, 4000);
  }

  return (
    <Container>
      <Wrapper onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Track
          ref={trackRef}
          onTransitionEnd={handleTransitionEnd}
          role="list"
          aria-live="polite"
        >
          {slidesWithClones.map((slide, index) => (
            <Slide
              key={index}
              role="listitem"
              aria-label={`${slide.title}, status: ${slide.status}`}
            >
              <ImageContainer>
                <ImgBefore
                  src={slide.beforeSrc}
                  alt={`Antes - ${slide.title}`}
                />
                <ImgAfter
                  src={slide.afterSrc}
                  alt={`Depois - ${slide.title}`}
                />
                <StatusIndicator>{slide.status}</StatusIndicator>
                <ImageOverlay>
                  <OverlayTitle>{slide.title}</OverlayTitle>
                  <OverlayDescription>{slide.description}</OverlayDescription>
                </ImageOverlay>
              </ImageContainer>
            </Slide>
          ))}
        </Track>
      </Wrapper>

      <Controls>
        <Button aria-label="Slide anterior" onClick={prevSlide}>
          ‹
        </Button>
        <Button aria-label="Próximo slide" onClick={nextSlide}>
          ›
        </Button>
      </Controls>

      <Indicators role="tablist" aria-label="Indicadores do carrossel">
        {slidesData.map((_, idx) => (
          <Indicator
            key={idx}
            $active={currentSlide === idx + 1}
            onClick={() => goToSlide(idx + 1)}
            tabIndex={0}
            role="tab"
            aria-selected={currentSlide === idx + 1}
            aria-label={`Ir para slide ${idx + 1}`}
            onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
              if (e.key === "Enter" || e.key === " ") {
                goToSlide(idx + 1);
              }
            }}
          />
        ))}
      </Indicators>

      <HoverInstruction>
        Passe o mouse sobre as imagens para ver a transformação
      </HoverInstruction>
    </Container>
  );
}
