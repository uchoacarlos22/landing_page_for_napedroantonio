import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/energia-solar/components/Header';
import Footer from '../pages/energia-solar/components/Footer';
import ChatWidget from '../pages/energia-solar/components/ChatWidget';

const SolarLayout: React.FC = () => {
  return (
    <div className="SolarLayout bg-background text-on-surface font-body-md overflow-x-clip w-full relative">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default SolarLayout;
