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
import ChatWidget from "./components/ChatWidget";
import { LampDemo } from "./components/Lamp";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

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
