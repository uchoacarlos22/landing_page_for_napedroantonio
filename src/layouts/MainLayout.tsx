import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/energia-solar/components/Header';
import Footer from '../components/Footer';
import ChatWidget from '../components/ChatWidget';

const MainLayout: React.FC = () => {
  return (
    <div className="MainLayout overflow-x-clip min-h-screen bg-slate-950">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default MainLayout;
