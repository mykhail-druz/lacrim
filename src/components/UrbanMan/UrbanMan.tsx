import { Card } from "./Card";
import styles from "./UrbanMan.module.css";

export const UrbanMan = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={`${styles.title}`}>For the urban man</h2>
        <p className={`${styles.subtitle}`}>Explore all products</p>
        <div className={styles.card__container}>
          <Card
            image="/images/home/groomed.webp"
            title="Groomed"
            description="Soft & Nourished"
            buttonText="Beard Oil Activator"
            href="/products"
          />
          <Card
            image="/images/home/strong.webp"
            title="Strong"
            description="Resilient & Rejuvenated"
            buttonText="Fortifying Shampoo"
            href="/products"
          />
          <Card
            image="/images/home/vibrant.webp"
            title="Vibrant"
            description="Conditioned & Restored"
            buttonText="Hair Mask"
            href="/products"
          />
          <Card
            image="/images/home/clean.webp"
            title="Clean"
            description="Fresh & Radiant"
            buttonText="Purifying Face Mask"
            href="/products"
          />
        </div>
      </div>
    </section>
  );
};
