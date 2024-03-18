"use client";
import Layout from "@/layout/Layout";
import styles from "./product.module.css";
import { Button } from "@/components";
import "animate.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Products() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);
  return (
    <Layout activeNavBtn="products" headerType="secondary">
      <div className={styles.bg__block}>
        <div className={styles.first__block}>
          <div className={styles.text__block}>
            <h1 className={`${styles.title}`} data-aos="fade-right">
              Huile Activateur de Barbe
            </h1>
            <p className={`${styles.desc}`} data-aos="fade-right">
              Assouplit les cheveux et favorise la croissance de la barbe.
            </p>
            <div>
              <Button
                data_aos="fade-right"
                href={"/"}
                buttonColor={"beige"}
                fontSize={"18"}
              >
                Découvrir
              </Button>
            </div>
          </div>
          <img
            src="/images/products/hand_top.png"
            alt="Activator"
            className={"lg:block hidden"}
          />
        </div>
        <div className={styles.second__block}>
          <img
            src="/images/products/face.png"
            alt="Face cream"
            className={"lg:block hidden"}
          />
          <div className={styles.text__block}>
            <h1 className={`${styles.title}`} data-aos="fade-left">
              Masque Purifiant pour le Visage
            </h1>
            <p className={`${styles.desc}`} data-aos="fade-left">
              Élimine les impuretés, exfolie et resserre les pores.
            </p>
            <div>
              <Button
                data_aos="fade-left"
                href={"/"}
                buttonColor={"beige"}
                fontSize={"18"}
              >
                Découvrir
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.third__block}>
          <div className={styles.text__block}>
            <h1 className={`${styles.title}`} data-aos="fade-left">
              Masque pour Cheveux
            </h1>
            <p className={`${styles.desc}`} data-aos="fade-left">
              Conditionne en profondeur, améliore la brillance et l&apos;élasticité
              des cheveux.
            </p>
            <div>
              <Button
                data_aos="fade-left"
                href={"/"}
                buttonColor={"beige"}
                fontSize={"18"}
              >
                Découvrir
              </Button>
            </div>
          </div>
          <img
            src="/images/products/hair_mask.png"
            alt="Face cream"
            className={"lg:block hidden"}
          />
        </div>
        <div className={styles.fourth__block}>
          <img
            src="/images/products/shampo_hand.png"
            alt="Activator"
            className={"lg:block hidden"}
          />
          <div className={styles.text__block}>
            <h1 className={`${styles.title}`} data-aos="fade-left">
              Shampoing Fortifiant
            </h1>
            <p className={`${styles.desc}`} data-aos="fade-left">
              Nettoie, purifie et revitalise la croissance des cheveux.
            </p>
            <div>
              <Button
                data_aos="fade-left"
                href={"/"}
                buttonColor={"beige"}
                fontSize={"18"}
              >
                Découvrir
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
