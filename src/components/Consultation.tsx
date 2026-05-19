import React from "react";
import styled from "styled-components";

const Section = styled.section`
  position: relative;
  padding-top: 80px;
  padding-bottom: 80px;
`;

const BackgroundLayer = styled.div`
  position: fixed;
  inset: 0;
  z-index: -1;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(5, 20, 36, 0.8);
    backdrop-filter: blur(12px);
    z-index: 10;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background-image: radial-gradient(rgba(185, 200, 222, 0.1) 1px, transparent 1px);
    background-size: 32px 32px;
    opacity: 0.3;
    z-index: 20;
  }
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(20%);
  position: absolute;
  inset: 0;
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;

  @media (min-width: 768px) {
    padding: 0 32px;
  }

  @media (min-width: 1024px) {
    padding: 0 64px;
  }
`;

const GlassCard = styled.div`
  background: rgba(19, 19, 21, 0.4);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(249, 192, 61, 0.3);
  box-shadow: inset 0 0 0 1px rgba(249, 192, 61, 0.1), 0 0 20px rgba(249, 192, 61, 0.05);
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
    border-radius: 32px;
  }
`;

const FormColumn = styled.div`
  padding: 24px;
  border-bottom: 1px solid rgba(142, 145, 151, 0.1);

  @media (min-width: 768px) {
    padding: 40px;
  }

  @media (min-width: 1024px) {
    flex: 1;
    padding: 64px;
    border-bottom: none;
    border-right: 1px solid rgba(142, 145, 151, 0.1);
  }
`;

const TrustColumn = styled.div`
  padding: 24px;
  background: rgba(31, 32, 33, 0.3);

  @media (min-width: 768px) {
    padding: 40px;
  }

  @media (min-width: 1024px) {
    flex: 1;
    padding: 64px;
  }
`;

const SectionTitle = styled.h1`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.3;
  color: #ffffff;
  margin-bottom: 12px;

  @media (min-width: 768px) {
    font-size: 28px;
    margin-bottom: 16px;
  }

  @media (min-width: 1024px) {
    font-size: 32px;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: #c4c6cd;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    font-size: 16px;
    margin-bottom: 32px;
  }

  @media (min-width: 1024px) {
    font-size: 18px;
    margin-bottom: 40px;
  }
`;

const BenefitsRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  margin-bottom: 24px;

  @media (min-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  @media (min-width: 1024px) {
    margin-bottom: 40px;
  }
`;

const BenefitItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #c4c6cd;
`;

const MaterialIcon = styled.span<{ $filled?: boolean }>`
  font-family: 'Material Symbols Outlined';
  font-size: 18px;
  color: #f9c03d;
  font-variation-settings: ${props => props.$filled ? "'FILL' 1, 'wght' 300, 'GRAD' 0, 'opsz' 24" : "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24"};
  line-height: 1;
  flex-shrink: 0;
`;

const BenefitLabel = styled.span`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: 12px;
    letter-spacing: 0.1em;
  }
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  box-sizing: border-box;

  @media (min-width: 480px) {
    gap: 20px;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
`;

const InputWrapper = styled.div`
  position: relative;
  display: block;
  box-sizing: border-box;
`;

const InputIcon = styled.span`
  font-family: 'Material Symbols Outlined';
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: #8e9197;
  font-size: 18px;
  pointer-events: none;
  line-height: 1;
  z-index: 1;

  @media (min-width: 768px) {
    left: 16px;
    font-size: 20px;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  background: rgba(14, 14, 15, 0.5);
  border: 1px solid rgba(142, 145, 151, 0.3);
  border-radius: 8px;
  padding: 14px 14px 14px 44px;
  color: white;
  font-size: 14px;
  line-height: 1.5;
  transition: all 0.2s ease;
  box-sizing: border-box;

  &::placeholder {
    color: #8e9197;
  }

  &:focus {
    outline: none;
    border-color: #f9c03d;
    box-shadow: 0 0 10px rgba(249, 192, 61, 0.2);
  }

  @media (min-width: 768px) {
    padding: 16px 16px 16px 48px;
    font-size: 16px;
  }
`;

const StyledSelect = styled.select`
  width: 100%;
  background: rgba(14, 14, 15, 0.5);
  border: 1px solid rgba(142, 145, 151, 0.3);
  border-radius: 8px;
  padding: 14px 14px 14px 44px;
  color: white;
  font-size: 14px;
  line-height: 1.5;
  appearance: none;
  cursor: pointer;
  transition: all 0.2s ease;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #f9c03d;
    box-shadow: 0 0 10px rgba(249, 192, 61, 0.2);
  }

  option {
    color: white;
    background: #131315;
  }

  @media (min-width: 768px) {
    padding: 16px 16px 16px 48px;
    font-size: 16px;
  }
`;

const TextareaWrapper = styled.div`
  position: relative;
`;

const TextareaIcon = styled.span`
  font-family: 'Material Symbols Outlined';
  position: absolute;
  left: 14px;
  top: 14px;
  color: #8e9197;
  font-size: 18px;
  line-height: 1;

  @media (min-width: 768px) {
    left: 16px;
    top: 16px;
    font-size: 20px;
  }
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  background: rgba(14, 14, 15, 0.5);
  border: 1px solid rgba(142, 145, 151, 0.3);
  border-radius: 8px;
  padding: 14px 14px 14px 44px;
  color: white;
  font-size: 14px;
  line-height: 1.5;
  min-height: 100px;
  resize: vertical;
  transition: all 0.2s ease;
  box-sizing: border-box;

  &::placeholder {
    color: #8e9197;
  }

  &:focus {
    outline: none;
    border-color: #f9c03d;
    box-shadow: 0 0 10px rgba(249, 192, 61, 0.2);
  }

  @media (min-width: 768px) {
    padding: 16px 16px 16px 48px;
    font-size: 16px;
    min-height: 120px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (min-width: 768px) {
    gap: 16px;
  }
`;

const PrimaryButton = styled.button`
  width: 100%;
  background: #f9c03d;
  color: #233143;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  box-shadow: 0 0 20px rgba(249, 192, 61, 0.3);
  transition: all 0.2s ease;

  &:hover {
    filter: brightness(1.1);
    transform: scale(1.01);
  }

  @media (min-width: 768px) {
    padding: 20px;
    font-size: 12px;
    gap: 12px;
  }
`;

const WhatsAppButton = styled.button`
  width: 100%;
  background: #128C7E;
  color: white;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: all 0.2s ease;

  &:hover {
    filter: brightness(1.1);
  }

  @media (min-width: 768px) {
    padding: 20px;
    font-size: 12px;
    gap: 12px;
  }
`;

const TrustCardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-bottom: 32px;

  @media (min-width: 768px) {
    gap: 16px;
    margin-bottom: 48px;
  }
`;

const TrustCard = styled.div`
  background: rgba(19, 19, 21, 0.4);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(185, 200, 222, 0.1);
  padding: 16px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media (min-width: 768px) {
    padding: 24px;
    gap: 8px;
  }
`;

const TrustCardIcon = styled.span`
  font-family: 'Material Symbols Outlined';
  font-size: 20px;
  color: #b9c8de;
  line-height: 1;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

const TrustCardTitle = styled.p`
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #b9c8de;

  @media (min-width: 768px) {
    font-size: 10px;
    letter-spacing: 0.1em;
  }
`;

const TrustCardText = styled.p`
  font-size: 11px;
  color: #c4c6cd;
  line-height: 1.4;

  @media (min-width: 768px) {
    font-size: 12px;
  }
`;

const ProcessSection = styled.div`
  margin-bottom: 24px;

  @media (min-width: 768px) {
    margin-bottom: 48px;
  }
`;

const ProcessTitle = styled.h3`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #e7bea5;
  margin-bottom: 20px;
  border-left: 2px solid #e7bea5;
  padding-left: 12px;

  @media (min-width: 768px) {
    font-size: 12px;
    margin-bottom: 32px;
    padding-left: 16px;
  }
`;

const Timeline = styled.div`
  position: relative;
  padding-left: 40px;

  @media (min-width: 768px) {
    padding-left: 48px;
  }
`;

const TimelineLine = styled.div`
  position: absolute;
  left: 13px;
  top: 14px;
  bottom: 14px;
  width: 2px;
  background: rgba(142, 145, 151, 0.3);

  @media (min-width: 768px) {
    left: 15px;
    top: 16px;
    bottom: 16px;
  }
`;

const TimelineItem = styled.div`
  position: relative;
  padding-bottom: 24px;

  &:last-child {
    padding-bottom: 0;
  }

  @media (min-width: 768px) {
    padding-bottom: 32px;
  }
`;

const TimelineDot = styled.div<{ $active?: boolean }>`
  position: absolute;
  left: -36px;
  top: 2px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #051424;
  border: 1px solid #b9c8de;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;

  ${props => props.$active && `
    background: #f9c03d;
    border-color: #f9c03d;
  `}

  @media (min-width: 768px) {
    left: -40px;
    top: 4px;
    width: 32px;
    height: 32px;
  }
`;

const TimelineNumber = styled.span<{ $active?: boolean }>`
  font-size: 11px;
  font-weight: 700;
  color: #b9c8de;

  ${props => props.$active && `
    color: #233143;
  `}

  @media (min-width: 768px) {
    font-size: 12px;
  }
`;

const TimelineTitle = styled.h4<{ $active?: boolean }>`
  font-size: 14px;
  font-weight: 700;
  color: white;
  margin-bottom: 2px;

  ${props => props.$active && `
    color: #f9c03d;
  `}

  @media (min-width: 768px) {
    font-size: 16px;
    margin-bottom: 4px;
  }
`;

const TimelineText = styled.p`
  font-size: 12px;
  color: #c4c6cd;
  line-height: 1.4;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

const StatsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  margin-top: 32px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    margin-top: 48px;
  }
`;

const StatsGroup = styled.div`
  display: flex;
  gap: 24px;

  @media (min-width: 768px) {
    gap: 32px;
  }
`;

const StatItem = styled.div``;

const StatNumber = styled.p`
  font-size: 32px;
  font-weight: 700;
  color: #b9c8de;
  line-height: 1;

  @media (min-width: 768px) {
    font-size: 40px;
  }
`;

const StatLabel = styled.p`
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #c4c6cd;
  margin-top: 4px;

  @media (min-width: 768px) {
    font-size: 10px;
    letter-spacing: 0.1em;
  }
`;

const SealContainer = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    width: 96px;
    height: 96px;
  }
