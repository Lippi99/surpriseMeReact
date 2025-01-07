import { Button } from "@nextui-org/react";
import { FaCheckCircle } from "react-icons/fa";

interface PlansProps {
  title: string;
  price: string;
  benefits: string[];
  mostPicked: boolean;
  onSetPlanUrl: (url: string) => void;
}

const Plans = ({
  title,
  price,
  benefits,
  mostPicked,
  onSetPlanUrl,
}: PlansProps) => {
  const handleSetPlanUrl = () => {
    if (mostPicked) {
      onSetPlanUrl("/create?plan=Premium");
    } else {
      onSetPlanUrl("/create?plan=Basic");
    }
  };

  return (
    <div
      className={`dark:bg-zinc-800 w-full border-2 rounded-xl p-5 ${
        mostPicked ? "border-[#FF4E6D]" : "border-[#ccc]"
      }`}
    >
      <div className="flex justify-between">
        <h3 className="text-2xl mb-5">{title}</h3>
        {mostPicked && (
          <span className="bg-[#FF4E6D] rounded-full py-1 px-3 flex items-center font-bold">
            Premium
          </span>
        )}
      </div>
      <span className="text-5xl font-extrabold mb-10 inline-block">
        {price}
      </span>
      <ul className="mb-10 flex flex-col gap-3">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-center gap-3">
            <FaCheckCircle className="w-5 h-5" />
            <span className="text-2xl">{benefit}</span>
          </li>
        ))}
      </ul>
      <Button
        onPress={handleSetPlanUrl}
        className="py-5 dark:text-white font-bold text-2xl dark:bg-[#FF4E6D] dark:hover:bg-[#FF4E6D]"
      >
        Choose Plan
      </Button>
    </div>
  );
};

export default Plans;
