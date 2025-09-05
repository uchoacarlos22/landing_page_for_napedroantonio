import React from 'react';

const Location: React.FC = () => {
  return (
    <section id="location" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-[#3C3D41] mb-8 text-center">
          Onde Estamos
        </h2>
        <div className="w-full h-96 rounded-lg overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.797977234439!2d-46.65879458507155!3d-23.540099766590445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0e9e3b%3A0x643d3b6b1c4bb15d!2sAvenida%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1623348000000!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>
        <div className="mt-6 text-center">
          <p className="text-gray-700">
            Avenida Paulista, São Paulo - SP
          </p>
        </div>
      </div>
    </section>
  );
};

export default Location;
