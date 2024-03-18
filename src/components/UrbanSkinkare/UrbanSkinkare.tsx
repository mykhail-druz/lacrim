import styles from "./UrbanSkinkare.module.css";

import { Button } from "../Button";

export const UrbanSkinkare = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={`${styles.p__new}`} data-aos="fade-down">
          NOUVEAU
        </p>
        <h1 className={`${styles.title}`} data-aos="fade-down">
          Soins de la Peau Inspirés du Style de Rue.
        </h1>
        <div className={`${styles.description}`}>
          <p className="w-full md:w-[90%] lg:w-[80%]" data-aos="fade-down">
            L&apos;élégance du luxe et le tranchant dustyle urbain dans votre
            routine de soins.
          </p>
          <p className="w-full md:w-[85%] lg:w-[75%]" data-aos="fade-down">
            Nos produits sont conçus pour répondre aux besoins de l’homme urbain
            qui valorise à la fois l’esthétique et la fonctionnalité dans ses
            soins de la peau.
          </p>
        </div>
        <Button
          data_aos="fade-down"
          fontSize="20px"
          buttonColor="beige"
          href="/about"
        >
          Découvrir
        </Button>
      </div>
    </section>
  );
};
