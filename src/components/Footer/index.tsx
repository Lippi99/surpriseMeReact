import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  const navigation = {
    socialMedia: [
      {
        icon: (
          <img
            className="w-8 h-8 object-cover"
            src="/images/social-media/instagram.svg"
            alt="instagram"
          />
        ),
        href: "#",
      },
      {
        icon: (
          <img
            className="w-8 h-8 object-cover"
            src="/images/social-media/facebook.svg"
            alt="facebook"
          />
        ),
        href: "#",
      },
      {
        icon: (
          <img
            className="w-8 h-8 object-cover"
            src="/images/social-media/tiktok.svg"
            alt="tiktok"
          />
        ),
        href: "#",
      },
    ],
    support: [
      {
        icon: (
          <img
            className="w-8 h-8 object-cover"
            src="/images/social-media/whatsapp.svg"
            alt="whatsapp"
          />
        ),
        href: "#",
      },
    ],
    legal: [
      { name: t("footer.legal.termsOfService"), href: "/term-services" },
      { name: t("footer.legal.privacyPolicy"), href: "/privacy-policy" },
    ],
  };

  return (
    <footer className="mt-32 pt-10 border-t-2 border-[#FF4E6D]">
      <div className="mx-auto max-w-7xl px-6 pb-16 lg:px-4">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-white">
                  {t("footer.socialMedia")}
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.socialMedia.map((item, index) => (
                    <li
                      key={`social-${index}`} // Unique key
                      className="flex gap-4 items-center"
                    >
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={item.href}
                        className="text-sm text-gray-400 hover:text-white"
                      >
                        {item.icon}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold text-white">
                  {t("footer.support")}
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.support.map((item, index) => (
                    <li key={`support-${index}`}>
                      {" "}
                      {/* Unique key */}
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={item.href}
                        className="text-sm text-gray-400 hover:text-white"
                      >
                        {item.icon}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold text-white">
                  {t("footer.legal.title")}
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.href}>
                      {" "}
                      {/* Legal links already have unique href */}
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={item.href}
                        className="text-sm text-gray-400 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
