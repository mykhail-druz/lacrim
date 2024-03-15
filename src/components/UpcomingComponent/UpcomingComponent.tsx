import { Newsletter } from "./Newsletter";
import styles from "./UpcomingComponent.module.css";

export const UpcomingComponent = () => {
  return (
    <section className={styles.section}>
      <div className={styles.blur__overlay}></div>
      <div className={styles.container}>
        <p className={styles.new}>New</p>
        <p className={styles.title}>Coming soon</p>
        <p className={styles.description}>
          Upgrade your summer skincare with our new collection to keep your skin
          refreshed, hydrated, and protected from the sun.
        </p>
        <p className={styles.description}>
          Stay one step ahead - sign up to our newsletter to receive an
          exclusive <span className="font-bold">10% off</span> upon release.
        </p>
        <Newsletter/>
      </div>
    </section>
  );
};
