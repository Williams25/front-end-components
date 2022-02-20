import { ButtonHTMLAttributes } from "react";
import { Content } from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: "button-primary" | "button-secondary" | "button-dark";
  title: string;
};

export const Button = ({ variant, title, ...rest }: ButtonProps) => {
  return (
    <Content>
      <button {...rest} className={`button  ${variant}`}>
        <span>{title}</span>
      </button>
    </Content>
  );
};
