type GradientTextProps = {
  title: string;
  fontSize?: string;
};

const GradientText = ({ title, fontSize }: GradientTextProps) => {
  return (
    <p
      className={`text-gray-800 font-bold ${fontSize ? fontSize : "text-xl"} `}
    >
      <span className="relative inline-flex sm:inline">
        <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
        <span className="relative">{title}</span>
      </span>
    </p>
  );
};

export default GradientText;
