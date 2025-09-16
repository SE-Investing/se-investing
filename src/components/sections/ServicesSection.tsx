import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Building, Wrench, Construction, ClipboardCheck, Users, Leaf } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const iconMap = {
  building: Building,
  wrench: Wrench,
  construction: Construction,
  'clipboard-check': ClipboardCheck,
};

const serviceImages = ['../assets/construction-1.jpg', '../assets/maintenance/construction-2.jpg', '../assets/construction-3.jpeg', '../assets/construction-4.jpeg'];

const ServicesSection = () => {
  const { content } = useLanguage();
  // Modal logic removed
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const sections = containerRef.current.querySelectorAll('[data-service-panel]');
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, index) => {
        const element = section as HTMLElement;
        const rect = element.getBoundingClientRect();
        const elementTop = window.scrollY + rect.top;
        const elementBottom = elementTop + element.offsetHeight;

        if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
          setActiveIndex(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const blockRef = useRef<HTMLDivElement>(null);
  const endRef = useRef<HTMLParagraphElement>(null);

  return (
    <>
      <section id="services" className="relative w-full flex items-stretch overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-8 items-start justify-center md:pt-8 px-0">
          {/* Card 1 */}
          <div className="flex justify-start items-center w-full min-w-[400px] mb-8">
            <div className="backdrop-blur-md bg-white/70 rounded-xl shadow-lg w-full h-[520px] flex flex-row items-center gap-0 relative overflow-hidden">
              <div className="w-1/2 h-full flex items-center">
                <img
                  src="./assets/construction/brasil/2011, vila quinta das lagoas casa 2.jpeg"
                  alt="2011, Vila Quinta das Lagoas Casa 2"
                  className="object-cover w-full h-full rounded-l-xl"
                  style={{ maskImage: 'linear-gradient(to right, white 0%, white 60%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to right, white 0%, white 60%, transparent 100%)' }}
                />
              </div>
              <div className="flex-1 flex flex-col justify-center items-start text-left z-10 h-full">
                <h3 className="text-4xl md:text-4xl font-light mb-4 mt-2 text-[#00338D] drop-shadow-lg">Studi di fattibilità e progettazione</h3>
                <p className="font-normal text-left text-xl mb-2 text-[#00338D] w-full">Studi di fattibilità economica e progettazione tecnica</p>
                <div className="text-gray-800 text-justify [word-spacing:-1.5px] text-lg leading-relaxed text-left w-full">
                  <p className="mb-2 text-justify">- H2</p>
                  <p className="mb-2 text-justify">- Funivia</p>
                  <p className="mb-2 text-justify" ref={endRef}>- Turismo canane Brasile</p>
                </div>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="flex justify-start items-center w-full min-w-[400px] mb-8">
            <div className="backdrop-blur-md bg-white/70 rounded-xl shadow-lg w-full h-[520px] flex flex-row items-center gap-0 relative overflow-hidden">
              <div className="w-1/2 h-full flex items-center">
                <img
                  src="./assets/construction/villette a sierra - Villaggia La Suerte - Tenerife/WhatsApp Image 2025-09-16 at 12.54.28 AM.jpeg"
                  alt="Nuove Costruzioni e ristrutturazioni"
                  className="object-cover w-full h-full rounded-l-xl"
                  style={{ objectPosition: 'center 20%', maskImage: 'linear-gradient(to right, white 0%, white 60%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to right, white 0%, white 60%, transparent 100%)' }}
                />
              </div>
              <div className="flex-1 flex flex-col justify-center items-start text-left z-10 h-full">
                <h2 className="mt-2 text-4xl md:text-4xl text-left font-light mb-4 text-[#00338D] drop-shadow-lg">nuove Costruzioni e ristrutturazioni</h2>
                <p className="font-normal text-left text-xl mb-2 text-[#00338D] mb-2">Realizzazione e manutenzione</p>
                <div className="text-gray-800 text-lg leading-relaxed text-justify [word-spacing:-1.5px] w-full font-extralight mb-2">
                  <p className="mb-2 text-justify">- Teme</p>
                  <p className="mb-2 text-justify">- Basi</p>
                  <p className="mb-2 text-justify">- SAL</p>
                  <p className="mb-2 text-justify">- Manut. ospedali Africa</p>
                </div>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="flex justify-start items-center w-full min-w-[400px] mb-8">
            <div className="backdrop-blur-md bg-white/70 rounded-xl shadow-lg w-full h-[520px] flex flex-row items-center gap-0 relative overflow-hidden">
              <div className="w-1/2 h-full flex items-center">
                <img
                  src="./assets/complexes/villa%20quinta%20das%20lagoas.jpg"
                  alt="Macchinari e Mezzi"
                  className="object-cover w-full h-full rounded-l-xl"
                  style={{ maskImage: 'linear-gradient(to right, white 0%, white 60%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to right, white 0%, white 60%, transparent 100%)' }}
                />
              </div>
              <div className="flex-1 flex flex-col justify-center items-start text-left z-10 h-full">
                <h3 className="text-4xl md:text-4xl font-light mb-4 mt-2 text-[#00338D] drop-shadow-lg">Macchinari e Mezzi</h3>
                <div className="text-gray-800 text-justify [word-spacing:-1.5px] text-lg leading-relaxed text-left w-full">
                  <p className="mb-2 text-justify">- Rifiuti green thesis</p>
                  <p className="mb-2 text-justify">- Uomo fratello algo</p>
                </div>
              </div>
            </div>
          </div>
          {/* Card 4 */}
          <div className="flex justify-start items-center w-full min-w-[400px] mb-8">
            <div className="backdrop-blur-md bg-white/70 rounded-xl shadow-lg w-full h-[520px] flex flex-row items-center gap-0 relative overflow-hidden">
              <div className="w-1/2 h-full flex items-center">
                <img
                  src="./assets/complexes/itacimirim obra.jpg"
                  alt="Solar Cinesi Germ"
                  className="object-cover w-full h-full rounded-l-xl"
                  style={{ maskImage: 'linear-gradient(to right, white 0%, white 60%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to right, white 0%, white 60%, transparent 100%)' }}
                />
              </div>
              <div className="flex-1 flex flex-col justify-center items-start text-left z-10 h-full">
                <h2 className="mt-2 text-4xl md:text-4xl text-left font-light mb-4 text-[#00338D] drop-shadow-lg">Solar Cinesi Germ</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;