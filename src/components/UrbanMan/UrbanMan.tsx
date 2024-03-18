import { Card } from "./Card";
import styles from "./UrbanMan.module.css";

export const UrbanMan = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={`${styles.title}`} data-aos='fade-down'>Pour les Hommes Urbains</h2>
        <p className={`${styles.subtitle}`} data-aos='fade-down'>Explorez tous les produits</p>
        <div className={styles.card__container}>
          <Card
            image="/images/home/groomed.webp"
            title="Soigné"
            description="Doux & Nourri"
            buttonText="L'activateur d'huile pour barbe"
            href="/products"

          />
          <Card
            image="/images/home/strong.webp"
            title="Fort"
            description="Résilient & Rajeuni"
            buttonText="Le masque pour cheveux"
            href="/products"

          />
          <Card
            image="/images/home/vibrant.webp"
            title="Vibrant"
            description="Conditionné & Restauré"
            buttonText="Le shampooing fortifiant"
            href="/products"

          />
          <Card
            image="/images/home/clean.webp"
            title="Propre"
            description="Frais & Radieux"
            buttonText="Le masque purifiant pour le visage"
            href="/products"

          />
        </div>
      </div>
    </section>
  );
};
