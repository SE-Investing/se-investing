import ModernNavigation from "@/components/navigation/ModernNavigation";
import Footer from "@/components/sections/Footer";
import { ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function PrivacyPolicyPage() {
  const { t } = useTranslation();
  return (
    <div className="relative min-h-screen bg-background">
      <ModernNavigation />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 max-w-3xl mx-auto">
            {/* Back to home link */}
            <a
              href="/"
              className="flex items-center mt-0 md:mt-10 text-black font-light mb-4 w-fit hover:underline"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              {t('privacyPolicy.back')}
            </a>
            <h1 className="text-4xl md:text-5xl font-editorial text-foreground text-center mb-8">
              {t('privacyPolicy.title')}
            </h1>
            <div
              className="bg-card rounded-3xl shadow-lg p-4 md:p-8 text-justify [word-spacing:-1.5px] text-base text-muted-foreground overflow-x-auto"
              style={{ whiteSpace: "pre-line" }}
            >
              {t('privacyPolicy.body')}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
