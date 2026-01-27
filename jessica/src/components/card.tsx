import { ArrowRight } from "lucide-react";

type CardType = {
  title: string;
  description: string;
  Icon: any;
  button: string;
};

export const Card = ({ title, description, Icon, button }: CardType) => {
  return (
    <div className="flex gap-5">
      {/* Image */}
      <div>
        <Icon />
      </div>

      {/* Info */}
      <div className="flex flex-col w-60 justify-start items-start text-left">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p>{description}</p>
        <button className="flex py-4 text-orange-700">
          {button} <ArrowRight />
        </button>
      </div>
    </div>
  );
};
