// src/components/AllServices.tsx
import React, { useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { colors, breakpoints } from "../theme";

// ============ DATA ============

interface ServiceData {
  emoji: string;
  title: string;
  group: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  whatsappMsg: string;
}

const servicesData: ServiceData[] = [
  // Reformas de Alta Procura
  {
    emoji: "🚿",
    title: "Reforma de Banheiro",
    group: "Reformas",
    shortDesc: "Modernize seu banheiro com acabamento de alto padrão.",
    fullDesc: "Realizamos reformas completas de banheiros: troca de revestimentos, hidráulica, box de vidro, iluminação e acessórios. Do projeto até a entrega.",
    benefits: ["Demolição e remoção de entulho", "Instalação de pisos e azulejos", "Troca de louças e metais", "Box de vidro temperado", "Iluminação e tomadas"],
    whatsappMsg: "Olá! Gostaria de solicitar um orçamento para *Reforma de Banheiro*.",
  },
  {
    emoji: "🍳",
    title: "Reforma de Cozinha",
    group: "Reformas",
    shortDesc: "Cozinhas funcionais e modernas do zero.",
    fullDesc: "Reformamos cozinhas completas, incluindo revestimentos, bancadas, instalações hidráulicas e elétricas, para um ambiente moderno e funcional.",
    benefits: ["Troca de piso e revestimento", "Bancadas em quartzo ou granito", "Pontos de gás e hidráulica", "Instalações elétricas", "Pintura e acabamentos"],
    whatsappMsg: "Olá! Gostaria de solicitar um orçamento para *Reforma de Cozinha*.",
  },
  {
    emoji: "🛋️",
    title: "Reforma de Sala",
    group: "Reformas",
    shortDesc: "Transformação completa de ambientes de convivência.",
    fullDesc: "Revitalizamos salas de estar e jantar com novas texturas, pisos, iluminação e acabamentos que transformam o ambiente sem quebrar o orçamento.",
    benefits: ["Troca ou restauração de pisos", "Pintura e textura decorativa", "Iluminação embutida", "Instalações elétricas", "Revestimentos e molduras"],
    whatsappMsg: "Olá! Gostaria de solicitar um orçamento para *Reforma de Sala*.",
  },
  {
    emoji: "🌿",
    title: "Reforma de Quintal",
    group: "Reformas",
    shortDesc: "Áreas externas e de lazer com qualidade.",
    fullDesc: "Criamos e reformamos quintais, áreas de lazer e espaços gourmet. Piso, muro, cobertura e paisagismo integrados em um único projeto.",
    benefits: ["Pavimentação e calçadas", "Muros e cercas", "Cobertura e pergolado", "Área gourmet e churrasqueira", "Drenagem e impermeabilização"],
    whatsappMsg: "Olá! Gostaria de solicitar um orçamento para *Reforma de Quintal*.",
  },
  {
    emoji: "🏠",
    title: "Reforma de Fachada",
    group: "Reformas",
    shortDesc: "Nova identidade para o exterior do seu imóvel.",
    fullDesc: "Reformamos fachadas residenciais e comerciais: pintura, revestimentos em pastilha, porcelanato, texturas e recuperação estrutural.",
    benefits: ["Lavagem e preparação", "Pintura específica para exterior", "Revestimentos modernos", "Recuperação de trincas", "Impermeabilização"],
    whatsappMsg: "Olá! Gostaria de solicitar um orçamento para *Reforma de Fachada*.",
  },
  // Serviços Técnicos
  {
    emoji: "⚡",
    title: "Elétrica",
    group: "Serviços Técnicos",
    shortDesc: "Instalações e manutenção elétrica residencial e comercial.",
    fullDesc: "Projetos elétricos completos: quadro de distribuição, tomadas, disjuntores, aterramento e iluminação. Trabalho com garantia e segurança.",
    benefits: ["Instalação de quadros elétricos", "Tomadas e interruptores", "Iluminação interna e externa", "Aterramento e SPDA", "Laudo de conformidade"],
    whatsappMsg: "Olá! Gostaria de solicitar um orçamento para *Serviço Elétrico*.",
  },
  {
    emoji: "🔧",
    title: "Hidráulica",
    group: "Serviços Técnicos",
    shortDesc: "Instalações e reparos hidráulicos com garantia.",
    fullDesc: "Instalamos e reparamos sistemas hidráulicos completos: encanamento, aquecimento, colunas e detecção de vazamentos sem destruição.",
    benefits: ["Detecção de vazamentos", "Instalação de tubulações", "Aquecedores e chuveiros", "Colunas de água e esgoto", "Limpeza de caixas d'água"],
    whatsappMsg: "Olá! Gostaria de solicitar um orçamento para *Serviço Hidráulico*.",
  },
  {
    emoji: "🎨",
    title: "Pintura",
    group: "Serviços Técnicos",
    shortDesc: "Pintura residencial e comercial de acabamento premium.",
    fullDesc: "Pintura interna e externa com preparação completa de superfície, massa corrida, textura e selação para um resultado duradouro e elegante.",
    benefits: ["Preparação e lixamento", "Massa corrida e seladora", "Pintura interna e externa", "Texturas e grafismos", "Tintas de alta qualidade"],
    whatsappMsg: "Olá! Gostaria de solicitar um orçamento para *Pintura*.",
  },
  {
    emoji: "🧱",
    title: "Drywall e Gesso",
    group: "Serviços Técnicos",
    shortDesc: "Divisórias, forros e molduras de gesso.",
    fullDesc: "Instalamos divisórias em drywall, forros de gesso e drywalls com excelente acabamento, acústica e isolamento térmico.",
    benefits: ["Paredes em drywall", "Forros de gesso acartonado", "Sancas e molduras", "Isolamento acústico", "Acabamento e pintura"],
    whatsappMsg: "Olá! Gostaria de solicitar um orçamento para *Drywall e Gesso*.",
  },
  {
    emoji: "💧",
    title: "Impermeabilização",
    group: "Serviços Técnicos",
    shortDesc: "Proteção contra infiltrações e umidade.",
    fullDesc: "Impermeabilizamos lajes, terraços, banheiros, caixas d'água e fundações com materiais de primeira linha e garantia de execução.",
    benefits: ["Impermeabilização de laje", "Terraços e calçadas", "Banheiros e cozinhas", "Caixas d'água e piscinas", "Garantia de execução"],
    whatsappMsg: "Olá! Gostaria de solicitar um orçamento para *Impermeabilização*.",
  },
  {
    emoji: "🪟",
    title: "Pisos e Revestimentos",
    group: "Serviços Técnicos",
    shortDesc: "Aplicação de pisos cerâmicos, vinílicos e porcelanatos.",
    fullDesc: "Instalamos todos os tipos de pisos e revestimentos: porcelanato, cerâmica, piso vinílico, laminado e mármore com perfeito nivelamento.",
    benefits: ["Nivelamento da base", "Porcelanato e cerâmica", "Piso vinílico e laminado", "Rodapés e arremates", "Rejuntamento e acabamento"],
    whatsappMsg: "Olá! Gostaria de solicitar um orçamento para *Pisos e Revestimentos*.",
  },
  // Obras e Manutenção
  {
    emoji: "🔨",
    title: "Pequenas Obras",
    group: "Obras e Manutenção",
    shortDesc: "Obras pontuais rápidas com execução de qualidade.",
    fullDesc: "Executamos pequenas obras como ampliações, aberturas de vãos, levantamento de paredes e adaptações estruturais com agilidade.",
    benefits: ["Levantamento de paredes", "Abertura de vãos e janelas", "Pequenas ampliações", "Demolições controladas", "Reparos em estruturas"],
    whatsappMsg: "Olá! Gostaria de solicitar um orçamento para *Pequenas Obras*.",
  },
  {
    emoji: "🏗️",
    title: "Manutenção Predial",
    group: "Obras e Manutenção",
    shortDesc: "Conservação e manutenção de edifícios e condomínios.",
    fullDesc: "Oferecemos serviços contínuos de manutenção predial: pintura, hidráulica, elétrica e estrutura, com contratos mensais ou avulsos.",
    benefits: ["Visita técnica periódica", "Elétrica e hidráulica", "Pintura e conservação", "Serviços preventivos", "Contratos flexíveis"],
    whatsappMsg: "Olá! Gostaria de solicitar informações sobre *Manutenção Predial*.",
  },
  {
    emoji: "🛠️",
    title: "Reparos Estruturais",
    group: "Obras e Manutenção",
    shortDesc: "Correção de trincas, fissuras e problemas estruturais.",
    fullDesc: "Identificamos e corrigimos trincas, fissuras, infiltrações e outros problemas estruturais com produtos adequados e laudo técnico.",
    benefits: ["Diagnóstico técnico", "Tratamento de trincas", "Reforço estrutural", "Recuperação de concreto", "Laudo e garantia"],
    whatsappMsg: "Olá! Gostaria de solicitar um orçamento para *Reparos Estruturais*.",
  },
  // Comercial e Autoridade
  {
    emoji: "🏪",
    title: "Reforma Comercial",
    group: "Comercial",
    shortDesc: "Reformas de lojas, escritórios e espaços comerciais.",
    fullDesc: "Reformamos espaços comerciais completos — lojas, restaurantes, escritórios — com layout otimizado, acessibilidade e acabamentos modernos.",
    benefits: ["Projeto de layout", "Elétrica e ar condicionado", "Pisos e revestimentos", "Fachada e vitrine", "Prazo definido e contrato"],
    whatsappMsg: "Olá! Gostaria de solicitar um orçamento para *Reforma Comercial*.",
  },
  {
    emoji: "📋",
    title: "Gerenciamento de Obra",
    group: "Comercial",
    shortDesc: "Gestão profissional da sua obra do início ao fim.",
    fullDesc: "Gerenciamos sua obra por completo: cronograma, equipe, materiais e qualidade. Você acompanha tudo com relatórios periódicos e transparência total.",
    benefits: ["Cronograma detalhado", "Controle de materiais", "Equipe especializada", "Relatórios de progresso", "Entrega com qualidade"],
    whatsappMsg: "Olá! Gostaria de saber mais sobre *Gerenciamento de Obra*.",
  },
];

// ============ STYLES ============

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const SectionWrapper = styled.section`
  background: ${colors.background};
  padding: 80px 20px;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 800;
  color: ${colors.primary};
  margin-bottom: 8px;
  letter-spacing: 1px;
  text-transform: uppercase;
  @media (max-width: ${breakpoints.mobileMax}) { font-size: 1.6rem; }
`;

const SectionSubtitle = styled.p`
  color: ${colors.textSecondary};
  font-size: 1rem;
  margin-bottom: 60px;
  max-width: 560px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

const GroupLabel = styled.h3`
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: ${colors.secondary};
  margin: 50px 0 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  &::before, &::after {
    content: "";
    flex: 1;
    height: 1px;
    background: ${colors.secondary}44;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  max-width: 1100px;
  margin: 0 auto;
  @media (max-width: ${breakpoints.tabletMax}) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: ${breakpoints.mobileMax}) { grid-template-columns: repeat(2, 1fr); gap: 10px; }
`;

const Card = styled.button`
  background: white;
  border: 1px solid #e8e8e8;
  border-radius: 12px;
  padding: 20px 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: all 0.25s ease;
  text-align: center;
  &:hover {
    transform: translateY(-4px);
    border-color: ${colors.secondary};
    box-shadow: 0 8px 20px rgba(218, 165, 32, 0.15);
  }
`;

const CardEmoji = styled.span`
  font-size: 2rem;
`;

const CardTitle = styled.span`
  font-size: 0.85rem;
  font-weight: 700;
  color: ${colors.primary};
  line-height: 1.3;
`;

const CardDesc = styled.span`
  font-size: 0.75rem;
  color: ${colors.textSecondary};
  line-height: 1.4;
`;

const CardCta = styled.span`
  margin-top: 6px;
  font-size: 0.75rem;
  font-weight: 700;
  color: ${colors.secondary};
`;

// ===== MODAL =====
const Overlay = styled.div<{ open: boolean }>`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.65);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  opacity: ${p => p.open ? 1 : 0};
  pointer-events: ${p => p.open ? 'all' : 'none'};
  transition: opacity 0.3s ease;
