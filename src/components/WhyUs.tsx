import styled, { keyframes } from "styled-components";
import { colors } from "../theme";
import Projects from "./Projects";

const backgroundFloat = keyframes`
    0%, 100% {
        transform: translateX(0) translateY(0) scale(1);
        opacity: 1;
    }
    33% {
        transform: translateX(-20px) translateY(-30px) scale(1.1);
        opacity: 0.8;
    }
    66% {
        transform: translateX(20px) translateY(20px) scale(0.9);
        opacity: 0.9;
    }
`;

const patternMove = keyframes`
    0% {
        background-position: 0 0, 0 0;
    }
    100% {
        background-position: 60px 60px, -60px 60px;
    }
`;

const floatUp = keyframes`
    0% {
        transform: translateY(100vh) scale(0);
        opacity: 0;
    }
    10% {
        opacity: 1;
    }
    90% {
        opacity: 1;
    }
    100% {
        transform: translateY(-100px) scale(1);
        opacity: 0;
    }
`;

const WhyChooseSection = styled.section`
  background: linear-gradient(135deg, ${colors.primary}, #000);
  color: ${colors.background};
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
        circle at 20% 80%,
        ${colors.secondary}1A 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 80% 20%,
        ${colors.secondary}14 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 40% 40%,
        ${colors.secondary}0D 0%,
        transparent 50%
      );
    animation: ${backgroundFloat} 20s ease-in-out infinite;
    z-index: 1;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(
        45deg,
        transparent 40%,
        ${colors.secondary}08 50%,
        transparent 60%
      ),
      linear-gradient(
        -45deg,
        transparent 40%,
        ${colors.background}05 50%,
        transparent 60%
      );
    background-size: 60px 60px;
    animation: ${patternMove} 15s linear infinite;
    z-index: 2;
  }
`;

const FloatingParticles = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 3;
`;

const Particle = styled.div`
  position: absolute;
  width: 4px;
  height: 4px;
  background: ${colors.secondary}99;
  border-radius: 50%;
  animation: ${floatUp} 8s infinite linear;

  &:nth-child(1) {
    left: 10%;
    animation-delay: 0s;
    animation-duration: 8s;
  }
  &:nth-child(2) {
    left: 20%;
    animation-delay: 1s;
    animation-duration: 10s;
  }
  &:nth-child(3) {
    left: 30%;
    animation-delay: 2s;
    animation-duration: 9s;
  }
  &:nth-child(4) {
    left: 40%;
    animation-delay: 3s;
    animation-duration: 11s;
  }
  &:nth-child(5) {
    left: 50%;
    animation-delay: 4s;
    animation-duration: 7s;
  }
  &:nth-child(6) {
    left: 60%;
    animation-delay: 5s;
    animation-duration: 12s;
  }
  &:nth-child(7) {
    left: 70%;
    animation-delay: 6s;
    animation-duration: 8s;
  }
  &:nth-child(8) {
    left: 80%;
    animation-delay: 7s;
    animation-duration: 10s;
  }
  &:nth-child(9) {
    left: 90%;
    animation-delay: 8s;
    animation-duration: 9s;
  }
`;

const Container = styled.div`
  width: 95%;
  margin: 0 auto;
  padding: 10px 20px;
  position: relative;
  z-index: 10;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const SectionContent = styled.div`
  display: grid;
  grid-template-columns: 0.3fr 0.7fr;
  gap: 40px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const TextContent = styled.div`
  height: 90%;
  padding-top: 10px;

  @media (max-width: 768px) {
    padding-right: 0;
    order: 2;
  }
`;

const SectionSubtitle = styled.div`
  color: ${colors.secondary};
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 15px;
`;

const SectionDescription = styled.p`
  font-size: 16px;
  color: #ddd;
  margin-bottom: 40px;
  line-height: 1.7;
`;

const ImageContent = styled.div`
  width: 105%;

  @media (max-width: 768px) {
    order: 1;
  }
`;

const WhyUs = () => {
  return (
    <WhyChooseSection>
      <FloatingParticles>
        {Array.from({ length: 9 }, (_, index) => (
          <Particle key={index} />
        ))}
      </FloatingParticles>
      <Container>
        <SectionContent>
          <TextContent>
            <SectionSubtitle>CONSTRUÇÃO</SectionSubtitle>
            <SectionDescription>
              Transformamos ideias em realidade com mais de 15 anos de
              experiência no mercado. Nossa equipe especializada oferece
              soluções completas em construção, reformas e renovações com
              qualidade excepcional e atendimento personalizado.
            </SectionDescription>
          </TextContent>

          <ImageContent>
            <Projects />
          </ImageContent>
        </SectionContent>
      </Container>
    </WhyChooseSection>
  );
};

export default WhyUs;
