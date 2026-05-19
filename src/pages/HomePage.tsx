import React, { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import heroBusiness from "../assets/images/hero-empresarial.webp";
import heroSolar from "../assets/images/hero_solar_industrial.webp";
import heroRes from "../assets/images/hero-residencial.webp";
import Header from "./energia-solar/components/Header";

const WA = "https://api.whatsapp.com/send?phone=5511967796576";
const AUTOPLAY_MS = 6000;

const slides = [
  {
    id: "empresas",
    img: heroBusiness,
    eyebrow: "B2B · Corporativo",
    headline: "Reforma e Construção para Empresas em São Paulo",
    sub: "Obras comerciais com cronograma garantido, NF e ART. Orçamento em 24h.",
    cta: {
      label: "Solicitar análise estratégica",
      action: (nav: ReturnType<typeof useNavigate>) => nav("/empresas"),
    },
    ctaAlt: {
      label: "Ver soluções para empresas",
      action: (nav: ReturnType<typeof useNavigate>) => nav("/empresas"),
    },
  },
  {
    id: "solar",
    img: heroSolar,
    eyebrow: "Energia Solar · Alta Performance",
    headline: "Reduza até 95% da sua conta de energia",
    sub: "Instalação de energia solar em SP com garantia de 25 anos e financiamento disponível.",
    cta: {
      label: "Simular economia agora",
      action: (nav: ReturnType<typeof useNavigate>) => nav("/energia-solar"),
    },
    ctaAlt: {
      label: "Ver soluções em energia solar",
      action: (nav: ReturnType<typeof useNavigate>) => nav("/energia-solar"),
    },
  },
  {
    id: "residencial",
    img: heroRes,
    eyebrow: "Residencial · Alto Padrão",
    headline: "Reforma e Construção Residencial no Morumbi e São Paulo",
    sub: "Projetos de alto padrão com prazo garantido em contrato. Solicite visita técnica gratuita.",
    cta: {
      label: "Iniciar projeto residencial",
      action: (nav: ReturnType<typeof useNavigate>) => nav("/residencial"),
    },
    ctaAlt: {
      label: "Ver portfólio residencial",
      action: (nav: ReturnType<typeof useNavigate>) => nav("/residencial"),
    },
  },
];

const HeroSlider: React.FC = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef(0);

  const goTo = useCallback((idx: number) => {
    setCurrent(idx);
    setProgress(0);
  }, []);

  const next = useCallback(
    () => goTo((current + 1) % slides.length),
    [current, goTo],
  );

  // autoplay
  useEffect(() => {
    if (isPaused) return;
    intervalRef.current = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(intervalRef.current!);
  }, [isPaused, next]);

  // progress bar tick (every 60ms = ~100 ticks per slide)
  useEffect(() => {
    if (isPaused) return;
    progressRef.current = setInterval(() => {
      setProgress((p) => Math.min(p + 100 / (AUTOPLAY_MS / 60), 100));
    }, 60);
    return () => clearInterval(progressRef.current!);
  }, [isPaused, current]);

  // reset progress on slide change
  useEffect(() => {
    setProgress(0);
  }, [current]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const dx = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(dx) > 50)
      dx > 0 ? next() : goTo((current - 1 + slides.length) % slides.length);
  };

  const slide = slides[current];

  return (
    <section
      className="relative h-[85.5vh] min-h-[380px] flex items-center overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Background images with Ken Burns */}
      {slides.map((s, i) => (
        <div
          key={s.id}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0, zIndex: 0 }}
        >
          <img
            src={s.img}
            alt={s.eyebrow}
            className="w-full h-full object-cover"
            style={{
              transform: i === current ? "scale(1.06)" : "scale(1)",
              transition: "transform 8s ease-out",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right,rgba(5,20,36,0.95) 35%,rgba(5,20,36,0.6) 70%,rgba(5,20,36,0.3) 100%)",
            }}
          />
        </div>
      ))}

      {/* Slide content */}
      <div className="relative z-10 px-4 md:px-16 max-w-[1280px] mx-auto w-full">
        <div className="max-w-xl md:max-w-2xl">
          {/* eyebrow */}
          <p
            key={`ey-${current}`}
            className="text-[10px] md:text-xs font-black uppercase tracking-[0.25em] text-[#f9c03d] mb-3 md:mb-4 animate-[fadeSlide_0.5s_ease_forwards]"
          >
            {slide.eyebrow}
          </p>

          {/* headline */}
          <h1
            key={`h-${current}`}
            className="text-xl sm:text-2xl md:text-4xl font-black text-white uppercase leading-tight mb-3 md:mb-5 tracking-tight animate-[fadeSlide_0.5s_0.1s_ease_both]"
          >
            {slide.headline}
          </h1>

          {/* subheadline */}
          <p
            key={`s-${current}`}
            className="text-sm md:text-lg text-[#d3c5ae] mb-6 md:mb-10 leading-relaxed animate-[fadeSlide_0.5s_0.2s_ease_both]"
          >
            {slide.sub}
          </p>

          {/* CTAs */}
          <div
            key={`cta-${current}`}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 animate-[fadeSlide_0.5s_0.3s_ease_both]"
          >
            <button
              onClick={() => slide.cta.action(navigate)}
              className="bg-[#f9c03d] text-[#402d00] px-6 md:px-8 py-3 md:py-4 rounded font-bold md:font-black uppercase text-xs md:tracking-widest hover:scale-105 transition-all shadow-[0_0_25px_rgba(249,192,61,0.3)] whitespace-nowrap"
            >
              {slide.cta.label}
            </button>
            <button
              onClick={() => slide.ctaAlt.action(navigate)}
              className="border-2 border-[#f9c03d]/50 text-[#f9c03d] px-6 md:px-8 py-3 md:py-4 rounded font-bold uppercase text-xs md:tracking-widest hover:border-[#f9c03d] hover:bg-[#f9c03d]/10 transition-all whitespace-nowrap"
            >
              {slide.ctaAlt.label}
            </button>
          </div>
        </div>
      </div>

      {/* Dots + progress */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 md:gap-4">
        <div className="w-24 md:w-32 h-0.5 bg-white/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#f9c03d] rounded-full transition-none"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex gap-3">
          {slides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all ${i === current ? "w-4 md:w-6 h-1.5 md:h-2 bg-[#f9c03d]" : "w-2 h-2 bg-white/30 hover:bg-white/60"}`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Arrows - hidden on mobile */}
      <button
        onClick={() => goTo((current - 1 + slides.length) % slides.length)}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-white/20 items-center justify-center text-white hover:border-[#f9c03d] hover:text-[#f9c03d] transition-colors"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-white/20 items-center justify-center text-white hover:border-[#f9c03d] hover:text-[#f9c03d] transition-colors"
      >
        ›
      </button>
    </section>
  );
};

/* ─── Main Page ──────────────────────────────────────────── */
const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#051424] text-[#d4e4fa] font-['Inter',sans-serif] overflow-x-clip">
      <Header />

      {/* ── HERO SLIDER ─────────────────────────────────── */}
      <HeroSlider />

      {/* ── TRUST BAR ────────────────────────────────────── */}
      <section className="bg-[#0d1c2d] py-8 border-y border-[#4f4634]/30">
        <div className="max-w-[1280px] mx-auto px-8 md:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "+21 anos", label: "no mercado" },
              { value: "100%", label: "das obras no prazo" },
              { value: "Até 95%", label: "de economia na conta" },
              { value: "ROI", label: "em 2 a 5 anos" },
            ].map((s) => (
              <div
                key={s.label}
                className="p-4 hover:bg-[#122131] rounded-lg transition-colors"
              >
                <div className="text-2xl font-bold text-[#f9c03d] mb-1">
                  {s.value}
                </div>
                <div className="text-xs text-[#d3c5ae] uppercase tracking-widest">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ────────────────────────────────── */}
      <section className="py-12 md:py-20 bg-[#051424]">
        <div className="max-w-[1280px] mx-auto px-4 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-center">
            {/* RESIDENCIAL */}
            <div
              onClick={() => navigate("/residencial")}
              className="flex flex-col justify-end cursor-pointer group relative rounded overflow-hidden border border-[#f9c03d]/20 bg-[#201f20] p-6 md:p-8 hover:-translate-y-2 transition-all duration-500 min-h-[320px] md:min-h-[380px]"
            >
              <img
                src={heroRes}
                alt="Residencial"
                className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#201f20] via-[#201f20]/70 to-transparent" />
              {/* icon */}
              <div className="relative z-10 mb-5 text-[#f9c03d]">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" />
                  <path d="M9 21V12h6v9" />
                </svg>
              </div>
              <h3 className="relative z-10 text-2xl font-black text-[#e5e2e3] uppercase mb-6">
                RESIDENCIAL
              </h3>
              <p className="relative z-10 text-[#d1c5b4] text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Engenharia estrutural sob medida para projetos de alto padrão e
                vivência exclusiva.
              </p>
              <button className="relative z-10 border border-[#f9c03d] text-[#f9c03d] px-6 py-2 text-xs font-bold uppercase tracking-widest w-max hover:bg-[#f9c03d] hover:text-[#402d00] transition-all">
                EXPLORAR
              </button>
            </div>

            {/* B2B — HIGHLIGHT */}
            <div
              onClick={() => navigate("/empresas")}
              className="flex flex-col justify-end cursor-pointer group relative rounded overflow-hidden border-t-4 border-[#f9c03d] bg-[#353436] p-6 md:p-8 hover:-translate-y-2 transition-all duration-500 min-h-[340px] md:min-h-[420px] shadow-[0_0_25px_rgba(218,165,32,0.35)]"
            >
              <img
                src={heroBusiness}
                alt="Empresas"
                className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#353436] via-[#353436]/80 to-transparent" />
              <div className="absolute top-4 right-4 z-10">
                <span className="border border-[#f9c03d]/50 text-[#f9c03d] px-3 py-1 text-[9px] font-black uppercase tracking-[0.2em]">
                  PRIMARY FOCUS
                </span>
              </div>
              {/* icon */}
              <div className="relative z-10 mb-5 text-[#f9c03d]">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <rect x="2" y="7" width="20" height="14" rx="1" />
                  <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                  <line x1="12" y1="12" x2="12" y2="16" />
                  <line x1="10" y1="14" x2="14" y2="14" />
                </svg>
              </div>
              <h3 className="relative z-10 text-3xl font-black text-[#e5e2e3] uppercase mb-1">
                NEGÓCIOS (B2B)
              </h3>
              <p className="relative z-10 text-[#f9c03d] text-xs font-bold uppercase tracking-widest mb-3">
                MAXIMIZE A PERFORMANCE FINANCEIRA
              </p>
              <p className="relative z-10 text-[#d1c5b4] text-sm leading-relaxed mb-8">
                Infraestrutura corporativa projetada para rápida eficiência
                operacional.
              </p>
              <button className="relative z-10 bg-[#f9c03d] text-[#412d00] px-6 py-4 text-sm font-black uppercase tracking-widest w-full hover:brightness-110 hover:scale-[0.98] transition-all">
                SEJA NOSSO PARCEIRO
              </button>
            </div>

            {/* ENERGIA SOLAR */}
            <div
              onClick={() => navigate("/energia-solar")}
              className="flex flex-col justify-end cursor-pointer group relative rounded overflow-hidden border border-[#f9c03d]/20 bg-[#201f20] p-6 md:p-8 hover:-translate-y-2 transition-all duration-500 min-h-[320px] md:min-h-[380px]"
            >
              <img
                src={heroSolar}
                alt="Energia Solar"
                className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#201f20] via-[#201f20]/70 to-transparent" />
              {/* icon */}
              <div className="relative z-10 mb-4 md:mb-5 text-[#f9c03d]">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </div>
              <h3 className="relative z-10 text-xl md:text-2xl font-black text-[#e5e2e3] uppercase mb-4 md:mb-6">
                ENERGIA SOLAR
              </h3>
              <p className="relative z-10 text-[#d1c5b4] text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Captura de energia de última geração para instalações de escala
                industrial e comercial.
              </p>
              <button className="relative z-10 border border-[#f9c03d] text-[#f9c03d] px-6 py-2 text-xs font-bold uppercase tracking-widest w-max hover:bg-[#f9c03d] hover:text-[#402d00] transition-all">
                VER SOLUÇÕES
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY NPA ──────────────────────────────────────── */}
      <section className="py-12 md:py-20 bg-[#010f1f]">
        <div className="max-w-[1280px] mx-auto px-4 md:px-16">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-black uppercase mb-4">
              Por que escolher a NPA?
            </h2>
            <div className="w-24 h-1 bg-[#f9c03d] mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "💰",
                title: "Obra como Investimento",
                desc: "Engenharia pensada como investimento para maximizar seu retorno.",
              },
              {
                icon: "🛠️",
                title: "Prazo e Orçamento Garantidos",
                desc: "Gestão rigorosa de prazos e orçamentos com compliance auditável.",
              },
              {
                icon: "⚡",
                title: "Solar Integrado desde o Projeto",
                desc: "Integração completa com fotovoltaico desde a fundação do projeto.",
              },
              {
                icon: "📈",
                title: "Valorização do Seu Imóvel",
                desc: "Reduz payback e aumenta o valor venal do imóvel.",
              },
            ].map((i) => (
              <div
                key={i.title}
                className="p-8 border border-[#4f4634]/20 rounded hover:border-[#f9c03d]/50 transition-colors"
              >
                <div className="text-4xl mb-4">{i.icon}</div>
                <h4 className="text-lg font-bold mb-3">{i.title}</h4>
                <p className="text-[#d3c5ae] text-sm leading-relaxed">
                  {i.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOLAR SECTION ────────────────────────────────── */}
      <section className="py-12 md:py-20 bg-[#051424]">
        <div className="max-w-[1280px] mx-auto px-4 md:px-16">
          <div className="bg-[#122131] rounded-xl border border-white/5 p-6 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 text-[150px] md:text-[300px] text-[#f9c03d]/5 leading-none select-none pointer-events-none">
              ☀
            </div>
            <div className="relative z-10">
              <h2 className="text-2xl md:text-5xl font-black uppercase leading-tight mb-3 md:mb-4">
                Reduza até 95% da sua conta de energia
              </h2>
              <p className="text-[#d3c5ae] text-base md:text-lg mb-6 md:mb-10 max-w-2xl">
                Economia sustentável com tecnologia de ponta para diferentes
                perfis de consumo.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {[
                  {
                    title: "Residencial",
                    desc: "Conforto total sem preocupação com a fatura mensal.",
                    link: "Simular economia",
                    path: "/energia-solar/residencial",
                  },
                  {
                    title: "Empresas",
                    desc: "Transforme um gasto fixo em investimento no seu negócio.",
                    link: "Estudo de viabilidade",
                    path: "/energia-solar/empresas",
                  },
                  {
                    title: "Condomínios",
                    desc: "Redução drástica na taxa através de usinas compartilhadas.",
                    link: "Falar com síndico",
                    path: "/energia-solar/condominios",
                  },
                ].map((c) => (
                  <div key={c.title} className="flex flex-col">
                    <h5 className="text-lg md:text-xl font-bold text-[#f9c03d] mb-1 md:mb-2">
                      {c.title}
                    </h5>
                    <p className="text-[#d3c5ae] text-sm mb-3 md:mb-4 flex-grow">
                      {c.desc}
                    </p>
                    <button
                      onClick={() => navigate(c.path)}
                      className="text-[#f9c03d] font-bold underline underline-offset-4 hover:text-white transition-colors text-sm self-start"
                    >
                      {c.link}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONVERSION CTA ───────────────────────────────── */}
      <section className="py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#273647] to-[#051424]" />
        <div className="max-w-[1280px] mx-auto px-4 md:px-16 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-black uppercase mb-3 md:mb-4">
              Pronto para elevar o patamar do seu projeto?
            </h2>
            <p className="text-[#d3c5ae] text-base md:text-lg mb-6 md:mb-10">
              Fale com um especialista e descubra como reduzir custos e aumentar
              seu retorno.
            </p>
            <button
              onClick={() => window.open(WA, "_blank")}
              className="bg-[#f9c03d] text-[#402d00] px-8 md:px-12 py-4 md:py-5 rounded font-black uppercase text-xs md:tracking-[0.2em] hover:scale-105 transition-transform shadow-[0_0_25px_rgba(249,192,61,0.3)]"
            >
              Solicitar análise
            </button>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────── */}
      <footer className="bg-[#010f1f] py-6 md:py-8 border-t border-[#4f4634]">
        <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-16 max-w-[1280px] mx-auto gap-4 md:gap-6">
          <div className="text-center md:text-left">
            <div className="text-base md:text-lg font-black">
              NPA Engenharia
            </div>
            <p className="text-[#d3c5ae] text-xs mt-1">
              © 2025 NPA Engenharia e Soluções Energéticas. Todos os direitos
              reservados.
            </p>
          </div>
          <div className="flex gap-4 md:gap-6">
            {["Política de Privacidade", "Termos de Uso"].map((t) => (
              <a
                key={t}
                href="#"
                className="text-[#d3c5ae] text-xs hover:text-[#f9c03d] transition-colors"
              >
                {t}
              </a>
            ))}
          </div>
        </div>
      </footer>

      {/* ── KEYFRAMES (Tailwind doesn't ship fadeSlide, inject inline) ── */}
      <style>{`
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-\\[fadeSlide_0\\.5s_ease_forwards\\]  { animation: fadeSlide 0.5s ease forwards; }
        .animate-\\[fadeSlide_0\\.5s_0\\.1s_ease_both\\] { animation: fadeSlide 0.5s 0.1s ease both; }
        .animate-\\[fadeSlide_0\\.5s_0\\.2s_ease_both\\] { animation: fadeSlide 0.5s 0.2s ease both; }
        .animate-\\[fadeSlide_0\\.5s_0\\.3s_ease_both\\] { animation: fadeSlide 0.5s 0.3s ease both; }
      `}</style>
    </div>
  );
};

export default HomePage;
