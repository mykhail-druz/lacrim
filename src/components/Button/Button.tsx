import styles from "./Button.module.css";

import React, { MouseEventHandler, ReactNode } from "react";

type ButtonProps = {
  children: React.ReactNode;
  href: string;
  buttonColor: "black" | "beige";
  fontSize: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  href,
  buttonColor,
  fontSize,
  onClick,
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
      onClick={onClick}
    >
      <a href={href} className="flex items-center space-x-2">
        {children}
      </a>
    </button>
  );
};
