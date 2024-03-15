import styles from "./AboutHero.module.css";

export const AboutHero = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.essence}>Our Essence</p>
        <h2 className={styles.title}>Authenticity and Resilience</h2>
        <p className={styles.description}>
          1908 by LACRIM is more than just a men's care line; it’s a story of
          transformation and perseverance.
        </p>
        <p className={styles.description}>
          Our brand, inspired by the life of our founder Lacrim, a visionary
          from the urban landscapes of France, embodies a blend of rugged urban
          style and luxury. 
        </p>
        <p className={styles.description}>
          We celebrate every man, encouraging a shift from the hustle of city
          life to the refinement of self-care.
        </p>
      </div>
    </section>
  );
};
