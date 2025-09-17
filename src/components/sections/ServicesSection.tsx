import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const ServicesSection = () => {
  // Responsive check (mobile/desktop)
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' ? window.innerWidth < 768 : false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
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
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:gap-4 md:grid-cols-2 items-start justify-center md:pt-8 px-0">
          {/* Card 1 */}
          <div className="flex justify-start items-center w-full min-w-[400px] mb-2">
            <div className={`backdrop-blur-md bg-white/70 rounded-xl shadow-lg w-full h-[520px] flex ${isMobile ? 'flex-col' : 'flex-row'} items-center gap-0 relative overflow-hidden`}>
              {/* Text first on mobile, image below; desktop: image left, text right */}
              {isMobile ? (
                <>
                  <div className="flex-1 flex flex-col justify-center items-start text-left z-10 h-full">
                    <h3 className="text-4xl md:text-4xl font-light mb-4 mt-2 text-[#7c6714] drop-shadow-lg">La mission</h3>
                    <p className="font-normal text-left text-xl mb-2 text-[#7c6714] w-full">Studi di fattibilità economica e progettazione tecnica</p>
                    <div className="text-gray-800 text-justify [word-spacing:-1.5px] text-lg leading-relaxed text-left w-full">
                      <p className="mb-2 text-justify">Portare competenze nel mondo delle infrastrutture e delle tecnologie sostenibili.Ogni progetto è un passo avanti per un’economia più sostenibile. Da qui il nome S “Sustainable” E “Economy” Investing.</p>
                    </div>
                  </div>
                  <div className="w-full h-48 flex items-center mt-2">
                    <img
                      src="./assets/construction/villette a sierra - Villaggia La Suerte - Tenerife/2011, vila quinta das lagoas casa 2.jpeg"
                      alt="2011, Vila Quinta das Lagoas Casa 2"
                      className="object-cover w-full h-full rounded-b-xl"
                      style={{ maskImage: 'linear-gradient(to top, white 0%, white 60%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to top, white 0%, white 60%, transparent 100%)' }}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="w-1/2 h-full flex items-center">
                    <img
                      src="./assets/construction/villette a sierra - Villaggia La Suerte - Tenerife/2011, vila quinta das lagoas casa 2.jpeg"
                      alt="2011, Vila Quinta das Lagoas Casa 2"
                      className="object-cover w-full h-full rounded-l-xl"
                      style={{ maskImage: 'linear-gradient(to right, white 0%, white 60%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to right, white 0%, white 60%, transparent 100%)' }}
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-center items-start text-left z-10 h-full">
                    <h3 className="text-4xl md:text-4xl font-light mb-4 mt-2 text-[#7c6714] drop-shadow-lg">La mission</h3>
                    <p className="font-normal text-left text-xl mb-2 text-[#7c6714] w-full">Studi di fattibilità economica e progettazione tecnica</p>
                    <div className="text-gray-800 text-justify [word-spacing:-1.5px] text-lg leading-relaxed text-left w-full">
                      <p className="mb-2 text-justify">Portare competenze nel mondo delle infrastrutture e delle tecnologie sostenibili.Ogni progetto è un passo avanti per un’economia più sostenibile. Da qui il nome S “Sustainable” E “Economy” Investing.</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          {/* Card 2 */}
          <div className="flex justify-start items-center w-full min-w-[400px] mb-2 md:mb-4">
            <div className={`backdrop-blur-md bg-white/70 rounded-xl shadow-lg w-full h-[520px] flex ${isMobile ? 'flex-col' : 'flex-row'} items-center gap-0 relative overflow-hidden`}>
              {isMobile ? (
                <>
                  <div className="flex-1 flex flex-col justify-center items-start text-left z-10 h-full">
                    <h2 className="mt-2 text-4xl md:text-4xl text-left font-light mb-4 text-[#7c6714] drop-shadow-lg">Organizzazione e efficienza tramite digitale</h2>
                    <div className="text-gray-800 text-lg leading-relaxed text-justify [word-spacing:-1.5px] w-full font-extralight mb-2">
                      <p className="mb-2 text-justify">Grazie ad un apposito sistema informatico AI interno interconnesso con gli hardware di cantiere possiamo tenere traccia delle lavorazioni quotidiane, tenere aggiornato il cliente anche a distanza tramite condivisione cloud facilitare il controllo di gestione e individuare eventuali scostamenti rispetto al cronoprogramma.</p>
                    </div>
                  </div>
                  <div className="w-full h-48 flex items-center mt-2">
                    <img
                      src="assets/construction/brasil/itacimirim obra.jpg"
                      alt="Solar Cinesi Germ"
                      className="object-cover w-full h-full rounded-b-xl"
                      style={{ maskImage: 'linear-gradient(to top, white 0%, white 60%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to top, white 0%, white 60%, transparent 100%)' }}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="w-1/2 h-full flex items-center">
                    <img
                      src="assets/construction/brasil/itacimirim obra.jpg"
                      alt="Solar Cinesi Germ"
                      className="object-cover w-full h-full rounded-l-xl"
                      style={{ maskImage: 'linear-gradient(to right, white 0%, white 60%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to right, white 0%, white 60%, transparent 100%)' }}
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-center items-start text-left z-10 h-full">
                    <h2 className="mt-2 text-4xl md:text-4xl text-left font-light mb-4 text-[#7c6714] drop-shadow-lg">Organizzazione e efficienza tramite digitale</h2>
                    <div className="text-gray-800 text-lg leading-relaxed text-justify [word-spacing:-1.5px] w-full font-extralight mb-2">
                      <p className="mb-2 text-justify">Grazie ad un apposito sistema informatico AI interno interconnesso con gli hardware di cantiere possiamo tenere traccia delle lavorazioni quotidiane, tenere aggiornato il cliente anche a distanza tramite condivisione cloud facilitare il controllo di gestione e individuare eventuali scostamenti rispetto al cronoprogramma.</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;