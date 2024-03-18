import { Button } from "../Button";
import styles from "./Redefining.module.css";

export const Redefining = () => {
  return (
    <section className={`${styles.section}`} data-aos="fade-in">
      <div className="max-w-[1920px] w-full flex justify-start mx-auto">
        <div className={styles.container}>
          <h1 className={`${styles.title}`} data-aos="fade-down">
            Redéfinir le toilettage pour hommes.
          </h1>
          <h2
            className={`${styles.subtitle} w-full lg:w-full xl:w-[95%] 2xl:w-[80%] `}
            data-aos="fade-down"
          >
            Rehaussez votre routine et adoptez la confiance qui
            l&apos;accompagne.
          </h2>
          <p
            className={`${styles.description} w-full md:w-[85%] lg:w-[75%]`}
            data-aos="fade-down"
          >
            Découvrez l&apos;essence du luxe urbain dans chaque produit.
          </p>
          <div>
            <Button
              data_aos="fade-down"
              className=""
              fontSize="20px"
              buttonColor="beige"
              href="/products"
            >
              Explorez
            </Button>
          </div>
        </div>
        </div>
    </section>
  );
};
