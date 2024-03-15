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
        <Button href={"#up"} buttonColor={"beige"} fontSize={"16"}>
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
          <a className={styles.link} href="">
            Home
          </a>
          <a className={styles.link} href="">
            Our Story
          </a>
          <a className={styles.link} href="">
            Shop
          </a>
          <a className={styles.link} href="">
            Products
          </a>
          <a className={styles.link} href="">
            About us
          </a>
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
                <input type="text" placeholder="Enter Email" className={styles.input} />
                  <p className={styles.desc__form}>Lorem ipsum dolor sit amet consectetur. Ridiculus
                      molestie orci felis hendrerit adipiscing tempus rhoncus
                      eget et. Eu auctor odio accumsan nunc sed ultrices eget
                      enim. Porttitor vitae eu proin ultrices blandit adipiscing
                      massa diam ullamcorper. Varius gravida id at nam enim
                      pretium accumsan fames.</p>
                  <div className="flex space-x-2"><input type="checkbox" /> <p className="text-white">Lorem ipsum dolor sit amet consectetur. Ridiculus
                      molestie orci </p></div>
                  <Button href={""} buttonColor={"beige"} fontSize={"20"}>Sign Up</Button>
              </div>
      </div>
    </footer>
  );
};
