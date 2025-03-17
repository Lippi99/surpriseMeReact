import { useTranslation } from "react-i18next";
import MyWebsites from "../Mywebsites";
import { Link } from "react-router";

const Header = () => {
  const translation = useTranslation();

  const isLogged = "authenticated";

  const handleChangeTranslation = (lang: string) => {
    translation.i18n.changeLanguage(lang || "en");
  };

  return (
    <header className="h-28">
      <div className="flex h-full justify-between items-center px-16 gap-4">
        <Link to="/">
          <img
            alt="logo"
            className="w-16 h-16 rounded-full"
            src="/icons/surpriseme_512_512.png"
          />
        </Link>

        <div className="flex gap-5 items-center">
          {isLogged && <MyWebsites />}
          <button
            aria-label="lang"
            onClick={() => handleChangeTranslation("pt")}
            type="button"
            className="cursor-pointer"
          >
            <img
              src="/images/locale/brazil.svg"
              alt="Brazil"
              className="w-8 h-38 object-cover"
            />
          </button>
          <button
            aria-label="lang"
            onClick={() => handleChangeTranslation("en")}
            type="button"
            className="cursor-pointer"
          >
            <img
              src="/images/locale/america.svg"
              alt="America"
              className="w-8 h-38 object-cover"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