`;

const SealBorder = styled.div`
  position: absolute;
  inset: 0;
  border: 2px dashed rgba(231, 190, 165, 0.4);
  border-radius: 50%;
  animation: spin 20s linear infinite;

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

const SealIcon = styled.span`
  font-family: 'Material Symbols Outlined';
  font-size: 32px;
  color: #e7bea5;
  line-height: 1;

  @media (min-width: 768px) {
    font-size: 40px;
  }
`;

const SealLabel = styled.p`
  position: absolute;
  bottom: -12px;
  font-size: 7px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #e7bea5;
  white-space: nowrap;

  @media (min-width: 768px) {
    bottom: -16px;
    font-size: 8px;
    letter-spacing: 0.1em;
  }
`;

const ResultMessage = styled.p<{ $success?: boolean }>`
  text-align: center;
  margin-top: 16px;
  font-size: 13px;
  color: ${props => props.$success ? "#f9c03d" : "#ff4d4d"};
`;

const FormRow = styled.div`
  margin-top: 16px;

  @media (min-width: 768px) {
    margin-top: 24px;
  }
`;

interface ConsultationProps {
  title?: string;
  subtitle?: string;
  defaultService?: string;
  whatsappMessage?: string;
  variant?: "empresas" | "condominios" | "mobilidade" | "default";
}

