import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const ServiceCard2 = () => {
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' ? window.innerWidth < 768 : false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  const { t } = useTranslation();
  return (
    <div className="flex justify-center items-center w-full mb-2">
  <div className={`backdrop-blur-md bg-white/70 rounded-xl shadow-lg w-full max-w-4xl mx-auto h-[750px] flex flex-col items-center gap-0 relative overflow-hidden px-2 md:px-8 py-8`}>
        <div className="flex-1 flex flex-col justify-center items-start text-left z-10 h-full px-4">
            <h2 className="mt-2 text-3xl md:text-4xl text-left font-light mb-4 text-[#7c6714] drop-shadow-lg">{t('efficiency_and_organization')}</h2>
          <div className="text-gray-800 text-lg leading-relaxed text-justify [word-spacing:-2.5px] w-full font-extralight mb-2">
              <p className="mb-2 text-justify">{t('thanks_to_ai_system')}</p>
          </div>
        </div>
  <div className="w-full h-96 flex items-center mt-2">
          <img
            src="assets/construction/brasil/itacimirim obra.jpg"
            alt="Solar Cinesi Germ"
            className="object-cover w-full h-full rounded-b-xl"
            style={{ maskImage: 'linear-gradient(to top, white 0%, white 60%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to top, white 0%, white 60%, transparent 100%)' }}
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard2;
