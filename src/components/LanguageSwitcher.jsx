import { useTranslation } from "react-i18next";


function LanguageSwitcher({ closeMenu }) {

  const { t } = useTranslation()
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    closeMenu();
  };

  return (
    <div className="absolute right-0 w-44 bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden">

      <button
        onClick={() => changeLanguage("es")}
        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition-colors"
      >
        <span className="text-lg">🇪🇸</span>
        <span className="text-sm font-medium text-gray-700">
        {t("navbar.idioma1")}
        </span>
      </button>

      <button
        onClick={() => changeLanguage("en")}
        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition-colors"
      >
        <span className="text-lg">🇺🇸</span>
        <span className="text-sm font-medium text-gray-700">
          {t("navbar.idioma2")}
        </span>
      </button>

    </div>
  );
}

export default LanguageSwitcher;