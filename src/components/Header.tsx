import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-scroll";
import {
  MapPin,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Menu,
  X,
} from "lucide-react";
import { breakpoints, colors } from "../theme";
import logo from "../assets/images/npa_logo_sf.png"; // ✅ Importando logo

// === keyframe para slide in da esquerda ===
const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const HeaderContainer = styled.header`
  background-color: ${colors.primary};
  color: ${colors.background};
  width: 100%;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  height: 60px;
`;

const TopBar = styled.div`
  width: 90%;
  align-self: center;
  padding: 8px 0;
  font-size: 12px;
  position: relative;
  top: -5px;
  z-index: 100;

  @media (max-width: ${breakpoints.tabletMax}) {
    display: none;
  }
`;

const TopBarContent = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 20px;
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
`;

const Address = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

const PhoneNumber = styled.div`
  display: flex;
  align-items: center;
`;

const SocialIcons = styled.div`
  display: flex;
`;

const SocialLink = styled.a`
  color: ${colors.background};
  margin-left: 10px;

  &:hover,
  &:focus {
    color: ${colors.secondary};
    outline: none;
  }
`;

const NavigationBar = styled.nav<{ $isScrolled: boolean }>`
  width: 90%;
  background-color: ${colors.background};
  align-self: center;
  transition: all 0.3s ease-in-out;
  position: relative;
  top: -15px;
  z-index: 100;
  max-height: 60px;

  @media (max-width: ${breakpoints.tabletMax}) {
    width: 100%;
    top: 0;
  }

  ${(p) =>
    p.$isScrolled &&
    `
    width: 100%;
    top: 0;
    position: fixed;
  `}
`;

const NavigationContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  max-height: 55px;
  position: relative;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  color: ${colors.primary};
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;

  img {
    width: 100px;
    height: auto; /* ✅ mantém proporção */
    margin-left: 10px;
    padding-top: 5px;
  }
`;

const MenuIcon = styled.button`
  color: ${colors.primary};
  cursor: pointer;
  display: none;
  background: transparent;
  border: none;

  @media (max-width: ${breakpoints.tabletMax}) {
    display: block;
  }

  &:focus {
    outline: 2px solid ${colors.secondary};
    border-radius: 4px;
  }
`;

const NavLinks = styled.div<{ $isMenuOpen: boolean }>`
  display: flex;
  width: 80%;
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;

  @media (max-width: ${breakpoints.tabletMax}) {
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    width: 260px;
    background-color: ${colors.primary};
    border: 3px solid ${colors.secondary};
    border-radius: 0 0px 10px 0;
    padding: 20px;
    align-items: flex-start;
    z-index: 10;
    display: ${(p) => (p.$isMenuOpen ? "flex" : "none")};
  }
`;

const NavLink = styled(Link)<{ delay: number }>`
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 700;
  color: ${colors.secondary};
  cursor: pointer;
  opacity: 0.9;
  transition: all 0.3s ease;

  &:hover,
  &:focus {
    opacity: 1;
    transform: scale(1.05);
    color: ${colors.primary};
    outline: none;
  }

  @media (max-width: ${breakpoints.tabletMax}) {
    margin: 10px 0;
    opacity: 0;
    animation: ${slideIn} 0.4s forwards;
    animation-delay: ${(p) => p.delay}s;
  }
`;

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuIconRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        menuIconRef.current &&
        !menuIconRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const sections = [
    { name: "Home", id: "hero" },
    { name: "Sobre", id: "about" },
    { name: "Serviços", id: "services" },
    { name: "Projetos", id: "projects" },
    { name: "Consultoria", id: "consultation" },
    { name: "FAQ", id: "faq" },
    { name: "Depoimentos", id: "testimonials" },
  ];

  return (
    <HeaderContainer>
      <TopBar>
        <TopBarContent>
          <ContactInfo>
            <Address>
              <MapPin size={16} style={{ marginRight: "5px" }} aria-hidden="true" />
              Morumbi, São Paulo - SP
            </Address>
            <PhoneNumber>
              <Phone size={16} style={{ marginRight: "5px" }} aria-hidden="true" />
              <a 
                href="https://wa.me/5511980743311?text=Olá!%20Gostaria%20de%20informações%20sobre%20construção%20e%20reformas." 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                (Clique para falar no WhatsApp)
              </a>
            </PhoneNumber>

          </ContactInfo>
          {/* <SocialIcons>
            <SocialLink href="#" aria-label="Facebook">
              <Facebook size={16} />
            </SocialLink>
            <SocialLink href="#" aria-label="Twitter">
              <Twitter size={16} />
            </SocialLink>
            <SocialLink href="#" aria-label="Instagram">
              <Instagram size={16} />
            </SocialLink>
            <SocialLink href="#" aria-label="YouTube">
              <Youtube size={16} />
            </SocialLink>
          </SocialIcons> */}

        </TopBarContent>
      </TopBar>

      <NavigationBar $isScrolled={isScrolled}>
        <NavigationContent>
          <Logo to="hero" smooth duration={500} offset={-60} aria-label="Ir para seção inicial">
            <img src={logo} alt="Logo da empresa NAPEDROANTONIO" />
          </Logo>

          <NavLinks ref={menuRef} $isMenuOpen={isMenuOpen}>
            {sections.map((sec, i) => (
              <NavLink
                key={sec.id}
                to={sec.id}
                smooth
                duration={500}
                offset={-60}
                onClick={() => setIsMenuOpen(false)}
                delay={i * 0.1}
              >
                {sec.name.toUpperCase()}
              </NavLink>
            ))}
          </NavLinks>

          <MenuIcon
            ref={menuIconRef}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Abrir ou fechar menu de navegação"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </MenuIcon>
        </NavigationContent>
      </NavigationBar>
    </HeaderContainer>
  );
};

export default Header;
