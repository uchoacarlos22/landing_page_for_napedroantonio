import React from "react";
import styled from "styled-components";

const MapSection = styled.section`
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
`;

const MapIframe = styled.iframe`
  width: 100%;
  height: 400px;
  border: 0;

  @media (max-width: 768px) {
    height: 300px;
  }

  @media (max-width: 480px) {
    height: 200px;
  }
`;

interface MapSectionProps {
  /** Endereço completo ou coordenadas para exibir no mapa */
  address: string;
}

const MapSectionComponent: React.FC<MapSectionProps> = ({ address }) => {
  // codifica espaços e caracteres especiais para a URL
  const query = encodeURIComponent(address);
  const src = `https://maps.google.com/maps?q=${query}&output=embed`;

  return (
    <MapSection>
      <MapIframe title="Nosso Local" src={src} allowFullScreen loading="lazy" />
    </MapSection>
  );
};

export default MapSectionComponent;
