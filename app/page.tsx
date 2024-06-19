import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Brands from "./components/Brands";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
    <Hero />
    <About />
    <Experience />
    <Skills />
    <Projects />
    <Brands />
    <Contact />
    <Footer />
    </>
  );
}
