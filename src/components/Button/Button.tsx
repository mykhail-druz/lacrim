import styles from "./Button.module.css";

import React, { MouseEventHandler, ReactNode } from "react";

type ButtonProps = {
  children: React.ReactNode;
  href: string;
  buttonColor: "black" | "beige";
  fontSize: string;
  className?:string;
  data_aos?:string;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  href,
  buttonColor,
  fontSize,
  className,
  data_aos
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
      data-aos={data_aos}
    >
      <a href={href} className="flex items-center space-x-2">
        {children}
      </a>
    </button>
  );
};
