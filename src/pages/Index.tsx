
import ModernNavigation from "@/components/navigation/ModernNavigation";
import ConstructionHero from "@/components/hero/ConstructionHero";
import ServiceCard2 from "@/components/sections/ServiceCard2";
import ProjectsScroll from "@/components/sections/ProjectsScroll";
import SolarScroll from "@/components/sections/SolarScroll";
import Footer from "@/components/sections/Footer";
import WorkWithUs from "@/components/sections/WorkWithUs";
import { useEffect, useRef } from "react";
import SustainabilitySection from "@/components/sections/SustainabilitySection";
import { useTranslation } from "react-i18next";

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const teamPhotoRef = useRef<HTMLImageElement>(null);
  const { t } = useTranslation();

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
            <h2 className="text-4xl md:text-5xl font-light mb-2 md:mb-8 text-left drop-shadow-lg w-full md:text-center">{t('about.title')}</h2>
            <p className="font-bold text-xl font-normal mb-2 text-[#7c6714] text-left w-full md:text-center text-justify tracking-tighter">{t('about.subtitle')}</p>
            <p className="text-gray-800 text-lg leading-relaxed text-justify [word-spacing:-1.5px] w-full font-extralight">
              {t('about.text')}
            </p>
          </div>
        </section>
        <ProjectsScroll />
        {/* SolarScroll section title styled like ProjectsScroll */}
        <div className="bg-background sm:py-2 z-40 border-b border-border shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center sm:mb-4 md:mb-6">
              <h2 className="text-4xl md:text-4xl font-light mb-6 mt-8 text-[#7c6714] drop-shadow-lg ">
                {t('solarScroll.title')}
              </h2>
              <h3 className="font-light text-gray-600 mb-3 text-base md:text-xl max-w-4xl mx-auto text-justify">
                {t('solarScroll.subtitle')}
              </h3>
            </div>
          </div>
        </div>
        <SolarScroll />
        <ServiceCard2 />
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