const Consultation: React.FC<ConsultationProps> = ({
  title = "Solicite uma Consultoria Técnica",
  subtitle = "Receba uma análise estratégica para sua obra, reforma ou projeto energético.",
  defaultService = "",
  whatsappMessage,
  variant = "default",
}) => {
  const [result, setResult] = React.useState("");
  const [formData, setFormData] = React.useState({
    nome: "",
    telefone: "",
    email: "",
    servico: defaultService,
    cidade: "",
    investimento: "",
    mensagem: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setResult("Enviando...");

    const formDataObj = new FormData();
    formDataObj.append(
      "access_key",
      import.meta.env.VITE_WEB3FORMS_KEY || "d88e0a50-0410-4c8b-9254-2f67d138bc8c"
    );
    formDataObj.append(
      "subject",
      `Novo Orçamento (${variant}): ${formData.servico || formData.cidade}`
    );
    formDataObj.append("from_name", formData.nome);
    formDataObj.append("email", formData.email);
    formDataObj.append(
      "message",
      `Nome: ${formData.nome}\nTelefone: ${formData.telefone}\nE-mail: ${formData.email}\nServiço: ${formData.servico}\nCidade: ${formData.cidade}\nInvestimento: ${formData.investimento}\n\nMensagem: ${formData.mensagem}`
    );

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataObj,
      });

      const data = await response.json();
      if (data.success) {
        setResult("Mensagem enviada com sucesso! Entraremos em contato em breve.");
        setFormData({
          nome: "",
          telefone: "",
          email: "",
          servico: defaultService,
          cidade: "",
          investimento: "",
          mensagem: "",
        });

        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "form_submit",
          form_id: `consultation_form_${variant}`,
        });
      } else {
        setResult("Ocorreu um erro. Tente novamente.");
      }
    } catch {
      setResult("Erro de conexão. Use o WhatsApp.");
    }
  };

  const handleWhatsApp = () => {
    window.gtag("event", "click_whatsapp", {
      event_category: "contato",
      event_label: `consultation_form_${variant}`,
    });

    let texto = whatsappMessage || `Olá! Gostaria de entender como vocês trabalham com projetos e orçamentos para ${variant}.\n\nMeu nome é ${formData.nome}.\nInteresse: ${formData.servico || "Projetos/Reformas"}`;

    const uri = `https://wa.me/5511967796576?text=${encodeURIComponent(texto)}`;
    window.open(uri, "_blank");
  };

  return (
    <Section id="consultation">
      <BackgroundLayer>
        <BackgroundImage
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyalcvt2sXMgQkmhW5vr4myA-OY6_xfvsYCQoVAUtXmnPN5PaIa-_W70zCNaw3YCKSZHVa3wMgMay3pTQKwv7llqc2a9qdbSKsZSeeQ1uDh4yDDDpCLPmpi2xNRkDFfFumzDMrD4d2LVuyFWP2k0c3zg_nusVYuDSPPDhzwh6guOJeF6w2gNB3ZIYCNdnw8V5l6L4rkHVVSF1P0VxKQb6LR0eQInvmoKfIqPZK86lkYHjgJRSDg4MtNDPwhKLq4vwYHpyiWSyZCUce"
          alt="Architecture background"
        />
      </BackgroundLayer>

      <Container>
        <GlassCard>
          <FormColumn>
            <SectionTitle>{title}</SectionTitle>
            <SectionSubtitle>{subtitle}</SectionSubtitle>

            <BenefitsRow>
              <BenefitItem>
                <MaterialIcon>schedule</MaterialIcon>
                <BenefitLabel>Resposta em até 24h</BenefitLabel>
              </BenefitItem>
              <BenefitItem>
                <MaterialIcon>engineering</MaterialIcon>
                <BenefitLabel>Atendimento especializado</BenefitLabel>
              </BenefitItem>
              <BenefitItem>
                <MaterialIcon>description</MaterialIcon>
                <BenefitLabel>Orçamento técnico</BenefitLabel>
              </BenefitItem>
              <BenefitItem>
                <MaterialIcon>apartment</MaterialIcon>
                <BenefitLabel>Suporte corporativo e residencial</BenefitLabel>
              </BenefitItem>
            </BenefitsRow>

            <form onSubmit={handleSubmit}>
              <FormGrid>
                <InputWrapper>
                  <InputIcon>person</InputIcon>
                  <StyledInput
                    aria-label="Nome Completo"
                    name="nome"
                    type="text"
                    placeholder="Nome completo"
                    value={formData.nome}
                    required
                    onChange={handleChange}
                  />
                </InputWrapper>
                <InputWrapper>
                  <InputIcon>phone</InputIcon>
                  <StyledInput
                    aria-label="Telefone"
                    name="telefone"
                    type="tel"
                    placeholder="Telefone (DDD)"
                    value={formData.telefone}
                    required
                    onChange={handleChange}
                  />
                </InputWrapper>
              </FormGrid>

              <FormRow>
                <InputWrapper>
                  <InputIcon>mail</InputIcon>
                  <StyledInput
                    aria-label="E-mail"
                    name="email"
                    type="email"
                    placeholder="Seu melhor e-mail"
                    value={formData.email}
                    required
                    onChange={handleChange}
                  />
                </InputWrapper>
              </FormRow>

              <FormRow>
                <FormGrid>
                  <InputWrapper>
                    <InputIcon>category</InputIcon>
                    <StyledSelect
                      name="servico"
                      value={formData.servico}
                      required
                      onChange={handleChange}
                    >
                      <option value="" disabled selected>Tipo de Projeto</option>
                      <option value="residencial-alto-padrao">Residencial de Alto Padrão</option>
                      <option value="corporativo-industrial">Corporativo/Industrial</option>
                      <option value="infraestrutura-eletrica">Infraestrutura Elétrica</option>
                      <option value="reforma-estrutural">Reforma Estrutural</option>
                    </StyledSelect>
                  </InputWrapper>
                  <InputWrapper>
                    <InputIcon>location_on</InputIcon>
                    <StyledInput
                      aria-label="Cidade"
                      name="cidade"
                      type="text"
                      placeholder="Cidade / Bairro"
                      value={formData.cidade}
                      onChange={handleChange}
                    />
                  </InputWrapper>
                </FormGrid>
              </FormRow>

              <FormRow>
                <InputWrapper>
                  <InputIcon>payments</InputIcon>
                  <StyledSelect
                    name="investimento"
                    value={formData.investimento}
                    onChange={handleChange}
                  >
                    <option value="" disabled selected>Faixa de Investimento</option>
                    <option value="abaixo-50k">Abaixo de R$ 50k</option>
                    <option value="50k-200k">R$ 50k - R$ 200k</option>
                    <option value="200k-1m">R$ 200k - R$ 1M</option>
                    <option value="acima-1m">Acima de R$ 1M</option>
                  </StyledSelect>
                </InputWrapper>
              </FormRow>

              <FormRow>
                <TextareaWrapper>
                  <TextareaIcon>message</TextareaIcon>
                  <StyledTextarea
                    aria-label="Mensagem"
                    name="mensagem"
                    value={formData.mensagem}
                    placeholder="Detalhes do seu projeto ou necessidade técnica..."
                    onChange={handleChange}
                    rows={4}
                  />
                </TextareaWrapper>
              </FormRow>

              <FormRow>
                <ButtonGroup>
                  <PrimaryButton type="submit">
                    Solicitar Proposta
                    <MaterialIcon>arrow_forward</MaterialIcon>
                  </PrimaryButton>
                  <WhatsAppButton type="button" onClick={handleWhatsApp}>
                    <MaterialIcon $filled>chat</MaterialIcon>
                    Falar no WhatsApp
                  </WhatsAppButton>
                </ButtonGroup>
              </FormRow>

              {result && (
                <ResultMessage $success={result.includes("sucesso")}>
                  {result}
                </ResultMessage>
              )}
            </form>
          </FormColumn>

          <TrustColumn>
            <TrustCardsGrid>
              <TrustCard>
                <TrustCardIcon>location_city</TrustCardIcon>
                <TrustCardTitle>Atendimento em SP</TrustCardTitle>
                <TrustCardText>Logística otimizada para capital e região.</TrustCardText>
              </TrustCard>
              <TrustCard>
                <TrustCardIcon>verified_user</TrustCardIcon>
                <TrustCardTitle>ART/NF Inclusos</TrustCardTitle>
                <TrustCardText>Conformidade legal e segurança total.</TrustCardText>
              </TrustCard>
              <TrustCard>
                <TrustCardIcon>history</TrustCardIcon>
                <TrustCardTitle>+21 Anos</TrustCardTitle>
                <TrustCardText>Experiência sólida no mercado de engenharia.</TrustCardText>
              </TrustCard>
              <TrustCard>
                <TrustCardIcon>event_available</TrustCardIcon>
                <TrustCardTitle>Cronograma Garantido</TrustCardTitle>
                <TrustCardText>Gestão rigorosa de prazos e entregas.</TrustCardText>
              </TrustCard>
            </TrustCardsGrid>

            <ProcessSection>
              <ProcessTitle>NOSSO PROCESSO</ProcessTitle>
              <Timeline>
                <TimelineLine />
                <TimelineItem>
                  <TimelineDot>
                    <TimelineNumber>1</TimelineNumber>
                  </TimelineDot>
                  <TimelineTitle>Contato</TimelineTitle>
                  <TimelineText>Entendimento inicial das necessidades do cliente.</TimelineText>
                </TimelineItem>
                <TimelineItem>
                  <TimelineDot>
                    <TimelineNumber>2</TimelineNumber>
                  </TimelineDot>
                  <TimelineTitle>Diagnóstico</TimelineTitle>
                  <TimelineText>Visita técnica e levantamento de dados precisos.</TimelineText>
                </TimelineItem>
                <TimelineItem>
                  <TimelineDot>
                    <TimelineNumber>3</TimelineNumber>
                  </TimelineDot>
                  <TimelineTitle>Proposta Técnica</TimelineTitle>
                  <TimelineText>Apresentação da solução estratégica e custos.</TimelineText>
                </TimelineItem>
                <TimelineItem>
                  <TimelineDot $active>
                    <TimelineNumber $active>4</TimelineNumber>
                  </TimelineDot>
                  <TimelineTitle $active>Execução</TimelineTitle>
                  <TimelineText>Início das obras com acompanhamento integral.</TimelineText>
                </TimelineItem>
              </Timeline>
            </ProcessSection>

            <StatsSection>
              <StatsGroup>
                <StatItem>
                  <StatNumber>98%</StatNumber>
                  <StatLabel>Satisfação</StatLabel>
                </StatItem>
                <StatItem>
                  <StatNumber>500+</StatNumber>
                  <StatLabel>Projetos</StatLabel>
                </StatItem>
              </StatsGroup>
              <SealContainer>
                <SealBorder />
                <SealIcon>verified</SealIcon>
                <SealLabel>GARANTIA TÉCNICA</SealLabel>
              </SealContainer>
            </StatsSection>
          </TrustColumn>
        </GlassCard>
      </Container>
    </Section>
  );
};

export default Consultation;