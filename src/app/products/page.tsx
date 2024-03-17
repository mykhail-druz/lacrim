import Layout from "@/layout/Layout";
import styles from "./product.module.css";
import { Button } from "@/components";

export default function Products() {
  return (
    <Layout activeNavBtn="products" headerType="secondary">
      <div className={styles.bg__block}>
        <div className={styles.first__block}>
          <div className={styles.text__block}>
            <h1 className={styles.title}>Beard Oil Activator</h1>
            <p className={styles.desc}>Softens hair & supports beard growth.</p>
            <Button href={"/"} buttonColor={"beige"} fontSize={"18"}>
              Discover
            </Button>
          </div>
          <img src="/images/products/hand_top.png" alt="Activator" />
        </div>
        <div className={styles.second__block}>
          <img src="/images/products/face.png" alt="Face cream" />
          <div className={styles.text__block}>
            <h1 className={styles.title}>Purifying Face Mask</h1>
            <p className={styles.desc}>Eliminates impurities, exfoliates & tightens pores.</p>
            <Button href={"/"} buttonColor={"beige"} fontSize={"18"}>
              Discover
            </Button>
          </div>
         
        </div>
        <div className={styles.third__block}>
          
          <div className={styles.text__block}>
            <h1 className={styles.title}>Purifying Face Mask</h1>
            <p className={styles.desc}>Eliminates impurities, exfoliates & tightens pores.</p>
            <Button href={"/"} buttonColor={"beige"} fontSize={"18"}>
              Discover
            </Button>
          </div>
          <img src="/images/products/hair_mask.png" alt="Face cream" />
        </div>
        <div className={styles.fourth__block}>
          <img src="/images/products/shampo_hand.png" alt="Activator" />
          <div className={styles.text__block}>
            <h1 className={styles.title}>Fortifying Shampoo</h1>
            <p className={styles.desc}>Cleanses, purifies & rejuvenates hair growth.</p>
            <Button href={"/"} buttonColor={"beige"} fontSize={"18"}>
              Discover
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