`;

const Modal = styled.div<{ open: boolean }>`
  background: white;
  border-radius: 16px;
  max-width: 520px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  padding: 36px;
  position: relative;
  ${p => p.open && css`animation: ${fadeIn} 0.35s ease;`}
  @media (max-width: ${breakpoints.mobileMax}) { padding: 24px; }
`;

const ModalClose = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: #f0f0f0;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  font-size: 1.1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover { background: #e0e0e0; }
`;

const ModalEmoji = styled.div`
  font-size: 3rem;
  margin-bottom: 12px;
`;

const ModalGroup = styled.span`
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${colors.secondary};
  background: ${colors.secondary}15;
  padding: 4px 12px;
  border-radius: 20px;
`;

const ModalTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 800;
  color: ${colors.primary};
  margin: 14px 0 10px;
`;

const ModalDesc = styled.p`
  color: ${colors.textSecondary};
  line-height: 1.7;
  margin-bottom: 20px;
`;

const BenefitsList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 28px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const BenefitItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.9rem;
  color: ${colors.textPrimary};
  &::before {
    content: "✓";
    color: ${colors.secondary};
    font-weight: 900;
    font-size: 0.85rem;
    background: ${colors.secondary}18;
    border-radius: 50%;
    width: 22px;
    height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
`;

const WhatsAppButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: #25D366;
  color: white;
  font-weight: 700;
  font-size: 1rem;
  padding: 14px 20px;
  border-radius: 10px;
  text-decoration: none;
  transition: background 0.2s ease;
  &:hover { background: #1fba59; }
`;

// ============ COMPONENT ============

const groupOrder = ["Reformas", "Serviços Técnicos", "Obras e Manutenção", "Comercial"];

export default function AllServices() {
  const [selected, setSelected] = useState<ServiceData | null>(null);

  const groups = groupOrder.map(g => ({
    label: g,
    items: servicesData.filter(s => s.group === g),
  }));

  const close = () => setSelected(null);

  const waMsgEncoded = selected
    ? encodeURIComponent(selected.whatsappMsg)
    : "";

  return (
    <>
      <SectionWrapper id="all-services">
        <SectionTitle>Todos os Nossos Serviços</SectionTitle>
        <SectionSubtitle>
          Clique em qualquer serviço para ver detalhes e solicitar um orçamento diretamente pelo WhatsApp.
        </SectionSubtitle>

        <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "left" }}>
          {groups.map(({ label, items }) => (
            <div key={label}>
              <GroupLabel>{label}</GroupLabel>
              <ServicesGrid>
                {items.map(service => (
                  <Card key={service.title} onClick={() => setSelected(service)} aria-label={`Abrir detalhes: ${service.title}`}>
                    <CardEmoji>{service.emoji}</CardEmoji>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDesc>{service.shortDesc}</CardDesc>
                    <CardCta>Ver detalhes →</CardCta>
                  </Card>
                ))}
              </ServicesGrid>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Modal */}
      <Overlay open={!!selected} onClick={close}>
        <Modal open={!!selected} onClick={e => e.stopPropagation()}>
          <ModalClose onClick={close} aria-label="Fechar">✕</ModalClose>
          {selected && (
            <>
              <ModalEmoji>{selected.emoji}</ModalEmoji>
              <ModalGroup>{selected.group}</ModalGroup>
              <ModalTitle>{selected.title}</ModalTitle>
              <ModalDesc>{selected.fullDesc}</ModalDesc>
              <BenefitsList>
                {selected.benefits.map(b => (
                  <BenefitItem key={b}>{b}</BenefitItem>
                ))}
              </BenefitsList>
              <WhatsAppButton
                href={`https://wa.me/5511980743311?text=${waMsgEncoded}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                💬 Solicitar Orçamento no WhatsApp
              </WhatsAppButton>
            </>
          )}
        </Modal>
      </Overlay>
    </>
  );
}
