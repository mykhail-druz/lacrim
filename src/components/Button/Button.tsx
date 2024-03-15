import styles from "./Button.module.css";

import React, { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href: string;
  buttonColor: "black" | "beige";
  fontSize: string;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  href,
  buttonColor,
  fontSize,
}) => {
  const style = {
    fontSize: fontSize,
  };
  return (
    <button
      className={`${
        buttonColor === "black" ? styles.buttonBlack : styles.buttonBeige
      }`}
      style={style}
    >
      <a href={href}>{children}</a>
    </button>
  );
};
