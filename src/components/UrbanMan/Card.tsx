import React from "react";
import Image from "next/image";
import { Button } from "../Button";

import styles from "./UrbanMan.module.css";

interface CardProps {
  image: string;
  title: string;
  description: string;
  buttonText: string;
}

export const Card: React.FC<CardProps> = ({ image, title, description, buttonText }) => {
  return (
    <div className={styles.card}>
      {image && <Image src={image} alt={title || ''} width={350} height={450} />}
      <div>
        {title && <h2>{title}</h2>}
        {description && <p>{description}</p>}
        {buttonText && <Button>{buttonText}</Button>}
      </div>
    </div>
  );
};
