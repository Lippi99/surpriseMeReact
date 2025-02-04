import { Button } from "@heroui/react";
import { useTranslation } from "react-i18next";

import Layout from "./Layout";
import Plans from "./components/PlanPrices";
import CardSupport from "./components/CardSupport";
import Faq from "./components/Faq";
import { Link } from "react-router";
function App() {
  const { t } = useTranslation();

  const locale = "en";

  const priceBasic = locale === "en" ? `$ 10` : `R$ 58`;
  function handleSetPlanUrl(url: string) {
    return url;
  }
  return (
    <Layout>
      <title>Surprise4me | Página Inicial</title>
      <section className="py-[47px] pl-24 pr-24 lg:pr-0 lg:max-w-7xl m-auto">
        <div className="flex flex-col-reverse items-center justify-center lg:flex-row">
          <div className="flex-1 my-10 flex flex-col items-center justify-center lg:justify-start lg:items-start">
            <h1 className="text-3xl w-11/12 xl:text-7xl lg:text-5xl md:text-4xl sm:text-3xl">
              {t("indexPage.sectionOne.title")}
            </h1>
            <p className="text-lg w-11/12 mt-10 xl:text-2xl lg:text-lg md:text-lg sm:text-lg lg:w-3/4">
              {t("indexPage.sectionOne.description")}
            </p>
            <div className="max-w-72 w-full mt-8">
              <Link to="/create">
                <Button
                  size="lg"
                  className="w-full h-16 text-2xl py-5 dark:text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600"
                >
                  {t("indexPage.sectionOne.button")}
                </Button>
              </Link>
            </div>
          </div>
          <img
            className="flex-1 min-w-96 w-full object-cover"
            alt="gift"
            src="/images/photo.svg"
          />
        </div>
      </section>

      <section className="py-[47px] px-10 lg:max-w-7xl lg:pl-24 m-auto">
        <h2 className="text-5xl">{t("indexPage.sectionTwo.title")}</h2>

        <div className="mt-9 grid grid-cols-1 gap-10 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
          <CardSupport title={t("indexPage.sectionTwo.descriptionOne")} />
          <CardSupport title={t("indexPage.sectionTwo.descriptionTwo")} />
          <CardSupport title={t("indexPage.sectionTwo.descriptionThree")} />
          <CardSupport title={t("indexPage.sectionTwo.descriptionFour")} />
        </div>
      </section>

      <section className="py-[187px] px-10 lg:max-w-7xl lg:pl-24 m-auto">
        <h2 className="text-center text-5xl font-bold mb-16">
          {t("indexPage.sectionThree.title")}
        </h2>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <Plans
            mostPicked={false}
            title={t("indexPage.sectionThree.basic.title")}
            price={priceBasic as string}
            benefits={[
              t("indexPage.sectionThree.basic.descriptionOne"),
              t("indexPage.sectionThree.basic.descriptionTwo"),
              t("indexPage.sectionThree.basic.descriptionThree"),
            ]}
            onSetPlanUrl={handleSetPlanUrl}
          />
          <Plans
            mostPicked
            title={t("indexPage.sectionThree.premium.title")}
            price={"R$ 58"}
            benefits={[
              t("indexPage.sectionThree.premium.descriptionOne"),
              t("indexPage.sectionThree.premium.descriptionTwo"),
              t("indexPage.sectionThree.premium.descriptionThree"),
            ]}
            onSetPlanUrl={handleSetPlanUrl}
          />
        </div>
      </section>

      <section className="py-[27px] px-10 lg:max-w-7xl lg:pl-24 m-auto">
        <h4 className="text-center text-5xl font-bold mb-10">
          {t("indexPage.sectionFour.title")}
        </h4>
        <Faq />
      </section>
    </Layout>
  );
}

export default App;
