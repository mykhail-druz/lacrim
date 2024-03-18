"use client";
import styles from "./Footer.module.css";
import { Button } from "@/components";
import ArrowTop from "@/icons/arrow_top.svg";
import Youtube from "@/icons/footer/ant-design_youtube-filled.svg";
import Facebook from "@/icons/footer/bxl_facebook.svg";
import Instagram from "@/icons/footer/ri_instagram-line.svg";
import Twitter from "@/icons/footer/ri_twitter-x-fill.svg";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="space-y-3 w-full md:w-[95%]">
        <h1 className={styles.title}>Rejoignez le Mouvement 1908</h1>
        <div>
          <p className={styles.desc}>
            Embrassez le soin de soi avec 1908 par LACRIM.
          </p>
          <p className={styles.desc}>
            La routine de toilettage où le luxe et la vie urbaine se
            rencontrent.
          </p>
        </div>
        <Button
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({
              top: 0,
            });
          }}
          href={""}
          buttonColor={"beige"}
          fontSize={"16"}
        >
          <span>Retour en haut</span> <ArrowTop />
        </Button>
      </div>
      <div className={styles.links__block}>
        <div className={styles.contact__links}>
          <h1 className={styles.title__links}>Contactez nous</h1>
          <hr className={styles.hr} />
          <a className={styles.link} href="">
            Contactez nous
          </a>
          <a className={styles.link} href="">
          Carrière
          </a>
        </div>
        <div className={styles.social__links__block}>
          <h1 className={styles.title__links}>Suivez nous</h1>
          <hr className={styles.hr} />
          <div className={styles.social__links}>
            <a className={styles.link} href="">
              <Facebook />
            </a>
            <a className={styles.link} href="">
              <Twitter />
            </a>
            <a className={styles.link} href="">
              <Instagram />
            </a>
            <a className={styles.link} href="">
              <Youtube />
            </a>
          </div>
        </div>
        <div className={styles.menu__links}>
          <h1 className={styles.title__links}>Menu</h1>
          <hr className={styles.hr} />
          <nav className={styles.menu__links}>
            <a className={styles.link} href="/">
              Maison
            </a>
            <a className={styles.link} href="/about">
              Histoire{" "}
            </a>
            <a className={styles.link} href="">
              Boutique
            </a>
            <a className={styles.link} href="/products">
              Produits
            </a>
            {/* <a className={styles.link} href="/about">
            About us
          </a> */}
          </nav>
        </div>
        <div className={styles.legal__links}>
          <h1 className={styles.title__links}>Légal</h1>
          <hr className={styles.hr} />
          <a className={styles.link} href="">
            Termes légaux{" "}
          </a>
          <a className={styles.link} href="">
            Politique de confidentialité{" "}
          </a>
          <a className={styles.link} href="">
            Avis sur la gestion des cookies{" "}
          </a>
          <a className={styles.link} href="">
            FAQ
          </a>
        </div>
      </div>
      <div className={styles.newsletter__block}>
        <h1 className={styles.newsletter_title}>Newsletter</h1>
        <hr className={styles.hr} />
        <div className="space-y-2 pt-2">
          <input
            type="text"
            placeholder="Enter Email"
            className={styles.input}
          />
          <p className={styles.desc__form}>
            Lorem ipsum dolor sit amet consectetur. Ridiculus molestie orci
            felis hendrerit adipiscing tempus rhoncus eget et. Eu auctor odio
            accumsan nunc sed ultrices eget enim. Porttitor vitae eu proin
            ultrices blandit adipiscing massa diam ullamcorper. Varius gravida
            id at nam enim pretium accumsan fames.
          </p>
          <form className="flex space-x-[20px] items-center pt-4">
            <input
              id="unique-checkbox-id"
              type="checkbox"
              name="unique-checkbox-id"
            />
            <label
              htmlFor="unique-checkbox-id"
              className="text-white cursor-pointer text-[14px]"
            >
              Lorem ipsum dolor sit amet consectetur. Ridiculus molestie orci
            </label>
          </form>
          <div className="pt-4">
            <Button href={""} buttonColor={"beige"} fontSize={"16px"}>
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};
