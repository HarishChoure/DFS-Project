import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Calculator from "@/components/sections/Calculator";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer"
export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      <Navbar/>
      <Hero/>
      <Stats/>
      <About/>
      <Services/>
      <Calculator/>
      <Testimonials/>
      <CTA/>
      <Footer/>
    </main>
  );
}