
import { Shield, Clock, Award } from "lucide-react";
import { useTranslation } from "react-i18next";

const TrustBadges = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-wrap justify-center gap-6 mt-8">
      <div className="flex flex-col items-center">
        <span className="text-3xl">🏆</span>
        <span className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">{t('trustBadges.experience')}</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-3xl">✅</span>
        <span className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">{t('trustBadges.reliability')}</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-3xl">🤝</span>
        <span className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">{t('trustBadges.clients')}</span>
      </div>
    </div>
  );
};

export default TrustBadges;