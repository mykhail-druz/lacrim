import { Button } from "../Button";
import styles from "./Redefining.module.css";

export const Redefining = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={`${styles.title}`}>Redefining men's grooming.</h1>
        <h2 className={`${styles.subtitle} w-full md:w-[90%] lg:w-[80%]`}>
          Elevate your routine and embrace the confidencethat comes with it.
        </h2>
        <p className={`${styles.description} w-full md:w-[85%] lg:w-[75%]`}>
          Discover the Essence of Urban Luxury in Every Product.
        </p>
        <div>
          <Button fontSize="20px" buttonColor="beige" href="#">
            Explore
          </Button>
        </div>
      </div>
    </section>
  );
};
