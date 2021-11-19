import { ButtonHTMLAttributes } from "react";
import styles from "./styles.module.css";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: "button-primary" | "button-secondary" | "button-dark";
  title: string;
};

export const Button = ({ variant, title, ...rest }: ButtonProps) => {
  return (
    <button {...rest} className={`${styles.button}  ${styles[variant]}`}>
      <span>{title}</span>
    </button>
  );
};
