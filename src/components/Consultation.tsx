import React from 'react';
import styled from 'styled-components';
import { colors } from '../theme';

const ConsultationSection = styled.section`
  position: relative;
  background: url('/src/assets/images/consultation_back.jpg') center/cover no-repeat;
  padding: 24px 16px;
  color: #fff;
`;

const ConsultationOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(rgba(0,0,0,0.7), ${colors.primary}E6);
`;

const ConsultationContainer = styled.div`
  position: relative;
  max-width: 960px;
  margin: 0 auto;
  z-index: 1;
  padding: 0 10px;
  border-bottom: 4px solid ${colors.secondary};
`;

const ConsultationTitle = styled.h2`
  font-size: 1.75rem;
  text-align: center;
  margin-bottom: 24px;
  color: ${colors.secondary};
  position: relative;
  z-index: 2;
`;

const ConsultationContent = styled.div`
  display: flex;
  gap: 24px;
  background: ${colors.primary}BF;
  padding: 20px;
  border-radius: 4px;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const ConsultationForm = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ConsultationHours = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ConsultationInput = styled.input`
  width: 100%;
  padding: 10px 12px;
  border: none;
  border-radius: 2px;
  font-size: 0.9rem;
  background: ${colors.background};
  color: ${colors.textPrimary};
`;

const ConsultationTextArea = styled.textarea`
  width: 95%;
  padding: 10px 12px;
  border: none;
  border-radius: 2px;
  font-size: 0.9rem;
  background: ${colors.background};
  color: ${colors.textPrimary};
  min-height: 120px;
  resize: vertical;
`;

const ConsultationButton = styled.button`
  background: linear-gradient(135deg, ${colors.secondary} 0%, #d4941e 100%);
  color: ${colors.primary};
  border: none;
  padding: 12px 8px;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(244, 168, 66, 0.3);
  margin-top: 6px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(244, 168, 66, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`;

const ConsultationHoursTitle = styled.h3`
  margin-bottom: 12px;
  color: ${colors.secondary};
  font-size: 1rem;
`;

const ConsultationHoursParagraph = styled.p`
  margin-bottom: 16px;
  font-size: 0.85rem;
  color: #ddd;
`;

const ConsultationHoursList = styled.ul`
  list-style: none;
`;

const ConsultationHoursListItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid ${colors.border}4D;
  font-weight: bold;
  color: ${colors.background};
  font-size: 0.9rem;

  &:first-child {
    border-top: none;
  }
`;

const ConsultationSelect = styled.select`
  width: 100%;
  padding: 10px 12px;
  border: none;
  border-radius: 2px;
  font-size: 0.9rem;
  background: ${colors.background};
  color: ${colors.textPrimary};
`;

const Consultation: React.FC = () => {
  const [formData, setFormData] = React.useState({
    nome: '',
    telefone: '',
    email: '',
    assunto: '',
    servico: '',
    mensagem: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const texto = `Olá! Meu nome é ${formData.nome}. Gostaria de solicitar uma consultoria sobre ${formData.servico || formData.assunto || 'serviços'}.\n\nDetalhes: ${formData.mensagem}`;
    const uri = `https://wa.me/5511980743311?text=${encodeURIComponent(texto)}`;
    window.open(uri, '_blank');
  };


  const handleEmail = () => {
    const body = `Nome: ${formData.nome}\nTelefone: ${formData.telefone}\nServiço: ${formData.servico}\n\nMensagem: ${formData.mensagem}`;
    const mailto = `mailto:napedroantonio@gmail.com?subject=${encodeURIComponent(formData.assunto || 'Consulta Landing Page')}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  return (

    <ConsultationSection id="consultation">
      <ConsultationOverlay />
      <ConsultationContainer>
        <ConsultationTitle>CONSULTORIA</ConsultationTitle>
        <ConsultationContent>
          <ConsultationForm onSubmit={handleWhatsApp}>
            <div style={{ display: 'flex', gap: '16px' }}>
              <ConsultationInput name="nome" type="text" placeholder="Nome Completo" required onChange={handleChange} />
              <ConsultationInput name="telefone" type="text" placeholder="Telefone" required onChange={handleChange} />
            </div>
            <div style={{ display: 'flex', gap: '16px' }}>
              <ConsultationInput name="email" type="email" placeholder="Email" required onChange={handleChange} />
              <ConsultationInput name="assunto" type="text" placeholder="Assunto" onChange={handleChange} />
            </div>
            <ConsultationSelect name="servico" onChange={handleChange}>
              <option value="">Selecione o tipo de serviço</option>
              <option value="construcao">Construção</option>
              <option value="reforma">Reforma</option>
              <option value="consultoria">Consultoria</option>
              <option value="projeto">Projeto</option>
            </ConsultationSelect>
            <ConsultationTextArea name="mensagem" placeholder="Descreva detalhes do seu projeto, necessidades específicas, localização, etc." onChange={handleChange} />
            <div style={{ display: 'flex', gap: '10px' }}>
                <ConsultationButton type="submit" style={{ flex: 1 }}>
                  💬 WHATSAPP
                </ConsultationButton>
                <ConsultationButton type="button" onClick={handleEmail} style={{ flex: 1, background: colors.primary, color: 'white' }}>
                  📧 E-MAIL
                </ConsultationButton>
            </div>
          </ConsultationForm>

          <ConsultationHours>
            <ConsultationHoursTitle>HORÁRIO DE ATENDIMENTO</ConsultationHoursTitle>
            <ConsultationHoursParagraph>
              Nossa equipe está disponível para atendê-lo nos seguintes horários.
              Solicitações de orçamento são respondidas em até 24 horas.
            </ConsultationHoursParagraph>
            <ConsultationHoursList>
              <ConsultationHoursListItem>
                <span>Segunda - Sexta</span>
                <span>8AM - 6PM</span>
              </ConsultationHoursListItem>
              <ConsultationHoursListItem>
                <span>Sábado</span>
                <span>9AM - 5PM</span>
              </ConsultationHoursListItem>
              <ConsultationHoursListItem>
                <span>Domingo</span>
                <span>Fechado</span>
              </ConsultationHoursListItem>
            </ConsultationHoursList>
          </ConsultationHours>
        </ConsultationContent>
      </ConsultationContainer>
    </ConsultationSection>
  );
};

export default Consultation;
