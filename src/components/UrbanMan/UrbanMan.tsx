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
            image="/images/home/groomed.webp"
            title="Groomed"
            description="Soft & Nourished"
            buttonText="Shop The Beard Oil Activator"
            href="#"
          />
          <Card
            image="/images/home/strong.webp"
            title="Strong"
            description="Resilient & Rejuvenated"
            buttonText="Shop The Fortifying Shampoo"
            href="#"
          />
          <Card
            image="/images/home/vibrant.webp"
            title="Vibrant"
            description="Conditioned & Restored"
            buttonText="Shop The Hair Mask"
            href="#"
          />
          <Card
            image="/images/home/clean.webp"
            title="Clean"
            description="Fresh & Radiant"
            buttonText="Shop The Purifying Face Mask"
            href="#"
          />
        </div>
      </div>
    </section>
  );
};
