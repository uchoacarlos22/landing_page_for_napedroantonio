import React from 'react';

const Differentials: React.FC = () => {
  return (
    <section
      id="differentials"
      className="relative py-32 flex items-center justify-center text-center text-white"
    >
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/704853/pexels-photo-704853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
          backgroundColor: '#3C3D41',
          backgroundBlendMode: 'multiply',
          backgroundAttachment: 'fixed',
        }}
      ></div>
      <div className="relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Orgulho de cada entrega
        </h2>
      </div>
    </section>
  );
};

export default Differentials;
