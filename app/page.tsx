"use client"
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Calculator from "@/components/sections/Calculator";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import Companies from "@/components/sections/Companies";
import ContactSection from "@/components/sections/ContactSection";


export default function Home() {
  
  return (
    <main className="bg-white text-gray-900">
      <Navbar/>
      
      
      <section id="home" className="scroll-mt-24">
        <Hero />
      </section>

      <Stats />
      <Companies/>

      <section id="about" className="scroll-mt-24">
        <About />
      </section>

      <section id="products" className="scroll-mt-24">
        <Services />
      </section>

      <section id="calculators" className="scroll-mt-24">
        <Calculator />
      </section>
      <CTA />
      <Testimonials />
      
      <section id="contact" className="scroll-mt-24">
        <ContactSection/>
      </section>
      <Footer/>
    </main>
  );
}