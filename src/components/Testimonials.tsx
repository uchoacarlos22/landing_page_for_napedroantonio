import { useState, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import { colors } from '../theme';

const TestimonialsContainer = styled.div.attrs(() => ({ id: 'testimonials' }))`
  margin: 0 auto;
  background: ${colors.background};
  border-radius: 10px;
  padding: 50px 40px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const TestimonialsTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  color: ${colors.primary};
  margin-bottom: 50px;
  text-transform: uppercase;
  letter-spacing: 2px;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const TestimonialsSlider = styled.div`
  position: relative;
  overflow: hidden;
`;

const TestimonialsTrack = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: 100%;
`;

const TestimonialSlide = styled.div`
  min-width: 100%;
  display: flex;
  gap: 40px;
  justify-content: center; // centraliza horizontalmente os cards
  padding: 0; // remove o padding lateral que estava causando deslocamento

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }
`;


const TestimonialCard = styled.div`
  flex: 1;
  max-width: 600px;
  background: #f1f3f5;
  border-radius: 15px;
  padding: 30px;
  position: relative;
  min-height: 280px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    min-height: auto;
    padding: 20px;
  }
`;

const TestimonialHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const TestimonialAvatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 15px;
  border: 3px solid ${colors.background};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

const TestimonialName = styled.div`
  font-size: 1.1rem;
  font-weight: bold;
  color: ${colors.primary};
  text-transform: uppercase;
  letter-spacing: 1px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const TestimonialRating = styled.div`
  margin-left: auto;
  display: flex;
  gap: 2px;
`;

const Star = styled.span<{ empty?: boolean }>`
  color: ${colors.secondary};
  font-size: 1.2rem;

  ${props =>
    props.empty &&
    css`
      color: ${colors.border};
    `}
`;

const TestimonialText = styled.div`
  color: ${colors.textSecondary};
  line-height: 1.6;
  font-size: 0.95rem;
  flex-grow: 1;
`;

const TestimonialDivider = styled.div`
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, ${colors.secondary} 0%, ${colors.secondary} 70%, ${colors.border} 70%, ${colors.border} 100%);
  margin-top: 20px;
  border-radius: 2px;
`;

const NavigationDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 30px;
`;

const Dot = styled.div<{ $active?: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${colors.border};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${colors.secondary}BF;
  }

  ${props =>
    props.$active &&
    css`
      background: ${colors.secondary};
      transform: scale(1.2);
    `}
`;

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 4;
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const startAutoSlide = () => {
      stopAutoSlide();
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, 5000);
    };

    const stopAutoSlide = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    startAutoSlide();

    const container = document.querySelector('.testimonials-container');
    container?.addEventListener('mouseenter', stopAutoSlide);
    container?.addEventListener('mouseleave', startAutoSlide);

    return () => {
      stopAutoSlide();
      container?.removeEventListener('mouseenter', stopAutoSlide);
      container?.removeEventListener('mouseleave', startAutoSlide);
    };
  }, [totalSlides]);

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <TestimonialsContainer className="testimonials-container">
      <TestimonialsTitle>DEPOIMENTOS</TestimonialsTitle>

      <TestimonialsSlider>
        <TestimonialsTrack style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {/* Slide 1 */}
          <TestimonialSlide>
            <TestimonialCard>
              <TestimonialHeader>
                <TestimonialAvatar
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
                  alt="João Ribeiro"
                />
                <TestimonialName>João Ribeiro</TestimonialName>
                <TestimonialRating>
                  {[...Array(5)].map((_, i) => <Star key={i}>★</Star>)}
                </TestimonialRating>
              </TestimonialHeader>
              <TestimonialText>
                O atendimento foi excelente do início ao fim. O Pedro me passou segurança e cumpriu exatamente o que foi combinado. A reforma do meu banheiro ficou impecável e dentro do prazo. Recomendo de olhos fechados!
              </TestimonialText>
              <TestimonialDivider />
            </TestimonialCard>
          </TestimonialSlide>

          {/* Slide 2 */}
          <TestimonialSlide>
            <TestimonialCard>
              <TestimonialHeader>
                <TestimonialAvatar
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                  alt="Luiz Santos"
                />
                <TestimonialName>Luiz Santos</TestimonialName>
                <TestimonialRating>
                  {[...Array(5)].map((_, i) => <Star key={i}>★</Star>)}
                </TestimonialRating>
              </TestimonialHeader>
              <TestimonialText>
                Já tinha tido muita dor de cabeça com serviços mal feitos. Mas com o Pedro foi diferente. Pontual, caprichoso e super transparente. Agora sempre que preciso de manutenção em casa, sei exatamente quem chamar.
              </TestimonialText>
              <TestimonialDivider />
            </TestimonialCard>
          </TestimonialSlide>

          {/* Slide 3 */}
          <TestimonialSlide>
            <TestimonialCard>
              <TestimonialHeader>
                <TestimonialAvatar
                  src="https://images.unsplash.com/profile-1586850113879-8ddddab6c5c4image?w=150&dpr=2&crop=faces&bg=%23fff&h=150&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
                  alt="Maria Oliveira"
                />
                <TestimonialName>Maria Oliveira</TestimonialName>
                <TestimonialRating>
                  {[...Array(5)].map((_, i) => <Star key={i}>★</Star>)}
                </TestimonialRating>
              </TestimonialHeader>
              <TestimonialText>
                Fiquei muito satisfeita com o resultado final! Além do trabalho ter ficado ótimo, a organização e limpeza durante o processo me surpreenderam. Foi um alívio contratar alguém tão profissional.
              </TestimonialText>
              <TestimonialDivider />
            </TestimonialCard>
          </TestimonialSlide>

          {/* Slide 4 */}
          <TestimonialSlide>
            <TestimonialCard>
              <TestimonialHeader>
                <TestimonialAvatar
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
                  alt="Ana Souza Ribeiro"
                />
                <TestimonialName>Ana Souza</TestimonialName>
                <TestimonialRating>
                  {[...Array(5)].map((_, i) => <Star key={i}>★</Star>)}
                </TestimonialRating>
              </TestimonialHeader>
              <TestimonialText>
                Contratei para trocar o piso da cozinha e acabei pedindo mais serviços de tão bom que foi. Um profissional honesto, educado e com atenção aos detalhes. Me senti respeitada e valorizada como cliente.
              </TestimonialText>
              <TestimonialDivider />
            </TestimonialCard>
          </TestimonialSlide>
        </TestimonialsTrack>
      </TestimonialsSlider>

      <NavigationDots>
        {[...Array(totalSlides)].map((_, i) => (
          <Dot key={i} $active={currentSlide === i} onClick={() => goToSlide(i)} />
        ))}
      </NavigationDots>
    </TestimonialsContainer>
  );
};

export default Testimonials;
