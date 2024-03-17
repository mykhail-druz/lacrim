"use client"
import Layout from "@/layout/Layout";
import styles from "./product.module.css";
import { Button } from "@/components";
import 'animate.css';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Products() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "slide",
      once: false,
      mirror: true,
      anchorPlacement: "top-bottom",
    });
  }, []);
  return (
    <Layout activeNavBtn="products" headerType="secondary">
      <div className={styles.bg__block}>
        <div className={styles.first__block}>
          <div className={styles.text__block}>
            <h1 className={`${styles.title}`} data-aos="fade-right">Beard Oil Activator</h1>
            <p className={`${styles.desc}`} data-aos="fade-right">Softens hair & supports beard growth.</p>
            <div>
              <Button data_aos="fade-right" href={"/"} buttonColor={"beige"} fontSize={"18"}>
                Discover
              </Button>
            </div>
          </div>
          <img src="/images/products/hand_top.png" alt="Activator" className={'lg:block hidden'} />
        </div>
        <div className={styles.second__block}>
          <img src="/images/products/face.png" alt="Face cream" className={'lg:block hidden'} />
          <div className={styles.text__block}>
            <h1 className={`${styles.title}`} data-aos="fade-left">Purifying Face Mask</h1>
            <p className={`${styles.desc}`} data-aos="fade-left">Eliminates impurities, exfoliates & tightens pores.</p>
            <div>
              <Button data_aos="fade-left" href={"/"} buttonColor={"beige"} fontSize={"18"}>
                Discover
              </Button>
            </div>
          </div>
         
        </div>
        <div className={styles.third__block}>
          
          <div className={styles.text__block}>
            <h1 className={`${styles.title}`} data-aos="fade-left">Hair Mask</h1>
            <p className={`${styles.desc}`} data-aos="fade-left">Deeply conditions, improves shine & hair elasticity.</p>
            <div>
              <Button data_aos="fade-left" href={"/"} buttonColor={"beige"} fontSize={"18"}>
                Discover
              </Button>
            </div>
          </div>
          <img src="/images/products/hair_mask.png" alt="Face cream" className={'lg:block hidden'} />
        </div>
        <div className={styles.fourth__block}>
          <img src="/images/products/shampo_hand.png" alt="Activator" className={'lg:block hidden'} />
          <div className={styles.text__block}>
            <h1 className={`${styles.title}`} data-aos="fade-left">Fortifying Shampoo</h1>
            <p className={`${styles.desc}`} data-aos="fade-left">Cleanses, purifies & rejuvenates hair growth.</p>
            <div>
            <Button data_aos="fade-left" href={"/"} buttonColor={"beige"} fontSize={"18"}>
              Discover
            </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
