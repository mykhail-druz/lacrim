import styles from "./UrbanSkinkare.module.css";
import { elza, elzaBold } from "@/fonts";

import { Button } from "../Button";

export const UrbanSkinkare = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={`${styles.p__new} ${elza.className}`}>NEW</p>
        <h1 className={`${styles.title} ${elzaBold.className}`}>
          Urban inspired skeenkare.
        </h1>
        <div className={`${styles.description}`}>
          <p className="w-full md:w-[90%] lg:w-[80%]">
            The elegance of luxury and the edge of urbane style in your grooming
            routine.
          </p>
          <p className="w-full md:w-[85%] lg:w-[75%]">
            Our products are tailored to meet the needs of the urban man who
            values both aesthetics and functionality in his skincare.
          </p>
        </div>
        <Button href="#">
            Explore
        </Button>
      </div>
    </section>
  );
};
