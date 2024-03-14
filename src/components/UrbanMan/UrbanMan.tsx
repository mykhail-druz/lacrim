import { Card } from "./Card";
import styles from "./UrbanMan.module.css";
import { elza, elzaBold, elzaSemibold } from "@/fonts";

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
        <div className={styles.card__container}>
            <Card
            image="/images/home/groomed.png"
            title="Groomed"
            description="Soft & Nourished"
            buttonText="Shop The Beard Oil Activator"
            />
        </div>
      </div>
    </section>
  );
};
