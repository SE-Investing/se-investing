
import ConstructionBackground from "@/components/background/ConstructionBackground";
import ModernNavigation from "@/components/navigation/ModernNavigation";
import ConstructionHero from "@/components/hero/ConstructionHero";
import ServicesSection from "@/components/sections/ServicesSection";
import ProjectsScroll from "@/components/sections/ProjectsScroll";
import Footer from "@/components/sections/Footer";
import WorkWithUs from "@/components/sections/WorkWithUs";
import { useEffect, useRef, useState } from "react";
import SustainabilitySection from "@/components/sections/SustainabilitySection";
import { Button } from "@/components/ui/button";

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const teamPhotoRef = useRef<HTMLImageElement>(null);

  // Hide .eapps-widget-toolbar-panel-share-block when it appears
  useHideShareBlock();
  return (
    <div className="relative min-h-screen">
      <div className="relative z-10">
        <ModernNavigation />
        <div ref={heroRef}>
          <ConstructionHero />
        </div>
        <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 py-4 md:py-12">
          <div className="w-full md:px-16 md:py-16">
            <h2 className="text-4xl md:text-5xl font-light mb-2 md:mb-8 text-[#00338D] text-left drop-shadow-lg w-full md:text-center">Perchè affidarci un nuovo lavoro?</h2>
            <p className="font-bold text-xl font-normal mb-2 text-[#00338D] text-left w-full md:text-center">In un settore ricco di insidie come quello edile il team S.E. Investing ci tiene a distinguersi per correttezza e trasparenza.</p>
            <p className="text-gray-800 text-lg leading-relaxed text-justify [word-spacing:-1.5px] w-full font-extralight">
              Garantisce sopralluoghi e preventivi in tempi certi, propone prezzi chiari senza sorprese, pianifica con precisione i tempi d'intervento e condivide anche quotidianamente gli avanzamenti lavori in cloud con i committenti più ansiosi.
            </p>
          </div>
        </section>
        
        <ServicesSection />
        <ProjectsScroll />
        <SustainabilitySection />
        <WorkWithUs />
        <Footer />
      </div>
    </div>
  );
};

function useHideShareBlock() {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `.eapps-widget-toolbar-panel-share-block { width: 0 !important; overflow: hidden !important; }`;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);
}
export default Index;
