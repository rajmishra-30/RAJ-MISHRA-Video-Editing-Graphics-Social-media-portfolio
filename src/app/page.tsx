import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Covers from "./components/Covers";
import Showreel from "./components/Showreel"
import Contact from "./components/Contact";
import PortfolioWork from "./components/PortfolioWork";
import Skills from "./components/Skills";
import Toolkit from "./components/Toolkit";
import Experience from "./components/Experience";
import Footer from "./components/Footer";




export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Showreel />
      <Covers />
      <PortfolioWork/>
      <Skills />
      <Toolkit />
      <Experience />
    
       <Contact />
       <Footer /> 
    </>
  );
}
