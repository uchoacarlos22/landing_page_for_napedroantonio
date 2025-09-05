import React from 'react';

    const Contact: React.FC = () => {
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
                    <strong>Telefone:</strong> (XX) XXXX-XXXX
                  </li>
                  <li className="mb-2">
                    <strong>Email:</strong> contato@napdroantonio.com.br
                  </li>
                  <li className="mb-2">
                    <strong>Endereço:</strong> Rua Exemplo, 123 - Centro -
                    Cidade/UF
                  </li>
                </ul>
              </div>
              <div>
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
                      type="text"
                      placeholder="Seu nome"
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
                      type="email"
                      placeholder="Seu email"
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
                      rows={5}
                      placeholder="Sua mensagem"
                    ></textarea>
                  </div>
                  <div className="flex items-center justify-between">
                    <button
                      className="bg-yellow-500 hover:bg-yellow-400 text-[#3C3D41] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="button"
                    >
                      Enviar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      );
    };

    export default Contact;
