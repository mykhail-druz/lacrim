import styles from "./UrbanSkinkare.module.css";

import { Button } from "../Button";


export const UrbanSkinkare = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={`${styles.p__new}`} 
          data-aos="fade-down">NEW</p>
        <h1 className={`${styles.title}`}
          data-aos="fade-down">Urban inspired skeenkare.</h1>
        <div className={`${styles.description}`}>
          <p className="w-full md:w-[90%] lg:w-[80%]"
            data-aos="fade-down">
            The elegance of luxury and the edge of urbane style in your grooming
            routine.
          </p>
          <p className="w-full md:w-[85%] lg:w-[75%]" data-aos="fade-down">
            Our products are tailored to meet the needs of the urban man who
            values both aesthetics and functionality in his skincare.
          </p>
        </div>
        <Button data_aos="fade-down" fontSize="20px" buttonColor="beige" href="/about">
          Explore
        </Button>
      </div>
    </section>
  );
};
