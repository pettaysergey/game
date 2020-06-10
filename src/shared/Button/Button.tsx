import React from "react";
import s from "./button.module.scss";

export interface ButtonProps {
  onClick?: () => void;
  text: string;
}

const Button: React.SFC<ButtonProps> = ({ onClick, text }) => {
  return (
    <button onClick={onClick} className={s.button}>
      {text}
    </button>
  );
};

export default Button;
