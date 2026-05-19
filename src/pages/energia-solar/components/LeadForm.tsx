import React, { useState } from "react";
import { WEB3FORMS_KEY } from "../solar-theme";

interface LeadFormProps {
  variant?: "empresas" | "default";
}

const LeadForm: React.FC<LeadFormProps> = ({ variant = "default" }) => {
  const [formData, setFormData] = useState({
    name: "",
    cnpj: "",
    phone: "",
    bill: "",
  });
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    const endpoint = "https://api.web3forms.com/submit";
    const data = {
      access_key: WEB3FORMS_KEY,
      subject: "Novo Lead - Energia Solar (LP Tailwind)",
      from_name: "Simulador NPA Solar",
      Nome: formData.name,
      ...(variant === "empresas" && { Empresa_CNPJ: formData.cnpj }),
      WhatsApp: formData.phone,
      ContaLuz: `R$ ${formData.bill}`,
    };

    try {
      const resp = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (resp.ok) {
        setStatus("success");
        setFormData({ name: "", cnpj: "", phone: "", bill: "" });
        window.gtag("event", "form_submit", {
          event_category: "lead",
          event_label: "solar_lp_tailwind",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contato"
      className="py-section-padding bg-white relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform translate-x-24"></div>
      <div className="container-max mx-auto px-8 relative z-10">
        <div className="max-w-4xl mx-auto bg-white shadow-[0_40px_100px_rgba(0,0,0,0.08)] grid grid-cols-1 md:grid-cols-2">
          <div className="p-12 bg-primary text-white flex flex-col justify-center">
            <h2 className="font-headline-lg text-headline-lg mb-6 leading-tight">
              Comece sua transformação hoje
            </h2>
            <p className="text-white/70 mb-8 font-body-md">
              Nossos consultores realizarão um estudo de viabilidade
              técnico-financeira personalizado para seu perfil de consumo.
            </p>
            <div className="flex items-center gap-4 text-secondary">
              <span className="text-white font-body-md font-bold">
                Atendimento especializado em até 24h.
              </span>
            </div>
          </div>
          <div className="p-12">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block font-label-caps text-label-caps text-primary mb-2">
                  NOME COMPLETO
                </label>
                <input
                  className="w-full bg-surface-container border-b border-gray-300 focus:border-secondary focus:ring-0 transition-all p-3 text-on-surface"
                  placeholder="Ex: Ricardo Almeida"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  disabled={status === "submitting"}
                />
              </div>
              <div>
                <label className="block font-label-caps text-label-caps text-primary mb-2">
                  WHATSAPP
                </label>
                <input
                  className="w-full bg-surface-container border-b border-gray-300 focus:border-secondary focus:ring-0 transition-all p-3 text-on-surface"
                  placeholder="(11) 99999-9999"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  disabled={status === "submitting"}
                />
              </div>
              <div>
                <label className="block font-label-caps text-label-caps text-primary mb-2">
                  GASTO MENSAL DE LUZ (R$)
                </label>
                <input
                  className="w-full bg-surface-container border-b border-gray-300 focus:border-secondary focus:ring-0 transition-all p-3 text-on-surface"
                  placeholder="Ex: 850,00"
                  type="number"
                  required
                  value={formData.bill}
                  onChange={(e) =>
                    setFormData({ ...formData, bill: e.target.value })
                  }
                  disabled={status === "submitting"}
                />
              </div>
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full bg-secondary-container text-on-secondary-fixed font-label-caps text-label-caps py-5 shadow-lg hover:bg-secondary-fixed transition-all disabled:opacity-50"
              >
                {status === "submitting"
                  ? "Enviando..."
                  : "Quero uma simulação"}
              </button>

              {status === "success" && (
                <div className="text-green-600 font-bold bg-green-50 p-4 border border-green-200 mt-4 text-center text-sm">
                  Recebemos seus dados! Nossa equipe entrará em contato
                  comercialmente via WhatsApp.
                </div>
              )}
              {status === "error" && (
                <div className="text-red-500 font-bold bg-red-50 p-4 border border-red-200 mt-4 text-center text-sm">
                  Ocorreu um erro ao enviar. Por favor, tente novamente ou nos
                  chame no WhatsApp!
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
