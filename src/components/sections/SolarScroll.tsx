import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

// Statically list all images in assets/construction/solar
const solarImages = [
  "assets/construction/solar/WhatsApp Image 2025-09-18 at 1.59.49 AM.jpeg",
  "assets/construction/solar/WhatsApp Image 2025-09-18 at 2.01.04 AM.jpeg",
  "assets/construction/solar/WhatsApp Image 2025-09-18 at 2.00.05 AM.jpeg",
  "assets/construction/solar/WhatsApp Image 2025-09-18 at 2.03.10 AM.jpeg",
  "assets/construction/solar/WhatsApp Image 2025-09-18 at 2.00.50 AM.jpeg",
  "assets/construction/solar/WhatsApp Image 2025-09-18 at 2.02.41 AM.jpeg"
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
        <div className="relative w-full h-[300px] md:h-[600px] rounded-2xl overflow-hidden flex items-center justify-center" style={{maxWidth: '100vw'}}>
          <img
            ref={imageRef}
            src={solarImages[activeIndex]}
            alt="Solar Project"
            className="object-cover w-full h-full rounded-2xl"
            style={{width: '100vw', maxWidth: '100vw', height: '100%', maxHeight: '100%'}} 
            draggable={false}
          />
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full p-2 flex items-center justify-center bg-black/40 hover:bg-black/60 transition-opacity duration-200 z-10"
            aria-label="Previous"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-2 flex items-center justify-center bg-black/40 hover:bg-black/60 transition-opacity duration-200 z-10"
            aria-label="Next"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
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
