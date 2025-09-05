import React from 'react';
import styled from 'styled-components';

const MapSection = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
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
      <MapIframe
        title="Nosso Local"
        src={src}
        allowFullScreen
        loading="lazy"
      />
    </MapSection>
  );
};

export default MapSectionComponent;
