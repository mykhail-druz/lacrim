import { Button } from "@/components/Button";
import styles from "./ComingSoon.module.css";

export const ComingSoon = () => {
  return (
    <section className={styles.section}>
      <div className={styles.blur__overlay}></div>
      <div className={styles.container}>
        <p className={`${styles.title} animate__pulse animate__animated animate__infinite`}>Coming soon</p>
        <p className={`${styles.description}`}>summer collection</p>
        <div>
          {" "}
          <Button fontSize="16px" buttonColor="black" href="/upcoming">
            Discover
          </Button>
        </div>
      </div>
    </section>
  );
};
