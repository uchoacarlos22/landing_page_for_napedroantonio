import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
// import Projects from "./components/Projects";
// import Testimonials from "./components/Testimonials";
// import Contact from "./components/Contact";
import Features from "./components/Features";
import AboutUs from "./components/AboutUs";
import WhyUs from "./components/WhyUs";
import FAQ from "./components/FAQ";
import Consultation from "./components/Consultation";
import Testimonials from "./components/Testimonials";
import MapSectionComponent from "./components/MapSectionComponent";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <AboutUs />
      <Services />
      <WhyUs />
      <FAQ />
      <Consultation />
      <Testimonials />
      <MapSectionComponent address="Avenida Paulista, São Paulo" />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
