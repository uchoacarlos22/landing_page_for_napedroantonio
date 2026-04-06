// Blueprint.tsx
import React, { useEffect } from "react";
import styled, { keyframes, css } from "styled-components";

// ====== Animações ======
const gridShift = keyframes`
  0% { background-position: 0 0, 0 0, 0 0, 0 0; }
  100% { background-position: 50px 50px, 30px 30px, 20px 20px, 20px 20px; }
`;

const fadeInOut = keyframes`
  0%, 100% { opacity: 0; transform: scale(0.8); }
  50% { opacity: 1; transform: scale(1); }
`;

const textGlow = keyframes`
  0%, 100% { text-shadow: 0 0 5px rgba(255,255,255,0.3); }
  50% { text-shadow: 0 0 15px rgba(255,255,255,0.8); }
`;

const furnitureFloat = keyframes`
  0%, 100% { transform: translateY(0px); opacity: 0.8; }
  50% { transform: translateY(-3px); opacity: 1; }
`;

const wallPulse = keyframes`
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.6; }
`;

// ====== Styled Components ======
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  font-family: 'Courier New', monospace;
  background: linear-gradient(135deg, #0f4c75 0%, #3282b8 50%, #1e6091 100%);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: 
      radial-gradient(circle at 20% 50%, rgba(255,255,255,0.03) 1px, transparent 1px),
      radial-gradient(circle at 80% 20%, rgba(255,255,255,0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px),
      linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px);
    background-size: 50px 50px, 30px 30px, 20px 20px, 20px 20px;
    animation: ${gridShift} 20s linear infinite;
  }
`;

interface WallProps {
  top: string;
  left: string;
  width: string;
  height: string;
  delay?: string;
}

const Wall = styled.div<WallProps>`
  position: absolute;
  background: rgba(255,255,255,0.3);
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  animation: ${wallPulse} 3s ease-in-out infinite;
  animation-delay: ${({ delay }) => delay || '0s'};
`;

interface RoomProps {
  top: string;
  left: string;
  width: string;
  height: string;
  delay?: string;
}

const Room = styled.div<RoomProps>`
  position: absolute;
  border: 2px solid rgba(255,255,255,0.7);
  background: rgba(255,255,255,0.05);
  border-radius: 2px;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  animation: ${fadeInOut} 6s ease-in-out infinite;
  animation-delay: ${({ delay }) => delay || '0s'};
`;

const RoomLabel = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgba(255,255,255,0.9);
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  animation: ${textGlow} 4s ease-in-out infinite;
`;

interface FurnitureProps {
  top: string;
  left: string;
  width: string;
  height: string;
  type?: "sofa" | "bed" | "table" | "kitchen" | "sink" | "toilet";
  delay?: string;
}

const Furniture = styled.div<FurnitureProps>`
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: 1px solid rgba(255,255,255,0.6);
  background: rgba(255,255,255,0.15);
  animation: ${furnitureFloat} 5s ease-in-out infinite;
  animation-delay: ${({ delay }) => delay || '0s'};
  ${({ type }) => type === 'sofa' && css`
    border-radius: 4px;
    &::before {
      content: '';
      position: absolute;
      top: 10%;
      left: 10%;
      right: 10%;
      height: 30%;
      background: rgba(255,255,255,0.2);
      border-radius: 2px;
    }
  `}
  ${({ type }) => type === 'bed' && css`
    border-radius: 8px;
    &::after {
      content: '';
      position: absolute;
      top: 20%;
      left: 20%;
      right: 20%;
      bottom: 20%;
      border: 1px solid rgba(255,255,255,0.4);
      border-radius: 4px;
    }
  `}
`;

// ====== Componente React ======
const Blueprint: React.FC = () => {

  useEffect(() => {
    const container = document.querySelector('.blueprint-container');

    const createFloatingElement = () => {
      if (!container) return;
      const element = document.createElement('div');
      element.style.position = 'absolute';
      element.style.color = 'rgba(255,255,255,0.8)';
      element.style.fontSize = '11px';
      element.style.animation = 'float 6s ease-in-out infinite';
      element.textContent = ['2.40m','3.20m','1.80m','4.50m','15.2m²','8.9m²','22.1m²','P.D.: 2.70m'][Math.floor(Math.random()*8)];
      element.style.left = `${Math.random()*60 + 20}%`;
      element.style.top = `${Math.random()*60 + 20}%`;
      container.appendChild(element);
      setTimeout(() => container.removeChild(element), 6000);
    };

    const floatingInterval = setInterval(createFloatingElement, 4000);
    return () => clearInterval(floatingInterval);
  }, []);

  return (
    <Container className="blueprint-container">
      {/* Paredes externas */}
      <Wall top="20%" left="15%" width="70%" height="8px" />
      <Wall top="75%" left="15%" width="70%" height="8px" />
      <Wall top="20%" left="15%" width="8px" height="55%" />
      <Wall top="20%" left="77%" width="8px" height="55%" />

      {/* Quartos */}
      <Room top="25%" left="17%" width="25%" height="18%" delay="2s">
        <RoomLabel>SALA<br />19.5m²</RoomLabel>
      </Room>
      <Room top="25%" left="47%" width="16%" height="18%" delay="2.5s">
        <RoomLabel>COZINHA<br />12.8m²</RoomLabel>
      </Room>
      <Room top="25%" left="67%" width="16%" height="18%" delay="3s">
        <RoomLabel>QUARTO 1<br />14.2m²</RoomLabel>
      </Room>
      <Room top="50%" left="17%" width="25%" height="22%" delay="3.5s">
        <RoomLabel>QUARTO 2<br />18.6m²</RoomLabel>
      </Room>
      <Room top="50%" left="47%" width="16%" height="22%" delay="4s">
        <RoomLabel>BANHEIRO<br />6.4m²</RoomLabel>
      </Room>
      <Room top="50%" left="67%" width="16%" height="22%" delay="4.5s">
        <RoomLabel>GARAGEM<br />20.1m²</RoomLabel>
      </Room>

      {/* Móveis */}
      <Furniture top="35%" left="20%" width="60px" height="30px" type="sofa" delay="7s"/>
      <Furniture top="33%" left="32%" width="25px" height="25px" type="table" delay="7.2s"/>
      <Furniture top="28%" left="69%" width="45px" height="30px" type="bed" delay="7.8s"/>
      <Furniture top="53%" left="20%" width="50px" height="35px" type="bed" delay="8s"/>
    </Container>
  );
};

export default Blueprint;
