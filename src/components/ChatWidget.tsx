import React from 'react';
import styled from 'styled-components';
import { MessageCircle } from 'lucide-react';


const FloatingButton = styled.a`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 65px;
  height: 65px;
  background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  z-index: 1000;
  color: white;
  text-decoration: none;

  &:hover {
    transform: scale(1.1) rotate(5deg);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
    background: linear-gradient(135deg, #128c7e 0%, #075e54 100%);
  }

  @media (max-width: 480px) {
    bottom: 20px;
    right: 20px;
    width: 55px;
    height: 55px;
  }
`;

const ChatWidget: React.FC = () => {
  const whatsappNumber = "5511967796576";
  const message = encodeURIComponent("Olá! Gostaria de entender como vocês trabalham com projetos e orçamentos.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;


  return (
    <FloatingButton 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      title="Falar no WhatsApp"
      onClick={() => window.gtag('event', 'click_whatsapp', { event_category: 'contato', event_label: 'chat_widget' })}
    >
      <MessageCircle size={32} />
    </FloatingButton>
  );
};

export default ChatWidget;

