import type { ButtonType } from "../types/button";

export const Button = ({ text, Icon }: ButtonType) => {
  return (
    <button className="bg-white text-black rounded-full p-4 flex justify-center items-center gap-2">
      <Icon size={22} />
      <p>{text}</p>
    </button>
  );
};
