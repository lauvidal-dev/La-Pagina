import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Process from "@/components/process";
import Portfolio from "@/components/portfolio";
import Pricing from "@/components/pricing";
import Contact from "@/components/contacto";
import Footer from "@/components/footer";
import Stats from "@/components/stats";
import SectionWrapper from "@/components/section-wrapper";

export default function Home() {
  return (
    <main className="text-white overflow-x-hidden">
      <Navbar />

      <SectionWrapper glow="strong">
        <Hero />
      </SectionWrapper>

      <SectionWrapper glow="medium">
        <Process />
      </SectionWrapper>

      <Footer />
    </main>
  );
}