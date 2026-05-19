import React from "react";
import { trackWA, WA_BASE } from "../solar-theme";
import heroImg from "../../../assets/solar/images/hero/hero.webp";

interface HeroProps {
  title?: string;
  subtitle?: string;
  waMsg?: string;
  heroImage?: string;
}

const Hero: React.FC<HeroProps> = ({
  title = "Economize até 95% na sua conta de luz com a expertise da NPA",
  subtitle = "Consultoria boutique em energia solar para residências de alto padrão. Unimos eficiência técnica e estética arquitetônica.",
  waMsg: customWaMsg,
  heroImage = heroImg,
}) => {
  const defaultWaMsg = encodeURIComponent(
    "Olá, NPA! 👋 Vi o site de energia solar e gostaria de solicitar uma simulação gratuita. Podem me atender?",
  );
  const waMsg = customWaMsg ? encodeURIComponent(customWaMsg) : defaultWaMsg;

  return (
    <section className="relative h-[500px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover"
          alt="Instalação real de sistema fotovoltaico NPA"
          src={heroImage}
        />
        <div className="absolute inset-0 bg-primary/45"></div>
      </div>
      <div className="container-max mx-auto px-8 relative z-10 w-full">
        <div className="max-w-2xl animate-in slide-in-from-bottom-10 duration-1000">
          <h1 className="font-display-lg text-display-lg text-white mb-stack-md leading-tight">
            {title}
          </h1>
          <p className="font-body-lg text-body-lg text-white/80 mb-stack-lg">
            {subtitle}
          </p>
          <a
            href={`${WA_BASE}?text=${waMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWA("hero")}
            className="flex inline-flex items-center justify-center bg-secondary-container text-on-secondary-fixed font-label-caps text-label-caps px-8 py-5 rounded-none hover:scale-[1.02] transition-transform active:scale-95 shadow-xl select-none"
          >
            Solicitar simulação gratuita
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
