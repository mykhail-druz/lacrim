import styles from "./UpcomingComponent.module.css";

export const Newsletter = () => {
  return (
    <div className={styles.news__container}>
      <h3 className={styles.news__title}>Don&apos;t miss our summer collection!</h3>
      <p className={styles.news__description}>
        Subscribe to our newsletter to be the first to know about our latest
        news.
      </p>
      <form className={styles.form}>
        <input className={styles.form__input} placeholder="Example@gmail.com" />{" "}
        <button className={styles.button__form}>Add me now</button>
      </form>
    </div>
  );
};
