import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { useTranslation } from "react-i18next";
// Helper to get all images in a folder (publicassets/*)
const assetFolders = ["builders", "commercial", "maintenance", "roofing", "underfloor"];
const assetImages: Record<string, { src: string; title: string }[]> = {
  "construction/brasil": [
  { src: "assets/construction/brasil/itacimirim obra.jpg", title: "residencial Aloha ville, (6 unidades residenciais)" },
  { src: "assets/construction/brasil/paulo afonso obra.jpg", title: "condomínio mistro (residencial comercial) Porto do Sol com 21 unidaded, 15 unidades residenciais e unidades comerciais" },
  { src: "assets/construction/brasil/paulo afonso.jpg", title: "condomínio mistro (residencial comercial) Porto do Sol com 21 unidaded, 15 unidades residenciais e unidades comerciais" },
  { src: "assets/construction/brasil/jvilla quinta das lagoas.jpg", title: "Villa Quinta das Lagoas Casa" },
  { src: "assets/construction/brasil/vitacimirim obra.jpg", title: "complexo residencial girassol (128 apartamentos)" },
  ],
  "construction/Urbanizacion un posto al sole Tenerife": [
    { src: "assets/construction/villette a sierra - Villaggia La Suerte - Tenerife/WhatsApp Image 2025-09-16 at 12.54.26 AM (1).jpeg", title: "Urbanizacion un posto al sole Tenerife" },
    { src: "assets/construction/villette a sierra - Villaggia La Suerte - Tenerife/WhatsApp Image 2025-09-16 at 12.54.26 AM (2).jpeg", title: "Urbanizacion un posto al sole Tenerife" },
    { src: "assets/construction/villette a sierra - Villaggia La Suerte - Tenerife/WhatsApp Image 2025-09-16 at 12.54.26 AM (3).jpeg", title: "Urbanizacion un posto al sole Tenerife" },
    { src: "assets/construction/villette a sierra - Villaggia La Suerte - Tenerife/WhatsApp Image 2025-09-16 at 12.54.26 AM (4).jpeg", title: "Urbanizacion un posto al sole Tenerife" },
    { src: "assets/construction/villette a sierra - Villaggia La Suerte - Tenerife/WhatsApp Image 2025-09-16 at 12.54.26 AM (5).jpeg", title: "Urbanizacion un posto al sole Tenerife" },
    { src: "assets/construction/villette a sierra - Villaggia La Suerte - Tenerife/WhatsApp Image 2025-09-16 at 12.54.26 AM (6).jpeg", title: "Urbanizacion un posto al sole Tenerife" },
    { src: "assets/construction/villette a sierra - Villaggia La Suerte - Tenerife/WhatsApp Image 2025-09-16 at 12.54.26 AM (7).jpeg", title: "Urbanizacion un posto al sole Tenerife" },
    { src: "assets/construction/villette a sierra - Villaggia La Suerte - Tenerife/WhatsApp Image 2025-09-16 at 12.54.26 AM.jpeg", title: "Urbanizacion un posto al sole Tenerife" },
    { src: "assets/construction/villette a sierra - Villaggia La Suerte - Tenerife/WhatsApp Image 2025-09-16 at 12.54.27 AM (2).jpeg", title: "Urbanizacion un posto al sole Tenerife" },
    { src: "assets/construction/villette a sierra - Villaggia La Suerte - Tenerife/WhatsApp Image 2025-09-16 at 12.54.27 AM (3).jpeg", title: "Urbanizacion un posto al sole Tenerife" },
    { src: "assets/construction/villette a sierra - Villaggia La Suerte - Tenerife/WhatsApp Image 2025-09-16 at 12.54.27 AM (4).jpeg", title: "Urbanizacion un posto al sole Tenerife" },
    { src: "assets/construction/villette a sierra - Villaggia La Suerte - Tenerife/WhatsApp Image 2025-09-16 at 12.54.27 AM (5).jpeg", title: "Urbanizacion un posto al sole Tenerife" },
    { src: "assets/construction/villette a sierra - Villaggia La Suerte - Tenerife/WhatsApp Image 2025-09-16 at 12.54.27 AM.jpeg", title: "Urbanizacion un posto al sole Tenerife" },
    { src: "assets/construction/villette a sierra - Villaggia La Suerte - Tenerife/WhatsApp Image 2025-09-16 at 12.54.28 AM (1).jpeg", title: "Urbanizacion un posto al sole Tenerife" },
    { src: "assets/construction/villette a sierra - Villaggia La Suerte - Tenerife/WhatsApp Image 2025-09-16 at 12.54.28 AM (2).jpeg", title: "Urbanizacion un posto al sole Tenerife" },
    { src: "assets/construction/villette a sierra - Villaggia La Suerte - Tenerife/WhatsApp Image 2025-09-16 at 12.54.28 AM.jpeg", title: "Urbanizacion un posto al sole Tenerife" },
    { src: "assets/construction/villette a sierra - Villaggia La Suerte - Tenerife/2009, condomínio misto (residencial comercial) Porta do Sol com 21 unidades.jpeg", title: "2009, condomínio misto (residencial comercial) Porta do Sol com 21 unidades, 15 unidades residenciais e unidades comerciais" },
    { src: "assets/construction/villette a sierra - Villaggia La Suerte - Tenerife/2011, vila quinta das lagoas casa 2.jpeg", title: "Vila Quinta Das Lagoas Casa 2" },
    { src: "assets/construction/villette a sierra - Villaggia La Suerte - Tenerife/2011, vila quinta das lagoas casa.jpeg", title: "Vila Quinta Das Lagoas Casa" },
    { src: "assets/construction/villette a sierra - Villaggia La Suerte - Tenerife/2013, complexo residencial girassol (128 apartamentos).jpeg", title: "Complexo Residencial Girassol (128 Apartamentos)" },
    { src: "assets/construction/villette a sierra - Villaggia La Suerte - Tenerife/2017, condomínio misto buganvila (14 unidade residencial e 11 unidades comercial).jpeg", title: "Condomínio Misto Buganvila (14 Unità Residencial e 11 Unità Commercial)" },
    { src: "assets/construction/villette a sierra - Villaggia La Suerte - Tenerife/5: 2018 residencial Aloha ville, (6 unidades residenciais).jpeg", title: "Residencial Aloha Ville (6 Unità Residenciais)" },
  ],
};

