import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { trackWA, WA_BASE } from "../solar-theme";
import logo from "../../../assets/images/new_npa_logo.png";
import { Menu, X } from "lucide-react";

interface NavSection {
  label: string;
  id: string;
  to?: string;
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const getNavLinks = (): NavSection[] => {
    return [
      { label: "Início", id: "home", to: "/" },
      { label: "Residencial", id: "residencial", to: "/residencial" },
      { label: "Empresas", id: "empresas", to: "/empresas" },
      { label: "Hub Solar", id: "solar", to: "/energia-solar" },
    ];
  };

  const navLinks = getNavLinks();

  const getWhatsAppMessage = () => {
    let msg =
      "Olá! Gostaria de entender como vocês trabalham com projetos e orçamentos.";
    if (location.pathname === "/empresas") {
      msg =
        "Olá! Gostaria de uma consultoria B2B estratégica para minha empresa. Foco em ROI e prazos.";
    } else if (location.pathname.startsWith("/energia-solar")) {
      msg =
        "Olá, NPA! 👋 Vi o site de energia solar e gostaria de solicitar uma simulação gratuita.";
    } else if (location.pathname === "/residencial") {
      msg =
        "Olá! Gostaria de um orçamento para construção ou reforma residencial.";
    }
    return encodeURIComponent(msg);
  };

  const waMsg = getWhatsAppMessage();

  const handleNavClick = (link: NavSection) => {
    setIsMenuOpen(false);
    if (link.to) {
      navigate(link.to);
    } else if (link.id) {
      const element = document.getElementById(link.id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <header className="bg-white top-0 sticky z-50 border-b border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] w-full w-full">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center h-16.5 px-8 w-full">
        {/* Logo */}
        <div
          className="flex items-center cursor-pointer"
          onClick={() => {
            navigate("/");
            setIsMenuOpen(false);
          }}
        >
          <img src={logo} alt="NPA Solar" className="h-24 w-34 pt-2" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 mt-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link)}
              className="font-headline-lg uppercase text-sm font-bold text-on-primary-fixed-variant hover:text-secondary-fixed-dim transition-colors duration-300"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-4 items-center">
          <a
            href={`${WA_BASE}?text=${waMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWA("header")}
            className="bg-secondary-container text-white font-headline-md uppercase text-sm font-bold px-6 py-3 hover:bg-secondary-fixed transition-all shadow-lg select-none flex items-center justify-center"
          >
            Simulação Grátis
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-primary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-[4.125rem] left-0 w-full bg-white shadow-xl flex flex-col p-6 animate-in slide-in-from-top-4">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link)}
                className="font-headline-lg tracking-widest uppercase text-sm font-bold text-on-primary-fixed-variant hover:text-secondary-fixed-dim text-left"
              >
                {link.label}
              </button>
            ))}
            <div className="flex flex-col gap-4 mt-6">
              <a
                href={`${WA_BASE}?text=${waMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWA("header_mobile")}
                className="text-center bg-secondary-container text-on-secondary-fixed font-headline-md tracking-widest uppercase text-sm font-bold px-6 py-4 shadow-lg"
              >
                Simulação Grátis
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
