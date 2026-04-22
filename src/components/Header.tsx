import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-scroll";
import { MapPin, Phone, Menu, X, ChevronDown } from "lucide-react";
import { breakpoints, colors } from "../theme";
import logo from "../assets/images/npa_logo_sf.png";

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
  top: 0;
  left: 0;
  z-index: 100;
  height: 60px;

  @media (max-width: ${breakpoints.tabletMax}) {
    width: 100%;
    top: 0;
  }
`;

const TopBar = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 44px; /* 🔥 FIXO */
  z-index: 1000;
  background-color: ${colors.primary};
  color: ${colors.background};

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

const WhatsAppButtonTop = styled.a`
  display: flex;
  align-items: center;
  background-color: #25d366;
  color: white;
  padding: 4px 12px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 700;
  font-size: 0.75rem;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #1fba59;
  }
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
  position: fixed;
  top: ${(p) => (p.$isScrolled ? "0px" : "44px")};
  left: ${(p) => (p.$isScrolled ? "0%" : "5%")};
  width: ${(p) => (p.$isScrolled ? "98.8%" : "90%")};

  background-color: ${colors.background};
  z-index: 999;

  height: 60px;

  border-radius: ${(p) => (p.$isScrolled ? "0" : "0 0 12px 12px")};

  transition: all 0.35s ease;

  @media (max-width: ${breakpoints.tabletMax}) {
    width: 100%;
    left: 0;
    top: 0;
    border-radius: 0;
  }
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
    padding-top: 20px;
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
  width: 100%;
  justify-content: space-between;
  padding: 0 50px;
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

const NavLink = styled.a<{ delay: number; $active?: boolean }>`
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 700;
  color: ${(p) => (p.$active ? colors.primary : colors.secondary)};
  cursor: pointer;
  opacity: 0.9;
  transition: all 0.3s ease;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 4px;

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
    width: 100%;
  }
`;

const DropdownContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  @media (max-width: ${breakpoints.tabletMax}) {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }
`;

const DropdownMenu = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(${(p) => (p.$isOpen ? "10px" : "0")});
  background: white;
  border-radius: 8px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  padding: 10px 0;
  min-width: 180px;
  opacity: ${(p) => (p.$isOpen ? 1 : 0)};
  visibility: ${(p) => (p.$isOpen ? "visible" : "hidden")};
  transition: all 0.3s ease;
  z-index: 1000;
  border: 1px solid rgba(0, 0, 0, 0.05);

  &::before {
    content: "";
    position: absolute;
    top: -6px;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    width: 12px;
    height: 12px;
    background: white;
    border-top: 1px solid rgba(0, 0, 0, 0.05);
    border-left: 1px solid rgba(0, 0, 0, 0.05);
  }

  @media (max-width: ${breakpoints.tabletMax}) {
    position: static;
    transform: none;
    opacity: 1;
    visibility: visible;
    background: transparent;
    box-shadow: none;
    padding: 5px 0 5px 20px;
    display: ${(p) => (p.$isOpen ? "block" : "none")};
    border: none;

    &::before {
      display: none;
    }
  }
`;

const DropdownItem = styled.a`
  display: block;
  padding: 10px 20px;
  color: ${colors.primary};
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background: rgba(218, 165, 32, 0.1);
    color: ${colors.secondary};
    padding-left: 25px;
  }

  @media (max-width: ${breakpoints.tabletMax}) {
    color: rgba(255, 255, 255, 0.7);
    padding: 8px 0;
    font-size: 14px;
    text-transform: none;

    &:hover {
      background: transparent;
      color: ${colors.secondary};
      padding-left: 5px;
    }
  }
`;

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuIconRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = (e: Event) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollTop =
            window.scrollY ||
            document.documentElement.scrollTop ||
            (e.target as HTMLElement)?.scrollTop ||
            0;

          const shouldBeScrolled = scrollTop > 40; // 🔥 ajuste fino aqui

          setIsScrolled((prev) =>
            prev !== shouldBeScrolled ? shouldBeScrolled : prev,
          );

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, true);

    return () => {
      window.removeEventListener("scroll", handleScroll, true);
    };
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
    {
      name: "Serviços",
      id: "services",
      subItems: [
        { name: "Destaques", id: "services" },
        { name: "Catálogo Completo", id: "all-services" },
      ],
    },
    { name: "Projetos", id: "projects" },
    { name: "Consultoria", id: "consultation" },
    { name: "FAQ", id: "faq" },
    { name: "Depoimentos", id: "testimonials" },
  ];

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <HeaderContainer>
      <TopBar>
        <TopBarContent>
          <ContactInfo>
            <Address>
              <MapPin
                size={16}
                style={{ marginRight: "5px" }}
                aria-hidden="true"
              />
              Morumbi, São Paulo - SP
            </Address>
            <PhoneNumber>
              <WhatsAppButtonTop
                href="https://wa.me/5511967796576?text=Ol%C3%A1%2C%20NPA!%20Vim%20pelo%20site%20e%20quero%20um%20or%C3%A7amento.%20Podem%20me%20ajudar%3F"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => window.gtag('event', 'click_whatsapp', { event_category: 'contato', event_label: 'header' })}
              >
                <Phone
                  size={14}
                  style={{ marginRight: "6px" }}
                  aria-hidden="true"
                />
                Falar no WhatsApp
              </WhatsAppButtonTop>
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
          <Logo
            to="hero"
            smooth={true}
            duration={500}
            aria-label="Ir para seção inicial"
          >
            <img src={logo} alt="Logo da empresa NAPEDROANTONIO" />
          </Logo>

          <NavLinks ref={menuRef} $isMenuOpen={isMenuOpen}>
            {sections.map((sec, i) =>
              sec.subItems ? (
                <DropdownContainer
                  key={sec.id}
                  onMouseEnter={() =>
                    window.innerWidth > 992 && setActiveDropdown(sec.id)
                  }
                  onMouseLeave={() =>
                    window.innerWidth > 992 && setActiveDropdown(null)
                  }
                >
                  <NavLink
                    href=""
                    onClick={(e) => {
                      e.preventDefault();
                      if (window.innerWidth <= 992) {
                        setActiveDropdown(
                          activeDropdown === sec.id ? null : sec.id,
                        );
                      } else {
                        setIsMenuOpen(false);
                      }
                    }}
                    delay={i * 0.1}
                    $active={activeDropdown === sec.id}
                  >
                    {sec.name.toUpperCase()}
                    <ChevronDown
                      size={14}
                      style={{
                        transform:
                          activeDropdown === sec.id ? "rotate(180deg)" : "none",
                        transition: "transform 0.3s",
                      }}
                    />
                  </NavLink>
                  <DropdownMenu $isOpen={activeDropdown === sec.id}>
                    {sec.subItems.map((sub) => (
                      <DropdownItem
                        key={sub.id}
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          document
                            .getElementById(sub.id)
                            ?.scrollIntoView({ behavior: "smooth" });
                          setIsMenuOpen(false);
                          setActiveDropdown(null);
                        }}
                      >
                        {sub.name}
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </DropdownContainer>
              ) : (
                <NavLink
                  key={sec.id}
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById(sec.id)
                      ?.scrollIntoView({ behavior: "smooth" });
                    setIsMenuOpen(false);
                  }}
                  delay={i * 0.1}
                >
                  {sec.name.toUpperCase()}
                </NavLink>
              ),
            )}
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
