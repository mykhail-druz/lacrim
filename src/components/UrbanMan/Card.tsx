import React from "react";
import Image from "next/image";
import { Button } from "../Button";

import styles from "./UrbanMan.module.css";

interface CardProps {
  image: string;
  title: string;
  description: string;
  buttonText: string;
  href: string;
}

export const Card: React.FC<CardProps> = ({
  image,
  title,
  description,
  buttonText,
  href,
}) => {
  return (
    <div className={styles.card}>
      {image && (
        <Image src={image} alt={title || ""} width={350} height={450} />
      )}
      <div className={styles.text__container}>
        {title && <h2 className={styles.card__title}>{title}</h2>}
        {description && (
          <p className={styles.card__description}>{description}</p>
        )}
        {buttonText && (
          <Button fontSize="16px" buttonColor="beige" href={href}>
            {buttonText}
          </Button>
        )}
      </div>
    </div>
  );
};
