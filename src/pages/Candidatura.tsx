import ModernNavigation from "@/components/navigation/ModernNavigation";
import Footer from "@/components/sections/Footer";
import { ArrowLeft } from "lucide-react";
import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import { useToast } from '@/hooks/use-toast';

export default function CandidaturaPage() {
  const { toast } = useToast();
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    nome: "",
    cognome: "",
    email: "",
    telefono: "",
    indirizzo: "",
    domande: "",
    privacy: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  // Removed CV upload
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacy) return;
    setIsSubmitting(true);
    // TODO: Add form submission logic here (e.g., API call)
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: t('candidatura.success.title'),
        description: t('candidatura.success.desc'),
      });
      setFormData({
        nome: "",
        cognome: "",
        email: "",
        telefono: "",
        indirizzo: "",
        domande: "",
        privacy: false,
      });
    }, 1000);
  };


  return (
    <div className="relative min-h-screen bg-background">
      <ModernNavigation />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 max-w-5xl mx-auto">
            {/* Back to home link */}
            <a href="/se-investing/" className="flex items-center mt-0 md:mt-10 text-black font-light mb-4 w-fit hover:underline">
              <ArrowLeft className="h-5 w-5 mr-2" />
              {t('privacyPolicy.back')}
            </a>
            <h1 className="text-3xl md:text-4xl font-editorial text-foreground mb-8">
              {t('candidatura.title')}
            </h1>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-1">{t('candidatura.nome')}</label>
                  <input name="nome" value={formData.nome} onChange={handleInputChange} className="w-full rounded-lg bg-gray-50 border border-gray-100 p-3" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">{t('candidatura.cognome')}</label>
                  <input name="cognome" value={formData.cognome} onChange={handleInputChange} className="w-full rounded-lg bg-gray-50 border border-gray-100 p-3" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">{t('candidatura.email')} <span className="text-red-500">*</span></label>
                  <input name="email" type="email" value={formData.email} onChange={handleInputChange} required className="w-full rounded-lg bg-gray-50 border border-gray-100 p-3" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">{t('candidatura.telefono')}</label>
                  <input name="telefono" value={formData.telefono} onChange={handleInputChange} className="w-full rounded-lg bg-gray-50 border border-gray-100 p-3" />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-1">{t('candidatura.indirizzo')}</label>
                <input name="indirizzo" value={formData.indirizzo} onChange={handleInputChange} className="w-full rounded-lg bg-gray-50 border border-gray-100 p-3" />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">{t('candidatura.domande')}</label>
                <textarea name="domande" value={formData.domande} onChange={handleInputChange} className="w-full rounded-lg bg-gray-50 border border-gray-100 p-3 min-h-[100px]" />
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" name="privacy" checked={formData.privacy} onChange={handleInputChange} required />
                <span
                  className="text-sm text-gray-700"
                  dangerouslySetInnerHTML={{
                    __html: t('candidatura.privacy').replace(
                      /(https:\/\/se-investing\.github\.io\/se-investing\/PrivacyPolicy)/,
                      (url) => `<a href="${url}" target="_blank" rel="noopener noreferrer" class="underline text-blue-600 hover:text-blue-800">${t('privacyPolicy.title')}</a>`
                    )
                  }}
                />
              </div>
              <button type="submit" className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-8 py-3 rounded-lg" disabled={isSubmitting}>
                {isSubmitting ? t('candidatura.invio') : t('candidatura.invia')}
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
