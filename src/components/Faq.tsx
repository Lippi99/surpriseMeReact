import { useTranslation } from "react-i18next";
import { Accordion, AccordionItem } from "@nextui-org/react";

const Faq = () => {
  const { t } = useTranslation();

  const items = [
    {
      label: t("indexPage.sectionFour.title"),
      icon: "i-heroicons-information-circle",
      defaultOpen: false,
      content: t("indexPage.sectionFour.questionOne.description"),
    },
    {
      label: t("indexPage.sectionFour.questionTwo.title"),
      icon: "i-heroicons-arrow-down-tray",
      content: t("indexPage.sectionFour.questionTwo.description"),
    },
    {
      label: t("indexPage.sectionFour.questionThree.title"),
      icon: "i-heroicons-eye-dropper",
      content: t("indexPage.sectionFour.questionThree.description"),
    },
  ];

  return (
    <Accordion items={items}>
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.label}>
          <p className="truncate text-2xl"> {item.content}</p>

          <div>
            {/* <UIcon
            name="i-heroicons-chevron-right-20-solid"
            class="w-5 h-5 ms-auto transform transition-transform duration-200" /> */}
            icone
          </div>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default Faq;
