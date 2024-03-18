import { Newsletter } from "./Newsletter";
import styles from "./UpcomingComponent.module.css";

export const UpcomingComponent = () => {
  return (
    <section className={styles.section}>
      <div className={styles.blur__overlay}></div>
      <div className={styles.container}>
        <p className={styles.new} data-aos="fade-down" data-aos-duration="1000">
          NOUVEAU
        </p>
        <p
          className={`${styles.title} animate__pulse animate__animated animate__infinite`}
          data-aos="fade-down"
          data-aos-duration="1100"
        >
          Bientôt disponible
        </p>
        <p
          className={styles.description}
          data-aos="fade-down"
          data-aos-duration="1200"
        >
          Améliorez vos soins de peau cet été avec notre nouvelle collection
          pour garder votre peau rafraîchie, hydratée et protégée du soleil.
        </p>
        <p
          className={styles.description}
          data-aos="fade-down"
          data-aos-duration="1300"
        >
          Restez une longueur d&apos;avance – inscrivez-vous à notre newsletter
          pour recevoir une réduction exclusive de{" "}
          <span className="font-bold">10% lors</span> du lancement.
        </p>
        <Newsletter />
      </div>
    </section>
  );
};
