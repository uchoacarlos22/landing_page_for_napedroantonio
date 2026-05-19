import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Features from '../components/Features';
import AboutUs from '../components/AboutUs';
import FAQ from '../components/FAQ';
import Consultation from '../components/Consultation';
import Testimonials from '../components/Testimonials';
import MapSectionComponent from '../components/MapSectionComponent';
import ProjectsWrapper from '../components/ProjectsWrapper';
import AllServices from '../components/AllServices';

const ResidencialPage: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <AboutUs />
      <Services />
      <AllServices />
      <ProjectsWrapper />
      <Consultation />
      <FAQ />
      <Testimonials />
      <MapSectionComponent address="Construção e reforma no Morumbi NapedroAntonio" />
    </>
  );
};

export default ResidencialPage;
