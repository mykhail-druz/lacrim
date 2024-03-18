import styles from "./AboutHero.module.css";

export const AboutHero = () => {
  return (
    <section className={styles.section}>
      <div className="max-w-[1920px] flex mx-auto">
      <div className={styles.container}>
        <p
          className={styles.essence}
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          Notre Essence
        </p>
        <h2
          className={styles.title}
          data-aos="fade-down"
          data-aos-duration="1100"
        >
          Authenticité & Résilience
        </h2>
        <p
          className={styles.description}
          data-aos="fade-down"
          data-aos-duration="1200"
        >
          1908 par LACRIM est plus qu&apos;une ligne de soins pour hommes;
          c&apos;est une histoire de transformation et de persévérance.
        </p>
        <p
          className={styles.description}
          data-aos="fade-down"
          data-aos-duration="1300"
        >
          Notre marque, inspirée par la vie de notre fondateur Lacrim, un
          visionnaire des paysages urbains de France, incarne un mélange de
          style urbain robuste et de luxe.
        </p>
        <p
          className={styles.description}
          data-aos="fade-down"
          data-aos-duration="1400"
        >
          Nous célébrons chaque homme, encourageant un passage de
          l&apos;agitation de la vie citadine à l&apos;affinement du soin de
          soi.
        </p>
      </div>
      </div>
    </section>
  );
};
