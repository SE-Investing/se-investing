import React from 'react';
import { Building2, Mail, Phone, MapPin, Instagram } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#141414] text-background py-6" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
                <span className="text-xl font-bold">
                  {t('footer.company')}
                </span>
            </div>
          </div>

          {/* Contact Info */}
          <div id="contact" className="space-y-4">
            <h3 className="text-lg font-semibold">{t('footer.contactTitle')}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <span className="text-background/80">{t('footer.registration')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-background/80" />
                <span className="text-background/80">{t('footer.email')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="text-background/60">
            {(() => {
              const copyright = t('footer.copyright');
              const name = 'Sintija Birgele';
              const url = 'https://de.linkedin.com/in/sintija-birgele';
              if (copyright.includes(name)) {
                const [before, after] = copyright.split(name);
                return <span>{before}<a href={url} target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">{name}</a>{after}</span>;
              }
              return copyright;
            })()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;