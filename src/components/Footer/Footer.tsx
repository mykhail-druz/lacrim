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
      <div className="space-y-3">
        <h1 className={styles.title}>Join the 1908 Movement</h1>
        <div>
          <p className={styles.desc}>Embrace self-care with 1908 by LACRIM.</p>
          <p className={styles.desc}>
            The grooming routine where luxury and urban life meet.
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
          <span>Back to top</span> <ArrowTop />
        </Button>
      </div>
      <div className={styles.links__block}>
        <div className={styles.contact__links}>
          <h1 className={styles.title__links}>Contact us</h1>
          <hr className={styles.hr} />
          <a className={styles.link} href="">
            Contact us
          </a>
        </div>
        <div className={styles.social__links__block}>
          <h1 className={styles.title__links}>Follow us</h1>
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
              Home
            </a>
            <a className={styles.link} href="/about">
              Our Story
            </a>
            <a className={styles.link} href="">
              Shop
            </a>
            <a className={styles.link} href="/products">
              Products
            </a>
            {/* <a className={styles.link} href="/about">
            About us
          </a> */}
          </nav>
        </div>
        <div className={styles.legal__links}>
          <h1 className={styles.title__links}>Legal</h1>
          <hr className={styles.hr} />
          <a className={styles.link} href="">
            Legal terms
          </a>
          <a className={styles.link} href="">
            Privacy Policy
          </a>
          <a className={styles.link} href="">
            Notice about cookie management
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
          <form className="flex space-x-[20px] items-center">
            <input
              id="unique-checkbox-id"
              type="checkbox"

              name="unique-checkbox-id"
            />
            <label htmlFor="unique-checkbox-id" className="text-white cursor-pointer">
              Lorem ipsum dolor sit amet consectetur. Ridiculus molestie orci
            </label>
          </form>
          <Button href={""} buttonColor={"beige"} fontSize={"20"}>
            Sign Up
          </Button>
        </div>
      </div>
    </footer>
  );
};
