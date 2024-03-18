import styles from "./UpcomingComponent.module.css";

export const Newsletter = () => {
  return (
    <div
      className={styles.news__container}
      data-aos="fade-down"
      data-aos-duration="1400"
    >
      <h3 className={styles.news__title}>
      Ne manquez pas notre collection d&apos;été !
      </h3>
      <p className={styles.news__description}>
      Inscrivez-vous à notre newsletter pour être le premier informé de nos dernières nouveautés.
      </p>
      <form className={styles.form}>
        <input className={styles.form__input} placeholder="Example@gmail.com" />{" "}
        <button className={styles.button__form}>M&apos;ajouter maintenant</button>
      </form>
    </div>
  );
};
