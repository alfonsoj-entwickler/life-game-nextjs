import { ReactNode } from "react";

type Props = {
  text: string;
  border?: boolean;
  call?: () => void;
  children?: ReactNode;
};

const Button = ({ text, border = false, call, children }: Props) => {
  return (
    <button type="button" aria-label={text} className="flex justify-center items-center space-x-2 text-lg font-medium">
      {children}
      <span>{text}</span>
    </button>
  );
};

export default Button;
