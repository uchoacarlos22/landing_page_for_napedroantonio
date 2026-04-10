// Footer.tsx
import React from "react";
import styled from "styled-components";
import { colors } from "../theme";
import { FaGlobe, FaWhatsapp } from "react-icons/fa";
import TratorIcon from "../assets/images/trator-icon.svg";
import footerImg from "../assets/images/footer.jpg";

const FooterContainer = styled.footer`
  position: relative;
  background: linear-gradient(${colors.primary}B3, ${colors.primary}CC),
    /* overlay mais claro */ url(${footerImg}) center/cover
      no-repeat;

  color: ${colors.background}E6;
  padding: 80px 20px 30px;
  font-size: 0.9rem;
`;

const FooterInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const Column = styled.div`
  flex: 1;
  min-width: 200px;
`;

const Heading = styled.h4`
  position: relative;
  margin-bottom: 20px;
  text-transform: uppercase;
  font-size: 1rem;
  letter-spacing: 1px;
  color: ${colors.background};

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -6px;
    width: 40px;
    height: 3px;
    background: ${colors.secondary};
    border-radius: 2px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 15px;
  color: ${colors.background};

  img {
    margin-right: 8px;
    width: 30px; /* Ajuste o tamanho conforme necessário */
    height: auto;
  }
`;

const Text = styled.p`
  line-height: 1.6;
  color: #ddd;
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const LinkItem = styled.li`
  margin-bottom: 12px;

  a {
    color: #ddd;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: ${colors.background};
    }
  }
`;

const ContactItem = styled.div`
  margin-bottom: 12px;
  color: #ddd;

  strong {
    display: inline-block;
    width: 70px;
    color: ${colors.background};
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 10px;

  a {
    color: #ddd;
    font-size: 1.2rem;
    transition: color 0.2s;

    &:hover {
      color: ${colors.secondary};
    }
  }
`;

const Divider = styled.hr`
  border: 0;
  border-top: 1px solid ${colors.background}33;
  margin: 40px 0 20px;
`;

const FooterBottom = styled.div`
  text-align: center;
  color: ${colors.background}99;
  font-size: 0.8rem;

  a {
    color: ${colors.background}99;
    margin: 0 10px;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: ${colors.background};
    }
  }
`;

const WAButtonFooter = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background-color: #25D366;
  color: white !important;
  padding: 6px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 700;
  font-size: 0.85rem;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #1fba59;
  }
`;

const Footer: React.FC = () => (
  <FooterContainer>
    <FooterInner>
      {/* Sobre Nós */}
      <Column>
        <Heading>Sobre Nós</Heading>
        <LogoContainer>
          <img src={TratorIcon} alt="Ícone Trator" /> Construído
        </LogoContainer>
        <Text>
          Conte com a nossa experiência e dedicação para construir ou renovar o seu espaço. Transformamos seus sonhos em realidade com qualidade e segurança.
        </Text>
      </Column>

      {/* Links da Empresa */}
      <Column>
        <Heading>Links da Empresa</Heading>
        <LinkList>
          <LinkItem>
            <a href="#home">Home</a>
          </LinkItem>
          <LinkItem>
            <a href="#services">Serviços</a>
          </LinkItem>
          <LinkItem>
            <a href="#testimonials">Depoimentos</a>
          </LinkItem>
          <LinkItem>
            <a href="#contact">Contato</a>
          </LinkItem>
        </LinkList>
      </Column>

      {/* Contato */}
      <Column>
        <Heading>Informações de Contato</Heading>
        <ContactItem>
          <strong>Endereço:</strong> Morumbi, São Paulo - SP
        </ContactItem>
        <ContactItem>
          <strong>Telefone:</strong>
        </ContactItem>
        <WAButtonFooter 
          href="https://wa.me/5511980743311?text=Olá!%20Gostaria%20de%20informações%20sobre%20construção%20e%20reformas." 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaWhatsapp size={8} />
          Falar no WhatsApp
        </WAButtonFooter>

        <ContactItem>
          <strong>E-mail:</strong> napedroantonio@gmail.com
        </ContactItem>
        <SocialIcons>
          <a href="https://www.google.com/maps/search/?api=1&query=Construção+e+reforma+no+Morumbi+NapedroAntonio" target="_blank" rel="noopener noreferrer">
            <FaGlobe />
          </a>
        </SocialIcons>
      </Column>

    </FooterInner>

    <Divider />

    <FooterBottom>
      © {new Date().getFullYear()} NPA — Construção e Reformas. Todos os direitos reservados.
      <br />
      <a href="#faq">FAQ</a> | <a href="#contact">Contato</a> | <a href="#services">Serviços</a>
    </FooterBottom>
  </FooterContainer>
);

export default Footer;
