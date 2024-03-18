import styles from "./AboutHero.module.css";

export const AboutHero = () => {
  return (
    <section className={styles.section} data-aos="fade-in">
      <div className={styles.container}>
        <p className={styles.essence}>Notre Essence</p>
        <h2 className={styles.title}>Authenticité & Résilience</h2>
        <p className={styles.description}>
          1908 par LACRIM est plus qu&apos;une ligne de soins pour hommes;
          c&apos;est une histoire de transformation et de persévérance.
        </p>
        <p className={styles.description}>
          Notre marque, inspirée par la vie de notre fondateur Lacrim, un
          visionnaire des paysages urbains de France, incarne un mélange de
          style urbain robuste et de luxe.
        </p>
        <p className={styles.description}>
          Nous célébrons chaque homme, encourageant un passage de l&apos;agitation de
          la vie citadine à l&apos;affinement du soin de soi.
        </p>
      </div>
    </section>
  );
};
