import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Features from "./components/Features";
import AboutUs from "./components/AboutUs";
import FAQ from "./components/FAQ";
import Consultation from "./components/Consultation";
import Testimonials from "./components/Testimonials";
import MapSectionComponent from "./components/MapSectionComponent";
import Footer from "./components/Footer";
import ProjectsWrapper from "./components/ProjectsWrapper";
import AllServices from "./components/AllServices";
import ChatWidget from "./components/ChatWidget";
import { LampDemo } from "./components/Lamp";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const [loading, setLoading] = useState(true);

  // Map section IDs to clean slugs (no #, in Portuguese)
  const sectionSlugs: Record<string, string> = {
    hero: "/",
    about: "/sobre",
    services: "/servicos",
    "all-services": "/catalogo",
    projects: "/projetos",
    consultation: "/consultoria",
    faq: "/faq",
    testimonials: "/depoimentos",
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // After the page loads, observe sections and update URL silently
  useEffect(() => {
    if (loading) return;

    const sectionIds = Object.keys(sectionSlugs);
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            const slug = sectionSlugs[id];
            window.history.replaceState(null, "", slug);
          }
        },
        { threshold: 0.4 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, [loading]);

  return (
    <div className="App overflow-x-hidden min-h-screen bg-slate-950">
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <LampDemo />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <Header />
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
            <Footer />
            <ChatWidget />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
