import styles from "./UrbanSkinkare.module.css";

import { Button } from "../Button";

export const UrbanSkinkare = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={`${styles.p__new}`}>NEW</p>
        <h1 className={`${styles.title}`}>Urban inspired skeenkare.</h1>
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
        <Button fontSize="20px" buttonColor="beige" href="#">
          Explore
        </Button>
      </div>
    </section>
  );
};
