import { Button } from "../Button";
import styles from "./Redefining.module.css";

import { elza, elzaBold } from "@/fonts";

export const Redefining = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={`${styles.title} ${elzaBold.className}`}>
          Redefining mens grooming.
        </h1>
        <h2 className={`${styles.subtitle} ${elza.className} w-full md:w-[90%] lg:w-[80%]`}>
          Elevate your routine and embrace the confidencethat comes with it.
        </h2>
        <p className={`${styles.description} ${elza.className} w-full md:w-[85%] lg:w-[75%]`}>
          Discover the Essence of Urban Luxury in Every Product.
        </p>
        <div>
        <Button href="#">Explore</Button>
        </div>
      </div>
    </section>
  );
};
