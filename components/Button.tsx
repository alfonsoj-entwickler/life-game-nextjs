import { ReactNode } from "react";

type Props = {
  text: string;
  border?: boolean;
  onClick?: (a: React.SyntheticEvent<HTMLButtonElement>) => unknown;
  children?: ReactNode;
};

const Button = ({ text, border = false, onClick, children }: Props) => {
  return (
    <button
      type="button"
      aria-label={text}
      onClick={onClick}
      className="flex justify-center items-center space-x-2 text-lg font-medium transition hover:text-gray-500"
    >
      {children}
      <span>{text}</span>
    </button>
  );
};

export default Button;
