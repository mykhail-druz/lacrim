import styles from "./Button.module.css"

import React, {ReactNode} from "react";

type ButtonProps = {
    children: ReactNode,
}

export const Button: React.FC<ButtonProps> = ({children}) => {
  return (
    <button className={`${styles.button}`}>
      <a href="">{children}</a>
    </button>
  );
};
