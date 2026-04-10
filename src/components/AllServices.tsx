// src/components/AllServices.tsx
import React, { useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { colors, breakpoints } from "../theme";

// ============ IMAGE IMPORTS ============
import imgBanheiro        from "../assets/images/services/srv-banheiro.jpeg";
import imgCozinha         from "../assets/images/services/srv-cozinha.jpeg";
import imgSala            from "../assets/images/services/srv-sala.jpeg";
import imgQuintal         from "../assets/images/services/srv.quintal.png";
import imgFachada         from "../assets/images/services/srv-fachada.jpeg";
import imgEletrica        from "../assets/images/services/srv-eletrica.jpeg";
import imgHidraulica      from "../assets/images/services/srv-hidraulica.png";
import imgPintura         from "../assets/images/services/srv-pintura.jpeg";
import imgDrywall         from "../assets/images/services/srv-drywall.jpeg";
import imgImperm          from "../assets/images/services/srv-impermeabilizaca.jpeg";
import imgPisos           from "../assets/images/services/srv-pisos.jpeg";
import imgPequeOb         from "../assets/images/services/srv-pequenas-obras.jpeg";
import imgManutencao      from "../assets/images/services/srv-manutencao.jpeg";
import imgReparos         from "../assets/images/services/srv-reparos.jpeg";
import imgComercial       from "../assets/images/services/srv-comercial.jpeg";
import imgGerenciamento   from "../assets/images/services/srv-gerenciamento.jpeg";

// ============ DATA ============

interface ServiceData {
  image: string;
  title: string;
  group: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  whatsappMsg: string;
}

const servicesData: ServiceData[] = [
  // Reformas
  { image: imgBanheiro, title: "Reforma de Banheiro", group: "Reformas", shortDesc: "Modernize com acabamento premium.", fullDesc: "Reformas completas de banheiros: revestimentos, hidráulica, box de vidro, iluminação e acessórios. Do projeto até a entrega.", benefits: ["Demolição e remoção de entulho", "Instalação de pisos e azulejos", "Troca de louças e metais", "Box de vidro temperado", "Iluminação e tomadas"], whatsappMsg: "Olá! Gostaria de solicitar um orçamento para *Reforma de Banheiro*." },
  { image: imgCozinha,  title: "Reforma de Cozinha",  group: "Reformas", shortDesc: "Cozinhas funcionais e modernas.", fullDesc: "Reformas completas de cozinhas, incluindo revestimentos, bancadas, instalações hidráulicas e elétricas.", benefits: ["Troca de piso e revestimento", "Bancadas em quartzo ou granito", "Pontos de gás e hidráulica", "Instalações elétricas", "Pintura e acabamentos"], whatsappMsg: "Olá! Gostaria de solicitar um orçamento para *Reforma de Cozinha*." },
  { image: imgSala,     title: "Reforma de Sala",     group: "Reformas", shortDesc: "Ambientes de convivência renovados.", fullDesc: "Revitalizamos salas com novas texturas, pisos, iluminação e acabamentos que transformam o ambiente.", benefits: ["Troca ou restauração de pisos", "Pintura e textura decorativa", "Iluminação embutida", "Instalações elétricas", "Revestimentos e molduras"], whatsappMsg: "Olá! Gostaria de solicitar um orçamento para *Reforma de Sala*." },
  { image: imgQuintal,  title: "Reforma de Quintal",  group: "Reformas", shortDesc: "Áreas externas e de lazer.", fullDesc: "Criamos e reformamos quintais, áreas de lazer e espaços gourmet com piso, muro, cobertura e paisagismo.", benefits: ["Pavimentação e calçadas", "Muros e cercas", "Cobertura e pergolado", "Área gourmet e churrasqueira", "Drenagem e impermeabilização"], whatsappMsg: "Olá! Gostaria de solicitar um orçamento para *Reforma de Quintal*." },
  { image: imgFachada,  title: "Reforma de Fachada",  group: "Reformas", shortDesc: "Nova identidade para o exterior.", fullDesc: "Reformamos fachadas com pintura, revestimentos em pastilha, porcelanato, texturas e recuperação estrutural.", benefits: ["Lavagem e preparação", "Pintura específica para exterior", "Revestimentos modernos", "Recuperação de trincas", "Impermeabilização"], whatsappMsg: "Olá! Gostaria de solicitar um orçamento para *Reforma de Fachada*." },
  // Serviços Técnicos
  { image: imgEletrica,  title: "Elétrica",               group: "Técnicos", shortDesc: "Instalações elétricas com garantia.", fullDesc: "Projetos elétricos completos: quadro de distribuição, tomadas, disjuntores, aterramento e iluminação.", benefits: ["Instalação de quadros elétricos", "Tomadas e interruptores", "Iluminação interna e externa", "Aterramento e SPDA", "Laudo de conformidade"], whatsappMsg: "Olá! Gostaria de solicitar um orçamento para *Serviço Elétrico*." },
  { image: imgHidraulica, title: "Hidráulica",             group: "Técnicos", shortDesc: "Reparos hidráulicos com garantia.", fullDesc: "Instalamos e reparamos sistemas hidráulicos completos: encanamento, aquecimento, colunas e detecção de vazamentos.", benefits: ["Detecção de vazamentos", "Instalação de tubulações", "Aquecedores e chuveiros", "Colunas de água e esgoto", "Limpeza de caixas d'água"], whatsappMsg: "Olá! Gostaria de solicitar um orçamento para *Serviço Hidráulico*." },
  { image: imgPintura,    title: "Pintura",                group: "Técnicos", shortDesc: "Acabamento premium residencial.", fullDesc: "Pintura interna e externa com preparação completa, massa corrida, textura e selação para resultado duradouro.", benefits: ["Preparação e lixamento", "Massa corrida e seladora", "Pintura interna e externa", "Texturas e grafismos", "Tintas de alta qualidade"], whatsappMsg: "Olá! Gostaria de solicitar um orçamento para *Pintura*." },
  { image: imgDrywall,    title: "Drywall e Gesso",        group: "Técnicos", shortDesc: "Divisórias, forros e molduras.", fullDesc: "Instalamos divisórias em drywall, forros de gesso com acabamento, acústica e isolamento térmico.", benefits: ["Paredes em drywall", "Forros de gesso acartonado", "Sancas e molduras", "Isolamento acústico", "Acabamento e pintura"], whatsappMsg: "Olá! Gostaria de solicitar um orçamento para *Drywall e Gesso*." },
  { image: imgImperm,     title: "Impermeabilização",      group: "Técnicos", shortDesc: "Proteção contra infiltrações.", fullDesc: "Impermeabilizamos lajes, terraços, banheiros, caixas d'água e fundações com materiais de primeira linha.", benefits: ["Impermeabilização de laje", "Terraços e calçadas", "Banheiros e cozinhas", "Caixas d'água e piscinas", "Garantia de execução"], whatsappMsg: "Olá! Gostaria de solicitar um orçamento para *Impermeabilização*." },
  { image: imgPisos,      title: "Pisos e Revestimentos",  group: "Técnicos", shortDesc: "Porcelanato, cerâmica e vinílico.", fullDesc: "Instalamos todos os tipos de pisos e revestimentos com perfeito nivelamento e acabamento.", benefits: ["Nivelamento da base", "Porcelanato e cerâmica", "Piso vinílico e laminado", "Rodapés e arremates", "Rejuntamento e acabamento"], whatsappMsg: "Olá! Gostaria de solicitar um orçamento para *Pisos e Revestimentos*." },
  // Obras e Manutenção
  { image: imgPequeOb,    title: "Pequenas Obras",         group: "Obras", shortDesc: "Obras pontuais com qualidade.", fullDesc: "Executamos pequenas obras como ampliações, aberturas de vãos, levantamento de paredes e adaptações.", benefits: ["Levantamento de paredes", "Abertura de vãos e janelas", "Pequenas ampliações", "Demolições controladas", "Reparos em estruturas"], whatsappMsg: "Olá! Gostaria de solicitar um orçamento para *Pequenas Obras*." },
  { image: imgManutencao, title: "Manutenção Predial",      group: "Obras", shortDesc: "Conservação de edifícios.", fullDesc: "Serviços contínuos de manutenção predial: pintura, hidráulica, elétrica e estrutura, com contratos mensais ou avulsos.", benefits: ["Visita técnica periódica", "Elétrica e hidráulica", "Pintura e conservação", "Serviços preventivos", "Contratos flexíveis"], whatsappMsg: "Olá! Gostaria de solicitar informações sobre *Manutenção Predial*." },
  { image: imgReparos,    title: "Reparos Estruturais",     group: "Obras", shortDesc: "Correção de trincas e fissuras.", fullDesc: "Identificamos e corrigimos trincas, fissuras, infiltrações e problemas estruturais com laudo técnico.", benefits: ["Diagnóstico técnico", "Tratamento de trincas", "Reforço estrutural", "Recuperação de concreto", "Laudo e garantia"], whatsappMsg: "Olá! Gostaria de solicitar um orçamento para *Reparos Estruturais*." },
  // Comercial
  { image: imgComercial,     title: "Reforma Comercial",      group: "Comercial", shortDesc: "Lojas, escritórios e espaços.", fullDesc: "Reformamos espaços comerciais completos com layout otimizado, acessibilidade e acabamentos modernos.", benefits: ["Projeto de layout", "Elétrica e ar condicionado", "Pisos e revestimentos", "Fachada e vitrine", "Prazo definido e contrato"], whatsappMsg: "Olá! Gostaria de solicitar um orçamento para *Reforma Comercial*." },
  { image: imgGerenciamento, title: "Gerenciamento de Obra",  group: "Comercial", shortDesc: "Gestão da obra do início ao fim.", fullDesc: "Gerenciamos sua obra por completo: cronograma, equipe, materiais e qualidade com relatórios periódicos.", benefits: ["Cronograma detalhado", "Controle de materiais", "Equipe especializada", "Relatórios de progresso", "Entrega com qualidade"], whatsappMsg: "Olá! Gostaria de saber mais sobre *Gerenciamento de Obra*." },
];

const tabs = [
  { id: "Reformas",  label: "Reformas",    desc: "Residenciais e comerciais" },
  { id: "Técnicos",  label: "Técnicos",    desc: "Elétrica, hidráulica e mais" },
  { id: "Obras",     label: "Obras",       desc: "Construção e manutenção" },
  { id: "Comercial", label: "Comercial",   desc: "Lojas e escritórios" },
];

// ============ ANIMATIONS ============

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(14px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const modalIn = keyframes`
  from { opacity: 0; transform: scale(0.94) translateY(16px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
`;

// ============ STYLES ============

const SectionWrapper = styled.section`
  background: ${colors.primary};
  padding: 70px 20px 80px;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  color: ${colors.secondary};
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 8px;
  @media (max-width: ${breakpoints.mobileMax}) { font-size: 1.5rem; }
`;

const SectionSubtitle = styled.p`
  color: rgba(255,255,255,0.7);
  font-size: 0.95rem;
  margin-bottom: 40px;
`;

/* ---- TABS ---- */
const TabBar = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 36px;
`;

const Tab = styled.button<{ active: boolean }>`
  padding: 10px 24px;
  border-radius: 30px;
  border: 1.5px solid ${p => p.active ? colors.secondary : "rgba(255,255,255,0.2)"};
  background: ${p => p.active ? colors.secondary : "transparent"};
  color: ${p => p.active ? colors.primary : "rgba(255,255,255,0.8)"};
  font-weight: ${p => p.active ? "700" : "500"};
  font-size: 0.88rem;
  cursor: pointer;
  transition: all 0.22s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  &:hover {
    border-color: ${colors.secondary};
    color: ${p => p.active ? colors.primary : colors.secondary};
  }
  @media (max-width: ${breakpoints.mobileMax}) {
    padding: 8px 14px;
    font-size: 0.8rem;
  }
`;

const TabDesc = styled.span`
  font-size: 0.65rem;
  font-weight: 400;
  opacity: 0.75;
`;

/* ---- GRID ---- */
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
  max-width: 1000px;
  margin: 0 auto;
  animation: ${fadeInUp} 0.35s ease both;
  @media (max-width: ${breakpoints.tabletMax}) { grid-template-columns: repeat(3, 1fr); }
  @media (max-width: ${breakpoints.mobileMax}) { grid-template-columns: repeat(2, 1fr); gap: 10px; }
`;

const Card = styled.button`
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 14px;
  padding: 18px 10px 14px;
  cursor: pointer;
  transition: all 0.22s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  text-align: center;
  &:hover {
    background: rgba(218,165,32,0.1);
    border-color: ${colors.secondary};
    transform: translateY(-3px);
    box-shadow: 0 6px 18px rgba(0,0,0,0.3);
  }
`;

const Avatar = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid rgba(218,165,32,0.4);
  transition: border-color 0.2s ease;
  ${Card}:hover & {
    border-color: ${colors.secondary};
  }
`;

const CardTitle = styled.span`
  font-size: 0.78rem;
  font-weight: 700;
  color: ${colors.secondary};
  line-height: 1.3;
`;

const CardHint = styled.span`
  font-size: 0.67rem;
  color: rgba(255,255,255,0.4);
`;

/* ---- MODAL ---- */
const Overlay = styled.div<{ open: boolean }>`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.7);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  opacity: ${p => p.open ? 1 : 0};
  pointer-events: ${p => p.open ? "all" : "none"};
  transition: opacity 0.25s ease;
  backdrop-filter: blur(4px);
`;

const ModalBox = styled.div<{ open: boolean }>`
  background: white;
  border-radius: 18px;
  max-width: 520px;
  width: 100%;
  max-height: 88vh;
  overflow-y: auto;
  position: relative;
  ${p => p.open && css`animation: ${modalIn} 0.3s ease both;`}
  @media (max-width: ${breakpoints.mobileMax}) { border-radius: 14px; }
`;

const ModalImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 18px 18px 0 0;
  display: block;
  @media (max-width: ${breakpoints.mobileMax}) { height: 160px; border-radius: 14px 14px 0 0; }
`;

const ModalBody = styled.div`
  padding: 28px 30px 24px;
  @media (max-width: ${breakpoints.mobileMax}) { padding: 20px 18px; }
`;

const ModalClose = styled.button`
  position: absolute; top: 12px; right: 12px;
  background: rgba(0,0,0,0.45); border: none; border-radius: 50%;
  width: 30px; height: 30px; font-size: 0.95rem; cursor: pointer; color: white;
  display: flex; align-items: center; justify-content: center;
  &:hover { background: rgba(0,0,0,0.65); }
`;

const ModalBadge = styled.span`
  font-size: 0.7rem; font-weight: 700; letter-spacing: 2px; text-transform: uppercase;
  color: ${colors.secondary}; background: ${colors.secondary}18;
  padding: 3px 12px; border-radius: 20px;
`;

const ModalTitle = styled.h3`
  font-size: 1.4rem; font-weight: 800; color: ${colors.primary}; margin: 12px 0 8px;
`;

const ModalDesc = styled.p`
  color: #555; line-height: 1.7; font-size: 0.92rem; margin-bottom: 18px;
`;

const BenefitList = styled.ul`
  list-style: none; padding: 0; margin-bottom: 24px;
  display: flex; flex-direction: column; gap: 7px;
`;

const BenefitItem = styled.li`
  display: flex; align-items: center; gap: 10px;
  font-size: 0.88rem; color: #333;
  &::before {
    content: "✓"; color: ${colors.secondary}; font-weight: 900; font-size: 0.8rem;
    background: ${colors.secondary}15; border-radius: 50%;
    min-width: 22px; height: 22px; display: flex; align-items: center; justify-content: center;
  }
`;

const WAButton = styled.a`
  display: flex; align-items: center; justify-content: center; gap: 8px;
  background: #25D366; color: white; font-weight: 700; font-size: 0.95rem;
  padding: 13px 20px; border-radius: 10px; text-decoration: none;
  transition: background 0.2s;
  &:hover { background: #1fba59; }
`;

// ============ COMPONENT ============

export default function AllServices() {
  const [activeTab, setActiveTab] = useState("Reformas");
  const [selected, setSelected] = useState<ServiceData | null>(null);

  const filtered = servicesData.filter(s => s.group === activeTab);
  const close = () => setSelected(null);
  const waMsg = selected ? encodeURIComponent(selected.whatsappMsg) : "";

  return (
    <>
      <SectionWrapper id="all-services">
        <SectionTitle>Todos os Nossos Serviços</SectionTitle>
        <SectionSubtitle>Selecione uma categoria e clique para ver detalhes e solicitar orçamento.</SectionSubtitle>

        <TabBar>
          {tabs.map(t => (
            <Tab key={t.id} active={activeTab === t.id} onClick={() => setActiveTab(t.id)}>
              {t.label}
              <TabDesc>{t.desc}</TabDesc>
            </Tab>
          ))}
        </TabBar>

        <Grid key={activeTab}>
          {filtered.map(s => (
            <Card key={s.title} onClick={() => setSelected(s)} aria-label={`Detalhes: ${s.title}`}>
              <Avatar src={s.image} alt={s.title} loading="lazy" />
              <CardTitle>{s.title}</CardTitle>
              <CardHint>Ver detalhes →</CardHint>
            </Card>
          ))}
        </Grid>
      </SectionWrapper>

      <Overlay open={!!selected} onClick={close}>
        <ModalBox open={!!selected} onClick={e => e.stopPropagation()}>
          <ModalClose onClick={close} aria-label="Fechar">✕</ModalClose>
          {selected && (
            <>
              <ModalImage src={selected.image} alt={selected.title} />
              <ModalBody>
                <ModalBadge>{selected.group}</ModalBadge>
                <ModalTitle>{selected.title}</ModalTitle>
                <ModalDesc>{selected.fullDesc}</ModalDesc>
                <BenefitList>
                  {selected.benefits.map(b => <BenefitItem key={b}>{b}</BenefitItem>)}
                </BenefitList>
                <WAButton
                  href={`https://wa.me/5511980743311?text=${waMsg}`}
                  target="_blank" rel="noopener noreferrer"
                >
                  💬 Solicitar Orçamento no WhatsApp
                </WAButton>
              </ModalBody>
            </>
          )}
        </ModalBox>
      </Overlay>
    </>
  );
}
