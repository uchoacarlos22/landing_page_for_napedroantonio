import React from 'react';

const Contact: React.FC = () => {
  const [result, setResult] = React.useState("");
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWeb3Forms = async (e: React.FormEvent) => {
    e.preventDefault();
    setResult("Enviando...");
    
    const formDataObj = new FormData();
    formDataObj.append("access_key", "d88e0a50-0410-4c8b-9254-2f67d138bc8c");
    formDataObj.append("subject", "Contato via Landing Page");
    formDataObj.append("from_name", formData.name);
    formDataObj.append("email", formData.email);
    formDataObj.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataObj
      });

      const data = await response.json();
      if (data.success) {
        setResult("Mensagem enviada com sucesso! Entraremos em contato.");
        setFormData({ name: '', email: '', message: '' });
      } else {
        setResult("Erro ao enviar. Tente o WhatsApp.");
      }
    } catch (error) {
      setResult("Erro de conexão. Tente o WhatsApp.");
    }
  };

  const handleWhatsAppRedirect = () => {
    const texto = `Olá! Meu nome é ${formData.name}. Gostaria de entrar em contato.\n\nE-mail: ${formData.email}\n\nMensagem: ${formData.message}`;
    const uri = `https://wa.me/5511980743311?text=${encodeURIComponent(texto)}`;
    window.open(uri, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-[#3C3D41] mb-8">
          Contato
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Entre em contato conosco para solicitar um orçamento ou tirar
              dúvidas sobre nossos serviços. Estamos à disposição para
              atendê-lo!
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Você pode nos contatar através do formulário ao lado ou
              pelos seguintes meios:
            </p>
            <ul className="list-none">
              <li className="mb-2">
                <strong>Telefone:</strong> (11) 98074-3311
              </li>
              <li className="mb-2">
                <strong>Email:</strong> napedroantonio@gmail.com
              </li>
              <li className="mb-2">
                <strong>Endereço:</strong> Morumbi, São Paulo - SP
              </li>
            </ul>
          </div>
          <div>
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleWeb3Forms}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Nome
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Seu nome"
                  value={formData.name}
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Seu email"
                  value={formData.email}
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="message"
                >
                  Mensagem
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Sua mensagem"
                  value={formData.message}
                  required
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="flex flex-col gap-3">
                <button
                  className="bg-yellow-500 hover:bg-yellow-400 text-[#3C3D41] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                  type="submit"
                >
                  ENVIAR E-MAIL ✉️
                </button>
                <button
                  type="button"
                  onClick={handleWhatsAppRedirect}
                  className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                >
                  WHATSAPP 💬
                </button>
                {result && <p className={`text-center text-sm font-bold ${result.includes("sucesso") || result.includes("enviada") ? "text-green-600" : "text-red-600"}`}>{result}</p>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
