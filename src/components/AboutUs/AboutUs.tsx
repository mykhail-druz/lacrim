import { Button } from "@/components";
import styles from "./AboutUs.module.css";
import Image from "next/image";

export const AboutUs = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Image
          src="/images/about/positive.webp"
          alt="Positive"
          width={400}
          height={400}
          data-aos="fade-right"
        />
        <div className={styles.text__container} data-aos="fade-right">
          <h3 className={styles.title}>Positive Masculinity</h3>
          <p className={styles.description}>
            Boost your confidence and self-esteem with 1908 by LACRIM.
          </p>
          <p className={styles.description}>
            Each of our products is crafted to instill a sense of well-being and
            luxury.
          </p>
          <p className={styles.description}>
            Discover our diverse collection and unlock the feeling of comfort
            and confidence within your own skin.
          </p>
        </div>
      </div>
      <div className={styles.container__reverse}>
        <Image
          src="/images/about/natural.webp"
          alt="Positive"
          width={400}
          height={400}
          data-aos="fade-left"
        />
        <div className={styles.text__container} data-aos="fade-left">
          <h3 className={styles.title}>
            Natural Ingredients, Tailored for You
          </h3>
          <p className={styles.description}>
            Our skincare line is crafted with natural ingredients, each selected
            for its unique benefits.
          </p>
          <p className={styles.description}>
            From the rejuvenating power of essential oils to the purifying
            properties of activated charcoal, our products are designed to cater
            to your everyday needs.
          </p>
        </div>
      </div>
      <div className={styles.container}>
        <Image
          src="/images/about/good.webp"
          alt="Positive"
          width={400}
          height={400}
          data-aos="fade-right"
        />
        <div className={styles.text__container} data-aos="fade-right">
          <h3 className={styles.title}>Positive Masculinity</h3>
          <p className={styles.description}>
            Boost your confidence and self-esteem with 1908 by LACRIM.
          </p>
          <p className={styles.description}>
            Each of our products is crafted to instill a sense of well-being and
            luxury.
          </p>
          <p className={styles.description}>
            Discover our diverse collection and unlock the feeling of comfort
            and confidence within your own skin.
          </p>
          <div>
            <Button fontSize="20px" buttonColor="beige" href="/products">
              Visit our store
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
