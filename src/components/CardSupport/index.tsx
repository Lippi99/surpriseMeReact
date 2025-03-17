interface CardSupportProps {
  title: string;
}

const CardSupport = ({ title }: CardSupportProps) => {
  return (
    <div className="h-56 w-full border-4 border-[#FF4E6D]">
      <div className="p-7 h-full w-full dark:bg-zinc-800">
        <h1 className="text-2xl font-black text-white">{title}</h1>
      </div>
    </div>
  );
};

export default CardSupport;
