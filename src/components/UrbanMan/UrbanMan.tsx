import styles from "./UrbanMan.module.css";
import { elza, elzaBold } from "@/fonts";

export const UrbanMan = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={`${styles.title} ${elzaBold.className}`}>
          For the urban man
        </h2>
        <p className={`${styles.subtitle} ${elza.className}`}>
          Explore all products
        </p>
        <div>{/* CARDS */}</div>
      </div>
    </section>
  );
};
