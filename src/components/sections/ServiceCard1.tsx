import React, { useState, useEffect } from 'react';

const ServiceCard1 = () => {
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' ? window.innerWidth < 768 : false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  return (
    <div className="flex justify-center items-center w-full mb-2">
  <div className={`backdrop-blur-md bg-white/70 rounded-xl shadow-lg w-full max-w-4xl mx-auto h-[750px] flex flex-col items-center gap-0 relative overflow-hidden px-2 md:px-8`}>
        <div className="flex-1 flex flex-col justify-center items-start text-left z-10 h-full px-4">
          <h3 className="text-3xl md:text-4xl font-light mb-4 mt-2 text-[#7c6714] drop-shadow-lg">Progettazione e studi di fattibilità</h3>
          <div className="text-gray-800 text-justify [word-spacing:-1.5px] text-lg leading-relaxed text-left w-full">
            <p className="mb-2 text-justify">Mettiamo in campo competenze e innovazione nel settore delle tecnologie per la transizione energetica, decarbonizzazione e gestione integrata dei rifiuti. Dalla fattibilità alla progettazione fino alla messa in opera.</p>
          </div>
        </div>
  <div className="w-full h-96 flex items-center mt-2">
          <img
            src="./assets/construction/villette a sierra - Villaggia La Suerte - Tenerife/2011, vila quinta das lagoas casa 2.jpeg"
            alt="2011, Vila Quinta das Lagoas Casa 2"
            className="object-cover w-full h-full rounded-b-xl"
            style={{ maskImage: 'linear-gradient(to top, white 0%, white 60%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to top, white 0%, white 60%, transparent 100%)' }}
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard1;
