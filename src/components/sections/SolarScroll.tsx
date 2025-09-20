import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

// Statically list all images in assets/construction/solar
const solarImages = [
  "assets/construction/solar/WhatsApp Image 2025-09-18 at 1.59.49 AM.jpeg",
  "assets/construction/solar/WhatsApp Image 2025-09-18 at 2.01.04 AM.jpeg",
  "assets/construction/solar/WhatsApp Image 2025-09-18 at 2.00.05 AM.jpeg",
  "assets/construction/solar/WhatsApp Image 2025-09-18 at 2.03.10 AM.jpeg",
  "assets/construction/solar/WhatsApp Image 2025-09-18 at 2.00.50 AM.jpeg"
];

const SolarScroll = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' ? window.innerWidth < 768 : false);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Autoplay for all devices
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(i => (i + 1) % solarImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [solarImages.length]);

  // Fade effect
  useEffect(() => {
    if (imageRef.current) {
      gsap.fromTo(imageRef.current, { opacity: 0 }, { opacity: 1, duration: 0.8, ease: "power2.inOut" });
    }
  }, [activeIndex]);

  const handlePrev = () => {
    setActiveIndex(i => (i - 1 + solarImages.length) % solarImages.length);
  };
  const handleNext = () => {
    setActiveIndex(i => (i + 1) % solarImages.length);
  };

  return (
    <section id="solar-projects" className="w-full flex flex-col items-center justify-center pb-8">
        <div className="w-full relative">
          {/* Title and subtitle overlay, styled like ProjectsScroll, aligned to bottom */}
          <div className="absolute bottom-0 left-0 w-full flex flex-col items-start justify-end z-20 px-4 md:px-8 pb-8 pointer-events-none">
            <h2 className="font-bold text-white mb-1 md:mb-2 backdrop-blur-md bg-black/20 rounded-xl px-3 md:px-4 py-2 md:py-3 shadow-lg text-lg md:text-3xl max-w-2xl">
              Progettazione e studi di fattibilità
            </h2>
            <h3 className="font-normal text-white mb-1 backdrop-blur-md bg-black/20 rounded-xl px-3 md:px-4 py-2 md:py-3 shadow-lg text-sm md:text-lg max-w-2xl">
              Mettiamo in campo competenze e innovazione nel settore delle tecnologie per la transizione energetica, decarbonizzazione e gestione integrata dei rifiuti. Dalla fattibilità alla progettazione fino alla messa in opera.
            </h3>
          </div>
          <div className="relative w-full h-[300px] md:h-[600px] rounded-2xl overflow-hidden flex items-center justify-center" style={{maxWidth: '100vw'}}>
            <img
              ref={imageRef}
              src={solarImages[activeIndex]}
              alt="Solar Project"
              className="object-cover w-full h-full rounded-2xl"
              style={{width: '100vw', maxWidth: '100vw', height: '100%', maxHeight: '100%'}} 
              draggable={false}
            />
              {/* Navigation buttons exactly as in ProjectsScroll */}
              <button
                onClick={handlePrev}
                className={`absolute ${isMobile ? 'left-1' : 'left-4'} top-1/2 -translate-y-1/2 rounded-full flex items-center justify-center z-30 transition-opacity duration-200 ${isMobile ? 'p-2 bg-transparent' : 'p-2 bg-black/40 hover:bg-black/60'}`}
                tabIndex={0}
                aria-label="Previous Images"
              >
                <svg width={isMobile ? 28 : 32} height={isMobile ? 28 : 32} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
              </button>
              <button
                onClick={handleNext}
                className={`absolute ${isMobile ? 'right-3' : 'right-4'} top-1/2 -translate-y-1/2 rounded-full flex items-center justify-center z-10 transition-opacity duration-200 ${isMobile ? 'bg-transparent' : 'p-2 bg-black/40 hover:bg-black/60'}`}
                tabIndex={0}
                aria-label="Next Images"
              >
                <svg width={isMobile ? 28 : 32} height={isMobile ? 28 : 32} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
              </button>
          </div>
          <div className="flex justify-center mt-4 gap-2">
            {solarImages.map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full ${activeIndex === idx ? 'bg-primary' : 'bg-gray-300'} transition-all`}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
    </section>
  );
};

export default SolarScroll;
