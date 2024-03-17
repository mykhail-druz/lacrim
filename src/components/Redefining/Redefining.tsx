import { Button } from "../Button";
import styles from "./Redefining.module.css";

export const Redefining = () => {
  return (
    <section className={`${styles.section}`} data-aos="fade-in">
      <div className={styles.container}>
        <h1 className={`${styles.title}`} data-aos="fade-down">Redefining men&apos;s grooming.</h1>
        <h2 className={`${styles.subtitle} w-full lg:w-full xl:w-[95%] 2xl:w-[80%] `} data-aos="fade-down">
          Elevate your routine and embrace the confidencethat comes with it.
        </h2>
        <p className={`${styles.description} w-full md:w-[85%] lg:w-[75%]`} data-aos="fade-down">
          Discover the Essence of Urban Luxury in Every Product.
        </p>
        <div>
          <Button data_aos="fade-down" className="" fontSize="20px" buttonColor="beige" href="/products">
            Explore
          </Button>
        </div>
      </div>
    </section>
  );
};