function getFolderFromImagePath(imagePath: string) {
  // Defensive: check if imagePath is a string
  if (typeof imagePath !== 'string') return null;
  const normalized = imagePath.replace(/^\.\//, "");
  const match = normalized.match(/^assets\/((?:[^/]+\/)*[^/]+)\//);
  return match ? match[1] : null;
}

const ProjectsScroll = () => {
  const { t } = useTranslation();
  // Get projects from i18n locale using t with returnObjects: true
  let projects = t('projectsScroll.projects', { returnObjects: true });
  if (!Array.isArray(projects)) projects = [];
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  // Show all projects, no filtering
  const filteredProjects = projects;

  // Responsive check (mobile/desktop)
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' ? window.innerWidth < 768 : false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Per-project carousel state for mobile (current image index)
  const [mobileCurrents, setMobileCurrents] = useState<{ [projectIdx: number]: number }>({});
  // Desktop: Track current pair index for fade
  const [desktopPairIndexes, setDesktopPairIndexes] = useState<{ [projectIdx: number]: number }>({});
  const containerRefs = useRef<{ [projectIdx: number]: HTMLDivElement | null }>({});

  // Carousel state for each project (for legacy per-slide carousel)
  const [carouselIndexes, setCarouselIndexes] = useState<{ [projectIdx: number]: number }>({});

  // Preload next two images for the active carousel to avoid loading delay (desktop only)
  useEffect(() => {
    if (!filteredProjects[activeIndex]) return;
    const project = filteredProjects[activeIndex];
    const folder = getFolderFromImagePath(project.image);
    const images = folder ? assetImages[folder] || [] : [];
    const currentIdx = carouselIndexes[activeIndex] || 0;
    [1, 2].forEach(offset => {
      const preloadIdx = (currentIdx + offset) % images.length;
      const imgObj = images[preloadIdx];
      if (imgObj && imgObj.src) {
        const img = new window.Image();
        img.src = imgObj.src;
      }
    });
  }, [activeIndex, carouselIndexes, filteredProjects]);

  // Mobile: Autoplay for each project's image
  useEffect(() => {
    if (!isMobile) return;
    const intervals: { [projectIdx: number]: NodeJS.Timeout } = {};
    filteredProjects.forEach((project, idx) => {
      const folder = getFolderFromImagePath(project.image);
      const images = folder && Array.isArray(assetImages[folder]) ? assetImages[folder] : [];
      if (images.length > 1) {
        intervals[idx] = setInterval(() => {
          setMobileCurrents(prev => ({
            ...prev,
            [idx]: ((prev[idx] || 0) + 1) % images.length
          }));
        }, 3500);
      }
    });
    return () => {
      Object.values(intervals).forEach(clearInterval);
    };
  }, [isMobile, filteredProjects]);

  // Desktop: Fade in/out between pairs using GSAP
  useEffect(() => {
    if (isMobile) return;
    const intervalIds: { [projectIdx: number]: NodeJS.Timeout } = {};
    filteredProjects.forEach((project, idx) => {
      const folder = getFolderFromImagePath(project.image);
      const images = folder && Array.isArray(assetImages[folder]) ? assetImages[folder] : [project.image];
      if (images.length <= 2) return;
      intervalIds[idx] = setInterval(() => {
        setDesktopPairIndexes(prev => {
          const current = prev[idx] || 0;
          return { ...prev, [idx]: (current + 2) % images.length };
        });
      }, 3500);
    });
    return () => {
      Object.values(intervalIds).forEach(clearInterval);
    };
  }, [isMobile, filteredProjects]);

  // GSAP fade effect for desktop
  useEffect(() => {
    if (isMobile) return;
    filteredProjects.forEach((project, idx) => {
      const ref = containerRefs.current[idx];
      if (ref) {
        gsap.fromTo(ref, { opacity: 0 }, { opacity: 1, duration: 0.8, ease: "power2.inOut" });
      }
    });
  }, [desktopPairIndexes, isMobile, filteredProjects]);

  // Handlers for desktop film roll
  // handleArrow removed: no longer needed after removing auto sliding and offsets

    // Preload next two images for the active carousel to avoid loading delay
  useEffect(() => {
    if (!filteredProjects[activeIndex]) return;
    const project = filteredProjects[activeIndex];
    const folder = getFolderFromImagePath(project.image);
    const images = folder ? assetImages[folder] || [] : [];
    const currentIdx = carouselIndexes[activeIndex] || 0;
    [1, 2].forEach(offset => {
      const preloadIdx = (currentIdx + offset) % images.length;
      const imgObj = images[preloadIdx];
      if (imgObj && imgObj.src) {
        const img = new window.Image();
        img.src = imgObj.src;
      }
    });
  }, [activeIndex, carouselIndexes, filteredProjects]);
  // Autoplay effect for active project
  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndexes(prev => {
        const next = { ...prev };
        filteredProjects.forEach((project, idx) => {
          if (idx === activeIndex) {
            const folder = getFolderFromImagePath(project.image);
            const images = folder ? assetImages[folder] || [] : [];
            if (images.length > 1) {
              next[idx] = ((prev[idx] || 0) + 1) % images.length;
            }
          }
        });
        return next;
      });
    }, 3500);
    return () => clearInterval(interval);
  }, [activeIndex, filteredProjects]);

  // Carousel navigation handlers
  const handlePrev = (projectIdx: number, imagesLen: number) => {
    setCarouselIndexes(prev => ({
      ...prev,
      [projectIdx]: ((prev[projectIdx] || 0) - 1 + imagesLen) % imagesLen,
    }));
  };
  const handleNext = (projectIdx: number, imagesLen: number) => {
    setCarouselIndexes(prev => ({
      ...prev,
      [projectIdx]: ((prev[projectIdx] || 0) + 1) % imagesLen,
    }));
  }

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !containerRef.current.children[1] || !containerRef.current.children[1].children) return;
      const sections = containerRef.current.children[1].children;
      const scrollPosition = window.scrollY - containerRef.current.offsetTop;
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i] as HTMLElement;
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (
          scrollPosition >= sectionTop - sectionHeight / 2 &&
          scrollPosition < sectionTop + sectionHeight / 2
        ) {
          setActiveIndex(i);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [filteredProjects.length]);

  // --- VERTICAL CAROUSEL UI ---
  // Show all images from all projects in a single carousel
  // Flatten all images from assetImages
  const allImages: { src: string; title: string }[] = Object.values(assetImages).flat();
  const [carouselIndex, setCarouselIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex(prev => (prev + 1) % allImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [allImages.length]);

  // Responsive: show one image at a time on mobile, two images per slide on desktop
  // Responsive: show one image at a time on mobile, two images per slide on desktop
  // Only declare these hooks once
  // Responsive: show one image at a time on mobile, two images per slide on desktop
  // Only declare these hooks once
  // (Already declared above, so remove these duplicate lines)

  return (
    <section id="projects">
      <div className="bg-background sm:py-2 z-40 border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center sm:mb-4 md:mb-6">
            <h2 className="text-4xl md:text-4xl font-light mb-6 mt-8 text-[#7c6714] drop-shadow-lg ">
              {t('projectsScroll.title')}
            </h2>
          </div>
        </div>
      </div>
      <div
        className="fixed left-0 right-0 bg-gradient-to-b from-background/90 to-muted/50 flex flex-col justify-center w-full px-4 md:px-24"
        style={{ width: '100vw', position: 'relative' }}
        ref={containerRef}
      >
        <div className="flex flex-col justify-center w-full max-w-full mx-auto py-8 pb-1 relative">
          {/* Carousel with all images, responsive */}
          {allImages.length > 0 && (
            <div className="flex flex-col items-center justify-center min-h-[20vh] w-full transition-all duration-500">
              <div className={`w-full flex ${isMobile ? 'flex-col' : 'flex-row'} items-stretch justify-center`} style={{ maxWidth: '100vw' }}>
                {(isMobile ? [allImages[carouselIndex]] : [allImages[carouselIndex], allImages[(carouselIndex + 1) % allImages.length]]).map((imgObj, i) => (
                  <div
                    key={imgObj.src}
                    className={`relative h-[300px] md:h-[600px] overflow-hidden ${!isMobile && (i === 0 ? 'rounded-l-2xl' : 'rounded-r-2xl')}`}
                    style={{ width: isMobile ? '100vw' : '50vw', maxWidth: isMobile ? '100vw' : '50vw', margin: 0, padding: 0 }}
                  >
                    <img
                      src={imgObj.src}
                      alt={imgObj.title}
                      className="h-full w-full object-cover select-none pointer-events-none"
                      style={{ objectFit: 'cover', width: '100%', height: '100%', maxWidth: '100%', maxHeight: '100%' }}
                      draggable={false}
                    />
                    {/* Badge and title only on first image */}
                    {i === 0 && (
                      <>
                        <div className="absolute top-6 left-6 z-10">
                          <Badge variant="default" className="mb-4 w-fit flex items-center gap-1 pl-2 pr-1">
                            <span>{t('badge.completed', 'Completato')}</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="22"
                              height="22"
                              fill="none"
                              viewBox="0 0 22 22"
                              stroke="currentColor"
                              strokeWidth="2"
                              className="text-green-500"
                              style={{ minWidth: 22, minHeight: 22 }}
                            >
                              <circle cx="11" cy="11" r="8.5" stroke="currentColor" strokeWidth="2" fill="#22c55e" />
                              <path d="M6.5 11.5l2.5 2.5 5-5" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </Badge>
                        </div>
                        <div className={`absolute inset-0 flex flex-col justify-end items-start pointer-events-none ${isMobile ? 'pb-0 px-4' : 'p-8'}`}>
                          <h3 className={`font-bold text-white mb-3 backdrop-blur-md bg-black/20 rounded-xl px-4 py-3 shadow-lg ${isMobile ? 'text-base' : 'text-xl md:text-2xl'}`}>
                            {imgObj.title}
                          </h3>
                        </div>
                      </>
                    )}
                  </div>
                ))}
                <button
                  onClick={() => setCarouselIndex(i => (i - (isMobile ? 1 : 2) + allImages.length) % allImages.length)}
                  className={`absolute ${isMobile ? 'left-1' : 'left-4'} top-1/2 -translate-y-1/2 rounded-full flex items-center justify-center z-10 transition-opacity duration-200 ${isMobile ? 'p-2 bg-transparent' : 'p-2 bg-black/40 hover:bg-black/60'}`}
                  tabIndex={0}
                  aria-label="Previous Images"
                >
                  <svg width={isMobile ? 28 : 32} height={isMobile ? 28 : 32} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
                </button>
                <button
                  onClick={() => setCarouselIndex(i => (i + (isMobile ? 1 : 2)) % allImages.length)}
                  className={`absolute ${isMobile ? 'right-0 m-0 p-0' : 'right-4'} top-1/2 -translate-y-1/2 rounded-full flex items-center justify-center z-10 transition-opacity duration-200 ${isMobile ? 'bg-transparent' : 'p-2 bg-black/40 hover:bg-black/60'}`}
                  tabIndex={0}
                  aria-label="Next Images"
                >
                  <svg width={isMobile ? 28 : 32} height={isMobile ? 28 : 32} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsScroll;